(this["webpackJsonpsnacks-app"]=this["webpackJsonpsnacks-app"]||[]).push([[0],{35:function(e,t,s){},36:function(e,t,s){},62:function(e,t,s){"use strict";s.r(t);var n=s(0),a=s.n(n),c=s(11),r=s.n(c),i=(s(35),s(7)),o=s.p+"static/media/logo_snacks_complete.7395c8f9.png",l=(s(36),s(65)),u=s(66),p=s(64),d=s(1),j=function(e){var t=e.setCE,s=Object(n.useState)(!0),a=Object(i.a)(s,2),c=a[0];a[1];return Object(n.useEffect)((function(){return function(){}}),[]),c?Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(l.a,{bg:"light",expand:"lg",children:[Object(d.jsx)(l.a.Brand,{href:"#home",className:"logo pl-4",style:{paddingBottom:"10px"},children:Object(d.jsx)("img",{src:o,width:"180px"})}),Object(d.jsx)(l.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(d.jsxs)(l.a.Collapse,{id:"basic-navbar-nav",children:[Object(d.jsx)(u.a,{className:"mr-auto"}),Object(d.jsx)(p.a,{variant:"outline-dark",className:"mr-4",children:"Acerca de"}),Object(d.jsx)(p.a,{className:"mr-4 btn-snacks",onClick:function(){t()},children:"Contact Expert"})]})]})}):null},b=s(18),m=s(29),h=function(e){var t=e.title;return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("h1",{className:"snacks-title pb-5",children:t})})},x=function(e){var t=e.url,s=e.number,n=e.subtitle,a=e.description;return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"col snacks-description  mx-2 p-0",style:{position:"\xb7relative"},children:[Object(d.jsx)("img",{src:t,style:{height:"100px",width:"100%",objectFit:"cover"}}),Object(d.jsx)("div",{className:"snacks-number",children:Object(d.jsx)("span",{children:s})}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{className:"pt-4 font-weight-bold",children:n}),Object(d.jsx)("p",{className:"emp pt-3",dangerouslySetInnerHTML:{__html:a}})]})]})})},O=s(30),g=s.n(O),f=function(e){Object(m.a)(e);var t=Object(n.useState)(""),s=Object(i.a)(t,2),a=(s[0],s[1],Object(n.useState)(0)),c=Object(i.a)(a,2),r=c[0],o=c[1];Object(n.useEffect)((function(){var e=Math.floor(2*Math.random())+0;o(e),console.log(e)}),[]),Object(n.useEffect)((function(){g.a.get("https://api.pexels.com/v1/search?query=marketing&per_page=3",{headers:{Authorization:"563492ad6f91700001000001d5e3e2f0b0934fe9933ab934b093d0da"}}).then((function(e){return e.data.photos.map((function(e,t){console.log(e),w[t].f(Object(b.a)(Object(b.a)({},w[t].v),{},{url:e.src.medium}))}))}))}),[]);var l=Object(n.useState)({subtitle:"Buyer Persona",description:"Define <span>correctamente qui\xe9n</span> es tu persona...",url:""}),u=Object(i.a)(l,2),p=u[0],j=u[1],O=Object(n.useState)({subtitle:"Construye tu presencia ",description:"Con la revoluci\xf3n de los <span>Micro-Momentos</span>, tu empresa necesita construir una fuerte presencia virtual para mantenerse activa en el mercado.",url:""}),f=Object(i.a)(O,2),v=f[0],y=f[1],k=Object(n.useState)({subtitle:"Invierte en las redes sociales",description:"Hoy en d\xeda es <span>dif\xedcil</span> encontrar a alguien que no forme parte de alguna red social. ",url:""}),N=Object(i.a)(k,2),C=N[0],w=[{f:j,v:p},{f:y,v:v},{f:N[1],v:C}],S=[p,v,C],F=[{subtitle:"Buyer ",description:"Define <span>correasdfui\xe9n</span> es tu persona...",url:"https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"},{subtitle:"Construye presencia online",description:"Con la revoluci\xf3n de los <span>Micro-Momentos</span>, tu empresa necesita construir una fuerte presencia virtual para mantenerse activa en el mercado.",url:"https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"},{subtitle:"Invierte en lasasdfasdf redes sociales",description:"Hoy en d\xeda asdfcontrar a alguien que no forme parte de alguna red social. ",url:"https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"}];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(h,{title:"Consejos sobre Marketing Digital"}),Object(d.jsx)("div",{className:"container-fluid",children:Object(d.jsx)("div",{className:"row",children:0==r?S.map((function(e,t){return Object(d.jsx)(x,{url:e.url,number:t+1,subtitle:e.subtitle,description:e.description})})):F.map((function(e,t){return Object(d.jsx)(x,{url:e.url,number:t+1,subtitle:e.subtitle,description:e.description})}))})})]})},v=function(){return Object(d.jsxs)("div",{className:"card text-center",style:{backgroundColor:"#f7f7f7",width:"300px",padding:"1.5rem",margin:"1rem",position:"absolute",top:"0",right:"0"},children:[Object(d.jsx)("img",{src:"https://www.w3schools.com/w3images/team2.jpg",style:{objectFit:"cover",borderRadius:"50%",height:"100px",width:"100px",margin:"0 auto",marginBottom:"10px"}}),Object(d.jsx)("h2",{className:"pb-0 mb-0",children:"Jonth Doe"}),Object(d.jsx)("p",{style:{color:"gray",fontSize:"1.2rem"},children:"CEO of Snacks"}),Object(d.jsx)("p",{style:{fontSize:"1rem"},children:"Harvard University"}),Object(d.jsx)("div",{}),Object(d.jsx)(p.a,{className:"btn-snacks-blue",children:"Contact"})]})};var y=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),s=t[0],a=t[1];return Object(d.jsxs)("div",{className:"App",style:{minHeight:"90vh!important"},children:[Object(d.jsx)(j,{setCE:function(){return a(!s)}}),Object(d.jsxs)("header",{className:"App-header px-5",style:{position:"relative"},children:[Object(d.jsx)(f,{}),s?Object(d.jsx)(v,{}):null]}),Object(d.jsx)("div",{className:"text-center text-white py-2",style:{backgroundColor:"rgb(23 26 29)"},children:Object(d.jsxs)("p",{className:"mb-0 text-dark",style:{display:"inline"},children:["Snacks - All rights reserved  ",Object(d.jsx)("span",{className:"text-light",style:{display:"inline"},children:" | Developed by Saturno"})]})})]})},k=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,67)).then((function(t){var s=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,r=t.getTTFB;s(e),n(e),a(e),c(e),r(e)}))};r.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(y,{})}),document.getElementById("root")),k()}},[[62,1,2]]]);
//# sourceMappingURL=main.14ce9402.chunk.js.map