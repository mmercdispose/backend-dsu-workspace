let e,t,n,l=!1,o=!1,s=!1,i=0,r=!1;const c="undefined"!=typeof window?window:{},f=c.document||{head:{}},a={t:0,l:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,l)=>e.addEventListener(t,n,l),rel:(e,t,n,l)=>e.removeEventListener(t,n,l),ce:(e,t)=>new CustomEvent(e,t)},u=e=>Promise.resolve(e),d=(()=>{try{return new CSSStyleSheet,!0}catch(e){}return!1})(),p={},$=(e,t,n)=>{n&&n.map(([n,l,o])=>{const s=m(e,n),i=y(t,o),r=b(n);a.ael(s,l,i,r),(t.o=t.o||[]).push(()=>a.rel(s,l,i,r))})},y=(e,t)=>n=>{256&e.t?e.s[t](n):(e.i=e.i||[]).push([t,n])},m=(e,t)=>4&t?f:8&t?c:e,b=e=>0!=(2&e),h="http://www.w3.org/1999/xlink",w=new WeakMap,g=(e,t)=>"sc-"+(t&&32&e.t?e.u+"-"+t:e.u),v=e=>ve.push(e),k={},j=e=>"object"==(e=typeof e)||"function"===e,S="undefined"!=typeof Deno,M=!(S||"undefined"==typeof global||"function"!=typeof require||!global.process||"string"!=typeof __filename||global.origin&&"string"==typeof global.origin),C=(S&&Deno,M?process:S&&Deno,M?process:S&&Deno,(e,t,...n)=>{let l=null,o=null,s=null,i=!1,r=!1,c=[];const f=t=>{for(let n=0;n<t.length;n++)l=t[n],Array.isArray(l)?f(l):null!=l&&"boolean"!=typeof l&&((i="function"!=typeof e&&!j(l))&&(l+=""),i&&r?c[c.length-1].p+=l:c.push(i?O(null,l):l),r=i)};if(f(n),t){t.key&&(o=t.key),t.name&&(s=t.name);{const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter(t=>e[t]).join(" "))}}if("function"==typeof e)return e(null===t?{}:t,c,D);const a=O(e,null);return a.$=t,c.length>0&&(a.m=c),a.h=o,a.g=s,a}),O=(e,t)=>({t:0,v:e,p:t,k:null,m:null,$:null,h:null,g:null}),U={},D={forEach:(e,t)=>e.map(P).forEach(t),map:(e,t)=>e.map(P).map(t).map(x)},P=e=>({vattrs:e.$,vchildren:e.m,vkey:e.h,vname:e.g,vtag:e.v,vtext:e.p}),x=e=>{if("function"==typeof e.vtag){const t=Object.assign({},e.vattrs);return e.vkey&&(t.key=e.vkey),e.vname&&(t.name=e.vname),C(e.vtag,t,...e.vchildren||[])}const t=O(e.vtag,e.vtext);return t.$=e.vattrs,t.m=e.vchildren,t.h=e.vkey,t.g=e.vname,t},R=(e,t,n,l,o,s)=>{if(n!==l){let i=me(e,t),r=t.toLowerCase();if("class"===t){const t=e.classList,o=T(n),s=T(l);t.remove(...o.filter(e=>e&&!s.includes(e))),t.add(...s.filter(e=>e&&!o.includes(e)))}else if("style"===t){for(const t in n)l&&null!=l[t]||(t.includes("-")?e.style.removeProperty(t):e.style[t]="");for(const t in l)n&&l[t]===n[t]||(t.includes("-")?e.style.setProperty(t,l[t]):e.style[t]=l[t])}else if("key"===t);else if("ref"===t)l&&l(e);else if(i||"o"!==t[0]||"n"!==t[1]){const c=j(l);if((i||c&&null!==l)&&!o)try{if(e.tagName.includes("-"))e[t]=l;else{let o=null==l?"":l;"list"===t?i=!1:null!=n&&e[t]==o||(e[t]=o)}}catch(e){}let f=!1;r!==(r=r.replace(/^xlink\:?/,""))&&(t=r,f=!0),null==l||!1===l?!1===l&&""!==e.getAttribute(t)||(f?e.removeAttributeNS(h,t):e.removeAttribute(t)):(!i||4&s||o)&&!c&&(l=!0===l?"":l,f?e.setAttributeNS(h,t,l):e.setAttribute(t,l))}else t="-"===t[2]?t.slice(3):me(c,r)?r.slice(2):r[2]+t.slice(3),n&&a.rel(e,t,n,!1),l&&a.ael(e,t,l,!1)}},L=/\s/,T=e=>e?e.split(L):[],E=(e,t,n,l)=>{const o=11===t.k.nodeType&&t.k.host?t.k.host:t.k,s=e&&e.$||k,i=t.$||k;for(l in s)l in i||R(o,l,s[l],void 0,n,t.t);for(l in i)R(o,l,s[l],i[l],n,t.t)},W=(o,i,r,c)=>{let a,u,d,p=i.m[r],$=0;if(l||(s=!0,"slot"===p.v&&(e&&c.classList.add(e+"-s"),p.t|=p.m?2:1)),null!==p.p)a=p.k=f.createTextNode(p.p);else if(1&p.t)a=p.k=f.createTextNode("");else if(a=p.k=f.createElement(2&p.t?"slot-fb":p.v),E(null,p,!1),null!=e&&a["s-si"]!==e&&a.classList.add(a["s-si"]=e),p.m)for($=0;$<p.m.length;++$)u=W(o,p,$,a),u&&a.appendChild(u);return a["s-hn"]=n,3&p.t&&(a["s-sr"]=!0,a["s-cr"]=t,a["s-sn"]=p.g||"",d=o&&o.m&&o.m[r],d&&d.v===p.v&&o.k&&q(o.k,!1)),a},q=(e,t)=>{a.t|=1;const l=e.childNodes;for(let e=l.length-1;e>=0;e--){const o=l[e];o["s-hn"]!==n&&o["s-ol"]&&(N(o).insertBefore(o,H(o)),o["s-ol"].remove(),o["s-ol"]=void 0,s=!0),t&&q(o,t)}a.t&=-2},_=(e,t,l,o,s,i)=>{let r,c=e["s-cr"]&&e["s-cr"].parentNode||e;for(c.shadowRoot&&c.tagName===n&&(c=c.shadowRoot);s<=i;++s)o[s]&&(r=W(null,l,s,e),r&&(o[s].k=r,c.insertBefore(r,H(t))))},A=(e,t,n,l,s)=>{for(;t<=n;++t)(l=e[t])&&(s=l.k,J(l),o=!0,s["s-ol"]?s["s-ol"].remove():q(s,!0),s.remove())},F=(e,t)=>e.v===t.v&&("slot"===e.v?e.g===t.g:e.h===t.h),H=e=>e&&e["s-ol"]||e,N=e=>(e["s-ol"]?e["s-ol"]:e).parentNode,V=(e,t)=>{const n=t.k=e.k,l=e.m,o=t.m,s=t.p;let i;null===s?("slot"===t.v||E(e,t,!1),null!==l&&null!==o?((e,t,n,l)=>{let o,s,i=0,r=0,c=0,f=0,a=t.length-1,u=t[0],d=t[a],p=l.length-1,$=l[0],y=l[p];for(;i<=a&&r<=p;)if(null==u)u=t[++i];else if(null==d)d=t[--a];else if(null==$)$=l[++r];else if(null==y)y=l[--p];else if(F(u,$))V(u,$),u=t[++i],$=l[++r];else if(F(d,y))V(d,y),d=t[--a],y=l[--p];else if(F(u,y))"slot"!==u.v&&"slot"!==y.v||q(u.k.parentNode,!1),V(u,y),e.insertBefore(u.k,d.k.nextSibling),u=t[++i],y=l[--p];else if(F(d,$))"slot"!==u.v&&"slot"!==y.v||q(d.k.parentNode,!1),V(d,$),e.insertBefore(d.k,u.k),d=t[--a],$=l[++r];else{for(c=-1,f=i;f<=a;++f)if(t[f]&&null!==t[f].h&&t[f].h===$.h){c=f;break}c>=0?(s=t[c],s.v!==$.v?o=W(t&&t[r],n,c,e):(V(s,$),t[c]=void 0,o=s.k),$=l[++r]):(o=W(t&&t[r],n,r,e),$=l[++r]),o&&N(u.k).insertBefore(o,H(u.k))}i>a?_(e,null==l[p+1]?null:l[p+1].k,n,l,r,p):r>p&&A(t,i,a)})(n,l,t,o):null!==o?(null!==e.p&&(n.textContent=""),_(n,null,t,o,0,o.length-1)):null!==l&&A(l,0,l.length-1)):(i=n["s-cr"])?i.parentNode.textContent=s:e.p!==s&&(n.data=s)},z=e=>{let t,n,l,o,s,i,r=e.childNodes;for(n=0,l=r.length;n<l;n++)if(t=r[n],1===t.nodeType){if(t["s-sr"])for(s=t["s-sn"],t.hidden=!1,o=0;o<l;o++)if(r[o]["s-hn"]!==t["s-hn"])if(i=r[o].nodeType,""!==s){if(1===i&&s===r[o].getAttribute("slot")){t.hidden=!0;break}}else if(1===i||3===i&&""!==r[o].textContent.trim()){t.hidden=!0;break}z(t)}},B=[],G=e=>{let t,n,l,s,i,r,c=0,f=e.childNodes,a=f.length;for(;c<a;c++){if(t=f[c],t["s-sr"]&&(n=t["s-cr"]))for(l=n.parentNode.childNodes,s=t["s-sn"],r=l.length-1;r>=0;r--)n=l[r],n["s-cn"]||n["s-nr"]||n["s-hn"]===t["s-hn"]||(I(n,s)?(i=B.find(e=>e.j===n),o=!0,n["s-sn"]=n["s-sn"]||s,i?i.S=t:B.push({S:t,j:n}),n["s-sr"]&&B.map(e=>{I(e.j,n["s-sn"])&&(i=B.find(e=>e.j===n),i&&!e.S&&(e.S=i.S))})):B.some(e=>e.j===n)||B.push({j:n}));1===t.nodeType&&G(t)}},I=(e,t)=>1===e.nodeType?null===e.getAttribute("slot")&&""===t||e.getAttribute("slot")===t:e["s-sn"]===t||""===t,J=e=>{e.$&&e.$.ref&&e.$.ref(null),e.m&&e.m.map(J)},K=e=>pe(e).M,Q=(e,t,n)=>{const l=K(e);return{emit:e=>X(l,t,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:e})}},X=(e,t,n)=>{const l=a.ce(t,n);return e.dispatchEvent(l),l},Y=(e,t)=>{t&&!e.C&&t["s-p"]&&t["s-p"].push(new Promise(t=>e.C=t))},Z=(e,t)=>{if(e.t|=16,!(4&e.t))return Y(e,e.O),Pe(()=>ee(e,t));e.t|=512},ee=(e,t)=>{const n=e.s;let l;return t?(e.t|=256,e.i&&(e.i.map(([e,t])=>se(n,e,t)),e.i=null),l=se(n,"componentWillLoad")):l=se(n,"componentWillUpdate"),ie(l,()=>te(e,n,t))},te=(i,r,c)=>{const u=i.M,d=u["s-rc"];c&&(e=>{const t=e.U,n=e.M,l=t.t,o=((e,t,n)=>{let l=g(t,n),o=ge.get(l);if(e=11===e.nodeType?e:f,o)if("string"==typeof o){let t,n=w.get(e=e.head||e);n||w.set(e,n=new Set),n.has(l)||(t=f.createElement("style"),t.innerHTML=o,e.insertBefore(t,e.querySelector("link")),n&&n.add(l))}else e.adoptedStyleSheets.includes(o)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,o]);return l})(n.shadowRoot?n.shadowRoot:n.getRootNode(),t,e.D);10&l&&(n["s-sc"]=o,n.classList.add(o+"-h"))})(i);((i,r)=>{const c=i.M,u=i.U,d=i.P||O(null,null),p=(e=>e&&e.v===U)(r)?r:C(null,null,r);if(n=c.tagName,u.R&&(p.$=p.$||{},u.R.map(([e,t])=>p.$[t]=c[e])),p.v=null,p.t|=4,i.P=p,p.k=d.k=c.shadowRoot||c,e=c["s-sc"],t=c["s-cr"],l=0!=(1&u.t),o=!1,V(d,p),a.t|=1,s){let e,t,n,l,o,s;G(p.k);let i=0;for(;i<B.length;i++)e=B[i],t=e.j,t["s-ol"]||(n=f.createTextNode(""),n["s-nr"]=t,t.parentNode.insertBefore(t["s-ol"]=n,t));for(i=0;i<B.length;i++)if(e=B[i],t=e.j,e.S){for(l=e.S.parentNode,o=e.S.nextSibling,n=t["s-ol"];n=n.previousSibling;)if(s=n["s-nr"],s&&s["s-sn"]===t["s-sn"]&&l===s.parentNode&&(s=s.nextSibling,!s||!s["s-nr"])){o=s;break}(!o&&l!==t.parentNode||t.nextSibling!==o)&&t!==o&&(!t["s-hn"]&&t["s-ol"]&&(t["s-hn"]=t["s-ol"].parentNode.nodeName),l.insertBefore(t,o))}else 1===t.nodeType&&(t.hidden=!0)}o&&z(p.k),a.t&=-2,B.length=0})(i,ne(i,r)),d&&(d.map(e=>e()),u["s-rc"]=void 0);{const e=u["s-p"],t=()=>le(i);0===e.length?t():(Promise.all(e).then(t),i.t|=4,e.length=0)}},ne=(e,t)=>{try{t=t.render&&t.render(),e.t&=-17,e.t|=2}catch(e){be(e)}return t},le=e=>{const t=e.M,n=e.s,l=e.O;64&e.t?se(n,"componentDidUpdate"):(e.t|=64,re(t),se(n,"componentDidLoad"),e.L(t),l||oe()),e.T(t),e.C&&(e.C(),e.C=void 0),512&e.t&&Ue(()=>Z(e,!1)),e.t&=-517},oe=()=>{re(f.documentElement),a.t|=2,Ue(()=>X(c,"appload",{detail:{namespace:"cardinal"}}))},se=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(e){be(e)}},ie=(e,t)=>e&&e.then?e.then(t):t(),re=e=>e.classList.add("hydrated"),ce=(e,t,n)=>{if(t.W){e.watchers&&(t.q=e.watchers);const l=Object.entries(t.W),o=e.prototype;if(l.map(([e,[l]])=>{31&l||2&n&&32&l?Object.defineProperty(o,e,{get(){return((e,t)=>pe(this)._.get(t))(0,e)},set(n){((e,t,n,l)=>{const o=pe(e),s=o._.get(t),i=o.t,r=o.s;if(n=((e,t)=>null==e||j(e)?e:4&t?"false"!==e&&(""===e||!!e):2&t?parseFloat(e):1&t?e+"":e)(n,l.W[t][0]),!(8&i&&void 0!==s||n===s)&&(o._.set(t,n),r)){if(l.q&&128&i){const e=l.q[t];e&&e.map(e=>{try{r[e](n,s,t)}catch(e){be(e)}})}if(2==(18&i)){if(r.componentShouldUpdate&&!1===r.componentShouldUpdate(n,s,t))return;Z(o,!1)}}})(this,e,n,t)},configurable:!0,enumerable:!0}):1&n&&64&l&&Object.defineProperty(o,e,{value(...t){const n=pe(this);return n.A.then(()=>n.s[e](...t))}})}),1&n){const n=new Map;o.attributeChangedCallback=function(e,t,l){a.jmp(()=>{const t=n.get(e);this[t]=(null!==l||"boolean"!=typeof this[t])&&l})},e.observedAttributes=l.filter(([e,t])=>15&t[0]).map(([e,l])=>{const o=l[1]||e;return n.set(o,e),512&l[0]&&t.R.push([e,o]),o})}}return e},fe=e=>{se(e,"connectedCallback")},ae=(e,t={})=>{const n=[],l=t.exclude||[],o=c.customElements,s=f.head,i=s.querySelector("meta[charset]"),r=f.createElement("style"),u=[];let p,y=!0;Object.assign(a,t),a.l=new URL(t.resourcesUrl||"./",f.baseURI).href,t.syncQueue&&(a.t|=4),e.map(e=>e[1].map(t=>{const s={t:t[0],u:t[1],W:t[2],F:t[3]};s.W=t[2],s.F=t[3],s.R=[],s.q={};const i=s.u,r=class extends HTMLElement{constructor(e){super(e),ye(e=this,s),1&s.t&&e.attachShadow({mode:"open"})}connectedCallback(){p&&(clearTimeout(p),p=null),y?u.push(this):a.jmp(()=>(e=>{if(0==(1&a.t)){const t=pe(e),n=t.U,l=()=>{};if(1&t.t)$(e,t,n.F),fe(t.s);else{t.t|=1,12&n.t&&(e=>{const t=e["s-cr"]=f.createComment("");t["s-cn"]=!0,e.insertBefore(t,e.firstChild)})(e);{let n=e;for(;n=n.parentNode||n.host;)if(n["s-p"]){Y(t,t.O=n);break}}n.W&&Object.entries(n.W).map(([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}}),Ue(()=>(async(e,t,n,l,o)=>{if(0==(32&t.t)){{if(t.t|=32,(o=we(n)).then){const e=()=>{};o=await o,e()}o.isProxied||(n.q=o.watchers,ce(o,n,2),o.isProxied=!0);const e=()=>{};t.t|=8;try{new o(t)}catch(e){be(e)}t.t&=-9,t.t|=128,e(),fe(t.s)}if(o.style){let l=o.style;"string"!=typeof l&&(l=l[t.D=(e=>ve.map(t=>t(e)).find(e=>!!e))(e)]);const s=g(n,t.D);if(!ge.has(s)){const e=()=>{};((e,t,n)=>{let l=ge.get(e);d&&n?(l=l||new CSSStyleSheet,l.replace(t)):l=t,ge.set(e,l)})(s,l,!!(1&n.t)),e()}}}const s=t.O,i=()=>Z(t,!0);s&&s["s-rc"]?s["s-rc"].push(i):i()})(e,t,n))}l()}})(this))}disconnectedCallback(){a.jmp(()=>(()=>{if(0==(1&a.t)){const e=pe(this),t=e.s;e.o&&(e.o.map(e=>e()),e.o=void 0),se(t,"disconnectedCallback"),se(t,"componentDidUnload")}})())}forceUpdate(){(()=>{{const e=pe(this);e.M.isConnected&&2==(18&e.t)&&Z(e,!1)}})()}componentOnReady(){return pe(this).H}};s.N=e[0],l.includes(i)||o.get(i)||(n.push(i),o.define(i,ce(r,s,1)))})),r.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",r.setAttribute("data-styles",""),s.insertBefore(r,i?i.nextSibling:s.firstChild),y=!1,u.length?u.map(e=>e.connectedCallback()):a.jmp(()=>p=setTimeout(oe,30))},ue=(e,t)=>t in p?p[t]:"window"===t?c:"document"===t?f:"isServer"!==t&&"isPrerender"!==t&&("isClient"===t||("resourcesUrl"===t||"publicPath"===t?(()=>{const e=new URL(".",a.l);return e.origin!==c.location.origin?e.href:e.pathname})():"queue"===t?{write:Pe,read:De,tick:{then:e=>Ue(e)}}:void 0)),de=new WeakMap,pe=e=>de.get(e),$e=(e,t)=>de.set(t.s=e,t),ye=(e,t)=>{const n={t:0,M:e,U:t,_:new Map};return n.A=new Promise(e=>n.T=e),n.H=new Promise(e=>n.L=e),e["s-p"]=[],e["s-rc"]=[],$(e,n,t.F),de.set(e,n)},me=(e,t)=>t in e,be=e=>console.error(e),he=new Map,we=e=>{const t=e.u.replace(/-/g,"_"),n=e.N,l=he.get(n);return l?l[t]:import(`./${n}.entry.js`).then(e=>(he.set(n,e),e[t]),be)},ge=new Map,ve=[],ke=[],je=[],Se=[],Me=(e,t)=>n=>{e.push(n),r||(r=!0,t&&4&a.t?Ue(Oe):a.raf(Oe))},Ce=(e,t)=>{let n=0,l=0;for(;n<e.length&&(l=performance.now())<t;)try{e[n++](l)}catch(e){be(e)}n===e.length?e.length=0:0!==n&&e.splice(0,n)},Oe=()=>{i++,(e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){be(e)}e.length=0})(ke);{const e=2==(6&a.t)?performance.now()+14*Math.ceil(.1*i):1/0;Ce(je,e),Ce(Se,e),je.length>0&&(Se.push(...je),je.length=0),(r=ke.length+je.length+Se.length>0)?a.raf(Oe):i=0}},Ue=e=>u().then(e),De=Me(ke,!1),Pe=Me(je,!0);export{U as H,ue as a,ae as b,Q as c,K as g,C as h,u as p,$e as r,v as s}