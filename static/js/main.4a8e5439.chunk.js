(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{105:function(e,t,c){},134:function(e,t,c){},135:function(e,t,c){},147:function(e,t,c){},148:function(e,t,c){},149:function(e,t,c){},150:function(e,t,c){},152:function(e,t,c){},153:function(e,t,c){},192:function(e,t,c){},193:function(e,t,c){},194:function(e,t,c){},195:function(e,t,c){},196:function(e,t,c){},197:function(e,t,c){},198:function(e,t,c){},199:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c.n(n),i=c(14),r=c.n(i),a=(c(134),c(9)),o=(c(135),c(109)),l=c.n(o),j=c(27),d="SEARCH_ADD",u="PRODUCTS_ALL",b="CHECKOUT_ADD",h="CHECKOUT_COUNT",O="CHECKOUT_REMOVE",m=c(31),p=c(111),x=c.n(p),f=c(258),v=c(2);var _=function(){var e=Object(n.useState)(!0),t=Object(a.a)(e,2),c=t[0],s=(t[1],Object(n.useRef)()),i=Object(j.c)();return Object(v.jsxs)("div",{className:"header",children:[Object(v.jsx)(m.b,{to:"/",className:"header__logo",children:Object(v.jsx)("div",{className:""})}),Object(v.jsxs)("form",{className:"header__searchBox",onSubmit:function(e){e.preventDefault();var t=s.current.value;i({type:d,payload:{value:t}})},children:[Object(v.jsx)("input",{type:"text",placeholder:"\u062c\u0633\u062a\u062c\u0648...",ref:s}),Object(v.jsx)(l.a,{})]}),Object(v.jsx)("div",{className:"header__loginRegister",children:Object(v.jsx)("ul",{children:c?Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(m.b,{to:"/account",children:Object(v.jsx)("li",{children:"\u062d\u0633\u0627\u0628 \u06a9\u0627\u0631\u0628\u0631\u06cc"})}),Object(v.jsx)(m.b,{to:"/checkout",children:Object(v.jsx)("li",{children:Object(v.jsx)(f.a,{children:Object(v.jsx)(x.a,{})})})})]}):Object(v.jsxs)(v.Fragment,{children:[" ",Object(v.jsx)(m.b,{to:"/account/login",children:Object(v.jsx)("li",{children:"\u0648\u0631\u0648\u062f"})}),Object(v.jsx)(m.b,{to:"/account/register",children:Object(v.jsx)("li",{children:"\u062b\u0628\u062a \u0646\u0627\u0645"})})," "]})})})]})},g=(c(147),c(16));c(148);var N=function(e){var t=e.image,c=e.url,n=void 0===c?"#":c;return Object(v.jsxs)("div",{className:"ads",children:[Object(v.jsx)("h1",{children:"ADS"}),Object(v.jsx)("a",{href:n,children:Object(v.jsx)("img",{src:t,alt:""})})]})};c(149);var y=function(e){var t=e.content,c=e.title,n=e.icons;return console.log(t),Object(v.jsxs)("div",{className:"widget",children:[Object(v.jsx)("h3",{className:"widget__name",children:c}),t,Object(v.jsx)("div",{className:"widget__footer",children:n})]})};c(150);var k=function(){var e=Object(v.jsxs)("div",{className:"widget__content",children:[Object(v.jsx)("p",{children:"\u0645\u0627 \u0631\u0627 \u062f\u0631 \u0634\u0628\u06a9\u0647 \u0647\u0627\u06cc \u0627\u062c\u062a\u0645\u0627\u0639\u06cc \u062f\u0646\u0628\u0627\u0644 \u06a9\u0646\u06cc\u062f"}),Object(v.jsxs)("div",{className:"widget__icons",children:[Object(v.jsx)("a",{href:"#",children:Object(v.jsx)("img",{className:"widget__icons--style",src:"https://www.freepnglogos.com/uploads/telegram-logo-2.png",alt:""})}),Object(v.jsx)("a",{href:"#",children:Object(v.jsx)("img",{className:"widget__icons--style",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png",alt:""})})]})]});return Object(v.jsxs)("div",{className:"sidebar",children:[Object(v.jsx)(y,{title:"\u0634\u0628\u06a9\u0647 \u0647\u0627\u06cc \u0627\u062c\u062a\u0645\u0627\u0639\u06cc",content:e}),Object(v.jsx)(y,{title:"\u0634\u0628\u06a9\u0647 \u0647\u0627\u06cc \u0627\u062c\u062a\u0645\u0627\u0639\u06cc",content:e})]})},C=(c(151),c(152),c(112)),w=c.n(C);var S=function(e){var t=e.id,c=e.name,s=e.image,i=e.description,r=e.price,o=Object(n.useState)(r),l=Object(a.a)(o,2),d=l[0],u=l[1];Object(n.useEffect)((function(){var e=(new Intl.NumberFormat).format(r);u(e)}),[r]);var h=Object(j.c)();return Object(v.jsxs)("div",{className:"product",children:[Object(v.jsxs)("div",{className:"product__content",children:[Object(v.jsx)("img",{src:s,alt:""}),Object(v.jsx)("p",{className:"product__name",children:c}),Object(v.jsx)("p",{className:"product__description",children:i})]}),Object(v.jsxs)("div",{className:"product__footer ",children:[Object(v.jsx)("p",{className:"text-success",children:d}),Object(v.jsx)(f.a,{color:"inherit",onClick:function(){return h(function(e,t,c,n){return{type:b,payload:{id:e,name:t,description:c,unitPrice:n}}}(t,c,i,r))},children:Object(v.jsx)(w.a,{})})]})]})},I=(c(153),c(259)),E=c(251),F=c(260),P=c(253),R=c(113),T=c.n(R),A=c(90),D=c.n(A),B=c(114),L=c(115),U=c.n(L).a.create({baseURL:"http://127.0.0.1:8001/api/products"});var q=Object(j.b)((function(e){return{product:e.product.items}}),(function(e){return{allProducts:function(){return e(function(){var e=Object(B.a)(D.a.mark((function e(t){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U.get("/").then((function(e){t({type:u,payload:e.data})}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}}}))((function(e){var t=e.allProducts,c=e.product,s=Object(n.useState)(),i=Object(a.a)(s,2),r=i[0],o=i[1],l=Object(n.useState)(!1),j=Object(a.a)(l,2),d=j[0],u=j[1],b=Object(n.useState)(1),h=Object(a.a)(b,2),O=h[0],m=h[1],p=Object(n.useState)(9),x=Object(a.a)(p,1)[0],f=Object(n.useState)("0"),_=Object(a.a)(f,2),g=_[0],N=_[1],y=function(e){N(e.currentTarget.attributes["data-value"].value)};Object(n.useEffect)((function(){t()}),[]),Object(n.useEffect)((function(){o(c),r&&u(!1)}),[c]);var k=O*x,C=k-x,w=null===r||void 0===r?void 0:r.slice(C,k);return Object(n.useEffect)((function(){console.log(w)})),Object(v.jsxs)("div",{className:"feed",children:[Object(v.jsxs)("div",{className:"feed__header",children:[Object(v.jsx)("h3",{children:"\u0645\u062d\u0635\u0648\u0644\u0627\u062a"}),Object(v.jsxs)("div",{className:"feed__category",children:[Object(v.jsx)(I.a,{id:"label",style:{fontFamily:"IRANSans"},children:"\u062f\u0633\u062a\u0647 \u0628\u0646\u062f\u06cc"}),Object(v.jsxs)(E.a,{labelId:"label",style:{fontFamily:"IRANSans"},id:"select",value:g,children:[Object(v.jsx)(F.a,{style:{fontFamily:"IRANSans"},value:"0",onClick:y,children:"\u062a\u0627\u0632\u0647 \u062a\u0631\u06cc\u0646 \u0647\u0627"}),Object(v.jsx)(F.a,{style:{fontFamily:"IRANSans"},value:"1",onClick:y,children:"Twenty"})]})]})]}),Object(v.jsx)("div",{className:"feed__content",children:d?Object(v.jsx)(T.a,{type:"Oval",color:"#212121",height:100,width:100}):Object(v.jsxs)("div",{className:"feed__products",children:[Object(v.jsx)("div",{className:"feed__productsList",children:null===w||void 0===w?void 0:w.map((function(e){return Object(v.jsx)(S,{id:e._id,name:e.name,image:e.image,price:e.price,description:e.description},e._id)}))}),Object(v.jsx)(P.a,{style:{direction:"ltr"},count:Math.ceil((null===r||void 0===r?void 0:r.length)/x),onChange:function(e,t){return m(t)}})]})})]})}));c(192);var H=function(){return Object(v.jsxs)("div",{className:"main",children:[Object(v.jsxs)("div",{className:"main__banner",children:[Object(v.jsx)("div",{className:"main__bannerImage"}),Object(v.jsxs)("div",{className:"main__ads",children:[Object(v.jsx)(N,{image:"https://picsum.photos/468/60"}),Object(v.jsx)(N,{image:"https://picsum.photos/468/60"}),Object(v.jsx)(N,{image:"https://picsum.photos/468/60"})]})]}),Object(v.jsxs)("div",{className:"main__content",children:[Object(v.jsx)(q,{}),Object(v.jsx)(k,{})]})]})};c(193);var K=function(){return Object(v.jsx)("div",{className:"footer",children:Object(v.jsx)("h1",{children:"footer"})})};c(194);var M=function(){return Object(v.jsx)("div",{className:"register",children:Object(v.jsx)("div",{className:"container",children:Object(v.jsxs)("form",{action:"",className:"register__form form-control",children:[Object(v.jsx)("input",{type:"text",placeholder:"\u0646\u0627\u0645 \u06a9\u0627\u0631\u0628\u0631\u06cc",className:"register__input form-control"}),Object(v.jsx)("input",{type:"password",placeholder:"\u0631\u0645\u0632 \u0639\u0628\u0648\u0631",className:"register__input form-control"}),Object(v.jsx)("input",{type:"password",placeholder:"\u062a\u06a9\u0631\u0627\u0631 \u0631\u0645\u0632 \u0639\u0628\u0648\u0631",className:"register__input form-control"}),Object(v.jsx)("input",{type:"email",className:"register__input form-control",placeholder:"\u0627\u06cc\u0645\u06cc\u0644"}),Object(v.jsxs)("div",{className:"register__formCheck",children:[Object(v.jsx)("input",{type:"checkbox",className:"form-check-input",id:"rememberCheckBox"}),Object(v.jsxs)("label",{htmlFor:"rememberCheckBox",children:[Object(v.jsx)("a",{href:"",children:"\u0642\u0648\u0627\u0646\u06cc\u0646"})," \u0631\u0627 \u0642\u0628\u0648\u0644 \u062f\u0627\u0631\u0645"]})]}),Object(v.jsx)("button",{className:"btn btn-primary",children:"\u062b\u0628\u062a \u0646\u0627\u0645"})]})})})};c(195);var J=function(){return Object(v.jsx)("div",{className:"login",children:Object(v.jsx)("div",{className:"container",children:Object(v.jsxs)("form",{action:"",className:"login__form form-control",children:[Object(v.jsx)("input",{type:"text",placeholder:"\u0646\u0627\u0645 \u06a9\u0627\u0631\u0628\u0631\u06cc",className:" login__input form-control"}),Object(v.jsx)("input",{type:"password",placeholder:"\u0631\u0645\u0632 \u0639\u0628\u0648\u0631",className:" login__input form-control"}),Object(v.jsxs)("div",{className:"login__formCheck",children:[Object(v.jsx)("input",{type:"checkbox",className:"form-check-input",id:"rememberCheckBox"}),Object(v.jsx)("label",{htmlFor:"rememberCheckBox",children:"\u0645\u0631\u0627 \u0628\u0647 \u062e\u0627\u0637\u0631 \u0628\u0633\u067e\u0627\u0631"})]}),Object(v.jsx)("button",{className:"btn btn-success",children:"\u0648\u0631\u0648\u062f"})]})})})};c(105),c(196);var V=function(e){var t=e.option,c=Object(n.useState)(),s=Object(a.a)(c,2),i=s[0],r=s[1];return 0===t?Object(v.jsx)("div",{className:"option",children:Object(v.jsxs)("div",{className:"option__addProduct form-control",children:[Object(v.jsx)("input",{type:"text",className:"form-control",placeholder:"\u0646\u0627\u0645 \u06a9\u0627\u0644\u0627",required:!0}),Object(v.jsx)("input",{type:"text",className:"form-control",placeholder:"\u062a\u0648\u0636\u06cc\u062d\u0627\u062a \u06a9\u0627\u0644\u0627",required:!0}),Object(v.jsx)("input",{type:"file",className:"form-control",placeholder:"",required:!0}),Object(v.jsx)("input",{type:"text",className:"form-control",placeholder:"\u0642\u06cc\u0645\u062a \u06a9\u0627\u0644\u0627",value:i,onChange:function(e){var t=e.target;if(isNaN(parseInt(t.value)))r();else{var c=t.value.replace(/\D/g,""),n=parseInt(c).toLocaleString();r(n)}},required:!0}),Object(v.jsx)("input",{type:"button",value:"\u0627\u0636\u0627\u0641\u0647 \u06a9\u0631\u062f\u0646 \u06a9\u0627\u0644\u0627",className:"btn btn-primary"})]})}):1===t?Object(v.jsx)("div",{className:"option",children:"1"}):2===t?Object(v.jsx)("div",{className:"option",children:"2"}):3===t?Object(v.jsx)("div",{className:"option",children:"3"}):void 0};var z=function(){var e=Object(n.useState)(0),t=Object(a.a)(e,2),c=t[0],i=t[1],r=Object(n.useState)(!0),o=Object(a.a)(r,2),l=o[0];return o[1],s.a.useEffect((function(){console.log(c)})),Object(v.jsxs)("div",{className:"account",children:[Object(v.jsx)("div",{className:"account__sideOptions",children:Object(v.jsxs)("ul",{children:[Object(v.jsx)(m.b,{to:"/",className:"active",children:Object(v.jsx)("li",{children:"\u062e\u0627\u0646\u0647"})}),l?Object(v.jsx)("li",{onClick:function(){return i(0)},children:"\u0627\u0636\u0627\u0641\u0647 \u06a9\u0631\u062f\u0646 \u06a9\u0627\u0644\u0627"}):null,l?Object(v.jsx)("li",{onClick:function(){return i(1)},children:"\u0645\u062f\u06cc\u0631\u06cc\u062a \u06a9\u0627\u0631\u0628\u0631\u0627\u0646"}):null,Object(v.jsx)(m.b,{to:"/checkout",children:Object(v.jsx)("li",{children:"\u0633\u0628\u062f \u062e\u0631\u06cc\u062f"})}),Object(v.jsx)("li",{onClick:function(){return i(3)},children:"\u0648\u06cc\u0631\u0627\u06cc\u0634 \u062d\u0633\u0627\u0628 \u06a9\u0627\u0631\u0628\u0631\u06cc"})]})}),Object(v.jsx)("div",{className:"account__content",children:Object(v.jsx)(V,{option:c})})]})},G=(c(197),c(252)),Q=c(117),W=c.n(Q),X=(c(198),c(116)),Y=c.n(X);var Z=function(e){var t=e.name,c=e.description,s=e.unitCost,i=e.id,r=Object(n.useRef)(),o=Object(n.useState)(s),l=Object(a.a)(o,2),d=l[0],u=l[1],b=Object(n.useState)(1),h=Object(a.a)(b,2),m=h[0],p=h[1],x=Object(j.c)();return Object(v.jsxs)("div",{className:"checkoutItem",children:[Object(v.jsxs)("div",{className:"checkoutItem__info",children:[Object(v.jsx)("h4",{children:t}),Object(v.jsx)("p",{children:c})]}),Object(v.jsxs)("div",{className:"checkoutItem__buyInfo",children:[Object(v.jsxs)("div",{className:"checkoutItem__unitCost",children:["\u0642\u06cc\u0645\u062a \u0648\u0627\u062d\u062f : ",s," "]}),Object(v.jsxs)("div",{className:"checkoutItem__totalCost",children:["\u0642\u06cc\u0645\u062a \u06a9\u0644 : ",d]}),Object(v.jsx)("input",{type:"number",min:"0",className:"form-control",ref:r,value:m,onChange:function(e){var t=r.current.value*s;p(e.target.value),u(t)}}),Object(v.jsx)(f.a,{color:"error",onClick:function(){return x(function(e){return{type:O,payload:{id:e}}}(i))},children:Object(v.jsx)(Y.a,{})})]})]})};var $=function(){var e=Object(n.useState)(0),t=Object(a.a)(e,2),c=t[0],s=(t[1],Object(n.useState)(!1)),i=Object(a.a)(s,2),r=i[0],o=i[1],l=Object(j.d)((function(e){return e.checkout}));return Object(j.c)(),Object(v.jsxs)("div",{className:"checkout",children:[Object(v.jsxs)("div",{className:"checkout__header",children:[Object(v.jsx)("h3",{children:"\u0633\u0628\u062f \u062e\u0631\u06cc\u062f"}),Object(v.jsxs)("div",{className:"checkout__wraper",children:[Object(v.jsx)(G.a,{endIcon:Object(v.jsx)(W.a,{}),onClick:function(){return o(!0)},loading:r,loadingPosition:"end",variant:"contained",children:"\u0646\u0647\u0627\u06cc\u06cc \u06a9\u0631\u062f\u0646 \u062e\u0631\u06cc\u062f"}),Object(v.jsxs)("p",{className:"text-success",children:["\u0645\u062c\u0645\u0648\u0639 \u062e\u0631\u06cc\u062f : ",c]})]})]}),Object(v.jsx)("div",{className:"container",children:Object(v.jsx)("div",{className:"checkout__products",children:null===l||void 0===l?void 0:l.map((function(e,t){return Object(v.jsx)(Z,{id:e.id,name:e.name,description:e.description,unitCost:e.unitPrice,count:e.count},t)}))})})]})};var ee=function(){return Object(v.jsx)("div",{className:"App",children:Object(v.jsxs)(m.a,{children:[Object(v.jsx)(_,{}),Object(v.jsxs)(g.c,{children:[Object(v.jsx)(g.a,{path:"/account/register",children:Object(v.jsx)(M,{})}),Object(v.jsx)(g.a,{path:"/account/login",children:Object(v.jsx)(J,{})}),Object(v.jsx)(g.a,{path:"/checkout",children:Object(v.jsx)($,{})}),Object(v.jsx)(g.a,{path:"/account",children:Object(v.jsx)(z,{})}),Object(v.jsxs)(g.a,{path:"/",children:[Object(v.jsx)(H,{}),Object(v.jsx)(K,{})]})]})]})})},te=c(58),ce=c(118),ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"test",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return t.payload.value;default:return e}},se=c(57),ie=c(254),re={items:[{_id:Object(ie.a)(),name:"product 1",description:"best product 1",image:"https://picsum.photos/301/300",price:25e3},{_id:Object(ie.a)(),name:"product 2",description:"best product 2",image:"https://picsum.photos/301/300",price:5e4},{_id:Object(ie.a)(),name:"product 1",description:"best product 1",image:"https://picsum.photos/303/300",price:25e3},{_id:Object(ie.a)(),name:"product 2",description:"best product 2",image:"https://picsum.photos/301/301",price:5e4},{_id:Object(ie.a)(),name:"product 1",description:"best product 1",image:"https://picsum.photos/306/300",price:253e3},{_id:Object(ie.a)(),name:"dad 2",description:"best product 2",image:"https://picsum.photos/301/300",price:52e4}]},ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1?arguments[1]:void 0,c=t.type,n=t.payload;switch(c){case u:return Object(se.a)(Object(se.a)({},e),{},{items:n});default:return e}},oe=[],le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0,c=t.type,n=t.payload;switch(c){case b:return e.push({id:n.id,name:n.name,description:n.description,unitPrice:n.unitPrice}),e;case h:return e.map((function(e){return e.id!==n.id?e:Object(se.a)(Object(se.a)({},e),{},{count:n.count})}));case O:return e.filter((function(e){return e.id!==n.id}));default:return e}},je=Object(te.b)({search:ne,product:ae,checkout:le}),de=Object(te.d)(je,Object(te.c)(Object(te.a)(ce.a),window.devToolsExtension?window.devToolsExtension():function(e){return e})),ue=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,262)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;c(e),n(e),s(e),i(e),r(e)}))};r.a.render(Object(v.jsx)(s.a.StrictMode,{children:Object(v.jsx)(j.a,{store:de,children:Object(v.jsx)(ee,{})})}),document.getElementById("root")),ue()}},[[199,1,2]]]);
//# sourceMappingURL=main.4a8e5439.chunk.js.map