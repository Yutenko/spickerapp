(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{118:function(e,n,t){e.exports=t(283)},123:function(e,n,t){},124:function(e,n,t){},139:function(e,n,t){},210:function(e,n,t){},283:function(e,n,t){"use strict";t.r(n);var a=t(1),r=t.n(a),o=t(15),c=t.n(o),i=(t(123),t(124),t(25)),l=t(27),s=t(117),u=t(60),f=t.n(u),d=t(26),m=t.n(d),p=t(107),v=t.n(p),h=(t(139),function(){var e=Object(a.useRef)(null),n=Object(i.useGlobal)("spicker"),t=Object(l.a)(n,2),o=(t[0],t[1]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,{ref:function(n){return e=n},canvasWidth:"100vw",canvasHeight:"100vh",hideGrid:!0}),r.a.createElement(f.a,{variant:"outlined",onClick:function(){e.clear()},className:"clear"},r.a.createElement(m.a,null,"clear_all")," Neu"),r.a.createElement(v.a,{className:"spicker",onClick:function(){o(!0)}},r.a.createElement(m.a,null,"add")))}),b=t(116),g=(t(210),t(109)),w=t.n(g),E=t(110),k=t.n(E),O=t(111),j=t.n(O),y=t(63),C=t.n(y),S=t(61),N=t.n(S),W=t(108),A=t.n(W),z=t(62),G=t.n(z),J=t(113),R=t.n(J),T=t(115),x=t.n(T),I=t(114),U=t.n(I),B=t(112),L=t.n(B);function P(e){return r.a.createElement(A.a,Object.assign({direction:"up"},e))}var D=function(e){var n=Object(a.useState)(JSON.parse(localStorage.getItem("spicker"))||[]),t=Object(l.a)(n,2),o=t[0],c=t[1],i=Object(a.useState)(""),s=Object(l.a)(i,2),u=s[0],f=s[1],d=function(e){c(o.filter(function(n){return n!==e}))};return Object(a.useEffect)(function(){localStorage.setItem("spicker",JSON.stringify(o))},[o]),r.a.createElement("div",{style:{paddingTop:55}},r.a.createElement(L.a,{id:"outlined-search",label:"Zum Spickzettel hinzuf\xfcgen",margin:"dense",variant:"outlined",onKeyDown:function(e){if(13===e.keyCode||13===e.which){var n=[].concat(Object(b.a)(o),[e.target.value]);c(n),f("")}},onChange:function(e){return f(e.target.value)},value:u,fullWidth:!0}),r.a.createElement(G.a,{dense:!0},o.map(function(e,n){return r.a.createElement(R.a,{key:"spicker-"+n,button:!0},r.a.createElement(U.a,{primary:e}),r.a.createElement(x.a,null,r.a.createElement(C.a,{onClick:d.bind(void 0,e)},r.a.createElement(m.a,null,"close"))))})))},F=function(){var e=Object(i.useGlobal)("spicker"),n=Object(l.a)(e,2),t=n[0],a=n[1],o=function(){a(!1)};return r.a.createElement(w.a,{fullScreen:!0,open:t,onClose:o,TransitionComponent:P},r.a.createElement(k.a,{className:"app-bar"},r.a.createElement(j.a,null,r.a.createElement(C.a,{color:"inherit",onClick:o,"aria-label":"Close"},r.a.createElement(m.a,null,"close")),r.a.createElement(N.a,{variant:"h6",color:"inherit",className:"flex"},"Spickzettel"))),r.a.createElement(D,null))};Object(i.setGlobal)({spicker:!1});var H=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(h,null),r.a.createElement(F,null))},K=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Z(e,n){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}c.a.render(r.a.createElement(H,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/appszauberwilli/spicker/build",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var n="".concat("/appszauberwilli/spicker/build","/service-worker.js");K?(function(e,n){fetch(e).then(function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):Z(e,n)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(n,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):Z(n,e)})}}()}},[[118,1,2]]]);
//# sourceMappingURL=main.feb77de8.chunk.js.map