# Daily Threat Brief — Wednesday, September 16, 2026

**TLP:CLEAR** · Auto-generated from open-source threat intelligence feeds

Aggregated daily intelligence from NVD, CISA KEV, Webamon campaign sensors, OSSF malicious packages, and IOC family databases.

## 📊 By the numbers

- **10** critical CVEs published recently
- **5** new CISA KEV additions (last 7 days)
- **68** campaigns with activity
- **6997** new malicious domains observed
- **949** domains went offline
- **16500** infrastructure changes (new IPs / ASNs / cert issuers)
- **0** newly disclosed malicious packages (3 days)

## 🔴 Critical CVEs

| CVE | Vendor | Product | CVSS | KEV |
|-----|--------|---------|------|-----|
| CVE-2026-81578 | PaperCut | NG/MF | 9.8 | ⚠️ Yes |
| CVE-2026-19490 | Citrix | NetScaler | 9.8 | ⚠️ Yes |
| CVE-2026-20079 | Cisco | Secure Firewall Management Center (FMC) and Security Cloud Control (SCC) Firewall Management | 10 | ⚠️ Yes |
| CVE-2026-82078 | PaperCut | NG/MF | 9.1 | ⚠️ Yes |
| CVE-2026-65400 | Apple | macOS | 9.8 | ⚠️ Yes |
| CVE-2022-41352 | Synacor | Zimbra Collaboration Suite (ZCS) | 9.8 | ⚠️ Yes |
| CVE-2016-4117 | Adobe | Flash Player | 9.8 | ⚠️ Yes |
| CVE-2026-85061 | — | — | 10 | No |
| CVE-2026-85507 | — | — | 9.8 | No |
| CVE-2026-85506 | — | — | 9.8 | No |

## ⚠️ CISA KEV — New Additions

- **CVE-2026-19490** — Citrix NetScaler: Vulnerability in NetScaler ADC and NetScaler Gateway.

This issue affects ADC: from 14.1 through 73.32 and from 13.1 through 63.21; Gateway: from 14.1 through 73.32 and from 13.1 through 63.21. (due: TBD)
- **CVE-2026-20079** — Cisco Secure Firewall Management Center (FMC) and Security Cloud Control (SCC) Firewall Management: A vulnerability in the web interface of Cisco Secure Firewall Management Center (FMC) Software could allow an unauthenticated, remote attacker to bypass authentication and execute script files on an affected device to obtain root access … (due: TBD)
- **CVE-2026-42016** — JFrog Artifactory: JFrog Artifactory (Self Hosted) versions before 7.133.11 are vulnerable to a privilege escalation attack due to a validation check of the token signature/issuer and not the token’s scope. (due: TBD)
- **CVE-2026-42018** — JFrog Artifactory: JFrog Artifactory could return an internal anonymous-user token to an unauthenticated caller when anonymous access is disabled, potentially exposing sensitive resources. (due: TBD)
- **CVE-2025-25249** — Fortinet Multiple Products: A heap-based buffer overflow vulnerability in Fortinet FortiOS 7.6.0 through 7.6.3, FortiOS 7.4.0 through 7.4.8, FortiOS 7.2.0 through 7.2.11, FortiOS 7.0.0 through 7.0.17, FortiOS 6.4 all versions, FortiSwitchManager 7.2.0 through 7.2.6… (due: TBD)

## 🌐 Webamon Campaign Intelligence

Estate: 119 campaigns tracked · 913,011 unique domains · 85.3% online

### What moved today

🔺 **Fastest-growing** — [Rolling sqllq.com subdomain phishing](https://intel.webamon.com/campaigns/2f41c3bbec077af4f1c44fff61a425759f949713) added **5,575** new domains this window — active registration/rotation in progress.

🔻 **Takedowns** — **272** domains in the [Chinese Black-Hat SEO Spider-Pool Network (蜘蛛池 / Baidu-cloak)](https://intel.webamon.com/campaigns/9f40b956738cd5c3f6fa7cd750b6db22898a5282) now resolve NXDOMAIN — takedowns/expiry confirmed by double-checked DNS.

🔁 **Infra rotation** — [china k8 phishing portal](https://intel.webamon.com/campaigns/f8baac9d9fa365f2adf7414919aa45f6f37a0450) moved onto **3,904** new IPs, and the [Brazilian 'Plataforma Oficial' Betting Kit Family](https://intel.webamon.com/campaigns/f04cc4c7e2513dcd0015e26eea0755ea908f3aab) onto **2,782** — re-hosting/evasion behaviour; refresh blocklists.

🎭 **Lure refresh** — the [Brazilian 'Plataforma Oficial' Betting Kit Family](https://intel.webamon.com/campaigns/f04cc4c7e2513dcd0015e26eea0755ea908f3aab) deployed **1,029** new page titles; [Brazilian Casino Network (0007bet / 001bet / 001win / aavip)](https://intel.webamon.com/campaigns/0899610610c7f95d7b22ee8339b585b573f7a1b2) rotated in **972**.

## 🦠 IOC Families

- **0APT Ransomware** (ransomware) — 20 indicators
- **AiLock Ransomware** (ransomware) — 41 indicators
- **Akira Ransomware** (ransomware) — 600 indicators
- **Anubis Backdoor** (malware) — 29 indicators
- **Anubis Ransomware** (ransomware) — 4 indicators

---

*Generated from open-source threat intelligence · TLP:CLEAR · [pranithjain.qzz.io](https://pranithjain.qzz.io)*
*Sources: NVD, CISA KEV, Webamon, OSSF Malicious Packages, Daily-Hunt IOC families*
