"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[6776],{54852:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var r=t(49231);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),p=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(u.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(t),m=a,f=d["".concat(u,".").concat(m)]||d[m]||c[m]||o;return t?r.createElement(f,i(i({ref:n},s),{},{components:t})):r.createElement(f,i({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},69805:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var r=t(14380),a=t(8240),o=(t(49231),t(54852)),i=["components"],l={sidebar_position:2},u="\u5982\u4f55\u4f7f\u7528\u751f\u6210\u5668\u63d2\u4ef6",p={unversionedId:"guides/features/generator-plugin/use",id:"guides/features/generator-plugin/use",title:"\u5982\u4f55\u4f7f\u7528\u751f\u6210\u5668\u63d2\u4ef6",description:"@modern-js/create \u63d0\u4f9b\u4e86 plugin \u53c2\u6570\u7528\u4e8e\u58f0\u660e\u4f7f\u7528\u7684\u751f\u6210\u5668\u63d2\u4ef6\u3002",source:"@site/docs/guides/features/generator-plugin/use.md",sourceDirName:"guides/features/generator-plugin",slug:"/guides/features/generator-plugin/use",permalink:"/docs/guides/features/generator-plugin/use",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"guidesSidebar",previous:{title:"\u4e3a\u4ec0\u4e48\u9700\u8981\u751f\u6210\u5668\u63d2\u4ef6",permalink:"/docs/guides/features/generator-plugin/abstruct"},next:{title:"\u5982\u4f55\u5f00\u53d1\u751f\u6210\u5668\u63d2\u4ef6",permalink:"/docs/guides/features/generator-plugin/develop"}},s={},c=[{value:"\u751f\u6210\u5668\u63d2\u4ef6\u5206\u7c7b",id:"\u751f\u6210\u5668\u63d2\u4ef6\u5206\u7c7b",level:2},{value:"\u7c7b\u578b\u5b9a\u4e49",id:"\u7c7b\u578b\u5b9a\u4e49",level:3},{value:"\u6269\u5c55\u5de5\u7a0b\u65b9\u6848",id:"\u6269\u5c55\u5de5\u7a0b\u65b9\u6848",level:4},{value:"\u521b\u5efa\u5de5\u7a0b\u65b9\u6848\u573a\u666f",id:"\u521b\u5efa\u5de5\u7a0b\u65b9\u6848\u573a\u666f",level:4},{value:"\u6267\u884c\u65f6\u673a",id:"\u6267\u884c\u65f6\u673a",level:3},{value:"\u6269\u5c55\u5de5\u7a0b\u65b9\u6848",id:"\u6269\u5c55\u5de5\u7a0b\u65b9\u6848-1",level:4},{value:"\u521b\u5efa\u5de5\u7a0b\u65b9\u6848\u573a\u666f",id:"\u521b\u5efa\u5de5\u7a0b\u65b9\u6848\u573a\u666f-1",level:4}],d={toc:c};function m(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u5982\u4f55\u4f7f\u7528\u751f\u6210\u5668\u63d2\u4ef6"},"\u5982\u4f55\u4f7f\u7528\u751f\u6210\u5668\u63d2\u4ef6"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"@modern-js/create")," \u63d0\u4f9b\u4e86 plugin \u53c2\u6570\u7528\u4e8e\u58f0\u660e\u4f7f\u7528\u7684\u751f\u6210\u5668\u63d2\u4ef6\u3002"),(0,o.kt)("p",null,"\u4f60\u53ef\u76f4\u63a5\u6267\u884c\u4e0b\u9762\u547d\u4ee4\u4f7f\u7528\u751f\u6210\u5668\u63d2\u4ef6\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx @modern-js/create --plugin <pluginName>\n")),(0,o.kt)("p",null,"plugin \u53c2\u6570\u652f\u6301\u58f0\u660e\u591a\u6b21\uff0c\u4ee3\u8868\u540c\u65f6\u4f7f\u7528\u591a\u4e2a\u751f\u6210\u5668\u63d2\u4ef6\u3002"),(0,o.kt)("h2",{id:"\u751f\u6210\u5668\u63d2\u4ef6\u5206\u7c7b"},"\u751f\u6210\u5668\u63d2\u4ef6\u5206\u7c7b"),(0,o.kt)("p",null,"\u751f\u6210\u5668\u63d2\u4ef6\u5206\u4e3a\u4e24\u79cd\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u6269\u5c55\u5de5\u7a0b\u65b9\u6848\uff1a\u76f4\u63a5\u5bf9\u9ed8\u8ba4\u63d0\u4f9b\u7684\u4e09\u5927\u5de5\u7a0b\u65b9\u6848\u8fdb\u884c\u5b9a\u5236\u5316")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u521b\u5efa\u5de5\u7a0b\u65b9\u6848\u573a\u666f\uff1a\u57fa\u4e8e\u9ed8\u8ba4\u7684\u4e09\u5927\u5de5\u7a0b\u65b9\u6848\u521b\u5efa\u5bf9\u5e94\u7684\u5de5\u7a0b\u65b9\u6848\u573a\u666f"))),(0,o.kt)("h3",{id:"\u7c7b\u578b\u5b9a\u4e49"},"\u7c7b\u578b\u5b9a\u4e49"),(0,o.kt)("p",null,"\u751f\u6210\u5668\u63d2\u4ef6\u7684\u5206\u7c7b\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," \u4e2d\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"meta")," \u4fe1\u606f\u63d0\u4f9b\u3002"),(0,o.kt)("h4",{id:"\u6269\u5c55\u5de5\u7a0b\u65b9\u6848"},"\u6269\u5c55\u5de5\u7a0b\u65b9\u6848"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "meta": {\n        "extend": "mwa" // \u4e09\u4e2a\u5de5\u7a0b\u65b9\u6848\u5206\u522b\u5bf9\u5e94 mwa\u3001module\u3001 monorepo\n    }\n}\n')),(0,o.kt)("h4",{id:"\u521b\u5efa\u5de5\u7a0b\u65b9\u6848\u573a\u666f"},"\u521b\u5efa\u5de5\u7a0b\u65b9\u6848\u573a\u666f"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "meta": {\n        "key": "new_solution",\n        "name": "\u65b0\u5de5\u7a0b\u65b9\u6848",\n        "type": "mwa" // \u9664\u4e86\u4e09\u5927\u5de5\u7a0b\u65b9\u6848\uff0c\u8fd9\u91cc\u7c7b\u578b\u8fd8\u652f\u6301\u81ea\u5b9a\u4e49(custom)\u7c7b\u578b\uff0c\u540e\u9762\u4f1a\u8be6\u7ec6\u4ecb\u7ecd \n    }\n}\n')),(0,o.kt)("h3",{id:"\u6267\u884c\u65f6\u673a"},"\u6267\u884c\u65f6\u673a"),(0,o.kt)("p",null,"\u4e0d\u540c\u7c7b\u578b\u7684\u5b9a\u5236\u5de5\u7a0b\u65b9\u6848\u7684\u6267\u884c\u65f6\u673a\u662f\u4e0d\u540c\u7684\u3002"),(0,o.kt)("h4",{id:"\u6269\u5c55\u5de5\u7a0b\u65b9\u6848-1"},"\u6269\u5c55\u5de5\u7a0b\u65b9\u6848"),(0,o.kt)("p",null,"\u6269\u5c55\u5de5\u7a0b\u65b9\u6848\u7c7b\u578b\u7684\u751f\u6210\u5668\u63d2\u4ef6\u4f1a\u5728\u9009\u62e9\u5bf9\u5e94 extend \u7684\u5de5\u7a0b\u65b9\u6848\u540e\u6309\u7167 plugin \u53c2\u6570\u7684\u58f0\u660e\u987a\u5e8f\u4f9d\u6b21\u6267\u884c\u3002"),(0,o.kt)("h4",{id:"\u521b\u5efa\u5de5\u7a0b\u65b9\u6848\u573a\u666f-1"},"\u521b\u5efa\u5de5\u7a0b\u65b9\u6848\u573a\u666f"),(0,o.kt)("p",null,"\u521b\u5efa\u5de5\u7a0b\u65b9\u6848\u573a\u666f\u7684\u751f\u6210\u5668\u63d2\u4ef6\u4f1a\u5728\u9009\u62e9\u5bf9\u5e94\u7c7b\u578b\u7684\u5de5\u7a0b\u65b9\u6848\u4e4b\u540e\u51fa\u73b0\u9009\u62e9\u573a\u666f\u7684\u9009\u9879\uff0c\u9009\u9879\u5217\u8868\u5305\u62ec\u5f53\u524d\u9ed8\u8ba4\u7684\u5de5\u7a0b\u65b9\u6848\u573a\u666f\u548c\u63d2\u4ef6\u5b9a\u4e49\u7684\u5de5\u7a0b\u65b9\u6848\u573a\u666f\uff0c\u9009\u62e9\u5bf9\u5e94\u7684\u573a\u666f\uff0c\u5c06\u4f1a\u6267\u884c\u5bf9\u5e94\u7684\u751f\u6210\u5668\u63d2\u4ef6\u3002"))}m.isMDXComponent=!0}}]);