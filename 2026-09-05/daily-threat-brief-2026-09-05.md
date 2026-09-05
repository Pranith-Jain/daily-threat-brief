# Daily Threat Brief — Saturday, September 5, 2026

**TLP:CLEAR** · Auto-generated from open-source threat intelligence feeds

Aggregated daily intelligence from NVD, CISA KEV, Webamon campaign sensors, OSSF malicious packages, and IOC family databases.

## 📊 By the numbers

- **10** critical CVEs published recently
- **4** new CISA KEV additions (last 7 days)
- **62** campaigns with activity
- **8374** new malicious domains observed
- **765** domains went offline (NXDOMAIN, double-checked)
- **17501** infrastructure changes (new IPs / ASNs / certs)
- **0** newly disclosed malicious packages (3 days)

## 🔴 Critical CVEs

| CVE | Vendor | Product | CVSS | KEV |
|-----|--------|---------|------|-----|
| CVE-2025-67038 | Lantronix | EDS5000 | 9.8 | ⚠️ Yes |
| CVE-2026-9586 | Sangoma | Switchvox | 9.8 | ⚠️ Yes |
| CVE-2026-49869 | Kestra | Kestra OSS | 10 | ⚠️ Yes |
| CVE-2026-22306 | — | — | 10 | No |
| CVE-2026-75874 | — | — | 10 | No |
| CVE-2026-62512 | — | — | 9.9 | No |
| CVE-2026-62452 | — | — | 9.9 | No |
| CVE-2026-61317 | — | — | 9.9 | No |
| CVE-2026-75851 | — | — | 9.9 | No |
| CVE-2026-75843 | — | — | 9.9 | No |

## ⚠️ CISA KEV — New Additions

- **CVE-2026-9586** — Sangoma Switchvox: An unauthenticated SQL injection vulnerability exists in Sangoma Switchvox SMB Edition 8.3 (104997). The /pa endpoint processes XML content beginning with <PolycomIPPhone> and directly concatenates the user-controlled PhoneIP value into … (due: TBD)
- **CVE-2026-49869** — Kestra Kestra OSS: Kestra is an open-source, event-driven orchestration platform. Prior to 1.0.45 and 1.3.21, AuthenticationFilter in Kestra OSS uses request.getPath().endsWith("/configs") to whitelist the public configuration endpoint from Basic Auth. Bec… (due: TBD)
- **CVE-2026-59822** — BerriAI LiteLLM: LiteLLM is a proxy server (AI Gateway) to call LLM APIs in OpenAI (or native) format. Prior to 1.84.0, LiteLLM's MCP Streamable HTTP endpoint allowed an unauthenticated attacker to use a fabricated Authorization header to trigger an OAut… (due: TBD)
- **CVE-2026-48710** — Kludex Starlette: Starlette is a lightweight ASGI framework/toolkit. Prior to version 1.0.1, the HTTP `Host` request header was not validated before being used to reconstruct `request.url`. Because the routing algorithm relies on the raw HTTP path while `… (due: TBD)

## 🌐 Webamon Campaign Intelligence

Estate: 119 campaigns tracked · 872,821 unique domains · 85.4% online

### What moved today

🔺 **Fastest-growing** — [Rolling sqllq.com subdomain phishing](https://intel.webamon.com/campaigns/2f41c3bbec077af4f1c44fff61a425759f949713) added **4,709** new domains (100,000 tracked, 49% online) — active registration and rotation in progress.

🔻 **Takedowns** — **262** domains in [Gambling Infra ASN+SSL Pair (.vip/.cc)](https://intel.webamon.com/campaigns/c89bdabcb2cb4ae583fa4c4baf6e635675e59834) now resolve NXDOMAIN, dropping the estate to 47% online — takedowns/expiry confirmed.

🔁 **Infra rotation** — [Brazilian Casino Network (0007bet / 001bet / 001win / aavip)](https://intel.webamon.com/campaigns/0899610610c7f95d7b22ee8339b585b573f7a1b2) moved onto **3,958** new IPs, and [china k8 phishing portal](https://intel.webamon.com/campaigns/f8baac9d9fa365f2adf7414919aa45f6f37a0450) onto **4,521** — re-hosting behaviour; refresh blocklists.

🎭 **Lure refresh** — [Chinese World Cup 2026 Pirate-Streaming / SEO Doorway Network (.com.cn)](https://intel.webamon.com/campaigns/8c8cda729127366de0376f29c61575bd9378f148) deployed **1,175** new page titles — content templates are being cycled.

## 🦠 IOC Families

- **0APT Ransomware** (ransomware) — 20 indicators
- **AiLock Ransomware** (ransomware) — 41 indicators
- **Akira Ransomware** (ransomware) — 600 indicators
- **Anubis Backdoor** (malware) — 29 indicators
- **Anubis Ransomware** (ransomware) — 4 indicators

---

*Generated from open-source threat intelligence · TLP:CLEAR · [pranithjain.qzz.io](https://pranithjain.qzz.io)*
*Sources: NVD, CISA KEV, Webamon, OSSF Malicious Packages, Daily-Hunt IOC families*
