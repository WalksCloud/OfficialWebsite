---
type: case
slug: cases/ttw-remote-network
title: |
  TTW: Remote Network Operations with DNS and VPN Identity Governance
description: |
  WalksCloud standardized TTW remote network operations with AdGuard Home filtering, RADIUS-backed identity controls, and VLAN segmentation in a shared-office context.
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.62
  changefreq: monthly
  lastmod: build
jsonld:
  kind: CaseStudy
---
## Client background and engagement context

- In 2021Q1, TTW (an NGO/NPO organization) adopted a fully managed hybrid stack of UniFi, Mikrotik, and Cisco through a referral and partnered with WalksCloud.
- TTW had in-house MIS staff for day-to-day tasks but lacked full-network architecture and security planning capacity.
- During relocation to a co-working space, we coordinated with facility management so TTW could keep independent network governance and existing operations in a shared telecom room.
- The trust built in this project also led TTW to invite WalksCloud into vendor-side Jamf/MDM implementation discussions as a technical liaison (covered in a separate case).

## Primary challenges

1. **Access control in shared infrastructure**: preserve independent routing and VLAN boundaries in a co-working environment to prevent unauthorized access by other tenants or former staff.
2. **Limited NGO resources**: build workflows the client can operate directly without full-time reliance on external consultants.
3. **Cross-layer service integration**: align DNS filtering, VPN, LDAP/RADIUS, and Jamf MDM operations under one coherent process.

## WalksCloud approach

1. **Remote managed operations baseline**

    - Initial topology: 1 UniFi router, 1 Mikrotik router, 7 UniFi APs, 2 UniFi switches, and 3 Cisco PoE switches.
    - After moving to the co-working space, TTW retained 2 routers and 1 Cisco PoE switch, then added 1 Cisco switch in the shared telecom room as a patching hop to keep TTW VLAN and external connectivity fully controlled.
    - WalksCloud monitored SNMP and Syslog telemetry internally for health verification. We did not expose that telemetry directly to the client; the client escalated anomalies, and we correlated evidence before giving recommendations.

2. **AdGuard Home filtering**

    - Deployed a dedicated AdGuard Home host with a validated public filter set.
    - Fed DNS logs into the alerting flow to support phishing incident audit and traceability.
    - Ran weekly ACME renewal through CI/CD to update SSL certificates for AdGuard Home and RADIUS, keeping certificate trust chains current in production.

3. **Dual VPN hosts with LDAP/RADIUS identity governance**

    - Operated two VPN hosts for separate user classes (general users and intelligence/research users), with group policy enforced by LDAP and RADIUS.
    - Logged all sign-ins into internal audit records (IP, region, AS number, timestamp) for traceability.
    - Provided self-service interfaces for account activation/deactivation and password reset around joiner/mover/leaver events.

4. **VLAN design for shared office operations**

    - Segmented research systems, office Wi-Fi, and guest Wi-Fi into independent VLANs, with ACL-based routing controls where needed.
    - Used agreed cable labeling and handoff procedures with co-working management so TTW MIS could maintain isolation with low daily overhead.

## Execution highlights

- **True remote managed operations**: routine checks were completed through metrics and alerts without frequent onsite visits.
- **Self-service plus automation**: TTW handled account lifecycle and password resets directly; WalksCloud stepped in only for exceptions.
- **Audit-ready operations**: VPN logs, DNS filtering records, and VLAN policy evidence were preserved in shared reporting to maintain NGO audit capacity under tight budgets.

## Outcomes

- TTW maintained an independent, secure network even after moving into shared office infrastructure.
- DNS filtering successfully blocked phishing domains and reduced social-engineering risk typical in nonprofit environments.
- TTW MIS took over daily account operations through self-service, while WalksCloud handled only a small set of exceptions in a low-friction remote advisory model.
- Certificate renewals and audit records remained continuously maintained in the background, preventing silent control drift.
- Day-to-day collaboration became exception-driven: routine operations stayed stable with minimal interruption.
