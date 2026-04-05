---
type: case
slug: cases/jal-pa
title: |
  JAL: Palo Alto License Recovery and Office Network Rebuild on Limited Budget
description: |
  When licensing expired and the original vendor was unreachable, WalksCloud coordinated license takeover, redesigned wireless and VLAN controls, and stabilized office connectivity.
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
## Client background and starting point

- In 2022Q2, JAL was referred to WalksCloud through a trusted contact who was also serving as the client's security consultant. JAL was using Palo Alto, but licenses had expired and the original supplier was unreachable.
- The office depended on a single consumer-grade Wi-Fi router, with weak coverage and poor interference tolerance.
- The internal network needed separation across business, management-isolated, and intern/guest zones, plus controlled NAS and network-device access aligned with security policy.

## Challenges

1. **Palo Alto license recovery without original supplier path**: no direct renewal channel for license and policy updates.
2. **Wireless instability and coverage gaps**: consumer-grade hardware could not support the office environment.
3. **Complex isolation requirements**: multiple zones required distinct NAS and route policies, including a dedicated Fortigate line for special use.
4. **Budget constraints**: governance and stability improvements had to be delivered under controlled spending.

## WalksCloud approach

1. **Assessment-first, phased execution**

    - Audited existing Palo Alto, firewall, NAS, and Wi-Fi layout to separate reusable assets from required changes.
    - Prioritized Palo Alto license recovery first: coordinated with local distributor and vendor channels, transferred registration ownership to WalksCloud, completed the license-restoration process, and restored rule and firmware update capability.

2. **Aruba managed AP rollout**

    - Deployed three Aruba managed APs (including controller capability) to improve coverage and central management within budget.
    - Post-deployment, wireless complaint volume dropped to zero.

3. **ACL and VLAN segmentation aligned with policy**

    - Implemented ACL and VLAN segmentation on Palo Alto according to the security consultant's design requirements:
      - business zone with access to two NAS units and selected internal services;
      - isolated management zone with access to the third NAS and full network infrastructure;
      - intern/guest zone restricted to approved NAS targets only.
    - Preserved dual-line architecture, with one path routed through Fortigate for dedicated scenarios.

4. **Relocation-stage advisory support**

    - During office relocation, WalksCloud provided architecture consultation while the appointed onsite vendor executed physical migration.
    - WalksCloud validated that network topology and license posture remained consistent after move-in.

## Outcomes

- Palo Alto licensing was restored, enabling continuous policy and firmware updates.
- Wi-Fi coverage and stability met operational requirements, with complaints reduced to zero.
- NAS and network segmentation controls were implemented as designed, including dual-line routing and controlled guest/intern access paths.
