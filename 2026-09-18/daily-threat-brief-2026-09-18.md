# Daily Threat Brief — Friday, September 18, 2026

**TLP:CLEAR** · Auto-generated from open-source threat intelligence feeds

Aggregated daily intelligence from NVD, CISA KEV, Webamon campaign sensors, OSSF malicious packages, and IOC family databases.

## 📊 By the numbers

- **10** critical CVEs published recently
- **3** new CISA KEV additions (last 7 days)
- **56** campaigns with activity
- **12680** new malicious domains observed
- **1990** domains went offline
- **20749** infrastructure changes (IP / ASN / cert)
- **0** newly disclosed malicious packages (3 days)

## 🔴 Critical CVEs

| CVE | Vendor | Product | CVSS | KEV |
|-----|--------|---------|------|-----|
| CVE-2026-86060 | MikroTik | RouterOS | 9.8 | ⚠️ Yes |
| CVE-2026-81578 | PaperCut | NG/MF | 9.8 | ⚠️ Yes |
| CVE-2026-84869 | ConnectWise | ScreenConnect | 9.9 | ⚠️ Yes |
| CVE-2026-82078 | PaperCut | NG/MF | 9.1 | ⚠️ Yes |
| CVE-2026-65400 | Apple | macOS | 9.8 | ⚠️ Yes |
| CVE-2026-20079 | Cisco | Secure Firewall Management Center (FMC) and Security Cloud Control (SCC) Firewall Management | 10 | ⚠️ Yes |
| CVE-2026-82004 | — | — | 10 | No |
| CVE-2026-81467 | — | — | 9.8 | No |
| CVE-2026-88877 | — | — | 9.8 | No |
| CVE-2026-38626 | — | — | 9.8 | No |

## ⚠️ CISA KEV — New Additions

- **CVE-2026-84869** — ConnectWise ScreenConnect: A condition in the ScreenConnect client may allow files to be transferred and executed through an active remote session without authorization or Host confirmation in certain circumstances. ScreenConnect servers are not impacted. (due: TBD)
- **CVE-2026-42016** — JFrog Artifactory: JFrog Artifactory (Self Hosted) versions before 7.133.11 are vulnerable to a privilege escalation attack due to a validation check of the token signature/issuer and not the token’s scope. (due: TBD)
- **CVE-2026-42018** — JFrog Artifactory: JFrog Artifactory could return an internal anonymous-user token to an unauthenticated caller when anonymous access is disabled, potentially exposing sensitive resources. (due: TBD)

## 🌐 Webamon Campaign Intelligence

Estate: 119 campaigns tracked · 919,232 unique domains · 85.1% online

### What moved today

🔺 **Fastest-growing** — [Rolling sqllq.com subdomain phishing](https://intel.webamon.com/campaigns/2f41c3bbec077af4f1c44fff61a425759f949713) added **9,056** new domains — active registration/rotation in progress.

🔻 **Takedown movement** — **576** domains in [Gambling Infra ASN+SSL Pair (.vip/.cc)](https://intel.webamon.com/campaigns/c89bdabcb2cb4ae583fa4c4baf6e635675e59834) now NXDOMAIN — takedowns/expiry confirmed by double-checked DNS.

🔁 **Infra rotation** — [Brazilian Casino Network (0007bet / 001bet / 001win / aavip)](https://intel.webamon.com/campaigns/0899610610c7f95d7b22ee8339b585b573f7a1b2) moved onto **3,906** new IPs, and [china k8 phishing portal](https://intel.webamon.com/campaigns/f8baac9d9fa365f2adf7414919aa45f6f37a0450) onto **4,539** new IPs — evasion or re-hosting behaviour; refresh blocklists.

🎭 **Lure refresh** — [Chinese World Cup 2026 Pirate-Streaming / SEO Doorway Network (.com.cn)](https://intel.webamon.com/campaigns/8c8cda729127366de0376f29c61575bd9378f148) deployed **1,395** new page titles — content templates are being rotated.

## 🦠 IOC Families

- **0APT Ransomware** (ransomware) — 20 indicators
- **AiLock Ransomware** (ransomware) — 41 indicators
- **Akira Ransomware** (ransomware) — 600 indicators
- **Anubis Backdoor** (malware) — 29 indicators
- **Anubis Ransomware** (ransomware) — 4 indicators

---

*Generated from open-source threat intelligence · TLP:CLEAR · [pranithjain.qzz.io](https://pranithjain.qzz.io)*
*Sources: NVD, CISA KEV, Webamon, OSSF Malicious Packages, Daily-Hunt IOC families*
