# Weekly Threat Briefing — 2026-07-27 – 2026-08-02

> **weekly** · 2026-07-27 – 2026-08-02 · Generated 2026-08-03 10:00 UTC

## Executive Summary

This week (2026-07-27 – 2026-08-02), CISA added 3 new KEV entries and 3551 additional high/critical CVEs were published (NVD, cvefeed.io, MyThreatIntel), including 81 critical-severity affecting Arista, Fortinet, Cisco. Active threat indicators across URLhaus, MalwareBazaar, ThreatFox, and TweetFeed — 12,794 unique after cross-source dedup; all 12516 indicators (3696 malware-distribution URLs, 3660 malicious domains, 762 suspicious IPs, 4398 malware sample hashes) are included in the IOC dump. Reference only — verify all indicators in your own environment and apply vendor patches per CISA KEV due-date guidance.

## Stats

| Metric | Count |
|--------|-------|
| Findings | 3918 |
| CVEs | 3554 |
| KEVs | 3 |
| IOCs | 12794 |
| Critical | 81 |
| High | 3441 |
| Ransomware victims | 364 |

## Critical Remote Code Execution Vulnerabilities (45)

_Vulnerabilities allowing arbitrary code execution on affected systems — patch immediately._

| Severity | Finding | MITRE | Description |
|----------|---------|-------|-------------|
| 🔴 critical | CVE-2026-13423: The Streamit WordPress theme through 4.5.0 does not perform any authorization or nonce … | `T1190`, `T1068` | The Streamit WordPress theme through 4.5.0 does not perform any authorization or nonce verification on one of its unauth |
| 🔴 critical | CVE-2026-14900: The Cost Calculator Builder PRO plugin for WordPress is vulnerable to Remote Code Execu… | `T1190` | The Cost Calculator Builder PRO plugin for WordPress is vulnerable to Remote Code Execution in all versions up to, and i |
| 🔴 critical | CVE-2026-41939: Care Everywhere Gateway 14.3.10 contains a hard-coded credentials vulnerability in the … | `T1190` | Care Everywhere Gateway 14.3.10 contains a hard-coded credentials vulnerability in the bundled WildFly 8.2.0.Final manag |
| 🔴 critical | CVE-2026-14483: The Realtyna Organic IDX plugin + WPL Real Estate plugin for WordPress is vulnerable to… | `T1190` | The Realtyna Organic IDX plugin + WPL Real Estate plugin for WordPress is vulnerable to Arbitrary File Upload in all ver |
| 🔴 critical | CVE-2026-17561: Improper Control of Generation of Code ('Code Injection') vulnerability in Innotim Soft… | — | Improper Control of Generation of Code ('Code Injection') vulnerability in Innotim Software, Telecommunications and Cons |
| 🔴 critical | CVE-2026-68770: sentence-transformers contains a security control bypass vulnerability that allows atta… | `T1190` | sentence-transformers contains a security control bypass vulnerability that allows attackers to achieve arbitrary code e |
| 🔴 critical | CVE-2026-67340: ArcadeDB before 26.7.2 (arcadedb-engine) allows trigger scripts to look up host classes… | `T1059` | ArcadeDB before 26.7.2 (arcadedb-engine) allows trigger scripts to look up host classes in java.lang.* (via Java.type) b |
| 🟠 high | CVE-2026-65617: Potential remote code execution on an Artifactory package service container. | `T1190` | [cvefeed.io] Potential remote code execution on an Artifactory package service container. |
| 🟠 high | CVE-2026-56748: Authenticated RCE via Symlink Following in Cribl Stream Pack Git Import | `T1190` | [cvefeed.io] Authenticated RCE via Symlink Following in Cribl Stream Pack Git Import |
| 🟠 high | CVE-2026-56747: Code Injection in JSON Pointer Processing Component in Cribl Stream | — | [cvefeed.io] Code Injection in JSON Pointer Processing Component in Cribl Stream |
| 🟠 high | CVE-2026-55578: Pheditor: Incomplete command sanitization in terminal feature allows RCE via pipe opera… | `T1190` | [cvefeed.io] Pheditor: Incomplete command sanitization in terminal feature allows RCE via pipe operator, backtick substi |
| 🟠 high | CVE-2026-63077: JetBrains TeamCity Agent Polling Protocol Remote Code Execution | `T1190` | [cvefeed.io] JetBrains TeamCity Agent Polling Protocol Remote Code Execution |
| 🟠 high | CVE-2026-66748: Camaleon CMS versions 2.1.1 through 2.9.1 contains an authenticated remote code executi… | `T1190` | Camaleon CMS versions 2.1.1 through 2.9.1 contains an authenticated remote code execution vulnerability that allows user |
| 🟠 high | CVE-2026-48388: Adobe Photoshop Installer was affected by an Uncontrolled Search Path Element vulnerabi… | `T1190` | Adobe Photoshop Installer was affected by an Uncontrolled Search Path Element vulnerability that could have resulted in  |
| 🟠 high | CVE-2026-48391: Bridge is affected by an Untrusted Search Path vulnerability that could result in arbit… | `T1190` | Bridge is affected by an Untrusted Search Path vulnerability that could result in arbitrary code execution in the contex |
| 🟠 high | CVE-2026-48395: Bridge is affected by an Untrusted Search Path vulnerability that could result in arbit… | `T1190` | Bridge is affected by an Untrusted Search Path vulnerability that could result in arbitrary code execution in the contex |
| 🟠 high | CVE-2026-66745: Artica Proxy before 4.50.000000 Service Pack 7 (fixed in hotfix 20260724-02) contains a… | — | Artica Proxy before 4.50.000000 Service Pack 7 (fixed in hotfix 20260724-02) contains a session fixation vulnerability t |
| 🟠 high | CVE-2026-54621: datamodel-code-generator generates Python data models from schema definitions. | — | datamodel-code-generator generates Python data models from schema definitions. Prior to 0.60.1, GraphQL Union descriptio |
| 🟠 high | CVE-2026-54653: datamodel-code-generator generates Pydantic v2 models, dataclasses, TypedDict, and msgs… | — | datamodel-code-generator generates Pydantic v2 models, dataclasses, TypedDict, and msgspec.Struct from OpenAPI, JSON Sch |
| 🟠 high | CVE-2026-54654: datamodel-code-generator generates Python data models from schema definitions. | — | datamodel-code-generator generates Python data models from schema definitions. From 0.14.1 until 0.60.2, the --extra-tem |
| 🟠 high | CVE-2026-54655: datamodel-code-generator generates Python data models from schema definitions. | — | datamodel-code-generator generates Python data models from schema definitions. From 0.51.0 until 0.60.2, x-python-type v |
| 🟠 high | CVE-2026-54656: datamodel-code-generator generates Pydantic v2 models, dataclasses, TypedDict, and msgs… | — | datamodel-code-generator generates Pydantic v2 models, dataclasses, TypedDict, and msgspec.Struct from OpenAPI, JSON Sch |
| 🟠 high | CVE-2026-55415: datamodel-code-generator generates Pydantic v2 models, dataclasses, TypedDict, and msgs… | — | datamodel-code-generator generates Pydantic v2 models, dataclasses, TypedDict, and msgspec.Struct from OpenAPI, JSON Sch |
| 🟠 high | CVE-2026-12476: The Easy Digital Downloads plugin for WordPress is vulnerable to Arbitrary File Upload … | `T1190` | The Easy Digital Downloads plugin for WordPress is vulnerable to Arbitrary File Upload in versions up to and including 3 |
| 🟠 high | CVE-2026-14270: The Extra Checkout Options (addon for Extra Product Options & Add-Ons for WooCommerce) … | `T1190` | The Extra Checkout Options (addon for Extra Product Options & Add-Ons for WooCommerce) plugin for WordPress is vulnerabl |
| 🟠 high | CVE-2026-54661: swagger-typescript-api generates API clients for Fetch or Axios from an OpenAPI Specifi… | — | swagger-typescript-api generates API clients for Fetch or Axios from an OpenAPI Specification. Prior to 13.12.2, templat |
| 🟠 high | CVE-2026-54662: swagger-typescript-api generates API clients for Fetch or Axios from OpenAPI specificat… | — | swagger-typescript-api generates API clients for Fetch or Axios from OpenAPI specifications. Prior to 13.12.2, src/code- |
| 🟠 high | CVE-2026-54664: swagger-typescript-api generates API clients for Fetch or Axios from an OpenAPI Specifi… | — | swagger-typescript-api generates API clients for Fetch or Axios from an OpenAPI Specification. Prior to 13.12.2, src/sch |
| 🟠 high | CVE-2026-54666: swagger-typescript-api generates API clients for Fetch or Axios from an OpenAPI Specifi… | — | swagger-typescript-api generates API clients for Fetch or Axios from an OpenAPI Specification. Prior to 13.12.2, src/sch |
| 🟠 high | CVE-2026-12357: Heimdall Data Database Proxy generateFileContent CRLF Injection Remote Code Execution V… | `T1190` | Heimdall Data Database Proxy generateFileContent CRLF Injection Remote Code Execution Vulnerability. This vulnerability  |
| 🟠 high | CVE-2026-12935: Unauthenticated Remote Code Execution in TP-Link TL-WR940N RTSP Conntrack Feature | `T1190` | [cvefeed.io] Unauthenticated Remote Code Execution in TP-Link TL-WR940N RTSP Conntrack Feature |
| 🟠 high | CVE-2026-68502: LazyOwn: Unauthenticated Socket.IO `input` Event Reaches LazyOwn Command Dispatcher — U… | `T1190` | [cvefeed.io] LazyOwn: Unauthenticated Socket.IO `input` Event Reaches LazyOwn Command Dispatcher — Unauthenticated RCE |
| 🟠 high | CVE-2026-66803: Azure Cosmos DB Remote Code Execution Vulnerability | `T1190` | [cvefeed.io] Azure Cosmos DB Remote Code Execution Vulnerability |
| 🟠 high | CVE-2026-67208: Juggle 1.6.0 Unauthenticated RCE via Exposed H2 Console | `T1190` | [cvefeed.io] Juggle 1.6.0 Unauthenticated RCE via Exposed H2 Console |
| 🟠 high | CVE-2026-67206: Wolf CMS 0.8.3.1 Authenticated RCE via FileManagerController File Upload | `T1190` | [cvefeed.io] Wolf CMS 0.8.3.1 Authenticated RCE via FileManagerController File Upload |
| 🟠 high | CVE-2026-12946: Remote Code Execution in CUGA Component CodeAgent | `T1190` | [cvefeed.io] Remote Code Execution in CUGA Component CodeAgent |
| 🟠 high | CVE-2026-11536: IBM WebSphere Application Server is affected by a remote code execution vulnerability | `T1190` | [cvefeed.io] IBM WebSphere Application Server is affected by a remote code execution vulnerability |
| 🟠 high | CVE-2026-66066: Action Pack: Possible arbitrary file read and remote code execution in Active Storage v… | `T1190` | [cvefeed.io] Action Pack: Possible arbitrary file read and remote code execution in Active Storage variant processing |
| 🟠 high | anku1-rce (pypi) | — | Malicious package listed in the OpenSSF malicious-packages directory. Review version ranges and installation provenance. |
| 🟠 high | anku2-rce (pypi) | — | Malicious package listed in the OpenSSF malicious-packages directory. Review version ranges and installation provenance. |
| 🟠 high | CVE-2026-13392: The ElementsKit Elementor Addons  WordPress plugin before 3.10.01 does not prevent a cu… | — | The ElementsKit Elementor Addons  WordPress plugin before 3.10.01 does not prevent a custom-widget definition saved by a |
| 🟠 high | CVE-2026-16236: The Realtyna Organic IDX plugin for WordPress is vulnerable to Arbitrary File Upload in… | `T1190`, `T1078` | The Realtyna Organic IDX plugin for WordPress is vulnerable to Arbitrary File Upload in versions up to, and including, 5 |
| 🟠 high | CVE-2026-53510: Savon is a Ruby SOAP client. | — | Savon is a Ruby SOAP client. From 0.9.8 until 2.17.2, Savon::Model .all_operations interpolates attacker-controlled WSDL |
| 🟠 high | CVE-2026-16144: The Kali Forms — Contact Form & Drag-and-Drop Builder plugin for WordPress is vulnerabl… | `T1190` | The Kali Forms — Contact Form & Drag-and-Drop Builder plugin for WordPress is vulnerable to Remote Code Execution in all |
| 🟠 high | CVE-2026-67326: GitPython before 3.1.50 fails to validate newline characters in the section parameter o… | `T1190` | GitPython before 3.1.50 fails to validate newline characters in the section parameter of config_writer(), allowing attac |

## Command Injection (17)

_OS / shell command injection enabling attacker-controlled execution._

