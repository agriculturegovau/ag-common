import{j as o,e as _,m as L,t as b,_ as k,c as v,b as g,i as u,B as M,p as I,G as bn,g as ae,h as ht,s as gt,q as io,u as vn,a as ao,F as yn,v as mt,d as so,C as ee,x as lo}from"./Box-c58c9f90.esm-870ae2fc.js";import{r as f}from"./index-39cffa30.js";import{P as N,p as co}from"./ag.ds-next-react-prose.esm-c841aae7.js";import{b as uo,m as bt,c as Y,_ as vt,C as po,B as He,d as Fe,P as $,a as On}from"./ag.ds-next-react-button.esm-1da25121.js";import{v as fo,S as j,T as C,F as w,V as Pn,s as Ke,E as ho}from"./Icon-8342de17.esm-90d8f36f.js";import{e as X,a as kn,c as wn,F as xn,u as ln,_ as Rn,D as yt,b as Cn,d as go,f as Je,g as mo,h as bo,i as Ot,j as vo,k as yo,l as Oo,m as Pt}from"./ag.ds-next-react-dropdown-menu.esm-6627991b.js";import{b as kt,c as Po,d as ko,a as Sn,C as Ye,M as wo,e as xo,E as Co,H as wt,f as xt,g as So,F as Ct,h as Io,S as Mo,P as St,i as Do,L as Lo,j as Ao,k as jo,l as Bo,m as Eo,n as Ro,o as To,p as zo,I as Fo,W as $o}from"./ag.ds-next-react-icon.esm-d5314b79.js";import{r as In}from"./index-1883dec2.js";import{L as Wo}from"./ag.ds-next-react-ag-branding.esm-5dad06ab.js";import{L as _o}from"./ag.ds-next-react-link-list.esm-c9ed9bc4.js";import{C as No}from"./ag.ds-next-react-callout.esm-dc0c5a79.js";import{a as $e}from"./ag.ds-next-react-text-link.esm-c8bac127.js";import"./jsx-runtime-9bc08dc0.js";import"./_commonjsHelpers-725317a4.js";function It(){var e=f.useState(!1),n=e[0],r=e[1];return f.useEffect(function(){if(!window.matchMedia){r(!1);return}var t=window.matchMedia("(prefers-reduced-motion: reduce)");r(t.matches);var i=function(s){return r(s.matches)};return t.addEventListener("change",i),function(){return t.removeEventListener("change",i)}},[]),n}var qo=function(n){var r=n.children,t=n["aria-label"];return o("nav",{"aria-label":t,children:r})},Go=f.forwardRef(function(n,r){var t=n.children,i=n.href;return o("a",{css:[fo,uo({block:!1,size:"md",variant:"primary"}),{position:"absolute","&:focus-visible":{top:L(1),left:L(1),clip:"auto",clipPath:"none",overflow:"visible",whiteSpace:"normal",width:"auto",zIndex:b.zIndex.skipLink}},"","","",""],href:i,ref:r,children:t})}),Ho=["label"];function Tn(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,t)}return r}function zn(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?Tn(Object(r),!0).forEach(function(t){k(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Tn(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var se=function(n){var r=n.links,t=n["aria-label"],i=t===void 0?"Skip links":t;return o(qo,{"aria-label":i,children:r.map(function(a,s){var c=a.label,d=_(a,Ho);return o(Go,zn(zn({},d),{},{children:c}),s)})})},Ko=function(n){var r=n.hideOptionalLabel,t=n.required,i=n.secondaryLabel;return f.useMemo(function(){return[i,r||t?null:"(optional)"].filter(Boolean).join(" ")},[t,i,r])},Mt=function(n){var r=n.children,t=n.invalid,i=n.id;return o(j,{borderLeft:t,borderLeftWidth:"xl",css:v({borderLeftColor:t?g.systemError:void 0},"",""),gap:.5,id:i,paddingLeft:t?1:void 0,children:r})},Dt=function(n){var r=n.as,t=r===void 0?"label":r,i=n.children,a=n.className,s=n.id,c=n.htmlFor,d=n.required,l=n.secondaryLabel,p=n.hideOptionalLabel,h=Ko({hideOptionalLabel:p,required:d,secondaryLabel:l});return u(M,{as:t,className:a,htmlFor:c,id:s,children:[o(C,{as:"span",fontWeight:"bold",children:i}),h?u(C,{as:"span",color:"muted",children:[" ",h]}):null]})},Lt=function(n){var r=n.children,t=n.id;return o(C,{color:"muted",display:"block",id:t,children:r})},Yo={name:"4zleql",styles:"display:block"},At=function(n){var r=n.children,t=n.id;return u(w,{alignItems:"center",gap:.5,children:[o(M,{flexShrink:0,children:o(kt,{"aria-hidden":"false","aria-label":"Error",color:"error",css:Yo,size:"md"})}),o(C,{color:"error",display:"block",fontWeight:"bold",id:t,children:r})]})},Uo=function(n){var r=n.children,t=n.hint,i=n.id,a=n.invalid,s=n.label,c=n.labelId,d=n.maxWidth,l=n.secondaryLabel,p=n.hideOptionalLabel,h=n.message,m=n.required,P=Qo(i),y=P.fieldId,O=P.hintId,x=P.messageId,S=Xo({required:m,fieldId:y,message:h,messageId:x,hint:t,hintId:O,invalid:a});return u(Mt,{invalid:a,children:[o(Dt,{hideOptionalLabel:p,htmlFor:y,id:c,required:m,secondaryLabel:l,children:s}),t?o(Lt,{id:O,children:t}):null,h&&a?o(At,{id:x,children:h}):null,typeof r=="function"?r(S):r,d?o("div",{"aria-hidden":!0,css:v({height:0,marginTop:"-".concat(L(.5)),maxWidth:b.maxWidth.field[d],overflow:"hidden","::after":{content:'"---------------------------------------------------------------"'}},"","")}):null]})},Qo=function(n){var r=X(n),t=n||"field-".concat(r),i="field-".concat(r,"-hint"),a="field-".concat(r,"-message");return{fieldId:t,hintId:i,messageId:a}},Xo=function(n){var r=n.required,t=n.fieldId,i=n.message,a=n.messageId,s=n.hint,c=n.hintId,d=n.invalid,l=[i?a:null,s?c:null].filter(Boolean),p=l.length?l.join(" "):void 0;return{"aria-required":!!r,"aria-invalid":!!d,"aria-describedby":p,id:t}},jt=f.createContext(void 0),Bt=function(){return f.useContext(jt)};function Vo(e){var n=e.children,r=e.invalid,t=e.messageId,i=e.name,a=e.required,s=X();return o(jt.Provider,{value:{invalid:r,name:i||s,messageId:t,required:a},children:n})}var pe=function(n){var r=n.block,t=r===void 0?!1:r,i=n.children,a=n.hint,s=n.id,c=n.invalid,d=c===void 0?!1:c,l=n.label,p=n.hideOptionalLabel,h=n.message,m=n.name,P=n.required,y=P===void 0?!1:P,O=Zo(s),x=O.groupId,S=O.hintId,D=O.messageId,A=[d&&h?D:null,a?S:null].filter(Boolean),E=A.length?A.join(" "):void 0;return o(Vo,{invalid:d,messageId:d&&h?D:void 0,name:m,required:y,children:o(Mt,{id:x,invalid:d,children:u(M,{"aria-describedby":E,as:"fieldset",children:[l?o(Dt,{as:"legend",hideOptionalLabel:p,required:y,children:l}):null,u(j,{css:v({marginTop:l?L(.5):void 0},"",""),gap:.5,children:[a?o(Lt,{id:S,children:a}):null,h&&d?o(At,{id:D,children:h}):null,o(w,{flexDirection:t?"column":"row",flexWrap:t?void 0:"wrap",gap:1,paddingTop:.5,width:"100%",children:i})]})]})})})},Zo=function(n){var r=X(n),t=n||"control-group-".concat(r),i="control-group-".concat(r,"-hint"),a="control-group-".concat(r,"-message");return{groupId:t,hintId:i,messageId:a}};function Fn(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,t)}return r}function en(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?Fn(Object(r),!0).forEach(function(t){k(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Fn(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function Jo(e){var n=e.disabled,r=e.invalid,t=e.size,i=I.control[t],a=i.width,s=i.height,c=i.borderWidth;return o(w,{alignItems:"center",as:"span",css:v(en(en({backgroundColor:g.backgroundBody,borderColor:g.border,borderRadius:"100%",borderStyle:"solid",borderWidth:c,inset:0,position:"absolute"},n&&{color:g.borderMuted,borderColor:g.borderMuted,backgroundColor:g.backgroundShade,"@media (forced-colors: active)":{borderColor:"GrayText",color:"GrayText"}}),r&&{borderColor:g.systemError,backgroundColor:g.systemErrorMuted}),"",""),flexShrink:0,height:s,justifyContent:"center",rounded:!0,width:a,children:o(M,{as:"span",css:v(en({borderRadius:"100%",backgroundColor:g.foregroundText,"@media (forced-colors: active)":{backgroundColor:"MenuText"}},n&&{backgroundColor:g.borderMuted,"@media (forced-colors: active)":{backgroundColor:"GrayText"}}),"",""),height:"calc(100% - 0.5rem)",highContrastOutline:!0,width:"calc(100% - 0.5rem)"})})}var ei=["height","width"];function $n(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,t)}return r}function ni(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?$n(Object(r),!0).forEach(function(t){k(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):$n(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var ri=f.forwardRef(function(n,r){var t=n.height,i=n.width,a=_(n,ei);return o("input",ni({css:v({height:t,margin:0,opacity:0,width:i,"&:focus ~ span:first-of-type":I.outline,"~ span > span":{opacity:0},"&:checked ~ span > span":{opacity:1}},"",""),ref:r},a))}),ti=function(n){var r=n.children,t=n.disabled,i=n.htmlFor;return o(w,{alignItems:"flex-start",as:"label",color:"text",css:v({cursor:t?"not-allowed":"pointer"},"",""),gap:.5,htmlFor:i,inline:!0,children:r})},oi={sm:0,md:"0.2rem"};function ii(e){var n=e.children,r=e.disabled,t=e.size,i=oi[t];return o(C,{color:r?"muted":"text",css:v({paddingTop:i},"",""),flexGrow:1,children:n})}var ai=["children","disabled","invalid","name","required","size"];function Wn(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,t)}return r}function si(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?Wn(Object(r),!0).forEach(function(t){k(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Wn(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var _n=f.forwardRef(function(n,r){var t=n.children,i=n.disabled,a=n.invalid,s=n.name,c=n.required,d=n.size,l=d===void 0?"md":d,p=_(n,ai),h=li(p.id),m=Bt(),P=I.control[l],y=P.height,O=P.width,x=typeof a=="boolean"?a:m==null?void 0:m.invalid,S=typeof c=="boolean"?c:m==null?void 0:m.required,D=s||(m==null?void 0:m.name);return u(ti,{disabled:i,htmlFor:h,children:[u("span",{css:v({display:"inline-block",height:y,position:"relative",width:O},"",""),children:[o(ri,si({"aria-describedby":x?m==null?void 0:m.messageId:void 0,"aria-invalid":x||void 0,"aria-required":S,disabled:i,height:y,id:h,name:D,ref:r,type:"radio",width:O},p)),o(Jo,{disabled:i,invalid:x,size:l})]}),o(ii,{disabled:i,size:l,children:t})]})});function li(e){var n=X(e);return e||"radio-".concat(n)}function Nn(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,t)}return r}function qn(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?Nn(Object(r),!0).forEach(function(t){k(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Nn(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var ci=function(n){var r=n.disabled,t=n.indeterminate,i=n.invalid,a=n.size,s=I.control[a],c=s.width,d=s.height,l=s.borderWidth;return o(w,{alignItems:"center",as:"span",css:v(qn(qn({backgroundColor:g.backgroundBody,borderColor:g.border,borderStyle:"solid",borderWidth:l,color:g.foregroundText,inset:0,position:"absolute"},r&&{color:g.borderMuted,borderColor:g.borderMuted,backgroundColor:g.backgroundShade,"@media (forced-colors: active)":{borderColor:"GrayText",color:"GrayText"}}),i&&{borderColor:g.systemError,backgroundColor:g.systemErrorMuted}),"",""),flexShrink:0,height:d,justifyContent:"center",rounded:!0,width:c,children:t?o(Po,{size:a,weight:"bold"}):o(ko,{size:a,weight:"bold"})})},di=["height","width"];function Gn(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,t)}return r}function ui(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?Gn(Object(r),!0).forEach(function(t){k(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Gn(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var pi=f.forwardRef(function(n,r){var t=n.height,i=n.width,a=_(n,di);return o("input",ui({css:v({height:t,margin:0,opacity:0,width:i,"&:focus ~ span:first-of-type":I.outline,"~ span > svg":{opacity:0},"&:checked ~ span > svg, &:indeterminate ~ span > svg":{opacity:1}},"",""),ref:r},a))});function fi(e){var n=e.children,r=e.htmlFor,t=e.disabled;return o(w,{alignItems:"flex-start",as:"label",color:"text",css:v({cursor:t?"not-allowed":"pointer"},"",""),gap:.5,htmlFor:r,inline:!0,children:n})}var hi={sm:0,md:"0.2rem"};function gi(e){var n=e.children,r=e.disabled,t=e.size,i=hi[t];return o(C,{color:r?"muted":"text",css:v({paddingTop:i},"",""),flexGrow:1,children:n})}var mi=["checked","children","disabled","indeterminate","invalid","name","required","size"];function Hn(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,t)}return r}function bi(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?Hn(Object(r),!0).forEach(function(t){k(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Hn(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var nn=f.forwardRef(function(n,r){var t=n.checked,i=n.children,a=n.disabled,s=n.indeterminate,c=n.invalid,d=n.name,l=n.required,p=n.size,h=p===void 0?"md":p,m=_(n,mi),P=vi(m.id),y=f.useRef(null),O=Bt(),x=I.control[h],S=x.height,D=x.width,A=typeof c=="boolean"?c:O==null?void 0:O.invalid,E=typeof l=="boolean"?l:O==null?void 0:O.required,q=d||(O==null?void 0:O.name);f.useEffect(function(){y.current&&(y.current.indeterminate=!!s)},[s]);var G=s?!1:t;return u(fi,{disabled:a,htmlFor:P,children:[u("span",{css:v({display:"inline-block",height:S,position:"relative",width:D},"",""),children:[o(pi,bi({"aria-checked":s?"mixed":void 0,"aria-describedby":A?O==null?void 0:O.messageId:void 0,"aria-invalid":A||void 0,"aria-required":E,checked:G,disabled:a,height:S,id:P,name:q,ref:bt([r,y]),type:"checkbox",width:D},m)),o(ci,{disabled:a,indeterminate:s,invalid:A,size:h})]}),o(gi,{disabled:a,size:h,children:i})]})});function vi(e){var n=X(e);return e||"checkbox-".concat(n)}var yi=["label","hideOptionalLabel","required","hint","message","invalid","block","maxWidth","options","placeholder","id"];function Kn(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,t)}return r}function Q(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?Kn(Object(r),!0).forEach(function(t){k(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Kn(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var Oi=f.forwardRef(function(n,r){var t=n.label,i=n.hideOptionalLabel,a=n.required,s=n.hint,c=n.message,d=n.invalid,l=n.block,p=n.maxWidth,h=p===void 0?"md":p,m=n.options,P=n.placeholder,y=n.id,O=_(n,yi),x=xi({block:l});return o(Uo,{hideOptionalLabel:i,hint:s,id:y,invalid:d,label:t,maxWidth:h,message:c,required:a,children:function(D){return u(Pi,{block:l,maxWidth:h,children:[o("select",Q(Q(Q({css:x,ref:r},D),O),{},{children:o(ki,{options:m,placeholder:P})})),o(wi,{disabled:O.disabled})]})}})}),Pi=function(n){var r=n.children,t=n.block,i=n.maxWidth;return o("div",{css:v(Q({position:"relative"},!t&&{maxWidth:b.maxWidth.field[i]}),"",""),children:r})},ki=function(n){var r=n.options,t=n.placeholder;return u(f.Fragment,{children:[t?o("option",{value:"",children:t}):null,r.map(function(i){return"options"in i?o("optgroup",{disabled:i.disabled,label:i.label,children:i.options.map(function(a){var s=a.value,c=a.label,d=a.disabled;return o("option",{disabled:d,value:s,children:c},s)})},i.label):o("option",{disabled:i.disabled,value:i.value,children:i.label},i.value)})]})},wi=function(n){var r=n.disabled;return o(Sn,{css:v({position:"absolute",top:"50%",right:L(.75),transform:"translateY(-50%)",opacity:r?.3:void 0,pointerEvents:"none",color:g.foregroundAction},"","")})},xi=function(n){var r=n.block;return Q(Q(Q(Q({position:"relative",appearance:"none",boxSizing:"border-box",paddingLeft:L(1),paddingRight:"calc(".concat(b.borderWidth.lg,"px + 2.5rem)"),margin:0,background:g.backgroundBody,borderWidth:b.borderWidth.lg,borderStyle:"solid",borderColor:g.border,borderRadius:b.borderRadius,color:g.foregroundText,width:"100%",fontFamily:b.font.body},I.input.md),{},{lineHeight:b.lineHeight.default},I.truncate),r&&{maxWidth:"none",display:"block"}),{},{'&[aria-invalid="true"]':{backgroundColor:g.systemErrorMuted,borderColor:g.systemError},"&:disabled":{opacity:1,cursor:"not-allowed",borderColor:g.borderMuted,backgroundColor:g.backgroundShade,color:g.foregroundMuted},"&:focus":I.outline})};function Et(){var e=f.useState(!1),n=e[0],r=e[1];return f.useEffect(function(){r(!0)},[]),n}function Rt(e,n){var r=e||n;if(!r)throw new Error("onClose prop is required");return r}function Ci(e,n){return e||n}function Si(){var e=X();return{titleId:"drawer-".concat(e,"-title")}}function Ii(e){var n=e.actions,r=e.children,t=e.elementToFocusOnClose,i=e.onClose,a=e.title,s=Si(),c=s.titleId;return o(xn,{returnFocus:t?function(){return window.setTimeout(function(){return t.focus()},0),!1}:!0,children:u(w,{"aria-labelledby":c,"aria-modal":!0,background:"body",css:v(k({boxShadow:b.shadow.lg,inset:0,position:"fixed"},b.mediaQuery.max.xs,{overflowY:"auto"}),"",""),flexDirection:"column",highContrastOutline:!0,role:"dialog",children:[o(Mi,{children:o(Li,{id:c,children:a})}),o(Ai,{children:r}),n?o(Bi,{children:n}):null,o(Y,{css:ae({position:"fixed",zIndex:b.zIndex.elevated,top:"1.25rem",right:ht({xs:L(.75),md:L(1.5)})}),iconAfter:Ye,onClick:i,variant:"text",children:"Close"})]})})}function Mi(e){var n=e.children;return o(M,{background:"body",borderBottom:!0,css:v(k({position:"sticky",top:0,zIndex:b.zIndex.elevated},b.mediaQuery.min.sm,{position:"relative"}),"",""),paddingX:{xs:.75,md:1.5},paddingY:1,children:n})}var Di={name:"1r5gb7q",styles:"display:inline-block"};function Li(e){var n=e.children,r=e.id;return o(C,{as:"h2",css:Di,"data-autofocus":!0,focusRingFor:"keyboard",fontSize:"lg",fontWeight:"bold",id:r,lineHeight:"heading",tabIndex:-1,children:n})}function Ai(e){var n=e.children;return o(M,{background:"body",css:v(k({},b.mediaQuery.min.sm,{overflowY:"auto"}),"",""),flexGrow:1,paddingX:{xs:.75,md:1.5},paddingY:{xs:1,md:1.5},children:n})}var ji={name:"xdvdnl",styles:"margin-top:auto"};function Bi(e){var n=e.children;return o(M,{background:"body",borderTop:!0,css:ji,paddingX:{xs:.75,md:1.5},paddingY:1,children:n})}var Ei={md:"32rem",lg:"45rem"},Ri=function(n){var r=n.actions,t=n.children,i=n.elementToFocusOnClose,a=n.isOpen,s=a===void 0?!1:a,c=n.mutedOverlay,d=c===void 0?!1:c,l=n.onClose,p=n.onDismiss,h=n.title,m=n.width,P=m===void 0?"md":m,y=Rt(l,p),O=f.useRef(0),x=It(),S=f.useState(!0),D=S[0],A=S[1],E=Et();f.useEffect(function(){O.current=window.innerWidth-document.documentElement.clientWidth},[]),f.useEffect(function(){s&&A(!1)},[s]),f.useEffect(function(){var K=function(le){s&&le.code==="Escape"&&(le.preventDefault(),le.stopPropagation(),y())};return window.addEventListener("keydown",K),function(){return window.removeEventListener("keydown",K)}},[s,y]);var q=kn(E?s:!1),G=q.modalContainerRef;if(!E||!wn())return null;var H=s?!0:!D;return In.createPortal(u(f.Fragment,{children:[s?o(zi,{scrollbarWidth:O.current}):null,u("div",{ref:G,children:[o("div",{css:v({pointerEvents:"none",position:"absolute",opacity:s?1:0,transition:s?"none":"opacity ".concat(x?"1ms":"150ms")},"",""),"data-drawer":"transitioner",onTransitionEnd:function(){A(!0)}}),o(Ti,{isOpen:s,mutedOverlay:d,onClick:y,prefersReducedMotion:x}),o(M,{css:v({inset:0,marginLeft:"auto",position:"fixed",transform:"translateX(".concat(s?"0":"100%",")"),transition:"transform ".concat(x?"1ms":"150ms"," ease"),zIndex:b.zIndex.dialog},"",""),maxWidth:Ei[P],children:H&&o(Ii,{actions:r,elementToFocusOnClose:i,onClose:y,title:h,children:t})})]})]}),document.body)};function Ti(e){var n=e.isOpen,r=e.mutedOverlay,t=e.onClick,i=e.prefersReducedMotion;return o("div",{css:v({pointerEvents:n?"all":"none",position:"fixed",inset:0,backgroundColor:r?g.overlayMuted:g.overlay,opacity:n?1:0,transition:"opacity ".concat(i?"1ms":"150ms"," ease"),zIndex:b.zIndex.overlay},"",""),onClick:t})}function zi(e){var n=e.scrollbarWidth;return o(bn,{styles:v({html:{marginRight:n,scrollbarGutter:"auto"},body:{overflow:"hidden"}},"","")})}var Yn,Fi=f.forwardRef(function(n,r){var t=n.children;return o("div",{css:v({position:"fixed",top:0,left:0,bottom:0,right:0,backgroundColor:g.overlay,zIndex:b.zIndex.overlay,overflowY:"auto",animation:"".concat($i," ").concat(b.transition.duration,"ms ").concat(b.transition.timingFunction)},"",""),ref:r,children:t})}),$i=gt(Yn||(Yn=vt([`
  0% { opacity: 0; }
  100% { opacity: 1; }
`]))),Wi=function(n){var r=n.children,t=n.id;return o(C,{as:"h2","data-autofocus":!0,focusRingFor:"keyboard",fontSize:"lg",fontWeight:"bold",id:t,lineHeight:"heading",tabIndex:-1,children:r})},_i=function(){var n=X();return{titleId:"modal-".concat(n,"-title")}},Un,Ni="45rem",qi={name:"1duj7gx",styles:"align-self:flex-end"},Gi={name:"xdvdnl",styles:"margin-top:auto"},Hi=function(n){var r=n.actions,t=n.children,i=n.onClose,a=n.title,s=_i(),c=s.titleId;return o(xn,{returnFocus:!0,children:u(j,{"aria-labelledby":c,"aria-modal":!0,background:"body",css:v(k({boxShadow:b.shadow.lg,position:"relative",margin:"0 auto",minHeight:"100vh",animation:"".concat(Ki," ").concat(b.transition.duration,"ms ").concat(b.transition.timingFunction),"@supports (min-height: 100dvh)":{minHeight:"100dvh"}},b.mediaQuery.min.sm,{borderRadius:b.borderRadius,margin:"".concat(L(6)," auto ").concat(L(1)),minHeight:"auto"}),"",""),gap:1,highContrastOutline:!0,maxWidth:Ni,paddingX:{xs:.75,md:1.5},paddingY:{xs:1,md:1.5},role:"dialog",children:[o(Y,{"aria-label":"Close modal",css:qi,iconAfter:Ye,onClick:i,variant:"text",children:"Close"}),o(Wi,{id:c,children:a}),o(M,{children:t}),r?o(M,{css:Gi,paddingTop:1,children:r}):null]})})},Ki=gt(Un||(Un=vt([`
  0% { transform: translateY(1rem); }
	100% { transform: translateY(0); }
`]))),Tt=function(n){var r=n.actions,t=n.children,i=n.isOpen,a=i===void 0?!1:i,s=n.onClose,c=n.onDismiss,d=n.title,l=Rt(s,c);f.useEffect(function(){var m=function(y){a&&y.code==="Escape"&&(y.preventDefault(),y.stopPropagation(),l())};return window.addEventListener("keydown",m),function(){return window.removeEventListener("keydown",m)}},[l,a]);var p=kn(a),h=p.modalContainerRef;return!a||!wn()?null:In.createPortal(u(f.Fragment,{children:[o(Ui,{}),o(Fi,{ref:h,children:o(Hi,{actions:r,onClose:l,title:d,children:t})})]}),document.body)},Yi={name:"1sy9iaq",styles:"body{overflow:hidden;}"},Ui=function(){return o(bn,{styles:Yi})};function Qi(e){var n,r,t=Array.from(e.matchAll(new RegExp(/(\p{L})\p{L}+/,"gu")));if(!t.length)return"?";var i=((n=t.shift())===null||n===void 0?void 0:n[1])||"",a=((r=t.pop())===null||r===void 0?void 0:r[1])||"";return(i+a).toUpperCase()}function zt(e){var n=e.name,r=e.tone,t=r===void 0?"neutral":r,i=e.size,a=i===void 0?"md":i,s=e["aria-hidden"],c=e["aria-label"],d=Qi(n),l=Xi[t],p=Vi[a],h=p.size,m=p.fontSize;return o(w,{alignItems:"center","aria-hidden":s,"aria-label":c,as:"span",css:v({textDecoration:"none",height:"".concat(h,"rem"),width:"".concat(h,"rem"),borderRadius:"50%",borderStyle:"solid",borderWidth:b.borderWidth.sm,borderColor:l,color:l},"",""),flexShrink:0,fontSize:m,fontWeight:"bold",justifyContent:"center",children:d})}var Xi={neutral:g.foregroundMuted,action:g.foregroundAction},Vi={sm:{fontSize:"xs",size:2},md:{fontSize:"sm",size:2.5},lg:{fontSize:"md",size:3},xl:{fontSize:"lg",size:4},xxl:{fontSize:"xl",size:4.5},xxxl:{fontSize:"xl",size:5}},Ft=f.createContext(void 0);function ge(){var e=f.useContext(Ft);if(e===void 0)throw new Error("`AppLayoutContext` not found.");return e}function Zi(e,n){var r=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=Ji(e))||n&&e&&typeof e.length=="number"){r&&(e=r);var t=0,i=function(){};return{s:i,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(l){throw l},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a,s=!0,c=!1;return{s:function(){r=r.call(e)},n:function(){var l=r.next();return s=l.done,l},e:function(l){c=!0,a=l},f:function(){try{s||r.return==null||r.return()}finally{if(c)throw a}}}}function Ji(e,n){if(e){if(typeof e=="string")return Qn(e,n);var r={}.toString.call(e).slice(8,-1);return r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set"?Array.from(e):r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Qn(e,n):void 0}}function Qn(e,n){(n==null||n>e.length)&&(n=e.length);for(var r=0,t=Array(n);r<n;r++)t[r]=e[r];return t}var U="xl",Mn="16rem",ea=function(n,r){if(!r)return"";var t=n.flatMap(function(l){return Array.isArray(l)?l:[l].concat(Rn(l.items))}).flatMap(function(l){return"items"in l&&l.items!==void 0?[l].concat(Rn(l.items)):l}).map(function(l){return l&&"href"in l&&l.href!==void 0?l.href:""}),i,a="",s=Zi(t),c;try{for(s.s();!(c=s.n()).done;){var d=c.value;if(d===r){i=d;break}r!=null&&r.startsWith(d)&&d.length>a.length&&(a=d)}}catch(l){s.e(l)}finally{s.f()}return i||a};function na(e){var n=e.children,r=e.focusMode,t=r===void 0?!1:r,i=ln(!1),a=io(i,3),s=a[0],c=a[1],d=a[2];return o(Ft.Provider,{value:{focusMode:t,isMobileMenuOpen:s,openMobileMenu:c,closeMobileMenu:d},children:o(ra,{focusMode:t,children:n})})}function ra(e){var n=e.children,r=e.focusMode;return o("div",{css:ae({display:"grid",minHeight:"100vh",gridTemplateRows:"auto 1fr",gridTemplateColumns:ht(k({xs:"1fr"},U,r?"1fr":"".concat(Mn," 1fr")))}),children:n})}function Xn(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,t)}return r}function de(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?Xn(Object(r),!0).forEach(function(t){k(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Xn(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var ce=1.5,cn="3.75rem",ta={name:"1kn4ch8",styles:"margin-left:-0.5rem;margin-right:-0.5rem;overflow:hidden"};function oa(e){var n=e.badgeLabel,r=e.dividerPosition,t=e.logo,i=e.heading,a=e.hasAccountDetails,s=e.href,c=e.secondHref,d=e.secondLogo,l=e.subLine,p=vn();return t&&d?u(w,{css:ta,flexDirection:{xs:"column",lg:"row"},flexWrap:{xs:"wrap",xl:"nowrap"},gap:{xs:1,md:ce},inline:!0,padding:.5,children:[u(w,{css:v({marginRight:a&&r==="after"?L(ce):0},"",""),flexDirection:{xs:"column",sm:"row"},flexShrink:0,gap:ce,children:[o(w,{alignSelf:{xs:"start",sm:"center"},as:p,color:"text",css:v(de({" img, svg":{height:cn}},I.print.hidden),"",""),focusRingFor:"keyboard",href:s,children:t}),r==="between"&&o(rn,{dividerPosition:r}),o(w,de(de({alignSelf:{xs:"start",sm:"center"},as:c?p:"span",color:"text",css:v(de({" img, svg":{width:"100%"}},I.print.hidden),"",""),focusRingFor:"keyboard"},c&&{href:c}),{},{children:d}))]}),u(w,{css:r==="after"?k({},b.mediaQuery.min.lg,{marginLeft:"calc(-".concat(a?L(ce):0," - ").concat(b.borderWidth.sm,"px)")}):void 0,gap:ce,children:[r==="after"&&o(rn,{dividerPosition:r}),u(j,{as:p,color:"text",css:v({textDecoration:"none",":hover":I.underline},"",""),focusRingFor:"keyboard",href:s,justifyContent:"center",children:[u(w,{alignItems:"flex-start",gap:.5,children:[o(C,{fontSize:"lg",fontWeight:"bold",children:i}),n&&o(Vn,{children:n})]}),l&&o(C,{color:"muted",fontSize:"xs",children:l})]})]})]}):u(w,{alignItems:{xs:"flex-start",md:"center"},as:p,color:"text",css:v({textDecoration:"none","&:hover":I.underline,svg:{display:"block",height:cn,flexShrink:0}},"",""),flexDirection:{xs:"column",md:"row"},focusRingFor:"keyboard",gap:{xs:1,md:0},href:s,paddingY:.5,children:[t,o(rn,{singleLogo:!0}),u(w,{alignItems:"flex-start",flexDirection:"column",justifyContent:"center",maxWidth:b.maxWidth.bodyText,children:[u(w,{alignItems:"flex-start",gap:.5,children:[o(C,{fontSize:"lg",fontWeight:"bold",children:i}),n&&o(Vn,{children:n})]}),l&&o(C,{color:"muted",fontSize:"xs",children:l})]})]})}function Vn(e){var n=e.children;return o(M,{border:!0,borderWidth:"md",css:v({fontSize:"0.75rem",paddingTop:"2px",paddingBottom:"2px",borderColor:g.foregroundText,borderRadius:"2em"},"",""),fontWeight:"bold",paddingLeft:.5,paddingRight:.5,children:n})}var rn=function(n){var r=n.dividerPosition,t=n.singleLogo;return o(M,{borderLeft:!0,css:v(de({margin:t?"0 1rem":void 0},I.print.hidden),"",""),display:t?{xs:"none",md:"block"}:{xs:"none",sm:r==="between"?"block":void 0,lg:"block"},height:t?cn:void 0})},ia=["ref"];function Zn(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,t)}return r}function Jn(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?Zn(Object(r),!0).forEach(function(t){k(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Zn(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function aa(e){var n=e.children,r=e.name,t=e.secondaryText;return u(yt,{popoverOffset:-8,popoverPlacement:"bottom-end",children:[o(da,{name:r,secondaryText:t}),n]})}var sa={name:"d3v9zr",styles:"overflow:hidden"},la={name:"d3v9zr",styles:"overflow:hidden"},ca={name:"ozd7xs",styles:"flex-shrink:0"};function da(e){var n=e.name,r=e.secondaryText,t=Cn(),i=t.isMenuOpen,a=go(),s=a.ref,c=_(a,ia),d=f.useRef(0),l=Ke("sm");return f.useEffect(function(){d.current=window.innerWidth-document.documentElement.offsetWidth},[]),u(w,Jn(Jn({as:He,ref:s},c),{},{alignItems:"center",background:i?"shade":void 0,color:"action",css:ae({marginLeft:"auto",maxWidth:"calc(17.625rem - ".concat(d.current,"px)"),overflow:"hidden",svg:{transform:i?"rotate(180deg)":void 0,transition:l.transition},":hover":{backgroundColor:g.backgroundShade,"& > span:last-of-type > span:last-of-type":I.underline,svg:{transform:i?"rotate(180deg) ".concat(l.transform):l.transform}}}),focusRingFor:"keyboard",gap:1,justifyContent:"space-between",minHeight:"5.25rem",padding:1,children:[o(Pn,{children:"Account menu"}),u(w,{alignItems:"center","aria-hidden":!0,as:"span",css:sa,gap:.5,width:"100%",children:[o(zt,{name:n,size:"md",tone:"action"}),u(w,{as:"span",css:la,flexDirection:"column",width:"100%",children:[o(C,{color:"action",css:I.truncate,fontSize:"xs",fontWeight:"bold",children:n}),r?o(C,{color:"muted",css:I.truncate,fontSize:"xs",children:r}):null]})]}),o(Sn,{css:ca,size:"sm",weight:"bold"})]}))}function er(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,t)}return r}function tn(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?er(Object(r),!0).forEach(function(t){k(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):er(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var ua={name:"d3v9zr",styles:"overflow:hidden"};function $t(e){var n=e.name,r=e.secondaryText,t=e.href,i=e.dropdown,a=vn(),s=f.useRef(0);if(f.useEffect(function(){s.current=window.innerWidth-document.documentElement.offsetWidth},[]),i)return o(aa,{name:n,secondaryText:r,children:i});var c=!!t;return u(w,tn(tn({as:"span"},c&&{as:a,href:t,focusRingFor:"keyboard"}),{},{alignItems:"center",css:ae(tn({marginLeft:"auto",maxWidth:"calc(17.625rem - ".concat(s.current,"px)"),textDecoration:"none"},c&&{"&:hover":{"& > span > span":{textDecoration:"underline"}}})),flexShrink:0,gap:.5,minHeight:"5.25rem",textAlign:"right",children:[u(w,{as:"span",css:ua,flexDirection:"column",children:[o(C,{color:"action",css:I.truncate,fontSize:"xs",fontWeight:"bold",children:n}),r?o(C,{color:"muted",css:I.truncate,fontSize:"xs",children:r}):null]}),o(zt,{"aria-hidden":!0,name:n,size:"md",tone:"action"})]}))}function nr(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,t)}return r}function pa(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?nr(Object(r),!0).forEach(function(t){k(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):nr(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function fa(e){var n=e.accountDetails,r=ge(),t=r.focusMode,i=r.openMobileMenu;return u(w,{alignItems:"center",background:"body",display:k({xs:"flex"},U,"none"),flexWrap:"wrap",justifyContent:t?"flex-end":"space-between",paddingLeft:.75,paddingRight:n!=null&&n.dropdown?.75:b.containerPadding,children:[t?null:o(ha,{onClick:i}),n?o($t,pa({},n)):null]})}function ha(e){var n=e.onClick,r=ge(),t=r.isMobileMenuOpen,i=Ke();return u(w,{alignItems:"center","aria-expanded":t,"aria-haspopup":"dialog",as:He,color:"action",css:v({svg:{transition:i.transition},"&:hover":{backgroundColor:g.backgroundShade,textDecoration:"underline",svg:{transform:i.transform}}},"",""),flexDirection:"column",focusRingFor:"keyboard",fontSize:"xs",gap:.5,justifyContent:"center",minHeight:"5.25rem",onClick:n,paddingX:1,children:[o(wo,{"aria-hidden":!0}),o("span",{children:"Menu"})]})}function rr(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,t)}return r}function ga(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?rr(Object(r),!0).forEach(function(t){k(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):rr(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function ma(e){var n=e.accountDetails,r=e.background,t=r===void 0?"bodyAlt":r,i=e.badgeLabel,a=e.borderColor,s=a===void 0?"accent":a,c=e.dividerPosition,d=c===void 0?"after":c,l=e.heading,p=e.href,h=e.id,m=e.logo,P=e.palette,y=P===void 0?"dark":P,O=e.secondHref,x=e.secondLogo,S=e.subLine;return u(w,{as:"header",borderBottom:!0,borderBottomWidth:"xxl",borderColor:s,css:v(k({},b.mediaQuery.min[U],{gridColumnStart:1,gridColumnEnd:3}),"",""),flexDirection:"column",id:h,palette:y,children:[u(w,{alignItems:"center",background:t,gap:1,justifyContent:"space-between",paddingX:b.containerPadding,paddingY:.5,width:"100%",children:[o(oa,{badgeLabel:i,dividerPosition:d,hasAccountDetails:!!n,heading:l,href:p,logo:m,secondHref:O,secondLogo:x,subLine:S}),o(M,{display:k({xs:"none"},U,"flex"),children:n?o($t,ga({},n)):null})]}),o(fa,{accountDetails:n})]})}var ba=["endElement","icon","isActive","items","label","level"];function tr(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,t)}return r}function R(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?tr(Object(r),!0).forEach(function(t){k(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):tr(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var va=function e(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return function(t){var i,a,s="href"in t&&t.href===n,c=s||Dn(t.items,n);return R(R({},t),{},{isActive:c,items:c||(i=t.items)!==null&&i!==void 0&&i.length?t==null||(a=t.items)===null||a===void 0?void 0:a.map(e(n,r+1)):void 0,level:r+1})}},or=function(n){var r=n.activePath,t=n.background,i=n.items,a=n.subLevelVisible;return o(j,{"aria-label":"main",as:"nav",paddingBottom:1.5,children:o(j,{as:"ul",children:i.map(function(s,c){var d,l,p=c===0,h=(Array.isArray(s)?s:s.items).map(va(r)),m=Array.isArray(s)?!1:!!(!((d=s.options)===null||d===void 0)&&d.disableGroupPadding),P=i[c-1],y=P?Array.isArray(P)?!1:!!(!((l=P.options)===null||l===void 0)&&l.disableGroupPadding):!1;return u(f.Fragment,{children:[p?null:o(Oa,{disablePaddingBottom:m,disablePaddingTop:y}),h.map(function(O,x){var S=Dn(O.items,r),D=a==="always"||S;return o(Wt,{activePath:r,background:t,isActiveGroup:S,isOpen:D,item:O,subLevelVisible:a},x)})]},c)})})})},ya={name:"1ff36h2",styles:"flex-grow:1"};function Wt(e){var n=e.activePath,r=e.background,t=e.isActiveGroup,i=e.isOpen,a=e.item,s=e.subLevelVisible,c=vn(),d=a.endElement,l=a.icon,p=a.isActive,h=a.items,m=a.label,P=a.level,y=_(a,ba),O=ge(),x=O.closeMobileMenu,S=(h==null?void 0:h.length)||0,D=S>0&&s!=="always";if("href"in a){var A,E,q,G=a.href===n;return u(on,{background:r,hasEndElement:!!d,isActive:t,isCurrentPage:G,isOpen:i,level:a.level,onClick:x,children:[u(c,R(R({"aria-current":G?"page":void 0},y),{},{children:[l&&P===1&&o(l,{color:"inherit"}),P===2&&o("span",{"aria-hidden":!0,children:"–"}),o("span",{css:ya,children:m}),d,D&&(p?o(Sn,{"aria-hidden":!1,"aria-label":". Sub-level ".concat(S===1?"link":"links"," below."),size:"md"}):o(xo,{"aria-hidden":!1,"aria-label":". Has ".concat(S," sub-level ").concat(S===1?"link":"links","."),size:"md"}))]})),!!(!((A=a.items)===null||A===void 0)&&A.length)&&(i||G)&&o(j,{as:"ul",children:(E=a.items)===null||E===void 0||(q=E.map)===null||q===void 0?void 0:q.call(E,function(H){var K;return o(Wt,{activePath:n,background:r,isActiveGroup:!!p,isOpen:i,item:H,subLevelVisible:s},(K=H.label)===null||K===void 0?void 0:K.toString())})})]})}return"onClick"in a?o(on,{background:r,hasEndElement:!!d,isActive:!1,isCurrentPage:!1,isOpen:!1,onClick:x,children:u(He,R(R({},y),{},{children:[l?o(l,{color:"inherit"}):null,o("span",{children:m}),d]}))}):o(on,{background:r,hasEndElement:!1,isActive:!1,isCurrentPage:!1,isOpen:!1,children:o(j,{as:"span",gap:.25,children:m})})}function on(e){var n=e.background,r=e.children,t=e.hasEndElement,i=e.isCurrentPage,a=e.isActive,s=e.isOpen,c=e.level,d=e.onClick;return o("li",{css:v({"> a, > button, > span":{width:"100%",boxSizing:"border-box",wordBreak:"break-word",paddingTop:L(1),paddingBottom:L(1),paddingLeft:L(c===2?3:1.5),paddingRight:L(1),"& > svg":{flexShrink:0}},"> a, > button":R(R(R(R({position:"relative",display:"flex",alignItems:"center",gap:L(.75),color:a&&c!==2||i?g.foregroundText:g.foregroundAction},(a||i||s)&&{fontWeight:i?b.fontWeight.bold:b.fontWeight.normal,background:i?g.selectedMuted:void 0,"&::before":R(R(R({content:"''",position:"absolute",top:0,left:0,bottom:0,borderLeftStyle:"solid",borderLeftWidth:b.borderWidth.xl},i&&{borderLeftColor:g.selected}),!i&&a&&{borderLeftColor:g.borderMuted}),!i&&!a&&s&&{borderLeft:"none"})}),t&&{"& > :last-child":{marginLeft:"auto"}}),{},{"&:hover":k({background:g[n==="body"?"backgroundShade":"backgroundShadeAlt"],color:g.foregroundText},"& > span:nth-of-type(".concat(c,")"),I.underline)},ao),{},{":focus-visible":{zIndex:b.zIndex.elevated,outlineOffset:"-".concat(I.outline.outlineWidth),"&::before":{zIndex:-1}}}),"> span":{color:g.foregroundText},"> a":{textDecoration:"none"}},"",""),onClick:d,children:r})}function Oa(e){var n=e.disablePaddingTop,r=e.disablePaddingBottom;return o(M,{"aria-hidden":!0,as:"li",paddingBottom:r?0:1,paddingTop:n?0:1,children:o("hr",{css:v({boxSizing:"content-box",height:0,margin:0,overflow:"visible",border:"none",borderTopWidth:b.borderWidth.sm,borderTopStyle:"solid",borderColor:g.borderMuted,width:"100%"},"","")})})}function Dn(e,n){return e!=null&&e.length&&n?e.some(function(r){return"href"in r&&r.href===n||"items"in r&&Dn(r.items,n)}):!1}var Pa={name:"qvn77x",styles:"inset:0;overflow-y:auto;position:fixed"};function ka(e){var n=e.children,r=e.palette,t=ge(),i=t.isMobileMenuOpen,a=t.closeMobileMenu,s=It(),c=f.useState(!0),d=c[0],l=c[1],p=Et();f.useEffect(function(){i&&l(!1)},[i]),f.useEffect(function(){var y=function(x){x.code==="Escape"&&(x.preventDefault(),x.stopPropagation(),a())};return window.addEventListener("keydown",y),function(){return window.removeEventListener("keydown",y)}},[a]);var h=kn(p?i:!1),m=h.modalContainerRef;if(!p||!wn())return null;var P=i?!0:!d;return In.createPortal(u(yn,{children:[i&&o(wa,{}),u("div",{ref:m,children:[o("div",{css:v({pointerEvents:"none",position:"absolute",opacity:i?1:0,transition:i?"none":"opacity ".concat(s?"1ms":"150ms")},"",""),"data-app-layout-sidebar":"transitioner",onTransitionEnd:function(){l(!0)}}),o(xa,{isOpen:i,onClick:a,prefersReducedMotion:s}),o(M,{css:v({bottom:0,left:0,position:"fixed",top:0,transform:"translateX(".concat(i?"0":"-100%",")"),transition:"transform ".concat(s?"1ms":"150ms"," ease"),zIndex:b.zIndex.dialog},"",""),display:k({},U,"none"),width:Mn,children:P&&o(xn,{returnFocus:!0,children:u(M,{"aria-label":"Menu","aria-modal":!0,background:"shade",css:Pa,display:k({},U,"none"),palette:r,role:"dialog",children:[o(Ca,{onClick:a}),n]})})})]})]}),document.body)}function wa(){return o(bn,{styles:v(k({body:{overflow:"hidden"}},b.mediaQuery.min[U],{body:{overflow:"unset"}}),"","")})}function xa(e){var n=e.isOpen,r=e.onClick,t=e.prefersReducedMotion;return o("div",{css:v(k({backgroundColor:g.overlay,display:"block",inset:0,opacity:n?1:0,pointerEvents:n?"all":"none",position:"fixed",transition:"opacity ".concat(t?"1ms":"150ms"," ease"),zIndex:b.zIndex.overlay},b.mediaQuery.min[U],{display:"none"}),"",""),onClick:r})}function Ca(e){var n=e.onClick,r=Ke();return o(w,{alignItems:"center",borderBottom:!0,borderColor:"muted",flexShrink:0,paddingLeft:1,children:u(w,{alignItems:"center",as:He,color:"action",css:v({svg:{transition:r.transition},":focus":{outlineOffset:"-".concat(I.outline.outlineWidth)},":hover svg":{transform:r.transform}},"",""),flexDirection:"column",focusRingFor:"keyboard",fontSize:"xs",gap:.5,onClick:n,padding:1,children:[o(Ye,{}),o("span",{"aria-hidden":!0,children:"Close"}),o(Pn,{children:"Close menu"})]})})}function ir(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,t)}return r}function be(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?ir(Object(r),!0).forEach(function(t){k(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ir(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function ar(e){var n=e.activePath,r=e.background,t=r===void 0?"bodyAlt":r,i=e.items,a=e.palette,s=e.subLevelVisible,c=s===void 0?"whenActive":s,d=ge(),l=d.focusMode,p=ea(i,n),h={activePath:p,items:i,subLevelVisible:c};return u(f.Fragment,{children:[o(j,{background:t,borderColor:"muted",borderRight:!0,css:v(k({display:"none",width:Mn},b.mediaQuery.min[U],{display:l?"none":"flex"}),"",""),flexGrow:1,gap:1,palette:a,children:o(or,be(be({},h),{},{background:t}))}),o(ka,{palette:a,children:o(or,be(be({},h),{},{background:"bodyAlt"}))})]})}var Sa={name:"ovk77c",styles:"min-width:0"};function Ia(e){var n=e.children;return o(w,{css:Sa,flexDirection:"column",children:n})}var Ma={name:"xdvdnl",styles:"margin-top:auto"};function Da(e){var n=e.background,r=n===void 0?"body":n,t=e.children,i=e.id,a=e.maxWidth,s=e.palette;return o(M,{as:"footer",background:r,css:Ma,id:i,palette:s,children:o(po,{maxWidth:a,children:o(j,{borderColor:"muted",borderTop:!0,borderTopWidth:"xl",gap:1.5,paddingY:3,width:"100%",children:t})})})}function La(){return o("hr",{"aria-hidden":!0,css:v({boxSizing:"content-box",height:0,margin:0,overflow:"visible",border:"none",borderTopWidth:1,borderTopStyle:"solid",borderColor:g.borderMuted,width:"100%"},"","")})}const W={account:"/account",profile:"/account/profile",dashboard:"/account/dashboard",inbox:"/account/messages",linkBusiness:"/account/link-a-business",acceptInvite:"/account/invitation/accept"},Aa=[{href:"/about",label:"About"},{href:"/about/contact-us",label:"Contact us"},{href:"/help",label:"Help"},{href:"https://www.agriculture.gov.au/about/commitment/accessibility",rel:"external",label:"Accessibility"},{href:"https://www.agriculture.gov.au/about/disclaimer",rel:"external",label:"Disclaimer"},{href:"/privacy",label:"Privacy"}],V={dashboard:{label:"Dashboard",icon:So,href:W.dashboard},establishments:{label:"Establishments",icon:Ct,href:"/establishments"},intelligence:{label:"Data and Insights",icon:Io,href:"/intelligence"},compliance:{label:"Compliance",icon:Mo,href:"/compliance"},quotas:{label:"Quotas",icon:St,href:"/quota"},exportDocumentation:{label:"Export documentation",icon:Do,href:"/export-documentation"},licences:{label:"Licences",icon:Lo,href:"/licences"}},_t=e=>{var n,r,t;return[V.dashboard,V.establishments,V.intelligence,V.compliance,...(n=e==null?void 0:e.features)!=null&&n.quotas?[V.quotas]:[],...(r=e==null?void 0:e.features)!=null&&r.exportDocumentation?[V.exportDocumentation]:[],...(t=e==null?void 0:e.features)!=null&&t.licences?[V.licences]:[]]};function ja({onSignOutClick:e,features:n}){return[_t({features:n}),[{label:u(w,{as:"span",alignItems:"center",gap:.5,children:["Help",o(ho,{}),o(Co,{weight:"regular",size:"sm"})]}),icon:wt,href:"/help",target:"_blank",rel:"noopener"}],[{label:"Sign out",onClick:e,icon:xt}]]}const Ba=(e,n)=>{var i;if(!n)return;let r,t;for(const a of e){if(a.href===n){r=a;break}n.startsWith(a.href)&&a.href.length>(((i=t==null?void 0:t.href)==null?void 0:i.length)??0)&&(t=a)}return r||t},Ea=e=>n=>n===!0||n==e,Nt=(e,n)=>r=>Ea(e)(r)?n:{},Ra=Nt("header",{palette:"light",borderColor:"selected"}),sr=Nt("sidebar",{background:"body"});var Ta={neutral:g.foregroundMuted,action:g.foregroundAction};function lr(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,t)}return r}function za(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?lr(Object(r),!0).forEach(function(t){k(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):lr(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var Fa=function(n){var r=n.value,t=n.max,i=n.tone,a=n["aria-hidden"],s=Ta[i];return o(C,{alignItems:"center","aria-hidden":a,css:v(za({color:g.backgroundBody,backgroundColor:s,minWidth:L(1.5),borderRadius:L(.75)},mt.exactColor),"",""),display:"inline-flex",fontSize:"sm",height:L(1.5),highContrastOutline:!0,justifyContent:"center",lineHeight:"nospace",paddingX:.5,rounded:!0,children:t===void 0||r<=t?r:"".concat(t,"+")})};function $a(e){const{menuId:n}=Cn(),r=X();return e||`${n}-item-${r}`}const cr=so(function({as:n,children:r,onClick:t,id:i,...a},s){const c=f.useRef(null),{activeDescendantId:d,closeMenu:l}=Cn(),p=$a(i),h=p===d;f.useEffect(()=>{var P;h&&((P=c.current)==null||P.scrollIntoView({block:"nearest"}))},[h]);function m(P){t==null||t(P),l()}return o(w,{alignItems:"center",as:n,background:"body",css:{textDecoration:"none",...h&&{backgroundColor:g.backgroundShade,...I.underline},"&:hover":{backgroundColor:g.backgroundShade,...I.underline}},focusRingFor:"keyboard",gap:1,id:p,justifyContent:"space-between",link:!0,onClick:m,padding:1,ref:bt([s,c]),role:"menuitem",tabIndex:-1,width:"18rem",...a,children:r})}),Wa=e=>{var n;return((n=e==null?void 0:e.linkedBusinesses)==null?void 0:n.map(r=>{var t;return{...r,selected:((t=e==null?void 0:e.selectedBusiness)==null?void 0:t.partyId)===r.partyId,setSelected:()=>e.setSelectedBusiness(r)}}))??[]},_a=e=>o(yn,{children:u(Oo,{label:"Businesses",children:[e.businesses.map(n=>o(yo,{checked:n.selected??!1,secondaryText:n.formattedPartyExternalId,onClick:e.onSelectBusiness(n),children:n.partyDisplayName},n.partyId)),e!=null&&e.preventAddBusiness?null:o(cr,{children:o(Fe,{block:!0,variant:"secondary",href:W.linkBusiness,children:"Add a business"})}),o(cr,{children:o(Fe,{block:!0,variant:"secondary",href:W.acceptInvite,children:"Accept an invite"})})]})}),Na=e=>u(Ot,{palette:"light",children:[o(Je,{href:W.profile,icon:Ao,children:"Account settings"}),o(Je,{href:W.inbox,icon:jo,endElement:typeof e.unreadMessageCount=="number"&&e.unreadMessageCount>0?u("span",{children:[o(Fa,{tone:"action",value:e.unreadMessageCount,max:99,"aria-hidden":!0}),u(Pn,{children:[", ",e.unreadMessageCount," unread"]})]}):void 0,children:"Inbox"}),o(ee,{children:o(Je,{href:"/help/account",icon:wt,children:"Help"})}),o(mo,{}),o(bo,{onClick:e.onSignOutClick,icon:xt,children:"Sign out"})]}),qa=e=>{const n=t=>()=>{var i;return(i=t==null?void 0:t.setSelected)==null?void 0:i.call(t)},r=Wa(e.businessDetails);return o(Ot,{palette:"light",children:o(_a,{businesses:r,onSelectBusiness:n,preventAddBusiness:e.preventAddBusiness})})},Ga=(e,n)=>((e==null?void 0:e.linkedBusinesses)??[]).length===0||(e==null?void 0:e.selectedBusiness)===void 0?[{options:{disableGroupPadding:!0},items:[{label:u(f.Fragment,{children:[n?null:o(Fe,{block:!0,variant:"secondary",href:W.linkBusiness,children:"Add a business"}),o(Fe,{block:!0,variant:"secondary",href:W.acceptInvite,children:"Accept an invite"})]})}]}]:[{options:{disableGroupPadding:!0},items:[{label:o(f.Fragment,{children:u(yt,{children:[u(vo,{css:{display:"flex",justifyContent:"space-between"},children:[o(C,{as:"p",fontWeight:"bold",fontSize:"xs",children:e.selectedBusiness.partyDisplayName}),o(C,{as:"p",color:"muted",fontSize:"xs",children:e.selectedBusiness.formattedPartyExternalId})]}),o(qa,{businessDetails:e,preventAddBusiness:n})]})})}]}];var Ha=["children"],Ka=["as","children","direction","className"];function dr(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,t)}return r}function We(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?dr(Object(r),!0).forEach(function(t){k(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):dr(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var qt=function(n){var r=n.children,t=_(n,Ha);return o(Ya,We(We({as:$e},t),{},{children:r}))},Ya=function(n){var r=n.as,t=n.children,i=n.direction,a=n.className,s=_(n,Ka),c=Ua[i],d=i==="left",l=Ke("sm");return u(w,We(We({alignItems:"center",as:r,className:a,css:v({alignSelf:"flex-start",svg:{transition:l.transition},":hover svg":{transform:l.transform}},"",""),focusRingFor:"keyboard",fontFamily:"body",fontWeight:"normal",gap:.5,inline:!0,link:!0},s),{},{children:[d?o(c,{size:"sm"}):null,t,d?null:o(c,{size:"sm"})]}))},Ua={up:Bo,right:Eo,down:Ro,left:To};function Qa(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.focusOnMount,r=e.focusOnUpdate,t=e.forwardedRef,i=f.useRef(null),a=t||i;return f.useEffect(function(){var s,c;!r&&!n||!("current"in a)||Array.isArray(r)&&r.filter(Boolean).length===0||a==null||(s=a.current)===null||s===void 0||(c=s.focus)===null||c===void 0||c.call(s)},[r]),a}var Xa=function(n){var r=n.as,t=r===void 0?"h2":r,i=n.children,a=n.hasDismissButton,s=n.hasCloseButton;return o(C,{as:t,css:ae(k({marginRight:s||a?"2.5rem":void 0},b.mediaQuery.min.sm,{marginRight:"0"})),fontSize:"lg",fontWeight:"bold",lineHeight:"heading",children:i})},Va=function(n){var r,t=n.onClick;return o(Y,{"aria-label":"Close",css:ae((r={position:"absolute",top:"1.5rem",right:"1.5rem",flexShrink:0},k(r,b.mediaQuery.min.sm,{position:"relative",top:"unset",right:"unset"}),k(r,"& > span:first-of-type",k({display:"none"},b.mediaQuery.min.sm,{display:"block"})),r)),iconAfter:Ye,onClick:t,variant:"text",children:"Close"})};function ur(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,t)}return r}function Za(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?ur(Object(r),!0).forEach(function(t){k(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ur(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var Ja=f.forwardRef(function(n,r){var t=n.id,i=n.focusOnMount,a=n.focusOnUpdate,s=n.role,c=n.children,d=n.onClose,l=n.onDismiss,p=n.title,h=n.tone,m=n.tabIndex,P=Qa({focusOnMount:i,focusOnUpdate:a,forwardedRef:r}),y=Ci(d,l),O=es[h],x=O.fg,S=O.bg,D=O.icon;return u(w,{css:v({backgroundColor:S,position:"relative"},"",""),focusRingFor:"all",highContrastOutline:!0,id:t,ref:P,role:s,rounded:!0,tabIndex:m??(i||a?-1:void 0),children:[o(w,{alignItems:"center",css:v(Za({borderTopLeftRadius:b.borderRadius,borderBottomLeftRadius:b.borderRadius,backgroundColor:x,color:g.backgroundBody},mt.exactColor),"",""),padding:.5,children:D}),u(w,{alignItems:"flex-start",css:v(k({marginRight:y&&!p?"3rem":void 0},b.mediaQuery.min.sm,{marginRight:"0"}),"",""),flexGrow:1,gap:1,padding:1.5,children:[u(w,{alignItems:"flex-start",flexDirection:"column",flexGrow:1,gap:1,children:[p?f.isValidElement(p)?p:o(Xa,{hasCloseButton:!!y,children:p}):null,c]}),y?o(Va,{onClick:y}):null]})]})}),es={success:{fg:g.systemSuccess,bg:g.systemSuccessMuted,icon:o(zo,{"aria-hidden":"false","aria-label":"Success"})},error:{fg:g.systemError,bg:g.systemErrorMuted,icon:o(kt,{"aria-hidden":"false","aria-label":"Error"})},info:{fg:g.systemInfo,bg:g.systemInfoMuted,icon:o(Fo,{"aria-hidden":"false","aria-label":"Information"})},warning:{fg:g.systemWarning,bg:g.systemWarningMuted,icon:o($o,{"aria-hidden":"false","aria-label":"Warning"})}};const ns=["IP1","IP2","IP3","IP4"],Gt=Array.from(ns),rs=e=>{const n=[];return e.forEach(r=>n.unshift(r)),n},dn=new Set(Gt),pr=new Set(rs(Gt)),ts={descriptor:"Unknown"},os={IP1:{level:"IP1",descriptor:"Basic"},IP2:{level:"IP2",descriptor:"Standard"},IP3:{level:"IP3",descriptor:"Strong"},IP4:{level:"IP4",descriptor:"Strong"}},is=e=>dn.has(e),_e=(e,n)=>{const r=e&&is(e)?os[e]:ts;return n!=null&&n.short||r.level===void 0?r.descriptor:`${r.descriptor} (${r.level})`},Ht=(e,n)=>Array.from(e).filter(r=>n.has(r)),Kt=(e,n)=>Array.from(e).filter(r=>!n.has(r)),ue=e=>{const n=new Set(e??[]);return[...Ht(pr,n),...Kt(n,pr)][0]},Yt=e=>{const n=new Set(e??[]);return[...Ht(dn,n),...Kt(n,dn)][0]},fr=e=>e===void 0?[]:Array.isArray(e)?e:[e],as=(e,n)=>{if(n===void 0||e.length===0)return!0;const r=new Set(n);return e.some(t=>r.has(t))},hr=e=>((e==null?void 0:e.trim())??"")==="",Ut=()=>o(ee,{children:u(No,{title:"Need more help?",children:[u(C,{children:["Email"," ",o($e,{href:"mailto:exportservice@aff.gov.au",children:"exportservice@aff.gov.au"})]}),u(C,{children:["Call ",o($e,{href:"tel:1800571125",children:"1800 571 125"}),", Monday to Friday, 9 am to 5 pm AEST"]})]})}),ss=e=>o($,{children:u(j,{gap:3,children:[o(ee,{children:o(qt,{href:W.dashboard,direction:"left",children:"Back to Dashboard"})}),u(N,{children:[o("h1",{children:"Single names in the Export Service"}),o("p",{children:"If you are legally known by a single name, you can use it to access an Export Service account. Other services we offer may not accept a single name and you will need to use a given and family name."}),o("p",{children:"Contact support if you need more help."})]}),o(Pt,{}),o(Ut,{})]})}),ls=e=>{const n=_e(e.providedProofingLevel),r=_e(e.requiredProofingLevel,{short:!0});return o($,{children:u(j,{gap:3,children:[o(ee,{children:o(qt,{href:W.dashboard,direction:"left",children:"Back"})}),u(N,{children:[o("h1",{children:e.activeApp??"Use a higher identity strength"}),o(M,{className:co,children:u(Ja,{tone:"info",title:"You can't access this feature",children:["Sign in with myID and use a ‘",r,"’ identity strength or higher to access this feature."]})}),o("h2",{children:"Review your profile and settings"}),u("p",{children:["Your current identity strength is ",n,". To access this feature you must add myID to your account from your"," ",o($e,{href:"TODO",children:"Profile and settings"}),", then sign in."]})]}),o(Pt,{}),o(Ut,{})]})})},Qt={MissingName:ss,ProofMissing:ls},cs=({claims:e,errorComponents:n,requiredProofingLevel:r,authDetails:t,activeApp:i,children:a})=>{const s=n.MissingGivenName??n.MissingName,c=n.MissingFamilyName??n.MissingName,d=n.ProofMissing,l=fr(r),p=fr(t==null?void 0:t.proofingLevel);if(!as(l,p)){const h=Yt(l),m=ue(p);return o(d,{requiredProofingLevel:h,providedProofingLevel:m,activeApp:i})}return e===void 0?o(f.Fragment,{children:a}):hr(e==null?void 0:e.given_name)?o(s,{children:a}):hr(e==null?void 0:e.family_name)?o(c,{children:a}):o(f.Fragment,{children:a})},ds=Object.values,us={IP1:{AL1:"urn:id.gov.au:tdif:acr:ip1:cl1",AL2:"urn:id.gov.au:tdif:acr:ip1:cl2",AL3:"urn:id.gov.au:tdif:acr:ip1:cl3",PlusAL1:"urn:id.gov.au:tdif:acr:ip1p:cl1",PlusAL2:"urn:id.gov.au:tdif:acr:ip1p:cl2",PlusAL3:"urn:id.gov.au:tdif:acr:ip1p:cl3"},IP2:{AL2:"urn:id.gov.au:tdif:acr:ip2:cl2",AL3:"urn:id.gov.au:tdif:acr:ip2:cl3",PlusAL2:"urn:id.gov.au:tdif:acr:ip2p:cl2",PlusAL3:"urn:id.gov.au:tdif:acr:ip2p:cl3"},IP3:{AL2:"urn:id.gov.au:tdif:acr:ip3:cl2",AL3:"urn:id.gov.au:tdif:acr:ip3:cl3"},IP4:{AL3:"urn:id.gov.au:tdif:acr:ip4:cl3"}},ps=["IP1","IP2","IP3","IP4"],fs=Object.fromEntries(ps.map((e,n,r)=>[e,r.slice(0,n)])),ve=e=>Object.fromEntries(ds(us[e]).map(n=>[n,e])),Te={...ve("IP1"),...ve("IP2"),...ve("IP3"),...ve("IP4")},hs=e=>e in Te,gs=e=>e===void 0?[]:Array.isArray(e)?e:[e],ze=(e,n)=>{const t=gs(e.AARM_acr).flatMap(i=>hs(i)?n!=null&&n.requireExactProofingMatch?[Te[i]]:[Te[i],...fs[Te[i]]]:n!=null&&n.removeUnknownACRs?[]:[i]);return Array.from(new Set(t))},ms=e=>(e==null?void 0:e.credentialType)==="myGovID"?"myID":(e==null?void 0:e.credentialType)==="B2CLocalUser"?"B2CLocalUser":void 0,bs=(e,n)=>e?{provider:ms(e),proofingLevel:ze(e,n)}:void 0,Xt=f.createContext(void 0),Vt=()=>{var e;return(e=f.useContext(Xt))==null?void 0:e.onSignOutClick};function ne({activePath:e,children:n,focusMode:r=!1,handleSignOut:t,mainContentId:i="main-content",unreadMessageCount:a,userName:s,businessDetails:c,claims:d,errorComponents:l,features:p,requiredProofingLevel:h,authDetails:m,sidebarItems:P,internal:y}){var En;const O=f.useMemo(()=>new Date().getFullYear(),[]),x=f.useContext(lo),[S,D,A]=ln(!1),[E,q,G]=ln(!1),H=D,K=t,jn=f.useMemo(()=>_t({features:p}),[p]),le=bs(d),me=m??le,Ze=Ba(jn,e),Bn=(me==null?void 0:me.provider)==="B2CLocalUser",oo=f.useMemo(()=>[...Ga(c,Bn),...ja({onSignOutClick:H,features:p})],[H,c,Bn,p]);return o(na,{focusMode:r,children:o(Xt.Provider,{value:{onSignOutClick:H},children:u(ee,{children:[o(ma,{href:"/account",heading:"Export Service",subLine:"Supporting Australian agricultural exports",badgeLabel:"Beta",logo:o(Wo,{}),accountDetails:s?{href:W.account,name:s,secondaryText:((En=c==null?void 0:c.selectedBusiness)==null?void 0:En.partyDisplayName)??"My account",dropdown:c?o(Na,{unreadMessageCount:a,onSignOutClick:H}):void 0}:void 0,...Ra(y)}),P?o(ee,{...x,children:o(ar,{activePath:e,items:P,...sr(y)})}):o(ar,{activePath:e,items:oo,...sr(y)}),u(Ia,{children:[o(ee,{...x,children:o("main",{id:i,tabIndex:-1,css:{"&:focus":{outline:"none"}},children:o(cs,{claims:d,authDetails:me,requiredProofingLevel:h,errorComponents:{...Qt,...l},activeApp:Ze==null?void 0:Ze.label,children:n})})}),u(Da,{children:[o("nav",{"aria-label":"footer",children:o(_o,{links:Aa,horizontal:!0})}),o(La,{}),o(C,{fontSize:"xs",maxWidth:b.maxWidth.bodyText,children:"We acknowledge the traditional owners of country throughout Australia and recognise their continuing connection to land, waters and culture. We pay our respects to their Elders past, present and emerging."}),u(C,{fontSize:"xs",maxWidth:b.maxWidth.bodyText,children:["© ",O," Department of Agriculture, Fisheries and Forestry"]})]})]}),o(Tt,{isOpen:S,onClose:A,title:"Do you want to sign out?",actions:u(On,{children:[o(Y,{onClick:async()=>{q(),await K(),G(),A()},loading:E,disabled:E,children:"Sign out"}),o(Y,{variant:"secondary",onClick:A,children:"Cancel"})]}),children:o(C,{as:"p",children:"This will end your current session with the Export Service."})})]})})})}var Zt=Symbol.for("immer-nothing"),gr=Symbol.for("immer-draftable"),T=Symbol.for("immer-state");function F(e,...n){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var oe=Object.getPrototypeOf;function ie(e){return!!e&&!!e[T]}function re(e){var n;return e?Jt(e)||Array.isArray(e)||!!e[gr]||!!((n=e.constructor)!=null&&n[gr])||Qe(e)||Xe(e):!1}var vs=Object.prototype.constructor.toString();function Jt(e){if(!e||typeof e!="object")return!1;const n=oe(e);if(n===null)return!0;const r=Object.hasOwnProperty.call(n,"constructor")&&n.constructor;return r===Object?!0:typeof r=="function"&&Function.toString.call(r)===vs}function Ne(e,n){Ue(e)===0?Reflect.ownKeys(e).forEach(r=>{n(r,e[r],e)}):e.forEach((r,t)=>n(t,r,e))}function Ue(e){const n=e[T];return n?n.type_:Array.isArray(e)?1:Qe(e)?2:Xe(e)?3:0}function un(e,n){return Ue(e)===2?e.has(n):Object.prototype.hasOwnProperty.call(e,n)}function eo(e,n,r){const t=Ue(e);t===2?e.set(n,r):t===3?e.add(r):e[n]=r}function ys(e,n){return e===n?e!==0||1/e===1/n:e!==e&&n!==n}function Qe(e){return e instanceof Map}function Xe(e){return e instanceof Set}function Z(e){return e.copy_||e.base_}function pn(e,n){if(Qe(e))return new Map(e);if(Xe(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);const r=Jt(e);if(n===!0||n==="class_only"&&!r){const t=Object.getOwnPropertyDescriptors(e);delete t[T];let i=Reflect.ownKeys(t);for(let a=0;a<i.length;a++){const s=i[a],c=t[s];c.writable===!1&&(c.writable=!0,c.configurable=!0),(c.get||c.set)&&(t[s]={configurable:!0,writable:!0,enumerable:c.enumerable,value:e[s]})}return Object.create(oe(e),t)}else{const t=oe(e);if(t!==null&&r)return{...e};const i=Object.create(t);return Object.assign(i,e)}}function Ln(e,n=!1){return Ve(e)||ie(e)||!re(e)||(Ue(e)>1&&(e.set=e.add=e.clear=e.delete=Os),Object.freeze(e),n&&Object.entries(e).forEach(([r,t])=>Ln(t,!0))),e}function Os(){F(2)}function Ve(e){return Object.isFrozen(e)}var Ps={};function te(e){const n=Ps[e];return n||F(0,e),n}var fe;function no(){return fe}function ks(e,n){return{drafts_:[],parent_:e,immer_:n,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function mr(e,n){n&&(te("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=n)}function fn(e){hn(e),e.drafts_.forEach(ws),e.drafts_=null}function hn(e){e===fe&&(fe=e.parent_)}function br(e){return fe=ks(fe,e)}function ws(e){const n=e[T];n.type_===0||n.type_===1?n.revoke_():n.revoked_=!0}function vr(e,n){n.unfinalizedDrafts_=n.drafts_.length;const r=n.drafts_[0];return e!==void 0&&e!==r?(r[T].modified_&&(fn(n),F(4)),re(e)&&(e=qe(n,e),n.parent_||Ge(n,e)),n.patches_&&te("Patches").generateReplacementPatches_(r[T].base_,e,n.patches_,n.inversePatches_)):e=qe(n,r,[]),fn(n),n.patches_&&n.patchListener_(n.patches_,n.inversePatches_),e!==Zt?e:void 0}function qe(e,n,r){if(Ve(n))return n;const t=n[T];if(!t)return Ne(n,(i,a)=>yr(e,t,n,i,a,r)),n;if(t.scope_!==e)return n;if(!t.modified_)return Ge(e,t.base_,!0),t.base_;if(!t.finalized_){t.finalized_=!0,t.scope_.unfinalizedDrafts_--;const i=t.copy_;let a=i,s=!1;t.type_===3&&(a=new Set(i),i.clear(),s=!0),Ne(a,(c,d)=>yr(e,t,i,c,d,r,s)),Ge(e,i,!1),r&&e.patches_&&te("Patches").generatePatches_(t,r,e.patches_,e.inversePatches_)}return t.copy_}function yr(e,n,r,t,i,a,s){if(ie(i)){const c=a&&n&&n.type_!==3&&!un(n.assigned_,t)?a.concat(t):void 0,d=qe(e,i,c);if(eo(r,t,d),ie(d))e.canAutoFreeze_=!1;else return}else s&&r.add(i);if(re(i)&&!Ve(i)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;qe(e,i),(!n||!n.scope_.parent_)&&typeof t!="symbol"&&Object.prototype.propertyIsEnumerable.call(r,t)&&Ge(e,i)}}function Ge(e,n,r=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&Ln(n,r)}function xs(e,n){const r=Array.isArray(e),t={type_:r?1:0,scope_:n?n.scope_:no(),modified_:!1,finalized_:!1,assigned_:{},parent_:n,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let i=t,a=An;r&&(i=[t],a=he);const{revoke:s,proxy:c}=Proxy.revocable(i,a);return t.draft_=c,t.revoke_=s,c}var An={get(e,n){if(n===T)return e;const r=Z(e);if(!un(r,n))return Cs(e,r,n);const t=r[n];return e.finalized_||!re(t)?t:t===an(e.base_,n)?(sn(e),e.copy_[n]=mn(t,e)):t},has(e,n){return n in Z(e)},ownKeys(e){return Reflect.ownKeys(Z(e))},set(e,n,r){const t=ro(Z(e),n);if(t!=null&&t.set)return t.set.call(e.draft_,r),!0;if(!e.modified_){const i=an(Z(e),n),a=i==null?void 0:i[T];if(a&&a.base_===r)return e.copy_[n]=r,e.assigned_[n]=!1,!0;if(ys(r,i)&&(r!==void 0||un(e.base_,n)))return!0;sn(e),gn(e)}return e.copy_[n]===r&&(r!==void 0||n in e.copy_)||Number.isNaN(r)&&Number.isNaN(e.copy_[n])||(e.copy_[n]=r,e.assigned_[n]=!0),!0},deleteProperty(e,n){return an(e.base_,n)!==void 0||n in e.base_?(e.assigned_[n]=!1,sn(e),gn(e)):delete e.assigned_[n],e.copy_&&delete e.copy_[n],!0},getOwnPropertyDescriptor(e,n){const r=Z(e),t=Reflect.getOwnPropertyDescriptor(r,n);return t&&{writable:!0,configurable:e.type_!==1||n!=="length",enumerable:t.enumerable,value:r[n]}},defineProperty(){F(11)},getPrototypeOf(e){return oe(e.base_)},setPrototypeOf(){F(12)}},he={};Ne(An,(e,n)=>{he[e]=function(){return arguments[0]=arguments[0][0],n.apply(this,arguments)}});he.deleteProperty=function(e,n){return he.set.call(this,e,n,void 0)};he.set=function(e,n,r){return An.set.call(this,e[0],n,r,e[0])};function an(e,n){const r=e[T];return(r?Z(r):e)[n]}function Cs(e,n,r){var i;const t=ro(n,r);return t?"value"in t?t.value:(i=t.get)==null?void 0:i.call(e.draft_):void 0}function ro(e,n){if(!(n in e))return;let r=oe(e);for(;r;){const t=Object.getOwnPropertyDescriptor(r,n);if(t)return t;r=oe(r)}}function gn(e){e.modified_||(e.modified_=!0,e.parent_&&gn(e.parent_))}function sn(e){e.copy_||(e.copy_=pn(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var Ss=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(n,r,t)=>{if(typeof n=="function"&&typeof r!="function"){const a=r;r=n;const s=this;return function(d=a,...l){return s.produce(d,p=>r.call(this,p,...l))}}typeof r!="function"&&F(6),t!==void 0&&typeof t!="function"&&F(7);let i;if(re(n)){const a=br(this),s=mn(n,void 0);let c=!0;try{i=r(s),c=!1}finally{c?fn(a):hn(a)}return mr(a,t),vr(i,a)}else if(!n||typeof n!="object"){if(i=r(n),i===void 0&&(i=n),i===Zt&&(i=void 0),this.autoFreeze_&&Ln(i,!0),t){const a=[],s=[];te("Patches").generateReplacementPatches_(n,i,a,s),t(a,s)}return i}else F(1,n)},this.produceWithPatches=(n,r)=>{if(typeof n=="function")return(s,...c)=>this.produceWithPatches(s,d=>n(d,...c));let t,i;return[this.produce(n,r,(s,c)=>{t=s,i=c}),t,i]},typeof(e==null?void 0:e.autoFreeze)=="boolean"&&this.setAutoFreeze(e.autoFreeze),typeof(e==null?void 0:e.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){re(e)||F(8),ie(e)&&(e=Is(e));const n=br(this),r=mn(e,void 0);return r[T].isManual_=!0,hn(n),r}finishDraft(e,n){const r=e&&e[T];(!r||!r.isManual_)&&F(9);const{scope_:t}=r;return mr(t,n),vr(void 0,t)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,n){let r;for(r=n.length-1;r>=0;r--){const i=n[r];if(i.path.length===0&&i.op==="replace"){e=i.value;break}}r>-1&&(n=n.slice(r+1));const t=te("Patches").applyPatches_;return ie(e)?t(e,n):this.produce(e,i=>t(i,n))}};function mn(e,n){const r=Qe(e)?te("MapSet").proxyMap_(e,n):Xe(e)?te("MapSet").proxySet_(e,n):xs(e,n);return(n?n.scope_:no()).drafts_.push(r),r}function Is(e){return ie(e)||F(10,e),to(e)}function to(e){if(!re(e)||Ve(e))return e;const n=e[T];let r;if(n){if(!n.modified_)return n.base_;n.finalized_=!0,r=pn(e,n.scope_.immer_.useStrictShallowCopy_)}else r=pn(e,!0);return Ne(r,(t,i)=>{eo(r,t,to(i))}),n&&(n.finalized_=!1),r}var z=new Ss,ye=z.produce;z.produceWithPatches.bind(z);z.setAutoFreeze.bind(z);z.setUseStrictShallowCopy.bind(z);z.applyPatches.bind(z);z.createDraft.bind(z);z.finishDraft.bind(z);const J=[{partyId:1,partyDisplayName:"Jefferson PTY LTD",roleDisplayName:"Role 1",formattedPartyExternalId:"ABN: 89 790 756 100",someExtraInfo:"our component allows this field but does not use it at all"},{partyId:2,partyDisplayName:"Metaweb",roleDisplayName:"Role 2",formattedPartyExternalId:"ABN: 89 790 756 100",someExtraInfo:"our component allows this field but does not use it at all"},{partyId:3,partyDisplayName:"Fresh Produce Australia",roleDisplayName:"Role 3",formattedPartyExternalId:"ABN: 92 635 964 018",someExtraInfo:"our component allows this field but does not use it at all"},{partyId:4,partyDisplayName:"Fresh Produce Australia",roleDisplayName:"Role 3",formattedPartyExternalId:"ABN: 92 635 964 018",someExtraInfo:"our component allows this field but does not use it at all"}],qs={title:"AppLayout",component:ne,parameters:{layout:"fullscreen"},render:function(n){return u(f.Fragment,{children:[o(se,{links:[{href:"#main-content",label:"Skip to main content"}]}),o(ne,{...n,children:o($,{children:o(N,{children:o("h1",{children:"Page heading"})})})})]})}},Ms=e=>new Promise(n=>setTimeout(n,e)),B=async()=>{await Ms(2e3),alert("You have been signed out.")},Oe={args:{focusMode:!1,userName:"Toto Wolff",unreadMessageCount:6,activePath:"/",handleSignOut:B}},Pe={args:{focusMode:!0,userName:"Toto Wolff",unreadMessageCount:6,activePath:"/",handleSignOut:B}},ke={args:{activePath:"/",focusMode:!1,handleSignOut:B},render:function(n){const[r,t]=f.useState(!1);return f.useEffect(()=>{setTimeout(()=>{t(!0)},1e3)},[]),u(f.Fragment,{children:[o(se,{links:[{href:"#main-content",label:"Skip to main content"}]}),o(ne,{...n,...r?{userName:"Toto Wolff",unreadMessageCount:6}:{},children:o($,{children:o(N,{children:o("h1",{children:"Page heading"})})})})]})}},we={args:{focusMode:!1,userName:"Toto Wolff",unreadMessageCount:6,activePath:"/",handleSignOut:B},render:function(n){const[r,t]=f.useState({linkedBusinesses:J,selectedBusiness:J[1]}),[i,a]=f.useState({provider:"myID"}),s=d=>t(l=>({...l,selectedBusiness:d})),c=d=>()=>{const l=J.slice(0,d),p=l[0];t({selectedBusiness:p,linkedBusinesses:l})};return u(f.Fragment,{children:[o(se,{links:[{href:"#main-content",label:"Skip to main content"}]}),o(ne,{...n,businessDetails:{...r,setSelectedBusiness:s},authDetails:i,children:o($,{children:u(j,{gap:3,children:[o(N,{children:o("h1",{children:"Business dropdown configuration"})}),o(pe,{label:"Number of linked businesses",block:!0,hideOptionalLabel:!0,children:Array.from(new Array(J.length+1).keys()).map(d=>{var l;return u(_n,{checked:((l=r==null?void 0:r.linkedBusinesses)==null?void 0:l.length)===d,onChange:c(d),children:[d," ",d===0?"business":"businesses"]},d)})}),o(pe,{label:"Auth provider",block:!0,hideOptionalLabel:!0,children:["myID","B2CLocalUser"].map(d=>o(_n,{checked:(i==null?void 0:i.provider)===d,onChange:()=>a(l=>({...l,provider:d})),children:d},d))})]})})})]})}},xe={args:{focusMode:!1,userName:"Toto Wolff",unreadMessageCount:6,activePath:"/",handleSignOut:B},render:function(n){const r=J,[t,i]=f.useState(r[1]),[a,s]=f.useState(),c=()=>s(void 0),d={linkedBusinesses:r,selectedBusiness:t,setSelectedBusiness:s};return u(f.Fragment,{children:[o(se,{links:[{href:"#main-content",label:"Skip to main content"}]}),u(ne,{...n,businessDetails:d,children:[o(Tt,{isOpen:a!==void 0,onClose:c,title:"Are you sure you want to leave this page?",actions:u(On,{children:[o(Y,{onClick:()=>{a!==void 0&&i(a),s(void 0)},children:"Leave this page"}),o(Y,{variant:"secondary",onClick:c,children:"Stay on this page"})]}),children:o(C,{as:"p",children:"You will lose all changes made since your last save."})}),o($,{children:o(j,{gap:3,children:o(N,{children:u("h1",{children:["Active business: ",t==null?void 0:t.partyDisplayName]})})})})]})]})}},Ce={args:{focusMode:!1,userName:"Toto Wolff",unreadMessageCount:6,activePath:"/",handleSignOut:B},render:function(n){const r={linkedBusinesses:J,selectedBusiness:J[0],setSelectedBusiness:()=>{}},t=()=>{const i=Vt();return o(Y,{onClick:i,children:"Sign out"})};return u(f.Fragment,{children:[o(se,{links:[{href:"#main-content",label:"Skip to main content"}]}),o(ne,{...n,businessDetails:r,children:o($,{children:u(j,{gap:3,children:[u(N,{children:[o("h1",{children:"Sign out button"}),u("p",{children:["You can trigger the sign out modal using the"," ",o("code",{children:"useOpenSignOutModal"})," hook."]})]}),o(On,{children:o(t,{})})]})})})]})}},Se={args:{focusMode:!1,userName:"Toto Wolff",unreadMessageCount:6,activePath:"/",features:{quotas:!0,exportDocumentation:!0,licences:!0}}},Ie={args:{focusMode:!1,unreadMessageCount:6,activePath:"/",handleSignOut:B,claims:{given_name:"given_name",family_name:"family_name"}}},Me={args:{focusMode:!1,unreadMessageCount:6,activePath:"/",handleSignOut:B,claims:{family_name:"family_name"}}},De={args:{focusMode:!1,unreadMessageCount:6,activePath:"/",handleSignOut:B,claims:{family_name:"family_name"},errorComponents:{MissingName:e=>(f.useEffect(()=>{console.log("report this situation to an analytics provider here")},[]),o(Qt.MissingName,{...e}))}}},Le={args:{focusMode:!1,unreadMessageCount:6,activePath:"/",handleSignOut:B,claims:{family_name:"family_name"},errorComponents:{MissingName:e=>o($,{children:u(N,{children:[o("p",{children:"Our app works just fine even without a generic name."}),o("hr",{}),e.children]})})}}},Ae={args:{focusMode:!1,unreadMessageCount:6,activePath:"/",handleSignOut:B,claims:{family_name:"family_name"},errorComponents:{MissingGivenName:e=>{const n=Vt();return o($,{children:u(N,{children:[o("p",{children:"Our app works just fine even without a given name."}),o("hr",{}),e.children,o(Y,{onClick:n,children:"Sign out"})]})})}}}},je={args:{focusMode:!1,unreadMessageCount:6,activePath:"/",handleSignOut:B,claims:{given_name:"given_name",family_name:"family_name",AARM_acr:"urn:id.gov.au:tdif:acr:ip1:cl1"},requiredProofingLevel:"IP2"}},Be={args:{focusMode:!1,unreadMessageCount:6,activePath:"/",handleSignOut:B},render:function(n){const r=["IP1","IP2","IP3","IP4"],t=["urn:id.gov.au:tdif:acr:ip1:cl1","urn:id.gov.au:tdif:acr:ip1:cl2","urn:id.gov.au:tdif:acr:ip1:cl3","urn:id.gov.au:tdif:acr:ip1p:cl1","urn:id.gov.au:tdif:acr:ip1p:cl2","urn:id.gov.au:tdif:acr:ip1p:cl3","urn:id.gov.au:tdif:acr:ip2:cl2","urn:id.gov.au:tdif:acr:ip2:cl3","urn:id.gov.au:tdif:acr:ip2p:cl2","urn:id.gov.au:tdif:acr:ip2p:cl3","urn:id.gov.au:tdif:acr:ip3:cl2","urn:id.gov.au:tdif:acr:ip3:cl3","urn:id.gov.au:tdif:acr:ip4:cl3"],[i,a]=f.useState(!0),[s,c]=f.useState({method:"urn",claims:{given_name:"given_name",family_name:"family_name",AARM_acr:[t[0]]},authDetails:{proofingLevel:["IP1"]},requiredProofingLevel:["IP2"]}),d=l=>{const p=l.kind==="max"?"#df185a":"#287be0",h=l!=null&&l.extraText?` (${l.extraText})`:"";return l!=null&&l.active?o(M,{css:{position:"relative",padding:"4px",border:`2px dashed ${p}`,"& + &":{marginTop:"1em"},":after":{position:"absolute",right:0,bottom:"120%",content:`"${l.kind==="max"?"maximum provided proof":"minimum required proof"}${h}"`,color:p,fontSize:"0.8em"}},children:l.children}):o(yn,{children:l.children})};return u(f.Fragment,{children:[o(se,{links:[{href:"#main-content",label:"Skip to main content"}]}),u(M,{css:{position:"relative"},children:[o(M,{css:{border:"2px solid red",backgroundColor:"#fec0ff",position:"fixed",transform:"rotate(90deg)",transformOrigin:"top right",fontSize:"1.2em",padding:".4em 1em",top:"55vh",right:0,zIndex:99,cursor:"pointer"},onClick:()=>a(!0),children:"show config options"}),o(ne,{...n,requiredProofingLevel:s.requiredProofingLevel,...s.method==="claims"?{claims:s.claims}:{authDetails:s.authDetails},children:o($,{children:u(j,{gap:1.5,children:[o(C,{as:"p",fontSize:"lg",children:"You made it!"}),o(C,{as:"p",children:"Your proofing level means that you can see this page."})]})})})]}),o(Ri,{title:"Config",isOpen:i,onClose:()=>a(!1),children:u(j,{gap:1.5,children:[o(Oi,{label:"Proofing method",required:!0,options:[{value:"authDetails",label:"AuthDetails"},{value:"claims",label:"Claims"}],onChange:l=>c(ye(p=>{p.method=l.target.value}))}),s.method==="claims"?o(pe,{label:"Provided ACR",block:!0,hideOptionalLabel:!0,children:t.map(l=>o(d,{kind:"max",active:ue(ze({AARM_acr:l}))===ue(ze(s.claims)),extraText:ue(ze(s.claims)),children:o(nn,{checked:new Set(s.claims.AARM_acr).has(l),onChange:p=>c(ye(h=>{p.target.checked?h.claims.AARM_acr.push(l):h.claims.AARM_acr.splice(h.claims.AARM_acr.indexOf(l),1)})),children:l},l)},l))}):o(pe,{label:"Provided proofing level",block:!0,hideOptionalLabel:!0,children:r.map(l=>o(d,{kind:"max",active:ue(s.authDetails.proofingLevel)===l,children:o(nn,{checked:new Set(s.authDetails.proofingLevel).has(l),onChange:p=>c(ye(h=>{p.target.checked?h.authDetails.proofingLevel.push(l):h.authDetails.proofingLevel.splice(h.authDetails.proofingLevel.indexOf(l),1)})),children:l},l)},l))}),o(pe,{label:"Required proofing level",block:!0,hideOptionalLabel:!0,children:r.map(l=>o(d,{kind:"min",active:Yt(s.requiredProofingLevel)===l,children:o(nn,{checked:new Set(s.requiredProofingLevel).has(l),onChange:p=>c(ye(h=>{p.target.checked?h.requiredProofingLevel.push(l):h.requiredProofingLevel.splice(h.requiredProofingLevel.indexOf(l),1)})),children:l},l)},l))})]})})]})}},Ee={args:{focusMode:!1,unreadMessageCount:6,activePath:"/",handleSignOut:B,authDetails:{proofingLevel:"IP1"},requiredProofingLevel:"IP3",errorComponents:{ProofMissing:e=>o($,{children:u(N,{children:[u("p",{children:["Your proofing level is insufficient at"," ",_e(e.providedProofingLevel),". Please fix it."]}),u("p",{children:["you should provide at least '",_e(e.requiredProofingLevel),"'"]})]})})}}},Re={args:{focusMode:!1,userName:"Toto Wolff",unreadMessageCount:6,activePath:"/custom",handleSignOut:B,sidebarItems:[{items:[{label:"Custom sidenav",href:"/custom",icon:Ct},{label:"Other item",href:"/other",icon:St}]}],internal:"sidebar"}};var Or,Pr,kr;Oe.parameters={...Oe.parameters,docs:{...(Or=Oe.parameters)==null?void 0:Or.docs,source:{originalSource:`{
  args: {
    focusMode: false,
    userName: 'Toto Wolff',
    unreadMessageCount: 6,
    activePath: '/',
    handleSignOut
  }
}`,...(kr=(Pr=Oe.parameters)==null?void 0:Pr.docs)==null?void 0:kr.source}}};var wr,xr,Cr;Pe.parameters={...Pe.parameters,docs:{...(wr=Pe.parameters)==null?void 0:wr.docs,source:{originalSource:`{
  args: {
    focusMode: true,
    userName: 'Toto Wolff',
    unreadMessageCount: 6,
    activePath: '/',
    handleSignOut
  }
}`,...(Cr=(xr=Pe.parameters)==null?void 0:xr.docs)==null?void 0:Cr.source}}};var Sr,Ir,Mr;ke.parameters={...ke.parameters,docs:{...(Sr=ke.parameters)==null?void 0:Sr.docs,source:{originalSource:`{
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
}`,...(Mr=(Ir=ke.parameters)==null?void 0:Ir.docs)==null?void 0:Mr.source}}};var Dr,Lr,Ar;we.parameters={...we.parameters,docs:{...(Dr=we.parameters)==null?void 0:Dr.docs,source:{originalSource:`{
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
}`,...(Ar=(Lr=we.parameters)==null?void 0:Lr.docs)==null?void 0:Ar.source}}};var jr,Br,Er;xe.parameters={...xe.parameters,docs:{...(jr=xe.parameters)==null?void 0:jr.docs,source:{originalSource:`{
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
}`,...(Er=(Br=xe.parameters)==null?void 0:Br.docs)==null?void 0:Er.source}}};var Rr,Tr,zr;Ce.parameters={...Ce.parameters,docs:{...(Rr=Ce.parameters)==null?void 0:Rr.docs,source:{originalSource:`{
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
}`,...(zr=(Tr=Ce.parameters)==null?void 0:Tr.docs)==null?void 0:zr.source}}};var Fr,$r,Wr;Se.parameters={...Se.parameters,docs:{...(Fr=Se.parameters)==null?void 0:Fr.docs,source:{originalSource:`{
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
}`,...(Wr=($r=Se.parameters)==null?void 0:$r.docs)==null?void 0:Wr.source}}};var _r,Nr,qr;Ie.parameters={...Ie.parameters,docs:{...(_r=Ie.parameters)==null?void 0:_r.docs,source:{originalSource:`{
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
}`,...(qr=(Nr=Ie.parameters)==null?void 0:Nr.docs)==null?void 0:qr.source}}};var Gr,Hr,Kr;Me.parameters={...Me.parameters,docs:{...(Gr=Me.parameters)==null?void 0:Gr.docs,source:{originalSource:`{
  args: {
    focusMode: false,
    unreadMessageCount: 6,
    activePath: '/',
    handleSignOut,
    claims: {
      family_name: 'family_name'
    }
  }
}`,...(Kr=(Hr=Me.parameters)==null?void 0:Hr.docs)==null?void 0:Kr.source}}};var Yr,Ur,Qr;De.parameters={...De.parameters,docs:{...(Yr=De.parameters)==null?void 0:Yr.docs,source:{originalSource:`{
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
}`,...(Qr=(Ur=De.parameters)==null?void 0:Ur.docs)==null?void 0:Qr.source}}};var Xr,Vr,Zr;Le.parameters={...Le.parameters,docs:{...(Xr=Le.parameters)==null?void 0:Xr.docs,source:{originalSource:`{
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
}`,...(Zr=(Vr=Le.parameters)==null?void 0:Vr.docs)==null?void 0:Zr.source}}};var Jr,et,nt;Ae.parameters={...Ae.parameters,docs:{...(Jr=Ae.parameters)==null?void 0:Jr.docs,source:{originalSource:`{
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
}`,...(nt=(et=Ae.parameters)==null?void 0:et.docs)==null?void 0:nt.source}}};var rt,tt,ot;je.parameters={...je.parameters,docs:{...(rt=je.parameters)==null?void 0:rt.docs,source:{originalSource:`{
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
}`,...(ot=(tt=je.parameters)==null?void 0:tt.docs)==null?void 0:ot.source}}};var it,at,st;Be.parameters={...Be.parameters,docs:{...(it=Be.parameters)==null?void 0:it.docs,source:{originalSource:`{
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
}`,...(st=(at=Be.parameters)==null?void 0:at.docs)==null?void 0:st.source}}};var lt,ct,dt;Ee.parameters={...Ee.parameters,docs:{...(lt=Ee.parameters)==null?void 0:lt.docs,source:{originalSource:`{
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
}`,...(dt=(ct=Ee.parameters)==null?void 0:ct.docs)==null?void 0:dt.source}}};var ut,pt,ft;Re.parameters={...Re.parameters,docs:{...(ut=Re.parameters)==null?void 0:ut.docs,source:{originalSource:`{
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
}`,...(ft=(pt=Re.parameters)==null?void 0:pt.docs)==null?void 0:ft.source}}};const Gs=["Basic","FocusMode","ClientSideFetch","BusinessDropdown","BusinessDropdownModalInterrupt","SignOutModalTrigger","OptionalAppsEnabled","Claims","ClaimsMissingName","ClaimsMissingNameAnalytics","ClaimsMissingNameComponent","ClaimsMissingGivenNameComponent","RequiredProofingPaywall","RequiredProofingPaywallOptions","RequiredProofingPaywallCustomComponent","CustomSidenav"];export{Oe as Basic,we as BusinessDropdown,xe as BusinessDropdownModalInterrupt,Ie as Claims,Ae as ClaimsMissingGivenNameComponent,Me as ClaimsMissingName,De as ClaimsMissingNameAnalytics,Le as ClaimsMissingNameComponent,ke as ClientSideFetch,Re as CustomSidenav,Pe as FocusMode,Se as OptionalAppsEnabled,je as RequiredProofingPaywall,Ee as RequiredProofingPaywallCustomComponent,Be as RequiredProofingPaywallOptions,Ce as SignOutModalTrigger,Gs as __namedExportsOrder,qs as default};
