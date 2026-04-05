---
type: tech
slug: tech/datacenter-move-ups-improvement
title: |
  Data Center Relocation and UPS Improvement SOP
description: |
  A practical relocation SOP using power inventory, maintenance-window control, dual-path switching, and UPS bypass validation to reduce outage risk.
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.45
  changefreq: monthly
  lastmod: build
---
## Pre-migration assessment

1. **Asset and load inventory**: enumerate servers, network devices, storage, UPS units, and cooling assets with both rated and measured power draw.
2. **Power and cooling capacity review**: validate site power capacity, wiring routes, PDU circuit allocation, and cooling headroom.
3. **Service dependency mapping**: define deterministic startup/shutdown sequence for database, directory, licensing, and monitoring services.
4. **Downtime and risk-window definition**: evaluate move distance, time constraints, temporary network design, backup power strategy, and acceptable outage window.

## Relocation and UPS-improvement workflow

1. **Maintenance-window control**: freeze nonessential changes before migration to prevent concurrent configuration drift.
2. **Batch shutdown and labeling**: power down by dependency sequence and label each device by rack position, power circuit, and network-port mapping.
3. **Move and recabling**: rebuild links from topology and wiring plans, restoring core switching, storage, and identity services first.
4. **UPS improvement and controlled switching**: complete bypass, dual-path feed integration, and monitoring onboarding, then execute controlled switch drills.
5. **Host and service recovery**: restart in predefined order and verify routing, time sync, monitoring alerts, and backup schedule integrity.

## Power and stability validation

1. UPS runtime meets design target under peak-load profile.
2. Dual-path switching is reproducible without service interruption.
3. Core-service recovery sequence and dependency behavior match planned order.
4. Monitoring alerts, SNMP telemetry, and notification channels trigger as expected.
5. No sustained power or network anomaly alerts are observed during first 24 hours after cutover.

## Common issues and triage order

1. **Post-cutover reachability gaps**: validate VLAN/ACL alignment against expected topology, then verify DNS/NTP state.
2. **Alert storm during UPS switching**: recalibrate thresholds for the new load profile when old-site thresholds are no longer representative.
3. **Localized circuit overload**: compare measured draw to planned allocation and rebalance high-load devices across PDU/circuit paths.
4. **Post-move backup failures**: verify storage path, licensing-service availability, and schedule timezone consistency.

## References

- Uptime Institute Tier Standard Overview  
  https://uptimeinstitute.com/tiers
- APC UPS Runtime Concepts  
  https://www.se.com/ww/en/faqs/FA156527/
