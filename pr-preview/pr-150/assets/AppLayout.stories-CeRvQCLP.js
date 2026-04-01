import{j as o,e as N,t as v,m as A,_ as P,c as b,d as g,i as u,B as M,p as I,G as On,g as ae,h as vt,u as bt,q as co,F as yt,b as uo,s as Ot}from"./Box-c58c9f90.esm-D-DOdbx1.js";import{r as f}from"./index-BAneEnFJ.js";import{P as q,p as po}from"./ag.ds-next-react-prose.esm-L5nj_PGE.js";import{b as fo,m as ho,c as U,_ as Pt,C as go,B as Ye,P as W,a as Pn}from"./ag.ds-next-react-button.esm-Cf0RSV2q.js";import{v as mo,S as D,T as x,F as w,V as wn,s as Ke,E as vo,c as bo}from"./Icon-8342de17.esm-DbGijj1V.js";import{e as ne,a as Cn,c as kn,F as xn,u as cn,_ as Rn,D as yo,b as Oo,d as Po,f as Tn,g as dn,h as fe,i as wo,j as Co,k as ko,l as wt}from"./ag.ds-next-react-dropdown-menu.esm-Do41ZClU.js";import{b as Ct,c as xo,d as So,a as Sn,C as Qe,M as Io,e as Lo,H as Mo,U as Ao,F as In,f as Do,S as jo,P as kt,L as Bo,g as Eo,h as xt,i as St,E as Ro,j as To,k as zo,A as Fo,l as It,m as $o,n as Wo,o as _o,W as No,I as qo,p as Go,B as Ho}from"./ag.ds-next-react-icon.esm-BH3F579_.js";import{r as Ln}from"./index-exioagFi.js";import{u as Mn,C as te,c as Uo}from"./CoreProvider-eb9f00f4.esm-D6FeBI3N.js";import{L as Yo}from"./ag.ds-next-react-ag-branding.esm-CUwEkvl_.js";import{L as Ko}from"./ag.ds-next-react-link-list.esm-C2yVsEtg.js";import{C as Qo}from"./ag.ds-next-react-callout.esm-BcjLlM0x.js";import{a as _e}from"./ag.ds-next-react-text-link.esm-CfSaBqGr.js";import"./jsx-runtime-D_zvdyIk.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-pL_YbQPu.js";function Lt(){var e=f.useState(!1),n=e[0],r=e[1];return f.useEffect(function(){if(!window.matchMedia){r(!1);return}var t=window.matchMedia("(prefers-reduced-motion: reduce)");r(t.matches);var i=function(s){return r(s.matches)};return t.addEventListener("change",i),function(){return t.removeEventListener("change",i)}},[]),n}var Xo=function(n){var r=n.children,t=n["aria-label"];return o("nav",{"aria-label":t,children:r})},Vo=f.forwardRef(function(n,r){var t=n.children,i=n.href;return o("a",{css:[mo,fo({block:!1,size:"md",variant:"primary"}),{position:"absolute","&:focus-visible":{top:A(1),left:A(1),clip:"auto",clipPath:"none",overflow:"visible",whiteSpace:"normal",width:"auto",zIndex:v.zIndex.skipLink}},"","","",""],href:i,ref:r,children:t})}),Zo=["label"];function zn(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,t)}return r}function Fn(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?zn(Object(r),!0).forEach(function(t){P(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):zn(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var se=function(n){var r=n.links,t=n["aria-label"],i=t===void 0?"Skip links":t;return o(Xo,{"aria-label":i,children:r.map(function(a,s){var c=a.label,d=N(a,Zo);return o(Vo,Fn(Fn({},d),{},{children:c}),s)})})},Jo=function(n){var r=n.hideOptionalLabel,t=n.required,i=n.secondaryLabel;return f.useMemo(function(){return[i,r||t?null:"(optional)"].filter(Boolean).join(" ")},[t,i,r])},Mt=function(n){var r=n.children,t=n.invalid,i=n.id;return o(D,{borderLeft:t,borderLeftWidth:"xl",css:b({borderLeftColor:t?g.systemError:void 0},"",""),gap:.5,id:i,paddingLeft:t?1:void 0,children:r})},At=function(n){var r=n.as,t=r===void 0?"label":r,i=n.children,a=n.className,s=n.id,c=n.htmlFor,d=n.required,l=n.secondaryLabel,p=n.hideOptionalLabel,h=Jo({hideOptionalLabel:p,required:d,secondaryLabel:l});return u(M,{as:t,className:a,htmlFor:c,id:s,children:[o(x,{as:"span",fontWeight:"bold",children:i}),h?u(x,{as:"span",color:"muted",children:[" ",h]}):null]})},Dt=function(n){var r=n.children,t=n.id;return o(x,{color:"muted",display:"block",id:t,children:r})},ei={name:"4zleql",styles:"display:block"},jt=function(n){var r=n.children,t=n.id;return u(w,{alignItems:"center",gap:.5,children:[o(M,{flexShrink:0,children:o(Ct,{"aria-hidden":"false","aria-label":"Error",color:"error",css:ei,size:"md"})}),o(x,{color:"error",display:"block",fontWeight:"bold",id:t,children:r})]})},ni=function(n){var r=n.children,t=n.hint,i=n.id,a=n.invalid,s=n.label,c=n.labelId,d=n.maxWidth,l=n.secondaryLabel,p=n.hideOptionalLabel,h=n.message,y=n.required,C=ri(i),O=C.fieldId,m=C.hintId,k=C.messageId,S=ti({required:y,fieldId:O,message:h,messageId:k,hint:t,hintId:m,invalid:a});return u(Mt,{invalid:a,children:[o(At,{hideOptionalLabel:p,htmlFor:O,id:c,required:y,secondaryLabel:l,children:s}),t?o(Dt,{id:m,children:t}):null,h&&a?o(jt,{id:k,children:h}):null,typeof r=="function"?r(S):r,d?o("div",{"aria-hidden":!0,css:b({height:0,marginTop:"-".concat(A(.5)),maxWidth:v.maxWidth.field[d],overflow:"hidden","::after":{content:'"---------------------------------------------------------------"'}},"","")}):null]})},ri=function(n){var r=ne(n),t=n||"field-".concat(r),i="field-".concat(r,"-hint"),a="field-".concat(r,"-message");return{fieldId:t,hintId:i,messageId:a}},ti=function(n){var r=n.required,t=n.fieldId,i=n.message,a=n.messageId,s=n.hint,c=n.hintId,d=n.invalid,l=[i?a:null,s?c:null].filter(Boolean),p=l.length?l.join(" "):void 0;return{"aria-required":!!r,"aria-invalid":!!d,"aria-describedby":p,id:t}},Bt=f.createContext(void 0),Et=function(){return f.useContext(Bt)};function oi(e){var n=e.children,r=e.invalid,t=e.messageId,i=e.name,a=e.required,s=ne();return o(Bt.Provider,{value:{invalid:r,name:i||s,messageId:t,required:a},children:n})}var he=function(n){var r=n.block,t=r===void 0?!1:r,i=n.children,a=n.hint,s=n.id,c=n.invalid,d=c===void 0?!1:c,l=n.label,p=n.hideOptionalLabel,h=n.message,y=n.name,C=n.required,O=C===void 0?!1:C,m=ii(s),k=m.groupId,S=m.hintId,L=m.messageId,B=[d&&h?L:null,a?S:null].filter(Boolean),E=B.length?B.join(" "):void 0;return o(oi,{invalid:d,messageId:d&&h?L:void 0,name:y,required:O,children:o(Mt,{id:k,invalid:d,children:u(M,{"aria-describedby":E,as:"fieldset",children:[l?o(At,{as:"legend",hideOptionalLabel:p,required:O,children:l}):null,u(D,{css:b({marginTop:l?A(.5):void 0},"",""),gap:.5,children:[a?o(Dt,{id:S,children:a}):null,h&&d?o(jt,{id:L,children:h}):null,o(w,{flexDirection:t?"column":"row",flexWrap:t?void 0:"wrap",gap:1,paddingTop:.5,width:"100%",children:i})]})]})})})},ii=function(n){var r=ne(n),t=n||"control-group-".concat(r),i="control-group-".concat(r,"-hint"),a="control-group-".concat(r,"-message");return{groupId:t,hintId:i,messageId:a}};function $n(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,t)}return r}function nn(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?$n(Object(r),!0).forEach(function(t){P(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):$n(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function ai(e){var n=e.disabled,r=e.invalid,t=e.size,i=I.control[t],a=i.width,s=i.height,c=i.borderWidth;return o(w,{alignItems:"center",as:"span",css:b(nn(nn({backgroundColor:g.backgroundBody,borderColor:g.border,borderRadius:"100%",borderStyle:"solid",borderWidth:c,inset:0,position:"absolute"},n&&{color:g.borderMuted,borderColor:g.borderMuted,backgroundColor:g.backgroundShade,"@media (forced-colors: active)":{borderColor:"GrayText",color:"GrayText"}}),r&&{borderColor:g.systemError,backgroundColor:g.systemErrorMuted}),"",""),flexShrink:0,height:s,justifyContent:"center",rounded:!0,width:a,children:o(M,{as:"span",css:b(nn({borderRadius:"100%",backgroundColor:g.foregroundText,"@media (forced-colors: active)":{backgroundColor:"MenuText"}},n&&{backgroundColor:g.borderMuted,"@media (forced-colors: active)":{backgroundColor:"GrayText"}}),"",""),height:"calc(100% - 0.5rem)",highContrastOutline:!0,width:"calc(100% - 0.5rem)"})})}var si=["height","width"];function Wn(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,t)}return r}function li(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?Wn(Object(r),!0).forEach(function(t){P(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Wn(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var ci=f.forwardRef(function(n,r){var t=n.height,i=n.width,a=N(n,si);return o("input",li({css:b({height:t,margin:0,opacity:0,width:i,"&:focus ~ span:first-of-type":I.outline,"~ span > span":{opacity:0},"&:checked ~ span > span":{opacity:1}},"",""),ref:r},a))}),di=function(n){var r=n.children,t=n.disabled,i=n.htmlFor;return o(w,{alignItems:"flex-start",as:"label",color:"text",css:b({cursor:t?"not-allowed":"pointer"},"",""),gap:.5,htmlFor:i,inline:!0,children:r})},ui={sm:0,md:"0.2rem"};function pi(e){var n=e.children,r=e.disabled,t=e.size,i=ui[t];return o(x,{color:r?"muted":"text",css:b({paddingTop:i},"",""),flexGrow:1,children:n})}var fi=["children","disabled","invalid","name","required","size"];function _n(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,t)}return r}function hi(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?_n(Object(r),!0).forEach(function(t){P(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_n(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var Nn=f.forwardRef(function(n,r){var t=n.children,i=n.disabled,a=n.invalid,s=n.name,c=n.required,d=n.size,l=d===void 0?"md":d,p=N(n,fi),h=gi(p.id),y=Et(),C=I.control[l],O=C.height,m=C.width,k=typeof a=="boolean"?a:y==null?void 0:y.invalid,S=typeof c=="boolean"?c:y==null?void 0:y.required,L=s||(y==null?void 0:y.name);return u(di,{disabled:i,htmlFor:h,children:[u("span",{css:b({display:"inline-block",height:O,position:"relative",width:m},"",""),children:[o(ci,hi({"aria-describedby":k?y==null?void 0:y.messageId:void 0,"aria-invalid":k||void 0,"aria-required":S,disabled:i,height:O,id:h,name:L,ref:r,type:"radio",width:m},p)),o(ai,{disabled:i,invalid:k,size:l})]}),o(pi,{disabled:i,size:l,children:t})]})});function gi(e){var n=ne(e);return e||"radio-".concat(n)}function qn(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,t)}return r}function Gn(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?qn(Object(r),!0).forEach(function(t){P(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):qn(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var mi=function(n){var r=n.disabled,t=n.indeterminate,i=n.invalid,a=n.size,s=I.control[a],c=s.width,d=s.height,l=s.borderWidth;return o(w,{alignItems:"center",as:"span",css:b(Gn(Gn({backgroundColor:g.backgroundBody,borderColor:g.border,borderStyle:"solid",borderWidth:l,color:g.foregroundText,inset:0,position:"absolute"},r&&{color:g.borderMuted,borderColor:g.borderMuted,backgroundColor:g.backgroundShade,"@media (forced-colors: active)":{borderColor:"GrayText",color:"GrayText"}}),i&&{borderColor:g.systemError,backgroundColor:g.systemErrorMuted}),"",""),flexShrink:0,height:d,justifyContent:"center",rounded:!0,width:c,children:t?o(xo,{size:a,weight:"bold"}):o(So,{size:a,weight:"bold"})})},vi=["height","width"];function Hn(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,t)}return r}function bi(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?Hn(Object(r),!0).forEach(function(t){P(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Hn(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var yi=f.forwardRef(function(n,r){var t=n.height,i=n.width,a=N(n,vi);return o("input",bi({css:b({height:t,margin:0,opacity:0,width:i,"&:focus ~ span:first-of-type":I.outline,"~ span > svg":{opacity:0},"&:checked ~ span > svg, &:indeterminate ~ span > svg":{opacity:1}},"",""),ref:r},a))});function Oi(e){var n=e.children,r=e.htmlFor,t=e.disabled;return o(w,{alignItems:"flex-start",as:"label",color:"text",css:b({cursor:t?"not-allowed":"pointer"},"",""),gap:.5,htmlFor:r,inline:!0,children:n})}var Pi={sm:0,md:"0.2rem"};function wi(e){var n=e.children,r=e.disabled,t=e.size,i=Pi[t];return o(x,{color:r?"muted":"text",css:b({paddingTop:i},"",""),flexGrow:1,children:n})}var Ci=["checked","children","disabled","indeterminate","invalid","name","required","size"];function Un(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,t)}return r}function ki(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?Un(Object(r),!0).forEach(function(t){P(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Un(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var rn=f.forwardRef(function(n,r){var t=n.checked,i=n.children,a=n.disabled,s=n.indeterminate,c=n.invalid,d=n.name,l=n.required,p=n.size,h=p===void 0?"md":p,y=N(n,Ci),C=xi(y.id),O=f.useRef(null),m=Et(),k=I.control[h],S=k.height,L=k.width,B=typeof c=="boolean"?c:m==null?void 0:m.invalid,E=typeof l=="boolean"?l:m==null?void 0:m.required,F=d||(m==null?void 0:m.name);f.useEffect(function(){O.current&&(O.current.indeterminate=!!s)},[s]);var _=s?!1:t;return u(Oi,{disabled:a,htmlFor:C,children:[u("span",{css:b({display:"inline-block",height:S,position:"relative",width:L},"",""),children:[o(yi,ki({"aria-checked":s?"mixed":void 0,"aria-describedby":B?m==null?void 0:m.messageId:void 0,"aria-invalid":B||void 0,"aria-required":E,checked:_,disabled:a,height:S,id:C,name:F,ref:ho([r,O]),type:"checkbox",width:L},y)),o(mi,{disabled:a,indeterminate:s,invalid:B,size:h})]}),o(wi,{disabled:a,size:h,children:i})]})});function xi(e){var n=ne(e);return e||"checkbox-".concat(n)}var Si=["label","hideOptionalLabel","required","hint","message","invalid","block","maxWidth","options","placeholder","id"];function Yn(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,t)}return r}function Q(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?Yn(Object(r),!0).forEach(function(t){P(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Yn(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var Ii=f.forwardRef(function(n,r){var t=n.label,i=n.hideOptionalLabel,a=n.required,s=n.hint,c=n.message,d=n.invalid,l=n.block,p=n.maxWidth,h=p===void 0?"md":p,y=n.options,C=n.placeholder,O=n.id,m=N(n,Si),k=Di({block:l});return o(ni,{hideOptionalLabel:i,hint:s,id:O,invalid:d,label:t,maxWidth:h,message:c,required:a,children:function(L){return u(Li,{block:l,maxWidth:h,children:[o("select",Q(Q(Q({css:k,ref:r},L),m),{},{children:o(Mi,{options:y,placeholder:C})})),o(Ai,{disabled:m.disabled})]})}})}),Li=function(n){var r=n.children,t=n.block,i=n.maxWidth;return o("div",{css:b(Q({position:"relative"},!t&&{maxWidth:v.maxWidth.field[i]}),"",""),children:r})},Mi=function(n){var r=n.options,t=n.placeholder;return u(f.Fragment,{children:[t?o("option",{value:"",children:t}):null,r.map(function(i){return"options"in i?o("optgroup",{disabled:i.disabled,label:i.label,children:i.options.map(function(a){var s=a.value,c=a.label,d=a.disabled;return o("option",{disabled:d,value:s,children:c},s)})},i.label):o("option",{disabled:i.disabled,value:i.value,children:i.label},i.value)})]})},Ai=function(n){var r=n.disabled;return o(Sn,{css:b({position:"absolute",top:"50%",right:A(.75),transform:"translateY(-50%)",opacity:r?.3:void 0,pointerEvents:"none",color:g.foregroundAction},"","")})},Di=function(n){var r=n.block;return Q(Q(Q(Q({position:"relative",appearance:"none",boxSizing:"border-box",paddingLeft:A(1),paddingRight:"calc(".concat(v.borderWidth.lg,"px + 2.5rem)"),margin:0,background:g.backgroundBody,borderWidth:v.borderWidth.lg,borderStyle:"solid",borderColor:g.border,borderRadius:v.borderRadius,color:g.foregroundText,width:"100%",fontFamily:v.font.body},I.input.md),{},{lineHeight:v.lineHeight.default},I.truncate),r&&{maxWidth:"none",display:"block"}),{},{'&[aria-invalid="true"]':{backgroundColor:g.systemErrorMuted,borderColor:g.systemError},"&:disabled":{opacity:1,cursor:"not-allowed",borderColor:g.borderMuted,backgroundColor:g.backgroundShade,color:g.foregroundMuted},"&:focus":I.outline})};function Rt(){var e=f.useState(!1),n=e[0],r=e[1];return f.useEffect(function(){r(!0)},[]),n}function Tt(e,n){var r=e||n;if(!r)throw new Error("onClose prop is required");return r}function ji(e,n){return e||n}function Bi(){var e=ne();return{titleId:"drawer-".concat(e,"-title")}}function Ei(e){var n=e.actions,r=e.children,t=e.elementToFocusOnClose,i=e.onClose,a=e.title,s=Bi(),c=s.titleId;return o(xn,{returnFocus:t?function(){return window.setTimeout(function(){return t.focus()},0),!1}:!0,children:u(w,{"aria-labelledby":c,"aria-modal":!0,background:"body",css:b(P({boxShadow:v.shadow.lg,inset:0,position:"fixed"},v.mediaQuery.max.xs,{overflowY:"auto"}),"",""),flexDirection:"column",highContrastOutline:!0,role:"dialog",children:[o(Ri,{children:o(zi,{id:c,children:a})}),o(Fi,{children:r}),n?o(Wi,{children:n}):null,o(U,{css:ae({position:"fixed",zIndex:v.zIndex.elevated,top:"1.25rem",right:vt({xs:A(.75),md:A(1.5)})}),iconAfter:Qe,onClick:i,variant:"text",children:"Close"})]})})}function Ri(e){var n=e.children;return o(M,{background:"body",borderBottom:!0,css:b(P({position:"sticky",top:0,zIndex:v.zIndex.elevated},v.mediaQuery.min.sm,{position:"relative"}),"",""),paddingX:{xs:.75,md:1.5},paddingY:1,children:n})}var Ti={name:"1r5gb7q",styles:"display:inline-block"};function zi(e){var n=e.children,r=e.id;return o(x,{as:"h2",css:Ti,"data-autofocus":!0,focusRingFor:"keyboard",fontSize:"lg",fontWeight:"bold",id:r,lineHeight:"heading",tabIndex:-1,children:n})}function Fi(e){var n=e.children;return o(M,{background:"body",css:b(P({},v.mediaQuery.min.sm,{overflowY:"auto"}),"",""),flexGrow:1,paddingX:{xs:.75,md:1.5},paddingY:{xs:1,md:1.5},children:n})}var $i={name:"xdvdnl",styles:"margin-top:auto"};function Wi(e){var n=e.children;return o(M,{background:"body",borderTop:!0,css:$i,paddingX:{xs:.75,md:1.5},paddingY:1,children:n})}var _i={md:"32rem",lg:"45rem"},Ni=function(n){var r=n.actions,t=n.children,i=n.elementToFocusOnClose,a=n.isOpen,s=a===void 0?!1:a,c=n.mutedOverlay,d=c===void 0?!1:c,l=n.onClose,p=n.onDismiss,h=n.title,y=n.width,C=y===void 0?"md":y,O=Tt(l,p),m=f.useRef(0),k=Lt(),S=f.useState(!0),L=S[0],B=S[1],E=Rt();f.useEffect(function(){m.current=window.innerWidth-document.documentElement.clientWidth},[]),f.useEffect(function(){s&&B(!1)},[s]),f.useEffect(function(){var G=function(ce){s&&ce.code==="Escape"&&(ce.preventDefault(),ce.stopPropagation(),O())};return window.addEventListener("keydown",G),function(){return window.removeEventListener("keydown",G)}},[s,O]);var F=Cn(E?s:!1),_=F.modalContainerRef;if(!E||!kn())return null;var re=s?!0:!L;return Ln.createPortal(u(f.Fragment,{children:[s?o(Gi,{scrollbarWidth:m.current}):null,u("div",{ref:_,children:[o("div",{css:b({pointerEvents:"none",position:"absolute",opacity:s?1:0,transition:s?"none":"opacity ".concat(k?"1ms":"150ms")},"",""),"data-drawer":"transitioner",onTransitionEnd:function(){B(!0)}}),o(qi,{isOpen:s,mutedOverlay:d,onClick:O,prefersReducedMotion:k}),o(M,{css:b({inset:0,marginLeft:"auto",position:"fixed",transform:"translateX(".concat(s?"0":"100%",")"),transition:"transform ".concat(k?"1ms":"150ms"," ease"),zIndex:v.zIndex.dialog},"",""),maxWidth:_i[C],children:re&&o(Ei,{actions:r,elementToFocusOnClose:i,onClose:O,title:h,children:t})})]})]}),document.body)};function qi(e){var n=e.isOpen,r=e.mutedOverlay,t=e.onClick,i=e.prefersReducedMotion;return o("div",{css:b({pointerEvents:n?"all":"none",position:"fixed",inset:0,backgroundColor:r?g.overlayMuted:g.overlay,opacity:n?1:0,transition:"opacity ".concat(i?"1ms":"150ms"," ease"),zIndex:v.zIndex.overlay},"",""),onClick:t})}function Gi(e){var n=e.scrollbarWidth;return o(On,{styles:b({html:{marginRight:n,scrollbarGutter:"auto"},body:{overflow:"hidden"}},"","")})}var Kn,Hi=f.forwardRef(function(n,r){var t=n.children;return o("div",{css:b({position:"fixed",top:0,left:0,bottom:0,right:0,backgroundColor:g.overlay,zIndex:v.zIndex.overlay,overflowY:"auto",animation:"".concat(Ui," ").concat(v.transition.duration,"ms ").concat(v.transition.timingFunction)},"",""),ref:r,children:t})}),Ui=bt(Kn||(Kn=Pt([`
  0% { opacity: 0; }
  100% { opacity: 1; }
`]))),Yi=function(n){var r=n.children,t=n.id;return o(x,{as:"h2","data-autofocus":!0,focusRingFor:"keyboard",fontSize:"lg",fontWeight:"bold",id:t,lineHeight:"heading",tabIndex:-1,children:r})},Ki=function(){var n=ne();return{titleId:"modal-".concat(n,"-title")}},Qn,Qi="45rem",Xi={name:"1duj7gx",styles:"align-self:flex-end"},Vi={name:"xdvdnl",styles:"margin-top:auto"},Zi=function(n){var r=n.actions,t=n.children,i=n.onClose,a=n.title,s=Ki(),c=s.titleId;return o(xn,{returnFocus:!0,children:u(D,{"aria-labelledby":c,"aria-modal":!0,background:"body",css:b(P({boxShadow:v.shadow.lg,position:"relative",margin:"0 auto",minHeight:"100vh",animation:"".concat(Ji," ").concat(v.transition.duration,"ms ").concat(v.transition.timingFunction),"@supports (min-height: 100dvh)":{minHeight:"100dvh"}},v.mediaQuery.min.sm,{borderRadius:v.borderRadius,margin:"".concat(A(6)," auto ").concat(A(1)),minHeight:"auto"}),"",""),gap:1,highContrastOutline:!0,maxWidth:Qi,paddingX:{xs:.75,md:1.5},paddingY:{xs:1,md:1.5},role:"dialog",children:[o(U,{"aria-label":"Close modal",css:Xi,iconAfter:Qe,onClick:i,variant:"text",children:"Close"}),o(Yi,{id:c,children:a}),o(M,{children:t}),r?o(M,{css:Vi,paddingTop:1,children:r}):null]})})},Ji=bt(Qn||(Qn=Pt([`
  0% { transform: translateY(1rem); }
	100% { transform: translateY(0); }
`]))),zt=function(n){var r=n.actions,t=n.children,i=n.isOpen,a=i===void 0?!1:i,s=n.onClose,c=n.onDismiss,d=n.title,l=Tt(s,c);f.useEffect(function(){var y=function(O){a&&O.code==="Escape"&&(O.preventDefault(),O.stopPropagation(),l())};return window.addEventListener("keydown",y),function(){return window.removeEventListener("keydown",y)}},[l,a]);var p=Cn(a),h=p.modalContainerRef;return!a||!kn()?null:Ln.createPortal(u(f.Fragment,{children:[o(na,{}),o(Hi,{ref:h,children:o(Zi,{actions:r,onClose:l,title:d,children:t})})]}),document.body)},ea={name:"1sy9iaq",styles:"body{overflow:hidden;}"},na=function(){return o(On,{styles:ea})};function ra(e){var n,r,t=Array.from(e.matchAll(new RegExp(/(\p{L})\p{L}+/,"gu")));if(!t.length)return"?";var i=((n=t.shift())===null||n===void 0?void 0:n[1])||"",a=((r=t.pop())===null||r===void 0?void 0:r[1])||"";return(i+a).toUpperCase()}function Ft(e){var n=e.name,r=e.tone,t=r===void 0?"neutral":r,i=e.size,a=i===void 0?"md":i,s=e["aria-hidden"],c=e["aria-label"],d=ra(n),l=ta[t],p=oa[a],h=p.size,y=p.fontSize;return o(w,{alignItems:"center","aria-hidden":s,"aria-label":c,as:"span",css:b({textDecoration:"none",height:"".concat(h,"rem"),width:"".concat(h,"rem"),borderRadius:"50%",borderStyle:"solid",borderWidth:v.borderWidth.sm,borderColor:l,color:l},"",""),flexShrink:0,fontSize:y,fontWeight:"bold",justifyContent:"center",children:d})}var ta={neutral:g.foregroundMuted,action:g.foregroundAction},oa={sm:{fontSize:"xs",size:2},md:{fontSize:"sm",size:2.5},lg:{fontSize:"md",size:3},xl:{fontSize:"lg",size:4},xxl:{fontSize:"xl",size:4.5},xxxl:{fontSize:"xl",size:5}},$t=f.createContext(void 0);function ve(){var e=f.useContext($t);if(e===void 0)throw new Error("`AppLayoutContext` not found.");return e}function ia(e,n){var r=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=aa(e))||n){r&&(e=r);var t=0,i=function(){};return{s:i,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(l){throw l},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a,s=!0,c=!1;return{s:function(){r=r.call(e)},n:function(){var l=r.next();return s=l.done,l},e:function(l){c=!0,a=l},f:function(){try{s||r.return==null||r.return()}finally{if(c)throw a}}}}function aa(e,n){if(e){if(typeof e=="string")return Xn(e,n);var r={}.toString.call(e).slice(8,-1);return r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set"?Array.from(e):r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Xn(e,n):void 0}}function Xn(e,n){(n==null||n>e.length)&&(n=e.length);for(var r=0,t=Array(n);r<n;r++)t[r]=e[r];return t}var Y="xl",An="16rem",sa=function(n,r){if(!r)return"";var t=n.flatMap(function(l){return Array.isArray(l)?l:[l].concat(Rn(l.items))}).flatMap(function(l){return"items"in l&&l.items!==void 0?[l].concat(Rn(l.items)):l}).map(function(l){return l&&"href"in l&&l.href!==void 0?l.href:""}),i,a="",s=ia(t),c;try{for(s.s();!(c=s.n()).done;){var d=c.value;if(d===r){i=d;break}r!=null&&r.startsWith(d)&&d.length>a.length&&(a=d)}}catch(l){s.e(l)}finally{s.f()}return i||a};function la(e){var n=e.children,r=e.focusMode,t=r===void 0?!1:r,i=cn(!1),a=co(i,3),s=a[0],c=a[1],d=a[2];return o($t.Provider,{value:{focusMode:t,isMobileMenuOpen:s,openMobileMenu:c,closeMobileMenu:d},children:o(ca,{focusMode:t,children:n})})}function ca(e){var n=e.children,r=e.focusMode;return o("div",{css:ae({display:"grid",minHeight:"100vh",gridTemplateRows:"auto 1fr",gridTemplateColumns:vt(P({xs:"1fr"},Y,r?"1fr":"".concat(An," 1fr")))}),children:n})}function Vn(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,t)}return r}function ue(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?Vn(Object(r),!0).forEach(function(t){P(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Vn(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var de=1.5,un="3.75rem",da={name:"1kn4ch8",styles:"margin-left:-0.5rem;margin-right:-0.5rem;overflow:hidden"};function ua(e){var n=e.badgeLabel,r=e.dividerPosition,t=e.logo,i=e.heading,a=e.hasAccountDetails,s=e.href,c=e.secondHref,d=e.secondLogo,l=e.subLine,p=Mn();return t&&d?u(w,{css:da,flexDirection:{xs:"column",lg:"row"},flexWrap:{xs:"wrap",xl:"nowrap"},gap:{xs:1,md:de},inline:!0,padding:.5,children:[u(w,{css:b({marginRight:a&&r==="after"?A(de):0},"",""),flexDirection:{xs:"column",sm:"row"},flexShrink:0,gap:de,children:[o(w,{alignSelf:{xs:"start",sm:"center"},as:p,color:"text",css:b(ue({" img, svg":{height:un}},I.print.hidden),"",""),focusRingFor:"keyboard",href:s,children:t}),r==="between"&&o(tn,{dividerPosition:r}),o(w,ue(ue({alignSelf:{xs:"start",sm:"center"},as:c?p:"span",color:"text",css:b(ue({" img, svg":{width:"100%"}},I.print.hidden),"",""),focusRingFor:"keyboard"},c&&{href:c}),{},{children:d}))]}),u(w,{css:r==="after"?P({},v.mediaQuery.min.lg,{marginLeft:"calc(-".concat(a?A(de):0," - ").concat(v.borderWidth.sm,"px)")}):void 0,gap:de,children:[r==="after"&&o(tn,{dividerPosition:r}),u(D,{as:p,color:"text",css:b({textDecoration:"none",":hover":I.underline},"",""),focusRingFor:"keyboard",href:s,justifyContent:"center",children:[u(w,{alignItems:"flex-start",gap:.5,children:[o(x,{fontSize:"lg",fontWeight:"bold",children:i}),n&&o(Zn,{children:n})]}),l&&o(x,{color:"muted",fontSize:"xs",children:l})]})]})]}):u(w,{alignItems:{xs:"flex-start",md:"center"},as:p,color:"text",css:b({textDecoration:"none","&:hover":I.underline,svg:{display:"block",height:un,flexShrink:0}},"",""),flexDirection:{xs:"column",md:"row"},focusRingFor:"keyboard",gap:{xs:1,md:0},href:s,paddingY:.5,children:[t,o(tn,{singleLogo:!0}),u(w,{alignItems:"flex-start",flexDirection:"column",justifyContent:"center",maxWidth:v.maxWidth.bodyText,children:[u(w,{alignItems:"flex-start",gap:.5,children:[o(x,{fontSize:"lg",fontWeight:"bold",children:i}),n&&o(Zn,{children:n})]}),l&&o(x,{color:"muted",fontSize:"xs",children:l})]})]})}function Zn(e){var n=e.children;return o(M,{border:!0,borderWidth:"md",css:b({fontSize:"0.75rem",paddingTop:"2px",paddingBottom:"2px",borderColor:g.foregroundText,borderRadius:"2em"},"",""),fontWeight:"bold",paddingLeft:.5,paddingRight:.5,children:n})}var tn=function(n){var r=n.dividerPosition,t=n.singleLogo;return o(M,{borderLeft:!0,css:b(ue({margin:t?"0 1rem":void 0},I.print.hidden),"",""),display:t?{xs:"none",md:"block"}:{xs:"none",sm:r==="between"?"block":void 0,lg:"block"},height:t?un:void 0})},pa=["ref"];function Jn(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,t)}return r}function er(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?Jn(Object(r),!0).forEach(function(t){P(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Jn(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function fa(e){var n=e.children,r=e.name,t=e.secondaryText;return u(yo,{popoverOffset:-8,popoverPlacement:"bottom-end",children:[o(va,{name:r,secondaryText:t}),n]})}var ha={name:"d3v9zr",styles:"overflow:hidden"},ga={name:"d3v9zr",styles:"overflow:hidden"},ma={name:"ozd7xs",styles:"flex-shrink:0"};function va(e){var n=e.name,r=e.secondaryText,t=Oo(),i=t.isMenuOpen,a=Po(),s=a.ref,c=N(a,pa),d=f.useRef(0),l=Ke("sm");return f.useEffect(function(){d.current=window.innerWidth-document.documentElement.offsetWidth},[]),u(w,er(er({as:Ye,ref:s},c),{},{alignItems:"center",background:i?"shade":void 0,color:"action",css:ae({marginLeft:"auto",maxWidth:"calc(17.625rem - ".concat(d.current,"px)"),overflow:"hidden",svg:{transform:i?"rotate(180deg)":void 0,transition:l.transition},":hover":{backgroundColor:g.backgroundShade,"& > span:last-of-type > span:last-of-type":I.underline,svg:{transform:i?"rotate(180deg) ".concat(l.transform):l.transform}}}),focusRingFor:"keyboard",gap:1,justifyContent:"space-between",minHeight:"5.25rem",padding:1,children:[o(wn,{children:"Account menu"}),u(w,{alignItems:"center","aria-hidden":!0,as:"span",css:ha,gap:.5,width:"100%",children:[o(Ft,{name:n,size:"md",tone:"action"}),u(w,{as:"span",css:ga,flexDirection:"column",width:"100%",children:[o(x,{color:"action",css:I.truncate,fontSize:"xs",fontWeight:"bold",children:n}),r?o(x,{color:"muted",css:I.truncate,fontSize:"xs",children:r}):null]})]}),o(Sn,{css:ma,size:"sm",weight:"bold"})]}))}function nr(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,t)}return r}function on(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?nr(Object(r),!0).forEach(function(t){P(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):nr(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var ba={name:"d3v9zr",styles:"overflow:hidden"};function Wt(e){var n=e.name,r=e.secondaryText,t=e.href,i=e.dropdown,a=Mn(),s=f.useRef(0);if(f.useEffect(function(){s.current=window.innerWidth-document.documentElement.offsetWidth},[]),i)return o(fa,{name:n,secondaryText:r,children:i});var c=!!t;return u(w,on(on({as:"span"},c&&{as:a,href:t,focusRingFor:"keyboard"}),{},{alignItems:"center",css:ae(on({marginLeft:"auto",maxWidth:"calc(17.625rem - ".concat(s.current,"px)"),textDecoration:"none"},c&&{"&:hover":{"& > span > span":{textDecoration:"underline"}}})),flexShrink:0,gap:.5,minHeight:"5.25rem",textAlign:"right",children:[u(w,{as:"span",css:ba,flexDirection:"column",children:[o(x,{color:"action",css:I.truncate,fontSize:"xs",fontWeight:"bold",children:n}),r?o(x,{color:"muted",css:I.truncate,fontSize:"xs",children:r}):null]}),o(Ft,{"aria-hidden":!0,name:n,size:"md",tone:"action"})]}))}function rr(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,t)}return r}function ya(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?rr(Object(r),!0).forEach(function(t){P(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):rr(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function Oa(e){var n=e.accountDetails,r=ve(),t=r.focusMode,i=r.openMobileMenu;return u(w,{alignItems:"center",background:"body",display:P({xs:"flex"},Y,"none"),flexWrap:"wrap",justifyContent:t?"flex-end":"space-between",paddingLeft:.75,paddingRight:n!=null&&n.dropdown?.75:v.containerPadding,children:[t?null:o(Pa,{onClick:i}),n?o(Wt,ya({},n)):null]})}function Pa(e){var n=e.onClick,r=ve(),t=r.isMobileMenuOpen,i=Ke();return u(w,{alignItems:"center","aria-expanded":t,"aria-haspopup":"dialog",as:Ye,color:"action",css:b({svg:{transition:i.transition},"&:hover":{backgroundColor:g.backgroundShade,textDecoration:"underline",svg:{transform:i.transform}}},"",""),flexDirection:"column",focusRingFor:"keyboard",fontSize:"xs",gap:.5,justifyContent:"center",minHeight:"5.25rem",onClick:n,paddingX:1,children:[o(Io,{"aria-hidden":!0}),o("span",{children:"Menu"})]})}function tr(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,t)}return r}function wa(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?tr(Object(r),!0).forEach(function(t){P(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):tr(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function Ca(e){var n=e.accountDetails,r=e.background,t=r===void 0?"bodyAlt":r,i=e.badgeLabel,a=e.borderColor,s=a===void 0?"accent":a,c=e.dividerPosition,d=c===void 0?"after":c,l=e.heading,p=e.href,h=e.id,y=e.logo,C=e.palette,O=C===void 0?"dark":C,m=e.secondHref,k=e.secondLogo,S=e.subLine;return u(w,{as:"header",borderBottom:!0,borderBottomWidth:"xxl",borderColor:s,css:b(P({},v.mediaQuery.min[Y],{gridColumnStart:1,gridColumnEnd:3}),"",""),flexDirection:"column",id:h,palette:O,children:[u(w,{alignItems:"center",background:t,gap:1,justifyContent:"space-between",paddingX:v.containerPadding,paddingY:.5,width:"100%",children:[o(ua,{badgeLabel:i,dividerPosition:d,hasAccountDetails:!!n,heading:l,href:p,logo:y,secondHref:m,secondLogo:k,subLine:S}),o(M,{display:P({xs:"none"},Y,"flex"),children:n?o(Wt,wa({},n)):null})]}),o(Oa,{accountDetails:n})]})}var ka=["endElement","icon","isActive","items","label","level"];function or(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,t)}return r}function R(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?or(Object(r),!0).forEach(function(t){P(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):or(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var xa=function e(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return function(t){var i,a,s="href"in t&&t.href===n,c=s||Dn(t.items,n);return R(R({},t),{},{isActive:c,items:c||(i=t.items)!==null&&i!==void 0&&i.length?t==null||(a=t.items)===null||a===void 0?void 0:a.map(e(n,r+1)):void 0,level:r+1})}},ir=function(n){var r=n.activePath,t=n.background,i=n.items,a=n.subLevelVisible;return o(D,{"aria-label":"main",as:"nav",paddingBottom:1.5,children:o(D,{as:"ul",children:i.map(function(s,c){var d,l,p=c===0,h=(Array.isArray(s)?s:s.items).map(xa(r)),y=Array.isArray(s)?!1:!!(!((d=s.options)===null||d===void 0)&&d.disableGroupPadding),C=i[c-1],O=C?Array.isArray(C)?!1:!!(!((l=C.options)===null||l===void 0)&&l.disableGroupPadding):!1;return u(f.Fragment,{children:[p?null:o(Ia,{disablePaddingBottom:y,disablePaddingTop:O}),h.map(function(m,k){var S=Dn(m.items,r),L=a==="always"||S;return o(_t,{activePath:r,background:t,isActiveGroup:S,isOpen:L,item:m,subLevelVisible:a},k)})]},c)})})})},Sa={name:"1ff36h2",styles:"flex-grow:1"};function _t(e){var n=e.activePath,r=e.background,t=e.isActiveGroup,i=e.isOpen,a=e.item,s=e.subLevelVisible,c=Mn(),d=a.endElement,l=a.icon,p=a.isActive,h=a.items,y=a.label,C=a.level,O=N(a,ka),m=ve(),k=m.closeMobileMenu,S=(h==null?void 0:h.length)||0,L=S>0&&s!=="always";if("href"in a){var B,E,F,_=a.href===n;return u(an,{background:r,hasEndElement:!!d,isActive:t,isCurrentPage:_,isOpen:i,level:a.level,onClick:k,children:[u(c,R(R({"aria-current":_?"page":void 0},O),{},{children:[l&&C===1&&o(l,{color:"inherit"}),C===2&&o("span",{"aria-hidden":!0,children:"–"}),o("span",{css:Sa,children:y}),d,L&&(p?o(Sn,{"aria-hidden":!1,"aria-label":". Sub-level ".concat(S===1?"link":"links"," below."),size:"md"}):o(Lo,{"aria-hidden":!1,"aria-label":". Has ".concat(S," sub-level ").concat(S===1?"link":"links","."),size:"md"}))]})),!!(!((B=a.items)===null||B===void 0)&&B.length)&&(i||_)&&o(D,{as:"ul",children:(E=a.items)===null||E===void 0||(F=E.map)===null||F===void 0?void 0:F.call(E,function(re){var G;return o(_t,{activePath:n,background:r,isActiveGroup:!!p,isOpen:i,item:re,subLevelVisible:s},(G=re.label)===null||G===void 0?void 0:G.toString())})})]})}return"onClick"in a?o(an,{background:r,hasEndElement:!!d,isActive:!1,isCurrentPage:!1,isOpen:!1,onClick:k,children:u(Ye,R(R({},O),{},{children:[l?o(l,{color:"inherit"}):null,o("span",{children:y}),d]}))}):o(an,{background:r,hasEndElement:!1,isActive:!1,isCurrentPage:!1,isOpen:!1,children:o(D,{as:"span",gap:.25,children:y})})}function an(e){var n=e.background,r=e.children,t=e.hasEndElement,i=e.isCurrentPage,a=e.isActive,s=e.isOpen,c=e.level,d=e.onClick;return o("li",{css:b({"> a, > button, > span":{width:"100%",boxSizing:"border-box",wordBreak:"break-word",paddingTop:A(1),paddingBottom:A(1),paddingLeft:A(c===2?3:1.5),paddingRight:A(1),"& > svg":{flexShrink:0}},"> a, > button":R(R(R(R({position:"relative",display:"flex",alignItems:"center",gap:A(.75),color:a&&c!==2||i?g.foregroundText:g.foregroundAction},(a||i||s)&&{fontWeight:i?v.fontWeight.bold:v.fontWeight.normal,background:i?g.selectedMuted:void 0,"&::before":R(R(R({content:"''",position:"absolute",top:0,left:0,bottom:0,borderLeftStyle:"solid",borderLeftWidth:v.borderWidth.xl},i&&{borderLeftColor:g.selected}),!i&&a&&{borderLeftColor:g.borderMuted}),!i&&!a&&s&&{borderLeft:"none"})}),t&&{"& > :last-child":{marginLeft:"auto"}}),{},{"&:hover":P({background:g[n==="body"?"backgroundShade":"backgroundShadeAlt"],color:g.foregroundText},"& > span:nth-of-type(".concat(c,")"),I.underline)},uo),{},{":focus-visible":{zIndex:v.zIndex.elevated,outlineOffset:"-".concat(I.outline.outlineWidth),"&::before":{zIndex:-1}}}),"> span":{color:g.foregroundText},"> a":{textDecoration:"none"}},"",""),onClick:d,children:r})}function Ia(e){var n=e.disablePaddingTop,r=e.disablePaddingBottom;return o(M,{"aria-hidden":!0,as:"li",paddingBottom:r?0:1,paddingTop:n?0:1,children:o("hr",{css:b({boxSizing:"content-box",height:0,margin:0,overflow:"visible",border:"none",borderTopWidth:v.borderWidth.sm,borderTopStyle:"solid",borderColor:g.borderMuted,width:"100%"},"","")})})}function Dn(e,n){return e!=null&&e.length&&n?e.some(function(r){return"href"in r&&r.href===n||"items"in r&&Dn(r.items,n)}):!1}var La={name:"qvn77x",styles:"inset:0;overflow-y:auto;position:fixed"};function Ma(e){var n=e.children,r=e.palette,t=ve(),i=t.isMobileMenuOpen,a=t.closeMobileMenu,s=Lt(),c=f.useState(!0),d=c[0],l=c[1],p=Rt();f.useEffect(function(){i&&l(!1)},[i]),f.useEffect(function(){var O=function(k){k.code==="Escape"&&(k.preventDefault(),k.stopPropagation(),a())};return window.addEventListener("keydown",O),function(){return window.removeEventListener("keydown",O)}},[a]);var h=Cn(p?i:!1),y=h.modalContainerRef;if(!p||!kn())return null;var C=i?!0:!d;return Ln.createPortal(u(yt,{children:[i&&o(Aa,{}),u("div",{ref:y,children:[o("div",{css:b({pointerEvents:"none",position:"absolute",opacity:i?1:0,transition:i?"none":"opacity ".concat(s?"1ms":"150ms")},"",""),"data-app-layout-sidebar":"transitioner",onTransitionEnd:function(){l(!0)}}),o(Da,{isOpen:i,onClick:a,prefersReducedMotion:s}),o(M,{css:b({bottom:0,left:0,position:"fixed",top:0,transform:"translateX(".concat(i?"0":"-100%",")"),transition:"transform ".concat(s?"1ms":"150ms"," ease"),zIndex:v.zIndex.dialog},"",""),display:P({},Y,"none"),width:An,children:C&&o(xn,{returnFocus:!0,children:u(M,{"aria-label":"Menu","aria-modal":!0,background:"shade",css:La,display:P({},Y,"none"),palette:r,role:"dialog",children:[o(ja,{onClick:a}),n]})})})]})]}),document.body)}function Aa(){return o(On,{styles:b(P({body:{overflow:"hidden"}},v.mediaQuery.min[Y],{body:{overflow:"unset"}}),"","")})}function Da(e){var n=e.isOpen,r=e.onClick,t=e.prefersReducedMotion;return o("div",{css:b(P({backgroundColor:g.overlay,display:"block",inset:0,opacity:n?1:0,pointerEvents:n?"all":"none",position:"fixed",transition:"opacity ".concat(t?"1ms":"150ms"," ease"),zIndex:v.zIndex.overlay},v.mediaQuery.min[Y],{display:"none"}),"",""),onClick:r})}function ja(e){var n=e.onClick,r=Ke();return o(w,{alignItems:"center",borderBottom:!0,borderColor:"muted",flexShrink:0,paddingLeft:1,children:u(w,{alignItems:"center",as:Ye,color:"action",css:b({svg:{transition:r.transition},":focus":{outlineOffset:"-".concat(I.outline.outlineWidth)},":hover svg":{transform:r.transform}},"",""),flexDirection:"column",focusRingFor:"keyboard",fontSize:"xs",gap:.5,onClick:n,padding:1,children:[o(Qe,{}),o("span",{"aria-hidden":!0,children:"Close"}),o(wn,{children:"Close menu"})]})})}function ar(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,t)}return r}function Oe(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?ar(Object(r),!0).forEach(function(t){P(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ar(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function sr(e){var n=e.activePath,r=e.background,t=r===void 0?"bodyAlt":r,i=e.items,a=e.palette,s=e.subLevelVisible,c=s===void 0?"whenActive":s,d=ve(),l=d.focusMode,p=sa(i,n),h={activePath:p,items:i,subLevelVisible:c};return u(f.Fragment,{children:[o(D,{background:t,borderColor:"muted",borderRight:!0,css:b(P({display:"none",width:An},v.mediaQuery.min[Y],{display:l?"none":"flex"}),"",""),flexGrow:1,gap:1,palette:a,children:o(ir,Oe(Oe({},h),{},{background:t}))}),o(Ma,{palette:a,children:o(ir,Oe(Oe({},h),{},{background:"bodyAlt"}))})]})}var Ba={name:"ovk77c",styles:"min-width:0"};function Ea(e){var n=e.children;return o(w,{css:Ba,flexDirection:"column",children:n})}var Ra={name:"xdvdnl",styles:"margin-top:auto"};function Ta(e){var n=e.background,r=n===void 0?"body":n,t=e.children,i=e.id,a=e.maxWidth,s=e.palette;return o(M,{as:"footer",background:r,css:Ra,id:i,palette:s,children:o(go,{maxWidth:a,children:o(D,{borderColor:"muted",borderTop:!0,borderTopWidth:"xl",gap:1.5,paddingY:3,width:"100%",children:t})})})}function za(){return o("hr",{"aria-hidden":!0,css:b({boxSizing:"content-box",height:0,margin:0,overflow:"visible",border:"none",borderTopWidth:1,borderTopStyle:"solid",borderColor:g.borderMuted,width:"100%"},"","")})}const K={account:"/account",profile:"/account/profile",dashboard:"/account/dashboard",people:"/account/manage-people",inbox:"/account/messages",linkBusiness:"/account/link-a-business",acceptInvite:"/account/invitation/accept"},Fa=bo(u(f.Fragment,{children:[o("path",{d:"M4 2V22L6 21L8 22L10 21L12 22L14 21L16 22L18 21L20 22V2L18 3L16 2L14 3L12 2L10 3L8 2L6 3L4 2Z"}),o("path",{d:"M16 8H10C9.46957 8 8.96086 8.21071 8.58579 8.58579C8.21071 8.96086 8 9.46957 8 10C8 10.5304 8.21071 11.0391 8.58579 11.4142C8.96086 11.7893 9.46957 12 10 12H14C14.5304 12 15.0391 12.2107 15.4142 12.5858C15.7893 12.9609 16 13.4696 16 14C16 14.5304 15.7893 15.0391 15.4142 15.4142C15.0391 15.7893 14.5304 16 14 16H8"}),o("path",{d:"M12 17.5V6.5"})]}),"PaymentIcon"),$a=[{href:"/about",label:"About"},{href:"/about/contact-us",label:"Contact us"},{href:"/help",label:"Help"},{href:"https://www.agriculture.gov.au/about/commitment/accessibility",rel:"external",label:"Accessibility"},{href:"https://www.agriculture.gov.au/about/disclaimer",rel:"external",label:"Disclaimer"},{href:"/privacy",label:"Privacy"}],H={dashboard:{label:"Dashboard",icon:Mo,href:K.dashboard},people:{label:"People",icon:Ao,href:K.people},establishments:{label:"Establishments",icon:In,href:"/establishments"},intelligence:{label:"Data and Insights",icon:Do,href:"/intelligence"},compliance:{label:"Compliance",icon:jo,href:"/compliance"},quotas:{label:"Quotas",icon:kt,href:"/quota"},exportSystems:{label:"Export systems",icon:Bo,href:"/export-systems"},licences:{label:"Licences",icon:Eo,href:"/licences"},invoices:{label:"Invoices and payments",icon:Fa,href:"/inexs"}},Nt=e=>{var n,r,t,i,a,s;return[H.dashboard,...(n=e==null?void 0:e.features)!=null&&n.people?[H.people]:[],H.establishments,H.intelligence,H.compliance,...(r=e==null?void 0:e.features)!=null&&r.quotas?[H.quotas]:[],...((t=e==null?void 0:e.features)==null?void 0:t.exportSystems)??((i=e==null?void 0:e.features)==null?void 0:i.exportDocumentation)?[H.exportSystems]:[],...(a=e==null?void 0:e.features)!=null&&a.licences?[H.licences]:[],...(s=e==null?void 0:e.features)!=null&&s.invoices?[H.invoices]:[]]};function Wa({onSignOutClick:e,features:n}){return[Nt({features:n}),[{label:u(w,{as:"span",alignItems:"center",gap:.5,children:["Help",o(vo,{}),o(Ro,{weight:"regular",size:"sm"})]}),icon:xt,href:"/help",target:"_blank",rel:"noopener"}],[{label:"Sign out",onClick:e,icon:St}]]}const _a=(e,n)=>{var i;if(!n)return;let r,t;for(const a of e){if(a.href===n){r=a;break}n.startsWith(a.href)&&a.href.length>(((i=t==null?void 0:t.href)==null?void 0:i.length)??0)&&(t=a)}return r||t},Na=e=>n=>n===!0||n==e,qt=(e,n)=>r=>Na(e)(r)?n:{},qa=qt("header",{palette:"light",borderColor:"selected"}),lr=qt("sidebar",{background:"body"});var Ga={neutral:g.foregroundMuted,action:g.foregroundAction};function cr(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,t)}return r}function Ha(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?cr(Object(r),!0).forEach(function(t){P(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):cr(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var Ua=function(n){var r=n.value,t=n.max,i=n.tone,a=n["aria-hidden"],s=Ga[i];return o(x,{alignItems:"center","aria-hidden":a,css:b(Ha({color:g.backgroundBody,backgroundColor:s,minWidth:A(1.5),borderRadius:A(.75)},Ot.exactColor),"",""),display:"inline-flex",fontSize:"sm",height:A(1.5),highContrastOutline:!0,justifyContent:"center",lineHeight:"nospace",paddingX:.5,rounded:!0,children:t===void 0||r<=t?r:"".concat(t,"+")})};const Ya=e=>{var n;return((n=e==null?void 0:e.linkedBusinesses)==null?void 0:n.map(r=>{var t;return{...r,selected:((t=e==null?void 0:e.selectedBusiness)==null?void 0:t.partyId)===r.partyId,setSelected:()=>e.setSelectedBusiness(r)}}))??[]},Ka=new Set(["MANAGER","PRINCIPAL_AUTHORITY_OWNER","USER"]),Qa=e=>e!=null&&e.roleName?Ka.has(e.roleName):!1,Xa=e=>e.businesses.length===0?u(dn,{label:"Get started",children:[e!=null&&e.preventAddBusiness?null:o(fe,{href:K.linkBusiness,children:"Add a business to the Export Service"}),o(fe,{href:K.acceptInvite,children:"Accept an invite"})]}):u(dn,{label:"Businesses",children:[e.businesses.slice(0,3).map(n=>o(ko,{checked:n.selected??!1,secondaryText:n.formattedPartyExternalId,onClick:e.onSelectBusiness(n),children:n.partyDisplayName},n.partyId)),e.businesses.length>3?o(fe,{href:"/account",endElement:o(It,{}),children:"View all businesses"}):null]}),Va=e=>{const n=t=>()=>{var i;return(i=t==null?void 0:t.setSelected)==null?void 0:i.call(t)},r=Ya(e.businessDetails);return u(Co,{palette:"light",children:[o(Xa,{businesses:r,onSelectBusiness:n,preventAddBusiness:e.preventAddBusiness}),o(Tn,{}),u(dn,{label:"My account",children:[o(fe,{href:K.inbox,icon:zo,endElement:typeof e.unreadMessageCount=="number"&&e.unreadMessageCount>0?u("span",{children:[o(Ua,{tone:"action",value:e.unreadMessageCount,max:99,"aria-hidden":!0}),u(wn,{children:[", ",e.unreadMessageCount," unread"]})]}):void 0,children:"Inbox"}),o(fe,{href:K.profile,icon:Fo,children:"Profile and settings"})]}),o(Tn,{}),o(wo,{onClick:e.onSignOutClick,icon:St,children:"Sign out"})]})},Za=e=>(e==null?void 0:e.selectedBusiness)===void 0?[]:[{options:{disableGroupPadding:!0},items:[{label:"Back to my account",icon:To,href:"/account"}]},{options:{disableGroupPadding:!0},items:[{label:u(f.Fragment,{children:[o(x,{fontWeight:"bold",fontSize:"xs",children:e.selectedBusiness.partyDisplayName}),o(x,{color:"muted",fontSize:"xs",children:e.selectedBusiness.formattedPartyExternalId})]})}]}],Ja=e=>{var n;return e.selectedBusiness?{...e==null?void 0:e.features,people:((n=e==null?void 0:e.features)==null?void 0:n.people)??Qa(e.selectedBusiness)}:e.features};var es=["children"],ns=["as","children","direction","className"];function dr(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,t)}return r}function Ne(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?dr(Object(r),!0).forEach(function(t){P(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):dr(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var Gt=function(n){var r=n.children,t=N(n,es);return o(rs,Ne(Ne({as:_e},t),{},{children:r}))},rs=function(n){var r=n.as,t=n.children,i=n.direction,a=n.className,s=N(n,ns),c=ts[i],d=i==="left",l=Ke("sm");return u(w,Ne(Ne({alignItems:"center",as:r,className:a,css:b({alignSelf:"flex-start",svg:{transition:l.transition},":hover svg":{transform:l.transform}},"",""),focusRingFor:"keyboard",fontFamily:"body",fontWeight:"normal",gap:.5,inline:!0,link:!0},s),{},{children:[d?o(c,{size:"sm"}):null,t,d?null:o(c,{size:"sm"})]}))},ts={up:_o,right:It,down:Wo,left:$o};function os(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.focusOnMount,r=e.focusOnUpdate,t=e.forwardedRef,i=f.useRef(null),a=t||i;return f.useEffect(function(){var s,c;!r&&!n||!("current"in a)||Array.isArray(r)&&r.filter(Boolean).length===0||a==null||(s=a.current)===null||s===void 0||(c=s.focus)===null||c===void 0||c.call(s)},[r]),a}var is=function(n){var r=n.as,t=r===void 0?"h2":r,i=n.children,a=n.hasDismissButton,s=n.hasCloseButton;return o(x,{as:t,css:ae(P({marginRight:s||a?"2.5rem":void 0},v.mediaQuery.min.sm,{marginRight:"0"})),fontSize:"lg",fontWeight:"bold",lineHeight:"heading",children:i})},as=function(n){var r,t=n.onClick;return o(U,{"aria-label":"Close",css:ae((r={position:"absolute",top:"1.5rem",right:"1.5rem",flexShrink:0},P(r,v.mediaQuery.min.sm,{position:"relative",top:"unset",right:"unset"}),P(r,"& > span:first-of-type",P({display:"none"},v.mediaQuery.min.sm,{display:"block"})),r)),iconAfter:Qe,onClick:t,variant:"text",children:"Close"})};function ur(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,t)}return r}function ss(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?ur(Object(r),!0).forEach(function(t){P(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ur(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var ls=f.forwardRef(function(n,r){var t=n.id,i=n.focusOnMount,a=n.focusOnUpdate,s=n.role,c=n.children,d=n.onClose,l=n.onDismiss,p=n.title,h=n.tone,y=n.tabIndex,C=os({focusOnMount:i,focusOnUpdate:a,forwardedRef:r}),O=ji(d,l),m=cs[h],k=m.fg,S=m.bg,L=m.icon;return u(w,{css:b({backgroundColor:S,position:"relative"},"",""),focusRingFor:"all",highContrastOutline:!0,id:t,ref:C,role:s,rounded:!0,tabIndex:y??(i||a?-1:void 0),children:[o(w,{alignItems:"center",css:b(ss({borderTopLeftRadius:v.borderRadius,borderBottomLeftRadius:v.borderRadius,backgroundColor:k,color:g.backgroundBody},Ot.exactColor),"",""),padding:.5,children:L}),u(w,{alignItems:"flex-start",css:b(P({marginRight:O&&!p?"3rem":void 0},v.mediaQuery.min.sm,{marginRight:"0"}),"",""),flexGrow:1,gap:1,padding:1.5,children:[u(w,{alignItems:"flex-start",flexDirection:"column",flexGrow:1,gap:1,children:[p?f.isValidElement(p)?p:o(is,{hasCloseButton:!!O,children:p}):null,c]}),O?o(as,{onClick:O}):null]})]})}),cs={success:{fg:g.systemSuccess,bg:g.systemSuccessMuted,icon:o(Go,{"aria-hidden":"false","aria-label":"Success"})},error:{fg:g.systemError,bg:g.systemErrorMuted,icon:o(Ct,{"aria-hidden":"false","aria-label":"Error"})},info:{fg:g.systemInfo,bg:g.systemInfoMuted,icon:o(qo,{"aria-hidden":"false","aria-label":"Information"})},warning:{fg:g.systemWarning,bg:g.systemWarningMuted,icon:o(No,{"aria-hidden":"false","aria-label":"Warning"})}};const ds=["IP1","IP2","IP3","IP4"],Ht=Array.from(ds),us=e=>{const n=[];return e.forEach(r=>n.unshift(r)),n},pn=new Set(Ht),pr=new Set(us(Ht)),ps={descriptor:"Unknown"},fs={IP1:{level:"IP1",descriptor:"Basic"},IP2:{level:"IP2",descriptor:"Standard"},IP3:{level:"IP3",descriptor:"Strong"},IP4:{level:"IP4",descriptor:"Strong"}},hs=e=>pn.has(e),qe=(e,n)=>{const r=e&&hs(e)?fs[e]:ps;return n!=null&&n.short||r.level===void 0?r.descriptor:`${r.descriptor} (${r.level})`},Ut=(e,n)=>Array.from(e).filter(r=>n.has(r)),Yt=(e,n)=>Array.from(e).filter(r=>!n.has(r)),pe=e=>{const n=new Set(e??[]);return[...Ut(pr,n),...Yt(n,pr)][0]},Kt=e=>{const n=new Set(e??[]);return[...Ut(pn,n),...Yt(n,pn)][0]},fr=e=>e===void 0?[]:Array.isArray(e)?e:[e],gs=(e,n)=>{if(n===void 0||e.length===0)return!0;const r=new Set(n);return e.some(t=>r.has(t))},hr=e=>((e==null?void 0:e.trim())??"")==="",Qt=()=>o(te,{children:u(Qo,{title:"Need more help?",children:[u(x,{children:["Email"," ",o(_e,{href:"mailto:exportservice@aff.gov.au",children:"exportservice@aff.gov.au"})]}),u(x,{children:["Call ",o(_e,{href:"tel:1800571125",children:"1800 571 125"}),", Monday to Friday, 9 am to 5 pm AEST"]})]})}),ms=e=>o(W,{children:u(D,{gap:3,children:[o(te,{children:o(Gt,{href:K.dashboard,direction:"left",children:"Back to Dashboard"})}),u(q,{children:[o("h1",{children:"Single names in the Export Service"}),o("p",{children:"If you are legally known by a single name, you can use it to access an Export Service account. Other services we offer may not accept a single name and you will need to use a given and family name."}),o("p",{children:"Contact support if you need more help."})]}),o(wt,{}),o(Qt,{})]})}),vs=e=>{const n=qe(e.providedProofingLevel),r=qe(e.requiredProofingLevel,{short:!0});return o(W,{children:u(D,{gap:3,children:[o(te,{children:o(Gt,{href:K.dashboard,direction:"left",children:"Back"})}),u(q,{children:[o("h1",{children:e.activeApp??"Use a higher identity strength"}),o(M,{className:po,children:u(ls,{tone:"info",title:"You can't access this feature",children:["Sign in with myID and use a ‘",r,"’ identity strength or higher to access this feature."]})}),o("h2",{children:"Review your profile and settings"}),u("p",{children:["Your current identity strength is ",n,". To access this feature you must add myID to your account from your"," ",o(_e,{href:"TODO",children:"Profile and settings"}),", then sign in."]})]}),o(wt,{}),o(Qt,{})]})})},Xt={MissingName:ms,ProofMissing:vs},bs=({claims:e,errorComponents:n,requiredProofingLevel:r,authDetails:t,activeApp:i,children:a})=>{const s=n.MissingGivenName??n.MissingName,c=n.MissingFamilyName??n.MissingName,d=n.ProofMissing,l=fr(r),p=fr(t==null?void 0:t.proofingLevel);if(!gs(l,p)){const h=Kt(l),y=pe(p);return o(d,{requiredProofingLevel:h,providedProofingLevel:y,activeApp:i})}return e===void 0?o(f.Fragment,{children:a}):hr(e==null?void 0:e.given_name)?o(s,{children:a}):hr(e==null?void 0:e.family_name)?o(c,{children:a}):o(f.Fragment,{children:a})},ys=Object.values,Os={IP1:{AL1:"urn:id.gov.au:tdif:acr:ip1:cl1",AL2:"urn:id.gov.au:tdif:acr:ip1:cl2",AL3:"urn:id.gov.au:tdif:acr:ip1:cl3",PlusAL1:"urn:id.gov.au:tdif:acr:ip1p:cl1",PlusAL2:"urn:id.gov.au:tdif:acr:ip1p:cl2",PlusAL3:"urn:id.gov.au:tdif:acr:ip1p:cl3"},IP2:{AL2:"urn:id.gov.au:tdif:acr:ip2:cl2",AL3:"urn:id.gov.au:tdif:acr:ip2:cl3",PlusAL2:"urn:id.gov.au:tdif:acr:ip2p:cl2",PlusAL3:"urn:id.gov.au:tdif:acr:ip2p:cl3"},IP3:{AL2:"urn:id.gov.au:tdif:acr:ip3:cl2",AL3:"urn:id.gov.au:tdif:acr:ip3:cl3"},IP4:{AL3:"urn:id.gov.au:tdif:acr:ip4:cl3"}},Ps=["IP1","IP2","IP3","IP4"],ws=Object.fromEntries(Ps.map((e,n,r)=>[e,r.slice(0,n)])),Pe=e=>Object.fromEntries(ys(Os[e]).map(n=>[n,e])),fn={...Pe("IP1"),...Pe("IP2"),...Pe("IP3"),...Pe("IP4")},Cs=e=>e in fn,ks=e=>e===void 0?[]:Array.isArray(e)?e:[e],We=(e,n)=>{const t=ks(e.AARM_acr).flatMap(i=>Cs(i)?[fn[i],...ws[fn[i]]]:[i]);return Array.from(new Set(t))},xs=e=>(e==null?void 0:e.credentialType)==="myGovID"?"myID":(e==null?void 0:e.credentialType)==="B2CLocalUser"?"B2CLocalUser":void 0,Ss=(e,n)=>e?{provider:xs(e),proofingLevel:We(e)}:void 0,Vt=f.createContext(void 0),Zt=()=>{var e;return(e=f.useContext(Vt))==null?void 0:e.onSignOutClick};function Z({activePath:e,children:n,focusMode:r=!1,handleSignOut:t,mainContentId:i="main-content",unreadMessageCount:a,userName:s,businessDetails:c,claims:d,errorComponents:l,features:p,requiredProofingLevel:h,authDetails:y,sidebarItems:C,sidebarSubLevelVisible:O,headerProps:m,internal:k}){var En;const S=f.useMemo(()=>new Date().getFullYear(),[]),L=f.useContext(Uo),[B,E,F]=cn(!1),[_,re,G]=cn(!1),le=E,ce=t,be=Ja({features:p,selectedBusiness:c==null?void 0:c.selectedBusiness}),io=f.useMemo(()=>Nt({features:be}),[be]),ao=f.useMemo(()=>[...Za(c),...Wa({onSignOutClick:le,features:be})],[le,c,be]),so=Ss(d),ye=y??so,en=_a(io,e),lo=(ye==null?void 0:ye.provider)==="B2CLocalUser";return o(la,{focusMode:r,children:o(Vt.Provider,{value:{onSignOutClick:le},children:u(te,{children:[o(Ca,{href:(m==null?void 0:m.href)??"/account",heading:(m==null?void 0:m.heading)??"Export Service",subLine:(m==null?void 0:m.subLine)??"Supporting Australian agricultural exports",badgeLabel:(m==null?void 0:m.badgeLabel)??"Beta",logo:o(Yo,{}),accountDetails:s?{href:K.account,name:s,secondaryText:((En=c==null?void 0:c.selectedBusiness)==null?void 0:En.partyDisplayName)??"My account",dropdown:c?o(Va,{businessDetails:c,unreadMessageCount:a,onSignOutClick:le,preventAddBusiness:lo}):void 0}:void 0,...qa(k)}),C?o(te,{...L,children:o(sr,{activePath:e,items:C,subLevelVisible:O,...lr(k)})}):o(sr,{activePath:e,items:ao,...lr(k)}),u(Ea,{children:[o(te,{...L,children:o("main",{id:i,tabIndex:-1,css:{"&:focus":{outline:"none"}},children:o(bs,{claims:d,authDetails:ye,requiredProofingLevel:h,errorComponents:{...Xt,...l},activeApp:en==null?void 0:en.label,children:n})})}),u(Ta,{children:[o("nav",{"aria-label":"footer",children:o(Ko,{links:$a,horizontal:!0})}),o(za,{}),o(x,{fontSize:"xs",maxWidth:v.maxWidth.bodyText,children:"We acknowledge the traditional owners of country throughout Australia and recognise their continuing connection to land, waters and culture. We pay our respects to their Elders past, present and emerging."}),u(x,{fontSize:"xs",maxWidth:v.maxWidth.bodyText,children:["© ",S," Department of Agriculture, Fisheries and Forestry"]})]})]}),o(zt,{isOpen:B,onClose:F,title:"Do you want to sign out?",actions:u(Pn,{children:[o(U,{onClick:async()=>{re(),await ce(),G(),F()},loading:_,disabled:_,children:"Sign out"}),o(U,{variant:"secondary",onClick:F,children:"Cancel"})]}),children:o(x,{as:"p",children:"This will end your current session with the Export Service."})})]})})})}var Jt=Symbol.for("immer-nothing"),gr=Symbol.for("immer-draftable"),T=Symbol.for("immer-state");function $(e,...n){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var oe=Object.getPrototypeOf;function ie(e){return!!e&&!!e[T]}function J(e){var n;return e?eo(e)||Array.isArray(e)||!!e[gr]||!!((n=e.constructor)!=null&&n[gr])||Ve(e)||Ze(e):!1}var Is=Object.prototype.constructor.toString();function eo(e){if(!e||typeof e!="object")return!1;const n=oe(e);if(n===null)return!0;const r=Object.hasOwnProperty.call(n,"constructor")&&n.constructor;return r===Object?!0:typeof r=="function"&&Function.toString.call(r)===Is}function Ge(e,n){Xe(e)===0?Reflect.ownKeys(e).forEach(r=>{n(r,e[r],e)}):e.forEach((r,t)=>n(t,r,e))}function Xe(e){const n=e[T];return n?n.type_:Array.isArray(e)?1:Ve(e)?2:Ze(e)?3:0}function hn(e,n){return Xe(e)===2?e.has(n):Object.prototype.hasOwnProperty.call(e,n)}function no(e,n,r){const t=Xe(e);t===2?e.set(n,r):t===3?e.add(r):e[n]=r}function Ls(e,n){return e===n?e!==0||1/e===1/n:e!==e&&n!==n}function Ve(e){return e instanceof Map}function Ze(e){return e instanceof Set}function X(e){return e.copy_||e.base_}function gn(e,n){if(Ve(e))return new Map(e);if(Ze(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);const r=eo(e);if(n===!0||n==="class_only"&&!r){const t=Object.getOwnPropertyDescriptors(e);delete t[T];let i=Reflect.ownKeys(t);for(let a=0;a<i.length;a++){const s=i[a],c=t[s];c.writable===!1&&(c.writable=!0,c.configurable=!0),(c.get||c.set)&&(t[s]={configurable:!0,writable:!0,enumerable:c.enumerable,value:e[s]})}return Object.create(oe(e),t)}else{const t=oe(e);if(t!==null&&r)return{...e};const i=Object.create(t);return Object.assign(i,e)}}function jn(e,n=!1){return Je(e)||ie(e)||!J(e)||(Xe(e)>1&&(e.set=e.add=e.clear=e.delete=Ms),Object.freeze(e),n&&Object.entries(e).forEach(([r,t])=>jn(t,!0))),e}function Ms(){$(2)}function Je(e){return Object.isFrozen(e)}var As={};function ee(e){const n=As[e];return n||$(0,e),n}var ge;function ro(){return ge}function Ds(e,n){return{drafts_:[],parent_:e,immer_:n,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function mr(e,n){n&&(ee("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=n)}function mn(e){vn(e),e.drafts_.forEach(js),e.drafts_=null}function vn(e){e===ge&&(ge=e.parent_)}function vr(e){return ge=Ds(ge,e)}function js(e){const n=e[T];n.type_===0||n.type_===1?n.revoke_():n.revoked_=!0}function br(e,n){n.unfinalizedDrafts_=n.drafts_.length;const r=n.drafts_[0];return e!==void 0&&e!==r?(r[T].modified_&&(mn(n),$(4)),J(e)&&(e=He(n,e),n.parent_||Ue(n,e)),n.patches_&&ee("Patches").generateReplacementPatches_(r[T].base_,e,n.patches_,n.inversePatches_)):e=He(n,r,[]),mn(n),n.patches_&&n.patchListener_(n.patches_,n.inversePatches_),e!==Jt?e:void 0}function He(e,n,r){if(Je(n))return n;const t=n[T];if(!t)return Ge(n,(i,a)=>yr(e,t,n,i,a,r)),n;if(t.scope_!==e)return n;if(!t.modified_)return Ue(e,t.base_,!0),t.base_;if(!t.finalized_){t.finalized_=!0,t.scope_.unfinalizedDrafts_--;const i=t.copy_;let a=i,s=!1;t.type_===3&&(a=new Set(i),i.clear(),s=!0),Ge(a,(c,d)=>yr(e,t,i,c,d,r,s)),Ue(e,i,!1),r&&e.patches_&&ee("Patches").generatePatches_(t,r,e.patches_,e.inversePatches_)}return t.copy_}function yr(e,n,r,t,i,a,s){if(ie(i)){const c=a&&n&&n.type_!==3&&!hn(n.assigned_,t)?a.concat(t):void 0,d=He(e,i,c);if(no(r,t,d),ie(d))e.canAutoFreeze_=!1;else return}else s&&r.add(i);if(J(i)&&!Je(i)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;He(e,i),(!n||!n.scope_.parent_)&&typeof t!="symbol"&&Object.prototype.propertyIsEnumerable.call(r,t)&&Ue(e,i)}}function Ue(e,n,r=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&jn(n,r)}function Bs(e,n){const r=Array.isArray(e),t={type_:r?1:0,scope_:n?n.scope_:ro(),modified_:!1,finalized_:!1,assigned_:{},parent_:n,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let i=t,a=Bn;r&&(i=[t],a=me);const{revoke:s,proxy:c}=Proxy.revocable(i,a);return t.draft_=c,t.revoke_=s,c}var Bn={get(e,n){if(n===T)return e;const r=X(e);if(!hn(r,n))return Es(e,r,n);const t=r[n];return e.finalized_||!J(t)?t:t===sn(e.base_,n)?(ln(e),e.copy_[n]=yn(t,e)):t},has(e,n){return n in X(e)},ownKeys(e){return Reflect.ownKeys(X(e))},set(e,n,r){const t=to(X(e),n);if(t!=null&&t.set)return t.set.call(e.draft_,r),!0;if(!e.modified_){const i=sn(X(e),n),a=i==null?void 0:i[T];if(a&&a.base_===r)return e.copy_[n]=r,e.assigned_[n]=!1,!0;if(Ls(r,i)&&(r!==void 0||hn(e.base_,n)))return!0;ln(e),bn(e)}return e.copy_[n]===r&&(r!==void 0||n in e.copy_)||Number.isNaN(r)&&Number.isNaN(e.copy_[n])||(e.copy_[n]=r,e.assigned_[n]=!0),!0},deleteProperty(e,n){return sn(e.base_,n)!==void 0||n in e.base_?(e.assigned_[n]=!1,ln(e),bn(e)):delete e.assigned_[n],e.copy_&&delete e.copy_[n],!0},getOwnPropertyDescriptor(e,n){const r=X(e),t=Reflect.getOwnPropertyDescriptor(r,n);return t&&{writable:!0,configurable:e.type_!==1||n!=="length",enumerable:t.enumerable,value:r[n]}},defineProperty(){$(11)},getPrototypeOf(e){return oe(e.base_)},setPrototypeOf(){$(12)}},me={};Ge(Bn,(e,n)=>{me[e]=function(){return arguments[0]=arguments[0][0],n.apply(this,arguments)}});me.deleteProperty=function(e,n){return me.set.call(this,e,n,void 0)};me.set=function(e,n,r){return Bn.set.call(this,e[0],n,r,e[0])};function sn(e,n){const r=e[T];return(r?X(r):e)[n]}function Es(e,n,r){var i;const t=to(n,r);return t?"value"in t?t.value:(i=t.get)==null?void 0:i.call(e.draft_):void 0}function to(e,n){if(!(n in e))return;let r=oe(e);for(;r;){const t=Object.getOwnPropertyDescriptor(r,n);if(t)return t;r=oe(r)}}function bn(e){e.modified_||(e.modified_=!0,e.parent_&&bn(e.parent_))}function ln(e){e.copy_||(e.copy_=gn(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var Rs=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(n,r,t)=>{if(typeof n=="function"&&typeof r!="function"){const a=r;r=n;const s=this;return function(d=a,...l){return s.produce(d,p=>r.call(this,p,...l))}}typeof r!="function"&&$(6),t!==void 0&&typeof t!="function"&&$(7);let i;if(J(n)){const a=vr(this),s=yn(n,void 0);let c=!0;try{i=r(s),c=!1}finally{c?mn(a):vn(a)}return mr(a,t),br(i,a)}else if(!n||typeof n!="object"){if(i=r(n),i===void 0&&(i=n),i===Jt&&(i=void 0),this.autoFreeze_&&jn(i,!0),t){const a=[],s=[];ee("Patches").generateReplacementPatches_(n,i,a,s),t(a,s)}return i}else $(1,n)},this.produceWithPatches=(n,r)=>{if(typeof n=="function")return(s,...c)=>this.produceWithPatches(s,d=>n(d,...c));let t,i;return[this.produce(n,r,(s,c)=>{t=s,i=c}),t,i]},typeof(e==null?void 0:e.autoFreeze)=="boolean"&&this.setAutoFreeze(e.autoFreeze),typeof(e==null?void 0:e.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){J(e)||$(8),ie(e)&&(e=Ts(e));const n=vr(this),r=yn(e,void 0);return r[T].isManual_=!0,vn(n),r}finishDraft(e,n){const r=e&&e[T];(!r||!r.isManual_)&&$(9);const{scope_:t}=r;return mr(t,n),br(void 0,t)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,n){let r;for(r=n.length-1;r>=0;r--){const i=n[r];if(i.path.length===0&&i.op==="replace"){e=i.value;break}}r>-1&&(n=n.slice(r+1));const t=ee("Patches").applyPatches_;return ie(e)?t(e,n):this.produce(e,i=>t(i,n))}};function yn(e,n){const r=Ve(e)?ee("MapSet").proxyMap_(e,n):Ze(e)?ee("MapSet").proxySet_(e,n):Bs(e,n);return(n?n.scope_:ro()).drafts_.push(r),r}function Ts(e){return ie(e)||$(10,e),oo(e)}function oo(e){if(!J(e)||Je(e))return e;const n=e[T];let r;if(n){if(!n.modified_)return n.base_;n.finalized_=!0,r=gn(e,n.scope_.immer_.useStrictShallowCopy_)}else r=gn(e,!0);return Ge(r,(t,i)=>{no(r,t,oo(i))}),n&&(n.finalized_=!1),r}var z=new Rs,we=z.produce;z.produceWithPatches.bind(z);z.setAutoFreeze.bind(z);z.setUseStrictShallowCopy.bind(z);z.applyPatches.bind(z);z.createDraft.bind(z);z.finishDraft.bind(z);const V=[{partyId:1,partyDisplayName:"Jefferson PTY LTD",formattedPartyExternalId:"ABN: 89 790 756 100",someExtraInfo:"our component allows this field but does not use it at all",roleDisplayName:"User",roleName:"USER"},{partyId:2,partyDisplayName:"Metaweb (agent role)",formattedPartyExternalId:"ABN: 89 790 756 100",someExtraInfo:"our component allows this field but does not use it at all",roleDisplayName:"Agent",roleName:"AGENT"},{partyId:3,partyDisplayName:"Fresh Produce Australia",formattedPartyExternalId:"ABN: 92 635 964 018",someExtraInfo:"our component allows this field but does not use it at all",roleDisplayName:"Principal Authority (Owner)",roleName:"PRINCIPAL_AUTHORITY_OWNER"},{partyId:4,partyDisplayName:"Fresh Produce Australia",formattedPartyExternalId:"ABN: 92 635 964 018",someExtraInfo:"our component allows this field but does not use it at all",roleDisplayName:"Manager",roleName:"MANAGER"}],el={title:"AppLayout",component:Z,parameters:{layout:"fullscreen"},render:function(n){return u(f.Fragment,{children:[o(se,{links:[{href:"#main-content",label:"Skip to main content"}]}),o(Z,{...n,children:o(W,{children:o(q,{children:o("h1",{children:"Page heading"})})})})]})}},zs=e=>new Promise(n=>setTimeout(n,e)),j=async()=>{await zs(2e3),alert("You have been signed out.")},Ce={args:{focusMode:!1,userName:"Toto Wolff",unreadMessageCount:6,activePath:"/",handleSignOut:j}},ke={args:{focusMode:!0,userName:"Toto Wolff",unreadMessageCount:6,activePath:"/",handleSignOut:j}},xe={args:{activePath:"/",focusMode:!1,handleSignOut:j},render:function(n){const[r,t]=f.useState(!1);return f.useEffect(()=>{setTimeout(()=>{t(!0)},1e3)},[]),u(f.Fragment,{children:[o(se,{links:[{href:"#main-content",label:"Skip to main content"}]}),o(Z,{...n,...r?{userName:"Toto Wolff",unreadMessageCount:6}:{},children:o(W,{children:o(q,{children:o("h1",{children:"Page heading"})})})})]})}},Se={args:{focusMode:!1,userName:"Toto Wolff",unreadMessageCount:6,activePath:"/",handleSignOut:j},render:function(n){const[r,t]=f.useState({linkedBusinesses:V,selectedBusiness:V[1]}),[i,a]=f.useState({provider:"myID"}),s=d=>t(l=>({...l,selectedBusiness:d})),c=d=>()=>{const l=V.slice(0,d),p=l[0];t({selectedBusiness:p,linkedBusinesses:l})};return u(f.Fragment,{children:[o(se,{links:[{href:"#main-content",label:"Skip to main content"}]}),o(Z,{...n,businessDetails:{...r,setSelectedBusiness:s},authDetails:i,children:o(W,{children:u(D,{gap:3,children:[o(q,{children:o("h1",{children:"Business dropdown configuration"})}),o(he,{label:"Number of linked businesses",block:!0,hideOptionalLabel:!0,children:Array.from(new Array(V.length+1).keys()).map(d=>{var l;return u(Nn,{checked:((l=r==null?void 0:r.linkedBusinesses)==null?void 0:l.length)===d,onChange:c(d),children:[d," ",d===0?"business":"businesses"]},d)})}),o(he,{label:"Auth provider",block:!0,hideOptionalLabel:!0,children:["myID","B2CLocalUser"].map(d=>o(Nn,{checked:(i==null?void 0:i.provider)===d,onChange:()=>a(l=>({...l,provider:d})),children:d},d))})]})})})]})}},Ie={args:{focusMode:!1,userName:"Toto Wolff",unreadMessageCount:6,activePath:"/",handleSignOut:j},render:function(n){const r=V,[t,i]=f.useState(r[1]),[a,s]=f.useState(),c=()=>s(void 0),d={linkedBusinesses:r,selectedBusiness:t,setSelectedBusiness:s};return u(f.Fragment,{children:[o(se,{links:[{href:"#main-content",label:"Skip to main content"}]}),u(Z,{...n,businessDetails:d,children:[o(zt,{isOpen:a!==void 0,onClose:c,title:"Are you sure you want to leave this page?",actions:u(Pn,{children:[o(U,{onClick:()=>{a!==void 0&&i(a),s(void 0)},children:"Leave this page"}),o(U,{variant:"secondary",onClick:c,children:"Stay on this page"})]}),children:o(x,{as:"p",children:"You will lose all changes made since your last save."})}),o(W,{children:o(D,{gap:3,children:o(q,{children:u("h1",{children:["Active business: ",t==null?void 0:t.partyDisplayName]})})})})]})]})}},Le={args:{focusMode:!1,userName:"Toto Wolff",unreadMessageCount:6,activePath:"/",handleSignOut:j},render:function(n){const r={linkedBusinesses:V,selectedBusiness:V[0],setSelectedBusiness:()=>{}},t=()=>{const i=Zt();return o(U,{onClick:i,children:"Sign out"})};return u(f.Fragment,{children:[o(se,{links:[{href:"#main-content",label:"Skip to main content"}]}),o(Z,{...n,businessDetails:r,children:o(W,{children:u(D,{gap:3,children:[u(q,{children:[o("h1",{children:"Sign out button"}),u("p",{children:["You can trigger the sign out modal using the"," ",o("code",{children:"useOpenSignOutModal"})," hook."]})]}),o(Pn,{children:o(t,{})})]})})})]})}},Me={args:{focusMode:!1,userName:"Toto Wolff",unreadMessageCount:6,activePath:"/",features:{quotas:!0,exportSystems:!0,licences:!0,invoices:!0,people:!0}}},Ae={args:{focusMode:!1,unreadMessageCount:6,activePath:"/",handleSignOut:j,claims:{given_name:"given_name",family_name:"family_name"}}},De={args:{focusMode:!1,unreadMessageCount:6,activePath:"/",handleSignOut:j,claims:{family_name:"family_name"}}},je={args:{focusMode:!1,unreadMessageCount:6,activePath:"/",handleSignOut:j,claims:{family_name:"family_name"},errorComponents:{MissingName:e=>(f.useEffect(()=>{console.log("report this situation to an analytics provider here")},[]),o(Xt.MissingName,{...e}))}}},Be={args:{focusMode:!1,unreadMessageCount:6,activePath:"/",handleSignOut:j,claims:{family_name:"family_name"},errorComponents:{MissingName:e=>o(W,{children:u(q,{children:[o("p",{children:"Our app works just fine even without a generic name."}),o("hr",{}),e.children]})})}}},Ee={args:{focusMode:!1,unreadMessageCount:6,activePath:"/",handleSignOut:j,claims:{family_name:"family_name"},errorComponents:{MissingGivenName:e=>{const n=Zt();return o(W,{children:u(q,{children:[o("p",{children:"Our app works just fine even without a given name."}),o("hr",{}),e.children,o(U,{onClick:n,children:"Sign out"})]})})}}}},Re={args:{focusMode:!1,unreadMessageCount:6,activePath:"/",handleSignOut:j,claims:{given_name:"given_name",family_name:"family_name",AARM_acr:"urn:id.gov.au:tdif:acr:ip1:cl1"},requiredProofingLevel:"IP2"}},Te={args:{focusMode:!1,unreadMessageCount:6,activePath:"/",handleSignOut:j},render:function(n){const r=["IP1","IP2","IP3","IP4"],t=["urn:id.gov.au:tdif:acr:ip1:cl1","urn:id.gov.au:tdif:acr:ip1:cl2","urn:id.gov.au:tdif:acr:ip1:cl3","urn:id.gov.au:tdif:acr:ip1p:cl1","urn:id.gov.au:tdif:acr:ip1p:cl2","urn:id.gov.au:tdif:acr:ip1p:cl3","urn:id.gov.au:tdif:acr:ip2:cl2","urn:id.gov.au:tdif:acr:ip2:cl3","urn:id.gov.au:tdif:acr:ip2p:cl2","urn:id.gov.au:tdif:acr:ip2p:cl3","urn:id.gov.au:tdif:acr:ip3:cl2","urn:id.gov.au:tdif:acr:ip3:cl3","urn:id.gov.au:tdif:acr:ip4:cl3"],[i,a]=f.useState(!0),[s,c]=f.useState({method:"urn",claims:{given_name:"given_name",family_name:"family_name",AARM_acr:[t[0]]},authDetails:{proofingLevel:["IP1"]},requiredProofingLevel:["IP2"]}),d=l=>{const p=l.kind==="max"?"#df185a":"#287be0",h=l!=null&&l.extraText?` (${l.extraText})`:"";return l!=null&&l.active?o(M,{css:{position:"relative",padding:"4px",border:`2px dashed ${p}`,"& + &":{marginTop:"1em"},":after":{position:"absolute",right:0,bottom:"120%",content:`"${l.kind==="max"?"maximum provided proof":"minimum required proof"}${h}"`,color:p,fontSize:"0.8em"}},children:l.children}):o(yt,{children:l.children})};return u(f.Fragment,{children:[o(se,{links:[{href:"#main-content",label:"Skip to main content"}]}),u(M,{css:{position:"relative"},children:[o(M,{css:{border:"2px solid red",backgroundColor:"#fec0ff",position:"fixed",transform:"rotate(90deg)",transformOrigin:"top right",fontSize:"1.2em",padding:".4em 1em",top:"55vh",right:0,zIndex:99,cursor:"pointer"},onClick:()=>a(!0),children:"show config options"}),o(Z,{...n,requiredProofingLevel:s.requiredProofingLevel,...s.method==="claims"?{claims:s.claims}:{authDetails:s.authDetails},children:o(W,{children:u(D,{gap:1.5,children:[o(x,{as:"p",fontSize:"lg",children:"You made it!"}),o(x,{as:"p",children:"Your proofing level means that you can see this page."})]})})})]}),o(Ni,{title:"Config",isOpen:i,onClose:()=>a(!1),children:u(D,{gap:1.5,children:[o(Ii,{label:"Proofing method",required:!0,options:[{value:"authDetails",label:"AuthDetails"},{value:"claims",label:"Claims"}],onChange:l=>c(we(p=>{p.method=l.target.value}))}),s.method==="claims"?o(he,{label:"Provided ACR",block:!0,hideOptionalLabel:!0,children:t.map(l=>o(d,{kind:"max",active:pe(We({AARM_acr:l}))===pe(We(s.claims)),extraText:pe(We(s.claims)),children:o(rn,{checked:new Set(s.claims.AARM_acr).has(l),onChange:p=>c(we(h=>{p.target.checked?h.claims.AARM_acr.push(l):h.claims.AARM_acr.splice(h.claims.AARM_acr.indexOf(l),1)})),children:l},l)},l))}):o(he,{label:"Provided proofing level",block:!0,hideOptionalLabel:!0,children:r.map(l=>o(d,{kind:"max",active:pe(s.authDetails.proofingLevel)===l,children:o(rn,{checked:new Set(s.authDetails.proofingLevel).has(l),onChange:p=>c(we(h=>{p.target.checked?h.authDetails.proofingLevel.push(l):h.authDetails.proofingLevel.splice(h.authDetails.proofingLevel.indexOf(l),1)})),children:l},l)},l))}),o(he,{label:"Required proofing level",block:!0,hideOptionalLabel:!0,children:r.map(l=>o(d,{kind:"min",active:Kt(s.requiredProofingLevel)===l,children:o(rn,{checked:new Set(s.requiredProofingLevel).has(l),onChange:p=>c(we(h=>{p.target.checked?h.requiredProofingLevel.push(l):h.requiredProofingLevel.splice(h.requiredProofingLevel.indexOf(l),1)})),children:l},l)},l))})]})})]})}},ze={args:{focusMode:!1,unreadMessageCount:6,activePath:"/",handleSignOut:j,authDetails:{proofingLevel:"IP1"},requiredProofingLevel:"IP3",errorComponents:{ProofMissing:e=>o(W,{children:u(q,{children:[u("p",{children:["Your proofing level is insufficient at"," ",qe(e.providedProofingLevel),". Please fix it."]}),u("p",{children:["you should provide at least '",qe(e.requiredProofingLevel),"'"]})]})})}}},Fe={args:{focusMode:!1,userName:"Toto Wolff",unreadMessageCount:6,activePath:"/custom",handleSignOut:j,sidebarItems:[{items:[{label:"Custom sidenav",href:"/custom",icon:In},{label:"Other item",href:"/other",icon:kt}]}],internal:"sidebar"}},$e={args:{focusMode:!1,userName:"Toto Wolff",unreadMessageCount:6,activePath:"/custom",handleSignOut:j,headerProps:{heading:"Service Portal",subLine:"Supporting Australian agriculture"},sidebarItems:[{items:[{label:"Overview",href:"/custom",icon:In,items:[{label:"Business details",href:"#"},{label:"People",href:"#"}]},{label:"Country requirements",href:"/country-requirements",icon:Ho,items:[{label:"Other",href:"#"},{label:"Options",href:"#"}]}]},{items:[{label:"Help",href:"/help",icon:xt}]}]}};var Or,Pr,wr;Ce.parameters={...Ce.parameters,docs:{...(Or=Ce.parameters)==null?void 0:Or.docs,source:{originalSource:`{
  args: {
    focusMode: false,
    userName: 'Toto Wolff',
    unreadMessageCount: 6,
    activePath: '/',
    handleSignOut
  }
}`,...(wr=(Pr=Ce.parameters)==null?void 0:Pr.docs)==null?void 0:wr.source}}};var Cr,kr,xr;ke.parameters={...ke.parameters,docs:{...(Cr=ke.parameters)==null?void 0:Cr.docs,source:{originalSource:`{
  args: {
    focusMode: true,
    userName: 'Toto Wolff',
    unreadMessageCount: 6,
    activePath: '/',
    handleSignOut
  }
}`,...(xr=(kr=ke.parameters)==null?void 0:kr.docs)==null?void 0:xr.source}}};var Sr,Ir,Lr;xe.parameters={...xe.parameters,docs:{...(Sr=xe.parameters)==null?void 0:Sr.docs,source:{originalSource:`{
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
}`,...(zr=(Tr=Le.parameters)==null?void 0:Tr.docs)==null?void 0:zr.source}}};var Fr,$r,Wr;Me.parameters={...Me.parameters,docs:{...(Fr=Me.parameters)==null?void 0:Fr.docs,source:{originalSource:`{
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
}`,...(Wr=($r=Me.parameters)==null?void 0:$r.docs)==null?void 0:Wr.source}}};var _r,Nr,qr;Ae.parameters={...Ae.parameters,docs:{...(_r=Ae.parameters)==null?void 0:_r.docs,source:{originalSource:`{
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
}`,...(Qr=(Kr=je.parameters)==null?void 0:Kr.docs)==null?void 0:Qr.source}}};var Xr,Vr,Zr;Be.parameters={...Be.parameters,docs:{...(Xr=Be.parameters)==null?void 0:Xr.docs,source:{originalSource:`{
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
}`,...(Zr=(Vr=Be.parameters)==null?void 0:Vr.docs)==null?void 0:Zr.source}}};var Jr,et,nt;Ee.parameters={...Ee.parameters,docs:{...(Jr=Ee.parameters)==null?void 0:Jr.docs,source:{originalSource:`{
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
}`,...(dt=(ct=ze.parameters)==null?void 0:ct.docs)==null?void 0:dt.source}}};var ut,pt,ft;Fe.parameters={...Fe.parameters,docs:{...(ut=Fe.parameters)==null?void 0:ut.docs,source:{originalSource:`{
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
}`,...(ft=(pt=Fe.parameters)==null?void 0:pt.docs)==null?void 0:ft.source}}};var ht,gt,mt;$e.parameters={...$e.parameters,docs:{...(ht=$e.parameters)==null?void 0:ht.docs,source:{originalSource:`{
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
}`,...(mt=(gt=$e.parameters)==null?void 0:gt.docs)==null?void 0:mt.source}}};const nl=["Basic","FocusMode","ClientSideFetch","BusinessDropdown","BusinessDropdownModalInterrupt","SignOutModalTrigger","OptionalAppsEnabled","Claims","ClaimsMissingName","ClaimsMissingNameAnalytics","ClaimsMissingNameComponent","ClaimsMissingGivenNameComponent","RequiredProofingPaywall","RequiredProofingPaywallOptions","RequiredProofingPaywallCustomComponent","CustomSidenav","HeaderProps"];export{Ce as Basic,Se as BusinessDropdown,Ie as BusinessDropdownModalInterrupt,Ae as Claims,Ee as ClaimsMissingGivenNameComponent,De as ClaimsMissingName,je as ClaimsMissingNameAnalytics,Be as ClaimsMissingNameComponent,xe as ClientSideFetch,Fe as CustomSidenav,ke as FocusMode,$e as HeaderProps,Me as OptionalAppsEnabled,Re as RequiredProofingPaywall,ze as RequiredProofingPaywallCustomComponent,Te as RequiredProofingPaywallOptions,Le as SignOutModalTrigger,nl as __namedExportsOrder,el as default};
