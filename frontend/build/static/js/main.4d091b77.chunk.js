(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{103:function(e,t,n){},114:function(e,t,n){},115:function(e,t,n){},116:function(e,t,n){},117:function(e,t,n){},118:function(e,t,n){},140:function(e,t,n){},141:function(e,t,n){},142:function(e,t,n){},151:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(45),r=n.n(s),o=(n(103),n(21)),i=n(13),u=n(48),l=n(12),j=n(11),d=n(98),b=n(4);var O=function(e){var t=e.component,n=Object(d.a)(e,["component"]),a=Object(o.c)((function(e){return e.auth})).user;return Object(b.jsx)(l.b,Object(j.a)(Object(j.a)({},n),{},{render:function(e){return a?Object(b.jsx)(t,{}):Object(b.jsx)(l.a,{to:{pathname:"/",state:{from:e.location}}})}}))},g=n(25),m="SIGNIN_STARTED",h="SIGNIN_SUCCEEDED",f="SIGNIN_FAILED",v="SIGNOUT_STARTED";function p(e){return{type:f,payload:{error:e}}}function x(e){return function(t){t({type:m});try{localStorage.setItem("user",JSON.stringify(e)),t(function(e){return{type:h,payload:{user:e}}}(e))}catch(n){t(p())}}}function S(){return function(e){localStorage.removeItem("user"),e({type:v})}}var N,y,E,_,C,I=n(36),L=Object(i.gql)(N||(N=Object(I.a)(["\n\tmutation($name: String!) {\n\t\tjoin(name: $name)\n\t}\n"]))),M=Object(i.gql)(y||(y=Object(I.a)(["\n\tmutation($_id: String!, $name: String!) {\n\t\tlogout(_id: $_id, name: $name)\n\t}\n"]))),w=Object(i.gql)(E||(E=Object(I.a)(["\n\tmutation($user: String!, $text: String!) {\n\t\tpostMessage(user: $user, text: $text)\n\t}\n"]))),D=(Object(i.gql)(_||(_=Object(I.a)(["\n\tquery {\n\t\tmessages {\n\t\t\t_id\n\t\t\tuser\n\t\t\ttext\n\t\t\tdate\n\t\t}\n\t}\n"]))),Object(i.gql)(C||(C=Object(I.a)(["\n\tsubscription {\n\t\tmessages {\n\t\t\tuser\n\t\t\ttext\n\t\t\tdate\n\t\t}\n\t}\n"]))));var A=function(e){var t=Object(o.b)(),n=Object(o.c)((function(e){return e.auth})).isLoading,c=Object(a.useState)(""),s=Object(g.a)(c,2),r=s[0],u=s[1],l=Object(a.useState)(null),j=Object(g.a)(l,2),d=j[0],b=j[1],O=Object(a.useState)(!1),m=Object(g.a)(O,2),h=m[0],f=m[1],v=Object(i.useMutation)(L),S=Object(g.a)(v,1)[0];return Object(a.useEffect)((function(){h&&!1===n&&(d||S({variables:{name:r}}).then((function(e){var n=e.data;t(x({_id:n.join,name:r}))})).catch((function(e){t(p(e))})),f(!1))}),[d,r,h,n,t,S]),{handleChange:function(e){u(e.target.value)},handleSubmit:function(t){t.preventDefault();var n=e(r);b(n),f(!0)},handleBlur:function(){var t=e(r);b(t)},name:r,formError:d,submitting:h||n}};function T(e){var t=null;return e||(t="Forne\xe7a um nome de usu\xe1rio"),t}var $=n.p+"static/media/loadingio.69540cde.svg",F=(n(114),function(e){var t=e.className,n=A(T),a=n.handleChange,c=n.handleSubmit,s=n.handleBlur,r=n.name,o=n.formError,i=n.submitting;return Object(b.jsx)("div",{className:"joinContainer ".concat(t),children:Object(b.jsxs)("div",{className:"joinInnerContainer",children:[Object(b.jsx)("h1",{className:"heading",children:"Bem vindo ao nosso chat aberto!"}),Object(b.jsx)("h3",{className:"heading subtitle",children:"Escolha seu nome de usu\xe1rio antes de entrar."}),Object(b.jsxs)("form",{onSubmit:c,className:"joinForm",children:[Object(b.jsx)("input",{placeholder:"Digite um nome de usu\xe1rio",className:"joinInput",type:"text",value:r,onChange:a,onBlur:s,style:o?{"border-color":"red"}:{}}),Object(b.jsx)("div",{className:"error",children:o}),Object(b.jsxs)("div",{className:"submitContainer",children:[i&&Object(b.jsx)("img",{alt:"loaging...",src:$}),Object(b.jsx)("button",{type:"submit",className:"",disabled:i,style:{},children:"Acessar"})]})]})]})})}),k=n.p+"static/media/logo.32179390.svg",q=(n(115),function(){return Object(o.c)((function(e){return e.auth})).user?Object(b.jsx)(l.a,{to:"/chat"}):Object(b.jsxs)("div",{className:"signInPage",children:[Object(b.jsx)("div",{className:"header",children:Object(b.jsx)("img",{alt:"logo",src:k})}),Object(b.jsx)(F,{className:"jForm"})]})}),B=(n(116),function(e){var t=e.handleLogOut;return Object(b.jsxs)("div",{className:"chatHeader",children:[Object(b.jsx)("img",{alt:k,src:k}),Object(b.jsx)("button",{onClick:function(){window.confirm("Deseja sair?")&&t()}})]})}),G=(n(117),function(e){var t=e.sendMessage,n=e.className,c=Object(a.useState)(""),s=Object(g.a)(c,2),r=s[0],o=s[1];return Object(b.jsxs)("footer",{className:"footer ".concat(n),children:[Object(b.jsx)("textarea",{rows:"2",cols:"50",placeholder:"Digite uma mensagem...",value:r,onChange:function(e){e.preventDefault(),o(e.target.value)},style:{resize:"none"}}),Object(b.jsx)("button",{onClick:function(){t(r),o("")},children:"Enviar"})]})}),P=(n(118),function(e){var t=e.message,n=e.highlighted;return Object(b.jsxs)("div",{className:n?"message highlighted":"message",children:[Object(b.jsx)("strong",{children:t.user}),Object(b.jsx)("p",{children:t.text}),t.date&&Object(b.jsx)("div",{className:"date",children:t.date})]})}),J=n(94),R=n.n(J),U=(n(140),function(e){var t=e.messages,n=e.user,a=e.className,c=function(e){if(!e)return e;var t="";return t+="".concat(e.slice(11,16)," - "),t+="".concat(e.slice(8,10),"/"),t+="".concat(e.slice(5,7),"/"),t+="".concat(e.slice(0,4))};return Object(b.jsx)(R.a,{className:"MessageStory ".concat(a),children:t.map((function(e,t){return Object(b.jsx)(P,{message:Object(j.a)(Object(j.a)({},e),{},{date:c(e.date)}),highlighted:e.user===n.name},t)}))})}),V="SAVE_MESSAGES",X="SET_MESSAGE";var z=function(){var e=Object(o.b)(),t=Object(i.useMutation)(w),n=Object(g.a)(t,1)[0],c=Object(i.useMutation)(M),s=Object(g.a)(c,1)[0],r=Object(i.useSubscription)(D).data,u=Object(o.c)((function(e){return e.messages})).messages,l=Object(o.c)((function(e){return e.auth})).user;return Object(a.useEffect)((function(){r&&e(function(e){return function(t){t({type:V,payload:{messages:e}})}}(r.messages))}),[r,e]),{user:l,messages:u,sendMessage:function(e){n({variables:{user:l.name,text:e}})},handleLogOut:function(){s({variables:{_id:l._id,name:l.name}}),e(S())}}},H=(n(141),function(){var e=z(),t=e.user,n=e.messages,a=e.sendMessage,c=e.handleLogOut;return Object(b.jsxs)("div",{className:"Chat",children:[Object(b.jsx)(B,{handleLogOut:c}),Object(b.jsx)(U,{user:t,messages:n}),Object(b.jsx)(G,{className:"footerChat",sendMessage:a})]})}),K=function(){return Object(b.jsx)(u.a,{children:Object(b.jsxs)(l.d,{children:[Object(b.jsx)(l.b,{exact:!0,path:"/",render:function(){return Object(b.jsx)(q,{})}}),Object(b.jsx)(O,{path:"/chat",component:H})]})})};n(142);var Q=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(K,{})})},W=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,153)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))},Y=n(33),Z=n(95),ee=function(e){return function(t){return function(n){console.group(n.type),console.info("dispatching",n);var a=t(n);return console.log("next state",e.getState()),console.groupEnd(),a}}},te={isLoading:!1,user:localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")):null,error:null};var ne=n(97),ae={isLoading:!1,messages:[],error:null};var ce=Object(Y.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return Object(j.a)(Object(j.a)({},e),{},{isLoading:!0,error:null});case h:return Object(j.a)(Object(j.a)({},e),{},{isLoading:!1,user:t.payload.user,error:null});case f:return Object(j.a)(Object(j.a)({},e),{},{isLoading:!1,error:t.payload.error});case v:return Object(j.a)(Object(j.a)({},e),{},{user:null});default:return e}},messages:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case V:return Object(j.a)(Object(j.a)({},e),{},{isLoading:!1,messages:t.payload.messages,error:null});case X:return Object(j.a)(Object(j.a)({},e),{},{isLoading:!1,messages:[].concat(Object(ne.a)(e.messages),[t.payload.message]),error:null});default:return e}}}),se=function(e,t){return t.type===v&&(e=void 0),ce(e,t)},re=function(){var e=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Y.d,t=[Z.a,ee],n=Y.a.apply(void 0,t);return Object(j.a)({},Object(Y.e)(se,{},e(n)))},oe=n(96),ie=re(),ue=function(){var e=new oe.a({uri:"ws://gyramais-chat.herokuapp.com/",options:{reconnect:!0}});return new i.ApolloClient({link:e,uri:"https://gyramais-chat.herokuapp.com/",cache:new i.InMemoryCache})}();r.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(i.ApolloProvider,{client:ue,children:Object(b.jsx)(o.a,{store:ie,children:Object(b.jsx)(Q,{})})})}),document.getElementById("root")),W()}},[[151,1,2]]]);
//# sourceMappingURL=main.4d091b77.chunk.js.map