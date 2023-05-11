import{f as M,g as F,h as H,s as z,p as Y,j as s,r as j,k as G,l as b,m as J,n as Z,q as E,T as ee,t as te,u as ne}from"./index.55343708.js";import{u as ae,a as le,b as ue,c as ie,Q as A,d as re}from"./use-router-link.bbd6ec3e.js";import{c as oe,a as se,h as ce}from"./render.369bff4f.js";import{c as de}from"./dom.3576b17b.js";function fe(e,a=250){let l=!1,r;return function(){return l===!1&&(l=!0,setTimeout(()=>{l=!1},a),r=e.apply(this,arguments)),r}}function K(e,a,l,r){l.modifiers.stop===!0&&z(e);const i=l.modifiers.color;let h=l.modifiers.center;h=h===!0||r===!0;const m=document.createElement("span"),c=document.createElement("span"),x=Y(e),{left:T,top:q,width:p,height:n}=a.getBoundingClientRect(),g=Math.sqrt(p*p+n*n),d=g/2,k=`${(p-g)/2}px`,u=h?k:`${x.left-T-d}px`,f=`${(n-g)/2}px`,R=h?f:`${x.top-q-d}px`;c.className="q-ripple__inner",de(c,{height:`${g}px`,width:`${g}px`,transform:`translate3d(${u},${R},0) scale3d(.2,.2,1)`,opacity:0}),m.className=`q-ripple${i?" text-"+i:""}`,m.setAttribute("dir","ltr"),m.appendChild(c),a.appendChild(m);const S=()=>{m.remove(),clearTimeout($)};l.abort.push(S);let $=setTimeout(()=>{c.classList.add("q-ripple__inner--enter"),c.style.transform=`translate3d(${k},${f},0) scale3d(1,1,1)`,c.style.opacity=.2,$=setTimeout(()=>{c.classList.remove("q-ripple__inner--enter"),c.classList.add("q-ripple__inner--leave"),c.style.opacity=0,$=setTimeout(()=>{m.remove(),l.abort.splice(l.abort.indexOf(S),1)},275)},250)},50)}function N(e,{modifiers:a,value:l,arg:r}){const i=Object.assign({},e.cfg.ripple,a,l);e.modifiers={early:i.early===!0,stop:i.stop===!0,center:i.center===!0,color:i.color||r,keyCodes:[].concat(i.keyCodes||13)}}var ve=oe({name:"ripple",beforeMount(e,a){const l=a.instance.$.appContext.config.globalProperties.$q.config||{};if(l.ripple===!1)return;const r={cfg:l,enabled:a.value!==!1,modifiers:{},abort:[],start(i){r.enabled===!0&&i.qSkipRipple!==!0&&i.type===(r.modifiers.early===!0?"pointerdown":"click")&&K(i,e,r,i.qKeyEvent===!0)},keystart:fe(i=>{r.enabled===!0&&i.qSkipRipple!==!0&&M(i,r.modifiers.keyCodes)===!0&&i.type===`key${r.modifiers.early===!0?"down":"up"}`&&K(i,e,r,!0)},300)};N(r,a),e.__qripple=r,F(r,"main",[[e,"pointerdown","start","passive"],[e,"click","start","passive"],[e,"keydown","keystart","passive"],[e,"keyup","keystart","passive"]])},updated(e,a){if(a.oldValue!==a.value){const l=e.__qripple;l!==void 0&&(l.enabled=a.value!==!1,l.enabled===!0&&Object(a.value)===a.value&&N(l,a))}},beforeUnmount(e){const a=e.__qripple;a!==void 0&&(a.abort.forEach(l=>{l()}),H(a,"main"),delete e._qripple)}});const D={left:"start",center:"center",right:"end",between:"between",around:"around",evenly:"evenly",stretch:"stretch"},be=Object.keys(D),me={align:{type:String,validator:e=>be.includes(e)}};function ge(e){return s(()=>{const a=e.align===void 0?e.vertical===!0?"stretch":"left":e.align;return`${e.vertical===!0?"items":"justify"}-${D[a]}`})}const Q={none:0,xs:4,sm:8,md:16,lg:24,xl:32},ye={xs:8,sm:10,md:14,lg:20,xl:24},he=["button","submit","reset"],ke=/[^\s]\/[^\s]/,qe=["flat","outline","push","unelevated"],pe=(e,a)=>e.flat===!0?"flat":e.outline===!0?"outline":e.push===!0?"push":e.unelevated===!0?"unelevated":a,xe={...ae,...le,type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,...qe.reduce((e,a)=>(e[a]=Boolean)&&e,{}),square:Boolean,round:Boolean,rounded:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:{...me.align,default:"center"},stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean};function Ee(e){const a=ue(e,ye),l=ge(e),{hasRouterLink:r,hasLink:i,linkTag:h,linkAttrs:m,navigateOnClick:c}=ie({fallbackTag:"button"}),x=s(()=>{const u=e.fab===!1&&e.fabMini===!1?a.value:{};return e.padding!==void 0?Object.assign({},u,{padding:e.padding.split(/\s+/).map(f=>f in Q?Q[f]+"px":f).join(" "),minWidth:"0",minHeight:"0"}):u}),T=s(()=>e.rounded===!0||e.fab===!0||e.fabMini===!0),q=s(()=>e.disable!==!0&&e.loading!==!0),p=s(()=>q.value===!0?e.tabindex||0:-1),n=s(()=>pe(e,"standard")),g=s(()=>{const u={tabindex:p.value};return i.value===!0?Object.assign(u,m.value):he.includes(e.type)===!0&&(u.type=e.type),h.value==="a"?(e.disable===!0?u["aria-disabled"]="true":u.href===void 0&&(u.role="button"),r.value!==!0&&ke.test(e.type)===!0&&(u.type=e.type)):e.disable===!0&&(u.disabled="",u["aria-disabled"]="true"),e.loading===!0&&e.percentage!==void 0&&Object.assign(u,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":e.percentage}),u}),d=s(()=>{let u;e.color!==void 0?e.flat===!0||e.outline===!0?u=`text-${e.textColor||e.color}`:u=`bg-${e.color} text-${e.textColor||"white"}`:e.textColor&&(u=`text-${e.textColor}`);const f=e.round===!0?"round":`rectangle${T.value===!0?" q-btn--rounded":e.square===!0?" q-btn--square":""}`;return`q-btn--${n.value} q-btn--${f}`+(u!==void 0?" "+u:"")+(q.value===!0?" q-btn--actionable q-focusable q-hoverable":e.disable===!0?" disabled":"")+(e.fab===!0?" q-btn--fab":e.fabMini===!0?" q-btn--fab-mini":"")+(e.noCaps===!0?" q-btn--no-uppercase":"")+(e.dense===!0?" q-btn--dense":"")+(e.stretch===!0?" no-border-radius self-stretch":"")+(e.glossy===!0?" glossy":"")+(e.square?" q-btn--square":"")}),k=s(()=>l.value+(e.stack===!0?" column":" row")+(e.noWrap===!0?" no-wrap text-no-wrap":"")+(e.loading===!0?" q-btn__content--hidden":""));return{classes:d,style:x,innerClasses:k,attributes:g,hasLink:i,linkTag:h,navigateOnClick:c,isActionable:q}}const{passiveCapture:v}=te;let C=null,L=null,w=null;var $e=se({name:"QBtn",props:{...xe,percentage:Number,darkPercentage:Boolean,onTouchstart:[Function,Array]},emits:["click","keydown","mousedown","keyup"],setup(e,{slots:a,emit:l}){const{proxy:r}=Z(),{classes:i,style:h,innerClasses:m,attributes:c,hasLink:x,linkTag:T,navigateOnClick:q,isActionable:p}=Ee(e),n=j(null),g=j(null);let d=null,k,u=null;const f=s(()=>e.label!==void 0&&e.label!==null&&e.label!==""),R=s(()=>e.disable===!0||e.ripple===!1?!1:{keyCodes:x.value===!0?[13,32]:[13],...e.ripple===!0?{}:e.ripple}),S=s(()=>({center:e.round})),$=s(()=>{const t=Math.max(0,Math.min(100,e.percentage));return t>0?{transition:"transform 0.6s",transform:`translateX(${t-100}%)`}:{}}),I=s(()=>{if(e.loading===!0)return{onMousedown:B,onTouchstart:B,onClick:B,onKeydown:B,onKeyup:B};if(p.value===!0){const t={onClick:O,onKeydown:U,onMousedown:X};if(r.$q.platform.has.touch===!0){const o=e.onTouchstart!==void 0?"":"Passive";t[`onTouchstart${o}`]=V}return t}return{onClick:E}}),W=s(()=>({ref:n,class:"q-btn q-btn-item non-selectable no-outline "+i.value,style:h.value,...c.value,...I.value}));function O(t){if(n.value!==null){if(t!==void 0){if(t.defaultPrevented===!0)return;const o=document.activeElement;if(e.type==="submit"&&o!==document.body&&n.value.contains(o)===!1&&o.contains(n.value)===!1){n.value.focus();const P=()=>{document.removeEventListener("keydown",E,!0),document.removeEventListener("keyup",P,v),n.value!==null&&n.value.removeEventListener("blur",P,v)};document.addEventListener("keydown",E,!0),document.addEventListener("keyup",P,v),n.value.addEventListener("blur",P,v)}}q(t)}}function U(t){n.value!==null&&(l("keydown",t),M(t,[13,32])===!0&&L!==n.value&&(L!==null&&_(),t.defaultPrevented!==!0&&(n.value.focus(),L=n.value,n.value.classList.add("q-btn--active"),document.addEventListener("keyup",y,!0),n.value.addEventListener("blur",y,v)),E(t)))}function V(t){n.value!==null&&(l("touchstart",t),t.defaultPrevented!==!0&&(C!==n.value&&(C!==null&&_(),C=n.value,d=t.target,d.addEventListener("touchcancel",y,v),d.addEventListener("touchend",y,v)),k=!0,u!==null&&clearTimeout(u),u=setTimeout(()=>{u=null,k=!1},200)))}function X(t){n.value!==null&&(t.qSkipRipple=k===!0,l("mousedown",t),t.defaultPrevented!==!0&&w!==n.value&&(w!==null&&_(),w=n.value,n.value.classList.add("q-btn--active"),document.addEventListener("mouseup",y,v)))}function y(t){if(n.value!==null&&!(t!==void 0&&t.type==="blur"&&document.activeElement===n.value)){if(t!==void 0&&t.type==="keyup"){if(L===n.value&&M(t,[13,32])===!0){const o=new MouseEvent("click",t);o.qKeyEvent=!0,t.defaultPrevented===!0&&ne(o),t.cancelBubble===!0&&z(o),n.value.dispatchEvent(o),E(t),t.qKeyEvent=!0}l("keyup",t)}_()}}function _(t){const o=g.value;t!==!0&&(C===n.value||w===n.value)&&o!==null&&o!==document.activeElement&&(o.setAttribute("tabindex",-1),o.focus()),C===n.value&&(d!==null&&(d.removeEventListener("touchcancel",y,v),d.removeEventListener("touchend",y,v)),C=d=null),w===n.value&&(document.removeEventListener("mouseup",y,v),w=null),L===n.value&&(document.removeEventListener("keyup",y,!0),n.value!==null&&n.value.removeEventListener("blur",y,v),L=null),n.value!==null&&n.value.classList.remove("q-btn--active")}function B(t){E(t),t.qSkipRipple=!0}return G(()=>{_(!0)}),Object.assign(r,{click:O}),()=>{let t=[];e.icon!==void 0&&t.push(b(A,{name:e.icon,left:e.stack===!1&&f.value===!0,role:"img","aria-hidden":"true"})),f.value===!0&&t.push(b("span",{class:"block"},[e.label])),t=ce(a.default,t),e.iconRight!==void 0&&e.round===!1&&t.push(b(A,{name:e.iconRight,right:e.stack===!1&&f.value===!0,role:"img","aria-hidden":"true"}));const o=[b("span",{class:"q-focus-helper",ref:g})];return e.loading===!0&&e.percentage!==void 0&&o.push(b("span",{class:"q-btn__progress absolute-full overflow-hidden"+(e.darkPercentage===!0?" q-btn__progress--dark":"")},[b("span",{class:"q-btn__progress-indicator fit block",style:$.value})])),o.push(b("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+m.value},t)),e.loading!==null&&o.push(b(ee,{name:"q-transition--fade"},()=>e.loading===!0?[b("span",{key:"loading",class:"absolute-full flex flex-center"},a.loading!==void 0?a.loading():[b(re)])]:null)),J(b(T.value,W.value,o),[[ve,R.value,void 0,S.value]])}}});export{$e as Q};
