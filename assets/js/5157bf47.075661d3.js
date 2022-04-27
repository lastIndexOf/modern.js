"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[4125],{54852:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return m}});var n=t(49231);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},p=Object.keys(e);for(n=0;n<p.length;n++)t=p[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)t=p[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=n.createContext({}),c=function(e){var r=n.useContext(a),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(a.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,p=e.originalType,a=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=c(t),m=o,d=f["".concat(a,".").concat(m)]||f[m]||l[m]||p;return t?n.createElement(d,s(s({ref:r},u),{},{components:t})):n.createElement(d,s({ref:r},u))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var p=t.length,s=new Array(p);s[0]=f;var i={};for(var a in r)hasOwnProperty.call(r,a)&&(i[a]=r[a]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<p;c++)s[c]=t[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},31879:function(e,r,t){t.r(r),t.d(r,{assets:function(){return u},contentTitle:function(){return a},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return l}});var n=t(14380),o=t(8240),p=(t(49231),t(54852)),s=["components"],i={title:"src/App.[tj]sx, src/[entry]/App.[tj]sx",sidebar_position:1},a=void 0,c={unversionedId:"apis/hooks/mwa/src/app",id:"apis/hooks/mwa/src/app",title:"src/App.[tj]sx, src/[entry]/App.[tj]sx",description:"\u5e94\u7528\u9879\u76ee\u65e0\u8def\u7531\u6216\u8005\u4efb\u610f\u8def\u7531\u7684\u5165\u53e3\u6807\u8bc6\u3002",source:"@site/docs/apis/hooks/mwa/src/app.md",sourceDirName:"apis/hooks/mwa/src",slug:"/apis/hooks/mwa/src/app",permalink:"/docs/apis/hooks/mwa/src/app",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"src/App.[tj]sx, src/[entry]/App.[tj]sx",sidebar_position:1},sidebar:"apisSidebar",previous:{title:"src/index.[tj]s, src/[entry]/index.[tj]s",permalink:"/docs/apis/hooks/mwa/src/"},next:{title:"src/pages/, src/[entry]/pages/",permalink:"/docs/apis/hooks/mwa/src/pages"}},u={},l=[],f={toc:l};function m(e){var r=e.components,t=(0,o.Z)(e,s);return(0,p.kt)("wrapper",(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"\u5e94\u7528\u9879\u76ee\u65e0\u8def\u7531\u6216\u8005\u4efb\u610f\u8def\u7531\u7684\u5165\u53e3\u6807\u8bc6\u3002"),(0,p.kt)("p",null,"\u5f00\u53d1\u5355\u9875\u9762\u5e94\u7528\u7684\u573a\u666f\uff0c\u63a8\u8350 ",(0,p.kt)("inlineCode",{parentName:"p"},"src")," \u6587\u4ef6\u5939\u4e0b\u653e\u7f6e ",(0,p.kt)("inlineCode",{parentName:"p"},"App.[tj]sx")," \u5bfc\u51fa\u5e94\u7528\u6839\u7ec4\u4ef6\u5373\u53ef\uff0cModern.js \u4f1a\u81ea\u52a8\u751f\u6210\u771f\u6b63\u7684\u6784\u5efa\u6253\u5305\u7684\u5165\u53e3\u6587\u4ef6, \u5185\u5bb9\u5927\u81f4\u5982\u4e0b:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-js"},"import React from 'react';\nimport { createApp, bootstrap } from '@modern-js/runtime';\nimport App from '@_modern_js_src/App';\nimport { state } from '@modern-js/runtime/plugins';\nimport { immer, effects, autoActions, devtools } from '@modern-js/runtime/model';\n\nconst createStatePlugins = (config) => {\n  const plugins = [];\n  plugins.push(immer(config['immer']));\n  plugins.push(effects(config['effects']));\n  plugins.push(autoActions(config['autoActions']));\n  plugins.push(devtools(config['devtools']));\n  return plugins;\n}\nlet AppWrapper = null;\nfunction render() {\n  AppWrapper = createApp({\n    plugins: [\n     state({...{plugins: createStatePlugins(true)}, ...App?.config?.state}),\n    ]\n  })(App)\n  if (IS_BROWSER) {\n    bootstrap(AppWrapper, MOUNT_ID);\n  }\n  return AppWrapper\n}\nAppWrapper = render();\nexport default AppWrapper;;\n")),(0,p.kt)("p",null,"\u5f00\u53d1\u591a\u9875\u9762\u5e94\u7528\u7684\u573a\u666f\u7c7b\u4f3c\uff0c\u5728\u5165\u53e3\u76ee\u5f55\u4e0b\u63a8\u8350\u76f4\u63a5\u653e\u7f6e ",(0,p.kt)("inlineCode",{parentName:"p"},"App.[jt]sx"),", \u81ea\u52a8\u751f\u6210\u7684\u6784\u5efa\u6253\u5305\u5165\u53e3\u6587\u4ef6\u548c\u5355\u9875\u9762\u5e94\u7528\u7c7b\u4f3c\u3002"))}m.isMDXComponent=!0}}]);