---
type: case
slug: cases/cay-ldap-onboarding
title: |
  CAY: LDAP/RADIUS Foundation and Onboarding Automation
description: |
  WalksCloud helped CAY implement LDAP/RADIUS identity controls and automate onboarding workflows so accounts, access, and day-one readiness could be delivered on schedule.
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

- In 2019Q1, CAY needed to build its own IT/MIS operating model to support team expansion.
- The office network (fewer than 10 UniFi APs) required finer VLAN and RADIUS access controls.
- Before large-scale hiring, HR and back-office teams wanted a standardized onboarding process covering accounts, device procurement, and access card preparation.

## Initial situation and pain points

1. **Wi-Fi relied on a shared password**: no VLAN-based segmentation and no reliable user traceability.
2. **No self-service account operations**: IT handled account creation, disablement, and password reset manually, creating operational bottlenecks.
3. **Onboarding flow became chaotic during hiring growth**: HR and hiring managers repeatedly chased equipment and account details, with frequent omissions.
4. **Badge and identity preparation lagged**: photos, card coding, and sticker printing were handled too late, so new hires could not move through facilities on day one.

## Core challenges

- Make Wi-Fi authorization and account identity work together quickly in a UniFi plus RADIUS environment.
- Maintain rapid RADIUS VM recovery without a fully licensed enterprise backup stack.
- Give HR, back office, IT, and design teams one shared source of onboarding data before day one.
- Enforce a measurable SLA: once hardware arrives, account, device, access control, and credential handoff must complete within one week.

## WalksCloud solution and execution

### 1. Internal self-service LDAP/RADIUS platform

- WalksCloud first implemented a Python-based LDAP plus RADIUS web portal that allowed:
  - users to change passwords, activate/deactivate accounts, and reset credentials;
  - IT to edit VLAN, group, and identity fields quickly through a UI.
- UniFi controller policy used RADIUS-returned VLAN attributes to remove dependence on shared Wi-Fi passwords.
- The RADIUS VM initially ran on ESXi and was later migrated to PVE. Backup copies were stored to NAS using existing tools and PVE schedules to guarantee quick restore.
- The same pattern was later productized (rewritten in Golang) and reused in other environments such as TTW and TGW.

### 2. Google Form plus Golang orchestration across HR, BO, IT, and design

- At offer stage, HR sent a prefilled Google Form to collect device specs, account and department details, start date, contact info, photo, and self-introduction.
- After submission, automation:
  1. notified IT and HR managers to start account preparation and review;
  2. synchronized photos and profile data to department leads and design for onboarding and access-card preparation.
- Back office could proceed with procurement directly from form-trigger notifications, without additional ticket loops.
- If extra Google Workspace licenses were needed, IT immediately notified HR/BO and the reseller.
- IT execution flow:
  1. create LDAP and Google Workspace accounts via Golang tooling and print PDF credential notices;
  2. complete card coding, record card IDs, and configure access permissions;
  3. hand over credentials and cards to HR for day-one issuance.

## Outcomes

- **Network access control became identity-based**: Wi-Fi sessions now load VLAN/ACL by account, with significantly stronger governance than shared-password access.
- **IT labor dropped**: account lifecycle and VLAN operations moved from manual input to batched workflow, leaving IT to focus on approvals and exceptions.
- **Onboarding readiness moved into a one-week window**: in most cases, preparation completed by the third business day after HR notification; even with hardware delays, delivery stayed within one week.
- **Badge and identity synchronization improved**: design and IT could prepare materials in advance, enabling complete handoff on the employee's first day.
