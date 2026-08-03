# Weekly Threat Briefing — 2026-07-20 – 2026-07-26

> **weekly** · 2026-07-20 – 2026-07-26 · Generated 2026-07-27 00:00 UTC

## Executive Summary

This week (2026-07-20 – 2026-07-26), CISA added 6 new KEV entries and 428 additional high/critical CVEs were published (NVD, cvefeed.io, MyThreatIntel), including 86 critical-severity affecting WordPress, Check Point, Microsoft. Active threat indicators per source URLhaus 2,716, ThreatFox 1,729, MalwareBazaar 853, TweetFeed 9 — 8,536 unique after cross-source dedup; all 8237 indicators (3224 malware-distribution URLs, 1417 malicious domains, 492 suspicious IPs, 3104 malware sample hashes) are included in the IOC dump. Reference only — verify all indicators in your own environment and apply vendor patches per CISA KEV due-date guidance.

## Stats

| Metric | Count |
|--------|-------|
| Findings | 744 |
| CVEs | 434 |
| KEVs | 6 |
| IOCs | 8536 |
| Critical | 86 |
| High | 345 |
| Ransomware victims | 310 |

## Critical Remote Code Execution Vulnerabilities (33)

_Vulnerabilities allowing arbitrary code execution on affected systems — patch immediately._

