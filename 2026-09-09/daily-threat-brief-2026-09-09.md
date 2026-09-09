# Daily Threat Brief — Wednesday, September 9, 2026

**TLP:CLEAR** · Auto-generated from open-source threat intelligence feeds

Aggregated daily intelligence from NVD, CISA KEV, Webamon campaign sensors, OSSF malicious packages, and IOC family databases.

## 📊 By the numbers

- **10** critical CVEs published recently
- **4** new CISA KEV additions (last 7 days)
- **60** campaigns with activity
- **7274** new malicious domains observed
- **576** domains went offline (NXDOMAIN, double-checked)
- **20140** infrastructure changes (new IPs / ASNs / cert issuers)
- **0** newly disclosed malicious packages (3 days)

## 🔴 Critical CVEs

| CVE | Vendor | Product | CVSS | KEV |
|-----|--------|---------|------|-----|
| CVE-2025-67038 | Lantronix | EDS5000 | 9.8 | ⚠️ Yes |
| CVE-2025-14733 | WatchGuard | Firebox | 9.8 | ⚠️ Yes |
| CVE-2026-9586 | Sangoma | Switchvox | 9.8 | ⚠️ Yes |
| CVE-2026-49869 | Kestra | Kestra OSS | 10 | ⚠️ Yes |
| CVE-2026-80138 | — | — | 9.8 | No |
| CVE-2026-65083 | — | — | 9.9 | No |
| CVE-2026-69502 | — | — | 10 | No |
| CVE-2026-63509 | — | — | 9.9 | No |
| CVE-2026-61317 | — | — | 9.9 | No |
| CVE-2026-55166 | — | — | 9.9 | No |

## ⚠️ CISA KEV — New Additions

- **CVE-2026-9586** — Sangoma Switchvox: An unauthenticated SQL injection vulnerability exists in Sangoma Switchvox SMB Edition 8.3 (104997). The /pa endpoint processes XML content beginning with <PolycomIPPhone> and directly concatenates the user-controlled PhoneIP value into … (due: TBD)
- **CVE-2026-49869** — Kestra Kestra OSS: Kestra is an open-source, event-driven orchestration platform. Prior to 1.0.45 and 1.3.21, AuthenticationFilter in Kestra OSS uses request.getPath().endsWith("/configs") to whitelist the public configuration endpoint from Basic Auth. Bec… (due: TBD)
- **CVE-2026-59822** — BerriAI LiteLLM: LiteLLM is a proxy server (AI Gateway) to call LLM APIs in OpenAI (or native) format. Prior to 1.84.0, LiteLLM's MCP Streamable HTTP endpoint allowed an unauthenticated attacker to use a fabricated Authorization header to trigger an OAut… (due: TBD)
- **CVE-2026-48710** — Kludex Starlette: Starlette is a lightweight ASGI framework/toolkit. Prior to version 1.0.1, the HTTP `Host` request header was not validated before being used to reconstruct `request.url`. Because the routing algorithm relies on the raw HTTP path while `… (due: TBD)

## 🌐 Webamon Campaign Intelligence

Estate: 119 campaigns tracked · 889,003 unique domains · 85.3% online

### What moved today

🔺 **Fastest-growing** — [Rolling sqllq.com subdomain phishing](https://intel.webamon.com/campaigns/2f41c3bbec077af4f1c44fff61a425759f949713) added **3,471** new domains this window — active registration/rotation in progress.

🔻 **Takedown movement** — **174** domains in [Gambling Infra ASN+SSL Pair (.vip/.cc)](https://intel.webamon.com/campaigns/c89bdabcb2cb4ae583fa4c4baf6e635675e59834) now resolve NXDOMAIN — takedowns/expiry confirmed by double-checked DNS.

🔁 **Infra rotation** — [Brazilian Casino Network (0007bet / 001bet / 001win / aavip)](https://intel.webamon.com/campaigns/0899610610c7f95d7b22ee8339b585b573f7a1b2) moved onto **3,970** new IPs, and [Brazilian 'Plataforma Oficial' Betting Kit Family](https://intel.webamon.com/campaigns/f04cc4c7e2513dcd0015e26eea0755ea908f3aab) onto **4,544** new IPs — evasion or re-hosting behaviour; refresh blocklists.

🎭 **Lure refresh** — [Brazilian Online Casino Doorway Network (Cassino Online Brasil, 944bet / 001WIN / 0007bet)](https://intel.webamon.com/campaigns/b78ce38e9f9e53ef933db4c098dc27ef239353a6) deployed **1,186** new page titles — content templates are being rotated.

## 🦠 IOC Families

- **0APT Ransomware** (ransomware) — 20 indicators
- **AiLock Ransomware** (ransomware) — 41 indicators
- **Akira Ransomware** (ransomware) — 600 indicators
- **Anubis Backdoor** (malware) — 29 indicators
- **Anubis Ransomware** (ransomware) — 4 indicators

---

*Generated from open-source threat intelligence · TLP:CLEAR · [pranithjain.qzz.io](https://pranithjain.qzz.io)*
*Sources: NVD, CISA KEV, Webamon, OSSF Malicious Packages, Daily-Hunt IOC families*
