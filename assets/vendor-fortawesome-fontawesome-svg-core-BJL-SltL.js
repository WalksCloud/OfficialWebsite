function e(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function t(e){if(Array.isArray(e))return e}function n(t){if(Array.isArray(t))return e(t)}function r(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,_(r.key),r)}}function a(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),Object.defineProperty(e,`prototype`,{writable:!1}),e}function o(e,t){var n=typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(!n){if(Array.isArray(e)||(n=y(e))||t&&e&&typeof e.length==`number`){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a,o=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,a=e},f:function(){try{o||n.return==null||n.return()}finally{if(s)throw a}}}}function s(e,t,n){return(t=_(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function l(e,t){var n=e==null?null:typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(n!=null){var r,i,a,o,s=[],c=!0,l=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(e){l=!0,i=e}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(l)throw i}}return s}}function u(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function d(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?f(Object(n),!0).forEach(function(t){s(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function m(e,n){return t(e)||l(e,n)||y(e,n)||u()}function h(e){return n(e)||c(e)||y(e)||d()}function g(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function _(e){var t=g(e,`string`);return typeof t==`symbol`?t:t+``}function v(e){"@babel/helpers - typeof";return v=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},v(e)}function y(t,n){if(t){if(typeof t==`string`)return e(t,n);var r={}.toString.call(t).slice(8,-1);return r===`Object`&&t.constructor&&(r=t.constructor.name),r===`Map`||r===`Set`?Array.from(t):r===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(t,n):void 0}}var b=function(){},x={},ee={},te=null,ne={mark:b,measure:b};try{typeof window<`u`&&(x=window),typeof document<`u`&&(ee=document),typeof MutationObserver<`u`&&(te=MutationObserver),typeof performance<`u`&&(ne=performance)}catch{}var re=(x.navigator||{}).userAgent,ie=re===void 0?``:re,S=x,C=ee,ae=te,oe=ne;S.document;var w=!!C.documentElement&&!!C.head&&typeof C.addEventListener==`function`&&typeof C.createElement==`function`,se=~ie.indexOf(`MSIE`)||~ie.indexOf(`Trident/`),ce,le=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,ue=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,de={classic:{fa:`solid`,fas:`solid`,"fa-solid":`solid`,far:`regular`,"fa-regular":`regular`,fal:`light`,"fa-light":`light`,fat:`thin`,"fa-thin":`thin`,fab:`brands`,"fa-brands":`brands`},duotone:{fa:`solid`,fad:`solid`,"fa-solid":`solid`,"fa-duotone":`solid`,fadr:`regular`,"fa-regular":`regular`,fadl:`light`,"fa-light":`light`,fadt:`thin`,"fa-thin":`thin`},sharp:{fa:`solid`,fass:`solid`,"fa-solid":`solid`,fasr:`regular`,"fa-regular":`regular`,fasl:`light`,"fa-light":`light`,fast:`thin`,"fa-thin":`thin`},"sharp-duotone":{fa:`solid`,fasds:`solid`,"fa-solid":`solid`,fasdr:`regular`,"fa-regular":`regular`,fasdl:`light`,"fa-light":`light`,fasdt:`thin`,"fa-thin":`thin`},slab:{"fa-regular":`regular`,faslr:`regular`},"slab-press":{"fa-regular":`regular`,faslpr:`regular`},thumbprint:{"fa-light":`light`,fatl:`light`},whiteboard:{"fa-semibold":`semibold`,fawsb:`semibold`},notdog:{"fa-solid":`solid`,fans:`solid`},"notdog-duo":{"fa-solid":`solid`,fands:`solid`},etch:{"fa-solid":`solid`,faes:`solid`},graphite:{"fa-thin":`thin`,fagt:`thin`},jelly:{"fa-regular":`regular`,fajr:`regular`},"jelly-fill":{"fa-regular":`regular`,fajfr:`regular`},"jelly-duo":{"fa-regular":`regular`,fajdr:`regular`},chisel:{"fa-regular":`regular`,facr:`regular`},utility:{"fa-semibold":`semibold`,fausb:`semibold`},"utility-duo":{"fa-semibold":`semibold`,faudsb:`semibold`},"utility-fill":{"fa-semibold":`semibold`,faufsb:`semibold`}},fe={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`},pe=[`fa-classic`,`fa-duotone`,`fa-sharp`,`fa-sharp-duotone`,`fa-thumbprint`,`fa-whiteboard`,`fa-notdog`,`fa-notdog-duo`,`fa-chisel`,`fa-etch`,`fa-graphite`,`fa-jelly`,`fa-jelly-fill`,`fa-jelly-duo`,`fa-slab`,`fa-slab-press`,`fa-utility`,`fa-utility-duo`,`fa-utility-fill`],T=`classic`,E=`duotone`,me=`sharp`,he=`sharp-duotone`,ge=`chisel`,_e=`etch`,ve=`graphite`,ye=`jelly`,be=`jelly-duo`,xe=`jelly-fill`,Se=`notdog`,Ce=`notdog-duo`,we=`slab`,Te=`slab-press`,Ee=`thumbprint`,De=`utility`,Oe=`utility-duo`,ke=`utility-fill`,Ae=`whiteboard`,je=`Classic`,Me=`Duotone`,Ne=`Sharp`,Pe=`Sharp Duotone`,Fe=`Chisel`,Ie=`Etch`,Le=`Graphite`,Re=`Jelly`,ze=`Jelly Duo`,Be=`Jelly Fill`,Ve=`Notdog`,He=`Notdog Duo`,Ue=`Slab`,We=`Slab Press`,Ge=`Thumbprint`,Ke=`Utility`,qe=`Utility Duo`,Je=`Utility Fill`,Ye=`Whiteboard`,Xe=[T,E,me,he,ge,_e,ve,ye,be,xe,Se,Ce,we,Te,Ee,De,Oe,ke,Ae];ce={},s(s(s(s(s(s(s(s(s(s(ce,T,je),E,Me),me,Ne),he,Pe),ge,Fe),_e,Ie),ve,Le),ye,Re),be,ze),xe,Be),s(s(s(s(s(s(s(s(s(ce,Se,Ve),Ce,He),we,Ue),Te,We),Ee,Ge),De,Ke),Oe,qe),ke,Je),Ae,Ye);var Ze={classic:{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},duotone:{900:`fad`,400:`fadr`,300:`fadl`,100:`fadt`},sharp:{900:`fass`,400:`fasr`,300:`fasl`,100:`fast`},"sharp-duotone":{900:`fasds`,400:`fasdr`,300:`fasdl`,100:`fasdt`},slab:{400:`faslr`},"slab-press":{400:`faslpr`},whiteboard:{600:`fawsb`},thumbprint:{300:`fatl`},notdog:{900:`fans`},"notdog-duo":{900:`fands`},etch:{900:`faes`},graphite:{100:`fagt`},chisel:{400:`facr`},jelly:{400:`fajr`},"jelly-fill":{400:`fajfr`},"jelly-duo":{400:`fajdr`},utility:{600:`fausb`},"utility-duo":{600:`faudsb`},"utility-fill":{600:`faufsb`}},Qe={"Font Awesome 7 Free":{900:`fas`,400:`far`},"Font Awesome 7 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},"Font Awesome 7 Brands":{400:`fab`,normal:`fab`},"Font Awesome 7 Duotone":{900:`fad`,400:`fadr`,normal:`fadr`,300:`fadl`,100:`fadt`},"Font Awesome 7 Sharp":{900:`fass`,400:`fasr`,normal:`fasr`,300:`fasl`,100:`fast`},"Font Awesome 7 Sharp Duotone":{900:`fasds`,400:`fasdr`,normal:`fasdr`,300:`fasdl`,100:`fasdt`},"Font Awesome 7 Jelly":{400:`fajr`,normal:`fajr`},"Font Awesome 7 Jelly Fill":{400:`fajfr`,normal:`fajfr`},"Font Awesome 7 Jelly Duo":{400:`fajdr`,normal:`fajdr`},"Font Awesome 7 Slab":{400:`faslr`,normal:`faslr`},"Font Awesome 7 Slab Press":{400:`faslpr`,normal:`faslpr`},"Font Awesome 7 Thumbprint":{300:`fatl`,normal:`fatl`},"Font Awesome 7 Notdog":{900:`fans`,normal:`fans`},"Font Awesome 7 Notdog Duo":{900:`fands`,normal:`fands`},"Font Awesome 7 Etch":{900:`faes`,normal:`faes`},"Font Awesome 7 Graphite":{100:`fagt`,normal:`fagt`},"Font Awesome 7 Chisel":{400:`facr`,normal:`facr`},"Font Awesome 7 Whiteboard":{600:`fawsb`,normal:`fawsb`},"Font Awesome 7 Utility":{600:`fausb`,normal:`fausb`},"Font Awesome 7 Utility Duo":{600:`faudsb`,normal:`faudsb`},"Font Awesome 7 Utility Fill":{600:`faufsb`,normal:`faufsb`}},$e=new Map([[`classic`,{defaultShortPrefixId:`fas`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`,`brands`],futureStyleIds:[],defaultFontWeight:900}],[`duotone`,{defaultShortPrefixId:`fad`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`sharp`,{defaultShortPrefixId:`fass`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`sharp-duotone`,{defaultShortPrefixId:`fasds`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`chisel`,{defaultShortPrefixId:`facr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`etch`,{defaultShortPrefixId:`faes`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`graphite`,{defaultShortPrefixId:`fagt`,defaultStyleId:`thin`,styleIds:[`thin`],futureStyleIds:[],defaultFontWeight:100}],[`jelly`,{defaultShortPrefixId:`fajr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`jelly-duo`,{defaultShortPrefixId:`fajdr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`jelly-fill`,{defaultShortPrefixId:`fajfr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`notdog`,{defaultShortPrefixId:`fans`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`notdog-duo`,{defaultShortPrefixId:`fands`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`slab`,{defaultShortPrefixId:`faslr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab-press`,{defaultShortPrefixId:`faslpr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`thumbprint`,{defaultShortPrefixId:`fatl`,defaultStyleId:`light`,styleIds:[`light`],futureStyleIds:[],defaultFontWeight:300}],[`utility`,{defaultShortPrefixId:`fausb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`utility-duo`,{defaultShortPrefixId:`faudsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`utility-fill`,{defaultShortPrefixId:`faufsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`whiteboard`,{defaultShortPrefixId:`fawsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}]]),et={chisel:{regular:`facr`},classic:{brands:`fab`,light:`fal`,regular:`far`,solid:`fas`,thin:`fat`},duotone:{light:`fadl`,regular:`fadr`,solid:`fad`,thin:`fadt`},etch:{solid:`faes`},graphite:{thin:`fagt`},jelly:{regular:`fajr`},"jelly-duo":{regular:`fajdr`},"jelly-fill":{regular:`fajfr`},notdog:{solid:`fans`},"notdog-duo":{solid:`fands`},sharp:{light:`fasl`,regular:`fasr`,solid:`fass`,thin:`fast`},"sharp-duotone":{light:`fasdl`,regular:`fasdr`,solid:`fasds`,thin:`fasdt`},slab:{regular:`faslr`},"slab-press":{regular:`faslpr`},thumbprint:{light:`fatl`},utility:{semibold:`fausb`},"utility-duo":{semibold:`faudsb`},"utility-fill":{semibold:`faufsb`},whiteboard:{semibold:`fawsb`}},tt=[`fak`,`fa-kit`,`fakd`,`fa-kit-duotone`],nt={kit:{fak:`kit`,"fa-kit":`kit`},"kit-duotone":{fakd:`kit-duotone`,"fa-kit-duotone":`kit-duotone`}},rt=[`kit`];s(s({},`kit`,`Kit`),`kit-duotone`,`Kit Duotone`);var it={kit:{"fa-kit":`fak`},"kit-duotone":{"fa-kit-duotone":`fakd`}},at={"Font Awesome Kit":{400:`fak`,normal:`fak`},"Font Awesome Kit Duotone":{400:`fakd`,normal:`fakd`}},ot={kit:{fak:`fa-kit`},"kit-duotone":{fakd:`fa-kit-duotone`}},st={kit:{kit:`fak`},"kit-duotone":{"kit-duotone":`fakd`}},ct,lt={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`},ut=[`fa-classic`,`fa-duotone`,`fa-sharp`,`fa-sharp-duotone`,`fa-thumbprint`,`fa-whiteboard`,`fa-notdog`,`fa-notdog-duo`,`fa-chisel`,`fa-etch`,`fa-graphite`,`fa-jelly`,`fa-jelly-fill`,`fa-jelly-duo`,`fa-slab`,`fa-slab-press`,`fa-utility`,`fa-utility-duo`,`fa-utility-fill`];ct={},s(s(s(s(s(s(s(s(s(s(ct,`classic`,`Classic`),`duotone`,`Duotone`),`sharp`,`Sharp`),`sharp-duotone`,`Sharp Duotone`),`chisel`,`Chisel`),`etch`,`Etch`),`graphite`,`Graphite`),`jelly`,`Jelly`),`jelly-duo`,`Jelly Duo`),`jelly-fill`,`Jelly Fill`),s(s(s(s(s(s(s(s(s(ct,`notdog`,`Notdog`),`notdog-duo`,`Notdog Duo`),`slab`,`Slab`),`slab-press`,`Slab Press`),`thumbprint`,`Thumbprint`),`utility`,`Utility`),`utility-duo`,`Utility Duo`),`utility-fill`,`Utility Fill`),`whiteboard`,`Whiteboard`),s(s({},`kit`,`Kit`),`kit-duotone`,`Kit Duotone`);var dt={classic:{"fa-brands":`fab`,"fa-duotone":`fad`,"fa-light":`fal`,"fa-regular":`far`,"fa-solid":`fas`,"fa-thin":`fat`},duotone:{"fa-regular":`fadr`,"fa-light":`fadl`,"fa-thin":`fadt`},sharp:{"fa-solid":`fass`,"fa-regular":`fasr`,"fa-light":`fasl`,"fa-thin":`fast`},"sharp-duotone":{"fa-solid":`fasds`,"fa-regular":`fasdr`,"fa-light":`fasdl`,"fa-thin":`fasdt`},slab:{"fa-regular":`faslr`},"slab-press":{"fa-regular":`faslpr`},whiteboard:{"fa-semibold":`fawsb`},thumbprint:{"fa-light":`fatl`},notdog:{"fa-solid":`fans`},"notdog-duo":{"fa-solid":`fands`},etch:{"fa-solid":`faes`},graphite:{"fa-thin":`fagt`},jelly:{"fa-regular":`fajr`},"jelly-fill":{"fa-regular":`fajfr`},"jelly-duo":{"fa-regular":`fajdr`},chisel:{"fa-regular":`facr`},utility:{"fa-semibold":`fausb`},"utility-duo":{"fa-semibold":`faudsb`},"utility-fill":{"fa-semibold":`faufsb`}},ft={classic:[`fas`,`far`,`fal`,`fat`,`fad`],duotone:[`fadr`,`fadl`,`fadt`],sharp:[`fass`,`fasr`,`fasl`,`fast`],"sharp-duotone":[`fasds`,`fasdr`,`fasdl`,`fasdt`],slab:[`faslr`],"slab-press":[`faslpr`],whiteboard:[`fawsb`],thumbprint:[`fatl`],notdog:[`fans`],"notdog-duo":[`fands`],etch:[`faes`],graphite:[`fagt`],jelly:[`fajr`],"jelly-fill":[`fajfr`],"jelly-duo":[`fajdr`],chisel:[`facr`],utility:[`fausb`],"utility-duo":[`faudsb`],"utility-fill":[`faufsb`]},pt={classic:{fab:`fa-brands`,fad:`fa-duotone`,fal:`fa-light`,far:`fa-regular`,fas:`fa-solid`,fat:`fa-thin`},duotone:{fadr:`fa-regular`,fadl:`fa-light`,fadt:`fa-thin`},sharp:{fass:`fa-solid`,fasr:`fa-regular`,fasl:`fa-light`,fast:`fa-thin`},"sharp-duotone":{fasds:`fa-solid`,fasdr:`fa-regular`,fasdl:`fa-light`,fasdt:`fa-thin`},slab:{faslr:`fa-regular`},"slab-press":{faslpr:`fa-regular`},whiteboard:{fawsb:`fa-semibold`},thumbprint:{fatl:`fa-light`},notdog:{fans:`fa-solid`},"notdog-duo":{fands:`fa-solid`},etch:{faes:`fa-solid`},graphite:{fagt:`fa-thin`},jelly:{fajr:`fa-regular`},"jelly-fill":{fajfr:`fa-regular`},"jelly-duo":{fajdr:`fa-regular`},chisel:{facr:`fa-regular`},utility:{fausb:`fa-semibold`},"utility-duo":{faudsb:`fa-semibold`},"utility-fill":{faufsb:`fa-semibold`}},mt=`fa.fas.far.fal.fat.fad.fadr.fadl.fadt.fab.fass.fasr.fasl.fast.fasds.fasdr.fasdl.fasdt.faslr.faslpr.fawsb.fatl.fans.fands.faes.fagt.fajr.fajfr.fajdr.facr.fausb.faudsb.faufsb`.split(`.`).concat(ut,[`fa-solid`,`fa-regular`,`fa-light`,`fa-thin`,`fa-duotone`,`fa-brands`,`fa-semibold`]),ht=[`solid`,`regular`,`light`,`thin`,`duotone`,`brands`,`semibold`],gt=[1,2,3,4,5,6,7,8,9,10],_t=gt.concat([11,12,13,14,15,16,17,18,19,20]),vt=[].concat(h(Object.keys(ft)),ht,[`aw`,`fw`,`pull-left`,`pull-right`],[`2xs`,`xs`,`sm`,`lg`,`xl`,`2xl`,`beat`,`border`,`fade`,`beat-fade`,`bounce`,`flip-both`,`flip-horizontal`,`flip-vertical`,`flip`,`inverse`,`layers`,`layers-bottom-left`,`layers-bottom-right`,`layers-counter`,`layers-text`,`layers-top-left`,`layers-top-right`,`li`,`pull-end`,`pull-start`,`pulse`,`rotate-180`,`rotate-270`,`rotate-90`,`rotate-by`,`shake`,`spin-pulse`,`spin-reverse`,`spin`,`stack-1x`,`stack-2x`,`stack`,`ul`,`width-auto`,`width-fixed`,lt.GROUP,lt.SWAP_OPACITY,lt.PRIMARY,lt.SECONDARY],gt.map(function(e){return`${e}x`}),_t.map(function(e){return`w-${e}`})),yt={"Font Awesome 5 Free":{900:`fas`,400:`far`},"Font Awesome 5 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`},"Font Awesome 5 Brands":{400:`fab`,normal:`fab`},"Font Awesome 5 Duotone":{900:`fad`}},D=`___FONT_AWESOME___`,bt=16,xt=`fa`,St=`svg-inline--fa`,O=`data-fa-i2svg`,Ct=`data-fa-pseudo-element`,wt=`data-fa-pseudo-element-pending`,Tt=`data-prefix`,Et=`data-icon`,Dt=`fontawesome-i2svg`,Ot=`async`,kt=[`HTML`,`HEAD`,`STYLE`,`SCRIPT`],At=[`::before`,`::after`,`:before`,`:after`],jt=function(){try{return!0}catch{return!1}}();function k(e){return new Proxy(e,{get:function(e,t){return t in e?e[t]:e[T]}})}var Mt=p({},de);Mt[T]=p(p(p(p({},{"fa-duotone":`duotone`}),de[T]),nt.kit),nt[`kit-duotone`]);var Nt=k(Mt),Pt=p({},et);Pt[T]=p(p(p(p({},{duotone:`fad`}),Pt[T]),st.kit),st[`kit-duotone`]);var Ft=k(Pt),It=p({},pt);It[T]=p(p({},It[T]),ot.kit);var Lt=k(It),Rt=p({},dt);Rt[T]=p(p({},Rt[T]),it.kit),k(Rt);var zt=le,Bt=`fa-layers-text`,Vt=ue;k(p({},Ze));var Ht=[`class`,`data-prefix`,`data-icon`,`data-fa-transform`,`data-fa-mask`],Ut=fe,Wt=[].concat(h(rt),h(vt)),A=S.FontAwesomeConfig||{};function Gt(e){var t=C.querySelector(`script[`+e+`]`);if(t)return t.getAttribute(e)}function Kt(e){return e===``?!0:e===`false`?!1:e===`true`?!0:e}C&&typeof C.querySelector==`function`&&[[`data-family-prefix`,`familyPrefix`],[`data-css-prefix`,`cssPrefix`],[`data-family-default`,`familyDefault`],[`data-style-default`,`styleDefault`],[`data-replacement-class`,`replacementClass`],[`data-auto-replace-svg`,`autoReplaceSvg`],[`data-auto-add-css`,`autoAddCss`],[`data-search-pseudo-elements`,`searchPseudoElements`],[`data-search-pseudo-elements-warnings`,`searchPseudoElementsWarnings`],[`data-search-pseudo-elements-full-scan`,`searchPseudoElementsFullScan`],[`data-observe-mutations`,`observeMutations`],[`data-mutate-approach`,`mutateApproach`],[`data-keep-original-source`,`keepOriginalSource`],[`data-measure-performance`,`measurePerformance`],[`data-show-missing-icons`,`showMissingIcons`]].forEach(function(e){var t=m(e,2),n=t[0],r=t[1],i=Kt(Gt(n));i!=null&&(A[r]=i)});var qt={styleDefault:`solid`,familyDefault:T,cssPrefix:xt,replacementClass:St,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:`async`,keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};A.familyPrefix&&(A.cssPrefix=A.familyPrefix);var j=p(p({},qt),A);j.autoReplaceSvg||(j.observeMutations=!1);var M={};Object.keys(qt).forEach(function(e){Object.defineProperty(M,e,{enumerable:!0,set:function(t){j[e]=t,N.forEach(function(e){return e(M)})},get:function(){return j[e]}})}),Object.defineProperty(M,`familyPrefix`,{enumerable:!0,set:function(e){j.cssPrefix=e,N.forEach(function(e){return e(M)})},get:function(){return j.cssPrefix}}),S.FontAwesomeConfig=M;var N=[];function Jt(e){return N.push(e),function(){N.splice(N.indexOf(e),1)}}var P=bt,F={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Yt(e){if(!(!e||!w)){var t=C.createElement(`style`);t.setAttribute(`type`,`text/css`),t.innerHTML=e;for(var n=C.head.childNodes,r=null,i=n.length-1;i>-1;i--){var a=n[i],o=(a.tagName||``).toUpperCase();[`STYLE`,`LINK`].indexOf(o)>-1&&(r=a)}return C.head.insertBefore(t,r),e}}var Xt=`0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`;function Zt(){for(var e=12,t=``;e-- >0;)t+=Xt[Math.random()*62|0];return t}function I(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Qt(e){return e.classList?I(e.classList):(e.getAttribute(`class`)||``).split(` `).filter(function(e){return e})}function $t(e){return`${e}`.replace(/&/g,`&amp;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`)}function en(e){return Object.keys(e||{}).reduce(function(t,n){return t+`${n}="${$t(e[n])}" `},``).trim()}function L(e){return Object.keys(e||{}).reduce(function(t,n){return t+`${n}: ${e[n].trim()};`},``)}function tn(e){return e.size!==F.size||e.x!==F.x||e.y!==F.y||e.rotate!==F.rotate||e.flipX||e.flipY}function nn(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth;return{outer:{transform:`translate(${n/2} 256)`},inner:{transform:`${`translate(${t.x*32}, ${t.y*32}) `} ${`scale(${t.size/16*(t.flipX?-1:1)}, ${t.size/16*(t.flipY?-1:1)}) `} ${`rotate(${t.rotate} 0 0)`}`},path:{transform:`translate(${r/2*-1} -256)`}}}function rn(e){var t=e.transform,n=e.width,r=n===void 0?bt:n,i=e.height,a=i===void 0?bt:i,o=e.startCentered,s=o===void 0?!1:o,c=``;return s&&se?c+=`translate(${t.x/P-r/2}em, ${t.y/P-a/2}em) `:s?c+=`translate(calc(-50% + ${t.x/P}em), calc(-50% + ${t.y/P}em)) `:c+=`translate(${t.x/P}em, ${t.y/P}em) `,c+=`scale(${t.size/P*(t.flipX?-1:1)}, ${t.size/P*(t.flipY?-1:1)}) `,c+=`rotate(${t.rotate}deg) `,c}var an=`:root, :host {
  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';
  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';
  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';
  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';
  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';
  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';
  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';
  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';
  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';
  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';
  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';
  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';
  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';
  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';
  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';
  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';
  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';
  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';
  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';
  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';
  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;function on(){var e=xt,t=St,n=M.cssPrefix,r=M.replacementClass,i=an;if(n!==e||r!==t){var a=RegExp(`\\.${e}\\-`,`g`),o=RegExp(`\\--${e}\\-`,`g`),s=RegExp(`\\.${t}`,`g`);i=i.replace(a,`.${n}-`).replace(o,`--${n}-`).replace(s,`.${r}`)}return i}var sn=!1;function cn(){M.autoAddCss&&!sn&&(Yt(on()),sn=!0)}var ln={mixout:function(){return{dom:{css:on,insertCss:cn}}},hooks:function(){return{beforeDOMElementCreation:function(){cn()},beforeI2svg:function(){cn()}}}},R=S||{};R[D]||(R[D]={}),R[D].styles||(R[D].styles={}),R[D].hooks||(R[D].hooks={}),R[D].shims||(R[D].shims=[]);var z=R[D],un=[],dn=function(){C.removeEventListener(`DOMContentLoaded`,dn),B=1,un.map(function(e){return e()})},B=!1;w&&(B=(C.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(C.readyState),B||C.addEventListener(`DOMContentLoaded`,dn));function fn(e){w&&(B?setTimeout(e,0):un.push(e))}function V(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,a=i===void 0?[]:i;return typeof e==`string`?$t(e):`<${t} ${en(r)}>${a.map(V).join(``)}</${t}>`}function pn(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var mn=function(e,t){return function(n,r,i,a){return e.call(t,n,r,i,a)}},hn=function(e,t,n,r){var i=Object.keys(e),a=i.length,o=r===void 0?t:mn(t,r),s,c,l;for(n===void 0?(s=1,l=e[i[0]]):(s=0,l=n);s<a;s++)c=i[s],l=o(l,e[c],c,e);return l};function gn(e){return h(e).length===1?e.codePointAt(0).toString(16):null}function _n(e){return Object.keys(e).reduce(function(t,n){var r=e[n];return r.icon?t[r.iconName]=r.icon:t[n]=r,t},{})}function vn(e,t){var n=(arguments.length>2&&arguments[2]!==void 0?arguments[2]:{}).skipHooks,r=n===void 0?!1:n,i=_n(t);typeof z.hooks.addPack==`function`&&!r?z.hooks.addPack(e,_n(t)):z.styles[e]=p(p({},z.styles[e]||{}),i),e===`fas`&&vn(`fa`,t)}var H=z.styles,yn=z.shims,bn=Object.keys(Lt),xn=bn.reduce(function(e,t){return e[t]=Object.keys(Lt[t]),e},{}),Sn=null,Cn={},wn={},Tn={},En={},Dn={};function On(e){return~Wt.indexOf(e)}function kn(e,t){var n=t.split(`-`),r=n[0],i=n.slice(1).join(`-`);return r===e&&i!==``&&!On(i)?i:null}var An=function(){var e=function(e){return hn(H,function(t,n,r){return t[r]=hn(n,e,{}),t},{})};Cn=e(function(e,t,n){return t[3]&&(e[t[3]]=n),t[2]&&t[2].filter(function(e){return typeof e==`number`}).forEach(function(t){e[t.toString(16)]=n}),e}),wn=e(function(e,t,n){return e[n]=n,t[2]&&t[2].filter(function(e){return typeof e==`string`}).forEach(function(t){e[t]=n}),e}),Dn=e(function(e,t,n){var r=t[2];return e[n]=n,r.forEach(function(t){e[t]=n}),e});var t=`far`in H||M.autoFetchSvg,n=hn(yn,function(e,n){var r=n[0],i=n[1],a=n[2];return i===`far`&&!t&&(i=`fas`),typeof r==`string`&&(e.names[r]={prefix:i,iconName:a}),typeof r==`number`&&(e.unicodes[r.toString(16)]={prefix:i,iconName:a}),e},{names:{},unicodes:{}});Tn=n.names,En=n.unicodes,Sn=G(M.styleDefault,{family:M.familyDefault})};Jt(function(e){Sn=G(e.styleDefault,{family:M.familyDefault})}),An();function jn(e,t){return(Cn[e]||{})[t]}function Mn(e,t){return(wn[e]||{})[t]}function U(e,t){return(Dn[e]||{})[t]}function Nn(e){return Tn[e]||{prefix:null,iconName:null}}function Pn(e){var t=En[e],n=jn(`fas`,e);return t||(n?{prefix:`fas`,iconName:n}:null)||{prefix:null,iconName:null}}function W(){return Sn}var Fn=function(){return{prefix:null,iconName:null,rest:[]}};function In(e){var t=T,n=bn.reduce(function(e,t){return e[t]=`${M.cssPrefix}-${t}`,e},{});return Xe.forEach(function(r){(e.includes(n[r])||e.some(function(e){return xn[r].includes(e)}))&&(t=r)}),t}function G(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).family,n=t===void 0?T:t,r=Nt[n][e];if(n===E&&!e)return`fad`;var i=Ft[n][e]||Ft[n][r],a=e in z.styles?e:null;return i||a||null}function Ln(e){var t=[],n=null;return e.forEach(function(e){var r=kn(M.cssPrefix,e);r?n=r:e&&t.push(e)}),{iconName:n,rest:t}}function Rn(e){return e.sort().filter(function(e,t,n){return n.indexOf(e)===t})}var zn=mt.concat(tt);function Bn(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).skipLookups,n=t===void 0?!1:t,r=null,i=Rn(e.filter(function(e){return zn.includes(e)})),a=Rn(e.filter(function(e){return!zn.includes(e)})),o=m(i.filter(function(e){return r=e,!pe.includes(e)}),1)[0],s=o===void 0?null:o,c=In(i),l=p(p({},Ln(a)),{},{prefix:G(s,{family:c})});return p(p(p({},l),Wn({values:e,family:c,styles:H,config:M,canonical:l,givenPrefix:r})),Vn(n,r,l))}function Vn(e,t,n){var r=n.prefix,i=n.iconName;if(e||!r||!i)return{prefix:r,iconName:i};var a=t===`fa`?Nn(i):{},o=U(r,i);return i=a.iconName||o||i,r=a.prefix||r,r===`far`&&!H.far&&H.fas&&!M.autoFetchSvg&&(r=`fas`),{prefix:r,iconName:i}}var Hn=Xe.filter(function(e){return e!==T||e!==E}),Un=Object.keys(pt).filter(function(e){return e!==T}).map(function(e){return Object.keys(pt[e])}).flat();function Wn(e){var t=e.values,n=e.family,r=e.canonical,i=e.givenPrefix,a=i===void 0?``:i,o=e.styles,s=o===void 0?{}:o,c=e.config,l=c===void 0?{}:c,u=n===E,d=t.includes(`fa-duotone`)||t.includes(`fad`),f=l.familyDefault===`duotone`,p=r.prefix===`fad`||r.prefix===`fa-duotone`;return!u&&(d||f||p)&&(r.prefix=`fad`),(t.includes(`fa-brands`)||t.includes(`fab`))&&(r.prefix=`fab`),!r.prefix&&Hn.includes(n)&&(Object.keys(s).find(function(e){return Un.includes(e)})||l.autoFetchSvg)&&(r.prefix=$e.get(n).defaultShortPrefixId,r.iconName=U(r.prefix,r.iconName)||r.iconName),(r.prefix===`fa`||a===`fa`)&&(r.prefix=W()||`fas`),r}var Gn=function(){function e(){r(this,e),this.definitions={}}return a(e,[{key:`add`,value:function(){var e=this,t=[...arguments].reduce(this._pullDefinitions,{});Object.keys(t).forEach(function(n){e.definitions[n]=p(p({},e.definitions[n]||{}),t[n]),vn(n,t[n]);var r=Lt[T][n];r&&vn(r,t[n]),An()})}},{key:`reset`,value:function(){this.definitions={}}},{key:`_pullDefinitions`,value:function(e,t){var n=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(n).map(function(t){var r=n[t],i=r.prefix,a=r.iconName,o=r.icon,s=o[2];e[i]||(e[i]={}),s.length>0&&s.forEach(function(t){typeof t==`string`&&(e[i][t]=o)}),e[i][a]=o}),e}}])}(),Kn=[],K={},q={},qn=Object.keys(q);function Jn(e,t){var n=t.mixoutsTo;return Kn=e,K={},Object.keys(q).forEach(function(e){qn.indexOf(e)===-1&&delete q[e]}),Kn.forEach(function(e){var t=e.mixout?e.mixout():{};if(Object.keys(t).forEach(function(e){typeof t[e]==`function`&&(n[e]=t[e]),v(t[e])===`object`&&Object.keys(t[e]).forEach(function(r){n[e]||(n[e]={}),n[e][r]=t[e][r]})}),e.hooks){var r=e.hooks();Object.keys(r).forEach(function(e){K[e]||(K[e]=[]),K[e].push(r[e])})}e.provides&&e.provides(q)}),n}function Yn(e,t){var n=[...arguments].slice(2);return(K[e]||[]).forEach(function(e){t=e.apply(null,[t].concat(n))}),t}function J(e){var t=[...arguments].slice(1);(K[e]||[]).forEach(function(e){e.apply(null,t)})}function Y(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return q[e]?q[e].apply(null,t):void 0}function Xn(e){e.prefix===`fa`&&(e.prefix=`fas`);var t=e.iconName,n=e.prefix||W();if(t)return t=U(n,t)||t,pn(Zn.definitions,n,t)||pn(z.styles,n,t)}var Zn=new Gn,X={noAuto:function(){M.autoReplaceSvg=!1,M.observeMutations=!1,J(`noAuto`)},config:M,dom:{i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return w?(J(`beforeI2svg`,e),Y(`pseudoElements2svg`,e),Y(`i2svg`,e)):Promise.reject(Error(`Operation requires a DOM of some kind.`))},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.autoReplaceSvgRoot;M.autoReplaceSvg===!1&&(M.autoReplaceSvg=!0),M.observeMutations=!0,fn(function(){Qn({autoReplaceSvgRoot:t}),J(`watch`,e)})}},parse:{icon:function(e){if(e===null)return null;if(v(e)===`object`&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:U(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var t=e[1].indexOf(`fa-`)===0?e[1].slice(3):e[1],n=G(e[0]);return{prefix:n,iconName:U(n,t)||t}}if(typeof e==`string`&&(e.indexOf(`${M.cssPrefix}-`)>-1||e.match(zt))){var r=Bn(e.split(` `),{skipLookups:!0});return{prefix:r.prefix||W(),iconName:U(r.prefix,r.iconName)||r.iconName}}if(typeof e==`string`){var i=W();return{prefix:i,iconName:U(i,e)||e}}}},library:Zn,findIconDefinition:Xn,toHtml:V},Qn=function(){var e=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:{}).autoReplaceSvgRoot,t=e===void 0?C:e;(Object.keys(z.styles).length>0||M.autoFetchSvg)&&w&&M.autoReplaceSvg&&X.dom.i2svg({node:t})};function $n(e,t){return Object.defineProperty(e,`abstract`,{get:t}),Object.defineProperty(e,`html`,{get:function(){return e.abstract.map(function(e){return V(e)})}}),Object.defineProperty(e,`node`,{get:function(){if(w){var t=C.createElement(`div`);return t.innerHTML=e.html,t.children}}}),e}function er(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,a=e.styles,o=e.transform;if(tn(o)&&n.found&&!r.found){var s={x:n.width/n.height/2,y:.5};i.style=L(p(p({},a),{},{"transform-origin":`${s.x+o.x/16}em ${s.y+o.y/16}em`}))}return[{tag:`svg`,attributes:i,children:t}]}function tr(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,a=e.symbol,o=a===!0?`${t}-${M.cssPrefix}-${n}`:a;return[{tag:`svg`,attributes:{style:`display: none;`},children:[{tag:`symbol`,attributes:p(p({},i),{},{id:o}),children:r}]}]}function nr(e){return[`aria-label`,`aria-labelledby`,`title`,`role`].some(function(t){return t in e})}function rr(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,a=e.iconName,o=e.transform,s=e.symbol,c=e.maskId,l=e.extra,u=e.watchable,d=u===void 0?!1:u,f=r.found?r:n,m=f.width,h=f.height,g=[M.replacementClass,a?`${M.cssPrefix}-${a}`:``].filter(function(e){return l.classes.indexOf(e)===-1}).filter(function(e){return e!==``||!!e}).concat(l.classes).join(` `),_={children:[],attributes:p(p({},l.attributes),{},{"data-prefix":i,"data-icon":a,class:g,role:l.attributes.role||`img`,viewBox:`0 0 ${m} ${h}`})};!nr(l.attributes)&&!l.attributes[`aria-hidden`]&&(_.attributes[`aria-hidden`]=`true`),d&&(_.attributes[O]=``);var v=p(p({},_),{},{prefix:i,iconName:a,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:p({},l.styles)}),y=r.found&&n.found?Y(`generateAbstractMask`,v)||{children:[],attributes:{}}:Y(`generateAbstractIcon`,v)||{children:[],attributes:{}},b=y.children,x=y.attributes;return v.children=b,v.attributes=x,s?tr(v):er(v)}function ir(e){var t=e.content,n=e.width,r=e.height,i=e.transform,a=e.extra,o=e.watchable,s=o===void 0?!1:o,c=p(p({},a.attributes),{},{class:a.classes.join(` `)});s&&(c[O]=``);var l=p({},a.styles);tn(i)&&(l.transform=rn({transform:i,startCentered:!0,width:n,height:r}),l[`-webkit-transform`]=l.transform);var u=L(l);u.length>0&&(c.style=u);var d=[];return d.push({tag:`span`,attributes:c,children:[t]}),d}function ar(e){var t=e.content,n=e.extra,r=p(p({},n.attributes),{},{class:n.classes.join(` `)}),i=L(n.styles);i.length>0&&(r.style=i);var a=[];return a.push({tag:`span`,attributes:r,children:[t]}),a}var or=z.styles;function sr(e){var t=e[0],n=e[1],r=m(e.slice(4),1)[0],i=null;return i=Array.isArray(r)?{tag:`g`,attributes:{class:`${M.cssPrefix}-${Ut.GROUP}`},children:[{tag:`path`,attributes:{class:`${M.cssPrefix}-${Ut.SECONDARY}`,fill:`currentColor`,d:r[0]}},{tag:`path`,attributes:{class:`${M.cssPrefix}-${Ut.PRIMARY}`,fill:`currentColor`,d:r[1]}}]}:{tag:`path`,attributes:{fill:`currentColor`,d:r}},{found:!0,width:t,height:n,icon:i}}var cr={found:!1,width:512,height:512};function lr(e,t){!jt&&!M.showMissingIcons&&e&&console.error(`Icon with name "${e}" and prefix "${t}" is missing.`)}function ur(e,t){var n=t;return t===`fa`&&M.styleDefault!==null&&(t=W()),new Promise(function(r,i){if(n===`fa`){var a=Nn(e)||{};e=a.iconName||e,t=a.prefix||t}if(e&&t&&or[t]&&or[t][e]){var o=or[t][e];return r(sr(o))}lr(e,t),r(p(p({},cr),{},{icon:M.showMissingIcons&&e&&Y(`missingIconAbstract`)||{}}))})}var dr=function(){},fr=M.measurePerformance&&oe&&oe.mark&&oe.measure?oe:{mark:dr,measure:dr},Z=`FA "7.2.0"`,pr=function(e){return fr.mark(`${Z} ${e} begins`),function(){return mr(e)}},mr=function(e){fr.mark(`${Z} ${e} ends`),fr.measure(`${Z} ${e}`,`${Z} ${e} begins`,`${Z} ${e} ends`)},hr={begin:pr,end:mr},gr=function(){};function _r(e){return typeof(e.getAttribute?e.getAttribute(O):null)==`string`}function vr(e){var t=e.getAttribute?e.getAttribute(Tt):null,n=e.getAttribute?e.getAttribute(Et):null;return t&&n}function yr(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(M.replacementClass)}function br(){return M.autoReplaceSvg===!0?Q.replace:Q[M.autoReplaceSvg]||Q.replace}function xr(e){return C.createElementNS(`http://www.w3.org/2000/svg`,e)}function Sr(e){return C.createElement(e)}function Cr(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).ceFn,n=t===void 0?e.tag===`svg`?xr:Sr:t;if(typeof e==`string`)return C.createTextNode(e);var r=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(t){r.setAttribute(t,e.attributes[t])}),(e.children||[]).forEach(function(e){r.appendChild(Cr(e,{ceFn:n}))}),r}function wr(e){var t=` ${e.outerHTML} `;return t=`${t}Font Awesome fontawesome.com `,t}var Q={replace:function(e){var t=e[0];if(t.parentNode)if(e[1].forEach(function(e){t.parentNode.insertBefore(Cr(e),t)}),t.getAttribute(O)===null&&M.keepOriginalSource){var n=C.createComment(wr(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(e){var t=e[0],n=e[1];if(~Qt(t).indexOf(M.replacementClass))return Q.replace(e);var r=RegExp(`${M.cssPrefix}-.*`);if(delete n[0].attributes.id,n[0].attributes.class){var i=n[0].attributes.class.split(` `).reduce(function(e,t){return t===M.replacementClass||t.match(r)?e.toSvg.push(t):e.toNode.push(t),e},{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(` `),i.toNode.length===0?t.removeAttribute(`class`):t.setAttribute(`class`,i.toNode.join(` `))}var a=n.map(function(e){return V(e)}).join(`
`);t.setAttribute(O,``),t.innerHTML=a}};function Tr(e){e()}function Er(e,t){var n=typeof t==`function`?t:gr;if(e.length===0)n();else{var r=Tr;M.mutateApproach===Ot&&(r=S.requestAnimationFrame||Tr),r(function(){var t=br(),r=hr.begin(`mutate`);e.map(t),r(),n()})}}var Dr=!1;function Or(){Dr=!0}function kr(){Dr=!1}var $=null;function Ar(e){if(ae&&M.observeMutations){var t=e.treeCallback,n=t===void 0?gr:t,r=e.nodeCallback,i=r===void 0?gr:r,a=e.pseudoElementsCallback,o=a===void 0?gr:a,s=e.observeMutationsRoot,c=s===void 0?C:s;$=new ae(function(e){if(!Dr){var t=W();I(e).forEach(function(e){if(e.type===`childList`&&e.addedNodes.length>0&&!_r(e.addedNodes[0])&&(M.searchPseudoElements&&o(e.target),n(e.target)),e.type===`attributes`&&e.target.parentNode&&M.searchPseudoElements&&o([e.target],!0),e.type===`attributes`&&_r(e.target)&&~Ht.indexOf(e.attributeName))if(e.attributeName===`class`&&vr(e.target)){var r=Bn(Qt(e.target)),a=r.prefix,s=r.iconName;e.target.setAttribute(Tt,a||t),s&&e.target.setAttribute(Et,s)}else yr(e.target)&&i(e.target)})}}),w&&$.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function jr(){$&&$.disconnect()}function Mr(e){var t=e.getAttribute(`style`),n=[];return t&&(n=t.split(`;`).reduce(function(e,t){var n=t.split(`:`),r=n[0],i=n.slice(1);return r&&i.length>0&&(e[r]=i.join(`:`).trim()),e},{})),n}function Nr(e){var t=e.getAttribute(`data-prefix`),n=e.getAttribute(`data-icon`),r=e.innerText===void 0?``:e.innerText.trim(),i=Bn(Qt(e));return i.prefix||=W(),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix?i:(i.prefix&&r.length>0&&(i.iconName=Mn(i.prefix,e.innerText)||jn(i.prefix,gn(e.innerText))),!i.iconName&&M.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data),i)}function Pr(e){return I(e.attributes).reduce(function(e,t){return e.name!==`class`&&e.name!==`style`&&(e[t.name]=t.value),e},{})}function Fr(){return{iconName:null,prefix:null,transform:F,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ir(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Nr(e),r=n.iconName,i=n.prefix,a=n.rest,o=Pr(e),s=Yn(`parseNodeAttributes`,{},e);return p({iconName:r,prefix:i,transform:F,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:t.styleParser?Mr(e):[],attributes:o}},s)}var Lr=z.styles;function Rr(e){var t=M.autoReplaceSvg===`nest`?Ir(e,{styleParser:!1}):Ir(e);return~t.extra.classes.indexOf(Bt)?Y(`generateLayersText`,e,t):Y(`generateSvgReplacementMutation`,e,t)}function zr(){return[].concat(h(tt),h(mt))}function Br(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!w)return Promise.resolve();var n=C.documentElement.classList,r=function(e){return n.add(`${Dt}-${e}`)},i=function(e){return n.remove(`${Dt}-${e}`)},a=M.autoFetchSvg?zr():pe.concat(Object.keys(Lr));a.includes(`fa`)||a.push(`fa`);var o=[`.${Bt}:not([${O}])`].concat(a.map(function(e){return`.${e}:not([${O}])`})).join(`, `);if(o.length===0)return Promise.resolve();var s=[];try{s=I(e.querySelectorAll(o))}catch{}if(s.length>0)r(`pending`),i(`complete`);else return Promise.resolve();var c=hr.begin(`onTree`),l=s.reduce(function(e,t){try{var n=Rr(t);n&&e.push(n)}catch(e){jt||e.name===`MissingIcon`&&console.error(e)}return e},[]);return new Promise(function(e,n){Promise.all(l).then(function(n){Er(n,function(){r(`active`),r(`complete`),i(`pending`),typeof t==`function`&&t(),c(),e()})}).catch(function(e){c(),n(e)})})}function Vr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Rr(e).then(function(e){e&&Er([e],t)})}function Hr(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Xn(t||{}),i=n.mask;return i&&=(i||{}).icon?i:Xn(i||{}),e(r,p(p({},n),{},{mask:i}))}}var Ur=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.transform,r=n===void 0?F:n,i=t.symbol,a=i===void 0?!1:i,o=t.mask,s=o===void 0?null:o,c=t.maskId,l=c===void 0?null:c,u=t.classes,d=u===void 0?[]:u,f=t.attributes,m=f===void 0?{}:f,h=t.styles,g=h===void 0?{}:h;if(e){var _=e.prefix,v=e.iconName,y=e.icon;return $n(p({type:`icon`},e),function(){return J(`beforeDOMElementCreation`,{iconDefinition:e,params:t}),rr({icons:{main:sr(y),mask:s?sr(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:_,iconName:v,transform:p(p({},F),r),symbol:a,maskId:l,extra:{attributes:m,styles:g,classes:d}})})}},Wr={mixout:function(){return{icon:Hr(Ur)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=Br,e.nodeCallback=Vr,e}}},provides:function(e){e.i2svg=function(e){var t=e.node,n=t===void 0?C:t,r=e.callback;return Br(n,r===void 0?function(){}:r)},e.generateSvgReplacementMutation=function(e,t){var n=t.iconName,r=t.prefix,i=t.transform,a=t.symbol,o=t.mask,s=t.maskId,c=t.extra;return new Promise(function(t,l){Promise.all([ur(n,r),o.iconName?ur(o.iconName,o.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(o){var l=m(o,2),u=l[0],d=l[1];t([e,rr({icons:{main:u,mask:d},prefix:r,iconName:n,transform:i,symbol:a,maskId:s,extra:c,watchable:!0})])}).catch(l)})},e.generateAbstractIcon=function(e){var t=e.children,n=e.attributes,r=e.main,i=e.transform,a=e.styles,o=L(a);o.length>0&&(n.style=o);var s;return tn(i)&&(s=Y(`generateAbstractTransformGrouping`,{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),t.push(s||r.icon),{children:t,attributes:n}}}},Gr={mixout:function(){return{layer:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.classes,r=n===void 0?[]:n;return $n({type:`layer`},function(){J(`beforeDOMElementCreation`,{assembler:e,params:t});var n=[];return e(function(e){Array.isArray(e)?e.map(function(e){n=n.concat(e.abstract)}):n=n.concat(e.abstract)}),[{tag:`span`,attributes:{class:[`${M.cssPrefix}-layers`].concat(h(r)).join(` `)},children:n}]})}}}},Kr={mixout:function(){return{counter:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.title,r=n===void 0?null:n,i=t.classes,a=i===void 0?[]:i,o=t.attributes,s=o===void 0?{}:o,c=t.styles,l=c===void 0?{}:c;return $n({type:`counter`,content:e},function(){return J(`beforeDOMElementCreation`,{content:e,params:t}),ar({content:e.toString(),title:r,extra:{attributes:s,styles:l,classes:[`${M.cssPrefix}-layers-counter`].concat(h(a))}})})}}}},qr={mixout:function(){return{text:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.transform,r=n===void 0?F:n,i=t.classes,a=i===void 0?[]:i,o=t.attributes,s=o===void 0?{}:o,c=t.styles,l=c===void 0?{}:c;return $n({type:`text`,content:e},function(){return J(`beforeDOMElementCreation`,{content:e,params:t}),ir({content:e,transform:p(p({},F),r),extra:{attributes:s,styles:l,classes:[`${M.cssPrefix}-layers-text`].concat(h(a))}})})}}},provides:function(e){e.generateLayersText=function(e,t){var n=t.transform,r=t.extra,i=null,a=null;if(se){var o=parseInt(getComputedStyle(e).fontSize,10),s=e.getBoundingClientRect();i=s.width/o,a=s.height/o}return Promise.resolve([e,ir({content:e.innerHTML,width:i,height:a,transform:n,extra:r,watchable:!0})])}}},Jr=RegExp(`"`,`ug`),Yr=[1105920,1112319],Xr=p(p(p(p({},{FontAwesome:{normal:`fas`,400:`fas`}}),Qe),yt),at),Zr=Object.keys(Xr).reduce(function(e,t){return e[t.toLowerCase()]=Xr[t],e},{}),Qr=Object.keys(Zr).reduce(function(e,t){var n=Zr[t];return e[t]=n[900]||h(Object.entries(n))[0][1],e},{});function $r(e){return gn(h(e.replace(Jr,``))[0]||``)}function ei(e){var t=e.getPropertyValue(`font-feature-settings`).includes(`ss01`),n=e.getPropertyValue(`content`).replace(Jr,``),r=n.codePointAt(0),i=r>=Yr[0]&&r<=Yr[1],a=n.length===2?n[0]===n[1]:!1;return i||a||t}function ti(e,t){var n=e.replace(/^['"]|['"]$/g,``).toLowerCase(),r=parseInt(t),i=isNaN(r)?`normal`:r;return(Zr[n]||{})[i]||Qr[n]}function ni(e,t){var n=`${wt}${t.replace(`:`,`-`)}`;return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var a=I(e.children).filter(function(e){return e.getAttribute(Ct)===t})[0],o=S.getComputedStyle(e,t),s=o.getPropertyValue(`font-family`),c=s.match(Vt),l=o.getPropertyValue(`font-weight`),u=o.getPropertyValue(`content`);if(a&&!c)return e.removeChild(a),r();if(c&&u!==`none`&&u!==``){var d=o.getPropertyValue(`content`),f=ti(s,l),m=$r(d),h=c[0].startsWith(`FontAwesome`),g=ei(o),_=jn(f,m),v=_;if(h){var y=Pn(m);y.iconName&&y.prefix&&(_=y.iconName,f=y.prefix)}if(_&&!g&&(!a||a.getAttribute(Tt)!==f||a.getAttribute(Et)!==v)){e.setAttribute(n,v),a&&e.removeChild(a);var b=Fr(),x=b.extra;x.attributes[Ct]=t,ur(_,f).then(function(i){var a=rr(p(p({},b),{},{icons:{main:i,mask:Fn()},prefix:f,iconName:v,extra:x,watchable:!0})),o=C.createElementNS(`http://www.w3.org/2000/svg`,`svg`);t===`::before`?e.insertBefore(o,e.firstChild):e.appendChild(o),o.outerHTML=a.map(function(e){return V(e)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function ri(e){return Promise.all([ni(e,`::before`),ni(e,`::after`)])}function ii(e){return e.parentNode!==document.head&&!~kt.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Ct)&&(!e.parentNode||e.parentNode.tagName!==`svg`)}var ai=function(e){return!!e&&At.some(function(t){return e.includes(t)})},oi=function(e){if(!e)return[];var t=new Set,n=e.split(/,(?![^()]*\))/).map(function(e){return e.trim()});n=n.flatMap(function(e){return e.includes(`(`)?e:e.split(`,`).map(function(e){return e.trim()})});var r=o(n),i;try{for(r.s();!(i=r.n()).done;){var a=i.value;if(ai(a)){var s=At.reduce(function(e,t){return e.replace(t,``)},a);s!==``&&s!==`*`&&t.add(s)}}}catch(e){r.e(e)}finally{r.f()}return t};function si(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(w){var n;if(t)n=e;else if(M.searchPseudoElementsFullScan)n=e.querySelectorAll(`*`);else{var r=new Set,i=o(document.styleSheets),a;try{for(i.s();!(a=i.n()).done;){var s=a.value;try{var c=o(s.cssRules),l;try{for(c.s();!(l=c.n()).done;){var u=l.value,d=o(oi(u.selectorText)),f;try{for(d.s();!(f=d.n()).done;){var p=f.value;r.add(p)}}catch(e){d.e(e)}finally{d.f()}}}catch(e){c.e(e)}finally{c.f()}}catch(e){M.searchPseudoElementsWarnings&&console.warn(`Font Awesome: cannot parse stylesheet: ${s.href} (${e.message})
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`)}}}catch(e){i.e(e)}finally{i.f()}if(!r.size)return;var m=Array.from(r).join(`, `);try{n=e.querySelectorAll(m)}catch{}}return new Promise(function(e,t){var r=I(n).filter(ii).map(ri),i=hr.begin(`searchPseudoElements`);Or(),Promise.all(r).then(function(){i(),kr(),e()}).catch(function(){i(),kr(),t()})})}}var ci={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=si,e}}},provides:function(e){e.pseudoElements2svg=function(e){var t=e.node,n=t===void 0?C:t;M.searchPseudoElements&&si(n)}}},li=!1,ui={mixout:function(){return{dom:{unwatch:function(){Or(),li=!0}}}},hooks:function(){return{bootstrap:function(){Ar(Yn(`mutationObserverCallbacks`,{}))},noAuto:function(){jr()},watch:function(e){var t=e.observeMutationsRoot;li?kr():Ar(Yn(`mutationObserverCallbacks`,{observeMutationsRoot:t}))}}}},di=function(e){return e.toLowerCase().split(` `).reduce(function(e,t){var n=t.toLowerCase().split(`-`),r=n[0],i=n.slice(1).join(`-`);if(r&&i===`h`)return e.flipX=!0,e;if(r&&i===`v`)return e.flipY=!0,e;if(i=parseFloat(i),isNaN(i))return e;switch(r){case`grow`:e.size+=i;break;case`shrink`:e.size-=i;break;case`left`:e.x-=i;break;case`right`:e.x+=i;break;case`up`:e.y-=i;break;case`down`:e.y+=i;break;case`rotate`:e.rotate+=i;break}return e},{size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0})},fi={mixout:function(){return{parse:{transform:function(e){return di(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-transform`);return n&&(e.transform=di(n)),e}}},provides:function(e){e.generateAbstractTransformGrouping=function(e){var t=e.main,n=e.transform,r=e.containerWidth,i=e.iconWidth,a={outer:{transform:`translate(${r/2} 256)`},inner:{transform:`${`translate(${n.x*32}, ${n.y*32}) `} ${`scale(${n.size/16*(n.flipX?-1:1)}, ${n.size/16*(n.flipY?-1:1)}) `} ${`rotate(${n.rotate} 0 0)`}`},path:{transform:`translate(${i/2*-1} -256)`}};return{tag:`g`,attributes:p({},a.outer),children:[{tag:`g`,attributes:p({},a.inner),children:[{tag:t.icon.tag,children:t.icon.children,attributes:p(p({},t.icon.attributes),a.path)}]}]}}}},pi={x:0,y:0,width:`100%`,height:`100%`};function mi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill=`black`),e}function hi(e){return e.tag===`g`?e.children:[e]}Jn([ln,Wr,Gr,Kr,qr,ci,ui,fi,{hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-mask`),r=n?Bn(n.split(` `).map(function(e){return e.trim()})):Fn();return r.prefix||=W(),e.mask=r,e.maskId=t.getAttribute(`data-fa-mask-id`),e}}},provides:function(e){e.generateAbstractMask=function(e){var t=e.children,n=e.attributes,r=e.main,i=e.mask,a=e.maskId,o=e.transform,s=r.width,c=r.icon,l=i.width,u=i.icon,d=nn({transform:o,containerWidth:l,iconWidth:s}),f={tag:`rect`,attributes:p(p({},pi),{},{fill:`white`})},m=c.children?{children:c.children.map(mi)}:{},h={tag:`g`,attributes:p({},d.inner),children:[mi(p({tag:c.tag,attributes:p(p({},c.attributes),d.path)},m))]},g={tag:`g`,attributes:p({},d.outer),children:[h]},_=`mask-${a||Zt()}`,v=`clip-${a||Zt()}`,y={tag:`mask`,attributes:p(p({},pi),{},{id:_,maskUnits:`userSpaceOnUse`,maskContentUnits:`userSpaceOnUse`}),children:[f,g]},b={tag:`defs`,children:[{tag:`clipPath`,attributes:{id:v},children:hi(u)},y]};return t.push(b,{tag:`rect`,attributes:p({fill:`currentColor`,"clip-path":`url(#${v})`,mask:`url(#${_})`},pi)}),{children:t,attributes:n}}}},{provides:function(e){var t=!1;S.matchMedia&&(t=S.matchMedia(`(prefers-reduced-motion: reduce)`).matches),e.missingIconAbstract=function(){var e=[],n={fill:`currentColor`},r={attributeType:`XML`,repeatCount:`indefinite`,dur:`2s`};e.push({tag:`path`,attributes:p(p({},n),{},{d:`M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z`})});var i=p(p({},r),{},{attributeName:`opacity`}),a={tag:`circle`,attributes:p(p({},n),{},{cx:`256`,cy:`364`,r:`28`}),children:[]};return t||a.children.push({tag:`animate`,attributes:p(p({},r),{},{attributeName:`r`,values:`28;14;28;28;14;28;`})},{tag:`animate`,attributes:p(p({},i),{},{values:`1;0;1;1;0;1;`})}),e.push(a),e.push({tag:`path`,attributes:p(p({},n),{},{opacity:`1`,d:`M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z`}),children:t?[]:[{tag:`animate`,attributes:p(p({},i),{},{values:`1;0;0;0;0;1;`})}]}),t||e.push({tag:`path`,attributes:p(p({},n),{},{opacity:`0`,d:`M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z`}),children:[{tag:`animate`,attributes:p(p({},i),{},{values:`0;0;1;1;0;0;`})}]}),{tag:`g`,attributes:{class:`missing`},children:e}}}},{hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-symbol`);return e.symbol=n===null?!1:n===``?!0:n,e}}}}],{mixoutsTo:X}),X.noAuto;var gi=X.config,_i=X.library;X.dom;var vi=X.parse;X.findIconDefinition,X.toHtml;var yi=X.icon;X.layer;var bi=X.text;X.counter;export{bi as a,vi as i,yi as n,_i as r,gi as t};