# Daily Threat Brief — Saturday, September 26, 2026

**TLP:CLEAR** · Auto-generated from open-source threat intelligence feeds

Aggregated daily intelligence from NVD, CISA KEV, Webamon campaign sensors, OSSF malicious packages, and IOC family databases.

## 📊 By the numbers

- **10** critical CVEs published recently
- **5** new CISA KEV additions (last 7 days)
- **61** campaigns with activity
- **5487** new malicious domains observed
- **731** domains went offline (NXDOMAIN, double-checked)
- **5863** infrastructure changes (new IPs / ASNs / certs)
- **0** newly disclosed malicious packages (3 days)

## 🔴 Critical CVEs

| CVE | Vendor | Product | CVSS | KEV |
|-----|--------|---------|------|-----|
| CVE-2026-5430 | WSO2 | Multiple Products | 10 | ⚠️ Yes |
| CVE-2025-59374 | ASUS | Live Update | 9.8 | ⚠️ Yes |
| CVE-2025-32432 | Craft CMS | Craft CMS | 10 | ⚠️ Yes |
| CVE-2026-71362 | Adobe | Commerce and Magento  | 9.1 | ⚠️ Yes |
| CVE-2025-57819 | Sangoma | FreePBX | 9.8 | ⚠️ Yes |
| CVE-2025-42599 | Qualitia | Active! Mail | 9.8 | ⚠️ Yes |
| CVE-2025-23006 | SonicWall | SMA1000 Appliances | 9.8 | ⚠️ Yes |
| CVE-2024-40766 | SonicWall | SonicOS | 9.8 | ⚠️ Yes |
| CVE-2026-33824 | Microsoft | Internet Key Exchange (IKE) Service Extensions | 9.8 | ⚠️ Yes |
| CVE-2025-0108 | Palo Alto Networks | PAN-OS | 9.1 | ⚠️ Yes |

## ⚠️ CISA KEV — New Additions

- **CVE-2026-5430** — WSO2 Multiple Products: The JWT authentication mechanism accepts tokens signed with algorithms other than those explicitly configured or supported. This allows an attacker to craft a JWT with an unsupported algorithm, which is then incorrectly validated, leadin… (due: TBD)
- **CVE-2026-71362** — Adobe Commerce and Magento : Adobe Commerce is affected by an Incorrect Authorization vulnerability that could result in privilege escalation. An attacker could leverage this vulnerability to gain elevated access to sensitive resources. Exploitation of this issue do… (due: TBD)
- **CVE-2026-65660** — Microsoft SharePoint: Improper control of generation of code ('code injection') in Microsoft Office SharePoint allows an authorized attacker to execute code over a network. (due: TBD)
- **CVE-2026-7273** — Zyxel GS1900 Series Switches: A stack-based buffer overflow vulnerability in the CGI program of Zyxel GS1900-48HPv2 firmware versions through 2.90(ABTQ.1)C0 could allow a LAN-based, unauthenticated attacker to exploit the flaw and potentially execute OS commands via … (due: TBD)
- **CVE-2026-67279** — MikroTik RouterOS: RouterOS SSH enters the connection protocol after a client-requested rekey even though user authentication was never attempted, allowing an unauthenticated client to open a session channel and send an exec request. On affected builds the… (due: TBD)

## 🌐 Webamon Campaign Intelligence

Estate: 119 campaigns tracked · 941,518 unique domains · 83.5% online

### What moved today

🔺 **Fastest-growing** — [Rolling sqllq.com subdomain phishing](https://intel.webamon.com/campaigns/2f41c3bbec077af4f1c44fff61a425759f949713) added **4,150** new domains this window — active registration/rotation in progress.

🔻 **Takedown movement** — **145** domains in [Gambling Infra ASN+SSL Pair (.vip/.cc)](https://intel.webamon.com/campaigns/c89bdabcb2cb4ae583fa4c4baf6e635675e59834) now NXDOMAIN, dropping the cluster to 30% online — takedowns/expiry confirmed by double-checked DNS.

🔁 **Infra rotation** — [china k8 phishing portal](https://intel.webamon.com/campaigns/f8baac9d9fa365f2adf7414919aa45f6f37a0450) moved onto **1,921** new IPs, and [Brazilian Casino Network (0007bet / 001bet / 001win / aavip)](https://intel.webamon.com/campaigns/0899610610c7f95d7b22ee8339b585b573f7a1b2) onto **1,094** — re-hosting behaviour; refresh blocklists.

🎭 **Lure refresh** — the same Brazilian casino estate deployed **1,139** new page titles, with [Brazilian 'Plataforma Oficial' Betting Kit Family](https://intel.webamon.com/campaigns/f04cc4c7e2513dcd0015e26eea0755ea908f3aab) rotating **791** more.

## 🦠 IOC Families

- **0APT Ransomware** (ransomware) — 20 indicators
- **AiLock Ransomware** (ransomware) — 41 indicators
- **Akira Ransomware** (ransomware) — 600 indicators
- **Anubis Backdoor** (malware) — 29 indicators
- **Anubis Ransomware** (ransomware) — 4 indicators

---

*Generated from open-source threat intelligence · TLP:CLEAR · [pranithjain.qzz.io](https://pranithjain.qzz.io)*
*Sources: NVD, CISA KEV, Webamon, OSSF Malicious Packages, Daily-Hunt IOC families*
