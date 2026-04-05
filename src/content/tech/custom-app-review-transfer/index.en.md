---
type: tech
slug: tech/custom-app-review-transfer
title: |
  Custom App Branding, Store Review, and Ownership Transfer
description: |
  A multi-platform process for branded app delivery, including review preparation, signing governance, ownership transfer, and post-transfer validation checks.
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.45
  changefreq: monthly
  lastmod: build
---
## Work scope

- Customize UI, strings, and brand assets while keeping platform version markers consistent.
- Prepare store-submission artifacts: descriptions, privacy statements, test accounts, and reviewer notes.
- Manage source branches, build parameters, and signing assets to keep builds reproducible.

## Pre-release technical baseline

1. **Version and branch policy**: use a clear `main/release/hotfix` path and fixed tag format such as `ios-v1.2.3` and `android-v1.2.3`.
2. **Signing-asset inventory**: verify ownership and expiration for iOS certificates, provisioning profiles, Android keystore, push keys, and API keys.
3. **Build-environment consistency**: pin Xcode, Android Gradle Plugin, SDK, and dependency versions to avoid local-vs-CI divergence.
4. **Least-privilege permission review**: validate requested permissions (location, notification, VPN, background execution) before submission.

## Store review focus points

1. **Google Play**: ensure data-safety declarations, permission purpose, VPN explanation, and reproducible test flow are complete.
2. **Apple platforms**: provide test accounts and implementation notes aligned with Apple Developer Program expectations, especially for VPN, sign-in, and remote-service behavior.
3. **Reproducible review path**: define fixed execution sequence (sign in, connect, run primary function, sign out) to reduce reviewer ambiguity.

## Ownership transfer and environment switch

1. **Pre-transfer change freeze**: pause feature merges in the transfer window and allow only essential fixes.
2. **Identifier and permission mapping**: validate App ID, Bundle ID, package name, push topic, and webhook endpoints remain consistent after transfer.
3. **Platform transfer submission**: execute ownership-transfer workflow and track all review follow-ups.
4. **Credential rotation after transfer**: immediately rotate API keys, webhook secrets, and service credentials.
5. **Post-transfer regression validation**: retest sign-in, push, VPN path, and subscription/license checks.

## Common risks and triage order

1. **Signing mismatch blocks update**: verify certificate chain and signing fingerprint, then confirm store backend is bound to correct signing identity.
2. **Push notification failure**: compare new/old certificates, topic/bundle mapping, and server-side push token scope.
3. **Repeated review rejection loop**: structure reviewer feedback as fixed fields (issue, reproduction path, fixed version) for deterministic follow-up.
4. **Post-transfer runtime errors**: check API keys, webhook secrets, and third-party callback allowlists first.

## Technical validation checklist

1. Version labels are consistent and traceable across iOS/Android/macOS builds.
2. Signing assets and certificate expiry windows are fully documented.
3. Core functions (sign-in, push, VPN) pass reproducible tests before and after transfer.
4. Legacy permissions are revoked and least-privilege controls are active.
5. Review-rework history is structured for reuse in future releases.

## References

- Apple Developer Program Documentation  
  https://developer.apple.com/programs/
- Google Play Console Help  
  https://support.google.com/googleplay/android-developer/
