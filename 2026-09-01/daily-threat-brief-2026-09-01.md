# Daily Threat Brief — Tuesday, September 1, 2026

**TLP:CLEAR** · Auto-generated from open-source threat intelligence feeds

Aggregated daily intelligence from NVD, CISA KEV, Webamon campaign sensors, OSSF malicious packages, and IOC family databases.

## 📊 By the numbers

- **10** critical CVEs published recently
- **5** new CISA KEV additions (last 7 days)
- **62** campaigns with activity
- **7866** new malicious domains observed
- **464** domains went offline (NXDOMAIN, double-checked)
- **16254** infrastructure changes (new IPs / ASNs / cert issuers)
- **0** newly disclosed malicious packages (3 days)

## 🔴 Critical CVEs

| CVE | Vendor | Product | CVSS | KEV |
|-----|--------|---------|------|-----|
| CVE-2026-48282 | Adobe | ColdFusion | 10 | ⚠️ Yes |
| CVE-2026-8452 | Citrix | NetScaler ADC and NetScaler Gateway | 9.8 | ⚠️ Yes |
| CVE-2020-1938 | Apache | Tomcat | 9.8 | ⚠️ Yes |
| CVE-2019-2725 | Oracle | WebLogic Server | 9.8 | ⚠️ Yes |
| CVE-2018-1273 | VMware Tanzu | Spring Data Commons | 9.8 | ⚠️ Yes |
| CVE-2016-8735 | Apache | Tomcat | 9.8 | ⚠️ Yes |
| CVE-2023-49105 | ownCloud | ownCloud | 9.8 | ⚠️ Yes |
| CVE-2026-67622 | — | — | 9.9 | No |
| CVE-2026-14812 | — | — | 10 | No |
| CVE-2026-11976 | — | — | 10 | No |

## ⚠️ CISA KEV — New Additions

- **CVE-2026-8452** — Citrix NetScaler ADC and NetScaler Gateway: Memory overflow vulnerability NetScaler ADC and NetScaler Gateway leading to unpredictable or erroneous behavior and Denial of Service if the appliance is configured as a Gateway (SSL VPN, ICA Proxy, CVPN, RDP Proxy) or AAA virtual server (due: TBD)
- **CVE-2023-49105** — ownCloud ownCloud: An issue was discovered in ownCloud owncloud/core before 10.13.1. An attacker can access, modify, or delete any file without authentication if the username of a victim is known, and the victim has no signing-key configured. This occurs b… (due: TBD)
- **CVE-2026-53362** — Linux Kernel: In the Linux kernel, the following vulnerability has been resolved:

ipv6: account for fraggap on the paged allocation path

In __ip6_append_data(), when the paged-allocation branch is taken
(MSG_MORE / NETIF_F_SG / large fraglen), alloc… (due: TBD)
- **CVE-2019-1068** — Microsoft SQL Server: A remote code execution vulnerability exists in Microsoft SQL Server when it incorrectly handles processing of internal functions, aka 'Microsoft SQL Server Remote Code Execution Vulnerability'. (due: TBD)
- **CVE-2021-23758** — Ajax.NET Professional Ajax.NET Professional: All versions of package ajaxpro.2 are vulnerable to Deserialization of Untrusted Data due to the possibility of deserialization of arbitrary .NET classes, which can be abused to gain remote code execution. (due: TBD)

## 🌐 Webamon Campaign Intelligence

Estate: 119 campaigns tracked · 852,863 unique domains · 88% online

### What moved today

🔺 **Fastest-growing** — [Rolling sqllq.com subdomain phishing](https://intel.webamon.com/campaigns/2f41c3bbec077af4f1c44fff61a425759f949713) added 4,363 new domains this window — active registration/rotation in progress.

🔻 **Takedown movement** — 274 domains in [Gambling Infra ASN+SSL Pair (.vip/.cc)](https://intel.webamon.com/campaigns/c89bdabcb2cb4ae583fa4c4baf6e635675e59834) now resolve NXDOMAIN — takedowns/expiry confirmed by double-checked DNS.

🔁 **Infra rotation** — [Brazilian Casino Network (0007bet / 001bet / 001win / aavip)](https://intel.webamon.com/campaigns/0899610610c7f95d7b22ee8339b585b573f7a1b2) moved onto 3,783 new IPs, and [china k8 phishing portal](https://intel.webamon.com/campaigns/f8baac9d9fa365f2adf7414919aa45f6f37a0450) onto 4,589 new IPs — evasion or re-hosting behaviour; refresh blocklists.

🎭 **Lure refresh** — [Brazilian Casino Network (0007bet / 001bet / 001win / aavip)](https://intel.webamon.com/campaigns/0899610610c7f95d7b22ee8339b585b573f7a1b2) deployed 1,174 new page titles — content templates are being rotated.

## 🦠 IOC Families

- **0APT Ransomware** (ransomware) — 20 indicators
- **AiLock Ransomware** (ransomware) — 41 indicators
- **Akira Ransomware** (ransomware) — 600 indicators
- **Anubis Backdoor** (malware) — 29 indicators
- **Anubis Ransomware** (ransomware) — 4 indicators

---

*Generated from open-source threat intelligence · TLP:CLEAR · [pranithjain.qzz.io](https://pranithjain.qzz.io)*
*Sources: NVD, CISA KEV, Webamon, OSSF Malicious Packages, Daily-Hunt IOC families*
