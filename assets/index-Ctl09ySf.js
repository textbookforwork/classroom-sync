import{y as An,h as A,a as ct,p as K,q as xi,b as eo,l as Lt,g as Ft,$ as os,T as ue,V as ll,A as ur,F as hs,s as da,_ as R}from"./index-BHSh9Akl.js";function al(e,n){for(var o in n)e[o]=n[o];return e}function rs(e,n){for(var o in e)if(o!=="__source"&&!(o in n))return!0;for(var r in n)if(r!=="__source"&&e[r]!==n[r])return!0;return!1}function ss(e){this.props=e}function ms(e,n){function o(i){var s=this.props.ref,l=s==i.ref;return!l&&s&&(s.call?s(null):s.current=null),n?!n(this.props,i)||!l:rs(this.props,i)}function r(i){return this.shouldComponentUpdate=o,An(e,i)}return r.displayName="Memo("+(e.displayName||e.name)+")",r.prototype.isReactComponent=!0,r.__f=!0,r}(ss.prototype=new eo).isPureReactComponent=!0,ss.prototype.shouldComponentUpdate=function(e,n){return rs(this.props,e)||rs(this.state,n)};var wi=Lt.__b;Lt.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),wi&&wi(e)};var _a=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function hr(e){function n(o){var r=al({},o);return delete r.ref,e(r,o.ref||null)}return n.$$typeof=_a,n.render=n,n.prototype.isReactComponent=n.__f=!0,n.displayName="ForwardRef("+(e.displayName||e.name)+")",n}var ua=Lt.__e;Lt.__e=function(e,n,o,r){if(e.then){for(var i,s=n;s=s.__;)if((i=s.__c)&&i.__c)return n.__e==null&&(n.__e=o.__e,n.__k=o.__k),i.__c(e,n)}ua(e,n,o,r)};var vi=Lt.unmount;function cl(e,n,o){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach(function(r){typeof r.__c=="function"&&r.__c()}),e.__c.__H=null),(e=al({},e)).__c!=null&&(e.__c.__P===o&&(e.__c.__P=n),e.__c=null),e.__k=e.__k&&e.__k.map(function(r){return cl(r,n,o)})),e}function dl(e,n,o){return e&&o&&(e.__v=null,e.__k=e.__k&&e.__k.map(function(r){return dl(r,n,o)}),e.__c&&e.__c.__P===n&&(e.__e&&o.appendChild(e.__e),e.__c.__e=!0,e.__c.__P=o)),e}function lr(){this.__u=0,this.t=null,this.__b=null}function _l(e){var n=e.__.__c;return n&&n.__a&&n.__a(e)}function vo(){this.u=null,this.o=null}Lt.unmount=function(e){var n=e.__c;n&&n.__R&&n.__R(),n&&32&e.__u&&(e.type=null),vi&&vi(e)},(lr.prototype=new eo).__c=function(e,n){var o=n.__c,r=this;r.t==null&&(r.t=[]),r.t.push(o);var i=_l(r.__v),s=!1,l=function(){s||(s=!0,o.__R=null,i?i(d):d())};o.__R=l;var d=function(){if(!--r.__u){if(r.state.__a){var c=r.state.__a;r.__v.__k[0]=dl(c,c.__c.__P,c.__c.__O)}var b;for(r.setState({__a:r.__b=null});b=r.t.pop();)b.forceUpdate()}};r.__u++||32&n.__u||r.setState({__a:r.__b=r.__v.__k[0]}),e.then(l,l)},lr.prototype.componentWillUnmount=function(){this.t=[]},lr.prototype.render=function(e,n){if(this.__b){if(this.__v.__k){var o=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=cl(this.__b,o,r.__O=r.__P)}this.__b=null}var i=n.__a&&An(Ft,null,e.fallback);return i&&(i.__u&=-33),[An(Ft,null,n.__a?null:e.children),i]};var ki=function(e,n,o){if(++o[1]===o[0]&&e.o.delete(n),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.o.size))for(o=e.u;o;){for(;o.length>3;)o.pop()();if(o[1]<o[0])break;e.u=o=o[2]}};function ha(e){return this.getChildContext=function(){return e.context},e.children}function ma(e){var n=this,o=e.i;n.componentWillUnmount=function(){xi(null,n.l),n.l=null,n.i=null},n.i&&n.i!==o&&n.componentWillUnmount(),n.l||(n.i=o,n.l={nodeType:1,parentNode:o,childNodes:[],appendChild:function(r){this.childNodes.push(r),n.i.appendChild(r)},insertBefore:function(r,i){this.childNodes.push(r),n.i.appendChild(r)},removeChild:function(r){this.childNodes.splice(this.childNodes.indexOf(r)>>>1,1),n.i.removeChild(r)}}),xi(An(ha,{context:n.context},e.__v),n.l)}function mr(e,n){var o=An(ma,{__v:e,i:n});return o.containerInfo=n,o}(vo.prototype=new eo).__a=function(e){var n=this,o=_l(n.__v),r=n.o.get(e);return r[0]++,function(i){var s=function(){n.props.revealOrder?(r.push(i),ki(n,e,r)):i()};o?o(s):s()}},vo.prototype.render=function(e){this.u=null,this.o=new Map;var n=os(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&n.reverse();for(var o=n.length;o--;)this.o.set(n[o],this.u=[1,0,this.u]);return e.children},vo.prototype.componentDidUpdate=vo.prototype.componentDidMount=function(){var e=this;this.o.forEach(function(n,o){ki(e,o,n)})};var pa=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,ga=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,fa=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,ya=/[A-Z0-9]/g,ba=typeof document<"u",xa=function(e){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(e)};eo.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(eo.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(n){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:n})}})});var Si=Lt.event;function wa(){}function va(){return this.cancelBubble}function ka(){return this.defaultPrevented}Lt.event=function(e){return Si&&(e=Si(e)),e.persist=wa,e.isPropagationStopped=va,e.isDefaultPrevented=ka,e.nativeEvent=e};var ps,Sa={enumerable:!1,configurable:!0,get:function(){return this.class}},Ci=Lt.vnode;Lt.vnode=function(e){typeof e.type=="string"&&(function(n){var o=n.props,r=n.type,i={};for(var s in o){var l=o[s];if(!(s==="value"&&"defaultValue"in o&&l==null||ba&&s==="children"&&r==="noscript"||s==="class"||s==="className")){var d=s.toLowerCase();s==="defaultValue"&&"value"in o&&o.value==null?s="value":s==="download"&&l===!0?l="":d==="ondoubleclick"?s="ondblclick":d!=="onchange"||r!=="input"&&r!=="textarea"||xa(o.type)?d==="onfocus"?s="onfocusin":d==="onblur"?s="onfocusout":fa.test(s)?s=d:r.indexOf("-")===-1&&ga.test(s)?s=s.replace(ya,"-$&").toLowerCase():l===null&&(l=void 0):d=s="oninput",d==="oninput"&&i[s=d]&&(s="oninputCapture"),i[s]=l}}r=="select"&&i.multiple&&Array.isArray(i.value)&&(i.value=os(o.children).forEach(function(c){c.props.selected=i.value.indexOf(c.props.value)!=-1})),r=="select"&&i.defaultValue!=null&&(i.value=os(o.children).forEach(function(c){c.props.selected=i.multiple?i.defaultValue.indexOf(c.props.value)!=-1:i.defaultValue==c.props.value})),o.class&&!o.className?(i.class=o.class,Object.defineProperty(i,"className",Sa)):(o.className&&!o.class||o.class&&o.className)&&(i.class=i.className=o.className),n.props=i})(e),e.$$typeof=pa,Ci&&Ci(e)};var Mi=Lt.__r;Lt.__r=function(e){Mi&&Mi(e),ps=e.__c};var $i=Lt.diffed;Lt.diffed=function(e){$i&&$i(e);var n=e.props,o=e.__e;o!=null&&e.type==="textarea"&&"value"in n&&n.value!==o.value&&(o.value=n.value==null?"":n.value),ps=null};var Ca={ReactCurrentDispatcher:{current:{readContext:function(e){return ps.__n[e.__c].props.value}}}};function ul(e,n){var o=n(),r=A({h:{__:o,v:n}}),i=r[0].h,s=r[1];return ct(function(){i.__=o,i.v=n,Ur(i)&&s({h:i})},[e,o,n]),K(function(){return Ur(i)&&s({h:i}),e(function(){Ur(i)&&s({h:i})})},[e]),o}function Ur(e){var n,o,r=e.v,i=e.__;try{var s=r();return!((n=i)===(o=s)&&(n!==0||1/n==1/o)||n!=n&&o!=o)}catch{return!0}}const Ma=Object.freeze(Object.defineProperty({__proto__:null,Component:eo,Fragment:Ft,PureComponent:ss,Suspense:lr,SuspenseList:vo,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:Ca,createElement:An,createPortal:mr,forwardRef:hr,memo:ms,useCallback:ue,useEffect:K,useId:ll,useImperativeHandle:ur,useLayoutEffect:ct,useMemo:hs,useReducer:da,useRef:R,useState:A,useSyncExternalStore:ul},Symbol.toStringTag,{value:"Module"}));var $a=0;function t(e,n,o,r,i,s){var l,d,c={};for(d in n)d=="ref"?l=n[d]:c[d]=n[d];var b={type:e,props:c,key:o,ref:l,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:--$a,__i:-1,__u:0,__source:i,__self:s};if(typeof e=="function"&&(l=e.defaultProps))for(d in l)c[d]===void 0&&(c[d]=l[d]);return Lt.vnode&&Lt.vnode(b),b}var hl=["data-feedback-toolbar","data-annotation-popup","data-annotation-marker"],Xr=hl.flatMap(e=>[`:not([${e}])`,`:not([${e}] *)`]).join(""),is="feedback-freeze-styles",ls="__agentation_freeze";function Ia(){return typeof window>"u"?{frozen:!1,installed:!0,origSetTimeout:setTimeout,origSetInterval:setInterval,origRAF:n=>0,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]}:window[ls]??{frozen:!1,installed:!1,origSetTimeout:window.setTimeout.bind(window),origSetInterval:window.setInterval.bind(window),origRAF:window.requestAnimationFrame.bind(window),pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]}}var Fe=Ia();function ml(){if(typeof window>"u")return;const e=window;Fe=e[ls]??(e[ls]=Fe),!Fe.installed&&(window.setTimeout=(n,o,...r)=>typeof n=="string"?Fe.origSetTimeout(n,o):Fe.origSetTimeout((...i)=>{Fe.frozen?Fe.frozenTimeoutQueue.push(()=>n(...i)):n(...i)},o,...r),window.setInterval=(n,o,...r)=>typeof n=="string"?Fe.origSetInterval(n,o):Fe.origSetInterval((...i)=>{Fe.frozen||n(...i)},o,...r),window.requestAnimationFrame=n=>Fe.origRAF(o=>{Fe.frozen?Fe.frozenRAFQueue.push(n):n(o)}),Fe.installed=!0)}var Ve=Fe.origSetTimeout,pl=Fe.origSetInterval,dr=Fe.origRAF;function Na(e){return e?hl.some(n=>{var o;return!!((o=e.closest)!=null&&o.call(e,`[${n}]`))}):!1}function Ea(){if(typeof document>"u"||(ml(),Fe.frozen))return;Fe.frozen=!0,Fe.frozenTimeoutQueue=[],Fe.frozenRAFQueue=[];let e=document.getElementById(is);e||(e=document.createElement("style"),e.id=is),e.textContent=`
    *${Xr},
    *${Xr}::before,
    *${Xr}::after {
      animation-play-state: paused !important;
      transition: none !important;
    }
  `,document.head.appendChild(e),Fe.pausedAnimations=[];try{document.getAnimations().forEach(n=>{var r;if(n.playState!=="running")return;const o=(r=n.effect)==null?void 0:r.target;Na(o)||(n.pause(),Fe.pausedAnimations.push(n))})}catch{}document.querySelectorAll("video").forEach(n=>{n.paused||(n.dataset.wasPaused="false",n.pause())})}function Ii(){var o;if(typeof document>"u"||!Fe.frozen)return;Fe.frozen=!1;const e=Fe.frozenTimeoutQueue;Fe.frozenTimeoutQueue=[];for(const r of e)Fe.origSetTimeout(()=>{if(Fe.frozen){Fe.frozenTimeoutQueue.push(r);return}try{r()}catch(i){console.warn("[agentation] Error replaying queued timeout:",i)}},0);const n=Fe.frozenRAFQueue;Fe.frozenRAFQueue=[];for(const r of n)Fe.origRAF(i=>{if(Fe.frozen){Fe.frozenRAFQueue.push(r);return}r(i)});for(const r of Fe.pausedAnimations)try{r.play()}catch(i){console.warn("[agentation] Error resuming animation:",i)}Fe.pausedAnimations=[],(o=document.getElementById(is))==null||o.remove(),document.querySelectorAll("video").forEach(r=>{r.dataset.wasPaused==="false"&&(r.play().catch(()=>{}),delete r.dataset.wasPaused)})}function Ni(){const e=hs(()=>{let n=0;const o=new Set,r=()=>(o.forEach(clearTimeout),o.clear(),++n),i=l=>l===n;return{start:r,isCurrent:i,schedule:(l,d,c)=>{if(!i(l))return;const b=Ve(()=>{o.delete(b),i(l)&&d()},c);o.add(b)}}},[]);return K(()=>()=>{e.start()},[e]),e}function Ra(e,n,o,r){const i=b=>r.get(b.id)??b.id,s=new Map(e.map(b=>[i(b),b])),l=new Map(n.map(b=>[i(b),b])),d=new Set(o.map(b=>b.id)),c=[];for(const b of o){const f=s.get(b.id),m=l.get(b.id);if(f&&!m)continue;const g=m&&f&&m.comment!==f.comment;c.push(g?{...b,comment:m.comment}:b)}for(const[b,f]of l)!s.has(b)&&!d.has(b)&&c.push(f);return c}function $o(e){if(e.tagName!=="IFRAME")return null;try{return e.contentDocument}catch{return null}}function zt(e,n=document){var o;if(e===n)return null;try{return(o=e.defaultView)==null?void 0:o.frameElement}catch{return null}}function gs(e){return e.nodeType===11&&"host"in e}function no(e){var f;const n=e.getBoundingClientRect(),o=e.offsetWidth?n.width/e.offsetWidth:1,r=e.offsetHeight?n.height/e.offsetHeight:1,i=(f=e.ownerDocument.defaultView)==null?void 0:f.getComputedStyle(e),s=m=>parseFloat(m||"0")||0,l=s(i==null?void 0:i.paddingLeft),d=s(i==null?void 0:i.paddingTop),c=e.clientWidth-l-s(i==null?void 0:i.paddingRight),b=e.clientHeight-d-s(i==null?void 0:i.paddingBottom);return{x:n.left+(e.clientLeft+l)*o,y:n.top+(e.clientTop+d)*r,sx:o,sy:r,width:c*o,height:b*r}}function Ei(e){try{const n=new URL(e);return n.origin+n.pathname}catch{return e}}function La(e,n,o,r=document){let i=zt(e,r);for(;i;){const s=no(i);n=s.x+n*s.sx,o=s.y+o*s.sy,i=zt(i.ownerDocument,r)}return{x:n,y:o}}function ft(e,n=document){const o=e.getBoundingClientRect();return gl(e.ownerDocument,o,n)}function gl(e,n,o){if(!zt(e,o))return n;let r=n.left,i=n.top,s=n.right,l=n.bottom,d=zt(e,o);for(;d;){const c=no(d);r=Math.max(c.x,c.x+r*c.sx),i=Math.max(c.y,c.y+i*c.sy),s=Math.min(c.x+c.width,c.x+s*c.sx),l=Math.min(c.y+c.height,c.y+l*c.sy),d=zt(d.ownerDocument,o)}return new DOMRect(r,i,Math.max(0,s-r),Math.max(0,l-i))}function pr(e){const n=[];for(const o of e.querySelectorAll("*"))o.tagName==="IFRAME"&&n.push(o),o.shadowRoot&&o.tagName!=="AGENTATION-TOOLBAR"&&n.push(...pr(o.shadowRoot));return n}function Ta(e,n,o,r=document){const i=[];for(let m=zt(e.ownerDocument,r);m;m=zt(m.ownerDocument,r))i.unshift(m);if(!i.length)return;const s=i.map(m=>{var v;const g=no(m);return n=(n-g.x)/g.sx,o=(o-g.y)/g.sy,{index:pr(m.ownerDocument).indexOf(m),id:m.id||void 0,url:((v=$o(m))==null?void 0:v.URL)??""}}),l=e.ownerDocument.defaultView;let d=!1;for(let m=e;m;m=m.parentElement)if(["fixed","sticky"].includes(l.getComputedStyle(m).position)){d=!0;break}const c=d?0:l.scrollX,b=d?0:l.scrollY,f=e.getBoundingClientRect();return{path:s,x:n+c,y:o+b,fixed:d,boundingBox:{x:f.left+c,y:f.top+b,width:f.width,height:f.height}}}function Ba(e=document){const n=new Map,o=r=>{let i=n.get(r);return i||(i=pr(r),n.set(r,i)),i};return r=>Da(r,e,o)}function Da(e,n=document,o=pr){const r=e.frame;if(!r)return e;let i=n;for(const v of r.path){const x=o(i),$=v.id?x.find(O=>O.id===v.id):x[v.index],T=$&&$o($);if(!T||Ei(T.URL)!==Ei(v.url))return null;i=T}const s=i.defaultView,l=r.fixed?0:s.scrollX,d=r.fixed?0:s.scrollY;let c=r.x-l,b=r.y-d;for(let v=i,x=zt(i,n);x;x=zt(v,n)){const $=v.defaultView;if(c<0||b<0||c>$.innerWidth||b>$.innerHeight)return null;const T=no(x);if(T.width<=0||T.height<=0)return null;c=T.x+c*T.sx,b=T.y+b*T.sy,v=x.ownerDocument}const f=r.boundingBox,m=gl(i,new DOMRect(f.x-l,f.y-d,f.width,f.height),n),g=n.defaultView;return{...e,x:c/g.innerWidth*100,y:b+(e.isFixed?0:g.scrollY),boundingBox:{x:m.x,y:m.y+(e.isFixed?0:g.scrollY),width:m.width,height:m.height}}}function Pa(e,n,o){if(!("clientX"in e)||n===o)return e;const r=La(n,e.clientX,e.clientY,o);return new Proxy(e,{get(i,s){if(s==="clientX")return r.x;if(s==="clientY")return r.y;const l=Reflect.get(i,s,i);return typeof l=="function"?l.bind(i):l}})}function Aa(e,n){const o=new Set([e]),r=new Set;let i=[],s=new Set,l=!1,d=!1,c;const b=(m,g)=>{const v=x=>m.listener(Pa(x,g,e));m.handlers.set(g,v),g.addEventListener(m.type,v,m.options)},f=()=>{if(l=!1,!d)return;const m=new Set,g=new Set,v=[],x=$=>{v.push($);for(const T of $.querySelectorAll("*"))if(!T.matches("agentation-toolbar, [data-agentation-portal]")&&(T.shadowRoot&&x(T.shadowRoot),T.tagName==="IFRAME")){g.add(T);const O=$o(T);O&&!m.has(O)&&(m.add(O),x(O))}};m.add(e),x(e);for(const $ of o)if(!m.has($)){for(const T of r){const O=T.handlers.get($);O&&$.removeEventListener(T.type,O,T.options),T.handlers.delete($)}o.delete($)}for(const $ of m)if(!o.has($)){o.add($);for(const T of r)b(T,$)}for(const $ of s)g.has($)||$.removeEventListener("load",f);for(const $ of g)s.has($)||$.addEventListener("load",f);s=g,c==null||c.disconnect(),s.forEach($=>c==null?void 0:c.observe($)),i.forEach($=>$.disconnect()),i=v.map($=>{const T=new MutationObserver(O=>{O.some(z=>[...z.addedNodes,...z.removedNodes].some(p=>p.nodeType===1&&!p.closest("agentation-toolbar, [data-agentation-portal]")&&(p.tagName==="IFRAME"||!!p.shadowRoot||!!p.querySelector("iframe"))))&&!l&&(l=!0,queueMicrotask(f))});return T.observe($,{childList:!0,subtree:!0}),T}),n==null||n()};return{start(){d||(d=!0,typeof ResizeObserver=="function"&&(c=new ResizeObserver(()=>n==null?void 0:n())),f())},stop(){d=!1,c==null||c.disconnect(),c=void 0,i.forEach(m=>m.disconnect()),i=[];for(const m of s)m.removeEventListener("load",f);s.clear();for(const m of r)for(const[g,v]of m.handlers)g.removeEventListener(m.type,v,m.options);r.clear(),o.clear(),o.add(e)},addEventListener(m,g,v){const x={type:m,listener:g,options:v,handlers:new Map};r.add(x);for(const $ of o)b(x,$)},removeEventListener(m,g,v){for(const x of r)if(x.type===m&&x.listener===g){for(const[$,T]of x.handlers)$.removeEventListener(m,T,x.options);r.delete(x)}},querySelectorAll(m){return[...o].flatMap(g=>[...g.querySelectorAll(m)])}}}var fs=["data-testid","data-test","data-qa","data-cy","data-component"];function ko(e,n=fs){const o={};for(const r of[...new Set(n)].slice(0,16)){if(!/^[a-zA-Z_][\w:.-]*$/.test(r))continue;const i=e.getAttribute(r);i!=null&&i.length<=500&&Object.defineProperty(o,r,{value:i,enumerable:!0})}return o}function Oa(e,n=fs){return Object.entries(ko(e,n)).filter(([o,r])=>/^data-[a-z0-9_-]+$/.test(o)&&r.length<=120).slice(0,2).map(([o,r])=>`[${o}="${r.replace(/[\\"\n\r\f\0]/g,i=>i==="\\"||i==='"'?`\\${i}`:`\\${i.charCodeAt(0).toString(16)} `)}"]`).join("")}function to(e){if(e.parentElement)return e.parentElement;const n=e.getRootNode();return gs(n)?n.host:null}function $t(e,n){let o=e;for(;o;){if(o.matches(n))return o;o=to(o)}return null}function fl(e,n=4,o){const r=[];let i=e,s=0;for(;i&&s<n;){const d=i.tagName.toLowerCase();if(d==="html"||d==="body"){r.length===0&&r.push(d);break}let c=d;if(i.id)c=`#${i.id}`;else if(i.className&&typeof i.className=="string"){const f=i.className.split(/\s+/).find(m=>m.length>2&&!m.match(/^[a-z]{1,2}$/)&&!m.match(/[A-Z0-9]{5,}/));f&&(c=`.${f.split("_")[0]}`)}c+=Oa(i,o);const b=to(i);!i.parentElement&&b&&(c=`⟨shadow⟩ ${c}`),r.unshift(c),i=b,s++}const l=zt(e.ownerDocument);return(l?fl(l,2)+" > ⟨iframe⟩ ":"")+r.join(" > ")}function Wa(e){var o;let n="";for(const r of e.childNodes)if(r.nodeType===Node.TEXT_NODE){const i=(o=r.textContent)==null?void 0:o.trim();i&&(n+=(n?" ":"")+i)}return n}function Zn(e,n){var i,s,l,d,c,b,f,m;const o=fl(e,4,n);if(e.dataset.element)return{name:e.dataset.element,path:o};const r=e.tagName.toLowerCase();if(["path","circle","rect","line","g"].includes(r)){const g=$t(e,"svg");if(g){const v=to(g);if((v==null?void 0:v.namespaceURI)==="http://www.w3.org/1999/xhtml")return{name:`graphic in ${Zn(v).name}`,path:o}}return{name:"graphic element",path:o}}if(r==="svg"){const g=to(e);if((g==null?void 0:g.tagName.toLowerCase())==="button"){const v=(i=g.textContent)==null?void 0:i.trim();return{name:v?`icon in "${v}" button`:"button icon",path:o}}return{name:"icon",path:o}}if(r==="button"){const g=(s=e.textContent)==null?void 0:s.trim(),v=e.getAttribute("aria-label");return v?{name:`button [${v}]`,path:o}:{name:g?`button "${g.slice(0,25)}"`:"button",path:o}}if(r==="a"){const g=(l=e.textContent)==null?void 0:l.trim(),v=e.getAttribute("href");return g?{name:`link "${g.slice(0,25)}"`,path:o}:v?{name:`link to ${v.slice(0,30)}`,path:o}:{name:"link",path:o}}if(r==="input"){const g=e.getAttribute("type")||"text",v=e.getAttribute("placeholder"),x=e.getAttribute("name");return v?{name:`input "${v}"`,path:o}:x?{name:`input [${x}]`,path:o}:{name:`${g} input`,path:o}}if(["h1","h2","h3","h4","h5","h6"].includes(r)){const g=(d=e.textContent)==null?void 0:d.trim();return{name:g?`${r} "${g.slice(0,35)}"`:r,path:o}}if(r==="p"){const g=(c=e.textContent)==null?void 0:c.trim();return g?{name:`paragraph: "${g.slice(0,40)}${g.length>40?"...":""}"`,path:o}:{name:"paragraph",path:o}}if(r==="span"||r==="label"){const g=(b=e.textContent)==null?void 0:b.trim();return g&&g.length<40?{name:`"${g}"`,path:o}:{name:r,path:o}}if(r==="li"){const g=(f=e.textContent)==null?void 0:f.trim();return g&&g.length<40?{name:`list item: "${g.slice(0,35)}"`,path:o}:{name:"list item",path:o}}if(r==="blockquote")return{name:"blockquote",path:o};if(r==="code"){const g=(m=e.textContent)==null?void 0:m.trim();return g&&g.length<30?{name:`code: \`${g}\``,path:o}:{name:"code",path:o}}if(r==="pre")return{name:"code block",path:o};if(r==="img"){const g=e.getAttribute("alt");return{name:g?`image "${g.slice(0,30)}"`:"image",path:o}}if(r==="video")return{name:"video",path:o};if(["div","section","article","nav","header","footer","aside","main"].includes(r)){const g=e.className,v=e.getAttribute("role"),x=e.getAttribute("aria-label");if(x)return{name:`${r} [${x}]`,path:o};if(v)return{name:`${v}`,path:o};const $=Wa(e);if($&&$.length<50)return{name:`"${$}"`,path:o};if(typeof g=="string"&&g){const T=g.split(/[\s_-]+/).map(O=>O.replace(/[A-Z0-9]{5,}.*$/,"")).filter(O=>O.length>2&&!/^[a-z]{1,2}$/.test(O)).slice(0,2);if(T.length>0)return{name:T.join(" "),path:o}}return{name:r==="div"?"container":r,path:o}}return{name:r,path:o}}function go(e){var s,l,d;const n=[],o=(s=e.textContent)==null?void 0:s.trim();o&&o.length<100&&n.push(o);const r=e.previousElementSibling;if(r){const c=(l=r.textContent)==null?void 0:l.trim();c&&c.length<50&&n.unshift(`[before: "${c.slice(0,40)}"]`)}const i=e.nextElementSibling;if(i){const c=(d=i.textContent)==null?void 0:d.trim();c&&c.length<50&&n.push(`[after: "${c.slice(0,40)}"]`)}return n.join(" ")}function Xo(e){const n=to(e);if(!n)return"";const o=e.getRootNode(),i=(gs(o)&&e.parentElement?Array.from(e.parentElement.children):Array.from(n.children)).filter(f=>f!==e&&f.namespaceURI==="http://www.w3.org/1999/xhtml");if(i.length===0)return"";const s=i.slice(0,4).map(f=>{var x;const m=f.tagName.toLowerCase(),g=f.className;let v="";if(typeof g=="string"&&g){const $=g.split(/\s+/).map(T=>T.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(T=>T.length>2&&!/^[a-z]{1,2}$/.test(T));$&&(v=`.${$}`)}if(m==="button"||m==="a"){const $=(x=f.textContent)==null?void 0:x.trim().slice(0,15);if($)return`${m}${v} "${$}"`}return`${m}${v}`});let d=n.tagName.toLowerCase();if(typeof n.className=="string"&&n.className){const f=n.className.split(/\s+/).map(m=>m.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(m=>m.length>2&&!/^[a-z]{1,2}$/.test(m));f&&(d=`.${f}`)}const c=n.children.length,b=c>s.length+1?` (${c} total in ${d})`:"";return s.join(", ")+b}function fo(e){const n=e.className;return typeof n!="string"||!n?"":n.split(/\s+/).filter(r=>r.length>0).map(r=>{const i=r.match(/^([a-zA-Z][a-zA-Z0-9_-]*?)(?:_[a-zA-Z0-9]{5,})?$/);return i?i[1]:r}).filter((r,i,s)=>s.indexOf(r)===i).join(", ")}var yl=new Set(["none","normal","auto","0px","rgba(0, 0, 0, 0)","transparent","static","visible"]),Fa=new Set(["p","span","h1","h2","h3","h4","h5","h6","label","li","td","th","blockquote","figcaption","caption","legend","dt","dd","pre","code","em","strong","b","i","a","time","cite","q"]),za=new Set(["input","textarea","select"]),Ha=new Set(["img","video","canvas","svg"]),Ya=new Set(["div","section","article","nav","header","footer","aside","main","ul","ol","form","fieldset"]);function Qo(e){if(typeof window>"u")return{};const n=(e.ownerDocument.defaultView??window).getComputedStyle(e),o={},r=e.tagName.toLowerCase();let i;Fa.has(r)?i=["color","fontSize","fontWeight","fontFamily","lineHeight"]:r==="button"||r==="a"&&e.getAttribute("role")==="button"?i=["backgroundColor","color","padding","borderRadius","fontSize"]:za.has(r)?i=["backgroundColor","color","padding","borderRadius","fontSize"]:Ha.has(r)?i=["width","height","objectFit","borderRadius"]:Ya.has(r)?i=["display","padding","margin","gap","backgroundColor"]:i=["color","fontSize","margin","padding","backgroundColor"];for(const s of i){const l=s.replace(/([A-Z])/g,"-$1").toLowerCase(),d=n.getPropertyValue(l);d&&!yl.has(d)&&(o[s]=d)}return o}var ja=["color","backgroundColor","borderColor","fontSize","fontWeight","fontFamily","lineHeight","letterSpacing","textAlign","width","height","padding","margin","border","borderRadius","display","position","top","right","bottom","left","zIndex","flexDirection","justifyContent","alignItems","gap","opacity","visibility","overflow","boxShadow","transform"];function qo(e){if(typeof window>"u")return"";const n=(e.ownerDocument.defaultView??window).getComputedStyle(e),o=[];for(const r of ja){const i=r.replace(/([A-Z])/g,"-$1").toLowerCase(),s=n.getPropertyValue(i);s&&!yl.has(s)&&o.push(`${i}: ${s}`)}return o.join("; ")}function Ua(e){if(!e)return;const n={},o=e.split(";").map(r=>r.trim()).filter(Boolean);for(const r of o){const i=r.indexOf(":");if(i>0){const s=r.slice(0,i).trim(),l=r.slice(i+1).trim();s&&l&&(n[s]=l)}}return Object.keys(n).length>0?n:void 0}function Vo(e){const n=[],o=e.getAttribute("role"),r=e.getAttribute("aria-label"),i=e.getAttribute("aria-describedby"),s=e.getAttribute("tabindex"),l=e.getAttribute("aria-hidden");return o&&n.push(`role="${o}"`),r&&n.push(`aria-label="${r}"`),i&&n.push(`aria-describedby="${i}"`),s&&n.push(`tabindex=${s}`),l==="true"&&n.push("aria-hidden"),e.matches("a, button, input, select, textarea, [tabindex]")&&n.push("focusable"),n.join(", ")}function So(e){const n=[];let o=e;for(;o&&o.tagName.toLowerCase()!=="html";){const i=o.tagName.toLowerCase();let s=i;if(o.id)s=`${i}#${o.id}`;else if(o.className&&typeof o.className=="string"){const d=o.className.split(/\s+/).map(c=>c.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(c=>c.length>2);d&&(s=`${i}.${d}`)}const l=to(o);!o.parentElement&&l&&(s=`⟨shadow⟩ ${s}`),n.unshift(s),o=l}const r=zt(e.ownerDocument);return(r?So(r)+" > ⟨iframe⟩ ":"")+n.join(" > ")}var bl="agentation-toolbar, [data-agentation-root], [data-feedback-toolbar], [data-annotation-popup], [data-annotation-marker]",Xa=new Set(["DIV","SPAN","SECTION","ARTICLE","MAIN","ASIDE","HEADER","FOOTER","NAV"]);function ar(e,n){var i,s,l;let o=document.elementFromPoint(e,n);const r=new Set;for(;o&&!r.has(o);){r.add(o);const d=$o(o);let c;if(d){const b=no(o);e=(e-b.x)/b.sx,n=(n-b.y)/b.sy,c=(i=d.elementFromPoint)==null?void 0:i.call(d,e,n)}else c=(l=(s=o.shadowRoot)==null?void 0:s.elementFromPoint)==null?void 0:l.call(s,e,n);if(!c||c===o)break;o=c}return o}function Qa(e){if(typeof e.checkVisibility=="function")return e.checkVisibility({checkOpacity:!0,checkVisibilityCSS:!0});const n=getComputedStyle(e);if(n.visibility==="hidden"||n.visibility==="collapse")return!1;let o=e;for(;o;){const r=getComputedStyle(o);if(r.opacity==="0"||r.display==="none"||r.contentVisibility==="hidden")return!1;const i=o.getRootNode();o=o.parentElement||(gs(i)?i.host:null)}return!0}function xl(e,n){var s;const o=[],r=new Set,i=(l,d,c)=>{var b,f,m,g;for(const v of l){if(r.has(v))continue;if(r.add(v),v.shadowRoot){const $=v.shadowRoot,T=((b=$.elementsFromPoint)==null?void 0:b.call($,d,c))??[];i(T.length?T:[(f=$.elementFromPoint)==null?void 0:f.call($,d,c)].filter(Boolean),d,c)}const x=$o(v);if(x){const $=no(v),T=(d-$.x)/$.sx,O=(c-$.y)/$.sy;i(((m=x.elementsFromPoint)==null?void 0:m.call(x,T,O))??[(g=x.elementFromPoint)==null?void 0:g.call(x,T,O)].filter(Boolean),T,O)}v!==v.ownerDocument.body&&v!==v.ownerDocument.documentElement&&!$t(v,bl)&&Qa(v)&&o.push(v)}};return i(((s=document.elementsFromPoint)==null?void 0:s.call(document,e,n))??[document.elementFromPoint(e,n)].filter(Boolean),e,n),o}function Go(e,n,o){if(o.width<=0||o.height<=0)return null;let r=null,i=1/0;for(const s of xl(e,n)){const l=ft(s),d=l.width/o.width,c=l.height/o.height;if(d<.5||d>2||c<.5||c>2)continue;const b=Math.abs(Math.log(d))+Math.abs(Math.log(c));b<i&&(r=s,i=b)}return r}function Ri(e,n){const o=ar(e,n);if(!o||$t(o,bl))return null;const r=xl(e,n);for(const l of r)if(!Xa.has(l.tagName)&&!l.shadowRoot||Array.from(l.childNodes).some(d=>{var c;return d.nodeType===Node.TEXT_NODE&&((c=d.textContent)==null?void 0:c.trim())}))return l;let i=null,s=1/0;for(const l of r){const d=ft(l),c=d.width*d.height;c>0&&c<s&&(i=l,s=c)}return i}function qa(e){const n=ue(o=>e?(window.addEventListener("hashchange",o),window.addEventListener("popstate",o),()=>{window.removeEventListener("hashchange",o),window.removeEventListener("popstate",o)}):()=>{},[e]);return ul(n,()=>window.location.pathname+(e?window.location.hash:""))}var Ko=new Map;function Va(e,n){const o=(Ko.get(e)??Promise.resolve()).then(n),r=o.then(()=>{},()=>{});return Ko.set(e,r),r.then(()=>{Ko.get(e)===r&&Ko.delete(e)}),o}function Ga(e,n,o){try{const r=new URL(e,o);return r.origin===o&&r.pathname+r.hash===n}catch{return!1}}var Li=typeof window>"u"?K:ct;function Ka(e){const[n,o]=A(null);return Li(()=>{const r=document.createElement("div");return r.setAttribute("data-agentation-portal",""),r.style.display="contents",o(r),()=>r.remove()},[]),Li(()=>{var l;if(!n)return;const r=e??document.body;if(r.ownerDocument!==document){console.warn("[Agentation] portalContainer belongs to another document; the toolbar will not render.");return}let i=document.activeElement;for(;(l=i==null?void 0:i.shadowRoot)!=null&&l.activeElement;)i=i.shadowRoot.activeElement;const s=i&&n.contains(document.activeElement)?i:null;typeof n.hidePopover=="function"&&n.matches(":popover-open")&&n.hidePopover(),r.appendChild(n),e&&typeof n.showPopover=="function"?(n.setAttribute("popover","manual"),n.style.cssText="position:fixed;inset:0 auto auto 0;margin:0;padding:0;border:0;background:transparent;width:0;height:0;overflow:visible;pointer-events:none",n.showPopover()):(n.removeAttribute("popover"),n.style.cssText="display:contents"),s==null||s.focus({preventScroll:!0})},[n,e]),n}var Ja=({mode:e="open",delegatesFocus:n,slotAssignment:o,host:r="div",children:i,className:s,...l})=>{const d=R(null),[c,b]=A(null);return ct(()=>{const m=d.current;if(!m||m.shadowRoot)return;const g=m.attachShadow({mode:e,delegatesFocus:n,slotAssignment:o});b(g)},[]),t(r,{ref:d,...l,...r.includes("-")?{class:s}:{className:s},children:c&&mr(i,c)})};function ys(e,n,o){const r=R(o);ct(()=>{r.current=o},[o]),ct(()=>{var d;const i=e.current;if(!n||!i)return;let s=!1;const l=((d=i.getAnimations)==null?void 0:d.call(i))??[];return Promise.allSettled(l.map(c=>c.finished)).then(()=>{s||r.current()}),()=>{s=!0}},[e,n])}var wl=`@charset "UTF-8";
.styles-module__popup___IhzrD svg[fill=none] {
  fill: none !important;
}
.styles-module__popup___IhzrD svg[fill=none] :not([fill]) {
  fill: none !important;
}

@keyframes styles-module__popupEnter___AuQDN {
  from {
    opacity: 0;
    transform: translateX(-50%) scale(0.95) translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) scale(1) translateY(0);
  }
}
@keyframes styles-module__popupExit___JJKQX {
  from {
    opacity: 1;
    transform: translateX(-50%) scale(1) translateY(0);
  }
  to {
    opacity: 0;
    transform: translateX(-50%) scale(0.95) translateY(4px);
  }
}
@keyframes styles-module__shake___jdbWe {
  0%, 100% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(0);
  }
  20% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(-3px);
  }
  40% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(3px);
  }
  60% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(-2px);
  }
  80% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(2px);
  }
}
.styles-module__popup___IhzrD {
  position: fixed;
  transform: translateX(-50%);
  width: 280px;
  padding: 0.75rem 1rem;
  background: #1a1a1a;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
  z-index: 100001;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  will-change: transform, opacity;
  opacity: 0;
}
.styles-module__popup___IhzrD.styles-module__enter___L7U7N {
  animation: styles-module__popupEnter___AuQDN 0.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}
.styles-module__popup___IhzrD.styles-module__entered___COX-w {
  opacity: 1;
  transform: translateX(-50%) scale(1) translateY(0);
}
.styles-module__popup___IhzrD.styles-module__exit___5eGjE {
  pointer-events: none;
  animation: styles-module__popupExit___JJKQX 0.15s ease-in forwards;
}
.styles-module__popup___IhzrD.styles-module__entered___COX-w.styles-module__shake___jdbWe {
  animation: styles-module__shake___jdbWe 0.25s ease-out;
}

.styles-module__header___wWsSi {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5625rem;
}

.styles-module__element___fTV2z {
  font-size: 0.75rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
}

.styles-module__headerToggle___WpW0b {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  flex: 1;
  min-width: 0;
  text-align: left;
}
.styles-module__headerToggle___WpW0b .styles-module__element___fTV2z {
  flex: 1;
}

.styles-module__chevron___ZZJlR {
  color: rgba(255, 255, 255, 0.5);
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  flex-shrink: 0;
}
.styles-module__chevron___ZZJlR.styles-module__expanded___2Hxgv {
  transform: rotate(90deg);
}

.styles-module__stylesWrapper___pnHgy {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.styles-module__stylesWrapper___pnHgy.styles-module__expanded___2Hxgv {
  grid-template-rows: 1fr;
}

.styles-module__stylesInner___YYZe2 {
  overflow: hidden;
}

.styles-module__stylesBlock___VfQKn {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0.375rem;
  padding: 0.5rem 0.625rem;
  margin-bottom: 0.5rem;
  font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace;
  font-size: 0.6875rem;
  line-height: 1.5;
}

.styles-module__styleLine___1YQiD {
  color: rgba(255, 255, 255, 0.85);
  word-break: break-word;
}

.styles-module__styleProperty___84L1i {
  color: #c792ea;
}

.styles-module__styleValue___q51-h {
  color: rgba(255, 255, 255, 0.85);
}

.styles-module__timestamp___Dtpsv {
  font-size: 0.625rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.35);
  font-variant-numeric: tabular-nums;
  margin-left: 0.5rem;
  flex-shrink: 0;
}

.styles-module__quote___mcMmQ {
  font-size: 12px;
  font-style: italic;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.5rem;
  padding: 0.4rem 0.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0.25rem;
  line-height: 1.45;
}

.styles-module__textarea___jrSae {
  box-sizing: border-box;
  width: 100%;
  padding: 0.5rem 0.625rem;
  font-size: 0.8125rem;
  font-family: inherit;
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 8px;
  resize: none;
  outline: none;
  transition: border-color 0.15s ease;
}
.styles-module__textarea___jrSae:focus {
  border-color: var(--agentation-color-blue);
}
.styles-module__textarea___jrSae.styles-module__green___99l3h:focus {
  border-color: var(--agentation-color-green);
}
.styles-module__textarea___jrSae::placeholder {
  color: rgba(255, 255, 255, 0.35);
}
.styles-module__textarea___jrSae::-webkit-scrollbar {
  width: 6px;
}
.styles-module__textarea___jrSae::-webkit-scrollbar-track {
  background: transparent;
}
.styles-module__textarea___jrSae::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 3px;
}

.styles-module__actions___D6x3f {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.375rem;
  margin-top: 0.75rem;
}

.styles-module__sourceAction___EabJb {
  display: block;
  max-width: 100%;
  margin: -2px 0 8px;
  padding: 2px 0;
  background: transparent;
  color: #fff;
  font: inherit;
  font-size: 11px;
  border: 0;
  cursor: pointer;
  opacity: 0.6;
  transition: opacity 0.15s ease;
}
.styles-module__sourceAction___EabJb:hover, .styles-module__sourceAction___EabJb:focus-visible {
  opacity: 1;
}
.styles-module__sourceAction___EabJb:focus-visible {
  outline: 2px solid currentColor;
  outline-offset: 3px;
}

.styles-module__light___6AaSQ .styles-module__sourceAction___EabJb {
  color: #111;
}

.styles-module__cancel___hRjnL,
.styles-module__submit___K-mIR,
.styles-module__deleteButton___4VuAE {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 1.875rem;
  padding: 0.375rem 0.875rem;
  font-size: 0.75rem;
  font-weight: 500;
  border-radius: 1rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease, opacity 0.15s ease;
}

.styles-module__cancel___hRjnL {
  background: transparent;
  color: rgba(255, 255, 255, 0.5);
}
.styles-module__cancel___hRjnL:hover {
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
}

.styles-module__submit___K-mIR {
  color: white;
}
.styles-module__submit___K-mIR:hover:not(:disabled) {
  filter: brightness(0.9);
}
.styles-module__submit___K-mIR:disabled {
  cursor: not-allowed;
}

.styles-module__deleteWrapper___oSjdo {
  display: flex;
  margin-right: auto;
}

.styles-module__deleteButton___4VuAE {
  background: transparent;
  color: rgba(255, 255, 255, 0.4);
  transition: background-color 0.15s ease, color 0.15s ease, transform 0.1s ease;
}
.styles-module__deleteButton___4VuAE:hover {
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
  color: var(--agentation-color-red);
}
.styles-module__deleteButton___4VuAE:active {
  transform: scale(0.92);
}

.styles-module__light___6AaSQ.styles-module__popup___IhzrD {
  background: #fff;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.06);
}
.styles-module__light___6AaSQ .styles-module__element___fTV2z {
  color: rgba(0, 0, 0, 0.6);
}
.styles-module__light___6AaSQ .styles-module__timestamp___Dtpsv {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__chevron___ZZJlR {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__stylesBlock___VfQKn {
  background: rgba(0, 0, 0, 0.03);
}
.styles-module__light___6AaSQ .styles-module__styleLine___1YQiD {
  color: rgba(0, 0, 0, 0.75);
}
.styles-module__light___6AaSQ .styles-module__styleProperty___84L1i {
  color: #7c3aed;
}
.styles-module__light___6AaSQ .styles-module__styleValue___q51-h {
  color: rgba(0, 0, 0, 0.75);
}
.styles-module__light___6AaSQ .styles-module__quote___mcMmQ {
  color: rgba(0, 0, 0, 0.55);
  background: rgba(0, 0, 0, 0.04);
}
.styles-module__light___6AaSQ .styles-module__textarea___jrSae {
  background: rgba(0, 0, 0, 0.03);
  color: #1a1a1a;
  border-color: rgba(0, 0, 0, 0.12);
}
.styles-module__light___6AaSQ .styles-module__textarea___jrSae::placeholder {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__textarea___jrSae::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.15);
}
.styles-module__light___6AaSQ .styles-module__cancel___hRjnL {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__light___6AaSQ .styles-module__cancel___hRjnL:hover {
  background: rgba(0, 0, 0, 0.06);
  color: rgba(0, 0, 0, 0.75);
}
.styles-module__light___6AaSQ .styles-module__deleteButton___4VuAE {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__deleteButton___4VuAE:hover {
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
  color: var(--agentation-color-red);
}

@media (prefers-reduced-motion: reduce) {
  .styles-module__popup___IhzrD.styles-module__enter___L7U7N, .styles-module__popup___IhzrD.styles-module__exit___5eGjE {
    animation-duration: 1ms;
    animation-delay: 0ms !important;
  }
}
.styles-module__sharedForm___8GvQl {
  --card-motion: 200ms cubic-bezier(0.2, 0.8, 0.2, 1);
  padding: 0.75rem 1rem;
  transition: padding var(--card-motion);
}
.styles-module__sharedForm___8GvQl .styles-module__header___wWsSi {
  transition: margin-bottom var(--card-motion);
}
.styles-module__sharedForm___8GvQl .styles-module__element___fTV2z {
  font-style: italic;
  color: rgba(255, 255, 255, 0.6);
}
.styles-module__sharedForm___8GvQl .styles-module__previewExcerpt___DCOIL {
  display: none;
}
.styles-module__sharedForm___8GvQl .styles-module__headerToggle___WpW0b .styles-module__chevron___ZZJlR {
  opacity: 1;
  margin-left: 0;
  transition: margin-left var(--card-motion), opacity 100ms ease-out, transform var(--card-motion);
}
.styles-module__sharedForm___8GvQl .styles-module__sharedNote___OYVi5 {
  position: relative;
  height: var(--editor-field-height, 57px);
  border-radius: 8px;
  overflow: clip;
  transition: height var(--card-motion);
}
.styles-module__sharedForm___8GvQl .styles-module__sharedNote___OYVi5::before {
  content: "";
  position: absolute;
  inset: 0;
  border: 1px solid var(--field-border, rgba(255, 255, 255, 0.15));
  border-radius: inherit;
  background: rgba(255, 255, 255, 0.05);
  pointer-events: none;
  transition: opacity var(--card-motion), border-color var(--card-motion);
}
.styles-module__sharedForm___8GvQl .styles-module__sharedNoteContent___6q3KD {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: clip;
  transition: width var(--card-motion);
}
.styles-module__sharedForm___8GvQl .styles-module__sharedNote___OYVi5[data-truncated]::after {
  content: "…";
  position: absolute;
  right: 0;
  top: 0;
  color: #fff;
  font-size: 13px;
  line-height: 1.4;
  opacity: 0;
  pointer-events: none;
  transition: opacity 80ms ease-out;
}
.styles-module__sharedForm___8GvQl .styles-module__textarea___jrSae {
  display: block;
  width: calc(280px - 2rem);
  max-width: calc(100vw - 24px - 2rem);
  margin: 0;
  background: transparent !important;
  border-color: transparent !important;
  transform: translate(0, 0);
  transition: transform var(--card-motion), color var(--card-motion);
}
.styles-module__sharedForm___8GvQl .styles-module__sharedExtra___RUBKC, .styles-module__sharedForm___8GvQl .styles-module__sharedActions___6Glpl {
  display: grid;
  grid-template-rows: 1fr;
  opacity: 1;
  transition: grid-template-rows var(--card-motion), opacity 80ms ease-out;
}
.styles-module__sharedForm___8GvQl .styles-module__sharedActions___6Glpl {
  transition-delay: 0ms, 120ms;
}
.styles-module__sharedForm___8GvQl .styles-module__sharedExtraInner___EuUh4 {
  min-height: 0;
  overflow: hidden;
}
.styles-module__sharedForm___8GvQl .styles-module__actions___D6x3f {
  min-height: 0;
  overflow: hidden;
  transition: margin-top var(--card-motion);
}
.styles-module__sharedForm___8GvQl[data-preview] {
  padding: 8px 12px;
}
.styles-module__sharedForm___8GvQl[data-preview] .styles-module__header___wWsSi {
  margin-bottom: 5px;
}
.styles-module__sharedForm___8GvQl[data-preview] .styles-module__previewExcerpt___DCOIL {
  display: inline;
}
.styles-module__sharedForm___8GvQl[data-preview] .styles-module__element___fTV2z {
  line-height: 1.4;
}
.styles-module__sharedForm___8GvQl[data-preview] .styles-module__chevron___ZZJlR {
  opacity: 0;
  margin-left: -18px;
}
.styles-module__sharedForm___8GvQl[data-preview] .styles-module__sharedNote___OYVi5 {
  height: 20.2px;
  border-radius: 0;
}
.styles-module__sharedForm___8GvQl[data-preview] .styles-module__sharedNote___OYVi5::before {
  opacity: 0;
}
.styles-module__sharedForm___8GvQl[data-preview] .styles-module__textarea___jrSae {
  transform: translate(-11px, calc(-9px + (1.4em - 1lh) / 2));
  color: #fff;
  overflow: hidden;
  cursor: default;
}
.styles-module__sharedForm___8GvQl[data-preview] .styles-module__sharedExtra___RUBKC, .styles-module__sharedForm___8GvQl[data-preview] .styles-module__sharedActions___6Glpl {
  grid-template-rows: 0fr;
  opacity: 0;
  transition-delay: 0ms;
}
.styles-module__sharedForm___8GvQl[data-preview] .styles-module__actions___D6x3f {
  margin-top: 0;
}
.styles-module__sharedForm___8GvQl[data-preview] .styles-module__stylesWrapper___pnHgy {
  grid-template-rows: 0fr;
}
.styles-module__sharedForm___8GvQl[data-preview] .styles-module__sharedNote___OYVi5[data-truncated] .styles-module__sharedNoteContent___6q3KD {
  width: calc(100% - 12px);
}
.styles-module__sharedForm___8GvQl[data-preview] .styles-module__sharedNote___OYVi5[data-truncated]::after {
  opacity: 1;
}

.styles-module__light___6AaSQ .styles-module__sharedForm___8GvQl .styles-module__sharedNote___OYVi5::before {
  border-color: var(--field-border, rgba(0, 0, 0, 0.12));
  background: rgba(0, 0, 0, 0.03);
}

.styles-module__light___6AaSQ .styles-module__sharedForm___8GvQl .styles-module__element___fTV2z {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__light___6AaSQ .styles-module__sharedForm___8GvQl[data-preview] .styles-module__textarea___jrSae, .styles-module__light___6AaSQ .styles-module__sharedForm___8GvQl[data-preview] .styles-module__sharedNote___OYVi5::after {
  color: rgba(0, 0, 0, 0.85);
}

@media (prefers-reduced-motion: reduce) {
  .styles-module__sharedForm___8GvQl {
    --card-motion: 1ms linear;
  }
  .styles-module__sharedForm___8GvQl .styles-module__sharedActions___6Glpl, .styles-module__sharedForm___8GvQl .styles-module__headerToggle___WpW0b .styles-module__chevron___ZZJlR {
    transition: opacity 100ms ease-out;
    transition-delay: 0ms;
  }
}`,Re={popup:"styles-module__popup___IhzrD",enter:"styles-module__enter___L7U7N",entered:"styles-module__entered___COX-w",exit:"styles-module__exit___5eGjE",shake:"styles-module__shake___jdbWe",header:"styles-module__header___wWsSi",element:"styles-module__element___fTV2z",headerToggle:"styles-module__headerToggle___WpW0b",chevron:"styles-module__chevron___ZZJlR",expanded:"styles-module__expanded___2Hxgv",stylesWrapper:"styles-module__stylesWrapper___pnHgy",stylesInner:"styles-module__stylesInner___YYZe2",stylesBlock:"styles-module__stylesBlock___VfQKn",styleLine:"styles-module__styleLine___1YQiD",styleProperty:"styles-module__styleProperty___84L1i",styleValue:"styles-module__styleValue___q51-h",timestamp:"styles-module__timestamp___Dtpsv",quote:"styles-module__quote___mcMmQ",textarea:"styles-module__textarea___jrSae",actions:"styles-module__actions___D6x3f",sourceAction:"styles-module__sourceAction___EabJb",light:"styles-module__light___6AaSQ",cancel:"styles-module__cancel___hRjnL",submit:"styles-module__submit___K-mIR",deleteButton:"styles-module__deleteButton___4VuAE",deleteWrapper:"styles-module__deleteWrapper___oSjdo",sharedForm:"styles-module__sharedForm___8GvQl",previewExcerpt:"styles-module__previewExcerpt___DCOIL",sharedNote:"styles-module__sharedNote___OYVi5",sharedNoteContent:"styles-module__sharedNoteContent___6q3KD",sharedExtra:"styles-module__sharedExtra___RUBKC",sharedActions:"styles-module__sharedActions___6Glpl",sharedExtraInner:"styles-module__sharedExtraInner___EuUh4"},Qr="data-agentation-styles";function vl(e,n,o){if(!o||!e)return;const r=e.nodeType===9?e.head:e.nodeType===11?e:null;if(!r||typeof r.querySelector!="function"||r.querySelector(`style[${Qr}~="toolbar"], style[${Qr}~="${n}"]`))return;const s=(e.nodeType===9?e:e.ownerDocument).createElement("style");s.setAttribute(Qr,n),s.textContent=o,r.appendChild(s)}function bs(e,n){return ue(o=>{o&&vl(o.getRootNode(),e,n)},[e,n])}function Ti(e){if(!e)return;const n=o=>o.stopImmediatePropagation();document.addEventListener("focusin",n,!0),document.addEventListener("focusout",n,!0);try{e.focus({preventScroll:!0})}finally{document.removeEventListener("focusin",n,!0),document.removeEventListener("focusout",n,!0)}}var kl=hr(function({element:n,timestamp:o,selectedText:r,placeholder:i="What should change?",initialValue:s="",submitLabel:l="Add",onSubmit:d,onCancel:c,onDelete:b,onOpenSource:f,allowEmpty:m=!1,accentColor:g="#3c82f7",computedStyles:v,disabled:x=!1,preview:$=!1,resetOnPreview:T=!0,variant:O="popup"},Se){const z=O==="card",[p,J]=A(s),[ie,X]=A(!1),[xe,W]=A(!1),_e=R(null),se=R(null),F=r?` "${r.slice(0,30)}${r.length>30?"...":""}"`:"";ct(()=>{var tt;const oe=se.current,ce=_e.current;if(!z||!oe||!ce)return;const at=()=>{oe.style.setProperty("--editor-field-height",`${ce.offsetHeight}px`)};if(at(),"CanvasRenderingContext2D"in window){const Ie=document.createElement("canvas").getContext("2d");if(Ie){const Je=getComputedStyle(ce).fontFamily;Ie.font=`13px ${Je}`;const ut=Ie.measureText(s.replace(/\s+/g," ")).width;Ie.font=`italic 12px ${Je}`;const Tt=Ie.measureText(n+F).width,ve=Math.min(200,Math.max(120,Math.ceil(Math.max(ut,Tt))+24));(tt=oe.closest("[data-annotation-card]"))==null||tt.style.setProperty("--preview-width",`${ve}px`);const Dt=oe.querySelector("[data-shared-note]");Dt&&Dt.toggleAttribute("data-truncated",ut>ve-24)}}const Ce=typeof ResizeObserver<"u"?new ResizeObserver(at):null;return Ce==null||Ce.observe(ce),()=>Ce==null?void 0:Ce.disconnect()},[z,n,s,F]),ct(()=>{$&&T&&(J(s),W(!1),_e.current&&(_e.current.scrollTop=0,_e.current.scrollLeft=0))},[$,T,s]),ur(Se,()=>({focus(){const oe=_e.current;Ti(oe),oe&&(oe.selectionStart=oe.selectionEnd=oe.value.length,oe.scrollTop=z?0:oe.scrollHeight)}}),[z]);const we=ue(()=>{x||!p.trim()&&!m||d(p.trim())},[x,p,m,d]),V=oe=>{oe.stopPropagation(),!oe.nativeEvent.isComposing&&(oe.key==="Enter"&&!oe.shiftKey&&(oe.preventDefault(),we()),oe.key==="Escape"&&c())};return t("div",{ref:se,className:z?Re.sharedForm:void 0,style:z?void 0:{display:"contents"},"data-annotation-editor":!0,"data-preview":$||void 0,children:[t("div",{className:Re.header,"data-editor-heading":!0,children:[v&&Object.keys(v).length>0?t("button",{className:Re.headerToggle,onClick:()=>{const oe=xe;W(!xe),oe&&Ve(()=>Ti(_e.current),0)},type:"button",children:[t("svg",{className:`${Re.chevron} ${xe?Re.expanded:""}`,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t("path",{d:"M5.5 10.25L9 7.25L5.75 4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),t("span",{className:Re.element,children:[n,z&&F&&t("span",{className:Re.previewExcerpt,children:F})]})]}):t("span",{className:Re.element,children:[n,z&&F&&t("span",{className:Re.previewExcerpt,children:F})]}),o&&t("span",{className:Re.timestamp,children:o})]}),f&&t("div",{className:z?Re.sharedExtra:void 0,style:z?void 0:{display:"contents"},children:t("div",{className:z?Re.sharedExtraInner:void 0,style:z?void 0:{display:"contents"},children:t("button",{type:"button",className:Re.sourceAction,onClick:f,children:"Open in editor"})})}),v&&Object.keys(v).length>0&&t("div",{className:`${Re.stylesWrapper} ${xe?Re.expanded:""}`,children:t("div",{className:Re.stylesInner,children:t("div",{className:Re.stylesBlock,children:Object.entries(v).map(([oe,ce])=>t("div",{className:Re.styleLine,children:[t("span",{className:Re.styleProperty,children:oe.replace(/([A-Z])/g,"-$1").toLowerCase()}),": ",t("span",{className:Re.styleValue,children:ce}),";"]},oe))})})}),r&&t("div",{className:z?Re.sharedExtra:void 0,style:z?void 0:{display:"contents"},children:t("div",{className:z?Re.sharedExtraInner:void 0,style:z?void 0:{display:"contents"},children:t("div",{className:Re.quote,children:["“",r.slice(0,80),r.length>80?"...":"","”"]})})}),t("div",{"data-shared-note":!0,className:z?Re.sharedNote:void 0,style:z?{"--field-border":ie?g:void 0}:{display:"contents"},children:t("div",{className:z?Re.sharedNoteContent:void 0,style:z?void 0:{display:"contents"},children:t("textarea",{ref:_e,className:Re.textarea,readOnly:$,"aria-hidden":$,style:z?void 0:{borderColor:ie?g:void 0},placeholder:i,value:$?p.replace(/\s+/g," "):p,onChange:oe=>J(oe.target.value),onFocus:()=>X(!0),onBlur:()=>X(!1),rows:2,onKeyDown:V})})}),t("div",{"data-editor-actions":!0,className:z?Re.sharedActions:void 0,style:z?void 0:{display:"contents"},children:t("div",{className:Re.actions,children:[b&&t("div",{className:Re.deleteWrapper,children:t("button",{className:Re.deleteButton,onClick:b,type:"button","aria-label":"Delete annotation",children:"Delete"})}),t("button",{className:Re.cancel,onClick:c,children:"Cancel"}),t("button",{className:Re.submit,style:{backgroundColor:g,opacity:p.trim()||m?1:.4},onClick:we,disabled:x||!p.trim()&&!m,children:l})]})})]})}),xs=hr(function({element:n,timestamp:o,selectedText:r,placeholder:i="What should change?",initialValue:s="",submitLabel:l="Add",onSubmit:d,onCancel:c,onDelete:b,onOpenSource:f,allowEmpty:m=!1,style:g,accentColor:v="#3c82f7",isExiting:x=!1,onExitComplete:$,lightMode:T=!1,computedStyles:O},Se){const[z,p]=A(!1),[J,ie]=A("initial"),X=R(null),xe=R(null);K(()=>{var V;vl((V=xe.current)==null?void 0:V.getRootNode(),"annotation-popup",wl)},[]);const W=R(null);K(()=>{const V=Ve(()=>{ie(oe=>oe==="initial"?"enter":oe)},0);return()=>{clearTimeout(V),W.current&&clearTimeout(W.current)}},[]),K(()=>{if(x)return;const V=Ve(()=>{var oe;return(oe=X.current)==null?void 0:oe.focus()},50);return()=>clearTimeout(V)},[x]);const _e=ue(()=>{W.current&&clearTimeout(W.current),p(!0),W.current=Ve(()=>{var V;p(!1),(V=X.current)==null||V.focus()},250)},[]);ur(Se,()=>({shake:_e}),[_e]);const se=ue(()=>{if($){c();return}ie("exit")},[c,$]),F=x?"exit":J;ys(xe,F==="exit",()=>{x?$==null||$():c()});const we=[Re.popup,T?Re.light:"",F==="enter"?Re.enter:"",F==="entered"?Re.entered:"",F==="exit"?Re.exit:"",z&&F!=="exit"?Re.shake:""].filter(Boolean).join(" ");return t("div",{ref:xe,className:we,"data-annotation-popup":!0,style:g,onAnimationEnd:V=>{V.target===V.currentTarget&&V.animationName.includes("popupEnter")&&!x&&ie("entered")},onKeyDownCapture:V=>{V.key!=="Escape"||V.nativeEvent.isComposing||(V.preventDefault(),V.stopPropagation(),se())},onClick:V=>V.stopPropagation(),children:t(kl,{ref:X,element:n,timestamp:o,selectedText:r,placeholder:i,initialValue:s,submitLabel:l,onSubmit:d,onCancel:se,onDelete:b,onOpenSource:f,allowEmpty:m,accentColor:v,computedStyles:O,disabled:F==="exit"})})}),gr=`.icon-transitions-module__iconState___uqK9J {
  transition: opacity 0.2s ease, transform 0.2s ease;
  transform-origin: center;
}

.icon-transitions-module__iconStateFast___HxlMm {
  transition: opacity 0.15s ease, transform 0.15s ease;
  transform-origin: center;
}

.icon-transitions-module__iconFade___nPwXg {
  transition: opacity 0.2s ease;
}

.icon-transitions-module__iconFadeFast___Ofb2t {
  transition: opacity 0.15s ease;
}

.icon-transitions-module__visible___PlHsU {
  opacity: 1 !important;
}

.icon-transitions-module__visibleScaled___8Qog- {
  opacity: 1 !important;
  transform: scale(1);
}

.icon-transitions-module__hidden___ETykt {
  opacity: 0 !important;
}

.icon-transitions-module__hiddenScaled___JXn-m {
  opacity: 0 !important;
  transform: scale(0.8);
}

.icon-transitions-module__sending___uaLN- {
  opacity: 0.5 !important;
  transform: scale(0.8);
}`,rt={iconState:"icon-transitions-module__iconState___uqK9J",iconStateFast:"icon-transitions-module__iconStateFast___HxlMm",iconFade:"icon-transitions-module__iconFade___nPwXg",iconFadeFast:"icon-transitions-module__iconFadeFast___Ofb2t",visible:"icon-transitions-module__visible___PlHsU",visibleScaled:"icon-transitions-module__visibleScaled___8Qog-",hidden:"icon-transitions-module__hidden___ETykt",hiddenScaled:"icon-transitions-module__hiddenScaled___JXn-m",sending:"icon-transitions-module__sending___uaLN-"},Za=({size:e=16})=>t("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",children:t("path",{d:"M8 3v10M3 8h10",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})}),ec=({size:e=20,...n})=>t("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n,children:[t("circle",{cx:"10",cy:"10",r:"5.375",stroke:"currentColor",strokeWidth:"1.25"}),t("path",{d:"M8.5 8.5C8.73 7.85 9.31 7.49 10 7.5C10.86 7.51 11.5 8.13 11.5 9C11.5 10.08 10 10.5 10 10.5V10.75",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),t("circle",{cx:"10",cy:"12.625",r:"0.625",fill:"currentColor"})]}),tc=({size:e=24,copied:n=!1,tint:o})=>t("svg",{ref:bs("icon-transitions",gr),width:e,height:e,viewBox:"0 0 24 24",fill:"none",style:o?{color:o,transition:"color 0.3s ease"}:void 0,children:[t("g",{className:`${rt.iconState} ${n?rt.hiddenScaled:rt.visibleScaled}`,children:[t("path",{d:"M4.75 11.25C4.75 10.4216 5.42157 9.75 6.25 9.75H12.75C13.5784 9.75 14.25 10.4216 14.25 11.25V17.75C14.25 18.5784 13.5784 19.25 12.75 19.25H6.25C5.42157 19.25 4.75 18.5784 4.75 17.75V11.25Z",stroke:"currentColor",strokeWidth:"1.5"}),t("path",{d:"M17.25 14.25H17.75C18.5784 14.25 19.25 13.5784 19.25 12.75V6.25C19.25 5.42157 18.5784 4.75 17.75 4.75H11.25C10.4216 4.75 9.75 5.42157 9.75 6.25V6.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),t("g",{className:`${rt.iconState} ${n?rt.visibleScaled:rt.hiddenScaled}`,children:[t("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),t("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})]}),nc=({size:e=24,state:n="idle"})=>{const o=n==="idle",r=n==="sent",i=n==="failed",s=n==="sending";return t("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[t("g",{className:`${rt.iconStateFast} ${o?rt.visibleScaled:s?rt.sending:rt.hiddenScaled}`,children:t("path",{d:"M9.875 14.125L12.3506 19.6951C12.7184 20.5227 13.9091 20.4741 14.2083 19.6193L18.8139 6.46032C19.0907 5.6695 18.3305 4.90933 17.5397 5.18611L4.38072 9.79174C3.52589 10.0909 3.47731 11.2816 4.30494 11.6494L9.875 14.125ZM9.875 14.125L13.375 10.625",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),t("g",{className:`${rt.iconStateFast} ${r?rt.visibleScaled:rt.hiddenScaled}`,children:[t("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),t("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),t("g",{className:`${rt.iconStateFast} ${i?rt.visibleScaled:rt.hiddenScaled}`,children:[t("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-red)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),t("path",{d:"M12 8V12",stroke:"var(--agentation-color-red)",strokeWidth:"1.5",strokeLinecap:"round"}),t("circle",{cx:"12",cy:"15",r:"0.5",fill:"var(--agentation-color-red)",stroke:"var(--agentation-color-red)",strokeWidth:"1"})]})]})},oc=({size:e=24,isOpen:n=!0})=>t("svg",{ref:bs("icon-transitions",gr),width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[t("g",{className:`${rt.iconFade} ${n?rt.visible:rt.hidden}`,children:[t("path",{d:"M3.91752 12.7539C3.65127 12.2996 3.65037 11.7515 3.9149 11.2962C4.9042 9.59346 7.72688 5.49994 12 5.49994C16.2731 5.49994 19.0958 9.59346 20.0851 11.2962C20.3496 11.7515 20.3487 12.2996 20.0825 12.7539C19.0908 14.4459 16.2694 18.4999 12 18.4999C7.73064 18.4999 4.90918 14.4459 3.91752 12.7539Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),t("path",{d:"M12 14.8261C13.5608 14.8261 14.8261 13.5608 14.8261 12C14.8261 10.4392 13.5608 9.17392 12 9.17392C10.4392 9.17392 9.17391 10.4392 9.17391 12C9.17391 13.5608 10.4392 14.8261 12 14.8261Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),t("g",{className:`${rt.iconFade} ${n?rt.hidden:rt.visible}`,children:[t("path",{d:"M18.6025 9.28503C18.9174 8.9701 19.4364 8.99481 19.7015 9.35271C20.1484 9.95606 20.4943 10.507 20.7342 10.9199C21.134 11.6086 21.1329 12.4454 20.7303 13.1328C20.2144 14.013 19.2151 15.5225 17.7723 16.8193C16.3293 18.1162 14.3852 19.2497 12.0008 19.25C11.4192 19.25 10.8638 19.1823 10.3355 19.0613C9.77966 18.934 9.63498 18.2525 10.0382 17.8493C10.2412 17.6463 10.5374 17.573 10.8188 17.6302C11.1993 17.7076 11.5935 17.75 12.0008 17.75C13.8848 17.7497 15.4867 16.8568 16.7693 15.7041C18.0522 14.5511 18.9606 13.1867 19.4363 12.375C19.5656 12.1543 19.5659 11.8943 19.4373 11.6729C19.2235 11.3049 18.921 10.8242 18.5364 10.3003C18.3085 9.98991 18.3302 9.5573 18.6025 9.28503ZM12.0008 4.75C12.5814 4.75006 13.1358 4.81803 13.6632 4.93953C14.2182 5.06741 14.362 5.74812 13.9593 6.15091C13.7558 6.35435 13.4589 6.42748 13.1771 6.36984C12.7983 6.29239 12.4061 6.25006 12.0008 6.25C10.1167 6.25 8.51415 7.15145 7.23028 8.31543C5.94678 9.47919 5.03918 10.8555 4.56426 11.6729C4.43551 11.8945 4.43582 12.1542 4.56524 12.375C4.77587 12.7343 5.07189 13.2012 5.44718 13.7105C5.67623 14.0213 5.65493 14.4552 5.38193 14.7282C5.0671 15.0431 4.54833 15.0189 4.28292 14.6614C3.84652 14.0736 3.50813 13.5369 3.27129 13.1328C2.86831 12.4451 2.86717 11.6088 3.26739 10.9199C3.78185 10.0345 4.77959 8.51239 6.22247 7.2041C7.66547 5.89584 9.61202 4.75 12.0008 4.75Z",fill:"currentColor"}),t("path",{d:"M5 19L19 5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})]}),rc=({size:e=24,isPaused:n=!1})=>t("svg",{ref:bs("icon-transitions",gr),width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[t("g",{className:`${rt.iconFadeFast} ${n?rt.hidden:rt.visible}`,children:[t("path",{d:"M8 6L8 18",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),t("path",{d:"M16 18L16 6",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),t("path",{className:`${rt.iconFadeFast} ${n?rt.visible:rt.hidden}`,d:"M17.75 10.701C18.75 11.2783 18.75 12.7217 17.75 13.299L8.75 18.4952C7.75 19.0725 6.5 18.3509 6.5 17.1962L6.5 6.80384C6.5 5.64914 7.75 4.92746 8.75 5.50481L17.75 10.701Z",stroke:"currentColor",strokeWidth:"1.5"})]}),sc=({size:e=16})=>t("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[t("path",{d:"M10.6504 5.81117C10.9939 4.39628 13.0061 4.39628 13.3496 5.81117C13.5715 6.72517 14.6187 7.15891 15.4219 6.66952C16.6652 5.91193 18.0881 7.33479 17.3305 8.57815C16.8411 9.38134 17.2748 10.4285 18.1888 10.6504C19.6037 10.9939 19.6037 13.0061 18.1888 13.3496C17.2748 13.5715 16.8411 14.6187 17.3305 15.4219C18.0881 16.6652 16.6652 18.0881 15.4219 17.3305C14.6187 16.8411 13.5715 17.2748 13.3496 18.1888C13.0061 19.6037 10.9939 19.6037 10.6504 18.1888C10.4285 17.2748 9.38135 16.8411 8.57815 17.3305C7.33479 18.0881 5.91193 16.6652 6.66952 15.4219C7.15891 14.6187 6.72517 13.5715 5.81117 13.3496C4.39628 13.0061 4.39628 10.9939 5.81117 10.6504C6.72517 10.4285 7.15891 9.38134 6.66952 8.57815C5.91193 7.33479 7.33479 5.91192 8.57815 6.66952C9.38135 7.15891 10.4285 6.72517 10.6504 5.81117Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),t("circle",{cx:"12",cy:"12",r:"2.5",stroke:"currentColor",strokeWidth:"1.5"})]}),ic=({size:e=16})=>t("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:t("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4384 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})}),lc=({size:e=16})=>t("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[t("g",{clipPath:"url(#clip0_2_53)",children:[t("path",{d:"M16.25 16.25L7.75 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),t("path",{d:"M7.75 16.25L16.25 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),t("defs",{children:t("clipPath",{id:"clip0_2_53",children:t("rect",{width:"24",height:"24",fill:"white"})})})]}),ac=({size:e=16})=>t("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none",children:[t("path",{d:"M9.99999 12.7082C11.4958 12.7082 12.7083 11.4956 12.7083 9.99984C12.7083 8.50407 11.4958 7.2915 9.99999 7.2915C8.50422 7.2915 7.29166 8.50407 7.29166 9.99984C7.29166 11.4956 8.50422 12.7082 9.99999 12.7082Z",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),t("path",{d:"M10 3.9585V5.05698",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),t("path",{d:"M10 14.9429V16.0414",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),t("path",{d:"M5.7269 5.72656L6.50682 6.50649",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),t("path",{d:"M13.4932 13.4932L14.2731 14.2731",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),t("path",{d:"M3.95834 10H5.05683",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),t("path",{d:"M14.9432 10H16.0417",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),t("path",{d:"M5.7269 14.2731L6.50682 13.4932",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),t("path",{d:"M13.4932 6.50649L14.2731 5.72656",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})]}),cc=({size:e=16})=>t("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none",children:t("path",{d:"M15.5 10.4955C15.4037 11.5379 15.0124 12.5314 14.3721 13.3596C13.7317 14.1878 12.8688 14.8165 11.8841 15.1722C10.8995 15.5278 9.83397 15.5957 8.81217 15.3679C7.79038 15.1401 6.8546 14.6259 6.11434 13.8857C5.37408 13.1454 4.85995 12.2096 4.63211 11.1878C4.40427 10.166 4.47215 9.10048 4.82781 8.11585C5.18346 7.13123 5.81218 6.26825 6.64039 5.62791C7.4686 4.98756 8.46206 4.59634 9.5045 4.5C8.89418 5.32569 8.60049 6.34302 8.67685 7.36695C8.75321 8.39087 9.19454 9.35339 9.92058 10.0794C10.6466 10.8055 11.6091 11.2468 12.6331 11.3231C13.657 11.3995 14.6743 11.1058 15.5 10.4955Z",stroke:"currentColor",strokeWidth:"1.13793",strokeLinecap:"round",strokeLinejoin:"round"})}),dc=({size:e=16})=>t("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t("path",{d:"M11.3799 6.9572L9.05645 4.63375M11.3799 6.9572L6.74949 11.5699C6.61925 11.6996 6.45577 11.791 6.277 11.8339L4.29549 12.3092C3.93194 12.3964 3.60478 12.0683 3.69297 11.705L4.16585 9.75693C4.20893 9.57947 4.29978 9.4172 4.42854 9.28771L9.05645 4.63375M11.3799 6.9572L12.3455 5.98759C12.9839 5.34655 12.9839 4.31002 12.3455 3.66897C11.7033 3.02415 10.6594 3.02415 10.0172 3.66897L9.06126 4.62892L9.05645 4.63375",stroke:"currentColor",strokeWidth:"0.9",strokeLinecap:"round",strokeLinejoin:"round"})}),_c=({size:e=16})=>t("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t("path",{d:"M8.5 3.5L4 8L8.5 12.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),uc=({size:e=24})=>t("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[t("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",stroke:"currentColor",strokeWidth:"1.5"}),t("line",{x1:"3",y1:"9",x2:"21",y2:"9",stroke:"currentColor",strokeWidth:"1.5"}),t("line",{x1:"9",y1:"9",x2:"9",y2:"21",stroke:"currentColor",strokeWidth:"1.5"})]}),hc=({content:e,children:n,...o})=>{const[r,i]=A(!1),[s,l]=A(!1),[d,c]=A({top:0,right:0}),b=R(null),f=R(null),m=R(null),g=()=>{if(b.current){const $=b.current.getBoundingClientRect();c({top:$.top+$.height/2,right:window.innerWidth-$.left+8})}},v=()=>{l(!0),m.current&&(clearTimeout(m.current),m.current=null),g(),f.current=Ve(()=>{i(!0)},500)},x=()=>{f.current&&(clearTimeout(f.current),f.current=null),i(!1),m.current=Ve(()=>{l(!1)},150)};return K(()=>()=>{f.current&&clearTimeout(f.current),m.current&&clearTimeout(m.current)},[]),t(Ft,{children:[t("span",{ref:b,onMouseEnter:v,onMouseLeave:x,...o,children:n}),s&&mr(t("div",{"data-feedback-toolbar":!0,style:{position:"fixed",top:d.top,right:d.right,transform:"translateY(-50%)",padding:"6px 10px",background:"#383838",color:"rgba(255, 255, 255, 0.7)",fontSize:"11px",fontWeight:400,lineHeight:"14px",borderRadius:"10px",width:"180px",textAlign:"left",zIndex:100020,pointerEvents:"none",boxShadow:"0px 1px 8px rgba(0, 0, 0, 0.28)",opacity:r?1:0,transition:"opacity 0.15s ease"},children:e}),document.body)]})},mc=`.styles-module__tooltip___mcXL2 {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: help;
}

.styles-module__tooltipIcon___Nq2nD {
  transform: translateY(0.5px);
  color: #fff;
  opacity: 0.2;
  transition: opacity 0.15s ease;
  will-change: transform;
}
.styles-module__tooltip___mcXL2:hover .styles-module__tooltipIcon___Nq2nD {
  opacity: 0.5;
}
[data-agentation-theme=light] .styles-module__tooltipIcon___Nq2nD {
  color: #000;
}`,Bi={tooltip:"styles-module__tooltip___mcXL2",tooltipIcon:"styles-module__tooltipIcon___Nq2nD"},Pn=({content:e})=>t(hc,{className:Bi.tooltip,content:e,children:t(ec,{className:Bi.tooltipIcon})}),pc=`.styles-module__toolbar___wNsdK svg[fill=none],
.styles-module__markersLayer___-25j1 svg[fill=none],
.styles-module__fixedMarkersLayer___ffyX6 svg[fill=none] {
  fill: none !important;
}
.styles-module__toolbar___wNsdK svg[fill=none] :not([fill]),
.styles-module__markersLayer___-25j1 svg[fill=none] :not([fill]),
.styles-module__fixedMarkersLayer___ffyX6 svg[fill=none] :not([fill]) {
  fill: none !important;
}

.styles-module__controlsContent___9GJWU :where(button, input, select, textarea, label) {
  background: unset;
  border: unset;
  border-radius: unset;
  padding: unset;
  margin: unset;
  color: unset;
  font-family: unset;
  font-weight: unset;
  font-style: unset;
  line-height: unset;
  letter-spacing: unset;
  text-transform: unset;
  text-decoration: unset;
  box-shadow: unset;
  outline: unset;
}

@keyframes styles-module__toolbarEnter___u8RRu {
  from {
    opacity: 0;
    transform: scale(0.5) rotate(90deg);
  }
  to {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}
@keyframes styles-module__toolbarHide___y8kaT {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.8);
  }
}
@keyframes styles-module__badgeEnter___mVQLj {
  from {
    opacity: 0;
    transform: scale(0);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__scaleIn___c-r1K {
  from {
    opacity: 0;
    transform: scale(0.85);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__scaleOut___Wctwz {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.85);
  }
}
@keyframes styles-module__slideUp___kgD36 {
  from {
    opacity: 0;
    transform: scale(0.85) translateY(8px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
@keyframes styles-module__slideDown___zcdje {
  from {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
  to {
    opacity: 0;
    transform: scale(0.85) translateY(8px);
  }
}
@keyframes styles-module__fadeIn___b9qmf {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes styles-module__fadeOut___6Ut6- {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes styles-module__hoverHighlightIn___6WYHY {
  from {
    opacity: 0;
    transform: scale(0.98);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__hoverTooltipIn___FYGQx {
  from {
    opacity: 0;
    transform: scale(0.95) translateY(4px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
.styles-module__disableTransitions___EopxO :is(*, *::before, *::after) {
  transition: none !important;
}

:host {
  /* Set here rather than inline so a consumer className rule can still hide the toolbar. */
  display: contents;
  position: fixed;
  top: auto;
  left: auto;
  bottom: 1.25rem;
  right: 1.25rem;
  z-index: 100000;
}

.styles-module__positionContext___AZFHE,
.styles-module__toolbar___wNsdK {
  position: inherit;
  top: inherit;
  left: inherit;
  bottom: inherit;
  right: inherit;
  z-index: inherit;
}

.styles-module__toolbar___wNsdK {
  width: 337px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  pointer-events: none;
  transition: left 0.36s cubic-bezier(0.19, 1, 0.22, 1), top 0s, right 0s, bottom 0s;
}
.styles-module__toolbar___wNsdK[data-dragging=true] {
  transition: none;
}

.styles-module__toolbarContainer___dIhma {
  position: relative;
  -webkit-user-select: none;
  user-select: none;
  margin-left: auto;
  align-self: flex-end;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1a1a1a;
  color: #fff;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2), 0 4px 16px rgba(0, 0, 0, 0.1);
  pointer-events: auto;
  transition: width 0.36s cubic-bezier(0.19, 1, 0.22, 1), transform 0.36s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__toolbarContainer___dIhma.styles-module__entrance___sgHd8 {
  animation: styles-module__toolbarEnter___u8RRu 0.5s cubic-bezier(0.34, 1.2, 0.64, 1) forwards;
}
.styles-module__toolbarContainer___dIhma.styles-module__hiding___1td44 {
  animation: styles-module__toolbarHide___y8kaT 0.4s cubic-bezier(0.4, 0, 1, 1) forwards;
  pointer-events: none;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn {
  width: 44px;
  height: 44px;
  border-radius: 22px;
  padding: 0;
  cursor: pointer;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn:hover {
  background: #2a2a2a;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn:active {
  transform: scale(0.95);
}
.styles-module__toolbarContainer___dIhma.styles-module__expanded___ofKPx {
  height: 44px;
  border-radius: 22px;
  padding: 5px;
  width: 297px;
}
.styles-module__toolbarContainer___dIhma.styles-module__expanded___ofKPx.styles-module__serverConnected___Gfbou {
  width: 337px;
}

@media (prefers-reduced-motion: reduce) {
  .styles-module__toolbar___wNsdK,
  .styles-module__toolbarContainer___dIhma {
    transition: none;
  }
}
.styles-module__buttonWrapper___rBcdv.styles-module__toggleWrapper___7N0-q {
  position: absolute;
  top: 0;
  right: 0;
  width: 44px;
  height: 44px;
}

.styles-module__togglePlaceholder___wnqrL {
  width: 34px;
  flex: 0 0 34px;
  height: 34px;
}

.styles-module__toggleContent___0yfyP {
  position: absolute;
  top: 0;
  right: 0;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 50%;
  padding: 0;
  margin: 0;
  background: transparent;
  color: #fff;
  cursor: pointer;
  transition: color 0.15s ease;
}
.styles-module__toggleContent___0yfyP::before {
  content: "";
  position: absolute;
  inset: 5px;
  border-radius: 50%;
  pointer-events: none;
  background: transparent;
  transition: background-color 0.15s ease, transform 0.1s ease;
}
.styles-module__toggleContent___0yfyP.styles-module__expandedToggle___F7SRN {
  color: rgba(255, 255, 255, 0.85);
}
.styles-module__toggleContent___0yfyP.styles-module__expandedToggle___F7SRN:hover {
  color: #fff;
}
.styles-module__toggleContent___0yfyP.styles-module__expandedToggle___F7SRN:hover::before {
  background: rgba(255, 255, 255, 0.12);
}
.styles-module__toggleContent___0yfyP.styles-module__expandedToggle___F7SRN:active::before, .styles-module__toggleContent___0yfyP.styles-module__expandedToggle___F7SRN:active .styles-module__toggleGlyph___R7Oom {
  transform: scale(0.92);
}

.styles-module__toggleIcon___Jbtus {
  transform: translateY(-0.5px);
  transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.styles-module__expandedToggle___F7SRN .styles-module__toggleIcon___Jbtus {
  transform: none;
}

.styles-module__toggleGlyph___R7Oom {
  overflow: visible;
  transition: transform 0.1s ease;
}
.styles-module__toggleGlyph___R7Oom path {
  transform-box: fill-box;
  transform-origin: center;
  transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.16s ease;
}

.styles-module__toggleTopLine___hQaCm,
.styles-module__toggleMiddleLine___sFFVe {
  vector-effect: non-scaling-stroke;
}

.styles-module__toggleBottomLine___V-jX3 {
  transform-origin: left center;
}

.styles-module__toggleGlyph___R7Oom[data-active=true] .styles-module__toggleTopLine___hQaCm {
  transform: translateY(5.25px) rotate(45deg) scaleX(1.1422494);
}
.styles-module__toggleGlyph___R7Oom[data-active=true] .styles-module__toggleMiddleLine___sFFVe {
  transform: translateX(3.5px) rotate(-45deg) scaleX(2.4748737);
}
.styles-module__toggleGlyph___R7Oom[data-active=true] .styles-module__toggleBottomLine___V-jX3 {
  transform: scaleX(0);
  opacity: 0;
}
.styles-module__toggleGlyph___R7Oom[data-active=true] .styles-module__toggleSparkle___eeF99 {
  transform: scale(0);
  opacity: 0;
}

.styles-module__toggleContent___0yfyP:focus-visible,
.styles-module__controlButton___8Q0jc:focus-visible {
  outline: 2px solid var(--agentation-color-accent);
  outline-offset: 3px;
}

.styles-module__controlsContent___9GJWU {
  display: flex;
  align-items: center;
  gap: 6px;
  transition: filter 0.14s ease-out, opacity 0.14s ease-out, transform 0.36s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__controlsContent___9GJWU.styles-module__visible___KHwEW {
  transition: filter 0.3s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.24s ease-out, transform 0.42s cubic-bezier(0.19, 1, 0.22, 1);
  opacity: 1;
  filter: blur(0px);
  transform: scale(1);
  visibility: visible;
  pointer-events: auto;
}
.styles-module__controlsContent___9GJWU.styles-module__hidden___Ae8H4 {
  pointer-events: none;
  opacity: 0;
  filter: blur(6px);
  transform: scale(0.4);
}

@media (prefers-reduced-motion: reduce) {
  .styles-module__controlsContent___9GJWU,
  .styles-module__controlsContent___9GJWU.styles-module__visible___KHwEW,
  .styles-module__toggleContent___0yfyP,
  .styles-module__toggleContent___0yfyP::before,
  .styles-module__toggleGlyph___R7Oom,
  .styles-module__toggleIcon___Jbtus,
  .styles-module__toggleGlyph___R7Oom path {
    transition: none;
  }
  .styles-module__controlsContent___9GJWU.styles-module__hidden___Ae8H4 {
    filter: none;
    transform: none;
  }
}
.styles-module__badge___2XsgF {
  position: absolute;
  top: -13px;
  right: -13px;
  -webkit-user-select: none;
  user-select: none;
  min-width: 18px;
  height: 18px;
  padding: 0 5px;
  border-radius: 9px;
  background-color: var(--agentation-color-accent);
  color: white;
  font-size: 0.625rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15), inset 0 0 0 1px rgba(255, 255, 255, 0.04);
  opacity: 1;
  transition: transform 0.3s ease, opacity 0.2s ease;
  transform: scale(1);
}
.styles-module__badge___2XsgF.styles-module__fadeOut___6Ut6- {
  opacity: 0;
  transform: scale(0);
  pointer-events: none;
}
.styles-module__badge___2XsgF.styles-module__entrance___sgHd8 {
  animation: styles-module__badgeEnter___mVQLj 0.3s cubic-bezier(0.34, 1.2, 0.64, 1) 0.4s both;
}

.styles-module__controlButton___8Q0jc {
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: none;
  background: transparent;
  color: rgba(255, 255, 255, 0.85);
  transition: background-color 0.15s ease, color 0.15s ease, transform 0.1s ease, opacity 0.2s ease;
}
.styles-module__controlButton___8Q0jc:hover:not(:disabled):not([data-active=true]):not([data-failed=true]):not([data-auto-sync=true]):not([data-error=true]):not([data-no-hover=true]) {
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
}
.styles-module__controlButton___8Q0jc:active:not(:disabled) {
  transform: scale(0.92);
}
.styles-module__controlButton___8Q0jc:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}
.styles-module__controlButton___8Q0jc[data-active=true] {
  color: var(--agentation-color-blue);
  background-color: color-mix(in srgb, var(--agentation-color-blue) 25%, transparent);
}
.styles-module__controlButton___8Q0jc[data-error=true] {
  color: var(--agentation-color-red);
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
}
.styles-module__controlButton___8Q0jc[data-danger]:hover:not(:disabled):not([data-active=true]):not([data-failed=true]) {
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
  color: var(--agentation-color-red);
}
.styles-module__controlButton___8Q0jc[data-no-hover=true], .styles-module__controlButton___8Q0jc.styles-module__statusShowing___te6iu {
  cursor: default;
  pointer-events: none;
  background: transparent !important;
}
.styles-module__controlButton___8Q0jc[data-auto-sync=true] {
  color: var(--agentation-color-green);
  background: transparent;
  cursor: default;
}
.styles-module__controlButton___8Q0jc[data-failed=true] {
  color: var(--agentation-color-red);
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
}

.styles-module__buttonBadge___NeFWb {
  position: absolute;
  top: 0px;
  right: 0px;
  min-width: 16px;
  height: 16px;
  padding: 0 4px;
  border-radius: 8px;
  background-color: var(--agentation-color-accent);
  color: white;
  font-size: 0.625rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 0 2px #1a1a1a, 0 1px 3px rgba(0, 0, 0, 0.2);
  pointer-events: none;
}
[data-agentation-theme=light] .styles-module__buttonBadge___NeFWb {
  box-shadow: 0 0 0 2px #fff, 0 1px 3px rgba(0, 0, 0, 0.2);
}

@keyframes styles-module__mcpIndicatorPulseConnected___EDodZ {
  0%, 100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 50%, transparent);
  }
  50% {
    box-shadow: 0 0 0 5px color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
}
@keyframes styles-module__mcpIndicatorPulseConnecting___cCYte {
  0%, 100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-yellow) 50%, transparent);
  }
  50% {
    box-shadow: 0 0 0 5px color-mix(in srgb, var(--agentation-color-yellow) 0%, transparent);
  }
}
.styles-module__mcpIndicator___zGJeL {
  position: absolute;
  top: 3px;
  right: 3px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  pointer-events: none;
  transition: background-color 0.3s ease, opacity 0.15s ease, transform 0.15s ease;
  opacity: 1;
  transform: scale(1);
}
.styles-module__mcpIndicator___zGJeL.styles-module__connected___7c28g {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpIndicatorPulseConnected___EDodZ 2.5s ease-in-out infinite;
}
.styles-module__mcpIndicator___zGJeL.styles-module__connecting___uo-CW {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpIndicatorPulseConnecting___cCYte 1.5s ease-in-out infinite;
}
.styles-module__mcpIndicator___zGJeL.styles-module__hidden___Ae8H4 {
  opacity: 0;
  transform: scale(0);
  animation: none;
}

@keyframes styles-module__connectionPulse___-Zycw {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.6;
    transform: scale(0.9);
  }
}
.styles-module__connectionIndicatorWrapper___L-e-3 {
  width: 8px;
  height: 34px;
  margin-left: 6px;
  margin-right: 6px;
}

.styles-module__connectionIndicator___afk9p {
  position: relative;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  opacity: 0;
  transition: opacity 0.3s ease, background-color 0.3s ease;
  cursor: default;
}

.styles-module__connectionIndicatorVisible___C-i5B {
  opacity: 1;
}

.styles-module__connectionIndicatorConnected___IY8pR {
  background-color: var(--agentation-color-green);
  animation: styles-module__connectionPulse___-Zycw 2.5s ease-in-out infinite;
}

.styles-module__connectionIndicatorDisconnected___kmpaZ {
  background-color: var(--agentation-color-red);
  animation: none;
}

.styles-module__connectionIndicatorConnecting___QmSLH {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__connectionPulse___-Zycw 1s ease-in-out infinite;
}

.styles-module__buttonWrapper___rBcdv {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.styles-module__buttonWrapper___rBcdv:hover .styles-module__buttonTooltip___Burd9 {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) scale(1);
  transition-delay: 0.85s;
}
.styles-module__buttonWrapper___rBcdv:has(.styles-module__controlButton___8Q0jc:disabled):hover .styles-module__buttonTooltip___Burd9 {
  opacity: 0;
  visibility: hidden;
}

.styles-module__tooltipsInSession___-0lHH .styles-module__buttonWrapper___rBcdv:hover .styles-module__buttonTooltip___Burd9 {
  transition-delay: 0s;
}

.styles-module__sendButtonWrapper___UUxG6 {
  width: 0;
  opacity: 0;
  overflow: hidden;
  pointer-events: none;
  margin-left: -6px;
  transition: width 0.36s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.2s cubic-bezier(0.19, 1, 0.22, 1), margin 0.36s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__sendButtonWrapper___UUxG6 .styles-module__controlButton___8Q0jc {
  transform: scale(0.8);
  transition: transform 0.36s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__sendButtonWrapper___UUxG6.styles-module__sendButtonVisible___WPSQU {
  width: 34px;
  opacity: 1;
  overflow: visible;
  pointer-events: auto;
  margin-left: 0;
}
.styles-module__sendButtonWrapper___UUxG6.styles-module__sendButtonVisible___WPSQU .styles-module__controlButton___8Q0jc {
  transform: scale(1);
}

.styles-module__buttonTooltip___Burd9 {
  position: absolute;
  bottom: calc(100% + 14px);
  left: 50%;
  transform: translateX(-50%) scale(0.95);
  padding: 6px 10px;
  background: #1a1a1a;
  color: rgba(255, 255, 255, 0.9);
  font-size: 12px;
  font-weight: 500;
  border-radius: 8px;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  z-index: 100001;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  transition: opacity 0.135s ease, transform 0.135s ease, visibility 0.135s ease;
}
.styles-module__buttonTooltip___Burd9::after {
  content: "";
  position: absolute;
  top: calc(100% - 4px);
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
  width: 8px;
  height: 8px;
  background: #1a1a1a;
  border-radius: 0 0 2px 0;
}

.styles-module__shortcut___lEAQk {
  margin-left: 4px;
  opacity: 0.5;
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonTooltip___Burd9 {
  bottom: auto;
  top: calc(100% + 14px);
  transform: translateX(-50%) scale(0.95);
}
.styles-module__tooltipBelow___m6ats .styles-module__buttonTooltip___Burd9::after {
  top: -4px;
  bottom: auto;
  border-radius: 2px 0 0 0;
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapper___rBcdv:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-50%) scale(1);
}

.styles-module__tooltipsHidden___VtLJG .styles-module__buttonTooltip___Burd9 {
  opacity: 0 !important;
  visibility: hidden !important;
  transition: none !important;
}

.styles-module__tooltipVisible___0jcCv,
.styles-module__tooltipsHidden___VtLJG .styles-module__tooltipVisible___0jcCv {
  opacity: 1 !important;
  visibility: visible !important;
  transform: translateX(-50%) scale(1) !important;
  transition-delay: 0s !important;
}

.styles-module__buttonWrapperAlignLeft___myzIp .styles-module__buttonTooltip___Burd9 {
  left: 50%;
  transform: translateX(-12px) scale(0.95);
}
.styles-module__buttonWrapperAlignLeft___myzIp .styles-module__buttonTooltip___Burd9::after {
  left: 16px;
}
.styles-module__buttonWrapperAlignLeft___myzIp:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-12px) scale(1);
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignLeft___myzIp .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-12px) scale(0.95);
}
.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignLeft___myzIp:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-12px) scale(1);
}

.styles-module__buttonWrapperAlignRight___HCQFR .styles-module__buttonTooltip___Burd9 {
  left: 50%;
  transform: translateX(calc(-100% + 12px)) scale(0.95);
}
.styles-module__buttonWrapperAlignRight___HCQFR .styles-module__buttonTooltip___Burd9::after {
  left: auto;
  right: 8px;
}
.styles-module__buttonWrapperAlignRight___HCQFR:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(calc(-100% + 12px)) scale(1);
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignRight___HCQFR .styles-module__buttonTooltip___Burd9 {
  transform: translateX(calc(-100% + 12px)) scale(0.95);
}
.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignRight___HCQFR:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(calc(-100% + 12px)) scale(1);
}

.styles-module__divider___c--s1 {
  width: 1px;
  height: 12px;
  background: rgba(255, 255, 255, 0.15);
  margin: 0 3px;
}

.styles-module__overlay___Q1O9y {
  position: fixed;
  inset: 0;
  z-index: 99997;
  pointer-events: none;
}
.styles-module__overlay___Q1O9y > * {
  pointer-events: auto;
}

.styles-module__hoverHighlight___ogakW {
  position: fixed;
  border: 2px solid color-mix(in srgb, var(--agentation-color-accent) 50%, transparent);
  border-radius: 4px;
  background-color: color-mix(in srgb, var(--agentation-color-accent) 4%, transparent);
  pointer-events: none !important;
  box-sizing: border-box;
  will-change: opacity;
  contain: layout style;
}
.styles-module__hoverHighlight___ogakW.styles-module__enter___WFIki {
  animation: styles-module__hoverHighlightIn___6WYHY 0.12s ease-out forwards;
}

.styles-module__multiSelectOutline___cSJ-m {
  position: fixed;
  border: 2px dashed color-mix(in srgb, var(--agentation-color-green) 60%, transparent);
  border-radius: 4px;
  pointer-events: none !important;
  background-color: color-mix(in srgb, var(--agentation-color-green) 5%, transparent);
  box-sizing: border-box;
  will-change: opacity;
}
.styles-module__multiSelectOutline___cSJ-m.styles-module__enter___WFIki {
  animation: styles-module__fadeIn___b9qmf 0.15s ease-out forwards;
}
.styles-module__multiSelectOutline___cSJ-m.styles-module__exit___fyOJ0 {
  animation: styles-module__fadeOut___6Ut6- 0.15s ease-out forwards;
}

.styles-module__singleSelectOutline___QhX-O {
  position: fixed;
  border: 2px solid color-mix(in srgb, var(--agentation-color-blue) 60%, transparent);
  border-radius: 4px;
  pointer-events: none !important;
  background-color: color-mix(in srgb, var(--agentation-color-blue) 5%, transparent);
  box-sizing: border-box;
  will-change: opacity;
}
.styles-module__singleSelectOutline___QhX-O.styles-module__enter___WFIki {
  animation: styles-module__fadeIn___b9qmf 0.15s ease-out forwards;
}
.styles-module__singleSelectOutline___QhX-O.styles-module__exit___fyOJ0 {
  animation: styles-module__fadeOut___6Ut6- 0.15s ease-out forwards;
}

.styles-module__hoverTooltip___bvLk7 {
  position: fixed;
  z-index: 99999;
  font-size: 0.6875rem;
  font-weight: 500;
  color: #fff;
  background: rgba(0, 0, 0, 0.85);
  padding: 0.35rem 0.6rem;
  border-radius: 0.375rem;
  pointer-events: none !important;
  white-space: nowrap;
  max-width: min(280px, 100vw - 16px - 1.2rem);
  overflow: hidden;
  text-overflow: ellipsis;
}
.styles-module__hoverTooltip___bvLk7.styles-module__enter___WFIki {
  animation: styles-module__hoverTooltipIn___FYGQx 0.1s ease-out forwards;
}

.styles-module__hoverReactPath___gx1IJ {
  font-size: 0.625rem;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.15rem;
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__hoverElementName___QMLMl {
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__markersLayer___-25j1 {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 0;
  z-index: 99998;
  pointer-events: none;
}
.styles-module__markersLayer___-25j1 > * {
  pointer-events: auto;
}

.styles-module__fixedMarkersLayer___ffyX6 {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99998;
  pointer-events: none;
}
.styles-module__fixedMarkersLayer___ffyX6 > * {
  pointer-events: auto;
}

.styles-module__marker___6sQrs {
  position: absolute;
  width: 22px;
  height: 22px;
  background: var(--agentation-color-blue);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.6875rem;
  font-weight: 600;
  transform: translate(-50%, -50%) scale(1);
  opacity: 1;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2), inset 0 0 0 1px rgba(0, 0, 0, 0.04);
  -webkit-user-select: none;
  user-select: none;
  will-change: transform, opacity;
  contain: layout style;
  z-index: 1;
}
.styles-module__marker___6sQrs:hover {
  z-index: 2;
}
.styles-module__marker___6sQrs:not(.styles-module__enter___WFIki):not(.styles-module__exit___fyOJ0):not(.styles-module__clearing___FQ--7) {
  transition: background-color 0.15s ease, transform 0.1s ease;
}
.styles-module__marker___6sQrs.styles-module__enter___WFIki {
  animation: styles-module__markerIn___5FaAP 0.25s cubic-bezier(0.22, 1, 0.36, 1) both;
}
.styles-module__marker___6sQrs.styles-module__exit___fyOJ0 {
  animation: styles-module__markerOut___GU5jX 0.2s ease-out both;
  pointer-events: none;
}
.styles-module__marker___6sQrs.styles-module__clearing___FQ--7 {
  animation: styles-module__markerOut___GU5jX 0.15s ease-out both;
  pointer-events: none;
}
.styles-module__marker___6sQrs:not(.styles-module__enter___WFIki):not(.styles-module__exit___fyOJ0):not(.styles-module__clearing___FQ--7):hover {
  transform: translate(-50%, -50%) scale(1.1);
}
.styles-module__marker___6sQrs.styles-module__pending___2IHLC {
  position: fixed;
  background-color: var(--agentation-color-blue);
  cursor: default;
}
.styles-module__marker___6sQrs.styles-module__fixed___dBMHC {
  position: fixed;
}
.styles-module__marker___6sQrs.styles-module__multiSelect___YWiuz {
  background-color: var(--agentation-color-green);
  width: 26px;
  height: 26px;
  border-radius: 6px;
  font-size: 0.75rem;
}
.styles-module__marker___6sQrs.styles-module__multiSelect___YWiuz.styles-module__pending___2IHLC {
  background-color: var(--agentation-color-green);
}
.styles-module__marker___6sQrs.styles-module__hovered___ZgXIy {
  background-color: var(--agentation-color-red);
}

.styles-module__renumber___nCTxD {
  display: block;
  animation: styles-module__renumberRoll___Wgbq3 0.2s ease-out;
}

@keyframes styles-module__renumberRoll___Wgbq3 {
  0% {
    transform: translateX(-40%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
.styles-module__markerTooltip___aLJID {
  position: absolute;
  top: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%) scale(0.909);
  z-index: 100002;
  background: #1a1a1a;
  padding: 8px 0.75rem;
  border-radius: 0.75rem;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-weight: 400;
  color: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
  min-width: 120px;
  max-width: 200px;
  pointer-events: none;
  cursor: default;
}
.styles-module__markerTooltip___aLJID.styles-module__enter___WFIki {
  animation: styles-module__tooltipIn___0N31w 0.1s ease-out forwards;
}

.styles-module__markerQuote___FHmrz {
  display: block;
  font-size: 12px;
  font-style: italic;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.3125rem;
  line-height: 1.4;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__markerNote___QkrrS {
  display: block;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.4;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-bottom: 2px;
}

.styles-module__markerHint___2iF-6 {
  display: block;
  font-size: 0.625rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.6);
  margin-top: 0.375rem;
  white-space: nowrap;
}

.styles-module__settingsPanel___OxX3Y {
  position: absolute;
  right: 5px;
  bottom: calc(100% + 0.5rem);
  z-index: 1;
  overflow: hidden;
  background: #1c1c1c;
  border-radius: 1rem;
  padding: 13px 0 16px;
  min-width: 205px;
  cursor: default;
  opacity: 1;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.04);
  transition: background-color 0.25s ease, box-shadow 0.25s ease;
}
.styles-module__settingsPanel___OxX3Y::before, .styles-module__settingsPanel___OxX3Y::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  width: 16px;
  z-index: 2;
  pointer-events: none;
}
.styles-module__settingsPanel___OxX3Y::before {
  left: 0;
  background: linear-gradient(to right, #1c1c1c 0%, transparent 100%);
}
.styles-module__settingsPanel___OxX3Y::after {
  right: 0;
  background: linear-gradient(to left, #1c1c1c 0%, transparent 100%);
}
.styles-module__settingsPanel___OxX3Y .styles-module__settingsHeader___pwDY9,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsBrand___0gJeM,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsBrandSlash___uTG18,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsVersion___TUcFq,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsSection___m-YM2,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsLabel___8UjfX,
.styles-module__settingsPanel___OxX3Y .styles-module__cycleButton___FMKfw,
.styles-module__settingsPanel___OxX3Y .styles-module__cycleDot___nPgLY,
.styles-module__settingsPanel___OxX3Y .styles-module__dropdownButton___16NPz,
.styles-module__settingsPanel___OxX3Y .styles-module__toggleLabel___Xm8Aa,
.styles-module__settingsPanel___OxX3Y .styles-module__customCheckbox___U39ax,
.styles-module__settingsPanel___OxX3Y .styles-module__sliderLabel___U8sPr,
.styles-module__settingsPanel___OxX3Y .styles-module__slider___GLdxp,
.styles-module__settingsPanel___OxX3Y .styles-module__themeToggle___2rUjA {
  transition: background-color 0.25s ease, color 0.25s ease, border-color 0.25s ease;
}
.styles-module__settingsPanel___OxX3Y.styles-module__enter___WFIki {
  opacity: 1;
  transform: translateY(0) scale(1);
  filter: blur(0px);
  transition: opacity 0.2s ease, transform 0.2s ease, filter 0.2s ease;
}
.styles-module__settingsPanel___OxX3Y.styles-module__exit___fyOJ0 {
  opacity: 0;
  transform: translateY(8px) scale(0.95);
  filter: blur(5px);
  pointer-events: none;
  transition: opacity 0.1s ease, transform 0.1s ease, filter 0.1s ease;
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y {
  background: #1a1a1a;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__settingsLabel___8UjfX {
  color: rgba(255, 255, 255, 0.6);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__settingsOption___UNa12 {
  color: rgba(255, 255, 255, 0.85);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__settingsOption___UNa12:hover {
  background: rgba(255, 255, 255, 0.1);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__settingsOption___UNa12.styles-module__selected___OwRqP {
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__toggleLabel___Xm8Aa {
  color: rgba(255, 255, 255, 0.85);
}

.styles-module__settingsPanelContainer___Xksv8 {
  overflow: visible;
  position: relative;
  display: flex;
  padding: 0 1rem;
}

.styles-module__settingsPage___6YfHH {
  min-width: 100%;
  flex-shrink: 0;
  transition: transform 0.2s ease, opacity 0.2s ease;
  transition-delay: 0s;
  opacity: 1;
}

.styles-module__settingsPage___6YfHH.styles-module__slideLeft___Ps01J {
  transform: translateX(-24px);
  opacity: 0;
  pointer-events: none;
}

.styles-module__automationsPage___uvCq6 {
  position: absolute;
  top: 0;
  left: 24px;
  width: 100%;
  height: 100%;
  padding: 3px 1rem 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, opacity 0.2s ease;
  opacity: 0;
  pointer-events: none;
}

.styles-module__automationsPage___uvCq6.styles-module__slideIn___4-qXe {
  transform: translateX(-24px);
  opacity: 1;
  pointer-events: auto;
}

.styles-module__settingsNavLink___wCzJt {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0;
  border: none;
  background: transparent;
  font-family: inherit;
  font-size: 0.8125rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: color 0.15s ease;
}
.styles-module__settingsNavLink___wCzJt:hover {
  color: rgba(255, 255, 255, 0.9);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___wCzJt {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___wCzJt:hover {
  color: rgba(0, 0, 0, 0.8);
}
.styles-module__settingsNavLink___wCzJt svg {
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.15s ease;
}
.styles-module__settingsNavLink___wCzJt:hover svg {
  color: #fff;
}
[data-agentation-theme=light] .styles-module__settingsNavLink___wCzJt svg {
  color: rgba(0, 0, 0, 0.25);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___wCzJt:hover svg {
  color: rgba(0, 0, 0, 0.8);
}

.styles-module__settingsNavLinkRight___ZWwhj {
  display: flex;
  align-items: center;
  gap: 6px;
}

.styles-module__mcpNavIndicator___cl9pO {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.styles-module__mcpNavIndicator___cl9pO.styles-module__connected___7c28g {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpPulse___uNggr 2.5s ease-in-out infinite;
}
.styles-module__mcpNavIndicator___cl9pO.styles-module__connecting___uo-CW {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpPulse___uNggr 1.5s ease-in-out infinite;
}

.styles-module__settingsBackButton___bIe2j {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 6px 0 12px 0;
  margin: -6px 0 0.5rem 0;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 0;
  background: transparent;
  font-family: inherit;
  font-size: 0.8125rem;
  font-weight: 500;
  letter-spacing: -0.15px;
  color: #fff;
  cursor: pointer;
  transition: transform 0.12s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__settingsBackButton___bIe2j svg {
  opacity: 0.4;
  flex-shrink: 0;
  transition: opacity 0.15s ease, transform 0.18s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__settingsBackButton___bIe2j:hover {
  border-bottom-color: rgba(255, 255, 255, 0.07);
}
.styles-module__settingsBackButton___bIe2j:hover svg {
  opacity: 1;
}
[data-agentation-theme=light] .styles-module__settingsBackButton___bIe2j {
  color: rgba(0, 0, 0, 0.85);
  border-bottom-color: rgba(0, 0, 0, 0.08);
}
[data-agentation-theme=light] .styles-module__settingsBackButton___bIe2j:hover {
  border-bottom-color: rgba(0, 0, 0, 0.08);
}

.styles-module__automationHeader___InP0r {
  display: flex;
  align-items: center;
  gap: 0.125rem;
  font-size: 0.8125rem;
  font-weight: 400;
  color: #fff;
}
[data-agentation-theme=light] .styles-module__automationHeader___InP0r {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__automationDescription___NKlmo {
  font-size: 0.6875rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 2px;
  line-height: 14px;
}
[data-agentation-theme=light] .styles-module__automationDescription___NKlmo {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__learnMoreLink___8xv-x {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: underline dotted;
  text-decoration-color: rgba(255, 255, 255, 0.2);
  text-underline-offset: 2px;
  transition: color 0.15s ease;
}
.styles-module__learnMoreLink___8xv-x:hover {
  color: #fff;
}
[data-agentation-theme=light] .styles-module__learnMoreLink___8xv-x {
  color: rgba(0, 0, 0, 0.6);
  text-decoration-color: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__learnMoreLink___8xv-x:hover {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__autoSendRow___UblX5 {
  display: flex;
  align-items: center;
  gap: 8px;
}

.styles-module__autoSendLabel___icDc2 {
  font-size: 0.6875rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.15s ease;
}
.styles-module__autoSendLabel___icDc2.styles-module__active___-zoN6 {
  color: #66b8ff;
  color: color(display-p3 0.4 0.72 1);
}
[data-agentation-theme=light] .styles-module__autoSendLabel___icDc2 {
  color: rgba(0, 0, 0, 0.4);
}
[data-agentation-theme=light] .styles-module__autoSendLabel___icDc2.styles-module__active___-zoN6 {
  color: var(--agentation-color-blue);
}

.styles-module__webhookUrlInput___2375C {
  display: block;
  width: 100%;
  flex: 1;
  min-height: 60px;
  box-sizing: border-box;
  margin-top: 11px;
  padding: 8px 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.03);
  font-family: inherit;
  font-size: 0.75rem;
  font-weight: 400;
  color: #fff;
  outline: none;
  resize: none;
  user-select: text;
  transition: border-color 0.15s ease, background-color 0.15s ease, box-shadow 0.15s ease;
}
.styles-module__webhookUrlInput___2375C::placeholder {
  color: rgba(255, 255, 255, 0.3);
}
.styles-module__webhookUrlInput___2375C:focus {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.08);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___2375C {
  border-color: rgba(0, 0, 0, 0.1);
  background: rgba(0, 0, 0, 0.03);
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___2375C::placeholder {
  color: rgba(0, 0, 0, 0.3);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___2375C:focus {
  border-color: rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.05);
}

.styles-module__settingsHeader___pwDY9 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
  margin-bottom: 0.5rem;
  padding-bottom: 9px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
}

.styles-module__settingsBrand___0gJeM {
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: -0.0094em;
  color: #fff;
  text-decoration: none;
}

.styles-module__settingsBrandSlash___uTG18 {
  color: var(--agentation-color-accent);
  transition: color 0.2s ease;
}

.styles-module__settingsVersion___TUcFq {
  font-size: 11px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  margin-left: auto;
  letter-spacing: -0.0094em;
}

.styles-module__settingsSection___m-YM2 + .styles-module__settingsSection___m-YM2 {
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}
.styles-module__settingsSection___m-YM2.styles-module__settingsSectionExtraPadding___jdhFV {
  padding-top: calc(0.5rem + 4px);
}

.styles-module__settingsSectionGrow___h-5HZ {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.styles-module__settingsRow___3sdhc {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
}
.styles-module__settingsRow___3sdhc.styles-module__settingsRowMarginTop___zA0Sp {
  margin-top: 8px;
}

.styles-module__dropdownContainer___BVnxe {
  position: relative;
}

.styles-module__dropdownButton___16NPz {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.25rem 0.5rem;
  border: none;
  border-radius: 0.375rem;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease;
  letter-spacing: -0.0094em;
}
.styles-module__dropdownButton___16NPz:hover {
  background: rgba(255, 255, 255, 0.08);
}
.styles-module__dropdownButton___16NPz svg {
  opacity: 0.6;
}

.styles-module__cycleButton___FMKfw {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0;
  border: none;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  letter-spacing: -0.0094em;
}
[data-agentation-theme=light] .styles-module__cycleButton___FMKfw {
  color: rgba(0, 0, 0, 0.85);
}
.styles-module__cycleButton___FMKfw:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}

.styles-module__settingsRowDisabled___EgS0V .styles-module__settingsLabel___8UjfX {
  color: rgba(255, 255, 255, 0.2);
}
[data-agentation-theme=light] .styles-module__settingsRowDisabled___EgS0V .styles-module__settingsLabel___8UjfX {
  color: rgba(0, 0, 0, 0.2);
}
.styles-module__settingsRowDisabled___EgS0V .styles-module__toggleSwitch___l4Ygm {
  opacity: 0.4;
  cursor: not-allowed;
}

@keyframes styles-module__cycleTextIn___Q6zJf {
  0% {
    opacity: 0;
    transform: translateY(-6px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.styles-module__cycleButtonText___fD1LR {
  display: inline-block;
  animation: styles-module__cycleTextIn___Q6zJf 0.2s ease-out;
}

.styles-module__cycleDots___LWuoQ {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.styles-module__cycleDot___nPgLY {
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: scale(0.667);
  transition: background-color 0.25s ease-out, transform 0.25s ease-out;
}
.styles-module__cycleDot___nPgLY.styles-module__active___-zoN6 {
  background: #fff;
  transform: scale(1);
}
[data-agentation-theme=light] .styles-module__cycleDot___nPgLY {
  background: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__cycleDot___nPgLY.styles-module__active___-zoN6 {
  background: rgba(0, 0, 0, 0.7);
}

.styles-module__dropdownMenu___k73ER {
  position: absolute;
  right: 0;
  top: calc(100% + 0.25rem);
  background: #1a1a1a;
  border-radius: 0.5rem;
  padding: 0.25rem;
  min-width: 120px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1);
  z-index: 10;
  animation: styles-module__scaleIn___c-r1K 0.15s ease-out;
}

.styles-module__dropdownItem___ylsLj {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0.5rem 0.625rem;
  border: none;
  border-radius: 0.375rem;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.85);
  cursor: pointer;
  text-align: left;
  transition: background-color 0.15s ease, color 0.15s ease;
  letter-spacing: -0.0094em;
}
.styles-module__dropdownItem___ylsLj:hover {
  background: rgba(255, 255, 255, 0.08);
}
.styles-module__dropdownItem___ylsLj.styles-module__selected___OwRqP {
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
  font-weight: 600;
}

.styles-module__settingsLabel___8UjfX {
  font-size: 0.8125rem;
  font-weight: 400;
  letter-spacing: -0.0094em;
  color: rgba(255, 255, 255, 0.5);
  display: flex;
  align-items: center;
  gap: 0.125rem;
}
[data-agentation-theme=light] .styles-module__settingsLabel___8UjfX {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__settingsLabelMarker___ewdtV {
  padding-top: 3px;
  margin-bottom: 10px;
}

.styles-module__settingsOptions___LyrBA {
  display: flex;
  gap: 0.25rem;
}

.styles-module__settingsOption___UNa12 {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  padding: 0.375rem 0.5rem;
  border: none;
  border-radius: 0.375rem;
  background: transparent;
  font-size: 0.6875rem;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.7);
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease;
}
.styles-module__settingsOption___UNa12:hover {
  background: rgba(0, 0, 0, 0.05);
}
.styles-module__settingsOption___UNa12.styles-module__selected___OwRqP {
  background: color-mix(in srgb, var(--agentation-color-blue) 15%, transparent);
  color: var(--agentation-color-blue);
}

.styles-module__sliderContainer___ducXj {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.styles-module__slider___GLdxp {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 2px;
  outline: none;
  cursor: pointer;
}
.styles-module__slider___GLdxp::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 14px;
  height: 14px;
  background: white;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}
.styles-module__slider___GLdxp::-moz-range-thumb {
  width: 14px;
  height: 14px;
  background: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}
.styles-module__slider___GLdxp:hover::-webkit-slider-thumb {
  transform: scale(1.15);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
}
.styles-module__slider___GLdxp:hover::-moz-range-thumb {
  transform: scale(1.15);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
}

.styles-module__sliderLabels___FhLDB {
  display: flex;
  justify-content: space-between;
}

.styles-module__sliderLabel___U8sPr {
  font-size: 0.625rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.4);
  cursor: pointer;
  transition: color 0.15s ease;
}
.styles-module__sliderLabel___U8sPr:hover {
  color: rgba(255, 255, 255, 0.7);
}
.styles-module__sliderLabel___U8sPr.styles-module__active___-zoN6 {
  color: rgba(255, 255, 255, 0.9);
}

.styles-module__colorOptions___iHCNX {
  display: flex;
  gap: 0.5rem;
  margin-top: 0.375rem;
  margin-bottom: 1px;
}

.styles-module__colorOption___IodiY {
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid transparent;
  background-color: var(--swatch);
  cursor: pointer;
  transition: transform 0.2s cubic-bezier(0.25, 1, 0.5, 1);
}
@supports (color: color(display-p3 0 0 0)) {
  .styles-module__colorOption___IodiY {
    background-color: var(--swatch-p3);
  }
}
.styles-module__colorOption___IodiY:hover {
  transform: scale(1.15);
}
.styles-module__colorOption___IodiY.styles-module__selected___OwRqP {
  transform: scale(0.83);
}

.styles-module__colorOptionRing___U2xpo {
  display: flex;
  width: 24px;
  height: 24px;
  border: 2px solid transparent;
  border-radius: 50%;
  transition: border-color 0.3s ease;
}
.styles-module__colorOptionRing___U2xpo.styles-module__selected___OwRqP {
  border-color: var(--swatch);
}
@supports (color: color(display-p3 0 0 0)) {
  .styles-module__colorOptionRing___U2xpo.styles-module__selected___OwRqP {
    border-color: var(--swatch-p3);
  }
}

.styles-module__settingsToggle___fBrFn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
}
.styles-module__settingsToggle___fBrFn + .styles-module__settingsToggle___fBrFn {
  margin-top: calc(0.5rem + 6px);
}
.styles-module__settingsToggle___fBrFn input[type=checkbox] {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}
.styles-module__settingsToggle___fBrFn.styles-module__settingsToggleMarginBottom___MZUyF {
  margin-bottom: calc(0.5rem + 6px);
}

@keyframes styles-module__mcpPulse___uNggr {
  0% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 50%, transparent);
  }
  70% {
    box-shadow: 0 0 0 6px color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
  100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
}
@keyframes styles-module__mcpPulseError___fov9B {
  0% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-red) 50%, transparent);
  }
  70% {
    box-shadow: 0 0 0 6px color-mix(in srgb, var(--agentation-color-red) 0%, transparent);
  }
  100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-red) 0%, transparent);
  }
}
.styles-module__mcpStatusDot___ibgkc {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.styles-module__mcpStatusDot___ibgkc.styles-module__connecting___uo-CW {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpPulse___uNggr 1.5s infinite;
}
.styles-module__mcpStatusDot___ibgkc.styles-module__connected___7c28g {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpPulse___uNggr 2.5s ease-in-out infinite;
}
.styles-module__mcpStatusDot___ibgkc.styles-module__disconnected___cHPxR {
  background-color: var(--agentation-color-red);
  animation: styles-module__mcpPulseError___fov9B 2s infinite;
}

.styles-module__drawCanvas___7cG9U {
  position: fixed;
  inset: 0;
  z-index: 99996;
  pointer-events: none !important;
}
.styles-module__drawCanvas___7cG9U.styles-module__active___-zoN6 {
  pointer-events: auto !important;
  cursor: crosshair !important;
}
.styles-module__drawCanvas___7cG9U.styles-module__active___-zoN6[data-stroke-hover] {
  cursor: pointer !important;
}

.styles-module__dragSelection___kZLq2 {
  position: fixed;
  top: 0;
  left: 0;
  border: 2px solid color-mix(in srgb, var(--agentation-color-green) 60%, transparent);
  border-radius: 4px;
  background-color: color-mix(in srgb, var(--agentation-color-green) 8%, transparent);
  pointer-events: none;
  z-index: 99997;
  will-change: transform, width, height;
  contain: layout style;
}

.styles-module__dragCount___KM90j {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--agentation-color-green);
  color: white;
  font-size: 0.875rem;
  font-weight: 600;
  padding: 0.25rem 0.5rem;
  border-radius: 1rem;
  min-width: 1.5rem;
  text-align: center;
}

.styles-module__highlightsContainer___-0xzG {
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 99996;
}

.styles-module__selectedElementHighlight___fyVlI {
  position: fixed;
  top: 0;
  left: 0;
  border: 2px solid color-mix(in srgb, var(--agentation-color-green) 50%, transparent);
  border-radius: 4px;
  background: color-mix(in srgb, var(--agentation-color-green) 6%, transparent);
  pointer-events: none;
  will-change: transform, width, height;
  contain: layout style;
}

[data-agentation-theme=light] .styles-module__toolbarContainer___dIhma {
  background: #fff;
  color: rgba(0, 0, 0, 0.85);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}
[data-agentation-theme=light] .styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn:hover {
  background: #f5f5f5;
}
[data-agentation-theme=light] .styles-module__toggleContent___0yfyP {
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__toggleContent___0yfyP.styles-module__expandedToggle___F7SRN {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__toggleContent___0yfyP.styles-module__expandedToggle___F7SRN:hover {
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__toggleContent___0yfyP.styles-module__expandedToggle___F7SRN:hover::before {
  background: rgba(0, 0, 0, 0.06);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc:hover:not(:disabled):not([data-active=true]):not([data-failed=true]):not([data-auto-sync=true]):not([data-error=true]):not([data-no-hover=true]) {
  background: rgba(0, 0, 0, 0.06);
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-active=true] {
  color: var(--agentation-color-blue);
  background: color-mix(in srgb, var(--agentation-color-blue) 15%, transparent);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-error=true] {
  color: var(--agentation-color-red);
  background: color-mix(in srgb, var(--agentation-color-red) 15%, transparent);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-danger]:hover:not(:disabled):not([data-active=true]):not([data-failed=true]) {
  color: var(--agentation-color-red);
  background: color-mix(in srgb, var(--agentation-color-red) 15%, transparent);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-auto-sync=true] {
  color: var(--agentation-color-green);
  background: transparent;
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-failed=true] {
  color: var(--agentation-color-red);
  background: color-mix(in srgb, var(--agentation-color-red) 15%, transparent);
}
[data-agentation-theme=light] .styles-module__buttonTooltip___Burd9 {
  background: #fff;
  color: rgba(0, 0, 0, 0.85);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}
[data-agentation-theme=light] .styles-module__buttonTooltip___Burd9::after {
  background: #fff;
}
[data-agentation-theme=light] .styles-module__divider___c--s1 {
  background: rgba(0, 0, 0, 0.1);
}`,L={toolbar:"styles-module__toolbar___wNsdK",markersLayer:"styles-module__markersLayer___-25j1",fixedMarkersLayer:"styles-module__fixedMarkersLayer___ffyX6",controlsContent:"styles-module__controlsContent___9GJWU",disableTransitions:"styles-module__disableTransitions___EopxO",positionContext:"styles-module__positionContext___AZFHE",toolbarContainer:"styles-module__toolbarContainer___dIhma",entrance:"styles-module__entrance___sgHd8",toolbarEnter:"styles-module__toolbarEnter___u8RRu",hiding:"styles-module__hiding___1td44",toolbarHide:"styles-module__toolbarHide___y8kaT",collapsed:"styles-module__collapsed___Rydsn",expanded:"styles-module__expanded___ofKPx",serverConnected:"styles-module__serverConnected___Gfbou",buttonWrapper:"styles-module__buttonWrapper___rBcdv",toggleWrapper:"styles-module__toggleWrapper___7N0-q",togglePlaceholder:"styles-module__togglePlaceholder___wnqrL",toggleContent:"styles-module__toggleContent___0yfyP",expandedToggle:"styles-module__expandedToggle___F7SRN",toggleGlyph:"styles-module__toggleGlyph___R7Oom",toggleIcon:"styles-module__toggleIcon___Jbtus",toggleTopLine:"styles-module__toggleTopLine___hQaCm",toggleMiddleLine:"styles-module__toggleMiddleLine___sFFVe",toggleBottomLine:"styles-module__toggleBottomLine___V-jX3",toggleSparkle:"styles-module__toggleSparkle___eeF99",controlButton:"styles-module__controlButton___8Q0jc",visible:"styles-module__visible___KHwEW",hidden:"styles-module__hidden___Ae8H4",badge:"styles-module__badge___2XsgF",fadeOut:"styles-module__fadeOut___6Ut6-",badgeEnter:"styles-module__badgeEnter___mVQLj",statusShowing:"styles-module__statusShowing___te6iu",buttonBadge:"styles-module__buttonBadge___NeFWb",mcpIndicator:"styles-module__mcpIndicator___zGJeL",connected:"styles-module__connected___7c28g",mcpIndicatorPulseConnected:"styles-module__mcpIndicatorPulseConnected___EDodZ",connecting:"styles-module__connecting___uo-CW",mcpIndicatorPulseConnecting:"styles-module__mcpIndicatorPulseConnecting___cCYte",connectionIndicatorWrapper:"styles-module__connectionIndicatorWrapper___L-e-3",connectionIndicator:"styles-module__connectionIndicator___afk9p",connectionIndicatorVisible:"styles-module__connectionIndicatorVisible___C-i5B",connectionIndicatorConnected:"styles-module__connectionIndicatorConnected___IY8pR",connectionPulse:"styles-module__connectionPulse___-Zycw",connectionIndicatorDisconnected:"styles-module__connectionIndicatorDisconnected___kmpaZ",connectionIndicatorConnecting:"styles-module__connectionIndicatorConnecting___QmSLH",buttonTooltip:"styles-module__buttonTooltip___Burd9",tooltipsInSession:"styles-module__tooltipsInSession___-0lHH",sendButtonWrapper:"styles-module__sendButtonWrapper___UUxG6",sendButtonVisible:"styles-module__sendButtonVisible___WPSQU",shortcut:"styles-module__shortcut___lEAQk",tooltipBelow:"styles-module__tooltipBelow___m6ats",tooltipsHidden:"styles-module__tooltipsHidden___VtLJG",tooltipVisible:"styles-module__tooltipVisible___0jcCv",buttonWrapperAlignLeft:"styles-module__buttonWrapperAlignLeft___myzIp",buttonWrapperAlignRight:"styles-module__buttonWrapperAlignRight___HCQFR",divider:"styles-module__divider___c--s1",overlay:"styles-module__overlay___Q1O9y",hoverHighlight:"styles-module__hoverHighlight___ogakW",enter:"styles-module__enter___WFIki",hoverHighlightIn:"styles-module__hoverHighlightIn___6WYHY",multiSelectOutline:"styles-module__multiSelectOutline___cSJ-m",fadeIn:"styles-module__fadeIn___b9qmf",exit:"styles-module__exit___fyOJ0",singleSelectOutline:"styles-module__singleSelectOutline___QhX-O",hoverTooltip:"styles-module__hoverTooltip___bvLk7",hoverTooltipIn:"styles-module__hoverTooltipIn___FYGQx",hoverReactPath:"styles-module__hoverReactPath___gx1IJ",hoverElementName:"styles-module__hoverElementName___QMLMl",marker:"styles-module__marker___6sQrs",clearing:"styles-module__clearing___FQ--7",markerIn:"styles-module__markerIn___5FaAP",markerOut:"styles-module__markerOut___GU5jX",pending:"styles-module__pending___2IHLC",fixed:"styles-module__fixed___dBMHC",multiSelect:"styles-module__multiSelect___YWiuz",hovered:"styles-module__hovered___ZgXIy",renumber:"styles-module__renumber___nCTxD",renumberRoll:"styles-module__renumberRoll___Wgbq3",markerTooltip:"styles-module__markerTooltip___aLJID",tooltipIn:"styles-module__tooltipIn___0N31w",markerQuote:"styles-module__markerQuote___FHmrz",markerNote:"styles-module__markerNote___QkrrS",markerHint:"styles-module__markerHint___2iF-6",settingsPanel:"styles-module__settingsPanel___OxX3Y",settingsHeader:"styles-module__settingsHeader___pwDY9",settingsBrand:"styles-module__settingsBrand___0gJeM",settingsBrandSlash:"styles-module__settingsBrandSlash___uTG18",settingsVersion:"styles-module__settingsVersion___TUcFq",settingsSection:"styles-module__settingsSection___m-YM2",settingsLabel:"styles-module__settingsLabel___8UjfX",cycleButton:"styles-module__cycleButton___FMKfw",cycleDot:"styles-module__cycleDot___nPgLY",dropdownButton:"styles-module__dropdownButton___16NPz",toggleLabel:"styles-module__toggleLabel___Xm8Aa",customCheckbox:"styles-module__customCheckbox___U39ax",sliderLabel:"styles-module__sliderLabel___U8sPr",slider:"styles-module__slider___GLdxp",themeToggle:"styles-module__themeToggle___2rUjA",settingsOption:"styles-module__settingsOption___UNa12",selected:"styles-module__selected___OwRqP",settingsPanelContainer:"styles-module__settingsPanelContainer___Xksv8",settingsPage:"styles-module__settingsPage___6YfHH",slideLeft:"styles-module__slideLeft___Ps01J",automationsPage:"styles-module__automationsPage___uvCq6",slideIn:"styles-module__slideIn___4-qXe",settingsNavLink:"styles-module__settingsNavLink___wCzJt",settingsNavLinkRight:"styles-module__settingsNavLinkRight___ZWwhj",mcpNavIndicator:"styles-module__mcpNavIndicator___cl9pO",mcpPulse:"styles-module__mcpPulse___uNggr",settingsBackButton:"styles-module__settingsBackButton___bIe2j",automationHeader:"styles-module__automationHeader___InP0r",automationDescription:"styles-module__automationDescription___NKlmo",learnMoreLink:"styles-module__learnMoreLink___8xv-x",autoSendRow:"styles-module__autoSendRow___UblX5",autoSendLabel:"styles-module__autoSendLabel___icDc2",active:"styles-module__active___-zoN6",webhookUrlInput:"styles-module__webhookUrlInput___2375C",settingsSectionExtraPadding:"styles-module__settingsSectionExtraPadding___jdhFV",settingsSectionGrow:"styles-module__settingsSectionGrow___h-5HZ",settingsRow:"styles-module__settingsRow___3sdhc",settingsRowMarginTop:"styles-module__settingsRowMarginTop___zA0Sp",dropdownContainer:"styles-module__dropdownContainer___BVnxe",settingsRowDisabled:"styles-module__settingsRowDisabled___EgS0V",toggleSwitch:"styles-module__toggleSwitch___l4Ygm",cycleButtonText:"styles-module__cycleButtonText___fD1LR",cycleTextIn:"styles-module__cycleTextIn___Q6zJf",cycleDots:"styles-module__cycleDots___LWuoQ",dropdownMenu:"styles-module__dropdownMenu___k73ER",scaleIn:"styles-module__scaleIn___c-r1K",dropdownItem:"styles-module__dropdownItem___ylsLj",settingsLabelMarker:"styles-module__settingsLabelMarker___ewdtV",settingsOptions:"styles-module__settingsOptions___LyrBA",sliderContainer:"styles-module__sliderContainer___ducXj",sliderLabels:"styles-module__sliderLabels___FhLDB",colorOptions:"styles-module__colorOptions___iHCNX",colorOption:"styles-module__colorOption___IodiY",colorOptionRing:"styles-module__colorOptionRing___U2xpo",settingsToggle:"styles-module__settingsToggle___fBrFn",settingsToggleMarginBottom:"styles-module__settingsToggleMarginBottom___MZUyF",mcpStatusDot:"styles-module__mcpStatusDot___ibgkc",disconnected:"styles-module__disconnected___cHPxR",mcpPulseError:"styles-module__mcpPulseError___fov9B",drawCanvas:"styles-module__drawCanvas___7cG9U",dragSelection:"styles-module__dragSelection___kZLq2",dragCount:"styles-module__dragCount___KM90j",highlightsContainer:"styles-module__highlightsContainer___-0xzG",selectedElementHighlight:"styles-module__selectedElementHighlight___fyVlI",scaleOut:"styles-module__scaleOut___Wctwz",slideUp:"styles-module__slideUp___kgD36",slideDown:"styles-module__slideDown___zcdje"};function gc({active:e}){return t("svg",{className:L.toggleGlyph,"data-active":e,width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[t("path",{className:L.toggleTopLine,d:"M5.5 6.75H18.5"}),t("path",{className:L.toggleMiddleLine,d:"M5.5 12H11.5"}),t("path",{className:L.toggleBottomLine,d:"M5.5 17.25H9.25"}),t("path",{className:L.toggleSparkle,d:"M16 12.75L16.5179 13.9677C16.8078 14.6494 17.3506 15.1922 18.0323 15.4821L19.25 16L18.0323 16.5179C17.3506 16.8078 16.8078 17.3506 16.5179 18.0323L16 19.25L15.4821 18.0323C15.1922 17.3506 14.6494 16.8078 13.9677 16.5179L12.75 16L13.9677 15.4821C14.6494 15.1922 15.1922 14.6494 15.4821 13.9677L16 12.75Z"})]})}var ee={navigation:{width:800,height:56},hero:{width:800,height:320},header:{width:800,height:80},section:{width:800,height:400},sidebar:{width:240,height:400},footer:{width:800,height:160},modal:{width:480,height:300},card:{width:280,height:240},text:{width:400,height:120},image:{width:320,height:200},video:{width:480,height:270},table:{width:560,height:220},grid:{width:600,height:300},list:{width:300,height:180},chart:{width:400,height:240},button:{width:140,height:40},input:{width:280,height:56},form:{width:360,height:320},tabs:{width:480,height:240},dropdown:{width:200,height:200},toggle:{width:44,height:24},search:{width:320,height:44},avatar:{width:48,height:48},badge:{width:80,height:28},breadcrumb:{width:300,height:24},pagination:{width:300,height:36},progress:{width:240,height:8},divider:{width:600,height:1},accordion:{width:400,height:200},carousel:{width:600,height:300},toast:{width:320,height:64},tooltip:{width:180,height:40},pricing:{width:300,height:360},testimonial:{width:360,height:200},cta:{width:600,height:160},alert:{width:400,height:56},banner:{width:800,height:48},stat:{width:200,height:120},stepper:{width:480,height:48},tag:{width:72,height:28},rating:{width:160,height:28},map:{width:480,height:300},timeline:{width:360,height:320},fileUpload:{width:360,height:180},codeBlock:{width:480,height:200},calendar:{width:300,height:300},notification:{width:360,height:72},productCard:{width:280,height:360},profile:{width:280,height:200},drawer:{width:320,height:400},popover:{width:240,height:160},logo:{width:120,height:40},faq:{width:560,height:320},gallery:{width:560,height:360},checkbox:{width:20,height:20},radio:{width:20,height:20},slider:{width:240,height:32},datePicker:{width:300,height:320},skeleton:{width:320,height:120},chip:{width:96,height:32},icon:{width:24,height:24},spinner:{width:32,height:32},feature:{width:360,height:200},team:{width:560,height:280},login:{width:360,height:360},contact:{width:400,height:320}},Sl=[{section:"Layout",items:[{type:"navigation",label:"Navigation",...ee.navigation},{type:"header",label:"Header",...ee.header},{type:"hero",label:"Hero",...ee.hero},{type:"section",label:"Section",...ee.section},{type:"sidebar",label:"Sidebar",...ee.sidebar},{type:"footer",label:"Footer",...ee.footer},{type:"modal",label:"Modal",...ee.modal},{type:"banner",label:"Banner",...ee.banner},{type:"drawer",label:"Drawer",...ee.drawer},{type:"popover",label:"Popover",...ee.popover},{type:"divider",label:"Divider",...ee.divider}]},{section:"Content",items:[{type:"card",label:"Card",...ee.card},{type:"text",label:"Text",...ee.text},{type:"image",label:"Image",...ee.image},{type:"video",label:"Video",...ee.video},{type:"table",label:"Table",...ee.table},{type:"grid",label:"Grid",...ee.grid},{type:"list",label:"List",...ee.list},{type:"chart",label:"Chart",...ee.chart},{type:"codeBlock",label:"Code Block",...ee.codeBlock},{type:"map",label:"Map",...ee.map},{type:"timeline",label:"Timeline",...ee.timeline},{type:"calendar",label:"Calendar",...ee.calendar},{type:"accordion",label:"Accordion",...ee.accordion},{type:"carousel",label:"Carousel",...ee.carousel},{type:"logo",label:"Logo",...ee.logo},{type:"faq",label:"FAQ",...ee.faq},{type:"gallery",label:"Gallery",...ee.gallery}]},{section:"Controls",items:[{type:"button",label:"Button",...ee.button},{type:"input",label:"Input",...ee.input},{type:"search",label:"Search",...ee.search},{type:"form",label:"Form",...ee.form},{type:"tabs",label:"Tabs",...ee.tabs},{type:"dropdown",label:"Dropdown",...ee.dropdown},{type:"toggle",label:"Toggle",...ee.toggle},{type:"stepper",label:"Stepper",...ee.stepper},{type:"rating",label:"Rating",...ee.rating},{type:"fileUpload",label:"File Upload",...ee.fileUpload},{type:"checkbox",label:"Checkbox",...ee.checkbox},{type:"radio",label:"Radio",...ee.radio},{type:"slider",label:"Slider",...ee.slider},{type:"datePicker",label:"Date Picker",...ee.datePicker}]},{section:"Elements",items:[{type:"avatar",label:"Avatar",...ee.avatar},{type:"badge",label:"Badge",...ee.badge},{type:"tag",label:"Tag",...ee.tag},{type:"breadcrumb",label:"Breadcrumb",...ee.breadcrumb},{type:"pagination",label:"Pagination",...ee.pagination},{type:"progress",label:"Progress",...ee.progress},{type:"alert",label:"Alert",...ee.alert},{type:"toast",label:"Toast",...ee.toast},{type:"notification",label:"Notification",...ee.notification},{type:"tooltip",label:"Tooltip",...ee.tooltip},{type:"stat",label:"Stat",...ee.stat},{type:"skeleton",label:"Skeleton",...ee.skeleton},{type:"chip",label:"Chip",...ee.chip},{type:"icon",label:"Icon",...ee.icon},{type:"spinner",label:"Spinner",...ee.spinner}]},{section:"Blocks",items:[{type:"pricing",label:"Pricing",...ee.pricing},{type:"testimonial",label:"Testimonial",...ee.testimonial},{type:"cta",label:"CTA",...ee.cta},{type:"productCard",label:"Product Card",...ee.productCard},{type:"profile",label:"Profile",...ee.profile},{type:"feature",label:"Feature",...ee.feature},{type:"team",label:"Team",...ee.team},{type:"login",label:"Login",...ee.login},{type:"contact",label:"Contact",...ee.contact}]}],Zt={};for(const e of Sl)for(const n of e.items)Zt[n.type]=n;function B({w:e,h:n=3,strong:o}){return t("div",{style:{width:typeof e=="number"?`${e}px`:e,height:n,borderRadius:2,background:o?"var(--agd-bar-strong)":"var(--agd-bar)",flexShrink:0}})}function nt({w:e,h:n,radius:o=3,style:r}){return t("div",{style:{width:typeof e=="number"?`${e}px`:e,height:typeof n=="number"?`${n}px`:n,borderRadius:o,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",flexShrink:0,...r}})}function Bt({size:e}){return t("div",{style:{width:e,height:e,borderRadius:"50%",border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",flexShrink:0}})}function fc({width:e,height:n}){const o=Math.max(8,n*.2);return t("div",{style:{display:"flex",alignItems:"center",height:"100%",padding:`0 ${o}px`,gap:e*.02},children:[t(nt,{w:Math.max(20,n*.5),h:Math.max(12,n*.4),radius:2}),t("div",{style:{flex:1,display:"flex",gap:e*.03,marginLeft:e*.04},children:[t(B,{w:e*.06}),t(B,{w:e*.07}),t(B,{w:e*.05}),t(B,{w:e*.06})]}),t(nt,{w:e*.1,h:Math.min(28,n*.5),radius:4})]})}function yc({width:e,height:n,text:o}){return t("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:n*.05},children:[o?t("span",{style:{fontSize:Math.min(20,n*.08),fontWeight:600,color:"var(--agd-text-3)",textAlign:"center",maxWidth:"80%"},children:o}):t(B,{w:e*.5,h:Math.max(6,n*.04),strong:!0}),t(B,{w:e*.6}),t(B,{w:e*.4}),t(nt,{w:Math.min(140,e*.2),h:Math.min(36,n*.12),radius:6,style:{marginTop:n*.06}})]})}function bc({width:e,height:n}){const o=Math.max(3,Math.floor(n/36));return t("div",{style:{padding:e*.08,display:"flex",flexDirection:"column",gap:n*.03},children:[t(B,{w:e*.6,h:4,strong:!0}),Array.from({length:o},(r,i)=>t("div",{style:{display:"flex",alignItems:"center",gap:6},children:[t(nt,{w:10,h:10,radius:2}),t(B,{w:e*(.4+i*17%30/100)})]},i))]})}function xc({width:e,height:n}){const o=Math.max(2,Math.min(4,Math.floor(e/160)));return t("div",{style:{display:"flex",padding:`${n*.12}px ${e*.03}px`,gap:e*.05},children:Array.from({length:o},(r,i)=>t("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[t(B,{w:"60%",h:3,strong:!0}),t(B,{w:"80%",h:2}),t(B,{w:"70%",h:2}),t(B,{w:"60%",h:2})]},i))})}function wc({width:e,height:n}){return t("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[t("div",{style:{padding:"10px 12px",borderBottom:"1px solid var(--agd-stroke)",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[t(B,{w:e*.3,h:4,strong:!0}),t("div",{style:{width:14,height:14,border:"1px solid var(--agd-stroke)",borderRadius:3}})]}),t("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6},children:[t(B,{w:"90%"}),t(B,{w:"70%"}),t(B,{w:"80%"})]}),t("div",{style:{padding:"10px 12px",borderTop:"1px solid var(--agd-stroke)",display:"flex",justifyContent:"flex-end",gap:8},children:[t(nt,{w:70,h:26,radius:4}),t(nt,{w:70,h:26,radius:4,style:{background:"var(--agd-bar)"}})]})]})}function vc({width:e,height:n}){return t("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[t("div",{style:{height:"40%",background:"var(--agd-fill)",borderBottom:"1px dashed var(--agd-stroke)"}}),t("div",{style:{flex:1,padding:10,display:"flex",flexDirection:"column",gap:5},children:[t(B,{w:"70%",h:4,strong:!0}),t(B,{w:"95%",h:2}),t(B,{w:"85%",h:2}),t(B,{w:"50%",h:2})]})]})}function kc({width:e,height:n,text:o}){if(o)return t("div",{style:{padding:4,fontSize:Math.min(14,n*.3),lineHeight:1.5,color:"var(--agd-text-3)",wordBreak:"break-word",overflow:"hidden"},children:o});const r=Math.max(2,Math.floor(n/18));return t("div",{style:{display:"flex",flexDirection:"column",gap:6,padding:4},children:[t(B,{w:e*.6,h:5,strong:!0}),Array.from({length:r},(i,s)=>t(B,{w:`${70+s*13%25}%`,h:2},s))]})}function Sc({width:e,height:n}){return t("div",{style:{height:"100%",position:"relative"},children:t("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${n}`,preserveAspectRatio:"none",fill:"none",children:[t("line",{x1:"0",y1:"0",x2:e,y2:n,stroke:"var(--agd-stroke)",strokeWidth:"1"}),t("line",{x1:e,y1:"0",x2:"0",y2:n,stroke:"var(--agd-stroke)",strokeWidth:"1"}),t("circle",{cx:e*.3,cy:n*.3,r:Math.min(e,n)*.08,fill:"var(--agd-fill)",stroke:"var(--agd-stroke)",strokeWidth:"0.8"})]})})}function Cc({width:e,height:n}){const o=Math.max(2,Math.min(5,Math.floor(e/100))),r=Math.max(2,Math.min(6,Math.floor(n/32)));return t("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[t("div",{style:{display:"flex",borderBottom:"1px solid var(--agd-stroke)",padding:"6px 0"},children:Array.from({length:o},(i,s)=>t("div",{style:{flex:1,padding:"0 8px"},children:t(B,{w:"70%",h:3,strong:!0})},s))}),Array.from({length:r},(i,s)=>t("div",{style:{display:"flex",borderBottom:"1px solid rgba(255,255,255,0.03)",padding:"6px 0"},children:Array.from({length:o},(l,d)=>t("div",{style:{flex:1,padding:"0 8px"},children:t(B,{w:`${50+(s*7+d*13)%40}%`,h:2})},d))},s))]})}function Mc({width:e,height:n}){const o=Math.max(2,Math.floor(n/28));return t("div",{style:{display:"flex",flexDirection:"column",gap:4,padding:4},children:Array.from({length:o},(r,i)=>t("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"4px 0"},children:[t(Bt,{size:8}),t(B,{w:`${55+i*17%35}%`,h:2})]},i))})}function $c({width:e,height:n,text:o}){return t("div",{style:{height:"100%",borderRadius:Math.min(8,n/3),border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:o?t("span",{style:{fontSize:Math.min(13,n*.4),fontWeight:500,color:"var(--agd-text-3)",letterSpacing:"-0.01em"},children:o}):t(B,{w:Math.max(20,e*.5),h:3,strong:!0})})}function Ic({width:e,height:n}){return t("div",{style:{display:"flex",flexDirection:"column",gap:4,height:"100%",justifyContent:"center"},children:[t(B,{w:Math.min(80,e*.3),h:2}),t("div",{style:{height:Math.min(36,n*.6),borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",paddingLeft:8},children:t(B,{w:"40%",h:2})})]})}function Nc({width:e,height:n}){const o=Math.max(2,Math.min(5,Math.floor(n/56)));return t("div",{style:{display:"flex",flexDirection:"column",gap:n*.04,padding:8},children:[Array.from({length:o},(r,i)=>t("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[t(B,{w:60+i*17%30,h:2}),t(nt,{w:"100%",h:28,radius:4})]},i)),t(nt,{w:Math.min(120,e*.35),h:30,radius:6,style:{marginTop:8,alignSelf:"flex-end",background:"var(--agd-bar)"}})]})}function Ec({width:e,height:n}){const o=Math.max(2,Math.min(4,Math.floor(e/120)));return t("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[t("div",{style:{display:"flex",gap:2,borderBottom:"1px solid var(--agd-stroke)"},children:Array.from({length:o},(r,i)=>t("div",{style:{padding:"8px 12px",borderBottom:i===0?"2px solid var(--agd-bar-strong)":"none"},children:t(B,{w:60,h:3,strong:i===0})},i))}),t("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6},children:[t(B,{w:"80%",h:2}),t(B,{w:"65%",h:2}),t(B,{w:"75%",h:2})]})]})}function Rc({width:e,height:n}){const o=Math.min(e,n)/2;return t("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${n}`,fill:"none",children:[t("circle",{cx:e/2,cy:n/2,r:o-1,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"1.5",strokeDasharray:"3 2"}),t("circle",{cx:e/2,cy:n*.38,r:o*.28,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"0.8"}),t("path",{d:`M${e/2-o*.55} ${n*.78} C${e/2-o*.55} ${n*.55} ${e/2+o*.55} ${n*.55} ${e/2+o*.55} ${n*.78}`,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"0.8"})]})}function Lc({width:e,height:n}){return t("div",{style:{height:"100%",borderRadius:n/2,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:t(B,{w:Math.max(16,e*.5),h:2,strong:!0})})}function Tc({width:e,height:n}){return t("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:n*.08},children:[t(B,{w:e*.5,h:Math.max(5,n*.06),strong:!0}),t(B,{w:e*.35})]})}function Bc({width:e,height:n}){return t("div",{style:{display:"flex",flexDirection:"column",height:"100%",gap:n*.04,padding:e*.04},children:[t(B,{w:e*.3,h:4,strong:!0}),t(B,{w:e*.7}),t(B,{w:e*.5}),t("div",{style:{flex:1,display:"flex",gap:e*.03,marginTop:n*.06},children:[t(nt,{w:"33%",h:"100%",radius:4}),t(nt,{w:"33%",h:"100%",radius:4}),t(nt,{w:"33%",h:"100%",radius:4})]})]})}function Dc({width:e,height:n}){const o=Math.max(2,Math.min(4,Math.floor(e/140))),r=Math.max(1,Math.min(3,Math.floor(n/120)));return t("div",{style:{display:"grid",gridTemplateColumns:`repeat(${o}, 1fr)`,gridTemplateRows:`repeat(${r}, 1fr)`,gap:6,height:"100%"},children:Array.from({length:o*r},(i,s)=>t(nt,{w:"100%",h:"100%",radius:4},s))})}function Pc({width:e,height:n}){const o=Math.max(2,Math.floor((n-32)/28));return t("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[t("div",{style:{padding:"6px 8px",borderBottom:"1px solid var(--agd-stroke)"},children:t(B,{w:e*.5,h:3,strong:!0})}),t("div",{style:{flex:1,padding:4,display:"flex",flexDirection:"column",gap:2},children:Array.from({length:o},(r,i)=>t("div",{style:{padding:"4px 6px",borderRadius:3,background:i===0?"var(--agd-fill)":"transparent"},children:t(B,{w:`${50+i*17%35}%`,h:2,strong:i===0})},i))})]})}function Ac({width:e,height:n}){const o=Math.min(e,n)/2;return t("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${n}`,fill:"none",children:[t("rect",{x:"1",y:"1",width:e-2,height:n-2,rx:o,stroke:"var(--agd-stroke)",strokeWidth:"1"}),t("circle",{cx:e-o,cy:n/2,r:o*.7,fill:"var(--agd-bar)"})]})}function Oc({width:e,height:n}){const o=Math.min(n/2,20);return t("div",{style:{height:"100%",borderRadius:o,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:`0 ${o*.6}px`,gap:6},children:[t(Bt,{size:Math.min(14,n*.4)}),t(B,{w:"50%",h:2})]})}function Wc({width:e,height:n}){return t("div",{style:{height:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[t(Bt,{size:Math.min(20,n*.5)}),t("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[t(B,{w:"60%",h:3,strong:!0}),t(B,{w:"80%",h:2})]}),t("div",{style:{width:14,height:14,border:"1px solid var(--agd-stroke)",borderRadius:3,flexShrink:0}})]})}function Fc({width:e,height:n}){return t("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${n}`,fill:"none",children:[t("rect",{x:"0",y:"0",width:e,height:n,rx:n/2,stroke:"var(--agd-stroke)",strokeWidth:"0.8"}),t("rect",{x:"1",y:"1",width:e*.65,height:n-2,rx:(n-2)/2,fill:"var(--agd-bar)"})]})}function zc({width:e,height:n}){const o=Math.max(3,Math.min(7,Math.floor(e/50))),r=e/(o*2);return t("div",{style:{height:"100%",display:"flex",alignItems:"flex-end",justifyContent:"space-around",padding:"0 4px",borderBottom:"1px solid var(--agd-stroke)"},children:Array.from({length:o},(i,s)=>{const l=30+(s*37+17)%55;return t(nt,{w:r,h:`${l}%`,radius:2},s)})})}function Hc({width:e,height:n}){const o=Math.min(e,n)*.12;return t("div",{style:{height:"100%",position:"relative",display:"flex",alignItems:"center",justifyContent:"center"},children:[t(nt,{w:"100%",h:"100%",radius:4}),t("div",{style:{position:"absolute",width:o*2,height:o*2,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:t("div",{style:{width:0,height:0,borderLeft:`${o*.6}px solid var(--agd-bar-strong)`,borderTop:`${o*.4}px solid transparent`,borderBottom:`${o*.4}px solid transparent`,marginLeft:o*.15}})})]})}function Yc({width:e,height:n}){return t("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[t("div",{style:{flex:1,width:"100%",borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:t(B,{w:"60%",h:2})}),t("div",{style:{width:8,height:8,background:"var(--agd-fill)",border:"1px dashed var(--agd-stroke)",borderTop:"none",borderLeft:"none",transform:"rotate(45deg)",marginTop:-5}})]})}function jc({width:e,height:n}){const o=Math.max(2,Math.min(4,Math.floor(e/80)));return t("div",{style:{display:"flex",alignItems:"center",height:"100%",gap:4},children:Array.from({length:o},(r,i)=>t("div",{style:{display:"flex",alignItems:"center",gap:4},children:[i>0&&t("span",{style:{color:"var(--agd-stroke)",fontSize:10},children:"/"}),t(B,{w:40+i*13%20,h:2,strong:i===o-1})]},i))})}function Uc({width:e,height:n}){const o=Math.max(3,Math.min(5,Math.floor(e/40))),r=Math.min(28,n*.8);return t("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",gap:4},children:Array.from({length:o},(i,s)=>t(nt,{w:r,h:r,radius:4,style:s===1?{background:"var(--agd-bar)"}:void 0},s))})}function Xc({width:e}){return t("div",{style:{display:"flex",alignItems:"center",height:"100%"},children:t("div",{style:{width:"100%",height:1,background:"var(--agd-stroke)"}})})}function Qc({width:e,height:n}){const o=Math.max(2,Math.min(4,Math.floor(n/40)));return t("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:Array.from({length:o},(r,i)=>t("div",{style:{borderBottom:"1px solid var(--agd-stroke)",padding:"8px 6px",display:"flex",alignItems:"center",justifyContent:"space-between",flex:i===0?2:1},children:[t(B,{w:`${40+i*17%25}%`,h:3,strong:!0}),t("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:i===0?"▼":"▶"})]},i))})}function qc({width:e,height:n}){return t("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:6},children:[t("div",{style:{flex:1,display:"flex",gap:6,alignItems:"center"},children:[t("span",{style:{fontSize:12,color:"var(--agd-stroke)"},children:"‹"}),t(nt,{w:"100%",h:"100%",radius:4}),t("span",{style:{fontSize:12,color:"var(--agd-stroke)"},children:"›"})]}),t("div",{style:{display:"flex",justifyContent:"center",gap:4},children:[t(Bt,{size:5}),t(Bt,{size:5}),t(Bt,{size:5})]})]})}function Vc({width:e,height:n}){return t("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",padding:10,gap:n*.04},children:[t(B,{w:e*.4,h:3,strong:!0}),t(B,{w:e*.3,h:6,strong:!0}),t("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4,width:"100%",padding:"8px 0"},children:Array.from({length:4},(o,r)=>t("div",{style:{display:"flex",alignItems:"center",gap:4},children:[t(Bt,{size:5}),t(B,{w:`${50+r*17%35}%`,h:2})]},r))}),t(nt,{w:e*.7,h:Math.min(32,n*.1),radius:6,style:{background:"var(--agd-bar)"}})]})}function Gc({width:e,height:n}){return t("div",{style:{height:"100%",display:"flex",flexDirection:"column",padding:10,gap:8},children:[t("span",{style:{fontSize:18,lineHeight:1,color:"var(--agd-stroke)",fontFamily:"serif"},children:"“"}),t("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[t(B,{w:"90%",h:2}),t(B,{w:"75%",h:2}),t(B,{w:"60%",h:2})]}),t("div",{style:{display:"flex",alignItems:"center",gap:6},children:[t(Bt,{size:20}),t("div",{style:{display:"flex",flexDirection:"column",gap:2},children:[t(B,{w:60,h:3,strong:!0}),t(B,{w:40,h:2})]})]})]})}function Kc({width:e,height:n}){return t("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:n*.08},children:[t(B,{w:e*.5,h:Math.max(4,n*.05),strong:!0}),t(B,{w:e*.35}),t(nt,{w:Math.min(140,e*.25),h:Math.min(32,n*.15),radius:6,style:{marginTop:n*.04,background:"var(--agd-bar)"}})]})}function Jc({width:e,height:n}){return t("div",{style:{height:"100%",borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[t("div",{style:{width:16,height:16,borderRadius:"50%",border:"1.5px solid var(--agd-bar-strong)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:t("div",{style:{width:2,height:6,background:"var(--agd-bar-strong)",borderRadius:1}})}),t("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[t(B,{w:"40%",h:3,strong:!0}),t(B,{w:"70%",h:2})]})]})}function Zc({width:e,height:n}){return t("div",{style:{height:"100%",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center",gap:8,padding:"0 12px"},children:[t(B,{w:e*.4,h:3,strong:!0}),t(nt,{w:60,h:Math.min(24,n*.6),radius:4})]})}function ed({width:e,height:n}){return t("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:n*.06},children:[t(B,{w:e*.5,h:2}),t(B,{w:e*.4,h:Math.max(8,n*.18),strong:!0}),t(B,{w:e*.3,h:2})]})}function td({width:e,height:n}){const o=Math.max(3,Math.min(5,Math.floor(e/100))),r=Math.min(12,n*.35);return t("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",height:"100%",padding:"0 8px"},children:Array.from({length:o},(i,s)=>t("div",{style:{display:"flex",alignItems:"center",gap:0,flex:1},children:[t("div",{style:{width:r,height:r,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:s===0?"var(--agd-bar)":"transparent",flexShrink:0}}),s<o-1&&t("div",{style:{flex:1,height:1,background:"var(--agd-stroke)",margin:"0 4px"}})]},s))})}function nd({width:e,height:n}){return t("div",{style:{height:"100%",borderRadius:4,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center",gap:4,padding:"0 6px"},children:[t(B,{w:Math.max(16,e*.5),h:2,strong:!0}),t("div",{style:{width:8,height:8,borderRadius:"50%",border:"1px solid var(--agd-stroke)",flexShrink:0}})]})}function od({width:e,height:n}){const r=Math.min(n*.7,e/7.5);return t("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",gap:r*.2},children:Array.from({length:5},(i,s)=>t("svg",{width:r,height:r,viewBox:"0 0 16 16",fill:"none",children:t("path",{d:"M8 1.5l2 4 4.5.7-3.25 3.1.75 4.5L8 11.4l-4 2.4.75-4.5L1.5 6.2 6 5.5z",stroke:"var(--agd-stroke)",strokeWidth:"0.8",fill:s<3?"var(--agd-bar)":"none"})},s))})}function rd({width:e,height:n}){return t("div",{style:{height:"100%",position:"relative",borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",overflow:"hidden"},children:[t("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${n}`,fill:"none",style:{position:"absolute",inset:0},children:[t("line",{x1:0,y1:n*.3,x2:e,y2:n*.7,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".2"}),t("line",{x1:0,y1:n*.6,x2:e,y2:n*.2,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".15"}),t("line",{x1:e*.4,y1:0,x2:e*.6,y2:n,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".15"})]}),t("div",{style:{position:"absolute",left:"50%",top:"40%",transform:"translate(-50%, -100%)"},children:t("svg",{width:"16",height:"22",viewBox:"0 0 16 22",fill:"none",children:[t("path",{d:"M8 0C3.6 0 0 3.6 0 8c0 6 8 14 8 14s8-8 8-14c0-4.4-3.6-8-8-8z",fill:"var(--agd-bar)",opacity:".4"}),t("circle",{cx:"8",cy:"8",r:"3",fill:"var(--agd-fill)"})]})})]})}function sd({width:e,height:n}){const o=Math.max(3,Math.min(5,Math.floor(n/60)));return t("div",{style:{display:"flex",height:"100%",padding:"8px 0"},children:[t("div",{style:{width:16,display:"flex",flexDirection:"column",alignItems:"center"},children:Array.from({length:o},(r,i)=>t("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",flex:1},children:[t(Bt,{size:8}),i<o-1&&t("div",{style:{flex:1,width:1,background:"var(--agd-stroke)"}})]},i))}),t("div",{style:{flex:1,display:"flex",flexDirection:"column",justifyContent:"space-around",paddingLeft:8},children:Array.from({length:o},(r,i)=>t("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[t(B,{w:`${35+i*13%25}%`,h:3,strong:!0}),t(B,{w:`${50+i*17%30}%`,h:2})]},i))})]})}function id({width:e,height:n}){return t("div",{style:{height:"100%",borderRadius:8,border:"2px dashed var(--agd-stroke)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:n*.06},children:[t("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[t("path",{d:"M12 16V4m0 0l-4 4m4-4l4 4",stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),t("path",{d:"M4 17v2a1 1 0 001 1h14a1 1 0 001-1v-2",stroke:"var(--agd-stroke)",strokeWidth:"1.5"})]}),t(B,{w:e*.4,h:2}),t(B,{w:e*.25,h:2})]})}function ld({width:e,height:n}){const o=Math.max(3,Math.min(8,Math.floor(n/20)));return t("div",{style:{height:"100%",borderRadius:6,background:"var(--agd-fill)",border:"1px solid var(--agd-stroke)",padding:8,display:"flex",flexDirection:"column",gap:4},children:[t("div",{style:{display:"flex",gap:3,marginBottom:4},children:[t(Bt,{size:6}),t(Bt,{size:6}),t(Bt,{size:6})]}),Array.from({length:o},(r,i)=>t("div",{style:{display:"flex",gap:6,paddingLeft:i>0&&i<o-1?12:0},children:t(B,{w:`${25+i*23%50}%`,h:2,strong:i===0})},i))]})}function ad({width:e,height:n}){const i=Math.min((e-16)/7,(n-40)/6);return t("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[t("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"6px 8px"},children:[t("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:"‹"}),t(B,{w:e*.3,h:3,strong:!0}),t("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:"›"})]}),t("div",{style:{display:"grid",gridTemplateColumns:"repeat(7, 1fr)",gap:2,padding:"0 4px",flex:1},children:[Array.from({length:7},(s,l)=>t("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:i*.6},children:t(B,{w:i*.5,h:2})},`h${l}`)),Array.from({length:35},(s,l)=>t("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:i},children:t("div",{style:{width:i*.6,height:i*.6,borderRadius:"50%",background:l===12?"var(--agd-bar)":"transparent",display:"flex",alignItems:"center",justifyContent:"center"},children:t("div",{style:{width:2,height:2,borderRadius:1,background:"var(--agd-bar-strong)",opacity:l===12?1:.3}})})},l))]})]})}function cd({width:e,height:n}){return t("div",{style:{height:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[t(Bt,{size:Math.min(32,n*.55)}),t("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[t(B,{w:"50%",h:3,strong:!0}),t(B,{w:"75%",h:2})]}),t(B,{w:30,h:2})]})}function dd({width:e,height:n}){return t("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[t("div",{style:{height:"50%",background:"var(--agd-fill)",borderBottom:"1px dashed var(--agd-stroke)"}}),t("div",{style:{flex:1,padding:10,display:"flex",flexDirection:"column",gap:5},children:[t(B,{w:"65%",h:4,strong:!0}),t(B,{w:"40%",h:3}),t("div",{style:{flex:1}}),t("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[t(B,{w:"30%",h:5,strong:!0}),t(nt,{w:Math.min(70,e*.3),h:26,radius:4,style:{background:"var(--agd-bar)"}})]})]})]})}function _d({width:e,height:n}){const o=Math.min(48,n*.3);return t("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:n*.06},children:[t(Bt,{size:o}),t(B,{w:e*.45,h:4,strong:!0}),t(B,{w:e*.3,h:2}),t("div",{style:{display:"flex",gap:e*.08,marginTop:n*.04},children:[t("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[t(B,{w:20,h:3,strong:!0}),t(B,{w:28,h:2})]}),t("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[t(B,{w:20,h:3,strong:!0}),t(B,{w:28,h:2})]}),t("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[t(B,{w:20,h:3,strong:!0}),t(B,{w:28,h:2})]})]})]})}function ud({width:e,height:n}){const o=Math.max(e*.6,80),r=Math.max(3,Math.floor(n/40));return t("div",{style:{height:"100%",display:"flex"},children:[t("div",{style:{width:e-o,background:"var(--agd-fill)",opacity:.3}}),t("div",{style:{flex:1,borderLeft:"1px solid var(--agd-stroke)",display:"flex",flexDirection:"column",padding:e*.04},children:[t("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:n*.06},children:[t(B,{w:o*.4,h:4,strong:!0}),t("div",{style:{width:12,height:12,border:"1px solid var(--agd-stroke)",borderRadius:3}})]}),Array.from({length:r},(i,s)=>t("div",{style:{padding:"6px 0"},children:t(B,{w:`${50+s*17%35}%`,h:2,strong:s===0})},s))]})]})}function hd({width:e,height:n}){return t("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[t("div",{style:{flex:1,width:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",padding:10,display:"flex",flexDirection:"column",gap:5},children:[t(B,{w:"70%",h:3,strong:!0}),t(B,{w:"90%",h:2}),t(B,{w:"60%",h:2})]}),t("div",{style:{width:10,height:10,background:"var(--agd-fill)",border:"1px dashed var(--agd-stroke)",borderTop:"none",borderLeft:"none",transform:"rotate(45deg)",marginTop:-6}})]})}function md({width:e,height:n}){const o=Math.min(n*.7,e*.3);return t("div",{style:{height:"100%",display:"flex",alignItems:"center",gap:e*.08},children:[t(nt,{w:o,h:o,radius:o*.25}),t(B,{w:e*.45,h:Math.max(4,n*.2),strong:!0})]})}function pd({width:e,height:n}){const o=Math.max(2,Math.min(5,Math.floor(n/56)));return t("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:Array.from({length:o},(r,i)=>t("div",{style:{borderBottom:"1px solid var(--agd-stroke)",padding:"8px 6px",display:"flex",alignItems:"center",justifyContent:"space-between",flex:i===0?2:1},children:[t("div",{style:{display:"flex",alignItems:"center",gap:6},children:[t("span",{style:{fontSize:9,fontWeight:700,color:"var(--agd-stroke)"},children:"Q"}),t(B,{w:e*(.3+i*13%25/100),h:3,strong:!0})]}),t("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:i===0?"▼":"▶"})]},i))})}function gd({width:e,height:n}){const o=Math.max(2,Math.min(4,Math.floor(e/120))),r=Math.max(1,Math.min(3,Math.floor(n/120)));return t("div",{style:{display:"grid",gridTemplateColumns:`repeat(${o}, 1fr)`,gridTemplateRows:`repeat(${r}, 1fr)`,gap:4,height:"100%"},children:Array.from({length:o*r},(i,s)=>t("div",{style:{borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",position:"relative",overflow:"hidden"},children:t("svg",{width:"100%",height:"100%",viewBox:"0 0 100 100",preserveAspectRatio:"none",fill:"none",children:[t("line",{x1:"0",y1:"0",x2:"100",y2:"100",stroke:"var(--agd-stroke)",strokeWidth:"0.5"}),t("line",{x1:"100",y1:"0",x2:"0",y2:"100",stroke:"var(--agd-stroke)",strokeWidth:"0.5"})]})},s))})}function fd({width:e,height:n}){const o=Math.min(e,n);return t("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${n}`,fill:"none",children:[t("rect",{x:"1",y:(n-o+2)/2,width:o-2,height:o-2,rx:o*.15,stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),t("path",{d:`M${o*.25} ${n/2}l${o*.2} ${o*.2} ${o*.3}-${o*.35}`,stroke:"var(--agd-bar)",strokeWidth:"1.5",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"})]})}function yd({width:e,height:n}){const o=Math.min(e,n)/2-1;return t("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${n}`,fill:"none",children:[t("circle",{cx:e/2,cy:n/2,r:o,stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),t("circle",{cx:e/2,cy:n/2,r:o*.45,fill:"var(--agd-bar)"})]})}function bd({width:e,height:n}){const o=Math.max(2,n*.12),r=Math.min(n*.35,10),i=e*.55;return t("div",{style:{height:"100%",display:"flex",alignItems:"center",position:"relative"},children:[t("div",{style:{width:"100%",height:o,borderRadius:o/2,background:"var(--agd-fill)",border:"1px solid var(--agd-stroke)",position:"relative"},children:t("div",{style:{width:i,height:"100%",borderRadius:o/2,background:"var(--agd-bar)"}})}),t("div",{style:{position:"absolute",left:i-r,width:r*2,height:r*2,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:"var(--agd-fill)"}})]})}function xd({width:e,height:n}){const o=Math.min(36,n*.15),r=7,i=4,s=Math.min((e-16)/r,(n-o-40)/(i+1));return t("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:4},children:[t("div",{style:{height:o,borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 8px",justifyContent:"space-between"},children:[t(B,{w:"40%",h:2}),t("svg",{width:"12",height:"12",viewBox:"0 0 16 16",fill:"none",children:[t("rect",{x:"2",y:"3",width:"12",height:"11",rx:"1",stroke:"var(--agd-stroke)",strokeWidth:"1"}),t("line",{x1:"2",y1:"6",x2:"14",y2:"6",stroke:"var(--agd-stroke)",strokeWidth:"0.5"})]})]}),t("div",{style:{flex:1,borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",flexDirection:"column"},children:[t("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"4px 6px"},children:[t("span",{style:{fontSize:7,color:"var(--agd-stroke)"},children:"‹"}),t(B,{w:e*.25,h:2,strong:!0}),t("span",{style:{fontSize:7,color:"var(--agd-stroke)"},children:"›"})]}),t("div",{style:{display:"grid",gridTemplateColumns:`repeat(${r}, 1fr)`,gap:1,padding:"0 4px",flex:1},children:Array.from({length:r*i},(l,d)=>t("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:s},children:t("div",{style:{width:s*.5,height:s*.5,borderRadius:"50%",background:d===10?"var(--agd-bar)":"transparent"},children:t("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:t("div",{style:{width:1.5,height:1.5,borderRadius:1,background:"var(--agd-bar-strong)",opacity:d===10?1:.25}})})})},d))})]})]})}function wd({width:e,height:n}){return t("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:n*.08,padding:4},children:[t("div",{style:{width:"100%",height:n*.2,borderRadius:4,background:"var(--agd-fill)"}}),t("div",{style:{width:"70%",height:Math.max(6,n*.1),borderRadius:3,background:"var(--agd-fill)"}}),t("div",{style:{width:"90%",height:Math.max(4,n*.06),borderRadius:3,background:"var(--agd-fill)"}}),t("div",{style:{width:"50%",height:Math.max(4,n*.06),borderRadius:3,background:"var(--agd-fill)"}})]})}function vd({width:e,height:n}){return t("div",{style:{height:"100%",display:"flex",alignItems:"center",gap:6},children:t("div",{style:{height:"100%",flex:1,borderRadius:n/2,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:`0 ${n*.3}px`,gap:4},children:[t(B,{w:"60%",h:2,strong:!0}),t("div",{style:{width:Math.max(6,n*.3),height:Math.max(6,n*.3),borderRadius:"50%",border:"1px solid var(--agd-stroke)",flexShrink:0,marginLeft:"auto"}})]})})}function kd({width:e,height:n}){const o=Math.min(e,n);return t("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${n}`,fill:"none",children:t("path",{d:`M${e/2} ${(n-o)/2+o*.1}l${o*.12} ${o*.25} ${o*.28} ${o*.04}-${o*.2} ${o*.2} ${o*.05} ${o*.28}-${o*.25}-${o*.12}-${o*.25} ${o*.12} ${o*.05}-${o*.28}-${o*.2}-${o*.2} ${o*.28}-${o*.04}z`,stroke:"var(--agd-stroke)",strokeWidth:"1",fill:"var(--agd-fill)"})})}function Sd({width:e,height:n}){const o=Math.min(e,n)/2-2;return t("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${n}`,fill:"none",children:[t("circle",{cx:e/2,cy:n/2,r:o,stroke:"var(--agd-stroke)",strokeWidth:"1.5",opacity:".2"}),t("path",{d:`M${e/2} ${n/2-o}a${o} ${o} 0 0 1 ${o} ${o}`,stroke:"var(--agd-bar-strong)",strokeWidth:"1.5",strokeLinecap:"round"})]})}function Cd({width:e,height:n}){const o=Math.min(36,n*.25,e*.12),r=Math.max(1,Math.min(3,Math.floor(n/80)));return t("div",{style:{display:"flex",flexDirection:"column",height:"100%",justifyContent:"space-around",padding:8},children:Array.from({length:r},(i,s)=>t("div",{style:{display:"flex",gap:e*.04,alignItems:"flex-start"},children:[t(nt,{w:o,h:o,radius:o*.25}),t("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[t(B,{w:`${40+s*13%20}%`,h:3,strong:!0}),t(B,{w:`${60+s*17%25}%`,h:2})]})]},s))})}function Md({width:e,height:n}){const o=Math.max(2,Math.min(4,Math.floor(e/120))),r=Math.min(36,n*.25);return t("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",gap:n*.06,padding:n*.06},children:[t(B,{w:e*.3,h:4,strong:!0}),t("div",{style:{display:"flex",gap:e*.06,justifyContent:"center",flex:1,alignItems:"center"},children:Array.from({length:o},(i,s)=>t("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:6},children:[t(Bt,{size:r}),t(B,{w:e*.12,h:3,strong:!0}),t(B,{w:e*.08,h:2})]},s))})]})}function $d({width:e,height:n}){const o=Math.max(2,Math.min(3,Math.floor(n/80)));return t("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",padding:e*.06,gap:n*.04},children:[t(B,{w:e*.5,h:Math.max(5,n*.04),strong:!0}),t(B,{w:e*.35,h:2}),t("div",{style:{width:"100%",display:"flex",flexDirection:"column",gap:n*.03,marginTop:n*.04},children:Array.from({length:o},(r,i)=>t("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[t(B,{w:Math.min(60,e*.2),h:2}),t(nt,{w:"100%",h:Math.min(32,n*.1),radius:4})]},i))}),t(nt,{w:"100%",h:Math.min(36,n*.12),radius:6,style:{marginTop:n*.03,background:"var(--agd-bar)"}}),t(B,{w:e*.4,h:2})]})}function Id({width:e,height:n}){return t("div",{style:{height:"100%",display:"flex",flexDirection:"column",padding:e*.04,gap:n*.03},children:[t(B,{w:e*.4,h:4,strong:!0}),t(B,{w:e*.6,h:2}),t("div",{style:{display:"flex",gap:6,marginTop:n*.03},children:[t("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[t(B,{w:50,h:2}),t(nt,{w:"100%",h:Math.min(28,n*.1),radius:4})]}),t("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[t(B,{w:40,h:2}),t(nt,{w:"100%",h:Math.min(28,n*.1),radius:4})]})]}),t("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[t(B,{w:50,h:2}),t(nt,{w:"100%",h:Math.min(28,n*.1),radius:4})]}),t("div",{style:{display:"flex",flexDirection:"column",gap:3,flex:1},children:[t(B,{w:60,h:2}),t(nt,{w:"100%",h:"100%",radius:4})]}),t(nt,{w:Math.min(120,e*.3),h:Math.min(30,n*.1),radius:6,style:{alignSelf:"flex-end",background:"var(--agd-bar)"}})]})}var Nd={navigation:fc,hero:yc,sidebar:bc,footer:xc,modal:wc,card:vc,text:kc,image:Sc,table:Cc,list:Mc,button:$c,input:Ic,form:Nc,tabs:Ec,avatar:Rc,badge:Lc,header:Tc,section:Bc,grid:Dc,dropdown:Pc,toggle:Ac,search:Oc,toast:Wc,progress:Fc,chart:zc,video:Hc,tooltip:Yc,breadcrumb:jc,pagination:Uc,divider:Xc,accordion:Qc,carousel:qc,pricing:Vc,testimonial:Gc,cta:Kc,alert:Jc,banner:Zc,stat:ed,stepper:td,tag:nd,rating:od,map:rd,timeline:sd,fileUpload:id,codeBlock:ld,calendar:ad,notification:cd,productCard:dd,profile:_d,drawer:ud,popover:hd,logo:md,faq:pd,gallery:gd,checkbox:fd,radio:yd,slider:bd,datePicker:xd,skeleton:wd,chip:vd,icon:kd,spinner:Sd,feature:Cd,team:Md,login:$d,contact:Id};function Ed({type:e,width:n,height:o,text:r}){const i=Nd[e];return i?t("div",{style:{width:"100%",height:"100%",padding:8,position:"relative",pointerEvents:"none"},children:t(i,{width:n,height:o,text:r})}):t("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:t("span",{style:{fontSize:10,fontWeight:600,color:"var(--agd-text-3)",textTransform:"uppercase",letterSpacing:"0.06em",opacity:.5},children:e})})}var Rd=`.styles-module__overlay___aWh-q svg[fill=none],
.styles-module__rearrangeOverlay___-3R3t svg[fill=none] {
  fill: none !important;
}
.styles-module__overlay___aWh-q svg[fill=none] :not([fill]),
.styles-module__rearrangeOverlay___-3R3t svg[fill=none] :not([fill]) {
  fill: none !important;
}

.styles-module__overlayExiting___iEmYr {
  opacity: 0 !important;
  transition: opacity 0.25s ease !important;
  pointer-events: none !important;
}

.styles-module__overlay___aWh-q {
  position: fixed;
  inset: 0;
  z-index: 99995;
  pointer-events: auto;
  cursor: default;
  animation: styles-module__overlayFadeIn___aECVy 0.15s ease;
  --agd-stroke: rgba(59, 130, 246, 0.35);
  --agd-fill: rgba(59, 130, 246, 0.06);
  --agd-bar: rgba(59, 130, 246, 0.18);
  --agd-bar-strong: rgba(59, 130, 246, 0.28);
  --agd-text-3: rgba(255, 255, 255, 0.6);
  --agd-surface: #fff;
}
.styles-module__overlay___aWh-q.styles-module__light___ORIft {
  --agd-surface: #fff;
}
.styles-module__overlay___aWh-q:not(.styles-module__light___ORIft) {
  --agd-surface: #141414;
}
.styles-module__overlay___aWh-q.styles-module__wireframe___itvQU {
  --agd-stroke: rgba(249, 115, 22, 0.35);
  --agd-fill: rgba(249, 115, 22, 0.06);
  --agd-bar: rgba(249, 115, 22, 0.18);
  --agd-bar-strong: rgba(249, 115, 22, 0.28);
}
.styles-module__overlay___aWh-q.styles-module__placing___45yD8 {
  cursor: crosshair;
}
.styles-module__overlay___aWh-q.styles-module__passthrough___xaFeE {
  pointer-events: none;
}

.styles-module__blankCanvas___t2Eue {
  position: fixed;
  inset: 0;
  z-index: 99994;
  background: #fff;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.25s ease;
}
.styles-module__blankCanvas___t2Eue.styles-module__visible___OKKqX {
  opacity: var(--canvas-opacity, 1);
  pointer-events: auto;
}
.styles-module__blankCanvas___t2Eue::after {
  content: "";
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle, rgba(0, 0, 0, 0.08) 1px, transparent 1px);
  background-size: 24px 24px;
  background-position: 12px 12px;
  pointer-events: none;
  transition: opacity 0.2s ease;
}
.styles-module__blankCanvas___t2Eue.styles-module__gridActive___OZ-cf::after {
  opacity: 1;
  background-image: radial-gradient(circle, rgba(0, 0, 0, 0.22) 1px, transparent 1px);
}

.styles-module__paletteHeader___-Q5gQ {
  padding: 0 1rem 0.375rem;
}

.styles-module__paletteHeaderTitle___oHqZC {
  font-size: 0.8125rem;
  font-weight: 500;
  color: #fff;
  letter-spacing: -0.0094em;
}
.styles-module__light___ORIft .styles-module__paletteHeaderTitle___oHqZC {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__paletteHeaderDesc___6i74T {
  font-size: 0.6875rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.45);
  margin-top: 2px;
  line-height: 14px;
}
.styles-module__light___ORIft .styles-module__paletteHeaderDesc___6i74T {
  color: rgba(0, 0, 0, 0.45);
}
.styles-module__paletteHeaderDesc___6i74T a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: underline dotted;
  text-decoration-color: rgba(255, 255, 255, 0.2);
  text-underline-offset: 2px;
  transition: color 0.15s ease;
}
.styles-module__paletteHeaderDesc___6i74T a:hover {
  color: #fff;
}
.styles-module__light___ORIft .styles-module__paletteHeaderDesc___6i74T a {
  color: rgba(0, 0, 0, 0.6);
  text-decoration-color: rgba(0, 0, 0, 0.2);
}
.styles-module__light___ORIft .styles-module__paletteHeaderDesc___6i74T a:hover {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__wireframePurposeWrap___To-tS {
  display: grid;
  grid-template-rows: 1fr;
  transition: grid-template-rows 0.2s ease, opacity 0.15s ease;
  opacity: 1;
}
.styles-module__wireframePurposeWrap___To-tS.styles-module__collapsed___Ms9vS {
  grid-template-rows: 0fr;
  opacity: 0;
}

.styles-module__wireframePurposeInner___Lrahs {
  overflow: hidden;
}

.styles-module__wireframePurposeInput___7EtBN {
  display: block;
  width: calc(100% - 2rem);
  margin: 0.25rem 1rem 0.375rem;
  padding: 0.375rem 0.5rem;
  font-size: 0.8125rem;
  font-family: inherit;
  color: rgba(255, 255, 255, 0.85);
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.375rem;
  resize: none;
  outline: none;
  transition: border-color 0.15s ease;
  letter-spacing: -0.0094em;
}
.styles-module__wireframePurposeInput___7EtBN::placeholder {
  color: rgba(255, 255, 255, 0.3);
}
.styles-module__wireframePurposeInput___7EtBN:focus {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.05);
}
.styles-module__light___ORIft .styles-module__wireframePurposeInput___7EtBN {
  color: rgba(0, 0, 0, 0.7);
  background: rgba(0, 0, 0, 0.03);
  border-color: rgba(0, 0, 0, 0.1);
}
.styles-module__light___ORIft .styles-module__wireframePurposeInput___7EtBN::placeholder {
  color: rgba(0, 0, 0, 0.3);
}
.styles-module__light___ORIft .styles-module__wireframePurposeInput___7EtBN:focus {
  border-color: rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.05);
}

.styles-module__canvasToggle___-QqSy {
  width: calc(100% - 2rem);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.375rem;
  margin: 0.25rem 1rem 0.25rem;
  padding: 0.375rem 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  border: 1px dashed rgba(255, 255, 255, 0.1);
  background: transparent;
  transition: background 0.15s ease, border-color 0.15s ease;
}
.styles-module__canvasToggle___-QqSy:hover {
  background: rgba(255, 255, 255, 0.04);
  border-color: rgba(255, 255, 255, 0.15);
}
.styles-module__canvasToggle___-QqSy.styles-module__active___hosp7 {
  background: #f97316;
  border-color: transparent;
  border-style: solid;
  box-shadow: none;
}
.styles-module__light___ORIft .styles-module__canvasToggle___-QqSy {
  border-color: rgba(0, 0, 0, 0.08);
}
.styles-module__light___ORIft .styles-module__canvasToggle___-QqSy:hover {
  background: rgba(0, 0, 0, 0.02);
  border-color: rgba(0, 0, 0, 0.12);
}
.styles-module__light___ORIft .styles-module__canvasToggle___-QqSy.styles-module__active___hosp7 {
  background: #f97316;
  border-color: transparent;
  border-style: solid;
  box-shadow: none;
}

.styles-module__canvasToggleIcon___7pJ82 {
  width: 14px;
  height: 14px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.35);
}
.styles-module__active___hosp7 .styles-module__canvasToggleIcon___7pJ82 {
  color: rgba(255, 255, 255, 0.85);
}
.styles-module__light___ORIft .styles-module__canvasToggleIcon___7pJ82 {
  color: rgba(0, 0, 0, 0.25);
}
.styles-module__light___ORIft .styles-module__active___hosp7 .styles-module__canvasToggleIcon___7pJ82 {
  color: rgba(255, 255, 255, 0.85);
}

.styles-module__canvasToggleLabel___OanpY {
  font-size: 0.8125rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.6);
  letter-spacing: -0.0094em;
}
.styles-module__active___hosp7 .styles-module__canvasToggleLabel___OanpY {
  color: #fff;
}
.styles-module__light___ORIft .styles-module__canvasToggleLabel___OanpY {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__light___ORIft .styles-module__active___hosp7 .styles-module__canvasToggleLabel___OanpY {
  color: #fff;
}

.styles-module__placement___zcxv8 {
  position: absolute;
  border: 1.5px dashed rgba(59, 130, 246, 0.4);
  border-radius: 6px;
  background: rgba(59, 130, 246, 0.08);
  cursor: grab;
  transition: box-shadow 0.15s, border-color 0.15s, opacity 0.15s ease, transform 0.15s ease;
  -webkit-user-select: none;
  user-select: none;
  pointer-events: auto;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
  animation: styles-module__placementEnter___TdRhf 0.25s cubic-bezier(0.34, 1.2, 0.64, 1);
}
.styles-module__placement___zcxv8:active {
  cursor: grabbing;
}
.styles-module__placement___zcxv8:hover {
  border-color: rgba(59, 130, 246, 0.5);
  background: rgba(59, 130, 246, 0.1);
  box-shadow: 0 2px 8px rgba(59, 130, 246, 0.12);
}
.styles-module__placement___zcxv8.styles-module__selected___6yrp6 {
  border-color: #3c82f7;
  border-style: solid;
  background: rgba(59, 130, 246, 0.1);
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__placement___zcxv8.styles-module__selected___6yrp6:hover {
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__wireframe___itvQU .styles-module__placement___zcxv8 {
  border-color: rgba(249, 115, 22, 0.4);
  background: rgba(249, 115, 22, 0.08);
}
.styles-module__wireframe___itvQU .styles-module__placement___zcxv8:hover {
  border-color: rgba(249, 115, 22, 0.5);
  background: rgba(249, 115, 22, 0.1);
  box-shadow: 0 2px 8px rgba(249, 115, 22, 0.12);
}
.styles-module__wireframe___itvQU .styles-module__placement___zcxv8.styles-module__selected___6yrp6 {
  border-color: #f97316;
  background: rgba(249, 115, 22, 0.1);
  box-shadow: 0 0 0 2px rgba(249, 115, 22, 0.15), 0 2px 8px rgba(249, 115, 22, 0.15);
}
.styles-module__wireframe___itvQU .styles-module__placement___zcxv8.styles-module__selected___6yrp6:hover {
  box-shadow: 0 0 0 2px rgba(249, 115, 22, 0.15), 0 2px 8px rgba(249, 115, 22, 0.15);
}
.styles-module__placement___zcxv8.styles-module__dragging___le6KZ {
  opacity: 0.85;
  z-index: 50;
}
.styles-module__placement___zcxv8.styles-module__exiting___YrM8F {
  opacity: 0;
  transform: scale(0.97);
  pointer-events: none;
  animation: none;
  transition: opacity 0.2s ease, transform 0.2s cubic-bezier(0.32, 0.72, 0, 1);
}

.styles-module__placementContent___f64A4 {
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
}

.styles-module__placementLabel___0KvWl {
  position: absolute;
  top: -18px;
  left: 0;
  font-size: 10px;
  font-weight: 600;
  color: rgba(59, 130, 246, 0.7);
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-shadow: 0 0 4px rgba(255, 255, 255, 0.8), 0 0 8px rgba(255, 255, 255, 0.5);
}
.styles-module__selected___6yrp6 .styles-module__placementLabel___0KvWl {
  color: #3c82f7;
}
.styles-module__wireframe___itvQU .styles-module__placementLabel___0KvWl {
  color: rgba(249, 115, 22, 0.7);
}
.styles-module__wireframe___itvQU .styles-module__selected___6yrp6 .styles-module__placementLabel___0KvWl {
  color: #f97316;
}

.styles-module__placementAnnotation___78pTr {
  position: absolute;
  bottom: -18px;
  left: 0;
  right: 0;
  font-weight: 450;
  color: rgba(0, 0, 0, 0.5);
  font-size: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-shadow: 0 0 4px rgba(255, 255, 255, 0.9), 0 0 8px rgba(255, 255, 255, 0.6);
  opacity: 0;
  transform: translateY(-2px);
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.styles-module__placementAnnotation___78pTr.styles-module__annotationVisible___mrUyA {
  opacity: 1;
  transform: translateY(0);
}

.styles-module__sectionAnnotation___aUIs0 {
  position: absolute;
  bottom: -18px;
  left: 0;
  right: 0;
  font-weight: 450;
  color: rgba(59, 130, 246, 0.6);
  font-size: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-shadow: 0 0 4px rgba(255, 255, 255, 0.9), 0 0 8px rgba(255, 255, 255, 0.6);
  opacity: 0;
  transform: translateY(-2px);
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.styles-module__sectionAnnotation___aUIs0.styles-module__annotationVisible___mrUyA {
  opacity: 1;
  transform: translateY(0);
}

.styles-module__handle___Ikbxm {
  position: absolute;
  width: 8px;
  height: 8px;
  background: #fff;
  border: 1.5px solid #3c82f7;
  border-radius: 2px;
  z-index: 12;
  box-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.12);
  opacity: 0;
  transform: scale(0.3);
  pointer-events: none;
  will-change: opacity, transform;
  transition: opacity 0.2s ease-out, transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.styles-module__placement___zcxv8:hover .styles-module__handle___Ikbxm, .styles-module__sectionOutline___s0hy-:hover .styles-module__handle___Ikbxm, .styles-module__ghostOutline___po-kO:hover .styles-module__handle___Ikbxm, .styles-module__placement___zcxv8:active .styles-module__handle___Ikbxm, .styles-module__sectionOutline___s0hy-:active .styles-module__handle___Ikbxm, .styles-module__ghostOutline___po-kO:active .styles-module__handle___Ikbxm, .styles-module__selected___6yrp6 .styles-module__handle___Ikbxm {
  opacity: 1;
  transform: scale(1);
  pointer-events: auto;
}
.styles-module__sectionOutline___s0hy- .styles-module__handle___Ikbxm {
  border-color: inherit;
}
.styles-module__wireframe___itvQU .styles-module__handle___Ikbxm {
  border-color: #f97316;
}

.styles-module__handleNw___4TMIj {
  top: -4px;
  left: -4px;
  cursor: nw-resize;
}

.styles-module__handleNe___mnsTh {
  top: -4px;
  right: -4px;
  cursor: ne-resize;
}

.styles-module__handleSe___oSFnk {
  bottom: -4px;
  right: -4px;
  cursor: se-resize;
}

.styles-module__handleSw___pi--Z {
  bottom: -4px;
  left: -4px;
  cursor: sw-resize;
}

.styles-module__handleN___aBA-Q,
.styles-module__handleE___0hM5u,
.styles-module__handleS___JjDRv,
.styles-module__handleW___ERWGQ {
  opacity: 0 !important;
  pointer-events: none !important;
}

.styles-module__edgeHandle___XxXdT {
  position: absolute;
  z-index: 11;
  display: flex;
  align-items: center;
  justify-content: center;
}
.styles-module__edgeHandle___XxXdT::after {
  content: "";
  position: absolute;
  border-radius: 4px;
  background: #3c82f7;
}
.styles-module__wireframe___itvQU .styles-module__edgeHandle___XxXdT::after {
  background: #f97316;
}
.styles-module__edgeHandle___XxXdT::after {
  opacity: 0;
  transition: opacity 0.1s ease, transform 0.1s ease;
  transform: scale(0.8);
}
.styles-module__edgeHandle___XxXdT:hover::after {
  opacity: 0.85;
  transform: scale(1);
}
.styles-module__edgeHandle___XxXdT svg {
  position: relative;
  z-index: 1;
  opacity: 0;
  transition: opacity 0.1s ease;
  filter: drop-shadow(0 0 2px var(--agd-surface));
}
.styles-module__edgeHandle___XxXdT:hover svg {
  opacity: 1;
}

.styles-module__edgeN___-JJDj,
.styles-module__edgeS___66lMX {
  left: 12px;
  right: 12px;
  height: 12px;
  cursor: n-resize;
}
.styles-module__edgeN___-JJDj::after,
.styles-module__edgeS___66lMX::after {
  width: 24px;
  height: 4px;
}

.styles-module__edgeN___-JJDj {
  top: -6px;
}

.styles-module__edgeS___66lMX {
  bottom: -6px;
  cursor: s-resize;
}

.styles-module__edgeE___1bGDa,
.styles-module__edgeW___lHQNo {
  top: 12px;
  bottom: 12px;
  width: 12px;
  cursor: e-resize;
}
.styles-module__edgeE___1bGDa::after,
.styles-module__edgeW___lHQNo::after {
  width: 4px;
  height: 24px;
}

.styles-module__edgeE___1bGDa {
  right: -6px;
}

.styles-module__edgeW___lHQNo {
  left: -6px;
  cursor: w-resize;
}

.styles-module__deleteButton___LkGCb {
  position: absolute;
  top: -8px;
  right: -8px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  color: rgba(0, 0, 0, 0.35);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  line-height: 1;
  z-index: 15;
  pointer-events: none;
  opacity: 0;
  transform: scale(0.8);
  will-change: opacity, transform;
  transition: opacity 0.2s ease-out, transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), background 0.12s ease, color 0.12s ease, border-color 0.12s ease, box-shadow 0.12s ease;
}
.styles-module__placement___zcxv8:hover .styles-module__deleteButton___LkGCb, .styles-module__selected___6yrp6 .styles-module__deleteButton___LkGCb, .styles-module__sectionOutline___s0hy-:hover .styles-module__deleteButton___LkGCb, .styles-module__sectionOutline___s0hy-.styles-module__selected___6yrp6 .styles-module__deleteButton___LkGCb, .styles-module__ghostOutline___po-kO:hover .styles-module__deleteButton___LkGCb, .styles-module__ghostOutline___po-kO.styles-module__selected___6yrp6 .styles-module__deleteButton___LkGCb {
  opacity: 1;
  transform: scale(1);
  pointer-events: auto;
}
.styles-module__deleteButton___LkGCb:hover {
  background: #ef4444;
  color: #fff;
  border-color: #ef4444;
  box-shadow: 0 1px 4px rgba(239, 68, 68, 0.3);
  transform: scale(1.1);
}
.styles-module__overlay___aWh-q:not(.styles-module__light___ORIft) .styles-module__deleteButton___LkGCb, .styles-module__rearrangeOverlay___-3R3t:not(.styles-module__light___ORIft) .styles-module__deleteButton___LkGCb {
  background: rgba(40, 40, 40, 0.9);
  border-color: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.5);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
}
.styles-module__overlay___aWh-q:not(.styles-module__light___ORIft) .styles-module__deleteButton___LkGCb:hover, .styles-module__rearrangeOverlay___-3R3t:not(.styles-module__light___ORIft) .styles-module__deleteButton___LkGCb:hover {
  background: #ef4444;
  color: #fff;
  border-color: #ef4444;
}

.styles-module__drawBox___BrVAa {
  position: fixed;
  pointer-events: none;
  z-index: 99996;
  border: 2px solid #3c82f7;
  border-radius: 6px;
  background: rgba(59, 130, 246, 0.15);
}

.styles-module__selectBox___Iu8kB {
  position: fixed;
  pointer-events: none;
  z-index: 99996;
  border: 1px dashed #3c82f7;
  background: rgba(59, 130, 246, 0.08);
  border-radius: 2px;
}

.styles-module__sizeIndicator___7zJ4y {
  position: fixed;
  pointer-events: none;
  z-index: 100001;
  font-size: 10px;
  color: #fff;
  background: #3c82f7;
  padding: 2px 6px;
  border-radius: 4px;
  white-space: nowrap;
  font-weight: 500;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}

.styles-module__guideLine___DUQY2 {
  pointer-events: none;
  z-index: 100001;
  background: #f0f;
  opacity: 0.5;
}

.styles-module__dragPreview___onPbU {
  position: fixed;
  z-index: 100002;
  pointer-events: none;
  border: 1.5px dashed #3c82f7;
  border-radius: 6px;
  background: rgba(59, 130, 246, 0.1);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 9px;
  font-weight: 600;
  color: #3c82f7;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  box-shadow: 0 4px 16px rgba(59, 130, 246, 0.15);
  transition: width 0.08s ease, height 0.08s ease, opacity 0.08s ease;
}

.styles-module__dragPreviewWireframe___jsg0G {
  border-color: #f97316;
  background: rgba(249, 115, 22, 0.1);
  color: #f97316;
  box-shadow: 0 4px 16px rgba(249, 115, 22, 0.15);
}

.styles-module__palette___C7iSH {
  position: absolute;
  right: 5px;
  bottom: calc(100% + 0.5rem);
  width: 256px;
  overflow: hidden;
  background: #1c1c1c;
  border: none;
  border-radius: 1rem;
  padding: 13px 0 16px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.04);
  z-index: 100001;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  cursor: default;
  opacity: 0;
  filter: blur(5px);
}
.styles-module__palette___C7iSH .styles-module__paletteItem___6TlnA,
.styles-module__palette___C7iSH .styles-module__paletteItemLabel___6ncO4,
.styles-module__palette___C7iSH .styles-module__paletteSectionTitle___PqnjX,
.styles-module__palette___C7iSH .styles-module__paletteFooter___QYnAG {
  transition: background 0.25s ease, color 0.25s ease, border-color 0.25s ease;
}
.styles-module__palette___C7iSH {
  opacity: 0;
  transform: translateY(var(--panel-offset-y, 4px)) scale(0.98);
  transform-origin: var(--panel-origin, bottom right);
  filter: blur(2px);
  pointer-events: none;
  visibility: hidden;
  transition: opacity 120ms cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 120ms cubic-bezier(0.25, 0.46, 0.45, 0.94), filter 120ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
.styles-module__palette___C7iSH[data-panel-present=true] {
  visibility: visible;
}
.styles-module__palette___C7iSH[data-panel-open=true] {
  opacity: 1;
  transform: translateY(0) scale(1);
  filter: blur(0);
  pointer-events: auto;
  transition-duration: 160ms;
}
@media (prefers-reduced-motion: reduce) {
  .styles-module__palette___C7iSH {
    transition: none;
    transform: none;
    filter: none;
  }
}
.styles-module__palette___C7iSH.styles-module__light___ORIft {
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}

.styles-module__paletteSection___V8DEA {
  padding: 0 1rem;
}
.styles-module__paletteSection___V8DEA + .styles-module__paletteSection___V8DEA {
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}
.styles-module__light___ORIft .styles-module__paletteSection___V8DEA + .styles-module__paletteSection___V8DEA {
  border-top-color: rgba(0, 0, 0, 0.07);
}

.styles-module__paletteSectionTitle___PqnjX {
  font-size: 0.6875rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: -0.0094em;
  padding: 0 0 3px 3px;
}
.styles-module__light___ORIft .styles-module__paletteSectionTitle___PqnjX {
  color: rgba(0, 0, 0, 0.4);
}

.styles-module__paletteItem___6TlnA {
  width: 100%;
  text-align: left;
  background: transparent;
  display: flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.25rem 0.25rem;
  margin-bottom: 1px;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: background-color 0.15s ease, border-color 0.15s ease;
  border: 1px solid transparent;
  -webkit-user-select: none;
  user-select: none;
  min-height: 24px;
}
.styles-module__paletteItem___6TlnA:hover {
  background: rgba(255, 255, 255, 0.1);
}
.styles-module__paletteItem___6TlnA.styles-module__active___hosp7 {
  background: #3c82f7;
  border-color: transparent;
}
.styles-module__paletteItem___6TlnA.styles-module__wireframe___itvQU.styles-module__active___hosp7 {
  background: #f97316;
}
.styles-module__light___ORIft .styles-module__paletteItem___6TlnA:hover {
  background: rgba(0, 0, 0, 0.05);
}
.styles-module__light___ORIft .styles-module__paletteItem___6TlnA.styles-module__active___hosp7 {
  background: #3c82f7;
  border-color: transparent;
}
.styles-module__light___ORIft .styles-module__paletteItem___6TlnA.styles-module__wireframe___itvQU.styles-module__active___hosp7 {
  background: #f97316;
}

.styles-module__paletteItemIcon___0NPQK {
  width: 20px;
  height: 16px;
  border-radius: 2px;
  border: 1px dashed rgba(255, 255, 255, 0.15);
  background: rgba(255, 255, 255, 0.04);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  overflow: hidden;
  color: rgba(255, 255, 255, 0.45);
}
.styles-module__paletteItemIcon___0NPQK svg {
  display: block;
  width: 20px;
  height: 16px;
}
.styles-module__active___hosp7 .styles-module__paletteItemIcon___0NPQK {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}
.styles-module__light___ORIft .styles-module__paletteItemIcon___0NPQK {
  border-color: rgba(0, 0, 0, 0.12);
  background: rgba(0, 0, 0, 0.02);
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___ORIft .styles-module__active___hosp7 .styles-module__paletteItemIcon___0NPQK {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}

.styles-module__paletteItemLabel___6ncO4 {
  font-size: 0.8125rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.85);
  letter-spacing: -0.0094em;
  line-height: 1;
  min-width: 0;
}
.styles-module__active___hosp7 .styles-module__paletteItemLabel___6ncO4 {
  color: #fff;
  font-weight: 600;
}
.styles-module__light___ORIft .styles-module__paletteItemLabel___6ncO4 {
  color: rgba(0, 0, 0, 0.7);
}
.styles-module__light___ORIft .styles-module__active___hosp7 .styles-module__paletteItemLabel___6ncO4 {
  color: #fff;
  font-weight: 600;
}

.styles-module__placeScroll___7sClM {
  max-height: 240px;
  overflow-y: auto;
  overflow-x: hidden;
  padding-top: 0.25rem;
}
.styles-module__placeScroll___7sClM.styles-module__fadeTop___KT9tF {
  -webkit-mask-image: linear-gradient(to bottom, transparent 0, black 32px);
  mask-image: linear-gradient(to bottom, transparent 0, black 32px);
}
.styles-module__placeScroll___7sClM.styles-module__fadeBottom___x3ShT {
  -webkit-mask-image: linear-gradient(to bottom, black calc(100% - 32px), transparent 100%);
  mask-image: linear-gradient(to bottom, black calc(100% - 32px), transparent 100%);
}
.styles-module__placeScroll___7sClM.styles-module__fadeTop___KT9tF.styles-module__fadeBottom___x3ShT {
  -webkit-mask-image: linear-gradient(to bottom, transparent 0, black 32px, black calc(100% - 32px), transparent 100%);
  mask-image: linear-gradient(to bottom, transparent 0, black 32px, black calc(100% - 32px), transparent 100%);
}
.styles-module__placeScroll___7sClM::-webkit-scrollbar {
  width: 3px;
}
.styles-module__placeScroll___7sClM::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.12);
  border-radius: 2px;
}
.styles-module__light___ORIft .styles-module__placeScroll___7sClM::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.1);
}

.styles-module__paletteFooterWrap___71-fI {
  display: grid;
  grid-template-rows: 1fr;
  transition: grid-template-rows 0.25s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__paletteFooterWrap___71-fI.styles-module__footerHidden___fJUik {
  grid-template-rows: 0fr;
}

.styles-module__paletteFooterInnerContent___VC26h {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.15s ease, transform 0.15s ease;
}
.styles-module__footerHidden___fJUik .styles-module__paletteFooterInnerContent___VC26h {
  opacity: 0;
  transform: translateY(4px);
}

.styles-module__paletteFooterInner___dfylY {
  overflow: hidden;
}

.styles-module__paletteFooter___QYnAG {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
  padding: 0 1rem;
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}
.styles-module__light___ORIft .styles-module__paletteFooter___QYnAG {
  border-top-color: rgba(0, 0, 0, 0.07);
}

.styles-module__paletteFooterCount___D3Fia {
  font-size: 0.8125rem;
  font-weight: 400;
  letter-spacing: -0.0094em;
  color: rgba(255, 255, 255, 0.5);
}
.styles-module__light___ORIft .styles-module__paletteFooterCount___D3Fia {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__paletteFooterClear___ybBoa {
  font-size: 0.8125rem;
  font-weight: 400;
  letter-spacing: -0.0094em;
  color: rgba(255, 255, 255, 0.5);
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  font-family: inherit;
  transition: color 0.15s ease;
}
.styles-module__paletteFooterClear___ybBoa:hover {
  color: rgba(255, 255, 255, 0.7);
}
.styles-module__light___ORIft .styles-module__paletteFooterClear___ybBoa {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__light___ORIft .styles-module__paletteFooterClear___ybBoa:hover {
  color: rgba(0, 0, 0, 0.6);
}

.styles-module__paletteFooterActions___fLzv8 {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.styles-module__rollingWrap___S75jM {
  display: inline-block;
  overflow: hidden;
  height: 1.15em;
  position: relative;
  vertical-align: bottom;
}

.styles-module__rollingNum___1RKDx {
  position: absolute;
  left: 0;
  top: 0;
}

.styles-module__exitUp___AFDRW {
  animation: styles-module__numExitUp___FRQqx 0.25s cubic-bezier(0.32, 0.72, 0, 1) forwards;
}

.styles-module__enterUp___CPlXb {
  animation: styles-module__numEnterUp___2Yd-w 0.25s cubic-bezier(0.32, 0.72, 0, 1) forwards;
}

.styles-module__exitDown___-1yAy {
  animation: styles-module__numExitDown___xm5by 0.25s cubic-bezier(0.32, 0.72, 0, 1) forwards;
}

.styles-module__enterDown___DDuFR {
  animation: styles-module__numEnterDown___hpxBk 0.25s cubic-bezier(0.32, 0.72, 0, 1) forwards;
}

@keyframes styles-module__numExitUp___FRQqx {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-110%);
    opacity: 0;
  }
}
@keyframes styles-module__numEnterUp___2Yd-w {
  from {
    transform: translateY(110%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes styles-module__numExitDown___xm5by {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(110%);
    opacity: 0;
  }
}
@keyframes styles-module__numEnterDown___hpxBk {
  from {
    transform: translateY(-110%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
.styles-module__rearrangeOverlay___-3R3t {
  position: fixed;
  inset: 0;
  z-index: 99995;
  pointer-events: none;
  cursor: default;
  -webkit-user-select: none;
  user-select: none;
  animation: styles-module__overlayFadeIn___aECVy 0.15s ease;
}

.styles-module__hoverHighlight___8eT-v {
  position: fixed;
  pointer-events: none;
  z-index: 99994;
  border: 2px dashed rgba(59, 130, 246, 0.5);
  border-radius: 4px;
  background: rgba(59, 130, 246, 0.06);
  animation: styles-module__highlightFadeIn___Lg7KY 0.12s ease;
}

.styles-module__sectionOutline___s0hy- {
  position: fixed;
  border: 2px solid;
  border-radius: 4px;
  cursor: grab;
}
.styles-module__sectionOutline___s0hy-:active {
  cursor: grabbing;
}
.styles-module__sectionOutline___s0hy- {
  transition: box-shadow 0.15s, border-color 0.3s, background-color 0.3s, border-style 0s;
  -webkit-user-select: none;
  user-select: none;
  pointer-events: auto;
  animation: styles-module__sectionEnter___-8BXT 0.2s ease;
}
.styles-module__sectionOutline___s0hy-:hover {
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.1), 0 4px 12px rgba(0, 0, 0, 0.15);
}
.styles-module__sectionOutline___s0hy-.styles-module__selected___6yrp6 {
  border-style: solid;
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__sectionOutline___s0hy-.styles-module__selected___6yrp6:hover {
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6) {
  border: 1.5px dashed rgba(150, 150, 150, 0.35);
  background-color: transparent !important;
  box-shadow: none;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6):hover {
  border-color: rgba(150, 150, 150, 0.6);
  box-shadow: none;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6) .styles-module__sectionLabel___F80HQ {
  opacity: 0;
  transition: opacity 0.15s ease;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6):hover .styles-module__sectionLabel___F80HQ {
  opacity: 1;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6) .styles-module__movedBadge___s8z-q,
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6) .styles-module__sectionDimensions___RcJSL {
  opacity: 0;
  transition: opacity 0.15s ease;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6):hover .styles-module__sectionDimensions___RcJSL {
  opacity: 1;
}
.styles-module__sectionOutline___s0hy-.styles-module__exiting___YrM8F {
  opacity: 0;
  transform: scale(0.97);
  pointer-events: none;
  animation: none;
  transition: opacity 0.2s ease, transform 0.2s cubic-bezier(0.32, 0.72, 0, 1);
}

.styles-module__sectionLabel___F80HQ {
  position: absolute;
  top: 4px;
  left: 4px;
  font-size: 10px;
  font-weight: 600;
  color: #fff;
  padding: 2px 8px;
  border-radius: 4px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  max-width: calc(100% - 8px);
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__movedBadge___s8z-q {
  position: absolute;
  bottom: 22px;
  right: 4px;
  font-size: 9px;
  font-weight: 700;
  color: #fff;
  background: #22c55e;
  padding: 2px 6px;
  border-radius: 4px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  opacity: 0;
  transform: scale(0.8);
  transition: opacity 0.15s ease, transform 0.15s ease;
}
.styles-module__movedBadge___s8z-q.styles-module__badgeVisible___npbdS {
  opacity: 1;
  transform: scale(1);
  transition: opacity 0.2s cubic-bezier(0.34, 1.2, 0.64, 1), transform 0.2s cubic-bezier(0.34, 1.2, 0.64, 1);
}

.styles-module__resizedBadge___u51V8 {
  background: #3c82f7;
  bottom: 40px;
}

.styles-module__sectionDimensions___RcJSL {
  position: absolute;
  bottom: 4px;
  right: 4px;
  font-size: 9px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.7);
  background: rgba(0, 0, 0, 0.5);
  padding: 1px 5px;
  border-radius: 3px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}
.styles-module__light___ORIft .styles-module__sectionDimensions___RcJSL {
  color: rgba(0, 0, 0, 0.5);
  background: rgba(255, 255, 255, 0.7);
}

.styles-module__wireframeNotice___4GJyB {
  position: fixed;
  bottom: 16px;
  left: 24px;
  z-index: 99995;
  font-size: 9.5px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.4);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  pointer-events: auto;
  animation: styles-module__overlayFadeIn___aECVy 0.3s ease;
  line-height: 1.5;
  max-width: 280px;
}

.styles-module__wireframeOpacityRow___CJXzi {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
}

.styles-module__wireframeOpacityLabel___afkfT {
  font-size: 9px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.32);
  letter-spacing: 0.02em;
  white-space: nowrap;
  -webkit-user-select: none;
  user-select: none;
}

.styles-module__wireframeOpacitySlider___YcoEs {
  -webkit-appearance: none;
  appearance: none;
  width: 56px;
  height: 4px;
  background: rgba(0, 0, 0, 0.08);
  border-radius: 2px;
  outline: none;
  cursor: pointer;
  flex-shrink: 0;
  transition: background 0.15s ease;
}
.styles-module__wireframeOpacitySlider___YcoEs:hover {
  background: rgba(0, 0, 0, 0.13);
}
.styles-module__wireframeOpacitySlider___YcoEs::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #f97316;
  cursor: pointer;
  transition: background 0.15s ease;
}
.styles-module__wireframeOpacitySlider___YcoEs::-webkit-slider-thumb:hover {
  background: rgb(88.0082041185%, 37.39404381%, 2.2663056855%);
}
.styles-module__wireframeOpacitySlider___YcoEs::-moz-range-thumb {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #f97316;
  border: none;
  cursor: pointer;
}
.styles-module__wireframeOpacitySlider___YcoEs::-moz-range-track {
  background: rgba(0, 0, 0, 0.08);
  height: 4px;
  border-radius: 2px;
}

.styles-module__wireframeNoticeTitleRow___PJqyG {
  display: flex;
  align-items: center;
  gap: 0;
  margin-bottom: 2px;
}

.styles-module__wireframeNoticeTitle___okr08 {
  font-weight: 600;
  color: rgba(0, 0, 0, 0.55);
}

.styles-module__wireframeNoticeDivider___PNKQ6 {
  width: 1px;
  height: 8px;
  background: rgba(0, 0, 0, 0.12);
  margin: 0 8px;
  flex-shrink: 0;
}

.styles-module__wireframeStartOver___YFk-I {
  font-size: 9.5px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.35);
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
  font-family: inherit;
  text-decoration: none;
  transition: color 0.12s ease;
  white-space: nowrap;
}
.styles-module__wireframeStartOver___YFk-I:hover {
  color: rgba(0, 0, 0, 0.6);
}

.styles-module__ghostOutline___po-kO {
  position: fixed;
  border: 1.5px dashed rgba(59, 130, 246, 0.4);
  border-radius: 4px;
  background: rgba(59, 130, 246, 0.04);
  cursor: grab;
  opacity: 0.5;
  -webkit-user-select: none;
  user-select: none;
  pointer-events: auto;
  animation: styles-module__ghostEnter___EC3Mb 0.25s ease;
  transition: box-shadow 0.15s, border-color 0.3s, opacity 0.25s;
}
.styles-module__ghostOutline___po-kO:active {
  cursor: grabbing;
}
.styles-module__ghostOutline___po-kO:hover {
  opacity: 0.7;
  box-shadow: 0 0 0 1px rgba(59, 130, 246, 0.1), 0 4px 12px rgba(0, 0, 0, 0.08);
}
.styles-module__ghostOutline___po-kO.styles-module__selected___6yrp6 {
  opacity: 1;
  border-style: solid;
  border-width: 2px;
  border-color: #3c82f7;
  background: rgba(59, 130, 246, 0.08);
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__ghostOutline___po-kO.styles-module__exiting___YrM8F {
  opacity: 0;
  transform: scale(0.97);
  pointer-events: none;
  animation: none;
  transition: opacity 0.2s ease, transform 0.2s cubic-bezier(0.32, 0.72, 0, 1);
}

.styles-module__ghostBadge___tsQUK {
  position: absolute;
  bottom: calc(100% + 4px);
  left: -1px;
  font-size: 9px;
  font-weight: 600;
  color: rgba(59, 130, 246, 0.9);
  background: rgba(59, 130, 246, 0.08);
  border: 1px solid rgba(59, 130, 246, 0.2);
  padding: 1px 5px;
  border-radius: 3px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  letter-spacing: 0.02em;
  line-height: 1.2;
  animation: styles-module__badgeSlideIn___typJ7 0.2s ease both;
}

@keyframes styles-module__badgeSlideIn___typJ7 {
  from {
    opacity: 0;
    transform: translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.styles-module__ghostBadgeExtra___6CVoD {
  display: inline;
  animation: styles-module__badgeExtraIn___i4W8F 0.2s ease both;
}

@keyframes styles-module__badgeExtraIn___i4W8F {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.styles-module__originalOutline___Y6DD1 {
  position: fixed;
  border: 1.5px dashed rgba(150, 150, 150, 0.3);
  border-radius: 4px;
  background: transparent;
  pointer-events: none;
  -webkit-user-select: none;
  user-select: none;
  animation: styles-module__sectionEnter___-8BXT 0.2s ease;
}

.styles-module__originalLabel___HqI9g {
  position: absolute;
  top: 4px;
  left: 4px;
  font-size: 9px;
  font-weight: 500;
  color: rgba(150, 150, 150, 0.5);
  padding: 1px 6px;
  border-radius: 3px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  background: rgba(150, 150, 150, 0.08);
}

.styles-module__connectorSvg___Lovld {
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 99996;
}

.styles-module__connectorLine___XeWh- {
  transition: opacity 0.2s ease;
  animation: styles-module__connectorDraw___8sK5I 0.3s ease both;
}

.styles-module__connectorDot___yvf7C {
  transform-box: fill-box;
  transform-origin: center;
  animation: styles-module__connectorDotIn___NwTUq 0.25s cubic-bezier(0.34, 1.56, 0.64, 1) 0.15s both;
}

@keyframes styles-module__connectorDraw___8sK5I {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes styles-module__connectorDotIn___NwTUq {
  from {
    transform: scale(0);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
.styles-module__connectorExiting___2lLOs {
  animation: styles-module__connectorOut___5QoPl 0.2s ease forwards;
}
.styles-module__connectorExiting___2lLOs .styles-module__connectorDot___yvf7C {
  animation: styles-module__connectorDotOut___FEq7e 0.2s ease forwards;
}

@keyframes styles-module__connectorOut___5QoPl {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes styles-module__connectorDotOut___FEq7e {
  from {
    transform: scale(1);
    opacity: 1;
  }
  to {
    transform: scale(0);
    opacity: 0;
  }
}
@keyframes styles-module__placementEnter___TdRhf {
  from {
    opacity: 0;
    transform: scale(0.85);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__sectionEnter___-8BXT {
  from {
    opacity: 0;
    transform: scale(0.96);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__highlightFadeIn___Lg7KY {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes styles-module__overlayFadeIn___aECVy {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes styles-module__ghostEnter___EC3Mb {
  from {
    opacity: 0;
    transform: scale(0.96);
  }
  to {
    opacity: 0.6;
    transform: scale(1);
  }
}
.styles-module__canvasToggle___-QqSy:focus-visible,
.styles-module__paletteItem___6TlnA:focus-visible {
  outline: 2px solid var(--agentation-color-accent);
  outline-offset: -2px;
}`,N={overlay:"styles-module__overlay___aWh-q",rearrangeOverlay:"styles-module__rearrangeOverlay___-3R3t",overlayExiting:"styles-module__overlayExiting___iEmYr",overlayFadeIn:"styles-module__overlayFadeIn___aECVy",light:"styles-module__light___ORIft",wireframe:"styles-module__wireframe___itvQU",placing:"styles-module__placing___45yD8",passthrough:"styles-module__passthrough___xaFeE",blankCanvas:"styles-module__blankCanvas___t2Eue",visible:"styles-module__visible___OKKqX",gridActive:"styles-module__gridActive___OZ-cf",paletteHeader:"styles-module__paletteHeader___-Q5gQ",paletteHeaderTitle:"styles-module__paletteHeaderTitle___oHqZC",paletteHeaderDesc:"styles-module__paletteHeaderDesc___6i74T",wireframePurposeWrap:"styles-module__wireframePurposeWrap___To-tS",collapsed:"styles-module__collapsed___Ms9vS",wireframePurposeInner:"styles-module__wireframePurposeInner___Lrahs",wireframePurposeInput:"styles-module__wireframePurposeInput___7EtBN",canvasToggle:"styles-module__canvasToggle___-QqSy",active:"styles-module__active___hosp7",canvasToggleIcon:"styles-module__canvasToggleIcon___7pJ82",canvasToggleLabel:"styles-module__canvasToggleLabel___OanpY",placement:"styles-module__placement___zcxv8",placementEnter:"styles-module__placementEnter___TdRhf",selected:"styles-module__selected___6yrp6",dragging:"styles-module__dragging___le6KZ",exiting:"styles-module__exiting___YrM8F",placementContent:"styles-module__placementContent___f64A4",placementLabel:"styles-module__placementLabel___0KvWl",placementAnnotation:"styles-module__placementAnnotation___78pTr",annotationVisible:"styles-module__annotationVisible___mrUyA",sectionAnnotation:"styles-module__sectionAnnotation___aUIs0",handle:"styles-module__handle___Ikbxm",sectionOutline:"styles-module__sectionOutline___s0hy-",ghostOutline:"styles-module__ghostOutline___po-kO",handleNw:"styles-module__handleNw___4TMIj",handleNe:"styles-module__handleNe___mnsTh",handleSe:"styles-module__handleSe___oSFnk",handleSw:"styles-module__handleSw___pi--Z",handleN:"styles-module__handleN___aBA-Q",handleE:"styles-module__handleE___0hM5u",handleS:"styles-module__handleS___JjDRv",handleW:"styles-module__handleW___ERWGQ",edgeHandle:"styles-module__edgeHandle___XxXdT",edgeN:"styles-module__edgeN___-JJDj",edgeS:"styles-module__edgeS___66lMX",edgeE:"styles-module__edgeE___1bGDa",edgeW:"styles-module__edgeW___lHQNo",deleteButton:"styles-module__deleteButton___LkGCb",drawBox:"styles-module__drawBox___BrVAa",selectBox:"styles-module__selectBox___Iu8kB",sizeIndicator:"styles-module__sizeIndicator___7zJ4y",guideLine:"styles-module__guideLine___DUQY2",dragPreview:"styles-module__dragPreview___onPbU",dragPreviewWireframe:"styles-module__dragPreviewWireframe___jsg0G",palette:"styles-module__palette___C7iSH",paletteItem:"styles-module__paletteItem___6TlnA",paletteItemLabel:"styles-module__paletteItemLabel___6ncO4",paletteSectionTitle:"styles-module__paletteSectionTitle___PqnjX",paletteFooter:"styles-module__paletteFooter___QYnAG",paletteSection:"styles-module__paletteSection___V8DEA",paletteItemIcon:"styles-module__paletteItemIcon___0NPQK",placeScroll:"styles-module__placeScroll___7sClM",fadeTop:"styles-module__fadeTop___KT9tF",fadeBottom:"styles-module__fadeBottom___x3ShT",paletteFooterWrap:"styles-module__paletteFooterWrap___71-fI",footerHidden:"styles-module__footerHidden___fJUik",paletteFooterInnerContent:"styles-module__paletteFooterInnerContent___VC26h",paletteFooterInner:"styles-module__paletteFooterInner___dfylY",paletteFooterCount:"styles-module__paletteFooterCount___D3Fia",paletteFooterClear:"styles-module__paletteFooterClear___ybBoa",paletteFooterActions:"styles-module__paletteFooterActions___fLzv8",rollingWrap:"styles-module__rollingWrap___S75jM",rollingNum:"styles-module__rollingNum___1RKDx",exitUp:"styles-module__exitUp___AFDRW",numExitUp:"styles-module__numExitUp___FRQqx",enterUp:"styles-module__enterUp___CPlXb",numEnterUp:"styles-module__numEnterUp___2Yd-w",exitDown:"styles-module__exitDown___-1yAy",numExitDown:"styles-module__numExitDown___xm5by",enterDown:"styles-module__enterDown___DDuFR",numEnterDown:"styles-module__numEnterDown___hpxBk",hoverHighlight:"styles-module__hoverHighlight___8eT-v",highlightFadeIn:"styles-module__highlightFadeIn___Lg7KY",sectionEnter:"styles-module__sectionEnter___-8BXT",settled:"styles-module__settled___b5U5o",sectionLabel:"styles-module__sectionLabel___F80HQ",movedBadge:"styles-module__movedBadge___s8z-q",sectionDimensions:"styles-module__sectionDimensions___RcJSL",badgeVisible:"styles-module__badgeVisible___npbdS",resizedBadge:"styles-module__resizedBadge___u51V8",wireframeNotice:"styles-module__wireframeNotice___4GJyB",wireframeOpacityRow:"styles-module__wireframeOpacityRow___CJXzi",wireframeOpacityLabel:"styles-module__wireframeOpacityLabel___afkfT",wireframeOpacitySlider:"styles-module__wireframeOpacitySlider___YcoEs",wireframeNoticeTitleRow:"styles-module__wireframeNoticeTitleRow___PJqyG",wireframeNoticeTitle:"styles-module__wireframeNoticeTitle___okr08",wireframeNoticeDivider:"styles-module__wireframeNoticeDivider___PNKQ6",wireframeStartOver:"styles-module__wireframeStartOver___YFk-I",ghostEnter:"styles-module__ghostEnter___EC3Mb",ghostBadge:"styles-module__ghostBadge___tsQUK",badgeSlideIn:"styles-module__badgeSlideIn___typJ7",ghostBadgeExtra:"styles-module__ghostBadgeExtra___6CVoD",badgeExtraIn:"styles-module__badgeExtraIn___i4W8F",originalOutline:"styles-module__originalOutline___Y6DD1",originalLabel:"styles-module__originalLabel___HqI9g",connectorSvg:"styles-module__connectorSvg___Lovld",connectorLine:"styles-module__connectorLine___XeWh-",connectorDraw:"styles-module__connectorDraw___8sK5I",connectorDot:"styles-module__connectorDot___yvf7C",connectorDotIn:"styles-module__connectorDotIn___NwTUq",connectorExiting:"styles-module__connectorExiting___2lLOs",connectorOut:"styles-module__connectorOut___5QoPl",connectorDotOut:"styles-module__connectorDotOut___FEq7e"},Kn=24,Jo=5;function Di(e,n,o,r,i){let s=1/0,l=1/0;const d=e.x,c=e.x+e.width,b=e.x+e.width/2,f=e.y,m=e.y+e.height,g=e.y+e.height/2,v=!r,x=v?[d,c,b]:[...r.left?[d]:[],...r.right?[c]:[]],$=v?[f,m,g]:[...r.top?[f]:[],...r.bottom?[m]:[]],T=[];for(const se of n)o.has(se.id)||T.push(se);i&&T.push(...i);for(const se of T){const F=se.x,we=se.x+se.width,V=se.x+se.width/2,oe=se.y,ce=se.y+se.height,at=se.y+se.height/2;for(const Ce of x)for(const tt of[F,we,V]){const Ie=tt-Ce;Math.abs(Ie)<Jo&&Math.abs(Ie)<Math.abs(s)&&(s=Ie)}for(const Ce of $)for(const tt of[oe,ce,at]){const Ie=tt-Ce;Math.abs(Ie)<Jo&&Math.abs(Ie)<Math.abs(l)&&(l=Ie)}}const O=Math.abs(s)<Jo?s:0,Se=Math.abs(l)<Jo?l:0,z=[],p=new Set,J=d+O,ie=c+O,X=b+O,xe=f+Se,W=m+Se,_e=g+Se;for(const se of T){const F=se.x,we=se.x+se.width,V=se.x+se.width/2,oe=se.y,ce=se.y+se.height,at=se.y+se.height/2;for(const Ce of[F,V,we])for(const tt of[J,X,ie])if(Math.abs(tt-Ce)<.5){const Ie=`x:${Math.round(Ce)}`;p.has(Ie)||(p.add(Ie),z.push({axis:"x",pos:Ce}))}for(const Ce of[oe,at,ce])for(const tt of[xe,_e,W])if(Math.abs(tt-Ce)<.5){const Ie=`y:${Math.round(Ce)}`;p.has(Ie)||(p.add(Ie),z.push({axis:"y",pos:Ce}))}}return{dx:O,dy:Se,guides:z}}function Pi(){return`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`}function Ld({placements:e,onChange:n,activeComponent:o,onActiveComponentChange:r,isDarkMode:i,exiting:s,onInteractionChange:l,className:d,passthrough:c,extraSnapRects:b,onSelectionChange:f,deselectSignal:m,onDragMove:g,onDragEnd:v,clearingPlacements:x,wireframe:$}){const[T,O]=A(new Set),[Se,z]=A(null),[p,J]=A(null),[ie,X]=A(null),[xe,W]=A([]),[_e,se]=A(null),[F,we]=A(!1),V=R(!1),[oe,ce]=A(new Set),at=R(new Map),Ce=R(null),tt=R(null),Ie=R(e);Ie.current=e;const Je=R(f);Je.current=f;const ut=R(g);ut.current=g;const Tt=R(v);Tt.current=v;const ve=R(m);K(()=>{m!==ve.current&&(ve.current=m,O(new Set))},[m]),K(()=>{x!=null&&x.length&&(O(j=>new Set([...j].filter(ae=>!x.some(fe=>fe.id===ae)))),tt.current=null)},[x]),K(()=>{const j=ae=>{const fe=ae.composedPath()[0]||ae.target;if(!(fe.tagName==="INPUT"||fe.tagName==="TEXTAREA"||fe.isContentEditable)){if((ae.key==="Backspace"||ae.key==="Delete")&&T.size>0){ae.preventDefault();const Le=new Set(T);ce(Le),O(new Set),Ve(()=>{n(Ie.current.filter(De=>!Le.has(De.id))),ce(new Set)},180);return}if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(ae.key)&&T.size>0){ae.preventDefault();const Le=ae.shiftKey?20:1,De=ae.key==="ArrowLeft"?-Le:ae.key==="ArrowRight"?Le:0,Pe=ae.key==="ArrowUp"?-Le:ae.key==="ArrowDown"?Le:0;n(e.map(me=>T.has(me.id)?{...me,x:Math.max(0,me.x+De),y:Math.max(0,me.y+Pe)}:me));return}if(ae.key==="Escape"){o?r(null):T.size>0&&O(new Set);return}}};return document.addEventListener("keydown",j),()=>document.removeEventListener("keydown",j)},[T,o,e,n,r]);const Dt=ue(j=>{if(j.button!==0||c||j.target.closest(`.${N.placement}`))return;j.preventDefault(),j.stopPropagation();const fe=window.scrollY,Me=j.clientX,Le=j.clientY;if(o){tt.current="place",l==null||l(!0);let De=!1,Pe=Me,me=Le;const Ue=D=>{Pe=D.clientX,me=D.clientY;const w=Math.abs(Pe-Me),M=Math.abs(me-Le);if((w>5||M>5)&&(De=!0),De){const E=Math.min(Me,Pe),P=Math.min(Le,me),re=Math.abs(Pe-Me),G=Math.abs(me-Le);z({x:E,y:P,w:re,h:G}),X({x:D.clientX+12,y:D.clientY+12,text:`${Math.round(re)} × ${Math.round(G)}`})}},_t=D=>{window.removeEventListener("mousemove",Ue),window.removeEventListener("mouseup",_t),z(null),X(null),tt.current=null,l==null||l(!1);const w=ee[o];let M,E,P,re;De?(M=Math.min(Me,Pe),E=Math.min(Le,me)+fe,P=Math.max(Kn,Math.abs(Pe-Me)),re=Math.max(Kn,Math.abs(me-Le))):(P=w.width,re=w.height,M=Me-P/2,E=Le+fe-re/2),M=Math.max(0,M),E=Math.max(0,E);const G={id:Pi(),type:o,x:M,y:E,width:P,height:re,scrollY:fe,timestamp:Date.now()},Y=[...e,G];n(Y),O(new Set([G.id])),r(null)};window.addEventListener("mousemove",Ue),window.addEventListener("mouseup",_t)}else{j.shiftKey||O(new Set),tt.current="select";let De=!1;const Pe=Ue=>{const _t=Math.abs(Ue.clientX-Me),D=Math.abs(Ue.clientY-Le);if((_t>4||D>4)&&(De=!0),De){const w=Math.min(Me,Ue.clientX),M=Math.min(Le,Ue.clientY);J({x:w,y:M,w:Math.abs(Ue.clientX-Me),h:Math.abs(Ue.clientY-Le)})}},me=Ue=>{if(window.removeEventListener("mousemove",Pe),window.removeEventListener("mouseup",me),tt.current=null,De){const _t=Math.min(Me,Ue.clientX),D=Math.min(Le,Ue.clientY)+fe,w=Math.abs(Ue.clientX-Me),M=Math.abs(Ue.clientY-Le),E=new Set(j.shiftKey?T:new Set);for(const P of e)P.y-fe,P.x+P.width>_t&&P.x<_t+w&&P.y+P.height>D&&P.y<D+M&&E.add(P.id);O(E)}J(null)};window.addEventListener("mousemove",Pe),window.addEventListener("mouseup",me)}},[o,c,e,n,T]),cn=ue((j,ae)=>{var G;if(j.button!==0)return;const fe=j.target;if(fe.closest(`.${N.handle}`)||fe.closest(`.${N.deleteButton}`))return;j.preventDefault(),j.stopPropagation();let Me;j.shiftKey?(Me=new Set(T),Me.has(ae)?Me.delete(ae):Me.add(ae)):T.has(ae)?Me=new Set(T):Me=new Set([ae]),O(Me),(Me.size!==T.size||[...Me].some(Y=>!T.has(Y)))&&((G=Je.current)==null||G.call(Je,Me,j.shiftKey));const De=j.clientX,Pe=j.clientY,me=new Map;for(const Y of e)Me.has(Y.id)&&me.set(Y.id,{x:Y.x,y:Y.y});tt.current="move",l==null||l(!0);let Ue=!1,_t=!1,D=e,w=0,M=0;const E=new Map;for(const Y of e)me.has(Y.id)&&E.set(Y.id,{w:Y.width,h:Y.height});const P=Y=>{var bt;const Ee=Y.clientX-De,ke=Y.clientY-Pe;if((Math.abs(Ee)>2||Math.abs(ke)>2)&&(Ue=!0),!Ue)return;if(Y.altKey&&!_t){_t=!0;const Qe=[];for(const ze of e)me.has(ze.id)&&Qe.push({...ze,id:Pi(),timestamp:Date.now()});D=[...e,...Qe]}let Ne=1/0,he=1/0,Ae=-1/0,We=-1/0;for(const[Qe,ze]of me){const Z=E.get(Qe);Z&&(Ne=Math.min(Ne,ze.x+Ee),he=Math.min(he,ze.y+ke),Ae=Math.max(Ae,ze.x+Ee+Z.w),We=Math.max(We,ze.y+ke+Z.h))}const Ze={x:Ne,y:he,width:Ae-Ne,height:We-he},{dx:mt,dy:He,guides:Xe}=Di(Ze,D,new Set(me.keys()),void 0,b);W(Xe);const Ye=Ee+mt,Te=ke+He;w=Ye,M=Te,n(D.map(Qe=>{const ze=me.get(Qe.id);return ze?{...Qe,x:Math.max(0,ze.x+Ye),y:Math.max(0,ze.y+Te)}:Qe})),(bt=ut.current)==null||bt.call(ut,Ye,Te)},re=()=>{var Y;window.removeEventListener("mousemove",P),window.removeEventListener("mouseup",re),tt.current=null,l==null||l(!1),W([]),(Y=Tt.current)==null||Y.call(Tt,w,M,Ue)};window.addEventListener("mousemove",P),window.addEventListener("mouseup",re)},[T,e,n,l]),mn=ue((j,ae,fe)=>{j.preventDefault(),j.stopPropagation();const Me=e.find(E=>E.id===ae);if(!Me)return;O(new Set([ae])),tt.current="resize",l==null||l(!0);const Le=j.clientX,De=j.clientY,Pe=Me.width,me=Me.height,Ue=Me.x,_t=Me.y,D={left:fe.includes("w"),right:fe.includes("e"),top:fe.includes("n"),bottom:fe.includes("s")},w=E=>{const P=E.clientX-Le,re=E.clientY-De;let G=Pe,Y=me,Ee=Ue,ke=_t;fe.includes("e")&&(G=Math.max(Kn,Pe+P)),fe.includes("w")&&(G=Math.max(Kn,Pe-P),Ee=Ue+Pe-G),fe.includes("s")&&(Y=Math.max(Kn,me+re)),fe.includes("n")&&(Y=Math.max(Kn,me-re),ke=_t+me-Y);const Ne={x:Ee,y:ke,width:G,height:Y},{dx:he,dy:Ae,guides:We}=Di(Ne,Ie.current,new Set([ae]),D,b);W(We),he!==0&&(D.right?G+=he:D.left&&(Ee+=he,G-=he)),Ae!==0&&(D.bottom?Y+=Ae:D.top&&(ke+=Ae,Y-=Ae)),n(Ie.current.map(Ze=>Ze.id===ae?{...Ze,x:Ee,y:ke,width:G,height:Y}:Ze)),X({x:E.clientX+12,y:E.clientY+12,text:`${Math.round(G)} × ${Math.round(Y)}`})},M=()=>{window.removeEventListener("mousemove",w),window.removeEventListener("mouseup",M),X(null),tt.current=null,l==null||l(!1),W([])};window.addEventListener("mousemove",w),window.addEventListener("mouseup",M)},[e,n,l]),pn=ue(j=>{tt.current=null,ce(ae=>{const fe=new Set(ae);return fe.add(j),fe}),O(ae=>{const fe=new Set(ae);return fe.delete(j),fe}),Ve(()=>{n(Ie.current.filter(ae=>ae.id!==j)),ce(ae=>{const fe=new Set(ae);return fe.delete(j),fe})},180)},[n]),ht={hero:"Headline text",button:"Button label",badge:"Badge label",cta:"Call to action text",toast:"Notification message",modal:"Dialog title",card:"Card title",navigation:"Brand / nav items",tabs:"Tab labels",input:"Placeholder text",search:"Search placeholder",pricing:"Plan name or price",testimonial:"Quote text",alert:"Alert message",banner:"Banner text",tag:"Tag label",notification:"Notification message",stat:"Metric value",productCard:"Product name"},Ot=ue(j=>{const ae=e.find(fe=>fe.id===j);ae&&(V.current=!!ae.text,se(j),we(!1))},[e]),vt=ue(()=>{_e&&(we(!0),Ve(()=>{se(null),we(!1)},150))},[_e]);K(()=>{s&&_e&&vt()},[s]);const yt=ue(j=>{_e&&(n(e.map(ae=>ae.id===_e?{...ae,text:j.trim()||void 0}:ae)),vt())},[_e,e,n,vt]),Ht=typeof window<"u"?window.scrollY:0,gn=["nw","ne","se","sw"],en=$?"#f97316":"#3c82f7",dn=[{dir:"n",cls:N.edgeN,arrow:t("svg",{width:"8",height:"6",viewBox:"0 0 8 6",fill:"none",children:t("path",{d:"M4 0.5L1 4.5h6z",fill:en})})},{dir:"e",cls:N.edgeE,arrow:t("svg",{width:"6",height:"8",viewBox:"0 0 6 8",fill:"none",children:t("path",{d:"M5.5 4L1.5 1v6z",fill:en})})},{dir:"s",cls:N.edgeS,arrow:t("svg",{width:"8",height:"6",viewBox:"0 0 8 6",fill:"none",children:t("path",{d:"M4 5.5L1 1.5h6z",fill:en})})},{dir:"w",cls:N.edgeW,arrow:t("svg",{width:"6",height:"8",viewBox:"0 0 6 8",fill:"none",children:t("path",{d:"M0.5 4L4.5 1v6z",fill:en})})}];return t(Ft,{children:[t("div",{ref:Ce,className:`${N.overlay} ${i?"":N.light} ${o?N.placing:""} ${c?N.passthrough:""} ${s?N.overlayExiting:""} ${$?N.wireframe:""}${d?` ${d}`:""}`,"data-feedback-toolbar":!0,onMouseDown:Dt,children:e.map(j=>{var Le;const ae=T.has(j.id),fe=((Le=Zt[j.type])==null?void 0:Le.label)||j.type,Me=j.y-Ht;return t("div",{"data-design-placement":j.id,className:`${N.placement} ${ae?N.selected:""} ${oe.has(j.id)||x!=null&&x.includes(j)?N.exiting:""}`,style:{left:j.x,top:Me,width:j.width,height:j.height,position:"fixed"},onMouseDown:De=>cn(De,j.id),onDoubleClick:()=>Ot(j.id),children:[t("span",{className:N.placementLabel,children:fe}),t("span",{className:`${N.placementAnnotation} ${j.text?N.annotationVisible:""}`,children:(j.text&&at.current.set(j.id,j.text),j.text||at.current.get(j.id)||"")}),t("div",{className:N.placementContent,children:t(Ed,{type:j.type,width:j.width,height:j.height,text:j.text})}),t("div",{className:N.deleteButton,onMouseDown:De=>De.stopPropagation(),onClick:()=>pn(j.id),children:"✕"}),gn.map(De=>t("div",{className:`${N.handle} ${N[`handle${De.charAt(0).toUpperCase()}${De.slice(1)}`]}`,onMouseDown:Pe=>mn(Pe,j.id,De)},De)),dn.map(({dir:De,cls:Pe,arrow:me})=>t("div",{className:`${N.edgeHandle} ${Pe}`,onMouseDown:Ue=>mn(Ue,j.id,De),children:me},De))]},j.id)})}),_e&&(()=>{var _t;const j=e.find(D=>D.id===_e);if(!j)return null;const ae=j.y-Ht,fe=j.x+j.width/2,Me=ae-8,Le=ae+j.height+8,De=Me>200,Pe=Le<window.innerHeight-100,me=Math.max(160,Math.min(window.innerWidth-160,fe));let Ue;return De?Ue={left:me,bottom:window.innerHeight-Me}:Pe?Ue={left:me,top:Le}:Ue={left:me,top:Math.max(80,window.innerHeight/2-80)},t(xs,{element:((_t=Zt[j.type])==null?void 0:_t.label)||j.type,placeholder:ht[j.type]||"Label or content text",initialValue:j.text??"",submitLabel:V.current?"Save":"Set",onSubmit:yt,onCancel:vt,onDelete:V.current?()=>{yt("")}:void 0,isExiting:F,lightMode:!i,style:Ue})})(),Se&&t("div",{className:N.drawBox,style:{left:Se.x,top:Se.y,width:Se.w,height:Se.h},"data-feedback-toolbar":!0}),p&&t("div",{className:N.selectBox,style:{left:p.x,top:p.y,width:p.w,height:p.h},"data-feedback-toolbar":!0}),ie&&t("div",{className:N.sizeIndicator,style:{left:ie.x,top:ie.y},"data-feedback-toolbar":!0,children:ie.text}),xe.map((j,ae)=>t("div",{className:N.guideLine,style:j.axis==="x"?{position:"fixed",left:j.pos,top:0,width:1,bottom:0}:{position:"fixed",left:0,top:j.pos-Ht,right:0,height:1},"data-feedback-toolbar":!0},`${j.axis}-${j.pos}-${ae}`))]})}function Cl(e,{keepMounted:n=!1,onExited:o}={}){const[r,i]=A(n||e),s=R(null),l=R(o);return e&&!r&&i(!0),ct(()=>{l.current=o},[o]),ct(()=>{var f;const d=s.current;if(!d||d.dataset.panelOpen==="true"===e)return;getComputedStyle(d).opacity,d.dataset.panelPresent="true",d.dataset.panelOpen=String(e);let c=!1;const b=((f=d.getAnimations)==null?void 0:f.call(d))??[];return Promise.allSettled(b.map(m=>m.finished)).then(()=>{var m;c||e||(delete d.dataset.panelPresent,n||i(!1),(m=l.current)==null||m.call(l))}),()=>{c=!0}},[e,r,n]),{ref:s,mounted:r}}function Td(e){if(!e)return"";const n=e.scrollTop>2,o=e.scrollTop+e.clientHeight<e.scrollHeight-2;return`${n?N.fadeTop:""} ${o?N.fadeBottom:""}`}var _="currentColor",I="0.5";function Bd({type:e}){switch(e){case"navigation":return t("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[t("rect",{x:"1",y:"4",width:"18",height:"8",rx:"1",stroke:_,strokeWidth:I}),t("rect",{x:"2.5",y:"7",width:"3",height:"1.5",rx:".5",fill:_,opacity:".4"}),t("rect",{x:"7",y:"7",width:"2.5",height:"1.5",rx:".5",fill:_,opacity:".25"}),t("rect",{x:"11",y:"7",width:"2.5",height:"1.5",rx:".5",fill:_,opacity:".25"})]});case"header":return t("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[t("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:_,strokeWidth:I}),t("rect",{x:"3",y:"5.5",width:"8",height:"2",rx:".5",fill:_,opacity:".35"}),t("rect",{x:"3",y:"9",width:"12",height:"1",rx:".5",fill:_,opacity:".15"})]});case"hero":return t("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[t("rect",{x:"1",y:"1",width:"18",height:"14",rx:"1",stroke:_,strokeWidth:I}),t("rect",{x:"5",y:"5",width:"10",height:"1.5",rx:".5",fill:_,opacity:".35"}),t("rect",{x:"7",y:"8",width:"6",height:"1",rx:".5",fill:_,opacity:".15"}),t("rect",{x:"7.5",y:"10.5",width:"5",height:"2.5",rx:"1",stroke:_,strokeWidth:I})]});case"section":return t("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[t("rect",{x:"1",y:"1",width:"18",height:"14",rx:"1",stroke:_,strokeWidth:I}),t("rect",{x:"3",y:"4",width:"6",height:"1",rx:".5",fill:_,opacity:".3"}),t("rect",{x:"3",y:"6.5",width:"14",height:"1",rx:".5",fill:_,opacity:".15"}),t("rect",{x:"3",y:"9",width:"10",height:"1",rx:".5",fill:_,opacity:".15"})]});case"sidebar":return t("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[t("rect",{x:"1",y:"1",width:"7",height:"14",rx:"1",stroke:_,strokeWidth:I}),t("rect",{x:"2.5",y:"4",width:"4",height:"1",rx:".5",fill:_,opacity:".3"}),t("rect",{x:"2.5",y:"6.5",width:"3.5",height:"1",rx:".5",fill:_,opacity:".15"}),t("rect",{x:"2.5",y:"9",width:"4",height:"1",rx:".5",fill:_,opacity:".15"})]});case"footer":return t("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[t("rect",{x:"1",y:"7",width:"18",height:"8",rx:"1",stroke:_,strokeWidth:I}),t("rect",{x:"3",y:"9.5",width:"4",height:"1",rx:".5",fill:_,opacity:".25"}),t("rect",{x:"9",y:"9.5",width:"4",height:"1",rx:".5",fill:_,opacity:".25"}),t("rect",{x:"15",y:"9.5",width:"3",height:"1",rx:".5",fill:_,opacity:".2"})]});case"modal":return t("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[t("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:_,strokeWidth:I}),t("rect",{x:"5",y:"4.5",width:"7",height:"1",rx:".5",fill:_,opacity:".3"}),t("rect",{x:"5",y:"7",width:"10",height:"1",rx:".5",fill:_,opacity:".15"}),t("rect",{x:"11",y:"11",width:"5",height:"2",rx:".75",stroke:_,strokeWidth:I})]});case"divider":return t("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:t("line",{x1:"2",y1:"8",x2:"18",y2:"8",stroke:_,strokeWidth:"0.5",opacity:".3"})});case"card":return t("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[t("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:_,strokeWidth:I}),t("rect",{x:"2",y:"1",width:"16",height:"5.5",rx:"1",fill:_,opacity:".04"}),t("rect",{x:"4",y:"8.5",width:"8",height:"1",rx:".5",fill:_,opacity:".25"}),t("rect",{x:"4",y:"11",width:"11",height:"1",rx:".5",fill:_,opacity:".12"})]});case"text":return t("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[t("rect",{x:"2",y:"4",width:"14",height:"1.5",rx:".5",fill:_,opacity:".3"}),t("rect",{x:"2",y:"7",width:"11",height:"1",rx:".5",fill:_,opacity:".15"}),t("rect",{x:"2",y:"9.5",width:"13",height:"1",rx:".5",fill:_,opacity:".15"}),t("rect",{x:"2",y:"12",width:"8",height:"1",rx:".5",fill:_,opacity:".12"})]});case"image":return t("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[t("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:_,strokeWidth:I}),t("line",{x1:"2",y1:"2",x2:"18",y2:"14",stroke:_,strokeWidth:".3",opacity:".25"}),t("line",{x1:"18",y1:"2",x2:"2",y2:"14",stroke:_,strokeWidth:".3",opacity:".25"})]});case"video":return t("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[t("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:_,strokeWidth:I}),t("path",{d:"M8.5 5.5v5l4.5-2.5z",stroke:_,strokeWidth:I,fill:_,opacity:".15"})]});case"table":return t("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[t("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:_,strokeWidth:I}),t("line",{x1:"1",y1:"5.5",x2:"19",y2:"5.5",stroke:_,strokeWidth:".3",opacity:".25"}),t("line",{x1:"1",y1:"9",x2:"19",y2:"9",stroke:_,strokeWidth:".3",opacity:".25"}),t("line",{x1:"7",y1:"2",x2:"7",y2:"14",stroke:_,strokeWidth:".3",opacity:".25"}),t("line",{x1:"13",y1:"2",x2:"13",y2:"14",stroke:_,strokeWidth:".3",opacity:".25"})]});case"grid":return t("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[t("rect",{x:"1.5",y:"2",width:"7",height:"5.5",rx:"1",stroke:_,strokeWidth:I}),t("rect",{x:"11.5",y:"2",width:"7",height:"5.5",rx:"1",stroke:_,strokeWidth:I}),t("rect",{x:"1.5",y:"9.5",width:"7",height:"5.5",rx:"1",stroke:_,strokeWidth:I}),t("rect",{x:"11.5",y:"9.5",width:"7",height:"5.5",rx:"1",stroke:_,strokeWidth:I})]});case"list":return t("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[t("circle",{cx:"3.5",cy:"4.5",r:"1",stroke:_,strokeWidth:I}),t("rect",{x:"6.5",y:"4",width:"10",height:"1",rx:".5",fill:_,opacity:".2"}),t("circle",{cx:"3.5",cy:"8",r:"1",stroke:_,strokeWidth:I}),t("rect",{x:"6.5",y:"7.5",width:"8",height:"1",rx:".5",fill:_,opacity:".2"}),t("circle",{cx:"3.5",cy:"11.5",r:"1",stroke:_,strokeWidth:I}),t("rect",{x:"6.5",y:"11",width:"11",height:"1",rx:".5",fill:_,opacity:".2"})]});case"chart":return t("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[t("rect",{x:"3",y:"9",width:"2.5",height:"4",rx:".5",fill:_,opacity:".2"}),t("rect",{x:"7",y:"6",width:"2.5",height:"7",rx:".5",fill:_,opacity:".25"}),t("rect",{x:"11",y:"3",width:"2.5",height:"10",rx:".5",fill:_,opacity:".3"}),t("rect",{x:"15",y:"5",width:"2.5",height:"8",rx:".5",fill:_,opacity:".2"})]});case"accordion":return t("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[t("rect",{x:"1.5",y:"2",width:"17",height:"4",rx:"1",stroke:_,strokeWidth:I}),t("rect",{x:"3",y:"3.5",width:"6",height:"1",rx:".5",fill:_,opacity:".25"}),t("rect",{x:"1.5",y:"7.5",width:"17",height:"3",rx:"1",stroke:_,strokeWidth:I}),t("rect",{x:"1.5",y:"12",width:"17",height:"3",rx:"1",stroke:_,strokeWidth:I})]});case"carousel":return t("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[t("rect",{x:"3",y:"2",width:"14",height:"10",rx:"1",stroke:_,strokeWidth:I}),t("path",{d:"M1.5 7L3 8.5 1.5 10",stroke:_,strokeWidth:I,opacity:".35"}),t("path",{d:"M18.5 7L17 8.5 18.5 10",stroke:_,strokeWidth:I,opacity:".35"}),t("circle",{cx:"8.5",cy:"14",r:".6",fill:_,opacity:".35"}),t("circle",{cx:"10",cy:"14",r:".6",fill:_,opacity:".15"}),t("circle",{cx:"11.5",cy:"14",r:".6",fill:_,opacity:".15"})]});case"button":return t("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[t("rect",{x:"3",y:"5",width:"14",height:"6",rx:"2",stroke:_,strokeWidth:I}),t("rect",{x:"6.5",y:"7.5",width:"7",height:"1",rx:".5",fill:_,opacity:".25"})]});case"input":return t("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[t("rect",{x:"2",y:"4",width:"5.5",height:"1",rx:".5",fill:_,opacity:".25"}),t("rect",{x:"2",y:"6.5",width:"16",height:"5.5",rx:"1",stroke:_,strokeWidth:I}),t("rect",{x:"3.5",y:"8.5",width:"7",height:"1",rx:".5",fill:_,opacity:".12"})]});case"search":return t("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[t("rect",{x:"2",y:"4.5",width:"16",height:"7",rx:"3.5",stroke:_,strokeWidth:I}),t("circle",{cx:"6",cy:"8",r:"2",stroke:_,strokeWidth:I,opacity:".3"}),t("line",{x1:"7.5",y1:"9.5",x2:"9",y2:"11",stroke:_,strokeWidth:I,opacity:".3"}),t("rect",{x:"9.5",y:"7.5",width:"6",height:"1",rx:".5",fill:_,opacity:".12"})]});case"form":return t("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[t("rect",{x:"2",y:"1.5",width:"5.5",height:"1",rx:".5",fill:_,opacity:".25"}),t("rect",{x:"2",y:"3.5",width:"16",height:"3",rx:".75",stroke:_,strokeWidth:I}),t("rect",{x:"2",y:"8",width:"7",height:"1",rx:".5",fill:_,opacity:".25"}),t("rect",{x:"2",y:"10",width:"16",height:"3",rx:".75",stroke:_,strokeWidth:I}),t("rect",{x:"12",y:"14",width:"6",height:"2",rx:".75",stroke:_,strokeWidth:I})]});case"tabs":return t("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[t("rect",{x:"1",y:"5",width:"18",height:"10",rx:"1",stroke:_,strokeWidth:I}),t("rect",{x:"1",y:"2",width:"6",height:"3.5",rx:".75",stroke:_,strokeWidth:I}),t("rect",{x:"2.5",y:"3.25",width:"3",height:"1",rx:".5",fill:_,opacity:".25"}),t("rect",{x:"7",y:"2",width:"6",height:"3.5",rx:".75",stroke:_,strokeWidth:I})]});case"dropdown":return t("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[t("rect",{x:"2",y:"2",width:"16",height:"4",rx:"1",stroke:_,strokeWidth:I}),t("rect",{x:"3.5",y:"3.5",width:"7",height:"1",rx:".5",fill:_,opacity:".2"}),t("path",{d:"M15 3.5l1.5 1.5L18 3.5",stroke:_,strokeWidth:I,opacity:".3"}),t("rect",{x:"2",y:"7",width:"16",height:"7",rx:"1",stroke:_,strokeWidth:I,strokeDasharray:"2 1",opacity:".3"})]});case"toggle":return t("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[t("rect",{x:"4",y:"5",width:"12",height:"6",rx:"3",stroke:_,strokeWidth:I}),t("circle",{cx:"13",cy:"8",r:"2",fill:_,opacity:".3"})]});case"avatar":return t("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[t("circle",{cx:"10",cy:"8",r:"6",stroke:_,strokeWidth:I}),t("circle",{cx:"10",cy:"6.5",r:"2",stroke:_,strokeWidth:I}),t("path",{d:"M6.5 13c0-2 1.5-3.5 3.5-3.5s3.5 1.5 3.5 3.5",stroke:_,strokeWidth:I})]});case"badge":return t("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[t("rect",{x:"3",y:"5",width:"14",height:"6",rx:"3",stroke:_,strokeWidth:I}),t("rect",{x:"6",y:"7.5",width:"8",height:"1",rx:".5",fill:_,opacity:".25"})]});case"breadcrumb":return t("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[t("rect",{x:"1.5",y:"7",width:"3.5",height:"1",rx:".5",fill:_,opacity:".3"}),t("path",{d:"M6.5 7l1 1-1 1",stroke:_,strokeWidth:I,opacity:".2"}),t("rect",{x:"9",y:"7",width:"3.5",height:"1",rx:".5",fill:_,opacity:".2"}),t("path",{d:"M14 7l1 1-1 1",stroke:_,strokeWidth:I,opacity:".2"}),t("rect",{x:"16.5",y:"7",width:"2",height:"1",rx:".5",fill:_,opacity:".15"})]});case"pagination":return t("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[t("rect",{x:"2",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:_,strokeWidth:I}),t("rect",{x:"6.5",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:_,strokeWidth:I}),t("rect",{x:"11",y:"5.5",width:"3.5",height:"5",rx:"1",fill:_,opacity:".15",stroke:_,strokeWidth:I}),t("rect",{x:"15.5",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:_,strokeWidth:I})]});case"progress":return t("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[t("rect",{x:"2",y:"7",width:"16",height:"2",rx:"1",stroke:_,strokeWidth:I}),t("rect",{x:"2",y:"7",width:"10",height:"2",rx:"1",fill:_,opacity:".2"})]});case"toast":return t("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[t("rect",{x:"2",y:"4",width:"16",height:"8",rx:"1.5",stroke:_,strokeWidth:I}),t("circle",{cx:"5",cy:"8",r:"1.5",stroke:_,strokeWidth:I,opacity:".3"}),t("rect",{x:"8",y:"6.5",width:"7",height:"1",rx:".5",fill:_,opacity:".25"}),t("rect",{x:"8",y:"9",width:"5",height:"1",rx:".5",fill:_,opacity:".12"})]});case"tooltip":return t("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[t("rect",{x:"3",y:"3",width:"14",height:"7",rx:"1.5",stroke:_,strokeWidth:I}),t("rect",{x:"5.5",y:"5.5",width:"9",height:"1",rx:".5",fill:_,opacity:".25"}),t("path",{d:"M9 10l1 2.5 1-2.5",stroke:_,strokeWidth:I})]});case"pricing":return t("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[t("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:_,strokeWidth:I}),t("rect",{x:"6",y:"3",width:"8",height:"1.5",rx:".5",fill:_,opacity:".25"}),t("rect",{x:"7",y:"5.5",width:"6",height:"2",rx:".5",fill:_,opacity:".15"}),t("rect",{x:"5",y:"9",width:"10",height:"1",rx:".5",fill:_,opacity:".1"}),t("rect",{x:"5",y:"11",width:"10",height:"1",rx:".5",fill:_,opacity:".1"}),t("rect",{x:"6",y:"13",width:"8",height:"1.5",rx:".5",fill:_,opacity:".2"})]});case"testimonial":return t("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[t("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:_,strokeWidth:I}),t("text",{x:"4",y:"5.5",fontSize:"4",fill:_,opacity:".2",fontFamily:"serif",children:"“"}),t("rect",{x:"4",y:"7",width:"12",height:"1",rx:".5",fill:_,opacity:".15"}),t("rect",{x:"4",y:"9",width:"9",height:"1",rx:".5",fill:_,opacity:".12"}),t("circle",{cx:"5.5",cy:"12.5",r:"1.5",stroke:_,strokeWidth:I,opacity:".25"}),t("rect",{x:"8",y:"12",width:"5",height:"1",rx:".5",fill:_,opacity:".15"})]});case"cta":return t("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[t("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:_,strokeWidth:I}),t("rect",{x:"5",y:"4.5",width:"10",height:"1.5",rx:".5",fill:_,opacity:".3"}),t("rect",{x:"6",y:"7.5",width:"8",height:"1",rx:".5",fill:_,opacity:".15"}),t("rect",{x:"7",y:"10",width:"6",height:"2.5",rx:"1",stroke:_,strokeWidth:I})]});case"alert":return t("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[t("rect",{x:"2",y:"4",width:"16",height:"8",rx:"1.5",stroke:_,strokeWidth:I}),t("circle",{cx:"6",cy:"8",r:"2",stroke:_,strokeWidth:I,opacity:".3"}),t("line",{x1:"6",y1:"7",x2:"6",y2:"8.5",stroke:_,strokeWidth:"0.6",opacity:".5"}),t("circle",{cx:"6",cy:"9.3",r:".3",fill:_,opacity:".5"}),t("rect",{x:"9.5",y:"7",width:"6",height:"1",rx:".5",fill:_,opacity:".2"})]});case"banner":return t("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[t("rect",{x:"1",y:"5",width:"18",height:"6",rx:"1",stroke:_,strokeWidth:I}),t("rect",{x:"4",y:"7.5",width:"8",height:"1",rx:".5",fill:_,opacity:".25"}),t("rect",{x:"14",y:"7",width:"3.5",height:"2",rx:".75",stroke:_,strokeWidth:I})]});case"stat":return t("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[t("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:_,strokeWidth:I}),t("rect",{x:"6",y:"4.5",width:"8",height:"1",rx:".5",fill:_,opacity:".15"}),t("rect",{x:"5",y:"7",width:"10",height:"2.5",rx:".5",fill:_,opacity:".3"}),t("rect",{x:"7",y:"11",width:"6",height:"1",rx:".5",fill:_,opacity:".12"})]});case"stepper":return t("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[t("circle",{cx:"4",cy:"8",r:"2",fill:_,opacity:".2",stroke:_,strokeWidth:I}),t("line",{x1:"6",y1:"8",x2:"8",y2:"8",stroke:_,strokeWidth:".4",opacity:".3"}),t("circle",{cx:"10",cy:"8",r:"2",stroke:_,strokeWidth:I}),t("line",{x1:"12",y1:"8",x2:"14",y2:"8",stroke:_,strokeWidth:".4",opacity:".3"}),t("circle",{cx:"16",cy:"8",r:"2",stroke:_,strokeWidth:I})]});case"tag":return t("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[t("rect",{x:"3",y:"5",width:"14",height:"6",rx:"1.5",stroke:_,strokeWidth:I}),t("rect",{x:"5.5",y:"7.5",width:"6",height:"1",rx:".5",fill:_,opacity:".25"}),t("line",{x1:"14",y1:"6.5",x2:"15.5",y2:"9.5",stroke:_,strokeWidth:I,opacity:".2"}),t("line",{x1:"15.5",y1:"6.5",x2:"14",y2:"9.5",stroke:_,strokeWidth:I,opacity:".2"})]});case"rating":return t("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[t("path",{d:"M4 5.5l1 2 2.2.3-1.6 1.5.4 2.2L4 10.3l-2 1.2.4-2.2L.8 7.8 3 7.5z",fill:_,opacity:".25"}),t("path",{d:"M10 5.5l1 2 2.2.3-1.6 1.5.4 2.2L10 10.3l-2 1.2.4-2.2L6.8 7.8 9 7.5z",fill:_,opacity:".25"}),t("path",{d:"M16 5.5l1 2 2.2.3-1.6 1.5.4 2.2L16 10.3l-2 1.2.4-2.2-1.6-1.5 2.2-.3z",stroke:_,strokeWidth:I,opacity:".25"})]});case"map":return t("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[t("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:_,strokeWidth:I}),t("line",{x1:"2",y1:"6",x2:"18",y2:"10",stroke:_,strokeWidth:".3",opacity:".15"}),t("line",{x1:"7",y1:"2",x2:"11",y2:"14",stroke:_,strokeWidth:".3",opacity:".15"}),t("path",{d:"M10 5c-1.7 0-3 1.3-3 3 0 2.5 3 5 3 5s3-2.5 3-5c0-1.7-1.3-3-3-3z",fill:_,opacity:".15",stroke:_,strokeWidth:I})]});case"timeline":return t("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[t("line",{x1:"5",y1:"2",x2:"5",y2:"14",stroke:_,strokeWidth:".4",opacity:".25"}),t("circle",{cx:"5",cy:"4",r:"1.5",fill:_,opacity:".2",stroke:_,strokeWidth:I}),t("rect",{x:"8",y:"3",width:"8",height:"1",rx:".5",fill:_,opacity:".25"}),t("circle",{cx:"5",cy:"8.5",r:"1.5",stroke:_,strokeWidth:I}),t("rect",{x:"8",y:"7.5",width:"6",height:"1",rx:".5",fill:_,opacity:".15"}),t("circle",{cx:"5",cy:"13",r:"1.5",stroke:_,strokeWidth:I}),t("rect",{x:"8",y:"12",width:"7",height:"1",rx:".5",fill:_,opacity:".15"})]});case"fileUpload":return t("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[t("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:_,strokeWidth:I,strokeDasharray:"2 1"}),t("path",{d:"M10 10V5.5m0 0L7.5 8m2.5-2.5L12.5 8",stroke:_,strokeWidth:I,opacity:".3"}),t("rect",{x:"7",y:"11.5",width:"6",height:"1",rx:".5",fill:_,opacity:".15"})]});case"codeBlock":return t("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[t("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:_,strokeWidth:I}),t("circle",{cx:"4",cy:"4",r:".6",fill:_,opacity:".3"}),t("circle",{cx:"5.5",cy:"4",r:".6",fill:_,opacity:".3"}),t("circle",{cx:"7",cy:"4",r:".6",fill:_,opacity:".3"}),t("rect",{x:"4",y:"7",width:"7",height:"1",rx:".5",fill:_,opacity:".2"}),t("rect",{x:"6",y:"9",width:"5",height:"1",rx:".5",fill:_,opacity:".15"}),t("rect",{x:"4",y:"11",width:"8",height:"1",rx:".5",fill:_,opacity:".12"})]});case"calendar":return t("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[t("rect",{x:"2",y:"3",width:"16",height:"12",rx:"1",stroke:_,strokeWidth:I}),t("line",{x1:"2",y1:"6.5",x2:"18",y2:"6.5",stroke:_,strokeWidth:".4",opacity:".25"}),t("rect",{x:"5",y:"4",width:"1",height:"1.5",rx:".3",fill:_,opacity:".2"}),t("rect",{x:"14",y:"4",width:"1",height:"1.5",rx:".3",fill:_,opacity:".2"}),t("circle",{cx:"7",cy:"9",r:".6",fill:_,opacity:".2"}),t("circle",{cx:"10",cy:"9",r:".6",fill:_,opacity:".2"}),t("circle",{cx:"13",cy:"9",r:".6",fill:_,opacity:".3"}),t("circle",{cx:"7",cy:"12",r:".6",fill:_,opacity:".2"}),t("circle",{cx:"10",cy:"12",r:".6",fill:_,opacity:".2"})]});case"notification":return t("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[t("rect",{x:"2",y:"3",width:"16",height:"10",rx:"1.5",stroke:_,strokeWidth:I}),t("circle",{cx:"5.5",cy:"8",r:"2",stroke:_,strokeWidth:I,opacity:".25"}),t("rect",{x:"9",y:"6",width:"6",height:"1",rx:".5",fill:_,opacity:".25"}),t("rect",{x:"9",y:"8.5",width:"4.5",height:"1",rx:".5",fill:_,opacity:".12"}),t("circle",{cx:"16.5",cy:"4.5",r:"1.5",fill:_,opacity:".25"})]});case"productCard":return t("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[t("rect",{x:"3",y:"1",width:"14",height:"14",rx:"1.5",stroke:_,strokeWidth:I}),t("rect",{x:"3",y:"1",width:"14",height:"6",rx:"1",fill:_,opacity:".04"}),t("rect",{x:"5",y:"8.5",width:"7",height:"1",rx:".5",fill:_,opacity:".25"}),t("rect",{x:"5",y:"10.5",width:"4",height:"1.5",rx:".5",fill:_,opacity:".15"}),t("rect",{x:"12",y:"12",width:"4",height:"2",rx:".75",stroke:_,strokeWidth:I})]});case"profile":return t("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[t("circle",{cx:"10",cy:"5",r:"3",stroke:_,strokeWidth:I}),t("rect",{x:"5",y:"10",width:"10",height:"1.5",rx:".5",fill:_,opacity:".25"}),t("rect",{x:"7",y:"12.5",width:"6",height:"1",rx:".5",fill:_,opacity:".12"})]});case"drawer":return t("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[t("rect",{x:"9",y:"1",width:"10",height:"14",rx:"1",stroke:_,strokeWidth:I}),t("rect",{x:"10.5",y:"4",width:"5",height:"1",rx:".5",fill:_,opacity:".25"}),t("rect",{x:"10.5",y:"6.5",width:"7",height:"1",rx:".5",fill:_,opacity:".15"}),t("rect",{x:"10.5",y:"9",width:"6",height:"1",rx:".5",fill:_,opacity:".15"}),t("rect",{x:"1",y:"1",width:"7",height:"14",rx:"1",stroke:_,strokeWidth:I,opacity:".15"})]});case"popover":return t("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[t("rect",{x:"3",y:"2",width:"14",height:"9",rx:"1.5",stroke:_,strokeWidth:I}),t("rect",{x:"5",y:"4.5",width:"8",height:"1",rx:".5",fill:_,opacity:".25"}),t("rect",{x:"5",y:"7",width:"6",height:"1",rx:".5",fill:_,opacity:".15"}),t("path",{d:"M9 11l1 2.5 1-2.5",stroke:_,strokeWidth:I})]});case"logo":return t("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[t("rect",{x:"2",y:"3",width:"10",height:"10",rx:"2",stroke:_,strokeWidth:I}),t("path",{d:"M5 9.5l2-4 2 4",stroke:_,strokeWidth:I,opacity:".3"}),t("rect",{x:"14",y:"6",width:"4",height:"1",rx:".5",fill:_,opacity:".2"}),t("rect",{x:"14",y:"8.5",width:"3",height:"1",rx:".5",fill:_,opacity:".12"})]});case"faq":return t("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[t("text",{x:"2.5",y:"5.5",fontSize:"4",fill:_,opacity:".3",fontWeight:"bold",children:"?"}),t("rect",{x:"7",y:"3",width:"10",height:"1",rx:".5",fill:_,opacity:".25"}),t("rect",{x:"7",y:"5.5",width:"8",height:"1",rx:".5",fill:_,opacity:".12"}),t("text",{x:"2.5",y:"11.5",fontSize:"4",fill:_,opacity:".3",fontWeight:"bold",children:"?"}),t("rect",{x:"7",y:"9",width:"9",height:"1",rx:".5",fill:_,opacity:".25"}),t("rect",{x:"7",y:"11.5",width:"7",height:"1",rx:".5",fill:_,opacity:".12"})]});case"gallery":return t("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[t("rect",{x:"1.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:_,strokeWidth:I}),t("rect",{x:"7.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:_,strokeWidth:I}),t("rect",{x:"13.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:_,strokeWidth:I}),t("rect",{x:"1.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:_,strokeWidth:I}),t("rect",{x:"7.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:_,strokeWidth:I}),t("rect",{x:"13.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:_,strokeWidth:I})]});case"checkbox":return t("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[t("rect",{x:"5",y:"4",width:"8",height:"8",rx:"1.5",stroke:_,strokeWidth:I}),t("path",{d:"M7.5 8l1.5 1.5 3-3",stroke:_,strokeWidth:I,opacity:".35"})]});case"radio":return t("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[t("circle",{cx:"10",cy:"8",r:"4",stroke:_,strokeWidth:I}),t("circle",{cx:"10",cy:"8",r:"2",fill:_,opacity:".3"})]});case"slider":return t("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[t("rect",{x:"2",y:"7.5",width:"16",height:"1",rx:".5",fill:_,opacity:".15"}),t("rect",{x:"2",y:"7.5",width:"10",height:"1",rx:".5",fill:_,opacity:".25"}),t("circle",{cx:"12",cy:"8",r:"2.5",stroke:_,strokeWidth:I})]});case"datePicker":return t("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[t("rect",{x:"2",y:"1",width:"16",height:"5",rx:"1",stroke:_,strokeWidth:I}),t("rect",{x:"3.5",y:"3",width:"5",height:"1",rx:".5",fill:_,opacity:".2"}),t("rect",{x:"14",y:"2.5",width:"2.5",height:"2",rx:".5",fill:_,opacity:".12"}),t("rect",{x:"2",y:"7",width:"16",height:"8",rx:"1",stroke:_,strokeWidth:I,strokeDasharray:"2 1",opacity:".3"}),t("circle",{cx:"6",cy:"10",r:".6",fill:_,opacity:".2"}),t("circle",{cx:"10",cy:"10",r:".6",fill:_,opacity:".3"}),t("circle",{cx:"14",cy:"10",r:".6",fill:_,opacity:".2"}),t("circle",{cx:"6",cy:"13",r:".6",fill:_,opacity:".2"}),t("circle",{cx:"10",cy:"13",r:".6",fill:_,opacity:".2"})]});case"skeleton":return t("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[t("rect",{x:"2",y:"2",width:"16",height:"3",rx:"1",fill:_,opacity:".08"}),t("rect",{x:"2",y:"7",width:"10",height:"2",rx:".75",fill:_,opacity:".08"}),t("rect",{x:"2",y:"11",width:"13",height:"2",rx:".75",fill:_,opacity:".08"})]});case"chip":return t("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[t("rect",{x:"1.5",y:"5",width:"10",height:"6",rx:"3",fill:_,opacity:".08",stroke:_,strokeWidth:I}),t("rect",{x:"4",y:"7.5",width:"4",height:"1",rx:".5",fill:_,opacity:".25"}),t("line",{x1:"9.5",y1:"6.5",x2:"10.5",y2:"9.5",stroke:_,strokeWidth:I,opacity:".2"}),t("line",{x1:"10.5",y1:"6.5",x2:"9.5",y2:"9.5",stroke:_,strokeWidth:I,opacity:".2"}),t("rect",{x:"13",y:"5",width:"5.5",height:"6",rx:"3",stroke:_,strokeWidth:I,opacity:".25"})]});case"icon":return t("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:t("path",{d:"M10 3l1.5 3 3.5.5-2.5 2.5.5 3.5L10 11l-3 1.5.5-3.5L5 6.5l3.5-.5z",stroke:_,strokeWidth:I,opacity:".3"})});case"spinner":return t("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[t("circle",{cx:"10",cy:"8",r:"5",stroke:_,strokeWidth:I,opacity:".12"}),t("path",{d:"M10 3a5 5 0 0 1 5 5",stroke:_,strokeWidth:I,opacity:".35",strokeLinecap:"round"})]});case"feature":return t("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[t("rect",{x:"2",y:"2",width:"5",height:"5",rx:"1.5",stroke:_,strokeWidth:I}),t("path",{d:"M4.5 3.5v3m-1.5-1.5h3",stroke:_,strokeWidth:I,opacity:".25"}),t("rect",{x:"9",y:"2.5",width:"8",height:"1.5",rx:".5",fill:_,opacity:".25"}),t("rect",{x:"9",y:"5.5",width:"6",height:"1",rx:".5",fill:_,opacity:".12"}),t("rect",{x:"2",y:"10",width:"5",height:"5",rx:"1.5",stroke:_,strokeWidth:I}),t("rect",{x:"9",y:"10.5",width:"7",height:"1.5",rx:".5",fill:_,opacity:".25"}),t("rect",{x:"9",y:"13.5",width:"5",height:"1",rx:".5",fill:_,opacity:".12"})]});case"team":return t("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[t("circle",{cx:"5",cy:"5",r:"2.5",stroke:_,strokeWidth:I}),t("rect",{x:"2.5",y:"9",width:"5",height:"1",rx:".5",fill:_,opacity:".2"}),t("circle",{cx:"15",cy:"5",r:"2.5",stroke:_,strokeWidth:I}),t("rect",{x:"12.5",y:"9",width:"5",height:"1",rx:".5",fill:_,opacity:".2"}),t("circle",{cx:"10",cy:"5",r:"2.5",stroke:_,strokeWidth:I,opacity:".5"}),t("rect",{x:"7.5",y:"9",width:"5",height:"1",rx:".5",fill:_,opacity:".15"}),t("rect",{x:"4",y:"12",width:"12",height:"1",rx:".5",fill:_,opacity:".1"})]});case"login":return t("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[t("rect",{x:"3",y:"1",width:"14",height:"14",rx:"1.5",stroke:_,strokeWidth:I}),t("rect",{x:"6",y:"3",width:"8",height:"1.5",rx:".5",fill:_,opacity:".25"}),t("rect",{x:"5",y:"5.5",width:"10",height:"3",rx:".75",stroke:_,strokeWidth:I}),t("rect",{x:"5",y:"9.5",width:"10",height:"3",rx:".75",stroke:_,strokeWidth:I}),t("rect",{x:"6.5",y:"13.5",width:"7",height:"2",rx:".75",fill:_,opacity:".2"})]});case"contact":return t("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[t("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:_,strokeWidth:I}),t("rect",{x:"4",y:"3",width:"5",height:"1",rx:".5",fill:_,opacity:".2"}),t("rect",{x:"4",y:"5",width:"12",height:"2.5",rx:".75",stroke:_,strokeWidth:I}),t("rect",{x:"4",y:"8.5",width:"12",height:"4",rx:".75",stroke:_,strokeWidth:I}),t("rect",{x:"11",y:"13.5",width:"5",height:"1.5",rx:".5",fill:_,opacity:".2"})]});default:return null}}function Dd({activeType:e,onSelect:n,onDragStart:o,scrollRef:r,fadeClass:i,blankCanvas:s}){return t("div",{ref:r,className:`${N.placeScroll} ${i||""}`,children:Sl.map(l=>t("div",{className:N.paletteSection,children:[t("div",{className:N.paletteSectionTitle,children:l.section}),l.items.map(d=>t("button",{type:"button","aria-pressed":e===d.type,className:`${N.paletteItem} ${e===d.type?N.active:""} ${s?N.wireframe:""}`,onClick:()=>n(d.type),onMouseDown:c=>{c.button===0&&o(d.type,c)},children:[t("span",{className:N.paletteItemIcon,"aria-hidden":"true",children:t(Bd,{type:d.type})}),t("span",{className:N.paletteItemLabel,children:d.label})]},d.type))]},l.section))})}function Pd({value:e,suffix:n}){const[o,r]=A(null),[i,s]=A(n),[l,d]=A("up"),c=R(e),b=R(n),f=R(),m=o!==null&&i!==n;return K(()=>{if(e!==c.current){if(e===0){c.current=e,b.current=n,r(null);return}d(e>c.current?"up":"down"),r(c.current),s(b.current),c.current=e,b.current=n,clearTimeout(f.current),f.current=Ve(()=>r(null),250)}else b.current=n},[e,n]),o===null?t(Ft,{children:[e,n?` ${n}`:""]}):m?t("span",{className:N.rollingWrap,children:[t("span",{style:{visibility:"hidden"},children:[e," ",n]}),t("span",{className:`${N.rollingNum} ${l==="up"?N.exitUp:N.exitDown}`,children:[o," ",i]},`o${o}-${e}`),t("span",{className:`${N.rollingNum} ${l==="up"?N.enterUp:N.enterDown}`,children:[e," ",n]},`n${e}`)]}):t(Ft,{children:[t("span",{className:N.rollingWrap,children:[t("span",{style:{visibility:"hidden"},children:e}),t("span",{className:`${N.rollingNum} ${l==="up"?N.exitUp:N.exitDown}`,children:o},`o${o}-${e}`),t("span",{className:`${N.rollingNum} ${l==="up"?N.enterUp:N.enterDown}`,children:e},`n${e}`)]}),n?` ${n}`:""]})}function Ad({activeType:e,onSelect:n,isDarkMode:o,sectionCount:r,onDetectSections:i,visible:s,onExited:l,placementCount:d,onClearPlacements:c,onDragStart:b,blankCanvas:f,onBlankCanvasChange:m,wireframePurpose:g,onWireframePurposeChange:v,Tooltip:x}){const{ref:$,mounted:T}=Cl(s,{onExited:l}),[O,Se]=A(!1),[z,p]=A(!0),J=R(0),ie=R(""),X=R(null),[xe,W]=A(""),_e=d>0||r>0,se=d+r;return se>0&&(J.current=se,ie.current=f?se===1?"Component":"Components":se===1?"Change":"Changes"),K(()=>{if(_e)O?p(!1):(p(!0),Se(!0),dr(()=>{dr(()=>{p(!1)})}));else{p(!0);const F=Ve(()=>Se(!1),300);return()=>clearTimeout(F)}},[_e]),K(()=>{if(!s)return;const F=X.current;if(!F)return;const we=()=>W(Td(F));F.addEventListener("scroll",we,{passive:!0});const V=new ResizeObserver(we);return V.observe(F),()=>{F.removeEventListener("scroll",we),V.disconnect()}},[s]),T?t("div",{className:`${N.palette} ${o?"":N.light}`,ref:F=>{$.current=F,F==null||F.toggleAttribute("inert",!s)},"aria-hidden":!s,"data-feedback-toolbar":!0,"data-agentation-palette":!0,onClick:F=>F.stopPropagation(),onMouseDown:F=>F.stopPropagation(),children:[t("div",{className:N.paletteHeader,children:[t("div",{className:N.paletteHeaderTitle,children:"Layout Mode"}),t("div",{className:N.paletteHeaderDesc,children:["Rearrange and resize existing elements, add new components, and explore layout ideas. Agent results may vary."," ",t("a",{href:"https://agentation.com/features#layout-mode",target:"_blank",rel:"noopener noreferrer",children:"Learn more."})]})]}),t("button",{type:"button","aria-pressed":f,className:`${N.canvasToggle} ${f?N.active:""}`,onClick:()=>m(!f),children:[t("span",{className:N.canvasToggleIcon,"aria-hidden":"true",children:t("svg",{viewBox:"0 0 14 14",width:"14",height:"14",fill:"none",children:[t("rect",{x:"1",y:"1",width:"12",height:"12",rx:"2",stroke:"currentColor",strokeWidth:"1"}),t("circle",{cx:"4.5",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),t("circle",{cx:"7",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),t("circle",{cx:"9.5",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),t("circle",{cx:"4.5",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),t("circle",{cx:"7",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),t("circle",{cx:"9.5",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),t("circle",{cx:"4.5",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"}),t("circle",{cx:"7",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"}),t("circle",{cx:"9.5",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"})]})}),t("span",{className:N.canvasToggleLabel,children:"Wireframe New Page"})]}),t("div",{className:`${N.wireframePurposeWrap} ${f?"":N.collapsed}`,"aria-hidden":!f,ref:F=>{F==null||F.toggleAttribute("inert",!f)},children:t("div",{className:N.wireframePurposeInner,children:t("textarea",{className:N.wireframePurposeInput,placeholder:"Describe this page to provide additional context for your agent.",value:g,onChange:F=>v(F.target.value),rows:2})})}),t(Dd,{activeType:e,onSelect:n,onDragStart:b,scrollRef:X,fadeClass:xe,blankCanvas:f}),O&&t("div",{className:`${N.paletteFooterWrap} ${z?N.footerHidden:""}`,children:t("div",{className:N.paletteFooterInner,children:t("div",{className:N.paletteFooterInnerContent,children:t("div",{className:N.paletteFooter,children:[t("span",{className:N.paletteFooterCount,children:t(Pd,{value:J.current,suffix:ie.current})}),t("button",{className:N.paletteFooterClear,onClick:c,children:"Clear"})]})})})})]}):null}var Od=new Set(["nav","header","main","section","article","footer","aside"]),as={banner:"Header",navigation:"Navigation",main:"Main Content",contentinfo:"Footer",complementary:"Sidebar",region:"Section"},Ai={nav:"Navigation",header:"Header",main:"Main Content",section:"Section",article:"Article",footer:"Footer",aside:"Sidebar"},Wd=new Set(["script","style","noscript","link","meta"]),Fd=40;function Ml(e){let n=e;for(;n&&n!==document.body&&n!==document.documentElement;){const o=window.getComputedStyle(n).position;if(o==="fixed"||o==="sticky")return!0;n=n.parentElement}return!1}function On(e){const n=e.tagName.toLowerCase();if(["nav","header","footer","main"].includes(n)&&document.querySelectorAll(n).length===1)return n;if(e.id)return`#${CSS.escape(e.id)}`;if(e.className&&typeof e.className=="string"){const i=e.className.split(/\s+/).filter(s=>s.length>0).find(s=>s.length>2&&!/^[a-zA-Z0-9]{6,}$/.test(s)&&!/^[a-z]{1,2}$/.test(s));if(i){const s=`${n}.${CSS.escape(i)}`;if(document.querySelectorAll(s).length===1)return s}}const o=e.parentElement;if(o){const i=Array.from(o.children).indexOf(e)+1;return`${o===document.body?"body":On(o)} > ${n}:nth-child(${i})`}return n}function _r(e){var l;const n=e.tagName.toLowerCase(),o=e.getAttribute("aria-label");if(o)return o;const r=e.getAttribute("role");if(r&&as[r])return as[r];if(Ai[n])return Ai[n];const i=e.querySelector("h1, h2, h3, h4, h5, h6");if(i){const d=(l=i.textContent)==null?void 0:l.trim();if(d&&d.length<=50)return d;if(d)return d.slice(0,47)+"..."}const{name:s}=Zn(e);return s.charAt(0).toUpperCase()+s.slice(1)}function $l(e){const n=e.className;return typeof n!="string"||!n?null:n.split(/\s+/).map(r=>r.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(r=>r.length>2&&!/^[a-z]{1,2}$/.test(r))||null}function Il(e){var r;const n=(r=e.textContent)==null?void 0:r.trim();if(!n)return null;const o=n.replace(/\s+/g," ");return o.length<=30?o:o.slice(0,30)+"…"}function zd(){const e=document.querySelector("main")||document.body,n=Array.from(e.children);let o=n;e!==document.body&&n.length<3&&(o=Array.from(document.body.children));const r=[];return o.forEach((i,s)=>{if(!(i instanceof HTMLElement))return;const l=i.tagName.toLowerCase();if(Wd.has(l)||i.hasAttribute("data-feedback-toolbar")||i.closest("[data-feedback-toolbar]"))return;const d=window.getComputedStyle(i);if(d.display==="none"||d.visibility==="hidden")return;const c=i.getBoundingClientRect();if(c.height<Fd)return;const b=Od.has(l),f=i.getAttribute("role")&&as[i.getAttribute("role")],m=l==="div"&&c.height>=60;if(!b&&!f&&!m)return;const g=window.scrollY,v=Ml(i),x={x:c.x,y:v?c.y:c.y+g,width:c.width,height:c.height};r.push({id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:_r(i),tagName:l,selector:On(i),role:i.getAttribute("role"),className:$l(i),textSnippet:Il(i),originalRect:x,currentRect:{...x},originalIndex:s,isFixed:v})}),r}function Hd(e){const n=window.scrollY,o=e.getBoundingClientRect(),r=Ml(e),i={x:o.x,y:r?o.y:o.y+n,width:o.width,height:o.height},s=e.parentElement;let l=0;return s&&(l=Array.from(s.children).indexOf(e)),{id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:_r(e),tagName:e.tagName.toLowerCase(),selector:On(e),role:e.getAttribute("role"),className:$l(e),textSnippet:Il(e),originalRect:i,currentRect:{...i},originalIndex:l,isFixed:r}}var Oi={bg:"rgba(59, 130, 246, 0.08)",border:"rgba(59, 130, 246, 0.5)",pill:"#3b82f6"},Wi=["nw","n","ne","e","se","s","sw","w"],Zo=24,Fi=16,er=5;function zi(e,n,o,r){let i=1/0,s=1/0;const l=e.x,d=e.x+e.width,c=e.x+e.width/2,b=e.y,f=e.y+e.height,m=e.y+e.height/2,g=[];for(const X of n)o.has(X.id)||g.push(X.currentRect);r&&g.push(...r);for(const X of g){const xe=X.x,W=X.x+X.width,_e=X.x+X.width/2,se=X.y,F=X.y+X.height,we=X.y+X.height/2;for(const V of[l,d,c])for(const oe of[xe,W,_e]){const ce=oe-V;Math.abs(ce)<er&&Math.abs(ce)<Math.abs(i)&&(i=ce)}for(const V of[b,f,m])for(const oe of[se,F,we]){const ce=oe-V;Math.abs(ce)<er&&Math.abs(ce)<Math.abs(s)&&(s=ce)}}const v=Math.abs(i)<er?i:0,x=Math.abs(s)<er?s:0,$=[],T=new Set,O=l+v,Se=d+v,z=c+v,p=b+x,J=f+x,ie=m+x;for(const X of g){const xe=X.x,W=X.x+X.width,_e=X.x+X.width/2,se=X.y,F=X.y+X.height,we=X.y+X.height/2;for(const V of[xe,_e,W])for(const oe of[O,z,Se])if(Math.abs(oe-V)<.5){const ce=`x:${Math.round(V)}`;T.has(ce)||(T.add(ce),$.push({axis:"x",pos:V}))}for(const V of[se,we,F])for(const oe of[p,ie,J])if(Math.abs(oe-V)<.5){const ce=`y:${Math.round(V)}`;T.has(ce)||(T.add(ce),$.push({axis:"y",pos:V}))}}return{dx:v,dy:x,guides:$}}var Yd=new Set(["script","style","noscript","link","meta","br","hr"]);function Hi(e){let n=e;for(;n&&n!==document.body&&n!==document.documentElement;){if(n.closest("[data-feedback-toolbar]"))return null;if(Yd.has(n.tagName.toLowerCase())){n=n.parentElement;continue}const o=n.getBoundingClientRect();if(o.width>=Fi&&o.height>=Fi)return n;n=n.parentElement}return null}function jd({rearrangeState:e,onChange:n,isDarkMode:o,exiting:r,className:i,blankCanvas:s,extraSnapRects:l,onSelectionChange:d,deselectSignal:c,onDragMove:b,onDragEnd:f,clearing:m}){const{sections:g}=e,v=R(e);v.current=e;const[x,$]=A(new Set);K(()=>{m&&$(new Set)},[m]);const T=R(c);K(()=>{c!==T.current&&(T.current=c,$(new Set))},[c]);const[O,Se]=A(null),[z,p]=A(!1),J=R(!1),ie=ue(w=>{const M=g.find(E=>E.id===w);M&&(J.current=!!M.note,Se(w),p(!1))},[g]),X=ue(()=>{O&&(p(!0),Ve(()=>{Se(null),p(!1)},150))},[O]),xe=ue(w=>{O&&(n({...e,sections:g.map(M=>M.id===O?{...M,note:w.trim()||void 0}:M)}),X())},[O,g,e,n,X]);K(()=>{r&&O&&X()},[r]);const[W,_e]=A(new Set),se=R(new Map),[F,we]=A(null),[V,oe]=A(null),[ce,at]=A([]),[Ce,tt]=A(0),Ie=R(null),Je=R(new Set),ut=R(new Map),[Tt,ve]=A(new Map),[Dt,cn]=A(new Map),mn=R(new Set),pn=R(new Map),ht=R(d);ht.current=d;const Ot=R(b);Ot.current=b;const vt=R(f);vt.current=f,K(()=>{s&&$(new Set)},[s]);const[yt,Ht]=A(()=>!e.sections.some(w=>{const M=w.originalRect,E=w.currentRect;return Math.abs(M.x-E.x)>1||Math.abs(M.y-E.y)>1||Math.abs(M.width-E.width)>1||Math.abs(M.height-E.height)>1}));K(()=>{if(!yt){const w=Ve(()=>Ht(!0),380);return()=>clearTimeout(w)}},[]);const gn=R(new Set);K(()=>{gn.current=new Set(g.map(w=>w.selector))},[g]),K(()=>{const w=()=>tt(window.scrollY);return w(),window.addEventListener("scroll",w,{passive:!0}),window.addEventListener("resize",w,{passive:!0}),()=>{window.removeEventListener("scroll",w),window.removeEventListener("resize",w)}},[]),K(()=>{const w=M=>{if(Ie.current){we(null);return}const E=document.elementFromPoint(M.clientX,M.clientY);if(!E){we(null);return}if(E.closest("[data-feedback-toolbar]")){we(null);return}if(E.closest("[data-design-placement]")){we(null);return}if(E.closest("[data-annotation-popup]")){we(null);return}const P=Hi(E);if(!P){we(null);return}for(const G of gn.current)try{const Y=document.querySelector(G);if(Y&&(Y===P||P.contains(Y))){we(null);return}}catch{}const re=P.getBoundingClientRect();we({x:re.x,y:re.y,w:re.width,h:re.height})};return document.addEventListener("mousemove",w,{passive:!0}),()=>document.removeEventListener("mousemove",w)},[g]),K(()=>{const w=document.body.style.userSelect;return document.body.style.webkitUserSelect="none",document.body.style.userSelect="none",()=>{document.body.style.webkitUserSelect=w,document.body.style.userSelect=w}},[]),K(()=>{const w=M=>{var Y,Ee,ke,Ne;if(Ie.current||M.button!==0)return;const E=M.composedPath()[0]??M.target;if(!E||E.closest("[data-feedback-toolbar]")||E.closest("[data-design-placement]")||E.closest("[data-annotation-popup]"))return;const P=Hi(E);let re=!1;if(P)for(const he of gn.current)try{const Ae=document.querySelector(he);if(Ae&&(Ae===P||P.contains(Ae))){re=!0;break}}catch{}const G=!!(M.shiftKey||M.metaKey||M.ctrlKey);if(P&&!re){M.preventDefault(),M.stopPropagation();const he=Hd(P),Ae=[...g,he],We=[...e.originalOrder,he.id];n({...e,sections:Ae,originalOrder:We});const Ze=new Set([he.id]);$(Ze),(Y=ht.current)==null||Y.call(ht,Ze,G),we(null);const mt=M.clientX,He=M.clientY,Xe={x:he.currentRect.x,y:he.currentRect.y};he.originalRect;let Ye=!1,Te=0,bt=0;Ie.current="move";const Qe=Z=>{var Wt;const It=Z.clientX-mt,pt=Z.clientY-He;if(!Ye&&(Math.abs(It)>2||Math.abs(pt)>2)&&(Ye=!0),!Ye)return;const fn={x:Xe.x+It,y:Xe.y+pt,width:he.currentRect.width,height:he.currentRect.height},tn=zi(fn,Ae,new Set([he.id]),l);at(tn.guides);const kt=It+tn.dx,Yt=pt+tn.dy;Te=kt,bt=Yt;const Pt=D().querySelector(`[data-rearrange-section="${he.id}"]`);Pt&&(Pt.style.transform=`translate(${kt}px, ${Yt}px)`),ve(new Map([[he.id,{x:Xe.x+kt,y:Xe.y+Yt,width:he.currentRect.width,height:he.currentRect.height}]])),(Wt=Ot.current)==null||Wt.call(Ot,kt,Yt)},ze=()=>{var It;window.removeEventListener("mousemove",Qe),window.removeEventListener("mouseup",ze),Ie.current=null,at([]),ve(new Map);const Z=D().querySelector(`[data-rearrange-section="${he.id}"]`);Z&&(Z.style.transform=""),Ye&&n({...e,sections:Ae.map(pt=>pt.id===he.id?{...pt,currentRect:{...pt.currentRect,x:Math.max(0,Xe.x+Te),y:Math.max(0,Xe.y+bt)}}:pt),originalOrder:We}),(It=vt.current)==null||It.call(vt,Te,bt,Ye)};window.addEventListener("mousemove",Qe),window.addEventListener("mouseup",ze)}else if(re&&P){M.preventDefault();for(const he of g)try{const Ae=document.querySelector(he.selector);if(Ae&&Ae===P){const We=new Set([he.id]);$(We),(Ee=ht.current)==null||Ee.call(ht,We,G);return}}catch{}G||($(new Set),(ke=ht.current)==null||ke.call(ht,new Set,!1))}else G||($(new Set),(Ne=ht.current)==null||Ne.call(ht,new Set,!1))};return document.addEventListener("mousedown",w,!0),()=>document.removeEventListener("mousedown",w,!0)},[g,e,n]),K(()=>{const w=M=>{const E=M.composedPath()[0]||M.target;if(!(E.tagName==="INPUT"||E.tagName==="TEXTAREA"||E.isContentEditable)){if((M.key==="Backspace"||M.key==="Delete")&&x.size>0){M.preventDefault();const P=new Set(x);_e(re=>{const G=new Set(re);for(const Y of P)G.add(Y);return G}),$(new Set),Ve(()=>{const re=v.current;n({...re,sections:re.sections.filter(G=>!P.has(G.id)),originalOrder:re.originalOrder.filter(G=>!P.has(G))}),_e(G=>{const Y=new Set(G);for(const Ee of P)Y.delete(Ee);return Y})},180);return}if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(M.key)&&x.size>0){M.preventDefault();const P=M.shiftKey?20:1,re=M.key==="ArrowLeft"?-P:M.key==="ArrowRight"?P:0,G=M.key==="ArrowUp"?-P:M.key==="ArrowDown"?P:0;n({...e,sections:g.map(Y=>x.has(Y.id)?{...Y,currentRect:{...Y.currentRect,x:Math.max(0,Y.currentRect.x+re),y:Math.max(0,Y.currentRect.y+G)}}:Y)});return}M.key==="Escape"&&x.size>0&&$(new Set)}};return document.addEventListener("keydown",w),()=>document.removeEventListener("keydown",w)},[x,g,e,n]);const en=ue((w,M)=>{var mt;if(w.button!==0)return;const E=w.target;if(E.closest(`.${N.handle}`)||E.closest(`.${N.deleteButton}`))return;w.preventDefault(),w.stopPropagation();let P;w.shiftKey||w.metaKey||w.ctrlKey?(P=new Set(x),P.has(M)?P.delete(M):P.add(M)):x.has(M)?P=new Set(x):P=new Set([M]),$(P),(P.size!==x.size||[...P].some(He=>!x.has(He)))&&((mt=ht.current)==null||mt.call(ht,P,!!(w.shiftKey||w.metaKey||w.ctrlKey)));const G=w.clientX,Y=w.clientY,Ee=new Map;for(const He of g)P.has(He.id)&&Ee.set(He.id,{x:He.currentRect.x,y:He.currentRect.y});Ie.current="move";let ke=!1,Ne=0,he=0;const Ae=new Map;for(const He of g)if(P.has(He.id)){const Xe=D().querySelector(`[data-rearrange-section="${He.id}"]`);Ae.set(He.id,{outlineEl:Xe,curW:He.currentRect.width,curH:He.currentRect.height})}const We=He=>{var tn;const Xe=He.clientX-G,Ye=He.clientY-Y;if(Xe===0&&Ye===0)return;ke=!0;let Te=1/0,bt=1/0,Qe=-1/0,ze=-1/0;for(const[kt,{curW:Yt,curH:Pt}]of Ae){const Wt=Ee.get(kt);if(!Wt)continue;const nn=Wt.x+Xe,on=Wt.y+Ye;Te=Math.min(Te,nn),bt=Math.min(bt,on),Qe=Math.max(Qe,nn+Yt),ze=Math.max(ze,on+Pt)}const Z=zi({x:Te,y:bt,width:Qe-Te,height:ze-bt},g,P,l),It=Xe+Z.dx,pt=Ye+Z.dy;Ne=It,he=pt,at(Z.guides);for(const[,{outlineEl:kt}]of Ae)kt&&(kt.style.transform=`translate(${It}px, ${pt}px)`);const fn=new Map;for(const[kt,{curW:Yt,curH:Pt}]of Ae){const Wt=Ee.get(kt);if(Wt){const nn={x:Math.max(0,Wt.x+It),y:Math.max(0,Wt.y+pt),width:Yt,height:Pt};fn.set(kt,nn)}}ve(fn),(tn=Ot.current)==null||tn.call(Ot,It,pt)},Ze=He=>{var Xe,Ye;window.removeEventListener("mousemove",We),window.removeEventListener("mouseup",Ze),Ie.current=null,at([]),ve(new Map);for(const[,{outlineEl:Te}]of Ae)Te&&(Te.style.transform="");if(ke){const Te=He.clientX-G,bt=He.clientY-Y;if(Math.abs(Te)<5&&Math.abs(bt)<5)n({...e,sections:g.map(Qe=>{const ze=Ee.get(Qe.id);return ze?{...Qe,currentRect:{...Qe.currentRect,x:ze.x,y:ze.y}}:Qe})});else{n({...e,sections:g.map(Qe=>{const ze=Ee.get(Qe.id);return ze?{...Qe,currentRect:{...Qe.currentRect,x:Math.max(0,ze.x+Ne),y:Math.max(0,ze.y+he)}}:Qe})}),(Xe=vt.current)==null||Xe.call(vt,Ne,he,!0);return}}(Ye=vt.current)==null||Ye.call(vt,0,0,!1)};window.addEventListener("mousemove",We),window.addEventListener("mouseup",Ze)},[x,g,e,n]),dn=ue((w,M,E)=>{w.preventDefault(),w.stopPropagation();const P=g.find(We=>We.id===M);if(!P)return;$(new Set([M])),Ie.current="resize";const re=w.clientX,G=w.clientY,Y={...P.currentRect};P.originalRect;const Ee=Y.width/Y.height;let ke={...Y};const Ne=D().querySelector(`[data-rearrange-section="${M}"]`),he=We=>{const Ze=We.clientX-re,mt=We.clientY-G;let He=Y.x,Xe=Y.y,Ye=Y.width,Te=Y.height;if(E.includes("e")&&(Ye=Math.max(Zo,Y.width+Ze)),E.includes("w")&&(Ye=Math.max(Zo,Y.width-Ze),He=Y.x+Y.width-Ye),E.includes("s")&&(Te=Math.max(Zo,Y.height+mt)),E.includes("n")&&(Te=Math.max(Zo,Y.height-mt),Xe=Y.y+Y.height-Te),We.shiftKey)if(E.length===2){const Qe=Math.abs(Ye-Y.width),ze=Math.abs(Te-Y.height);Qe>ze?Te=Ye/Ee:Ye=Te*Ee,E.includes("w")&&(He=Y.x+Y.width-Ye),E.includes("n")&&(Xe=Y.y+Y.height-Te)}else E==="e"||E==="w"?Te=Ye/Ee:Ye=Te*Ee,E==="w"&&(He=Y.x+Y.width-Ye),E==="n"&&(Xe=Y.y+Y.height-Te);ke={x:He,y:Xe,width:Ye,height:Te},Ne&&(Ne.style.left=`${He}px`,Ne.style.top=`${Xe-Ce}px`,Ne.style.width=`${Ye}px`,Ne.style.height=`${Te}px`),oe({x:We.clientX+12,y:We.clientY+12,text:`${Math.round(Ye)} × ${Math.round(Te)}`}),ve(new Map([[M,ke]]))},Ae=()=>{window.removeEventListener("mousemove",he),window.removeEventListener("mouseup",Ae),oe(null),Ie.current=null,ve(new Map),n({...e,sections:g.map(We=>We.id===M?{...We,currentRect:ke}:We)})};window.addEventListener("mousemove",he),window.addEventListener("mouseup",Ae)},[g,e,n,Ce]),j=ue(w=>{_e(M=>{const E=new Set(M);return E.add(w),E}),$(M=>{const E=new Set(M);return E.delete(w),E}),Ve(()=>{const M=v.current;n({...M,sections:M.sections.filter(E=>E.id!==w),originalOrder:M.originalOrder.filter(E=>E!==w)}),_e(E=>{const P=new Set(E);return P.delete(w),P})},180)},[n]),ae=w=>{const M=w.originalRect,E=w.currentRect;return Math.abs(M.x-E.x)>1||Math.abs(M.y-E.y)>1||Math.abs(M.width-E.width)>1||Math.abs(M.height-E.height)>1},fe=w=>{const M=w.originalRect,E=w.currentRect;return Math.abs(M.x-E.x)>1||Math.abs(M.y-E.y)>1},Me=w=>{const M=w.originalRect,E=w.currentRect;return Math.abs(M.width-E.width)>1||Math.abs(M.height-E.height)>1};for(const w of g)ut.current.has(w.id)||(fe(w)?ut.current.set(w.id,"move"):Me(w)&&ut.current.set(w.id,"resize"));for(const w of ut.current.keys())g.some(M=>M.id===w)||ut.current.delete(w);const Le=g.filter(w=>{try{if(W.has(w.id)||x.has(w.id))return!0;const M=document.querySelector(w.selector);if(!M)return!1;const E=M.getBoundingClientRect(),P=w.originalRect;return Math.abs(E.width-P.width)+Math.abs(E.height-P.height)<200}catch{return!1}}),De=Le.filter(w=>ae(w)),Pe=Le.filter(w=>!ae(w)),me=new Set(De.map(w=>w.id));for(const w of Je.current)me.has(w)||Je.current.delete(w);const Ue=[...me].sort().join(",");for(const w of De)pn.current.set(w.id,{currentRect:w.currentRect,originalRect:w.originalRect,isFixed:w.isFixed});K(()=>{const w=mn.current;mn.current=me;const M=new Map;for(const E of w)if(!me.has(E)){if(!g.some(re=>re.id===E))continue;const P=pn.current.get(E);P&&(M.set(E,{orig:P.originalRect,target:P.currentRect,isFixed:P.isFixed}),pn.current.delete(E))}if(M.size>0){cn(P=>{const re=new Map(P);for(const[G,Y]of M)re.set(G,Y);return re});const E=Ve(()=>{cn(P=>{const re=new Map(P);for(const G of M.keys())re.delete(G);return re})},250);return()=>clearTimeout(E)}},[Ue,g]);const _t=R(null),D=()=>{var w;return((w=_t.current)==null?void 0:w.getRootNode())??document};return t(Ft,{children:[t("div",{ref:_t,className:`${N.rearrangeOverlay} ${o?"":N.light} ${r?N.overlayExiting:""}${i?` ${i}`:""}`,"data-feedback-toolbar":!0,children:[F&&t("div",{className:N.hoverHighlight,style:{left:F.x,top:F.y,width:F.w,height:F.h}}),Pe.map(w=>{const M=w.currentRect,E=w.isFixed?M.y:M.y-Ce,P=Oi,re=x.has(w.id);return t("div",{"data-rearrange-section":w.id,className:`${N.sectionOutline} ${re?N.selected:""} ${m||r||W.has(w.id)?N.exiting:""}`,style:{left:M.x,top:E,width:M.width,height:M.height,borderColor:P.border,backgroundColor:P.bg,...yt?{}:{opacity:0,animation:"none",transition:"none"}},onMouseDown:G=>en(G,w.id),onDoubleClick:()=>ie(w.id),children:[t("span",{className:N.sectionLabel,style:{backgroundColor:P.pill},children:w.label}),t("span",{className:`${N.sectionAnnotation} ${w.note?N.annotationVisible:""}`,children:(w.note&&se.current.set(w.id,w.note),w.note||se.current.get(w.id)||"")}),t("span",{className:N.sectionDimensions,children:[Math.round(M.width)," × ",Math.round(M.height)]}),t("div",{className:N.deleteButton,onMouseDown:G=>G.stopPropagation(),onClick:()=>j(w.id),children:"✕"}),Wi.map(G=>t("div",{className:`${N.handle} ${N[`handle${G.charAt(0).toUpperCase()}${G.slice(1)}`]}`,onMouseDown:Y=>dn(Y,w.id,G)},G))]},w.id)}),De.map(w=>{const M=w.currentRect,E=w.isFixed?M.y:M.y-Ce,P=x.has(w.id),re=fe(w),G=Me(w);if(s&&!P)return null;const Ee=!Je.current.has(w.id);return Ee&&Je.current.add(w.id),t("div",{"data-rearrange-section":w.id,className:`${N.ghostOutline} ${P?N.selected:""} ${m||r||W.has(w.id)?N.exiting:""}`,style:{left:M.x,top:E,width:M.width,height:M.height,...yt?{}:{opacity:0,animation:"none",transition:"none"},...Ee?{}:{animation:"none"}},onMouseDown:ke=>en(ke,w.id),onDoubleClick:()=>ie(w.id),children:[t("span",{className:N.sectionLabel,style:{backgroundColor:Oi.pill},children:w.label}),t("span",{className:`${N.sectionAnnotation} ${w.note?N.annotationVisible:""}`,children:(w.note&&se.current.set(w.id,w.note),w.note||se.current.get(w.id)||"")}),t("span",{className:N.sectionDimensions,children:[Math.round(M.width)," × ",Math.round(M.height)]}),t("div",{className:N.deleteButton,onMouseDown:ke=>ke.stopPropagation(),onClick:()=>j(w.id),children:"✕"}),Wi.map(ke=>t("div",{className:`${N.handle} ${N[`handle${ke.charAt(0).toUpperCase()}${ke.slice(1)}`]}`,onMouseDown:Ne=>dn(Ne,w.id,ke)},ke)),t("span",{className:N.ghostBadge,children:(()=>{const ke=ut.current.get(w.id);if(re&&G){const[Ne,he]=ke==="resize"?["Resize","Move"]:["Move","Resize"];return t(Ft,{children:["Suggested ",Ne," ",t("span",{className:N.ghostBadgeExtra,children:["& ",he]})]})}return`Suggested ${G?"Resize":"Move"}`})()})]},w.id)})]}),!s&&(()=>{const w=[];for(const M of De){const E=Tt.get(M.id);w.push({id:M.id,orig:M.originalRect,target:E||M.currentRect,isFixed:M.isFixed,isSelected:x.has(M.id),isExiting:W.has(M.id)})}for(const[M,E]of Tt)if(!w.some(P=>P.id===M)){const P=g.find(re=>re.id===M);P&&w.push({id:M,orig:P.originalRect,target:E,isFixed:P.isFixed,isSelected:x.has(M)})}for(const[M,E]of Dt)w.some(P=>P.id===M)||w.push({id:M,orig:E.orig,target:E.target,isFixed:E.isFixed,isSelected:!1,isExiting:!0});return w.length===0?null:t("svg",{className:`${N.connectorSvg} ${m||r?N.connectorExiting:""}`,children:[w.map(({id:M,orig:E,target:P,isFixed:re,isSelected:G,isExiting:Y})=>{const Ee=E.x+E.width/2,ke=(re?E.y:E.y-Ce)+E.height/2,Ne=P.x+P.width/2,he=(re?P.y:P.y-Ce)+P.height/2,Ae=Ne-Ee,We=he-ke,Ze=Math.sqrt(Ae*Ae+We*We);if(Ze<2)return null;const mt=Math.min(1,Ze/40),He=Math.min(Ze*.3,60),Xe=Ze>0?-We/Ze:0,Ye=Ze>0?Ae/Ze:0,Te=(Ee+Ne)/2+Xe*He,bt=(ke+he)/2+Ye*He,Qe=Tt.has(M),ze=Qe||G?1:.4,Z=Qe||G?1:.5;return t("g",{className:Y?N.connectorExiting:"",children:[t("path",{className:N.connectorLine,d:`M ${Ee} ${ke} Q ${Te} ${bt} ${Ne} ${he}`,fill:"none",stroke:"rgba(59, 130, 246, 0.45)",strokeWidth:"1.5",opacity:ze*mt}),t("circle",{className:N.connectorDot,cx:Ee,cy:ke,r:4*mt,fill:"rgba(59, 130, 246, 0.8)",stroke:"#fff",strokeWidth:"1.5",opacity:Z*mt,filter:"url(#connDotShadow)"}),t("circle",{className:N.connectorDot,cx:Ne,cy:he,r:4*mt,fill:"rgba(59, 130, 246, 0.8)",stroke:"#fff",strokeWidth:"1.5",opacity:Z*mt,filter:"url(#connDotShadow)"})]},`conn-${M}`)}),t("defs",{children:t("filter",{id:"connDotShadow",x:"-50%",y:"-50%",width:"200%",height:"200%",children:t("feDropShadow",{dx:"0",dy:"0.5",stdDeviation:"1",floodOpacity:"0.15"})})})]})})(),O&&(()=>{const w=g.find(he=>he.id===O);if(!w)return null;const M=w.currentRect,E=w.isFixed?M.y:M.y-Ce,P=M.x+M.width/2,re=E-8,G=E+M.height+8,Y=re>200,Ee=G<window.innerHeight-100,ke=Math.max(160,Math.min(window.innerWidth-160,P));let Ne;return Y?Ne={left:ke,bottom:window.innerHeight-re}:Ee?Ne={left:ke,top:G}:Ne={left:ke,top:Math.max(80,window.innerHeight/2-80)},t(xs,{element:w.label,placeholder:"Add a note about this section",initialValue:w.note??"",submitLabel:J.current?"Save":"Set",onSubmit:xe,onCancel:X,onDelete:J.current?()=>{xe("")}:void 0,isExiting:z,lightMode:!o,style:Ne})})(),V&&t("div",{className:N.sizeIndicator,style:{left:V.x,top:V.y},"data-feedback-toolbar":!0,children:V.text}),ce.map((w,M)=>t("div",{className:N.guideLine,style:w.axis==="x"?{position:"fixed",left:w.pos,top:0,width:1,height:"100vh"}:{position:"fixed",left:0,top:w.pos-Ce,width:"100vw",height:1}},`${w.axis}-${w.pos}-${M}`))]})}var cs=new Set(["script","style","noscript","link","meta","br","hr"]);function Ud(){const e=document.querySelector("main")||document.body,n=[],o=Array.from(e.children),r=e!==document.body&&o.length<3?Array.from(document.body.children):o;for(const i of r){if(!(i instanceof HTMLElement)||cs.has(i.tagName.toLowerCase())||i.hasAttribute("data-feedback-toolbar"))continue;const s=window.getComputedStyle(i);if(s.display==="none"||s.visibility==="hidden")continue;const l=i.getBoundingClientRect();if(!(l.height<10||l.width<10)){n.push({label:_r(i),selector:On(i),top:l.top,bottom:l.bottom,left:l.left,right:l.right,area:l.width*l.height});for(const d of Array.from(i.children)){if(!(d instanceof HTMLElement)||cs.has(d.tagName.toLowerCase())||d.hasAttribute("data-feedback-toolbar"))continue;const c=window.getComputedStyle(d);if(c.display==="none"||c.visibility==="hidden")continue;const b=d.getBoundingClientRect();b.height<10||b.width<10||n.push({label:_r(d),selector:On(d),top:b.top,bottom:b.bottom,left:b.left,right:b.right,area:b.width*b.height})}}}return n}function Xd(e){const n=window.scrollY;return e.map(({label:o,selector:r,rect:i})=>{const s=i.y-n;return{label:o,selector:r,top:s,bottom:s+i.height,left:i.x,right:i.x+i.width,area:i.width*i.height}})}function Qd(e){const n=window.scrollY,o=e.y-n,r=e.x;return{top:o,bottom:o+e.height,left:r,right:r+e.width,area:e.width*e.height}}function ds(e,n){const o=n?Xd(n):Ud(),r=Qd(e);let i=null,s=null,l=null,d=null,c=null;for(const x of o){if(Math.abs(x.left-r.left)<2&&Math.abs(x.top-r.top)<2&&Math.abs(x.right-x.left-e.width)<2&&Math.abs(x.bottom-x.top-e.height)<2)continue;x.left<=r.left+2&&x.right>=r.right-2&&x.top<=r.top+2&&x.bottom>=r.bottom-2&&x.area>r.area*1.5&&(!c||x.area<c._area)&&(c={label:x.label,selector:x.selector,_area:x.area});const $=r.right>x.left+5&&r.left<x.right-5,T=r.bottom>x.top+5&&r.top<x.bottom-5;if($&&x.bottom<=r.top+5){const O=Math.round(r.top-x.bottom);(!i||O<i._dist)&&(i={label:x.label,selector:x.selector,gap:Math.max(0,O),_dist:O})}if($&&x.top>=r.bottom-5){const O=Math.round(x.top-r.bottom);(!s||O<s._dist)&&(s={label:x.label,selector:x.selector,gap:Math.max(0,O),_dist:O})}if(T&&x.right<=r.left+5){const O=Math.round(r.left-x.right);(!l||O<l._dist)&&(l={label:x.label,selector:x.selector,gap:Math.max(0,O),_dist:O})}if(T&&x.left>=r.right-5){const O=Math.round(x.left-r.right);(!d||O<d._dist)&&(d={label:x.label,selector:x.selector,gap:Math.max(0,O),_dist:O})}}const b=window.innerWidth,f=window.innerHeight,m=Vd(e,b),g=x=>x?{label:x.label,selector:x.selector,gap:x.gap}:null,v=qd(r,e,b,f,c?{label:c.label,selector:c.selector,_area:c._area}:null,o);return{above:g(i),below:g(s),left:g(l),right:g(d),alignment:m,containedIn:c?{label:c.label,selector:c.selector}:null,outOfBounds:v}}function qd(e,n,o,r,i,s){const l={};let d=!1;const c=[];if(e.left<-2&&c.push("left"),e.right>o+2&&c.push("right"),e.top<-2&&c.push("top"),e.bottom>r+2&&c.push("bottom"),c.length>0&&(l.viewport=c,d=!0),i){const b=s.find(f=>f.label===i.label&&f.selector===i.selector&&Math.abs(f.area-i._area)<10);if(b){const f=[];e.left<b.left-2&&f.push("left"),e.right>b.right+2&&f.push("right"),e.top<b.top-2&&f.push("top"),e.bottom>b.bottom+2&&f.push("bottom"),f.length>0&&(l.container={label:i.label,edges:f},d=!0)}}return d?l:null}function Vd(e,n){if(e.width/n>.85)return"full-width";const r=e.x+e.width/2,i=n/2,s=r-i,l=n*.08;return Math.abs(s)<l?"center":s<0?"left":"right"}function Nl(e){switch(e){case"full-width":return"full-width";case"center":return"centered";case"left":return"left-aligned";case"right":return"right-aligned"}}function El(e,n={}){const o=[];e.above&&o.push(`Below \`${e.above.label}\`${e.above.gap>0?` (${e.above.gap}px gap)`:""}`),e.below&&o.push(`Above \`${e.below.label}\`${e.below.gap>0?` (${e.below.gap}px gap)`:""}`),n.includeLeftRight&&(e.left&&o.push(`Right of \`${e.left.label}\`${e.left.gap>0?` (${e.left.gap}px gap)`:""}`),e.right&&o.push(`Left of \`${e.right.label}\`${e.right.gap>0?` (${e.right.gap}px gap)`:""}`));const r=Nl(e.alignment);return e.containedIn?o.push(`${r.charAt(0).toUpperCase()+r.slice(1)} in \`${e.containedIn.label}\``):o.push(`${r.charAt(0).toUpperCase()+r.slice(1)} in page`),n.includePixelRef&&n.pixelRef&&o.push(`Pixel ref: \`${n.pixelRef}\``),e.outOfBounds&&(e.outOfBounds.viewport&&o.push(`**Outside viewport** (${e.outOfBounds.viewport.join(", ")} edge${e.outOfBounds.viewport.length>1?"s":""})`),e.outOfBounds.container&&o.push(`**Outside \`${e.outOfBounds.container.label}\`** (${e.outOfBounds.container.edges.join(", ")} edge${e.outOfBounds.container.edges.length>1?"s":""})`)),o}function Gd(e,n,o){var s,l;const r=[];e.above&&r.push(`below \`${e.above.label}\``),e.below&&r.push(`above \`${e.below.label}\``),e.left&&r.push(`right of \`${e.left.label}\``),e.right&&r.push(`left of \`${e.right.label}\``),e.containedIn&&r.push(`inside \`${e.containedIn.label}\``),r.push(Nl(e.alignment)),(s=e.outOfBounds)!=null&&s.viewport&&r.push(`**outside viewport** (${e.outOfBounds.viewport.join(", ")})`),(l=e.outOfBounds)!=null&&l.container&&r.push(`**outside \`${e.outOfBounds.container.label}\`** (${e.outOfBounds.container.edges.join(", ")})`);const i=o?`, ${Math.round(o.width)}×${Math.round(o.height)}px`:"";return`at (${Math.round(n.x)}, ${Math.round(n.y)})${i}: ${r.join(", ")}`}var Yi=15;function ji(e){if(e.length<2)return[];const n=[],o=new Set;for(let r=0;r<e.length;r++){if(o.has(r))continue;const i=[r];for(let s=r+1;s<e.length;s++)o.has(s)||Math.abs(e[r].rect.y-e[s].rect.y)<Yi&&i.push(s);if(i.length>=2){const s=i.map(c=>e[c]);s.sort((c,b)=>c.rect.x-b.rect.x);const l=[];for(let c=0;c<s.length-1;c++)l.push(Math.round(s[c+1].rect.x-(s[c].rect.x+s[c].rect.width)));const d=Math.round(s.reduce((c,b)=>c+b.rect.y,0)/s.length);n.push({labels:s.map(c=>c.label),type:"row",sharedEdge:d,gaps:l,avgGap:l.length?Math.round(l.reduce((c,b)=>c+b,0)/l.length):0}),i.forEach(c=>o.add(c))}}for(let r=0;r<e.length;r++){if(o.has(r))continue;const i=[r];for(let s=r+1;s<e.length;s++)o.has(s)||Math.abs(e[r].rect.x-e[s].rect.x)<Yi&&i.push(s);if(i.length>=2){const s=i.map(c=>e[c]);s.sort((c,b)=>c.rect.y-b.rect.y);const l=[];for(let c=0;c<s.length-1;c++)l.push(Math.round(s[c+1].rect.y-(s[c].rect.y+s[c].rect.height)));const d=Math.round(s.reduce((c,b)=>c+b.rect.x,0)/s.length);n.push({labels:s.map(c=>c.label),type:"column",sharedEdge:d,gaps:l,avgGap:l.length?Math.round(l.reduce((c,b)=>c+b,0)/l.length):0}),i.forEach(c=>o.add(c))}}return n}function Kd(e){if(e.length<2)return[];const n=ji(e.map(l=>({label:l.label,rect:l.originalRect}))),o=ji(e.map(l=>({label:l.label,rect:l.currentRect}))),r=[],i=new Set;for(const l of n){const d=new Set(l.labels);let c=null,b=0;for(const f of o){const m=f.labels.filter(g=>d.has(g)).length;m>=2&&m>b&&(c=f,b=m)}if(c){const f=c.labels.filter(g=>d.has(g)),m=f.join(", ");if(c.type!==l.type){const g=l.type==="row"?"y":"x",v=c.type==="row"?"y":"x";r.push(`**${m}**: ${l.type} (${g}≈${l.sharedEdge}, ${l.avgGap}px gaps) → ${c.type} (${v}≈${c.sharedEdge}, ${c.avgGap}px gaps)`)}else if(Math.abs(l.sharedEdge-c.sharedEdge)>20||Math.abs(l.avgGap-c.avgGap)>5){const g=l.type==="row"?"y":"x",v=Math.abs(l.sharedEdge-c.sharedEdge)>20?` ${g}: ${l.sharedEdge} → ${c.sharedEdge}`:"",x=Math.abs(l.avgGap-c.avgGap)>5?` gaps: ${l.avgGap}px → ${c.avgGap}px`:"";r.push(`**${m}**: ${l.type} shifted —${v}${x}`)}f.forEach(g=>i.add(g))}else{const f=l.labels.join(", "),m=l.type==="row"?"y":"x";r.push(`**${f}**: ${l.type} (${m}≈${l.sharedEdge}) dissolved`),l.labels.forEach(g=>i.add(g))}}for(const l of o){if(l.labels.every(b=>i.has(b))||l.labels.filter(b=>!i.has(b)).length<2)continue;if(!n.some(b=>b.labels.filter(m=>l.labels.includes(m)).length>=2)){const b=l.type==="row"?"y":"x";r.push(`**${l.labels.join(", ")}**: new ${l.type} (${b}≈${l.sharedEdge}, ${l.avgGap}px gaps)`),l.labels.forEach(f=>i.add(f))}}const s=e.filter(l=>!i.has(l.label));if(s.length>=2){const l={};for(const d of s){const c=Math.round(d.currentRect.x/5)*5;(l[c]??(l[c]=[])).push(d.label)}for(const[d,c]of Object.entries(l))c.length>=2&&r.push(`**${c.join(", ")}**: shared left edge at x≈${d}`)}return r}function Rl(e){if(typeof document>"u")return{viewport:e,contentArea:null};const n=[],o=new Set,r=d=>{o.has(d)||d instanceof HTMLElement&&(d.hasAttribute("data-feedback-toolbar")||cs.has(d.tagName.toLowerCase())||(o.add(d),n.push(d)))},i=document.querySelector("main");i&&r(i);const s=document.querySelector("[role='main']");s&&r(s);for(const d of Array.from(document.body.children))if(r(d),d.children){for(const c of Array.from(d.children))if(r(c),c.children)for(const b of Array.from(c.children))r(b)}let l=null;for(const d of n){const c=d.getBoundingClientRect();if(c.height<50)continue;const b=getComputedStyle(d);if(b.maxWidth&&b.maxWidth!=="none"&&b.maxWidth!=="0px"){(!l||c.width<l.rect.width)&&(l={el:d,rect:c});continue}!l&&c.width<e.width-20&&c.width>100&&(l={el:d,rect:c})}if(l){const{el:d,rect:c}=l;return{viewport:e,contentArea:{width:Math.round(c.width),left:Math.round(c.left),right:Math.round(c.right),centerX:Math.round(c.left+c.width/2),selector:On(d)}}}return{viewport:e,contentArea:null}}function Jd(e){if(typeof document>"u")return null;const n=document.querySelector(e);if(!(n!=null&&n.parentElement))return null;const o=getComputedStyle(n.parentElement),r={parentDisplay:o.display,parentSelector:On(n.parentElement)};return o.display.includes("flex")&&(r.flexDirection=o.flexDirection),o.display.includes("grid")&&o.gridTemplateColumns!=="none"&&(r.gridCols=o.gridTemplateColumns),o.gap&&o.gap!=="normal"&&o.gap!=="0px"&&(r.gap=o.gap),r}function Ll(e,n){const o=n.contentArea,r=o?o.width:n.viewport.width,i=o?o.left:0,s=o?o.centerX:Math.round(n.viewport.width/2),l=Math.round(e.x-i),d=Math.round(i+r-(e.x+e.width)),c=(e.width/r*100).toFixed(1),b=e.x+e.width/2,f=Math.abs(b-s)<20,m=e.width/r>.95,g=[];return m?g.push("`width: 100%` of container"):g.push(`left \`${l}px\` in container, right \`${d}px\`, width \`${c}%\` (\`${Math.round(e.width)}px\`)`),f&&!m&&g.push("centered — `margin-inline: auto`"),g.join(" — ")}function Tl(e){const{viewport:n,contentArea:o}=e;let r=`### Reference Frame
`;if(r+=`- Viewport: \`${n.width}×${n.height}px\`
`,o){const i=o;r+=`- Content area: \`${i.width}px\` wide, left edge at \`x=${i.left}\`, right at \`x=${i.right}\` (\`${i.selector}\`)
`,r+=`- Pixel → CSS translation:
`,r+=`  - **Horizontal position in container**: \`element.x - ${i.left}\` → use as \`margin-left\` or \`left\`
`,r+=`  - **Width as % of container**: \`element.width / ${i.width} × 100\` → use as \`width: X%\`
`,r+="  - **Vertical gap between elements**: `nextElement.y - (prevElement.y + prevElement.height)` → use as `margin-top` or `gap`\n",r+=`  - **Centered**: if \`|element.centerX - ${i.centerX}| < 20px\` → use \`margin-inline: auto\`
`}else r+=`- No distinct content container — elements positioned relative to full viewport
`,r+=`- Pixel → CSS translation:
`,r+=`  - **Width as % of viewport**: \`element.width / ${n.width} × 100\` → use as \`width: X%\`
`,r+=`  - **Centered**: if \`|(element.x + element.width/2) - ${Math.round(n.width/2)}| < 20px\` → use \`margin-inline: auto\`
`;return r+=`
`,r}function Zd(e){const n=Jd(e);if(!n)return null;let o=`\`${n.parentDisplay}\``;return n.flexDirection&&(o+=`, flex-direction: \`${n.flexDirection}\``),n.gridCols&&(o+=`, grid-template-columns: \`${n.gridCols}\``),n.gap&&(o+=`, gap: \`${n.gap}\``),`Parent: ${o} (\`${n.parentSelector}\`)`}function Ui(e,n,o,r="standard"){var T,O,Se,z;if(e.length===0)return"";const i=[...e].sort((p,J)=>Math.abs(p.y-J.y)<20?p.x-J.x:p.y-J.y);let s="";if(o!=null&&o.blankCanvas?(s+=`## Wireframe: New Page

`,o.wireframePurpose&&(s+=`> **Purpose:** ${o.wireframePurpose}
>
`),s+=`> ${e.length} component${e.length!==1?"s":""} placed — this is a standalone wireframe, not related to the current page.
>
> This wireframe is a rough sketch for exploring ideas.

`):s+=`## Design Layout

> ${e.length} component${e.length!==1?"s":""} placed

`,r==="compact")return s+=`### Components
`,i.forEach((p,J)=>{var X;const ie=((X=Zt[p.type])==null?void 0:X.label)||p.type;s+=`${J+1}. **${ie}** — \`${Math.round(p.width)}×${Math.round(p.height)}px\` at \`(${Math.round(p.x)}, ${Math.round(p.y)})\`
`,p.text&&(s+=`   - Note: "${p.text}"
`)}),s;const l=Rl(n);s+=Tl(l),s+=`### Components
`,i.forEach((p,J)=>{var F;const ie=((F=Zt[p.type])==null?void 0:F.label)||p.type,X={x:p.x,y:p.y,width:p.width,height:p.height};s+=`${J+1}. **${ie}** — \`${Math.round(p.width)}×${Math.round(p.height)}px\` at \`(${Math.round(p.x)}, ${Math.round(p.y)})\`
`,p.text&&(s+=`   - Note: "${p.text}"
`);const xe=ds(X),_e=El(xe,{includeLeftRight:r==="detailed"||r==="forensic"});for(const we of _e)s+=`   - ${we}
`;const se=Ll(X,l);se&&(s+=`   - CSS: ${se}
`)}),s+=`
### Layout Analysis
`;const d=[];for(const p of i){const J=d.find(ie=>Math.abs(ie.y-p.y)<30);J?J.items.push(p):d.push({y:p.y,items:[p]})}if(d.sort((p,J)=>p.y-J.y),d.forEach((p,J)=>{p.items.sort((X,xe)=>X.x-xe.x);const ie=p.items.map(X=>{var xe;return((xe=Zt[X.type])==null?void 0:xe.label)||X.type});if(p.items.length===1){const xe=p.items[0].width>n.width*.8;s+=`- Row ${J+1} (y≈${Math.round(p.y)}): ${ie[0]}${xe?" — full width":""}
`}else s+=`- Row ${J+1} (y≈${Math.round(p.y)}): ${ie.join(" | ")} — ${p.items.length} items side by side
`}),r==="detailed"||r==="forensic"){s+=`
### Spacing & Gaps
`;for(let p=0;p<i.length-1;p++){const J=i[p],ie=i[p+1],X=((T=Zt[J.type])==null?void 0:T.label)||J.type,xe=((O=Zt[ie.type])==null?void 0:O.label)||ie.type,W=Math.round(ie.y-(J.y+J.height)),_e=Math.round(ie.x-(J.x+J.width));Math.abs(J.y-ie.y)<30?s+=`- ${X} → ${xe}: \`${_e}px\` horizontal gap
`:s+=`- ${X} → ${xe}: \`${W}px\` vertical gap
`}if(r==="forensic"&&i.length>2){s+=`
### All Pairwise Gaps
`;for(let p=0;p<i.length;p++)for(let J=p+1;J<i.length;J++){const ie=i[p],X=i[J],xe=((Se=Zt[ie.type])==null?void 0:Se.label)||ie.type,W=((z=Zt[X.type])==null?void 0:z.label)||X.type,_e=Math.round(X.y-(ie.y+ie.height)),se=Math.round(X.x-(ie.x+ie.width));s+=`- ${xe} ↔ ${W}: h=\`${se}px\` v=\`${_e}px\`
`}}r==="forensic"&&(s+=`
### Z-Order (placement order)
`,e.forEach((p,J)=>{var X;const ie=((X=Zt[p.type])==null?void 0:X.label)||p.type;s+=`${J}. ${ie} at \`(${Math.round(p.x)}, ${Math.round(p.y)})\`
`}))}s+=`
### Suggested Implementation
`;const c=i.some(p=>p.type==="navigation"),b=i.some(p=>p.type==="hero"),f=i.some(p=>p.type==="sidebar"),m=i.some(p=>p.type==="footer"),g=i.filter(p=>p.type==="card"),v=i.filter(p=>p.type==="form"),x=i.filter(p=>p.type==="table"),$=i.filter(p=>p.type==="modal");if(c&&(s+=`- Top navigation bar with logo + nav links + CTA
`),b&&(s+=`- Hero section with heading, subtext, and call-to-action
`),f&&(s+=`- Sidebar layout — use CSS Grid with sidebar + main content area
`),g.length>1?s+=`- ${g.length}-column card grid — use CSS Grid or Flexbox
`:g.length===1&&(s+=`- Card component with image + content area
`),v.length>0&&(s+=`- ${v.length} form${v.length>1?"s":""} — add proper labels, validation, and submit handling
`),x.length>0&&(s+=`- Data table — consider sortable columns and pagination
`),$.length>0&&(s+=`- Modal dialog — add overlay backdrop and focus trapping
`),m&&(s+=`- Multi-column footer with links
`),r==="detailed"||r==="forensic"){if(s+=`
### CSS Suggestions
`,f){const p=i.find(J=>J.type==="sidebar");s+=`- \`display: grid; grid-template-columns: ${Math.round(p.width)}px 1fr;\`
`}if(g.length>1){const p=Math.round(g[0].width);s+=`- \`display: grid; grid-template-columns: repeat(${g.length}, ${p}px); gap: 16px;\`
`}c&&(s+="- Navigation: `position: sticky; top: 0; z-index: 50;`\n")}return s}function Xi(e,n="standard",o){const{sections:r}=e,i=[];for(const f of r){const m=f.originalRect,g=f.currentRect,v=Math.abs(m.x-g.x)>1||Math.abs(m.y-g.y)>1,x=Math.abs(m.width-g.width)>1||Math.abs(m.height-g.height)>1,$=!!f.note;if(!v&&!x&&!$){n==="forensic"&&i.push({section:f,posMoved:!1,sizeChanged:!1});continue}i.push({section:f,posMoved:v,sizeChanged:x})}if(i.length===0||n!=="forensic"&&i.every(f=>!f.posMoved&&!f.sizeChanged&&!f.section.note))return"";let s=`## Suggested Layout Changes

`;const l=o?o.width:typeof window<"u"?window.innerWidth:0,d=o?o.height:typeof window<"u"?window.innerHeight:0,c=Rl({width:l,height:d});n!=="compact"&&(s+=Tl(c)),n==="forensic"&&(s+=`> Detected at: \`${new Date(e.detectedAt).toISOString()}\`
`,s+=`> Total sections: ${r.length}

`);const b=f=>r.map(m=>({label:m.label,selector:m.selector,rect:f==="original"?m.originalRect:m.currentRect}));s+=`**Changes:**
`;for(const{section:f,posMoved:m,sizeChanged:g}of i){const v=f.originalRect,x=f.currentRect;if(!m&&!g){f.note?(s+=`- **${f.label}** — note only
`,s+=`  - Note: "${f.note}"
`):s+=`- ${f.label} — unchanged at (${Math.round(x.x)}, ${Math.round(x.y)}) ${Math.round(x.width)}×${Math.round(x.height)}px
`;continue}if(n==="compact"){m&&g?s+=`- Suggested: move **${f.label}** to (${Math.round(x.x)}, ${Math.round(x.y)}) ${Math.round(x.width)}×${Math.round(x.height)}px
`:m?s+=`- Suggested: move **${f.label}** to (${Math.round(x.x)}, ${Math.round(x.y)})
`:s+=`- Suggested: resize **${f.label}** to ${Math.round(x.width)}×${Math.round(x.height)}px
`,f.note&&(s+=`  - Note: "${f.note}"
`);continue}if(m&&g?s+=`- Suggested: move and resize **${f.label}**
`:m?s+=`- Suggested: move **${f.label}**
`:s+=`- Suggested: resize **${f.label}** from ${Math.round(v.width)}×${Math.round(v.height)}px to ${Math.round(x.width)}×${Math.round(x.height)}px
`,f.note&&(s+=`  - Note: "${f.note}"
`),m){const T=ds(v,b("original")),O=ds(x,b("current")),Se=g?{width:v.width,height:v.height}:void 0;s+=`  - Currently ${Gd(T,{x:v.x,y:v.y},Se)}
`;const z=g?{width:x.width,height:x.height}:void 0,p=`at (${Math.round(x.x)}, ${Math.round(x.y)})`,J=z?`, ${Math.round(z.width)}×${Math.round(z.height)}px`:"",X=El(O,{includeLeftRight:n==="detailed"||n==="forensic"});if(X.length>0){s+=`  - Suggested position ${p}${J}: ${X[0]}
`;for(let W=1;W<X.length;W++)s+=`    ${X[W]}
`}else s+=`  - Suggested position ${p}${J}
`;const xe=Ll(x,c);xe&&(s+=`  - CSS: ${xe}
`)}const $=Zd(f.selector);if($&&(s+=`  - ${$}
`),s+=`  - Selector: \`${f.selector}\`
`,n==="detailed"||n==="forensic"){const T=f.className?`${f.tagName}.${f.className.split(" ")[0]}`:f.tagName;T!==f.selector&&(s+=`  - Element: \`${T}\`
`),f.role&&(s+=`  - Role: \`${f.role}\`
`),n==="forensic"&&f.textSnippet&&(s+=`  - Text: "${f.textSnippet}"
`)}n==="forensic"&&(s+=`  - Original rect: \`{ x: ${Math.round(v.x)}, y: ${Math.round(v.y)}, w: ${Math.round(v.width)}, h: ${Math.round(v.height)} }\`
`,s+=`  - Current rect: \`{ x: ${Math.round(x.x)}, y: ${Math.round(x.y)}, w: ${Math.round(x.width)}, h: ${Math.round(x.height)} }\`
`)}if(n!=="compact"){const f=i.filter(g=>g.posMoved).map(g=>({label:g.section.label,originalRect:g.section.originalRect,currentRect:g.section.currentRect})),m=Kd(f);if(m.length>0){s+=`
### Layout Summary
`;for(const g of m)s+=`- ${g}
`}}if(n!=="compact"&&r.length>1){s+=`
### All Sections (current positions)
`;const f=[...r].sort((m,g)=>Math.abs(m.currentRect.y-g.currentRect.y)<20?m.currentRect.x-g.currentRect.x:m.currentRect.y-g.currentRect.y);for(const m of f){const g=m.currentRect,v=Math.abs(g.x-m.originalRect.x)>1||Math.abs(g.y-m.originalRect.y)>1||Math.abs(g.width-m.originalRect.width)>1||Math.abs(g.height-m.originalRect.height)>1;s+=`- ${m.label}: \`${Math.round(g.width)}×${Math.round(g.height)}px\` at \`(${Math.round(g.x)}, ${Math.round(g.y)})\`${v?" ← suggested":""}
`}}return s}var _s="feedback-annotations-",Bl=7;function ws(e){return`${_s}${e}`}function wn(e){if(typeof window>"u")return[];try{const n=localStorage.getItem(ws(e));if(!n)return[];const o=JSON.parse(n),r=Date.now()-Bl*24*60*60*1e3;return o.filter(i=>!i.timestamp||i.timestamp>r)}catch{return[]}}function Dl(e,n){if(!(typeof window>"u"))try{localStorage.setItem(ws(e),JSON.stringify(n))}catch{}}function e_(){const e=new Map;if(typeof window>"u")return e;try{const n=Date.now()-Bl*24*60*60*1e3;for(let o=0;o<localStorage.length;o++){const r=localStorage.key(o);if(r!=null&&r.startsWith(_s)){const i=r.slice(_s.length),s=localStorage.getItem(r);if(s){const d=JSON.parse(s).filter(c=>!c.timestamp||c.timestamp>n);d.length>0&&e.set(i,d)}}}}catch{}return e}function qr(e,n,o){const r=n.map(i=>({...i,_syncedTo:o}));Dl(e,r)}var vs="agentation-design-";function t_(e){if(typeof window>"u")return[];try{const n=localStorage.getItem(`${vs}${e}`);return n?JSON.parse(n):[]}catch{return[]}}function n_(e,n){if(!(typeof window>"u"))try{localStorage.setItem(`${vs}${e}`,JSON.stringify(n))}catch{}}function o_(e){if(!(typeof window>"u"))try{localStorage.removeItem(`${vs}${e}`)}catch{}}var ks="agentation-rearrange-";function r_(e){if(typeof window>"u")return null;try{const n=localStorage.getItem(`${ks}${e}`);return n?JSON.parse(n):null}catch{return null}}function s_(e,n){if(!(typeof window>"u"))try{localStorage.setItem(`${ks}${e}`,JSON.stringify(n))}catch{}}function i_(e){if(!(typeof window>"u"))try{localStorage.removeItem(`${ks}${e}`)}catch{}}var Ss="agentation-wireframe-";function l_(e){if(typeof window>"u")return null;try{const n=localStorage.getItem(`${Ss}${e}`);return n?JSON.parse(n):null}catch{return null}}function Qi(e,n){if(!(typeof window>"u"))try{localStorage.setItem(`${Ss}${e}`,JSON.stringify(n))}catch{}}function tr(e){if(!(typeof window>"u"))try{localStorage.removeItem(`${Ss}${e}`)}catch{}}var Pl="agentation-session-";function Cs(e){return`${Pl}${e}`}function a_(e){if(typeof window>"u")return null;try{return localStorage.getItem(Cs(e))}catch{return null}}function Vr(e,n){if(!(typeof window>"u"))try{localStorage.setItem(Cs(e),n)}catch{}}function c_(e){if(!(typeof window>"u"))try{localStorage.removeItem(Cs(e))}catch{}}var Al=`${Pl}toolbar-hidden`;function d_(){if(typeof window>"u")return!1;try{return sessionStorage.getItem(Al)==="1"}catch{return!1}}function __(e){if(!(typeof window>"u"))try{e&&sessionStorage.setItem(Al,"1")}catch{}}async function Gr(e,n){const o=await fetch(`${e}/sessions`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:n})});if(!o.ok)throw new Error(`Failed to create session: ${o.status}`);return o.json()}async function qi(e,n){const o=await fetch(`${e}/sessions/${n}`);if(!o.ok)throw new Error(`Failed to get session: ${o.status}`);return o.json()}async function Vi(e,n,o){!o.elementPath&&(o.element==="body"||o.element==="html")&&(o={...o,elementPath:o.element});const r=await fetch(`${e}/sessions/${n}/annotations`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)});if(!r.ok)throw new Error(`Failed to sync annotation: ${r.status}`);return r.json()}async function Kr(e,n,o){const r=await fetch(`${e}/annotations/${n}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)});if(!r.ok)throw new Error(`Failed to update annotation: ${r.status}`);return r.json()}async function nr(e,n){const o=await fetch(`${e}/annotations/${n}`,{method:"DELETE"});if(!o.ok)throw new Error(`Failed to delete annotation: ${o.status}`)}var Ke={FunctionComponent:0,ClassComponent:1,IndeterminateComponent:2,HostRoot:3,HostPortal:4,HostComponent:5,HostText:6,Fragment:7,Mode:8,ContextConsumer:9,ContextProvider:10,ForwardRef:11,Profiler:12,SuspenseComponent:13,MemoComponent:14,SimpleMemoComponent:15,LazyComponent:16,IncompleteClassComponent:17,DehydratedFragment:18,SuspenseListComponent:19,ScopeComponent:21,OffscreenComponent:22,LegacyHiddenComponent:23,CacheComponent:24,TracingMarkerComponent:25,HostHoistable:26,HostSingleton:27,IncompleteFunctionComponent:28,Throw:29,ViewTransitionComponent:30,ActivityComponent:31},Gi=new Set(["Component","PureComponent","Fragment","Suspense","Profiler","StrictMode","Routes","Route","Outlet","Root","ErrorBoundaryHandler","HotReload","Hot"]),Ki=[/Boundary$/,/BoundaryHandler$/,/Provider$/,/Consumer$/,/^(Inner|Outer)/,/Router$/,/^Client(Page|Segment|Root)/,/^Segment(ViewNode|Node)$/,/^LayoutSegment/,/^Server(Root|Component|Render)/,/^RSC/,/Context$/,/^Hot(Reload)?$/,/^(Dev|React)(Overlay|Tools|Root)/,/Overlay$/,/Handler$/,/^With[A-Z]/,/Wrapper$/,/^Root$/],u_=[/Page$/,/View$/,/Screen$/,/Section$/,/Card$/,/List$/,/Item$/,/Form$/,/Modal$/,/Dialog$/,/Button$/,/Nav$/,/Header$/,/Footer$/,/Layout$/,/Panel$/,/Tab$/,/Menu$/];function h_(e){const n=(e==null?void 0:e.mode)??"filtered";let o=Gi;if(e!=null&&e.skipExact){const r=e.skipExact instanceof Set?e.skipExact:new Set(e.skipExact);o=new Set([...Gi,...r])}return{maxComponents:(e==null?void 0:e.maxComponents)??6,maxDepth:(e==null?void 0:e.maxDepth)??30,mode:n,skipExact:o,skipPatterns:e!=null&&e.skipPatterns?[...Ki,...e.skipPatterns]:Ki,userPatterns:(e==null?void 0:e.userPatterns)??u_,filter:e==null?void 0:e.filter}}function m_(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/([A-Z])([A-Z][a-z])/g,"$1-$2").toLowerCase()}function p_(e,n=10){const o=new Set;let r=e,i=0;for(;r&&i<n;)r.className&&typeof r.className=="string"&&r.className.split(/\s+/).forEach(s=>{if(s.length>1){const l=s.replace(/[_][a-zA-Z0-9]{5,}.*$/,"").toLowerCase();l.length>1&&o.add(l)}}),r=r.parentElement,i++;return o}function g_(e,n){const o=m_(e);for(const r of n){if(r===o)return!0;const i=o.split("-").filter(l=>l.length>2),s=r.split("-").filter(l=>l.length>2);for(const l of i)for(const d of s)if(l===d||l.includes(d)||d.includes(l))return!0}return!1}function f_(e,n,o,r){if(o.filter)return o.filter(e,n);switch(o.mode){case"all":return!0;case"filtered":return!(o.skipExact.has(e)||o.skipPatterns.some(i=>i.test(e)));case"smart":return o.skipExact.has(e)||o.skipPatterns.some(i=>i.test(e))?!1:!!(r&&g_(e,r)||o.userPatterns.some(i=>i.test(e)));default:return!0}}var Jn=null,y_=new WeakMap;function Jr(e){return Object.keys(e).some(n=>n.startsWith("__reactFiber$")||n.startsWith("__reactInternalInstance$")||n.startsWith("__reactProps$"))}function b_(){if(Jn!==null)return Jn;if(typeof document>"u")return!1;if(document.body&&Jr(document.body))return Jn=!0,!0;const e=["#root","#app","#__next","[data-reactroot]"];for(const n of e){const o=document.querySelector(n);if(o&&Jr(o))return Jn=!0,!0}if(document.body){for(const n of document.body.children)if(Jr(n))return Jn=!0,!0}return Jn=!1,!1}var yo={map:y_};function x_(e){return Object.keys(e).find(o=>o.startsWith("__reactFiber$")||o.startsWith("__reactInternalInstance$"))||null}function w_(e){const n=x_(e);return n?e[n]:null}function Dn(e){return e?e.displayName?e.displayName:e.name?e.name:null:null}function v_(e){var i;const{tag:n,type:o,elementType:r}=e;if(n===Ke.HostComponent||n===Ke.HostText||n===Ke.HostHoistable||n===Ke.HostSingleton||n===Ke.Fragment||n===Ke.Mode||n===Ke.Profiler||n===Ke.DehydratedFragment||n===Ke.HostRoot||n===Ke.HostPortal||n===Ke.ScopeComponent||n===Ke.OffscreenComponent||n===Ke.LegacyHiddenComponent||n===Ke.CacheComponent||n===Ke.TracingMarkerComponent||n===Ke.Throw||n===Ke.ViewTransitionComponent||n===Ke.ActivityComponent)return null;if(n===Ke.ForwardRef){const s=r;if(s!=null&&s.render){const l=Dn(s.render);if(l)return l}return s!=null&&s.displayName?s.displayName:Dn(o)}if(n===Ke.MemoComponent||n===Ke.SimpleMemoComponent){const s=r;if(s!=null&&s.type){const l=Dn(s.type);if(l)return l}return s!=null&&s.displayName?s.displayName:Dn(o)}if(n===Ke.ContextProvider){const s=o;return(i=s==null?void 0:s._context)!=null&&i.displayName?`${s._context.displayName}.Provider`:null}if(n===Ke.ContextConsumer){const s=o;return s!=null&&s.displayName?`${s.displayName}.Consumer`:null}if(n===Ke.LazyComponent){const s=r;return(s==null?void 0:s._status)===1&&s._result?Dn(s._result):null}return n===Ke.SuspenseComponent||n===Ke.SuspenseListComponent?null:n===Ke.IncompleteClassComponent||n===Ke.IncompleteFunctionComponent||n===Ke.FunctionComponent||n===Ke.ClassComponent||n===Ke.IndeterminateComponent?Dn(o):null}function k_(e){return e.length<=2||e.length<=3&&e===e.toLowerCase()}function S_(e,n){const o=h_(n),r=o.mode==="all";if(r){const c=yo.map.get(e);if(c!==void 0)return c}if(!b_()){const c={path:null,components:[]};return r&&yo.map.set(e,c),c}const i=o.mode==="smart"?p_(e):void 0,s=[];try{let c=w_(e),b=0;for(;c&&b<o.maxDepth&&s.length<o.maxComponents;){const f=v_(c);f&&!k_(f)&&f_(f,b,o,i)&&s.push(f),c=c.return,b++}}catch{const c={path:null,components:[]};return r&&yo.map.set(e,c),c}if(s.length===0){const c={path:null,components:[]};return r&&yo.map.set(e,c),c}const d={path:s.slice().reverse().map(c=>`<${c}>`).join(" "),components:s};return r&&yo.map.set(e,d),d}var bo={FunctionComponent:0,IndeterminateComponent:2,ForwardRef:11,MemoComponent:14,SimpleMemoComponent:15};function C_(e){if(!e||typeof e!="object")return null;const n=Object.keys(e),o=n.find(s=>s.startsWith("__reactFiber$"));if(o)return e[o]||null;const r=n.find(s=>s.startsWith("__reactInternalInstance$"));if(r)return e[r]||null;const i=n.find(s=>{if(!s.startsWith("__react"))return!1;const l=e[s];return l&&typeof l=="object"&&"_debugSource"in l});return i&&e[i]||null}function Mo(e){if(!e.type||typeof e.type=="string")return null;if(typeof e.type=="object"||typeof e.type=="function"){const n=e.type;if(n.displayName)return n.displayName;if(n.name)return n.name}return null}function M_(e,n=50){var i;let o=e,r=0;for(;o&&r<n;){if(o._debugSource)return{source:o._debugSource,componentName:Mo(o)};if((i=o._debugOwner)!=null&&i._debugSource)return{source:o._debugOwner._debugSource,componentName:Mo(o._debugOwner)};o=o.return,r++}return null}function $_(e){let n=e,o=0;const r=50;for(;n&&o<r;){const i=n,s=["_debugSource","__source","_source","debugSource"];for(const l of s){const d=i[l];if(d&&typeof d=="object"&&"fileName"in d)return{source:d,componentName:Mo(n)}}if(n.memoizedProps){const l=n.memoizedProps;if(l.__source&&typeof l.__source=="object"){const d=l.__source;if(d.fileName&&d.lineNumber)return{source:{fileName:d.fileName,lineNumber:d.lineNumber,columnNumber:d.columnNumber},componentName:Mo(n)}}}n=n.return,o++}return null}var or=new Map;function I_(e){var i;const n=e.tag,o=e.type,r=e.elementType;if(typeof o=="string"||o==null||typeof o=="function"&&((i=o.prototype)!=null&&i.isReactComponent))return null;if((n===bo.FunctionComponent||n===bo.IndeterminateComponent)&&typeof o=="function")return o;if(n===bo.ForwardRef&&r){const s=r.render;if(typeof s=="function")return s}if((n===bo.MemoComponent||n===bo.SimpleMemoComponent)&&r){const s=r.type;if(typeof s=="function")return s}return typeof o=="function"?o:null}function N_(){const e=Ma,n=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;if(n&&"H"in n)return{get:()=>n.H,set:r=>{n.H=r}};const o=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;if(o){const r=o.ReactCurrentDispatcher;if(r&&"current"in r)return{get:()=>r.current,set:i=>{r.current=i}}}return null}function E_(e,n){const o=e.split(`
`),r=[/source-location/,/\/dist\/index\./,/node_modules\//,/react-dom/,/react\.development/,/react\.production/,/chunk-[A-Z0-9]+/i,/\/_next\/static\/chunks\//,/\/\.vite\/deps\//,/\/_astro\//,/\/assets\/[^\s/]+[-.][\w-]{8,}\.m?js(?:[?:]|$)/,/react-stack-bottom-frame/,/react-reconciler/,/scheduler/,/<anonymous>/],i=/^\s*at\s+(?:.*?\s+\()?(.+?):(\d+):(\d+)\)?$/,s=/^[^@]*@(.+?):(\d+):(\d+)$/;for(const l of o){const d=l.trim();if(!d||r.some(b=>b.test(d)))continue;if(n){const b=n.replace(/^bound /,"").replace(/[.*+?^${}()|[\]\\]/g,"\\$&");if(!new RegExp(`(?:at (?:Object\\.)?|^)${b}(?: \\(|@| \\[)`).test(d))continue}const c=i.exec(d)||s.exec(d);if(c)return{fileName:c[1],line:parseInt(c[2],10),column:parseInt(c[3],10)}}return null}function R_(e){let n=e;return n=n.replace(/[?#].*$/,""),n=n.replace(/^turbopack:\/\/\/\[project\]\//,""),n=n.replace(/^webpack-internal:\/\/\/\.\//,""),n=n.replace(/^webpack-internal:\/\/\//,""),n=n.replace(/^webpack:\/\/\/\.\//,""),n=n.replace(/^webpack:\/\/\//,""),n=n.replace(/^turbopack:\/\/\//,""),n=n.replace(/^https?:\/\/[^/]+\//,""),n=n.replace(/^file:\/\/\//,"/"),n=n.replace(/^\([^)]+\)\/\.\//,""),n=n.replace(/^\.\//,""),n}function L_(e){const n=I_(e);if(!n)return null;if(or.has(n))return or.get(n);const o=N_();if(!o)return or.set(n,null),null;const r=o.get();let i=null;try{const s=new Proxy({},{get(){throw new Error("probe")}});o.set(s);try{n({})}catch(l){if(l instanceof Error&&l.message==="probe"&&l.stack){const d=E_(l.stack,n.name);d&&(i={fileName:R_(d.fileName),lineNumber:d.line,columnNumber:d.column,componentName:Mo(e)||void 0})}}}finally{o.set(r)}return or.set(n,i),i}function T_(e,n=15){let o=e,r=0;for(;o&&r<n;){const i=L_(o);if(i)return i;o=o.return,r++}return null}function us(e){const n=C_(e);if(!n)return{found:!1,reason:"no-fiber",isReactApp:!1,isProduction:!1};let o=M_(n);if(o||(o=$_(n)),o!=null&&o.source)return{found:!0,source:{fileName:o.source.fileName,lineNumber:o.source.lineNumber,columnNumber:o.source.columnNumber,componentName:o.componentName||void 0},isReactApp:!0,isProduction:!1};const r=T_(n);return r?{found:!0,source:r,isReactApp:!0,isProduction:!1}:{found:!1,reason:"no-debug-source",isReactApp:!0,isProduction:!1}}function B_(e,n="path"){const{fileName:o,lineNumber:r,columnNumber:i}=e;let s=`${o}:${r}`;return i!==void 0&&(s+=`:${i}`),n==="vscode"?`vscode://file${o.startsWith("/")?"":"/"}${s}`:s}function D_(e,n=10){let o=e,r=0;for(;o&&r<n;){const i=us(o);if(i.found)return i;o=o.parentElement,r++}return us(e)}var xo=[{value:"compact",label:"Compact"},{value:"standard",label:"Standard"},{value:"detailed",label:"Detailed"},{value:"forensic",label:"Forensic"}];function cr(e,n){let o=`## Page Feedback: ${e}
`;const r=n==null?void 0:n.replace(/[\r\n\t]+/g," ").trim();return r&&(o+=`**App:** ${r.replace(/[\\`*_\[\]<>]/g,"\\$&")}
`),o}function Ji(e,n,o="standard",r={}){if(e.length===0)return"";const i=typeof window<"u"?`${window.innerWidth}×${window.innerHeight}`:"unknown";let s=cr(n,r.appName);return o==="forensic"?(s+=`
**Environment:**
`,s+=`- Viewport: ${i}
`,typeof window<"u"&&(s+=`- URL: ${window.location.href}
`,s+=`- User Agent: ${navigator.userAgent}
`,s+=`- Timestamp: ${new Date().toISOString()}
`,s+=`- Device Pixel Ratio: ${window.devicePixelRatio}
`),s+=`
---
`):o!=="compact"&&(s+=`**Viewport:** ${i}
`),s+=`
`,e.forEach((l,d)=>{o==="compact"?(s+=`${d+1}. **${l.element}**${l.sourceFile?` (${l.sourceFile})`:""}: ${l.comment}`,l.selectedText&&(s+=` (re: "${l.selectedText.slice(0,30)}${l.selectedText.length>30?"...":""}")`),s+=`
`):o==="forensic"?(s+=`### ${d+1}. ${l.element}
`,l.isMultiSelect&&l.fullPath&&(s+=`*Forensic data shown for first element of selection*
`),l.fullPath&&(s+=`**Full DOM Path:** ${l.fullPath}
`),l.cssClasses&&(s+=`**CSS Classes:** ${l.cssClasses}
`),l.boundingBox&&(s+=`**Position:** x:${Math.round(l.boundingBox.x)}, y:${Math.round(l.boundingBox.y)} (${Math.round(l.boundingBox.width)}×${Math.round(l.boundingBox.height)}px)
`),s+=`**Annotation at:** ${l.x.toFixed(1)}% from left, ${Math.round(l.y)}px from top
`,l.selectedText&&(s+=`**Selected text:** "${l.selectedText}"
`),l.nearbyText&&!l.selectedText&&(s+=`**Context:** ${l.nearbyText.slice(0,100)}
`),l.computedStyles&&(s+=`**Computed Styles:** ${l.computedStyles}
`),l.accessibility&&(s+=`**Accessibility:** ${l.accessibility}
`),l.nearbyElements&&(s+=`**Nearby Elements:** ${l.nearbyElements}
`),l.sourceFile&&(s+=`**Source:** ${l.sourceFile}
`),l.reactComponents&&(s+=`**React:** ${l.reactComponents}
`),s+=`**Feedback:** ${l.comment}

`):(s+=`### ${d+1}. ${l.element}
`,s+=`**Location:** ${l.elementPath}
`,l.sourceFile&&(s+=`**Source:** ${l.sourceFile}
`),l.reactComponents&&(s+=`**React:** ${l.reactComponents}
`),o==="detailed"&&(l.cssClasses&&(s+=`**Classes:** ${l.cssClasses}
`),l.boundingBox&&(s+=`**Position:** ${Math.round(l.boundingBox.x)}px, ${Math.round(l.boundingBox.y)}px (${Math.round(l.boundingBox.width)}×${Math.round(l.boundingBox.height)}px)
`)),l.selectedText&&(s+=`**Selected text:** "${l.selectedText}"
`),o==="detailed"&&l.nearbyText&&!l.selectedText&&(s+=`**Context:** ${l.nearbyText.slice(0,100)}
`),s+=`**Feedback:** ${l.comment}

`)}),s.trim()}function Zi(e,n,o="markdown"){return o==="markdown"?n:[...new Set(e.map(r=>{var i;return o==="source"?r.sourceFile:o==="classes"?r.cssClasses:(i=r.attributes)==null?void 0:i[o.attribute]}).filter(r=>typeof r=="string"&&r.length>0))].join(`
`)}async function P_(e){var n;if(typeof window>"u")return!1;try{if((n=navigator.clipboard)!=null&&n.writeText)return await navigator.clipboard.writeText(e),!0}catch{}return A_(e)}function A_(e){var d;const n=document.createElement("textarea");let o=document.activeElement;for(;(d=o==null?void 0:o.shadowRoot)!=null&&d.activeElement;)o=o.shadowRoot.activeElement;const r=o instanceof HTMLInputElement||o instanceof HTMLTextAreaElement?o:null,i=r&&r.selectionStart!==null?{start:r.selectionStart,end:r.selectionEnd,direction:r.selectionDirection}:null,s=document.getSelection(),l=s?Array.from({length:s.rangeCount},(c,b)=>s.getRangeAt(b).cloneRange()):[];try{return n.value=e,n.setAttribute("readonly",""),n.style.cssText="position:fixed;left:-9999px;top:0;opacity:0;pointer-events:none;",document.body.appendChild(n),n.focus({preventScroll:!0}),n.select(),n.setSelectionRange(0,e.length),document.execCommand("copy")}catch{return!1}finally{if(n.remove(),o instanceof HTMLElement&&o.isConnected&&(o.focus({preventScroll:!0}),r&&i&&r.setSelectionRange(i.start,i.end,i.direction)),s){s.removeAllRanges();for(const c of l)s.addRange(c)}}}function el(e){if(!e)return e;try{const n=new URL(e,"http://agentation.invalid");return n.pathname+n.search+n.hash}catch{return e}}function tl(e,n,o=[]){const r=new Map,i=new Map(o.map(d=>[d.id,d]));let s=!1;async function l(d,c){if(s||c.running||c.timer)return;const b=c.desired,f=n.get(d);if(!b&&!f){r.delete(d),n.delete(d);return}const m=b?JSON.stringify(b):void 0;if(!(b&&f&&c.synced===m)){c.running=!0;try{if(!b)await e.remove(f),n.delete(d),c.synced=void 0;else if(f)await e.update(f,b),c.synced=m;else{n.set(d,"");const g=await e.create(b);n.set(d,g.id),c.synced=m}c.retries=0,c.running=!1,!s&&r.get(d)===c&&l(d,c)}catch(g){if(c.running=!1,!s&&r.get(d)===c&&(console.warn("[Agentation] Failed to sync layout feedback:",g),n.get(d)&&c.retries<3)){const v=500*2**c.retries++;c.timer=Ve(()=>{c.timer=void 0,l(d,c)},v)}}}}return{replace(d){const c=new Map(d.map(b=>[b.id,b]));for(const[b,f]of c){let m=r.get(b);if(!m){m={running:!1,retries:0},r.set(b,m);const g=[...i.values()].find(v=>v.kind===f.kind&&el(v.url)===el(f.url)&&(f.kind==="placement"?v.timestamp===f.timestamp&&v.element===f.element:v.element===f.element));g&&(n.set(b,g.id),i.delete(g.id))}JSON.stringify(m.desired)!==JSON.stringify(f)&&(m.retries=0,m.timer&&clearTimeout(m.timer),m.timer=void 0),m.desired=f}for(const[b,f]of r)c.has(b)||(f.desired=void 0),l(b,f)},forget(d){const c=r.get(d);c!=null&&c.timer&&clearTimeout(c.timer),r.delete(d),n.delete(d)},dispose(){s=!0;for(const d of r.values())d.timer&&clearTimeout(d.timer)}}}function O_(e,n,o,r){let i=!1,s,l,d=1e3,c;const b=v=>{!i&&((v==null?void 0:v.status)==="resolved"||(v==null?void 0:v.status)==="dismissed")&&r(v)},f=async()=>{if(i||c||!o())return;const v=new AbortController;c=v;const x=Ve(()=>v.abort(),5e3);try{const $=await fetch(`${e}/sessions/${n}`,{signal:v.signal});if(!$.ok)return;const T=await $.json();!i&&!v.signal.aborted&&Array.isArray(T.annotations)&&T.annotations.forEach(b)}catch{}finally{clearTimeout(x),c===v&&(c=void 0)}},m=()=>{if(i)return;const v=new EventSource(`${e}/sessions/${n}/events`),x=()=>{d=1e3,f()},$=O=>{try{b(JSON.parse(O.data).payload)}catch{}},T=()=>{v.readyState!==EventSource.CLOSED||i||l!==void 0||(s==null||s(),l=Ve(()=>{l=void 0,m()},d),d=Math.min(d*2,1e4))};v.addEventListener("open",x),v.addEventListener("annotation.updated",$),v.addEventListener("error",T),s=()=>{v.removeEventListener("open",x),v.removeEventListener("annotation.updated",$),v.removeEventListener("error",T),v.close()}};m();const g=pl(()=>{f()},1e4);return()=>{i=!0,s==null||s(),l!==void 0&&clearTimeout(l),clearInterval(g),c==null||c.abort()}}var W_=`.styles-module__surface___7qnpJ {
  padding: 0;
  width: var(--preview-width, 200px);
  max-width: calc(100vw - 24px);
  overflow: auto;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  border-radius: 12px;
  z-index: inherit;
  will-change: auto;
  transform: translateX(-50%);
  transition: left 200ms cubic-bezier(0.2, 0.8, 0.2, 1), top 200ms cubic-bezier(0.2, 0.8, 0.2, 1), transform 200ms cubic-bezier(0.2, 0.8, 0.2, 1), width 200ms cubic-bezier(0.2, 0.8, 0.2, 1), opacity 100ms ease-out, visibility 0s 200ms;
}
.styles-module__surface___7qnpJ[data-positioning] {
  transition: none;
}
.styles-module__surface___7qnpJ[data-direct-entry] *, .styles-module__surface___7qnpJ[data-direct-entry] *::before, .styles-module__surface___7qnpJ[data-direct-entry] *::after {
  transition: none !important;
}
.styles-module__surface___7qnpJ[data-state=preview], .styles-module__surface___7qnpJ[data-state=edit] {
  opacity: 1;
  visibility: visible;
  transition-delay: 0s;
}
.styles-module__surface___7qnpJ[data-state=edit], .styles-module__surface___7qnpJ[data-annotation-popup][data-state=hidden] {
  width: 280px;
  border-radius: 16px;
}
.styles-module__surface___7qnpJ[data-state=edit] {
  pointer-events: auto;
}
.styles-module__surface___7qnpJ[data-state=preview] {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
}
[data-agentation-theme=light] .styles-module__surface___7qnpJ[data-state=preview] {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.06);
}

@media (prefers-reduced-motion: reduce) {
  .styles-module__surface___7qnpJ {
    transition: opacity 100ms ease-out, visibility 0s 100ms;
  }
}`,F_={surface:"styles-module__surface___7qnpJ"},z_=hr(function({annotation:n,editing:o,exiting:r,restorePreview:i,editorProps:s,lightMode:l,scrollY:d,onExited:c},b){const f=R({annotation:n,editorProps:s}),m=n??f.current.annotation,g=n?s:f.current.editorProps,v=R(null),x=R(null),$=R(),T=R(d),O=o&&!r?"edit":n&&(!o||i)?"preview":"hidden",Se=O==="preview"||!o;return ct(()=>{n&&(f.current={annotation:n,editorProps:s})},[n,s]),ct(()=>{const z=v.current;if(!z||!m)return;const p=O==="edit"&&($.current!==m.id||z.dataset.state==="hidden"&&getComputedStyle(z).opacity==="0");p&&(z.dataset.directEntry="true");const J=()=>{const xe=m.x/100*window.innerWidth,W=m.isFixed?m.y:m.y-d,_e=O==="preview"||!o,se=parseFloat(z.style.getPropertyValue("--preview-width"))||200,F=Math.min(se,window.innerWidth-24),we=Math.max(12,Math.min(window.innerWidth-F-12,xe-F/2)),V=_e?F:Math.min(280,window.innerWidth-24),oe=Math.min(_e?12:20,(window.innerWidth-V)/2),ce=W>window.innerHeight-(_e?101:290);z.style.left=`${Math.max(oe,Math.min(window.innerWidth-V-oe,we))}px`,z.style.right="auto",z.style.top=`${Math.max(12,Math.min(window.innerHeight-12,W+(ce?-21:21)))}px`,z.style.bottom="auto",z.style.transform=ce?"translateY(-100%)":"translateY(0)",z.style.maxHeight=`${Math.max(100,ce?W-33:window.innerHeight-W-33)}px`},ie=$.current!==m.id||T.current!==d||z.dataset.state==="hidden";ie&&(z.dataset.positioning="true"),J(),(ie||p)&&z.getBoundingClientRect(),delete z.dataset.positioning,delete z.dataset.directEntry,z.dataset.state=O,z.inert=O!=="edit",$.current=m.id,T.current=d;const X=()=>{z.dataset.positioning="true",J(),z.getBoundingClientRect(),delete z.dataset.positioning};return window.addEventListener("resize",X),()=>window.removeEventListener("resize",X)},[m==null?void 0:m.id,m==null?void 0:m.x,m==null?void 0:m.y,m==null?void 0:m.isFixed,O,o,d,m==null?void 0:m.comment]),ct(()=>{var z;o&&!r&&((z=x.current)==null||z.focus())},[o,r,m==null?void 0:m.id]),ys(v,r,c),ur(b,()=>({shake(){var z,p,J;(p=(z=v.current)==null?void 0:z.animate)==null||p.call(z,[{translate:"0px"},{translate:"-3px"},{translate:"3px"},{translate:"-2px"},{translate:"2px"},{translate:"0px"}],{duration:250}),(J=x.current)==null||J.focus()}}),[]),!m||!g?null:t("div",{ref:v,className:`${Re.popup} ${F_.surface} ${l?Re.light:""}`,"data-feedback-toolbar":!0,"data-annotation-card":!0,"data-annotation-popup":o?"":void 0,"data-state":"hidden","aria-hidden":O==="hidden",onClick:z=>z.stopPropagation(),onKeyDownCapture:z=>{z.key!=="Escape"||z.nativeEvent.isComposing||!o||(z.preventDefault(),z.stopPropagation(),g.onCancel())},children:t(kl,{ref:x,...g,variant:"card",preview:Se,resetOnPreview:!o,disabled:!o||r},m.id)})}),H_=`@keyframes styles-module__markerIn___x4G8D {
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.3);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
}
@keyframes styles-module__markerOut___6VhQN {
  0% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.3);
  }
}
@keyframes styles-module__renumberRoll___akV9B {
  0% {
    transform: translateX(-40%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
.styles-module__marker___9CKF7 {
  padding: 0;
  border: 0;
  box-sizing: border-box;
  font-family: inherit;
  line-height: 1;
  text-align: center;
  appearance: none;
  position: absolute;
  width: 22px;
  height: 22px;
  background: var(--agentation-color-blue);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.6875rem;
  font-weight: 600;
  transform: translate(-50%, -50%) scale(1);
  opacity: 1;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2), inset 0 0 0 1px rgba(0, 0, 0, 0.04);
  -webkit-user-select: none;
  user-select: none;
  will-change: transform, opacity;
  contain: layout style;
  z-index: 1;
}
.styles-module__marker___9CKF7 > * {
  pointer-events: none;
}
.styles-module__marker___9CKF7:focus-visible {
  outline: 2px solid var(--agentation-color-accent);
  outline-offset: 3px;
}
.styles-module__marker___9CKF7:hover, .styles-module__marker___9CKF7:focus-visible, .styles-module__marker___9CKF7.styles-module__previewVisible___imMag {
  z-index: 2;
}
.styles-module__marker___9CKF7:not(.styles-module__enter___8kI3q):not(.styles-module__exit___KBdR3):not(.styles-module__clearing___8rM7K):not(.styles-module__confirm___BtMvq) {
  transition: background-color 0.15s ease, transform 0.1s ease, z-index 0s 0.1s;
}
.styles-module__marker___9CKF7:not(.styles-module__enter___8kI3q):not(.styles-module__exit___KBdR3):not(.styles-module__clearing___8rM7K):not(.styles-module__confirm___BtMvq):hover, .styles-module__marker___9CKF7:not(.styles-module__enter___8kI3q):not(.styles-module__exit___KBdR3):not(.styles-module__clearing___8rM7K):not(.styles-module__confirm___BtMvq):focus-visible, .styles-module__marker___9CKF7:not(.styles-module__enter___8kI3q):not(.styles-module__exit___KBdR3):not(.styles-module__clearing___8rM7K):not(.styles-module__confirm___BtMvq).styles-module__previewVisible___imMag {
  transition-delay: 0s;
}
.styles-module__marker___9CKF7.styles-module__enter___8kI3q {
  animation: styles-module__markerIn___x4G8D 0.25s cubic-bezier(0.22, 1, 0.36, 1) both;
}
.styles-module__marker___9CKF7.styles-module__confirm___BtMvq {
  animation: styles-module__markerConfirm___RT4Sk 220ms ease-out both;
}
.styles-module__marker___9CKF7.styles-module__exit___KBdR3 {
  animation: styles-module__markerOut___6VhQN 0.2s ease-out both;
  pointer-events: none;
}
.styles-module__marker___9CKF7.styles-module__clearing___8rM7K {
  animation: styles-module__markerOut___6VhQN 0.15s ease-out both;
  pointer-events: none;
}
.styles-module__marker___9CKF7:not(.styles-module__enter___8kI3q):not(.styles-module__exit___KBdR3):not(.styles-module__clearing___8rM7K):not(.styles-module__confirm___BtMvq):hover {
  transform: translate(-50%, -50%) scale(1.1);
}
.styles-module__marker___9CKF7.styles-module__pending___BiY-U {
  background-color: var(--agentation-color-blue);
  cursor: default;
}
.styles-module__marker___9CKF7.styles-module__pending___BiY-U.styles-module__exit___KBdR3 {
  animation-duration: 150ms;
}
.styles-module__marker___9CKF7.styles-module__multiSelect___CPfTC {
  background-color: var(--agentation-color-green);
  width: 26px;
  height: 26px;
  border-radius: 6px;
  font-size: 0.75rem;
}
.styles-module__marker___9CKF7.styles-module__multiSelect___CPfTC.styles-module__pending___BiY-U {
  background-color: var(--agentation-color-green);
}
.styles-module__marker___9CKF7.styles-module__hovered___-mg2N {
  background-color: var(--agentation-color-red);
}

.styles-module__renumber___16lvD {
  display: block;
  animation: styles-module__renumberRoll___akV9B 0.2s ease-out;
}

@keyframes styles-module__markerConfirm___RT4Sk {
  0% {
    transform: translate(-50%, -50%) scale(1);
  }
  25% {
    transform: translate(-50%, -50%) scale(0.94);
  }
  65% {
    transform: translate(-50%, -50%) scale(1.06);
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
  }
}
.styles-module__number___1JFu9 {
  display: block;
}

.styles-module__numberGlyph___qchdk {
  display: block;
  opacity: 1;
  transform: translateY(0);
  filter: blur(0);
  transition: opacity 140ms ease-out, transform 180ms cubic-bezier(0.22, 1, 0.36, 1), filter 140ms ease-out;
}

.styles-module__actionGlyph___AFRt0 {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  opacity: 0;
  transform: translateY(2px) scale(0.8) rotate(-12deg);
  filter: blur(1px);
  transition: opacity 120ms ease-out, transform 160ms cubic-bezier(0.22, 1, 0.36, 1), filter 120ms ease-out;
}

.styles-module__actionVisible___Kb--l .styles-module__numberGlyph___qchdk {
  opacity: 0;
  transform: translateY(-2px) scale(0.8);
  filter: blur(1px);
}
.styles-module__actionVisible___Kb--l .styles-module__actionGlyph___AFRt0 {
  opacity: 1;
  transform: translateY(0) scale(1) rotate(0);
  filter: blur(0);
}

.styles-module__plus___xslMP {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  opacity: 0;
  transform: rotate(-90deg) scale(0.6);
  filter: blur(1px);
  transition: opacity 100ms ease-out, transform 140ms ease-out, filter 100ms ease-out;
  pointer-events: none;
}

.styles-module__pending___BiY-U .styles-module__numberGlyph___qchdk {
  opacity: 0;
  transform: translateY(5px);
  filter: blur(2px);
}
.styles-module__pending___BiY-U .styles-module__plus___xslMP {
  opacity: 1;
  transform: rotate(0) scale(1);
  filter: blur(0);
}

@media (prefers-reduced-motion: reduce) {
  .styles-module__marker___9CKF7.styles-module__enter___8kI3q, .styles-module__marker___9CKF7.styles-module__exit___KBdR3, .styles-module__marker___9CKF7.styles-module__clearing___8rM7K, .styles-module__marker___9CKF7.styles-module__confirm___BtMvq {
    animation-duration: 1ms;
    animation-delay: 0ms !important;
  }
  .styles-module__numberGlyph___qchdk, .styles-module__actionGlyph___AFRt0, .styles-module__plus___xslMP {
    transition: opacity 100ms ease-out;
    transform: none;
    filter: none;
  }
  .styles-module__pending___BiY-U .styles-module__numberGlyph___qchdk, .styles-module__pending___BiY-U .styles-module__plus___xslMP,
  .styles-module__actionVisible___Kb--l .styles-module__numberGlyph___qchdk, .styles-module__actionVisible___Kb--l .styles-module__actionGlyph___AFRt0 {
    transform: none;
    filter: none;
  }
}`,Mt={marker:"styles-module__marker___9CKF7",previewVisible:"styles-module__previewVisible___imMag",enter:"styles-module__enter___8kI3q",exit:"styles-module__exit___KBdR3",clearing:"styles-module__clearing___8rM7K",confirm:"styles-module__confirm___BtMvq",pending:"styles-module__pending___BiY-U",multiSelect:"styles-module__multiSelect___CPfTC",hovered:"styles-module__hovered___-mg2N",renumber:"styles-module__renumber___16lvD",number:"styles-module__number___1JFu9",numberGlyph:"styles-module__numberGlyph___qchdk",actionGlyph:"styles-module__actionGlyph___AFRt0",actionVisible:"styles-module__actionVisible___Kb--l",plus:"styles-module__plus___xslMP"},nl=ms(function({annotation:n,pending:o=!1,globalIndex:r,layerIndex:i,layerSize:s,isExiting:l,isClearing:d,isAnimated:c,isNew:b,isHovered:f,isRemoving:m,onRemoveComplete:g,isEditingAny:v,renumberFrom:x,markerClickBehavior:$,onHoverEnter:T,onEnterComplete:O,onHoverLeave:Se,onClick:z,onContextMenu:p}){const[J,ie]=A(c),X=R(o),[xe,W]=A(!1),_e=X.current&&!o&&J&&!xe;ct(()=>{l&&ie(!1)},[l]);const se=R(null),F=R({action:!1,delete:!1}),we=f&&!v,V=we&&$==="delete";ct(()=>{m||(F.current={action:we,delete:V})},[m,we,V]);const oe=m?F.current.action:we,ce=m?F.current.delete:V;ys(se,m,()=>g(n.id));const at=n.isMultiSelect,Ce=at?"var(--agentation-color-green)":"var(--agentation-color-accent)",tt=d?Mt.clearing:l||m?Mt.exit:_e?Mt.confirm:!c&&!J?Mt.enter:"",Ie=d?`${Math.min(i*20,120)}ms`:m||o||_e?"0ms":l?`${(s-1-i)*20}ms`:`${b?0:i*20}ms`;return t("button",{ref:se,type:"button","aria-label":o?"Pending annotation":`${$==="delete"?"Delete":"Edit"} annotation ${r+1}: ${n.element}`,disabled:o||l||m||d,tabIndex:o||v?-1:0,className:`${Mt.marker} ${o?Mt.pending:""} ${at?Mt.multiSelect:""} ${tt} ${!o&&oe?Mt.actionVisible:""} ${ce?Mt.hovered:""} ${f&&!v&&!m?Mt.previewVisible:""}`,"data-annotation-marker":o?void 0:"","data-annotation-pending":o?"":void 0,style:{left:`${n.x}%`,top:n.y,backgroundColor:ce?void 0:Ce,animationDelay:Ie},onAnimationEnd:Je=>{Je.target===Je.currentTarget&&(tt===Mt.enter||tt===Mt.confirm)&&(ie(!0),o||W(!0),o||O(n.id))},onMouseOver:()=>{o||T(n)},onMouseOut:Je=>{const ut=Je.relatedTarget;(!(ut instanceof Node)||!Je.currentTarget.contains(ut))&&Se(n.id)},onFocus:Je=>{!o&&Je.currentTarget.matches(":focus-visible")&&T(n)},onBlur:()=>Se(n.id),onClick:Je=>{Je.stopPropagation(),!o&&!l&&!m&&z(n,Je.currentTarget)},onContextMenu:p?Je=>{$==="delete"&&(Je.preventDefault(),Je.stopPropagation(),!o&&!l&&!m&&p(n,Je.currentTarget))}:void 0,children:[t("span",{className:`${Mt.number} ${x!==null&&r>=x?Mt.renumber:""}`,"aria-hidden":"true",children:t("span",{className:Mt.numberGlyph,children:r+1})},r),t("span",{className:Mt.actionGlyph,"aria-hidden":"true",children:$==="delete"?t(lc,{size:at?18:16}):t(dc,{size:16})}),X.current&&t("span",{className:Mt.plus,"aria-hidden":"true",children:t(Za,{size:12})})]})}),Y_=`.styles-module__switchContainer___Ka-AB {
  display: flex;
  align-items: center;
  position: relative;
  padding: 2px;
  width: 24px;
  height: 16px;
  border-radius: 8px;
  background-color: #cdcdcd;
  transition: background-color 0.15s, opacity 0.15s;
}
[data-agentation-theme=dark] .styles-module__switchContainer___Ka-AB {
  background-color: #484848;
}
.styles-module__switchContainer___Ka-AB:has(.styles-module__switchInput___kYDSD:checked) {
  background-color: var(--agentation-color-blue);
}
.styles-module__switchContainer___Ka-AB:has(.styles-module__switchInput___kYDSD:disabled) {
  opacity: 0.3;
}

.styles-module__switchInput___kYDSD {
  position: absolute;
  z-index: 1;
  inset: 0;
  border-radius: inherit;
  opacity: 0;
  cursor: pointer;
}
.styles-module__switchInput___kYDSD:disabled {
  cursor: not-allowed;
}

.styles-module__switchThumb___4sCPH {
  border-radius: 50%;
  width: 12px;
  height: 12px;
  background-color: #fff;
  transition: transform 0.15s;
}
.styles-module__switchContainer___Ka-AB[data-checked] .styles-module__switchThumb___4sCPH {
  transform: translateX(8px);
}`,Zr={switchContainer:"styles-module__switchContainer___Ka-AB",switchInput:"styles-module__switchInput___kYDSD",switchThumb:"styles-module__switchThumb___4sCPH"},es=({className:e="",checked:n,onChange:o,...r})=>t("div",{className:`${Zr.switchContainer} ${e}`,"data-checked":n?"":void 0,children:[t("input",{className:Zr.switchInput,checked:n,onChange:o,type:"checkbox",...r}),t("div",{className:Zr.switchThumb})]}),j_=`.styles-module__checkboxContainer___joqZk {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: 1px solid rgba(26, 26, 26, 0.2);
  border-radius: 4px;
  width: 14px;
  height: 14px;
  background-color: #fff;
  transition: background-color 0.2s ease;
}
[data-agentation-theme=dark] .styles-module__checkboxContainer___joqZk {
  border-color: rgba(255, 255, 255, 0.2);
  background-color: #252525;
}
.styles-module__checkboxContainer___joqZk:has(.styles-module__checkboxInput___ECzzO:checked) {
  background-color: #1a1a1a;
}
[data-agentation-theme=dark] .styles-module__checkboxContainer___joqZk:has(.styles-module__checkboxInput___ECzzO:checked) {
  background-color: #fff;
}

.styles-module__checkboxInput___ECzzO {
  position: absolute;
  z-index: 1;
  inset: -1px;
  border-radius: inherit;
  opacity: 0;
  cursor: pointer;
}

.styles-module__checkboxCheck___fUXpr {
  color: #fafafa;
}
[data-agentation-theme=dark] .styles-module__checkboxCheck___fUXpr {
  color: #1a1a1a;
}

.styles-module__checkboxCheckPath___cDyh8 {
  stroke-dasharray: 9.29px;
  stroke-dashoffset: 9.29px;
  color: #fafafa;
  transition: stroke-dashoffset 0.1s ease;
}
[data-agentation-theme=dark] .styles-module__checkboxCheckPath___cDyh8 {
  color: #1a1a1a;
}
.styles-module__checkboxContainer___joqZk[data-checked] .styles-module__checkboxCheckPath___cDyh8 {
  transition-duration: 0.2s;
  stroke-dashoffset: 0;
}`,rr={checkboxContainer:"styles-module__checkboxContainer___joqZk",checkboxInput:"styles-module__checkboxInput___ECzzO",checkboxCheck:"styles-module__checkboxCheck___fUXpr",checkboxCheckPath:"styles-module__checkboxCheckPath___cDyh8"},U_=({className:e="",checked:n,onChange:o,...r})=>t("div",{className:`${rr.checkboxContainer} ${e}`,"data-checked":n?"":void 0,children:[t("input",{className:rr.checkboxInput,type:"checkbox",checked:n,onChange:o,...r}),t("svg",{className:rr.checkboxCheck,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",children:t("path",{className:rr.checkboxCheckPath,d:"M3.94 7L6.13 9.19L10.5 4.81",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]}),X_=`.styles-module__container___w8eAF {
  display: flex;
  align-items: center;
  height: 24px;
}

.styles-module__label___J5mxE {
  padding-inline: 8px 2px;
  line-height: 20px;
  font-size: 13px;
  letter-spacing: -0.15px;
  color: rgba(26, 26, 26, 0.5);
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
}
[data-agentation-theme=dark] .styles-module__label___J5mxE {
  color: rgba(255, 255, 255, 0.5);
}`,ol={container:"styles-module__container___w8eAF",label:"styles-module__label___J5mxE"},rl=({className:e="",label:n,tooltip:o,checked:r,onChange:i,...s})=>{const l=ll();return t("div",{className:`${ol.container} ${e}`,...s,children:[t(U_,{id:l,onChange:i,checked:r}),t("label",{className:ol.label,htmlFor:l,children:n}),o&&t(Pn,{content:o})]})},Q_=`@keyframes styles-module__cycleTextIn___VBNTi {
  0% {
    opacity: 0;
    transform: translateY(-6px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes styles-module__scaleIn___QpQ8E {
  from {
    opacity: 0;
    transform: scale(0.85);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__mcpPulse___5Q3Jj {
  0% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 50%, transparent);
  }
  70% {
    box-shadow: 0 0 0 6px color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
  100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
}
@keyframes styles-module__mcpPulseError___VHxhx {
  0% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-red) 50%, transparent);
  }
  70% {
    box-shadow: 0 0 0 6px color-mix(in srgb, var(--agentation-color-red) 0%, transparent);
  }
  100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-red) 0%, transparent);
  }
}
@keyframes styles-module__themeIconIn___qUWMV {
  0% {
    opacity: 0;
    transform: scale(0.8) rotate(-30deg);
  }
  100% {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}
.styles-module__settingsPanel___qNkn- :where(button, a, input, select, textarea):focus-visible {
  outline: 2px solid var(--agentation-color-accent);
  outline-offset: 2px;
}
.styles-module__settingsPanel___qNkn- {
  position: absolute;
  right: 5px;
  bottom: calc(100% + 0.5rem);
  z-index: 1;
  overflow: hidden;
  background: #1c1c1c;
  border-radius: 16px;
  padding: 12px 0;
  width: 253px;
  max-width: calc(100vw - 20px);
  cursor: default;
  opacity: 1;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.04);
  transition: background-color 0.25s ease, box-shadow 0.25s ease;
}
.styles-module__settingsPanel___qNkn-::before, .styles-module__settingsPanel___qNkn-::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  width: 16px;
  z-index: 2;
  pointer-events: none;
}
.styles-module__settingsPanel___qNkn-::before {
  left: 0;
  background: linear-gradient(to right, #1c1c1c 0%, transparent 100%);
}
.styles-module__settingsPanel___qNkn-::after {
  right: 0;
  background: linear-gradient(to left, #1c1c1c 0%, transparent 100%);
}
.styles-module__settingsPanel___qNkn- .styles-module__settingsHeader___Fn1DP,
.styles-module__settingsPanel___qNkn- .styles-module__settingsBrand___OoKlM,
.styles-module__settingsPanel___qNkn- .styles-module__settingsVersion___rXmL9,
.styles-module__settingsPanel___qNkn- .styles-module__settingsSection___n5V-4,
.styles-module__settingsPanel___qNkn- .styles-module__settingsLabel___VCVOQ,
.styles-module__settingsPanel___qNkn- .styles-module__cycleButton___XMBx3,
.styles-module__settingsPanel___qNkn- .styles-module__cycleDot___zgSXY,
.styles-module__settingsPanel___qNkn- .styles-module__dropdownButton___mKHe8,
.styles-module__settingsPanel___qNkn- .styles-module__sliderLabel___6K5v1,
.styles-module__settingsPanel___qNkn- .styles-module__slider___v5z-c,
.styles-module__settingsPanel___qNkn- .styles-module__themeToggle___3imlT {
  transition: background-color 0.25s ease, color 0.25s ease, border-color 0.25s ease;
}
.styles-module__settingsPanel___qNkn- {
  opacity: 0;
  transform: translateY(var(--panel-offset-y, 4px)) scale(0.98);
  transform-origin: var(--panel-origin, bottom right);
  filter: blur(2px);
  pointer-events: none;
  visibility: hidden;
  transition: opacity 120ms cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 120ms cubic-bezier(0.25, 0.46, 0.45, 0.94), filter 120ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
.styles-module__settingsPanel___qNkn-[data-panel-present=true] {
  visibility: visible;
}
.styles-module__settingsPanel___qNkn-[data-panel-open=true] {
  opacity: 1;
  transform: translateY(0) scale(1);
  filter: blur(0);
  pointer-events: auto;
  transition-duration: 160ms;
}
@media (prefers-reduced-motion: reduce) {
  .styles-module__settingsPanel___qNkn- {
    transition: none;
    transform: none;
    filter: none;
  }
}
.styles-module__settingsPanel___qNkn-.styles-module__below___Vpv-k {
  --panel-offset-y: -4px;
  --panel-origin: top right;
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- {
  background: #1a1a1a;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- .styles-module__settingsLabel___VCVOQ {
  color: rgba(255, 255, 255, 0.6);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- .styles-module__settingsOption___JoyH- {
  color: rgba(255, 255, 255, 0.85);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- .styles-module__settingsOption___JoyH-:hover {
  background: rgba(255, 255, 255, 0.1);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- .styles-module__settingsOption___JoyH-.styles-module__selected___k1-Vq {
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}

.styles-module__settingsPanelContainer___5it-H {
  overflow: visible;
  position: relative;
  display: flex;
  padding: 0 16px;
}

.styles-module__settingsPage___BMn-3 {
  min-width: 100%;
  flex-basis: 0;
  flex-shrink: 0;
  transition: transform 0.2s ease, opacity 0.2s ease;
  transition-delay: 0s;
  opacity: 1;
}

.styles-module__settingsPage___BMn-3.styles-module__slideLeft___qUvW4 {
  transform: translateX(-24px);
  opacity: 0;
  pointer-events: none;
}

.styles-module__automationsPage___N7By0 {
  position: absolute;
  top: 0;
  left: 24px;
  width: 100%;
  height: 100%;
  padding: 0 16px 4px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, opacity 0.2s ease;
  opacity: 0;
  pointer-events: none;
}

.styles-module__automationsPage___N7By0.styles-module__slideIn___uXDSu {
  transform: translateX(-24px);
  opacity: 1;
  pointer-events: auto;
}

.styles-module__settingsHeader___Fn1DP {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 24px;
}

.styles-module__settingsBrand___OoKlM {
  display: flex;
  align-items: center;
  font-size: 0.8125rem;
  font-weight: 500;
  letter-spacing: -0.0094em;
  color: #bbb;
  text-decoration: none;
}

.styles-module__settingsVersion___rXmL9 {
  font-size: 11px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  margin-left: 6px;
  letter-spacing: -0.0094em;
}

.styles-module__themeToggle___3imlT {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  margin-left: auto;
  border: none;
  border-radius: 6px;
  background: transparent;
  color: rgba(255, 255, 255, 0.4);
  transition: background-color 0.15s ease, color 0.15s ease;
  cursor: pointer;
}
.styles-module__themeToggle___3imlT:hover {
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
}
[data-agentation-theme=light] .styles-module__themeToggle___3imlT {
  color: rgba(0, 0, 0, 0.4);
}
[data-agentation-theme=light] .styles-module__themeToggle___3imlT:hover {
  background: rgba(0, 0, 0, 0.06);
  color: rgba(0, 0, 0, 0.7);
}

.styles-module__themeIconWrapper___pyaYa {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 20px;
  height: 20px;
}

.styles-module__themeIcon___w7lAm {
  display: flex;
  align-items: center;
  justify-content: center;
  animation: styles-module__themeIconIn___qUWMV 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.styles-module__settingsSectionGrow___eZTRw {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.styles-module__settingsRow___y-tDE {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
}
.styles-module__settingsRow___y-tDE.styles-module__settingsRowMarginTop___uLpGb {
  margin-top: 8px;
}

.styles-module__settingsRowDisabled___ydl3Q .styles-module__settingsLabel___VCVOQ {
  color: rgba(255, 255, 255, 0.2);
}
[data-agentation-theme=light] .styles-module__settingsRowDisabled___ydl3Q .styles-module__settingsLabel___VCVOQ {
  color: rgba(0, 0, 0, 0.2);
}

.styles-module__settingsLabel___VCVOQ {
  display: flex;
  align-items: center;
  column-gap: 2px;
  line-height: 20px;
  font-size: 13px;
  font-weight: 400;
  letter-spacing: -0.15px;
  color: rgba(255, 255, 255, 0.5);
}
[data-agentation-theme=light] .styles-module__settingsLabel___VCVOQ {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__cycleButton___XMBx3 {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0;
  border: none;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  letter-spacing: -0.0094em;
}
[data-agentation-theme=light] .styles-module__cycleButton___XMBx3 {
  color: rgba(0, 0, 0, 0.85);
}
.styles-module__cycleButton___XMBx3:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}

.styles-module__cycleButtonText___mbbnD {
  display: inline-block;
  animation: styles-module__cycleTextIn___VBNTi 0.2s ease-out;
}

.styles-module__cycleDots___ehp6i {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.styles-module__cycleDot___zgSXY {
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: scale(0.667);
  transition: background-color 0.25s ease-out, transform 0.25s ease-out;
}
.styles-module__cycleDot___zgSXY.styles-module__active___dpAhM {
  background: #fff;
  transform: scale(1);
}
[data-agentation-theme=light] .styles-module__cycleDot___zgSXY {
  background: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__cycleDot___zgSXY.styles-module__active___dpAhM {
  background: rgba(0, 0, 0, 0.7);
}

.styles-module__colorOptions___pbxZx {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 6px;
  height: 26px;
}

.styles-module__colorOption___Co955 {
  padding: 0;
  position: relative;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  background-color: #fff;
  cursor: pointer;
}
[data-agentation-theme=dark] .styles-module__colorOption___Co955 {
  background-color: #1a1a1a;
}
.styles-module__colorOption___Co955::before, .styles-module__colorOption___Co955::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background-color: var(--swatch);
  transition: opacity 0.2s, transform 0.2s;
}
@supports (color: color(display-p3 0 0 0)) {
  .styles-module__colorOption___Co955::before, .styles-module__colorOption___Co955::after {
    --color: var(--swatch-p3);
  }
}
.styles-module__colorOption___Co955::after {
  z-index: -1;
  transform: scale(1.2);
  opacity: 0;
}
.styles-module__colorOption___Co955.styles-module__selected___k1-Vq::before {
  transform: scale(0.8);
}
.styles-module__colorOption___Co955.styles-module__selected___k1-Vq::after {
  opacity: 1;
}

.styles-module__settingsNavLink___uYIwM {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 24px;
  padding: 0;
  border: none;
  background: transparent;
  font-family: inherit;
  line-height: 20px;
  font-size: 13px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  transition: color 0.15s ease;
  cursor: pointer;
}
.styles-module__settingsNavLink___uYIwM:hover {
  color: rgba(255, 255, 255, 0.9);
}
.styles-module__settingsNavLink___uYIwM svg {
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.15s ease;
}
.styles-module__settingsNavLink___uYIwM:hover svg {
  color: #fff;
}
[data-agentation-theme=light] .styles-module__settingsNavLink___uYIwM {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___uYIwM:hover {
  color: rgba(0, 0, 0, 0.8);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___uYIwM svg {
  color: rgba(0, 0, 0, 0.25);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___uYIwM:hover svg {
  color: rgba(0, 0, 0, 0.8);
}

.styles-module__settingsNavLinkRight___XBUzC {
  display: flex;
  align-items: center;
  gap: 6px;
}

.styles-module__settingsBackButton___fflll {
  display: flex;
  align-items: center;
  gap: 4px;
  height: 24px;
  border: none;
  background: transparent;
  font-family: inherit;
  line-height: 20px;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: -0.15px;
  color: #fff;
  cursor: pointer;
  transition: transform 0.12s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__settingsBackButton___fflll svg {
  opacity: 0.4;
  flex-shrink: 0;
  transition: opacity 0.15s ease, transform 0.18s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__settingsBackButton___fflll:hover svg {
  opacity: 1;
}
[data-agentation-theme=light] .styles-module__settingsBackButton___fflll {
  color: rgba(0, 0, 0, 0.85);
  border-bottom-color: rgba(0, 0, 0, 0.08);
}

.styles-module__automationHeader___Avra9 {
  display: flex;
  align-items: center;
  gap: 0.125rem;
  font-size: 0.8125rem;
  font-weight: 400;
  color: #fff;
}
[data-agentation-theme=light] .styles-module__automationHeader___Avra9 {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__automationDescription___vFTmJ {
  font-size: 0.6875rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 2px;
  line-height: 14px;
}
[data-agentation-theme=light] .styles-module__automationDescription___vFTmJ {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__learnMoreLink___cG7OI {
  color: rgba(255, 255, 255, 0.8);
  text-decoration-line: underline;
  text-decoration-style: dotted;
  text-decoration-color: rgba(255, 255, 255, 0.2);
  text-underline-offset: 2px;
  transition: color 0.15s ease;
}
.styles-module__learnMoreLink___cG7OI:hover {
  color: #fff;
}
[data-agentation-theme=light] .styles-module__learnMoreLink___cG7OI {
  color: rgba(0, 0, 0, 0.6);
  text-decoration-color: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__learnMoreLink___cG7OI:hover {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__autoSendContainer___VpkXk {
  display: flex;
  align-items: center;
}

.styles-module__autoSendLabel___ngNdC {
  padding-inline-end: 8px;
  font-size: 11px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.15s, opacity 0.15s;
  cursor: pointer;
}
.styles-module__autoSendLabel___ngNdC.styles-module__active___dpAhM {
  color: #66b8ff;
  color: color(display-p3 0.4 0.72 1);
}
[data-agentation-theme=light] .styles-module__autoSendLabel___ngNdC {
  color: rgba(0, 0, 0, 0.4);
}
[data-agentation-theme=light] .styles-module__autoSendLabel___ngNdC.styles-module__active___dpAhM {
  color: var(--agentation-color-blue);
}
.styles-module__autoSendLabel___ngNdC.styles-module__disabled___9AZYS {
  opacity: 0.3;
  cursor: not-allowed;
}

.styles-module__mcpStatusDot___8AMxP {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.styles-module__mcpStatusDot___8AMxP.styles-module__connecting___QEO1r {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpPulse___5Q3Jj 1.5s infinite;
}
.styles-module__mcpStatusDot___8AMxP.styles-module__connected___WyFkx {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpPulse___5Q3Jj 2.5s ease-in-out infinite;
}
.styles-module__mcpStatusDot___8AMxP.styles-module__disconnected___mvmvQ {
  background-color: var(--agentation-color-red);
  animation: styles-module__mcpPulseError___VHxhx 2s infinite;
}

.styles-module__mcpNavIndicator___auBHI {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.styles-module__mcpNavIndicator___auBHI.styles-module__connected___WyFkx {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpPulse___5Q3Jj 2.5s ease-in-out infinite;
}
.styles-module__mcpNavIndicator___auBHI.styles-module__connecting___QEO1r {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpPulse___5Q3Jj 1.5s ease-in-out infinite;
}

.styles-module__webhookUrlInput___WDDDC {
  display: block;
  width: 100%;
  flex: 1;
  min-height: 60px;
  box-sizing: border-box;
  margin-top: 11px;
  padding: 8px 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.03);
  font-family: inherit;
  font-size: 0.75rem;
  font-weight: 400;
  color: #fff;
  outline: none;
  resize: none;
  user-select: text;
  transition: border-color 0.15s ease, background-color 0.15s ease, box-shadow 0.15s ease;
}
.styles-module__webhookUrlInput___WDDDC::placeholder {
  color: rgba(255, 255, 255, 0.3);
}
.styles-module__webhookUrlInput___WDDDC:focus {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.08);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___WDDDC {
  border-color: rgba(0, 0, 0, 0.1);
  background: rgba(0, 0, 0, 0.03);
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___WDDDC::placeholder {
  color: rgba(0, 0, 0, 0.3);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___WDDDC:focus {
  border-color: rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.05);
}

[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- {
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn-::before {
  background: linear-gradient(to right, #fff 0%, transparent 100%);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn-::after {
  background: linear-gradient(to left, #fff 0%, transparent 100%);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsHeader___Fn1DP {
  border-bottom-color: rgba(0, 0, 0, 0.08);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsBrand___OoKlM {
  color: #333;
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsVersion___rXmL9 {
  color: rgba(0, 0, 0, 0.4);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsSection___n5V-4 {
  border-top-color: rgba(0, 0, 0, 0.08);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsLabel___VCVOQ {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__cycleButton___XMBx3 {
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__cycleDot___zgSXY {
  background: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__cycleDot___zgSXY.styles-module__active___dpAhM {
  background: rgba(0, 0, 0, 0.7);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__dropdownButton___mKHe8 {
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__dropdownButton___mKHe8:hover {
  background: rgba(0, 0, 0, 0.05);
}

.styles-module__checkboxField___ZrSqv:not(:first-child) {
  margin-top: 8px;
}

.styles-module__divider___h6Yux {
  margin-block: 8px;
  width: 100%;
  height: 1px;
  background-color: rgba(26, 26, 26, 0.07);
}
[data-agentation-theme=dark] .styles-module__divider___h6Yux {
  background-color: rgba(255, 255, 255, 0.07);
}`,ne={settingsPanel:"styles-module__settingsPanel___qNkn-",settingsHeader:"styles-module__settingsHeader___Fn1DP",settingsBrand:"styles-module__settingsBrand___OoKlM",settingsVersion:"styles-module__settingsVersion___rXmL9",settingsSection:"styles-module__settingsSection___n5V-4",settingsLabel:"styles-module__settingsLabel___VCVOQ",cycleButton:"styles-module__cycleButton___XMBx3",cycleDot:"styles-module__cycleDot___zgSXY",dropdownButton:"styles-module__dropdownButton___mKHe8",sliderLabel:"styles-module__sliderLabel___6K5v1",slider:"styles-module__slider___v5z-c",themeToggle:"styles-module__themeToggle___3imlT",below:"styles-module__below___Vpv-k",settingsOption:"styles-module__settingsOption___JoyH-",selected:"styles-module__selected___k1-Vq",settingsPanelContainer:"styles-module__settingsPanelContainer___5it-H",settingsPage:"styles-module__settingsPage___BMn-3",slideLeft:"styles-module__slideLeft___qUvW4",automationsPage:"styles-module__automationsPage___N7By0",slideIn:"styles-module__slideIn___uXDSu",themeIconWrapper:"styles-module__themeIconWrapper___pyaYa",themeIcon:"styles-module__themeIcon___w7lAm",themeIconIn:"styles-module__themeIconIn___qUWMV",settingsSectionGrow:"styles-module__settingsSectionGrow___eZTRw",settingsRow:"styles-module__settingsRow___y-tDE",settingsRowMarginTop:"styles-module__settingsRowMarginTop___uLpGb",settingsRowDisabled:"styles-module__settingsRowDisabled___ydl3Q",cycleButtonText:"styles-module__cycleButtonText___mbbnD",cycleTextIn:"styles-module__cycleTextIn___VBNTi",cycleDots:"styles-module__cycleDots___ehp6i",active:"styles-module__active___dpAhM",colorOptions:"styles-module__colorOptions___pbxZx",colorOption:"styles-module__colorOption___Co955",settingsNavLink:"styles-module__settingsNavLink___uYIwM",settingsNavLinkRight:"styles-module__settingsNavLinkRight___XBUzC",settingsBackButton:"styles-module__settingsBackButton___fflll",automationHeader:"styles-module__automationHeader___Avra9",automationDescription:"styles-module__automationDescription___vFTmJ",learnMoreLink:"styles-module__learnMoreLink___cG7OI",autoSendContainer:"styles-module__autoSendContainer___VpkXk",autoSendLabel:"styles-module__autoSendLabel___ngNdC",disabled:"styles-module__disabled___9AZYS",mcpStatusDot:"styles-module__mcpStatusDot___8AMxP",connecting:"styles-module__connecting___QEO1r",mcpPulse:"styles-module__mcpPulse___5Q3Jj",connected:"styles-module__connected___WyFkx",disconnected:"styles-module__disconnected___mvmvQ",mcpPulseError:"styles-module__mcpPulseError___VHxhx",mcpNavIndicator:"styles-module__mcpNavIndicator___auBHI",webhookUrlInput:"styles-module__webhookUrlInput___WDDDC",checkboxField:"styles-module__checkboxField___ZrSqv",divider:"styles-module__divider___h6Yux",scaleIn:"styles-module__scaleIn___QpQ8E"},q_=ms(function({settings:n,onSettingsChange:o,isDarkMode:r,onToggleTheme:i,isDevMode:s,connectionStatus:l,endpoint:d,onExited:c,isOpen:b,toolbarNearBottom:f,settingsPage:m,onSettingsPageChange:g,onHideToolbar:v}){var z;const{ref:x}=Cl(b,{keepMounted:!0,onExited:c}),$=R(null),T=R(null),O=R(!1);ct(()=>{var p;!b||!O.current||(O.current=!1,(p=(m==="automations"?T:$).current)==null||p.focus())},[b,m]);const Se=r?"Switch to light mode":"Switch to dark mode";return t("div",{className:`${ne.settingsPanel} ${f?ne.below:""}`,style:f?{bottom:"auto",top:"calc(100% + 0.5rem)"}:void 0,"data-agentation-settings-panel":!0,ref:p=>{x.current=p,p==null||p.toggleAttribute("inert",!b)},role:"group","aria-label":"Feedback settings","aria-hidden":!b,children:t("div",{className:ne.settingsPanelContainer,children:[t("div",{className:`${ne.settingsPage} ${m==="automations"?ne.slideLeft:""}`,ref:p=>{p==null||p.toggleAttribute("inert",m!=="main")},"aria-hidden":m!=="main",children:[t("div",{className:ne.settingsHeader,children:[t("a",{className:ne.settingsBrand,href:"https://agentation.com",target:"_blank",rel:"noopener noreferrer","aria-label":"Agentation",children:"Agentation"}),t("p",{className:ne.settingsVersion,children:["v","3.1.2"]}),t("button",{className:ne.themeToggle,onClick:i,title:Se,"aria-label":Se,children:t("span",{className:ne.themeIconWrapper,children:t("span",{className:ne.themeIcon,children:r?t(ac,{size:20}):t(cc,{size:20})},r?"sun":"moon")})})]}),t("div",{className:ne.divider}),t("div",{className:ne.settingsSection,children:[t("div",{className:ne.settingsRow,children:[t("div",{className:ne.settingsLabel,children:["Output Detail",t(Pn,{content:"Controls how much detail is included in the copied output"})]}),t("button",{className:ne.cycleButton,onClick:()=>{const J=(xo.findIndex(ie=>ie.value===n.outputDetail)+1)%xo.length;o({outputDetail:xo[J].value})},children:[t("span",{className:ne.cycleButtonText,children:(z=xo.find(p=>p.value===n.outputDetail))==null?void 0:z.label},n.outputDetail),t("span",{className:ne.cycleDots,children:xo.map(p=>t("span",{className:`${ne.cycleDot} ${n.outputDetail===p.value?ne.active:""}`},p.value))})]})]}),t("div",{className:`${ne.settingsRow} ${ne.settingsRowMarginTop} ${s?"":ne.settingsRowDisabled}`,children:[t("div",{className:ne.settingsLabel,children:["React Components",t(Pn,{content:s?"Include React component names in annotations":"Disabled — production builds minify component names, making detection unreliable. Use in development mode."})]}),t(es,{"aria-label":"React Components",checked:s&&n.reactEnabled,onChange:p=>o({reactEnabled:p.target.checked}),disabled:!s})]}),t("div",{className:`${ne.settingsRow} ${ne.settingsRowMarginTop}`,children:[t("div",{className:ne.settingsLabel,children:["Hide Until Restart",t(Pn,{content:"Hides the toolbar until you open a new tab"})]}),t(es,{"aria-label":"Hide Until Restart",checked:!1,onChange:p=>{p.target.checked&&v()}})]})]}),t("div",{className:ne.divider}),t("div",{className:ne.settingsSection,children:[t("div",{className:`${ne.settingsLabel} ${ne.settingsLabelMarker}`,children:"Marker Color"}),t("div",{className:ne.colorOptions,children:Co.map(p=>t("button",{className:`${ne.colorOption} ${n.annotationColorId===p.id?ne.selected:""}`,style:{"--swatch":p.srgb,"--swatch-p3":p.p3},onClick:()=>o({annotationColorId:p.id}),title:p.label,"aria-label":p.label,type:"button"},p.id))})]}),t("div",{className:ne.divider}),t("div",{className:ne.settingsSection,children:[t(rl,{className:"checkbox-field",label:"Clear on copy/send",checked:n.autoClearAfterCopy,onChange:p=>o({autoClearAfterCopy:p.target.checked}),tooltip:"Automatically clear annotations after copying"}),t(rl,{className:ne.checkboxField,label:"Block page interactions",checked:n.blockInteractions,onChange:p=>o({blockInteractions:p.target.checked})})]}),t("div",{className:ne.divider}),t("button",{className:ne.settingsNavLink,ref:$,onClick:p=>{O.current=p.detail===0,p.currentTarget.blur(),g("automations")},children:[t("span",{children:"Manage MCP & Webhooks"}),t("span",{className:ne.settingsNavLinkRight,children:[d&&l!=="disconnected"&&t("span",{className:`${ne.mcpNavIndicator} ${ne[l]}`}),t("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t("path",{d:"M7.5 12.5L12 8L7.5 3.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]})]})]}),t("div",{className:`${ne.settingsPage} ${ne.automationsPage} ${m==="automations"?ne.slideIn:""}`,ref:p=>{p==null||p.toggleAttribute("inert",m!=="automations")},"aria-hidden":m!=="automations",children:[t("button",{className:ne.settingsBackButton,ref:T,"aria-label":"Back to settings",onClick:p=>{O.current=p.detail===0,p.currentTarget.blur(),g("main")},children:[t(_c,{size:16}),t("span",{children:"Manage MCP & Webhooks"})]}),t("div",{className:ne.divider}),t("div",{className:ne.settingsSection,children:[t("div",{className:ne.settingsRow,children:[t("span",{className:ne.automationHeader,children:["MCP Connection",t(Pn,{content:"Connect via Model Context Protocol to let AI agents like Claude Code receive annotations in real-time."})]}),d&&t("div",{className:`${ne.mcpStatusDot} ${ne[l]}`,title:l==="connected"?"Connected":l==="connecting"?"Connecting...":"Disconnected"})]}),t("p",{className:ne.automationDescription,style:{paddingBottom:6},children:["MCP connection allows agents to receive and act on annotations."," ",t("a",{href:"https://agentation.com/mcp",target:"_blank",rel:"noopener noreferrer",className:ne.learnMoreLink,children:"Learn more"})]})]}),t("div",{className:ne.divider}),t("div",{className:`${ne.settingsSection} ${ne.settingsSectionGrow}`,children:[t("div",{className:ne.settingsRow,children:[t("span",{className:ne.automationHeader,children:["Webhooks",t(Pn,{content:"Send annotation data to any URL endpoint when annotations change. Useful for custom integrations."})]}),t("div",{className:ne.autoSendContainer,children:[t("label",{htmlFor:"agentation-auto-send",className:`${ne.autoSendLabel} ${n.webhooksEnabled?ne.active:""} ${n.webhookUrl?"":ne.disabled}`,children:"Auto-Send"}),t(es,{id:"agentation-auto-send",checked:n.webhooksEnabled,onChange:p=>o({webhooksEnabled:p.target.checked}),disabled:!n.webhookUrl})]})]}),t("p",{className:ne.automationDescription,children:"The webhook URL will receive live annotation changes and annotation data."}),t("textarea",{className:ne.webhookUrlInput,placeholder:"Webhook URL","aria-label":"Webhook URL",value:n.webhookUrl,onKeyDown:p=>p.stopPropagation(),onChange:p=>o({webhookUrl:p.target.value})})]})]})]})})});function V_({x:e,y:n,elementName:o,reactComponents:r}){const i=R(null);return ct(()=>{const s=i.current;if(!s)return;const l=()=>{const d=s.offsetWidth,c=s.offsetHeight;s.style.left=`${Math.max(8,Math.min(e,window.innerWidth-d-8))}px`;const b=n-c-8;s.style.top=`${Math.max(8,Math.min(b,window.innerHeight-c-8))}px`};return l(),window.addEventListener("resize",l),()=>window.removeEventListener("resize",l)},[e,n,o,r]),t("div",{ref:i,className:`${L.hoverTooltip} ${L.enter}`,children:[r&&t("div",{className:L.hoverReactPath,children:r}),t("div",{className:L.hoverElementName,children:o})]})}var G_=`@charset "UTF-8";
/* Reset box-model and set borders */
/* ============================================ */
*,
::before,
::after {
  border-width: 0;
  border-style: solid;
  box-sizing: border-box;
}

/* Document */
/* ============================================ */
/**
 * 1. Correct line height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in iOS.
 * 3. Remove gray overlay on links for iOS.
 * 4. Render kerning consistently in all browsers.
 * 5. Correct font smoothing for macOS.
 */
:host {
  /* Inherited properties cross the shadow boundary, so a host page's
     text-transform, letter-spacing or font would otherwise restyle the UI. */
  font: 400 16px/1.5 system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-variant: normal;
  color: initial;
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-align: start;
  text-indent: 0;
  text-shadow: none;
  white-space: normal;
  direction: ltr;
  writing-mode: horizontal-tb;
  hyphens: manual;
  word-break: normal;
  overflow-wrap: normal;
  tab-size: 8;
  list-style: none;
  quotes: initial;
  caret-color: auto;
  user-select: auto;
  -webkit-text-fill-color: initial;
  -webkit-text-stroke: 0;
  text-rendering: auto;
  -webkit-text-size-adjust: 100%; /* 2 */
  -webkit-tap-highlight-color: transparent; /* 3 */
  font-feature-settings: "kern"; /* 4 */
  -webkit-font-feature-settings: "kern"; /* 5 */
  -moz-font-feature-settings: "kern"; /* 5 */
  -webkit-font-smoothing: antialiased; /* 5 */
  -moz-osx-font-smoothing: grayscale; /* 5 */
}

/* Vertical rhythm */
/* ============================================ */
p,
table,
blockquote,
address,
pre,
iframe,
form,
figure,
dl {
  margin: 0;
}

/* Headings */
/* ============================================ */
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  font-size: inherit;
  font-weight: inherit;
}

/* Lists (enumeration) */
/* ============================================ */
ul,
ol,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

/* Lists (definition) */
/* ============================================ */
dd {
  margin-left: 0;
}

/* Grouping content */
/* ============================================ */
/**
 * 1. Add the correct box sizing in Firefox.
 * 2. Show the overflow in Edge and IE.
 */
hr {
  clear: both;
  margin: 0;
  border-top-width: 1px;
  height: 0; /* 1 */
  box-sizing: content-box; /* 1 */
  overflow: visible; /* 2 */
  color: inherit;
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd \`em\` font sizing in all browsers.
 * 3. Wrap lines by default instead of overflow.
 */
pre {
  font-family: inherit; /* 1 */
  font-size: inherit; /* 2 */
  white-space: pre-line; /* 3 */
}

address {
  font-style: inherit;
}

/* Text-level semantics */
/* ============================================ */
/**
 * Remove the gray background on active links in IE 10.
 */
a {
  background-color: transparent;
  text-decoration: none;
  color: inherit;
}

/**
 * 1. Remove the bottom border in Chrome 57-
 * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
 */
abbr[title] {
  border-bottom: none; /* 1 */
  text-decoration: none; /* 2 */
}

/**
 * Add the correct font weight in Chrome, Edge, and Safari.
 */
b,
strong {
  font-weight: bolder;
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd \`em\` font sizing in all browsers.
 */
code,
kbd,
samp {
  font-family: "Menlo", "Monaco", "Consolas", "Courier New", monospace; /* 1 */
  font-size: inherit; /* 2 */
}

/**
 * Add the correct font size in all browsers.
 */
small {
  font-size: 80%;
}

/**
 * Prevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.
 */
sub,
sup {
  position: relative;
  vertical-align: baseline;
  line-height: 0;
  font-size: 75%;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/* Replaced content */
/* ============================================ */
/**
 * Prevent vertical alignment issues.
 */
svg,
img,
embed,
object,
iframe {
  vertical-align: bottom;
}

/*
 * 1. Remove image default bottom space.
 * 2. Prevent image from overflowing the container.
 */
img {
  display: block;
  max-width: 100%;
}

/**
 * Prevent alignment issues on Safari.
 */
@supports (background: -webkit-named-image(i)) {
  svg {
    will-change: transform;
  }
}
/* Forms */
/* ============================================ */
/**
 * Reset form fields to make them styleable.
 * 1. Make form elements stylable across systems iOS especially.
 * 2. Inherit text-transform from parent.
 */
button,
input,
optgroup,
select,
textarea {
  -webkit-appearance: none; /* 1 */
  appearance: none;
  border-radius: 0;
  margin: 0;
  padding: 0;
  background: transparent;
  vertical-align: middle;
  text-align: inherit;
  text-transform: inherit; /* 2 */
  font: inherit;
  color: inherit;
}

/**
 * Correct cursors for clickable elements.
 */
button,
[type=button],
[type=reset],
[type=submit] {
  cursor: pointer;
}

button:disabled,
[type=button]:disabled,
[type=reset]:disabled,
[type=submit]:disabled {
  cursor: default;
}

/**
 * Clickable labels and selects.
 */
select,
label {
  cursor: pointer;
}

/**
 * Improve outlines for Firefox and unify style with input elements & buttons.
 */
:-moz-focusring {
  outline: auto;
}

select:disabled {
  opacity: inherit;
}

/**
 * 1. Remove padding.
 */
option {
  padding: 0; /* 1 */
}

/**
 * Reset to invisible
 */
fieldset {
  margin: 0;
  padding: 0;
  min-width: 0;
}

legend {
  display: contents;
  padding: 0;
}

/**
 * Add the correct vertical alignment in Chrome, Firefox, and Opera.
 */
progress {
  vertical-align: baseline;
}

/**
 * Remove the default vertical scrollbar in IE 10+.
 */
textarea {
  overflow: auto;
}

/**
 * Remove increment and decrement buttons in Chrome.
 */
[type=number]::-webkit-inner-spin-button,
[type=number]::-webkit-outer-spin-button {
  -webkit-appearance: none;
}

/**
 * Correct the outline style in Safari.
 */
[type=search] {
  outline-offset: -2px;
}

/**
 * Remove the inner padding in Chrome and Safari on macOS.
 */
[type=search]::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
 * Remove the ‘X’ from Chrome and Safari.
 */
[type=search]::-webkit-search-decoration,
[type=search]::-webkit-search-cancel-button,
[type=search]::-webkit-search-results-button,
[type=search]::-webkit-search-results-decoration {
  display: none;
}

/**
 * 1. Hide file input completely.
 * 2. Remove selected file text.
 * 3. Set cursor to pointer for all browsers.
 */
[type=file] {
  opacity: 0; /* 1 */
  font-size: 0; /* 2 */
  cursor: pointer; /* 3 */
}

/**
	* Fix appearance for Firefox
	*/
[type=number] {
  -moz-appearance: textfield;
}

/**
 * Set cursor to pointer for all browsers.
 */
[type=range] {
  cursor: pointer;
}

/**
 * Reset slider thumbs to make them styleable.
 */
[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
}

[type=range]::-moz-range-thumb {
  -moz-appearance: none;
  appearance: none;
  border-width: 0;
  border-radius: 0;
  background-color: transparent;
}

/* Interactive */
/* ============================================ */
/*
 * Add the correct display in Edge, IE 10+, and Firefox.
 */
details {
  display: block;
}

/*
 * Add the correct display in all browsers.
 */
summary {
  display: list-item;
}

/*
 * Remove outline for editable content.
 */
[contenteditable]:focus {
  outline: auto;
}

/* Tables */
/* ============================================ */
/**
1. Correct table border color inheritance in all Chrome and Safari.
*/
table {
  border-color: inherit; /* 1 */
  border-collapse: collapse;
}

caption {
  text-align: left;
}

td,
th {
  vertical-align: top;
  padding: 0;
}

th {
  text-align: left;
  font-weight: inherit;
}

/* Misc */
/* ============================================ */
/*
 * Make placeholder style consistent across all browsers.
 */
::placeholder {
  color: #999;
  opacity: 1;
}

/*
 * Hide focus outline but keep it visible for Windows High Contrast Mode.
 */
:focus {
  outline-style: solid;
  outline-color: transparent;
}

/*
 * Hide input arrow when used with datalist.
 */
::-webkit-calendar-picker-indicator {
  display: none !important;
}`,K_=[G_,pc,wl,j_,Rd,mc,gr,H_,W_,X_,Q_,Y_].join(`
`);function sr(e,n="filtered",o){const{name:r,path:i}=Zn(e,o);if(n==="off")return{name:r,elementName:r,path:i,reactComponents:null};const s=S_(e,{mode:n});return{name:s.path?`${s.path} ${r}`:r,elementName:r,path:i,reactComponents:s.path}}var sl=!1,ts={outputDetail:"standard",autoClearAfterCopy:!1,annotationColorId:"blue",blockInteractions:!0,reactEnabled:!0,markerClickBehavior:"edit",webhookUrl:"",webhooksEnabled:!0},il=e=>{if(!e||!e.trim())return!1;try{const n=new URL(e.trim());return n.protocol==="http:"||n.protocol==="https:"}catch{return!1}},vn=e=>e.metaKey||e.ctrlKey,Co=[{id:"indigo",label:"Indigo",srgb:"#6155F5",p3:"color(display-p3 0.38 0.33 0.96)"},{id:"blue",label:"Blue",srgb:"#0088FF",p3:"color(display-p3 0.00 0.53 1.00)"},{id:"cyan",label:"Cyan",srgb:"#00C3D0",p3:"color(display-p3 0.00 0.76 0.82)"},{id:"green",label:"Green",srgb:"#34C759",p3:"color(display-p3 0.20 0.78 0.35)"},{id:"yellow",label:"Yellow",srgb:"#FFCC00",p3:"color(display-p3 1.00 0.80 0.00)"},{id:"orange",label:"Orange",srgb:"#FF8D28",p3:"color(display-p3 1.00 0.55 0.16)"},{id:"red",label:"Red",srgb:"#FF383C",p3:"color(display-p3 1.00 0.22 0.24)"}],J_=[...Co.map(e=>`
    [data-agentation-accent="${e.id}"] {
      --agentation-color-accent: ${e.srgb};
    }
    @supports (color: color(display-p3 0 0 0)) {
      [data-agentation-accent="${e.id}"] {
        --agentation-color-accent: ${e.p3};
      }
    }
  `),`:host {
    ${Co.map(e=>`--agentation-color-${e.id}: ${e.srgb};`).join(`
`)}
  }`,`@supports (color: color(display-p3 0 0 0)) {
    :host {
      ${Co.map(e=>`--agentation-color-${e.id}: ${e.p3};`).join(`
`)}
    }
  }`].join("");function ns(e){let n=e;for(let r=zt(n.ownerDocument);r;r=zt(n.ownerDocument))n=r;let o=n;for(;o&&o!==document.body;){const i=window.getComputedStyle(o).position;if(i==="fixed"||i==="sticky")return!0;o=o.parentElement}return!1}function wo(e){return e.kind!=="placement"&&e.kind!=="rearrange"&&e.status!=="resolved"&&e.status!=="dismissed"}function ir(e){const n=us(e),o=n.found?n:D_(e);if(o.found&&o.source)return B_(o.source,"path")}function ru(e={}){const n=qa(e.useHashLocation??!1),o=A(!1),r=Ka(e.portalContainer);return r?mr(An(Z_,{...e,key:e.useHashLocation?n:void 0,pathname:n,activeState:o,portalHost:r}),r):null}function Z_({pathname:e,activeState:n,portalHost:o,useHashLocation:r=!1,appName:i,enableKeyboardShortcuts:s=!0,identifyingAttributes:l=fs,copyFormat:d="markdown",onOpenSource:c,portalContainer:b,demoAnnotations:f,demoDelay:m=1e3,enableDemoMode:g=!1,onAnnotationAdd:v,onAnnotationDelete:x,onAnnotationUpdate:$,onAnnotationsClear:T,onCopy:O,onSubmit:Se,copyToClipboard:z=!0,endpoint:p,sessionId:J,onSessionCreated:ie,webhookUrl:X,className:xe}){var hi,mi,pi,gi,fi,yi,bi;const[W,_e]=n,[,se]=A(0),[F]=A(()=>Aa(document,()=>se(a=>a+1)));K(()=>(F.start(),()=>F.stop()),[F]);const we=typeof d=="object"?d.attribute:void 0,V=hs(()=>we?[...l,we]:l,[l,we]),oe=R(!0);ct(()=>(oe.current=!0,()=>{oe.current=!1}),[]);const ce=ue(a=>r?Va(JSON.stringify([p,e]),a):a(),[p,e,r]),at=R(new Map),Ce=R(new Set),tt=a=>wo(a)&&!Ce.current.has(a.id),Ie=async(...a)=>{const u=await Vi(...a),h=a[2],y=h.id;if(y&&(at.current.set(y,u.id),Ce.current.has(y)&&Ce.current.add(u.id)),!r){const C=new URL(h.url||window.location.href).pathname,S=wn(C).find(k=>k.id===y);try{if(Ce.current.has(y))await nr(a[0],u.id);else if(S&&S.comment!==h.comment)return await Kr(a[0],u.id,{comment:S.comment}),{...u,comment:S.comment}}catch(k){console.warn("[Agentation] Failed to apply changes made during sync:",k)}}return u},Je=a=>r?{...a,annotations:a.annotations.filter(u=>!Ce.current.has(u.id)&&Ga(u.url||a.url,e,window.location.origin))}:a,ut=R(e);ut.current=e;const Tt=(a,u,h,y=e)=>{const C=Ra(a,wn(y),u,at.current).filter(tt);y===ut.current&&oe.current&&Dt(C),qr(y,C,h)},[ve,Dt]=A([]),[cn,mn]=A(!0),[pn,ht]=A(()=>d_()),[Ot,vt]=A(!1);ct(()=>{ml()},[]);const yt=R(null),Ht=R(null),gn=R(null),en=R(null),dn=R(!1),j=R(!1),ae=R(!1);ct(()=>{var a,u,h;W&&dn.current?(dn.current=!1,(u=(a=gn.current)==null?void 0:a.querySelector("button:not(:disabled)"))==null||u.focus()):!W&&j.current&&(j.current=!1,(h=Ht.current)==null||h.focus())},[W]),K(()=>{const a=h=>{const y=yt.current;y&&h.composedPath().includes(y)&&h.stopPropagation()},u=["mousedown","click","pointerdown"];return u.forEach(h=>o.addEventListener(h,a)),()=>{u.forEach(h=>o.removeEventListener(h,a))}},[o]);const[fe,Me]=A(!1),[Le,De]=A(!1),[Pe,me]=A(null),[Ue,_t]=A({x:0,y:0}),[D,w]=A(null),[M,E]=A(!1),P=Ni(),re=Ni(),[G,Y]=A("idle"),[Ee,ke]=A(!1),Ne=R(new Set),he=R(new Set),Ae=R(),We=ue(()=>{!Ne.current.size&&!Ae.current&&ke(!1)},[]);K(()=>()=>clearTimeout(Ae.current),[]);const[Ze,mt]=A(null),[He,Xe]=A(null),[Ye,Te]=A([]),[bt,Qe]=A(null),ze=R(null);K(()=>()=>{ze.current&&clearTimeout(ze.current)},[]);const[Z,It]=A(null),pt=R(null),fn=R(!1),[tn,kt]=A(!1);ct(()=>{if(Z||!pt.current)return;const a=pt.current;if(pt.current=null,D)return;const u=W&&a.isConnected&&!a.disabled?a:Ht.current;u==null||u.focus({preventScroll:!0})},[Z,W,D]);const[Yt,Pt]=A(null),[Wt,nn]=A([]),[on,Ms]=A(0),[$s,Is]=A(!1),[Ge,Ol]=A(!1),[jt,Ns]=A(!1),[Nt,kn]=A(!1),[Wl,Es]=A("main"),[Rs,fr]=A(!1),[qe,yr]=A(!1),[Sn,oo]=A(!1),[Be,_n]=A([]),[Wn,Cn]=A(null),br=R(!1),[st,Ls]=A(!1),[Ts,xr]=A(!1),[Bs,Fl]=A(1),[Ds,eu]=A("new-page"),[Et,Io]=A(""),[zl,Hl]=A(!1),[Q,rn]=A(null),wr=R(!1),vr=R({rearrange:null,placements:[]}),Mn=R({rearrange:null,placements:[]}),[Yl,Ps]=A(0),[jl,Ul]=A(0),[Fn,As]=A([]),[zn,Os]=A(null),Ws=R({designPlacements:Be,rearrangeState:Q,blankCanvas:st,wireframePurpose:Et});Ws.current={designPlacements:Be,rearrangeState:Q,blankCanvas:st,wireframePurpose:Et};const Hn=R({placements:Fn,rearrange:zn}),ro=R(new Set),No=R(new Set),Vt=R(null),Yn=R(),Fs=qe&&W&&!Sn&&st;K(()=>{if(Fs){xr(!1);const a=dr(()=>{xr(!0)});return()=>cancelAnimationFrame(a)}else xr(!1)},[Fs]);const kr=R(new Map),Sr=R([]),Cr=R(new Map),$n=R(null),[Ut,Mr]=A(!1),[Gt,Xl]=A([]),$r=R(Gt);$r.current=Gt;const[zs,tu]=A(null),Ir=R(null);R(!1),R([]),R(0),R(null),R(null),R(1);const[Nr,Hs]=A(!1),jn=R(null),[At,yn]=A([]),so=R(!1),Rt=()=>{fr(!0)},Ql=()=>{fr(!1)},Ys=()=>{Nr||(jn.current=Ve(()=>Hs(!0),850))},js=()=>{jn.current&&(clearTimeout(jn.current),jn.current=null),Hs(!1),Ql()};K(()=>()=>{jn.current&&clearTimeout(jn.current)},[]);const[et,ql]=A(()=>{try{const a=JSON.parse(localStorage.getItem("feedback-toolbar-settings")??"");return{...ts,...a,annotationColorId:Co.find(u=>u.id===a.annotationColorId)?a.annotationColorId:ts.annotationColorId}}catch{return ts}}),[sn,Us]=A(!0),[Xs,Qs]=A(!1),Vl=ue(a=>{ql(u=>({...u,...a}))},[]),Gl=ue(()=>{var a;(a=yt.current)==null||a.classList.add(L.disableTransitions),Us(u=>!u),dr(()=>{var u;(u=yt.current)==null||u.classList.remove(L.disableTransitions)})},[]),Kl=!1,un="off",[xt,Er]=A(r?null:J??null),qs=R(!1),[In,Nn]=A(p?"connecting":"disconnected"),[dt,Rr]=A(null),[Eo,Vs]=A(!1),io=R(null),Ro=R(!1),En=R(new Set),Lo=R(new Map),Gs=ue(a=>{En.current.add(a),Kt.current===a&&(Kt.current=null)},[]),[bn,To]=A(new Set),[Xt,lo]=A(!1),[Rn,Un]=A(!1),[hn,Lr]=A(!1),Ln=R(null),Qt=R(null),ao=R(null),Xn=R(null),co=R(!1),Ks=R(0),Kt=R(null),Js=R(null),Tr=8,Jl=50,Br=R(null),Bo=R(null),_o=R(null),Zl=ue(()=>Es("main"),[]);K(()=>{Nt||fr(!1)},[Nt]),ct(()=>{var a,u;Nt&&ae.current&&(ae.current=!1,(u=(a=yt.current)==null?void 0:a.querySelector("[data-agentation-settings-panel] button"))==null||u.focus())},[Nt]);const Do=W&&cn&&!qe;K(()=>{if(Do)De(!1),Me(!0),En.current.clear();else if(fe){De(!0);const a=Ve(()=>{Me(!1),De(!1)},250);return()=>clearTimeout(a)}},[Do]),K(()=>{Ol(!0),Ms(window.scrollY);const a=wn(e);Dt(a.filter(wo)),sl||(Qs(!0),sl=!0,Ve(()=>Qs(!1),750));try{const u=localStorage.getItem("feedback-toolbar-theme");u!==null&&Us(u==="dark")}catch{}try{const u=localStorage.getItem("feedback-toolbar-position");if(u){const h=JSON.parse(u);typeof h.x=="number"&&typeof h.y=="number"&&Rr(h)}}catch{}},[e]),K(()=>{Ge&&localStorage.setItem("feedback-toolbar-settings",JSON.stringify(et))},[et,Ge]),K(()=>{Ge&&localStorage.setItem("feedback-toolbar-theme",sn?"dark":"light")},[sn,Ge]);const Zs=R(!1);K(()=>{const a=Zs.current;Zs.current=Eo,a&&!Eo&&dt&&Ge&&localStorage.setItem("feedback-toolbar-position",JSON.stringify(dt))},[Eo,dt,Ge]),K(()=>{if(!p||!Ge||qs.current)return;qs.current=!0,Nn("connecting");const a=window.location.href;ce(async()=>{try{const h=a_(e),y=J||h;let C=!1;if(y)try{const S=wn(e),k=Je(await qi(p,y));Sr.current=k.annotations.filter(te=>te.kind==="placement"||te.kind==="rearrange"),oe.current&&(Er(k.id),Nn("connected")),Vr(e,k.id),C=!0;const H=wn(e).filter(wo),U=new Set(k.annotations.map(te=>te.id)),q=H.filter(te=>!U.has(te.id));if(q.length>0){const de=`${typeof window<"u"?window.location.origin:""}${e}`,Oe=(await Promise.allSettled(q.map(pe=>Ie(p,k.id,{...pe,sessionId:k.id,url:de})))).map((pe,$e)=>pe.status==="fulfilled"?pe.value:(console.warn("[Agentation] Failed to sync annotation:",pe.reason),q[$e])),le=[...k.annotations,...Oe];Tt(S,le,k.id)}else Tt(S,k.annotations,k.id)}catch(S){console.warn("[Agentation] Could not join session, creating new:",S),c_(e)}if(!C){const S=await Gr(p,a);Vr(e,S.id),oe.current&&(Er(S.id),Nn("connected"),ie==null||ie(S.id));const k=r?new Map([[e,wn(e)]]):e_(),H=typeof window<"u"?window.location.origin:"",U=[];for(const[q,te]of k){const de=te.filter(le=>wo(le)&&!le._syncedTo);if(de.length===0)continue;const ye=`${H}${q}`,Oe=q===e;U.push((async()=>{try{const le=Oe?S:await Gr(p,ye),$e=(await Promise.allSettled(de.map(je=>Ie(p,le.id,{...je,sessionId:le.id,url:ye})))).map((je,it)=>je.status==="fulfilled"?je.value:(console.warn("[Agentation] Failed to sync annotation:",je.reason),de[it]));Tt(de,$e,le.id,q)}catch(le){console.warn(`[Agentation] Failed to sync annotations for ${q}:`,le)}})())}await Promise.allSettled(U)}}catch(h){oe.current&&Nn("disconnected"),console.warn("[Agentation] Failed to initialize session, using local storage:",h)}})},[p,J,Ge,ie,e,ce]),K(()=>{if(!p||!Ge)return;const a=async()=>{try{(await fetch(`${p}/health`)).ok?Nn("connected"):Nn("disconnected")}catch{Nn("disconnected")}};a();const u=pl(a,1e4);return()=>clearInterval(u)},[p,Ge]);const Po=R(ve),ei=R(!1);ct(()=>{Po.current=ve,ei.current=ve.length>0||Be.length>0||((Q==null?void 0:Q.sections.length)??0)>0},[ve,Be.length,Q==null?void 0:Q.sections.length]);const Dr=ue(a=>{const u=Ne.current.has(a);if(u&&(he.current.delete(a),he.current.size))return;const h=u?new Set(Ne.current):new Set([a]);u&&(Ne.current.clear(),We());for(const S of h)Lo.current.delete(S),En.current.delete(S);Dt(S=>S.filter(k=>!h.has(k.id))),To(S=>new Set([...S].filter(k=>!h.has(k))));const y=u?[]:Po.current.filter(S=>S.kind!=="placement"&&S.kind!=="rearrange"),C=y.findIndex(S=>S.id===a);C>=0&&C<y.length-1&&(Qe(S=>S===null?C:Math.min(S,C)),ze.current&&clearTimeout(ze.current),ze.current=Ve(()=>Qe(null),200))},[We]);K(()=>!p||!Ge||!xt?void 0:O_(p,xt,()=>ei.current,h=>{var S,k;const{id:y,kind:C}=h;if(C==="placement"){for(const[H,U]of kr.current)if(U===y){(S=$n.current)==null||S.placements.forget(H),_n(q=>q.filter(te=>te.id!==H));break}}else if(C==="rearrange"){for(const[H,U]of Cr.current)if(U===y){(k=$n.current)==null||k.rearrange.forget(H),rn(q=>{if(!q)return null;const te=q.sections.filter(de=>de.id!==H);return te.length===0?null:{...q,sections:te}});break}}else{if(!Po.current.some(H=>H.id===y))return;To(H=>new Set(H).add(y))}}),[p,Ge,xt]),K(()=>{if(!p||!Ge)return;const a=Js.current==="disconnected",u=In==="connected";Js.current=In,a&&u&&ce(async()=>{try{const y=wn(e).filter(wo);if(y.length===0)return;const S=`${typeof window<"u"?window.location.origin:""}${e}`;let k=xt,H=[];if(k)try{H=Je(await qi(p,k)).annotations}catch{k=null}k||(k=(await Gr(p,S)).id,oe.current&&Er(k),Vr(e,k));const U=new Set(H.map(te=>te.id)),q=y.filter(te=>!U.has(te.id));if(q.length>0){const de=(await Promise.allSettled(q.map(Oe=>Ie(p,k,{...Oe,sessionId:k,url:S})))).map((Oe,le)=>Oe.status==="fulfilled"?Oe.value:(console.warn("[Agentation] Failed to sync annotation on reconnect:",Oe.reason),q[le])),ye=[...H,...de];Tt(y,ye,k)}}catch(y){console.warn("[Agentation] Failed to sync on reconnect:",y)}})},[In,p,Ge,xt,e,ce]);const ea=ue(()=>{Ot||(vt(!0),kn(!1),_e(!1),Ve(()=>{__(!0),ht(!0),vt(!1)},400))},[Ot]);K(()=>{if(!g||!Ge||!f||f.length===0||ve.length>0)return;const a=[];return a.push(Ve(()=>{_e(!0)},m-200)),f.forEach((u,h)=>{const y=m+h*300;a.push(Ve(()=>{const C=document.querySelector(u.selector);if(!C)return;const S=ft(C),{name:k,path:H}=Zn(C),U={id:`demo-${Date.now()}-${h}`,x:(S.left+S.width/2)/window.innerWidth*100,y:S.top+S.height/2+window.scrollY,comment:u.comment,element:k,elementPath:H,timestamp:Date.now(),selectedText:u.selectedText,boundingBox:{x:S.left,y:S.top+window.scrollY,width:S.width,height:S.height},nearbyText:go(C),cssClasses:fo(C)};Dt(q=>[...q,U])},y))}),()=>{a.forEach(clearTimeout)}},[g,Ge,f,m]),K(()=>{const a=()=>{Ms(window.scrollY),se(u=>u+1),Is(!0),_o.current&&clearTimeout(_o.current),_o.current=Ve(()=>{Is(!1)},150)};return F.addEventListener("scroll",a,{passive:!0,capture:!0}),()=>{F.removeEventListener("scroll",a,!0),_o.current&&clearTimeout(_o.current)}},[F]),K(()=>{if(!Ge)return;const a=ve.filter(u=>!bn.has(u.id));a.length>0?xt?qr(e,a,xt):Dl(e,a):localStorage.removeItem(ws(e))},[ve,e,Ge,xt,Ee,bn]),K(()=>{if(Ge&&!br.current){br.current=!0;const a=t_(e);a.length>0&&_n(a)}},[Ge,e]),K(()=>{if(Ge&&br.current&&!st){const a=Be.filter(u=>!Fn.includes(u));a.length>0?n_(e,a):o_(e)}},[Be,e,Ge,st,Fn]),K(()=>{if(Ge&&!wr.current){wr.current=!0;const a=r_(e);if(a){const u={...a,sections:a.sections.map(h=>({...h,currentRect:h.currentRect??{...h.originalRect}}))};rn(u)}}},[Ge,e]),K(()=>{Ge&&wr.current&&!st&&(Q&&Q!==zn?s_(e,Q):i_(e))},[Q,e,Ge,st,zn]);const Pr=R(!1);K(()=>{if(Ge&&!Pr.current){Pr.current=!0;const a=l_(e);a&&(Mn.current={rearrange:a.rearrange,placements:a.placements||[]},a.purpose&&Io(a.purpose))}},[Ge,e]),K(()=>{var u,h,y;if(!Ge||!Pr.current||Ee)return;const a=Mn.current;st?(((u=Q==null?void 0:Q.sections)==null?void 0:u.length)??0)>0||Be.length>0||Et?Qi(e,{rearrange:Q,placements:Be,purpose:Et}):tr(e):(((y=(h=a.rearrange)==null?void 0:h.sections)==null?void 0:y.length)??0)>0||a.placements.length>0||Et?Qi(e,{rearrange:a.rearrange,placements:a.placements,purpose:Et}):tr(e)},[Q,Be,Et,st,e,Ge,Ee]),K(()=>{qe&&!Q&&rn({sections:[],originalOrder:[],detectedAt:Date.now()})},[qe,Q]),K(()=>{if(!p||!xt)return;const a={create:h=>ce(()=>Vi(p,xt,h)),update:(h,y)=>ce(()=>Kr(p,h,y)),remove:h=>ce(()=>nr(p,h))};kr.current=new Map,Cr.current=new Map;const u={placements:tl(a,kr.current,Sr.current.filter(h=>h.kind==="placement")),rearrange:tl(a,Cr.current,Sr.current.filter(h=>h.kind==="rearrange"))};return $n.current=u,()=>{u.placements.dispose(),u.rearrange.dispose(),$n.current===u&&($n.current=null)}},[p,xt,e,ce]),K(()=>{var u;const a=window.location.pathname+window.location.search+window.location.hash;(u=$n.current)==null||u.placements.replace(Be.filter(h=>!Fn.includes(h)).map(h=>({id:h.id,x:h.x/window.innerWidth*100,y:h.y,comment:`Place ${h.type} at (${Math.round(h.x)}, ${Math.round(h.y)}), ${h.width}×${h.height}px${h.text?` — "${h.text}"`:""}`,element:`[design:${h.type}]`,elementPath:"[placement]",timestamp:h.timestamp,url:a,intent:"change",severity:"important",kind:"placement",placement:{componentType:h.type,width:h.width,height:h.height,scrollY:h.scrollY,text:h.text}})))},[Be,p,xt,e,Fn]),K(()=>{const a=$n.current;if(!a)return;if(Q===zn){a.rearrange.replace([]);return}const u=Ve(()=>{const h=window.location.pathname+window.location.search+window.location.hash,y=[];for(const C of(Q==null?void 0:Q.sections)??[]){const S=C.originalRect,k=C.currentRect,H=Math.abs(S.x-k.x)>1||Math.abs(S.y-k.y)>1||Math.abs(S.width-k.width)>1||Math.abs(S.height-k.height)>1;if(!H&&!C.note)continue;const U=C.note?` — "${C.note}"`:"";y.push({id:C.id,x:k.x/window.innerWidth*100,y:k.y,comment:H?`Move ${C.label} section (${C.tagName}) — from (${Math.round(S.x)},${Math.round(S.y)}) ${Math.round(S.width)}×${Math.round(S.height)} to (${Math.round(k.x)},${Math.round(k.y)}) ${Math.round(k.width)}×${Math.round(k.height)}${U}`:`Note on ${C.label} section (${C.tagName})${U}`,element:C.selector,elementPath:"[rearrange]",timestamp:Q.detectedAt,url:h,intent:"change",severity:"important",kind:"rearrange",rearrange:{selector:C.selector,label:C.label,tagName:C.tagName,originalRect:S,currentRect:k}})}a.rearrange.replace(y)},300);return()=>clearTimeout(u)},[Q,p,xt,e,zn]);const Ar=ue(()=>{clearTimeout(Yn.current),oo(!1),yr(!0)},[]);K(()=>()=>clearTimeout(Yn.current),[]);const uo=ue(()=>{oo(!0),yr(!1),Cn(null),clearTimeout(Yn.current),Yn.current=Ve(()=>{oo(!1)},300)},[]),Ao=ue(()=>{var u,h,y;const a=(u=Ht.current)==null?void 0:u.getRootNode();j.current=!!(a!=null&&a.activeElement)&&!!((h=yt.current)!=null&&h.contains(a.activeElement)),j.current&&((y=a==null?void 0:a.activeElement)==null||y.blur()),kn(!1),qe&&(oo(!0),yr(!1),Cn(null),clearTimeout(Yn.current),Yn.current=Ve(()=>{oo(!1)},300)),_e(!1)},[qe]),ti=ue(()=>{jt||(Ea(),Ns(!0))},[jt]),Oo=ue(()=>{jt&&(Ii(),Ns(!1))},[jt]),Or=ue(()=>{jt?Oo():ti()},[jt,ti,Oo]),ho=ue((a=At)=>{const u=a.filter(k=>k.element.isConnected);if(u.length===0){yn([]);return}const h=u[0],y=h.element,C=u.length>1,S=u.map(k=>ft(k.element));if(C){const k={left:Math.min(...S.map($e=>$e.left)),top:Math.min(...S.map($e=>$e.top)),right:Math.max(...S.map($e=>$e.right)),bottom:Math.max(...S.map($e=>$e.bottom))},H=u.slice(0,5).map($e=>$e.name).join(", "),U=u.length>5?` +${u.length-5} more`:"",q=S.map($e=>({x:$e.left,y:$e.top+window.scrollY,width:$e.width,height:$e.height})),de=u[u.length-1].element,ye=S[S.length-1],Oe=ye.left+ye.width/2,le=ye.top+ye.height/2,pe=ns(de);w({id:Date.now().toString(),x:Oe/window.innerWidth*100,y:pe?le:le+window.scrollY,clientY:le,element:`${u.length} elements: ${H}${U}`,elementPath:"multi-select",boundingBox:{x:k.left,y:k.top+window.scrollY,width:k.right-k.left,height:k.bottom-k.top},isMultiSelect:!0,isFixed:pe,elementBoundingBoxes:q,multiSelectElements:u.map($e=>$e.element),targetElement:de,fullPath:So(y),accessibility:Vo(y),computedStyles:qo(y),computedStylesObj:Qo(y),nearbyElements:Xo(y),cssClasses:fo(y),nearbyText:go(y),sourceFile:ir(y),attributes:ko(y,V)})}else{const k=S[0],H=ns(y);w({id:Date.now().toString(),x:k.left/window.innerWidth*100,y:H?k.top:k.top+window.scrollY,clientY:k.top,element:h.name,elementPath:h.path,boundingBox:{x:k.left,y:H?k.top:k.top+window.scrollY,width:k.width,height:k.height},isFixed:H,fullPath:So(y),accessibility:Vo(y),computedStyles:qo(y),computedStylesObj:Qo(y),nearbyElements:Xo(y),cssClasses:fo(y),nearbyText:go(y),reactComponents:h.reactComponents,targetElement:y,sourceFile:ir(y),attributes:ko(y,V)})}yn([]),me(null)},[At,V]);K(()=>{W||(w(null),It(null),Pt(null),nn([]),me(null),kn(!1),yn([]),so.current=!1,jt&&Oo())},[W,jt,Oo]),K(()=>()=>{Ii()},[]),K(()=>{if(!W)return;const a=["p","span","h1","h2","h3","h4","h5","h6","li","td","th","label","blockquote","figcaption","caption","legend","dt","dd","pre","code","em","strong","b","i","u","s","a","time","address","cite","q","abbr","dfn","mark","small","sub","sup","[contenteditable]"].join(", "),u=document.createElement("style");return u.id="agentation-cursor",u.textContent=`
      body { cursor: crosshair !important; }
      body :is(${a}) { cursor: text !important; }
    `,document.head.appendChild(u),()=>{const h=document.getElementById("agentation-cursor");h&&h.remove()}},[W]),K(()=>{if(zs!==null&&W)return document.documentElement.setAttribute("data-drawing-hover",""),()=>document.documentElement.removeAttribute("data-drawing-hover")},[zs,W]),K(()=>{if(!W||D||Z||Ut||qe)return;let a=null;const u=(S,k,H)=>{const U=ar(S,k),q=H?Ri(S,k):U;if(!q||$t(q,"[data-feedback-toolbar], [data-annotation-popup], [data-annotation-marker]")){me(null);return}const{name:te,elementName:de,path:ye,reactComponents:Oe}=sr(q,un,V);me({element:te,elementName:de,elementPath:ye,rect:ft(q),reactComponents:Oe,isPiercing:H&&q!==U}),_t({x:S,y:k})},h=S=>{const k=S.composedPath()[0]||S.target;if($t(k,"[data-feedback-toolbar], [data-annotation-popup], [data-annotation-marker]")){a=null,me(null);return}a={x:S.clientX,y:S.clientY},u(S.clientX,S.clientY,vn(S))},y=S=>{(S.key==="Meta"||S.key==="Control")&&a&&u(a.x,a.y,vn(S))},C=()=>{a=null,me(null)};return F.addEventListener("mousemove",h),F.addEventListener("keydown",y),F.addEventListener("keyup",y),F.addEventListener("mouseleave",C),window.addEventListener("blur",C),()=>{F.removeEventListener("mousemove",h),F.removeEventListener("keydown",y),F.removeEventListener("keyup",y),F.removeEventListener("mouseleave",C),window.removeEventListener("blur",C)}},[W,D,Z,Ut,qe,un,V]);const Wo=ue((a,u)=>{var h,y,C,S;if(Z&&!Rn){(h=Bo.current)==null||h.shake();return}if(D&&!Xt){const k=(y=yt.current)==null?void 0:y.querySelector("[data-annotation-popup]:not([data-annotation-card]) textarea");if(k!=null&&k.value.trim()){(C=Br.current)==null||C.shake();return}lo(!0)}if(pt.current=u??null,fn.current=(u==null?void 0:u.matches(":focus-visible"))??!1,kt(!1),Un(!1),It(a),mt(null),Xe(null),Te([]),(S=a.elementBoundingBoxes)!=null&&S.length){const k=[];for(const H of a.elementBoundingBoxes){const U=H.x+H.width/2,q=H.y+H.height/2-window.scrollY,te=Go(U,q,H);te&&k.push(te)}nn(k),Pt(null)}else if(a.boundingBox){const k=a.boundingBox,H=k.x+k.width/2,U=a.isFixed?k.y+k.height/2:k.y+k.height/2-window.scrollY,q=Go(H,U,k);if(q){const te=ft(q),de=te.width/k.width,ye=te.height/k.height;de<.5||ye<.5?Pt(null):Pt(q)}else Pt(null);nn([])}else Pt(null),nn([])},[D,Xt,Z,Rn]);K(()=>{if(!W||Ut||qe)return;const a=u=>{var $e,je,it;if(co.current){co.current=!1,u.preventDefault(),u.stopPropagation();return}const h=u.composedPath()[0]||u.target;if($t(h,"[data-feedback-toolbar]")||$t(h,"[data-annotation-popup]")||$t(h,"[data-annotation-marker]"))return;if(vn(u)&&!D&&!Z){u.preventDefault(),u.stopPropagation(),so.current=u.shiftKey;const wt=Ri(u.clientX,u.clientY);if(!wt)return;const be=ft(wt),{name:ge,path:ot,reactComponents:lt}=sr(wt,un,V),Jt=At.findIndex(St=>St.element===wt);Jt>=0?yn(St=>St.filter((qn,Vn)=>Vn!==Jt)):yn(St=>[...St,{element:wt,rect:be,name:ge,path:ot,reactComponents:lt??void 0}]);return}const y=$t(h,"button, a, input, select, textarea, [role='button'], [onclick]");if(et.blockInteractions&&(u.preventDefault(),u.stopPropagation()),D&&!Xt){if(y&&!et.blockInteractions)return;u.preventDefault(),($e=Br.current)==null||$e.shake();return}if(Z&&!Rn){if(y&&!et.blockInteractions)return;u.preventDefault(),(je=Bo.current)==null||je.shake();return}u.preventDefault();const C=ar(u.clientX,u.clientY);if(!C)return;const{name:S,path:k,reactComponents:H}=sr(C,un,V),U=ft(C),q=u.clientX/window.innerWidth*100,te=ns(C),de=te?u.clientY:u.clientY+window.scrollY,ye=(it=C.ownerDocument.defaultView)==null?void 0:it.getSelection();let Oe;ye&&ye.toString().trim().length>0&&(Oe=ye.toString().trim().slice(0,500));const le=Qo(C),pe=qo(C);lo(!1),w({id:Date.now().toString(),x:q,y:de,clientY:u.clientY,element:S,elementPath:k,selectedText:Oe,boundingBox:{x:U.left,y:te?U.top:U.top+window.scrollY,width:U.width,height:U.height},nearbyText:go(C),cssClasses:fo(C),isFixed:te,fullPath:So(C),accessibility:Vo(C),computedStyles:pe,computedStylesObj:le,nearbyElements:Xo(C),reactComponents:H??void 0,sourceFile:ir(C),attributes:ko(C,V),frame:Ta(C,u.clientX,u.clientY),targetElement:C}),me(null)};return F.addEventListener("click",a,!0),()=>F.removeEventListener("click",a,!0)},[W,Ut,qe,D,Xt,Z,Rn,et.blockInteractions,un,V,At]),K(()=>{if(!W)return;const a=h=>{const y=(h.key==="Meta"||h.key==="Control")&&!vn(h),C=h.key==="Shift"&&so.current;(y||C)&&!Qt.current&&At.length>0&&ho()},u=()=>{var h;so.current=!1,yn([]),me(null),Ln.current=null,Qt.current=null,Lr(!1),(h=Xn.current)==null||h.replaceChildren()};return F.addEventListener("keyup",a),window.addEventListener("blur",u),()=>{F.removeEventListener("keyup",a),window.removeEventListener("blur",u)}},[W,At,ho]),K(()=>{if(!W||D||Ut||qe)return;const a=u=>{if(u.button!==0)return;co.current=!1;const h=u.composedPath()[0]||u.target;if($t(h,"[data-feedback-toolbar]")||$t(h,"[data-annotation-marker]")||$t(h,"[data-annotation-popup]"))return;const y=new Set(["P","SPAN","H1","H2","H3","H4","H5","H6","LI","TD","TH","LABEL","BLOCKQUOTE","FIGCAPTION","CAPTION","LEGEND","DT","DD","PRE","CODE","EM","STRONG","B","I","U","S","A","TIME","ADDRESS","CITE","Q","ABBR","DFN","MARK","SMALL","SUB","SUP"]);!vn(u)&&(y.has(h.tagName)||h.isContentEditable)||(u.preventDefault(),Ln.current={x:u.clientX,y:u.clientY})};return F.addEventListener("mousedown",a),()=>F.removeEventListener("mousedown",a)},[W,D,Ut,qe]),K(()=>{if(!W||D)return;const a=u=>{if(!Ln.current)return;const h=u.clientX-Ln.current.x,y=u.clientY-Ln.current.y,C=h*h+y*y,S=Tr*Tr;if(!hn&&C>=S&&(Qt.current=Ln.current,Lr(!0),u.preventDefault()),(hn||C>=S)&&Qt.current){if(ao.current){const be=Math.min(Qt.current.x,u.clientX),ge=Math.min(Qt.current.y,u.clientY),ot=Math.abs(u.clientX-Qt.current.x),lt=Math.abs(u.clientY-Qt.current.y);ao.current.style.transform=`translate(${be}px, ${ge}px)`,ao.current.style.width=`${ot}px`,ao.current.style.height=`${lt}px`}const k=Date.now();if(k-Ks.current<Jl)return;Ks.current=k;const H=Qt.current.x,U=Qt.current.y,q=Math.min(H,u.clientX),te=Math.min(U,u.clientY),de=Math.max(H,u.clientX),ye=Math.max(U,u.clientY),Oe=(q+de)/2,le=(te+ye)/2,pe=new Set,$e=[[q,te],[de,te],[q,ye],[de,ye],[Oe,le],[Oe,te],[Oe,ye],[q,le],[de,le]];for(const[be,ge]of $e){const ot=document.elementsFromPoint(be,ge);for(const lt of ot)lt instanceof HTMLElement&&pe.add(lt)}const je=F.querySelectorAll("button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th, div, span, section, article, aside, nav");for(const be of je)if(be instanceof HTMLElement){const ge=ft(be),ot=ge.left+ge.width/2,lt=ge.top+ge.height/2,Jt=ot>=q&&ot<=de&&lt>=te&&lt<=ye,St=Math.min(ge.right,de)-Math.max(ge.left,q),qn=Math.min(ge.bottom,ye)-Math.max(ge.top,te),Vn=St>0&&qn>0?St*qn:0,Ct=ge.width*ge.height,po=Ct>0?Vn/Ct:0;(Jt||po>.5)&&pe.add(be)}const it=[],wt=new Set(["BUTTON","A","INPUT","IMG","P","H1","H2","H3","H4","H5","H6","LI","LABEL","TD","TH","SECTION","ARTICLE","ASIDE","NAV"]);for(const be of pe){if($t(be,"[data-feedback-toolbar]")||$t(be,"[data-annotation-marker]"))continue;const ge=ft(be);if(!(ge.width>window.innerWidth*.8&&ge.height>window.innerHeight*.5)&&!(ge.width<10||ge.height<10)&&ge.left<de&&ge.right>q&&ge.top<ye&&ge.bottom>te){const ot=be.tagName;let lt=wt.has(ot);if(!lt&&(ot==="DIV"||ot==="SPAN")){const Jt=be.textContent&&be.textContent.trim().length>0,St=be.onclick!==null||be.getAttribute("role")==="button"||be.getAttribute("role")==="link"||be.classList.contains("clickable")||be.hasAttribute("data-clickable");(Jt||St)&&!be.querySelector("p, h1, h2, h3, h4, h5, h6, button, a")&&(lt=!0)}if(lt){let Jt=!1;for(const St of it)if(St.left<=ge.left&&St.right>=ge.right&&St.top<=ge.top&&St.bottom>=ge.bottom){Jt=!0;break}Jt||it.push(ge)}}}if(Xn.current){const be=Xn.current;for(;be.children.length>it.length;)be.removeChild(be.lastChild);it.forEach((ge,ot)=>{let lt=be.children[ot];lt||(lt=document.createElement("div"),lt.className=L.selectedElementHighlight,be.appendChild(lt)),lt.style.transform=`translate(${ge.left}px, ${ge.top}px)`,lt.style.width=`${ge.width}px`,lt.style.height=`${ge.height}px`})}}};return F.addEventListener("mousemove",a,{passive:!0}),()=>F.removeEventListener("mousemove",a)},[W,D,hn,Tr]),K(()=>{if(!W)return;const a=u=>{const h=hn,y=Qt.current;if(hn&&y){co.current=!0;const C=Math.min(y.x,u.clientX),S=Math.min(y.y,u.clientY),k=Math.max(y.x,u.clientX),H=Math.max(y.y,u.clientY),U=[];F.querySelectorAll("button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th").forEach(le=>{if(!(le instanceof HTMLElement)||$t(le,"[data-feedback-toolbar]")||$t(le,"[data-annotation-marker]"))return;const pe=ft(le);pe.width>window.innerWidth*.8&&pe.height>window.innerHeight*.5||pe.width<10||pe.height<10||pe.left<k&&pe.right>C&&pe.top<H&&pe.bottom>S&&U.push({element:le,rect:pe})});const te=U.filter(({element:le})=>!U.some(({element:pe})=>pe!==le&&le.contains(pe))),de=u.clientX/window.innerWidth*100,ye=u.clientY+window.scrollY,Oe=(vn(u)||At.length>0)&&!D&&!Z;if(te.length>0)if(Oe){const le=[...At];for(const{element:pe,rect:$e}of te){if(le.some(be=>be.element===pe))continue;const{name:je,path:it,reactComponents:wt}=sr(pe,un,V);le.push({element:pe,rect:$e,name:je,path:it,reactComponents:wt??void 0})}so.current=u.shiftKey,vn(u)?yn(le):ho(le)}else{const le=te.reduce((be,{rect:ge})=>({left:Math.min(be.left,ge.left),top:Math.min(be.top,ge.top),right:Math.max(be.right,ge.right),bottom:Math.max(be.bottom,ge.bottom)}),{left:1/0,top:1/0,right:-1/0,bottom:-1/0}),pe=te.slice(0,5).map(({element:be})=>Zn(be).name).join(", "),$e=te.length>5?` +${te.length-5} more`:"",je=te[0].element,it=Qo(je),wt=qo(je);w({id:Date.now().toString(),x:de,y:ye,clientY:u.clientY,element:`${te.length} elements: ${pe}${$e}`,elementPath:"multi-select",boundingBox:{x:le.left,y:le.top+window.scrollY,width:le.right-le.left,height:le.bottom-le.top},isMultiSelect:!0,fullPath:So(je),accessibility:Vo(je),computedStyles:wt,computedStylesObj:it,nearbyElements:Xo(je),cssClasses:fo(je),nearbyText:go(je),sourceFile:ir(je),attributes:ko(je,V)})}else if(Oe&&!vn(u))ho();else if(!Oe){const le=Math.abs(k-C),pe=Math.abs(H-S);le>20&&pe>20&&w({id:Date.now().toString(),x:de,y:ye,clientY:u.clientY,element:"Area selection",elementPath:`region at (${Math.round(C)}, ${Math.round(S)})`,boundingBox:{x:C,y:S+window.scrollY,width:le,height:pe},isMultiSelect:!0})}me(null)}else h&&(co.current=!0);Ln.current=null,Qt.current=null,Lr(!1),Xn.current&&(Xn.current.innerHTML="")};return F.addEventListener("mouseup",a),()=>F.removeEventListener("mouseup",a)},[W,hn,D,Z,un,V,At,ho]);const ln=ue(async(a,u,h)=>{const y=et.webhookUrl||X;if(!y||!et.webhooksEnabled&&!h)return!1;try{return(await fetch(y,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({event:a,timestamp:Date.now(),url:typeof window<"u"?window.location.href:void 0,...u})})).ok}catch(C){return console.warn("[Agentation] Webhook failed:",C),!1}},[X,et.webhookUrl,et.webhooksEnabled]),ta=ue(a=>{var h;if(!D||D.isSubmitted)return;const u={id:D.id,x:D.x,y:D.y,comment:a,element:D.element,elementPath:D.elementPath,timestamp:Date.now(),selectedText:D.selectedText,boundingBox:D.boundingBox,nearbyText:D.nearbyText,cssClasses:D.cssClasses,isMultiSelect:D.isMultiSelect,isFixed:D.isFixed,fullPath:D.fullPath,accessibility:D.accessibility,computedStyles:D.computedStyles,nearbyElements:D.nearbyElements,reactComponents:D.reactComponents,sourceFile:D.sourceFile,attributes:D.attributes,frame:D.frame,elementBoundingBoxes:D.elementBoundingBoxes,...p&&xt?{sessionId:xt,url:typeof window<"u"?window.location.href:void 0,status:"pending"}:{}};Dt(y=>[...y,u]),w({...D,isSubmitted:!0}),Kt.current=u.id,v==null||v(u),ln("annotation.add",{annotation:u}),lo(!0),(h=window.getSelection())==null||h.removeAllRanges(),p&&xt&&ce(async()=>{const y=await Ie(p,xt,u);if(r){const C=wn(e);qr(e,C.map(S=>S.id===u.id?{...S,id:y.id}:S),xt)}!oe.current||Ce.current.has(u.id)||y.id!==u.id&&(Lo.current.set(y.id,u.id),Kt.current===u.id&&(Kt.current=y.id),Dt(C=>C.map(S=>S.id===u.id?{...S,id:y.id}:S)),En.current.delete(u.id)&&En.current.add(y.id))}).catch(y=>{console.warn("[Agentation] Failed to sync annotation:",y)})},[D,v,ln,p,xt,ce,e,r]),Wr=ue(()=>{lo(!0)},[]),Fr=ue(()=>{w(null),lo(!1)},[]),zr=ue(a=>{if(Ce.current.has(a))return;Ce.current.add(a);const u=ve.find(h=>h.id===a);(Z==null?void 0:Z.id)===a&&(kt(!1),Un(!0)),To(h=>new Set(h).add(a)),u&&(x==null||x(u),ln("annotation.delete",{annotation:u})),p&&ce(()=>nr(p,at.current.get(a)??a)).catch(h=>{console.warn("[Agentation] Failed to delete annotation from server:",h)})},[ve,Z,x,ln,p,ce]),Fo=ue(a=>{var u;if(!a){mt(null),Xe(null),Te([]);return}if(mt(a.id),(u=a.elementBoundingBoxes)!=null&&u.length){const h=[];for(const y of a.elementBoundingBoxes){const C=y.x+y.width/2,S=y.y+y.height/2-window.scrollY,k=Go(C,S,y);k&&h.push(k)}Te(h),Xe(null)}else if(a.boundingBox){const h=a.boundingBox,y=h.x+h.width/2,C=a.isFixed?h.y+h.height/2:h.y+h.height/2-window.scrollY,S=Go(y,C,h);if(S){const k=ft(S),H=k.width/h.width,U=k.height/h.height;H<.5||U<.5?Xe(null):Xe(S)}else Xe(null);Te([])}else Xe(null),Te([])},[]),na=ue(a=>{var h;if(!Z)return;const u={...Z,comment:a};It(u),Dt(y=>y.map(C=>C.id===Z.id?u:C)),$==null||$(u),ln("annotation.update",{annotation:u}),p&&ce(()=>Kr(p,at.current.get(Z.id)??Z.id,{comment:a})).catch(y=>{console.warn("[Agentation] Failed to update annotation on server:",y)}),kt(fn.current||!!((h=pt.current)!=null&&h.matches(":hover"))),Un(!0)},[Z,$,ln,p,ce]),oa=ue(()=>{var a;kt(fn.current||!!((a=pt.current)!=null&&a.matches(":hover"))),Un(!0)},[]),ra=ue(()=>{tn&&Z&&!D&&mt(Z.id),It(null),Pt(null),nn([]),Un(!1)},[tn,Z,D]),zo=ue((a,u)=>{if(!a.length&&!u)return;ke(!0);const h={placements:[...Hn.current.placements,...a],rearrange:u??Hn.current.rearrange};Hn.current=h,As(h.placements),Os(h.rearrange),clearTimeout(Ae.current),Ae.current=Ve(()=>{_n(y=>y.filter(C=>!h.placements.includes(C))),rn(y=>y===h.rearrange?null:y),Hn.current={placements:[],rearrange:null},As([]),Os(null),Ae.current=void 0,We()},200)},[We]),Tn=ue(()=>{var H;if(!oe.current)return;const a=new Map(Po.current.map(U=>[U.id,U])),u=[];for(const U of ve){const q=a.get(at.current.get(U.id)??U.id)??a.get(U.id);q&&q.comment===U.comment&&!Ce.current.has(q.id)&&!u.includes(q)&&u.push(q)}const h=u.length,y=Ws.current,C=Be.filter(U=>y.designPlacements.includes(U)&&!Hn.current.placements.includes(U)),S=Q===y.rearrangeState&&Q!==Hn.current.rearrange?Q:null,k=Gt.filter(U=>$r.current.includes(U));if(!(h===0&&k.length===0&&C.length===0&&!S)){for(const U of u)Ce.current.add(U.id),Ne.current.add(U.id),he.current.add(U.id);if(To(U=>new Set([...U,...u.map(q=>q.id)])),T==null||T(u),ln("annotations.clear",{annotations:u}),p&&Promise.all(u.map(U=>ce(()=>nr(p,at.current.get(U.id)??U.id)).catch(q=>{console.warn("[Agentation] Failed to delete annotation from server:",q)}))),ke(!0),Xl(U=>U.filter(q=>!k.includes(q))),k.length>0&&k.length===$r.current.length){const U=Ir.current;(H=U==null?void 0:U.getContext("2d"))==null||H.clearRect(0,0,U.width,U.height)}zo(C,S),st===y.blankCanvas&&Et===y.wireframePurpose&&Be===y.designPlacements&&Q===y.rearrangeState&&(st&&Ls(!1),Et&&Io(""),Mn.current={rearrange:null,placements:[]},tr(e)),We()}},[e,ve,Gt,Be,Q,st,Et,T,ln,p,ce,We,zo]),Hr=ue(async()=>{const a=P.start(),u=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:e,h=qe&&st;let y;if(h){if(Be.length===0&&!Q&&!Et)return;y=i?cr(u,i):""}else{if(y=Ji(ve,u,et.outputDetail,{appName:i}),!y&&Gt.length===0&&Be.length===0&&!Q)return;y||(y=cr(u,i))}if(!h&&Gt.length>0){const S=new Set;for(const q of ve)q.drawingIndex!=null&&S.add(q.drawingIndex);const k=Ir.current;k&&(k.style.visibility="hidden");const H=[],U=window.scrollY;for(let q=0;q<Gt.length;q++){if(S.has(q))continue;const te=Gt[q];if(te.points.length<2)continue;const de=te.fixed?te.points:te.points.map(gt=>({x:gt.x,y:gt.y-U}));let ye=1/0,Oe=1/0,le=-1/0,pe=-1/0;for(const gt of de)ye=Math.min(ye,gt.x),Oe=Math.min(Oe,gt.y),le=Math.max(le,gt.x),pe=Math.max(pe,gt.y);const $e=le-ye,je=pe-Oe,it=Math.hypot($e,je),wt=de[0],be=de[de.length-1],ge=Math.hypot(be.x-wt.x,be.y-wt.y);let ot;const lt=ge<it*.35,Jt=$e/Math.max(je,1);if(lt&&it>20){const gt=Math.max($e,je)*.15;let xn=0;for(const Bn of de){const ia=Bn.x-ye<gt,la=le-Bn.x<gt,aa=Bn.y-Oe<gt,ca=pe-Bn.y<gt;(ia||la)&&(aa||ca)&&xn++}ot=xn>de.length*.15?"box":"circle"}else Jt>3&&je<40?ot="underline":ge>it*.5?ot="arrow":ot="drawing";const St=Math.min(10,de.length),qn=Math.max(1,Math.floor(de.length/St)),Vn=new Set,Ct=[],po=[wt];for(let gt=qn;gt<de.length-1;gt+=qn)po.push(de[gt]);po.push(be);for(const gt of po){const xn=ar(gt.x,gt.y);if(!xn||Vn.has(xn)||$t(xn,"[data-feedback-toolbar]"))continue;Vn.add(xn);const{name:Bn}=Zn(xn);Ct.includes(Bn)||Ct.push(Bn)}const Uo=`${Math.round(ye)},${Math.round(Oe)} → ${Math.round(le)},${Math.round(pe)}`;let Gn;(ot==="circle"||ot==="box")&&Ct.length>0?Gn=`${ot==="box"?"Boxed":"Circled"} **${Ct[0]}**${Ct.length>1?` (and ${Ct.slice(1).join(", ")})`:""} (region: ${Uo})`:ot==="underline"&&Ct.length>0?Gn=`Underlined **${Ct[0]}** (${Uo})`:ot==="arrow"&&Ct.length>=2?Gn=`Arrow from **${Ct[0]}** to **${Ct[Ct.length-1]}** (${Math.round(wt.x)},${Math.round(wt.y)} → ${Math.round(be.x)},${Math.round(be.y)})`:Ct.length>0?Gn=`${ot==="arrow"?"Arrow":"Drawing"} near **${Ct.join("**, **")}** (region: ${Uo})`:Gn=`Drawing at ${Uo}`,H.push(Gn)}k&&(k.style.visibility=""),H.length>0&&(y+=`
**Drawings:**
`,H.forEach((q,te)=>{y+=`${te+1}. ${q}
`}))}if((Be.length>0||h&&Et)&&(y+=`
`+Ui(Be,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:st,wireframePurpose:Et||void 0},et.outputDetail)),Q){const S=Xi(Q,et.outputDetail,{width:window.innerWidth,height:window.innerHeight});S&&(y+=`
`+S)}if(y=Zi(ve,y,d),!y){E(!1);return}const C=!z||await P_(y);O==null||O(y),P.isCurrent(a)&&(E(C),C&&(P.schedule(a,()=>E(!1),2e3),et.autoClearAfterCopy&&P.schedule(a,Tn,500)))},[ve,Gt,Be,Q,st,qe,Ds,Et,e,et.outputDetail,un,V,et.autoClearAfterCopy,Tn,P,z,d,i,O]),Yr=il(et.webhookUrl)||il(X||""),an=Se!=null||Yr&&!et.webhooksEnabled,Ho=W?an?337:297:44,jr=ue(async()=>{const a=re.start(),u=typeof window<"u"?window.location.href:e,h=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:e;let y=Ji(ve,h,et.outputDetail,{appName:i});if(!y&&Be.length===0&&!Q)return;if(y||(y=cr(h,i)),Be.length>0&&(y+=`
`+Ui(Be,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:st,wireframePurpose:Et||void 0},et.outputDetail)),Q){const H=Xi(Q,et.outputDetail,{width:window.innerWidth,height:window.innerHeight});H&&(y+=`
`+H)}Y("sending");let C=!0;try{await(Se==null?void 0:Se(y,ve))}catch(H){console.warn("[Agentation] Submit callback failed:",H),C=!1}if(!re.isCurrent(a))return;const S=Yr?await ln("submit",{output:y,annotations:ve,url:u},!0):!0,k=C&&S&&an;re.isCurrent(a)&&(Y(k?"sent":"failed"),re.schedule(a,()=>Y("idle"),2500),k&&et.autoClearAfterCopy&&re.schedule(a,Tn,500))},[Se,i,ln,ve,Be,Q,st,Ds,e,et.outputDetail,un,V,et.autoClearAfterCopy,Tn,Yr,an,re]);K(()=>{const u=(S=!1)=>{var k;(k=io.current)!=null&&k.dragging&&(Ro.current=S,Vs(!1)),io.current=null},h=S=>{const k=io.current;if(!k)return;if((S.buttons&1)===0){u();return}const H=S.clientX-k.x,U=S.clientY-k.y,q=Math.sqrt(H*H+U*U);if(!k.dragging&&q>10&&(k.dragging=!0,Vs(!0)),k.dragging){let te=k.toolbarX+H,de=k.toolbarY+U;const ye=20,Oe=337,le=44,$e=Oe-Ho,je=ye-$e,it=window.innerWidth-ye-Oe;te=Math.max(je,Math.min(it,te)),de=Math.max(ye,Math.min(window.innerHeight-le-ye,de)),Rr({x:te,y:de})}},y=()=>u(!0),C=()=>u();return F.addEventListener("mousemove",h),F.addEventListener("mouseup",y,!0),window.addEventListener("blur",C),()=>{F.removeEventListener("mousemove",h),F.removeEventListener("mouseup",y,!0),window.removeEventListener("blur",C)}},[Ho]);const sa=ue(a=>{if(Ro.current=!1,io.current=null,a.button!==0||a.target.closest("button")&&(a.target.closest("button")!==Ht.current||W)||a.target.closest("[data-agentation-settings-panel]"))return;const u=a.currentTarget.parentElement;if(!u)return;const h=ft(u);io.current={x:a.clientX,y:a.clientY,toolbarX:h.left,toolbarY:h.top,dragging:!1}},[W]);ct(()=>{if(!dt)return;const a=()=>{let C=dt.x,S=dt.y;const U=20-(337-Ho),q=window.innerWidth-20-337;C=Math.max(U,Math.min(q,C)),S=Math.max(20,Math.min(window.innerHeight-44-20,S)),(C!==dt.x||S!==dt.y)&&Rr({x:C,y:S})};return a(),window.addEventListener("resize",a),()=>window.removeEventListener("resize",a)},[dt,Ho]),K(()=>{if(!s)return;const a=h=>{var S,k;if(h.defaultPrevented||h.isComposing||h.altKey)return;const y=h.composedPath()[0]||h.target,C=y.tagName==="INPUT"||y.tagName==="TEXTAREA"||y.tagName==="SELECT"||y.isContentEditable;if(h.key==="Escape"){if(b&&!D&&!Z&&(W||Nt||qe||Ut||At.length)&&(h.preventDefault(),h.stopPropagation()),Nt){h.preventDefault(),kn(!1),(S=en.current)==null||S.focus();return}if(qe){Wn?Cn(null):uo();return}if(Ut){Mr(!1);return}if(At.length>0){yn([]);return}D||Z||W&&(Rt(),Ao())}if((h.metaKey||h.ctrlKey)&&h.shiftKey&&(h.key==="f"||h.key==="F")){h.preventDefault(),Rt(),W?Ao():((k=Ht.current)==null||k.blur(),dn.current=!0,_e(!0));return}!W||C||h.metaKey||h.ctrlKey||h.repeat||((h.key==="p"||h.key==="P")&&(h.preventDefault(),Rt(),Or()),(h.key==="l"||h.key==="L")&&(h.preventDefault(),Rt(),Ut&&Mr(!1),Nt&&kn(!1),D&&Wr(),qe?uo():Ar()),(h.key==="h"||h.key==="H")&&ve.length>0&&(h.preventDefault(),Rt(),mn(H=>!H)),(h.key==="c"||h.key==="C")&&(ve.length>0||Be.length>0||Q)&&(h.preventDefault(),Rt(),Hr()),(h.key==="x"||h.key==="X")&&(ve.length>0||Be.length>0||Q)&&(h.preventDefault(),Rt(),Tn(),Be.length>0&&_n([]),Q&&rn(null)),(h.key==="s"||h.key==="S")&&ve.length>0&&an&&G==="idle"&&(h.preventDefault(),Rt(),jr()))},u=!!b;return F.addEventListener("keydown",a,u),()=>F.removeEventListener("keydown",a,u)},[s,b,Z,W,Ut,qe,Wn,Be,Q,D,ve.length,an,G,jr,Or,Hr,Tn,At,Nt,Ao,Ar,uo]);const mo=ve.length>0,Yo=Ba(),jo=ve.filter(a=>a.kind!=="placement"&&a.kind!=="rearrange"),ni=jo.flatMap((a,u)=>{const h=Yo(a);return h?[{annotation:h,index:u}]:[]}),oi=D&&!D.isSubmitted?Yo({...D,comment:"",timestamp:0}):null,ri=[...fe?ni.map(a=>({...a,pending:!1})):[],...oi?[{annotation:oi,index:jo.length,pending:!0}]:[]];K(()=>{const a=new Set(fe&&!pn?ni.map(({annotation:u})=>u.id):[]);Kt.current&&!a.has(Kt.current)&&(Kt.current=null);for(const u of bn)a.has(u)||Dr(u)}),K(()=>{Z&&bn.has(Z.id)&&(kt(!1),Un(!0))},[Z,bn]);const si=ue(a=>{!Le&&a.id!==Kt.current&&Fo(a)},[Le,Fo]),ii=ue(a=>{Ze===a&&Fo(null)},[Ze,Fo]),li=ue((a,u)=>{var h;if(Z&&!Rn){(h=Bo.current)==null||h.shake();return}Xt&&Fr(),et.markerClickBehavior==="delete"?zr(a.id):Wo(a,u)},[et.markerClickBehavior,zr,Wo,Xt,Fr,Z,Rn]),qt=Z??(Do&&!D&&!Ee?ve.find(a=>a.id===Ze&&!bn.has(a.id)):null),ai=jt?"Resume animations":"Pause animations",ci=qe?"Exit layout mode":"Layout mode",di=cn?"Hide markers":"Show markers",_i=d!=="markdown"&&!Zi(ve,"",d),ui=typeof d=="object"?`Copy ${d.attribute}`:d==="source"?"Copy source paths":d==="classes"?"Copy classes":qe&&st?"Copy layout":"Copy feedback",Qn=W?0:-1;return!Ge||pn?null:t(Ja,{host:"agentation-toolbar",className:xe,children:[t("style",{"data-agentation-styles":"toolbar",children:[K_,J_]}),t("div",{ref:yt,className:L.positionContext,style:{display:"contents"},"data-agentation-theme":sn?"dark":"light","data-agentation-accent":et.annotationColorId,"data-agentation-root":"",children:[t("div",{className:L.toolbar,"data-feedback-toolbar":!0,"data-agentation-toolbar":!0,"data-dragging":Eo||void 0,style:dt?{left:dt.x,top:dt.y,right:"auto",bottom:"auto"}:void 0,children:t("div",{className:`${L.toolbarContainer} ${W?L.expanded:L.collapsed} ${Xs?L.entrance:""} ${Ot?L.hiding:""} ${an?L.serverConnected:""}`,onMouseDown:sa,children:[t("div",{className:`${L.controlsContent} ${W?L.visible:L.hidden} ${dt&&dt.y<100?L.tooltipBelow:""} ${Rs||Nt?L.tooltipsHidden:""} ${Nr?L.tooltipsInSession:""}`,ref:a=>{gn.current=a,a==null||a.toggleAttribute("inert",!W)},role:"group","aria-label":"Feedback controls","aria-hidden":!W,onMouseEnter:Ys,onMouseLeave:js,children:[t("div",{className:`${L.buttonWrapper} ${dt&&dt.x<120?L.buttonWrapperAlignLeft:""}`,children:[t("button",{className:L.controlButton,onClick:a=>{a.stopPropagation(),Rt(),Or()},"data-active":jt,"aria-label":ai,"aria-pressed":jt,tabIndex:Qn,children:t(rc,{size:24,isPaused:jt})}),t("span",{className:L.buttonTooltip,children:[ai,s&&t("span",{className:L.shortcut,children:"P"})]})]}),t("div",{className:L.buttonWrapper,children:[t("button",{className:`${L.controlButton} ${sn?"":L.light}`,onClick:a=>{a.stopPropagation(),Rt(),Ut&&Mr(!1),Nt&&kn(!1),D&&Wr(),qe?uo():Ar()},"data-active":qe,"aria-label":ci,"aria-pressed":qe,tabIndex:Qn,style:qe&&st?{color:"#f97316",background:"rgba(249, 115, 22, 0.25)"}:void 0,children:t(uc,{size:21})}),t("span",{className:L.buttonTooltip,children:[ci,s&&t("span",{className:L.shortcut,children:"L"})]})]}),t("div",{className:L.buttonWrapper,children:[t("button",{className:L.controlButton,onClick:a=>{a.stopPropagation(),Rt(),mn(!cn)},disabled:!mo||qe,"aria-label":di,tabIndex:Qn,children:t(oc,{size:24,isOpen:cn})}),t("span",{className:L.buttonTooltip,children:[di,s&&t("span",{className:L.shortcut,children:"H"})]})]}),t("div",{className:L.buttonWrapper,children:[t("button",{className:`${L.controlButton} ${M?L.statusShowing:""}`,onClick:a=>{a.stopPropagation(),Rt(),Hr()},disabled:_i||(qe&&st?Be.length===0&&!((hi=Q==null?void 0:Q.sections)!=null&&hi.length):!mo&&Gt.length===0&&Be.length===0&&!((mi=Q==null?void 0:Q.sections)!=null&&mi.length)),"data-active":M,"aria-label":ui,tabIndex:Qn,children:t(tc,{size:24,copied:M,tint:qe&&st&&(Be.length>0||(pi=Q==null?void 0:Q.sections)!=null&&pi.length)?"#f97316":void 0})}),t("span",{className:L.buttonTooltip,children:[_i?"No matching metadata":ui,s&&t("span",{className:L.shortcut,children:"C"})]})]}),t("div",{className:`${L.buttonWrapper} ${L.sendButtonWrapper} ${W&&an?L.sendButtonVisible:""}`,children:[t("button",{className:`${L.controlButton} ${G==="sent"||G==="failed"?L.statusShowing:""}`,onClick:a=>{a.stopPropagation(),Rt(),jr()},disabled:!mo||!an||G==="sending","data-no-hover":G==="sent"||G==="failed",tabIndex:W&&an?0:-1,"aria-label":"Send Annotations","aria-hidden":!an,children:[t(nc,{size:24,state:G}),mo&&G==="idle"&&t("span",{className:L.buttonBadge,children:ve.length})]}),t("span",{className:L.buttonTooltip,children:["Send Annotations",s&&t("span",{className:L.shortcut,children:"S"})]})]}),t("div",{className:L.buttonWrapper,children:[t("button",{className:L.controlButton,onClick:a=>{a.stopPropagation(),Rt(),Tn()},disabled:!mo&&Gt.length===0&&Be.length===0&&!((gi=Q==null?void 0:Q.sections)!=null&&gi.length),"data-danger":!0,"aria-label":"Clear all",tabIndex:Qn,children:t(ic,{size:24})}),t("span",{className:L.buttonTooltip,children:["Clear all",s&&t("span",{className:L.shortcut,children:"X"})]})]}),t("div",{className:L.buttonWrapper,children:[t("button",{ref:en,"aria-label":"Settings","aria-expanded":Nt,tabIndex:Qn,className:L.controlButton,onClick:a=>{a.stopPropagation(),Rt(),qe&&uo(),ae.current=!Nt&&a.detail===0,kn(!Nt)},children:t(sc,{size:24})}),p&&In!=="disconnected"&&t("span",{className:`${L.mcpIndicator} ${L[In]} ${Nt?L.hidden:""}`,title:In==="connected"?"MCP Connected":"MCP Connecting..."}),t("span",{className:L.buttonTooltip,children:"Settings"})]}),t("div",{className:L.divider}),t("div",{className:L.togglePlaceholder,"aria-hidden":"true"})]}),t("div",{className:`${L.buttonWrapper} ${L.toggleWrapper} ${dt&&dt.y<100?L.tooltipBelow:""} ${!W||Rs||Nt?L.tooltipsHidden:""} ${Nr?L.tooltipsInSession:""} ${dt&&typeof window<"u"&&dt.x>window.innerWidth-120?L.buttonWrapperAlignRight:""}`,onMouseEnter:Ys,onMouseLeave:js,children:[t("button",{ref:Ht,type:"button",className:`${L.toggleContent} ${W?L.expandedToggle:""}`,"aria-label":W?"Exit":"Start feedback mode","aria-expanded":W,"aria-keyshortcuts":s?"Meta+Shift+F Control+Shift+F":void 0,title:W?void 0:s?"Start feedback mode (⌘⇧F / Ctrl+Shift+F)":"Start feedback mode",onClick:a=>{if(Ro.current){Ro.current=!1,a.preventDefault();return}a.stopPropagation(),W?(Rt(),Ao()):(a.currentTarget.blur(),dn.current=a.detail===0,_e(!0))},children:t("span",{className:L.toggleIcon,children:[t(gc,{active:W}),jo.length>0&&t("span",{className:`${L.badge} ${W?L.fadeOut:""} ${Xs?L.entrance:""}`,children:jo.length})]})}),t("span",{className:L.buttonTooltip,"aria-hidden":!W,children:["Exit",s&&t("span",{className:L.shortcut,children:"Esc"})]})]}),t(Ad,{visible:qe&&W,activeType:Wn,onSelect:a=>{Cn(Wn===a?null:a)},isDarkMode:sn,sectionCount:(Q==null?void 0:Q.sections.length)??0,onDetectSections:()=>{const a=zd(),u=(Q==null?void 0:Q.sections)??[],h=new Set(u.map(k=>k.selector)),y=a.filter(k=>!h.has(k.selector)),C=[...u,...y],S=[...(Q==null?void 0:Q.originalOrder)??[],...y.map(k=>k.id)];rn({sections:C,originalOrder:S,detectedAt:Date.now()})},placementCount:Be.length,onClearPlacements:()=>{zo(Be,Q)},blankCanvas:st,onBlankCanvasChange:a=>{const u={sections:[],originalOrder:[],detectedAt:Date.now()};a?(vr.current={rearrange:Q,placements:Be},rn(Mn.current.rearrange||u),_n(Mn.current.placements),Cn(null)):(Mn.current={rearrange:Q,placements:Be},rn(vr.current.rearrange||u),_n(vr.current.placements)),Ls(a)},wireframePurpose:Et,onWireframePurposeChange:Io,Tooltip:Pn,onDragStart:(a,u)=>{u.preventDefault();const h=ee[a];let y=null,C=!1;const S=u.clientX,k=u.clientY,H=u.target.closest("[data-feedback-toolbar]"),U=(H==null?void 0:H.getBoundingClientRect().top)??window.innerHeight,q=de=>{var lt;const ye=de.clientX-S,Oe=de.clientY-k;if(!C&&(Math.abs(ye)>4||Math.abs(Oe)>4)&&(C=!0,y=document.createElement("div"),y.className=`${N.dragPreview}${st?` ${N.dragPreviewWireframe}`:""}`,(lt=yt.current)==null||lt.appendChild(y)),!y)return;const le=Math.max(0,U-de.clientY),pe=Math.min(1,le/180),$e=1-Math.pow(1-pe,2),je=28,it=20,wt=Math.min(140,h.width*.18),be=Math.min(90,h.height*.18),ge=je+(wt-je)*$e,ot=it+(be-it)*$e;y.style.width=`${ge}px`,y.style.height=`${ot}px`,y.style.left=`${de.clientX-ge/2}px`,y.style.top=`${de.clientY-ot/2}px`,y.style.opacity=`${.5+.5*$e}`,y.textContent=$e>.25?a:""},te=de=>{if(window.removeEventListener("mousemove",q),window.removeEventListener("mouseup",te),y&&y.remove(),C){const ye=h.width,Oe=h.height,le=window.scrollY,pe=Math.max(0,de.clientX-ye/2),$e=Math.max(0,de.clientY+le-Oe/2),je={id:`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,type:a,x:pe,y:$e,width:ye,height:Oe,scrollY:le,timestamp:Date.now()};_n(it=>[...it,je]),Cn(null),ro.current=new Set,Ps(it=>it+1)}};window.addEventListener("mousemove",q),window.addEventListener("mouseup",te)}}),t(q_,{settings:et,onSettingsChange:Vl,isDarkMode:sn,onToggleTheme:Gl,isDevMode:Kl,connectionStatus:In,endpoint:p,onExited:Zl,isOpen:W&&Nt,toolbarNearBottom:!!dt&&dt.y<230,settingsPage:Wl,onSettingsPageChange:Es,onHideToolbar:ea})]})}),(qe||Sn)&&t("div",{className:`${N.blankCanvas} ${Ts?N.visible:""} ${zl?N.gridActive:""}`,style:{"--canvas-opacity":Bs},"data-feedback-toolbar":!0}),qe&&st&&Ts&&t("div",{className:N.wireframeNotice,"data-feedback-toolbar":!0,children:[t("div",{className:N.wireframeOpacityRow,children:[t("span",{className:N.wireframeOpacityLabel,children:"Toggle Opacity"}),t("input",{type:"range",className:N.wireframeOpacitySlider,min:0,max:1,step:.01,value:Bs,onChange:a=>Fl(Number(a.target.value))})]}),t("div",{className:N.wireframeNoticeTitleRow,children:[t("span",{className:N.wireframeNoticeTitle,children:"Wireframe Mode"}),t("span",{className:N.wireframeNoticeDivider}),t("button",{className:N.wireframeStartOver,onClick:()=>{zo(Be,Q),Mn.current={rearrange:null,placements:[]},Io(""),tr(e)},children:"Start Over"})]}),"Drag components onto the canvas.",t("br",{}),"Copied output will only include the wireframed layout."]}),(qe||Sn)&&t(Ld,{placements:Be,onChange:_n,activeComponent:Sn?null:Wn,onActiveComponentChange:Cn,isDarkMode:sn,exiting:Sn,onInteractionChange:Hl,passthrough:!Wn,extraSnapRects:Q==null?void 0:Q.sections.map(a=>a.currentRect),deselectSignal:Yl,clearingPlacements:Fn,wireframe:st,onSelectionChange:(a,u)=>{ro.current=a,u||(No.current=new Set,Ul(h=>h+1))},onDragMove:(a,u)=>{var y;const h=No.current;if(!(!h.size||!Q)){if(!Vt.current){Vt.current=new Map;for(const C of Q.sections)h.has(C.id)&&Vt.current.set(C.id,{x:C.currentRect.x,y:C.currentRect.y})}for(const C of Q.sections){if(!h.has(C.id)||!Vt.current.get(C.id))continue;const k=(y=yt.current)==null?void 0:y.querySelector(`[data-rearrange-section="${C.id}"]`);k&&(k.style.transform=`translate(${a}px, ${u}px)`)}}},onDragEnd:(a,u,h)=>{var S;const y=No.current,C=Vt.current;if(Vt.current=null,!(!y.size||!Q||!C)){for(const k of y){const H=(S=yt.current)==null?void 0:S.querySelector(`[data-rearrange-section="${k}"]`);H&&(H.style.transform="")}h&&rn(k=>k&&{...k,sections:k.sections.map(H=>{const U=C.get(H.id);return U?{...H,currentRect:{...H.currentRect,x:Math.max(0,U.x+a),y:Math.max(0,U.y+u)}}:H})})}}}),(qe||Sn)&&Q&&t(jd,{rearrangeState:Q,onChange:rn,isDarkMode:sn,exiting:Sn,blankCanvas:st,extraSnapRects:Be.map(a=>({x:a.x,y:a.y,width:a.width,height:a.height})),clearing:Q===zn,deselectSignal:jl,onSelectionChange:(a,u)=>{No.current=a,u||(ro.current=new Set,Ps(h=>h+1))},onDragMove:(a,u)=>{var y;const h=ro.current;if(h.size){if(!Vt.current){Vt.current=new Map;for(const C of Be)h.has(C.id)&&Vt.current.set(C.id,{x:C.x,y:C.y})}for(const C of h){const S=(y=yt.current)==null?void 0:y.querySelector(`[data-design-placement="${C}"]`);S&&(S.style.transform=`translate(${a}px, ${u}px)`)}}},onDragEnd:(a,u,h)=>{var S;const y=ro.current,C=Vt.current;if(Vt.current=null,!(!y.size||!C)){for(const k of y){const H=(S=yt.current)==null?void 0:S.querySelector(`[data-design-placement="${k}"]`);H&&(H.style.transform="")}h&&_n(k=>k.map(H=>{const U=C.get(H.id);return U?{...H,x:Math.max(0,U.x+a),y:Math.max(0,U.y+u)}:H}))}}}),t("canvas",{ref:Ir,className:`${L.drawCanvas} ${Ut?L.active:""}`,"aria-hidden":"true",style:{opacity:Do?1:0,transition:"opacity 0.15s ease"},"data-feedback-toolbar":!0}),t("div",{className:L.markersLayer,"data-feedback-toolbar":!0,children:ri.filter(({annotation:a})=>!a.isFixed).map(({annotation:a,index:u,pending:h},y,C)=>t(nl,{annotation:a,pending:h,globalIndex:u,layerIndex:y,layerSize:C.length,isExiting:h?Xt:Le,isClearing:Ne.current.has(a.id),isAnimated:En.current.has(a.id),isNew:Kt.current===a.id,onEnterComplete:Gs,isHovered:!Le&&Ze===a.id,isRemoving:bn.has(a.id),onRemoveComplete:Dr,isEditingAny:!!Z,renumberFrom:bt,markerClickBehavior:et.markerClickBehavior,onHoverEnter:si,onHoverLeave:ii,onClick:li,onContextMenu:Wo},Lo.current.get(a.id)??a.id))}),t("div",{className:L.fixedMarkersLayer,"data-feedback-toolbar":!0,children:ri.filter(({annotation:a})=>a.isFixed).map(({annotation:a,index:u,pending:h},y,C)=>t(nl,{annotation:a,pending:h,globalIndex:u,layerIndex:y,layerSize:C.length,isExiting:h?Xt:Le,isClearing:Ne.current.has(a.id),isAnimated:En.current.has(a.id),isNew:Kt.current===a.id,onEnterComplete:Gs,isHovered:!Le&&Ze===a.id,isRemoving:bn.has(a.id),onRemoveComplete:Dr,isEditingAny:!!Z,renumberFrom:bt,markerClickBehavior:et.markerClickBehavior,onHoverEnter:si,onHoverLeave:ii,onClick:li,onContextMenu:Wo},Lo.current.get(a.id)??a.id))}),W&&Pe&&!D&&!Z&&!$s&&!hn&&t(V_,{x:Ue.x,y:Ue.y,elementName:Pe.elementName,reactComponents:Pe.reactComponents}),W&&t("div",{className:L.overlay,"data-feedback-toolbar":!0,style:D||Z?{zIndex:"inherit"}:void 0,children:[(Pe==null?void 0:Pe.rect)&&!D&&!$s&&!hn&&t("div",{className:`${L.hoverHighlight} ${L.enter}`,style:{left:Pe.rect.left,top:Pe.rect.top,width:Pe.rect.width,height:Pe.rect.height,borderColor:"color-mix(in srgb, var(--agentation-color-accent) 50%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 4%, transparent)",...Pe.isPiercing?{borderStyle:"dashed"}:{}}}),At.filter(a=>a.element.isConnected).map((a,u)=>{const h=ft(a.element),y=At.length>1;return t("div",{className:y?L.multiSelectOutline:L.singleSelectOutline,style:{position:"fixed",left:h.left,top:h.top,width:h.width,height:h.height,...y?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}},u)}),Ze&&!D&&(()=>{var C;const a=ve.find(S=>S.id===Ze);if(!(a!=null&&a.boundingBox))return null;if((C=a.elementBoundingBoxes)!=null&&C.length)return Ye.length>0?Ye.filter(S=>S.isConnected).map((S,k)=>{const H=ft(S);return t("div",{className:`${L.multiSelectOutline} ${L.enter}`,style:{left:H.left,top:H.top,width:H.width,height:H.height}},`hover-outline-live-${k}`)}):a.elementBoundingBoxes.map((S,k)=>t("div",{className:`${L.multiSelectOutline} ${L.enter}`,style:{left:S.x,top:S.y-on,width:S.width,height:S.height}},`hover-outline-${k}`));const u=He&&He.isConnected?ft(He):null,h=u?{x:u.left,y:u.top,width:u.width,height:u.height}:{x:a.boundingBox.x,y:a.isFixed?a.boundingBox.y:a.boundingBox.y-on,width:a.boundingBox.width,height:a.boundingBox.height},y=a.isMultiSelect;return t("div",{className:`${y?L.multiSelectOutline:L.singleSelectOutline} ${L.enter}`,style:{left:h.x,top:h.y,width:h.width,height:h.height,...y?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}})})(),D&&t(Ft,{children:[(fi=D.multiSelectElements)!=null&&fi.length?D.multiSelectElements.filter(a=>a.isConnected).map((a,u)=>{const h=ft(a);return t("div",{className:`${L.multiSelectOutline} ${Xt?L.exit:L.enter}`,style:{left:h.left,top:h.top,width:h.width,height:h.height}},`pending-multi-${u}`)}):D.targetElement&&D.targetElement.isConnected?(()=>{const a=ft(D.targetElement);return t("div",{className:`${L.singleSelectOutline} ${Xt?L.exit:L.enter}`,style:{left:a.left,top:a.top,width:a.width,height:a.height,borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}})})():D.boundingBox&&t("div",{className:`${D.isMultiSelect?L.multiSelectOutline:L.singleSelectOutline} ${Xt?L.exit:L.enter}`,style:{left:D.boundingBox.x,top:D.boundingBox.y-on,width:D.boundingBox.width,height:D.boundingBox.height,...D.isMultiSelect?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}}),(()=>{var y,C;const a=Yo(D)??D,u=a.x,h=a.isFixed?a.y:a.y-on;return t(Ft,{children:t(xs,{ref:Br,element:D.element,selectedText:D.selectedText,allowEmpty:typeof d=="object"&&!!((y=D.attributes)!=null&&y[d.attribute]),onOpenSource:c&&D.sourceFile?()=>c(D.sourceFile):void 0,computedStyles:D.computedStylesObj,placeholder:typeof d=="object"&&((C=D.attributes)!=null&&C[d.attribute])?"Add a note (optional)":D.element==="Area selection"?"What should change in this area?":D.isMultiSelect?"Feedback for this group of elements...":"What should change?",onSubmit:ta,onExitComplete:Fr,onCancel:Wr,isExiting:Xt,lightMode:!sn,accentColor:D.isMultiSelect?"var(--agentation-color-green)":"var(--agentation-color-accent)",style:{left:Math.max(160,Math.min(window.innerWidth-160,u/100*window.innerWidth)),...h>window.innerHeight-290?{bottom:window.innerHeight-h+20}:{top:h+20}}},D.id)})})()]}),Z&&t(Ft,{children:(yi=Z.elementBoundingBoxes)!=null&&yi.length?Wt.length>0?Wt.filter(a=>a.isConnected).map((a,u)=>{const h=ft(a);return t("div",{className:`${L.multiSelectOutline} ${L.enter}`,style:{left:h.left,top:h.top,width:h.width,height:h.height}},`edit-multi-live-${u}`)}):Z.elementBoundingBoxes.map((a,u)=>t("div",{className:`${L.multiSelectOutline} ${L.enter}`,style:{left:a.x,top:a.y-on,width:a.width,height:a.height}},`edit-multi-${u}`)):(()=>{const a=Yt&&Yt.isConnected?ft(Yt):null,u=a?{x:a.left,y:a.top,width:a.width,height:a.height}:Z.boundingBox?{x:Z.boundingBox.x,y:Z.isFixed?Z.boundingBox.y:Z.boundingBox.y-on,width:Z.boundingBox.width,height:Z.boundingBox.height}:null;return u?t("div",{className:`${Z.isMultiSelect?L.multiSelectOutline:L.singleSelectOutline} ${L.enter}`,style:{left:u.x,top:u.y,width:u.width,height:u.height,...Z.isMultiSelect?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}}):null})()}),hn&&t(Ft,{children:[t("div",{ref:ao,className:L.dragSelection}),t("div",{ref:Xn,className:L.highlightsContainer})]})]}),t(z_,{ref:Bo,annotation:qt?Yo(qt)??Z:null,editing:!!Z,exiting:Rn,restorePreview:tn,scrollY:on,lightMode:!sn,onExited:ra,editorProps:qt?{element:qt.element,selectedText:qt.selectedText,allowEmpty:typeof d=="object"&&!!((bi=qt.attributes)!=null&&bi[d.attribute]),onOpenSource:c&&qt.sourceFile?()=>c(qt.sourceFile):void 0,computedStyles:Ua(qt.computedStyles),placeholder:"Edit your feedback...",initialValue:qt.comment,submitLabel:"Save",onSubmit:na,onCancel:oa,onDelete:()=>zr(qt.id),accentColor:qt.isMultiSelect?"var(--agentation-color-green)":"var(--agentation-color-accent)"}:void 0})]})]})}export{ru as Agentation,xs as AnnotationPopupCSS,_c as IconChevronLeft,tc as IconCopyAnimated,dc as IconEdit,oc as IconEyeAnimated,sc as IconGear,ec as IconHelp,uc as IconLayout,cc as IconMoon,rc as IconPausePlayAnimated,Za as IconPlus,nc as IconSendArrow,ac as IconSun,ic as IconTrashAlt,lc as IconXmark,ru as PageFeedbackToolbarCSS,$t as closestCrossingShadow,fo as getElementClasses,fl as getElementPath,go as getNearbyText,ws as getStorageKey,Zn as identifyElement,wn as loadAnnotations,Dl as saveAnnotations};
