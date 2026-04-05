---
type: case
slug: cases/wzz-nas-migration
title: |
  WZZ: Budget-Constrained QNAP-to-Synology Data Migration
description: |
  WalksCloud planned and executed low-disruption NAS migration under strict budget limits while documenting residual resilience risks and future safeguards.
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

- In 2025Q4, WZZ was referred through JAL and ANA advisor channels and had long operated with minimal IT/MIS budget.
- Security hardening and resilience were not primary decision drivers; cost minimization dominated planning.

## Initial situation and pain points

1. **QNAP system far beyond replacement window**: capacity had been patched with external USB media, with weak performance and inconsistent management.
2. **Security risk under-recognized**: audit evidence showed historical intrusion traces; spread was not ongoing, but prior compromise risk was real.
3. **Brand-switch expectation without resilience budget**: the client requested Synology replacement while keeping nearly unchanged cost structure.

## WalksCloud approach

### 1. Risk disclosure and capacity planning

- Documented intrusion traces and performance bottlenecks, then explained continued exposure risk if replacement was deferred.
- Estimated target Synology capacity based on current usage and growth to avoid repeating fragmented USB-based expansion.

### 2. Low-budget migration with service continuity

- Client handled Synology and disk procurement; WalksCloud provided minimum required specification guidance and validation.
- To avoid downtime, we enabled WebDAV on QNAP and used Synology Cloud Sync for continuous data replication during transition.
- QNAP shutdown occurred only after full sync completion, followed by controlled access-point cutover and required account-permission setup.

### 3. Contract and pricing boundary management

- The client initially requested a minimal-scope contract with a heavily reduced annual service fee and included migration expectations.
- During renewal, further scope reduction and price compression were requested again, pushing terms below sustainable service economics.
- WalksCloud shifted to controller-fee baseline terms and clarified that additional fee reduction would directly impact service-quality guarantees.

## Outcomes and operational reminder

- Legacy QNAP was replaced by Synology, and migration completed with stable post-cutover operations.
- Although backup spending remained conservative, the client acknowledged historical security exposure and agreed to periodic checks.
- The account was classified under "extreme budget" governance: commitments must remain aligned with sustainable cost and risk boundaries.
