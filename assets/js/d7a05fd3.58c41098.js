"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[5111],{54852:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var r=n(49231);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),m=s(n),p=o,f=m["".concat(c,".").concat(p)]||m[p]||d[p]||l;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,i=new Array(l);i[0]=m;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},92690:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return d}});var r=n(14380),o=n(8240),l=(n(49231),n(54852)),i=["components"],a={title:"\u4f7f\u7528 Model"},c=void 0,s={unversionedId:"guides/tutorials/c10-model/10.3-use-model",id:"guides/tutorials/c10-model/10.3-use-model",title:"\u4f7f\u7528 Model",description:"\u4e0a\u4e00\u5c0f\u8282\u4e2d\uff0c\u6211\u4eec\u5b9e\u73b0\u4e86 Model\uff0c\u5df2\u7ecf\u628a AllContacts \u7ec4\u4ef6\u4e2d\u539f\u6709\u7684 UI \u65e0\u5173\u4e1a\u52a1\u903b\u8f91\u89e3\u8026\u51fa\u6765\u3002",source:"@site/docs/guides/tutorials/c10-model/10.3-use-model.md",sourceDirName:"guides/tutorials/c10-model",slug:"/guides/tutorials/c10-model/10.3-use-model",permalink:"/docs/guides/tutorials/c10-model/10.3-use-model",tags:[],version:"current",frontMatter:{title:"\u4f7f\u7528 Model"},sidebar:"guidesSidebar",previous:{title:"\u5b9e\u73b0 Model",permalink:"/docs/guides/tutorials/c10-model/10.2-add-model"},next:{title:"\u6d4b\u8bd5 Model",permalink:"/docs/guides/tutorials/c10-model/10.4-testing"}},u={},d=[],m={toc:d};function p(e){var t=e.components,n=(0,o.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u4e0a\u4e00\u5c0f\u8282\u4e2d\uff0c\u6211\u4eec\u5b9e\u73b0\u4e86 Model\uff0c\u5df2\u7ecf\u628a AllContacts \u7ec4\u4ef6\u4e2d\u539f\u6709\u7684 UI \u65e0\u5173\u4e1a\u52a1\u903b\u8f91\u89e3\u8026\u51fa\u6765\u3002"),(0,l.kt)("p",null,"\u8fd9\u4e00\u5c0f\u8282\u4e2d\uff0c\u6211\u4eec\u4f7f\u7528\u8fd9\u4e2a Model \u76f4\u63a5\u628a AllContacts \u7ec4\u4ef6\u91cd\u65b0\u8fd8\u539f\u51fa\u6765\uff0c\u5b9e\u73b0\u53d8\u5f97\u66f4\u7b80\u6d01\u6e05\u6670\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/contacts/components/AllContacts/index.tsx"',title:'"src/contacts/components/AllContacts/index.tsx"'},"import { useEffect } from 'react';\nimport { useLocalModel } from '@modern-js/runtime/model';\nimport { List } from 'antd';\nimport Item from '../Item';\nimport contacts from '../../models/contacts';\n\nconst AllContacts = () => {\n  const [{ items, error, pending }, actions] = useLocalModel(contacts);\n\n  useEffect(() => {\n    if (!items.length && !error && !pending) {\n      actions.load();\n    }\n  });\n  return (\n    (items.length && (\n      <List\n        dataSource={items}\n        renderItem={info => <Item key={info.name} info={info} />}\n      />\n    )) || (\n      <div className=\"p-4 items-center border-gray-200 border-b border-t custom-text-gray\">\n        Pending...\n      </div>\n    )\n  );\n};\n\nexport default AllContacts;\n")),(0,l.kt)("p",null,"\u4ee5\u4e0a\u4ee3\u7801\u8ddf\u4e0a\u4e00\u7ae0\u8282\u4e2d ",(0,l.kt)("inlineCode",{parentName:"p"},"AllContacts")," \u7ec4\u4ef6\u7684\u4ee3\u7801\u7b49\u4ef7\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"useLocalModel")," \u662f Modern.js \u63d0\u4f9b\u7684 hooks API\uff0c\u53ef\u4ee5\u4f7f\u7528 Model\uff0c\u5728\u7ec4\u4ef6\u4e2d\u63d0\u4f9b Model \u4e2d\u5b9a\u4e49\u7684 state\uff0c\u6216\u901a\u8fc7 actions \u8c03\u7528 Model \u4e2d\u5b9a\u4e49\u7684 side effect \u4e0e action\uff0c\u4ece\u800c\u6539\u53d8 Model \u7684 state\u3002"),(0,l.kt)("p",null,"Modern.js \u7684 Model \u80fd\u591f\u8fd9\u6837\u4f7f\u7528\u7684\u539f\u56e0\u662f Model \u662f\u57fa\u4e8e FP \u7684\uff0c\u4e0d\u50cf OOP \u7684 Model \u90a3\u6837\u81ea\u8eab\u6301\u6709\u548c\u5c01\u88c5\u4e86\u72b6\u6001\uff0c\u5bf9\u5916\u90e8\u63d0\u4f9b\u65b9\u6cd5\u8bbf\u95ee\u548c\u4fee\u6539\u81ea\u8eab\u5185\u90e8\u7684\u72b6\u6001\u3002"),(0,l.kt)("p",null,"Model \u662f\u4e1a\u52a1\u903b\u8f91\uff0c\u662f\u8ba1\u7b97\u8fc7\u7a0b\uff0c\u672c\u8eab\u4e0d\u521b\u5efa\u4e5f\u4e0d\u6301\u6709\u72b6\u6001\uff0c\u53ea\u6709\u5728\u88ab\u7ec4\u4ef6\u7528 hooks API \u4f7f\u7528\u540e\uff0c\u624d\u5728\u6307\u5b9a\u7684\u5730\u65b9\uff08\u6bd4\u5982\u8fd9\u4e2a\u4f8b\u5b50\u91cc\uff0c\u662f\u7ec4\u4ef6\u5185\u90e8\u7684 state\uff09\u521b\u5efa\u72b6\u6001\u3002"),(0,l.kt)("p",null,"\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm run dev"),"\uff0c\u53ef\u4ee5\u770b\u5230\u8ddf\u4e0a\u4e00\u7ae0\u8282\u4e00\u6837\u7684\u6548\u679c\u3002"),(0,l.kt)("hr",null),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u672c\u5c0f\u8282\u7684\u4ee3\u7801\u53ef\u4ee5\u5728",(0,l.kt)("a",{parentName:"p",href:"https://github.com/modern-js-dev/modern-js-examples/tree/main/tutorials/c10/hello-modern-3"},"\u8fd9\u91cc\u67e5\u770b"),"\u3002")))}p.isMDXComponent=!0}}]);