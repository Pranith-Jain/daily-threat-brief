# Daily Threat Brief — Tuesday, September 22, 2026

**TLP:CLEAR** · Auto-generated from open-source threat intelligence feeds

Aggregated daily intelligence from NVD, CISA KEV, Webamon campaign sensors, OSSF malicious packages, and IOC family databases.

## 📊 By the numbers

- **10** critical CVEs published recently
- **4** new CISA KEV additions (last 7 days)
- **58** campaigns with activity
- **9479** new malicious domains observed
- **773** domains went offline (NXDOMAIN, double-checked)
- **26618** infrastructure changes (new IPs / ASNs / cert issuers)
- **0** newly disclosed malicious packages (3 days)

## 🔴 Critical CVEs

| CVE | Vendor | Product | CVSS | KEV |
|-----|--------|---------|------|-----|
| CVE-2026-65400 | Apple | macOS | 9.8 | ⚠️ Yes |
| CVE-2024-40766 | SonicWall | SonicOS | 9.8 | ⚠️ Yes |
| CVE-2026-20079 | Cisco | Secure Firewall Management Center (FMC) and Security Cloud Control (SCC) Firewall Management | 10 | ⚠️ Yes |
| CVE-2025-39682 | Linux | Kernel | 9.8 | ⚠️ Yes |
| CVE-2026-80462 | — | — | 10 | No |
| CVE-2026-87719 | — | — | 9.9 | No |
| CVE-2026-89708 | — | — | 9.8 | No |
| CVE-2026-89676 | — | — | 9.8 | No |
| CVE-2026-89660 | — | — | 9.8 | No |
| CVE-2026-89659 | — | — | 9.8 | No |

## ⚠️ CISA KEV — New Additions

- **CVE-2026-7273** — Zyxel GS1900 Series Switches: A stack-based buffer overflow vulnerability in the CGI program of Zyxel GS1900-48HPv2 firmware versions through 2.90(ABTQ.1)C0 could allow a LAN-based, unauthenticated attacker to exploit the flaw and potentially execute OS commands via … (due: TBD)
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

Estate: 119 campaigns tracked · 936,207 unique domains · 84.8% online

### What moved today

🔺 **Fastest-growing** — [Rolling sqllq.com subdomain phishing](https://intel.webamon.com/campaigns/2f41c3bbec077af4f1c44fff61a425759f949713) added **4,258** new domains this window — active registration/rotation in progress.

🔻 **Takedown movement** — **173** domains in [Gambling Infra ASN+SSL Pair (.vip/.cc)](https://intel.webamon.com/campaigns/c89bdabcb2cb4ae583fa4c4baf6e635675e59834) now NXDOMAIN — takedowns/expiry confirmed by double-checked DNS. Estate liveness is down to 34%.

🔁 **Infra rotation** — [Brazilian 'Plataforma Oficial' Betting Kit Family](https://intel.webamon.com/campaigns/f04cc4c7e2513dcd0015e26eea0755ea908f3aab) moved onto **4,694** new IPs, and [Brazilian Casino Network (0007bet / 001bet / 001win / aavip)](https://intel.webamon.com/campaigns/0899610610c7f95d7b22ee8339b585b573f7a1b2) onto **3,931** — evasion or re-hosting; refresh blocklists.

🎭 **Lure refresh** — [Brazilian Online Casino Doorway Network (Cassino Online Brasil, 944bet / 001WIN / 0007bet)](https://intel.webamon.com/campaigns/b78ce38e9f9e53ef933db4c098dc27ef239353a6) deployed **1,171** new page titles — content templates are being rotated.

## 🦠 IOC Families

- **0APT Ransomware** (ransomware) — 20 indicators
- **AiLock Ransomware** (ransomware) — 41 indicators
- **Akira Ransomware** (ransomware) — 600 indicators
- **Anubis Backdoor** (malware) — 29 indicators
- **Anubis Ransomware** (ransomware) — 4 indicators

---

*Generated from open-source threat intelligence · TLP:CLEAR · [pranithjain.qzz.io](https://pranithjain.qzz.io)*
*Sources: NVD, CISA KEV, Webamon, OSSF Malicious Packages, Daily-Hunt IOC families*
