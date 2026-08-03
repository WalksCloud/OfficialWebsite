import{n as e}from"./rolldown-runtime-Dw2cE7zH.js";import{B as t,C as n,Et as r,G as i,I as a,Ot as o,R as s,S as c,T as l,U as u,b as d,c as f,et as p,gt as m,h,it as g,kt as _,p as v,q as y,w as b,wt as x,x as S,y as C}from"./vendor-floating-ui-vue-C28NmCs9.js";import{h as w,v as ee,y as te}from"./vendor-nuxt-ui-D9YX0gYx.js";import{n as T,r as E}from"./vendor-pinia-DFbAWs6l.js";import{n as D}from"./vendor-vue-i18n-C8gVcqv9.js";import{t as O}from"./vendor-yaml-CkaZpCe2.js";import{t as k}from"./vendor-iconify-vue-DivG0faK.js";var A={brandName:`WalksCloud 行雲資訊`,companyNameEn:`Walks Cloud Inc.`,companyNameZh:`行雲資訊有限公司`,baseUrl:`https://walks.cloud`,canonicalHost:`walks.cloud`,defaultLocale:`zh-tw`,locales:[`zh-tw`,`en`],localeFallbacks:{zh:[`zh-tw`,`en`],en:[]},clientNavigationRecovery:{targetTimeoutMs:1e4,retryIntervalMs:1e3,backgroundNoticeDurationMs:5e3,serviceWorkerPath:`/wc-sw.js`,runtimeCachePrefix:`walkscloud-runtime-`,runtimeDocumentFallbackPath:`/__wc-runtime-document-fallback__`,precacheManifestPath:`/wc-precache-manifest.json`,offlineCacheStartDelayMs:3e4,mobileOfflineCacheStartDelayMs:6e4,cacheInspectionPatterns:[`/assets/app-pages-markdownpage-`,`/assets/MarkdownPage-`],precacheStaticAssetExtensions:[`.css`,`.ico`,`.js`,`.json`,`.svg`,`.webmanifest`],cacheCommandTimeoutMs:12e4,cacheReadinessTimeoutMs:5e3,versionCheckTimeoutMs:3e3,versionNoticeMinMs:2e3,versionNoticeMaxMs:5e3},iconifyMirror:{enabled:!0,outputPath:`/icons/iconify/`,apiEndpoint:`https://api.iconify.design`,maxURL:500,requestTimeoutMs:5e3,scanInclude:[`dist/**/*.html`,`src/**/*.{vue,js,yaml,yml,json,md}`,`config/**/*.{yaml,yml,json}`,`node_modules/@nuxt/ui/dist/runtime/**/*.{vue,js,mjs}`,`node_modules/@nuxt/ui/dist/shared/**/*.{js,mjs}`],scanExclude:[`dist/icons/iconify/**`]},robots:{policy:`index,follow`},socialImage:`/og_image.webp`,social:{fbAppId:`2122887114805377`,fbPages:`106051241536627`},og:{imageType:`image/webp`,imageWidth:420,imageHeight:420,siteName:`Walks Cloud Inc. 行雲資訊有限公司`,localeMap:{"zh-tw":`zh_TW`,en:`en_US`}},org:{url:`https://walks.cloud`,logo:`/logo-gradual.svg`,sameAs:[`https://www.facebook.com/WalksCloud`,`https://www.linkedin.com/company/walkscloud/`],contactPoint:[{telephone:``,contactType:`customer support`}]}},j=[{pageKey:`home`,type:`home`,slugs:{"zh-tw":``,en:``},titles:{"zh-tw":`行雲資訊有限公司 - 提供您最完善的 MIS 服務`,en:`WalksCloud - Get Everything Works Great`},descriptions:{"zh-tw":`行雲資訊有限公司提供您最完善的 MIS 服務，滿足軟硬體和網路維運需求，您專注公司發展，資訊管理及營運交給我們。`,en:`WalksCloud delivers comprehensive MIS services across hardware, software, and network operations so you can focus on growing your business.`},og:{type:`website`,image:`/og_image.webp`},index:!0,sitemap:{priority:1,changefreq:`daily`,lastmod:`build`},jsonld:{kind:`WebPage`}},{pageKey:`not-found`,type:`not-found`,slugs:{"zh-tw":404,en:404},titles:{"zh-tw":`找不到頁面`,en:`Page Not Found`},descriptions:{"zh-tw":`您要找的頁面不存在，請返回首頁。`,en:`The page you are looking for does not exist. Please return to the homepage.`},og:{type:`website`},index:!1,sitemap:{priority:0,changefreq:`yearly`,lastmod:`build`},jsonld:{kind:`WebPage`}},{pageKey:`cases-index`,type:`article-index`,slugs:{"zh-tw":`cases`,en:`cases`},titles:{"zh-tw":`案例分享`,en:`Case Studies`},descriptions:{"zh-tw":`完整收錄行雲資訊的案例文章。`,en:`Browse every published WalksCloud case study.`},articleIndex:{baseSlug:`/cases`,titleKey:`about-section.case-section-title`,descriptionKey:`article.index.cases-description`},sitemap:{priority:.7,changefreq:`weekly`,lastmod:`build`}},{pageKey:`tech-index`,type:`article-index`,slugs:{"zh-tw":`tech`,en:`tech`},titles:{"zh-tw":`技術文章`,en:`Tech Articles`},descriptions:{"zh-tw":`完整收錄行雲資訊的技術筆記與排障分享。`,en:`Explore WalksCloud’s full archive of technical notes.`},articleIndex:{baseSlug:`/tech`,titleKey:`about-section.tech-section-title`,descriptionKey:`article.index.tech-description`},sitemap:{priority:.7,changefreq:`weekly`,lastmod:`build`}}],M=e({default:()=>N}),N=`---
type: case
slug: cases/ana-unifi-controller
title: |
  ANA: Fast UniFi Controller Deployment, Migration, and Light Operations
description: |
  A foundation-sponsored UniFi controller deployment for WZZ that was moved from subsidized Azure hosting to WalksCloud private infrastructure with minimal downtime and ongoing lightweight support.
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.55
  changefreq: monthly
  lastmod: build
jsonld:
  kind: CaseStudy
---
## Client background

- In 2025Q1, ANA, acting in a foundation role, funded Azure VM hosting so WZZ could run a UniFi controller in public cloud.
- WalksCloud was brought in through trusted referrals to evaluate VM sizing and firewall posture, and to manage controller configuration and device onboarding (Azure account authority remained with ANA).
- There was no full maintenance contract; collaboration was based on controller usage fees plus on-demand support.

## Azure deployment phase

1. **Sizing and security planning**

    - Assessed current device count and growth to define VM CPU, RAM, and storage capacity.
    - Recommended Azure Firewall and NSG controls to limit source IP and management access to approved WalksCloud/WZZ service ranges.

2. **Controller deployment and handover**

    - Installed UniFi Controller on ANA-provided Azure VM and imported existing WZZ devices.
    - Established account, site, and baseline monitoring settings; ongoing registration and update workflows were managed by WalksCloud.

## Public-to-private migration workflow

- After subsidy ended, ANA needed to reduce Azure cost. WalksCloud migrated the controller to private cloud hosting.
- We used built-in UniFi export/import plus migration-target guidance: export old controller settings, import to private-cloud controller, and trigger reassociation.
- Because migration followed native UniFi workflows, no custom scripts or extended outage were required; transition completed in minutes.

## Operations model

- **Managed scope**: WalksCloud continued managing controller platform, site, and device registration; Azure-layer governance remained with ANA.
- **Update cadence**: controller and firmware updates were provided as risk-assessed, situational support.
- **Incident handling**: with no fixed maintenance contract, the client chose when to escalate and WalksCloud responded on request.
- **Fee model**: controller usage fee plus issue-driven support.

## Outcomes and practical note

- WalksCloud delivered rapid UniFi controller setup in a subsidy-backed model, then enabled flexible migration to private hosting when cost posture changed.
- For clients needing mostly platform access rather than full managed contracts, a lightweight advisory-plus-managed model can still keep operations stable.
`,P=e({default:()=>F}),F=`---
type: case
slug: cases/ana-unifi-controller
title: |
  ANA：基金會托管的 UniFi 控制器如何快速建置、轉移與代管
description: |
  ANA 以基金會名義為 WZZ 提供 Azure VM 與 UniFi 控制器補助，行雲資訊負責規畫規格、防火牆建議與日常代管；補助用罄後，我們透過 UniFi 內建匯出功能在數分鐘內完成公雲轉私，持續以「有需求再支援」的方式提供服務。
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.55
  changefreq: monthly
  lastmod: build
jsonld:
  kind: CaseStudy
---
## 客戶背景

- 2025Q1，ANA 為基金會角色，替其協助的 WZZ 客戶承租 Azure VM，讓 WZZ 能在公有雲上使用 UniFi 控制器。
- 行雲資訊透過任職 ANA 的朋友與過去 CAY 同事的連線同時被介紹進來，負責評估 VM 規格、防火牆設定，並代管所有控制器設定與裝置註冊（Azure 權限由 ANA 掌握）。
- 雙方沒有正式維護合約，僅約定控制器使用費與「有需求再連絡」的支援方式。

## Azure 建置階段

1. **規格與安全性規畫**

    - 評估 WZZ 現有設備數與成長需求，提出 CPU / RAM / 儲存配置。
    - 建議 Azure 防火牆與 NSG 規則，限制來源 IP 與管理介面僅對行雲資訊 / WZZ 服務網段開放。

2. **控制器部署與交付**

    - 在 ANA 提供的 Azure VM 上安裝 UniFi Controller，並導入 WZZ 既有裝置。
    - 建立帳號、站點與基本監控設定，後續裝置註冊與更新皆由行雲資訊代管。

## 公轉私的遷移流程

- 補助用罄後，ANA 希望減少 Azure 成本。我們協助將控制器搬回行雲資訊私有雲。
- 操作方式：依照 UniFi 控制器內建的匯出/導入與轉移目標引導，先匯出舊控制器設定，再在私有雲控制器導入。
- 由於流程全由 UniFi 指引，無需額外腳本或停機，整體遷移約五分鐘完成，裝置即自動連回新控制器。

## 維運與支援模式

- **代管範圍**：行雲資訊續管控制器平台、站點與裝置註冊；Azure 層級則依舊由 ANA 管理。
- **更新節奏**：在評估風險後，視情況協助控制器與裝置韌體更新，屬於額外提供。
- **異常處理**：未簽維護合約，異常由客戶決定是否需要行雲資訊協助；我們僅在對方提出需求時提供建議或代操作。
- **費用模式**：僅收取控制器使用費，維持「有狀況再找」的協作默契。

## 結果與提醒

- 行雲資訊可在基金會 / 補助情境中，快速交付 UniFi 控制器建置並隨時轉移至自有環境，協助客戶彈性選擇託管位置。
- 對僅需「工具使用權」的客戶，可維持輕量合作模式：透過規格建議 + 代管服務，讓客戶在無正式合約下也能獲得穩定運作。
`,ne=e({default:()=>I}),I=`---
type: case
slug: cases/cay-azure-erp
title: |
  CAY: Operating Azure ERP VMs Under Tight Budget Constraints
description: |
  CAY launched ERP workloads on Azure with strict budget limits. WalksCloud maintained VM-layer and network security controls while documenting unresolved backup and recovery risks.
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.55
  changefreq: monthly
  lastmod: build
jsonld:
  kind: CaseStudy
---
## Background

- In 2020Q3, CAY needed to prepare ERP test and production environments on short notice.
- Budget covered only Azure VMs and basic firewall controls; no approved budget was available for backup or disaster recovery.
- WalksCloud managed VM-external controls (virtual network and access governance), while ERP software inside the VM remained under the designated ERP vendor.

## Initial situation and pain points

1. **No backup or full resilience controls**: without additional backup, snapshot, or offsite recovery storage, failure recovery depended on vendor-side practices.
2. **Only minimal exposure control was possible**: access reduction relied on strict source-IP filtering (primarily fixed office IP ranges).
3. **Operational accountability was split**: if internal ERP data or OS state failed, the client had limited internal visibility; only VM and network layers were in WalksCloud scope.

## WalksCloud approach

1. **Minimize attack surface**

    - Applied Azure NSG and firewall rules to allow only approved office fixed IP and limited VPN-node access.
    - Isolated ERP VM into dedicated subnet and monitored security-group posture drift with Azure policy controls.

2. **Stabilize VM-external operations**

    - Monitored VM health indicators (CPU, RAM, disk I/O) and escalated anomalies to ERP vendor contacts.
    - Performed periodic checks on OS update status and remote-management agent readiness.

3. **Explicit risk disclosure**

    - Documented the active "no backup, no restore point" risk for management.
    - Recommended minimum Azure Backup/Recovery Services planning, but budget remained unapproved.

## Outcomes and limitations

- VM-layer operations stayed stable, allowing ERP vendor delivery to continue.
- Strict source restrictions prevented known unauthorized connection events.
- However, absence of backup and restore remained a high-risk condition and should be addressed before any higher-availability target.
`,re=e({default:()=>ie}),ie=`---
type: case
slug: cases/cay-azure-erp
title: |
  CAY：有限預算下的 Azure ERP VM 維運
description: |
  CAY 在內部擴編期間僅能以最低預算在 Azure 建置 ERP VM；行雲資訊支援 VM 外層與網路防護，透過防火牆限制來源，但因預算不足未配置備份，仍存在雲端未納入備份與完整防護的風險。
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.55
  changefreq: monthly
  lastmod: build
jsonld:
  kind: CaseStudy
---
## 背景

- 2020Q3，CAY 需要在短時間內準備 ERP 測試 / 正式環境。
- 客戶僅能負擔 Azure VM 與基本防火牆費用，無額外預算建置備份或異地備援。
- 行雲資訊維護 VM 外層（虛擬網路、存取控管），VM 內部的 ERP 安裝由客戶指派的 ERP 廠商負責。

## 原始情境與痛點

1. **未納入備份與完整防護**：Azure 無額外備份、快照或備援儲存，發生故障只能仰賴 ERP 廠商是否有自備備份。
2. **僅能做最小控管**：只能透過 Azure Firewall / NSG 嚴格限制來源 IP（僅允許 CAY 辦公室固定 IP）降低暴露面。
3. **維運責任切分困難**：VM 內部故障或 ERP 資料毀損，內部 IT 無介面可檢查；只能確保 VM 層與網路層可用。

## 行雲資訊的作法

1. **最小化攻擊面**

    - 於 Azure 設定 NSG / Firewall，只允許 CAY 辦公室固定 IP、少數 VPN 節點存取 ERP VM。
    - 將 ERP VM 放在獨立 Subnet，並以 Azure Policy 監控網路安全組態是否被更改。

2. **VM 外層維運**

    - 監看 Azure VM 的基本健康狀態（CPU/RAM、磁碟 I/O），若異常則通知 ERP 廠商。
    - 定期檢查 OS Update 與代理程式運作，確保 VM 能被遠端操作。

3. **風險揭露**

    - 向客戶管理層清楚註記「無備份、無還原點」的現況，提醒若資料遺失只能重灌。
    - 建議最少規畫 Azure Backup / Recovery Services，但因預算未核准而持續未納入備份與完整防護。

## 成果與限制

- VM 層面維持穩定運作，ERP 廠商得以在 Azure 上交付系統。
- 透過嚴格的來源限制，未曾出現未授權連線事件。
- 然而缺乏任何備份與還原機制，仍是高風險狀態；後續若 ERP 要求更高可用性，必須重啟預算審查。
`,ae=e({default:()=>L}),L=`---
type: case
slug: cases/cay-dns-filter
title: |
  CAY DNS Filtering Evolution with AdGuard Home and Zone Views
description: |
  How CAY evolved from basic DNS controls to segmented filtering and audit-friendly responses using homelab-validated pipelines and low-maintenance operations.
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

- In 2018Q3, CAY had already completed server-room and network restructuring, but DNS still acted as simple forwarding with no malicious-domain controls.
- Internal services (management portals, development systems) were office-only, yet no zone-view split existed to hide internal real IP answers from external queries.
- Goal: deliver low-maintenance DNS filtering and split-horizon responses, validated in homelab before production rollout.

## Initial situation and pain points

1. **Frequent phishing and malicious-domain exposure**: users occasionally clicked phishing links and DNS had no preemptive block layer.
2. **No internal/external response split**: identical answers increased internal service exposure risk.
3. **Limited operations capacity**: IT needed subscription-based lists and automation rather than heavy manual curation.

## Core challenges

- Deploy on internal VMs without redesigning existing router and Wi-Fi architecture.
- Use \`bind\` zone view logic to vary responses by source network.

## WalksCloud solution and execution

### 1. First phase: Pi-hole plus \`bind\` zone view

- Built the method from prior dnsmasq/CaaS operational experience, then verified CI/CD and runner workflows in homelab before production.
- Deployed Pi-hole on internal VM and pointed router DNS forwarding to Pi-hole as default resolver.
- Implemented \`bind\` zone views:
  - internal-source queries return real internal addresses;
  - external or unknown-source queries return dummy IP or \`NXDOMAIN\`.
- Subscribed to public malicious-domain feeds and pre-validated list quality in homelab to reduce false positives.

### 2. Later phase: AdGuard Home plus CI/CD policy control

- After pipeline maturity, replaced Pi-hole with AdGuard Home and converted policy to version-controlled YAML/JSON config.
- Kept "homelab test first, production sync second" release discipline.
- Maintained standalone operations with lightweight periodic list and software update checks.

## Outcomes

- **Malicious domains were blocked at DNS layer**: precise totals were not retained, but block logs and field reports showed clear reduction in phishing incidents.
- **Split-horizon resolution reduced exposure**: external queries no longer received internal real IP responses.
- **Low operations overhead**: subscription feeds plus staged validation allowed IT to focus on exceptions instead of routine list maintenance.
`,R=e({default:()=>z}),z=`---
type: case
slug: cases/cay-dns-filter
title: |
  AdGuard Home 與 zone view：CAY DNS 威脅過濾演進
description: |
  參照行雲資訊創辦人之一在前一份工作累積的 dnsmasq CaaS 經驗，先於 homelab 驗證後再導入 AdGuard Home 與 bind zone view，在內網 VM 建立惡意網域過濾與內外部回應分流，避免核心服務被掃描。
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
## 客戶背景

- 2018Q3，CAY 為行雲資訊創辦團隊過往任職的公司，機房與網路雖已完成重整，但 DNS 僅提供一般轉發，無法過濾惡意網域。
- 內部系統（如管理介面、研發平台）只能在辦公室內存取，卻缺乏 zone view 區分，容易讓外來查詢看到真實 IP。
- 目標是建立一套維護量低的 DNS 過濾與 zone view 服務，先在 homelab 驗證後再同步到 CAY 的內網。

## 原始情境與痛點

1. **釣魚與惡意網域頻繁**：員工偶爾會點到釣魚信件的連結，DNS 無法先期攔截。
2. **內外部網域未分流**：外部查詢與內部查詢回應相同，存在暴露內部服務的風險。
3. **維運人力有限**：IT 只能依賴訂閱式黑名單與自動化流程，無法手動維護大量清單。

## 面臨的挑戰

- 必須在內網 VM 上部署，不影響既有 router 與 Wi-Fi 架構。
- 需要 \`bind\` 提供 zone view，根據來源 IP 決定回應內容。

## 解法與執行

### 1. Pi-hole + \`bind\` zone view（初版）

- 行雲資訊創辦人之一早在前一份工作即使用 dnsmasq 進行 CaaS 管控，並在個人 homelab 建立 GitLab CI/CD + 專案 runner（綁定 DNS 主機）；確認在測試環境穩定後，再把流程搬進 CAY。
- 在內網 VM 上安裝 Pi-hole，router 統一指向 Pi-hole 作為預設 DNS。
- 使用 \`bind\` 設定 zone view：
  - 內部 IP 查詢時回應真實 IP。
  - 外部或未知 IP 查詢時回應 dummy IP 或直接 \`NXDOMAIN\`，避免暴露內部服務。
- Pi-hole 訂閱公開維護的惡意網域清單，並定期在 homelab 驗證清單是否會誤殺重要網域。

### 2. AdGuard Home + CICD（後期）

- 待 CICD 管線與版本控管完善後，改用 AdGuard Home 取代 Pi-hole，將設定轉為 YAML/JSON 版本化。
- 仍維持「先在 homelab 測試 → 再同步到 CAY」的流程，避免一發布就影響使用者。
- 系統保持獨立，維護僅需定期檢查清單與軟體更新。

## 執行成果

- **惡意網域被即時攔截**：雖未留完整統計，但有阻擋紀錄，員工回報的釣魚事件顯著減少。
- **內外 zone view 分流**：外部查詢永遠拿不到內部服務的真實 IP，降低暴露風險。
- **維運負擔低**：透過訂閱式清單與 homelab 驗證流程，IT 只需關注例外與更新即可。
`,oe=e({default:()=>B}),B=`---
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
`,V=e({default:()=>H}),H=`---
type: case
slug: cases/cay-ldap-onboarding
title: |
  CAY 的 LDAP/RADIUS 與入職自動化
description: |
  CAY 在擴編期前先搭起自助式 LDAP/RADIUS 平台，並藉由 Google Form + Golang 工具串聯 HR、BO 與 IT，讓帳號、設備採購與門禁卡製作都能在一週內就緒，確保新人第一天即可開機上線。
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
## 客戶背景

- 2019Q1，CAY 團隊必須自行建立所有 IT/MIS 制度才能支撐後續擴編。
- 內部採用不到 10 顆 UniFi AP 的辦公室網路，需要更細緻的 VLAN/RADIUS 權限控管。
- HR 與 BO 團隊在大規模招募前就希望入職流程能標準化，包含帳號、設備採購與門禁卡製作。

## 原始情境與痛點

1. **Wi-Fi 只靠共用密碼**：無法分流 VLAN，也無從追蹤是誰連上了網路。
2. **帳號管理無自助介面**：IT 必須手動建立、停用與重設密碼，容易塞車。
3. **擴編時流程失控**：HR/用人主管需要逐案確認設備與帳號需求，常出現漏填或忘了開票的狀況。
4. **門禁與識別證延遲**：照片、白卡滾碼、卡貼設計都要等新人成為正式員工後才有人處理，導致第一天無法通行。

## 面臨的挑戰

- 在僅有 UniFi + RADIUS 的環境下，快速讓 Wi-Fi 權限與帳號資訊互通。
- 缺乏授權完善的備份工具，只能善用手邊資源確保 RADIUS VM 可被快速還原。
- 讓 HR、BO、IT、設計部門在新人尚未報到前就取得同一份資料，避免反覆確認。
- 需要量化 SLA：無論何時入職，只要硬體到貨就必須在一週內完成帳號、設備、門禁與密碼交付。

## 解法與執行

### 1. 內部自助式 LDAP/RADIUS 平台

- 由行雲資訊團隊先以 Python 實作 LDAP + RADIUS web 介面，提供：
  - 使用者可自助修改密碼、啟用/停用帳號、重設密碼。
  - IT 能透過介面快速編輯 VLAN、群組與姓名/email 等欄位。
- UniFi 控制器依 RADIUS 回傳的 VLAN 屬性派送權限，移除共用密碼問題。
- RADIUS VM 先跑在 ESXi，再搬到 PVE，透過手邊既有的備份工具與 PVE 內建排程各自備份到 NAS，確保可以快速還原。
- 後續行雲資訊將同一概念產品化（以 Golang 重製），並在其他客戶如 TTW/TGW 導入。

### 2. Google Form + Golang 串接 HR/BO/IT/設計

- HR 寄出 offer 的同時提供可預填欄位的 Google Form，蒐集：設備規格、帳號/部門、到職日、聯絡資訊、照片、自我介紹。
- 表單送出後自動：
  1. 寄信提醒 IT 與 HR 主管，啟動帳號準備與審核。
  2. 將照片與自介同步給各部門主管、設計部，預排 onboarding 與門禁卡卡貼印製。
- BO 依通知直接開立採購，不需要用人主管另外提 ticket；如需加購 Google Workspace 授權，IT 會即時通知 HR/BO 與經銷商。
- IT 端流程：
  1. 以 Golang 工具建立 LDAP + Google Workspace 帳號並套印 PDF 密碼通知函。
  2. 完成白卡滾碼、在員工資料表紀錄卡號並設定門禁權限。
  3. 將密碼函、白卡與卡貼交給 HR 主管，入職時即可一次發放。

## 執行成果

- **網路權限分層**：Wi-Fi 連線依帳號載入 VLAN/ACL，追蹤與控管比僅靠密碼安全許多。
- **IT 工時下降**：由 IT 集中使用介面批次啟停帳號與調整 VLAN，從手動輸入轉為流程化，只需處理例外與審核。
- **入職準備縮短為一週內**：從收到 HR 通知起，最晚在第三個工作天就能完成設備採購、財產標籤與帳號/門禁設定；即使遇到設備延後，也能在一週內完成交付，不再拖延入職體驗。
- **門禁/識別證同步就緒**：設計部提前拿到照片製作卡貼，IT 也能在報到當天交付滾碼完成的白卡與密碼函。
`,U=e({default:()=>W}),W=`---
type: case
slug: cases/cay-machine-room
title: |
  CAY: Weekend Migration from Legacy Server Room to Compliant Facility
description: |
  CAY completed a one-weekend server-room relocation with structured cabling, dual-path UPS redesign, and environmental monitoring under tight space and budget constraints.
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

- In 2019Q4, CAY expanded office operations and needed to move into a new site.
- The old room was an improvised rack area with tangled wiring and desktop UPS units, with daytime temperature around 43C and nighttime around 35C.
- Before migration, WalksCloud had already stabilized server-farm and network baselines; this phase focused on room, power, and environmental compliance.

## Initial situation and pain points

1. **Harsh thermal conditions**: poor airflow and no hot/cold aisle design exposed equipment to sustained high temperature.
2. **Disordered power design**: desktop UPS sprawl, no dual-path feed model, and no bypass switch for safe maintenance.
3. **Budget and space compression**: the COO reduced the new room footprint and downgraded cooling specification, forcing redesign under constraints.

## Core challenges

- Complete migration in one weekend shutdown without delaying Monday operations.
- Fit one network/patch cabinet, three connected server cabinets, and one loose mixed cabinet into reduced space.
- Deliver dual-path UPS with bypass capability and leave room for growth.
- Keep temperature within safe operation range despite constrained HVAC.

## WalksCloud solution and execution

### 1. Weekend move with color-coded cabling

- Shut down Friday night, moved stacked legacy equipment into the new room, and reracked by function and load plan.
- Used pre-labeled three-color cabling from the facility vendor: green for office network, red for research internal network (allowlist), and gray for SIP.
- Because server-farm structure had been pre-stabilized, the new room activation focused on rack placement and reconnection, not full reconfiguration.

### 2. UPS and environment controls

- Implemented dual 6KVA UPS per server cabinet with bypass switches through professional power contractors, and split dual PSU feeds across separate UPS paths for maintenance continuity.
- Even without approval for a larger room or higher-spec HVAC, kept UPS expansion margin and ensured the power-circuit plan remained compliant.
- Activated existing environmental probes and IoT telemetry for immediate post-move monitoring of temperature, humidity, and power state.

## Outcomes

- **Downtime limited to one working day**: migration completed over weekend and operations resumed Monday.
- **Temperature improvement**: room temperature stayed below 30C after migration.
- **Power stability improved**: dual-path UPS plus bypass model reduced maintenance interruption risk, with power and environment indicators monitored through IoT plus Grafana.
- **Scalable under constraints**: despite reduced footprint, three-color cabling and UPS reservation kept future expansion viable.
`,G=e({default:()=>K}),K=`---
type: case
slug: cases/cay-machine-room
title: |
  CAY：從既有機房到合規機房的週末搬遷
description: |
  CAY 在辦公室搬遷前先重整 Server Farm，週末一次完成機房搬遷、三色配線，以及雙路 UPS 與 IoT 環控，讓新機房從既有鐵架環境升級為可控的合規空間。
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
## 客戶背景

- 2019Q4，CAY 辦公室擴張需搬遷到新址。
- 舊機房只是鐵架堆疊、線材混亂、滿地桌上型 UPS，日間均溫 43°C、夜間 35°C。
- 在搬遷前行雲資訊已協助完成 Server Farm 與網路重整，搬遷目標是一次把機房與 UPS 升級到可控、合規的水準。

## 原始情境與痛點

1. **環境惡劣**：沒有冷熱通道、通風不良，設備長期暴露在 40°C 以上的溫度。
2. **電源管理混亂**：桌上型 UPS 隨處擺放，沒有雙路供電與旁路開關，維護時易斷電。
3. **搬遷預算遭壓縮**：COO 將新機房空間砍半、冷氣改成低規型號，必須在受限條件下完成。

## 面臨的挑戰

- 週末停機一次完成搬遷，上線時不能拖到週一。
- 在空間縮半的前提下容納 1 個網路/跳線櫃、3 個連體伺服器櫃、1 個散裝櫃。
- UPS 必須具備雙路電源與旁路開關，並預留擴充空間。
- 冷氣規格不足但仍要把溫度控制在安全範圍。

## 解法與執行

### 1. 週末搬遷與三色配線

- 週五下班後停機，將原本堆在鐵架上的設備整批搬運到新機房，再依設備用途與負載重新上架。
- OA 廠商事先配好三色網路：綠=辦公網、紅=研究內網（白名單）、灰=SIP。搬遷時只需依色碼接線。
- Server Farm 已在舊址重整，搬遷後只需上架、復線即可，無須重新配置。

### 2. UPS 與空調

- UPS 交由專業廠商施工，每個伺服器櫃下方配置兩台 6KVA UPS、附旁路開關，設備雙路電源分接不同 UPS。
- 雖無法爭取更大的空間或更強的冷氣，仍保留 UPS 擴充空間並確保電路符合規畫。
- 透過既有的環控探針與 IoT 裝置，搬遷後即時監控溫濕度與電力狀態。

## 執行成果

- **停機僅 1 個工作日**：週末搬遷完成，週一即恢復運作。
- **溫度下降**：新機房日夜溫度控制在 30°C 以下，不再出現 40°C 以上的過熱狀況。
- **電力穩定**：雙路 UPS + 旁路開關確保維護不中斷，IoT + Grafana 監控電力與環控指標。
- **空間受限仍可擴充**：雖然被迫使用較小空間，但仍完成三色配線與 UPS 預留，保留後續擴充可能。
`,q=e({default:()=>J}),J=`---
type: case
slug: cases/cay-server-farm
title: |
  CAY Server Farm Rebuild with Budget-Conscious Architecture
description: |
  A practical server-farm restructuring that balanced cost constraints with reliability goals, including topology cleanup, equipment strategy, and staged operational hardening.
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

- In 2020Q2, CAY needed to establish core IT/MIS foundations for later initiatives including LDAP, UPS design, and Azure ERP support.
- The initial server-farm environment had about 13 rack servers (primarily Dell R710/R720/R720xd), chained through Mikrotik switch/router units with a QNAP 10G RJ45 switch used as backbone. During expansion, the environment grew to 33 hosts.
- Server hardware quality was acceptable, but power architecture depended on 220V desktop UPS units, each carrying three to four hosts. A single UPS failure could shut down multiple hosts, with no true dual-path power model or testable maintenance routine.

## Initial situation and pain points

1. **Backbone instability caused vCenter heartbeat failures**: the QNAP 10G switch frequently showed link-up but packet-stall behavior, preventing reliable failover.
2. **Cross-VLAN throughput bottlenecks**: two Mikrotik routers carried all inter-VLAN traffic, and the chained topology amplified congestion.
3. **Power and UPS posture was not auditable**: desktop UPS layout prevented proper battery checks and safe dual-path switching.
4. **Monitoring showed persistent contention**: Smokeping packet loss spiked at peak hours; SNMP flow maps showed heavy concentration on a few 10G ports.
5. **Procurement constraints were severe**: despite budget pressure, management required a formal evaluation of new Cisco core-router options before accepting refurbished procurement strategy.

## Core challenges

- Build a layered Core/Backbone/TOR architecture under a sub-million TWD budget envelope.
- Handle fragmented refurbished supply where only one to two qualified units were available at a time.
- Complete all migration work within a single, tightly bounded maintenance window.
- Align management expectations on cost-benefit and reliability trade-offs of refurbished strategy.

## WalksCloud solution and execution

### 1. Define target architecture clearly

- Set **Cisco C6504** as the core switching plane for unified 10G optical backbone and management control.
- Deployed **Cisco Nexus 3000 (N3K)** per rack as 10G backbone uplinks.
- Added **Cisco 2950 1G TOR** at rack edge and used parallel uplink paths back to core to eliminate chain bottlenecks.
- Installed dual 6KVA UPS units in lower rack sections to provide independent left/right power paths and stabilize host-plus-network cabinet layout.

### 2. Execute a staged procurement strategy over six months

- Built side-by-side pricing evidence: new enterprise-grade core options versus validated refurbished architecture at much lower total cost.
- Created a whitelist for all required modules (C6504 slots, N3K 10G SFP modules, 2950 uplinks) and sourced units batch by batch through auction and certified refurbished channels.
- Performed burn-in checks per batch (fan state, SFP, backplane health) before reserve storage.
- Proceeded only after management accepted pricing and risk evidence.

### 3. Perform one-window off-peak cutover

- Scheduled the only viable weekend maintenance window (no office users, no external service dependency) and pre-labeled patching and weathermap plans.
- Onsite sequence:
  1. power on and validate new Core/Backbone/TOR base links;
  2. rewire rack-by-rack to remove chain topology;
  3. retire old Mikrotik backbone links in final stage to avoid network islands.
- Completed migration in one controlled outage window, minimizing total downtime and operational risk.

## Outcomes (monitoring-based)

- **Smokeping**: peak-hour packet-loss spikes returned to zero and remained stable.
- **SNMP traffic profile**: formerly concentrated 10G flows were redistributed across backbone and TOR layers, removing sustained hotspot saturation.
- **Weathermap visibility**: per-link utilization became observable and anomaly localization improved substantially.
- **vCenter and service stability**: heartbeat interruptions caused by false switch stalls were resolved; failover behavior recovered, and cabinet hosting stability improved for downstream workloads including LDAP/RADIUS and Azure ERP.
`,se=e({default:()=>Y}),Y=`---
type: case
slug: cases/cay-server-farm
title: |
  二手機也能建骨幹：CAY Server Farm 零預算重構記錄
description: |
  CAY 與行雲資訊長期協作，這次以數十萬元二手設備重構 Server Farm 核心，將串聯的 Mikrotik/QNAP 架構升級為 Cisco C6504 + N3K + 2950 的分層骨幹，並透過離峰一次切換讓 smokeping 掉包率歸零、SNMP 流量分散與 vCenter 穩定度回復。
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
## 客戶背景

- 2020Q2，CAY 需從零建立 IT/MIS 制度與後續的 LDAP、UPS、Azure ERP 等骨幹。
- 初始 Server Farm 約 13 台 Rack Server（主力為 Dell R710/R720/R720xd），搭配數台 Mikrotik Switch/Router 串聯與一台 QNAP 10G RJ45 Switch 充當骨幹；後續擴編階段累積至 33 台主機。
- 雖然伺服器硬體本身規格不差，但電力僅依賴 220V 桌上型 UPS 串接 3~4 台主機，一旦任意 UPS 失效就會同時斷好幾台主機，缺乏雙路供電與可測試的維護機制。

## 原始情境與痛點

1. **骨幹不穩導致 vCenter heartbeat 失敗**：QNAP 10G Switch 經常出現「link 還在但封包停擺」，failover 無法觸發。
2. **跨 VLAN 流量瓶頸**：只靠兩台 Mikrotik Router 承擔所有跨 VLAN 流量，串聯拓樸讓沿路設備動輒塞滿。
3. **電力與 UPS 無法稽核**：每台桌上型 UPS 同時掛載 3~4 台主機，拔掉就會直接斷電，無法進行電池巡檢或雙路切換。
4. **監控指標顯示大量雍塞**：smokeping 在特定時段掉包率飆高，SNMP 流量圖也顯示多個服務卡在少數 10G port。
5. **採購限制嚴苛**：行雲資訊提出以二手機節省預算，但客戶仍要求先評估能支撐 HA 架構的全新 Cisco Core Router 組合；原廠規格動輒上看百萬，遠超實際核准預算，使得專案只能靠自行開發的二手機採購流程落地。

## 面臨的挑戰

- 如何在數十萬元的總預算下，建出具有 Core / Backbone / TOR 分層的架構。
- 二手設備來源分散、一次僅能找到 1~2 台符合規格的貨品，意味著升級需分批囤料。
- 雖然維護窗可以停機，但時間非常有限，只允許在一次 maintenance window 內完成所有切換。
- 需說服管理層接受二手機方案並理解成本/效益差異。

## 解法與執行流程

### 1. 明確定義目標架構

- 以 **Cisco C6504** 作為 Core Switch，統一 10G 光纖骨幹與管理平面。
- 各機櫃配置 **Cisco Nexus 3000 (N3K)** 作 10G Backbone，提供高速 uplink。
- 每櫃再佈署 **Cisco 2950 1G TOR**，採並聯回 Core，避免舊有串聯造成的逐段瓶頸。
- 機櫃下半部加裝雙 6KVA UPS，提供左右路徑各自獨立供電，3 櫃主機 + 1 櫃網路/跳線的佈局也因此固定化。

### 2. 半年囤料的採購策略

- 先提出以二手機節省預算的解決方案，但為了消弭「二手等於次級品」的疑慮，仍照指示蒐集能達到 HA 規格的全新 Cisco Core Router 報價，讓管理層親眼看到原廠組合上看百萬與我們以二手機建出同規格僅需數十萬之間的落差。
- 按照白名單列出所有必要模組（C6504 插槽、N3K 10G SFP、2950 uplink）後，以拍賣與二手機商管道逐批購得，每批貨都先在測試環境 burn-in 確認風扇、SFP、背板無異常再封存。
- 等新品/二手報價差異被接受後，才正式獲准以二手機方案執行，並持續向主管回報採購進度與驗證結果。

### 3. 離峰維護窗的集中切換

- 待所有設備與光纖模組就位後，安排唯一可用的週末 maintenance window（辦公室無員工、無對外服務需求），提前備妥標籤好的跳線與 weathermap 規畫。
- 現場流程：
  1. 先將新 Core / Backbone / TOR 上電並驗證基本連線。
  2. 依櫃逐一重新拉線，確保不再出現串聯鏈路。
  3. 在最後階段才將 Mikrotik 舊骨幹下線，避免產生孤島。
- 透過在合理維護窗內一次完成切換，服務雖短暫停機但整體停機時間與風險都被控制在最低。

## 執行成果（文字描述監控指標）

- **smokeping**：原本在上班尖峰時段飆高的掉包率完全回到 0，未再出現假死曲線。
- **SNMP 流量圖**：過去幾乎所有 10G 流量都卡在少數 port，升級後則清楚呈現分散至各 Backbone/TOR，沒有長時間滿載。
- **weathermap**：即時圖可掌握每條鏈路的使用率，任何異常流量都能迅速定位，網路治理可控性大幅提升。
- **vCenter 與服務容量**：heartbeat 不再因 Switch 假死而中斷，Failover 機制恢復，單櫃可穩定容納約 12 台主機，為後續 LDAP/RADIUS、Azure ERP 等計畫打好基礎。
`,ce=e({default:()=>X}),X=`---
type: case
slug: cases/cpa-jjp-network-audit
title: |
  CPA-JJP: HPE Network Audit and Access Recovery Without Handover Docs
description: |
  WalksCloud audited an inherited HPE environment with missing credentials and documentation, restored management access, and produced structured handover records for ongoing operations.
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.55
  changefreq: monthly
  lastmod: build
jsonld:
  kind: CaseStudy
---
## Client background

- In 2022Q4, the CPA management team requested support through its parent company's IT/MIS/SRE channel, and WalksCloud handled the CPA-JJP network assessment.
- The prior vendor handover had no usable documentation, including missing credentials and configuration records.
- The environment was fully HPE-based: multiple rack servers, one Fibre Channel storage system, three Instant-On switches, and fewer than ten hidden APs.

## Initial situation and pain points

1. **No configuration handover baseline**: impossible to validate whether current settings were correct or to track change history.
2. **Network equipment without managed credentials**: Instant-On switches were exposed and required controlled reset plus rebuilt management access.
3. **Hidden infrastructure visibility gaps**: some APs were physically concealed above ceilings or under flooring, making inventory difficult.

## WalksCloud approach

### 1. Device inventory and access reset

- Verified version and link state on each HPE Instant-On switch, then reset and rebuilt management access where credentials were missing.
- Confirmed the network required only basic segmentation (no complex VLAN logic), enabling fast reset and restoration.
- Ran health checks on HPE rack servers and Fibre Channel storage for operational anomalies.
- Logged into adjacent Fortigate systems for permission validation only; no configuration changes were needed there.

### 2. Structured inventory process for undocumented environments

- Created a physical asset list with location and serial records across servers, storage, switches, and APs.
- For hidden APs, validated reachable power/link paths and annotated inaccessible units on diagrams for follow-up.
- Delivered a simplified topology and account-governance summary as the new handover baseline.

### 3. Handover documentation delivery

- Consolidated post-reset management-account records and password-governance handoff items for client signoff.
- Provided per-device-class operating summaries (for example, switch management IP references and server/storage usage status).
- Added maintenance guidance so future device additions are documented immediately.

## Outcomes

- The HPE environment returned to a managed state, with switch and AP administration restored to the client.
- Fibre Channel storage and server health conditions were validated.
- The client now has complete handover documentation, reducing personnel-transition risk.
`,le=e({default:()=>Z}),Z=`---
type: case
slug: cases/cpa-jjp-network-audit
title: |
  CPA-JJP：無文件交接下的 HPE 網路健檢與重設紀錄
description: |
  CPA 主管透過我們母公司 IT/MIS/SRE 部門尋求協助，行雲資訊受託盤點純 HPE 的伺服器與網路設備，重設無密碼的 Instant-On Switch、確認 Fibre Channel Storage 與隱藏 AP，並整理交接文件交給客戶。
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.55
  changefreq: monthly
  lastmod: build
jsonld:
  kind: CaseStudy
---
## 客戶背景

- 2022Q4，CPA 的主管透過 CPA 母公司的 IT/MIS/SRE 部門尋求協助，並由行雲資訊執行 CPA-JJP 的網路健檢。
- 客戶的原廠交接完全沒有文件，連設備密碼與設定資訊都未留下。
- 環境為純 HPE 設備：多台 Rack Server、一台 Fibre Channel Storage、三台 Instant-On Switch，以及少於 10 台的隱藏 AP。

## 原始情境與痛點

1. **交接缺少任何設定資訊**：無法確定現有設定是否正確，也無法追蹤變更紀錄。
2. **網路設備無密碼**：Instant-On Switch 完全開放，需要重設並重新建立管理權限。
3. **隱藏設備難以盤點**：AP 被藏在天花板或地毯下，部分位置難以觸及。

## 行雲資訊的作法

### 1. 設備盤點與重設

- 逐一確認 HPE Instant-On Switch 的版本與連線狀態，因無密碼即進行重設並設定新的管理權限。
- 確認網段僅需基本配置，無 VLAN 需求，方便快速完成重設。
- 對 HPE Rack Server 與 Fibre Channel Storage 進行健康檢查，確認運作狀態與是否有異常告警。
- 旁路的 Fortigate 僅登入確認權限，因客戶已掌握其管理權限而無須額外調整。

### 2. 無文件環境的盤點流程

- 建立現場設備清單，記錄每一台伺服器、儲存、Switch 與 AP 的位置與序號。
- 對於隱藏 AP，能觸及的逐一確認供電與連線；無法觸及的則在圖面上標記位置，提醒客戶日後整理。
- 以簡潔的方式呈現設備拓樸與管理帳號，作為後續交接基礎。

### 3. 交付交接文件

- 彙整重設後的管理帳號與密碼管理方式，交由客戶簽收。
- 針對每一類設備提供設定概要（例如 Switch 的管理 IP、伺服器與儲存的使用狀況），避免再度出現「無文件交接」的情況。
- 提醒客戶後續任何新增設備都應同步更新文件，維持透明。

## 成果

- 整個 HPE 環境重新獲得可管理狀態，Instant-On Switch 與 AP 的管理權限回到客戶手上。
- Fibre Channel Storage 與伺服器的健康狀態得到檢查並確認無異常。
- 客戶取得完整交接文件，後續若有維護人員變動，也能快速掌握環境。
`,ue=e({default:()=>de}),de=`---
type: case
slug: cases/jal-pa
title: |
  JAL: Palo Alto License Recovery and Office Network Rebuild on Limited Budget
description: |
  When licensing expired and the original vendor was unreachable, WalksCloud coordinated license takeover, redesigned wireless and VLAN controls, and stabilized office connectivity.
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
## Client background and starting point

- In 2022Q2, JAL was referred to WalksCloud through a trusted contact who was also serving as the client's security consultant. JAL was using Palo Alto, but licenses had expired and the original supplier was unreachable.
- The office depended on a single consumer-grade Wi-Fi router, with weak coverage and poor interference tolerance.
- The internal network needed separation across business, management-isolated, and intern/guest zones, plus controlled NAS and network-device access aligned with security policy.

## Challenges

1. **Palo Alto license recovery without original supplier path**: no direct renewal channel for license and policy updates.
2. **Wireless instability and coverage gaps**: consumer-grade hardware could not support the office environment.
3. **Complex isolation requirements**: multiple zones required distinct NAS and route policies, including a dedicated Fortigate line for special use.
4. **Budget constraints**: governance and stability improvements had to be delivered under controlled spending.

## WalksCloud approach

1. **Assessment-first, phased execution**

    - Audited existing Palo Alto, firewall, NAS, and Wi-Fi layout to separate reusable assets from required changes.
    - Prioritized Palo Alto license recovery first: coordinated with local distributor and vendor channels, transferred registration ownership to WalksCloud, completed the license-restoration process, and restored rule and firmware update capability.

2. **Aruba managed AP rollout**

    - Deployed three Aruba managed APs (including controller capability) to improve coverage and central management within budget.
    - Post-deployment, wireless complaint volume dropped to zero.

3. **ACL and VLAN segmentation aligned with policy**

    - Implemented ACL and VLAN segmentation on Palo Alto according to the security consultant's design requirements:
      - business zone with access to two NAS units and selected internal services;
      - isolated management zone with access to the third NAS and full network infrastructure;
      - intern/guest zone restricted to approved NAS targets only.
    - Preserved dual-line architecture, with one path routed through Fortigate for dedicated scenarios.

4. **Relocation-stage advisory support**

    - During office relocation, WalksCloud provided architecture consultation while the appointed onsite vendor executed physical migration.
    - WalksCloud validated that network topology and license posture remained consistent after move-in.

## Outcomes

- Palo Alto licensing was restored, enabling continuous policy and firmware updates.
- Wi-Fi coverage and stability met operational requirements, with complaints reduced to zero.
- NAS and network segmentation controls were implemented as designed, including dual-line routing and controlled guest/intern access paths.
`,fe=e({default:()=>pe}),pe=`---
type: case
slug: cases/jal-pa
title: |
  JAL：在有限預算下接手 Palo Alto 授權與網路重整
description: |
  行雲資訊受合夥人熟識的朋友轉介，接手 JAL 過期的 Palo Alto 授權與混亂的 Wi-Fi ／ NAS 網路，先盤點現況再逐步建議 Aruba AP、ACL／VLAN 隔離與 Fortigate 專線，協助客戶維持可控又穩定的資安環境。
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
## 客戶背景與合作起點

- 2022Q2，JAL 由行雲資訊合夥人熟識的朋友（同時也是客戶的資安顧問）介紹，原先使用 Palo Alto 但授權已過期，原供應商也聯絡不上。
- 辦公室僅靠一台家用 Wi-Fi Router，訊號覆蓋與抗干擾能力不足，員工抱怨連線不穩。
- 內網結構分成主要辦公網、隔離的管理網及工讀生／訪客網，並需要依照客戶資安顧問的規劃隔離 NAS 與網路設備。

## 面臨的挑戰

1. **無法直接更新的 Palo Alto 授權**：原註冊供應商失聯，無法取得新的授權碼與規則更新。
2. **Wi-Fi 覆蓋與干擾問題**：家用設備不足以應付工業風裝潢與隔間，導致訊號死角與頻繁掉線。
3. **複雜的 NAS／網路隔離**：需同時滿足辦公網、隔離管理網、Fortigate 專線與工讀生／訪客網的路由要求，且 NAS 存取權限不同。
4. **預算有限**：客戶希望以可控預算完成授權恢復與網路重整。

## 行雲資訊的作法

1. **盤點現況後提出分階段建議**

    - 現場盤點既有 PA、防火牆、NAS 與家用 Wi-Fi 的配置，釐清哪些維持既有設計、哪些可優化。
    - 首先著手於 PA 授權恢復：協調本地經銷商與原廠，把設備註冊資料轉給行雲資訊，完成補授權流程並更新設定，確認規則與韌體可恢復更新。

2. **以 Aruba 受控型 AP 解決 Wi-Fi 問題**

    - 評估後採用三台 Aruba 受控型 AP（其中一台作控制器）提供無死角覆蓋，保留集中管理能力但符合客戶預算。
    - 安裝完成後員工抱怨降至零，無線網路回到穩定可用狀態。

3. **依資安顧問規劃實作 ACL／VLAN 隔離**

    - 客戶的資安顧問正是轉介我們的熟識朋友，依其提出的設計在 Palo Alto 上建立 ACL 與 VLAN 分割：
      - 主要辦公網路：可連兩台 NAS 與部分內部服務。
      - 隔離管理網：可連第三台 NAS 與全部網路設備。
      - 工讀生／訪客網：僅能連預先允許的一台 NAS。
    - 維持雙路網路，其中一路由 Fortigate 路由器接專線，供特殊用途使用。

4. **搬遷期間的諮詢角色**

    - 辦公室搬遷時僅提供諮詢並推薦熟識的 OA 廠商，搬遷作業由該廠商全權執行；行雲資訊負責確認網路拓撲與授權設定在新址保持一致。

## 成果

- Palo Alto 授權恢復後可正常更新規則與韌體，安全策略得以持續維護。
- Wi-Fi 覆蓋與穩定度達到需求，員工抱怨降至零。
- NAS 與網路隔離結構依規劃落地，雙路網路與工讀生／訪客網等特殊需求都能被控制。
`,me=e({default:()=>he}),he=`---
type: case
slug: cases/klm-aua-erp
title: |
  KLM-AUA: PVE/PBS ERP Operations and Quarterly Reporting
description: |
  WalksCloud maintained the virtualization and backup layer for ERP workloads with twice-daily backup jobs and quarterly reporting for audit visibility.
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.55
  changefreq: monthly
  lastmod: build
jsonld:
  kind: CaseStudy
---
## Client background

- In 2024Q3, KLM engaged WalksCloud to maintain the ERP infrastructure used by its end customer KLM-AUA.
- Hardware was provided by KLM and hosted in leased IDC space. ERP vendor responsibility was limited to OS and applications inside VMs; PVE/PBS layers were managed by WalksCloud.
- KLM required stable virtualization, backup continuity, and quarterly reporting suitable for customer audit communication.

## Needs and challenges

1. **Twice-daily backups**: notifications were required for both success and failure to support trend tracking.
2. **Clear maintenance reporting**: quarterly documentation of PVE/PBS update status and backup posture was required.
3. **Boundary control**: VM-internal issues remained ERP-vendor scope, while WalksCloud guaranteed virtualization and backup-layer operations.

## WalksCloud approach

### 1. PVE and PBS lifecycle management

- Maintained package updates for both Proxmox VE and Proxmox Backup Server.
- Recorded each update with from-to version evidence and included it in quarterly reports.

### 2. Daily backup schedule

- Configured PVE backup at \`04:30\` and \`20:30\` each day for ERP VMs.
- PBS notification remained enabled for both success and failure outcomes.
- For repeated failures, WalksCloud produced anomaly analysis and mitigation recommendations.

### 3. Quarterly reporting package

- Delivered report sections including:
  - PVE/PBS update versions and change descriptions;
  - backup success/failure summaries;
  - PBS capacity status and per-VM backup inventory.
- Reports were delivered to KLM for downstream communication with KLM-AUA.

## Outcomes

- ERP VMs retained traceable update and backup history suitable for quarterly review.
- Backup operations stayed stable, and exception handling could be triggered quickly from alert notifications.
- WalksCloud maintained low-touch but consistent infrastructure governance over virtualization and backup layers.
`,ge=e({default:()=>_e}),_e=`---
type: case
slug: cases/klm-aua-erp
title: |
  KLM-AUA：PVE + PBS ERP 維運與每季報告
description: |
  KLM 對行雲資訊發包維護 KLM-AUA 的 PVE + PBS ERP 環境。我們僅負責虛擬化與備份層，透過每日兩次備份與每季報告，確保 ERP 廠商在 VM 內的作業不受影響。
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.55
  changefreq: monthly
  lastmod: build
jsonld:
  kind: CaseStudy
---
## 客戶背景

- 2024Q3，行雲資訊創辦人早期曾在 KLM 任職；KLM 對我們發包，協助維護其終端客戶 KLM-AUA 的 ERP 環境。
- 硬體由 KLM 提供並放在 KLM/KLM-AUA 承租的 IDC。ERP 廠商只需負責 VM 內的 Windows 與應用程式，VM 外的 PVE/PBS 層由行雲資訊控制。
- KLM 希望有穩定的虛擬化平台、備份機制與季度報告，方便向 KLM-AUA 交付稽核資料。

## 需求與挑戰

1. **每日兩次備份**：無論成功與否都需要通知，以追蹤長期趨勢。
2. **明確的維護報告**：每季需列出 PVE/PBS 更新與備份情況，並備查儲存容量。
3. **責任切分**：VM 內作業屬 ERP 廠商，我們僅能確保虛擬化與備份層正常。

## 行雲資訊的作法

### 1. PVE + PBS 設定與更新

- 安裝 PVE 與 Proxmox Backup Server（PBS），維持虛擬化層與備份層的套件更新。
- 每次更新後留下 from→to 的版本記錄，並列入季度報告。

### 2. 每日備份排程

- 在 PVE 內設定 \`4,20:30\` 排程，讓 ERP VM 每日備份兩次。
- 無論備份成功或失敗，PBS 都會寄出通知信；若出現連續失敗，我們會出異常排除報告並協助處理。

### 3. 每季報告

- 報告內容包含：
  - PVE / PBS 更新版本與描述
  - 每日備份成敗統計
  - PBS 儲存容量、各 VM 備份清冊
- 報告完成後交給 KLM，做為向 KLM-AUA 說明環境狀態的依據。

## 成果

- ERP VM 維持可追溯的更新與備份紀錄，KLM 在季度檢查時能清楚掌握環境狀態。
- PBS 備份保持穩定，遇到異常即可依通知迅速排除，避免 ERP 廠商在 VM 內作業受影響。
- 行雲資訊以低介入方式協助 KLM，讓虛擬化與備份層得以長期維持。
`,ve=e({default:()=>ye}),ye=`---
type: case
slug: cases/lgl-awe-pve-vgpu-jamf
title: |
  LGL-AWE: PVE vGPU Cluster Build and Jamf MDM Audit Support
description: |
  A two-phase engagement covering NVIDIA vGPU rollout on PVE and follow-up Jamf-based MDM audit readiness for a supply-chain compliance context.
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
## Background

- The vGPU program started in 2025Q1: the same end customer served by LGL-AWE requested a new PVE plus vGPU cluster.
- MDM audit work began in 2026Q1: the same customer needed stronger MDM audit capability to satisfy upstream supply-chain security requirements.

## Phase 1: PVE 8.x plus NVIDIA vGPU cluster

### Challenges

1. **Legacy environment was hard to scale**: prior operations relied on self-assembled rack servers and fragmented VM management.
2. **vGPU licensing and profile setup had to be stable**: NVIDIA vGPU needed to run on PVE 8.x with maintainable configuration.
3. **Internal operations continuity was required**: the customer expected to handle day-to-day maintenance after rollout.

### WalksCloud execution in phase 1

- **Hardware and cluster planning**: designed a two-node Dell rack-server layout with two NVIDIA vGPU cards per node (about 3 to 4 VMs per card, fewer than 10 VMs in total).
- **Driver and licensing integration**: implemented vGPU driver loading, license binding, and profile configuration.
- **VM migration and validation**: migrated legacy VMs in batches to new PVE nodes with per-VM service validation.
- **SOP and training delivery**: provided build, upgrade, daily-operations, and basic troubleshooting procedures to reduce handover risk.

## Phase 2: Jamf MDM plus audit support

### Context and needs

- As a supply-chain participant, the customer had to meet stricter upstream security and audit requirements.
- The objective was to establish an MDM governance flow that could respond to audits quickly and consistently.

### WalksCloud execution in phase 2

- **Solution evaluation**: compared Jamf Pro, Jamf Protect, and related combinations against governance and cost requirements.
- **Procurement and implementation**: coordinated with authorized channel partners, then completed installation, integration, and baseline policy setup.
- **Managed operations**: took over policy maintenance, application rollout, audit-evidence preparation, and requested adjustments so the customer team could focus on core delivery.

## Outcomes

- **vGPU platform**: legacy VMs were successfully migrated to the Dell plus PVE 8.x environment, with stronger internal maintenance continuity.
- **MDM audit readiness**: after Jamf managed operations were established, upstream audit response became faster and evidence output became more consistent.
`,be=e({default:()=>xe}),xe=`---
type: case
slug: cases/lgl-awe-pve-vgpu-jamf
title: |
  LGL-AWE：PVE vGPU 叢集與 Jamf MDM 稽核支援
description: |
  行雲資訊協助 LGL-AWE 的同一終端客戶完成兩階段需求：先建置 PVE 8.x + NVIDIA vGPU 的全新環境並將既有 VM 轉移，接著因上游資安要求導入 Jamf MDM 及代管服務。
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
## 背景

- vGPU 專案於 2025Q1 啟動：LGL-AWE 服務的同一終端客戶先提出需求，希望建置全新的 PVE + vGPU 叢集。
- MDM 稽核於 2026Q1 展開：同一客戶因供應鏈資安要求需補齊 MDM 稽核能力，因此啟動 Jamf 導入與代管規畫。

## 第一階段：PVE 8.x + NVIDIA vGPU 叢集

### 挑戰

1. **既有環境難以擴充**：原本採自組 Rack Server 與分散 VM 管理方式，擴充效率低。
2. **vGPU 授權與 profile 需穩定落地**：需在 PVE 8.x 上完成可維運的 NVIDIA vGPU 設定。
3. **需建立可延續的內部維運能力**：客戶希望後續可自行處理日常維護與基本異常。

### 行雲資訊於第一階段的作法

- **硬體與叢集規畫**：建議改用 Dell Rack Server，規劃兩台主機、每台兩張 NVIDIA vGPU 卡（每卡約 3 到 4 台 VM，整體少於 10 台 VM）。
- **驅動與授權整合**：協助完成 vGPU 驅動載入、授權綁定與 profile 設定。
- **VM 轉移與驗證**：將舊環境 VM 分批遷移到新 PVE 節點，逐台驗證啟動與服務可用性。
- **SOP 與教育訓練**：提供建置、升級、日常維運與基本排障流程，降低後續交接落差。

## 第二階段：Jamf MDM + 稽核支援

### 背景與需求

- 客戶為供應鏈成員，需符合更嚴格的上游資安與稽核要求。
- 目標是建立一套可快速回應稽核要求的 MDM 管理與證據整理流程。

### 行雲資訊於第二階段的作法

- **方案評估**：協助比較 Jamf Pro、Jamf Protect 等組合與導入成本。
- **採購與建置**：協助與授權經銷體系協調採購，完成初始安裝、整合與政策基準設定。
- **後續代管**：接手政策維護、應用部署、稽核資料整理與指定需求調整，讓客戶團隊可專注核心專案。

## 成果

- **GPU 叢集**：既有 VM 成功轉移至 Dell + PVE 8.x 環境，並建立可延續的內部維運能力。
- **MDM 稽核**：Jamf 代管建立後，客戶可更快回應上游稽核要求，且稽核證據輸出一致性提升。
`,Se=e({default:()=>Ce}),Ce=`---
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
2. **Provider OIDC did not support password grant**: Jamf Connect documentation requires \`grant_type=password\` for password synchronization, while the provider treated specification security warnings as grounds not to support the flow.
3. **Cross-team communication cost was high**: multiple review rounds still failed to align root-cause ownership, and provider-side comparative logs remained incomplete for too long.

## WalksCloud challenges

- Provide verifiable root-cause evidence without access to provider source code.
- Build a repeatable side-by-side test method so the client could compare identical settings across different OIDC implementations.
- Support decision-making if provider-side position did not change.

## Solution and execution workflow

### 1. Build baseline configuration from Jamf Connect requirements

- Configured OIDC application, \`client_secret\`, and callback parameters according to documentation.
- Enabled required \`grant_type=password\` in Jamf Connect profile and deployed to test Mac via MDM.
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

- Delivered a report showing provider-side non-support of \`grant_type=password\`, with alternatives such as provider replacement or identity-bridge redesign.
- Clarified impact: if provider position remained unchanged, Mac endpoints could not reach MFA parity with Windows under current architecture.

## Outcome and follow-up

- The provider maintained non-support for \`grant_type=password\` and did not provide an executable alternative path.
- The end customer and LGL-CAL decided to pause the project.
- WalksCloud preserved full test evidence as reference for future third-party OIDC compatibility assessments.

## Key takeaways

- **OIDC compatibility must be validated before rollout commitment**: market position does not guarantee cross-platform integration readiness.
- **A neutral control lab accelerates root-cause separation**: if identical settings work in a neutral lab, client-side configuration assumptions can be ruled out quickly.
- **Fallback and stop conditions should be defined early**: this prevents prolonged uncertainty when provider cooperation remains limited.
`,we=e({default:()=>Te}),Te=`---
type: case
slug: cases/lgl-cal-jamf-oidc
title: |
  Jamf MDM + Connect 對接國內 OIDC：規格落差與實驗室對照驗證
description: |
  綠能產業客戶希望讓 Mac 端沿用既有 TOTP/MFA 供應商。行雲資訊依 Jamf Connect 要求完成整合驗證，並以 ZITADEL 對照實驗室釐清 OIDC 相容性差異，協助客戶完成決策。
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
## 客戶背景

- 2025Q1，終端客戶屬綠能產業，約 90% 為 Windows 環境，剩餘 Mac 端希望沿用同一套 MFA 流程。
- 身分解決方案採用國內既有 TOTP/MFA 供應商，並以 OIDC 作為裝置登入入口。
- LGL-CAL 作為轉介顧問，邀請行雲資訊協助 Jamf Connect 與該 OIDC 的整合驗證。

## 原始情境與痛點

1. **Windows 端已定案，Mac 端卡關**：若無法完成 OIDC 串接，Mac 端無法沿用既有帳密與驗證流程。
2. **供應商 OIDC 不支援 password grant**：Jamf Connect 文件要求 \`grant_type=password\` 才能完成密碼同步，但供應商將規範中的安全性提醒解讀為不建議支援。
3. **跨團隊溝通成本高**：多輪會議後仍難以對齊問題定位，且供應商端對照 log 長期不完整，造成排查效率偏低。

## 行雲資訊面臨的挑戰

- 在無法存取供應商程式碼的前提下，提供可驗證的定位證據。
- 建立可重複、可對照的測試流程，讓客戶看見同一設定在不同 OIDC 實作下的差異。
- 在供應商維持既有立場時，協助客戶評估是否繼續投入。

## 解法與執行流程

### 1. 依 Jamf Connect 官方要求建立標準設定

- 依文件建立 OIDC application、\`client_secret\` 與 callback 參數。
- 在 Jamf Connect 設定檔啟用必需的 \`grant_type=password\`，並由 MDM 派送到測試 Mac。
- 測試期間保留完整 request/response log，確認參數與官方範例一致。

### 2. 驗證供應商 OIDC 端點行為

- 在供應商端點執行多輪登入測試，密碼同步持續失敗。
- 持續對照 Jamf 端與供應商端證據，並說明規範中的安全性提醒不等同於協定淘汰。
- 即使提供完整對照資料，供應商仍未提出可落地的修正路徑。

### 3. 建立 ZITADEL OIDC 實驗室作為對照組

- 在自建 ZITADEL 實驗室使用與 Jamf Connect 相同的 application 與設定檔。
- 同一台測試 Mac 可順利登入、同步密碼並建立 session，證實 Jamf Connect 端流程可行。
- 以 request/response、HTTP 狀態碼與錯誤訊息逐項對照，確認差異集中在供應商端實作。

### 4. 向客戶提供決策建議

- 出具測試報告，列出供應商端不支援 \`grant_type=password\` 的證據與可行替代路徑（更換供應商或改採其他身分橋接方案）。
- 說明若供應商立場不變，Mac 端將無法達成與 Windows 端一致的 MFA 體驗。

## 結果與後續

- 供應商維持不支援 \`grant_type=password\` 的立場，未提供可執行替代方案。
- 終端客戶與 LGL-CAL 最終決定暫停專案，未進入後續開發。
- 行雲資訊保留完整測試紀錄，作為後續第三方 OIDC 相容性評估範例。

## 本案重點

- **導入前需先驗證 OIDC 相容性**：供應商規模與品牌不等於跨平台整合可行性。
- **對照實驗室可快速釐清責任邊界**：同一套設定在中立環境可用時，可明確排除客戶端設定因素。
- **需提前定義替代與中止條件**：避免在供應商無法配合時持續投入而延長不確定性。
`,Ee=e({default:()=>De}),De=`---
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
`,Oe=e({default:()=>ke}),ke=`---
type: case
slug: cases/lgl-csa-vpn
title: |
  LGL-CSA：客製 Zero Trust VPN App 上架挑戰
description: |
  行雲資訊依照 LGL-CSA 的品牌需求調整 OpenZiti VPN App，協助完成 Android 上架與所有權移轉，但也面臨 Apple 在開發者帳號與審核政策上的限制。
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
## 背景與合作起點

- 2025Q2，LGL-CSA 採用 OpenZiti 建立 Zero Trust 環境，希望將 Android / iOS / macOS VPN App 以自有品牌呈現。
- 單位敏感，不願以官方名義申請 Apple 開發者帳號，原本想走 in-house App 發佈，最後被迫改採公開上架。
- 行雲資訊接手的範圍僅限 UI / 品牌調整與上架流程支援；核心程式與 OpenZiti SDK 由客戶自管。

## 挑戰

1. **品牌一致性但權限有限**：我們只能依客戶提供的 icon、色票與字體在三個平台套用統一的外觀，無法動到核心程式。
2. **上架受限**：Google Play 相對寬鬆；Apple 的 iOS / macOS 審核極嚴格，加上無法以單位名義申請開發者帳號，導致多次遭拒。
3. **技術政策衝突**：使用特定 API 時，Apple 不允許 App 所有權轉移，與客戶想要「完成開發後整包轉給自己」的需求相衝突。

## 行雲資訊的作法

1. **UI / 品牌化調整**

    - 套用客戶提供的 logo、primary color、字體、啟動畫面，並在三個平台維持一致性。
    - 與 OpenZiti SDK 保持介面溝通，確保 UI 變動不影響連線流程。

2. **Android 上架協助**

    - 撰寫並上傳 Google Play metadata（介紹文字、截圖、隱私政策）與版本規畫。
    - 操作內部測試 → 正式上架流程，審核進度以訊息通知客戶。
    - 上架成功後，依約完成 App 所有權與原始碼移交。

3. **Apple 審核溝通**

    - 協助準備 TestFlight 測試、App Store metadata 與必要的合規聲明。
    - 連續遭 iOS 審核駁回、macOS 僅初版通過後續更新被拒；我們只能書面整理拒絕理由並透過訊息轉述給客戶。
    - 說明 Apple 在某些 API 下禁止 App 所有權轉移，客戶最終接受無法上架的結果。

## 成果與限制

- **Android 版本**：成功上架並完成所有權 / 原始碼移交，客戶得以自行維護。
- **Apple 版本**：因開發者帳號與審核政策限制，客戶決定停止嘗試，將 Android 作為唯一對外管道。
- **政策限制提醒**：若無法以單位名義申請 Apple 開發者帳號，又希望日後轉移 App 所有權，須事先評估政策風險，避免投入後仍被迫停止。
`,Ae=e({default:()=>je}),je=`---
type: case
slug: cases/lgl-hda-openvz-pve-eval
title: |
  LGL-HDA: Feasibility Assessment for Closed OpenVZ-to-PVE Migration
description: |
  In a closed virtualization environment with no direct export path, WalksCloud validated a staged backup-to-ESXi-to-PVE migration approach and documented its constraints for decision support.
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.55
  changefreq: monthly
  lastmod: build
jsonld:
  kind: CaseStudy
---
## Background

- In 2025Q2, LGL-HDA supported a customer running Comboware Virtuozzo/OpenVZ.
- The environment was highly closed: no hypervisor-level image export path was available; backups could only be generated from software installed inside each VM.
- WalksCloud accepted a technical assessment role only and did not operate as internal staff for the SI.

## Challenges

1. **No direct VM export path**: backup files existed, but there was no standard OVF/OVA-style handoff from hypervisor layer.
2. **Coordination boundary risk**: engagement structure restricted direct end-customer interaction.
3. **Multi-stage conversion overhead**: OpenVZ and PVE were not directly interchangeable.

## WalksCloud assessment method

1. **Backup to ESXi restoration validation**

    - Used VM-internal backup artifacts and restore tooling to reconstruct workloads on ESXi.
    - Verified restored VM boot and application availability.

2. **ESXi to PVE transition validation**

    - Exported VM to standard transfer formats from ESXi and imported into PVE.
    - Verified boot, login, and service continuity on PVE.

3. **Feasibility reporting**

    - Reported that migration was feasible, but required a multi-step path: OpenVZ to ESXi to PVE.
    - Clarified that single-hop direct conversion was not achievable under current environment constraints.

## Outcome

- Technical feasibility was confirmed through staged conversion validation.
- After receiving the assessment, LGL-HDA did not start a follow-up execution project during this phase.
- WalksCloud closed the engagement at the advisory and validation boundary.
`,Me=e({default:()=>Ne}),Ne=`---
type: case
slug: cases/lgl-hda-openvz-pve-eval
title: |
  LGL-HDA：從封閉 OpenVZ 環境評估轉往 PVE
description: |
  LGL-HDA 的客戶長期使用 Comboware Virtuozzo / OpenVZ，在高度封閉的環境中無法直接抽取 VM；他們希望行雲資訊以其內部工程師的身份出面評估，但我們僅以技術顧問身分驗證「備份→ESXi→PVE」的可行性，最後提供多次轉換的建議。
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.55
  changefreq: monthly
  lastmod: build
jsonld:
  kind: CaseStudy
---
## 背景

- 2025Q2，LGL-HDA 為 SI 廠商，其客戶採用 Comboware Virtuozzo / OpenVZ（俗稱 OpenVZ）的虛擬化平台；LGL-HDA 並未實際維運該平台，而是希望我們以其技術員工身份出面協助轉換評估。
- 環境極度封閉：無法直接下載 VM 影像，只能在虛擬機器內安裝備份軟體並產出備份檔，Hypervisor 層沒有任何備份出口。
- LGL-HDA 希望行雲資訊以「他們的技術員工」身分進場，但我們僅接受技術評估工作，維持顧問角色。

## 面臨的挑戰

1. **資料無法直接匯出**：只能靠 VM 內安裝的備份軟體產生備份檔，沒有 OVF/OVA 等標準格式。
2. **合作方式不透明**：LGL-HDA 要求我們以其內部人員身份出面，增加溝通風險。
3. **多次轉換成本**：OpenVZ 與 PVE 不具直接相容性，需要額外中繼步驟。

## 行雲資訊的評估作法

1. **備份→ESXi**

    - 使用「由 VM 內安裝的備份軟體」產出的備份檔與對應還原工具，在 ESXi 上還原 VM。
    - 驗證還原後的 VM 能正常開機與運作。

2. **ESXi→PVE**

    - 透過 ESXi 內建的匯出工具將 VM 轉成標準格式，再匯入 PVE。
    - 一樣檢查 VM 在 PVE 上可啟動與登入，確認服務不受影響。

3. **回報結果**

    - 我們僅能透過訊息回報 LGL-HDA：此路徑可行，但必須「OpenVZ → ESXi → PVE」多次轉換，無法一次完成。
    - 由於無法直接接觸終端客戶，也不掌握後續決策，評估至此告一段落。

## 結果

- 驗證成功：透過多段轉換可以把 OpenVZ VM 搬到 PVE。
- LGL-HDA 取得可行性結果後暫未啟動後續專案，評估至此告一段落。
- 行雲資訊僅完成技術驗證並提供建議。
`,Pe=e({default:()=>Fe}),Fe=`---
type: case
slug: cases/lgl-nax-gpu-passthrough
title: |
  LGL-NAX: Rapid Triage for Post-Update GPU Passthrough Failure
description: |
  After system updates broke GPU passthrough startup, WalksCloud and LGL performed constrained-environment triage across dmesg, vfio, and BIOS paths to isolate likely root causes.
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.55
  changefreq: monthly
  lastmod: build
jsonld:
  kind: CaseStudy
---
## Client background

- In 2025Q1, a technology company in Hsinchu Science Park used a PVE setup with NVIDIA consumer GPU passthrough delivered by LGL and operated it internally.
- After update-related failure, LGL engaged WalksCloud for rapid joint triage and evidence-driven diagnosis.

## Incident and constraints

- After OS and package updates, passthrough devices could no longer attach and critical VMs failed at boot.
- The site was network-isolated, so no online driver download or package synchronization was possible.
- Timeline pressure required immediate findings for next-step planning.

## WalksCloud triage workflow

1. **System log analysis**

    - Compared pre/post-update \`dmesg\` behavior and confirmed GPU enumeration remained visible while passthrough initialization failed.

2. **\`vfio\` and BIOS verification**

    - Revalidated IOMMU grouping, device binding states, and \`vfio-pci\` policy application.
    - Cross-checked GPU and PCIe BIOS settings, including secure-boot-related controls, to rule out accidental reset.

3. **Rollback-state replay**

    - Reapplied known-good configuration and blacklist policies from prior backups.
    - VM boot still failed, confirming issue persistence beyond simple config rollback.

## Collaboration model with LGL

- WalksCloud synchronized every triage step in real time with both LGL and the customer.
- Diagnostic evidence (\`dmesg\` traces, \`vfio\` binding outcomes, and environment constraints) was shared continuously for downstream ownership.
- When further validation became impossible offline, we documented likely driver-version incompatibility and provided a structured continuation path.

## Outcome and practical note

- In a fully isolated environment, immediate remediation could not be completed because new driver validation was not available.
- WalksCloud delivered a full triage package and decision-ready hypotheses so LGL could continue with controlled follow-up validation.
- Key lesson: in closed environments, reproducible troubleshooting records are essential to avoid repeated investigative rework.
`,Ie=e({default:()=>Le}),Le=`---
type: case
slug: cases/lgl-nax-gpu-passthrough
title: |
  LGL-NAX：更新後 GPU Passthrough 異常的快速排查記錄
description: |
  LGL-NAX 在更新 PVE 作業系統與套件後，Passthrough 裝置無法再掛載，致使虛擬機開機即失敗。行雲資訊與 LGL 同步排查 dmesg、vfio 與 BIOS 設定，雖無法於受限環境中立即恢復，仍釐清問題根源並交付完整判斷。
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.55
  changefreq: monthly
  lastmod: build
jsonld:
  kind: CaseStudy
---
## 客戶背景

- 2025Q1，竹科科技公司由 LGL 建置 PVE 搭配 NVIDIA 消費級 GPU 的 Passthrough 架構，平時由客戶自行維運。
- 更新後出現異常時，LGL 轉請行雲資訊進場協助釐清並追蹤可能的排除方式。

## 事件與限制

- 客戶更新 OS 套件與作業系統後，Passthrough 裝置無法掛載，導致關鍵虛擬機啟動即失敗。
- 現場網路隔離，無法連網下載驅動或同步套件，只能在既有環境中排查。
- 支援時程緊湊，需即時向 LGL 通報判斷結果好安排下一步。

## 行雲資訊的排查流程

1. **檢視系統日誌**

    - 透過 \`dmesg\` 比對更新前後訊息，確認 PVE 仍可偵測到 GPU，但 Passthrough 初始化時出現中斷。

2. **核對 \`vfio\` 與 BIOS 設定**

    - 逐一確認 IOMMU 群組與裝置綁定狀態、重新套用 \`vfio-pci\` 設定。
    - 比對 BIOS 內顯示卡、PCIe 相關參數與安全啟動設定，排除被重設的可能。

3. **嘗試回復既有設定**

    - 套用更新前備份的設定檔與黑名單規則。
    - 重新部署虛擬機後仍無法順利開機。

## 與 LGL 的協作方式

- 行雲資訊在 LGL-NAX 現場與客戶、LGL 同步所有排查過程，確保資訊一致。
- 將每一步的發現（例如 \`dmesg\` 訊息、\`vfio\` 綁定結果）即時告知 LGL，方便其後續追蹤。
- 當無法在受限環境內進一步驗證時，直接與 LGL 說明推測為驅動版本不相容，提供後續建議方向。

## 結果與提醒

- 在無法連網的條件下，無法立即安裝新驅動或重建環境驗證。
- 行雲資訊交付完整排查報告與推論，協助 LGL 接手後續評估。
- 案例提醒：遇到封閉環境時，仍需建立「可再現的排查紀錄」，讓夥伴或客戶能沿著同一脈絡繼續驗證，避免反覆重工。
`,Re=e({default:()=>ze}),ze=`---
type: case
slug: cases/lgl-tax-pve-io-wait
title: |
  LGL-TAX: From PVE IO Wait Bottlenecks to Actionable Health Findings
description: |
  A focused troubleshooting case that traced recurring VM instability to storage-tier decisions and missing handover controls, resulting in a practical remediation report.
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.5
  changefreq: monthly
  lastmod: build
jsonld:
  kind: CaseStudy
---
## Background

- In 2025Q1, the LGL-TAX customer ran a PVE cluster for database and website workloads.
- Original design recommendations called for SSD-based storage and structured handover, but cost pressure led to HDD substitution and weak transition controls.

## Incident

- Oracle DB internal backup jobs overlapped with VM-layer backup scheduling, causing IO wait spikes.
- Several VMs failed writeback operations; some data loss and boot failures occurred.
- The customer temporarily restored part of the estate from older backup artifacts.
- After service interruption, WalksCloud was engaged through referral and delivered remote-plus-onsite assessment with report output in under one week.

## WalksCloud assessment approach

1. **Storage bottleneck analysis**: verified that replacing SSD with HDD introduced an order-of-magnitude performance gap under backup contention.
2. **PVE plan and handover review**: identified divergence from original architecture recommendations and insufficient handover records, which prevented earlier risk detection.
3. **Health report delivery**: consolidated IO findings, hardware recommendations, and backup/handover process improvements into a structured remediation report.

## Outcome

- LGL-TAX received actionable findings and a clear improvement path.
- Engagement closed after report delivery, and WalksCloud did not track downstream adoption decisions in this phase.
`,Be=e({default:()=>Ve}),Ve=`---
type: case
slug: cases/lgl-tax-pve-io-wait
title: |
  LGL-TAX：從 IO wait 瓶頸到健檢報告的 PVE 案例
description: |
  LGL-TAX 的客戶將原本建議的 SSD 架構換成 HDD，導致資料庫備份期間 IO wait 暴增、VM 回寫失敗。行雲資訊受託釐清原因並出具健檢報告，提供硬體與流程的改善建議。
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.5
  changefreq: monthly
  lastmod: build
jsonld:
  kind: CaseStudy
---
## 背景

- 2025Q1，LGL-TAX 的客戶採用 PVE 叢集，由原建置廠商規畫 SSD 與交接流程，但為降低成本改用 HDD、且內部交接並未落實。
- PVE 的 VM 數量雖不多，但承載資料庫與網站服務；規畫混亂造成風險被忽略。

## 事件

- Oracle DB 在進行內部備份時，與 VM 層的備份排程撞在一起，IO wait 暴增。
- 部分 VM 回寫失敗、資料遺失且無法開機。
- 客戶後來以較早的備份檔先行還原部分主機。
- 網站服務停擺後透過原建置廠商轉介找上行雲資訊，我們在不到一週內完成遠端 / 現勘並出具報告；客戶在收到報告數天後才恢復運作。

## 行雲資訊的評估作法

1. **釐清硬體瓶頸**：分析 IO wait 與磁碟效能，指出 HDD 取代 SSD 使效能差一個量級。
2. **檢視 PVE 規畫與交接**：發現未按原建議規畫，也沒有落實交接紀錄，導致風險無法提前發現。
3. **出具健檢報告**：整理 IO 分析、硬體建議、交接與備援流程，供客戶參考。

## 結果

- 檢測完成後，LGL-TAX 收到健檢報告，了解事故與可行改善方案。
- 專案在此結案，我們也未追蹤後續是否採納建議。
`,He=e({default:()=>Ue}),Ue=`---
type: case
slug: cases/tgw-mdm
title: |
  TGW: Jamf Self-Service Expansion and iPhone Fleet Governance
description: |
  TGW scaled Jamf self-service software delivery and policy controls across Mac and iPhone fleets, improving endpoint consistency and auditability with minimal daily overhead.
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

- In 2022Q3, TGW and TTW each had their own Jamf Pro/Jamf Connect environments built by the vendor, and WalksCloud supported both clients with a shared operations team and automation toolkit.
- TGW required a larger VPP catalog than TTW and added around 20 iPhones as managed corporate devices.
- With limited internal IT resources, TGW needed to expand self-service coverage and mobile device controls on top of WalksCloud's shared script baseline.

## Primary challenges

1. **Scaling self-service**: expand Jamf Self Service with more VPP software, including design tools, meeting apps, and event-related apps.
2. **iPhone corporate device restrictions**: block direct App Store installs and enforce VPP-only application assignment.
3. **Automation continuity**: keep shared components like Make Me an Admin, Homebrew workflows, and operational scripts stable as TGW scale increases.

## WalksCloud approach

1. **Reuse the automation baseline**

    - Reused WalksCloud's shared scripts (VPP/EPP onboarding, Homebrew package workflows, and Make Me an Admin audit controls) to keep Mac-side operations consistent.
    - Extended TGW-specific requirements in Jamf Self Service so users could install approved VPP applications independently.

2. **VPP and iPhone control model**

    - Enforced a "VPP-delivery only" policy for managed iPhones: applications must come from approved VPP assignments or administrator-defined auto-install rules.
    - Disabled direct App Store self-installation to prevent unauthorized software on corporate devices.

3. **Self-service operations design**

    - Organized VPP applications in Jamf Self Service by category, such as general Mac tools, event apps, and iPhone-only software.
    - Defined a request path for additional apps: users submit requests, then we evaluate whether each app should enter self-service or be added to auto-install policy.

## Outcomes

- TGW keeps the same stable automation foundation as TTW while supporting broader needs through a larger VPP self-service catalog.
- Managed iPhones are restricted to approved software, reducing misuse risk.
- Internal IT can focus on app catalog governance (new/remove VPP items) while most operational delivery remains automated.
`,We=e({default:()=>Ge}),Ge=`---
type: case
slug: cases/tgw-mdm
title: |
  TGW：多元 VPP 自助安裝與 iPhone 公務機控管
description: |
  行雲資訊在 TGW 專屬的 Jamf 環境中擴充 VPP 自助服務與 iPhone 公務機限制，讓 NGO 團隊在有限資源下仍能維持 Apple 裝置治理。
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
## 客戶背景

- 2022Q3，TGW 與 TTW 由 Jamf 原廠分別建置兩套 Jamf Pro / Jamf Connect，行雲資訊以相同的維運團隊提供腳本與自動化方案給兩位客戶。
- TGW 需要比 TTW 更大量的 VPP 應用，且新增了約 20 支 iPhone 作為公務機。
- 內部 IT 人力有限，希望在行雲資訊的共享腳本基礎上擴充自助服務內容與行動裝置管控。

## 主要挑戰

1. **自助服務規模擴張**：需在 Jamf 自助服務區提供更多 VPP 軟體，包含設計工具、會議系統與研討活動 App。
2. **iPhone 公務機限制**：必須禁止使用者自行下載 App Store 軟體，所有應用只能透過 VPP 指派。
3. **維護既有自動化**：Make Me an Admin、Homebrew、自動化腳本皆與 TTW 共用，需要確保在 TGW 擴張後仍穩定。

## 行雲資訊的作法

1. **沿用自動化基準**

    - 利用行雲資訊提供的共用腳本（VPP/EPP 安裝、Homebrew 套件、Make Me an Admin 稽核），確保 Mac 端流程一致。
    - 將 TGW 的需求新增到自助服務區，讓使用者可自行安裝被核准的 VPP 應用。

2. **VPP + iPhone 控管**

    - 針對 iPhone 公務機建立「僅允許 VPP 派送」策略，所有應用必須從 VPP 白名單安裝或由管理員指定自動安裝。
    - 禁止 App Store 自行安裝，避免非核准軟體進入公務機。

3. **自助服務流程**

    - 在 Jamf Self Service 中將 VPP 應用分門別類：一般 Mac 工具、研討活動 App、iPhone 專用軟體等。
    - 使用者如需額外 App，須向窗口提出需求，由我們評估後再新增至自助服務或自動安裝清單。

## 成果

- TGW 與 TTW 共用同一套自動化基準，但 TGW 得以透過更大量的 VPP 自助服務滿足多樣需求。
- iPhone 公務機僅能安裝被核准的應用程式，降低公務機被濫用的風險。
- 內部 IT 透明掌握使用者請求，只需專注在新增 / 下架 VPP 應用，其他流程由 Jamf 自動化完成。
`,Ke=e({default:()=>qe}),qe=`---
type: case
slug: cases/tgw-remote-network
title: |
  TGW: Remote Network Operations and Time Machine Backup Continuity
description: |
  Building on proven TTW patterns, WalksCloud delivered segmented remote operations and Jamf Trust-assisted Time Machine backup access for stable day-to-day governance.
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

- In 2022Q3, TGW's IT contact came from the earlier TTW collaboration and brought operational trust in WalksCloud's managed model; even after multiple handover changes, cooperation remained stable.
- The site primarily used three managed Aruba APs and one Mikrotik router, plus a separate classroom segment (covered in a different case).
- The new requirement was secure Time Machine backup from Mac endpoints back to office NAS for evidence-grade retention.

## Challenges

1. **Short deployment lead time**: TGW wanted to adopt proven patterns quickly, including AdGuard Home, LDAP/RADIUS, and remote inspection workflows used in TTW.
2. **No general VPN requirement, but Time Machine support was required**: TGW did not need OpenVPN access; it needed a controlled VPN path only for backup traffic.
3. **Backup traceability for security investigations**: backup records needed to remain auditable after writing into NAS storage.

## WalksCloud approach

1. **Remote managed operations with DNS/LDAP/RADIUS**

    - Reused the proven TTW baseline: AdGuard Home filtering (public filters plus homelab validation), LDAP/RADIUS self-service management, and CI/CD-driven update workflows.
    - Maintained SNMP/Syslog visibility under WalksCloud-managed channels and designed office/guest segmentation around Aruba AP and Mikrotik routing.

2. **Jamf Trust plus Time Machine backup path**

    - Used Jamf Security Cloud/Jamf Trust as the only approved transport, accepting encrypted connections from Jamf Trust app clients.
    - Defined a controlled Time Machine flow: enable backup from Jamf Self Service, connect through Jamf Trust, and write to per-user folders on office NAS.
    - Preserved backup logs and NAS journal records as traceable evidence for incident investigation.

3. **Long-term operations and automation**

    - Renewed DNS/RADIUS certificates weekly through CI/CD ACME workflows.
    - Shared user/group and Jamf automation patterns with TTW, enabling fast patch and policy rollout.

## Outcomes

- TGW achieved TTW-equivalent remote operations stability in the new office without a long rediscovery phase.
- Jamf Trust plus Time Machine delivered traceable backup continuity and faster incident recovery readiness.
- With DNS filtering, LDAP/RADIUS controls, and self-service operations in place, WalksCloud intervention remained exception-based and low-disruption.
`,Je=e({default:()=>Ye}),Ye=`---
type: case
slug: cases/tgw-remote-network
title: |
  TGW：延續 TTW 成功經驗的遠端代管與 Time Machine 備援
description: |
  行雲資訊由 TTW 的合作口碑轉介，複製 AdGuard Home、LDAP/RADIUS 與受控式遠端代管流程，同時讓 TGW 以 Jamf Trust + Time Machine 安全回存到辦公室 NAS，維持備份軌跡與資安稽核。
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
## 客戶背景

- 2022Q3，TGW 的 IT 窗口原本任職於 TTW，離職後加入 TGW 並延續對行雲資訊代管流程的信任；後續雖多次輪替窗口，但合作默契未受影響。
- 現場主要由三顆 Aruba 受控型 AP 與一台 Mikrotik Router 組成，另外還有教室網段（已於監視器案例描述）。
- 新需求是讓 Mac 的 Time Machine 備份可以回存辦公室 NAS 作資安存證。

## 挑戰

1. **縮短導入時間**：我們建議沿用 TTW 的 AdGuard Home、LDAP/RADIUS、遠端巡檢等作法，TGW 同意採納。
2. **不需要額外 VPN，但要支援 Time Machine**：TGW 無 OpenVPN 需求，我們改以 Jamf Security Cloud / Jamf Trust 作為專用 VPN，僅用於 Time Machine 備份。
3. **備份要能成為資安存證**：Time Machine 回到 NAS 後，需保留可追蹤的備份軌跡，以便未來調查。

## 行雲資訊的作法

1. **遠端代管與 DNS／LDAP／RADIUS 方案**

    - 沿用 TTW 成功經驗：AdGuard Home 過濾（公開 filter + homelab 驗證）、LDAP/RADIUS 自助介面、GitLab CI/CD 自動更新、SNMP/Syslog 只由行雲資訊管理（客戶端無存取）。
    - 依 TGW 的 Aruba 受控型 AP + Mikrotik Router 規畫辦公／訪客網段（教室因地理位置獨立且無訪客需求，維持原狀）。

2. **Jamf Trust + Time Machine 備援**

    - 使用 Jamf Security Cloud / Jamf Trust 作為唯一通道，僅接受從 Jamf Trust App 建立的加密連線。
    - 我們規畫 Time Machine 備份流程：Mac 端於 Jamf 自助服務啟用備份，透過 Jamf Trust 連回辦公室 NAS，依使用者身份寫入專屬資料夾。
    - 備份紀錄與 NAS 日誌可在資安事件時回溯，成為存證依據。

3. **長期維運與自動化**

    - DNS／RADIUS 憑證同樣每週透過 CI/CD 執行 ACME 更新。
    - 使用者帳號、群組與 Jamf 自動化腳本與 TTW 共享，可快速套用補丁或更新。

## 成果

- TGW 在新辦公室也能延續 TTW 的穩定代管體驗，無需重新摸索。
- Jamf Trust + Time Machine 備份提供可追蹤的備援軌跡，遇到資安事件時能迅速還原資訊。
- DNS 過濾、LDAP/RADIUS、自助巡檢等作法讓行雲資訊僅在例外情況下介入，維持低干擾的遠端協作模式。
`,Xe=e({default:()=>Ze}),Ze=`---
type: case
slug: cases/tgw-zero-trust-monitoring
title: |
  TGW: Securing Internet-Exposed Camera Access with Jamf Trust
description: |
  WalksCloud re-scoped camera access through zero-trust controls and managed gateway design so only authorized users could reach surveillance systems through encrypted trust channels.
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

- In 2025Q4, TGW had 16 surveillance cameras acquired through a security vendor, exposed directly to the internet over fixed-IP PPPoE without VPN isolation.
- The site had only minimal unmanaged AP coverage and no unified network-governance layer.
- Risk review by executive leadership identified full external exposure of camera management interfaces.

## Primary pain points

1. **Directly exposed management interfaces**: anyone with address knowledge could attempt access.
2. **Weak identity governance**: account protection relied on basic credentials without full access policy enforcement.
3. **Shared-space constraint**: TGW needed secure monitoring without rebuilding the entire site into dedicated infrastructure.

## WalksCloud solution

1. **Mikrotik PoE router plus Jamf Security Cloud gateway**

    - Deployed a Mikrotik PoE router in front of the camera host and established IPSec connectivity to Jamf Security Cloud.
    - Fixed camera-host addressing and enforced gateway-mediated routing for all target traffic.

2. **Jamf Trust zero-trust access channel**

    - Built camera-specific access policy under Jamf public-policy model and allowed only registered Jamf Trust app clients.
    - Restricted active camera access to the authorized executive account; camera app usage required Jamf Trust VPN activation.

3. **Cross-validation and audit evidence**

    - Verified baseline local connectivity behavior, then tested remote and non-classroom access with Jamf Trust activated.
    - Preserved connection logs and alerts in Jamf Security Cloud for ongoing review.

## Outcomes

- Camera management endpoints were removed from direct fixed-IP exposure.
- Authorized leadership could monitor securely through Jamf Trust, while unauthorized users could not connect even with known addresses.
- Security posture improved without full network reconstruction, using gateway plus trust-channel controls.
`,Qe=e({default:()=>$e}),$e=`---
type: case
slug: cases/tgw-zero-trust-monitoring
title: |
  TGW：以 Jamf Trust 守住暴露外網的監視器
description: |
  行雲資訊協助 TGW 將原本直接曝露在外網的 16 支監視器收回零信任通道，透過 Mikrotik Gateway 與 Jamf Security Cloud 限縮僅有執行長可透過 Jamf Trust App 存取。
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
## 客戶背景

- 2025Q4，TGW 由保全公司買斷 16 支監視器，採 PPPoE 固定 IP 直接連上網際網路，未經任何內網隔離或 VPN。
- 場域僅有大小教室各一顆雜牌 AP，沒有整體網路管理設備。
- 執行長在審視資安風險時，發現監視器管理介面全然暴露於外網，因此尋求行雲資訊評估改善方案。

## 主要痛點

1. **直接暴露的管理介面**：保全系統使用固定 IP，任何人只要知道位址即可登入。
2. **缺乏權限控管**：管理帳號僅以預設密碼保護，沒有整體身分驗證流程。
3. **共享場地限制**：TGW 在外部場地需要監看設備，但不希望整個場域網路升級成專屬機房。

## 行雲資訊的解法

1. **Mikrotik PoE Router + Jamf Security Cloud Gateway**

    - 在監視器主機前部署 Mikrotik PoE Router，建立 IPSec 通道連回 Jamf Security Cloud（僅支援 IPSec 連線）。
    - 將監視器主機 IP 固定，並設定所有指向該 IP 的流量必須經由 Gateway 轉送。

2. **Jamf Trust Zero Trust VPN**

    - 依 Jamf 公開政策建立監視器專用 policy，僅允許已註冊 Jamf Trust App 的裝置連線。
    - 執行長為唯一授權使用者，透過 Jamf Trust App 啟動 VPN 後才能開啟監視器 App。未啟用 Jamf Trust 時，即使在教室 Wi-Fi 也無法觀看。

3. **交叉驗證與稽核**

    - 驗證流程：先在教室內網（未啟用 Jamf Trust App）確認可直接觀看，以確保原有 Wi-Fi 權限正常；再啟動 Jamf Trust App 測試遠端／非教室環境的 VPN 連線是否生效。
    - 所有連線紀錄與告警均保存在 Jamf Security Cloud，可供執行長隨時調閱。

## 成果

- 監視器管理介面已不再暴露於固定 IP，必須走零信任通道才能連線。
- 執行長可透過 Jamf Trust App 隨時監看場地，但其他人即使知道 IP 也無法連線。
- 無需全面改造場域網路，只以 Mikrotik Gateway + Jamf Security Cloud 建立可追溯的安全管道。
`,et=e({default:()=>tt}),tt=`---
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
`,nt=e({default:()=>rt}),rt=`---
type: case
slug: cases/ttw-mdm
title: |
  TTW：以 Jamf MDM 自助流程補齊全 Mac 團隊的資安治理
description: |
  行雲資訊在 TTW 的 Jamf 環境中建出自助式權限與應用管理流程，搭配 Jamf Protect 告警，讓非資安背景的 NGO 仍能維持 Apple 裝置安全。
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
## 客戶背景

- 2022Q3，TTW 為全 Mac 辦公環境（<30 台 Mac），由友人介紹與行雲資訊合作。
- Jamf 原廠完成初始建置，但內部對 Apple 生態與 MDM 維運經驗不足。
- 在信任遠端代管合作的基礎上，TTW 臨時邀請行雲資訊出席 Jamf 原廠的導入 / 建置會議並擔任技術窗口，協助長期維運。
- TTW 需要維持 NGO 的安全流程並在有限 IT 人力下管理裝置。

## 主要需求 / 挑戰

1. **自助化權限與應用部署**：使用者預設無管理權限，需在可控條件下自行取得暫時權限與安裝工具。
2. **惡意威脅處理**：TTW 需依靠 Jamf Protect 告警與外部顧問提供指引。

## 行雲資訊的介入方式

1. **自動化腳本與應用部署**

    - 建置 VPP / EPP 的安裝流程，確保防護軟體與必要應用可自動布署。
    - 透過 Homebrew 腳本安裝常用工具；需要手動安裝的應用也透過 MDM 推播。
    - 建立「Make Me an Admin」自助稽核：使用者需在介面確認用途後才獲得暫時管理權限，系統自動紀錄。

2. **Jamf Protect 告警處理**

    - TTW 部署 Jamf Protect，由行雲資訊持續監看告警並主動聯繫窗口。
    - 案例：某使用者下載疑似竊取電子錢包的軟體，雖未被 Jamf Protect 判定為惡意，客戶仍主動通報；我們要求立刻封存裝置、複製資料並檢查殘存風險後再交還。

## 成果

- 非資安背景的 NGO 仍能自助處理 Mac 權限與應用需求，只需在例外情況尋求顧問。
- Jamf Protect 告警流程具備封存與追蹤標準，減少惡意程式殘留風險。
`,it=e({default:()=>at}),at=`---
type: case
slug: cases/ttw-remote-network
title: |
  TTW: Remote Network Operations with DNS and VPN Identity Governance
description: |
  WalksCloud standardized TTW remote network operations with AdGuard Home filtering, RADIUS-backed identity controls, and VLAN segmentation in a shared-office context.
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
## Client background and engagement context

- In 2021Q1, TTW (an NGO/NPO organization) adopted a fully managed hybrid stack of UniFi, Mikrotik, and Cisco through a referral and partnered with WalksCloud.
- TTW had in-house MIS staff for day-to-day tasks but lacked full-network architecture and security planning capacity.
- During relocation to a co-working space, we coordinated with facility management so TTW could keep independent network governance and existing operations in a shared telecom room.
- The trust built in this project also led TTW to invite WalksCloud into vendor-side Jamf/MDM implementation discussions as a technical liaison (covered in a separate case).

## Primary challenges

1. **Access control in shared infrastructure**: preserve independent routing and VLAN boundaries in a co-working environment to prevent unauthorized access by other tenants or former staff.
2. **Limited NGO resources**: build workflows the client can operate directly without full-time reliance on external consultants.
3. **Cross-layer service integration**: align DNS filtering, VPN, LDAP/RADIUS, and Jamf MDM operations under one coherent process.

## WalksCloud approach

1. **Remote managed operations baseline**

    - Initial topology: 1 UniFi router, 1 Mikrotik router, 7 UniFi APs, 2 UniFi switches, and 3 Cisco PoE switches.
    - After moving to the co-working space, TTW retained 2 routers and 1 Cisco PoE switch, then added 1 Cisco switch in the shared telecom room as a patching hop to keep TTW VLAN and external connectivity fully controlled.
    - WalksCloud monitored SNMP and Syslog telemetry internally for health verification. We did not expose that telemetry directly to the client; the client escalated anomalies, and we correlated evidence before giving recommendations.

2. **AdGuard Home filtering**

    - Deployed a dedicated AdGuard Home host with a validated public filter set.
    - Fed DNS logs into the alerting flow to support phishing incident audit and traceability.
    - Ran weekly ACME renewal through CI/CD to update SSL certificates for AdGuard Home and RADIUS, keeping certificate trust chains current in production.

3. **Dual VPN hosts with LDAP/RADIUS identity governance**

    - Operated two VPN hosts for separate user classes (general users and intelligence/research users), with group policy enforced by LDAP and RADIUS.
    - Logged all sign-ins into internal audit records (IP, region, AS number, timestamp) for traceability.
    - Provided self-service interfaces for account activation/deactivation and password reset around joiner/mover/leaver events.

4. **VLAN design for shared office operations**

    - Segmented research systems, office Wi-Fi, and guest Wi-Fi into independent VLANs, with ACL-based routing controls where needed.
    - Used agreed cable labeling and handoff procedures with co-working management so TTW MIS could maintain isolation with low daily overhead.

## Execution highlights

- **True remote managed operations**: routine checks were completed through metrics and alerts without frequent onsite visits.
- **Self-service plus automation**: TTW handled account lifecycle and password resets directly; WalksCloud stepped in only for exceptions.
- **Audit-ready operations**: VPN logs, DNS filtering records, and VLAN policy evidence were preserved in shared reporting to maintain NGO audit capacity under tight budgets.

## Outcomes

- TTW maintained an independent, secure network even after moving into shared office infrastructure.
- DNS filtering successfully blocked phishing domains and reduced social-engineering risk typical in nonprofit environments.
- TTW MIS took over daily account operations through self-service, while WalksCloud handled only a small set of exceptions in a low-friction remote advisory model.
- Certificate renewals and audit records remained continuously maintained in the background, preventing silent control drift.
- Day-to-day collaboration became exception-driven: routine operations stayed stable with minimal interruption.
`,ot=e({default:()=>st}),st=`---
type: case
slug: cases/ttw-remote-network
title: |
  TTW：以遠端代管與 DNS / VPN 身分治理支撐 NGO 辦公室資安
description: |
  行雲資訊為 TTW 建立標準化的遠端網路代管流程，結合 AdGuard Home 過濾、RADIUS 驗證與 VLAN 切分，讓 NGO 客戶得以放心舉辦開放活動並阻絕未授權連線。
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
## 客戶背景與合作情境

- 2021Q1，TTW 為 NGO / NPO 組織，透過友人介紹與行雲資訊合作，採用全自管的 UniFi + Mikrotik + Cisco 混合架構。
- 客戶內部有 MIS 同仁處理日常作業，但缺乏整體網路與資安規畫能力。
- 近期搬遷至 co-working space，我們需與空間管理團隊協調，讓 TTW 能在共享電信機房中維持獨立網路與原有管理流程。
- 專案期間建立的信任也讓 TTW 在 Jamf / MDM 導入時直接邀請行雲資訊出席原廠建置會議並擔任技術窗口（另有專篇說明）。

## 主要挑戰

1. **共享場域的權限控管**：在 co-working 空間中仍要維持獨立路由與 VLAN，避免其他租戶或離職員工接入。
2. **資源有限的 NGO**：需要可自助維運的系統，避免全部依賴外部顧問。
3. **多層服務協調**：DNS 過濾、VPN、LDAP／RADIUS、Jamf MDM 等服務需整合在同一套流程中。

## 行雲資訊的作法

1. **遠端代管與基準維護**

    - 初期架構為 1 台 UniFi Router、1 台 Mikrotik Router、7 顆 UniFi AP、2 台 UniFi Switch 與 3 台 Cisco PoE Switch。
    - 搬遷至 co-working space 後，保留 2 台 Router 與 1 台 Cisco PoE Switch，並新增 1 台 Cisco Switch 置於共享電信機房作為跳線設備，確保 TTW 自己的 VLAN 與對外連線仍可控。
    - 行雲資訊內部仍以 SNMP、Syslog 回收設備指標，但僅用於顧問端掌握健康度，不提供客戶端查詢；客戶只需在出現異常時通報，我們再從內部監控資料比對並提出建議。

2. **AdGuard Home 過濾**

    - 部署專用主機運行 AdGuard Home，掛載我們驗證過的公開 filter 清單。
    - DNS 日誌可回填告警系統，用於稽核及釣魚事件追蹤。
    - 每週由 CI/CD 自動執行 ACME 流程，為 AdGuard Home 與 RADIUS 更新 SSL 憑證並套用至客戶環境，確保外部憑證鏈隨時受信任。

3. **雙主機 VPN 與 RADIUS / LDAP 身分治理**

    - 兩台 VPN 主機分別對應一般使用者與情資 / 研究人員，帳號群組由 LDAP + RADIUS 控管。
    - 任何登入會寫入內部稽核紀錄（IP、地區、AS Number、時間），必要時可追溯。
    - 提供自助管理介面讓客戶在員工入離職前後自行啟用 / 停用帳號、重設密碼。

4. **VLAN 與共享空間協作**

    - 將 TTW 的研究主機、辦公室無線網路與來賓 Wi-Fi 分成獨立 VLAN，必要時以 ACL 控制路由。
    - 透過與 co-working 管理方約定好的布線與標籤機制，內部 MIS 只需通知我們需求、核對告警，即可維持隔離。

## 執行亮點

- **真遠端代管**：常規巡檢透過指標與告警完成，無須頻繁到場即可掌握狀態。
- **自助與自動化並行**：密碼重設與帳號啟停全交由客戶操作，我們僅在群組設定錯誤或密碼遺失時支援。
- **審計備援**：VPN 登入稽核、DNS 過濾記錄與 VLAN 政策皆存入共享報告，確保 NGO 即使預算有限也能保有稽核能力。

## 實際成效

- 搬進 co-working space 仍能維持獨立網路，訪客或其他租戶無法接觸 TTW 的核心系統。
- DNS 過濾成功阻擋釣魚站點，減少非營利組織常見的社工攻擊風險。
- 客戶 MIS 透過自助介面管理帳號，行雲資訊僅需處理少量例外事件，達成「自助 + 遠端顧問」的協作模式。
- 系統穩定到讓客戶幾乎忘記其背後仍在遠端維運；憑證更新與稽核記錄都由行雲資訊靜默完成，確保必要控管不被忽略。
- 客戶與行雲資訊僅在出現異常或要新增需求時才互動，平時維持零干擾運作，反映雙方對基礎設施與維運流程的高度信任。
`,ct=e({default:()=>lt}),lt=`---
type: case
slug: cases/uia-remote-network
title: |
  UIA: Keeping UniFi Office Network Stable Through Remote Operations
description: |
  A remote-first operations model that maintained office network stability while documenting upgrade risks and phased segmentation recommendations under limited client-side IT maturity.
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
## Client background and engagement context

- In 2021Q1, UIA engaged WalksCloud through referral for office-network and on-prem virtualization operations.
- In-house IT capability was limited, and the organization continued to rely on a shared WPA2 password without RADIUS or asset-management tooling.
- The client remained cost-driven and preferred a "remote managed operations plus on-demand onsite" model, but had limited trust in remote investigation workflows.

## Main challenges

1. **Remote operations scope was constrained**: available control was mainly limited to UniFi controller operations, firmware scheduling, and configuration-change tracking.
2. **Onsite coordination quality was inconsistent**: remote diagnostic questions often received "why not come onsite" responses, and even onsite sessions lacked consistent device-localization support.
3. **Private-cloud and office traffic were mixed**: ESXi cluster traffic and office traffic shared the same network segment, with no VLAN separation between VM and wireless traffic.

## WalksCloud remote operations workflow

1. **Initial topology baseline capture**

    - Within the available information window, we completed a full baseline record of AP, switch, ESXi, and major VLAN topology to support future anomaly comparison.

2. **Standardized inspection and off-peak updates**

    - Weekly inspection through UniFi controller covered approximately 7 UniFi switches (mixed models), 1 UniFi router, 4 UniFi APs, and 2 Mikrotik router/switch units, including alerts and anonymized usage trends.
    - If no anomaly was observed, no unnecessary escalation was triggered. The most frequent recurring issue was link speed dropping from \`1G\` to \`100M\`; cable replacement by the client temporarily improved behavior but recurrence remained common.
    - When new firmware became available, WalksCloud validated it first in internal environment, then coordinated staged updates in non-business hours with per-device post-update connectivity checks.
    - Configuration deltas and change records were preserved in shared reports for follow-up communication.

3. **Risk reminders and upgrade recommendations**

    - We continuously recommended RADIUS and role-layered permissions to reduce shared-password abuse risk.
    - We also recommended separating ESXi-host traffic from office traffic via VLAN segmentation to prevent wireless-path bottlenecks, and provided an implementation outline for internal evaluation.

## Execution highlights

- **Remote-first operating model**: even when onsite execution was preferred by stakeholders, operations still followed inspection-update-verify sequence to preserve stability and traceability.
- **Transparent records and risk disclosure**: each inspection/update cycle documented deferred improvements (for example, unadopted VLAN proposals) so decision-makers could see the operational cost of delayed upgrades.
- **Adaptive coordination**: under the client's fixed WPA2 constraint, we continued delivering actionable risk guidance and staged governance recommendations without forcing disruptive redesign.

## Outcomes and follow-up

- UniFi operations remained stable through the engagement, with firmware and configuration updates completed without planned service downtime.
- Although the client did not adopt VLAN and RADIUS recommendations in this phase, the related SOP and improvement backlog remained as the basis for future upgrade evaluation.
- This case helped formalize WalksCloud's "remote-first with onsite exceptions" managed-operations standard for similar environments.
`,ut=e({default:()=>dt}),dt=`---
type: case
slug: cases/uia-remote-network
title: |
  UIA：以遠端代管流程維持 UniFi 辦公室網路穩定
description: |
  行雲資訊透過標準化的遠端巡檢與離峰更新流程，協助 UIA 維持 UniFi 辦公室網路穩定，同時提出 VLAN 分流建議作為後續升級依據。
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
## 客戶背景與合作情境

- 2021Q1，UIA 透過友人介紹委託行雲資訊協助維運辦公室網路與地端虛擬主機環境。
- In-house IT 能力有限且偏好共用 WPA2 密碼，尚未導入 RADIUS 與資產管理工具。
- 客戶維持成本導向、期望「遠端代管 + 隨傳到場」，卻對遠端調查缺乏信任。

## 主要挑戰

1. **遠端代管範圍受限**：只能操作 UniFi 控制器、安排韌體更新與紀錄設定變更。
2. **現場配合度不足**：客戶常以「為何不過來」回應遠端提問，到場後亦不願協助定位設備。
3. **混雜的私有雲流量**：ESXi 叢集與辦公室流量同網段，無法針對虛擬機與無線網路做 VLAN 分流。

## 行雲資訊的遠端代管流程

1. **接手初期拓樸盤點**：

    - 在能取得資訊的時間內完成一次全域拓樸紀錄（AP、Switch、ESXi 與主要 VLAN），作為後續異常比對基準。

2. **標準化巡檢與離峰更新**：

    - 每週透過 UniFi 控制器檢查約 7 台不同型號 UniFi Switch、1 台 UniFi Router、4 顆 UniFi AP 與 2 台 Mikrotik Router Switch 的告警與匿名化使用量。
    - 若無異常則不干擾客戶，一旦看到可疑行為才回報並提建議。最常見的異常是裝置連線速率從 1G 掉到 100M，客戶自行換線後仍會反覆發生。
    - 一旦掌握到新的韌體版本，會先在行雲資訊自有環境驗證，再與客戶協調非營業時段批次更新，確保 AP/ Switch 更新後逐一驗證連線。
    - 將設定差異與變更記錄於共享報告，方便日後溝通。

3. **風險提示與升級建議**：

    - 持續建議導入 RADIUS 與分層權限，以降低共用密碼被濫用的風險。
    - 建議將 ESXi 主機流量與辦公室網路分離、建立 VLAN 以避免無線流量造成瓶頸，並提供實作計畫供內部評估。

## 執行亮點

- **遠端優先流程**：即使客戶傾向要求現場執行，我們仍以標準化巡檢、更新、驗證三步驟維持穩定，確保任何調整都能在遠端完成並保有紀錄。
- **透明紀錄與風險揭露**：每次巡檢與更新皆會在報告中標示待改善事項（例如未採納的 VLAN 建議），幫助決策層了解延遲升級的代價。
- **彈性協調**：在客戶堅持固定 WPA2 密碼的前提下，我們改以巡檢報告持續提醒潛在風險，並提供可行的密碼管理與權限分層建議以備後續決策。

## 結果與後續

- UniFi 網路在合作期間維持穩定更新，無需停機即可完成韌體更版與設定異動。
- 雖然客戶最終未採納 VLAN 與 RADIUS 建議，但相關 SOP 與改進清單成為後續評估升級的基礎。
- 行雲資訊透過此案建立「遠端優先 + 現場例外」的代管守則，後續導入於其他客戶以維持交付品質。
`,ft=e({default:()=>pt}),pt=`---
type: case
slug: cases/wzz-contract-strategy
title: |
  WZZ: Contract Boundaries and Service Baseline Under Extreme Budget Limits
description: |
  How WalksCloud restructured service boundaries and contract terms in a budget-constrained engagement to keep delivery scope and quality sustainable.
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.55
  changefreq: monthly
  lastmod: build
jsonld:
  kind: CaseStudy
---
## Client background

- In 2024Q4, WZZ was referred through JAL and ANA advisor channels and operated with near-minimum IT/MIS budget.
- Budget-first decision behavior emphasized "usable at lowest cost" over long-term resilience.
- WalksCloud proposed full network, controller, and NAS managed scope, but budget objection appeared from first negotiation round.

## Contract negotiation path

1. **Round one: scope reduction to fit constrained budget**

    - The client requested most managed items be removed, keeping only controller hosting and basic support.
    - Even after fee compression, WalksCloud still completed controller migration and NAS replacement stabilization.

2. **Post-migration renewal: further cuts requested**

    - After QNAP-to-Synology migration, renewal negotiation pushed for more scope removal and deeper fee reduction.
    - Proposed fee level fell below sustainable operating cost and below software baseline economics.

3. **WalksCloud decision**

    - Clarified that full managed quality requires fee-to-scope alignment.
    - Moved to controller-fee-only baseline with optional add-back items under separate agreement.
    - Documented decision boundaries in writing to avoid repeated "less scope, more expectation" misalignment.

## Outcome and practical reminder

- Final arrangement retained controller annual fee and minimal support only.
- WalksCloud protected service-quality floor and avoided long-term loss exposure.
- The case highlights a key rule: for extreme-budget engagements, contract scope and pricing boundaries must stay explicit and enforceable.
`,mt=e({default:()=>ht}),ht=`---
type: case
slug: cases/wzz-contract-strategy
title: |
  WZZ：極限預算下的合約邊界與服務底線
description: |
  WZZ 長期以「能用就好」為前提，從首輪談約就要求大幅縮減代管內容與費用。這篇記錄行雲資訊如何調整服務範圍、改為只收控制器年費，避免服務品質被不對稱期待拖垮。
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.55
  changefreq: monthly
  lastmod: build
jsonld:
  kind: CaseStudy
---
## 客戶背景

- 2024Q4，WZZ 透過 JAL 與 ANA 顧問轉介，長期沒有 IT/MIS 預算，所有決策都強調「能用且最便宜」。
- 行雲資訊提出完整網路 + 控制器 + NAS 代管方案，但客戶從第一輪談合約就表示預算不足。

## 合約談判脈絡

1. **第一輪談判：刪減範圍以取得低價合約**

    - 客戶要求刪除多數服務項目，只保留控制器代管與最基本的支援項目。
    - 即使年費被壓到原報價的一小部分，我們仍協助完成控制器遷移與 NAS 汰換，盡力讓環境穩定。

2. **NAS 汰換後：要求再進一步縮減內容與費用**

    - 完成 QNAP → Synology 的同步後，客戶在續約時希望再刪更多代管項目，並把年費降到更低，已經是幾乎倒貼的遠低於合理維運成本的價格。
    - 這個價格遠低於控制器的軟體年費與我們投入的工時成本，等同要求長期免費服務。

3. **行雲資訊的決策**

    - 說明若要維持完整代管，費用必須對應服務範圍，否則無法保障品質。
    - 改為只收取控制器年費，其他項目若要恢復，需重新談合理的合約。
    - 將決策書面化，讓客戶理解讓利的底線，避免再出現「刪內容卻要更多服務」的情況。

## 結果與提醒

- WZZ 最終僅維持控制器年費與極簡支援；行雲資訊避免了長期虧損，也保留品質底線。
- 此案再次凸顯：面對預算極低的客戶，合約需明確列出服務範圍與價格，並在必要時選擇縮減服務而非無限讓利。
`,gt=e({default:()=>_t}),_t=`---
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
`,vt=e({default:()=>yt}),yt=`---
type: case
slug: cases/wzz-nas-migration
title: |
  WZZ：在預算極限下完成 QNAP → Synology 的資料轉移
description: |
  WZZ 長期只願意投入堪用等級的 IT 預算，但 QNAP NAS 充斥隨身碟、效能差又留有多年入侵遺跡。行雲資訊以最低限度的顧問方式協助估算容量、催促汰換並完成資料轉移，同時管理費用與安全風險。
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
## 客戶背景

- 2025Q4，透過 JAL 與 ANA 顧問轉介的 WZZ，長期缺乏 IT/MIS 預算，只願意投入堪用等級的設備。
- 安全與備援並非決策重點，所有需求都以壓低費用為優先。

## 原始情境與痛點

1. **QNAP NAS 早已超過汰換年限**：到處掛隨身碟補救容量，效能差且管理混亂。
2. **安全風險被忽略**：我們在稽核中發現多筆有年份的入侵遺跡，雖未持續擴散，但顯示環境曾被入侵。
3. **客戶只想「換品牌」**：指定改用 Synology，但希望沿用既有成本結構，幾乎沒有備援預算。

## 行雲資訊的作法

### 1. 風險揭露與容量估算

- 將發現的入侵遺跡與效能瓶頸逐項列出，說明若不汰換會持續暴露在風險中。
- 依客戶現有資料量與成長情境估算 Synology 所需容量，避免再走隨身碟併用的老路。

### 2. 低預算下的汰換與資料轉移

- 客戶自行採購 Synology 及硬碟，我們提供最基本的採購建議與規格確認。
- 為避免停機，我們在 QNAP 上開啟 WebDAV 服務，並透過 Synology 的 Cloud Sync 功能同步資料，讓新 NAS 與舊 NAS 持續同步、不影響日常作業。
- 全部資料同步後才關閉 QNAP，並通知窗口切換存取點；期間窗口手動建立必要的帳號權限，確保切換過程平順。

### 3. 合約與費用談判

- 客戶一開始就要求把合約拆成最小範圍，才願支付相當於完整服務 10% 的年費，並把 NAS 汰換納入其中。
- NAS 汰換完成後，客戶續約時又要移除限制條件並再砍價，實際上只剩完整服務約 1% 的價值，連控制器年費都無法覆蓋。
- 我們只能改為收取控制器年費，提醒若再降價就無法維持合理的服務品質。

## 結果與提醒

- Synology 取代了舊 QNAP，資料轉移完成，新系統回到穩定運作。
- 客戶雖仍不願增加備援預算，但已了解過往入侵遺跡的風險，也同意定期檢查。
- 我們將 WZZ 納入「極限預算」客群管理：合約條件必須與費用對應，避免承諾超出成本的責任。
`,bt=e({default:()=>xt}),xt=`---
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
`,St=e({default:()=>Ct}),Ct=`---
type: case
slug: cases/wzz-network-controller
title: |
  WZZ：極限預算下的 UniFi 控制器託管與 NAS 汰換提醒
description: |
  透過 JAL/ANA 顧問轉介的 WZZ，只願意投入最低成本建置 Mikrotik + 單顆 UniFi，後續又希望我們在費用極低的前提下托管控制器、協助從 QNAP 汰換到 Synology。這篇整理行雲資訊如何在範圍受限、預算被壓縮的情況下，仍完成控制器遷移與資料轉移，並提醒客戶最低限度的安全風險。
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
## 客戶背景

- 2024Q4，WZZ 透過 JAL（資安顧問）與 ANA（技術顧問）共同轉介，長期無 IT/MIS 預算，對任何建置都抱持「能用就好」的態度。
- 安全與備援並非其決策要素，所有需求都優先考量費用。

## 原始情境與痛點

1. **網路環境需要重新整理**：WZZ 因辦公室搬遷決定重建網路，但僅願投入最基本設備。
2. **控制器託管預算被壓縮**：初期由 ANA 案提供的 Azure VM 托管 UniFi 控制器，補助經費用完後需另尋低成本方案。
3. **NAS 風險被忽略**：原使用 QNAP NAS，掛滿隨身碟、效能低且存在多年入侵遺跡；雖然客戶想換成 Synology，但仍希望我們在極低預算下完成顧問及資料轉移。
4. **合約與費用從一開始就被壓低**：原報價超出客戶預算，對方要求把服務拆成最少項目並限制範圍，將年費壓到完整服務的 10%。

## 行雲資訊的作法

### 1. 基本網路建置：僅提供堪用方案

- 進行簡單場勘與需求確認後，依客戶預算建置 Mikrotik Router + 單顆 UniFi AP，並為 AP 重新拉線（事務機/NAS 維持原有線路）。
- 驗收條件只有「能通就好」，沒有額外測試或正式驗收流程。
- 在此階段，我們即提醒「預算與安全度是取捨」的現實：若費用被壓到最低，服務範圍就必須被限縮。

### 2. UniFi 控制器託管與遷移

- 控制器先托管在 ANA（屬基金會）提供的 Azure VM 補助環境；補助經費用完後，客戶希望繼續由行雲資訊代管但維持低價。
- 我們使用 UniFi 內建遷移功能，將控制器無痛搬回行雲資訊私有雲，避免重新設定或長時間停機。
- 遷移後的代管範圍被客戶要求限縮，只能提供最基本的監看與維護。

### 3. NAS 汰換顧問與資料轉移

- 原 QNAP NAS 掛滿隨身碟，效能差且我們在稽核中發現多筆有年份的入侵遺跡；雖未立即擴散，但風險顯著。
- 客戶想改用 Synology，我們依其資料量估算容量並提出採購建議，催促 ASAP 汰換並安排資料轉移。
- 由於預算有限，無法設計完整備援或雙 NAS；我們清楚告知客戶這樣的限制與後續風險。
- NAS 升級後，客戶在續約時要求刪除原本的限制條件、再把價格降到完整服務的約 1%，甚至低於控制器年費。

## 結果與學習

- **控制器已順利遷回行雲資訊私有雲**，但提供的代管內容必須嚴格依照實際收費範圍，不再無限加碼。
- **NAS 汰換完成且資料順利轉移**，客戶感受到 Synology 的穩定度提升，但仍不願增加預算做備援。
- 從 WZZ 案例中，我們再次確認：當客戶把價格壓到 10% 甚至 1% 時，服務範圍就必須同步縮小，必要時只收控制器年費，避免承擔超出成本的責任。

## 從本案得到的提醒

- **費用被壓縮時，範圍必須同步限縮**：若客戶堅持用最低預算購買「全能代管」，最終只會讓雙方期待落差擴大。
- **即便只求堪用，也要揭露安全風險**：像 QNAP 上仍殘留入侵遺跡的情況，即使客戶不在意，也要提供明確建議與汰換時程。
- **控制器遷移要保留彈性**：利用 UniFi 內建遷移功能，可以在預算受限時快速切換託管環境，減少衝擊。
`,wt=e({default:()=>Tt}),Tt=`---
type: faq
slug: faq/akvorado-data-quality-checks
title: |
  What data-quality checks are needed before trusting Akvorado Top Talkers?
description: |
  Follow [Akvorado Traffic Analysis Tutorial](/tech/akvorado-traffic-analysis-workflow): confirm exporters keep sending flows, Inlet counters increase, Outlet writes into ClickHouse, and sampling plus SNMP enrichment remain stable.
ogType: article
index: false
deploy: true
sitemap:
  priority: 0.4
  changefreq: monthly
  lastmod: build
---
`,Et=e({default:()=>Dt}),Dt=`---
type: faq
slug: faq/akvorado-data-quality-checks
title: |
  使用 Akvorado 判讀 Top Talkers 前要先確認哪些資料品質？
description: |
  可依[《Akvorado 流量分析教學》](/tech/akvorado-traffic-analysis-workflow) 先確認 exporter 持續送出 flow、Inlet 有封包計數、Outlet 正常寫入 ClickHouse，並檢查 sampling 與 SNMP enrichment 是否穩定。
ogType: article
index: false
deploy: true
sitemap:
  priority: 0.4
  changefreq: monthly
  lastmod: build
---
`,Ot=e({default:()=>kt}),kt=`---
type: faq
slug: faq/akvorado-vs-snmp-monitoring
title: |
  How should Akvorado and SNMP/NMS monitoring be separated?
description: |
  Start with [Akvorado Flow Collector Architecture and Basic Deployment](/tech/akvorado-flow-collector-overview): SNMP/NMS is better for device health, interface errors, and availability, while Akvorado adds traffic source, destination, Top Talkers, and capacity-trend visibility.
ogType: article
index: false
deploy: true
sitemap:
  priority: 0.4
  changefreq: monthly
  lastmod: build
---
`,At=e({default:()=>jt}),jt=`---
type: faq
slug: faq/akvorado-vs-snmp-monitoring
title: |
  Akvorado 與 SNMP/NMS 監控應該如何分工？
description: |
  可先閱讀[《Akvorado Flow Collector 架構與基礎部署》](/tech/akvorado-flow-collector-overview)：SNMP/NMS 適合確認設備健康、介面錯誤與可用性，Akvorado 則補上流量來源、目的、Top Talkers 與容量趨勢分析。
ogType: article
index: false
deploy: true
sitemap:
  priority: 0.4
  changefreq: monthly
  lastmod: build
---
`,Mt=e({default:()=>Nt}),Nt=`---
type: faq
slug: faq/backup-schedule-collision-risks
title: |
  What risks do backup schedule collisions create, and how should they be mitigated?
description: |
  See [PVE Backup Scheduling and IO Pressure Control](/tech/pve-backup-schedule-tuning-guide). Start by correlating IO wait with backup windows, then split and stagger jobs to reduce VM write-back failures.
ogType: article
index: false
deploy: true
sitemap:
  priority: 0.4
  changefreq: monthly
  lastmod: build
---
`,Pt=e({default:()=>Ft}),Ft=`---
type: faq
slug: faq/backup-schedule-collision-risks
title: |
  備份撞排程會帶來哪些風險？如何調整？
description: |
  參考[《PVE 備份排程調整與 IO 管控》](/tech/pve-backup-schedule-tuning-guide)，可先用 IO wait 與備份時間軸找出衝突區段，再透過分流、切段與錯峰排程降低 VM 回寫失敗風險。
ogType: article
index: false
deploy: true
sitemap:
  priority: 0.4
  changefreq: monthly
  lastmod: build
---
`,It=e({default:()=>Lt}),Lt=`---
type: faq
slug: faq/budget-nas-refresh-plan
title: |
  How should NAS refresh and data synchronization be planned under an extreme budget?
description: |
  Use [NAS Refresh and Data Synchronization Strategy Under Extreme Budget Constraints](/tech/budget-nas-refresh-plan) to validate a minimum viable dataset first, then expand in phases with explicit risk and cost gates.
ogType: article
index: false
deploy: true
sitemap:
  priority: 0.4
  changefreq: monthly
  lastmod: build
---
`,Rt=e({default:()=>zt}),zt=`---
type: faq
slug: faq/budget-nas-refresh-plan
title: |
  預算極低時，NAS 汰換與資料同步如何規畫？
description: |
  可依[《極限預算下的 NAS 汰換與資料同步策略》](/tech/budget-nas-refresh-plan) 先完成最小可行資料集的同步與驗證，再分階段擴大範圍，兼顧風險與成本。
ogType: article
index: false
deploy: true
sitemap:
  priority: 0.4
  changefreq: monthly
  lastmod: build
---
`,Bt=e({default:()=>Vt}),Vt=`---
type: faq
slug: faq/closed-hypervisor-migration-plan
title: |
  How do you design a verifiable migration path when a closed hypervisor has no export function?
description: |
  Start with [Migration Validation Guide for Closed Hypervisor Environments](/tech/closed-hypervisor-migration-validation), then apply [Validation and Rollback Script for Multi-Stage Virtualization Migration](/tech/multi-stage-migration-checklist) to define checkpoints and rollback per stage.
ogType: article
index: false
deploy: true
sitemap:
  priority: 0.4
  changefreq: monthly
  lastmod: build
---
`,Ht=e({default:()=>Ut}),Ut=`---
type: faq
slug: faq/closed-hypervisor-migration-plan
title: |
  封閉型 hypervisor 沒有導出功能時，要如何設計可驗證的遷移流程？
description: |
  先依[《封閉 hypervisor 遷移驗證手冊》](/tech/closed-hypervisor-migration-validation) 盤點可取得的備份或快照，再配合[《多段虛擬化轉換的驗證與回復腳本》](/tech/multi-stage-migration-checklist) 設定逐階段檢查點與回復路徑。
ogType: article
index: false
deploy: true
sitemap:
  priority: 0.4
  changefreq: monthly
  lastmod: build
---
`,Wt=e({default:()=>Gt}),Gt=`---
type: faq
slug: faq/controlled-ap-dual-network-data
title: |
  What data should be prepared when managed AP and dual-path network design coexist?
description: |
  Follow [Change Workflow for Managed AP Environments with Dual Network Paths](/tech/controlled-ap-dual-path) to document controller settings, license status, ACL/VLAN policies, and primary/backup path behavior.
ogType: article
index: false
deploy: true
sitemap:
  priority: 0.4
  changefreq: monthly
  lastmod: build
---
`,Kt=e({default:()=>qt}),qt=`---
type: faq
slug: faq/controlled-ap-dual-network-data
title: |
  受控型 AP 與雙路網路並存時要準備哪些資料？
description: |
  可依[《受控型 AP 與雙路併存的變更流程》](/tech/controlled-ap-dual-path) 整理控制器設定、授權狀態、ACL/VLAN 與主備路徑資訊，確保變更與驗證可回溯。
ogType: article
index: false
deploy: true
sitemap:
  priority: 0.4
  changefreq: monthly
  lastmod: build
---
`,Jt=e({default:()=>Yt}),Yt=`---
type: faq
slug: faq/custom-app-delivery-without-apple-account
title: |
  How can a custom app be delivered when the client has no corporate developer account?
description: |
  Use [Custom App Branding, Store Review, and Ownership Transfer](/tech/custom-app-review-transfer) to define signing and publishing ownership first, then prepare iOS/macOS documentation and Android transfer plans.
ogType: article
index: false
deploy: true
sitemap:
  priority: 0.4
  changefreq: monthly
  lastmod: build
---
`,Xt=e({default:()=>Zt}),Zt=`---
type: faq
slug: faq/custom-app-delivery-without-apple-account
title: |
  沒有法人開發者帳號時，客製化 App 要如何交付？
description: |
  可依[《客製化 App 多平台審核與所有權移轉流程》](/tech/custom-app-review-transfer) 先定義簽署與上架責任，再補齊 iOS/macOS 必要文件；Android 可規畫後續所有權移轉。
ogType: article
index: false
deploy: true
sitemap:
  priority: 0.4
  changefreq: monthly
  lastmod: build
---
`,Qt=e({default:()=>$t}),$t=`---
type: faq
slug: faq/custom-app-ownership-transfer
title: |
  How can custom app ownership and developer accounts be transferred safely?
description: |
  See [App Ownership Transfer and Platform Handover Process](/tech/app-ownership-transfer-process). Validate API, signing, and account constraints first, then execute entitlement and document handover per platform.
ogType: article
index: false
deploy: true
sitemap:
  priority: 0.4
  changefreq: monthly
  lastmod: build
---
`,en=e({default:()=>tn}),tn=`---
type: faq
slug: faq/custom-app-ownership-transfer
title: |
  要如何安全地移轉客製 App 的所有權與開發者帳戶？
description: |
  可參考[《App 所有權與開發者帳戶移轉流程》](/tech/app-ownership-transfer-process)，先確認 API/簽章/帳號限制，再依平台規範完成權限、文件與發佈權交接。
ogType: article
index: false
deploy: true
sitemap:
  priority: 0.4
  changefreq: monthly
  lastmod: build
---
`,nn=e({default:()=>rn}),rn=`---
type: faq
slug: faq/datacenter-move-ups-plan
title: |
  How should data center relocation and UPS improvement be planned?
description: |
  Use [Data Center Relocation and UPS Improvement SOP](/tech/datacenter-move-ups-improvement) to map power and rack paths, schedule maintenance windows, and validate bypass plus dual-path power after cutover.
ogType: article
index: false
deploy: true
sitemap:
  priority: 0.4
  changefreq: monthly
  lastmod: build
---
`,an=e({default:()=>on}),on=`---
type: faq
slug: faq/datacenter-move-ups-plan
title: |
  資料中心搬遷與 UPS 改善要如何規畫？
description: |
  依[《資料中心搬遷與 UPS 改善 SOP》](/tech/datacenter-move-ups-improvement) 先盤點電力與機櫃路徑、安排停機窗口，再完成 UPS 旁路與雙路供電驗證。
ogType: article
index: false
deploy: true
sitemap:
  priority: 0.4
  changefreq: monthly
  lastmod: build
---
`,sn=e({default:()=>cn}),cn=`---
type: faq
slug: faq/day-one-onboarding-account-flow
title: |
  How do you design an onboarding account flow so new hires can work on day one?
description: |
  See [Onboarding Automation and Identity Provisioning Collaboration](/tech/onboarding-account-automation) for a form-driven workflow linking identity provisioning, device preparation, and access handoff.
ogType: article
index: false
deploy: true
sitemap:
  priority: 0.4
  changefreq: monthly
  lastmod: build
---
`,ln=e({default:()=>un}),un=`---
type: faq
slug: faq/day-one-onboarding-account-flow
title: |
  新人第一天就上線，帳號流程要怎麼設計？
description: |
  可依[《入職流程自動化與帳號協作》](/tech/onboarding-account-automation) 以表單驅動帳號、設備與門禁協作，縮短到職前準備時間並降低漏項。
ogType: article
index: false
deploy: true
sitemap:
  priority: 0.4
  changefreq: monthly
  lastmod: build
---
`,dn=e({default:()=>fn}),fn=`---
type: faq
slug: faq/it-refresh-minimize-downtime
title: |
  How do you reduce downtime during IT equipment refresh?
description: |
  Apply [IT Equipment Refresh and Low-Disruption Cutover Blueprint](/tech/it-refresh-migration-blueprint): mirror config first, validate in parallel, then cut over in staged steps with rollback paths.
ogType: article
index: false
deploy: true
sitemap:
  priority: 0.4
  changefreq: monthly
  lastmod: build
---
`,pn=e({default:()=>mn}),mn=`---
type: faq
slug: faq/it-refresh-minimize-downtime
title: |
  任何資訊設備需要汰換時，怎麼避免長時間停機？
description: |
  參考[《資訊設備汰換與不中斷切換藍圖》](/tech/it-refresh-migration-blueprint)，先做鏡像設定與平行驗證，再分段切換並保留回復路徑。
ogType: article
index: false
deploy: true
sitemap:
  priority: 0.4
  changefreq: monthly
  lastmod: build
---
`,hn=e({default:()=>gn}),gn=`---
type: faq
slug: faq/jamf-audit-training-plan
title: |
  How should training be planned for Jamf audit readiness and long-term managed operations?
description: |
  Use [Jamf MDM Audit Readiness: Cross-Team Process and Documentation Design](/tech/jamf-audit-cross-team) to modularize role ownership, evidence templates, and incident reporting routines.
ogType: article
index: false
deploy: true
sitemap:
  priority: 0.4
  changefreq: monthly
  lastmod: build
---
`,_n=e({default:()=>vn}),vn=`---
type: faq
slug: faq/jamf-audit-training-plan
title: |
  Jamf 稽核或長期代管專案的教育訓練要怎麼安排？
description: |
  可依 [《Jamf MDM 稽核支援：跨部門流程與文件設計》](/tech/jamf-audit-cross-team) 拆分角色責任、稽核證據與通報流程，讓輪值與交接維持一致。
ogType: article
index: false
deploy: true
sitemap:
  priority: 0.4
  changefreq: monthly
  lastmod: build
---
`,yn=e({default:()=>bn}),bn=`---
type: faq
slug: faq/jamf-connect-oidc-vendor-verification
title: |
  How do you verify a local OIDC provider before Jamf Connect rollout?
description: |
  Build a control baseline with [Building a ZITADEL Validation Lab for Jamf Connect](/tech/zitadel-jamf-connect-validation-lab), then verify \`issuer\`, \`grant_type\`, \`scope\`, and error logs item by item.
ogType: article
index: false
deploy: true
sitemap:
  priority: 0.4
  changefreq: monthly
  lastmod: build
---
`,xn=e({default:()=>Sn}),Sn=`---
type: faq
slug: faq/jamf-connect-oidc-vendor-verification
title: |
  在地 OIDC 供應商聲稱支援 Jamf Connect，導入前要怎麼驗證？
description: |
  先建立[《使用 ZITADEL 建立 Jamf Connect 測試實驗室》](/tech/zitadel-jamf-connect-validation-lab) 對照組，再逐項核對 \`issuer\`、\`grant_type\`、\`scope\` 與錯誤 log。
ogType: article
index: false
deploy: true
sitemap:
  priority: 0.4
  changefreq: monthly
  lastmod: build
---
`,Cn=e({default:()=>wn}),wn=`---
type: faq
slug: faq/license-expired-new-partner-checklist
title: |
  What should be checked before taking over expired-license equipment with no original vendor support?
description: |
  Follow [Takeover Checklist for Expired-License Network Equipment](/tech/network-license-takeover-checklist) to verify license state, admin access, config backups, and vendor transfer artifacts first.
ogType: article
index: false
deploy: true
sitemap:
  priority: 0.4
  changefreq: monthly
  lastmod: build
---
`,Tn=e({default:()=>En}),En=`---
type: faq
slug: faq/license-expired-new-partner-checklist
title: |
  授權過期又找不到原供應商時，接手前應盤點什麼？
description: |
  可參考[《授權過期設備接手檢查清單》](/tech/network-license-takeover-checklist) 先確認授權、管理帳號、設定備份與原廠轉移文件，降低接手風險。
ogType: article
index: false
deploy: true
sitemap:
  priority: 0.4
  changefreq: monthly
  lastmod: build
---
`,Dn=e({default:()=>On}),On=`---
type: faq
slug: faq/network-audit-report-fields
title: |
  What fields should a network health audit report include?
description: |
  Use [Network Health Audit Template and Analysis Workflow](/tech/network-audit-template-delivery) to include asset inventory, firmware versions, alerts, risk grading, and accountable owners.
ogType: article
index: false
deploy: true
sitemap:
  priority: 0.4
  changefreq: monthly
  lastmod: build
---
`,kn=e({default:()=>An}),An=`---
type: faq
slug: faq/network-audit-report-fields
title: |
  健檢報告應該包含哪些欄位？
description: |
  可依[《網路健檢報告模板與分析流程》](/tech/network-audit-template-delivery) 納入設備清單、韌體版本、警示事件、風險分級與改善責任人。
ogType: article
index: false
deploy: true
sitemap:
  priority: 0.4
  changefreq: monthly
  lastmod: build
---
`,jn=e({default:()=>Mn}),Mn=`---
type: faq
slug: faq/offline-gpu-passthrough-logs
title: |
  What evidence should be collected for GPU passthrough failures in offline environments?
description: |
  Follow [PVE GPU Passthrough Troubleshooting in Offline Environments](/tech/offline-pve-gpu-passthrough) and keep dmesg, vfio binding state, BIOS parameters, and rollback logs.
ogType: article
index: false
deploy: true
sitemap:
  priority: 0.4
  changefreq: monthly
  lastmod: build
---
`,Nn=e({default:()=>Pn}),Pn=`---
type: faq
slug: faq/offline-gpu-passthrough-logs
title: |
  無外網環境下的 GPU Passthrough 故障要準備什麼紀錄？
description: |
  依[《無外網環境下的 PVE GPU Passthrough 排障紀錄》](/tech/offline-pve-gpu-passthrough) 至少保留 dmesg、vfio 綁定、BIOS 參數與回復記錄。
ogType: article
index: false
deploy: true
sitemap:
  priority: 0.4
  changefreq: monthly
  lastmod: build
---
`,Fn=e({default:()=>In}),In=`---
type: faq
slug: faq/offline-troubleshooting-kits
title: |
  What troubleshooting kit should be prepared for offline on-site incidents?
description: |
  See [On-Site Troubleshooting Evidence and Handover Handbook](/tech/on-site-troubleshooting-handbook) to prepare dmesg/pcap templates, serial adapters, and standardized evidence forms.
ogType: article
index: false
deploy: true
sitemap:
  priority: 0.4
  changefreq: monthly
  lastmod: build
---
`,Ln=e({default:()=>Rn}),Rn=`---
type: faq
slug: faq/offline-troubleshooting-kits
title: |
  現場無法連網時，故障排查需要預先準備哪些紀錄工具？
description: |
  可依[《現場故障紀錄與交接手冊》](/tech/on-site-troubleshooting-handbook) 準備 dmesg/pcap 模板、序列線與標準化紀錄表，確保後續可重現。
ogType: article
index: false
deploy: true
sitemap:
  priority: 0.4
  changefreq: monthly
  lastmod: build
---
`,zn=e({default:()=>Bn}),Bn=`---
type: faq
slug: faq/oidc-integration-log-requirements
title: |
  What test logs are required when coordinating with a local OIDC provider?
description: |
  Use [OIDC Integration Log Collection and Vendor Communication Workflow](/tech/oidc-test-logs-communication) to gather Jamf Connect logs, OIDC request/response traces, error stacks, and meeting notes.
ogType: article
index: false
deploy: true
sitemap:
  priority: 0.4
  changefreq: monthly
  lastmod: build
---
`,Vn=e({default:()=>Hn}),Hn=`---
type: faq
slug: faq/oidc-integration-log-requirements
title: |
  與在地 OIDC 供應商溝通時，需要蒐集哪些測試 log？
description: |
  依[《OIDC 整合的測試 log 蒐集與溝通技巧》](/tech/oidc-test-logs-communication) 蒐集 Jamf Connect log、OIDC request/response、錯誤堆疊與會議記錄。
ogType: article
index: false
deploy: true
sitemap:
  priority: 0.4
  changefreq: monthly
  lastmod: build
---
`,Un=e({default:()=>Wn}),Wn=`---
type: faq
slug: faq/pve-io-wait-diagnostics
title: |
  Where should diagnosis start when PVE repeatedly shows high IO wait?
description: |
  Start with [PVE/VM Failure Recovery via IO Diagnostics and Hardware Tuning](/tech/pve-io-wait-diagnostics-workflow): correlate iostat and Grafana metrics with schedules, then validate storage bottlenecks.
ogType: article
index: false
deploy: true
sitemap:
  priority: 0.4
  changefreq: monthly
  lastmod: build
---
`,Gn=e({default:()=>Kn}),Kn=`---
type: faq
slug: faq/pve-io-wait-diagnostics
title: |
  PVE 反覆 IO wait 過高時，診斷應從哪裡開始？
description: |
  可依[《一次健檢挽救 PVE/VM 故障：從 IO 指標到硬體調整的完整腳本》](/tech/pve-io-wait-diagnostics-workflow) 先比對 iostat/Grafana 指標與排程，再檢查儲存層瓶頸。
ogType: article
index: false
deploy: true
sitemap:
  priority: 0.4
  changefreq: monthly
  lastmod: build
---
`,qn=e({default:()=>Jn}),Jn=`---
type: faq
slug: faq/pve-pbs-multiple-backups-impact
title: |
  Do multiple daily PVE/PBS backups impact running VMs?
description: |
  Use [Validation Framework for PVE/PBS Backup Scheduling and Quarterly Reporting](/tech/pve-pbs-backup-schedule-validation) to stagger jobs and cap concurrency, then monitor latency and success trends.
ogType: article
index: false
deploy: true
sitemap:
  priority: 0.4
  changefreq: monthly
  lastmod: build
---
`,Yn=e({default:()=>Xn}),Xn=`---
type: faq
slug: faq/pve-pbs-multiple-backups-impact
title: |
  PVE/PBS 每日多次備份會影響線上 VM 嗎？
description: |
  可依[《PVE/PBS 備份排程與季度報告的驗證機制》](/tech/pve-pbs-backup-schedule-validation) 透過錯峰與併發控制降低干擾，並持續追蹤延遲與成功率。
ogType: article
index: false
deploy: true
sitemap:
  priority: 0.4
  changefreq: monthly
  lastmod: build
---
`,Zn=e({default:()=>Qn}),Qn=`---
type: faq
slug: faq/pve-pbs-quarterly-report-metrics
title: |
  Which metrics should be included in a PVE/PBS quarterly report?
description: |
  See [PVE/PBS Quarterly Report Template and Key Metrics](/tech/pve-quarterly-report-template) for backup success rates, capacity trends, update status, and summarized anomaly handling.
ogType: article
index: false
deploy: true
sitemap:
  priority: 0.4
  changefreq: monthly
  lastmod: build
---
`,$n=e({default:()=>er}),er=`---
type: faq
slug: faq/pve-pbs-quarterly-report-metrics
title: |
  PVE/PBS 季度報告需要呈現哪些指標？
description: |
  可參考[《PVE/PBS 季度報告範本與關鍵指標》](/tech/pve-quarterly-report-template) 呈現備份成功率、容量趨勢、更新狀態與異常處理摘要。
ogType: article
index: false
deploy: true
sitemap:
  priority: 0.4
  changefreq: monthly
  lastmod: build
---
`,tr=e({default:()=>nr}),nr=`---
type: faq
slug: faq/pve-vgpu-training-plan
title: |
  How should training be structured for a PVE vGPU rollout?
description: |
  Follow [PVE vGPU Cluster Rollout and Operations Training Plan](/tech/pve-vgpu-rollout-training) with staged modules for host setup, license activation, and guest validation.
ogType: article
index: false
deploy: true
sitemap:
  priority: 0.4
  changefreq: monthly
  lastmod: build
---
`,rr=e({default:()=>ir}),ir=`---
type: faq
slug: faq/pve-vgpu-training-plan
title: |
  導入 PVE vGPU 叢集時，教育訓練如何安排？
description: |
  可依[《PVE vGPU 叢集導入與教育訓練計畫》](/tech/pve-vgpu-rollout-training) 分階段安排主機設定、授權啟用與客體驗證課程。
ogType: article
index: false
deploy: true
sitemap:
  priority: 0.4
  changefreq: monthly
  lastmod: build
---
`,ar=e({default:()=>or}),or=`---
type: faq
slug: faq/remote-ops-handover-docs
title: |
  What documents are required to hand remote operations back to an internal team?
description: |
  Use [Operations Handover and SOP Knowledge Package](/tech/operations-handover-package) to deliver topology, inventories, monitoring indicators, SOPs, and access-boundary records.
ogType: article
index: false
deploy: true
sitemap:
  priority: 0.4
  changefreq: monthly
  lastmod: build
---
`,sr=e({default:()=>cr}),cr=`---
type: faq
slug: faq/remote-ops-handover-docs
title: |
  要把遠端代管交回內部團隊，應該提供哪些交接文件？
description: |
  可依[《維運交接與操作手冊套件》](/tech/operations-handover-package) 交付拓樸、清單、監控指標、SOP 與授權邊界，讓接手方快速落地。
ogType: article
index: false
deploy: true
sitemap:
  priority: 0.4
  changefreq: monthly
  lastmod: build
---
`,lr=e({default:()=>ur}),ur=`---
type: faq
slug: faq/remote-ops-transparency-without-monitoring
title: |
  How can remote operations stay transparent when the client has no internal monitoring platform?
description: |
  Apply [Remote Inspection Reporting and Operational Transparency](/tech/remote-inspection-reporting) to publish fixed inspection fields, metrics, and follow-up status on a repeatable cadence.
ogType: article
index: false
deploy: true
sitemap:
  priority: 0.4
  changefreq: monthly
  lastmod: build
---
`,dr=e({default:()=>fr}),fr=`---
type: faq
slug: faq/remote-ops-transparency-without-monitoring
title: |
  沒有內部監控系統時，遠端代管如何讓巡檢狀態透明？
description: |
  可參考[《遠端巡檢報告與透明化流程》](/tech/remote-inspection-reporting) 固定回報項目、指標與處置進度，建立可查核的透明節奏。
ogType: article
index: false
deploy: true
sitemap:
  priority: 0.4
  changefreq: monthly
  lastmod: build
---
`,pr=e({default:()=>mr}),mr=`---
type: faq
slug: faq/remote-ops-with-shared-wifi-password
title: |
  How far can remote operations go if the environment only uses a shared Wi-Fi password?
description: |
  Combine [Firmware Validation and Scheduling for Managed Wireless Controllers](/tech/wifi-controller-firmware-schedule) with [Passive Inspection Reporting for Exception-Only Notification Models](/tech/passive-inspection-report-workflow) to keep off-peak updates and exception tracking consistent.
ogType: article
index: false
deploy: true
sitemap:
  priority: 0.4
  changefreq: monthly
  lastmod: build
---
`,hr=e({default:()=>gr}),gr=`---
type: faq
slug: faq/remote-ops-with-shared-wifi-password
title: |
  只有共用 Wi-Fi 密碼時，遠端代管可以做到什麼程度？
description: |
  可搭配[《受限無線控制器的韌體驗證與排程》](/tech/wifi-controller-firmware-schedule) 與[《被動巡檢報告設計：僅異常才通報時的資料收集》](/tech/passive-inspection-report-workflow)，維持離峰更新與例外事件追蹤。
ogType: article
index: false
deploy: true
sitemap:
  priority: 0.4
  changefreq: monthly
  lastmod: build
---
`,_r=e({default:()=>vr}),vr=`---
type: faq
slug: faq/restore-network-admin-access
title: |
  How can admin access be recovered quickly in an inherited network environment?
description: |
  Use [IT Asset Inventory and Management-Access Recovery Guide](/tech/it-inventory-recovery-manual) to inventory devices and identities first, then restore control through staged access recovery and backup extraction.
ogType: article
index: false
deploy: true
sitemap:
  priority: 0.4
  changefreq: monthly
  lastmod: build
---
`,yr=e({default:()=>br}),br=`---
type: faq
slug: faq/restore-network-admin-access
title: |
  接手他人留下的網路環境時，要如何快速找回管理權限？
description: |
  可依[《資訊設備盤點與救援指南》](/tech/it-inventory-recovery-manual) 先盤點設備與帳號，再逐步回收設定備份與管理入口。
ogType: article
index: false
deploy: true
sitemap:
  priority: 0.4
  changefreq: monthly
  lastmod: build
---
`,xr=e({default:()=>Sr}),Sr=`---
type: faq
slug: faq/restricted-vpn-camera-access
title: |
  How can surveillance or dedicated VPN access be restricted to authorized users only?
description: |
  Follow [Jamf Trust and Controlled VPN Access Governance](/tech/jamf-trust-vpn-control) to bind identity, device, and policy, then audit every connection attempt with traceable logs.
ogType: article
index: false
deploy: true
sitemap:
  priority: 0.4
  changefreq: monthly
  lastmod: build
---
`,Cr=e({default:()=>wr}),wr=`---
type: faq
slug: faq/restricted-vpn-camera-access
title: |
  監視器或專用 VPN 如何限制只有授權者能連線？
description: |
  可依[《Jamf Trust + 專用 VPN 授權控管實務》](/tech/jamf-trust-vpn-control) 將帳號、裝置與策略綁定，並用稽核日誌追蹤每次連線行為。
ogType: article
index: false
deploy: true
sitemap:
  priority: 0.4
  changefreq: monthly
  lastmod: build
---
`,Tr=e({default:()=>Er}),Er=`---
type: faq
slug: faq/shared-office-vlan-dns-isolation
title: |
  How can shared offices keep VLAN segmentation and DNS filtering isolated per tenant?
description: |
  Use [DNS/RADIUS Isolation Deployment Standards for Shared Environments](/tech/shared-dns-radius-isolation) to combine VLAN boundaries, RADIUS identity control, and AdGuard Home policy separation.
ogType: article
index: false
deploy: true
sitemap:
  priority: 0.4
  changefreq: monthly
  lastmod: build
---
`,Dr=e({default:()=>Or}),Or=`---
type: faq
slug: faq/shared-office-vlan-dns-isolation
title: |
  共享辦公室如何保持 VLAN 與 DNS 過濾相互獨立？
description: |
  可依[《共享場域 DNS / RADIUS 隔離部署守則》](/tech/shared-dns-radius-isolation) 透過 VLAN、RADIUS 與 AdGuard Home 建立租戶隔離與查詢可追溯性。
ogType: article
index: false
deploy: true
sitemap:
  priority: 0.4
  changefreq: monthly
  lastmod: build
---
`,kr=e({default:()=>Ar}),Ar=`---
type: faq
slug: faq/unifi-controller-cloud-to-onprem-move
title: |
  How should UniFi controllers be migrated between cloud and private environments?
description: |
  See [UniFi Controller Deployment, Cloud Migration, and Lightweight Managed Operations](/tech/unifi-controller-migration-light-ops) for site inventory, certificate checks, off-peak export/import, and staged validation.
ogType: article
index: false
deploy: true
sitemap:
  priority: 0.4
  changefreq: monthly
  lastmod: build
---
`,jr=e({default:()=>Mr}),Mr=`---
type: faq
slug: faq/unifi-controller-cloud-to-onprem-move
title: |
  雲端與自有環境之間遷移 UniFi 控制器應該怎麼做？
description: |
  可依[《UniFi 控制器建置、雲端遷移與輕量代管實務》](/tech/unifi-controller-migration-light-ops) 先盤點站點與憑證，再離峰匯出/匯入並逐站驗證。
ogType: article
index: false
deploy: true
sitemap:
  priority: 0.4
  changefreq: monthly
  lastmod: build
---
`,Nr=e({default:()=>Pr}),Pr=`---
type: faq
slug: faq/unifi-controller-lite-managed-support
title: |
  What support can be provided for controller hosting without a full maintenance contract?
description: |
  Based on [UniFi Controller Deployment, Cloud Migration, and Lightweight Managed Operations](/tech/unifi-controller-migration-light-ops), baseline site and certificate upkeep can continue with incident-based support for exceptions.
ogType: article
index: false
deploy: true
sitemap:
  priority: 0.4
  changefreq: monthly
  lastmod: build
---
`,Fr=e({default:()=>Ir}),Ir=`---
type: faq
slug: faq/unifi-controller-lite-managed-support
title: |
  沒有維護合約的控制器代管可以提供哪些協助？
description: |
  可依[《UniFi 控制器建置、雲端遷移與輕量代管實務》](/tech/unifi-controller-migration-light-ops) 維持站點、憑證與基本健康檢查，異常則以按次支援處理。
ogType: article
index: false
deploy: true
sitemap:
  priority: 0.4
  changefreq: monthly
  lastmod: build
---
`,Lr=e({default:()=>Rr}),Rr=`---
type: faq
slug: faq/unifi-controller-migration-without-downtime
title: |
  How can UniFi controller migration be completed with minimal service interruption?
description: |
  Use [UniFi Controller Deployment, Cloud Migration, and Lightweight Managed Operations](/tech/unifi-controller-migration-light-ops) with off-peak cutover and site-by-site verification to keep disruption minimal.
ogType: article
index: false
deploy: true
sitemap:
  priority: 0.4
  changefreq: monthly
  lastmod: build
---
`,zr=e({default:()=>Br}),Br=`---
type: faq
slug: faq/unifi-controller-migration-without-downtime
title: |
  要如何在不中斷服務的前提下完成 UniFi 控制器遷移？
description: |
  可依[《UniFi 控制器建置、雲端遷移與輕量代管實務》](/tech/unifi-controller-migration-light-ops) 先做離峰切換與逐站驗證，把影響壓在可控範圍。
ogType: article
index: false
deploy: true
sitemap:
  priority: 0.4
  changefreq: monthly
  lastmod: build
---
`,Vr=e({default:()=>Hr}),Hr=`---
type: faq
slug: faq/vpn-radius-certificate-lifecycle
title: |
  How should certificates and accounts be centrally managed across multi-site VPN/RADIUS environments?
description: |
  See [VPN/RADIUS Certificate and Identity Lifecycle Management](/tech/vpn-radius-certificate-lifecycle) to standardize issuance, rotation, revocation, audit records, and controlled distribution channels.
ogType: article
index: false
deploy: true
sitemap:
  priority: 0.4
  changefreq: monthly
  lastmod: build
---
`,Ur=e({default:()=>Wr}),Wr=`---
type: faq
slug: faq/vpn-radius-certificate-lifecycle
title: |
  多站點 VPN/RADIUS 的憑證與帳號要如何集中管理？
description: |
  可依[《VPN/RADIUS 憑證與帳號生命週期管理》](/tech/vpn-radius-certificate-lifecycle) 建立發放、輪替、停用與稽核紀錄，並以受控通道推送到節點。
ogType: article
index: false
deploy: true
sitemap:
  priority: 0.4
  changefreq: monthly
  lastmod: build
---
`,Gr=e({default:()=>Kr}),Kr=`---
type: page
slug: legal/privacy-policy
title: |
  Privacy Policy
description: |
  Privacy Policy describing how WalksCloud collects, uses, shares, and protects personal data.
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.1
  changefreq: yearly
  lastmod: build
---
\`Last updated: May 28, 2026\`

## Definitions

- **Account**: a unique account created for access to the Service.
- **Company / WalksCloud**: Walks Cloud Inc.
- **Cookies**: browser-level data used for authentication, preference, and analytics.
- **Personal Data**: information that can identify an individual directly or indirectly.
- **Service**: websites, account systems, and related online functions provided by WalksCloud.
- **You**: the individual or legal entity using the Service.

## Data We Collect

### Personal Data

Depending on use context, WalksCloud may collect:

- Name
- Email address
- Account identifiers
- Other data you provide directly through forms or account setup

### Third-Party Identity Providers

If you use third-party sign-in options, WalksCloud may receive basic account profile information based on your provider permissions and your consent.

### Usage and Device Data

WalksCloud may collect technical and usage data such as IP address, browser type, device metadata, timestamps, and interaction logs for security, reliability, and analytics.

### Cookies and Tracking Technologies

WalksCloud uses cookies and similar technologies (for example, session cookies and persistent cookies) to:

- Keep you signed in
- Protect account sessions
- Remember preferences
- Improve service quality

You can control cookies through browser settings, but some features may not function correctly if cookies are disabled.

## How We Use Data

WalksCloud may use data to:

- Provide and maintain the Service
- Manage accounts and authentication
- Respond to inquiries and support requests
- Send service-related notices and security updates
- Improve reliability, usability, and performance
- Meet legal obligations

## How We Share Data

WalksCloud may share data:

- With service providers acting on WalksCloud’s instructions
- During business transfers (for example, merger or acquisition)
- Where legally required by law, court order, or valid authority request
- With your explicit consent for specific purposes

WalksCloud does not sell personal data in this Policy unless separately disclosed and legally required.

## Data Retention

WalksCloud retains personal data only as long as necessary for the purposes in this Policy, including compliance, dispute resolution, and legal obligations.

## International Transfers

Data may be processed in locations where WalksCloud or its service providers operate. WalksCloud applies reasonable safeguards for cross-border transfer and processing.

## Your Rights

Subject to applicable law, you may request to:

- Access your personal data
- Correct inaccurate data
- Delete data where legally permissible
- Restrict or object to specific processing

To exercise rights, contact WalksCloud using the contact section below.

## Security

WalksCloud uses reasonable technical and organizational safeguards to protect personal data. No internet transmission or storage system is completely secure.

## Children’s Privacy

The Service is not directed to children under 18, and WalksCloud does not knowingly collect personal data from children under 18.

## Third-Party Links

The Service may contain links to third-party websites. WalksCloud is not responsible for third-party privacy practices.

## Policy Updates

WalksCloud may update this Privacy Policy from time to time. Updated versions are posted on this page with a revised effective date.

## Contact

For privacy questions or requests:

Please contact us via the contact form below.
`,qr=e({default:()=>Jr}),Jr=`---
type: page
slug: legal/privacy-policy
title: |
  隱私權政策
description: |
  說明 WalksCloud 如何蒐集、使用、分享與保護個人資料，以及您可行使的資料權利。
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.1
  changefreq: yearly
  lastmod: build
---
\`最後更新：2026 年 5 月 28 日\`

## 名詞定義

- **帳號（Account）**：用於存取服務部分功能的唯一身分。
- **公司／WalksCloud**：行雲資訊有限公司（Walks Cloud Inc.）。
- **Cookie**：儲存在瀏覽器端的小型資料，用於驗證、偏好設定與分析。
- **個人資料（Personal Data）**：可直接或間接識別特定自然人之資訊。
- **服務（Service）**：WalksCloud 提供的網站、帳號系統與相關線上功能。
- **您（You）**：使用本服務的個人、法人或其他組織。

## 我們可能蒐集的資料

### 您主動提供的資料

依使用情境不同，我們可能蒐集：

- 姓名
- 電子郵件地址
- 帳號識別資訊
- 您在表單或帳號設定中提供的其他資料

### 第三方身分提供者資料

若您透過第三方登入機制使用服務，WalksCloud 可能依您授權範圍取得基本帳號資訊。

### 使用與裝置資料

為維持安全與可用性，我們可能蒐集技術與使用資料，例如 IP 位址、瀏覽器類型、裝置資訊、時間戳與互動紀錄。

### Cookie 與追蹤技術

WalksCloud 使用 Cookie 與類似技術（如工作階段 Cookie、持久性 Cookie）以：

- 維持登入狀態
- 保護帳號安全
- 記住偏好設定
- 改善服務品質與穩定性

您可透過瀏覽器設定管理 Cookie，但停用後部分功能可能無法正常運作。

## 我們如何使用資料

WalksCloud 可能將資料用於：

- 提供與維運服務
- 管理帳號與驗證流程
- 回覆詢問與技術支援
- 發送服務通知與安全更新
- 改善可用性、穩定性與效能
- 履行法令義務

## 我們如何分享資料

在必要範圍內，WalksCloud 可能分享資料：

- 給受委託之服務供應商（依我們指示處理）
- 於合併、收購或資產移轉等交易中
- 依法令、法院命令或主管機關要求
- 取得您明確同意之特定情境

除非另有依法揭露，WalksCloud 不會販售您的個人資料。

## 資料保存期間

WalksCloud 僅在達成本政策目的所需期間內保存個人資料，並依據法令遵循、爭議處理與契約義務延長必要保存期間。

## 跨境處理

資料可能在 WalksCloud 或其服務供應商營運據點進行處理。對於跨境傳輸與處理，WalksCloud 會採取合理保護措施。

## 您的權利

依適用法令，您可能有權請求：

- 查詢或存取個人資料
- 更正不正確資料
- 刪除符合法令條件之資料
- 限制或反對特定處理行為

若需行使權利，請透過本文末聯絡方式與我們聯繫。

## 資訊安全

WalksCloud 採取合理的技術與管理措施保護個人資料。但任何網路傳輸與儲存技術皆無法保證百分之百安全。

## 兒童隱私

本服務不以未滿 18 歲者為主要對象，WalksCloud 亦不會故意蒐集未滿 18 歲者之個人資料。

## 第三方連結

本服務可能包含第三方網站連結。WalksCloud 不對第三方隱私實務負責。

## 政策更新

WalksCloud 可能不定期更新本隱私權政策。更新版本將公布於本頁並標示最新生效資訊。

## 聯絡方式

若您對本政策有任何問題或請求，請透過下方聯絡表單與我們聯繫。
`,Yr=e({default:()=>Xr}),Xr=`---
type: page
slug: legal/terms-of-use
title: |
  Terms of Use
description: |
  Terms governing access to and use of WalksCloud websites and related online services.
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.1
  changefreq: yearly
  lastmod: build
---
\`Last updated: May 28, 2026\`

## Scope and Acceptance

These Terms of Use apply to websites and online services operated by Walks Cloud Inc. ("WalksCloud"), including \`walks.cloud\` and service domains controlled by WalksCloud.

By accessing or using the Service, you agree to these Terms. If you do not agree, do not use the Service. WalksCloud may update these Terms from time to time. Continued use after updates means you accept the revised Terms.

## Definitions

- **Account**: a unique account created for access to parts of the Service.
- **Company / WalksCloud**: Walks Cloud Inc.
- **Service**: websites, systems, and related online functions provided by WalksCloud.
- **You**: the individual or legal entity using the Service.

## Use Permissions and Restrictions

Subject to compliance with these Terms, WalksCloud grants you a limited, non-exclusive, non-transferable, revocable right to access and use the Site.

You agree not to:

- Sell, lease, sublicense, or commercially exploit the Service without authorization.
- Reverse engineer, decompile, decrypt, or derive source code from the Service except where law permits.
- Attempt unauthorized access, interfere with service availability, or bypass security controls.
- Remove or alter copyright, trademark, or other proprietary notices.

## Intellectual Property

All content, software, marks, and materials on the Service are owned by WalksCloud or its licensors. Except for rights expressly granted in these Terms, no license or ownership is transferred to you.

## Third-Party Links and Services

The Service may include links to third-party websites or services. WalksCloud does not control and is not responsible for third-party content, security, terms, or privacy practices.

## Account and Security

If parts of the Service require an Account, you are responsible for account credentials and activities under your account. You must promptly notify WalksCloud of unauthorized account use or security incidents.

## Service Changes, Suspension, and Termination

WalksCloud may modify, suspend, or discontinue all or part of the Service at any time for operational, legal, or security reasons. WalksCloud may also suspend or terminate access if you violate these Terms.

## Disclaimer of Warranties

The Service is provided on an "AS IS" and "AS AVAILABLE" basis. To the maximum extent permitted by law, WalksCloud disclaims all warranties, express or implied, including merchantability, fitness for a particular purpose, and non-infringement.

## Limitation of Liability

To the maximum extent permitted by law, WalksCloud is not liable for indirect, incidental, consequential, special, or punitive damages, or any loss of profits, data, or business interruption arising from use of the Service.

## Indemnification

You agree to indemnify and hold harmless WalksCloud and its affiliates from claims, liabilities, damages, and expenses arising from your use of the Service or breach of these Terms.

## Governing Law and Dispute Handling

These Terms are governed by applicable laws of the jurisdiction where WalksCloud provides the Service. Before formal legal action, both parties should attempt good-faith resolution through direct communication.

## Severability and Waiver

If any provision is unenforceable, the remaining provisions remain effective. Failure to enforce a provision is not a waiver of future enforcement.

## Contact

For questions about these Terms:

Please contact us via the contact form below.
`,Zr=e({default:()=>Qr}),Qr=`---
type: page
slug: legal/terms-of-use
title: |
  服務條款
description: |
  說明使用 WalksCloud 網站與相關線上服務時，雙方權利義務與限制條件。
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.1
  changefreq: yearly
  lastmod: build
---
\`最後更新：2026 年 5 月 28 日\`

## 適用範圍與同意條款

本服務條款適用於行雲資訊有限公司（Walks Cloud Inc.，下稱「WalksCloud」）所營運的網站與線上服務，包含 \`walks.cloud\` 與 WalksCloud 管理之服務網域。

當您存取或使用本服務，即表示您已閱讀、理解並同意本條款。若您不同意，請停止使用本服務。WalksCloud 得依實務需求調整本條款，更新後持續使用即視為接受修訂內容。

## 名詞定義

- **帳號（Account）**：用於存取服務部分功能的唯一身分。
- **公司／WalksCloud**：行雲資訊有限公司（Walks Cloud Inc.）。
- **服務（Service）**：WalksCloud 提供的網站、系統與相關線上功能。
- **您（You）**：使用本服務的個人、法人或其他組織。

## 使用授權與限制

在您遵守本條款之前提下，WalksCloud 授予您有限、非專屬、不可轉讓、可撤銷的使用權限。

您不得從事以下行為：

- 未經授權轉售、出租、再授權或商業化利用本服務。
- 除法律明文允許外，對本服務進行反向工程、反編譯或嘗試還原原始碼。
- 未經授權存取、干擾服務可用性、繞過安全機制。
- 移除或遮蔽著作權、商標或其他權利聲明。

## 智慧財產權

本服務中的內容、軟體、標識與相關資料，均屬 WalksCloud 或其授權人所有。除本條款明確授權外，不因使用行為而移轉任何權利。

## 第三方連結與服務

本服務可能包含第三方網站或服務連結。WalksCloud 不控制亦不承擔第三方內容、安全性、條款或隱私實務責任。

## 帳號與安全

若您使用需登入之功能，您應妥善保管帳號憑證，並對帳號下之操作負責。若有未授權使用或疑似安全事件，應即時通知 WalksCloud。

## 服務異動、暫停與終止

WalksCloud 得基於營運、法遵或安全理由，隨時調整、暫停或終止全部或部分服務。若您違反本條款，WalksCloud 得限制或終止您的使用權限。

## 免責聲明

本服務以「現況」與「可用」基礎提供。在法律允許範圍內，WalksCloud 不提供任何明示或默示擔保，包含但不限於適售性、特定用途適用性與不侵權擔保。

## 責任限制

在法律允許最大範圍內，WalksCloud 不對任何間接、附隨、衍生、特別或懲罰性損害負責，亦不對利潤、資料或營運中斷損失負責。

## 補償責任

若因您使用本服務或違反本條款致生第三方主張、損害或費用，您同意於法律允許範圍內補償並使 WalksCloud 及其關係企業免受損害。

## 準據法與爭議處理

本條款依 WalksCloud 提供服務所在地之適用法律解釋。發生爭議時，雙方應先以善意協商方式處理，再依適用法規進行後續程序。

## 可分割性與權利保留

若本條款任一部分經認定無效或不可執行，其餘條款仍維持完整效力。WalksCloud 未即時行使權利，不構成對任何權利之放棄。

## 聯絡方式

若您對本條款有任何問題，請透過下方聯絡表單與我們聯繫。
`,$r=e({default:()=>ei}),ei=`---
type: service
slug: services/8021x
title: |
  802.1X Authentication Deployment and Maintenance
description: |
  WalksCloud combines RADIUS, certificate management, and network policy design to turn 802.1X into a reliable network gatekeeper, ensuring every wired or wireless session is verified, logged, and aligned with zero trust requirements.
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.9
  changefreq: weekly
  lastmod: build
jsonld:
  kind: Service
  serviceType: Network Access Control
---
## Case Insight: Temporary Devices Flood the Network

A project team needed to onboard temporary testers and devices during a product qualification cycle. Although the switches supported 802.1X, the lack of centralized identity and certificate workflows forced the team to fall back to shared passwords, which led to:

- Accounts for temporary members lingering long after they left, leaving the network perimeter porous.
- Fragmented certificate and VLAN settings that made it impossible to trace device ownership.
- Compliance reviews that stalled because connection logs were scattered across devices.

## Limitations of DIY Experiments

- **Heavy labor drain**: Internal IT spent weeks tweaking FreeRADIUS, OpenLDAP, and PKI yet still lacked a stable enrollment and certificate issuance flow, delaying the entire project schedule.
- **Audit standstill**: Without a full connection history, responding to customer security questionnaires became impossible and major deals were put on hold.
- **Avoidable outages**: Emergency VLAN changes without a staging environment caused building-wide network outages, disrupting R&D work.

## How WalksCloud Solves It

1. **Rapid discovery and tabletop testing**: Workshops map user personas, VLAN segmentation, and failure scenarios, then simulate attacks to confirm current blind spots.
2. **Standardized building blocks**: We deploy FreeRADIUS or Cisco ISE tied to AD/IdP sources, layer in PKI, and establish enrollment plus device profiling workflows.
3. **Policy and audit operations**: Role-based policies, log retention, and report templates are codified, and we transfer operations guides, training, and maintenance agreements so certificate renewals and policy tuning never stall again.

With this approach, organizations retain existing network investments while gaining an expandable 802.1X perimeter. Partnering with WalksCloud ensures the first meter of your zero trust journey is dependable rather than a one-off project.
`,ti=e({default:()=>ni}),ni=`---
type: service
slug: services/8021x
title: |
  802.1X 驗證系統建置維護
description: |
  行雲資訊透過 RADIUS、憑證管理與網路策略設計打造 802.1X 網路門禁，確保有線與無線連線皆經驗證、記錄並符合零信任政策。
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.9
  changefreq: weekly
  lastmod: build
jsonld:
  kind: Service
  serviceType: Network Access Control
---
## 案例洞察：臨時裝置大量接入的團隊協作

某專案團隊在產品測試期間需要臨時成員與各種測試設備接入網路，雖然設備支援 802.1X，卻因缺少統一管理而被迫改用共用密碼，結果導致以下狀況：

- 臨時成員離場後帳號仍存在，網路邊界形同虛設。
- 憑證與 VLAN 設定分散，IT 團隊無法追蹤裝置屬主。
- 稽核要求登入紀錄時，只能提供零散日誌，無法證明誰連上哪條網路。

## 內部摸索所付出的成本

- **大量人力耗損**：IT 花了好幾週摸索 FreeRADIUS / OpenLDAP 與 PKI，仍無法建立穩定的申請與簽發流程，專案時程被迫延後。
- **稽核停擺**：沒有完整的連線記錄，難以回應客戶的安全審查，合作案被迫暫停。
- **意外停機**：臨時調整 VLAN 時因缺乏測試環境造成整棟辦公室斷網，研發節奏被打亂。

## 行雲資訊如何拆解問題

我們的目標是打造「身分即邊界」的網路體驗，具體步驟如下：

1. **快速盤點與演練**：以工作坊釐清使用者類型、VLAN 分流與異常情境，並製作模擬攻擊腳本驗證現況缺口。
2. **導入標準化元件**：部署 FreeRADIUS / OpenLDAP 或 Cisco ISE，結合 AD/IdP 與 PKI，建立註冊與裝置識別流程。
3. **政策與稽核落地**：制定角色對應的網路策略、日誌保留、報表範本，並交付維運手冊、教育訓練與維護合約，確保憑證更新與策略調整不會再次成為瓶頸。

透過這套方法，企業能同時保有既有網路投資與治理能力，將 802.1X 轉化為可擴充的防線，而非單次專案。欠缺這一層門禁的風險巨大，因此選擇行雲資訊協作是維持營運安全的必要投資。
`,ri=e({default:()=>ii}),ii=`---
type: service
slug: services/backup-security
title: |
  Enterprise Backup and Security Solutions
description: |
  WalksCloud combines Proxmox Backup Server, immutable storage, and layered security controls to create verifiable data resilience that keeps ransomware and user mistakes from derailing the business.
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.9
  changefreq: weekly
  lastmod: build
jsonld:
  kind: Service
  serviceType: Backup & Security
---
## Case Insight: Resilience Gap Before Peak Season

One organization gearing up for a major campaign relied on a single NAS backup setup. A ransomware incident right before launch revealed that:

- Backups lived on the same network segment and were encrypted along with production hosts.
- No immutable copies or recovery drills existed, so the integrity of data could not be proven.
- There was no offline or secondary backup location, so restoration could only roll back to stale copies.

## Hidden Costs of DIY Approaches

- **Lost time and revenue**: IT spent days trying to restore data and the entire seasonal campaign was cancelled, wasting months of preparation.
- **Burned-out staff**: The team had to contain ransomware, validate backups, and prepare audit reports simultaneously, leading to marathon incident shifts.
- **Compliance jeopardy**: When customers requested proof of failover readiness, the company lacked recovery records and nearly triggered contract termination.

## How WalksCloud Closes the Gaps

1. **Layered backup strategy**: We classify workloads, deploy Proxmox Backup Server with immutable storage and offline copies, and define RPO/RTO targets.
2. **Exercises and evidence**: Restoration guides, monitoring dashboards, and evidence collection workflows support recurring reports for audits.

By sharing resilience KPIs—recoverable backups, verifiable data integrity, and defensible incident reports—WalksCloud lets organizations focus on revenue while we guarantee the backup and security stack delivers when it matters.
`,ai=e({default:()=>oi}),oi=`---
type: service
slug: services/backup-security
title: |
  企業備份與安全方案
description: |
  行雲資訊以 Proxmox Backup Server、不可變儲存與多層資安控管，打造可驗證的資料韌性，避免勒索與人為操作造成停擺。
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.9
  changefreq: weekly
  lastmod: build
jsonld:
  kind: Service
  serviceType: Backup & Security
---
## 案例洞察：旺季前夕的備援缺口

一間正準備重大行銷檔期的企業使用單一 NAS 備份。在活動前夕遭勒索軟體入侵導致主機加密，才發現：

- 備份資料與主機同網段，被同步加密。
- 沒有不可變儲存與還原演練，無從驗證資料完整性。
- 沒有跨站或離線備份點，災後只能以過舊版本回復，無法滿足業務時效。

## 內部摸索的隱憂

- **時間與營收流失**：IT 花了好幾天還原資料仍失敗，整個旺季活動被迫取消，所有準備投入付諸流水。
- **人力疲乏**：團隊需要同時處理勒索、備份驗證與稽核報告，造成長時間加班。
- **合規風險**：客戶投訴後要求提出備援佐證，卻拿不出還原紀錄，差點面臨合約終止。

## 行雲資訊如何逐點解決

1. **層級化備份策略**：盤點系統優先級，規劃 Proxmox Backup Server + 不可變儲存 + 離線複本，並制定 RPO/RTO（Recovery Point/Time Objective，資料可接受的恢復點與恢復時間目標）。
2. **演練與可視化**：建立還原演練手冊、監控儀表板與證據蒐集流程，定期輸出報告讓稽核可驗證。

行雲資訊與企業共享同一組韌性指標：備份可還原、資料可驗證、事件可回報。交由我們維護這套架構，能避免重複投入硬體卻得不到結果，也凸顯備份/資安是不可缺少的底線。
`,si=e({default:()=>ci}),ci=`---
type: service
slug: services/container-devops
title: |
  Containerization and DevOps
description: |
  WalksCloud helps enterprises evolve delivery from Kubernetes foundations through CI/CD, GitOps, observability, and security so developers and IT speak the same operational language.
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.9
  changefreq: weekly
  lastmod: build
jsonld:
  kind: Service
  serviceType: Container & DevOps
---
## Case Insight: Multi-version Releases Without Guardrails

A fast-scaling engineering group rushed to launch multiple regional versions and hastily stood up Kubernetes plus GitLab CI. Without governance they hit:

- Divergent YAML across dev/test/prod, forcing manual rollback steps.
- No image scanning or secret management, so security reviews stalled.
- Prometheus, Grafana, and logging stacks operating in silos, hiding root causes.

## Internal Assembly-Line Costs

- **Delayed launches**: Core engineers lost weeks babysitting clusters, pushing product timelines back by multiple quarters.
- **Operational fragility**: No IaC and sparse documentation meant any departure left the platform unowned, and a single upgrade took the stack offline for hours.
- **Security blockers**: Customers demanded supply-chain scans and key management; the team scrambled to bolt on tools and burned budget.

## How WalksCloud Lands It

1. **Architecture reset with IaC**: Using Terraform, we inventory and organize resources, then rebuild clusters, networks, storage, and quotas into more consistent environment templates.
2. **CI/CD plus GitOps**: We design GitHub Actions, GitLab CI, or other pipelines with container scanning and dynamic tests, then enforce deployment consistency through Argo CD or Flux.
3. **Observability and governance**: Prometheus, Grafana, Loki, and Wazuh are unified with SLO/SLA definitions, alert flows, RBAC, secret management, and audit reporting tied to zero-trust expectations.

WalksCloud co-defines delivery KPIs with clients: we own the platform and guardrails while product teams focus on features. The result is dependable velocity and compliance-ready automation instead of ad-hoc scripts.
`,li=e({default:()=>ui}),ui=`---
type: service
slug: services/container-devops
title: |
  容器化技術與 DevOps
description: |
  行雲資訊協助企業從 Kubernetes、CI/CD、GitOps 到觀測與安全建立可複製且可稽核的交付鏈，讓研發與 IT 有共同語言。
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.9
  changefreq: weekly
  lastmod: build
jsonld:
  kind: Service
  serviceType: Container & DevOps
---
## 案例洞察：多版本同步上線的部署瓶頸

一個成長快速的研發團隊在短時間內要上線多個版本，於是匆促導入 Kubernetes 與 GitLab CI，但因缺乏治理而出現：

- 開發、測試、正式環境 YAML 不一致，回滾流程只能靠人工。
- 沒有 Image 掃描與密鑰管理，資安審查過不了。
- Prometheus、Grafana、Logging 各自為政，事件無法快速定位。

## 內部拼裝的隱藏成本

- **交付延宕**：為了處理叢集問題，核心團隊大量時間被拉走，產品功能延遲多個季度。
- **營運風險**：沒有 IaC（Infrastructure as Code，基礎設施程式化）與文件，工程師離職後沒有人了解叢集脈絡，導致一次升級就讓服務停擺數小時。
- **資安阻塞**：客戶要求補齊供應鏈掃描與密鑰管理，團隊只能臨時補洞，花費更多成本。

## 行雲資訊如何逐點落地

1. **架構重整與 IaC（Infrastructure as Code，基礎設施程式化）**：以 Terraform 盤點與整理資源，重建叢集、網路、儲存與配額，建立較一致的環境模板。
2. **CI/CD + GitOps**：針對 GitHub Actions、GitLab CI 等工具設計多階段管線，導入容器掃描、動態測試，再以 Argo CD/Flux 強化部署一致性。
3. **觀測與安全治理**：整合 Prometheus、Grafana、Loki、Wazuh，定義 SLO/SLA（Service Level Objective/Agreement，服務層級目標與協議）與告警流程，搭配 RBAC、密鑰管理、審核報告，確保符合客戶與內控需求。

我們與客戶共同設定交付指標，行雲資訊負責平台與治理，團隊專注在產品，形成速度與可靠度兼具的雙贏局面，也證明容器與 DevOps 必須一次整套設計，才能真正解決問題。
`,di=e({default:()=>fi}),fi=`---
type: service
slug: services/custom-dev
title: |
  Custom System Development
description: |
  WalksCloud brings a product mindset to bespoke system work, owning discovery through operations so the platform truly reflects how your teams get things done.
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.9
  changefreq: weekly
  lastmod: build
jsonld:
  kind: Service
  serviceType: Custom Development
---
## Case Insight: Synchronizing Multiple Internal Systems

One cross-functional organization needed to unite operations, storage, and customer service, but commercial SaaS could not satisfy local compliance and reporting. The fallout:

- Staff duplicated data across multiple apps with frequent mistakes.
- KPIs arrived days late because every department relied on separate spreadsheets.
- Customers lost confidence when real-time tracking was unavailable.

## Internal Build Constraints

- **Talent and time**: Recruiting and onboarding an internal dev team would take half a year, freezing the initiative and inflating opportunity costs.
- **Operational overload**: Without CI/CD or documentation, internal tools quickly became tech debt, pulling IT away from strategic work.
- **Data inconsistency**: No unified model meant analytics stayed unreliable and decisions lagged.

## WalksCloud’s Delivery Tracks

1. **Co-create requirements**: Workshops with stakeholders map end-to-end flows, key metrics, and risk controls.
2. **Design and development**: Using modern stacks (Vue, Go, Rust, etc.) we build APIs, workflow engines, and interfaces for web, mobile, or internal use cases.
3. **Operate and educate**: CI/CD, observability, security checks, documentation, and training enable co-managed or fully managed operations.

Clients focus on business know-how while WalksCloud handles engineering and governance, ensuring every investment closes a real process gap.
`,pi=e({default:()=>mi}),mi=`---
type: service
slug: services/custom-dev
title: |
  客製化系統開發
description: |
  行雲資訊以產品思維協助企業打造貼合流程的系統，從需求訪談、設計、開發到維運皆由專業團隊承接，確保系統能隨業務成長。
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.9
  changefreq: weekly
  lastmod: build
jsonld:
  kind: Service
  serviceType: Custom Development
---
## 案例洞察：多系統協作的瓶頸

某跨部門組織需要同時整合營運、倉儲與客服系統，市面解決方案無法符合在地稽核與報表要求，造成：

- 員工在三套系統重複輸入貨物資料，錯誤率高。
- 各部門 Excel 版本不一，營運指標延遲三天才彙整。
- 客戶要求的即時追蹤無法提供，續約率下滑。

## 內部開發的隱性成本

- **人才與時間**：自行招募開發團隊需要耗費大半年的準備期，期間專案停滯，機會成本難以估算。
- **維運負擔**：缺乏 CI/CD 與文件，系統一旦上線就被需求淹沒，IT 無暇處理核心專案。
- **數據品質**：沒有統一資料模型，導致報表數據不一致，決策延遲。

## 行雲資訊的交付方式

1. **需求與流程共創**：與利害關係人進行工作坊，繪製端到端流程、定義關鍵指標與風險。
2. **系統設計與開發**：採用現代化框架（例如 Vue、Rust、Go 等），結合 API、流程引擎與資料整合，開發支援 web/mobile/內部作業的模組。
3. **營運與教育**：導入 CI/CD、觀測、資安檢查與文件，並提供使用訓練與共維模式，讓內部團隊可以持續迭代。

我們讓企業專注在流程 know-how，行雲資訊負責技術實作與治理，確保每一筆投資都回到解決真實需求，凸顯客製化系統的必要性。
`,hi=e({default:()=>gi}),gi=`---
type: service
slug: services/hosting-operations
title: |
  Website and Server Hosting Operations
description: |
  WalksCloud operates application stacks end-to-end, combining infrastructure hardening, automation, observability, and incident response so cloud, colocation, or on-prem workloads stay resilient.
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.9
  changefreq: weekly
  lastmod: build
jsonld:
  kind: Service
  serviceType: Hosting Operations
---
## Case Insight: Cross-cloud Operations Without Guardrails

A company managing multiple brands split workloads between cloud and colocation with no unified operating documentation. Within six months they experienced:

- Certificates expiring and breaking payment flows for extended windows.
- Discovering too late that databases lacked failover, so emergency scaling created even more latency.
- Security audits failing because change and incident records were incomplete.

## Hidden Costs of Internal Ops

- **Pager fatigue**: Developers cycled through on-call rotations, slowing product delivery.
- **Runaway spend**: Without capacity planning, cloud bills climbed while performance flatlined.
- **Audit setbacks**: Missing operations documentation and reports caused customer security reviews to be rejected, delaying revenue.

## WalksCloud’s Managed Approach

1. **Health assessment**: Review architecture, capacity, deployment pipelines, and security posture to prioritize fixes.
2. **Operational rigor**: Implement monitoring, alerting, patching, backups, and rehearsed incident workflows with documented change control.
3. **Continuous improvement**: Monthly SLA reports tie performance, cost, and roadmap insights to recommendations spanning cloud governance, CDN, or security enhancements.

WalksCloud shares dashboards and incident workflows so clients retain strategic control while we handle execution, keeping digital services aligned with business goals without burning out internal teams.
`,_i=e({default:()=>vi}),vi=`---
type: service
slug: services/hosting-operations
title: |
  網站與伺服器代管營運
description: |
  行雲資訊負責網站、API、ERP 與客製應用的營運，整合架構調校、資安補強、監控告警與 24/7 值班，確保系統穩定與透明。
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.9
  changefreq: weekly
  lastmod: build
jsonld:
  kind: Service
  serviceType: Hosting Operations
---
## 案例洞察：多品牌服務的跨雲環境

某企業同時營運多個品牌，網站部署在雲端與機房混合架構，後端系統則在公司機房。由於缺乏統一維運流程，半年內發生：

- 憑證過期導致交易流程長時間不可用。
- 高峰前才發現資料庫無備援，緊急擴容結果反而造成延遲。
- 資安稽核時拿不出變更紀錄與事件處理證據。

## 內部代管的隱形成本

- **值班壓力**：研發人員輪流待命，導致專案進度延宕，產品推進速度慢。
- **資源浪費**：因缺乏容量規畫，雲端支出月月增加卻未真正提升效能。
- **無法通過稽核**：缺乏報告與維運文件，客戶安全審查被退件，商機延後。

## 行雲資訊的代管方法

1. **現況健檢**：檢視架構、容量、程式部署與資安設定，列出風險與優先順序。
2. **營運制度化**：導入監控、告警、Patch Management、備份與演練，建立變更管理、值班流程與報告模板。
3. **持續優化**：定期回顧效能、成本與需求，提出調校、雲端治理或 CDN/安全加值方案，並提供透明 SLA（Service Level Agreement，服務水準協議）與月報。

我們與客戶共享儀表板與事件流程，企業掌握策略，行雲資訊負責執行。這種分工讓團隊能專注在商業計畫，同時確保網站與伺服器營運這項必要任務不會中斷。
`,yi=e({default:()=>bi}),bi=`---
type: service
slug: services/iam-zitadel
title: |
  Identity and Access Management with ZITADEL
description: |
  WalksCloud uses ZITADEL to build centralized IAM so multi-tenant services and third-party teams share a single SSO/MFA, authorization, and audit process without the burden of maintaining a bespoke platform.
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.9
  changefreq: weekly
  lastmod: build
jsonld:
  kind: Service
  serviceType: Identity & Access Management
---
## Case Insight: Multi-tenant Service, Fragmented Accounts

An organization serving multiple customer tenants had to manage service staff, partners, and third-party access in parallel. Manual AD accounts caused:

- Suppliers keeping access long after their contracts ended, with no clear audit trail.
- Developers reinventing OAuth/MFA inside each product, creating security debt.
- Login events fragmented across systems, turning investigations into multi-day efforts.

## Limits of Internal IAM Builds

- **Engineering drain**: Senior developers spent large portions of each month patching homegrown IAM components.
- **Risk exposure**: Lacking MFA and conditional access raised customer concerns and blocked deals.
- **Audit stress**: Every review required manually compiling reports, forcing legal and IT to work overnight.

## WalksCloud’s ZITADEL Delivery Approach

1. **Identity strategy design**: Workshops define tenant layers, roles, delegation, and approval flows.
2. **Deployment and integration**: We implement ZITADEL in your preferred environment, federate with AD/LDAP, SAML, or SCIM sources, and wire SSO/MFA into apps and APIs.
3. **Operations and governance**: Account activation/deactivation flows, approval workflows, reporting templates, operations guides, and training keep IAM growing with the business.

With WalksCloud managing the platform, clients focus on business logic while we guarantee consistent identity, access, and compliance outcomes—without the hidden cost of rolling their own IAM.
`,xi=e({default:()=>Si}),Si=`---
type: service
slug: services/iam-zitadel
title: |
  ZITADEL 身分與存取管理服務
description: |
  行雲資訊以 ZITADEL 建立集中式身分平台，將多租戶與第三方帳號納入同一套 SSO/MFA、權限與稽核流程，減輕自建 IAM 維護與合規壓力。
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.9
  changefreq: weekly
  lastmod: build
jsonld:
  kind: Service
  serviceType: Identity & Access Management
---
## 案例洞察：多租戶服務的合規挑戰

某提供多租戶平台的企業需要同時管控客服、合作夥伴與第三方系統。過去依賴 AD 與手動帳號管理，產生：

- 供應商離場後帳號未停用，客戶審查發現存取紀錄無法追蹤。
- 開發團隊需自行實作 OAuth/MFA，造成大量技術債。
- 登入事件散落在多個系統，調查需花數天。

## 內部開發的限制

- **人日耗損**：多位資深工程師得長期維護自研 IAM，每個月都有大量時間被修補工作消耗。
- **風險提升**：MFA 與條件式存取支援不足，被客戶質疑安全性，影響合作案。
- **稽核壓力**：每次審查都要匯整多份報表，法務與 MIS 需通宵趕件。

## 行雲資訊導入流程

1. **身分策略設計**：以工作坊定義租戶層級、角色、授權矩陣與委派流程，建立「誰能看什麼」的底稿。
2. **ZITADEL 部署整合**：依需求選擇雲端或自建節點，與 AD/LDAP、SAML、SCIM、API Gateway 串接，導入 SSO 與 MFA 體驗。
3. **治理與營運**：建立帳號開通/停用流程、審批流程與稽核報告模板，並提供操作手冊、訓練與代管選項，確保平台隨需求成長。

透過行雲資訊，企業可專注在業務應用，IAM 由我們維護，雙方共同達成「身份一致、稽核合規」的必要目標，避免自建的高昂成本與風險。
`,Ci=e({default:()=>wi}),wi=`---
type: service
slug: services/idc-deployment
title: |
  IDC Data Center Deployment and Maintenance
description: |
  WalksCloud guides enterprises through every step of an IDC rollout—from design and cabling to vendor coordination and remote operations—so power, cooling, networking, security, and compliance are all on track.
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.9
  changefreq: weekly
  lastmod: build
jsonld:
  kind: Service
  serviceType: Data Center Networking
---
## Case Insight: Building a DR Site Without Experience

An organization needed a colo-based DR environment but lacked data center expertise. They ran into:

- Rack power oversubscription that forced expensive rework before handoff.
- Vendor coordination delays with carriers and low-voltage teams, pushing timelines back by months.
- No remote-hands process or documentation, so engineers had to travel onsite for any change.

## Risks of Handling It Alone

- **Rework expenses**: Failure to meet cabling or power standards led to repeated installs and out-of-band testing.
- **Operational fragility**: Missing firewall redundancy or BGP design made regulatory DR drills impossible.
- **Staff drain**: Internal IT spent excessive time on logistics, asset tracking, and paperwork instead of product work.

## WalksCloud’s End-to-end Delivery

1. **Planning and coordination**: Assess capacity, redundancy, circuit needs, and compliance, then produce power/cooling/cabling plans while aligning carriers, integrators, and low-voltage vendors.
2. **Build and acceptance**: Deploy core/aggregation switches, firewalls, load balancers, and out-of-band consoles with standardized labeling and asset tracking, and support acceptance tests.
3. **Remote operations**: Provide remote-hands support, change records, documentation updates, and routine inspections to keep SLA and audit requirements satisfied.

IDC footprints exist to guarantee continuity. Partnering with WalksCloud transfers the build and run risk to an experienced team so your colocation environment delivers the resilience it was meant to provide.
`,Ti=e({default:()=>Ei}),Ei=`---
type: service
slug: services/idc-deployment
title: |
  IDC 機房建置與維運
description: |
  行雲資訊協助企業完成機房進駐、設備布署與遠端代維，確保電力、冷卻、網路、資安與合規一次到位。
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.9
  changefreq: weekly
  lastmod: build
jsonld:
  kind: Service
  serviceType: Data Center Networking
---
## 案例洞察：擴建備援環境的挑戰

某企業需要在電信機房部署備援環境，但缺乏經驗，結果形成：

- 機櫃電力超載，需重新佈線才能驗收。
- 與機房、弱電廠商溝通耗時，時程延遲數個月。
- 沒有遠端協助與文件，工程師每次變更都得親自跑機房。

## 內部協調的風險

- **工程重工**：因未能一次符合線路/電力規範，被迫追加施工與停電測試，成本暴增。
- **營運風險**：缺少防火牆與 BGP 設定冗餘，法定演練無法完成，導致 DR 計畫失去意義。
- **人力負擔**：IT 團隊需花大量時間在行政協調與盤點，無法專注產品。

## 行雲資訊的整體交付

1. **規劃與協調**：評估容量、備援、線路、合規要求，製作用電/散熱/佈線計畫並協調營運商、系統整合商與弱電單位。
2. **建置與驗收**：設計核心/匯聚交換器、防火牆、負載平衡與 KVM/Console，建立標準化配線標籤與資產盤點，並陪同驗收與測試。
3. **遠端代維**：提供 Remote Hands、變更記錄、文件更新與例行巡檢，確保 SLA（Service Level Agreement，服務水準協議）與稽核需求可被滿足。

IDC 投資目的在於確保營運不中斷。與行雲資訊合作可將風險交由具經驗的團隊管理，減少試錯，並保證建置成果能長期維持，這是企業不得不完成的必要工程。
`,Di=e({default:()=>Oi}),Oi=`---
type: service
slug: services
title: |
  Services
description: |
  WalksCloud guides organizations through the PACE method—Plan, Assemble, Control, Enhance—to tackle IT and security work: by clarifying strategy, assembling the right technologies, running day-to-day control loops, and continuously enhancing the stack so infrastructure, workplace networks, security governance, asset management, and custom apps progress alongside the business.
ogType: website
index: true
deploy: true
sitemap:
  priority: 0.9
  changefreq: weekly
  lastmod: build
jsonld:
  kind: WebPage
---
## Common Scenarios

- A business is growing quickly, but the IT/MIS team is too lean to cover networking, monitoring, and security at the same time.
- A traditional industry team is moving through digital transformation, yet legacy systems cannot be integrated cleanly and audit requirements block progress.
- Overseas customers or enterprise reviews require stronger backup, identity management, and zero trust controls.

## Hidden Costs of DIY

- **Tools without integration**: Different departments buy separate products, leaving IT to spend excessive time coordinating and stitching them together.
- **No one maintains the stack**: After delivery, updates, patches, and documentation are neglected until the project is abandoned.
- **Compliance becomes a bottleneck**: Outages or data exposure erode customer trust when teams cannot meet audit expectations.

## WalksCloud Service Scope and Solution Areas

1. **Operational resilience**: Backup security, IDC deployment, virtualization, and hosting operations help organizations build verifiable resilience, recovery readiness, and service continuity.
2. **Delivery efficiency**: Container DevOps, custom development, and IT monitoring give engineering, IT, and operations teams a more consistent delivery model and stronger observability.
3. **Security governance**: 802.1X, VPN, zero trust, Wazuh SIEM, and IAM with ZITADEL reduce risk across network access, identity governance, and security visibility.
4. **Assets and networks**: Office networking, MDM, and IT outsourcing keep endpoints, accounts, and workplace environments healthy on a daily basis.

We define success metrics together with clients, then match a single service or a broader solution set to the actual need. Documentation, training, and reporting make sure each investment solves a real operational problem. If you already know which category is causing the most friction, start with the related service page below to find the most relevant direction faster.

---

<ServicesGrid />
`,ki=e({default:()=>Ai}),Ai=`---
type: service
slug: services
title: |
  服務項目
description: |
  行雲資訊以 PACE（Plan、Assemble、Control、Enhance）方法協助企業處理 IT 與資安課題：從 Plan 明確策略起步，接著 Assemble 組合與建置所需技術，進入 Control 持續監控與治理，最後以 Enhance 精進優化，帶領基礎架構、辦公網路、資安治理、資產管理與客製開發穩步向前、緊貼營運節奏。
ogType: website
index: true
deploy: true
sitemap:
  priority: 0.9
  changefreq: weekly
  lastmod: build
jsonld:
  kind: WebPage
---
## 常見情境

- 企業快速成長，IT/MIS 人力不足，需要同時完成網路、監控與資安。
- 傳統產業進行數位轉型，但既有系統無法整合，流程與稽核卡關。
- 海外或客戶審查要求補齊備援、身份管理、零信任策略。

## DIY 的隱藏成本

- **工具堆疊卻無整合**，每個部門買不同方案，IT 需花大量時間協調。
- **沒有人維運**，導致專案交付後缺乏更新、補丁與文件，最後被棄用。
- **合規與稽核難以通過**，停機或資訊外洩造成客戶信任下滑。

## 行雲資訊的服務範圍與對應方案

1. **營運韌性**：備份安全、IDC 機房建置、虛擬化與網站代管，協助企業建立可驗證的備援、託管與持續營運能力。
2. **交付效率**：容器 DevOps、客製開發、IT 監控，讓研發、IT 與營運團隊有更一致的交付流程與可觀測性。
3. **資安治理**：802.1X、VPN、零信任、Wazuh SIEM、ZITADEL IAM，從網路存取、身份治理到日誌分析逐步降低風險。
4. **資產與網路**：辦公室網路、MDM、IT 外包與技術支援，維持端點、帳號與辦公環境的日常健康。

我們與客戶共同定義成功指標，依需求選擇單一服務或整體方案，並提供文件、教育與報告，確保每一項投資都能解決實際問題。若你已經知道目前卡在哪一類問題，也可以直接從下方對應服務頁開始閱讀，快速找到較接近現況的方案方向。

---

<ServicesGrid />
`,ji=e({default:()=>Mi}),Mi=`---
type: service
slug: services/it-monitoring
title: |
  IT Monitoring and Management Systems
description: |
  WalksCloud architects monitoring platforms that merge metrics, logs, alerts, and operational process documentation across servers, networks, and applications so teams gain actionable insight.
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.9
  changefreq: weekly
  lastmod: build
jsonld:
  kind: Service
  serviceType: IT Monitoring
---
## Case Insight: Distributed Ops with Fragmented Visibility

A multi-site organization staffed by a lean IT crew mixed and matched monitoring tools, leading to:

- Devices tracked only via SNMP while others emitted raw syslog, creating blind spots.
- Alerts scattered across email and chat threads, leaving on-call staff without context.
- Missing capacity trends, so peak-season campaigns repeatedly hit resource ceilings.

## Internal Build Challenges

- **Platform debt**: Maintaining a patchwork of tools felt like running a separate mission-critical system.
- **Slow remediation**: Without unified handling documentation, on-call engineers toggled between consoles for hours before restoring service.
- **Audit friction**: SLA evidence was inconsistent, frustrating customers and regulators.

## WalksCloud’s Implementation Steps

1. **Inventory and KPI design**: Catalog servers, networks, SaaS, and containers, then define KPI/SLO targets plus alert thresholds.
2. **Platform deployment and integration**: Roll out Zabbix/LibreNMS for infrastructure, Grafana for visualization, Graylog/Wazuh for logs, Arkime or Akvorado for packet and flow analysis, and Gatus for API and service availability, then integrate notifications with collaboration tools and ticket flows.
3. **Operationalization**: Establish alert tiers, rotations, handling guides, and reporting templates, and provide training or managed services so the stack stays healthy.

With WalksCloud managing the observability backbone, organizations can focus on improving customer experience instead of wiring tools together.
`,Ni=e({default:()=>Pi}),Pi=`---
type: service
slug: services/it-monitoring
title: |
  IT 監控與管理系統
description: |
  行雲資訊以 Zabbix、LibreNMS、Grafana、Graylog、Wazuh、Arkime (Moloch)、Akvorado、Gatus 等工具打造統一監控平台，提供指標、日誌、告警與處理流程文件，協助企業建立可行動的可觀測性。
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.9
  changefreq: weekly
  lastmod: build
jsonld:
  kind: Service
  serviceType: IT Monitoring
---
## 案例洞察：多據點營運的監控混亂

某家在多個區域營運的企業僅由小型 IT 團隊支撐。由於各據點採用不同監控方案，導致：

- 有些設備僅靠 SNMP 監控，有些只記錄 syslog，資料不齊。
- 告警透過 email 與聊天工具混雜，值班無法追蹤進度。
- 沒有容量趨勢，季節性促銷常出現效能瓶頸。

## 內部建置的挑戰

- **平台養不起**：維護多個監控工具等於再養一套系統，還需自行補丁與升級。
- **事件延誤**：缺乏統一處理流程文件，值班人員需要一一查詢，平均修復時間往往得耗上數小時。
- **無法稽核**：當客戶要求 SLA（Service Level Agreement，服務水準協議）報告時，無法提出整合數據。

## 行雲資訊的實作步驟

1. **盤點與指標定義**：釐清伺服器、網路、SaaS、容器等資產，建立 KPI/SLO（Service Level Objective，服務層級目標）與告警閾值矩陣。
2. **平台部署與整合**：導入 Zabbix/LibreNMS 監控設備、Grafana 資料視覺化、Graylog/Wazuh 收集日誌、Arkime (Moloch)/Akvorado 進行封包與流量分析、Gatus 監測 API 與關鍵服務可用性，並串接通訊軟體建立告警通知與工單流程。
3. **營運流程化**：建立告警分級、值班輪值、處理手冊與報告模板，並提供教育訓練與代管服務，確保監控平台本身也被監控。

有了行雲資訊協作，企業不再需要花時間整合工具，而能專注在改善服務品質。監控系統是必要防線，及早交給專業團隊能避免停機與商機損失。
`,Fi=e({default:()=>Ii}),Ii=`---
type: service
slug: services/it-outsourcing
title: |
  IT/MIS Outsourcing and Technical Support
description: |
  WalksCloud provides managed IT operations, Help Desk, asset, and account workflows so companies without a full MIS team still enjoy measurable service levels.
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.9
  changefreq: weekly
  lastmod: build
jsonld:
  kind: Service
  serviceType: IT Outsourcing
---
## Case Insight: Rapid Growth, No IT Bench

A product-focused company leaned on a single engineer for IT. During office moves and hiring spikes they faced:

- Manual onboarding taking two days per employee to prepare accounts and devices.
- No support channel, forcing staff to interrupt the lone engineer for every issue.
- Inaccurate asset and license records, leading to overspend and security gaps.

## Burden of Stretching Internal Staff

- **Opportunity cost**: Engineering talent spent time fixing Wi-Fi and printers instead of shipping features.
- **Governance gaps**: Without defined patching or configuration baselines, audits repeatedly raised concerns.
- **Poor employee experience**: Long wait times for help desk responses left new hires frustrated.

## WalksCloud’s Managed Flow

1. **Service activation**: We inventory assets, accounts, and policies; define SLAs and escalation matrices; and configure help desk tooling plus knowledge bases.
2. **Daily operations**: Remote and onsite support, patch and backup checks, capacity planning, asset and license management, and structured onboarding/offboarding workflows keep environments consistent.
3. **Governance and reporting**: Monthly summaries cover incidents, improvements, and forward-looking budgets, with training or co-management options for gradual insourcing.

WalksCloud keeps accountability for IT execution while clients retain strategic control, ensuring essential services run smoothly without building an internal department overnight.
`,Li=e({default:()=>Ri}),Ri=`---
type: service
slug: services/it-outsourcing
title: |
  IT / MIS 外包與技術支援
description: |
  行雲資訊以代管方式提供 IT 維運、Help Desk、資產與帳號管理，讓企業在未建立完整 MIS 團隊前仍能享有可度量的服務。
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.9
  changefreq: weekly
  lastmod: build
jsonld:
  kind: Service
  serviceType: IT Outsourcing
---
## 案例洞察：快速擴編時的 IT 真空

一間專注研發的企業只由單一工程師兼任 IT。結果辦公室搬遷與大量新進員工期間出現：

- 到職流程需手動準備帳號與裝置，平均耗時兩天。
- 使用者遇到事件沒有窗口，只能打擾工程師，工單堆積。
- 裝置與授權盤點失準，造成軟體超買與資安風險。

## 內部撐起 MIS 的負荷

- **機會成本**：研發資源被迫處理印表機與 Wi-Fi 問題，產品時程拖延。
- **治理缺口**：沒有修補與設定標準，內控與客戶稽核屢遭質疑。
- **員工體驗不佳**：支援等待時間過長，新人報到就留下壞印象。

## 行雲資訊的代管流程

1. **服務啟動**：盤點資產、帳號、應用與政策，制定 SLA（Service Level Agreement，服務水準協議）、聯絡窗口與矩陣，設定 Help Desk 工具與知識庫。
2. **日常運作**：提供遠端/到場支援、Patch 與備份檢查、容量規畫、資產與授權管理，以及到離職流程整理。
3. **治理與回饋**：每月報告事件統計、改善提案與預算建議，並協助教育訓練或與內部團隊共維以逐步內製。

行雲資訊讓企業保有決策權，我們則扛起執行責任，確保 IT 支援這項必要功能在預算內完成，同時釋放團隊能量投入核心業務。
`,zi=e({default:()=>Bi}),Bi=`---
type: service
slug: services/mdm
title: |
  MDM and Enterprise Device Management
description: |
  WalksCloud plans and manages MDM programs with platforms such as Jamf Pro, Jamf Protect, Jamf Security Cloud, Mosyle, and related tooling so devices stay visible, compliant, and supportable across their lifecycle.
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.9
  changefreq: weekly
  lastmod: build
jsonld:
  kind: Service
  serviceType: Mobile Device Management
---
## Case Insight: Standardizing Device Management Across Sites

A Mac and iPhone-centric organization relied on manual setup, scattered scripts, and informal handover. After opening additional offices, the gaps became visible:

- New hires waited days for configured devices, while IT still had to install software and tune environments device by device based on department, role, and location.
- Encryption, password, and patch policies varied by department.
- Customer and upstream security reviews required inventory, policy, lost-device handling, and alert evidence the team could not easily produce.
- Onboarding and offboarding lacked a fixed process for issuing, recovering, wiping, and redeploying devices.

## Risks of Rolling Your Own

- **Inconsistent builds**: Manual installs and scripts maintained by different people can conflict, turning routine updates into fleet-wide incidents.
- **Security blind spots**: Without MDM, endpoint protection, or conditional access, lost devices become hard to lock, locate, wipe, or audit.
- **Asset handover gaps**: If departing employees return devices without a reset, unenrollment, and redeployment process, the next user receives an unclear device state.
- **Resource drain**: IT spends too much time on setup, patching, device handoff, and repeated questions; if every new hire requires a device to be shipped back to IT or an onsite specialist, strategic work keeps getting delayed.

## WalksCloud’s Delivery Approach

1. **Discovery and platform selection**: Evaluate device mix, budget, IdP, audit requirements, and internal IT capacity to choose Jamf, Mosyle, or another suitable MDM platform.
2. **Enrollment and policy design**: Plan Apple Business Manager, automated enrollment, groups, permissions, configuration profiles, app catalogs, and patch policies.
3. **Device security and lost-device handling**: Define lock, lost mode, location, remote wipe, and alert follow-up workflows so missing or offline devices can be tracked and handled.
4. **Onboarding and offboarding device flow**: Standardize new-hire device issuance, app delivery, policy assignment, departure recovery, data wipe, unenrollment, and redeployment.
5. **Zero-touch onboarding deployment**: Connect MDM with SSO / IdP so employee attributes such as department, role, group, location, or employment type automatically drive policy assignment. After a new hire powers on the device and signs in with the company account, the device can enroll itself, enable encryption, receive network and VPN settings, install certificates, deploy required apps, configure browser and collaboration tools, and apply role-specific environments for engineering, design, sales, or operations teams. As long as the device can reach the network and enter enrollment, initialization and installation can be completed as a zero-touch workflow without shipping the device back to IT or sending a dedicated technician onsite.
6. **Automation and operations handover**: Integrate IdP, MFA, conditional access, endpoint alerts, and self-service workflows; provide dashboards, reports, runbooks, and training for managed or co-managed support.

MDM is not a single-product purchase. It is the operating chain for device lifecycle, security policy, and daily support. WalksCloud helps select, deploy, and operate the right platform so governance becomes repeatable instead of ad hoc.
`,Vi=e({default:()=>Hi}),Hi=`---
type: service
slug: services/mdm
title: |
  MDM 與企業裝置管理
description: |
  行雲資訊協助企業規劃與代管 MDM，依需求導入 Jamf Pro、Jamf Protect、Jamf Security Cloud、Mosyle 等平台，讓裝置從註冊、設定、修補到退役都可視且可稽核。
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.9
  changefreq: weekly
  lastmod: build
jsonld:
  kind: Service
  serviceType: Mobile Device Management
---
## 案例洞察：多據點裝置管理標準化

某以 Mac、iPhone 與少量共用裝置為主的組織，原本靠手動設定、零散腳本與口頭交接維運。拓展多個辦公據點後，管理問題開始放大：

- 新人等數天才收到完成設定的裝置，IT 還需要依部門、職務與據點逐台安裝軟體與調整環境，影響上線速度。
- 不同部門套用不同設定，硬碟加密、密碼政策與軟體修補無法一致。
- 客戶或上游要求提供資安合規證據時，缺乏裝置清單、政策紀錄、遺失處置與告警報表。
- 員工到職與離職時，裝置發放、資料清除、權限移轉與設備收回缺少固定流程。

## 內部摸索的風險

- **部署不一致**：手動安裝與不同人維護的腳本容易互相衝突，版本更新後可能造成大量裝置異常。
- **資安盲點**：缺少 MDM、端點防護或條件式存取時，遺失裝置無法即時鎖定、定位或遠端清除，資料外洩風險上升。
- **資產交接斷點**：離職員工裝置若未收回、解除綁定與重置，下一位使用者可能拿到狀態不明的設備。
- **營運成本**：IT 團隊必須花上大半時間處理設定、修補、收發設備與重複詢問；若每位新人都要寄回設備或等待專人到場，核心專案也會被迫延後。

## 行雲資訊的導入流程

1. **需求盤點與平台選型**：依裝置類型、預算、既有 IdP、稽核要求與內部 IT 能力，評估 Jamf、Mosyle 或其他 MDM 平台的適用性。
2. **註冊與政策設計**：規劃 Apple Business Manager、自動註冊、群組、權限、設定檔、應用程式與 Patch Policy。
3. **裝置安全與遺失處理**：建立裝置鎖定、遺失模式、定位、遠端清除與告警追蹤流程，讓遺失或離線風險能被記錄與處理。
4. **到離職裝置流程**：定義新進員工配機、應用程式發放、權限套用、離職回收、資料清除、解除綁定與重新配發流程，避免設備與帳號交接斷點。
5. **零接觸到職部署**：將 MDM 與 SSO / IdP 串接，依使用者帳號中的部門、職務、群組、據點或雇用型態自動分流。新進員工第一次開機並登入企業帳號後，裝置即可自動完成註冊、加密、網路與 VPN 設定、憑證配置、必要軟體安裝、瀏覽器與協作工具設定，以及開發、設計、業務或行政角色所需的環境差異。只要裝置能連網並進入註冊流程，初始化與安裝可以零接觸完成，不需要先寄回 IT 整備，也不需要安排專職人員到場處理。
6. **自動化與營運交接**：整合 IdP、MFA、條件式存取、端點告警與自助服務；提供儀表板、報告、維運手冊與教育訓練，可由行雲資訊代管或與內部 IT 共維。

MDM 不只是單一工具採購，而是裝置生命週期、資安政策與日常營運的管理鏈。企業專注於員工體驗，行雲資訊協助選型、導入與維運，確保政策與安全真正落地。
`,Ui=e({default:()=>Wi}),Wi=`---
type: service
slug: services/office-network
title: |
  Office Network Deployment and Maintenance
description: |
  WalksCloud plans and operates office Wi-Fi, LAN, SD-WAN, VPN, and Internet edge environments so hybrid workplaces keep both performance and security in check.
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.9
  changefreq: weekly
  lastmod: build
jsonld:
  kind: Service
  serviceType: Office Networking
---
## Case Insight: Local Multi-site Network Challenges

A multi-office organization reused aging gear when relocating, leading to:

- Wi-Fi dead zones and interference disrupting video calls.
- VLAN and firewall policies mixed up, causing guest and internal networks to overlap.
- No documentation, so every change depended on one engineer.

## Internal Planning Pain Points

- **Delayed openings**: Underestimating cabling and electrical needs meant rework that pushed move-in dates back by weeks.
- **Security gaps**: Without NAC/VPN integration or posture checks, zero-trust promises went unfulfilled.
- **Cost overruns**: Ad-hoc hardware purchases created vendor sprawl and expensive inventories.

## WalksCloud’s Solution Path

1. **Assessment and topology**: Onsite surveys, heatmaps, and spectrum analysis inform AP, switch, and SD-WAN placement plus power and redundancy planning.
2. **Build and policy design**: Deploy Cisco, Juniper, Palo Alto, Fortinet, or VyOS equipment; implement VLANs, QoS, zero-trust policies, guest access, and NAC/VPN integration.
3. **Operations and documentation**: Deliver monitoring, firmware management, incident handling, and complete documentation so expansions or moves can reuse proven templates.

This blueprint gives companies a repeatable network foundation, keeping office connectivity aligned with business growth.
`,Gi=e({default:()=>Ki}),Ki=`---
type: service
slug: services/office-network
title: |
  辦公室網路建置與維運
description: |
  行雲資訊規劃並維運辦公室 Wi-Fi、LAN、SD-WAN、VPN 與 Internet Edge，確保混合辦公環境兼顧效能與資安。
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.9
  changefreq: weekly
  lastmod: build
jsonld:
  kind: Service
  serviceType: Office Networking
---
## 案例洞察：本地多據點辦公的網路挑戰

某個多辦公據點運作的企業沿用舊有設備，搬遷後出現：

- Wi-Fi 死角與干擾，視訊會議常斷線。
- VLAN 與防火牆策略混亂，Guest/內部網路被混用。
- 管理員無文件可循，每次變更都需仰賴單一工程師。

## 內部規畫的難題

- **開幕延遲**：因不了解建物配線限制，搬遷時重新佈線，導致延後兩週啟用。
- **安全缺口**：未整合 NAC（Network Access Control，網路存取控制）/VPN 與裝置檢查，違反客戶零信任要求。
- **成本失控**：臨時採購設備造成品牌混搭，維修與備品成本增加。

## 行雲資訊的解決路徑

1. **現場與拓樸設計**：實地勘查、熱點模擬與頻譜分析，規畫 AP/交換器/SD-WAN，並評估電力、備援與布線。
2. **佈建與安全策略**：部署 Cisco/Juniper/Palo Alto/Fortinet/VyOS/Mikrotik/Aruba 等設備，設計 VLAN、QoS、零信任與訪客網路政策，整合 NAC（Network Access Control）與 VPN。
3. **營運與文件**：提供監控、韌體管理、事件處理與完整文件，建立搬遷/擴編模板，並可由行雲資訊代管或與內部共維。

透過這三步驟，我們協助企業建立可複製的網路藍圖，確保辦公室網路這項必要基礎與業務成長同步。
`,qi=e({default:()=>Ji}),Ji=`---
type: service
slug: services/virtualization-cloud
title: |
  Virtualization and Cloud Solutions
description: |
  WalksCloud merges Proxmox VE, Ceph, SDN, and hybrid network designs to deliver highly available virtualization platforms for general workloads, AI, and VDI while lowering licensing and operational complexity.
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.9
  changefreq: weekly
  lastmod: build
jsonld:
  kind: Service
  serviceType: Virtualization & Cloud
---
## Case Insight: Replacing a Legacy Platform

An enterprise left with expensive legacy virtualization licenses wanted to switch to open platforms but struggled with:

- Undefined maintenance windows and fear of production downtime.
- Limited Ceph and SDN expertise, resulting in subpar performance tests.
- Pressure to support GPU/AI workloads and offsite resilience without a unified architecture.

## Pitfalls of Self-managed Migrations

- **Overruns from downtime**: Misjudged migration durations halted production for hours, costing more than the original licenses.
- **Dual-platform chaos**: Operating legacy and new stacks simultaneously doubled operational effort.
- **Compliance gaps**: Missing DR reports and exercises meant audits could not be completed.

## WalksCloud’s Execution Path

1. **Assessment and blueprint**: Analyze workloads, capacity, SLA requirements, and dependencies; design migration waves and test PoC performance.
2. **Platform build**: Deploy Proxmox VE, Ceph, SDN, and GPU nodes with HA, replication, and, where appropriate, Terraform-managed infrastructure settings to reduce environment drift.
3. **Migration and operations**: Perform P2V/V2V moves, configure hybrid links, backups, and DR workflows, and deliver monitoring, reporting processes, and operations documentation—offering managed operations if needed.

This three-phase approach lets businesses retire legacy platforms quickly and support future workloads without sacrificing reliability.
`,Yi=e({default:()=>Xi}),Xi=`---
type: service
slug: services/virtualization-cloud
title: |
  虛擬化與雲端解決方案
description: |
  行雲資訊結合 Proxmox VE、Ceph、SDN 與混合雲策略，建立高可用虛擬化平台，支援一般工作負載、AI 與 VDI，降低授權與維運成本。
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.9
  changefreq: weekly
  lastmod: build
jsonld:
  kind: Service
  serviceType: Virtualization & Cloud
---
## 案例洞察：舊平台汰換

某企業因舊虛擬化授權昂貴，決定改用開放式平台，但遇到：

- 無法規畫停機窗口，擔心生產系統遷移失敗。
- 對 Ceph 與 SDN 不熟，建置後效能不如預期。
- 需要 GPU/AI 支援與異地備援，卻沒有一致架構。

## 內部遷移的風險

- **停機風險**：錯估遷移時間導致產線停擺好幾個小時，造成的損失遠超出授權費用。
- **雙平台維護**：過渡期需同時維護舊平台與新叢集，人力成本倍增。
- **合規缺口**：缺少備援報告與演練紀錄，客戶稽核無法通過。

## 行雲資訊的實作路線

1. **盤點與藍圖**：分析工作負載、容量、SLA（Service Level Agreement，服務水準協議）與依賴系統，設計遷移批次與停機策略，並先行進行 PoC 驗證性能。
2. **平台建置**：部署 Proxmox VE、Ceph、SDN 與 GPU 節點，設計高可用、儲存複寫、備援電力與網路，並在需要時以 Terraform 管理基礎設施設定，降低環境落差。
3. **遷移與營運**：執行 P2V/V2V、建立混合雲連線、備份與 DR，建立監控與報告流程，提供維運文件與訓練，必要時由行雲資訊代管。

透過這些步驟，企業能快速汰換老舊平台並支援新工作負載，確保虛擬化這項必要基礎隨營運成長而進化。
`,Zi=e({default:()=>Qi}),Qi=`---
type: service
slug: services/vpn-remote
title: |
  VPN and Remote Security Solutions
description: |
  WalksCloud designs OpenVPN, WireGuard, clientless gateways, and conditional access architectures that keep hybrid workers connected without weakening the perimeter.
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.9
  changefreq: weekly
  lastmod: build
jsonld:
  kind: Service
  serviceType: Remote Access
---
## Case Insight: Multi-site Collaboration with One VPN Server

A growing team continued relying on a single VPN appliance and ran into:

- Saturated bandwidth during peaks, crippling meetings and file sync.
- Shared accounts and expired certificates that triggered security audit flags.
- No device posture checks, letting ad-hoc laptops become entry points.

## Limits of In-house Maintenance

- **Operational disruptions**: VPN outages during peak periods delayed projects and even led to customer claims.
- **Security incidents**: Compromised shared credentials enabled attackers to reach internal networks, requiring lengthy investigations.
- **Staffing strain**: IT manually provisioned accounts, updated certificates, and troubleshot connectivity every day.

## WalksCloud’s Deployment Steps

1. **Needs assessment**: Analyze user personas, applications, bandwidth, and geography to define concurrency targets, SLAs, and zero-trust boundaries.
2. **Architecture build**: Deploy redundant OpenVPN/WireGuard/clientless gateways, integrate IdPs, MFA, device posture, and fine-grained segmentation.
3. **Operations and visibility**: Establish certificate rotation, self-service portals, monitoring, and audit reports, and provide operating guides, training, or managed services.

WalksCloud ensures remote access is both easy and safe, freeing teams to focus on collaboration while we keep the edge hardened.
`,$i=e({default:()=>ea}),ea=`---
type: service
slug: services/vpn-remote
title: |
  VPN 及遠端安全解決方案
description: |
  行雲資訊設計 OpenVPN、WireGuard、零客戶端閘道與條件式存取架構，打造混合辦公需要的安全遠端入口。
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.9
  changefreq: weekly
  lastmod: build
jsonld:
  kind: Service
  serviceType: Remote Access
---
## 案例洞察：本地多據點協作的併發瓶頸

某個多據點協作團隊在擴張後仍仰賴單一 VPN 伺服器，因此：

- 連線人數高峰時頻寬不足，會議與檔案同步大幅延遲。
- 帳號共用與憑證過期，安全稽核屢遭警告。
- 沒有裝置檢查，臨時設備成為攻擊入口。

## 內部維護的限制

- **營運受阻**：高峰期 VPN 甚至當機兩次，造成專案延宕與客戶求償。
- **安全曝險**：共用帳密被外洩，攻擊者利用 VPN 進入內網，後續花費數週調查。
- **人力負荷**：IT 需要不斷手動新增帳號、更新憑證與排除連線問題。

## 行雲資訊導入步驟

1. **需求盤點**：分析用戶類型、應用、頻寬與地理分佈，定義併發、SLA（Service Level Agreement，服務水準協議）與零信任邊界。
2. **架構設計**：部署 OpenVPN/WireGuard/安全閘道備援叢集，整合 IdP、MFA、裝置態勢，並以分段策略控制資源存取。
3. **營運與可視化**：建立憑證輪替、自助入口、監控與稽核報表，提供操作指引、教育與可選的代管服務。

行雲資訊確保遠端連線「好用又安全」，企業專注於協作與營運，我們則持續調校架構，使 VPN/零信任入口成為必要且可靠的能力。
`,ta=e({default:()=>na}),na=`---
type: service
slug: services/wazuh-asset
title: |
  Wazuh Asset Visibility
description: |
  WalksCloud adapts Wazuh for asset intelligence by deploying agents and policies that surface real-time hardware, software, and configuration data.
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.9
  changefreq: weekly
  lastmod: build
jsonld:
  kind: Service
  serviceType: Asset Management
---
## Case Insight: Audits Without Reliable Inventories

A company facing annual audits ran on spreadsheets and manual reporting, leading to:

- Software versions mismatching production reality, causing audit rejections.
- No visibility into unauthorized applications or config drift.
- Weeks needed to identify assets impacted by a high-risk CVE.

## Challenges of Building Internally

- **Data silos**: CMDB, scanners, and EDR tools each held partial truth, and integrating them was costly.
- **Reporting grind**: Compiling evidence required multiple staff for an entire week.
- **Slow response**: Without realtime alerts, incidents escalated before IT knew which systems were affected.

## WalksCloud’s Delivery Model

1. **Deployment and policy**: Plan agent coverage across desktops, servers, and cloud workloads while balancing performance and visibility.
2. **Rules and dashboards**: Build decoders and correlation to track installs, configuration changes, and unauthorized software; surface insights via dashboards and exports.
3. **Workflow integration**: Feed data into CMDB, vulnerability management, ITSM, or GRC systems with ticket handling flows, audit packages, and training.

With WalksCloud maintaining the platform, organizations enjoy on-demand asset truth and can prove compliance or remediate vulnerabilities without guesswork.
`,ra=e({default:()=>ia}),ia=`---
type: service
slug: services/wazuh-asset
title: |
  Wazuh 資產可視化
description: |
  行雲資訊將 Wazuh 延伸到資產管理，透過 Agent 與規則設計提供即時的硬體、軟體與設定資料，支援稽核、授權與弱點修補。
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.9
  changefreq: weekly
  lastmod: build
jsonld:
  kind: Service
  serviceType: Asset Management
---
## 案例洞察：稽核壓力下的資產掌控

某需要面對年度稽核的企業擁有大量端點，原本依賴 Excel 與人工回報，結果出現：

- 軟體版本與實際狀態不符，稽核被退件。
- 無法即時得知未授權程式或設定變更。
- 高風險漏洞公告後，需要兩週才能找出受影響設備。

## 內部建置的挑戰

- **資料孤島**：CMDB（Configuration Management Database，組態管理資料庫）、弱掃、EDR 各自為政，整合成本高。
- **報告耗時**：整理資產報告需三位同仁耗上一週。
- **反應緩慢**：缺乏即時告警，事件發生後無法迅速定位。

## 行雲資訊的落地方式

1. **部署與策略**：規畫 Wazuh Agent 佈署範圍，考量桌機、伺服器、雲端工作負載與效能需求，建立資料收集策略。
2. **規則與儀表板**：客製解碼與規則，追蹤軟體安裝、設定漂移、未授權程式，並建立資產儀表板、匯出 API 與報告模板。
3. **流程串接**：將資料串入 CMDB、弱掃、ITSM（IT Service Management，IT 服務管理）或 GRC（Governance, Risk, Compliance，治理風險與合規）系統，建立工單處理流程、稽核證據與教育訓練，確保流程閉環。

透過這些步驟，企業可隨時掌握資產真相，行雲資訊負責系統維運與調校，確保資產可視化這項必要能力真正支援零信任與合規要求。
`,aa=e({default:()=>oa}),oa=`---
type: service
slug: services/wazuh-siem
title: |
  Wazuh SIEM Deployment and Operations
description: |
  WalksCloud deploys and operates Wazuh SIEM to consolidate endpoint, server, cloud, and SaaS logs with MITRE-aligned alert handling workflows so analysts focus on real threats.
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.9
  changefreq: weekly
  lastmod: build
jsonld:
  kind: Service
  serviceType: Security Operations
---
## Case Insight: Security Team Overwhelmed by Operations

A multi-site enterprise adopted Wazuh but lacked operational experience, leading to:

- Elastic indices overrunning capacity and delaying alerts by tens of minutes.
- Untuned rules producing extreme false-positive rates that exhausted on-call staff.
- Upgrades requiring downtime because no backup or recovery workflows existed.

## Pressures of Maintaining Wazuh Internally

- **Time sink**: Senior analysts spent most of their week tuning hardware and configs instead of investigating threats.
- **Audit pain**: Without MITRE mappings and compliance reports, customer reviews failed.
- **Incident delays**: Legitimate attacks hid among noisy alerts, stretching investigation timelines and increasing breach risk.

## WalksCloud’s Delivery Steps

1. **Architecture planning**: Design manager/indexer/agent topology with high availability, capacity buffers, and backup strategies.
2. **Rules and visualization**: Tune detections, ingest threat intel, and build MITRE ATT&CK dashboards while integrating SOAR or ITSM systems when needed so alerts become actionable tasks.
3. **Operations and enablement**: Handle upgrades, backup/restore drills, performance monitoring, handling guides, training, or managed services to keep the stack healthy.

With WalksCloud managing the platform, organizations can stop worrying about the SIEM itself and instead shorten detection and response cycles while trusting Wazuh as a dependable security backbone.
`,sa=e({default:()=>ca}),ca=`---
type: service
slug: services/wazuh-siem
title: |
  Wazuh SIEM 部署與維運
description: |
  行雲資訊協助部署與維運 Wazuh SIEM，整合端點、伺服器、雲端與 SaaS 日誌，提供 MITRE 對應與告警處理流程，讓安全團隊專注威脅分析。
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.9
  changefreq: weekly
  lastmod: build
jsonld:
  kind: Service
  serviceType: Security Operations
---
## 案例洞察：資安團隊的維運瓶頸

某個多據點的企業採用 Wazuh，但因缺乏經驗而面臨：

- Elastic 索引經常爆量，告警動輒延遲數十分鐘。
- 規則未調整，誤報率極高，值班人力被耗光。
- 升級需要停機，沒有備援與還原流程。

## 內部維運的壓力

- **時間浪費**：團隊將大半時間花在調整硬體與設定上，威脅分析反而被擠壓。
- **稽核壓力**：缺乏 MITRE 映射與合規報告，客戶審查無法通過。
- **事件延遲**：真實攻擊被大量誤報淹沒，導致調查時間拉長並可能造成資料外洩。

## 行雲資訊的實作步驟

1. **架構規劃**：設計管理節點、索引與 Agent 佈署拓樸，確保高可用與容量彈性，並建立備援策略。
2. **規則與可視化**：調校規則、匯入威脅情資、建立 MITRE ATT&CK 儀表板，視需求串接 SOAR（Security Orchestration, Automation and Response）或 ITSM（IT Service Management，IT 服務管理）系統，將告警整理為可執行任務。
3. **營運與訓練**：提供版本升級、備份還原、效能監控與處理手冊，並安排教育訓練或代管，確保平台長期健康。

透過行雲資訊的協助，企業無需再為 SIEM 平台本身煩惱，而能專注在縮短偵測與回應時間，讓 Wazuh 成為必要且可靠的安全底座。
`,la=e({default:()=>ua}),ua=`---
type: service
slug: services/zero-trust
title: |
  Zero Trust Architecture Enablement
description: |
  WalksCloud turns zero-trust principles into practical rollouts by selecting the right mix of Jamf Security Cloud, Cloudflare Zero Trust, NetBird, and identity tooling.
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.9
  changefreq: weekly
  lastmod: build
jsonld:
  kind: Service
  serviceType: Zero Trust
---
## Case Insight: Multi-office Teams Without Segmentation

A local multi-office company relied on VPN and flat networks. Once credentials leaked, attackers moved laterally because:

- VPN accounts provided broad access with no internal segmentation.
- SaaS and custom apps had inconsistent login experiences, frustrating users.
- Auditors demanded device health evidence the IT team couldn’t provide.

## Challenges of DIY Zero Trust

- **Point-solution sprawl**: Buying isolated tools without a strategy created complex management overhead.
- **Change friction**: Without cross-team alignment, onboarding/offboarding flows never matched new policies.
- **Budget leakage**: Security spending ballooned while gaps remained.

## WalksCloud’s Implementation Path

1. **Strategy and discovery**: Workshops clarify identity sources, application tiers, data flows, and success metrics.
2. **Platform deployment**: We configure Jamf Security Cloud, Cloudflare Zero Trust, or NetBird (or a combination) with posture checks, app proxies, and zero-client networks wired into IdPs, SIEM, and SD-WAN/VPN.
3. **Operations and governance**: Policy templates, handling guides, audit-ready reports, and training connect zero trust with onboarding, exception handling, and patching rhythms.

Zero trust is an ongoing posture, not a single product. WalksCloud orchestrates the people, processes, and platforms so the journey moves forward without derailing productivity.
`,da=e({default:()=>fa}),fa=`---
type: service
slug: services/zero-trust
title: |
  Zero Trust 安全架構導入
description: |
  行雲資訊以 Jamf Security Cloud、Cloudflare Zero Trust、NetBird 等組合落實零信任，將身分、裝置、應用與資料重新定義信任邊界。
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.9
  changefreq: weekly
  lastmod: build
jsonld:
  kind: Service
  serviceType: Zero Trust
---
## 案例洞察：本地多據點團隊的邊界失守

某個多辦公據點協作的企業，VPN 與內網一旦被入侵就無任何分段，因此：

- 攻擊者利用 VPN 帳密入侵後迅速橫向移動。
- SaaS 與自建系統登錄體驗不一致，使用者抱怨多因子流程冗長。
- 稽核要求裝置健康證明，IT 卻無任何資料可提供。

## 內部摸索的挑戰

- **點狀部署**：只裝了新的 VPN 或 SWG（Secure Web Gateway，安全網頁閘道），卻沒有策略，造成管理複雜。
- **轉型卡關**：缺乏部門間溝通，變更流程與到離職機制無法配合。
- **成本外溢**：購買多套工具卻沒有整合，資安預算被消耗殆盡。

## 行雲資訊的導入路線

1. **策略與盤點**：透過工作坊釐清身分來源、應用分類、資料價值與存取場景，定義階段目標與成功指標。
2. **平台與整合**：根據需求選擇 Jamf Security Cloud、Cloudflare Zero Trust、NetBird 等解決方案，部署身分、裝置態勢、應用 Proxy 與零客戶端網路，並串接 IdP、SIEM、SD-WAN/VPN。
3. **營運與治理**：建立政策模板、處理手冊、稽核報表與教育訓練，整理到離職流程、異常回應與設備修補節奏，確保策略能持續演進。

零信任是必要的安全升級，並非單點產品。行雲資訊以可執行的步驟協助企業逐步落地，讓策略、工具與流程緊密連結，避免無謂投資並確保風險受控。
`,pa=e({default:()=>ma}),ma=`---
type: tech
slug: tech/akvorado-flow-collector-overview
title: |
  Akvorado Tutorial: NetFlow/IPFIX/sFlow Traffic Analysis Architecture
description: |
  A technical overview of how Akvorado uses Inlet, Kafka, Outlet, ClickHouse, and Console components to collect NetFlow/IPFIX/sFlow data, enrich it, and turn it into usable traffic visibility for capacity and anomaly analysis.
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.45
  changefreq: monthly
  lastmod: build
---
## Traffic problems Akvorado helps solve

Akvorado is a flow collector, enricher, and visualizer. It receives traffic-summary data such as NetFlow/IPFIX/sFlow, enriches it with readable context from SNMP, GeoIP, routing data, or custom classification, writes the result into ClickHouse, and exposes it through a web Console. For enterprise IT teams, it is not a packet-capture platform and it does not replace device monitoring tools such as Zabbix or LibreNMS. Its value is the missing traffic-visibility layer: who is using bandwidth, where traffic is going, and which ASN, country, or service pattern looks abnormal.

Akvorado is worth deploying when a network team can already confirm that devices are online, but still cannot explain why links become full, which external networks dominate traffic, or which site, subnet, customer, or service causes a recurring peak. Typical readers are enterprise IT teams, IDC operators, managed network providers, and organizations that run routers, switches, firewalls, or data-center edge devices with NetFlow/IPFIX/sFlow support.

If these problems keep troubling the environment, Akvorado can provide the traffic evidence needed to narrow the cause:

1. Which Top Talkers are using the most bandwidth during peak hours?
2. Which source or destination ASN, country, subnet, interface, or service group is responsible for an abnormal traffic pattern?
3. Is the Internet uplink, inter-site link, peering path, or data-center edge close to capacity?
4. Can flow data help separate normal business traffic from backup, update, scanning, abuse, or misrouted traffic?

If the goal is to know whether a device is online, whether an interface has errors, or whether CPU/PoE is overloaded, start with SNMP/NMS first. If the goal is packet-level forensics, Akvorado is also not the first tool; use packet capture or mirror-port workflows instead. If the trouble is traffic-source, traffic-destination, protocol, Top Talkers, and peak-behavior visibility, Akvorado is a stronger fit. In WalksCloud planning for [IT Monitoring and Management Systems](/services/it-monitoring/) and [Office Network Deployment and Operations](/services/office-network/), these visibility needs are usually separated before selecting tools.

## Core architecture

\`\`\`mermaid
flowchart LR
  A["Router / Switch / Firewall<br/>NetFlow, IPFIX, sFlow Exporter"]
  B["Akvorado Inlet<br/>Receives UDP flow packets"]
  C["Kafka<br/>Buffers and distributes flow messages"]
  D["Akvorado Outlet<br/>Parses, enriches metadata, writes data"]
  E["ClickHouse<br/>High-volume flow storage and query"]
  F["Akvorado Console<br/>Query, charts, Sankey visualization"]
  G["SNMP / GeoIP / BMP / Custom classification<br/>Adds interface, geography, routing, and grouping context"]
  A --> B
  B --> C
  C --> D
  G --> D
  D --> E
  E --> F
\`\`\`

<!-- media-description:for mermaid:1 -->
Akvorado’s data path can be understood as six roles:

1. **Exporter**: usually a router, L3 switch, firewall, or Linux flow probe that sends NetFlow/IPFIX/sFlow to the Akvorado Inlet.
2. **Inlet**: receives UDP flow packets and forwards them to Kafka. The official design emphasizes fast reception and buffering, not full parsing at this stage.
3. **Kafka**: buffers data between Inlet and Outlet so short traffic bursts do not immediately overwhelm parsing and storage.
4. **Outlet**: reads from Kafka, decodes flow fields, adds interface, geography, routing, and classification metadata, then writes to ClickHouse.
5. **ClickHouse**: stores and queries high-volume flow records. Retention policy, disk capacity, and query load directly affect stability.
6. **Console**: provides queries, charts, and visualization. Operators usually use it for Top Talkers, traffic direction, ASN/country distribution, and time-series changes.
<!-- media-description:end -->

![Akvorado Console showing AS-based stacked traffic visualization](./akvorado-console-as-traffic-visualization-annotated.png)

<!-- media-description:for ./akvorado-console-as-traffic-visualization-annotated.png -->
The Visualize page can split flow data by source AS, destination AS, interface boundary, or custom filters into comparable time-series views. The markers can be read in order:
1. **Query controls**: set the time range, dimensions, and filter so the analysis has a clear scope.
2. **Time-series traffic chart**: shows AS-based stacked traffic for confirming main outbound sources and whether spikes concentrate around specific ASNs.
3. **Statistics table**: summarizes min, max, average, and 95th percentile values so the data can support capacity decisions.
<!-- media-description:end -->

## NetFlow/IPFIX/sFlow differences

NetFlow and IPFIX usually export summarized flow records after a device aggregates traffic for a period of time. They are useful for source, destination, port, protocol, and volume analysis. IPFIX can be treated as the more standardized and flexible flow export format. sFlow is sampling-oriented and sends sampled packet information, so it is common on switches and high-throughput environments, but readers must remember it is sampled data. Do not treat every sFlow record as a complete packet record.

You do not need to enable every format on day one. A practical deployment starts with one major edge device, confirms which export format it supports, then fixes exporter IP, collector port, and sampling/timeout settings. If multiple vendors are involved, align exporter source address, template behavior, and interface index handling first. Otherwise, Console output may show traffic without useful interface names, or the same device may appear as multiple exporters.

## Basic configuration direction

The official Docker Compose example splits configuration into \`config/akvorado.yaml\`, \`config/inlet.yaml\`, \`config/outlet.yaml\`, and \`config/console.yaml\`. In a basic deployment, the first check is whether Inlet has fixed listening ports. Without explicit configuration, Akvorado may listen on random flow ports, which is unsuitable for production.

\`\`\`yaml
flow:
  inputs:
    - type: udp
      decoder: netflow
      listen: :2055
      workers: 3
      use-src-addr-for-exporter-addr: true
    - type: udp
      decoder: sflow
      listen: :6343
      workers: 3
\`\`\`

The point of this example is not to copy the ports blindly. The goal is a documented standard: which ports are used for NetFlow/IPFIX/sFlow, which exporters are allowed, whether source IP is trustworthy, and whether \`use-src-addr-for-exporter-addr\` is needed to correct exporter address handling. If devices sit behind NAT, VRF, or management-network boundaries, packet source address and exporter address inside the flow message may differ. That affects SNMP lookup and interface-name enrichment.

## Pre-deployment checklist

1. **Device support**: confirm whether core routers, firewalls, and L3 switches support NetFlow v9, IPFIX, or sFlow, and whether they can set collector address and source interface.
2. **Network path**: verify that UDP ports from exporter to collector are not blocked by ACL, firewall, or NAT policy.
3. **Time sync**: keep all devices plus Akvorado, Kafka, and ClickHouse hosts on consistent NTP, or chart timelines will drift.
4. **SNMP access**: if interface names and descriptions matter, the collector must query exporter SNMP. Use read-only community or SNMPv3.
5. **Storage capacity**: ClickHouse stores large volumes of flow data, so define retention days, disk alerts, and backup policy before production use.
6. **Data boundary**: if one collector receives flows from multiple clients, sites, or security zones, plan classification fields and query permissions before data is mixed.

## Common misunderstandings

1. **Akvorado is not packet capture**: flow data is summarized and does not preserve full payload. For packet forensics, use Arkime, tcpdump, or SPAN/mirror designs.
2. **Flow data does not automatically identify users**: if NAT, proxy, VPN, or DHCP records are not correlated, you may only see the edge or relay device.
3. **An empty Console is not always a frontend issue**: check whether Inlet receives packets, then verify Kafka, Outlet, and ClickHouse data movement.
4. **sFlow is not complete metering**: sampling affects precision. It is useful for trends and Top Talkers, not per-packet audit or billing-grade accounting.
5. **GeoIP/ASN fields need maintenance**: if geography or ASN data is blank, inspect GeoIP data source and configuration instead of only checking exporters.

## References

- Akvorado GitHub  
  https://github.com/akvorado/akvorado
- Akvorado Installation  
  https://demo.akvorado.net/docs/install
- Akvorado Configuration  
  https://demo.akvorado.net/docs/configuration
- Akvorado Internal Design  
  https://demo.akvorado.net/docs/internals
`,ha=e({default:()=>ga}),ga=`---
type: tech
slug: tech/akvorado-flow-collector-overview
title: |
  Akvorado 教學：NetFlow/IPFIX/sFlow 流量分析架構與適用情境
description: |
  從 Akvorado 的 Inlet、Kafka、Outlet、ClickHouse 與 Console 架構出發，說明 NetFlow/IPFIX/sFlow 流量資料如何被收集、補充欄位並轉成可用於容量規劃與異常分析的視覺化資料。
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.45
  changefreq: monthly
  lastmod: build
---
## Akvorado 可以協助釐清哪些流量問題

Akvorado 是一套 flow collector、enricher 與 visualizer。它接收 NetFlow/IPFIX/sFlow 等流量摘要資料，透過 SNMP、GeoIP、路由資訊或自訂分類補上可讀欄位，再將結果寫入 ClickHouse，最後由 Web Console 查詢與視覺化。對企業 IT 而言，它不是封包側錄工具，也不是取代 Zabbix、LibreNMS 這類設備監控系統的工具，而是補上「誰在使用頻寬、流量往哪裡去、哪個 ASN/國家/服務佔比異常」的觀測層。

當網路團隊已經能確認設備在線，卻仍然說不清楚為什麼線路滿載、哪些外部網路佔用主要流量、哪個站點/網段/客戶/服務造成固定尖峰時，就值得導入 Akvorado 來補足流量證據。典型讀者會是企業 IT、IDC 維運團隊、代管網路服務商，或已經管理 Router、Switch、防火牆、資料中心出口設備，且設備支援 NetFlow/IPFIX/sFlow 的組織。

如果以下問題持續困擾環境，Akvorado 可以協助把問題縮小到具體流量來源與行為：

1. 尖峰時段到底是哪一些 Top Talkers 使用最多頻寬？
2. 異常流量主要集中在哪個來源或目的 ASN、國家、網段、介面或服務群組？
3. Internet uplink、跨站線路、peering path 或資料中心出口是否已經接近容量上限？
4. 是否能用 flow 資料把正常業務流量和備份、更新、掃描、濫用或錯誤路由的流量分開？

若目標是知道設備是否在線、介面是否錯誤、CPU 或 PoE 是否超載，應優先規劃 SNMP/NMS；若目標是封包層級鑑識，Akvorado 也不是第一個工具，應改用封包側錄或 mirror port 流程。若真正困擾的是流量來源、目的地、應用協定、Top Talkers 與尖峰行為看不清楚，Akvorado 才是比較適合的切入點。行雲資訊在 [IT 監控與管理系統](/services/it-monitoring/) 與 [辦公室網路建置與維運](/services/office-network/) 的規劃中，通常會先確認這幾類觀測需求是否需要拆開處理。

## 核心架構

\`\`\`mermaid
flowchart LR
  A["Router / Switch / Firewall<br/>NetFlow, IPFIX, sFlow Exporter"]
  B["Akvorado Inlet<br/>接收 UDP flow 封包"]
  C["Kafka<br/>緩衝與分散 flow 訊息"]
  D["Akvorado Outlet<br/>解析、補充 metadata、寫入資料庫"]
  E["ClickHouse<br/>高容量 flow 儲存與查詢"]
  F["Akvorado Console<br/>查詢、圖表、Sankey 視覺化"]
  G["SNMP / GeoIP / BMP / 自訂分類<br/>補充介面、地理、路由與群組資訊"]
  A --> B
  B --> C
  C --> D
  G --> D
  D --> E
  E --> F
\`\`\`

<!-- media-description:for mermaid:1 -->
Akvorado 的資料流可以分成六個角色：

1. **Exporter**：通常是 Router、L3 Switch、防火牆或 Linux flow probe，負責把 NetFlow/IPFIX/sFlow 指向 Akvorado Inlet。
2. **Inlet**：接收 flow UDP 封包並送進 Kafka。官方設計重點是快速接收與緩衝，資料在這個階段不做完整解析。
3. **Kafka**：作為 Inlet 與 Outlet 之間的緩衝層，讓短時間流量尖峰不會直接壓垮後端解析與寫入流程。
4. **Outlet**：從 Kafka 讀取資料，解析 flow 欄位，補上介面、地理、路由與分類資訊，再寫入 ClickHouse。
5. **ClickHouse**：負責大量 flow 資料儲存與查詢。保留策略、磁碟容量與查詢負載會直接影響整體穩定度。
6. **Console**：提供查詢、圖表與視覺化。使用者通常會在這裡看 Top Talkers、流量方向、ASN/國家分布與時間序變化。
<!-- media-description:end -->

![Akvorado Console 以 AS 維度呈現流量堆疊圖](./akvorado-console-as-traffic-visualization-annotated.png)

<!-- media-description:for ./akvorado-console-as-traffic-visualization-annotated.png -->
Console 的 Visualize 頁面可以把 flow 資料依來源 AS、目的 AS、介面邊界或自訂條件拆成可比較的時間序圖。圖中標示可依序閱讀：
1. **查詢條件**：包含時間範圍、維度與 filter，用來限定要分析的流量來源與查詢口徑。
2. **時間序流量圖**：以 AS 維度呈現堆疊流量，適合確認主要對外流量來源，以及尖峰是否集中在特定 ASN。
3. **統計表**：整理 min、max、average、95th percentile 等數值，用來判斷資料是否足以支撐後續容量規劃。
<!-- media-description:end -->

## NetFlow/IPFIX/sFlow 的差異

NetFlow 與 IPFIX 通常由設備彙整一段時間內的流量紀錄後送出，適合追蹤來源、目的、port、協定與流量大小。IPFIX 可視為較標準化、欄位彈性更高的 flow export 格式。sFlow 則偏向取樣模式，會把抽樣封包資訊送出，因此在交換器或高流量環境中常見，但讀者必須接受它本質上是 sampled data，不應把每筆 sFlow 資料當成完整封包紀錄。

部署時不需要一開始就同時啟用全部格式。比較務實的作法是先選一個主要出口設備，確認它支援哪一種 export 格式，再固定 exporter IP、collector port 與 sampling/timeout 設定。若資料來源跨多個廠牌，應先把每台設備的 exporter source address、template 行為與介面 index 對齊，否則 Console 看到的資料會變成「有流量但不知道是哪個介面」或「同一設備被辨識成多個 exporter」。

## 基礎設定方向

官方 Docker Compose 範例會把主要設定拆成 \`config/akvorado.yaml\`、\`config/inlet.yaml\`、\`config/outlet.yaml\` 與 \`config/console.yaml\`。基礎部署時，最先要確認的是 Inlet 是否有固定監聽 port。若沒有設定，Akvorado 可能只用隨機 port 接收 flow，這對正式環境不適合。

\`\`\`yaml
flow:
  inputs:
    - type: udp
      decoder: netflow
      listen: :2055
      workers: 3
      use-src-addr-for-exporter-addr: true
    - type: udp
      decoder: sflow
      listen: :6343
      workers: 3
\`\`\`

上例的重點不是照抄 port，而是建立可被文件化的標準：NetFlow/IPFIX/sFlow 分別使用哪些 port、哪些 exporter 可以送進來、source IP 是否可信、是否需要用 \`use-src-addr-for-exporter-addr\` 修正 exporter address。若設備在 NAT、VRF 或管理網段後方，source address 與 flow message 內的 exporter address 可能不同，這會影響 SNMP 查詢與介面名稱補充。

## 部署前盤點清單

1. **設備支援**：確認核心 Router、防火牆、L3 Switch 是否支援 NetFlow v9、IPFIX 或 sFlow，以及是否能指定 collector address 與 source interface。
2. **網路路徑**：確認 exporter 到 collector 的 UDP port 未被 ACL、防火牆或 NAT 擋下。
3. **時間同步**：所有設備、Akvorado、Kafka、ClickHouse 主機都應有一致 NTP，否則圖表時間軸會失真。
4. **SNMP 權限**：若要顯示介面名稱與描述，collector 必須能查詢 exporter 的 SNMP。建議使用唯讀 community 或 SNMPv3。
5. **儲存容量**：ClickHouse 會保存大量 flow 資料，必須先定義保留天數、磁碟告警與備份策略。
6. **資料分界**：若同一套 collector 接收多個客戶、站點或安全區域的 flow，必須先規劃分類欄位與查詢權限，不要等資料混在一起後再補救。

## 常見誤解

1. **Akvorado 不是封包側錄**：flow 只提供摘要，不會保留完整 payload。需要封包鑑識時仍需 Arkime、tcpdump 或鏡像埠方案。
2. **有 flow 不代表能直接定位使用者**：若 NAT、Proxy、VPN 或 DHCP 記錄沒有串起來，看到的可能只是出口或中繼設備。
3. **Console 沒資料不一定是前端問題**：先查 Inlet 是否收到封包，再查 Kafka、Outlet、ClickHouse 是否有資料流動。
4. **sFlow 不等於完整計量**：sampling 設定會影響精度，適合趨勢與 Top Talkers，不適合做逐筆計費或封包級稽核。
5. **GeoIP/ASN 欄位要維護**：如果地理或 ASN 欄位空白，通常要回頭檢查 GeoIP 資料來源與設定，而不是只看設備端 exporter。

## 參考資料

- Akvorado GitHub  
  https://github.com/akvorado/akvorado
- Akvorado Installation  
  https://demo.akvorado.net/docs/install
- Akvorado Configuration  
  https://demo.akvorado.net/docs/configuration
- Akvorado Internal Design  
  https://demo.akvorado.net/docs/internals
`,_a=e({default:()=>va}),va=`---
type: tech
slug: tech/akvorado-traffic-analysis-workflow
title: |
  Akvorado Traffic Analysis Tutorial: Top Talkers, Anomalies, and Capacity Planning
description: |
  A repeatable Akvorado Console workflow for using Top Talkers, ASN/country distribution, traffic direction, and time-series changes to support troubleshooting and capacity planning.
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.45
  changefreq: monthly
  lastmod: build
---
## Analysis prerequisites

After Akvorado is deployed, the real value is not attractive charts. The value is converting flow data into repeatable operational questions. Common questions include which device or VLAN consumes internet bandwidth, whether backup links actually carry traffic, whether a spike comes from one host, whether external traffic concentrates around unexpected ASNs or countries, and whether capacity upgrades are supported by data.

Before analysis, validate data quality. Exporters must send flows consistently, Inlet metrics should show packet counters increasing, Outlet should continue writing into ClickHouse, and only then should Console be used for trend interpretation. If the data source itself is unstable, Top Talkers and geography charts may reflect exporter interruption, sampling changes, or failed SNMP enrichment rather than real traffic behavior.

## Recommended analysis workflow

\`\`\`mermaid
flowchart LR
  A["Confirm data ingestion<br/>Inlet metrics / exporter packets"]
  B["Select time window<br/>business hours, peak, incident time"]
  C["Review aggregate volume<br/>edge, interface, direction"]
  D["Break down Top Talkers<br/>source, destination, ASN, country"]
  E["Correlate evidence<br/>SNMP, Syslog, NMS alerts"]
  F["Produce conclusion<br/>capacity, anomaly, action"]
  A --> B
  B --> C
  C --> D
  D --> E
  E --> F
\`\`\`

<!-- media-description:for mermaid:1 -->
The important rule is not to start with one IP address. Confirm the time window first, check aggregate volume, split talkers and direction, then correlate with SNMP, Syslog, and NMS alerts. For [IT Monitoring and Management Systems](/services/it-monitoring/), flow analysis is usually the second layer of evidence that explains why an indicator is abnormal. It should not replace the alerting system.
<!-- media-description:end -->

![Akvorado Console home traffic overview](./akvorado-console-home-traffic-overview-annotated.png)

<!-- media-description:for ./akvorado-console-home-traffic-overview-annotated.png -->
The Console home view is a useful first checkpoint. The markers can be read in order:
1. **Ingestion status**: flows/s and exporters confirm whether Inlet is receiving flow data and how many exporters are identified.
2. **Traffic summary charts**: top source AS, top destination AS, protocol distribution, and time-series spikes show the main traffic sources at a glance.
3. **Last flow panel**: lets the operator verify exporter, interface, and enrichment fields before deeper analysis starts.
<!-- media-description:end -->

## Top Talkers analysis

Top Talkers is the easiest Akvorado use case to understand, but it is also easy to misuse. If the largest IP is treated as the source of the problem, NAT gateways, proxies, VPN servers, or backup servers may be blamed incorrectly. A more stable method switches dimensions in sequence:

1. **Source address**: identify which internal IP, VLAN, or site sends the most traffic.
2. **Destination address**: check whether traffic is concentrated around SaaS, cloud platforms, CDN, backup endpoints, or unknown external hosts.
3. **Direction**: distinguish upload, download, site-to-site traffic, and east-west data-center traffic.
4. **Port/protocol**: decide whether the behavior matches expected services such as backup, video meetings, file sync, VPN, or heavy DNS/HTTP(S).
5. **ASN/country**: if outbound traffic concentrates around unfamiliar ASNs or countries, correlate with DNS, proxy, or firewall logs before drawing conclusions.

Keep a normal baseline during analysis. A cloud backup every morning or weekly system-update traffic may be expected. The real issue is behavior that deviates from baseline: wrong time, wrong destination, wrong source device, wrong direction, or sudden growth large enough to affect service quality.

## Anomaly interpretation

Abnormal traffic does not always mean a security incident. It can be user behavior, backup scheduling, cloud sync, weak network design, or device misconfiguration. Akvorado helps narrow the scope first, then the team can decide whether packet capture, endpoint inspection, or firewall logs are needed.

1. **Short traffic spike**: check whether it is concentrated on one exporter or interface. If only one device spikes, exporter sampling, template behavior, or reboot timing may be involved.
2. **Large outbound connection volume**: review destination ASN, country, and port, then compare DNS and proxy logs. Do not classify traffic as hostile only because the country looks unfamiliar.
3. **High internal traffic**: if source and destination are both internal, check backup jobs, file migration, virtualization movement, or NAS synchronization.
4. **Possible DDoS or scanning**: flow data can confirm direction, source concentration, and protocol distribution, but packet content and firewall rule hits still need separate evidence.
5. **Slow long-term increase**: this usually looks more like capacity pressure than a single incident. Use 95th percentile, peak/off-peak gap, and periodic trend comparison.

## Capacity planning

If flow analysis is only used after incidents, its value is underestimated. Akvorado can also support capacity planning for office internet edge, data-center egress, site VPN, backup links, and large file synchronization.

1. **Define observation period**: include at least one complete business cycle, such as 7 days, 30 days, or a monthly reporting cycle.
2. **Watch 95th percentile**: average hides peaks, while max values are easily polluted by one-off events.
3. **Separate direction and type**: review internet upload/download, site-to-site traffic, internal east-west traffic, and backup/sync traffic separately.
4. **Mark known events**: software updates, backup retries, campaigns, relocations, and hardware refreshes should be annotated to avoid false growth conclusions.
5. **Translate into decisions**: the conclusion should answer whether to upgrade circuits, shift backup windows, apply QoS, or change topology.

## No-data troubleshooting sequence

1. **Exporter packets**: use \`tcpdump\` on the collector to confirm UDP flow packets reach the expected port.
2. **Inlet metrics**: check counters such as \`akvorado_inlet_flow_input_udp_packets_total\` and confirm exporters appear.
3. **Exporter address**: if the reported exporter address is unreliable, evaluate \`use-src-addr-for-exporter-addr\`.
4. **Kafka/Outlet path**: if Inlet receives data but Console stays empty, inspect Kafka topic flow, Outlet consumer behavior, and ClickHouse writes.
5. **Blank GeoIP/ASN fields**: this usually indicates enrichment data or configuration problems, not necessarily missing flow data.
6. **Query time window**: if Console time range does not overlap with the actual exporter data window, it will look empty.

## Operational cadence

Akvorado works best as part of scheduled inspection, not only during incidents. At least monthly or quarterly, summarize edge volume, Top Talkers, site traffic, ASN/country distribution, and major spikes. If the organization already uses Zabbix, LibreNMS, Grafana, or Graylog, Akvorado reports should align with the existing alert timeline so bandwidth, error rate, device state, and flow evidence share one incident context.

In WalksCloud network and monitoring services, this evidence is converted into trackable improvement work: shifting backup windows, redesigning VLANs, limiting specific egress paths, upgrading circuits, strengthening firewall rules, or improving remote-site return paths. The tool itself is not the outcome. Turning traffic visibility into executable decisions is the real value of flow analysis.

## References

- Akvorado Usage  
  https://demo.akvorado.net/docs/usage
- Akvorado Operations  
  https://demo.akvorado.net/docs/operations
- Akvorado Troubleshooting  
  https://demo.akvorado.net/docs/troubleshooting
- Akvorado Configuration  
  https://demo.akvorado.net/docs/configuration
`,ya=e({default:()=>ba}),ba=`---
type: tech
slug: tech/akvorado-traffic-analysis-workflow
title: |
  Akvorado 流量分析教學：Top Talkers、異常流量與容量規劃
description: |
  以 Akvorado Console 的查詢與圖表為核心，說明如何從 Top Talkers、ASN/國家分布、流量方向與時間序變化建立可重複的流量分析流程。
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.45
  changefreq: monthly
  lastmod: build
---
## 分析前提

Akvorado 部署完成後，真正有價值的不是「看到漂亮圖表」，而是能把流量資料轉成可重複判讀的營運問題。常見問題包含：哪台設備或哪個 VLAN 長期吃掉出口頻寬、備援線路是否真的承擔流量、異常尖峰是否來自單一主機、對外連線是否集中到不合理的 ASN 或國家，以及容量擴充是否有數據支撐。

在開始分析前，先確認資料品質。Exporter 必須穩定送出 flow，Inlet 要能穩定接收封包，Outlet 要能持續把資料寫入 ClickHouse，Console 才能用來判斷趨勢。若資料來源本身不穩，後續任何 Top Talkers（在指定時間窗內流量最高的來源、目的或分類對象）或地理分布都可能只是 exporter 中斷、sampling 調整或 SNMP enrichment 失敗造成的假象。

本文會反覆使用幾個 Akvorado 術語，先用中文說明如下：

1. **Inlet**：Inlet 是 Akvorado 接收 NetFlow/IPFIX/sFlow 封包的服務，負責先把 exporter 送來的 flow 封包收進 collector，再交給後面的 Kafka 與 Outlet 處理。
2. **Outlet**：Outlet 是從 Kafka 讀取 flow 訊息、解析欄位、補充 metadata，並把結果寫入 ClickHouse 的服務；若 Inlet 有收到資料但 Console 沒內容，Outlet 是必查環節。
3. **ClickHouse**：ClickHouse 是 Akvorado 用來保存大量 flow 資料的欄式資料庫，負責支撐長時間區間、Top Talkers 與多維度查詢。
4. **sampling**：sampling 是取樣概念，代表設備可能只送出部分封包或抽樣後的流量紀錄；它適合看趨勢與主要流量來源，但精度會受取樣率影響。
5. **SNMP enrichment**：SNMP enrichment 是 Akvorado 透過 SNMP 查詢設備介面名稱、描述等資訊，將原本難讀的介面 index 補成可理解的欄位，方便後續判讀流量來源與出口。

## 建議分析流程

\`\`\`mermaid
flowchart LR
  A["確認資料正在進來<br/>Inlet / exporter 封包"]
  B["鎖定時間窗<br/>平日、尖峰、事件時間"]
  C["先看總量<br/>出口、介面、方向"]
  D["拆 Top Talkers<br/>來源、目的、ASN、國家"]
  E["交叉比對<br/>SNMP、Syslog、NMS 告警"]
  F["產出判讀<br/>容量、異常、改善動作"]
  A --> B
  B --> C
  C --> D
  D --> E
  E --> F
\`\`\`

<!-- media-description:for mermaid:1 -->
這個流程的重點是不要一開始就鑽進單一 IP。先確認時間窗，再確認總量，接著拆出主要 talkers 與流量方向，最後才把結果與 SNMP、Syslog、NMS 告警對齊。對 [IT 監控與管理系統](/services/it-monitoring/) 而言，flow 分析通常是「解釋為什麼指標異常」的第二層資料，而不是取代原本的告警系統。
<!-- media-description:end -->

![Akvorado Console 首頁流量概覽](./akvorado-console-home-traffic-overview-annotated.png)

<!-- media-description:for ./akvorado-console-home-traffic-overview-annotated.png -->
Console 首頁適合作為第一步檢查點。圖中標示可依序閱讀：
1. **資料進入狀態**：flows/s 與 exporters 可確認 Inlet 是否正在收到 flow，以及目前有多少 exporter 被辨識。
2. **流量摘要圖表**：Top source AS、Top destination AS、protocol 分布與時間序圖能快速觀察主要流量來源與尖峰。
3. **Last flow 欄位**：可回頭檢查 exporter、介面與 enrichment 欄位是否符合預期，避免後續分析建立在錯誤資料上。
<!-- media-description:end -->

## Top Talkers 分析

Top Talkers 指的是在指定時間範圍內，依流量大小排序後最主要的來源、目的或分類對象，例如某個 IP、VLAN、ASN、國家或 port/protocol。這是最容易被理解的 Akvorado 使用情境，但也最容易被誤用。若直接把最大流量 IP 當成問題來源，可能會誤判 NAT Gateway、Proxy、VPN Server 或備份伺服器。比較穩定的做法是依序切換維度：

1. **來源位址**：找出哪些內部 IP、VLAN 或站點送出最多流量。
2. **目的位址**：確認流量是否集中到特定 SaaS、雲端平台、CDN、備份端點或未知外部主機。
3. **方向**：分清楚是上行、下行、站點間流量，還是資料中心內部橫向流量。
4. **Port/Protocol**：判斷是否符合預期服務，例如備份、視訊會議、檔案同步、VPN 或大量 DNS/HTTP(S)。
5. **ASN/國家**：對外流量若集中到陌生 ASN 或不合理國家，需再與 DNS、Proxy 或防火牆 log 交叉確認。

分析時要保留「正常基準」。例如同一間辦公室每天上午固定有雲端備份，或每週固定有系統更新流量，這些不是異常。真正需要處理的是流量型態偏離基準：時間不對、目的地不對、來源設備不對、方向不對，或同一行為突然放大到影響服務品質。

## 異常流量判讀

異常流量不一定代表資安事件，也可能是使用者行為、備份排程、雲端同步、弱網路設計或設備設定錯誤。Akvorado 的價值在於先縮小範圍，再決定是否要進一步用封包側錄、端點調查或防火牆 log 驗證。

1. **短時間尖峰**：先看是否集中於單一 exporter 或單一介面；若只有一台設備突然放大，可能是 exporter sampling、template 或設備重啟造成。
2. **大量對外連線**：先看目的 ASN、國家與 port，再比對 DNS 查詢與 Proxy log。不要只因國家陌生就判定為攻擊。
3. **大量站內流量**：若來源與目的都在內部，需確認是否為備份、檔案搬移、虛擬化遷移或 NAS 同步。
4. **疑似 DDoS 或掃描**：flow 可協助確認方向、來源集中度與協定分布，但封包內容與防火牆命中規則仍需另外佐證。
5. **長期緩慢上升**：通常比較像容量問題，而不是單次事件。應看 95th percentile、尖離峰差距與週期趨勢。

## 容量規劃

流量分析若只用在事件發生後排障，價值會被低估。Akvorado 也可以支援容量規劃，尤其是辦公室 Internet Edge、資料中心出口、站點 VPN、備援線路與大型檔案同步場景。

1. **定義觀察週期**：至少涵蓋一個完整業務週期，例如 7 天、30 天或一個月結帳/報表週期。
2. **觀察 95th percentile**：不要只看平均值。平均值會掩蓋尖峰，最大值又容易被單一事件污染。
3. **拆分方向與類型**：分別看 Internet 上下行、站點間流量、內部橫向流量與備份/同步流量。
4. **標記已知事件**：例如軟體更新、備份重跑、促銷活動、搬遷、設備汰換，避免把已知事件誤判為自然成長。
5. **轉成決策語言**：結論應回到「是否升級線路」、「是否調整備份時間」、「是否做 QoS」、「是否改變拓樸」。

## 查不到資料時的檢查順序

1. **Exporter 是否送出封包**：在 collector 上用 \`tcpdump\` 確認 UDP flow port 是否有封包進來。
2. **Inlet metrics 是否增加**：檢查 \`akvorado_inlet_flow_input_udp_packets_total\` 這類指標是否出現 exporter。
3. **Exporter address 是否正確**：若設備回報的 exporter address 不可靠，評估是否使用 \`use-src-addr-for-exporter-addr\`。
4. **Kafka/Outlet 是否正常**：若 Inlet 有資料但 Console 沒資料，往 Kafka topic、Outlet consumer 與 ClickHouse 寫入方向查。
5. **GeoIP/ASN 是否空白**：這通常是 enrichment 資料來源或設定問題，不一定是 flow 收不到。
6. **時間窗是否選錯**：Console 查詢時間若沒有覆蓋 exporter 實際送資料的時間，也會看起來像沒有資料。

## 營運節奏

Akvorado 適合被放進固定巡檢，而不是只在異常時打開。建議每月或每季至少整理一次出口總量、Top Talkers、站點流量、ASN/國家分布與重大尖峰。若企業已有 Zabbix、LibreNMS、Grafana 或 Graylog，Akvorado 的報告應與既有告警時間軸對齊，讓頻寬、錯誤率、設備狀態與 flow 證據可以放在同一個事件脈絡中。

行雲資訊在網路與監控服務中，會把這類資料轉成可追蹤的改善項目：例如調整備份時間、重新規劃 VLAN、限制特定出口、擴充線路、補強防火牆規則或改善遠端站點回傳路徑。工具本身不是成果，能把觀測資料變成可執行決策，才是流量分析真正的價值。

## 參考資料

- Akvorado Usage  
  https://demo.akvorado.net/docs/usage
- Akvorado Operations  
  https://demo.akvorado.net/docs/operations
- Akvorado Troubleshooting  
  https://demo.akvorado.net/docs/troubleshooting
- Akvorado Configuration  
  https://demo.akvorado.net/docs/configuration
`,xa=e({default:()=>Sa}),Sa=`---
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
`,Ca=e({default:()=>wa}),wa=`---
type: tech
slug: tech/app-ownership-transfer-process
title: |
  App 所有權與開發者帳戶移轉流程
description: |
  行雲資訊整理 iOS、Android、macOS 的 App 所有權移轉步驟，涵蓋簽章資產、帳戶權限、審核文件與交接驗證，避免移轉後無法更新或回滾。
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.45
  changefreq: monthly
  lastmod: build
---
## 為何需要

- 客戶希望 App 從技術委外轉回自有帳戶，或將品牌交接給新的營運單位。
- 不同平台（Apple/Google）對所有權轉移有不同流程，稍有疏忽就需重新上架。

## 前置技術盤點

1. **應用資產總表**：盤點 App 名稱、Bundle ID、Package Name、簽章憑證、推播金鑰與後端 callback 設定。
2. **商店與財務狀態**：確認付款帳戶、訂閱、內購與未結清款項狀態，避免移轉中斷。
3. **第三方依賴盤點**：列出推播、分析、授權、地圖、登入等第三方服務帳戶，確認是否需同步轉移或重綁。
4. **版本凍結窗口**：在移轉期間凍結非必要版本更新，避免新舊帳戶同時變更造成不可回溯狀態。

## 所有權移轉流程

1. **準備平台必要條件**：依平台要求準備 D-U-N-S (Data Universal Numbering System, 資料環球編碼系統) 號碼、權限授權、聯絡人與帳戶驗證資訊。
2. **建立還原基準點**：保留移轉前版本、簽章資訊與關鍵後端設定，確保發生問題可快速回復。
3. **提交移轉申請**：依 Apple/Google 流程提交轉移，並以固定欄位追蹤審核狀態與補件內容。
4. **切換憑證與金鑰**：移轉完成後替換 API key、Webhook secret、推播憑證與服務帳戶權限。
5. **功能回歸測試**：驗證登入、推播、訂閱/內購、VPN 或關鍵業務流程在新帳戶下可正常運作。

## 常見風險與排除順序

1. **移轉成功但商店更新失敗**：先檢查簽章與憑證是否仍綁定舊帳戶，再檢查版本號策略。
2. **推播功能異常**：比對新帳戶憑證、Topic/Package 與伺服器端 token 驗證設定。
3. **訂閱狀態異常**：先查商店後台合約與財務狀態，再檢查伺服器端訂閱驗證邏輯。
4. **第三方服務無法呼叫**：確認 callback 白名單、API key 權限與來源網域是否已同步更新。

## 技術檢核清單

1. 所有應用識別碼與簽章資產已完整盤點。
2. 移轉窗口內版本凍結與還原基準點已建立。
3. 移轉後關鍵功能（登入、推播、訂閱）皆可重現通過。
4. 舊帳戶高權限金鑰已撤除，新帳戶權限已最小化。
5. 審核補件與變更紀錄可追溯至單一事件時間軸。

## 參考資料

- Apple App Transfer Documentation  
  https://developer.apple.com/help/app-store-connect/transfer-an-app/
- Google Play App Transfer Help  
  https://support.google.com/googleplay/android-developer/answer/6230247
`,Ta=e({default:()=>Ea}),Ea=`---
type: tech
slug: tech/budget-nas-refresh-plan
title: |
  NAS Refresh and Data Synchronization Strategy Under Extreme Budget Constraints
description: |
  A phased NAS migration approach for low-budget environments that prioritizes data safety first, then executes controlled synchronization, validation, and cutover.
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.45
  changefreq: monthly
  lastmod: build
---
## Typical constraints

- Existing NAS platform is beyond support lifecycle, with frequent disk bad-sector signs.
- Budget allows only minimum viable replacement and cannot fund dual-NAS redundancy in one phase.

## Pre-migration risk definition

1. **Data classification**: split datasets into critical, deferrable, and reconstructable categories so limited time is spent on highest-value content first.
2. **Recovery targets**: define Recovery Point Objective (RPO) and Recovery Time Objective (RTO) explicitly to decide whether this phase targets data safety only or both safety and service continuity.
3. **Capacity and growth estimate**: project 6 to 12 months of growth to avoid immediate re-saturation after migration.
4. **Disk health checks**: run SMART and bad-block checks before migration to determine whether legacy equipment can safely act as short-term transition source.

## Phased migration strategy

1. **Temporary full backup**: create one full backup to external storage or cloud space and perform sampled restore validation.
2. **New NAS baseline setup**: complete RAID, filesystem, shared-folder, account-permission, and snapshot schedule setup, and establish a rollback baseline checkpoint before cutover.
3. **Incremental synchronization cutover**: run initial full sync first, then switch to incremental sync to minimize final downtime.
4. **Integrity verification**: validate with three layers: file count, total size, and sampled hash checks.
5. **Legacy NAS disposition**: if still stable, downgrade to secondary backup or cold archive; if unstable, perform secure wipe and retirement.

## Common issues and triage order

1. **Sync speed too slow**: verify network bottlenecks and disk IOPS first, then tune concurrency and schedule windows.
2. **Permission inheritance errors**: compare ACL and group-mapping rules, and use read-only verification before reopening writes.
3. **Files visible but applications fail**: check path, case sensitivity, symbolic links, and application-dependent files.
4. **Unexpected post-cutover capacity growth**: inspect snapshot-retention and deduplication policy assumptions.

## Technical validation checklist

1. Critical data has full backup coverage and sampled restore success.
2. New NAS baseline (RAID, permission, snapshot, sync schedule) is fully configured.
3. Data-integrity comparison before and after final cutover is consistent.
4. Legacy NAS has explicit secondary role or secure retirement completion.
5. No persistent access anomalies across at least one full business cycle.

## References

- rsync Manual  
  https://download.samba.org/pub/rsync/rsync.1
- Synology Knowledge Center  
  https://kb.synology.com/
- QNAP Documentation  
  https://www.qnap.com/en/how-to
`,Da=e({default:()=>Oa}),Oa=`---
type: tech
slug: tech/budget-nas-refresh-plan
title: |
  極限預算下的 NAS 汰換與資料同步策略
description: |
  面對預算受限且設備老化的 NAS 場域，行雲資訊以分階段同步、驗證與切換方式，先守住資料安全，再逐步完成汰換。
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.45
  changefreq: monthly
  lastmod: build
---
## 常見限制

- 現有 NAS 已超過支援年限，硬碟頻繁出現 bad sector。
- 預算僅能購買最基本配置，無法一次完成雙 NAS 或備援架構。

## 前置風險界定

1. **資料分級**：先把資料分成核心資料、可延後資料與可重建資料，避免有限時間把資源花在低優先項目。
2. **恢復目標**：明確定義復原點目標（RPO）與復原時間目標（RTO），決定本輪是否只做資料安全，或同時追求服務可用性。
3. **容量與成長估算**：估算近 6-12 個月成長量，避免新 NAS 上線後很快再度滿載。
4. **硬碟健康檢查**：在遷移前先做 SMART 與壞軌檢查，確認舊設備是否適合短期過渡使用。

## 分階段遷移策略

1. **臨時全量備份**：先用外接儲存或雲端空間做一次全量備份，並抽樣還原確認可用性。
2. **新 NAS 基準設定**：完成 RAID、檔案系統、共享資料夾、帳號權限與快照排程，先建立可回滾的還原基準點。
3. **增量同步切換**：先跑第一次全量同步，再用增量同步縮短最終切換停機時間。
4. **完整性比對**：以檔案數量、容量與雜湊抽樣三層比對，確認非僅「看得到檔案」而是「資料可用」。
5. **舊 NAS 降級用途**：舊設備若可運作，轉為次級備份或冷資料保存；若已不穩定，則執行安全清除與退役。

## 常見問題與排除順序

1. **同步速度過慢**：先確認網路瓶頸與磁碟 IOPS，再調整同步併發與時段。
2. **權限繼承錯亂**：比對 ACL/群組對應規則，必要時先以唯讀方式驗證再放行寫入。
3. **資料看似完整但應用無法使用**：優先檢查路徑、大小寫、符號連結與應用相依檔案是否一致。
4. **切換後容量異常暴增**：檢查快照保留與重複資料策略，排除因保留規則過寬造成的空間誤判。

## 技術檢核清單

1. 核心資料已完成全量備份且可抽樣還原。
2. 新 NAS 的 RAID、權限、快照與同步排程皆已完成基準化設定。
3. 最終切換前後的資料完整性比對結果一致。
4. 舊 NAS 已明確轉為次級用途或完成安全退役。
5. 遷移後至少跨一個業務週期無持續性存取異常。

## 參考資料

- rsync Manual  
  https://download.samba.org/pub/rsync/rsync.1
- Synology Knowledge Center  
  https://kb.synology.com/
- QNAP Documentation  
  https://www.qnap.com/en/how-to
`,ka=e({default:()=>Aa}),Aa=`---
type: tech
slug: tech/closed-hypervisor-migration-validation
title: |
  Migration Validation Guide for Closed Hypervisor Environments
description: |
  A repeatable feasibility workflow for closed hypervisors using backup extraction, intermediate validation, and PVE import, with rollback checkpoints at each stage.
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.45
  changefreq: monthly
  lastmod: build
---
## When this guide is needed

- The source virtualization platform is closed or legacy and cannot export standard images directly, yet migration to PVE (Proxmox VE, Proxmox Virtual Environment) must be evaluated.
- Original vendor support is discontinued or unavailable, and third-party feasibility validation is required.
- Common source constraints include backup-only export paths, proprietary image formats, no control-plane agent support, or hardware-bound licensing.

## Pre-assessment and risk definition

1. **Asset inventory**: record VM count, OS versions, disk sizes, partition types, NIC models, and critical service dependencies.
2. **Backup-type verification**: determine whether available artifacts are full-image, file-level, or snapshot-chain backups.
3. **Consistency target definition**: define which attributes must remain stable post-migration (for example MAC, IP, service ports, boot window).
4. **Risk register**: flag high-risk items early (legacy kernels, private storage drivers, hardware-bound licensing, UEFI/legacy mismatch).

## Repeatable migration validation workflow

1. **Acquire operable backup set**: export minimal reconstructable dataset without mutating source environment, with SHA256 checksums.
2. **Intermediate restore**: restore in a neutral environment and verify filesystem mount, key service startup, system time, and network stack.
3. **Format conversion**: convert with \`qemu-img\` (or equivalent) into PVE-friendly format (\`qcow2\`/\`raw\`) and record block/cache/sparse parameters.
4. **PVE import**: attach converted image to test VM with conservative hardware settings (\`host\`-compatible CPU, \`virtio-scsi\`, matching NIC model); for legacy Windows workloads, pre-plan boot mode and storage-controller compatibility before first boot.
5. **Boot and service checks**: verify boot logs, disk mounting, network service, and application dependency behavior against intermediate baseline.
6. **Data-consistency validation**: run sampled critical-folder and database checksum checks plus application health endpoints.

## Common technical issues and triage order

1. **Boot succeeds but networking fails**: inspect legacy udev NIC rules, interface renaming (\`eth0\` to \`ens*\`), and netplan/network-script mappings.
2. **Disk mount errors**: compare \`fstab\` UUID entries with migrated disk UUIDs and repair in rescue mode if needed.
3. **System stuck in initramfs**: usually storage-controller driver or rootfs UUID mismatch; rebuild initramfs and retest.
4. **Application starts but licensing fails**: check hardware-fingerprint binding (MAC/UUID/CPU ID) and plan controlled rebinding window.
5. **Performance below source baseline**: evaluate cache mode, IO scheduler, vCPU topology, NUMA, and memory-balloon settings.

## Windows legacy boot-disk note (IDE)

1. **Identify source-generation behavior first**: older Windows VMs from legacy hypervisor or P2V paths may only have stable boot support on IDE/SATA.
2. **Keep IDE system disk for first validation pass**: start with \`i440fx\` and IDE system disk to confirm baseline boot before controller optimization.
3. **Validate system and data disk separately**: ensure system-disk bootability first, then migrate data disks to \`virtio-scsi\` in staged tests.
4. **Switch controller only after driver readiness**: install required guest drivers, reboot verification, then move system disk from IDE to VirtIO.
5. **Preserve full rollback point**: before each controller switch, create full backup. If boot failure occurs, restore full machine state (config plus data), because some OS self-repair paths may prevent clean rollback by settings-only reversion.

## Technical validation checklist

1. Source and converted image checksums match and integrity is confirmed.
2. Intermediate and PVE test results are consistent for service behavior.
3. Critical applications run and complete minimal business workflow on PVE.
4. Recovery steps are reproducible with at least one full backup-to-boot rehearsal.
5. Performance baselines (CPU, memory, disk IO, network latency) are recorded for comparison.

## References

- Proxmox VE Documentation  
  https://pve.proxmox.com/pve-docs/
- \`qemu-img\` Manual  
  https://www.qemu.org/docs/master/tools/qemu-img.html
- QCOW2 Image Format  
  https://qemu.readthedocs.io/en/latest/interop/qcow2.html
`,ja=e({default:()=>Ma}),Ma=`---
type: tech
slug: tech/closed-hypervisor-migration-validation
title: |
  封閉 hypervisor 遷移驗證手冊
description: |
  當原平台無法直接導出 VM 時，行雲資訊以備份取得、中繼驗證與 PVE 匯入三段流程評估可行性，並保留每階段回復路徑。
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.45
  changefreq: monthly
  lastmod: build
---
## 什麼時候需要這份手冊

- 客戶擁有封閉或老舊的虛擬化平台，無法直接匯出標準映像檔，卻需要評估是否能轉換到 PVE (Proxmox VE, Proxmox Virtual Environment)。
- 原始廠商可能已停止維護或拒絕提供支援，因此需要第三方協助確認遷移可行性。
- 原平台常見限制包含：只能透過備份工具導出、映像格式私有化、控制面無法安裝 agent、授權鎖定特定硬體。

## 前置盤點與風險界定

1. **資產盤點**：先列出 VM 數量、OS 版本、磁碟大小、分割區格式、網卡型別與關鍵服務依賴（DB、LDAP、授權服務）。
2. **備份型態確認**：辨識可取得的是整機映像、檔案層備份還是快照鏈；不同型態對還原與轉換路徑影響很大。
3. **一致性要求定義**：先決定遷移後需維持哪些一致性目標，例如 MAC 維持、IP 維持、服務埠維持、開機時間窗。
4. **風險清單建立**：提前標記高風險項（舊版 kernel、私有磁碟驅動、軟體授權綁硬體、UEFI/Legacy 差異），避免正式轉換才發現阻塞。

## 轉換驗證流程（可重複執行）

1. **取得可操作備份集**：在不破壞來源環境的前提下匯出最小可重建資料集，並附 checksum（SHA256）確保搬運過程未損毀。
2. **中繼還原**：先在通用中繼環境還原並嘗試開機，確認檔案系統可掛載、主要服務可啟動、系統時間與網路堆疊正常。
3. **格式轉換**：以 \`qemu-img\` 或等效工具轉成 PVE 友善格式（常見為 \`qcow2\`/\`raw\`），同時記錄 block size、cache mode、sparse 行為。
4. **PVE 匯入**：將映像掛到測試 VM，先用保守硬體配置（CPU \`host\` 或相容型號、\`virtio-scsi\`、對應網卡驅動）啟動；若為舊版 Windows，需預先規劃 Legacy 啟動與控制器相容性。
5. **開機與服務檢核**：依序檢查開機日誌、磁碟掛載、網路服務、應用程序依賴，確認與中繼環境觀測結果一致。
6. **資料一致性比對**：抽樣比對關鍵資料夾、資料庫 checksum、應用層健康檢查 endpoint，確認非僅「可開機」而是「可運行」。

## 常見技術問題與排除順序

1. **可開機但網路失效**：先查 udev 舊網卡規則、介面命名變更（\`eth0\` -> \`ens*\`）與驅動匹配，再修正 netplan/network scripts。
2. **磁碟掛載錯誤**：比對 \`fstab\` UUID 與新磁碟 UUID 是否一致，必要時進 rescue mode 修正掛載參數。
3. **系統卡在 initramfs**：通常與儲存控制器驅動或 rootfs UUID 不符有關，先重建 initramfs 再驗證。
4. **應用啟動但授權失敗**：檢查是否綁定來源硬體指紋（MAC/UUID/CPU ID），必要時先規劃授權轉綁窗口。
5. **效能低於來源平台**：先看磁碟快取模式與 IO scheduler，再比對 vCPU 拓樸、NUMA 綁定與記憶體 balloon 設定。

## Windows Legacy 開機磁碟注意事項（IDE）

1. **先判斷來源系統世代**：若來源 Windows VM 來自舊版 hypervisor 或 P2V，常只內建 IDE/SATA 啟動路徑，直接改成 VirtIO 可能無法開機。
2. **首輪驗證保留 IDE 開機碟**：在 PVE 測試 VM 先保留一顆 IDE 系統碟，機器型號可先用 \`i440fx\`，確認可進入系統後再做控制器調整。
3. **資料碟與系統碟分開驗證**：系統碟先求可開機，資料碟可分階段掛入 \`virtio-scsi\` 測速，避免一次改完導致無法判斷失敗點。
4. **驅動補齊後再切換控制器**：完成 Windows 端驅動安裝與重開測試後，才把系統碟由 IDE 轉到 VirtIO，並重新確認 boot order。
5. **保留回退點**：每次切換控制器前先做完整備份並確認可還原；若開機失敗，應以備份還原整機（含設定與資料）退回上一版，避免部分 OS 因硬體變更記錄或自動修復導致即使把設定改回去也無法復原。

## 技術檢核清單

1. 來源與轉換映像 checksum 一致，檔案完整性可驗證。
2. 中繼環境與 PVE 測試環境的服務檢核結果一致。
3. 關鍵應用可在 PVE 上正常啟動並完成最小業務流程。
4. 故障回復步驟可重現：至少一次從備份集重做到可開機。
5. 性能基準已記錄：CPU、記憶體、磁碟 IO、網路延遲有可比較數據。

## 參考資料

- Proxmox VE Documentation  
  https://pve.proxmox.com/pve-docs/
- \`qemu-img\` Manual  
  https://www.qemu.org/docs/master/tools/qemu-img.html
- QCOW2 Image Format  
  https://qemu.readthedocs.io/en/latest/interop/qcow2.html
`,Na=e({default:()=>Pa}),Pa=`---
type: tech
slug: tech/controlled-ap-dual-path
title: |
  Change Workflow for Managed AP Environments with Dual Network Paths
description: |
  A controlled change workflow for managed AP environments that keeps policy behavior consistent across primary and backup network paths.
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.45
  changefreq: monthly
  lastmod: build
---
## Why this is needed

- In dual-path office networks, connectivity failover without policy alignment often creates access drift: users connect successfully but receive incorrect authorization behavior.
- Managed AP environments require consistency across controller policy, switching, and gateway layers; otherwise switchover events can trigger auth failures, guest-isolation gaps, or unintended routing bypass.
- This workflow treats dual-path change as a policy-governance operation, not just a connectivity operation.

## Pre-change technical baseline

1. **Topology and path mapping**: define AP, SSID, VLAN, uplink switch, gateway, and primary/backup route relationships.
2. **Policy consistency inventory**: compare ACL, RADIUS, DNS, NTP, guest isolation, and internal-access controls across both paths.
3. **Version compatibility checks**: confirm controller, AP firmware, and network-device versions remain stable during switchover.
4. **Rollback baseline**: preserve AP and controller snapshots for deterministic recovery and diff validation.

## Change workflow

1. **Low-impact pilot first**: validate authentication, roaming, guest isolation, and internal-access behavior in lower-risk zones.
2. **Backup path first, primary path second**: stabilize backup behavior before applying equivalent policy to primary route.
3. **Staged rollout with metrics**: deploy in AP groups and monitor connection rate, disconnect rate, and auth-failure rate per batch.
4. **Primary/backup switchover drills**: test DNS, RADIUS, and business-critical service continuity after route switch.
5. **Policy convergence and freeze**: after stability is confirmed, converge ACL and routing definitions and archive the applied version.

## Common issues and triage order

1. **Authentication failure after switchover**: verify RADIUS reachability and shared secret first, then inspect backup-path ACL scope.
2. **Roaming quality degradation**: compare power, channel, minimum RSSI, and roaming-related parameters across paths.
3. **Guest connects but cannot reach internet**: inspect DNS, NAT, and guest-VLAN egress controls.
4. **Time-window disconnect spikes**: check PoE stability and AP firmware anomalies at affected sites.

## Technical validation checklist

1. Primary and backup policy behavior (ACL, RADIUS, DNS) is consistent and test-verified.
2. Each rollout batch has rollback baseline, change record, and ownership trace.
3. Critical services and authentication flows remain available after switchover.
4. Observation window shows no sustained increase in disconnect or auth-failure metrics.
5. Controller and AP version set is validated for long-run stability.

## References

- UniFi WiFi Best Practices  
  https://help.ui.com/hc/en-us/articles/221029967
- RFC 5216 (EAP-TLS)  
  https://www.rfc-editor.org/rfc/rfc5216
`,Fa=e({default:()=>Ia}),Ia=`---
type: tech
slug: tech/controlled-ap-dual-path
title: |
  受控型 AP 與雙路網路並存的變更流程
description: |
  行雲資訊以主備路徑一致性為核心，規劃受控型 AP 在雙路網路下的設定變更、驗證與回復流程，降低切換風險。
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.45
  changefreq: monthly
  lastmod: build
---
## 為何需要

- 當辦公場域同時存在主路徑與備援路徑時，若僅做連線切換而未做策略一致化，最容易出現「可連上但權限錯位」的問題。
- 受控型 AP 環境必須在控制器、交換器與閘道器三層同時維持一致策略，否則主備切換時會發生認證失敗、訪客隔離失效或流量繞行。
- 這篇流程重點在於把雙路網路切換從「操作行為」提升為「可驗證的策略變更流程」。

## 前置技術基準

1. **拓樸與路徑映射**：先定義 AP、SSID、VLAN、上行交換器、Gateway 與主備路徑對應關係。
2. **策略一致性盤點**：逐項比對 ACL、RADIUS、DNS、NTP、訪客隔離與內部流量規則是否一致。
3. **版本相容檢查**：確認控制器、AP 韌體與網通設備組合在主備切換期間可穩定共存。
4. **回復基準建置**：保存控制器與 AP 設定快照，作為回滾與差異分析基準。

## 變更流程

1. **先在低影響區域驗證**：先選低風險區域驗證認證、漫遊、訪客隔離與內網存取行為。
2. **先備援再主路徑**：先調整備援路徑與控制器策略，確認穩定後再套用主路徑。
3. **分批套用並觀測**：依 AP 群組分批推送，每批觀測連線率、掉線率與認證失敗率。
4. **主備切換演練**：執行切換並確認 DNS、RADIUS、核心業務服務都能維持可用。
5. **策略收斂與封版**：穩定後收斂 ACL 與路由規則，完成版本封存，避免後續漂移。

## 常見問題與排除順序

1. **切換後認證失敗**：先查 RADIUS 可達性與共享密鑰，再查備援路徑 ACL 是否漏放。
2. **漫遊品質下降**：比對功率、信道、最小 RSSI 與 fast roaming 相關參數是否一致。
3. **訪客可連但無法上網**：優先檢查 DNS、NAT 與訪客 VLAN 出口策略。
4. **特定時段掉線增加**：檢查 PoE 供電穩定度與 AP 韌體異常，排除硬體層因素。

## 技術檢核清單

1. 主備策略（ACL、RADIUS、DNS）一致且具可驗證結果。
2. 分批變更具回復基準、變更紀錄與責任人。
3. 主備切換後關鍵服務與認證可用性正常。
4. 觀測期內掉線率與認證失敗率無持續上升。
5. 控制器與 AP 版本組合通過長期穩定性驗證。

## 參考資料

- UniFi WiFi Best Practices  
  https://help.ui.com/hc/en-us/articles/221029967
- RFC 5216 (EAP-TLS)  
  https://www.rfc-editor.org/rfc/rfc5216
`,La=e({default:()=>Ra}),Ra=`---
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

1. **Version and branch policy**: use a clear \`main/release/hotfix\` path and fixed tag format such as \`ios-v1.2.3\` and \`android-v1.2.3\`.
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
`,za=e({default:()=>Ba}),Ba=`---
type: tech
slug: tech/custom-app-review-transfer
title: |
  客製化 App 品牌化、上架與所有權移轉實務
description: |
  行雲資訊整理客製 App 在多平台的品牌化、商店審核與所有權移轉流程，協助團隊降低審核反覆與帳戶交接風險。
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.45
  changefreq: monthly
  lastmod: build
---
## 工作內容

- 依需求調整 UI、字串與品牌元素，並維持各平台一致的版本標識。
- 準備上架所需的描述、隱私政策、測試帳號與審核說明。
- 管理原始碼分支、建置參數與簽章資產，確保可重現建置流程。

## 前置技術基準

1. **版本與分支策略**：建立 \`main/release/hotfix\` 的版本路徑，並固定 tag 規則（例如 \`ios-v1.2.3\`、\`android-v1.2.3\`），避免跨平台版本混淆。
2. **簽章資產盤點**：先確認 iOS 憑證、Provisioning Profile、Android Keystore、推播金鑰與 API key 的所有權與到期日。
3. **建置環境一致性**：固定 Xcode、Android Gradle Plugin、SDK 與依賴版本，降低「本機可編譯、CI 不可編譯」的環境落差。
4. **權限最小化**：在送審前逐項檢查 App 權限（位置、通知、VPN、背景執行），避免過度申請造成審核風險。

## 審核重點

1. **Google Play**：確認資料安全聲明、權限用途、VPN 使用說明與可重現的測試流程，確保審核可完整走完主要功能路徑。
2. **Apple 平台**：依 Apple Developer Program 規範準備測試帳號與功能說明，特別是 VPN、登入與遠端服務相關功能的審核備註。
3. **審核可重現性**：將所有測試步驟寫成固定順序（登入、連線、主要功能、登出），避免審核人員因路徑不清造成誤判。

## 所有權移轉與環境切換流程

1. **移轉前凍結變更**：在移轉窗口前凍結新功能合併，只保留必要修補，避免移轉期間版本漂移。
2. **識別碼與權限映射**：盤點 App ID、Bundle ID、套件名稱、推播 topic、Webhook endpoint，確保移轉後對應不變。
3. **平台移轉申請**：依平台流程提交所有權移轉，並持續追蹤審核狀態與補件需求。
4. **憑證與金鑰輪替**：移轉完成後立即替換 API key、Webhook secret、服務帳號金鑰，阻斷舊權限殘留風險。
5. **功能回歸檢查**：重新驗證登入、推播、VPN 連線、訂閱/授權檢查等關鍵流程，確認環境切換後功能正常。

## 常見風險與排除順序

1. **簽章不一致導致無法更新**：先檢查憑證鏈與簽章指紋，再確認商店後台是否仍綁定舊憑證。
2. **推播失效**：比對新舊憑證、Topic/Bundle ID 與伺服器推播權杖，排除環境切換後的權限殘留。
3. **審核反覆退件**：把審核回饋轉成固定欄位（問題點、重現步驟、修正版本），避免重複補件卻無法定位問題。
4. **移轉後回報異常**：優先檢查 API key、Webhook secret、第三方回呼白名單是否已全部更新。

## 技術檢核清單

1. 版本標識在 iOS/Android/macOS 一致且可追溯。
2. 簽章資產與憑證到期日已盤點並記錄輪替窗口。
3. 移轉前後的核心功能（登入、推播、VPN）皆可重現通過。
4. 舊權限已撤除，新權限最小化原則已落地。
5. 審核補件歷程已結構化，後續可沿用同一流程。

## 參考資料

- Apple Developer Program Documentation  
  https://developer.apple.com/programs/
- Google Play Console Help  
  https://support.google.com/googleplay/android-developer/
`,Va=e({default:()=>Ha}),Ha=`---
type: tech
slug: tech/datacenter-move-ups-improvement
title: |
  Data Center Relocation and UPS Improvement SOP
description: |
  A practical relocation SOP using power inventory, maintenance-window control, dual-path switching, and UPS bypass validation to reduce outage risk.
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.45
  changefreq: monthly
  lastmod: build
---
## Pre-migration assessment

1. **Asset and load inventory**: enumerate servers, network devices, storage, UPS units, and cooling assets with both rated and measured power draw.
2. **Power and cooling capacity review**: validate site power capacity, wiring routes, PDU circuit allocation, and cooling headroom.
3. **Service dependency mapping**: define deterministic startup/shutdown sequence for database, directory, licensing, and monitoring services.
4. **Downtime and risk-window definition**: evaluate move distance, time constraints, temporary network design, backup power strategy, and acceptable outage window.

## Relocation and UPS-improvement workflow

1. **Maintenance-window control**: freeze nonessential changes before migration to prevent concurrent configuration drift.
2. **Batch shutdown and labeling**: power down by dependency sequence and label each device by rack position, power circuit, and network-port mapping.
3. **Move and recabling**: rebuild links from topology and wiring plans, restoring core switching, storage, and identity services first.
4. **UPS improvement and controlled switching**: complete bypass, dual-path feed integration, and monitoring onboarding, then execute controlled switch drills.
5. **Host and service recovery**: restart in predefined order and verify routing, time sync, monitoring alerts, and backup schedule integrity.

## Power and stability validation

1. UPS runtime meets design target under peak-load profile.
2. Dual-path switching is reproducible without service interruption.
3. Core-service recovery sequence and dependency behavior match planned order.
4. Monitoring alerts, SNMP telemetry, and notification channels trigger as expected.
5. No sustained power or network anomaly alerts are observed during first 24 hours after cutover.

## Common issues and triage order

1. **Post-cutover reachability gaps**: validate VLAN/ACL alignment against expected topology, then verify DNS/NTP state.
2. **Alert storm during UPS switching**: recalibrate thresholds for the new load profile when old-site thresholds are no longer representative.
3. **Localized circuit overload**: compare measured draw to planned allocation and rebalance high-load devices across PDU/circuit paths.
4. **Post-move backup failures**: verify storage path, licensing-service availability, and schedule timezone consistency.

## References

- Uptime Institute Tier Standard Overview  
  https://uptimeinstitute.com/tiers
- APC UPS Runtime Concepts  
  https://www.se.com/ww/en/faqs/FA156527/
`,Ua=e({default:()=>Wa}),Wa=`---
type: tech
slug: tech/datacenter-move-ups-improvement
title: |
  資料中心搬遷與 UPS 改善 SOP
description: |
  行雲資訊以功耗盤點、停機窗口控管、雙路供電與 UPS 旁路驗證，建立可落地的搬遷 SOP，降低中斷與電力風險。
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.45
  changefreq: monthly
  lastmod: build
---
## 前期盤點

1. **設備與負載盤點**：列出伺服器、網通、儲存、UPS、空調等設備，並同時記錄額定功耗與實測功耗。
2. **電力與冷卻可用性盤點**：確認新機房供電容量、配線路徑、PDU 迴路分配與冷卻能力，避免搬遷後才發現局部過載。
3. **服務依賴與啟停序盤點**：整理資料庫、目錄、授權、監控等核心服務依賴，建立可執行的啟停順序。
4. **停機窗口與風險界線盤點**：評估搬遷距離、時間限制、臨時網路與備援供電條件，明確定義可接受停機窗口。

## 搬遷與 UPS 改善流程

1. **維護窗口控管**：先凍結非必要變更，確保搬遷期間不會同時發生配置漂移。
2. **分批下線與標記**：依依賴順序下線服務，設備逐台標記機櫃位置、電源迴路與網路埠位。
3. **搬運與重佈線**：依拓樸與配線表重建連線，優先恢復核心交換器、儲存與身份服務。
4. **UPS 改善與受控切換**：完成旁路開關、雙路供電與監控接入後執行切換演練，確認供電切換不造成中斷。
5. **主機與服務復歸**：按既定順序啟動主機與服務，逐項檢查路由、時間同步、告警與備份排程。

## 電力與穩定性檢核

1. UPS 續航時間符合設計目標（含尖峰負載情境）。
2. 雙路供電切換可重現且不中斷服務。
3. 核心服務復歸順序與依賴關係符合預期。
4. 監控告警、SNMP 指標與通知通道正常觸發。
5. 搬遷後 24 小時內無持續性電力或網路異常。

## 常見問題與排除

1. **上線後部分服務不可達**：先比對 VLAN/ACL 與預期拓樸，再檢查 DNS/NTP 一致性。
2. **UPS 切換告警暴增**：檢查是否沿用舊機房閾值，必要時依新負載校正告警門檻。
3. **局部迴路過載**：比對實測功耗與配電規畫，將高負載設備分散至不同 PDU/迴路。
4. **搬遷後備份失敗**：優先檢查儲存路徑、授權服務與排程時區一致性。

## 參考資料

- Uptime Institute Tier Standard Overview  
  https://uptimeinstitute.com/tiers
- APC UPS Runtime Concepts  
  https://www.se.com/ww/en/faqs/FA156527/
`,Ga=e({default:()=>Ka}),Ka=`---
type: tech
slug: tech/it-inventory-recovery-manual
title: |
  IT Asset Inventory and Management-Access Recovery Guide
description: |
  A field-ready recovery guide for unfamiliar IT environments, combining asset inventory, credential convergence, and baseline documentation control.
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.45
  changefreq: monthly
  lastmod: build
---
## Objective

- Recover device access and configuration visibility quickly when documentation and vendor handover are incomplete.
- Produce inventory and SOP-ready records for sustainable follow-up operations.

## Pre-work safety principles

1. **Read first, change later**: avoid direct routing, firewall, or identity-policy modifications before baseline inventory is complete.
2. **Least-privilege operation**: collect with read-only accounts first; if elevation is required, log actor, time, and commands.
3. **Evidence retention**: timestamp all config exports, credential resets, and device identity artifacts.
4. **Sensitive-data segregation**: keep credentials, certificates, and keys outside general documents.

## Inventory and recovery steps

1. **Discovery and asset identification**: run Nmap, SNMP walk, or vendor tools to build initial inventory (IP, MAC, OS).
2. **Fingerprint matching and deduplication**: align hostname, serial, MAC, and management address to remove duplicates or NAT-induced identity confusion.
3. **Credential and certificate recovery**: consolidate admin accounts, default credentials, keys, and certificates; if unknown, recover via controlled console reset workflow.
4. **Configuration baseline backup**: export firewall, switch, server, and virtualization configs into version-controlled storage with source and timestamp labels.
5. **Management-plane convergence**: unify access through controlled VPN/jump-host/management VLAN paths.
6. **Monitoring onboarding**: connect critical devices to Zabbix, LibreNMS, or SNMP baselines with CPU, interface-error, disk-health, and backup-state indicators.
7. **Documentation output**: update topology map, account boundaries, maintenance windows, and emergency escalation paths.

## Common issues and triage order

1. **Discovery results do not match physical count**: verify ACL, management VLAN, and route isolation before segmented rescans.
2. **Can log in but cannot export config**: check account role limits; use temporary elevated account only with immediate revocation.
3. **Service anomalies after credential reset**: compare old/new automation bindings and API permission dependencies.
4. **Alert flood after monitoring onboarding**: calibrate thresholds using baseline period data and separate critical from informational alerts.

## Technical validation checklist

1. Asset inventory provides unique identification without duplicate entries.
2. Core-device configuration baselines are backed up and restorable.
3. Management access converges to controlled networks and controlled identities.
4. Monitoring baseline is active and key alerts trigger correctly.
5. Documentation fields match actual environment state and are usable for next-line operations.

## References

- Nmap Reference Guide  
  https://nmap.org/book/man.html
- Zabbix Documentation  
  https://www.zabbix.com/documentation/current/en/manual
- LibreNMS Documentation  
  https://docs.librenms.org/
- CIS Controls v8  
  https://www.cisecurity.org/controls/v8
`,qa=e({default:()=>Ja}),Ja=`---
type: tech
slug: tech/it-inventory-recovery-manual
title: |
  資訊設備盤點與管理權限救援指南
description: |
  接手陌生環境時，行雲資訊透過設備盤點、帳號收斂與設定備份回收，快速重建網路與伺服器的管理控制權。
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.45
  changefreq: monthly
  lastmod: build
---
## 目標

- 在缺乏文件或原廠交接的情況下，快速取得設備存取權與設定資料。
- 建立後續維運所需的清單與 SOP。

## 前置安全原則

1. **先讀取、後變更**：在未完成基準盤點前，不直接變更路由、防火牆與身份系統設定。
2. **最小權限作業**：優先使用唯讀帳號蒐集資訊；必須提權時記錄操作人、時間與指令。
3. **證據留存**：所有設定匯出、帳號重設、設備識別資料都需保留時間戳與來源設備。
4. **敏感資料分層保存**：密碼、憑證與金鑰不得混放於一般文件，避免二次外洩風險。

## 盤點與救援步驟

1. **掃描與定位**：使用 Nmap、SNMP Walk 或廠商工具掃描內網，建立裝置清單（IP、MAC、作業系統）。
2. **指紋比對與去重**：把 hostname、序號、MAC 與管理介面地址對齊，排除重複或 NAT 後看似不同的同一設備。
3. **帳號與憑證回收**：整理管理帳號、預設密碼、金鑰與憑證；未知時透過 console 或受控重設程序建立新帳號。
4. **設定基準備份**：匯出防火牆、交換器、伺服器與虛擬化平台設定，存入版本庫並標記取得時間與來源。
5. **管理平面收斂**：統一管理入口（VPN/跳板機/受控管理 VLAN），避免多個未受控入口同時存在。
6. **監控接入**：為核心設備接入 Zabbix、LibreNMS / SNMP，先建立 CPU、介面錯誤、磁碟健康與備份狀態基準。
7. **文件化**：更新拓樸圖、帳號邊界、維護窗口與緊急聯絡路徑，確保後續維運可接續。

## 常見問題與排除順序

1. **掃描結果與實際設備數不一致**：先檢查 ACL、管理 VLAN 與路由隔離，再決定是否需分段掃描。
2. **可登入但無法匯出設定**：檢查角色權限是否僅可讀，必要時建立臨時提權帳號後立即回收。
3. **重設後服務異常**：比對新舊管理帳號綁定的自動化腳本或 API 權限，排除憑證/金鑰失效。
4. **監控接入後告警過多**：先以基準期資料校正門檻，再細分重要告警與資訊告警。

## 技術檢核清單

1. 設備清單可唯一識別且無重複條目。
2. 核心設備設定已完成基準備份且可還原。
3. 管理入口已收斂到受控網段與受控帳號。
4. 監控基準已建立，關鍵告警可準確觸發。
5. 文件與實際環境欄位一致且可供後續維運直接使用。

## 參考資料

- Nmap Reference Guide  
  https://nmap.org/book/man.html
- Zabbix Documentation  
  https://www.zabbix.com/documentation/current/en/manual
- LibreNMS Documentation  
  https://docs.librenms.org/
- CIS Controls v8  
  https://www.cisecurity.org/controls/v8
`,Ya=e({default:()=>Xa}),Xa=`---
type: tech
slug: tech/it-refresh-migration-blueprint
title: |
  IT Equipment Refresh and Low-Disruption Cutover Blueprint
description: |
  A mirror-config and staged-cutover blueprint for routers, switches, and servers that minimizes downtime while preserving rollback safety.
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.45
  changefreq: monthly
  lastmod: build
---
## When this blueprint is needed

- Existing infrastructure is near end-of-support or end-of-warranty but long downtime is unacceptable.
- Temporary or rental infrastructure must be migrated to formal production hardware under tight schedule constraints.

## Refresh blueprint

1. **Mirror configuration**: clone key policy from old infrastructure onto new devices (VLAN, ACL, VPN, routing) with version control.
2. **Parallel validation**: test new devices in lab or backup path and verify firmware compatibility and monitoring baselines.
3. **Staged cutover**: switch by planned priority (for example backup path first, then primary path) within controlled window.
4. **Rollback plan**: predefine full rollback path (switch back to old hardware, restore baseline config) for maintenance-window execution.
5. **Maintenance-window declaration**: issue a planned maintenance notice that transient disconnects are normal during cutover, monitoring will continue throughout the window, and immediate recovery is not guaranteed.
6. **Post-cutover observation**: monitor for at least one full business day to confirm alerts, performance, and user reports remain acceptable.

## Technical preparation before cutover

1. **Baseline snapshots**: capture old-device configuration, route tables, ACL state, and software-version records.
2. **Compatibility matrix**: validate VLAN tag behavior, MTU, VPN cipher suites, and BGP/OSPF behavior across old/new stack.
3. **Monitoring baseline**: establish pre-cutover packet loss, latency, CPU, and interface-error indicators for comparison.

## Post-cutover priority checks

1. **Connectivity**: core services, branch connectivity, and remote VPN paths are reachable; DNS/NTP status is correct.
2. **Policy parity**: ACL/NAT/routing behavior matches old environment to avoid hidden authorization regressions.
3. **Performance and capacity**: compare latency, throughput, and interface-error trends before/after cutover.
4. **Alert health**: monitoring rules still trigger and notify correctly for host, interface, and service checks.

## Common issues and triage order

1. **Partial service loss after cutover**: inspect route and ACL differences first, then NAT and DNS migration completeness.
2. **VPN connects but application path fails**: compare cipher suites, MTU/MSS, and fragmentation behavior.
3. **Alert flood after migration**: verify threshold carryover suitability and recalibrate where hardware baseline changed.
4. **Rollback mismatch**: if old/new state drifted, restore from baseline snapshot first before selective replay.

## Technical validation checklist

1. New/old config deltas are versioned and traceable.
2. Rollback can be fully executed within maintenance-window limit.
3. Core connectivity and policy parity checks pass after cutover.
4. Observation window shows no sustained degradation in performance or alert quality.
5. Incident learnings are appended back into SOP for future cutovers.

## References

- RFC 1918: Address Allocation for Private Internets  
  https://www.rfc-editor.org/rfc/rfc1918
- NIST SP 800-61r2 (Incident Handling)  
  https://csrc.nist.gov/publications/detail/sp/800-61/rev-2/final
`,Za=e({default:()=>Qa}),Qa=`---
type: tech
slug: tech/it-refresh-migration-blueprint
title: |
  資訊設備汰換與低中斷切換藍圖
description: |
  行雲資訊以鏡像設定、平行驗證與分段切換藍圖，協助路由器、交換器與伺服器汰換時把停機與風險壓到最低。
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.45
  changefreq: monthly
  lastmod: build
---
## 何時需要

- 現有設備將停產或保固到期，卻無法接受長時間停機。
- 需要在短時間內遷移到新平台（例如將臨時租用設備換成正式產線設備）。

## 汰換藍圖

1. **鏡像設定**：先在新設備複製一份與舊設備相同的設定（VLAN、ACL、VPN、路由），並保留版本控管。
2. **平行測試**：於實驗環境或備援線路測試新設備，確認韌體版本、相容性與監控指標都正常。
3. **分段切換**：安排切換視窗，依據優先順序將服務逐段導到新設備（例如先切換備援線路，再切換主要線路）。
4. **回復計畫**：預先寫好 rollback 步驟（切回舊設備、還原設定），在維護窗口內若觀察到異常即可回復。
5. **維護窗口宣告**：提前告知維護窗口，在該時段內若有短暫斷線屬正常現象；我們仍會監控但不承諾即刻回復。
6. **切換後穩定性觀測**：切換後觀察至少一個完整營業日，確認監控告警、效能與使用者回報都在可接受範圍。

## 切換前技術準備

1. **基準快照**：保留舊設備配置快照、路由表、ACL 與版本資訊，作為回復比對基準。
2. **相容性矩陣**：先確認新舊設備在 VLAN Tag、MTU、VPN Cipher、BGP/OSPF 行為的一致性。
3. **監控對照**：先建立切換前告警基準（封包遺失、延遲、CPU、介面錯誤），切換後才有可比較依據。

## 切換後重點檢查

1. **網路連通性**：核心服務、分支辦公室與遠端 VPN 皆可連通，且 DNS/NTP 狀態正常。
2. **策略一致性**：ACL、NAT、路由策略與舊環境一致，避免「可連線但權限錯誤」的隱性故障。
3. **效能與容量**：比對切換前後延遲、吞吐與介面錯誤率，確認沒有異常退化。
4. **告警健康度**：監控系統中的主機、介面、服務告警規則仍可正常觸發與通知。

## 常見問題與處理順序

1. **切換後部分服務無法連線**：先檢查路由與 ACL 差異，再看 NAT 與 DNS 設定是否完整移植。
2. **VPN 可連線但應用異常**：比對加密套件、MTU/MSS 與分段封包行為，排除協定相容性問題。
3. **告警大量湧入**：先確認監控閾值是否沿用舊硬體基準，必要時重新校正告警門檻。
4. **回復計畫未命中**：檢查是否有新舊設定交錯寫入，回復時需先還原到基準快照再逐步套用。

## 技術檢核清單

1. 新舊設備配置差異已可追溯且具版本記錄。
2. 維護窗口內回復步驟可在時限內完整執行。
3. 切換後核心服務連通性與策略一致性皆通過檢查。
4. 觀測期內效能與告警指標未出現持續性退化。
5. 故障處理紀錄已回填到 SOP，供後續切換沿用。

## 參考資料

- RFC 1918: Address Allocation for Private Internets  
  https://www.rfc-editor.org/rfc/rfc1918
- NIST SP 800-61r2 (Incident Handling)  
  https://csrc.nist.gov/publications/detail/sp/800-61/rev-2/final
`,$a=e({default:()=>eo}),eo=`---
type: tech
slug: tech/jamf-audit-cross-team
title: |
  Jamf MDM Audit Readiness: Cross-Team Process and Documentation Design
description: |
  A cross-team operating model for Jamf audit readiness, with repeatable evidence templates, incident routing, and ownership boundaries.
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.45
  changefreq: monthly
  lastmod: build
---
## Audit challenge

- Jamf Pro and Jamf Protect controls are often spread across many policies; audits become slow when ownership is unclear.
- Auditors typically request incident records, policy-change history, and evidence archives.
- Most teams do have data, but evidence chains break because records live in disconnected systems (Jamf Pro, Jamf Protect, ticketing, document stores).

## Define audit scope first (avoid last-minute evidence scramble)

1. **Governance scope**: who can change policy, who can approve exceptions, and who owns closure decisions.
2. **Technical scope**: device inventory, encryption posture, key-policy coverage, and threat-response timing.
3. **Evidence scope**: policy versions, device lists, incident handling records, change history, and report outputs.

Build a control-mapping table before audit day so every audit question maps to a specific Jamf data source and owner.

\`\`\`mermaid
flowchart LR
  A[Audit Requirements] --> B[Control Mapping Table]
  B --> C[Jamf Pro Evidence: Smart Groups / Policy / Inventory]
  B --> D[Jamf Protect Evidence: Alerts / Severity / Timeline]
  C --> E[Ticketing and Change Management]
  D --> E
  E --> F[Audit Package and Signoff]
\`\`\`

<!-- media-description:for mermaid:1 -->
This diagram shows how audit requirements should be converted into a control-mapping table before evidence collection starts. Each requirement is tied to Jamf Pro, Jamf Protect, ticketing, and change-management sources so the final audit package can be traced back to a responsible owner and data source.
<!-- media-description:end -->

## WalksCloud implementation model

1. **Role ownership**: define responsibility for policy authoring, incident response, and report export across MIS, security, HR, and related teams.
2. **Document templates**: maintain reusable policy lists, device audit sheets, and incident records for direct PDF export.
3. **Incident workflow**: when Jamf Protect triggers an alert, create a ticket automatically, assign security review, and attach logs plus handling summary at closure.
4. **Version control**: keep policies, scripts, and audit documents in Git or equivalent systems for who/when/why traceability.

## Practical implementation steps

### Step 1: Define RACI and accountability boundaries

- \`R (Responsible)\`: MIS platform operators who implement and deploy controls.
- \`A (Accountable)\`: security owners who define audit criteria and risk acceptance.
- \`C (Consulted)\`: HR/compliance stakeholders for personnel lifecycle and policy obligations.
- \`I (Informed)\`: business managers receiving audit outcomes and remediation timeline.

Core principle: policy change ownership, evidence retention, and exception approval must all be traceable.

### Step 2: Freeze audit scope with Smart Groups

- Avoid handpicked machine lists; define scope with Smart Group conditions (OS version, encryption status, agent state).
- Apply naming conventions and usage notes to every Smart Group.
- Separate "audit Smart Groups" from day-to-day operations Smart Groups to prevent unintended coupling.

### Step 3: Event flow and SLA discipline

- After Jamf Protect severity classification, create tickets automatically with severity tags.
- Define SLA per severity (for example, high-risk alerts acknowledged within 4 hours and initial assessment within 24 hours).
- Closure must include three items: original alert, analysis timeline, and remediation/recovery timing.

\`\`\`mermaid
flowchart TD
  A[Jamf Protect Alert] --> B{Severity}
  B -->|High| C[Immediate Ticket + On-call Notification]
  B -->|Medium/Low| D[Standard Queue]
  C --> E[Security Triage and Isolation]
  D --> E
  E --> F[Remediation or Exception Approval]
  F --> G[Closure Report and Knowledge Base Update]
\`\`\`

<!-- media-description:for mermaid:2 -->
This diagram describes the incident-handling path after a Jamf Protect alert is created. Severity determines whether the event enters immediate notification or the standard queue, but both paths still require triage, remediation or exception approval, and a closure record.
<!-- media-description:end -->

### Step 4: Versioning and evidence archive controls

- Put policies, configuration profiles, scripts, and report templates under version control.
- Standardize every evidence pack as: \`Scope -> Control -> Evidence -> Conclusion -> Exception\`.
- Before archival, run a third-party readability drill: a non-project member should be able to reconstruct the evidence chain.

## Recommended audit evidence checklist

- Audit-period reports (policy inventory, incident summary, device list).
- Improvement actions (automation updates, threshold tuning, policy refinement).
- Change logs (when, who, and why each control changed).
- Exception register (rationale, approver, and expiry date).

## Practical benefits

- Audit preparation shifts from "find data during audit" to "continuous evidence readiness".
- Jamf acts as control plane, ticketing as response plane, and version control as evidence plane, creating an end-to-end governance loop.
- When standards evolve, teams can expand controls from existing templates instead of rebuilding the process from scratch.

## References

- Jamf Pro Documentation: Smart Groups  
  https://learn.jamf.com/en-US/bundle/jamf-pro-documentation-current/page/Smart_Groups.html
- Jamf Pro Developer: API Overview  
  https://developer.jamf.com/jamf-pro/
- Jamf Pro Developer: Jamf Log Stream  
  https://developer.jamf.com/jamf-pro/docs/jamf-log-stream
- Jamf Protect Documentation: About Jamf Protect / Alert Severity  
  https://learn.jamf.com/r/en-US/jamf-protect-documentation
`,to=e({default:()=>no}),no=`---
type: tech
slug: tech/jamf-audit-cross-team
title: |
  Jamf MDM 稽核支援：跨部門流程與文件設計
description: |
  行雲資訊整合 IT、資安與管理部門，建立可稽核的 Jamf 證據、通報與責任分工流程，提升長期維運一致性。
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.45
  changefreq: monthly
  lastmod: build
---
## 稽核挑戰

- Jamf Pro / Jamf Protect 組態分散於多個政策，稽核時若找不到負責人會耗費大量時間。
- 稽核單位常要求提供事件紀錄、政策變更紀錄與封存資料。
- 多數團隊的問題不是「沒有資料」，而是資料散落在不同系統（Jamf Pro、Jamf Protect、工單系統、檔案庫），導致證據鏈斷裂。

## 稽核範圍先定義（避免臨場補件）

1. **治理面**：誰有權改政策、誰可核准例外、誰負責結案。
2. **技術面**：裝置盤點、加密狀態、關鍵政策覆蓋率、威脅事件回應時效。
3. **證據面**：政策版本、裝置清單、事件處置紀錄、變更紀錄與報告輸出。

建議先定義「控制項對照表」：每一個稽核問題要能對應到 Jamf 資料來源與負責部門，避免稽核當天才找資料。

\`\`\`mermaid
flowchart LR
  A[稽核需求清單] --> B[控制項對照表]
  B --> C[Jamf Pro 證據: Smart Groups / Policy / Inventory]
  B --> D[Jamf Protect 證據: Alert / Severity / Timeline]
  C --> E[工單與變更管理系統]
  D --> E
  E --> F[稽核報告包與簽核]
\`\`\`

<!-- media-description:for mermaid:1 -->
這張圖說明稽核需求應先轉成控制項對照表，再開始收集證據。每項需求都要能連到 Jamf Pro、Jamf Protect、工單與變更管理來源，讓最終稽核報告包能追溯到負責人與資料來源。
<!-- media-description:end -->

## 行雲資訊的做法

1. **角色分工**：定義政策撰寫、事件回應、報告匯出的負責部門（例如 MIS、資安、HR）。
2. **文件模板**：建立政策清單、裝置稽核表與事件紀錄表，稽核時即可輸出 PDF 提供審查。
3. **事件流程**：一旦 Jamf Protect 報警，自動建立工單並請資安窗口確認；結案後附上 log 與處置摘要。
4. **版本控管**：政策、腳本與稽核文件都放在 Git 或版本系統，便於追蹤誰在何時修改。

## 實作步驟（可直接套用）

### Step 1：建立 RACI 與責任邊界

- \`R (Responsible)\`：MIS 平台管理者，負責政策建置與部署。
- \`A (Accountable)\`：資安主管，負責稽核口徑與風險接受。
- \`C (Consulted)\`：HR / 法遵，負責人員異動與合規要求同步。
- \`I (Informed)\`：業務單位主管，接收稽核結果與改善排程。

關鍵原則是「誰改政策、誰留證據、誰核准例外」三件事要可追溯。

### Step 2：用 Smart Group 固化稽核口徑

- 不要用手動挑機器清單，改用 Smart Group 條件定義稽核範圍（例如 OS 版本、加密狀態、Agent 安裝狀態）。
- 每個 Smart Group 需有命名規則與用途註記，避免後續變成黑箱條件。
- 建議把「稽核版 Smart Group」與「日常維運 Smart Group」分開，避免互相影響。

### Step 3：事件流程與時效 SLA

- Jamf Protect 告警分級後，自動建立工單並標註嚴重度。
- 為每個等級設定 SLA（例如高風險告警 4 小時內回應、24 小時內給初判）。
- 結案必須附三項資訊：原始告警、分析過程、處置與復原時間。

\`\`\`mermaid
flowchart TD
  A[Jamf Protect 告警] --> B{嚴重度分級}
  B -->|High| C[立即建單 + 值班通知]
  B -->|Medium/Low| D[進一般工單佇列]
  C --> E[資安初判與隔離]
  D --> E
  E --> F[修復/例外核准]
  F --> G[結案報告與知識庫回填]
\`\`\`

<!-- media-description:for mermaid:2 -->
這張圖描述 Jamf Protect 告警產生後的事件處理路徑。嚴重度會決定事件進入立即通知或一般工單佇列，但兩條路徑最後都需要完成資安初判、修復或例外核准，以及結案紀錄。
<!-- media-description:end -->

### Step 4：版本控管與證據封存

- Policy、Configuration Profile、腳本與報告模板都要進版控。
- 每次稽核證據包都要有固定結構：\`範圍 -> 控制項 -> 證據 -> 結論 -> 例外\`。
- 封存前先做一次「第三方視角」演練：由非專案成員依文件重建證據鏈，確認可讀性。

## 稽核技術證據清單

- 稽核期間的報告（政策清單、事件摘要、裝置列表）。
- 後續改善建議（例如自動化腳本、警示門檻調整）。
- 變更紀錄（政策異動時間、異動人、異動原因）。
- 例外清單（為何例外、誰核准、何時到期）。

## 實務效益

- 稽核準備從「臨時找資料」轉成「平時即留痕」，通常可大幅降低跨部門溝通成本。
- 把 Jamf 當成控制面、工單系統當成處置面、版控系統當成證據面，可形成完整閉環。
- 即使稽核標準更新，仍可沿用既有模板快速擴充控制項，而不需重建流程。

## 參考資料

- Jamf Pro Documentation: Smart Groups  
  https://learn.jamf.com/en-US/bundle/jamf-pro-documentation-current/page/Smart_Groups.html
- Jamf Pro Developer: API Overview  
  https://developer.jamf.com/jamf-pro/
- Jamf Pro Developer: Jamf Log Stream  
  https://developer.jamf.com/jamf-pro/docs/jamf-log-stream
- Jamf Protect Documentation: About Jamf Protect / Alert Severity  
  https://learn.jamf.com/r/en-US/jamf-protect-documentation
`,ro=e({default:()=>io}),io=`---
type: tech
slug: tech/jamf-trust-vpn-control
title: |
  Jamf Trust and Controlled VPN Access Governance
description: |
  A practical governance model for Jamf Trust policy rollout, endpoint activation, and controlled VPN/private-access alignment under audit-ready rules.
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.45
  changefreq: monthly
  lastmod: build
---
## Why use Jamf Trust

- When organizations need "only compliant users on compliant devices can connect," username/password VPN alone is no longer audit-ready.
- Common gaps include delayed offboarding revocation, unmanaged personal devices entering corporate paths, and hard-to-trace concurrent sessions.
- Jamf Trust combines user identity and device posture in access decisions. Even with valid credentials, access is denied when enrollment or policy posture requirements are not met.
- The governance outcome is a shift from connectivity-only VPN operation to auditable, traceable, and recoverable access governance.

## Core components

1. **[Jamf Security Cloud](https://radar.wandera.com)**: policy decision plane for groups, posture, and resource authorization.
2. **Endpoint delivery channel**: Jamf Pro is usually most stable for macOS/iOS; Windows and Android can be delivered through Intune or other MDM-managed channels as long as activation is controlled.
3. **Private Access (optional)**: use when internal services must be published through controlled connectors.
4. **Traditional VPN fallback**: for legacy protocols, IPSec/OpenVPN with RADIUS can serve as fallback while retaining unified group and audit logic.

## Planning and boundary definition

1. **Protected-resource inventory first**: list systems to control (monitoring, file services, admin interfaces, APIs) before opening paths.
2. **Authorization matrix**: define role-to-resource mapping and temporary-access path for contractors/audit users.
3. **Identity source strategy**: align with enterprise IdP where available; otherwise define a traceable local-group baseline.
4. **Explicit deny conditions**: encode unregistered device, expired certificate, suspended account, and risky posture as testable policy rules.

## Build sequence

1. **Create minimum viable policy**: start with a small IT cohort and validate allow/deny behavior before expansion.
2. **Deploy and activate Jamf Trust app**: complete activation and posture reporting in test cohort before production rollout.
3. **Configure Private Access when needed**: define resources, DNS naming, and connector routing without over-publishing broad network ranges.
4. **Integrate fallback VPN if required**: keep RADIUS groups aligned with Jamf authorization groups to avoid policy contradiction.
5. **Enable event tracking**: capture at least sign-in success/failure, policy deny events, posture changes, and group-change records.

## Technical validation checklist

1. **Functional checks**: compliant user plus compliant device can connect; compliant user plus noncompliant device is denied; disabled account loses access quickly.
2. **Authorization checks**: same account in different groups sees only approved resources.
3. **Failover checks**: simulate Private Access outage and verify fallback VPN keeps minimal operation with continuous audit logging.
4. **Traceability checks**: each alert maps back to user, device, timestamp, source IP, policy, and response action.

## Common failures and triage order

1. **User logs in but cannot see resource**: verify group mapping and policy precedence first.
2. **Device appears enrolled but still denied**: inspect posture conditions (OS version, required agents, certificate state).
3. **Specific subnet instability**: check connector routing and DNS, then compare ACL/firewall enforcement.
4. **Primary/fallback policy conflict**: if Jamf Trust and traditional VPN use different group sources, unify group authority.

## Operations cadence

- **Daily**: review high-risk alerts, failed-sign-in trends, and suspicious source geography.
- **Weekly**: verify group and identity lifecycle sync (offboarding and role changes).
- **Monthly**: run primary/fallback connectivity drills and verify event-export and notification paths.
- **Change management**: for every policy update, record rationale, expected impact, rollback plan, and validation result.

## References

- Jamf Security Cloud Portal (Wandera Radar)  
  https://radar.wandera.com
- Jamf Security Cloud Documentation  
  https://learn.jamf.com/en-US/bundle/security-cloud-documentation/page/Introduction_to_Jamf_Security_Cloud.html
- Jamf Trust Documentation  
  https://learn.jamf.com/en-US/bundle/security-cloud-documentation/page/Jamf_Trust.html
- Jamf Pro Documentation  
  https://learn.jamf.com/en-US/bundle/jamf-pro-documentation/current/Overview.html
`,ao=e({default:()=>oo}),oo=`---
type: tech
slug: tech/jamf-trust-vpn-control
title: |
  Jamf Trust 與受控 VPN 存取治理實務
description: |
  行雲資訊以 Jamf Trust Policy 為核心，整合 Private Access 或 VPN，將裝置、帳號與策略綁定到可稽核的存取流程。
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.45
  changefreq: monthly
  lastmod: build
---
## 為何使用 Jamf Trust

- 當企業需要「只讓符合條件的裝置與帳號連入」時，單純的 VPN 帳密已無法滿足稽核需求。常見缺口包含：離職帳號未即時停權、個人裝置混入公司網段、同帳號在多設備重複登入難以追蹤。
- Jamf Trust 的價值在於把「人員身分」與「裝置狀態」同時納入存取判斷。例如帳號雖正確，但裝置未完成註冊、缺少必要安全基準或未通過政策檢查，連線仍會被拒絕。
- 在實務上，Jamf Trust 與 Jamf Security Cloud 可建立一致的政策中樞，讓 IT 團隊從「只管連不連得上」轉成「可審計、可追溯、可回復」的控管流程。

## 核心元件

1. **[Jamf Security Cloud](https://radar.wandera.com)**：負責 Policy、使用者群組、裝置姿態與資源授權，是主要決策面。
2. **端點部署管道**：macOS/iOS 由 Jamf Pro 派送最穩定，Windows/Android 可由 Intune、其他 MDM 或受控安裝程序派送，核心要求是使用者完成 Activation。
3. **Private Access（可選）**：需要暴露內部服務時才啟用，通常搭配 Connector 把特定資源安全發布給授權群組。
4. **傳統 VPN（備援）**：針對舊系統或非標準協定流量，可搭配 RADIUS 的 IPSec/OpenVPN 作備援入口，但仍以相同人員群組與審計邏輯管理。

## 前置規畫與邊界設定

1. **先定義受保護資源清單**：列出要控管的內部系統（監控平台、檔案服務、管理介面、API），避免把所有網段一次放開。
2. **建立授權矩陣**：用角色對照資源，例如「維運群組可連設備管理網段、一般員工僅能連業務系統」，並預留臨時授權機制給外包或稽核人員。
3. **確定身份來源**：若公司已用 IdP（例如 Entra ID/Google Workspace）則先釐清同步方式；若無則至少建立可追溯的本機群組策略。
4. **定義拒絕條件**：未註冊裝置、過期憑證、停權帳號、風險裝置等情境要在政策中明確寫成可測試規則，而不是口頭約定。

## 建置流程

1. **建立最小可用 Policy**：先做一組最小規模政策（例如 IT 小組），驗證「允許/拒絕」行為與預期一致，再逐步擴大到全公司。
2. **派送並啟用 Jamf Trust App**：先在測試群組完成註冊，確認 Activation token、登入流程、裝置狀態回報皆正常，再推正式環境。
3. **配置 Private Access（若啟用）**：定義 Resource、DNS 命名與 Connector 可達路徑；避免一開始就把整段內網當單一資源發布。
4. **串接備援 VPN（若需要）**：將 RADIUS 群組與 Jamf 授權群組維持一致，確保同一位使用者在主/備援通道上的權限不互相矛盾。
5. **啟用事件追蹤**：至少收集登入成功/失敗、策略拒絕、裝置姿態變更、群組異動四類事件，作為後續稽核與事故追查基礎。

## 技術驗證清單

1. **功能驗證**：授權帳號 + 合規裝置可連線；授權帳號 + 不合規裝置必須被拒絕；停權帳號在短時間內失效。
2. **權限驗證**：同一帳號在不同群組只看到對應資源，不應出現跨群組橫向存取。
3. **切換驗證**：模擬 Private Access 不可用時切到備援 VPN，確認仍保有最低營運能力且審計紀錄不中斷。
4. **追溯驗證**：從任一告警可回查到使用者、裝置、時間、來源 IP、策略名稱與處置紀錄。

## 常見故障與排除順序

1. **使用者可登入但看不到資源**：先檢查群組映射與 Policy 命中順序，再檢查資源是否綁定錯誤群組。
2. **裝置顯示已註冊但仍被拒絕**：優先確認裝置姿態條件（作業系統版本、必要 agent、憑證狀態）是否全部達標。
3. **只有特定網段連線不穩**：檢查 Connector 路由與 DNS 解析，再比對是否被現有 ACL 或防火牆規則攔截。
4. **主備策略互相衝突**：若 Jamf Trust 與傳統 VPN 使用不同群組來源，容易出現一邊放行一邊拒絕，應統一回單一群組主檔。

## 維運要點

- **每日**：查看高風險告警、失敗登入趨勢、異常來源地，避免小量嘗試累積成帳號攻擊事件。
- **每週**：檢查群組與人員異動同步，驗證離職停權、角色調整是否正確反映在政策中。
- **每月**：執行一次主備連線演練，確認 Private Access、備援 VPN、事件匯出與通報流程都可在當月版本下正常運作。
- **變更管理**：每次政策更新都要留下「變更原因、預期影響、回復方式、驗證結果」，讓稽核與維運可重現。

## 參考資料

- Jamf Security Cloud Portal（Wandera Radar）  
  https://radar.wandera.com
- Jamf Security Cloud Documentation  
  https://learn.jamf.com/en-US/bundle/security-cloud-documentation/page/Introduction_to_Jamf_Security_Cloud.html
- Jamf Trust Documentation  
  https://learn.jamf.com/en-US/bundle/security-cloud-documentation/page/Jamf_Trust.html
- Jamf Pro Documentation  
  https://learn.jamf.com/en-US/bundle/jamf-pro-documentation/current/Overview.html
`,so=e({default:()=>co}),co=`---
type: tech
slug: tech/multi-stage-migration-checklist
title: |
  Validation and Rollback Script for Multi-Stage Virtualization Migration
description: |
  A multi-stage migration method for cross-platform virtualization moves, with explicit verification checkpoints and rollback scripts per stage.
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.45
  changefreq: monthly
  lastmod: build
---
## Applicable scenarios

- Migrating from closed or legacy virtualization stacks into PVE (Proxmox Virtual Environment) usually requires multiple export/convert/import hops.
- Format, driver, and virtual-hardware compatibility risks make staged execution with recoverable checkpoints mandatory.

## Pre-migration technical baseline

1. **Source-environment freeze**: block major source changes during migration window to avoid state drift.
2. **Asset mapping table**: maintain VM mapping for name, OS, disks, NICs, and critical services so each VM has an explicit path.
3. **Rollback checkpoints**: preserve source backups, conversion-command versions, and intermediate-node configuration.
4. **Validation scope definition**: define success as systems boot, users can sign in, network connectivity works, and application services are available.

## Multi-stage migration workflow (example)

1. **Extract backups**: obtain VM artifacts via source-platform backup tools and preserve originals unchanged.
2. **Intermediate-platform validation**: restore into readable intermediate environment (for example standard KVM/open toolchain) and verify boot/network/storage driver behavior.
3. **Format conversion**: export to common target formats (\`OVF\`, \`QCOW2\`, etc.) and record conversion commands.
4. **Target import**: import converted artifacts into PVE and adjust virtual hardware parameters as required.
5. **Final validation**: verify service startup, network behavior, storage integrity, licensing state, and run one backup test.

## Required evidence per stage

- Tool/command versions and conversion parameters.
- Verification outcomes (pass/fail) and tested checkpoints.
- On failure, capture error message and rollback action (for example re-export or return to prior stage).

## Common issues and triage order

1. **Cannot boot after conversion**: compare disk-controller type and boot mode (UEFI/legacy), then check missing drivers.
2. **Boots but network fails**: compare NIC model, MAC bindings, and retained \`udev\`/\`netplan\` assumptions.
3. **Application startup fails**: verify licensing binding and system time first, then service dependencies and data paths.
4. **Severe performance regression**: inspect storage format, cache policy, and vCPU topology alignment.

## Technical validation checklist

1. Every VM has complete source-target mapping and conversion record.
2. Source backups and conversion outputs map to rollback checkpoints.
3. Final environment passes boot/connectivity/service validation.
4. At least one restore test succeeds on target platform.
5. Post-migration performance and stability remain within acceptable bounds.

## References

- Proxmox VE Documentation  
  https://pve.proxmox.com/pve-docs/
- QEMU \`qemu-img\` Manual  
  https://www.qemu.org/docs/master/tools/qemu-img.html
`,lo=e({default:()=>uo}),uo=`---
type: tech
slug: tech/multi-stage-migration-checklist
title: |
  多段虛擬化遷移的驗證與回復腳本
description: |
  行雲資訊將封閉或跨平台遷移拆為多階段，每一步都附檢查點與回復腳本，確保失敗時可快速退回前一版本。
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.45
  changefreq: monthly
  lastmod: build
---
## 適用情境

- 從封閉或老舊的虛擬化環境轉換到 PVE (Proxmox VE, Proxmox Virtual Environment) 時，通常需要經歷多次匯出、轉換、匯入。
- 轉換過程容易因格式、驅動或硬體相容性失敗，因此必須建立「多階段 + 可回復」的操作流程。

## 前置技術基準

1. **來源環境凍結**：先凍結來源環境重大變更，避免轉換期間資料狀態持續漂移。
2. **資產對照表**：建立 VM 對照（名稱、OS、磁碟、網卡、關鍵服務），確保每台 VM 都有對應遷移路徑。
3. **還原基準點**：保存來源備份、轉換指令版本與中繼節點設定，作為失敗時還原依據。
4. **驗證範圍定義**：先定義成功標準（可開機、可登入、可連線、應用可服務），避免只看單一指標。

## 多階段轉換流程（範例）

1. **備份取出**：利用原平臺提供的備份工具取得 VM 檔案，保留原始備份不更動。
2. **中繼平台驗證**：視原環境限制還原到可讀格式（例如一般的 KVM/開源工具），確認 VM 能正常開機、網路與磁碟驅動是否可用。
3. **格式轉換**：從中繼平台匯出為通用格式（\`OVF\`、\`QCOW2\` 等），並記錄轉換指令。
4. **目標平台匯入**：將轉換後的檔案匯入 PVE，並依需求調整虛擬硬體設定。
5. **最終驗證**：啟動 VM，確認服務、網路、磁碟與授權都正常，並進行一次備份測試。

## 每階段需留存的資訊

- 使用的指令或工具版本、轉換參數。
- 驗證結果（成功 / 失敗）與測試項目。
- 若失敗，記錄錯誤訊息與回復策略（例如重新匯出或回到上一階段）。

## 常見問題與排除順序

1. **格式轉換後無法開機**：先比對磁碟控制器與開機模式（UEFI/Legacy），再檢查驅動是否遺失。
2. **可開機但網路異常**：比對網卡型號、MAC 綁定與 \`udev\`/\`netplan\` 設定是否沿用舊值。
3. **應用服務啟動失敗**：先查授權綁定與系統時間，再查資料路徑或依賴服務是否完整。
4. **效能顯著退化**：檢查儲存格式、快取策略與 vCPU 拓樸，排除轉換後參數不一致。

## 技術檢核清單

1. 每台 VM 都有完整來源/目標對照與轉換紀錄。
2. 來源備份與轉換輸出都可對應到還原基準點。
3. 最終環境通過可開機、可連線、可服務三層檢查。
4. 至少一次測試還原可在目標平台成功啟動。
5. 轉換後效能與穩定性在可接受範圍內。

## 參考資料

- Proxmox VE Documentation  
  https://pve.proxmox.com/pve-docs/
- QEMU \`qemu-img\` Manual  
  https://www.qemu.org/docs/master/tools/qemu-img.html
`,fo=e({default:()=>po}),po=`---
type: tech
slug: tech/network-audit-template-delivery
title: |
  Network Health Audit Template and Analysis Workflow
description: |
  WalksCloud uses fixed report fields and risk grading to connect device baselines, event evidence, and remediation priorities for auditable network governance.
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.45
  changefreq: monthly
  lastmod: build
---
## Report structure

A useful network health report is not just a device list. It must define reproducible technical baselines with clear risk ranking and remediation sequencing. WalksCloud templates are designed for comparability, auditability, and scheduled governance follow-through.

1. **Executive summary**: one to two pages covering overall health, highest-risk items, and management-decision dependencies (for example budget approval, downtime windows, and vendor coordination).
2. **Asset/version baseline**: device model, serial, firmware/OS version, license status, and role classification.
3. **Topology and boundary map**: VLAN, trunk, uplink path, internet egress, and key ACL boundaries.
4. **Event and alert statistics**: alert type, frequency, first/last occurrence, impacted scope, and closure state.
5. **Risk grading and remediation actions**: each issue includes severity (\`Critical/High/Medium/Low\`), action recommendation, prerequisites, effort estimate, and validation method.
6. **Status tracking fields**: \`Owner\`, \`Target Date\`, and \`Status\` for next-cycle continuity.

## Analysis and scoring model

1. **Baseline comparison**: compare against prior cycle to distinguish new issues from unresolved carryover.
2. **Control-plane checks**: detect unauthorized accounts, weak credentials, expired certificates, and exposed management interfaces.
3. **Data-plane checks**: evaluate interface errors, packet loss, abnormal broadcast behavior, STP changes, and route flap patterns.
4. **Firmware and licensing checks**: map against vendor advisories for high-risk CVEs or EoL versions.
5. **Scoring output**: optional 0 to 100 scoring with fixed weighting (availability, security, operability) for quarter-over-quarter comparison.

## Production workflow

1. **Data collection**: gather backup configs, SNMP/NetFlow, Syslog, and NMS alert exports; verify NTP alignment first.
2. **Data normalization**: remove duplicate alerts, exclude retired devices, and normalize naming conventions.
3. **Template population**: fill fixed sections for summary, inventory, alerts, recommendations, and status fields.
4. **Internal peer review**: second engineer validates risk grading, action feasibility, and missing validation conditions.
5. **Technical review session**: align remediation priority, execution windows, and operational constraints.
6. **Version archive**: publish PDF plus machine-readable attachment (CSV/list) for next-cycle comparison.

## Technical validation checklist

1. **Completeness**: each critical device has version, role, risk state, and action fields.
2. **Traceability**: each major alert maps to source evidence (time, source, category, impact scope).
3. **Executability**: each remediation includes prerequisites, impact expectations, downtime requirements, and success criteria.
4. **Consistency**: severity labels are consistent across summary and detailed sections.

## Governance cadence

1. **Within 30 days**: close \`Critical\` and \`High\` items and preserve post-change evidence.
2. **Within 90 days**: close \`Medium\` items and complete process-level improvements.
3. **Quarterly**: compare unresolved-risk count, repeat-incident ratio, and MTTR trend.
4. **Yearly**: aggregate quarter reports into trend baseline for architecture and procurement planning.

## References

- CIS Controls v8  
  https://www.cisecurity.org/controls/v8
- NIST Cybersecurity Framework 2.0  
  https://www.nist.gov/cyberframework
- RFC 5424 (The Syslog Protocol)  
  https://www.rfc-editor.org/rfc/rfc5424
`,mo=e({default:()=>ho}),ho=`---
type: tech
slug: tech/network-audit-template-delivery
title: |
  網路健檢報告模板與分析流程
description: |
  行雲資訊以固定欄位與風險分級產出網路健檢報告，串接設備現況、事件證據與改善優先序，便於追蹤與治理。
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.45
  changefreq: monthly
  lastmod: build
---
## 報告結構

行雲資訊在製作網路健檢報告時，重點不是「列一份設備清單」，而是建立可重複驗證的技術基準。若報告只描述現況、沒有清楚的風險分級與修復路徑，團隊往往會在下一季重複遇到同一問題。因此模板設計會以「可比對、可稽核、可排程」為目標。

1. **管理摘要（Executive Summary）**：用 1-2 頁整理本次健康度、最高風險項目、需要管理層決策的議題（預算、停機窗口、供應商協作）。
2. **資產與版本基準**：記錄設備型號、序號、韌體/作業系統版本、授權有效期、角色（Core/Distribution/Access/Firewall）。
3. **拓樸與邊界**：標註 VLAN、Trunk、上聯路徑、Internet 出口與關鍵 ACL，讓後續異常能快速回推影響範圍。
4. **事件與告警統計**：至少包含告警類型、發生頻率、首次/最後發生時間、影響對象、是否已關閉。
5. **風險分級與改善建議**：每個問題都要有風險等級（\`Critical/High/Medium/Low\`）、修復建議、前置條件、預估工時與檢核方式。
6. **狀態欄位**：加上 \`Owner\`、\`Target Date\`、\`Status\`，讓各項目在下一次巡檢可直接比對。

## 分析方法與評分準則

1. **基準比對**：先與上一期報告比對版本、拓樸與警示趨勢，判斷是「新問題」還是「舊問題未解」。
2. **控制面檢查**：確認管理平面是否有未授權帳號、弱密碼、過期憑證、外網暴露管理介面等高風險項。
3. **資料面檢查**：檢查介面錯誤率、丟包、異常廣播、STP 變動、路由 flap 等會影響服務品質的訊號。
4. **韌體與授權檢查**：比對供應商公告，確認是否有高風險 CVE 或已停止支援版本。
5. **評分輸出**：可採 0-100 分制（可用性、資安、可維運性各占固定權重），確保不同季度可量化比較。

## 產出流程

1. **資料收集**：透過設定備份、SNMP/NetFlow、Syslog、NMS 告警匯出取得原始資料，先確認時間同步（NTP）避免事件時間軸錯位。
2. **資料清洗**：移除重複告警與已失效裝置，統一設備命名規則，避免同一設備在報告中出現多個名稱。
3. **模板套用**：依固定章節填入摘要、清單、告警、建議與狀態欄位，確保跨客戶輸出一致。
4. **內部審查**：由第二位工程師做 peer review，專門檢查風險分級是否合理、建議是否可執行、是否缺少檢核條件。
5. **技術說明**：針對高風險項目逐條確認優先序、執行窗口與限制條件，避免改善順序失真。
6. **版本封存**：輸出 PDF 主文件 + 可機器讀取附件（CSV/清單），作為下次巡檢的比較基準。

## 技術檢核清單

1. **完整性檢核**：每個關鍵設備都要有「版本、角色、風險狀態、建議動作」四項欄位，不可缺漏。
2. **可追溯檢核**：每個重大告警都能回溯原始紀錄（時間、來源、事件類別、影響範圍）。
3. **可執行檢核**：每個改善建議都包含前置條件、影響評估、停機需求與成功判準。
4. **一致性檢核**：同類型風險在不同章節的敘述與等級不得矛盾（例如摘要寫 High、明細寫 Low）。

## 持續治理節奏

1. **30 天內**：優先處理 \`Critical/High\` 項目，並於變更後補上檢核紀錄（截圖、命令輸出、監控趨勢）。
2. **90 天內**：完成 \`Medium\` 項目與流程性改善（帳號治理、備份策略、告警門檻調整）。
3. **季度回顧**：比較「未解風險數量、重複事件比例、平均修復時間（MTTR）」三個指標，評估治理是否有效。
4. **年度彙整**：把每季報告串成年度趨勢，做為採購與架構調整的量化依據。

## 參考資料

- CIS Controls v8  
  https://www.cisecurity.org/controls/v8
- NIST Cybersecurity Framework 2.0  
  https://www.nist.gov/cyberframework
- RFC 5424 (The Syslog Protocol)  
  https://www.rfc-editor.org/rfc/rfc5424
`,go=e({default:()=>_o}),_o=`---
type: tech
slug: tech/network-license-takeover-checklist
title: |
  Takeover Checklist for Expired-License Network Equipment
description: |
  WalksCloud follows a staged takeover checklist for expired-license or disconnected-vendor network environments, restoring license control, account ownership, and recoverable operations.
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.45
  changefreq: monthly
  lastmod: build
---
## Typical scenarios

- Original supplier is unreachable or contract expired, leaving controller, firewall, or switch platforms unable to update.
- Customer still has physical devices but lacks configuration exports and license records.
- Management credentials are fragmented across former personnel or prior partners, leaving devices operational but not administrable.
- Firmware versions are inconsistent, preventing reliable controller enrollment or policy rollout.

## Pre-takeover technical inventory

1. **Device identity**: record model, serial, hardware revision, firmware version, and license validity window.
2. **Topology role mapping**: identify each node as core/border/access and map upstream dependencies.
3. **Available access paths**: verify GUI, SSH, and console access and establish minimum emergency recovery channel.
4. **Version compatibility**: validate controller/device compatibility matrix before any upgrade.

## Takeover workflow

1. **Credential and key recovery**: reset admin passwords and API tokens, disable unknown local accounts, and converge to controlled accounts.
2. **License ownership transfer**: prepare serials, purchase evidence, and device proof to complete re-binding; avoid high-risk upgrades before transfer completion.
3. **Baseline configuration archive**: export running/startup configuration and key policy state with version labels and timestamps.
4. **Staged firmware updates**: update by role in controlled sequence (for example backup/edge first, then primary/core) with rollback checkpoint per step.
5. **Service connectivity verification**: validate internet, site interconnect, VPN, internal service reachability, and alert status immediately after each stage.
6. **Security baseline correction**: enforce least-privilege ACLs, disable unnecessary management interfaces, restrict source IPs, and enable admin-action logging.

## Common failures and triage order

1. **Device offline after upgrade**: confirm boot state and management IP via console first, then roll back image.
2. **Controller adoption failure**: check firmware/controller compatibility and device certificate or adoption-token state.
3. **License appears bound but features remain locked**: verify sync timing, region code, and feature set matching device model.
4. **Traffic interruption after policy apply**: restore baseline ACL first, then reapply changes rule-by-rule with hit verification.
5. **Multi-site drift**: compare baseline hashes, identify manually changed nodes, then converge configuration.

## Technical validation checklist

1. All management entry points are converged to controlled accounts and unknown keys are invalidated.
2. License state and enabled feature set are consistent on both controller and device.
3. Baseline configuration is restorable and has at least one tested rollback.
4. Critical connectivity and security policy paths are functioning correctly.
5. Version matrix is aligned for sustainable ongoing operations.

## References

- NIST SP 800-123: Guide to General Server Security  
  https://csrc.nist.gov/pubs/sp/800/123/final
- CIS Controls v8  
  https://www.cisecurity.org/controls/v8
`,vo=e({default:()=>yo}),yo=`---
type: tech
slug: tech/network-license-takeover-checklist
title: |
  授權過期設備接手檢查清單
description: |
  行雲資訊在接手授權過期或原廠失聯的設備時，先盤點授權、帳號與設定備份，再逐步恢復更新與管理能力。
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.45
  changefreq: monthly
  lastmod: build
---
## 典型情境

- 原供應商失聯或未續約，導致控制器、防火牆或交換器無法更新。
- 客戶僅保有實體設備，缺乏設定檔與授權資訊。
- 管理帳號散落在離職人員或前合作夥伴手上，造成設備可用但不可管理。
- 多台設備版本不一致，導致某些節點無法加入控制器或套用新策略。

## 接手前技術盤點

1. **設備識別**：記錄型號、序號、硬體 revision、目前韌體版本與授權有效期。
2. **拓樸定位**：標記設備在網路中的角色（核心/邊界/接入）與上游依賴，避免接手過程誤動到關鍵路徑。
3. **可用存取路徑**：確認 GUI、SSH、Console 三種入口哪些可用，先建立最低限度的緊急回復通道。
4. **版本相容性**：先查控制器與設備韌體相容矩陣，避免直接升級導致控制平面失聯。

## 接手流程

1. **帳號與金鑰回收**：先重置管理員密碼與 API token，關閉未知本機帳號，統一改由受控帳號登入。
2. **授權所有權轉換**：準備序號、購買資訊與設備證據，完成授權轉綁；轉換成功前不要先做高風險升級。
3. **設定基準封存**：匯出 running/startup config 與核心策略，建立版本標記與時間戳，做為還原基準點。
4. **分批升級韌體**：依角色分批更新（先邊緣再核心或先備援再主節點），每一步都保留可回退點。
5. **服務連通性檢查**：升級後立刻檢查關鍵路徑（上網、站點互連、VPN、內部服務）與告警狀態。
6. **安全基準校正**：套用最小權限 ACL、關閉不必要管理介面、限制來源 IP、啟用管理操作日誌。

## 常見故障與排除順序

1. **升級後設備離線**：先用 Console 確認開機狀態與管理介面 IP，再回退到前一版映像。
2. **控制器無法納管**：比對韌體與控制器版本是否相容，檢查設備憑證或 adoption token。
3. **授權已綁定但功能仍鎖定**：確認 license 同步時間、地區碼、feature set 是否與設備型號一致。
4. **策略套用後流量中斷**：先還原基準 ACL，再逐條套用變更比對命中結果。
5. **多站點設定漂移**：比對基準版本雜湊，找出被手動修改的節點後再統一收斂。

## 技術檢核清單

1. **所有管理入口已收斂到受控帳號**，未知帳號/金鑰已失效。
2. **授權狀態與設備功能一致**，控制器/設備顯示無授權錯誤。
3. **設定基準可還原**，至少完成一次測試回復。
4. **關鍵連通路徑與安全策略正常生效**。
5. **版本矩陣一致**，後續可在同一版本線持續維運。

## 參考資料

- NIST SP 800-123: Guide to General Server Security  
  https://csrc.nist.gov/pubs/sp/800/123/final
- CIS Controls v8  
  https://www.cisecurity.org/controls/v8
`,bo=e({default:()=>xo}),xo=`---
type: tech
slug: tech/offline-pve-gpu-passthrough
title: |
  PVE GPU Passthrough Troubleshooting in Offline Environments
description: |
  WalksCloud applies an offline-first troubleshooting workflow for PVE GPU passthrough incidents, using local evidence capture and controlled rollback checkpoints to keep diagnosis reproducible.
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.45
  changefreq: monthly
  lastmod: build
---
## Challenge

- The site has no internet connectivity, so live documentation lookup and online log upload are unavailable.
- Triage must quickly determine whether failure is caused by driver compatibility, \`vfio\` binding, or BIOS configuration.

## Pre-troubleshooting technical baseline

1. **Offline toolkit**: prepare local command scripts, version mapping tables, and troubleshooting checklist on portable storage. In restricted facilities, write evidence first to approved controlled temporary media and then replicate into controlled internal environment.
2. **Version map**: record PVE version, kernel version, GPU model, and expected driver set before action.
3. **Rollback checkpoints**: back up \`/etc/default/grub\`, \`/etc/modules\`, \`/etc/modprobe.d/*\`, and VM configuration files.
4. **Evidence retention rules**: standardize log naming, timestamps, and photo framing for reproducible replay.

## Execution method

1. **Collect baseline evidence**: export \`dmesg\`, \`journalctl\`, \`lspci\`, and \`/etc/modprobe.d\` artifacts to policy-compliant temporary media (general sites can use USB; restricted sites must use approved controlled temporary media), and record PVE/kernel state.
2. **Validate BIOS and firmware settings**: verify VT-d/IOMMU and device-mapping-related options (for example, Above 4G Decoding), with photo evidence where required.
3. **Check \`vfio\` and driver state**: verify \`vfio-pci\` binding, \`/etc/modules\`, and \`/etc/modprobe.d\` consistency to ensure GPU is not claimed by conflicting drivers.
4. **Controlled rollback attempts**: restore known-good local settings from backups and retest VM startup.
5. **Offline validation loop**: test GPU attach, VM boot, and driver load state step-by-step.

## Common issues and triage order

1. **GPU visible but cannot attach**: inspect IOMMU groups and \`vfio\` binding first, then VM PCI flags.
2. **Guest driver fails after boot**: verify host/guest driver compatibility and inspect Code 43-type signals.
3. **Settings lost after reboot**: confirm GRUB parameter persistence and \`initramfs\` rebuild completion.
4. **Multi-GPU interference**: isolate device groups and validate one card at a time.

## Technical validation checklist

1. Required system evidence can be collected completely under offline conditions.
2. Host-to-VM GPU mapping is explicit and verifiable.
3. Every change has rollback checkpoints.
4. Post-fix boot and GPU attach behavior is repeatable.
5. Critical workloads are validated before site exit.

## References

- Proxmox PCI Passthrough Documentation  
  https://pve.proxmox.com/wiki/PCI_Passthrough
- NVIDIA Linux Driver Documentation  
  https://docs.nvidia.com/
`,So=e({default:()=>Co}),Co=`---
type: tech
slug: tech/offline-pve-gpu-passthrough
title: |
  無外網環境下的 PVE GPU Passthrough 排障紀錄
description: |
  在無法連網的場域，行雲資訊以本地化證據蒐集與回復腳本，逐步定位 PVE GPU Passthrough 問題並建立可重現紀錄。
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.45
  changefreq: monthly
  lastmod: build
---
## 挑戰

- 現場無法連網，無法即時查詢文件或上傳 log，排障資源有限。
- 需在短時間內確認是否為驅動、\`vfio\` 綁定或 BIOS 設定造成的掛載失敗。

## 前置技術基準

1. **離線工具包**：先準備離線工具包（常用指令腳本、驅動版本表、對照清單）與可攜式儲存媒體；若為特殊管控場域，現場先寫入核准的受控暫存媒體，再帶回內部受控環境複製留存。
2. **版本對照表**：記錄 PVE 版本、kernel 版本、GPU 型號與對應驅動版本，避免現場憑記憶判斷。
3. **還原基準點**：在變更前先備份 \`/etc/default/grub\`、\`/etc/modules\`、\`/etc/modprobe.d/*\` 與 VM 設定檔。
4. **證據留存規則**：統一 log 命名、時間戳與拍照角度，確保後續可回放現場狀態。

## 實作方式

1. **收集基本資訊**：透過 \`dmesg\`, \`journalctl\`, \`lspci\`, \`/etc/modprobe.d\` 等指令先匯出到符合場域規範的暫存媒體（一般場域可用 USB；特殊管控場域使用核准受控暫存媒體），並記錄 PVE 版本與 kernel。
2. **檢查 BIOS/firmware**：逐項確認 VT-d 或 IOMMU 相關設定，以及主機板上與資源對應相關的選項（例如允許裝置使用較大的記憶體對應空間），必要時拍照備查。
3. **\`vfio\` / 驅動確認**：檢查 \`vfio-pci\` 綁定狀態、\`/etc/modules\`、\`/etc/modprobe.d\`，確保 GPU 沒被其他驅動佔用。
4. **測試回復**：若驅動或設定異常，先在本地備份原設定，再嘗試還原至已知可用版本，觀察 VM 是否可啟動。
5. **離線驗證**：逐步測試 VM 掛載 GPU、開機與驅動載入狀態，確認問題是否已排除。

## 常見問題與排除順序

1. **GPU 裝置看得到但無法掛載**：先查 IOMMU group 與 \`vfio\` 綁定，再查 VM 設定中的 PCI flags。
2. **VM 開機後驅動載入失敗**：確認 guest 驅動版本是否與 host 端相容，並檢查 code 43 類錯誤訊號。
3. **重開機後設定失效**：檢查 grub 參數是否寫入成功、\`initramfs\` 是否已重建。
4. **多 GPU 環境互相干擾**：先分離裝置群組，再逐卡驗證，避免一次變更多個變因。

## 技術檢核清單

1. 現場離線狀態下可完整蒐集必要系統證據。
2. 主機與 VM 的 GPU 對應關係可明確驗證。
3. 每次設定變更都有還原基準點可回退。
4. 排除後可重複開機並穩定掛載 GPU。
5. 離場前已確認關鍵工作負載可正常運作。

## 參考資料

- Proxmox PCI Passthrough Documentation  
  https://pve.proxmox.com/wiki/PCI_Passthrough
- NVIDIA Linux Driver Documentation  
  https://docs.nvidia.com/
`,wo=e({default:()=>To}),To=`---
type: tech
slug: tech/oidc-test-logs-communication
title: |
  OIDC Integration Log Collection and Vendor Communication Workflow
description: |
  WalksCloud standardizes OIDC client/server evidence collection, request-response correlation, and vendor communication to reduce reproduction cycles and scope accountability faster.
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.45
  changefreq: monthly
  lastmod: build
---
## Why complete logs are required

- OIDC providers often interpret standard behavior differently; without request/response-level detail, it is hard to isolate which side is misconfigured.
- Error strings alone are rarely sufficient for vendor support. Step-by-step test context and phased outcomes are needed.

## Pre-test technical baseline

1. **Freeze the test matrix**: fix account, \`scope\`, \`redirect URI\`, and \`grant_type\` combinations before running rounds.
2. **Align timestamps**: synchronize clocks across client, IdP, and proxy layers.
3. **Standardize fields**: use common event ID, response code, error class, and reproduction-step fields.
4. **Mask sensitive values**: redact token, secret, and personal data while preserving troubleshooting signal.

## Required evidence set

1. **Client-side logs**: for Jamf Connect, built-in debug output (or the official support profile) is the primary source and is generally not substitutable; curl/Postman captures are for other clients, not a replacement for Jamf Connect logs.
2. **Server-side logs**: request same-window IdP logs from provider, including \`client_id\`, \`grant_type\`, and \`scope\` context.
3. **Traffic or trace records**: use approved capture methods or vendor-provided collection scripts when deeper reproduction is required.
4. **Test matrix records**: track exact values per run (including \`redirect URI\`, auth flow, and account) with outcome status.

## Communication and triage workflow

1. **Provide one complete package per round**: combine client logs, server logs, matrix, and timeline to avoid repeated evidence requests.
2. **State protocol delta explicitly**: reference RFC or official docs and show expected behavior versus observed behavior.
3. **Single-variable retest**: change one parameter at a time and rerun same path.
4. **Post-meeting closure notes**: record conclusion, missing evidence, and next steps after each session.

## Common issues and triage order

1. **Auth page works but token exchange fails**: verify \`client_secret\`, \`redirect URI\`, and \`grant_type\` first.
2. **Token returned but login still fails**: compare \`claim\` mapping with local account-binding rules.
3. **Same config succeeds intermittently**: inspect time sync and certificate chain first, then proxy forwarding behavior.
4. **Vendor cannot reproduce**: provide event-ID-based end-to-end timeline with request/response comparison.

## Technical validation checklist

1. Same incident can be correlated between client and server logs.
2. Test matrix includes reproducible steps and outcome markers.
3. Sensitive values are masked without losing diagnostic value.
4. Each round uses single-variable changes for comparable results.
5. Root cause can be scoped clearly to client, IdP, or proxy layer.

## References

- OpenID Connect Core 1.0  
  https://openid.net/specs/openid-connect-core-1_0.html
- OAuth 2.0 Framework (RFC 6749)  
  https://www.rfc-editor.org/rfc/rfc6749
`,Eo=e({default:()=>Do}),Do=`---
type: tech
slug: tech/oidc-test-logs-communication
title: |
  OIDC 整合測試 Log 蒐集與溝通流程
description: |
  行雲資訊整理 OIDC 整合時的雙邊 Log、request/response 與會議記錄蒐集法，協助供應商快速重現與釐清責任邊界。
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.45
  changefreq: monthly
  lastmod: build
---
## 為什麼要蒐集完整 log

- 不同廠商對 OIDC 規格的詮釋不同，若缺乏請求／回應細節，很難釐清是哪一端的設定問題。
- 只提供錯誤訊息往往不足以讓供應商支援，因此需要整理階段性結果與測試步驟。

## 前置技術基準

1. **測試矩陣固定化**：先固定測試組合（帳號、\`scope\`、\`redirect URI\`、\`grant_type\`），避免每輪條件不同。
2. **時間戳對齊**：同步用戶端、IdP 與代理層時鐘，確保 log 可跨系統對照。
3. **欄位命名規範**：統一事件編號、回應碼、錯誤類型與重現步驟欄位，減少溝通歧義。
4. **敏感資訊遮罩**：在分享 log 前先遮蔽 token、secret 與個資欄位，保留可排障必要資訊。

## 必備資料

1. **用戶端 log**：Jamf Connect 需透過其內建偵錯模式輸出 log（或使用 Jamf 支援提供的 profile），通常無法以一般 web 工具取代；其餘工具可使用 curl / Postman 取得詳細輸出。
2. **伺服器端 log**：請 OIDC 供應商或自建 IdP 提供相同時段的 log，標示 \`client_id\`、\`grant_type\`、\`scope\` 等資訊。
3. **封包或追蹤記錄**：必要時使用官方建議的抓包方式或 Jamf 提供的收集腳本，確保可重現。
4. **測試矩陣**：記錄每次測試使用的設定（\`redirect URI\`、授權流程、帳號），並標註結果。

## 溝通與定位流程

1. **一次提供完整資訊**：把用戶端 log、伺服器 log、測試矩陣與時間軸放在同一份資料，避免供應商反覆索取。
2. **明確指出規格落差**：引用官方文件或 RFC 段落，說明預期行為與實測差異。
3. **單變因重測**：每次只改一個參數並重跑同一路徑，快速判斷問題是否與該參數有關。
4. **會議後固定回填**：每次會議後回填「結論、待補證據、下一步」，避免下一輪又回到原點。

## 常見問題與排除順序

1. **授權頁正常但 token 交換失敗**：先檢查 \`client secret\`、\`redirect URI\` 與 \`grant_type\`。
2. **回傳 token 但登入仍失敗**：比對 \`claim\` 對應與本地帳號映射規則。
3. **同設定有時成功有時失敗**：先查時間同步與憑證鏈，再查代理層轉發規則。
4. **供應商無法重現問題**：提供帶事件編號的完整時間軸與 request/response 對照，降低重現門檻。

## 技術檢核清單

1. 同一事件可在用戶端與伺服器端 log 對齊。
2. 測試矩陣具可重現步驟與結果標記。
3. 敏感資訊已遮罩但不影響排障判讀。
4. 每輪變更均採單變因測試並可比較差異。
5. 問題定位可明確區分用戶端、IdP 或代理層。

## 參考資料

- OpenID Connect Core 1.0  
  https://openid.net/specs/openid-connect-core-1_0.html
- OAuth 2.0 Framework (RFC 6749)  
  https://www.rfc-editor.org/rfc/rfc6749
`,Oo=e({default:()=>ko}),ko=`---
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
`,Ao=e({default:()=>jo}),jo=`---
type: tech
slug: tech/on-site-troubleshooting-handbook
title: |
  現場故障證據紀錄與交接手冊
description: |
  行雲資訊在現場排障時使用標準化證據欄位與交接格式，確保離線或時限壓力下仍能帶回完整可驗證資料。
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.45
  changefreq: monthly
  lastmod: build
---
## 目標

- 在無法上傳資料的環境中，仍能帶回足夠的 log、照片與狀態資訊。
- 讓下一線工程師或客戶可以重現現場狀況，避免口頭轉述造成資訊落差。

## 前置準備基準

1. **授權邊界確認**：進場前確認可操作設備、可執行命令範圍與可帶出資料類型。
2. **工具版本固定**：離線工具包中的腳本與工具版本需固定，避免同類問題不同結果。
3. **事件編號規則**：每次現場排障先建立事件編號，所有照片、log、筆記都沿用同一編號。
4. **資料保護規則**：可攜式儲存裝置需加密；若為特殊管控場域，現場先寫入核准受控暫存媒體，並在內部受控環境完成複製留存。

## 攜帶工具

- USB 隨身碟或可攜式儲存媒體（內含常用指令腳本與便攜版工具）；特殊管控場域則使用核准受控暫存媒體，離場後直接帶回內部受控環境複製。
- 序列線、RJ45 測試器、筆記型電腦。
- 私有行動網路或可攜式路由器，除非客戶限制，通常可自備網路與設備。

## 紀錄流程

1. **進場前**：確認需求、授權與可操作範圍。
2. **現場紀錄**：依紀錄表填寫設備型號、狀態燈號、錯誤訊息；必要時拍照或錄影。
3. **指令 / log 擷取**：使用自備筆電與腳本快速收集系統資訊，依場域規範寫入 USB 或指定暫存媒體；若為管控場域，使用核准受控暫存媒體並於返回內部後直接複製到受控環境。
4. **動作與結果**：每做一步（更換線材、重啟設備）都記錄時間與結果，可直接輸入工單或共享文件。
5. **交接**：返回辦公室後整理成 PDF，附上照片與 log 清單，並在工單或內部系統註記。

## 常見問題與排除順序

1. **現場可見故障但 log 不足**：先用最小侵入方式收集核心命令輸出，再決定是否做高風險操作。
2. **多人同時操作導致紀錄混亂**：統一由單一紀錄者管理時間軸與步驟編號。
3. **現場無網路無法回傳**：先以加密儲存媒體離線保存，返回受控環境再上傳。
4. **重啟後狀態改變無法還原**：進行重啟前務必拍照與匯出當前狀態，保留還原判讀依據。

## 技術檢核清單

1. 進場前已確認授權範圍與資料帶出規則。
2. 所有證據（log/照片/影片）可對應同一事件編號。
3. 每一步操作均有時間戳與結果紀錄。
4. 離線資料已加密並在受控環境完成封存。
5. 後續工程師可依文件完整重現現場狀態。

## 參考資料

- NIST SP 800-86 (Digital Evidence)  
  https://csrc.nist.gov/publications/detail/sp/800-86/final
- SRE Incident Response Practices  
  https://sre.google/sre-book/managing-incidents/
`,Mo=e({default:()=>No}),No=`---
type: tech
slug: tech/onboarding-account-automation
title: |
  Onboarding Automation and Identity Provisioning Collaboration
description: |
  A structured onboarding model linking HR forms, identity provisioning scripts, and access-governance checks so new hires are ready on day one.
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.45
  changefreq: monthly
  lastmod: build
---
## Core pain points

- When pre-join data is incomplete, identity provisioning, device preparation, and permission review all shift into day-one firefighting.
- If HR, MIS, equipment, and access-control workflows run independently, teams commonly end up with accounts ready but devices blocked, or devices ready with incorrect access.
- The required solution is an execution-ready pipeline, not an ad-hoc coordination routine.

## Pre-process design

1. **Intake schema standardization**: define mandatory fields for identity, role, start date, device requirements, and access scope.
2. **Role-based least-privilege templates**: prepare access templates by department and role before provisioning begins.
3. **Cross-system naming consistency**: normalize account IDs, group names, and alias formats across identity systems.
4. **Predefined exception routes**: define handling for cross-team assignments, temporary contracts, and outsourced identities.

## Automation flow

1. **Form intake at offer stage**: HR sends onboarding form with offer to centralize identity and device requirements early.
2. **Automated routing and ticketing**: submission triggers notifications and creates tracked tickets for MIS, equipment, and HR owners.
3. **Identity and group provisioning**: scripts create LDAP, Google Workspace, and required service accounts with template-based group assignment.
4. **Device-binding sequence**: MDM enrollment or certificate issuance is triggered in the same pipeline for day-one controlled access.
5. **Pre-start validation**: sign-in, entitlement, group mapping, and endpoint readiness are validated before start date.
6. **Exception backfill loop**: missing fields or script failures generate remediation tickets with explicit blockers and ownership.

## Common issues and triage order

1. **Incomplete intake data**: block automatic provisioning and backfill mandatory fields first.
2. **Incorrect group mapping**: validate department mapping and template version, then apply minimal fallback access if needed.
3. **Identity key mismatch**: verify shared primary key (employee ID or email) across systems.
4. **Day-one login failure**: check activation time window, MFA bootstrap status, and MDM enrollment state.

## Technical validation checklist

1. Intake completeness meets machine-readable threshold before provisioning starts.
2. Account and group naming remain consistent across identity systems.
3. Permission templates enforce least privilege with full version traceability.
4. New-hire sign-in and managed-endpoint validation complete before start date.
5. Every exception includes tracked remediation owner and timestamp.

## References

- Google Workspace Admin Help  
  https://support.google.com/a/
- LDAP Technical Reference  
  https://ldap.com/
`,Po=e({default:()=>Fo}),Fo=`---
type: tech
slug: tech/onboarding-account-automation
title: |
  入職流程自動化與帳號協作
description: |
  行雲資訊以表單與腳本串接 HR、IT 與門禁流程，讓帳號、設備與權限在到職前協同完成，提升 Day-1 就緒率。
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.45
  changefreq: monthly
  lastmod: build
---
## 痛點

- 新人到職前若資料不完整，帳號開通、設備準備與權限審核會同時延後，最終壓縮到 Day-1 臨場處理。
- HR、MIS、設備與門禁流程若各自為政，容易出現「帳號已開通但設備未就緒」或「設備到位但權限錯配」的斷點。
- 需要的是可機器化執行的流程，而不是只靠跨部門口頭協調的流程。

## 前置流程設計

1. **欄位標準化**：先定義姓名、部門、到職日、角色、設備需求、系統權限等必填欄位，確保腳本輸入具一致性。
2. **權限模板分級**：依角色與部門建立最小權限模板，避免新帳號預設授權過大。
3. **命名規則一致**：統一帳號、群組、郵件別名格式，降低跨系統關聯錯誤。
4. **例外流程先定義**：針對跨部門、短期約聘、外包帳號預設例外流程，避免臨場決策造成延遲。

## 自動化流程

1. **表單蒐集**：HR 在 offer 階段同步送出入職表單，確保身份與設備需求資料在同一入口收斂。
2. **事件通知與建單**：表單提交後自動通知 MIS、設備管理與 HR 主管，並建立追蹤工單。
3. **帳號與群組建立**：透過腳本建立 LDAP、Google Workspace 與必要服務帳號，依模板套用群組與基礎權限。
4. **裝置與身份綁定**：同時啟動 MDM 註冊或憑證流程，讓裝置在第一天即具受控狀態。
5. **啟用前驗證**：到職前完成登入、授權、群組映射與裝置驗證，避免 Day-1 才發現阻塞。
6. **異常回補**：若欄位缺漏或腳本失敗，自動產生回補工單並標記阻塞責任，縮短排除時間。

## 常見問題與排除順序

1. **資料缺漏**：先阻擋自動建立並回補必填欄位，避免生成半成品帳號。
2. **群組映射錯誤**：先比對部門代碼與模板版本，再以最小權限暫時放行並補正。
3. **跨系統識別不一致**：檢查員編或郵件等主鍵是否一致，排除對應失敗。
4. **Day-1 登入失敗**：先查帳號啟用時間，再查 MFA 初始化與 MDM 註冊狀態。

## 技術檢核清單

1. 入職資料完整率達標且具可機器讀取格式。
2. 帳號與群組命名規則跨系統一致。
3. 權限模板符合最小權限原則且具版本追溯。
4. 新人到職前完成登入與裝置受控驗證。
5. 異常事件具回補工單、責任人與時間戳。

## 參考資料

- Google Workspace Admin Help  
  https://support.google.com/a/
- LDAP.com Technical Reference  
  https://ldap.com/
`,Io=e({default:()=>Lo}),Lo=`---
type: tech
slug: tech/operations-handover-package
title: |
  Operations Handover and SOP Knowledge Package
description: |
  A structured operations handover package for topology, alerting, account boundaries, and SOP continuity during role transitions.
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.45
  changefreq: monthly
  lastmod: build
---
## Why an operations knowledge package is required

- Most transition failures are caused by fragmented knowledge, not by missing tooling.
- When topology notes, account boundaries, alert logic, and SOP steps are scattered across chats and personal notes, the same signal gets interpreted differently by each shift.
- The package exists to provide one operational baseline that is executable, versioned, and traceable, so handover quality does not depend on individual memory.

## Package contents

1. **Topology and critical-asset layer**: physical/logical layout, core nodes, primary/backup paths, and dependency relationships.
2. **Identity and authorization layer**: controlled accounts, group mapping, certificate lifecycle, and disablement criteria.
3. **Monitoring and alert layer**: normalized sources (UniFi, Zabbix, LibreNMS, Jamf Security Cloud), severity rules, and escalation channels.
4. **SOP and incident-response layer**: repeatable procedures for recurring tasks and high-frequency fault scenarios.
5. **Field contract layer**: explicit source, update cadence, ownership, and validation method per data field.

## Build and maintenance workflow

1. **Current-state inventory first**: confirm host/service inventory, monitoring sources, ownership map, and notification paths.
2. **Template-based authoring**: use one controlled template in version repository for assets, networks, account boundaries, and SOP.
3. **Consistency reconciliation**: verify that document fields match live system behavior and monitoring output.
4. **Revision traceability**: record reason, timestamp, and owner for every update.
5. **Least-exposure handling**: protect secret-bearing fields with least privilege and remove direct secret values from broad-distribution versions.

## Post-transition operating rules

1. **Single source of truth**: all operational decisions after handover must reference the shared package.
2. **Fixed refresh cadence**: inspection, alert, and authorization sections are updated on a defined rhythm.
3. **Incident feedback loop**: root cause and remediation outcomes are written back to SOP after closure.

## Technical validation checklist

1. Topology, account boundaries, and monitoring sources are consistent across documents and live systems.
2. Sensitive fields are least-privilege protected, and distribution copies contain no secret material.
3. Every revision is traceable by version, timestamp, owner, and change reason.
4. Major incident scenarios have reproducible SOP steps and feedback records.
5. Daily inspection and incident handling remain executable from this package after role transition.
`,Ro=e({default:()=>zo}),zo=`---
type: tech
slug: tech/operations-handover-package
title: |
  維運交接與 SOP 知識包
description: |
  行雲資訊將拓樸、告警、帳號邊界與 SOP 模組化，降低維運角色輪替時的知識斷層與交接風險。
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.45
  changefreq: monthly
  lastmod: build
---
## 為何需要維運知識套件

- 維運輪替後最常見的風險不是工具不足，而是知識來源分散，導致同一告警在不同值班人員手上出現不同結論。
- 若拓樸、帳號權限邊界、監控指標與 SOP 分散在聊天紀錄或個人筆記，交接後很快就會發生誤判與重工。
- 知識套件的目的不是堆文件，而是把日常維運要用到的最小必要資訊收斂成同一份可執行、可追溯、可持續更新的標準版本。

## 套件內容

1. **拓樸與關鍵資產層**：整理實體與邏輯拓樸、核心節點位置、主備路徑與關鍵依賴，讓接手人員先建立「系統在哪裡、誰依賴誰」的全貌。
2. **帳號與授權層**：列出受控帳號、群組對照、憑證有效期、授權邊界與停用條件，避免交接後出現隱性高權限帳號。
3. **監控與告警層**：統一監控來源（UniFi、Zabbix、LibreNMS、Jamf Security Cloud 等）、告警分級、降級條件與通知通道。
4. **SOP 與異常處置層**：把例行作業（備份、更新、巡檢）與高頻異常排除步驟寫成可重複執行的流程。
5. **欄位定義與資料契約層**：明確定義每個欄位來源、更新頻率、責任角色與驗證方式，避免文件語意隨人員更替漂移。

## 建立與維護流程

1. **先做現況盤點**：確認主機與服務清單、監控來源、通知流程與責任人，先釐清實際環境再寫文件。
2. **再套模板建檔**：以固定模板填入資產、網段、帳號邊界與 SOP，避免每個專案各寫各的格式。
3. **做一致性校對**：逐項比對文件欄位與系統現況，修掉「文件這樣寫、實際那樣跑」的落差。
4. **版本化封存修訂**：每次改動都保留變更理由、時間戳與責任人，方便後續回溯與稽核。
5. **敏感資訊最小揭露**：對帳號、憑證、金鑰欄位採最小權限控管，對外版本只保留必要描述，不保留可直接操作的秘密值。

## 角色切換後的運作原則

1. **單一事實來源**：交接後所有維運判斷都以同一份知識套件為準，避免私有版本造成決策分裂。
2. **固定更新節奏**：把巡檢、告警、授權異動更新節奏固定化，降低文件過時風險。
3. **事件回填機制**：每次故障結案後把根因、處置與回復時間回填到 SOP，讓下一次值班可直接復用。

## 技術檢核清單

1. 拓樸、帳號邊界、監控來源與系統現況一致。
2. 敏感欄位完成最小權限控管，外部版本不含秘密值。
3. 每次修訂具版本、時間、責任人與變更原因可追溯。
4. 主要故障場景有可重現 SOP 與事件回填紀錄。
5. 角色切換後可僅憑同一套件完成日常巡檢與異常處置。
`,Bo=e({default:()=>Vo}),Vo=`---
type: tech
slug: tech/passive-inspection-report-workflow
title: |
  Passive Inspection Reporting for Exception-Only Notification Models
description: |
  A passive inspection reporting model that preserves traceable evidence and operational transparency when clients prefer anomaly-only notification.
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.45
  changefreq: monthly
  lastmod: build
---
## Why passive inspection is needed

Some clients outsource remote operations but do not want day-to-day notification noise, requesting updates only when anomalies occur. Without a standardized passive reporting model, later alert tracing and stakeholder handovers become unreliable.

## Predefined data baseline

1. **Event severity rules**: define informational/warning/critical conditions in advance to keep response decisions consistent.
2. **Data-retention windows**: set retention periods for alerts, SNMP metrics, and communication records based on storage constraints and traceability needs.
3. **Unified event IDs**: use the same incident identifier across alerts, tickets, and notifications.
4. **Notification boundaries**: agree which events trigger immediate notice versus periodic summary.

## Data collected in practice

1. **Device alerts and utilization**: capture controller-side alerts, client counts, and error counters from UniFi/Mikrotik platforms with retained history as available.
2. **Core-node SNMP metrics**: collect uplink throughput and interface status from selected key nodes via Zabbix, LibreNMS, or SNMP.
3. **Client incident context**: include ticket or messaging-summary context to preserve handling timeline.

## Interaction model with clients

- **Data usage boundary**: collected alerts and SNMP indicators are primarily for WalksCloud diagnosis; no additional portal/report UI is provided by default.
- **Notification channels**: anomaly updates are sent through agreed channels such as Line, Slack, or email. Formal periodic reports are delivered only if contracted.
- **On-demand summary option**: when clients request temporary summaries, consultants can provide focused extracts without changing baseline passive mode.

## Common issues and triage order

1. **Alert fatigue from high volume**: tune severity thresholds and suppression windows first.
2. **Duplicate notifications for one incident**: verify dedup keys (device, interface, time window).
3. **Client perception and metrics conflict**: align client-reported timestamps with SNMP/event timeline before conclusion.
4. **Weak retrospective traceability**: confirm event ID continuity across alert, ticket, and notification paths.

## Technical validation checklist

1. Severity rules are fixed and repeatable.
2. Alerts, SNMP records, and client reports can be correlated by one event ID.
3. Passive mode avoids daily noise while still surfacing major incidents quickly.
4. Post-incident review can reconstruct full timeline and actions.
5. Retention periods support cross-month and quarterly analysis needs.

## References

- LibreNMS Documentation  
  https://docs.librenms.org/
- Zabbix Documentation  
  https://www.zabbix.com/documentation/current/en/manual
`,Ho=e({default:()=>Uo}),Uo=`---
type: tech
slug: tech/passive-inspection-report-workflow
title: |
  被動巡檢報告設計：僅異常通報情境
description: |
  即使客戶採「有異常再通報」，行雲資訊仍透過固定欄位、證據留存與週期輸出維持可追溯的巡檢透明度。
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.45
  changefreq: monthly
  lastmod: build
---
## 為什麼需要被動巡檢

許多客戶雖然委託遠端代管，但希望日常不被打擾，只在異常時收到通知。若沒有標準化的巡檢報告，日後要追蹤告警脈絡或交接窗口時就會缺乏依據。

## 前置資料基準

1. **事件分級規則**：先定義資訊/警告/重大事件條件，避免不同工程師對同事件有不同處置。
2. **資料保留週期**：依儲存容量定義告警、SNMP 指標與聊天紀錄保留天數，確保可回溯。
3. **事件編號一致化**：告警、工單與通知訊息使用同一事件編號，避免跨系統比對困難。
4. **通知邊界明確化**：先約定哪些事件即時通知、哪些事件進入週期摘要，降低過度告警干擾。

## 實際採集的資料

1. **設備告警與使用量**：直接引用 UniFi/Mikrotik 控制器上的告警、用戶數與錯誤計數，並依現有儲存空間保留歷史紀錄。
2. **關鍵節點 SNMP**：僅針對少數核心設備透過 Zabbix、LibreNMS / SNMP 回收 uplink 速率與介面狀態，方便交叉比對告警。
3. **客戶回報**：把客戶聊天紀錄或工單摘要收錄到報告，建立異常處理的上下文。

## 與客戶的互動方式

- **資料用途**：回收的告警與 SNMP 指標主要供行雲資訊內部診斷，不會另外提供 Portal 或報表查詢。
- **通知管道**：依客戶偏好（Line、Slack、電子郵件等）同步全部異常資訊；除非合約另有約定，平時僅以訊息通知，不會主動產出正式報告。
- **彈性補充**：若客戶臨時需要報告或摘要，顧問可依當次需求整理並分享，維持最低限度的資訊同步讓客戶即時掌握狀態。

## 常見問題與排除順序

1. **告警過多造成疲勞**：先調整分級閾值與抑制規則，再觀察噪音是否下降。
2. **同事件重複通知**：檢查事件去重鍵（設備、介面、時間窗）是否設定一致。
3. **客戶感受與指標不一致**：把客戶回報時間與 SNMP 時序對齊，排除只看單一資料來源的誤判。
4. **事後無法追溯**：檢查事件編號是否在告警、工單、通知三端一致流轉。

## 技術檢核清單

1. 事件分級規則已固定且可重複套用。
2. 告警、SNMP 與客戶回報可用同一事件編號串接。
3. 被動巡檢不打擾日常但可即時捕捉重大事件。
4. 回顧時可完整還原事件時間軸與處置流程。
5. 資料保留週期足夠支援季度或跨月分析。

## 參考資料

- LibreNMS Documentation  
  https://docs.librenms.org/
- Zabbix Documentation  
  https://www.zabbix.com/documentation/current/en/manual
`,Wo=e({default:()=>Go}),Go=`---
type: tech
slug: tech/pve-backup-schedule-tuning-guide
title: |
  PVE Backup Scheduling and IO Pressure Control
description: |
  A practical tuning guide for PVE backup schedules that reduces IO wait spikes, avoids collision windows, and preserves online service latency.
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.45
  changefreq: monthly
  lastmod: build
---
## Typical problems

- Backup windows overlap and drive PBS/storage IO spikes.
- Too many large VMs are backed up concurrently, increasing service delay or disconnect risk.
- Backup jobs succeed but business-hour latency degrades, creating application-level incidents.
- One datastore remains saturated by backup concurrency, while prune/GC and backup tasks compete.

## Pre-tuning baseline

1. **VM tiering**: classify VMs into high-frequency, normal, and low-frequency groups based on data change rate and business criticality, and assign different backup cadences per tier (for example: high-frequency multiple times daily, normal daily, low-frequency weekly).
2. **Storage profile**: confirm media type (HDD/SSD/NVMe), RAID mode, expected IOPS, average latency, and peak throughput.
3. **Window boundaries**: map business peak windows, batch-report windows, and DB maintenance windows.
4. **Current-state metrics**: record duration, transfer size, failure rate, and IO wait per job before adjustment.

## Core tuning strategy

1. **Build backup matrix**: list VM size, priority, and current schedule to identify overlap clusters.
2. **Distribute schedules**: place large VMs in low-traffic windows; keep small or high-frequency jobs in separate periods.
3. **Split jobs**: divide by business domain, datastore, or change profile so one job cannot monopolize the entire window.
4. **Limit concurrency**: cap simultaneous snapshot/backup count to protect online-service latency.
5. **Stagger maintenance tasks**: schedule prune, GC, and verify in backup trough periods.
6. **Controlled retry policy**: apply delay and cap for retries. Prevent immediate rerun loops in the same window (fail -> immediate rerun -> fail -> immediate rerun), because this stacks failed batches and amplifies IO/network saturation; allow at most one immediate retry, then move to delayed retry or the next backup window.

## IO pressure diagnosis order

1. **Node-level first**: use \`iostat\`, \`vmstat\`, load average, and await to identify disk vs CPU vs memory pressure.
2. **Backup-layer next**: align PVE and PBS task logs on one timeline to isolate high-latency jobs.
3. **Storage-layer third**: check concurrent scrub/resilver/replication activity.
4. **Network-layer last**: for remote PBS, inspect retransmission and RTT increases during backup windows.

## Common failures and handling

1. **Backups succeed but business latency rises**: reduce concurrency and separate large VMs into dedicated windows.
2. **Frequent backup timeout**: inspect storage latency and node load; if capacity pressure is structural, expand or rebalance datastore usage.
3. **Failures concentrated on one VM**: inspect snapshot duration and filesystem state, then evaluate alternate backup mode.
4. **GC capacity recovery below expectation**: compare retention rules and actual backup cadence for over-retention.

## Technical validation checklist

1. Backup success/failure metrics improve over at least one to two comparable cycles.
2. Business-hour latency does not degrade due to backup execution.
3. Prune/GC and backup operations no longer collide materially.
4. Retry policy blocks failure cascades by avoiding same-window immediate rerun loops (fail -> immediate rerun -> fail -> immediate rerun).
5. Tuned parameters and versions are recorded for repeatable reuse.

## References

- Proxmox VE \`vzdump\` Manual  
  https://pve.proxmox.com/pve-docs/vzdump.1.html
- Proxmox Backup Server Documentation  
  https://pbs.proxmox.com/docs/
- Linux \`iostat\` Documentation  
  https://man7.org/linux/man-pages/man1/iostat.1.html
`,Ko=e({default:()=>qo}),qo=`---
type: tech
slug: tech/pve-backup-schedule-tuning-guide
title: |
  PVE 備份排程調整與 IO 管控
description: |
  行雲資訊以排程分流、併發控制與指標回看調整 PVE 備份，降低 IO wait 尖峰並維持線上服務延遲穩定。
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.45
  changefreq: monthly
  lastmod: build
---
## 典型問題

- 備份時間重疊，導致 PBS 或儲存系統 IO 飆升。
- 同時備份太多大型 VM，造成其他服務延遲或斷線。
- 備份本身成功，但業務尖峰時段 latency 異常，反而變成應用層告警來源。
- 單一儲存池長期被高併發備份壓住，GC/Prune 與備份互相競爭 IO。

## 前置盤點

1. **VM 分層**：依資料變動率與業務重要度把 VM 分為高頻、一般、低頻三層。
2. **儲存特性**：確認儲存媒體（HDD/SSD/NVMe）、RAID 型態、可用 IOPS、平均延遲與峰值吞吐。
3. **時間窗界定**：標記業務尖峰、報表批次、DB 維護時段，避免備份與重負載工作重疊。
4. **現況基準**：先記錄每個 job 的耗時、傳輸量、失敗率、IO wait，避免調整後無法比較成效。

## 核心策略調整

1. **盤點備份矩陣**：列出所有 VM 的大小、優先度與目前排程，找出重疊區域。
2. **分散排程**：將大型 VM 排到夜間或假日，較小或高頻備份留在白天；不同層級採不同週期避免齊發。
3. **切割任務**：依業務別、儲存池、變動率拆分 job，避免單一 job 佔滿整段窗口。
4. **控制併發**：限制同時快照/備份的 VM 數量，優先保護線上服務延遲。
5. **錯峰維護**：將 Prune、GC、Verify 排在備份低谷時段，降低與備份主作業競爭。
6. **重試策略**：失敗重試要有延遲與上限，不要在同時段立刻連續重跑。否則第一批失敗後又馬上觸發第二批、第三批重試，會和原排程互相堆疊，導致 IO 與網路更滿、失敗數量繼續放大。

## IO 壓力診斷順序

1. **先看節點層**：\`iostat\`、\`vmstat\`、load average、await，判斷瓶頸在磁碟、CPU 還是記憶體回收。
2. **再看備份層**：PVE task log 與 PBS task log 對齊時間軸，定位是哪個 job 拉高延遲。
3. **再看儲存層**：比對池內其他工作（scrub、resilver、replication）是否同時進行。
4. **最後看網路層**：若是遠端 PBS，檢查備份時段封包重傳與 RTT 是否明顯上升。

## 常見故障與處理

1. **備份成功但業務延遲升高**：優先下調併發與錯開大型 VM，必要時把大型資料節點改專屬窗口。
2. **備份頻繁逾時**：檢查儲存延遲與節點負載，若為容量邊界壓力，先擴容或分流到其他 datastore。
3. **失敗集中在單一 VM**：先看該 VM 快照耗時與檔案系統狀態，再判斷是否需改用不同備份模式。
4. **GC 後容量回收不如預期**：比對保留策略與實際備份頻率，確認是否因保留規則過寬導致可刪塊不足。

## 技術檢核清單

1. 備份成功率與失敗率有明確改善（至少跨 1-2 個週期可比較）。
2. 業務尖峰時段延遲未因備份惡化。
3. Prune/GC 與備份不再互相衝突。
4. 重試機制可避免「失敗後立刻大量重跑」的惡性循環（前一批失敗、下一批立刻擠進來、再失敗）。
5. 調整參數與版本已記錄，下一次可直接復用。

## 參考資料

- Proxmox VE \`vzdump\` Manual  
  https://pve.proxmox.com/pve-docs/vzdump.1.html
- Proxmox Backup Server Documentation  
  https://pbs.proxmox.com/docs/
- Linux \`iostat\` Documentation  
  https://man7.org/linux/man-pages/man1/iostat.1.html
`,Jo=e({default:()=>Yo}),Yo=`---
type: tech
slug: tech/pve-io-wait-diagnostics-workflow
title: |
  PVE/VM Troubleshooting: From IO Diagnostics to Hardware Tuning
description: |
  A practical diagnostics workflow correlating node telemetry, backup schedules, and storage-layer behavior to identify IO wait root causes and targeted troubleshooting actions.
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.45
  changefreq: monthly
  lastmod: build
---
## Common symptoms

- VM writeback slows down, with frequent flush pressure or backup failures.
- Grafana/Zabbix/LibreNMS shows IO wait sustained above 10% in recurring windows.
- Related signals include application timeouts, extended database checkpoints, and API response jitter.

## Pre-diagnostics baseline

1. **Time-window alignment**: align node, VM, and monitoring timestamps to avoid cross-system misreads.
2. **Load segmentation**: classify business peak, backup window, and maintenance window IO patterns.
3. **Storage-path mapping**: map affected VM to datastore, RAID/controller profile, and media class.

## Analysis workflow

1. **Collect indicators**: gather IO wait, IOPS, and latency from \`iostat\`, \`pveperf\`, PBS logs, and dashboards.
2. **Schedule collision check**: verify overlap among backup, GC, prune, and scan jobs; stagger or split windows as needed.
3. **Hardware check**: inspect disk health, controller cache mode, write policy, and firmware state.
4. **VM-layer check**: inspect synchronous write patterns, IO scheduler behavior, and filesystem fragmentation conditions.
5. **Correlation analysis**: align IO peaks with business incidents, backup events, and alert timeline.
6. **Fix rollout**: adjust backup windows, tune VM write profiles, upgrade storage media, or recalibrate controller settings.

## Common root causes and handling order

1. **Schedule-collision bottleneck**: split and stagger tasks first, then verify IO wait recovery trend.
2. **Media performance ceiling**: if latency remains high and IOPS is saturated, prioritize SSD/NVMe upgrade or storage rebalance.
3. **Controller policy mismatch**: recalibrate cache/write strategy and compare writeback and flush behavior.
4. **VM write-model mismatch**: optimize guest filesystem and application write strategy for heavy sync-write workloads.

## Technical validation checklist

1. IO wait and latency peaks map to explicit event windows.
2. Schedule collisions are reduced through split/stagger changes with measurable improvement.
3. Storage media and controller health checks are complete and documented.
4. VM write behavior and storage strategy are aligned after remediation.
5. Stability holds across at least one full business cycle after change.

## References

- Linux \`iostat\` Manual  
  https://man7.org/linux/man-pages/man1/iostat.1.html
- Proxmox VE Performance Tweaks  
  https://pve.proxmox.com/wiki/Performance_Tweaks
- Proxmox Backup Server Documentation  
  https://pbs.proxmox.com/docs/
`,Xo=e({default:()=>Zo}),Zo=`---
type: tech
slug: tech/pve-io-wait-diagnostics-workflow
title: |
  PVE/VM 故障排查：從 IO 指標到硬體調整
description: |
  行雲資訊透過 iostat、Grafana 與備份時間軸比對，定位 IO wait 真因，並提出儲存層與排程層的可落地修正。
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.45
  changefreq: monthly
  lastmod: build
---
## 常見症狀

- VM 回寫速度變慢、frequent flush 或備份失敗。
- Grafana / Zabbix / LibreNMS 呈現 IO wait 長時間高於 10%。
- 同時段可能伴隨應用逾時、資料庫 checkpoint 拉長或 API 響應抖動。

## 前置量測基準

1. **時間窗對齊**：先對齊 PVE 節點、VM、監控系統時區與時間戳，避免跨系統比對誤判。
2. **負載分層**：區分業務高峰、備份窗口、維護窗口的 IO 型態，避免把短期尖峰誤當長期瓶頸。
3. **儲存路徑辨識**：確認問題 VM 對應的 datastore、RAID/控制器與底層媒體類型，建立故障定位路徑。

## 分析流程

1. **蒐集指標**：從 \`iostat\`, \`pveperf\`, PBS log 以及 Grafana 圖板取得 IO wait、讀寫 IOPS、延遲。
2. **排程檢查**：確認備份、GC、Prune、掃描任務是否撞在尖峰時段，必要時錯峰或拆分時程。
3. **硬體檢查**：確認磁碟健康度、控制器快取模式、寫入策略與韌體版本，排除底層裝置退化。
4. **VM 層面檢查**：檢查 VM 是否有大量同步寫入、IO 排程不當或檔案系統碎片問題。
5. **關聯比對**：把 IO wait 峰值與業務事件、備份事件、告警事件對齊，確認是否為同一根因。
6. **改善方案落地**：依根因調整備份排程、優化 VM 寫入模式、升級儲存媒體或校正控制器參數。

## 常見根因與處理順序

1. **排程碰撞型瓶頸**：先拆分與錯峰任務，再觀察 IO wait 是否回落。
2. **媒體性能不足**：若長期高延遲且 IOPS 觸頂，優先評估 SSD/NVMe 或儲存分流。
3. **控制器設定不當**：校正快取策略與寫入模式後，再比對回寫延遲與 flush 行為。
4. **VM 寫入模式不匹配**：對高同步寫入服務優化 guest FS 與應用寫入策略，降低尖峰阻塞。

## 技術檢核清單

1. IO wait 與延遲峰值可對應到具體事件時間窗。
2. 排程碰撞已被拆分或錯峰，且觀測到改善趨勢。
3. 儲存媒體與控制器健康狀態已完成檢查並有紀錄。
4. VM 層寫入行為與儲存策略已完成對應調整。
5. 改善後至少跨一個完整業務週期仍維持穩定。

## 參考資料

- Linux \`iostat\` Manual  
  https://man7.org/linux/man-pages/man1/iostat.1.html
- Proxmox VE Performance Tips  
  https://pve.proxmox.com/wiki/Performance_Tweaks
- Proxmox Backup Server Documentation  
  https://pbs.proxmox.com/docs/
`,Qo=e({default:()=>$o}),$o=`---
type: tech
slug: tech/pve-pbs-backup-schedule-validation
title: |
  Validation Framework for PVE/PBS Backup Scheduling and Quarterly Reporting
description: |
  A validation-first scheduling framework for PVE/PBS that balances RPO/RTO, storage pressure, and quarterly reporting observability with restore-proof evidence.
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.45
  changefreq: monthly
  lastmod: build
---
## Scheduling principles

- In PVE/PBS operations, the main risk is often not "no backup" but "backup exists yet is unusable" or "backup jobs continuously interfere with production services."
- Scheduling should align Recovery Point Objective (RPO), Recovery Time Objective (RTO), storage throughput, and maintenance windows in one control table.

1. **Business-tier classification first**: classify VMs as critical, important, or standard, each with its own frequency and retention profile.
2. **Batch scheduling over mass concurrency**: avoid starting too many snapshot/backup jobs in one window.
3. **Peak-window avoidance**: reserve at least one low-risk window for heavy workloads, large VMs, and database nodes, then distribute remaining jobs across off-peak windows.
4. **Retention alignment**: design PVE retention and PBS prune policies together.
5. **Retry headroom**: ensure schedule gaps can absorb retries without colliding into next batch.

## Validation workflow

1. **Pre-schedule checks**: verify datastore free capacity, dedup efficiency, network latency, node load, and authorization/authentication state.
2. **Baseline capture**: record per-job duration, transfer volume, compression ratio, and failure codes.
3. **Execution monitoring**: track success rate, duration, IO wait, load average, and PBS garbage-collection impact.
4. **Failure classification**: classify into schedule conflict, storage latency, network interruption, or auth/permission failure before applying SOP.
5. **Restore sampling**: restore-test at least one critical VM monthly to prove backup usability.
6. **Quarterly aggregation**: summarize success rate, average duration, capacity growth, failure distribution, and remediation trend.

## Example schedule design

1. **Critical systems**: two to four backups daily with shorter retention and tighter RPO.
2. **Standard systems**: once daily or multiple times per week with longer retention for cost control.
3. **Large data nodes**: isolated job and dedicated window to avoid dragging the rest of the estate.
4. **Prune/GC**: keep separate from backup peak windows to prevent IO contention.

## Failure-handling SOP

1. **Determine blast scope first**: one VM failure vs multi-VM simultaneous failure.
2. **Cross-check logs and resources**: align PVE task logs, PBS task logs, IO/CPU/memory signals.
3. **Decide rerun eligibility**: rerun only when transient causes are confirmed; stop and stabilize first for capacity/storage-risk cases.
4. **Feed schedule improvements back**: split jobs, move windows, or tune concurrency for repeated failures.
5. **Document incidents**: keep timestamp, impact scope, root cause, mitigation, and prevention actions for quarterly review.

## Notification and record design

1. **Real-time notices**: send success/failure events to mail or messaging bot with job name, VM ID, error code, and timestamp.
2. **Daily summary**: publish success rate, failure count, and rerun result overview.
3. **Monthly health review**: monitor capacity trend, duration drift, and failure hot spots.
4. **Quarterly report fields**: fixed output for success rate, restore-sample results, capacity trend, major anomalies, and next-quarter plan.

## References

- Proxmox VE Backup and Restore  
  https://pve.proxmox.com/pve-docs/chapter-vzdump.html
- Proxmox Backup Server Documentation  
  https://pbs.proxmox.com/docs/
- Proxmox VE \`vzdump\` Manual  
  https://pve.proxmox.com/pve-docs/vzdump.1.html
`,es=e({default:()=>ts}),ts=`---
type: tech
slug: tech/pve-pbs-backup-schedule-validation
title: |
  PVE/PBS 備份排程與季度報告驗證機制
description: |
  行雲資訊建立可驗證的 PVE/PBS 排程框架，兼顧 RPO/RTO、儲存壓力與季度報告可比性，並保留可還原證據。
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.45
  changefreq: monthly
  lastmod: build
---
## 排程原則

- 在 PVE/PBS 的備份治理中，真正的風險通常不是「沒有備份」，而是「備份有做但不可用」或「備份排程持續干擾正式服務」。
- 行雲資訊在規劃時會先把復原點目標（RPO）/復原時間目標（RTO）、儲存吞吐與維護窗口放到同一張排程表，不讓備份作業與核心業務互相踩踏。

1. **先定義業務分級**：將 VM 分為關鍵、重要、一般三層，對應不同備份頻率與保留天數。
2. **分批而非全量同時跑**：避免單一時段啟動過多 snapshot/backup 任務，降低儲存 IO 峰值。
3. **避開業務尖峰**：至少保留一個低風險窗口給重作業（大型 VM、資料庫節點），其餘工作分散到離峰。
4. **同步保留策略**：PVE job 保留與 PBS prune 規則要一起設計，避免「前端保留太多、後端無法回收」。
5. **預留重跑空間**：排程間距需容納失敗重試，不要讓重試與下一批任務直接碰撞。

## 驗證流程

1. **排程前檢查**：確認 PBS datastore 可用容量、chunk 去重效率、網路延遲、目標節點負載與授權狀態。
2. **基準建立**：記錄每個 job 的初始耗時、平均傳輸量、壓縮比例與失敗碼，作為後續偏差判斷基準。
3. **執行監控**：同時監看成功率、任務耗時、IO wait、節點 load average、PBS garbage collection 影響。
4. **失敗分類**：先分成排程衝突、儲存延遲、網路中斷、權限/認證失效四類，再對應處理 SOP，避免每次都從零排查。
5. **還原抽測**：每月至少抽樣還原一台關鍵 VM，驗證備份不只「完成」，而且「可實際啟動並提供服務」。
6. **季度彙整**：整理成功率、平均耗時、容量成長、失敗分布與改善項，作為容量與風險評估基準。

## 排程設計範例

1. **關鍵系統**：每日 2-4 次備份，保留較短但密集，重點是降低資料遺失時間窗。
2. **一般系統**：每日 1 次或每週多次，搭配較長保留週期，優先控制儲存成本。
3. **大型資料節點**：單獨 job 與獨立窗口，避免拖慢其他 VM 備份。
4. **Prune/GC 規則**：與備份窗口錯開，避免在備份高峰同時執行垃圾回收造成 IO 競爭。

## 失敗處理 SOP

1. **先確認是否為單點事件**：檢查同時段是否多台 VM 一起失敗，判斷是單 VM 問題還是整體基礎設施問題。
2. **查任務日誌與節點資源**：從 PVE task log、PBS task log、節點 IO/CPU/記憶體指標交叉比對。
3. **判斷是否可立即重跑**：若是短暫網路或瞬時負載可重跑；若是容量或儲存健康問題，先止血再重跑。
4. **更新排程或資源配置**：把重複失敗案例回寫到排程規則（拆 job、改窗口、調整並發數）。
5. **留下事故紀錄**：至少記錄發生時間、影響範圍、根因、處置與防再發措施，供季度回顧使用。

## 通知與紀錄

1. **即時通知**：成功/失敗通知送到郵件或訊息機器人，失敗事件要附上 job 名稱、VM ID、錯誤碼與時間戳。
2. **日報摘要**：每日產生備份摘要（成功率、失敗數、重跑結果），讓窗口快速掌握健康度。
3. **月度健康檢查**：統計容量使用、耗時變化與失敗趨勢，提早處理將爆量的儲存池或異常節點。
4. **季度報告欄位**：固定輸出成功率、還原抽測結果、容量趨勢、主要異常與下一季改善計畫。

## 參考資料

- Proxmox VE Backup and Restore  
  https://pve.proxmox.com/pve-docs/chapter-vzdump.html
- Proxmox Backup Server Documentation  
  https://pbs.proxmox.com/docs/
- Proxmox VE \`vzdump\` manual  
  https://pve.proxmox.com/pve-docs/vzdump.1.html
`,ns=e({default:()=>rs}),rs=`---
type: tech
slug: tech/pve-quarterly-report-template
title: |
  PVE/PBS Quarterly Report Template and Key Metrics
description: |
  A structured reporting template for PVE/PBS update status, backup outcomes, datastore capacity trends, and anomaly handling across quarters.
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.45
  changefreq: monthly
  lastmod: build
---
## Applicable scenarios

- Long-term managed environments running PVE (Proxmox Virtual Environment) and/or PBS (Proxmox Backup Server) where quarterly evidence is required.
- Multi-stakeholder operations that need traceable update, backup, and capacity records.
- Multi-node or multi-datastore estates where day-to-day observations are insufficient for trend analysis.

## Technical sections in the report

1. **Updates Data**: group updatable packages by \`Origin\` and list \`Package / current / new / Description\`. The \`new\` field is the final target version for that update cycle.
2. **Backup Summary Data (30-day window)**: \`Fail / Warning / Success\` counts across Backups, Prunes, Garbage Collections, Syncs, Verify, Tape Backup, and Tape Restore.
3. **Backup Usage Data (datastore state)**: usage percentage, estimated full date, CT/Host/VM group and snapshot counts, and last-GC deduplication factor.
4. **Backup Snapshots List Data**: time-ordered snapshot entries with protection tags for sampling and traceability.
5. **Environment notes**: PVE/PBS shared and PBS-only sections are explicitly distinguished to avoid false expectations in PVE-only environments.

## Metric definitions (to keep quarters comparable)

1. **Package-version rule**: \`current -> new\` represents the update delta for that cycle; quarterly reports use actual target versions, not inferred forecasts.
2. **Task-result rule**: \`status\` containing \`ok\` counts as Success, containing \`warning\` counts as Warning, and all others count as Fail, using the same rolling 30-day window.
3. **Task-type rule**: classify by backup job type only: backup/prune/garbage/sync/verify/tape backup/tape restore.
4. **Capacity rule**: usage and estimated-full values come directly from PBS; backup-count dimensions remain fixed at CT/Host/VM.
5. **Snapshot rule**: snapshot list keeps backup type, backup id, timestamp, and protection tag for manual investigation index.

## Production workflow

1. **Run the report script only from the controlled UI boundary**: the \`Make Update Report\` button appears only when a managed connector domain and internal userscript are both present, so execution stays inside an approved domain+userscript boundary. This preserves base PVE/PBS installations and prevents accidental use in unauthorized contexts.  
   - PVE example: ![PVE Make Update Report button example](./make-update-report-button-pve.png)
     <!-- media-description:for ./make-update-report-button-pve.png -->
     This PVE example shows the controlled \`Make Update Report\` button placed beside the normal documentation and VM/CT operation buttons. The placement makes the report action visible to operators while keeping it limited to the approved connector domain and userscript boundary.
     <!-- media-description:end -->
   - PBS example: ![PBS Make Update Report button example](./make-update-report-button-pbs.png)
     <!-- media-description:for ./make-update-report-button-pbs.png -->
     This PBS example shows the same controlled report button in the backup-server interface. The consistent placement helps generate quarterly evidence with the same operation pattern across PVE and PBS without modifying the base installation.
     <!-- media-description:end -->
2. **Generate updates and report output in one operation**: the same controlled action performs package updates and structured report generation. This reduces manual transcription errors and keeps quarter-to-quarter fields comparable.
3. **Hibernate eligible VMs before host updates**: stop related QEMU processes first so resumed VM state loads against updated binaries. This lowers the chance that in-progress compute or file-write tasks are interrupted by the update cycle.
4. **Reboot PVE/PBS hosts to apply runtime changes**: reboot activates updated kernels and package runtime state. Then proceed to post-update service checks.
5. **Handle LXC workloads with reboot-recovery flow**: LXC does not support hibernation and will stop during host reboot. After host return, restart containers in the defined sequence and verify service health.

## Exception interpretation and improvement approach

1. **Only include exception section when error/fail logs exist**: do not mix normal operations into incident narrative.
2. **Fix-first internal handling**: repairable issues are handled in maintenance windows before escalation unless agreement requires immediate notice.
3. **Human review cadence (1-2 weeks)**: default practice is periodic manual log review rather than daily push-notification monitoring.
4. **No proactive push by default**: if contract does not require event push, quarterly cadence remains the baseline.
5. **Action-oriented recommendations**: each exception maps to an executable change (schedule, capacity, retention, or version correction).

## References

- Proxmox VE Documentation  
  https://pve.proxmox.com/pve-docs/
- Proxmox Backup Server Documentation  
  https://pbs.proxmox.com/docs/
`,is=e({default:()=>as}),as=`---
type: tech
slug: tech/pve-quarterly-report-template
title: |
  PVE/PBS 季度報告範本與關鍵指標
description: |
  行雲資訊以版本、備份、容量與異常處置四類欄位形成季度報告範本，讓跨季比較與治理決策更一致。
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.45
  changefreq: monthly
  lastmod: build
---
## 適用情境

- 客戶委託我們長期維護 PVE (Proxmox VE, Proxmox Virtual Environment) 或 PBS (Proxmox Backup Server) 環境，需要定期確認更新、備份與儲存容量狀態。
- 需要可追溯的文件，方便多位主管或合作夥伴同步狀態。
- 環境跨多節點或多儲存池時，日常觀察不易看出長期趨勢，需要固定口徑做季度對比。

## 技術欄位組成

1. **Updates Data（可更新套件表）**：以 \`Origin\` 分組列出 \`Package / current / new / Description\`。\`new\` 欄位即該次排程更新後要落地的最終版本。
2. **Backup Summary Data（30 天任務摘要）**：Backups、Prunes、Garbage collections、Syncs、Verify、Tape Backup、Tape Restore 的 \`Fail / Warning / Success\` 統計。
3. **Backup Usage Data（Datastore 使用狀態）**：Usage 百分比、Estimated Full、CT/Host/VM 的 Group 與 Snapshot 數、最後一次 GC 的去重倍率。
4. **Backup Snapshots List Data（快照清單）**：依時間排序列出快照路徑與保護狀態，作為抽查與追溯依據。
5. **環境差異註記**：PVE/PBS 環境一定會有 Updates Data；只有 PBS 環境才會額外輸出備份摘要、容量與快照清單。

## 指標口徑（避免季度間不可比）

1. **套件版本口徑**：\`current -> new\` 代表該次操作前後版本差異，季度報告中的新版本即實際更新目標版本，不再另做推估欄位。
2. **任務結果口徑**：\`status\` 含 \`ok\` 計 Success，含 \`warning\` 計 Warning，其餘狀態計 Fail，全部以 30 天視窗統一比較。
3. **任務分類口徑**：以「備份任務類型」欄位做分類，依值拆為 backup/prune/garbage/sync/verify/tape backup/tape restore，不混入其他任務類型。
4. **容量口徑**：Usage 與 Estimated Full 直接使用 PBS 回傳值；Backup Count 只列 CT/Host/VM 三類，維持跨季度欄位固定。
5. **快照口徑**：快照清單保留「備份資料類型 / 備份資料識別碼 / 時間 / 保護註記」欄位，做為異常時的人工作業追溯主索引。

## 產出流程

1. **在受控 Web UI 條件下執行報表腳本**：\`Make Update Report\` 按鈕只會在「指定 connector 網域 + 內部 userscript」同時成立時出現，確保腳本僅在受控邊界內使用、避免未授權環境誤觸。此設計不需改動 PVE/PBS 原始安裝，也可降低資料外洩風險。  
   - PVE 介面示例截圖： ![PVE Make Update Report button example](./make-update-report-button-pve.png)
     <!-- media-description:for ./make-update-report-button-pve.png -->
     這張 PVE 示例截圖呈現受控的 \`Make Update Report\` 按鈕位於原生 Documentation、Create VM 與 Create CT 操作旁。這種位置讓維運人員容易辨識報表入口，同時仍限制在指定 connector 網域與內部 userscript 條件下才會出現。
     <!-- media-description:end -->
   - PBS 介面示例截圖： ![PBS Make Update Report button example](./make-update-report-button-pbs.png)
     <!-- media-description:for ./make-update-report-button-pbs.png -->
     這張 PBS 示例截圖呈現相同的受控報表按鈕出現在備份伺服器介面。PVE 與 PBS 採一致入口，可降低季度報表產出時的人工操作差異，也不需要修改原始安裝內容。
     <!-- media-description:end -->
2. **在同一操作中完成更新與報表產出**：以固定流程一次產出更新結果與報表欄位，減少人工轉抄錯誤。這可維持跨季度資料口徑一致。
3. **可休眠 VM 先休眠再更新**：先關閉對應 QEMU process，讓 VM 恢復時載入更新後 binary。此步驟可降低未完成運算或寫入作業被更新中斷而失敗的風險，即使在夜間窗口也保留安全邊界。
4. **重開機 PVE/PBS 主機使更新生效**：主機重開後套用新 kernel 與套件執行環境。完成後再進入服務恢復與檢核。
5. **對 LXC 套用重開機後恢復流程**：LXC 不支援休眠，會隨 host 重開而停止。主機恢復後依既定順序啟動並確認服務狀態。

## 異常判讀與改善方向

1. **僅在有 Error/Fail log 時納入異常段落**：季度報告只記錄已觀測到的異常事件與處理過程，不把正常維運項目混入異常章節。
2. **可修復問題優先內部處理**：可在維運窗口內修復的項目先處理，不立即通報；僅在影響持續、風險擴大或有協議要求時才升級通知。
3. **人工巡檢節奏為 1-2 週**：以人工檢視 log 為原則，不預設每日巡檢或即時推播。
4. **未約定則不啟用主動推播**：若合約未要求日常事件通知，報告以季度節奏輸出，不額外建立告警推送流程。
5. **改善建議以可執行變更為主**：每項異常對應一個可落地調整（排程、容量、保留策略或版本修正），避免只列觀察不列行動。

## 參考資料

- Proxmox VE Documentation  
  https://pve.proxmox.com/pve-docs/
- Proxmox Backup Server Documentation  
  https://pbs.proxmox.com/docs/
`,os=e({default:()=>ss}),ss=`---
type: tech
slug: tech/pve-vgpu-rollout-training
title: |
  PVE vGPU Cluster Rollout and Operations Training Plan
description: |
  A staged rollout and training plan for PVE plus NVIDIA vGPU, covering host setup, license services, guest onboarding, and reproducible operations checks.
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.45
  changefreq: monthly
  lastmod: build
---
## Rollout context

- This guide structures PVE plus NVIDIA vGPU deployment into repeatable stages.
- Target model: PVE 8.x with profile-based GPU resource pooling, with host, licensing, and guest workflows aligned.
- Focus is on version alignment, standardized execution, and repeatable technical validation, not one-time boot success.

## 0. Driver and licensing preparation

1. Confirm the target GPU model’s last supported vGPU version from official NVIDIA vGPU documentation.
2. Download the matching **Linux KVM Host Driver** and **Guest Driver** packages from NVIDIA Licensing.
   ![NVIDIA Driver Downloads reference screenshot](./vgpu-guide-driver-download.png)
   <!-- media-description:for ./vgpu-guide-driver-download.png -->
   This screenshot points to the NVIDIA driver download area used to select the Linux KVM host driver and the matching guest driver. The key operational point is to keep both packages on the same supported vGPU release before any host or guest installation begins.
   <!-- media-description:end -->
3. Download the matching **NLS/DLS License Server for Linux KVM** image.
   ![NVIDIA NLS License Server Downloads reference screenshot](./vgpu-guide-nls-download.png)
   <!-- media-description:for ./vgpu-guide-nls-download.png -->
   This screenshot identifies the NVIDIA license service download area for the matching NLS/DLS image. The license server version should be recorded together with the host and guest drivers so operators can reproduce the same rollout state later.
   <!-- media-description:end -->
4. Before execution, record host-driver, guest-driver, and license-server versions in one approved change ticket to prevent mixed-version rollout.

## 1. PVE host setup (IOMMU, \`vfio\`, required packages)

- Upgrade host to stable PVE baseline.
- Apply IOMMU kernel parameters and enable \`vfio\` modules.
- Install required package: \`dkms\`、\`proxmox-default-headers\`、\`mdevctl\`、\`build-essential\`.
- Run \`update-grub\` and \`update-initramfs\`, then reboot.

\`\`\`bash
# block Open Source version of NVIDIA driver
echo "blacklist nouveau" >> /etc/modprobe.d/blacklist.conf

# vfio module enable
echo -e "vfio\\nvfio_iommu_type1\\nvfio_pci\\nvfio_virqfd" >> /etc/modules

# install passthrough needed packages
apt update
apt install --no-install-recommends -y \\
  dkms libc6-dev proxmox-default-headers git build-essential mdevctl

update-grub
update-initramfs -u -k all
\`\`\`

## 2. vGPU unlock and SR-IOV service integration

- Configure \`vgpu_unlock-rs\` and service-level preload \`LD_PRELOAD\` strategy where required by deployment policy.
- Register \`nvidia-sriov.service\` and enable startup service for \`sriov-manage -e ALL\` execution.
- Validate on test node before production expansion.

\`\`\`bash
systemctl daemon-reload
systemctl enable --now nvidia-sriov.service
systemctl status nvidia-sriov.service
\`\`\`

## 3. Host driver installation and \`mdev\` validation

- After reboot, verify GPU discovery with \`lspci -d 10de:\`.
- Install host driver with \`--dkms\` mode.
- Reboot and validate available profiles via \`mdevctl types\`.

\`\`\`bash
lspci -d 10de:
chmod +x NVIDIA-Linux-*.run
./NVIDIA-Linux-*.run --dkms
mdevctl types
\`\`\`

## 4. Deploy NVIDIA DLS license service VM

- Create Linux VM (you can start with \`Do not use any media\`) and then import license service image (\`.qcow2\`).
- Upload \`nls-*.qcow2\` to PVE storage path (for example \`/var/lib/vz/template/iso\`).
- Use \`qm importdisk\` and attach as primary virtual disk (\`virtio0\`); resize as needed.
- Start VM, open HTTPS interface, import instance token, and upload license artifacts downloaded from NVIDIA.

\`\`\`bash
qm importdisk 999 /var/lib/vz/template/iso/nls-3.4.0-bios.qcow2 Data
qm disk resize 999 virtio0 20G
\`\`\`

## 5. Windows guest onboarding and license binding

- Create Windows VM (\`Machine: q35\`、\`BIOS: OVMF\`、\`CPU: host\`), plus VirtIO driver media via ISO file.
- Add PCI device with matching NVIDIA raw device and MDev type profile (e.g. \`GRID P4-2Q\`).
- Install Windows baseline, then VirtIO/guest agent, then NVIDIA guest driver.
- Apply Client Config Token from DLS to expected path and restart \`NVIDIA Display Container LS\` service.

## 6. Technical validation checklist

1. **Functional checks**: \`mdevctl types\`, guest-driver state, license state, and GPU workload behavior are normal (e.g. \`nvidia-smi\`).
2. **Stability checks**: repeated reboot and stress tests preserve MDev attach behavior.
3. **Restore checks**: sampled VM backup/restore preserves license and MDev usability.
4. **Operational consistency checks**: different operators can reproduce new-VM onboarding with same SOP.

## Practical guidance

- In mixed-GPU environments, complete single-node rollout and stress validation first, then expand.
- Upgrade sequence should follow host driver -> DLS -> guest driver, with explicit rollback plan.
- Feed rollout steps, validation outcomes, and failure cases into internal knowledge base for scale-out reuse.

## References

- Proxmox VE Wiki: NVIDIA vGPU on Proxmox VE  
  https://pve.proxmox.com/wiki/NVIDIA_vGPU_on_Proxmox_VE
- Proxmox VE Wiki: PCI Passthrough  
  https://pve.proxmox.com/wiki/PCI_Passthrough
- Proxmox VE \`vzdump\` Documentation  
  https://pve.proxmox.com/pve-docs/vzdump.1.html
- Proxmox Backup Server Documentation  
  https://pbs.proxmox.com/docs/
- NVIDIA vGPU Client Licensing User Guide  
  https://docs.nvidia.com/vgpu/latest/grid-licensing-user-guide/
`,cs=e({default:()=>ls}),ls=`---
type: tech
slug: tech/pve-vgpu-rollout-training
title: |
  PVE vGPU 叢集導入與維運訓練計畫
description: |
  行雲資訊以分階段課程覆蓋主機設定、授權啟用、客體掛載與驗證流程，協助團隊建立可複製的 vGPU 維運能力。
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.45
  changefreq: monthly
  lastmod: build
---
## 導入背景

- 本文整理 PVE + NVIDIA vGPU 導入實作，將流程拆成可重複執行的技術步驟。
- 目標情境是 PVE 8.x 上部署 NVIDIA vGPU，建立可切分 profile 的 GPU 資源池，並把 Host、授權、Guest 端流程一次定義清楚。
- 相比「能開機即可」的做法，本文更聚焦在版本對齊、步驟標準化與技術檢核，降低後續維運落差。

## 0. 驅動版本與授權資源準備

1. 先以 NVIDIA vGPU 官方文件確認目標 GPU 型號「最後支援」的 vGPU 版本。  
2. 依該版本到 NVIDIA Licensing 下載對應的 **Linux KVM Host Driver** 與 **Guest Driver**。  
  ![NVIDIA Driver Downloads 參考畫面](./vgpu-guide-driver-download.png)
  <!-- media-description:for ./vgpu-guide-driver-download.png -->
  這張截圖標示 NVIDIA 驅動下載頁面中用來選取 Linux KVM Host Driver 與對應 Guest Driver 的位置。實務上重點不是單純下載檔案，而是先確認 Host 與 Guest 套件維持在同一個受支援的 vGPU 版本。
  <!-- media-description:end -->
3. 下載同版本對應的 **NLS/DLS License Server for Linux KVM** 映像。  
  ![NVIDIA NLS License Server Downloads 參考畫面](./vgpu-guide-nls-download.png)
  <!-- media-description:for ./vgpu-guide-nls-download.png -->
  這張截圖標示 NVIDIA 授權服務映像的下載位置，用來取得與 vGPU 版本相符的 NLS/DLS License Server。授權服務版本應與 Host Driver、Guest Driver 一起記錄，方便後續重建或擴充時維持一致。
  <!-- media-description:end -->
4. 在執行前，將 Host/Guest/License Server 三個版本一併登錄到同一張已核准變更單，避免中途混版。

## 1. PVE Host 環境設定（IOMMU / vfio / 套件）

- 更新至穩定的 PVE 版本後，先在 \`grub\` 補上 IOMMU 相關參數，並啟用 \`vfio\` 模組。
- 安裝導入必要套件：\`dkms\`、\`proxmox-default-headers\`、\`mdevctl\`、\`build-essential\` 等。
- 完成後執行 \`update-grub\`、\`update-initramfs\`，再重開機。

\`\`\`bash
# block Open Source version of NVIDIA driver
echo "blacklist nouveau" >> /etc/modprobe.d/blacklist.conf

# vfio module enable
echo -e "vfio\\nvfio_iommu_type1\\nvfio_pci\\nvfio_virqfd" >> /etc/modules

# install passthrough needed packages
apt update
apt install --no-install-recommends -y \\
  dkms libc6-dev proxmox-default-headers git build-essential mdevctl

update-grub
update-initramfs -u -k all
\`\`\`

## 2. vGPU unlock 與 SR-IOV 服務配置

- 可使用 \`vgpu_unlock-rs\` 與 systemd drop-in 設定 \`LD_PRELOAD\`。
- 再建立 \`nvidia-sriov.service\`，由開機階段自動觸發 \`sriov-manage -e ALL\`。
- 這一步建議在測試節點先驗證，確認不影響其他 GPU 工作負載再進 production。

\`\`\`bash
systemctl daemon-reload
systemctl enable --now nvidia-sriov.service
systemctl status nvidia-sriov.service
\`\`\`

## 3. Host Driver 安裝與 \`mdev\` 驗證

- 重開機後先以 \`lspci -d 10de:\` 確認 GPU 裝置數量與型號。
- 安裝下載好的 Host Driver（例如 \`--dkms\` 模式）。
- 重新開機後以 \`mdevctl types\` 確認可用 profile 已出現，這是 Host 端完成的關鍵檢查點。

\`\`\`bash
lspci -d 10de:
chmod +x NVIDIA-Linux-*.run
./NVIDIA-Linux-*.run --dkms
mdevctl types
\`\`\`

## 4. 部署 NVIDIA DLS License Server VM

- 建立 Linux VM（可先 \`Do not use any media\`，再匯入 \`.qcow2\`）。
- 將 \`nls-*.qcow2\` 上傳到 PVE，例如 \`/var/lib/vz/template/iso\`。
- 使用 \`qm importdisk\` 匯入並掛載為 \`virtio0\`，再依需求擴容磁碟。
- 開機後透過 HTTPS 進入 DLS 頁面，匯入 instance token，並上傳從 NVIDIA 下載的授權檔案。

\`\`\`bash
qm importdisk 999 /var/lib/vz/template/iso/nls-3.4.0-bios.qcow2 Data
qm disk resize 999 virtio0 20G
\`\`\`

## 5. Windows Guest 建置與授權綁定

- 建立 Windows VM（\`Machine: q35\`、\`BIOS: OVMF\`、\`CPU: host\`），並加入 VirtIO 驅動 ISO。
- 在 Hardware 增加 PCI Device，選擇對應 NVIDIA Raw Device 與 MDev Type（例如 \`GRID P4-2Q\`）。
- 安裝 Windows 後先補齊 VirtIO / Guest Agent，再安裝 NVIDIA Guest Driver。
- 從 DLS 下載 Client Config Token，放到指定位置後重啟 \`NVIDIA Display Container LS\` 服務。

## 6. 技術檢核清單

1. **功能檢核**：\`mdevctl types\`、Guest 端驅動、授權狀態、GPU 工作負載（如 \`nvidia-smi\`）皆正常。  
2. **穩定性檢核**：連續壓測與重啟後仍能正確掛載 MDev。  
3. **還原檢核**：抽樣 VM 進行備份/還原，確認還原後授權與 MDev 維持可用。  
4. **操作一致性檢核**：由不同維運成員依 SOP 重做一次新 VM 導入流程，確認步驟可重現。  

## 實務建議

- 若是混合型 GPU 環境，建議先在單節點完成導入與壓測，再擴展到多節點。
- 版本升級採「Host Driver -> DLS -> Guest Driver」順序並做回滾計畫，避免一次升級全部元件。
- 把導入步驟、檢核結果、故障案例回填到內部知識庫，後續擴容時可直接複用。

## 參考資料

- Proxmox VE Wiki: NVIDIA vGPU on Proxmox VE  
  https://pve.proxmox.com/wiki/NVIDIA_vGPU_on_Proxmox_VE
- Proxmox VE Wiki: PCI Passthrough  
  https://pve.proxmox.com/wiki/PCI_Passthrough
- Proxmox VE \`vzdump\` 文件（備份與保留策略）  
  https://pve.proxmox.com/pve-docs/vzdump.1.html
- Proxmox Backup Server 文件（Prune / Verification）  
  https://pbs.proxmox.com/docs/
- NVIDIA vGPU Client Licensing User Guide  
  https://docs.nvidia.com/vgpu/latest/grid-licensing-user-guide/
`,us=e({default:()=>ds}),ds=`---
type: tech
slug: tech/remote-inspection-reporting
title: |
  Remote Inspection Reporting and Operational Transparency
description: |
  A structured remote-inspection method that converts multi-source telemetry into comparable reports, anomaly priorities, and actionable follow-up.
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.45
  changefreq: monthly
  lastmod: build
---
## Objective

- Provide periodic, evidence-based health visibility for environments without a full in-house NOC platform.
- Convert inspection data into machine-comparable structure instead of free-form log reading.
- Apply one consistent severity model so different engineers reach consistent conclusions.
- Enable time-series comparison across inspection cycles to detect capacity pressure, hardware degradation, and configuration drift.

## Data sources

1. **Event stream**: ingest and normalize alerts from Zabbix, LibreNMS, controllers, Syslog, and related systems (source, severity, start/end time, impacted object).
2. **SNMP time series**: collect uplink throughput, interface error rate, packet loss, CPU, memory, thermal, and power status with sufficient granularity.
3. **Configuration snapshots**: store hashes of key running/startup configuration for drift detection.
4. **Context notes**: include requested domain observations (for example, specific VLAN or SSID) but keep fields structured for comparison.

## Indicator model and severity criteria

1. **Health indicators**: device availability, core service reachability, controller sync status.
2. **Performance indicators**: bandwidth utilization, 95th percentile latency, packet-error and retransmission rates.
3. **Stability indicators**: interface flap count, route-change frequency, AP disconnect recurrence.
4. **Risk indicators**: weak credentials, exposed management interfaces, expired certificates, high-risk version exposure.
5. **Severity logic**: use fixed criteria such as \`Critical/High/Medium/Low\` or numeric score with explicit thresholds (for example, sustained uplink error-rate breach for 10 minutes equals High).

## Production process

1. **Data extraction**: scheduled collection plus integrity checks (time window, required fields, source connectivity).
2. **Normalization**: unify device and interface naming plus timezone.
3. **Anomaly detection**: evaluate against fixed thresholds and baseline deviation; smooth transient spikes to reduce false positives.
4. **Technical summary generation**: output key anomalies, likely root causes, impact scope, and recommended actions with numeric or trend evidence.
5. **Urgent escalation path**: \`Critical/High\` events bypass periodic summary and enter immediate incident flow.

## Report delivery and notifications

1. **Periodic PDF report**: weekly or monthly summary including trend curves, key incidents, root-cause interpretation, and action recommendations.
2. **Structured attachments (optional)**: CSV/JSON output for internal data integration and secondary analysis.
3. **Completion notifications**: deliver via Email, Line, or Slack with attachment or secure report link.
4. **Immediate major-incident response**: for \`Critical/High\` events, send incident time, impact scope, temporary mitigation, and next steps immediately.
5. **Consistency control**: use one event ID across real-time incident notices and periodic reports.

## Common anomalies and triage sequence

1. **Sustained bandwidth saturation**: review 95th percentile utilization, then isolate specific VLAN/time windows and sampling traces.
2. **Rising interface errors**: verify duplex/speed negotiation, optical or cable quality, and correlated switch-port counters.
3. **Repeated AP offline events**: inspect PoE delivery and switch-port status first, then controller heartbeat and firmware compatibility.
4. **Alert storms from duplicate events**: tune dedup/suppression windows to avoid repeated counting.
5. **Configuration drift without approved change record**: preserve diff first, then assess risk and rollback to known-stable state if needed.

## Continuous improvement suggestions

1. **Rebaseline periodically**: at least quarterly, recalculate normal ranges so thresholds stay meaningful.
2. **Tiered alert strategy**: use distinct thresholds for core and edge devices.
3. **Cross-domain correlation**: align network telemetry with system-layer signals (for example, VM load) for faster root-cause narrowing.
4. **Post-change observation windows**: after firmware or policy changes, observe core metrics for at least one complete cycle to catch hidden regressions.

## Advantages

- Repeatable interpretation: same input yields the same decision path.
- Predictable triage speed: fixed indicator sequence reduces ambiguity.
- Quantified decision support: capacity expansion and topology-change planning rely on measurable evidence.

## References

- RFC 1213: MIB-II  
  https://www.rfc-editor.org/rfc/rfc1213
- RFC 3418: SNMP Management Information Base  
  https://www.rfc-editor.org/rfc/rfc3418
- LibreNMS Documentation  
  https://docs.librenms.org/
- Zabbix Documentation  
  https://www.zabbix.com/documentation/current/en/manual
`,fs=e({default:()=>ps}),ps=`---
type: tech
slug: tech/remote-inspection-reporting
title: |
  遠端巡檢報告與透明化流程
description: |
  行雲資訊將多來源指標轉為固定報告欄位與異常優先序，讓未自建監控系統的團隊也能掌握巡檢狀態與後續動作。
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.45
  changefreq: monthly
  lastmod: build
---
## 目標

- 讓沒有自建 NOC 平台的環境，仍可透過固定指標週期性掌握網路與設備健康狀態。
- 把巡檢資料轉成可機器比對的結構化內容，避免每次都靠人工閱讀長篇 log。
- 以同一套分級規則判斷異常優先序，降低「不同工程師、不同結論」的落差。
- 讓歷次巡檢結果可直接做時間序比較，快速看出容量瓶頸、硬體劣化與設定漂移。

## 巡檢資料來源

1. **事件流（Event Stream）**：匯入 Zabbix、LibreNMS、控制器、Syslog 或其他事件，先做去重與標準化（來源、嚴重度、開始/結束時間、影響對象）。
2. **SNMP 指標（Time Series）**：收集 uplink 速率、介面錯誤率、丟包、CPU、記憶體、溫度與電源狀態，保留足夠粒度供尖峰分析。
3. **設定快照（Config Snapshot）**：保存關鍵設備 running/startup config 雜湊值，用於判斷是否發生未預期變更。
4. **補充觀測項（Context Notes）**：針對客戶指定區段（例如特定 VLAN 或 SSID）補充人工觀測，但仍需落到固定欄位，避免自由敘述難以比對。

## 指標分級與判準

1. **健康指標（Health）**：設備在線率、核心服務可達率、控制器同步狀態。
2. **效能指標（Performance）**：頻寬使用率、95th percentile 延遲、封包錯誤率、重傳比例。
3. **穩定指標（Stability）**：介面 flap 次數、路由變動次數、AP 掉線次數。
4. **風險指標（Risk）**：弱密碼、外網暴露管理介面、過期憑證、已知高風險版本。
5. **分級規則**：可用 \`Critical/High/Medium/Low\` 或數值分數，重點是判準固定且可重複套用，例如「核心 uplink error rate 連續 10 分鐘超過閾值」才升級為 High。

## 產出流程

1. **資料擷取**：以排程拉取事件與指標，先檢查資料完整性（時間區間、欄位完整、來源連線狀態）。
2. **資料正規化**：統一設備命名、介面命名與時區，避免同一設備在不同系統出現多個代號。
3. **異常判定**：依固定閾值與基準偏差判斷是否異常；對短暫尖峰做平滑處理，降低誤報。
4. **技術摘要生成**：輸出本期主要異常、可能根因、影響範圍與建議操作，並附上對應指標截面（數值或趨勢描述）。
5. **即時告警分流**：若命中 \`Critical/High\`，直接走即時通知與排障流程，不等待週期性摘要。

## 報告輸出與通知回報

1. **固定週期 PDF**：依約定頻率（每週或每月）輸出 PDF 摘要，至少包含健康度趨勢、主要異常、根因判讀與建議操作。
2. **結構化附件（選配）**：若需與客戶內部流程串接，可同步輸出 CSV/JSON（指標摘要與事件清單），便於二次分析。
3. **完成通知**：報告產出後透過 Email、Line 或 Slack 通知窗口，附檔或附報告連結。
4. **重大異常即時回報**：遇到 \`Critical/High\` 事件不等待週期報告，先即時回報「事件時間、影響範圍、臨時處置、下一步」。
5. **回報一致性**：即時回報與週期報告共用同一事件 ID，避免後續比對時出現多版本描述。

## 常見異常與排障順序

1. **頻寬長期逼近上限**：先看 95th percentile 使用率，再查是否集中於特定 VLAN/時段；必要時啟用流量取樣定位來源。
2. **介面錯誤率升高**：優先檢查雙工/速率協商、光模組訊號與線材品質，再看交換器埠錯誤計數是否同步上升。
3. **AP 反覆離線**：先比對 PoE 供電與交換器埠狀態，再查控制器心跳與韌體版本相容性。
4. **告警大量重複**：檢查告警去重規則與抑制窗口，避免同一事件在短時間內被重複計數。
5. **設定漂移**：若 config 雜湊變更且無對應變更紀錄，先封存差異再做風險評估，必要時回復到已知穩定版本。

## 持續優化建議

1. **建立基準週期**：至少每季重算一次「正常區間」，避免舊閾值不再符合現況流量。
2. **分層告警策略**：核心設備與邊緣設備使用不同閾值，減少不必要噪音。
3. **關聯分析**：把網路事件與系統層事件（例如 VM 負載）對齊，可更快排除錯誤根因。
4. **版本與變更對照**：每次韌體升級或策略變更後，觀察同一批核心指標至少一個完整週期，確認沒有隱性回歸。

## 優點

- 觀測結果可重現：同一份資料輸入可得到一致判讀結果。
- 排障速度可預期：先看哪組指標、再看哪層設備有固定路徑。
- 技術決策可量化：容量擴充、拓樸調整或韌體升級不再依賴主觀判斷。

## 參考資料

- RFC 1213: MIB-II（SNMP 基礎物件）  
  https://www.rfc-editor.org/rfc/rfc1213
- RFC 3418: SNMP Management Information Base  
  https://www.rfc-editor.org/rfc/rfc3418
- LibreNMS Documentation  
  https://docs.librenms.org/
- Zabbix Documentation  
  https://www.zabbix.com/documentation/current/en/manual
`,ms=e({default:()=>hs}),hs=`---
type: tech
slug: tech/shared-dns-radius-isolation
title: |
  DNS/RADIUS Isolation Deployment Standards for Shared Environments
description: |
  A practical pattern for shared or multi-tenant environments, combining VLAN segmentation, RADIUS identity control, and AdGuard Home filtering with traceable operations.
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.45
  changefreq: monthly
  lastmod: build
---
## Typical pain points in shared environments

- Multiple tenants use weak shared-credential SSIDs, making source attribution and lateral-risk containment difficult.
- DNS filtering at one egress point often shows only source IP and not clear user/department/device identity context.
- Shared-office providers usually offer internet connectivity only, not tenant-specific ACL, RADIUS policy, or event-governance depth.
- During tenant moves or organization changes, non-standardized networks create repeated rebuild effort.

## WalksCloud design principles

1. **Segment VLAN first**: complete L2/L3 separation before policy tuning; do not rely on one firewall rule as isolation strategy.
2. **Use RADIUS as authorization authority**: centralize identity, group mapping, and VLAN assignment in RADIUS instead of fragmented AP/switch/VPN lists.
3. **Keep DNS filtering traceable**: AdGuard Home should provide source-correlated query visibility (VLAN/client/IP/time), not only domain blocking.
4. **Keep primary and fallback paths consistent**: office Wi-Fi, wired, and remote VPN entries should converge to the same authorization model.

## Pre-deployment planning

1. **VLAN design**: define at least Management, Office, Guest, and Server segments; add per-tenant VLAN where required.
2. **IP planning**: reserve static ranges for AP, printers, NAS, and servers to avoid DHCP collisions.
3. **ACL baseline**: enforce default-deny with explicit allow rules for necessary cross-segment services (DNS, NTP, application ports).
4. **Identity-source alignment**: confirm LDAP/IdP group fields and deprovisioning SLA (for example, account disabled within 15 minutes of offboarding).
5. **Log-time consistency**: synchronize RADIUS, DNS, VPN, and firewall clocks via NTP before operations.

## Deployment steps

1. **Assess switch-layer capability**: verify support for 802.1Q trunk, RADIUS attributes, and port isolation; replace edge hardware first if unsupported.
2. **Build core services**: deploy FreeRADIUS, LDAP/IdP integration, and AdGuard Home with TLS and backup baseline.
3. **Define RADIUS policy**: create group-to-VLAN/ACL mapping so Wi-Fi, wired, and VPN use identical authorization logic.
4. **Apply AP/switch controls**: enable WPA2/WPA3-Enterprise or wired 802.1X, configure and rotate the RADIUS shared secret on AP/switch devices, and define fallback policy for temporary RADIUS unavailability.
5. **Apply DNS policy segmentation**: assign DNS policy by VLAN or client tags; begin with monitor mode for high-risk categories, then move to blocking.
6. **Align VPN authorization**: route VPN account policy through same RADIUS/LDAP group source.
7. **Finalize baseline documentation**: publish VLAN table, RADIUS mapping, DNS policy, configuration backups, and incident SOP.

## Technical validation checklist

1. Cross-tenant VLAN direct access is blocked except for explicitly authorized shared services.
2. Group-based login yields expected VLAN and resource access profile changes.
3. Malicious-domain samples are blocked and logs are traceable by source segment, host, and timestamp.
4. Simulated RADIUS or DNS node failure triggers acceptable failover behavior.
5. RADIUS and DNS configurations are restorable from backup within maintenance windows.

## Common failures and triage order

1. **Wi-Fi connects but wrong network segment assigned**: verify RADIUS return attributes (\`Tunnel-Type\`, \`Tunnel-Medium-Type\`, \`Tunnel-Private-Group-ID\`) and AP/switch application behavior.
2. **DNS policy appears enabled but not effective**: confirm endpoint DNS is forced to AdGuard Home and check for DoH/DoT bypass.
3. **Tenant suddenly loses internet access**: inspect VLAN gateway/ACL path, then review recent RADIUS policy changes and certificate validity.
4. **VPN privilege unexpectedly broadens**: usually caused by wrong group binding or unmanaged local accounts; realign to central identity source immediately.

## Operations guidance

- **Daily**: review high-risk DNS alerts and abnormal authentication failures.
- **Weekly**: verify group-change and deprovision sync for role and offboarding changes.
- **Monthly**: run sampled recovery drill for RADIUS, DNS, and network-device backups.
- **Quarterly**: review VLAN/IP utilization, ACL exception growth, and remove expired rules.

## References

- FreeRADIUS Documentation  
  https://www.freeradius.org/documentation/
- IEEE 802.1X Overview  
  https://1.ieee802.org/security/802-1x/
- AdGuard Home Documentation  
  https://adguard-dns.io/kb/adguard-home/
- RFC 2865: RADIUS  
  https://www.rfc-editor.org/rfc/rfc2865
`,gs=e({default:()=>_s}),_s=`---
type: tech
slug: tech/shared-dns-radius-isolation
title: |
  共享場域 DNS/RADIUS 隔離部署守則
description: |
  行雲資訊以 VLAN、RADIUS 與 AdGuard Home 組合實作租戶隔離，兼顧查詢可追溯性、遠端維運與最小權限原則。
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.45
  changefreq: monthly
  lastmod: build
---
## 共用場域的典型痛點

- 多個租戶共用同一套弱密碼 SSID，常見風險是帳密外流後無法快速定位來源，且橫向掃描容易互相影響。
- 若 DNS 過濾只放在單一出口設備，告警常只看到「某個來源 IP」，卻無法直接對應到哪個部門、哪位使用者或哪台裝置。
- 共享辦公場地通常只提供「可上網」等級的基礎服務，不會為單一租戶維護細緻 ACL、RADIUS policy 或事件追蹤規範。
- 當租戶搬遷、部門改組或設備汰換時，若網路沒有標準化，IT 團隊很容易落入「每次都重拉一次」的高成本循環。

## 行雲資訊的設計原則

1. **VLAN 先切乾淨**：先完成 L2/L3 分段再談政策，不把隔離責任壓在單一防火牆規則上。
2. **RADIUS 決定授權邏輯**：身分驗證、群組映射與 VLAN 指派統一在 RADIUS 層控管，避免 AP、Switch、VPN 各自維護一份權限清單。
3. **DNS 過濾要可追溯**：AdGuard Home 除了阻擋惡意網域，還要能回查查詢來源（VLAN/Client/IP）與時間，才能支撐稽核與事件應對。
4. **主備路徑一致**：無論使用者從辦公室 Wi-Fi、有線埠或遠端 VPN 進入，都應落到相同授權模型，避免「入口不同、權限不同」。

## 前置規畫

1. **VLAN 配置**：至少定義 Management、Office、Guest、Server 四類；若是多租戶空間，再為租戶獨立 VLAN。
2. **IP 規畫**：每段網段保留固定比例給靜態設備（AP、印表機、NAS、伺服器），避免後續 DHCP 與固定 IP 互撞。
3. **ACL 基準**：先寫「預設拒絕，按需放行」，明確列出可跨網段存取的必要服務（DNS、NTP、特定應用埠）。
4. **身份來源**：確認 LDAP/IdP 欄位可提供群組資訊，並約定停權時效（例如離職帳號 15 分鐘內失效）。
5. **日誌策略**：RADIUS、DNS、VPN、Firewall 的時間來源要先同步（NTP），否則事故時很難對齊事件時間軸。

## 部署步驟

1. **盤點交換層能力**：先確認現場 Switch 是否支援 802.1Q trunk、RADIUS attributes、port isolation；若不支援，先替換邊界設備再上政策。
2. **建立核心服務**：部署 FreeRADIUS、LDAP（或既有 IdP 連接）、AdGuard Home，並先完成 TLS 憑證與備份排程。
3. **定義 RADIUS policy**：按部門或租戶建立群組，配置對應 VLAN ID 與 ACL profile，確保同一群組在 Wi-Fi/有線/VPN 都套用同規則。
4. **佈署 AP/Switch 設定**：啟用 WPA2/WPA3-Enterprise 或有線 802.1X，設定 RADIUS server、shared secret、fallback policy，避免 RADIUS 暫時不可用時全網斷線。
5. **套用 DNS 分流策略**：依 VLAN 或 client tag 套用不同 DNS policy，將高風險分類（phishing/malware/newly-registered domains）先以監看模式上線，再分階段改成阻擋。
6. **導入 VPN 一致授權**：若有遠端存取需求，讓 VPN 帳號走同一套 RADIUS/LDAP 群組，避免遠端路徑繞過辦公室政策。
7. **完成配置基準文件**：整理 VLAN 表、RADIUS 群組對照、DNS policy、設備設定備份與異常處理 SOP，作為後續維運基準。

## 技術驗證清單

1. **隔離驗證**：不同租戶 VLAN 互相不可直連，僅允許經授權的共享服務可達。
2. **授權驗證**：同一帳號在不同群組登入時，獲得的 VLAN 與資源權限必須隨群組改變。
3. **DNS 驗證**：惡意網域測試樣本可被攔截，且日誌可追溯到來源網段、時間與查詢主機。
4. **容錯驗證**：模擬 RADIUS 或 DNS 單點故障，確認備援節點接手後服務不中斷或可在可接受時間內恢復。
5. **回復驗證**：可於維護窗口內從備份還原 RADIUS 與 DNS 設定，不需重新手工建置。

## 常見故障與排除順序

1. **使用者可連 Wi-Fi 但拿不到正確網段**：優先檢查 RADIUS 回傳屬性（\`Tunnel-Type\`, \`Tunnel-Medium-Type\`, \`Tunnel-Private-Group-ID\`）與 AP/Switch 是否正確套用。
2. **DNS policy 看似啟用但未生效**：先確認用戶端 DNS 是否被強制導向 AdGuard Home，再檢查是否存在 DoH/DoT 旁路。
3. **某租戶突然無法上網**：先看該 VLAN 的 gateway/ACL，再比對 RADIUS 近期 policy 變更紀錄與證書有效期。
4. **VPN 帳號權限異常放大**：通常是 VPN profile 綁錯群組或本地帳號未停用，需立即對齊回中央身份來源。

## 維運守則

- **每日**：檢查高風險 DNS 告警與異常認證失敗來源，先處理可疑外連與暴力嘗試。
- **每週**：審視群組異動與停權同步，確認離職/角色變更已反映在 RADIUS 與 VPN。
- **每月**：執行一次抽樣復原演練，驗證 RADIUS、DNS 與網路設備設定備份可用。
- **每季**：檢查 VLAN/IP 使用率、policy 膨脹與 ACL 例外，清除過期規則，避免維運負擔累積。

## 參考資料

- FreeRADIUS Documentation  
  https://www.freeradius.org/documentation/
- IEEE 802.1X Overview  
  https://1.ieee802.org/security/802-1x/
- AdGuard Home Documentation  
  https://adguard-dns.io/kb/adguard-home/
- RFC 2865: Remote Authentication Dial In User Service (RADIUS)  
  https://www.rfc-editor.org/rfc/rfc2865
`,vs=e({default:()=>ys}),ys=`---
type: tech
slug: tech/unifi-controller-migration-light-ops
title: |
  UniFi Controller Deployment, Cloud Migration, and Lightweight Managed Operations
description: |
  Practical guidance for deploying UniFi controllers, migrating between cloud and private hosting, and sustaining baseline operations under constrained scope.
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.45
  changefreq: monthly
  lastmod: build
---
## Deployment and planning

1. **Requirement discovery**: inventory AP/switch/gateway count, site distribution, and remote access requirements.
2. **Hosting selection**: choose cloud VM (for example Azure) or private infrastructure; in either model, establish firewall, backup, and monitoring baselines first.
3. **Controller baseline setup**: create sites, import devices, configure VLAN and SSID policies, and enable backup/certificate/notification controls.
4. **Management-plane hardening**: limit controller-management source networks and apply controlled account policy with strong authentication.

## Cloud-to-private migration flow

1. **Window planning**: schedule migration during an approved maintenance period aligned with business risk.
2. **Configuration export**: generate UniFi backup bundle and verify inclusion of site, device, policy, and credential material.
3. **Target import**: build destination controller in private environment, import backup, and validate adopt/connect parity.
4. **Controller reconnect cutover**: update inform URL, DNS, and required NAT/ACL controls so AP/switch endpoints reattach correctly.
5. **Stabilization checks**: monitor offline rates, roaming behavior, and alert trends during observation period.

## Lightweight managed operations model

1. **Controlled update windows**: run controller and firmware updates only in approved windows with pre-checks for version compatibility.
2. **Alert-priority handling**: classify alerts into informational, warning, and critical lanes; critical lane validates service continuity first.
3. **Configuration-drift checks**: periodically compare intended site/device policies against live state.

## Common issues and triage order

1. **Repeated device offline events**: verify controller reachability and inform URL first, then DNS and inter-site firewall policy.
2. **Post-migration adoption failure**: compare certificate state, time synchronization, and controller-version compatibility.
3. **Wi-Fi quality regression**: validate channel plan, transmit power, and roaming thresholds against pre-migration baseline.
4. **Alert-volume spike**: check whether thresholds were carried from old environment without recalibration.

## Technical validation checklist

1. Device reconnection ratio and post-migration configuration consistency meet expected baseline.
2. Management interfaces are limited to controlled source networks and account policy is active.
3. Update process includes compatibility checks and staged rollout records.
4. Alert-priority workflow is reproducible and operationally clear.
5. Observation window shows no sustained offline or roaming anomaly trend.

## References

- UniFi Network Application Documentation  
  https://help.ui.com/hc/en-us/categories/200320654-UniFi-Network
`,bs=e({default:()=>xs}),xs=`---
type: tech
slug: tech/unifi-controller-migration-light-ops
title: |
  UniFi 控制器建置、遷移與輕量代管實務
description: |
  行雲資訊整理 UniFi 控制器在雲端與私有環境間的建置與平移流程，並定義低成本代管下的基本維運邊界。
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.45
  changefreq: monthly
  lastmod: build
---
## 建置與規畫

1. **需求確認**：盤點需要管理的 AP / Switch / Gateway 數量、站點位置與遠端存取需求。
2. **環境選擇**：可部署在雲端 VM（例如 Azure）或私有環境；不論在哪裡，都先完成防火牆、備份與監控基準。
3. **控制器設定**：建立站點、匯入設備、設定 VLAN 與 SSID，並配置自動備份、管理憑證與通知通道。
4. **管理面防護**：限制控制器管理介面來源網段，搭配雙因素登入或受控帳號策略，避免暴露在公開網路。

## 雲端遷移至私有雲

1. **評估時間**：在需要移轉或調整成本時，選定維護窗口。
2. **匯出設定**：使用 UniFi Controller 匯出備份檔，確認包含裝置、站點、策略與憑證資訊。
3. **導入新環境**：在私有環境建立新控制器，匯入備份後逐台驗證 Adopt/Connected 狀態與配置一致性。
4. **控制回連切換**：更新 inform URL、DNS 與必要的 NAT/ACL 規則，確保 AP/Switch 能回連到新控制器。
5. **觀測期檢查**：在切換後觀察設備離線率、漫遊事件與告警趨勢，確認遷移未造成長尾異常。

## 輕量代管

1. **更新窗口控管**：控制器與設備韌體更新僅在核准時段執行，先做版本相容性檢查再分批套用。
2. **告警分級處置**：將告警分成資訊/警告/重大三類，重大告警優先確認連線與服務可用性。
3. **配置偏移檢查**：定期比對站點設定與裝置設定，避免手動變更造成策略漂移。

## 常見問題與排除順序

1. **設備反覆離線**：先檢查控制器可達性與 inform URL，再看 DNS 解析與站點間防火牆規則。
2. **遷移後裝置無法 Adopt**：比對憑證、時間同步與控制器版本，排除版本差異導致的相容性問題。
3. **Wi-Fi 體驗下降**：檢查信道規劃、發射功率與漫遊閾值是否與舊環境一致。
4. **告警暴增**：先確認告警閾值是否沿用舊環境基準，必要時依站點負載重新校正。

## 技術檢核清單

1. 控制器遷移後設備回連率與配置一致性均符合預期。
2. 管理入口受限於受控網段且帳號策略已生效。
3. 更新流程具版本相容性檢查與分批套用紀錄。
4. 告警分級與處置流程可重現執行。
5. 觀測期內無持續性離線或漫遊異常趨勢。

## 參考資料

- UniFi Network Application Documentation  
  https://help.ui.com/hc/en-us/categories/200320654-UniFi-Network
`,Ss=e({default:()=>Cs}),Cs=`---
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
2. **State machine**: manage account states as \`pending -> active -> suspended -> disabled -> archived\`, with explicit resource scope per state.
3. **Activation flow**: set expiry, group assignment, and MFA conditions at creation time.
4. **Disablement flow**: revoke VPN profile, RADIUS group grants, and local exception accounts together.
5. **Periodic reconciliation**: remove stale/ghost accounts first, then adjust permissions, and compare account lists, login history, expiry fields, and personnel roster monthly.

## VPN/RADIUS consistency rules

1. **Group mapping table**: same group should map to consistent ACL/VLAN behavior across VPN and 802.1X.
2. **Attribute standardization**: keep RADIUS response attributes (for example \`Filter-Id\`, \`Tunnel-Private-Group-ID\`) versioned and named consistently.
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
`,ws=e({default:()=>Ts}),Ts=`---
type: tech
slug: tech/vpn-radius-certificate-lifecycle
title: |
  VPN/RADIUS 憑證與帳號生命週期管理
description: |
  行雲資訊以 ACME、自動化腳本與受控派送流程管理多站點 VPN/RADIUS 與 802.1X 憑證及帳號生命週期，完整保留啟用、輪替、停用與稽核軌跡。
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.45
  changefreq: monthly
  lastmod: build
---
## 為什麼需要流程化

- 共享設備同時服務 VPN 與 802.1X，若憑證與帳號缺乏版本控管，常在到期或人員流動時發生連線中斷。
- 客戶往往沒有專職管理員，需要我們幫忙建立「誰建立、誰停用、何時到期」的可追溯紀錄。
- 在多租戶或跨站點場景，單一失效憑證可能同時影響 RADIUS、VPN 與內部 API，若缺少一致規格，排障會被迫逐台手工檢查。
- 憑證、帳號與群組權限其實是同一條存取鏈，任何一環不同步都會造成「可登入但不可用」或「未授權卻可連線」。

## 憑證管理

1. **ACME 自動簽發**：RADIUS、VPN 與 DNS 服務統一走 ACME 流程，優先使用 DNS-01，避免額外開放 HTTP 驗證入口。
2. **用途分離**：VPN Server、RADIUS、內部 API 不共用同一把私鑰，降低單點洩露風險。
3. **鏈結完整性**：部署時同時校驗 leaf/intermediate chain，避免客戶端因鏈結不完整出現間歇性握手失敗。
4. **輪替窗口控制**：把簽發、派送、reload 拆成可回滾步驟，先在次要節點套用再推核心節點。
5. **剩餘天數策略**：每週檢查有效期與 OCSP/CRL 可達性，僅在逼近門檻或鏈結異常時觸發更新，避免不必要輪替。

## PKI 與密鑰邊界

1. **私鑰儲存**：私鑰檔案權限最小化（例如僅服務帳號可讀），避免備份或同步流程外洩。
2. **節點派送**：使用受控通道分發憑證，可採 SSH 推送（含主機指紋校驗）或由受控管線觸發節點 agent 拉取；兩種模式都應避免聊天工具或臨時檔案分享。
3. **版本標記**：每次部署記錄 fingerprint、起訖時間與服務版本，便於比對是否已套用正確憑證。
4. **撤銷策略**：若偵測密鑰外洩，能快速替換並更新信任鏈，避免舊憑證持續被接受。

## 帳號生命週期

1. **集中來源**：所有 VPN/RADIUS 帳號與群組以 LDAP（或同等目錄服務）為主來源，避免多處維護造成權限分岔。
2. **狀態機管理**：帳號狀態分為 \`pending -> active -> suspended -> disabled -> archived\`，每個狀態都定義可用資源與存續時間。
3. **啟用流程**：建立帳號時同時設定到期日、群組與 MFA 條件，避免先開通再補安全條件。
4. **停用流程**：停用時同步撤銷 VPN profile、RADIUS 群組與可能留存的本機例外帳號，確保不留旁路入口。
5. **定期比對**：每月比對帳號清單、登入紀錄、到期日與人員名單，先清除幽靈帳號再調整權限。

## RADIUS/VPN 一致性規則

1. **群組對照表**：同一群組在 VPN 與 802.1X 需對應一致 ACL/VLAN，避免入口不同導致權限落差。
2. **屬性標準化**：RADIUS reply attributes（如 \`Filter-Id\`、\`Tunnel-Private-Group-ID\`）需固定命名與版本註記。
3. **例外時效**：臨時放寬權限必須帶到期條件，到期自動回復預設策略。
4. **多站點同步**：若有多 RADIUS 節點，變更必須具備同步順序與一致性檢查，避免部分節點仍使用舊規則。

## 常見故障與排除順序

1. **憑證有效但仍無法握手**：先檢查中繼憑證鏈與 SNI/主機名對應，再看客戶端信任庫是否過舊。
2. **VPN 可連但 802.1X 失敗**：比對群組映射與 RADIUS 回傳屬性，確認是否只有單一路徑套用新策略。
3. **帳號顯示 active 但登入被拒**：檢查帳號到期欄位、密碼 hash 同步狀態、MFA 條件與來源 IP 限制。
4. **輪替後間歇性掉線**：先看節點是否全部 reload 新憑證，再檢查 session cache 與連線重協商行為。

## 通知與文件控管

- 憑證輪替、帳號狀態變更與高風險登入事件需有時間戳、變更者、影響範圍與結果摘要。
- 文件僅保留必要技術資訊：帳號清單、群組映射、憑證版本、策略差異與異常紀錄，不保存多餘敏感資料。
- 對外輸出前先做資料最小化，確保不包含私鑰、明文密碼或不必要的個資欄位。

## 參考資料

- RFC 2865: Remote Authentication Dial In User Service (RADIUS)  
  https://www.rfc-editor.org/rfc/rfc2865
- RFC 5216: EAP-TLS Authentication Protocol  
  https://www.rfc-editor.org/rfc/rfc5216
- FreeRADIUS Documentation  
  https://www.freeradius.org/documentation/
- Let’s Encrypt / ACME (RFC 8555)  
  https://www.rfc-editor.org/rfc/rfc8555
`,Es=e({default:()=>Ds}),Ds=`---
type: tech
slug: tech/wifi-controller-firmware-schedule
title: |
  Firmware Validation and Scheduling for Managed Wireless Controllers
description: |
  A controlled firmware lifecycle for managed wireless controllers, using topology-matched lab validation, off-peak windows, staged rollout, and rollback-ready observation.
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.45
  changefreq: monthly
  lastmod: build
---
## Usage scenario

- Many small and medium office networks still run controllers and switches with shared administrator credentials, while AP redundancy remains limited.
- Uncontrolled firmware updates during business hours can create broad connectivity impact.
- The goal is to maintain update cadence and security posture without disruptive architecture changes.

## Pre-update technical baseline

1. **Compatibility matrix**: verify controller version, AP firmware version, and switch PoE firmware compatibility.
2. **Rollback image readiness**: preserve pre-update version mapping and restoration path.
3. **Site grouping rules**: segment rollout batches by floor, department, or traffic profile.
4. **Observation metrics**: define post-update indicators such as connection rate, offline rate, roaming success, and alert volume.

## Operational method

1. **Off-peak execution windows**: update only in approved low-impact periods (late night or early weekend window).
2. **Small-batch rollout**: update limited device groups per batch and confirm reconnection status through controller telemetry.
3. **Immediate anomaly handling**: if endpoints fail to return online, attempt remote recovery first, then escalate onsite intervention if required.
4. **Stakeholder synchronization**: notify update outcomes per agreed policy and monitor user-side feedback across following workdays.

## Common issues and triage order

1. **AP remains offline after update**: verify PoE and uplink first, then controller adoption status.
2. **Localized signal degradation**: compare transmit power and channel settings for post-update reset behavior.
3. **Roaming anomalies increase**: verify minimum RSSI, band steering, and 802.11r/k/v consistency.
4. **Alerts spike after successful update**: recalibrate thresholds before assuming true service regression.

## Technical validation checklist

1. Compatibility matrix and rollback route are verified before rollout.
2. Every update batch shows complete endpoint reconnection in controller telemetry.
3. Core indicators (offline rate, roaming behavior) do not show sustained degradation.
4. Failed endpoints can be rolled back or replaced within maintenance window.
5. Change logs are traceable by site, batch, and firmware version.

## References

- UniFi Network Application Documentation  
  https://help.ui.com/hc/en-us/categories/200320654-UniFi-Network
- IEEE 802.11 Roaming Enhancements Overview  
  https://standards.ieee.org/ieee/802.11/7028/
`,Os=e({default:()=>ks}),ks=`---
type: tech
slug: tech/wifi-controller-firmware-schedule
title: |
  受限無線控制器的韌體驗證與排程
description: |
  在無法任意中斷連線的辦公場域，行雲資訊以拓樸對照實驗、離峰排程與分批觀測流程，降低受控型無線控制器升級風險並保留回復路徑。
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.45
  changefreq: monthly
  lastmod: build
---
## 使用情境

- 多數中小企業的無線控制器與交換器仍共用管理帳號，且缺乏冗餘 AP。
- 在營業時間進行韌體更新很容易造成全辦公室離線。
- 我們需要在無法大量改動架構的前提下，仍維持韌體更新頻率與安全性。

## 前置技術基準

1. **版本相容矩陣**：先確認控制器版本、AP 韌體版本與交換器 PoE 韌體的相容組合。
2. **回退映像準備**：保留更新前版本資訊與還原路徑，避免異常時無法快速回復。
3. **站點分群規則**：依樓層/部門/流量特性分群，確保分批更新時影響範圍可控。
4. **觀測指標固定化**：先定義更新後需觀測的連線率、離線率、漫遊成功率與告警數量。

## 實際採取的方式

1. **選定離峰時段**：僅在客戶允許的離峰時段（深夜或週末清晨）執行韌體更新，減少商務影響。
2. **小批量推送**：一次只更新少量設備，並觀察控制器介面是否顯示該批裝置重新連線與回報正常。
3. **異常即時處置**：若更新後設備無法回復線上，先嘗試遠端復原；必要時立即安排到場檢查或重新佈署備援設備。
4. **同步客戶**：依客戶需求決定是否即時通知更新結果，並在後續數個工作天內持續關注是否有使用者回報異常。

## 常見問題與排除順序

1. **更新後 AP 長時間離線**：先檢查 PoE 供電與 uplink，再檢查控制器 adoption 狀態。
2. **少數區域訊號明顯變差**：比對發射功率與信道設定是否被新版重置。
3. **漫遊異常增加**：檢查最小 RSSI、band steering 與 802.11r/k/v 設定是否與舊版一致。
4. **更新成功但告警暴增**：先校正告警閾值，再確認是否真有服務品質退化。

## 技術檢核清單

1. 更新前已確認版本相容矩陣與回退路徑。
2. 每批更新都可在控制器端觀測到完整回連。
3. 更新後核心指標（離線率、漫遊率）未持續劣化。
4. 異常設備可在維護窗口內完成回退或替代處置。
5. 更新紀錄可回溯到站點、批次與韌體版本。

## 參考資料

- UniFi Network Application Documentation  
  https://help.ui.com/hc/en-us/categories/200320654-UniFi-Network
- IEEE 802.11 Roaming Enhancements Overview  
  https://standards.ieee.org/ieee/802.11/7028/
`,As=e({default:()=>js}),js=`---
type: tech
slug: tech/zitadel-jamf-connect-validation-lab
title: |
  Building a ZITADEL Validation Lab for Jamf Connect
description: |
  A controlled validation lab method using ZITADEL to reproduce Jamf Connect OIDC behavior and isolate third-party identity-provider compatibility gaps.
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.45
  changefreq: monthly
  lastmod: build
---
## Why a validation lab is needed

- When a target OIDC provider lacks full observability or cannot reliably reproduce login behavior, root-cause attribution becomes ambiguous.
- ZITADEL is a suitable controlled OIDC baseline because it can quickly provide standard-compliant apps and test identities for deterministic Jamf Connect checks.
- A controlled validation lab separates client-side (Jamf Connect) configuration causes from provider-side OIDC implementation causes.
- Screenshot reference: ![Jamf Connect application example screenshot](./jamf-connect-application-screenshot.png)
  <!-- media-description:for ./jamf-connect-application-screenshot.png -->
  This screenshot shows the Jamf Connect application configuration surface used as the client-side reference during OIDC validation. The lab keeps these client parameters fixed while comparing ZITADEL behavior against the target identity provider.
  <!-- media-description:end -->

## Pre-lab technical baseline

1. **Clock sync and TLS integrity**: align time across ZITADEL nodes, test devices, and directory services; apply valid TLS chain.
2. **Freeze OIDC parameters**: explicitly define \`issuer\`, \`client_id\`, \`redirect URI\`, \`scope\`, \`response type\`, and \`grant_type\`.
3. **Tiered test identities**: prepare standard user, admin user, and MFA-required user paths.
4. **Log retention policy**: define filename and retention conventions for both Jamf Connect and ZITADEL evidence.

## Validation workflow

1. **Apply Jamf Connect profile**: configure Jamf Connect on test endpoint/VM with ZITADEL parameters and verify profile consistency.
2. **Run standard login script**: test first login, password change, MFA, token refresh, and re-login in fixed order.
3. **Collect and correlate logs**: retain Jamf Connect, system, and ZITADEL events with aligned timestamps.
4. **Compare with target environment**: apply identical parameters against target OIDC and compare auth responses, \`claim\` structure, and error codes.
5. **Single-variable correction loop**: modify one parameter per iteration (for example \`scope\` or \`redirect URI\`) and retest.

## Common errors and triage order

1. **Login page opens but exchange fails**: verify exact \`redirect URI\` and \`callback\` path match, then check \`client_secret\` validity.
2. **Login succeeds but attributes do not map**: compare ID token/access token \`claim\` content with Jamf Connect mapping rules.
3. **MFA behavior inconsistent**: verify policy target-group match and device timezone/token expiry configuration.
4. **Intermittent failure**: inspect TLS chain stability and DNS resolution first, then reverse-proxy/WAF behavior.

## Technical validation checklist

1. ZITADEL lab reproduces complete login flow reliably.
2. Jamf Connect and OIDC parameter sets are versioned and recorded.
3. Both success and failure cases map to traceable evidence.
4. Comparison tests can clearly separate client-side and provider-side issues.
5. Each fix iteration changes one variable only for reproducible comparison.

## References

- Jamf Connect Documentation  
  https://learn.jamf.com/en-US/bundle/jamf-connect-documentation-current/page/About_Jamf_Connect.html
- ZITADEL OIDC Documentation  
  https://zitadel.com/docs/apis/openidoauth
- OpenID Connect Core 1.0  
  https://openid.net/specs/openid-connect-core-1_0.html
`,Ms=e({default:()=>Ns}),Ns=`---
type: tech
slug: tech/zitadel-jamf-connect-validation-lab
title: |
  使用 ZITADEL 建立 Jamf Connect 驗證實驗室
description: |
  行雲資訊以 ZITADEL 建立 OIDC 對照環境，重現 Jamf Connect 行為並隔離第三方供應商的相容性差異。
ogType: article
index: true
deploy: true
sitemap:
  priority: 0.45
  changefreq: monthly
  lastmod: build
---
## 為何需要測試實驗室

- 若供應商端缺少完整可觀測性（log 不全）或無法穩定重現流程，就難以直接判定錯誤來源，需先建立對照基準。
- ZITADEL 能快速提供可控且符合標準的 OIDC baseline，適合用來驗證 Jamf Connect 設定、token 交換與登入行為。
- 透過對照可把原因明確分成「客戶端（Jamf Connect）設定問題」與「供應商端 OIDC 實作差異」，避免雙方反覆猜測。
- 截圖參考： ![Jamf Connect application example screenshot](./jamf-connect-application-screenshot.png)
  <!-- media-description:for ./jamf-connect-application-screenshot.png -->
  這張截圖呈現 Jamf Connect 應用程式設定畫面，可作為 OIDC 驗證時的客戶端參數對照。測試實驗室會固定這些 Jamf Connect 參數，再比較 ZITADEL 與目標身分供應商的回應差異。
  <!-- media-description:end -->

## 前置技術基準

1. **時鐘同步與 TLS**：先確認 ZITADEL 節點、測試裝置與目錄服務時間一致，並套用有效 TLS 憑證，避免 token 驗證因時差或憑證鏈失敗。
2. **OIDC 參數固定化**：明確定義 \`issuer\`、\`client_id\`、\`redirect URI\`、\`scope\`、\`response type\` 與 \`grant_type\`，避免測試期間反覆變動造成結果不可比。
3. **測試帳號分層**：建立一般使用者、管理員、需 MFA 使用者三類帳號，覆蓋常見登入路徑與策略差異。
4. **log 保存策略**：先定義 Jamf Connect 與 ZITADEL log 的保存時間與檔名規則，確保每次測試都可回溯。

## 測試流程

1. **套用 Jamf Connect 設定**：在測試裝置或 VM 安裝 Jamf Connect，填入 ZITADEL 對應參數，並確認 plist/profile 內容與預期一致。
2. **執行標準登入腳本**：依固定順序測試首次登入、密碼變更、MFA、token 更新與重新登入，避免每次測試路徑不同。
3. **蒐集與對時 log**：同步保留 Jamf Connect、系統 log 與 ZITADEL 事件，並對齊時間戳，定位失敗發生在授權端或客戶端。
4. **對照目標環境**：將同組參數套到目標 OIDC 環境，對比授權回應、\`claim\` 欄位與錯誤碼差異，快速定位供應方缺口。
5. **最小修正循環**：每次只改一項參數（例如 \`scope\` 或 \`redirect URI\`），重新測試以避免多變因干擾。

## 常見錯誤與排除順序

1. **登入頁可開啟但無法完成交換**：先檢查 \`redirect URI\` 與 \`callback\` 路徑是否完全一致，再檢查 \`client secret\` 是否過期。
2. **可登入但帳號屬性不同步**：比對 ID token/Access token 的 \`claim\` 與 Jamf Connect 對應欄位設定。
3. **MFA 行為不一致**：確認策略套用對象是否命中正確群組，並檢查裝置時區與 token 到期設定。
4. **間歇性失敗**：優先查詢 TLS 憑證鏈與 DNS 解析結果是否穩定，再看反向代理或 WAF 規則。

## 技術檢核清單

1. ZITADEL 實驗室可穩定重現完整登入流程。
2. Jamf Connect 與 OIDC 參數均有固定版本與紀錄。
3. 成功與失敗案例都能對應到可追溯 log。
4. 對照測試可明確分離客戶端與供應端問題。
5. 每次修正僅單一變更，結果可比較與回放。

## 參考資料

- Jamf Connect Documentation  
  https://learn.jamf.com/en-US/bundle/jamf-connect-documentation-current/page/About_Jamf_Connect.html
- ZITADEL OIDC Documentation  
  https://zitadel.com/docs/apis/openidoauth
- OpenID Connect Core 1.0  
  https://openid.net/specs/openid-connect-core-1_0.html
`,Ps=Object.assign({"../content/cases/ana-unifi-controller/index.en.md":N,"../content/cases/ana-unifi-controller/index.zh-tw.md":F,"../content/cases/cay-azure-erp/index.en.md":I,"../content/cases/cay-azure-erp/index.zh-tw.md":ie,"../content/cases/cay-dns-filter/index.en.md":L,"../content/cases/cay-dns-filter/index.zh-tw.md":z,"../content/cases/cay-ldap-onboarding/index.en.md":B,"../content/cases/cay-ldap-onboarding/index.zh-tw.md":H,"../content/cases/cay-machine-room/index.en.md":W,"../content/cases/cay-machine-room/index.zh-tw.md":K,"../content/cases/cay-server-farm/index.en.md":J,"../content/cases/cay-server-farm/index.zh-tw.md":Y,"../content/cases/cpa-jjp-network-audit/index.en.md":X,"../content/cases/cpa-jjp-network-audit/index.zh-tw.md":Z,"../content/cases/jal-pa/index.en.md":de,"../content/cases/jal-pa/index.zh-tw.md":pe,"../content/cases/klm-aua-erp/index.en.md":he,"../content/cases/klm-aua-erp/index.zh-tw.md":_e,"../content/cases/lgl-awe-pve-vgpu-jamf/index.en.md":ye,"../content/cases/lgl-awe-pve-vgpu-jamf/index.zh-tw.md":xe,"../content/cases/lgl-cal-jamf-oidc/index.en.md":Ce,"../content/cases/lgl-cal-jamf-oidc/index.zh-tw.md":Te,"../content/cases/lgl-csa-vpn/index.en.md":De,"../content/cases/lgl-csa-vpn/index.zh-tw.md":ke,"../content/cases/lgl-hda-openvz-pve-eval/index.en.md":je,"../content/cases/lgl-hda-openvz-pve-eval/index.zh-tw.md":Ne,"../content/cases/lgl-nax-gpu-passthrough/index.en.md":Fe,"../content/cases/lgl-nax-gpu-passthrough/index.zh-tw.md":Le,"../content/cases/lgl-tax-pve-io-wait/index.en.md":ze,"../content/cases/lgl-tax-pve-io-wait/index.zh-tw.md":Ve,"../content/cases/tgw-mdm/index.en.md":Ue,"../content/cases/tgw-mdm/index.zh-tw.md":Ge,"../content/cases/tgw-remote-network/index.en.md":qe,"../content/cases/tgw-remote-network/index.zh-tw.md":Ye,"../content/cases/tgw-zero-trust-monitoring/index.en.md":Ze,"../content/cases/tgw-zero-trust-monitoring/index.zh-tw.md":$e,"../content/cases/ttw-mdm/index.en.md":tt,"../content/cases/ttw-mdm/index.zh-tw.md":rt,"../content/cases/ttw-remote-network/index.en.md":at,"../content/cases/ttw-remote-network/index.zh-tw.md":st,"../content/cases/uia-remote-network/index.en.md":lt,"../content/cases/uia-remote-network/index.zh-tw.md":dt,"../content/cases/wzz-contract-strategy/index.en.md":pt,"../content/cases/wzz-contract-strategy/index.zh-tw.md":ht,"../content/cases/wzz-nas-migration/index.en.md":_t,"../content/cases/wzz-nas-migration/index.zh-tw.md":yt,"../content/cases/wzz-network-controller/index.en.md":xt,"../content/cases/wzz-network-controller/index.zh-tw.md":Ct,"../content/faq/akvorado-data-quality-checks/index.en.md":Tt,"../content/faq/akvorado-data-quality-checks/index.zh-tw.md":Dt,"../content/faq/akvorado-vs-snmp-monitoring/index.en.md":kt,"../content/faq/akvorado-vs-snmp-monitoring/index.zh-tw.md":jt,"../content/faq/backup-schedule-collision-risks/index.en.md":Nt,"../content/faq/backup-schedule-collision-risks/index.zh-tw.md":Ft,"../content/faq/budget-nas-refresh-plan/index.en.md":Lt,"../content/faq/budget-nas-refresh-plan/index.zh-tw.md":zt,"../content/faq/closed-hypervisor-migration-plan/index.en.md":Vt,"../content/faq/closed-hypervisor-migration-plan/index.zh-tw.md":Ut,"../content/faq/controlled-ap-dual-network-data/index.en.md":Gt,"../content/faq/controlled-ap-dual-network-data/index.zh-tw.md":qt,"../content/faq/custom-app-delivery-without-apple-account/index.en.md":Yt,"../content/faq/custom-app-delivery-without-apple-account/index.zh-tw.md":Zt,"../content/faq/custom-app-ownership-transfer/index.en.md":$t,"../content/faq/custom-app-ownership-transfer/index.zh-tw.md":tn,"../content/faq/datacenter-move-ups-plan/index.en.md":rn,"../content/faq/datacenter-move-ups-plan/index.zh-tw.md":on,"../content/faq/day-one-onboarding-account-flow/index.en.md":cn,"../content/faq/day-one-onboarding-account-flow/index.zh-tw.md":un,"../content/faq/it-refresh-minimize-downtime/index.en.md":fn,"../content/faq/it-refresh-minimize-downtime/index.zh-tw.md":mn,"../content/faq/jamf-audit-training-plan/index.en.md":gn,"../content/faq/jamf-audit-training-plan/index.zh-tw.md":vn,"../content/faq/jamf-connect-oidc-vendor-verification/index.en.md":bn,"../content/faq/jamf-connect-oidc-vendor-verification/index.zh-tw.md":Sn,"../content/faq/license-expired-new-partner-checklist/index.en.md":wn,"../content/faq/license-expired-new-partner-checklist/index.zh-tw.md":En,"../content/faq/network-audit-report-fields/index.en.md":On,"../content/faq/network-audit-report-fields/index.zh-tw.md":An,"../content/faq/offline-gpu-passthrough-logs/index.en.md":Mn,"../content/faq/offline-gpu-passthrough-logs/index.zh-tw.md":Pn,"../content/faq/offline-troubleshooting-kits/index.en.md":In,"../content/faq/offline-troubleshooting-kits/index.zh-tw.md":Rn,"../content/faq/oidc-integration-log-requirements/index.en.md":Bn,"../content/faq/oidc-integration-log-requirements/index.zh-tw.md":Hn,"../content/faq/pve-io-wait-diagnostics/index.en.md":Wn,"../content/faq/pve-io-wait-diagnostics/index.zh-tw.md":Kn,"../content/faq/pve-pbs-multiple-backups-impact/index.en.md":Jn,"../content/faq/pve-pbs-multiple-backups-impact/index.zh-tw.md":Xn,"../content/faq/pve-pbs-quarterly-report-metrics/index.en.md":Qn,"../content/faq/pve-pbs-quarterly-report-metrics/index.zh-tw.md":er,"../content/faq/pve-vgpu-training-plan/index.en.md":nr,"../content/faq/pve-vgpu-training-plan/index.zh-tw.md":ir,"../content/faq/remote-ops-handover-docs/index.en.md":or,"../content/faq/remote-ops-handover-docs/index.zh-tw.md":cr,"../content/faq/remote-ops-transparency-without-monitoring/index.en.md":ur,"../content/faq/remote-ops-transparency-without-monitoring/index.zh-tw.md":fr,"../content/faq/remote-ops-with-shared-wifi-password/index.en.md":mr,"../content/faq/remote-ops-with-shared-wifi-password/index.zh-tw.md":gr,"../content/faq/restore-network-admin-access/index.en.md":vr,"../content/faq/restore-network-admin-access/index.zh-tw.md":br,"../content/faq/restricted-vpn-camera-access/index.en.md":Sr,"../content/faq/restricted-vpn-camera-access/index.zh-tw.md":wr,"../content/faq/shared-office-vlan-dns-isolation/index.en.md":Er,"../content/faq/shared-office-vlan-dns-isolation/index.zh-tw.md":Or,"../content/faq/unifi-controller-cloud-to-onprem-move/index.en.md":Ar,"../content/faq/unifi-controller-cloud-to-onprem-move/index.zh-tw.md":Mr,"../content/faq/unifi-controller-lite-managed-support/index.en.md":Pr,"../content/faq/unifi-controller-lite-managed-support/index.zh-tw.md":Ir,"../content/faq/unifi-controller-migration-without-downtime/index.en.md":Rr,"../content/faq/unifi-controller-migration-without-downtime/index.zh-tw.md":Br,"../content/faq/vpn-radius-certificate-lifecycle/index.en.md":Hr,"../content/faq/vpn-radius-certificate-lifecycle/index.zh-tw.md":Wr,"../content/legal/privacy-policy/index.en.md":Kr,"../content/legal/privacy-policy/index.zh-tw.md":Jr,"../content/legal/terms-of-use/index.en.md":Xr,"../content/legal/terms-of-use/index.zh-tw.md":Qr,"../content/services/8021x/index.en.md":ei,"../content/services/8021x/index.zh-tw.md":ni,"../content/services/backup-security/index.en.md":ii,"../content/services/backup-security/index.zh-tw.md":oi,"../content/services/container-devops/index.en.md":ci,"../content/services/container-devops/index.zh-tw.md":ui,"../content/services/custom-dev/index.en.md":fi,"../content/services/custom-dev/index.zh-tw.md":mi,"../content/services/hosting-operations/index.en.md":gi,"../content/services/hosting-operations/index.zh-tw.md":vi,"../content/services/iam-zitadel/index.en.md":bi,"../content/services/iam-zitadel/index.zh-tw.md":Si,"../content/services/idc-deployment/index.en.md":wi,"../content/services/idc-deployment/index.zh-tw.md":Ei,"../content/services/index.en.md":Oi,"../content/services/index.zh-tw.md":Ai,"../content/services/it-monitoring/index.en.md":Mi,"../content/services/it-monitoring/index.zh-tw.md":Pi,"../content/services/it-outsourcing/index.en.md":Ii,"../content/services/it-outsourcing/index.zh-tw.md":Ri,"../content/services/mdm/index.en.md":Bi,"../content/services/mdm/index.zh-tw.md":Hi,"../content/services/office-network/index.en.md":Wi,"../content/services/office-network/index.zh-tw.md":Ki,"../content/services/virtualization-cloud/index.en.md":Ji,"../content/services/virtualization-cloud/index.zh-tw.md":Xi,"../content/services/vpn-remote/index.en.md":Qi,"../content/services/vpn-remote/index.zh-tw.md":ea,"../content/services/wazuh-asset/index.en.md":na,"../content/services/wazuh-asset/index.zh-tw.md":ia,"../content/services/wazuh-siem/index.en.md":oa,"../content/services/wazuh-siem/index.zh-tw.md":ca,"../content/services/zero-trust/index.en.md":ua,"../content/services/zero-trust/index.zh-tw.md":fa,"../content/tech/akvorado-flow-collector-overview/index.en.md":ma,"../content/tech/akvorado-flow-collector-overview/index.zh-tw.md":ga,"../content/tech/akvorado-traffic-analysis-workflow/index.en.md":va,"../content/tech/akvorado-traffic-analysis-workflow/index.zh-tw.md":ba,"../content/tech/app-ownership-transfer-process/index.en.md":Sa,"../content/tech/app-ownership-transfer-process/index.zh-tw.md":wa,"../content/tech/budget-nas-refresh-plan/index.en.md":Ea,"../content/tech/budget-nas-refresh-plan/index.zh-tw.md":Oa,"../content/tech/closed-hypervisor-migration-validation/index.en.md":Aa,"../content/tech/closed-hypervisor-migration-validation/index.zh-tw.md":Ma,"../content/tech/controlled-ap-dual-path/index.en.md":Pa,"../content/tech/controlled-ap-dual-path/index.zh-tw.md":Ia,"../content/tech/custom-app-review-transfer/index.en.md":Ra,"../content/tech/custom-app-review-transfer/index.zh-tw.md":Ba,"../content/tech/datacenter-move-ups-improvement/index.en.md":Ha,"../content/tech/datacenter-move-ups-improvement/index.zh-tw.md":Wa,"../content/tech/it-inventory-recovery-manual/index.en.md":Ka,"../content/tech/it-inventory-recovery-manual/index.zh-tw.md":Ja,"../content/tech/it-refresh-migration-blueprint/index.en.md":Xa,"../content/tech/it-refresh-migration-blueprint/index.zh-tw.md":Qa,"../content/tech/jamf-audit-cross-team/index.en.md":eo,"../content/tech/jamf-audit-cross-team/index.zh-tw.md":no,"../content/tech/jamf-trust-vpn-control/index.en.md":io,"../content/tech/jamf-trust-vpn-control/index.zh-tw.md":oo,"../content/tech/multi-stage-migration-checklist/index.en.md":co,"../content/tech/multi-stage-migration-checklist/index.zh-tw.md":uo,"../content/tech/network-audit-template-delivery/index.en.md":po,"../content/tech/network-audit-template-delivery/index.zh-tw.md":ho,"../content/tech/network-license-takeover-checklist/index.en.md":_o,"../content/tech/network-license-takeover-checklist/index.zh-tw.md":yo,"../content/tech/offline-pve-gpu-passthrough/index.en.md":xo,"../content/tech/offline-pve-gpu-passthrough/index.zh-tw.md":Co,"../content/tech/oidc-test-logs-communication/index.en.md":To,"../content/tech/oidc-test-logs-communication/index.zh-tw.md":Do,"../content/tech/on-site-troubleshooting-handbook/index.en.md":ko,"../content/tech/on-site-troubleshooting-handbook/index.zh-tw.md":jo,"../content/tech/onboarding-account-automation/index.en.md":No,"../content/tech/onboarding-account-automation/index.zh-tw.md":Fo,"../content/tech/operations-handover-package/index.en.md":Lo,"../content/tech/operations-handover-package/index.zh-tw.md":zo,"../content/tech/passive-inspection-report-workflow/index.en.md":Vo,"../content/tech/passive-inspection-report-workflow/index.zh-tw.md":Uo,"../content/tech/pve-backup-schedule-tuning-guide/index.en.md":Go,"../content/tech/pve-backup-schedule-tuning-guide/index.zh-tw.md":qo,"../content/tech/pve-io-wait-diagnostics-workflow/index.en.md":Yo,"../content/tech/pve-io-wait-diagnostics-workflow/index.zh-tw.md":Zo,"../content/tech/pve-pbs-backup-schedule-validation/index.en.md":$o,"../content/tech/pve-pbs-backup-schedule-validation/index.zh-tw.md":ts,"../content/tech/pve-quarterly-report-template/index.en.md":rs,"../content/tech/pve-quarterly-report-template/index.zh-tw.md":as,"../content/tech/pve-vgpu-rollout-training/index.en.md":ss,"../content/tech/pve-vgpu-rollout-training/index.zh-tw.md":ls,"../content/tech/remote-inspection-reporting/index.en.md":ds,"../content/tech/remote-inspection-reporting/index.zh-tw.md":ps,"../content/tech/shared-dns-radius-isolation/index.en.md":hs,"../content/tech/shared-dns-radius-isolation/index.zh-tw.md":_s,"../content/tech/unifi-controller-migration-light-ops/index.en.md":ys,"../content/tech/unifi-controller-migration-light-ops/index.zh-tw.md":xs,"../content/tech/vpn-radius-certificate-lifecycle/index.en.md":Cs,"../content/tech/vpn-radius-certificate-lifecycle/index.zh-tw.md":Ts,"../content/tech/wifi-controller-firmware-schedule/index.en.md":Ds,"../content/tech/wifi-controller-firmware-schedule/index.zh-tw.md":ks,"../content/tech/zitadel-jamf-connect-validation-lab/index.en.md":js,"../content/tech/zitadel-jamf-connect-validation-lab/index.zh-tw.md":Ns}),Fs=Object.keys(Ps),Is=e=>{let t=e.match(/\.([a-z-]+)\.md$/i);return t?t[1]:null},Ls=e=>e.replace(/\.([a-z-]+)\.md$/i,``).replace(/^..\//,``),Rs=(e=``)=>{let t=typeof e==`string`?e:String(e||``),n=t.match(/^---\s*\n([\s\S]*?)\n---\s*\n?/);return n?{meta:O.parse(n[1])||{},body:t.slice(n[0].length)}:{meta:{},body:t}},zs=(e=``)=>e.replace(/^\/+/,``).replace(/\/+$/,``),Bs=e=>typeof e==`string`?e.trim():``,Vs=()=>{let e=new Map;return Fs.forEach(t=>{let n=Ps[t],{meta:r}=Rs(n),i=Is(t)||`zh-tw`,a=zs(Ls(t).split(`/`).slice(1).join(`/`)),o=Object.hasOwn(r,`slug`),s=zs(o?r.slug:a);!o&&s.endsWith(`/index`)&&(s=s.replace(/\/index$/,``));let c=s?s.replace(/\//g,`-`):r.pageKey||``,l=r.type||`page`,u=s,d=Bs(r.title),f=Bs(r.description),p=r.ogType,m=r.index!==!1,h=r.sitemap||{},g=r.jsonld||{},_=r.deploy===!0,v=e.get(c)||{pageKey:c,type:l,slugs:{},titles:{},descriptions:{},og:{},index:m,sitemap:h,jsonld:g,deploy:!1};v.type=l,v.slugs[i]=u,v.titles[i]=d,f&&(v.descriptions[i]=f),p&&(v.og.type=p),v.index=m,v.sitemap=h,v.jsonld=g,v.deploy=v.deploy||_,e.set(c,v)}),Array.from(e.values())},Hs=(e=``)=>e?(typeof e==`string`?e:String(e)).replace(/^\/+/,``).replace(/\/+$/,``):``,Us=(()=>{let e=Vs(),t=new Map;return[...j,...e].forEach(e=>{t.set(e.pageKey,e)}),Array.from(t.values())})(),Ws=()=>A,Gs=()=>Us,Q=e=>Us.find(t=>t.pageKey===e),Ks=(e,t)=>e&&(Hs(e.slugs?.[t])||Hs(e.slugs?.[A.defaultLocale])||Object.values(e.slugs||{}).map(e=>Hs(e)).find(Boolean))||``,qs=(e,t)=>Ks(Q(e),t),Js=(e,t)=>{let n=qs(e,t);if(!n)return null;let r=n.split(`/`),i=r[0],a=r.slice(1).join(`/`)||`index`;switch(i){case`services`:return`../content/${i}/${a}`;case`cases`:return`../content/${i}/${a}`;case`tech`:return`../content/${i}/${a}`;default:return`../content/${n}`}},Ys=(e,t)=>{let n=Q(e);if(!n)return`/`;let r=Ks(n,t);return r?`/${t}/${r}/`:`/${t}/`},Xs=(e,t)=>{let n=Q(e);if(!n)return`/`;let r=Ks(n,t);return r?`/${r}/`:`/`},Zs=(e,t)=>{let n=Ys(e,t);return`${A.baseUrl?.replace(/\/+$/,``)||``}${n}`},Qs=(e,t)=>Q(e)||null,$s=()=>A.locales||[],ec=T(`alert`,{state:()=>({alert:{title:``,content:``},banner:{title:``,content:``,action:``,actionLabel:``,color:`error`},offlineBanner:{title:``,content:``},topProgress:!1,loading:!1}),actions:{showLoading(){this.loading=!0},hideLoading(){this.loading=!1},showTopProgress(){this.topProgress=!0},hideTopProgress(){this.topProgress=!1},message(e,t,n=!1){this.alert.title=e,this.alert.content=t,n&&setTimeout(()=>{this.clear()},5e3)},showBanner({title:e,content:t,action:n=``,actionLabel:r=``,color:i=`error`}){this.banner.title=e,this.banner.content=t,this.banner.action=n,this.banner.actionLabel=r,this.banner.color=i},showOfflineBanner({title:e,content:t}){this.offlineBanner.title=e,this.offlineBanner.content=t},clearBanner(){this.banner.title=``,this.banner.content=``,this.banner.action=``,this.banner.actionLabel=``,this.banner.color=`error`},clearOfflineBanner(){this.offlineBanner.title=``,this.offlineBanner.content=``},clear(){this.alert.title=``,this.alert.content=``}}}),$=(e,t)=>{let n=e.__vccOpts||e;for(let[e,r]of t)n[e]=r;return n},tc={key:0,class:`fixed top-0 left-0 z-[220] h-1 w-full overflow-hidden bg-red-200/70 dark:bg-red-950/60`},nc={class:`flex w-full flex-col gap-2 leading-4 whitespace-normal wrap-break-word sm:flex-row sm:items-center sm:justify-between`},rc={class:`min-w-0`},ic={class:`font-semibold block sm:inline`},ac={class:`font-normal block wrap-break-word sm:inline sm:ml-2`},oc={class:`flex shrink-0 items-center gap-2`},sc={class:`flex w-full flex-col gap-2 leading-4 whitespace-normal wrap-break-word sm:flex-row sm:items-center sm:justify-between`},cc={class:`min-w-0`},lc={class:`font-semibold block sm:inline`},uc={class:`font-normal block wrap-break-word sm:inline sm:ml-2`},dc={class:`flex shrink-0 items-center gap-2`},fc={key:2,class:`relative z-200`},pc={class:`fixed inset-0 z-10 w-screen overflow-y-auto`},mc={class:`flex min-h-[50vh] md:min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0`},hc={key:0,class:`w-5/6 lg:w-1/4 relative transform overflow-hidden rounded-lg shadow-xl transition-all sm:my-8 bg-white dark:bg-[#222831]`},gc={class:`px-5 pt-6`},_c=[`textContent`],vc={class:`my-2 lg:mt-2 lg:mb-4`},yc=[`textContent`],bc={class:`px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6`},xc={class:`bg-white/70 dark:bg-[#222831]/70 z-200 fixed`},Sc={class:`mt-2 font-weight-bold`},Cc=$({__name:`Alert`,setup(e){let i=ec(),{alert:o,banner:v,offlineBanner:b,loading:w,topProgress:ee}=E(i),{clear:te,clearBanner:T,clearOfflineBanner:D}=i,O={error:{color:`error`,icon:`i-lucide-circle-alert`,iconClass:`size-3.5 text-red-700 dark:text-red-200`,containerClass:`border-red-300/60 bg-red-200/80 dark:border-red-400/55 dark:bg-red-500/30`,actionButtonClass:`bg-red-700 text-white hover:bg-red-800 dark:bg-red-300 dark:text-red-950 dark:hover:bg-red-200`,closeButtonClass:`border-red-300/80 bg-white/60 text-red-800 hover:bg-white dark:border-red-300/50 dark:bg-red-950/30 dark:text-red-100 dark:hover:bg-red-950/50`},warning:{color:`warning`,icon:`i-lucide-circle-alert`,iconClass:`size-3.5 text-amber-700 dark:text-amber-200`,containerClass:`border-amber-300/60 bg-amber-200/80 dark:border-amber-400/55 dark:bg-amber-400/30`,actionButtonClass:`bg-amber-700 text-white hover:bg-amber-800 dark:bg-amber-300 dark:text-amber-950 dark:hover:bg-amber-200`,closeButtonClass:`border-amber-300/80 bg-white/60 text-amber-800 hover:bg-white dark:border-amber-300/50 dark:bg-amber-950/30 dark:text-amber-100 dark:hover:bg-amber-950/50`}},k=C(()=>O[v.value.color]||O.error),A=m(null),j=C(()=>!!(v.value.title||b.value.title)),M=null,N=(e=0)=>{typeof document>`u`||document.documentElement.style.setProperty(`--wc-alert-banner-offset`,`${e}px`)},P=()=>{N(A.value?.offsetHeight||0)},F=()=>{if(!v.value.action||typeof window>`u`){T();return}window.dispatchEvent(new CustomEvent(`walkscloud:banner-action`,{detail:{action:v.value.action}}))},ne=()=>{let e=v.value.action;T(),typeof window<`u`&&window.dispatchEvent(new CustomEvent(`walkscloud:banner-dismiss`,{detail:{action:e}}))};return t(()=>{typeof ResizeObserver<`u`&&(M=new ResizeObserver(P)),a(()=>{A.value&&M&&M.observe(A.value),P()})}),s(()=>{M?.disconnect(),N(0)}),p(j,()=>{a(()=>{A.value&&M&&M.observe(A.value),P()})}),(e,t)=>{let i=y(`UBanner`);return u(),n(h,null,[x(ee)?(u(),n(`div`,tc,[...t[2]||=[d(`div`,{class:`wc-top-progress-bar h-full w-1/2 bg-red-600 dark:bg-red-300`},null,-1)]])):c(``,!0),j.value?(u(),n(`div`,{key:1,ref_key:`bannerStack`,ref:A,class:`fixed top-0 left-0 z-[210] w-full`},[l(f,{name:`slide-down`,appear:``},{default:g(()=>[x(v).title?(u(),S(i,{key:0,color:k.value.color,icon:k.value.icon,ui:{container:`h-auto min-h-16 py-2 sm:min-h-8 sm:py-1`,center:`min-h-0 items-center gap-1.5`,title:`w-full text-sm leading-4 text-gray-700 dark:text-gray-100`,icon:k.value.iconClass},class:r([`w-full border-t shadow-sm backdrop-blur-sm`,k.value.containerClass])},{title:g(()=>[d(`span`,nc,[d(`span`,rc,[d(`span`,ic,_(x(v).title),1),d(`span`,ac,_(x(v).content),1)]),d(`span`,oc,[x(v).action&&x(v).actionLabel?(u(),n(`button`,{key:0,onClick:F,type:`button`,class:r([`rounded-lg px-3 py-1.5 text-xs font-semibold`,k.value.actionButtonClass])},_(x(v).actionLabel),3)):c(``,!0),d(`button`,{onClick:ne,type:`button`,class:r([`rounded-lg border px-3 py-1.5 text-xs font-semibold`,k.value.closeButtonClass])},_(e.$t(`close`)),3)])])]),_:1},8,[`color`,`icon`,`ui`,`class`])):c(``,!0)]),_:1}),l(f,{name:`slide-down`,appear:``},{default:g(()=>[x(b).title?(u(),S(i,{key:0,color:`neutral`,icon:`i-lucide-cloud-off`,ui:{container:`h-auto min-h-16 py-2 sm:min-h-8 sm:py-1`,center:`min-h-0 items-center gap-1.5`,title:`w-full text-sm leading-4 text-gray-700 dark:text-gray-100`,icon:`size-3.5 text-violet-700 dark:text-violet-200`},class:`w-full border-t border-violet-300/60 bg-violet-200/80 shadow-sm backdrop-blur-sm dark:border-violet-400/55 dark:bg-violet-500/30`},{title:g(()=>[d(`span`,sc,[d(`span`,cc,[d(`span`,lc,_(x(b).title),1),d(`span`,uc,_(x(b).content),1)]),d(`span`,dc,[d(`button`,{onClick:t[0]||=(...e)=>x(D)&&x(D)(...e),type:`button`,class:`rounded-lg border border-violet-300/80 bg-white/60 px-3 py-1.5 text-xs font-semibold text-violet-800 hover:bg-white dark:border-violet-300/50 dark:bg-violet-950/30 dark:text-violet-100 dark:hover:bg-violet-950/50`},_(e.$t(`close`)),1)])])]),_:1})):c(``,!0)]),_:1})],512)):c(``,!0),x(o).title?(u(),n(`div`,fc,[t[3]||=d(`div`,{class:`fixed inset-0 bg-gray-500/75 transition-opacity duration-300`,"aria-hidden":`true`},null,-1),d(`div`,pc,[d(`div`,mc,[l(f,{name:`slide-down`,appear:``},{default:g(()=>[x(o).title?(u(),n(`div`,hc,[d(`div`,gc,[d(`h3`,{class:`font-bold text-gray-900 dark:text-gray-300`,textContent:_(x(o).title)},null,8,_c),d(`div`,vc,[d(`p`,{class:`text-gray-500 dark:text-gray-200`,textContent:_(x(o).content)},null,8,yc)])]),d(`div`,bc,[d(`button`,{onClick:t[1]||=(...e)=>x(te)&&x(te)(...e),type:`button`,class:`text-white bg-primary border hover:border-primary hover:bg-white hover:text-primary dark:border-transparent dark:hover:bg-[#222831] rounded-lg text-sm px-3 lg:px-5 py-1.5 lg:py-2.5`},_(e.$t(`close`)),1)])])):c(``,!0)]),_:1})])])])):c(``,!0),d(`div`,xc,[d(`div`,{class:r([{flex:x(w),hidden:!x(w)},`w-screen h-screen text-center items-center justify-center`])},[d(`div`,null,[t[4]||=d(`svg`,{class:`text-gray-300 animate-spin`,viewBox:`0 0 64 64`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,width:`114`,height:`114`},[d(`path`,{d:`M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`}),d(`path`,{d:`M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,class:`text-primary`})],-1),d(`p`,Sc,_(e.$t(`loading`)),1)])],2)])],64)}}},[[`__scopeId`,`data-v-1236fe03`]]),wc={"/services/wazuh-siem":`2026-05-29T12:38:09.000Z`,"/services/vpn-remote":`2026-05-29T12:38:09.000Z`,"/services":`2026-05-29T12:38:09.000Z`,"/services/office-network":`2026-05-29T12:38:09.000Z`,"/services/mdm":`2026-05-29T12:38:09.000Z`,"/services/it-monitoring":`2026-06-02T16:30:26.000Z`,"/services/it-outsourcing":`2026-05-29T12:38:09.000Z`,"/services/wazuh-asset":`2026-05-29T12:38:09.000Z`,"/services/backup-security":`2026-05-29T12:38:09.000Z`,"/services/hosting-operations":`2026-05-29T12:38:09.000Z`,"/services/8021x":`2026-05-29T12:38:09.000Z`,"/services/container-devops":`2026-05-29T12:38:09.000Z`,"/services/zero-trust":`2026-05-29T12:38:09.000Z`,"/services/idc-deployment":`2026-05-29T12:38:09.000Z`,"/services/iam-zitadel":`2026-05-29T12:38:09.000Z`,"/services/virtualization-cloud":`2026-05-29T12:38:09.000Z`,"/services/custom-dev":`2026-05-29T12:38:09.000Z`,"/cases/cay-dns-filter":`2026-04-05T16:00:41.000Z`,"/cases/cay-machine-room":`2026-04-05T16:00:41.000Z`,"/cases/jal-pa":`2026-04-05T16:00:41.000Z`,"/cases/tgw-remote-network":`2026-04-05T16:00:41.000Z`,"/cases/lgl-nax-gpu-passthrough":`2026-04-05T16:00:41.000Z`,"/cases/wzz-network-controller":`2026-04-05T16:00:41.000Z`,"/cases/cay-server-farm":`2026-04-05T16:00:41.000Z`,"/cases/lgl-hda-openvz-pve-eval":`2026-04-05T16:00:41.000Z`,"/cases/uia-remote-network":`2026-04-05T16:00:41.000Z`,"/cases/ttw-mdm":`2026-04-05T16:00:41.000Z`,"/cases/klm-aua-erp":`2026-04-05T16:00:41.000Z`,"/cases/wzz-nas-migration":`2026-04-05T16:00:41.000Z`,"/cases/wzz-contract-strategy":`2026-04-05T16:00:41.000Z`,"/cases/lgl-cal-jamf-oidc":`2026-04-05T16:00:41.000Z`,"/cases/tgw-zero-trust-monitoring":`2026-04-05T16:00:41.000Z`,"/cases/lgl-tax-pve-io-wait":`2026-04-05T16:00:41.000Z`,"/cases/lgl-awe-pve-vgpu-jamf":`2026-04-05T16:00:41.000Z`,"/cases/lgl-csa-vpn":`2026-04-05T16:00:41.000Z`,"/cases/ttw-remote-network":`2026-04-05T16:00:41.000Z`,"/cases/cay-azure-erp":`2026-04-05T16:00:41.000Z`,"/cases/ana-unifi-controller":`2026-04-05T16:00:41.000Z`,"/cases/cpa-jjp-network-audit":`2026-04-05T16:00:41.000Z`,"/cases/cay-ldap-onboarding":`2026-04-05T16:00:41.000Z`,"/cases/tgw-mdm":`2026-04-05T16:00:41.000Z`,"/tech/shared-dns-radius-isolation":`2026-04-05T16:00:41.000Z`,"/tech/closed-hypervisor-migration-validation":`2026-04-05T16:00:41.000Z`,"/tech/budget-nas-refresh-plan":`2026-04-05T16:00:41.000Z`,"/tech/jamf-trust-vpn-control":`2026-04-05T16:00:41.000Z`,"/tech/pve-quarterly-report-template":`2026-06-03T10:45:04.000Z`,"/tech/custom-app-review-transfer":`2026-04-05T16:00:41.000Z`,"/tech/unifi-controller-migration-light-ops":`2026-04-05T16:00:41.000Z`,"/tech/onboarding-account-automation":`2026-04-05T16:00:41.000Z`,"/tech/wifi-controller-firmware-schedule":`2026-04-05T16:00:41.000Z`,"/tech/pve-pbs-backup-schedule-validation":`2026-04-05T16:00:41.000Z`,"/tech/offline-pve-gpu-passthrough":`2026-04-05T16:00:41.000Z`,"/tech/multi-stage-migration-checklist":`2026-04-05T16:00:41.000Z`,"/tech/pve-io-wait-diagnostics-workflow":`2026-04-05T16:00:41.000Z`,"/tech/akvorado-flow-collector-overview":`2026-06-03T19:10:59.000Z`,"/tech/vpn-radius-certificate-lifecycle":`2026-04-05T16:00:41.000Z`,"/tech/operations-handover-package":`2026-04-05T16:00:41.000Z`,"/tech/passive-inspection-report-workflow":`2026-04-05T16:00:41.000Z`,"/tech/it-refresh-migration-blueprint":`2026-04-05T16:00:41.000Z`,"/tech/network-audit-template-delivery":`2026-04-05T16:00:41.000Z`,"/tech/pve-vgpu-rollout-training":`2026-06-03T10:45:04.000Z`,"/tech/on-site-troubleshooting-handbook":`2026-04-05T16:00:41.000Z`,"/tech/akvorado-traffic-analysis-workflow":`2026-06-03T10:45:04.000Z`,"/tech/it-inventory-recovery-manual":`2026-04-05T16:00:41.000Z`,"/tech/remote-inspection-reporting":`2026-04-05T16:00:41.000Z`,"/tech/controlled-ap-dual-path":`2026-04-05T16:00:41.000Z`,"/tech/datacenter-move-ups-improvement":`2026-04-05T16:00:41.000Z`,"/tech/network-license-takeover-checklist":`2026-04-05T16:00:41.000Z`,"/tech/pve-backup-schedule-tuning-guide":`2026-04-05T16:00:41.000Z`,"/tech/oidc-test-logs-communication":`2026-04-05T16:00:41.000Z`,"/tech/jamf-audit-cross-team":`2026-06-03T10:45:04.000Z`,"/tech/app-ownership-transfer-process":`2026-04-05T16:00:41.000Z`,"/tech/zitadel-jamf-connect-validation-lab":`2026-06-03T10:45:04.000Z`},Tc=Ws(),Ec=Tc.defaultLocale||`zh-tw`,Dc=Tc.localeFallbacks||{},Oc=e=>e==null?``:typeof e==`string`?e:String(e),kc=e=>Oc(e).trim(),Ac=(e=``)=>{let t=Oc(e).replace(/^\/+/,``).replace(/\/+$/,``);return t?`/${t}`:`/`},jc=e=>{if(!e)return null;let t=e instanceof Date?e:new Date(e);return Number.isNaN(t.valueOf())?null:t},Mc=(()=>{let e=typeof wc==`object`&&wc?Object.entries(wc):[],t={};return e.forEach(([e,n])=>{let r=Ac(e);if(!r||!n)return;let i=jc(n);i&&(t[r]=i)}),t})(),Nc=Object.assign({"../content/cases/ana-unifi-controller/index.en.md":N,"../content/cases/ana-unifi-controller/index.zh-tw.md":F,"../content/cases/cay-azure-erp/index.en.md":I,"../content/cases/cay-azure-erp/index.zh-tw.md":ie,"../content/cases/cay-dns-filter/index.en.md":L,"../content/cases/cay-dns-filter/index.zh-tw.md":z,"../content/cases/cay-ldap-onboarding/index.en.md":B,"../content/cases/cay-ldap-onboarding/index.zh-tw.md":H,"../content/cases/cay-machine-room/index.en.md":W,"../content/cases/cay-machine-room/index.zh-tw.md":K,"../content/cases/cay-server-farm/index.en.md":J,"../content/cases/cay-server-farm/index.zh-tw.md":Y,"../content/cases/cpa-jjp-network-audit/index.en.md":X,"../content/cases/cpa-jjp-network-audit/index.zh-tw.md":Z,"../content/cases/jal-pa/index.en.md":de,"../content/cases/jal-pa/index.zh-tw.md":pe,"../content/cases/klm-aua-erp/index.en.md":he,"../content/cases/klm-aua-erp/index.zh-tw.md":_e,"../content/cases/lgl-awe-pve-vgpu-jamf/index.en.md":ye,"../content/cases/lgl-awe-pve-vgpu-jamf/index.zh-tw.md":xe,"../content/cases/lgl-cal-jamf-oidc/index.en.md":Ce,"../content/cases/lgl-cal-jamf-oidc/index.zh-tw.md":Te,"../content/cases/lgl-csa-vpn/index.en.md":De,"../content/cases/lgl-csa-vpn/index.zh-tw.md":ke,"../content/cases/lgl-hda-openvz-pve-eval/index.en.md":je,"../content/cases/lgl-hda-openvz-pve-eval/index.zh-tw.md":Ne,"../content/cases/lgl-nax-gpu-passthrough/index.en.md":Fe,"../content/cases/lgl-nax-gpu-passthrough/index.zh-tw.md":Le,"../content/cases/lgl-tax-pve-io-wait/index.en.md":ze,"../content/cases/lgl-tax-pve-io-wait/index.zh-tw.md":Ve,"../content/cases/tgw-mdm/index.en.md":Ue,"../content/cases/tgw-mdm/index.zh-tw.md":Ge,"../content/cases/tgw-remote-network/index.en.md":qe,"../content/cases/tgw-remote-network/index.zh-tw.md":Ye,"../content/cases/tgw-zero-trust-monitoring/index.en.md":Ze,"../content/cases/tgw-zero-trust-monitoring/index.zh-tw.md":$e,"../content/cases/ttw-mdm/index.en.md":tt,"../content/cases/ttw-mdm/index.zh-tw.md":rt,"../content/cases/ttw-remote-network/index.en.md":at,"../content/cases/ttw-remote-network/index.zh-tw.md":st,"../content/cases/uia-remote-network/index.en.md":lt,"../content/cases/uia-remote-network/index.zh-tw.md":dt,"../content/cases/wzz-contract-strategy/index.en.md":pt,"../content/cases/wzz-contract-strategy/index.zh-tw.md":ht,"../content/cases/wzz-nas-migration/index.en.md":_t,"../content/cases/wzz-nas-migration/index.zh-tw.md":yt,"../content/cases/wzz-network-controller/index.en.md":xt,"../content/cases/wzz-network-controller/index.zh-tw.md":Ct,"../content/faq/akvorado-data-quality-checks/index.en.md":Tt,"../content/faq/akvorado-data-quality-checks/index.zh-tw.md":Dt,"../content/faq/akvorado-vs-snmp-monitoring/index.en.md":kt,"../content/faq/akvorado-vs-snmp-monitoring/index.zh-tw.md":jt,"../content/faq/backup-schedule-collision-risks/index.en.md":Nt,"../content/faq/backup-schedule-collision-risks/index.zh-tw.md":Ft,"../content/faq/budget-nas-refresh-plan/index.en.md":Lt,"../content/faq/budget-nas-refresh-plan/index.zh-tw.md":zt,"../content/faq/closed-hypervisor-migration-plan/index.en.md":Vt,"../content/faq/closed-hypervisor-migration-plan/index.zh-tw.md":Ut,"../content/faq/controlled-ap-dual-network-data/index.en.md":Gt,"../content/faq/controlled-ap-dual-network-data/index.zh-tw.md":qt,"../content/faq/custom-app-delivery-without-apple-account/index.en.md":Yt,"../content/faq/custom-app-delivery-without-apple-account/index.zh-tw.md":Zt,"../content/faq/custom-app-ownership-transfer/index.en.md":$t,"../content/faq/custom-app-ownership-transfer/index.zh-tw.md":tn,"../content/faq/datacenter-move-ups-plan/index.en.md":rn,"../content/faq/datacenter-move-ups-plan/index.zh-tw.md":on,"../content/faq/day-one-onboarding-account-flow/index.en.md":cn,"../content/faq/day-one-onboarding-account-flow/index.zh-tw.md":un,"../content/faq/it-refresh-minimize-downtime/index.en.md":fn,"../content/faq/it-refresh-minimize-downtime/index.zh-tw.md":mn,"../content/faq/jamf-audit-training-plan/index.en.md":gn,"../content/faq/jamf-audit-training-plan/index.zh-tw.md":vn,"../content/faq/jamf-connect-oidc-vendor-verification/index.en.md":bn,"../content/faq/jamf-connect-oidc-vendor-verification/index.zh-tw.md":Sn,"../content/faq/license-expired-new-partner-checklist/index.en.md":wn,"../content/faq/license-expired-new-partner-checklist/index.zh-tw.md":En,"../content/faq/network-audit-report-fields/index.en.md":On,"../content/faq/network-audit-report-fields/index.zh-tw.md":An,"../content/faq/offline-gpu-passthrough-logs/index.en.md":Mn,"../content/faq/offline-gpu-passthrough-logs/index.zh-tw.md":Pn,"../content/faq/offline-troubleshooting-kits/index.en.md":In,"../content/faq/offline-troubleshooting-kits/index.zh-tw.md":Rn,"../content/faq/oidc-integration-log-requirements/index.en.md":Bn,"../content/faq/oidc-integration-log-requirements/index.zh-tw.md":Hn,"../content/faq/pve-io-wait-diagnostics/index.en.md":Wn,"../content/faq/pve-io-wait-diagnostics/index.zh-tw.md":Kn,"../content/faq/pve-pbs-multiple-backups-impact/index.en.md":Jn,"../content/faq/pve-pbs-multiple-backups-impact/index.zh-tw.md":Xn,"../content/faq/pve-pbs-quarterly-report-metrics/index.en.md":Qn,"../content/faq/pve-pbs-quarterly-report-metrics/index.zh-tw.md":er,"../content/faq/pve-vgpu-training-plan/index.en.md":nr,"../content/faq/pve-vgpu-training-plan/index.zh-tw.md":ir,"../content/faq/remote-ops-handover-docs/index.en.md":or,"../content/faq/remote-ops-handover-docs/index.zh-tw.md":cr,"../content/faq/remote-ops-transparency-without-monitoring/index.en.md":ur,"../content/faq/remote-ops-transparency-without-monitoring/index.zh-tw.md":fr,"../content/faq/remote-ops-with-shared-wifi-password/index.en.md":mr,"../content/faq/remote-ops-with-shared-wifi-password/index.zh-tw.md":gr,"../content/faq/restore-network-admin-access/index.en.md":vr,"../content/faq/restore-network-admin-access/index.zh-tw.md":br,"../content/faq/restricted-vpn-camera-access/index.en.md":Sr,"../content/faq/restricted-vpn-camera-access/index.zh-tw.md":wr,"../content/faq/shared-office-vlan-dns-isolation/index.en.md":Er,"../content/faq/shared-office-vlan-dns-isolation/index.zh-tw.md":Or,"../content/faq/unifi-controller-cloud-to-onprem-move/index.en.md":Ar,"../content/faq/unifi-controller-cloud-to-onprem-move/index.zh-tw.md":Mr,"../content/faq/unifi-controller-lite-managed-support/index.en.md":Pr,"../content/faq/unifi-controller-lite-managed-support/index.zh-tw.md":Ir,"../content/faq/unifi-controller-migration-without-downtime/index.en.md":Rr,"../content/faq/unifi-controller-migration-without-downtime/index.zh-tw.md":Br,"../content/faq/vpn-radius-certificate-lifecycle/index.en.md":Hr,"../content/faq/vpn-radius-certificate-lifecycle/index.zh-tw.md":Wr,"../content/legal/privacy-policy/index.en.md":Kr,"../content/legal/privacy-policy/index.zh-tw.md":Jr,"../content/legal/terms-of-use/index.en.md":Xr,"../content/legal/terms-of-use/index.zh-tw.md":Qr,"../content/services/8021x/index.en.md":ei,"../content/services/8021x/index.zh-tw.md":ni,"../content/services/backup-security/index.en.md":ii,"../content/services/backup-security/index.zh-tw.md":oi,"../content/services/container-devops/index.en.md":ci,"../content/services/container-devops/index.zh-tw.md":ui,"../content/services/custom-dev/index.en.md":fi,"../content/services/custom-dev/index.zh-tw.md":mi,"../content/services/hosting-operations/index.en.md":gi,"../content/services/hosting-operations/index.zh-tw.md":vi,"../content/services/iam-zitadel/index.en.md":bi,"../content/services/iam-zitadel/index.zh-tw.md":Si,"../content/services/idc-deployment/index.en.md":wi,"../content/services/idc-deployment/index.zh-tw.md":Ei,"../content/services/index.en.md":Oi,"../content/services/index.zh-tw.md":Ai,"../content/services/it-monitoring/index.en.md":Mi,"../content/services/it-monitoring/index.zh-tw.md":Pi,"../content/services/it-outsourcing/index.en.md":Ii,"../content/services/it-outsourcing/index.zh-tw.md":Ri,"../content/services/mdm/index.en.md":Bi,"../content/services/mdm/index.zh-tw.md":Hi,"../content/services/office-network/index.en.md":Wi,"../content/services/office-network/index.zh-tw.md":Ki,"../content/services/virtualization-cloud/index.en.md":Ji,"../content/services/virtualization-cloud/index.zh-tw.md":Xi,"../content/services/vpn-remote/index.en.md":Qi,"../content/services/vpn-remote/index.zh-tw.md":ea,"../content/services/wazuh-asset/index.en.md":na,"../content/services/wazuh-asset/index.zh-tw.md":ia,"../content/services/wazuh-siem/index.en.md":oa,"../content/services/wazuh-siem/index.zh-tw.md":ca,"../content/services/zero-trust/index.en.md":ua,"../content/services/zero-trust/index.zh-tw.md":fa,"../content/tech/akvorado-flow-collector-overview/index.en.md":ma,"../content/tech/akvorado-flow-collector-overview/index.zh-tw.md":ga,"../content/tech/akvorado-traffic-analysis-workflow/index.en.md":va,"../content/tech/akvorado-traffic-analysis-workflow/index.zh-tw.md":ba,"../content/tech/app-ownership-transfer-process/index.en.md":Sa,"../content/tech/app-ownership-transfer-process/index.zh-tw.md":wa,"../content/tech/budget-nas-refresh-plan/index.en.md":Ea,"../content/tech/budget-nas-refresh-plan/index.zh-tw.md":Oa,"../content/tech/closed-hypervisor-migration-validation/index.en.md":Aa,"../content/tech/closed-hypervisor-migration-validation/index.zh-tw.md":Ma,"../content/tech/controlled-ap-dual-path/index.en.md":Pa,"../content/tech/controlled-ap-dual-path/index.zh-tw.md":Ia,"../content/tech/custom-app-review-transfer/index.en.md":Ra,"../content/tech/custom-app-review-transfer/index.zh-tw.md":Ba,"../content/tech/datacenter-move-ups-improvement/index.en.md":Ha,"../content/tech/datacenter-move-ups-improvement/index.zh-tw.md":Wa,"../content/tech/it-inventory-recovery-manual/index.en.md":Ka,"../content/tech/it-inventory-recovery-manual/index.zh-tw.md":Ja,"../content/tech/it-refresh-migration-blueprint/index.en.md":Xa,"../content/tech/it-refresh-migration-blueprint/index.zh-tw.md":Qa,"../content/tech/jamf-audit-cross-team/index.en.md":eo,"../content/tech/jamf-audit-cross-team/index.zh-tw.md":no,"../content/tech/jamf-trust-vpn-control/index.en.md":io,"../content/tech/jamf-trust-vpn-control/index.zh-tw.md":oo,"../content/tech/multi-stage-migration-checklist/index.en.md":co,"../content/tech/multi-stage-migration-checklist/index.zh-tw.md":uo,"../content/tech/network-audit-template-delivery/index.en.md":po,"../content/tech/network-audit-template-delivery/index.zh-tw.md":ho,"../content/tech/network-license-takeover-checklist/index.en.md":_o,"../content/tech/network-license-takeover-checklist/index.zh-tw.md":yo,"../content/tech/offline-pve-gpu-passthrough/index.en.md":xo,"../content/tech/offline-pve-gpu-passthrough/index.zh-tw.md":Co,"../content/tech/oidc-test-logs-communication/index.en.md":To,"../content/tech/oidc-test-logs-communication/index.zh-tw.md":Do,"../content/tech/on-site-troubleshooting-handbook/index.en.md":ko,"../content/tech/on-site-troubleshooting-handbook/index.zh-tw.md":jo,"../content/tech/onboarding-account-automation/index.en.md":No,"../content/tech/onboarding-account-automation/index.zh-tw.md":Fo,"../content/tech/operations-handover-package/index.en.md":Lo,"../content/tech/operations-handover-package/index.zh-tw.md":zo,"../content/tech/passive-inspection-report-workflow/index.en.md":Vo,"../content/tech/passive-inspection-report-workflow/index.zh-tw.md":Uo,"../content/tech/pve-backup-schedule-tuning-guide/index.en.md":Go,"../content/tech/pve-backup-schedule-tuning-guide/index.zh-tw.md":qo,"../content/tech/pve-io-wait-diagnostics-workflow/index.en.md":Yo,"../content/tech/pve-io-wait-diagnostics-workflow/index.zh-tw.md":Zo,"../content/tech/pve-pbs-backup-schedule-validation/index.en.md":$o,"../content/tech/pve-pbs-backup-schedule-validation/index.zh-tw.md":ts,"../content/tech/pve-quarterly-report-template/index.en.md":rs,"../content/tech/pve-quarterly-report-template/index.zh-tw.md":as,"../content/tech/pve-vgpu-rollout-training/index.en.md":ss,"../content/tech/pve-vgpu-rollout-training/index.zh-tw.md":ls,"../content/tech/remote-inspection-reporting/index.en.md":ds,"../content/tech/remote-inspection-reporting/index.zh-tw.md":ps,"../content/tech/shared-dns-radius-isolation/index.en.md":hs,"../content/tech/shared-dns-radius-isolation/index.zh-tw.md":_s,"../content/tech/unifi-controller-migration-light-ops/index.en.md":ys,"../content/tech/unifi-controller-migration-light-ops/index.zh-tw.md":xs,"../content/tech/vpn-radius-certificate-lifecycle/index.en.md":Cs,"../content/tech/vpn-radius-certificate-lifecycle/index.zh-tw.md":Ts,"../content/tech/wifi-controller-firmware-schedule/index.en.md":Ds,"../content/tech/wifi-controller-firmware-schedule/index.zh-tw.md":ks,"../content/tech/zitadel-jamf-connect-validation-lab/index.en.md":js,"../content/tech/zitadel-jamf-connect-validation-lab/index.zh-tw.md":Ns}),Pc=new Map,Fc=(e=``)=>{let t=Oc(e),n=t.match(/^---\s*\n([\s\S]*?)\n---\s*\n?/);if(!n)return{meta:{},body:t};let r=O.parse(n[1])||{};if(r.date){let e=new Date(r.date);Number.isNaN(e.valueOf())||(r.__date=e)}else if(r.lastmod){let e=new Date(r.lastmod);Number.isNaN(e.valueOf())||(r.__date=e)}return{meta:r,body:t.slice(n[0].length)}},Ic=(e=``)=>{let t=e.match(/\.([a-z-]+)\.md$/i);return t?t[1]:Ec},Lc=(e=``)=>e.replace(/\.([a-z-]+)\.md$/i,``).replace(/^..\//,``),Rc=e=>e&&Mc[Ac(e)]||null;Object.entries(Nc).forEach(([e,t])=>{let{meta:n,body:r}=Fc(t),i=Ic(e),a=Lc(e),o=Ac(n.slug?String(n.slug):a.split(`/`).slice(1).join(`/`)),s=Pc.get(o)||{locales:{},type:n.type||`page`},c=Rc(o);s.locales[i]={title:kc(n.title),description:kc(n.description),body:r,deploy:n.deploy!==!1,__date:c||n.__date||null},s.type=n.type||s.type,Pc.set(o,s)});var zc=(e=[])=>[...new Set(e)],Bc=e=>e?Array.isArray(e)?e:[e]:[],Vc=(e,t=[],n=[])=>zc([...Array.isArray(Dc[e])?Dc[e]:[],...Bc(n),Ec,...t]).filter(t=>t&&t!==e),Hc=(e,t,n={})=>{let r=Pc.get(e);if(!r)return null;let i=r.locales||{},a=Object.keys(i).filter(e=>i[e]?.deploy!==!1);if(!a.length)return null;let o=i[t];if(o&&o.deploy!==!1)return{title:o.title||``,description:o.description||``,body:o.body||``,locale:t,requestedLocale:t,availableLocales:a,isFallback:!1,date:o.__date||null};let s=Vc(t,a,n.fallbackLocales||[]).find(e=>i[e]?.deploy!==!1);if(!s)return null;let c=i[s];return{title:c.title||``,description:c.description||``,body:c.body||``,locale:s,requestedLocale:t,availableLocales:a,isFallback:s!==t,date:c.__date||null}},Uc=(e,t)=>{if(!e)return`/`;let n=e.startsWith(`/`)?e:`/${e}`,r=n.endsWith(`/`)?n:`${n}/`;return!t||t===Ec?r:`/${t}${r}`},Wc=(e=``)=>{let t=Ac(e).replace(/\/+$/,``),n=[];return Pc.forEach((e,r)=>{!r.startsWith(t===`/`?`/`:`${t}/`)&&r!==t||n.push({slug:r,entry:e})}),n},Gc=new Set([`complete`,`skipped`]),Kc=T(`offlineCache`,{state:()=>({caching:!1,ready:!1,progressPercent:0,progressCompleted:0,progressTotal:0,lastReportStatus:``,lastUpdatedAt:0}),getters:{isCaching:e=>e.caching,isReady:e=>e.ready,progressStyle:e=>({"--wc-offline-cache-progress":`${Math.min(Math.max(e.progressPercent,0),100)}%`})},actions:{start(){this.caching=!0,this.progressPercent=0,this.progressCompleted=0,this.progressTotal=0,this.lastReportStatus=`running`,this.lastUpdatedAt=Date.now()},markReady(e=`complete`){this.caching=!1,this.ready=!0,this.progressPercent=100,this.lastReportStatus=e,this.lastUpdatedAt=Date.now()},markUnavailable(e=`unavailable`){this.caching=!1,this.lastReportStatus=e,this.lastUpdatedAt=Date.now()},applyPrecacheProgress(e){let t=String(e?.status||``).trim()||`running`,n=Math.max(0,Number(e?.total)||0),r=Math.min(Math.max(0,Number(e?.completed)||0),n),i=Number.isFinite(Number(e?.percent))?Number(e.percent):n>0?Math.round(r/n*100):0;return Gc.has(t)?(this.markReady(t),t):[`empty`,`incomplete`,`failed`].includes(t)?(this.progressPercent=Math.min(Math.max(i,0),100),this.progressCompleted=r,this.progressTotal=n,this.markUnavailable(t),t):(this.caching=!0,this.ready=!1,this.progressPercent=Math.min(Math.max(i,0),100),this.progressCompleted=r,this.progressTotal=n,this.lastReportStatus=t,this.lastUpdatedAt=Date.now(),t)},applyPrecacheReport(e){let t=String(e?.status||``).trim()||`missing-report`;return Gc.has(t)?this.markReady(t):this.markUnavailable(t),t},reset(){this.caching=!1,this.ready=!1,this.progressPercent=0,this.progressCompleted=0,this.progressTotal=0,this.lastReportStatus=``,this.lastUpdatedAt=Date.now()}}}),qc={class:`text-center px-3 pb-3 lg:py-6 lg:px-0 text-sm lg:text-base`},Jc=[`href`],Yc=[`href`],Xc={class:`text-sm lg:leading-1`},Zc={class:`block lg:inline`},Qc=[`aria-label`,`title`],$c={class:`sr-only`},el=[`href`],tl={class:`block lg:inline`},nl=$({__name:`Footer`,setup(e){let t={BASE_URL:`/`,DEV:!1,MODE:`production`,PROD:!0,SSR:!1,__APP_ENV__:void 0,buildHash:`97d3352`,buildTime:`2026-08-04 00:27:25 +08:00`},{locale:r}=D(),i=Kc(),a=C(()=>Uc(`/legal/terms-of-use`,r.value)),o=C(()=>Uc(`/legal/privacy-policy`,r.value)),s=C(()=>{let e=String(t.buildTime||``),n=e.match(/^(\d{4})/);if(n)return n[1];let r=new Date(e).getFullYear();return String(Number.isFinite(r)?r:new Date().getFullYear())});return(e,r)=>{let f=y(`font-awesome-icon`),p=y(`RouterLink`);return u(),n(`footer`,qc,[d(`p`,null,[b(` © `+_(s.value)+` — Walks Cloud Inc. `,1),r[0]||=d(`img`,{class:`inline-block dark:hidden align-bottom ms-2 h-5`,alt:``,src:`/logo-wordmark-company.svg`},null,-1),r[1]||=d(`img`,{class:`hidden dark:inline-block align-bottom ms-2 h-5`,alt:``,src:`/logo-wordmark-company-white.svg`},null,-1)]),d(`a`,{href:e.$t(`footer.facebook_url`),target:`_blank`,class:`inline-block my-2 me-2`},[l(f,{icon:[`fab`,`square-facebook`],class:`text-2xl text-gray-600 dark:text-gray-300`})],8,Jc),d(`a`,{href:e.$t(`footer.linkedin_url`),target:`_blank`,class:`inline-block my-2`},[l(f,{icon:[`fab`,`linkedin`],class:`text-2xl text-gray-600 dark:text-gray-300`})],8,Yc),d(`p`,Xc,[d(`span`,Zc,[r[2]||=d(`a`,{href:`https://github.com/WalksCloud/OfficialWebsite`},`GitHub Repo`,-1),r[3]||=b(` (`,-1),x(i).isReady?(u(),n(`span`,{key:0,class:`wc-offline-cache-ready`,role:`status`,"aria-label":e.$t(`navigation-recovery.offline-cache.ready`),title:e.$t(`navigation-recovery.offline-cache.ready`)},[d(`span`,$c,_(e.$t(`navigation-recovery.offline-cache.ready`)),1)],8,Qc)):c(``,!0),d(`a`,{href:`https://github.com/WalksCloud/OfficialWebsite/commit/`+x(t).buildHash},`#`+_(x(t).buildHash),9,el),b(` `+_(x(t).buildTime)+`) `,1)]),r[5]||=d(`span`,{class:`hidden lg:inline`},` | `,-1),d(`span`,tl,[l(p,{to:a.value},{default:g(()=>[b(_(e.$t(`footer.term-of-use`)),1)]),_:1},8,[`to`]),r[4]||=b(` | `,-1),l(p,{to:o.value},{default:g(()=>[b(_(e.$t(`footer.privacy-policy`)),1)]),_:1},8,[`to`])])])])}}},[[`__scopeId`,`data-v-97cca8aa`]]),rl={class:`wc-site-header fixed left-0 w-full z-50`},il={class:`bg-white/85 dark:bg-[#222831]/85 shadow backdrop-blur-sm`},al={class:`px-3 lg:px-6 py-3 lg:py-4 flex justify-between items-center`},ol=[`href`],sl={class:`text-xl lg:text-2xl ms-2 inline-block align-middle font-barlow font-bold text-primary dark:text-white`},cl={key:0,"data-icon":`i-material-symbols-menu`,"aria-hidden":`true`,class:`inline-flex text-2xl`},ll={key:1,"data-icon":`i-material-symbols-close`,"aria-hidden":`true`,class:`inline-flex text-2xl`},ul={key:1,class:`space-x-4 hidden lg:flex`},dl=[`href`,`onClick`],fl={class:`ms-2 locale-changer inline-block`},pl={class:`flex flex-col leading-4 whitespace-normal wrap-break-word sm:block`},ml={class:`font-semibold block sm:inline`},hl={class:`font-normal block wrap-break-word sm:inline sm:ml-2`},gl={key:1,class:`lg:hidden bg-white/85 dark:bg-[#222831]/85 py-6 text-center flex flex-col space-y-4`},_l=[`href`,`onClick`],vl={class:`mt-2 locale-changer`},yl={class:`inline-flex rounded-lg overflow-hidden border border-gray-300 dark:border-gray-600`},bl=[`onClick`],xl=$({__name:`Navbar`,setup(e){let{locale:a,t:f,tm:b}=D(),w=b(`nav-links`),T=m(null),E=ee(),O=te(),A=Ws(),j=A.locales||[],M=C(()=>j.map(e=>({code:e,name:f(`locales.${e}`)}))),N=e=>e<=31||e>=127&&e<=159||e>=768&&e<=879,P=e=>e>=4352&&e<=4447||e>=9001&&e<=9002||e>=11904&&e<=42191||e>=44032&&e<=55203||e>=63744&&e<=64255||e>=65040&&e<=65049||e>=65072&&e<=65135||e>=65280&&e<=65376||e>=65504&&e<=65510||e>=127744&&e<=129791||e>=131072&&e<=262141,F=e=>{if(!e)return 0;let t=e.codePointAt(0)||0;return N(t)?0:P(t)?2:1},ne=e=>Array.from(String(e||``)).reduce((e,t)=>e+F(t),0),I=C(()=>{let e=M.value.reduce((e,t)=>Math.max(e,ne(t.name)),0);return`${Math.max(e+6,10)}ch`}),re=C(()=>E.name.match(/^(not-found|not-found-nonprefixed)$/)!==null),ie=e=>{let t=e.target.value;oe(t),U.value=!1},ae=e=>{ie({target:{value:e}})},L=e=>{!e||e===G.value||oe(e)},R=(e,t)=>Object.hasOwn(e?.slugs||{},t),z=(e,t)=>{let n=Q(e);if(!n||R(n,t))return{locale:t,fallbackFromMissingTarget:!1};let r=E.meta.locale||a.value||A.defaultLocale,i=r&&R(n,r)&&r||A.defaultLocale&&R(n,A.defaultLocale)&&A.defaultLocale||j.find(e=>R(n,e))||t;return{locale:i,fallbackFromMissingTarget:i!==t}},oe=e=>{let t=E.meta.pageKey||`home`,{locale:n,fallbackFromMissingTarget:r}=z(t,e),i=r?E.fullPath:(()=>{let e=Ys(t,n),r=Xs(t,n);return n===A.defaultLocale&&!(typeof navigator>`u`)&&(navigator.languages||[navigator.language||``]).some(e=>(e||``).toLowerCase().startsWith(n.toLowerCase()))?r:e})();return a.value=e,localStorage.setItem(`locale`,e),O.push(i).catch(()=>{})},B=()=>{if(globalThis.window)return 100;let e=getComputedStyle(document.documentElement);return Number.parseFloat(e.getPropertyValue(`--header-offset`))||90},V=()=>{let e=B(),t=!1;for(let n in w){let r=document.getElementById(n);if(!r)continue;let i=r.getBoundingClientRect();if(i.top<=e&&i.bottom>=e){T.value=n,t=!0;break}}t||(T.value=null)};t(()=>{window.addEventListener(`scroll`,V,{passive:!0}),V()}),s(()=>{window.removeEventListener(`scroll`,V)});let H=e=>{if(globalThis.window!==void 0){if(globalThis.window.requestAnimationFrame===`function`){globalThis.window.requestAnimationFrame(e);return}setTimeout(e,0)}},U=m(!1),W=()=>{U.value=!1},G=C(()=>a.value||E.meta.locale||A.defaultLocale),K=C(()=>{let{locale:e,fallbackFromMissingTarget:t}=z(E.meta.pageKey||`home`,G.value);return t?{title:f(`locale-switch.unavailable.title`),message:f(`locale-switch.unavailable.message`,{requested:f(`locales.${G.value}`),fallback:f(`locales.${e}`)})}:null}),q=C(()=>E.meta.prefixed===!1?Xs(`home`,G.value):Ys(`home`,G.value));p(()=>E.meta.pageKey,e=>{if(e!==`home`){T.value=null;return}H(()=>V())},{immediate:!0}),p(()=>E.fullPath,()=>{E.meta.pageKey===`home`&&H(()=>V())});let J=e=>`${q.value}#${e}`,se=e=>e?O.push(e).catch(()=>{}):Promise.resolve(),Y=(e,{blockUnavailable:t=!1}={})=>typeof window>`u`?Promise.resolve({blocked:!1}):new Promise(n=>{let r={target:e,blockUnavailable:t,handled:!1,resolve:e=>n(e||{blocked:!1})};window.dispatchEvent(new CustomEvent(`walkscloud:navigation-check`,{detail:r})),r.handled||n({blocked:!1})}),ce=e=>{if(typeof window>`u`)return!1;let t=new URL(e,window.location.href),n=new URL(E.fullPath,window.location.origin);return t.pathname===n.pathname&&t.search===n.search&&t.hash===n.hash},X=e=>{let t=new URL(e,window.location.href);if(t.href===window.location.href){window.location.reload();return}window.location.assign(t.href)},le=async e=>{e?.preventDefault(),W(),T.value=null;let t=q.value;if(E.meta.pageKey===`home`){if((await Y(t,{blockUnavailable:!0})).blocked)return;if(ce(t)){X(t);return}}se(q.value).finally(()=>{H(()=>{window.scrollTo({top:0,behavior:`smooth`})})})},Z=(e,t)=>{e?.preventDefault(),T.value=t,W(),se(J(t))};return(e,t)=>{let a=y(`ULocaleSelect`),s=y(`UBanner`);return u(),n(`header`,rl,[d(`div`,il,[d(`nav`,al,[d(`div`,null,[d(`a`,{href:q.value,"aria-label":`Home`,onClick:v(le,[`prevent`])},[t[1]||=d(`img`,{class:`rounded-[50%] w-7 lg:w-12.5 inline-block`,alt:`WalksCloud Logo`,src:`/logo-gradual.svg`},null,-1),d(`h2`,sl,_(e.$t(`brand-name`)),1)],8,ol)]),re.value?c(``,!0):(u(),n(`button`,{key:0,class:`lg:hidden dark:text-white`,onClick:t[0]||=e=>U.value=!U.value},[U.value?(u(),n(`span`,ll,[l(x(k),{icon:`material-symbols:close`,width:`1em`,height:`1em`})])):(u(),n(`span`,cl,[l(x(k),{icon:`material-symbols:menu`,width:`1em`,height:`1em`})]))])),re.value?c(``,!0):(u(),n(`div`,ul,[(u(!0),n(h,null,i(e.$tm(`nav-links`),(e,t)=>(u(),n(`a`,{key:t,class:r([{"text-primary":T.value===t,"dark:text-white":T.value!==t},`hover:text-primary`]),href:J(t),onClick:v(e=>Z(e,t),[`prevent`])},_(e),11,dl))),128)),d(`div`,fl,[l(a,{class:`wc-locale-select w-auto`,"model-value":G.value,locales:M.value,size:`sm`,variant:`ghost`,"search-input":!1,ui:{base:`w-auto min-w-0 pl-2.5 pr-2.5`,content:`z-[70]`,value:`truncate-none whitespace-nowrap`,item:`wc-locale-item`,itemLabel:`whitespace-nowrap pr-0`},style:o({width:I.value}),"onUpdate:modelValue":L},null,8,[`model-value`,`locales`,`style`])])]))])]),K.value?(u(),S(s,{key:0,color:`warning`,icon:`i-lucide-languages`,ui:{container:`h-16 min-h-16 py-1 sm:h-8 sm:min-h-0 sm:py-0.5`,center:`min-h-0 items-center gap-1.5`,title:`text-sm leading-4 text-gray-600 dark:text-gray-300`,icon:`size-3.5 text-gray-600 dark:text-gray-300`},class:`border-t border-amber-300/60 bg-amber-200/70 shadow-sm backdrop-blur-sm dark:border-amber-400/55 dark:bg-amber-400/30`},{title:g(()=>[d(`span`,pl,[d(`span`,ml,_(K.value.title),1),d(`span`,hl,_(K.value.message),1)])]),_:1})):c(``,!0),U.value&&!re.value?(u(),n(`div`,gl,[(u(!0),n(h,null,i(e.$tm(`nav-links`),(e,t)=>(u(),n(`a`,{key:t,class:r([{"text-primary":T.value===t,"dark:text-white":T.value!==t},`hover:text-primary`]),href:J(t),onClick:v(e=>Z(e,t),[`prevent`])},_(e),11,_l))),128)),d(`div`,vl,[d(`div`,yl,[(u(!0),n(h,null,i(x(j),t=>(u(),n(`button`,{key:`locale-${t}`,class:r([[e.$i18n.locale===t?`bg-primary text-white`:`bg-white text-gray-700 dark:bg-[#222831]/85 dark:text-white`],`px-4 py-2 text-sm`]),onClick:e=>ae(t)},_(e.$t(`locales.${t}`)),11,bl))),128))])])])):c(``,!0)])}}},[[`__scopeId`,`data-v-e92124a9`]]),Sl=[`aria-valuenow`,`aria-label`,`title`],Cl={class:`sr-only`},wl=$({__name:`OfflineCacheIndicator`,setup(e){let{isCaching:t,progressPercent:r,progressStyle:i}=E(Kc());return(e,a)=>(u(),S(f,{name:`wc-offline-cache-indicator`},{default:g(()=>[x(t)?(u(),n(`div`,{key:0,class:`wc-offline-cache-progress`,style:o(x(i)),role:`progressbar`,"aria-valuemin":`0`,"aria-valuemax":`100`,"aria-valuenow":Math.round(x(r)),"aria-label":e.$t(`navigation-recovery.offline-cache.caching`),title:e.$t(`navigation-recovery.offline-cache.caching`)},[d(`span`,Cl,_(e.$t(`navigation-recovery.offline-cache.caching`)),1)],12,Sl)):c(``,!0)]),_:1}))}},[[`__scopeId`,`data-v-f8ed3f7b`]]),Tl={__name:`App`,setup(e){let i=()=>typeof window>`u`||typeof document>`u`||document.readyState===`complete`?Promise.resolve():new Promise(e=>{window.addEventListener(`load`,e,{once:!0})});return t(async()=>{await a(),!(typeof window>`u`)&&(await i(),window.requestAnimationFrame(()=>{window.requestAnimationFrame(()=>{window.dispatchEvent(new Event(`walkscloud:app-ready`))})}))}),(e,t)=>(u(),n(h,null,[l(Cc),l(wl),d(`div`,{class:r([`min-h-screen bg-white dark:bg-[#222831]`,e.$i18n.locale===`en`?`font-barlow`:``])},[l(xl),l(x(w)),l(nl)],2)],64))}};export{wo as $,Cn as $n,Se as $r,Ci as $t,gs as A,hr as An,mt as Ar,ha as At,Xo as B,Yn as Bn,Je as Br,Yi as Bt,As as C,kr as Cn,Ot as Cr,ka as Ct,Ss as D,xr as Dn,bt as Dr,xa as Dt,ws as E,Cr as En,St as Er,Ca as Et,os as F,ar as Fn,it as Fr,aa as Ft,Bo as G,zn as Gn,Re as Gr,zi as Gt,Ko as H,Gn as Hn,We as Hr,Gi as Ht,is as I,rr as In,nt as Ir,ra as It,Po as J,Nn as Jn,Me as Jr,Ni as Jt,Ro as K,Ln as Kn,Ie as Kr,Li as Kt,ns as L,tr as Ln,et as Lr,ta as Lt,fs as M,dr as Mn,ut as Mr,da as Mt,us as N,lr as Nn,ct as Nr,la as Nt,bs as O,yr as On,vt as Or,ya as Ot,cs as P,sr as Pn,ot as Pr,sa as Pt,Eo as Q,Tn as Qn,we as Qr,Ti as Qt,es as R,$n as Rn,Qe as Rr,$i as Rt,Ms as S,jr as Sn,At as Sr,ja as St,Es as T,Tr as Tn,wt as Tr,Ta as Tt,Wo as U,Un,He as Ur,Ui as Ut,Jo as V,qn as Vn,Ke as Vr,qi as Vt,Ho as W,Vn as Wn,Be as Wr,Vi as Wt,Ao as X,kn as Xn,Oe as Xr,ki as Xt,Mo as Y,jn as Yn,Ae as Yr,ji as Yt,Oo as Z,Dn as Zn,Ee as Zr,Di as Zt,Q as _,ne as _i,Vr as _n,Bt as _r,Va as _t,Kc as a,ue as ai,di as an,dn as ar,fo as at,qs as b,A as bi,Fr as bn,Pt as br,Fa as bt,Hc as c,se as ci,ai as cn,an as cr,ao as ct,ec as d,U as di,$r as dn,Qt as dr,$a as dt,be as ei,xi as en,xn as er,So as et,Zs as f,V as fi,Zr as fn,Xt as fr,Za as ft,$s as g,re as gi,Ur as gn,Ht as gr,Ua as gt,Js as h,ae as hi,Gr as hn,Wt as hr,Ga as ht,nl as i,fe as ii,pi as in,pn as ir,mo as it,ms as j,pr as jn,ft as jr,pa as jt,vs as k,_r as kn,gt as kr,_a as kt,Cc as l,q as li,ri as ln,nn as lr,ro as lt,Ys as m,R as mi,qr as mn,Kt as mr,qa as mt,wl as n,ge as ni,_i as nn,_n as nr,vo as nt,Uc as o,le as oi,li as on,ln as or,lo as ot,Xs as p,oe as pi,Yr as pn,Jt as pr,Ya as pt,Io as q,Fn as qn,Pe as qr,Fi as qt,xl as r,me as ri,hi as rn,hn as rr,go as rt,Wc as s,ce as si,si as sn,sn as sr,so as st,Tl as t,ve as ti,yi as tn,yn as tr,bo as tt,$ as u,G as ui,ti as un,en as ur,to as ut,Gs as v,P as vi,zr as vn,Rt as vr,za as vt,Os as w,Dr as wn,Et as wr,Da as wt,Qs as x,Nr as xn,Mt as xr,Na as xt,Ws as y,M as yi,Lr as yn,It as yr,La as yt,Qo as z,Zn as zn,Xe as zr,Zi as zt};