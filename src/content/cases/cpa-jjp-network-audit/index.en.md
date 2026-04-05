---
type: case
slug: cases/cpa-jjp-network-audit
title: |
  CPA-JJP: HPE Network Audit and Access Recovery Without Handover Docs
description: |
  WalksCloud audited an inherited HPE environment with missing credentials and documentation, restored management access, and produced structured handover records for ongoing operations.
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.55
  changefreq: monthly
  lastmod: build
jsonld:
  kind: CaseStudy
---
## Client background

- In 2022Q4, the CPA management team requested support through its parent company's IT/MIS/SRE channel, and WalksCloud handled the CPA-JJP network assessment.
- The prior vendor handover had no usable documentation, including missing credentials and configuration records.
- The environment was fully HPE-based: multiple rack servers, one Fibre Channel storage system, three Instant-On switches, and fewer than ten hidden APs.

## Initial situation and pain points

1. **No configuration handover baseline**: impossible to validate whether current settings were correct or to track change history.
2. **Network equipment without managed credentials**: Instant-On switches were exposed and required controlled reset plus rebuilt management access.
3. **Hidden infrastructure visibility gaps**: some APs were physically concealed above ceilings or under flooring, making inventory difficult.

## WalksCloud approach

### 1. Device inventory and access reset

- Verified version and link state on each HPE Instant-On switch, then reset and rebuilt management access where credentials were missing.
- Confirmed the network required only basic segmentation (no complex VLAN logic), enabling fast reset and restoration.
- Ran health checks on HPE rack servers and Fibre Channel storage for operational anomalies.
- Logged into adjacent Fortigate systems for permission validation only; no configuration changes were needed there.

### 2. Structured inventory process for undocumented environments

- Created a physical asset list with location and serial records across servers, storage, switches, and APs.
- For hidden APs, validated reachable power/link paths and annotated inaccessible units on diagrams for follow-up.
- Delivered a simplified topology and account-governance summary as the new handover baseline.

### 3. Handover documentation delivery

- Consolidated post-reset management-account records and password-governance handoff items for client signoff.
- Provided per-device-class operating summaries (for example, switch management IP references and server/storage usage status).
- Added maintenance guidance so future device additions are documented immediately.

## Outcomes

- The HPE environment returned to a managed state, with switch and AP administration restored to the client.
- Fibre Channel storage and server health conditions were validated.
- The client now has complete handover documentation, reducing personnel-transition risk.
