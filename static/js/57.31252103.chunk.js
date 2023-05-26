"use strict";(self.webpackChunkreact_template=self.webpackChunkreact_template||[]).push([[57],{1057:function(n,r,e){e.r(r),e.d(r,{default:function(){return Rn}});var t,o,a,i,c,s,u=e(1413),d=e(3433),l=e(5861),p=e(9439),f=e(4687),m=e.n(f),v=e(2791),Z=e(9434),x=e(5985),h=(e(5462),e(2520)),g=e(1243),b=function(){var n=(0,l.Z)(m().mark((function n(){var r;return m().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,g.Z.get("https://burgerbackend.herokuapp.com/burgers");case 3:return r=n.sent,n.abrupt("return",r.data);case 7:n.prev=7,n.t0=n.catch(0);case 9:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}(),k=b,C=function(){var n=(0,l.Z)(m().mark((function n(){var r;return m().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,g.Z.get("https://burgerbackend.herokuapp.com/shops");case 3:return r=n.sent,n.abrupt("return",r.data);case 7:n.prev=7,n.t0=n.catch(0);case 9:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}(),w=C,y=e(168),j=e(7691),M=e(4281),S=(0,j.ZP)(M.Z)(t||(t=(0,y.Z)(["\n  position: absolute;\n  left: 50%;\n  top: 120px;\n  transform: translateX(-50%);\n  padding: 8px 12px;\n  border-radius: 10px;\n\n  text-decoration: none;\n  white-space: nowrap;\n  font-size: 16px;\n\n  color: black;\n  border: 1px solid black;\n"]))),P=e(184),R=function(n){var r=n.onClick;return(0,P.jsx)("div",{children:(0,P.jsx)(S,{variant:"outlined",onClick:r,children:"Go back"})})},N=e(1087),I=(0,j.F4)(o||(o=(0,y.Z)(["\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n"]))),A=j.ZP.h1(a||(a=(0,y.Z)(["\n  text-align: center;\n"]))),_=j.ZP.ul(i||(i=(0,y.Z)(["\n  display: flex;\n  margin: 0;\n  gap: 15px;\n  flex-direction: column;\n  list-style: none;\n  padding: 15px;\n"]))),F=j.ZP.li(c||(c=(0,y.Z)(["\n  padding: 0;\n"]))),z=(0,j.ZP)(N.rU)(s||(s=(0,y.Z)(["\n  display: block;\n  font-size: 24px;\n  font-weight: 500;\n  color: black;\n  text-decoration: none;\n  border-radius: 5px;\n  transition: background-color 200ms linear;\n  white-space: nowrap;\n\n  animation: "," 0.5s ease-in;\n\n  :hover {\n    background-color: rgba(33, 150, 243, 0.5);\n  }\n"])),I),B=function(n){var r=n.shops,e=n.onClick;return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(A,{children:"Shops"}),(0,P.jsx)(_,{children:r.map((function(n){return(0,P.jsx)(F,{children:(0,P.jsx)(z,{onClick:function(){return e(n.name)},children:n.name})},n._id)}))})]})},E=e(3366),L=e(7462),O=e(8182),W=e(4419),X=e(6934),Y=e(1402),q=e(5878),G=e(1217);function T(n){return(0,G.Z)("MuiCardActions",n)}(0,q.Z)("MuiCardActions",["root","spacing"]);var U=["disableSpacing","className"],D=(0,X.ZP)("div",{name:"MuiCardActions",slot:"Root",overridesResolver:function(n,r){var e=n.ownerState;return[r.root,!e.disableSpacing&&r.spacing]}})((function(n){var r=n.ownerState;return(0,L.Z)({display:"flex",alignItems:"center",padding:8},!r.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})})),H=v.forwardRef((function(n,r){var e=(0,Y.Z)({props:n,name:"MuiCardActions"}),t=e.disableSpacing,o=void 0!==t&&t,a=e.className,i=(0,E.Z)(e,U),c=(0,L.Z)({},e,{disableSpacing:o}),s=function(n){var r=n.classes,e={root:["root",!n.disableSpacing&&"spacing"]};return(0,W.Z)(e,T,r)}(c);return(0,P.jsx)(D,(0,L.Z)({className:(0,O.Z)(s.root,a),ownerState:c,ref:r},i))}));function J(n){return(0,G.Z)("MuiCardContent",n)}(0,q.Z)("MuiCardContent",["root"]);var K=["className","component"],Q=(0,X.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:function(n,r){return r.root}})((function(){return{padding:16,"&:last-child":{paddingBottom:24}}})),V=v.forwardRef((function(n,r){var e=(0,Y.Z)({props:n,name:"MuiCardContent"}),t=e.className,o=e.component,a=void 0===o?"div":o,i=(0,E.Z)(e,K),c=(0,L.Z)({},e,{component:a}),s=function(n){var r=n.classes;return(0,W.Z)({root:["root"]},J,r)}(c);return(0,P.jsx)(Q,(0,L.Z)({as:a,className:(0,O.Z)(s.root,t),ownerState:c,ref:r},i))}));function $(n){return(0,G.Z)("MuiCardMedia",n)}(0,q.Z)("MuiCardMedia",["root","media","img"]);var nn=["children","className","component","image","src","style"],rn=(0,X.ZP)("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:function(n,r){var e=n.ownerState,t=e.isMediaComponent,o=e.isImageComponent;return[r.root,t&&r.media,o&&r.img]}})((function(n){var r=n.ownerState;return(0,L.Z)({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},r.isMediaComponent&&{width:"100%"},r.isImageComponent&&{objectFit:"cover"})})),en=["video","audio","picture","iframe","img"],tn=["picture","img"],on=v.forwardRef((function(n,r){var e=(0,Y.Z)({props:n,name:"MuiCardMedia"}),t=e.children,o=e.className,a=e.component,i=void 0===a?"div":a,c=e.image,s=e.src,u=e.style,d=(0,E.Z)(e,nn),l=-1!==en.indexOf(i),p=!l&&c?(0,L.Z)({backgroundImage:'url("'.concat(c,'")')},u):u,f=(0,L.Z)({},e,{component:i,isMediaComponent:l,isImageComponent:-1!==tn.indexOf(i)}),m=function(n){var r=n.classes,e={root:["root",n.isMediaComponent&&"media",n.isImageComponent&&"img"]};return(0,W.Z)(e,$,r)}(f);return(0,P.jsx)(rn,(0,L.Z)({className:(0,O.Z)(m.root,o),as:i,role:!l&&c?"img":void 0,ref:r,style:p,ownerState:f,src:l?c||s:void 0},d,{children:t}))})),an=e(890),cn=e(5527);function sn(n){return(0,G.Z)("MuiCard",n)}(0,q.Z)("MuiCard",["root"]);var un,dn,ln,pn,fn,mn,vn,Zn=["className","raised"],xn=(0,X.ZP)(cn.Z,{name:"MuiCard",slot:"Root",overridesResolver:function(n,r){return r.root}})((function(){return{overflow:"hidden"}})),hn=v.forwardRef((function(n,r){var e=(0,Y.Z)({props:n,name:"MuiCard"}),t=e.className,o=e.raised,a=void 0!==o&&o,i=(0,E.Z)(e,Zn),c=(0,L.Z)({},e,{raised:a}),s=function(n){var r=n.classes;return(0,W.Z)({root:["root"]},sn,r)}(c);return(0,P.jsx)(xn,(0,L.Z)({className:(0,O.Z)(s.root,t),elevation:a?8:void 0,ref:r,ownerState:c},i))})),gn=(0,j.F4)(un||(un=(0,y.Z)(["\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n"]))),bn=(0,j.ZP)(hn)(dn||(dn=(0,y.Z)(["\n  padding: 0;\n  flex-basis: calc((100% - 60px) / 4);\n  animation: "," 0.5s ease-in;\n"])),gn),kn=(0,j.ZP)(M.Z)(ln||(ln=(0,y.Z)(["\n  margin-left: auto;\n  color: black;\n  border: 1px solid black;\n"]))),Cn=function(n){var r=n.array,e=n.onClick;return(0,P.jsx)(P.Fragment,{children:r.map((function(n){return(0,P.jsxs)(bn,{children:[(0,P.jsx)(on,{component:"img",src:"https://s7d1.scene7.com/is/image/mcdonalds/".concat(n.img_path),width:"220",alt:n.name}),(0,P.jsxs)(V,{children:[(0,P.jsx)(an.Z,{gutterBottom:!0,variant:"h5",component:"h3",children:n.name}),(0,P.jsxs)(an.Z,{component:"p",children:["Price: ",n.price]})]}),(0,P.jsx)(H,{children:(0,P.jsx)(kn,{size:"small",variant:"outlined",onClick:function(){return e(n)},children:"Add to cart"})})]},n._id)}))})},wn=j.ZP.div(pn||(pn=(0,y.Z)(["\n  height: 100vh;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  overflow: auto;\n\n  margin-left: 15px;\n  padding-right: 15px;\n\n  border: 2px solid black;\n  border-radius: 10px;\n\n  ::-webkit-scrollbar {\n    width: 8px;\n  }\n\n  ::-webkit-scrollbar-thumb {\n    background-color: #4e4e4e;\n    border-radius: 25px;\n  }\n"]))),yn=j.ZP.ul(fn||(fn=(0,y.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n  list-style: none;\n"]))),jn=function(n){var r=n.array,e=n.onClick;return(0,P.jsx)(wn,{children:(0,P.jsx)(yn,{children:(0,P.jsx)(Cn,{array:r,onClick:e})})})},Mn=e(854),Sn=j.ZP.section(mn||(mn=(0,y.Z)(["\n  display: flex;\n"]))),Pn=j.ZP.div(vn||(vn=(0,y.Z)(["\n  display: flex;\n  min-width: 220px;\n  height: 100vh;\n  position: relative;\n  flex-direction: column;\n  border: 2px solid black;\n  border-radius: 10px;\n"]))),Rn=function(){var n=(0,v.useState)([]),r=(0,p.Z)(n,2),e=r[0],t=r[1],o=(0,v.useState)([]),a=(0,p.Z)(o,2),i=a[0],c=a[1],s=(0,v.useState)(!1),f=(0,p.Z)(s,2),g=f[0],b=f[1],C=(0,v.useState)(!1),y=(0,p.Z)(C,2),j=y[0],M=y[1],S=(0,Z.v9)(h.dv),N=(0,Z.I0)();(0,v.useEffect)((function(){try{var n=function(){var n=(0,l.Z)(m().mark((function n(){var r;return m().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,k();case 2:(r=n.sent)&&t((0,d.Z)(r));case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();b(!0),n()}catch(r){console.log(r)}finally{b(!1)}}),[]),(0,v.useEffect)((function(){try{var n=function(){var n=(0,l.Z)(m().mark((function n(){var r;return m().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,w();case 2:(r=n.sent)&&c((0,d.Z)(r));case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}catch(r){console.log(r)}}),[]);var I=function(){var n=(0,l.Z)(m().mark((function n(){var r;return m().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,w();case 3:(r=n.sent)&&(c((0,d.Z)(r)),M(!1)),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();return(0,P.jsxs)(Sn,{children:[g&&(0,P.jsx)(Mn.Z,{}),(0,P.jsxs)(Pn,{children:[(0,P.jsx)(B,{shops:i,onClick:function(n){c((function(r){return r.filter((function(r){return r.name===n}))})),M(!0)}}),j&&(0,P.jsx)(R,{onClick:I})]}),(0,P.jsx)(jn,{array:e,onClick:function(n){S.find((function(r){return r._id===n._id}))?x.Am.error("You have already added this item to your cart"):(N((0,h.jX)((0,u.Z)((0,u.Z)({},n),{},{quantity:1}))),x.Am.success("Your item has been added to your cart"))}}),(0,P.jsx)(x.Ix,{autoClose:1500})]})}},854:function(n,r,e){e.d(r,{Z:function(){return a}});var t=e(5243),o=e(184);function a(){return(0,o.jsx)(t.iT,{height:100,width:100,color:"RoyalBlue",wrapperStyle:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},wrapperClass:"",visible:!0,ariaLabel:"oval-loading",secondaryColor:"SkyBlue",strokeWidth:2,strokeWidthSecondary:2})}}}]);
//# sourceMappingURL=57.31252103.chunk.js.map