# Daily Threat Brief — Thursday, August 27, 2026

**TLP:CLEAR** · Auto-generated from open-source threat intelligence feeds

Aggregated daily intelligence from NVD, CISA KEV, Webamon campaign sensors, OSSF malicious packages, and IOC family databases.

## 📊 By the numbers

- **10** critical CVEs published recently
- **5** new CISA KEV additions (last 7 days)
- **70** campaigns with activity
- **17780** new malicious domains observed
- **3562** domains went offline (NXDOMAIN, double-checked)
- **24073** infrastructure changes (new IPs / ASNs / cert issuers)
- **0** newly disclosed malicious packages (3 days)

## 🔴 Critical CVEs

| CVE | Vendor | Product | CVSS | KEV |
|-----|--------|---------|------|-----|
| CVE-2026-48282 | Adobe | ColdFusion | 10 | ⚠️ Yes |
| CVE-2026-8452 | Citrix | NetScaler ADC and NetScaler Gateway | 9.8 | ⚠️ Yes |
| CVE-2026-21962 | Oracle | HTTP Server and Oracle Weblogic Server Proxy Plug-in | 10 | ⚠️ Yes |
| CVE-2020-1938 | Apache | Tomcat | 9.8 | ⚠️ Yes |
| CVE-2019-2725 | Oracle | WebLogic Server | 9.8 | ⚠️ Yes |
| CVE-2018-1273 | VMware Tanzu | Spring Data Commons | 9.8 | ⚠️ Yes |
| CVE-2016-8735 | Apache | Tomcat | 9.8 | ⚠️ Yes |
| CVE-2026-72811 | — | — | 10 | No |
| CVE-2026-59500 | — | — | 10 | No |
| CVE-2026-15413 | — | — | 10 | No |

## ⚠️ CISA KEV — New Additions

- **CVE-2026-8452** — Citrix NetScaler ADC and NetScaler Gateway: Memory overflow vulnerability NetScaler ADC and NetScaler Gateway leading to unpredictable or erroneous behavior and Denial of Service if the appliance is configured as a Gateway (SSL VPN, ICA Proxy, CVPN, RDP Proxy) or AAA virtual server (due: TBD)
- **CVE-2026-73570** — Synacor Zimbra Collaboration Suite (ZCS): A remote code execution vulnerability exists in Zimbra Collaboration (ZCS) before 10.1.20 when the optional zimbra-snmp package is installed and SNMP notifications are enabled. Due to improper sanitization of untrusted input during SNMP … (due: TBD)
- **CVE-2026-21962** — Oracle HTTP Server and Oracle Weblogic Server Proxy Plug-in: Vulnerability in the Oracle HTTP Server, Oracle Weblogic Server Proxy Plug-in product of Oracle Fusion Middleware (component: Weblogic Server Proxy Plug-in for Apache HTTP Server, Weblogic Server Proxy Plug-in for IIS).  Supported versio… (due: TBD)
- **CVE-2019-1068** — Microsoft SQL Server: A remote code execution vulnerability exists in Microsoft SQL Server when it incorrectly handles processing of internal functions, aka 'Microsoft SQL Server Remote Code Execution Vulnerability'. (due: TBD)
- **CVE-2021-23758** — Ajax.NET Professional Ajax.NET Professional: All versions of package ajaxpro.2 are vulnerable to Deserialization of Untrusted Data due to the possibility of deserialization of arbitrary .NET classes, which can be abused to gain remote code execution. (due: TBD)

## 🌐 Webamon Campaign Intelligence

Estate: 119 campaigns tracked · 825,588 unique domains · 88.4% online

### What moved today

🔺 **Fastest-growing** — [Rolling sqllq.com subdomain phishing](https://intel.webamon.com/campaigns/2f41c3bbec077af4f1c44fff61a425759f949713) added **9,441** new domains — active registration/rotation in progress.

🔻 **Takedowns** — **2,681** domains in the [Chinese Adult-Video Streaming Network (91影视 / 麻豆 / 天美传媒, CNSERVERS .wiki)](https://intel.webamon.com/campaigns/66afe17a397a6e4cc587ee1ac9b27318b02889d2) now resolve NXDOMAIN — takedowns/expiry confirmed.

🔁 **Infra rotation** — [Brazilian 'Plataforma Oficial' Betting Kit Family](https://intel.webamon.com/campaigns/f04cc4c7e2513dcd0015e26eea0755ea908f3aab) moved onto **4,600** new IPs and [Brazilian Casino Network (0007bet / 001bet / 001win / aavip)](https://intel.webamon.com/campaigns/0899610610c7f95d7b22ee8339b585b573f7a1b2) onto **4,071** — refresh blocklists.

🎭 **Lure refresh** — [Brazilian Online Casino Doorway Network (Cassino Online Brasil, 944bet / 001WIN / 0007bet)](https://intel.webamon.com/campaigns/b78ce38e9f9e53ef933db4c098dc27ef239353a6) deployed **1,189** new page titles.

## 🦠 IOC Families

- **0APT Ransomware** (ransomware) — 20 indicators
- **AiLock Ransomware** (ransomware) — 41 indicators
- **Akira Ransomware** (ransomware) — 600 indicators
- **Anubis Backdoor** (malware) — 29 indicators
- **Anubis Ransomware** (ransomware) — 4 indicators

---

*Generated from open-source threat intelligence · TLP:CLEAR · [pranithjain.qzz.io](https://pranithjain.qzz.io)*
*Sources: NVD, CISA KEV, Webamon, OSSF Malicious Packages, Daily-Hunt IOC families*
