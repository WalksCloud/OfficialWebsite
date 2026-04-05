---
type: tech
slug: tech/passive-inspection-report-workflow
title: |
  Passive Inspection Reporting for Exception-Only Notification Models
description: |
  A passive inspection reporting model that preserves traceable evidence and operational transparency when clients prefer anomaly-only notification.
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.45
  changefreq: monthly
  lastmod: build
---
## Why passive inspection is needed

Some clients outsource remote operations but do not want day-to-day notification noise, requesting updates only when anomalies occur. Without a standardized passive reporting model, later alert tracing and stakeholder handovers become unreliable.

## Predefined data baseline

1. **Event severity rules**: define informational/warning/critical conditions in advance to keep response decisions consistent.
2. **Data-retention windows**: set retention periods for alerts, SNMP metrics, and communication records based on storage constraints and traceability needs.
3. **Unified event IDs**: use the same incident identifier across alerts, tickets, and notifications.
4. **Notification boundaries**: agree which events trigger immediate notice versus periodic summary.

## Data collected in practice

1. **Device alerts and utilization**: capture controller-side alerts, client counts, and error counters from UniFi/Mikrotik platforms with retained history as available.
2. **Core-node SNMP metrics**: collect uplink throughput and interface status from selected key nodes via Zabbix, LibreNMS, or SNMP.
3. **Client incident context**: include ticket or messaging-summary context to preserve handling timeline.

## Interaction model with clients

- **Data usage boundary**: collected alerts and SNMP indicators are primarily for WalksCloud diagnosis; no additional portal/report UI is provided by default.
- **Notification channels**: anomaly updates are sent through agreed channels such as Line, Slack, or email. Formal periodic reports are delivered only if contracted.
- **On-demand summary option**: when clients request temporary summaries, consultants can provide focused extracts without changing baseline passive mode.

## Common issues and triage order

1. **Alert fatigue from high volume**: tune severity thresholds and suppression windows first.
2. **Duplicate notifications for one incident**: verify dedup keys (device, interface, time window).
3. **Client perception and metrics conflict**: align client-reported timestamps with SNMP/event timeline before conclusion.
4. **Weak retrospective traceability**: confirm event ID continuity across alert, ticket, and notification paths.

## Technical validation checklist

1. Severity rules are fixed and repeatable.
2. Alerts, SNMP records, and client reports can be correlated by one event ID.
3. Passive mode avoids daily noise while still surfacing major incidents quickly.
4. Post-incident review can reconstruct full timeline and actions.
5. Retention periods support cross-month and quarterly analysis needs.

## References

- LibreNMS Documentation  
  https://docs.librenms.org/
- Zabbix Documentation  
  https://www.zabbix.com/documentation/current/en/manual
