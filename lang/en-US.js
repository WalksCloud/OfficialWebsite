/* eslint-disable */
export default async (context, locale) => {
  return await Promise.resolve({
    companyName: 'WalksCloud',
    companyNameSlogan: 'Get Everything Works Great',
    aboutUS: 'About Walks Cloud',
    aboutUSDesc:
      "We're creating a enterprise ready of Cloud application, the goal is provide users with everything that is needed to build rich and engaging management applications using ours products.",
    featuresTitle: 'We can bring benefits for you',
    featuresDesc:
      `
您身為中小企業，專注於自己的產品已分身乏術？
沒有足夠預算聘請 MIS 或使用超貴的系統， HR 身兼多職？
到職離職開通或關閉帳號太繁瑣，好難操作？
網路不通、電腦壞掉幾乎不能工作，怎麼辦？
網站突然不能開，打電話問了半天才知道是憑證過期？
新進、離職員工資產不清，wifi密碼老是被離職員工偷用？
公司 NAS 資料被看光光？
      `,
    featuresPriveded: 'We can provided highest quality services in industry',
    features:
      `
簡單自動化的管理系統，縮短現行流程工時至少60％以上
系統客製化高，不用擔心不符合需求
為您妥善營運所有 MIS 工作範疇，我們可即時得知網路障礙，確保網路時時暢通
      `,
    featured: 'Services Item',
    featuredServices: [
      { icon: 'mdi-clippy', title: 'IT 外包 & 整體規劃', text: '網路建置、設備維護' },
      { icon: 'mdi-account-circle', title: '雲端帳號管理', text: '帳號管理系統 IAM' },
      { icon: 'mdi-fingerprint', title: '資產管理系統', text: 'coming soon' },
    ],
    aboutTeam: '團隊介紹',
    aboutDesc:
      `
團隊擁有豐富開發及 IT 管理經驗
精通相關系統開發及維運、資安架構、網路維護
熟知公司營運所有 MIS knowhow 及痛點
曾設定可容納 500 至 1,500 名以上與會者研討會無線網絡
資產管理系統開發
不論是管理系統、網路建置、活動直播，皆可滿足您的需求
      `,
    teamMembers: [
      { name: 'Pennyken Huang', desc: 'CEO', avatar: 'https://lh3.googleusercontent.com/a-/ACB-R5QoaEtUBtNEe2kpSSPTqxbY4OP70tKxM4ytzQ=s90' },
      { name: 'Haraguroicha Hsu', desc: 'CTO', avatar: 'https://www.gravatar.com/avatar/4bb161cc965b81d364f0b9605f2af3de?s=90' },
      { name: 'Jimmy Pan', desc: 'CIO', avatar: 'https://www.gravatar.com/avatar/741cd239cb86f48917207ee61bf8cd69?s=90' },
    ],
    contactUS: 'Contact US',
    contactCompanyName: '公司名稱',
    contactName: '聯絡人',
    contactEmail: 'email',
    contactPhone: '聯絡電話',
    contactRequirements: '需要服務需求',
    contactServices: [
      { id: 'it', name: 'IT 外包 & 整體規劃（網路建置、設備維護）' },
      { id: 'iam', name: '雲端帳號管理' },
      { id: 'crm', name: '資產管理系統' },
    ],
  });
};
