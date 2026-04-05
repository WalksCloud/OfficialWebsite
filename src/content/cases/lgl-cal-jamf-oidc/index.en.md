---
type: case
slug: cases/lgl-cal-jamf-oidc
title: |
  LGL-CAL: Jamf Connect and Domestic OIDC Integration Gaps Validated by Control Lab
description: |
  A green-energy customer needed Mac endpoints to follow the existing MFA path. WalksCloud validated Jamf Connect requirements, built a ZITADEL control lab, and isolated provider-side OIDC compatibility gaps for decision support.
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

- In 2025Q1, the end customer in the green-energy sector operated roughly 90% Windows endpoints and wanted remaining Mac endpoints to use the same MFA process.
- The identity stack used an established domestic TOTP/MFA provider with OIDC as the login entry path.
- LGL-CAL, acting as referral consultant, engaged WalksCloud to validate Jamf Connect integration with that OIDC provider.

## Initial situation and pain points

1. **Windows flow was finalized, Mac flow was blocked**: without OIDC integration, Mac endpoints could not reuse the existing identity and MFA path.
2. **Provider OIDC did not support password grant**: Jamf Connect documentation requires `grant_type=password` for password synchronization, while the provider treated specification security warnings as grounds not to support the flow.
3. **Cross-team communication cost was high**: multiple review rounds still failed to align root-cause ownership, and provider-side comparative logs remained incomplete for too long.

## WalksCloud challenges

- Provide verifiable root-cause evidence without access to provider source code.
- Build a repeatable side-by-side test method so the client could compare identical settings across different OIDC implementations.
- Support decision-making if provider-side position did not change.

## Solution and execution workflow

### 1. Build baseline configuration from Jamf Connect requirements

- Configured OIDC application, `client_secret`, and callback parameters according to documentation.
- Enabled required `grant_type=password` in Jamf Connect profile and deployed to test Mac via MDM.
- Captured full request/response logs during testing to ensure parameter parity with reference behavior.

### 2. Validate provider endpoint behavior

- Ran repeated authentication tests against provider OIDC endpoint and observed persistent password-sync failure.
- Maintained side-by-side evidence comparison and clarified that protocol security warnings are contextual cautions, not automatic protocol deprecation.
- Even with complete comparative evidence, provider-side remediation path remained unavailable.

### 3. Build ZITADEL control lab as comparison baseline

- Reused the same Jamf Connect profile and application settings in a self-hosted ZITADEL lab.
- On the same test Mac, login, password synchronization, and session creation succeeded.
- Compared request/response traces, HTTP status codes, and error signals to isolate implementation differences to provider side.

### 4. Provide decision support to client

- Delivered a report showing provider-side non-support of `grant_type=password`, with alternatives such as provider replacement or identity-bridge redesign.
- Clarified impact: if provider position remained unchanged, Mac endpoints could not reach MFA parity with Windows under current architecture.

## Outcome and follow-up

- The provider maintained non-support for `grant_type=password` and did not provide an executable alternative path.
- The end customer and LGL-CAL decided to pause the project.
- WalksCloud preserved full test evidence as reference for future third-party OIDC compatibility assessments.

## Key takeaways

- **OIDC compatibility must be validated before rollout commitment**: market position does not guarantee cross-platform integration readiness.
- **A neutral control lab accelerates root-cause separation**: if identical settings work in a neutral lab, client-side configuration assumptions can be ruled out quickly.
- **Fallback and stop conditions should be defined early**: this prevents prolonged uncertainty when provider cooperation remains limited.
