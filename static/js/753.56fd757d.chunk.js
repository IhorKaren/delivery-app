"use strict";(self.webpackChunkreact_template=self.webpackChunkreact_template||[]).push([[753],{1753:function(e,n,r){r.r(n),r.d(n,{default:function(){return Y}});var t,i,a,s,o,d,l,u,c,p=r(5861),m=r(9439),x=r(4687),h=r.n(x),f=r(2791),g=r(7993),v=r(9085),b=r(184),j=function(e){var n=e.onClick,r=(0,f.useState)(null),t=(0,m.Z)(r,2),i=t[0],a=t[1];return(0,b.jsx)(g.b6,{zoom:13,center:i||{lat:50.4501,lng:30.5234},mapContainerStyle:{width:"500px",height:"400px",marginTop:"35px",marginRight:"30px"},onClick:function(e){var r=e.latLng,t=r.lat,i=r.lng,s=t(),o=i();a({lat:s,lng:o}),n(e)},children:i&&(0,b.jsx)(g.Jx,{position:i})})},Z=r(3883),y=r(9434),k=r(2520),C=r(1243),S=function(){var e=(0,p.Z)(h().mark((function e(n){return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.Z.post("https://burgerbackend.herokuapp.com/orders",n);case 3:e.next=7;break;case 5:e.prev=5,e.t0=e.catch(0);case 7:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(n){return e.apply(this,arguments)}}(),_=S,w=r(168),A=r(6444),q=A.ZP.section(t||(t=(0,w.Z)(["\n  display: flex;\n  padding-top: 60px;\n"]))),P=r(1413),F=(r(5462),r(4695)),z=r(6727),E=r(1134),I=(0,A.F4)(i||(i=(0,w.Z)(["\n  from {\n    opacity: 0;\n    transform: translateX(-25px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n"]))),N=A.ZP.form(a||(a=(0,w.Z)(["\n  width: 300px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 24px;\n  margin-top: 10px;\n"]))),J=A.ZP.label(s||(s=(0,w.Z)(["\n  display: block;\n  margin-right: auto;\n"]))),L=A.ZP.input(o||(o=(0,w.Z)(["\n  display: flex;\n  width: 230px;\n  padding: 10px;\n  border-radius: 10px;\n  border: 1px solid #ccc;\n\n  &:focus {\n    outline: none;\n    border-color: #00aeef;\n  }\n"]))),T=A.ZP.div(d||(d=(0,w.Z)(["\n  position: absolute;\n  color: red;\n  animation: "," 500ms ease-in-out;\n"])),I),D=A.ZP.button(l||(l=(0,w.Z)(["\n  background-color: royalblue;\n  color: white;\n  padding: 8px 12px;\n  border-radius: 10px;\n  font-size: 16px;\n  border: none;\n  &:hover {\n    background-color: #2ba1e0;\n  }\n"]))),M=z.Ry().shape({name:z.Z_().required("Name is required!"),email:z.Z_().required("Email is required!"),phone:z.Z_().required("Number is required!").min(7,"Number must be at least 7 digits").max(16,"Number must not exceed 16 digits"),address:z.Z_().required("Address is required!")}),R=function(e){var n,r,t,i,a=e.formSubmit,s=e.initialAddress,o=e.children,d=(0,f.useState)(""),l=(0,m.Z)(d,2),u=l[0],c=l[1],p=(0,y.v9)(k.dv),x=(0,E.cI)({resolver:(0,F.X)(M)}),h=x.register,g=x.handleSubmit,v=x.reset,j=x.formState.errors,Z=x.setValue;(0,f.useEffect)((function(){c(s||"")}),[s]),(0,f.useEffect)((function(){Z("address",u)}),[u,Z]);return(0,b.jsx)(b.Fragment,{children:(0,b.jsxs)(N,{onSubmit:g((function(e,n){a({name:e.name,number:e.phone,email:e.email,address:e.address,order:p}),c(""),v()})),children:[(0,b.jsx)("div",{children:(0,b.jsxs)(J,{htmlFor:"name",children:["Name:",(0,b.jsx)(L,(0,P.Z)({type:"text"},h("name"))),j.name&&(0,b.jsx)(T,{children:null===(n=j.name)||void 0===n?void 0:n.message})]})}),(0,b.jsx)("div",{children:(0,b.jsxs)(J,{htmlFor:"email",children:["Email:",(0,b.jsx)(L,(0,P.Z)({type:"email"},h("email"))),j.email&&(0,b.jsx)(T,{children:null===(r=j.email)||void 0===r?void 0:r.message})]})}),(0,b.jsx)("div",{children:(0,b.jsxs)(J,{htmlFor:"phone",children:["Phone:",(0,b.jsx)(L,(0,P.Z)({type:"tel"},h("phone"))),j.phone&&(0,b.jsx)(T,{children:null===(t=j.phone)||void 0===t?void 0:t.message})]})}),(0,b.jsx)("div",{children:(0,b.jsxs)(J,{htmlFor:"address",children:["Address:",(0,b.jsx)(L,(0,P.Z)({type:"text",defaultValue:s,onChange:function(e){c(e.target.value)}},h("address"))),j.address&&(0,b.jsx)(T,{children:null===(i=j.address)||void 0===i?void 0:i.message})]})}),(0,b.jsx)(D,{type:"submit",children:"Submit"}),o]})})},V=r(422),B=function(e){var n=e.array,r=e.onChange,t=e.onClick;return(0,b.jsx)(b.Fragment,{children:n.map((function(e){return(0,b.jsxs)("li",{children:[(0,b.jsx)("img",{src:V,width:"300",alt:""}),(0,b.jsx)("h3",{children:e.name}),(0,b.jsxs)("p",{children:["Price: ",e.price*e.quantity]}),(0,b.jsx)("input",{type:"number",defaultValue:"1",onChange:function(n){return r(n,e._id)}}),(0,b.jsx)("button",{type:"button",onClick:function(){return t(e._id)},children:"Remove"})]},e._id)}))})},G=A.ZP.div(u||(u=(0,w.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-left: 50px;\n"]))),H=A.ZP.ul(c||(c=(0,w.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n  padding: 15px;\n  list-style: none;\n"]))),K=function(e){var n=e.array,r=e.onChange,t=e.onClick;return(0,b.jsx)(G,{children:(0,b.jsx)(H,{children:(0,b.jsx)(B,{array:n,onChange:r,onClick:t})})})},U=function(){var e=(0,y.v9)(k.dv);return(0,b.jsxs)("div",{children:["Total price: ",e.reduce((function(e,n){return e+n.quantity*n.price}),0)]})},X=r(966),Y=function(){var e=(0,f.useState)(""),n=(0,m.Z)(e,2),r=n[0],t=n[1],i=(0,y.v9)(k.dv),a=(0,y.I0)(),s=(0,g.Db)({googleMapsApiKey:"AIzaSyAZv5czqJS_HE97JG_DlvnmPj5BdMU_8S8"}).isLoaded,o=function(){var e=(0,p.Z)(h().mark((function e(n){return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,0!==n.order.length){e.next=4;break}return v.Am.error("To submit an order, you must add the item to your shopping cart."),e.abrupt("return");case 4:return e.next=6,_(n);case 6:v.Am.success("Thank you, your order has been processed."),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(n){return e.apply(this,arguments)}}();return(0,b.jsxs)(q,{children:[(0,b.jsxs)("div",{children:[s?(0,b.jsx)(j,{onClick:function(e){Z.Z.setApiKey("AIzaSyAZv5czqJS_HE97JG_DlvnmPj5BdMU_8S8");var n=e.latLng,r=n.lat,i=n.lng;Z.Z.fromLatLng(r(),i()).then((function(e){var n=e.results[0].formatted_address;t(n)})).catch((function(e){console.error(e)}))},address:r}):(0,b.jsx)(X.Z,{}),(0,b.jsx)(R,{formSubmit:o,initialAddress:r,children:(0,b.jsx)(U,{})})]}),(0,b.jsx)(K,{array:i,onChange:function(e,n){if(0===Number(e.target.value))return e.target.value="1";a((0,k.x)({id:n,value:e.target.value}))},onClick:function(e){a((0,k.cl)(e)),v.Am.info("Item removed from cart")},address:r}),(0,b.jsx)(v.Ix,{autoClose:2e3})]})}},422:function(e,n,r){e.exports=r.p+"static/media/default-image.1a0b38a162899fecfc21.webp"}}]);
//# sourceMappingURL=753.56fd757d.chunk.js.map