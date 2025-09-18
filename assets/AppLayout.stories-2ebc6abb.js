import{j as o,e as W,m as D,t as m,_ as P,c as b,b as g,i as u,B as M,p as I,G as bn,g as ae,h as ut,s as pt,q as no,a as ro,F as ft,u as ht}from"./Box-c58c9f90.esm-8cc217f1.js";import{r as f}from"./index-39cffa30.js";import{P as _,p as to}from"./ag.ds-next-react-prose.esm-9cfd59f8.js";import{b as oo,m as io,c as K,_ as gt,C as ao,B as He,P as $,a as vn}from"./ag.ds-next-react-button.esm-42a75b53.js";import{v as so,S as j,T as C,F as w,V as yn,s as Ue,c as lo,E as co}from"./Icon-8342de17.esm-15029b31.js";import{e as re,a as On,c as Pn,F as wn,u as sn,_ as jn,D as uo,b as po,d as fo,f as Bn,g as ln,h as pe,i as ho,j as go,k as mo,l as mt}from"./ag.ds-next-react-dropdown-menu.esm-14bd239d.js";import{b as bt,c as bo,d as vo,a as kn,C as Ke,M as yo,e as Oo,E as Po,H as wo,f as vt,g as ko,U as xo,F as yt,h as Co,S as So,P as Ot,L as Io,i as Mo,j as Lo,A as Do,k as Ao,l as Pt,m as jo,n as Bo,o as Eo,p as Ro,I as To,W as zo}from"./ag.ds-next-react-icon.esm-7c10b2fa.js";import{r as xn}from"./index-1883dec2.js";import{u as Cn,C as te,c as Fo}from"./CoreProvider-eb9f00f4.esm-50a1f8d7.js";import{L as $o}from"./ag.ds-next-react-ag-branding.esm-54256e91.js";import{L as Wo}from"./ag.ds-next-react-link-list.esm-4d44a63b.js";import{C as _o}from"./ag.ds-next-react-callout.esm-43c4f3c7.js";import{a as $e}from"./ag.ds-next-react-text-link.esm-83f0c587.js";import"./jsx-runtime-9bc08dc0.js";import"./_commonjsHelpers-725317a4.js";function wt(){var e=f.useState(!1),n=e[0],r=e[1];return f.useEffect(function(){if(!window.matchMedia){r(!1);return}var t=window.matchMedia("(prefers-reduced-motion: reduce)");r(t.matches);var i=function(s){return r(s.matches)};return t.addEventListener("change",i),function(){return t.removeEventListener("change",i)}},[]),n}var No=function(n){var r=n.children,t=n["aria-label"];return o("nav",{"aria-label":t,children:r})},qo=f.forwardRef(function(n,r){var t=n.children,i=n.href;return o("a",{css:[so,oo({block:!1,size:"md",variant:"primary"}),{position:"absolute","&:focus-visible":{top:D(1),left:D(1),clip:"auto",clipPath:"none",overflow:"visible",whiteSpace:"normal",width:"auto",zIndex:m.zIndex.skipLink}},"","","",""],href:i,ref:r,children:t})}),Go=["label"];function En(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,t)}return r}function Rn(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?En(Object(r),!0).forEach(function(t){P(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):En(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var se=function(n){var r=n.links,t=n["aria-label"],i=t===void 0?"Skip links":t;return o(No,{"aria-label":i,children:r.map(function(a,s){var c=a.label,d=W(a,Go);return o(qo,Rn(Rn({},d),{},{children:c}),s)})})},Ho=function(n){var r=n.hideOptionalLabel,t=n.required,i=n.secondaryLabel;return f.useMemo(function(){return[i,r||t?null:"(optional)"].filter(Boolean).join(" ")},[t,i,r])},kt=function(n){var r=n.children,t=n.invalid,i=n.id;return o(j,{borderLeft:t,borderLeftWidth:"xl",css:b({borderLeftColor:t?g.systemError:void 0},"",""),gap:.5,id:i,paddingLeft:t?1:void 0,children:r})},xt=function(n){var r=n.as,t=r===void 0?"label":r,i=n.children,a=n.className,s=n.id,c=n.htmlFor,d=n.required,l=n.secondaryLabel,p=n.hideOptionalLabel,h=Ho({hideOptionalLabel:p,required:d,secondaryLabel:l});return u(M,{as:t,className:a,htmlFor:c,id:s,children:[o(C,{as:"span",fontWeight:"bold",children:i}),h?u(C,{as:"span",color:"muted",children:[" ",h]}):null]})},Ct=function(n){var r=n.children,t=n.id;return o(C,{color:"muted",display:"block",id:t,children:r})},Uo={name:"4zleql",styles:"display:block"},St=function(n){var r=n.children,t=n.id;return u(w,{alignItems:"center",gap:.5,children:[o(M,{flexShrink:0,children:o(bt,{"aria-hidden":"false","aria-label":"Error",color:"error",css:Uo,size:"md"})}),o(C,{color:"error",display:"block",fontWeight:"bold",id:t,children:r})]})},Ko=function(n){var r=n.children,t=n.hint,i=n.id,a=n.invalid,s=n.label,c=n.labelId,d=n.maxWidth,l=n.secondaryLabel,p=n.hideOptionalLabel,h=n.message,v=n.required,k=Yo(i),y=k.fieldId,O=k.hintId,x=k.messageId,S=Qo({required:v,fieldId:y,message:h,messageId:x,hint:t,hintId:O,invalid:a});return u(kt,{invalid:a,children:[o(xt,{hideOptionalLabel:p,htmlFor:y,id:c,required:v,secondaryLabel:l,children:s}),t?o(Ct,{id:O,children:t}):null,h&&a?o(St,{id:x,children:h}):null,typeof r=="function"?r(S):r,d?o("div",{"aria-hidden":!0,css:b({height:0,marginTop:"-".concat(D(.5)),maxWidth:m.maxWidth.field[d],overflow:"hidden","::after":{content:'"---------------------------------------------------------------"'}},"","")}):null]})},Yo=function(n){var r=re(n),t=n||"field-".concat(r),i="field-".concat(r,"-hint"),a="field-".concat(r,"-message");return{fieldId:t,hintId:i,messageId:a}},Qo=function(n){var r=n.required,t=n.fieldId,i=n.message,a=n.messageId,s=n.hint,c=n.hintId,d=n.invalid,l=[i?a:null,s?c:null].filter(Boolean),p=l.length?l.join(" "):void 0;return{"aria-required":!!r,"aria-invalid":!!d,"aria-describedby":p,id:t}},It=f.createContext(void 0),Mt=function(){return f.useContext(It)};function Xo(e){var n=e.children,r=e.invalid,t=e.messageId,i=e.name,a=e.required,s=re();return o(It.Provider,{value:{invalid:r,name:i||s,messageId:t,required:a},children:n})}var fe=function(n){var r=n.block,t=r===void 0?!1:r,i=n.children,a=n.hint,s=n.id,c=n.invalid,d=c===void 0?!1:c,l=n.label,p=n.hideOptionalLabel,h=n.message,v=n.name,k=n.required,y=k===void 0?!1:k,O=Vo(s),x=O.groupId,S=O.hintId,L=O.messageId,A=[d&&h?L:null,a?S:null].filter(Boolean),E=A.length?A.join(" "):void 0;return o(Xo,{invalid:d,messageId:d&&h?L:void 0,name:v,required:y,children:o(kt,{id:x,invalid:d,children:u(M,{"aria-describedby":E,as:"fieldset",children:[l?o(xt,{as:"legend",hideOptionalLabel:p,required:y,children:l}):null,u(j,{css:b({marginTop:l?D(.5):void 0},"",""),gap:.5,children:[a?o(Ct,{id:S,children:a}):null,h&&d?o(St,{id:L,children:h}):null,o(w,{flexDirection:t?"column":"row",flexWrap:t?void 0:"wrap",gap:1,paddingTop:.5,width:"100%",children:i})]})]})})})},Vo=function(n){var r=re(n),t=n||"control-group-".concat(r),i="control-group-".concat(r,"-hint"),a="control-group-".concat(r,"-message");return{groupId:t,hintId:i,messageId:a}};function Tn(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,t)}return r}function Je(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?Tn(Object(r),!0).forEach(function(t){P(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Tn(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function Zo(e){var n=e.disabled,r=e.invalid,t=e.size,i=I.control[t],a=i.width,s=i.height,c=i.borderWidth;return o(w,{alignItems:"center",as:"span",css:b(Je(Je({backgroundColor:g.backgroundBody,borderColor:g.border,borderRadius:"100%",borderStyle:"solid",borderWidth:c,inset:0,position:"absolute"},n&&{color:g.borderMuted,borderColor:g.borderMuted,backgroundColor:g.backgroundShade,"@media (forced-colors: active)":{borderColor:"GrayText",color:"GrayText"}}),r&&{borderColor:g.systemError,backgroundColor:g.systemErrorMuted}),"",""),flexShrink:0,height:s,justifyContent:"center",rounded:!0,width:a,children:o(M,{as:"span",css:b(Je({borderRadius:"100%",backgroundColor:g.foregroundText,"@media (forced-colors: active)":{backgroundColor:"MenuText"}},n&&{backgroundColor:g.borderMuted,"@media (forced-colors: active)":{backgroundColor:"GrayText"}}),"",""),height:"calc(100% - 0.5rem)",highContrastOutline:!0,width:"calc(100% - 0.5rem)"})})}var Jo=["height","width"];function zn(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,t)}return r}function ei(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?zn(Object(r),!0).forEach(function(t){P(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):zn(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var ni=f.forwardRef(function(n,r){var t=n.height,i=n.width,a=W(n,Jo);return o("input",ei({css:b({height:t,margin:0,opacity:0,width:i,"&:focus ~ span:first-of-type":I.outline,"~ span > span":{opacity:0},"&:checked ~ span > span":{opacity:1}},"",""),ref:r},a))}),ri=function(n){var r=n.children,t=n.disabled,i=n.htmlFor;return o(w,{alignItems:"flex-start",as:"label",color:"text",css:b({cursor:t?"not-allowed":"pointer"},"",""),gap:.5,htmlFor:i,inline:!0,children:r})},ti={sm:0,md:"0.2rem"};function oi(e){var n=e.children,r=e.disabled,t=e.size,i=ti[t];return o(C,{color:r?"muted":"text",css:b({paddingTop:i},"",""),flexGrow:1,children:n})}var ii=["children","disabled","invalid","name","required","size"];function Fn(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,t)}return r}function ai(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?Fn(Object(r),!0).forEach(function(t){P(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Fn(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var $n=f.forwardRef(function(n,r){var t=n.children,i=n.disabled,a=n.invalid,s=n.name,c=n.required,d=n.size,l=d===void 0?"md":d,p=W(n,ii),h=si(p.id),v=Mt(),k=I.control[l],y=k.height,O=k.width,x=typeof a=="boolean"?a:v==null?void 0:v.invalid,S=typeof c=="boolean"?c:v==null?void 0:v.required,L=s||(v==null?void 0:v.name);return u(ri,{disabled:i,htmlFor:h,children:[u("span",{css:b({display:"inline-block",height:y,position:"relative",width:O},"",""),children:[o(ni,ai({"aria-describedby":x?v==null?void 0:v.messageId:void 0,"aria-invalid":x||void 0,"aria-required":S,disabled:i,height:y,id:h,name:L,ref:r,type:"radio",width:O},p)),o(Zo,{disabled:i,invalid:x,size:l})]}),o(oi,{disabled:i,size:l,children:t})]})});function si(e){var n=re(e);return e||"radio-".concat(n)}function Wn(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,t)}return r}function _n(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?Wn(Object(r),!0).forEach(function(t){P(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Wn(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var li=function(n){var r=n.disabled,t=n.indeterminate,i=n.invalid,a=n.size,s=I.control[a],c=s.width,d=s.height,l=s.borderWidth;return o(w,{alignItems:"center",as:"span",css:b(_n(_n({backgroundColor:g.backgroundBody,borderColor:g.border,borderStyle:"solid",borderWidth:l,color:g.foregroundText,inset:0,position:"absolute"},r&&{color:g.borderMuted,borderColor:g.borderMuted,backgroundColor:g.backgroundShade,"@media (forced-colors: active)":{borderColor:"GrayText",color:"GrayText"}}),i&&{borderColor:g.systemError,backgroundColor:g.systemErrorMuted}),"",""),flexShrink:0,height:d,justifyContent:"center",rounded:!0,width:c,children:t?o(bo,{size:a,weight:"bold"}):o(vo,{size:a,weight:"bold"})})},ci=["height","width"];function Nn(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,t)}return r}function di(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?Nn(Object(r),!0).forEach(function(t){P(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Nn(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var ui=f.forwardRef(function(n,r){var t=n.height,i=n.width,a=W(n,ci);return o("input",di({css:b({height:t,margin:0,opacity:0,width:i,"&:focus ~ span:first-of-type":I.outline,"~ span > svg":{opacity:0},"&:checked ~ span > svg, &:indeterminate ~ span > svg":{opacity:1}},"",""),ref:r},a))});function pi(e){var n=e.children,r=e.htmlFor,t=e.disabled;return o(w,{alignItems:"flex-start",as:"label",color:"text",css:b({cursor:t?"not-allowed":"pointer"},"",""),gap:.5,htmlFor:r,inline:!0,children:n})}var fi={sm:0,md:"0.2rem"};function hi(e){var n=e.children,r=e.disabled,t=e.size,i=fi[t];return o(C,{color:r?"muted":"text",css:b({paddingTop:i},"",""),flexGrow:1,children:n})}var gi=["checked","children","disabled","indeterminate","invalid","name","required","size"];function qn(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,t)}return r}function mi(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?qn(Object(r),!0).forEach(function(t){P(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):qn(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var en=f.forwardRef(function(n,r){var t=n.checked,i=n.children,a=n.disabled,s=n.indeterminate,c=n.invalid,d=n.name,l=n.required,p=n.size,h=p===void 0?"md":p,v=W(n,gi),k=bi(v.id),y=f.useRef(null),O=Mt(),x=I.control[h],S=x.height,L=x.width,A=typeof c=="boolean"?c:O==null?void 0:O.invalid,E=typeof l=="boolean"?l:O==null?void 0:O.required,N=d||(O==null?void 0:O.name);f.useEffect(function(){y.current&&(y.current.indeterminate=!!s)},[s]);var q=s?!1:t;return u(pi,{disabled:a,htmlFor:k,children:[u("span",{css:b({display:"inline-block",height:S,position:"relative",width:L},"",""),children:[o(ui,mi({"aria-checked":s?"mixed":void 0,"aria-describedby":A?O==null?void 0:O.messageId:void 0,"aria-invalid":A||void 0,"aria-required":E,checked:q,disabled:a,height:S,id:k,name:N,ref:io([r,y]),type:"checkbox",width:L},v)),o(li,{disabled:a,indeterminate:s,invalid:A,size:h})]}),o(hi,{disabled:a,size:h,children:i})]})});function bi(e){var n=re(e);return e||"checkbox-".concat(n)}var vi=["label","hideOptionalLabel","required","hint","message","invalid","block","maxWidth","options","placeholder","id"];function Gn(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,t)}return r}function X(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?Gn(Object(r),!0).forEach(function(t){P(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Gn(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var yi=f.forwardRef(function(n,r){var t=n.label,i=n.hideOptionalLabel,a=n.required,s=n.hint,c=n.message,d=n.invalid,l=n.block,p=n.maxWidth,h=p===void 0?"md":p,v=n.options,k=n.placeholder,y=n.id,O=W(n,vi),x=ki({block:l});return o(Ko,{hideOptionalLabel:i,hint:s,id:y,invalid:d,label:t,maxWidth:h,message:c,required:a,children:function(L){return u(Oi,{block:l,maxWidth:h,children:[o("select",X(X(X({css:x,ref:r},L),O),{},{children:o(Pi,{options:v,placeholder:k})})),o(wi,{disabled:O.disabled})]})}})}),Oi=function(n){var r=n.children,t=n.block,i=n.maxWidth;return o("div",{css:b(X({position:"relative"},!t&&{maxWidth:m.maxWidth.field[i]}),"",""),children:r})},Pi=function(n){var r=n.options,t=n.placeholder;return u(f.Fragment,{children:[t?o("option",{value:"",children:t}):null,r.map(function(i){return"options"in i?o("optgroup",{disabled:i.disabled,label:i.label,children:i.options.map(function(a){var s=a.value,c=a.label,d=a.disabled;return o("option",{disabled:d,value:s,children:c},s)})},i.label):o("option",{disabled:i.disabled,value:i.value,children:i.label},i.value)})]})},wi=function(n){var r=n.disabled;return o(kn,{css:b({position:"absolute",top:"50%",right:D(.75),transform:"translateY(-50%)",opacity:r?.3:void 0,pointerEvents:"none",color:g.foregroundAction},"","")})},ki=function(n){var r=n.block;return X(X(X(X({position:"relative",appearance:"none",boxSizing:"border-box",paddingLeft:D(1),paddingRight:"calc(".concat(m.borderWidth.lg,"px + 2.5rem)"),margin:0,background:g.backgroundBody,borderWidth:m.borderWidth.lg,borderStyle:"solid",borderColor:g.border,borderRadius:m.borderRadius,color:g.foregroundText,width:"100%",fontFamily:m.font.body},I.input.md),{},{lineHeight:m.lineHeight.default},I.truncate),r&&{maxWidth:"none",display:"block"}),{},{'&[aria-invalid="true"]':{backgroundColor:g.systemErrorMuted,borderColor:g.systemError},"&:disabled":{opacity:1,cursor:"not-allowed",borderColor:g.borderMuted,backgroundColor:g.backgroundShade,color:g.foregroundMuted},"&:focus":I.outline})};function Lt(){var e=f.useState(!1),n=e[0],r=e[1];return f.useEffect(function(){r(!0)},[]),n}function Dt(e,n){var r=e||n;if(!r)throw new Error("onClose prop is required");return r}function xi(e,n){return e||n}function Ci(){var e=re();return{titleId:"drawer-".concat(e,"-title")}}function Si(e){var n=e.actions,r=e.children,t=e.elementToFocusOnClose,i=e.onClose,a=e.title,s=Ci(),c=s.titleId;return o(wn,{returnFocus:t?function(){return window.setTimeout(function(){return t.focus()},0),!1}:!0,children:u(w,{"aria-labelledby":c,"aria-modal":!0,background:"body",css:b(P({boxShadow:m.shadow.lg,inset:0,position:"fixed"},m.mediaQuery.max.xs,{overflowY:"auto"}),"",""),flexDirection:"column",highContrastOutline:!0,role:"dialog",children:[o(Ii,{children:o(Li,{id:c,children:a})}),o(Di,{children:r}),n?o(ji,{children:n}):null,o(K,{css:ae({position:"fixed",zIndex:m.zIndex.elevated,top:"1.25rem",right:ut({xs:D(.75),md:D(1.5)})}),iconAfter:Ke,onClick:i,variant:"text",children:"Close"})]})})}function Ii(e){var n=e.children;return o(M,{background:"body",borderBottom:!0,css:b(P({position:"sticky",top:0,zIndex:m.zIndex.elevated},m.mediaQuery.min.sm,{position:"relative"}),"",""),paddingX:{xs:.75,md:1.5},paddingY:1,children:n})}var Mi={name:"1r5gb7q",styles:"display:inline-block"};function Li(e){var n=e.children,r=e.id;return o(C,{as:"h2",css:Mi,"data-autofocus":!0,focusRingFor:"keyboard",fontSize:"lg",fontWeight:"bold",id:r,lineHeight:"heading",tabIndex:-1,children:n})}function Di(e){var n=e.children;return o(M,{background:"body",css:b(P({},m.mediaQuery.min.sm,{overflowY:"auto"}),"",""),flexGrow:1,paddingX:{xs:.75,md:1.5},paddingY:{xs:1,md:1.5},children:n})}var Ai={name:"xdvdnl",styles:"margin-top:auto"};function ji(e){var n=e.children;return o(M,{background:"body",borderTop:!0,css:Ai,paddingX:{xs:.75,md:1.5},paddingY:1,children:n})}var Bi={md:"32rem",lg:"45rem"},Ei=function(n){var r=n.actions,t=n.children,i=n.elementToFocusOnClose,a=n.isOpen,s=a===void 0?!1:a,c=n.mutedOverlay,d=c===void 0?!1:c,l=n.onClose,p=n.onDismiss,h=n.title,v=n.width,k=v===void 0?"md":v,y=Dt(l,p),O=f.useRef(0),x=wt(),S=f.useState(!0),L=S[0],A=S[1],E=Lt();f.useEffect(function(){O.current=window.innerWidth-document.documentElement.clientWidth},[]),f.useEffect(function(){s&&A(!1)},[s]),f.useEffect(function(){var H=function(le){s&&le.code==="Escape"&&(le.preventDefault(),le.stopPropagation(),y())};return window.addEventListener("keydown",H),function(){return window.removeEventListener("keydown",H)}},[s,y]);var N=On(E?s:!1),q=N.modalContainerRef;if(!E||!Pn())return null;var G=s?!0:!L;return xn.createPortal(u(f.Fragment,{children:[s?o(Ti,{scrollbarWidth:O.current}):null,u("div",{ref:q,children:[o("div",{css:b({pointerEvents:"none",position:"absolute",opacity:s?1:0,transition:s?"none":"opacity ".concat(x?"1ms":"150ms")},"",""),"data-drawer":"transitioner",onTransitionEnd:function(){A(!0)}}),o(Ri,{isOpen:s,mutedOverlay:d,onClick:y,prefersReducedMotion:x}),o(M,{css:b({inset:0,marginLeft:"auto",position:"fixed",transform:"translateX(".concat(s?"0":"100%",")"),transition:"transform ".concat(x?"1ms":"150ms"," ease"),zIndex:m.zIndex.dialog},"",""),maxWidth:Bi[k],children:G&&o(Si,{actions:r,elementToFocusOnClose:i,onClose:y,title:h,children:t})})]})]}),document.body)};function Ri(e){var n=e.isOpen,r=e.mutedOverlay,t=e.onClick,i=e.prefersReducedMotion;return o("div",{css:b({pointerEvents:n?"all":"none",position:"fixed",inset:0,backgroundColor:r?g.overlayMuted:g.overlay,opacity:n?1:0,transition:"opacity ".concat(i?"1ms":"150ms"," ease"),zIndex:m.zIndex.overlay},"",""),onClick:t})}function Ti(e){var n=e.scrollbarWidth;return o(bn,{styles:b({html:{marginRight:n,scrollbarGutter:"auto"},body:{overflow:"hidden"}},"","")})}var Hn,zi=f.forwardRef(function(n,r){var t=n.children;return o("div",{css:b({position:"fixed",top:0,left:0,bottom:0,right:0,backgroundColor:g.overlay,zIndex:m.zIndex.overlay,overflowY:"auto",animation:"".concat(Fi," ").concat(m.transition.duration,"ms ").concat(m.transition.timingFunction)},"",""),ref:r,children:t})}),Fi=pt(Hn||(Hn=gt([`
  0% { opacity: 0; }
  100% { opacity: 1; }
`]))),$i=function(n){var r=n.children,t=n.id;return o(C,{as:"h2","data-autofocus":!0,focusRingFor:"keyboard",fontSize:"lg",fontWeight:"bold",id:t,lineHeight:"heading",tabIndex:-1,children:r})},Wi=function(){var n=re();return{titleId:"modal-".concat(n,"-title")}},Un,_i="45rem",Ni={name:"1duj7gx",styles:"align-self:flex-end"},qi={name:"xdvdnl",styles:"margin-top:auto"},Gi=function(n){var r=n.actions,t=n.children,i=n.onClose,a=n.title,s=Wi(),c=s.titleId;return o(wn,{returnFocus:!0,children:u(j,{"aria-labelledby":c,"aria-modal":!0,background:"body",css:b(P({boxShadow:m.shadow.lg,position:"relative",margin:"0 auto",minHeight:"100vh",animation:"".concat(Hi," ").concat(m.transition.duration,"ms ").concat(m.transition.timingFunction),"@supports (min-height: 100dvh)":{minHeight:"100dvh"}},m.mediaQuery.min.sm,{borderRadius:m.borderRadius,margin:"".concat(D(6)," auto ").concat(D(1)),minHeight:"auto"}),"",""),gap:1,highContrastOutline:!0,maxWidth:_i,paddingX:{xs:.75,md:1.5},paddingY:{xs:1,md:1.5},role:"dialog",children:[o(K,{"aria-label":"Close modal",css:Ni,iconAfter:Ke,onClick:i,variant:"text",children:"Close"}),o($i,{id:c,children:a}),o(M,{children:t}),r?o(M,{css:qi,paddingTop:1,children:r}):null]})})},Hi=pt(Un||(Un=gt([`
  0% { transform: translateY(1rem); }
	100% { transform: translateY(0); }
`]))),At=function(n){var r=n.actions,t=n.children,i=n.isOpen,a=i===void 0?!1:i,s=n.onClose,c=n.onDismiss,d=n.title,l=Dt(s,c);f.useEffect(function(){var v=function(y){a&&y.code==="Escape"&&(y.preventDefault(),y.stopPropagation(),l())};return window.addEventListener("keydown",v),function(){return window.removeEventListener("keydown",v)}},[l,a]);var p=On(a),h=p.modalContainerRef;return!a||!Pn()?null:xn.createPortal(u(f.Fragment,{children:[o(Ki,{}),o(zi,{ref:h,children:o(Gi,{actions:r,onClose:l,title:d,children:t})})]}),document.body)},Ui={name:"1sy9iaq",styles:"body{overflow:hidden;}"},Ki=function(){return o(bn,{styles:Ui})};function Yi(e){var n,r,t=Array.from(e.matchAll(new RegExp(/(\p{L})\p{L}+/,"gu")));if(!t.length)return"?";var i=((n=t.shift())===null||n===void 0?void 0:n[1])||"",a=((r=t.pop())===null||r===void 0?void 0:r[1])||"";return(i+a).toUpperCase()}function jt(e){var n=e.name,r=e.tone,t=r===void 0?"neutral":r,i=e.size,a=i===void 0?"md":i,s=e["aria-hidden"],c=e["aria-label"],d=Yi(n),l=Qi[t],p=Xi[a],h=p.size,v=p.fontSize;return o(w,{alignItems:"center","aria-hidden":s,"aria-label":c,as:"span",css:b({textDecoration:"none",height:"".concat(h,"rem"),width:"".concat(h,"rem"),borderRadius:"50%",borderStyle:"solid",borderWidth:m.borderWidth.sm,borderColor:l,color:l},"",""),flexShrink:0,fontSize:v,fontWeight:"bold",justifyContent:"center",children:d})}var Qi={neutral:g.foregroundMuted,action:g.foregroundAction},Xi={sm:{fontSize:"xs",size:2},md:{fontSize:"sm",size:2.5},lg:{fontSize:"md",size:3},xl:{fontSize:"lg",size:4},xxl:{fontSize:"xl",size:4.5},xxxl:{fontSize:"xl",size:5}},Bt=f.createContext(void 0);function me(){var e=f.useContext(Bt);if(e===void 0)throw new Error("`AppLayoutContext` not found.");return e}function Vi(e,n){var r=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=Zi(e))||n&&e&&typeof e.length=="number"){r&&(e=r);var t=0,i=function(){};return{s:i,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(l){throw l},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a,s=!0,c=!1;return{s:function(){r=r.call(e)},n:function(){var l=r.next();return s=l.done,l},e:function(l){c=!0,a=l},f:function(){try{s||r.return==null||r.return()}finally{if(c)throw a}}}}function Zi(e,n){if(e){if(typeof e=="string")return Kn(e,n);var r={}.toString.call(e).slice(8,-1);return r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set"?Array.from(e):r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Kn(e,n):void 0}}function Kn(e,n){(n==null||n>e.length)&&(n=e.length);for(var r=0,t=Array(n);r<n;r++)t[r]=e[r];return t}var Y="xl",Sn="16rem",Ji=function(n,r){if(!r)return"";var t=n.flatMap(function(l){return Array.isArray(l)?l:[l].concat(jn(l.items))}).flatMap(function(l){return"items"in l&&l.items!==void 0?[l].concat(jn(l.items)):l}).map(function(l){return l&&"href"in l&&l.href!==void 0?l.href:""}),i,a="",s=Vi(t),c;try{for(s.s();!(c=s.n()).done;){var d=c.value;if(d===r){i=d;break}r!=null&&r.startsWith(d)&&d.length>a.length&&(a=d)}}catch(l){s.e(l)}finally{s.f()}return i||a};function ea(e){var n=e.children,r=e.focusMode,t=r===void 0?!1:r,i=sn(!1),a=no(i,3),s=a[0],c=a[1],d=a[2];return o(Bt.Provider,{value:{focusMode:t,isMobileMenuOpen:s,openMobileMenu:c,closeMobileMenu:d},children:o(na,{focusMode:t,children:n})})}function na(e){var n=e.children,r=e.focusMode;return o("div",{css:ae({display:"grid",minHeight:"100vh",gridTemplateRows:"auto 1fr",gridTemplateColumns:ut(P({xs:"1fr"},Y,r?"1fr":"".concat(Sn," 1fr")))}),children:n})}function Yn(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,t)}return r}function de(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?Yn(Object(r),!0).forEach(function(t){P(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Yn(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var ce=1.5,cn="3.75rem",ra={name:"1kn4ch8",styles:"margin-left:-0.5rem;margin-right:-0.5rem;overflow:hidden"};function ta(e){var n=e.badgeLabel,r=e.dividerPosition,t=e.logo,i=e.heading,a=e.hasAccountDetails,s=e.href,c=e.secondHref,d=e.secondLogo,l=e.subLine,p=Cn();return t&&d?u(w,{css:ra,flexDirection:{xs:"column",lg:"row"},flexWrap:{xs:"wrap",xl:"nowrap"},gap:{xs:1,md:ce},inline:!0,padding:.5,children:[u(w,{css:b({marginRight:a&&r==="after"?D(ce):0},"",""),flexDirection:{xs:"column",sm:"row"},flexShrink:0,gap:ce,children:[o(w,{alignSelf:{xs:"start",sm:"center"},as:p,color:"text",css:b(de({" img, svg":{height:cn}},I.print.hidden),"",""),focusRingFor:"keyboard",href:s,children:t}),r==="between"&&o(nn,{dividerPosition:r}),o(w,de(de({alignSelf:{xs:"start",sm:"center"},as:c?p:"span",color:"text",css:b(de({" img, svg":{width:"100%"}},I.print.hidden),"",""),focusRingFor:"keyboard"},c&&{href:c}),{},{children:d}))]}),u(w,{css:r==="after"?P({},m.mediaQuery.min.lg,{marginLeft:"calc(-".concat(a?D(ce):0," - ").concat(m.borderWidth.sm,"px)")}):void 0,gap:ce,children:[r==="after"&&o(nn,{dividerPosition:r}),u(j,{as:p,color:"text",css:b({textDecoration:"none",":hover":I.underline},"",""),focusRingFor:"keyboard",href:s,justifyContent:"center",children:[u(w,{alignItems:"flex-start",gap:.5,children:[o(C,{fontSize:"lg",fontWeight:"bold",children:i}),n&&o(Qn,{children:n})]}),l&&o(C,{color:"muted",fontSize:"xs",children:l})]})]})]}):u(w,{alignItems:{xs:"flex-start",md:"center"},as:p,color:"text",css:b({textDecoration:"none","&:hover":I.underline,svg:{display:"block",height:cn,flexShrink:0}},"",""),flexDirection:{xs:"column",md:"row"},focusRingFor:"keyboard",gap:{xs:1,md:0},href:s,paddingY:.5,children:[t,o(nn,{singleLogo:!0}),u(w,{alignItems:"flex-start",flexDirection:"column",justifyContent:"center",maxWidth:m.maxWidth.bodyText,children:[u(w,{alignItems:"flex-start",gap:.5,children:[o(C,{fontSize:"lg",fontWeight:"bold",children:i}),n&&o(Qn,{children:n})]}),l&&o(C,{color:"muted",fontSize:"xs",children:l})]})]})}function Qn(e){var n=e.children;return o(M,{border:!0,borderWidth:"md",css:b({fontSize:"0.75rem",paddingTop:"2px",paddingBottom:"2px",borderColor:g.foregroundText,borderRadius:"2em"},"",""),fontWeight:"bold",paddingLeft:.5,paddingRight:.5,children:n})}var nn=function(n){var r=n.dividerPosition,t=n.singleLogo;return o(M,{borderLeft:!0,css:b(de({margin:t?"0 1rem":void 0},I.print.hidden),"",""),display:t?{xs:"none",md:"block"}:{xs:"none",sm:r==="between"?"block":void 0,lg:"block"},height:t?cn:void 0})},oa=["ref"];function Xn(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,t)}return r}function Vn(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?Xn(Object(r),!0).forEach(function(t){P(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Xn(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function ia(e){var n=e.children,r=e.name,t=e.secondaryText;return u(uo,{popoverOffset:-8,popoverPlacement:"bottom-end",children:[o(ca,{name:r,secondaryText:t}),n]})}var aa={name:"d3v9zr",styles:"overflow:hidden"},sa={name:"d3v9zr",styles:"overflow:hidden"},la={name:"ozd7xs",styles:"flex-shrink:0"};function ca(e){var n=e.name,r=e.secondaryText,t=po(),i=t.isMenuOpen,a=fo(),s=a.ref,c=W(a,oa),d=f.useRef(0),l=Ue("sm");return f.useEffect(function(){d.current=window.innerWidth-document.documentElement.offsetWidth},[]),u(w,Vn(Vn({as:He,ref:s},c),{},{alignItems:"center",background:i?"shade":void 0,color:"action",css:ae({marginLeft:"auto",maxWidth:"calc(17.625rem - ".concat(d.current,"px)"),overflow:"hidden",svg:{transform:i?"rotate(180deg)":void 0,transition:l.transition},":hover":{backgroundColor:g.backgroundShade,"& > span:last-of-type > span:last-of-type":I.underline,svg:{transform:i?"rotate(180deg) ".concat(l.transform):l.transform}}}),focusRingFor:"keyboard",gap:1,justifyContent:"space-between",minHeight:"5.25rem",padding:1,children:[o(yn,{children:"Account menu"}),u(w,{alignItems:"center","aria-hidden":!0,as:"span",css:aa,gap:.5,width:"100%",children:[o(jt,{name:n,size:"md",tone:"action"}),u(w,{as:"span",css:sa,flexDirection:"column",width:"100%",children:[o(C,{color:"action",css:I.truncate,fontSize:"xs",fontWeight:"bold",children:n}),r?o(C,{color:"muted",css:I.truncate,fontSize:"xs",children:r}):null]})]}),o(kn,{css:la,size:"sm",weight:"bold"})]}))}function Zn(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,t)}return r}function rn(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?Zn(Object(r),!0).forEach(function(t){P(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Zn(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var da={name:"d3v9zr",styles:"overflow:hidden"};function Et(e){var n=e.name,r=e.secondaryText,t=e.href,i=e.dropdown,a=Cn(),s=f.useRef(0);if(f.useEffect(function(){s.current=window.innerWidth-document.documentElement.offsetWidth},[]),i)return o(ia,{name:n,secondaryText:r,children:i});var c=!!t;return u(w,rn(rn({as:"span"},c&&{as:a,href:t,focusRingFor:"keyboard"}),{},{alignItems:"center",css:ae(rn({marginLeft:"auto",maxWidth:"calc(17.625rem - ".concat(s.current,"px)"),textDecoration:"none"},c&&{"&:hover":{"& > span > span":{textDecoration:"underline"}}})),flexShrink:0,gap:.5,minHeight:"5.25rem",textAlign:"right",children:[u(w,{as:"span",css:da,flexDirection:"column",children:[o(C,{color:"action",css:I.truncate,fontSize:"xs",fontWeight:"bold",children:n}),r?o(C,{color:"muted",css:I.truncate,fontSize:"xs",children:r}):null]}),o(jt,{"aria-hidden":!0,name:n,size:"md",tone:"action"})]}))}function Jn(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,t)}return r}function ua(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?Jn(Object(r),!0).forEach(function(t){P(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Jn(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function pa(e){var n=e.accountDetails,r=me(),t=r.focusMode,i=r.openMobileMenu;return u(w,{alignItems:"center",background:"body",display:P({xs:"flex"},Y,"none"),flexWrap:"wrap",justifyContent:t?"flex-end":"space-between",paddingLeft:.75,paddingRight:n!=null&&n.dropdown?.75:m.containerPadding,children:[t?null:o(fa,{onClick:i}),n?o(Et,ua({},n)):null]})}function fa(e){var n=e.onClick,r=me(),t=r.isMobileMenuOpen,i=Ue();return u(w,{alignItems:"center","aria-expanded":t,"aria-haspopup":"dialog",as:He,color:"action",css:b({svg:{transition:i.transition},"&:hover":{backgroundColor:g.backgroundShade,textDecoration:"underline",svg:{transform:i.transform}}},"",""),flexDirection:"column",focusRingFor:"keyboard",fontSize:"xs",gap:.5,justifyContent:"center",minHeight:"5.25rem",onClick:n,paddingX:1,children:[o(yo,{"aria-hidden":!0}),o("span",{children:"Menu"})]})}function er(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,t)}return r}function ha(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?er(Object(r),!0).forEach(function(t){P(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):er(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function ga(e){var n=e.accountDetails,r=e.background,t=r===void 0?"bodyAlt":r,i=e.badgeLabel,a=e.borderColor,s=a===void 0?"accent":a,c=e.dividerPosition,d=c===void 0?"after":c,l=e.heading,p=e.href,h=e.id,v=e.logo,k=e.palette,y=k===void 0?"dark":k,O=e.secondHref,x=e.secondLogo,S=e.subLine;return u(w,{as:"header",borderBottom:!0,borderBottomWidth:"xxl",borderColor:s,css:b(P({},m.mediaQuery.min[Y],{gridColumnStart:1,gridColumnEnd:3}),"",""),flexDirection:"column",id:h,palette:y,children:[u(w,{alignItems:"center",background:t,gap:1,justifyContent:"space-between",paddingX:m.containerPadding,paddingY:.5,width:"100%",children:[o(ta,{badgeLabel:i,dividerPosition:d,hasAccountDetails:!!n,heading:l,href:p,logo:v,secondHref:O,secondLogo:x,subLine:S}),o(M,{display:P({xs:"none"},Y,"flex"),children:n?o(Et,ha({},n)):null})]}),o(pa,{accountDetails:n})]})}var ma=["endElement","icon","isActive","items","label","level"];function nr(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,t)}return r}function R(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?nr(Object(r),!0).forEach(function(t){P(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):nr(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var ba=function e(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return function(t){var i,a,s="href"in t&&t.href===n,c=s||In(t.items,n);return R(R({},t),{},{isActive:c,items:c||(i=t.items)!==null&&i!==void 0&&i.length?t==null||(a=t.items)===null||a===void 0?void 0:a.map(e(n,r+1)):void 0,level:r+1})}},rr=function(n){var r=n.activePath,t=n.background,i=n.items,a=n.subLevelVisible;return o(j,{"aria-label":"main",as:"nav",paddingBottom:1.5,children:o(j,{as:"ul",children:i.map(function(s,c){var d,l,p=c===0,h=(Array.isArray(s)?s:s.items).map(ba(r)),v=Array.isArray(s)?!1:!!(!((d=s.options)===null||d===void 0)&&d.disableGroupPadding),k=i[c-1],y=k?Array.isArray(k)?!1:!!(!((l=k.options)===null||l===void 0)&&l.disableGroupPadding):!1;return u(f.Fragment,{children:[p?null:o(ya,{disablePaddingBottom:v,disablePaddingTop:y}),h.map(function(O,x){var S=In(O.items,r),L=a==="always"||S;return o(Rt,{activePath:r,background:t,isActiveGroup:S,isOpen:L,item:O,subLevelVisible:a},x)})]},c)})})})},va={name:"1ff36h2",styles:"flex-grow:1"};function Rt(e){var n=e.activePath,r=e.background,t=e.isActiveGroup,i=e.isOpen,a=e.item,s=e.subLevelVisible,c=Cn(),d=a.endElement,l=a.icon,p=a.isActive,h=a.items,v=a.label,k=a.level,y=W(a,ma),O=me(),x=O.closeMobileMenu,S=(h==null?void 0:h.length)||0,L=S>0&&s!=="always";if("href"in a){var A,E,N,q=a.href===n;return u(tn,{background:r,hasEndElement:!!d,isActive:t,isCurrentPage:q,isOpen:i,level:a.level,onClick:x,children:[u(c,R(R({"aria-current":q?"page":void 0},y),{},{children:[l&&k===1&&o(l,{color:"inherit"}),k===2&&o("span",{"aria-hidden":!0,children:"–"}),o("span",{css:va,children:v}),d,L&&(p?o(kn,{"aria-hidden":!1,"aria-label":". Sub-level ".concat(S===1?"link":"links"," below."),size:"md"}):o(Oo,{"aria-hidden":!1,"aria-label":". Has ".concat(S," sub-level ").concat(S===1?"link":"links","."),size:"md"}))]})),!!(!((A=a.items)===null||A===void 0)&&A.length)&&(i||q)&&o(j,{as:"ul",children:(E=a.items)===null||E===void 0||(N=E.map)===null||N===void 0?void 0:N.call(E,function(G){var H;return o(Rt,{activePath:n,background:r,isActiveGroup:!!p,isOpen:i,item:G,subLevelVisible:s},(H=G.label)===null||H===void 0?void 0:H.toString())})})]})}return"onClick"in a?o(tn,{background:r,hasEndElement:!!d,isActive:!1,isCurrentPage:!1,isOpen:!1,onClick:x,children:u(He,R(R({},y),{},{children:[l?o(l,{color:"inherit"}):null,o("span",{children:v}),d]}))}):o(tn,{background:r,hasEndElement:!1,isActive:!1,isCurrentPage:!1,isOpen:!1,children:o(j,{as:"span",gap:.25,children:v})})}function tn(e){var n=e.background,r=e.children,t=e.hasEndElement,i=e.isCurrentPage,a=e.isActive,s=e.isOpen,c=e.level,d=e.onClick;return o("li",{css:b({"> a, > button, > span":{width:"100%",boxSizing:"border-box",wordBreak:"break-word",paddingTop:D(1),paddingBottom:D(1),paddingLeft:D(c===2?3:1.5),paddingRight:D(1),"& > svg":{flexShrink:0}},"> a, > button":R(R(R(R({position:"relative",display:"flex",alignItems:"center",gap:D(.75),color:a&&c!==2||i?g.foregroundText:g.foregroundAction},(a||i||s)&&{fontWeight:i?m.fontWeight.bold:m.fontWeight.normal,background:i?g.selectedMuted:void 0,"&::before":R(R(R({content:"''",position:"absolute",top:0,left:0,bottom:0,borderLeftStyle:"solid",borderLeftWidth:m.borderWidth.xl},i&&{borderLeftColor:g.selected}),!i&&a&&{borderLeftColor:g.borderMuted}),!i&&!a&&s&&{borderLeft:"none"})}),t&&{"& > :last-child":{marginLeft:"auto"}}),{},{"&:hover":P({background:g[n==="body"?"backgroundShade":"backgroundShadeAlt"],color:g.foregroundText},"& > span:nth-of-type(".concat(c,")"),I.underline)},ro),{},{":focus-visible":{zIndex:m.zIndex.elevated,outlineOffset:"-".concat(I.outline.outlineWidth),"&::before":{zIndex:-1}}}),"> span":{color:g.foregroundText},"> a":{textDecoration:"none"}},"",""),onClick:d,children:r})}function ya(e){var n=e.disablePaddingTop,r=e.disablePaddingBottom;return o(M,{"aria-hidden":!0,as:"li",paddingBottom:r?0:1,paddingTop:n?0:1,children:o("hr",{css:b({boxSizing:"content-box",height:0,margin:0,overflow:"visible",border:"none",borderTopWidth:m.borderWidth.sm,borderTopStyle:"solid",borderColor:g.borderMuted,width:"100%"},"","")})})}function In(e,n){return e!=null&&e.length&&n?e.some(function(r){return"href"in r&&r.href===n||"items"in r&&In(r.items,n)}):!1}var Oa={name:"qvn77x",styles:"inset:0;overflow-y:auto;position:fixed"};function Pa(e){var n=e.children,r=e.palette,t=me(),i=t.isMobileMenuOpen,a=t.closeMobileMenu,s=wt(),c=f.useState(!0),d=c[0],l=c[1],p=Lt();f.useEffect(function(){i&&l(!1)},[i]),f.useEffect(function(){var y=function(x){x.code==="Escape"&&(x.preventDefault(),x.stopPropagation(),a())};return window.addEventListener("keydown",y),function(){return window.removeEventListener("keydown",y)}},[a]);var h=On(p?i:!1),v=h.modalContainerRef;if(!p||!Pn())return null;var k=i?!0:!d;return xn.createPortal(u(ft,{children:[i&&o(wa,{}),u("div",{ref:v,children:[o("div",{css:b({pointerEvents:"none",position:"absolute",opacity:i?1:0,transition:i?"none":"opacity ".concat(s?"1ms":"150ms")},"",""),"data-app-layout-sidebar":"transitioner",onTransitionEnd:function(){l(!0)}}),o(ka,{isOpen:i,onClick:a,prefersReducedMotion:s}),o(M,{css:b({bottom:0,left:0,position:"fixed",top:0,transform:"translateX(".concat(i?"0":"-100%",")"),transition:"transform ".concat(s?"1ms":"150ms"," ease"),zIndex:m.zIndex.dialog},"",""),display:P({},Y,"none"),width:Sn,children:k&&o(wn,{returnFocus:!0,children:u(M,{"aria-label":"Menu","aria-modal":!0,background:"shade",css:Oa,display:P({},Y,"none"),palette:r,role:"dialog",children:[o(xa,{onClick:a}),n]})})})]})]}),document.body)}function wa(){return o(bn,{styles:b(P({body:{overflow:"hidden"}},m.mediaQuery.min[Y],{body:{overflow:"unset"}}),"","")})}function ka(e){var n=e.isOpen,r=e.onClick,t=e.prefersReducedMotion;return o("div",{css:b(P({backgroundColor:g.overlay,display:"block",inset:0,opacity:n?1:0,pointerEvents:n?"all":"none",position:"fixed",transition:"opacity ".concat(t?"1ms":"150ms"," ease"),zIndex:m.zIndex.overlay},m.mediaQuery.min[Y],{display:"none"}),"",""),onClick:r})}function xa(e){var n=e.onClick,r=Ue();return o(w,{alignItems:"center",borderBottom:!0,borderColor:"muted",flexShrink:0,paddingLeft:1,children:u(w,{alignItems:"center",as:He,color:"action",css:b({svg:{transition:r.transition},":focus":{outlineOffset:"-".concat(I.outline.outlineWidth)},":hover svg":{transform:r.transform}},"",""),flexDirection:"column",focusRingFor:"keyboard",fontSize:"xs",gap:.5,onClick:n,padding:1,children:[o(Ke,{}),o("span",{"aria-hidden":!0,children:"Close"}),o(yn,{children:"Close menu"})]})})}function tr(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,t)}return r}function ve(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?tr(Object(r),!0).forEach(function(t){P(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):tr(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function or(e){var n=e.activePath,r=e.background,t=r===void 0?"bodyAlt":r,i=e.items,a=e.palette,s=e.subLevelVisible,c=s===void 0?"whenActive":s,d=me(),l=d.focusMode,p=Ji(i,n),h={activePath:p,items:i,subLevelVisible:c};return u(f.Fragment,{children:[o(j,{background:t,borderColor:"muted",borderRight:!0,css:b(P({display:"none",width:Sn},m.mediaQuery.min[Y],{display:l?"none":"flex"}),"",""),flexGrow:1,gap:1,palette:a,children:o(rr,ve(ve({},h),{},{background:t}))}),o(Pa,{palette:a,children:o(rr,ve(ve({},h),{},{background:"bodyAlt"}))})]})}var Ca={name:"ovk77c",styles:"min-width:0"};function Sa(e){var n=e.children;return o(w,{css:Ca,flexDirection:"column",children:n})}var Ia={name:"xdvdnl",styles:"margin-top:auto"};function Ma(e){var n=e.background,r=n===void 0?"body":n,t=e.children,i=e.id,a=e.maxWidth,s=e.palette;return o(M,{as:"footer",background:r,css:Ia,id:i,palette:s,children:o(ao,{maxWidth:a,children:o(j,{borderColor:"muted",borderTop:!0,borderTopWidth:"xl",gap:1.5,paddingY:3,width:"100%",children:t})})})}function La(){return o("hr",{"aria-hidden":!0,css:b({boxSizing:"content-box",height:0,margin:0,overflow:"visible",border:"none",borderTopWidth:1,borderTopStyle:"solid",borderColor:g.borderMuted,width:"100%"},"","")})}const Q={account:"/account",profile:"/account/profile",dashboard:"/account/dashboard",people:"/account/manage-people",inbox:"/account/messages",linkBusiness:"/account/link-a-business",acceptInvite:"/account/invitation/accept"},Da=lo(u(f.Fragment,{children:[o("line",{x1:"12",y1:"1",x2:"12",y2:"23"}),o("path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"})]}),"PaymentIcon"),Aa=[{href:"/about",label:"About"},{href:"/about/contact-us",label:"Contact us"},{href:"/help",label:"Help"},{href:"https://www.agriculture.gov.au/about/commitment/accessibility",rel:"external",label:"Accessibility"},{href:"https://www.agriculture.gov.au/about/disclaimer",rel:"external",label:"Disclaimer"},{href:"/privacy",label:"Privacy"}],U={dashboard:{label:"Dashboard",icon:ko,href:Q.dashboard},people:{label:"People",icon:xo,href:Q.people},establishments:{label:"Establishments",icon:yt,href:"/establishments"},intelligence:{label:"Data and Insights",icon:Co,href:"/intelligence"},compliance:{label:"Compliance",icon:So,href:"/compliance"},quotas:{label:"Quotas",icon:Ot,href:"/quota"},exportSystems:{label:"Export systems",icon:Io,href:"/export-systems"},licences:{label:"Licences",icon:Mo,href:"/licences"},invoices:{label:"Invoices and payments",icon:Da,href:"/inexs"}},Tt=e=>{var n,r,t,i,a;return[U.dashboard,U.people,U.establishments,U.intelligence,U.compliance,...(n=e==null?void 0:e.features)!=null&&n.quotas?[U.quotas]:[],...((r=e==null?void 0:e.features)==null?void 0:r.exportSystems)??((t=e==null?void 0:e.features)==null?void 0:t.exportDocumentation)?[U.exportSystems]:[],...(i=e==null?void 0:e.features)!=null&&i.licences?[U.licences]:[],...(a=e==null?void 0:e.features)!=null&&a.invoices?[U.invoices]:[]]};function ja({onSignOutClick:e,features:n}){return[Tt({features:n}),[{label:u(w,{as:"span",alignItems:"center",gap:.5,children:["Help",o(co,{}),o(Po,{weight:"regular",size:"sm"})]}),icon:wo,href:"/help",target:"_blank",rel:"noopener"}],[{label:"Sign out",onClick:e,icon:vt}]]}const Ba=(e,n)=>{var i;if(!n)return;let r,t;for(const a of e){if(a.href===n){r=a;break}n.startsWith(a.href)&&a.href.length>(((i=t==null?void 0:t.href)==null?void 0:i.length)??0)&&(t=a)}return r||t},Ea=e=>n=>n===!0||n==e,zt=(e,n)=>r=>Ea(e)(r)?n:{},Ra=zt("header",{palette:"light",borderColor:"selected"}),ir=zt("sidebar",{background:"body"});var Ta={neutral:g.foregroundMuted,action:g.foregroundAction};function ar(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,t)}return r}function za(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?ar(Object(r),!0).forEach(function(t){P(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ar(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var Fa=function(n){var r=n.value,t=n.max,i=n.tone,a=n["aria-hidden"],s=Ta[i];return o(C,{alignItems:"center","aria-hidden":a,css:b(za({color:g.backgroundBody,backgroundColor:s,minWidth:D(1.5),borderRadius:D(.75)},ht.exactColor),"",""),display:"inline-flex",fontSize:"sm",height:D(1.5),highContrastOutline:!0,justifyContent:"center",lineHeight:"nospace",paddingX:.5,rounded:!0,children:t===void 0||r<=t?r:"".concat(t,"+")})};const $a=e=>{var n;return((n=e==null?void 0:e.linkedBusinesses)==null?void 0:n.map(r=>{var t;return{...r,selected:((t=e==null?void 0:e.selectedBusiness)==null?void 0:t.partyId)===r.partyId,setSelected:()=>e.setSelectedBusiness(r)}}))??[]},Wa=e=>e.businesses.length===0?u(ln,{label:"Get started",children:[e!=null&&e.preventAddBusiness?null:o(pe,{href:Q.linkBusiness,children:"Add a business to the Export Service"}),o(pe,{href:Q.acceptInvite,children:"Accept an invite"})]}):u(ln,{label:"Businesses",children:[e.businesses.slice(0,3).map(n=>o(mo,{checked:n.selected??!1,secondaryText:n.formattedPartyExternalId,onClick:e.onSelectBusiness(n),children:n.partyDisplayName},n.partyId)),e.businesses.length>3?o(pe,{href:"/account",endElement:o(Pt,{}),children:"View all businesses"}):null]}),_a=e=>{const n=t=>()=>{var i;return(i=t==null?void 0:t.setSelected)==null?void 0:i.call(t)},r=$a(e.businessDetails);return u(go,{palette:"light",children:[o(Wa,{businesses:r,onSelectBusiness:n,preventAddBusiness:e.preventAddBusiness}),o(Bn,{}),u(ln,{label:"My account",children:[o(pe,{href:Q.inbox,icon:Lo,endElement:typeof e.unreadMessageCount=="number"&&e.unreadMessageCount>0?u("span",{children:[o(Fa,{tone:"action",value:e.unreadMessageCount,max:99,"aria-hidden":!0}),u(yn,{children:[", ",e.unreadMessageCount," unread"]})]}):void 0,children:"Inbox"}),o(pe,{href:Q.profile,icon:Do,children:"Profile and settings"})]}),o(Bn,{}),o(ho,{onClick:e.onSignOutClick,icon:vt,children:"Sign out"})]})},Na=e=>(e==null?void 0:e.selectedBusiness)===void 0?[]:[{options:{disableGroupPadding:!0},items:[{label:"Back to my account",icon:Ao,href:"/account"}]},{options:{disableGroupPadding:!0},items:[{label:u(f.Fragment,{children:[o(C,{fontWeight:"bold",fontSize:"xs",children:e.selectedBusiness.partyDisplayName}),o(C,{color:"muted",fontSize:"xs",children:e.selectedBusiness.formattedPartyExternalId})]})}]}];var qa=["children"],Ga=["as","children","direction","className"];function sr(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,t)}return r}function We(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?sr(Object(r),!0).forEach(function(t){P(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):sr(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var Ft=function(n){var r=n.children,t=W(n,qa);return o(Ha,We(We({as:$e},t),{},{children:r}))},Ha=function(n){var r=n.as,t=n.children,i=n.direction,a=n.className,s=W(n,Ga),c=Ua[i],d=i==="left",l=Ue("sm");return u(w,We(We({alignItems:"center",as:r,className:a,css:b({alignSelf:"flex-start",svg:{transition:l.transition},":hover svg":{transform:l.transform}},"",""),focusRingFor:"keyboard",fontFamily:"body",fontWeight:"normal",gap:.5,inline:!0,link:!0},s),{},{children:[d?o(c,{size:"sm"}):null,t,d?null:o(c,{size:"sm"})]}))},Ua={up:jo,right:Pt,down:Bo,left:Eo};function Ka(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.focusOnMount,r=e.focusOnUpdate,t=e.forwardedRef,i=f.useRef(null),a=t||i;return f.useEffect(function(){var s,c;!r&&!n||!("current"in a)||Array.isArray(r)&&r.filter(Boolean).length===0||a==null||(s=a.current)===null||s===void 0||(c=s.focus)===null||c===void 0||c.call(s)},[r]),a}var Ya=function(n){var r=n.as,t=r===void 0?"h2":r,i=n.children,a=n.hasDismissButton,s=n.hasCloseButton;return o(C,{as:t,css:ae(P({marginRight:s||a?"2.5rem":void 0},m.mediaQuery.min.sm,{marginRight:"0"})),fontSize:"lg",fontWeight:"bold",lineHeight:"heading",children:i})},Qa=function(n){var r,t=n.onClick;return o(K,{"aria-label":"Close",css:ae((r={position:"absolute",top:"1.5rem",right:"1.5rem",flexShrink:0},P(r,m.mediaQuery.min.sm,{position:"relative",top:"unset",right:"unset"}),P(r,"& > span:first-of-type",P({display:"none"},m.mediaQuery.min.sm,{display:"block"})),r)),iconAfter:Ke,onClick:t,variant:"text",children:"Close"})};function lr(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,t)}return r}function Xa(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?lr(Object(r),!0).forEach(function(t){P(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):lr(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var Va=f.forwardRef(function(n,r){var t=n.id,i=n.focusOnMount,a=n.focusOnUpdate,s=n.role,c=n.children,d=n.onClose,l=n.onDismiss,p=n.title,h=n.tone,v=n.tabIndex,k=Ka({focusOnMount:i,focusOnUpdate:a,forwardedRef:r}),y=xi(d,l),O=Za[h],x=O.fg,S=O.bg,L=O.icon;return u(w,{css:b({backgroundColor:S,position:"relative"},"",""),focusRingFor:"all",highContrastOutline:!0,id:t,ref:k,role:s,rounded:!0,tabIndex:v??(i||a?-1:void 0),children:[o(w,{alignItems:"center",css:b(Xa({borderTopLeftRadius:m.borderRadius,borderBottomLeftRadius:m.borderRadius,backgroundColor:x,color:g.backgroundBody},ht.exactColor),"",""),padding:.5,children:L}),u(w,{alignItems:"flex-start",css:b(P({marginRight:y&&!p?"3rem":void 0},m.mediaQuery.min.sm,{marginRight:"0"}),"",""),flexGrow:1,gap:1,padding:1.5,children:[u(w,{alignItems:"flex-start",flexDirection:"column",flexGrow:1,gap:1,children:[p?f.isValidElement(p)?p:o(Ya,{hasCloseButton:!!y,children:p}):null,c]}),y?o(Qa,{onClick:y}):null]})]})}),Za={success:{fg:g.systemSuccess,bg:g.systemSuccessMuted,icon:o(Ro,{"aria-hidden":"false","aria-label":"Success"})},error:{fg:g.systemError,bg:g.systemErrorMuted,icon:o(bt,{"aria-hidden":"false","aria-label":"Error"})},info:{fg:g.systemInfo,bg:g.systemInfoMuted,icon:o(To,{"aria-hidden":"false","aria-label":"Information"})},warning:{fg:g.systemWarning,bg:g.systemWarningMuted,icon:o(zo,{"aria-hidden":"false","aria-label":"Warning"})}};const Ja=["IP1","IP2","IP3","IP4"],$t=Array.from(Ja),es=e=>{const n=[];return e.forEach(r=>n.unshift(r)),n},dn=new Set($t),cr=new Set(es($t)),ns={descriptor:"Unknown"},rs={IP1:{level:"IP1",descriptor:"Basic"},IP2:{level:"IP2",descriptor:"Standard"},IP3:{level:"IP3",descriptor:"Strong"},IP4:{level:"IP4",descriptor:"Strong"}},ts=e=>dn.has(e),_e=(e,n)=>{const r=e&&ts(e)?rs[e]:ns;return n!=null&&n.short||r.level===void 0?r.descriptor:`${r.descriptor} (${r.level})`},Wt=(e,n)=>Array.from(e).filter(r=>n.has(r)),_t=(e,n)=>Array.from(e).filter(r=>!n.has(r)),ue=e=>{const n=new Set(e??[]);return[...Wt(cr,n),..._t(n,cr)][0]},Nt=e=>{const n=new Set(e??[]);return[...Wt(dn,n),..._t(n,dn)][0]},dr=e=>e===void 0?[]:Array.isArray(e)?e:[e],os=(e,n)=>{if(n===void 0||e.length===0)return!0;const r=new Set(n);return e.some(t=>r.has(t))},ur=e=>((e==null?void 0:e.trim())??"")==="",qt=()=>o(te,{children:u(_o,{title:"Need more help?",children:[u(C,{children:["Email"," ",o($e,{href:"mailto:exportservice@aff.gov.au",children:"exportservice@aff.gov.au"})]}),u(C,{children:["Call ",o($e,{href:"tel:1800571125",children:"1800 571 125"}),", Monday to Friday, 9 am to 5 pm AEST"]})]})}),is=e=>o($,{children:u(j,{gap:3,children:[o(te,{children:o(Ft,{href:Q.dashboard,direction:"left",children:"Back to Dashboard"})}),u(_,{children:[o("h1",{children:"Single names in the Export Service"}),o("p",{children:"If you are legally known by a single name, you can use it to access an Export Service account. Other services we offer may not accept a single name and you will need to use a given and family name."}),o("p",{children:"Contact support if you need more help."})]}),o(mt,{}),o(qt,{})]})}),as=e=>{const n=_e(e.providedProofingLevel),r=_e(e.requiredProofingLevel,{short:!0});return o($,{children:u(j,{gap:3,children:[o(te,{children:o(Ft,{href:Q.dashboard,direction:"left",children:"Back"})}),u(_,{children:[o("h1",{children:e.activeApp??"Use a higher identity strength"}),o(M,{className:to,children:u(Va,{tone:"info",title:"You can't access this feature",children:["Sign in with myID and use a ‘",r,"’ identity strength or higher to access this feature."]})}),o("h2",{children:"Review your profile and settings"}),u("p",{children:["Your current identity strength is ",n,". To access this feature you must add myID to your account from your"," ",o($e,{href:"TODO",children:"Profile and settings"}),", then sign in."]})]}),o(mt,{}),o(qt,{})]})})},Gt={MissingName:is,ProofMissing:as},ss=({claims:e,errorComponents:n,requiredProofingLevel:r,authDetails:t,activeApp:i,children:a})=>{const s=n.MissingGivenName??n.MissingName,c=n.MissingFamilyName??n.MissingName,d=n.ProofMissing,l=dr(r),p=dr(t==null?void 0:t.proofingLevel);if(!os(l,p)){const h=Nt(l),v=ue(p);return o(d,{requiredProofingLevel:h,providedProofingLevel:v,activeApp:i})}return e===void 0?o(f.Fragment,{children:a}):ur(e==null?void 0:e.given_name)?o(s,{children:a}):ur(e==null?void 0:e.family_name)?o(c,{children:a}):o(f.Fragment,{children:a})},ls=Object.values,cs={IP1:{AL1:"urn:id.gov.au:tdif:acr:ip1:cl1",AL2:"urn:id.gov.au:tdif:acr:ip1:cl2",AL3:"urn:id.gov.au:tdif:acr:ip1:cl3",PlusAL1:"urn:id.gov.au:tdif:acr:ip1p:cl1",PlusAL2:"urn:id.gov.au:tdif:acr:ip1p:cl2",PlusAL3:"urn:id.gov.au:tdif:acr:ip1p:cl3"},IP2:{AL2:"urn:id.gov.au:tdif:acr:ip2:cl2",AL3:"urn:id.gov.au:tdif:acr:ip2:cl3",PlusAL2:"urn:id.gov.au:tdif:acr:ip2p:cl2",PlusAL3:"urn:id.gov.au:tdif:acr:ip2p:cl3"},IP3:{AL2:"urn:id.gov.au:tdif:acr:ip3:cl2",AL3:"urn:id.gov.au:tdif:acr:ip3:cl3"},IP4:{AL3:"urn:id.gov.au:tdif:acr:ip4:cl3"}},ds=["IP1","IP2","IP3","IP4"],us=Object.fromEntries(ds.map((e,n,r)=>[e,r.slice(0,n)])),ye=e=>Object.fromEntries(ls(cs[e]).map(n=>[n,e])),ze={...ye("IP1"),...ye("IP2"),...ye("IP3"),...ye("IP4")},ps=e=>e in ze,fs=e=>e===void 0?[]:Array.isArray(e)?e:[e],Fe=(e,n)=>{const t=fs(e.AARM_acr).flatMap(i=>ps(i)?n!=null&&n.requireExactProofingMatch?[ze[i]]:[ze[i],...us[ze[i]]]:n!=null&&n.removeUnknownACRs?[]:[i]);return Array.from(new Set(t))},hs=e=>(e==null?void 0:e.credentialType)==="myGovID"?"myID":(e==null?void 0:e.credentialType)==="B2CLocalUser"?"B2CLocalUser":void 0,gs=(e,n)=>e?{provider:hs(e),proofingLevel:Fe(e,n)}:void 0,Ht=f.createContext(void 0),Ut=()=>{var e;return(e=f.useContext(Ht))==null?void 0:e.onSignOutClick};function J({activePath:e,children:n,focusMode:r=!1,handleSignOut:t,mainContentId:i="main-content",unreadMessageCount:a,userName:s,businessDetails:c,claims:d,errorComponents:l,features:p,requiredProofingLevel:h,authDetails:v,sidebarItems:k,internal:y}){var An;const O=f.useMemo(()=>new Date().getFullYear(),[]),x=f.useContext(Fo),[S,L,A]=sn(!1),[E,N,q]=sn(!1),G=L,H=t,Dn=f.useMemo(()=>Tt({features:p}),[p]),le=f.useMemo(()=>[...Na(c),...ja({onSignOutClick:G,features:p})],[G,c,p]),Jt=gs(d),be=v??Jt,Ze=Ba(Dn,e),eo=(be==null?void 0:be.provider)==="B2CLocalUser";return o(ea,{focusMode:r,children:o(Ht.Provider,{value:{onSignOutClick:G},children:u(te,{children:[o(ga,{href:"/account",heading:"Export Service",subLine:"Supporting Australian agricultural exports",badgeLabel:"Beta",logo:o($o,{}),accountDetails:s?{href:Q.account,name:s,secondaryText:((An=c==null?void 0:c.selectedBusiness)==null?void 0:An.partyDisplayName)??"My account",dropdown:c?o(_a,{businessDetails:c,unreadMessageCount:a,onSignOutClick:G,preventAddBusiness:eo}):void 0}:void 0,...Ra(y)}),k?o(te,{...x,children:o(or,{activePath:e,items:k,...ir(y)})}):o(or,{activePath:e,items:le,...ir(y)}),u(Sa,{children:[o(te,{...x,children:o("main",{id:i,tabIndex:-1,css:{"&:focus":{outline:"none"}},children:o(ss,{claims:d,authDetails:be,requiredProofingLevel:h,errorComponents:{...Gt,...l},activeApp:Ze==null?void 0:Ze.label,children:n})})}),u(Ma,{children:[o("nav",{"aria-label":"footer",children:o(Wo,{links:Aa,horizontal:!0})}),o(La,{}),o(C,{fontSize:"xs",maxWidth:m.maxWidth.bodyText,children:"We acknowledge the traditional owners of country throughout Australia and recognise their continuing connection to land, waters and culture. We pay our respects to their Elders past, present and emerging."}),u(C,{fontSize:"xs",maxWidth:m.maxWidth.bodyText,children:["© ",O," Department of Agriculture, Fisheries and Forestry"]})]})]}),o(At,{isOpen:S,onClose:A,title:"Do you want to sign out?",actions:u(vn,{children:[o(K,{onClick:async()=>{N(),await H(),q(),A()},loading:E,disabled:E,children:"Sign out"}),o(K,{variant:"secondary",onClick:A,children:"Cancel"})]}),children:o(C,{as:"p",children:"This will end your current session with the Export Service."})})]})})})}var Kt=Symbol.for("immer-nothing"),pr=Symbol.for("immer-draftable"),T=Symbol.for("immer-state");function F(e,...n){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var oe=Object.getPrototypeOf;function ie(e){return!!e&&!!e[T]}function ee(e){var n;return e?Yt(e)||Array.isArray(e)||!!e[pr]||!!((n=e.constructor)!=null&&n[pr])||Qe(e)||Xe(e):!1}var ms=Object.prototype.constructor.toString();function Yt(e){if(!e||typeof e!="object")return!1;const n=oe(e);if(n===null)return!0;const r=Object.hasOwnProperty.call(n,"constructor")&&n.constructor;return r===Object?!0:typeof r=="function"&&Function.toString.call(r)===ms}function Ne(e,n){Ye(e)===0?Reflect.ownKeys(e).forEach(r=>{n(r,e[r],e)}):e.forEach((r,t)=>n(t,r,e))}function Ye(e){const n=e[T];return n?n.type_:Array.isArray(e)?1:Qe(e)?2:Xe(e)?3:0}function un(e,n){return Ye(e)===2?e.has(n):Object.prototype.hasOwnProperty.call(e,n)}function Qt(e,n,r){const t=Ye(e);t===2?e.set(n,r):t===3?e.add(r):e[n]=r}function bs(e,n){return e===n?e!==0||1/e===1/n:e!==e&&n!==n}function Qe(e){return e instanceof Map}function Xe(e){return e instanceof Set}function V(e){return e.copy_||e.base_}function pn(e,n){if(Qe(e))return new Map(e);if(Xe(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);const r=Yt(e);if(n===!0||n==="class_only"&&!r){const t=Object.getOwnPropertyDescriptors(e);delete t[T];let i=Reflect.ownKeys(t);for(let a=0;a<i.length;a++){const s=i[a],c=t[s];c.writable===!1&&(c.writable=!0,c.configurable=!0),(c.get||c.set)&&(t[s]={configurable:!0,writable:!0,enumerable:c.enumerable,value:e[s]})}return Object.create(oe(e),t)}else{const t=oe(e);if(t!==null&&r)return{...e};const i=Object.create(t);return Object.assign(i,e)}}function Mn(e,n=!1){return Ve(e)||ie(e)||!ee(e)||(Ye(e)>1&&(e.set=e.add=e.clear=e.delete=vs),Object.freeze(e),n&&Object.entries(e).forEach(([r,t])=>Mn(t,!0))),e}function vs(){F(2)}function Ve(e){return Object.isFrozen(e)}var ys={};function ne(e){const n=ys[e];return n||F(0,e),n}var he;function Xt(){return he}function Os(e,n){return{drafts_:[],parent_:e,immer_:n,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function fr(e,n){n&&(ne("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=n)}function fn(e){hn(e),e.drafts_.forEach(Ps),e.drafts_=null}function hn(e){e===he&&(he=e.parent_)}function hr(e){return he=Os(he,e)}function Ps(e){const n=e[T];n.type_===0||n.type_===1?n.revoke_():n.revoked_=!0}function gr(e,n){n.unfinalizedDrafts_=n.drafts_.length;const r=n.drafts_[0];return e!==void 0&&e!==r?(r[T].modified_&&(fn(n),F(4)),ee(e)&&(e=qe(n,e),n.parent_||Ge(n,e)),n.patches_&&ne("Patches").generateReplacementPatches_(r[T].base_,e,n.patches_,n.inversePatches_)):e=qe(n,r,[]),fn(n),n.patches_&&n.patchListener_(n.patches_,n.inversePatches_),e!==Kt?e:void 0}function qe(e,n,r){if(Ve(n))return n;const t=n[T];if(!t)return Ne(n,(i,a)=>mr(e,t,n,i,a,r)),n;if(t.scope_!==e)return n;if(!t.modified_)return Ge(e,t.base_,!0),t.base_;if(!t.finalized_){t.finalized_=!0,t.scope_.unfinalizedDrafts_--;const i=t.copy_;let a=i,s=!1;t.type_===3&&(a=new Set(i),i.clear(),s=!0),Ne(a,(c,d)=>mr(e,t,i,c,d,r,s)),Ge(e,i,!1),r&&e.patches_&&ne("Patches").generatePatches_(t,r,e.patches_,e.inversePatches_)}return t.copy_}function mr(e,n,r,t,i,a,s){if(ie(i)){const c=a&&n&&n.type_!==3&&!un(n.assigned_,t)?a.concat(t):void 0,d=qe(e,i,c);if(Qt(r,t,d),ie(d))e.canAutoFreeze_=!1;else return}else s&&r.add(i);if(ee(i)&&!Ve(i)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;qe(e,i),(!n||!n.scope_.parent_)&&typeof t!="symbol"&&Object.prototype.propertyIsEnumerable.call(r,t)&&Ge(e,i)}}function Ge(e,n,r=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&Mn(n,r)}function ws(e,n){const r=Array.isArray(e),t={type_:r?1:0,scope_:n?n.scope_:Xt(),modified_:!1,finalized_:!1,assigned_:{},parent_:n,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let i=t,a=Ln;r&&(i=[t],a=ge);const{revoke:s,proxy:c}=Proxy.revocable(i,a);return t.draft_=c,t.revoke_=s,c}var Ln={get(e,n){if(n===T)return e;const r=V(e);if(!un(r,n))return ks(e,r,n);const t=r[n];return e.finalized_||!ee(t)?t:t===on(e.base_,n)?(an(e),e.copy_[n]=mn(t,e)):t},has(e,n){return n in V(e)},ownKeys(e){return Reflect.ownKeys(V(e))},set(e,n,r){const t=Vt(V(e),n);if(t!=null&&t.set)return t.set.call(e.draft_,r),!0;if(!e.modified_){const i=on(V(e),n),a=i==null?void 0:i[T];if(a&&a.base_===r)return e.copy_[n]=r,e.assigned_[n]=!1,!0;if(bs(r,i)&&(r!==void 0||un(e.base_,n)))return!0;an(e),gn(e)}return e.copy_[n]===r&&(r!==void 0||n in e.copy_)||Number.isNaN(r)&&Number.isNaN(e.copy_[n])||(e.copy_[n]=r,e.assigned_[n]=!0),!0},deleteProperty(e,n){return on(e.base_,n)!==void 0||n in e.base_?(e.assigned_[n]=!1,an(e),gn(e)):delete e.assigned_[n],e.copy_&&delete e.copy_[n],!0},getOwnPropertyDescriptor(e,n){const r=V(e),t=Reflect.getOwnPropertyDescriptor(r,n);return t&&{writable:!0,configurable:e.type_!==1||n!=="length",enumerable:t.enumerable,value:r[n]}},defineProperty(){F(11)},getPrototypeOf(e){return oe(e.base_)},setPrototypeOf(){F(12)}},ge={};Ne(Ln,(e,n)=>{ge[e]=function(){return arguments[0]=arguments[0][0],n.apply(this,arguments)}});ge.deleteProperty=function(e,n){return ge.set.call(this,e,n,void 0)};ge.set=function(e,n,r){return Ln.set.call(this,e[0],n,r,e[0])};function on(e,n){const r=e[T];return(r?V(r):e)[n]}function ks(e,n,r){var i;const t=Vt(n,r);return t?"value"in t?t.value:(i=t.get)==null?void 0:i.call(e.draft_):void 0}function Vt(e,n){if(!(n in e))return;let r=oe(e);for(;r;){const t=Object.getOwnPropertyDescriptor(r,n);if(t)return t;r=oe(r)}}function gn(e){e.modified_||(e.modified_=!0,e.parent_&&gn(e.parent_))}function an(e){e.copy_||(e.copy_=pn(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var xs=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(n,r,t)=>{if(typeof n=="function"&&typeof r!="function"){const a=r;r=n;const s=this;return function(d=a,...l){return s.produce(d,p=>r.call(this,p,...l))}}typeof r!="function"&&F(6),t!==void 0&&typeof t!="function"&&F(7);let i;if(ee(n)){const a=hr(this),s=mn(n,void 0);let c=!0;try{i=r(s),c=!1}finally{c?fn(a):hn(a)}return fr(a,t),gr(i,a)}else if(!n||typeof n!="object"){if(i=r(n),i===void 0&&(i=n),i===Kt&&(i=void 0),this.autoFreeze_&&Mn(i,!0),t){const a=[],s=[];ne("Patches").generateReplacementPatches_(n,i,a,s),t(a,s)}return i}else F(1,n)},this.produceWithPatches=(n,r)=>{if(typeof n=="function")return(s,...c)=>this.produceWithPatches(s,d=>n(d,...c));let t,i;return[this.produce(n,r,(s,c)=>{t=s,i=c}),t,i]},typeof(e==null?void 0:e.autoFreeze)=="boolean"&&this.setAutoFreeze(e.autoFreeze),typeof(e==null?void 0:e.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){ee(e)||F(8),ie(e)&&(e=Cs(e));const n=hr(this),r=mn(e,void 0);return r[T].isManual_=!0,hn(n),r}finishDraft(e,n){const r=e&&e[T];(!r||!r.isManual_)&&F(9);const{scope_:t}=r;return fr(t,n),gr(void 0,t)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,n){let r;for(r=n.length-1;r>=0;r--){const i=n[r];if(i.path.length===0&&i.op==="replace"){e=i.value;break}}r>-1&&(n=n.slice(r+1));const t=ne("Patches").applyPatches_;return ie(e)?t(e,n):this.produce(e,i=>t(i,n))}};function mn(e,n){const r=Qe(e)?ne("MapSet").proxyMap_(e,n):Xe(e)?ne("MapSet").proxySet_(e,n):ws(e,n);return(n?n.scope_:Xt()).drafts_.push(r),r}function Cs(e){return ie(e)||F(10,e),Zt(e)}function Zt(e){if(!ee(e)||Ve(e))return e;const n=e[T];let r;if(n){if(!n.modified_)return n.base_;n.finalized_=!0,r=pn(e,n.scope_.immer_.useStrictShallowCopy_)}else r=pn(e,!0);return Ne(r,(t,i)=>{Qt(r,t,Zt(i))}),n&&(n.finalized_=!1),r}var z=new xs,Oe=z.produce;z.produceWithPatches.bind(z);z.setAutoFreeze.bind(z);z.setUseStrictShallowCopy.bind(z);z.applyPatches.bind(z);z.createDraft.bind(z);z.finishDraft.bind(z);const Z=[{partyId:1,partyDisplayName:"Jefferson PTY LTD",roleDisplayName:"Role 1",formattedPartyExternalId:"ABN: 89 790 756 100",someExtraInfo:"our component allows this field but does not use it at all"},{partyId:2,partyDisplayName:"Metaweb",roleDisplayName:"Role 2",formattedPartyExternalId:"ABN: 89 790 756 100",someExtraInfo:"our component allows this field but does not use it at all"},{partyId:3,partyDisplayName:"Fresh Produce Australia",roleDisplayName:"Role 3",formattedPartyExternalId:"ABN: 92 635 964 018",someExtraInfo:"our component allows this field but does not use it at all"},{partyId:4,partyDisplayName:"Fresh Produce Australia",roleDisplayName:"Role 3",formattedPartyExternalId:"ABN: 92 635 964 018",someExtraInfo:"our component allows this field but does not use it at all"}],Ns={title:"AppLayout",component:J,parameters:{layout:"fullscreen"},render:function(n){return u(f.Fragment,{children:[o(se,{links:[{href:"#main-content",label:"Skip to main content"}]}),o(J,{...n,children:o($,{children:o(_,{children:o("h1",{children:"Page heading"})})})})]})}},Ss=e=>new Promise(n=>setTimeout(n,e)),B=async()=>{await Ss(2e3),alert("You have been signed out.")},Pe={args:{focusMode:!1,userName:"Toto Wolff",unreadMessageCount:6,activePath:"/",handleSignOut:B}},we={args:{focusMode:!0,userName:"Toto Wolff",unreadMessageCount:6,activePath:"/",handleSignOut:B}},ke={args:{activePath:"/",focusMode:!1,handleSignOut:B},render:function(n){const[r,t]=f.useState(!1);return f.useEffect(()=>{setTimeout(()=>{t(!0)},1e3)},[]),u(f.Fragment,{children:[o(se,{links:[{href:"#main-content",label:"Skip to main content"}]}),o(J,{...n,...r?{userName:"Toto Wolff",unreadMessageCount:6}:{},children:o($,{children:o(_,{children:o("h1",{children:"Page heading"})})})})]})}},xe={args:{focusMode:!1,userName:"Toto Wolff",unreadMessageCount:6,activePath:"/",handleSignOut:B},render:function(n){const[r,t]=f.useState({linkedBusinesses:Z,selectedBusiness:Z[1]}),[i,a]=f.useState({provider:"myID"}),s=d=>t(l=>({...l,selectedBusiness:d})),c=d=>()=>{const l=Z.slice(0,d),p=l[0];t({selectedBusiness:p,linkedBusinesses:l})};return u(f.Fragment,{children:[o(se,{links:[{href:"#main-content",label:"Skip to main content"}]}),o(J,{...n,businessDetails:{...r,setSelectedBusiness:s},authDetails:i,children:o($,{children:u(j,{gap:3,children:[o(_,{children:o("h1",{children:"Business dropdown configuration"})}),o(fe,{label:"Number of linked businesses",block:!0,hideOptionalLabel:!0,children:Array.from(new Array(Z.length+1).keys()).map(d=>{var l;return u($n,{checked:((l=r==null?void 0:r.linkedBusinesses)==null?void 0:l.length)===d,onChange:c(d),children:[d," ",d===0?"business":"businesses"]},d)})}),o(fe,{label:"Auth provider",block:!0,hideOptionalLabel:!0,children:["myID","B2CLocalUser"].map(d=>o($n,{checked:(i==null?void 0:i.provider)===d,onChange:()=>a(l=>({...l,provider:d})),children:d},d))})]})})})]})}},Ce={args:{focusMode:!1,userName:"Toto Wolff",unreadMessageCount:6,activePath:"/",handleSignOut:B},render:function(n){const r=Z,[t,i]=f.useState(r[1]),[a,s]=f.useState(),c=()=>s(void 0),d={linkedBusinesses:r,selectedBusiness:t,setSelectedBusiness:s};return u(f.Fragment,{children:[o(se,{links:[{href:"#main-content",label:"Skip to main content"}]}),u(J,{...n,businessDetails:d,children:[o(At,{isOpen:a!==void 0,onClose:c,title:"Are you sure you want to leave this page?",actions:u(vn,{children:[o(K,{onClick:()=>{a!==void 0&&i(a),s(void 0)},children:"Leave this page"}),o(K,{variant:"secondary",onClick:c,children:"Stay on this page"})]}),children:o(C,{as:"p",children:"You will lose all changes made since your last save."})}),o($,{children:o(j,{gap:3,children:o(_,{children:u("h1",{children:["Active business: ",t==null?void 0:t.partyDisplayName]})})})})]})]})}},Se={args:{focusMode:!1,userName:"Toto Wolff",unreadMessageCount:6,activePath:"/",handleSignOut:B},render:function(n){const r={linkedBusinesses:Z,selectedBusiness:Z[0],setSelectedBusiness:()=>{}},t=()=>{const i=Ut();return o(K,{onClick:i,children:"Sign out"})};return u(f.Fragment,{children:[o(se,{links:[{href:"#main-content",label:"Skip to main content"}]}),o(J,{...n,businessDetails:r,children:o($,{children:u(j,{gap:3,children:[u(_,{children:[o("h1",{children:"Sign out button"}),u("p",{children:["You can trigger the sign out modal using the"," ",o("code",{children:"useOpenSignOutModal"})," hook."]})]}),o(vn,{children:o(t,{})})]})})})]})}},Ie={args:{focusMode:!1,userName:"Toto Wolff",unreadMessageCount:6,activePath:"/",features:{quotas:!0,exportSystems:!0,licences:!0,invoices:!0}}},Me={args:{focusMode:!1,unreadMessageCount:6,activePath:"/",handleSignOut:B,claims:{given_name:"given_name",family_name:"family_name"}}},Le={args:{focusMode:!1,unreadMessageCount:6,activePath:"/",handleSignOut:B,claims:{family_name:"family_name"}}},De={args:{focusMode:!1,unreadMessageCount:6,activePath:"/",handleSignOut:B,claims:{family_name:"family_name"},errorComponents:{MissingName:e=>(f.useEffect(()=>{console.log("report this situation to an analytics provider here")},[]),o(Gt.MissingName,{...e}))}}},Ae={args:{focusMode:!1,unreadMessageCount:6,activePath:"/",handleSignOut:B,claims:{family_name:"family_name"},errorComponents:{MissingName:e=>o($,{children:u(_,{children:[o("p",{children:"Our app works just fine even without a generic name."}),o("hr",{}),e.children]})})}}},je={args:{focusMode:!1,unreadMessageCount:6,activePath:"/",handleSignOut:B,claims:{family_name:"family_name"},errorComponents:{MissingGivenName:e=>{const n=Ut();return o($,{children:u(_,{children:[o("p",{children:"Our app works just fine even without a given name."}),o("hr",{}),e.children,o(K,{onClick:n,children:"Sign out"})]})})}}}},Be={args:{focusMode:!1,unreadMessageCount:6,activePath:"/",handleSignOut:B,claims:{given_name:"given_name",family_name:"family_name",AARM_acr:"urn:id.gov.au:tdif:acr:ip1:cl1"},requiredProofingLevel:"IP2"}},Ee={args:{focusMode:!1,unreadMessageCount:6,activePath:"/",handleSignOut:B},render:function(n){const r=["IP1","IP2","IP3","IP4"],t=["urn:id.gov.au:tdif:acr:ip1:cl1","urn:id.gov.au:tdif:acr:ip1:cl2","urn:id.gov.au:tdif:acr:ip1:cl3","urn:id.gov.au:tdif:acr:ip1p:cl1","urn:id.gov.au:tdif:acr:ip1p:cl2","urn:id.gov.au:tdif:acr:ip1p:cl3","urn:id.gov.au:tdif:acr:ip2:cl2","urn:id.gov.au:tdif:acr:ip2:cl3","urn:id.gov.au:tdif:acr:ip2p:cl2","urn:id.gov.au:tdif:acr:ip2p:cl3","urn:id.gov.au:tdif:acr:ip3:cl2","urn:id.gov.au:tdif:acr:ip3:cl3","urn:id.gov.au:tdif:acr:ip4:cl3"],[i,a]=f.useState(!0),[s,c]=f.useState({method:"urn",claims:{given_name:"given_name",family_name:"family_name",AARM_acr:[t[0]]},authDetails:{proofingLevel:["IP1"]},requiredProofingLevel:["IP2"]}),d=l=>{const p=l.kind==="max"?"#df185a":"#287be0",h=l!=null&&l.extraText?` (${l.extraText})`:"";return l!=null&&l.active?o(M,{css:{position:"relative",padding:"4px",border:`2px dashed ${p}`,"& + &":{marginTop:"1em"},":after":{position:"absolute",right:0,bottom:"120%",content:`"${l.kind==="max"?"maximum provided proof":"minimum required proof"}${h}"`,color:p,fontSize:"0.8em"}},children:l.children}):o(ft,{children:l.children})};return u(f.Fragment,{children:[o(se,{links:[{href:"#main-content",label:"Skip to main content"}]}),u(M,{css:{position:"relative"},children:[o(M,{css:{border:"2px solid red",backgroundColor:"#fec0ff",position:"fixed",transform:"rotate(90deg)",transformOrigin:"top right",fontSize:"1.2em",padding:".4em 1em",top:"55vh",right:0,zIndex:99,cursor:"pointer"},onClick:()=>a(!0),children:"show config options"}),o(J,{...n,requiredProofingLevel:s.requiredProofingLevel,...s.method==="claims"?{claims:s.claims}:{authDetails:s.authDetails},children:o($,{children:u(j,{gap:1.5,children:[o(C,{as:"p",fontSize:"lg",children:"You made it!"}),o(C,{as:"p",children:"Your proofing level means that you can see this page."})]})})})]}),o(Ei,{title:"Config",isOpen:i,onClose:()=>a(!1),children:u(j,{gap:1.5,children:[o(yi,{label:"Proofing method",required:!0,options:[{value:"authDetails",label:"AuthDetails"},{value:"claims",label:"Claims"}],onChange:l=>c(Oe(p=>{p.method=l.target.value}))}),s.method==="claims"?o(fe,{label:"Provided ACR",block:!0,hideOptionalLabel:!0,children:t.map(l=>o(d,{kind:"max",active:ue(Fe({AARM_acr:l}))===ue(Fe(s.claims)),extraText:ue(Fe(s.claims)),children:o(en,{checked:new Set(s.claims.AARM_acr).has(l),onChange:p=>c(Oe(h=>{p.target.checked?h.claims.AARM_acr.push(l):h.claims.AARM_acr.splice(h.claims.AARM_acr.indexOf(l),1)})),children:l},l)},l))}):o(fe,{label:"Provided proofing level",block:!0,hideOptionalLabel:!0,children:r.map(l=>o(d,{kind:"max",active:ue(s.authDetails.proofingLevel)===l,children:o(en,{checked:new Set(s.authDetails.proofingLevel).has(l),onChange:p=>c(Oe(h=>{p.target.checked?h.authDetails.proofingLevel.push(l):h.authDetails.proofingLevel.splice(h.authDetails.proofingLevel.indexOf(l),1)})),children:l},l)},l))}),o(fe,{label:"Required proofing level",block:!0,hideOptionalLabel:!0,children:r.map(l=>o(d,{kind:"min",active:Nt(s.requiredProofingLevel)===l,children:o(en,{checked:new Set(s.requiredProofingLevel).has(l),onChange:p=>c(Oe(h=>{p.target.checked?h.requiredProofingLevel.push(l):h.requiredProofingLevel.splice(h.requiredProofingLevel.indexOf(l),1)})),children:l},l)},l))})]})})]})}},Re={args:{focusMode:!1,unreadMessageCount:6,activePath:"/",handleSignOut:B,authDetails:{proofingLevel:"IP1"},requiredProofingLevel:"IP3",errorComponents:{ProofMissing:e=>o($,{children:u(_,{children:[u("p",{children:["Your proofing level is insufficient at"," ",_e(e.providedProofingLevel),". Please fix it."]}),u("p",{children:["you should provide at least '",_e(e.requiredProofingLevel),"'"]})]})})}}},Te={args:{focusMode:!1,userName:"Toto Wolff",unreadMessageCount:6,activePath:"/custom",handleSignOut:B,sidebarItems:[{items:[{label:"Custom sidenav",href:"/custom",icon:yt},{label:"Other item",href:"/other",icon:Ot}]}],internal:"sidebar"}};var br,vr,yr;Pe.parameters={...Pe.parameters,docs:{...(br=Pe.parameters)==null?void 0:br.docs,source:{originalSource:`{
  args: {
    focusMode: false,
    userName: 'Toto Wolff',
    unreadMessageCount: 6,
    activePath: '/',
    handleSignOut
  }
}`,...(yr=(vr=Pe.parameters)==null?void 0:vr.docs)==null?void 0:yr.source}}};var Or,Pr,wr;we.parameters={...we.parameters,docs:{...(Or=we.parameters)==null?void 0:Or.docs,source:{originalSource:`{
  args: {
    focusMode: true,
    userName: 'Toto Wolff',
    unreadMessageCount: 6,
    activePath: '/',
    handleSignOut
  }
}`,...(wr=(Pr=we.parameters)==null?void 0:Pr.docs)==null?void 0:wr.source}}};var kr,xr,Cr;ke.parameters={...ke.parameters,docs:{...(kr=ke.parameters)==null?void 0:kr.docs,source:{originalSource:`{
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
}`,...(Cr=(xr=ke.parameters)==null?void 0:xr.docs)==null?void 0:Cr.source}}};var Sr,Ir,Mr;xe.parameters={...xe.parameters,docs:{...(Sr=xe.parameters)==null?void 0:Sr.docs,source:{originalSource:`{
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
}`,...(Mr=(Ir=xe.parameters)==null?void 0:Ir.docs)==null?void 0:Mr.source}}};var Lr,Dr,Ar;Ce.parameters={...Ce.parameters,docs:{...(Lr=Ce.parameters)==null?void 0:Lr.docs,source:{originalSource:`{
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
}`,...(Ar=(Dr=Ce.parameters)==null?void 0:Dr.docs)==null?void 0:Ar.source}}};var jr,Br,Er;Se.parameters={...Se.parameters,docs:{...(jr=Se.parameters)==null?void 0:jr.docs,source:{originalSource:`{
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
}`,...(Er=(Br=Se.parameters)==null?void 0:Br.docs)==null?void 0:Er.source}}};var Rr,Tr,zr;Ie.parameters={...Ie.parameters,docs:{...(Rr=Ie.parameters)==null?void 0:Rr.docs,source:{originalSource:`{
  args: {
    focusMode: false,
    userName: 'Toto Wolff',
    unreadMessageCount: 6,
    activePath: '/',
    features: {
      quotas: true,
      exportSystems: true,
      licences: true,
      invoices: true
    }
  }
}`,...(zr=(Tr=Ie.parameters)==null?void 0:Tr.docs)==null?void 0:zr.source}}};var Fr,$r,Wr;Me.parameters={...Me.parameters,docs:{...(Fr=Me.parameters)==null?void 0:Fr.docs,source:{originalSource:`{
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
}`,...(Wr=($r=Me.parameters)==null?void 0:$r.docs)==null?void 0:Wr.source}}};var _r,Nr,qr;Le.parameters={...Le.parameters,docs:{...(_r=Le.parameters)==null?void 0:_r.docs,source:{originalSource:`{
  args: {
    focusMode: false,
    unreadMessageCount: 6,
    activePath: '/',
    handleSignOut,
    claims: {
      family_name: 'family_name'
    }
  }
}`,...(qr=(Nr=Le.parameters)==null?void 0:Nr.docs)==null?void 0:qr.source}}};var Gr,Hr,Ur;De.parameters={...De.parameters,docs:{...(Gr=De.parameters)==null?void 0:Gr.docs,source:{originalSource:`{
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
}`,...(Ur=(Hr=De.parameters)==null?void 0:Hr.docs)==null?void 0:Ur.source}}};var Kr,Yr,Qr;Ae.parameters={...Ae.parameters,docs:{...(Kr=Ae.parameters)==null?void 0:Kr.docs,source:{originalSource:`{
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
}`,...(Qr=(Yr=Ae.parameters)==null?void 0:Yr.docs)==null?void 0:Qr.source}}};var Xr,Vr,Zr;je.parameters={...je.parameters,docs:{...(Xr=je.parameters)==null?void 0:Xr.docs,source:{originalSource:`{
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
}`,...(Zr=(Vr=je.parameters)==null?void 0:Vr.docs)==null?void 0:Zr.source}}};var Jr,et,nt;Be.parameters={...Be.parameters,docs:{...(Jr=Be.parameters)==null?void 0:Jr.docs,source:{originalSource:`{
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
}`,...(nt=(et=Be.parameters)==null?void 0:et.docs)==null?void 0:nt.source}}};var rt,tt,ot;Ee.parameters={...Ee.parameters,docs:{...(rt=Ee.parameters)==null?void 0:rt.docs,source:{originalSource:`{
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
}`,...(ot=(tt=Ee.parameters)==null?void 0:tt.docs)==null?void 0:ot.source}}};var it,at,st;Re.parameters={...Re.parameters,docs:{...(it=Re.parameters)==null?void 0:it.docs,source:{originalSource:`{
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
}`,...(st=(at=Re.parameters)==null?void 0:at.docs)==null?void 0:st.source}}};var lt,ct,dt;Te.parameters={...Te.parameters,docs:{...(lt=Te.parameters)==null?void 0:lt.docs,source:{originalSource:`{
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
}`,...(dt=(ct=Te.parameters)==null?void 0:ct.docs)==null?void 0:dt.source}}};const qs=["Basic","FocusMode","ClientSideFetch","BusinessDropdown","BusinessDropdownModalInterrupt","SignOutModalTrigger","OptionalAppsEnabled","Claims","ClaimsMissingName","ClaimsMissingNameAnalytics","ClaimsMissingNameComponent","ClaimsMissingGivenNameComponent","RequiredProofingPaywall","RequiredProofingPaywallOptions","RequiredProofingPaywallCustomComponent","CustomSidenav"];export{Pe as Basic,xe as BusinessDropdown,Ce as BusinessDropdownModalInterrupt,Me as Claims,je as ClaimsMissingGivenNameComponent,Le as ClaimsMissingName,De as ClaimsMissingNameAnalytics,Ae as ClaimsMissingNameComponent,ke as ClientSideFetch,Te as CustomSidenav,we as FocusMode,Ie as OptionalAppsEnabled,Be as RequiredProofingPaywall,Re as RequiredProofingPaywallCustomComponent,Ee as RequiredProofingPaywallOptions,Se as SignOutModalTrigger,qs as __namedExportsOrder,Ns as default};
