import{j as o,e as _,m as D,t as m,_ as P,c as b,b as g,i as u,B as M,A as ne,p as I,y as Jt,D as dt,r as bn,s as vn,G as yn,g as ae,h as ut,v as pt,n as sn,o as eo,u as On,a as no,F as ft,w as ht,k as te,E as ro}from"./Box-a16e782f.esm-0079a96d.js";import{r as h}from"./index-39cffa30.js";import{P as N,p as to}from"./ag.ds-next-react-prose.esm-ddd50a38.js";import{b as oo,c as H,_ as gt,C as io,B as He,P as W,a as Pn}from"./ag.ds-next-react-button.esm-e93ea8c0.js";import{v as ao,S as j,T as x,F as w,V as kn,s as Ke,c as so,E as lo}from"./Icon-f7475a9e.esm-7db7f418.js";import{b as mt,c as co,d as uo,a as wn,C as Ye,M as po,e as fo,E as ho,H as go,f as bt,g as mo,F as vt,h as bo,S as vo,i as yo,L as Oo,j as Po,A as ko,k as wo,l as yt,m as Co,n as xo,o as So,p as Io,I as Mo,W as Lo,P as Do}from"./ag.ds-next-react-icon.esm-bc3ec676.js";import{r as Cn}from"./index-1883dec2.js";import{F as xn,_ as An,D as Ao,u as jo,a as Bo,b as jn,c as ln,d as pe,e as Eo,f as Ro,g as To,h as Ot}from"./ag.ds-next-react-dropdown-menu.esm-56c6215e.js";import{L as zo}from"./ag.ds-next-react-ag-branding.esm-2f9c43e4.js";import{L as Fo}from"./ag.ds-next-react-link-list.esm-fbd96c91.js";import{C as $o}from"./ag.ds-next-react-callout.esm-840f4fb7.js";import{a as $e}from"./ag.ds-next-react-text-link.esm-822a6d9d.js";import"./jsx-runtime-9bc08dc0.js";import"./_commonjsHelpers-725317a4.js";var Wo=function(n){var r=n.children,t=n["aria-label"];return o("nav",{"aria-label":t,children:r})},_o=h.forwardRef(function(n,r){var t=n.children,i=n.href;return o("a",{css:[ao,oo({block:!1,size:"md",variant:"primary"}),{position:"absolute","&:focus-visible":{top:D(1),left:D(1),clip:"auto",clipPath:"none",overflow:"visible",whiteSpace:"normal",width:"auto",zIndex:m.zIndex.skipLink}},"","","",""],href:i,ref:r,children:t})}),No=["label"];function Bn(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,t)}return r}function En(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?Bn(Object(r),!0).forEach(function(t){P(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Bn(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var se=function(n){var r=n.links,t=n["aria-label"],i=t===void 0?"Skip links":t;return o(Wo,{"aria-label":i,children:r.map(function(a,s){var c=a.label,d=_(a,No);return o(_o,En(En({},d),{},{children:c}),s)})})},qo=function(n){var r=n.hideOptionalLabel,t=n.required,i=n.secondaryLabel;return h.useMemo(function(){return[i,r||t?null:"(optional)"].filter(Boolean).join(" ")},[t,i,r])},Pt=function(n){var r=n.children,t=n.invalid,i=n.id;return o(j,{borderLeft:t,borderLeftWidth:"xl",css:b({borderLeftColor:t?g.systemError:void 0},"",""),gap:.5,id:i,paddingLeft:t?1:void 0,children:r})},kt=function(n){var r=n.as,t=r===void 0?"label":r,i=n.children,a=n.className,s=n.id,c=n.htmlFor,d=n.required,l=n.secondaryLabel,p=n.hideOptionalLabel,f=qo({hideOptionalLabel:p,required:d,secondaryLabel:l});return u(M,{as:t,className:a,htmlFor:c,id:s,children:[o(x,{as:"span",fontWeight:"bold",children:i}),f?u(x,{as:"span",color:"muted",children:[" ",f]}):null]})},wt=function(n){var r=n.children,t=n.id;return o(x,{color:"muted",display:"block",id:t,children:r})},Go={name:"4zleql",styles:"display:block"},Ct=function(n){var r=n.children,t=n.id;return u(w,{alignItems:"center",gap:.5,children:[o(M,{flexShrink:0,children:o(mt,{"aria-hidden":"false","aria-label":"Error",color:"error",css:Go,size:"md"})}),o(x,{color:"error",display:"block",fontWeight:"bold",id:t,children:r})]})},Ho=function(n){var r=n.children,t=n.hint,i=n.id,a=n.invalid,s=n.label,c=n.labelId,d=n.maxWidth,l=n.secondaryLabel,p=n.hideOptionalLabel,f=n.message,v=n.required,k=Ko(i),O=k.fieldId,y=k.hintId,C=k.messageId,S=Yo({required:v,fieldId:O,message:f,messageId:C,hint:t,hintId:y,invalid:a});return u(Pt,{invalid:a,children:[o(kt,{hideOptionalLabel:p,htmlFor:O,id:c,required:v,secondaryLabel:l,children:s}),t?o(wt,{id:y,children:t}):null,f&&a?o(Ct,{id:C,children:f}):null,typeof r=="function"?r(S):r,d?o("div",{"aria-hidden":!0,css:b({height:0,marginTop:"-".concat(D(.5)),maxWidth:m.maxWidth.field[d],overflow:"hidden","::after":{content:'"---------------------------------------------------------------"'}},"","")}):null]})},Ko=function(n){var r=ne(n),t=n||"field-".concat(r),i="field-".concat(r,"-hint"),a="field-".concat(r,"-message");return{fieldId:t,hintId:i,messageId:a}},Yo=function(n){var r=n.required,t=n.fieldId,i=n.message,a=n.messageId,s=n.hint,c=n.hintId,d=n.invalid,l=[i?a:null,s?c:null].filter(Boolean),p=l.length?l.join(" "):void 0;return{"aria-required":!!r,"aria-invalid":!!d,"aria-describedby":p,id:t}},xt=h.createContext(void 0),St=function(){return h.useContext(xt)};function Uo(e){var n=e.children,r=e.invalid,t=e.messageId,i=e.name,a=e.required,s=ne();return o(xt.Provider,{value:{invalid:r,name:i||s,messageId:t,required:a},children:n})}var fe=function(n){var r=n.block,t=r===void 0?!1:r,i=n.children,a=n.hint,s=n.id,c=n.invalid,d=c===void 0?!1:c,l=n.label,p=n.hideOptionalLabel,f=n.message,v=n.name,k=n.required,O=k===void 0?!1:k,y=Qo(s),C=y.groupId,S=y.hintId,L=y.messageId,A=[d&&f?L:null,a?S:null].filter(Boolean),E=A.length?A.join(" "):void 0;return o(Uo,{invalid:d,messageId:d&&f?L:void 0,name:v,required:O,children:o(Pt,{id:C,invalid:d,children:u(M,{"aria-describedby":E,as:"fieldset",children:[l?o(kt,{as:"legend",hideOptionalLabel:p,required:O,children:l}):null,u(j,{css:b({marginTop:l?D(.5):void 0},"",""),gap:.5,children:[a?o(wt,{id:S,children:a}):null,f&&d?o(Ct,{id:L,children:f}):null,o(w,{flexDirection:t?"column":"row",flexWrap:t?void 0:"wrap",gap:1,paddingTop:.5,width:"100%",children:i})]})]})})})},Qo=function(n){var r=ne(n),t=n||"control-group-".concat(r),i="control-group-".concat(r,"-hint"),a="control-group-".concat(r,"-message");return{groupId:t,hintId:i,messageId:a}};function Rn(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,t)}return r}function Je(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?Rn(Object(r),!0).forEach(function(t){P(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Rn(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function Xo(e){var n=e.disabled,r=e.invalid,t=e.size,i=I.control[t],a=i.width,s=i.height,c=i.borderWidth;return o(w,{alignItems:"center",as:"span",css:b(Je(Je({backgroundColor:g.backgroundBody,borderColor:g.border,borderRadius:"100%",borderStyle:"solid",borderWidth:c,inset:0,position:"absolute"},n&&{color:g.borderMuted,borderColor:g.borderMuted,backgroundColor:g.backgroundShade,"@media (forced-colors: active)":{borderColor:"GrayText",color:"GrayText"}}),r&&{borderColor:g.systemError,backgroundColor:g.systemErrorMuted}),"",""),flexShrink:0,height:s,justifyContent:"center",rounded:!0,width:a,children:o(M,{as:"span",css:b(Je({borderRadius:"100%",backgroundColor:g.foregroundText,"@media (forced-colors: active)":{backgroundColor:"MenuText"}},n&&{backgroundColor:g.borderMuted,"@media (forced-colors: active)":{backgroundColor:"GrayText"}}),"",""),height:"calc(100% - 0.5rem)",highContrastOutline:!0,width:"calc(100% - 0.5rem)"})})}var Vo=["height","width"];function Tn(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,t)}return r}function Zo(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?Tn(Object(r),!0).forEach(function(t){P(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Tn(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var Jo=h.forwardRef(function(n,r){var t=n.height,i=n.width,a=_(n,Vo);return o("input",Zo({css:b({height:t,margin:0,opacity:0,width:i,"&:focus ~ span:first-of-type":I.outline,"~ span > span":{opacity:0},"&:checked ~ span > span":{opacity:1}},"",""),ref:r},a))}),ei=function(n){var r=n.children,t=n.disabled,i=n.htmlFor;return o(w,{alignItems:"flex-start",as:"label",color:"text",css:b({cursor:t?"not-allowed":"pointer"},"",""),gap:.5,htmlFor:i,inline:!0,children:r})},ni={sm:0,md:"0.2rem"};function ri(e){var n=e.children,r=e.disabled,t=e.size,i=ni[t];return o(x,{color:r?"muted":"text",css:b({paddingTop:i},"",""),flexGrow:1,children:n})}var ti=["children","disabled","invalid","name","required","size"];function zn(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,t)}return r}function oi(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?zn(Object(r),!0).forEach(function(t){P(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):zn(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var Fn=h.forwardRef(function(n,r){var t=n.children,i=n.disabled,a=n.invalid,s=n.name,c=n.required,d=n.size,l=d===void 0?"md":d,p=_(n,ti),f=ii(p.id),v=St(),k=I.control[l],O=k.height,y=k.width,C=typeof a=="boolean"?a:v==null?void 0:v.invalid,S=typeof c=="boolean"?c:v==null?void 0:v.required,L=s||(v==null?void 0:v.name);return u(ei,{disabled:i,htmlFor:f,children:[u("span",{css:b({display:"inline-block",height:O,position:"relative",width:y},"",""),children:[o(Jo,oi({"aria-describedby":C?v==null?void 0:v.messageId:void 0,"aria-invalid":C||void 0,"aria-required":S,disabled:i,height:O,id:f,name:L,ref:r,type:"radio",width:y},p)),o(Xo,{disabled:i,invalid:C,size:l})]}),o(ri,{disabled:i,size:l,children:t})]})});function ii(e){var n=ne(e);return e||"radio-".concat(n)}function $n(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,t)}return r}function Wn(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?$n(Object(r),!0).forEach(function(t){P(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):$n(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var ai=function(n){var r=n.disabled,t=n.indeterminate,i=n.invalid,a=n.size,s=I.control[a],c=s.width,d=s.height,l=s.borderWidth;return o(w,{alignItems:"center",as:"span",css:b(Wn(Wn({backgroundColor:g.backgroundBody,borderColor:g.border,borderStyle:"solid",borderWidth:l,color:g.foregroundText,inset:0,position:"absolute"},r&&{color:g.borderMuted,borderColor:g.borderMuted,backgroundColor:g.backgroundShade,"@media (forced-colors: active)":{borderColor:"GrayText",color:"GrayText"}}),i&&{borderColor:g.systemError,backgroundColor:g.systemErrorMuted}),"",""),flexShrink:0,height:d,justifyContent:"center",rounded:!0,width:c,children:t?o(co,{size:a,weight:"bold"}):o(uo,{size:a,weight:"bold"})})},si=["height","width"];function _n(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,t)}return r}function li(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?_n(Object(r),!0).forEach(function(t){P(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_n(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var ci=h.forwardRef(function(n,r){var t=n.height,i=n.width,a=_(n,si);return o("input",li({css:b({height:t,margin:0,opacity:0,width:i,"&:focus ~ span:first-of-type":I.outline,"~ span > svg":{opacity:0},"&:checked ~ span > svg, &:indeterminate ~ span > svg":{opacity:1}},"",""),ref:r},a))});function di(e){var n=e.children,r=e.htmlFor,t=e.disabled;return o(w,{alignItems:"flex-start",as:"label",color:"text",css:b({cursor:t?"not-allowed":"pointer"},"",""),gap:.5,htmlFor:r,inline:!0,children:n})}var ui={sm:0,md:"0.2rem"};function pi(e){var n=e.children,r=e.disabled,t=e.size,i=ui[t];return o(x,{color:r?"muted":"text",css:b({paddingTop:i},"",""),flexGrow:1,children:n})}var fi=["checked","children","disabled","indeterminate","invalid","name","required","size"];function Nn(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,t)}return r}function hi(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?Nn(Object(r),!0).forEach(function(t){P(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Nn(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var en=h.forwardRef(function(n,r){var t=n.checked,i=n.children,a=n.disabled,s=n.indeterminate,c=n.invalid,d=n.name,l=n.required,p=n.size,f=p===void 0?"md":p,v=_(n,fi),k=gi(v.id),O=h.useRef(null),y=St(),C=I.control[f],S=C.height,L=C.width,A=typeof c=="boolean"?c:y==null?void 0:y.invalid,E=typeof l=="boolean"?l:y==null?void 0:y.required,q=d||(y==null?void 0:y.name);h.useEffect(function(){O.current&&(O.current.indeterminate=!!s)},[s]);var G=s?!1:t;return u(di,{disabled:a,htmlFor:k,children:[u("span",{css:b({display:"inline-block",height:S,position:"relative",width:L},"",""),children:[o(ci,hi({"aria-checked":s?"mixed":void 0,"aria-describedby":A?y==null?void 0:y.messageId:void 0,"aria-invalid":A||void 0,"aria-required":E,checked:G,disabled:a,height:S,id:k,name:q,ref:Jt([r,O]),type:"checkbox",width:L},v)),o(ai,{disabled:a,indeterminate:s,invalid:A,size:f})]}),o(pi,{disabled:a,size:f,children:i})]})});function gi(e){var n=ne(e);return e||"checkbox-".concat(n)}var mi=["label","hideOptionalLabel","required","hint","message","invalid","block","maxWidth","options","placeholder","id"];function qn(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,t)}return r}function Y(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?qn(Object(r),!0).forEach(function(t){P(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):qn(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var bi=h.forwardRef(function(n,r){var t=n.label,i=n.hideOptionalLabel,a=n.required,s=n.hint,c=n.message,d=n.invalid,l=n.block,p=n.maxWidth,f=p===void 0?"md":p,v=n.options,k=n.placeholder,O=n.id,y=_(n,mi),C=Pi({block:l});return o(Ho,{hideOptionalLabel:i,hint:s,id:O,invalid:d,label:t,maxWidth:f,message:c,required:a,children:function(L){return u(vi,{block:l,maxWidth:f,children:[o("select",Y(Y(Y({css:C,ref:r},L),y),{},{children:o(yi,{options:v,placeholder:k})})),o(Oi,{disabled:y.disabled})]})}})}),vi=function(n){var r=n.children,t=n.block,i=n.maxWidth;return o("div",{css:b(Y({position:"relative"},!t&&{maxWidth:m.maxWidth.field[i]}),"",""),children:r})},yi=function(n){var r=n.options,t=n.placeholder;return u(h.Fragment,{children:[t?o("option",{value:"",children:t}):null,r.map(function(i){return"options"in i?o("optgroup",{disabled:i.disabled,label:i.label,children:i.options.map(function(a){var s=a.value,c=a.label,d=a.disabled;return o("option",{disabled:d,value:s,children:c},s)})},i.label):o("option",{disabled:i.disabled,value:i.value,children:i.label},i.value)})]})},Oi=function(n){var r=n.disabled;return o(wn,{css:b({position:"absolute",top:"50%",right:D(.75),transform:"translateY(-50%)",opacity:r?.3:void 0,pointerEvents:"none",color:g.foregroundAction},"","")})},Pi=function(n){var r=n.block;return Y(Y(Y(Y({position:"relative",appearance:"none",boxSizing:"border-box",paddingLeft:D(1),paddingRight:"calc(".concat(m.borderWidth.lg,"px + 2.5rem)"),margin:0,background:g.backgroundBody,borderWidth:m.borderWidth.lg,borderStyle:"solid",borderColor:g.border,borderRadius:m.borderRadius,color:g.foregroundText,width:"100%",fontFamily:m.font.body},I.input.md),{},{lineHeight:m.lineHeight.default},I.truncate),r&&{maxWidth:"none",display:"block"}),{},{'&[aria-invalid="true"]':{backgroundColor:g.systemErrorMuted,borderColor:g.systemError},"&:disabled":{opacity:1,cursor:"not-allowed",borderColor:g.borderMuted,backgroundColor:g.backgroundShade,color:g.foregroundMuted},"&:focus":I.outline})};function It(e,n){var r=e||n;if(!r)throw new Error("onClose prop is required");return r}function ki(e,n){return e||n}function wi(){var e=ne();return{titleId:"drawer-".concat(e,"-title")}}function Ci(e){var n=e.actions,r=e.children,t=e.elementToFocusOnClose,i=e.onClose,a=e.title,s=wi(),c=s.titleId;return o(xn,{returnFocus:t?function(){return window.setTimeout(function(){return t.focus()},0),!1}:!0,children:u(w,{"aria-labelledby":c,"aria-modal":!0,background:"body",css:b(P({boxShadow:m.shadow.lg,inset:0,position:"fixed"},m.mediaQuery.max.xs,{overflowY:"auto"}),"",""),flexDirection:"column",highContrastOutline:!0,role:"dialog",children:[o(xi,{children:o(Ii,{id:c,children:a})}),o(Mi,{children:r}),n?o(Di,{children:n}):null,o(H,{css:ae({position:"fixed",zIndex:m.zIndex.elevated,top:"1.25rem",right:ut({xs:D(.75),md:D(1.5)})}),iconAfter:Ye,onClick:i,variant:"text",children:"Close"})]})})}function xi(e){var n=e.children;return o(M,{background:"body",borderBottom:!0,css:b(P({position:"sticky",top:0,zIndex:m.zIndex.elevated},m.mediaQuery.min.sm,{position:"relative"}),"",""),paddingX:{xs:.75,md:1.5},paddingY:1,children:n})}var Si={name:"1r5gb7q",styles:"display:inline-block"};function Ii(e){var n=e.children,r=e.id;return o(x,{as:"h2",css:Si,"data-autofocus":!0,focusRingFor:"keyboard",fontSize:"lg",fontWeight:"bold",id:r,lineHeight:"heading",tabIndex:-1,children:n})}function Mi(e){var n=e.children;return o(M,{background:"body",css:b(P({},m.mediaQuery.min.sm,{overflowY:"auto"}),"",""),flexGrow:1,paddingX:{xs:.75,md:1.5},paddingY:{xs:1,md:1.5},children:n})}var Li={name:"xdvdnl",styles:"margin-top:auto"};function Di(e){var n=e.children;return o(M,{background:"body",borderTop:!0,css:Li,paddingX:{xs:.75,md:1.5},paddingY:1,children:n})}var Ai={md:"32rem",lg:"45rem"},ji=function(n){var r=n.actions,t=n.children,i=n.elementToFocusOnClose,a=n.isOpen,s=a===void 0?!1:a,c=n.mutedOverlay,d=c===void 0?!1:c,l=n.onClose,p=n.onDismiss,f=n.title,v=n.width,k=v===void 0?"md":v,O=It(l,p),y=h.useRef(0),C=dt(),S=h.useState(!0),L=S[0],A=S[1];h.useEffect(function(){y.current=window.innerWidth-document.documentElement.clientWidth},[]),h.useEffect(function(){s&&A(!1)},[s]),h.useEffect(function(){var F=function(le){s&&le.code==="Escape"&&(le.preventDefault(),le.stopPropagation(),O())};return window.addEventListener("keydown",F),function(){return window.removeEventListener("keydown",F)}},[s,O]);var E=bn(s),q=E.modalContainerRef;if(!vn())return null;var G=s?!0:!L;return Cn.createPortal(u(h.Fragment,{children:[s?o(Ei,{scrollbarWidth:y.current}):null,u("div",{ref:q,children:[o("div",{css:b({pointerEvents:"none",position:"absolute",opacity:s?1:0,transition:s?"none":"opacity ".concat(C?"1ms":"150ms")},"",""),"data-drawer":"transitioner",onTransitionEnd:function(){A(!0)}}),o(Bi,{isOpen:s,mutedOverlay:d,onClick:O,prefersReducedMotion:C}),o(M,{css:b({inset:0,marginLeft:"auto",position:"fixed",transform:"translateX(".concat(s?"0":"100%",")"),transition:"transform ".concat(C?"1ms":"150ms"," ease"),zIndex:m.zIndex.dialog},"",""),maxWidth:Ai[k],children:G&&o(Ci,{actions:r,elementToFocusOnClose:i,onClose:O,title:f,children:t})})]})]}),document.body)};function Bi(e){var n=e.isOpen,r=e.mutedOverlay,t=e.onClick,i=e.prefersReducedMotion;return o("div",{css:b({pointerEvents:n?"all":"none",position:"fixed",inset:0,backgroundColor:r?g.overlayMuted:g.overlay,opacity:n?1:0,transition:"opacity ".concat(i?"1ms":"150ms"," ease"),zIndex:m.zIndex.overlay},"",""),onClick:t})}function Ei(e){var n=e.scrollbarWidth;return o(yn,{styles:b({html:{marginRight:n,scrollbarGutter:"auto"},body:{overflow:"hidden"}},"","")})}var Gn,Ri=h.forwardRef(function(n,r){var t=n.children;return o("div",{css:b({position:"fixed",top:0,left:0,bottom:0,right:0,backgroundColor:g.overlay,zIndex:m.zIndex.overlay,overflowY:"auto",animation:"".concat(Ti," ").concat(m.transition.duration,"ms ").concat(m.transition.timingFunction)},"",""),ref:r,children:t})}),Ti=pt(Gn||(Gn=gt([`
  0% { opacity: 0; }
  100% { opacity: 1; }
`]))),zi=function(n){var r=n.children,t=n.id;return o(x,{as:"h2","data-autofocus":!0,focusRingFor:"keyboard",fontSize:"lg",fontWeight:"bold",id:t,lineHeight:"heading",tabIndex:-1,children:r})},Fi=function(){var n=ne();return{titleId:"modal-".concat(n,"-title")}},Hn,$i="45rem",Wi={name:"1duj7gx",styles:"align-self:flex-end"},_i={name:"xdvdnl",styles:"margin-top:auto"},Ni=function(n){var r=n.actions,t=n.children,i=n.onClose,a=n.title,s=Fi(),c=s.titleId;return o(xn,{returnFocus:!0,children:u(j,{"aria-labelledby":c,"aria-modal":!0,background:"body",css:b(P({boxShadow:m.shadow.lg,position:"relative",margin:"0 auto",minHeight:"100vh",animation:"".concat(qi," ").concat(m.transition.duration,"ms ").concat(m.transition.timingFunction),"@supports (min-height: 100dvh)":{minHeight:"100dvh"}},m.mediaQuery.min.sm,{borderRadius:m.borderRadius,margin:"".concat(D(6)," auto ").concat(D(1)),minHeight:"auto"}),"",""),gap:1,highContrastOutline:!0,maxWidth:$i,paddingX:{xs:.75,md:1.5},paddingY:{xs:1,md:1.5},role:"dialog",children:[o(H,{"aria-label":"Close modal",css:Wi,iconAfter:Ye,onClick:i,variant:"text",children:"Close"}),o(zi,{id:c,children:a}),o(M,{children:t}),r?o(M,{css:_i,paddingTop:1,children:r}):null]})})},qi=pt(Hn||(Hn=gt([`
  0% { transform: translateY(1rem); }
	100% { transform: translateY(0); }
`]))),Mt=function(n){var r=n.actions,t=n.children,i=n.isOpen,a=i===void 0?!1:i,s=n.onClose,c=n.onDismiss,d=n.title,l=It(s,c);h.useEffect(function(){var v=function(O){a&&O.code==="Escape"&&(O.preventDefault(),O.stopPropagation(),l())};return window.addEventListener("keydown",v),function(){return window.removeEventListener("keydown",v)}},[l,a]);var p=bn(a),f=p.modalContainerRef;return!a||!vn()?null:Cn.createPortal(u(h.Fragment,{children:[o(Hi,{}),o(Ri,{ref:f,children:o(Ni,{actions:r,onClose:l,title:d,children:t})})]}),document.body)},Gi={name:"1sy9iaq",styles:"body{overflow:hidden;}"},Hi=function(){return o(yn,{styles:Gi})};function Ki(e){var n,r,t=Array.from(e.matchAll(new RegExp(/(\p{L})\p{L}+/,"gu")));if(!t.length)return"?";var i=((n=t.shift())===null||n===void 0?void 0:n[1])||"",a=((r=t.pop())===null||r===void 0?void 0:r[1])||"";return(i+a).toUpperCase()}function Lt(e){var n=e.name,r=e.tone,t=r===void 0?"neutral":r,i=e.size,a=i===void 0?"md":i,s=e["aria-hidden"],c=e["aria-label"],d=Ki(n),l=Yi[t],p=Ui[a],f=p.size,v=p.fontSize;return o(w,{alignItems:"center","aria-hidden":s,"aria-label":c,as:"span",css:b({textDecoration:"none",height:"".concat(f,"rem"),width:"".concat(f,"rem"),borderRadius:"50%",borderStyle:"solid",borderWidth:m.borderWidth.sm,borderColor:l,color:l},"",""),flexShrink:0,fontSize:v,fontWeight:"bold",justifyContent:"center",children:d})}var Yi={neutral:g.foregroundMuted,action:g.foregroundAction},Ui={sm:{fontSize:"xs",size:2},md:{fontSize:"sm",size:2.5},lg:{fontSize:"md",size:3},xl:{fontSize:"lg",size:4},xxl:{fontSize:"xl",size:4.5},xxxl:{fontSize:"xl",size:5}},Dt=h.createContext(void 0);function me(){var e=h.useContext(Dt);if(e===void 0)throw new Error("`AppLayoutContext` not found.");return e}function Qi(e,n){var r=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=Xi(e))||n&&e&&typeof e.length=="number"){r&&(e=r);var t=0,i=function(){};return{s:i,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(l){throw l},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a,s=!0,c=!1;return{s:function(){r=r.call(e)},n:function(){var l=r.next();return s=l.done,l},e:function(l){c=!0,a=l},f:function(){try{s||r.return==null||r.return()}finally{if(c)throw a}}}}function Xi(e,n){if(e){if(typeof e=="string")return Kn(e,n);var r={}.toString.call(e).slice(8,-1);return r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set"?Array.from(e):r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Kn(e,n):void 0}}function Kn(e,n){(n==null||n>e.length)&&(n=e.length);for(var r=0,t=Array(n);r<n;r++)t[r]=e[r];return t}var K="xl",Sn="16rem",Vi=function(n,r){if(!r)return"";var t=n.flatMap(function(l){return Array.isArray(l)?l:[l].concat(An(l.items))}).flatMap(function(l){return"items"in l&&l.items!==void 0?[l].concat(An(l.items)):l}).map(function(l){return l&&"href"in l&&l.href!==void 0?l.href:""}),i,a="",s=Qi(t),c;try{for(s.s();!(c=s.n()).done;){var d=c.value;if(d===r){i=d;break}r!=null&&r.startsWith(d)&&d.length>a.length&&(a=d)}}catch(l){s.e(l)}finally{s.f()}return i||a};function Zi(e){var n=e.children,r=e.focusMode,t=r===void 0?!1:r,i=sn(!1),a=eo(i,3),s=a[0],c=a[1],d=a[2];return o(Dt.Provider,{value:{focusMode:t,isMobileMenuOpen:s,openMobileMenu:c,closeMobileMenu:d},children:o(Ji,{focusMode:t,children:n})})}function Ji(e){var n=e.children,r=e.focusMode;return o("div",{css:ae({display:"grid",minHeight:"100vh",gridTemplateRows:"auto 1fr",gridTemplateColumns:ut(P({xs:"1fr"},K,r?"1fr":"".concat(Sn," 1fr")))}),children:n})}function Yn(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,t)}return r}function de(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?Yn(Object(r),!0).forEach(function(t){P(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Yn(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var ce=1.5,cn="3.75rem",ea={name:"1kn4ch8",styles:"margin-left:-0.5rem;margin-right:-0.5rem;overflow:hidden"};function na(e){var n=e.badgeLabel,r=e.dividerPosition,t=e.logo,i=e.heading,a=e.hasAccountDetails,s=e.href,c=e.secondHref,d=e.secondLogo,l=e.subLine,p=On();return t&&d?u(w,{css:ea,flexDirection:{xs:"column",lg:"row"},flexWrap:{xs:"wrap",xl:"nowrap"},gap:{xs:1,md:ce},inline:!0,padding:.5,children:[u(w,{css:b({marginRight:a&&r==="after"?D(ce):0},"",""),flexDirection:{xs:"column",sm:"row"},flexShrink:0,gap:ce,children:[o(w,{alignSelf:{xs:"start",sm:"center"},as:p,color:"text",css:b(de({" img, svg":{height:cn}},I.print.hidden),"",""),focusRingFor:"keyboard",href:s,children:t}),r==="between"&&o(nn,{dividerPosition:r}),o(w,de(de({alignSelf:{xs:"start",sm:"center"},as:c?p:"span",color:"text",css:b(de({" img, svg":{width:"100%"}},I.print.hidden),"",""),focusRingFor:"keyboard"},c&&{href:c}),{},{children:d}))]}),u(w,{css:r==="after"?P({},m.mediaQuery.min.lg,{marginLeft:"calc(-".concat(a?D(ce):0," - ").concat(m.borderWidth.sm,"px)")}):void 0,gap:ce,children:[r==="after"&&o(nn,{dividerPosition:r}),u(j,{as:p,color:"text",css:b({textDecoration:"none",":hover":I.underline},"",""),focusRingFor:"keyboard",href:s,justifyContent:"center",children:[u(w,{alignItems:"flex-start",gap:.5,children:[o(x,{fontSize:"lg",fontWeight:"bold",children:i}),n&&o(Un,{children:n})]}),l&&o(x,{color:"muted",fontSize:"xs",children:l})]})]})]}):u(w,{alignItems:{xs:"flex-start",md:"center"},as:p,color:"text",css:b({textDecoration:"none","&:hover":I.underline,svg:{display:"block",height:cn,flexShrink:0}},"",""),flexDirection:{xs:"column",md:"row"},focusRingFor:"keyboard",gap:{xs:1,md:0},href:s,paddingY:.5,children:[t,o(nn,{singleLogo:!0}),u(w,{alignItems:"flex-start",flexDirection:"column",justifyContent:"center",maxWidth:m.maxWidth.bodyText,children:[u(w,{alignItems:"flex-start",gap:.5,children:[o(x,{fontSize:"lg",fontWeight:"bold",children:i}),n&&o(Un,{children:n})]}),l&&o(x,{color:"muted",fontSize:"xs",children:l})]})]})}function Un(e){var n=e.children;return o(M,{border:!0,borderWidth:"md",css:b({fontSize:"0.75rem",paddingTop:"2px",paddingBottom:"2px",borderColor:g.foregroundText,borderRadius:"2em"},"",""),fontWeight:"bold",paddingLeft:.5,paddingRight:.5,children:n})}var nn=function(n){var r=n.dividerPosition,t=n.singleLogo;return o(M,{borderLeft:!0,css:b(de({margin:t?"0 1rem":void 0},I.print.hidden),"",""),display:t?{xs:"none",md:"block"}:{xs:"none",sm:r==="between"?"block":void 0,lg:"block"},height:t?cn:void 0})},ra=["ref"];function Qn(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,t)}return r}function Xn(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?Qn(Object(r),!0).forEach(function(t){P(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Qn(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function ta(e){var n=e.children,r=e.name,t=e.secondaryText;return u(Ao,{popoverOffset:-8,popoverPlacement:"bottom-end",children:[o(sa,{name:r,secondaryText:t}),n]})}var oa={name:"d3v9zr",styles:"overflow:hidden"},ia={name:"d3v9zr",styles:"overflow:hidden"},aa={name:"ozd7xs",styles:"flex-shrink:0"};function sa(e){var n=e.name,r=e.secondaryText,t=jo(),i=t.isMenuOpen,a=Bo(),s=a.ref,c=_(a,ra),d=h.useRef(0),l=Ke("sm");return h.useEffect(function(){d.current=window.innerWidth-document.documentElement.offsetWidth},[]),u(w,Xn(Xn({as:He,ref:s},c),{},{alignItems:"center",background:i?"shade":void 0,color:"action",css:ae({marginLeft:"auto",maxWidth:"calc(17.625rem - ".concat(d.current,"px)"),overflow:"hidden",svg:{transform:i?"rotate(180deg)":void 0,transition:l.transition},":hover":{backgroundColor:g.backgroundShade,"& > span:last-of-type > span:last-of-type":I.underline,svg:{transform:i?"rotate(180deg) ".concat(l.transform):l.transform}}}),focusRingFor:"keyboard",gap:1,justifyContent:"space-between",minHeight:"5.25rem",padding:1,children:[o(kn,{children:"Account menu"}),u(w,{alignItems:"center","aria-hidden":!0,as:"span",css:oa,gap:.5,width:"100%",children:[o(Lt,{name:n,size:"md",tone:"action"}),u(w,{as:"span",css:ia,flexDirection:"column",width:"100%",children:[o(x,{color:"action",css:I.truncate,fontSize:"xs",fontWeight:"bold",children:n}),r?o(x,{color:"muted",css:I.truncate,fontSize:"xs",children:r}):null]})]}),o(wn,{css:aa,size:"sm",weight:"bold"})]}))}function Vn(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,t)}return r}function rn(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?Vn(Object(r),!0).forEach(function(t){P(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Vn(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var la={name:"d3v9zr",styles:"overflow:hidden"};function At(e){var n=e.name,r=e.secondaryText,t=e.href,i=e.dropdown,a=On(),s=h.useRef(0);if(h.useEffect(function(){s.current=window.innerWidth-document.documentElement.offsetWidth},[]),i)return o(ta,{name:n,secondaryText:r,children:i});var c=!!t;return u(w,rn(rn({as:"span"},c&&{as:a,href:t,focusRingFor:"keyboard"}),{},{alignItems:"center",css:ae(rn({marginLeft:"auto",maxWidth:"calc(17.625rem - ".concat(s.current,"px)"),textDecoration:"none"},c&&{"&:hover":{"& > span > span":{textDecoration:"underline"}}})),flexShrink:0,gap:.5,minHeight:"5.25rem",textAlign:"right",children:[u(w,{as:"span",css:la,flexDirection:"column",children:[o(x,{color:"action",css:I.truncate,fontSize:"xs",fontWeight:"bold",children:n}),r?o(x,{color:"muted",css:I.truncate,fontSize:"xs",children:r}):null]}),o(Lt,{"aria-hidden":!0,name:n,size:"md",tone:"action"})]}))}function Zn(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,t)}return r}function ca(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?Zn(Object(r),!0).forEach(function(t){P(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Zn(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function da(e){var n=e.accountDetails,r=me(),t=r.focusMode,i=r.openMobileMenu;return u(w,{alignItems:"center",background:"body",display:P({xs:"flex"},K,"none"),flexWrap:"wrap",justifyContent:t?"flex-end":"space-between",paddingLeft:.75,paddingRight:n!=null&&n.dropdown?.75:m.containerPadding,children:[t?null:o(ua,{onClick:i}),n?o(At,ca({},n)):null]})}function ua(e){var n=e.onClick,r=me(),t=r.isMobileMenuOpen,i=Ke();return u(w,{alignItems:"center","aria-expanded":t,"aria-haspopup":"dialog",as:He,color:"action",css:b({svg:{transition:i.transition},"&:hover":{backgroundColor:g.backgroundShade,textDecoration:"underline",svg:{transform:i.transform}}},"",""),flexDirection:"column",focusRingFor:"keyboard",fontSize:"xs",gap:.5,justifyContent:"center",minHeight:"5.25rem",onClick:n,paddingX:1,children:[o(po,{"aria-hidden":!0}),o("span",{children:"Menu"})]})}function Jn(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,t)}return r}function pa(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?Jn(Object(r),!0).forEach(function(t){P(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Jn(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function fa(e){var n=e.accountDetails,r=e.background,t=r===void 0?"bodyAlt":r,i=e.badgeLabel,a=e.borderColor,s=a===void 0?"accent":a,c=e.dividerPosition,d=c===void 0?"after":c,l=e.heading,p=e.href,f=e.id,v=e.logo,k=e.palette,O=k===void 0?"dark":k,y=e.secondHref,C=e.secondLogo,S=e.subLine;return u(w,{as:"header",borderBottom:!0,borderBottomWidth:"xxl",borderColor:s,css:b(P({},m.mediaQuery.min[K],{gridColumnStart:1,gridColumnEnd:3}),"",""),flexDirection:"column",id:f,palette:O,children:[u(w,{alignItems:"center",background:t,gap:1,justifyContent:"space-between",paddingX:m.containerPadding,paddingY:.5,width:"100%",children:[o(na,{badgeLabel:i,dividerPosition:d,hasAccountDetails:!!n,heading:l,href:p,logo:v,secondHref:y,secondLogo:C,subLine:S}),o(M,{display:P({xs:"none"},K,"flex"),children:n?o(At,pa({},n)):null})]}),o(da,{accountDetails:n})]})}var ha=["endElement","icon","isActive","items","label","level"];function er(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,t)}return r}function R(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?er(Object(r),!0).forEach(function(t){P(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):er(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var ga=function e(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return function(t){var i,a,s="href"in t&&t.href===n,c=s||In(t.items,n);return R(R({},t),{},{isActive:c,items:c||(i=t.items)!==null&&i!==void 0&&i.length?t==null||(a=t.items)===null||a===void 0?void 0:a.map(e(n,r+1)):void 0,level:r+1})}},nr=function(n){var r=n.activePath,t=n.background,i=n.items,a=n.subLevelVisible;return o(j,{"aria-label":"main",as:"nav",paddingBottom:1.5,children:o(j,{as:"ul",children:i.map(function(s,c){var d,l,p=c===0,f=(Array.isArray(s)?s:s.items).map(ga(r)),v=Array.isArray(s)?!1:!!(!((d=s.options)===null||d===void 0)&&d.disableGroupPadding),k=i[c-1],O=k?Array.isArray(k)?!1:!!(!((l=k.options)===null||l===void 0)&&l.disableGroupPadding):!1;return u(h.Fragment,{children:[p?null:o(ba,{disablePaddingBottom:v,disablePaddingTop:O}),f.map(function(y,C){var S=In(y.items,r),L=a==="always"||S;return o(jt,{activePath:r,background:t,isActiveGroup:S,isOpen:L,item:y,subLevelVisible:a},C)})]},c)})})})},ma={name:"1ff36h2",styles:"flex-grow:1"};function jt(e){var n=e.activePath,r=e.background,t=e.isActiveGroup,i=e.isOpen,a=e.item,s=e.subLevelVisible,c=On(),d=a.endElement,l=a.icon,p=a.isActive,f=a.items,v=a.label,k=a.level,O=_(a,ha),y=me(),C=y.closeMobileMenu,S=(f==null?void 0:f.length)||0,L=S>0&&s!=="always";if("href"in a){var A,E,q,G=a.href===n;return u(tn,{background:r,hasEndElement:!!d,isActive:t,isCurrentPage:G,isOpen:i,level:a.level,onClick:C,children:[u(c,R(R({"aria-current":G?"page":void 0},O),{},{children:[l&&k===1&&o(l,{color:"inherit"}),k===2&&o("span",{"aria-hidden":!0,children:"–"}),o("span",{css:ma,children:v}),d,L&&(p?o(wn,{"aria-hidden":!1,"aria-label":". Sub-level ".concat(S===1?"link":"links"," below."),size:"md"}):o(fo,{"aria-hidden":!1,"aria-label":". Has ".concat(S," sub-level ").concat(S===1?"link":"links","."),size:"md"}))]})),!!(!((A=a.items)===null||A===void 0)&&A.length)&&(i||G)&&o(j,{as:"ul",children:(E=a.items)===null||E===void 0||(q=E.map)===null||q===void 0?void 0:q.call(E,function(F){var re;return o(jt,{activePath:n,background:r,isActiveGroup:!!p,isOpen:i,item:F,subLevelVisible:s},(re=F.label)===null||re===void 0?void 0:re.toString())})})]})}return"onClick"in a?o(tn,{background:r,hasEndElement:!!d,isActive:!1,isCurrentPage:!1,isOpen:!1,onClick:C,children:u(He,R(R({},O),{},{children:[l?o(l,{color:"inherit"}):null,o("span",{children:v}),d]}))}):o(tn,{background:r,hasEndElement:!1,isActive:!1,isCurrentPage:!1,isOpen:!1,children:o(j,{as:"span",gap:.25,children:v})})}function tn(e){var n=e.background,r=e.children,t=e.hasEndElement,i=e.isCurrentPage,a=e.isActive,s=e.isOpen,c=e.level,d=e.onClick;return o("li",{css:b({"> a, > button, > span":{width:"100%",boxSizing:"border-box",wordBreak:"break-word",paddingTop:D(1),paddingBottom:D(1),paddingLeft:D(c===2?3:1.5),paddingRight:D(1),"& > svg":{flexShrink:0}},"> a, > button":R(R(R(R({position:"relative",display:"flex",alignItems:"center",gap:D(.75),color:a&&c!==2||i?g.foregroundText:g.foregroundAction},(a||i||s)&&{fontWeight:i?m.fontWeight.bold:m.fontWeight.normal,background:i?g.selectedMuted:void 0,"&::before":R(R(R({content:"''",position:"absolute",top:0,left:0,bottom:0,borderLeftStyle:"solid",borderLeftWidth:m.borderWidth.xl},i&&{borderLeftColor:g.selected}),!i&&a&&{borderLeftColor:g.borderMuted}),!i&&!a&&s&&{borderLeft:"none"})}),t&&{"& > :last-child":{marginLeft:"auto"}}),{},{"&:hover":P({background:g[n==="body"?"backgroundShade":"backgroundShadeAlt"],color:g.foregroundText},"& > span:nth-of-type(".concat(c,")"),I.underline)},no),{},{":focus-visible":{zIndex:m.zIndex.elevated,outlineOffset:"-".concat(I.outline.outlineWidth),"&::before":{zIndex:-1}}}),"> span":{color:g.foregroundText},"> a":{textDecoration:"none"}},"",""),onClick:d,children:r})}function ba(e){var n=e.disablePaddingTop,r=e.disablePaddingBottom;return o(M,{"aria-hidden":!0,as:"li",paddingBottom:r?0:1,paddingTop:n?0:1,children:o("hr",{css:b({boxSizing:"content-box",height:0,margin:0,overflow:"visible",border:"none",borderTopWidth:m.borderWidth.sm,borderTopStyle:"solid",borderColor:g.borderMuted,width:"100%"},"","")})})}function In(e,n){return e!=null&&e.length&&n?e.some(function(r){return"href"in r&&r.href===n||"items"in r&&In(r.items,n)}):!1}var va={name:"qvn77x",styles:"inset:0;overflow-y:auto;position:fixed"};function ya(e){var n=e.children,r=e.palette,t=me(),i=t.isMobileMenuOpen,a=t.closeMobileMenu,s=dt(),c=h.useState(!0),d=c[0],l=c[1];h.useEffect(function(){i&&l(!1)},[i]),h.useEffect(function(){var k=function(y){y.code==="Escape"&&(y.preventDefault(),y.stopPropagation(),a())};return window.addEventListener("keydown",k),function(){return window.removeEventListener("keydown",k)}},[a]);var p=bn(i),f=p.modalContainerRef;if(!vn())return null;var v=i?!0:!d;return Cn.createPortal(u(ft,{children:[i&&o(Oa,{}),u("div",{ref:f,children:[o("div",{css:b({pointerEvents:"none",position:"absolute",opacity:i?1:0,transition:i?"none":"opacity ".concat(s?"1ms":"150ms")},"",""),"data-app-layout-sidebar":"transitioner",onTransitionEnd:function(){l(!0)}}),o(Pa,{isOpen:i,onClick:a,prefersReducedMotion:s}),o(M,{css:b({bottom:0,left:0,position:"fixed",top:0,transform:"translateX(".concat(i?"0":"-100%",")"),transition:"transform ".concat(s?"1ms":"150ms"," ease"),zIndex:m.zIndex.dialog},"",""),display:P({},K,"none"),width:Sn,children:v&&o(xn,{returnFocus:!0,children:u(M,{"aria-label":"Menu","aria-modal":!0,background:"shade",css:va,display:P({},K,"none"),palette:r,role:"dialog",children:[o(ka,{onClick:a}),n]})})})]})]}),document.body)}function Oa(){return o(yn,{styles:b(P({body:{overflow:"hidden"}},m.mediaQuery.min[K],{body:{overflow:"unset"}}),"","")})}function Pa(e){var n=e.isOpen,r=e.onClick,t=e.prefersReducedMotion;return o("div",{css:b(P({backgroundColor:g.overlay,display:"block",inset:0,opacity:n?1:0,pointerEvents:n?"all":"none",position:"fixed",transition:"opacity ".concat(t?"1ms":"150ms"," ease"),zIndex:m.zIndex.overlay},m.mediaQuery.min[K],{display:"none"}),"",""),onClick:r})}function ka(e){var n=e.onClick,r=Ke();return o(w,{alignItems:"center",borderBottom:!0,borderColor:"muted",flexShrink:0,paddingLeft:1,children:u(w,{alignItems:"center",as:He,color:"action",css:b({svg:{transition:r.transition},":focus":{outlineOffset:"-".concat(I.outline.outlineWidth)},":hover svg":{transform:r.transform}},"",""),flexDirection:"column",focusRingFor:"keyboard",fontSize:"xs",gap:.5,onClick:n,padding:1,children:[o(Ye,{}),o("span",{"aria-hidden":!0,children:"Close"}),o(kn,{children:"Close menu"})]})})}function rr(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,t)}return r}function ve(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?rr(Object(r),!0).forEach(function(t){P(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):rr(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function tr(e){var n=e.activePath,r=e.background,t=r===void 0?"bodyAlt":r,i=e.items,a=e.palette,s=e.subLevelVisible,c=s===void 0?"whenActive":s,d=me(),l=d.focusMode,p=Vi(i,n),f={activePath:p,items:i,subLevelVisible:c};return u(h.Fragment,{children:[o(j,{background:t,borderColor:"muted",borderRight:!0,css:b(P({display:"none",width:Sn},m.mediaQuery.min[K],{display:l?"none":"flex"}),"",""),flexGrow:1,gap:1,palette:a,children:o(nr,ve(ve({},f),{},{background:t}))}),o(ya,{palette:a,children:o(nr,ve(ve({},f),{},{background:"bodyAlt"}))})]})}var wa={name:"ovk77c",styles:"min-width:0"};function Ca(e){var n=e.children;return o(w,{css:wa,flexDirection:"column",children:n})}var xa={name:"xdvdnl",styles:"margin-top:auto"};function Sa(e){var n=e.background,r=n===void 0?"body":n,t=e.children,i=e.id,a=e.maxWidth,s=e.palette;return o(M,{as:"footer",background:r,css:xa,id:i,palette:s,children:o(io,{maxWidth:a,children:o(j,{borderColor:"muted",borderTop:!0,borderTopWidth:"xl",gap:1.5,paddingY:3,width:"100%",children:t})})})}function Ia(){return o("hr",{"aria-hidden":!0,css:b({boxSizing:"content-box",height:0,margin:0,overflow:"visible",border:"none",borderTopWidth:1,borderTopStyle:"solid",borderColor:g.borderMuted,width:"100%"},"","")})}const U={account:"/account",profile:"/account/profile",dashboard:"/account/dashboard",inbox:"/account/messages",linkBusiness:"/account/link-a-business",acceptInvite:"/account/invitation/accept"},Ma=so(u(h.Fragment,{children:[o("path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83"}),o("path",{d:"M22 12A10 10 0 0 0 12 2v10z"})]}),"PieChartIcon"),La=[{href:"/about",label:"About"},{href:"/about/contact-us",label:"Contact us"},{href:"/help",label:"Help"},{href:"https://www.agriculture.gov.au/about/commitment/accessibility",rel:"external",label:"Accessibility"},{href:"https://www.agriculture.gov.au/about/disclaimer",rel:"external",label:"Disclaimer"},{href:"/privacy",label:"Privacy"}],Q={dashboard:{label:"Dashboard",icon:mo,href:U.dashboard},establishments:{label:"Establishments",icon:vt,href:"/establishments"},intelligence:{label:"Data and Insights",icon:bo,href:"/intelligence"},compliance:{label:"Compliance",icon:vo,href:"/compliance"},quotas:{label:"Quotas",icon:Ma,href:"/quota"},exportDocumentation:{label:"Export documentation",icon:yo,href:"/export-documentation"},licences:{label:"Licences",icon:Oo,href:"/licences"}},Bt=e=>{var n,r,t;return[Q.dashboard,Q.establishments,Q.intelligence,Q.compliance,...(n=e==null?void 0:e.features)!=null&&n.quotas?[Q.quotas]:[],...(r=e==null?void 0:e.features)!=null&&r.exportDocumentation?[Q.exportDocumentation]:[],...(t=e==null?void 0:e.features)!=null&&t.licences?[Q.licences]:[]]};function Da({onSignOutClick:e,features:n}){return[Bt({features:n}),[{label:u(w,{as:"span",alignItems:"center",gap:.5,children:["Help",o(lo,{}),o(ho,{weight:"regular",size:"sm"})]}),icon:go,href:"/help",target:"_blank",rel:"noopener"}],[{label:"Sign out",onClick:e,icon:bt}]]}const Aa=(e,n)=>{var i;if(!n)return;let r,t;for(const a of e){if(a.href===n){r=a;break}n.startsWith(a.href)&&a.href.length>(((i=t==null?void 0:t.href)==null?void 0:i.length)??0)&&(t=a)}return r||t},ja=e=>n=>n===!0||n==e,Et=(e,n)=>r=>ja(e)(r)?n:{},Ba=Et("header",{palette:"light",borderColor:"selected"}),or=Et("sidebar",{background:"body"});var Ea={neutral:g.foregroundMuted,action:g.foregroundAction};function ir(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,t)}return r}function Ra(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?ir(Object(r),!0).forEach(function(t){P(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ir(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var Ta=function(n){var r=n.value,t=n.max,i=n.tone,a=n["aria-hidden"],s=Ea[i];return o(x,{alignItems:"center","aria-hidden":a,css:b(Ra({color:g.backgroundBody,backgroundColor:s,minWidth:D(1.5),borderRadius:D(.75)},ht.exactColor),"",""),display:"inline-flex",fontSize:"sm",height:D(1.5),highContrastOutline:!0,justifyContent:"center",lineHeight:"nospace",paddingX:.5,rounded:!0,children:t===void 0||r<=t?r:"".concat(t,"+")})};const za=e=>{var n;return((n=e==null?void 0:e.linkedBusinesses)==null?void 0:n.map(r=>{var t;return{...r,selected:((t=e==null?void 0:e.selectedBusiness)==null?void 0:t.partyId)===r.partyId,setSelected:()=>e.setSelectedBusiness(r)}}))??[]},Fa=e=>e.businesses.length===0?u(ln,{label:"Get started",children:[e!=null&&e.preventAddBusiness?null:o(pe,{href:U.linkBusiness,children:"Add a business to the Export Service"}),o(pe,{href:U.acceptInvite,children:"Accept an invite"})]}):u(ln,{label:"Businesses",children:[e.businesses.slice(0,3).map(n=>o(To,{checked:n.selected??!1,secondaryText:n.formattedPartyExternalId,onClick:e.onSelectBusiness(n),children:n.partyDisplayName},n.partyId)),e.businesses.length>3?o(pe,{href:"/account",endElement:o(yt,{}),children:"View all businesses"}):null]}),$a=e=>{const n=t=>()=>{var i;return(i=t==null?void 0:t.setSelected)==null?void 0:i.call(t)},r=za(e.businessDetails);return u(Ro,{palette:"light",children:[o(Fa,{businesses:r,onSelectBusiness:n,preventAddBusiness:e.preventAddBusiness}),o(jn,{}),u(ln,{label:"My account",children:[o(pe,{href:U.inbox,icon:Po,endElement:typeof e.unreadMessageCount=="number"&&e.unreadMessageCount>0?u("span",{children:[o(Ta,{tone:"action",value:e.unreadMessageCount,max:99,"aria-hidden":!0}),u(kn,{children:[", ",e.unreadMessageCount," unread"]})]}):void 0,children:"Inbox"}),o(pe,{href:U.profile,icon:ko,children:"Profile and settings"})]}),o(jn,{}),o(Eo,{onClick:e.onSignOutClick,icon:bt,children:"Sign out"})]})},Wa=e=>(e==null?void 0:e.selectedBusiness)===void 0?[]:[{options:{disableGroupPadding:!0},items:[{label:"Back to my account",icon:wo,href:"/account"}]},{options:{disableGroupPadding:!0},items:[{label:u(h.Fragment,{children:[o(x,{fontWeight:"bold",fontSize:"xs",children:e.selectedBusiness.partyDisplayName}),o(x,{color:"muted",fontSize:"xs",children:e.selectedBusiness.formattedPartyExternalId})]})}]}];var _a=["children"],Na=["as","children","direction","className"];function ar(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,t)}return r}function We(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?ar(Object(r),!0).forEach(function(t){P(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ar(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var Rt=function(n){var r=n.children,t=_(n,_a);return o(qa,We(We({as:$e},t),{},{children:r}))},qa=function(n){var r=n.as,t=n.children,i=n.direction,a=n.className,s=_(n,Na),c=Ga[i],d=i==="left",l=Ke("sm");return u(w,We(We({alignItems:"center",as:r,className:a,css:b({alignSelf:"flex-start",svg:{transition:l.transition},":hover svg":{transform:l.transform}},"",""),focusRingFor:"keyboard",fontFamily:"body",fontWeight:"normal",gap:.5,inline:!0,link:!0},s),{},{children:[d?o(c,{size:"sm"}):null,t,d?null:o(c,{size:"sm"})]}))},Ga={up:Co,right:yt,down:xo,left:So};function Ha(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.focusOnMount,r=e.focusOnUpdate,t=e.forwardedRef,i=h.useRef(null),a=t||i;return h.useEffect(function(){var s,c;!r&&!n||!("current"in a)||Array.isArray(r)&&r.filter(Boolean).length===0||a==null||(s=a.current)===null||s===void 0||(c=s.focus)===null||c===void 0||c.call(s)},[r]),a}var Ka=function(n){var r=n.as,t=r===void 0?"h2":r,i=n.children,a=n.hasDismissButton,s=n.hasCloseButton;return o(x,{as:t,css:ae(P({marginRight:s||a?"2.5rem":void 0},m.mediaQuery.min.sm,{marginRight:"0"})),fontSize:"lg",fontWeight:"bold",lineHeight:"heading",children:i})},Ya=function(n){var r,t=n.onClick;return o(H,{"aria-label":"Close",css:ae((r={position:"absolute",top:"1.5rem",right:"1.5rem",flexShrink:0},P(r,m.mediaQuery.min.sm,{position:"relative",top:"unset",right:"unset"}),P(r,"& > span:first-of-type",P({display:"none"},m.mediaQuery.min.sm,{display:"block"})),r)),iconAfter:Ye,onClick:t,variant:"text",children:"Close"})};function sr(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,t)}return r}function Ua(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?sr(Object(r),!0).forEach(function(t){P(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):sr(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var Qa=h.forwardRef(function(n,r){var t=n.id,i=n.focusOnMount,a=n.focusOnUpdate,s=n.role,c=n.children,d=n.onClose,l=n.onDismiss,p=n.title,f=n.tone,v=n.tabIndex,k=Ha({focusOnMount:i,focusOnUpdate:a,forwardedRef:r}),O=ki(d,l),y=Xa[f],C=y.fg,S=y.bg,L=y.icon;return u(w,{css:b({backgroundColor:S,position:"relative"},"",""),focusRingFor:"all",highContrastOutline:!0,id:t,ref:k,role:s,rounded:!0,tabIndex:v??(i||a?-1:void 0),children:[o(w,{alignItems:"center",css:b(Ua({borderTopLeftRadius:m.borderRadius,borderBottomLeftRadius:m.borderRadius,backgroundColor:C,color:g.backgroundBody},ht.exactColor),"",""),padding:.5,children:L}),u(w,{alignItems:"flex-start",css:b(P({marginRight:O&&!p?"3rem":void 0},m.mediaQuery.min.sm,{marginRight:"0"}),"",""),flexGrow:1,gap:1,padding:1.5,children:[u(w,{alignItems:"flex-start",flexDirection:"column",flexGrow:1,gap:1,children:[p?h.isValidElement(p)?p:o(Ka,{hasCloseButton:!!O,children:p}):null,c]}),O?o(Ya,{onClick:O}):null]})]})}),Xa={success:{fg:g.systemSuccess,bg:g.systemSuccessMuted,icon:o(Io,{"aria-hidden":"false","aria-label":"Success"})},error:{fg:g.systemError,bg:g.systemErrorMuted,icon:o(mt,{"aria-hidden":"false","aria-label":"Error"})},info:{fg:g.systemInfo,bg:g.systemInfoMuted,icon:o(Mo,{"aria-hidden":"false","aria-label":"Information"})},warning:{fg:g.systemWarning,bg:g.systemWarningMuted,icon:o(Lo,{"aria-hidden":"false","aria-label":"Warning"})}};const Va=["IP1","IP2","IP3","IP4"],Tt=Array.from(Va),Za=e=>{const n=[];return e.forEach(r=>n.unshift(r)),n},dn=new Set(Tt),lr=new Set(Za(Tt)),Ja={descriptor:"Unknown"},es={IP1:{level:"IP1",descriptor:"Basic"},IP2:{level:"IP2",descriptor:"Standard"},IP3:{level:"IP3",descriptor:"Strong"},IP4:{level:"IP4",descriptor:"Strong"}},ns=e=>dn.has(e),_e=(e,n)=>{const r=e&&ns(e)?es[e]:Ja;return n!=null&&n.short||r.level===void 0?r.descriptor:`${r.descriptor} (${r.level})`},zt=(e,n)=>Array.from(e).filter(r=>n.has(r)),Ft=(e,n)=>Array.from(e).filter(r=>!n.has(r)),ue=e=>{const n=new Set(e??[]);return[...zt(lr,n),...Ft(n,lr)][0]},$t=e=>{const n=new Set(e??[]);return[...zt(dn,n),...Ft(n,dn)][0]},cr=e=>e===void 0?[]:Array.isArray(e)?e:[e],rs=(e,n)=>{if(n===void 0||e.length===0)return!0;const r=new Set(n);return e.some(t=>r.has(t))},dr=e=>((e==null?void 0:e.trim())??"")==="",Wt=()=>o(te,{children:u($o,{title:"Need more help?",children:[u(x,{children:["Email"," ",o($e,{href:"mailto:exportservice@aff.gov.au",children:"exportservice@aff.gov.au"})]}),u(x,{children:["Call ",o($e,{href:"tel:1800571125",children:"1800 571 125"}),", Monday to Friday, 9 am to 5 pm AEST"]})]})}),ts=e=>o(W,{children:u(j,{gap:3,children:[o(te,{children:o(Rt,{href:U.dashboard,direction:"left",children:"Back to Dashboard"})}),u(N,{children:[o("h1",{children:"Single names in the Export Service"}),o("p",{children:"If you are legally known by a single name, you can use it to access an Export Service account. Other services we offer may not accept a single name and you will need to use a given and family name."}),o("p",{children:"Contact support if you need more help."})]}),o(Ot,{}),o(Wt,{})]})}),os=e=>{const n=_e(e.providedProofingLevel),r=_e(e.requiredProofingLevel,{short:!0});return o(W,{children:u(j,{gap:3,children:[o(te,{children:o(Rt,{href:U.dashboard,direction:"left",children:"Back"})}),u(N,{children:[o("h1",{children:e.activeApp??"Use a higher identity strength"}),o(M,{className:to,children:u(Qa,{tone:"info",title:"You can't access this feature",children:["Sign in with myID and use a ‘",r,"’ identity strength or higher to access this feature."]})}),o("h2",{children:"Review your profile and settings"}),u("p",{children:["Your current identity strength is ",n,". To access this feature you must add myID to your account from your"," ",o($e,{href:"TODO",children:"Profile and settings"}),", then sign in."]})]}),o(Ot,{}),o(Wt,{})]})})},_t={MissingName:ts,ProofMissing:os},is=({claims:e,errorComponents:n,requiredProofingLevel:r,authDetails:t,activeApp:i,children:a})=>{const s=n.MissingGivenName??n.MissingName,c=n.MissingFamilyName??n.MissingName,d=n.ProofMissing,l=cr(r),p=cr(t==null?void 0:t.proofingLevel);if(!rs(l,p)){const f=$t(l),v=ue(p);return o(d,{requiredProofingLevel:f,providedProofingLevel:v,activeApp:i})}return e===void 0?o(h.Fragment,{children:a}):dr(e==null?void 0:e.given_name)?o(s,{children:a}):dr(e==null?void 0:e.family_name)?o(c,{children:a}):o(h.Fragment,{children:a})},as=Object.values,ss={IP1:{AL1:"urn:id.gov.au:tdif:acr:ip1:cl1",AL2:"urn:id.gov.au:tdif:acr:ip1:cl2",AL3:"urn:id.gov.au:tdif:acr:ip1:cl3",PlusAL1:"urn:id.gov.au:tdif:acr:ip1p:cl1",PlusAL2:"urn:id.gov.au:tdif:acr:ip1p:cl2",PlusAL3:"urn:id.gov.au:tdif:acr:ip1p:cl3"},IP2:{AL2:"urn:id.gov.au:tdif:acr:ip2:cl2",AL3:"urn:id.gov.au:tdif:acr:ip2:cl3",PlusAL2:"urn:id.gov.au:tdif:acr:ip2p:cl2",PlusAL3:"urn:id.gov.au:tdif:acr:ip2p:cl3"},IP3:{AL2:"urn:id.gov.au:tdif:acr:ip3:cl2",AL3:"urn:id.gov.au:tdif:acr:ip3:cl3"},IP4:{AL3:"urn:id.gov.au:tdif:acr:ip4:cl3"}},ls=["IP1","IP2","IP3","IP4"],cs=Object.fromEntries(ls.map((e,n,r)=>[e,r.slice(0,n)])),ye=e=>Object.fromEntries(as(ss[e]).map(n=>[n,e])),ze={...ye("IP1"),...ye("IP2"),...ye("IP3"),...ye("IP4")},ds=e=>e in ze,us=e=>e===void 0?[]:Array.isArray(e)?e:[e],Fe=(e,n)=>{const t=us(e.AARM_acr).flatMap(i=>ds(i)?n!=null&&n.requireExactProofingMatch?[ze[i]]:[ze[i],...cs[ze[i]]]:n!=null&&n.removeUnknownACRs?[]:[i]);return Array.from(new Set(t))},ps=e=>(e==null?void 0:e.credentialType)==="myGovID"?"myID":(e==null?void 0:e.credentialType)==="B2CLocalUser"?"B2CLocalUser":void 0,fs=(e,n)=>e?{provider:ps(e),proofingLevel:Fe(e,n)}:void 0,Nt=h.createContext(void 0),qt=()=>{var e;return(e=h.useContext(Nt))==null?void 0:e.onSignOutClick};function Z({activePath:e,children:n,focusMode:r=!1,handleSignOut:t,mainContentId:i="main-content",unreadMessageCount:a,userName:s,businessDetails:c,claims:d,errorComponents:l,features:p,requiredProofingLevel:f,authDetails:v,sidebarItems:k,internal:O}){var Dn;const y=h.useMemo(()=>new Date().getFullYear(),[]),C=h.useContext(ro),[S,L,A]=sn(!1),[E,q,G]=sn(!1),F=L,re=t,le=h.useMemo(()=>Bt({features:p}),[p]),Xt=h.useMemo(()=>[...Wa(c),...Da({onSignOutClick:F,features:p})],[F,c,p]),Vt=fs(d),be=v??Vt,Ze=Aa(le,e),Zt=(be==null?void 0:be.provider)==="B2CLocalUser";return o(Zi,{focusMode:r,children:o(Nt.Provider,{value:{onSignOutClick:F},children:u(te,{children:[o(fa,{href:"/account",heading:"Export Service",subLine:"Supporting Australian agricultural exports",badgeLabel:"Beta",logo:o(zo,{}),accountDetails:s?{href:U.account,name:s,secondaryText:((Dn=c==null?void 0:c.selectedBusiness)==null?void 0:Dn.partyDisplayName)??"My account",dropdown:c?o($a,{businessDetails:c,unreadMessageCount:a,onSignOutClick:F,preventAddBusiness:Zt}):void 0}:void 0,...Ba(O)}),k?o(te,{...C,children:o(tr,{activePath:e,items:k,...or(O)})}):o(tr,{activePath:e,items:Xt,...or(O)}),u(Ca,{children:[o(te,{...C,children:o("main",{id:i,tabIndex:-1,css:{"&:focus":{outline:"none"}},children:o(is,{claims:d,authDetails:be,requiredProofingLevel:f,errorComponents:{..._t,...l},activeApp:Ze==null?void 0:Ze.label,children:n})})}),u(Sa,{children:[o("nav",{"aria-label":"footer",children:o(Fo,{links:La,horizontal:!0})}),o(Ia,{}),o(x,{fontSize:"xs",maxWidth:m.maxWidth.bodyText,children:"We acknowledge the traditional owners of country throughout Australia and recognise their continuing connection to land, waters and culture. We pay our respects to their Elders past, present and emerging."}),u(x,{fontSize:"xs",maxWidth:m.maxWidth.bodyText,children:["© ",y," Department of Agriculture, Fisheries and Forestry"]})]})]}),o(Mt,{isOpen:S,onClose:A,title:"Do you want to sign out?",actions:u(Pn,{children:[o(H,{onClick:async()=>{q(),await re(),G(),A()},loading:E,disabled:E,children:"Sign out"}),o(H,{variant:"secondary",onClick:A,children:"Cancel"})]}),children:o(x,{as:"p",children:"This will end your current session with the Export Service."})})]})})})}var Gt=Symbol.for("immer-nothing"),ur=Symbol.for("immer-draftable"),T=Symbol.for("immer-state");function $(e,...n){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var oe=Object.getPrototypeOf;function ie(e){return!!e&&!!e[T]}function J(e){var n;return e?Ht(e)||Array.isArray(e)||!!e[ur]||!!((n=e.constructor)!=null&&n[ur])||Qe(e)||Xe(e):!1}var hs=Object.prototype.constructor.toString();function Ht(e){if(!e||typeof e!="object")return!1;const n=oe(e);if(n===null)return!0;const r=Object.hasOwnProperty.call(n,"constructor")&&n.constructor;return r===Object?!0:typeof r=="function"&&Function.toString.call(r)===hs}function Ne(e,n){Ue(e)===0?Reflect.ownKeys(e).forEach(r=>{n(r,e[r],e)}):e.forEach((r,t)=>n(t,r,e))}function Ue(e){const n=e[T];return n?n.type_:Array.isArray(e)?1:Qe(e)?2:Xe(e)?3:0}function un(e,n){return Ue(e)===2?e.has(n):Object.prototype.hasOwnProperty.call(e,n)}function Kt(e,n,r){const t=Ue(e);t===2?e.set(n,r):t===3?e.add(r):e[n]=r}function gs(e,n){return e===n?e!==0||1/e===1/n:e!==e&&n!==n}function Qe(e){return e instanceof Map}function Xe(e){return e instanceof Set}function X(e){return e.copy_||e.base_}function pn(e,n){if(Qe(e))return new Map(e);if(Xe(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);const r=Ht(e);if(n===!0||n==="class_only"&&!r){const t=Object.getOwnPropertyDescriptors(e);delete t[T];let i=Reflect.ownKeys(t);for(let a=0;a<i.length;a++){const s=i[a],c=t[s];c.writable===!1&&(c.writable=!0,c.configurable=!0),(c.get||c.set)&&(t[s]={configurable:!0,writable:!0,enumerable:c.enumerable,value:e[s]})}return Object.create(oe(e),t)}else{const t=oe(e);if(t!==null&&r)return{...e};const i=Object.create(t);return Object.assign(i,e)}}function Mn(e,n=!1){return Ve(e)||ie(e)||!J(e)||(Ue(e)>1&&(e.set=e.add=e.clear=e.delete=ms),Object.freeze(e),n&&Object.entries(e).forEach(([r,t])=>Mn(t,!0))),e}function ms(){$(2)}function Ve(e){return Object.isFrozen(e)}var bs={};function ee(e){const n=bs[e];return n||$(0,e),n}var he;function Yt(){return he}function vs(e,n){return{drafts_:[],parent_:e,immer_:n,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function pr(e,n){n&&(ee("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=n)}function fn(e){hn(e),e.drafts_.forEach(ys),e.drafts_=null}function hn(e){e===he&&(he=e.parent_)}function fr(e){return he=vs(he,e)}function ys(e){const n=e[T];n.type_===0||n.type_===1?n.revoke_():n.revoked_=!0}function hr(e,n){n.unfinalizedDrafts_=n.drafts_.length;const r=n.drafts_[0];return e!==void 0&&e!==r?(r[T].modified_&&(fn(n),$(4)),J(e)&&(e=qe(n,e),n.parent_||Ge(n,e)),n.patches_&&ee("Patches").generateReplacementPatches_(r[T].base_,e,n.patches_,n.inversePatches_)):e=qe(n,r,[]),fn(n),n.patches_&&n.patchListener_(n.patches_,n.inversePatches_),e!==Gt?e:void 0}function qe(e,n,r){if(Ve(n))return n;const t=n[T];if(!t)return Ne(n,(i,a)=>gr(e,t,n,i,a,r)),n;if(t.scope_!==e)return n;if(!t.modified_)return Ge(e,t.base_,!0),t.base_;if(!t.finalized_){t.finalized_=!0,t.scope_.unfinalizedDrafts_--;const i=t.copy_;let a=i,s=!1;t.type_===3&&(a=new Set(i),i.clear(),s=!0),Ne(a,(c,d)=>gr(e,t,i,c,d,r,s)),Ge(e,i,!1),r&&e.patches_&&ee("Patches").generatePatches_(t,r,e.patches_,e.inversePatches_)}return t.copy_}function gr(e,n,r,t,i,a,s){if(ie(i)){const c=a&&n&&n.type_!==3&&!un(n.assigned_,t)?a.concat(t):void 0,d=qe(e,i,c);if(Kt(r,t,d),ie(d))e.canAutoFreeze_=!1;else return}else s&&r.add(i);if(J(i)&&!Ve(i)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;qe(e,i),(!n||!n.scope_.parent_)&&typeof t!="symbol"&&Object.prototype.propertyIsEnumerable.call(r,t)&&Ge(e,i)}}function Ge(e,n,r=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&Mn(n,r)}function Os(e,n){const r=Array.isArray(e),t={type_:r?1:0,scope_:n?n.scope_:Yt(),modified_:!1,finalized_:!1,assigned_:{},parent_:n,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let i=t,a=Ln;r&&(i=[t],a=ge);const{revoke:s,proxy:c}=Proxy.revocable(i,a);return t.draft_=c,t.revoke_=s,c}var Ln={get(e,n){if(n===T)return e;const r=X(e);if(!un(r,n))return Ps(e,r,n);const t=r[n];return e.finalized_||!J(t)?t:t===on(e.base_,n)?(an(e),e.copy_[n]=mn(t,e)):t},has(e,n){return n in X(e)},ownKeys(e){return Reflect.ownKeys(X(e))},set(e,n,r){const t=Ut(X(e),n);if(t!=null&&t.set)return t.set.call(e.draft_,r),!0;if(!e.modified_){const i=on(X(e),n),a=i==null?void 0:i[T];if(a&&a.base_===r)return e.copy_[n]=r,e.assigned_[n]=!1,!0;if(gs(r,i)&&(r!==void 0||un(e.base_,n)))return!0;an(e),gn(e)}return e.copy_[n]===r&&(r!==void 0||n in e.copy_)||Number.isNaN(r)&&Number.isNaN(e.copy_[n])||(e.copy_[n]=r,e.assigned_[n]=!0),!0},deleteProperty(e,n){return on(e.base_,n)!==void 0||n in e.base_?(e.assigned_[n]=!1,an(e),gn(e)):delete e.assigned_[n],e.copy_&&delete e.copy_[n],!0},getOwnPropertyDescriptor(e,n){const r=X(e),t=Reflect.getOwnPropertyDescriptor(r,n);return t&&{writable:!0,configurable:e.type_!==1||n!=="length",enumerable:t.enumerable,value:r[n]}},defineProperty(){$(11)},getPrototypeOf(e){return oe(e.base_)},setPrototypeOf(){$(12)}},ge={};Ne(Ln,(e,n)=>{ge[e]=function(){return arguments[0]=arguments[0][0],n.apply(this,arguments)}});ge.deleteProperty=function(e,n){return ge.set.call(this,e,n,void 0)};ge.set=function(e,n,r){return Ln.set.call(this,e[0],n,r,e[0])};function on(e,n){const r=e[T];return(r?X(r):e)[n]}function Ps(e,n,r){var i;const t=Ut(n,r);return t?"value"in t?t.value:(i=t.get)==null?void 0:i.call(e.draft_):void 0}function Ut(e,n){if(!(n in e))return;let r=oe(e);for(;r;){const t=Object.getOwnPropertyDescriptor(r,n);if(t)return t;r=oe(r)}}function gn(e){e.modified_||(e.modified_=!0,e.parent_&&gn(e.parent_))}function an(e){e.copy_||(e.copy_=pn(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var ks=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(n,r,t)=>{if(typeof n=="function"&&typeof r!="function"){const a=r;r=n;const s=this;return function(d=a,...l){return s.produce(d,p=>r.call(this,p,...l))}}typeof r!="function"&&$(6),t!==void 0&&typeof t!="function"&&$(7);let i;if(J(n)){const a=fr(this),s=mn(n,void 0);let c=!0;try{i=r(s),c=!1}finally{c?fn(a):hn(a)}return pr(a,t),hr(i,a)}else if(!n||typeof n!="object"){if(i=r(n),i===void 0&&(i=n),i===Gt&&(i=void 0),this.autoFreeze_&&Mn(i,!0),t){const a=[],s=[];ee("Patches").generateReplacementPatches_(n,i,a,s),t(a,s)}return i}else $(1,n)},this.produceWithPatches=(n,r)=>{if(typeof n=="function")return(s,...c)=>this.produceWithPatches(s,d=>n(d,...c));let t,i;return[this.produce(n,r,(s,c)=>{t=s,i=c}),t,i]},typeof(e==null?void 0:e.autoFreeze)=="boolean"&&this.setAutoFreeze(e.autoFreeze),typeof(e==null?void 0:e.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){J(e)||$(8),ie(e)&&(e=ws(e));const n=fr(this),r=mn(e,void 0);return r[T].isManual_=!0,hn(n),r}finishDraft(e,n){const r=e&&e[T];(!r||!r.isManual_)&&$(9);const{scope_:t}=r;return pr(t,n),hr(void 0,t)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,n){let r;for(r=n.length-1;r>=0;r--){const i=n[r];if(i.path.length===0&&i.op==="replace"){e=i.value;break}}r>-1&&(n=n.slice(r+1));const t=ee("Patches").applyPatches_;return ie(e)?t(e,n):this.produce(e,i=>t(i,n))}};function mn(e,n){const r=Qe(e)?ee("MapSet").proxyMap_(e,n):Xe(e)?ee("MapSet").proxySet_(e,n):Os(e,n);return(n?n.scope_:Yt()).drafts_.push(r),r}function ws(e){return ie(e)||$(10,e),Qt(e)}function Qt(e){if(!J(e)||Ve(e))return e;const n=e[T];let r;if(n){if(!n.modified_)return n.base_;n.finalized_=!0,r=pn(e,n.scope_.immer_.useStrictShallowCopy_)}else r=pn(e,!0);return Ne(r,(t,i)=>{Kt(r,t,Qt(i))}),n&&(n.finalized_=!1),r}var z=new ks,Oe=z.produce;z.produceWithPatches.bind(z);z.setAutoFreeze.bind(z);z.setUseStrictShallowCopy.bind(z);z.applyPatches.bind(z);z.createDraft.bind(z);z.finishDraft.bind(z);const V=[{partyId:1,partyDisplayName:"Jefferson PTY LTD",roleDisplayName:"Role 1",formattedPartyExternalId:"ABN: 89 790 756 100",someExtraInfo:"our component allows this field but does not use it at all"},{partyId:2,partyDisplayName:"Metaweb",roleDisplayName:"Role 2",formattedPartyExternalId:"ABN: 89 790 756 100",someExtraInfo:"our component allows this field but does not use it at all"},{partyId:3,partyDisplayName:"Fresh Produce Australia",roleDisplayName:"Role 3",formattedPartyExternalId:"ABN: 92 635 964 018",someExtraInfo:"our component allows this field but does not use it at all"},{partyId:4,partyDisplayName:"Fresh Produce Australia",roleDisplayName:"Role 3",formattedPartyExternalId:"ABN: 92 635 964 018",someExtraInfo:"our component allows this field but does not use it at all"}],$s={title:"AppLayout",component:Z,parameters:{layout:"fullscreen"},render:function(n){return u(h.Fragment,{children:[o(se,{links:[{href:"#main-content",label:"Skip to main content"}]}),o(Z,{...n,children:o(W,{children:o(N,{children:o("h1",{children:"Page heading"})})})})]})}},Cs=e=>new Promise(n=>setTimeout(n,e)),B=async()=>{await Cs(2e3),alert("You have been signed out.")},Pe={args:{focusMode:!1,userName:"Toto Wolff",unreadMessageCount:6,activePath:"/",handleSignOut:B}},ke={args:{focusMode:!0,userName:"Toto Wolff",unreadMessageCount:6,activePath:"/",handleSignOut:B}},we={args:{activePath:"/",focusMode:!1,handleSignOut:B},render:function(n){const[r,t]=h.useState(!1);return h.useEffect(()=>{setTimeout(()=>{t(!0)},1e3)},[]),u(h.Fragment,{children:[o(se,{links:[{href:"#main-content",label:"Skip to main content"}]}),o(Z,{...n,...r?{userName:"Toto Wolff",unreadMessageCount:6}:{},children:o(W,{children:o(N,{children:o("h1",{children:"Page heading"})})})})]})}},Ce={args:{focusMode:!1,userName:"Toto Wolff",unreadMessageCount:6,activePath:"/",handleSignOut:B},render:function(n){const[r,t]=h.useState({linkedBusinesses:V,selectedBusiness:V[1]}),[i,a]=h.useState({provider:"myID"}),s=d=>t(l=>({...l,selectedBusiness:d})),c=d=>()=>{const l=V.slice(0,d),p=l[0];t({selectedBusiness:p,linkedBusinesses:l})};return u(h.Fragment,{children:[o(se,{links:[{href:"#main-content",label:"Skip to main content"}]}),o(Z,{...n,businessDetails:{...r,setSelectedBusiness:s},authDetails:i,children:o(W,{children:u(j,{gap:3,children:[o(N,{children:o("h1",{children:"Business dropdown configuration"})}),o(fe,{label:"Number of linked businesses",block:!0,hideOptionalLabel:!0,children:Array.from(new Array(V.length+1).keys()).map(d=>{var l;return u(Fn,{checked:((l=r==null?void 0:r.linkedBusinesses)==null?void 0:l.length)===d,onChange:c(d),children:[d," ",d===0?"business":"businesses"]},d)})}),o(fe,{label:"Auth provider",block:!0,hideOptionalLabel:!0,children:["myID","B2CLocalUser"].map(d=>o(Fn,{checked:(i==null?void 0:i.provider)===d,onChange:()=>a(l=>({...l,provider:d})),children:d},d))})]})})})]})}},xe={args:{focusMode:!1,userName:"Toto Wolff",unreadMessageCount:6,activePath:"/",handleSignOut:B},render:function(n){const r=V,[t,i]=h.useState(r[1]),[a,s]=h.useState(),c=()=>s(void 0),d={linkedBusinesses:r,selectedBusiness:t,setSelectedBusiness:s};return u(h.Fragment,{children:[o(se,{links:[{href:"#main-content",label:"Skip to main content"}]}),u(Z,{...n,businessDetails:d,children:[o(Mt,{isOpen:a!==void 0,onClose:c,title:"Are you sure you want to leave this page?",actions:u(Pn,{children:[o(H,{onClick:()=>{a!==void 0&&i(a),s(void 0)},children:"Leave this page"}),o(H,{variant:"secondary",onClick:c,children:"Stay on this page"})]}),children:o(x,{as:"p",children:"You will lose all changes made since your last save."})}),o(W,{children:o(j,{gap:3,children:o(N,{children:u("h1",{children:["Active business: ",t==null?void 0:t.partyDisplayName]})})})})]})]})}},Se={args:{focusMode:!1,userName:"Toto Wolff",unreadMessageCount:6,activePath:"/",handleSignOut:B},render:function(n){const r={linkedBusinesses:V,selectedBusiness:V[0],setSelectedBusiness:()=>{}},t=()=>{const i=qt();return o(H,{onClick:i,children:"Sign out"})};return u(h.Fragment,{children:[o(se,{links:[{href:"#main-content",label:"Skip to main content"}]}),o(Z,{...n,businessDetails:r,children:o(W,{children:u(j,{gap:3,children:[u(N,{children:[o("h1",{children:"Sign out button"}),u("p",{children:["You can trigger the sign out modal using the"," ",o("code",{children:"useOpenSignOutModal"})," hook."]})]}),o(Pn,{children:o(t,{})})]})})})]})}},Ie={args:{focusMode:!1,userName:"Toto Wolff",unreadMessageCount:6,activePath:"/",features:{quotas:!0,exportDocumentation:!0,licences:!0}}},Me={args:{focusMode:!1,unreadMessageCount:6,activePath:"/",handleSignOut:B,claims:{given_name:"given_name",family_name:"family_name"}}},Le={args:{focusMode:!1,unreadMessageCount:6,activePath:"/",handleSignOut:B,claims:{family_name:"family_name"}}},De={args:{focusMode:!1,unreadMessageCount:6,activePath:"/",handleSignOut:B,claims:{family_name:"family_name"},errorComponents:{MissingName:e=>(h.useEffect(()=>{console.log("report this situation to an analytics provider here")},[]),o(_t.MissingName,{...e}))}}},Ae={args:{focusMode:!1,unreadMessageCount:6,activePath:"/",handleSignOut:B,claims:{family_name:"family_name"},errorComponents:{MissingName:e=>o(W,{children:u(N,{children:[o("p",{children:"Our app works just fine even without a generic name."}),o("hr",{}),e.children]})})}}},je={args:{focusMode:!1,unreadMessageCount:6,activePath:"/",handleSignOut:B,claims:{family_name:"family_name"},errorComponents:{MissingGivenName:e=>{const n=qt();return o(W,{children:u(N,{children:[o("p",{children:"Our app works just fine even without a given name."}),o("hr",{}),e.children,o(H,{onClick:n,children:"Sign out"})]})})}}}},Be={args:{focusMode:!1,unreadMessageCount:6,activePath:"/",handleSignOut:B,claims:{given_name:"given_name",family_name:"family_name",AARM_acr:"urn:id.gov.au:tdif:acr:ip1:cl1"},requiredProofingLevel:"IP2"}},Ee={args:{focusMode:!1,unreadMessageCount:6,activePath:"/",handleSignOut:B},render:function(n){const r=["IP1","IP2","IP3","IP4"],t=["urn:id.gov.au:tdif:acr:ip1:cl1","urn:id.gov.au:tdif:acr:ip1:cl2","urn:id.gov.au:tdif:acr:ip1:cl3","urn:id.gov.au:tdif:acr:ip1p:cl1","urn:id.gov.au:tdif:acr:ip1p:cl2","urn:id.gov.au:tdif:acr:ip1p:cl3","urn:id.gov.au:tdif:acr:ip2:cl2","urn:id.gov.au:tdif:acr:ip2:cl3","urn:id.gov.au:tdif:acr:ip2p:cl2","urn:id.gov.au:tdif:acr:ip2p:cl3","urn:id.gov.au:tdif:acr:ip3:cl2","urn:id.gov.au:tdif:acr:ip3:cl3","urn:id.gov.au:tdif:acr:ip4:cl3"],[i,a]=h.useState(!0),[s,c]=h.useState({method:"urn",claims:{given_name:"given_name",family_name:"family_name",AARM_acr:[t[0]]},authDetails:{proofingLevel:["IP1"]},requiredProofingLevel:["IP2"]}),d=l=>{const p=l.kind==="max"?"#df185a":"#287be0",f=l!=null&&l.extraText?` (${l.extraText})`:"";return l!=null&&l.active?o(M,{css:{position:"relative",padding:"4px",border:`2px dashed ${p}`,"& + &":{marginTop:"1em"},":after":{position:"absolute",right:0,bottom:"120%",content:`"${l.kind==="max"?"maximum provided proof":"minimum required proof"}${f}"`,color:p,fontSize:"0.8em"}},children:l.children}):o(ft,{children:l.children})};return u(h.Fragment,{children:[o(se,{links:[{href:"#main-content",label:"Skip to main content"}]}),u(M,{css:{position:"relative"},children:[o(M,{css:{border:"2px solid red",backgroundColor:"#fec0ff",position:"fixed",transform:"rotate(90deg)",transformOrigin:"top right",fontSize:"1.2em",padding:".4em 1em",top:"55vh",right:0,zIndex:99,cursor:"pointer"},onClick:()=>a(!0),children:"show config options"}),o(Z,{...n,requiredProofingLevel:s.requiredProofingLevel,...s.method==="claims"?{claims:s.claims}:{authDetails:s.authDetails},children:o(W,{children:u(j,{gap:1.5,children:[o(x,{as:"p",fontSize:"lg",children:"You made it!"}),o(x,{as:"p",children:"Your proofing level means that you can see this page."})]})})})]}),o(ji,{title:"Config",isOpen:i,onClose:()=>a(!1),children:u(j,{gap:1.5,children:[o(bi,{label:"Proofing method",required:!0,options:[{value:"authDetails",label:"AuthDetails"},{value:"claims",label:"Claims"}],onChange:l=>c(Oe(p=>{p.method=l.target.value}))}),s.method==="claims"?o(fe,{label:"Provided ACR",block:!0,hideOptionalLabel:!0,children:t.map(l=>o(d,{kind:"max",active:ue(Fe({AARM_acr:l}))===ue(Fe(s.claims)),extraText:ue(Fe(s.claims)),children:o(en,{checked:new Set(s.claims.AARM_acr).has(l),onChange:p=>c(Oe(f=>{p.target.checked?f.claims.AARM_acr.push(l):f.claims.AARM_acr.splice(f.claims.AARM_acr.indexOf(l),1)})),children:l},l)},l))}):o(fe,{label:"Provided proofing level",block:!0,hideOptionalLabel:!0,children:r.map(l=>o(d,{kind:"max",active:ue(s.authDetails.proofingLevel)===l,children:o(en,{checked:new Set(s.authDetails.proofingLevel).has(l),onChange:p=>c(Oe(f=>{p.target.checked?f.authDetails.proofingLevel.push(l):f.authDetails.proofingLevel.splice(f.authDetails.proofingLevel.indexOf(l),1)})),children:l},l)},l))}),o(fe,{label:"Required proofing level",block:!0,hideOptionalLabel:!0,children:r.map(l=>o(d,{kind:"min",active:$t(s.requiredProofingLevel)===l,children:o(en,{checked:new Set(s.requiredProofingLevel).has(l),onChange:p=>c(Oe(f=>{p.target.checked?f.requiredProofingLevel.push(l):f.requiredProofingLevel.splice(f.requiredProofingLevel.indexOf(l),1)})),children:l},l)},l))})]})})]})}},Re={args:{focusMode:!1,unreadMessageCount:6,activePath:"/",handleSignOut:B,authDetails:{proofingLevel:"IP1"},requiredProofingLevel:"IP3",errorComponents:{ProofMissing:e=>o(W,{children:u(N,{children:[u("p",{children:["Your proofing level is insufficient at"," ",_e(e.providedProofingLevel),". Please fix it."]}),u("p",{children:["you should provide at least '",_e(e.requiredProofingLevel),"'"]})]})})}}},Te={args:{focusMode:!1,userName:"Toto Wolff",unreadMessageCount:6,activePath:"/custom",handleSignOut:B,sidebarItems:[{items:[{label:"Custom sidenav",href:"/custom",icon:vt},{label:"Other item",href:"/other",icon:Do}]}],internal:"sidebar"}};var mr,br,vr;Pe.parameters={...Pe.parameters,docs:{...(mr=Pe.parameters)==null?void 0:mr.docs,source:{originalSource:`{
  args: {
    focusMode: false,
    userName: 'Toto Wolff',
    unreadMessageCount: 6,
    activePath: '/',
    handleSignOut
  }
}`,...(vr=(br=Pe.parameters)==null?void 0:br.docs)==null?void 0:vr.source}}};var yr,Or,Pr;ke.parameters={...ke.parameters,docs:{...(yr=ke.parameters)==null?void 0:yr.docs,source:{originalSource:`{
  args: {
    focusMode: true,
    userName: 'Toto Wolff',
    unreadMessageCount: 6,
    activePath: '/',
    handleSignOut
  }
}`,...(Pr=(Or=ke.parameters)==null?void 0:Or.docs)==null?void 0:Pr.source}}};var kr,wr,Cr;we.parameters={...we.parameters,docs:{...(kr=we.parameters)==null?void 0:kr.docs,source:{originalSource:`{
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
}`,...(Cr=(wr=we.parameters)==null?void 0:wr.docs)==null?void 0:Cr.source}}};var xr,Sr,Ir;Ce.parameters={...Ce.parameters,docs:{...(xr=Ce.parameters)==null?void 0:xr.docs,source:{originalSource:`{
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
}`,...(Ir=(Sr=Ce.parameters)==null?void 0:Sr.docs)==null?void 0:Ir.source}}};var Mr,Lr,Dr;xe.parameters={...xe.parameters,docs:{...(Mr=xe.parameters)==null?void 0:Mr.docs,source:{originalSource:`{
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
}`,...(Dr=(Lr=xe.parameters)==null?void 0:Lr.docs)==null?void 0:Dr.source}}};var Ar,jr,Br;Se.parameters={...Se.parameters,docs:{...(Ar=Se.parameters)==null?void 0:Ar.docs,source:{originalSource:`{
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
}`,...(Br=(jr=Se.parameters)==null?void 0:jr.docs)==null?void 0:Br.source}}};var Er,Rr,Tr;Ie.parameters={...Ie.parameters,docs:{...(Er=Ie.parameters)==null?void 0:Er.docs,source:{originalSource:`{
  args: {
    focusMode: false,
    userName: 'Toto Wolff',
    unreadMessageCount: 6,
    activePath: '/',
    features: {
      quotas: true,
      exportDocumentation: true,
      licences: true
    }
  }
}`,...(Tr=(Rr=Ie.parameters)==null?void 0:Rr.docs)==null?void 0:Tr.source}}};var zr,Fr,$r;Me.parameters={...Me.parameters,docs:{...(zr=Me.parameters)==null?void 0:zr.docs,source:{originalSource:`{
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
}`,...($r=(Fr=Me.parameters)==null?void 0:Fr.docs)==null?void 0:$r.source}}};var Wr,_r,Nr;Le.parameters={...Le.parameters,docs:{...(Wr=Le.parameters)==null?void 0:Wr.docs,source:{originalSource:`{
  args: {
    focusMode: false,
    unreadMessageCount: 6,
    activePath: '/',
    handleSignOut,
    claims: {
      family_name: 'family_name'
    }
  }
}`,...(Nr=(_r=Le.parameters)==null?void 0:_r.docs)==null?void 0:Nr.source}}};var qr,Gr,Hr;De.parameters={...De.parameters,docs:{...(qr=De.parameters)==null?void 0:qr.docs,source:{originalSource:`{
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
}`,...(Hr=(Gr=De.parameters)==null?void 0:Gr.docs)==null?void 0:Hr.source}}};var Kr,Yr,Ur;Ae.parameters={...Ae.parameters,docs:{...(Kr=Ae.parameters)==null?void 0:Kr.docs,source:{originalSource:`{
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
}`,...(Ur=(Yr=Ae.parameters)==null?void 0:Yr.docs)==null?void 0:Ur.source}}};var Qr,Xr,Vr;je.parameters={...je.parameters,docs:{...(Qr=je.parameters)==null?void 0:Qr.docs,source:{originalSource:`{
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
}`,...(Vr=(Xr=je.parameters)==null?void 0:Xr.docs)==null?void 0:Vr.source}}};var Zr,Jr,et;Be.parameters={...Be.parameters,docs:{...(Zr=Be.parameters)==null?void 0:Zr.docs,source:{originalSource:`{
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
}`,...(et=(Jr=Be.parameters)==null?void 0:Jr.docs)==null?void 0:et.source}}};var nt,rt,tt;Ee.parameters={...Ee.parameters,docs:{...(nt=Ee.parameters)==null?void 0:nt.docs,source:{originalSource:`{
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
}`,...(tt=(rt=Ee.parameters)==null?void 0:rt.docs)==null?void 0:tt.source}}};var ot,it,at;Re.parameters={...Re.parameters,docs:{...(ot=Re.parameters)==null?void 0:ot.docs,source:{originalSource:`{
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
}`,...(at=(it=Re.parameters)==null?void 0:it.docs)==null?void 0:at.source}}};var st,lt,ct;Te.parameters={...Te.parameters,docs:{...(st=Te.parameters)==null?void 0:st.docs,source:{originalSource:`{
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
}`,...(ct=(lt=Te.parameters)==null?void 0:lt.docs)==null?void 0:ct.source}}};const Ws=["Basic","FocusMode","ClientSideFetch","BusinessDropdown","BusinessDropdownModalInterrupt","SignOutModalTrigger","OptionalAppsEnabled","Claims","ClaimsMissingName","ClaimsMissingNameAnalytics","ClaimsMissingNameComponent","ClaimsMissingGivenNameComponent","RequiredProofingPaywall","RequiredProofingPaywallOptions","RequiredProofingPaywallCustomComponent","CustomSidenav"];export{Pe as Basic,Ce as BusinessDropdown,xe as BusinessDropdownModalInterrupt,Me as Claims,je as ClaimsMissingGivenNameComponent,Le as ClaimsMissingName,De as ClaimsMissingNameAnalytics,Ae as ClaimsMissingNameComponent,we as ClientSideFetch,Te as CustomSidenav,ke as FocusMode,Ie as OptionalAppsEnabled,Be as RequiredProofingPaywall,Re as RequiredProofingPaywallCustomComponent,Ee as RequiredProofingPaywallOptions,Se as SignOutModalTrigger,Ws as __namedExportsOrder,$s as default};
