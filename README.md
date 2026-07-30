# Daily Threat Brief

Your daily summary of tracked changes across the threat landscape — critical CVEs, CISA KEV additions, phishing/malware campaign movements, supply-chain attacks, and IOC family updates.

**TLP:CLEAR** — all content is derived from open-source intelligence.

## Structure

```
├── YYYY-MM-DD/
│   └── daily-threat-brief-YYYY-MM-DD.md
├── weekly/
│   └── weekly-threat-brief-YYYY-WNN.md
├── scripts/
│   ├── generate-brief.mjs      # daily generation
│   └── generate-weekly.mjs     # weekly rollup (Sundays)
└── .github/workflows/
    └── generate.yml            # daily at 14:00 UTC
```

## Sources

| Source | What it provides |
|--------|-----------------|
| [NVD](https://nvd.nist.gov) | Recent critical CVEs with CVSS scoring |
| [CISA KEV](https://www.cisa.gov/known-exploited-vulnerabilities-catalog) | New actively-exploited vulnerability additions |
| [Webamon](https://intel.webamon.com) | Phishing/malware campaign intelligence (domain growth, takedowns, infra rotation) |
| [OSSF Malicious Packages](https://github.com/ossf/malicious-packages) | Newly disclosed malicious npm/PyPI/Go packages |
| [Daily-Hunt](https://github.com/TheRavenFile/Daily-Hunt) | IOC family database (ransomware, malware, APT) |

## Schedule

- **Daily brief**: every day at 14:00 UTC
- **Weekly rollup**: every Sunday at 14:00 UTC (after the daily)

## Live dashboard

Full interactive threat intel dashboard: [pranithjain.qzz.io/threatintel](https://pranithjain.qzz.io/threatintel)

## License

[Apache-2.0](LICENSE)
