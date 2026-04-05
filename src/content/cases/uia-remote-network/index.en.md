---
type: case
slug: cases/uia-remote-network
title: |
  UIA: Keeping UniFi Office Network Stable Through Remote Operations
description: |
  A remote-first operations model that maintained office network stability while documenting upgrade risks and phased segmentation recommendations under limited client-side IT maturity.
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

- In 2021Q1, UIA engaged WalksCloud through referral for office-network and on-prem virtualization operations.
- In-house IT capability was limited, and the organization continued to rely on a shared WPA2 password without RADIUS or asset-management tooling.
- The client remained cost-driven and preferred a "remote managed operations plus on-demand onsite" model, but had limited trust in remote investigation workflows.

## Main challenges

1. **Remote operations scope was constrained**: available control was mainly limited to UniFi controller operations, firmware scheduling, and configuration-change tracking.
2. **Onsite coordination quality was inconsistent**: remote diagnostic questions often received "why not come onsite" responses, and even onsite sessions lacked consistent device-localization support.
3. **Private-cloud and office traffic were mixed**: ESXi cluster traffic and office traffic shared the same network segment, with no VLAN separation between VM and wireless traffic.

## WalksCloud remote operations workflow

1. **Initial topology baseline capture**

    - Within the available information window, we completed a full baseline record of AP, switch, ESXi, and major VLAN topology to support future anomaly comparison.

2. **Standardized inspection and off-peak updates**

    - Weekly inspection through UniFi controller covered approximately 7 UniFi switches (mixed models), 1 UniFi router, 4 UniFi APs, and 2 Mikrotik router/switch units, including alerts and anonymized usage trends.
    - If no anomaly was observed, no unnecessary escalation was triggered. The most frequent recurring issue was link speed dropping from `1G` to `100M`; cable replacement by the client temporarily improved behavior but recurrence remained common.
    - When new firmware became available, WalksCloud validated it first in internal environment, then coordinated staged updates in non-business hours with per-device post-update connectivity checks.
    - Configuration deltas and change records were preserved in shared reports for follow-up communication.

3. **Risk reminders and upgrade recommendations**

    - We continuously recommended RADIUS and role-layered permissions to reduce shared-password abuse risk.
    - We also recommended separating ESXi-host traffic from office traffic via VLAN segmentation to prevent wireless-path bottlenecks, and provided an implementation outline for internal evaluation.

## Execution highlights

- **Remote-first operating model**: even when onsite execution was preferred by stakeholders, operations still followed inspection-update-verify sequence to preserve stability and traceability.
- **Transparent records and risk disclosure**: each inspection/update cycle documented deferred improvements (for example, unadopted VLAN proposals) so decision-makers could see the operational cost of delayed upgrades.
- **Adaptive coordination**: under the client's fixed WPA2 constraint, we continued delivering actionable risk guidance and staged governance recommendations without forcing disruptive redesign.

## Outcomes and follow-up

- UniFi operations remained stable through the engagement, with firmware and configuration updates completed without planned service downtime.
- Although the client did not adopt VLAN and RADIUS recommendations in this phase, the related SOP and improvement backlog remained as the basis for future upgrade evaluation.
- This case helped formalize WalksCloud's "remote-first with onsite exceptions" managed-operations standard for similar environments.
