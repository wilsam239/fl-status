import{c as B,a as y,h as H,b as ae,g as W,d as Qe,e as fe,w as q,o as D,f as $,n as Ce,l as V,r as x,i as He,j as O,k as U,p as Ne,m as Ee,q as Ie,s as Ue,P as Ge,t as Ke,u as ve,v as Y,x as oe,y as Xe,z as Ye,T as Je,A as Ze,B as et,C as ze,D as ke,E as tt,F as nt,G as ot,H as qe,I as Le,J as lt,K as E,L as F,M as C,N as M,Q as it,O as he,R as at,S as rt,U as st}from"./index.4e7e9f24.js";var Q=B({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(e,{slots:o}){const n=y(()=>`q-card__section q-card__section--${e.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>H(e.tag,{class:n.value},ae(o.default))}});const ut={dark:{type:Boolean,default:null}};function ct(e,o){return y(()=>e.dark===null?o.dark.isActive:e.dark)}var dt=B({name:"QCard",props:{...ut,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(e,{slots:o}){const{proxy:{$q:n}}=W(),t=ct(e,n),l=y(()=>"q-card"+(t.value===!0?" q-card--dark q-dark":"")+(e.bordered===!0?" q-card--bordered":"")+(e.square===!0?" q-card--square no-border-radius":"")+(e.flat===!0?" q-card--flat no-shadow":""));return()=>H(e.tag,{class:l.value},ae(o.default))}});const ft=[null,document,document.body,document.scrollingElement,document.documentElement];function Pe(e,o){let n=Qe(o);if(n===void 0){if(e==null)return window;n=e.closest(".scroll,.scroll-y,.overflow-auto")}return ft.includes(n)?window:n}function vt(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function ht(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let G;function X(){if(G!==void 0)return G;const e=document.createElement("p"),o=document.createElement("div");fe(e,{width:"100%",height:"200px"}),fe(o,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),o.appendChild(e),document.body.appendChild(o);const n=e.offsetWidth;o.style.overflow="scroll";let t=e.offsetWidth;return n===t&&(t=o.clientWidth),o.remove(),G=n-t,G}const{passive:me}=V,mt=["both","horizontal","vertical"];var gt=B({name:"QScrollObserver",props:{axis:{type:String,validator:e=>mt.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:o}){const n={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let t=null,l,c;q(()=>e.scrollTarget,()=>{u(),r()});function i(){t!==null&&t();const p=Math.max(0,vt(l)),b=ht(l),s={top:p-n.position.top,left:b-n.position.left};if(e.axis==="vertical"&&s.top===0||e.axis==="horizontal"&&s.left===0)return;const v=Math.abs(s.top)>=Math.abs(s.left)?s.top<0?"up":"down":s.left<0?"left":"right";n.position={top:p,left:b},n.directionChanged=n.direction!==v,n.delta=s,n.directionChanged===!0&&(n.direction=v,n.inflectionPoint=n.position),o("scroll",{...n})}function r(){l=Pe(c,e.scrollTarget),l.addEventListener("scroll",a,me),a(!0)}function u(){l!==void 0&&(l.removeEventListener("scroll",a,me),l=void 0)}function a(p){if(p===!0||e.debounce===0||e.debounce==="0")i();else if(t===null){const[b,s]=e.debounce?[setTimeout(i,e.debounce),clearTimeout]:[requestAnimationFrame(i),cancelAnimationFrame];t=()=>{s(b),t=null}}}const{proxy:f}=W();return q(()=>f.$q.lang.rtl,i),D(()=>{c=f.$el.parentNode,r()}),$(()=>{t!==null&&t(),u()}),Object.assign(f,{trigger:a,getPosition:()=>n}),Ce}});function pt(){const e=x(!He.value);return e.value===!1&&D(()=>{e.value=!0}),e}const $e=typeof ResizeObserver!="undefined",ge=$e===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var pe=B({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:o}){let n=null,t,l={width:-1,height:-1};function c(u){u===!0||e.debounce===0||e.debounce==="0"?i():n===null&&(n=setTimeout(i,e.debounce))}function i(){if(n!==null&&(clearTimeout(n),n=null),t){const{offsetWidth:u,offsetHeight:a}=t;(u!==l.width||a!==l.height)&&(l={width:u,height:a},o("resize",l))}}const{proxy:r}=W();if($e===!0){let u;const a=f=>{t=r.$el.parentNode,t?(u=new ResizeObserver(c),u.observe(t),i()):f!==!0&&O(()=>{a(!0)})};return D(()=>{a()}),$(()=>{n!==null&&clearTimeout(n),u!==void 0&&(u.disconnect!==void 0?u.disconnect():t&&u.unobserve(t))}),Ce}else{let f=function(){n!==null&&(clearTimeout(n),n=null),a!==void 0&&(a.removeEventListener!==void 0&&a.removeEventListener("resize",c,V.passive),a=void 0)},p=function(){f(),t&&t.contentDocument&&(a=t.contentDocument.defaultView,a.addEventListener("resize",c,V.passive),i())};const u=pt();let a;return D(()=>{O(()=>{t=r.$el,t&&p()})}),$(f),r.trigger=c,()=>{if(u.value===!0)return H("object",{style:ge.style,tabindex:-1,type:"text/html",data:ge.url,"aria-hidden":"true",onLoad:p})}}}}),bt=B({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:o,emit:n}){const{proxy:{$q:t}}=W(),l=x(null),c=x(t.screen.height),i=x(e.container===!0?0:t.screen.width),r=x({position:0,direction:"down",inflectionPoint:0}),u=x(0),a=x(He.value===!0?0:X()),f=y(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),p=y(()=>e.container===!1?{minHeight:t.screen.height+"px"}:null),b=y(()=>a.value!==0?{[t.lang.rtl===!0?"left":"right"]:`${a.value}px`}:null),s=y(()=>a.value!==0?{[t.lang.rtl===!0?"right":"left"]:0,[t.lang.rtl===!0?"left":"right"]:`-${a.value}px`,width:`calc(100% + ${a.value}px)`}:null);function v(h){if(e.container===!0||document.qScrollPrevented!==!0){const d={position:h.position.top,direction:h.direction,directionChanged:h.directionChanged,inflectionPoint:h.inflectionPoint.top,delta:h.delta.top};r.value=d,e.onScroll!==void 0&&n("scroll",d)}}function z(h){const{height:d,width:T}=h;let w=!1;c.value!==d&&(w=!0,c.value=d,e.onScrollHeight!==void 0&&n("scrollHeight",d),P()),i.value!==T&&(w=!0,i.value=T),w===!0&&e.onResize!==void 0&&n("resize",h)}function L({height:h}){u.value!==h&&(u.value=h,P())}function P(){if(e.container===!0){const h=c.value>u.value?X():0;a.value!==h&&(a.value=h)}}let m=null;const g={instances:{},view:y(()=>e.view),isContainer:y(()=>e.container),rootRef:l,height:c,containerHeight:u,scrollbarWidth:a,totalWidth:y(()=>i.value+a.value),rows:y(()=>{const h=e.view.toLowerCase().split(" ");return{top:h[0].split(""),middle:h[1].split(""),bottom:h[2].split("")}}),header:U({size:0,offset:0,space:!1}),right:U({size:300,offset:0,space:!1}),footer:U({size:0,offset:0,space:!1}),left:U({size:300,offset:0,space:!1}),scroll:r,animate(){m!==null?clearTimeout(m):document.body.classList.add("q-body--layout-animate"),m=setTimeout(()=>{m=null,document.body.classList.remove("q-body--layout-animate")},155)},update(h,d,T){g[h][d]=T}};if(Ne(Ue,g),X()>0){let T=function(){h=null,d.classList.remove("hide-scrollbar")},w=function(){if(h===null){if(d.scrollHeight>t.screen.height)return;d.classList.add("hide-scrollbar")}else clearTimeout(h);h=setTimeout(T,300)},_=function(k){h!==null&&k==="remove"&&(clearTimeout(h),T()),window[`${k}EventListener`]("resize",w)},h=null;const d=document.body;q(()=>e.container!==!0?"add":"remove",_),e.container!==!0&&_("add"),Ee(()=>{_("remove")})}return()=>{const h=Ie(o.default,[H(gt,{onScroll:v}),H(pe,{onResize:z})]),d=H("div",{class:f.value,style:p.value,ref:e.container===!0?void 0:l,tabindex:-1},h);return e.container===!0?H("div",{class:"q-layout-container overflow-hidden",ref:l},[H(pe,{onResize:L}),H("div",{class:"absolute-full",style:b.value},[H("div",{class:"scroll",style:s.value},[d])])]):d}}});function le(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),Ge.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}const yt={target:{default:!0},noParentEvent:Boolean,contextMenu:Boolean};function wt({showing:e,avoidEmit:o,configureAnchorEl:n}){const{props:t,proxy:l,emit:c}=W(),i=x(null);let r=null;function u(s){return i.value===null?!1:s===void 0||s.touches===void 0||s.touches.length<=1}const a={};n===void 0&&(Object.assign(a,{hide(s){l.hide(s)},toggle(s){l.toggle(s),s.qAnchorHandled=!0},toggleKey(s){Ke(s,13)===!0&&a.toggle(s)},contextClick(s){l.hide(s),ve(s),O(()=>{l.show(s),s.qAnchorHandled=!0})},prevent:ve,mobileTouch(s){if(a.mobileCleanup(s),u(s)!==!0)return;l.hide(s),i.value.classList.add("non-selectable");const v=s.target;Y(a,"anchor",[[v,"touchmove","mobileCleanup","passive"],[v,"touchend","mobileCleanup","passive"],[v,"touchcancel","mobileCleanup","passive"],[i.value,"contextmenu","prevent","notPassive"]]),r=setTimeout(()=>{r=null,l.show(s),s.qAnchorHandled=!0},300)},mobileCleanup(s){i.value.classList.remove("non-selectable"),r!==null&&(clearTimeout(r),r=null),e.value===!0&&s!==void 0&&le()}}),n=function(s=t.contextMenu){if(t.noParentEvent===!0||i.value===null)return;let v;s===!0?l.$q.platform.is.mobile===!0?v=[[i.value,"touchstart","mobileTouch","passive"]]:v=[[i.value,"mousedown","hide","passive"],[i.value,"contextmenu","contextClick","notPassive"]]:v=[[i.value,"click","toggle","passive"],[i.value,"keyup","toggleKey","passive"]],Y(a,"anchor",v)});function f(){oe(a,"anchor")}function p(s){for(i.value=s;i.value.classList.contains("q-anchor--skip");)i.value=i.value.parentNode;n()}function b(){if(t.target===!1||t.target===""||l.$el.parentNode===null)i.value=null;else if(t.target===!0)p(l.$el.parentNode);else{let s=t.target;if(typeof t.target=="string")try{s=document.querySelector(t.target)}catch{s=void 0}s!=null?(i.value=s.$el||s,n()):(i.value=null,console.error(`Anchor: target "${t.target}" not found`))}}return q(()=>t.contextMenu,s=>{i.value!==null&&(f(),n(s))}),q(()=>t.target,()=>{i.value!==null&&f(),b()}),q(()=>t.noParentEvent,s=>{i.value!==null&&(s===!0?f():n())}),D(()=>{b(),o!==!0&&t.modelValue===!0&&i.value===null&&c("update:modelValue",!1)}),$(()=>{r!==null&&clearTimeout(r),f()}),{anchorEl:i,canShow:u,anchorEvents:a}}function xt(e,o){const n=x(null);let t;function l(r,u){const a=`${u!==void 0?"add":"remove"}EventListener`,f=u!==void 0?u:t;r!==window&&r[a]("scroll",f,V.passive),window[a]("scroll",f,V.passive),t=u}function c(){n.value!==null&&(l(n.value),n.value=null)}const i=q(()=>e.noParentEvent,()=>{n.value!==null&&(c(),o())});return $(i),{localScrollTarget:n,unconfigureScrollTarget:c,changeScrollEvent:l}}const Tt={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},St=["beforeShow","show","beforeHide","hide"];function _t({showing:e,canShow:o,hideOnRouteChange:n,handleShow:t,handleHide:l,processOnMount:c}){const i=W(),{props:r,emit:u,proxy:a}=i;let f;function p(m){e.value===!0?v(m):b(m)}function b(m){if(r.disable===!0||m!==void 0&&m.qAnchorHandled===!0||o!==void 0&&o(m)!==!0)return;const g=r["onUpdate:modelValue"]!==void 0;g===!0&&(u("update:modelValue",!0),f=m,O(()=>{f===m&&(f=void 0)})),(r.modelValue===null||g===!1)&&s(m)}function s(m){e.value!==!0&&(e.value=!0,u("beforeShow",m),t!==void 0?t(m):u("show",m))}function v(m){if(r.disable===!0)return;const g=r["onUpdate:modelValue"]!==void 0;g===!0&&(u("update:modelValue",!1),f=m,O(()=>{f===m&&(f=void 0)})),(r.modelValue===null||g===!1)&&z(m)}function z(m){e.value!==!1&&(e.value=!1,u("beforeHide",m),l!==void 0?l(m):u("hide",m))}function L(m){r.disable===!0&&m===!0?r["onUpdate:modelValue"]!==void 0&&u("update:modelValue",!1):m===!0!==e.value&&(m===!0?s:z)(f)}q(()=>r.modelValue,L),n!==void 0&&Xe(i)===!0&&q(()=>a.$route.fullPath,()=>{n.value===!0&&e.value===!0&&v()}),c===!0&&D(()=>{L(r.modelValue)});const P={show:b,hide:v,toggle:p};return Object.assign(a,P),P}let K=[],J=[];function We(e){J=J.filter(o=>o!==e)}function Ct(e){We(e),J.push(e)}function be(e){We(e),J.length===0&&K.length!==0&&(K[K.length-1](),K=[])}const I=[];function Ht(e){for(e=e.parent;e!=null;){if(e.type.name==="QGlobalDialog")return!0;if(e.type.name==="QDialog"||e.type.name==="QMenu")return!1;e=e.parent}return!1}function Et(e,o,n,t){const l=x(!1),c=x(!1);let i=null;const r={},u=t==="dialog"&&Ht(e);function a(p){if(p===!0){be(r),c.value=!0;return}c.value=!1,l.value===!1&&(u===!1&&i===null&&(i=Ze(!1,t)),l.value=!0,I.push(e.proxy),Ct(r))}function f(p){if(c.value=!1,p!==!0)return;be(r),l.value=!1;const b=I.indexOf(e.proxy);b!==-1&&I.splice(b,1),i!==null&&(et(i),i=null)}return Ee(()=>{f(!0)}),e.proxy.__qPortal=!0,Ye(e.proxy,"contentEl",()=>o.value),{showPortal:a,hidePortal:f,portalIsActive:l,portalIsAccessible:c,renderPortal:()=>u===!0?n():l.value===!0?[H(Je,{to:i},n())]:void 0}}const zt={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function kt(e,o=()=>{},n=()=>{}){return{transitionProps:y(()=>{const t=`q-transition--${e.transitionShow||o()}`,l=`q-transition--${e.transitionHide||n()}`;return{appear:!0,enterFromClass:`${t}-enter-from`,enterActiveClass:`${t}-enter-active`,enterToClass:`${t}-enter-to`,leaveFromClass:`${l}-leave-from`,leaveActiveClass:`${l}-leave-active`,leaveToClass:`${l}-leave-to`}}),transitionStyle:y(()=>`--q-transition-duration: ${e.transitionDuration}ms`)}}function qt(){let e;const o=W();function n(){e=void 0}return ze(n),$(n),{removeTick:n,registerTick(t){e=t,O(()=>{e===t&&(ke(o)===!1&&e(),e=void 0)})}}}function Lt(){let e=null;const o=W();function n(){e!==null&&(clearTimeout(e),e=null)}return ze(n),$(n),{removeTimeout:n,registerTimeout(t,l){n(),ke(o)===!1&&(e=setTimeout(t,l))}}}const{notPassiveCapture:Z}=V,A=[];function ee(e){const o=e.target;if(o===void 0||o.nodeType===8||o.classList.contains("no-pointer-events")===!0)return;let n=I.length-1;for(;n>=0;){const t=I[n].$;if(t.type.name!=="QDialog")break;if(t.props.seamless!==!0)return;n--}for(let t=A.length-1;t>=0;t--){const l=A[t];if((l.anchorEl.value===null||l.anchorEl.value.contains(o)===!1)&&(o===document.body||l.innerRef.value!==null&&l.innerRef.value.contains(o)===!1))e.qClickOutside=!0,l.onClickOutside(e);else return}}function Pt(e){A.push(e),A.length===1&&(document.addEventListener("mousedown",ee,Z),document.addEventListener("touchstart",ee,Z))}function ye(e){const o=A.findIndex(n=>n===e);o>-1&&(A.splice(o,1),A.length===0&&(document.removeEventListener("mousedown",ee,Z),document.removeEventListener("touchstart",ee,Z)))}let we,xe;function Te(e){const o=e.split(" ");return o.length!==2?!1:["top","center","bottom"].includes(o[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(o[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function $t(e){return e?!(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"):!0}const ie={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(e=>{ie[`${e}#ltr`]=e,ie[`${e}#rtl`]=e});function Se(e,o){const n=e.split(" ");return{vertical:n[0],horizontal:ie[`${n[1]}#${o===!0?"rtl":"ltr"}`]}}function Wt(e,o){let{top:n,left:t,right:l,bottom:c,width:i,height:r}=e.getBoundingClientRect();return o!==void 0&&(n-=o[1],t-=o[0],c+=o[1],l+=o[0],i+=o[0],r+=o[1]),{top:n,bottom:c,height:r,left:t,right:l,width:i,middle:t+(l-t)/2,center:n+(c-n)/2}}function Mt(e,o,n){let{top:t,left:l}=e.getBoundingClientRect();return t+=o.top,l+=o.left,n!==void 0&&(t+=n[1],l+=n[0]),{top:t,bottom:t+1,height:1,left:l,right:l+1,width:1,middle:l,center:t}}function Rt(e,o){return{top:0,center:o/2,bottom:o,left:0,middle:e/2,right:e}}function _e(e,o,n,t){return{top:e[n.vertical]-o[t.vertical],left:e[n.horizontal]-o[t.horizontal]}}function Me(e,o=0){if(e.targetEl===null||e.anchorEl===null||o>5)return;if(e.targetEl.offsetHeight===0||e.targetEl.offsetWidth===0){setTimeout(()=>{Me(e,o+1)},10);return}const{targetEl:n,offset:t,anchorEl:l,anchorOrigin:c,selfOrigin:i,absoluteOffset:r,fit:u,cover:a,maxHeight:f,maxWidth:p}=e;if(tt.is.ios===!0&&window.visualViewport!==void 0){const T=document.body.style,{offsetLeft:w,offsetTop:_}=window.visualViewport;w!==we&&(T.setProperty("--q-pe-left",w+"px"),we=w),_!==xe&&(T.setProperty("--q-pe-top",_+"px"),xe=_)}const{scrollLeft:b,scrollTop:s}=n,v=r===void 0?Wt(l,a===!0?[0,0]:t):Mt(l,r,t);Object.assign(n.style,{top:0,left:0,minWidth:null,minHeight:null,maxWidth:p||"100vw",maxHeight:f||"100vh",visibility:"visible"});const{width:z,height:L}=n.getBoundingClientRect(),{elWidth:P,elHeight:m}=u===!0||a===!0?{elWidth:Math.max(v.width,z),elHeight:a===!0?Math.max(v.height,L):L}:{elWidth:z,elHeight:L};let g={maxWidth:p,maxHeight:f};(u===!0||a===!0)&&(g.minWidth=v.width+"px",a===!0&&(g.minHeight=v.height+"px")),Object.assign(n.style,g);const h=Rt(P,m);let d=_e(v,h,c,i);if(r===void 0||t===void 0)ne(d,v,h,c,i);else{const{top:T,left:w}=d;ne(d,v,h,c,i);let _=!1;if(d.top!==T){_=!0;const k=2*t[1];v.center=v.top-=k,v.bottom-=k+2}if(d.left!==w){_=!0;const k=2*t[0];v.middle=v.left-=k,v.right-=k+2}_===!0&&(d=_e(v,h,c,i),ne(d,v,h,c,i))}g={top:d.top+"px",left:d.left+"px"},d.maxHeight!==void 0&&(g.maxHeight=d.maxHeight+"px",v.height>d.maxHeight&&(g.minHeight=g.maxHeight)),d.maxWidth!==void 0&&(g.maxWidth=d.maxWidth+"px",v.width>d.maxWidth&&(g.minWidth=g.maxWidth)),Object.assign(n.style,g),n.scrollTop!==s&&(n.scrollTop=s),n.scrollLeft!==b&&(n.scrollLeft=b)}function ne(e,o,n,t,l){const c=n.bottom,i=n.right,r=X(),u=window.innerHeight-r,a=document.body.clientWidth;if(e.top<0||e.top+c>u)if(l.vertical==="center")e.top=o[t.vertical]>u/2?Math.max(0,u-c):0,e.maxHeight=Math.min(c,u);else if(o[t.vertical]>u/2){const f=Math.min(u,t.vertical==="center"?o.center:t.vertical===l.vertical?o.bottom:o.top);e.maxHeight=Math.min(c,f),e.top=Math.max(0,f-c)}else e.top=Math.max(0,t.vertical==="center"?o.center:t.vertical===l.vertical?o.top:o.bottom),e.maxHeight=Math.min(c,u-e.top);if(e.left<0||e.left+i>a)if(e.maxWidth=Math.min(i,a),l.horizontal==="middle")e.left=o[t.horizontal]>a/2?Math.max(0,a-i):0;else if(o[t.horizontal]>a/2){const f=Math.min(a,t.horizontal==="middle"?o.middle:t.horizontal===l.horizontal?o.right:o.left);e.maxWidth=Math.min(i,f),e.left=Math.max(0,f-e.maxWidth)}else e.left=Math.max(0,t.horizontal==="middle"?o.middle:t.horizontal===l.horizontal?o.left:o.right),e.maxWidth=Math.min(i,a-e.left)}var At=B({name:"QTooltip",inheritAttrs:!1,props:{...yt,...Tt,...zt,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null},transitionShow:{default:"jump-down"},transitionHide:{default:"jump-up"},anchor:{type:String,default:"bottom middle",validator:Te},self:{type:String,default:"top middle",validator:Te},offset:{type:Array,default:()=>[14,14],validator:$t},scrollTarget:{default:void 0},delay:{type:Number,default:0},hideDelay:{type:Number,default:0}},emits:[...St],setup(e,{slots:o,emit:n,attrs:t}){let l,c;const i=W(),{proxy:{$q:r}}=i,u=x(null),a=x(!1),f=y(()=>Se(e.anchor,r.lang.rtl)),p=y(()=>Se(e.self,r.lang.rtl)),b=y(()=>e.persistent!==!0),{registerTick:s,removeTick:v}=qt(),{registerTimeout:z}=Lt(),{transitionProps:L,transitionStyle:P}=kt(e),{localScrollTarget:m,changeScrollEvent:g,unconfigureScrollTarget:h}=xt(e,ce),{anchorEl:d,canShow:T,anchorEvents:w}=wt({showing:a,configureAnchorEl:Be}),{show:_,hide:k}=_t({showing:a,canShow:T,handleShow:Ae,handleHide:De,hideOnRouteChange:b,processOnMount:!0});Object.assign(w,{delayShow:Ve,delayHide:Oe});const{showPortal:re,hidePortal:se,renderPortal:Re}=Et(i,u,Fe,"tooltip");if(r.platform.is.mobile===!0){const S={anchorEl:d,innerRef:u,onClickOutside(R){return k(R),R.target.classList.contains("q-dialog__backdrop")&&ot(R),!0}},te=y(()=>e.modelValue===null&&e.persistent!==!0&&a.value===!0);q(te,R=>{(R===!0?Pt:ye)(S)}),$(()=>{ye(S)})}function Ae(S){re(),s(()=>{c=new MutationObserver(()=>j()),c.observe(u.value,{attributes:!1,childList:!0,characterData:!0,subtree:!0}),j(),ce()}),l===void 0&&(l=q(()=>r.screen.width+"|"+r.screen.height+"|"+e.self+"|"+e.anchor+"|"+r.lang.rtl,j)),z(()=>{re(!0),n("show",S)},e.transitionDuration)}function De(S){v(),se(),ue(),z(()=>{se(!0),n("hide",S)},e.transitionDuration)}function ue(){c!==void 0&&(c.disconnect(),c=void 0),l!==void 0&&(l(),l=void 0),h(),oe(w,"tooltipTemp")}function j(){Me({targetEl:u.value,offset:e.offset,anchorEl:d.value,anchorOrigin:f.value,selfOrigin:p.value,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function Ve(S){if(r.platform.is.mobile===!0){le(),document.body.classList.add("non-selectable");const te=d.value,R=["touchmove","touchcancel","touchend","click"].map(de=>[te,de,"delayHide","passiveCapture"]);Y(w,"tooltipTemp",R)}z(()=>{_(S)},e.delay)}function Oe(S){r.platform.is.mobile===!0&&(oe(w,"tooltipTemp"),le(),setTimeout(()=>{document.body.classList.remove("non-selectable")},10)),z(()=>{k(S)},e.hideDelay)}function Be(){if(e.noParentEvent===!0||d.value===null)return;const S=r.platform.is.mobile===!0?[[d.value,"touchstart","delayShow","passive"]]:[[d.value,"mouseenter","delayShow","passive"],[d.value,"mouseleave","delayHide","passive"]];Y(w,"anchor",S)}function ce(){if(d.value!==null||e.scrollTarget!==void 0){m.value=Pe(d.value,e.scrollTarget);const S=e.noParentEvent===!0?j:k;g(m.value,S)}}function je(){return a.value===!0?H("div",{...t,ref:u,class:["q-tooltip q-tooltip--style q-position-engine no-pointer-events",t.class],style:[t.style,P.value],role:"tooltip"},ae(o.default)):null}function Fe(){return H(nt,L.value,je)}return $(ue),Object.assign(i.proxy,{updatePosition:j}),Re}});const Dt={class:"row items-center justify-between"},Vt={class:"row"},Ot={class:"route-name q-pr-md"},Bt={class:"route-info row justify-center items-center q-pa-xs"},jt={class:"progress progress-striped active q-mt-md"},N=qe({__name:"RouteChecker",props:{name:{},route:{}},setup(e){const o=e,n=x(),t=x(0),l=x(0),c=y(()=>`progress-bar-${n.value=="good"?"success":n.value=="okay"?"warning":"danger"}`);D(()=>{i(),setInterval(()=>{i()},1e4)});function i(){console.log(`Refreshing ${o.name}`),fetch(o.route).then(r=>{t.value=t.value+=1,r.status<400?(l.value=l.value+=1,n.value="good"):n.value=l.value/t.value<.5?"bad":"okay"},r=>{t.value=t.value+=1,n.value=l.value/t.value<.5?"bad":"okay"})}return(r,u)=>(Le(),lt(at,null,[E("div",Dt,[E("div",Vt,[E("div",Ot,F(r.name),1),E("div",Bt,[C(At,null,{default:M(()=>[rt(F(r.route),1)]),_:1}),C(it,{name:"question_mark",size:"xs"})])]),E("div",{class:he("health-"+n.value)},F(n.value=="good"?"Operational":n.value=="okay"?"Dubious":"Outage")+" - "+F(l.value)+"/"+F(t.value),3)]),E("div",jt,[E("div",{role:"progressbar ",style:{width:"100%"},class:he(["progress-bar rounded-borders",c.value])},null,2)])],64))}});const Ft=E("div",{class:"masthead-container row items-center justify-center"},[E("div",{class:"logo-container"},[E("a",{href:"https://getfarmlab.com"},[E("img",{alt:"Page logo",src:"src/assets/logo.png"})])])],-1),Qt={class:"row justify-center"},It=qe({__name:"MainLayout",setup(e){return(o,n)=>(Le(),st(bt,{view:"hHh lpR fFf"},{default:M(()=>[E("div",null,[Ft,E("div",Qt,[C(dt,{class:"route-card",flat:"",bordered:"",dark:""},{default:M(()=>[C(Q,null,{default:M(()=>[C(N,{name:"Homestead",route:"https://my.lab.farm/siteInfo"})]),_:1}),C(Q,null,{default:M(()=>[C(N,{name:"Shepherd",route:"https://accounts.lab.farm/site/info"})]),_:1}),C(Q,null,{default:M(()=>[C(N,{name:"Silo",route:"https://silo.lab.farm/site/info"})]),_:1}),C(Q,null,{default:M(()=>[C(N,{name:"Dropzone",route:"https://dropzone.lab.farm/site/info"})]),_:1}),C(Q,null,{default:M(()=>[C(N,{name:"Harvest",route:"https://harvest.lab.farm/site/info"})]),_:1})]),_:1})])])]),_:1}))}});export{It as default};
