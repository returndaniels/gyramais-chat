(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{108:function(e,t,n){},109:function(e,t,n){},135:function(e,t){},138:function(e,t,n){},139:function(e,t,n){"use strict";n.r(t);var s=n(0),c=n.n(s),a=n(25),r=n.n(a),o=(n(75),n(6)),i=n(27),u=n(4),l=n(3),j=n(70),d=n(1);var b=function(e){var t=e.component,n=e.socket,s=Object(j.a)(e,["component","socket"]),c=Object(o.c)((function(e){return e.auth})).user;return Object(d.jsx)(u.b,Object(l.a)(Object(l.a)({},s),{},{render:function(e){return c?Object(d.jsx)(t,{socket:n}):Object(d.jsx)(u.a,{to:{pathname:"/",state:{from:e.location}}})}}))},g=n(13),O="SIGNIN_STARTED",f="SIGNIN_SUCCEEDED",m="SIGNIN_FAILED",h="SIGNOUT_STARTED";function v(e,t){return function(n){n({type:O}),t.emit("join",e),t.on("userJoined",(function(e){n(function(e){return{type:f,payload:{user:e}}}(e)),localStorage.setItem("user",JSON.stringify(e))})),t.on("userJoinError",(function(e){n(function(e){return{type:m,payload:{error:e}}}(e))}))}}function p(e,t){return function(n){e.emit("userLoggedOut",t),localStorage.removeItem("user"),n({type:h})}}var x=function(e,t){var n=Object(o.b)(),c=Object(o.c)((function(e){return e.auth})),a=c.isLoading,r=c.error,i=Object(s.useState)(""),u=Object(g.a)(i,2),l=u[0],j=u[1],d=Object(s.useState)(null===r||void 0===r?void 0:r.detail),b=Object(g.a)(d,2),O=b[0],f=b[1],m=Object(s.useState)(!1),h=Object(g.a)(m,2),p=h[0],x=h[1];return Object(s.useEffect)((function(){p&&!1===a&&(O||n(v({name:l,islogged:!0},e)),x(!1))}),[O,l,p,a,e,n]),Object(s.useEffect)((function(){f(null===r||void 0===r?void 0:r.detail)}),[r]),{handleChange:function(e){j(e.target.value)},handleSubmit:function(e){e.preventDefault();var n=t(l);f(n),x(!0)},handleBlur:function(){var e=t(l);f(e)},name:l,formError:O,submitting:p||a}};function S(e){var t=null;return e||(t="Forne\xe7a um nome de usu\xe1rio"),t}var N=n.p+"static/media/loadingio.69540cde.svg",E=(n(82),function(e){var t=e.socket,n=e.className,s=x(t,S),c=s.handleChange,a=s.handleSubmit,r=s.handleBlur,o=s.name,i=s.formError,u=s.submitting;return Object(d.jsx)("div",{className:"joinContainer ".concat(n),children:Object(d.jsxs)("div",{className:"joinInnerContainer",children:[Object(d.jsx)("h1",{className:"heading",children:"Bem vindo ao nosso chat aberto!"}),Object(d.jsx)("h3",{className:"heading subtitle",children:"Escolha seu nome de usu\xe1rio antes de entrar."}),Object(d.jsxs)("form",{onSubmit:a,className:"joinForm",children:[Object(d.jsx)("input",{placeholder:"Digite um nome de usu\xe1rio",className:"joinInput",type:"text",value:o,onChange:c,onBlur:r,style:i?{"border-color":"red"}:{}}),Object(d.jsx)("div",{className:"error",children:i}),Object(d.jsxs)("div",{className:"submitContainer",children:[u&&Object(d.jsx)("img",{alt:"loaging...",src:N}),Object(d.jsx)("button",{type:"submit",className:"",disabled:u,style:{},children:"Acessar"})]})]})]})})}),y=n.p+"static/media/logo.32179390.svg",I=(n(83),function(e){var t=e.socket;return Object(o.c)((function(e){return e.auth})).user?Object(d.jsx)(u.a,{to:"/chat"}):Object(d.jsxs)("div",{className:"signInPage",children:[Object(d.jsx)("div",{className:"header",children:Object(d.jsx)("img",{alt:"logo",src:y})}),Object(d.jsx)(E,{className:"jForm",socket:t})]})}),L=(n(84),function(e){var t=e.handleLogOut;return Object(d.jsxs)("div",{className:"chatHeader",children:[Object(d.jsx)("img",{alt:y,src:y}),Object(d.jsx)("button",{onClick:function(){window.confirm("Deseja sair?")&&t()}})]})}),C=(n(85),function(e){var t=e.sendMessage,n=e.className,c=Object(s.useState)(""),a=Object(g.a)(c,2),r=a[0],o=a[1];return Object(d.jsxs)("footer",{className:"footer ".concat(n),children:[Object(d.jsx)("textarea",{rows:"2",cols:"50",placeholder:"Digite uma mensagem...",value:r,onChange:function(e){e.preventDefault(),o(e.target.value)},style:{resize:"none"}}),Object(d.jsx)("button",{onClick:function(){t(r),o("")},children:"Enviar"})]})}),k=(n(86),function(e){var t=e.message,n=e.highlighted;return Object(d.jsxs)("div",{className:n?"message highlighted":"message",children:[Object(d.jsx)("strong",{children:t.user}),Object(d.jsx)("p",{children:t.text}),t.date&&Object(d.jsx)("div",{className:"date",children:t.date})]})}),D=n(67),_=n.n(D),M=(n(108),function(e){var t=e.messages,n=e.user,s=e.className,c=function(e){if(!e)return e;var t="";return t+="".concat(e.slice(11,16)," - "),t+="".concat(e.slice(8,10),"/"),t+="".concat(e.slice(5,7),"/"),t+="".concat(e.slice(0,4))};return Object(d.jsx)(_.a,{className:"MessageStory ".concat(s),children:t.map((function(e,t){return Object(d.jsx)(k,{message:Object(l.a)(Object(l.a)({},e),{},{date:c(e.date)}),highlighted:e.user===n.name},t)}))})}),T=n(29),w="SAVE_MESSAGES",A="SET_MESSAGE";function F(e){return function(t){t({type:A,payload:{message:e}})}}var J=function(e){var t=Object(o.b)(),n=Object(o.c)((function(e){return e.messages})).messages,c=Object(o.c)((function(e){return e.auth})).user,a=Object(s.useState)([]),r=Object(g.a)(a,2),i=r[0],u=r[1];return Object(s.useEffect)((function(){e.emit("previusMessagesRequest"),e.emit("userLoggedIn",c)}),[e,c]),Object(s.useEffect)((function(){e.on("previusMessagesResponse",(function(e){t(function(e){return function(t){t({type:w,payload:{messages:e}})}}(e))})),e.on("message",(function(e){t(F(e))})),e.on("userJoinedEvent",(function(e){t(F(e))}))}),[t,e]),{user:c,messages:n,errors:i,sendMessage:function(t){e.emit("sendMessage",{user:c,message:t},(function(e){u([].concat(Object(T.a)(i),[e]))}))},handleLogOut:function(){t(p(e,c))}}},B=(n(109),function(e){var t=e.socket,n=J(t),s=n.user,c=n.messages,a=n.sendMessage,r=n.handleLogOut;return Object(d.jsxs)("div",{className:"Chat",children:[Object(d.jsx)(L,{handleLogOut:r}),Object(d.jsx)(M,{user:s,messages:c}),Object(d.jsx)(C,{className:"footerChat",sendMessage:a})]})}),G=function(e){var t=e.socket;return Object(d.jsx)(i.a,{children:Object(d.jsxs)(u.d,{children:[Object(d.jsx)(u.b,{exact:!0,path:"/",render:function(){return Object(d.jsx)(I,{socket:t})}}),Object(d.jsx)(b,{path:"/chat",component:B,socket:t})]})})},R=n(68),P=n.n(R),U=(n(138),P.a.connect("https://gyramais-chat.herokuapp.com",{reconnection:!0}));var V=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(G,{socket:U})})},X=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,141)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),s(e),c(e),a(e),r(e)}))},q=n(12),z=n(69),H=function(e){return function(t){return function(n){console.group(n.type),console.info("dispatching",n);var s=t(n);return console.log("next state",e.getState()),console.groupEnd(),s}}},K={isLoading:!1,user:localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")):null,error:null};var Q={isLoading:!1,messages:[],error:null};var W=Object(q.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(l.a)(Object(l.a)({},e),{},{isLoading:!0,error:null});case f:return Object(l.a)(Object(l.a)({},e),{},{isLoading:!1,user:t.payload.user,error:null});case m:return Object(l.a)(Object(l.a)({},e),{},{isLoading:!1,error:t.payload.error});case h:return Object(l.a)(Object(l.a)({},e),{},{user:null});default:return e}},messages:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return Object(l.a)(Object(l.a)({},e),{},{isLoading:!1,messages:t.payload.messages,error:null});case A:return Object(l.a)(Object(l.a)({},e),{},{isLoading:!1,messages:[].concat(Object(T.a)(e.messages),[t.payload.message]),error:null});default:return e}}}),Y=function(e,t){return t.type===h&&(e=void 0),W(e,t)},Z=function(){var e=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||q.d,t=[z.a,H],n=q.a.apply(void 0,t);return Object(l.a)({},Object(q.e)(Y,{},e(n)))}();r.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(o.a,{store:Z,children:Object(d.jsx)(V,{})})}),document.getElementById("root")),X()},75:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){},86:function(e,t,n){}},[[139,1,2]]]);
//# sourceMappingURL=main.17e8cc5e.chunk.js.map