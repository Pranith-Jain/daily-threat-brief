#!/usr/bin/env node
/**
 * Generate a Daily Threat Brief from multiple threat intel sources.
 *
 * Reads aggregated threat intel from the public data files committed to the
 * Pranith-Jain.github.io repo (raw.githubusercontent.com — GitHub Actions
 * runners get 403 from Cloudflare for the qzz.io site, so we avoid it):
 *   - NVD recent critical CVEs    -> data/threat-intel/index.json (cveIndex)
 *   - CISA KEV new additions      -> same cveIndex (inKev / inKevSince fields)
 *   - Webamon DTB (campaign intel)-> data/webamon-dtb/index.json + briefs/<date>.json
 *   - IOC families (Daily-Hunt)   -> data/threat-intel/index.json (iocIndex)
 * and the live OpenSSF malicious-packages feed directly for supply-chain.
 *
 * Outputs a markdown brief to ./<date>/daily-threat-brief-<date>.md
 */
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = process.cwd();
const TODAY = new Date().toISOString().slice(0, 10);
const OUT_DIR = join(ROOT, TODAY);

const DATA_BASE = process.env.DATA_SOURCE_URL || 'https://raw.githubusercontent.com/Pranith-Jain/Pranith-Jain.github.io/main/public/data';
const OSSF_API = 'https://api.github.com/repos/ossf/malicious-packages';

