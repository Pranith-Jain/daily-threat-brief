# Daily Threat Brief — Friday, September 25, 2026

**TLP:CLEAR** · Auto-generated from open-source threat intelligence feeds

Aggregated daily intelligence from NVD, CISA KEV, Webamon campaign sensors, OSSF malicious packages, and IOC family databases.

## 📊 By the numbers

- **2** critical CVEs published recently
- **2** new CISA KEV additions (last 7 days)
- **77** campaigns with activity
- **6023** new malicious domains observed
- **10158** domains went offline (double-checked DNS)
- **3625** infrastructure changes (IP / ASN / cert)
- **0** newly disclosed malicious packages (3 days)

## 🔴 Critical CVEs

| CVE | Vendor | Product | CVSS | KEV |
|-----|--------|---------|------|-----|
| CVE-2026-5430 | WSO2 | Multiple Products | 10 | ⚠️ Yes |
| CVE-2026-71362 | Adobe | Commerce and Magento  | 9.1 | ⚠️ Yes |

## ⚠️ CISA KEV — New Additions

- **CVE-2026-5430** — WSO2 Multiple Products: The JWT authentication mechanism accepts tokens signed with algorithms other than those explicitly configured or supported. This allows an attacker to craft a JWT with an unsupported algorithm, which is then incorrectly validated, leadin… (due: TBD)
- **CVE-2026-71362** — Adobe Commerce and Magento : Adobe Commerce is affected by an Incorrect Authorization vulnerability that could result in privilege escalation. An attacker could leverage this vulnerability to gain elevated access to sensitive resources. Exploitation of this issue do… (due: TBD)

## 🌐 Webamon Campaign Intelligence

Estate: 119 campaigns tracked · 940,558 unique domains · 83.6% online

### What moved today

🔺 **Fastest-growing** — [Rolling sqllq.com subdomain phishing](https://intel.webamon.com/campaigns/2f41c3bbec077af4f1c44fff61a425759f949713) added **4,704** new domains this window — active registration/rotation in progress.

🔻 **Takedown movement** — **1,886** domains in [Quatro-Particles Template Doorway Network (Antbox / .top)](https://intel.webamon.com/campaigns/1c923b4dfd1406122b99e1c43ec2d8315f24d8ee) are now NXDOMAIN — takedowns/expiry confirmed.

🔁 **Infra rotation** — [Brazilian Casino Network (0007bet / 001bet / 001win / aavip)](https://intel.webamon.com/campaigns/0899610610c7f95d7b22ee8339b585b573f7a1b2) moved onto **861** new IPs, and [china k8 phishing portal](https://intel.webamon.com/campaigns/f8baac9d9fa365f2adf7414919aa45f6f37a0450) onto **1,117** new IPs — refresh blocklists.

🎭 **Lure refresh** — the same Brazilian casino estate deployed **853** new page titles; [Brazilian Online Casino Doorway Network (Cassino Online Brasil, 944bet / 001WIN / 0007bet)](https://intel.webamon.com/campaigns/b78ce38e9f9e53ef933db4c098dc27ef239353a6) rotated **529** more.

## 🦠 IOC Families

- **0APT Ransomware** (ransomware) — 20 indicators
- **AiLock Ransomware** (ransomware) — 41 indicators
- **Akira Ransomware** (ransomware) — 600 indicators
- **Anubis Backdoor** (malware) — 29 indicators
- **Anubis Ransomware** (ransomware) — 4 indicators

---

*Generated from open-source threat intelligence · TLP:CLEAR · [pranithjain.qzz.io](https://pranithjain.qzz.io)*
*Sources: NVD, CISA KEV, Webamon, OSSF Malicious Packages, Daily-Hunt IOC families*
