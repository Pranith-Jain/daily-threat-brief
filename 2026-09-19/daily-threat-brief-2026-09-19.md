# Daily Threat Brief — Saturday, September 19, 2026

**TLP:CLEAR** · Auto-generated from open-source threat intelligence feeds

Aggregated daily intelligence from NVD, CISA KEV, Webamon campaign sensors, OSSF malicious packages, and IOC family databases.

## 📊 By the numbers

- **10** critical CVEs published recently
- **3** new CISA KEV additions (last 7 days)
- **62** campaigns with activity
- **7360** new malicious domains observed
- **921** domains went offline (NXDOMAIN, double-checked)
- **20768** infrastructure changes (IP / ASN / cert)
- **0** newly disclosed malicious packages (3 days)

## 🔴 Critical CVEs

| CVE | Vendor | Product | CVSS | KEV |
|-----|--------|---------|------|-----|
| CVE-2026-81578 | PaperCut | NG/MF | 9.8 | ⚠️ Yes |
| CVE-2026-82078 | PaperCut | NG/MF | 9.1 | ⚠️ Yes |
| CVE-2026-65400 | Apple | macOS | 9.8 | ⚠️ Yes |
| CVE-2026-20079 | Cisco | Secure Firewall Management Center (FMC) and Security Cloud Control (SCC) Firewall Management | 10 | ⚠️ Yes |
| CVE-2025-39682 | Linux | Kernel | 9.8 | ⚠️ Yes |
| CVE-2026-81204 | — | — | 9.8 | No |
| CVE-2026-79724 | — | — | 9.8 | No |
| CVE-2026-78573 | — | — | 9.8 | No |
| CVE-2026-89094 | — | — | 9.9 | No |
| CVE-2026-85025 | — | — | 9.8 | No |

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

Estate: 119 campaigns tracked · 921,990 unique domains · 85% online

### What moved today

🔺 **Fastest-growing** — [Rolling sqllq.com subdomain phishing](https://intel.webamon.com/campaigns/2f41c3bbec077af4f1c44fff61a425759f949713) added 4,255 new domains — active registration/rotation in progress.

🔻 **Takedown movement** — 257 domains in [Malicious Mobile Campaign Targeting China](https://intel.webamon.com/campaigns/04693c82868a2d56a98bbed5a1e9bb587c477680) now resolve NXDOMAIN — takedowns/expiry confirmed.

🔁 **Infra rotation** — [china k8 phishing portal](https://intel.webamon.com/campaigns/f8baac9d9fa365f2adf7414919aa45f6f37a0450) moved onto 4,677 new IPs, and [Brazilian Casino Network (0007bet / 001bet / 001win / aavip)](https://intel.webamon.com/campaigns/0899610610c7f95d7b22ee8339b585b573f7a1b2) onto 3,964 — refresh blocklists.

🎭 **Lure refresh** — [Chinese World Cup 2026 Pirate-Streaming / SEO Doorway Network (.com.cn)](https://intel.webamon.com/campaigns/8c8cda729127366de0376f29c61575bd9378f148) deployed 1,200 new page titles across 10,242 domains.

## 🦠 IOC Families

- **0APT Ransomware** (ransomware) — 20 indicators
- **AiLock Ransomware** (ransomware) — 41 indicators
- **Akira Ransomware** (ransomware) — 600 indicators
- **Anubis Backdoor** (malware) — 29 indicators
- **Anubis Ransomware** (ransomware) — 4 indicators

---

*Generated from open-source threat intelligence · TLP:CLEAR · [pranithjain.qzz.io](https://pranithjain.qzz.io)*
*Sources: NVD, CISA KEV, Webamon, OSSF Malicious Packages, Daily-Hunt IOC families*
