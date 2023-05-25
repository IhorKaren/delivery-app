"use strict";(self.webpackChunkreact_template=self.webpackChunkreact_template||[]).push([[859],{5570:function(e,n,r){r.d(n,{$:function(){return a}});var t,i=r(168),a=r(6444).ZP.section(t||(t=(0,i.Z)(["\n  display: flex;\n  padding-top: 60px;\n"])))},4859:function(e,n,r){r.r(n),r.d(n,{default:function(){return Y}});var t,i,a,s,o,d,l,u,c=r(5861),p=r(4687),m=r.n(p),x=(r(2791),r(9085)),h=r(9434),f=r(3885),v=r(1243),b=function(){var e=(0,c.Z)(m().mark((function e(n){return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.Z.post("https://burgerbackend.herokuapp.com/orders",n);case 3:e.next=7;break;case 5:e.prev=5,e.t0=e.catch(0);case 7:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(n){return e.apply(this,arguments)}}(),g=b,j=r(1413),Z=(r(5462),r(4695)),y=r(6727),k=r(1134),w=r(168),q=r(6444),C=(0,q.F4)(t||(t=(0,w.Z)(["\n  from {\n    opacity: 0;\n    transform: translateX(-25px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n"]))),P=q.ZP.form(i||(i=(0,w.Z)(["\n  padding-top: 50px;\n  width: 300px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 24px;\n  margin: 0 auto;\n"]))),_=q.ZP.label(a||(a=(0,w.Z)(["\n  display: block;\n  margin-right: auto;\n"]))),F=q.ZP.input(s||(s=(0,w.Z)(["\n  display: block;\n  width: 100%;\n  padding: 10px;\n  border-radius: 10px;\n  border: 1px solid #ccc;\n\n  &:focus {\n    outline: none;\n    border-color: #00aeef;\n  }\n"]))),N=q.ZP.div(o||(o=(0,w.Z)(["\n  position: absolute;\n  color: red;\n  animation: "," 500ms ease-in-out;\n"])),C),S=q.ZP.button(d||(d=(0,w.Z)(["\n  background-color: #00aeef;\n  color: white;\n  padding: 8px 12px;\n  border-radius: 10px;\n  font-size: 16px;\n  border: none;\n  &:hover {\n    background-color: #0077b5;\n  }\n"]))),A=r(184),I=y.Ry().shape({name:y.Z_().required("Name is required!"),email:y.Z_().required("Email is required!"),phone:y.Z_().required("Number is required!").min(7,"Number must be at least 7 digits").max(16,"Number must not exceed 16 digits"),address:y.Z_().required("Address is required!")}),T=function(e){var n,r,t,i,a=e.formSubmit,s=e.children,o=(0,h.v9)(f.dv),d=(0,k.cI)({resolver:(0,Z.X)(I)}),l=d.register,u=d.handleSubmit,c=d.reset,p=d.formState.errors;return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsxs)(P,{onSubmit:u((function(e,n){0!==o.length?(a({name:e.name,number:e.phone,email:e.email,address:e.address,order:o}),c(),x.Am.success("Thank you, your order has been processed.")):x.Am.error("To submit an order, you must add the item to your shopping cart.")})),children:[(0,A.jsx)("div",{children:(0,A.jsxs)(_,{htmlFor:"name",children:["Name:",(0,A.jsx)(F,(0,j.Z)({type:"text"},l("name"))),p.name&&(0,A.jsx)(N,{children:null===(n=p.name)||void 0===n?void 0:n.message})]})}),(0,A.jsx)("div",{children:(0,A.jsxs)(_,{htmlFor:"email",children:["Email:",(0,A.jsx)(F,(0,j.Z)({type:"email"},l("email"))),p.email&&(0,A.jsx)(N,{children:null===(r=p.email)||void 0===r?void 0:r.message})]})}),(0,A.jsx)("div",{children:(0,A.jsxs)(_,{htmlFor:"phone",children:["Phone:",(0,A.jsx)(F,(0,j.Z)({type:"tel"},l("phone"))),p.phone&&(0,A.jsx)(N,{children:null===(t=p.phone)||void 0===t?void 0:t.message})]})}),(0,A.jsx)("div",{children:(0,A.jsxs)(_,{htmlFor:"address",children:["Address:",(0,A.jsx)(F,(0,j.Z)({type:"text"},l("address"))),p.address&&(0,A.jsx)(N,{children:null===(i=p.address)||void 0===i?void 0:i.message})]})}),(0,A.jsx)(S,{type:"submit",children:"Submit"}),s]}),(0,A.jsx)(x.Ix,{autoClose:3e3})]})},E=q.ZP.div(l||(l=(0,w.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-left: 50px;\n"]))),R=q.ZP.ul(u||(u=(0,w.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n  padding: 15px;\n  list-style: none;\n"]))),X=r(422),$=function(e){var n=e.array,r=e.onChange,t=e.onClick;return(0,A.jsx)(E,{children:(0,A.jsx)(R,{children:n.map((function(e){return(0,A.jsxs)("li",{children:[(0,A.jsx)("img",{src:X,width:"300",alt:""}),(0,A.jsx)("h3",{children:e.name}),(0,A.jsxs)("p",{children:["Price: ",e.price*e.quantity]}),(0,A.jsx)("input",{type:"number",defaultValue:"1",onChange:function(n){return r(n,e._id)}}),(0,A.jsx)("button",{type:"button",onClick:function(){return t(e._id)},children:"Remove"})]},e._id)}))})})},z=function(){var e=(0,h.v9)(f.dv);return(0,A.jsxs)("div",{children:["Total price: ",e.reduce((function(e,n){return e+n.quantity*n.price}),0)]})},V=r(5570),Y=function(){var e=(0,h.v9)(f.dv),n=(0,h.I0)(),r=function(){var e=(0,c.Z)(m().mark((function e(n){return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g(n);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0.message);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(n){return e.apply(this,arguments)}}();return(0,A.jsxs)(V.$,{children:[(0,A.jsx)(T,{formSubmit:r,children:(0,A.jsx)(z,{})}),(0,A.jsx)($,{array:e,onChange:function(e,r){if(0===Number(e.target.value))return e.target.value="1";n((0,f.x)({id:r,value:e.target.value}))},onClick:function(e){n((0,f.cl)(e)),x.Am.info("Item removed from cart")}}),(0,A.jsx)(x.Ix,{autoClose:1500})]})}},422:function(e,n,r){e.exports=r.p+"static/media/default-image.1a0b38a162899fecfc21.webp"}}]);
//# sourceMappingURL=859.01da1090.chunk.js.map