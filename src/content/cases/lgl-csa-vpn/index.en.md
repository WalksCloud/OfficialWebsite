---
type: case
slug: cases/lgl-csa-vpn
title: |
  LGL-CSA: Custom Zero Trust VPN App Branding and Store Delivery
description: |
  WalksCloud supported multi-platform app branding, release preparation, and ownership-transfer planning under strict account and review-policy constraints.
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
## Background and project scope

- In 2025Q2, LGL-CSA used OpenZiti to build a zero-trust environment and wanted Android, iOS, and macOS VPN clients released under its own brand.
- Due to account policy constraints, the client did not want to register Apple Developer identity under its official organization profile and initially considered in-house distribution, then had to move toward public-store submission.
- WalksCloud's scope was limited to UI/branding adjustments and release-process support. Core application logic and OpenZiti SDK ownership remained with the client.

## Challenges

1. **Brand consistency with limited code ownership**: unify iconography, color system, and typography across three platforms without modifying core program logic.
2. **Store-policy constraints**: Google Play acceptance was relatively straightforward; iOS/macOS review paths were much stricter, especially under account constraints.
3. **Policy conflict on ownership transfer**: for certain API usage patterns, Apple does not permit app ownership transfer, conflicting with the client's handover expectation after development.

## WalksCloud approach

1. **UI and branding adaptation**

    - Applied client-provided logo, primary colors, typography, and startup visuals consistently across Android, iOS, and macOS.
    - Preserved compatibility boundaries with OpenZiti SDK so branding changes would not impact tunnel and session behavior.

2. **Android release support**

    - Prepared and submitted Google Play metadata (descriptions, screenshots, privacy-policy references) and release sequencing.
    - Supported internal testing through production release steps and tracked review progress with the client.
    - Completed ownership and source handover after successful Android launch.

3. **Apple review coordination**

    - Prepared TestFlight validation assets, App Store metadata, and required compliance declarations.
    - Documented repeated iOS review rejections and macOS update rejection patterns, then consolidated reasons for client decision-making.
    - Clarified ownership-transfer restrictions under Apple policy and mapped the practical impact on delivery options.

## Outcomes and constraints

- **Android**: published successfully and transferred with source materials for client-side maintenance.
- **Apple platforms**: due to account and review-policy constraints, the client chose to stop further submission attempts and use Android as the external delivery channel.
- **Key takeaway**: if organization-level Apple Developer identity cannot be used and future ownership transfer is required, policy risk must be assessed before implementation investment.
