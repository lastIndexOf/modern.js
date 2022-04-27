"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[8900],{54852:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return f}});var r=t(49231);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),l=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=l(e.components);return r.createElement(u.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=l(t),f=o,m=d["".concat(u,".").concat(f)]||d[f]||c[f]||i;return t?r.createElement(m,a(a({ref:n},s),{},{components:t})):r.createElement(m,a({ref:n},s))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var p={};for(var u in n)hasOwnProperty.call(n,u)&&(p[u]=n[u]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var l=2;l<i;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},99626:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return c}});var r=t(14380),o=t(8240),i=(t(49231),t(54852)),a=["components"],p={sidebar_position:5},u="AddOptionBefore",l={unversionedId:"apis/generator/plugin/input/addOptionBefore",id:"apis/generator/plugin/input/addOptionBefore",title:"AddOptionBefore",description:"\u5728\u7279\u5b9a\u95ee\u9898\u7684\u9ed8\u8ba4\u9009\u9879\u524d Options \u9009\u9879\u3002",source:"@site/docs/apis/generator/plugin/input/addOptionBefore.md",sourceDirName:"apis/generator/plugin/input",slug:"/apis/generator/plugin/input/addOptionBefore",permalink:"/docs/apis/generator/plugin/input/addOptionBefore",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"apisSidebar",previous:{title:"SetInput",permalink:"/docs/apis/generator/plugin/input/setInput"},next:{title:"AddOptionAfter",permalink:"/docs/apis/generator/plugin/input/addOptionAfter"}},s={},c=[{value:"key",id:"key",level:2},{value:"optionKey",id:"optionkey",level:2},{value:"options",id:"options",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}],d={toc:c};function f(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"addoptionbefore"},"AddOptionBefore"),(0,i.kt)("p",null,"\u5728\u7279\u5b9a\u95ee\u9898\u7684\u9ed8\u8ba4\u9009\u9879\u524d Options \u9009\u9879\u3002"),(0,i.kt)("p",null,"\u8be5\u65b9\u6cd5\u53ef\u76f4\u63a5\u5728 context \u4e0a\u83b7\u53d6\u3002"),(0,i.kt)("p",null,"\u5176\u7c7b\u578b\u5b9a\u4e49\u4e3a:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"export interface IPluginContext {\n    addOptionBefore: (key: string, optionKey: string, option: IOption) => void;\n  ...\n}\n")),(0,i.kt)("h2",{id:"key"},"key"),(0,i.kt)("p",null,"\u95ee\u9898\u5173\u952e\u5b57\u3002\nModern.js \u5de5\u7a0b\u65b9\u6848\u7684\u914d\u7f6e\u7684\u95ee\u9898\u5173\u952e\u5b57\uff0c\u5177\u4f53\u914d\u7f6e\u53ef\u67e5\u770b",(0,i.kt)("a",{parentName:"p",href:"/docs/apis/generator/config/introduce"},"\u751f\u6210\u5668\u914d\u7f6e"),"\u3002"),(0,i.kt)("h2",{id:"optionkey"},"optionKey"),(0,i.kt)("p",null,"\u95ee\u9898\u9009\u9879\u5173\u952e\u5b57\u3002\nModern.js \u5de5\u7a0b\u65b9\u6848\u7684\u914d\u7f6e\u7684\u95ee\u9898\u9009\u9879\u5173\u952e\u5b57\uff0c\u5177\u4f53\u914d\u7f6e\u53ef\u67e5\u770b",(0,i.kt)("a",{parentName:"p",href:"/docs/apis/generator/config/introduce"},"\u751f\u6210\u5668\u914d\u7f6e"),"\u3002"),(0,i.kt)("h2",{id:"options"},"options"),(0,i.kt)("p",null,"\u9700\u8981\u6dfb\u52a0\u7684\u9009\u9879\uff0c\u5177\u4f53\u7c7b\u578b\u5b9a\u4e49\u53ef\u67e5\u770b",(0,i.kt)("a",{parentName:"p",href:"/docs/apis/generator/plugin/input/type"},"\u81ea\u5b9a\u4e49\u8f93\u5165\u76f8\u5173\u7c7b\u578b\u5b9a\u4e49"),"\u3002"),(0,i.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"context.AddOptionBefore('packageManager', 'pnpm', {\n    key: \"npm\",\n    name: \"NPM\"\n});\n")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u5bf9\u4e8e Modern.js \u5de5\u7a0b\u7c7b\u578b\u63d0\u4f9b\u7684\u8f93\u5165\u9009\u9879\uff0c\u6682\u65f6\u53ea\u652f\u6301\u5220\u9664\uff0c\u4e0d\u652f\u6301\u589e\u52a0\uff0c\u589e\u52a0\u4f1a\u9020\u6210\u4ee3\u7801\u4e2d\u7684\u903b\u8f91\u5224\u65ad\u5b58\u5728\u95ee\u9898\u3002\u4e0a\u65b9\u793a\u4f8b\u4e0d\u53ef\u76f4\u63a5\u4f7f\u7528\u3002"))))}f.isMDXComponent=!0}}]);