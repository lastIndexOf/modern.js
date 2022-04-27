"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[2367],{54852:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(49231);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),c=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),u=r,f=m["".concat(d,".").concat(u)]||m[u]||s[u]||o;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},70444:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return d},default:function(){return u},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s}});var a=n(14380),r=n(8240),o=(n(49231),n(54852)),i=["components"],l={title:"\u5b9e\u73b0 Model"},d=void 0,c={unversionedId:"guides/tutorials/c10-model/10.2-add-model",id:"guides/tutorials/c10-model/10.2-add-model",title:"\u5b9e\u73b0 Model",description:"\u521b\u5efa\u4e00\u4e2a\u5b8c\u6574\u7684 Model \u9996\u5148\u9700\u8981\u5b9a\u4e49\u72b6\u6001\uff08state\uff09\uff0c\u5305\u62ec\u72b6\u6001\u4e2d\u6570\u636e\u7684\u540d\u79f0\u548c\u521d\u59cb\u503c\u3002",source:"@site/docs/guides/tutorials/c10-model/10.2-add-model.md",sourceDirName:"guides/tutorials/c10-model",slug:"/guides/tutorials/c10-model/10.2-add-model",permalink:"/docs/guides/tutorials/c10-model/10.2-add-model",tags:[],version:"current",frontMatter:{title:"\u5b9e\u73b0 Model"},sidebar:"guidesSidebar",previous:{title:"\u5e94\u7528\u67b6\u6784",permalink:"/docs/guides/tutorials/c10-model/10.1-application-architecture"},next:{title:"\u4f7f\u7528 Model",permalink:"/docs/guides/tutorials/c10-model/10.3-use-model"}},p={},s=[],m={toc:s};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u521b\u5efa\u4e00\u4e2a\u5b8c\u6574\u7684 Model \u9996\u5148\u9700\u8981\u5b9a\u4e49",(0,o.kt)("strong",{parentName:"p"},"\u72b6\u6001\uff08state\uff09"),"\uff0c\u5305\u62ec\u72b6\u6001\u4e2d\u6570\u636e\u7684\u540d\u79f0\u548c\u521d\u59cb\u503c\u3002"),(0,o.kt)("p",null,"\u6211\u4eec\u4f7f\u7528 Model \u6765\u7ba1\u7406\u8054\u7cfb\u4eba\u5217\u8868\u7684\u6570\u636e\uff0c\u56e0\u6b64\u5b9a\u4e49\u5982\u4e0b\u6570\u636e\u72b6\u6001\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const state = {\n  items: [],\n};\n")),(0,o.kt)("p",null,"\u4f7f\u7528 TS \u8bed\u6cd5\uff0c\u53ef\u4ee5\u5b9a\u4e49\u66f4\u5b8c\u6574\u7684\u7c7b\u578b\u4fe1\u606f\uff0c\u6bd4\u5982 items \u91cc\u6bcf\u4e2a\u5bf9\u8c61\u90fd\u5e94\u8be5\u6709 ",(0,o.kt)("inlineCode",{parentName:"p"},"name"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"email")," \u5b57\u6bb5\uff1b"),(0,o.kt)("p",null,"\u4e3a\u4e86\u5b9e\u73b0\u5f52\u6863\u529f\u80fd\uff0c\u8fd8\u9700\u8981\u521b\u5efa ",(0,o.kt)("inlineCode",{parentName:"p"},"archived")," \u5b57\u6bb5\u4fdd\u5b58\u8fd9\u4e2a\u8054\u7cfb\u4eba\u662f\u5426\u5df2\u88ab\u5f52\u6863\u7684\u72b6\u6001\uff1b"),(0,o.kt)("p",null,"\u6211\u4eec\u8fd8\u9700\u8981\u4e00\u4e2a\u5b57\u6bb5\u7528\u6765\u8bbf\u95ee\u6240\u6709\u5df2\u5f52\u6863\u7684\u8054\u7cfb\u4eba\uff0c\u53ef\u4ee5\u5b9a\u4e49 ",(0,o.kt)("strong",{parentName:"p"},"computed")," \u7c7b\u578b\u7684\u5b57\u6bb5\uff0c\u5bf9\u5df2\u6709\u7684\u6570\u636e\u505a\u8f6c\u6362\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const computed = {\n  archived: ({ items }) => {\n    return items.filter(item => item.archived);\n  },\n};\n")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u6ce8")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u5f53\u524d\u7248\u672c\u8fd8\u672a\u652f\u6301 computed\uff0c\u672c\u7ae0\u8282\u540e\u7eed\u90e8\u5206\u4f1a\u5148\u4f7f\u7528\u5176\u4ed6\u65b9\u5f0f\u5b9e\u73b0 archived \u5217\u8868\uff0c\u8fd9\u91cc\u53ea\u505a\u4ecb\u7ecd\u3002"))),(0,o.kt)("p",null,"computed \u7c7b\u578b\u5b57\u6bb5\u7684\u5b9a\u4e49\u65b9\u5f0f\u662f\u51fd\u6570\uff0c\u4f46\u4f7f\u7528\u65f6\u53ef\u4ee5\u50cf\u666e\u901a\u5b57\u6bb5\u4e00\u6837\u901a\u8fc7 state \u8bbf\u95ee\u3002"),(0,o.kt)("p",null,"Modern.js \u652f\u6301\u7684 Model \u6a21\u5757\u8ddf React \u7ec4\u4ef6\u4e00\u6837\uff0c\u662f\u57fa\u4e8e FP\uff08Functional Programming\uff09\u800c\u4e0d\u662f OOP\uff08Object-Oriented Programming\uff09\u7684\uff0c\u5bf9\u72b6\u6001\u7684\u7ba1\u7406\u662f\u57fa\u4e8e",(0,o.kt)("strong",{parentName:"p"},"\u4e0d\u53ef\u53d8\u6570\u636e"),"\u7684\uff0c\u4e0d\u4f1a\u4fee\u6539\u72b6\u6001\u4e2d\u7684\u6570\u636e\uff0c\u53ea\u4f1a\u4ece\u4e00\u4e2a\u72b6\u6001\u8f6c\u79fb\u5230\u53e6\u4e00\u4e2a\u72b6\u6001\uff0c\u8fd9\u6837\u7684\u597d\u5904\u5f88\u591a\uff0c\u6bd4\u5982\u4fdd\u969c\u7a0b\u5e8f\u7684\u53ef\u9760\u6027\u3001\u65b9\u4fbf\u8c03\u8bd5\u3001\u65b9\u4fbf\u8bb0\u5f55\u548c\u8fd8\u539f\u72b6\u6001\u7b49\u3002"),(0,o.kt)("p",null,"\u7531\u4e8e JS \u6ca1\u6709\u539f\u751f\u652f\u6301\u4e0d\u53ef\u53d8\u6570\u636e\uff0c\u4e3a\u4e86\u63d0\u9ad8\u7f16\u5199\u8fd9\u79cd\u4ee3\u7801\u7684\u6548\u7387\uff0cModern.js \u96c6\u6210\u4e86 ",(0,o.kt)("a",{parentName:"p",href:"https://immerjs.github.io/immer/"},"Immer"),"\uff0c\u80fd\u591f\u50cf\u64cd\u4f5c JS \u4e2d\u5e38\u89c4\u7684\u53ef\u53d8\u6570\u636e\u4e00\u6837\uff0c\u53bb\u5199\u8fd9\u79cd\u72b6\u6001\u8f6c\u79fb\u7684\u903b\u8f91\u3002"),(0,o.kt)("p",null,"\u5b9e\u73b0 Archive \u6309\u94ae\u65f6\uff0c\u6211\u4eec\u9700\u8981\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"archive")," \u51fd\u6570\uff0c\u8d1f\u8d23\u4fee\u6539\u6307\u5b9a\u8054\u7cfb\u4eba\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"archived")," \u5b57\u6bb5\uff0c\u6211\u4eec\u628a\u8fd9\u79cd\u51fd\u6570\u90fd\u53eb\u4f5c ",(0,o.kt)("strong",{parentName:"p"},"action"),"\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const actions = {\n  archive(draft, payload) {\n    const target = draft.items.find(item => item.email === payload);\n    if (target) {\n      target.archived = true;\n    }\n  },\n};\n")),(0,o.kt)("p",null,"action \u51fd\u6570\u662f\u4e00\u79cd",(0,o.kt)("strong",{parentName:"p"},"\u7eaf\u51fd\u6570"),"\uff0c\u786e\u5b9a\u7684\u8f93\u5165\u5f97\u5230\u786e\u5b9a\u7684\u8f93\u51fa\uff08\u8f6c\u79fb\u540e\u7684\u72b6\u6001\uff09\uff0c\u4e0d\u5e94\u8be5\u6709\u4efb\u4f55\u526f\u4f5c\u7528\u3002"),(0,o.kt)("p",null,"\u51fd\u6570\u7684\u7b2c\u4e00\u4e2a\u53c2\u6570\u662f Immer \u63d0\u4f9b\u7684 Draft State\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f action \u88ab\u8c03\u7528\u65f6\u4f20\u5165\u7684\u53c2\u6570\uff08\u540e\u9762\u4f1a\u4ecb\u7ecd\u600e\u4e48\u8c03\u7528\uff09\u3002"),(0,o.kt)("p",null,"Model \u91cc\u4e5f\u53ef\u4ee5\u5b9a\u4e49 Side Effect\uff0c\u6bd4\u5982\u6211\u4eec\u9700\u8981\u4ece BFF \u52a0\u8f7d\u8fd9\u4e2a\u8054\u7cfb\u4eba\u5217\u8868\u7684\u6570\u636e\uff0c\u8fd9\u6bb5\u4e1a\u52a1\u903b\u8f91\u53ef\u4ee5\u5199\u6210\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const effects = {\n  async load() {\n    const { data } = await concats();\n    return data;\n  },\n};\n")),(0,o.kt)("p",null,"\u4e00\u4e2a Side Effect \u6709\u591a\u79cd\u5b9e\u73b0\u65b9\u5f0f\uff0c\u4e0a\u9762\u4f7f\u7528\u7684\u662f Async \u51fd\u6570\u65b9\u5f0f\uff0c\u8fd9\u79cd\u65b9\u5f0f\u662f\u6700\u7b80\u5355\u76f4\u89c2\u7684\u3002Modern.js \u4f1a\u6839\u636e\u5b83\u8fd4\u56de\u7684 Promise \u5bf9\u8c61\u7684\u72b6\u6001\u53d8\u5316\uff0c\u81ea\u52a8\u89e6\u53d1\u4e0d\u540c\u7684 action\u3002"),(0,o.kt)("p",null,"\u56e0\u6b64\u4e00\u4e2a effect \u603b\u5171\u6709\u4e09\u4e2a action\uff0c\u547d\u540d\u91cc\u4f1a\u7528 Side Effect \u7684\u540d\u79f0\u4f5c\u4e3a\u547d\u540d\u7a7a\u95f4\uff0c\u5728\u8fd9\u4e2a\u4f8b\u5b50\u91cc\uff0c\u5206\u522b\u662f\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"load.pending"),"\uff1a\u7b49\u5f85\u4e2d"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"load.fulfilled"),"\uff1a\u6210\u529f\uff0c\u5f97\u5230\u7ed3\u679c"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"load.rejected"),"\uff1a\u5931\u8d25\uff0c\u5f97\u5230\u9519\u8bef\u4fe1\u606f")),(0,o.kt)("p",null,"Modern.js \u867d\u7136\u4f1a\u81ea\u52a8\u5b9a\u4e49\u548c\u89e6\u53d1\u8fd9\u4e9b action\uff0c\u4f46\u9ed8\u8ba4\u4e0d\u4f1a\u4e3a\u8fd9\u4e9b action \u5b9e\u73b0\u5177\u4f53\u7684\u4e1a\u52a1\u903b\u8f91\uff08action \u76f4\u63a5\u8fd4\u56de\u539f\u672c\u7684\u72b6\u6001\uff0c\u4e0d\u505a\u4efb\u4f55\u8f6c\u6362\uff09\u3002"),(0,o.kt)("p",null,"\u6211\u4eec\u5c1d\u8bd5\u81ea\u5df1\u5b9e\u73b0\u5b83\u4eec\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import _ from 'lodash';\n\nconst state = {\n  items: [],\n  pending: false,\n  error: null,\n};\n\nconst computed = {\n  archived: ({ items }) => {\n    return items.filter(item => item.archived);\n  },\n};\n\nconst actions = {\n  archive(draft, payload) {\n    const target = draft.items.find(item => item.email === payload);\n    if (target) {\n      target.archived = true;\n    }\n  },\n  load: {\n    pending(draft) {\n      draft.pending = true;\n    },\n    fulfilled(draft, payload) {\n      draft.pending = false;\n      _.merge(draft.items, payload);\n    },\n    rejected(draft, payload) {\n      draft.pending = false;\n      draft.error = payload;\n    },\n  },\n};\n")),(0,o.kt)("p",null,"\u4e0a\u8ff0\u5b9e\u73b0\u91cc\uff0c\u6210\u529f\u65f6\uff0cpayload \u662f promise \u7684\u7ed3\u679c\uff1b\u5931\u8d25\u65f6\uff0cpayload \u662f\u9519\u8bef\u4fe1\u606f\u3002"),(0,o.kt)("p",null,"\u4ece\u4e0a\u9762\u8fd9\u4e2a\u4f8b\u5b50\u91cc\u53ef\u4ee5\u770b\u5230\uff0c\u53ef\u4ee5\u7528\u5d4c\u5957\u7684\u5199\u6cd5\uff0c\u5b9e\u73b0 ",(0,o.kt)("inlineCode",{parentName:"p"},"load.pending")," \u8fd9\u6837\u540d\u79f0\u4e2d\u5305\u542b\u547d\u540d\u7a7a\u95f4\u7684 action\u3002"),(0,o.kt)("p",null,"\u4e3a\u4e86\u505a\u5230\u9ad8\u5185\u805a\u4f4e\u8026\u5408\uff0c\u4e00\u4e2a Model \u7684 state\u3001action\u3001side effect \u4e0d\u5e94\u8be5\u5206\u6563\u5728\u4e0d\u540c\u6587\u4ef6\u91cc\u3002\u63a5\u4e0b\u6765\u6211\u4eec\u628a\u4e0a\u9762\u7684\u4ee3\u7801\u8fde\u8d77\u6765\uff0c\u653e\u5728\u540c\u4e00\u4e2a Model \u6587\u4ef6\u91cc\uff0c\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p src/contacts/models/\ntouch src/contacts/models/contacts.ts\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"src/contacts/models/contacts.ts")," \u7684\u5185\u5bb9\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { model } from '@modern-js/runtime/model';\nimport { get as concats } from '@api/contacts';\n\ntype State = {\n  items: {\n    avatar: string;\n    name: string;\n    email: string;\n    archived?: boolean;\n  }[];\n  pending: boolean;\n  error: null | Error;\n};\n\nexport default model<State>('contacts').define({\n  state: {\n    items: [],\n    pending: false,\n    error: null,\n  },\n  computed: {\n    archived: ({ items }: State) => items.filter(item => item.archived),\n  },\n  actions: {\n    archive(draft, payload) {\n      const target = draft.items.find(item => item.email === payload)!;\n      if (target) {\n        target.archived = true;\n      }\n    },\n    load: {\n      pending(draft) {\n        draft.pending = true;\n      },\n      rejected(draft, payload) {\n        draft.pending = false;\n        draft.error = payload;\n      },\n      fulfilled(draft, p) {\n        draft.items = p;\n      },\n    },\n  },\n  effects: {\n    async load() {\n      const { data } = await concats();\n      return data;\n    },\n  },\n});\n")),(0,o.kt)("p",null,"\u6211\u4eec\u628a\u4e00\u4e2a\u5305\u542b state\uff0caction \u7b49\u8981\u7d20\u7684 plain object \u79f0\u4f5c\u3010 Model Spec \u3011\uff0cModern.js \u63d0\u4f9b\u4e86 ",(0,o.kt)("a",{parentName:"p",href:"/docs/apis/runtime/model/model_"},"Model API"),"\uff0c\u53ef\u4ee5\u6839\u636e Model Spec \u751f\u6210\u3010 Model \u3011\u3002"),(0,o.kt)("p",null,"\u672c\u5c0f\u8282\u4e2d\uff0c\u6211\u4eec\u8054\u7cfb\u4eba\u5217\u8868\u9879\u76ee\u9700\u8981\u7684 Model \u5b9e\u73b0\u3002\u4e0b\u4e00\u5c0f\u8282\u6211\u4eec\u5c06\u4f1a\u5b66\u4e60\u5982\u4f55\u4f7f\u7528 Model\u3002"))}u.isMDXComponent=!0}}]);