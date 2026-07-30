#!/usr/bin/env node
/**
 * Generate a Daily Threat Brief from multiple threat intel sources.
 *
 * Fetches live data from:
 *   - NVD (recent critical CVEs)
 *   - CISA KEV (new additions)
 *   - Webamon DTB (campaign intelligence)
 *   - OSSF Malicious Packages (supply-chain)
 *   - pranithjain.qzz.io API (aggregated threat intel)
 *
 * Outputs a markdown brief to ./<date>/daily-threat-brief-<date>.md
 */
import { mkdirSync, writeFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = process.cwd();
const TODAY = new Date().toISOString().slice(0, 10);
const OUT_DIR = join(ROOT, TODAY);

const PORTFOLIO_API = process.env.PORTFOLIO_API_URL || 'https://pranithjain.qzz.io';
const API_KEY = process.env.THREAT_INTEL_API_KEY || '';

async function fetchJson(url, opts = {}) {
  try {
    const res = await fetch(url, {
      headers: {
        'user-agent': 'daily-threat-brief/1.0 (+https://github.com/Pranith-Jain/daily-threat-brief)',
        ...(API_KEY ? { 'X-API-Key': API_KEY } : {}),
        ...opts.headers,
      },
      signal: AbortSignal.timeout(30000),
    });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

async function fetchText(url) {
  try {
    const res = await fetch(url, {
      headers: { 'user-agent': 'daily-threat-brief/1.0' },
      signal: AbortSignal.timeout(30000),
    });
    if (!res.ok) return null;
    return await res.text();
  } catch {
    return null;
  }
}

async function getCveData() {
  const data = await fetchJson(`${PORTFOLIO_API}/api/v1/threat-intel/cves?severity=critical&limit=10`);
  if (!data?.cves) return [];
  return data.cves.slice(0, 10);
}

async function getKevData() {
  const data = await fetchJson(`${PORTFOLIO_API}/api/v1/threat-intel/kev`);
  if (!data?.entries) return [];
  const recent = data.entries
    .filter((e) => e.dateAdded >= new Date(Date.now() - 7 * 86400000).toISOString().slice(0, 10))
    .slice(0, 5);
  return recent;
}

async function getWebamonLatest() {
  const data = await fetchJson(`${PORTFOLIO_API}/api/v1/webamon-dtb/latest`);
  return data;
}

async function getSupplyChain() {
  const data = await fetchJson(`${PORTFOLIO_API}/api/v1/depx/feed?since=3d&limit=10`);
  if (!data?.packages) return [];
  return data.packages.slice(0, 10);
}

async function getIocFamilies() {
  const data = await fetchJson(`${PORTFOLIO_API}/api/v1/threat-intel/iocs?limit=5`);
  if (!data?.iocs) return [];
  return data.iocs.slice(0, 5);
}

function formatNumber(n) {
  return typeof n === 'number' ? n.toLocaleString() : String(n ?? '—');
}

function generateBrief({ cves, kev, webamon, supplyChain, iocs }) {
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
  md += `- **${supplyChain.length}** newly disclosed malicious packages (3 days)\n`;
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

  if (supplyChain.length > 0) {
    md += `## 📦 Supply-Chain — Malicious Packages\n\n`;
    md += `| Package | Ecosystem | Disclosed |\n`;
    md += `|---------|-----------|----------|\n`;
    for (const pkg of supplyChain) {
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

  const [cves, kev, webamon, supplyChain, iocs] = await Promise.all([
    getCveData(),
    getKevData(),
    getWebamonLatest(),
    getSupplyChain(),
    getIocFamilies(),
  ]);

  console.log(`  CVEs: ${cves.length}, KEV: ${kev.length}, Webamon: ${webamon ? 'yes' : 'no'}, Supply-chain: ${supplyChain.length}, IOCs: ${iocs.length}`);

  const md = generateBrief({ cves, kev, webamon, supplyChain, iocs });

  mkdirSync(OUT_DIR, { recursive: true });
  const outPath = join(OUT_DIR, `daily-threat-brief-${TODAY}.md`);
  writeFileSync(outPath, md);
  console.log(`\n✔ Wrote ${md.length} bytes to ${outPath}`);
}

main().catch((err) => {
  console.error('✘ Generation failed:', err instanceof Error ? err.message : err);
  process.exit(1);
});
