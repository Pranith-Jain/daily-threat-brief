# Weekly Threat Briefing — 2026-07-13 – 2026-07-19

> **weekly** · 2026-07-13 – 2026-07-19 · Generated 2026-07-20 01:01 UTC

## Executive Summary

This week (2026-07-13 – 2026-07-19), CISA added 9 new KEV entries and 1139 additional high/critical CVEs were published (NVD, cvefeed.io, MyThreatIntel), including 152 critical-severity affecting Fortinet, Microsoft, SonicWall. Active threat indicators per source URLhaus 3,193, ThreatFox 920, MalwareBazaar 651, TweetFeed 2 — 10,182 unique after cross-source dedup; all 10113 indicators (3675 malware-distribution URLs, 2328 malicious domains, 686 suspicious IPs, 3424 malware sample hashes) are included in the IOC dump. Reference only — verify all indicators in your own environment and apply vendor patches per CISA KEV due-date guidance.

## Stats

| Metric | Count |
|--------|-------|
| Findings | 1459 |
| CVEs | 1148 |
| KEVs | 9 |
| IOCs | 10182 |
| Critical | 152 |
| High | 994 |
| Ransomware victims | 311 |

## Critical Remote Code Execution Vulnerabilities (64)

_Vulnerabilities allowing arbitrary code execution on affected systems — patch immediately._

