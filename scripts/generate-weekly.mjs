#!/usr/bin/env node
/**
 * Generate a Weekly Threat Brief summarizing the week's activity.
 *
 * Aggregates the last 7 daily briefs into a weekly summary with trends.
 * Outputs to ./weekly/weekly-threat-brief-<week>.md
 */
import { mkdirSync, writeFileSync, readdirSync, readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = process.cwd();
const TODAY = new Date();
const WEEK_LABEL = `${TODAY.getFullYear()}-W${String(getWeekNumber(TODAY)).padStart(2, '0')}`;
const OUT_DIR = join(ROOT, 'weekly');

function getWeekNumber(d) {
  const date = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  const dayNum = date.getUTCDay() || 7;
  date.setUTCDate(date.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(date.getUTCFullYear(), 0, 1));
  return Math.ceil(((date - yearStart) / 86400000 + 1) / 7);
}

function getDatesLast7Days() {
  const dates = [];
  for (let i = 0; i < 7; i++) {
    const d = new Date(TODAY);
    d.setDate(d.getDate() - i);
    dates.push(d.toISOString().slice(0, 10));
  }
  return dates;
}

function parseDailyBrief(md) {
  const stats = { cves: 0, kev: 0, supplyChain: 0, webamonMovements: 0 };
  const cveSection = md.match(/## 🔴 Critical CVEs[\s\S]*?(?=\n## |\n---|\n$)/);
  if (cveSection) {
    stats.cves = (cveSection[0].match(/^\|[^-]/gm) || []).length - 1;
  }
  const kevSection = md.match(/## ⚠️ CISA KEV[\s\S]*?(?=\n## |\n---|\n$)/);
  if (kevSection) {
    stats.kev = (kevSection[0].match(/^- \*\*/gm) || []).length;
  }
  const scSection = md.match(/## 📦 Supply-Chain[\s\S]*?(?=\n## |\n---|\n$)/);
  if (scSection) {
    stats.supplyChain = (scSection[0].match(/^\|[^-]/gm) || []).length - 1;
  }
  const webSection = md.match(/### What moved today[\s\S]*?(?=\n###|\n## |\n---|\n$)/);
  if (webSection) {
    stats.webamonMovements = (webSection[0].match(/^[🔺🔻🔁🎭]/gm) || []).length;
  }
  return stats;
}

function main() {
  console.log(`Weekly Threat Brief — ${WEEK_LABEL}`);

  const dates = getDatesLast7Days();
  const dailyStats = [];
  let totalCves = 0, totalKev = 0, totalSc = 0, totalMovements = 0;
  let briefsFound = 0;

  for (const date of dates) {
    const path = join(ROOT, date, `daily-threat-brief-${date}.md`);
    if (!existsSync(path)) continue;
    briefsFound++;
    const md = readFileSync(path, 'utf8');
    const stats = parseDailyBrief(md);
    dailyStats.push({ date, ...stats });
    totalCves += stats.cves;
    totalKev += stats.kev;
    totalSc += stats.supplyChain;
    totalMovements += stats.webamonMovements;
  }

  if (briefsFound === 0) {
    console.log('  No daily briefs found for the last 7 days. Skipping.');
    return;
  }

  let md = `# Weekly Threat Brief — ${WEEK_LABEL}\n\n`;
  md += `**TLP:CLEAR** · Week in review: ${dates[dates.length - 1]} to ${dates[0]}\n\n`;
  md += `Aggregated weekly summary from ${briefsFound} daily briefs.\n\n`;

  md += `## 📊 Week at a glance\n\n`;
  md += `| Metric | Count |\n`;
  md += `|--------|-------|\n`;
  md += `| Critical CVEs surfaced | ${totalCves} |\n`;
  md += `| CISA KEV additions | ${totalKev} |\n`;
  md += `| Malicious packages disclosed | ${totalSc} |\n`;
  md += `| Webamon campaign movements | ${totalMovements} |\n`;
  md += `| Daily briefs generated | ${briefsFound}/7 |\n`;
  md += `\n`;

  md += `## 📈 Daily breakdown\n\n`;
  md += `| Date | CVEs | KEV | Supply-Chain | Campaign Moves |\n`;
  md += `|------|------|-----|--------------|----------------|\n`;
  for (const d of dailyStats) {
    md += `| ${d.date} | ${d.cves} | ${d.kev} | ${d.supplyChain} | ${d.webamonMovements} |\n`;
  }
  md += `\n`;

  md += `---\n\n`;
  md += `*Generated from open-source threat intelligence · TLP:CLEAR · [pranithjain.qzz.io](https://pranithjain.qzz.io)*\n`;

  mkdirSync(OUT_DIR, { recursive: true });
  const outPath = join(OUT_DIR, `weekly-threat-brief-${WEEK_LABEL}.md`);
  writeFileSync(outPath, md);
  console.log(`\n✔ Wrote ${md.length} bytes to ${outPath}`);
}

main();
