"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[7194],{54852:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return c}});var a=n(49231);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=s(n),c=r,k=u["".concat(p,".").concat(c)]||u[c]||m[c]||i;return n?a.createElement(k,l(l({ref:t},d),{},{components:n})):a.createElement(k,l({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},47051:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return m}});var a=n(14380),r=n(8240),i=(n(49231),n(54852)),l=["components"],o={title:"Unbundled \u5f00\u53d1\u6a21\u5f0f",sidebar_position:2},p=void 0,s={unversionedId:"guides/usages/debug/unbundled",id:"guides/usages/debug/unbundled",title:"Unbundled \u5f00\u53d1\u6a21\u5f0f",description:"\u4ee5 Webpack \u4e3a\u4e3b\u7684\u4f20\u7edf\u6784\u5efa\u5de5\u5177\uff0c\u6267\u884c\u6784\u5efa\u4f1a\u4e00\u6b21\u6027\u5c06\u9879\u76ee\u6e90\u4ee3\u7801\u548c\u7b2c\u4e09\u65b9\u4f9d\u8d56\uff0c\u7f16\u8bd1\u6253\u5305\u5230\u4e00\u8d77\u3002\u968f\u7740\u9879\u76ee\u4f53\u79ef\u589e\u5927\uff0c\u6784\u5efa\u8017\u65f6\u4e5f\u4f1a\u8d8a\u6765\u8d8a\u957f\uff0c\u76f4\u63a5\u5bfc\u81f4\u5f00\u53d1\u9636\u6bb5 Dev Server \u542f\u52a8\u7684\u65f6\u95f4\u4e5f\u4f1a\u8d8a\u6765\u8d8a\u957f\uff0c\u4e25\u91cd\u5f71\u54cd\u4e86\u5f00\u53d1\u6548\u7387\u548c\u4f53\u9a8c\u3002",source:"@site/docs/guides/usages/debug/unbundled.md",sourceDirName:"guides/usages/debug",slug:"/guides/usages/debug/unbundled",permalink:"/docs/guides/usages/debug/unbundled",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Unbundled \u5f00\u53d1\u6a21\u5f0f",sidebar_position:2},sidebar:"guidesSidebar",previous:{title:"\u8c03\u8bd5\u4ee3\u7406\u548c Mock",permalink:"/docs/guides/usages/debug/proxy-and-mock"},next:{title:"\u5fae\u524d\u7aef\u5b50\u5e94\u7528\u6a21\u5f0f",permalink:"/docs/guides/usages/debug/micro-frontend"}},d={},m=[{value:"\u5f00\u59cb\u4f7f\u7528",id:"\u5f00\u59cb\u4f7f\u7528",level:2},{value:"\u5b9e\u73b0\u539f\u7406\u548c\u6ce8\u610f\u4e8b\u9879",id:"\u5b9e\u73b0\u539f\u7406\u548c\u6ce8\u610f\u4e8b\u9879",level:2},{value:"\u4f9d\u8d56\u9884\u5904\u7406",id:"\u4f9d\u8d56\u9884\u5904\u7406",level:3},{value:"JSX/TSX",id:"jsxtsx",level:3},{value:"CSS",id:"css",level:3},{value:"\u56fe\u7247\u8d44\u6e90\u5904\u7406",id:"\u56fe\u7247\u8d44\u6e90\u5904\u7406",level:3},{value:"JS \u4e2d\u4f7f\u7528\u56fe\u7247",id:"js-\u4e2d\u4f7f\u7528\u56fe\u7247",level:4},{value:"Base64 \u7f16\u7801\u5185\u8054",id:"base64-\u7f16\u7801\u5185\u8054",level:4},{value:"JS \u4e2d\u4f7f\u7528 SVG",id:"js-\u4e2d\u4f7f\u7528-svg",level:4},{value:"CSS \u4e2d\u4f7f\u7528\u56fe\u7247",id:"css-\u4e2d\u4f7f\u7528\u56fe\u7247",level:4},{value:"JSON",id:"json",level:3},{value:"\u70ed\u66f4\u65b0\uff08 HMR \uff09",id:"\u70ed\u66f4\u65b0-hmr-",level:3},{value:"HTTP 2.0",id:"http-20",level:3},{value:"\u5176\u4ed6\u6ce8\u610f\u4e8b\u9879",id:"\u5176\u4ed6\u6ce8\u610f\u4e8b\u9879",level:3}],u={toc:m};function c(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u4ee5 Webpack \u4e3a\u4e3b\u7684\u4f20\u7edf\u6784\u5efa\u5de5\u5177\uff0c\u6267\u884c\u6784\u5efa\u4f1a\u4e00\u6b21\u6027\u5c06\u9879\u76ee\u6e90\u4ee3\u7801\u548c\u7b2c\u4e09\u65b9\u4f9d\u8d56\uff0c\u7f16\u8bd1\u6253\u5305\u5230\u4e00\u8d77\u3002\u968f\u7740\u9879\u76ee\u4f53\u79ef\u589e\u5927\uff0c\u6784\u5efa\u8017\u65f6\u4e5f\u4f1a\u8d8a\u6765\u8d8a\u957f\uff0c\u76f4\u63a5\u5bfc\u81f4\u5f00\u53d1\u9636\u6bb5 Dev Server \u542f\u52a8\u7684\u65f6\u95f4\u4e5f\u4f1a\u8d8a\u6765\u8d8a\u957f\uff0c\u4e25\u91cd\u5f71\u54cd\u4e86\u5f00\u53d1\u6548\u7387\u548c\u4f53\u9a8c\u3002"),(0,i.kt)("p",null,"Modern.js \u63d0\u4f9b ",(0,i.kt)("strong",{parentName:"p"},"Unbundled \u5f00\u53d1\u6a21\u5f0f"),"\u3002\u5f53\u9879\u76ee\u4ee5 ",(0,i.kt)("strong",{parentName:"p"},"Unbundled \u5f00\u53d1\u6a21\u5f0f"),"\u542f\u52a8\u65f6\uff0c\u9879\u76ee\u4f9d\u8d56\u7684\u6a21\u5757\u4e0d\u4f1a\u88ab\u8fdb\u884c\u6253\u5305\u5904\u7406\uff0c\u800c\u662f\u76f4\u63a5\u4f7f\u7528\u539f\u751f\u7684 ESM \u6a21\u5757\uff0c\u7531\u73b0\u4ee3\u6d4f\u89c8\u5668\u8d1f\u8d23\u6a21\u5757\u7684\u89e3\u6790\u548c\u52a0\u8f7d\uff0c\u4ece\u800c\u5b9e\u73b0\u6a21\u5757\u7684\u6309\u9700\u52a0\u8f7d\u3002",(0,i.kt)("strong",{parentName:"p"},"Unbundled \u5f00\u53d1\u6a21\u5f0f"),"\u53ef\u4ee5\u8ba9 Dev Server \u62e5\u6709\u79d2\u7ea7\u7684\u542f\u52a8\u901f\u5ea6\u548c\u70ed\u66f4\u65b0\u901f\u5ea6\uff0c\u6781\u5927\u5730\u63d0\u9ad8\u4e86\u5f00\u53d1\u6548\u7387\u548c\u4f53\u9a8c\u3002"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u6ce8")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"ES modules\uff08ESM\uff09\u662f JavaScript \u5b98\u65b9\u7684\u6807\u51c6\u5316\u6a21\u5757\u7cfb\u7edf\u3002"))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u6ce8")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Unbundled \u6a21\u5f0f\u6682\u4e0d\u652f\u6301\u5728 Windows \u5e73\u53f0\u4f7f\u7528\uff0c\u652f\u6301\u5373\u5c06\u4e0a\u7ebf\u3002"))),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"\u6ce8\u610f")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol"},"\u7531\u4e8e\u6d4f\u89c8\u5668\u517c\u5bb9\u6027\u7b49\u95ee\u9898\uff0c",(0,i.kt)("strong",{parentName:"li"},"Unbundled \u5f00\u53d1\u6a21\u5f0f"),"\u4ec5\u9002\u7528\u4e8e\u5f00\u53d1\u9636\u6bb5\u3002\u5728\u751f\u4ea7\u73af\u5883\u90e8\u7f72\u7684\u9879\u76ee\uff0c\u4ecd\u7136\u9700\u8981\u5148\u7ecf\u8fc7\u7f16\u8bd1\u6253\u5305\u5904\u7406\u3002"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Unbundled \u5f00\u53d1\u6a21\u5f0f")," \u6682\u4e0d\u652f\u6301 SSR\u3002")))),(0,i.kt)("h2",{id:"\u5f00\u59cb\u4f7f\u7528"},"\u5f00\u59cb\u4f7f\u7528"),(0,i.kt)("p",null,"\u5728 Modern.js \u4e2d\u4f7f\u7528 ",(0,i.kt)("strong",{parentName:"p"},"Unbundled \u5f00\u53d1\u6a21\u5f0f"),"\uff0c\u9700\u8981\u5728\u9879\u76ee\u6839\u8def\u5f84\u4e0b\u6267\u884c ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm run new"),"\uff0c\u7136\u540e\u8fdb\u884c\u5982\u4e0b\u9009\u62e9\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"? \u8bf7\u9009\u62e9\u4f60\u60f3\u8981\u7684\u64cd\u4f5c\uff1a \u542f\u7528\u53ef\u9009\u529f\u80fd\n? \u542f\u7528\u53ef\u9009\u529f\u80fd\uff1a \u542f\u7528\u300cUnbundled \u5f00\u53d1\u300d\u6a21\u5f0f\n")),(0,i.kt)("p",null,"\u73b0\u5728\uff0c\u6267\u884c ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm run dev:esm")," \u547d\u4ee4\uff0c\u9879\u76ee\u5c31\u4f1a\u4ee5 ",(0,i.kt)("strong",{parentName:"p"},"Unbundled \u5f00\u53d1\u6a21\u5f0f"),"\u542f\u52a8\u3002\u6d4f\u89c8\u5668\u8bbf\u95ee ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:8080"),"\uff0c\u6253\u5f00\u5f00\u53d1\u8005\u5de5\u5177\u7684 Network \u7a97\u53e3\uff0c\u53d1\u73b0\u52a0\u8f7d\u7684 JS \u8d44\u6e90\u90fd\u662f\u672a\u7ecf\u8fc7\u6253\u5305\u7684 ESM \u6a21\u5757\u89c4\u8303\u7684\u6587\u4ef6\u3002"),(0,i.kt)("h2",{id:"\u5b9e\u73b0\u539f\u7406\u548c\u6ce8\u610f\u4e8b\u9879"},"\u5b9e\u73b0\u539f\u7406\u548c\u6ce8\u610f\u4e8b\u9879"),(0,i.kt)("p",null,"\u4e3a\u4e86\u66f4\u597d\u7684\u7406\u89e3 ",(0,i.kt)("strong",{parentName:"p"},"Unbudled \u5f00\u53d1\u6a21\u5f0f"),"\uff0c\u672c\u7ae0\u8282\u4ece\u4e0b\u9762\u51e0\u4e2a\u65b9\u9762\u5206\u522b\u4ecb\u7ecd\uff1a"),(0,i.kt)("h3",{id:"\u4f9d\u8d56\u9884\u5904\u7406"},"\u4f9d\u8d56\u9884\u5904\u7406"),(0,i.kt)("p",null,"\u5f53\u524d\uff0c\u5f88\u591a\u7b2c\u4e09\u65b9\u4f9d\u8d56\u53ea\u63d0\u4f9b\u4e86 CommonJS \u4ea7\u7269\uff0c\u65e0\u6cd5\u76f4\u63a5\u5728\u6d4f\u89c8\u5668\u4e2d\u8fd0\u884c\uff0c\u53e6\u5916\uff0c\u5373\u4f7f\u7b2c\u4e09\u65b9\u4f9d\u8d56\u63d0\u4f9b ESM \u4ea7\u7269\uff0c\u5982\u679c\u6309\u7167\u4e60\u60ef\u4f7f\u7528\uff0c\u4f8b\u5982:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { something } from 'some-package';\n")),(0,i.kt)("p",null,"\u5728\u6d4f\u89c8\u5668\u4e2d\u76f4\u63a5\u8fd0\u884c\u4e5f\u4f1a\u62a5\u9519\u3002 Modern.js \u4e3a\u4e86\u89e3\u51b3\u4e0a\u8ff0\u95ee\u9898\uff0c\u4f1a\u5bf9\u7b2c\u4e09\u65b9\u4f9d\u8d56\u8fdb\u884c\u5982\u4e0b\u5904\u7406\u3002"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u5bf9\u7b2c\u4e09\u65b9\u4f9d\u8d56\u8fdb\u884c\u5982\u4e0b\u5904\u7406\u65b9\u5f0f")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol"},"\u9996\u6b21\u542f\u52a8 Dev Server \u65f6\uff0c\u5206\u6790\u9879\u76ee\u6e90\u4ee3\u7801\uff0c\u627e\u51fa\u4f7f\u7528\u5230\u7684\u7b2c\u4e09\u65b9\u4f9d\u8d56\uff0c\u4f8b\u5982 ",(0,i.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/react"},"react"),"\u3001",(0,i.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/react-dom"},"react-dom")," \u7b49\u3002")),(0,i.kt)("ol",{parentName:"div",start:2},(0,i.kt)("li",{parentName:"ol"},"\u6839\u636e\u4f9d\u8d56\u5728 ",(0,i.kt)("inlineCode",{parentName:"li"},"node_modules/")," \u76ee\u5f55\u4e0b\u7684\u5b9e\u9645\u5b89\u88c5\u4f4d\u7f6e\uff0c\u83b7\u53d6\u7cbe\u786e\u7684\u7248\u672c\u53f7\u4fe1\u606f\u3002")),(0,i.kt)("ol",{parentName:"div",start:3},(0,i.kt)("li",{parentName:"ol"},"\u6839\u636e\u5305\u540d\u548c\u7248\u672c\u53f7\uff0c\u4f9d\u6b21\u68c0\u67e5\u662f\u5426\u547d\u4e2d\u672c\u5730\u7f13\u5b58\u548c Modern.js \u7684\u4e91\u7aef\u7f13\u5b58\uff0c\u5747\u672a\u547d\u4e2d\u7684\u60c5\u51b5\u4e0b\uff0c\u672c\u5730\u7f16\u8bd1\u8be5\u6a21\u5757\uff0c\u8f6c\u6362\u4e3a ESM \u683c\u5f0f\u3002\u540e\u7eed\u9488\u5bf9\u83b7\u53d6\u5230\u7684 ESM \u6587\u4ef6\uff0c\u4f7f\u7528 ",(0,i.kt)("a",{parentName:"li",href:"https://esbuild.github.io/"},"esbuild")," \u6253\u5305\u6210\u4e00\u4e2a\u6587\u4ef6\uff0c\u4ee5\u51cf\u5c11\u9879\u76ee\u8fd0\u884c\u65f6\u6d4f\u89c8\u5668\u4e2d\u7684\u8bf7\u6c42\u6570\u91cf\u3002")),(0,i.kt)("ol",{parentName:"div",start:4},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Dev Server \u542f\u52a8\u65f6\uff0c\u52a8\u6001\u6539\u5199\u6e90\u7801\u6587\u4ef6\u4e2d\u5bf9\u7b2c\u4e09\u65b9\u4f9d\u8d56\u7684\u5f15\u7528\u8def\u5f84\uff0c\u4f8b\u5982\uff1a"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { useState } from 'react'\n")),(0,i.kt)("p",{parentName:"li"},"\u4f1a\u88ab\u6539\u5199\u4e3a\uff1a"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { useState } from 'node_modules/.modern_js_web_modules/react.js'\n")),(0,i.kt)("p",{parentName:"li"},"\u4ece\u800c\u4fdd\u8bc1\u6d4f\u89c8\u5668\u80fd\u591f\u6b63\u786e\u52a0\u8f7d\u7b2c\u4e09\u65b9\u4f9d\u8d56\u3002"))))),(0,i.kt)("p",null,"\u76f8\u540c\u4f9d\u8d56\u7684\u9879\u76ee\uff0c\u4f7f\u7528 Modern.js \u7684 ",(0,i.kt)("strong",{parentName:"p"},"Unbundled \u5f00\u53d1\u6a21\u5f0f"),"\u548c\u4f7f\u7528 ",(0,i.kt)("a",{parentName:"p",href:"https://www.snowpack.dev/"},"Snowpack")," \u8fdb\u884c\u5f00\u53d1\uff0cDev Server \u7684\u542f\u52a8\u65f6\u95f4\u5bf9\u6bd4\u5982\u4e0b:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:null},"\u9996\u6b21\u9884\u5904\u7406 node_modules"),(0,i.kt)("th",{parentName:"tr",align:null},"\u6dfb\u52a0\u4f9d\u8d56\u540e\uff0c\u518d\u6b21\u8fd0\u884c"),(0,i.kt)("th",{parentName:"tr",align:null},"\u4f9d\u8d56\u65e0\u53d8\u5316\u65f6\uff0c\u518d\u6b21\u8fd0\u884c"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Snowpack"),(0,i.kt)("td",{parentName:"tr",align:null},"24.27s"),(0,i.kt)("td",{parentName:"tr",align:null},"25.88s"),(0,i.kt)("td",{parentName:"tr",align:null},"< 1s")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Modern.js Unbundled"),(0,i.kt)("td",{parentName:"tr",align:null},"\u547d\u4e2d\u4e91\u7aef\u7f13\u5b58: 9.31s\uff1b\u672c\u5730\u76f4\u63a5\u7f16\u8bd1: 30.81s"),(0,i.kt)("td",{parentName:"tr",align:null},"2.6s"),(0,i.kt)("td",{parentName:"tr",align:null},"< 1s")))),(0,i.kt)("p",null,"\u53ef\u4ee5\u53d1\u73b0\uff0c\u5728\u5e38\u89c1\u7684\u5f00\u53d1\u573a\u666f\u4e2d\uff0c\u4f7f\u7528 ",(0,i.kt)("strong",{parentName:"p"},"Unbundled \u5f00\u53d1\u6a21\u5f0f")," \uff0c\u80fd\u591f\u8282\u7701\u66f4\u591a\u4f9d\u8d56\u9884\u5904\u7406\u65f6\u95f4\u3002"),(0,i.kt)("h3",{id:"jsxtsx"},"JSX/TSX"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},".jsx")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},".tsx")," \u6587\u4ef6\u4e0d\u80fd\u76f4\u63a5\u5728\u6d4f\u89c8\u5668\u4e2d\u8fd0\u884c\u3002\u5f53\u8bf7\u6c42\u8fd9\u7c7b\u683c\u5f0f\u7684\u6587\u4ef6\u8d44\u6e90\u65f6\uff0cModern.js \u4f1a\u4f7f\u7528 ",(0,i.kt)("a",{parentName:"p",href:"https://esbuild.github.io/"},"esbuild")," \u5c06\u539f\u59cb\u6587\u4ef6\u7f16\u8bd1\u6210 ",(0,i.kt)("inlineCode",{parentName:"p"},".js")," \u6587\u4ef6\u3002"),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"\u6ce8\u610f")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Modern.js \u5229\u7528 Babel \u63d2\u4ef6\u652f\u6301\u7684\u4e00\u4e9b\u8bed\u6cd5\uff0cesbuild \u5e76\u4e0d\u652f\u6301\uff0c\u4f7f\u7528 ",(0,i.kt)("strong",{parentName:"p"},"Unbundled \u5f00\u53d1\u6a21\u5f0f")," \u65f6\uff0c\u8bf7\u907f\u5f00\u8fd9\u4e9b\u8bed\u6cd5\u7684\u4f7f\u7528\uff1a\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/tc39/proposal-pipeline-operator"},"Pipeline Operator"),"\u3002\n\u53e6\u5916\uff0c\u4f7f\u7528 TypeScript \u5f00\u53d1\u65f6\uff0c\u8fd8\u9700\u8981\u6ce8\u610f\uff1a"),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol"},"esbuild \u7684 ",(0,i.kt)("a",{parentName:"li",href:"https://esbuild.github.io/api/#transform-api"},(0,i.kt)("inlineCode",{parentName:"a"},"transform"))," \u4e0d\u652f\u6301\u4ece ",(0,i.kt)("inlineCode",{parentName:"li"},".d.ts")," \u4e2d\u8de8\u6587\u4ef6\u5bfc\u5165 ",(0,i.kt)("a",{parentName:"li",href:"https://www.typescriptlang.org/docs/handbook/enums.html#const-enums"},"const enum")," \u4f7f\u7528\u3002"),(0,i.kt)("li",{parentName:"ol"},"Dev Server \u4e0d\u4f1a\u5bf9 TS \u6587\u4ef6\u6267\u884c\u7c7b\u578b\u68c0\u67e5\uff0c\u56e0\u6b64\u4f9d\u8d56 IDE \u8fdb\u884c\u7c7b\u578b\u6821\u9a8c\u3002")))),(0,i.kt)("h3",{id:"css"},"CSS"),(0,i.kt)("p",null,"\u6d4f\u89c8\u5668\u4e2d\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"import")," \u8bed\u6cd5\u5bfc\u5165\u7684\u8d44\u6e90\uff0c\u8981\u6c42\u8d44\u6e90\u7c7b\u578b\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"application/javascript"),"\u3002\u5f53 JS \u6587\u4ef6\u4e2d\u5bfc\u5165 CSS \u6587\u4ef6\u65f6\uff0cModern.js \u4f1a\u5c06 CSS \u5185\u5bb9",(0,i.kt)("strong",{parentName:"p"},"\u5305\u88c5"),"\u5230 JS \u6587\u4ef6\u4e2d\uff0c\u6700\u7ec8\u521b\u5efa ",(0,i.kt)("inlineCode",{parentName:"p"},"style")," \u6807\u7b7e\uff0c\u63d2\u5165\u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"head")," \u6807\u7b7e\u5185\u3002"),(0,i.kt)("h3",{id:"\u56fe\u7247\u8d44\u6e90\u5904\u7406"},"\u56fe\u7247\u8d44\u6e90\u5904\u7406"),(0,i.kt)("h4",{id:"js-\u4e2d\u4f7f\u7528\u56fe\u7247"},"JS \u4e2d\u4f7f\u7528\u56fe\u7247"),(0,i.kt)("p",null,"JS \u6587\u4ef6\u4e2d\u5f15\u5165\u7684\u56fe\u7247\u8d44\u6e90\u4f1a\u8fd4\u56de\u89e3\u6790\u4e4b\u540e\u7684 URL\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=src/App.jsx",title:"src/App.jsx"},"import logoUrl from './logo.png';\n\nconsole.log(logoUrl); // \u8f93\u51fa\uff1a '/src/logo.png';\n")),(0,i.kt)("h4",{id:"base64-\u7f16\u7801\u5185\u8054"},"Base64 \u7f16\u7801\u5185\u8054"),(0,i.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5c0f\u4e8e 10kb \u7684\u56fe\u7247\u3001\u5b57\u4f53\u6587\u4ef6\uff0c\u4f1a\u7ecf\u8fc7 Base64 \u7f16\u7801\uff0c\u5185\u8054\u8fdb\u9875\u9762\uff0c\u4e0d\u4f1a\u518d\u53d1\u9001\u72ec\u7acb\u7684\u8bf7\u6c42\u3002"),(0,i.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e ",(0,i.kt)("a",{parentName:"p",href:"/docs/apis/config/output/data-uri-limit"},(0,i.kt)("inlineCode",{parentName:"a"},"output.dataUriLimit"))," \u4fee\u6539\u8fd9\u4e2a\u9608\u503c\u3002"),(0,i.kt)("h4",{id:"js-\u4e2d\u4f7f\u7528-svg"},"JS \u4e2d\u4f7f\u7528 SVG"),(0,i.kt)("p",null,"\u9488\u5bf9 SVG \u8d44\u6e90\uff0c\u9ed8\u8ba4\u542f\u7528\u4e86 ",(0,i.kt)("a",{parentName:"p",href:"https://react-svgr.com/"},"SVGR"),"\uff0c\u53ef\u4ee5\u901a\u8fc7 React \u7ec4\u4ef6\u7684\u5f62\u5f0f\u5bfc\u5165\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=App.jsx",title:"App.jsx"},"import logoUrl, { ReactComponent as LogoComponent } from './logo.svg';\n")),(0,i.kt)("h4",{id:"css-\u4e2d\u4f7f\u7528\u56fe\u7247"},"CSS \u4e2d\u4f7f\u7528\u56fe\u7247"),(0,i.kt)("p",null,"\u5728 CSS \u6587\u4ef6\u4e2d\u65e2\u53ef\u4ee5\u901a\u8fc7\u76f8\u5bf9\u8def\u5f84\u4e5f\u53ef\u4ee5\u901a\u8fc7\u522b\u540d\u7684\u65b9\u5f0f\u5f15\u5165\u56fe\u7247:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},".logo {\n  background: url('./foo.png');\n}\n\n/** or **/\n.logo {\n  background: url('@/foo.png');\n}\n")),(0,i.kt)("h3",{id:"json"},"JSON"),(0,i.kt)("p",null,"\u652f\u6301\u76f4\u63a5\u4f7f\u7528\u9ed8\u8ba4\u5bfc\u5165\u7684\u65b9\u5f0f\u5bfc\u5165 JSON \u6587\u4ef6:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:"title=data.json",title:"data.json"},'{\n  "name": "a"\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"title=App.jsx",title:"App.jsx"},"import jsonData from './data.json';\n\nconsole.log(jsonData); // => { name: 'a'}\n")),(0,i.kt)("h3",{id:"\u70ed\u66f4\u65b0-hmr-"},"\u70ed\u66f4\u65b0\uff08 HMR \uff09"),(0,i.kt)("p",null,"\u4e00\u822c\u60c5\u51b5\u4e0b\uff0c\u4e0d\u9700\u8981\u8fdb\u884c\u4efb\u4f55\u4fee\u6539\uff0c",(0,i.kt)("strong",{parentName:"p"},"Unbundled \u5f00\u53d1\u6a21\u5f0f"),"\u4e0b\u5c31\u53ef\u4ee5\u6b63\u5e38\u4f7f\u7528\u70ed\u66f4\u65b0\u529f\u80fd\u3002\u6b64\u5916\uff0c",(0,i.kt)("strong",{parentName:"p"},"Unbundled \u5f00\u53d1\u6a21\u5f0f"),"\u5728 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/snowpackjs/esm-hmr"},"ESM-HMR Spec")," \u7684\u57fa\u7840\u4e0a\uff0c\u589e\u52a0\u4e86 Webpack \u573a\u666f\u5e38\u7528\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"module.hot")," \u7528\u6cd5\u652f\u6301\u3002\u540c\u65f6\u4e5f\u53ef\u4ee5\u76f4\u63a5\u5728\u4ee3\u7801\u4e2d\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"import.meta.hot.accpet")," \u65b9\u5f0f\u6ce8\u518c\u4f9d\u8d56\u66f4\u65b0\u65f6\u7684\u56de\u8c03\uff0c\u4f8b\u5982:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=b.js",title:"b.js"},"export const name = 'b';\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=a.js",title:"a.js"},"import { name } from './b';\n\nexport const age = 1;\n\nimport.meta.hot.accept('./b', modules => {\n  console.log(modules);  // \u8f93\u51fa\u6700\u65b0\u7684 a\u3001b \u6a21\u5757\n});\n")),(0,i.kt)("p",null,"\u5f53\u4fee\u6539 ",(0,i.kt)("inlineCode",{parentName:"p"},"b.js")," \u540e\uff0c\u5728\u6d4f\u89c8\u5668\u7684\u63a7\u5236\u53f0\u53ef\u4ee5\u770b\u5230\u5bf9\u5e94\u7684\u65e5\u5fd7\u8f93\u51fa\u3002"),(0,i.kt)("h3",{id:"http-20"},"HTTP 2.0"),(0,i.kt)("p",null," ",(0,i.kt)("strong",{parentName:"p"},"Unbundled \u6a21\u5f0f"),"\u4e0b\uff0c\u6bcf\u4e2a\u4f9d\u8d56\u90fd\u4f1a\u5bf9\u5e94\u4e00\u4e2a\u7f51\u7edc\u8bf7\u6c42\uff0c\u56e0\u6b64\u4f1a\u5b58\u5728\u5927\u91cf\u7684\u7f51\u7edc\u8bf7\u6c42\u3002\u901a\u8fc7\u5f00\u542f ",(0,i.kt)("a",{parentName:"p",href:"https://zh.wikipedia.org/wiki/HTTP/2"},"HTTP 2.0"),"\uff0c\u53ef\u4ee5\u8fdb\u4e00\u6b65\u4f18\u5316\u8d44\u6e90\u52a0\u8f7d\u901f\u5ea6\u3002\u914d\u7f6e ",(0,i.kt)("a",{parentName:"p",href:"/docs/apis/config/dev/https"},(0,i.kt)("inlineCode",{parentName:"a"},"dev.https"))," \u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"\uff0c\u5373\u53ef\u540c\u65f6\u542f\u7528 ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Transport_Layer_Security"},"TLS")," \u548c ",(0,i.kt)("a",{parentName:"p",href:"https://zh.wikipedia.org/wiki/HTTP/2"},"HTTP 2.0")," \u7684\u652f\u6301\u3002"),(0,i.kt)("h3",{id:"\u5176\u4ed6\u6ce8\u610f\u4e8b\u9879"},"\u5176\u4ed6\u6ce8\u610f\u4e8b\u9879"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/apis/config/output/inject"},(0,i.kt)("inlineCode",{parentName:"a"},"output.inject")),"\u3001",(0,i.kt)("a",{parentName:"p",href:"/docs/apis/config/output/copy"},(0,i.kt)("inlineCode",{parentName:"a"},"output.copy")),"\u3001",(0,i.kt)("a",{parentName:"p",href:"/docs/apis/config/output/polyfill"},(0,i.kt)("inlineCode",{parentName:"a"},"output.polyfill"))," \u914d\u7f6e\u5728 ",(0,i.kt)("strong",{parentName:"p"},"Unbundled \u6a21\u5f0f"),"\u4e0b\u4e0d\u652f\u6301\u3002"))}c.isMDXComponent=!0}}]);