---
type: tech
slug: tech/app-ownership-transfer-process
title: |
  App Ownership and Developer Account Transfer Workflow
description: |
  A practical workflow for transferring app ownership across iOS, Android, and macOS, covering signing assets, account permissions, submission records, and post-transfer validation.
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.45
  changefreq: monthly
  lastmod: build
---
## Why this is needed

- Organizations may need to move an app from outsourced development ownership back to internal accounts, or hand brand operations to a new operating entity.
- Apple and Google have different transfer requirements; incomplete preparation often forces re-submission or re-listing.

## Pre-transfer technical inventory

1. **Application asset register**: collect app name, bundle/package identifiers, signing certificates, push keys, and backend callback configuration.
2. **Store and financial status**: verify payment account, subscriptions, in-app purchase (IAP) state, and unresolved financial obligations.
3. **Third-party dependency inventory**: list push, analytics, licensing, map, and sign-in service accounts and decide transfer versus rebind strategy.
4. **Version freeze window**: freeze nonessential release changes during transfer period.

## Ownership transfer workflow

1. **Prepare platform prerequisites**: gather D-U-N-S (Data Universal Numbering System) number, authorization contacts, and account verification materials required by each platform.
2. **Create rollback baseline**: preserve pre-transfer app version, signing details, and critical backend settings.
3. **Submit transfer requests**: execute Apple/Google transfer flows and track review state plus supplement requests in fixed fields.
4. **Rotate keys and credentials**: after transfer completion, replace API keys, webhook secrets, push certificates, and service-account privileges.
5. **Run functional regression**: verify sign-in, push, subscription/IAP, VPN, and business-critical paths under new ownership account.

## Common risks and triage order

1. **Transfer succeeds but store update fails**: check signing identity and certificate binding first, then version-number policy.
2. **Push delivery breaks**: compare new account certificate state, topic/package binding, and server token verification logic.
3. **Subscription anomalies**: verify store contracts and financial state first, then backend subscription-validation logic.
4. **Third-party calls fail**: confirm callback allowlist, API key privileges, and source-domain updates.

## Technical validation checklist

1. All app identifiers and signing assets are fully inventoried.
2. Transfer window freeze and rollback checkpoints are established.
3. Post-transfer critical flows (sign-in, push, subscription) pass reproducible tests.
4. Legacy high-privilege keys are revoked and new-account permissions are minimized.
5. Supplement submissions and change history are traceable in a single incident timeline.

## References

- Apple App Transfer Documentation  
  https://developer.apple.com/help/app-store-connect/transfer-an-app/
- Google Play App Transfer Help  
  https://support.google.com/googleplay/android-developer/answer/6230247
