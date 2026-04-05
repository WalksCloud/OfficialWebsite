---
type: case
slug: cases/ttw-mdm
title: |
  TTW: Strengthening Mac Endpoint Security with Jamf MDM Self-Service
description: |
  WalksCloud helped TTW operationalize Jamf policies, self-service software workflows, and incident handling practices for a small nonprofit Mac environment.
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

- In 2022Q3, TTW (an all-Mac office with fewer than 30 Macs) engaged WalksCloud through a referral.
- The initial Jamf deployment had been completed by the vendor, but internal experience with Apple ecosystems and MDM operations was limited.
- Based on trust in remote managed operations, TTW invited WalksCloud to join the vendor-led Jamf implementation meetings as a technical liaison for long-term operations.
- TTW needed to maintain NGO security procedures while managing devices with limited IT staffing.

## Primary needs and challenges

1. **Self-service privilege and software deployment**: users have no admin rights by default and must obtain temporary privileges and approved tools through controlled workflows.
2. **Threat handling**: TTW needed guidance around Jamf Protect alerts and coordination with external security consultants.

## WalksCloud approach

1. **Automation scripts and application delivery**

    - Built VPP/EPP onboarding workflows to ensure security tools and required applications were deployed automatically.
    - Deployed common tools through Homebrew scripts; applications that required manual installation were still distributed via MDM.
    - Implemented a "Make Me an Admin" self-service audit flow: users must confirm the purpose in the UI before temporary admin rights are granted, and all actions are logged automatically.

2. **Jamf Protect alert operations**

    - TTW ran Jamf Protect while WalksCloud continuously monitored alerts and proactively notified the designated contact.
    - Example case: a user downloaded software suspected of stealing cryptocurrency wallet data. Even though Jamf Protect did not classify it as malicious, the client escalated immediately; we required device quarantine, evidence copy, and residual risk checks before the device returned to service.

## Outcomes

- TTW can handle most Mac privilege and software tasks through self-service workflows, escalating only exceptions.
- Jamf Protect alert handling now includes clear containment and traceability standards, reducing residual malware risk.
