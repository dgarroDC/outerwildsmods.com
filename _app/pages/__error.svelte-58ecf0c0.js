import{S as R,i as V,s as z,w as O,x as S,y as j,q as B,o as H,B as I,k as P,e as $,t as g,m as q,c as h,a as k,h as w,d as i,b,g as E,H as u,j as x}from"../chunks/vendor-e2160a72.js";import{P as A}from"../chunks/page-section-title-6f757fcb.js";import{E as F}from"../chunks/error-message-6ef83608.js";import"../chunks/page-section-1bdcf187.js";function G(s){let t,n,a,o,r,m,l,v,p,_,y,f;return t=new F({}),{c(){O(t.$$.fragment),n=P(),a=$("code"),o=g(s[0]),r=P(),m=$("div"),l=$("pre"),v=g(`
			`),p=$("code"),_=g(s[1]),y=g(`
		`),this.h()},l(e){S(t.$$.fragment,e),n=q(e),a=h(e,"CODE",{class:!0});var c=k(a);o=w(c,s[0]),c.forEach(i),r=q(e),m=h(e,"DIV",{class:!0});var C=k(m);l=h(C,"PRE",{class:!0});var d=k(l);v=w(d,`
			`),p=h(d,"CODE",{});var D=k(p);_=w(D,s[1]),D.forEach(i),y=w(d,`
		`),d.forEach(i),C.forEach(i),this.h()},h(){b(a,"class","whitespace-pre-wrap break-words"),b(l,"class","whitespace-pre-wrap break-words"),b(m,"class","bg-dark rounded px-2")},m(e,c){j(t,e,c),E(e,n,c),E(e,a,c),u(a,o),E(e,r,c),E(e,m,c),u(m,l),u(l,v),u(l,p),u(p,_),u(l,y),f=!0},p(e,c){(!f||c&1)&&x(o,e[0]),(!f||c&2)&&x(_,e[1])},i(e){f||(B(t.$$.fragment,e),f=!0)},o(e){H(t.$$.fragment,e),f=!1},d(e){I(t,e),e&&i(n),e&&i(a),e&&i(r),e&&i(m)}}}function J(s){let t,n;return t=new A({props:{$$slots:{default:[G]},$$scope:{ctx:s}}}),{c(){O(t.$$.fragment)},l(a){S(t.$$.fragment,a)},m(a,o){j(t,a,o),n=!0},p(a,[o]){const r={};o&7&&(r.$$scope={dirty:o,ctx:a}),t.$set(r)},i(a){n||(B(t.$$.fragment,a),n=!0)},o(a){H(t.$$.fragment,a),n=!1},d(a){I(t,a)}}}const T=({error:s,status:t})=>({props:{message:`${t}: ${s==null?void 0:s.message}`,stack:s==null?void 0:s.stack}});function K(s,t,n){let{message:a=""}=t,{stack:o=""}=t;return s.$$set=r=>{"message"in r&&n(0,a=r.message),"stack"in r&&n(1,o=r.stack)},[a,o]}class U extends R{constructor(t){super();V(this,t,K,J,z,{message:0,stack:1})}}export{U as default,T as load};