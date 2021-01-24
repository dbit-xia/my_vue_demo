var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(t,e){t.appendChild(e)}function c(t,e,n){t.insertBefore(e,n||null)}function l(t){t.parentNode.removeChild(t)}function u(t){return document.createElement(t)}function a(t){return document.createTextNode(t)}function f(){return a(" ")}function d(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function p(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}let m;function h(t){m=t}const $=[],b=[],g=[],y=[],v=Promise.resolve();let _=!1;function x(t){g.push(t)}let k=!1;const w=new Set;function j(){if(!k){k=!0;do{for(let t=0;t<$.length;t+=1){const e=$[t];h(e),E(e.$$)}for(h(null),$.length=0;b.length;)b.pop()();for(let t=0;t<g.length;t+=1){const e=g[t];w.has(e)||(w.add(e),e())}g.length=0}while($.length);for(;y.length;)y.pop()();_=!1,k=!1,w.clear()}}function E(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(x)}}const S=new Set;let A;function H(t,e){t&&t.i&&(S.delete(t),t.i(e))}function L(t,e,n,o){if(t&&t.o){if(S.has(t))return;S.add(t),A.c.push((()=>{S.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}function N(t,n,s){const{fragment:i,on_mount:c,on_destroy:l,after_update:u}=t.$$;i&&i.m(n,s),x((()=>{const n=c.map(e).filter(r);l?l.push(...n):o(n),t.$$.on_mount=[]})),u.forEach(x)}function O(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function T(t,e){-1===t.$$.dirty[0]&&($.push(t),_||(_=!0,v.then(j)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function C(e,r,s,i,c,u,a=[-1]){const f=m;h(e);const d=r.props||{},p=e.$$={fragment:null,ctx:null,props:u,update:t,not_equal:c,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:n(),dirty:a,skip_bound:!1};let $=!1;if(p.ctx=s?s(e,d,((t,n,...o)=>{const r=o.length?o[0]:n;return p.ctx&&c(p.ctx[t],p.ctx[t]=r)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](r),$&&T(e,t)),n})):[],p.update(),$=!0,o(p.before_update),p.fragment=!!i&&i(p.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);p.fragment&&p.fragment.l(t),t.forEach(l)}else p.fragment&&p.fragment.c();r.intro&&H(e.$$.fragment),N(e,r.target,r.anchor),j()}h(f)}class M{$destroy(){O(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function V(e){let n,o,r,s,m,h,$,b,g;return{c(){n=u("main"),o=u("h1"),r=a("Hello "),s=a(e[0]),m=a("!"),h=f(),$=u("p"),$.innerHTML='Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.',b=f(),g=u("table"),d(o,"class","svelte-1tky8bj"),d(n,"style",e[1]),d(n,"class","svelte-1tky8bj")},m(t,e){c(t,n,e),i(n,o),i(o,r),i(o,s),i(o,m),i(n,h),i(n,$),i(n,b),i(n,g)},p(t,[e]){1&e&&p(s,t[0]),2&e&&d(n,"style",t[1])},i:t,o:t,d(t){t&&l(n)}}}function q(t,e,n){let{name:o}=e,{style:r}=e;return t.$$set=t=>{"name"in t&&n(0,o=t.name),"style"in t&&n(1,r=t.style)},[o,r]}class B extends M{constructor(t){super(),C(this,t,q,V,s,{name:0,style:1})}}function K(t){let e,n;return e=new B({props:{name:t[0]}}),{c(){var t;(t=e.$$.fragment)&&t.c()},m(t,o){N(e,t,o),n=!0},p(t,n){const o={};1&n&&(o.name=t[0]),e.$set(o)},i(t){n||(H(e.$$.fragment,t),n=!0)},o(t){L(e.$$.fragment,t),n=!1},d(t){O(e,t)}}}function P(t){let e,n,r,s,m,h,$,b,g,y,v,_,x,k,w=t[1]&&K(t);return{c(){e=u("main"),n=u("h1"),r=a("Hello "),s=a(t[0]),m=a("!"),h=f(),$=u("p"),$.innerHTML='Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.',b=f(),g=u("button"),g.textContent="OK",y=f(),w&&w.c(),v=a(""),d(n,"class","svelte-1tky8bj"),d(e,"class","svelte-1tky8bj")},m(o,l){var u,a,f,d;c(o,e,l),i(e,n),i(n,r),i(n,s),i(n,m),i(e,h),i(e,$),i(e,b),i(e,g),c(o,y,l),w&&w.m(o,l),c(o,v,l),_=!0,x||(u=g,a="click",f=t[2],u.addEventListener(a,f,d),k=()=>u.removeEventListener(a,f,d),x=!0)},p(t,[e]){(!_||1&e)&&p(s,t[0]),t[1]?w?(w.p(t,e),2&e&&H(w,1)):(w=K(t),w.c(),H(w,1),w.m(v.parentNode,v)):w&&(A={r:0,c:[],p:A},L(w,1,1,(()=>{w=null})),A.r||o(A.c),A=A.p)},i(t){_||(H(w),_=!0)},o(t){L(w),_=!1},d(t){t&&l(e),t&&l(y),w&&w.d(t),t&&l(v),x=!1,k()}}}function z(t,e,n){let{name:o}=e,{visible:r=!1}=e;return t.$$set=t=>{"name"in t&&n(0,o=t.name),"visible"in t&&n(1,r=t.visible)},[o,r,()=>{n(0,o=123),n(1,r=!0)}]}return new class extends M{constructor(t){super(),C(this,t,z,P,s,{name:0,visible:1})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
