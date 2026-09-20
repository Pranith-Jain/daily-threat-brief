# Daily Threat Brief — Sunday, September 20, 2026

**TLP:CLEAR** · Auto-generated from open-source threat intelligence feeds

Aggregated daily intelligence from NVD, CISA KEV, Webamon campaign sensors, OSSF malicious packages, and IOC family databases.

## 📊 By the numbers

- **10** critical CVEs published recently
- **3** new CISA KEV additions (last 7 days)
- **55** campaigns with activity
- **12624** new malicious domains observed
- **545** domains went offline (NXDOMAIN, double-checked)
- **28834** infrastructure changes (IP / ASN / cert)
- **0** newly disclosed malicious packages (3 days)

## 🔴 Critical CVEs

| CVE | Vendor | Product | CVSS | KEV |
|-----|--------|---------|------|-----|
| CVE-2026-81578 | PaperCut | NG/MF | 9.8 | ⚠️ Yes |
| CVE-2026-65400 | Apple | macOS | 9.8 | ⚠️ Yes |
| CVE-2026-82078 | PaperCut | NG/MF | 9.1 | ⚠️ Yes |
| CVE-2026-20079 | Cisco | Secure Firewall Management Center (FMC) and Security Cloud Control (SCC) Firewall Management | 10 | ⚠️ Yes |
| CVE-2025-39682 | Linux | Kernel | 9.8 | ⚠️ Yes |
| CVE-2026-89094 | — | — | 9.9 | No |
| CVE-2026-85025 | — | — | 9.8 | No |
| CVE-2026-52098 | — | — | 9.8 | No |
| CVE-2026-88018 | — | — | 9.8 | No |
| CVE-2026-81467 | — | — | 9.8 | No |

## ⚠️ CISA KEV — New Additions

- **CVE-2026-53266** — Linux Kernel: In the Linux kernel, the following vulnerability has been resolved:

netfilter: bridge: make ebt_snat ARP rewrite writable

The ebtables SNAT target keeps the Ethernet source address rewrite
behind skb_ensure_writable(skb, 0).  This is i… (due: TBD)
- **CVE-2025-39682** — Linux Kernel: In the Linux kernel, the following vulnerability has been resolved:

tls: fix handling of zero-length records on the rx_list

Each recvmsg() call must process either
 - only contiguous DATA records (any number of them)
 - one non-DATA re… (due: TBD)
- **CVE-2025-39964** — Linux Kernel: In the Linux kernel, the following vulnerability has been resolved:

crypto: af_alg - Disallow concurrent writes in af_alg_sendmsg

Issuing two writes to the same af_alg socket is bogus as the
data will be interleaved in an unpredictable… (due: TBD)

## 🌐 Webamon Campaign Intelligence

Estate: 119 campaigns tracked · 927,315 unique domains · 85.1% online

### What moved today

🔺 **Fastest-growing** — [Rolling sqllq.com subdomain phishing](https://intel.webamon.com/campaigns/2f41c3bbec077af4f1c44fff61a425759f949713) added **6,464** new domains — active registration/rotation in progress.

🔻 **Takedowns** — 144 domains in [Gambling Infra ASN+SSL Pair (.vip/.cc)](https://intel.webamon.com/campaigns/c89bdabcb2cb4ae583fa4c4baf6e635675e59834) now resolve NXDOMAIN — takedowns/expiry confirmed. Estate liveness for this cluster sits at 35%.

🔁 **Infra rotation** — [Brazilian Online Casino Doorway Network (Cassino Online Brasil, 944bet / 001WIN / 0007bet)](https://intel.webamon.com/campaigns/b78ce38e9f9e53ef933db4c098dc27ef239353a6) moved onto **4,234** new IPs, and [Brazilian Casino Network (0007bet / 001bet / 001win / aavip)](https://intel.webamon.com/campaigns/0899610610c7f95d7b22ee8339b585b573f7a1b2) onto **3,870** — re-hosting behaviour; refresh blocklists.

🎭 **Lure refresh** — [Chinese World Cup 2026 Pirate-Streaming / SEO Doorway Network (.com.cn)](https://intel.webamon.com/campaigns/8c8cda729127366de0376f29c61575bd9378f148) deployed **1,198** new page titles on just 1 new domain — pure template rotation.

## 🦠 IOC Families

- **0APT Ransomware** (ransomware) — 20 indicators
- **AiLock Ransomware** (ransomware) — 41 indicators
- **Akira Ransomware** (ransomware) — 600 indicators
- **Anubis Backdoor** (malware) — 29 indicators
- **Anubis Ransomware** (ransomware) — 4 indicators

---

*Generated from open-source threat intelligence · TLP:CLEAR · [pranithjain.qzz.io](https://pranithjain.qzz.io)*
*Sources: NVD, CISA KEV, Webamon, OSSF Malicious Packages, Daily-Hunt IOC families*
