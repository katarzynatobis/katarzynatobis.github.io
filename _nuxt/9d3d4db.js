(window.webpackJsonp=window.webpackJsonp||[]).push([[8,2,3,4,5,6,7],{275:function(e,t,n){"use strict";n.r(t);n(278);var r=n(2),o=n(76),c=r.default.extend({props:{small:{type:Boolean}},setup:function(e){var small=e.small;return{headingTag:Object(o.a)((function(){return small?"h3":"h2"}))}}}),l=(n(281),n(50)),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"cv-section",class:{"cv-section--small":e.small}},[n("header",[n(e.headingTag,{tag:"component"},[e._t("title")],2)],1),e._v(" "),e._t("default")],2)}),[],!1,null,"4d8155f0",null);t.default=component.exports},276:function(e,t,n){var content=n(282);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(52).default)("6c694abe",content,!0,{sourceMap:!1})},277:function(e,t,n){var content=n(285);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(52).default)("59e93e41",content,!0,{sourceMap:!1})},278:function(e,t,n){"use strict";var r=n(1),o=n(279);r({target:"String",proto:!0,forced:n(280)("small")},{small:function(){return o(this,"small","","")}})},279:function(e,t,n){var r=n(24),o=/"/g;e.exports=function(e,t,n,c){var l=String(r(e)),d="<"+t;return""!==n&&(d+=" "+n+'="'+String(c).replace(o,"&quot;")+'"'),d+">"+l+"</"+t+">"}},280:function(e,t,n){var r=n(9);e.exports=function(e){return r((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}))}},281:function(e,t,n){"use strict";n(276)},282:function(e,t,n){var r=n(51)((function(i){return i[1]}));r.push([e.i,".cv-section[data-v-4d8155f0]{margin:calc(var(--unit)*12) 0;}.cv-section[data-v-4d8155f0]:last-child{margin-bottom:0}.cv-section h2[data-v-4d8155f0]{margin-bottom:calc(var(--unit)*8)}.cv-section--small[data-v-4d8155f0]{font-size:calc(var(--paragraph-size)*0.875);margin:calc(var(--unit)*6) 0;page-break-inside:avoid;break-inside:avoid-page;}.cv-section--small[data-v-4d8155f0]:first-of-type{margin-top:0}.cv-section--small h3[data-v-4d8155f0]{font-family:var(--serif);margin-bottom:calc(var(--unit)*4);color:var(--primary);}.cv-section--small h3[data-v-4d8155f0]:first-letter{text-transform:capitalize}.cv-section--small[data-v-4d8155f0] p:not(:only-of-type):not(:first-child){margin-top:var(--unit)}@media screen and (max-width:1050px){.cv-section--small[data-v-4d8155f0]{font-size:var(--paragraph-size)}}",""]),r.locals={},e.exports=r},283:function(e,t,n){var content=n(289);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(52).default)("f1353f9e",content,!0,{sourceMap:!1})},284:function(e,t,n){"use strict";n(277)},285:function(e,t,n){var r=n(51)((function(i){return i[1]}));r.push([e.i,'.cv-section-item[data-v-3771ee56]{position:relative;padding-left:calc(var(--unit)*8);page-break-inside:avoid;break-inside:avoid-page;}.cv-section-item +.cv-section-item[data-v-3771ee56]{margin-top:calc(var(--unit)*8)}.cv-section-item--no-header p[data-v-3771ee56]{font-size:calc(var(--paragraph-size)*1.1)}.cv-section-item[data-v-3771ee56]:before{content:"";position:absolute;width:calc(var(--unit)/2);background:var(--primary-light);bottom:5px;top:7px;left:0}.cv-section-item__header[data-v-3771ee56]{margin-bottom:calc(var(--unit)*2)}.cv-section-item__subtitle[data-v-3771ee56]{color:var(--primary)}',""]),r.locals={},e.exports=r},286:function(e,t,n){"use strict";n.r(t);var r=n(2).default.extend({setup:function(){return{}}}),o=n(50),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",[n("h1",[e._v("Katarzyna Tobiś")]),e._v(" "),n("address",[n("a",{attrs:{href:"mailto:tobiskatarzyna@gmail.com"}},[e._v("tobiskatarzyna@gmail.com")])])])}],!1,null,null,null);t.default=component.exports},287:function(e,t,n){"use strict";n.r(t);var r=n(76),o=n(2).default.extend({props:{tag:{type:String,default:"article"}},setup:function(e,t){var n=t.slots;return{withHeader:Object(r.a)((function(){return n.title&&n.subtitle}))}}}),c=(n(284),n(50)),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n(e.tag,{tag:"component",staticClass:"cv-section-item",class:{"cv-section-item--no-header":!e.withHeader}},[e.withHeader?n("header",{staticClass:"cv-section-item__header"},[e.$slots.title?n("h3",{staticClass:"cv-section-item__title"},[e._t("title")],2):e._e(),e._v(" "),e.$slots.subtitle?n("div",{staticClass:"cv-section-item__subtitle",attrs:{role:"doc-subtitle"}},[e._t("subtitle")],2):e._e()]):e._e(),e._v(" "),n("p",[e._t("default")],2)])}),[],!1,null,"3771ee56",null);t.default=component.exports},288:function(e,t,n){"use strict";n(283)},289:function(e,t,n){var r=n(51)((function(i){return i[1]}));r.push([e.i,".cv-aside[data-v-1e5f0eb2]{border-left:1px solid var(--primary);display:flex;flex-direction:column;}@media screen and (max-width:1050px){.cv-aside[data-v-1e5f0eb2]{border-left-color:currentcolor;border-left-style:none;border-left-width:medium;border-bottom-color:currentcolor;border-bottom-style:none;border-bottom-width:medium;border-right-color:currentcolor;border-right-style:none;border-right-width:medium;border-top-color:currentcolor;border-top-style:none;border-top-width:medium}}.cv-aside.cv-aside--spacing[data-v-1e5f0eb2]{padding-right:calc(var(--unit)*15);padding-left:calc(var(--unit)*10);}@media screen and (max-width:1050px){.cv-aside.cv-aside--spacing[data-v-1e5f0eb2]{padding-top:calc(var(--unit)*4)}}@media print{.cv-aside.cv-aside--spacing[data-v-1e5f0eb2]{padding-right:0}}.cv-aside__hidden-h2[data-v-1e5f0eb2]{height:0;width:0;overflow:hidden}.cv-aside__agreement[data-v-1e5f0eb2]{margin:auto 0 0;font-size:calc(var(--paragraph-size)*0.7);page-break-inside:avoid;break-inside:avoid-page;}@media screen and (max-width:1050px){.cv-aside__agreement[data-v-1e5f0eb2]{font-size:calc(var(--paragraph-size)*0.8);margin-top:calc(var(--unit)*15)}}",""]),r.locals={},e.exports=r},290:function(e,t,n){var content=n(294);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(52).default)("1ac06b54",content,!0,{sourceMap:!1})},291:function(e,t,n){"use strict";n.r(t);var r=n(2),o=n(275),c=n(287),l=r.default.extend({name:"CvMain",components:{CvSection:o.default,CvMainItem:c.default},props:{data:{type:Object,required:!0}}}),d=n(50),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",[n("cv-section",{scopedSlots:e._u([{key:"title",fn:function(){return[e._v("\n      Profile\n    ")]},proxy:!0}])},[e._v(" "),n("cv-main-item",[n("span",{domProps:{innerHTML:e._s(e.data.profile)}})])],1),e._v(" "),n("cv-section",{scopedSlots:e._u([{key:"title",fn:function(){return[e._v("\n      "+e._s(e.data.sections[0].title)+"\n    ")]},proxy:!0}])},[e._v(" "),e._l(e.data.sections[0].items,(function(t){return n("cv-main-item",{key:t.time,scopedSlots:e._u([{key:"title",fn:function(){return[e._v("\n        "+e._s(t.position)+" @ "+e._s(t.company)+"\n      ")]},proxy:!0},{key:"subtitle",fn:function(){return[e._v("\n        "+e._s(t.time)+"\n      ")]},proxy:!0}],null,!0)},[e._v(" "),e._v("\n      "+e._s(t.description)+"\n    ")])}))],2),e._v(" "),n("cv-section",{scopedSlots:e._u([{key:"title",fn:function(){return[e._v("\n      "+e._s(e.data.sections[1].title)+"\n    ")]},proxy:!0}])},[e._v(" "),e._l(e.data.sections[1].items,(function(t){return n("cv-main-item",{key:t.time,scopedSlots:e._u([{key:"title",fn:function(){return[e._v("\n        "+e._s(t.field)+"\n      ")]},proxy:!0},{key:"subtitle",fn:function(){return[e._v("\n        "+e._s(t.time)+"\n      ")]},proxy:!0}],null,!0)},[e._v(" "),e._v(" "),n("span",{domProps:{innerHTML:e._s(t.uni)}})])}))],2)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{CvSection:n(275).default})},292:function(e,t,n){"use strict";n.r(t);var r=n(2),o=n(275),c=r.default.extend({components:{CvSection:o.default},props:{data:{type:Object,required:!0}}}),l=(n(288),n(50)),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("aside",{staticClass:"cv-aside cv-aside--spacing",attrs:{"aria-labelledby":"aside-title"}},[n("h2",{staticClass:"cv-aside__hidden-h2",attrs:{id:"aside-title"}},[e._v("\n    More info\n  ")]),e._v(" "),e._l(e.data.sections,(function(t){return n("cv-section",{key:t.title,attrs:{small:""},scopedSlots:e._u([{key:"title",fn:function(){return[n("span",{domProps:{innerHTML:e._s(t.title)}})]},proxy:!0}],null,!0)},[e._v(" "),n("p",{domProps:{innerHTML:e._s(t.description)}})])})),e._v(" "),n("blockquote",{staticClass:"cv-aside__agreement"},[e._v("\n    "+e._s(e.data.agreement)+"\n  ")])],2)}),[],!1,null,"1e5f0eb2",null);t.default=component.exports;installComponents(component,{CvSection:n(275).default})},293:function(e,t,n){"use strict";n(290)},294:function(e,t,n){var r=n(51)((function(i){return i[1]}));r.push([e.i,".cv[data-v-039e6c2c]{display:grid;grid-template-columns:5fr 2fr;}@media print{.cv[data-v-039e6c2c]{height:58cm}}.cv>*[data-v-039e6c2c]{padding:calc(var(--unit)*25);padding-top:calc(var(--unit)*35);}@media screen and (max-width:1050px){.cv>*[data-v-039e6c2c]{padding:calc(var(--unit)*8);padding-top:calc(var(--unit)*16)}}@media print{.cv>*[data-v-039e6c2c]{padding:calc(var(--unit)*10);padding-top:calc(var(--unit)*20)}}.cv>*[data-v-039e6c2c]:first-child{padding-right:calc(var(--unit)*10)}@media screen and (max-width:1050px){.cv[data-v-039e6c2c]{display:block}}",""]),r.locals={},e.exports=r},295:function(e,t,n){"use strict";n.r(t);var r=n(2),o=n(286),c=n(291),l=n(292),d=r.default.extend({components:{CvHeader:o.default,CvMain:c.default,CvAside:l.default},props:{data:{type:Object,required:!0}}}),v=(n(293),n(50)),component=Object(v.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"cv"},[n("div",[n("cv-header"),e._v(" "),n("cv-main",{attrs:{data:e.data.main}})],1),e._v(" "),n("cv-aside",{attrs:{data:e.data.aside}})],1)}),[],!1,null,"039e6c2c",null);t.default=component.exports;installComponents(component,{CvHeader:n(286).default})},296:function(e,t,n){"use strict";n.r(t);var r=n(2),o=n(76),c={main:{profile:"I am a passionate front-end developer with a strong desire for personal development. My strengths include ability to work under pressure, organisation skills and analytical thinking. I am known as a person with an&nbsp;enthusiastic approach to&nbsp;new&nbsp;ideas and ability to&nbsp;solve problems. I&nbsp;have specialised in the area of accessibility, and I&nbsp;care about high quality code.",sections:[{title:"Experience",items:[{time:"10/2021 - present",position:"Software Enginner, Senior Software Engineer",company:"Brainly",description:"Developing, maintaining, and supporting the Pencil Design System and brainly-style-guide (React, SCSS). Improving accessibility of the style-guide components and apps.  Advocating accessibility and sharing knowledge across the organisation: writing documentation, conducting workshops, consulting."},{time:"10/2021 - present",position:"Co-founder, Lead Front-end Developer",company:"Maszto",description:"Creating Maszto app - a platform for sharing goods with non-profit organisations. Leading front-end development, creating new features, planning."},{time:"02/2020 - 09/2021",position:"Front-end Developer, Frontend Enginering Leader",company:"Kinside",description:"Developing, maintaining and supporting Kinside products: childcare marketplace app (Vue 2, SCSS, Ruby on Rails), conducting code review, leading the front-end architecture, working in a distributed team (Poland, Canada, USA)."},{time:"09/2019 - 01/2020",position:"Front-end Developer",company:"NetEnt",description:"Developing, maintaining and supporting internal game frameworks (JSON form editor with React/TypeScript and Material-UI, sound library based on events in TypeScript) in international Agile environment."},{time:"07/2018 - 08/2019",position:"Front-end Developer",company:"Closer",description:"Creating front-end for the Closer app, pixel-perfect implementation of designs, developing new and improving existing features, fixing bugs and refactoring using React with MobX, JavaScript/TypeScript and PostCSS."},{time:"03/2016 - 06/2018",position:"Web Designer",company:"Idium Polska",description:"Developing functional designs and web designs for clients (Norwegian market), developing original and innovative website templates, improving and testing the CMS."}]},{title:"Education",items:[{field:"Technical Physics, second circle of studies",time:"2015 - 2018",uni:"Faculty of Physics and Applied Computer Science<br/>AGH University of Science and Technology"},{field:"Technical Physics, first circle of studies",time:"2011 - 2015",uni:"Engineering degree<br/>Faculty of Physics and Applied Computer Science<br/>AGH University of Science and Technology"}]}]},aside:{sections:[{title:"Details",description:'Kraków <br/>+48 669 594 719 <br/><a href="https://www.linkedin.com/in/ktobis/">linkedin.com/in/ktobis</a><br/><a href="https://github.com/katarzynatobis">github.com/katarzynatobis</a>'},{title:"Languages",description:"Polish (native)<br/>English (B2)"},{title:"Skills &&nbsp;Tools",description:"React, JavaScript, CSS&nbsp;3, Web&nbsp;Accessibility, TypeScript, HTML&nbsp;5, Vue, PostCSS, Git, Cypress"},{title:"Passions",description:"Dog training, behavior &&nbsp;communication<br/>TV series<br/>Fantasy &&nbsp;popular&nbsp;science literature<br/>"}],agreement:"I hereby agree to the processing of personal data included in my application for the needs necessary to carry out the recruitment process in accordance with art. 6 par. 1 lit. a Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of individuals with regard to the processing of personal data and on the free movement of such data and repealing Directive 95/46/EC (General Data Protection Regulation). I also consent to processing of my personal data for the purposes of any future recruitment processes."}},l=n(295),d=r.default.extend({components:{Cv:l.default},setup:function(){return{data:Object(o.c)(c)}}}),v=n(50),component=Object(v.a)(d,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("cv",{attrs:{data:e.data}})}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Cv:n(295).default})}}]);