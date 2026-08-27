import{c as d,j as e}from"./createLucideIcon.ByPYhPmd.js";import{r as i}from"./index.CVf8TyFT.js";/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],K=d("arrow-up",z);/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],L=d("chevron-left",T);/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]],O=d("ellipsis",F);/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],R=d("image",P);/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}]],q=d("message-circle",Y);/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H=[["path",{d:"M12 19v3",key:"npa21l"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["rect",{x:"9",y:"2",width:"6",height:"13",rx:"3",key:"s6n7sd"}]],J=d("mic",H);/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X=[["path",{d:"m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551",key:"1miecu"}]],G=d("paperclip",X);/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]],V=d("smile",U);/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],M=d("x",Q),t={panel:"#1C1C1E",header:"#232325",agentBubble:"#2E2E31",text:"#FFFFFF",meta:"#8E8E93",accent:"#E2572B",divider:"rgba(255,255,255,0.08)",composerBorder:"rgba(255,255,255,0.9)",sendIdle:"rgba(255,255,255,0.12)"};async function W(n){await new Promise(l=>setTimeout(l,900));const r=n[n.length-1]?.content??"";return`Pertanyaan Anda sudah saya terima, tapi asisten BAKEDAI belum tersambung ke server sehingga saya belum bisa menjawabnya.

Sementara ini silakan pakai pencarian di halaman utama, atau hubungi tim kami di it.support@baked.co.id.`}function Z(n,r){const l=Math.floor((r-n.getTime())/1e3);if(l<60)return"Baru saja";const o=Math.floor(l/60);if(o<60)return`${o} mnt lalu`;const u=Math.floor(o/60);return u<24?`${u} jam lalu`:`${Math.floor(u/24)} hr lalu`}let ee=0;const h=()=>`m${Date.now().toString(36)}${(ee++).toString(36)}`,I="bakedai:v2";function ae(){try{const n=sessionStorage.getItem(I);if(!n)return null;const r=JSON.parse(n);return Array.isArray(r?.messages)?r:null}catch{return null}}function te(n,r){try{const l={open:r,messages:n.map(o=>({...o,timestamp:o.timestamp.toISOString()}))};sessionStorage.setItem(I,JSON.stringify(l))}catch{}}function re({agentName:n="BAKEDAI",agentSubtitle:r="Tim kami juga siap membantu",agentAvatar:l,greeting:o=`Halo 👋

Anda sedang berbicara dengan BAKEDAI. Ada yang bisa dibantu seputar modul, laporan, atau alur kerja di BAKED?`,privacyHref:u="#"}){const[s,f]=i.useState(!1),[m,p]=i.useState([]),[x,k]=i.useState(""),[b,j]=i.useState(!1),[_,w]=i.useState(()=>Date.now()),N=i.useRef(null),y=i.useRef(null);i.useEffect(()=>{const a=ae();if(a&&a.messages.length>0){p(a.messages.map(c=>({...c,timestamp:new Date(c.timestamp)}))),f(a.open);return}p([{id:h(),role:"agent",content:o,timestamp:new Date}])},[o]),i.useEffect(()=>{m.length>0&&te(m,s)},[m,s]),i.useEffect(()=>{if(!s)return;const a=window.setInterval(()=>w(Date.now()),3e4);return()=>window.clearInterval(a)},[s]),i.useEffect(()=>{const a=N.current;a&&(a.scrollTop=a.scrollHeight)},[m,b,s]);const E=i.useCallback(()=>{const a=y.current;a&&(a.style.height="auto",a.style.height=`${Math.min(a.scrollHeight,90)}px`)},[]);i.useEffect(E,[x,s,E]),i.useEffect(()=>{if(!s)return;const a=window.matchMedia("(max-width: 640px)"),c=()=>document.body.classList.toggle("bai-lock",a.matches);return c(),a.addEventListener("change",c),()=>{a.removeEventListener("change",c),document.body.classList.remove("bai-lock")}},[s]),i.useEffect(()=>{if(!s)return;const a=c=>{c.key==="Escape"&&f(!1)};return document.addEventListener("keydown",a),()=>document.removeEventListener("keydown",a)},[s]);const S=x.trim().length>0&&!b,$=i.useCallback(async()=>{const a=x.trim();if(!a||b)return;const c={id:h(),role:"user",content:a,timestamp:new Date},D=[...m,c];p(D),k(""),j(!0),w(Date.now());try{const v=await W(D);p(B=>[...B,{id:h(),role:"agent",content:v,timestamp:new Date}])}catch{p(v=>[...v,{id:h(),role:"agent",content:`Maaf, sambungan ke asisten sedang bermasalah.

Coba lagi sebentar lagi, atau hubungi it.support@baked.co.id.`,timestamp:new Date}])}finally{j(!1),w(Date.now()),y.current?.focus()}},[x,m,b]),C=i.useCallback(()=>{p([{id:h(),role:"agent",content:o,timestamp:new Date}]),k(""),j(!1),y.current?.focus()},[o]);return e.jsxs("div",{className:"bai-root fixed bottom-6 right-6 z-[60] flex flex-col items-end gap-3.5","data-open":s?"":void 0,children:[e.jsx("style",{children:`
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
/* --- Mobile: panel penuh layar --- */
@media (max-width:640px){
  /* !important dipakai karena lebar & tinggi versi desktop ditulis sebagai
     inline style pada elemen <section>, dan inline style menang atas aturan
     CSS biasa. Nilai desktop sendiri tidak diubah sama sekali. */
  .bai-panel{
    position:fixed;
    inset:0;
    width:100%!important;
    max-width:none!important;
    height:100%!important;
    border-radius:0;
    /* Aman untuk poni & home indicator iOS. */
    padding-top:env(safe-area-inset-top);
    padding-bottom:env(safe-area-inset-bottom);
    /* Skala 0.96 terasa aneh pada elemen sepenuh layar; diganti geser naik
       saja. Durasi & easing tetap sama seperti desktop (260ms). */
    animation-name:baiInFull;
  }
  @keyframes baiInFull{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:none}}
  /* Tombol bulat tidak perlu mengambang di atas panel yang sudah penuh layar;
     penutupnya sudah ada di header (chevron + X) dan tombol Escape. */
  .bai-root[data-open] .bai-launcher{display:none}
}
/* Latar tidak ikut ter-scroll saat panel penuh layar. Kelas SENGAJA terpisah
   dari .spot-lock milik Spotlight supaya keduanya tidak saling mencabut. */
body.bai-lock{overflow:hidden}

@media (prefers-reduced-motion:reduce){
  .bai-panel,.bai-msg{animation:none}
  .bai-dot{animation:none;opacity:.55}
}
      `}),s&&e.jsxs("section",{role:"dialog","aria-modal":"false","aria-label":`Obrolan dengan ${n}`,className:"bai-panel flex w-[380px] max-w-[calc(100vw-32px)] flex-col overflow-hidden rounded-2xl shadow-2xl",style:{background:t.panel,color:t.text,height:"min(660px, calc(100vh - 120px))"},children:[e.jsxs("header",{className:"flex h-16 flex-none items-center gap-3 px-4",style:{background:t.header,borderBottom:`1px solid ${t.divider}`},children:[e.jsx("button",{type:"button",onClick:()=>f(!1),"aria-label":"Kembali",className:"flex h-8 w-8 flex-none items-center justify-center rounded-lg transition-colors duration-150 hover:bg-white/10",style:{color:t.meta},children:e.jsx(L,{size:20})}),e.jsx("span",{className:"flex h-9 w-9 flex-none items-center justify-center overflow-hidden rounded-full",style:{background:l?"transparent":t.accent},"aria-hidden":"true",children:l??e.jsx(ne,{})}),e.jsxs("span",{className:"flex min-w-0 flex-1 flex-col leading-tight",children:[e.jsx("strong",{className:"truncate text-[15px] font-semibold",style:{color:t.text},children:n}),e.jsx("small",{className:"truncate text-[13px]",style:{color:t.meta},children:r})]}),e.jsxs("div",{className:"flex flex-none items-center gap-2",children:[e.jsx("button",{type:"button",onClick:C,"aria-label":"Mulai obrolan baru",title:"Mulai obrolan baru",className:"flex h-8 w-8 items-center justify-center rounded-lg transition-colors duration-150 hover:bg-white/10",style:{color:t.meta},children:e.jsx(O,{size:20})}),e.jsx("button",{type:"button",onClick:()=>f(!1),"aria-label":"Tutup obrolan",className:"flex h-8 w-8 items-center justify-center rounded-lg transition-colors duration-150 hover:bg-white/10",style:{color:t.meta},children:e.jsx(M,{size:20})})]})]}),e.jsxs("div",{ref:N,className:"bai-scroll flex flex-1 flex-col gap-4 overflow-y-auto p-4",role:"log","aria-live":"polite",children:[m.map(a=>a.role==="agent"?e.jsxs("div",{className:"bai-msg flex flex-col items-start gap-1.5",children:[e.jsx(A,{background:t.agentBubble,color:t.text,children:a.content}),e.jsxs("span",{className:"pl-1 text-[12px]",style:{color:t.meta},children:[n," • AI Agent • ",Z(a.timestamp,_)]})]},a.id):e.jsx("div",{className:"bai-msg flex justify-end",children:e.jsx(A,{background:t.accent,color:t.text,children:a.content})},a.id)),b&&e.jsx("div",{className:"bai-msg flex justify-start",children:e.jsx("div",{className:"flex items-center gap-1.5 rounded-2xl px-4 py-[18px]",style:{background:t.agentBubble},"aria-label":`${n} sedang mengetik`,children:[0,1,2].map(a=>e.jsx("span",{className:"bai-dot block h-1.5 w-1.5 rounded-full",style:{background:t.meta,animationDelay:`${a*.15}s`}},a))})})]}),e.jsxs("form",{className:"flex-none px-4",onSubmit:a=>{a.preventDefault(),$()},children:[e.jsxs("div",{className:"rounded-xl p-3",style:{border:`1px solid ${t.composerBorder}`},children:[e.jsx("textarea",{ref:y,rows:1,value:x,onChange:a=>k(a.target.value),onKeyDown:a=>{a.key==="Enter"&&!a.shiftKey&&!a.nativeEvent.isComposing&&(a.preventDefault(),$())},placeholder:"Ajukan pertanyaan...","aria-label":`Pertanyaan untuk ${n}`,className:"block w-full max-h-[90px] overflow-y-auto text-[15px] leading-[1.5] placeholder:text-[#8E8E93]",style:{color:t.text}}),e.jsxs("div",{className:"mt-3 flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(g,{label:"Lampirkan berkas",children:e.jsx(G,{size:20})}),e.jsx(g,{label:"Emoji",children:e.jsx(V,{size:20})}),e.jsx(g,{label:"Kirim gambar",children:e.jsx(R,{size:20})}),e.jsx(g,{label:"Pesan suara",children:e.jsx(J,{size:20})})]}),e.jsx("button",{type:"submit",disabled:!S,"aria-label":"Kirim pesan",className:"flex h-9 w-9 flex-none items-center justify-center rounded-full transition-colors duration-150 disabled:opacity-50",style:{background:S?t.accent:t.sendIdle,color:t.text},children:e.jsx(K,{size:18})})]})]}),e.jsxs("p",{className:"py-3 text-center text-[12px]",style:{color:t.meta},children:["Dengan chat, Anda menyetujui"," ",e.jsx("a",{href:u,className:"underline underline-offset-2",style:{color:t.meta},children:"Kebijakan Privasi"})]})]})]}),e.jsx("button",{type:"button",onClick:()=>f(a=>!a),"aria-expanded":s,"aria-label":s?`Tutup obrolan dengan ${n}`:`Buka obrolan dengan ${n}`,className:"bai-launcher flex h-14 w-14 items-center justify-center rounded-full shadow-2xl transition-transform duration-200 hover:-translate-y-0.5",style:{background:t.accent,color:t.text},children:s?e.jsx(M,{size:24}):e.jsx(q,{size:24})})]})}function A({background:n,color:r,children:l}){const o=l.split(/\n{2,}/);return e.jsx("div",{className:"flex max-w-[85%] flex-col gap-3 rounded-2xl px-4 py-3.5 text-[15px] leading-[1.5]",style:{background:n,color:r},children:o.map((u,s)=>e.jsx("p",{className:"whitespace-pre-wrap break-words",children:u},s))})}function g({label:n,children:r}){return e.jsx("button",{type:"button",title:`${n} — belum tersedia`,"aria-label":`${n} (belum tersedia)`,className:"flex items-center justify-center transition-colors duration-150 hover:text-white",style:{color:t.meta},children:r})}function ne(){return e.jsxs("svg",{viewBox:"0 0 32 32",fill:"none",className:"h-5 w-5","aria-hidden":"true",children:[e.jsx("circle",{cx:"16",cy:"16",r:"5",fill:"#fff"}),e.jsx("circle",{cx:"16",cy:"4.8",r:"2.7",fill:"#fff"}),e.jsx("circle",{cx:"27.2",cy:"16",r:"2.7",fill:"#fff",opacity:".8"}),e.jsx("circle",{cx:"16",cy:"27.2",r:"2.7",fill:"#fff",opacity:".6"}),e.jsx("circle",{cx:"4.8",cy:"16",r:"2.7",fill:"#fff",opacity:".8"})]})}export{re as default};
