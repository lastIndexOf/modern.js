"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[4071],{54852:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return f}});var n=t(49231);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),u=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},c=function(e){var r=u(e.components);return n.createElement(p.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(t),f=a,m=d["".concat(p,".").concat(f)]||d[f]||s[f]||i;return t?n.createElement(m,o(o({ref:r},c),{},{components:t})):n.createElement(m,o({ref:r},c))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=t[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},64262:function(e,r,t){t.r(r),t.d(r,{assets:function(){return c},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s}});var n=t(14380),a=t(8240),i=(t(49231),t(54852)),o=["components"],l={sidebar_position:3},p="addPartial",u={unversionedId:"apis/generator/plugin/file/addPartial",id:"apis/generator/plugin/file/addPartial",title:"addPartial",description:"\u9488\u5bf9\u4e8e\u6587\u672c\u7c7b\u578b\u6587\u4ef6\uff0c\u589e\u52a0 Handlebars \u7684\u81ea\u5b9a\u4e49 Partial \u7247\u6bb5\uff0c\u5177\u4f53\u53ef\u67e5\u770b\u6587\u6863Partials\u3002",source:"@site/docs/apis/generator/plugin/file/addPartial.md",sourceDirName:"apis/generator/plugin/file",slug:"/apis/generator/plugin/file/addPartial",permalink:"/docs/apis/generator/plugin/file/addPartial",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"apisSidebar",previous:{title:"addHelper",permalink:"/docs/apis/generator/plugin/file/addHelper"},next:{title:"addFile",permalink:"/docs/apis/generator/plugin/file/addFile"}},c={},s=[{value:"name",id:"name",level:2},{value:"str",id:"str",level:2}],d={toc:s};function f(e){var r=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"addpartial"},"addPartial"),(0,i.kt)("p",null,"\u9488\u5bf9\u4e8e\u6587\u672c\u7c7b\u578b\u6587\u4ef6\uff0c\u589e\u52a0 Handlebars \u7684\u81ea\u5b9a\u4e49 Partial \u7247\u6bb5\uff0c\u5177\u4f53\u53ef\u67e5\u770b\u6587\u6863",(0,i.kt)("a",{parentName:"p",href:"https://handlebarsjs.com/guide/#partials"},"Partials"),"\u3002"),(0,i.kt)("p",null,"\u8be5\u65b9\u6cd5\u53ef\u5728 onForged \u751f\u547d\u5468\u671f\u7684 api \u53c2\u6570\u4e0a\u83b7\u53d6\u3002"),(0,i.kt)("p",null,"\u5176\u7c7b\u578b\u5b9a\u4e49\u4e3a\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"export type ForgedAPI = {\n  addPartial: (name: string, str: Handlebars.Template) => void;\n  ...\n};\n")),(0,i.kt)("h2",{id:"name"},"name"),(0,i.kt)("p",null,"partial\u540d\u79f0\u3002"),(0,i.kt)("h2",{id:"str"},"str"),(0,i.kt)("p",null,"partial \u6a21\u677f\u5b57\u7b26\u4e32\u3002"))}f.isMDXComponent=!0}}]);