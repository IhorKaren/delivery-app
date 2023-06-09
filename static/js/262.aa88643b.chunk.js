"use strict";(self.webpackChunkreact_template=self.webpackChunkreact_template||[]).push([[262],{2262:function(n,t,e){e.r(t),e.d(t,{default:function(){return Bn}});var r=e(1413),a=e(3433),i=e(5861),o=e(9439),s=e(4687),c=e.n(s),l=e(2791),u=e(9434),d=e(5985),h=(e(5462),e(2520)),p=e(1243),m=function(){var n=(0,i.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,p.Z.get("https://burger.herokuapp.com/burgers");case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0);case 9:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}(),f=m,v=function(){var n=(0,i.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,p.Z.get("https://burger.herokuapp.com/shops");case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0);case 9:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}(),x=v,g=e(168),Z=e(3366),b=e(7462),w=e(8182),k=e(2554),y=e(4419);function j(n){return String(n).match(/[\d.\-+]*\s*(.*)/)[1]||""}function C(n){return parseFloat(n)}var S=e(2065),P=e(6934),F=e(1402),R=e(5878),_=e(1217);function A(n){return(0,_.Z)("MuiSkeleton",n)}(0,R.Z)("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);var B,M,X,I,z,N,q,E,O,T,U,W,Y,D,G,H,J,K,L,Q,V,$=e(184),nn=["animation","className","component","height","style","variant","width"],tn=(0,k.F4)(z||(z=B||(B=(0,g.Z)(["\n  0% {\n    opacity: 1;\n  }\n\n  50% {\n    opacity: 0.4;\n  }\n\n  100% {\n    opacity: 1;\n  }\n"])))),en=(0,k.F4)(N||(N=M||(M=(0,g.Z)(["\n  0% {\n    transform: translateX(-100%);\n  }\n\n  50% {\n    /* +0.5s of delay between each loop */\n    transform: translateX(100%);\n  }\n\n  100% {\n    transform: translateX(100%);\n  }\n"])))),rn=(0,P.ZP)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:function(n,t){var e=n.ownerState;return[t.root,t[e.variant],!1!==e.animation&&t[e.animation],e.hasChildren&&t.withChildren,e.hasChildren&&!e.width&&t.fitContent,e.hasChildren&&!e.height&&t.heightAuto]}})((function(n){var t=n.theme,e=n.ownerState,r=j(t.shape.borderRadius)||"px",a=C(t.shape.borderRadius);return(0,b.Z)({display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:(0,S.Fq)(t.palette.text.primary,"light"===t.palette.mode?.11:.13),height:"1.2em"},"text"===e.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:"".concat(a).concat(r,"/").concat(Math.round(a/.6*10)/10).concat(r),"&:empty:before":{content:'"\\00a0"'}},"circular"===e.variant&&{borderRadius:"50%"},"rounded"===e.variant&&{borderRadius:(t.vars||t).shape.borderRadius},e.hasChildren&&{"& > *":{visibility:"hidden"}},e.hasChildren&&!e.width&&{maxWidth:"fit-content"},e.hasChildren&&!e.height&&{height:"auto"})}),(function(n){return"pulse"===n.ownerState.animation&&(0,k.iv)(q||(q=X||(X=(0,g.Z)(["\n      animation: "," 1.5s ease-in-out 0.5s infinite;\n    "]))),tn)}),(function(n){var t=n.ownerState,e=n.theme;return"wave"===t.animation&&(0,k.iv)(E||(E=I||(I=(0,g.Z)(["\n      position: relative;\n      overflow: hidden;\n\n      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */\n      -webkit-mask-image: -webkit-radial-gradient(white, black);\n\n      &::after {\n        animation: "," 1.6s linear 0.5s infinite;\n        background: linear-gradient(\n          90deg,\n          transparent,\n          ",",\n          transparent\n        );\n        content: '';\n        position: absolute;\n        transform: translateX(-100%); /* Avoid flash during server-side hydration */\n        bottom: 0;\n        left: 0;\n        right: 0;\n        top: 0;\n      }\n    "]))),en,(e.vars||e).palette.action.hover)})),an=l.forwardRef((function(n,t){var e=(0,F.Z)({props:n,name:"MuiSkeleton"}),r=e.animation,a=void 0===r?"pulse":r,i=e.className,o=e.component,s=void 0===o?"span":o,c=e.height,l=e.style,u=e.variant,d=void 0===u?"text":u,h=e.width,p=(0,Z.Z)(e,nn),m=(0,b.Z)({},e,{animation:a,component:s,variant:d,hasChildren:Boolean(p.children)}),f=function(n){var t=n.classes,e=n.variant,r=n.animation,a=n.hasChildren,i=n.width,o=n.height,s={root:["root",e,r,a&&"withChildren",a&&!i&&"fitContent",a&&!o&&"heightAuto"]};return(0,y.Z)(s,A,t)}(m);return(0,$.jsx)(rn,(0,b.Z)({as:s,ref:t,className:(0,w.Z)(f.root,i),ownerState:m},p,{style:(0,b.Z)({width:h,height:c},l)}))})),on=e(1087),sn=e(7691),cn=(0,sn.F4)(O||(O=(0,g.Z)(["\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n"]))),ln=sn.ZP.h1(T||(T=(0,g.Z)(["\n  text-align: center;\n"]))),un=sn.ZP.ul(U||(U=(0,g.Z)(["\n  display: flex;\n  margin: 0;\n  gap: 15px;\n  flex-direction: column;\n  list-style: none;\n  padding: 15px;\n"]))),dn=sn.ZP.li(W||(W=(0,g.Z)(["\n  padding: 0;\n"]))),hn=(0,sn.ZP)(on.rU)(Y||(Y=(0,g.Z)(["\n  display: block;\n  font-size: 24px;\n  font-weight: 500;\n  color: black;\n  text-decoration: none;\n  border-radius: 5px;\n  transition: background-color 200ms linear;\n  white-space: nowrap;\n\n  animation: "," 0.5s ease-in;\n\n  :hover {\n    background-color: rgba(33, 150, 243, 0.5);\n  }\n\n  ","\n"])),cn,(function(n){return n.active&&(0,sn.iv)(D||(D=(0,g.Z)(["\n      background-color: rgba(33, 150, 243, 0.5);\n    "])))})),pn=function(n){var t=n.shops,e=n.onClick,r=n.loading,a=n.activeShop;return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(ln,{children:"Shops"}),(0,$.jsx)(un,{children:r?Array.from({length:3},(function(n,t){return(0,$.jsx)(dn,{children:(0,$.jsx)(an,{variant:"text",width:186,height:36})},t)})):t.map((function(n){var t=n.name===a;return(0,$.jsx)(dn,{children:(0,$.jsx)(hn,{onClick:function(){return e(n.name)},active:t?"true":null,children:n.name})},n._id)}))})]})},mn=e(2363),fn=e(9504),vn=e(2169),xn=e(890),gn=e(7247),Zn=e(7621),bn=e(3736),wn=(0,sn.F4)(G||(G=(0,g.Z)(["\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n"]))),kn=(0,sn.ZP)(Zn.Z)(H||(H=(0,g.Z)(["\n  position: relative;\n  padding: 0;\n  flex-basis: calc((100% - 60px) / 4);\n  animation: "," 0.5s ease-in;\n"])),wn),yn=(0,sn.ZP)(bn.Z)(J||(J=(0,g.Z)(["\n  position: absolute;\n  bottom: 6px;\n  right: 6px;\n  margin-left: auto;\n  \n  color: black;\n  border: 1px solid black;\n"]))),jn=[1,2,3,4,5,6,7,8],Cn=function(){return(0,$.jsx)($.Fragment,{children:jn.map((function(n,t){return(0,$.jsxs)(kn,{component:"li",children:[(0,$.jsx)(an,{variant:"rectangular",width:280,height:280}),(0,$.jsxs)(fn.Z,{children:[(0,$.jsx)(xn.Z,{gutterBottom:!0,variant:"h5",component:"h3",children:(0,$.jsx)(an,{variant:"text",width:120})}),(0,$.jsx)(xn.Z,{component:"p",children:(0,$.jsx)(an,{variant:"text",width:80})})]}),(0,$.jsx)(mn.Z,{children:(0,$.jsx)(yn,{size:"small",variant:"outlined",children:(0,$.jsx)(an,{variant:"text",width:100})})})]},t)}))})},Sn=function(n){var t=n.array,e=n.onClick,r=n.loading,a=n.activeShop,i=(0,u.v9)(h.dv);return(0,$.jsx)($.Fragment,{children:r?Cn():t.map((function(n){var t=i.some((function(t){return t.name===n.name&&t.shop===a}));return(0,$.jsxs)(kn,{component:"li",children:[(0,$.jsx)(vn.Z,{component:"img",src:"https://s7d1.scene7.com/is/image/mcdonalds/".concat(n.img_path),alt:n.name}),(0,$.jsxs)(fn.Z,{sx:{paddingBottom:"30px"},children:[(0,$.jsx)(xn.Z,{gutterBottom:!0,variant:"h5",component:"h3",children:n.name}),(0,$.jsxs)(xn.Z,{component:"p",children:["Price: ",n.price]})]}),(0,$.jsx)(mn.Z,{children:(0,$.jsx)(yn,{startIcon:t?(0,$.jsx)(gn.Z,{}):null,size:"small",variant:"outlined",onClick:function(){return e(n)},children:t?"Remove":"Add to cart"})})]},n._id)}))})},Pn=sn.ZP.div(K||(K=(0,g.Z)(["\n  height: 800px;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  overflow: auto;\n\n  margin-left: 15px;\n\n  border: 2px solid black;\n  border-radius: 10px;\n\n  ::-webkit-scrollbar {\n    width: 8px;\n  }\n\n  ::-webkit-scrollbar-thumb {\n    background-color: #4e4e4e;\n    border-radius: 25px;\n  }\n"]))),Fn=sn.ZP.ul(L||(L=(0,g.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n  padding: 20px;\n  margin: 0;\n  list-style: none;\n"]))),Rn=function(n){var t=n.array,e=n.onClick,r=n.loading,a=n.activeShop;return(0,$.jsx)(Pn,{children:(0,$.jsx)(Fn,{children:(0,$.jsx)(Sn,{array:t,onClick:e,loading:r,activeShop:a})})})},_n=sn.ZP.section(Q||(Q=(0,g.Z)(["\n  display: flex;\n"]))),An=sn.ZP.div(V||(V=(0,g.Z)(["\n  display: flex;\n  min-width: 220px;\n  height: 800px;\n  position: relative;\n  flex-direction: column;\n  border: 2px solid black;\n  border-radius: 10px;\n"]))),Bn=function(){var n=(0,l.useState)([]),t=(0,o.Z)(n,2),e=t[0],s=t[1],p=(0,l.useState)([]),m=(0,o.Z)(p,2),v=m[0],g=m[1],Z=(0,l.useState)(""),b=(0,o.Z)(Z,2),w=b[0],k=b[1],y=(0,l.useState)(!1),j=(0,o.Z)(y,2),C=j[0],S=j[1],P=(0,u.v9)(h.dv),F=(0,u.I0)();(0,l.useEffect)((function(){function n(){return(n=(0,i.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,S(!0),n.next=4,f();case 4:(t=n.sent)&&s((0,a.Z)(t)),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:return n.prev=11,S(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,8,11,14]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]),(0,l.useEffect)((function(){function n(){return(n=(0,i.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,S(!0),n.next=4,x();case 4:(t=n.sent)&&(g((0,a.Z)(t)),k(t[0].name)),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:return n.prev=11,S(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,8,11,14]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]);return(0,$.jsxs)(_n,{children:[(0,$.jsx)(An,{children:(0,$.jsx)(pn,{shops:v,activeShop:w,loading:C,onClick:function(n){k(n)}})}),(0,$.jsx)(Rn,{array:e,onClick:function(n){if(P.some((function(t){return t._id===n._id&&t.shop===w})))return F((0,h.cl)({id:n._id,shop:w})),void d.Am.info("Item removed from your cart");F((0,h.jX)((0,r.Z)((0,r.Z)({},n),{},{quantity:1,shop:w}))),d.Am.success("Your item has been added to your cart")},loading:C,activeShop:w}),(0,$.jsx)(d.Ix,{autoClose:1500})]})}}}]);
//# sourceMappingURL=262.aa88643b.chunk.js.map