function t(){}function n(t,n){for(const e in n)t[e]=n[e];return t}function e(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(e)}function i(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function s(n,e,o){n.$$.on_destroy.push(function(n,...e){if(null==n)return t;const o=n.subscribe(...e);return o.unsubscribe?()=>o.unsubscribe():o}(e,o))}function u(t,n,e,o){if(t){const r=a(t,n,e,o);return t[0](r)}}function a(t,e,o,r){return t[1]&&r?n(o.ctx.slice(),t[1](r(e))):o.ctx}function l(t,n,e,o,r,i,c){const s=function(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(void 0===n.dirty)return r;if("object"==typeof r){const t=[],e=Math.max(n.dirty.length,r.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|r[o];return t}return n.dirty|r}return n.dirty}(n,o,r,i);if(s){const r=a(n,e,o,c);t.p(r,s)}}let f,d=!1;function h(t,n,e,o){for(;t<n;){const r=t+(n-t>>1);e(r)<=o?t=r+1:n=r}return t}function m(t,n){d?(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;const n=t.childNodes,e=new Int32Array(n.length+1),o=new Int32Array(n.length);e[0]=-1;let r=0;for(let u=0;u<n.length;u++){const t=h(1,r+1,(t=>n[e[t]].claim_order),n[u].claim_order)-1;o[u]=e[t]+1;const i=t+1;e[i]=u,r=Math.max(i,r)}const i=[],c=[];let s=n.length-1;for(let u=e[r]+1;0!=u;u=o[u-1]){for(i.push(n[u-1]);s>=u;s--)c.push(n[s]);s--}for(;s>=0;s--)c.push(n[s]);i.reverse(),c.sort(((t,n)=>t.claim_order-n.claim_order));for(let u=0,a=0;u<c.length;u++){for(;a<i.length&&c[u].claim_order>=i[a].claim_order;)a++;const n=a<i.length?i[a]:null;t.insertBefore(c[u],n)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild),n!==t.actual_end_child?t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling):n.parentNode!==t&&t.appendChild(n)}function p(t,n,e){d&&!e?m(t,n):(n.parentNode!==t||e&&n.nextSibling!==e)&&t.insertBefore(n,e||null)}function _(t){t.parentNode.removeChild(t)}function g(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function $(t){return document.createElement(t)}function y(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function b(t){return document.createTextNode(t)}function x(){return b(" ")}function v(){return b("")}function w(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function E(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function A(t){return Array.from(t.childNodes)}function N(t,n,e,o,r=!1){void 0===t.claim_info&&(t.claim_info={last_index:0,total_claimed:0});const i=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const i=t[o];if(n(i))return e(i),t.splice(o,1),r||(t.claim_info.last_index=o),i}for(let o=t.claim_info.last_index-1;o>=0;o--){const i=t[o];if(n(i))return e(i),t.splice(o,1),r?t.claim_info.last_index--:t.claim_info.last_index=o,i}return o()})();return i.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,i}function T(t,n,e,o){return N(t,(t=>t.nodeName===n),(t=>{const n=[];for(let o=0;o<t.attributes.length;o++){const r=t.attributes[o];e[r.name]||n.push(r.name)}n.forEach((n=>t.removeAttribute(n)))}),(()=>o?y(n):$(n)))}function k(t,n){return N(t,(t=>3===t.nodeType),(t=>{t.data=""+n}),(()=>b(n)),!0)}function S(t){return k(t," ")}function L(t,n,e){for(let o=e;o<t.length;o+=1){const e=t[o];if(8===e.nodeType&&e.textContent.trim()===n)return o}return t.length}function M(t){const n=L(t,"HTML_TAG_START",0),e=L(t,"HTML_TAG_END",n);if(n===e)return new H;const o=t.splice(n,e+1);return _(o[0]),_(o[o.length-1]),new H(o.slice(1,o.length-1))}function j(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function C(t,n,e,o){t.style.setProperty(n,e,o?"important":"")}function O(t,n,e){t.classList[e?"add":"remove"](n)}function B(t,n=document.body){return Array.from(n.querySelectorAll(t))}class H{constructor(t){this.e=this.n=null,this.l=t}m(t,n,e=null){this.e||(this.e=$(n.nodeName),this.t=n,this.l?this.n=this.l:this.h(t)),this.i(e)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}i(t){for(let n=0;n<this.n.length;n+=1)p(this.t,this.n[n],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(_)}}function q(t){f=t}function G(){if(!f)throw new Error("Function called outside component initialization");return f}function I(t){G().$$.on_mount.push(t)}function P(t){G().$$.after_update.push(t)}function z(t,n){G().$$.context.set(t,n)}function D(t){return G().$$.context.get(t)}const F=[],R=[],J=[],K=[],Q=Promise.resolve();let U=!1;function V(t){J.push(t)}let W=!1;const X=new Set;function Y(){if(!W){W=!0;do{for(let t=0;t<F.length;t+=1){const n=F[t];q(n),Z(n.$$)}for(q(null),F.length=0;R.length;)R.pop()();for(let t=0;t<J.length;t+=1){const n=J[t];X.has(n)||(X.add(n),n())}J.length=0}while(F.length);for(;K.length;)K.pop()();U=!1,W=!1,X.clear()}}function Z(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(V)}}const tt=new Set;let nt;function et(){nt={r:0,c:[],p:nt}}function ot(){nt.r||r(nt.c),nt=nt.p}function rt(t,n){t&&t.i&&(tt.delete(t),t.i(n))}function it(t,n,e,o){if(t&&t.o){if(tt.has(t))return;tt.add(t),nt.c.push((()=>{tt.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function ct(t,n){const e={},o={},r={$$scope:1};let i=t.length;for(;i--;){const c=t[i],s=n[i];if(s){for(const t in c)t in s||(o[t]=1);for(const t in s)r[t]||(e[t]=s[t],r[t]=1);t[i]=s}else for(const t in c)r[t]=1}for(const c in o)c in e||(e[c]=void 0);return e}function st(t){return"object"==typeof t&&null!==t?t:{}}function ut(t){t&&t.c()}function at(t,n){t&&t.l(n)}function lt(t,n,o,c){const{fragment:s,on_mount:u,on_destroy:a,after_update:l}=t.$$;s&&s.m(n,o),c||V((()=>{const n=u.map(e).filter(i);a?a.push(...n):r(n),t.$$.on_mount=[]})),l.forEach(V)}function ft(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function dt(t,n){-1===t.$$.dirty[0]&&(F.push(t),U||(U=!0,Q.then(Y)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function ht(n,e,i,c,s,u,a=[-1]){const l=f;q(n);const h=n.$$={fragment:null,ctx:null,props:u,update:t,not_equal:s,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(l?l.$$.context:e.context||[]),callbacks:o(),dirty:a,skip_bound:!1};let m=!1;if(h.ctx=i?i(n,e.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return h.ctx&&s(h.ctx[t],h.ctx[t]=r)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](r),m&&dt(n,t)),e})):[],h.update(),m=!0,r(h.before_update),h.fragment=!!c&&c(h.ctx),e.target){if(e.hydrate){d=!0;const t=A(e.target);h.fragment&&h.fragment.l(t),t.forEach(_)}else h.fragment&&h.fragment.c();e.intro&&rt(n.$$.fragment),lt(n,e.target,e.anchor,e.customElement),d=!1,Y()}q(l)}class mt{$destroy(){ft(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const pt=[];function _t(n,e=t){let o;const r=[];function i(t){if(c(n,t)&&(n=t,o)){const t=!pt.length;for(let e=0;e<r.length;e+=1){const t=r[e];t[1](),pt.push(t,n)}if(t){for(let t=0;t<pt.length;t+=2)pt[t][0](pt[t+1]);pt.length=0}}}return{set:i,update:function(t){i(t(n))},subscribe:function(c,s=t){const u=[c,s];return r.push(u),1===r.length&&(o=e(i)||t),c(n),()=>{const t=r.indexOf(u);-1!==t&&r.splice(t,1),0===r.length&&(o(),o=null)}}}}export{n as A,et as B,_t as C,D,O as E,m as F,t as G,C as H,y as I,w as J,r as K,u as L,l as M,s as N,B as O,g as P,M as Q,H as R,mt as S,A as a,E as b,T as c,_ as d,$ as e,p as f,k as g,j as h,ht as i,ut as j,x as k,v as l,at as m,S as n,lt as o,ct as p,st as q,it as r,c as s,b as t,ot as u,rt as v,ft as w,z as x,P as y,I as z};
