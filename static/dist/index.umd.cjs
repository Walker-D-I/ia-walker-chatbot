(function(a){typeof define=="function"&&define.amd?define(a):a()})(function(){"use strict";var kt=Object.defineProperty;var wt=(a,d,p)=>d in a?kt(a,d,{enumerable:!0,configurable:!0,writable:!0,value:p}):a[d]=p;var h=(a,d,p)=>(wt(a,typeof d!="symbol"?d+"":d,p),p);function a(){}function d(e){return e()}function p(){return Object.create(null)}function A(e){e.forEach(d)}function B(e){return typeof e=="function"}function V(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function z(e){return Object.keys(e).length===0}function k(e,t){e.appendChild(t)}function F(e,t,n){const r=U(e);if(!r.getElementById(t)){const o=I("style");o.id=t,o.textContent=n,G(r,o)}}function U(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;return t&&t.host?t:e.ownerDocument}function G(e,t){return k(e.head||e,t),t.sheet}function q(e,t,n){e.insertBefore(t,n||null)}function w(e){e.parentNode&&e.parentNode.removeChild(e)}function M(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function I(e){return document.createElement(e)}function m(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function K(e){return document.createTextNode(e)}function Q(){return K("")}function l(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function W(e){return Array.from(e.childNodes)}function X(e){const t={};return e.childNodes.forEach(n=>{t[n.slot||"default"]=!0}),t}let x;function O(e){x=e}function Y(){if(!x)throw new Error("Function called outside component initialization");return x}function Z(e){Y().$$.on_mount.push(e)}const j=[],D=[];let v=[];const R=[],tt=Promise.resolve();let S=!1;function et(){S||(S=!0,tt.then(H))}function L(e){v.push(e)}const P=new Set;let E=0;function H(){if(E!==0)return;const e=x;do{try{for(;E<j.length;){const t=j[E];E++,O(t),nt(t.$$)}}catch(t){throw j.length=0,E=0,t}for(O(null),j.length=0,E=0;D.length;)D.pop()();for(let t=0;t<v.length;t+=1){const n=v[t];P.has(n)||(P.add(n),n())}v.length=0}while(j.length);for(;R.length;)R.pop()();S=!1,P.clear(),O(e)}function nt(e){if(e.fragment!==null){e.update(),A(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(L)}}function st(e){const t=[],n=[];v.forEach(r=>e.indexOf(r)===-1?t.push(r):n.push(r)),n.forEach(r=>r()),v=t}const rt=new Set;function ot(e,t){e&&e.i&&(rt.delete(e),e.i(t))}function T(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function ct(e,t,n){const{fragment:r,after_update:o}=e.$$;r&&r.m(t,n),L(()=>{const s=e.$$.on_mount.map(d).filter(B);e.$$.on_destroy?e.$$.on_destroy.push(...s):A(s),e.$$.on_mount=[]}),o.forEach(L)}function it(e,t){const n=e.$$;n.fragment!==null&&(st(n.after_update),A(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function lt(e,t){e.$$.dirty[0]===-1&&(j.push(e),et(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ut(e,t,n,r,o,s,c,i=[-1]){const $=x;O(e);const u=e.$$={fragment:null,ctx:[],props:s,update:a,not_equal:o,bound:p(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||($?$.$$.context:[])),callbacks:p(),dirty:i,skip_bound:!1,root:t.target||$.$$.root};c&&c(u.root);let g=!1;if(u.ctx=n?n(e,t.props||{},(_,b,...f)=>{const y=f.length?f[0]:b;return u.ctx&&o(u.ctx[_],u.ctx[_]=y)&&(!u.skip_bound&&u.bound[_]&&u.bound[_](y),g&&lt(e,_)),b}):[],u.update(),g=!0,A(u.before_update),u.fragment=r?r(u.ctx):!1,t.target){if(t.hydrate){const _=W(t.target);u.fragment&&u.fragment.l(_),_.forEach(w)}else u.fragment&&u.fragment.c();t.intro&&ot(e.$$.fragment),ct(e,t.target,t.anchor),H()}O($)}let J;typeof HTMLElement=="function"&&(J=class extends HTMLElement{constructor(t,n,r){super();h(this,"$$ctor");h(this,"$$s");h(this,"$$c");h(this,"$$cn",!1);h(this,"$$d",{});h(this,"$$r",!1);h(this,"$$p_d",{});h(this,"$$l",{});h(this,"$$l_u",new Map);this.$$ctor=t,this.$$s=n,r&&this.attachShadow({mode:"open"})}addEventListener(t,n,r){if(this.$$l[t]=this.$$l[t]||[],this.$$l[t].push(n),this.$$c){const o=this.$$c.$on(t,n);this.$$l_u.set(n,o)}super.addEventListener(t,n,r)}removeEventListener(t,n,r){if(super.removeEventListener(t,n,r),this.$$c){const o=this.$$l_u.get(n);o&&(o(),this.$$l_u.delete(n))}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){let t=function(s){return()=>{let c;return{c:function(){c=I("slot"),s!=="default"&&l(c,"name",s)},m:function(u,g){q(u,c,g)},d:function(u){u&&w(c)}}}};if(await Promise.resolve(),!this.$$cn)return;const n={},r=X(this);for(const s of this.$$s)s in r&&(n[s]=[t(s)]);for(const s of this.attributes){const c=this.$$g_p(s.name);c in this.$$d||(this.$$d[c]=N(c,s.value,this.$$p_d,"toProp"))}this.$$c=new this.$$ctor({target:this.shadowRoot||this,props:{...this.$$d,$$slots:n,$$scope:{ctx:[]}}});const o=()=>{this.$$r=!0;for(const s in this.$$p_d)if(this.$$d[s]=this.$$c.$$.ctx[this.$$c.$$.props[s]],this.$$p_d[s].reflect){const c=N(s,this.$$d[s],this.$$p_d,"toAttribute");c==null?this.removeAttribute(s):this.setAttribute(this.$$p_d[s].attribute||s,c)}this.$$r=!1};this.$$c.$$.after_update.push(o),o();for(const s in this.$$l)for(const c of this.$$l[s]){const i=this.$$c.$on(s,c);this.$$l_u.set(c,i)}this.$$l={}}}attributeChangedCallback(t,n,r){var o;this.$$r||(t=this.$$g_p(t),this.$$d[t]=N(t,r,this.$$p_d,"toProp"),(o=this.$$c)==null||o.$set({[t]:this.$$d[t]}))}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then(()=>{this.$$cn||(this.$$c.$destroy(),this.$$c=void 0)})}$$g_p(t){return Object.keys(this.$$p_d).find(n=>this.$$p_d[n].attribute===t||!this.$$p_d[n].attribute&&n.toLowerCase()===t)||t}});function N(e,t,n,r){var s;const o=(s=n[e])==null?void 0:s.type;if(t=o==="Boolean"&&typeof t!="boolean"?t!=null:t,!r||!n[e])return t;if(r==="toAttribute")switch(o){case"Object":case"Array":return t==null?null:JSON.stringify(t);case"Boolean":return t?"":null;case"Number":return t??null;default:return t}else switch(o){case"Object":case"Array":return t&&JSON.parse(t);case"Boolean":return t;case"Number":return t!=null?+t:t;default:return t}}function ft(e,t,n,r,o,s){let c=class extends J{constructor(){super(e,n,o),this.$$p_d=t}static get observedAttributes(){return Object.keys(t).map(i=>(t[i].attribute||i).toLowerCase())}};return Object.keys(t).forEach(i=>{Object.defineProperty(c.prototype,i,{get(){return this.$$c&&i in this.$$c?this.$$c[i]:this.$$d[i]},set($){var u;$=N(i,$,t),this.$$d[i]=$,(u=this.$$c)==null||u.$set({[i]:$})}})}),r.forEach(i=>{Object.defineProperty(c.prototype,i,{get(){var $;return($=this.$$c)==null?void 0:$[i]}})}),s&&(c=s(c)),e.element=c,c}class $t{constructor(){h(this,"$$");h(this,"$$set")}$destroy(){it(this,1),this.$destroy=a}$on(t,n){if(!B(n))return a;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}$set(t){this.$$set&&!z(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const at="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(at);function ht(e){F(e,"svelte-1kjtqer","svg.svelte-1kjtqer{width:100%;height:100%}.clock-face.svelte-1kjtqer{stroke:#333;fill:white}.minor.svelte-1kjtqer{stroke:#999;stroke-width:0.5}.major.svelte-1kjtqer{stroke:#333;stroke-width:1}.hour.svelte-1kjtqer{stroke:#333}.minute.svelte-1kjtqer{stroke:#666}.second.svelte-1kjtqer,.second-counterweight.svelte-1kjtqer{stroke:rgb(180, 0, 0)}.second-counterweight.svelte-1kjtqer{stroke-width:3}")}function dt(e,t,n){const r=e.slice();return r[4]=t[n],r}function _t(e,t,n){const r=e.slice();return r[7]=t[n],r}function mt(e){let t;return{c(){t=m("line"),l(t,"class","minor svelte-1kjtqer"),l(t,"y1","42"),l(t,"y2","45"),l(t,"transform","rotate("+6*(e[4]+e[7])+")")},m(n,r){q(n,t,r)},p:a,d(n){n&&w(t)}}}function gt(e){let t,n,r=T([1,2,3,4]),o=[];for(let s=0;s<4;s+=1)o[s]=mt(_t(e,r,s));return{c(){t=m("line");for(let s=0;s<4;s+=1)o[s].c();n=Q(),l(t,"class","major svelte-1kjtqer"),l(t,"y1","35"),l(t,"y2","45"),l(t,"transform","rotate("+30*e[4]+")")},m(s,c){q(s,t,c);for(let i=0;i<4;i+=1)o[i]&&o[i].m(s,c);q(s,n,c)},p:a,d(s){s&&(w(t),w(n)),M(o,s)}}}function pt(e){let t,n,r,o,s,c,i,$,u,g,_=T([0,5,10,15,20,25,30,35,40,45,50,55]),b=[];for(let f=0;f<12;f+=1)b[f]=gt(dt(e,_,f));return{c(){t=m("svg"),n=m("circle");for(let f=0;f<12;f+=1)b[f].c();r=m("line"),s=m("line"),i=m("g"),$=m("line"),u=m("line"),l(n,"class","clock-face svelte-1kjtqer"),l(n,"r","48"),l(r,"class","hour svelte-1kjtqer"),l(r,"y1","2"),l(r,"y2","-20"),l(r,"transform",o="rotate("+(30*e[2]+e[1]/2)+")"),l(s,"class","minute svelte-1kjtqer"),l(s,"y1","4"),l(s,"y2","-30"),l(s,"transform",c="rotate("+(6*e[1]+e[0]/10)+")"),l($,"class","second svelte-1kjtqer"),l($,"y1","10"),l($,"y2","-38"),l(u,"class","second-counterweight svelte-1kjtqer"),l(u,"y1","10"),l(u,"y2","2"),l(i,"transform",g="rotate("+6*e[0]+")"),l(t,"viewBox","-50 -50 100 100"),l(t,"class","svelte-1kjtqer")},m(f,y){q(f,t,y),k(t,n);for(let C=0;C<12;C+=1)b[C]&&b[C].m(t,null);k(t,r),k(t,s),k(t,i),k(i,$),k(i,u)},p(f,[y]){y&6&&o!==(o="rotate("+(30*f[2]+f[1]/2)+")")&&l(r,"transform",o),y&3&&c!==(c="rotate("+(6*f[1]+f[0]/10)+")")&&l(s,"transform",c),y&1&&g!==(g="rotate("+6*f[0]+")")&&l(i,"transform",g)},i:a,o:a,d(f){f&&w(t),M(b,f)}}}function bt(e,t,n){let r,o,s,c=new Date;return Z(()=>{const i=setInterval(()=>{n(3,c=new Date)},1e3);return()=>{clearInterval(i)}}),e.$$.update=()=>{e.$$.dirty&8&&n(2,r=c.getHours()),e.$$.dirty&8&&n(1,o=c.getMinutes()),e.$$.dirty&8&&n(0,s=c.getSeconds())},[s,o,r,c]}class yt extends $t{constructor(t){super(),ut(this,t,bt,pt,V,{},ht)}}customElements.define("chat-agent",ft(yt,{},[],[],!0))});
