const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../chunks/9n-AsbU_.js","../assets/codemirror.BxGrggsc.css"])))=>i.map(i=>d[i]);
import"../chunks/DsnmJJEf.js";import"../chunks/ClCs51fT.js";import{a as Ot,c as st,e as oe,s as Se,o as Te}from"../chunks/Bk1orO_z.js";import{h as ne,F as kt,x as Kt,l as s,aC as Pe,ak as Ut,al as Ft,am as ft,B as vt,A as Fe,D as Ce,C as Wt,a3 as Bt,M as Ze,ap as Dt,an as xe,a7 as xt,_ as Vt,w as Jt,av as P,aM as mt,aN as Ht,aq as St,ar as Yt,aO as qt,aP as We,O as Et,aQ as Xt,aR as Gt,z as Qt,aS as Zt,a6 as er,aT as tr,a0 as Ct,as as ot,j as B,at as it,m as ie,v as rr,K as nr,aU as ar,aV as sr,aW as or,aX as ir,aY as lr,W as lt,aZ as cr,V as et,t as je,a_ as jt,a$ as dr,J as Tt,aj as ur,b0 as fr,ax as vr,b1 as mr,p as ge,b2 as re,b3 as Ae,f as V,P as de,b4 as ct,Q as X,a as R,b as pe,aw as $,R as K,S as U,T as G,af as $e,U as Ee,b5 as gr,b6 as pr,n as dt,aL as Mt,ah as hr,b7 as _r}from"../chunks/0-x6UXGc.js";import{h as br}from"../chunks/D1wTEI1i.js";import{p as T,i as ee,b as we,s as ve,a as Oe,c as Be,d as yr,_ as wr}from"../chunks/Cw22_xh3.js";import{s as Ie,r as tt,a as kr}from"../chunks/BW9vknhr.js";import{i as he}from"../chunks/CBRJt6wB.js";import{w as Le}from"../chunks/owDEC3Fb.js";function At(r,e){return e}function xr(r,e,t){for(var n=r.items,a=[],o=e.length,i=0;i<o;i++)Zt(e[i].e,a,!0);var l=o>0&&a.length===0&&t!==null;if(l){var v=t.parentNode;er(v),v.append(t),n.clear(),ce(r,e[0].prev,e[o-1].next)}tr(a,()=>{for(var d=0;d<o;d++){var g=e[d];l||(n.delete(g.k),ce(r,g.prev,g.next)),Et(g.e,!l)}})}function $t(r,e,t,n,a,o=null){var i=r,l={flags:e,items:new Map,first:null};ne&&kt();var v=null,d=!1,g=new Map,x=Pe(()=>{var c=t();return Vt(c)?c:c==null?[]:xt(c)}),p,f;function m(){Sr(f,p,l,g,i,a,e,n,t),o!==null&&(p.length===0?v?St(v):v=Ze(()=>o(i)):v!==null&&Yt(v,()=>{v=null}))}Kt(()=>{f??=Ct,p=s(x);var c=p.length;if(d&&c===0)return;d=c===0;let k=!1;if(ne){var w=Ut(i)===Ft;w!==(c===0)&&(i=ft(),vt(i),Fe(!1),k=!0)}if(ne){for(var u=null,h,_=0;_<c;_++){if(Ce.nodeType===Wt&&Ce.data===Bt){i=Ce,k=!0,Fe(!1);break}var S=p[_],C=n(S,_);h=rt(Ce,l,u,null,S,C,_,a,e,t),l.items.set(C,h),u=h}c>0&&vt(ft())}if(ne)c===0&&o&&(v=Ze(()=>o(i)));else if(Dt()){var N=new Set,F=xe;for(_=0;_<c;_+=1){S=p[_],C=n(S,_);var b=l.items.get(C)??g.get(C);b?Lt(b,S,_):(h=rt(null,l,null,null,S,C,_,a,e,t,!0),g.set(C,h)),N.add(C)}for(const[M,L]of l.items)N.has(M)||F.skipped_effects.add(L.e);F.add_callback(m)}else m();k&&Fe(!0),s(x)}),ne&&(i=Ce)}function Sr(r,e,t,n,a,o,i,l,v){var d=e.length,g=t.items,x=t.first,p=x,f,m=null,c=[],k=[],w,u,h,_;for(_=0;_<d;_+=1){if(w=e[_],u=l(w,_),h=g.get(u),h===void 0){var S=n.get(u);if(S!==void 0){n.delete(u),g.set(u,S);var C=m?m.next:p;ce(t,m,S),ce(t,S,C),De(S,C,a),m=S}else{var N=p?p.e.nodes_start:a;m=rt(N,t,m,m===null?t.first:m.next,w,u,_,o,i,v)}g.set(u,m),c=[],k=[],p=m.next;continue}if(Lt(h,w,_),(h.e.f&We)!==0&&St(h.e),h!==p){if(f!==void 0&&f.has(h)){if(c.length<k.length){var F=k[0],b;m=F.prev;var M=c[0],L=c[c.length-1];for(b=0;b<c.length;b+=1)De(c[b],F,a);for(b=0;b<k.length;b+=1)f.delete(k[b]);ce(t,M.prev,L.next),ce(t,m,M),ce(t,L,F),p=F,m=L,_-=1,c=[],k=[]}else f.delete(h),De(h,p,a),ce(t,h.prev,h.next),ce(t,h,m===null?t.first:m.next),ce(t,m,h),m=h;continue}for(c=[],k=[];p!==null&&p.k!==u;)(p.e.f&We)===0&&(f??=new Set).add(p),k.push(p),p=p.next;if(p===null)continue;h=p}c.push(h),m=h,p=h.next}if(p!==null||f!==void 0){for(var A=f===void 0?[]:xt(f);p!==null;)(p.e.f&We)===0&&A.push(p),p=p.next;var I=A.length;if(I>0){var J=null;xr(t,A,J)}}r.first=t.first&&t.first.e,r.last=m&&m.e;for(var W of n.values())Et(W.e);n.clear()}function Lt(r,e,t,n){Ht(r.v,e),r.i=t}function rt(r,e,t,n,a,o,i,l,v,d,g){var x=(v&Xt)!==0,p=(v&Gt)===0,f=x?p?P(a,!1,!1):mt(a):a,m=(v&qt)===0?i:mt(i),c={i:m,v:f,k:o,a:null,e:null,prev:t,next:n};try{if(r===null){var k=document.createDocumentFragment();k.append(r=Jt())}return c.e=Ze(()=>l(r,f,m,d),ne),c.e.prev=t&&t.e,c.e.next=n&&n.e,t===null?g||(e.first=c):(t.next=c,t.e.next=c.e),n!==null&&(n.prev=c,n.e.prev=c.e),c}finally{}}function De(r,e,t){for(var n=r.next?r.next.e.nodes_start:t,a=e?e.e.nodes_start:t,o=r.e.nodes_start;o!==null&&o!==n;){var i=Qt(o);a.before(o),o=i}}function ce(r,e,t){e===null?r.first=t:(e.next=t,e.e.next=t&&t.e),t!==null&&(t.prev=e,t.e.prev=e&&e.e)}function nt(r,e,t,n,a){ne&&kt();var o=e.$$slots?.[t],i=!1;o===!0&&(o=e[t==="default"?"children":t],i=!0),o===void 0||o(r,i?()=>n:n)}function Er(r,e,t){ot(()=>{var n=B(()=>e(r,t?.())||{});if(t&&n?.update){var a=!1,o={};it(()=>{var i=t();ie(i),a&&rr(o,i)&&(o=i,n.update(i))}),a=!0}if(n?.destroy)return()=>n.destroy()})}function Nt(r){var e,t,n="";if(typeof r=="string"||typeof r=="number")n+=r;else if(typeof r=="object")if(Array.isArray(r)){var a=r.length;for(e=0;e<a;e++)r[e]&&(t=Nt(r[e]))&&(n&&(n+=" "),n+=t)}else for(t in r)r[t]&&(n&&(n+=" "),n+=t);return n}function Cr(){for(var r,e,t=0,n="",a=arguments.length;t<a;t++)(r=arguments[t])&&(e=Nt(r))&&(n&&(n+=" "),n+=e);return n}function jr(r){return typeof r=="object"?Cr(r):r??""}const gt=[...` 	
\r\f \v\uFEFF`];function Tr(r,e,t){var n=r==null?"":""+r;if(e&&(n=n?n+" "+e:e),t){for(var a in t)if(t[a])n=n?n+" "+a:a;else if(n.length)for(var o=a.length,i=0;(i=n.indexOf(a,i))>=0;){var l=i+o;(i===0||gt.includes(n[i-1]))&&(l===n.length||gt.includes(n[l]))?n=(i===0?"":n.substring(0,i))+n.substring(l+1):i=l}}return n===""?null:n}function Mr(r,e){return r==null?null:String(r)}function ae(r,e,t,n,a,o){var i=r.__className;if(ne||i!==t||i===void 0){var l=Tr(t,n,o);(!ne||l!==r.getAttribute("class"))&&(l==null?r.removeAttribute("class"):r.className=l),r.__className=t}else if(o&&a!==o)for(var v in o){var d=!!o[v];(a==null||d!==!!a[v])&&r.classList.toggle(v,d)}return o}function Ve(r,e,t,n){var a=r.__style;if(ne||a!==e){var o=Mr(e);(!ne||o!==r.getAttribute("style"))&&(o==null?r.removeAttribute("style"):r.style.cssText=o),r.__style=e}return n}const Ar=()=>performance.now(),fe={tick:r=>requestAnimationFrame(r),now:()=>Ar(),tasks:new Set};function zt(){const r=fe.now();fe.tasks.forEach(e=>{e.c(r)||(fe.tasks.delete(e),e.f())}),fe.tasks.size!==0&&fe.tick(zt)}function $r(r){let e;return fe.tasks.size===0&&fe.tick(zt),{promise:new Promise(t=>{fe.tasks.add(e={c:r,f:t})}),abort(){fe.tasks.delete(e)}}}function Ne(r,e){lt(()=>{r.dispatchEvent(new CustomEvent(e))})}function Lr(r){if(r==="float")return"cssFloat";if(r==="offset")return"cssOffset";if(r.startsWith("--"))return r;const e=r.split("-");return e.length===1?e[0]:e[0]+e.slice(1).map(t=>t[0].toUpperCase()+t.slice(1)).join("")}function pt(r){const e={},t=r.split(";");for(const n of t){const[a,o]=n.split(":");if(!a||o===void 0)break;const i=Lr(a.trim());e[i]=o.trim()}return e}const Nr=r=>r;function ht(r,e,t,n){var a=(r&ir)!==0,o=(r&lr)!==0,i=a&&o,l=(r&or)!==0,v=i?"both":a?"in":"out",d,g=e.inert,x=e.style.overflow,p,f;function m(){return lt(()=>d??=t()(e,n?.()??{},{direction:v}))}var c={is_global:l,in(){if(e.inert=g,!a){f?.abort(),f?.reset?.();return}o||p?.abort(),Ne(e,"introstart"),p=at(e,m(),f,1,()=>{Ne(e,"introend"),p?.abort(),p=d=void 0,e.style.overflow=x})},out(h){if(!o){h?.(),d=void 0;return}e.inert=!0,Ne(e,"outrostart"),f=at(e,m(),p,0,()=>{Ne(e,"outroend"),h?.()})},stop:()=>{p?.abort(),f?.abort()}},k=Ct;if((k.transitions??=[]).push(c),a&&Ot){var w=l;if(!w){for(var u=k.parent;u&&(u.f&nr)!==0;)for(;(u=u.parent)&&(u.f&ar)===0;);w=!u||(u.f&sr)!==0}w&&ot(()=>{B(()=>c.in())})}}function at(r,e,t,n,a){var o=n===1;if(cr(e)){var i,l=!1;return et(()=>{if(!l){var k=e({direction:o?"in":"out"});i=at(r,k,t,n,a)}}),{abort:()=>{l=!0,i?.abort()},deactivate:()=>i.deactivate(),reset:()=>i.reset(),t:()=>i.t()}}if(t?.deactivate(),!e?.duration)return a(),{abort:je,deactivate:je,reset:je,t:()=>n};const{delay:v=0,css:d,tick:g,easing:x=Nr}=e;var p=[];if(o&&t===void 0&&(g&&g(0,1),d)){var f=pt(d(0,1));p.push(f,f)}var m=()=>1-n,c=r.animate(p,{duration:v,fill:"forwards"});return c.onfinish=()=>{c.cancel();var k=t?.t()??1-n;t?.abort();var w=n-k,u=e.duration*Math.abs(w),h=[];if(u>0){var _=!1;if(d)for(var S=Math.ceil(u/16.666666666666668),C=0;C<=S;C+=1){var N=k+w*x(C/S),F=pt(d(N,1-N));h.push(F),_||=F.overflow==="hidden"}_&&(r.style.overflow="hidden"),m=()=>{var b=c.currentTime;return k+w*x(b/u)},g&&$r(()=>{if(c.playState!=="running")return!1;var b=m();return g(b,1-b),!0})}c=r.animate(h,{duration:u,fill:"forwards"}),c.onfinish=()=>{m=()=>n,g?.(n,1-n),a()}},{abort:()=>{c&&(c.cancel(),c.effect=null,c.onfinish=je)},deactivate:()=>{a=je},reset:()=>{n===0&&g?.(1,0)},t:()=>m()}}function zr(r,e,t=e){var n=new WeakSet;jt(r,"input",async a=>{var o=a?r.defaultValue:r.value;if(o=He(r)?Ye(o):o,t(o),xe!==null&&n.add(xe),await ur(),o!==(o=e())){var i=r.selectionStart,l=r.selectionEnd;r.value=o??"",l!==null&&(r.selectionStart=i,r.selectionEnd=Math.min(l,r.value.length))}}),(ne&&r.defaultValue!==r.value||B(e)==null&&r.value)&&(t(He(r)?Ye(r.value):r.value),xe!==null&&n.add(xe)),it(()=>{var a=e();if(r===document.activeElement){var o=fr??xe;if(n.has(o))return}He(r)&&a===Ye(r.value)||r.type==="date"&&!a&&!r.value||a!==r.value&&(r.value=a??"")})}const Je=new Set;function _t(r,e,t,n,a=n){var o=t.getAttribute("type")==="checkbox",i=r;let l=!1;if(e!==null)for(var v of e)i=i[v]??=[];i.push(t),jt(t,"change",()=>{var d=t.__value;o&&(d=bt(i,d,t.checked)),a(d)},()=>a(o?[]:null)),it(()=>{var d=n();if(ne&&t.defaultChecked!==t.checked){l=!0;return}o?(d=d||[],t.checked=d.includes(t.__value)):t.checked=dr(t.__value,d)}),Tt(()=>{var d=i.indexOf(t);d!==-1&&i.splice(d,1)}),Je.has(i)||(Je.add(i),et(()=>{i.sort((d,g)=>d.compareDocumentPosition(g)===4?-1:1),Je.delete(i)})),et(()=>{if(l){var d;if(o)d=bt(i,d,t.checked);else{var g=i.find(x=>x.checked);d=g?.__value}a(d)}})}function bt(r,e,t){for(var n=new Set,a=0;a<r.length;a+=1)r[a].checked&&n.add(r[a].__value);return t||n.delete(e),Array.from(n)}function He(r){var e=r.type;return e==="number"||e==="range"}function Ye(r){return r===""?null:+r}function me(r,e,t){var n=vr(r,e);n&&n.set&&(r[e]=t,Tt(()=>{r[e]=null}))}class ut{#e=new WeakMap;#t;#r;static entries=new WeakMap;constructor(e){this.#r=e}observe(e,t){var n=this.#e.get(e)||new Set;return n.add(t),this.#e.set(e,n),this.#n().observe(e,this.#r),()=>{var a=this.#e.get(e);a.delete(t),a.size===0&&(this.#e.delete(e),this.#t.unobserve(e))}}#n(){return this.#t??(this.#t=new ResizeObserver(e=>{for(var t of e){ut.entries.set(t.target,t);for(var n of this.#e.get(t.target)||[])n(t)}}))}}var Pr=new ut({box:"border-box"});function Re(r,e,t){var n=Pr.observe(r,()=>t(r[e]));ot(()=>(B(()=>t(r[e])),n))}function Ir(r,e){mr(window,["resize"],()=>lt(()=>e(window[r])))}function Rr(r,e,t){return r<e?e:r>t?t:r}var Or=V("<div></div>"),Kr=V('<div class="mousecatcher svelte-1smxu6s"></div>'),Ur=V('<div class="top svelte-1smxu6s"><div class="pane svelte-1smxu6s"><!></div> <div class="pane svelte-1smxu6s"><!></div> <!></div> <!>',1);function Fr(r,e){ge(e,!1);const t=P(),n=P(),a=P(),o=st();let i=T(e,"type",8),l=T(e,"pos",12,50),v=T(e,"fixed",8,!1),d=T(e,"buffer",8,40),g=T(e,"min",12),x=T(e,"max",12),p=P(),f=P();const m=P({});let c=P(!1);function k(A){const{top:I,left:J}=s(m).container.getBoundingClientRect(),W=i()==="vertical"?A.clientY-I:A.clientX-J;l(100*W/s(t)),o("change")}function w(A,I){const J=W=>{if(W.which!==1)return;W.preventDefault(),$(c,!0);const O=()=>{$(c,!1),window.removeEventListener("mousemove",I,!1),window.removeEventListener("mouseup",O,!1)};window.addEventListener("mousemove",I,!1),window.addEventListener("mouseup",O,!1)};return A.addEventListener("mousedown",J,!1),{destroy(){A.removeEventListener("mousedown",onmousedown,!1)}}}re(()=>(ie(i()),s(f),s(p)),()=>{$(t,i()==="vertical"?s(f):s(p))}),re(()=>(ie(d()),s(t)),()=>{g(100*(d()/s(t)))}),re(()=>ie(g()),()=>{x(100-g())}),re(()=>(ie(l()),ie(g()),ie(x())),()=>{l(Rr(l(),g(),x()))}),re(()=>ie(i()),()=>{$(n,i()==="horizontal"?"left":"top")}),re(()=>ie(i()),()=>{$(a,i()==="horizontal"?"width":"height")}),Ae(),he();var u=Ur(),h=de(u),_=K(h),S=K(_);nt(S,e,"a",{}),U(_);var C=G(_,2),N=K(C);nt(N,e,"b",{}),U(C);var F=G(C,2);{var b=A=>{var I=Or();Er(I,(J,W)=>w?.(J,W),()=>k),X(()=>{ae(I,1,`${i()??""} divider`,"svelte-1smxu6s"),Ve(I,`${s(n)??""}: calc(${l()??""}% - 8px)`)}),R(A,I)};ee(F,A=>{v()||A(b)})}U(h),we(h,A=>ct(m,s(m).container=A),()=>s(m)?.container);var M=G(h,2);{var L=A=>{var I=Kr();R(A,I)};ee(M,A=>{s(c)&&A(L)})}X(()=>{Ve(_,`${s(a)??""}: ${l()??""}%;`),Ve(C,`${s(a)??""}: ${100-l()}%;`)}),Re(h,"clientWidth",A=>$(p,A)),Re(h,"clientHeight",A=>$(f,A)),R(r,u),pe()}var Wr=V('<div class="uneditable svelte-1xfnsu5"> </div>'),Br=V('<span class="input-sizer svelte-1xfnsu5"> </span> <input/>',1),Dr=V('<span class="remove svelte-1xfnsu5"><svg width="12" height="12" viewBox="0 0 24 24" class="svelte-1xfnsu5"><line stroke="#999" x1="18" y1="6" x2="6" y2="18"></line><line stroke="#999" x1="6" y1="6" x2="18" y2="18"></line></svg></span>'),Vr=V('<div class="editable svelte-1xfnsu5" title="edit component name"> </div> <!>',1),Jr=V('<div role="button"><!></div>'),Hr=V('<button class="add-new svelte-1xfnsu5" title="add new component"><svg width="12" height="12" viewBox="0 0 24 24" class="svelte-1xfnsu5"><line stroke="#999" x1="12" y1="5" x2="12" y2="19"></line><line stroke="#999" x1="5" y1="12" x2="19" y2="12"></line></svg></button>'),Yr=V("<div><!> <!></div>"),qr=V('<div class="component-selector svelte-1xfnsu5"><!></div>');function Xr(r,e){ge(e,!1);const t=()=>ve(g,"$selected",a),n=()=>ve(s(d),"$components",a),[a,o]=Oe();let i=T(e,"handle_select",8),l=T(e,"funky",8),v=$e("REPL"),d=P(v.components),g=v.selected,x=v.request_focus,p=v.rebundle,f=P(null);function m(b){t()!==b&&($(f,null),i()(b))}function c(b){t()===b&&$(f,t())}function k(){const b=/(.+)\.(svelte|svx|js)$/.exec(t().name);Be(g,B(t).name=b?b[1]:t().name,B(t)),S(t())&&Be(g,B(t).name=t().name+"_1",B(t)),b&&b[2]&&Be(g,B(t).type=b[2],B(t)),$(f,null),i()(t()),yr($(d,s(d)),"$components",a),setTimeout(x),p()}function w(b){if(confirm(`Are you sure you want to delete ${b.name}.${b.type}?`)){const L=n().indexOf(b);~L?s(d).set(n().slice(0,L).concat(n().slice(L+1))):console.error("Could not find component! That's... odd"),i()(n()[L]||n()[n().length-1])}}function u(b){setTimeout(()=>{b.target.select()})}let h=1;function _(){const b={name:h++?`Component${h}`:"Component1",type:"svelte",source:""};$(f,b),setTimeout(()=>{document.getElementById(b.name).scrollIntoView(!1)}),s(d).update(M=>M.concat(b)),i()(b)}function S(b){return n().find(M=>M!==b&&M.name===b.name)}he();var C=qr(),N=K(C);{var F=b=>{var M=Yr();let L;var A=K(M);$t(A,1,n,At,(W,O,ue)=>{var E=Jr();let y;var z=K(E);{var le=Y=>{var Q=Wr(),be=K(Q);U(Q),X(()=>Se(be,`App.${s(O),B(()=>s(O).type)??""}`)),R(Y,Q)},_e=Y=>{var Q=Ee(),be=de(Q);{var ye=j=>{var H=Br(),q=de(H),Z=K(q,!0);U(q);var D=G(q,2);tt(D),gr(D),Ie(D,"spellcheck",!1);let se;X((te,ke)=>{Se(Z,te),se=ae(D,1,"svelte-1xfnsu5",null,se,ke)},[()=>(s(f),B(()=>s(f).name+(/\./.test(s(f).name)?"":`.${s(f).type}`))),()=>({duplicate:S(s(f))})]),zr(D,()=>s(f).name,te=>ct(f,s(f).name=te)),oe("focus",D,u),oe("blur",D,k),oe("keydown",D,te=>te.which===13&&!S(s(f))&&te.target.blur()),R(j,H)},Ke=j=>{var H=Vr(),q=de(H),Z=K(q);U(q);var D=G(q,2);{var se=te=>{var ke=Dr();oe("click",ke,()=>w(s(O))),R(te,ke)};ee(D,te=>{l()||te(se)})}X(()=>Se(Z,`${s(O),B(()=>s(O).name)??""}.${s(O),B(()=>s(O).type)??""}`)),oe("click",q,()=>c(s(O))),R(j,H)};ee(be,j=>{s(O)===s(f)?j(ye):j(Ke,!1)},!0)}R(Y,Q)};ee(z,Y=>{s(O),B(()=>s(O).name=="App"&&ue===0)?Y(le):Y(_e,!1)})}U(E),X(Y=>{Ie(E,"id",(s(O),B(()=>s(O).name))),y=ae(E,1,"button svelte-1xfnsu5",null,y,Y)},[()=>({active:s(O)===t(),funky:l()})]),oe("click",E,()=>m(s(O))),oe("dblclick",E,Y=>Y.stopPropagation()),R(W,E)});var I=G(A,2);{var J=W=>{var O=Hr();oe("click",O,_),R(W,O)};ee(I,W=>{l()||W(J)})}U(M),X(W=>L=ae(M,1,"file-tabs svelte-1xfnsu5",null,L,W),[()=>({funky:l()})]),oe("dblclick",M,_),R(b,M)};ee(N,b=>{n(),B(()=>n().length)&&b(F)})}U(C),R(r,C),pe(),o()}function Gr(r){const e=r-1;return e*e*e+1}function yt(r,{delay:e=0,duration:t=400,easing:n=Gr,axis:a="y"}={}){const o=getComputedStyle(r),i=+o.opacity,l=a==="y"?"height":"width",v=parseFloat(o[l]),d=a==="y"?["top","bottom"]:["left","right"],g=d.map(w=>`${w[0].toUpperCase()}${w.slice(1)}`),x=parseFloat(o[`padding${g[0]}`]),p=parseFloat(o[`padding${g[1]}`]),f=parseFloat(o[`margin${g[0]}`]),m=parseFloat(o[`margin${g[1]}`]),c=parseFloat(o[`border${g[0]}Width`]),k=parseFloat(o[`border${g[1]}Width`]);return{delay:e,duration:t,easing:n,css:w=>`overflow: hidden;opacity: ${Math.min(w*20,1)*i};${l}: ${w*v}px;padding-${d[0]}: ${w*x}px;padding-${d[1]}: ${w*p}px;margin-${d[0]}: ${w*f}px;margin-${d[1]}: ${w*m}px;border-${d[0]}-width: ${w*c}px;border-${d[1]}-width: ${w*k}px;min-${l}: 0`}}var Qr=V("<p> </p>"),Zr=V("<div><!></div>");function Me(r,e){ge(e,!1);const{navigate:t}=$e("REPL");let n=T(e,"kind",8),a=T(e,"details",8,null),o=T(e,"filename",8,null),i=T(e,"truncate",8);function l(f){let m=f.message||"[missing message]",c=[];return f.filename&&f.filename!==o()&&c.push(f.filename),f.start&&c.push(f.start.line,f.start.column),m+(c.length?` (${c.join(":")})`:"")}he();var v=Zr();let d;var g=K(v);{var x=f=>{var m=Qr();let c;var k=K(m,!0);U(m),X((w,u)=>{c=ae(m,1,"svelte-ob203",null,c,w),Se(k,u)},[()=>({navigable:a().filename}),()=>(ie(a()),B(()=>l(a())))]),oe("click",m,()=>t(a())),R(f,m)},p=f=>{var m=Ee(),c=de(m);nt(c,e,"default",{}),R(f,m)};ee(g,f=>{a()?f(x):f(p,!1)})}U(v),X(f=>d=ae(v,1,`message ${n()??""}`,"svelte-ob203",d,f),[()=>({truncate:i()})]),ht(1,v,()=>yt,()=>({delay:150,duration:100})),ht(2,v,()=>yt,()=>({duration:100})),R(r,v),pe()}var en=V('<pre style="position: absolute; left: 0; top: 0" class="svelte-1ess3xo"> </pre> <div style="position: absolute; width: 100%; bottom: 0"><!></div>',1),tn=V('<div><textarea tabindex="2" readonly="" class="svelte-1ess3xo"></textarea> <!></div>');function rn(r,e){ge(e,!1);const t=st();let n=T(e,"readonly",8,!1),a=T(e,"errorLoc",8,null),o=T(e,"flex",8,!1),i=T(e,"lineNumbers",8,!0),l=T(e,"tab",8,!0),v=P(),d=P(),g=P(""),x;async function p(E,y){y!==x&&await M(x=y),$(g,E),h=!0,s(u)&&s(u).setValue(s(g)),h=!1}function f(E){if($(g,E),s(u)){const{left:y,top:z}=s(u).getScrollInfo();s(u).setValue($(g,E)),s(u).scrollTo(y,z)}}function m(){s(u).refresh()}function c(){s(u).focus()}const k={js:{name:"javascript",json:!1},json:{name:"javascript",json:!0},svelte:{name:"handlebars",base:"text/html"},svx:{name:"gfm"}},w=P({});let u=P(),h=!1,_=P(),S=P(),C=!1,N=P(),F=P();Te(async()=>{if(s(N))M(x||"svelte").then(()=>{s(u)&&s(u).setValue(s(g)||"")});else{let E=await wr(()=>import("../chunks/9n-AsbU_.js"),__vite__mapDeps([0,1]),import.meta.url);$(N,E.default),await M(x||"svelte"),s(u)&&s(u).setValue(s(g)||"")}return()=>{C=!0,s(u)&&s(u).toTextArea()}});let b=!0;async function M(E){if(C||!s(N))return;s(u)&&s(u).toTextArea();const y={lineNumbers:i(),lineWrapping:!0,indentWithTabs:!0,indentUnit:2,tabSize:2,value:"",mode:k[E]||{name:E},readOnly:n(),autoCloseBrackets:!0,autoCloseTags:!0};l()||(y.extraKeys={Tab:l(),"Shift-Tab":l()}),b&&await L(50),!C&&($(u,s(N).fromTextArea(s(w).editor,y)),s(u).on("change",z=>{if(!h){const le=z.getValue();t("change",{value:le})}}),b&&await L(50),s(u).refresh(),b=!1)}function L(E){return new Promise(y=>setTimeout(y,E))}re(()=>(s(u),s(v),s(d)),()=>{s(u)&&s(v)&&s(d)&&s(u).refresh()}),re(()=>(s(_),ie(a()),s(u)),()=>{if(s(_)&&s(_).clear(),a()){const E=a().line-1,y=a().column;$(_,s(u).markText({line:E,ch:y},{line:E,ch:y+1},{className:"error-loc"})),$(S,E)}else $(S,null)}),re(()=>(s(u),s(F),s(S)),()=>{s(u)&&(s(F)!=null&&s(u).removeLineClass(s(F),"wrap","error-line"),s(S)&&s(S)!==s(F)&&(s(u).addLineClass(s(S),"wrap","error-line"),$(F,s(S))))}),Ae();var A={set:p,update:f,resize:m,focus:c};he();var I=tn();let J;var W=K(I);pr(W),we(W,E=>ct(w,s(w).editor=E),()=>s(w)?.editor);var O=G(W,2);{var ue=E=>{var y=en(),z=de(y),le=K(z,!0);U(z);var _e=G(z,2),Y=K(_e);Me(Y,{kind:"info",children:(Q,be)=>{dt();var ye=Mt("loading editor...");R(Q,ye)},$$slots:{default:!0}}),U(_e),X(()=>Se(le,s(g))),R(E,y)};ee(O,E=>{s(N)||E(ue)})}return U(I),X(E=>{J=ae(I,1,"codemirror-container svelte-1ess3xo",null,J,E),kr(W,s(g))},[()=>({flex:o()})]),Re(I,"offsetWidth",E=>$(v,E)),Re(I,"offsetHeight",E=>$(d,E)),R(r,I),me(e,"set",p),me(e,"update",f),me(e,"resize",m),me(e,"focus",c),pe(A)}var nn=V('<div class="editor-wrapper svelte-z5x83a"><div class="editor svelte-z5x83a"><!></div> <div class="info svelte-z5x83a"><!></div></div>');function an(r,e){ge(e,!1);const t=()=>ve(i,"$bundle",a),n=()=>ve(l,"$selected",a),[a,o]=Oe(),{bundle:i,selected:l,handle_change:v,register_module_editor:d}=$e("REPL");let g=T(e,"errorLoc",8),x=P();Te(()=>{d(s(x))});function p(){s(x).focus()}var f={focus:p};he();var m=nn(),c=K(m),k=K(c);we(rn(k,{get errorLoc(){return g()},lineNumbers:!1,$$events:{change:v},$$legacy:!0}),S=>$(x,S),()=>s(x)),U(c);var w=G(c,2),u=K(w);{var h=S=>{var C=Ee(),N=de(C);{var F=M=>{Me(M,{kind:"error",get details(){return t(),B(()=>t().error)},get filename(){return`${n(),B(()=>n().name)??""}.${n(),B(()=>n().type)??""}`}})},b=M=>{var L=Ee(),A=de(L);{var I=J=>{var W=Ee(),O=de(W);$t(O,1,()=>(t(),B(()=>t().warnings)),At,(ue,E)=>{Me(ue,{kind:"warning",get details(){return s(E)},get filename(){return`${n(),B(()=>n().name)??""}.${n(),B(()=>n().type)??""}`}})}),R(J,W)};ee(A,J=>{t(),B(()=>t().warnings.length>0)&&J(I)},!0)}R(M,L)};ee(N,M=>{t(),B(()=>t().error)?M(F):M(b,!1)})}R(S,C)};ee(u,S=>{t()&&S(h)})}U(w),U(m),R(r,m),me(e,"focus",p);var _=pe(f);return o(),_}var Pt={},wt="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";for(var ze=0;ze<wt.length;ze++)Pt[wt.charCodeAt(ze)]=ze;function sn(r){for(var e=[],t=[],n=[0,0,0,0,0],a=0,o=0,i=0,l=0;o<r.length;o++){var v=r.charCodeAt(o);if(v===44)qe(t,n,a),a=0;else if(v===59)qe(t,n,a),a=0,e.push(t),t=[],n[0]=0;else{var d=Pt[v];if(d===void 0)throw new Error("Invalid character ("+String.fromCharCode(v)+")");var g=d&32;if(d&=31,l+=d<<i,g)i+=5;else{var x=l&1;l>>>=1,x&&(l=l===0?-2147483648:-l),n[a]+=l,a++,l=i=0}}}return qe(t,n,a),e.push(t),e}function qe(r,e,t){t===4?r.push([e[0],e[1],e[2],e[3]]):t===5?r.push([e[0],e[1],e[2],e[3],e[4]]):t===1&&r.push([e[0]])}function on(r,e){if(!r)return;const t=r.split(`
`)[1],n=/<anonymous>:(\d+):(\d+)\)$/.exec(t);if(!n)return null;const a=+n[1],o=+n[2];return ln({line:a,column:o},e)}function ln(r,e){const n=sn(e.mappings)[r.line-1];for(let a=0;a<n.length;a+=1){const o=n[a];if(o[0]===r.column){const[,i,l,v]=o;return{source:e.sources[i].slice(2),line:l+1,column:v}}}return null}let cn=1;class dn{constructor(e,t){this.iframe=e,this.handlers=t,this.pending_cmds=new Map,this.handle_event=n=>this.handle_repl_message(n),window.addEventListener("message",this.handle_event,!1)}destroy(){window.removeEventListener("message",this.handle_event)}iframe_command(e,t){return new Promise((n,a)=>{const o=cn++;this.pending_cmds.set(o,{resolve:n,reject:a}),this.iframe.contentWindow.postMessage({action:e,cmd_id:o,args:t},"*")})}handle_command_message(e){let t=e.action,n=e.cmd_id,a=this.pending_cmds.get(n);if(a){if(this.pending_cmds.delete(n),t==="cmd_error"){let{message:o,stack:i}=e,l=new Error(o);l.stack=i,a.reject(l)}t==="cmd_ok"&&a.resolve(e.args)}else console.error("command not found",n,e,[...this.pending_cmds.keys()])}handle_repl_message(e){if(e.source!==this.iframe.contentWindow)return;const{action:t,args:n}=e.data;switch(t){case"cmd_error":case"cmd_ok":return this.handle_command_message(e.data);case"fetch_progress":return this.handlers.on_fetch_progress(n.remaining);case"error":return this.handlers.on_error(e.data);case"unhandledrejection":return this.handlers.on_unhandled_rejection(e.data);case"console":return this.handlers.on_console(e.data)}}eval(e){return this.iframe_command("eval",{script:e})}handle_links(){return this.iframe_command("catch_clicks",{})}}const un=`<!doctype html><html><head><style>html, body {position: relative;width: 100%;height: 100%;}body {color: #333;margin: 0;padding: 8px 20px;box-sizing: border-box;font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;}a {color: rgb(0,100,200);text-decoration: none;}a:hover {text-decoration: underline;}a:visited {color: rgb(0,80,160);}label {display: block;}input, button, select, textarea {font-family: inherit;font-size: inherit;padding: 0.4em;margin: 0 0 0.5em 0;box-sizing: border-box;border: 1px solid #ccc;border-radius: 2px;}input:disabled {color: #ccc;}input[type="range"] {height: 0;}button {color: #333;background-color: #f4f4f4;outline: none;}button:active {background-color: #ddd;}button:focus {border-color: #666;} p:last-child{margin-bottom: 30px;}</style><script>(function(){function handle_message(ev) {let { action, cmd_id } = ev.data;const send_message = (payload) => parent.postMessage( { ...payload }, ev.origin);const send_reply = (payload) => send_message({ ...payload, cmd_id });const send_ok = () => send_reply({ action: 'cmd_ok' });const send_error = (message, stack) => send_reply({ action: 'cmd_error', message, stack });if (action === 'eval') {try {const { script } = ev.data.args;eval(script);send_ok();} catch (e) {send_error(e.message, e.stack);}}if (action === 'catch_clicks') {try {const top_origin = ev.origin;document.body.addEventListener('click', event => {if (event.which !== 1) return;if (event.metaKey || event.ctrlKey || event.shiftKey) return;if (event.defaultPrevented) return;let el = event.target;while (el && el.nodeName !== 'A') el = el.parentNode;if (!el || el.nodeName !== 'A') return;if (el.hasAttribute('download') || el.getAttribute('rel') === 'external' || el.target) return;event.preventDefault();if (el.href.startsWith(top_origin)) {const url = new URL(el.href);if (url.hash[0] === '#') {window.location.hash = url.hash;return;}}window.open(el.href, '_blank');});send_ok();} catch(e) {send_error(e.message, e.stack);}}}window.addEventListener('message', handle_message, false);window.onerror = function (msg, url, lineNo, columnNo, error) {parent.postMessage({ action: 'error', value: error }, '*');};window.addEventListener("unhandledrejection", event => {parent.postMessage({ action: 'unhandledrejection', value: event.reason }, '*');});}).call(this);let previous = { level: null, args: null };['clear', 'log', 'info', 'dir', 'warn', 'error'].forEach((level) => {const original = console[level];console[level] = (...args) => {if (previous.level === level &&previous.args.length === args.length &&previous.args.every((a, i) => a === args[i])) {parent.postMessage({ action: 'console', level, duplicate: true }, '*');} else {previous = { level, args };try {parent.postMessage({ action: 'console', level, args }, '*');} catch (err) {parent.postMessage({ action: 'console', level: 'unclonable' }, '*');}}original(...args);}})<\/script></head><body></body></html>`;var fn=V('<div class="iframe-container svelte-4sgaba"><div style="height: 100%"><iframe title="Result"></iframe></div> <div class="overlay svelte-4sgaba"><!></div></div>');function vn(r,e){ge(e,!1);const t=()=>ve(i,"$bundle",n),[n,a]=Oe(),o=P(),{bundle:i}=$e("REPL");let l=T(e,"error",12),v=[];function d(y,z){w&&w.setProp(y,z)}let g=T(e,"status",8),x=T(e,"relaxed",8,!1),p=T(e,"injectedJS",8,""),f=T(e,"injectedCSS",8,""),m=P(),c=P(0),k=!1,w=null,u=P(!1),h=P(!1),_;Te(()=>(w=new dn(s(m),{on_fetch_progress:y=>{$(c,y)},on_error:y=>{N({level:"error",args:[y.value]})},on_unhandled_rejection:y=>{let z=y.value;typeof z=="string"&&(z={message:z}),z.message="Uncaught (in promise): "+z.message,N({level:"error",args:[z]})},on_console:y=>{if(y.level==="clear")v=[y];else if(y.duplicate){const z=v[v.length-1];z?(z.count=(z.count||1)+1,v=v):(_.count=1,v=[_])}else N(y),_=y}}),s(m).addEventListener("load",()=>{w.handle_links(),$(u,!0)}),()=>{w.destroy()}));async function S(y){if(console.log("SDF:::::::::::",y),!(!y||y.error)){try{F(),await w.eval(`
				${p()}

				${s(o)}

				const styles = document.querySelectorAll('style[id^=svelte-]');

				${y.dom.code}

				let i = styles.length;
				while (i--) styles[i].parentNode.removeChild(styles[i]);

				if (window.component) {
					try {
						window.component.$destroy();
					} catch (err) {
						console.error(err);
					}
				}

				document.body.innerHTML = '';
				window.location.hash = '';
				window._svelteTransitionManager = null;

				window.component = new SvelteComponent.default({
					target: document.body
				});
			`),l(null)}catch(z){C(z)}$(h,!0)}}function C(y){const z=on(y.stack,t().dom.map);z&&(y.filename=z.source,y.loc={line:z.line,column:z.column}),l(y)}function N(y){v=[...v,y]}function F(){v=[]}Te(()=>{s(m)&&($(u,!0),console.log("SKKKKKKKKKKKKKKKKKKK"))}),re(()=>(s(u),t()),()=>{s(u)&&(console.log("123"),S(t()))}),re(()=>ie(f()),()=>{$(o,f()&&`{
		const style = document.createElement('style');
		style.textContent = ${JSON.stringify(f())};
		document.head.appendChild(style);
	}`)}),Ae();var b={setProp:d};he();var M=fn(),L=K(M),A=K(L);let I;we(A,y=>$(m,y),()=>s(m)),U(L);var J=G(L,2),W=K(J);{var O=y=>{Me(y,{kind:"error",get details(){return l()}})},ue=y=>{var z=Ee(),le=de(z);{var _e=Y=>{Me(Y,{kind:"info",truncate:!0,children:(Q,be)=>{dt();var ye=Mt();X(()=>Se(ye,g()||"loading Svelte compiler...")),R(Q,ye)},$$slots:{default:!0}})};ee(le,Y=>{(g()||!t())&&Y(_e)},!0)}R(y,z)};ee(W,y=>{l()?y(O):y(ue,!1)})}U(J),U(M),X(y=>{Ie(A,"sandbox",`allow-popups-to-escape-sandbox allow-scripts allow-popups
      allow-forms allow-pointer-lock allow-top-navigation allow-modals ${x()?"allow-same-origin":""}`),I=ae(A,1,jr(l()||k||s(c)?"greyed-out":""),"svelte-4sgaba",I,y),Ie(A,"srcdoc",un)},[()=>({inited:s(h)})]),R(r,M),me(e,"setProp",d);var E=pe(b);return a(),E}const Xe=new Map;let mn=1;class gn{constructor(e,t){if(!Xe.has(t)){const n=new Worker(`${e}/compiler.js`);n.postMessage({type:"init",svelteUrl:t}),Xe.set(t,n)}this.worker=Xe.get(t),this.handlers=new Map,this.worker.addEventListener("message",n=>{const a=this.handlers.get(n.data.id);a&&(a(n.data.result),this.handlers.delete(n.data.id))})}compile(e,t){return new Promise(n=>{const a=mn++;this.handlers.set(a,n),this.worker.postMessage({id:a,type:"compile",source:e.source,options:Object.assign({name:e.name,filename:`${e.name}.svelte`},t),entry:e.name==="App"})})}destroy(){this.worker.terminate()}}const It=typeof window<"u";var pn=V("<div><!></div>");function hn(r,e){ge(e,!1);const{register_output:t}=$e("REPL");let n=T(e,"svelteUrl",8),a=T(e,"workersUrl",8),o=T(e,"status",8),i=T(e,"runtimeError",12,null),l=T(e,"relaxed",8,!1),v=T(e,"injectedJS",8),d=T(e,"injectedCSS",12),g=T(e,"funky",8,!1);d("code[class*=language-],pre[class*=language-]{color:#657b83;font-family:Consolas,Monaco,'Andale Mono','Ubuntu Mono',monospace;font-size:0.9em;text-align:left;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;hyphens:none}code[class*=language-] ::-moz-selection,code[class*=language-]::-moz-selection,pre[class*=language-] ::-moz-selection,pre[class*=language-]::-moz-selection{background:#073642}code[class*=language-] ::selection,code[class*=language-]::selection,pre[class*=language-] ::selection,pre[class*=language-]::selection{background:#073642}pre[class*=language-]{padding:1em;margin:.5em 0;overflow:auto;border-radius:.3em}:not(pre)>code[class*=language-],pre[class*=language-]{background-color:#fdf6e3}:not(pre)>code[class*=language-]{padding:.1em;border-radius:.3em}.token.cdata,.token.comment,.token.doctype,.token.prolog{color:#93a1a1}.token.punctuation{color:#586e75}.token.namespace{opacity:.7}.token.boolean,.token.constant,.token.deleted,.token.number,.token.property,.token.symbol,.token.tag{color:#268bd2}.token.attr-name,.token.builtin,.token.char,.token.inserted,.token.selector,.token.string,.token.url{color:#2aa198}.token.entity{color:#657b83;background:#eee8d5}.token.atrule,.token.attr-value,.token.keyword{color:#859900}.token.class-name,.token.function{color:#b58900}.token.important,.token.regex,.token.variable{color:#cb4b16}.token.bold,.token.important{font-weight:700}.token.italic{font-style:italic}.token.entity{cursor:help}"),t({set:async(u,h)=>{if(u.type==="js"){f.set("/* Select a component to see its compiled code */"),m.set("/* Select a component to see its compiled code */");return}const _=await x.compile(u,h);f&&(f.set(_.js,"js"),m.set(_.css,"css"))},update:async(u,h)=>{if(u.type==="js")return;const _=await x.compile(u,h);console.log(f,u,h,_),f&&(f.update(_.js),m.update(_.css))}});const x=It&&new gn(a(),n());let p=P(),f,m,c="result";he();var k=pn();ae(k,1,"tab-content svelte-1150kr0",null,{},{visible:c==="result"});var w=K(k);we(vn(w,{get funky(){return g()},get status(){return o()},get relaxed(){return l()},get injectedJS(){return v()},get injectedCSS(){return d()},get error(){return i()},set error(u){i(u)},$$legacy:!0}),u=>$(p,u),()=>s(p)),U(k),R(r,k),pe()}const Ge=new Map;let Qe=1;class _n{constructor({workersUrl:e,packagesUrl:t,svelteUrl:n,onstatus:a}){const o=`${t}:${n}`;if(!Ge.has(o)){const i=new Worker(`${e}/bundler.js`);i.postMessage({type:"init",packagesUrl:t,svelteUrl:n}),Ge.set(o,i)}this.worker=Ge.get(o),this.handlers=new Map,this.worker.addEventListener("message",i=>{const l=this.handlers.get(i.data.uid);if(l){if(i.data.type==="status"){a(i.data.message);return}a(null),l(i.data),this.handlers.delete(i.data.uid)}})}bundle(e){return new Promise(t=>{this.handlers.set(Qe,t),this.worker.postMessage({uid:Qe,type:"bundle",components:e}),Qe+=1})}destroy(){this.worker.terminate()}}var bn=V('<section slot="a"><!> <!></section>'),yn=V('<section slot="b" class="svelte-ma7wd7"><!></section>'),wn=V("<div><!></div>");function kn(r,e){ge(e,!1);const t=()=>ve(F,"$bundle",i),n=()=>ve(C,"$components",i),a=()=>ve(N,"$selected",i),o=()=>ve(b,"$compile_options",i),[i,l]=Oe();let v=T(e,"workersUrl",8),d=T(e,"packagesUrl",8,"https://unpkg.com"),g=T(e,"svelteUrl",24,()=>`${d()}/svelte@3.59.2`),x=T(e,"orientation",8,"columns"),p=T(e,"relaxed",8,!1),f=T(e,"fixed",8,!1),m=T(e,"fixedPos",8,50),c=T(e,"injectedJS",8,""),k=T(e,"injectedCSS",12,""),w=T(e,"funky",8,!1);function u(){return{imports:t().imports,components:n()}}async function h(j){C.set(j.components),N.set(j.components[0]),I(),await W,await ue,k(j.css||""),M.set(a().source,a().type),s(L).set(a(),o())}function _(j){const{name:H,type:q}=a()||{};C.set(j.components);const Z=j.components.find(D=>D.name===H&&D.type===q);N.set(Z||j.components[0]),k(j.css||""),Z?(M.update(Z.source),s(L).update(Z,o())):(M.set(Z.source,Z.type),s(L).set(Z,o()))}if(!v())throw new Error("You must supply workersUrl prop to <Repl>");const S=st(),C=Le([]),N=Le(null),F=Le(null),b=Le({generate:"dom",dev:!1,css:!1,hydratable:!1,customElement:!1,immutable:!1,legacy:!1});let M,L=P(),A;async function I(){const j=A={};console.log(j,A,":::<<<<<<<<");const H=await _e.bundle(n());console.log(H,j,A,":::<<<<<<<<"),H&&j===A&&F.set(H)}let J,W=new Promise(j=>J=j),O,ue=new Promise(j=>O=j);hr("REPL",{components:C,selected:N,bundle:F,compile_options:b,rebundle:I,navigate:j=>{const H=/^(.+)\.(\w+)$/.exec(j.filename);if(!H)return;const[,q,Z]=H,D=n().find(se=>se.name===q&&se.type===Z);E(D)},handle_change:j=>{N.update(H=>(H.source=j.detail.value,H)),C.update(H=>H),s(L).update(a(),o()),I(),S("change",{components:n()})},register_module_editor(j){M=j,J()},register_output(j){$(L,j),O()},request_focus(){M.focus()}});function E(j){N.set(j),M.set(j.source,j.type),s(L).set(a(),o())}let y=P(),z,le=P(null);const _e=It&&new _n({workersUrl:v(),packagesUrl:d(),svelteUrl:g(),onstatus:j=>{$(le,j)}});re(()=>(s(L),a(),o()),()=>{s(L)&&a()&&s(L).update(a(),o())}),Ae();var Y={toJSON:u,set:h,update:_};he();var Q=wn();let be;var ye=K(Q);{let j=Pe(()=>x()==="rows"?"vertical":"horizontal"),H=Pe(()=>f()?m():(x()==="rows",50));Fr(ye,{get type(){return s(j)},get pos(){return s(H)},get fixed(){return f()},$$slots:{a:(q,Z)=>{var D=bn();let se;var te=K(D);Xr(te,{handle_select:E,get funky(){return w()}});var ke=G(te,2);{let Ue=Pe(()=>z);we(an(ke,{get errorLoc(){return s(Ue)},$$legacy:!0}),Rt=>$(y,Rt),()=>s(y))}U(D),X(Ue=>se=ae(D,1,"svelte-ma7wd7",null,se,Ue),[()=>({funky:w()})]),R(q,D)},b:(q,Z)=>{var D=yn(),se=K(D);hn(se,{walk:!0,get funky(){return w()},get svelteUrl(){return g()},get workersUrl(){return v()},get status(){return s(le)},get relaxed(){return p()},get injectedJS(){return c()},get injectedCSS(){return k()}}),U(D),R(q,D)}}})}U(Q),X(j=>be=ae(Q,1,"repl_top svelte-ma7wd7",null,be,j),[()=>({orientation:x()})]),R(r,Q),me(e,"toJSON",u),me(e,"set",h),me(e,"update",_);var Ke=pe(Y);return l(),Ke}const xn=`---
title: Svex up your markdown
count: 25
color: cadetblue
list: [1, 2, 3, 4, "boo"]

---

<script>
	import Boinger from './Boinger.svelte';
	import Section from './Section.svx';
	import Count from './Count.svelte';
  import Seriously from './Seriously.svelte';

	let number = 45;
<\/script>

# { title }

## Good stuff in your markdown

Markdown is pretty good but sometimes you just need more.

Sometimes you need a boinger like this:

<Boinger color="{ color }"/>

Not many people have a boinger right in their markdown.

## Markdown in your markdown

Sometimes what you wrote last week is so good that you just *have* to include it again.

I'm not gonna stand in the way of your egomania.
>
><Section />
> <Count />
>
>— *Me, May 2019*

Yeah, thats right you can put wigdets in markdown (\`.svx\` files or otherwise). You can put markdown in widgets too.

<Seriously>

### I wasn't joking

\`\`\`
	This is real life
\`\`\`

</Seriously>

Sometimes you need your widgets **inlined** (like this:<Count count="{number}"/>) because why shouldn't you.
Obviously you have access to values defined in YAML (namespaced under \`metadata\`) and anything defined in an fenced \`js exec\` block can be referenced directly.

Normal markdown stuff works too:

| like  | this |
|-------|------|
| table | here |

And *this* and **THIS**. And other stuff. You can also use all your favorite Svelte features, like \`each\` blocks:

<ul>
{#each list as item}
  <li>{item}</li>
{/each}
</ul>

and all the other good Svelte stuff.

`,Sn=`
<script>
	import { flip } from 'svelte/animate';
  import { crossfade, scale } from 'svelte/transition';

	export let color = 'pink';

  const [send, receive] = crossfade({fallback: scale})

  let boingers = [
		{val: 1, boinged: true},
		{val: 2, boinged: true},
		{val: 3, boinged: false},
		{val: 4, boinged: true},
		{val: 5, boinged: false}
	];

  function toggleBoing (id){
		const index = boingers.findIndex(v => v.val === id);
		boingers[index].boinged = !boingers[index].boinged
	}
<\/script>

<div class="container">

	<div class="boingers">
		{#each boingers.filter(v => !v.boinged) as {val} (val)}

			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div animate:flip
					 in:receive="{{key: val}}"
					 out:send="{{key: val}}"
					 style="background:{color};"
					 on:click="{() => toggleBoing(val)}">{val}</div>
		{/each}
  </div>

	<div class="boingers">
		{#each boingers.filter(v => v.boinged) as {val} (val)}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div animate:flip
					 in:receive="{{key: val}}"
					 out:send="{{key: val}}"
					 style="background:{color};"
					 on:click="{() => toggleBoing(val)}">{val}</div>
		{/each}
  </div>

</div>

<style>
	.container {
		width: 300px;
		height: 200px;
		display: flex;
		justify-content: space-between;
  }

	.boingers {
		display: grid;
		grid-template-rows: repeat(3, 1fr);
		grid-template-columns: repeat(2, 1fr);
		grid-gap: 10px;
  }

	.boingers div {
		width: 50px;
		height: 50px;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #eee;
		font-weight: bold;
		border-radius: 2px;
		cursor: pointer;
	}
</style>
`,En=`# What i wrote last week

Why am i so smart, how is this possible.
`,Cn=`
<script>
	export let count = 0;
<\/script>

<span class="outer">
	<button on:click="{() => count = count - 1}">-</button>
	<span class="inner">{count}</span>
	<button on:click="{() => count = count + 1}">+</button>
</span>

<style>
	.outer {
		background: darkorange;
		height: 20px;
		font-size: 12px;
		display: inline-flex;
		justify-content: space-between;
		align-items: center;
		transform: translateY(-1px);
		margin: 0 5px;
		border-radius: 3px;
		width: 65px;
		box-shadow: 0 3px 15px 1px rgba(0,0,0,0.3)
  }

	.inner {
		margin: 0 0px;
  }

	button {
		height: 20px;
		padding: 0px 7px 1px 7px;
		margin: 0;
		border: none;
		background: none;
		color: #eee;
		font-weight: bold;
		cursor: pointer;
	}
</style>
`,jn=`
<div><slot></slot></div>

<style>
	div {
		background: pink;
		border: 23px solid orange;
		padding: 0 15px;
		width: 400px;
		text-align: center;
		transform: translateX(-200px);
		animation: 2s slide infinite alternate ease-in-out;
  }

	@keyframes slide {
		from {
			transform: translateX(-200px)
		}
		to {
			transform: translateX(200px)
		}
	}
</style>
`;var Tn=V('<div class="toggle-wrap svelte-785gjh"><div class="toggle svelte-785gjh"><label for="input" class="svelte-785gjh">input</label> <span class="toggle-wrapper svelte-785gjh"><input type="radio" name="theme" id="input" class="svelte-785gjh"/> <input type="radio" name="theme" id="output" class="svelte-785gjh"/> <span aria-hidden="true" class="toggle-background svelte-785gjh"></span> <span aria-hidden="true" class="toggle-switcher svelte-785gjh"></span></span> <label for="output" class="svelte-785gjh">output</label></div></div>'),Mn=V("<div><div><!></div> <!></div>");function Kn(r,e){ge(e,!1);const t=P(),n=[];let a=P(),o=P("input"),i=P();Te(()=>{console.log("SDF**************"),s(a).set({components:[{type:"svx",name:"App",source:xn},{type:"svelte",name:"Boinger",source:Sn},{type:"svx",name:"Section",source:En},{type:"svelte",name:"Count",source:Cn},{type:"svelte",name:"Seriously",source:jn}]})});function l(){$(o,s(o)==="input"?"output":"input")}re(()=>s(i),()=>{$(t,s(i)<750)}),Ae(),he();var v=Mn();br(c=>{_r.title="mdsvex playground!"});let d;var g=K(v);let x;var p=K(g);we(kn(p,{workersUrl:"/workers",get fixed(){return s(t)},$$legacy:!0}),c=>$(a,c),()=>s(a)),U(g);var f=G(g,2);{var m=c=>{var k=Tn(),w=K(k),u=G(K(w),2),h=K(u);tt(h),h.value=h.__value="input";var _=G(h,2);tt(_),_.value=_.__value="output";var S=G(_,2),C=G(S,2);U(u),dt(2),U(w),U(k),_t(n,[],h,()=>s(o),N=>$(o,N)),_t(n,[],_,()=>s(o),N=>$(o,N)),oe("click",S,l),oe("click",C,l),R(c,k)};ee(f,c=>{s(t)&&c(m)})}U(v),X((c,k)=>{d=ae(v,1,"outer svelte-785gjh",null,d,c),x=ae(g,1,"inner svelte-785gjh",null,x,k)},[()=>({mobile:s(t)}),()=>({offset:s(o)==="output"})]),Ir("innerWidth",c=>$(i,c)),R(r,v),pe()}export{Kn as component};
