import{j as a,c as v,a as D,g as h,b as u,B as L,t as I,m as $,_ as ne,p as _,G as Nt,h as Et,i as qt,F as zt}from"./Box-37a490cb.esm-DXji3-i8.js";import{r as m}from"./index-BAneEnFJ.js";import{P as q}from"./ag.ds-next-react-prose.esm-B_o3MCwm.js";import{m as Wt,c as K,P as B,a as Ct}from"./ag.ds-next-react-button.esm-C0OmCdy1.js";import{g as $t,u as Gt,b as Yt,a as R,A as Ht,c as kt,d as Ut,e as Je,h as te,f as Re,l as Kt,S as H,M as Xt}from"./AppLayoutBreadcrumbs-CwXFQu8H.js";import{S as T,T as F,F as N}from"./Icon-29f3c11e.esm-BSN4Axrc.js";import{e as Q,a as Jt,c as Qt,F as Zt}from"./ag.ds-next-react-dropdown-menu.esm-CAWEWLRv.js";import{b as Vt,c as er,d as nr,a as tr,C as Qe,F as xt,P as rr,B as or,H as ar}from"./ag.ds-next-react-icon.esm-BooAXek9.js";import{r as ir}from"./index-exioagFi.js";import{a as sr}from"./ag.ds-next-react-heading.esm-5FxBVPiO.js";import"./jsx-runtime-D_zvdyIk.js";import"./_commonjsHelpers-CqkleIqs.js";import"./CoreProvider-eb9f00f4.esm-DzsGG-Bs.js";import"./ag.ds-next-react-daff-branding.esm-DaD6RIlf.js";import"./ag.ds-next-react-link-list.esm-DHd_RfQb.js";import"./ag.ds-next-react-text-link.esm-DVkxptUq.js";import"./ag.ds-next-react-callout.esm-CNsPQSsz.js";import"./index-pL_YbQPu.js";var Ze="data-conditional-field-container",lr="data-grouped-fields",cr=function(n){var t=n.hideOptionalLabel,r=n.required,o=n.secondaryLabel;return m.useMemo(function(){return[o,t||r?null:"(optional)"].filter(Boolean).join(" ")},[r,o,t])};function Ve(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function en(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?Ve(Object(t),!0).forEach(function(r){D(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Ve(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var St=function(n){var t,r=n.children,o=n.invalid,s=n.id;return a(T,en(en({},D({},Te,!0)),{},{borderLeft:o,borderLeftWidth:"xl",css:v((t={borderLeftColor:o?h.systemError:void 0},D(t,"[".concat(Ze,"] &[").concat(Te,"]"),{marginLeft:o?"calc(-".concat($(1)," - ").concat(I.borderWidth.xl,"px)"):void 0,position:"relative"}),D(t,"[".concat(Ze,"] [").concat(lr,"] &[").concat(Te,"]:not(:first-of-type)"),{marginLeft:0}),t),"",""),gap:.5,id:s,paddingLeft:o?1:void 0,children:r}))},Te="data-field-container",wt=function(n){var t=n.as,r=t===void 0?"label":t,o=n.children,s=n.className,i=n.id,c=n.htmlFor,d=n.required,l=n.secondaryLabel,f=n.hideOptionalLabel,p=cr({hideOptionalLabel:f,required:d,secondaryLabel:l});return u(L,{as:r,className:s,htmlFor:c,id:i,children:[a(F,{as:"span",fontWeight:"bold",children:o}),p?u(F,{as:"span",color:"muted",children:[" ",p]}):null]})},It=function(n){var t=n.children,r=n.id;return a(F,{color:"muted",display:"block",id:r,children:t})},dr={name:"4zleql",styles:"display:block"},Mt=function(n){var t=n.children,r=n.id;return u(N,{alignItems:"center",gap:.5,children:[a(L,{flexShrink:0,children:a(Vt,{"aria-hidden":"false","aria-label":"Error",color:"error",css:dr,size:"md"})}),a(F,{color:"error",display:"block",fontWeight:"bold",id:r,children:t})]})},ur=function(n){var t=n.children,r=n.hint,o=n.id,s=n.invalid,i=n.label,c=n.labelId,d=n.maxWidth,l=n.secondaryLabel,f=n.hideOptionalLabel,p=n.message,b=n.required,C=pr(o),y=C.fieldId,g=C.hintId,O=C.messageId,k=mr({required:b,fieldId:y,message:p,messageId:O,hint:r,hintId:g,invalid:s});return u(St,{invalid:s,children:[a(wt,{hideOptionalLabel:f,htmlFor:y,id:c,required:b,secondaryLabel:l,children:i}),r?a(It,{id:g,children:r}):null,p&&s?a(Mt,{id:O,children:p}):null,typeof t=="function"?t(k):t,d?a("div",{"aria-hidden":!0,css:v({height:0,marginTop:"-".concat($(.5)),maxWidth:I.maxWidth.field[d],overflow:"hidden","::after":{content:'"---------------------------------------------------------------"'}},"","")}):null]})},pr=function(n){var t=Q(n),r=n||"field-".concat(t),o="field-".concat(t,"-hint"),s="field-".concat(t,"-message");return{fieldId:r,hintId:o,messageId:s}},mr=function(n){var t=n.required,r=n.fieldId,o=n.message,s=n.messageId,i=n.hint,c=n.hintId,d=n.invalid,l=[o?s:null,i?c:null].filter(Boolean),f=l.length?l.join(" "):void 0;return{"aria-required":!!t,"aria-invalid":!!d,"aria-describedby":f,id:r}},Dt=m.createContext(void 0),Bt=function(){return m.useContext(Dt)};function fr(e){var n=e.children,t=e.invalid,r=e.messageId,o=e.name,s=e.required,i=Q();return a(Dt.Provider,{value:{invalid:t,name:o||i,messageId:r,required:s},children:n})}var W=function(n){var t=n.block,r=t===void 0?!1:t,o=n.children,s=n.hint,i=n.id,c=n.invalid,d=c===void 0?!1:c,l=n.label,f=n.hideOptionalLabel,p=n.message,b=n.name,C=n.required,y=C===void 0?!1:C,g=hr(i),O=g.groupId,k=g.hintId,w=g.messageId,j=[d&&p?w:null,s?k:null].filter(Boolean),U=j.length?j.join(" "):void 0;return a(fr,{invalid:d,messageId:d&&p?w:void 0,name:b,required:y,children:a(St,{id:O,invalid:d,children:u(L,{"aria-describedby":U,as:"fieldset",children:[l?a(wt,{as:"legend",hideOptionalLabel:f,required:y,children:l}):null,u(T,{css:v({marginTop:l?$(.5):void 0},"",""),gap:.5,children:[s?a(It,{id:k,children:s}):null,p&&d?a(Mt,{id:w,children:p}):null,a(N,{flexDirection:r?"column":"row",flexWrap:r?void 0:"wrap",gap:1,paddingTop:.5,width:"100%",children:o})]})]})})})},hr=function(n){var t=Q(n),r=n||"control-group-".concat(t),o="control-group-".concat(t,"-hint"),s="control-group-".concat(t,"-message");return{groupId:r,hintId:o,messageId:s}};function nn(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function Ne(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?nn(Object(t),!0).forEach(function(r){D(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):nn(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function gr(e){var n=e.disabled,t=e.invalid,r=e.size,o=_.control[r],s=o.width,i=o.height,c=o.borderWidth;return a(N,{alignItems:"center",as:"span",css:v(Ne(Ne({backgroundColor:h.backgroundBody,borderColor:h.border,borderRadius:"100%",borderStyle:"solid",borderWidth:c,inset:0,position:"absolute"},n&&{color:h.borderMuted,borderColor:h.borderMuted,backgroundColor:h.backgroundShade,"@media (forced-colors: active)":{borderColor:"GrayText",color:"GrayText"}}),t&&{borderColor:h.systemError,backgroundColor:h.systemErrorMuted}),"",""),flexShrink:0,height:i,justifyContent:"center",rounded:!0,width:s,children:a(L,{as:"span",css:v(Ne({borderRadius:"100%",backgroundColor:h.foregroundText,"@media (forced-colors: active)":{backgroundColor:"MenuText"}},n&&{backgroundColor:h.borderMuted,"@media (forced-colors: active)":{backgroundColor:"GrayText"}}),"",""),height:"calc(100% - 0.5rem)",highContrastOutline:!0,width:"calc(100% - 0.5rem)"})})}var br=["height","width"];function tn(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function vr(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?tn(Object(t),!0).forEach(function(r){D(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):tn(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var yr=m.forwardRef(function(n,t){var r=n.height,o=n.width,s=ne(n,br);return a("input",vr({css:v({height:r,margin:0,opacity:0,verticalAlign:"middle",width:o,"&:focus ~ span:first-of-type":_.outline,"~ span > span":{opacity:0},"&:checked ~ span > span":{opacity:1}},"",""),ref:t},s))}),Pr=function(n){var t=n.children,r=n.disabled,o=n.htmlFor;return a(N,{alignItems:"flex-start",as:"label",color:"text",css:v({cursor:r?"not-allowed":"pointer"},"",""),gap:.5,htmlFor:o,inline:!0,children:t})},Or={sm:0,md:"0.2rem"};function Cr(e){var n=e.children,t=e.disabled,r=e.size,o=Or[r];return a(F,{color:t?"muted":"text",css:v({paddingTop:o},"",""),flexGrow:1,children:n})}var kr=["children","disabled","invalid","name","required","size"];function rn(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function xr(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?rn(Object(t),!0).forEach(function(r){D(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):rn(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var on=m.forwardRef(function(n,t){var r=n.children,o=n.disabled,s=n.invalid,i=n.name,c=n.required,d=n.size,l=d===void 0?"md":d,f=ne(n,kr),p=Sr(f.id),b=Bt(),C=_.control[l],y=C.height,g=C.width,O=typeof s=="boolean"?s:b==null?void 0:b.invalid,k=typeof c=="boolean"?c:b==null?void 0:b.required,w=i||(b==null?void 0:b.name);return u(Pr,{disabled:o,htmlFor:p,children:[u("span",{css:v({display:"inline-block",height:y,position:"relative",width:g},"",""),children:[a(yr,xr({"aria-describedby":O?b==null?void 0:b.messageId:void 0,"aria-invalid":O||void 0,"aria-required":k,disabled:o,height:y,id:p,name:w,ref:t,type:"radio",width:g},f)),a(gr,{disabled:o,invalid:O,size:l})]}),a(Cr,{disabled:o,size:l,children:r})]})});function Sr(e){var n=Q(e);return e||"radio-".concat(n)}function an(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function sn(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?an(Object(t),!0).forEach(function(r){D(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):an(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var wr=function(n){var t=n.disabled,r=n.indeterminate,o=n.invalid,s=n.size,i=_.control[s],c=i.width,d=i.height,l=i.borderWidth;return a(N,{alignItems:"center",as:"span",css:v(sn(sn({backgroundColor:h.backgroundBody,borderColor:h.border,borderStyle:"solid",borderWidth:l,color:h.foregroundText,inset:0,position:"absolute"},t&&{color:h.borderMuted,borderColor:h.borderMuted,backgroundColor:h.backgroundShade,"@media (forced-colors: active)":{borderColor:"GrayText",color:"GrayText"}}),o&&{borderColor:h.systemError,backgroundColor:h.systemErrorMuted}),"",""),flexShrink:0,height:d,justifyContent:"center",rounded:!0,width:c,children:r?a(er,{size:s,weight:"bold"}):a(nr,{size:s,weight:"bold"})})},Ir=["height","width"];function ln(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function Mr(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?ln(Object(t),!0).forEach(function(r){D(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ln(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var Dr=m.forwardRef(function(n,t){var r=n.height,o=n.width,s=ne(n,Ir);return a("input",Mr({css:v({height:r,margin:0,opacity:0,verticalAlign:"middle",width:o,"&:focus ~ span:first-of-type":_.outline,"~ span > svg":{opacity:0},"&:checked ~ span > svg, &:indeterminate ~ span > svg":{opacity:1}},"",""),ref:t},s))});function Br(e){var n=e.children,t=e.htmlFor,r=e.disabled;return a(N,{alignItems:"flex-start",as:"label",color:"text",css:v({cursor:r?"not-allowed":"pointer"},"",""),gap:.5,htmlFor:t,inline:!0,children:n})}var Ar={sm:0,md:"0.2rem"};function Lr(e){var n=e.children,t=e.disabled,r=e.size,o=Ar[r];return a(F,{color:t?"muted":"text",css:v({paddingTop:o},"",""),flexGrow:1,children:n})}var _r=["checked","children","disabled","indeterminate","invalid","name","required","size"];function cn(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function Fr(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?cn(Object(t),!0).forEach(function(r){D(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):cn(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var Z=m.forwardRef(function(n,t){var r=n.checked,o=n.children,s=n.disabled,i=n.indeterminate,c=n.invalid,d=n.name,l=n.required,f=n.size,p=f===void 0?"md":f,b=ne(n,_r),C=jr(b.id),y=m.useRef(null),g=Bt(),O=_.control[p],k=O.height,w=O.width,j=typeof c=="boolean"?c:g==null?void 0:g.invalid,U=typeof l=="boolean"?l:g==null?void 0:g.required,Le=d||(g==null?void 0:g.name);m.useEffect(function(){y.current&&(y.current.indeterminate=!!i)},[i]);var _e=i?!1:r;return u(Br,{disabled:s,htmlFor:C,children:[u("span",{css:v({display:"inline-block",height:k,position:"relative",width:w},"",""),children:[a(Dr,Fr({"aria-checked":i?"mixed":void 0,"aria-describedby":j?g==null?void 0:g.messageId:void 0,"aria-invalid":j||void 0,"aria-required":U,checked:_e,disabled:s,height:k,id:C,name:Le,ref:Wt([t,y]),type:"checkbox",width:w},b)),a(wr,{disabled:s,indeterminate:i,invalid:j,size:p})]}),a(Lr,{disabled:s,size:p,children:o})]})});function jr(e){var n=Q(e);return e||"checkbox-".concat(n)}var Rr=["label","hideOptionalLabel","required","hint","message","invalid","block","maxWidth","options","placeholder","id"];function dn(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function E(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?dn(Object(t),!0).forEach(function(r){D(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):dn(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var ze=m.forwardRef(function(n,t){var r=n.label,o=n.hideOptionalLabel,s=n.required,i=n.hint,c=n.message,d=n.invalid,l=n.block,f=n.maxWidth,p=f===void 0?"md":f,b=n.options,C=n.placeholder,y=n.id,g=ne(n,Rr),O=qr({block:l});return a(ur,{hideOptionalLabel:o,hint:i,id:y,invalid:d,label:r,maxWidth:p,message:c,required:s,children:function(w){return u(Tr,{block:l,maxWidth:p,children:[a("select",E(E(E({css:O,ref:t},w),g),{},{children:a(Nr,{options:b,placeholder:C})})),a(Er,{disabled:g.disabled})]})}})}),Tr=function(n){var t=n.children,r=n.block,o=n.maxWidth;return a("div",{css:v(E({position:"relative"},!r&&{maxWidth:I.maxWidth.field[o]}),"",""),children:t})},Nr=function(n){var t=n.options,r=n.placeholder;return u(m.Fragment,{children:[r?a("option",{value:"",children:r}):null,t.map(function(o){return"options"in o?a("optgroup",{disabled:o.disabled,label:o.label,children:o.options.map(function(s){var i=s.value,c=s.label,d=s.disabled;return a("option",{disabled:d,value:i,children:c},i)})},o.label):a("option",{disabled:o.disabled,value:o.value,children:o.label},o.value)})]})},Er=function(n){var t=n.disabled;return a(tr,{css:v({position:"absolute",top:"50%",right:$(.75),transform:"translateY(-50%)",opacity:t?.3:void 0,pointerEvents:"none",color:h.foregroundAction},"","")})},qr=function(n){var t=n.block;return E(E(E(E({position:"relative",appearance:"none",boxSizing:"border-box",paddingLeft:$(1),paddingRight:"calc(".concat(I.borderWidth.lg,"px + 2.5rem)"),margin:0,background:h.backgroundBody,borderWidth:I.borderWidth.lg,borderStyle:"solid",borderColor:h.border,borderRadius:I.borderRadius,color:h.foregroundText,width:"100%",fontFamily:I.font.body},_.input.md),{},{lineHeight:I.lineHeight.default},_.truncate),t&&{maxWidth:"none",display:"block"}),{},{'&[aria-invalid="true"]':{backgroundColor:h.systemErrorMuted,borderColor:h.systemError},"&:disabled":{opacity:1,cursor:"not-allowed",borderColor:h.borderMuted,backgroundColor:h.backgroundShade,color:h.foregroundMuted},"&:focus":_.outline})};function zr(){var e=Q();return{titleId:"drawer-".concat(e,"-title")}}var Wr={name:"6dhm9o",styles:"visibility:hidden"};function $r(e){var n=e.actions,t=e.children,r=e.elementToFocusOnClose,o=e.onClose,s=e.title,i=zr(),c=i.titleId;return a(Zt,{returnFocus:r?function(){return window.setTimeout(function(){return r.focus()},0),!1}:!0,children:u(N,{"aria-labelledby":c,"aria-modal":!0,background:"body",css:v({boxShadow:I.shadow.lg,inset:0,position:"fixed"},"",""),flexDirection:"column",highContrastOutline:!0,role:"dialog",children:[u(Gr,{children:[a(Hr,{id:c,children:s}),a(K,{"aria-hidden":!0,css:Wr,iconAfter:Qe,tabIndex:-1,variant:"text",children:"Close"})]}),a(Ur,{title:s,children:t}),n?a(Xr,{children:n}):null,a(K,{css:Et({position:"fixed",right:qt({xs:$(.75),md:$(1.5)}),top:"1.25rem",zIndex:I.zIndex.elevated}),iconAfter:Qe,onClick:o,variant:"text",children:"Close"})]})})}function Gr(e){var n=e.children;return a(N,{background:"body",borderBottom:!0,paddingX:{xs:.75,md:1.5},paddingY:1,children:n})}var Yr={name:"1r5gb7q",styles:"display:inline-block"};function Hr(e){var n=e.children,t=e.id;return a(F,{as:"h2",css:Yr,"data-autofocus":!0,focusRingFor:"keyboard",fontSize:"lg",fontWeight:"bold",id:t,lineHeight:"heading",tabIndex:-1,children:n})}function Ur(e){var n=e.children,t=e.title;return a(L,{"aria-label":"".concat(t," content"),as:"section",background:"body",css:v({overflowY:"auto",":focus":{outlineOffset:"-".concat(_.outline.outlineWidth)}},"",""),flexGrow:1,focusRingFor:"keyboard",paddingX:{xs:.75,md:1.5},paddingY:{xs:1,md:1.5},tabIndex:0,children:n})}var Kr={name:"xdvdnl",styles:"margin-top:auto"};function Xr(e){var n=e.children;return a(L,{background:"body",borderTop:!0,css:Kr,paddingX:{xs:.75,md:1.5},paddingY:1,children:n})}var Jr={md:"32rem",lg:"45rem"},Qr=function(n){var t=n.actions,r=n.children,o=n.elementToFocusOnClose,s=n.isOpen,i=s===void 0?!1:s,c=n.mutedOverlay,d=c===void 0?!1:c,l=n.onClose,f=n.onDismiss,p=n.title,b=n.width,C=b===void 0?"md":b,y=$t(l,f),g=m.useRef(0),O=Gt(),k=m.useState(!0),w=k[0],j=k[1],U=Yt();m.useEffect(function(){g.current=window.innerWidth-document.documentElement.clientWidth},[]),m.useEffect(function(){i&&j(!1)},[i]),m.useEffect(function(){var Fe=function(je){i&&je.code==="Escape"&&(je.preventDefault(),je.stopPropagation(),y())};return window.addEventListener("keydown",Fe),function(){return window.removeEventListener("keydown",Fe)}},[i,y]);var Le=Jt(U?i:!1),_e=Le.modalContainerRef;if(!U||!Qt())return null;var Tt=i?!0:!w;return ir.createPortal(u(m.Fragment,{children:[i?a(Vr,{scrollbarWidth:g.current}):null,u("div",{ref:_e,children:[a("div",{css:v({pointerEvents:"none",position:"absolute",opacity:i?1:0,transition:i?"none":"opacity ".concat(O?"1ms":"150ms")},"",""),"data-drawer":"transitioner",onTransitionEnd:function(){j(!0)}}),a(Zr,{isOpen:i,mutedOverlay:d,onClick:y,prefersReducedMotion:O}),a(L,{css:v({inset:0,marginLeft:"auto",position:"fixed",transform:"translateX(".concat(i?"0":"100%",")"),transition:"transform ".concat(O?"1ms":"150ms"," ease"),zIndex:I.zIndex.dialog},"",""),maxWidth:Jr[C],children:Tt&&a($r,{actions:t,elementToFocusOnClose:o,onClose:y,title:p,children:r})})]})]}),document.body)};function Zr(e){var n=e.isOpen,t=e.mutedOverlay,r=e.onClick,o=e.prefersReducedMotion;return a("div",{css:v({pointerEvents:n?"all":"none",position:"fixed",inset:0,backgroundColor:t?h.overlayMuted:h.overlay,opacity:n?1:0,transition:"opacity ".concat(o?"1ms":"150ms"," ease"),zIndex:I.zIndex.overlay},"",""),onClick:r})}function Vr(e){var n=e.scrollbarWidth;return a(Nt,{styles:v({html:{marginRight:n,scrollbarGutter:"auto"},body:{overflow:"hidden"}},"","")})}var At=Symbol.for("immer-nothing"),un=Symbol.for("immer-draftable"),x=Symbol.for("immer-state");function M(e,...n){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var X=Object.getPrototypeOf;function J(e){return!!e&&!!e[x]}function G(e){var n;return e?Lt(e)||Array.isArray(e)||!!e[un]||!!((n=e.constructor)!=null&&n[un])||De(e)||Be(e):!1}var eo=Object.prototype.constructor.toString();function Lt(e){if(!e||typeof e!="object")return!1;const n=X(e);if(n===null)return!0;const t=Object.hasOwnProperty.call(n,"constructor")&&n.constructor;return t===Object?!0:typeof t=="function"&&Function.toString.call(t)===eo}function Se(e,n){Me(e)===0?Reflect.ownKeys(e).forEach(t=>{n(t,e[t],e)}):e.forEach((t,r)=>n(r,t,e))}function Me(e){const n=e[x];return n?n.type_:Array.isArray(e)?1:De(e)?2:Be(e)?3:0}function We(e,n){return Me(e)===2?e.has(n):Object.prototype.hasOwnProperty.call(e,n)}function _t(e,n,t){const r=Me(e);r===2?e.set(n,t):r===3?e.add(t):e[n]=t}function no(e,n){return e===n?e!==0||1/e===1/n:e!==e&&n!==n}function De(e){return e instanceof Map}function Be(e){return e instanceof Set}function z(e){return e.copy_||e.base_}function $e(e,n){if(De(e))return new Map(e);if(Be(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);const t=Lt(e);if(n===!0||n==="class_only"&&!t){const r=Object.getOwnPropertyDescriptors(e);delete r[x];let o=Reflect.ownKeys(r);for(let s=0;s<o.length;s++){const i=o[s],c=r[i];c.writable===!1&&(c.writable=!0,c.configurable=!0),(c.get||c.set)&&(r[i]={configurable:!0,writable:!0,enumerable:c.enumerable,value:e[i]})}return Object.create(X(e),r)}else{const r=X(e);if(r!==null&&t)return{...e};const o=Object.create(r);return Object.assign(o,e)}}function Ke(e,n=!1){return Ae(e)||J(e)||!G(e)||(Me(e)>1&&(e.set=e.add=e.clear=e.delete=to),Object.freeze(e),n&&Object.entries(e).forEach(([t,r])=>Ke(r,!0))),e}function to(){M(2)}function Ae(e){return Object.isFrozen(e)}var ro={};function Y(e){const n=ro[e];return n||M(0,e),n}var V;function Ft(){return V}function oo(e,n){return{drafts_:[],parent_:e,immer_:n,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function pn(e,n){n&&(Y("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=n)}function Ge(e){Ye(e),e.drafts_.forEach(ao),e.drafts_=null}function Ye(e){e===V&&(V=e.parent_)}function mn(e){return V=oo(V,e)}function ao(e){const n=e[x];n.type_===0||n.type_===1?n.revoke_():n.revoked_=!0}function fn(e,n){n.unfinalizedDrafts_=n.drafts_.length;const t=n.drafts_[0];return e!==void 0&&e!==t?(t[x].modified_&&(Ge(n),M(4)),G(e)&&(e=we(n,e),n.parent_||Ie(n,e)),n.patches_&&Y("Patches").generateReplacementPatches_(t[x].base_,e,n.patches_,n.inversePatches_)):e=we(n,t,[]),Ge(n),n.patches_&&n.patchListener_(n.patches_,n.inversePatches_),e!==At?e:void 0}function we(e,n,t){if(Ae(n))return n;const r=n[x];if(!r)return Se(n,(o,s)=>hn(e,r,n,o,s,t)),n;if(r.scope_!==e)return n;if(!r.modified_)return Ie(e,r.base_,!0),r.base_;if(!r.finalized_){r.finalized_=!0,r.scope_.unfinalizedDrafts_--;const o=r.copy_;let s=o,i=!1;r.type_===3&&(s=new Set(o),o.clear(),i=!0),Se(s,(c,d)=>hn(e,r,o,c,d,t,i)),Ie(e,o,!1),t&&e.patches_&&Y("Patches").generatePatches_(r,t,e.patches_,e.inversePatches_)}return r.copy_}function hn(e,n,t,r,o,s,i){if(J(o)){const c=s&&n&&n.type_!==3&&!We(n.assigned_,r)?s.concat(r):void 0,d=we(e,o,c);if(_t(t,r,d),J(d))e.canAutoFreeze_=!1;else return}else i&&t.add(o);if(G(o)&&!Ae(o)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;we(e,o),(!n||!n.scope_.parent_)&&typeof r!="symbol"&&Object.prototype.propertyIsEnumerable.call(t,r)&&Ie(e,o)}}function Ie(e,n,t=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&Ke(n,t)}function io(e,n){const t=Array.isArray(e),r={type_:t?1:0,scope_:n?n.scope_:Ft(),modified_:!1,finalized_:!1,assigned_:{},parent_:n,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let o=r,s=Xe;t&&(o=[r],s=ee);const{revoke:i,proxy:c}=Proxy.revocable(o,s);return r.draft_=c,r.revoke_=i,c}var Xe={get(e,n){if(n===x)return e;const t=z(e);if(!We(t,n))return so(e,t,n);const r=t[n];return e.finalized_||!G(r)?r:r===Ee(e.base_,n)?(qe(e),e.copy_[n]=Ue(r,e)):r},has(e,n){return n in z(e)},ownKeys(e){return Reflect.ownKeys(z(e))},set(e,n,t){const r=jt(z(e),n);if(r!=null&&r.set)return r.set.call(e.draft_,t),!0;if(!e.modified_){const o=Ee(z(e),n),s=o==null?void 0:o[x];if(s&&s.base_===t)return e.copy_[n]=t,e.assigned_[n]=!1,!0;if(no(t,o)&&(t!==void 0||We(e.base_,n)))return!0;qe(e),He(e)}return e.copy_[n]===t&&(t!==void 0||n in e.copy_)||Number.isNaN(t)&&Number.isNaN(e.copy_[n])||(e.copy_[n]=t,e.assigned_[n]=!0),!0},deleteProperty(e,n){return Ee(e.base_,n)!==void 0||n in e.base_?(e.assigned_[n]=!1,qe(e),He(e)):delete e.assigned_[n],e.copy_&&delete e.copy_[n],!0},getOwnPropertyDescriptor(e,n){const t=z(e),r=Reflect.getOwnPropertyDescriptor(t,n);return r&&{writable:!0,configurable:e.type_!==1||n!=="length",enumerable:r.enumerable,value:t[n]}},defineProperty(){M(11)},getPrototypeOf(e){return X(e.base_)},setPrototypeOf(){M(12)}},ee={};Se(Xe,(e,n)=>{ee[e]=function(){return arguments[0]=arguments[0][0],n.apply(this,arguments)}});ee.deleteProperty=function(e,n){return ee.set.call(this,e,n,void 0)};ee.set=function(e,n,t){return Xe.set.call(this,e[0],n,t,e[0])};function Ee(e,n){const t=e[x];return(t?z(t):e)[n]}function so(e,n,t){var o;const r=jt(n,t);return r?"value"in r?r.value:(o=r.get)==null?void 0:o.call(e.draft_):void 0}function jt(e,n){if(!(n in e))return;let t=X(e);for(;t;){const r=Object.getOwnPropertyDescriptor(t,n);if(r)return r;t=X(t)}}function He(e){e.modified_||(e.modified_=!0,e.parent_&&He(e.parent_))}function qe(e){e.copy_||(e.copy_=$e(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var lo=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(n,t,r)=>{if(typeof n=="function"&&typeof t!="function"){const s=t;t=n;const i=this;return function(d=s,...l){return i.produce(d,f=>t.call(this,f,...l))}}typeof t!="function"&&M(6),r!==void 0&&typeof r!="function"&&M(7);let o;if(G(n)){const s=mn(this),i=Ue(n,void 0);let c=!0;try{o=t(i),c=!1}finally{c?Ge(s):Ye(s)}return pn(s,r),fn(o,s)}else if(!n||typeof n!="object"){if(o=t(n),o===void 0&&(o=n),o===At&&(o=void 0),this.autoFreeze_&&Ke(o,!0),r){const s=[],i=[];Y("Patches").generateReplacementPatches_(n,o,s,i),r(s,i)}return o}else M(1,n)},this.produceWithPatches=(n,t)=>{if(typeof n=="function")return(i,...c)=>this.produceWithPatches(i,d=>n(d,...c));let r,o;return[this.produce(n,t,(i,c)=>{r=i,o=c}),r,o]},typeof(e==null?void 0:e.autoFreeze)=="boolean"&&this.setAutoFreeze(e.autoFreeze),typeof(e==null?void 0:e.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){G(e)||M(8),J(e)&&(e=co(e));const n=mn(this),t=Ue(e,void 0);return t[x].isManual_=!0,Ye(n),t}finishDraft(e,n){const t=e&&e[x];(!t||!t.isManual_)&&M(9);const{scope_:r}=t;return pn(r,n),fn(void 0,r)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,n){let t;for(t=n.length-1;t>=0;t--){const o=n[t];if(o.path.length===0&&o.op==="replace"){e=o.value;break}}t>-1&&(n=n.slice(t+1));const r=Y("Patches").applyPatches_;return J(e)?r(e,n):this.produce(e,o=>r(o,n))}};function Ue(e,n){const t=De(e)?Y("MapSet").proxyMap_(e,n):Be(e)?Y("MapSet").proxySet_(e,n):io(e,n);return(n?n.scope_:Ft()).drafts_.push(t),t}function co(e){return J(e)||M(10,e),Rt(e)}function Rt(e){if(!G(e)||Ae(e))return e;const n=e[x];let t;if(n){if(!n.modified_)return n.base_;n.finalized_=!0,t=$e(e,n.scope_.immer_.useStrictShallowCopy_)}else t=$e(e,!0);return Se(t,(r,o)=>{_t(t,r,Rt(o))}),n&&(n.finalized_=!1),t}var S=new lo,re=S.produce;S.produceWithPatches.bind(S);S.setAutoFreeze.bind(S);S.setUseStrictShallowCopy.bind(S);S.applyPatches.bind(S);S.createDraft.bind(S);S.finishDraft.bind(S);const A=[{partyId:1,partyDisplayName:"Jefferson PTY LTD",formattedPartyExternalId:"89 790 756 100",someExtraInfo:"our component allows this field but does not use it at all",roleDisplayName:"User",roleName:"USER"},{partyId:2,partyDisplayName:"Metaweb (agent role)",formattedPartyExternalId:"89 790 756 100",someExtraInfo:"our component allows this field but does not use it at all",roleDisplayName:"Agent",roleName:"AGENT"},{partyId:3,partyDisplayName:"Fresh Produce Australia",formattedPartyExternalId:"92 635 964 018",someExtraInfo:"our component allows this field but does not use it at all",roleDisplayName:"Principal Authority (Owner)",roleName:"PRINCIPAL_AUTHORITY_OWNER"},{partyId:4,partyDisplayName:"Fresh Produce Australia",formattedPartyExternalId:"92 635 964 018",someExtraInfo:"our component allows this field but does not use it at all",roleDisplayName:"Manager",roleName:"MANAGER"}],xe=[{partyId:5,partyDisplayName:"Business A",formattedPartyExternalId:"ABN: 88 888 888 888",roleDisplayName:"User",roleGroupName:"BIOSECURITY"},{partyId:6,partyDisplayName:"Business B",formattedPartyExternalId:"ABN: 88 888 888 888",roleDisplayName:"User",roleGroupName:"BIOSECURITY"},{partyId:7,partyDisplayName:"Business C",formattedPartyExternalId:"ABN: 88 888 888 888",roleDisplayName:"User",roleGroupName:"BIOSECURITY"},{partyId:8,partyDisplayName:"Business D",formattedPartyExternalId:"ABN: 88 888 888 888",roleDisplayName:"User",roleGroupName:"BIOSECURITY"}],uo={linkedBusinesses:[...A,...xe],selectedBusiness:A[0],setSelectedBusiness:()=>{}},Lo={title:"AppLayout",component:R,parameters:{layout:"fullscreen"},render:function(n){return u(m.Fragment,{children:[a(H,{links:[{href:"#main-content",label:"Skip to main content"}]}),a(R,{...n,children:a(B,{children:a(q,{children:a("h1",{children:"Page heading"})})})})]})}},po=e=>new Promise(n=>setTimeout(n,e)),P=async()=>{await po(2e3),alert("You have been signed out.")},oe={args:{focusMode:!1,userName:"Toto Wolff",unreadMessageCount:6,activePath:"/",handleSignOut:P}},ae={args:{focusMode:!0,userName:"Toto Wolff",unreadMessageCount:6,activePath:"/",handleSignOut:P}},ie={args:{activePath:"/",focusMode:!1,handleSignOut:P},render:function(n){const[t,r]=m.useState(!1);return m.useEffect(()=>{setTimeout(()=>{r(!0)},1e3)},[]),u(m.Fragment,{children:[a(H,{links:[{href:"#main-content",label:"Skip to main content"}]}),a(R,{...n,...t?{userName:"Toto Wolff",unreadMessageCount:6}:{},children:a(B,{children:a(q,{children:a("h1",{children:"Page heading"})})})})]})}},se={args:{focusMode:!1,userName:"Toto Wolff",unreadMessageCount:6,activePath:"/",handleSignOut:P,domain:"test.agriculture.gov.au"}},le={args:{focusMode:!1,userName:"Toto Wolff",unreadMessageCount:6,activePath:"/account/exports/dashboard",handleSignOut:P,subdomain:"services",domain:e=>`http://${e.subdomain}.example.com/custom-prefix${e.path}`}},ce={args:{businessDetails:uo,focusMode:!1,userName:"Toto Wolff",unreadMessageCount:6,activePath:"/account/exports/dashboard",handleSignOut:P,subdomain:"services",features:{people:!0,exportSystems:!0,invoices:!0,licences:!0,quotas:!0},domain:e=>e.subdomain==="services"?`http://localhost:8080${e.path}`:`http://localhost:3000${e.path}`},render:e=>{const[n,t]=m.useState("/account/exports/dashboard"),[r,o]=m.useState("services");return u(m.Fragment,{children:[a(H,{links:[{href:"#main-content",label:"Skip to main content"}]}),a(R,{...e,activePath:n,subdomain:r,children:a(B,{children:u(T,{gap:3,children:[a(sr,{children:"configure activePath / subdomain to test routing"}),a(ze,{label:"activePath",onChange:s=>t(s.target.value),value:n,options:[{value:"/account/exports/dashboard",label:"account-dashboard"},{value:"/account/exports/manage-people",label:"manage-people"},{value:"/establishments",label:"establishments"},{value:"/intelligence",label:"intelligence"},{value:"/compliance",label:"compliance"},{value:"/quota",label:"quota"},{value:"/export-systems",label:"export-systems"},{value:"/licences",label:"licences"},{value:"/inexs",label:"inexs"}]}),a(ze,{label:"subdomain",onChange:s=>o(s.target.value),value:r,options:[{value:"services",label:"services"},{value:"exports",label:"exports"}]})]})})})]})}},de={args:{focusMode:!1,userName:"Toto Wolff",unreadMessageCount:6,activePath:"/intelligence",features:{accreditedProperties:!0},handleSignOut:P},render:function(n){const[t,r]=m.useState({exports:A,imports:xe,selectedBusiness:A[1]}),o=i=>r(c=>({...c,selectedBusiness:i})),s=(i,c)=>()=>{if(i==="imports"){const d=xe.slice(0,c),l=d[0];r(f=>({...f,imports:d,selectedBusiness:l}))}if(i==="exports"){const d=A.slice(0,c),l=d[0];r(f=>({...f,exports:d,selectedBusiness:l}))}};return u(m.Fragment,{children:[a(H,{links:[{href:"#main-content",label:"Skip to main content"}]}),a(R,{...n,businessDetails:{selectedBusiness:t.selectedBusiness,linkedBusinesses:[...t.exports,...t.imports],setSelectedBusiness:o},children:a(B,{children:u(T,{gap:3,children:[a(Ht,{links:[{label:"Data and insights",href:"/intelligence"},{label:"Report 1",href:"/intelligence/report/report_1"}]}),a(q,{children:a("h1",{children:"Business dropdown configuration"})}),u(N,{gap:1,children:[a(W,{label:"Number of linked businesses",block:!0,hideOptionalLabel:!0,children:Array.from(new Array(A.length+1).keys()).map(i=>{var c;return u(on,{checked:((c=t==null?void 0:t.exports)==null?void 0:c.length)===i,onChange:s("exports",i),children:[i," ",i===0?"business":"businesses"]},i)})}),a(W,{label:"Number of linked biosecurity businesses",block:!0,hideOptionalLabel:!0,children:Array.from(new Array(xe.length+1).keys()).map(i=>{var c;return u(on,{checked:((c=t==null?void 0:t.imports)==null?void 0:c.length)===i,onChange:s("imports",i),children:[i," ",i===0?"import business":"import businesses"]},i)})})]})]})})})]})}},ue={args:{focusMode:!1,userName:"Toto Wolff",unreadMessageCount:6,activePath:"/",handleSignOut:P},render:function(n){const t=A,[r,o]=m.useState(t[1]),[s,i]=m.useState(),c=()=>i(void 0),d={linkedBusinesses:t,selectedBusiness:r,setSelectedBusiness:i};return u(m.Fragment,{children:[a(H,{links:[{href:"#main-content",label:"Skip to main content"}]}),u(R,{...n,businessDetails:d,children:[a(Xt,{isOpen:s!==void 0,onClose:c,title:"Are you sure you want to leave this page?",actions:u(Ct,{children:[a(K,{onClick:()=>{s!==void 0&&o(s),i(void 0)},children:"Leave this page"}),a(K,{variant:"secondary",onClick:c,children:"Stay on this page"})]}),children:a(F,{as:"p",children:"You will lose all changes made since your last save."})}),a(B,{children:a(T,{gap:3,children:a(q,{children:u("h1",{children:["Active business: ",r==null?void 0:r.partyDisplayName]})})})})]})]})}},pe={args:{focusMode:!1,userName:"Toto Wolff",unreadMessageCount:6,activePath:"/",handleSignOut:P},render:function(n){const t={linkedBusinesses:A,selectedBusiness:A[0],setSelectedBusiness:()=>{}},r=()=>{const o=kt();return a(K,{onClick:o,children:"Sign out"})};return u(m.Fragment,{children:[a(H,{links:[{href:"#main-content",label:"Skip to main content"}]}),a(R,{...n,businessDetails:t,children:a(B,{children:u(T,{gap:3,children:[u(q,{children:[a("h1",{children:"Sign out button"}),u("p",{children:["You can trigger the sign out modal using the"," ",a("code",{children:"useOpenSignOutModal"})," hook."]})]}),a(Ct,{children:a(r,{})})]})})})]})}},me={args:{focusMode:!1,userName:"Toto Wolff",unreadMessageCount:6,activePath:"/"},render:function(n){const t=A[0],r={quotas:!0,exportSystems:!0,licences:!0,invoices:!0,people:!0,letterOfFreeSale:!0,accreditedProperties:!0,exportDocumentation:!0},o=Array.from(Object.keys(r)),[s,i]=m.useState(r),[c,d]=m.useState(t);return a(R,{...n,features:s,businessDetails:{setSelectedBusiness:()=>{},selectedBusiness:c},children:a(B,{children:u(T,{gap:1.5,children:[a(W,{label:"features",block:!0,hideOptionalLabel:!0,children:o.map(l=>a(Z,{checked:!!s[l],onChange:()=>i({...s,[l]:s[l]?void 0:!0}),children:l},l))}),a(W,{label:"selected business (affects some features)",block:!0,hideOptionalLabel:!0,children:a(Z,{checked:!!c,onChange:()=>d(c?void 0:t),children:t.partyDisplayName})})]})})})}},fe={args:{focusMode:!1,unreadMessageCount:6,activePath:"/",handleSignOut:P,claims:{given_name:"given_name",family_name:"family_name"}}},he={args:{focusMode:!1,unreadMessageCount:6,activePath:"/",handleSignOut:P,claims:{family_name:"family_name"}}},ge={args:{focusMode:!1,unreadMessageCount:6,activePath:"/",handleSignOut:P,claims:{family_name:"family_name"},errorComponents:{MissingName:e=>(m.useEffect(()=>{console.log("report this situation to an analytics provider here")},[]),a(Ut.MissingName,{...e}))}}},be={args:{focusMode:!1,unreadMessageCount:6,activePath:"/",handleSignOut:P,claims:{family_name:"family_name"},errorComponents:{MissingName:e=>a(B,{children:u(q,{children:[a("p",{children:"Our app works just fine even without a generic name."}),a("hr",{}),e.children]})})}}},ve={args:{focusMode:!1,unreadMessageCount:6,activePath:"/",handleSignOut:P,claims:{family_name:"family_name"},errorComponents:{MissingGivenName:e=>{const n=kt();return a(B,{children:u(q,{children:[a("p",{children:"Our app works just fine even without a given name."}),a("hr",{}),e.children,a(K,{onClick:n,children:"Sign out"})]})})}}}},ye={args:{focusMode:!1,unreadMessageCount:6,activePath:"/",handleSignOut:P,claims:{given_name:"given_name",family_name:"family_name",AARM_acr:"urn:id.gov.au:tdif:acr:ip1:cl1"},requiredProofingLevel:"IP2"}},Pe={args:{focusMode:!1,unreadMessageCount:6,activePath:"/",handleSignOut:P},render:function(n){const t=["IP1","IP2","IP3","IP4"],r=["urn:id.gov.au:tdif:acr:ip1:cl1","urn:id.gov.au:tdif:acr:ip1:cl2","urn:id.gov.au:tdif:acr:ip1:cl3","urn:id.gov.au:tdif:acr:ip1p:cl1","urn:id.gov.au:tdif:acr:ip1p:cl2","urn:id.gov.au:tdif:acr:ip1p:cl3","urn:id.gov.au:tdif:acr:ip2:cl2","urn:id.gov.au:tdif:acr:ip2:cl3","urn:id.gov.au:tdif:acr:ip2p:cl2","urn:id.gov.au:tdif:acr:ip2p:cl3","urn:id.gov.au:tdif:acr:ip3:cl2","urn:id.gov.au:tdif:acr:ip3:cl3","urn:id.gov.au:tdif:acr:ip4:cl3"],[o,s]=m.useState(!0),[i,c]=m.useState({method:"urn",claims:{given_name:"given_name",family_name:"family_name",AARM_acr:[r[0]]},authDetails:{proofingLevel:["IP1"]},requiredProofingLevel:["IP2"]}),d=l=>{const f=l.kind==="max"?"#df185a":"#287be0",p=l!=null&&l.extraText?` (${l.extraText})`:"";return l!=null&&l.active?a(L,{css:{position:"relative",padding:"4px",border:`2px dashed ${f}`,"& + &":{marginTop:"1em"},":after":{position:"absolute",right:0,bottom:"120%",content:`"${l.kind==="max"?"maximum provided proof":"minimum required proof"}${p}"`,color:f,fontSize:"0.8em"}},children:l.children}):a(zt,{children:l.children})};return u(m.Fragment,{children:[a(H,{links:[{href:"#main-content",label:"Skip to main content"}]}),u(L,{css:{position:"relative"},children:[a(L,{css:{border:"2px solid red",backgroundColor:"#fec0ff",position:"fixed",transform:"rotate(90deg)",transformOrigin:"top right",fontSize:"1.2em",padding:".4em 1em",top:"55vh",right:0,zIndex:99,cursor:"pointer"},onClick:()=>s(!0),children:"show config options"}),a(R,{...n,requiredProofingLevel:i.requiredProofingLevel,...i.method==="claims"?{claims:i.claims}:{authDetails:i.authDetails},children:a(B,{children:u(T,{gap:1.5,children:[a(F,{as:"p",fontSize:"lg",children:"You made it!"}),a(F,{as:"p",children:"Your proofing level means that you can see this page."})]})})})]}),a(Qr,{title:"Config",isOpen:o,onClose:()=>s(!1),children:u(T,{gap:1.5,children:[a(ze,{label:"Proofing method",required:!0,options:[{value:"authDetails",label:"AuthDetails"},{value:"claims",label:"Claims"}],onChange:l=>c(re(f=>{f.method=l.target.value}))}),i.method==="claims"?a(W,{label:"Provided ACR",block:!0,hideOptionalLabel:!0,children:r.map(l=>a(d,{kind:"max",active:te(Re({AARM_acr:l}))===te(Re(i.claims)),extraText:te(Re(i.claims)),children:a(Z,{checked:new Set(i.claims.AARM_acr).has(l),onChange:f=>c(re(p=>{f.target.checked?p.claims.AARM_acr.push(l):p.claims.AARM_acr.splice(p.claims.AARM_acr.indexOf(l),1)})),children:l},l)},l))}):a(W,{label:"Provided proofing level",block:!0,hideOptionalLabel:!0,children:t.map(l=>a(d,{kind:"max",active:te(i.authDetails.proofingLevel)===l,children:a(Z,{checked:new Set(i.authDetails.proofingLevel).has(l),onChange:f=>c(re(p=>{f.target.checked?p.authDetails.proofingLevel.push(l):p.authDetails.proofingLevel.splice(p.authDetails.proofingLevel.indexOf(l),1)})),children:l},l)},l))}),a(W,{label:"Required proofing level",block:!0,hideOptionalLabel:!0,children:t.map(l=>a(d,{kind:"min",active:Kt(i.requiredProofingLevel)===l,children:a(Z,{checked:new Set(i.requiredProofingLevel).has(l),onChange:f=>c(re(p=>{f.target.checked?p.requiredProofingLevel.push(l):p.requiredProofingLevel.splice(p.requiredProofingLevel.indexOf(l),1)})),children:l},l)},l))})]})})]})}},Oe={args:{focusMode:!1,unreadMessageCount:6,activePath:"/",handleSignOut:P,authDetails:{proofingLevel:"IP1"},requiredProofingLevel:"IP3",errorComponents:{ProofMissing:e=>a(B,{children:u(q,{children:[u("p",{children:["Your proofing level is insufficient at"," ",Je(e.providedProofingLevel),". Please fix it."]}),u("p",{children:["you should provide at least '",Je(e.requiredProofingLevel),"'"]})]})})}}},Ce={args:{focusMode:!1,userName:"Toto Wolff",unreadMessageCount:6,activePath:"/custom",handleSignOut:P,sidebarItems:[{items:[{label:"Custom sidenav",href:"/custom",icon:xt},{label:"Other item",href:"/other",icon:rr}]}],internal:"sidebar"}},ke={args:{focusMode:!1,userName:"Toto Wolff",unreadMessageCount:6,activePath:"/custom",handleSignOut:P,headerProps:{heading:"Service Portal",subLine:"Supporting Australian agriculture"},sidebarItems:[{items:[{label:"Overview",href:"/custom",icon:xt,items:[{label:"Business details",href:"#"},{label:"People",href:"#"}]},{label:"Country requirements",href:"/country-requirements",icon:or,items:[{label:"Other",href:"#"},{label:"Options",href:"#"}]}]},{items:[{label:"Help",href:"/help",icon:ar}]}]}};var gn,bn,vn;oe.parameters={...oe.parameters,docs:{...(gn=oe.parameters)==null?void 0:gn.docs,source:{originalSource:`{
  args: {
    focusMode: false,
    userName: 'Toto Wolff',
    unreadMessageCount: 6,
    activePath: '/',
    handleSignOut
  }
}`,...(vn=(bn=oe.parameters)==null?void 0:bn.docs)==null?void 0:vn.source}}};var yn,Pn,On;ae.parameters={...ae.parameters,docs:{...(yn=ae.parameters)==null?void 0:yn.docs,source:{originalSource:`{
  args: {
    focusMode: true,
    userName: 'Toto Wolff',
    unreadMessageCount: 6,
    activePath: '/',
    handleSignOut
  }
}`,...(On=(Pn=ae.parameters)==null?void 0:Pn.docs)==null?void 0:On.source}}};var Cn,kn,xn;ie.parameters={...ie.parameters,docs:{...(Cn=ie.parameters)==null?void 0:Cn.docs,source:{originalSource:`{
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
}`,...(xn=(kn=ie.parameters)==null?void 0:kn.docs)==null?void 0:xn.source}}};var Sn,wn,In;se.parameters={...se.parameters,docs:{...(Sn=se.parameters)==null?void 0:Sn.docs,source:{originalSource:`{
  args: {
    focusMode: false,
    userName: 'Toto Wolff',
    unreadMessageCount: 6,
    activePath: '/',
    handleSignOut,
    domain: 'test.agriculture.gov.au'
  }
}`,...(In=(wn=se.parameters)==null?void 0:wn.docs)==null?void 0:In.source}}};var Mn,Dn,Bn;le.parameters={...le.parameters,docs:{...(Mn=le.parameters)==null?void 0:Mn.docs,source:{originalSource:`{
  args: {
    focusMode: false,
    userName: 'Toto Wolff',
    unreadMessageCount: 6,
    activePath: '/account/exports/dashboard',
    handleSignOut,
    subdomain: 'services',
    domain: route => \`http://\${route.subdomain}.example.com/custom-prefix\${route.path}\`
  }
}`,...(Bn=(Dn=le.parameters)==null?void 0:Dn.docs)==null?void 0:Bn.source}}};var An,Ln,_n;ce.parameters={...ce.parameters,docs:{...(An=ce.parameters)==null?void 0:An.docs,source:{originalSource:`{
  args: {
    businessDetails: exampleBusinessDetails,
    focusMode: false,
    userName: 'Toto Wolff',
    unreadMessageCount: 6,
    activePath: '/account/exports/dashboard',
    handleSignOut,
    subdomain: 'services',
    features: {
      people: true,
      exportSystems: true,
      invoices: true,
      licences: true,
      quotas: true
    },
    domain: route => route.subdomain === 'services' ? \`http://localhost:8080\${route.path}\` : \`http://localhost:3000\${route.path}\`
  },
  render: props => {
    const [activePath, setActivePath] = useState('/account/exports/dashboard');
    const [subdomain, setSubdomain] = useState<AppSubdomain>('services');
    return <Fragment>
                <SkipLinks links={[{
        href: '#main-content',
        label: 'Skip to main content'
      }]} />
                <AppLayout {...props} activePath={activePath} subdomain={subdomain}>
                    <PageContent>
                        <Stack gap={3}>
                            <H1>configure activePath / subdomain to test routing</H1>

                            <Select label="activePath" onChange={e => setActivePath(e.target.value)} value={activePath} options={[{
              value: '/account/exports/dashboard',
              label: 'account-dashboard'
            }, {
              value: '/account/exports/manage-people',
              label: 'manage-people'
            }, {
              value: '/establishments',
              label: 'establishments'
            }, {
              value: '/intelligence',
              label: 'intelligence'
            }, {
              value: '/compliance',
              label: 'compliance'
            }, {
              value: '/quota',
              label: 'quota'
            }, {
              value: '/export-systems',
              label: 'export-systems'
            }, {
              value: '/licences',
              label: 'licences'
            }, {
              value: '/inexs',
              label: 'inexs'
            }]} />

                            <Select label="subdomain" onChange={e => setSubdomain(e.target.value as AppSubdomain)} value={subdomain} options={[{
              value: 'services',
              label: 'services'
            }, {
              value: 'exports',
              label: 'exports'
            }]} />
                        </Stack>
                    </PageContent>
                </AppLayout>
            </Fragment>;
  }
}`,...(_n=(Ln=ce.parameters)==null?void 0:Ln.docs)==null?void 0:_n.source}}};var Fn,jn,Rn;de.parameters={...de.parameters,docs:{...(Fn=de.parameters)==null?void 0:Fn.docs,source:{originalSource:`{
  args: {
    focusMode: false,
    userName: 'Toto Wolff',
    unreadMessageCount: 6,
    activePath: '/intelligence',
    features: {
      accreditedProperties: true
    },
    handleSignOut
  },
  render: function Render(props) {
    const [businessDetails, setBusinessDetails] = useState({
      exports: exampleBusinesses,
      imports: exampleImportBusinesses,
      selectedBusiness: exampleBusinesses[1]
    });
    const setSelectedBusiness = (selectedBusiness: BusinessFromAPI) => setBusinessDetails(details => ({
      ...details,
      selectedBusiness
    }));
    const onChange = (area: 'exports' | 'imports', n: number) => () => {
      if (area === 'imports') {
        const imports = exampleImportBusinesses.slice(0, n);
        const selectedBusiness = imports[0];
        setBusinessDetails(existing => ({
          ...existing,
          imports,
          selectedBusiness
        }));
      }
      if (area === 'exports') {
        const exports = exampleBusinesses.slice(0, n);
        const selectedBusiness = exports[0];
        setBusinessDetails(existing => ({
          ...existing,
          exports,
          selectedBusiness
        }));
      }
    };
    return <Fragment>
                <SkipLinks links={[{
        href: '#main-content',
        label: 'Skip to main content'
      }]} />
                <AppLayout {...props} businessDetails={{
        selectedBusiness: businessDetails.selectedBusiness,
        linkedBusinesses: [...businessDetails.exports, ...businessDetails.imports],
        setSelectedBusiness
      }}>
                    <PageContent>
                        <Stack gap={3}>
                            <AppLayoutBreadcrumbs links={[{
              label: 'Data and insights',
              href: '/intelligence'
            }, {
              label: 'Report 1',
              href: '/intelligence/report/report_1'
            }]} />

                            <Prose>
                                <h1>Business dropdown configuration</h1>
                            </Prose>

                            <Flex gap={1}>
                                <ControlGroup label="Number of linked businesses" block hideOptionalLabel>
                                    {Array.from(new Array(exampleBusinesses.length + 1).keys()).map(idx => <Radio key={idx} checked={businessDetails?.exports?.length === idx} onChange={onChange('exports', idx)}>
                                            {idx} {idx === 0 ? 'business' : 'businesses'}
                                        </Radio>)}
                                </ControlGroup>

                                <ControlGroup label="Number of linked biosecurity businesses" block hideOptionalLabel>
                                    {Array.from(new Array(exampleImportBusinesses.length + 1).keys()).map(idx => <Radio key={idx} checked={businessDetails?.imports?.length === idx} onChange={onChange('imports', idx)}>
                                            {idx}{' '}
                                            {idx === 0 ? 'import business' : 'import businesses'}
                                        </Radio>)}
                                </ControlGroup>
                            </Flex>
                        </Stack>
                    </PageContent>
                </AppLayout>
            </Fragment>;
  }
}`,...(Rn=(jn=de.parameters)==null?void 0:jn.docs)==null?void 0:Rn.source}}};var Tn,Nn,En;ue.parameters={...ue.parameters,docs:{...(Tn=ue.parameters)==null?void 0:Tn.docs,source:{originalSource:`{
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
}`,...(En=(Nn=ue.parameters)==null?void 0:Nn.docs)==null?void 0:En.source}}};var qn,zn,Wn;pe.parameters={...pe.parameters,docs:{...(qn=pe.parameters)==null?void 0:qn.docs,source:{originalSource:`{
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
}`,...(Wn=(zn=pe.parameters)==null?void 0:zn.docs)==null?void 0:Wn.source}}};var $n,Gn,Yn;me.parameters={...me.parameters,docs:{...($n=me.parameters)==null?void 0:$n.docs,source:{originalSource:`{
  args: {
    focusMode: false,
    userName: 'Toto Wolff',
    unreadMessageCount: 6,
    activePath: '/'
  },
  render: function Render(props) {
    const exampleBusiness = exampleBusinesses[0];
    const initial: { [f in keyof Features]-?: true } = {
      quotas: true,
      exportSystems: true,
      licences: true,
      invoices: true,
      people: true,
      letterOfFreeSale: true,
      accreditedProperties: true,
      exportDocumentation: true
    };
    const feats = Array.from(Object.keys(initial)) as (keyof Features)[];
    const [features, setFeatures] = useState<Features>(initial);
    const [selectedBusiness, setSelectedBusiness] = useState<BusinessFromAPI | undefined>(exampleBusiness);
    return <AppLayout {...props} features={features} businessDetails={{
      setSelectedBusiness: () => {},
      selectedBusiness
    }}>
                <PageContent>
                    <Stack gap={1.5}>
                        <ControlGroup label="features" block hideOptionalLabel>
                            {feats.map(feature => <Checkbox key={feature} checked={!!features[feature]} onChange={() => setFeatures({
              ...features,
              [feature]: features[feature] ? undefined : true
            })}>
                                    {feature}
                                </Checkbox>)}
                        </ControlGroup>

                        <ControlGroup label="selected business (affects some features)" block hideOptionalLabel>
                            <Checkbox checked={!!selectedBusiness} onChange={() => setSelectedBusiness(selectedBusiness ? undefined : exampleBusiness)}>
                                {exampleBusiness.partyDisplayName}
                            </Checkbox>
                        </ControlGroup>
                    </Stack>
                </PageContent>
            </AppLayout>;
  }
}`,...(Yn=(Gn=me.parameters)==null?void 0:Gn.docs)==null?void 0:Yn.source}}};var Hn,Un,Kn;fe.parameters={...fe.parameters,docs:{...(Hn=fe.parameters)==null?void 0:Hn.docs,source:{originalSource:`{
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
}`,...(Kn=(Un=fe.parameters)==null?void 0:Un.docs)==null?void 0:Kn.source}}};var Xn,Jn,Qn;he.parameters={...he.parameters,docs:{...(Xn=he.parameters)==null?void 0:Xn.docs,source:{originalSource:`{
  args: {
    focusMode: false,
    unreadMessageCount: 6,
    activePath: '/',
    handleSignOut,
    claims: {
      family_name: 'family_name'
    }
  }
}`,...(Qn=(Jn=he.parameters)==null?void 0:Jn.docs)==null?void 0:Qn.source}}};var Zn,Vn,et;ge.parameters={...ge.parameters,docs:{...(Zn=ge.parameters)==null?void 0:Zn.docs,source:{originalSource:`{
  args: {
    focusMode: false,
    unreadMessageCount: 6,
    activePath: '/',
    handleSignOut,
    claims: {
      family_name: 'family_name'
    },
    errorComponents: {
      MissingName: props => {
        useEffect(() => {
          console.log('report this situation to an analytics provider here');
        }, []);
        return <AppErrorComponents.MissingName {...props} />;
      }
    }
  }
}`,...(et=(Vn=ge.parameters)==null?void 0:Vn.docs)==null?void 0:et.source}}};var nt,tt,rt;be.parameters={...be.parameters,docs:{...(nt=be.parameters)==null?void 0:nt.docs,source:{originalSource:`{
  args: {
    focusMode: false,
    unreadMessageCount: 6,
    activePath: '/',
    handleSignOut,
    claims: {
      family_name: 'family_name'
    },
    errorComponents: {
      MissingName: props => <PageContent>
                    <Prose>
                        <p>Our app works just fine even without a generic name.</p>
                        <hr />

                        {props.children}
                    </Prose>
                </PageContent>
    }
  }
}`,...(rt=(tt=be.parameters)==null?void 0:tt.docs)==null?void 0:rt.source}}};var ot,at,it;ve.parameters={...ve.parameters,docs:{...(ot=ve.parameters)==null?void 0:ot.docs,source:{originalSource:`{
  args: {
    focusMode: false,
    unreadMessageCount: 6,
    activePath: '/',
    handleSignOut,
    claims: {
      family_name: 'family_name'
    },
    errorComponents: {
      MissingGivenName: props => {
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
}`,...(it=(at=ve.parameters)==null?void 0:at.docs)==null?void 0:it.source}}};var st,lt,ct;ye.parameters={...ye.parameters,docs:{...(st=ye.parameters)==null?void 0:st.docs,source:{originalSource:`{
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
}`,...(ct=(lt=ye.parameters)==null?void 0:lt.docs)==null?void 0:ct.source}}};var dt,ut,pt;Pe.parameters={...Pe.parameters,docs:{...(dt=Pe.parameters)==null?void 0:dt.docs,source:{originalSource:`{
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
}`,...(pt=(ut=Pe.parameters)==null?void 0:ut.docs)==null?void 0:pt.source}}};var mt,ft,ht;Oe.parameters={...Oe.parameters,docs:{...(mt=Oe.parameters)==null?void 0:mt.docs,source:{originalSource:`{
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
}`,...(ht=(ft=Oe.parameters)==null?void 0:ft.docs)==null?void 0:ht.source}}};var gt,bt,vt;Ce.parameters={...Ce.parameters,docs:{...(gt=Ce.parameters)==null?void 0:gt.docs,source:{originalSource:`{
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
}`,...(vt=(bt=Ce.parameters)==null?void 0:bt.docs)==null?void 0:vt.source}}};var yt,Pt,Ot;ke.parameters={...ke.parameters,docs:{...(yt=ke.parameters)==null?void 0:yt.docs,source:{originalSource:`{
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
}`,...(Ot=(Pt=ke.parameters)==null?void 0:Pt.docs)==null?void 0:Ot.source}}};const _o=["Basic","FocusMode","ClientSideFetch","EnvironmentRouting","CustomRouting","DevelopmentRouting","BusinessDropdown","BusinessDropdownModalInterrupt","SignOutModalTrigger","OptionalAppsEnabled","Claims","ClaimsMissingName","ClaimsMissingNameAnalytics","ClaimsMissingNameComponent","ClaimsMissingGivenNameComponent","RequiredProofingPaywall","RequiredProofingPaywallOptions","RequiredProofingPaywallCustomComponent","CustomSidenav","HeaderProps"];export{oe as Basic,de as BusinessDropdown,ue as BusinessDropdownModalInterrupt,fe as Claims,ve as ClaimsMissingGivenNameComponent,he as ClaimsMissingName,ge as ClaimsMissingNameAnalytics,be as ClaimsMissingNameComponent,ie as ClientSideFetch,le as CustomRouting,Ce as CustomSidenav,ce as DevelopmentRouting,se as EnvironmentRouting,ae as FocusMode,ke as HeaderProps,me as OptionalAppsEnabled,ye as RequiredProofingPaywall,Oe as RequiredProofingPaywallCustomComponent,Pe as RequiredProofingPaywallOptions,pe as SignOutModalTrigger,_o as __namedExportsOrder,Lo as default};
