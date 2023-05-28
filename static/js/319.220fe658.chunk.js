"use strict";(self.webpackChunkreact_template=self.webpackChunkreact_template||[]).push([[319],{9319:function(n,t,e){e.r(t),e.d(t,{default:function(){return Mn}});var r,a=e(1413),i=e(3433),o=e(5861),s=e(9439),c=e(4687),l=e.n(c),u=e(2791),d=e(9434),p=e(5985),h=(e(5462),e(2520)),f=e(1243),m=function(){var n=(0,o.Z)(l().mark((function n(){var t;return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,f.Z.get("https://burgerbackend.herokuapp.com/burgers");case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0);case 9:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}(),x=m,v=function(){var n=(0,o.Z)(l().mark((function n(){var t;return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,f.Z.get("https://burgerbackend.herokuapp.com/shops");case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0);case 9:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}(),g=v,Z=e(168),b=e(7691),k=e(3736),w=(0,b.ZP)(k.Z)(r||(r=(0,Z.Z)(["\n  position: absolute;\n  left: 50%;\n  top: 120px;\n  transform: translateX(-50%);\n  padding: 8px 12px;\n  border-radius: 10px;\n\n  text-decoration: none;\n  white-space: nowrap;\n  font-size: 16px;\n\n  color: black;\n  border: 1px solid black;\n"]))),j=e(184),y=function(n){var t=n.onClick;return(0,j.jsx)("div",{children:(0,j.jsx)(w,{variant:"outlined",onClick:t,children:"Go back"})})},C=e(3366),S=e(7462),P=e(8182),A=e(2554),F=e(4419);function R(n){return String(n).match(/[\d.\-+]*\s*(.*)/)[1]||""}function _(n){return parseFloat(n)}var X=e(2065),B=e(6934),M=e(1402),z=e(5878),I=e(1217);function N(n){return(0,I.Z)("MuiSkeleton",n)}(0,z.Z)("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);var q,E,G,O,T,U,W,Y,D,H,J,K,L,Q,V,$,nn,tn,en,rn,an=["animation","className","component","height","style","variant","width"],on=(0,A.F4)(T||(T=q||(q=(0,Z.Z)(["\n  0% {\n    opacity: 1;\n  }\n\n  50% {\n    opacity: 0.4;\n  }\n\n  100% {\n    opacity: 1;\n  }\n"])))),sn=(0,A.F4)(U||(U=E||(E=(0,Z.Z)(["\n  0% {\n    transform: translateX(-100%);\n  }\n\n  50% {\n    /* +0.5s of delay between each loop */\n    transform: translateX(100%);\n  }\n\n  100% {\n    transform: translateX(100%);\n  }\n"])))),cn=(0,B.ZP)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:function(n,t){var e=n.ownerState;return[t.root,t[e.variant],!1!==e.animation&&t[e.animation],e.hasChildren&&t.withChildren,e.hasChildren&&!e.width&&t.fitContent,e.hasChildren&&!e.height&&t.heightAuto]}})((function(n){var t=n.theme,e=n.ownerState,r=R(t.shape.borderRadius)||"px",a=_(t.shape.borderRadius);return(0,S.Z)({display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:(0,X.Fq)(t.palette.text.primary,"light"===t.palette.mode?.11:.13),height:"1.2em"},"text"===e.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:"".concat(a).concat(r,"/").concat(Math.round(a/.6*10)/10).concat(r),"&:empty:before":{content:'"\\00a0"'}},"circular"===e.variant&&{borderRadius:"50%"},"rounded"===e.variant&&{borderRadius:(t.vars||t).shape.borderRadius},e.hasChildren&&{"& > *":{visibility:"hidden"}},e.hasChildren&&!e.width&&{maxWidth:"fit-content"},e.hasChildren&&!e.height&&{height:"auto"})}),(function(n){return"pulse"===n.ownerState.animation&&(0,A.iv)(W||(W=G||(G=(0,Z.Z)(["\n      animation: "," 1.5s ease-in-out 0.5s infinite;\n    "]))),on)}),(function(n){var t=n.ownerState,e=n.theme;return"wave"===t.animation&&(0,A.iv)(Y||(Y=O||(O=(0,Z.Z)(["\n      position: relative;\n      overflow: hidden;\n\n      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */\n      -webkit-mask-image: -webkit-radial-gradient(white, black);\n\n      &::after {\n        animation: "," 1.6s linear 0.5s infinite;\n        background: linear-gradient(\n          90deg,\n          transparent,\n          ",",\n          transparent\n        );\n        content: '';\n        position: absolute;\n        transform: translateX(-100%); /* Avoid flash during server-side hydration */\n        bottom: 0;\n        left: 0;\n        right: 0;\n        top: 0;\n      }\n    "]))),sn,(e.vars||e).palette.action.hover)})),ln=u.forwardRef((function(n,t){var e=(0,M.Z)({props:n,name:"MuiSkeleton"}),r=e.animation,a=void 0===r?"pulse":r,i=e.className,o=e.component,s=void 0===o?"span":o,c=e.height,l=e.style,u=e.variant,d=void 0===u?"text":u,p=e.width,h=(0,C.Z)(e,an),f=(0,S.Z)({},e,{animation:a,component:s,variant:d,hasChildren:Boolean(h.children)}),m=function(n){var t=n.classes,e=n.variant,r=n.animation,a=n.hasChildren,i=n.width,o=n.height,s={root:["root",e,r,a&&"withChildren",a&&!i&&"fitContent",a&&!o&&"heightAuto"]};return(0,F.Z)(s,N,t)}(f);return(0,j.jsx)(cn,(0,S.Z)({as:s,ref:t,className:(0,P.Z)(m.root,i),ownerState:f},h,{style:(0,S.Z)({width:p,height:c},l)}))})),un=e(1087),dn=(0,b.F4)(D||(D=(0,Z.Z)(["\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n"]))),pn=b.ZP.h1(H||(H=(0,Z.Z)(["\n  text-align: center;\n"]))),hn=b.ZP.ul(J||(J=(0,Z.Z)(["\n  display: flex;\n  margin: 0;\n  gap: 15px;\n  flex-direction: column;\n  list-style: none;\n  padding: 15px;\n"]))),fn=b.ZP.li(K||(K=(0,Z.Z)(["\n  padding: 0;\n"]))),mn=(0,b.ZP)(un.rU)(L||(L=(0,Z.Z)(["\n  display: block;\n  font-size: 24px;\n  font-weight: 500;\n  color: black;\n  text-decoration: none;\n  border-radius: 5px;\n  transition: background-color 200ms linear;\n  white-space: nowrap;\n\n  animation: "," 0.5s ease-in;\n\n  :hover {\n    background-color: rgba(33, 150, 243, 0.5);\n  }\n"])),dn),xn=function(n){var t=n.shops,e=n.onClick,r=n.loading;return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(pn,{children:"Shops"}),(0,j.jsx)(hn,{children:r?Array.from({length:3},(function(n,t){return(0,j.jsx)(fn,{children:(0,j.jsx)(ln,{variant:"text",width:186,height:36})},t)})):t.map((function(n){return(0,j.jsx)(fn,{children:(0,j.jsx)(mn,{onClick:function(){return e(n.name)},children:n.name})},n._id)}))})]})},vn=e(2363),gn=e(9504),Zn=e(2169),bn=e(890),kn=e(7247),wn=e(7621),jn=(0,b.F4)(Q||(Q=(0,Z.Z)(["\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n"]))),yn=(0,b.ZP)(wn.Z)(V||(V=(0,Z.Z)(["\n  position: relative;\n  padding: 0;\n  flex-basis: calc((100% - 60px) / 4);\n  animation: "," 0.5s ease-in;\n"])),jn),Cn=(0,b.ZP)(k.Z)($||($=(0,Z.Z)(["\n  position: absolute;\n  bottom: 6px;\n  right: 6px;\n  margin-left: auto;\n  \n  color: black;\n  border: 1px solid black;\n"]))),Sn=[1,2,3,4,5,6,7,8],Pn=function(){return(0,j.jsx)(j.Fragment,{children:Sn.map((function(n,t){return(0,j.jsxs)(yn,{component:"li",children:[(0,j.jsx)(ln,{variant:"rectangular",width:280,height:285})," ",(0,j.jsxs)(gn.Z,{children:[(0,j.jsxs)(bn.Z,{gutterBottom:!0,variant:"h5",component:"h3",children:[(0,j.jsx)(ln,{variant:"text",width:120})," "]}),(0,j.jsxs)(bn.Z,{component:"p",children:[(0,j.jsx)(ln,{variant:"text",width:80})," "]})]}),(0,j.jsx)(vn.Z,{children:(0,j.jsxs)(Cn,{size:"small",variant:"outlined",children:[(0,j.jsx)(ln,{variant:"text",width:100})," "]})})]},t)}))})},An=function(n){var t=n.array,e=n.onClick,r=n.loading,a=n.activeShop,i=Array.from(t,(function(n,t){return t})),o=(0,d.v9)(h.dv),s=null;return 1===a.length&&(s=a[0].name),(0,j.jsx)(j.Fragment,{children:r?Pn(i):t.map((function(n){var t=o.some((function(t){return t.name===n.name&&t.shop===s}));return(0,j.jsxs)(yn,{component:"li",children:[(0,j.jsx)(Zn.Z,{component:"img",src:"https://s7d1.scene7.com/is/image/mcdonalds/".concat(n.img_path),alt:n.name}),(0,j.jsxs)(gn.Z,{sx:{paddingBottom:"30px"},children:[(0,j.jsx)(bn.Z,{gutterBottom:!0,variant:"h5",component:"h3",children:n.name}),(0,j.jsxs)(bn.Z,{component:"p",children:["Price: ",n.price]})]}),(0,j.jsx)(vn.Z,{children:(0,j.jsx)(Cn,{startIcon:t?(0,j.jsx)(kn.Z,{}):null,size:"small",variant:"outlined",onClick:function(){return e(n)},children:t?"Remove":"Add to cart"})})]},n._id)}))})},Fn=b.ZP.div(nn||(nn=(0,Z.Z)(["\n  height: 800px;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  overflow: auto;\n\n  margin-left: 15px;\n\n  border: 2px solid black;\n  border-radius: 10px;\n\n  ::-webkit-scrollbar {\n    width: 8px;\n  }\n\n  ::-webkit-scrollbar-thumb {\n    background-color: #4e4e4e;\n    border-radius: 25px;\n  }\n"]))),Rn=b.ZP.ul(tn||(tn=(0,Z.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n  padding: 20px;\n  margin: 0;\n  list-style: none;\n"]))),_n=function(n){var t=n.array,e=n.onClick,r=n.loading,a=n.activeShop;return(0,j.jsx)(Fn,{children:(0,j.jsx)(Rn,{children:(0,j.jsx)(An,{array:t,onClick:e,loading:r,activeShop:a})})})},Xn=b.ZP.section(en||(en=(0,Z.Z)(["\n  display: flex;\n"]))),Bn=b.ZP.div(rn||(rn=(0,Z.Z)(["\n  display: flex;\n  min-width: 220px;\n  height: 800px;\n  position: relative;\n  flex-direction: column;\n  border: 2px solid black;\n  border-radius: 10px;\n"]))),Mn=function(){var n=(0,u.useState)([]),t=(0,s.Z)(n,2),e=t[0],r=t[1],c=(0,u.useState)([]),f=(0,s.Z)(c,2),m=f[0],v=f[1],Z=(0,u.useState)(!1),b=(0,s.Z)(Z,2),k=b[0],w=b[1],C=(0,u.useState)(!1),S=(0,s.Z)(C,2),P=S[0],A=S[1],F=(0,d.v9)(h.dv),R=(0,d.I0)();(0,u.useEffect)((function(){function n(){return(n=(0,o.Z)(l().mark((function n(){var t;return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,w(!0),n.next=4,x();case 4:(t=n.sent)&&r((0,i.Z)(t)),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:return n.prev=11,w(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,8,11,14]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]),(0,u.useEffect)((function(){function n(){return(n=(0,o.Z)(l().mark((function n(){var t;return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,w(!0),n.next=4,g();case 4:(t=n.sent)&&v((0,i.Z)(t)),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:return n.prev=11,w(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,8,11,14]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]);var _=function(){var n=(0,o.Z)(l().mark((function n(){var t;return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,g();case 3:(t=n.sent)&&(v((0,i.Z)(t)),A(!1)),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();return(0,j.jsxs)(Xn,{children:[(0,j.jsxs)(Bn,{children:[(0,j.jsx)(xn,{shops:m,onClick:function(n){v((function(t){return t.filter((function(t){return t.name===n}))})),A(!0)},loading:k}),P&&(0,j.jsx)(y,{onClick:_})]}),(0,j.jsx)(_n,{array:e,onClick:function(n){var t=m[0].name;if(m.length>1)p.Am.info("Please select a shop");else{if(F.some((function(e){return e._id===n._id&&e.shop===t})))return R((0,h.cl)({id:n._id,shop:t})),void p.Am.info("Item removed from your cart");R((0,h.jX)((0,a.Z)((0,a.Z)({},n),{},{quantity:1,shop:t}))),p.Am.success("Your item has been added to your cart")}},loading:k,activeShop:m}),(0,j.jsx)(p.Ix,{autoClose:1500})]})}}}]);
//# sourceMappingURL=319.220fe658.chunk.js.map