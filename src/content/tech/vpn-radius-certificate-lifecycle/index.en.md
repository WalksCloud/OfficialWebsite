---
type: tech
slug: tech/vpn-radius-certificate-lifecycle
title: |
  VPN/RADIUS Certificate and Identity Lifecycle Management
description: |
  A governance model for VPN/RADIUS and 802.1X certificate and account lifecycle management, combining ACME automation, controlled distribution channels, and audit-ready trace records.
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.45
  changefreq: monthly
  lastmod: build
---
## Why a lifecycle process is required

- Shared infrastructure often serves both VPN and 802.1X paths; without versioned certificate and account governance, outages appear at renewal time or personnel transitions.
- Many organizations need a traceable chain for who created, disabled, or renewed access identities.
- In multi-tenant or multi-site contexts, one broken certificate can impact RADIUS, VPN, and internal API access at once.
- Certificates, accounts, and group entitlements form one access chain; drift in any layer creates either denied legitimate access or unintended allowance.

## Certificate governance

1. **ACME-based issuance**: manage RADIUS, VPN, and DNS certificates through ACME workflows; prefer DNS-01 where possible.
2. **Key-purpose separation**: do not reuse one private key across VPN server, RADIUS, and internal API services.
3. **Chain integrity checks**: validate leaf and intermediate chain deployment to prevent intermittent handshake failures.
4. **Controlled rotation windows**: split issuance, distribution, and service reload into rollback-capable sequencing, rolling out to secondary nodes first and core nodes last.
5. **Expiry-threshold policy**: run weekly validity checks plus weekly OCSP/CRL reachability checks, and rotate only when threshold or chain-health conditions trigger.

## PKI and key-boundary controls

1. **Private key storage**: enforce least-privilege file access (service-account readable only).
2. **Node distribution**: deliver certificates through controlled channels, either SSH push with host-key verification or controlled pipeline-triggered node-agent pull, and prohibit ad-hoc channels such as chat tools or temporary file sharing for cert/key distribution.
3. **Version labeling**: record fingerprint, deployment time, and service version per rollout.
4. **Revocation readiness**: define fast-replace path for suspected key exposure and trust-chain refresh.

## Account lifecycle governance

1. **Single source of truth**: keep VPN/RADIUS identities and groups in LDAP or equivalent directory authority.
2. **State machine**: manage account states as `pending -> active -> suspended -> disabled -> archived`, with explicit resource scope per state.
3. **Activation flow**: set expiry, group assignment, and MFA conditions at creation time.
4. **Disablement flow**: revoke VPN profile, RADIUS group grants, and local exception accounts together.
5. **Periodic reconciliation**: remove stale/ghost accounts first, then adjust permissions, and compare account lists, login history, expiry fields, and personnel roster monthly.

## VPN/RADIUS consistency rules

1. **Group mapping table**: same group should map to consistent ACL/VLAN behavior across VPN and 802.1X.
2. **Attribute standardization**: keep RADIUS response attributes (for example `Filter-Id`, `Tunnel-Private-Group-ID`) versioned and named consistently.
3. **Timed exceptions**: all temporary privilege relaxations require explicit expiry and auto-revert.
4. **Multi-site sync order**: apply deterministic replication and consistency checks across RADIUS nodes.

## Common failures and triage sequence

1. **Certificate valid but TLS handshake fails**: verify intermediate chain and hostname/SNI mapping first.
2. **VPN works but 802.1X fails**: compare group mapping and RADIUS attribute rollout consistency.
3. **Account is active but login denied**: inspect expiry fields, password-hash sync, MFA state, and source-IP restrictions.
4. **Intermittent disconnect after rotation**: verify all nodes reloaded new certificates, then check session-cache and renegotiation behavior.

## Notification and documentation governance

- Certificate rotations, account-state changes, and high-risk sign-in events must include timestamp, actor, impact scope, and result summary.
- Internal and external documentation should include only required technical metadata: account inventory, group mapping, certificate version, policy differences, and incident traces.
- Remove sensitive data before sharing (private keys, plaintext credentials, unnecessary personal fields).

## References

- RFC 2865: RADIUS  
  https://www.rfc-editor.org/rfc/rfc2865
- RFC 5216: EAP-TLS  
  https://www.rfc-editor.org/rfc/rfc5216
- FreeRADIUS Documentation  
  https://www.freeradius.org/documentation/
- RFC 8555: ACME  
  https://www.rfc-editor.org/rfc/rfc8555
