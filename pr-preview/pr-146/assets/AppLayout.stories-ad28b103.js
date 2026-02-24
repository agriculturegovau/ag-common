import{j as o,e as N,m as A,t as b,_ as P,c as v,b as g,i as u,B as M,p as I,G as On,g as ae,h as bt,s as vt,q as co,a as uo,F as yt,u as Ot}from"./Box-c58c9f90.esm-8cc217f1.js";import{r as p}from"./index-39cffa30.js";import{P as q,p as fo}from"./ag.ds-next-react-prose.esm-9cfd59f8.js";import{b as po,m as ho,c as U,_ as Pt,C as go,B as Ke,P as $,a as Pn}from"./ag.ds-next-react-button.esm-42a75b53.js";import{v as mo,S as D,T as x,F as w,V as wn,s as Qe,c as bo,E as vo}from"./Icon-8342de17.esm-15029b31.js";import{e as ne,a as kn,c as Cn,F as xn,u as dn,_ as Rn,D as yo,b as Oo,d as Po,f as Tn,g as un,h as pe,i as wo,j as ko,k as Co,l as wt}from"./ag.ds-next-react-dropdown-menu.esm-f4cf6f40.js";import{b as kt,c as xo,d as So,a as Sn,C as Ve,M as Io,e as Lo,E as Mo,H as Ct,f as xt,g as Ao,U as Do,F as In,h as jo,S as Bo,P as St,L as Eo,i as Ro,j as To,A as zo,k as Fo,l as It,m as Wo,n as $o,o as _o,p as No,I as qo,W as Go,B as Ho}from"./ag.ds-next-react-icon.esm-536b84e7.js";import{r as Ln}from"./index-1883dec2.js";import{u as Mn,C as te,c as Uo}from"./CoreProvider-eb9f00f4.esm-50a1f8d7.js";import{L as Yo}from"./ag.ds-next-react-ag-branding.esm-54256e91.js";import{L as Ko}from"./ag.ds-next-react-link-list.esm-5faeeb85.js";import{C as Qo}from"./ag.ds-next-react-callout.esm-f3a31342.js";import{a as Ne}from"./ag.ds-next-react-text-link.esm-f7291fdd.js";import"./jsx-runtime-9bc08dc0.js";import"./_commonjsHelpers-725317a4.js";function Lt(){var e=p.useState(!1),n=e[0],r=e[1];return p.useEffect(function(){if(!window.matchMedia){r(!1);return}var t=window.matchMedia("(prefers-reduced-motion: reduce)");r(t.matches);var i=function(s){return r(s.matches)};return t.addEventListener("change",i),function(){return t.removeEventListener("change",i)}},[]),n}var Vo=function(n){var r=n.children,t=n["aria-label"];return o("nav",{"aria-label":t,children:r})},Xo=p.forwardRef(function(n,r){var t=n.children,i=n.href;return o("a",{css:[mo,po({block:!1,size:"md",variant:"primary"}),{position:"absolute","&:focus-visible":{top:A(1),left:A(1),clip:"auto",clipPath:"none",overflow:"visible",whiteSpace:"normal",width:"auto",zIndex:b.zIndex.skipLink}},"","","",""],href:i,ref:r,children:t})}),Zo=["label"];function zn(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,t)}return r}function Fn(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?zn(Object(r),!0).forEach(function(t){P(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):zn(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var se=function(n){var r=n.links,t=n["aria-label"],i=t===void 0?"Skip links":t;return o(Vo,{"aria-label":i,children:r.map(function(a,s){var c=a.label,d=N(a,Zo);return o(Xo,Fn(Fn({},d),{},{children:c}),s)})})},Jo=function(n){var r=n.hideOptionalLabel,t=n.required,i=n.secondaryLabel;return p.useMemo(function(){return[i,r||t?null:"(optional)"].filter(Boolean).join(" ")},[t,i,r])},Mt=function(n){var r=n.children,t=n.invalid,i=n.id;return o(D,{borderLeft:t,borderLeftWidth:"xl",css:v({borderLeftColor:t?g.systemError:void 0},"",""),gap:.5,id:i,paddingLeft:t?1:void 0,children:r})},At=function(n){var r=n.as,t=r===void 0?"label":r,i=n.children,a=n.className,s=n.id,c=n.htmlFor,d=n.required,l=n.secondaryLabel,f=n.hideOptionalLabel,h=Jo({hideOptionalLabel:f,required:d,secondaryLabel:l});return u(M,{as:t,className:a,htmlFor:c,id:s,children:[o(x,{as:"span",fontWeight:"bold",children:i}),h?u(x,{as:"span",color:"muted",children:[" ",h]}):null]})},Dt=function(n){var r=n.children,t=n.id;return o(x,{color:"muted",display:"block",id:t,children:r})},ei={name:"4zleql",styles:"display:block"},jt=function(n){var r=n.children,t=n.id;return u(w,{alignItems:"center",gap:.5,children:[o(M,{flexShrink:0,children:o(kt,{"aria-hidden":"false","aria-label":"Error",color:"error",css:ei,size:"md"})}),o(x,{color:"error",display:"block",fontWeight:"bold",id:t,children:r})]})},ni=function(n){var r=n.children,t=n.hint,i=n.id,a=n.invalid,s=n.label,c=n.labelId,d=n.maxWidth,l=n.secondaryLabel,f=n.hideOptionalLabel,h=n.message,y=n.required,k=ri(i),O=k.fieldId,m=k.hintId,C=k.messageId,S=ti({required:y,fieldId:O,message:h,messageId:C,hint:t,hintId:m,invalid:a});return u(Mt,{invalid:a,children:[o(At,{hideOptionalLabel:f,htmlFor:O,id:c,required:y,secondaryLabel:l,children:s}),t?o(Dt,{id:m,children:t}):null,h&&a?o(jt,{id:C,children:h}):null,typeof r=="function"?r(S):r,d?o("div",{"aria-hidden":!0,css:v({height:0,marginTop:"-".concat(A(.5)),maxWidth:b.maxWidth.field[d],overflow:"hidden","::after":{content:'"---------------------------------------------------------------"'}},"","")}):null]})},ri=function(n){var r=ne(n),t=n||"field-".concat(r),i="field-".concat(r,"-hint"),a="field-".concat(r,"-message");return{fieldId:t,hintId:i,messageId:a}},ti=function(n){var r=n.required,t=n.fieldId,i=n.message,a=n.messageId,s=n.hint,c=n.hintId,d=n.invalid,l=[i?a:null,s?c:null].filter(Boolean),f=l.length?l.join(" "):void 0;return{"aria-required":!!r,"aria-invalid":!!d,"aria-describedby":f,id:t}},Bt=p.createContext(void 0),Et=function(){return p.useContext(Bt)};function oi(e){var n=e.children,r=e.invalid,t=e.messageId,i=e.name,a=e.required,s=ne();return o(Bt.Provider,{value:{invalid:r,name:i||s,messageId:t,required:a},children:n})}var he=function(n){var r=n.block,t=r===void 0?!1:r,i=n.children,a=n.hint,s=n.id,c=n.invalid,d=c===void 0?!1:c,l=n.label,f=n.hideOptionalLabel,h=n.message,y=n.name,k=n.required,O=k===void 0?!1:k,m=ii(s),C=m.groupId,S=m.hintId,L=m.messageId,B=[d&&h?L:null,a?S:null].filter(Boolean),E=B.length?B.join(" "):void 0;return o(oi,{invalid:d,messageId:d&&h?L:void 0,name:y,required:O,children:o(Mt,{id:C,invalid:d,children:u(M,{"aria-describedby":E,as:"fieldset",children:[l?o(At,{as:"legend",hideOptionalLabel:f,required:O,children:l}):null,u(D,{css:v({marginTop:l?A(.5):void 0},"",""),gap:.5,children:[a?o(Dt,{id:S,children:a}):null,h&&d?o(jt,{id:L,children:h}):null,o(w,{flexDirection:t?"column":"row",flexWrap:t?void 0:"wrap",gap:1,paddingTop:.5,width:"100%",children:i})]})]})})})},ii=function(n){var r=ne(n),t=n||"control-group-".concat(r),i="control-group-".concat(r,"-hint"),a="control-group-".concat(r,"-message");return{groupId:t,hintId:i,messageId:a}};function Wn(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,t)}return r}function rn(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?Wn(Object(r),!0).forEach(function(t){P(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Wn(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function ai(e){var n=e.disabled,r=e.invalid,t=e.size,i=I.control[t],a=i.width,s=i.height,c=i.borderWidth;return o(w,{alignItems:"center",as:"span",css:v(rn(rn({backgroundColor:g.backgroundBody,borderColor:g.border,borderRadius:"100%",borderStyle:"solid",borderWidth:c,inset:0,position:"absolute"},n&&{color:g.borderMuted,borderColor:g.borderMuted,backgroundColor:g.backgroundShade,"@media (forced-colors: active)":{borderColor:"GrayText",color:"GrayText"}}),r&&{borderColor:g.systemError,backgroundColor:g.systemErrorMuted}),"",""),flexShrink:0,height:s,justifyContent:"center",rounded:!0,width:a,children:o(M,{as:"span",css:v(rn({borderRadius:"100%",backgroundColor:g.foregroundText,"@media (forced-colors: active)":{backgroundColor:"MenuText"}},n&&{backgroundColor:g.borderMuted,"@media (forced-colors: active)":{backgroundColor:"GrayText"}}),"",""),height:"calc(100% - 0.5rem)",highContrastOutline:!0,width:"calc(100% - 0.5rem)"})})}var si=["height","width"];function $n(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,t)}return r}function li(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?$n(Object(r),!0).forEach(function(t){P(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):$n(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var ci=p.forwardRef(function(n,r){var t=n.height,i=n.width,a=N(n,si);return o("input",li({css:v({height:t,margin:0,opacity:0,width:i,"&:focus ~ span:first-of-type":I.outline,"~ span > span":{opacity:0},"&:checked ~ span > span":{opacity:1}},"",""),ref:r},a))}),di=function(n){var r=n.children,t=n.disabled,i=n.htmlFor;return o(w,{alignItems:"flex-start",as:"label",color:"text",css:v({cursor:t?"not-allowed":"pointer"},"",""),gap:.5,htmlFor:i,inline:!0,children:r})},ui={sm:0,md:"0.2rem"};function fi(e){var n=e.children,r=e.disabled,t=e.size,i=ui[t];return o(x,{color:r?"muted":"text",css:v({paddingTop:i},"",""),flexGrow:1,children:n})}var pi=["children","disabled","invalid","name","required","size"];function _n(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,t)}return r}function hi(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?_n(Object(r),!0).forEach(function(t){P(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_n(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var Nn=p.forwardRef(function(n,r){var t=n.children,i=n.disabled,a=n.invalid,s=n.name,c=n.required,d=n.size,l=d===void 0?"md":d,f=N(n,pi),h=gi(f.id),y=Et(),k=I.control[l],O=k.height,m=k.width,C=typeof a=="boolean"?a:y==null?void 0:y.invalid,S=typeof c=="boolean"?c:y==null?void 0:y.required,L=s||(y==null?void 0:y.name);return u(di,{disabled:i,htmlFor:h,children:[u("span",{css:v({display:"inline-block",height:O,position:"relative",width:m},"",""),children:[o(ci,hi({"aria-describedby":C?y==null?void 0:y.messageId:void 0,"aria-invalid":C||void 0,"aria-required":S,disabled:i,height:O,id:h,name:L,ref:r,type:"radio",width:m},f)),o(ai,{disabled:i,invalid:C,size:l})]}),o(fi,{disabled:i,size:l,children:t})]})});function gi(e){var n=ne(e);return e||"radio-".concat(n)}function qn(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,t)}return r}function Gn(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?qn(Object(r),!0).forEach(function(t){P(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):qn(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var mi=function(n){var r=n.disabled,t=n.indeterminate,i=n.invalid,a=n.size,s=I.control[a],c=s.width,d=s.height,l=s.borderWidth;return o(w,{alignItems:"center",as:"span",css:v(Gn(Gn({backgroundColor:g.backgroundBody,borderColor:g.border,borderStyle:"solid",borderWidth:l,color:g.foregroundText,inset:0,position:"absolute"},r&&{color:g.borderMuted,borderColor:g.borderMuted,backgroundColor:g.backgroundShade,"@media (forced-colors: active)":{borderColor:"GrayText",color:"GrayText"}}),i&&{borderColor:g.systemError,backgroundColor:g.systemErrorMuted}),"",""),flexShrink:0,height:d,justifyContent:"center",rounded:!0,width:c,children:t?o(xo,{size:a,weight:"bold"}):o(So,{size:a,weight:"bold"})})},bi=["height","width"];function Hn(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,t)}return r}function vi(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?Hn(Object(r),!0).forEach(function(t){P(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Hn(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var yi=p.forwardRef(function(n,r){var t=n.height,i=n.width,a=N(n,bi);return o("input",vi({css:v({height:t,margin:0,opacity:0,width:i,"&:focus ~ span:first-of-type":I.outline,"~ span > svg":{opacity:0},"&:checked ~ span > svg, &:indeterminate ~ span > svg":{opacity:1}},"",""),ref:r},a))});function Oi(e){var n=e.children,r=e.htmlFor,t=e.disabled;return o(w,{alignItems:"flex-start",as:"label",color:"text",css:v({cursor:t?"not-allowed":"pointer"},"",""),gap:.5,htmlFor:r,inline:!0,children:n})}var Pi={sm:0,md:"0.2rem"};function wi(e){var n=e.children,r=e.disabled,t=e.size,i=Pi[t];return o(x,{color:r?"muted":"text",css:v({paddingTop:i},"",""),flexGrow:1,children:n})}var ki=["checked","children","disabled","indeterminate","invalid","name","required","size"];function Un(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,t)}return r}function Ci(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?Un(Object(r),!0).forEach(function(t){P(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Un(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var tn=p.forwardRef(function(n,r){var t=n.checked,i=n.children,a=n.disabled,s=n.indeterminate,c=n.invalid,d=n.name,l=n.required,f=n.size,h=f===void 0?"md":f,y=N(n,ki),k=xi(y.id),O=p.useRef(null),m=Et(),C=I.control[h],S=C.height,L=C.width,B=typeof c=="boolean"?c:m==null?void 0:m.invalid,E=typeof l=="boolean"?l:m==null?void 0:m.required,F=d||(m==null?void 0:m.name);p.useEffect(function(){O.current&&(O.current.indeterminate=!!s)},[s]);var _=s?!1:t;return u(Oi,{disabled:a,htmlFor:k,children:[u("span",{css:v({display:"inline-block",height:S,position:"relative",width:L},"",""),children:[o(yi,Ci({"aria-checked":s?"mixed":void 0,"aria-describedby":B?m==null?void 0:m.messageId:void 0,"aria-invalid":B||void 0,"aria-required":E,checked:_,disabled:a,height:S,id:k,name:F,ref:ho([r,O]),type:"checkbox",width:L},y)),o(mi,{disabled:a,indeterminate:s,invalid:B,size:h})]}),o(wi,{disabled:a,size:h,children:i})]})});function xi(e){var n=ne(e);return e||"checkbox-".concat(n)}var Si=["label","hideOptionalLabel","required","hint","message","invalid","block","maxWidth","options","placeholder","id"];function Yn(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,t)}return r}function Q(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?Yn(Object(r),!0).forEach(function(t){P(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Yn(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var Ii=p.forwardRef(function(n,r){var t=n.label,i=n.hideOptionalLabel,a=n.required,s=n.hint,c=n.message,d=n.invalid,l=n.block,f=n.maxWidth,h=f===void 0?"md":f,y=n.options,k=n.placeholder,O=n.id,m=N(n,Si),C=Di({block:l});return o(ni,{hideOptionalLabel:i,hint:s,id:O,invalid:d,label:t,maxWidth:h,message:c,required:a,children:function(L){return u(Li,{block:l,maxWidth:h,children:[o("select",Q(Q(Q({css:C,ref:r},L),m),{},{children:o(Mi,{options:y,placeholder:k})})),o(Ai,{disabled:m.disabled})]})}})}),Li=function(n){var r=n.children,t=n.block,i=n.maxWidth;return o("div",{css:v(Q({position:"relative"},!t&&{maxWidth:b.maxWidth.field[i]}),"",""),children:r})},Mi=function(n){var r=n.options,t=n.placeholder;return u(p.Fragment,{children:[t?o("option",{value:"",children:t}):null,r.map(function(i){return"options"in i?o("optgroup",{disabled:i.disabled,label:i.label,children:i.options.map(function(a){var s=a.value,c=a.label,d=a.disabled;return o("option",{disabled:d,value:s,children:c},s)})},i.label):o("option",{disabled:i.disabled,value:i.value,children:i.label},i.value)})]})},Ai=function(n){var r=n.disabled;return o(Sn,{css:v({position:"absolute",top:"50%",right:A(.75),transform:"translateY(-50%)",opacity:r?.3:void 0,pointerEvents:"none",color:g.foregroundAction},"","")})},Di=function(n){var r=n.block;return Q(Q(Q(Q({position:"relative",appearance:"none",boxSizing:"border-box",paddingLeft:A(1),paddingRight:"calc(".concat(b.borderWidth.lg,"px + 2.5rem)"),margin:0,background:g.backgroundBody,borderWidth:b.borderWidth.lg,borderStyle:"solid",borderColor:g.border,borderRadius:b.borderRadius,color:g.foregroundText,width:"100%",fontFamily:b.font.body},I.input.md),{},{lineHeight:b.lineHeight.default},I.truncate),r&&{maxWidth:"none",display:"block"}),{},{'&[aria-invalid="true"]':{backgroundColor:g.systemErrorMuted,borderColor:g.systemError},"&:disabled":{opacity:1,cursor:"not-allowed",borderColor:g.borderMuted,backgroundColor:g.backgroundShade,color:g.foregroundMuted},"&:focus":I.outline})};function Rt(){var e=p.useState(!1),n=e[0],r=e[1];return p.useEffect(function(){r(!0)},[]),n}function Tt(e,n){var r=e||n;if(!r)throw new Error("onClose prop is required");return r}function ji(e,n){return e||n}function Bi(){var e=ne();return{titleId:"drawer-".concat(e,"-title")}}function Ei(e){var n=e.actions,r=e.children,t=e.elementToFocusOnClose,i=e.onClose,a=e.title,s=Bi(),c=s.titleId;return o(xn,{returnFocus:t?function(){return window.setTimeout(function(){return t.focus()},0),!1}:!0,children:u(w,{"aria-labelledby":c,"aria-modal":!0,background:"body",css:v(P({boxShadow:b.shadow.lg,inset:0,position:"fixed"},b.mediaQuery.max.xs,{overflowY:"auto"}),"",""),flexDirection:"column",highContrastOutline:!0,role:"dialog",children:[o(Ri,{children:o(zi,{id:c,children:a})}),o(Fi,{children:r}),n?o($i,{children:n}):null,o(U,{css:ae({position:"fixed",zIndex:b.zIndex.elevated,top:"1.25rem",right:bt({xs:A(.75),md:A(1.5)})}),iconAfter:Ve,onClick:i,variant:"text",children:"Close"})]})})}function Ri(e){var n=e.children;return o(M,{background:"body",borderBottom:!0,css:v(P({position:"sticky",top:0,zIndex:b.zIndex.elevated},b.mediaQuery.min.sm,{position:"relative"}),"",""),paddingX:{xs:.75,md:1.5},paddingY:1,children:n})}var Ti={name:"1r5gb7q",styles:"display:inline-block"};function zi(e){var n=e.children,r=e.id;return o(x,{as:"h2",css:Ti,"data-autofocus":!0,focusRingFor:"keyboard",fontSize:"lg",fontWeight:"bold",id:r,lineHeight:"heading",tabIndex:-1,children:n})}function Fi(e){var n=e.children;return o(M,{background:"body",css:v(P({},b.mediaQuery.min.sm,{overflowY:"auto"}),"",""),flexGrow:1,paddingX:{xs:.75,md:1.5},paddingY:{xs:1,md:1.5},children:n})}var Wi={name:"xdvdnl",styles:"margin-top:auto"};function $i(e){var n=e.children;return o(M,{background:"body",borderTop:!0,css:Wi,paddingX:{xs:.75,md:1.5},paddingY:1,children:n})}var _i={md:"32rem",lg:"45rem"},Ni=function(n){var r=n.actions,t=n.children,i=n.elementToFocusOnClose,a=n.isOpen,s=a===void 0?!1:a,c=n.mutedOverlay,d=c===void 0?!1:c,l=n.onClose,f=n.onDismiss,h=n.title,y=n.width,k=y===void 0?"md":y,O=Tt(l,f),m=p.useRef(0),C=Lt(),S=p.useState(!0),L=S[0],B=S[1],E=Rt();p.useEffect(function(){m.current=window.innerWidth-document.documentElement.clientWidth},[]),p.useEffect(function(){s&&B(!1)},[s]),p.useEffect(function(){var G=function(ce){s&&ce.code==="Escape"&&(ce.preventDefault(),ce.stopPropagation(),O())};return window.addEventListener("keydown",G),function(){return window.removeEventListener("keydown",G)}},[s,O]);var F=kn(E?s:!1),_=F.modalContainerRef;if(!E||!Cn())return null;var re=s?!0:!L;return Ln.createPortal(u(p.Fragment,{children:[s?o(Gi,{scrollbarWidth:m.current}):null,u("div",{ref:_,children:[o("div",{css:v({pointerEvents:"none",position:"absolute",opacity:s?1:0,transition:s?"none":"opacity ".concat(C?"1ms":"150ms")},"",""),"data-drawer":"transitioner",onTransitionEnd:function(){B(!0)}}),o(qi,{isOpen:s,mutedOverlay:d,onClick:O,prefersReducedMotion:C}),o(M,{css:v({inset:0,marginLeft:"auto",position:"fixed",transform:"translateX(".concat(s?"0":"100%",")"),transition:"transform ".concat(C?"1ms":"150ms"," ease"),zIndex:b.zIndex.dialog},"",""),maxWidth:_i[k],children:re&&o(Ei,{actions:r,elementToFocusOnClose:i,onClose:O,title:h,children:t})})]})]}),document.body)};function qi(e){var n=e.isOpen,r=e.mutedOverlay,t=e.onClick,i=e.prefersReducedMotion;return o("div",{css:v({pointerEvents:n?"all":"none",position:"fixed",inset:0,backgroundColor:r?g.overlayMuted:g.overlay,opacity:n?1:0,transition:"opacity ".concat(i?"1ms":"150ms"," ease"),zIndex:b.zIndex.overlay},"",""),onClick:t})}function Gi(e){var n=e.scrollbarWidth;return o(On,{styles:v({html:{marginRight:n,scrollbarGutter:"auto"},body:{overflow:"hidden"}},"","")})}var Kn,Hi=p.forwardRef(function(n,r){var t=n.children;return o("div",{css:v({position:"fixed",top:0,left:0,bottom:0,right:0,backgroundColor:g.overlay,zIndex:b.zIndex.overlay,overflowY:"auto",animation:"".concat(Ui," ").concat(b.transition.duration,"ms ").concat(b.transition.timingFunction)},"",""),ref:r,children:t})}),Ui=vt(Kn||(Kn=Pt([`
  0% { opacity: 0; }
  100% { opacity: 1; }
`]))),Yi=function(n){var r=n.children,t=n.id;return o(x,{as:"h2","data-autofocus":!0,focusRingFor:"keyboard",fontSize:"lg",fontWeight:"bold",id:t,lineHeight:"heading",tabIndex:-1,children:r})},Ki=function(){var n=ne();return{titleId:"modal-".concat(n,"-title")}},Qn,Qi="45rem",Vi={name:"1duj7gx",styles:"align-self:flex-end"},Xi={name:"xdvdnl",styles:"margin-top:auto"},Zi=function(n){var r=n.actions,t=n.children,i=n.onClose,a=n.title,s=Ki(),c=s.titleId;return o(xn,{returnFocus:!0,children:u(D,{"aria-labelledby":c,"aria-modal":!0,background:"body",css:v(P({boxShadow:b.shadow.lg,position:"relative",margin:"0 auto",minHeight:"100vh",animation:"".concat(Ji," ").concat(b.transition.duration,"ms ").concat(b.transition.timingFunction),"@supports (min-height: 100dvh)":{minHeight:"100dvh"}},b.mediaQuery.min.sm,{borderRadius:b.borderRadius,margin:"".concat(A(6)," auto ").concat(A(1)),minHeight:"auto"}),"",""),gap:1,highContrastOutline:!0,maxWidth:Qi,paddingX:{xs:.75,md:1.5},paddingY:{xs:1,md:1.5},role:"dialog",children:[o(U,{"aria-label":"Close modal",css:Vi,iconAfter:Ve,onClick:i,variant:"text",children:"Close"}),o(Yi,{id:c,children:a}),o(M,{children:t}),r?o(M,{css:Xi,paddingTop:1,children:r}):null]})})},Ji=vt(Qn||(Qn=Pt([`
  0% { transform: translateY(1rem); }
	100% { transform: translateY(0); }
`]))),zt=function(n){var r=n.actions,t=n.children,i=n.isOpen,a=i===void 0?!1:i,s=n.onClose,c=n.onDismiss,d=n.title,l=Tt(s,c);p.useEffect(function(){var y=function(O){a&&O.code==="Escape"&&(O.preventDefault(),O.stopPropagation(),l())};return window.addEventListener("keydown",y),function(){return window.removeEventListener("keydown",y)}},[l,a]);var f=kn(a),h=f.modalContainerRef;return!a||!Cn()?null:Ln.createPortal(u(p.Fragment,{children:[o(na,{}),o(Hi,{ref:h,children:o(Zi,{actions:r,onClose:l,title:d,children:t})})]}),document.body)},ea={name:"1sy9iaq",styles:"body{overflow:hidden;}"},na=function(){return o(On,{styles:ea})};function ra(e){var n,r,t=Array.from(e.matchAll(new RegExp(/(\p{L})\p{L}+/,"gu")));if(!t.length)return"?";var i=((n=t.shift())===null||n===void 0?void 0:n[1])||"",a=((r=t.pop())===null||r===void 0?void 0:r[1])||"";return(i+a).toUpperCase()}function Ft(e){var n=e.name,r=e.tone,t=r===void 0?"neutral":r,i=e.size,a=i===void 0?"md":i,s=e["aria-hidden"],c=e["aria-label"],d=ra(n),l=ta[t],f=oa[a],h=f.size,y=f.fontSize;return o(w,{alignItems:"center","aria-hidden":s,"aria-label":c,as:"span",css:v({textDecoration:"none",height:"".concat(h,"rem"),width:"".concat(h,"rem"),borderRadius:"50%",borderStyle:"solid",borderWidth:b.borderWidth.sm,borderColor:l,color:l},"",""),flexShrink:0,fontSize:y,fontWeight:"bold",justifyContent:"center",children:d})}var ta={neutral:g.foregroundMuted,action:g.foregroundAction},oa={sm:{fontSize:"xs",size:2},md:{fontSize:"sm",size:2.5},lg:{fontSize:"md",size:3},xl:{fontSize:"lg",size:4},xxl:{fontSize:"xl",size:4.5},xxxl:{fontSize:"xl",size:5}},Wt=p.createContext(void 0);function be(){var e=p.useContext(Wt);if(e===void 0)throw new Error("`AppLayoutContext` not found.");return e}function ia(e,n){var r=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=aa(e))||n&&e&&typeof e.length=="number"){r&&(e=r);var t=0,i=function(){};return{s:i,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(l){throw l},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a,s=!0,c=!1;return{s:function(){r=r.call(e)},n:function(){var l=r.next();return s=l.done,l},e:function(l){c=!0,a=l},f:function(){try{s||r.return==null||r.return()}finally{if(c)throw a}}}}function aa(e,n){if(e){if(typeof e=="string")return Vn(e,n);var r={}.toString.call(e).slice(8,-1);return r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set"?Array.from(e):r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Vn(e,n):void 0}}function Vn(e,n){(n==null||n>e.length)&&(n=e.length);for(var r=0,t=Array(n);r<n;r++)t[r]=e[r];return t}var Y="xl",An="16rem",sa=function(n,r){if(!r)return"";var t=n.flatMap(function(l){return Array.isArray(l)?l:[l].concat(Rn(l.items))}).flatMap(function(l){return"items"in l&&l.items!==void 0?[l].concat(Rn(l.items)):l}).map(function(l){return l&&"href"in l&&l.href!==void 0?l.href:""}),i,a="",s=ia(t),c;try{for(s.s();!(c=s.n()).done;){var d=c.value;if(d===r){i=d;break}r!=null&&r.startsWith(d)&&d.length>a.length&&(a=d)}}catch(l){s.e(l)}finally{s.f()}return i||a};function la(e){var n=e.children,r=e.focusMode,t=r===void 0?!1:r,i=dn(!1),a=co(i,3),s=a[0],c=a[1],d=a[2];return o(Wt.Provider,{value:{focusMode:t,isMobileMenuOpen:s,openMobileMenu:c,closeMobileMenu:d},children:o(ca,{focusMode:t,children:n})})}function ca(e){var n=e.children,r=e.focusMode;return o("div",{css:ae({display:"grid",minHeight:"100vh",gridTemplateRows:"auto 1fr",gridTemplateColumns:bt(P({xs:"1fr"},Y,r?"1fr":"".concat(An," 1fr")))}),children:n})}function Xn(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,t)}return r}function ue(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?Xn(Object(r),!0).forEach(function(t){P(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Xn(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var de=1.5,fn="3.75rem",da={name:"1kn4ch8",styles:"margin-left:-0.5rem;margin-right:-0.5rem;overflow:hidden"};function ua(e){var n=e.badgeLabel,r=e.dividerPosition,t=e.logo,i=e.heading,a=e.hasAccountDetails,s=e.href,c=e.secondHref,d=e.secondLogo,l=e.subLine,f=Mn();return t&&d?u(w,{css:da,flexDirection:{xs:"column",lg:"row"},flexWrap:{xs:"wrap",xl:"nowrap"},gap:{xs:1,md:de},inline:!0,padding:.5,children:[u(w,{css:v({marginRight:a&&r==="after"?A(de):0},"",""),flexDirection:{xs:"column",sm:"row"},flexShrink:0,gap:de,children:[o(w,{alignSelf:{xs:"start",sm:"center"},as:f,color:"text",css:v(ue({" img, svg":{height:fn}},I.print.hidden),"",""),focusRingFor:"keyboard",href:s,children:t}),r==="between"&&o(on,{dividerPosition:r}),o(w,ue(ue({alignSelf:{xs:"start",sm:"center"},as:c?f:"span",color:"text",css:v(ue({" img, svg":{width:"100%"}},I.print.hidden),"",""),focusRingFor:"keyboard"},c&&{href:c}),{},{children:d}))]}),u(w,{css:r==="after"?P({},b.mediaQuery.min.lg,{marginLeft:"calc(-".concat(a?A(de):0," - ").concat(b.borderWidth.sm,"px)")}):void 0,gap:de,children:[r==="after"&&o(on,{dividerPosition:r}),u(D,{as:f,color:"text",css:v({textDecoration:"none",":hover":I.underline},"",""),focusRingFor:"keyboard",href:s,justifyContent:"center",children:[u(w,{alignItems:"flex-start",gap:.5,children:[o(x,{fontSize:"lg",fontWeight:"bold",children:i}),n&&o(Zn,{children:n})]}),l&&o(x,{color:"muted",fontSize:"xs",children:l})]})]})]}):u(w,{alignItems:{xs:"flex-start",md:"center"},as:f,color:"text",css:v({textDecoration:"none","&:hover":I.underline,svg:{display:"block",height:fn,flexShrink:0}},"",""),flexDirection:{xs:"column",md:"row"},focusRingFor:"keyboard",gap:{xs:1,md:0},href:s,paddingY:.5,children:[t,o(on,{singleLogo:!0}),u(w,{alignItems:"flex-start",flexDirection:"column",justifyContent:"center",maxWidth:b.maxWidth.bodyText,children:[u(w,{alignItems:"flex-start",gap:.5,children:[o(x,{fontSize:"lg",fontWeight:"bold",children:i}),n&&o(Zn,{children:n})]}),l&&o(x,{color:"muted",fontSize:"xs",children:l})]})]})}function Zn(e){var n=e.children;return o(M,{border:!0,borderWidth:"md",css:v({fontSize:"0.75rem",paddingTop:"2px",paddingBottom:"2px",borderColor:g.foregroundText,borderRadius:"2em"},"",""),fontWeight:"bold",paddingLeft:.5,paddingRight:.5,children:n})}var on=function(n){var r=n.dividerPosition,t=n.singleLogo;return o(M,{borderLeft:!0,css:v(ue({margin:t?"0 1rem":void 0},I.print.hidden),"",""),display:t?{xs:"none",md:"block"}:{xs:"none",sm:r==="between"?"block":void 0,lg:"block"},height:t?fn:void 0})},fa=["ref"];function Jn(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,t)}return r}function er(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?Jn(Object(r),!0).forEach(function(t){P(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Jn(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function pa(e){var n=e.children,r=e.name,t=e.secondaryText;return u(yo,{popoverOffset:-8,popoverPlacement:"bottom-end",children:[o(ba,{name:r,secondaryText:t}),n]})}var ha={name:"d3v9zr",styles:"overflow:hidden"},ga={name:"d3v9zr",styles:"overflow:hidden"},ma={name:"ozd7xs",styles:"flex-shrink:0"};function ba(e){var n=e.name,r=e.secondaryText,t=Oo(),i=t.isMenuOpen,a=Po(),s=a.ref,c=N(a,fa),d=p.useRef(0),l=Qe("sm");return p.useEffect(function(){d.current=window.innerWidth-document.documentElement.offsetWidth},[]),u(w,er(er({as:Ke,ref:s},c),{},{alignItems:"center",background:i?"shade":void 0,color:"action",css:ae({marginLeft:"auto",maxWidth:"calc(17.625rem - ".concat(d.current,"px)"),overflow:"hidden",svg:{transform:i?"rotate(180deg)":void 0,transition:l.transition},":hover":{backgroundColor:g.backgroundShade,"& > span:last-of-type > span:last-of-type":I.underline,svg:{transform:i?"rotate(180deg) ".concat(l.transform):l.transform}}}),focusRingFor:"keyboard",gap:1,justifyContent:"space-between",minHeight:"5.25rem",padding:1,children:[o(wn,{children:"Account menu"}),u(w,{alignItems:"center","aria-hidden":!0,as:"span",css:ha,gap:.5,width:"100%",children:[o(Ft,{name:n,size:"md",tone:"action"}),u(w,{as:"span",css:ga,flexDirection:"column",width:"100%",children:[o(x,{color:"action",css:I.truncate,fontSize:"xs",fontWeight:"bold",children:n}),r?o(x,{color:"muted",css:I.truncate,fontSize:"xs",children:r}):null]})]}),o(Sn,{css:ma,size:"sm",weight:"bold"})]}))}function nr(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,t)}return r}function an(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?nr(Object(r),!0).forEach(function(t){P(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):nr(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var va={name:"d3v9zr",styles:"overflow:hidden"};function $t(e){var n=e.name,r=e.secondaryText,t=e.href,i=e.dropdown,a=Mn(),s=p.useRef(0);if(p.useEffect(function(){s.current=window.innerWidth-document.documentElement.offsetWidth},[]),i)return o(pa,{name:n,secondaryText:r,children:i});var c=!!t;return u(w,an(an({as:"span"},c&&{as:a,href:t,focusRingFor:"keyboard"}),{},{alignItems:"center",css:ae(an({marginLeft:"auto",maxWidth:"calc(17.625rem - ".concat(s.current,"px)"),textDecoration:"none"},c&&{"&:hover":{"& > span > span":{textDecoration:"underline"}}})),flexShrink:0,gap:.5,minHeight:"5.25rem",textAlign:"right",children:[u(w,{as:"span",css:va,flexDirection:"column",children:[o(x,{color:"action",css:I.truncate,fontSize:"xs",fontWeight:"bold",children:n}),r?o(x,{color:"muted",css:I.truncate,fontSize:"xs",children:r}):null]}),o(Ft,{"aria-hidden":!0,name:n,size:"md",tone:"action"})]}))}function rr(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,t)}return r}function ya(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?rr(Object(r),!0).forEach(function(t){P(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):rr(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function Oa(e){var n=e.accountDetails,r=be(),t=r.focusMode,i=r.openMobileMenu;return u(w,{alignItems:"center",background:"body",display:P({xs:"flex"},Y,"none"),flexWrap:"wrap",justifyContent:t?"flex-end":"space-between",paddingLeft:.75,paddingRight:n!=null&&n.dropdown?.75:b.containerPadding,children:[t?null:o(Pa,{onClick:i}),n?o($t,ya({},n)):null]})}function Pa(e){var n=e.onClick,r=be(),t=r.isMobileMenuOpen,i=Qe();return u(w,{alignItems:"center","aria-expanded":t,"aria-haspopup":"dialog",as:Ke,color:"action",css:v({svg:{transition:i.transition},"&:hover":{backgroundColor:g.backgroundShade,textDecoration:"underline",svg:{transform:i.transform}}},"",""),flexDirection:"column",focusRingFor:"keyboard",fontSize:"xs",gap:.5,justifyContent:"center",minHeight:"5.25rem",onClick:n,paddingX:1,children:[o(Io,{"aria-hidden":!0}),o("span",{children:"Menu"})]})}function tr(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,t)}return r}function wa(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?tr(Object(r),!0).forEach(function(t){P(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):tr(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function ka(e){var n=e.accountDetails,r=e.background,t=r===void 0?"bodyAlt":r,i=e.badgeLabel,a=e.borderColor,s=a===void 0?"accent":a,c=e.dividerPosition,d=c===void 0?"after":c,l=e.heading,f=e.href,h=e.id,y=e.logo,k=e.palette,O=k===void 0?"dark":k,m=e.secondHref,C=e.secondLogo,S=e.subLine;return u(w,{as:"header",borderBottom:!0,borderBottomWidth:"xxl",borderColor:s,css:v(P({},b.mediaQuery.min[Y],{gridColumnStart:1,gridColumnEnd:3}),"",""),flexDirection:"column",id:h,palette:O,children:[u(w,{alignItems:"center",background:t,gap:1,justifyContent:"space-between",paddingX:b.containerPadding,paddingY:.5,width:"100%",children:[o(ua,{badgeLabel:i,dividerPosition:d,hasAccountDetails:!!n,heading:l,href:f,logo:y,secondHref:m,secondLogo:C,subLine:S}),o(M,{display:P({xs:"none"},Y,"flex"),children:n?o($t,wa({},n)):null})]}),o(Oa,{accountDetails:n})]})}var Ca=["endElement","icon","isActive","items","label","level"];function or(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,t)}return r}function R(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?or(Object(r),!0).forEach(function(t){P(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):or(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var xa=function e(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return function(t){var i,a,s="href"in t&&t.href===n,c=s||Dn(t.items,n);return R(R({},t),{},{isActive:c,items:c||(i=t.items)!==null&&i!==void 0&&i.length?t==null||(a=t.items)===null||a===void 0?void 0:a.map(e(n,r+1)):void 0,level:r+1})}},ir=function(n){var r=n.activePath,t=n.background,i=n.items,a=n.subLevelVisible;return o(D,{"aria-label":"main",as:"nav",paddingBottom:1.5,children:o(D,{as:"ul",children:i.map(function(s,c){var d,l,f=c===0,h=(Array.isArray(s)?s:s.items).map(xa(r)),y=Array.isArray(s)?!1:!!(!((d=s.options)===null||d===void 0)&&d.disableGroupPadding),k=i[c-1],O=k?Array.isArray(k)?!1:!!(!((l=k.options)===null||l===void 0)&&l.disableGroupPadding):!1;return u(p.Fragment,{children:[f?null:o(Ia,{disablePaddingBottom:y,disablePaddingTop:O}),h.map(function(m,C){var S=Dn(m.items,r),L=a==="always"||S;return o(_t,{activePath:r,background:t,isActiveGroup:S,isOpen:L,item:m,subLevelVisible:a},C)})]},c)})})})},Sa={name:"1ff36h2",styles:"flex-grow:1"};function _t(e){var n=e.activePath,r=e.background,t=e.isActiveGroup,i=e.isOpen,a=e.item,s=e.subLevelVisible,c=Mn(),d=a.endElement,l=a.icon,f=a.isActive,h=a.items,y=a.label,k=a.level,O=N(a,Ca),m=be(),C=m.closeMobileMenu,S=(h==null?void 0:h.length)||0,L=S>0&&s!=="always";if("href"in a){var B,E,F,_=a.href===n;return u(sn,{background:r,hasEndElement:!!d,isActive:t,isCurrentPage:_,isOpen:i,level:a.level,onClick:C,children:[u(c,R(R({"aria-current":_?"page":void 0},O),{},{children:[l&&k===1&&o(l,{color:"inherit"}),k===2&&o("span",{"aria-hidden":!0,children:"–"}),o("span",{css:Sa,children:y}),d,L&&(f?o(Sn,{"aria-hidden":!1,"aria-label":". Sub-level ".concat(S===1?"link":"links"," below."),size:"md"}):o(Lo,{"aria-hidden":!1,"aria-label":". Has ".concat(S," sub-level ").concat(S===1?"link":"links","."),size:"md"}))]})),!!(!((B=a.items)===null||B===void 0)&&B.length)&&(i||_)&&o(D,{as:"ul",children:(E=a.items)===null||E===void 0||(F=E.map)===null||F===void 0?void 0:F.call(E,function(re){var G;return o(_t,{activePath:n,background:r,isActiveGroup:!!f,isOpen:i,item:re,subLevelVisible:s},(G=re.label)===null||G===void 0?void 0:G.toString())})})]})}return"onClick"in a?o(sn,{background:r,hasEndElement:!!d,isActive:!1,isCurrentPage:!1,isOpen:!1,onClick:C,children:u(Ke,R(R({},O),{},{children:[l?o(l,{color:"inherit"}):null,o("span",{children:y}),d]}))}):o(sn,{background:r,hasEndElement:!1,isActive:!1,isCurrentPage:!1,isOpen:!1,children:o(D,{as:"span",gap:.25,children:y})})}function sn(e){var n=e.background,r=e.children,t=e.hasEndElement,i=e.isCurrentPage,a=e.isActive,s=e.isOpen,c=e.level,d=e.onClick;return o("li",{css:v({"> a, > button, > span":{width:"100%",boxSizing:"border-box",wordBreak:"break-word",paddingTop:A(1),paddingBottom:A(1),paddingLeft:A(c===2?3:1.5),paddingRight:A(1),"& > svg":{flexShrink:0}},"> a, > button":R(R(R(R({position:"relative",display:"flex",alignItems:"center",gap:A(.75),color:a&&c!==2||i?g.foregroundText:g.foregroundAction},(a||i||s)&&{fontWeight:i?b.fontWeight.bold:b.fontWeight.normal,background:i?g.selectedMuted:void 0,"&::before":R(R(R({content:"''",position:"absolute",top:0,left:0,bottom:0,borderLeftStyle:"solid",borderLeftWidth:b.borderWidth.xl},i&&{borderLeftColor:g.selected}),!i&&a&&{borderLeftColor:g.borderMuted}),!i&&!a&&s&&{borderLeft:"none"})}),t&&{"& > :last-child":{marginLeft:"auto"}}),{},{"&:hover":P({background:g[n==="body"?"backgroundShade":"backgroundShadeAlt"],color:g.foregroundText},"& > span:nth-of-type(".concat(c,")"),I.underline)},uo),{},{":focus-visible":{zIndex:b.zIndex.elevated,outlineOffset:"-".concat(I.outline.outlineWidth),"&::before":{zIndex:-1}}}),"> span":{color:g.foregroundText},"> a":{textDecoration:"none"}},"",""),onClick:d,children:r})}function Ia(e){var n=e.disablePaddingTop,r=e.disablePaddingBottom;return o(M,{"aria-hidden":!0,as:"li",paddingBottom:r?0:1,paddingTop:n?0:1,children:o("hr",{css:v({boxSizing:"content-box",height:0,margin:0,overflow:"visible",border:"none",borderTopWidth:b.borderWidth.sm,borderTopStyle:"solid",borderColor:g.borderMuted,width:"100%"},"","")})})}function Dn(e,n){return e!=null&&e.length&&n?e.some(function(r){return"href"in r&&r.href===n||"items"in r&&Dn(r.items,n)}):!1}var La={name:"qvn77x",styles:"inset:0;overflow-y:auto;position:fixed"};function Ma(e){var n=e.children,r=e.palette,t=be(),i=t.isMobileMenuOpen,a=t.closeMobileMenu,s=Lt(),c=p.useState(!0),d=c[0],l=c[1],f=Rt();p.useEffect(function(){i&&l(!1)},[i]),p.useEffect(function(){var O=function(C){C.code==="Escape"&&(C.preventDefault(),C.stopPropagation(),a())};return window.addEventListener("keydown",O),function(){return window.removeEventListener("keydown",O)}},[a]);var h=kn(f?i:!1),y=h.modalContainerRef;if(!f||!Cn())return null;var k=i?!0:!d;return Ln.createPortal(u(yt,{children:[i&&o(Aa,{}),u("div",{ref:y,children:[o("div",{css:v({pointerEvents:"none",position:"absolute",opacity:i?1:0,transition:i?"none":"opacity ".concat(s?"1ms":"150ms")},"",""),"data-app-layout-sidebar":"transitioner",onTransitionEnd:function(){l(!0)}}),o(Da,{isOpen:i,onClick:a,prefersReducedMotion:s}),o(M,{css:v({bottom:0,left:0,position:"fixed",top:0,transform:"translateX(".concat(i?"0":"-100%",")"),transition:"transform ".concat(s?"1ms":"150ms"," ease"),zIndex:b.zIndex.dialog},"",""),display:P({},Y,"none"),width:An,children:k&&o(xn,{returnFocus:!0,children:u(M,{"aria-label":"Menu","aria-modal":!0,background:"shade",css:La,display:P({},Y,"none"),palette:r,role:"dialog",children:[o(ja,{onClick:a}),n]})})})]})]}),document.body)}function Aa(){return o(On,{styles:v(P({body:{overflow:"hidden"}},b.mediaQuery.min[Y],{body:{overflow:"unset"}}),"","")})}function Da(e){var n=e.isOpen,r=e.onClick,t=e.prefersReducedMotion;return o("div",{css:v(P({backgroundColor:g.overlay,display:"block",inset:0,opacity:n?1:0,pointerEvents:n?"all":"none",position:"fixed",transition:"opacity ".concat(t?"1ms":"150ms"," ease"),zIndex:b.zIndex.overlay},b.mediaQuery.min[Y],{display:"none"}),"",""),onClick:r})}function ja(e){var n=e.onClick,r=Qe();return o(w,{alignItems:"center",borderBottom:!0,borderColor:"muted",flexShrink:0,paddingLeft:1,children:u(w,{alignItems:"center",as:Ke,color:"action",css:v({svg:{transition:r.transition},":focus":{outlineOffset:"-".concat(I.outline.outlineWidth)},":hover svg":{transform:r.transform}},"",""),flexDirection:"column",focusRingFor:"keyboard",fontSize:"xs",gap:.5,onClick:n,padding:1,children:[o(Ve,{}),o("span",{"aria-hidden":!0,children:"Close"}),o(wn,{children:"Close menu"})]})})}function ar(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,t)}return r}function Oe(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?ar(Object(r),!0).forEach(function(t){P(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ar(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function sr(e){var n=e.activePath,r=e.background,t=r===void 0?"bodyAlt":r,i=e.items,a=e.palette,s=e.subLevelVisible,c=s===void 0?"whenActive":s,d=be(),l=d.focusMode,f=sa(i,n),h={activePath:f,items:i,subLevelVisible:c};return u(p.Fragment,{children:[o(D,{background:t,borderColor:"muted",borderRight:!0,css:v(P({display:"none",width:An},b.mediaQuery.min[Y],{display:l?"none":"flex"}),"",""),flexGrow:1,gap:1,palette:a,children:o(ir,Oe(Oe({},h),{},{background:t}))}),o(Ma,{palette:a,children:o(ir,Oe(Oe({},h),{},{background:"bodyAlt"}))})]})}var Ba={name:"ovk77c",styles:"min-width:0"};function Ea(e){var n=e.children;return o(w,{css:Ba,flexDirection:"column",children:n})}var Ra={name:"xdvdnl",styles:"margin-top:auto"};function Ta(e){var n=e.background,r=n===void 0?"body":n,t=e.children,i=e.id,a=e.maxWidth,s=e.palette;return o(M,{as:"footer",background:r,css:Ra,id:i,palette:s,children:o(go,{maxWidth:a,children:o(D,{borderColor:"muted",borderTop:!0,borderTopWidth:"xl",gap:1.5,paddingY:3,width:"100%",children:t})})})}function za(){return o("hr",{"aria-hidden":!0,css:v({boxSizing:"content-box",height:0,margin:0,overflow:"visible",border:"none",borderTopWidth:1,borderTopStyle:"solid",borderColor:g.borderMuted,width:"100%"},"","")})}const K={account:"/account",profile:"/account/profile",dashboard:"/account/dashboard",people:"/account/manage-people",inbox:"/account/messages",linkBusiness:"/account/link-a-business",acceptInvite:"/account/invitation/accept"},Fa=bo(u(p.Fragment,{children:[o("path",{d:"M4 2V22L6 21L8 22L10 21L12 22L14 21L16 22L18 21L20 22V2L18 3L16 2L14 3L12 2L10 3L8 2L6 3L4 2Z"}),o("path",{d:"M16 8H10C9.46957 8 8.96086 8.21071 8.58579 8.58579C8.21071 8.96086 8 9.46957 8 10C8 10.5304 8.21071 11.0391 8.58579 11.4142C8.96086 11.7893 9.46957 12 10 12H14C14.5304 12 15.0391 12.2107 15.4142 12.5858C15.7893 12.9609 16 13.4696 16 14C16 14.5304 15.7893 15.0391 15.4142 15.4142C15.0391 15.7893 14.5304 16 14 16H8"}),o("path",{d:"M12 17.5V6.5"})]}),"PaymentIcon"),Wa=[{href:"/about",label:"About"},{href:"/about/contact-us",label:"Contact us"},{href:"/help",label:"Help"},{href:"https://www.agriculture.gov.au/about/commitment/accessibility",rel:"external",label:"Accessibility"},{href:"https://www.agriculture.gov.au/about/disclaimer",rel:"external",label:"Disclaimer"},{href:"/privacy",label:"Privacy"}],H={dashboard:{label:"Dashboard",icon:Ao,href:K.dashboard},people:{label:"People",icon:Do,href:K.people},establishments:{label:"Establishments",icon:In,href:"/establishments"},intelligence:{label:"Data and Insights",icon:jo,href:"/intelligence"},compliance:{label:"Compliance",icon:Bo,href:"/compliance"},quotas:{label:"Quotas",icon:St,href:"/quota"},exportSystems:{label:"Export systems",icon:Eo,href:"/export-systems"},licences:{label:"Licences",icon:Ro,href:"/licences"},invoices:{label:"Invoices and payments",icon:Fa,href:"/inexs"}},Nt=e=>{var n,r,t,i,a,s;return[H.dashboard,...(n=e==null?void 0:e.features)!=null&&n.people?[H.people]:[],H.establishments,H.intelligence,H.compliance,...(r=e==null?void 0:e.features)!=null&&r.quotas?[H.quotas]:[],...((t=e==null?void 0:e.features)==null?void 0:t.exportSystems)??((i=e==null?void 0:e.features)==null?void 0:i.exportDocumentation)?[H.exportSystems]:[],...(a=e==null?void 0:e.features)!=null&&a.licences?[H.licences]:[],...(s=e==null?void 0:e.features)!=null&&s.invoices?[H.invoices]:[]]};function $a({onSignOutClick:e,features:n}){return[Nt({features:n}),[{label:u(w,{as:"span",alignItems:"center",gap:.5,children:["Help",o(vo,{}),o(Mo,{weight:"regular",size:"sm"})]}),icon:Ct,href:"/help",target:"_blank",rel:"noopener"}],[{label:"Sign out",onClick:e,icon:xt}]]}const _a=(e,n)=>{var i;if(!n)return;let r,t;for(const a of e){if(a.href===n){r=a;break}n.startsWith(a.href)&&a.href.length>(((i=t==null?void 0:t.href)==null?void 0:i.length)??0)&&(t=a)}return r||t},Na=e=>n=>n===!0||n==e,qt=(e,n)=>r=>Na(e)(r)?n:{},qa=qt("header",{palette:"light",borderColor:"selected"}),lr=qt("sidebar",{background:"body"});var Ga={neutral:g.foregroundMuted,action:g.foregroundAction};function cr(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,t)}return r}function Ha(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?cr(Object(r),!0).forEach(function(t){P(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):cr(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var Ua=function(n){var r=n.value,t=n.max,i=n.tone,a=n["aria-hidden"],s=Ga[i];return o(x,{alignItems:"center","aria-hidden":a,css:v(Ha({color:g.backgroundBody,backgroundColor:s,minWidth:A(1.5),borderRadius:A(.75)},Ot.exactColor),"",""),display:"inline-flex",fontSize:"sm",height:A(1.5),highContrastOutline:!0,justifyContent:"center",lineHeight:"nospace",paddingX:.5,rounded:!0,children:t===void 0||r<=t?r:"".concat(t,"+")})};const Ya=e=>{var n;return((n=e==null?void 0:e.linkedBusinesses)==null?void 0:n.map(r=>{var t;return{...r,selected:((t=e==null?void 0:e.selectedBusiness)==null?void 0:t.partyId)===r.partyId,setSelected:()=>e.setSelectedBusiness(r)}}))??[]},Ka=new Set(["MANAGER","PRINCIPAL_AUTHORITY_OWNER","USER"]),Qa=e=>e!=null&&e.roleName?Ka.has(e.roleName):!1,Va=e=>e.businesses.length===0?u(un,{label:"Get started",children:[e!=null&&e.preventAddBusiness?null:o(pe,{href:K.linkBusiness,children:"Add a business to the Export Service"}),o(pe,{href:K.acceptInvite,children:"Accept an invite"})]}):u(un,{label:"Businesses",children:[e.businesses.slice(0,3).map(n=>o(Co,{checked:n.selected??!1,secondaryText:n.formattedPartyExternalId,onClick:e.onSelectBusiness(n),children:n.partyDisplayName},n.partyId)),e.businesses.length>3?o(pe,{href:"/account",endElement:o(It,{}),children:"View all businesses"}):null]}),Xa=e=>{const n=t=>()=>{var i;return(i=t==null?void 0:t.setSelected)==null?void 0:i.call(t)},r=Ya(e.businessDetails);return u(ko,{palette:"light",children:[o(Va,{businesses:r,onSelectBusiness:n,preventAddBusiness:e.preventAddBusiness}),o(Tn,{}),u(un,{label:"My account",children:[o(pe,{href:K.inbox,icon:To,endElement:typeof e.unreadMessageCount=="number"&&e.unreadMessageCount>0?u("span",{children:[o(Ua,{tone:"action",value:e.unreadMessageCount,max:99,"aria-hidden":!0}),u(wn,{children:[", ",e.unreadMessageCount," unread"]})]}):void 0,children:"Inbox"}),o(pe,{href:K.profile,icon:zo,children:"Profile and settings"})]}),o(Tn,{}),o(wo,{onClick:e.onSignOutClick,icon:xt,children:"Sign out"})]})},Za=e=>(e==null?void 0:e.selectedBusiness)===void 0?[]:[{options:{disableGroupPadding:!0},items:[{label:"Back to my account",icon:Fo,href:"/account"}]},{options:{disableGroupPadding:!0},items:[{label:u(p.Fragment,{children:[o(x,{fontWeight:"bold",fontSize:"xs",children:e.selectedBusiness.partyDisplayName}),o(x,{color:"muted",fontSize:"xs",children:e.selectedBusiness.formattedPartyExternalId})]})}]}],Ja=e=>{var n;return e.selectedBusiness?{...e==null?void 0:e.features,people:((n=e==null?void 0:e.features)==null?void 0:n.people)??Qa(e.selectedBusiness)}:e.features};var es=["children"],ns=["as","children","direction","className"];function dr(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,t)}return r}function qe(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?dr(Object(r),!0).forEach(function(t){P(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):dr(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var Gt=function(n){var r=n.children,t=N(n,es);return o(rs,qe(qe({as:Ne},t),{},{children:r}))},rs=function(n){var r=n.as,t=n.children,i=n.direction,a=n.className,s=N(n,ns),c=ts[i],d=i==="left",l=Qe("sm");return u(w,qe(qe({alignItems:"center",as:r,className:a,css:v({alignSelf:"flex-start",svg:{transition:l.transition},":hover svg":{transform:l.transform}},"",""),focusRingFor:"keyboard",fontFamily:"body",fontWeight:"normal",gap:.5,inline:!0,link:!0},s),{},{children:[d?o(c,{size:"sm"}):null,t,d?null:o(c,{size:"sm"})]}))},ts={up:Wo,right:It,down:$o,left:_o};function os(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.focusOnMount,r=e.focusOnUpdate,t=e.forwardedRef,i=p.useRef(null),a=t||i;return p.useEffect(function(){var s,c;!r&&!n||!("current"in a)||Array.isArray(r)&&r.filter(Boolean).length===0||a==null||(s=a.current)===null||s===void 0||(c=s.focus)===null||c===void 0||c.call(s)},[r]),a}var is=function(n){var r=n.as,t=r===void 0?"h2":r,i=n.children,a=n.hasDismissButton,s=n.hasCloseButton;return o(x,{as:t,css:ae(P({marginRight:s||a?"2.5rem":void 0},b.mediaQuery.min.sm,{marginRight:"0"})),fontSize:"lg",fontWeight:"bold",lineHeight:"heading",children:i})},as=function(n){var r,t=n.onClick;return o(U,{"aria-label":"Close",css:ae((r={position:"absolute",top:"1.5rem",right:"1.5rem",flexShrink:0},P(r,b.mediaQuery.min.sm,{position:"relative",top:"unset",right:"unset"}),P(r,"& > span:first-of-type",P({display:"none"},b.mediaQuery.min.sm,{display:"block"})),r)),iconAfter:Ve,onClick:t,variant:"text",children:"Close"})};function ur(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,t)}return r}function ss(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?ur(Object(r),!0).forEach(function(t){P(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ur(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var ls=p.forwardRef(function(n,r){var t=n.id,i=n.focusOnMount,a=n.focusOnUpdate,s=n.role,c=n.children,d=n.onClose,l=n.onDismiss,f=n.title,h=n.tone,y=n.tabIndex,k=os({focusOnMount:i,focusOnUpdate:a,forwardedRef:r}),O=ji(d,l),m=cs[h],C=m.fg,S=m.bg,L=m.icon;return u(w,{css:v({backgroundColor:S,position:"relative"},"",""),focusRingFor:"all",highContrastOutline:!0,id:t,ref:k,role:s,rounded:!0,tabIndex:y??(i||a?-1:void 0),children:[o(w,{alignItems:"center",css:v(ss({borderTopLeftRadius:b.borderRadius,borderBottomLeftRadius:b.borderRadius,backgroundColor:C,color:g.backgroundBody},Ot.exactColor),"",""),padding:.5,children:L}),u(w,{alignItems:"flex-start",css:v(P({marginRight:O&&!f?"3rem":void 0},b.mediaQuery.min.sm,{marginRight:"0"}),"",""),flexGrow:1,gap:1,padding:1.5,children:[u(w,{alignItems:"flex-start",flexDirection:"column",flexGrow:1,gap:1,children:[f?p.isValidElement(f)?f:o(is,{hasCloseButton:!!O,children:f}):null,c]}),O?o(as,{onClick:O}):null]})]})}),cs={success:{fg:g.systemSuccess,bg:g.systemSuccessMuted,icon:o(No,{"aria-hidden":"false","aria-label":"Success"})},error:{fg:g.systemError,bg:g.systemErrorMuted,icon:o(kt,{"aria-hidden":"false","aria-label":"Error"})},info:{fg:g.systemInfo,bg:g.systemInfoMuted,icon:o(qo,{"aria-hidden":"false","aria-label":"Information"})},warning:{fg:g.systemWarning,bg:g.systemWarningMuted,icon:o(Go,{"aria-hidden":"false","aria-label":"Warning"})}};const ds=["IP1","IP2","IP3","IP4"],Ht=Array.from(ds),us=e=>{const n=[];return e.forEach(r=>n.unshift(r)),n},pn=new Set(Ht),fr=new Set(us(Ht)),fs={descriptor:"Unknown"},ps={IP1:{level:"IP1",descriptor:"Basic"},IP2:{level:"IP2",descriptor:"Standard"},IP3:{level:"IP3",descriptor:"Strong"},IP4:{level:"IP4",descriptor:"Strong"}},hs=e=>pn.has(e),Ge=(e,n)=>{const r=e&&hs(e)?ps[e]:fs;return n!=null&&n.short||r.level===void 0?r.descriptor:`${r.descriptor} (${r.level})`},Ut=(e,n)=>Array.from(e).filter(r=>n.has(r)),Yt=(e,n)=>Array.from(e).filter(r=>!n.has(r)),fe=e=>{const n=new Set(e??[]);return[...Ut(fr,n),...Yt(n,fr)][0]},Kt=e=>{const n=new Set(e??[]);return[...Ut(pn,n),...Yt(n,pn)][0]},pr=e=>e===void 0?[]:Array.isArray(e)?e:[e],gs=(e,n)=>{if(n===void 0||e.length===0)return!0;const r=new Set(n);return e.some(t=>r.has(t))},hr=e=>((e==null?void 0:e.trim())??"")==="",Qt=()=>o(te,{children:u(Qo,{title:"Need more help?",children:[u(x,{children:["Email"," ",o(Ne,{href:"mailto:exportservice@aff.gov.au",children:"exportservice@aff.gov.au"})]}),u(x,{children:["Call ",o(Ne,{href:"tel:1800571125",children:"1800 571 125"}),", Monday to Friday, 9 am to 5 pm AEST"]})]})}),ms=e=>o($,{children:u(D,{gap:3,children:[o(te,{children:o(Gt,{href:K.dashboard,direction:"left",children:"Back to Dashboard"})}),u(q,{children:[o("h1",{children:"Single names in the Export Service"}),o("p",{children:"If you are legally known by a single name, you can use it to access an Export Service account. Other services we offer may not accept a single name and you will need to use a given and family name."}),o("p",{children:"Contact support if you need more help."})]}),o(wt,{}),o(Qt,{})]})}),bs=e=>{const n=Ge(e.providedProofingLevel),r=Ge(e.requiredProofingLevel,{short:!0});return o($,{children:u(D,{gap:3,children:[o(te,{children:o(Gt,{href:K.dashboard,direction:"left",children:"Back"})}),u(q,{children:[o("h1",{children:e.activeApp??"Use a higher identity strength"}),o(M,{className:fo,children:u(ls,{tone:"info",title:"You can't access this feature",children:["Sign in with myID and use a ‘",r,"’ identity strength or higher to access this feature."]})}),o("h2",{children:"Review your profile and settings"}),u("p",{children:["Your current identity strength is ",n,". To access this feature you must add myID to your account from your"," ",o(Ne,{href:"TODO",children:"Profile and settings"}),", then sign in."]})]}),o(wt,{}),o(Qt,{})]})})},Vt={MissingName:ms,ProofMissing:bs},vs=({claims:e,errorComponents:n,requiredProofingLevel:r,authDetails:t,activeApp:i,children:a})=>{const s=n.MissingGivenName??n.MissingName,c=n.MissingFamilyName??n.MissingName,d=n.ProofMissing,l=pr(r),f=pr(t==null?void 0:t.proofingLevel);if(!gs(l,f)){const h=Kt(l),y=fe(f);return o(d,{requiredProofingLevel:h,providedProofingLevel:y,activeApp:i})}return e===void 0?o(p.Fragment,{children:a}):hr(e==null?void 0:e.given_name)?o(s,{children:a}):hr(e==null?void 0:e.family_name)?o(c,{children:a}):o(p.Fragment,{children:a})},ys=Object.values,Os={IP1:{AL1:"urn:id.gov.au:tdif:acr:ip1:cl1",AL2:"urn:id.gov.au:tdif:acr:ip1:cl2",AL3:"urn:id.gov.au:tdif:acr:ip1:cl3",PlusAL1:"urn:id.gov.au:tdif:acr:ip1p:cl1",PlusAL2:"urn:id.gov.au:tdif:acr:ip1p:cl2",PlusAL3:"urn:id.gov.au:tdif:acr:ip1p:cl3"},IP2:{AL2:"urn:id.gov.au:tdif:acr:ip2:cl2",AL3:"urn:id.gov.au:tdif:acr:ip2:cl3",PlusAL2:"urn:id.gov.au:tdif:acr:ip2p:cl2",PlusAL3:"urn:id.gov.au:tdif:acr:ip2p:cl3"},IP3:{AL2:"urn:id.gov.au:tdif:acr:ip3:cl2",AL3:"urn:id.gov.au:tdif:acr:ip3:cl3"},IP4:{AL3:"urn:id.gov.au:tdif:acr:ip4:cl3"}},Ps=["IP1","IP2","IP3","IP4"],ws=Object.fromEntries(Ps.map((e,n,r)=>[e,r.slice(0,n)])),Pe=e=>Object.fromEntries(ys(Os[e]).map(n=>[n,e])),$e={...Pe("IP1"),...Pe("IP2"),...Pe("IP3"),...Pe("IP4")},ks=e=>e in $e,Cs=e=>e===void 0?[]:Array.isArray(e)?e:[e],_e=(e,n)=>{const t=Cs(e.AARM_acr).flatMap(i=>ks(i)?n!=null&&n.requireExactProofingMatch?[$e[i]]:[$e[i],...ws[$e[i]]]:n!=null&&n.removeUnknownACRs?[]:[i]);return Array.from(new Set(t))},xs=e=>(e==null?void 0:e.credentialType)==="myGovID"?"myID":(e==null?void 0:e.credentialType)==="B2CLocalUser"?"B2CLocalUser":void 0,Ss=(e,n)=>e?{provider:xs(e),proofingLevel:_e(e,n)}:void 0,Xt=p.createContext(void 0),Zt=()=>{var e;return(e=p.useContext(Xt))==null?void 0:e.onSignOutClick};function Z({activePath:e,children:n,focusMode:r=!1,handleSignOut:t,mainContentId:i="main-content",unreadMessageCount:a,userName:s,businessDetails:c,claims:d,errorComponents:l,features:f,requiredProofingLevel:h,authDetails:y,sidebarItems:k,sidebarSubLevelVisible:O,headerProps:m,internal:C}){var En;const S=p.useMemo(()=>new Date().getFullYear(),[]),L=p.useContext(Uo),[B,E,F]=dn(!1),[_,re,G]=dn(!1),le=E,ce=t,ve=Ja({features:f,selectedBusiness:c==null?void 0:c.selectedBusiness}),io=p.useMemo(()=>Nt({features:ve}),[ve]),ao=p.useMemo(()=>[...Za(c),...$a({onSignOutClick:le,features:ve})],[le,c,ve]),so=Ss(d),ye=y??so,nn=_a(io,e),lo=(ye==null?void 0:ye.provider)==="B2CLocalUser";return o(la,{focusMode:r,children:o(Xt.Provider,{value:{onSignOutClick:le},children:u(te,{children:[o(ka,{href:(m==null?void 0:m.href)??"/account",heading:(m==null?void 0:m.heading)??"Export Service",subLine:(m==null?void 0:m.subLine)??"Supporting Australian agricultural exports",badgeLabel:(m==null?void 0:m.badgeLabel)??"Beta",logo:o(Yo,{}),accountDetails:s?{href:K.account,name:s,secondaryText:((En=c==null?void 0:c.selectedBusiness)==null?void 0:En.partyDisplayName)??"My account",dropdown:c?o(Xa,{businessDetails:c,unreadMessageCount:a,onSignOutClick:le,preventAddBusiness:lo}):void 0}:void 0,...qa(C)}),k?o(te,{...L,children:o(sr,{activePath:e,items:k,subLevelVisible:O,...lr(C)})}):o(sr,{activePath:e,items:ao,...lr(C)}),u(Ea,{children:[o(te,{...L,children:o("main",{id:i,tabIndex:-1,css:{"&:focus":{outline:"none"}},children:o(vs,{claims:d,authDetails:ye,requiredProofingLevel:h,errorComponents:{...Vt,...l},activeApp:nn==null?void 0:nn.label,children:n})})}),u(Ta,{children:[o("nav",{"aria-label":"footer",children:o(Ko,{links:Wa,horizontal:!0})}),o(za,{}),o(x,{fontSize:"xs",maxWidth:b.maxWidth.bodyText,children:"We acknowledge the traditional owners of country throughout Australia and recognise their continuing connection to land, waters and culture. We pay our respects to their Elders past, present and emerging."}),u(x,{fontSize:"xs",maxWidth:b.maxWidth.bodyText,children:["© ",S," Department of Agriculture, Fisheries and Forestry"]})]})]}),o(zt,{isOpen:B,onClose:F,title:"Do you want to sign out?",actions:u(Pn,{children:[o(U,{onClick:async()=>{re(),await ce(),G(),F()},loading:_,disabled:_,children:"Sign out"}),o(U,{variant:"secondary",onClick:F,children:"Cancel"})]}),children:o(x,{as:"p",children:"This will end your current session with the Export Service."})})]})})})}var Jt=Symbol.for("immer-nothing"),gr=Symbol.for("immer-draftable"),T=Symbol.for("immer-state");function W(e,...n){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var oe=Object.getPrototypeOf;function ie(e){return!!e&&!!e[T]}function J(e){var n;return e?eo(e)||Array.isArray(e)||!!e[gr]||!!((n=e.constructor)!=null&&n[gr])||Ze(e)||Je(e):!1}var Is=Object.prototype.constructor.toString();function eo(e){if(!e||typeof e!="object")return!1;const n=oe(e);if(n===null)return!0;const r=Object.hasOwnProperty.call(n,"constructor")&&n.constructor;return r===Object?!0:typeof r=="function"&&Function.toString.call(r)===Is}function He(e,n){Xe(e)===0?Reflect.ownKeys(e).forEach(r=>{n(r,e[r],e)}):e.forEach((r,t)=>n(t,r,e))}function Xe(e){const n=e[T];return n?n.type_:Array.isArray(e)?1:Ze(e)?2:Je(e)?3:0}function hn(e,n){return Xe(e)===2?e.has(n):Object.prototype.hasOwnProperty.call(e,n)}function no(e,n,r){const t=Xe(e);t===2?e.set(n,r):t===3?e.add(r):e[n]=r}function Ls(e,n){return e===n?e!==0||1/e===1/n:e!==e&&n!==n}function Ze(e){return e instanceof Map}function Je(e){return e instanceof Set}function V(e){return e.copy_||e.base_}function gn(e,n){if(Ze(e))return new Map(e);if(Je(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);const r=eo(e);if(n===!0||n==="class_only"&&!r){const t=Object.getOwnPropertyDescriptors(e);delete t[T];let i=Reflect.ownKeys(t);for(let a=0;a<i.length;a++){const s=i[a],c=t[s];c.writable===!1&&(c.writable=!0,c.configurable=!0),(c.get||c.set)&&(t[s]={configurable:!0,writable:!0,enumerable:c.enumerable,value:e[s]})}return Object.create(oe(e),t)}else{const t=oe(e);if(t!==null&&r)return{...e};const i=Object.create(t);return Object.assign(i,e)}}function jn(e,n=!1){return en(e)||ie(e)||!J(e)||(Xe(e)>1&&(e.set=e.add=e.clear=e.delete=Ms),Object.freeze(e),n&&Object.entries(e).forEach(([r,t])=>jn(t,!0))),e}function Ms(){W(2)}function en(e){return Object.isFrozen(e)}var As={};function ee(e){const n=As[e];return n||W(0,e),n}var ge;function ro(){return ge}function Ds(e,n){return{drafts_:[],parent_:e,immer_:n,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function mr(e,n){n&&(ee("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=n)}function mn(e){bn(e),e.drafts_.forEach(js),e.drafts_=null}function bn(e){e===ge&&(ge=e.parent_)}function br(e){return ge=Ds(ge,e)}function js(e){const n=e[T];n.type_===0||n.type_===1?n.revoke_():n.revoked_=!0}function vr(e,n){n.unfinalizedDrafts_=n.drafts_.length;const r=n.drafts_[0];return e!==void 0&&e!==r?(r[T].modified_&&(mn(n),W(4)),J(e)&&(e=Ue(n,e),n.parent_||Ye(n,e)),n.patches_&&ee("Patches").generateReplacementPatches_(r[T].base_,e,n.patches_,n.inversePatches_)):e=Ue(n,r,[]),mn(n),n.patches_&&n.patchListener_(n.patches_,n.inversePatches_),e!==Jt?e:void 0}function Ue(e,n,r){if(en(n))return n;const t=n[T];if(!t)return He(n,(i,a)=>yr(e,t,n,i,a,r)),n;if(t.scope_!==e)return n;if(!t.modified_)return Ye(e,t.base_,!0),t.base_;if(!t.finalized_){t.finalized_=!0,t.scope_.unfinalizedDrafts_--;const i=t.copy_;let a=i,s=!1;t.type_===3&&(a=new Set(i),i.clear(),s=!0),He(a,(c,d)=>yr(e,t,i,c,d,r,s)),Ye(e,i,!1),r&&e.patches_&&ee("Patches").generatePatches_(t,r,e.patches_,e.inversePatches_)}return t.copy_}function yr(e,n,r,t,i,a,s){if(ie(i)){const c=a&&n&&n.type_!==3&&!hn(n.assigned_,t)?a.concat(t):void 0,d=Ue(e,i,c);if(no(r,t,d),ie(d))e.canAutoFreeze_=!1;else return}else s&&r.add(i);if(J(i)&&!en(i)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;Ue(e,i),(!n||!n.scope_.parent_)&&typeof t!="symbol"&&Object.prototype.propertyIsEnumerable.call(r,t)&&Ye(e,i)}}function Ye(e,n,r=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&jn(n,r)}function Bs(e,n){const r=Array.isArray(e),t={type_:r?1:0,scope_:n?n.scope_:ro(),modified_:!1,finalized_:!1,assigned_:{},parent_:n,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let i=t,a=Bn;r&&(i=[t],a=me);const{revoke:s,proxy:c}=Proxy.revocable(i,a);return t.draft_=c,t.revoke_=s,c}var Bn={get(e,n){if(n===T)return e;const r=V(e);if(!hn(r,n))return Es(e,r,n);const t=r[n];return e.finalized_||!J(t)?t:t===ln(e.base_,n)?(cn(e),e.copy_[n]=yn(t,e)):t},has(e,n){return n in V(e)},ownKeys(e){return Reflect.ownKeys(V(e))},set(e,n,r){const t=to(V(e),n);if(t!=null&&t.set)return t.set.call(e.draft_,r),!0;if(!e.modified_){const i=ln(V(e),n),a=i==null?void 0:i[T];if(a&&a.base_===r)return e.copy_[n]=r,e.assigned_[n]=!1,!0;if(Ls(r,i)&&(r!==void 0||hn(e.base_,n)))return!0;cn(e),vn(e)}return e.copy_[n]===r&&(r!==void 0||n in e.copy_)||Number.isNaN(r)&&Number.isNaN(e.copy_[n])||(e.copy_[n]=r,e.assigned_[n]=!0),!0},deleteProperty(e,n){return ln(e.base_,n)!==void 0||n in e.base_?(e.assigned_[n]=!1,cn(e),vn(e)):delete e.assigned_[n],e.copy_&&delete e.copy_[n],!0},getOwnPropertyDescriptor(e,n){const r=V(e),t=Reflect.getOwnPropertyDescriptor(r,n);return t&&{writable:!0,configurable:e.type_!==1||n!=="length",enumerable:t.enumerable,value:r[n]}},defineProperty(){W(11)},getPrototypeOf(e){return oe(e.base_)},setPrototypeOf(){W(12)}},me={};He(Bn,(e,n)=>{me[e]=function(){return arguments[0]=arguments[0][0],n.apply(this,arguments)}});me.deleteProperty=function(e,n){return me.set.call(this,e,n,void 0)};me.set=function(e,n,r){return Bn.set.call(this,e[0],n,r,e[0])};function ln(e,n){const r=e[T];return(r?V(r):e)[n]}function Es(e,n,r){var i;const t=to(n,r);return t?"value"in t?t.value:(i=t.get)==null?void 0:i.call(e.draft_):void 0}function to(e,n){if(!(n in e))return;let r=oe(e);for(;r;){const t=Object.getOwnPropertyDescriptor(r,n);if(t)return t;r=oe(r)}}function vn(e){e.modified_||(e.modified_=!0,e.parent_&&vn(e.parent_))}function cn(e){e.copy_||(e.copy_=gn(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var Rs=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(n,r,t)=>{if(typeof n=="function"&&typeof r!="function"){const a=r;r=n;const s=this;return function(d=a,...l){return s.produce(d,f=>r.call(this,f,...l))}}typeof r!="function"&&W(6),t!==void 0&&typeof t!="function"&&W(7);let i;if(J(n)){const a=br(this),s=yn(n,void 0);let c=!0;try{i=r(s),c=!1}finally{c?mn(a):bn(a)}return mr(a,t),vr(i,a)}else if(!n||typeof n!="object"){if(i=r(n),i===void 0&&(i=n),i===Jt&&(i=void 0),this.autoFreeze_&&jn(i,!0),t){const a=[],s=[];ee("Patches").generateReplacementPatches_(n,i,a,s),t(a,s)}return i}else W(1,n)},this.produceWithPatches=(n,r)=>{if(typeof n=="function")return(s,...c)=>this.produceWithPatches(s,d=>n(d,...c));let t,i;return[this.produce(n,r,(s,c)=>{t=s,i=c}),t,i]},typeof(e==null?void 0:e.autoFreeze)=="boolean"&&this.setAutoFreeze(e.autoFreeze),typeof(e==null?void 0:e.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){J(e)||W(8),ie(e)&&(e=Ts(e));const n=br(this),r=yn(e,void 0);return r[T].isManual_=!0,bn(n),r}finishDraft(e,n){const r=e&&e[T];(!r||!r.isManual_)&&W(9);const{scope_:t}=r;return mr(t,n),vr(void 0,t)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,n){let r;for(r=n.length-1;r>=0;r--){const i=n[r];if(i.path.length===0&&i.op==="replace"){e=i.value;break}}r>-1&&(n=n.slice(r+1));const t=ee("Patches").applyPatches_;return ie(e)?t(e,n):this.produce(e,i=>t(i,n))}};function yn(e,n){const r=Ze(e)?ee("MapSet").proxyMap_(e,n):Je(e)?ee("MapSet").proxySet_(e,n):Bs(e,n);return(n?n.scope_:ro()).drafts_.push(r),r}function Ts(e){return ie(e)||W(10,e),oo(e)}function oo(e){if(!J(e)||en(e))return e;const n=e[T];let r;if(n){if(!n.modified_)return n.base_;n.finalized_=!0,r=gn(e,n.scope_.immer_.useStrictShallowCopy_)}else r=gn(e,!0);return He(r,(t,i)=>{no(r,t,oo(i))}),n&&(n.finalized_=!1),r}var z=new Rs,we=z.produce;z.produceWithPatches.bind(z);z.setAutoFreeze.bind(z);z.setUseStrictShallowCopy.bind(z);z.applyPatches.bind(z);z.createDraft.bind(z);z.finishDraft.bind(z);const X=[{partyId:1,partyDisplayName:"Jefferson PTY LTD",formattedPartyExternalId:"ABN: 89 790 756 100",someExtraInfo:"our component allows this field but does not use it at all",roleDisplayName:"User",roleName:"USER"},{partyId:2,partyDisplayName:"Metaweb (agent role)",formattedPartyExternalId:"ABN: 89 790 756 100",someExtraInfo:"our component allows this field but does not use it at all",roleDisplayName:"Agent",roleName:"AGENT"},{partyId:3,partyDisplayName:"Fresh Produce Australia",formattedPartyExternalId:"ABN: 92 635 964 018",someExtraInfo:"our component allows this field but does not use it at all",roleDisplayName:"Principal Authority (Owner)",roleName:"PRINCIPAL_AUTHORITY_OWNER"},{partyId:4,partyDisplayName:"Fresh Produce Australia",formattedPartyExternalId:"ABN: 92 635 964 018",someExtraInfo:"our component allows this field but does not use it at all",roleDisplayName:"Manager",roleName:"MANAGER"}],Js={title:"AppLayout",component:Z,parameters:{layout:"fullscreen"},render:function(n){return u(p.Fragment,{children:[o(se,{links:[{href:"#main-content",label:"Skip to main content"}]}),o(Z,{...n,children:o($,{children:o(q,{children:o("h1",{children:"Page heading"})})})})]})}},zs=e=>new Promise(n=>setTimeout(n,e)),j=async()=>{await zs(2e3),alert("You have been signed out.")},ke={args:{focusMode:!1,userName:"Toto Wolff",unreadMessageCount:6,activePath:"/",handleSignOut:j}},Ce={args:{focusMode:!0,userName:"Toto Wolff",unreadMessageCount:6,activePath:"/",handleSignOut:j}},xe={args:{activePath:"/",focusMode:!1,handleSignOut:j},render:function(n){const[r,t]=p.useState(!1);return p.useEffect(()=>{setTimeout(()=>{t(!0)},1e3)},[]),u(p.Fragment,{children:[o(se,{links:[{href:"#main-content",label:"Skip to main content"}]}),o(Z,{...n,...r?{userName:"Toto Wolff",unreadMessageCount:6}:{},children:o($,{children:o(q,{children:o("h1",{children:"Page heading"})})})})]})}},Se={args:{focusMode:!1,userName:"Toto Wolff",unreadMessageCount:6,activePath:"/",handleSignOut:j},render:function(n){const[r,t]=p.useState({linkedBusinesses:X,selectedBusiness:X[1]}),[i,a]=p.useState({provider:"myID"}),s=d=>t(l=>({...l,selectedBusiness:d})),c=d=>()=>{const l=X.slice(0,d),f=l[0];t({selectedBusiness:f,linkedBusinesses:l})};return u(p.Fragment,{children:[o(se,{links:[{href:"#main-content",label:"Skip to main content"}]}),o(Z,{...n,businessDetails:{...r,setSelectedBusiness:s},authDetails:i,children:o($,{children:u(D,{gap:3,children:[o(q,{children:o("h1",{children:"Business dropdown configuration"})}),o(he,{label:"Number of linked businesses",block:!0,hideOptionalLabel:!0,children:Array.from(new Array(X.length+1).keys()).map(d=>{var l;return u(Nn,{checked:((l=r==null?void 0:r.linkedBusinesses)==null?void 0:l.length)===d,onChange:c(d),children:[d," ",d===0?"business":"businesses"]},d)})}),o(he,{label:"Auth provider",block:!0,hideOptionalLabel:!0,children:["myID","B2CLocalUser"].map(d=>o(Nn,{checked:(i==null?void 0:i.provider)===d,onChange:()=>a(l=>({...l,provider:d})),children:d},d))})]})})})]})}},Ie={args:{focusMode:!1,userName:"Toto Wolff",unreadMessageCount:6,activePath:"/",handleSignOut:j},render:function(n){const r=X,[t,i]=p.useState(r[1]),[a,s]=p.useState(),c=()=>s(void 0),d={linkedBusinesses:r,selectedBusiness:t,setSelectedBusiness:s};return u(p.Fragment,{children:[o(se,{links:[{href:"#main-content",label:"Skip to main content"}]}),u(Z,{...n,businessDetails:d,children:[o(zt,{isOpen:a!==void 0,onClose:c,title:"Are you sure you want to leave this page?",actions:u(Pn,{children:[o(U,{onClick:()=>{a!==void 0&&i(a),s(void 0)},children:"Leave this page"}),o(U,{variant:"secondary",onClick:c,children:"Stay on this page"})]}),children:o(x,{as:"p",children:"You will lose all changes made since your last save."})}),o($,{children:o(D,{gap:3,children:o(q,{children:u("h1",{children:["Active business: ",t==null?void 0:t.partyDisplayName]})})})})]})]})}},Le={args:{focusMode:!1,userName:"Toto Wolff",unreadMessageCount:6,activePath:"/",handleSignOut:j},render:function(n){const r={linkedBusinesses:X,selectedBusiness:X[0],setSelectedBusiness:()=>{}},t=()=>{const i=Zt();return o(U,{onClick:i,children:"Sign out"})};return u(p.Fragment,{children:[o(se,{links:[{href:"#main-content",label:"Skip to main content"}]}),o(Z,{...n,businessDetails:r,children:o($,{children:u(D,{gap:3,children:[u(q,{children:[o("h1",{children:"Sign out button"}),u("p",{children:["You can trigger the sign out modal using the"," ",o("code",{children:"useOpenSignOutModal"})," hook."]})]}),o(Pn,{children:o(t,{})})]})})})]})}},Me={args:{focusMode:!1,userName:"Toto Wolff",unreadMessageCount:6,activePath:"/",features:{quotas:!0,exportSystems:!0,licences:!0,invoices:!0,people:!0}}},Ae={args:{focusMode:!1,unreadMessageCount:6,activePath:"/",handleSignOut:j,claims:{given_name:"given_name",family_name:"family_name"}}},De={args:{focusMode:!1,unreadMessageCount:6,activePath:"/",handleSignOut:j,claims:{family_name:"family_name"}}},je={args:{focusMode:!1,unreadMessageCount:6,activePath:"/",handleSignOut:j,claims:{family_name:"family_name"},errorComponents:{MissingName:e=>(p.useEffect(()=>{console.log("report this situation to an analytics provider here")},[]),o(Vt.MissingName,{...e}))}}},Be={args:{focusMode:!1,unreadMessageCount:6,activePath:"/",handleSignOut:j,claims:{family_name:"family_name"},errorComponents:{MissingName:e=>o($,{children:u(q,{children:[o("p",{children:"Our app works just fine even without a generic name."}),o("hr",{}),e.children]})})}}},Ee={args:{focusMode:!1,unreadMessageCount:6,activePath:"/",handleSignOut:j,claims:{family_name:"family_name"},errorComponents:{MissingGivenName:e=>{const n=Zt();return o($,{children:u(q,{children:[o("p",{children:"Our app works just fine even without a given name."}),o("hr",{}),e.children,o(U,{onClick:n,children:"Sign out"})]})})}}}},Re={args:{focusMode:!1,unreadMessageCount:6,activePath:"/",handleSignOut:j,claims:{given_name:"given_name",family_name:"family_name",AARM_acr:"urn:id.gov.au:tdif:acr:ip1:cl1"},requiredProofingLevel:"IP2"}},Te={args:{focusMode:!1,unreadMessageCount:6,activePath:"/",handleSignOut:j},render:function(n){const r=["IP1","IP2","IP3","IP4"],t=["urn:id.gov.au:tdif:acr:ip1:cl1","urn:id.gov.au:tdif:acr:ip1:cl2","urn:id.gov.au:tdif:acr:ip1:cl3","urn:id.gov.au:tdif:acr:ip1p:cl1","urn:id.gov.au:tdif:acr:ip1p:cl2","urn:id.gov.au:tdif:acr:ip1p:cl3","urn:id.gov.au:tdif:acr:ip2:cl2","urn:id.gov.au:tdif:acr:ip2:cl3","urn:id.gov.au:tdif:acr:ip2p:cl2","urn:id.gov.au:tdif:acr:ip2p:cl3","urn:id.gov.au:tdif:acr:ip3:cl2","urn:id.gov.au:tdif:acr:ip3:cl3","urn:id.gov.au:tdif:acr:ip4:cl3"],[i,a]=p.useState(!0),[s,c]=p.useState({method:"urn",claims:{given_name:"given_name",family_name:"family_name",AARM_acr:[t[0]]},authDetails:{proofingLevel:["IP1"]},requiredProofingLevel:["IP2"]}),d=l=>{const f=l.kind==="max"?"#df185a":"#287be0",h=l!=null&&l.extraText?` (${l.extraText})`:"";return l!=null&&l.active?o(M,{css:{position:"relative",padding:"4px",border:`2px dashed ${f}`,"& + &":{marginTop:"1em"},":after":{position:"absolute",right:0,bottom:"120%",content:`"${l.kind==="max"?"maximum provided proof":"minimum required proof"}${h}"`,color:f,fontSize:"0.8em"}},children:l.children}):o(yt,{children:l.children})};return u(p.Fragment,{children:[o(se,{links:[{href:"#main-content",label:"Skip to main content"}]}),u(M,{css:{position:"relative"},children:[o(M,{css:{border:"2px solid red",backgroundColor:"#fec0ff",position:"fixed",transform:"rotate(90deg)",transformOrigin:"top right",fontSize:"1.2em",padding:".4em 1em",top:"55vh",right:0,zIndex:99,cursor:"pointer"},onClick:()=>a(!0),children:"show config options"}),o(Z,{...n,requiredProofingLevel:s.requiredProofingLevel,...s.method==="claims"?{claims:s.claims}:{authDetails:s.authDetails},children:o($,{children:u(D,{gap:1.5,children:[o(x,{as:"p",fontSize:"lg",children:"You made it!"}),o(x,{as:"p",children:"Your proofing level means that you can see this page."})]})})})]}),o(Ni,{title:"Config",isOpen:i,onClose:()=>a(!1),children:u(D,{gap:1.5,children:[o(Ii,{label:"Proofing method",required:!0,options:[{value:"authDetails",label:"AuthDetails"},{value:"claims",label:"Claims"}],onChange:l=>c(we(f=>{f.method=l.target.value}))}),s.method==="claims"?o(he,{label:"Provided ACR",block:!0,hideOptionalLabel:!0,children:t.map(l=>o(d,{kind:"max",active:fe(_e({AARM_acr:l}))===fe(_e(s.claims)),extraText:fe(_e(s.claims)),children:o(tn,{checked:new Set(s.claims.AARM_acr).has(l),onChange:f=>c(we(h=>{f.target.checked?h.claims.AARM_acr.push(l):h.claims.AARM_acr.splice(h.claims.AARM_acr.indexOf(l),1)})),children:l},l)},l))}):o(he,{label:"Provided proofing level",block:!0,hideOptionalLabel:!0,children:r.map(l=>o(d,{kind:"max",active:fe(s.authDetails.proofingLevel)===l,children:o(tn,{checked:new Set(s.authDetails.proofingLevel).has(l),onChange:f=>c(we(h=>{f.target.checked?h.authDetails.proofingLevel.push(l):h.authDetails.proofingLevel.splice(h.authDetails.proofingLevel.indexOf(l),1)})),children:l},l)},l))}),o(he,{label:"Required proofing level",block:!0,hideOptionalLabel:!0,children:r.map(l=>o(d,{kind:"min",active:Kt(s.requiredProofingLevel)===l,children:o(tn,{checked:new Set(s.requiredProofingLevel).has(l),onChange:f=>c(we(h=>{f.target.checked?h.requiredProofingLevel.push(l):h.requiredProofingLevel.splice(h.requiredProofingLevel.indexOf(l),1)})),children:l},l)},l))})]})})]})}},ze={args:{focusMode:!1,unreadMessageCount:6,activePath:"/",handleSignOut:j,authDetails:{proofingLevel:"IP1"},requiredProofingLevel:"IP3",errorComponents:{ProofMissing:e=>o($,{children:u(q,{children:[u("p",{children:["Your proofing level is insufficient at"," ",Ge(e.providedProofingLevel),". Please fix it."]}),u("p",{children:["you should provide at least '",Ge(e.requiredProofingLevel),"'"]})]})})}}},Fe={args:{focusMode:!1,userName:"Toto Wolff",unreadMessageCount:6,activePath:"/custom",handleSignOut:j,sidebarItems:[{items:[{label:"Custom sidenav",href:"/custom",icon:In},{label:"Other item",href:"/other",icon:St}]}],internal:"sidebar"}},We={args:{focusMode:!1,userName:"Toto Wolff",unreadMessageCount:6,activePath:"/custom",handleSignOut:j,headerProps:{heading:"Service Portal",subLine:"Supporting Australian agriculture"},sidebarItems:[{items:[{label:"Overview",href:"/custom",icon:In,items:[{label:"Business details",href:"#"},{label:"People",href:"#"}]},{label:"Country requirements",href:"/country-requirements",icon:Ho,items:[{label:"Other",href:"#"},{label:"Options",href:"#"}]}]},{items:[{label:"Help",href:"/help",icon:Ct}]}]}};var Or,Pr,wr;ke.parameters={...ke.parameters,docs:{...(Or=ke.parameters)==null?void 0:Or.docs,source:{originalSource:`{
  args: {
    focusMode: false,
    userName: 'Toto Wolff',
    unreadMessageCount: 6,
    activePath: '/',
    handleSignOut
  }
}`,...(wr=(Pr=ke.parameters)==null?void 0:Pr.docs)==null?void 0:wr.source}}};var kr,Cr,xr;Ce.parameters={...Ce.parameters,docs:{...(kr=Ce.parameters)==null?void 0:kr.docs,source:{originalSource:`{
  args: {
    focusMode: true,
    userName: 'Toto Wolff',
    unreadMessageCount: 6,
    activePath: '/',
    handleSignOut
  }
}`,...(xr=(Cr=Ce.parameters)==null?void 0:Cr.docs)==null?void 0:xr.source}}};var Sr,Ir,Lr;xe.parameters={...xe.parameters,docs:{...(Sr=xe.parameters)==null?void 0:Sr.docs,source:{originalSource:`{
  args: {
    activePath: '/',
    focusMode: false,
    handleSignOut
  },
  render: function Render(props) {
    const [userDetails, setUserDetails] = useState(false);

    // Mock fetching the user
    useEffect(() => {
      setTimeout(() => {
        setUserDetails(true);
      }, 1000);
    }, []);
    return <Fragment>
                <SkipLinks links={[{
        href: '#main-content',
        label: 'Skip to main content'
      }]} />
                <AppLayout {...props} {...userDetails ? {
        userName: 'Toto Wolff',
        unreadMessageCount: 6
      } : {}}>
                    <PageContent>
                        <Prose>
                            <h1>Page heading</h1>
                        </Prose>
                    </PageContent>
                </AppLayout>
            </Fragment>;
  }
}`,...(Lr=(Ir=xe.parameters)==null?void 0:Ir.docs)==null?void 0:Lr.source}}};var Mr,Ar,Dr;Se.parameters={...Se.parameters,docs:{...(Mr=Se.parameters)==null?void 0:Mr.docs,source:{originalSource:`{
  args: {
    focusMode: false,
    userName: 'Toto Wolff',
    unreadMessageCount: 6,
    activePath: '/',
    handleSignOut
  },
  render: function Render(props) {
    const [businessDetails, setBusinessDetails] = useState<Omit<BusinessDetails<BusinessFromAPI>, 'setSelectedBusiness'>>({
      linkedBusinesses: exampleBusinesses,
      selectedBusiness: exampleBusinesses[1]
    });
    const [authDetails, setAuthDetails] = useState<AuthDetails>({
      provider: 'myID'
    });
    const setSelectedBusiness = (selectedBusiness: BusinessFromAPI) => setBusinessDetails(details => ({
      ...details,
      selectedBusiness
    }));
    const onChange = (n: number) => () => {
      const linkedBusinesses = exampleBusinesses.slice(0, n);
      const selectedBusiness = linkedBusinesses[0];
      setBusinessDetails({
        selectedBusiness,
        linkedBusinesses
      });
    };
    return <Fragment>
                <SkipLinks links={[{
        href: '#main-content',
        label: 'Skip to main content'
      }]} />
                <AppLayout {...props} businessDetails={{
        ...businessDetails,
        setSelectedBusiness
      }} authDetails={authDetails}>
                    <PageContent>
                        <Stack gap={3}>
                            <Prose>
                                <h1>Business dropdown configuration</h1>
                            </Prose>

                            <ControlGroup label="Number of linked businesses" block hideOptionalLabel>
                                {Array.from(new Array(exampleBusinesses.length + 1).keys()).map(idx => <Radio key={idx} checked={businessDetails?.linkedBusinesses?.length === idx} onChange={onChange(idx)}>
                                            {idx} {idx === 0 ? 'business' : 'businesses'}
                                        </Radio>)}
                            </ControlGroup>

                            <ControlGroup label="Auth provider" block hideOptionalLabel>
                                {['myID', 'B2CLocalUser'].map(provider => <Radio key={provider} checked={authDetails?.provider === provider} onChange={() => setAuthDetails(previous => ({
                ...previous,
                provider
              }))}>
                                        {provider}
                                    </Radio>)}
                            </ControlGroup>
                        </Stack>
                    </PageContent>
                </AppLayout>
            </Fragment>;
  }
}`,...(Dr=(Ar=Se.parameters)==null?void 0:Ar.docs)==null?void 0:Dr.source}}};var jr,Br,Er;Ie.parameters={...Ie.parameters,docs:{...(jr=Ie.parameters)==null?void 0:jr.docs,source:{originalSource:`{
  args: {
    focusMode: false,
    userName: 'Toto Wolff',
    unreadMessageCount: 6,
    activePath: '/',
    handleSignOut
  },
  render: function Render(props) {
    const linkedBusinesses = exampleBusinesses;
    const [selectedBusiness, setSelectedBusiness] = useState(linkedBusinesses[1]);
    const [targetBusiness, setTargetBusiness] = useState<BusinessFromAPI | undefined>();
    const clearTargetBusiness = () => setTargetBusiness(undefined);
    const businessDetails = {
      linkedBusinesses,
      selectedBusiness,
      setSelectedBusiness: setTargetBusiness
    };
    return <Fragment>
                <SkipLinks links={[{
        href: '#main-content',
        label: 'Skip to main content'
      }]} />
                <AppLayout {...props} businessDetails={businessDetails}>
                    <Modal isOpen={targetBusiness !== undefined} onClose={clearTargetBusiness} title="Are you sure you want to leave this page?" actions={<ButtonGroup>
                                <Button onClick={() => {
            if (targetBusiness !== undefined) {
              setSelectedBusiness(targetBusiness);
            }
            setTargetBusiness(undefined);
          }}>
                                    Leave this page
                                </Button>
                                <Button variant="secondary" onClick={clearTargetBusiness}>
                                    Stay on this page
                                </Button>
                            </ButtonGroup>}>
                        <Text as="p">
                            You will lose all changes made since your last save.
                        </Text>
                    </Modal>

                    <PageContent>
                        <Stack gap={3}>
                            <Prose>
                                <h1>Active business: {selectedBusiness?.partyDisplayName}</h1>
                            </Prose>
                        </Stack>
                    </PageContent>
                </AppLayout>
            </Fragment>;
  }
}`,...(Er=(Br=Ie.parameters)==null?void 0:Br.docs)==null?void 0:Er.source}}};var Rr,Tr,zr;Le.parameters={...Le.parameters,docs:{...(Rr=Le.parameters)==null?void 0:Rr.docs,source:{originalSource:`{
  args: {
    focusMode: false,
    userName: 'Toto Wolff',
    unreadMessageCount: 6,
    activePath: '/',
    handleSignOut
  },
  render: function Render(props) {
    const businessDetails = {
      linkedBusinesses: exampleBusinesses,
      selectedBusiness: exampleBusinesses[0],
      setSelectedBusiness: () => {}
    };
    const SignOut = () => {
      const onclick = useOpenSignOutModal();
      return <Button onClick={onclick}>Sign out</Button>;
    };
    return <Fragment>
                <SkipLinks links={[{
        href: '#main-content',
        label: 'Skip to main content'
      }]} />
                <AppLayout {...props} businessDetails={businessDetails}>
                    <PageContent>
                        <Stack gap={3}>
                            <Prose>
                                <h1>Sign out button</h1>

                                <p>
                                    You can trigger the sign out modal using the{' '}
                                    <code>useOpenSignOutModal</code> hook.
                                </p>
                            </Prose>

                            <ButtonGroup>
                                <SignOut />
                            </ButtonGroup>
                        </Stack>
                    </PageContent>
                </AppLayout>
            </Fragment>;
  }
}`,...(zr=(Tr=Le.parameters)==null?void 0:Tr.docs)==null?void 0:zr.source}}};var Fr,Wr,$r;Me.parameters={...Me.parameters,docs:{...(Fr=Me.parameters)==null?void 0:Fr.docs,source:{originalSource:`{
  args: {
    focusMode: false,
    userName: 'Toto Wolff',
    unreadMessageCount: 6,
    activePath: '/',
    features: {
      quotas: true,
      exportSystems: true,
      licences: true,
      invoices: true,
      people: true
    }
  }
}`,...($r=(Wr=Me.parameters)==null?void 0:Wr.docs)==null?void 0:$r.source}}};var _r,Nr,qr;Ae.parameters={...Ae.parameters,docs:{...(_r=Ae.parameters)==null?void 0:_r.docs,source:{originalSource:`{
  args: {
    focusMode: false,
    unreadMessageCount: 6,
    activePath: '/',
    handleSignOut,
    claims: {
      given_name: 'given_name',
      family_name: 'family_name'
    }
  }
}`,...(qr=(Nr=Ae.parameters)==null?void 0:Nr.docs)==null?void 0:qr.source}}};var Gr,Hr,Ur;De.parameters={...De.parameters,docs:{...(Gr=De.parameters)==null?void 0:Gr.docs,source:{originalSource:`{
  args: {
    focusMode: false,
    unreadMessageCount: 6,
    activePath: '/',
    handleSignOut,
    claims: {
      family_name: 'family_name'
    }
  }
}`,...(Ur=(Hr=De.parameters)==null?void 0:Hr.docs)==null?void 0:Ur.source}}};var Yr,Kr,Qr;je.parameters={...je.parameters,docs:{...(Yr=je.parameters)==null?void 0:Yr.docs,source:{originalSource:`{
  args: {
    focusMode: false,
    unreadMessageCount: 6,
    activePath: '/',
    handleSignOut,
    claims: {
      family_name: 'family_name'
    },
    errorComponents: {
      MissingName: (props: PropsWithChildren) => {
        useEffect(() => {
          console.log('report this situation to an analytics provider here');
        }, []);
        return <AppErrorComponents.MissingName {...props} />;
      }
    }
  }
}`,...(Qr=(Kr=je.parameters)==null?void 0:Kr.docs)==null?void 0:Qr.source}}};var Vr,Xr,Zr;Be.parameters={...Be.parameters,docs:{...(Vr=Be.parameters)==null?void 0:Vr.docs,source:{originalSource:`{
  args: {
    focusMode: false,
    unreadMessageCount: 6,
    activePath: '/',
    handleSignOut,
    claims: {
      family_name: 'family_name'
    },
    errorComponents: {
      MissingName: (props: PropsWithChildren) => <PageContent>
                    <Prose>
                        <p>Our app works just fine even without a generic name.</p>
                        <hr />

                        {props.children}
                    </Prose>
                </PageContent>
    }
  }
}`,...(Zr=(Xr=Be.parameters)==null?void 0:Xr.docs)==null?void 0:Zr.source}}};var Jr,et,nt;Ee.parameters={...Ee.parameters,docs:{...(Jr=Ee.parameters)==null?void 0:Jr.docs,source:{originalSource:`{
  args: {
    focusMode: false,
    unreadMessageCount: 6,
    activePath: '/',
    handleSignOut,
    claims: {
      family_name: 'family_name'
    },
    errorComponents: {
      MissingGivenName: (props: PropsWithChildren) => {
        const onClick = useOpenSignOutModal();
        return <PageContent>
                        <Prose>
                            <p>Our app works just fine even without a given name.</p>
                            <hr />

                            {props.children}
                            <Button onClick={onClick}>Sign out</Button>
                        </Prose>
                    </PageContent>;
      }
    }
  }
}`,...(nt=(et=Ee.parameters)==null?void 0:et.docs)==null?void 0:nt.source}}};var rt,tt,ot;Re.parameters={...Re.parameters,docs:{...(rt=Re.parameters)==null?void 0:rt.docs,source:{originalSource:`{
  args: {
    focusMode: false,
    unreadMessageCount: 6,
    activePath: '/',
    handleSignOut,
    claims: {
      given_name: 'given_name',
      family_name: 'family_name',
      AARM_acr: 'urn:id.gov.au:tdif:acr:ip1:cl1'
    },
    requiredProofingLevel: 'IP2'
  }
}`,...(ot=(tt=Re.parameters)==null?void 0:tt.docs)==null?void 0:ot.source}}};var it,at,st;Te.parameters={...Te.parameters,docs:{...(it=Te.parameters)==null?void 0:it.docs,source:{originalSource:`{
  args: {
    focusMode: false,
    unreadMessageCount: 6,
    activePath: '/',
    handleSignOut
  },
  render: function Render(props) {
    const proofs = ['IP1', 'IP2', 'IP3', 'IP4'];
    const urns = ['urn:id.gov.au:tdif:acr:ip1:cl1', 'urn:id.gov.au:tdif:acr:ip1:cl2', 'urn:id.gov.au:tdif:acr:ip1:cl3', 'urn:id.gov.au:tdif:acr:ip1p:cl1', 'urn:id.gov.au:tdif:acr:ip1p:cl2', 'urn:id.gov.au:tdif:acr:ip1p:cl3', 'urn:id.gov.au:tdif:acr:ip2:cl2', 'urn:id.gov.au:tdif:acr:ip2:cl3', 'urn:id.gov.au:tdif:acr:ip2p:cl2', 'urn:id.gov.au:tdif:acr:ip2p:cl3', 'urn:id.gov.au:tdif:acr:ip3:cl2', 'urn:id.gov.au:tdif:acr:ip3:cl3', 'urn:id.gov.au:tdif:acr:ip4:cl3'];
    const [showing, setShowing] = useState(true);
    const [options, setOptions] = useState({
      method: 'urn',
      claims: {
        given_name: 'given_name',
        // needed to bypass single name paywall
        family_name: 'family_name',
        AARM_acr: [urns[0]]
      },
      authDetails: {
        proofingLevel: ['IP1']
      },
      requiredProofingLevel: ['IP2']
    });
    const Bordered = (props: PropsWithChildren<{
      kind: 'min' | 'max';
      active?: boolean;
      extraText?: string;
    }>) => {
      const color = props.kind === 'max' ? '#df185a' : '#287be0';
      const extra = props?.extraText ? \` (\${props.extraText})\` : '';
      return props?.active ? <Box css={{
        position: 'relative',
        padding: '4px',
        border: \`2px dashed \${color}\`,
        '& + &': {
          marginTop: '1em'
        },
        ':after': {
          position: 'absolute',
          right: 0,
          bottom: '120%',
          content: \`"\${props.kind === 'max' ? 'maximum provided proof' : 'minimum required proof'}\${extra}"\`,
          color,
          fontSize: '0.8em'
        }
      }}>
                    {props.children}
                </Box> : <>{props.children}</>;
    };
    return <Fragment>
                <SkipLinks links={[{
        href: '#main-content',
        label: 'Skip to main content'
      }]} />
                <Box css={{
        position: 'relative'
      }}>
                    <Box css={{
          border: '2px solid red',
          backgroundColor: '#fec0ff',
          position: 'fixed',
          transform: 'rotate(90deg)',
          transformOrigin: 'top right',
          fontSize: '1.2em',
          padding: '.4em 1em',
          top: '55vh',
          right: 0,
          zIndex: 99,
          cursor: 'pointer'
        }} onClick={() => setShowing(true)}>
                        show config options
                    </Box>

                    <AppLayout {...props} requiredProofingLevel={options.requiredProofingLevel} {...options.method === 'claims' ? {
          claims: options.claims
        } : {
          authDetails: options.authDetails
        }}>
                        <PageContent>
                            <Stack gap={1.5}>
                                <Text as="p" fontSize={'lg'}>
                                    You made it!
                                </Text>

                                <Text as="p">
                                    Your proofing level means that you can see this page.
                                </Text>
                            </Stack>
                        </PageContent>
                    </AppLayout>
                </Box>

                <Drawer title="Config" isOpen={showing} onClose={() => setShowing(false)}>
                    <Stack gap={1.5}>
                        <Select label="Proofing method" required options={[{
            value: 'authDetails',
            label: 'AuthDetails'
          }, {
            value: 'claims',
            label: 'Claims'
          }]} onChange={e => setOptions(produce(opt => {
            opt.method = e.target.value;
          }))} />

                        {options.method === 'claims' ? <ControlGroup label="Provided ACR" block hideOptionalLabel>
                                {urns.map(urn => <Bordered key={urn} kind="max" active={highestLevelProof(getProofLevelFromClaims({
              AARM_acr: urn
            })) === highestLevelProof(getProofLevelFromClaims(options.claims))} extraText={highestLevelProof(getProofLevelFromClaims(options.claims)) as string}>
                                        <Checkbox key={urn} checked={new Set(options.claims.AARM_acr).has(urn)} onChange={e => setOptions(produce(opt => {
                if (e.target.checked) {
                  opt.claims.AARM_acr.push(urn);
                } else {
                  opt.claims.AARM_acr.splice(opt.claims.AARM_acr.indexOf(urn), 1);
                }
              }))}>
                                            {urn}
                                        </Checkbox>
                                    </Bordered>)}
                            </ControlGroup> : <ControlGroup label="Provided proofing level" block hideOptionalLabel>
                                {proofs.map(proof => <Bordered key={proof} kind="max" active={highestLevelProof(options.authDetails.proofingLevel) === proof}>
                                        <Checkbox key={proof} checked={new Set(options.authDetails.proofingLevel).has(proof)} onChange={e => setOptions(produce(opt => {
                if (e.target.checked) {
                  opt.authDetails.proofingLevel.push(proof);
                } else {
                  opt.authDetails.proofingLevel.splice(opt.authDetails.proofingLevel.indexOf(proof), 1);
                }
              }))}>
                                            {proof}
                                        </Checkbox>
                                    </Bordered>)}
                            </ControlGroup>}

                        <ControlGroup label="Required proofing level" block hideOptionalLabel>
                            {proofs.map(proof => <Bordered key={proof} kind="min" active={lowestLevelProof(options.requiredProofingLevel) === proof}>
                                    <Checkbox key={proof} checked={new Set(options.requiredProofingLevel).has(proof)} onChange={e => setOptions(produce(opt => {
                if (e.target.checked) {
                  opt.requiredProofingLevel.push(proof);
                } else {
                  opt.requiredProofingLevel.splice(opt.requiredProofingLevel.indexOf(proof), 1);
                }
              }))}>
                                        {proof}
                                    </Checkbox>
                                </Bordered>)}
                        </ControlGroup>
                    </Stack>
                </Drawer>
            </Fragment>;
  }
}`,...(st=(at=Te.parameters)==null?void 0:at.docs)==null?void 0:st.source}}};var lt,ct,dt;ze.parameters={...ze.parameters,docs:{...(lt=ze.parameters)==null?void 0:lt.docs,source:{originalSource:`{
  args: {
    focusMode: false,
    unreadMessageCount: 6,
    activePath: '/',
    handleSignOut,
    authDetails: {
      proofingLevel: 'IP1'
    },
    requiredProofingLevel: 'IP3',
    errorComponents: {
      ProofMissing: props => {
        return <PageContent>
                        <Prose>
                            <p>
                                Your proofing level is insufficient at{' '}
                                {getReadableProof(props.providedProofingLevel)}. Please fix it.
                            </p>

                            <p>
                                you should provide at least &apos;
                                {getReadableProof(props.requiredProofingLevel)}&apos;
                            </p>
                        </Prose>
                    </PageContent>;
      }
    }
  }
}`,...(dt=(ct=ze.parameters)==null?void 0:ct.docs)==null?void 0:dt.source}}};var ut,ft,pt;Fe.parameters={...Fe.parameters,docs:{...(ut=Fe.parameters)==null?void 0:ut.docs,source:{originalSource:`{
  args: {
    focusMode: false,
    userName: 'Toto Wolff',
    unreadMessageCount: 6,
    activePath: '/custom',
    handleSignOut,
    sidebarItems: [{
      items: [{
        label: 'Custom sidenav',
        href: '/custom',
        icon: FactoryIcon
      }, {
        label: 'Other item',
        href: '/other',
        icon: PieChartIcon
      }]
    }],
    internal: 'sidebar'
  }
}`,...(pt=(ft=Fe.parameters)==null?void 0:ft.docs)==null?void 0:pt.source}}};var ht,gt,mt;We.parameters={...We.parameters,docs:{...(ht=We.parameters)==null?void 0:ht.docs,source:{originalSource:`{
  args: {
    focusMode: false,
    userName: 'Toto Wolff',
    unreadMessageCount: 6,
    activePath: '/custom',
    handleSignOut,
    headerProps: {
      heading: 'Service Portal',
      subLine: 'Supporting Australian agriculture'
    },
    sidebarItems: [{
      items: [{
        label: 'Overview',
        href: '/custom',
        icon: FactoryIcon,
        items: [{
          label: 'Business details',
          href: '#'
        }, {
          label: 'People',
          href: '#'
        }]
      }, {
        label: 'Country requirements',
        href: '/country-requirements',
        icon: BusinessIcon,
        items: [{
          label: 'Other',
          href: '#'
        }, {
          label: 'Options',
          href: '#'
        }]
      }]
    }, {
      items: [{
        label: 'Help',
        href: '/help',
        icon: HelpIcon
      }]
    }]
  }
}`,...(mt=(gt=We.parameters)==null?void 0:gt.docs)==null?void 0:mt.source}}};const el=["Basic","FocusMode","ClientSideFetch","BusinessDropdown","BusinessDropdownModalInterrupt","SignOutModalTrigger","OptionalAppsEnabled","Claims","ClaimsMissingName","ClaimsMissingNameAnalytics","ClaimsMissingNameComponent","ClaimsMissingGivenNameComponent","RequiredProofingPaywall","RequiredProofingPaywallOptions","RequiredProofingPaywallCustomComponent","CustomSidenav","HeaderProps"];export{ke as Basic,Se as BusinessDropdown,Ie as BusinessDropdownModalInterrupt,Ae as Claims,Ee as ClaimsMissingGivenNameComponent,De as ClaimsMissingName,je as ClaimsMissingNameAnalytics,Be as ClaimsMissingNameComponent,xe as ClientSideFetch,Fe as CustomSidenav,Ce as FocusMode,We as HeaderProps,Me as OptionalAppsEnabled,Re as RequiredProofingPaywall,ze as RequiredProofingPaywallCustomComponent,Te as RequiredProofingPaywallOptions,Le as SignOutModalTrigger,el as __namedExportsOrder,Js as default};
