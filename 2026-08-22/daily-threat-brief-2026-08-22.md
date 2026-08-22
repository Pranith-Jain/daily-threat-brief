# Daily Threat Brief — Saturday, August 22, 2026

**TLP:CLEAR** · Auto-generated from open-source threat intelligence feeds

Aggregated daily intelligence from NVD, CISA KEV, Webamon campaign sensors, OSSF malicious packages, and IOC family databases.

## 📊 By the numbers

- **10** critical CVEs published recently
- **5** new CISA KEV additions (last 7 days)
- **70** campaigns with activity
- **22165** new malicious domains observed
- **8702** domains went offline (NXDOMAIN, double-checked)
- **24926** infrastructure changes (new IPs / ASNs / cert issuers)
- **0** newly disclosed malicious packages (3 days)

## 🔴 Critical CVEs

| CVE | Vendor | Product | CVSS | KEV |
|-----|--------|---------|------|-----|
| CVE-2026-65400 | Apple | macOS | 9.8 | ⚠️ Yes |
| CVE-2026-59310 | Broadcom | VMware vCenter | 9.8 | ⚠️ Yes |
| CVE-2026-9198 | IBM | Langflow | 9.8 | ⚠️ Yes |
| CVE-2026-33824 | Microsoft | Internet Key Exchange (IKE) Service Extensions | 9.8 | ⚠️ Yes |
| CVE-2026-55040 | Microsoft | SharePoint | 9.1 | ⚠️ Yes |
| CVE-2022-26486 | Mozilla | Firefox | 9.6 | ⚠️ Yes |
| CVE-2021-26855 | Microsoft | Exchange Server | 9.1 | ⚠️ Yes |
| CVE-2026-68117 | — | — | 9.8 | No |
| CVE-2026-55799 | — | — | 9.8 | No |
| CVE-2026-44416 | — | — | 9.8 | No |

## ⚠️ CISA KEV — New Additions

- **CVE-2026-65400** — Apple macOS: An authentication issue was addressed with improved state management. This issue is fixed in macOS Sequoia 15.7.9, macOS Sonoma 14.8.9, macOS Tahoe 26.6.1. An attacker on the network may be able to authenticate to Screen Sharing without … (due: TBD)
- **CVE-2026-59310** — Broadcom VMware vCenter: VMware vCenter contains a directory traversal vulnerability in the Syslog server. A malicious actor with network access to vCenter may exploit this issue to execute arbitrary code. (due: TBD)
- **CVE-2026-33824** — Microsoft Internet Key Exchange (IKE) Service Extensions: Double free in Windows IKE Extension allows an unauthorized attacker to execute code over a network. (due: TBD)
- **CVE-2026-55040** — Microsoft SharePoint: Weak authentication in Microsoft Office SharePoint allows an unauthorized attacker to bypass a security feature over a network. (due: TBD)
- **CVE-2025-62593** — Ray-Project Ray: Ray is an AI compute engine. Prior to version 2.52.0, developers working with Ray as a development tool can be exploited via a critical RCE vulnerability exploitable via Firefox and Safari. This vulnerability is due to an insufficient gu… (due: TBD)

## 🌐 Webamon Campaign Intelligence

Estate: 119 campaigns tracked · 766,559 unique domains · 88.2% online

### What moved today

🔺 **Fastest-growing** — [Rolling sqllq.com subdomain phishing](https://intel.webamon.com/campaigns/2f41c3bbec077af4f1c44fff61a425759f949713) added 8,338 new domains — active registration/rotation in progress.

🔻 **Takedowns** — 8,167 domains in [Malicious Mobile Campaign Targeting China](https://intel.webamon.com/campaigns/04693c82868a2d56a98bbed5a1e9bb587c477680) now resolve NXDOMAIN — takedowns/expiry confirmed by double-checked DNS.

🔁 **Infra rotation** — [Brazilian Casino Network (0007bet / 001bet / 001win / aavip)](https://intel.webamon.com/campaigns/0899610610c7f95d7b22ee8339b585b573f7a1b2) moved onto 3,928 new IPs, and [Brazilian Online Casino Doorway Network (Cassino Online Brasil, 944bet / 001WIN / 0007bet)](https://intel.webamon.com/campaigns/b78ce38e9f9e53ef933db4c098dc27ef239353a6) onto 4,368 — evasion or re-hosting; refresh blocklists.

🎭 **Lure refresh** — the same Brazilian doorway network deployed 1,176 new page titles; content templates are being rotated.

## 🦠 IOC Families

- **0APT Ransomware** (ransomware) — 20 indicators
- **AiLock Ransomware** (ransomware) — 41 indicators
- **Akira Ransomware** (ransomware) — 600 indicators
- **Anubis Backdoor** (malware) — 29 indicators
- **Anubis Ransomware** (ransomware) — 4 indicators

---

*Generated from open-source threat intelligence · TLP:CLEAR · [pranithjain.qzz.io](https://pranithjain.qzz.io)*
*Sources: NVD, CISA KEV, Webamon, OSSF Malicious Packages, Daily-Hunt IOC families*
