"use strict";(self.webpackChunkreact_template=self.webpackChunkreact_template||[]).push([[530],{5530:function(n,r,e){e.r(r),e.d(r,{default:function(){return on}});var t,a,o,i,c,s,u,l,p,d,f,x,h,Z=e(1413),m=e(3433),v=e(5861),b=e(9439),k=e(4687),g=e.n(k),y=e(2791),w=e(9434),j=e(5985),C=(e(5462),e(2520)),P=e(1243),S=function(){var n=(0,v.Z)(g().mark((function n(){var r;return g().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,P.Z.get("https://burgerbackend.herokuapp.com/burgers");case 3:return r=n.sent,n.abrupt("return",r.data);case 7:n.prev=7,n.t0=n.catch(0);case 9:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}(),_=S,F=function(){var n=(0,v.Z)(g().mark((function n(){var r;return g().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,P.Z.get("https://burgerbackend.herokuapp.com/shops");case 3:return r=n.sent,n.abrupt("return",r.data);case 7:n.prev=7,n.t0=n.catch(0);case 9:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}(),z=F,A=e(168),B=e(7691),E=e(3736),I=(0,B.ZP)(E.Z)(t||(t=(0,A.Z)(["\n  position: absolute;\n  left: 50%;\n  top: 120px;\n  transform: translateX(-50%);\n  padding: 8px 12px;\n  border-radius: 10px;\n\n  text-decoration: none;\n  white-space: nowrap;\n  font-size: 16px;\n\n  color: black;\n  border: 1px solid black;\n"]))),W=e(184),X=function(n){var r=n.onClick;return(0,W.jsx)("div",{children:(0,W.jsx)(I,{variant:"outlined",onClick:r,children:"Go back"})})},Y=e(1087),q=(0,B.F4)(a||(a=(0,A.Z)(["\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n"]))),G=B.ZP.h1(o||(o=(0,A.Z)(["\n  text-align: center;\n"]))),L=B.ZP.ul(i||(i=(0,A.Z)(["\n  display: flex;\n  margin: 0;\n  gap: 15px;\n  flex-direction: column;\n  list-style: none;\n  padding: 15px;\n"]))),R=B.ZP.li(c||(c=(0,A.Z)(["\n  padding: 0;\n"]))),T=(0,B.ZP)(Y.rU)(s||(s=(0,A.Z)(["\n  display: block;\n  font-size: 24px;\n  font-weight: 500;\n  color: black;\n  text-decoration: none;\n  border-radius: 5px;\n  transition: background-color 200ms linear;\n  white-space: nowrap;\n\n  animation: "," 0.5s ease-in;\n\n  :hover {\n    background-color: rgba(33, 150, 243, 0.5);\n  }\n"])),q),U=function(n){var r=n.shops,e=n.onClick;return(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(G,{children:"Shops"}),(0,W.jsx)(L,{children:r.map((function(n){return(0,W.jsx)(R,{children:(0,W.jsx)(T,{onClick:function(){return e(n.name)},children:n.name})},n._id)}))})]})},D=e(2363),H=e(9504),J=e(2169),K=e(890),M=e(7621),N=(0,B.F4)(u||(u=(0,A.Z)(["\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n"]))),O=(0,B.ZP)(M.Z)(l||(l=(0,A.Z)(["\n  padding: 0;\n  flex-basis: calc((100% - 60px) / 4);\n  animation: "," 0.5s ease-in;\n"])),N),Q=(0,B.ZP)(E.Z)(p||(p=(0,A.Z)(["\n  margin-left: auto;\n  color: black;\n  border: 1px solid black;\n"]))),V=function(n){var r=n.array,e=n.onClick;return(0,W.jsx)(W.Fragment,{children:r.map((function(n){return(0,W.jsxs)(O,{component:"li",children:[(0,W.jsx)(J.Z,{component:"img",src:"https://s7d1.scene7.com/is/image/mcdonalds/".concat(n.img_path),alt:n.name}),(0,W.jsxs)(H.Z,{children:[(0,W.jsx)(K.Z,{gutterBottom:!0,variant:"h5",component:"h3",children:n.name}),(0,W.jsxs)(K.Z,{component:"p",children:["Price: ",n.price]})]}),(0,W.jsx)(D.Z,{children:(0,W.jsx)(Q,{size:"small",variant:"outlined",onClick:function(){return e(n)},children:"Add to cart"})})]},n._id)}))})},$=B.ZP.div(d||(d=(0,A.Z)(["\n  height: 100vh;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  overflow: auto;\n\n  margin-left: 15px;\n  padding-right: 15px;\n\n  border: 2px solid black;\n  border-radius: 10px;\n\n  ::-webkit-scrollbar {\n    width: 8px;\n  }\n\n  ::-webkit-scrollbar-thumb {\n    background-color: #4e4e4e;\n    border-radius: 25px;\n  }\n"]))),nn=B.ZP.ul(f||(f=(0,A.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n  list-style: none;\n"]))),rn=function(n){var r=n.array,e=n.onClick;return(0,W.jsx)($,{children:(0,W.jsx)(nn,{children:(0,W.jsx)(V,{array:r,onClick:e})})})},en=e(854),tn=B.ZP.section(x||(x=(0,A.Z)(["\n  display: flex;\n"]))),an=B.ZP.div(h||(h=(0,A.Z)(["\n  display: flex;\n  min-width: 220px;\n  height: 100vh;\n  position: relative;\n  flex-direction: column;\n  border: 2px solid black;\n  border-radius: 10px;\n"]))),on=function(){var n=(0,y.useState)([]),r=(0,b.Z)(n,2),e=r[0],t=r[1],a=(0,y.useState)([]),o=(0,b.Z)(a,2),i=o[0],c=o[1],s=(0,y.useState)(!1),u=(0,b.Z)(s,2),l=u[0],p=u[1],d=(0,y.useState)(!1),f=(0,b.Z)(d,2),x=f[0],h=f[1],k=(0,w.v9)(C.dv),P=(0,w.I0)();(0,y.useEffect)((function(){try{var n=function(){var n=(0,v.Z)(g().mark((function n(){var r;return g().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,_();case 2:(r=n.sent)&&t((0,m.Z)(r));case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();p(!0),n()}catch(r){console.log(r)}finally{p(!1)}}),[]),(0,y.useEffect)((function(){try{var n=function(){var n=(0,v.Z)(g().mark((function n(){var r;return g().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,z();case 2:(r=n.sent)&&c((0,m.Z)(r));case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}catch(r){console.log(r)}}),[]);var S=function(){var n=(0,v.Z)(g().mark((function n(){var r;return g().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,z();case 3:(r=n.sent)&&(c((0,m.Z)(r)),h(!1)),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();return(0,W.jsxs)(tn,{children:[l&&(0,W.jsx)(en.Z,{}),(0,W.jsxs)(an,{children:[(0,W.jsx)(U,{shops:i,onClick:function(n){c((function(r){return r.filter((function(r){return r.name===n}))})),h(!0)}}),x&&(0,W.jsx)(X,{onClick:S})]}),(0,W.jsx)(rn,{array:e,onClick:function(n){k.find((function(r){return r._id===n._id}))?j.Am.error("You have already added this item to your cart"):(P((0,C.jX)((0,Z.Z)((0,Z.Z)({},n),{},{quantity:1}))),j.Am.success("Your item has been added to your cart"))}}),(0,W.jsx)(j.Ix,{autoClose:1500})]})}},854:function(n,r,e){e.d(r,{Z:function(){return o}});var t=e(5243),a=e(184);function o(){return(0,a.jsx)(t.iT,{height:100,width:100,color:"RoyalBlue",wrapperStyle:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},wrapperClass:"",visible:!0,ariaLabel:"oval-loading",secondaryColor:"SkyBlue",strokeWidth:2,strokeWidthSecondary:2})}}}]);
//# sourceMappingURL=530.4bd73ed4.chunk.js.map