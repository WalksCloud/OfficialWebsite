---
type: tech
slug: tech/on-site-troubleshooting-handbook
title: |
  On-Site Troubleshooting Evidence and Handover Handbook
description: |
  A standardized on-site troubleshooting handbook for offline or time-constrained scenarios, ensuring complete and verifiable evidence is returned for follow-up diagnosis and handover.
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.45
  changefreq: monthly
  lastmod: build
---
## Objective

- Capture sufficient logs, photos, and state evidence even when data cannot be uploaded from site.
- Ensure next-line engineers or customer teams can reconstruct the on-site condition without information loss from verbal handover.

## Pre-entry baseline

1. **Authorization boundary confirmation**: verify permitted devices, command scope, and exportable data types before arrival.
2. **Tool-version consistency**: pin offline toolkit script/tool versions for reproducible results.
3. **Incident ID convention**: assign incident ID first and apply it to all photos, logs, and notes.
4. **Data-protection rules**: portable storage must be encrypted; in restricted facilities, write to approved controlled temporary media and copy into internal controlled storage after return.

## Field toolkit

- USB or portable storage containing common scripts and portable tools; restricted facilities use approved controlled temporary media, then copy evidence back into internal controlled storage after return.
- Serial cable, RJ45 tester, and laptop.
- Private mobile connectivity or portable router when customer policy permits.

## Recording workflow

1. **Before entry**: confirm request scope, authorization, and operational boundaries.
2. **On-site evidence logging**: record model, LED state, and error messages; capture photos/video when needed.
3. **Command and log capture**: collect system evidence via prepared scripts, store on approved temporary media per site rules, then after returning from controlled facilities copy into internal controlled storage and verify copy completeness.
4. **Action/result timeline**: every operation (cable change, reboot, parameter adjustment) is timestamped with outcome and logged directly in the ticket/shared document.
5. **Handover package**: after return, compile PDF summary with media and log index, then attach to ticket or internal tracking system.

## Common issues and triage order

1. **Visible fault but insufficient logs**: capture minimum invasive core outputs first, then decide high-risk actions.
2. **Multiple operators causing timeline confusion**: assign a single recorder to control chronology and step numbering.
3. **No network for upload**: preserve encrypted offline evidence first and upload only from controlled environment.
4. **Post-reboot state changes without baseline**: capture photos and state exports before reboot to preserve comparison basis.

## Technical validation checklist

1. Authorization and data-export rules are confirmed before entry.
2. All evidence maps to a single incident ID.
3. Every operation has timestamp and outcome record.
4. Offline evidence is encrypted and archived in controlled environment.
5. Follow-up engineers can reproduce field state from the handover package.

## References

- NIST SP 800-86 (Digital Evidence)  
  https://csrc.nist.gov/publications/detail/sp/800-86/final
- SRE Incident Response Practices  
  https://sre.google/sre-book/managing-incidents/
