# Daily Threat Brief — Saturday, October 10, 2026

**TLP:CLEAR** · Auto-generated from open-source threat intelligence feeds

Aggregated daily intelligence from NVD, CISA KEV, Webamon campaign sensors, OSSF malicious packages, and IOC family databases.

## 📊 By the numbers

- **10** critical CVEs published recently
- **5** new CISA KEV additions (last 7 days)
- **57** campaigns with activity
- **5099** new malicious domains observed
- **708** domains went offline (double-checked DNS)
- **9043** infrastructure changes (IP / ASN / cert)
- **0** newly disclosed malicious packages (3 days)

## 🔴 Critical CVEs

| CVE | Vendor | Product | CVSS | KEV |
|-----|--------|---------|------|-----|
| CVE-2021-41277 | Metabase | Metabase | 10 | ⚠️ Yes |
| CVE-2025-53521 | F5 | BIG-IP | 9.8 | ⚠️ Yes |
| CVE-2025-61882 | Oracle | E-Business Suite | 9.8 | ⚠️ Yes |
| CVE-2025-3248 | Langflow | Langflow | 9.8 | ⚠️ Yes |
| CVE-2024-50623 | Cleo | Multiple Products | 9.8 | ⚠️ Yes |
| CVE-2020-9054 | Zyxel | Multiple Network-Attached Storage (NAS) Devices | 9.8 | ⚠️ Yes |
| CVE-2017-12149 | Red Hat | JBoss Application Server | 9.8 | ⚠️ Yes |
| CVE-2015-3306 | ProFTPD | ProFTPD | 10 | ⚠️ Yes |
| CVE-2021-3199 | ONLYOFFICE | Docs | 9.8 | ⚠️ Yes |
| CVE-2025-39682 | Linux | Kernel | 9.8 | ⚠️ Yes |

## ⚠️ CISA KEV — New Additions

- **CVE-2015-3306** — ProFTPD ProFTPD: The mod_copy module in ProFTPD 1.3.5 allows remote attackers to read and write to arbitrary files via the site cpfr and site cpto commands. (due: TBD)
- **CVE-2021-3199** — ONLYOFFICE Docs: Directory traversal with remote code execution can occur in /upload in ONLYOFFICE Document Server before 5.6.3, when JWT is used, via a /.. sequence in an image upload parameter. (due: TBD)
- **CVE-2016-3081** — Apache Struts: Apache Struts 2.3.19 to 2.3.20.2, 2.3.21 to 2.3.24.1, and 2.3.25 to 2.3.28, when Dynamic Method Invocation is enabled, allow remote attackers to execute arbitrary code via method: prefix, related to chained expressions. (due: TBD)
- **CVE-2015-5477** — ISC BIND: named in ISC BIND 9.x before 9.9.7-P2 and 9.10.x before 9.10.2-P3 allows remote attackers to cause a denial of service (REQUIRE assertion failure and daemon exit) via TKEY queries. (due: TBD)
- **CVE-2023-22894** — Strapi Strapi: Strapi through 4.5.5 allows attackers (with access to the admin panel) to discover sensitive user details by exploiting the query filter. The attacker can filter users by columns that contain sensitive information and infer a value from … (due: TBD)

## 🌐 Webamon Campaign Intelligence

Estate: 119 campaigns tracked · 972,302 unique domains · 82% online

### What moved today

🔺 **Fastest-growing** — [Rolling sqllq.com subdomain phishing](https://intel.webamon.com/campaigns/2f41c3bbec077af4f1c44fff61a425759f949713) added **3,214** new domains this window — active registration/rotation in progress.

🔻 **Takedowns** — **343** domains in the [Chinese Mark Six / Macau Lottery Gambling Network (六合彩 / 马会传真 / 澳门49, Zhejiang)](https://intel.webamon.com/campaigns/eb2a566ebf3b5e2f6e75c9190feecaec1a1a788c) now resolve NXDOMAIN — takedowns/expiry confirmed.

🔁 **Infra rotation** — [Brazilian Casino Network (0007bet / 001bet / 001win / aavip)](https://intel.webamon.com/campaigns/0899610610c7f95d7b22ee8339b585b573f7a1b2) moved onto **2,336** new IPs, and the [Brazilian 'Plataforma Oficial' Betting Kit Family](https://intel.webamon.com/campaigns/f04cc4c7e2513dcd0015e26eea0755ea908f3aab) onto **1,609** new IPs — refresh blocklists.

🎭 **Lure refresh** — the same Brazilian Casino Network deployed **979** new page titles; content templates are being cycled.

## 🦠 IOC Families

- **0APT Ransomware** (ransomware) — 20 indicators
- **AiLock Ransomware** (ransomware) — 41 indicators
- **Akira Ransomware** (ransomware) — 600 indicators
- **Anubis Backdoor** (malware) — 29 indicators
- **Anubis Ransomware** (ransomware) — 4 indicators

---

*Generated from open-source threat intelligence · TLP:CLEAR · [pranithjain.qzz.io](https://pranithjain.qzz.io)*
*Sources: NVD, CISA KEV, Webamon, OSSF Malicious Packages, Daily-Hunt IOC families*
