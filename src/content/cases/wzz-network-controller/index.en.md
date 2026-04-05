---
type: case
slug: cases/wzz-network-controller
title: |
  WZZ: UniFi Controller Hosting and NAS Refresh Risk Management on Tight Budget
description: |
  A constrained-scope engagement covering controller hosting migration, minimum-viable network setup, and low-budget NAS replacement guidance with explicit risk disclosure.
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

- In 2024Q4, WZZ was referred through JAL (security advisor) and ANA (technical advisor).
- WZZ had long operated with little to no IT/MIS budget and consistently prioritized "just enough to run" over security and resilience.

## Initial situation and pain points

1. **Network environment needed restructuring**: after office relocation, WZZ decided to rebuild network layout but would fund only the minimum baseline hardware.
2. **Controller hosting budget was compressed**: UniFi controller was initially hosted on an Azure VM subsidized by the ANA-side engagement, but after subsidy ended a lower-cost long-term option was required.
3. **NAS risk was underweighted**: legacy QNAP relied on multiple USB drives, performed poorly, and showed historical intrusion traces. WZZ wanted to switch to Synology but still expected advisory and migration under extreme budget constraints.
4. **Contract scope and fee were compressed from the start**: original proposal exceeded budget, so the client requested minimal scope and pushed annual pricing down to roughly 10% of full-service baseline.

## WalksCloud approach

### 1. Baseline network setup with constrained scope

- Performed a lightweight site check and requirement confirmation.
- Deployed a minimum viable design: Mikrotik router plus one UniFi AP, with AP rewiring while office equipment and NAS cabling largely stayed as-is.
- Kept acceptance criteria to basic service continuity and explicitly documented that extreme budget constraints reduce both security depth and managed scope.

### 2. UniFi controller hosting and migration

- Controller initially stayed in ANA's subsidy-backed Azure environment.
- After subsidy ended, WalksCloud migrated the controller to private cloud using built-in UniFi migration capability, minimizing disruption and avoiding full reconfiguration.
- Post-migration managed scope was narrowed according to the reduced fee boundary requested by the client.

### 3. NAS refresh advisory and data migration

- Confirmed high-risk indicators in legacy QNAP usage and historical intrusion artifacts.
- Provided capacity estimation and procurement guidance for Synology, then coordinated migration timing.
- Under budget limits, full dual-NAS resilience design was not feasible; this residual risk was explicitly disclosed.
- After migration, renewal negotiation requested further scope removal and deeper fee cuts, reaching near-nonviable levels.

## Outcomes and lessons

- **Controller hosting was successfully migrated** to WalksCloud private cloud, but managed-service delivery remained strictly bound to paid scope.
- **NAS refresh and data migration were completed**, improving baseline stability while resilience investment remained limited.
- The WZZ case reinforced a core governance rule: when pricing is compressed to 10% or even 1% range, service scope must be reduced accordingly, and in some cases controller-fee-only operation is the only sustainable boundary.

## Key takeaways from this case

- **When fees are compressed, scope must be compressed as well**: expecting full managed coverage under minimum budget creates structural expectation gaps.
- **Security risk must still be disclosed even in minimum-scope engagements**: historical intrusion traces and related exposure cannot be ignored in delivery decisions.
- **Controller migration flexibility matters**: native UniFi migration provides practical continuity when hosting location must change under budget pressure.
