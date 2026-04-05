---
type: case
slug: cases/ana-unifi-controller
title: |
  ANA: Fast UniFi Controller Deployment, Migration, and Light Operations
description: |
  A foundation-sponsored UniFi controller deployment for WZZ that was moved from subsidized Azure hosting to WalksCloud private infrastructure with minimal downtime and ongoing lightweight support.
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

- In 2025Q1, ANA, acting in a foundation role, funded Azure VM hosting so WZZ could run a UniFi controller in public cloud.
- WalksCloud was brought in through trusted referrals to evaluate VM sizing and firewall posture, and to manage controller configuration and device onboarding (Azure account authority remained with ANA).
- There was no full maintenance contract; collaboration was based on controller usage fees plus on-demand support.

## Azure deployment phase

1. **Sizing and security planning**

    - Assessed current device count and growth to define VM CPU, RAM, and storage capacity.
    - Recommended Azure Firewall and NSG controls to limit source IP and management access to approved WalksCloud/WZZ service ranges.

2. **Controller deployment and handover**

    - Installed UniFi Controller on ANA-provided Azure VM and imported existing WZZ devices.
    - Established account, site, and baseline monitoring settings; ongoing registration and update workflows were managed by WalksCloud.

## Public-to-private migration workflow

- After subsidy ended, ANA needed to reduce Azure cost. WalksCloud migrated the controller to private cloud hosting.
- We used built-in UniFi export/import plus migration-target guidance: export old controller settings, import to private-cloud controller, and trigger reassociation.
- Because migration followed native UniFi workflows, no custom scripts or extended outage were required; transition completed in minutes.

## Operations model

- **Managed scope**: WalksCloud continued managing controller platform, site, and device registration; Azure-layer governance remained with ANA.
- **Update cadence**: controller and firmware updates were provided as risk-assessed, situational support.
- **Incident handling**: with no fixed maintenance contract, the client chose when to escalate and WalksCloud responded on request.
- **Fee model**: controller usage fee plus issue-driven support.

## Outcomes and practical note

- WalksCloud delivered rapid UniFi controller setup in a subsidy-backed model, then enabled flexible migration to private hosting when cost posture changed.
- For clients needing mostly platform access rather than full managed contracts, a lightweight advisory-plus-managed model can still keep operations stable.