async function fetchJson(url, opts = {}) {
  try {
    const res = await fetch(url, {
      headers: { 'user-agent': 'daily-threat-brief/1.0 (+https://github.com/Pranith-Jain/daily-threat-brief)', ...opts.headers },
      signal: AbortSignal.timeout(30000),
    });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

async function getThreatIntelIndex() {
  return fetchJson(`${DATA_BASE}/threat-intel/index.json`);
}

async function getCveData() {
  const idx = await getThreatIntelIndex();
  if (!idx?.cveIndex) return [];
  return idx.cveIndex.filter((c) => c.cvssV3Severity === 'critical').slice(0, 10);
}

async function getKevData() {
  const idx = await getThreatIntelIndex();
  if (!idx?.cveIndex) return [];
  const cutoff = new Date(Date.now() - 7 * 86400000).toISOString().slice(0, 10);
  return idx.cveIndex
    .filter((c) => c.inKev && c.inKevSince >= cutoff)
    .slice(0, 5)
    .map((c) => ({ cveId: c.cveId, vendor: c.vendor, product: c.product, shortDescription: c.description }));
}

async function getWebamonLatest() {
  const idx = await fetchJson(`${DATA_BASE}/webamon-dtb/index.json`);
  if (!idx?.briefs?.length) return null;
  const latest = idx.briefs.sort((a, b) => (a.date < b.date ? -1 : 1)).at(-1);
  return fetchJson(`${DATA_BASE}/webamon-dtb/briefs/${latest.date}.json`);
}

async function getSupplyChain() {
  const ecosystems = ['npm', 'pypi', 'rubygems', 'nuget', 'cargo'];
  const results = await Promise.allSettled(
    ecosystems.map(async (eco) => {
      const commits = await fetchJson(`${OSSF_API}/commits?path=osv/malicious/${eco}&per_page=20`, {
        headers: { Accept: 'application/vnd.github.v3+json' },
      });
      return { eco, commits: Array.isArray(commits) ? commits : [] };
    })
  );

  const seen = new Set();
  const packages = [];
  const nameOf = (msg) => {
    const clean = (n) => (n ?? '').replace(/@\d[^\s]*$/, '').trim();
    let m = /^Add analysis and IoCs for (\S+?)(?: \(MAL-|$)/.exec(msg);
    if (m) return clean(m[1]);
    m = /^Add malicious package details for (\S+?)(?: \(|$)/.exec(msg);
    if (m) return clean(m[1]);
    m = /^Add (\S+?)(?: — | \(|$)/.exec(msg);
    if (m && !/^(OSV|analysis)/.test(m[1])) return clean(m[1]);
    return null;
  };

  for (const r of results) {
    if (r.status !== 'fulfilled') continue;
    for (const c of r.value.commits) {
      const msg = c?.commit?.message ?? '';
      if (/^(Ingest|Assign|Manually|Update|Merge|Revert|Fix|Restrict|Refactor|Bump|Add OSV reports|Add README|Delete|Chore|Move)/.test(msg)) continue;
      const name = nameOf(msg);
      if (!name || seen.has(`${r.value.eco}/${name}`)) continue;
      seen.add(`${r.value.eco}/${name}`);
      packages.push({ name, ecosystem: r.value.eco, disclosedAt: c.commit.committer?.date ?? null });
      if (packages.length >= 10) return packages;
    }
  }
  return packages;
}

async function getIocFamilies() {
  const idx = await getThreatIntelIndex();
  if (!idx?.iocIndex) return [];
  return idx.iocIndex.slice(0, 5);
}

function formatNumber(n) {
  return typeof n === 'number' ? n.toLocaleString() : String(n ?? '—');
}

function generateBrief({ cves, kev, webamon, supplyChain: supply, iocs }) {
  const dayName = new Date().toLocaleDateString('en-US', { weekday: 'long', timeZone: 'UTC' });
  const dateLong = new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });

  let md = `# Daily Threat Brief — ${dayName}, ${dateLong}\n\n`;
  md += `**TLP:CLEAR** · Auto-generated from open-source threat intelligence feeds\n\n`;
  md += `Aggregated daily intelligence from NVD, CISA KEV, Webamon campaign sensors, OSSF malicious packages, and IOC family databases.\n\n`;

  md += `## 📊 By the numbers\n\n`;
  md += `- **${cves.length}** critical CVEs published recently\n`;
  md += `- **${kev.length}** new CISA KEV additions (last 7 days)\n`;
  if (webamon?.kpis?.length) {
    for (const kpi of webamon.kpis.slice(0, 4)) {
      md += `- **${formatNumber(kpi.value)}** ${kpi.label}\n`;
    }
  }
  md += `- **${supply.length}** newly disclosed malicious packages (3 days)\n`;
  md += `\n`;

  if (cves.length > 0) {
    md += `## 🔴 Critical CVEs\n\n`;
    md += `| CVE | Vendor | Product | CVSS | KEV |\n`;
    md += `|-----|--------|---------|------|-----|\n`;
    for (const cve of cves) {
      md += `| ${cve.cveId} | ${cve.vendor ?? '—'} | ${cve.product ?? '—'} | ${cve.cvssV3Score ?? '—'} | ${cve.inKev ? '⚠️ Yes' : 'No'} |\n`;
    }
    md += `\n`;
  }

  if (kev.length > 0) {
    md += `## ⚠️ CISA KEV — New Additions\n\n`;
    for (const entry of kev) {
      md += `- **${entry.cveId}** — ${entry.vendor} ${entry.product}: ${entry.shortDescription ?? entry.name} (due: ${entry.dueDate ?? 'TBD'})\n`;
    }
    md += `\n`;
  }

  if (webamon) {
    md += `## 🌐 Webamon Campaign Intelligence\n\n`;
    if (webamon.estate) {
      md += `Estate: ${formatNumber(webamon.estate.campaignsTracked)} campaigns tracked · ${formatNumber(webamon.estate.uniqueDomains)} unique domains · ${webamon.estate.percentOnline}% online\n\n`;
    }
    if (webamon.movements?.length) {
      md += `### What moved today\n\n`;
      for (const m of webamon.movements) {
        const icon = m.category === 'growth' ? '🔺' : m.category === 'takedown' ? '🔻' : m.category === 'infra-rotation' ? '🔁' : '🎭';
        md += `${icon} **${m.title}** — ${m.detail}\n\n`;
      }
    }
    if (webamon.campaigns?.length) {
      md += `### Campaigns worth a look\n\n`;
      for (const c of webamon.campaigns) {
        md += `**[${c.name}](${c.url})** — ${c.summary}\n\n`;
      }
    }
  }

  if (supply.length > 0) {
    md += `## 📦 Supply-Chain — Malicious Packages\n\n`;
    md += `| Package | Ecosystem | Disclosed |\n`;
    md += `|---------|-----------|----------|\n`;
    for (const pkg of supply) {
      md += `| ${pkg.name ?? pkg.package ?? '—'} | ${pkg.ecosystem ?? '—'} | ${pkg.disclosedAt?.slice(0, 10) ?? '—'} |\n`;
    }
    md += `\n`;
  }

  if (iocs.length > 0) {
    md += `## 🦠 IOC Families\n\n`;
    for (const ioc of iocs) {
      md += `- **${ioc.family}** (${ioc.category}) — ${ioc.indicatorCount} indicators`;
      if (ioc.aliases?.length) md += ` · aliases: ${ioc.aliases.slice(0, 3).join(', ')}`;
      md += `\n`;
    }
    md += `\n`;
  }

  md += `---\n\n`;
  md += `*Generated from open-source threat intelligence · TLP:CLEAR · [pranithjain.qzz.io](https://pranithjain.qzz.io)*\n`;
  md += `*Sources: NVD, CISA KEV, Webamon, OSSF Malicious Packages, Daily-Hunt IOC families*\n`;

  return md;
}

async function main() {
  console.log(`Daily Threat Brief — ${TODAY}`);
  console.log('Fetching data from threat intel sources...');

  const [cves, kev, webamon, supply, iocs] = await Promise.all([
    getCveData(),
    getKevData(),
    getWebamonLatest(),
    getSupplyChain(),
    getIocFamilies(),
  ]);

  console.log(`  CVEs: ${cves.length}, KEV: ${kev.length}, Webamon: ${webamon ? 'yes' : 'no'}, Supply-chain: ${supply.length}, IOCs: ${iocs.length}`);

  const md = generateBrief({ cves, kev, webamon, supplyChain: supply, iocs });

  mkdirSync(OUT_DIR, { recursive: true });
  const outPath = join(OUT_DIR, `daily-threat-brief-${TODAY}.md`);
  writeFileSync(outPath, md);
  console.log(`\n✔ Wrote ${md.length} bytes to ${outPath}`);
}

main().catch((err) => {
  console.error('✘ Generation failed:', err instanceof Error ? err.message : err);
  process.exit(1);
});