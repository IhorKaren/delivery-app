"use strict";(self.webpackChunkreact_template=self.webpackChunkreact_template||[]).push([[610],{6610:function(e,n,r){r.r(n),r.d(n,{default:function(){return xe}});var t,a,i,o,s,l,d,c,u,p,x,m,h,f=r(5861),Z=r(9439),b=r(4687),v=r.n(b),g=r(2791),j=r(7993),y=r(5985),k=r(184),w=function(e){var n=e.onClick,r=(0,g.useState)(null),t=(0,Z.Z)(r,2),a=t[0],i=t[1];return(0,k.jsx)(j.b6,{zoom:13,center:a||{lat:50.4501,lng:30.5234},mapContainerStyle:{width:"100%",height:"400px",borderRadius:"12px 12px 0px 0px"},onClick:function(e){var r=e.latLng,t=r.lat,a=r.lng,o=t(),s=a();i({lat:o,lng:s}),n(e)},children:a&&(0,k.jsx)(j.Jx,{position:a})})},C=r(3883),_=r(9434),P=r(2520),S=r(1243),A=function(){var e=(0,f.Z)(v().mark((function e(n){return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.Z.post("https://burgerbackend.herokuapp.com/orders",n);case 3:e.next=7;break;case 5:e.prev=5,e.t0=e.catch(0);case 7:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(n){return e.apply(this,arguments)}}(),q=A,B=r(1413),I=r(5987),T=(r(5462),r(4695)),z=r(6727),E=r(1134),N=r(168),J=r(7691),L=J.ZP.div(t||(t=(0,N.Z)(["\n  position: absolute;\n  bottom: 15px;\n  left: 10px;\n"]))),R=function(){var e=(0,_.v9)(P.dv);return(0,k.jsxs)(L,{children:["Total price: ",e.reduce((function(e,n){return e+n.quantity*n.price}),0)]})},D=r(5590),F=r(3736),M=J.ZP.form(a||(a=(0,N.Z)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  gap: 70px;\n  padding: 10px;\n"]))),V=J.ZP.div(i||(i=(0,N.Z)(["\n  position: relative;\n"]))),G=(0,J.ZP)(D.Z)(o||(o=(0,N.Z)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n"]))),H=(0,J.ZP)(F.Z)(s||(s=(0,N.Z)(["\n  margin-left: auto;\n  padding: 8px 12px;\n  border-radius: 10px;\n  font-size: 16px;\n\n  color: black;\n  border: 1px solid black;\n"]))),K=r(2930),U=["ref"],X=z.Ry().shape({name:z.Z_().required("Name is required!"),email:z.Z_().required("Email is required!"),phone:z.Z_().required("Number is required!").min(7,"Number must be at least 7 digits").max(16,"Number must not exceed 16 digits"),address:z.Z_().required("Address is required!")}),O=function(e){var n,r,t,a,i=e.formSubmit,o=e.initialAddress,s=e.children,l=(0,g.useState)(""),d=(0,Z.Z)(l,2),c=d[0],u=d[1],p=(0,_.v9)(P.dv),x=(0,E.cI)({resolver:(0,T.X)(X)}),m=x.register,h=x.handleSubmit,f=x.reset,b=x.formState.errors,v=x.setValue,j=x.control,y=(0,E.bc)({name:"address",control:j,defaultValue:o||""}).field,w=y.ref,C=(0,I.Z)(y,U);(0,g.useEffect)((function(){u(o||"")}),[o]),(0,g.useEffect)((function(){v("address",c)}),[c,v]);return(0,k.jsx)(k.Fragment,{children:(0,k.jsxs)(M,{onSubmit:h((function(e,n){i({name:e.name,number:e.phone,email:e.email,address:e.address,order:p}),u(""),f()})),children:[(0,k.jsx)(V,{children:(0,k.jsx)(G,(0,B.Z)((0,B.Z)({variant:"standard",label:"Name",type:"text"},m("name")),{},{error:Boolean(b.name),helperText:null===(n=b.name)||void 0===n?void 0:n.message}))}),(0,k.jsx)(V,{children:(0,k.jsx)(G,(0,B.Z)((0,B.Z)({variant:"standard",label:"Email",type:"email"},m("email")),{},{error:Boolean(b.email),helperText:null===(r=b.email)||void 0===r?void 0:r.message}))}),(0,k.jsx)(V,{children:(0,k.jsx)(G,(0,B.Z)((0,B.Z)({variant:"standard",label:"Phone",type:"tel"},m("phone")),{},{error:Boolean(b.phone),helperText:null===(t=b.phone)||void 0===t?void 0:t.message}))}),(0,k.jsx)(V,{children:(0,k.jsx)(G,(0,B.Z)((0,B.Z)((0,B.Z)({variant:"standard",label:"Address",type:"text"},C),{},{inputRef:w},(0,K.Z)()),{},{error:Boolean(b.address),helperText:null===(a=b.address)||void 0===a?void 0:a.message}))}),(0,k.jsx)(H,{variant:"outlined",type:"submit",children:"Submit"}),s,(0,k.jsx)(R,{})]})})},Q=r(2363),W=r(9504),Y=r(7247),$=r(890),ee=r(7621),ne=r(2169),re=(0,J.F4)(l||(l=(0,N.Z)(["\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n"]))),te=(0,J.ZP)(ee.Z)(d||(d=(0,N.Z)(["\n  position: relative;\n  display: flex;\n  height: 240px;\n  padding: 0;\n\n  flex-basis: calc((100% - 20px) / 2);\n\n  animation: "," 0.5s ease-in;\n"])),re),ae=(0,J.ZP)(ne.Z)(c||(c=(0,N.Z)(["\n  width: 220px;\n  padding-bottom: 40px;\n"]))),ie=(0,J.ZP)(F.Z)(u||(u=(0,N.Z)(["\n  position: absolute;\n  bottom: 10px;\n  right: 10px;\n\n  color: black;\n  border: 1px solid black;\n"]))),oe=function(e){var n=e.array,r=e.onChange,t=e.onClick;return(0,k.jsx)(k.Fragment,{children:n.map((function(e){return(0,k.jsxs)(te,{component:"li",children:[(0,k.jsx)(ae,{component:"img",src:"https://s7d1.scene7.com/is/image/mcdonalds/".concat(e.img_path),alt:e.name}),(0,k.jsxs)(W.Z,{children:[(0,k.jsx)($.Z,{gutterBottom:!0,variant:"h5",component:"h3",children:e.name}),(0,k.jsxs)($.Z,{component:"p",sx:{marginBottom:"10px"},children:["Price: ",e.price*e.quantity]}),(0,k.jsx)(D.Z,{id:"standard-number",label:"Count",type:"number",defaultValue:"1",onChange:function(n){return r(n,e._id)},variant:"standard",sx:{width:"50px"}})]}),(0,k.jsx)(Q.Z,{children:(0,k.jsx)(ie,{startIcon:(0,k.jsx)(Y.Z,{}),type:"button",onClick:function(){return t(e._id)},children:"Remove"})})]},e._id)}))})},se=J.ZP.div(p||(p=(0,N.Z)(["\n  height: 100vh;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  overflow: auto;\n\n  margin-left: 15px;\n  padding-right: 15px;\n\n  border: 2px solid black;\n  border-radius: 10px;\n\n  ::-webkit-scrollbar {\n    width: 8px;\n  }\n\n  ::-webkit-scrollbar-thumb {\n    background-color: #4e4e4e;\n    border-radius: 25px;\n  }\n"]))),le=J.ZP.ul(x||(x=(0,N.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n  list-style: none;\n"]))),de=function(e){var n=e.array,r=e.onChange,t=e.onClick;return(0,k.jsx)(se,{children:(0,k.jsx)(le,{children:(0,k.jsx)(oe,{array:n,onChange:r,onClick:t})})})},ce=r(966),ue=J.ZP.section(m||(m=(0,N.Z)(["\n  display: flex;\n"]))),pe=J.ZP.div(h||(h=(0,N.Z)(["\n  display: flex;\n  min-width: 500px;\n  height: 100vh;\n  position: relative;\n  flex-direction: column;\n  border: 2px solid black;\n  border-radius: 10px;\n"]))),xe=function(){var e=(0,g.useState)(""),n=(0,Z.Z)(e,2),r=n[0],t=n[1],a=(0,_.v9)(P.dv),i=(0,_.I0)(),o=(0,j.Db)({googleMapsApiKey:"AIzaSyAZv5czqJS_HE97JG_DlvnmPj5BdMU_8S8"}).isLoaded,s=function(){var e=(0,f.Z)(v().mark((function e(n){return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,0!==n.order.length){e.next=4;break}return y.Am.error("To submit an order, you must add the item to your shopping cart."),e.abrupt("return");case 4:return e.next=6,q(n);case 6:y.Am.success("Thank you, your order has been processed."),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(n){return e.apply(this,arguments)}}();return(0,k.jsxs)(ue,{children:[(0,k.jsxs)(pe,{children:[o?(0,k.jsx)(w,{onClick:function(e){C.Z.setApiKey("AIzaSyAZv5czqJS_HE97JG_DlvnmPj5BdMU_8S8");var n=e.latLng,r=n.lat,a=n.lng;C.Z.fromLatLng(r(),a()).then((function(e){var n=e.results[0].formatted_address;t(n)})).catch((function(e){console.error(e)}))},address:r}):(0,k.jsx)(ce.Z,{}),(0,k.jsx)(O,{formSubmit:s,initialAddress:r})]}),(0,k.jsx)(de,{array:a,onChange:function(e,n){if(0===Number(e.target.value))return e.target.value="1";i((0,P.x)({id:n,value:e.target.value}))},onClick:function(e){i((0,P.cl)(e)),y.Am.info("Item removed from cart")},address:r}),(0,k.jsx)(y.Ix,{autoClose:2e3})]})}}}]);
//# sourceMappingURL=610.112533fb.chunk.js.map