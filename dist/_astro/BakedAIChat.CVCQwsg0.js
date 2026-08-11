import{c,j as e}from"./createLucideIcon.ByPYhPmd.js";import{r as s}from"./index.CVf8TyFT.js";/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],K=c("arrow-up",z);/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],F=c("chevron-left",T);/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]],O=c("ellipsis",L);/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],R=c("image",P);/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}]],H=c("message-circle",Y);/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q=[["path",{d:"M12 19v3",key:"npa21l"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["rect",{x:"9",y:"2",width:"6",height:"13",rx:"3",key:"s6n7sd"}]],J=c("mic",q);/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U=[["path",{d:"m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551",key:"1miecu"}]],V=c("paperclip",U);/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]],G=c("smile",X);/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],M=c("x",Q),a={panel:"#1C1C1E",header:"#232325",agentBubble:"#2E2E31",text:"#FFFFFF",meta:"#8E8E93",accent:"#E2572B",divider:"rgba(255,255,255,0.08)",composerBorder:"rgba(255,255,255,0.9)",sendIdle:"rgba(255,255,255,0.12)"};async function W(n){await new Promise(l=>setTimeout(l,900));const r=n[n.length-1]?.content??"";return`Pertanyaan Anda sudah saya terima, tapi asisten BAKEDAI belum tersambung ke server sehingga saya belum bisa menjawabnya.

Sementara ini silakan pakai pencarian di halaman utama, atau hubungi tim kami di it.support@baked.co.id.`}function Z(n,r){const l=Math.floor((r-n.getTime())/1e3);if(l<60)return"Baru saja";const i=Math.floor(l/60);if(i<60)return`${i} mnt lalu`;const d=Math.floor(i/60);return d<24?`${d} jam lalu`:`${Math.floor(d/24)} hr lalu`}let ee=0;const h=()=>`m${Date.now().toString(36)}${(ee++).toString(36)}`,A="bakedai:v2";function te(){try{const n=sessionStorage.getItem(A);if(!n)return null;const r=JSON.parse(n);return Array.isArray(r?.messages)?r:null}catch{return null}}function ae(n,r){try{const l={open:r,messages:n.map(i=>({...i,timestamp:i.timestamp.toISOString()}))};sessionStorage.setItem(A,JSON.stringify(l))}catch{}}function oe({agentName:n="BAKEDAI",agentSubtitle:r="Tim kami juga siap membantu",agentAvatar:l,greeting:i=`Halo 👋

Anda sedang berbicara dengan BAKEDAI. Ada yang bisa dibantu seputar modul, laporan, atau alur kerja di BAKED?`,privacyHref:d="#"}){const[o,f]=s.useState(!1),[u,m]=s.useState([]),[p,j]=s.useState(""),[b,k]=s.useState(!1),[I,w]=s.useState(()=>Date.now()),N=s.useRef(null),y=s.useRef(null);s.useEffect(()=>{const t=te();if(t&&t.messages.length>0){m(t.messages.map(x=>({...x,timestamp:new Date(x.timestamp)}))),f(t.open);return}m([{id:h(),role:"agent",content:i,timestamp:new Date}])},[i]),s.useEffect(()=>{u.length>0&&ae(u,o)},[u,o]),s.useEffect(()=>{if(!o)return;const t=window.setInterval(()=>w(Date.now()),3e4);return()=>window.clearInterval(t)},[o]),s.useEffect(()=>{const t=N.current;t&&(t.scrollTop=t.scrollHeight)},[u,b,o]);const E=s.useCallback(()=>{const t=y.current;t&&(t.style.height="auto",t.style.height=`${Math.min(t.scrollHeight,90)}px`)},[]);s.useEffect(E,[p,o,E]),s.useEffect(()=>{if(!o)return;const t=x=>{x.key==="Escape"&&f(!1)};return document.addEventListener("keydown",t),()=>document.removeEventListener("keydown",t)},[o]);const $=p.trim().length>0&&!b,D=s.useCallback(async()=>{const t=p.trim();if(!t||b)return;const x={id:h(),role:"user",content:t,timestamp:new Date},S=[...u,x];m(S),j(""),k(!0),w(Date.now());try{const v=await W(S);m(C=>[...C,{id:h(),role:"agent",content:v,timestamp:new Date}])}catch{m(v=>[...v,{id:h(),role:"agent",content:`Maaf, sambungan ke asisten sedang bermasalah.

Coba lagi sebentar lagi, atau hubungi it.support@baked.co.id.`,timestamp:new Date}])}finally{k(!1),w(Date.now()),y.current?.focus()}},[p,u,b]),B=s.useCallback(()=>{m([{id:h(),role:"agent",content:i,timestamp:new Date}]),j(""),k(!1),y.current?.focus()},[i]);return e.jsxs("div",{className:"bai-root fixed bottom-6 right-6 z-[60] flex flex-col items-end gap-3.5",children:[e.jsx("style",{children:`
.bai-root button{background:none;border:0;padding:0;margin:0;font:inherit;color:inherit;cursor:pointer;-webkit-appearance:none;appearance:none}
.bai-root button:disabled{cursor:default}
.bai-root textarea{border:0;outline:0;background:transparent;padding:0;margin:0;font:inherit;resize:none;-webkit-appearance:none;appearance:none}
.bai-root p{margin:0}
.bai-panel{animation:baiIn .26s cubic-bezier(.22,1,.36,1) both}
@keyframes baiIn{from{opacity:0;transform:translateY(14px) scale(.96)}to{opacity:1;transform:none}}
.bai-msg{animation:baiMsg .24s cubic-bezier(.22,1,.36,1) both}
@keyframes baiMsg{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}
.bai-dot{animation:baiDot 1.2s ease-in-out infinite}
@keyframes baiDot{0%,60%,100%{opacity:.3;transform:translateY(0)}30%{opacity:1;transform:translateY(-4px)}}
.bai-scroll{scrollbar-width:thin;scrollbar-color:rgba(255,255,255,.18) transparent}
.bai-scroll::-webkit-scrollbar{width:6px}
.bai-scroll::-webkit-scrollbar-thumb{background:rgba(255,255,255,.18);border-radius:999px}
@media (prefers-reduced-motion:reduce){
  .bai-panel,.bai-msg{animation:none}
  .bai-dot{animation:none;opacity:.55}
}
      `}),o&&e.jsxs("section",{role:"dialog","aria-modal":"false","aria-label":`Obrolan dengan ${n}`,className:"bai-panel flex w-[380px] max-w-[calc(100vw-32px)] flex-col overflow-hidden rounded-2xl shadow-2xl",style:{background:a.panel,color:a.text,height:"min(660px, calc(100vh - 120px))"},children:[e.jsxs("header",{className:"flex h-16 flex-none items-center gap-3 px-4",style:{background:a.header,borderBottom:`1px solid ${a.divider}`},children:[e.jsx("button",{type:"button",onClick:()=>f(!1),"aria-label":"Kembali",className:"flex h-8 w-8 flex-none items-center justify-center rounded-lg transition-colors duration-150 hover:bg-white/10",style:{color:a.meta},children:e.jsx(F,{size:20})}),e.jsx("span",{className:"flex h-9 w-9 flex-none items-center justify-center overflow-hidden rounded-full",style:{background:l?"transparent":a.accent},"aria-hidden":"true",children:l??e.jsx(ne,{})}),e.jsxs("span",{className:"flex min-w-0 flex-1 flex-col leading-tight",children:[e.jsx("strong",{className:"truncate text-[15px] font-semibold",style:{color:a.text},children:n}),e.jsx("small",{className:"truncate text-[13px]",style:{color:a.meta},children:r})]}),e.jsxs("div",{className:"flex flex-none items-center gap-2",children:[e.jsx("button",{type:"button",onClick:B,"aria-label":"Mulai obrolan baru",title:"Mulai obrolan baru",className:"flex h-8 w-8 items-center justify-center rounded-lg transition-colors duration-150 hover:bg-white/10",style:{color:a.meta},children:e.jsx(O,{size:20})}),e.jsx("button",{type:"button",onClick:()=>f(!1),"aria-label":"Tutup obrolan",className:"flex h-8 w-8 items-center justify-center rounded-lg transition-colors duration-150 hover:bg-white/10",style:{color:a.meta},children:e.jsx(M,{size:20})})]})]}),e.jsxs("div",{ref:N,className:"bai-scroll flex flex-1 flex-col gap-4 overflow-y-auto p-4",role:"log","aria-live":"polite",children:[u.map(t=>t.role==="agent"?e.jsxs("div",{className:"bai-msg flex flex-col items-start gap-1.5",children:[e.jsx(_,{background:a.agentBubble,color:a.text,children:t.content}),e.jsxs("span",{className:"pl-1 text-[12px]",style:{color:a.meta},children:[n," • AI Agent • ",Z(t.timestamp,I)]})]},t.id):e.jsx("div",{className:"bai-msg flex justify-end",children:e.jsx(_,{background:a.accent,color:a.text,children:t.content})},t.id)),b&&e.jsx("div",{className:"bai-msg flex justify-start",children:e.jsx("div",{className:"flex items-center gap-1.5 rounded-2xl px-4 py-[18px]",style:{background:a.agentBubble},"aria-label":`${n} sedang mengetik`,children:[0,1,2].map(t=>e.jsx("span",{className:"bai-dot block h-1.5 w-1.5 rounded-full",style:{background:a.meta,animationDelay:`${t*.15}s`}},t))})})]}),e.jsxs("form",{className:"flex-none px-4",onSubmit:t=>{t.preventDefault(),D()},children:[e.jsxs("div",{className:"rounded-xl p-3",style:{border:`1px solid ${a.composerBorder}`},children:[e.jsx("textarea",{ref:y,rows:1,value:p,onChange:t=>j(t.target.value),onKeyDown:t=>{t.key==="Enter"&&!t.shiftKey&&!t.nativeEvent.isComposing&&(t.preventDefault(),D())},placeholder:"Ajukan pertanyaan...","aria-label":`Pertanyaan untuk ${n}`,className:"block w-full max-h-[90px] overflow-y-auto text-[15px] leading-[1.5] placeholder:text-[#8E8E93]",style:{color:a.text}}),e.jsxs("div",{className:"mt-3 flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(g,{label:"Lampirkan berkas",children:e.jsx(V,{size:20})}),e.jsx(g,{label:"Emoji",children:e.jsx(G,{size:20})}),e.jsx(g,{label:"Kirim gambar",children:e.jsx(R,{size:20})}),e.jsx(g,{label:"Pesan suara",children:e.jsx(J,{size:20})})]}),e.jsx("button",{type:"submit",disabled:!$,"aria-label":"Kirim pesan",className:"flex h-9 w-9 flex-none items-center justify-center rounded-full transition-colors duration-150 disabled:opacity-50",style:{background:$?a.accent:a.sendIdle,color:a.text},children:e.jsx(K,{size:18})})]})]}),e.jsxs("p",{className:"py-3 text-center text-[12px]",style:{color:a.meta},children:["Dengan chat, Anda menyetujui"," ",e.jsx("a",{href:d,className:"underline underline-offset-2",style:{color:a.meta},children:"Kebijakan Privasi"})]})]})]}),e.jsx("button",{type:"button",onClick:()=>f(t=>!t),"aria-expanded":o,"aria-label":o?`Tutup obrolan dengan ${n}`:`Buka obrolan dengan ${n}`,className:"flex h-14 w-14 items-center justify-center rounded-full shadow-2xl transition-transform duration-200 hover:-translate-y-0.5",style:{background:a.accent,color:a.text},children:o?e.jsx(M,{size:24}):e.jsx(H,{size:24})})]})}function _({background:n,color:r,children:l}){const i=l.split(/\n{2,}/);return e.jsx("div",{className:"flex max-w-[85%] flex-col gap-3 rounded-2xl px-4 py-3.5 text-[15px] leading-[1.5]",style:{background:n,color:r},children:i.map((d,o)=>e.jsx("p",{className:"whitespace-pre-wrap break-words",children:d},o))})}function g({label:n,children:r}){return e.jsx("button",{type:"button",title:`${n} — belum tersedia`,"aria-label":`${n} (belum tersedia)`,className:"flex items-center justify-center transition-colors duration-150 hover:text-white",style:{color:a.meta},children:r})}function ne(){return e.jsxs("svg",{viewBox:"0 0 32 32",fill:"none",className:"h-5 w-5","aria-hidden":"true",children:[e.jsx("circle",{cx:"16",cy:"16",r:"5",fill:"#fff"}),e.jsx("circle",{cx:"16",cy:"4.8",r:"2.7",fill:"#fff"}),e.jsx("circle",{cx:"27.2",cy:"16",r:"2.7",fill:"#fff",opacity:".8"}),e.jsx("circle",{cx:"16",cy:"27.2",r:"2.7",fill:"#fff",opacity:".6"}),e.jsx("circle",{cx:"4.8",cy:"16",r:"2.7",fill:"#fff",opacity:".8"})]})}export{oe as default};
