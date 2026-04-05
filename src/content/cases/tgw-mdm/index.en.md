---
type: case
slug: cases/tgw-mdm
title: |
  TGW: Jamf Self-Service Expansion and iPhone Fleet Governance
description: |
  TGW scaled Jamf self-service software delivery and policy controls across Mac and iPhone fleets, improving endpoint consistency and auditability with minimal daily overhead.
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
## Client background

- In 2022Q3, TGW and TTW each had their own Jamf Pro/Jamf Connect environments built by the vendor, and WalksCloud supported both clients with a shared operations team and automation toolkit.
- TGW required a larger VPP catalog than TTW and added around 20 iPhones as managed corporate devices.
- With limited internal IT resources, TGW needed to expand self-service coverage and mobile device controls on top of WalksCloud's shared script baseline.

## Primary challenges

1. **Scaling self-service**: expand Jamf Self Service with more VPP software, including design tools, meeting apps, and event-related apps.
2. **iPhone corporate device restrictions**: block direct App Store installs and enforce VPP-only application assignment.
3. **Automation continuity**: keep shared components like Make Me an Admin, Homebrew workflows, and operational scripts stable as TGW scale increases.

## WalksCloud approach

1. **Reuse the automation baseline**

    - Reused WalksCloud's shared scripts (VPP/EPP onboarding, Homebrew package workflows, and Make Me an Admin audit controls) to keep Mac-side operations consistent.
    - Extended TGW-specific requirements in Jamf Self Service so users could install approved VPP applications independently.

2. **VPP and iPhone control model**

    - Enforced a "VPP-delivery only" policy for managed iPhones: applications must come from approved VPP assignments or administrator-defined auto-install rules.
    - Disabled direct App Store self-installation to prevent unauthorized software on corporate devices.

3. **Self-service operations design**

    - Organized VPP applications in Jamf Self Service by category, such as general Mac tools, event apps, and iPhone-only software.
    - Defined a request path for additional apps: users submit requests, then we evaluate whether each app should enter self-service or be added to auto-install policy.

## Outcomes

- TGW keeps the same stable automation foundation as TTW while supporting broader needs through a larger VPP self-service catalog.
- Managed iPhones are restricted to approved software, reducing misuse risk.
- Internal IT can focus on app catalog governance (new/remove VPP items) while most operational delivery remains automated.
