(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[8],{43:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(8);n(51);t.a=function(e){return e.href?r.a.createElement("a",{className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"),href:e.href},e.children):e.to?r.a.createElement(c.b,{to:e.to,exact:e.exact,className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger")},e.children):r.a.createElement("button",{className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"),type:e.type,onClick:e.onClick,disabled:e.disabled},e.children)}},46:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(47),o=n(43);t.a=function(e){return r.a.createElement(c.a,{onCancel:e.onClear,header:"An Error Occurred!",show:!!e.error,footer:r.a.createElement(o.a,{onClick:e.onClear},"Okay")},r.a.createElement("p",null,e.error))}},47:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(7),o=n.n(c),l=n(42),s=n(16),u=(n(50),function(e){var t=r.a.createElement("div",{className:"modal ".concat(e.className),style:e.style},r.a.createElement("header",{className:"modal__header ".concat(e.headerClass)},r.a.createElement("h2",null,e.header)),r.a.createElement("form",{onSubmit:e.onSubmit?e.onSubmit:function(e){return e.preventDefault()}},r.a.createElement("div",{className:"modal__content ".concat(e.contentClass)},e.children),r.a.createElement("footer",{className:"modal__footer ".concat(e.footerClass)},e.footer)));return o.a.createPortal(t,document.getElementById("modal-hook"))});t.a=function(e){return r.a.createElement(r.a.Fragment,null,e.show&&r.a.createElement(s.a,{onClick:e.onCancel}),r.a.createElement(l.a,{in:e.show,mountOnEnter:!0,unmountOnExit:!0,timeout:200,classNames:"modal"},r.a.createElement(u,e)))}},48:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(44),r=n.n(a),c=n(45),o=n(10),l=n(0),s=function(){var e=Object(l.useState)(!1),t=Object(o.a)(e,2),n=t[0],a=t[1],s=Object(l.useState)(),u=Object(o.a)(s,2),i=u[0],m=u[1],f=Object(l.useRef)([]),d=Object(l.useCallback)(function(){var e=Object(c.a)(r.a.mark((function e(t){var n,c,o,l,s,u,i=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.length>1&&void 0!==i[1]?i[1]:"GET",c=i.length>2&&void 0!==i[2]?i[2]:null,o=i.length>3&&void 0!==i[3]?i[3]:{},a(!0),l=new AbortController,f.current.push(l),e.prev=6,e.next=9,fetch(t,{method:n,body:c,headers:o,signal:l.signal});case 9:return s=e.sent,e.next=12,s.json();case 12:if(u=e.sent,f.current=f.current.filter((function(e){return e!==l})),s.ok){e.next=16;break}throw new Error(u.message);case 16:return a(!1),e.abrupt("return",u);case 20:throw e.prev=20,e.t0=e.catch(6),m(e.t0.message),a(!1),e.t0;case 25:case"end":return e.stop()}}),e,null,[[6,20]])})));return function(t){return e.apply(this,arguments)}}(),[]);return Object(l.useEffect)((function(){return function(){f.current.forEach((function(e){return e.abort()}))}}),[]),{isLoading:n,error:i,sendRequest:d,clearError:function(){m(null)}}}},49:function(e,t,n){"use strict";var a=n(0),r=n.n(a);n(55);t.a=function(e){return r.a.createElement("div",{className:"card ".concat(e.className),style:e.style},e.children)}},50:function(e,t,n){},51:function(e,t,n){},55:function(e,t,n){},65:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},77:function(e,t,n){"use strict";n.r(t);var a=n(44),r=n.n(a),c=n(45),o=n(10),l=n(0),s=n.n(l),u=n(8),i=(n(65),function(e){return s.a.createElement("div",{className:"avatar ".concat(e.className),style:e.style},s.a.createElement("img",{src:e.image,alt:e.alt,style:{width:e.width,height:e.width}}))}),m=n(49),f=(n(56),n(68),function(e){return s.a.createElement("li",{className:"user-item"},s.a.createElement(m.a,{className:"user-item__content"},s.a.createElement(u.b,{to:"/".concat(e.id,"/places")},s.a.createElement("div",{className:"user-item__image"},s.a.createElement(i,{image:"".concat("https://yourplaces-mern.herokuapp.com","/").concat(e.image),alt:e.name})),s.a.createElement("div",{className:"user-item__info"},s.a.createElement("h2",null,e.name),s.a.createElement("h3",null,e.placeCount," ",1===e.placeCount?"Place":"Places")))))}),d=(n(69),function(e){return 0===e.items.length?s.a.createElement("div",{className:"center"},s.a.createElement(m.a,null,s.a.createElement("h2",null,"No users found."))):s.a.createElement("ul",{className:"users-list"},e.items.map((function(e){return s.a.createElement(f,{key:e.id,id:e.id,image:e.image,name:e.name,placeCount:e.places.length})})))}),h=n(46),E=n(15),b=n(48);t.default=function(){var e=Object(b.a)(),t=e.isLoading,n=e.error,a=e.sendRequest,u=e.clearError,i=Object(l.useState)(),m=Object(o.a)(i,2),f=m[0],p=m[1];return Object(l.useEffect)((function(){(function(){var e=Object(c.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a("https://yourplaces-mern.herokuapp.com/api/users");case 3:t=e.sent,p(t.users),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[a]),s.a.createElement(s.a.Fragment,null,s.a.createElement(h.a,{error:n,onClear:u}),t&&s.a.createElement("div",{className:"center"},s.a.createElement(E.a,null)),!t&&f&&s.a.createElement(d,{items:f}))}}}]);
//# sourceMappingURL=8.9b41de29.chunk.js.map