import{S as T,i as j,s as w,e as p,c as g,a as b,d as f,b as v,f as h,u as _,w as k,x as u,Q as C,A as E,r as x,R as A,j as D,m as N,o as V,v as q,l as y,U as B,t as F,g as J,E as M,F as m}from"../chunks/vendor-4fe473fe.js";import{t as $,T as O}from"../chunks/TodoItem-acb5e1dd.js";function I(c,n,r){const e=c.slice();return e[3]=n[r],e}function Q(c){let n,r,e=c[0],o=[];for(let t=0;t<e.length;t+=1)o[t]=S(I(c,e,t));const i=t=>_(o[t],1,1,()=>{o[t]=null});return{c(){for(let t=0;t<o.length;t+=1)o[t].c();n=y()},l(t){for(let s=0;s<o.length;s+=1)o[s].l(t);n=y()},m(t,s){for(let l=0;l<o.length;l+=1)o[l].m(t,s);h(t,n,s),r=!0},p(t,s){if(s&3){e=t[0];let l;for(l=0;l<e.length;l+=1){const a=I(t,e,l);o[l]?(o[l].p(a,s),u(o[l],1)):(o[l]=S(a),o[l].c(),u(o[l],1),o[l].m(n.parentNode,n))}for(x(),l=e.length;l<o.length;l+=1)i(l);k()}},i(t){if(!r){for(let s=0;s<e.length;s+=1)u(o[s]);r=!0}},o(t){o=o.filter(Boolean);for(let s=0;s<o.length;s+=1)_(o[s]);r=!1},d(t){B(o,t),t&&f(n)}}}function R(c){let n,r;return{c(){n=p("div"),r=F("There's no active todo!"),this.h()},l(e){n=g(e,"DIV",{class:!0});var o=b(n);r=J(o,"There's no active todo!"),o.forEach(f),this.h()},h(){v(n,"class","text-center font-bold text-2xl mt-4")},m(e,o){h(e,n,o),M(n,r)},p:m,i:m,o:m,d(e){e&&f(n)}}}function S(c){let n,r;return n=new O({props:{todo:c[3]}}),n.$on("onChange",c[1]),{c(){D(n.$$.fragment)},l(e){N(n.$$.fragment,e)},m(e,o){V(n,e,o),r=!0},p(e,o){const i={};o&1&&(i.todo=e[3]),n.$set(i)},i(e){r||(u(n.$$.fragment,e),r=!0)},o(e){_(n.$$.fragment,e),r=!1},d(e){q(n,e)}}}function U(c){let n,r,e,o;const i=[R,Q],t=[];function s(l,a){return l[0].length<=0?0:1}return r=s(c),e=t[r]=i[r](c),{c(){n=p("div"),e.c(),this.h()},l(l){n=g(l,"DIV",{class:!0});var a=b(n);e.l(a),a.forEach(f),this.h()},h(){v(n,"class","w-full px-3")},m(l,a){h(l,n,a),t[r].m(n,null),o=!0},p(l,[a]){let d=r;r=s(l),r===d?t[r].p(l,a):(x(),_(t[d],1,1,()=>{t[d]=null}),k(),e=t[r],e?e.p(l,a):(e=t[r]=i[r](l),e.c()),u(e,1),e.m(n,null))},i(l){o||(u(e),o=!0)},o(l){_(e),o=!1},d(l){l&&f(n),t[r].d()}}}function z(c,n,r){let e;C(c,$,t=>r(2,e=t));let o=[];function i(){r(0,o=e.filter(t=>!t.done))}return E(()=>{const t=JSON.parse(localStorage.getItem("todoItems"));A($,e=t!=null?t:[],e),r(0,o=e.filter(s=>s.done)),console.log("active mounted")}),c.$$.update=()=>{c.$$.dirty&4&&r(0,o=e.filter(t=>!t.done))},[o,i,e]}class K extends T{constructor(n){super();j(this,n,z,U,w,{})}}export{K as default};
