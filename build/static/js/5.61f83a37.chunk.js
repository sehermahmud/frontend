(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[5],{43:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(8);n(51);t.a=function(e){return e.href?r.a.createElement("a",{className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"),href:e.href},e.children):e.to?r.a.createElement(c.b,{to:e.to,exact:e.exact,className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger")},e.children):r.a.createElement("button",{className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"),type:e.type,onClick:e.onClick,disabled:e.disabled},e.children)}},46:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(47),i=n(43);t.a=function(e){return r.a.createElement(c.a,{onCancel:e.onClear,header:"An Error Occurred!",show:!!e.error,footer:r.a.createElement(i.a,{onClick:e.onClear},"Okay")},r.a.createElement("p",null,e.error))}},47:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(7),i=n.n(c),o=n(42),u=n(16),l=(n(50),function(e){var t=r.a.createElement("div",{className:"modal ".concat(e.className),style:e.style},r.a.createElement("header",{className:"modal__header ".concat(e.headerClass)},r.a.createElement("h2",null,e.header)),r.a.createElement("form",{onSubmit:e.onSubmit?e.onSubmit:function(e){return e.preventDefault()}},r.a.createElement("div",{className:"modal__content ".concat(e.contentClass)},e.children),r.a.createElement("footer",{className:"modal__footer ".concat(e.footerClass)},e.footer)));return i.a.createPortal(t,document.getElementById("modal-hook"))});t.a=function(e){return r.a.createElement(r.a.Fragment,null,e.show&&r.a.createElement(u.a,{onClick:e.onCancel}),r.a.createElement(o.a,{in:e.show,mountOnEnter:!0,unmountOnExit:!0,timeout:200,classNames:"modal"},r.a.createElement(l,e)))}},48:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(44),r=n.n(a),c=n(45),i=n(10),o=n(0),u=function(){var e=Object(o.useState)(!1),t=Object(i.a)(e,2),n=t[0],a=t[1],u=Object(o.useState)(),l=Object(i.a)(u,2),s=l[0],d=l[1],f=Object(o.useRef)([]),p=Object(o.useCallback)(function(){var e=Object(c.a)(r.a.mark((function e(t){var n,c,i,o,u,l,s=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=s.length>1&&void 0!==s[1]?s[1]:"GET",c=s.length>2&&void 0!==s[2]?s[2]:null,i=s.length>3&&void 0!==s[3]?s[3]:{},a(!0),o=new AbortController,f.current.push(o),e.prev=6,e.next=9,fetch(t,{method:n,body:c,headers:i,signal:o.signal});case 9:return u=e.sent,e.next=12,u.json();case 12:if(l=e.sent,f.current=f.current.filter((function(e){return e!==o})),u.ok){e.next=16;break}throw new Error(l.message);case 16:return a(!1),e.abrupt("return",l);case 20:throw e.prev=20,e.t0=e.catch(6),d(e.t0.message),a(!1),e.t0;case 25:case"end":return e.stop()}}),e,null,[[6,20]])})));return function(t){return e.apply(this,arguments)}}(),[]);return Object(o.useEffect)((function(){return function(){f.current.forEach((function(e){return e.abort()}))}}),[]),{isLoading:n,error:s,sendRequest:p,clearError:function(){d(null)}}}},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(53);function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},53:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return a}))},54:function(e,t,n){"use strict";var a=n(17);n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return i})),n.d(t,"d",(function(){return o}));var r=function(){return{type:"REQUIRE"}},c=function(e){return{type:"MINLENGTH",val:e}},i=function(){return{type:"EMAIL"}},o=function(e,t){var n,r=!0,c=function(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(a.a)(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,c,i=!0,o=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return i=e.done,e},e:function(e){o=!0,c=e},f:function(){try{i||null==r.return||r.return()}finally{if(o)throw c}}}}(t);try{for(c.s();!(n=c.n()).done;){var i=n.value;"REQUIRE"===i.type&&(r=r&&e.trim().length>0),"MINLENGTH"===i.type&&(r=r&&e.trim().length>=i.val),"MAXLENGTH"===i.type&&(r=r&&e.trim().length<=i.val),"MIN"===i.type&&(r=r&&+e>=i.val),"MAX"===i.type&&(r=r&&+e<=i.val),"EMAIL"===i.type&&(r=r&&/^\S+@\S+\.\S+$/.test(e))}}catch(o){c.e(o)}finally{c.f()}return r}},57:function(e,t,n){"use strict";var a=n(10),r=n(52),c=n(0),i=n.n(c),o=n(54),u=(n(58),function(e,t){switch(t.type){case"CHANGE":return Object(r.a)(Object(r.a)({},e),{},{value:t.val,isValid:Object(o.d)(t.val,t.validators)});case"TOUCH":return Object(r.a)(Object(r.a)({},e),{},{isTouched:!0});default:return e}});t.a=function(e){var t=Object(c.useReducer)(u,{value:e.initialValue||"",isTouched:!1,isValid:e.initialValid||!1}),n=Object(a.a)(t,2),r=n[0],o=n[1],l=e.id,s=e.onInput,d=r.value,f=r.isValid;Object(c.useEffect)((function(){s(l,d,f)}),[l,d,f,s]);var p=function(t){o({type:"CHANGE",val:t.target.value,validators:e.validators})},m=function(){o({type:"TOUCH"})},b="input"===e.element?i.a.createElement("input",{id:e.id,type:e.type,placeholder:e.placeholder,onChange:p,onBlur:m,value:r.value}):i.a.createElement("textarea",{id:e.id,rows:e.rows||3,onChange:p,onBlur:m,value:r.value});return i.a.createElement("div",{className:"form-control ".concat(!r.isValid&&r.isTouched&&"form-control--invalid")},i.a.createElement("label",{htmlFor:e.id},e.label),b,!r.isValid&&r.isTouched&&i.a.createElement("p",null,e.errorText))}},58:function(e,t,n){},59:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(10),r=n(53),c=n(52),i=n(0),o=function(e,t){switch(t.type){case"INPUT_CHANGE":var n=!0;for(var a in e.inputs)e.inputs[a]&&(n=a===t.inputId?n&&t.isValid:n&&e.inputs[a].isValid);return Object(c.a)(Object(c.a)({},e),{},{inputs:Object(c.a)(Object(c.a)({},e.inputs),{},Object(r.a)({},t.inputId,{value:t.value,isValid:t.isValid})),isValid:n});case"SET_DATA":return{inputs:t.inputs,isValid:t.formIsValid};default:return e}},u=function(e,t){var n=Object(i.useReducer)(o,{inputs:e,isValid:t}),r=Object(a.a)(n,2),c=r[0],u=r[1];return[c,Object(i.useCallback)((function(e,t,n){u({type:"INPUT_CHANGE",value:t,isValid:n,inputId:e})}),[]),Object(i.useCallback)((function(e,t){u({type:"SET_DATA",inputs:e,formIsValid:t})}),[])]}},60:function(e,t,n){"use strict";var a=n(10),r=n(0),c=n.n(r),i=n(43);n(61);t.a=function(e){var t=Object(r.useState)(),n=Object(a.a)(t,2),o=n[0],u=n[1],l=Object(r.useState)(),s=Object(a.a)(l,2),d=s[0],f=s[1],p=Object(r.useState)(!1),m=Object(a.a)(p,2),b=m[0],v=m[1],O=Object(r.useRef)();Object(r.useEffect)((function(){if(o){var e=new FileReader;e.onload=function(){f(e.result)},e.readAsDataURL(o)}}),[o]);return c.a.createElement("div",{className:"form-control"},c.a.createElement("input",{id:e.id,ref:O,style:{display:"none"},type:"file",accept:".jpg,.png,.jpeg",onChange:function(t){var n,a=b;t.target.files&&1===t.target.files.length?(n=t.target.files[0],u(n),v(!0),a=!0):(v(!1),a=!1),e.onInput(e.id,n,a)}}),c.a.createElement("div",{className:"image-upload ".concat(e.center&&"center")},c.a.createElement("div",{className:"image-upload__preview"},d&&c.a.createElement("img",{src:d,alt:"Preview"}),!d&&c.a.createElement("p",null,"Please pick an image.")),c.a.createElement(i.a,{type:"button",onClick:function(){O.current.click()}},"Pick Image")),!b&&c.a.createElement("p",null,e.errorText))}},61:function(e,t,n){},62:function(e,t,n){},74:function(e,t,n){"use strict";n.r(t);var a=n(44),r=n.n(a),c=n(45),i=n(10),o=n(0),u=n.n(o),l=n(1),s=n(57),d=n(43),f=n(46),p=n(15),m=n(60),b=n(54),v=n(59),O=n(48),E=n(11);n(56),n(62);t.default=function(){var e=Object(o.useContext)(E.a),t=Object(O.a)(),n=t.isLoading,a=t.error,h=t.sendRequest,j=t.clearError,y=Object(v.a)({title:{value:"",isValid:!1},description:{value:"",isValid:!1},address:{value:"",isValid:!1},image:{value:null,isValid:!1}},!1),g=Object(i.a)(y,2),w=g[0],C=g[1],N=Object(l.g)(),T=function(){var t=Object(c.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.prev=1,(a=new FormData).append("title",w.inputs.title.value),a.append("description",w.inputs.description.value),a.append("address",w.inputs.address.value),a.append("image",w.inputs.image.value),t.next=9,h("https://yourplaces-mern.herokuapp.com/api/places","POST",a,{Authorization:"Bearer "+e.token});case 9:N.push("/"),t.next=14;break;case 12:t.prev=12,t.t0=t.catch(1);case 14:case"end":return t.stop()}}),t,null,[[1,12]])})));return function(e){return t.apply(this,arguments)}}();return u.a.createElement(u.a.Fragment,null,u.a.createElement(f.a,{error:a,onClear:j}),u.a.createElement("form",{className:"place-form",onSubmit:T},n&&u.a.createElement(p.a,{asOverlay:!0}),u.a.createElement(s.a,{id:"title",element:"input",type:"text",label:"Title",validators:[Object(b.c)()],errorText:"Please enter a valid title.",onInput:C}),u.a.createElement(s.a,{id:"description",element:"textarea",label:"Description",validators:[Object(b.b)(5)],errorText:"Please enter a valid description (at least 5 characters).",onInput:C}),u.a.createElement(s.a,{id:"address",element:"input",label:"Address",validators:[Object(b.c)()],errorText:"Please enter a valid address.",onInput:C}),u.a.createElement(m.a,{id:"image",onInput:C,errorText:"Please provide an image."}),u.a.createElement(d.a,{type:"submit",disabled:!w.isValid},"ADD PLACE")))}}}]);
//# sourceMappingURL=5.61f83a37.chunk.js.map