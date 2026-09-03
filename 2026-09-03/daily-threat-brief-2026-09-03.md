# Daily Threat Brief — Thursday, September 3, 2026

**TLP:CLEAR** · Auto-generated from open-source threat intelligence feeds

Aggregated daily intelligence from NVD, CISA KEV, Webamon campaign sensors, OSSF malicious packages, and IOC family databases.

## 📊 By the numbers

- **10** critical CVEs published recently
- **5** new CISA KEV additions (last 7 days)
- **67** campaigns with activity
- **12502** new malicious domains observed
- **21706** domains went offline (double-checked DNS)
- **27538** infrastructure changes (IP / ASN / cert)
- **0** newly disclosed malicious packages (3 days)

## 🔴 Critical CVEs

| CVE | Vendor | Product | CVSS | KEV |
|-----|--------|---------|------|-----|
| CVE-2026-48282 | Adobe | ColdFusion | 10 | ⚠️ Yes |
| CVE-2026-9586 | Sangoma | Switchvox | 9.8 | ⚠️ Yes |
| CVE-2026-49869 | Kestra | Kestra OSS | 10 | ⚠️ Yes |
| CVE-2023-49105 | ownCloud | ownCloud | 9.8 | ⚠️ Yes |
| CVE-2026-59500 | — | — | 10 | No |
| CVE-2026-66898 | — | — | 9.9 | No |
| CVE-2026-63300 | — | — | 9.9 | No |
| CVE-2026-63299 | — | — | 9.9 | No |
| CVE-2026-63298 | — | — | 9.9 | No |
| CVE-2026-63297 | — | — | 9.9 | No |

## ⚠️ CISA KEV — New Additions

- **CVE-2026-9586** — Sangoma Switchvox: An unauthenticated SQL injection vulnerability exists in Sangoma Switchvox SMB Edition 8.3 (104997). The /pa endpoint processes XML content beginning with <PolycomIPPhone> and directly concatenates the user-controlled PhoneIP value into … (due: TBD)
- **CVE-2026-49869** — Kestra Kestra OSS: Kestra is an open-source, event-driven orchestration platform. Prior to 1.0.45 and 1.3.21, AuthenticationFilter in Kestra OSS uses request.getPath().endsWith("/configs") to whitelist the public configuration endpoint from Basic Auth. Bec… (due: TBD)
- **CVE-2026-59822** — BerriAI LiteLLM: LiteLLM is a proxy server (AI Gateway) to call LLM APIs in OpenAI (or native) format. Prior to 1.84.0, LiteLLM's MCP Streamable HTTP endpoint allowed an unauthenticated attacker to use a fabricated Authorization header to trigger an OAut… (due: TBD)
- **CVE-2023-49105** — ownCloud ownCloud: An issue was discovered in ownCloud owncloud/core before 10.13.1. An attacker can access, modify, or delete any file without authentication if the username of a victim is known, and the victim has no signing-key configured. This occurs b… (due: TBD)
- **CVE-2026-53362** — Linux Kernel: In the Linux kernel, the following vulnerability has been resolved:

ipv6: account for fraggap on the paged allocation path

In __ip6_append_data(), when the paged-allocation branch is taken
(MSG_MORE / NETIF_F_SG / large fraglen), alloc… (due: TBD)

## 🌐 Webamon Campaign Intelligence

Estate: 119 campaigns tracked · 863,085 unique domains · 85.6% online

### What moved today

🔺 **Fastest-growing** — [Rolling sqllq.com subdomain phishing](https://intel.webamon.com/campaigns/2f41c3bbec077af4f1c44fff61a425759f949713) added **4,659** new domains this window — active registration/rotation in progress.

🔻 **Takedown movement** — **20,498** domains in the [Gambling Affiliate Registration Redirect Network (Meteverse /app/register.php)](https://intel.webamon.com/campaigns/ec61331d3817418cbcf3dd1bf2ac7ac20cf48678) now resolve NXDOMAIN — takedowns/expiry confirmed by double-checked DNS.

🔁 **Infra rotation** — [Brazilian Online Casino Doorway Network (Cassino Online Brasil, 944bet / 001WIN / 0007bet)](https://intel.webamon.com/campaigns/b78ce38e9f9e53ef933db4c098dc27ef239353a6) moved onto **4,196** new IPs, and [Brazilian Casino Network (0007bet / 001bet / 001win / aavip)](https://intel.webamon.com/campaigns/0899610610c7f95d7b22ee8339b585b573f7a1b2) onto **3,843** — evasion or re-hosting; refresh blocklists.

🎭 **Lure refresh** — [Chinese World Cup 2026 Pirate-Streaming / SEO Doorway Network (.com.cn)](https://intel.webamon.com/campaigns/8c8cda729127366de0376f29c61575bd9378f148) deployed **1,167** new page titles — templates are being rotated.

## 🦠 IOC Families

- **0APT Ransomware** (ransomware) — 20 indicators
- **AiLock Ransomware** (ransomware) — 41 indicators
- **Akira Ransomware** (ransomware) — 600 indicators
- **Anubis Backdoor** (malware) — 29 indicators
- **Anubis Ransomware** (ransomware) — 4 indicators

---

*Generated from open-source threat intelligence · TLP:CLEAR · [pranithjain.qzz.io](https://pranithjain.qzz.io)*
*Sources: NVD, CISA KEV, Webamon, OSSF Malicious Packages, Daily-Hunt IOC families*