| Severity | Finding | MITRE | Description |
|----------|---------|-------|-------------|
| 🔴 critical | CVE-2026-14453: This vulnerability is a critical Server-Side Template Injection (SSTI) in Centreon's ce… | `T1190` | This vulnerability is a critical Server-Side Template Injection (SSTI) in Centreon's centreon-open-tickets module that l |
| 🔴 critical | CVE-2026-57811: Improper Control of Generation of Code ('Code Injection') vulnerability in Realtyna Rea… | — | Improper Control of Generation of Code ('Code Injection') vulnerability in Realtyna Realtyna Organic IDX plugin real-est |
| 🔴 critical | CVE-2026-61500: Rejetto HFS 3.0.0 through 3.2.0 derives its session-cookie signing key from the non-cry… | `T1190` | Rejetto HFS 3.0.0 through 3.2.0 derives its session-cookie signing key from the non-cryptographic Math.random() generato |
| 🔴 critical | CVE-2026-58409: ChurchCRM is an open-source church management system. | `T1190` | ChurchCRM is an open-source church management system. Prior to version 7.4.0, an authenticated administrator can achieve |
| 🔴 critical | CVE-2026-13001: The Podlove Podcast Publisher plugin for WordPress is vulnerable to arbitrary file uplo… | `T1190` | The Podlove Podcast Publisher plugin for WordPress is vulnerable to arbitrary file uploads due to missing file type vali |
| 🔴 critical | CVE-2026-48356: Adobe Commerce is affected by an Unrestricted Upload of File with Dangerous Type vulner… | `T1190` | Adobe Commerce is affected by an Unrestricted Upload of File with Dangerous Type vulnerability that could result in arbi |
| 🔴 critical | CVE-2026-48358: Adobe Commerce is affected by an Improper Encoding or Escaping of Output vulnerability … | `T1190` | Adobe Commerce is affected by an Improper Encoding or Escaping of Output vulnerability that could result in arbitrary co |
| 🔴 critical | CVE-2026-48359: Adobe Experience Manager is affected by an Improper Restriction of XML External Entity … | `T1190` | Adobe Experience Manager is affected by an Improper Restriction of XML External Entity Reference ('XXE') vulnerability t |
| 🔴 critical | CVE-2026-48284: ColdFusion is affected by an Improper Input Validation vulnerability that could result … | `T1190` | ColdFusion is affected by an Improper Input Validation vulnerability that could result in arbitrary code execution in th |
| 🔴 critical | CVE-2026-48322: ColdFusion is affected by an Improper Control of Generation of Code ('Code Injection') … | `T1190` | ColdFusion is affected by an Improper Control of Generation of Code ('Code Injection') vulnerability that could result i |
| 🔴 critical | CVE-2026-48334: Illustrator is affected by an Improper Input Validation vulnerability that could result… | `T1190` | Illustrator is affected by an Improper Input Validation vulnerability that could result in arbitrary code execution in t |
| 🔴 critical | CVE-2026-11386: An input validation and injection vulnerability exists in Canonical ubuntu-pro-client (… | `T1190` | An input validation and injection vulnerability exists in Canonical ubuntu-pro-client (formerly ubuntu-advantage-tools). |
| 🔴 critical | CVE-2026-44632: Yamcs is a mission control framework. | `T1190` | Yamcs is a mission control framework. Prior to 5.12.7, a server-side code injection vulnerability existed in the Yamcs a |
| 🔴 critical | CVE-2026-46562: Yamcs is a mission control framework. | — | Yamcs is a mission control framework. Prior to 5.12.7, the Nashorn ScriptEngine used to evaluate user-supplied JavaScrip |
| 🔴 critical | CVE-2026-46621: Yamcs is a mission control framework. | `T1190` | Yamcs is a mission control framework. Prior to 5.12.7, the Yamcs script evaluation engine for Python algorithms dynamica |
| 🔴 critical | CVE-2026-46512: Frogman provides headless PBX control through MCP and HTTP API. | — | Frogman provides headless PBX control through MCP and HTTP API. Prior to 1.6.2, fm_dialplan_apply accepted template para |
| 🔴 critical | CVE-2026-9198: IBM Langflow OSS 1.0.0 through 1.10.0 allows unauthenticated attackers to chain /api/v1… | `T1190` | IBM Langflow OSS 1.0.0 through 1.10.0 allows unauthenticated attackers to chain /api/v1/auto_login (mints SUPERUSER toke |
| 🔴 critical | CVE-2026-9135: IBM Langflow OSS 1.0.0 through 1.10.0 Langflow versions up to 1.9.2 (commit 94981c443d4… | — | IBM Langflow OSS 1.0.0 through 1.10.0 Langflow versions up to 1.9.2 (commit 94981c443d4918517b9e8163d70fc598dc33a32d) co |
| 🔴 critical | CVE-2026-8481: IBM Langflow OSS 1.0.0 through 1.10.0 contain a critical remote code execution vulnerab… | `T1190` | IBM Langflow OSS 1.0.0 through 1.10.0 contain a critical remote code execution vulnerability in the code validation API  |
| 🔴 critical | CVE-2026-8505: IBM Langflow OSS 1.0.0 through 1.10.0 has a vulnerability in Langflow's webhook authent… | `T1190` | IBM Langflow OSS 1.0.0 through 1.10.0 has a vulnerability in Langflow's webhook authentication logic allows unauthentica |
| 🔴 critical | CVE-2026-8635: IBM Langflow OSS 1.0.0 through 1.10.0 allows authenticated users to escalate privileges… | — | IBM Langflow OSS 1.0.0 through 1.10.0 allows authenticated users to escalate privileges to superuser by directly manipul |
| 🔴 critical | CVE-2026-48062: CodeIgniter is a PHP full-stack web framework. | `T1190` | CodeIgniter is a PHP full-stack web framework. Prior to 4.7.3, the ext_in upload validation rule in system/Validation/St |
| 🟠 high | CVE-2026-15410: SonicWall SMA1000 Appliances — SonicWall SMA1000 Appliances Code Injection Vulnerability | — | Post-authentication improper control of generation of code ('Code Injection') vulnerability has been identified in the S |
| 🟠 high | CVE-2026-49972: Laravel-Mediable before 7.0.0 contains a file upload vulnerability that allows unauthen… | `T1190` | Laravel-Mediable before 7.0.0 contains a file upload vulnerability that allows unauthenticated attackers to achieve remo |
| 🟠 high | CVE-2026-55771: CedarJava is an open source Java implementation of the Cedar policy language, used for … | — | CedarJava is an open source Java implementation of the Cedar policy language, used for fine-grained authorization decisi |
| 🟠 high | CVE-2026-55773: CedarJava is an open source Java implementation of the Cedar policy language, used for … | — | CedarJava is an open source Java implementation of the Cedar policy language, used for fine-grained authorization decisi |
| 🟠 high | CVE-2026-48363: ColdFusion versions 2025.9, 2023.20 and earlier are affected by an Uncontrolled Search … | `T1190` | ColdFusion versions 2025.9, 2023.20 and earlier are affected by an Uncontrolled Search Path Element vulnerability that c |
| 🟠 high | CVE-2026-48364: ColdFusion versions 2025.9, 2023.20 and earlier are affected by an Uncontrolled Search … | `T1190` | ColdFusion versions 2025.9, 2023.20 and earlier are affected by an Uncontrolled Search Path Element vulnerability that c |
| 🟠 high | CVE-2026-15680: Lorex 2K Indoor Wi-Fi Security Camera CDeviceOperator Format String Remote Code Executi… | `T1190` | Lorex 2K Indoor Wi-Fi Security Camera CDeviceOperator Format String Remote Code Execution Vulnerability. This vulnerabil |
| 🟠 high | CVE-2026-62185: Argo CD Helm Chart before 10.0.0 fails to install network policies by default, allowing… | `T1190` | Argo CD Helm Chart before 10.0.0 fails to install network policies by default, allowing any pod on a cluster to access r |
| 🟠 high | CVE-2026-0487: SAProuter on Microsoft Windows allows an unauthenticated attacker to load library (DLL)… | `T1190` | SAProuter on Microsoft Windows allows an unauthenticated attacker to load library (DLL) files from an untrusted location |
| 🟠 high | CVE-2026-48346: Animate is affected by an Untrusted Search Path vulnerability that could result in arbi… | `T1190` | Animate is affected by an Untrusted Search Path vulnerability that could result in arbitrary code execution in the conte |
| 🟠 high | CVE-2026-50650: Improper control of generation of code ('code injection') in .NET Framework allows an u… | — | Improper control of generation of code ('code injection') in .NET Framework allows an unauthorized attacker to elevate p |
| 🟠 high | CVE-2026-48272: Creative Cloud Desktop is affected by an Uncontrolled Search Path Element vulnerability… | `T1190` | Creative Cloud Desktop is affected by an Uncontrolled Search Path Element vulnerability that could result in arbitrary c |
| 🟠 high | CVE-2026-48340: Bridge is affected by an Untrusted Pointer Dereference vulnerability that could result … | `T1190` | Bridge is affected by an Untrusted Pointer Dereference vulnerability that could result in arbitrary code execution in th |
| 🟠 high | CVE-2026-48344: Creative Cloud Desktop is affected by a Time-of-check Time-of-use (TOCTOU) Race Conditi… | `T1190` | Creative Cloud Desktop is affected by a Time-of-check Time-of-use (TOCTOU) Race Condition vulnerability that could resul |
| 🟠 high | CVE-2026-48275: Illustrator is affected by an Untrusted Search Path vulnerability that could result in … | `T1190` | Illustrator is affected by an Untrusted Search Path vulnerability that could result in arbitrary code execution in the c |
| 🟠 high | CVE-2026-48287: CAI Content Credentials is affected by an Untrusted Search Path vulnerability that coul… | `T1190` | CAI Content Credentials is affected by an Untrusted Search Path vulnerability that could result in arbitrary code execut |
| 🟠 high | CVE-2026-46633: Twig: PHP code injection via `{% use %}` template name | — | [cvefeed.io] Twig: PHP code injection via `{% use %}` template name |
| 🟠 high | CVE-2026-42049: jadx: RCE Via Groovy Code Injection in Gradle Export | `T1190` | [cvefeed.io] jadx: RCE Via Groovy Code Injection in Gradle Export |
| 🟠 high | CVE-2026-58655: The bundled Grav Flex Objects plugin (getgrav/grav-plugin-flex-objects) before 1.4.0 co… | — | The bundled Grav Flex Objects plugin (getgrav/grav-plugin-flex-objects) before 1.4.0 contains a stored server-side templ |
| 🟠 high | CVE-2026-61433: PraisonAI before 4.6.78 fails to safely encode deployment configuration values when gen… | — | PraisonAI before 4.6.78 fails to safely encode deployment configuration values when generating Python source code for AP |
| 🟠 high | CVE-2026-61446: PraisonAI (praisonaiagents) before 1.6.78 contains a remote code execution vulnerabilit… | `T1190` | PraisonAI (praisonaiagents) before 1.6.78 contains a remote code execution vulnerability in the plugin manager, which lo |
| 🟠 high | CVE-2026-61457: The Grav API plugin (getgrav/grav-plugin-api) before 1.0.3 contains a file upload exten… | `T1190` | The Grav API plugin (getgrav/grav-plugin-api) before 1.0.3 contains a file upload extension bypass in the API media cont |
| 🟠 high | CVE-2026-55242: ERPNext is a free and open source Enterprise Resource Planning tool. | — | ERPNext is a free and open source Enterprise Resource Planning tool. Prior to 15.111.0 and 16.22.0, an authenticated use |
| 🟠 high | CVE-2026-40501: Cherry Studio versions 1.2.2 through 1.9.12, fixed in commit 1518530, contain a remote … | `T1190` | Cherry Studio versions 1.2.2 through 1.9.12, fixed in commit 1518530, contain a remote code execution vulnerability in S |
| 🟠 high | CVE-2026-58659: PyTorch Lightning through 2.6.5, fixed in commit d710d68, contains a remote code execut… | `T1190` | PyTorch Lightning through 2.6.5, fixed in commit d710d68, contains a remote code execution vulnerability in the _load_st |
| 🟠 high | CVE-2026-62350: TDengine is an open source, time-series database optimized for Internet of Things devices. | — | TDengine is an open source, time-series database optimized for Internet of Things devices. Prior to 3.4.1.15, a user wit |
| 🟠 high | CVE-2026-45534: DataEase: RCE Vulnerability | `T1190` | [cvefeed.io] DataEase: RCE Vulnerability |
| 🟠 high | CVE-2026-5674: A flaw was found in PipeWire, a multimedia server. | `T1190` | A flaw was found in PipeWire, a multimedia server. This vulnerability allows an attacker to escape sandboxed application |
| | _+14 more…_ | | |

## Command Injection (29)

_OS / shell command injection enabling attacker-controlled execution._

| Severity | Finding | MITRE | Description |
|----------|---------|-------|-------------|
| 🔴 critical | CVE-2026-25089: Fortinet FortiSandbox — Fortinet FortiSandbox OS Command Injection Vulnerability | `T1059` | A improper neutralization of special elements used in an os command ('os command injection') vulnerability in Fortinet F |
| 🔴 critical | CVE-2026-39808: Fortinet FortiSandbox — Fortinet FortiSandbox OS Command Injection Vulnerability | `T1059` | A improper neutralization of special elements used in an os command ('os command injection') vulnerability in Fortinet F |
| 🔴 critical | CVE-2026-60121: Vitec Flamingo 4.12.2 contains an unauthenticated OS command injection vulnerability in… | `T1059` | Vitec Flamingo 4.12.2 contains an unauthenticated OS command injection vulnerability in the admin/ajax/ping.php endpoint |
| 🔴 critical | CVE-2026-61498: Vitec Flamingo 4.12.2 contains an unauthenticated OS command injection vulnerability in… | `T1059` | Vitec Flamingo 4.12.2 contains an unauthenticated OS command injection vulnerability in the admin/ajax/gen_graphs.php en |
| 🔴 critical | CVE-2026-3014: Milestone
has released a new version of XProtect® (and several cumulative patch updates… | `T1190` | Milestone
has released a new version of XProtect® (and several cumulative patch updates)
which fix security vulnerabilit |
| 🔴 critical | CVE-2026-62392: Improper Neutralization of Special Elements used in an OS Command ('OS Command Injectio… | `T1059` | Improper Neutralization of Special Elements used in an OS Command ('OS Command Injection') vulnerability in Apache Kylin |
| 🔴 critical | CVE-2026-58479: Sustainable Irrigation Platform (SIP) through version 5.2.16 contains a command injecti… | `T1059` | Sustainable Irrigation Platform (SIP) through version 5.2.16 contains a command injection vulnerability in the optional  |
| 🔴 critical | CVE-2026-48561: Improper neutralization of special elements used in a command ('command injection') in … | `T1059` | Improper neutralization of special elements used in a command ('command injection') in Microsoft Copilot allows an unaut |
| 🔴 critical | CVE-2026-46339: 9Router is an AI router & token saver. | — | 9Router is an AI router & token saver. From 0.4.30 until 0.4.37, 9Router's src/proxy.js middleware did not protect /api/ |
| 🔴 critical | CVE-2026-52891: Wekan is open source kanban built with Meteor. | — | Wekan is open source kanban built with Meteor. Prior to 9.07, Wekan avatar upload functionality embeds user-supplied fil |
| 🔴 critical | CVE-2023-49900: An unauthenticated remote attacker is able to perform remote code execution due to inco… | `T1190` | An unauthenticated remote attacker is able to perform remote code execution due to incorrectly sanitized user input in t |
| 🔴 critical | CVE-2026-45695: Kopia is a cross-platform backup tool for Windows, macOS, and Linux with fast increment… | — | Kopia is a cross-platform backup tool for Windows, macOS, and Linux with fast incremental backups, client-side end-to-en |
| 🟠 high | CVE-2026-50520: Improper neutralization of special elements used in a command ('command injection') in … | `T1059` | Improper neutralization of special elements used in a command ('command injection') in Visual Studio Code allows an unau |
| 🟠 high | CVE-2026-58635: Improper neutralization of special elements used in a command ('command injection') in … | `T1059` | Improper neutralization of special elements used in a command ('command injection') in Windows Narrator Braille allows a |
| 🟠 high | CVE-2026-50488: Improper neutralization of special elements used in a command ('command injection') in … | `T1059` | Improper neutralization of special elements used in a command ('command injection') in Windows Clipboard User Service al |
| 🟠 high | CVE-2026-56197: Improper neutralization of special elements used in a command ('command injection') in … | `T1059` | Improper neutralization of special elements used in a command ('command injection') in Windows Admin Center allows an au |
| 🟠 high | CVE-2026-48345: Animate is affected by an Improper Neutralization of Special Elements used in an OS Com… | `T1190`, `T1059` | Animate is affected by an Improper Neutralization of Special Elements used in an OS Command ('OS Command Injection') vul |
| 🟠 high | CVE-2026-48347: Animate is affected by an Improper Neutralization of Special Elements used in an OS Com… | `T1190`, `T1059` | Animate is affected by an Improper Neutralization of Special Elements used in an OS Command ('OS Command Injection') vul |
| 🟠 high | CVE-2026-61438: PraisonAI before 4.6.78 contains a remote code execution vulnerability in JobWorkflowEx… | `T1190` | PraisonAI before 4.6.78 contains a remote code execution vulnerability in JobWorkflowExecutor._exec_inline_python() due  |
| 🟠 high | CVE-2026-46709: Tabby (formerly Terminus) is a highly configurable terminal emulator. | — | Tabby (formerly Terminus) is a highly configurable terminal emulator. Prior to 1.0.234, Tabby inserts dropped file paths |
| 🟠 high | CVE-2026-50147: Metabase is an open-source business intelligence and embedded analytics tool. | — | Metabase is an open-source business intelligence and embedded analytics tool. From 1.57.0 until 1.57.19.1, 1.58.14.1, 1. |
| 🟠 high | CVE-2026-15895: OS command injection in the npm package loading component in AWS jsii-diff before 1.131… | `T1059` | OS command injection in the npm package loading component in AWS jsii-diff before 1.131.0 might allow context-dependent  |
| 🟠 high | CVE-2026-62312: 9Router is an AI router & token saver. | `T1190` | 9Router is an AI router & token saver. Prior to 0.5.2, 9Router allows a remote authenticated attacker to achieve arbitra |
| 🟠 high | CVE-2026-63304: AVideo through 29.0 contains an OS command injection vulnerability in plugin/API/standA… | `T1059` | AVideo through 29.0 contains an OS command injection vulnerability in plugin/API/standAlone/functions.php where the list |
| 🟠 high | CVE-2026-63305: AVideo through 29.0 contains an OS command injection vulnerability in the ffmpeg.json.p… | `T1059` | AVideo through 29.0 contains an OS command injection vulnerability in the ffmpeg.json.php endpoint where notifyCode and  |
| 🟠 high | CVE-2026-55173: WWBN AVideo is an open source video platform. | `T1059` | WWBN AVideo is an open source video platform. Versions 29.0 and below remain vulnerable to OS command injection because  |
| 🟠 high | CVE-2026-58195: Agentic-Flow is an AI agent orchestration platform. | `T1059` | Agentic-Flow is an AI agent orchestration platform. Prior to 2.0.14, agentic-flow MCP server tools in src/mcp/standalone |
| 🟠 high | CVE-2026-14499: IBM Langflow OSS 1.0.0 through 1.10.1 Langflow could allow an authenticated user to exe… | — | IBM Langflow OSS 1.0.0 through 1.10.1 Langflow could allow an authenticated user to execute arbitrary commands with elev |
| 🟠 high | CVE-2026-50289: systeminformation: OS command injection in networkInterfaces() via interfaces(5) source… | `T1059` | [cvefeed.io] systeminformation: OS command injection in networkInterfaces() via interfaces(5) source-directive path on L |

## Authentication & Authorization Bypass (146)

_Missing or broken authentication / authorisation enabling unauthorised actions._

| Severity | Finding | MITRE | Description |
|----------|---------|-------|-------------|
| 🔴 critical | CVE-2026-46817: Oracle E-Business Suite — Oracle E-Business Suite Improper Privilege Management Vulnerability | — | Vulnerability in the Oracle Payments product of Oracle E-Business Suite (component: File Transmission).  Supported versi |
| 🔴 critical | CVE-2026-59801: 9Router through version 0.4.41 contains an unauthenticated access vulnerability that al… | `T1078` | 9Router through version 0.4.41 contains an unauthenticated access vulnerability that allows remote attackers to interact |
| 🔴 critical | CVE-2026-62327: 9Router through version 0.4.41 contain an unauthenticated information disclosure vulner… | `T1078` | 9Router through version 0.4.41 contain an unauthenticated information disclosure vulnerability that allows remote attack |
| 🔴 critical | CVE-2026-58319: Certain Apache Doris FE HTTP REST administrative APIs were accessible without proper au… | — | Certain Apache Doris FE HTTP REST administrative APIs were accessible without proper authentication. An unauthenticated  |
| 🔴 critical | CVE-2026-62422: In JetBrains YouTrack before 2026.1.13757,
2025.3.148033,
2025.2.148048,
2025.1.148120,… | `T1078` | In JetBrains YouTrack before 2026.1.13757,
2025.3.148033,
2025.2.148048,
2025.1.148120,
2024.3.148430,
2024.2.148429 aut |
| 🔴 critical | CVE-2026-53633: Vitest is a testing framework powered by Vite. | — | Vitest is a testing framework powered by Vite. From 3.0.0 until 3.2.5, 4.1.8, and 5.0.0-beta.4, Vitest Browser Mode expo |
| 🔴 critical | CVE-2026-48321: ColdFusion is affected by an Incorrect Authorization vulnerability that could result in… | `T1068` | ColdFusion is affected by an Incorrect Authorization vulnerability that could result in privilege escalation. An attacke |
| 🔴 critical | CVE-2026-48325: ColdFusion is affected by a Missing Authentication for Critical Function vulnerability … | `T1190`, `T1078` | ColdFusion is affected by a Missing Authentication for Critical Function vulnerability that could result in arbitrary co |
| 🔴 critical | CVE-2026-48327: ColdFusion is affected by an Incorrect Authorization vulnerability that could result in… | `T1190` | ColdFusion is affected by an Incorrect Authorization vulnerability that could result in arbitrary code execution in the  |
| 🔴 critical | CVE-2026-45363: ruby-jwt is a Ruby implementation of the RFC 7519 OAuth JSON Web Token standard. | — | ruby-jwt is a Ruby implementation of the RFC 7519 OAuth JSON Web Token standard. Prior to 2.10.3 and 3.2.0, JWT.decode(t |
| 🔴 critical | CVE-2026-44986: Penpot is an open-source design tool for design and code collaboration. | — | Penpot is an open-source design tool for design and code collaboration. Prior to 2.14.5, Penpot exposed teams_invitation |
| 🔴 critical | CVE-2026-54052: n8n-MCP is an MCP server that provides AI assistants access to n8n node documentation, … | — | n8n-MCP is an MCP server that provides AI assistants access to n8n node documentation, properties, and operations. Prior |
| 🔴 critical | CVE-2026-55652: Wekan is open source kanban built with Meteor. | — | Wekan is open source kanban built with Meteor. Prior to 9.46, header-login with HEADER_LOGIN_TRUSTED_IPS uses getRequest |
| 🔴 critical | CVE-2026-15013: The SAML Single Sign On – SSO Login plugin for WordPress is vulnerable to Authenticatio… | `T1078` | The SAML Single Sign On – SSO Login plugin for WordPress is vulnerable to Authentication Bypass via SAML Signature Algor |
| 🔴 critical | CVE-2026-12492: The Happy Coders OTP Login for WooCommerce WordPress plugin before 2.8 does not verify … | — | The Happy Coders OTP Login for WooCommerce WordPress plugin before 2.8 does not verify that a one-time password was actu |
| 🔴 critical | CVE-2026-22752: Authentication bypass by primary weakness vulnerability in Spring Security Spring Autho… | `T1078` | Authentication bypass by primary weakness vulnerability in Spring Security Spring Authorization Server.

This issue affe |
| 🔴 critical | CVE-2026-63087: Grafana OnCall through 1.16.11 contains an unauthenticated access vulnerability that al… | — | Grafana OnCall through 1.16.11 contains an unauthenticated access vulnerability that allows remote attackers to obtain a |
| 🔴 critical | CVE-2026-62241: clawvet self-hosted API server (apps/api) before 0.7.5 hard-codes a fallback JWT secret… | — | clawvet self-hosted API server (apps/api) before 0.7.5 hard-codes a fallback JWT secret ('clawvet-dev-secret-change-me') |
| 🔴 critical | CVE-2026-12692: Unverified password change vulnerability in Vimesoft Inc. | `T1078` | Unverified password change vulnerability in Vimesoft Inc. Enterprise Video Platform allows Authentication Bypass.

This  |
| 🔴 critical | CVE-2026-12693: Authorization bypass through User-Controlled key vulnerability in Vimesoft Inc. | — | Authorization bypass through User-Controlled key vulnerability in Vimesoft Inc. Enterprise Video Platform allows Accessi |
| 🔴 critical | CVE-2026-12694: Missing Authorization vulnerability in Vimesoft Inc. | — | Missing Authorization vulnerability in Vimesoft Inc. Enterprise Video Platform allows Accessing Functionality Not Proper |
| 🔴 critical | CVE-2026-9202: IBM Langflow OSS 1.0.0 through 1.10.0 allows unauthenticated attackers to create unlimi… | `T1190` | IBM Langflow OSS 1.0.0 through 1.10.0 allows unauthenticated attackers to create unlimited user accounts on any Langflow |
| 🔴 critical | CVE-2026-9103: IBM Langflow OSS 1.0.0 through 1.10.0 could allow a remote attacker to gain unauthorize… | — | IBM Langflow OSS 1.0.0 through 1.10.0 could allow a remote attacker to gain unauthorized access due to improper authenti |
| 🔴 critical | CVE-2026-55518: Avo is a framework to create admin panels for Ruby on Rails apps. | `T1068` | Avo is a framework to create admin panels for Ruby on Rails apps. Prior to 3.32.1 and 4.0.0.beta.51, Avo's association a |
| 🔴 critical | CVE-2026-47865: VMware Avi Load Balancer contains an authentication bypass vulnerability. | `T1078` | VMware Avi Load Balancer contains an authentication bypass vulnerability. A malicious user with network access may be ab |
| 🟠 high | CVE-2026-9492: The MBStorage DRAM lighting control module within Gigabyte Control Center (GCC) develop… | — | The MBStorage DRAM lighting control module within Gigabyte Control Center (GCC) developed by GIGABYTE Technology has an  |
| 🟠 high | CVE-2026-14165: An Authorization Bypass Through User-Controlled Key vulnerability affecting Tuleap Ente… | — | An Authorization Bypass Through User-Controlled Key vulnerability affecting Tuleap Enterprise Edition from 17.0 through  |
| 🟠 high | CVE-2026-15541: A flaw has been found in will-moss Isaiah up to 1.36.9. | — | A flaw has been found in will-moss Isaiah up to 1.36.9. The impacted element is the function Server.Handle of the file a |
| 🟠 high | CVE-2026-15542: A vulnerability has been found in will-moss Isaiah up to 1.36.9. | — | A vulnerability has been found in will-moss Isaiah up to 1.36.9. This affects an unknown function of the file app/main.g |
| 🟠 high | CVE-2026-15557: A weakness has been identified in waooAI waoowaoo up to 0.4.1. | — | A weakness has been identified in waooAI waoowaoo up to 0.4.1. Affected by this vulnerability is the function getInterna |
| 🟠 high | CVE-2026-57378: Missing Authorization vulnerability in Phil Kurth Advanced Forms advanced-forms allows … | — | Missing Authorization vulnerability in Phil Kurth Advanced Forms advanced-forms allows Exploiting Incorrectly Configured |
| 🟠 high | CVE-2026-57405: Missing Authorization vulnerability in themehunk Open Shop open-shop allows Exploiting … | — | Missing Authorization vulnerability in themehunk Open Shop open-shop allows Exploiting Incorrectly Configured Access Con |
| 🟠 high | CVE-2026-57697: Authentication Bypass Using an Alternate Path or Channel vulnerability in Metagauss Pro… | `T1078` | Authentication Bypass Using an Alternate Path or Channel vulnerability in Metagauss ProfileGrid  profilegrid-user-profil |
| 🟠 high | CVE-2026-57705: Missing Authorization vulnerability in Nexcess Event Tickets event-tickets allows Explo… | — | Missing Authorization vulnerability in Nexcess Event Tickets event-tickets allows Exploiting Incorrectly Configured Acce |
| 🟠 high | CVE-2026-57727: Missing Authorization vulnerability in Themeum Kirki kirki allows Exploiting Incorrectl… | — | Missing Authorization vulnerability in Themeum Kirki kirki allows Exploiting Incorrectly Configured Access Control Secur |
| 🟠 high | CVE-2026-57729: Missing Authorization vulnerability in UX-themes Flatsome flatsome allows Exploiting In… | — | Missing Authorization vulnerability in UX-themes Flatsome flatsome allows Exploiting Incorrectly Configured Access Contr |
| 🟠 high | CVE-2026-57740: Missing Authorization vulnerability in AcyMailing Newsletter Team AcyMailing SMTP Newsl… | — | Missing Authorization vulnerability in AcyMailing Newsletter Team AcyMailing SMTP Newsletter acymailing allows Exploitin |
| 🟠 high | CVE-2026-58410: ChurchCRM is an open-source church management system. | — | ChurchCRM is an open-source church management system. Prior to version 7.4.0, there was an authorization flaw in the fam |
| 🟠 high | CVE-2026-62186: OpenClaw versions before 2026.6.8 contain an authorization bypass vulnerability in Open… | — | OpenClaw versions before 2026.6.8 contain an authorization bypass vulnerability in OpenAI-compatible HTTP model override |
| 🟠 high | CVE-2026-62187: OpenClaw Feishu tools (npm package @openclaw/feishu) in versions <= 2026.6.6 could igno… | — | OpenClaw Feishu tools (npm package @openclaw/feishu) in versions <= 2026.6.6 could ignore per-account disablement. A low |
| 🟠 high | CVE-2026-62188: OpenClaw @openclaw/feishu versions 2026.6.6 and earlier contain an incorrect authorizat… | — | OpenClaw @openclaw/feishu versions 2026.6.6 and earlier contain an incorrect authorization vulnerability in which the Fe |
| 🟠 high | CVE-2026-62190: OpenClaw versions before 2026.6.9 contain an authorization bypass vulnerability in the … | — | OpenClaw versions before 2026.6.9 contain an authorization bypass vulnerability in the flock wrapper that allows lower-t |
| 🟠 high | CVE-2026-62191: OpenClaw versions 2026.6.6 before 2026.6.9 contain an authorization bypass vulnerabilit… | — | OpenClaw versions 2026.6.6 before 2026.6.9 contain an authorization bypass vulnerability in message mutation handling th |
| 🟠 high | CVE-2026-62192: OpenClaw versions 2026.6.6 before 2026.6.9 contain an authorization bypass vulnerabilit… | — | OpenClaw versions 2026.6.6 before 2026.6.9 contain an authorization bypass vulnerability in Discord guild actions that a |
| 🟠 high | CVE-2026-62194: OpenClaw versions 2026.5.20 before 2026.6.9 contain a privilege escalation vulnerabilit… | `T1068` | OpenClaw versions 2026.5.20 before 2026.6.9 contain a privilege escalation vulnerability in plugin install commands that |
| 🟠 high | CVE-2026-62196: OpenClaw versions 2026.3.22 before 2026.6.6 contain an authorization bypass vulnerabili… | — | OpenClaw versions 2026.3.22 before 2026.6.6 contain an authorization bypass vulnerability where WhatsApp group IDs can s |
| 🟠 high | CVE-2026-62328: 9Router through version 0.4.41 contain an unauthenticated information disclosure vulner… | — | 9Router through version 0.4.41 contain an unauthenticated information disclosure vulnerability that allows remote attack |
| 🟠 high | CVE-2026-57855: Cockpit CMS contains a missing authorization vulnerability in the Bucket file storage A… | — | Cockpit CMS contains a missing authorization vulnerability in the Bucket file storage API (/system/buckets/api). The api |
| 🟠 high | CVE-2026-15416: A flaw was identified in Argo CD, the GitOps engine used by Red Hat OpenShift GitOps, t… | `T1190` | A flaw was identified in Argo CD, the GitOps engine used by Red Hat OpenShift GitOps, that could allow an unauthenticate |
| 🟠 high | CVE-2026-49805: Improper access control in Windows Win32K allows an authorized attacker to elevate priv… | — | Improper access control in Windows Win32K allows an authorized attacker to elevate privileges locally. |
| | _+96 more…_ | | |

## Privilege Escalation (26)

_Vulnerabilities enabling escalation to higher privileges._

| Severity | Finding | MITRE | Description |
|----------|---------|-------|-------------|
| 🔴 critical | CVE-2026-57813: Incorrect Privilege Assignment vulnerability in properfraction MailOptin mailoptin allo… | `T1068` | Incorrect Privilege Assignment vulnerability in properfraction MailOptin mailoptin allows Privilege Escalation.This issu |
| 🔴 critical | CVE-2026-14956: The Bricksforge plugin for WordPress is vulnerable to Privilege Escalation in all versi… | `T1068` | The Bricksforge plugin for WordPress is vulnerable to Privilege Escalation in all versions up to, and including, 3.1.8.6 |
| 🔴 critical | CVE-2026-15982: The Aimogen Pro - All-in-One AI Content Writer, Editor, ChatBot & Automation Toolkit pl… | `T1068` | The Aimogen Pro - All-in-One AI Content Writer, Editor, ChatBot & Automation Toolkit plugin for WordPress is vulnerable  |
| 🔴 critical | CVE-2026-9810: The AI Copilot  WordPress plugin before 1.5.4 does not bind OAuth access tokens to a Wo… | — | The AI Copilot  WordPress plugin before 1.5.4 does not bind OAuth access tokens to a WordPress user, and accepts any val |
| 🟠 high | CVE-2026-57386: Incorrect Privilege Assignment vulnerability in Kodezen LLC aBlocks ablocks allows Priv… | `T1068` | Incorrect Privilege Assignment vulnerability in Kodezen LLC aBlocks ablocks allows Privilege Escalation.This issue affec |
| 🟠 high | CVE-2026-57410: Incorrect Privilege Assignment vulnerability in MailerPress Team MailerPress mailerpres… | `T1068` | Incorrect Privilege Assignment vulnerability in MailerPress Team MailerPress mailerpress allows Privilege Escalation.Thi |
| 🟠 high | CVE-2026-57768: Incorrect Privilege Assignment vulnerability in favethemes Houzez Login Register houzez… | `T1068` | Incorrect Privilege Assignment vulnerability in favethemes Houzez Login Register houzez-login-register allows Privilege  |
| 🟠 high | CVE-2026-15584: A privilege escalation vulnerability was found in the incluster-checks tool for OpenShift. | `T1068` | A privilege escalation vulnerability was found in the incluster-checks tool for OpenShift. The tool creates privileged d |
| 🟠 high | CVE-2026-59245: In the Apache Airflow FAB auth manager, a DAG whose `dag_id` is `DAGs` collided with th… | `T1068` | In the Apache Airflow FAB auth manager, a DAG whose `dag_id` is `DAGs` collided with the global all-DAGs permission reso |
| 🟠 high | CVE-2026-61463: Shiori contains a privilege escalation vulnerability in the account update endpoint tha… | `T1068` | Shiori contains a privilege escalation vulnerability in the account update endpoint that allows authenticated users to m |
| 🟠 high | CVE-2026-15684: Glarysoft Glary Utilities Link Following Local Privilege Escalation Vulnerability. | `T1190`, `T1068` | Glarysoft Glary Utilities Link Following Local Privilege Escalation Vulnerability. This vulnerability allows local attac |
| 🟠 high | CVE-2026-49176: Improper privilege management in Windows WalletService allows an authorized attacker to… | — | Improper privilege management in Windows WalletService allows an authorized attacker to elevate privileges locally. |
| 🟠 high | CVE-2026-50343: Improper privilege management in Microsoft Install Service allows an authorized attacke… | — | Improper privilege management in Microsoft Install Service allows an authorized attacker to elevate privileges locally. |
| 🟠 high | CVE-2026-50391: Improper privilege management in Windows Group Policy allows an authorized attacker to … | — | Improper privilege management in Windows Group Policy allows an authorized attacker to elevate privileges locally. |
| 🟠 high | CVE-2026-57996: phpMyFAQ before 4.1.5 contains a privilege escalation vulnerability in the user/add API… | `T1068` | phpMyFAQ before 4.1.5 contains a privilege escalation vulnerability in the user/add API endpoint that allows non-SuperAd |
| 🟠 high | CVE-2026-60085: PraisonAI before 4.6.78 contains an unenforced security policy vulnerability in the def… | — | PraisonAI before 4.6.78 contains an unenforced security policy vulnerability in the default Subprocess Sandbox backend w |
| 🟠 high | CVE-2026-12525: The Redux Framework WordPress plugin before 4.5.13 does not restrict which user meta ke… | — | The Redux Framework WordPress plugin before 4.5.13 does not restrict which user meta keys can be written when saving cus |
| 🟠 high | CVE-2026-13741: The Digits: WordPress Mobile Number Signup and Login plugin for WordPress is vulnerable… | `T1068` | The Digits: WordPress Mobile Number Signup and Login plugin for WordPress is vulnerable to Privilege Escalation in all v |
| 🟠 high | CVE-2026-15103: The WPFunnels – Funnel Builder for WooCommerce with Checkout & One Click Upsell plugin … | `T1068` | The WPFunnels – Funnel Builder for WooCommerce with Checkout & One Click Upsell plugin for WordPress is vulnerable to Pr |
| 🟠 high | CVE-2026-13104: A potential vulnerability was reported in Lenovo App Store, distributed exclusively in … | `T1190` | A potential vulnerability was reported in Lenovo App Store, distributed exclusively in the Chinese market, that could al |
| 🟠 high | CVE-2026-53410: A time-of-check to time-of-use (TOCTOU) race condition in the installation and uninstal… | — | A time-of-check to time-of-use (TOCTOU) race condition in the installation and uninstallation process of certain Zoom Cl |
| 🟠 high | CVE-2026-53411: A time-of-check to time-of-use (TOCTOU) race condition in the installation and uninstal… | — | A time-of-check to time-of-use (TOCTOU) race condition in the installation and uninstallation process of certain Zoom Cl |
| 🟠 high | CVE-2026-43978: wger is a free, open-source workout and fitness manager. | — | wger is a free, open-source workout and fitness manager. In versions prior to 2.6, a gym trainer can escalate their sess |
| 🟠 high | CVE-2026-11961: The User Registration & Membership  WordPress plugin before 5.2.3 does not validate tha… | — | The User Registration & Membership  WordPress plugin before 5.2.3 does not validate that the membership tier submitted d |
| 🟠 high | CVE-2026-47868: VMware Avi Load Balancer contains a local privilege escalation vulnerability. | `T1068` | VMware Avi Load Balancer contains a local privilege escalation vulnerability. A malicious user with local access may be  |
| 🟠 high | CVE-2026-47870: VMware Avi Load Balancer contains a privilege escalation vulnerability. | `T1068` | VMware Avi Load Balancer contains a privilege escalation vulnerability. A malicious authenticated user with network acce |

## SQL & NoSQL Injection (47)

_Database injection vulnerabilities exposing or modifying stored data._

| Severity | Finding | MITRE | Description |
|----------|---------|-------|-------------|
| 🔴 critical | CVE-2026-57702: Improper Neutralization of Special Elements used in an SQL Command ('SQL Injection') vu… | `T1190` | Improper Neutralization of Special Elements used in an SQL Command ('SQL Injection') vulnerability in Melograno Venture  |
| 🔴 critical | CVE-2026-57707: Improper Neutralization of Special Elements used in an SQL Command ('SQL Injection') vu… | `T1190` | Improper Neutralization of Special Elements used in an SQL Command ('SQL Injection') vulnerability in quantumcloud Simpl |
| 🔴 critical | CVE-2026-57714: Improper Neutralization of Special Elements used in an SQL Command ('SQL Injection') vu… | `T1190` | Improper Neutralization of Special Elements used in an SQL Command ('SQL Injection') vulnerability in LatePoint LatePoin |
| 🔴 critical | CVE-2026-57726: Improper Neutralization of Special Elements used in an SQL Command ('SQL Injection') vu… | `T1190` | Improper Neutralization of Special Elements used in an SQL Command ('SQL Injection') vulnerability in Themeum Kirki kirk |
| 🔴 critical | CVE-2026-57739: Improper Neutralization of Special Elements used in an SQL Command ('SQL Injection') vu… | `T1190` | Improper Neutralization of Special Elements used in an SQL Command ('SQL Injection') vulnerability in AcyMailing Newslet |
| 🔴 critical | CVE-2026-59515: Improper Neutralization of Special Elements used in an SQL Command ('SQL Injection') vu… | `T1190` | Improper Neutralization of Special Elements used in an SQL Command ('SQL Injection') vulnerability in Sergey AIWU ai-cop |
| 🔴 critical | CVE-2026-62390: Improper Neutralization of Special Elements used in an SQL Command ('SQL Injection') vu… | `T1190` | Improper Neutralization of Special Elements used in an SQL Command ('SQL Injection') vulnerability in Apache Kylin. A ba |
| 🔴 critical | CVE-2026-48324: ColdFusion is affected by an Improper Neutralization of Special Elements used in an SQL… | `T1190` | ColdFusion is affected by an Improper Neutralization of Special Elements used in an SQL Command ('SQL Injection') vulner |
| 🔴 critical | CVE-2026-52887: NocoBase is an AI-powered no-code/low-code platform for building business applications … | — | NocoBase is an AI-powered no-code/low-code platform for building business applications and enterprise solutions. Prior t |
| 🔴 critical | CVE-2026-8297: Improper neutralization of special elements used in an SQL command ('SQL injection') vu… | `T1190` | Improper neutralization of special elements used in an SQL command ('SQL injection') vulnerability in Gis Informatics En |
| 🔴 critical | CVE-2026-60137: WordPress 6.8.x before 6.8.6, 6.9.x before 6.9.5, and 7.0.x before 7.0.2 does not prope… | `T1190` | WordPress 6.8.x before 6.8.6, 6.9.x before 6.9.5, and 7.0.x before 7.0.2 does not properly sanitise the author__not_in p |
| 🟠 high | CVE-2026-15514: A weakness has been identified in Metasoft 美特软件 MetaCRM up to 6.4.0 Beta06. | `T1190` | A weakness has been identified in Metasoft 美特软件 MetaCRM up to 6.4.0 Beta06. This vulnerability affects the function RPCS |
| 🟠 high | CVE-2026-15517: A flaw has been found in Jinher OA 1.0. | `T1190` | A flaw has been found in Jinher OA 1.0. The affected element is an unknown function of the file /C6/JHSoft.Web.PlanSumma |
| 🟠 high | CVE-2026-12582: The Library Management System WordPress plugin before 3.5.8 does not sanitize and escap… | `T1190` | The Library Management System WordPress plugin before 3.5.8 does not sanitize and escape a user-supplied parameter befor |
| 🟠 high | CVE-2026-15537: A security flaw has been discovered in SourceCodester Online Book Store System 1.0. | `T1190` | A security flaw has been discovered in SourceCodester Online Book Store System 1.0. This vulnerability affects unknown c |
| 🟠 high | CVE-2026-57385: Improper Neutralization of Special Elements used in an SQL Command ('SQL Injection') vu… | `T1190` | Improper Neutralization of Special Elements used in an SQL Command ('SQL Injection') vulnerability in appsbd Vitepos vit |
| 🟠 high | CVE-2026-57771: Improper Neutralization of Special Elements used in an SQL Command ('SQL Injection') vu… | `T1190` | Improper Neutralization of Special Elements used in an SQL Command ('SQL Injection') vulnerability in Milan Petrovic GD  |
| 🟠 high | CVE-2026-57772: Improper Neutralization of Special Elements used in an SQL Command ('SQL Injection') vu… | `T1190` | Improper Neutralization of Special Elements used in an SQL Command ('SQL Injection') vulnerability in WP Inventory WP In |
| 🟠 high | CVE-2026-57773: Improper Neutralization of Special Elements used in an SQL Command ('SQL Injection') vu… | `T1190` | Improper Neutralization of Special Elements used in an SQL Command ('SQL Injection') vulnerability in Zorem Advanced Shi |
| 🟠 high | CVE-2026-57787: Improper Neutralization of Special Elements used in an SQL Command ('SQL Injection') vu… | `T1190` | Improper Neutralization of Special Elements used in an SQL Command ('SQL Injection') vulnerability in CreativeWS CWS SVG |
| 🟠 high | CVE-2026-57810: Improper Neutralization of Special Elements used in an SQL Command ('SQL Injection') vu… | `T1190` | Improper Neutralization of Special Elements used in an SQL Command ('SQL Injection') vulnerability in Saad Iqbal APIExpe |
| 🟠 high | CVE-2026-61955: Improper Neutralization of Special Elements used in an SQL Command ('SQL Injection') vu… | `T1190` | Improper Neutralization of Special Elements used in an SQL Command ('SQL Injection') vulnerability in Hannan گرویتی فرم  |
| 🟠 high | CVE-2026-15597: A security flaw has been discovered in SourceCodester Class and Exam Timetabling System… | `T1190` | A security flaw has been discovered in SourceCodester Class and Exam Timetabling System 1.0/2.php. This affects an unkno |
| 🟠 high | CVE-2026-15675: A vulnerability was identified in code-projects Online Job Portal 1.0. | `T1190` | A vulnerability was identified in code-projects Online Job Portal 1.0. The affected element is an unknown function of th |
| 🟠 high | CVE-2026-15676: A security flaw has been discovered in code-projects Online Job Portal up to 1.0. | `T1190` | A security flaw has been discovered in code-projects Online Job Portal up to 1.0. The impacted element is an unknown fun |
| 🟠 high | CVE-2026-15736: Snowflake SQLAlchemy versions prior to 1.11.0 contain several security vulnerabilities,… | `T1190` | Snowflake SQLAlchemy versions prior to 1.11.0 contain several security vulnerabilities, including: Improper handling of  |
| 🟠 high | CVE-2026-15703: A vulnerability was detected in SourceCodester Simple and Nice Shopping Cart Script 1.0. | `T1190` | A vulnerability was detected in SourceCodester Simple and Nice Shopping Cart Script 1.0. This vulnerability affects unkn |
| 🟠 high | CVE-2026-47296: Improper neutralization of special elements used in an sql command ('sql injection') in… | `T1190` | Improper neutralization of special elements used in an sql command ('sql injection') in SQL Server allows an authorized  |
| 🟠 high | CVE-2026-47295: Improper neutralization of special elements used in an sql command ('sql injection') in… | `T1190` | Improper neutralization of special elements used in an sql command ('sql injection') in SQL Server allows an authorized  |
| 🟠 high | CVE-2026-47992: Adobe Commerce is affected by an Improper Neutralization of Special Elements used in an… | `T1190` | Adobe Commerce is affected by an Improper Neutralization of Special Elements used in an SQL Command ('SQL Injection') vu |
| 🟠 high | CVE-2026-12512: The Quotes llama WordPress plugin before 3.1.6 does not properly sanitize and escape a … | `T1190` | The Quotes llama WordPress plugin before 3.1.6 does not properly sanitize and escape a user-supplied parameter before us |
| 🟠 high | CVE-2026-15804: The HCM developed by MetaGuru has a SQL Injection vulnerability. | `T1190` | The HCM developed by MetaGuru has a SQL Injection vulnerability. Authenticated remote attackers can inject SQL commands  |
| 🟠 high | CVE-2026-35152: A SQL Injection vulnerability exists in Apache Fineract's Report Execution API (runrepo… | `T1190` | A SQL Injection vulnerability exists in Apache Fineract's Report Execution API (runreports endpoint) in versions up to a |
| 🟠 high | CVE-2026-56287: A boolean-based SQL Injection vulnerability exists in Apache Fineract's Client Search A… | `T1190` | A boolean-based SQL Injection vulnerability exists in Apache Fineract's Client Search API (GET /api/v1/clients) in versi |
| 🟠 high | CVE-2026-57821: A SQL Injection vulnerability exists in Apache Fineract's Office Search API (GET /api/v… | `T1190` | A SQL Injection vulnerability exists in Apache Fineract's Office Search API (GET /api/v1/offices) in versions up to and  |
| 🟠 high | CVE-2026-45535: DataEase: Stored SQL Injection Vulnerability | `T1190` | [cvefeed.io] DataEase: Stored SQL Injection Vulnerability |
| 🟠 high | CVE-2026-45417: DataEase: SQL injection vulnerability | `T1190` | [cvefeed.io] DataEase: SQL injection vulnerability |
| 🟠 high | CVE-2026-45320: DataEase Data Dashboard SqlVariable transFilter Unfiltered SQL Injection | `T1190` | [cvefeed.io] DataEase Data Dashboard SqlVariable transFilter Unfiltered SQL Injection |
| 🟠 high | CVE-2026-15907: A flaw has been found in H3C SecPath F1000-C8300 up to 20260522. | `T1190` | A flaw has been found in H3C SecPath F1000-C8300 up to 20260522. This impacts an unknown function of the file /webui/?g= |
| 🟠 high | CVE-2026-12753: The Advance Product Search- Voice & Ajax Search for WooCommerce plugin for WordPress is… | `T1190` | The Advance Product Search- Voice & Ajax Search for WooCommerce plugin for WordPress is vulnerable to generic SQL Inject |
| 🟠 high | CVE-2026-16014: A vulnerability was found in code-projects Hospital Bed Management System 1.0. | `T1190` | A vulnerability was found in code-projects Hospital Bed Management System 1.0. This affects an unknown part of the compo |
| 🟠 high | CVE-2025-60357: AhnLab EPP Management v1.0.14.32-6249 was discovered to contain a NoSQL injection vulne… | — | AhnLab EPP Management v1.0.14.32-6249 was discovered to contain a NoSQL injection vulnerability via the eventlog/agentEv |
| 🟠 high | CVE-2026-44739: Pimcore is an Open Source Data & Experience Management Platform. | `T1190` | Pimcore is an Open Source Data & Experience Management Platform. Prior to 11.5.17 (LTS) and 12.3.6, the columnConfigActi |
| 🟠 high | CVE-2026-16152: A vulnerability was found in SourceCodester Class and Exam Timetabling System 1.0. | `T1190` | A vulnerability was found in SourceCodester Class and Exam Timetabling System 1.0. Affected is an unknown function of th |
| 🟠 high | CVE-2026-16154: A vulnerability was determined in SourceCodester Class and Exam Timetabling System 1.0/… | `T1190` | A vulnerability was determined in SourceCodester Class and Exam Timetabling System 1.0/1.php. Affected by this vulnerabi |
| 🟠 high | CVE-2026-16227: A security vulnerability has been detected in SourceCodester Class and Exam Timetabling… | `T1190` | A security vulnerability has been detected in SourceCodester Class and Exam Timetabling System 1.0. This impacts an unkn |
| 🟠 high | CVE-2026-16228: A vulnerability was detected in SourceCodester Class and Exam Timetabling System 1.0. | `T1190` | A vulnerability was detected in SourceCodester Class and Exam Timetabling System 1.0. Affected is an unknown function of |

## Cross-Site Scripting (68)

_Reflected, stored, or DOM-based XSS in web applications._

| Severity | Finding | MITRE | Description |
|----------|---------|-------|-------------|
| 🔴 critical | CVE-2026-55008: Improper neutralization of input during web page generation ('cross-site scripting') in… | `T1059.007` | Improper neutralization of input during web page generation ('cross-site scripting') in Microsoft Exchange Server allows |
| 🔴 critical | CVE-2026-47428: Vitest is a testing framework powered by Vite. | — | Vitest is a testing framework powered by Vite. From 4.0.17 until 4.1.6 and 5.0.0-beta.3, Vitest Browser Mode served /__v |
| 🔴 critical | CVE-2026-62378: RustFS Console is a web management console for the RustFS distributed file system. | `T1059.007` | RustFS Console is a web management console for the RustFS distributed file system. From 0.1.7 until 0.1.10, the RustFS C |
| 🔴 critical | CVE-2026-62948: OpenWrt is a Linux operating system targeting embedded devices. | — | OpenWrt is a Linux operating system targeting embedded devices. Prior to 25.12.5, odhcpd writes a DHCPv6 client FQDN opt |
| 🔴 critical | CVE-2026-54458: WWBN AVideo is an open source video platform. | `T1059.007` | WWBN AVideo is an open source video platform. Versions prior to 29.0 contain a stored DOM Cross-Site Scripting vulnerabi |
| 🔴 critical | CVE-2026-15091: IBM Engineering AI Hub 1.0.0, 1.1.0, and 1.2.0 could allow a remote attacker to execute… | — | IBM Engineering AI Hub 1.0.0, 1.1.0, and 1.2.0 could allow a remote attacker to execute arbitrary scripts due to imprope |
| 🟠 high | CVE-2026-57363: Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vu… | `T1059.007` | Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vulnerability in QuantumCloud ChatB |
| 🟠 high | CVE-2026-57368: Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vu… | `T1059.007` | Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vulnerability in NooTheme Jobmonste |
| 🟠 high | CVE-2026-57369: Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vu… | `T1059.007` | Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vulnerability in themifyme Themify  |
| 🟠 high | CVE-2026-57376: Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vu… | `T1059.007` | Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vulnerability in Element Invader El |
| 🟠 high | CVE-2026-57379: Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vu… | `T1059.007` | Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vulnerability in WPPOOL FormyChat s |
| 🟠 high | CVE-2026-57380: Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vu… | `T1059.007` | Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vulnerability in hupe13 Extensions  |
| 🟠 high | CVE-2026-57381: Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vu… | `T1059.007` | Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vulnerability in Property Hive Prop |
| 🟠 high | CVE-2026-57382: Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vu… | `T1059.007` | Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vulnerability in Mitchell Bennis Si |
| 🟠 high | CVE-2026-57383: Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vu… | `T1059.007` | Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vulnerability in eyecix JobSearch w |
| 🟠 high | CVE-2026-57387: Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vu… | `T1059.007` | Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vulnerability in picu picu picu all |
| 🟠 high | CVE-2026-57388: Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vu… | `T1059.007` | Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vulnerability in Themefic Hydra Boo |
| 🟠 high | CVE-2026-57394: Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vu… | `T1059.007` | Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vulnerability in Tribulant Software |
| 🟠 high | CVE-2026-57396: Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vu… | `T1059.007` | Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vulnerability in Flintop Free Gifts |
| 🟠 high | CVE-2026-57398: Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vu… | `T1059.007` | Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vulnerability in WebCodingPlace Rea |
| 🟠 high | CVE-2026-57399: Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vu… | `T1059.007` | Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vulnerability in Proxy &amp; VPN Bl |
| 🟠 high | CVE-2026-57403: Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vu… | `T1059.007` | Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vulnerability in Milan Petrovic GD  |
| 🟠 high | CVE-2026-57409: Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vu… | `T1059.007` | Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vulnerability in RealMag777 Active  |
| 🟠 high | CVE-2026-57411: Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vu… | `T1059.007` | Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vulnerability in Aman CF7 Views &#8 |
| 🟠 high | CVE-2026-57415: Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vu… | `T1059.007` | Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vulnerability in Codemenschen Gift  |
| 🟠 high | CVE-2026-57416: Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vu… | `T1059.007` | Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vulnerability in SiteGround SiteGro |
| 🟠 high | CVE-2026-57417: Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vu… | `T1059.007` | Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vulnerability in RexTheme Cart Lift |
| 🟠 high | CVE-2026-57421: Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vu… | `T1059.007` | Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vulnerability in CRM Perks CRM Perk |
| 🟠 high | CVE-2026-57422: Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vu… | `T1059.007` | Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vulnerability in VillaTheme Bopo –  |
| 🟠 high | CVE-2026-57423: Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vu… | `T1059.007` | Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vulnerability in Kofi Mokome Messag |
| 🟠 high | CVE-2026-57668: Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vu… | `T1059.007` | Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vulnerability in Basix NEX-Forms ne |
| 🟠 high | CVE-2026-57695: Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vu… | `T1059.007` | Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vulnerability in Dan Rossiter Docum |
| 🟠 high | CVE-2026-57706: Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vu… | `T1059.007` | Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vulnerability in Dokan, Inc. Dokan  |
| 🟠 high | CVE-2026-57708: Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vu… | `T1059.007` | Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vulnerability in CRM Perks Contact  |
| 🟠 high | CVE-2026-57712: Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vu… | `T1059.007` | Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vulnerability in WPZOOM WPZOOM Port |
| 🟠 high | CVE-2026-57715: Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vu… | `T1059.007` | Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vulnerability in WPManageNinja Flue |
| 🟠 high | CVE-2026-57718: Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vu… | `T1059.007` | Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vulnerability in Unlimited Elements |
| 🟠 high | CVE-2026-57725: Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vu… | `T1059.007` | Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vulnerability in Themeum Kirki kirk |
| 🟠 high | CVE-2026-57728: Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vu… | `T1059.007` | Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vulnerability in UX-themes Flatsome |
| 🟠 high | CVE-2026-57732: Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vu… | `T1059.007` | Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vulnerability in tagDiv tagDiv Opt- |
| 🟠 high | CVE-2026-57733: Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vu… | `T1059.007` | Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vulnerability in tagDiv tagDiv Clou |
| 🟠 high | CVE-2026-57734: Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vu… | `T1059.007` | Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vulnerability in tagDiv tagDiv Comp |
| 🟠 high | CVE-2026-57741: Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vu… | `T1059.007` | Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vulnerability in AcyMailing Newslet |
| 🟠 high | CVE-2026-57745: Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vu… | `T1059.007` | Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vulnerability in stmcan RT-Theme 18 |
| 🟠 high | CVE-2026-57814: Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vu… | `T1059.007` | Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vulnerability in WPMU DEV - Your Al |
| 🟠 high | CVE-2026-57816: Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vu… | `T1059.007` | Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vulnerability in FunnelKit Funnel B |
| 🟠 high | CVE-2026-59516: Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vu… | `T1059.007` | Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vulnerability in Room 34 Creative S |
| 🟠 high | CVE-2026-58500: MCP Appium is an MCP server that provides AI assistants with tools to automate mobile a… | — | MCP Appium is an MCP server that provides AI assistants with tools to automate mobile app testing on Android and iOS. In |
| 🟠 high | CVE-2026-44752: SAP NetWeaver Application Server Java allows an unauthenticated attacker to inject mali… | — | SAP NetWeaver Application Server Java allows an unauthenticated attacker to inject malicious JavaScript through crafted  |
| 🟠 high | CVE-2026-54433: In Roundcube Webmail before 1.6.17 and 1.7.x before 1.7.2, there is Stored Cross-Site S… | `T1059.007` | In Roundcube Webmail before 1.6.17 and 1.7.x before 1.7.2, there is Stored Cross-Site Scripting (XSS) via a crafted plai |
| | _+18 more…_ | | |

## Memory Corruption (387)

_Buffer overflows, use-after-free, type confusion enabling crashes or RCE._

| Severity | Finding | MITRE | Description |
|----------|---------|-------|-------------|
| 🔴 critical | CVE-2026-40468: Integer overflow vulnerability has been found in "builtin.c" program file of gawk. | — | Integer overflow vulnerability has been found in "builtin.c" program file of gawk. This issue may lead to memory exhaust |
| 🔴 critical | CVE-2026-40469: Integer overflow vulnerability has been found in "builtin.c" program file of gawk (do_s… | — | Integer overflow vulnerability has been found in "builtin.c" program file of gawk (do_sub() routine). This issue could b |
| 🔴 critical | CVE-2026-44747: SAP NetWeaver Application Server ABAP allows an authenticated attacker to leverage logi… | `T1203` | SAP NetWeaver Application Server ABAP allows an authenticated attacker to leverage logical errors in memory management t |
| 🔴 critical | CVE-2026-15701: A weakness has been identified in Totolink NR1800X 9.1.0u.6279_B20210910. | `T1203` | A weakness has been identified in Totolink NR1800X 9.1.0u.6279_B20210910. Affected by this issue is the function Form_Lo |
| 🔴 critical | CVE-2026-42990: Heap-based buffer overflow in SQL Server ODBC driver allows an unauthorized attacker to… | `T1203` | Heap-based buffer overflow in SQL Server ODBC driver allows an unauthorized attacker to execute code over a network. |
| 🔴 critical | CVE-2026-49172: Heap-based buffer overflow in Windows FTP Service allows an unauthorized attacker to ex… | `T1203` | Heap-based buffer overflow in Windows FTP Service allows an unauthorized attacker to execute code over a network. |
| 🔴 critical | CVE-2026-49798: Use after free in Windows Kernel allows an unauthorized attacker to elevate privileges … | — | Use after free in Windows Kernel allows an unauthorized attacker to elevate privileges locally. |
| 🔴 critical | CVE-2026-54990: Heap-based buffer overflow in Remote Desktop Client allows an unauthorized attacker to … | `T1203` | Heap-based buffer overflow in Remote Desktop Client allows an unauthorized attacker to execute code over a network. |
| 🔴 critical | CVE-2026-50380: Heap-based buffer overflow in Windows GDI+ allows an unauthorized attacker to execute c… | `T1203` | Heap-based buffer overflow in Windows GDI+ allows an unauthorized attacker to execute code over a network. |
| 🔴 critical | CVE-2026-50447: Heap-based buffer overflow in Windows Message Queuing allows an unauthorized attacker t… | `T1203` | Heap-based buffer overflow in Windows Message Queuing allows an unauthorized attacker to execute code over a network. |
| 🔴 critical | CVE-2026-50518: Heap-based buffer overflow in Windows DHCP Server allows an unauthorized attacker to ex… | `T1203` | Heap-based buffer overflow in Windows DHCP Server allows an unauthorized attacker to execute code over a network. |
| 🔴 critical | CVE-2026-55010: Heap-based buffer overflow in Minecraft Bedrock Dedicated Server allows an unauthorized… | `T1203` | Heap-based buffer overflow in Minecraft Bedrock Dedicated Server allows an unauthorized attacker to execute code over a  |
| 🔴 critical | CVE-2026-56159: Heap-based buffer overflow in Windows DHCP Server allows an unauthorized attacker to ex… | `T1203` | Heap-based buffer overflow in Windows DHCP Server allows an unauthorized attacker to execute code over a network. |
| 🔴 critical | CVE-2026-57092: Use after free in Windows VMSwitch allows an authorized attacker to elevate privileges … | — | Use after free in Windows VMSwitch allows an authorized attacker to elevate privileges over a network. |
| 🔴 critical | CVE-2026-15773: Use after free in Core in Google Chrome on Windows prior to 150.0.7871.125 allowed a re… | — | Use after free in Core in Google Chrome on Windows prior to 150.0.7871.125 allowed a remote attacker to potentially perf |
| 🟠 high | CVE-2026-7162: Successful
exploitation of the integer overflow vulnerability could allow an attacker t… | — | Successful
exploitation of the integer overflow vulnerability could allow an attacker to
achieve system-level access to  |
| 🟠 high | CVE-2026-15543: A vulnerability was found in Tenda CH22 1.0.0.1. | `T1203` | A vulnerability was found in Tenda CH22 1.0.0.1. This impacts the function formCertListInfo of the file /goform/CertList |
| 🟠 high | CVE-2026-15544: A vulnerability was determined in Shibby Tomato up to 1.28.0000. | `T1203` | A vulnerability was determined in Shibby Tomato up to 1.28.0000. Affected is the function getupsvar of the file www/apcu |
| 🟠 high | CVE-2026-15545: A vulnerability was identified in Shibby Tomato up to 1.28.0000. | — | A vulnerability was identified in Shibby Tomato up to 1.28.0000. Affected by this vulnerability is the function main of  |
| 🟠 high | CVE-2026-15548: A security vulnerability has been detected in Shibby Tomato up to 1.28.0000. | `T1203` | A security vulnerability has been detected in Shibby Tomato up to 1.28.0000. This vulnerability affects the function sub |
| 🟠 high | CVE-2026-40467: Use After Free vulnerability has been found in "io.c" program file of gawk (do_getline_… | — | Use After Free vulnerability has been found in "io.c" program file of gawk (do_getline_redir() routine). This issue may  |
| 🟠 high | CVE-2026-40553: Buffer overflow vulnerability has been found in "extension/readdir.c" program file of g… | `T1203` | Buffer overflow vulnerability has been found in "extension/readdir.c" program file of gawk (ftype() routine). This issue |
| 🟠 high | CVE-2026-55772: CedarJava is an open source Java implementation of the Cedar policy language, used for … | — | CedarJava is an open source Java implementation of the Cedar policy language, used for fine-grained authorization decisi |
| 🟠 high | CVE-2026-10051: In Eclipse Jetty, a first HTTP/1.1 request with trailers causes the server to retain th… | — | In Eclipse Jetty, a first HTTP/1.1 request with trailers causes the server to retain the trailers in subsequent requests |
| 🟠 high | CVE-2026-15075: In Eclipse Vert.x versions up to and including 4.5.29 (4.x branch) and 5.1.4 (5.x branc… | — | In Eclipse Vert.x versions up to and including 4.5.29 (4.x branch) and 5.1.4 (5.x branch), DefaultRedirectHandler (vertx |
| 🟠 high | CVE-2026-15691: A security flaw has been discovered in Tenda BE12 Pro 16.03.66.23. | `T1203` | A security flaw has been discovered in Tenda BE12 Pro 16.03.66.23. This affects the function fromSafeClientFilter of the |
| 🟠 high | CVE-2026-15692: A weakness has been identified in Tenda BE12 Pro 16.03.66.23. | `T1203` | A weakness has been identified in Tenda BE12 Pro 16.03.66.23. This vulnerability affects the function fromSafeUrlFilter  |
| 🟠 high | CVE-2026-15693: A security vulnerability has been detected in Tenda BE12 Pro 16.03.66.23. | `T1203` | A security vulnerability has been detected in Tenda BE12 Pro 16.03.66.23. This issue affects the function fromSafeMacFil |
| 🟠 high | CVE-2026-10669: On Xtensa SoCs built with CONFIG_XTENSA_MPU and CONFIG_USERSPACE, arch_buffer_validate(… | `T1068`, `T1203` | On Xtensa SoCs built with CONFIG_XTENSA_MPU and CONFIG_USERSPACE, arch_buffer_validate() in arch/xtensa/core/mpu.c — the |
| 🟠 high | CVE-2026-10672: subsys/net/lib/lwm2m/lwm2m_pull_context.c copied the firmware-update Package URI into a… | — | subsys/net/lib/lwm2m/lwm2m_pull_context.c copied the firmware-update Package URI into a fixed static buffer (context.uri |
| 🟠 high | CVE-2026-15694: A vulnerability was detected in Tenda BE12 Pro 16.03.66.23. | `T1203` | A vulnerability was detected in Tenda BE12 Pro 16.03.66.23. Impacted is the function fromSetIpBind of the file /goform/S |
| 🟠 high | CVE-2026-15695: A flaw has been found in Tenda BE12 Pro 16.03.66.23. | `T1203` | A flaw has been found in Tenda BE12 Pro 16.03.66.23. The affected element is the function fromDhcpListClient of the file |
| 🟠 high | CVE-2026-15696: A vulnerability has been found in Tenda BE12 Pro 16.03.66.23. | `T1203` | A vulnerability has been found in Tenda BE12 Pro 16.03.66.23. The impacted element is the function fromVirtualSer of the |
| 🟠 high | CVE-2026-51105: Buffer Overflow vulnerability in aMULE-Project aMule v.2.3.3 allows a remote attacker t… | `T1203` | Buffer Overflow vulnerability in aMULE-Project aMule v.2.3.3 allows a remote attacker to cause a denial of service via t |
| 🟠 high | CVE-2025-53379: A out-of-bounds read vulnerability in Fortinet FortiAuthenticator 6.6.0 through 6.6.2, … | — | A out-of-bounds read vulnerability in Fortinet FortiAuthenticator 6.6.0 through 6.6.2, FortiAuthenticator 6.5 all versio |
| 🟠 high | CVE-2026-55651: Easy!Appointments is a self hosted appointment scheduler. | — | Easy!Appointments is a self hosted appointment scheduler. In version 1.5.2, an Excessive Data Exposure vulnerability in  |
| 🟠 high | CVE-2026-59199: Pillow is a Python imaging library. | — | Pillow is a Python imaging library. Prior to 12.3.0, Pillow public image coordinate APIs can trigger a native heap out-o |
| 🟠 high | CVE-2026-59205: Pillow is a Python imaging library. | — | Pillow is a Python imaging library. Prior to 12.3.0, Pillow's ImageCms.ImageCmsTransform.apply(im, imOut) API can trigge |
| 🟠 high | CVE-2026-42900: Concurrent execution using shared resource with improper synchronization ('race conditi… | — | Concurrent execution using shared resource with improper synchronization ('race condition') in Windows App Store allows  |
| 🟠 high | CVE-2026-42975: Heap-based buffer overflow in Windows Bluetooth Port Driver allows an unauthorized atta… | `T1203` | Heap-based buffer overflow in Windows Bluetooth Port Driver allows an unauthorized attacker to execute code over an adja |
| 🟠 high | CVE-2026-44800: Concurrent execution using shared resource with improper synchronization ('race conditi… | — | Concurrent execution using shared resource with improper synchronization ('race condition') in Windows Push Notification |
| 🟠 high | CVE-2026-48564: Heap-based buffer overflow in Windows DHCP Server allows an authorized attacker to exec… | `T1203` | Heap-based buffer overflow in Windows DHCP Server allows an authorized attacker to execute code over a network. |
| 🟠 high | CVE-2026-48571: Use after free in Windows App Installer allows an authorized attacker to elevate privil… | — | Use after free in Windows App Installer allows an authorized attacker to elevate privileges locally. |
| 🟠 high | CVE-2026-48572: Concurrent execution using shared resource with improper synchronization ('race conditi… | — | Concurrent execution using shared resource with improper synchronization ('race condition') in Windows App Installer all |
| 🟠 high | CVE-2026-49162: Use after free in Microsoft Brokering File System allows an authorized attacker to elev… | — | Use after free in Microsoft Brokering File System allows an authorized attacker to elevate privileges locally. |
| 🟠 high | CVE-2026-49164: Heap-based buffer overflow in Active Directory Domain Services allows an unauthorized a… | `T1203` | Heap-based buffer overflow in Active Directory Domain Services allows an unauthorized attacker to execute code over a ne |
| 🟠 high | CVE-2026-49166: Use after free in Microsoft Printer Drivers allows an authorized attacker to elevate pr… | — | Use after free in Microsoft Printer Drivers allows an authorized attacker to elevate privileges locally. |
| 🟠 high | CVE-2026-49169: Use after free in DNS Server allows an authorized attacker to execute code over a network. | — | Use after free in DNS Server allows an authorized attacker to execute code over a network. |
| 🟠 high | CVE-2026-49171: Use after free in Microsoft Windows Speech allows an authorized attacker to elevate pri… | — | Use after free in Microsoft Windows Speech allows an authorized attacker to elevate privileges locally. |
| 🟠 high | CVE-2026-49173: Use after free in Windows Kernel allows an authorized attacker to elevate privileges lo… | — | Use after free in Windows Kernel allows an authorized attacker to elevate privileges locally. |
| | _+337 more…_ | | |

## Insecure Deserialization (27)

_Unsafe deserialization of attacker-controlled data leading to RCE._

| Severity | Finding | MITRE | Description |
|----------|---------|-------|-------------|
| 🔴 critical | CVE-2026-58644: Deserialization of untrusted data in Microsoft Office SharePoint allows an unauthorized… | `T1059.007` | Deserialization of untrusted data in Microsoft Office SharePoint allows an unauthorized attacker to execute code over a  |
| 🔴 critical | CVE-2026-57724: Deserialization of Untrusted Data vulnerability in Themeum Kirki kirki allows Object In… | `T1059.007` | Deserialization of Untrusted Data vulnerability in Themeum Kirki kirki allows Object Injection.This issue affects Kirki: |
| 🔴 critical | CVE-2026-57738: Deserialization of Untrusted Data vulnerability in axiomthemes 777 triple-seven allows … | `T1059.007` | Deserialization of Untrusted Data vulnerability in axiomthemes 777 triple-seven allows Object Injection.This issue affec |
| 🔴 critical | CVE-2026-57744: Deserialization of Untrusted Data vulnerability in stmcan RT-Theme 18 \| Extensions rt18… | `T1059.007` | Deserialization of Untrusted Data vulnerability in stmcan RT-Theme 18 \| Extensions rt18-extensions allows Object Injecti |
| 🔴 critical | CVE-2026-57770: Deserialization of Untrusted Data vulnerability in ThemeGoods Grand Photography grandph… | `T1059.007` | Deserialization of Untrusted Data vulnerability in ThemeGoods Grand Photography grandphotography allows Object Injection |
| 🔴 critical | CVE-2026-59518: Deserialization of Untrusted Data vulnerability in wpWax Directorist directorist allows… | `T1059.007` | Deserialization of Untrusted Data vulnerability in wpWax Directorist directorist allows Object Injection.This issue affe |
| 🔴 critical | CVE-2026-50522: Deserialization of untrusted data in Microsoft Office SharePoint allows an unauthorized… | `T1059.007` | Deserialization of untrusted data in Microsoft Office SharePoint allows an unauthorized attacker to execute code over a  |
| 🔴 critical | CVE-2026-55944: Deserialization of untrusted data in Microsoft Dynamics NAV allows an unauthorized atta… | `T1059.007` | Deserialization of untrusted data in Microsoft Dynamics NAV allows an unauthorized attacker to execute code over a netwo |
| 🔴 critical | CVE-2026-14890: SGLang uses an expert-parallel backup subsystem that exposes a ZeroMQ PULL socket on a … | `T1190`, `T1059.007` | SGLang uses an expert-parallel backup subsystem that exposes a ZeroMQ PULL socket on a routable network interface that d |
| 🔴 critical | CVE-2026-8476: IBM Langflow OSS 1.0.0 through 1.10.0 contain a critical remote code execution vulnerab… | `T1190` | IBM Langflow OSS 1.0.0 through 1.10.0 contain a critical remote code execution vulnerability in the disk-based caching m |
| 🟠 high | CVE-2026-57371: Deserialization of Untrusted Data vulnerability in denishua WPJAM Basic wpjam-basic all… | `T1059.007` | Deserialization of Untrusted Data vulnerability in denishua WPJAM Basic wpjam-basic allows Object Injection.This issue a |
| 🟠 high | CVE-2026-57713: Deserialization of Untrusted Data vulnerability in Marcus (aka @msykes) Events Manager … | `T1059.007` | Deserialization of Untrusted Data vulnerability in Marcus (aka @msykes) Events Manager events-manager allows Object Inje |
| 🟠 high | CVE-2026-59521: Deserialization of Untrusted Data vulnerability in ShapedPlugin LLC Real Testimonials t… | `T1059.007` | Deserialization of Untrusted Data vulnerability in ShapedPlugin LLC Real Testimonials testimonial-free allows Object Inj |
| 🟠 high | CVE-2026-58233: SAP Change and Transport System Attach Tool (ctsattach) allows an authenticated attacke… | `T1190`, `T1059.007` | SAP Change and Transport System Attach Tool (ctsattach) allows an authenticated attacker to supply a specially crafted a |
| 🟠 high | CVE-2026-12583: The Newsletters WordPress plugin before 4.15 does not prevent deserialization of untrus… | `T1059.007` | The Newsletters WordPress plugin before 4.15 does not prevent deserialization of untrusted input that is stored through  |
| 🟠 high | CVE-2026-50652: Deserialization of untrusted data in Azure Active Directory allows an unauthorized atta… | `T1059.007` | Deserialization of untrusted data in Azure Active Directory allows an unauthorized attacker to deny service over a netwo |
| 🟠 high | CVE-2026-54117: Deserialization of untrusted data in SQL Server allows an authorized attacker to execut… | `T1059.007` | Deserialization of untrusted data in SQL Server allows an authorized attacker to execute code over a network. |
| 🟠 high | CVE-2026-54118: Deserialization of untrusted data in SQL Server allows an authorized attacker to execut… | `T1059.007` | Deserialization of untrusted data in SQL Server allows an authorized attacker to execute code over a network. |
| 🟠 high | CVE-2026-55009: Deserialization of untrusted data in Microsoft Exchange Server allows an authorized att… | `T1059.007` | Deserialization of untrusted data in Microsoft Exchange Server allows an authorized attacker to elevate privileges local |
| 🟠 high | CVE-2026-50509: Deserialization of untrusted data in Windows Wireless Wide Area Network Service allows … | `T1059.007` | Deserialization of untrusted data in Windows Wireless Wide Area Network Service allows an authorized attacker to elevate |
| 🟠 high | CVE-2026-50646: Protection mechanism failure in .NET Framework allows an unauthorized attacker to execu… | — | Protection mechanism failure in .NET Framework allows an unauthorized attacker to execute code locally. |
| 🟠 high | CVE-2026-50649: Deserialization of untrusted data in .NET allows an unauthorized attacker to execute co… | `T1059.007` | Deserialization of untrusted data in .NET allows an unauthorized attacker to execute code locally. |
| 🟠 high | CVE-2026-24233: NVIDIA TensorRT-LLM for Linux contains a vulnerability in the restricted unpickler used… | `T1059.007` | NVIDIA TensorRT-LLM for Linux contains a vulnerability in the restricted unpickler used for model weight deserialization |
| 🟠 high | CVE-2026-47472: NVIDIA TensorRT-LLM contains a vulnerability in its inter-process communication layer w… | `T1059.007` | NVIDIA TensorRT-LLM contains a vulnerability in its inter-process communication layer where an attacker with local same- |
| 🟠 high | CVE-2026-15008: The Uncanny Automator – Easy Automation, Integration, Webhooks & Workflow Builder Plugi… | `T1190` | The Uncanny Automator – Easy Automation, Integration, Webhooks & Workflow Builder Plugin plugin for WordPress is vulnera |
| 🟠 high | CVE-2026-45162: Pimcore is an Open Source Data & Experience Management Platform. | `T1190` | Pimcore is an Open Source Data & Experience Management Platform. Prior to 11.5.17 (LTS) and 12.3.7, multiple Pimcore loc |
| 🟠 high | CVE-2026-12484: A vulnerability in keras-team/keras version 3.15.0 allows unsafe deserialization of att… | `T1190`, `T1059.007` | A vulnerability in keras-team/keras version 3.15.0 allows unsafe deserialization of attacker-controlled PyTorch pickle d |

## Path Traversal & File Disclosure (67)

_Directory traversal and arbitrary file read/write vulnerabilities._

| Severity | Finding | MITRE | Description |
|----------|---------|-------|-------------|
| 🔴 critical | CVE-2026-57401: Improper Limitation of a Pathname to a Restricted Directory ('Path Traversal') vulnerab… | — | Improper Limitation of a Pathname to a Restricted Directory ('Path Traversal') vulnerability in Brainstorm Force SureDas |
| 🔴 critical | CVE-2026-57898: In Eclipse BaSyx Java Server SDK versions 2.0.0-milestone-05 to 2.0.0-milestone-12, dep… | `T1190` | In Eclipse BaSyx Java Server SDK versions 2.0.0-milestone-05 to 2.0.0-milestone-12, deployments using the MongoDB backen |
| 🔴 critical | CVE-2026-15265: A path traversal vulnerability in Tenable Agent 11.2.0 and 11.1.3 and lower allows a pr… | `T1190` | A path traversal vulnerability in Tenable Agent 11.2.0 and 11.1.3 and lower allows a privileged attacker to write arbitr |
| 🔴 critical | CVE-2026-47429: Vitest is a testing framework powered by Vite. | — | Vitest is a testing framework powered by Vite. Prior to 3.2.5 and 4.1.0, the Vitest UI/API server on Windows used isFile |
| 🔴 critical | CVE-2026-48318: ColdFusion is affected by an Improper Limitation of a Pathname to a Restricted Director… | — | ColdFusion is affected by an Improper Limitation of a Pathname to a Restricted Directory ('Path Traversal') vulnerabilit |
| 🔴 critical | CVE-2026-48319: ColdFusion is affected by an Improper Limitation of a Pathname to a Restricted Director… | `T1190` | ColdFusion is affected by an Improper Limitation of a Pathname to a Restricted Directory ('Path Traversal') vulnerabilit |
| 🔴 critical | CVE-2026-53486: The decompress package for Node.js extracts archives. | — | The decompress package for Node.js extracts archives. Prior to 10.2.1 and 11.1.3, archive extraction can create files an |
| 🔴 critical | CVE-2026-43637: Cornac before 2.6.0 contains a path traversal (Tar Slip) vulnerability that allows atta… | — | Cornac before 2.6.0 contains a path traversal (Tar Slip) vulnerability that allows attackers to write arbitrary files ou |
| 🔴 critical | CVE-2026-50148: Metabase is an open-source business intelligence and embedded analytics tool. | `T1190` | Metabase is an open-source business intelligence and embedded analytics tool. From 1.54.0 until 1.54.24, 1.55.24, 1.56.2 |
| 🔴 critical | CVE-2026-8859: IBM Langflow OSS 1.0.0 through 1.10.0 Langflow could allow an attacker to write arbitra… | — | IBM Langflow OSS 1.0.0 through 1.10.0 Langflow could allow an attacker to write arbitrary files to unintended locations  |
| 🟠 high | CVE-2026-57389: Improper Limitation of a Pathname to a Restricted Directory ('Path Traversal') vulnerab… | — | Improper Limitation of a Pathname to a Restricted Directory ('Path Traversal') vulnerability in Adrian Tobey Groundhogg  |
| 🟠 high | CVE-2026-57709: Improper Limitation of a Pathname to a Restricted Directory ('Path Traversal') vulnerab… | — | Improper Limitation of a Pathname to a Restricted Directory ('Path Traversal') vulnerability in WP Swings Membership For |
| 🟠 high | CVE-2026-57743: Improper Control of Filename for Include/Require Statement in PHP Program ('PHP Remote … | — | Improper Control of Filename for Include/Require Statement in PHP Program ('PHP Remote File Inclusion') vulnerability in |
| 🟠 high | CVE-2026-57788: Improper Control of Filename for Include/Require Statement in PHP Program ('PHP Remote … | — | Improper Control of Filename for Include/Require Statement in PHP Program ('PHP Remote File Inclusion') vulnerability in |
| 🟠 high | CVE-2026-57789: Improper Control of Filename for Include/Require Statement in PHP Program ('PHP Remote … | — | Improper Control of Filename for Include/Require Statement in PHP Program ('PHP Remote File Inclusion') vulnerability in |
| 🟠 high | CVE-2026-57790: Improper Control of Filename for Include/Require Statement in PHP Program ('PHP Remote … | — | Improper Control of Filename for Include/Require Statement in PHP Program ('PHP Remote File Inclusion') vulnerability in |
| 🟠 high | CVE-2026-57791: Improper Control of Filename for Include/Require Statement in PHP Program ('PHP Remote … | — | Improper Control of Filename for Include/Require Statement in PHP Program ('PHP Remote File Inclusion') vulnerability in |
| 🟠 high | CVE-2026-57792: Improper Control of Filename for Include/Require Statement in PHP Program ('PHP Remote … | — | Improper Control of Filename for Include/Require Statement in PHP Program ('PHP Remote File Inclusion') vulnerability in |
| 🟠 high | CVE-2026-57793: Improper Control of Filename for Include/Require Statement in PHP Program ('PHP Remote … | — | Improper Control of Filename for Include/Require Statement in PHP Program ('PHP Remote File Inclusion') vulnerability in |
| 🟠 high | CVE-2026-57794: Improper Control of Filename for Include/Require Statement in PHP Program ('PHP Remote … | — | Improper Control of Filename for Include/Require Statement in PHP Program ('PHP Remote File Inclusion') vulnerability in |
| 🟠 high | CVE-2026-57795: Improper Control of Filename for Include/Require Statement in PHP Program ('PHP Remote … | — | Improper Control of Filename for Include/Require Statement in PHP Program ('PHP Remote File Inclusion') vulnerability in |
| 🟠 high | CVE-2026-57796: Improper Control of Filename for Include/Require Statement in PHP Program ('PHP Remote … | — | Improper Control of Filename for Include/Require Statement in PHP Program ('PHP Remote File Inclusion') vulnerability in |
| 🟠 high | CVE-2026-57798: Improper Control of Filename for Include/Require Statement in PHP Program ('PHP Remote … | — | Improper Control of Filename for Include/Require Statement in PHP Program ('PHP Remote File Inclusion') vulnerability in |
| 🟠 high | CVE-2026-57799: Improper Control of Filename for Include/Require Statement in PHP Program ('PHP Remote … | — | Improper Control of Filename for Include/Require Statement in PHP Program ('PHP Remote File Inclusion') vulnerability in |
| 🟠 high | CVE-2026-57800: Improper Control of Filename for Include/Require Statement in PHP Program ('PHP Remote … | — | Improper Control of Filename for Include/Require Statement in PHP Program ('PHP Remote File Inclusion') vulnerability in |
| 🟠 high | CVE-2026-57801: Improper Control of Filename for Include/Require Statement in PHP Program ('PHP Remote … | — | Improper Control of Filename for Include/Require Statement in PHP Program ('PHP Remote File Inclusion') vulnerability in |
| 🟠 high | CVE-2026-57802: Improper Control of Filename for Include/Require Statement in PHP Program ('PHP Remote … | — | Improper Control of Filename for Include/Require Statement in PHP Program ('PHP Remote File Inclusion') vulnerability in |
| 🟠 high | CVE-2026-57803: Improper Control of Filename for Include/Require Statement in PHP Program ('PHP Remote … | — | Improper Control of Filename for Include/Require Statement in PHP Program ('PHP Remote File Inclusion') vulnerability in |
| 🟠 high | CVE-2026-57804: Improper Control of Filename for Include/Require Statement in PHP Program ('PHP Remote … | — | Improper Control of Filename for Include/Require Statement in PHP Program ('PHP Remote File Inclusion') vulnerability in |
| 🟠 high | CVE-2026-57805: Improper Control of Filename for Include/Require Statement in PHP Program ('PHP Remote … | — | Improper Control of Filename for Include/Require Statement in PHP Program ('PHP Remote File Inclusion') vulnerability in |
| 🟠 high | CVE-2026-57815: Improper Limitation of a Pathname to a Restricted Directory ('Path Traversal') vulnerab… | — | Improper Limitation of a Pathname to a Restricted Directory ('Path Traversal') vulnerability in WPMU DEV - Your All-in-O |
| 🟠 high | CVE-2026-61462: mcp-gitlab contains a path traversal vulnerability in the job_id parameter of build/ind… | — | mcp-gitlab contains a path traversal vulnerability in the job_id parameter of build/index.js that allows attackers to re |
| 🟠 high | CVE-2026-26396: OpenBMB XAgent v1.0.0 and before is vulnerable to path traversal in the file() function… | — | OpenBMB XAgent v1.0.0 and before is vulnerable to path traversal in the file() function in XAgent/XAgentServer/applicati |
| 🟠 high | CVE-2026-49970: Laravel-Mediable before 7.0.0 contains a path traversal vulnerability in the File::sani… | `T1190` | Laravel-Mediable before 7.0.0 contains a path traversal vulnerability in the File::sanitizePath() function that allows a |
| 🟠 high | CVE-2026-57856: Cockpit CMS contains a path traversal vulnerability in the Bucket file storage API (/sy… | — | Cockpit CMS contains a path traversal vulnerability in the Bucket file storage API (/system/buckets/api). The api() meth |
| 🟠 high | CVE-2026-12511: The AI Engine  WordPress plugin before 3.5.5 does not sanitize a user-supplied filename… | — | The AI Engine  WordPress plugin before 3.5.5 does not sanitize a user-supplied filename before using it to write a downl |
| 🟠 high | CVE-2026-14903: Path traversal in Ivanti  Xtraction before version 2026.2.1 allows a remote authenticat… | — | Path traversal in Ivanti  Xtraction before version 2026.2.1 allows a remote authenticated attacker to read arbitrary fil |
| 🟠 high | CVE-2026-60114: Sustainable Irrigation Platform (SIP) through version 5.2.16 contains a path traversal … | — | Sustainable Irrigation Platform (SIP) through version 5.2.16 contains a path traversal vulnerability that allows attacke |
| 🟠 high | CVE-2026-40400: Relative path traversal in Windows PowerShell allows an authorized attacker to execute … | — | Relative path traversal in Windows PowerShell allows an authorized attacker to execute code over a network. |
| 🟠 high | CVE-2026-50663: Relative path traversal in Age of Empires II: Definitive Edition Game allows an unautho… | — | Relative path traversal in Age of Empires II: Definitive Edition Game allows an unauthorized attacker to execute code ov |
| 🟠 high | CVE-2026-55002: External control of file name or path in SQL Server allows an authorized attacker to el… | — | External control of file name or path in SQL Server allows an authorized attacker to elevate privileges locally. |
| 🟠 high | CVE-2026-50454: Relative path traversal in Windows User Interface Core allows an authorized attacker to… | — | Relative path traversal in Windows User Interface Core allows an authorized attacker to elevate privileges locally. |
| 🟠 high | CVE-2026-50462: External control of file name or path in Windows Ancillary Function Driver for WinSock … | — | External control of file name or path in Windows Ancillary Function Driver for WinSock allows an authorized attacker to  |
| 🟠 high | CVE-2026-56196: Relative path traversal in Windows Admin Center allows an authorized attacker to execut… | — | Relative path traversal in Windows Admin Center allows an authorized attacker to execute code over a network. |
| 🟠 high | CVE-2026-48310: Adobe Experience Manager is affected by an Improper Limitation of a Pathname to a Restr… | — | Adobe Experience Manager is affected by an Improper Limitation of a Pathname to a Restricted Directory ('Path Traversal' |
| 🟠 high | CVE-2026-48350: Animate is affected by an Improper Limitation of a Pathname to a Restricted Directory (… | `T1190` | Animate is affected by an Improper Limitation of a Pathname to a Restricted Directory ('Path Traversal') vulnerability t |
| 🟠 high | CVE-2026-54684: jadx is a Dex to Java decompiler. | — | jadx is a Dex to Java decompiler. From 1.5.2 to 1.5.5, a malicious .xapk file can cause jadx to write attacker-controlle |
| 🟠 high | CVE-2026-61443: PraisonAI before 1.6.78 contains a remote code execution vulnerability in SkillTools.ru… | `T1190` | PraisonAI before 1.6.78 contains a remote code execution vulnerability in SkillTools.run_skill_script() that executes sc |
| 🟠 high | CVE-2026-61873: Grav before 9.1.8 contains an arbitrary file write vulnerability in the Form plugin's p… | — | Grav before 9.1.8 contains an arbitrary file write vulnerability in the Form plugin's process.save.filename parameter, w |
| 🟠 high | CVE-2026-20297: In Splunk Enterprise versions below 10.4.1, 10.2.5, 10.0.8, 9.4.13, and 9.3.14, and Spl… | — | In Splunk Enterprise versions below 10.4.1, 10.2.5, 10.0.8, 9.4.13, and 9.3.14, and Splunk Cloud Platform versions below |
| | _+17 more…_ | | |

## SSRF, CSRF & Open Redirect (47)

_Server-side request forgery, cross-site request forgery, and redirect issues._

| Severity | Finding | MITRE | Description |
|----------|---------|-------|-------------|
| 🔴 critical | CVE-2026-15409: SonicWall SMA1000 Appliances — SonicWall SMA1000 Appliances Server-Side Request Forgery Vulnerability | — | A Server-side request forgery (SSRF) vulnerability has been identified in the SMA1000 Appliance Work Place interface. A  |
| 🔴 critical | CVE-2026-11563: The Word Count and Social Shares WordPress plugin through 1.0 does not validate a user-… | — | The Word Count and Social Shares WordPress plugin through 1.0 does not validate a user-supplied file path before deletio |
| 🔴 critical | CVE-2026-48259: Adobe Experience Manager is affected by a Server-Side Request Forgery (SSRF) vulnerabil… | `T1190` | Adobe Experience Manager is affected by a Server-Side Request Forgery (SSRF) vulnerability that could result in arbitrar |
| 🔴 critical | CVE-2026-61451: The Grav API plugin (grav-plugin-api) before 1.0.4 does not validate the origin of the … | — | The Grav API plugin (grav-plugin-api) before 1.0.4 does not validate the origin of the client-supplied admin_base_url fi |
| 🔴 critical | CVE-2026-53513: Better Auth is an authentication and authorization library for TypeScript. | — | Better Auth is an authentication and authorization library for TypeScript. Prior to 1.6.11, the @better-auth/sso plugin' |
| 🟠 high | CVE-2026-57372: Server-Side Request Forgery (SSRF) vulnerability in denishua WPJAM Basic wpjam-basic al… | — | Server-Side Request Forgery (SSRF) vulnerability in denishua WPJAM Basic wpjam-basic allows Server Side Request Forgery. |
| 🟠 high | CVE-2026-57407: Server-Side Request Forgery (SSRF) vulnerability in WP Swings PDF Generator for WordPre… | — | Server-Side Request Forgery (SSRF) vulnerability in WP Swings PDF Generator for WordPress pdf-generator-for-wp allows Se |
| 🟠 high | CVE-2026-57786: Cross-Site Request Forgery (CSRF) vulnerability in purethemes WorkScout-Core workscout-… | `T1078` | Cross-Site Request Forgery (CSRF) vulnerability in purethemes WorkScout-Core workscout-core allows Authentication Bypass |
| 🟠 high | CVE-2026-61956: Cross-Site Request Forgery (CSRF) vulnerability in hamsalam ووسلام &#8211; همگام سازی و… | — | Cross-Site Request Forgery (CSRF) vulnerability in hamsalam ووسلام &#8211; همگام سازی ووکامرس و باسلام sync-basalam allo |
| 🟠 high | CVE-2025-45869: LogicalDOC Enterprise Version up to and before v9.1.1 is vulnerable to Server-Side Requ… | — | LogicalDOC Enterprise Version up to and before v9.1.1 is vulnerable to Server-Side Request Forgery (SSRF). An unauthenti |
| 🟠 high | CVE-2026-49969: Laravel-Mediable before 7.0.0 contains a server-side request forgery vulnerability that… | — | Laravel-Mediable before 7.0.0 contains a server-side request forgery vulnerability that allows remote attackers to issue |
| 🟠 high | CVE-2026-62197: OpenClaw before 2026.6.6 contains a policy bypass vulnerability in browser CDP discover… | — | OpenClaw before 2026.6.6 contains a policy bypass vulnerability in browser CDP discovery that accepts blocked WebSocket  |
| 🟠 high | CVE-2026-62240: CrewAI before 1.15.1 contains a server-side request forgery vulnerability in the valida… | — | CrewAI before 1.15.1 contains a server-side request forgery vulnerability in the validate_url function that performs one |
| 🟠 high | CVE-2026-62242: Spring Boot Admin Server before 4.1.2 contains a server-side request forgery vulnerabil… | — | Spring Boot Admin Server before 4.1.2 contains a server-side request forgery vulnerability that allows unauthenticated a |
| 🟠 high | CVE-2026-44745: SAP Approuter does not properly validate incoming request headers during the OAuth2 log… | — | SAP Approuter does not properly validate incoming request headers during the OAuth2 login flow under certain configurati |
| 🟠 high | CVE-2026-58476: Sustainable Irrigation Platform (SIP) through version 5.2.16 contains a cross-site requ… | — | Sustainable Irrigation Platform (SIP) through version 5.2.16 contains a cross-site request forgery vulnerability that al |
| 🟠 high | CVE-2026-58477: Sustainable Irrigation Platform (SIP) through version 5.2.16 contains a mass assignment… | — | Sustainable Irrigation Platform (SIP) through version 5.2.16 contains a mass assignment vulnerability that allows unauth |
| 🟠 high | CVE-2026-62643: In Roundcube Webmail before 1.6.17 and 1.7.x before 1.7.2, insufficient Cascading Style… | — | In Roundcube Webmail before 1.6.17 and 1.7.x before 1.7.2, insufficient Cascading Style Sheets (CSS) sanitization in HTM |
| 🟠 high | CVE-2026-15643: AWS HealthLake MCP Server (awslabs.healthlake-mcp-server) is a Model Context Protocol s… | — | AWS HealthLake MCP Server (awslabs.healthlake-mcp-server) is a Model Context Protocol server that enables AI assistants  |
| 🟠 high | CVE-2026-48332: ColdFusion is affected by a Server-Side Request Forgery (SSRF) vulnerability that could… | — | ColdFusion is affected by a Server-Side Request Forgery (SSRF) vulnerability that could result in a Security feature byp |
| 🟠 high | CVE-2026-61520: Simple Machines Forum 2.1 prior to commit 4bf35cf and 3.0 prior to commit b4d23df conta… | — | Simple Machines Forum 2.1 prior to commit 4bf35cf and 3.0 prior to commit b4d23df contains a server-side request forgery |
| 🟠 high | CVE-2026-48290: CAI Content Credentials is affected by a Server-Side Request Forgery (SSRF) vulnerabili… | `T1190` | CAI Content Credentials is affected by a Server-Side Request Forgery (SSRF) vulnerability that could result in arbitrary |
| 🟠 high | CVE-2026-15583: A confused-deputy flaw in Grafana MCP Server allows an unauthenticated remote attacker … | — | A confused-deputy flaw in Grafana MCP Server allows an unauthenticated remote attacker to exfiltrate the server's enviro |
| 🟠 high | CVE-2026-61430: PraisonAI before 1.6.78 contains a server-side request forgery vulnerability in the web… | — | PraisonAI before 1.6.78 contains a server-side request forgery vulnerability in the web_crawl tool that validates hostna |
| 🟠 high | CVE-2026-61835: Directus is a real-time API and App dashboard for managing SQL database content. | — | Directus is a real-time API and App dashboard for managing SQL database content. Prior to 12.0.0, the SSRF protection on |
| 🟠 high | CVE-2026-45806: Penpot is an open-source design tool for design and code collaboration. | — | Penpot is an open-source design tool for design and code collaboration. Prior to 2.15.0, Penpot's remote image import pa |
| 🟠 high | CVE-2026-47158: Vaultwarden is a Bitwarden-compatible server written in Rust. | — | Vaultwarden is a Bitwarden-compatible server written in Rust. Prior to 1.36.0, Vaultwarden's SSO authorization flow did  |
| 🟠 high | CVE-2026-20296: In Splunk Enterprise versions below 10.4.1, 10.2.5, 10.0.8, and 9.4.13, and Splunk Clou… | — | In Splunk Enterprise versions below 10.4.1, 10.2.5, 10.0.8, and 9.4.13, and Splunk Cloud Platform versions below 10.5.26 |
| 🟠 high | CVE-2026-15005: The Loco Translate plugin for WordPress is vulnerable to Cross-Site Request Forgery in … | — | The Loco Translate plugin for WordPress is vulnerable to Cross-Site Request Forgery in all versions up to, and including |
| 🟠 high | CVE-2026-63306: stoatchat before 0.13.5 contains an unauthenticated server-side request forgery vulnera… | — | stoatchat before 0.13.5 contains an unauthenticated server-side request forgery vulnerability in the /proxy and /embed e |
| 🟠 high | CVE-2026-63086: text-generation-inference through 3.3.7 contains a server-side request forgery (SSRF) v… | — | text-generation-inference through 3.3.7 contains a server-side request forgery (SSRF) vulnerability in the OpenAI-compat |
| 🟠 high | CVE-2026-63088: stoatchat before 0.14.0 contains a server-side request forgery (SSRF) vulnerability tha… | — | stoatchat before 0.14.0 contains a server-side request forgery (SSRF) vulnerability that allows unauthenticated network- |
| 🟠 high | CVE-2026-62201: OpenClaw versions before 2026.6.6 contain a network policy bypass vulnerability in the … | — | OpenClaw versions before 2026.6.6 contain a network policy bypass vulnerability in the sandbox exec-server that allows l |
| 🟠 high | CVE-2026-62226: OpenClaw 2026.3.28 before 2026.5.19 contain an authorization bypass vulnerability in th… | — | OpenClaw 2026.3.28 before 2026.5.19 contain an authorization bypass vulnerability in the browser act route that fails to |
| 🟠 high | CVE-2026-62227: OpenClaw 2026.4.14 before 2026.5.26 contain a server-side request forgery vulnerability… | — | OpenClaw 2026.4.14 before 2026.5.26 contain a server-side request forgery vulnerability in browser snapshot routes that  |
| 🟠 high | CVE-2026-62234: Grav before 2.0.4 fails to restrict cURL protocols in webhook dispatch, allowing authen… | — | Grav before 2.0.4 fails to restrict cURL protocols in webhook dispatch, allowing authenticated users with api.webhooks.w |
| 🟠 high | CVE-2026-16016: A vulnerability was identified in poco-ai poco-claw up to 0.5.4. | — | A vulnerability was identified in poco-ai poco-claw up to 0.5.4. This issue affects the function run_task of the file ex |
| 🟠 high | CVE-2026-63094: SigNoz through 0.133.0 contains an open redirect vulnerability in the SSO authenticatio… | — | SigNoz through 0.133.0 contains an open redirect vulnerability in the SSO authentication flow that allows unauthenticate |
| 🟠 high | CVE-2026-50151: oras-go is a Go library for managing OCI artifacts. | — | oras-go is a Go library for managing OCI artifacts. Prior to 2.6.1, registry/remote/repository.go in blobStore.completeP |
| 🟠 high | CVE-2026-7754: IBM Langflow OSS 1.0.0 through 1.10.0 Langflow 1.9.0 could allow server-side request fo… | — | IBM Langflow OSS 1.0.0 through 1.10.0 Langflow 1.9.0 could allow server-side request forgery (SSRF) due to insecure defa |
| 🟠 high | CVE-2026-53727: css_parser: SSRF and Local File Disclosure in `CssParser::Parser#read_remote_file` | — | [cvefeed.io] css_parser: SSRF and Local File Disclosure in `CssParser::Parser#read_remote_file` |
| 🟠 high | CVE-2026-16084: A weakness has been identified in Sipeed PicoClaw up to 0.2.9. | — | A weakness has been identified in Sipeed PicoClaw up to 0.2.9. This impacts the function web_fetch of the file pkg/tools |
| 🟠 high | CVE-2026-16125: A vulnerability was found in zevorn rt-claw up to 0.2.0. | — | A vulnerability was found in zevorn rt-claw up to 0.2.0. The affected element is the function claw_net_get/claw_net_post |
| 🟠 high | CVE-2026-16127: A vulnerability was identified in zevorn rt-claw up to 0.2.0. | — | A vulnerability was identified in zevorn rt-claw up to 0.2.0. This affects the function claw_net_get/claw_net_post of th |
| 🟠 high | CVE-2026-16128: A security flaw has been discovered in zevorn rt-claw up to 0.2.0. | — | A security flaw has been discovered in zevorn rt-claw up to 0.2.0. This impacts the function receiver_thread of the file |
| 🟠 high | CVE-2026-16221: Impact: fast-uri versions from 2.3.1 through 4.1.0 (including the 3.x line up to 3.1.3 … | — | Impact: fast-uri versions from 2.3.1 through 4.1.0 (including the 3.x line up to 3.1.3 and the 2.x line up to 2.4.2) do  |
| 🟡 medium | CVE-2008-4128: Cisco IOS — Cisco IOS Cross-Site Request Forgery Vulnerability | — | Multiple cross-site request forgery (CSRF) vulnerabilities in the HTTP Administration component in Cisco IOS 12.4 on the |

## Cryptographic Weaknesses (2)

_Broken cryptography, weak hashes, or insecure key management._

| Severity | Finding | MITRE | Description |
|----------|---------|-------|-------------|
| 🔴 critical | CVE-2024-23564: HCL Aftermarket EPC is affected by Business Logic Vulnerability using which a non valid… | — | HCL Aftermarket EPC is affected by Business Logic Vulnerability using which a non valid user of the application can obta |
| 🟠 high | CVE-2026-46351: BigBlueButton is an open-source virtual classroom. | — | BigBlueButton is an open-source virtual classroom. Prior to 3.0.21, bbb-web generated conference sessionToken values wit |

## Information Disclosure (8)

_Exposure of sensitive information through error messages, logs, or responses._

| Severity | Finding | MITRE | Description |
|----------|---------|-------|-------------|
| 🟠 high | CVE-2026-15574: A flaw was found in the vllm-orchestrator-gateway component. | — | A flaw was found in the vllm-orchestrator-gateway component. The system's production binary logs all incoming authorizat |
| 🟠 high | CVE-2026-59836: A improper certificate validation vulnerability in Fortinet FortiClientEMS 7.4.3 throug… | — | A improper certificate validation vulnerability in Fortinet FortiClientEMS 7.4.3 through 7.4.5, FortiClientEMS 7.4.0 thr |
| 🟠 high | CVE-2026-47473: NVIDIA TensorRT-LLM contains a vulnerability where an attacker could cause a write-what… | — | NVIDIA TensorRT-LLM contains a vulnerability where an attacker could cause a write-what-where condition. A successful ex |
| 🟠 high | CVE-2026-40633: Dell PowerScale OneFS versions 9.5.0.0 through 9.10.1.7, versions 9.11.0.0 through 9.13… | — | Dell PowerScale OneFS versions 9.5.0.0 through 9.10.1.7, versions 9.11.0.0 through 9.13.0.2 contains an Insertion of Sen |
| 🟠 high | CVE-2026-56339: Capgo (Cap-go/capgo) before 12.128.2 contains an information disclosure vulnerability i… | `T1566` | Capgo (Cap-go/capgo) before 12.128.2 contains an information disclosure vulnerability in the Supabase PostgREST SECURITY |
| 🟠 high | CVE-2026-7189: Insertion of sensitive information into sent data vulnerability in Proliz Software Ltd. | — | Insertion of sensitive information into sent data vulnerability in Proliz Software Ltd. Co. Proliz's OBS allows Accessin |
| 🟠 high | CVE-2026-7488: Insertion of sensitive information into sent data vulnerability in IKAS Technology Inc. | — | Insertion of sensitive information into sent data vulnerability in IKAS Technology Inc. E-Commerce allows Retrieve Embed |
| 🟠 high | CVE-2026-49284: SimpleSAMLphp versions before 1.18.6 contain an information disclosure vulnerability. | — | SimpleSAMLphp versions before 1.18.6 contain an information disclosure vulnerability. Prior to 2.4.7 and 2.5.2, SimpleSA |

## Denial of Service (50)

_Vulnerabilities causing service disruption, resource exhaustion, or crashes._

| Severity | Finding | MITRE | Description |
|----------|---------|-------|-------------|
| 🟠 high | CVE-2024-7708: For requests that have a body, but reading the body may end up in reading 0 bytes, ther… | — | For requests that have a body, but reading the body may end up in reading 0 bytes, there is a buffer leak.
This is parti |
| 🟠 high | CVE-2026-54429: A vulnerability has been identified in SIMATIC S7-PLCSIM Advanced (All versions). | — | A vulnerability has been identified in SIMATIC S7-PLCSIM Advanced (All versions). Affected devices do not properly handl |
| 🟠 high | CVE-2026-12523: Summary



Cloudflare quiche's HTTP/3 layer was discovered to be vulnerable to resource… | — | Summary



Cloudflare quiche's HTTP/3 layer was discovered to be vulnerable to resource exhaustion (i.e., memory) by mea |
| 🟠 high | CVE-2026-12707: Summary



Cloudflare quiche was discovered to be vulnerable to memory resource exhaust… | — | Summary



Cloudflare quiche was discovered to be vulnerable to memory resource exhaustion due to unbounded queuing of p |
| 🟠 high | CVE-2026-59204: Pillow is a Python imaging library. | — | Pillow is a Python imaging library. From 8.2.0 through 12.2.0, src/libImaging/Jpeg2KDecode.c accumulates total_component |
| 🟠 high | CVE-2026-45646: Allocation of resources without limits or throttling in ASP.NET Core allows an unauthor… | — | Allocation of resources without limits or throttling in ASP.NET Core allows an unauthorized attacker to deny service ove |
| 🟠 high | CVE-2026-49787: Allocation of resources without limits or throttling in Windows HTTP.sys allows an unau… | — | Allocation of resources without limits or throttling in Windows HTTP.sys allows an unauthorized attacker to deny service |
| 🟠 high | CVE-2026-49788: Allocation of resources without limits or throttling in HTTP/2 allows an unauthorized a… | — | Allocation of resources without limits or throttling in HTTP/2 allows an unauthorized attacker to deny service over a ne |
| 🟠 high | CVE-2026-50506: Allocation of resources without limits or throttling in ASP.NET Core allows an unauthor… | — | Allocation of resources without limits or throttling in ASP.NET Core allows an unauthorized attacker to deny service ove |
| 🟠 high | CVE-2026-50653: Loop with unreachable exit condition ('infinite loop') in Azure Active Directory allows… | — | Loop with unreachable exit condition ('infinite loop') in Azure Active Directory allows an unauthorized attacker to deny |
| 🟠 high | CVE-2026-54119: Loop with unreachable exit condition ('infinite loop') in Windows Active Directory allo… | — | Loop with unreachable exit condition ('infinite loop') in Windows Active Directory allows an unauthorized attacker to de |
| 🟠 high | CVE-2026-56170: Allocation of resources without limits or throttling in ASP.NET Core allows an unauthor… | — | Allocation of resources without limits or throttling in ASP.NET Core allows an unauthorized attacker to deny service ove |
| 🟠 high | CVE-2026-59200: Pillow is a Python imaging library. | — | Pillow is a Python imaging library. From 5.1.0 until 12.3.0, PdfParser.PdfStream.decode() in PIL/PdfParser.py calls zlib |
| 🟠 high | CVE-2026-59884: pyasn1 is a generic ASN.1 library for Python. | — | pyasn1 is a generic ASN.1 library for Python. Prior to 0.6.4, the BER decoder shared by the CER and DER codecs parses lo |
| 🟠 high | CVE-2026-59885: pyasn1 is a generic ASN.1 library for Python. | — | pyasn1 is a generic ASN.1 library for Python. Prior to 0.6.4, the BER, CER, and DER decoders process OBJECT IDENTIFIER a |
| 🟠 high | CVE-2026-59886: pyasn1 is a generic ASN.1 library for Python. | — | pyasn1 is a generic ASN.1 library for Python. Prior to 0.6.4, the univ.Real type converted its mantissa, base, and expon |
| 🟠 high | CVE-2026-50647: Loop with unreachable exit condition ('infinite loop') in Active Directory Federation S… | — | Loop with unreachable exit condition ('infinite loop') in Active Directory Federation Services (AD FS) allows an unautho |
| 🟠 high | CVE-2026-58627: Uncontrolled resource consumption in Windows DHCP Server allows an unauthorized attacke… | — | Uncontrolled resource consumption in Windows DHCP Server allows an unauthorized attacker to deny service over a network. |
| 🟠 high | CVE-2026-47302: Allocation of resources without limits or throttling in .NET allows an unauthorized att… | — | Allocation of resources without limits or throttling in .NET allows an unauthorized attacker to deny service over a netw |
| 🟠 high | CVE-2026-15709: A flaw was found in libsoup's WebSocket implementation when using the permessage-deflat… | — | A flaw was found in libsoup's WebSocket implementation when using the permessage-deflate extension. The extension's deco |
| 🟠 high | CVE-2026-15711: A vulnerability was found in libsoup's WebSocket frame parsing implementation. | — | A vulnerability was found in libsoup's WebSocket frame parsing implementation. The library fails to validate length rule |
| 🟠 high | CVE-2026-47476: NVIDIA Triton Inference Server for Linux contains a vulnerability where an attacker can… | — | NVIDIA Triton Inference Server for Linux contains a vulnerability where an attacker can cause uncontrolled resource cons |
| 🟠 high | CVE-2026-47478: NVIDIA Triton Inference Server for Linux contains a vulnerability where an attacker can… | — | NVIDIA Triton Inference Server for Linux contains a vulnerability where an attacker can cause the use of an expired file |
| 🟠 high | CVE-2026-47479: NVIDIA Triton Inference Server for Linux contains a vulnerability where an attacker can… | — | NVIDIA Triton Inference Server for Linux contains a vulnerability where an attacker can cause uncontrolled resource cons |
| 🟠 high | CVE-2026-47480: NVIDIA Triton Inference Server for Linux contains a vulnerability where an attacker can… | — | NVIDIA Triton Inference Server for Linux contains a vulnerability where an attacker can cause an uncaught exception. A s |
| 🟠 high | CVE-2026-47482: NVIDIA Triton Inference Server for Linux contains a vulnerability where an attacker can… | — | NVIDIA Triton Inference Server for Linux contains a vulnerability where an attacker can cause missing release of memory  |
| 🟠 high | CVE-2026-47736: Puma is a Ruby/Rack web server built for parallelism. | — | Puma is a Ruby/Rack web server built for parallelism. From 5.5.0 until 7.2.1 and 8.0.2, when PROXY protocol v1 support i |
| 🟠 high | CVE-2026-50525: Allocation of resources without limits or throttling in .NET allows an unauthorized att… | — | Allocation of resources without limits or throttling in .NET allows an unauthorized attacker to deny service over a netw |
| 🟠 high | CVE-2026-50648: Allocation of resources without limits or throttling in .NET Framework allows an unauth… | — | Allocation of resources without limits or throttling in .NET Framework allows an unauthorized attacker to deny service o |
| 🟠 high | CVE-2026-50651: Allocation of resources without limits or throttling in .NET allows an unauthorized att… | — | Allocation of resources without limits or throttling in .NET allows an unauthorized attacker to deny service over a netw |
| 🟠 high | CVE-2026-49476: Soup Sieve is a CSS selector library designed to be used with Beautiful Soup 4. | — | Soup Sieve is a CSS selector library designed to be used with Beautiful Soup 4. Prior to 2.8.4, the CSS selector parser  |
| 🟠 high | CVE-2026-49477: Soup Sieve is a CSS selector library designed to be used with Beautiful Soup 4. | — | Soup Sieve is a CSS selector library designed to be used with Beautiful Soup 4. Prior to 2.8.4, the CSS selector parser  |
| 🟠 high | CVE-2026-59762: When an HTTP/2 profile is configured on a virtual server, undisclosed requests can caus… | — | When an HTTP/2 profile is configured on a virtual server, undisclosed requests can cause an increase in memory resource  |
| 🟠 high | CVE-2026-62389: ws before 8.21.1 contains a memory exhaustion vulnerability in lib/receiver.js where th… | — | ws before 8.21.1 contains a memory exhaustion vulnerability in lib/receiver.js where the fragment guard only triggers wh |
| 🟠 high | CVE-2026-23538: A vulnerability was identified in the Feast Feature Server's `/ws/chat` endpoint that a… | — | A vulnerability was identified in the Feast Feature Server's `/ws/chat` endpoint that allows remote attackers to establi |
| 🟠 high | CVE-2026-21729: Loki queries with large limits can cause large memory allocations which can impact the … | — | Loki queries with large limits can cause large memory allocations which can impact the availability of the service, depe |
| 🟠 high | CVE-2026-45367: HAPI FHIR is a complete implementation of the HL7 FHIR standard for healthcare interope… | — | HAPI FHIR is a complete implementation of the HL7 FHIR standard for healthcare interoperability in Java. Prior to 6.9.7, |
| 🟠 high | CVE-2026-44435: Quicly is an IETF QUIC protocol implementation intended primarily for use within the H2… | — | Quicly is an IETF QUIC protocol implementation intended primarily for use within the H2O HTTP server. Prior to commit 93 |
| 🟠 high | CVE-2026-44453: h2o is an HTTP server with support for HTTP/1.x, HTTP/2 and HTTP/3. | — | h2o is an HTTP server with support for HTTP/1.x, HTTP/2 and HTTP/3. Prior to commit 6b5370d, h2o is vulnerable to a Deni |
| 🟠 high | CVE-2026-54340: h2o is an HTTP server with support for HTTP/1.x, HTTP/2 and HTTP/3. | — | h2o is an HTTP server with support for HTTP/1.x, HTTP/2 and HTTP/3. Prior to commit 9265bdd, there is an HTTP/2 state am |
| 🟠 high | CVE-2026-50273: Datadog .NET Tracer is a client library for Datadog APM for .NET applications. | — | Datadog .NET Tracer is a client library for Datadog APM for .NET applications. Prior to 3.43.0, Datadog tracing librarie |
| 🟠 high | CVE-2026-52746: JSONata is a JSON query and transformation language. | — | JSONata is a JSON query and transformation language. Prior to 2.2.0, malicious non-matching inputs to the $toMillis func |
| 🟠 high | CVE-2026-9171: IBM PowerVM Novalink are vulnerable to a denial of service, caused by sending a special… | — | IBM PowerVM Novalink are vulnerable to a denial of service, caused by sending a specially-crafted request. A remote atta |
| 🟠 high | CVE-2026-44891: Netty is a network application framework for development of protocol servers and clients. | — | Netty is a network application framework for development of protocol servers and clients. Prior to 4.1.136.Final and 4.2 |
| 🟠 high | CVE-2026-50271: Datadog dd-trace-py is the Datadog Python APM client. | — | Datadog dd-trace-py is the Datadog Python APM client. Prior to 4.8.2, Datadog tracing libraries that implement W3C bagga |
| 🟠 high | CVE-2026-50272: dd-trace is the Datadog APM client for Node.js. | — | dd-trace is the Datadog APM client for Node.js. Prior to 5.100.0, W3C baggage propagation in packages/dd-trace/src/bagga |
| 🟠 high | CVE-2026-50274: Datadog dd-trace-go is a Go client library for Datadog application performance monitori… | — | Datadog dd-trace-go is a Go client library for Datadog application performance monitoring, profiling, and security monit |
| 🟠 high | CVE-2026-49485: HAPI FHIR is a complete implementation of the HL7 FHIR standard for healthcare interope… | — | HAPI FHIR is a complete implementation of the HL7 FHIR standard for healthcare interoperability in Java. Prior to 6.9.9  |
| 🟠 high | CVE-2026-56740: JLine is a Java library for handling console input. | — | JLine is a Java library for handling console input. Prior to 3.30.14, 4.0.16, and 4.2.1, the JLine3 Telnet server remote |
| 🟠 high | CVE-2026-56741: JLine is a Java library for handling console input. | — | JLine is a Java library for handling console input. Prior to 3.30.14, 4.0.16, and 4.2.1, the JLine3 Telnet server remote |

## Network Infrastructure & IoT Device Vulnerabilities (9)

_Vulnerabilities in routers, firewalls, and IoT devices on the network edge._

| Severity | Finding | MITRE | Description |
|----------|---------|-------|-------------|
| 🔴 critical | CVE-2026-49352: 9Router is an AI router & token saver. | — | 9Router is an AI router & token saver. From 0.2.21 until 0.4.44, 9Router used the hardcoded fallback JWT secret 9router- |
| 🔴 critical | CVE-2026-16117: Impact: @fastify/http-proxy versions up to and including 11.5.0 fail to rewrite the req… | — | Impact: @fastify/http-proxy versions up to and including 11.5.0 fail to rewrite the request prefix when the prefix segme |
| 🟠 high | CVE-2026-59835: A exposure of resource to wrong sphere vulnerability in Fortinet FortiSandbox 5.0.0 thr… | — | A exposure of resource to wrong sphere vulnerability in Fortinet FortiSandbox 5.0.0 through 5.0.2, FortiSandbox 4.4.3 th |
| 🟠 high | CVE-2026-59841: A improper restriction of communication channel to intended endpoints vulnerability in … | — | A improper restriction of communication channel to intended endpoints vulnerability in Fortinet FortiSIEMWindowsAgent 7. |
| 🟠 high | CVE-2026-20153: As part of Cisco's ongoing commitment to proactive security and product quality, the Ci… | — | As part of Cisco's ongoing commitment to proactive security and product quality, the Cisco RoomOS engineering team has c |
| 🟠 high | CVE-2026-20157: As part of Cisco's ongoing commitment to proactive security and product quality, the Ci… | — | As part of Cisco's ongoing commitment to proactive security and product quality, the Cisco RoomOS engineering team has c |
| 🟠 high | CVE-2026-20158: As part of Cisco's ongoing commitment to proactive security and product quality, the Ci… | — | As part of Cisco's ongoing commitment to proactive security and product quality, the Cisco RoomOS engineering team has c |
| 🟠 high | CVE-2026-20187: As part of Cisco's ongoing commitment to proactive security and product quality, the Ci… | — | As part of Cisco's ongoing commitment to proactive security and product quality, the Cisco RoomOS engineering team has c |
| 🟠 high | CVE-2024-34268: EQ-3 Eqiva CC-RT-BLE Bluetooth Smart Radiator Thermostat Firmware up to the latest vers… | — | EQ-3 Eqiva CC-RT-BLE Bluetooth Smart Radiator Thermostat Firmware up to the latest version 1.46 was discovered to allow  |

## Critical-Severity Vulnerabilities (29)

_Critical-severity issues that did not fit a more specific category — review urgently._

| Severity | Finding | MITRE | Description |
|----------|---------|-------|-------------|
| 🔴 critical | CVE-2026-11964: The User Registration & Membership  WordPress plugin before 5.2.2 does not verify the a… | — | The User Registration & Membership  WordPress plugin before 5.2.2 does not verify the authenticity of incoming payment-p |
| 🔴 critical | CVE-2026-4769: Certain devices in the WAGO System I/O Field series activate an internal diagnostic cap… | — | Certain devices in the WAGO System I/O Field series activate an internal diagnostic capability during the initial startu |
| 🔴 critical | CVE-2026-41041: URL path injection via unencoded user-supplied identifiers vulnerability in Apache Grav… | — | URL path injection via unencoded user-supplied identifiers vulnerability in Apache Gravitino.

This issue affects Apache |
| 🔴 critical | CVE-2026-57710: Unrestricted Upload of File with Dangerous Type vulnerability in quantumcloud WoowBot P… | — | Unrestricted Upload of File with Dangerous Type vulnerability in quantumcloud WoowBot Pro Max woowbot-pro-max allows Usi |
| 🔴 critical | CVE-2026-57719: Unrestricted Upload of File with Dangerous Type vulnerability in CodeRevolution Aimogen… | — | Unrestricted Upload of File with Dangerous Type vulnerability in CodeRevolution Aimogen Pro aimogen-pro allows Using Mal |
| 🔴 critical | CVE-2026-27690: Due to an HTTP Request Smuggling vulnerability in SAP Approuter, an unauthenticated att… | — | Due to an HTTP Request Smuggling vulnerability in SAP Approuter, an unauthenticated attacker could send a specially craf |
| 🔴 critical | CVE-2026-44761: SAP Commerce Cloud could retain a sample OAuth2 client with publicly documented sample … | — | SAP Commerce Cloud could retain a sample OAuth2 client with publicly documented sample credentials originating from samp |
| 🔴 critical | CVE-2026-59083: Improper Handling of URL Encoding (Hex Encoding) vulnerability in Apache Tomcat's rewri… | — | Improper Handling of URL Encoding (Hex Encoding) vulnerability in Apache Tomcat's rewrite valve allowed security constra |
| 🔴 critical | CVE-2026-59084: Insufficient Technical Documentation vulnerability in Apache Tomcat since the requireme… | — | Insufficient Technical Documentation vulnerability in Apache Tomcat since the requirements to securely configure the Enc |
| 🔴 critical | CVE-2026-15043: DBI::SQL::Nano versions from 1.42 before 1.651 for Perl have inverted <= and >= SQL ope… | — | DBI::SQL::Nano versions from 1.42 before 1.651 for Perl have inverted <= and >= SQL operators on text.

DBI::SQL::Nano,  |
| 🔴 critical | CVE-2026-56451: A vulnerability has been identified in Opcenter X (All versions < V2604). | — | A vulnerability has been identified in Opcenter X (All versions < V2604). Affected applications do not properly validate |
| 🔴 critical | CVE-2026-59891: sigstore-js provides JavaScript libraries for interacting with Sigstore services. | — | sigstore-js provides JavaScript libraries for interacting with Sigstore services. Prior to 0.7.1, getRegistryCredentials |
| 🔴 critical | CVE-2026-55040: Weak authentication in Microsoft Office SharePoint allows an unauthorized attacker to b… | — | Weak authentication in Microsoft Office SharePoint allows an unauthorized attacker to bypass a security feature over a n |
| 🔴 critical | CVE-2026-56188: Concurrent execution using shared resource with improper synchronization ('race conditi… | — | Concurrent execution using shared resource with improper synchronization ('race condition') in Windows Server Network dr |
| 🔴 critical | CVE-2026-56190: Use of uninitialized resource in Windows RDP allows an unauthorized attacker to execute… | — | Use of uninitialized resource in Windows RDP allows an unauthorized attacker to execute code over a network. |
| 🔴 critical | CVE-2026-56699: Wazuh Manager before 5.0.0-beta3 fails to escape the DataValue.index field when constru… | — | Wazuh Manager before 5.0.0-beta3 fails to escape the DataValue.index field when constructing OpenSearch bulk requests, a |
| 🔴 critical | CVE-2026-61736: LightRAG provides simple and fast retrieval-augmented generation. | — | LightRAG provides simple and fast retrieval-augmented generation. Prior to 1.5.4, the server defaults to CORS_ORIGINS=*  |
| 🔴 critical | CVE-2026-52842: Lightpanda is a headless browser designed for AI and automation. | — | Lightpanda is a headless browser designed for AI and automation. Prior to 0.3.1, Lightpanda searched for @ across the en |
| 🔴 critical | CVE-2026-52843: Lightpanda is a headless browser designed for AI and automation. | — | Lightpanda is a headless browser designed for AI and automation. Prior to 0.2.9, Lightpanda fetch() and XMLHttpRequest u |
| 🔴 critical | CVE-2026-49445: Cilium is a networking, observability, and security solution. | — | Cilium is a networking, observability, and security solution. Prior to 1.17.14, 1.18.8, and 1.19.2, when Cilium L7 funct |
| 🔴 critical | CVE-2023-49899: An unauthenticated remote attacker can execute any command on the affected device due t… | — | An unauthenticated remote attacker can execute any command on the affected device due to not correctly verifying the ori |
| 🔴 critical | CVE-2026-45336: HireFlow is a web-based interview management system for managing candidates, scheduling… | — | HireFlow is a web-based interview management system for managing candidates, scheduling interviews, and tracking hiring  |
| 🔴 critical | CVE-2026-63089: WireGuard Easy through 15.3.0, fixed in commit 66b292b, contains a cryptographically we… | — | WireGuard Easy through 15.3.0, fixed in commit 66b292b, contains a cryptographically weak one-time link token generation |
| 🔴 critical | CVE-2026-44180: Jupyter Enterprise Gateway launches remote Jupyter Notebook kernels across distributed … | — | Jupyter Enterprise Gateway launches remote Jupyter Notebook kernels across distributed clusters like Apache Spark, Kuber |
| 🔴 critical | CVE-2026-53412: Improper Input Validation in Zoom Desktop Client for Windows, Zoom VDI Client for Windo… | — | Improper Input Validation in Zoom Desktop Client for Windows, Zoom VDI Client for Windows, and Zoom Meeting SDK for Wind |
| 🔴 critical | CVE-2026-51080: libpvestorage-perl v9.1.1 and libpve-storage-perl v8.3.7 were discovered to contain an … | — | libpvestorage-perl v9.1.1 and libpve-storage-perl v8.3.7 were discovered to contain an XML External Entity (XXE) vulnera |
| 🔴 critical | CVE-2026-54496: ZEBRA is a Zcash node written entirely in Rust. | — | ZEBRA is a Zcash node written entirely in Rust. Prior to zebrad 5.0.0, halo2_gadgets 0.5.0, orchard 0.14.0, zcash_primit |
| 🔴 critical | CVE-2026-13446: IBM Langflow OSS 1.0.0 through 1.10.1 contains hard-coded credentials, such as a passwo… | — | IBM Langflow OSS 1.0.0 through 1.10.1 contains hard-coded credentials, such as a password or cryptographic key, which it |
| 🔴 critical | CVE-2026-54159: PrestaShop ps_facetedsearch is a module that adds layered navigation filters. | — | PrestaShop ps_facetedsearch is a module that adds layered navigation filters. From 3.0.0 until 4.0.4, the ps_facetedsear |

## High-Severity Vulnerabilities (142)

_High-severity vulnerabilities across miscellaneous products and services._

| Severity | Finding | MITRE | Description |
|----------|---------|-------|-------------|
| 🟠 high | CVE-2023-4346: KNX Association KNX Protocol Connection Authorization Option 1 — KNX Association KNX Protocol Connection Authorization Option 1 Overly Restrictive Account Lockout Mechanism Vulnerability | — | 
KNX devices that use KNX Connection Authorization and support Option 1 are, depending on the implementation, vulnerable |
| 🟠 high | CVE-2026-56155: Microsoft Active Directory Federation Services — Microsoft Active Directory Federation Services Insufficient Granularity of Access Control Vulnerability | — | Insufficient granularity of access control in Active Directory Federation Services (AD FS) allows an authorized attacker |
| 🟠 high | CVE-2026-15515: A security vulnerability has been detected in Tencent PC Manager 18.1.30242.301. | — | A security vulnerability has been detected in Tencent PC Manager 18.1.30242.301. This issue affects some unknown process |
| 🟠 high | CVE-2026-11963: The User Registration & Membership  WordPress plugin before 5.2.2 does not perform an a… | — | The User Registration & Membership  WordPress plugin before 5.2.2 does not perform an authorization check on a membershi |
| 🟠 high | CVE-2026-12275: The Tutor LMS  WordPress plugin before 3.9.13 does not, in its Droip and Kirki page-bui… | — | The Tutor LMS  WordPress plugin before 3.9.13 does not, in its Droip and Kirki page-builder integration, perform the enr |
| 🟠 high | CVE-2026-58065: The Apache Airflow Git provider runs its git-over-SSH operations with `StrictHostKeyChe… | — | The Apache Airflow Git provider runs its git-over-SSH operations with `StrictHostKeyChecking=no` by default, disabling S |
| 🟠 high | CVE-2026-15683: Lorex 2K Indoor Wi-Fi Security Camera Device Management Server Improper Certificate Val… | `T1190` | Lorex 2K Indoor Wi-Fi Security Camera Device Management Server Improper Certificate Validation Vulnerability. This vulne |
| 🟠 high | CVE-2026-15685: Ollama downloadBlob Improper Validation of Array Index Denial-of-Service Vulnerability. | — | Ollama downloadBlob Improper Validation of Array Index Denial-of-Service Vulnerability. This vulnerability allows remote |
| 🟠 high | CVE-2026-61458: PasswordPusher before 2.9.2 contains a brute-force vulnerability in the POST /p/:token/… | — | PasswordPusher before 2.9.2 contains a brute-force vulnerability in the POST /p/:token/access endpoint that lacks route- |
| 🟠 high | CVE-2026-62184: luci-app-banip contains a log parsing vulnerability where the awk-based parser extracts… | — | luci-app-banip contains a log parsing vulnerability where the awk-based parser extracts the first IPv4 address from log  |
| 🟠 high | CVE-2026-62189: OpenClaw versions before 2026.6.9 contain a symlink following vulnerability in the mirr… | — | OpenClaw versions before 2026.6.9 contain a symlink following vulnerability in the mirror sync feature that allows lower |
| 🟠 high | CVE-2026-62195: OpenClaw versions 2026.5.20 before 2026.6.6 contain an authorization bypass vulnerabili… | — | OpenClaw versions 2026.5.20 before 2026.6.6 contain an authorization bypass vulnerability in the MCP loopback feature th |
| 🟠 high | CVE-2026-62199: OpenClaw versions before 2026.6.6 contain a flaw in host exec environment filtering tha… | — | OpenClaw versions before 2026.6.6 contain a flaw in host exec environment filtering that can miss interpreter startup va |
| 🟠 high | CVE-2026-62200: OpenClaw versions before 2026.6.1 contain a flaw in host exec environment filtering tha… | — | OpenClaw versions before 2026.6.1 contain a flaw in host exec environment filtering that could allow Git ext transport t |
| 🟠 high | CVE-2026-58486: HedgeDoc: Denial-of-service via YAML alias expansion in note frontmatter | — | [cvefeed.io] HedgeDoc: Denial-of-service via YAML alias expansion in note frontmatter |
| 🟠 high | CVE-2026-15677: A weakness has been identified in code-projects Online Job Portal 1.0. | — | A weakness has been identified in code-projects Online Job Portal 1.0. This affects an unknown function of the file /Job |
| 🟠 high | CVE-2026-15076: In versions up to and including 4.5.29 (4.x branch) and 5.1.4 (5.x branch), the WebClie… | — | In versions up to and including 4.5.29 (4.x branch) and 5.1.4 (5.x branch), the WebClientSession component of Eclipse Ve |
| 🟠 high | CVE-2026-10671: In Zephyr's kernel pipe implementation, the userspace syscall verifier z_vrfy_k_pipe_in… | — | In Zephyr's kernel pipe implementation, the userspace syscall verifier z_vrfy_k_pipe_init() in kernel/pipe.c used K_SYSC |
| 🟠 high | CVE-2026-40378: Memory allocation with excessive size value in Windows Local Security Authority Subsyst… | — | Memory allocation with excessive size value in Windows Local Security Authority Subsystem Service (LSASS) allows an unau |
| 🟠 high | CVE-2026-42982: Improper validation of consistency within input in Windows Secure Kernel Mode allows an… | — | Improper validation of consistency within input in Windows Secure Kernel Mode allows an authorized attacker to elevate p |
| 🟠 high | CVE-2026-47632: Improper certificate validation in Azure Monitor Agent allows an unauthorized attacker … | — | Improper certificate validation in Azure Monitor Agent allows an unauthorized attacker to elevate privileges over an adj |
| 🟠 high | CVE-2026-48581: Insufficient granularity of access control in Microsoft Surface allows an authorized at… | — | Insufficient granularity of access control in Microsoft Surface allows an authorized attacker to elevate privileges loca |
| 🟠 high | CVE-2026-49165: Use of uninitialized resource in Microsoft Windows App Store allows an authorized attac… | — | Use of uninitialized resource in Microsoft Windows App Store allows an authorized attacker to disclose information local |
| 🟠 high | CVE-2026-49170: Insufficient granularity of access control in Windows StateRepository API allows an aut… | — | Insufficient granularity of access control in Windows StateRepository API allows an authorized attacker to elevate privi |
| 🟠 high | CVE-2026-49783: Improperly implemented security check for standard in Windows Secure Boot allows an aut… | — | Improperly implemented security check for standard in Windows Secure Boot allows an authorized attacker to bypass a secu |
| 🟠 high | CVE-2026-49791: Improper link resolution before file access ('link following') in Windows Routing and R… | — | Improper link resolution before file access ('link following') in Windows Routing and Remote Access Service (RRAS) allow |
| 🟠 high | CVE-2026-49792: Numeric truncation error in Windows Resilient File System (ReFS) allows an authorized a… | — | Numeric truncation error in Windows Resilient File System (ReFS) allows an authorized attacker to execute code locally. |
| 🟠 high | CVE-2026-49803: Concurrent execution using shared resource with improper synchronization ('race conditi… | — | Concurrent execution using shared resource with improper synchronization ('race condition') in Windows AppX Deployment S |
| 🟠 high | CVE-2026-50356: Concurrent execution using shared resource with improper synchronization ('race conditi… | — | Concurrent execution using shared resource with improper synchronization ('race condition') in Microsoft Windows App Sto |
| 🟠 high | CVE-2026-50364: Improper link resolution before file access ('link following') in Windows Server Backup… | — | Improper link resolution before file access ('link following') in Windows Server Backup allows an authorized attacker to |
| 🟠 high | CVE-2026-54107: Concurrent execution using shared resource with improper synchronization ('race conditi… | — | Concurrent execution using shared resource with improper synchronization ('race condition') in Windows Win32K allows an  |
| 🟠 high | CVE-2026-54999: Concurrent execution using shared resource with improper synchronization ('race conditi… | — | Concurrent execution using shared resource with improper synchronization ('race condition') in Windows TCP/IP allows an  |
| 🟠 high | CVE-2026-55001: Improper certificate validation in Windows Active Directory allows an authorized attack… | — | Improper certificate validation in Windows Active Directory allows an authorized attacker to elevate privileges locally. |
| 🟠 high | CVE-2026-55006: Insufficient granularity of access control in Microsoft Exchange Server allows an autho… | — | Insufficient granularity of access control in Microsoft Exchange Server allows an authorized attacker to elevate privile |
| 🟠 high | CVE-2026-55144: Missing cryptographic step in Windows CryptoAPI allows an authorized attacker to perfor… | — | Missing cryptographic step in Windows CryptoAPI allows an authorized attacker to perform tampering locally. |
| 🟠 high | CVE-2026-58595: Improper restriction of rendered ui layers or frames in Microsoft Bing App for IOS allo… | — | Improper restriction of rendered ui layers or frames in Microsoft Bing App for IOS allows an unauthorized attacker to pe |
| 🟠 high | CVE-2026-58631: Improper authorization in Windows Admin Center allows an authorized attacker to execute… | — | Improper authorization in Windows Admin Center allows an authorized attacker to execute code locally. |
| 🟠 high | CVE-2026-58636: Improper link resolution before file access ('link following') in Window PC Manager all… | — | Improper link resolution before file access ('link following') in Window PC Manager allows an authorized attacker to ele |
| 🟠 high | CVE-2026-50328: Uncaught exception in Windows Server Update Service allows an unauthorized attacker to … | — | Uncaught exception in Windows Server Update Service allows an unauthorized attacker to perform tampering over a network. |
| 🟠 high | CVE-2026-50337: Incorrect type conversion or cast in Windows Notification allows an authorized attacker… | — | Incorrect type conversion or cast in Windows Notification allows an authorized attacker to elevate privileges locally. |
| 🟠 high | CVE-2026-50344: Improper authorization in Windows OLE allows an authorized attacker to elevate privileg… | — | Improper authorization in Windows OLE allows an authorized attacker to elevate privileges locally. |
| 🟠 high | CVE-2026-50346: Improper authorization in RPC Runtime allows an authorized attacker to elevate privileg… | — | Improper authorization in RPC Runtime allows an authorized attacker to elevate privileges locally. |
| 🟠 high | CVE-2026-50357: Numeric truncation error in Windows Resilient File System (ReFS) allows an authorized a… | — | Numeric truncation error in Windows Resilient File System (ReFS) allows an authorized attacker to execute code locally. |
| 🟠 high | CVE-2026-50367: Incorrect access of indexable resource ('range error') in Windows Sensor Data Service a… | — | Incorrect access of indexable resource ('range error') in Windows Sensor Data Service allows an authorized attacker to e |
| 🟠 high | CVE-2026-50378: Concurrent execution using shared resource with improper synchronization ('race conditi… | — | Concurrent execution using shared resource with improper synchronization ('race condition') in Windows Key Guard allows  |
| 🟠 high | CVE-2026-50382: Untrusted pointer dereference in Windows DirectX allows an authorized attacker to execu… | — | Untrusted pointer dereference in Windows DirectX allows an authorized attacker to execute code locally. |
| 🟠 high | CVE-2026-50402: Incorrect conversion between numeric types in Windows NTFS allows an authorized attacke… | — | Incorrect conversion between numeric types in Windows NTFS allows an authorized attacker to elevate privileges locally. |
| 🟠 high | CVE-2026-50405: Insufficient granularity of access control in Windows Filtering Platform (WFP) allows a… | — | Insufficient granularity of access control in Windows Filtering Platform (WFP) allows an authorized attacker to elevate  |
| 🟠 high | CVE-2026-50424: Untrusted pointer dereference in Windows Domain Controller allows an unauthorized attac… | — | Untrusted pointer dereference in Windows Domain Controller allows an unauthorized attacker to deny service over a networ |
| 🟠 high | CVE-2026-50438: Improper link resolution before file access ('link following') in Microsoft PC Manager … | — | Improper link resolution before file access ('link following') in Microsoft PC Manager allows an authorized attacker to  |
| | _+92 more…_ | | |

## Ransomware activity (ransomware.live + peers) (311)

_Victim claims observed across ransomware.live, Ransomlook, cti.fyi, ransomfeed, ransomwatch, andreafortuna, and MyThreatIntel CTI feeds within this window._

| Severity | Finding | MITRE | Description |
|----------|---------|-------|-------------|
| 🟠 high | Al - Saidi Factory — claimed by dragonforce | — | Al Saidi Al Saidi Trading and Industry is a prominent group of companies providing tailored chemical and logistics solut |
| 🟠 high | ARM — claimed by d1r | — | Ransomware group called D1R claims attack for ARM. We identify this attack with following hash code: bc9d4c7c59b68498b47 |
| 🟠 high | Bosch — claimed by d1r | — | Ransomware group called D1R claims attack for Bosch. We identify this attack with following hash code: fb1fa410e268c4ecf |
| 🟠 high | Boston Orthotics, Inc. — claimed by anubis | — | Patient data breach at yet another negligent clinic. |
| 🟠 high | Busscar de Colombia — claimed by qilin | — | Manufacturing |
| 🟠 high | Casper Orthopedics — claimed by anubis | — | Orthopedic clinic patients' data and medical records exposed. |
| 🟠 high | Casta Diva Group — claimed by payoutsking | — | Casta Diva Group listed by payoutsking. |
| 🟠 high | Cemoi — claimed by qilin | — | Food & Beverage |
| 🟠 high | Centro Científico e Cultural de Macau — claimed by qilin | — | Hospitality |
| 🟠 high | Centro-Cientfico-e-Cultural-de-Macau — claimed by qilin | — | Ransomware group called qilin claims attack for Centro-Cientfico-e-Cultural-de-Macau. We identify this attack with follo |
| 🟠 high | Community Advocates — claimed by anubis | — | Law firm clients' personal data exposed. |
| 🟠 high | Cooperate consulting CZ s.r.o. — claimed by titan | — | Cooperate consulting CZ s.r.o. listed by titan. |
| 🟠 high | Counts & Dobyns — claimed by qilin | — | Civil Engineering Construction |
| 🟠 high | DataOstrov s.r.o. — claimed by titan | — | DataOstrov s.r.o. listed by titan. |
| 🟠 high | degeremcia.com — claimed by dragonforce | — | DEGEREMCIA is a food operator that is dedicated to the production, distribution and sale of prepared food. It operates m |
| 🟠 high | Faro Products Inc. — claimed by pear | — | Leading manufacturer in the promotional products and souvenir |
| 🟠 high | Hillebrand Home Health — claimed by qilin | — | 0 |
| 🟠 high | Ironmark — claimed by akira | — | Founded and headquartered in Annapolis Junction, Maryland, Ironmark is a provider of marketing,creative, printing and co |
| 🟠 high | Jakub A.S. — claimed by qilin | — | Business Services |
| 🟠 high | momenta.cn — claimed by dragonforce | — | Ransomware group called dragonforce claims attack for momenta.cn. We identify this attack with following hash code: 0820 |
| 🟠 high | NAYAX \| FINTECH BREACH — claimed by syndicate | — | NAYAX is an Israeli fintech company that specializes in payment and financial solutions for the vending and unattended r |
| 🟠 high | New Tiles S.L. — claimed by gunra | — | New Tiles S.L. listed by gunra. |
| 🟠 high | Nicholson y Cano Abogados — claimed by dragonforce | — | Nicholson y Cano is a leading full-service law firm in Argentina, established in 1976, with a team of 29 partners and ov |
| 🟠 high | Northeast Rescue Systems — claimed by dragonforce | — | Northeast Rescue Systems is a dedicated provider of specialized rescue, safety, and protective equipment serving emergen |
| 🟠 high | Ozmit s.r.o. — claimed by titan | — | Ozmit s.r.o. listed by titan. |
| 🟠 high | shuttlemeadowcc.com — claimed by safepay | — | Founded in 1917, the club is one of the oldest and most prestigious private golf clubs in New England. It … |
| 🟠 high | STEP Oiltools — claimed by dragonforce | — | STEP Oiltools is a leading global provider of solids control and drilling waste management services, primarily serving t |
| 🟠 high | Surtifamiliar — claimed by anubis | — | Passports of supermarket chain employees. |
| 🟠 high | Synopsys — claimed by d1r | — | Ransomware group called D1R claims attack for Synopsys. We identify this attack with following hash code: 1d67208ce6deea |
| 🟠 high | Tangram Interiors — claimed by thegentlemen | — | www.tangraminteriors.com Revenue $245.1 Million Founded in 1963, At Tangram Interiors, we've spent decades transforming  |
| 🟠 high | Techpol-System — claimed by spacebears | — | Techpol-System, based in Bieruń, Poland, is an engineering enterprise specializing in industrial power solutions, includ |
| 🟠 high | TitanTV-Inc. — claimed by qilin | — | Ransomware group called qilin claims attack for TitanTV-Inc.. We identify this attack with following hash code: a2b43091 |
| 🟠 high | Transworld Signs — claimed by akira | — | Transworld Signs produces and sources a complete range of promotional and POP graphics. The company offers digital and s |
| 🟠 high | Turbosoft — claimed by spacebears | — | We specialize in the design and construction of IT and management systems. With us, you manage your business efficiently |
| 🟠 high | URH Hoteliers — claimed by qilin | — | Hospitality |
| 🟠 high | Webosphere — claimed by nightspire | — | Webosphere listed by nightspire. |
| 🟠 high | www.twtci.com Trans World Trading — claimed by dragonforce | — | Trans World Trading Company, Inc. is a leading business conglomerate in the Philippines, recognized for its trust and re |
| 🟠 high | Abbott-owned-Exact-Sciences-Corporation — claimed by shinyhunters | — | Ransomware group called shinyhunters claims attack for Abbott-owned-Exact-Sciences-Corporation. We identify this attack  |
| 🟠 high | aphenapharma.com — claimed by chaos | — | Aphena Pharma Solutions

We have gained full access to your corporate infrastructure. During this operation, we stole 14 |
| 🟠 high | Arkın Group — claimed by blacknevas (TR) | — | CYBERSECURITY: ARKIN HOTEL GROUP SUFFERS MASSIVE DATA BREACH — OVER 1 TB OF GUEST AND CASINO DATA STOLENCybersecurity ex |
| 🟠 high | Arkn-Group — claimed by blacknevas | — | Ransomware group called blacknevas claims attack for Arkn-Group. We identify this attack with following hash code: 9f724 |
| 🟠 high | asimar.com — claimed by dragonforce | — | Asimar \| Asian Marine Service PCL is a leading shipyard in Thailand with over 35 years of experience in the shipbuilding |
| 🟠 high | Atcom — claimed by dragonforce | — | ATCOM Technology Co., LTD. specializes in manufacturing VoIP products, including various types of IP phones and IP PBX s |
| 🟠 high | Axiom Global NEW — claimed by coinbasecartel | — | Business Services - $19.2 Million |
| 🟠 high | Axiom GlobalNEW — claimed by coinbasecartel (US) | — | AI generated N/A… |
| 🟠 high | Be Travel — claimed by arcusmedia | — | Be Travel listed by arcusmedia. |
| 🟠 high | BRAC — claimed by thegentlemen | — | brac.net zoominfo.com/c/brac-centre/8079683 is the largest non-governmental development organization in the world, found |
| 🟠 high | Casta Diva Group — claimed by payoutsking (IT) | — | [AI generated] Casta Diva Group is an Italian communications and entertainment company headquartered in Milan, Italy. It |
| 🟠 high | Cedar Crest College — claimed by nightspire | — | Cedar Crest College listed by nightspire. |
| 🟠 high | COREBI(NowVertical) — claimed by arcusmedia | — | COREBI(NowVertical) listed by arcusmedia. |
| | _+261 more…_ | | |

## IOC Dump

`4280` indicators (10182 observed total, truncated for storage):

```
url  http://59.97.248.23:53076/i  # malware_download | Mozi  @ 2026-07-19 23:51:14
url  http://175.165.212.187:59176/bin.sh  # malware_download | 32-bit,elf,mips,Mozi  @ 2026-07-19 23:49:28
url  https://8g7kgrp5.frisbeeburgerllc.com/?ublib=7abd318e-a9b7-46f2-b43f-1debb37a97db  # malware_download | ClearFake,mac-0x76c7,macOS  @ 2026-07-19 23:23:14
url  http://59.97.248.23:53076/bin.sh  # malware_download | Mozi  @ 2026-07-19 23:21:17
url  https://imrmd.drdavidzweiback.com/c5c47653-232a-4c2f-9191-c2ec03cc3bcf  # malware_download | ClearFake,win-0x4679,windows  @ 2026-07-19 23:18:18
url  http://39.81.19.153:33185/i  # malware_download | 32-bit,elf,mips,Mozi  @ 2026-07-19 23:11:28
url  http://106.57.6.155:56421/i  # malware_download | 32-bit,arm,elf,mirai,Mozi  @ 2026-07-19 22:54:43
url  http://113.237.61.7:49506/bin.sh  # malware_download | 32-bit,elf,mips,Mozi  @ 2026-07-19 22:51:22
url  http://219.157.233.184:51727/i  # malware_download | Mozi  @ 2026-07-19 22:46:15
url  https://moszp.jetbet.download/4d255a6d-38c8-4990-bd2c-d4eff5640c24  # malware_download | ClearFake,win-0x4679,windows  @ 2026-07-19 22:36:15
url  http://222.134.168.54:47179/i  # malware_download | 32-bit,elf,mips,Mozi  @ 2026-07-19 22:30:30
url  https://edtbi.jetbet.download/b442ea02-b255-4ea4-ba1c-bd62b55f54b4  # malware_download | ClearFake,win-0x4679,windows  @ 2026-07-19 22:28:13
url  https://zwhun.hazaratbet.bet/3e81d644-b985-4494-b806-e2741b0d5681  # malware_download | ClearFake,win-0x4679,windows  @ 2026-07-19 22:23:13
url  https://wxfwe0h3.chrisbrowndetroit.com/?ublib=16ce54de-7a0c-44c6-9dc2-f42f276c5ecf  # malware_download | ClearFake,mac-0x68dc,macOS  @ 2026-07-19 22:11:14
url  http://123.11.35.54:60685/i  # malware_download | 32-bit,arm,elf,mirai,Mozi  @ 2026-07-19 22:10:21
url  http://178.16.55.240/corp/a  # malware_download | dropped-by-Phorpiex,phorpiex  @ 2026-07-19 22:10:16
url  http://5.166.107.132:44061/i  # malware_download | 32-bit,elf,mips,Mozi  @ 2026-07-19 22:09:32
url  https://wz43qign.houseofhakka.com/?ublib=bd12a875-8182-4a0e-894a-957ceb8fd078  # malware_download | ClearFake,mac-0xfb64,macOS  @ 2026-07-19 22:05:14
url  http://222.134.168.54:47179/bin.sh  # malware_download | 32-bit,elf,mips,Mozi  @ 2026-07-19 21:54:34
url  https://qpduk.hazaratbet.bet/e4d856d9-c0c8-476b-8cbd-2e4a75bd22cb  # malware_download | ClearFake,win-0x4679,windows  @ 2026-07-19 21:49:15
url  http://125.24.171.206:33891/bin.sh  # malware_download | 32-bit,elf,mips,Mozi  @ 2026-07-19 21:34:37
url  http://123.13.107.224:41466/i  # malware_download | 32-bit,elf,mips,Mozi  @ 2026-07-19 21:32:21
url  http://112.248.126.74:56533/i  # malware_download | 32-bit,elf,mips,Mozi  @ 2026-07-19 21:19:22
url  http://123.13.107.224:41466/bin.sh  # malware_download | 32-bit,elf,mips,Mozi  @ 2026-07-19 21:06:22
url  http://122.241.36.130:42051/i  # malware_download | mirai  @ 2026-07-19 20:56:19
url  http://110.39.253.204:49606/bin.sh  # malware_download | 32-bit,elf,mips,Mozi  @ 2026-07-19 20:54:42
url  http://129.121.110.105/Clq  # malware_download | elf,mirai,ua-wget  @ 2026-07-19 20:52:26
url  http://112.248.126.74:56533/bin.sh  # malware_download | 32-bit,elf,mips,Mozi  @ 2026-07-19 20:51:54
url  http://129.121.110.105/F8dj  # malware_download | elf,mirai,ua-wget  @ 2026-07-19 20:51:34
url  http://129.121.110.105/MfzI  # malware_download | elf,ua-wget  @ 2026-07-19 20:51:34
url  http://129.121.110.105/oVH  # malware_download | elf,ua-wget  @ 2026-07-19 20:51:32
url  http://129.121.110.105/u2yu  # malware_download | elf,ua-wget  @ 2026-07-19 20:51:32
url  http://129.121.110.105/mFp  # malware_download | elf,ua-wget  @ 2026-07-19 20:51:32
url  http://129.121.110.105/JN2M  # malware_download | elf,ua-wget  @ 2026-07-19 20:51:32
url  http://115.55.189.88:53293/bin.sh  # malware_download | 32-bit,elf,mips,Mozi  @ 2026-07-19 20:51:26
url  http://129.121.110.105/DS2  # malware_download | elf,mirai,ua-wget  @ 2026-07-19 20:51:26
url  http://129.121.110.105/HR2d  # malware_download | elf,ua-wget  @ 2026-07-19 20:51:26
url  http://129.121.110.105/OTw  # malware_download | elf,ua-wget  @ 2026-07-19 20:51:25
url  https://yvryz.gepco-energy.com/2280d7fe-c82a-4a12-9166-10ee49d6eb6b  # malware_download | ClearFake,win-0x4679,windows  @ 2026-07-19 20:49:15
url  http://45.194.88.27:44418/i  # malware_download | 32-bit,elf,mips,Mozi  @ 2026-07-19 20:48:36
url  http://61.53.87.113:47958/i  # malware_download | None  @ 2026-07-19 20:46:18
url  https://yferx.gepco-energy.com/60aeb789-814e-4ec9-b068-c60fb2f29805  # malware_download | ClearFake,win-0x4679,windows  @ 2026-07-19 20:44:16
url  https://xxklt.gamehazarat.bet/54b765ef-e7c4-4460-aa6b-046dee5d0504  # malware_download | ClearFake,win-0x4679,windows  @ 2026-07-19 20:42:16
url  http://42.225.84.215:48835/i  # malware_download | 32-bit,elf,mips,Mozi  @ 2026-07-19 20:41:29
url  http://90.174.94.96:45230/bin.sh  # malware_download | 32-bit,elf,mips,Mozi  @ 2026-07-19 20:40:28
url  http://90.174.94.96:45230/i  # malware_downl
... (+379561 chars truncated)
```

---
Sources: CISA KEV, NVD, cvefeed.io, ransomware.live, URLhaus, MalwareBazaar, ThreatFox, TweetFeed
MITRE ATT&CK: T1059, T1059.007, T1068, T1078, T1190, T1203, T1566

---
*[PANOPTICON](https://pranithjain.qzz.io/threatintel/briefings) · [Full brief](https://pranithjain.qzz.io/threatintel/briefings/weekly-2026-W29)*