| Severity | Finding | MITRE | Description |
|----------|---------|-------|-------------|
| 🔴 critical | CVE-2026-16812: Arista VeloCloud Orchestrator — Arista VeloCloud Orchestrator On-Prem OS Command Injection Vulnerability | `T1059` | VeloCloud Orchestrator (VCO) on-prem has a security issue where this issue may allow a remote attacker to access privile |
| 🔴 critical | CVE-2026-14958: IBM Aspera Faspex 5 5.0.0 through 5.0.15.4 could allow a remote authenticated attacker … | `T1190` | IBM Aspera Faspex 5 5.0.0 through 5.0.15.4 could allow a remote authenticated attacker to execute arbitrary code due to  |
| 🔴 critical | CVE-2026-14959: IBM Aspera Faspex 5 5.0.0 through 5.0.15.4 could allow a remote authenticated attacker … | `T1190`, `T1059` | IBM Aspera Faspex 5 5.0.0 through 5.0.15.4 could allow a remote authenticated attacker to execute arbitrary code due to  |
| 🔴 critical | CVE-2026-54680: Logging operator automates the deployment and configuration of Kubernetes logging pipel… | — | Logging operator automates the deployment and configuration of Kubernetes logging pipelines. Prior to 6.6.0, the Fluentd |
| 🔴 critical | CVE-2026-43830: Full details and mitigation steps are currently restricted and will be published at a l… | — | Full details and mitigation steps are currently restricted and will be published at a later date. |
| 🔴 critical | CVE-2026-17566: pgAdmin 4's Import/Export Data tool builds a psql \copy (...) command line by interpola… | `T1190` | pgAdmin 4's Import/Export Data tool builds a psql \copy (...) command line by interpolating a user-supplied SQL query in |
| 🔴 critical | CVE-2026-67308: Wazuh workflows before 44bf114 contain a shell injection vulnerability in GitHub Action… | — | Wazuh workflows before 44bf114 contain a shell injection vulnerability in GitHub Actions that allows attackers to execut |
| 🔴 critical | CVE-2026-67324: GitPython 3.1.50 fails to recognize joined short-option forms such as -u<value> (the sh… | — | GitPython 3.1.50 fails to recognize joined short-option forms such as -u<value> (the short form of --upload-pack=<value> |
| 🟠 high | CVE-2026-48030: Pheditor: OS Command Injection in terminal handler via unsanitized 'dir' parameter (CWE… | `T1059` | [cvefeed.io] Pheditor: OS Command Injection in terminal handler via unsanitized 'dir' parameter (CWE-78) |
| 🟠 high | CVE-2026-59764: ELECOM wireless LAN routers and access points devices contain an OS Command Injection v… | `T1059` | ELECOM wireless LAN routers and access points devices contain an OS Command Injection vulnerability in WebUI. If this vu |
| 🟠 high | CVE-2026-61376: ELECOM wireless LAN routers and access points devices contain an OS Command Injection v… | `T1059` | ELECOM wireless LAN routers and access points devices contain an OS Command Injection vulnerability in Restore Settings. |
| 🟠 high | CVE-2026-18157: A flaw was found in yggdrasil-worker-package-manager. | `T1190` | A flaw was found in yggdrasil-worker-package-manager. A local attacker with existing access to the system could exploit  |
| 🟠 high | CVE-2026-16843: Some Hikvision Wireless Access Points are vulnerable to authenticated command execution… | — | Some Hikvision Wireless Access Points are vulnerable to authenticated command execution due to insufficient input valida |
| 🟠 high | CVE-2026-17347: The MASTER_PASSWORD_HOOK setting, introduced in pgAdmin 4 7.2, lets an administrator co… | — | The MASTER_PASSWORD_HOOK setting, introduced in pgAdmin 4 7.2, lets an administrator configure an external command that  |
| 🟠 high | CVE-2026-9044: Command Injection Vulnerability in OpenVPN of TP-Link Archer AXE75 | `T1059` | [cvefeed.io] Command Injection Vulnerability in OpenVPN of TP-Link Archer AXE75 |
| 🟠 high | CVE-2026-67323: GitPython before 3.1.51 fails to guard against dangerous Git options passed as keyword … | `T1059` | GitPython before 3.1.51 fails to guard against dangerous Git options passed as keyword arguments in Repo.archive() and g |
| 🟠 high | CVE-2026-67325: GitPython before 3.1.51 contains an incomplete command injection blocklist that fails t… | `T1059` | GitPython before 3.1.51 contains an incomplete command injection blocklist that fails to account for git's long-option p |

## Authentication & Authorization Bypass (57)

_Missing or broken authentication / authorisation enabling unauthorised actions._

| Severity | Finding | MITRE | Description |
|----------|---------|-------|-------------|
| 🔴 critical | CVE-2026-15014: The SMS Alert – SMS & OTP for WooCommerce, Order Notifications & Abandoned Cart Recover… | `T1078` | The SMS Alert – SMS & OTP for WooCommerce, Order Notifications & Abandoned Cart Recovery plugin for WordPress is vulnera |
| 🔴 critical | CVE-2026-14446: IBM WebSphere Application Server 9.0, and 8.5 is vulnerable to broken access control/pr… | `T1068` | IBM WebSphere Application Server 9.0, and 8.5 is vulnerable to broken access control/privilege escalation in the adminis |
| 🔴 critical | CVE-2026-62325: goshs is a feature-rich single-binary file server for red teamers and developers. | — | goshs is a feature-rich single-binary file server for red teamers and developers. From 2.1.3 until 2.1.4, the sftpserver |
| 🔴 critical | CVE-2026-18072: The Advanced Responsive Video Embedder for Rumble, Odysee, YouTube, Vimeo, Kick … plugi… | `T1078` | The Advanced Responsive Video Embedder for Rumble, Odysee, YouTube, Vimeo, Kick … plugin for WordPress is vulnerable to  |
| 🔴 critical | CVE-2026-41920: Improper Access Control vulnerability in Apache Traffic Server. | — | Improper Access Control vulnerability in Apache Traffic Server.

This issue affects Apache Traffic Server: from 9.0.0 th |
| 🔴 critical | CVE-2025-10656: The Spreadsheet Price Changer for WooCommerce and WP E-commerce – Light plugin for Word… | — | The Spreadsheet Price Changer for WooCommerce and WP E-commerce – Light plugin for WordPress is vulnerable to Missing Au |
| 🔴 critical | CVE-2026-14488: The Meta Box AIO plugin for WordPress is vulnerable to Missing Authorization via the te… | — | The Meta Box AIO plugin for WordPress is vulnerable to Missing Authorization via the template_redirect dispatcher in the |
| 🔴 critical | CVE-2026-60112: AMMOS Instrument Toolkit (AIT) GUI before 2.5.1 contains a missing authentication vulne… | `T1078` | AMMOS Instrument Toolkit (AIT) GUI before 2.5.1 contains a missing authentication vulnerability that allows any unauthen |
| 🔴 critical | CVE-2026-60113: AMMOS Instrument Toolkit (AIT) Deep Space Network (DSN) Interface before 2.2.2 contains… | `T1078` | AMMOS Instrument Toolkit (AIT) Deep Space Network (DSN) Interface before 2.2.2 contains a missing authentication vulnera |
| 🔴 critical | CVE-2026-14529: IBM WebSphere Application Server 9.0, and 8.5 and IBM WebSphere Application Server - Li… | — | IBM WebSphere Application Server 9.0, and 8.5 and IBM WebSphere Application Server - Liberty 17.0.0.3 through 26.0.0.8 t |
| 🔴 critical | CVE-2026-67426: Flyto2 Core is an execution kernel for automation and AI-agent workflows. | — | Flyto2 Core is an execution kernel for automation and AI-agent workflows. Prior to 2.26.7, the standalone flyto-verifica |
| 🔴 critical | CVE-2026-14919: The ShopMonitor.io  WordPress plugin before 1.2.0 does not properly restrict its email-… | — | The ShopMonitor.io  WordPress plugin before 1.2.0 does not properly restrict its email-rerouting test mode, gating it be |
| 🔴 critical | CVE-2026-17349: /misc/workspace/adhoc_connect_server, part of the Workspaces feature introduced in pgAd… | — | /misc/workspace/adhoc_connect_server, part of the Workspaces feature introduced in pgAdmin 4 9.0, when passed the id of  |
| 🔴 critical | CVE-2026-3141: The FormGent plugin for WordPress is vulnerable to unauthorized arbitrary file deletion… | — | The FormGent plugin for WordPress is vulnerable to unauthorized arbitrary file deletion due to a missing capability chec |
| 🔴 critical | CVE-2026-15964: The Single Sign On For TNG plugin for WordPress is vulnerable to Authentication Bypass … | `T1078` | The Single Sign On For TNG plugin for WordPress is vulnerable to Authentication Bypass via unauthenticated password rese |
| 🔴 critical | CVE-2026-67341: ArcadeDB versions before 26.7.2 fail to enforce scripting authorization checks on the S… | — | ArcadeDB versions before 26.7.2 fail to enforce scripting authorization checks on the SQL DEFINE FUNCTION statement with |
| 🔴 critical | CVE-2026-67342: ArcadeDB versions before 26.7.2 contain an authorization bypass vulnerability in HTTP h… | — | ArcadeDB versions before 26.7.2 contain an authorization bypass vulnerability in HTTP handlers for time series, batch, P |
| 🔴 critical | CVE-2026-8457: The WooCommerce - Social Login plugin for WordPress is vulnerable to Authentication Byp… | `T1078` | The WooCommerce - Social Login plugin for WordPress is vulnerable to Authentication Bypass in all versions up to and inc |
| 🟠 high | CVE-2026-66473: Unauthenticated Broken Access Control in Xendit Payment <= 7.1.0 versions. | — | Unauthenticated Broken Access Control in Xendit Payment <= 7.1.0 versions. |
| 🟠 high | CVE-2026-66014: Potential authentication bypass leading to privilege escalation in Artifactory | `T1068`, `T1078` | [cvefeed.io] Potential authentication bypass leading to privilege escalation in Artifactory |
| 🟠 high | CVE-2026-14924: The Tablesome Table  WordPress plugin before 1.1.31 does not perform any authentication… | — | The Tablesome Table  WordPress plugin before 1.1.31 does not perform any authentication, capability, or nonce checks in  |
| 🟠 high | CVE-2026-14167: A low privileged remote attacker can perform privileged configuration changes reserved … | — | A low privileged remote attacker can perform privileged configuration changes reserved for the administrator level inclu |
| 🟠 high | CVE-2026-14168: A low privileged remote attacker can gain administrator privileges due to missing autho… | — | A low privileged remote attacker can gain administrator privileges due to missing authorization at the insert path of th |
| 🟠 high | CVE-2026-15025: The Uncanny Automator – Easy Automation, Integration, Webhooks & Workflow Builder plugi… | — | The Uncanny Automator – Easy Automation, Integration, Webhooks & Workflow Builder plugin for WordPress is vulnerable to  |
| 🟠 high | CVE-2026-62427: [This CNA information record relates to multiple CVEs; the
text explains which aspects/… | — | [This CNA information record relates to multiple CVEs; the
text explains which aspects/vulnerabilities correspond to whi |
| 🟠 high | CVE-2026-7187: Missing authentication for critical function vulnerability in Universal Software Inc. | `T1078` | Missing authentication for critical function vulnerability in Universal Software Inc. UKBS allows Accessing Functionalit |
| 🟠 high | CVE-2026-54635: pytonapi is a Python SDK for TONAPI that provides REST API, streaming, and webhook acce… | — | pytonapi is a Python SDK for TONAPI that provides REST API, streaming, and webhook access to the TON blockchain. From 2. |
| 🟠 high | CVE-2026-16771: In firmware versions 2.7.7 and earlier, the Arris BGW210‑700 gateway fails to enforce a… | — | In firmware versions 2.7.7 and earlier, the Arris BGW210‑700 gateway fails to enforce any server‑side authentication on  |
| 🟠 high | CVE-2026-48390: Bridge is affected by an Incorrect Authorization vulnerability that could result in pri… | `T1068` | Bridge is affected by an Incorrect Authorization vulnerability that could result in privilege escalation. An attacker co |
| 🟠 high | CVE-2026-48396: Bridge is affected by an Incorrect Authorization vulnerability that could result in arb… | `T1190` | Bridge is affected by an Incorrect Authorization vulnerability that could result in arbitrary code execution in the cont |
| 🟠 high | CVE-2026-49258: Nebula Mesh is a self-hosted control plane for the Slack Nebula mesh VPN. | — | Nebula Mesh is a self-hosted control plane for the Slack Nebula mesh VPN. In versions 0.3.5 and below, the web UI (/ui/* |
| 🟠 high | CVE-2026-16184: IBM WebSphere Application Server 9.0, and 8.5 could allow a remote attacker to bypass a… | — | IBM WebSphere Application Server 9.0, and 8.5 could allow a remote attacker to bypass authentication by sending a crafte |
| 🟠 high | CVE-2026-57510: SuperPlane before 0.27.0 contains a broken object-level authorization vulnerability in … | — | SuperPlane before 0.27.0 contains a broken object-level authorization vulnerability in the CanvasService gRPC handlers t |
| 🟠 high | CVE-2026-14976: IBM WebSphere Application Server - Liberty 17.0.0.3 through 26.0.0.8 is affected by rem… | `T1190` | IBM WebSphere Application Server - Liberty 17.0.0.3 through 26.0.0.8 is affected by remote code execution with the colle |
| 🟠 high | CVE-2026-54719: goshs is a feature-rich single-binary file server for red teamers and developers. | — | goshs is a feature-rich single-binary file server for red teamers and developers. Prior to 2.1.1, the httpserver/updown. |
| 🟠 high | CVE-2026-13690: The UsersWP  WordPress plugin before 1.2.67 does not validate the selected authenticati… | — | The UsersWP  WordPress plugin before 1.2.67 does not validate the selected authentication provider in its two-factor log |
| 🟠 high | CVE-2026-50622: Description:
Missing Authorization in Apache Atlas. | — | Description:
Missing Authorization in Apache Atlas.
A missing authorization vulnerability in Apache Atlas's admin endpoi |
| 🟠 high | CVE-2026-58159: Apache Traffic Server can bypass IP access controls on UDS listeners and through ACL ma… | — | Apache Traffic Server can bypass IP access controls on UDS listeners and through ACL matching errors.

This issue affect |
| 🟠 high | CVE-2026-12703: TeamViewer Full Client and Host for macOS before version 15.80 contain a business logic… | — | TeamViewer Full Client and Host for macOS before version 15.80 contain a business logic error that can allow an authenti |
| 🟠 high | CVE-2025-60931: An Insecure Direct Object Reference (IDOR) in the Employee Compensation View function o… | — | An Insecure Direct Object Reference (IDOR) in the Employee Compensation View function of Infor Global HR v11.24.10.01.33 |
| 🟠 high | CVE-2026-18255: A flaw was found in Quay. | — | A flaw was found in Quay. A user configured in GLOBAL_READONLY_SUPER_USERS is able to view robot account tokens for repo |
| 🟠 high | CVE-2026-5057: ATEN Unizon RpcProvider Missing Authentication Denial-of-Service Vulnerability. | `T1078` | ATEN Unizon RpcProvider Missing Authentication Denial-of-Service Vulnerability. This vulnerability allows remote attacke |
| 🟠 high | CVE-2026-12562: Toptech Systems RCU II+ and Multiload II+ Missing Authentication for Critical Function | `T1078` | [cvefeed.io] Toptech Systems RCU II+ and Multiload II+ Missing Authentication for Critical Function |
| 🟠 high | CVE-2026-67594: Spikster Missing Authentication via API Route Group | `T1078` | [cvefeed.io] Spikster Missing Authentication via API Route Group |
| 🟠 high | CVE-2026-55502: Cloudreve is a self-hosted file management and sharing system. | — | Cloudreve is a self-hosted file management and sharing system. Prior to 4.17.0, POST /api/v4/admin/policy/oauth/signin r |
| 🟠 high | CVE-2026-12695: The miniOrange 2FA  WordPress plugin before 6.2.6 does not validate the submitted one-t… | — | The miniOrange 2FA  WordPress plugin before 6.2.6 does not validate the submitted one-time password against the targeted |
| 🟠 high | CVE-2026-14830: The FlxWoo WordPress plugin before 3.1.1 does not verify with the payment processor tha… | — | The FlxWoo WordPress plugin before 3.1.1 does not verify with the payment processor that a checkout session was actually |
| 🟠 high | CVE-2026-14930: The JS Help Desk  WordPress plugin before 3.1.4 does not perform any authorization, non… | — | The JS Help Desk  WordPress plugin before 3.1.4 does not perform any authorization, nonce, or ownership check on a front |
| 🟠 high | CVE-2026-65310: ANDRITZ HIPASE-250 (formerly 250 SCALA), in the default configuration
of affected versi… | — | ANDRITZ HIPASE-250 (formerly 250 SCALA), in the default configuration
of affected versions, exposes its data and configu |
| 🟠 high | CVE-2026-18394: Incorrect authorization in the http_request tool in Strands Agents Tools before 0.8.2 m… | — | Incorrect authorization in the http_request tool in Strands Agents Tools before 0.8.2 might allow remote attackers to ob |
| | _+7 more…_ | | |

## Privilege Escalation (17)

_Vulnerabilities enabling escalation to higher privileges._

| Severity | Finding | MITRE | Description |
|----------|---------|-------|-------------|
| 🔴 critical | CVE-2026-14545: The TrueBooker  WordPress plugin before 1.2.4 does not validate account ownership when … | — | The TrueBooker  WordPress plugin before 1.2.4 does not validate account ownership when resetting a user's password throu |
| 🟠 high | CVE-2026-65616: Potential privilege escalation to JFrog administrator privileges | `T1068` | [cvefeed.io] Potential privilege escalation to JFrog administrator privileges |
| 🟠 high | CVE-2026-42017: Privilege escalation via JFrog Worker event token exposure | `T1068` | [cvefeed.io] Privilege escalation via JFrog Worker event token exposure |
| 🟠 high | CVE-2026-42016: Incorrect authorization validation of user token in JFrog Artifactory allows Privilege … | `T1068` | [cvefeed.io] Incorrect authorization validation of user token in JFrog Artifactory allows Privilege Escalation |
| 🟠 high | CVE-2026-14328: The Eazy Plugin Manager – Powerful Plugin Management Solution for WordPress plugin for … | `T1068` | The Eazy Plugin Manager – Powerful Plugin Management Solution for WordPress plugin for WordPress is vulnerable to Privil |
| 🟠 high | CVE-2026-63727: Anchore Enterprise versions from 5.11.0 to 5.27.1 and 6.0.0 contain an improper privile… | `T1068` | Anchore Enterprise versions from 5.11.0 to 5.27.1 and 6.0.0 contain an improper privilege escalation vulnerability in th |
| 🟠 high | CVE-2026-15992: The WP Password Policy plugin for WordPress is vulnerable to Privilege Escalation in al… | `T1068` | The WP Password Policy plugin for WordPress is vulnerable to Privilege Escalation in all versions up to and including 3. |
| 🟠 high | CVE-2026-18107: A flaw was found in CRIU's handling of restartable sequences (rseq) during checkpoint/r… | `T1068` | A flaw was found in CRIU's handling of restartable sequences (rseq) during checkpoint/restore. A malicious process insid |
| 🟠 high | CVE-2026-50737: pglogical Privilege Escalation via Default Expression Execution | `T1068` | [cvefeed.io] pglogical Privilege Escalation via Default Expression Execution |
| 🟠 high | CVE-2026-12144: The Wholesale for WooCommerce plugin for WordPress is vulnerable to Privilege Escalatio… | `T1068` | The Wholesale for WooCommerce plugin for WordPress is vulnerable to Privilege Escalation in all versions up to, and incl |
| 🟠 high | CVE-2026-13268: G DATA Total Security Backup Service Link Following Local Privilege Escalation Vulnerab… | `T1190`, `T1068` | G DATA Total Security Backup Service Link Following Local Privilege Escalation Vulnerability. This vulnerability allows  |
| 🟠 high | CVE-2026-6102: MSI Center NTIOLib_X64 Origin Validation Error Local Privilege Escalation Vulnerability. | `T1190`, `T1068` | MSI Center NTIOLib_X64 Origin Validation Error Local Privilege Escalation Vulnerability. This vulnerability allows local |
| 🟠 high | CVE-2026-12251: The Ultimate Member  WordPress plugin before 2.12.1 does not filter administrator-level… | — | The Ultimate Member  WordPress plugin before 2.12.1 does not filter administrator-level capabilities from the roles it m |
| 🟠 high | CVE-2026-14333: The Demi  WordPress plugin before 0.0.7 stores its full-site backup archives in a publi… | — | The Demi  WordPress plugin before 0.0.7 stores its full-site backup archives in a publicly accessible location under a p |
| 🟠 high | CVE-2026-15414: The Subscriptions for WooCommerce plugin for WordPress is vulnerable to Privilege Escal… | `T1068` | The Subscriptions for WooCommerce plugin for WordPress is vulnerable to Privilege Escalation in versions up to, and incl |
| 🟠 high | CVE-2026-16635: The Pronamic Pay plugin for WordPress is vulnerable to Privilege Escalation in all vers… | `T1068` | The Pronamic Pay plugin for WordPress is vulnerable to Privilege Escalation in all versions up to, and including, 10.1.0 |
| 🟠 high | CVE-2026-67356: ArcadeDB before 26.7.3 binds the real LocalDatabase object into JavaScript trigger cont… | — | ArcadeDB before 26.7.3 binds the real LocalDatabase object into JavaScript trigger contexts with HostAccess.ALL, allowin |

## SQL & NoSQL Injection (28)

_Database injection vulnerabilities exposing or modifying stored data._

| Severity | Finding | MITRE | Description |
|----------|---------|-------|-------------|
| 🔴 critical | CVE-2026-16462: In PROCON-WEB SCADA the endpoint 'GetGridData' is not properly sanitized. | — | In PROCON-WEB SCADA the endpoint 'GetGridData' is not properly sanitized. This allows a remote unauthenticated attacker  |
| 🔴 critical | CVE-2026-54658: Hypequery is a TypeScript semantic layer for ClickHouse. | — | Hypequery is a TypeScript semantic layer for ClickHouse. Prior to 2.0.2, escapeValue() in packages/clickhouse/src/core/u |
| 🔴 critical | CVE-2026-63229: A pre-authentication blind SQL injection
vulnerability in Koollab LMS allowed an unauth… | `T1190` | A pre-authentication blind SQL injection
vulnerability in Koollab LMS allowed an unauthenticated attacker to use a time- |
| 🔴 critical | CVE-2026-63230: A pre-authentication error-based SQL injection
vulnerability in Koollab LMS allowed an … | `T1190` | A pre-authentication error-based SQL injection
vulnerability in Koollab LMS allowed an unauthenticated attacker to read  |
| 🔴 critical | CVE-2026-63232: A SQL injection and unsafe deserialisation
vulnerability in Koollab LMS allowed an auth… | `T1190` | A SQL injection and unsafe deserialisation
vulnerability in Koollab LMS allowed an authenticated attacker to inject thro |
| 🔴 critical | CVE-2026-63233: A SQL injection and unsafe deserialisation
vulnerability in Koollab LMS allowed an auth… | `T1190` | A SQL injection and unsafe deserialisation
vulnerability in Koollab LMS allowed an authenticated attacker to inject thro |
| 🔴 critical | CVE-2026-63234: A SQL injection and unsafe deserialisation
vulnerability in Koollab LMS allowed an auth… | `T1190` | A SQL injection and unsafe deserialisation
vulnerability in Koollab LMS allowed an authenticated attacker to inject thro |
| 🔴 critical | CVE-2026-51992: SQL Injection vulnerability in ClickHouse Server Versions <= 26.3.9.8 allows a remote a… | `T1190` | SQL Injection vulnerability in ClickHouse Server Versions <= 26.3.9.8 allows a remote attacker to execute arbitrary code |
| 🔴 critical | CVE-2026-63221: CodeIgniter is a PHP full-stack web framework. | — | CodeIgniter is a PHP full-stack web framework. From 4.3.0 through 4.7.3, Query Builder deleteBatch() substitutes bound v |
| 🔴 critical | CVE-2026-17351: The fix for CVE-2026-12045 in pgAdmin 4 9.16 required the LLM-supplied query passed to … | `T1190` | The fix for CVE-2026-12045 in pgAdmin 4 9.16 required the LLM-supplied query passed to the AI Assistant's execute_sql_qu |
| 🔴 critical | CVE-2026-65321: PyAthena prior to 3.35.4 contains a sql injection vulnerability that allows unauthentic… | `T1190` | PyAthena prior to 3.35.4 contains a sql injection vulnerability that allows unauthenticated attackers to inject arbitrar |
| 🟠 high | CVE-2026-12741: The WP Fast Total Search – The Power of Indexed Search plugin for WordPress is vulnerab… | `T1190` | The WP Fast Total Search – The Power of Indexed Search plugin for WordPress is vulnerable to generic SQL Injection via t |
| 🟠 high | CVE-2026-12800: The Premium Packages – Sell Digital Products Securely plugin for WordPress is vulnerabl… | `T1190` | The Premium Packages – Sell Digital Products Securely plugin for WordPress is vulnerable to SQL Injection via the 'code' |
| 🟠 high | CVE-2026-13161: The TrueBooker – Appointment Booking and Scheduler System plugin for WordPress is vulne… | `T1190` | The TrueBooker – Appointment Booking and Scheduler System plugin for WordPress is vulnerable to generic SQL Injection vi |
| 🟠 high | CVE-2026-14516: The Online Scheduling and Appointment Booking System – Bookly plugin for WordPress is v… | `T1190` | The Online Scheduling and Appointment Booking System – Bookly plugin for WordPress is vulnerable to time-based SQL Injec |
| 🟠 high | CVE-2026-10207: The PickPlugins Question Answer plugin for WordPress is vulnerable to SQL Injection in … | `T1190` | The PickPlugins Question Answer plugin for WordPress is vulnerable to SQL Injection in versions up to and including 1.2. |
| 🟠 high | CVE-2026-14785: The Web Directory Free plugin for WordPress is vulnerable to generic SQL Injection via … | `T1190` | The Web Directory Free plugin for WordPress is vulnerable to generic SQL Injection via the 'levels' parameter in all ver |
| 🟠 high | CVE-2026-7769: IBM Sterling B2B Integrator 6.2.0.0 through 6.2.0.5_2, 6.2.1.0 through 6.2.1.1_2, and 6… | `T1190` | IBM Sterling B2B Integrator 6.2.0.0 through 6.2.0.5_2, 6.2.1.0 through 6.2.1.1_2, and 6.2.2.0 through 6.2.2.0_1 and IBM  |
| 🟠 high | CVE-2026-6881: Authenticated SQL Injection Enables Unauthorized Access to Sensitive Information in Ell… | `T1190` | [cvefeed.io] Authenticated SQL Injection Enables Unauthorized Access to Sensitive Information in Ellucian Advance Web an |
| 🟠 high | CVE-2026-63231: A post-authentication SQL injection
vulnerability in Koollab LMS allowed an authenticat… | `T1190` | A post-authentication SQL injection
vulnerability in Koollab LMS allowed an authenticated attacker to use an error-based |
| 🟠 high | CVE-2026-5490: DriveLock SQL Injection Privilege Escalation Vulnerability. | `T1068`, `T1190` | DriveLock SQL Injection Privilege Escalation Vulnerability. This vulnerability allows remote attackers to escalate privi |
| 🟠 high | CVE-2026-8339: SQL Injection in Coverity Connect SOAP API | `T1190` | [cvefeed.io] SQL Injection in Coverity Connect SOAP API |
| 🟠 high | CVE-2026-12721: The Kirki  WordPress plugin before 6.0.13 does not properly sanitise and escape a value… | `T1190` | The Kirki  WordPress plugin before 6.0.13 does not properly sanitise and escape a value taken from the request before us |
| 🟠 high | CVE-2026-15258: The Product Feed Manager For WooCommerce  WordPress plugin before 7.6.1 does not proper… | `T1190` | The Product Feed Manager For WooCommerce  WordPress plugin before 7.6.1 does not properly sanitise and escape product-fe |
| 🟠 high | CVE-2026-17346: The fix for CVE-2026-12044 in pgAdmin 4 9.16 hardened qtLiteral and switched sixteen CO… | — | The fix for CVE-2026-12044 in pgAdmin 4 9.16 hardened qtLiteral and switched sixteen COMMENT ON / pgstattuple / pgstatin |
| 🟠 high | CVE-2026-46593: Authenticated SQL Injection in PHP Poll Script | `T1190` | [cvefeed.io] Authenticated SQL Injection in PHP Poll Script |
| 🟠 high | CVE-2025-67650: Authenticated SQL Injection in PHP Jabbers scripts | `T1190` | [cvefeed.io] Authenticated SQL Injection in PHP Jabbers scripts |
| 🟠 high | CVE-2025-67649: Unauthenticated  SQL Injection in PHP Jabbers - Car Rental Script script | `T1190` | [cvefeed.io] Unauthenticated  SQL Injection in PHP Jabbers - Car Rental Script script |

## Cross-Site Scripting (28)

_Reflected, stored, or DOM-based XSS in web applications._

| Severity | Finding | MITRE | Description |
|----------|---------|-------|-------------|
| 🟠 high | CVE-2026-65447: Unauthenticated Cross Site Scripting (XSS) in Contest Gallery <= 30.0.6 versions. | `T1059.007` | Unauthenticated Cross Site Scripting (XSS) in Contest Gallery <= 30.0.6 versions. |
| 🟠 high | CVE-2026-65446: Unauthenticated Cross Site Scripting (XSS) in Kali Forms <= 2.4.18 versions. | `T1059.007` | Unauthenticated Cross Site Scripting (XSS) in Kali Forms <= 2.4.18 versions. |
| 🟠 high | CVE-2026-65443: Unauthenticated Cross Site Scripting (XSS) in BackWPup  <= 5.7.4 versions. | `T1059.007` | Unauthenticated Cross Site Scripting (XSS) in BackWPup  <= 5.7.4 versions. |
| 🟠 high | CVE-2026-65441: Unauthenticated Cross Site Scripting (XSS) in GiveWP <= 4.16.3 versions. | `T1059.007` | Unauthenticated Cross Site Scripting (XSS) in GiveWP <= 4.16.3 versions. |
| 🟠 high | CVE-2026-65440: Unauthenticated Cross Site Scripting (XSS) in GetGenie <= 4.4.3 versions. | `T1059.007` | Unauthenticated Cross Site Scripting (XSS) in GetGenie <= 4.4.3 versions. |
| 🟠 high | CVE-2026-65439: Unauthenticated Cross Site Scripting (XSS) in Ultimate Addons for Contact Form 7 <=3.5.… | `T1059.007` | Unauthenticated Cross Site Scripting (XSS) in Ultimate Addons for Contact Form 7 <=3.5.45 versions. |
| 🟠 high | CVE-2026-65438: Unauthenticated Cross Site Scripting (XSS) in Message Filter for Contact Form 7 <= 1.6.… | `T1059.007` | Unauthenticated Cross Site Scripting (XSS) in Message Filter for Contact Form 7 <= 1.6.3.9 versions. |
| 🟠 high | CVE-2026-65437: Unauthenticated Cross Site Scripting (XSS) in Spam protection, AntiSpam, FireWall by Cl… | `T1059.007` | Unauthenticated Cross Site Scripting (XSS) in Spam protection, AntiSpam, FireWall by CleanTalk <= 6.82 versions. |
| 🟠 high | CVE-2026-61957: Unauthenticated Cross Site Scripting (XSS) in miniorange otp verification <= 5.5.1 vers… | `T1059.007` | Unauthenticated Cross Site Scripting (XSS) in miniorange otp verification <= 5.5.1 versions. |
| 🟠 high | CVE-2026-66824: Stored Cross-Site Scripting via Unsafe Capture Tree JSON Embedding | `T1059.007` | [cvefeed.io] Stored Cross-Site Scripting via Unsafe Capture Tree JSON Embedding |
| 🟠 high | CVE-2026-59239: Stored XSS in Prospero Flow CRM email body allows administrator account takeover | `T1059.007` | [cvefeed.io] Stored XSS in Prospero Flow CRM email body allows administrator account takeover |
| 🟠 high | CVE-2026-14870: The Database for Contact Form 7, WPforms, Elementor forms WordPress plugin before 1.5.3… | `T1059.007` | The Database for Contact Form 7, WPforms, Elementor forms WordPress plugin before 1.5.3 does not properly sanitise and e |
| 🟠 high | CVE-2026-13440: The StoreGrowth: Smart Sales Booster for WooCommerce \| BOGO, Upsells, Direct Checkout, … | `T1059.007` | The StoreGrowth: Smart Sales Booster for WooCommerce \| BOGO, Upsells, Direct Checkout, Quick View, Side Cart plugin for  |
| 🟠 high | CVE-2026-48060: Litestar is an Asynchronous Server Gateway Interface (ASGI) framework. | — | Litestar is an Asynchronous Server Gateway Interface (ASGI) framework. Prior to version 2.20.0, Litestar instances which |
| 🟠 high | CVE-2026-13425: The Database for CF7 plugin for WordPress is vulnerable to Stored Cross-Site Scripting … | `T1059.007` | The Database for CF7 plugin for WordPress is vulnerable to Stored Cross-Site Scripting via Array Form Field Values in al |
| 🟠 high | CVE-2026-16597: The GTM4WP – A Google Tag Manager (GTM) plugin for WordPress plugin for WordPress is vu… | `T1059.007` | The GTM4WP – A Google Tag Manager (GTM) plugin for WordPress plugin for WordPress is vulnerable to Stored Cross-Site Scr |
| 🟠 high | CVE-2026-16655: The Fluent Forms – Customizable Contact Forms, Survey, Quiz, & Conversational Form Buil… | `T1059.007` | The Fluent Forms – Customizable Contact Forms, Survey, Quiz, & Conversational Form Builder plugin for WordPress is vulne |
| 🟠 high | CVE-2026-66421: OpenClaw Dashboard Stored XSS via lastMessage Session Field | `T1059.007` | [cvefeed.io] OpenClaw Dashboard Stored XSS via lastMessage Session Field |
| 🟠 high | CVE-2026-66418: OpenClaw Dashboard v3.0.0 Stored XSS via Failed Login Username Field | `T1059.007` | [cvefeed.io] OpenClaw Dashboard v3.0.0 Stored XSS via Failed Login Username Field |
| 🟠 high | CVE-2026-56670: ComfyUI is a modular diffusion model GUI, api and backend with a graph/nodes interface. | `T1059.007` | ComfyUI is a modular diffusion model GUI, api and backend with a graph/nodes interface. Prior to 0.28.0, the /view endpo |
| 🟠 high | CVE-2026-56672: ComfyUI is a node-based diffusion model GUI, API, and backend. | `T1059.007` | ComfyUI is a node-based diffusion model GUI, API, and backend. Prior to 0.28.0, GET /userdata/{file} served user-control |
| 🟠 high | CVE-2026-13609: The Frontend Admin by DynamiApps WordPress plugin before 3.29.9 decodes HTML entities i… | `T1059.007` | The Frontend Admin by DynamiApps WordPress plugin before 3.29.9 decodes HTML entities in a submitted form field value af |
| 🟠 high | CVE-2026-18481: Stored cross-site scripting in the participant URL handling in AWS Ops 
Wheel before PR… | `T1059.007` | Stored cross-site scripting in the participant URL handling in AWS Ops 
Wheel before PR #168 might allow an authenticate |
| 🟠 high | CVE-2026-15052: The MailChimp Subscribe Form, Optin Builder, PopUp Builder, Form Builder plugin for Wor… | `T1059.007` | The MailChimp Subscribe Form, Optin Builder, PopUp Builder, Form Builder plugin for WordPress is vulnerable to Stored Cr |
| 🟠 high | CVE-2026-67328: @better-auth/sso versions before 1.6.21 contain multiple authentication bypass vulnerab… | `T1078`, `T1059.007` | @better-auth/sso versions before 1.6.21 contain multiple authentication bypass vulnerabilities in SSO provider handling  |
| 🟠 high | CVE-2026-67333: better-auth before 1.6.13 (and pre-release builds 1.7.0-beta.0 through 1.7.0-beta.3) fa… | — | better-auth before 1.6.13 (and pre-release builds 1.7.0-beta.0 through 1.7.0-beta.3) fail to validate the scheme of redi |
| 🟠 high | CVE-2026-67352: luci-app-https-dns-proxy contains a stored cross-site scripting vulnerability in the re… | `T1059.007` | luci-app-https-dns-proxy contains a stored cross-site scripting vulnerability in the resolver_url parameter that allows  |
| 🟡 medium | XSS FORUM HOST (other) | — | DOMAINS |

## Memory Corruption (78)

_Buffer overflows, use-after-free, type confusion enabling crashes or RCE._

| Severity | Finding | MITRE | Description |
|----------|---------|-------|-------------|
| 🔴 critical | CVE-2026-51252: schreibfaul1 ESP32-audioI2S 3.4.5 has a buffer overflow vulnerability in the MP3Decoder… | `T1203` | schreibfaul1 ESP32-audioI2S 3.4.5 has a buffer overflow vulnerability in the MP3Decoder::UnpackSFMPEG1 function due to m |
| 🔴 critical | CVE-2026-51259: Unchecked unsigned integer overflow in buffer size calculation in schreibfaul1 ESP32-au… | `T1203` | Unchecked unsigned integer overflow in buffer size calculation in schreibfaul1 ESP32-audioI2S 3.4.5 leads to undersized  |
| 🔴 critical | CVE-2026-51260: Unsafe fixed-size memcpy operation in AudioBuffer::writeSpace() of schreibfaul1 ESP32-a… | `T1203` | Unsafe fixed-size memcpy operation in AudioBuffer::writeSpace() of schreibfaul1 ESP32-audioI2S 3.4.5 allows remote heap  |
| 🔴 critical | CVE-2026-51263: schreibfaul1 ESP32-audioI2S 3.4.5 is vulnerable to Buffer Overflow. | `T1203` | schreibfaul1 ESP32-audioI2S 3.4.5 is vulnerable to Buffer Overflow. The Audio::openai_speech function in the Audio libra |
| 🔴 critical | CVE-2026-51266: schreibfaul1 ESP32-audioI2S 3.4.5 has a heap-based buffer overflow vulnerability in the… | `T1190`, `T1203` | schreibfaul1 ESP32-audioI2S 3.4.5 has a heap-based buffer overflow vulnerability in the HTTP request header construction |
| 🔴 critical | CVE-2026-51267: schreibfaul1 ESP32-audioI2S 3.4.5 has a heap-based buffer overflow vulnerability in the… | `T1190`, `T1068`, `T1203` | schreibfaul1 ESP32-audioI2S 3.4.5 has a heap-based buffer overflow vulnerability in the URL path concatenation and encod |
| 🔴 critical | CVE-2026-51271: In schreibfaul1 ESP32-audioI2S 3.4.5, a heap-based buffer overflow vulnerability exists… | `T1190`, `T1203` | In schreibfaul1 ESP32-audioI2S 3.4.5, a heap-based buffer overflow vulnerability exists in the WAV header parsing functi |
| 🔴 critical | CVE-2026-67191: Xlight FTP Server before 3.9.5 contains a pre-authentication heap buffer overflow vulne… | `T1203` | Xlight FTP Server before 3.9.5 contains a pre-authentication heap buffer overflow vulnerability that allows remote unaut |
| 🔴 critical | CVE-2026-52855: Wings is the server control plane for Pterodactyl, a free, open-source game server mana… | — | Wings is the server control plane for Pterodactyl, a free, open-source game server management panel. Prior to 1.12.3, {{ |
| 🔴 critical | CVE-2026-67822: Tenda W6-S 1.0.0.4(510) contains a stack-based buffer overflow vulnerability in the /go… | `T1203` | Tenda W6-S 1.0.0.4(510) contains a stack-based buffer overflow vulnerability in the /goform/wifiSSIDset endpoint. The fu |
| 🔴 critical | CVE-2026-68579: FreeRDP before 3.30.0 (<= 3.29.0) contains a heap-based buffer overflow in the Windows … | `T1203` | FreeRDP before 3.30.0 (<= 3.29.0) contains a heap-based buffer overflow in the Windows clipboard client's CliprdrStream_ |
| 🟠 high | CVE-2026-51235: LibRaw Buffer Overflow | `T1203` | [cvefeed.io] LibRaw Buffer Overflow |
| 🟠 high | CVE-2026-65881: Joomla Extension - joomdle.com - Insecure default configuration allows read/write user … | — | Joomla Extension - joomdle.com - Insecure default configuration allows read/write user account access in Joomdle < 3.1.1 |
| 🟠 high | CVE-2026-51251: Schreibfaul1 ESP32-audioI2S 3.4.5 has a buffer overflow vulnerability in the MP3Decoder… | `T1203` | Schreibfaul1 ESP32-audioI2S 3.4.5 has a buffer overflow vulnerability in the MP3Decoder::decode() function of the MP3 de |
| 🟠 high | CVE-2026-51254: schreibfaul1 ESP32-audioI2S v3.4.5 has an integer underflow vulnerability in the MP3Dec… | `T1190` | schreibfaul1 ESP32-audioI2S v3.4.5 has an integer underflow vulnerability in the MP3Decoder::GetBits() function of the M |
| 🟠 high | CVE-2026-47427: GitHub MCP Server is GitHub's official MCP Server. | — | GitHub MCP Server is GitHub's official MCP Server. Prior to 1.1.0, the CompletionsHandler function in pkg/github/server. |
| 🟠 high | CVE-2026-51269: schreibfaul1 ESP32-audioI2S 3.4.5 has a heap-based buffer overflow vulnerability in the… | `T1190`, `T1203` | schreibfaul1 ESP32-audioI2S 3.4.5 has a heap-based buffer overflow vulnerability in the connecttospeech() function. The  |
| 🟠 high | CVE-2026-51273: In schreibfaul1 ESP32-audioI2S 3.4.5, a heap-based buffer overflow vulnerability exists… | `T1190`, `T1203` | In schreibfaul1 ESP32-audioI2S 3.4.5, a heap-based buffer overflow vulnerability exists in the ID3 tag parsing function  |
| 🟠 high | CVE-2026-51274: In schreibfaul1 ESP32-audioI2S 3.4.5, a heap-based buffer overflow in the ID3v2 SYLT sy… | `T1190`, `T1203` | In schreibfaul1 ESP32-audioI2S 3.4.5, a heap-based buffer overflow in the ID3v2 SYLT synchronized lyrics parser in audio |
| 🟠 high | CVE-2026-51275: In schreibfaul1 ESP32-audioI2S 3.4.5, a heap-based buffer overflow in the ID3v2 APIC fr… | `T1190`, `T1203` | In schreibfaul1 ESP32-audioI2S 3.4.5, a heap-based buffer overflow in the ID3v2 APIC frame parsing function in audiolib  |
| 🟠 high | CVE-2026-54603: OAuth2 is a Ruby wrapper for the OAuth 2.0 and 2.1 authorization frameworks, including … | — | OAuth2 is a Ruby wrapper for the OAuth 2.0 and 2.1 authorization frameworks, including OpenID Connect (OIDC). From 0.4.0 |
| 🟠 high | CVE-2026-54605: OAuth is a Ruby wrapper for the OAuth 1.0 and 1.0a protocols, providing clients and ser… | — | OAuth is a Ruby wrapper for the OAuth 1.0 and 1.0a protocols, providing clients and servers. From 0.5.5 to 1.1.5, OAuth: |
| 🟠 high | CVE-2026-67184: TinyWeb through 0.0.8 contains a null pointer dereference vulnerability that allows una… | — | TinyWeb through 0.0.8 contains a null pointer dereference vulnerability that allows unauthenticated remote attackers to  |
| 🟠 high | CVE-2026-48372: Format Plugins is affected by a Heap-based Buffer Overflow vulnerability that could res… | `T1190`, `T1203` | Format Plugins is affected by a Heap-based Buffer Overflow vulnerability that could result in arbitrary code execution i |
| 🟠 high | CVE-2026-48392: Bridge is affected by an out-of-bounds write vulnerability that could result in arbitra… | `T1190` | Bridge is affected by an out-of-bounds write vulnerability that could result in arbitrary code execution in the context  |
| 🟠 high | CVE-2026-48393: Bridge is affected by an out-of-bounds write vulnerability that could result in arbitra… | `T1190` | Bridge is affected by an out-of-bounds write vulnerability that could result in arbitrary code execution in the context  |
| 🟠 high | CVE-2026-48394: Bridge is affected by an out-of-bounds write vulnerability that could result in arbitra… | `T1190` | Bridge is affected by an out-of-bounds write vulnerability that could result in arbitrary code execution in the context  |
| 🟠 high | CVE-2026-15057: IBM WebSphere Application Server - Liberty 17.0.0.3 through 26.0.0.7 is vulnerable to a… | — | IBM WebSphere Application Server - Liberty 17.0.0.3 through 26.0.0.7 is vulnerable to a denial of service due to uncontr |
| 🟠 high | CVE-2026-55389: datamodel-code-generator generates Pydantic v2 models, dataclasses, TypedDict, and msgs… | — | datamodel-code-generator generates Pydantic v2 models, dataclasses, TypedDict, and msgspec.Struct from OpenAPI, JSON Sch |
| 🟠 high | CVE-2026-55390: datamodel-code-generator generates Python data models from schema definitions. | — | datamodel-code-generator generates Python data models from schema definitions. From 0.59.0 until 0.62.0, XML Schema pars |
| 🟠 high | CVE-2026-58154: Apache Traffic Server can write out of bounds or overflow integers while parsing MIME a… | — | Apache Traffic Server can write out of bounds or overflow integers while parsing MIME and HTTP headers.

This issue affe |
| 🟠 high | CVE-2026-58157: Apache Traffic Server can reuse server sessions and tunnels improperly, exposing data a… | — | Apache Traffic Server can reuse server sessions and tunnels improperly, exposing data across client connections.

This i |
| 🟠 high | CVE-2026-58161: Apache Traffic Server can crash from null dereferences and dangling references in TLS a… | — | Apache Traffic Server can crash from null dereferences and dangling references in TLS and SNI handling.

This issue affe |
| 🟠 high | CVE-2026-58164: Apache Traffic Server has use-after-free and time-of-check/time-of-use errors in remap … | — | Apache Traffic Server has use-after-free and time-of-check/time-of-use errors in remap configuration handling.

This iss |
| 🟠 high | CVE-2026-58177: The Apache Traffic Server Cripts framework has out-of-bounds writes, path traversal, an… | — | The Apache Traffic Server Cripts framework has out-of-bounds writes, path traversal, and use-after-free errors.

This is |
| 🟠 high | CVE-2026-58179: The Apache Traffic Server regex_remap plugin overflows the stack and integers from subs… | — | The Apache Traffic Server regex_remap plugin overflows the stack and integers from substitution input.

This issue affec |
| 🟠 high | CVE-2026-58180: The Apache Traffic Server txn_box plugin overflows the stack from attacker-controlled i… | — | The Apache Traffic Server txn_box plugin overflows the stack from attacker-controlled input.

This issue affects Apache  |
| 🟠 high | CVE-2026-58181: The Apache Traffic Server uri_signing and url_sig plugins can exhaust the stack or cras… | — | The Apache Traffic Server uri_signing and url_sig plugins can exhaust the stack or crash on attacker input.

This issue  |
| 🟠 high | CVE-2026-58184: The Apache Traffic Server header_rewrite plugin can crash or corrupt memory during cook… | — | The Apache Traffic Server header_rewrite plugin can crash or corrupt memory during cookie operations and CIDR condition  |
| 🟠 high | CVE-2026-58188: Several Apache Traffic Server experimental plugins have memory-safety and limit-bypass … | — | Several Apache Traffic Server experimental plugins have memory-safety and limit-bypass errors.

This issue affects Apach |
| 🟠 high | CVE-2026-18220: An out-of-bounds write vulnerability was found in the BFD library's DLX ELF backend (bf… | `T1190` | An out-of-bounds write vulnerability was found in the BFD library's DLX ELF backend (bfd/elf32-dlx.c) in GNU binutils. T |
| 🟠 high | CVE-2026-54660: swagger-typescript-api generates API clients for Fetch or Axios from OpenAPI specificat… | — | swagger-typescript-api generates API clients for Fetch or Axios from OpenAPI specifications. Prior to 13.12.2, src/resol |
| 🟠 high | CVE-2026-16463: A maliciously crafted DXF file, when parsed through Autodesk AutoCAD, can force a Heap-… | `T1190` | A maliciously crafted DXF file, when parsed through Autodesk AutoCAD, can force a Heap-Based Overflow vulnerability. A m |
| 🟠 high | CVE-2026-67192: Xlight FTP Server before 3.9.5 contains a pre-authentication stack buffer overflow vuln… | `T1190`, `T1203` | Xlight FTP Server before 3.9.5 contains a pre-authentication stack buffer overflow vulnerability that allows unauthentic |
| 🟠 high | CVE-2026-13697: undici's cache interceptor mishandles malformed Cache-Control private directives. | — | undici's cache interceptor mishandles malformed Cache-Control private directives. In undici 7.0.0 up to before 7.29.0 an |
| 🟠 high | CVE-2026-14266: 7-Zip XZ Decompression Heap-based Buffer Overflow Remote Code Execution Vulnerability. | `T1190`, `T1203` | 7-Zip XZ Decompression Heap-based Buffer Overflow Remote Code Execution Vulnerability. This vulnerability allows remote  |
| 🟠 high | CVE-2026-18022: Integer wraparound in IVFFlat index build in pgvector before 0.8.6 allows a database us… | `T1190` | Integer wraparound in IVFFlat index build in pgvector before 0.8.6 allows a database user to write data out-of-bounds, w |
| 🟠 high | CVE-2026-5056: GStreamer qtdemux Stack-based Buffer Overflow Remote Code Execution Vulnerability. | `T1190`, `T1203` | GStreamer qtdemux Stack-based Buffer Overflow Remote Code Execution Vulnerability. This vulnerability allows remote atta |
| 🟠 high | CVE-2026-13308: Autel MaxiCharger AC Elite Home WebSockets Integer Underflow Remote Code Execution Vuln… | `T1190` | Autel MaxiCharger AC Elite Home WebSockets Integer Underflow Remote Code Execution Vulnerability. This vulnerability all |
| 🟠 high | CVE-2026-66360: MZ Automation libiec61850 Out-of-bounds Read | — | [cvefeed.io] MZ Automation libiec61850 Out-of-bounds Read |
| | _+28 more…_ | | |

## Insecure Deserialization (7)

_Unsafe deserialization of attacker-controlled data leading to RCE._

| Severity | Finding | MITRE | Description |
|----------|---------|-------|-------------|
| 🔴 critical | CVE-2026-11756: A Deserialization of Untrusted Data vulnerability affecting Station Launcher App in 3DE… | `T1190`, `T1059.007` | A Deserialization of Untrusted Data vulnerability affecting Station Launcher App in 3DEXPERIENCE platform from Release 3 |
| 🔴 critical | CVE-2026-66713: Deserialization of Untrusted Data (CWE-502) in the Tribes-based clustering component

 … | `T1190`, `T1059.007` | Deserialization of Untrusted Data (CWE-502) in the Tribes-based clustering component

  in Apache Software Foundation Ap |
| 🔴 critical | CVE-2026-14512: IBM WebSphere Application Server 9.0, and 8.5 traditional is vulnerable to pre-authenti… | `T1190`, `T1059.007` | IBM WebSphere Application Server 9.0, and 8.5 traditional is vulnerable to pre-authentication unsafe deserialization whi |
| 🔴 critical | CVE-2026-68771: ComfyUI v0.23.0 contains an unsafe deserialization vulnerability in the LoadTrainingDat… | `T1059.007` | ComfyUI v0.23.0 contains an unsafe deserialization vulnerability in the LoadTrainingDataset node that allows unauthentic |
| 🟠 high | CVE-2026-14974: IBM WebSphere Application Server 8.5, and 9.0 traditional could allow a remote attacker… | `T1190`, `T1059.007` | IBM WebSphere Application Server 8.5, and 9.0 traditional could allow a remote attacker to execute arbitrary code caused |
| 🟠 high | CVE-2026-58163: Apache Traffic Server mishandles on-disk cache fields and object lifetimes, corrupting … | — | Apache Traffic Server mishandles on-disk cache fields and object lifetimes, corrupting state or crashing.

This issue af |
| 🟠 high | CVE-2026-12720: The Kirki  WordPress plugin before 6.0.13 does not restrict which classes may be instan… | `T1190` | The Kirki  WordPress plugin before 6.0.13 does not restrict which classes may be instantiated when it deserialises data  |

## Path Traversal & File Disclosure (27)

_Directory traversal and arbitrary file read/write vulnerabilities._

| Severity | Finding | MITRE | Description |
|----------|---------|-------|-------------|
| 🔴 critical | CVE-2026-14973: IBM Aspera Desktop App 1.0.5 through 1.0.19 IBM Aspera for desktop can allow files to b… | — | IBM Aspera Desktop App 1.0.5 through 1.0.19 IBM Aspera for desktop can allow files to be written outside of the user's s |
| 🔴 critical | CVE-2026-67429: Flyto2 Core is an execution kernel for automation and AI-agent workflows. | — | Flyto2 Core is an execution kernel for automation and AI-agent workflows. Prior to 2.26.6, image.download and related fi |
| 🟠 high | CVE-2026-65921: Potential path traversal leading to unauthorized file writes | — | [cvefeed.io] Potential path traversal leading to unauthorized file writes |
| 🟠 high | CVE-2026-17524: Versions of the package zip-lib before 1.1.0 are vulnerable to Directory Traversal via … | — | Versions of the package zip-lib before 1.1.0 are vulnerable to Directory Traversal via the caching mechanism for path va |
| 🟠 high | CVE-2026-14490: The Demi – One Click Demo Import, WP Backup & Site Migration plugin for WordPress is vu… | — | The Demi – One Click Demo Import, WP Backup & Site Migration plugin for WordPress is vulnerable to Arbitrary Directory D |
| 🟠 high | CVE-2026-16585: The Better Messages – Chat Rooms, Group Chat, Private Messages & AI Chat Bots plugin fo… | `T1190` | The Better Messages – Chat Rooms, Group Chat, Private Messages & AI Chat Bots plugin for WordPress is vulnerable to arbi |
| 🟠 high | CVE-2026-54545: wakaru is a JavaScript decompiler and unminifier toolkit. | — | wakaru is a JavaScript decompiler and unminifier toolkit. From 1.0.0 until 1.4.0, @wakaru/cli sanitizes bundle-controlle |
| 🟠 high | CVE-2026-67185: TinyWeb through 0.0.8 contains a path traversal vulnerability that allows unauthenticat… | — | TinyWeb through 0.0.8 contains a path traversal vulnerability that allows unauthenticated attackers to read arbitrary fi |
| 🟠 high | CVE-2026-48374: Bridge is affected by an Improper Limitation of a Pathname to a Restricted Directory ('… | — | Bridge is affected by an Improper Limitation of a Pathname to a Restricted Directory ('Path Traversal') vulnerability th |
| 🟠 high | CVE-2026-15280: IBM WebSphere Application Server - Liberty 17.0.0.3 through 26.0.0.8 ND Collective Cont… | — | IBM WebSphere Application Server - Liberty 17.0.0.3 through 26.0.0.8 ND Collective Controller is affected by a path-segm |
| 🟠 high | CVE-2026-54650: openhole exposes localhost to the internet in one command. | — | openhole exposes localhost to the internet in one command. In 0.1.1 and earlier, openhole-server in internal/server/publ |
| 🟠 high | CVE-2026-11974: The wp-media-folder-addon WordPress plugin through 4.1.6 does not validate a user-suppl… | — | The wp-media-folder-addon WordPress plugin through 4.1.6 does not validate a user-supplied parameter before using it in  |
| 🟠 high | CVE-2026-5487: DriveLock Directory Traversal Information Disclosure Vulnerability. | — | DriveLock Directory Traversal Information Disclosure Vulnerability. This vulnerability allows remote attackers to disclo |
| 🟠 high | CVE-2026-5491: DriveLock Directory Traversal Information Disclosure Vulnerability. | — | DriveLock Directory Traversal Information Disclosure Vulnerability. This vulnerability allows remote attackers to disclo |
| 🟠 high | CVE-2026-66415: Leantime Server-Side Request Forgery and Local File Inclusion in Blueprints::import() | — | [cvefeed.io] Leantime Server-Side Request Forgery and Local File Inclusion in Blueprints::import() |
| 🟠 high | CVE-2026-56671: ComfyUI is a modular diffusion model GUI, api and backend with a graph/nodes interface. | — | ComfyUI is a modular diffusion model GUI, api and backend with a graph/nodes interface. Prior to 0.28.0, get_model_previ |
| 🟠 high | CVE-2026-56673: ComfyUI is a modular diffusion model GUI, API, and backend with a graph-and-node interf… | — | ComfyUI is a modular diffusion model GUI, API, and backend with a graph-and-node interface. Prior to 0.28.0, folder_path |
| 🟠 high | CVE-2026-63222: CodeIgniter is a PHP full-stack web framework. | — | CodeIgniter is a PHP full-stack web framework. Prior to 4.7.4, calling UploadedFile::move() without a second argument us |
| 🟠 high | CVE-2026-62391: The security fix for CVE-2025-66518 is incomplete. | — | The security fix for CVE-2025-66518 is incomplete. Any client who can access to Apache Kyuubi Server via Kyuubi frontend |
| 🟠 high | CVE-2026-62999: Copier is a library and CLI app for rendering project templates. | — | Copier is a library and CLI app for rendering project templates. From 9.5.0 through 9.16.0, percent-encoded parent-direc |
| 🟠 high | CVE-2026-53502: Thumbor has path traversal via post-validation URL decoding bypass in file_loader | — | [cvefeed.io] Thumbor has path traversal via post-validation URL decoding bypass in file_loader |
| 🟠 high | CVE-2026-55100: hashi-vault-js has a path traversal and query parameter injection | — | [cvefeed.io] hashi-vault-js has a path traversal and query parameter injection |
| 🟠 high | CVE-2026-15006: The Bit integrations – Form Integration, Webhook, Spreadsheets, CRM, LMS & Email Automa… | — | The Bit integrations – Form Integration, Webhook, Spreadsheets, CRM, LMS & Email Automation plugin for WordPress is vuln |
| 🟠 high | CVE-2026-15450: The Nex Forms – Ultimate Form Builder – Lite plugin for WordPress is vulnerable to arbi… | — | The Nex Forms – Ultimate Form Builder – Lite plugin for WordPress is vulnerable to arbitrary file deletion via path trav |
| 🟠 high | CVE-2026-13339: The CubeWP Framework plugin for WordPress is vulnerable to Directory Traversal in all v… | — | The CubeWP Framework plugin for WordPress is vulnerable to Directory Traversal in all versions up to, and including, 1.1 |
| 🟠 high | CVE-2026-18352: The User Access Manager plugin for WordPress is vulnerable to Directory Traversal in al… | — | The User Access Manager plugin for WordPress is vulnerable to Directory Traversal in all versions up to, and including,  |
| 🟠 high | CVE-2026-9856: A vulnerability in huggingface/transformers versions <=5.8.0.dev0 allows an attacker to… | — | A vulnerability in huggingface/transformers versions <=5.8.0.dev0 allows an attacker to perform arbitrary file writes vi |

## SSRF, CSRF & Open Redirect (26)

_Server-side request forgery, cross-site request forgery, and redirect issues._

| Severity | Finding | MITRE | Description |
|----------|---------|-------|-------------|
| 🔴 critical | CVE-2026-54735: Prebid Server is an open-source solution for running real-time advertising auctions in … | — | Prebid Server is an open-source solution for running real-time advertising auctions in the cloud. Prior to version 4.4.0 |
| 🔴 critical | CVE-2026-54725: vault-secrets-webhook is a Kubernetes mutating webhook that makes direct secret injecti… | — | vault-secrets-webhook is a Kubernetes mutating webhook that makes direct secret injection into Pods possible. Prior to 1 |
| 🟠 high | CVE-2026-65442: Unauthenticated Server Side Request Forgery (SSRF) in FormCraft <= 3.9.15 versions. | — | Unauthenticated Server Side Request Forgery (SSRF) in FormCraft <= 3.9.15 versions. |
| 🟠 high | CVE-2026-61953: Unauthenticated Server Side Request Forgery (SSRF) in Simple Link Directory Pro <= 15.0… | — | Unauthenticated Server Side Request Forgery (SSRF) in Simple Link Directory Pro <= 15.0.6 versions. |
| 🟠 high | CVE-2026-64649: Next.js: Server-Side Request Forgery in Server Actions on Custom Servers | — | [cvefeed.io] Next.js: Server-Side Request Forgery in Server Actions on Custom Servers |
| 🟠 high | CVE-2026-16481: Server-Side Request Forgery (SSRF) and Credential Exfiltration in googleapis/mcp-toolbo… | — | [cvefeed.io] Server-Side Request Forgery (SSRF) and Credential Exfiltration in googleapis/mcp-toolbox cloud-healthcare-f |
| 🟠 high | CVE-2026-64645: Next.js: Server-Side Request Forgery in rewrites via attacker-controlled destination ho… | — | [cvefeed.io] Next.js: Server-Side Request Forgery in rewrites via attacker-controlled destination hostname |
| 🟠 high | CVE-2026-43910: Appium Java Client is the Java language binding for writing Appium tests that conform t… | — | Appium Java Client is the Java language binding for writing Appium tests that conform to the W3C WebDriver protocol. Fro |
| 🟠 high | CVE-2026-59931: PhpSpreadsheet is a pure PHP library for reading and writing spreadsheet files. | — | PhpSpreadsheet is a pure PHP library for reading and writing spreadsheet files. In versions 4.0.0 through 5.8.0, 3.3.0 t |
| 🟠 high | CVE-2026-14869: The terraform-mcp-server before version 1.1.0 is vulnerable to a server-side request fo… | — | The terraform-mcp-server before version 1.1.0 is vulnerable to a server-side request forgery issue in the streamable-HTT |
| 🟠 high | CVE-2026-54690: datamodel-code-generator generates Pydantic v2 models, dataclasses, TypedDict, and msgs… | — | datamodel-code-generator generates Pydantic v2 models, dataclasses, TypedDict, and msgspec.Struct from OpenAPI, JSON Sch |
| 🟠 high | CVE-2026-54691: datamodel-code-generator generates Python data models from schema definitions. | — | datamodel-code-generator generates Python data models from schema definitions. From 0.9.1 until 0.61.0, src/datamodel_co |
| 🟠 high | CVE-2026-55391: datamodel-code-generator generates Pydantic v2 models, dataclasses, TypedDict, and msgs… | — | datamodel-code-generator generates Pydantic v2 models, dataclasses, TypedDict, and msgspec.Struct from OpenAPI, JSON Sch |
| 🟠 high | CVE-2026-23904: Kyuubi Engine UI proxy accepts a host and port from the request path and proxies HTTP r… | — | Kyuubi Engine UI proxy accepts a host and port from the request path and proxies HTTP requests to that destination. A re |
| 🟠 high | CVE-2026-58189: Apache Traffic Server allows redirect-limit bypass when plugins reset the retry counter… | — | Apache Traffic Server allows redirect-limit bypass when plugins reset the retry counter, enabling SSRF amplification.

T |
| 🟠 high | CVE-2026-16328: In consul-mcp-server, versions 0.1.0 up to 0.1.3 did not restrict how the Consul backen… | — | In consul-mcp-server, versions 0.1.0 up to 0.1.3 did not restrict how the Consul backend address was supplied, allowing  |
| 🟠 high | CVE-2026-67201: V through 0.5.2, fixed in commit 85859f0, contains a server-side request forgery (SSRF)… | — | V through 0.5.2, fixed in commit 85859f0, contains a server-side request forgery (SSRF) bypass vulnerability that allows |
| 🟠 high | CVE-2026-67424: Flyto2 Core is an execution kernel for automation and AI-agent workflows. | — | Flyto2 Core is an execution kernel for automation and AI-agent workflows. Prior to 2.26.7, the HTTP modules http.get, ht |
| 🟠 high | CVE-2026-67428: Flyto2 Core is an execution kernel for automation and AI-agent workflows. | — | Flyto2 Core is an execution kernel for automation and AI-agent workflows. Prior to 2.26.7, HTTP-emitting modules includi |
| 🟠 high | CVE-2026-67436: Linuxfabrik monitoring-plugins: SSRF and auth-token disclosure via unvalidated @odata.i… | — | [cvefeed.io] Linuxfabrik monitoring-plugins: SSRF and auth-token disclosure via unvalidated @odata.id link in redfish-*  |
| 🟠 high | CVE-2026-66416: Leantime CSRF Protection Globally Disabled by Omission of Laravel VerifyCsrfToken Middl… | — | [cvefeed.io] Leantime CSRF Protection Globally Disabled by Omission of Laravel VerifyCsrfToken Middleware |
| 🟠 high | CVE-2026-18446: fast-uri before 4.1.2, 3.1.5, and 2.4.4 requires a literal double forward slash to reco… | — | fast-uri before 4.1.2, 3.1.5, and 2.4.4 requires a literal double forward slash to recognize a URI authority, so a refer |
| 🟠 high | CVE-2026-53500: Thumbor is an open-source photo thumbnail service by globo.com. | — | Thumbor is an open-source photo thumbnail service by globo.com. Prior to 7.8.0, the ALLOWED_SOURCES configuration passes |
| 🟠 high | CVE-2026-54729: dssrf: any users using 1.1.1.1 DNS is impacted by SSRF | — | [cvefeed.io] dssrf: any users using 1.1.1.1 DNS is impacted by SSRF |
| 🟠 high | CVE-2026-15988: The AI Engine – The Chatbot, AI Framework & MCP for WordPress plugin for WordPress is v… | `T1078` | The AI Engine – The Chatbot, AI Framework & MCP for WordPress plugin for WordPress is vulnerable to Cross-Site Request F |
| 🟠 high | CVE-2025-71403: better-auth versions before 1.1.20 contain a bypass vulnerability in trustedOrigins val… | — | better-auth versions before 1.1.20 contain a bypass vulnerability in trustedOrigins validation logic affecting absolute  |

## Cryptographic Weaknesses (3)

_Broken cryptography, weak hashes, or insecure key management._

| Severity | Finding | MITRE | Description |
|----------|---------|-------|-------------|
| 🔴 critical | CVE-2026-18452: DMS+ (Non-Mobile) developed by Rich Source has a Use of Hard-coded Credentials vulnerab… | — | DMS+ (Non-Mobile) developed by Rich Source has a Use of Hard-coded Credentials vulnerability. Unauthenticated remote att |
| 🟠 high | CVE-2026-65309: ANDRITZ HIPASE-250 (formerly 250 SCALA) in affected versions stores
and transmits user … | — | ANDRITZ HIPASE-250 (formerly 250 SCALA) in affected versions stores
and transmits user passwords using a reversible form |
| 🟠 high | CVE-2026-67336: better-auth versions before 1.6.11 contain insecure cryptographic defaults in the oidcP… | — | better-auth versions before 1.6.11 contain insecure cryptographic defaults in the oidcProvider and mcp plugins that adve |

## Information Disclosure (4)

_Exposure of sensitive information through error messages, logs, or responses._

| Severity | Finding | MITRE | Description |
|----------|---------|-------|-------------|
| 🟠 high | CVE-2026-13442: IBM Langflow OSS 1.0.0 through 1.10.1 can allow an attacker to reuse another user's FAI… | — | IBM Langflow OSS 1.0.0 through 1.10.1 can allow an attacker to reuse another user's FAISS namespace to access owner-only |
| 🟠 high | CVE-2026-14528: IBM WebSphere Application Server 9.0, and 8.5 traditional could allow a remote attacker… | — | IBM WebSphere Application Server 9.0, and 8.5 traditional could allow a remote attacker to obtain sensitive information. |
| 🟠 high | CVE-2026-67425: Flyto2 Core is an execution kernel for automation and AI-agent workflows. | — | Flyto2 Core is an execution kernel for automation and AI-agent workflows. Prior to 2.26.6, llm.chat reads provider keys  |
| 🟠 high | CVE-2026-6267: GitLab has remediated an issue in GitLab CE/EE affecting all versions from 10.1.0 befor… | — | GitLab has remediated an issue in GitLab CE/EE affecting all versions from 10.1.0 before 19.0.5, 19.1 before 19.1.3, and |

## Denial of Service (35)

_Vulnerabilities causing service disruption, resource exhaustion, or crashes._

| Severity | Finding | MITRE | Description |
|----------|---------|-------|-------------|
| 🟠 high | CVE-2026-55685: React Router: Unauthenticated Denial of Service via Inefficient Route Matching | — | [cvefeed.io] React Router: Unauthenticated Denial of Service via Inefficient Route Matching |
| 🟠 high | CVE-2026-64641: Next.js: Denial of Service in App Router using Server Actions | — | [cvefeed.io] Next.js: Denial of Service in App Router using Server Actions |
| 🟠 high | CVE-2026-66731: facil.io 0.7.5 - 0.7.6 HTTP/1.1 Chunked Transfer Encoding Parser Crash DoS | — | [cvefeed.io] facil.io 0.7.5 - 0.7.6 HTTP/1.1 Chunked Transfer Encoding Parser Crash DoS |
| 🟠 high | CVE-2026-66730: facil.io 0.6.0 - 0.7.6 Infinite Loop DoS via Multipart MIME Body Parser | — | [cvefeed.io] facil.io 0.6.0 - 0.7.6 Infinite Loop DoS via Multipart MIME Body Parser |
| 🟠 high | CVE-2026-66729: facil.io 0.6.0 - 0.7.6 Integer Underflow DoS via Multipart MIME Body Parser | — | [cvefeed.io] facil.io 0.6.0 - 0.7.6 Integer Underflow DoS via Multipart MIME Body Parser |
| 🟠 high | CVE-2026-42493: Addressing certain issues, in particular related to operations which may
take excessive… | — | Addressing certain issues, in particular related to operations which may
take excessively long and therefore would need  |
| 🟠 high | CVE-2026-66299: Uncontrolled Resource Consumption vulnerability in Apache Tomcat's WebSocket chat example. | — | Uncontrolled Resource Consumption vulnerability in Apache Tomcat's WebSocket chat example.

This issue affects Apache To |
| 🟠 high | CVE-2026-47483: NVIDIA DCGM Exporter for all platforms contains a vulnerability in the /debug/pprof end… | — | NVIDIA DCGM Exporter for all platforms contains a vulnerability in the /debug/pprof endpoints, where an attacker could c |
| 🟠 high | CVE-2026-61609: Pterodactyl is a free, open-source game server management panel. | — | Pterodactyl is a free, open-source game server management panel. From 1.7.0 until 1.13.0, the authentication rate limite |
| 🟠 high | CVE-2026-54609: QTI Neon is a minimal, game-agnostic, relay-based UDP multiplayer protocol library. | — | QTI Neon is a minimal, game-agnostic, relay-based UDP multiplayer protocol library. In version 1.0.0, the relay's handle |
| 🟠 high | CVE-2026-67183: TinyWeb through 0.0.8 contains a memory leak vulnerability that allows unauthenticated … | — | TinyWeb through 0.0.8 contains a memory leak vulnerability that allows unauthenticated attackers to exhaust available me |
| 🟠 high | CVE-2026-59933: PhpSpreadsheet is a pure PHP library for reading and writing spreadsheet files. | — | PhpSpreadsheet is a pure PHP library for reading and writing spreadsheet files. In versions 4.0.0 through 5.8.0, 3.3.0 t |
| 🟠 high | CVE-2026-59932: PhpSpreadsheet is a pure PHP library for reading and writing spreadsheet files. | — | PhpSpreadsheet is a pure PHP library for reading and writing spreadsheet files. In versions 4.0.0 through 5.8.0, 3.3.0 t |
| 🟠 high | CVE-2026-16192: IBM WebSphere Application Server - Liberty 17.0.0.3 through 26.0.0.8 is affected by a d… | — | IBM WebSphere Application Server - Liberty 17.0.0.3 through 26.0.0.8 is affected by a denial of service vulnerability wh |
| 🟠 high | CVE-2026-14981: IBM WebSphere Application Server 9.0, and 8.5 and IBM WebSphere Application Server - Li… | — | IBM WebSphere Application Server 9.0, and 8.5 and IBM WebSphere Application Server - Liberty 17.0.0.3 through 26.0.0.7 a |
| 🟠 high | CVE-2026-47219: find-my-way is a framework-independent HTTP router that internally uses a Radix Tree an… | — | find-my-way is a framework-independent HTTP router that internally uses a Radix Tree and supports route parameters and w |
| 🟠 high | CVE-2026-54638: gotd/td is a T Telegram MTProto API client in Go. | — | gotd/td is a T Telegram MTProto API client in Go. Prior to 0.145.1, proto.UnencryptedMessage.Decode in proto/unencrypted |
| 🟠 high | CVE-2026-58151: Apache Traffic Server can be crashed or driven to resource exhaustion by abusive HTTP/2… | — | Apache Traffic Server can be crashed or driven to resource exhaustion by abusive HTTP/2 framing and flow-control.

This  |
| 🟠 high | CVE-2026-65324: Apache Traffic Server drops the per-stream buffer cap when dechunking HTTP/2 or HTTP/3 … | — | Apache Traffic Server drops the per-stream buffer cap when dechunking HTTP/2 or HTTP/3 responses, letting a slow client  |
| 🟠 high | CVE-2026-58175: Apache Traffic Server leaks memory when handling HostDB SRV records. | — | Apache Traffic Server leaks memory when handling HostDB SRV records.

This issue affects Apache Traffic Server: from 8.0 |
| 🟠 high | CVE-2026-58178: The Apache Traffic Server ESI plugin can recurse without bound and fetch attacker-contr… | — | The Apache Traffic Server ESI plugin can recurse without bound and fetch attacker-controlled URLs.

This issue affects A |
| 🟠 high | CVE-2026-58182: The Apache Traffic Server ts_lua plugin mishandles initialization, transform context, a… | — | The Apache Traffic Server ts_lua plugin mishandles initialization, transform context, and per-instance state.

This issu |
| 🟠 high | CVE-2026-67215: cJSON through 1.7.19 is vulnerable to uncontrolled recursion leading to stack exhaustio… | — | cJSON through 1.7.19 is vulnerable to uncontrolled recursion leading to stack exhaustion when an untrusted RFC 6902 JSON |
| 🟠 high | CVE-2026-15144: @fastify/rate-limit before 11.2.0 keys rate-limit buckets by the verbatim client IP str… | — | @fastify/rate-limit before 11.2.0 keys rate-limit buckets by the verbatim client IP string returned from request.ip. Bec |
| 🟠 high | CVE-2026-15975: GitLab has remediated an issue in GitLab CE/EE affecting all versions from 11.8 before … | — | GitLab has remediated an issue in GitLab CE/EE affecting all versions from 11.8 before 19.0.5, 19.1 before 19.1.3, and 1 |
| 🟠 high | CVE-2026-67432: MCP Ruby SDK is the official Ruby SDK for Model Context Protocol servers and clients. | — | MCP Ruby SDK is the official Ruby SDK for Model Context Protocol servers and clients. Prior to 0.23.0, MCP::Server::Tran |
| 🟠 high | CVE-2026-67437: OliveTin gives access to predefined shell commands from a web interface. | — | OliveTin gives access to predefined shell commands from a web interface. From 3000.0.0 until 3000.17.0, the service/inte |
| 🟠 high | CVE-2026-59901: Netty Bzip2Decoder: Infinite Loop in RLE State Machine Leads to Event-Loop Thread Hang | — | [cvefeed.io] Netty Bzip2Decoder: Infinite Loop in RLE State Machine Leads to Event-Loop Thread Hang |
| 🟠 high | CVE-2026-55768: GoAccess WebSocket Server: Signed 32 bit truncation of the 64 bit frame length causes a… | — | [cvefeed.io] GoAccess WebSocket Server: Signed 32 bit truncation of the 64 bit frame length causes a remote pre-authenti |
| 🟠 high | CVE-2026-18358: A flaw was found in gnome-remote-desktop as shipped in Red Hat Enterprise Linux. | — | A flaw was found in gnome-remote-desktop as shipped in Red Hat Enterprise Linux. When the daemon is running in system mo |
| 🟠 high | CVE-2026-53503: Thumbor is an open-source photo thumbnail service by globo.com. | — | Thumbor is an open-source photo thumbnail service by globo.com. Prior to 7.8.0, Thumbor's filters:convolution(<matrix>,  |
| 🟠 high | CVE-2026-53504: Thumbor is an open-source photo thumbnail service by globo.com. | — | Thumbor is an open-source photo thumbnail service by globo.com. Prior to 7.8.0, the convolution filter regular expressio |
| 🟠 high | CVE-2026-53505: Thumbor is an open-source photo thumbnail service by globo.com. | — | Thumbor is an open-source photo thumbnail service by globo.com. Prior to 7.8.0, Thumbor's filters:proportion(<value>) fi |
| 🟠 high | CVE-2026-67296: FreeRDP before 3.29.0 contains a denial of service vulnerability in the RDPEI server ch… | — | FreeRDP before 3.29.0 contains a denial of service vulnerability in the RDPEI server channel handler that fails to valid |
| 🟠 high | CVE-2026-67297: FreeRDP before 3.29.0 fails to enforce the RESPONSE_SIZE_LIMIT when processing Transfer… | — | FreeRDP before 3.29.0 fails to enforce the RESPONSE_SIZE_LIMIT when processing Transfer-Encoding: chunked HTTP responses |

## Network Infrastructure & IoT Device Vulnerabilities (5)

_Vulnerabilities in routers, firewalls, and IoT devices on the network edge._

| Severity | Finding | MITRE | Description |
|----------|---------|-------|-------------|
| 🟠 high | CVE-2026-64642: Next.js: Middleware / Proxy bypass in App Router applications using Turbopack and singl… | — | [cvefeed.io] Next.js: Middleware / Proxy bypass in App Router applications using Turbopack and single locale |
| 🟠 high | CVE-2026-16347: MikroTik RouterOS contains a weakness in its API authentication handling that lacks eff… | — | MikroTik RouterOS contains a weakness in its API authentication handling that lacks effective safeguards against excessi |
| 🟠 high | @bosch-iot-console (npm) | — | Malicious package listed in the OpenSSF malicious-packages directory. Review version ranges and installation provenance. |
| 🟠 high | CVE-2025-71399: Better Auth relies on better-call, which uses the rou3 router library. | — | Better Auth relies on better-call, which uses the rou3 router library. In affected versions of rou3, paths are normalize |
| 🟡 medium | CVE-2026-20316: Cisco Secure Firewall Management Center (FMC) — Cisco Secure Firewall Management Center Use of Hard-coded Password Vulnerability | — | A vulnerability in the web interface of Cisco Secure Firewall Management Center (FMC) Software could allow an unauthenti |

## Social Engineering & Phishing (3)

_Active phishing campaigns, lures, and social-engineering tradecraft._

| Severity | Finding | MITRE | Description |
|----------|---------|-------|-------------|
| 🟡 medium | Crowdstrike Cryptomining Campaign (other) | — | CROWDSTRIKE PHISHING: UNFOLDING MORE SECRETS |
| 🟡 medium | Sneaky 2FA Phishing Kit (phishing) | — | INTRO: SNEAKY 2FA |
| 🟡 medium | Tycoon 2FA Phishing (phishing) | — | DOMAINS |

## Critical-Severity Vulnerabilities (16)

_Critical-severity issues that did not fit a more specific category — review urgently._

| Severity | Finding | MITRE | Description |
|----------|---------|-------|-------------|
| 🔴 critical | CVE-2026-11841: An attacker may perform unauthenticated read and write operations on sensitive filesyst… | — | An attacker may perform unauthenticated read and write operations on sensitive filesystem areas via the AppEngine Fileac |
| 🔴 critical | CVE-2026-16498: The terraform-mcp-server before version 1.1.0 is vulnerable to a cross-tenant credentia… | — | The terraform-mcp-server before version 1.1.0 is vulnerable to a cross-tenant credential reuse issue in the streamable-H |
| 🔴 critical | CVE-2026-64863: goshs is a feature-rich single-binary file server for red teamers and developers. | — | goshs is a feature-rich single-binary file server for red teamers and developers. Prior to 2.1.4, the httpserver/server. |
| 🔴 critical | CVE-2026-63227: An unrestricted SCORM file upload vulnerability
in Koollab LMS allowed
an authenticated… | `T1190` | An unrestricted SCORM file upload vulnerability
in Koollab LMS allowed
an authenticated module designer to upload a SCOR |
| 🔴 critical | CVE-2026-18191: VIN-DS783E-E6 developed by Vacron has a Hidden Functionality vulnerability, allowing un… | — | VIN-DS783E-E6 developed by Vacron has a Hidden Functionality vulnerability, allowing unauthenticated remote attackers to |
| 🔴 critical | CVE-2026-33267: Improper Input Validation vulnerability in Apache Traffic Server. | — | Improper Input Validation vulnerability in Apache Traffic Server.

This issue affects Apache Traffic Server: from 9.2.0  |
| 🔴 critical | CVE-2026-57834: Apache Traffic Server allows request smuggling if chunked messages are malformed. | — | Apache Traffic Server allows request smuggling if chunked messages are malformed.

This issue affects Apache Traffic Ser |
| 🔴 critical | CVE-2026-58150: Apache Traffic Server does not reject Transfer-Encoding in HTTP/2 requests, allowing do… | — | Apache Traffic Server does not reject Transfer-Encoding in HTTP/2 requests, allowing downgrade request smuggling.

This  |
| 🔴 critical | CVE-2026-58155: Apache Traffic Server truncates over-long header names, allowing header aliasing, reque… | — | Apache Traffic Server truncates over-long header names, allowing header aliasing, request smuggling, and policy bypass.
 |
| 🔴 critical | CVE-2026-58162: The Apache Traffic Server certifier plugin generates certificates based on attacker-con… | — | The Apache Traffic Server certifier plugin generates certificates based on attacker-controlled client SNI.

This issue a |
| 🔴 critical | CVE-2026-59243: The FAB auth manager's Azure AD OAuth login defaulted `verify_signature=False` when dec… | — | The FAB auth manager's Azure AD OAuth login defaulted `verify_signature=False` when decoding the ID token, so an attacke |
| 🔴 critical | CVE-2026-16326: In consul-mcp-server, versions 0.1.0 up to 0.1.3 did not properly isolate session state… | — | In consul-mcp-server, versions 0.1.0 up to 0.1.3 did not properly isolate session state in stateless mode, which may all |
| 🔴 critical | CVE-2026-63223: CodeIgniter is a PHP full-stack web framework. | — | CodeIgniter is a PHP full-stack web framework. Prior to 4.7.4, the is_image and mime_in upload validation rules do not i |
| 🔴 critical | CVE-2026-66402: FreeRDP before 3.29.0 (affected versions <= 3.28.0) contains multiple TLS certificate i… | — | FreeRDP before 3.29.0 (affected versions <= 3.28.0) contains multiple TLS certificate identity validation weaknesses in  |
| 🔴 critical | CVE-2026-67289: FreeRDP before 3.29.0 (affected versions <= 3.28.0) does not validate CRLF and control … | — | FreeRDP before 3.29.0 (affected versions <= 3.28.0) does not validate CRLF and control characters in the server-controll |
| 🔴 critical | CVE-2026-67330: @better-auth/scim (a better-auth plugin) versions >= 1.4.0-beta.27 through <= 1.6.21 an… | — | @better-auth/scim (a better-auth plugin) versions >= 1.4.0-beta.27 through <= 1.6.21 and >= 1.7.0-beta.0 through <= 1.7. |

## High-Severity Vulnerabilities (3132)

_High-severity vulnerabilities across miscellaneous products and services._

| Severity | Finding | MITRE | Description |
|----------|---------|-------|-------------|
| 🟠 high | CVE-2026-55579: Pheditor: Hardcoded default password 'admin' with no forced change enables full applica… | — | [cvefeed.io] Pheditor: Hardcoded default password 'admin' with no forced change enables full application compromise |
| 🟠 high | CVE-2026-54540: Authenticated terminal command whitelist bypass in Pheditor | — | [cvefeed.io] Authenticated terminal command whitelist bypass in Pheditor |
| 🟠 high | CVE-2026-14169: Due to incorrect behavior order a low privileged remote attacker could trigger account … | — | Due to incorrect behavior order a low privileged remote attacker could trigger account inconsistent state via crafted in |
| 🟠 high | CVE-2026-42492: Xenstore, to have an up-to-date picture of the entire system, wants to
know of domains … | — | Xenstore, to have an up-to-date picture of the entire system, wants to
know of domains appearing and disappearing.  To m |
| 🟠 high | CVE-2026-49332: A flaw was found in openshift/oauth-proxy. | — | A flaw was found in openshift/oauth-proxy. The proxy sets authenticated identity headers using only dash-variant keys (X |
| 🟠 high | CVE-2026-62426: [This CNA information record relates to multiple CVEs; the
text explains which aspects/… | — | [This CNA information record relates to multiple CVEs; the
text explains which aspects/vulnerabilities correspond to whi |
| 🟠 high | CVE-2026-62428: When grant-copy operations are processed, the respective grant may or may
not already b… | — | When grant-copy operations are processed, the respective grant may or may
not already be in use by another operation (a  |
| 🟠 high | CVE-2026-62430: Accesses to the CMOS memory contents are done using an indirect IO port
pair. | — | Accesses to the CMOS memory contents are done using an indirect IO port
pair.  Therefore Xen needs to cache the guest ch |
| 🟠 high | CVE-2026-62431: The logic to handle periodic Viridian STIMERs performs a division with an
unchecked use… | — | The logic to handle periodic Viridian STIMERs performs a division with an
unchecked user-controlled divisor value, that  |
| 🟠 high | CVE-2026-62432: The EVTCHNOP_expand_array hypercall checks for whether FIFO event
channels are enabled,… | — | The EVTCHNOP_expand_array hypercall checks for whether FIFO event
channels are enabled, but without holding the correct  |
| 🟠 high | CVE-2026-62433: Parts of the DM_OP handling code assumes the caller has provided the
required number of… | — | Parts of the DM_OP handling code assumes the caller has provided the
required number of buffers for the given operation  |
| 🟠 high | CVE-2026-59878: Improper Input Validation vulnerability in Apache ActiveMQ AMQP, Apache ActiveMQ, Apach… | — | Improper Input Validation vulnerability in Apache ActiveMQ AMQP, Apache ActiveMQ, Apache ActiveMQ All.

A remote unauthe |
| 🟠 high | CVE-2026-8164: Uncontrolled Search Path Element vulnerability in ArkSigner Software and Hardware Indus… | — | Uncontrolled Search Path Element vulnerability in ArkSigner Software and Hardware Industry and Trade Inc. ArkSigner Desk |
| 🟠 high | CVE-2026-45293: WordPress Coding Standards is a set of PHP_CodeSniffer rules (sniffs) that enforce Word… | — | WordPress Coding Standards is a set of PHP_CodeSniffer rules (sniffs) that enforce WordPress coding conventions. From 0. |
| 🟠 high | CVE-2026-54593: Pterodactyl is a free, open-source game server management panel. | — | Pterodactyl is a free, open-source game server management panel. Prior to Panel version 1.12.3 and Wings version 1.12.2, |
| 🟠 high | CVE-2026-16313: A flaw was found in sg3_utils. | — | A flaw was found in sg3_utils. The sg_inq command, when invoked with the --export option, outputs device identification  |
| 🟠 high | CVE-2026-67182: Rouille 0.3.3 through 3.6.2 contains an HTTP request smuggling vulnerability that allow… | — | Rouille 0.3.3 through 3.6.2 contains an HTTP request smuggling vulnerability that allows remote attackers to bypass acce |
| 🟠 high | CVE-2026-16496: The terraform-mcp-server before version 1.1.0 is vulnerable to an authorization bypass … | — | The terraform-mcp-server before version 1.1.0 is vulnerable to an authorization bypass in the streamable-HTTP stateful t |
| 🟠 high | CVE-2026-13463: IBM Cloud Pak System 2.3.5.0 could allow a local attacker to obtain sensitive informati… | — | IBM Cloud Pak System 2.3.5.0 could allow a local attacker to obtain sensitive information due to the insertion of creden |
| 🟠 high | CVE-2026-14893: IBM Observability with Instana (Agent) Build 1.0.303 through 1.0.320 IBM Instana Node.j… | — | IBM Observability with Instana (Agent) Build 1.0.303 through 1.0.320 IBM Instana Node.js tracer component @instana/core  |
| 🟠 high | CVE-2026-14996: IBM Aspera Faspex 5 5.0.0 through 5.0.15.4 has addressed a vulnerability related to ses… | — | IBM Aspera Faspex 5 5.0.0 through 5.0.15.4 has addressed a vulnerability related to session management. |
| 🟠 high | CVE-2026-15064: IBM WebSphere Application Server 9.0, and 8.5 and IBM WebSphere Application Server - Li… | — | IBM WebSphere Application Server 9.0, and 8.5 and IBM WebSphere Application Server - Liberty 17.0.0.3 through 26.0.0.7 i |
| 🟠 high | CVE-2026-15325: IBM WebSphere Application Server 9.0, and 8.5 and IBM WebSphere Application Server - Li… | — | IBM WebSphere Application Server 9.0, and 8.5 and IBM WebSphere Application Server - Liberty 17.0.0.3 through 26.0.0.7 i |
| 🟠 high | CVE-2026-15328: IBM WebSphere Application Server 9.0, and 8.5 and IBM WebSphere Application Server - Li… | — | IBM WebSphere Application Server 9.0, and 8.5 and IBM WebSphere Application Server - Liberty 17.0.0.3 through 26.0.0.7 i |
| 🟠 high | CVE-2026-50736: pglogical Arbitrary Command Execution Vulnerability | — | [cvefeed.io] pglogical Arbitrary Command Execution Vulnerability |
| 🟠 high | CVE-2026-56821: Netty is an asynchronous, event-driven network application framework. | — | Netty is an asynchronous, event-driven network application framework. Prior to versions 4.1.136.Final and 4.2.16.Final,  |
| 🟠 high | CVE-2026-56822: Netty is an asynchronous, event-driven network application framework. | — | Netty is an asynchronous, event-driven network application framework. Prior to versions 4.1.136.Final and 4.2.16.Final,  |
| 🟠 high | CVE-2026-22068: Regular Expression without Anchors vulnerability in Apache Traffic Server. | — | Regular Expression without Anchors vulnerability in Apache Traffic Server.

This issue affects Apache Traffic Server: fr |
| 🟠 high | CVE-2026-24033: Inconsistent Interpretation of HTTP Requests ('HTTP Request/Response Smuggling') vulner… | — | Inconsistent Interpretation of HTTP Requests ('HTTP Request/Response Smuggling') vulnerability in Apache Traffic Server. |
| 🟠 high | CVE-2026-58153: Apache Traffic Server forwards HTTP/2 origin trailers to HTTP/1 clients without proper … | — | Apache Traffic Server forwards HTTP/2 origin trailers to HTTP/1 clients without proper chunked framing when converting H |
| 🟠 high | CVE-2026-58186: The Apache Traffic Server webp_transform plugin can decode unsafely and serve mislabele… | — | The Apache Traffic Server webp_transform plugin can decode unsafely and serve mislabeled, cacheable responses.

This iss |
| 🟠 high | CVE-2026-65943: Joomla Extension - rolandd.com - Unauthenticated directory creation RO CSVI < 9.11.0 | — | Joomla Extension - rolandd.com - Unauthenticated directory creation RO CSVI < 9.11.0 |
| 🟠 high | CVE-2026-54574: proot-distro is a utility for managing proot containers. | — | proot-distro is a utility for managing proot containers. Prior to version 5.1.5, proot-distro install extracted plain ta |
| 🟠 high | CVE-2026-54727: proot-distro is a utility for managing proot containers. | — | proot-distro is a utility for managing proot containers. Prior to version 5.1.6, proot-distro restore accepted hardlink  |
| 🟠 high | CVE-2026-40272: Improper Input Validation in the decode() function of the traceparser library could all… | `T1190` | Improper Input Validation in the decode() function of the traceparser library could allow an attacker with a corrupted k |
| 🟠 high | CVE-2026-8497: Improper certificate validation in the Devolutions Server connection handling in Devolu… | — | Improper certificate validation in the Devolutions Server connection handling in Devolutions Password Manager 2026.2.1.0 |
| 🟠 high | CVE-2026-67427: Flyto2 Core is an execution kernel for automation and AI-agent workflows. | — | Flyto2 Core is an execution kernel for automation and AI-agent workflows. Prior to 2.26.6, the workflow engine variable  |
| 🟠 high | CVE-2026-12436: GitLab has remediated an issue in GitLab CE/EE affecting all versions from 18.0 before … | — | GitLab has remediated an issue in GitLab CE/EE affecting all versions from 18.0 before 19.0.5, 19.1 before 19.1.3, and 1 |
| 🟠 high | CVE-2026-67595: VaahCMS versions 2.0.0 through 2.3.4 contain a malicious obfuscated JavaScript payload … | — | VaahCMS versions 2.0.0 through 2.3.4 contain a malicious obfuscated JavaScript payload embedded in the Blade template re |
| 🟠 high | CVE-2026-67431: MCP Ruby SDK: Ruby SSE Session Poisoning | — | [cvefeed.io] MCP Ruby SDK: Ruby SSE Session Poisoning |
| 🟠 high | CVE-2026-18236: Google-ADK Continuation Forgery | — | [cvefeed.io] Google-ADK Continuation Forgery |
| 🟠 high | CVE-2026-8338: Authentication and Authorization Bypass in Coverity Connect | — | [cvefeed.io] Authentication and Authorization Bypass in Coverity Connect |
| 🟠 high | CVE-2026-62246: Kamaji: TenantControlPlane namespace/name collision binds two tenants to the same SQL d… | — | [cvefeed.io] Kamaji: TenantControlPlane namespace/name collision binds two tenants to the same SQL datastore schema + DB |
| 🟠 high | CVE-2026-63362: o6 Automation open62541 Integer Underflow | — | [cvefeed.io] o6 Automation open62541 Integer Underflow |
| 🟠 high | CVE-2026-66420: MeshCentral Cross-Site WebSocket Hijacking via Origin Validation Bypass on Self-Signed … | — | [cvefeed.io] MeshCentral Cross-Site WebSocket Hijacking via Origin Validation Bypass on Self-Signed Certificate Deployme |
| 🟠 high | CVE-2026-68503: LazyOwn: Default C2 Operator Credentials Enable Administrative Access to C2 Dashboard | — | [cvefeed.io] LazyOwn: Default C2 Operator Credentials Enable Administrative Access to C2 Dashboard |
| 🟠 high | CVE-2026-67207: Wolf CMS 0.8.3.1 Authorization Bypass via BackupRestoreController | — | [cvefeed.io] Wolf CMS 0.8.3.1 Authorization Bypass via BackupRestoreController |
| 🟠 high | --hiljson (npm) | — | Malicious package listed in the OpenSSF malicious-packages directory. Review version ranges and installation provenance. |
| 🟠 high | --legacy-peer-deps (npm) | — | Malicious package listed in the OpenSSF malicious-packages directory. Review version ranges and installation provenance. |
| 🟠 high | --no-audit (npm) | — | Malicious package listed in the OpenSSF malicious-packages directory. Review version ranges and installation provenance. |
| | _+3082 more…_ | | |

## Medium-Severity Vulnerabilities (26)

_Medium-severity issues across miscellaneous products and services._

| Severity | Finding | MITRE | Description |
|----------|---------|-------|-------------|
| 🟡 medium | Anubis Backdoor (malware) | — | Anubis Backdoor used by FIN7 🇷🇺: Savage Ladybug (Also known as: ATK32, CARBON SPIDER, Calcium, Carbanak, Carbon Spider |
| 🟡 medium | BlackMoon (other) | — | MD5 |
| 🟡 medium | BQTLock (other) | — | DLS: yywhylvqeqynzik6ibocb53o2nat7lmzn5ynjpar3stndzcgmy6dkgid.onion |
| 🟡 medium | CanisterWorm (malware) | — | 5 Shell Files found with 0 VT Detections |
| 🟡 medium | ClearFake (other) | — | The following are obtained via Powershell Command Snippet: "POwErsHeLL -w 1" |
| 🟡 medium | ClickFix (other) | — | DOMAINS |
| 🟡 medium | Cobalt Strike (other) | — | MD5: 605eac2a284080792906e71ce7686225 |
| 🟡 medium | Coinminer (other) | — | MD5: 2589739c63d28aa7e58767928f198ef8 |
| 🟡 medium | D1R (other) | — | INTEL |
| 🟡 medium | DarkKomet (other) | — | MD5: 51927f923d06e3219f61615b9526a663 |
| 🟡 medium | GenieLocker (other) | — | Ransomware targeting Russia |
| 🟡 medium | Global Group (other) | — | INTEL🔍 |
| 🟡 medium | Lamashtu (other) | — | INTEL |
| 🟡 medium | Lotok (other) | — | MD5: fa2efb3b704384a5fe40b382738657c1 |
| 🟡 medium | Lumma C2 (c2) | — | DOMAINS |
| 🟡 medium | Metasploit ELF Trojan (malware) | — | Malware: Metasploit |
| 🟡 medium | Mimikatz (other) | — | NOTE: Following samples are aggregated from different sources, hence may contain FPs |
| 🟡 medium | Mimikatz Powershell (other) | — | MD5 |
| 🟡 medium | Powershell (other) | — | Here is the collection of Malicious Powershell files out in the wild. |
| 🟡 medium | PrivateLoader (other) | — | MD5 |
| 🟡 medium | RansomedVC (other) | — | The group had launched a new website with title "RebornVC" listing 2 victims, but not leaking the data |
| 🟡 medium | Rhadamanthys Stealer (stealer) | — | TOR SITES |
| 🟡 medium | Shai-Hulud (other) | — | SHA256 |
| 🟡 medium | Sliver C2 (c2) | — | SLIVER C2 |
| 🟡 medium | TeamPCP (other) | — | ARTICLE: https://theravenfile.com/2026/04/02/inside-teampcps-shell-arsenal/ |
| 🟡 medium | XWorm (malware) | — | Following are the IOCs observed for XWorm which is having the filename as "XClient.exe" |

## Ransomware activity (ransomware.live + peers) (364)

_Victim claims rolled up from the 7 daily briefings covering this window. Most active groups: thegentlemen (54), qilin (40), crpxo (33)._

| Severity | Finding | MITRE | Description |
|----------|---------|-------|-------------|
| 🟠 high | Akribis Systems Pte Ltd — claimed by nightspire | — | Akribis Systems Pte Ltd listed by nightspire. |
| 🟠 high | American Hospice & Home Health Services (Ahhh Care) — claimed by crpxo (US) | — | Sector: Healthcare / Hospice \| Data leaked: 11.3 GB |
| 🟠 high | BH Security, LLC. (brinkshome.com) — claimed by shinyhunters | — | Over 4.9 million Salesforce records containing some PII was compromised.  This is a final warning to reach out by 30 Jul |
| 🟠 high | BH-Security-LLC.-brinkshome.com — claimed by shinyhunters | — | Ransomware group called shinyhunters claims attack for BH-Security-LLC.-brinkshome.com. We identify this attack with fol |
| 🟠 high | bnpdist.com — claimed by safepay | — | Headquartered in New York City, the company has been operating since 1979 and supplies restaurants, hotels, retailers, a |
| 🟠 high | braywoodschool.co.uk — claimed by safepay | — | Founded in 1858, the school has more than 165 years of educational history and serves children from early years through  |
| 🟠 high | Bright Star Partners Insurance — claimed by crpxo (US) | — | Sector: Insurance / Financial Services \| Data leaked: 41.8 GB |
| 🟠 high | Building Envelope Systems — claimed by genesis | — | A reputable construction company based in Plainville, MA |
| 🟠 high | Coca-Cola / Fairlife — claimed by anubis | — | Major data breach at company owned by Coca Cola. |
| 🟠 high | CodeConductor.ai — claimed by crpxo (US) | — | Sector: Technology / AI / SaaS \| Data leaked: 52.4 GB |
| 🟠 high | Colliers Real Estate — claimed by coinbasecartel | — | Real Estate - $5.7 Billion |
| 🟠 high | Diffusion de Produits Inoxydables — claimed by nightspire | — | Diffusion de Produits Inoxydables listed by nightspire. |
| 🟠 high | Dignity Phoenix — claimed by crpxo (US) | — | Sector: Non-Profit / Social Services \| Data leaked: 5.4 GB |
| 🟠 high | eCare Platform — claimed by crpxo (US) | — | Sector: Healthcare / Technology \| Data leaked: 14.2 GB |
| 🟠 high | Elko Dental Specialists — claimed by crpxo (US) | — | Sector: Healthcare / Dental \| Data leaked: 7.8 GB |
| 🟠 high | Ernst & Young — claimed by shinyhunters | — | Yes it was us. Now come talk to us. We have been trying to reach you. If you do not come talk to us within the given dea |
| 🟠 high | FLP Law Group LLP — claimed by crpxo (US) | — | Sector: Legal / Bankruptcy \| Data leaked: 42.1 GB |
| 🟠 high | Furama Bukit Bintang — claimed by nightspire | — | Furama Bukit Bintang listed by nightspire. |
| 🟠 high | Groupe Fenwick — claimed by qilin | — | Business Services |
| 🟠 high | Hardware Asesorias Software Ltda — claimed by deadlock | — | Hardware Asesorías Software Ltda (HAS Ltda) is a technology provider based in Bucaramanga, Colombia, specializing in the |
| 🟠 high | haugbuersten.de — claimed by safepay | — | Although the company in its current industrial form was founded in 1962, its family-owned brush-making tradition dates b |
| 🟠 high | Hinduja Tech \| BMW Group & Škoda Auto — claimed by globalsecretgroup | — | Overview

Country: India \| Website: hindujatech.com \| Revenue: $381 Million \| Industry: Engineering Services, Architec |
| 🟠 high | Host & Protect (RedBlink) — claimed by crpxo (IE) | — | Sector: Web Hosting / Security \| Data leaked: 156.2 GB |
| 🟠 high | hst.eu — claimed by safepay | — | Headquartered in Kressbronn am Bodensee, Germany, the company traces its mechanical engineering heritage back to 1950, w |
| 🟠 high | https://www.nitrex.in — claimed by orion | — | https://www.nitrex.in listed by orion. |
| 🟠 high | Infinity Pipeline,Inc. — claimed by genesis | — | A family owned, local construction company. |
| 🟠 high | IPTV Platform — claimed by crpxo (US) | — | Sector: Technology / Video Streaming \| Data leaked: 3.2 GB |
| 🟠 high | JD Young — claimed by termite (CN) | — | JD Young helps financial institutions simplify workflow processes, automate the flow of information, adhere to complianc |
| 🟠 high | JJP Slip Forming Inc. — claimed by genesis | — | A company that operates in the Restaurants industry |
| 🟠 high | K. Venkatesh, Co — claimed by nightspire | — | K. Venkatesh, Co listed by nightspire. |
| 🟠 high | Katathani Phuket Beach Resort — claimed by dragonforce | — | Katathani Phuket Beach Resort is a luxury beachfront resort located on Kata Noi Beach in Phuket, Thailand, offering a ra |
| 🟠 high | Kates Nussman Ellis Earle & Landolfi LLP — claimed by nightspire | — | Kates Nussman Ellis Earle & Landolfi LLP listed by nightspire. |
| 🟠 high | Kates Nussman Ellis Earle &amp; Landolfi LLP — claimed by nightspire (US) | — | Data is not available now.… |
| 🟠 high | KSL Dirtworks LLC — claimed by nightspire | — | KSL Dirtworks LLC listed by nightspire. |
| 🟠 high | landesmuseum.de — claimed by safepay | — | Established in 1919, the museum preserves and presents more than 50,000 years of human cultural history, ranging from pr |
| 🟠 high | Leah Walker Orthodontics — claimed by crpxo (US) | — | Sector: Healthcare / Orthodontics \| Data leaked: 8.3 GB |
| 🟠 high | Louisiana Coalition Against \| Domestic Violence — claimed by globalsecretgroup | — | Overview

Country: US \| Website: lcadv.org \| Revenue: $13.3 Million \| Industry: Non-Profit & Charitable Organizations  |
| 🟠 high | Louisiana-Coalition-Against--Domestic-Violence — claimed by global | — | Ransomware group called Global Secret Group claims attack for Louisiana-Coalition-Against--Domestic-Violence. We identif |
| 🟠 high | Marketech — claimed by crpxo | — | Ransomware group called CRPxO claims attack for Marketech. We identify this attack with following hash code: df1497d678b |
| 🟠 high | MKS Transformator — claimed by nightspire | — | MKS Transformator listed by nightspire. |
| 🟠 high | moebelmayer.de — claimed by safepay | — | Founded in 1952 and headquartered in Ahrensburg, Schleswig-Holstein, the family-owned company has more than seventy year |
| 🟠 high | MRO Aerospace — claimed by crpxo (US) | — | Sector: Aerospace / Defense \| Data leaked: 87.3 GB |
| 🟠 high | OPTIDEA GmbH — claimed by nightspire | — | OPTIDEA GmbH listed by nightspire. |
| 🟠 high | paritaet-nrw.org — claimed by safepay | — | Headquartered in Wuppertal, the organization represents approximately 3,100 legally independent member organizations ope |
| 🟠 high | Park Manufacturing Corp. — claimed by globalsecretgroup | — | Overview

Country: Cambridge, Minnesota 55008, US \| Website: parkmfg.com \| Revenue: $37.9 Million \| Industry: Applianc |
| 🟠 high | Performance Data Solutions — claimed by crpxo (US) | — | Sector: Motorsport / Data Acquisition \| Data leaked: 12.8 GB |
| 🟠 high | Prei Capital — claimed by crpxo (US) | — | Sector: Financial / Capital \| Data leaked: 18.7 GB |
| 🟠 high | ProSmile Family Dental Care — claimed by crpxo (US) | — | Sector: Healthcare / Dental \| Data leaked: 9.6 GB |
| 🟠 high | Qube Aviation Catering — claimed by crpxo (US) | — | Sector: Aviation / Catering \| Data leaked: 22.5 GB |
| 🟠 high | RingCentral-Inc. — claimed by shinyhunters | — | Ransomware group called shinyhunters claims attack for RingCentral-Inc.. We identify this attack with following hash cod |
| | _+314 more…_ | | |

## IOC Dump

`657` indicators (12794 observed total, truncated for storage):

```
url  http://182.119.163.66:49885/i  # malware_download | Mozi  @ 2026-07-27 23:57:06
url  http://42.226.217.102:48667/bin.sh  # malware_download | 32-bit,elf,mips,Mozi  @ 2026-07-27 23:51:19
url  http://117.26.83.49:58079/i  # malware_download | 32-bit,arm,elf,mirai,Mozi  @ 2026-07-27 23:47:21
url  http://117.26.83.49:58079/bin.sh  # malware_download | 32-bit,arm,elf,mirai,Mozi  @ 2026-07-27 23:45:24
url  http://182.119.163.66:49885/bin.sh  # malware_download | Mozi  @ 2026-07-27 23:27:09
url  http://115.42.71.239:36758/i  # malware_download | 32-bit,elf,mips,Mozi  @ 2026-07-27 23:12:19
url  http://61.53.85.165:50764/bin.sh  # malware_download | None  @ 2026-07-27 23:07:06
url  http://119.179.255.108:50390/bin.sh  # malware_download | 32-bit,elf,mips,Mozi  @ 2026-07-27 22:54:15
url  http://37.52.153.132:32934/i  # malware_download | Mozi  @ 2026-07-27 22:52:06
url  http://85.108.65.212:50272/i  # malware_download | Mozi  @ 2026-07-27 22:42:10
url  http://125.43.18.233:33659/i  # malware_download | Mozi  @ 2026-07-27 22:37:08
url  http://123.12.27.213:44894/bin.sh  # malware_download | Mozi  @ 2026-07-27 22:37:08
url  http://27.23.67.50:57590/i  # malware_download | mirai  @ 2026-07-27 22:26:07
url  http://85.108.65.212:50272/bin.sh  # malware_download | Mozi  @ 2026-07-27 22:16:36
url  http://118.125.24.88:59343/i  # malware_download | mirai  @ 2026-07-27 22:07:08
url  http://27.215.77.0:37447/bin.sh  # malware_download | Mozi  @ 2026-07-27 22:07:07
url  http://77.247.88.98:59064/i  # malware_download | 32-bit,arm,elf,mirai,Mozi  @ 2026-07-27 22:06:20
url  http://123.252.17.79:33677/i  # malware_download | 32-bit,arm,elf,mirai,Mozi  @ 2026-07-27 21:57:23
url  http://27.23.67.50:57590/bin.sh  # malware_download | None  @ 2026-07-27 21:57:21
url  http://115.55.230.75:57358/i  # malware_download | 32-bit,elf,mips,Mozi  @ 2026-07-27 21:49:19
url  http://182.117.81.84:53513/bin.sh  # malware_download | 32-bit,elf,mips,Mozi  @ 2026-07-27 21:47:21
url  http://77.247.88.98:59064/bin.sh  # malware_download | 32-bit,arm,elf,mirai,Mozi  @ 2026-07-27 21:42:21
url  http://123.7.220.246:56408/bin.sh  # malware_download | Mozi  @ 2026-07-27 21:41:07
url  http://115.49.202.73:57357/i  # malware_download | None  @ 2026-07-27 21:37:07
url  http://123.13.72.42:38211/i  # malware_download | 32-bit,elf,mips,Mozi  @ 2026-07-27 21:28:30
url  http://1.58.225.143:41065/i  # malware_download | 32-bit,arm,elf,mirai,Mozi  @ 2026-07-27 21:25:23
url  http://115.55.230.75:57358/bin.sh  # malware_download | 32-bit,elf,mips,Mozi  @ 2026-07-27 21:24:21
url  http://219.156.41.53:40923/i  # malware_download | Mozi  @ 2026-07-27 21:17:08
url  http://42.54.83.67:37559/i  # malware_download | None  @ 2026-07-27 21:17:06
url  http://119.167.3.49:55650/bin.sh  # malware_download | Mozi  @ 2026-07-27 21:12:07
url  http://115.49.202.73:57357/bin.sh  # malware_download | None  @ 2026-07-27 21:07:07
url  http://182.127.104.102:52909/i  # malware_download | 32-bit,elf,mips,Mozi  @ 2026-07-27 21:01:27
url  http://123.252.17.79:33677/bin.sh  # malware_download | 32-bit,arm,elf,mirai,Mozi  @ 2026-07-27 21:00:36
url  http://125.44.50.221:45691/i  # malware_download | 32-bit,elf,mips,Mozi  @ 2026-07-27 21:00:22
url  http://219.156.41.53:40923/bin.sh  # malware_download | Mozi  @ 2026-07-27 20:42:06
url  http://42.225.69.32:47660/i  # malware_download | Mozi  @ 2026-07-27 20:36:06
url  http://180.190.85.135:39719/bin.sh  # malware_download | 32-bit,arm,elf,mirai,Mozi  @ 2026-07-27 20:35:22
url  http://61.54.43.141:40215/i  # malware_download | Mozi  @ 2026-07-27 20:27:07
url  http://123.14.99.150:41745/bin.sh  # malware_download | 32-bit,elf,mips,Mozi  @ 2026-07-27 20:26:25
url  http://39.74.83.192:39533/i  # malware_download | 32-bit,elf,mips,Mozi  @ 2026-07-27 20:22:26
url  http://182.114.193.246:52052/i  # malware_download | 32-bit,elf,mips,Mozi  @ 2026-07-27 20:17:19
url  http://115.53.219.93:49340/i  # malware_download | 32-bit,elf,mips,Mozi  @ 2026-07-27 20:15:25
url  http://42.225.69.32:47660/bin.sh  # malware_download | Mozi  @ 2026-07-27 20:02:17
url  http://61.54.43.141:40215/bin.sh  # malware_download | Mozi  @ 2026-07-27 19:56:07
url  http://115.53.219.93:49340/bin.sh  # malware_download | 32-bit,elf,mips,Mozi  @ 2026-07-27 19:47:29
url  http://123.11.172.243:59690/bin.sh  # malware_download | 32-bit,elf,mips,Mozi  @ 2026-07-27 19:46:24
url  http://123.11.8.183:36623/i  # malware_download | 32-bit,elf,mips,Mozi  @ 2026-07-27 19:40:14
url  http://31.77.227.110/bins/parm5  # malware_download | arm,elf,mirai,opendir,ua-wget  @ 2026-07-27 19:34:16
url  http://31.77.227.110/bins/pmips  # malware_download | elf,mips,mirai,opendir,ua-wget  @ 2026-07-27 19:34:16
url  http://31.77.227.110/bins/pppc  # malware_download | elf,mirai,opendir,PowerPC,ua-wget  @ 2026-07-27 19:34:16
url  http://31.77.227.110/bins/pmpsl  # malware_download | elf,mips,mirai,opendir,ua-wget  @ 2026-07-27 19:34:16
url  http://31.77.227.110/bins/psh4  # malware_download | elf,mirai,o
... (+49888 chars truncated)
```

---
Sources: CISA KEV, NVD, cvefeed.io, ransomware.live, ossf/malicious-packages, Daily-Hunt, URLhaus, MalwareBazaar, ThreatFox, TweetFeed
MITRE ATT&CK: T1027, T1047, T1055, T1059, T1059.007, T1068, T1070, T1078, T1106, T1190, T1203, T1497, T1562, T1574

---
*[PANOPTICON](https://pranithjain.qzz.io/threatintel/briefings) · [Full brief](https://pranithjain.qzz.io/threatintel/briefings/weekly-2026-W31)*