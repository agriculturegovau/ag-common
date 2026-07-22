import{j as a,c as v,a as D,g as h,b as u,B,t as M,m as W,_ as ee,p as A,G as Nr,h as Er,i as qr,F as zr}from"./Box-37a490cb.esm-DXji3-i8.js";import{r as f}from"./index-BAneEnFJ.js";import{P as q}from"./ag.ds-next-react-prose.esm-B_o3MCwm.js";import{m as Wr,c as U,P as L,a as Cr}from"./ag.ds-next-react-button.esm-C0OmCdy1.js";import{g as $r,u as Gr,b as Yr,a as N,A as Hr,c as xr,d as Ur,e as Je,h as ne,f as Te,l as Kr,S as Y,M as Xr}from"./AppLayoutBreadcrumbs-D-fZSPjT.js";import{S as E,T as _,F as R}from"./Icon-29f3c11e.esm-BSN4Axrc.js";import{e as J,a as Jr,c as Qr,F as Zr}from"./ag.ds-next-react-dropdown-menu.esm-CAWEWLRv.js";import{b as Vr,c as et,d as nt,a as rt,C as Qe,F as kr,P as tt,B as ot,H as at}from"./ag.ds-next-react-icon.esm-BooAXek9.js";import{r as it}from"./index-exioagFi.js";import{a as st}from"./ag.ds-next-react-heading.esm-5FxBVPiO.js";import"./jsx-runtime-D_zvdyIk.js";import"./_commonjsHelpers-CqkleIqs.js";import"./CoreProvider-eb9f00f4.esm-DzsGG-Bs.js";import"./ag.ds-next-react-daff-branding.esm-CNSWqb_Q.js";import"./ag.ds-next-react-link-list.esm-DHd_RfQb.js";import"./ag.ds-next-react-text-link.esm-DVkxptUq.js";import"./ag.ds-next-react-callout.esm-CNsPQSsz.js";import"./index-pL_YbQPu.js";var Ze="data-conditional-field-container",lt="data-grouped-fields",ct=function(n){var r=n.hideOptionalLabel,t=n.required,o=n.secondaryLabel;return f.useMemo(function(){return[o,r||t?null:"(optional)"].filter(Boolean).join(" ")},[t,o,r])};function Ve(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function en(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?Ve(Object(r),!0).forEach(function(t){D(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Ve(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var Sr=function(n){var r,t=n.children,o=n.invalid,s=n.id;return a(E,en(en({},D({},Re,!0)),{},{borderLeft:o,borderLeftWidth:"xl",css:v((r={borderLeftColor:o?h.systemError:void 0},D(r,"[".concat(Ze,"] &[").concat(Re,"]"),{marginLeft:o?"calc(-".concat(W(1)," - ").concat(M.borderWidth.xl,"px)"):void 0,position:"relative"}),D(r,"[".concat(Ze,"] [").concat(lt,"] &[").concat(Re,"]:not(:first-of-type)"),{marginLeft:0}),r),"",""),gap:.5,id:s,paddingLeft:o?1:void 0,children:t}))},Re="data-field-container",wr=function(n){var r=n.as,t=r===void 0?"label":r,o=n.children,s=n.className,i=n.id,l=n.htmlFor,d=n.required,c=n.secondaryLabel,m=n.hideOptionalLabel,p=ct({hideOptionalLabel:m,required:d,secondaryLabel:c});return u(B,{as:t,className:s,htmlFor:l,id:i,children:[a(_,{as:"span",fontWeight:"bold",children:o}),p?u(_,{as:"span",color:"muted",children:[" ",p]}):null]})},Mr=function(n){var r=n.children,t=n.id;return a(_,{color:"muted",display:"block",id:t,children:r})},dt={name:"4zleql",styles:"display:block"},Ir=function(n){var r=n.children,t=n.id;return u(R,{alignItems:"center",gap:.5,children:[a(B,{flexShrink:0,children:a(Vr,{"aria-hidden":"false","aria-label":"Error",color:"error",css:dt,size:"md"})}),a(_,{color:"error",display:"block",fontWeight:"bold",id:t,children:r})]})},ut=function(n){var r=n.children,t=n.hint,o=n.id,s=n.invalid,i=n.label,l=n.labelId,d=n.maxWidth,c=n.secondaryLabel,m=n.hideOptionalLabel,p=n.message,b=n.required,C=pt(o),y=C.fieldId,g=C.hintId,O=C.messageId,x=mt({required:b,fieldId:y,message:p,messageId:O,hint:t,hintId:g,invalid:s});return u(Sr,{invalid:s,children:[a(wr,{hideOptionalLabel:m,htmlFor:y,id:l,required:b,secondaryLabel:c,children:i}),t?a(Mr,{id:g,children:t}):null,p&&s?a(Ir,{id:O,children:p}):null,typeof r=="function"?r(x):r,d?a("div",{"aria-hidden":!0,css:v({height:0,marginTop:"-".concat(W(.5)),maxWidth:M.maxWidth.field[d],overflow:"hidden","::after":{content:'"---------------------------------------------------------------"'}},"","")}):null]})},pt=function(n){var r=J(n),t=n||"field-".concat(r),o="field-".concat(r,"-hint"),s="field-".concat(r,"-message");return{fieldId:t,hintId:o,messageId:s}},mt=function(n){var r=n.required,t=n.fieldId,o=n.message,s=n.messageId,i=n.hint,l=n.hintId,d=n.invalid,c=[o?s:null,i?l:null].filter(Boolean),m=c.length?c.join(" "):void 0;return{"aria-required":!!r,"aria-invalid":!!d,"aria-describedby":m,id:t}},Dr=f.createContext(void 0),Br=function(){return f.useContext(Dr)};function ft(e){var n=e.children,r=e.invalid,t=e.messageId,o=e.name,s=e.required,i=J();return a(Dr.Provider,{value:{invalid:r,name:o||i,messageId:t,required:s},children:n})}var Q=function(n){var r=n.block,t=r===void 0?!1:r,o=n.children,s=n.hint,i=n.id,l=n.invalid,d=l===void 0?!1:l,c=n.label,m=n.hideOptionalLabel,p=n.message,b=n.name,C=n.required,y=C===void 0?!1:C,g=ht(i),O=g.groupId,x=g.hintId,w=g.messageId,j=[d&&p?w:null,s?x:null].filter(Boolean),H=j.length?j.join(" "):void 0;return a(ft,{invalid:d,messageId:d&&p?w:void 0,name:b,required:y,children:a(Sr,{id:O,invalid:d,children:u(B,{"aria-describedby":H,as:"fieldset",children:[c?a(wr,{as:"legend",hideOptionalLabel:m,required:y,children:c}):null,u(E,{css:v({marginTop:c?W(.5):void 0},"",""),gap:.5,children:[s?a(Mr,{id:x,children:s}):null,p&&d?a(Ir,{id:w,children:p}):null,a(R,{flexDirection:t?"column":"row",flexWrap:t?void 0:"wrap",gap:1,paddingTop:.5,width:"100%",children:o})]})]})})})},ht=function(n){var r=J(n),t=n||"control-group-".concat(r),o="control-group-".concat(r,"-hint"),s="control-group-".concat(r,"-message");return{groupId:t,hintId:o,messageId:s}};function nn(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function Fe(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?nn(Object(r),!0).forEach(function(t){D(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):nn(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function gt(e){var n=e.disabled,r=e.invalid,t=e.size,o=A.control[t],s=o.width,i=o.height,l=o.borderWidth;return a(R,{alignItems:"center",as:"span",css:v(Fe(Fe({backgroundColor:h.backgroundBody,borderColor:h.border,borderRadius:"100%",borderStyle:"solid",borderWidth:l,inset:0,position:"absolute"},n&&{color:h.borderMuted,borderColor:h.borderMuted,backgroundColor:h.backgroundShade,"@media (forced-colors: active)":{borderColor:"GrayText",color:"GrayText"}}),r&&{borderColor:h.systemError,backgroundColor:h.systemErrorMuted}),"",""),flexShrink:0,height:i,justifyContent:"center",rounded:!0,width:s,children:a(B,{as:"span",css:v(Fe({borderRadius:"100%",backgroundColor:h.foregroundText,"@media (forced-colors: active)":{backgroundColor:"MenuText"}},n&&{backgroundColor:h.borderMuted,"@media (forced-colors: active)":{backgroundColor:"GrayText"}}),"",""),height:"calc(100% - 0.5rem)",highContrastOutline:!0,width:"calc(100% - 0.5rem)"})})}var bt=["height","width"];function rn(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function vt(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?rn(Object(r),!0).forEach(function(t){D(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):rn(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var yt=f.forwardRef(function(n,r){var t=n.height,o=n.width,s=ee(n,bt);return a("input",vt({css:v({height:t,margin:0,opacity:0,verticalAlign:"middle",width:o,"&:focus ~ span:first-of-type":A.outline,"~ span > span":{opacity:0},"&:checked ~ span > span":{opacity:1}},"",""),ref:r},s))}),Pt=function(n){var r=n.children,t=n.disabled,o=n.htmlFor;return a(R,{alignItems:"flex-start",as:"label",color:"text",css:v({cursor:t?"not-allowed":"pointer"},"",""),gap:.5,htmlFor:o,inline:!0,children:r})},Ot={sm:0,md:"0.2rem"};function Ct(e){var n=e.children,r=e.disabled,t=e.size,o=Ot[t];return a(_,{color:r?"muted":"text",css:v({paddingTop:o},"",""),flexGrow:1,children:n})}var xt=["children","disabled","invalid","name","required","size"];function tn(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function kt(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?tn(Object(r),!0).forEach(function(t){D(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):tn(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var on=f.forwardRef(function(n,r){var t=n.children,o=n.disabled,s=n.invalid,i=n.name,l=n.required,d=n.size,c=d===void 0?"md":d,m=ee(n,xt),p=St(m.id),b=Br(),C=A.control[c],y=C.height,g=C.width,O=typeof s=="boolean"?s:b==null?void 0:b.invalid,x=typeof l=="boolean"?l:b==null?void 0:b.required,w=i||(b==null?void 0:b.name);return u(Pt,{disabled:o,htmlFor:p,children:[u("span",{css:v({display:"inline-block",height:y,position:"relative",width:g},"",""),children:[a(yt,kt({"aria-describedby":O?b==null?void 0:b.messageId:void 0,"aria-invalid":O||void 0,"aria-required":x,disabled:o,height:y,id:p,name:w,ref:r,type:"radio",width:g},m)),a(gt,{disabled:o,invalid:O,size:c})]}),a(Ct,{disabled:o,size:c,children:t})]})});function St(e){var n=J(e);return e||"radio-".concat(n)}function an(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function sn(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?an(Object(r),!0).forEach(function(t){D(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):an(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var wt=function(n){var r=n.disabled,t=n.indeterminate,o=n.invalid,s=n.size,i=A.control[s],l=i.width,d=i.height,c=i.borderWidth;return a(R,{alignItems:"center",as:"span",css:v(sn(sn({backgroundColor:h.backgroundBody,borderColor:h.border,borderStyle:"solid",borderWidth:c,color:h.foregroundText,inset:0,position:"absolute"},r&&{color:h.borderMuted,borderColor:h.borderMuted,backgroundColor:h.backgroundShade,"@media (forced-colors: active)":{borderColor:"GrayText",color:"GrayText"}}),o&&{borderColor:h.systemError,backgroundColor:h.systemErrorMuted}),"",""),flexShrink:0,height:d,justifyContent:"center",rounded:!0,width:l,children:t?a(et,{size:s,weight:"bold"}):a(nt,{size:s,weight:"bold"})})},Mt=["height","width"];function ln(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function It(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?ln(Object(r),!0).forEach(function(t){D(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ln(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var Dt=f.forwardRef(function(n,r){var t=n.height,o=n.width,s=ee(n,Mt);return a("input",It({css:v({height:t,margin:0,opacity:0,verticalAlign:"middle",width:o,"&:focus ~ span:first-of-type":A.outline,"~ span > svg":{opacity:0},"&:checked ~ span > svg, &:indeterminate ~ span > svg":{opacity:1}},"",""),ref:r},s))});function Bt(e){var n=e.children,r=e.htmlFor,t=e.disabled;return a(R,{alignItems:"flex-start",as:"label",color:"text",css:v({cursor:t?"not-allowed":"pointer"},"",""),gap:.5,htmlFor:r,inline:!0,children:n})}var At={sm:0,md:"0.2rem"};function _t(e){var n=e.children,r=e.disabled,t=e.size,o=At[t];return a(_,{color:r?"muted":"text",css:v({paddingTop:o},"",""),flexGrow:1,children:n})}var Lt=["checked","children","disabled","indeterminate","invalid","name","required","size"];function cn(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function jt(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?cn(Object(r),!0).forEach(function(t){D(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):cn(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var Ne=f.forwardRef(function(n,r){var t=n.checked,o=n.children,s=n.disabled,i=n.indeterminate,l=n.invalid,d=n.name,c=n.required,m=n.size,p=m===void 0?"md":m,b=ee(n,Lt),C=Tt(b.id),y=f.useRef(null),g=Br(),O=A.control[p],x=O.height,w=O.width,j=typeof l=="boolean"?l:g==null?void 0:g.invalid,H=typeof c=="boolean"?c:g==null?void 0:g.required,Ae=d||(g==null?void 0:g.name);f.useEffect(function(){y.current&&(y.current.indeterminate=!!i)},[i]);var _e=i?!1:t;return u(Bt,{disabled:s,htmlFor:C,children:[u("span",{css:v({display:"inline-block",height:x,position:"relative",width:w},"",""),children:[a(Dt,jt({"aria-checked":i?"mixed":void 0,"aria-describedby":j?g==null?void 0:g.messageId:void 0,"aria-invalid":j||void 0,"aria-required":H,checked:_e,disabled:s,height:x,id:C,name:Ae,ref:Wr([r,y]),type:"checkbox",width:w},b)),a(wt,{disabled:s,indeterminate:i,invalid:j,size:p})]}),a(_t,{disabled:s,size:p,children:o})]})});function Tt(e){var n=J(e);return e||"checkbox-".concat(n)}var Rt=["label","hideOptionalLabel","required","hint","message","invalid","block","maxWidth","options","placeholder","id"];function dn(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function F(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?dn(Object(r),!0).forEach(function(t){D(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):dn(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var ze=f.forwardRef(function(n,r){var t=n.label,o=n.hideOptionalLabel,s=n.required,i=n.hint,l=n.message,d=n.invalid,c=n.block,m=n.maxWidth,p=m===void 0?"md":m,b=n.options,C=n.placeholder,y=n.id,g=ee(n,Rt),O=qt({block:c});return a(ut,{hideOptionalLabel:o,hint:i,id:y,invalid:d,label:t,maxWidth:p,message:l,required:s,children:function(w){return u(Ft,{block:c,maxWidth:p,children:[a("select",F(F(F({css:O,ref:r},w),g),{},{children:a(Nt,{options:b,placeholder:C})})),a(Et,{disabled:g.disabled})]})}})}),Ft=function(n){var r=n.children,t=n.block,o=n.maxWidth;return a("div",{css:v(F({position:"relative"},!t&&{maxWidth:M.maxWidth.field[o]}),"",""),children:r})},Nt=function(n){var r=n.options,t=n.placeholder;return u(f.Fragment,{children:[t?a("option",{value:"",children:t}):null,r.map(function(o){return"options"in o?a("optgroup",{disabled:o.disabled,label:o.label,children:o.options.map(function(s){var i=s.value,l=s.label,d=s.disabled;return a("option",{disabled:d,value:i,children:l},i)})},o.label):a("option",{disabled:o.disabled,value:o.value,children:o.label},o.value)})]})},Et=function(n){var r=n.disabled;return a(rt,{css:v({position:"absolute",top:"50%",right:W(.75),transform:"translateY(-50%)",opacity:r?.3:void 0,pointerEvents:"none",color:h.foregroundAction},"","")})},qt=function(n){var r=n.block;return F(F(F(F({position:"relative",appearance:"none",boxSizing:"border-box",paddingLeft:W(1),paddingRight:"calc(".concat(M.borderWidth.lg,"px + 2.5rem)"),margin:0,background:h.backgroundBody,borderWidth:M.borderWidth.lg,borderStyle:"solid",borderColor:h.border,borderRadius:M.borderRadius,color:h.foregroundText,width:"100%",fontFamily:M.font.body},A.input.md),{},{lineHeight:M.lineHeight.default},A.truncate),r&&{maxWidth:"none",display:"block"}),{},{'&[aria-invalid="true"]':{backgroundColor:h.systemErrorMuted,borderColor:h.systemError},"&:disabled":{opacity:1,cursor:"not-allowed",borderColor:h.borderMuted,backgroundColor:h.backgroundShade,color:h.foregroundMuted},"&:focus":A.outline})};function zt(){var e=J();return{titleId:"drawer-".concat(e,"-title")}}var Wt={name:"6dhm9o",styles:"visibility:hidden"};function $t(e){var n=e.actions,r=e.children,t=e.elementToFocusOnClose,o=e.onClose,s=e.title,i=zt(),l=i.titleId;return a(Zr,{returnFocus:t?function(){return window.setTimeout(function(){return t.focus()},0),!1}:!0,children:u(R,{"aria-labelledby":l,"aria-modal":!0,background:"body",css:v({boxShadow:M.shadow.lg,inset:0,position:"fixed"},"",""),flexDirection:"column",highContrastOutline:!0,role:"dialog",children:[u(Gt,{children:[a(Ht,{id:l,children:s}),a(U,{"aria-hidden":!0,css:Wt,iconAfter:Qe,tabIndex:-1,variant:"text",children:"Close"})]}),a(Ut,{title:s,children:r}),n?a(Xt,{children:n}):null,a(U,{css:Er({position:"fixed",right:qr({xs:W(.75),md:W(1.5)}),top:"1.25rem",zIndex:M.zIndex.elevated}),iconAfter:Qe,onClick:o,variant:"text",children:"Close"})]})})}function Gt(e){var n=e.children;return a(R,{background:"body",borderBottom:!0,paddingX:{xs:.75,md:1.5},paddingY:1,children:n})}var Yt={name:"1r5gb7q",styles:"display:inline-block"};function Ht(e){var n=e.children,r=e.id;return a(_,{as:"h2",css:Yt,"data-autofocus":!0,focusRingFor:"keyboard",fontSize:"lg",fontWeight:"bold",id:r,lineHeight:"heading",tabIndex:-1,children:n})}function Ut(e){var n=e.children,r=e.title;return a(B,{"aria-label":"".concat(r," content"),as:"section",background:"body",css:v({overflowY:"auto",":focus":{outlineOffset:"-".concat(A.outline.outlineWidth)}},"",""),flexGrow:1,focusRingFor:"keyboard",paddingX:{xs:.75,md:1.5},paddingY:{xs:1,md:1.5},tabIndex:0,children:n})}var Kt={name:"xdvdnl",styles:"margin-top:auto"};function Xt(e){var n=e.children;return a(B,{background:"body",borderTop:!0,css:Kt,paddingX:{xs:.75,md:1.5},paddingY:1,children:n})}var Jt={md:"32rem",lg:"45rem"},Qt=function(n){var r=n.actions,t=n.children,o=n.elementToFocusOnClose,s=n.isOpen,i=s===void 0?!1:s,l=n.mutedOverlay,d=l===void 0?!1:l,c=n.onClose,m=n.onDismiss,p=n.title,b=n.width,C=b===void 0?"md":b,y=$r(c,m),g=f.useRef(0),O=Gr(),x=f.useState(!0),w=x[0],j=x[1],H=Yr();f.useEffect(function(){g.current=window.innerWidth-document.documentElement.clientWidth},[]),f.useEffect(function(){i&&j(!1)},[i]),f.useEffect(function(){var Le=function(je){i&&je.code==="Escape"&&(je.preventDefault(),je.stopPropagation(),y())};return window.addEventListener("keydown",Le),function(){return window.removeEventListener("keydown",Le)}},[i,y]);var Ae=Jr(H?i:!1),_e=Ae.modalContainerRef;if(!H||!Qr())return null;var Fr=i?!0:!w;return it.createPortal(u(f.Fragment,{children:[i?a(Vt,{scrollbarWidth:g.current}):null,u("div",{ref:_e,children:[a("div",{css:v({pointerEvents:"none",position:"absolute",opacity:i?1:0,transition:i?"none":"opacity ".concat(O?"1ms":"150ms")},"",""),"data-drawer":"transitioner",onTransitionEnd:function(){j(!0)}}),a(Zt,{isOpen:i,mutedOverlay:d,onClick:y,prefersReducedMotion:O}),a(B,{css:v({inset:0,marginLeft:"auto",position:"fixed",transform:"translateX(".concat(i?"0":"100%",")"),transition:"transform ".concat(O?"1ms":"150ms"," ease"),zIndex:M.zIndex.dialog},"",""),maxWidth:Jt[C],children:Fr&&a($t,{actions:r,elementToFocusOnClose:o,onClose:y,title:p,children:t})})]})]}),document.body)};function Zt(e){var n=e.isOpen,r=e.mutedOverlay,t=e.onClick,o=e.prefersReducedMotion;return a("div",{css:v({pointerEvents:n?"all":"none",position:"fixed",inset:0,backgroundColor:r?h.overlayMuted:h.overlay,opacity:n?1:0,transition:"opacity ".concat(o?"1ms":"150ms"," ease"),zIndex:M.zIndex.overlay},"",""),onClick:t})}function Vt(e){var n=e.scrollbarWidth;return a(Nr,{styles:v({html:{marginRight:n,scrollbarGutter:"auto"},body:{overflow:"hidden"}},"","")})}var Ar=Symbol.for("immer-nothing"),un=Symbol.for("immer-draftable"),k=Symbol.for("immer-state");function I(e,...n){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var K=Object.getPrototypeOf;function X(e){return!!e&&!!e[k]}function $(e){var n;return e?_r(e)||Array.isArray(e)||!!e[un]||!!((n=e.constructor)!=null&&n[un])||Ie(e)||De(e):!1}var eo=Object.prototype.constructor.toString();function _r(e){if(!e||typeof e!="object")return!1;const n=K(e);if(n===null)return!0;const r=Object.hasOwnProperty.call(n,"constructor")&&n.constructor;return r===Object?!0:typeof r=="function"&&Function.toString.call(r)===eo}function ke(e,n){Me(e)===0?Reflect.ownKeys(e).forEach(r=>{n(r,e[r],e)}):e.forEach((r,t)=>n(t,r,e))}function Me(e){const n=e[k];return n?n.type_:Array.isArray(e)?1:Ie(e)?2:De(e)?3:0}function We(e,n){return Me(e)===2?e.has(n):Object.prototype.hasOwnProperty.call(e,n)}function Lr(e,n,r){const t=Me(e);t===2?e.set(n,r):t===3?e.add(r):e[n]=r}function no(e,n){return e===n?e!==0||1/e===1/n:e!==e&&n!==n}function Ie(e){return e instanceof Map}function De(e){return e instanceof Set}function z(e){return e.copy_||e.base_}function $e(e,n){if(Ie(e))return new Map(e);if(De(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);const r=_r(e);if(n===!0||n==="class_only"&&!r){const t=Object.getOwnPropertyDescriptors(e);delete t[k];let o=Reflect.ownKeys(t);for(let s=0;s<o.length;s++){const i=o[s],l=t[i];l.writable===!1&&(l.writable=!0,l.configurable=!0),(l.get||l.set)&&(t[i]={configurable:!0,writable:!0,enumerable:l.enumerable,value:e[i]})}return Object.create(K(e),t)}else{const t=K(e);if(t!==null&&r)return{...e};const o=Object.create(t);return Object.assign(o,e)}}function Ke(e,n=!1){return Be(e)||X(e)||!$(e)||(Me(e)>1&&(e.set=e.add=e.clear=e.delete=ro),Object.freeze(e),n&&Object.entries(e).forEach(([r,t])=>Ke(t,!0))),e}function ro(){I(2)}function Be(e){return Object.isFrozen(e)}var to={};function G(e){const n=to[e];return n||I(0,e),n}var Z;function jr(){return Z}function oo(e,n){return{drafts_:[],parent_:e,immer_:n,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function pn(e,n){n&&(G("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=n)}function Ge(e){Ye(e),e.drafts_.forEach(ao),e.drafts_=null}function Ye(e){e===Z&&(Z=e.parent_)}function mn(e){return Z=oo(Z,e)}function ao(e){const n=e[k];n.type_===0||n.type_===1?n.revoke_():n.revoked_=!0}function fn(e,n){n.unfinalizedDrafts_=n.drafts_.length;const r=n.drafts_[0];return e!==void 0&&e!==r?(r[k].modified_&&(Ge(n),I(4)),$(e)&&(e=Se(n,e),n.parent_||we(n,e)),n.patches_&&G("Patches").generateReplacementPatches_(r[k].base_,e,n.patches_,n.inversePatches_)):e=Se(n,r,[]),Ge(n),n.patches_&&n.patchListener_(n.patches_,n.inversePatches_),e!==Ar?e:void 0}function Se(e,n,r){if(Be(n))return n;const t=n[k];if(!t)return ke(n,(o,s)=>hn(e,t,n,o,s,r)),n;if(t.scope_!==e)return n;if(!t.modified_)return we(e,t.base_,!0),t.base_;if(!t.finalized_){t.finalized_=!0,t.scope_.unfinalizedDrafts_--;const o=t.copy_;let s=o,i=!1;t.type_===3&&(s=new Set(o),o.clear(),i=!0),ke(s,(l,d)=>hn(e,t,o,l,d,r,i)),we(e,o,!1),r&&e.patches_&&G("Patches").generatePatches_(t,r,e.patches_,e.inversePatches_)}return t.copy_}function hn(e,n,r,t,o,s,i){if(X(o)){const l=s&&n&&n.type_!==3&&!We(n.assigned_,t)?s.concat(t):void 0,d=Se(e,o,l);if(Lr(r,t,d),X(d))e.canAutoFreeze_=!1;else return}else i&&r.add(o);if($(o)&&!Be(o)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;Se(e,o),(!n||!n.scope_.parent_)&&typeof t!="symbol"&&Object.prototype.propertyIsEnumerable.call(r,t)&&we(e,o)}}function we(e,n,r=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&Ke(n,r)}function io(e,n){const r=Array.isArray(e),t={type_:r?1:0,scope_:n?n.scope_:jr(),modified_:!1,finalized_:!1,assigned_:{},parent_:n,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let o=t,s=Xe;r&&(o=[t],s=V);const{revoke:i,proxy:l}=Proxy.revocable(o,s);return t.draft_=l,t.revoke_=i,l}var Xe={get(e,n){if(n===k)return e;const r=z(e);if(!We(r,n))return so(e,r,n);const t=r[n];return e.finalized_||!$(t)?t:t===Ee(e.base_,n)?(qe(e),e.copy_[n]=Ue(t,e)):t},has(e,n){return n in z(e)},ownKeys(e){return Reflect.ownKeys(z(e))},set(e,n,r){const t=Tr(z(e),n);if(t!=null&&t.set)return t.set.call(e.draft_,r),!0;if(!e.modified_){const o=Ee(z(e),n),s=o==null?void 0:o[k];if(s&&s.base_===r)return e.copy_[n]=r,e.assigned_[n]=!1,!0;if(no(r,o)&&(r!==void 0||We(e.base_,n)))return!0;qe(e),He(e)}return e.copy_[n]===r&&(r!==void 0||n in e.copy_)||Number.isNaN(r)&&Number.isNaN(e.copy_[n])||(e.copy_[n]=r,e.assigned_[n]=!0),!0},deleteProperty(e,n){return Ee(e.base_,n)!==void 0||n in e.base_?(e.assigned_[n]=!1,qe(e),He(e)):delete e.assigned_[n],e.copy_&&delete e.copy_[n],!0},getOwnPropertyDescriptor(e,n){const r=z(e),t=Reflect.getOwnPropertyDescriptor(r,n);return t&&{writable:!0,configurable:e.type_!==1||n!=="length",enumerable:t.enumerable,value:r[n]}},defineProperty(){I(11)},getPrototypeOf(e){return K(e.base_)},setPrototypeOf(){I(12)}},V={};ke(Xe,(e,n)=>{V[e]=function(){return arguments[0]=arguments[0][0],n.apply(this,arguments)}});V.deleteProperty=function(e,n){return V.set.call(this,e,n,void 0)};V.set=function(e,n,r){return Xe.set.call(this,e[0],n,r,e[0])};function Ee(e,n){const r=e[k];return(r?z(r):e)[n]}function so(e,n,r){var o;const t=Tr(n,r);return t?"value"in t?t.value:(o=t.get)==null?void 0:o.call(e.draft_):void 0}function Tr(e,n){if(!(n in e))return;let r=K(e);for(;r;){const t=Object.getOwnPropertyDescriptor(r,n);if(t)return t;r=K(r)}}function He(e){e.modified_||(e.modified_=!0,e.parent_&&He(e.parent_))}function qe(e){e.copy_||(e.copy_=$e(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var lo=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(n,r,t)=>{if(typeof n=="function"&&typeof r!="function"){const s=r;r=n;const i=this;return function(d=s,...c){return i.produce(d,m=>r.call(this,m,...c))}}typeof r!="function"&&I(6),t!==void 0&&typeof t!="function"&&I(7);let o;if($(n)){const s=mn(this),i=Ue(n,void 0);let l=!0;try{o=r(i),l=!1}finally{l?Ge(s):Ye(s)}return pn(s,t),fn(o,s)}else if(!n||typeof n!="object"){if(o=r(n),o===void 0&&(o=n),o===Ar&&(o=void 0),this.autoFreeze_&&Ke(o,!0),t){const s=[],i=[];G("Patches").generateReplacementPatches_(n,o,s,i),t(s,i)}return o}else I(1,n)},this.produceWithPatches=(n,r)=>{if(typeof n=="function")return(i,...l)=>this.produceWithPatches(i,d=>n(d,...l));let t,o;return[this.produce(n,r,(i,l)=>{t=i,o=l}),t,o]},typeof(e==null?void 0:e.autoFreeze)=="boolean"&&this.setAutoFreeze(e.autoFreeze),typeof(e==null?void 0:e.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){$(e)||I(8),X(e)&&(e=co(e));const n=mn(this),r=Ue(e,void 0);return r[k].isManual_=!0,Ye(n),r}finishDraft(e,n){const r=e&&e[k];(!r||!r.isManual_)&&I(9);const{scope_:t}=r;return pn(t,n),fn(void 0,t)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,n){let r;for(r=n.length-1;r>=0;r--){const o=n[r];if(o.path.length===0&&o.op==="replace"){e=o.value;break}}r>-1&&(n=n.slice(r+1));const t=G("Patches").applyPatches_;return X(e)?t(e,n):this.produce(e,o=>t(o,n))}};function Ue(e,n){const r=Ie(e)?G("MapSet").proxyMap_(e,n):De(e)?G("MapSet").proxySet_(e,n):io(e,n);return(n?n.scope_:jr()).drafts_.push(r),r}function co(e){return X(e)||I(10,e),Rr(e)}function Rr(e){if(!$(e)||Be(e))return e;const n=e[k];let r;if(n){if(!n.modified_)return n.base_;n.finalized_=!0,r=$e(e,n.scope_.immer_.useStrictShallowCopy_)}else r=$e(e,!0);return ke(r,(t,o)=>{Lr(r,t,Rr(o))}),n&&(n.finalized_=!1),r}var S=new lo,re=S.produce;S.produceWithPatches.bind(S);S.setAutoFreeze.bind(S);S.setUseStrictShallowCopy.bind(S);S.applyPatches.bind(S);S.createDraft.bind(S);S.finishDraft.bind(S);const T=[{partyId:1,partyDisplayName:"Jefferson PTY LTD",formattedPartyExternalId:"89 790 756 100",someExtraInfo:"our component allows this field but does not use it at all",roleDisplayName:"User",roleName:"USER"},{partyId:2,partyDisplayName:"Metaweb (agent role)",formattedPartyExternalId:"89 790 756 100",someExtraInfo:"our component allows this field but does not use it at all",roleDisplayName:"Agent",roleName:"AGENT"},{partyId:3,partyDisplayName:"Fresh Produce Australia",formattedPartyExternalId:"92 635 964 018",someExtraInfo:"our component allows this field but does not use it at all",roleDisplayName:"Principal Authority (Owner)",roleName:"PRINCIPAL_AUTHORITY_OWNER"},{partyId:4,partyDisplayName:"Fresh Produce Australia",formattedPartyExternalId:"92 635 964 018",someExtraInfo:"our component allows this field but does not use it at all",roleDisplayName:"Manager",roleName:"MANAGER"}],xe=[{partyId:5,partyDisplayName:"Business A",formattedPartyExternalId:"ABN: 88 888 888 888",roleDisplayName:"User",roleGroupName:"BIOSECURITY"},{partyId:6,partyDisplayName:"Business B",formattedPartyExternalId:"ABN: 88 888 888 888",roleDisplayName:"User",roleGroupName:"BIOSECURITY"},{partyId:7,partyDisplayName:"Business C",formattedPartyExternalId:"ABN: 88 888 888 888",roleDisplayName:"User",roleGroupName:"BIOSECURITY"},{partyId:8,partyDisplayName:"Business D",formattedPartyExternalId:"ABN: 88 888 888 888",roleDisplayName:"User",roleGroupName:"BIOSECURITY"}],uo={linkedBusinesses:[...T,...xe],selectedBusiness:T[0],setSelectedBusiness:()=>{}},_o={title:"AppLayout",component:N,parameters:{layout:"fullscreen"},render:function(n){return u(f.Fragment,{children:[a(Y,{links:[{href:"#main-content",label:"Skip to main content"}]}),a(N,{...n,children:a(L,{children:a(q,{children:a("h1",{children:"Page heading"})})})})]})}},po=e=>new Promise(n=>setTimeout(n,e)),P=async()=>{await po(2e3),alert("You have been signed out.")},te={args:{focusMode:!1,userName:"Toto Wolff",unreadMessageCount:6,activePath:"/",handleSignOut:P}},oe={args:{focusMode:!0,userName:"Toto Wolff",unreadMessageCount:6,activePath:"/",handleSignOut:P}},ae={args:{activePath:"/",focusMode:!1,handleSignOut:P},render:function(n){const[r,t]=f.useState(!1);return f.useEffect(()=>{setTimeout(()=>{t(!0)},1e3)},[]),u(f.Fragment,{children:[a(Y,{links:[{href:"#main-content",label:"Skip to main content"}]}),a(N,{...n,...r?{userName:"Toto Wolff",unreadMessageCount:6}:{},children:a(L,{children:a(q,{children:a("h1",{children:"Page heading"})})})})]})}},ie={args:{focusMode:!1,userName:"Toto Wolff",unreadMessageCount:6,activePath:"/",handleSignOut:P,domain:"test.agriculture.gov.au"}},se={args:{focusMode:!1,userName:"Toto Wolff",unreadMessageCount:6,activePath:"/account/exports/dashboard",handleSignOut:P,subdomain:"services",domain:e=>`http://${e.subdomain}.example.com/custom-prefix${e.path}`}},le={args:{businessDetails:uo,focusMode:!1,userName:"Toto Wolff",unreadMessageCount:6,activePath:"/account/exports/dashboard",handleSignOut:P,subdomain:"services",features:{people:!0,exportSystems:!0,invoices:!0,licences:!0,quotas:!0},domain:e=>e.subdomain==="services"?`http://localhost:8080${e.path}`:`http://localhost:3000${e.path}`},render:e=>{const[n,r]=f.useState("/account/exports/dashboard"),[t,o]=f.useState("services");return u(f.Fragment,{children:[a(Y,{links:[{href:"#main-content",label:"Skip to main content"}]}),a(N,{...e,activePath:n,subdomain:t,children:a(L,{children:u(E,{gap:3,children:[a(st,{children:"configure activePath / subdomain to test routing"}),a(ze,{label:"activePath",onChange:s=>r(s.target.value),value:n,options:[{value:"/account/exports/dashboard",label:"account-dashboard"},{value:"/account/exports/manage-people",label:"manage-people"},{value:"/establishments",label:"establishments"},{value:"/intelligence",label:"intelligence"},{value:"/compliance",label:"compliance"},{value:"/quota",label:"quota"},{value:"/export-systems",label:"export-systems"},{value:"/licences",label:"licences"},{value:"/inexs",label:"inexs"}]}),a(ze,{label:"subdomain",onChange:s=>o(s.target.value),value:t,options:[{value:"services",label:"services"},{value:"exports",label:"exports"}]})]})})})]})}},ce={args:{focusMode:!1,userName:"Toto Wolff",unreadMessageCount:6,activePath:"/intelligence",handleSignOut:P},render:function(n){const[r,t]=f.useState({exports:T,imports:xe,selectedBusiness:T[1]}),o=i=>t(l=>({...l,selectedBusiness:i})),s=(i,l)=>()=>{if(i==="imports"){const d=xe.slice(0,l),c=d[0];t(m=>({...m,imports:d,selectedBusiness:c}))}if(i==="exports"){const d=T.slice(0,l),c=d[0];t(m=>({...m,exports:d,selectedBusiness:c}))}};return u(f.Fragment,{children:[a(Y,{links:[{href:"#main-content",label:"Skip to main content"}]}),a(N,{...n,businessDetails:{selectedBusiness:r.selectedBusiness,linkedBusinesses:[...r.exports,...r.imports],setSelectedBusiness:o},children:a(L,{children:u(E,{gap:3,children:[a(Hr,{links:[{label:"Data and insights",href:"/intelligence"},{label:"Report 1",href:"/intelligence/report/report_1"}]}),a(q,{children:a("h1",{children:"Business dropdown configuration"})}),u(R,{gap:1,children:[a(Q,{label:"Number of linked businesses",block:!0,hideOptionalLabel:!0,children:Array.from(new Array(T.length+1).keys()).map(i=>{var l;return u(on,{checked:((l=r==null?void 0:r.exports)==null?void 0:l.length)===i,onChange:s("exports",i),children:[i," ",i===0?"business":"businesses"]},i)})}),a(Q,{label:"Number of linked biosecurity businesses",block:!0,hideOptionalLabel:!0,children:Array.from(new Array(xe.length+1).keys()).map(i=>{var l;return u(on,{checked:((l=r==null?void 0:r.imports)==null?void 0:l.length)===i,onChange:s("imports",i),children:[i," ",i===0?"import business":"import businesses"]},i)})})]})]})})})]})}},de={args:{focusMode:!1,userName:"Toto Wolff",unreadMessageCount:6,activePath:"/",handleSignOut:P},render:function(n){const r=T,[t,o]=f.useState(r[1]),[s,i]=f.useState(),l=()=>i(void 0),d={linkedBusinesses:r,selectedBusiness:t,setSelectedBusiness:i};return u(f.Fragment,{children:[a(Y,{links:[{href:"#main-content",label:"Skip to main content"}]}),u(N,{...n,businessDetails:d,children:[a(Xr,{isOpen:s!==void 0,onClose:l,title:"Are you sure you want to leave this page?",actions:u(Cr,{children:[a(U,{onClick:()=>{s!==void 0&&o(s),i(void 0)},children:"Leave this page"}),a(U,{variant:"secondary",onClick:l,children:"Stay on this page"})]}),children:a(_,{as:"p",children:"You will lose all changes made since your last save."})}),a(L,{children:a(E,{gap:3,children:a(q,{children:u("h1",{children:["Active business: ",t==null?void 0:t.partyDisplayName]})})})})]})]})}},ue={args:{focusMode:!1,userName:"Toto Wolff",unreadMessageCount:6,activePath:"/",handleSignOut:P},render:function(n){const r={linkedBusinesses:T,selectedBusiness:T[0],setSelectedBusiness:()=>{}},t=()=>{const o=xr();return a(U,{onClick:o,children:"Sign out"})};return u(f.Fragment,{children:[a(Y,{links:[{href:"#main-content",label:"Skip to main content"}]}),a(N,{...n,businessDetails:r,children:a(L,{children:u(E,{gap:3,children:[u(q,{children:[a("h1",{children:"Sign out button"}),u("p",{children:["You can trigger the sign out modal using the"," ",a("code",{children:"useOpenSignOutModal"})," hook."]})]}),a(Cr,{children:a(t,{})})]})})})]})}},pe={args:{focusMode:!1,userName:"Toto Wolff",unreadMessageCount:6,activePath:"/",features:{quotas:!0,exportSystems:!0,licences:!0,invoices:!0,people:!0}}},me={args:{focusMode:!1,unreadMessageCount:6,activePath:"/",handleSignOut:P,claims:{given_name:"given_name",family_name:"family_name"}}},fe={args:{focusMode:!1,unreadMessageCount:6,activePath:"/",handleSignOut:P,claims:{family_name:"family_name"}}},he={args:{focusMode:!1,unreadMessageCount:6,activePath:"/",handleSignOut:P,claims:{family_name:"family_name"},errorComponents:{MissingName:e=>(f.useEffect(()=>{console.log("report this situation to an analytics provider here")},[]),a(Ur.MissingName,{...e}))}}},ge={args:{focusMode:!1,unreadMessageCount:6,activePath:"/",handleSignOut:P,claims:{family_name:"family_name"},errorComponents:{MissingName:e=>a(L,{children:u(q,{children:[a("p",{children:"Our app works just fine even without a generic name."}),a("hr",{}),e.children]})})}}},be={args:{focusMode:!1,unreadMessageCount:6,activePath:"/",handleSignOut:P,claims:{family_name:"family_name"},errorComponents:{MissingGivenName:e=>{const n=xr();return a(L,{children:u(q,{children:[a("p",{children:"Our app works just fine even without a given name."}),a("hr",{}),e.children,a(U,{onClick:n,children:"Sign out"})]})})}}}},ve={args:{focusMode:!1,unreadMessageCount:6,activePath:"/",handleSignOut:P,claims:{given_name:"given_name",family_name:"family_name",AARM_acr:"urn:id.gov.au:tdif:acr:ip1:cl1"},requiredProofingLevel:"IP2"}},ye={args:{focusMode:!1,unreadMessageCount:6,activePath:"/",handleSignOut:P},render:function(n){const r=["IP1","IP2","IP3","IP4"],t=["urn:id.gov.au:tdif:acr:ip1:cl1","urn:id.gov.au:tdif:acr:ip1:cl2","urn:id.gov.au:tdif:acr:ip1:cl3","urn:id.gov.au:tdif:acr:ip1p:cl1","urn:id.gov.au:tdif:acr:ip1p:cl2","urn:id.gov.au:tdif:acr:ip1p:cl3","urn:id.gov.au:tdif:acr:ip2:cl2","urn:id.gov.au:tdif:acr:ip2:cl3","urn:id.gov.au:tdif:acr:ip2p:cl2","urn:id.gov.au:tdif:acr:ip2p:cl3","urn:id.gov.au:tdif:acr:ip3:cl2","urn:id.gov.au:tdif:acr:ip3:cl3","urn:id.gov.au:tdif:acr:ip4:cl3"],[o,s]=f.useState(!0),[i,l]=f.useState({method:"urn",claims:{given_name:"given_name",family_name:"family_name",AARM_acr:[t[0]]},authDetails:{proofingLevel:["IP1"]},requiredProofingLevel:["IP2"]}),d=c=>{const m=c.kind==="max"?"#df185a":"#287be0",p=c!=null&&c.extraText?` (${c.extraText})`:"";return c!=null&&c.active?a(B,{css:{position:"relative",padding:"4px",border:`2px dashed ${m}`,"& + &":{marginTop:"1em"},":after":{position:"absolute",right:0,bottom:"120%",content:`"${c.kind==="max"?"maximum provided proof":"minimum required proof"}${p}"`,color:m,fontSize:"0.8em"}},children:c.children}):a(zr,{children:c.children})};return u(f.Fragment,{children:[a(Y,{links:[{href:"#main-content",label:"Skip to main content"}]}),u(B,{css:{position:"relative"},children:[a(B,{css:{border:"2px solid red",backgroundColor:"#fec0ff",position:"fixed",transform:"rotate(90deg)",transformOrigin:"top right",fontSize:"1.2em",padding:".4em 1em",top:"55vh",right:0,zIndex:99,cursor:"pointer"},onClick:()=>s(!0),children:"show config options"}),a(N,{...n,requiredProofingLevel:i.requiredProofingLevel,...i.method==="claims"?{claims:i.claims}:{authDetails:i.authDetails},children:a(L,{children:u(E,{gap:1.5,children:[a(_,{as:"p",fontSize:"lg",children:"You made it!"}),a(_,{as:"p",children:"Your proofing level means that you can see this page."})]})})})]}),a(Qt,{title:"Config",isOpen:o,onClose:()=>s(!1),children:u(E,{gap:1.5,children:[a(ze,{label:"Proofing method",required:!0,options:[{value:"authDetails",label:"AuthDetails"},{value:"claims",label:"Claims"}],onChange:c=>l(re(m=>{m.method=c.target.value}))}),i.method==="claims"?a(Q,{label:"Provided ACR",block:!0,hideOptionalLabel:!0,children:t.map(c=>a(d,{kind:"max",active:ne(Te({AARM_acr:c}))===ne(Te(i.claims)),extraText:ne(Te(i.claims)),children:a(Ne,{checked:new Set(i.claims.AARM_acr).has(c),onChange:m=>l(re(p=>{m.target.checked?p.claims.AARM_acr.push(c):p.claims.AARM_acr.splice(p.claims.AARM_acr.indexOf(c),1)})),children:c},c)},c))}):a(Q,{label:"Provided proofing level",block:!0,hideOptionalLabel:!0,children:r.map(c=>a(d,{kind:"max",active:ne(i.authDetails.proofingLevel)===c,children:a(Ne,{checked:new Set(i.authDetails.proofingLevel).has(c),onChange:m=>l(re(p=>{m.target.checked?p.authDetails.proofingLevel.push(c):p.authDetails.proofingLevel.splice(p.authDetails.proofingLevel.indexOf(c),1)})),children:c},c)},c))}),a(Q,{label:"Required proofing level",block:!0,hideOptionalLabel:!0,children:r.map(c=>a(d,{kind:"min",active:Kr(i.requiredProofingLevel)===c,children:a(Ne,{checked:new Set(i.requiredProofingLevel).has(c),onChange:m=>l(re(p=>{m.target.checked?p.requiredProofingLevel.push(c):p.requiredProofingLevel.splice(p.requiredProofingLevel.indexOf(c),1)})),children:c},c)},c))})]})})]})}},Pe={args:{focusMode:!1,unreadMessageCount:6,activePath:"/",handleSignOut:P,authDetails:{proofingLevel:"IP1"},requiredProofingLevel:"IP3",errorComponents:{ProofMissing:e=>a(L,{children:u(q,{children:[u("p",{children:["Your proofing level is insufficient at"," ",Je(e.providedProofingLevel),". Please fix it."]}),u("p",{children:["you should provide at least '",Je(e.requiredProofingLevel),"'"]})]})})}}},Oe={args:{focusMode:!1,userName:"Toto Wolff",unreadMessageCount:6,activePath:"/custom",handleSignOut:P,sidebarItems:[{items:[{label:"Custom sidenav",href:"/custom",icon:kr},{label:"Other item",href:"/other",icon:tt}]}],internal:"sidebar"}},Ce={args:{focusMode:!1,userName:"Toto Wolff",unreadMessageCount:6,activePath:"/custom",handleSignOut:P,headerProps:{heading:"Service Portal",subLine:"Supporting Australian agriculture"},sidebarItems:[{items:[{label:"Overview",href:"/custom",icon:kr,items:[{label:"Business details",href:"#"},{label:"People",href:"#"}]},{label:"Country requirements",href:"/country-requirements",icon:ot,items:[{label:"Other",href:"#"},{label:"Options",href:"#"}]}]},{items:[{label:"Help",href:"/help",icon:at}]}]}};var gn,bn,vn;te.parameters={...te.parameters,docs:{...(gn=te.parameters)==null?void 0:gn.docs,source:{originalSource:`{
  args: {
    focusMode: false,
    userName: 'Toto Wolff',
    unreadMessageCount: 6,
    activePath: '/',
    handleSignOut
  }
}`,...(vn=(bn=te.parameters)==null?void 0:bn.docs)==null?void 0:vn.source}}};var yn,Pn,On;oe.parameters={...oe.parameters,docs:{...(yn=oe.parameters)==null?void 0:yn.docs,source:{originalSource:`{
  args: {
    focusMode: true,
    userName: 'Toto Wolff',
    unreadMessageCount: 6,
    activePath: '/',
    handleSignOut
  }
}`,...(On=(Pn=oe.parameters)==null?void 0:Pn.docs)==null?void 0:On.source}}};var Cn,xn,kn;ae.parameters={...ae.parameters,docs:{...(Cn=ae.parameters)==null?void 0:Cn.docs,source:{originalSource:`{
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
}`,...(kn=(xn=ae.parameters)==null?void 0:xn.docs)==null?void 0:kn.source}}};var Sn,wn,Mn;ie.parameters={...ie.parameters,docs:{...(Sn=ie.parameters)==null?void 0:Sn.docs,source:{originalSource:`{
  args: {
    focusMode: false,
    userName: 'Toto Wolff',
    unreadMessageCount: 6,
    activePath: '/',
    handleSignOut,
    domain: 'test.agriculture.gov.au'
  }
}`,...(Mn=(wn=ie.parameters)==null?void 0:wn.docs)==null?void 0:Mn.source}}};var In,Dn,Bn;se.parameters={...se.parameters,docs:{...(In=se.parameters)==null?void 0:In.docs,source:{originalSource:`{
  args: {
    focusMode: false,
    userName: 'Toto Wolff',
    unreadMessageCount: 6,
    activePath: '/account/exports/dashboard',
    handleSignOut,
    subdomain: 'services',
    domain: route => \`http://\${route.subdomain}.example.com/custom-prefix\${route.path}\`
  }
}`,...(Bn=(Dn=se.parameters)==null?void 0:Dn.docs)==null?void 0:Bn.source}}};var An,_n,Ln;le.parameters={...le.parameters,docs:{...(An=le.parameters)==null?void 0:An.docs,source:{originalSource:`{
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
}`,...(Ln=(_n=le.parameters)==null?void 0:_n.docs)==null?void 0:Ln.source}}};var jn,Tn,Rn;ce.parameters={...ce.parameters,docs:{...(jn=ce.parameters)==null?void 0:jn.docs,source:{originalSource:`{
  args: {
    focusMode: false,
    userName: 'Toto Wolff',
    unreadMessageCount: 6,
    activePath: '/intelligence',
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
}`,...(Rn=(Tn=ce.parameters)==null?void 0:Tn.docs)==null?void 0:Rn.source}}};var Fn,Nn,En;de.parameters={...de.parameters,docs:{...(Fn=de.parameters)==null?void 0:Fn.docs,source:{originalSource:`{
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
}`,...(En=(Nn=de.parameters)==null?void 0:Nn.docs)==null?void 0:En.source}}};var qn,zn,Wn;ue.parameters={...ue.parameters,docs:{...(qn=ue.parameters)==null?void 0:qn.docs,source:{originalSource:`{
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
}`,...(Wn=(zn=ue.parameters)==null?void 0:zn.docs)==null?void 0:Wn.source}}};var $n,Gn,Yn;pe.parameters={...pe.parameters,docs:{...($n=pe.parameters)==null?void 0:$n.docs,source:{originalSource:`{
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
}`,...(Yn=(Gn=pe.parameters)==null?void 0:Gn.docs)==null?void 0:Yn.source}}};var Hn,Un,Kn;me.parameters={...me.parameters,docs:{...(Hn=me.parameters)==null?void 0:Hn.docs,source:{originalSource:`{
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
}`,...(Kn=(Un=me.parameters)==null?void 0:Un.docs)==null?void 0:Kn.source}}};var Xn,Jn,Qn;fe.parameters={...fe.parameters,docs:{...(Xn=fe.parameters)==null?void 0:Xn.docs,source:{originalSource:`{
  args: {
    focusMode: false,
    unreadMessageCount: 6,
    activePath: '/',
    handleSignOut,
    claims: {
      family_name: 'family_name'
    }
  }
}`,...(Qn=(Jn=fe.parameters)==null?void 0:Jn.docs)==null?void 0:Qn.source}}};var Zn,Vn,er;he.parameters={...he.parameters,docs:{...(Zn=he.parameters)==null?void 0:Zn.docs,source:{originalSource:`{
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
}`,...(er=(Vn=he.parameters)==null?void 0:Vn.docs)==null?void 0:er.source}}};var nr,rr,tr;ge.parameters={...ge.parameters,docs:{...(nr=ge.parameters)==null?void 0:nr.docs,source:{originalSource:`{
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
}`,...(tr=(rr=ge.parameters)==null?void 0:rr.docs)==null?void 0:tr.source}}};var or,ar,ir;be.parameters={...be.parameters,docs:{...(or=be.parameters)==null?void 0:or.docs,source:{originalSource:`{
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
}`,...(ir=(ar=be.parameters)==null?void 0:ar.docs)==null?void 0:ir.source}}};var sr,lr,cr;ve.parameters={...ve.parameters,docs:{...(sr=ve.parameters)==null?void 0:sr.docs,source:{originalSource:`{
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
}`,...(cr=(lr=ve.parameters)==null?void 0:lr.docs)==null?void 0:cr.source}}};var dr,ur,pr;ye.parameters={...ye.parameters,docs:{...(dr=ye.parameters)==null?void 0:dr.docs,source:{originalSource:`{
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
}`,...(pr=(ur=ye.parameters)==null?void 0:ur.docs)==null?void 0:pr.source}}};var mr,fr,hr;Pe.parameters={...Pe.parameters,docs:{...(mr=Pe.parameters)==null?void 0:mr.docs,source:{originalSource:`{
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
}`,...(hr=(fr=Pe.parameters)==null?void 0:fr.docs)==null?void 0:hr.source}}};var gr,br,vr;Oe.parameters={...Oe.parameters,docs:{...(gr=Oe.parameters)==null?void 0:gr.docs,source:{originalSource:`{
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
}`,...(vr=(br=Oe.parameters)==null?void 0:br.docs)==null?void 0:vr.source}}};var yr,Pr,Or;Ce.parameters={...Ce.parameters,docs:{...(yr=Ce.parameters)==null?void 0:yr.docs,source:{originalSource:`{
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
}`,...(Or=(Pr=Ce.parameters)==null?void 0:Pr.docs)==null?void 0:Or.source}}};const Lo=["Basic","FocusMode","ClientSideFetch","EnvironmentRouting","CustomRouting","DevelopmentRouting","BusinessDropdown","BusinessDropdownModalInterrupt","SignOutModalTrigger","OptionalAppsEnabled","Claims","ClaimsMissingName","ClaimsMissingNameAnalytics","ClaimsMissingNameComponent","ClaimsMissingGivenNameComponent","RequiredProofingPaywall","RequiredProofingPaywallOptions","RequiredProofingPaywallCustomComponent","CustomSidenav","HeaderProps"];export{te as Basic,ce as BusinessDropdown,de as BusinessDropdownModalInterrupt,me as Claims,be as ClaimsMissingGivenNameComponent,fe as ClaimsMissingName,he as ClaimsMissingNameAnalytics,ge as ClaimsMissingNameComponent,ae as ClientSideFetch,se as CustomRouting,Oe as CustomSidenav,le as DevelopmentRouting,ie as EnvironmentRouting,oe as FocusMode,Ce as HeaderProps,pe as OptionalAppsEnabled,ve as RequiredProofingPaywall,Pe as RequiredProofingPaywallCustomComponent,ye as RequiredProofingPaywallOptions,ue as SignOutModalTrigger,Lo as __namedExportsOrder,_o as default};
