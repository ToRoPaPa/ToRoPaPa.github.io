import{a as M,b as D,h as S}from"./render.369bff4f.js";import{j as u,l as f,n as I}from"./index.55343708.js";const z={xs:18,sm:24,md:32,lg:38,xl:46},H={size:String};function N(e,n=z){return u(()=>e.size!==void 0?{fontSize:e.size in n?`${n[e.size]}px`:e.size}:null)}const P="0 0 24 24",O=e=>e,$=e=>`ionicons ${e}`,q={"mdi-":e=>`mdi ${e}`,"icon-":O,"bt-":e=>`bt ${e}`,"eva-":e=>`eva ${e}`,"ion-md":$,"ion-ios":$,"ion-logo":$,"iconfont ":O,"ti-":e=>`themify-icon ${e}`,"bi-":e=>`bootstrap-icons ${e}`},Q={o_:"-outlined",r_:"-round",s_:"-sharp"},F={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},T=new RegExp("^("+Object.keys(q).join("|")+")"),U=new RegExp("^("+Object.keys(Q).join("|")+")"),C=new RegExp("^("+Object.keys(F).join("|")+")"),G=/^[Mm]\s?[-+]?\.?\d/,J=/^img:/,W=/^svguse:/,X=/^ion-/,Y=/^(fa-(sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;var oe=M({name:"QIcon",props:{...H,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(e,{slots:n}){const{proxy:{$q:l}}=I(),r=N(e),c=u(()=>"q-icon"+(e.left===!0?" on-left":"")+(e.right===!0?" on-right":"")+(e.color!==void 0?` text-${e.color}`:"")),o=u(()=>{let i,t=e.name;if(t==="none"||!t)return{none:!0};if(l.iconMapFn!==null){const s=l.iconMapFn(t);if(s!==void 0)if(s.icon!==void 0){if(t=s.icon,t==="none"||!t)return{none:!0}}else return{cls:s.cls,content:s.content!==void 0?s.content:" "}}if(G.test(t)===!0){const[s,h=P]=t.split("|");return{svg:!0,viewBox:h,nodes:s.split("&&").map(b=>{const[R,x,k]=b.split("@@");return f("path",{style:x,d:R,transform:k})})}}if(J.test(t)===!0)return{img:!0,src:t.substring(4)};if(W.test(t)===!0){const[s,h=P]=t.split("|");return{svguse:!0,src:s.substring(7),viewBox:h}}let y=" ";const g=t.match(T);if(g!==null)i=q[g[1]](t);else if(Y.test(t)===!0)i=t;else if(X.test(t)===!0)i=`ionicons ion-${l.platform.is.ios===!0?"ios":"md"}${t.substring(3)}`;else if(C.test(t)===!0){i="notranslate material-symbols";const s=t.match(C);s!==null&&(t=t.substring(6),i+=F[s[1]]),y=t}else{i="notranslate material-icons";const s=t.match(U);s!==null&&(t=t.substring(2),i+=Q[s[1]]),y=t}return{cls:i,content:y}});return()=>{const i={class:c.value,style:r.value,"aria-hidden":"true",role:"presentation"};return o.value.none===!0?f(e.tag,i,D(n.default)):o.value.img===!0?f("span",i,S(n.default,[f("img",{src:o.value.src})])):o.value.svg===!0?f("span",i,S(n.default,[f("svg",{viewBox:o.value.viewBox||"0 0 24 24"},o.value.nodes)])):o.value.svguse===!0?f("span",i,S(n.default,[f("svg",{viewBox:o.value.viewBox},[f("use",{"xlink:href":o.value.src})])])):(o.value.cls!==void 0&&(i.class+=" "+o.value.cls),f(e.tag,i,S(n.default,[o.value.content])))}}});const Z={size:{type:[Number,String],default:"1em"},color:String};function ee(e){return{cSize:u(()=>e.size in z?`${z[e.size]}px`:e.size),classes:u(()=>"q-spinner"+(e.color?` text-${e.color}`:""))}}var ue=M({name:"QSpinner",props:{...Z,thickness:{type:Number,default:5}},setup(e){const{cSize:n,classes:l}=ee(e);return()=>f("svg",{class:l.value+" q-spinner-mat",width:n.value,height:n.value,viewBox:"25 25 50 50"},[f("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":e.thickness,"stroke-miterlimit":"10"})])}});function te(e){return e.appContext.config.globalProperties.$router!==void 0}function L(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}function _(e,n){return(e.aliasOf||e)===(n.aliasOf||n)}function ne(e,n){for(const l in n){const r=n[l],c=e[l];if(typeof r=="string"){if(r!==c)return!1}else if(Array.isArray(c)===!1||c.length!==r.length||r.some((o,i)=>o!==c[i]))return!1}return!0}function j(e,n){return Array.isArray(n)===!0?e.length===n.length&&e.every((l,r)=>l===n[r]):e.length===1&&e[0]===n}function re(e,n){return Array.isArray(e)===!0?j(e,n):Array.isArray(n)===!0?j(n,e):e===n}function se(e,n){if(Object.keys(e).length!==Object.keys(n).length)return!1;for(const l in e)if(re(e[l],n[l])===!1)return!1;return!0}const le={to:[String,Object],replace:Boolean,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"},href:String,target:String,disable:Boolean};function ce({fallbackTag:e,useDisableForRouterLinkProps:n=!0}={}){const l=I(),{props:r,proxy:c,emit:o}=l,i=te(l),t=u(()=>r.disable!==!0&&r.href!==void 0),y=n===!0?u(()=>i===!0&&r.disable!==!0&&t.value!==!0&&r.to!==void 0&&r.to!==null&&r.to!==""):u(()=>i===!0&&t.value!==!0&&r.to!==void 0&&r.to!==null&&r.to!==""),g=u(()=>y.value===!0?w(r.to):null),s=u(()=>g.value!==null),h=u(()=>t.value===!0||s.value===!0),b=u(()=>r.type==="a"||h.value===!0?"a":r.tag||e||"div"),R=u(()=>t.value===!0?{href:r.href,target:r.target}:s.value===!0?{href:g.value.href,target:r.target}:{}),x=u(()=>{if(s.value===!1)return-1;const{matched:a}=g.value,{length:v}=a,d=a[v-1];if(d===void 0)return-1;const m=c.$route.matched;if(m.length===0)return-1;const p=m.findIndex(_.bind(null,d));if(p>-1)return p;const E=L(a[v-2]);return v>1&&L(d)===E&&m[m.length-1].path!==E?m.findIndex(_.bind(null,a[v-2])):p}),k=u(()=>s.value===!0&&x.value!==-1&&ne(c.$route.params,g.value.params)),A=u(()=>k.value===!0&&x.value===c.$route.matched.length-1&&se(c.$route.params,g.value.params)),K=u(()=>s.value===!0?A.value===!0?` ${r.exactActiveClass} ${r.activeClass}`:r.exact===!0?"":k.value===!0?` ${r.activeClass}`:"":"");function w(a){try{return c.$router.resolve(a)}catch{}return null}function B(a,{returnRouterError:v,to:d=r.to,replace:m=r.replace}={}){if(r.disable===!0)return a.preventDefault(),Promise.resolve(!1);if(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey||a.button!==void 0&&a.button!==0||r.target==="_blank")return Promise.resolve(!1);a.preventDefault();const p=c.$router[m===!0?"replace":"push"](d);return v===!0?p:p.then(()=>{}).catch(()=>{})}function V(a){if(s.value===!0){const v=d=>B(a,d);o("click",a,v),a.defaultPrevented!==!0&&v()}else o("click",a)}return{hasRouterLink:s,hasHrefLink:t,hasLink:h,linkTag:b,resolvedLink:g,linkIsActive:k,linkIsExactActive:A,linkClass:K,linkAttrs:R,getLink:w,navigateToRouterLink:B,navigateOnClick:V}}export{oe as Q,le as a,N as b,ce as c,ue as d,H as u};
