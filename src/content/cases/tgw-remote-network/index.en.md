---
type: case
slug: cases/tgw-remote-network
title: |
  TGW: Remote Network Operations and Time Machine Backup Continuity
description: |
  Building on proven TTW patterns, WalksCloud delivered segmented remote operations and Jamf Trust-assisted Time Machine backup access for stable day-to-day governance.
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.6
  changefreq: monthly
  lastmod: build
jsonld:
  kind: CaseStudy
---
## Client background

- In 2022Q3, TGW's IT contact came from the earlier TTW collaboration and brought operational trust in WalksCloud's managed model; even after multiple handover changes, cooperation remained stable.
- The site primarily used three managed Aruba APs and one Mikrotik router, plus a separate classroom segment (covered in a different case).
- The new requirement was secure Time Machine backup from Mac endpoints back to office NAS for evidence-grade retention.

## Challenges

1. **Short deployment lead time**: TGW wanted to adopt proven patterns quickly, including AdGuard Home, LDAP/RADIUS, and remote inspection workflows used in TTW.
2. **No general VPN requirement, but Time Machine support was required**: TGW did not need OpenVPN access; it needed a controlled VPN path only for backup traffic.
3. **Backup traceability for security investigations**: backup records needed to remain auditable after writing into NAS storage.

## WalksCloud approach

1. **Remote managed operations with DNS/LDAP/RADIUS**

    - Reused the proven TTW baseline: AdGuard Home filtering (public filters plus homelab validation), LDAP/RADIUS self-service management, and CI/CD-driven update workflows.
    - Maintained SNMP/Syslog visibility under WalksCloud-managed channels and designed office/guest segmentation around Aruba AP and Mikrotik routing.

2. **Jamf Trust plus Time Machine backup path**

    - Used Jamf Security Cloud/Jamf Trust as the only approved transport, accepting encrypted connections from Jamf Trust app clients.
    - Defined a controlled Time Machine flow: enable backup from Jamf Self Service, connect through Jamf Trust, and write to per-user folders on office NAS.
    - Preserved backup logs and NAS journal records as traceable evidence for incident investigation.

3. **Long-term operations and automation**

    - Renewed DNS/RADIUS certificates weekly through CI/CD ACME workflows.
    - Shared user/group and Jamf automation patterns with TTW, enabling fast patch and policy rollout.

## Outcomes

- TGW achieved TTW-equivalent remote operations stability in the new office without a long rediscovery phase.
- Jamf Trust plus Time Machine delivered traceable backup continuity and faster incident recovery readiness.
- With DNS filtering, LDAP/RADIUS controls, and self-service operations in place, WalksCloud intervention remained exception-based and low-disruption.
