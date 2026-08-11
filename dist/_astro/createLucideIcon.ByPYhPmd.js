import{r as a}from"./index.CVf8TyFT.js";var m={exports:{}},i={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var E=a,g=Symbol.for("react.element"),L=Symbol.for("react.fragment"),R=Object.prototype.hasOwnProperty,S=E.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,A={key:!0,ref:!0,__self:!0,__source:!0};function x(t,e,o){var r,n={},s=null,c=null;o!==void 0&&(s=""+o),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(c=e.ref);for(r in e)R.call(e,r)&&!A.hasOwnProperty(r)&&(n[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)n[r]===void 0&&(n[r]=e[r]);return{$$typeof:g,type:t,key:s,ref:c,props:n,_owner:S.current}}i.Fragment=L;i.jsx=x;i.jsxs=x;m.exports=i;var U=m.exports;/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=(...t)=>t.filter((e,o,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===o).join(" ").trim();/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,o,r)=>r?r.toUpperCase():o.toLowerCase());/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=t=>{const e=j(t);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var u={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},P=a.createContext({}),$=()=>a.useContext(P),I=a.forwardRef(({color:t,size:e,strokeWidth:o,absoluteStrokeWidth:r,className:n="",children:s,iconNode:c,...p},C)=>{const{size:l=24,strokeWidth:d=2,absoluteStrokeWidth:_=!1,color:w="currentColor",className:k=""}=$()??{},y=r??_?Number(o??d)*24/Number(e??l):o??d;return a.createElement("svg",{ref:C,...u,width:e??l??u.width,height:e??l??u.height,stroke:t??w,strokeWidth:y,className:h("lucide",k,n),...!s&&!W(p)&&{"aria-hidden":"true"},...p},[...c.map(([v,b])=>a.createElement(v,b)),...Array.isArray(s)?s:[s]])});/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=(t,e)=>{const o=a.forwardRef(({className:r,...n},s)=>a.createElement(I,{ref:s,iconNode:e,className:h(`lucide-${O(f(t))}`,`lucide-${t}`,r),...n}));return o.displayName=f(t),o};export{B as c,U as j};