| Severity | Finding | MITRE | Description |
|----------|---------|-------|-------------|
| 🔴 critical | CVE-2026-63030: WordPress Core — WordPress Core Interpretation Conflict Vulnerability | `T1190` | WordPress 6.9.x before 6.9.5 and 7.0.x before 7.0.2 is affected by a REST API batch endpoint route confusion issue which |
| 🔴 critical | CVE-2026-44359: Meshtastic is an open source mesh networking solution. | `T1059` | Meshtastic is an open source mesh networking solution. Prior to version 2.7.21.1370b23, the Meshtastic GitHub repository |
| 🔴 critical | CVE-2026-16606: A vulnerability in Fujitsu Software Linux openFT and Fujitsu Software Oracle Solaris op… | `T1190` | A vulnerability in Fujitsu Software Linux openFT and Fujitsu Software Oracle Solaris openFT before version 12.1D00 allow |
| 🔴 critical | CVE-2026-14282: The GoDAM – Organize WordPress Media Library & File Manager with Unlimited Folders for … | `T1190` | The GoDAM – Organize WordPress Media Library & File Manager with Unlimited Folders for Images, Videos & more plugin for  |
| 🔴 critical | CVE-2026-15011: The Customer Support Ticket System & Helpdesk plugin for WordPress is vulnerable to Cod… | `T1190` | The Customer Support Ticket System & Helpdesk plugin for WordPress is vulnerable to Code Injection via the 'path' parame |
| 🔴 critical | CVE-2026-59543: Subscriber Remote Code Execution (RCE) in Advanced Views <= 3.8.11 versions. | `T1190` | Subscriber Remote Code Execution (RCE) in Advanced Views <= 3.8.11 versions. |
| 🔴 critical | CVE-2026-65907: In JetBrains TeamCity before 2026.1.2, 2025.11.6 code execution in Git VCS roots was po… | — | In JetBrains TeamCity before 2026.1.2, 2025.11.6 code execution in Git VCS roots was possible |
| 🔴 critical | CVE-2026-47668: DbGate is cross-platform database manager. | `T1190` | DbGate is cross-platform database manager. In versions 7.1.8 and prior, DbGate's JSON script runner (`POST /runners/star |
| 🔴 critical | CVE-2026-47752: Tugtainer is a self-hosted app for automating updates of Docker containers. | — | Tugtainer is a self-hosted app for automating updates of Docker containers. Versions prior to 1.30.2 are vulnerable to S |
| 🔴 critical | CVE-2025-71389: Cal.com (calcom/cal.diy) before 5.9.9 is vulnerable to unauthenticated remote code exec… | `T1190` | Cal.com (calcom/cal.diy) before 5.9.9 is vulnerable to unauthenticated remote code execution because it bundles a versio |
| 🟠 high | CVE-2026-16337: dotCMS Improper Authorization and Remote Code Execution | `T1190` | [cvefeed.io] dotCMS Improper Authorization and Remote Code Execution |
| 🟠 high | CVE-2026-8984: Unauthenticated RCE | `T1190` | [cvefeed.io] Unauthenticated RCE |
| 🟠 high | CVE-2026-13181: In Progress® Telerik® UI for AJAX prior to v2026.2.708, forged upload metadata can infl… | `T1190` | In Progress® Telerik® UI for AJAX prior to v2026.2.708, forged upload metadata can influence AsyncUploadTypeName process |
| 🟠 high | CVE-2026-16745: A flaw was found in odh-dashboard, the web console component of Red Hat OpenShift AI (R… | `T1190`, `T1068` | A flaw was found in odh-dashboard, the web console component of Red Hat OpenShift AI (RHOAI). Due to incorrect network b |
| 🟠 high | CVE-2026-64802: In JetBrains GoLand before 2026.2 arbitrary code execution was possible before granting… | `T1190` | In JetBrains GoLand before 2026.2 arbitrary code execution was possible before granting project trust in the Go Modules  |
| 🟠 high | CVE-2026-64803: In JetBrains GoLand before 2026.2 arbitrary code execution was possible before granting… | `T1190` | In JetBrains GoLand before 2026.2 arbitrary code execution was possible before granting project trust via the configured |
| 🟠 high | CVE-2026-64804: In JetBrains WebStorm before 2026.2 arbitrary code execution was possible before granti… | `T1190` | In JetBrains WebStorm before 2026.2 arbitrary code execution was possible before granting project trust via project-loca |
| 🟠 high | CVE-2026-64805: In JetBrains WebStorm before 2026.2 arbitrary code execution was possible before granti… | `T1190` | In JetBrains WebStorm before 2026.2 arbitrary code execution was possible before granting project trust via project-loca |
| 🟠 high | CVE-2026-64806: In JetBrains WebStorm before 2026.2 arbitrary code execution was possible before granti… | `T1190` | In JetBrains WebStorm before 2026.2 arbitrary code execution was possible before granting project trust via the configur |
| 🟠 high | CVE-2026-64807: In JetBrains WebStorm before 2026.2 arbitrary code execution was possible via a project… | `T1190` | In JetBrains WebStorm before 2026.2 arbitrary code execution was possible via a project-supplied linter configuration |
| 🟠 high | CVE-2026-64808: In JetBrains PhpStorm before 2026.2 arbitrary code execution was possible before granti… | `T1190` | In JetBrains PhpStorm before 2026.2 arbitrary code execution was possible before granting project trust via project tool |
| 🟠 high | CVE-2026-64809: In JetBrains PhpStorm before 2026.2 arbitrary code execution was possible before granti… | `T1190` | In JetBrains PhpStorm before 2026.2 arbitrary code execution was possible before granting project trust via the configur |
| 🟠 high | CVE-2026-64811: In JetBrains IntelliJ IDEA before 2026.2 arbitrary code execution was possible before g… | `T1190` | In JetBrains IntelliJ IDEA before 2026.2 arbitrary code execution was possible before granting project trust via develop |
| 🟠 high | CVE-2026-64815: In JetBrains IntelliJ IDEA before 2026.2 arbitrary code injection was possible via UI D… | `T1190` | In JetBrains IntelliJ IDEA before 2026.2 arbitrary code injection was possible via UI Designer form files |
| 🟠 high | CVE-2026-65608: Grav versions >= 1.7.0 and before 2.0.9 contain a remote code execution vulnerability. | `T1190` | Grav versions >= 1.7.0 and before 2.0.9 contain a remote code execution vulnerability. FlexDirectory::dynamicDataField() |
| 🟠 high | CVE-2026-65906: In JetBrains TeamCity before 2026.1.2, 2025.11.6 сode execution via Kotlin DSL sandbox … | — | In JetBrains TeamCity before 2026.1.2, 2025.11.6 сode execution via Kotlin DSL sandbox escape was possible |
| 🟠 high | CVE-2026-65908: In JetBrains PyCharm before 2026.1.4, 2026.2 arbitrary code execution via malicious Pyt… | `T1190` | In JetBrains PyCharm before 2026.1.4, 2026.2 arbitrary code execution via malicious Python executable was possible on un |
| 🟠 high | CVE-2026-60122: gpsd through release-3.27.5, fixed at commit 4c06658, contains a code injection vulnera… | `T1059` | gpsd through release-3.27.5, fixed at commit 4c06658, contains a code injection vulnerability in the gpsprof utility tha |
| 🟠 high | CVE-2026-16800: Improper control of generation of code ('Code Injection') in the schedule feature in De… | — | Improper control of generation of code ('Code Injection') in the schedule feature in Devolutions PowerShell Universal 20 |
| 🟠 high | CVE-2026-16801: Improper control of generation of code ('Code Injection') in the variables feature in D… | — | Improper control of generation of code ('Code Injection') in the variables feature in Devolutions PowerShell Universal 2 |
| 🟠 high | CVE-2026-65693: Microweber CMS through 2.0.20 contains a server-side template injection vulnerability t… | `T1059` | Microweber CMS through 2.0.20 contains a server-side template injection vulnerability that allows authenticated administ |
| 🟠 high | CVE-2026-66374: Knot Resolver before 6.4.1 allows remote code execution via a heap-based buffer overflo… | `T1190`, `T1203` | Knot Resolver before 6.4.1 allows remote code execution via a heap-based buffer overflow in the DoQ (DNS-over-QUIC) rece |
| 🟠 high | CVE-2026-10818: The WPForms Pro plugin for WordPress is vulnerable to Arbitrary File Upload in all vers… | `T1190` | The WPForms Pro plugin for WordPress is vulnerable to Arbitrary File Upload in all versions up to, and including, 1.10.1 |

## Command Injection (20)

_OS / shell command injection enabling attacker-controlled execution._

| Severity | Finding | MITRE | Description |
|----------|---------|-------|-------------|
| 🔴 critical | CVE-2026-54051: Network-AI is a TypeScript/Node.js multi-agent orchestrator. | — | Network-AI is a TypeScript/Node.js multi-agent orchestrator. Prior to version 5.9.1, the agent sandbox gates shell comma |
| 🔴 critical | CVE-2026-63766: GPT-SoVITS through 20250606v2pro contains an OS command injection vulnerability in webu… | `T1059` | GPT-SoVITS through 20250606v2pro contains an OS command injection vulnerability in webui.py where ASR, slice, denoise, a |
| 🔴 critical | CVE-2026-64625: AVideo before 29.0 contains an incomplete fix for CVE-2026-45578 where execAsync() re-w… | — | AVideo before 29.0 contains an incomplete fix for CVE-2026-45578 where execAsync() re-wraps escaped commands in double-q |
| 🔴 critical | CVE-2026-6516: Zohocorp ManageEngine ADAudit Plus versions before 8606 are affected by Unauthenticated… | `T1190` | Zohocorp ManageEngine ADAudit Plus versions before 8606 are affected by Unauthenticated Remote code execution due to the |
| 🔴 critical | CVE-2024-58354: cal.com (calcom repository, later renamed cal.diy) is affected by a repository takeover… | — | cal.com (calcom repository, later renamed cal.diy) is affected by a repository takeover vulnerability in its GitHub Acti |
| 🔴 critical | CVE-2026-63732: 9router 0.4.59 (fixed in 0.4.60) contains a chain of vulnerabilities: a hardcoded defau… | `T1190` | 9router 0.4.59 (fixed in 0.4.60) contains a chain of vulnerabilities: a hardcoded default password (123456) that authent |
| 🟠 high | CVE-2026-14448: An high privileged remote attacker can exploit an authenticated OS command injection vu… | `T1059` | An high privileged remote attacker can exploit an authenticated OS command injection vulnerability in the system_certifi |
| 🟠 high | CVE-2026-63108: Roo Code through 3.54.0 contains a command injection vulnerability in the auto-approve … | `T1059` | Roo Code through 3.54.0 contains a command injection vulnerability in the auto-approve execute feature that allows attac |
| 🟠 high | CVE-2026-64624: FreeRDP before 3.28.0 treats lines beginning with forward slash in RDP files as raw com… | — | FreeRDP before 3.28.0 treats lines beginning with forward slash in RDP files as raw command-line options, exposing the e |
| 🟠 high | CVE-2026-8986: Command Injection via Malicious OCPP Server | `T1059` | [cvefeed.io] Command Injection via Malicious OCPP Server |
| 🟠 high | CVE-2026-8985: Unauthenticated Command Injection | `T1059` | [cvefeed.io] Unauthenticated Command Injection |
| 🟠 high | CVE-2026-3821: Supermicro (SMC) SMASH services contain an Arbitrary code execution issue in X14DBG-DAP… | `T1190` | Supermicro (SMC) SMASH services contain an Arbitrary code execution issue in X14DBG-DAP and X14DBI.
An authorized attack |
| 🟠 high | CVE-2026-44189: A flaw was found in the Visual Studio Code Ansible Lightspeed extension's AnsiblePlaybo… | `T1190`, `T1059` | A flaw was found in the Visual Studio Code Ansible Lightspeed extension's AnsiblePlaybookRunProvider. This command injec |
| 🟠 high | CVE-2026-44190: A flaw was found in the Ansible Lightspeed Visual Studio Code extension. | `T1059` | A flaw was found in the Ansible Lightspeed Visual Studio Code extension. This Command Injection vulnerability (CWE-78) a |
| 🟠 high | CVE-2026-44191: A flaw was found in the Visual Studio Code Ansible Lightspeed extension. | `T1190`, `T1059` | A flaw was found in the Visual Studio Code Ansible Lightspeed extension. This command injection vulnerability (CWE-78) a |
| 🟠 high | CVE-2026-14881: When importing connections in Compass it is possible to override some connection option… | — | When importing connections in Compass it is possible to override some connection options that are otherwise can't be cha |
| 🟠 high | CVE-2026-16287: Improper neutralization of special elements used in an OS command ('OS command injectio… | `T1059` | Improper neutralization of special elements used in an OS command ('OS command injection') vulnerability in TUBITAK BILG |
| 🟠 high | CVE-2026-16796: Improper neutralization of argument delimiters in the install_packages() method in AWS … | — | Improper neutralization of argument delimiters in the install_packages() method in AWS Bedrock AgentCore Python SDK befo |
| 🟠 high | CVE-2026-66138: In OpenStack Ironic Python Agent through 11.6.0, a project-scoped user with the manager… | `T1190` | In OpenStack Ironic Python Agent through 11.6.0, a project-scoped user with the manager role can achieve arbitrary code  |
| 🟠 high | CVE-2026-65711: sysPass through version 3.2.11 contains an OS command injection vulnerability that allo… | `T1059` | sysPass through version 3.2.11 contains an OS command injection vulnerability that allows authenticated administrators t |

## Authentication & Authorization Bypass (64)

_Missing or broken authentication / authorisation enabling unauthorised actions._

| Severity | Finding | MITRE | Description |
|----------|---------|-------|-------------|
| 🔴 critical | CVE-2026-16232: Check Point SmartConsole — Check Point SmartConsole Improper Authentication Vulnerability | `T1078` | An authentication bypass vulnerability in the Check Point SmartConsole login process allows an unauthenticated remote at |
| 🔴 critical | CVE-2026-16242: A flaw was found in the Konnectivity proxy-server configuration for hosted control planes. | — | A flaw was found in the Konnectivity proxy-server configuration for hosted control planes. The agent-facing listener was |
| 🔴 critical | CVE-2026-44231: RT is an open source, enterprise-grade issue and ticket tracking system. | `T1068` | RT is an open source, enterprise-grade issue and ticket tracking system. Versions prior to 5.0.10, 6.0.0 and above, prio |
| 🔴 critical | CVE-2026-53595: FreeScout is a free help desk and shared inbox built with PHP's Laravel framework. | — | FreeScout is a free help desk and shared inbox built with PHP's Laravel framework. Prior to version 1.8.224, the public  |
| 🔴 critical | CVE-2026-62144: An authentication bypass vulnerability in Check Point Security Management and Multi-Dom… | `T1078` | An authentication bypass vulnerability in Check Point Security Management and Multi-Domain Security Management allows an |
| 🔴 critical | CVE-2026-15015: The MountDev AI MCP Connector for WordPress plugin for WordPress is vulnerable to autho… | — | The MountDev AI MCP Connector for WordPress plugin for WordPress is vulnerable to authorization bypass in all versions u |
| 🔴 critical | CVE-2026-64812: In JetBrains IntelliJ IDEA before 2026.2 unauthorized input injection was possible in a… | — | In JetBrains IntelliJ IDEA before 2026.2 unauthorized input injection was possible in a Remote Development session |
| 🔴 critical | CVE-2026-15981: The SAML Single Sign On – SSO Login plugin for WordPress is vulnerable to Authenticatio… | `T1078` | The SAML Single Sign On – SSO Login plugin for WordPress is vulnerable to Authentication Bypass in all versions up to, a |
| 🔴 critical | CVE-2026-47724: nebula-mesh is a self-hosted control plane for Slack Nebula mesh virtual private network. | `T1068` | nebula-mesh is a self-hosted control plane for Slack Nebula mesh virtual private network. Prior to version 0.3.4, the `/ |
| 🔴 critical | CVE-2026-56191: Improper authentication in Microsoft Exchange Online allows an unauthorized attacker to… | — | Improper authentication in Microsoft Exchange Online allows an unauthorized attacker to perform tampering over a network |
| 🔴 critical | CVE-2026-58275: Missing authorization in Azure DNS allows an unauthorized attacker to elevate privilege… | — | Missing authorization in Azure DNS allows an unauthorized attacker to elevate privileges over a network. |
| 🔴 critical | CVE-2026-62825: Improper authentication in Azure Key Vault allows an unauthorized attacker to elevate p… | — | Improper authentication in Azure Key Vault allows an unauthorized attacker to elevate privileges over a network. |
| 🔴 critical | CVE-2026-12877: The Project Management, Bug and Issue Tracking Plugin  WordPress plugin before 5.1.0 do… | `T1190` | The Project Management, Bug and Issue Tracking Plugin  WordPress plugin before 5.1.0 does not sanitise and escape user s |
| 🔴 critical | CVE-2026-15704: In Eclipse BaSyx Go Components versions up to and including 1.0.0, ABAC-enabled deploym… | — | In Eclipse BaSyx Go Components versions up to and including 1.0.0, ABAC-enabled deployments are vulnerable to an authori |
| 🔴 critical | CVE-2026-56163: Missing authentication for critical function in Microsoft Azure Kubernetes Service allo… | `T1078` | Missing authentication for critical function in Microsoft Azure Kubernetes Service allows an unauthorized attacker to el |
| 🔴 critical | CVE-2026-58630: Improper access control in Azure App Service allows an unauthorized attacker to elevate… | — | Improper access control in Azure App Service allows an unauthorized attacker to elevate privileges over a network. |
| 🔴 critical | CVE-2026-61884: The web management interface of Tycon Systems TPDIN-Monitor-WEB2

 does not perform ser… | — | The web management interface of Tycon Systems TPDIN-Monitor-WEB2

 does not perform server-side validation of credential |
| 🔴 critical | CVE-2026-66012: SiYuan before v3.7.2 contains a missing authorization vulnerability in the POST /mcp ke… | — | SiYuan before v3.7.2 contains a missing authorization vulnerability in the POST /mcp kernel endpoint, which is gated onl |
| 🟠 high | CVE-2026-63735: SurrealDB versions before 3.2.0 fail to validate namespace and database scope in custom… | — | SurrealDB versions before 3.2.0 fail to validate namespace and database scope in custom API routes, allowing authenticat |
| 🟠 high | CVE-2026-63757: SurrealDB versions before 3.1.0 contain a session hijacking vulnerability where the HTT… | — | SurrealDB versions before 3.1.0 contain a session hijacking vulnerability where the HTTP /rpc sessions method returns at |
| 🟠 high | CVE-2026-64622: Network-AI (npm: network-ai) versions 5.12.2 through 5.13.3 fail to apply the configure… | — | Network-AI (npm: network-ai) versions 5.12.2 through 5.13.3 fail to apply the configured authorization check (checkAuth/ |
| 🟠 high | CVE-2026-63429: HeyForm is an open-source form builder. | — | HeyForm is an open-source form builder. Prior to version 3.0.0-rc.9, `POST /api/upload` has no authentication guard, no  |
| 🟠 high | CVE-2026-46555: WhatsApp MCP Server is a Model Context Protocol (MCP) server for WhatsApp, enabling Cla… | — | WhatsApp MCP Server is a Model Context Protocol (MCP) server for WhatsApp, enabling Claude to read and send WhatsApp mes |
| 🟠 high | CVE-2026-48812: FreeScout is a free help desk and shared inbox built with PHP's Laravel framework. | — | FreeScout is a free help desk and shared inbox built with PHP's Laravel framework. Prior to version 1.8.221, FreeScout's |
| 🟠 high | CVE-2026-55626: xrdp is an open source RDP server. | — | xrdp is an open source RDP server. In versions 0.10.6 and prior, when an authenticated user session is initialized using |
| 🟠 high | CVE-2026-12341: This vulnerability
impacts all versions of IdentityIQ and allows an unauthenticated att… | — | This vulnerability
impacts all versions of IdentityIQ and allows an unauthenticated attacker
unauthorized access to prot |
| 🟠 high | CVE-2026-53591: FreeScout is a free help desk and shared inbox built with PHP's Laravel framework. | — | FreeScout is a free help desk and shared inbox built with PHP's Laravel framework. Prior to version 1.8.223, an unauthen |
| 🟠 high | CVE-2026-47129: NextCRM is open-source customer relationship management (CRM) software. | — | NextCRM is open-source customer relationship management (CRM) software. Versions prior to 0.12.0 have a Broken Access Co |
| 🟠 high | CVE-2026-47130: NextCRM is open-source customer relationship management (CRM) software. | — | NextCRM is open-source customer relationship management (CRM) software. Versions prior to 0.12.0 have a Broken Object Le |
| 🟠 high | CVE-2026-47198: Paymenter is a free and open-source webshop solution for management of hosting services. | — | Paymenter is a free and open-source webshop solution for management of hosting services. In versions prior to 1.5.1, the |
| 🟠 high | CVE-2026-55544: NextCRM is open-source customer relationship management (CRM) software. | — | NextCRM is open-source customer relationship management (CRM) software. In version 0.12.1, the MCP campaign tools expose |
| 🟠 high | CVE-2026-55550: NextCRM is open-source customer relationship management (CRM) software. | — | NextCRM is open-source customer relationship management (CRM) software. The CRM product catalog is an organization-wide  |
| 🟠 high | CVE-2026-13381: VSee Clinic and API Insecure Direct Object Reference in File API Allows Unauthorized Fi… | — | [cvefeed.io] VSee Clinic and API Insecure Direct Object Reference in File API Allows Unauthorized File Access and Deleti |
| 🟠 high | CVE-2026-61425: Joomla Extension - balbooa.com - Authentication bypass in Gridbox &lt; 1.6.0 | `T1078` | [cvefeed.io] Joomla Extension - balbooa.com - Authentication bypass in Gridbox &lt; 1.6.0 |
| 🟠 high | CVE-2026-4773: Improper validation of specified type of input vulnerability in Magarsus Consulting Ltd. | `T1078` | Improper validation of specified type of input vulnerability in Magarsus Consulting Ltd. Co. IDM-MFA allows Authenticati |
| 🟠 high | CVE-2026-65013: Onlook through 0.2.32, fixed in commit 423e2e9, contains a broken object level authoriz… | — | Onlook through 0.2.32, fixed in commit 423e2e9, contains a broken object level authorization vulnerability that allows a |
| 🟠 high | CVE-2026-13078: A vulnerability was discovered in MongoDB Server where the server-side MozJS scripting … | — | A vulnerability was discovered in MongoDB Server where the server-side MozJS scripting engine unconditionally registered |
| 🟠 high | CVE-2026-22049: NetApp ONTAP WebAuthn Authentication Bypass Vulnerability | `T1078` | [cvefeed.io] NetApp ONTAP WebAuthn Authentication Bypass Vulnerability |
| 🟠 high | CVE-2026-12082: The Praison AI SEO WordPress plugin before 5.0.7 does not perform authorization checks … | — | The Praison AI SEO WordPress plugin before 5.0.7 does not perform authorization checks on several of its REST API routes |
| 🟠 high | CVE-2026-14291: The security-ninja-premium WordPress plugin before 5.290 does not verify the second aut… | — | The security-ninja-premium WordPress plugin before 5.290 does not verify the second authentication factor in one of its  |
| 🟠 high | CVE-2024-58330: A missing authentication check in Bosch IP cameras of families CPP13 and CPP14 allows a… | `T1078` | A missing authentication check in Bosch IP cameras of families CPP13 and CPP14 allows an unauthenticated attacker to ret |
| 🟠 high | CVE-2026-57367: Subscriber Broken Access Control in WP Booking System < 5.12.8.1 versions. | — | Subscriber Broken Access Control in WP Booking System < 5.12.8.1 versions. |
| 🟠 high | CVE-2026-59545: Unauthenticated Broken Authentication in miniOrange Discord Integration <= 2.2.4 versions. | — | Unauthenticated Broken Authentication in miniOrange Discord Integration <= 2.2.4 versions. |
| 🟠 high | CVE-2026-59547: Unauthenticated Broken Access Control in Payment Gateway for PayPal on WooCommerce <= 9… | — | Unauthenticated Broken Access Control in Payment Gateway for PayPal on WooCommerce <= 9.1.4 versions. |
| 🟠 high | CVE-2026-61943: Unauthenticated Broken Access Control in WPDM – Premium Packages <= 6.2.0 versions. | — | Unauthenticated Broken Access Control in WPDM – Premium Packages <= 6.2.0 versions. |
| 🟠 high | CVE-2026-61954: Unauthenticated Broken Access Control in PayU India <= 3.8.9 versions. | — | Unauthenticated Broken Access Control in PayU India <= 3.8.9 versions. |
| 🟠 high | CVE-2026-64814: In JetBrains IntelliJ IDEA before 2026.2 unauthorized file access was possible in a Rem… | — | In JetBrains IntelliJ IDEA before 2026.2 unauthorized file access was possible in a Remote Development session |
| 🟠 high | CVE-2026-65495: Unauthenticated Broken Access Control in Dokan Pro <= 5.0.3 versions. | — | Unauthenticated Broken Access Control in Dokan Pro <= 5.0.3 versions. |
| 🟠 high | CVE-2026-65500: Unauthenticated Broken Access Control in Manual - Documentation, Knowledge Base & Educa… | — | Unauthenticated Broken Access Control in Manual - Documentation, Knowledge Base & Education WordPress Theme <= 7.5.4 ver |
| 🟠 high | CVE-2026-65895: Grav API Plugin versions before 1.0.10 fail to restrict write access to security-critic… | — | Grav API Plugin versions before 1.0.10 fail to restrict write access to security-critical plugin configuration scopes, a |
| | _+14 more…_ | | |

## Privilege Escalation (18)

_Vulnerabilities enabling escalation to higher privileges._

| Severity | Finding | MITRE | Description |
|----------|---------|-------|-------------|
| 🔴 critical | CVE-2026-59540: Unauthenticated Privilege Escalation in SMS Alert Order Notifications <= 3.9.6 versions. | `T1068` | Unauthenticated Privilege Escalation in SMS Alert Order Notifications <= 3.9.6 versions. |
| 🔴 critical | CVE-2026-61951: Unauthenticated Privilege Escalation in TrueBooker <= 1.2.3 versions. | `T1068` | Unauthenticated Privilege Escalation in TrueBooker <= 1.2.3 versions. |
| 🟠 high | CVE-2026-21824: HCL Commerce contains an privilege escalation vulnerability that could allow denial of … | `T1068` | HCL Commerce contains an privilege escalation vulnerability that could allow denial of service, disclosure of user perso |
| 🟠 high | CVE-2026-14551: The servereye client (also known as sensorhub, technically ClientAgentContainerService)… | `T1068` | The servereye client (also known as sensorhub, technically ClientAgentContainerService) versions 20.15 and earlier are v |
| 🟠 high | CVE-2026-65603: The Grav Login plugin (grav-plugin-login) versions <= 3.8.11 contain a privilege escala… | `T1190`, `T1068` | The Grav Login plugin (grav-plugin-login) versions <= 3.8.11 contain a privilege escalation flaw in the authenticated pr |
| 🟠 high | CVE-2026-62145: A vulnerability in Check Point Gaia Portal allows an authenticated attacker with read-o… | — | A vulnerability in Check Point Gaia Portal allows an authenticated attacker with read-only Gaia Portal privileges to exe |
| 🟠 high | CVE-2026-16607: A vulnerability in Fujitsu Software Linux openFT and Fujitsu Software Oracle Solaris op… | `T1068` | A vulnerability in Fujitsu Software Linux openFT and Fujitsu Software Oracle Solaris openFT before version 12.1D00 allow |
| 🟠 high | CVE-2026-15017: The MDJM Event Management plugin for WordPress is vulnerable to Privilege Escalation in… | `T1068` | The MDJM Event Management plugin for WordPress is vulnerable to Privilege Escalation in all versions up to, and includin |
| 🟠 high | CVE-2026-59541: Subscriber Privilege Escalation in WP BASE Booking <= 6.3.1 versions. | `T1068` | Subscriber Privilege Escalation in WP BASE Booking <= 6.3.1 versions. |
| 🟠 high | CVE-2026-65897: Grav API Plugin versions before 1.0.10 fail to validate the groups field in Invitations… | — | Grav API Plugin versions before 1.0.10 fail to validate the groups field in InvitationsController::create(), allowing au |
| 🟠 high | CVE-2026-12736: The Wpify Woo plugin for WordPress is vulnerable to Privilege Escalation in versions up… | `T1068` | The Wpify Woo plugin for WordPress is vulnerable to Privilege Escalation in versions up to, and including, 5.4.16. This  |
| 🟠 high | CVE-2026-66141: Exim before 4.99.5 allows .forward privilege escalation because force_command for a pip… | `T1068` | Exim before 4.99.5 allows .forward privilege escalation because force_command for a pipe transport is mishandled. |
| 🟠 high | CVE-2026-12497: The Paid Membership Plugin, Ecommerce, User Registration Form, Login Form, User Profile… | — | The Paid Membership Plugin, Ecommerce, User Registration Form, Login Form, User Profile & Restrict Content  WordPress pl |
| 🟠 high | CVE-2026-12981: The CAFEHAUS API WordPress plugin through 1.0.0 does not have any authentication or aut… | — | The CAFEHAUS API WordPress plugin through 1.0.0 does not have any authentication or authorisation when updating user pas |
| 🟠 high | CVE-2026-14172: Rapid7 InsightVM, Nexpose, and the Insight Agent execute discovered executables during … | — | Rapid7 InsightVM, Nexpose, and the Insight Agent execute discovered executables during authenticated assessment without  |
| 🟠 high | CVE-2026-49744: Kernel software installed and running inside a Guest VM may post improper commands to t… | `T1068` | Kernel software installed and running inside a Guest VM may post improper commands to the GPU Firmware to trigger a writ |
| 🟠 high | CVE-2026-49745: Kernel software installed and running inside a Guest VM may post improper commands to t… | — | Kernel software installed and running inside a Guest VM may post improper commands to the GPU Firmware to trigger a writ |
| 🟠 high | CVE-2026-61892: Weintek cMT3092X HMI allows a non-privileged user to modify tokens to escalate privileges. | — | Weintek cMT3092X HMI allows a non-privileged user to modify tokens to escalate privileges. |

## SQL & NoSQL Injection (26)

_Database injection vulnerabilities exposing or modifying stored data._

| Severity | Finding | MITRE | Description |
|----------|---------|-------|-------------|
| 🔴 critical | CVE-2026-2395: Improper neutralization of special elements used in an SQL command ('SQL injection') vu… | `T1190` | Improper neutralization of special elements used in an SQL command ('SQL injection') vulnerability in Xpoda Türkiye Info |
| 🔴 critical | CVE-2026-59514: Unauthenticated SQL Injection in Buddyboss Platform <= 3.0.5 versions. | `T1190` | Unauthenticated SQL Injection in Buddyboss Platform <= 3.0.5 versions. |
| 🔴 critical | CVE-2026-59525: Unauthenticated SQL Injection in Participants Database <= 2.7.8.3 versions. | `T1190` | Unauthenticated SQL Injection in Participants Database <= 2.7.8.3 versions. |
| 🔴 critical | CVE-2026-59526: Unauthenticated SQL Injection in MapSVG <= 8.14.0 versions. | `T1190` | Unauthenticated SQL Injection in MapSVG <= 8.14.0 versions. |
| 🔴 critical | CVE-2026-61948: Unauthenticated SQL Injection in WPDM – Premium Packages <= 6.2.0 versions. | `T1190` | Unauthenticated SQL Injection in WPDM – Premium Packages <= 6.2.0 versions. |
| 🔴 critical | CVE-2026-61949: Unauthenticated SQL Injection in Bookly <= 27.7 versions. | `T1190` | Unauthenticated SQL Injection in Bookly <= 27.7 versions. |
| 🔴 critical | CVE-2026-61950: Unauthenticated SQL Injection in TrueBooker <= 1.2.3 versions. | `T1190` | Unauthenticated SQL Injection in TrueBooker <= 1.2.3 versions. |
| 🔴 critical | CVE-2026-63359: The Appriss Insights (Equifax) Victim Information Notification Exchange (VINE) applicat… | — | The Appriss Insights (Equifax) Victim Information Notification Exchange (VINE) applications allow an unauthenticated att |
| 🟠 high | CVE-2026-11349: The Modern Event Calendar Pro WordPress plugin before 7.34.0, Modern Events Calendar Li… | `T1190` | The Modern Event Calendar Pro WordPress plugin before 7.34.0, Modern Events Calendar Lite WordPress plugin before 7.34.0 |
| 🟠 high | CVE-2026-16252: A security flaw has been discovered in Beijing Shenzhou Shihan Technology Multimedia In… | `T1190` | A security flaw has been discovered in Beijing Shenzhou Shihan Technology Multimedia Integrated Business Display System  |
| 🟠 high | CVE-2026-39879: Due to a missing sanitization call in [`afsql_dd_run_query`](https://github.com/syslog-… | `T1190` | Due to a missing sanitization call in [`afsql_dd_run_query`](https://github.com/syslog-ng/syslog-ng/blob/649e6e18e3459fb |
| 🟠 high | CVE-2026-47255: AgenticMail gives AI agents real email addresses and phone numbers. | — | AgenticMail gives AI agents real email addresses and phone numbers. @agenticmail/api prior to version 0.9.32 and @agenti |
| 🟠 high | CVE-2026-12987: The Events Manager  WordPress plugin before 7.3.7 does not safely handle booking-regist… | — | The Events Manager  WordPress plugin before 7.3.7 does not safely handle booking-registration data on sites using No-Use |
| 🟠 high | CVE-2026-9713: The Lumise Product Designer for WooCommerce plugin for WordPress is vulnerable to SQL I… | `T1190` | The Lumise Product Designer for WooCommerce plugin for WordPress is vulnerable to SQL Injection via the 'id' and 'table' |
| 🟠 high | CVE-2026-24552: Contributor SQL Injection in Create by Mediavine <= 2.5.3 versions. | `T1190` | Contributor SQL Injection in Create by Mediavine <= 2.5.3 versions. |
| 🟠 high | CVE-2026-25405: Contributor SQL Injection in eRoom <= 1.7.1 versions. | `T1190` | Contributor SQL Injection in eRoom <= 1.7.1 versions. |
| 🟠 high | CVE-2026-65450: Contributor SQL Injection in MapSVG <= 8.14.0 versions. | `T1190` | Contributor SQL Injection in MapSVG <= 8.14.0 versions. |
| 🟠 high | CVE-2026-65451: Contributor SQL Injection in MapSVG <= 8.14.0 versions. | `T1190` | Contributor SQL Injection in MapSVG <= 8.14.0 versions. |
| 🟠 high | CVE-2026-65454: Contributor SQL Injection in Quiz And Survey Master <= 11.2.0 versions. | `T1190` | Contributor SQL Injection in Quiz And Survey Master <= 11.2.0 versions. |
| 🟠 high | CVE-2026-65462: Administrator SQL Injection in Uncanny Automator <= 7.3.2 versions. | `T1190` | Administrator SQL Injection in Uncanny Automator <= 7.3.2 versions. |
| 🟠 high | CVE-2026-65494: Subscriber SQL Injection in Dokan Pro <= 5.0.2 versions. | `T1190` | Subscriber SQL Injection in Dokan Pro <= 5.0.2 versions. |
| 🟠 high | CVE-2026-65526: Contributor SQL Injection in Visualizer <= 4.0.6 versions. | `T1190` | Contributor SQL Injection in Visualizer <= 4.0.6 versions. |
| 🟠 high | CVE-2026-65532: Shop manager SQL Injection in Persian Woocommerce SMS <= 7.2.2 versions. | `T1190` | Shop manager SQL Injection in Persian Woocommerce SMS <= 7.2.2 versions. |
| 🟠 high | CVE-2026-16765: A vulnerability was determined in CodeAstro Online Classroom 1.0. | `T1190` | A vulnerability was determined in CodeAstro Online Classroom 1.0. Affected by this issue is some unknown functionality o |
| 🟠 high | CVE-2026-65707: Likeshop 3.0.5 Authenticated SQL Injection via adjustAccount Endpoint | `T1190` | [cvefeed.io] Likeshop 3.0.5 Authenticated SQL Injection via adjustAccount Endpoint |
| 🟡 medium | CVE-2026-60137: WordPress Core — WordPress Core SQL Injection Vulnerability | `T1190` | WordPress 6.8.x before 6.8.6, 6.9.x before 6.9.5, and 7.0.x before 7.0.2 does not properly sanitise the author__not_in p |

## Cross-Site Scripting (38)

_Reflected, stored, or DOM-based XSS in web applications._

| Severity | Finding | MITRE | Description |
|----------|---------|-------|-------------|
| 🔴 critical | CVE-2026-35198: HeyForm is an open-source form builder. | `T1068`, `T1059.007` | HeyForm is an open-source form builder. Prior to version 3.0.0-rc.7, a stored cross-site scripting (XSS) vulnerability i |
| 🔴 critical | CVE-2026-39878: Chamilo LMS versions 1.11.38 and earlier contain a stored cross-site scripting vulnerab… | `T1059.007` | Chamilo LMS versions 1.11.38 and earlier contain a stored cross-site scripting vulnerability in the user registration fo |
| 🔴 critical | CVE-2026-65605: SiYuan before v3.7.2 contains a stored cross-site scripting vulnerability in Attribute … | `T1059.007` | SiYuan before v3.7.2 contains a stored cross-site scripting vulnerability in Attribute View (database) cell rendering. A |
| 🔴 critical | CVE-2026-65606: SiYuan before v3.7.2 contains a cross-site scripting vulnerability in the siyuan:// pro… | `T1059.007` | SiYuan before v3.7.2 contains a cross-site scripting vulnerability in the siyuan:// protocol handler. When a siyuan://pl |
| 🟠 high | CVE-2026-10081: The Unlimited Elements For Elementor WordPress plugin before 2.0.11 does not sanitize o… | `T1059.007` | The Unlimited Elements For Elementor WordPress plugin before 2.0.11 does not sanitize or escape Google review content fe |
| 🟠 high | CVE-2026-12592: The SlimStat Analytics WordPress plugin before 5.5.0 does not escape a visitor-controll… | `T1059.007` | The SlimStat Analytics WordPress plugin before 5.5.0 does not escape a visitor-controlled geolocation value before outpu |
| 🟠 high | CVE-2026-12970: The LearnPress  WordPress plugin before 4.4.1 does not escape a search parameter before… | `T1059.007` | The LearnPress  WordPress plugin before 4.4.1 does not escape a search parameter before reflecting it into an HTML attri |
| 🟠 high | CVE-2026-9833: The Tag Groups is the Advanced Way to Display Your Taxonomy Terms WordPress plugin befo… | — | The Tag Groups is the Advanced Way to Display Your Taxonomy Terms WordPress plugin before 2.2.0 does not properly escape |
| 🟠 high | CVE-2026-45270: CI4MS is a CodeIgniter 4-based content management system skeleton. | `T1059.007` | CI4MS is a CodeIgniter 4-based content management system skeleton. Prior to version 0.31.9.0, the `Pages` backend module |
| 🟠 high | CVE-2026-60034: Joomla Extension - themexpert.com - Authenticated stored XSS in JMedia Extension &lt; 1… | `T1059.007` | [cvefeed.io] Joomla Extension - themexpert.com - Authenticated stored XSS in JMedia Extension &lt; 1.6.0 |
| 🟠 high | CVE-2026-12968: The Product Addons and Product Options With Custom Fields  WordPress plugin before 1.6.… | — | The Product Addons and Product Options With Custom Fields  WordPress plugin before 1.6.15 does not restrict an unauthent |
| 🟠 high | CVE-2026-7232: The FormCraft plugin for WordPress is vulnerable to Stored Cross-Site Scripting via the… | `T1059.007` | The FormCraft plugin for WordPress is vulnerable to Stored Cross-Site Scripting via the '[parameter name]' parameter in  |
| 🟠 high | CVE-2026-7534: The SUMO Reward Points plugin for WordPress is vulnerable to Unauthenticated Stored Cro… | `T1059.007` | The SUMO Reward Points plugin for WordPress is vulnerable to Unauthenticated Stored Cross-Site Scripting via the REST AP |
| 🟠 high | CVE-2026-12421: The ARforms plugin for WordPress is vulnerable to Stored Cross-Site Scripting via 'pass… | `T1059.007` | The ARforms plugin for WordPress is vulnerable to Stored Cross-Site Scripting via 'password' Field Values in all version |
| 🟠 high | CVE-2026-57370: Unauthenticated Cross Site Scripting (XSS) in Visitor Traffic Real Time Statistics Pro … | `T1059.007` | Unauthenticated Cross Site Scripting (XSS) in Visitor Traffic Real Time Statistics Pro <= 11.9.1 versions. |
| 🟠 high | CVE-2026-57374: Unauthenticated Cross Site Scripting (XSS) in Funnel Kit Funnel Builder PRO <= 3.15.0.7… | `T1059.007` | Unauthenticated Cross Site Scripting (XSS) in Funnel Kit Funnel Builder PRO <= 3.15.0.7 versions. |
| 🟠 high | CVE-2026-57397: Unauthenticated Cross Site Scripting (XSS) in Coaching <= 3.9.2 versions. | `T1059.007` | Unauthenticated Cross Site Scripting (XSS) in Coaching <= 3.9.2 versions. |
| 🟠 high | CVE-2026-57427: Unauthenticated Cross Site Scripting (XSS) in Download Monitor - WPForms Lock <= 1.0.4 … | `T1059.007` | Unauthenticated Cross Site Scripting (XSS) in Download Monitor - WPForms Lock <= 1.0.4 versions. |
| 🟠 high | CVE-2026-57428: Unauthenticated Cross Site Scripting (XSS) in Sprout Clients <= 3.2.3 versions. | `T1059.007` | Unauthenticated Cross Site Scripting (XSS) in Sprout Clients <= 3.2.3 versions. |
| 🟠 high | CVE-2026-57699: Subscriber Cross Site Scripting (XSS) in Slider Pro <= 4.8.13 versions. | `T1059.007` | Subscriber Cross Site Scripting (XSS) in Slider Pro <= 4.8.13 versions. |
| 🟠 high | CVE-2026-57701: Unauthenticated Cross Site Scripting (XSS) in Real Estate Manager Pro <= 12.8.5 versions. | `T1059.007` | Unauthenticated Cross Site Scripting (XSS) in Real Estate Manager Pro <= 12.8.5 versions. |
| 🟠 high | CVE-2026-57704: Unauthenticated Cross Site Scripting (XSS) in Smart Manager <= 8.90.0 versions. | `T1059.007` | Unauthenticated Cross Site Scripting (XSS) in Smart Manager <= 8.90.0 versions. |
| 🟠 high | CVE-2026-57735: Unauthenticated Cross Site Scripting (XSS) in Breakdance <= 2.7.1 versions. | `T1059.007` | Unauthenticated Cross Site Scripting (XSS) in Breakdance <= 2.7.1 versions. |
| 🟠 high | CVE-2026-57767: Unauthenticated Cross Site Scripting (XSS) in WP Google Maps Pro <= 10.1.02 versions. | `T1059.007` | Unauthenticated Cross Site Scripting (XSS) in WP Google Maps Pro <= 10.1.02 versions. |
| 🟠 high | CVE-2026-57769: Unauthenticated Cross Site Scripting (XSS) in Grand Photography <= 5.7.8 versions. | `T1059.007` | Unauthenticated Cross Site Scripting (XSS) in Grand Photography <= 5.7.8 versions. |
| 🟠 high | CVE-2026-57809: Unauthenticated Cross Site Scripting (XSS) in AffiliateWP <= 2.34.0 versions. | `T1059.007` | Unauthenticated Cross Site Scripting (XSS) in AffiliateWP <= 2.34.0 versions. |
| 🟠 high | CVE-2026-59512: Unauthenticated Cross Site Scripting (XSS) in Product Enquiry for WooCommerce <= 2.2.34… | `T1059.007` | Unauthenticated Cross Site Scripting (XSS) in Product Enquiry for WooCommerce <= 2.2.34.43 versions. |
| 🟠 high | CVE-2026-59517: Unauthenticated Cross Site Scripting (XSS) in Easy Form Builder <= 4.0.12 versions. | `T1059.007` | Unauthenticated Cross Site Scripting (XSS) in Easy Form Builder <= 4.0.12 versions. |
| 🟠 high | CVE-2026-61944: Unauthenticated Cross Site Scripting (XSS) in Bookly <= 27.7 versions. | `T1059.007` | Unauthenticated Cross Site Scripting (XSS) in Bookly <= 27.7 versions. |
| 🟠 high | CVE-2026-61947: Unauthenticated Cross Site Scripting (XSS) in Form Vibes – Database Manager for Forms <… | `T1059.007` | Unauthenticated Cross Site Scripting (XSS) in Form Vibes – Database Manager for Forms <= 1.5.2 versions. |
| 🟠 high | CVE-2026-65492: Unauthenticated Cross Site Scripting (XSS) in Dokan Pro <= 5.0.0 versions. | `T1059.007` | Unauthenticated Cross Site Scripting (XSS) in Dokan Pro <= 5.0.0 versions. |
| 🟠 high | CVE-2026-65510: Unauthenticated Cross Site Scripting (XSS) in PeproDev Ultimate Invoice <= 2.2.6 versions. | `T1059.007` | Unauthenticated Cross Site Scripting (XSS) in PeproDev Ultimate Invoice <= 2.2.6 versions. |
| 🟠 high | CVE-2026-65511: Unauthenticated Cross Site Scripting (XSS) in Manual - Documentation, Knowledge Base & … | `T1059.007` | Unauthenticated Cross Site Scripting (XSS) in Manual - Documentation, Knowledge Base & Education WordPress Theme <= 7.5. |
| 🟠 high | CVE-2026-65898: DOMPurify before 3.4.11 fails to clone the ALLOWED_ATTR allowlist when setConfig() is u… | `T1059.007` | DOMPurify before 3.4.11 fails to clone the ALLOWED_ATTR allowlist when setConfig() is used with an uponSanitizeAttribute |
| 🟠 high | CVE-2026-15968: Improper neutralization of input during web page generation ('cross-site scripting') vu… | `T1059.007` | Improper neutralization of input during web page generation ('cross-site scripting') vulnerability in Progress MOVEit Tr |
| 🟠 high | CVE-2024-58353: Cal.com (repository calcom/cal.diy) in versions <= 4.7.15 is vulnerable to cross-site s… | `T1059.007` | Cal.com (repository calcom/cal.diy) in versions <= 4.7.15 is vulnerable to cross-site scripting (XSS) on the publicly ac |
| 🟠 high | CVE-2024-58355: Cal.com (calcom/cal.diy) versions through 4.7.15 contain a stored cross-site scripting … | `T1059.007` | Cal.com (calcom/cal.diy) versions through 4.7.15 contain a stored cross-site scripting vulnerability. The single booking |
| 🟠 high | CVE-2026-15401: The VikBooking Hotel Booking Engine & PMS plugin for WordPress is vulnerable to Stored … | `T1190`, `T1059.007` | The VikBooking Hotel Booking Engine & PMS plugin for WordPress is vulnerable to Stored Cross-Site Scripting via the 'vbf |

## Memory Corruption (48)

_Buffer overflows, use-after-free, type confusion enabling crashes or RCE._

| Severity | Finding | MITRE | Description |
|----------|---------|-------|-------------|
| 🔴 critical | CVE-2026-64620: FreeRDP before 3.28.0 (affected <=3.27.1) contains a heap-based buffer overflow in cryp… | `T1203` | FreeRDP before 3.28.0 (affected <=3.27.1) contains a heap-based buffer overflow in crypto_rsa_common() (libfreerdp/crypt |
| 🔴 critical | CVE-2026-51027: An issue in FileThingie v.2.5.7 allows a remote attacker to obtain sensitive informatio… | — | An issue in FileThingie v.2.5.7 allows a remote attacker to obtain sensitive information via the ft2.php component. |
| 🔴 critical | CVE-2026-41252: xrdp is an open source RDP server. | `T1190`, `T1203` | xrdp is an open source RDP server. Versions 0.10.6 and prior contain a missing bounds check in xrdp, which allows a heap |
| 🔴 critical | CVE-2026-56165: Heap-based buffer overflow in Microsoft Account allows an unauthorized attacker to exec… | `T1203` | Heap-based buffer overflow in Microsoft Account allows an unauthorized attacker to execute code over a network. |
| 🟠 high | CVE-2026-64621: FreeRDP before 3.28.0 (affected 3.x through 3.27.1) contains a double-free vulnerabilit… | — | FreeRDP before 3.28.0 (affected 3.x through 3.27.1) contains a double-free vulnerability in freerdp_client_rdp_file_appl |
| 🟠 high | CVE-2026-16248: A vulnerability was found in Tenda AC10 16.03.10.09_multi_TDE01. | `T1203` | A vulnerability was found in Tenda AC10 16.03.10.09_multi_TDE01. This issue affects the function fromAdvSetLanip of the  |
| 🟠 high | CVE-2026-63090: ProFTPD before 1.3.9c and 1.3.10rc3 contains a heap-based buffer overflow vulnerability… | `T1190`, `T1203` | ProFTPD before 1.3.9c and 1.3.10rc3 contains a heap-based buffer overflow vulnerability in the mod_sftp module that allo |
| 🟠 high | CVE-2026-41521: xrdp is an open source RDP server. | — | xrdp is an open source RDP server. Versions 0.10.6 and prior contain an integer overflow vulnerability when processing s |
| 🟠 high | CVE-2026-44178: xrdp is an open source RDP server. | `T1190`, `T1203` | xrdp is an open source RDP server. Versions 0.10.6 and prior contain a heap-based buffer overflow vulnerability within t |
| 🟠 high | CVE-2026-48389: DNG SDK versions 1.7.1 2536 and earlier are affected by a Stack-based Buffer Overflow v… | `T1190`, `T1203` | DNG SDK versions 1.7.1 2536 and earlier are affected by a Stack-based Buffer Overflow vulnerability that could result in |
| 🟠 high | CVE-2026-44508: Rsync is a file-copying tool that uses a delta-transfer algorithm to synchronize remote… | — | Rsync is a file-copying tool that uses a delta-transfer algorithm to synchronize remote and local files.  In versions pr |
| 🟠 high | CVE-2026-8987: Authenticated Heap Overflow | — | [cvefeed.io] Authenticated Heap Overflow |
| 🟠 high | CVE-2026-61390: There is a heap buffer overflow vulnerability in some Hikvision cameras, which may allo… | `T1203` | There is a heap buffer overflow vulnerability in some Hikvision cameras, which may allow unauthenticated attackers to ca |
| 🟠 high | CVE-2026-61391: There is a stack-based buffer overflow vulnerability in some Hikvision cameras, which m… | `T1203` | There is a stack-based buffer overflow vulnerability in some Hikvision cameras, which may allow authenticated attackers  |
| 🟠 high | CVE-2026-40691: In Unbound 1.9.0 up to and including 1.25.1, when a DNSCrypt query is received over TCP… | — | In Unbound 1.9.0 up to and including 1.25.1, when a DNSCrypt query is received over TCP, the routine that encrypts the r |
| 🟠 high | CVE-2026-48029: libheif is a HEIF and AVIF file format decoder and encoder. | — | libheif is a HEIF and AVIF file format decoder and encoder. Versions 1.19.0 through 1.21.2 have a heap OOB read in Image |
| 🟠 high | CVE-2026-64830: FFmpeg versions 2.1 through 8.1.2 contains a heap buffer overflow vulnerability in the … | `T1190`, `T1203` | FFmpeg versions 2.1 through 8.1.2 contains a heap buffer overflow vulnerability in the VobSub subtitle demuxer that allo |
| 🟠 high | CVE-2026-64831: FFmpeg versions 8.0 through 8.1.2 contains a stack buffer overflow vulnerability in the… | `T1190`, `T1203` | FFmpeg versions 8.0 through 8.1.2 contains a stack buffer overflow vulnerability in the Vulkan HEVC hardware decoder tha |
| 🟠 high | CVE-2026-64832: FFmpeg versions 4.4 through 8.1.2 contain a double-free vulnerability in the NVIDIA NVD… | `T1203` | FFmpeg versions 4.4 through 8.1.2 contain a double-free vulnerability in the NVIDIA NVDEC hardware decoder within libavc |
| 🟠 high | CVE-2026-64833: FFmpeg versions 0.7.1 through 8.1.2 contain an out-of-bounds read vulnerability in the … | — | FFmpeg versions 0.7.1 through 8.1.2 contain an out-of-bounds read vulnerability in the S/PDIF muxer that allows attacker |
| 🟠 high | CVE-2026-64835: FFmpeg versions 4.4 through 8.1.2 contain an out-of-bounds memory access vulnerability … | — | FFmpeg versions 4.4 through 8.1.2 contain an out-of-bounds memory access vulnerability in the ADX audio decoder within l |
| 🟠 high | CVE-2026-13072: When compute mode is enabled on a standalone mongod instance, insufficient validation o… | `T1203` | When compute mode is enabled on a standalone mongod instance, insufficient validation of externally sourced BSON data du |
| 🟠 high | CVE-2026-13077: A missing bounds check in the BSON CodeWScope element accessors allows an attacker to t… | — | A missing bounds check in the BSON CodeWScope element accessors allows an attacker to trigger an out-of-bounds heap read |
| 🟠 high | CVE-2026-43823: When initializing an RSA public key from DER or PEM bytes throws an error, the EVP_PKEY… | — | When initializing an RSA public key from DER or PEM bytes throws an error, the EVP_PKEY* is double-freed: first in the c |
| 🟠 high | CVE-2026-65918: PyTorch torchvision through 0.28.0, fixed in commit 4e05dc2, contains an out-of-bounds … | — | PyTorch torchvision through 0.28.0, fixed in commit 4e05dc2, contains an out-of-bounds heap read vulnerability in the GI |
| 🟠 high | CVE-2026-65703: FFmpeg versions 2.7 through 8.1.2 contain an out-of-bounds write vulnerability in the T… | — | FFmpeg versions 2.7 through 8.1.2 contain an out-of-bounds write vulnerability in the TDSC video decoder that allows rem |
| 🟠 high | CVE-2026-65704: FFmpeg through 8.1.2 contains an out-of-bounds write vulnerability that allows attacker… | — | FFmpeg through 8.1.2 contains an out-of-bounds write vulnerability that allows attackers to cause heap corruption by sup |
| 🟠 high | CVE-2026-65705: FFmpeg versions 3.4 through 8.1.2 contain an out-of-bounds write vulnerability in the v… | — | FFmpeg versions 3.4 through 8.1.2 contain an out-of-bounds write vulnerability in the vf_floodfill video filter that all |
| 🟠 high | CVE-2026-65706: FFmpeg versions 3.0 through 8.1.2 contain an out-of-bounds write vulnerability in the v… | — | FFmpeg versions 3.0 through 8.1.2 contain an out-of-bounds write vulnerability in the vf_swaprect video filter that allo |
| 🟠 high | CVE-2026-16002: The affected product is vulnerable to an Out-of-bounds read, which may allow an attacke… | — | The affected product is vulnerable to an Out-of-bounds read, which may allow an attacker to crash the parsing process an |
| 🟠 high | CVE-2026-49035: The affected product is vulnerable to a heap-based buffer overflow via a crafted MMS In… | `T1190`, `T1203` | The affected product is vulnerable to a heap-based buffer overflow via a crafted MMS Initiate request. Remote code execu |
| 🟠 high | CVE-2026-50032: A NULL pointer dereference in the MMS Write Named Variable List handler, which may allo… | — | A NULL pointer dereference in the MMS Write Named Variable List handler, which may allow a network adjacent attacker to  |
| 🟠 high | CVE-2026-50039: The affected product is vulnerable to a stack-based buffer overflow, which may allow an… | `T1203` | The affected product is vulnerable to a stack-based buffer overflow, which may allow an attacker to cause a memory corru |
| 🟠 high | CVE-2026-16870: Multiple security vulnerabilities in Snowflake libsnowflakeclient versions prior to 2.9… | `T1190`, `T1203` | Multiple security vulnerabilities in Snowflake libsnowflakeclient versions prior to 2.9.2 could allow remote code execut |
| 🟠 high | CVE-2026-49743: Software installed and run as a non-privileged user may conduct improper GPU system cal… | — | Software installed and run as a non-privileged user may conduct improper GPU system calls to manipulate the lifetimes of |
| 🟠 high | CVE-2026-45811: Buffer Copy without Checking Size of Input ('Classic Buffer Overflow') vulnerability in… | `T1203` | Buffer Copy without Checking Size of Input ('Classic Buffer Overflow') vulnerability in Apache NimBLE.
The HCI socket tr |
| 🟠 high | CVE-2026-45813: Out-of-bounds Write, Integer Underflow (Wrap or Wraparound) vulnerability in Apache Nim… | `T1203` | Out-of-bounds Write, Integer Underflow (Wrap or Wraparound) vulnerability in Apache NimBLE BASS service.
Improper valida |
| 🟠 high | CVE-2026-45816: NULL Pointer Dereference vulnerability in Apache NimBLE in LE Long Term Key Request event. | — | NULL Pointer Dereference vulnerability in Apache NimBLE in LE Long Term Key Request event.

This requires disabled asser |
| 🟠 high | CVE-2026-66032: libssh2 through 1.11.1, fixed in commit 5e47761, contains a double-free vulnerability i… | — | libssh2 through 1.11.1, fixed in commit 5e47761, contains a double-free vulnerability in the sftp_open() function in src |
| 🟠 high | CVE-2026-66033: libssh2 through 1.11.1, fixed in commit a2ed82d, contains a pre-authentication integer … | — | libssh2 through 1.11.1, fixed in commit a2ed82d, contains a pre-authentication integer underflow vulnerability in the ss |
| 🟠 high | CVE-2026-66034: libssh2 through 1.11.1, fixed in commit a13bb6c, contains a missing bounds check vulner… | — | libssh2 through 1.11.1, fixed in commit a13bb6c, contains a missing bounds check vulnerability that allows a malicious S |
| 🟠 high | CVE-2026-66035: libssh2 through 1.11.1, fixed in commit 42e33d8, contains a pre-authentication heap buf… | `T1203` | libssh2 through 1.11.1, fixed in commit 42e33d8, contains a pre-authentication heap buffer overflow vulnerability that a |
| 🟠 high | CVE-2026-66036: FFmpeg through 8.1.2, fixed in commit 5d7112c, contains a heap out-of-bounds write vuln… | `T1203` | FFmpeg through 8.1.2, fixed in commit 5d7112c, contains a heap out-of-bounds write vulnerability in the vf_hqdn3d filter |
| 🟠 high | CVE-2026-66039: FFmpeg through 8.1.2, fixed in commit aafb5c6, contains a signed integer overflow vulne… | — | FFmpeg through 8.1.2, fixed in commit aafb5c6, contains a signed integer overflow vulnerability in the MACE6 audio decod |
| 🟠 high | CVE-2026-66040: FFmpeg through 8.1.2, fixed in commit b506faf, contains a heap out-of-bounds write vuln… | `T1190` | FFmpeg through 8.1.2, fixed in commit b506faf, contains a heap out-of-bounds write vulnerability in the native PNG and A |
| 🟠 high | CVE-2026-66041: FFmpeg 7.0 through 8.1.2, fixed in commit 4da9812, contains a heap out-of-bounds write … | — | FFmpeg 7.0 through 8.1.2, fixed in commit 4da9812, contains a heap out-of-bounds write vulnerability in the vf_quirc fil |
| 🟠 high | CVE-2026-66373: Redis before 8.8.0, in the unusual case where an authenticated attacker can execute RES… | `T1190` | Redis before 8.8.0, in the unusual case where an authenticated attacker can execute RESTORE, allows remote code executio |
| ⚪ unknown | CVE-2021-27137: DD-WRT DD-WRT — DD-WRT Stack-Based Buffer Overflow Vulnerability | `T1203` | DD-WRT contains a stack-based buffer overflow vulnerability that could allow an unauthenticated attacker to overflow an  |

## Insecure Deserialization (11)

_Unsafe deserialization of attacker-controlled data leading to RCE._

| Severity | Finding | MITRE | Description |
|----------|---------|-------|-------------|
| 🔴 critical | CVE-2026-50522: Microsoft SharePoint — Microsoft SharePoint Deserialization of Untrusted Data Vulnerability | `T1059.007` | Deserialization of untrusted data in Microsoft Office SharePoint allows an unauthorized attacker to execute code over a  |
| 🔴 critical | CVE-2026-63767: ktransformers through 0.6.3, fixed in commit def0f93, contains an unauthenticated pickl… | `T1059.007` | ktransformers through 0.6.3, fixed in commit def0f93, contains an unauthenticated pickle deserialization vulnerability t |
| 🔴 critical | CVE-2026-16723: A remote code execution (RCE) vulnerability exists in fastjson 1.2.68 through 1.2.83. | `T1190` | A remote code execution (RCE) vulnerability exists in fastjson 1.2.68 through 1.2.83. This vulnerability is exploitable  |
| 🔴 critical | CVE-2026-59544: Unauthenticated PHP Object Injection in Thrive Quiz Builder <= 10.9.3.0 versions. | — | Unauthenticated PHP Object Injection in Thrive Quiz Builder <= 10.9.3.0 versions. |
| 🔴 critical | CVE-2026-50517: Deserialization of untrusted data in M365 Copilot allows an authorized attacker to exec… | `T1059.007` | Deserialization of untrusted data in M365 Copilot allows an authorized attacker to execute code over a network. |
| 🟠 high | CVE-2026-28220: Wazuh is a free and open source platform used for threat prevention, detection, and res… | — | Wazuh is a free and open source platform used for threat prevention, detection, and response. Prior to version 4.14.5, i |
| 🟠 high | CVE-2026-13185: In Progress® Telerik® UI for AJAX prior to v2026.2.708, applications using cookie-based… | `T1190` | In Progress® Telerik® UI for AJAX prior to v2026.2.708, applications using cookie-based storage in RadPersistenceManager |
| 🟠 high | CVE-2026-13190: In Progress® Telerik® UI for AJAX prior to v2026.2.708, a deserialization vulnerability… | `T1190`, `T1059.007` | In Progress® Telerik® UI for AJAX prior to v2026.2.708, a deserialization vulnerability in the persistence utilities all |
| 🟠 high | CVE-2026-65493: Subscriber PHP Object Injection in Dokan Pro <= 5.0.2 versions. | — | Subscriber PHP Object Injection in Dokan Pro <= 5.0.2 versions. |
| 🟠 high | CVE-2026-65497: Administrator PHP Object Injection in Complianz <= 7.5.0 versions. | — | Administrator PHP Object Injection in Complianz <= 7.5.0 versions. |
| 🟠 high | CVE-2026-21655: C-CURE 9000 and Victor application server - Deserialization of Untrusted Data | `T1059.007` | [cvefeed.io] C-CURE 9000 and Victor application server - Deserialization of Untrusted Data |

## Path Traversal & File Disclosure (34)

_Directory traversal and arbitrary file read/write vulnerabilities._

| Severity | Finding | MITRE | Description |
|----------|---------|-------|-------------|
| 🔴 critical | CVE-2026-12701: A path traversal vulnerability was found in pulpcore. | — | A path traversal vulnerability was found in pulpcore. The relative_path_validator function only verifies that content pa |
| 🔴 critical | CVE-2026-27064: Editor Arbitrary File Upload in Mailster <= 4.1.17 versions. | — | Editor Arbitrary File Upload in Mailster <= 4.1.17 versions. |
| 🔴 critical | CVE-2026-59555: Unauthenticated Arbitrary File Deletion in Participants Database <= 2.7.8.3 versions. | — | Unauthenticated Arbitrary File Deletion in Participants Database <= 2.7.8.3 versions. |
| 🔴 critical | CVE-2026-65455: Administrator Arbitrary File Upload in MapSVG <= 8.14.0 versions. | — | Administrator Arbitrary File Upload in MapSVG <= 8.14.0 versions. |
| 🔴 critical | CVE-2026-65461: Administrator Arbitrary File Upload in Really Simple CSV Importer <= 1.3 versions. | — | Administrator Arbitrary File Upload in Really Simple CSV Importer <= 1.3 versions. |
| 🔴 critical | CVE-2026-65687: Bold Reports Standalone Report Designer before 14.1.12 contains a missing filepath vali… | — | Bold Reports Standalone Report Designer before 14.1.12 contains a missing filepath validation vulnerability in its SVG p |
| 🔴 critical | CVE-2026-65688: Bold Reports Standalone Report Designer before 14.1.12 contains a missing filepath vali… | — | Bold Reports Standalone Report Designer before 14.1.12 contains a missing filepath validation vulnerability in its font  |
| 🔴 critical | CVE-2026-65689: Bold Reports Standalone Report Designer before 14.1.12 contains a missing filepath vali… | — | Bold Reports Standalone Report Designer before 14.1.12 contains a missing filepath validation vulnerability in its datab |
| 🔴 critical | CVE-2026-65700: h2oGPT through 0.2.1 contains a path traversal vulnerability in the OpenAI-compatible f… | `T1190` | h2oGPT through 0.2.1 contains a path traversal vulnerability in the OpenAI-compatible files API that allows unauthentica |
| 🔴 critical | CVE-2026-65701: SoftVC VITS Singing Voice Conversion through commit 730930d contains a path traversal v… | — | SoftVC VITS Singing Voice Conversion through commit 730930d contains a path traversal vulnerability in the full-song inf |
| 🟠 high | CVE-2026-63739: SurrealDB before 3.1.5 contains an arbitrary file read vulnerability in the DEFINE ANAL… | — | SurrealDB before 3.1.5 contains an arbitrary file read vulnerability in the DEFINE ANALYZER mapper filter that allows da |
| 🟠 high | CVE-2026-54910: FileBrowser Quantum is a free, self-hosted, web-based file manager. | — | FileBrowser Quantum is a free, self-hosted, web-based file manager. Prior to version 1.4.3-beta, the `subtitlesHandler`  |
| 🟠 high | CVE-2026-25039: Parsec is a cloud-based application for simple and cryptographically secure file sharing. | — | Parsec is a cloud-based application for simple and cryptographically secure file sharing. The application does not sanit |
| 🟠 high | CVE-2026-32820: dataCycle is a data management system for centrally storing, managing, searching, findi… | — | dataCycle is a data management system for centrally storing, managing, searching, finding, and distributing data. In dat |
| 🟠 high | CVE-2026-58484: Network-AI is a TypeScript/Node.js multi-agent orchestrator. | — | Network-AI is a TypeScript/Node.js multi-agent orchestrator. Prior to version 5.12.2, `EnvironmentManager.listBackups()` |
| 🟠 high | CVE-2026-56452: Path traversal in the sshd-scp component of Apache MINA SSHD. | — | Path traversal in the sshd-scp component of Apache MINA SSHD. Apache MINA SSHD is a Java library for client-side and ser |
| 🟠 high | CVE-2026-56623: Path traversal on Windows in Apache MINA SSHD component sshd-git. | — | Path traversal on Windows in Apache MINA SSHD component sshd-git. Apache MINA SSHD is a Java library for client-side and |
| 🟠 high | CVE-2026-61900: Joomla Extension - dj-extensions.com - Unauthenticated arbitrary file upload in DJ-jDow… | — | [cvefeed.io] Joomla Extension - dj-extensions.com - Unauthenticated arbitrary file upload in DJ-jDownloads &lt; 4.1.6 |
| 🟠 high | CVE-2026-61424: Joomla Extension - dj-extensions.com - Unauthenticated arbitrary file upload in DJ-Clas… | — | [cvefeed.io] Joomla Extension - dj-extensions.com - Unauthenticated arbitrary file upload in DJ-Classifieds &lt; 3.11.2 |
| 🟠 high | CVE-2026-60032: Joomla Extension - themexpert.com - Authenticated arbitrary file upload in JMedia &lt; … | — | [cvefeed.io] Joomla Extension - themexpert.com - Authenticated arbitrary file upload in JMedia &lt; 1.6.0 |
| 🟠 high | CVE-2026-15802: The WP Foodbakery plugin for WordPress is vulnerable to arbitrary file deletion due to … | `T1190` | The WP Foodbakery plugin for WordPress is vulnerable to arbitrary file deletion due to insufficient file path validation |
| 🟠 high | CVE-2026-13186: In Progress® Telerik® UI for AJAX prior to v2026.2.708, a path traversal vulnerability … | `T1190`, `T1059.007` | In Progress® Telerik® UI for AJAX prior to v2026.2.708, a path traversal vulnerability in the file-based persistence sto |
| 🟠 high | CVE-2026-13189: In Progress® Telerik® UI for AJAX prior to v2026.2.708, insufficient validation of the … | — | In Progress® Telerik® UI for AJAX prior to v2026.2.708, insufficient validation of the language parameter in the spell c |
| 🟠 high | CVE-2026-15074: @fastify/static up to and including version 10.1.0 fails to reject dot-dot path segment… | — | @fastify/static up to and including version 10.1.0 fails to reject dot-dot path segments in request pathnames before the |
| 🟠 high | CVE-2026-57696: Contributor Arbitrary File Deletion in Picture Gallery <= 1.6.5 versions. | — | Contributor Arbitrary File Deletion in Picture Gallery <= 1.6.5 versions. |
| 🟠 high | CVE-2026-59542: Subscriber Arbitrary File Deletion in Kali Forms <= 2.4.18 versions. | — | Subscriber Arbitrary File Deletion in Kali Forms <= 2.4.18 versions. |
| 🟠 high | CVE-2026-65477: Contributor Local File Inclusion in Tonda Core <= 2.1.2 versions. | — | Contributor Local File Inclusion in Tonda Core <= 2.1.2 versions. |
| 🟠 high | CVE-2026-65481: Contributor Local File Inclusion in Vino <= 1.9 versions. | — | Contributor Local File Inclusion in Vino <= 1.9 versions. |
| 🟠 high | CVE-2026-65896: Grav API Plugin (Composer package getgrav/grav-plugin-api) before 1.0.10 fails to prope… | — | Grav API Plugin (Composer package getgrav/grav-plugin-api) before 1.0.10 fails to properly validate the slug field in th |
| 🟠 high | CVE-2026-65690: Bold Reports Standalone Report Designer before 14.1.12 contains a missing filepath vali… | — | Bold Reports Standalone Report Designer before 14.1.12 contains a missing filepath validation vulnerability in its file  |
| 🟠 high | CVE-2026-65702: Vanna through 2.0.2 contains a path traversal vulnerability in the FileSystemConversati… | — | Vanna through 2.0.2 contains a path traversal vulnerability in the FileSystemConversationStore persistence integration t |
| 🟠 high | CVE-2026-65919: Meshery before 1.0.57 contains an unauthenticated arbitrary file read vulnerability in … | — | Meshery before 1.0.57 contains an unauthenticated arbitrary file read vulnerability in the /api/system/fileView and /api |
| 🟠 high | CVE-2026-65694: Microweber CMS through 2.0.20 contains a path traversal vulnerability in the static fil… | — | Microweber CMS through 2.0.20 contains a path traversal vulnerability in the static file controller that allows unauthen |
| 🟠 high | CVE-2026-66140: Exim before 4.99.5 allows directory traversal to access files outside of the spool area… | — | Exim before 4.99.5 allows directory traversal to access files outside of the spool area, and consequently gain privilege |

## SSRF, CSRF & Open Redirect (20)

_Server-side request forgery, cross-site request forgery, and redirect issues._

| Severity | Finding | MITRE | Description |
|----------|---------|-------|-------------|
| 🔴 critical | CVE-2026-13147: The Kirki  WordPress plugin before 6.0.12 does not validate a user-supplied URL before … | — | The Kirki  WordPress plugin before 6.0.12 does not validate a user-supplied URL before requesting it server-side, allowi |
| 🔴 critical | CVE-2026-57784: Unauthenticated Cross Site Request Forgery (CSRF) in  Ninja Forms File Uploads Extensio… | — | Unauthenticated Cross Site Request Forgery (CSRF) in  Ninja Forms File Uploads Extension <= 3.3.26 versions. |
| 🔴 critical | CVE-2026-65471: Unauthenticated Cross Site Request Forgery (CSRF) in Avada Core <= 5.15.6 versions. | — | Unauthenticated Cross Site Request Forgery (CSRF) in Avada Core <= 5.15.6 versions. |
| 🔴 critical | CVE-2026-57106: Server-side request forgery (ssrf) in Data Quality allows an unauthorized attacker to e… | — | Server-side request forgery (ssrf) in Data Quality allows an unauthorized attacker to elevate privileges over a network. |
| 🟠 high | CVE-2026-32824: dataCycle is a data management system for centrally storing, managing, searching, findi… | `T1566` | dataCycle is a data management system for centrally storing, managing, searching, finding, and distributing data. In dat |
| 🟠 high | CVE-2026-32825: dataCycle is a data management system for centrally storing, managing, searching, findi… | — | dataCycle is a data management system for centrally storing, managing, searching, finding, and distributing data. In dat |
| 🟠 high | CVE-2026-63107: LimeSurvey through 6.17.10 and 7.0.4 contains a server-side request forgery vulnerabili… | — | LimeSurvey through 6.17.10 and 7.0.4 contains a server-side request forgery vulnerability in the REST API survey templat |
| 🟠 high | CVE-2026-63731: HyperDX before 2.31.0 contains a server-side request forgery vulnerability that allows … | — | HyperDX before 2.31.0 contains a server-side request forgery vulnerability that allows authenticated team members to dir |
| 🟠 high | CVE-2026-63769: Huginn through 2022.08.18 contains a server-side request forgery vulnerability in the f… | — | Huginn through 2022.08.18 contains a server-side request forgery vulnerability in the fetch_url method of ScenarioImport |
| 🟠 high | CVE-2026-65318: Verba (goldenverba) Unauthenticated Server-Side Request Forgery via WebSocket Import En… | — | [cvefeed.io] Verba (goldenverba) Unauthenticated Server-Side Request Forgery via WebSocket Import Endpoint HTMLReader |
| 🟠 high | CVE-2026-65317: Verba (goldenverba) Server-Side Request Forgery via /api/connect and Same-Origin Middle… | — | [cvefeed.io] Verba (goldenverba) Server-Side Request Forgery via /api/connect and Same-Origin Middleware Bypass |
| 🟠 high | CVE-2026-56167: Server-side request forgery (ssrf) in Azure AI Search allows an authorized attacker to … | — | Server-side request forgery (ssrf) in Azure AI Search allows an authorized attacker to elevate privileges over a network |
| 🟠 high | CVE-2026-57626: Cross-Site Request Forgery (CSRF) vulnerability in MailPoet allows Cross Site Request F… | — | Cross-Site Request Forgery (CSRF) vulnerability in MailPoet allows Cross Site Request Forgery.

This issue affects MailP |
| 🟠 high | CVE-2026-57785: Unauthenticated Cross Site Request Forgery (CSRF) in ApusListing <= 1.2.63 versions. | — | Unauthenticated Cross Site Request Forgery (CSRF) in ApusListing <= 1.2.63 versions. |
| 🟠 high | CVE-2026-65488: Unauthenticated Cross Site Request Forgery (CSRF) in LA-Studio Element Kit for Elemento… | — | Unauthenticated Cross Site Request Forgery (CSRF) in LA-Studio Element Kit for Elementor <= 1.6.2 versions. |
| 🟠 high | CVE-2026-65516: Unauthenticated Server Side Request Forgery (SSRF) in PeproDev Ultimate Invoice <= 2.2.… | — | Unauthenticated Server Side Request Forgery (SSRF) in PeproDev Ultimate Invoice <= 2.2.6 versions. |
| 🟠 high | CVE-2026-65539: Unauthenticated Cross Site Request Forgery (CSRF) in Kwayy HTML Sitemap <= 4.0 versions. | — | Unauthenticated Cross Site Request Forgery (CSRF) in Kwayy HTML Sitemap <= 4.0 versions. |
| 🟠 high | CVE-2026-65540: Unauthenticated Cross Site Request Forgery (CSRF) in Popup for CF7 with Sweet Alert <= … | — | Unauthenticated Cross Site Request Forgery (CSRF) in Popup for CF7 with Sweet Alert <= 1.6.5 versions. |
| 🟠 high | CVE-2026-15212: The WPO365 \| Login plugin for WordPress is vulnerable to Cross-Site Request Forgery in … | — | The WPO365 \| Login plugin for WordPress is vulnerable to Cross-Site Request Forgery in versions up to, and including, 43 |
| 🟠 high | CVE-2026-63313: 9Router before 0.4.72 contains a server-side request forgery (SSRF) vulnerability in th… | — | 9Router before 0.4.72 contains a server-side request forgery (SSRF) vulnerability in the /v1/web/fetch endpoint. The end |

## Cryptographic Weaknesses (3)

_Broken cryptography, weak hashes, or insecure key management._

| Severity | Finding | MITRE | Description |
|----------|---------|-------|-------------|
| 🔴 critical | CVE-2026-16235: Crypt::Password versions through 0.28 for Perl generate insecure random values for salts. | — | Crypt::Password versions through 0.28 for Perl generate insecure random values for salts.

These versions use the built- |
| 🟠 high | CVE-2026-13577: Dancer2 versions through 2.1.0 for Perl generate insecure session ids when CSPRNG modul… | — | Dancer2 versions through 2.1.0 for Perl generate insecure session ids when CSPRNG modules are unavailable.

Dancer2::Cor |
| 🟠 high | CVE-2026-13184: In Progress® Telerik® UI for AJAX prior to v2026.2.708, when Telerik.Upload.Configurati… | — | In Progress® Telerik® UI for AJAX prior to v2026.2.708, when Telerik.Upload.ConfigurationHashKey is absent and machineKe |

## Information Disclosure (2)

_Exposure of sensitive information through error messages, logs, or responses._

| Severity | Finding | MITRE | Description |
|----------|---------|-------|-------------|
| 🟠 high | CVE-2026-13182: In Progress® Telerik® UI for AJAX prior to v2026.2.708, RadAsyncUpload client-state pro… | — | In Progress® Telerik® UI for AJAX prior to v2026.2.708, RadAsyncUpload client-state processing can distinguish decrypt f |
| 🟠 high | CVE-2024-58023: Information disclosure in Bosch Configuration Manager in Version 7.72.0106 allows an at… | — | Information disclosure in Bosch Configuration Manager in Version 7.72.0106 allows an attacker to access sensitive inform |

## Denial of Service (18)

_Vulnerabilities causing service disruption, resource exhaustion, or crashes._

| Severity | Finding | MITRE | Description |
|----------|---------|-------|-------------|
| 🟠 high | CVE-2026-63747: SurrealDB versions before 3.1.0 contain a denial of service vulnerability in the RPC us… | — | SurrealDB versions before 3.1.0 contain a denial of service vulnerability in the RPC use handler that panics when db is  |
| 🟠 high | CVE-2026-63760: SurrealDB before 3.1.0 fails to enforce the configured recursion depth limit in the val… | — | SurrealDB before 3.1.0 fails to enforce the configured recursion depth limit in the value and JSON parser when processin |
| 🟠 high | CVE-2026-45713: Mailpit is an email testing tool and API for developers. | — | Mailpit is an email testing tool and API for developers. Prior to version 1.30.0, the Mailpit SMTP server has a Server.M |
| 🟠 high | CVE-2026-54538: xrdp is an open source RDP server. | — | xrdp is an open source RDP server. In versions 0.10.6 and prior, a n issue was discovered where the software fails to pr |
| 🟠 high | CVE-2026-64612: A flaw was found in libcupsfilters and cups-filters. | — | A flaw was found in libcupsfilters and cups-filters. The PNG image reading function creates a libpng reader without inst |
| 🟠 high | CVE-2026-56819: Netty is a network application framework for development of protocol servers and clients. | — | Netty is a network application framework for development of protocol servers and clients. In versions 4.2.0.Final throug |
| 🟠 high | CVE-2026-32665: In NLnet Labs Unbound 1.22.0 up to and including 1.25.1, when downstream DNS-over-QUIC … | — | In NLnet Labs Unbound 1.22.0 up to and including 1.25.1, when downstream DNS-over-QUIC (DoQ) is enabled, the first two b |
| 🟠 high | CVE-2026-11605: The issue is a resource exhaustion vulnerability associated with DNSSEC validation. | — | The issue is a resource exhaustion vulnerability associated with DNSSEC validation. BIND always validates all RRSIG reco |
| 🟠 high | CVE-2026-11622: A DNSSEC validating resolver that is under a random subdomain attack against a DNSSEC-s… | — | A DNSSEC validating resolver that is under a random subdomain attack against a DNSSEC-signed zone can suffer from runawa |
| 🟠 high | CVE-2026-64834: FFmpeg versions 0.6.3 through 8.1.2 contain an infinite loop vulnerability in the RTP/A… | — | FFmpeg versions 0.6.3 through 8.1.2 contain an infinite loop vulnerability in the RTP/ASF demuxer within libavformat/rtp |
| 🟠 high | CVE-2026-64611: A flaw was found in libcupsfilters. | — | A flaw was found in libcupsfilters. The cfIEEE1284NormalizeMakeModel() function enters an infinite loop when processing  |
| 🟠 high | CVE-2026-14257: brace-expansion through 5.0.7 is vulnerable to denial of service via memory exhaustion. | — | brace-expansion through 5.0.7 is vulnerable to denial of service via memory exhaustion. The expand() function limits the |
| 🟠 high | CVE-2026-44909: Proxygen lacked a generalized slow-consumer detection mechanism in its core HTTP sessio… | — | Proxygen lacked a generalized slow-consumer detection mechanism in its core HTTP session layer. A remote, unauthenticate |
| 🟠 high | CVE-2026-16756: Missing connection and header-read timeouts and the absence of a concurrent-connection … | — | Missing connection and header-read timeouts and the absence of a concurrent-connection cap in the default serve() path o |
| 🟠 high | CVE-2026-25800: Quinn is a pure-Rust, async-compatible implementation of the IETF QUIC transport protocol. | — | Quinn is a pure-Rust, async-compatible implementation of the IETF QUIC transport protocol. Starting in version 0.1.0 and |
| 🟠 high | CVE-2026-66142: Apache Neethi is vulnerable to uncontrolled recursion when parsing policies that lack p… | — | Apache Neethi is vulnerable to uncontrolled recursion when parsing policies that lack policy Ids or with deeply nested s |
| 🟠 high | CVE-2026-66143: It is possible to bypass the maximum number of normalized policy alternatives that was … | — | It is possible to bypass the maximum number of normalized policy alternatives that was introduced in Apache Neethi 3.2.2 |
| 🟠 high | CVE-2026-66144: Although remote policy references are not retrieved during policy normalization, if the… | — | Although remote policy references are not retrieved during policy normalization, if they are manually retrieved via the  |

## Network Infrastructure & IoT Device Vulnerabilities (3)

_Vulnerabilities in routers, firewalls, and IoT devices on the network edge._

| Severity | Finding | MITRE | Description |
|----------|---------|-------|-------------|
| 🟠 high | CVE-2026-42566: Meshtastic is an open source mesh networking solution. | — | Meshtastic is an open source mesh networking solution. Prior to version 2.7.23.b246bcd, a single node advertising a User |
| 🟠 high | CVE-2026-46415: The Caddy Defender plugin is a middleware for Caddy that allows users to block or manip… | — | The Caddy Defender plugin is a middleware for Caddy that allows users to block or manipulate requests based on the clien |
| 🟠 high | CVE-2026-57600: Insufficient validation of input parameters in the firmware of some Hikvision cameras a… | — | Insufficient validation of input parameters in the firmware of some Hikvision cameras allows unauthenticated attackers t |

## Critical-Severity Vulnerabilities (14)

_Critical-severity issues that did not fit a more specific category — review urgently._

| Severity | Finding | MITRE | Description |
|----------|---------|-------|-------------|
| 🔴 critical | CVE-2026-46412: @beproduct/nestjs-auth is a NestJS authentication module for BeProduct IDS (Identity Se… | — | @beproduct/nestjs-auth is a NestJS authentication module for BeProduct IDS (Identity Server) with OpenID Connect support |
| 🔴 critical | CVE-2026-35048: The Piwigo installer in versions 16.3.0 and earlier accepts POST parameters for databas… | — | The Piwigo installer in versions 16.3.0 and earlier accepts POST parameters for database configuration and writes them d |
| 🔴 critical | CVE-2026-40712: Dell PowerProtect Data Manager, versions prior to 20.2.0.0, contain(s) an Improper Inpu… | — | Dell PowerProtect Data Manager, versions prior to 20.2.0.0, contain(s) an Improper Input Validation vulnerability in the |
| 🔴 critical | CVE-2026-46738: Dell PowerProtect Data Manager, versions prior to 20.2.0.0, contain(s) an Improper Inpu… | — | Dell PowerProtect Data Manager, versions prior to 20.2.0.0, contain(s) an Improper Input Validation vulnerability in the |
| 🔴 critical | CVE-2026-60366: Vulnerability in the Oracle Platform Security for Java product of Oracle Fusion Middlew… | — | Vulnerability in the Oracle Platform Security for Java product of Oracle Fusion Middleware (component: Centralized Third |
| 🔴 critical | CVE-2026-60367: Vulnerability in the Oracle Platform Security for Java product of Oracle Fusion Middlew… | — | Vulnerability in the Oracle Platform Security for Java product of Oracle Fusion Middleware (component: Centralized Third |
| 🔴 critical | CVE-2026-60369: Vulnerability in the Oracle Platform Security for Java product of Oracle Fusion Middlew… | — | Vulnerability in the Oracle Platform Security for Java product of Oracle Fusion Middleware (component: Centralized Third |
| 🔴 critical | CVE-2026-60372: Vulnerability in the Oracle Platform Security for Java product of Oracle Fusion Middlew… | — | Vulnerability in the Oracle Platform Security for Java product of Oracle Fusion Middleware (component: Centralized Third |
| 🔴 critical | CVE-2026-54120: Improper input validation in Microsoft Surface allows an authorized attacker to execute… | — | Improper input validation in Microsoft Surface allows an authorized attacker to execute code over a network. |
| 🔴 critical | CVE-2026-56160: Improper authorization in Azure Red Hat OpenShift (ARO) allows an authorized attacker t… | — | Improper authorization in Azure Red Hat OpenShift (ARO) allows an authorized attacker to elevate privileges over a netwo |
| 🔴 critical | CVE-2026-64813: In JetBrains IntelliJ IDEA before 2026.2 unauthorized settings modification was possibl… | — | In JetBrains IntelliJ IDEA before 2026.2 unauthorized settings modification was possible in a Remote Development session |
| 🔴 critical | CVE-2026-42933: Pronetiqs IntraVUE versions 3.2.1a14 and prior have an unintended proxy or intermediary… | — | Pronetiqs IntraVUE versions 3.2.1a14 and prior have an unintended proxy or intermediary vulnerability which could allow  |
| 🔴 critical | CVE-2026-48021: In epa4all, prior to version 2026-05-20, an attacker who can intercept the TLS connecti… | — | In epa4all, prior to version 2026-05-20, an attacker who can intercept the TLS connection between epa4all and the ePA ba |
| 🔴 critical | CVE-2026-62835: Improper authorization in Azure Portal allows an unauthorized attacker to disclose info… | — | Improper authorization in Azure Portal allows an unauthorized attacker to disclose information over a network. |

## High-Severity Vulnerabilities (81)

_High-severity vulnerabilities across miscellaneous products and services._

| Severity | Finding | MITRE | Description |
|----------|---------|-------|-------------|
| 🟠 high | CVE-2026-6656: Crypt::Password versions through 0.28 for Perl are susceptible to timing attacks. | — | Crypt::Password versions through 0.28 for Perl are susceptible to timing attacks.

The check_password method uses the bu |
| 🟠 high | CVE-2026-16246: In BRAIN2 versions prior to 3.09, the
application LogPathConfig.exe is executed during … | — | In BRAIN2 versions prior to 3.09, the
application LogPathConfig.exe is executed during setup. As a result, the
Windows g |
| 🟠 high | CVE-2026-16247: In _connect.BRAIN versions prior to 5.06,
the application LogPathConfig.exe is executed… | — | In _connect.BRAIN versions prior to 5.06,
the application LogPathConfig.exe is executed during setup. During this
proces |
| 🟠 high | CVE-2026-63756: SurrealDB versions before 3.1.0 contain a time-of-check/time-of-use race condition in t… | — | SurrealDB versions before 3.1.0 contain a time-of-check/time-of-use race condition in the HTTP /rpc endpoint that allows |
| 🟠 high | CVE-2026-64623: Network-AI before 5.13.4 contains an improper cryptographic signature verification vuln… | — | Network-AI before 5.13.4 contains an improper cryptographic signature verification vulnerability in APSAdapter where the |
| 🟠 high | CVE-2026-12080: A flaw was found in the QEMU Guest Agent (qga). | — | A flaw was found in the QEMU Guest Agent (qga). A local unprivileged user can exploit a vulnerability in the guest-ssh-a |
| 🟠 high | CVE-2026-32807: dataCycle is a data management system for centrally storing, managing, searching, findi… | — | dataCycle is a data management system for centrally storing, managing, searching, finding, and distributing data. In dat |
| 🟠 high | CVE-2026-32806: dataCycle is a data management system for centrally storing, managing, searching, findi… | — | dataCycle is a data management system for centrally storing, managing, searching, finding, and distributing data. In dat |
| 🟠 high | CVE-2026-32821: dataCycle is a data management system for centrally storing, managing, searching, findi… | — | dataCycle is a data management system for centrally storing, managing, searching, finding, and distributing data. In dat |
| 🟠 high | CVE-2026-46701: Network-AI is a TypeScript/Node.js multi-agent orchestrator. | — | Network-AI is a TypeScript/Node.js multi-agent orchestrator. Prior to version 5.4.5, the MCP SSE server defaults to an e |
| 🟠 high | CVE-2026-63770: Glance through 0.8.5 contains an IP address spoofing vulnerability in the authenticatio… | — | Glance through 0.8.5 contains an IP address spoofing vulnerability in the authentication handler that allows unauthentic |
| 🟠 high | CVE-2026-63771: Adminer before 5.4.3 contains a cookie injection vulnerability that allows attackers to… | — | Adminer before 5.4.3 contains a cookie injection vulnerability that allows attackers to manipulate cookie attributes by  |
| 🟠 high | CVE-2026-64619: FileCodeBox before 2.4 contains a rate-limit bypass vulnerability in the IPRateLimit cl… | — | FileCodeBox before 2.4 contains a rate-limit bypass vulnerability in the IPRateLimit class that allows unauthenticated a |
| 🟠 high | CVE-2026-53593: FreeScout is a free help desk and shared inbox built with PHP's Laravel framework. | — | FreeScout is a free help desk and shared inbox built with PHP's Laravel framework. Prior to version 1.8.224, the denylis |
| 🟠 high | CVE-2026-56624: Improper certificate validation in Apache MINA SSHD (server-side). | — | Improper certificate validation in Apache MINA SSHD (server-side). Apache MINA SSHD is a Java library for client-side an |
| 🟠 high | CVE-2026-16324: A vulnerability was identified in Metasoft 美特软件 MetaCRM up to 6.4.0 Beta06. | — | A vulnerability was identified in Metasoft 美特软件 MetaCRM up to 6.4.0 Beta06. The impacted element is an unknown function  |
| 🟠 high | CVE-2026-57495: AgenticMail: Unauthenticated inbound mail triggers bypassPermissions resume of the oper… | — | [cvefeed.io] AgenticMail: Unauthenticated inbound mail triggers bypassPermissions resume of the operator's Claude Code s |
| 🟠 high | CVE-2026-13380: VSee Clinic and API Exposes Cleartext SFTP Credentials in Unauthenticated HTTP Responses | — | [cvefeed.io] VSee Clinic and API Exposes Cleartext SFTP Credentials in Unauthenticated HTTP Responses |
| 🟠 high | CVE-2026-56820: Netty is a network application framework for development of protocol servers and clients. | — | Netty is a network application framework for development of protocol servers and clients. In versions 4.2.0.Final throug |
| 🟠 high | CVE-2026-56817: Netty: XML External Entity (XXE) injection via unconfigured XML factory when DTD and en… | — | [cvefeed.io] Netty: XML External Entity (XXE) injection via unconfigured XML factory when DTD and entity processing are  |
| 🟠 high | CVE-2026-8989: Open Recovery Mode | — | [cvefeed.io] Open Recovery Mode |
| 🟠 high | CVE-2026-8988: Access to Bootloader | — | [cvefeed.io] Access to Bootloader |
| 🟠 high | CVE-2026-62549: Vulnerability in the Oracle HRMS (UK) product of O | — | [cvefeed.io] Vulnerability in the Oracle HRMS (UK) product of O |
| 🟠 high | CVE-2026-62547: Vulnerability in the Oracle Workflow product of Or | — | [cvefeed.io] Vulnerability in the Oracle Workflow product of Or |
| 🟠 high | CVE-2026-62546: Vulnerability in the Oracle Applications Framework | — | [cvefeed.io] Vulnerability in the Oracle Applications Framework |
| 🟠 high | CVE-2026-62534: Vulnerability in the Oracle Applications Framework | — | [cvefeed.io] Vulnerability in the Oracle Applications Framework |
| 🟠 high | CVE-2026-62530: Vulnerability in the Oracle HRMS (France) product | — | [cvefeed.io] Vulnerability in the Oracle HRMS (France) product |
| 🟠 high | CVE-2026-62516: Vulnerability in the Oracle Demantra Demand Manage | — | [cvefeed.io] Vulnerability in the Oracle Demantra Demand Manage |
| 🟠 high | CVE-2026-62514: Vulnerability in the Oracle Process Manufacturing | — | [cvefeed.io] Vulnerability in the Oracle Process Manufacturing |
| 🟠 high | CVE-2026-62513: Vulnerability in the Oracle Process Manufacturing | — | [cvefeed.io] Vulnerability in the Oracle Process Manufacturing |
| 🟠 high | CVE-2026-62504: Vulnerability in the Oracle Time and Labor product | — | [cvefeed.io] Vulnerability in the Oracle Time and Labor product |
| 🟠 high | CVE-2026-62498: Vulnerability in the Oracle Flow Manufacturing pro | — | [cvefeed.io] Vulnerability in the Oracle Flow Manufacturing pro |
| 🟠 high | CVE-2026-62497: Vulnerability in the Oracle Flow Manufacturing pro | — | [cvefeed.io] Vulnerability in the Oracle Flow Manufacturing pro |
| 🟠 high | CVE-2026-62496: Vulnerability in the Oracle Yard Management produc | — | [cvefeed.io] Vulnerability in the Oracle Yard Management produc |
| 🟠 high | CVE-2026-62494: Vulnerability in the Oracle Time and Labor product | — | [cvefeed.io] Vulnerability in the Oracle Time and Labor product |
| 🟠 high | CVE-2026-62478: Vulnerability in the Oracle Public Sector Financia | — | [cvefeed.io] Vulnerability in the Oracle Public Sector Financia |
| 🟠 high | CVE-2026-62476: Vulnerability in the Oracle Public Sector Payroll | — | [cvefeed.io] Vulnerability in the Oracle Public Sector Payroll |
| 🟠 high | CVE-2026-62473: Vulnerability in the Oracle Installed Base product | — | [cvefeed.io] Vulnerability in the Oracle Installed Base product |
| 🟠 high | CVE-2026-63047: The Joomla extension Events Booking prior version 5.0-5.8.1 did not properly verify tha… | — | The Joomla extension Events Booking prior version 5.0-5.8.1 did not properly verify that an actor is allowed to download |
| 🟠 high | CVE-2026-13183: In Progress® Telerik® UI for AJAX prior to v2026.2.708, RadAsyncUpload upload metadata … | — | In Progress® Telerik® UI for AJAX prior to v2026.2.708, RadAsyncUpload upload metadata processing may leak cryptographic |
| 🟠 high | CVE-2026-13187: In Progress® Telerik® UI for AJAX prior to v2026.2.708, DialogHandler provider type inp… | — | In Progress® Telerik® UI for AJAX prior to v2026.2.708, DialogHandler provider type input may be tampered with, potentia |
| 🟠 high | CVE-2026-44690: In NLnet Labs Unbound 1.7.0 up to and including 1.25.1, insufficient validation of the … | — | In NLnet Labs Unbound 1.7.0 up to and including 1.25.1, insufficient validation of the RRSIG.Labels field combined with  |
| 🟠 high | CVE-2026-55973: In NLnet Labs Unbound 1.23.0 up to and including 1.25.1, when 'dns-error-reporting: yes… | — | In NLnet Labs Unbound 1.23.0 up to and including 1.25.1, when 'dns-error-reporting: yes' is set, the EDNS Report-Channel |
| 🟠 high | CVE-2026-11331: An attacker who knows (or guesses) that a resolver uses RPZ with wildcard CNAME policie… | — | An attacker who knows (or guesses) that a resolver uses RPZ with wildcard CNAME policies can craft query names long enou |
| 🟠 high | CVE-2026-11721: It is possible for an attacker's zone to respond to a query with an RRSIG that has a sm… | — | It is possible for an attacker's zone to respond to a query with an RRSIG that has a smaller number of labels than the z |
| 🟠 high | CVE-2026-12617: The issue is unexpected program termination based on ordering and/or specific content i… | — | The issue is unexpected program termination based on ordering and/or specific content in responses to queries for CNAME  |
| 🟠 high | CVE-2026-13204: If a provably insecure domain is covered by both an NSEC and NSEC3 record at the parent… | — | If a provably insecure domain is covered by both an NSEC and NSEC3 record at the parent, and there exist an RRSIG for on |
| 🟠 high | CVE-2026-13321: The BIND resolver accepts validly-signed NSEC records where the "Next Domain Name" fiel… | — | The BIND resolver accepts validly-signed NSEC records where the "Next Domain Name" field points outside the signer's zon |
| 🟠 high | CVE-2026-40714: Dell PowerProtect Data Manager, versions prior to 20.2.0.0, contain(s) an Improper Inpu… | — | Dell PowerProtect Data Manager, versions prior to 20.2.0.0, contain(s) an Improper Input Validation vulnerability. A hig |
| 🟠 high | CVE-2026-49499: Dell PowerProtect Data Manager, versions prior to 20.2.0.0, contain(s) a Generation of … | — | Dell PowerProtect Data Manager, versions prior to 20.2.0.0, contain(s) a Generation of Incorrect Security Tokens vulnera |
| | _+31 more…_ | | |

## Other Vulnerabilities (1)

_Additional vulnerabilities observed across products and services._

| Severity | Finding | MITRE | Description |
|----------|---------|-------|-------------|
| ⚪ unknown | CVE-2026-0770: Langflow Langflow — Langflow Inclusion of Functionality from Untrusted Control Sphere Vulnerability | `T1190` | Langflow contains an inclusion of functionality from untrusted control sphere vulnerability that allows remote attackers |

## Ransomware activity (ransomware.live + peers) (310)

_Victim claims observed across ransomware.live, Ransomlook, cti.fyi, ransomfeed, ransomwatch, andreafortuna, and MyThreatIntel CTI feeds within this window._

| Severity | Finding | MITRE | Description |
|----------|---------|-------|-------------|
| 🟠 high | acsmallmaxwell.com.au — claimed by safepay | — | Founded in 1916 by Ambrose Cecil Small, the firm has provided professional accounting and financial services to business |
| 🟠 high | Ali-Monde — claimed by incransom | — | Ali-Monde listed by incransom. |
| 🟠 high | Bath Fitter — claimed by anubis | — | Employee data breach at a major manufacturing company. |
| 🟠 high | Bolt & Nut Manufacturing — claimed by qilin | — | Industrial Machinery & Equipment |
| 🟠 high | Caterpillar — claimed by coinbasecartel | — | Manufacturing - $67 Billion |
| 🟠 high | cenesco.de — claimed by safepay | — | Founded in 1998, the company provides comprehensive information technology solutions for small and medium-sized enterpri |
| 🟠 high | CKR Consulting Engineers — claimed by payload | — | CKR Consulting Engineers is a prominent South African engineering consultancy firm headquartered in Johannesburg, establ |
| 🟠 high | College O'Sullivan de Québec — claimed by kairos | — | Collège O'Sullivan de Québec offers a variety of training programs both in-class and online, focusing on fields such as  |
| 🟠 high | College-OSullivan-de-Qubec — claimed by kairos | — | Ransomware group called kairos claims attack for College-OSullivan-de-Qubec. We identify this attack with following hash |
| 🟠 high | Collge O'Sullivan de Québec — claimed by kairos (CA) | — | Collège O'Sullivan de Québec offers a variety of training programs both in-class and online, focusing on fields such as  |
| 🟠 high | Collge-OSullivan-de-Qubec — claimed by kairos | — | Ransomware group called kairos claims attack for Collge-OSullivan-de-Qubec. We identify this attack with following hash  |
| 🟠 high | Colliers Real Estate — claimed by coinbasecartel (US) | — | [AI generated] Colliers International is a global commercial real estate services company headquartered in Toronto, Cana |
| 🟠 high | Colliers Real Estate NEW — claimed by coinbasecartel | — | Real Estate - $5.7 Billion |
| 🟠 high | Colliers Real Estate&nbsp;NEW — claimed by coinbasecartel | — | Real Estate - &#036;5.7 Billion |
| 🟠 high | Eana — claimed by qilin | — | Business Services |
| 🟠 high | eurohold.bg — claimed by krybit | — | Eurohold Bulgaria AD (Еврохолд България АД) is a leading Bulgarian integrated holding company founded ... |
| 🟠 high | Fairlife / Coca-Cola — claimed by anubis | — | www.fairlife.com |
| 🟠 high | funksec53xh7j5t6ysgwnaidj5vkh3aqajanplix533kwxdz3qrwugid.onion — claimed by funksec | — | funksec53xh7j5t6ysgwnaidj5vkh3aqajanplix533kwxdz3qrwugid.onion listed by funksec. |
| 🟠 high | funksecsekgasgjqlzzkmcnutrrrafavpszijoilbd6z3dkbzvqu43id.onion — claimed by funksec | — | funksecsekgasgjqlzzkmcnutrrrafavpszijoilbd6z3dkbzvqu43id.onion listed by funksec. |
| 🟠 high | industriesjaro.com — claimed by safepay | — | Over several decades, Jaro has evolved from manufacturing telephone booths into a supplier of advanced outdoor enclosure |
| 🟠 high | jaecklin-industrial.de — claimed by safepay | — | Founded in 1935 by Julius Jäcklin, the company has developed from a regional machine repair workshop into a globally rec |
| 🟠 high | Jota Joias Premium — claimed by nova | — | Jota Joias Premium is a Brazilian online jewelry retailer specializing in 18K gold jewelry, wedding rings, watches, silv |
| 🟠 high | Jrd logistics — claimed by nova | — | Jrd logistics LTD is an India-based freight forwarding and supply chain company headquartered in Kolkata that provides i |
| 🟠 high | Koplarla — claimed by nova | — | Koperasi Konsumen Karyawan PT Aplikanusa Lintasarta (KOPKARLA) was established in 1992 and at that time was focusing on  |
| 🟠 high | L&A Transport — claimed by akira | — | L & A Transport is a reputable trucking company with over 50 years of experience in providing awide range of shipping se |
| 🟠 high | LA-Transport — claimed by akira | — | Ransomware group called akira claims attack for LA-Transport. We identify this attack with following hash code: b2dcae2f |
| 🟠 high | lbb-treuhand.de — claimed by safepay | — | The company specializes in tax consulting, auditing, accounting, payroll administration, financial reporting, and busine |
| 🟠 high | McKeever , Varga & Senko — claimed by akira | — | McKeever Varga & Senko is a firm of Certified Public Accountants dedicated to providing superior client service and prof |
| 🟠 high | mende-grundbesitz.de — claimed by safepay | — | Founded in 1994, the company specializes in the professional administration of residential, commercial, and mixed-use re |
| 🟠 high | PP+K — claimed by qilin | — | Advertising & Marketing |
| 🟠 high | Reni Farmácias Associadas — claimed by doommageddon | — | upcoming \| N/A \| 0 files |
| 🟠 high | Rumah Sakit Universitas Indonesia (RSUI) — claimed by nova | — | Rumah Sakit Universitas Indonesia (RSUI) is the teaching hospital of the University of Indonesia, providing advanced med |
| 🟠 high | Rumah-Sakit-Universitas-Indonesia-RSUI — claimed by nova | — | Ransomware group called nova claims attack for Rumah-Sakit-Universitas-Indonesia-RSUI. We identify this attack with foll |
| 🟠 high | Sirl — claimed by thegentlemen | — | sirl.pt zoominfo.com/c/sirl/372746430 Portuguese manufacturing company founded in 1988 and headquartered in Penela, Coim |
| 🟠 high | stroebel-gruppe.de — claimed by safepay | — | Headquartered in Langenzenn, Bavaria, the company was founded in 1978 by Gerlinde and Gerhard Ströbel and has grown from |
| 🟠 high | Synergy Products — claimed by qilin | — | Home Improvement & Hardware Retail |
| 🟠 high | timetex.de — claimed by safepay | — | The company traces its origins to 1991, when the TimeTEX brand was acquired and expanded into a comprehensive supplier o |
| 🟠 high | Universidad Nacional de Mar del Plata — claimed by nova | — | The Universidad Nacional de Mar del Plata offers a wide range of academic programs, including undergraduate and postgrad |
| 🟠 high | wdk.de — claimed by safepay | — | Founded in 1950 and headquartered in Frankfurt am Main, the organization serves as the central voice of German manufactu |
| 🟠 high | wikoff.com — claimed by chaos | — | [PUBLIC DISCLOSURE]

Target: Wikoff Color Corporation (wikoff.com)
Data Volume: 650 GB
Status: Full Compromise Confirmed |
| 🟠 high | Anpra SAS — claimed by spacebears (CO) | — | With over a decade of experience in the auto parts sector, Anpra SAS has established a solid reputat… |
| 🟠 high | argonautms.com — claimed by chaos (RU) | — | Target Organization: argonautms.com (Argonaut Manufacturing Services) Status: Unauthorized Access &amp;… |
| 🟠 high | BiesSse Group — claimed by spacebears (IT) | — | The BiesSse group, which has been operating on the global market for over 40 years, specializes in t… |
| 🟠 high | Braincell Braincell.sa rfcargo.braincell.solutions rf.braincell.solutions governata.com — claimed by 0daysyndicate | — | Braincell Braincell.sa rfcargo.braincell.solutions rf.braincell.solutions governata.com listed by 0daysyndicate. |
| 🟠 high | DoAllTech — claimed by spacebears (KR) | — | The Company is leading the construction IT industry with the best technology and various experiences… |
| 🟠 high | downies.com — claimed by settra (AU) | — | Downies Collectables Pty Ltd: &#036;1.4M per Month — and &#036;78K in Rent Paid to Itself PROLOGUE We are in p… |
| 🟠 high | Evergreen Title — claimed by qilin (US) | — | N/A… |
| 🟠 high | Finer & Finer — claimed by akira | — | Finer & Finer listed by akira. |
| 🟠 high | Finer &amp; Finer — claimed by akira | — | Finer &amp; Finer CPA is a leading accounting firm based in Randolph, MA, offering a wide range of serv… |
| 🟠 high | gokids gokidspublishing.com dev.redpilotstudio.com gokidsmobile.com — claimed by 0daysyndicate | — | gokids gokidspublishing.com dev.redpilotstudio.com gokidsmobile.com listed by 0daysyndicate. |
| | _+260 more…_ | | |

## IOC Dump

`5786` indicators (8536 observed total, truncated for storage):

```
url  http://59.58.188.145:33841/bin.sh  # malware_download | 32-bit,arm,elf,mirai,Mozi  @ 2026-07-26 00:24:25
url  http://105.186.248.15:48079/i  # malware_download | mirai  @ 2026-07-26 00:06:06
url  https://cleenfoecleen22.com/cleen_trs1.exe  # malware_download | dropped-by-remus,e3aaa940c8c30f0571cc42a6e9260f60  @ 2026-07-26 00:00:14
url  http://123.4.168.73:36224/bin.sh  # malware_download | 32-bit,elf,mips,Mozi  @ 2026-07-25 23:56:22
url  http://125.41.6.91:34555/i  # malware_download | 32-bit,elf,mips,Mozi  @ 2026-07-25 23:49:14
url  http://125.42.236.220:40189/i  # malware_download | 32-bit,elf,mips,Mozi  @ 2026-07-25 23:35:19
url  http://196.188.75.58:54416/i  # malware_download | 32-bit,arm,elf,mirai,Mozi  @ 2026-07-25 23:34:19
url  http://27.215.208.135:40785/i  # malware_download | 32-bit,elf,mips,Mozi  @ 2026-07-25 23:33:19
url  http://196.188.75.58:54416/bin.sh  # malware_download | 32-bit,arm,elf,mirai,Mozi  @ 2026-07-25 23:32:16
url  http://42.231.70.61:51928/i  # malware_download | 32-bit,elf,mips,Mozi  @ 2026-07-25 23:25:20
url  http://125.41.6.91:34555/bin.sh  # malware_download | 32-bit,elf,mips,Mozi  @ 2026-07-25 23:24:18
url  http://175.146.225.46:48972/i  # malware_download | 32-bit,elf,mips,Mozi  @ 2026-07-25 23:12:15
url  http://111.127.235.14:58633/bin.sh  # malware_download | 32-bit,arm,elf,Mozi  @ 2026-07-25 23:11:32
url  http://125.42.236.220:40189/bin.sh  # malware_download | 32-bit,elf,mips,Mozi  @ 2026-07-25 23:09:21
url  http://42.231.70.61:51928/bin.sh  # malware_download | 32-bit,elf,mips,Mozi  @ 2026-07-25 23:02:16
url  http://27.37.100.220:38525/i  # malware_download | 32-bit,elf,mips,Mozi  @ 2026-07-25 22:55:17
url  http://175.146.225.46:48972/bin.sh  # malware_download | 32-bit,elf,mips,Mozi  @ 2026-07-25 22:51:20
url  http://27.215.208.135:40785/bin.sh  # malware_download | 32-bit,elf,mips,Mozi  @ 2026-07-25 22:51:19
url  http://178.150.97.200:32971/i  # malware_download | 32-bit,elf,mips,Mozi  @ 2026-07-25 22:38:06
url  http://61.52.186.184:44221/i  # malware_download | 32-bit,elf,mips,Mozi  @ 2026-07-25 22:36:14
url  http://27.37.100.220:38525/bin.sh  # malware_download | 32-bit,elf,mips,Mozi  @ 2026-07-25 22:29:25
url  http://14.177.88.148:46180/i  # malware_download | 32-bit,elf,mips,Mozi  @ 2026-07-25 22:21:35
url  http://124.131.145.114:44654/i  # malware_download | 32-bit,elf,mips,Mozi  @ 2026-07-25 22:19:23
url  http://178.150.97.200:32971/bin.sh  # malware_download | 32-bit,elf,mips,Mozi  @ 2026-07-25 22:16:21
url  http://123.8.82.72:41082/i  # malware_download | Mozi  @ 2026-07-25 21:52:06
url  http://221.15.11.99:49531/i  # malware_download | Mozi  @ 2026-07-25 21:42:08
url  http://182.124.41.191:41705/i  # malware_download | Mozi  @ 2026-07-25 21:27:08
url  http://182.124.41.191:41705/bin.sh  # malware_download | Mozi  @ 2026-07-25 21:27:07
url  http://123.8.82.72:41082/bin.sh  # malware_download | Mozi  @ 2026-07-25 21:22:07
url  http://105.187.42.210:52419/i  # malware_download | 32-bit,arm,elf,mirai,Mozi  @ 2026-07-25 21:20:27
url  http://110.85.99.205:38787/i  # malware_download | 32-bit,arm,elf,mirai,Mozi  @ 2026-07-25 21:20:17
url  http://182.113.193.242:56108/i  # malware_download | None  @ 2026-07-25 21:17:07
url  http://125.47.239.251:37472/i  # malware_download | Mozi  @ 2026-07-25 21:01:07
url  http://115.57.254.177:40779/i  # malware_download | 32-bit,elf,mips,Mozi  @ 2026-07-25 20:57:21
url  http://115.55.218.131:33616/i  # malware_download | None  @ 2026-07-25 20:52:07
url  http://115.57.254.177:40779/bin.sh  # malware_download | 32-bit,elf,mips,Mozi  @ 2026-07-25 20:31:27
url  http://182.113.193.242:56108/bin.sh  # malware_download | None  @ 2026-07-25 20:27:10
url  http://125.43.107.168:57386/i  # malware_download | Mozi  @ 2026-07-25 20:22:06
url  http://125.43.107.168:57386/bin.sh  # malware_download | Mozi  @ 2026-07-25 20:07:08
url  http://115.55.218.131:33616/bin.sh  # malware_download | None  @ 2026-07-25 20:07:06
url  http://106.41.137.15:48343/i  # malware_download | 32-bit,arm,elf,mirai,Mozi  @ 2026-07-25 20:04:32
url  http://105.184.183.213:58987/i  # malware_download | mirai  @ 2026-07-25 19:52:08
url  http://46.236.65.43:41753/i  # malware_download | 32-bit,elf,mips,Mozi  @ 2026-07-25 19:34:17
url  http://119.183.25.240:40130/bin.sh  # malware_download | 32-bit,elf,mips,Mozi  @ 2026-07-25 19:10:20
url  http://115.55.239.136:53259/i  # malware_download | 32-bit,elf,mips,Mozi  @ 2026-07-25 19:08:11
url  http://221.14.39.115:54130/i  # malware_download | 32-bit,elf,mips,Mozi  @ 2026-07-25 19:07:26
url  http://119.183.25.240:40130/i  # malware_download | Mozi  @ 2026-07-25 19:07:09
url  http://115.56.171.219:49349/bin.sh  # malware_download | 32-bit,elf,mips,Mozi  @ 2026-07-25 18:49:23
url  http://221.14.39.115:54130/bin.sh  # malware_download | 32-bit,elf,mips,Mozi  @ 2026-07-25 18:45:29
url  http://14.0.131.161:53823/i  # malware_download | None  @ 2026-07-25 18:42:08
url  http://125.47.239.251:37472/bin.sh  # malware_download | 32
... (+524902 chars truncated)
```

---
Sources: CISA KEV, NVD, cvefeed.io, ransomware.live, URLhaus, MalwareBazaar, ThreatFox, TweetFeed
MITRE ATT&CK: T1059, T1059.007, T1068, T1078, T1190, T1203, T1566

---
*[PANOPTICON](https://pranithjain.qzz.io/threatintel/briefings) · [Full brief](https://pranithjain.qzz.io/threatintel/briefings/weekly-2026-W30)*