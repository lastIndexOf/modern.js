"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[8021],{54852:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(49231);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},48025:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return u}});var r=n(14380),o=n(8240),a=(n(49231),n(54852)),i=["components"],p={title:"\u5e94\u7528\u67b6\u6784"},c=void 0,l={unversionedId:"guides/tutorials/c10-model/10.1-application-architecture",id:"guides/tutorials/c10-model/10.1-application-architecture",title:"\u5e94\u7528\u67b6\u6784",description:"\u4e0a\u4e00\u7ae0\u8282\u4e2d\uff0c\u6211\u4eec\u628a\u786c\u7f16\u7801\u7684 mockData \u6539\u6210\u4ece BFF \u52a0\u8f7d\uff0c\u4ece App.tsx \u91cc\u62c6\u5206\u51fa\u4e86 components/AllContacts.tsx \u548c components/ArchivedContacts.tsx\uff0c\u5728 AllContacts \u7ec4\u4ef6\u91cc\u7528 BFF \u51fd\u6570\uff0c\u83b7\u53d6\u5230\u8054\u7cfb\u4eba\u6570\u636e\u4e4b\u540e\uff0c\u4fdd\u5b58\u5728 AllContacts \u7684\u7ec4\u4ef6\u5185\u90e8\u72b6\u6001\u91cc\uff0c\u800c ArchivedContacts \u7ec4\u4ef6\u6682\u65f6\u7ee7\u7eed\u4f7f\u7528 mock \u6570\u636e\u3002",source:"@site/docs/guides/tutorials/c10-model/10.1-application-architecture.md",sourceDirName:"guides/tutorials/c10-model",slug:"/guides/tutorials/c10-model/10.1-application-architecture",permalink:"/docs/guides/tutorials/c10-model/10.1-application-architecture",tags:[],version:"current",frontMatter:{title:"\u5e94\u7528\u67b6\u6784"},sidebar:"guidesSidebar",previous:{title:"\u4f7f\u7528\u7ea6\u5b9a\u5f0f\u8def\u7531\u200b\u200b\u200b\u200b",permalink:"/docs/guides/tutorials/c08-client-side-routing/8.2-file-based-routing"},next:{title:"\u5b9e\u73b0 Model",permalink:"/docs/guides/tutorials/c10-model/10.2-add-model"}},s={},u=[],d={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u4e0a\u4e00\u7ae0\u8282\u4e2d\uff0c\u6211\u4eec\u628a\u786c\u7f16\u7801\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"mockData")," \u6539\u6210\u4ece BFF \u52a0\u8f7d\uff0c\u4ece ",(0,a.kt)("inlineCode",{parentName:"p"},"App.tsx")," \u91cc\u62c6\u5206\u51fa\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"components/AllContacts.tsx")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"components/ArchivedContacts.tsx"),"\uff0c\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"AllContacts")," \u7ec4\u4ef6\u91cc\u7528 BFF \u51fd\u6570\uff0c\u83b7\u53d6\u5230\u8054\u7cfb\u4eba\u6570\u636e\u4e4b\u540e\uff0c\u4fdd\u5b58\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"AllContacts")," \u7684\u7ec4\u4ef6\u5185\u90e8\u72b6\u6001\u91cc\uff0c\u800c ",(0,a.kt)("inlineCode",{parentName:"p"},"ArchivedContacts")," \u7ec4\u4ef6\u6682\u65f6\u7ee7\u7eed\u4f7f\u7528 mock \u6570\u636e\u3002"),(0,a.kt)("p",null,"\u672c\u7ae0\u8282\u4e2d\uff0c\u4e3a\u4e86\u8fdb\u4e00\u6b65\u5b9e\u73b0\u9879\u76ee\u529f\u80fd\uff0c\u6211\u4eec\u9700\u8981\u8ba9 ",(0,a.kt)("inlineCode",{parentName:"p"},"AllContacts")," \u548c  ",(0,a.kt)("inlineCode",{parentName:"p"},"ArchivedContacts")," \u90fd\u4ece BFF \u83b7\u53d6\u6570\u636e\uff0c\u8fd8\u8981\u5b9e\u73b0\u3010 Archive \u3011\u6309\u94ae\uff0c\u70b9\u51fb\u6309\u94ae\u80fd\u628a\u8054\u7cfb\u4eba\u5f52\u6863\u3002"),(0,a.kt)("p",null,"\u4e1a\u52a1\u903b\u8f91\u53d8\u590d\u6742\u4e4b\u540e\uff0c\u76f8\u5173\u4ee3\u7801\u4e0d\u53ef\u907f\u514d\u4f1a\u53d8\u591a\uff0c\u5982\u679c\u90fd\u5199\u5728 AllContacts \u7ec4\u4ef6\u6216\u5176\u4ed6\u7ec4\u4ef6\u91cc\uff0c\u90fd\u4f1a\u8ba9\u8fd9\u4e2a\u7ec4\u4ef6\u7684\u53ef\u8bfb\u6027\u548c\u53ef\u7ef4\u62a4\u6027\u53d8\u5dee\uff0c\u8ba9\u505a\u4e0d\u540c\u4e8b\u60c5\u7684\u4ee3\u7801\u6df7\u5728\u4e00\u8d77\u3002"),(0,a.kt)("p",null,"\u539f\u672c\u53ef\u4ee5\u8ddf UI \u5b8c\u5168\u89e3\u8026\u7684\u4e1a\u52a1\u903b\u8f91\uff08\u6bd4\u5982\u7f51\u7edc\u8bf7\u6c42\u3001\u7eaf\u6570\u636e\u7684\u64cd\u4f5c\u3001\u72b6\u6001\u7684\u7ba1\u7406\u7b49\uff09\u8ddf UI \u903b\u8f91\uff08\u6bd4\u5982\u8054\u7cfb\u4eba\u5217\u8868\u5982\u4f55\u5c55\u73b0\uff09\u6df7\u5728\u4e00\u8d77\uff0c\u5f53\u9700\u8981\u4fee\u6539 UI \u7684\u65f6\u5019\uff0c\u4e0d\u5f97\u4e0d\u8ddf UI \u65e0\u5173\u7684\u4e1a\u52a1\u903b\u8f91\u4ee3\u7801\u6253\u4ea4\u9053\uff0c\u53cd\u8fc7\u6765\u4e5f\u4e00\u6837\uff0c\u4e0d\u7b26\u5408\u3010 ",(0,a.kt)("a",{parentName:"p",href:"https://zh.wikipedia.org/wiki/%E5%8D%95%E4%B8%80%E5%8A%9F%E8%83%BD%E5%8E%9F%E5%88%99"},"\u5355\u4e00\u804c\u8d23\u539f\u5219\uff08SRP\uff09"),"\u3011\uff0c\u4e5f\u505a\u4e0d\u5230\u3010 ",(0,a.kt)("a",{parentName:"p",href:"https://zh.wikipedia.org/wiki/%E5%85%B3%E6%B3%A8%E7%82%B9%E5%88%86%E7%A6%BB"},"\u5173\u6ce8\u70b9\u5206\u79bb\uff08SoC\uff09"),"\u3011\u3002"),(0,a.kt)("p",null,"\u4ece\u8fd9\u91cc\u5f00\u59cb\uff0c\u6211\u4eec\u53d1\u73b0\u5982\u679c\u8fd9\u662f\u4e2a\u771f\u5b9e\u7684\u9879\u76ee\uff0c\u7ee7\u7eed\u8fd9\u6837\u5199\u4e0b\u53bb\u4f1a\u4ea7\u751f\u8d8a\u6765\u8d8a\u591a\u9762\u6761\u5f0f\u4ee3\u7801\uff0c\u4ec5\u51ed React \u7ec4\u4ef6\u8fd9\u4e00\u79cd\u62bd\u8c61\u65b9\u5f0f\uff0c\u4e0d\u8db3\u4ee5\u8ba9\u4ee3\u7801\u8db3\u591f\u7ed3\u6784\u5316\uff0c\u968f\u7740\u9879\u76ee\u4e0d\u65ad\u79ef\u7d2f\u4e1a\u52a1\u903b\u8f91\u3001\u590d\u6742\u6027\u548c\u53d8\u66f4\uff0c\u6280\u672f\u503a\u4e5f\u4f1a\u79ef\u7d2f\uff0c\u6700\u7ec8\u53ef\u80fd\u53d8\u6210\u6ca1\u4eba\u613f\u610f\u78b0\u7684\u7956\u4f20\u4ee3\u7801\u3002"),(0,a.kt)("p",null,"\u50cf\u8fd9\u6837\u7684\u9879\u76ee\uff0c\u9700\u8981\u66f4\u5065\u5168\u7684",(0,a.kt)("strong",{parentName:"p"},"\u5ba2\u6237\u7aef\u5e94\u7528\u67b6\u6784"),"\u3002"),(0,a.kt)("p",null,"Modern.js \u63d0\u4f9b\u5f00\u7bb1\u5373\u7528\u7684",(0,a.kt)("strong",{parentName:"p"},"\u5e94\u7528\u67b6\u6784"),"\uff0c\u652f\u6301\u51e0\u79cd\u626e\u6f14\u4e0d\u540c",(0,a.kt)("strong",{parentName:"p"},"\u89d2\u8272\uff08role\uff09"),"\u3001\u5c5e\u4e8e\u4e0d\u540c",(0,a.kt)("strong",{parentName:"p"},"\u5206\u5c42\uff08layer\uff09"),"\u7684\u4ee3\u7801\u6a21\u5757\u7c7b\u578b\uff0c\u53ef\u4ee5\u628a\u4e1a\u52a1\u903b\u8f91\u89e3\u8026\u5230\u4e0d\u540c\u7c7b\u578b\u7684\u4ee3\u7801\u6a21\u5757\u91cc\uff0c\u505a\u5230\u9ad8",(0,a.kt)("a",{parentName:"p",href:"https://zh.wikipedia.org/wiki/%E5%85%A7%E8%81%9A%E6%80%A7_(%E8%A8%88%E7%AE%97%E6%A9%9F%E7%A7%91%E5%AD%B8)"},"\u5185\u805a"),"\u4f4e",(0,a.kt)("a",{parentName:"p",href:"https://zh.wikipedia.org/wiki/%E8%80%A6%E5%90%88%E6%80%A7_(%E8%A8%88%E7%AE%97%E6%A9%9F%E7%A7%91%E5%AD%B8)"},"\u8026\u5408"),"\u3002"),(0,a.kt)("p",null,"\u4e4b\u524d\u4ecb\u7ecd\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"App.tsx")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"pages/")," \u90fd\u662f\u5176\u4e2d\u4e00\u79cd\u4ee3\u7801\u6a21\u5757\uff0c\u901a\u8fc7\u5728\u6700\u9876\u5c42\u5bf9\u5ba2\u6237\u7aef\u8def\u7531\u7684\u7ba1\u7406\uff0c\u628a\u5176\u4ed6\u4ee3\u7801\u6a21\u5757\u6700\u7ec8\u7ec4\u7ec7\u5230\u4e00\u8d77\uff0c\u5f62\u6210\u5e94\u7528\u3002"),(0,a.kt)("p",null,"\u5f53\u524d\u9879\u76ee\u91cc ",(0,a.kt)("inlineCode",{parentName:"p"},"components/")," \u76ee\u5f55\u4e2d\u7684 React \u7ec4\u4ef6\uff0c\u662f\u4e00\u79cd\u53ef\u4ee5\u79f0\u4f5c\u3010 \u89c6\u56fe\u7ec4\u4ef6 \u3011\u7684\u4ee3\u7801\u6a21\u5757\uff0c\u8d1f\u8d23 UI\u3001\u4ea4\u4e92\u4e0a\u7684\u754c\u9762\u5c55\u73b0\u3002"),(0,a.kt)("p",null,"\u672c\u7ae0\u8282\u6211\u4eec\u6765\u628a ",(0,a.kt)("inlineCode",{parentName:"p"},"AllContacts")," \u7ec4\u4ef6\u4e2d\u53ef\u4ee5\u8ddf UI \u89e3\u8026\u7684\u4e1a\u52a1\u903b\u8f91\uff0c\u79fb\u5230\u4e00\u79cd\u53eb\u3010 Model\uff08\u4e1a\u52a1\u6a21\u578b\uff09\u3011\u7684\u4ee3\u7801\u6a21\u5757\u91cc\u3002"))}m.isMDXComponent=!0}}]);