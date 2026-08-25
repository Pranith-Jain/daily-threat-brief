# Daily Threat Brief — Tuesday, August 25, 2026

**TLP:CLEAR** · Auto-generated from open-source threat intelligence feeds

Aggregated daily intelligence from NVD, CISA KEV, Webamon campaign sensors, OSSF malicious packages, and IOC family databases.

## 📊 By the numbers

- **10** critical CVEs published recently
- **5** new CISA KEV additions (last 7 days)
- **73** campaigns with activity
- **19634** new malicious domains observed
- **636** domains went offline (NXDOMAIN, double-checked)
- **27958** infrastructure changes (new IPs / ASNs / cert issuers)
- **0** newly disclosed malicious packages (3 days)

## 🔴 Critical CVEs

| CVE | Vendor | Product | CVSS | KEV |
|-----|--------|---------|------|-----|
| CVE-2026-48282 | Adobe | ColdFusion | 10 | ⚠️ Yes |
| CVE-2026-65400 | Apple | macOS | 9.8 | ⚠️ Yes |
| CVE-2026-59310 | Broadcom | VMware vCenter | 9.8 | ⚠️ Yes |
| CVE-2026-33824 | Microsoft | Internet Key Exchange (IKE) Service Extensions | 9.8 | ⚠️ Yes |
| CVE-2026-21962 | Oracle | HTTP Server and Oracle Weblogic Server Proxy Plug-in | 10 | ⚠️ Yes |
| CVE-2022-26486 | Mozilla | Firefox | 9.6 | ⚠️ Yes |
| CVE-2026-55040 | Microsoft | SharePoint | 9.1 | ⚠️ Yes |
| CVE-2021-26855 | Microsoft | Exchange Server | 9.1 | ⚠️ Yes |
| CVE-2026-59500 | — | — | 10 | No |
| CVE-2026-71398 | — | — | 10 | No |

## ⚠️ CISA KEV — New Additions

- **CVE-2026-65400** — Apple macOS: An authentication issue was addressed with improved state management. This issue is fixed in macOS Sequoia 15.7.9, macOS Sonoma 14.8.9, macOS Tahoe 26.6.1. An attacker on the network may be able to authenticate to Screen Sharing without … (due: TBD)
- **CVE-2026-73570** — Synacor Zimbra Collaboration Suite (ZCS): A remote code execution vulnerability exists in Zimbra Collaboration (ZCS) before 10.1.20 when the optional zimbra-snmp package is installed and SNMP notifications are enabled. Due to improper sanitization of untrusted input during SNMP … (due: TBD)
- **CVE-2026-59310** — Broadcom VMware vCenter: VMware vCenter contains a directory traversal vulnerability in the Syslog server. A malicious actor with network access to vCenter may exploit this issue to execute arbitrary code. (due: TBD)
- **CVE-2026-33824** — Microsoft Internet Key Exchange (IKE) Service Extensions: Double free in Windows IKE Extension allows an unauthorized attacker to execute code over a network. (due: TBD)
- **CVE-2026-21962** — Oracle HTTP Server and Oracle Weblogic Server Proxy Plug-in: Vulnerability in the Oracle HTTP Server, Oracle Weblogic Server Proxy Plug-in product of Oracle Fusion Middleware (component: Weblogic Server Proxy Plug-in for Apache HTTP Server, Weblogic Server Proxy Plug-in for IIS).  Supported versio… (due: TBD)

## 🌐 Webamon Campaign Intelligence

Estate: 119 campaigns tracked · 804,412 unique domains · 88.5% online

### What moved today

🔺 **Fastest-growing** — [Rolling sqllq.com subdomain phishing](https://intel.webamon.com/campaigns/2f41c3bbec077af4f1c44fff61a425759f949713) added **6,616** new domains this window — active registration/rotation in progress.

🔻 **Takedown movement** — **196** domains in [Gambling Infra ASN+SSL Pair (.vip/.cc)](https://intel.webamon.com/campaigns/c89bdabcb2cb4ae583fa4c4baf6e635675e59834) are now NXDOMAIN — takedowns/expiry confirmed by double-checked DNS.

🔁 **Infra rotation** — [Brazilian 'Plataforma Oficial' Betting Kit Family](https://intel.webamon.com/campaigns/f04cc4c7e2513dcd0015e26eea0755ea908f3aab) moved onto **4,490** new IPs, and [Brazilian Casino Network (0007bet / 001bet / 001win / aavip)](https://intel.webamon.com/campaigns/0899610610c7f95d7b22ee8339b585b573f7a1b2) onto **4,006** new IPs — evasion or re-hosting behaviour; refresh blocklists.

🎭 **Lure refresh** — [Brazilian Online Casino Doorway Network (Cassino Online Brasil, 944bet / 001WIN / 0007bet)](https://intel.webamon.com/campaigns/b78ce38e9f9e53ef933db4c098dc27ef239353a6) deployed **1,185** new page titles — content templates are being rotated.

## 🦠 IOC Families

- **0APT Ransomware** (ransomware) — 20 indicators
- **AiLock Ransomware** (ransomware) — 41 indicators
- **Akira Ransomware** (ransomware) — 600 indicators
- **Anubis Backdoor** (malware) — 29 indicators
- **Anubis Ransomware** (ransomware) — 4 indicators

---

*Generated from open-source threat intelligence · TLP:CLEAR · [pranithjain.qzz.io](https://pranithjain.qzz.io)*
*Sources: NVD, CISA KEV, Webamon, OSSF Malicious Packages, Daily-Hunt IOC families*
