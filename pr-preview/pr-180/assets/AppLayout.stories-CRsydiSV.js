import{a as i,_ as T,t as y,g as j,b as O,d as v,i as g,j as u,B as M,p as L,G as Ln,m as se,c as _r,u as zr,r as zo,F as Wr,e as Wo,s as qo}from"./Box-37a490cb.esm-KbYwGL3W.js";import{r as f}from"./index-BAneEnFJ.js";import{P as G,p as Go,a as Ho}from"./ag.ds-next-react-heading.esm-DkiFI9Pu.js";import{b as Uo,m as Yo,c as q,_ as qr,C as Ko,B as ye,P as N,a as Dn}from"./ag.ds-next-react-button.esm-CfGtwY17.js";import{v as Qo,S as B,T as I,F as x,V as Mn,s as en,E as Xo}from"./Icon-29f3c11e.esm-D-1Eu8-3.js";import{e as ne,a as An,c as jn,F as Bn,u as gn,_ as Hn,D as Vo,b as Zo,d as Jo,f as Un,g as ue,h as ei,i as ni,j as ti,k as ri,l as Gr}from"./ag.ds-next-react-dropdown-menu.esm-D_Ahku8_.js";import{b as Hr,c as oi,d as ii,a as Ur,C as me,M as ai,e as Yr,H as Kr,f as Qr,E as si,g as li,L as ci,h as di,P as Xr,S as ui,i as pi,F as En,U as fi,B as Vr,j as hi,k as mi,l as gi,m as bi,A as vi,n as Zr,o as yi,p as Oi,q as Pi,W as xi,I as wi,r as ki}from"./ag.ds-next-react-icon.esm-DeJ1ew_-.js";import{r as Rn}from"./index-exioagFi.js";import{u as Tn,C as oe,c as Ci}from"./CoreProvider-eb9f00f4.esm-CcMMn4yr.js";import{L as Si}from"./ag.ds-next-react-daff-branding.esm-CywPuWpb.js";import{L as Ii}from"./ag.ds-next-react-link-list.esm-CtCQlcFt.js";import{C as Li}from"./ag.ds-next-react-callout.esm-BvMmQg1E.js";import{a as ge}from"./ag.ds-next-react-text-link.esm-BBECHa9X.js";import"./jsx-runtime-D_zvdyIk.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-pL_YbQPu.js";function Jr(){var e=f.useState(!1),n=e[0],t=e[1];return f.useEffect(function(){if(!window.matchMedia){t(!1);return}var r=window.matchMedia("(prefers-reduced-motion: reduce)");t(r.matches);var o=function(s){return t(s.matches)};return r.addEventListener("change",o),function(){return r.removeEventListener("change",o)}},[]),n}var Di=function(n){var t=n.children,r=n["aria-label"];return i("nav",{"aria-label":r,children:t})},Mi=f.forwardRef(function(n,t){var r=n.children,o=n.href;return i("a",{css:[Qo,Uo({block:!1,size:"md",variant:"primary"}),{position:"absolute","&:focus-visible":{top:j(1),left:j(1),clip:"auto",clipPath:"none",overflow:"visible",whiteSpace:"normal",width:"auto",zIndex:y.zIndex.skipLink}},"","","",""],href:o,ref:t,children:r})}),Ai=["label"];function Yn(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function Kn(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?Yn(Object(t),!0).forEach(function(r){O(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Yn(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var te=function(n){var t=n.links,r=n["aria-label"],o=r===void 0?"Skip links":r;return i(Di,{"aria-label":o,children:t.map(function(a,s){var c=a.label,d=T(a,Ai);return i(Mi,Kn(Kn({},d),{},{children:c}),s)})})},Qn="data-conditional-field-container",ji="data-grouped-fields",Bi=function(n){var t=n.hideOptionalLabel,r=n.required,o=n.secondaryLabel;return f.useMemo(function(){return[o,t||r?null:"(optional)"].filter(Boolean).join(" ")},[r,o,t])};function Xn(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function Vn(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?Xn(Object(t),!0).forEach(function(r){O(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Xn(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var eo=function(n){var t,r=n.children,o=n.invalid,a=n.id;return i(B,Vn(Vn({},O({},ln,!0)),{},{borderLeft:o,borderLeftWidth:"xl",css:v((t={borderLeftColor:o?g.systemError:void 0},O(t,"[".concat(Qn,"] &[").concat(ln,"]"),{marginLeft:o?"calc(-".concat(j(1)," - ").concat(y.borderWidth.xl,"px)"):void 0,position:"relative"}),O(t,"[".concat(Qn,"] [").concat(ji,"] &[").concat(ln,"]:not(:first-of-type)"),{marginLeft:0}),t),"",""),gap:.5,id:a,paddingLeft:o?1:void 0,children:r}))},ln="data-field-container",no=function(n){var t=n.as,r=t===void 0?"label":t,o=n.children,a=n.className,s=n.id,c=n.htmlFor,d=n.required,l=n.secondaryLabel,p=n.hideOptionalLabel,h=Bi({hideOptionalLabel:p,required:d,secondaryLabel:l});return u(M,{as:r,className:a,htmlFor:c,id:s,children:[i(I,{as:"span",fontWeight:"bold",children:o}),h?u(I,{as:"span",color:"muted",children:[" ",h]}):null]})},to=function(n){var t=n.children,r=n.id;return i(I,{color:"muted",display:"block",id:r,children:t})},Ei={name:"4zleql",styles:"display:block"},ro=function(n){var t=n.children,r=n.id;return u(x,{alignItems:"center",gap:.5,children:[i(M,{flexShrink:0,children:i(Hr,{"aria-hidden":"false","aria-label":"Error",color:"error",css:Ei,size:"md"})}),i(I,{color:"error",display:"block",fontWeight:"bold",id:r,children:t})]})},Ri=function(n){var t=n.children,r=n.hint,o=n.id,a=n.invalid,s=n.label,c=n.labelId,d=n.maxWidth,l=n.secondaryLabel,p=n.hideOptionalLabel,h=n.message,b=n.required,w=Ti(o),m=w.fieldId,P=w.hintId,k=w.messageId,S=$i({required:b,fieldId:m,message:h,messageId:k,hint:r,hintId:P,invalid:a});return u(eo,{invalid:a,children:[i(no,{hideOptionalLabel:p,htmlFor:m,id:c,required:b,secondaryLabel:l,children:s}),r?i(to,{id:P,children:r}):null,h&&a?i(ro,{id:k,children:h}):null,typeof t=="function"?t(S):t,d?i("div",{"aria-hidden":!0,css:v({height:0,marginTop:"-".concat(j(.5)),maxWidth:y.maxWidth.field[d],overflow:"hidden","::after":{content:'"---------------------------------------------------------------"'}},"","")}):null]})},Ti=function(n){var t=ne(n),r=n||"field-".concat(t),o="field-".concat(t,"-hint"),a="field-".concat(t,"-message");return{fieldId:r,hintId:o,messageId:a}},$i=function(n){var t=n.required,r=n.fieldId,o=n.message,a=n.messageId,s=n.hint,c=n.hintId,d=n.invalid,l=[o?a:null,s?c:null].filter(Boolean),p=l.length?l.join(" "):void 0;return{"aria-required":!!t,"aria-invalid":!!d,"aria-describedby":p,id:r}},oo=f.createContext(void 0),io=function(){return f.useContext(oo)};function Fi(e){var n=e.children,t=e.invalid,r=e.messageId,o=e.name,a=e.required,s=ne();return i(oo.Provider,{value:{invalid:t,name:o||s,messageId:r,required:a},children:n})}var he=function(n){var t=n.block,r=t===void 0?!1:t,o=n.children,a=n.hint,s=n.id,c=n.invalid,d=c===void 0?!1:c,l=n.label,p=n.hideOptionalLabel,h=n.message,b=n.name,w=n.required,m=w===void 0?!1:w,P=Ni(s),k=P.groupId,S=P.hintId,C=P.messageId,D=[d&&h?C:null,a?S:null].filter(Boolean),E=D.length?D.join(" "):void 0;return i(Fi,{invalid:d,messageId:d&&h?C:void 0,name:b,required:m,children:i(eo,{id:k,invalid:d,children:u(M,{"aria-describedby":E,as:"fieldset",children:[l?i(no,{as:"legend",hideOptionalLabel:p,required:m,children:l}):null,u(B,{css:v({marginTop:l?j(.5):void 0},"",""),gap:.5,children:[a?i(to,{id:S,children:a}):null,h&&d?i(ro,{id:C,children:h}):null,i(x,{flexDirection:r?"column":"row",flexWrap:r?void 0:"wrap",gap:1,paddingTop:.5,width:"100%",children:o})]})]})})})},Ni=function(n){var t=ne(n),r=n||"control-group-".concat(t),o="control-group-".concat(t,"-hint"),a="control-group-".concat(t,"-message");return{groupId:r,hintId:o,messageId:a}};function Zn(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function cn(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?Zn(Object(t),!0).forEach(function(r){O(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Zn(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function _i(e){var n=e.disabled,t=e.invalid,r=e.size,o=L.control[r],a=o.width,s=o.height,c=o.borderWidth;return i(x,{alignItems:"center",as:"span",css:v(cn(cn({backgroundColor:g.backgroundBody,borderColor:g.border,borderRadius:"100%",borderStyle:"solid",borderWidth:c,inset:0,position:"absolute"},n&&{color:g.borderMuted,borderColor:g.borderMuted,backgroundColor:g.backgroundShade,"@media (forced-colors: active)":{borderColor:"GrayText",color:"GrayText"}}),t&&{borderColor:g.systemError,backgroundColor:g.systemErrorMuted}),"",""),flexShrink:0,height:s,justifyContent:"center",rounded:!0,width:a,children:i(M,{as:"span",css:v(cn({borderRadius:"100%",backgroundColor:g.foregroundText,"@media (forced-colors: active)":{backgroundColor:"MenuText"}},n&&{backgroundColor:g.borderMuted,"@media (forced-colors: active)":{backgroundColor:"GrayText"}}),"",""),height:"calc(100% - 0.5rem)",highContrastOutline:!0,width:"calc(100% - 0.5rem)"})})}var zi=["height","width"];function Jn(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function Wi(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?Jn(Object(t),!0).forEach(function(r){O(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Jn(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var qi=f.forwardRef(function(n,t){var r=n.height,o=n.width,a=T(n,zi);return i("input",Wi({css:v({height:r,margin:0,opacity:0,verticalAlign:"middle",width:o,"&:focus ~ span:first-of-type":L.outline,"~ span > span":{opacity:0},"&:checked ~ span > span":{opacity:1}},"",""),ref:t},a))}),Gi=function(n){var t=n.children,r=n.disabled,o=n.htmlFor;return i(x,{alignItems:"flex-start",as:"label",color:"text",css:v({cursor:r?"not-allowed":"pointer"},"",""),gap:.5,htmlFor:o,inline:!0,children:t})},Hi={sm:0,md:"0.2rem"};function Ui(e){var n=e.children,t=e.disabled,r=e.size,o=Hi[r];return i(I,{color:t?"muted":"text",css:v({paddingTop:o},"",""),flexGrow:1,children:n})}var Yi=["children","disabled","invalid","name","required","size"];function et(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function Ki(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?et(Object(t),!0).forEach(function(r){O(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):et(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var nt=f.forwardRef(function(n,t){var r=n.children,o=n.disabled,a=n.invalid,s=n.name,c=n.required,d=n.size,l=d===void 0?"md":d,p=T(n,Yi),h=Qi(p.id),b=io(),w=L.control[l],m=w.height,P=w.width,k=typeof a=="boolean"?a:b==null?void 0:b.invalid,S=typeof c=="boolean"?c:b==null?void 0:b.required,C=s||(b==null?void 0:b.name);return u(Gi,{disabled:o,htmlFor:h,children:[u("span",{css:v({display:"inline-block",height:m,position:"relative",width:P},"",""),children:[i(qi,Ki({"aria-describedby":k?b==null?void 0:b.messageId:void 0,"aria-invalid":k||void 0,"aria-required":S,disabled:o,height:m,id:h,name:C,ref:t,type:"radio",width:P},p)),i(_i,{disabled:o,invalid:k,size:l})]}),i(Ui,{disabled:o,size:l,children:r})]})});function Qi(e){var n=ne(e);return e||"radio-".concat(n)}function tt(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function rt(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?tt(Object(t),!0).forEach(function(r){O(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):tt(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var Xi=function(n){var t=n.disabled,r=n.indeterminate,o=n.invalid,a=n.size,s=L.control[a],c=s.width,d=s.height,l=s.borderWidth;return i(x,{alignItems:"center",as:"span",css:v(rt(rt({backgroundColor:g.backgroundBody,borderColor:g.border,borderStyle:"solid",borderWidth:l,color:g.foregroundText,inset:0,position:"absolute"},t&&{color:g.borderMuted,borderColor:g.borderMuted,backgroundColor:g.backgroundShade,"@media (forced-colors: active)":{borderColor:"GrayText",color:"GrayText"}}),o&&{borderColor:g.systemError,backgroundColor:g.systemErrorMuted}),"",""),flexShrink:0,height:d,justifyContent:"center",rounded:!0,width:c,children:r?i(oi,{size:a,weight:"bold"}):i(ii,{size:a,weight:"bold"})})},Vi=["height","width"];function ot(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function Zi(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?ot(Object(t),!0).forEach(function(r){O(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ot(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var Ji=f.forwardRef(function(n,t){var r=n.height,o=n.width,a=T(n,Vi);return i("input",Zi({css:v({height:r,margin:0,opacity:0,verticalAlign:"middle",width:o,"&:focus ~ span:first-of-type":L.outline,"~ span > svg":{opacity:0},"&:checked ~ span > svg, &:indeterminate ~ span > svg":{opacity:1}},"",""),ref:t},a))});function ea(e){var n=e.children,t=e.htmlFor,r=e.disabled;return i(x,{alignItems:"flex-start",as:"label",color:"text",css:v({cursor:r?"not-allowed":"pointer"},"",""),gap:.5,htmlFor:t,inline:!0,children:n})}var na={sm:0,md:"0.2rem"};function ta(e){var n=e.children,t=e.disabled,r=e.size,o=na[r];return i(I,{color:t?"muted":"text",css:v({paddingTop:o},"",""),flexGrow:1,children:n})}var ra=["checked","children","disabled","indeterminate","invalid","name","required","size"];function it(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function oa(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?it(Object(t),!0).forEach(function(r){O(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):it(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var dn=f.forwardRef(function(n,t){var r=n.checked,o=n.children,a=n.disabled,s=n.indeterminate,c=n.invalid,d=n.name,l=n.required,p=n.size,h=p===void 0?"md":p,b=T(n,ra),w=ia(b.id),m=f.useRef(null),P=io(),k=L.control[h],S=k.height,C=k.width,D=typeof c=="boolean"?c:P==null?void 0:P.invalid,E=typeof l=="boolean"?l:P==null?void 0:P.required,H=d||(P==null?void 0:P.name);f.useEffect(function(){m.current&&(m.current.indeterminate=!!s)},[s]);var U=s?!1:r;return u(ea,{disabled:a,htmlFor:w,children:[u("span",{css:v({display:"inline-block",height:S,position:"relative",width:C},"",""),children:[i(Ji,oa({"aria-checked":s?"mixed":void 0,"aria-describedby":D?P==null?void 0:P.messageId:void 0,"aria-invalid":D||void 0,"aria-required":E,checked:U,disabled:a,height:S,id:w,name:H,ref:Yo([t,m]),type:"checkbox",width:C},b)),i(Xi,{disabled:a,indeterminate:s,invalid:D,size:h})]}),i(ta,{disabled:a,size:h,children:o})]})});function ia(e){var n=ne(e);return e||"checkbox-".concat(n)}var aa=["label","hideOptionalLabel","required","hint","message","invalid","block","maxWidth","options","placeholder","id"];function at(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function X(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?at(Object(t),!0).forEach(function(r){O(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):at(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var bn=f.forwardRef(function(n,t){var r=n.label,o=n.hideOptionalLabel,a=n.required,s=n.hint,c=n.message,d=n.invalid,l=n.block,p=n.maxWidth,h=p===void 0?"md":p,b=n.options,w=n.placeholder,m=n.id,P=T(n,aa),k=da({block:l});return i(Ri,{hideOptionalLabel:o,hint:s,id:m,invalid:d,label:r,maxWidth:h,message:c,required:a,children:function(C){return u(sa,{block:l,maxWidth:h,children:[i("select",X(X(X({css:k,ref:t},C),P),{},{children:i(la,{options:b,placeholder:w})})),i(ca,{disabled:P.disabled})]})}})}),sa=function(n){var t=n.children,r=n.block,o=n.maxWidth;return i("div",{css:v(X({position:"relative"},!r&&{maxWidth:y.maxWidth.field[o]}),"",""),children:t})},la=function(n){var t=n.options,r=n.placeholder;return u(f.Fragment,{children:[r?i("option",{value:"",children:r}):null,t.map(function(o){return"options"in o?i("optgroup",{disabled:o.disabled,label:o.label,children:o.options.map(function(a){var s=a.value,c=a.label,d=a.disabled;return i("option",{disabled:d,value:s,children:c},s)})},o.label):i("option",{disabled:o.disabled,value:o.value,children:o.label},o.value)})]})},ca=function(n){var t=n.disabled;return i(Ur,{css:v({position:"absolute",top:"50%",right:j(.75),transform:"translateY(-50%)",opacity:t?.3:void 0,pointerEvents:"none",color:g.foregroundAction},"","")})},da=function(n){var t=n.block;return X(X(X(X({position:"relative",appearance:"none",boxSizing:"border-box",paddingLeft:j(1),paddingRight:"calc(".concat(y.borderWidth.lg,"px + 2.5rem)"),margin:0,background:g.backgroundBody,borderWidth:y.borderWidth.lg,borderStyle:"solid",borderColor:g.border,borderRadius:y.borderRadius,color:g.foregroundText,width:"100%",fontFamily:y.font.body},L.input.md),{},{lineHeight:y.lineHeight.default},L.truncate),t&&{maxWidth:"none",display:"block"}),{},{'&[aria-invalid="true"]':{backgroundColor:g.systemErrorMuted,borderColor:g.systemError},"&:disabled":{opacity:1,cursor:"not-allowed",borderColor:g.borderMuted,backgroundColor:g.backgroundShade,color:g.foregroundMuted},"&:focus":L.outline})};function ao(){var e=f.useState(!1),n=e[0],t=e[1];return f.useEffect(function(){t(!0)},[]),n}function so(e,n){var t=e||n;if(!t)throw new Error("onClose prop is required");return t}function ua(e,n){return e||n}function pa(){var e=ne();return{titleId:"drawer-".concat(e,"-title")}}var fa={name:"6dhm9o",styles:"visibility:hidden"};function ha(e){var n=e.actions,t=e.children,r=e.elementToFocusOnClose,o=e.onClose,a=e.title,s=pa(),c=s.titleId;return i(Bn,{returnFocus:r?function(){return window.setTimeout(function(){return r.focus()},0),!1}:!0,children:u(x,{"aria-labelledby":c,"aria-modal":!0,background:"body",css:v({boxShadow:y.shadow.lg,inset:0,position:"fixed"},"",""),flexDirection:"column",highContrastOutline:!0,role:"dialog",children:[u(ma,{children:[i(ba,{id:c,children:a}),i(q,{"aria-hidden":!0,css:fa,iconAfter:me,tabIndex:-1,variant:"text",children:"Close"})]}),i(va,{title:a,children:t}),n?i(Oa,{children:n}):null,i(q,{css:se({position:"fixed",right:_r({xs:j(.75),md:j(1.5)}),top:"1.25rem",zIndex:y.zIndex.elevated}),iconAfter:me,onClick:o,variant:"text",children:"Close"})]})})}function ma(e){var n=e.children;return i(x,{background:"body",borderBottom:!0,paddingX:{xs:.75,md:1.5},paddingY:1,children:n})}var ga={name:"1r5gb7q",styles:"display:inline-block"};function ba(e){var n=e.children,t=e.id;return i(I,{as:"h2",css:ga,"data-autofocus":!0,focusRingFor:"keyboard",fontSize:"lg",fontWeight:"bold",id:t,lineHeight:"heading",tabIndex:-1,children:n})}function va(e){var n=e.children,t=e.title;return i(M,{"aria-label":"".concat(t," content"),as:"section",background:"body",css:v({overflowY:"auto",":focus":{outlineOffset:"-".concat(L.outline.outlineWidth)}},"",""),flexGrow:1,focusRingFor:"keyboard",paddingX:{xs:.75,md:1.5},paddingY:{xs:1,md:1.5},tabIndex:0,children:n})}var ya={name:"xdvdnl",styles:"margin-top:auto"};function Oa(e){var n=e.children;return i(M,{background:"body",borderTop:!0,css:ya,paddingX:{xs:.75,md:1.5},paddingY:1,children:n})}var Pa={md:"32rem",lg:"45rem"},xa=function(n){var t=n.actions,r=n.children,o=n.elementToFocusOnClose,a=n.isOpen,s=a===void 0?!1:a,c=n.mutedOverlay,d=c===void 0?!1:c,l=n.onClose,p=n.onDismiss,h=n.title,b=n.width,w=b===void 0?"md":b,m=so(l,p),P=f.useRef(0),k=Jr(),S=f.useState(!0),C=S[0],D=S[1],E=ao();f.useEffect(function(){P.current=window.innerWidth-document.documentElement.clientWidth},[]),f.useEffect(function(){s&&D(!1)},[s]),f.useEffect(function(){var W=function(le){s&&le.code==="Escape"&&(le.preventDefault(),le.stopPropagation(),m())};return window.addEventListener("keydown",W),function(){return window.removeEventListener("keydown",W)}},[s,m]);var H=An(E?s:!1),U=H.modalContainerRef;if(!E||!jn())return null;var Q=s?!0:!C;return Rn.createPortal(u(f.Fragment,{children:[s?i(ka,{scrollbarWidth:P.current}):null,u("div",{ref:U,children:[i("div",{css:v({pointerEvents:"none",position:"absolute",opacity:s?1:0,transition:s?"none":"opacity ".concat(k?"1ms":"150ms")},"",""),"data-drawer":"transitioner",onTransitionEnd:function(){D(!0)}}),i(wa,{isOpen:s,mutedOverlay:d,onClick:m,prefersReducedMotion:k}),i(M,{css:v({inset:0,marginLeft:"auto",position:"fixed",transform:"translateX(".concat(s?"0":"100%",")"),transition:"transform ".concat(k?"1ms":"150ms"," ease"),zIndex:y.zIndex.dialog},"",""),maxWidth:Pa[w],children:Q&&i(ha,{actions:t,elementToFocusOnClose:o,onClose:m,title:h,children:r})})]})]}),document.body)};function wa(e){var n=e.isOpen,t=e.mutedOverlay,r=e.onClick,o=e.prefersReducedMotion;return i("div",{css:v({pointerEvents:n?"all":"none",position:"fixed",inset:0,backgroundColor:t?g.overlayMuted:g.overlay,opacity:n?1:0,transition:"opacity ".concat(o?"1ms":"150ms"," ease"),zIndex:y.zIndex.overlay},"",""),onClick:r})}function ka(e){var n=e.scrollbarWidth;return i(Ln,{styles:v({html:{marginRight:n,scrollbarGutter:"auto"},body:{overflow:"hidden"}},"","")})}var st,Ca=f.forwardRef(function(n,t){var r=n.children;return i("div",{css:v({position:"fixed",top:0,left:0,bottom:0,right:0,backgroundColor:g.overlay,zIndex:y.zIndex.overlay,overflowY:"auto",animation:"".concat(Sa," ").concat(y.transition.duration,"ms ").concat(y.transition.timingFunction)},"",""),ref:t,children:r})}),Sa=zr(st||(st=qr([`
  0% { opacity: 0; }
  100% { opacity: 1; }
`]))),Ia=function(n){var t=n.children,r=n.id;return i(I,{as:"h2","data-autofocus":!0,focusRingFor:"keyboard",fontSize:"lg",fontWeight:"bold",id:r,lineHeight:"heading",tabIndex:-1,children:t})},La=function(){var n=ne();return{titleId:"modal-".concat(n,"-title")}},lt,Da="45rem",Ma={name:"1duj7gx",styles:"align-self:flex-end"},Aa={name:"xdvdnl",styles:"margin-top:auto"},ja=function(n){var t=n.actions,r=n.children,o=n.onClose,a=n.title,s=La(),c=s.titleId;return i(Bn,{returnFocus:!0,children:u(B,{"aria-labelledby":c,"aria-modal":!0,background:"body",css:v(O({boxShadow:y.shadow.lg,position:"relative",margin:"0 auto",minHeight:"100vh",animation:"".concat(Ba," ").concat(y.transition.duration,"ms ").concat(y.transition.timingFunction),"@supports (min-height: 100dvh)":{minHeight:"100dvh"}},y.mediaQuery.min.sm,{borderRadius:y.borderRadius,margin:"".concat(j(6)," auto ").concat(j(1)),minHeight:"auto"}),"",""),gap:1,highContrastOutline:!0,maxWidth:Da,paddingX:{xs:.75,md:1.5},paddingY:{xs:1,md:1.5},role:"dialog",children:[i(q,{"aria-label":"Close modal",css:Ma,iconAfter:me,onClick:o,variant:"text",children:"Close"}),i(Ia,{id:c,children:a}),i(M,{children:r}),t?i(M,{css:Aa,paddingTop:1,children:t}):null]})})},Ba=zr(lt||(lt=qr([`
  0% { transform: translateY(1rem); }
	100% { transform: translateY(0); }
`]))),lo=function(n){var t=n.actions,r=n.children,o=n.isOpen,a=o===void 0?!1:o,s=n.onClose,c=n.onDismiss,d=n.title,l=so(s,c);f.useEffect(function(){var b=function(m){a&&m.code==="Escape"&&(m.preventDefault(),m.stopPropagation(),l())};return window.addEventListener("keydown",b),function(){return window.removeEventListener("keydown",b)}},[l,a]);var p=An(a),h=p.modalContainerRef;return!a||!jn()?null:Rn.createPortal(u(f.Fragment,{children:[i(Ra,{}),i(Ca,{ref:h,children:i(ja,{actions:t,onClose:l,title:d,children:r})})]}),document.body)},Ea={name:"1sy9iaq",styles:"body{overflow:hidden;}"},Ra=function(){return i(Ln,{styles:Ea})};function Ta(e){var n,t,r=Array.from(e.matchAll(new RegExp(/(\p{L})\p{L}+/,"gu")));if(!r.length)return"?";var o=((n=r.shift())===null||n===void 0?void 0:n[1])||"",a=((t=r.pop())===null||t===void 0?void 0:t[1])||"";return(o+a).toUpperCase()}function co(e){var n=e.name,t=e.tone,r=t===void 0?"neutral":t,o=e.size,a=o===void 0?"md":o,s=e["aria-hidden"],c=e["aria-label"],d=Ta(n),l=$a[r],p=Fa[a],h=p.size,b=p.fontSize;return i(x,{alignItems:"center","aria-hidden":s,"aria-label":c,as:"span",css:v({textDecoration:"none",height:"".concat(h,"rem"),width:"".concat(h,"rem"),borderRadius:"50%",borderStyle:"solid",borderWidth:y.borderWidth.sm,borderColor:l,color:l},"",""),flexShrink:0,fontSize:b,fontWeight:"bold",justifyContent:"center",children:d})}var $a={neutral:g.foregroundMuted,action:g.foregroundAction},Fa={sm:{fontSize:"xs",size:2},md:{fontSize:"sm",size:2.5},lg:{fontSize:"md",size:3},xl:{fontSize:"lg",size:4},xxl:{fontSize:"xl",size:4.5},xxxl:{fontSize:"xl",size:5}},uo=f.createContext(void 0);function Oe(){var e=f.useContext(uo);if(e===void 0)throw new Error("`AppLayoutContext` not found.");return e}function Na(e,n){var t=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=_a(e))||n){t&&(e=t);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(l){throw l},f:o}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a,s=!0,c=!1;return{s:function(){t=t.call(e)},n:function(){var l=t.next();return s=l.done,l},e:function(l){c=!0,a=l},f:function(){try{s||t.return==null||t.return()}finally{if(c)throw a}}}}function _a(e,n){if(e){if(typeof e=="string")return ct(e,n);var t={}.toString.call(e).slice(8,-1);return t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set"?Array.from(e):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?ct(e,n):void 0}}function ct(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=Array(n);t<n;t++)r[t]=e[t];return r}var z="xl",$n="16rem",za=function(n,t){if(!t)return"";var r=n.flatMap(function(l){return Array.isArray(l)?l:[l].concat(Hn(l.items))}).flatMap(function(l){return"items"in l&&l.items!==void 0?[l].concat(Hn(l.items)):l}).map(function(l){return l&&"href"in l&&l.href!==void 0?l.href:""}),o,a="",s=Na(r),c;try{for(s.s();!(c=s.n()).done;){var d=c.value;if(d===t){o=d;break}t!=null&&t.startsWith(d)&&d.length>a.length&&(a=d)}}catch(l){s.e(l)}finally{s.f()}return o||a};function Wa(e){var n=e.children,t=e.focusMode,r=t===void 0?!1:t,o=gn(!1),a=zo(o,3),s=a[0],c=a[1],d=a[2];return i(uo.Provider,{value:{focusMode:r,isMobileMenuOpen:s,openMobileMenu:c,closeMobileMenu:d},children:i(qa,{focusMode:r,children:n})})}function qa(e){var n=e.children,t=e.focusMode;return i("div",{css:se({display:"grid",minHeight:"100vh",gridTemplateRows:"auto 1fr",gridTemplateColumns:_r(O({xs:"1fr"},z,t?"1fr":"".concat($n," 1fr")))}),children:n})}function dt(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function pe(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?dt(Object(t),!0).forEach(function(r){O(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):dt(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var de=1.5,vn="3.75rem",Ga={name:"1kn4ch8",styles:"margin-left:-0.5rem;margin-right:-0.5rem;overflow:hidden"};function Ha(e){var n=e.badgeLabel,t=e.dividerPosition,r=e.logo,o=e.heading,a=e.hasAccountDetails,s=e.href,c=e.secondHref,d=e.secondLogo,l=e.subLine,p=Tn();return r&&d?u(x,{css:Ga,flexDirection:{xs:"column",lg:"row"},flexWrap:{xs:"wrap",xl:"nowrap"},gap:{xs:1,md:de},inline:!0,padding:.5,children:[u(x,{css:v({marginRight:a&&t==="after"?j(de):0},"",""),flexDirection:{xs:"column",sm:"row"},flexShrink:0,gap:de,children:[i(x,{alignSelf:{xs:"start",sm:"center"},as:p,color:"text",css:v(pe({" img, svg":{height:vn}},L.print.hidden),"",""),focusRingFor:"keyboard",href:s,children:r}),t==="between"&&i(un,{dividerPosition:t}),i(x,pe(pe({alignSelf:{xs:"start",sm:"center"},as:c?p:"span",color:"text",css:v(pe({" img, svg":{width:"100%"}},L.print.hidden),"",""),focusRingFor:"keyboard"},c&&{href:c}),{},{children:d}))]}),u(x,{css:t==="after"?O({},y.mediaQuery.min.lg,{marginLeft:"calc(-".concat(a?j(de):0," - ").concat(y.borderWidth.sm,"px)")}):void 0,gap:de,children:[t==="after"&&i(un,{dividerPosition:t}),u(B,{as:p,color:"text",css:v({textDecoration:"none",":hover":L.underline},"",""),focusRingFor:"keyboard",href:s,justifyContent:"center",children:[u(x,{alignItems:"flex-start",gap:.5,children:[i(I,{fontSize:"lg",fontWeight:"bold",children:o}),n&&i(ut,{children:n})]}),l&&i(I,{color:"muted",fontSize:"xs",children:l})]})]})]}):u(x,{alignItems:{xs:"flex-start",md:"center"},as:p,color:"text",css:v({textDecoration:"none","&:hover":L.underline,svg:{display:"block",height:vn,flexShrink:0}},"",""),flexDirection:{xs:"column",md:"row"},focusRingFor:"keyboard",gap:{xs:1,md:0},href:s,paddingY:.5,children:[r,i(un,{singleLogo:!0}),u(x,{alignItems:"flex-start",flexDirection:"column",justifyContent:"center",maxWidth:y.maxWidth.bodyText,children:[u(x,{alignItems:"flex-start",gap:.5,children:[i(I,{fontSize:"lg",fontWeight:"bold",children:o}),n&&i(ut,{children:n})]}),l&&i(I,{color:"muted",fontSize:"xs",children:l})]})]})}function ut(e){var n=e.children;return i(M,{border:!0,borderWidth:"md",css:v({fontSize:"0.75rem",paddingTop:"2px",paddingBottom:"2px",borderColor:g.foregroundText,borderRadius:"2em"},"",""),fontWeight:"bold",paddingLeft:.5,paddingRight:.5,children:n})}var un=function(n){var t=n.dividerPosition,r=n.singleLogo;return i(M,{borderLeft:!0,css:v(pe({margin:r?"0 1rem":void 0},L.print.hidden),"",""),display:r?{xs:"none",md:"block"}:{xs:"none",sm:t==="between"?"block":void 0,lg:"block"},height:r?vn:void 0})},Ua=["ref"];function pt(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function ft(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?pt(Object(t),!0).forEach(function(r){O(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):pt(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function Ya(e){var n=e.children,t=e.name,r=e.avatarName,o=e.secondaryText;return u(Vo,{popoverOffset:-8,popoverPlacement:"bottom-end",children:[i(Va,{avatarName:r,name:t,secondaryText:o}),n]})}var Ka={name:"d3v9zr",styles:"overflow:hidden"},Qa={name:"d3v9zr",styles:"overflow:hidden"},Xa={name:"ozd7xs",styles:"flex-shrink:0"};function Va(e){var n=e.name,t=e.avatarName,r=e.secondaryText,o=Zo(),a=o.isMenuOpen,s=Jo(),c=s.ref,d=T(s,Ua),l=f.useRef(0),p=en("sm");return f.useEffect(function(){l.current=window.innerWidth-document.documentElement.offsetWidth},[]),u(x,ft(ft({as:ye,ref:c},d),{},{alignItems:"center",background:a?"shade":void 0,color:"action",css:se({marginLeft:"auto",maxWidth:"calc(17.625rem - ".concat(l.current,"px)"),overflow:"hidden",svg:{transform:a?"rotate(180deg)":void 0,transition:p.transition},":hover":{backgroundColor:g.backgroundShade,"& > span:last-of-type > span:last-of-type":L.underline,svg:{transform:a?"rotate(180deg) ".concat(p.transform):p.transform}}}),focusRingFor:"keyboard",gap:1,justifyContent:"space-between",minHeight:"5.25rem",padding:1,children:[i(Mn,{children:"Account menu"}),u(x,{alignItems:"center","aria-hidden":!0,as:"span",css:Ka,gap:.5,width:"100%",children:[i(co,{name:t??n,size:"md",tone:"action"}),u(x,{as:"span",css:Qa,flexDirection:"column",width:"100%",children:[i(I,{color:"action",css:L.truncate,fontSize:"xs",fontWeight:"bold",children:n}),r?i(I,{color:"muted",css:L.truncate,fontSize:"xs",children:r}):null]})]}),i(Ur,{css:Xa,size:"sm",weight:"bold"})]}))}function ht(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function pn(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?ht(Object(t),!0).forEach(function(r){O(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ht(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var Za={name:"d3v9zr",styles:"overflow:hidden"};function po(e){var n=e.name,t=e.avatarName,r=e.secondaryText,o=e.href,a=e.dropdown,s=Tn(),c=f.useRef(0);if(f.useEffect(function(){c.current=window.innerWidth-document.documentElement.offsetWidth},[]),a)return i(Ya,{avatarName:t,name:n,secondaryText:r,children:a});var d=!!o;return u(x,pn(pn({as:"span"},d&&{as:s,href:o,focusRingFor:"keyboard"}),{},{alignItems:"center",css:se(pn({marginLeft:"auto",maxWidth:"calc(17.625rem - ".concat(c.current,"px)"),textDecoration:"none"},d&&{"&:hover":{"& > span > span":{textDecoration:"underline"}}})),flexShrink:0,gap:.5,minHeight:"5.25rem",textAlign:"right",children:[u(x,{as:"span",css:Za,flexDirection:"column",children:[i(I,{color:"action",css:L.truncate,fontSize:"xs",fontWeight:"bold",children:n}),r?i(I,{color:"muted",css:L.truncate,fontSize:"xs",children:r}):null]}),i(co,{"aria-hidden":!0,name:n,size:"md",tone:"action"})]}))}function mt(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function Ja(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?mt(Object(t),!0).forEach(function(r){O(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):mt(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function es(e){var n=e.accountDetails,t=Oe(),r=t.focusMode,o=t.openMobileMenu;return u(x,{alignItems:"center",background:"body",display:O({xs:"flex"},z,"none"),flexWrap:"wrap",justifyContent:r?"flex-end":"space-between",paddingLeft:.75,paddingRight:n!=null&&n.dropdown?.75:y.containerPadding,children:[r?null:i(ns,{onClick:o}),n?i(po,Ja({},n)):null]})}function ns(e){var n=e.onClick,t=Oe(),r=t.isMobileMenuOpen,o=en();return u(x,{alignItems:"center","aria-expanded":r,"aria-haspopup":"dialog",as:ye,color:"action",css:v({svg:{transition:o.transition},"&:hover":{backgroundColor:g.backgroundShade,textDecoration:"underline",svg:{transform:o.transform}}},"",""),flexDirection:"column",focusRingFor:"keyboard",fontSize:"xs",gap:.5,justifyContent:"center",minHeight:"5.25rem",onClick:n,paddingX:1,children:[i(ai,{"aria-hidden":!0}),i("span",{children:"Menu"})]})}function gt(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function ts(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?gt(Object(t),!0).forEach(function(r){O(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):gt(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function rs(e){var n=e.accountDetails,t=e.background,r=t===void 0?"bodyAlt":t,o=e.badgeLabel,a=e.borderColor,s=a===void 0?"accent":a,c=e.dividerPosition,d=c===void 0?"after":c,l=e.heading,p=e.href,h=e.id,b=e.logo,w=e.palette,m=w===void 0?"dark":w,P=e.secondHref,k=e.secondLogo,S=e.subLine,C=e.statusIndicator;return u(x,{as:"header",borderBottom:!0,borderBottomWidth:"xxl",borderColor:s,css:v(O({},y.mediaQuery.min[z],{gridColumnStart:1,gridColumnEnd:3}),"",""),flexDirection:"column",id:h,palette:m,children:[u(x,{alignItems:"center",background:r,gap:1,justifyContent:"space-between",paddingX:y.containerPadding,paddingY:.5,width:"100%",children:[i(Ha,{badgeLabel:o,dividerPosition:d,hasAccountDetails:!!n,heading:l,href:p,logo:b,secondHref:P,secondLogo:k,subLine:S}),u(x,{alignItems:"center",alignSelf:O({xs:"start"},z,"center"),gap:1,paddingTop:O({xs:.5},z,0),children:[C||null,i(M,{display:O({xs:"none"},z,"flex"),children:n?i(po,ts({},n)):null})]})]}),i(es,{accountDetails:n})]})}var os=["endElement","icon","isActive","items","label","level"];function bt(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function R(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?bt(Object(t),!0).forEach(function(r){O(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):bt(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var is=function e(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return function(r){var o,a,s="href"in r&&r.href===n,c=s||Fn(r.items,n);return R(R({},r),{},{isActive:c,items:c||(o=r.items)!==null&&o!==void 0&&o.length?r==null||(a=r.items)===null||a===void 0?void 0:a.map(e(n,t+1)):void 0,level:t+1})}},vt=function(n){var t=n.activePath,r=n.background,o=n.items,a=n.subLevelVisible;return i(B,{"aria-label":"main",as:"nav",paddingBottom:1.5,children:i(B,{as:"ul",children:o.map(function(s,c){var d,l,p=c===0,h=(Array.isArray(s)?s:s.items).map(is(t)),b=Array.isArray(s)?!1:!!(!((d=s.options)===null||d===void 0)&&d.disableGroupPadding),w=o[c-1],m=w?Array.isArray(w)?!1:!!(!((l=w.options)===null||l===void 0)&&l.disableGroupPadding):!1;return u(f.Fragment,{children:[p?null:i(ss,{disablePaddingBottom:b,disablePaddingTop:m}),h.map(function(P,k){var S=Fn(P.items,t),C=a==="always"||S;return i(fo,{activePath:t,background:r,isActiveGroup:S,isOpen:C,item:P,subLevelVisible:a},k)})]},c)})})})},as={name:"1ff36h2",styles:"flex-grow:1"};function fo(e){var n=e.activePath,t=e.background,r=e.isActiveGroup,o=e.isOpen,a=e.item,s=e.subLevelVisible,c=Tn(),d=a.endElement,l=a.icon,p=a.isActive,h=a.items,b=a.label,w=a.level,m=T(a,os),P=Oe(),k=P.closeMobileMenu,S=(h==null?void 0:h.length)||0,C=S>0&&s!=="always";if("href"in a){var D,E,H,U=a.href===n;return u(fn,{background:t,hasEndElement:!!d,isActive:r,isCurrentPage:U,isOpen:o,level:a.level,onClick:k,children:[u(c,R(R({"aria-current":U?"page":void 0,"aria-label":C?"".concat(b).concat(p?", has expanded sub links":", has sub links"):void 0},m),{},{children:[l&&w===1&&i(l,{color:"inherit"}),w===2&&i("span",{"aria-hidden":!0,children:"–"}),i("span",{css:as,children:b}),d,C&&i(Yr,{css:v({transform:p?"rotate(90deg)":void 0},"",""),size:"md"})]})),!!(!((D=a.items)===null||D===void 0)&&D.length)&&(o||U)&&i(B,{as:"ul",children:(E=a.items)===null||E===void 0||(H=E.map)===null||H===void 0?void 0:H.call(E,function(Q){var W;return i(fo,{activePath:n,background:t,isActiveGroup:!!p,isOpen:o,item:Q,subLevelVisible:s},(W=Q.label)===null||W===void 0?void 0:W.toString())})})]})}return"onClick"in a?i(fn,{background:t,hasEndElement:!!d,isActive:!1,isCurrentPage:!1,isOpen:!1,onClick:k,children:u(ye,R(R({},m),{},{children:[l?i(l,{color:"inherit"}):null,i("span",{children:b}),d]}))}):i(fn,{background:t,hasEndElement:!1,isActive:!1,isCurrentPage:!1,isOpen:!1,children:i(B,{as:"span",gap:.25,children:b})})}function fn(e){var n=e.background,t=e.children,r=e.hasEndElement,o=e.isCurrentPage,a=e.isActive,s=e.isOpen,c=e.level,d=e.onClick;return i("li",{css:v({"> a, > button, > span":{width:"100%",boxSizing:"border-box",wordBreak:"break-word",paddingTop:j(1),paddingBottom:j(1),paddingLeft:j(c===2?3:1.5),paddingRight:j(1),"& > svg":{flexShrink:0}},"> a, > button":R(R(R(R({position:"relative",display:"flex",alignItems:"center",gap:j(.75),color:a&&c!==2||o?g.foregroundText:g.foregroundAction},(a||o||s)&&{fontWeight:o?y.fontWeight.bold:y.fontWeight.normal,background:o?g.selectedMuted:void 0,"&::before":R(R(R({content:"''",position:"absolute",top:0,left:0,bottom:0,borderLeftStyle:"solid",borderLeftWidth:y.borderWidth.xl},o&&{borderLeftColor:g.selected}),!o&&a&&{borderLeftColor:g.borderMuted}),!o&&!a&&s&&{borderLeft:"none"})}),r&&{"& > :last-child":{marginLeft:"auto"}}),{},{"&:hover":O({background:g[n==="body"?"backgroundShade":"backgroundShadeAlt"],color:g.foregroundText},"& > span:nth-of-type(".concat(c,")"),L.underline)},Wo),{},{":focus-visible":{zIndex:y.zIndex.elevated,outlineOffset:"-".concat(L.outline.outlineWidth),"&::before":{zIndex:-1}}}),"> span":{color:g.foregroundText},"> a":{textDecoration:"none"}},"",""),onClick:d,children:t})}function ss(e){var n=e.disablePaddingTop,t=e.disablePaddingBottom;return i(M,{"aria-hidden":!0,as:"li",paddingBottom:t?0:1,paddingTop:n?0:1,children:i("hr",{css:v({boxSizing:"content-box",height:0,margin:0,overflow:"visible",border:"none",borderTopWidth:y.borderWidth.sm,borderTopStyle:"solid",borderColor:g.borderMuted,width:"100%"},"","")})})}function Fn(e,n){return e!=null&&e.length&&n?e.some(function(t){return"href"in t&&t.href===n||"items"in t&&Fn(t.items,n)}):!1}var ls={name:"qvn77x",styles:"inset:0;overflow-y:auto;position:fixed"};function cs(e){var n=e.children,t=e.palette,r=Oe(),o=r.isMobileMenuOpen,a=r.closeMobileMenu,s=Jr(),c=f.useState(!0),d=c[0],l=c[1],p=ao();f.useEffect(function(){o&&l(!1)},[o]),f.useEffect(function(){var m=function(k){k.code==="Escape"&&(k.preventDefault(),k.stopPropagation(),a())};return window.addEventListener("keydown",m),function(){return window.removeEventListener("keydown",m)}},[a]);var h=An(p?o:!1),b=h.modalContainerRef;if(!p||!jn())return null;var w=o?!0:!d;return Rn.createPortal(u(Wr,{children:[o&&i(ds,{}),u("div",{ref:b,children:[i("div",{css:v({pointerEvents:"none",position:"absolute",opacity:o?1:0,transition:o?"none":"opacity ".concat(s?"1ms":"150ms")},"",""),"data-app-layout-sidebar":"transitioner",onTransitionEnd:function(){l(!0)}}),i(us,{isOpen:o,onClick:a,prefersReducedMotion:s}),i(M,{css:v({bottom:0,left:0,position:"fixed",top:0,transform:"translateX(".concat(o?"0":"-100%",")"),transition:"transform ".concat(s?"1ms":"150ms"," ease"),zIndex:y.zIndex.dialog},"",""),display:O({},z,"none"),width:$n,children:w&&i(Bn,{returnFocus:!0,children:u(M,{"aria-label":"Menu","aria-modal":!0,background:"shade",css:ls,display:O({},z,"none"),palette:t,role:"dialog",children:[i(ps,{onClick:a}),n]})})})]})]}),document.body)}function ds(){return i(Ln,{styles:v(O({body:{overflow:"hidden"}},y.mediaQuery.min[z],{body:{overflow:"unset"}}),"","")})}function us(e){var n=e.isOpen,t=e.onClick,r=e.prefersReducedMotion;return i("div",{css:v(O({backgroundColor:g.overlay,display:"block",inset:0,opacity:n?1:0,pointerEvents:n?"all":"none",position:"fixed",transition:"opacity ".concat(r?"1ms":"150ms"," ease"),zIndex:y.zIndex.overlay},y.mediaQuery.min[z],{display:"none"}),"",""),onClick:t})}function ps(e){var n=e.onClick,t=en();return i(x,{alignItems:"center",borderBottom:!0,borderColor:"muted",flexShrink:0,paddingLeft:1,children:u(x,{alignItems:"center",as:ye,color:"action",css:v({svg:{transition:t.transition},":focus":{outlineOffset:"-".concat(L.outline.outlineWidth)},":hover svg":{transform:t.transform}},"",""),flexDirection:"column",focusRingFor:"keyboard",fontSize:"xs",gap:.5,onClick:n,padding:1,children:[i(me,{}),i("span",{"aria-hidden":!0,children:"Close"}),i(Mn,{children:"Close menu"})]})})}function yt(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function we(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?yt(Object(t),!0).forEach(function(r){O(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):yt(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function Ot(e){var n=e.activePath,t=e.background,r=t===void 0?"bodyAlt":t,o=e.items,a=e.palette,s=e.subLevelVisible,c=s===void 0?"whenActive":s,d=Oe(),l=d.focusMode,p=za(o,n),h={activePath:p,items:o,subLevelVisible:c};return u(f.Fragment,{children:[i(B,{background:r,borderColor:"muted",borderRight:!0,css:v(O({display:"none",width:$n},y.mediaQuery.min[z],{display:l?"none":"flex"}),"",""),flexGrow:1,gap:1,palette:a,children:i(vt,we(we({},h),{},{background:r}))}),i(cs,{palette:a,children:i(vt,we(we({},h),{},{background:"bodyAlt"}))})]})}var fs={name:"ovk77c",styles:"min-width:0"};function hs(e){var n=e.children;return i(x,{css:fs,flexDirection:"column",children:n})}var ms={name:"xdvdnl",styles:"margin-top:auto"};function gs(e){var n=e.background,t=n===void 0?"body":n,r=e.children,o=e.id,a=e.maxWidth,s=e.palette;return i(M,{as:"footer",background:t,css:ms,id:o,palette:s,children:i(Ko,{maxWidth:a,children:i(B,{borderColor:"muted",borderTop:!0,borderTopWidth:"xl",gap:1.5,paddingY:3,width:"100%",children:r})})})}function bs(){return i("hr",{"aria-hidden":!0,css:v({boxSizing:"content-box",height:0,margin:0,overflow:"visible",border:"none",borderTopWidth:1,borderTopStyle:"solid",borderColor:g.borderMuted,width:"100%"},"","")})}const vs=e=>({dashboard:{label:"Dashboard",icon:Vr,href:e.dashboard},people:{label:"People",icon:fi,href:e.people},establishments:{label:"Establishments",icon:En,href:e.establishments},intelligence:{label:"Data and Insights",icon:pi,href:e.intelligence},compliance:{label:"Compliance",icon:ui,href:e.compliance},quotas:{label:"Quotas",icon:Xr,href:e.quotas},exportSystems:{label:"Export systems",icon:di,href:e.exportSystems},licences:{label:"Licences",icon:ci,href:e.licences},invoices:{label:"Invoices and payments",icon:li,href:e.invoices}}),ho=e=>{var t,r,o,a,s,c;const n=vs(e.routes);return[n.dashboard,...(t=e==null?void 0:e.features)!=null&&t.people?[n.people]:[],n.establishments,n.intelligence,n.compliance,...(r=e==null?void 0:e.features)!=null&&r.quotas?[n.quotas]:[],...((o=e==null?void 0:e.features)==null?void 0:o.exportSystems)??((a=e==null?void 0:e.features)==null?void 0:a.exportDocumentation)?[n.exportSystems]:[],...(s=e==null?void 0:e.features)!=null&&s.licences?[n.licences]:[],...(c=e==null?void 0:e.features)!=null&&c.invoices?[n.invoices]:[]]},ys=e=>[{href:e.about,label:"About"},{href:e.contactUs,label:"Contact us"},{href:e.help,label:"Help"},{href:e.whatsNew,label:"What's new"},{href:e.accessibility,rel:"external",label:"Accessibility"},{href:e.disclaimer,rel:"external",label:"Disclaimer"},{href:e.privacy,label:"Privacy"}],Os=({onSignOutClick:e,features:n,routes:t})=>[ho({features:n,routes:t}),[{label:u(x,{as:"span",alignItems:"center",gap:.5,children:["Help",i(Xo,{}),i(si,{weight:"regular",size:"sm"})]}),icon:Kr,href:t.help,target:"_blank",rel:"noopener"}],[{label:"Sign out",onClick:e,icon:Qr}]],Ps=(e,n)=>{var o;if(!n)return;let t,r;for(const a of e){if(a.href===n){t=a;break}n.startsWith(a.href)&&a.href.length>(((o=r==null?void 0:r.href)==null?void 0:o.length)??0)&&(r=a)}return t||r},Nn=e=>(e==null?void 0:e.roleGroupName)==="BIOSECURITY"?"import":"export",mo={export:{label:"Export",area:"Export"},import:{label:"Import",area:"Import and biosecurity"}},go=e=>mo[e].label,xs=e=>mo[e].area,nn=e=>e==null?void 0:e.partyDisplayName,bo=e=>e==null?void 0:e.formattedPartyExternalId,ws=e=>{const n=a=>{var c;const s=((c=e==null?void 0:e.linkedBusinesses)==null?void 0:c.flatMap(d=>{var l;return Nn(d)===a?{...d,selected:((l=e==null?void 0:e.selectedBusiness)==null?void 0:l.partyId)===d.partyId,setSelected:()=>e.setSelectedBusiness(d)}:[]}))??[];return{category:a,businesses:s}},r=["export","import"].map(n),o=r.reduce((a,s)=>a+s.businesses.length,0);return{options:r,exists:o>0}},ks=new Set(["MANAGER","PRINCIPAL_AUTHORITY_OWNER","USER"]),Cs=e=>e!=null&&e.roleName?ks.has(e.roleName):!1,Ss=e=>e.businesses.length===0?null:u(ri,{label:`${go(e.category)} businesses`,children:[e.businesses.slice(0,3).map(n=>i(ti,{checked:n.selected??!1,secondaryText:bo(n),onClick:e.onSelectBusiness(n),children:nn(n)},n.partyId)),e.businesses.length>3?u(ue,{href:e.category==="import"?e.routes.importsHub:e.routes.exportsHub,endElement:i(Zr,{}),children:["View all ",e.category," businesses"]}):null]}),Is=e=>{const n=o=>()=>{var a;return(a=o==null?void 0:o.setSelected)==null?void 0:a.call(o)},{options:t,exists:r}=ws(e.businessDetails);return u(ni,{palette:"light",children:[t.map(o=>i(Ss,{businesses:o.businesses,onSelectBusiness:n,category:o.category,routes:e.routes},o.category)),r&&i(Un,{}),i(ue,{href:e.routes.account,icon:mi,children:"Home"}),i(ue,{href:e.routes.exportsHub,icon:gi,children:"Export"}),i(ue,{href:e.routes.importsHub,icon:bi,children:"Import and biosecurity"}),i(ue,{href:e.routes.profile,icon:vi,children:"Profile and settings"}),i(Un,{}),i(ei,{onClick:e.onSignOutClick,icon:Qr,children:"Sign out"})]})},Ls=e=>{var n;return((n=e==null?void 0:e.details)==null?void 0:n.selectedBusiness)===void 0?[]:[{options:{disableGroupPadding:!0},items:[{label:"Back to export",icon:hi,href:e.routes.exportsHub}]},{options:{disableGroupPadding:!0},items:[{label:u(f.Fragment,{children:[i(I,{fontWeight:"bold",fontSize:"xs",children:nn(e.details.selectedBusiness)}),u(I,{color:"muted",fontSize:"xs",children:["ABN: ",bo(e.details.selectedBusiness)]})]})}]}]},Ds=e=>{var n;return e.selectedBusiness?{...e==null?void 0:e.features,people:((n=e==null?void 0:e.features)==null?void 0:n.people)??Cs(e.selectedBusiness)}:e.features};var Ms=["children"],As=["as","children","direction","className"];function Pt(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function Qe(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?Pt(Object(t),!0).forEach(function(r){O(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Pt(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var vo=function(n){var t=n.children,r=T(n,Ms);return i(js,Qe(Qe({as:ge},r),{},{children:t}))},js=function(n){var t=n.as,r=n.children,o=n.direction,a=n.className,s=T(n,As),c=Bs[o],d=o==="left",l=en("sm");return u(x,Qe(Qe({alignItems:"center",as:t,className:a,css:v({alignSelf:"flex-start",svg:{transition:l.transition},":hover svg":{transform:l.transform}},"",""),focusRingFor:"keyboard",fontFamily:"body",fontWeight:"normal",gap:.5,inline:!0,link:!0},s),{},{children:[d?i(c,{size:"sm"}):null,r,d?null:i(c,{size:"sm"})]}))},Bs={up:Pi,right:Zr,down:Oi,left:yi};function Es(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.focusOnMount,t=e.focusOnUpdate,r=e.forwardedRef,o=f.useRef(null),a=r||o;return f.useEffect(function(){var s,c;!t&&!n||!("current"in a)||Array.isArray(t)&&t.filter(Boolean).length===0||a==null||(s=a.current)===null||s===void 0||(c=s.focus)===null||c===void 0||c.call(s)},[t]),a}var Rs=function(n){var t=n.as,r=t===void 0?"h2":t,o=n.children,a=n.hasDismissButton,s=n.hasCloseButton;return i(I,{as:r,css:se(O({marginRight:s||a?"2.5rem":void 0},y.mediaQuery.min.sm,{marginRight:"0"})),fontSize:"lg",fontWeight:"bold",lineHeight:"heading",children:o})},Ts=function(n){var t,r=n.onClick;return i(q,{"aria-label":"Close",css:se((t={position:"absolute",top:"1.5rem",right:"1.5rem",flexShrink:0},O(t,y.mediaQuery.min.sm,{position:"relative",top:"unset",right:"unset"}),O(t,"& > span:first-of-type",O({display:"none"},y.mediaQuery.min.sm,{display:"block"})),t)),iconAfter:me,onClick:r,variant:"text",children:"Close"})};function xt(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function $s(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?xt(Object(t),!0).forEach(function(r){O(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):xt(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var Fs=f.forwardRef(function(n,t){var r=n.id,o=n.focusOnMount,a=n.focusOnUpdate,s=n.role,c=n.children,d=n.onClose,l=n.onDismiss,p=n.title,h=n.tone,b=n.tabIndex,w=Es({focusOnMount:o,focusOnUpdate:a,forwardedRef:t}),m=ua(d,l),P=Ns[h],k=P.fg,S=P.bg,C=P.icon;return u(x,{css:v({backgroundColor:S,position:"relative"},"",""),focusRingFor:"all",highContrastOutline:!0,id:r,ref:w,role:s,rounded:!0,tabIndex:b??(o||a?-1:void 0),children:[i(x,{alignItems:"center",css:v($s({borderTopLeftRadius:y.borderRadius,borderBottomLeftRadius:y.borderRadius,backgroundColor:k,color:g.backgroundBody},qo.exactColor),"",""),padding:.5,children:C}),u(x,{alignItems:"flex-start",css:v(O({marginRight:m&&!p?"3rem":void 0},y.mediaQuery.min.sm,{marginRight:"0"}),"",""),flexGrow:1,gap:1,padding:1.5,children:[u(x,{alignItems:"flex-start",flexDirection:"column",flexGrow:1,gap:1,children:[p?f.isValidElement(p)?p:i(Rs,{hasCloseButton:!!m,children:p}):null,c]}),m?i(Ts,{onClick:m}):null]})]})}),Ns={success:{fg:g.systemSuccess,bg:g.systemSuccessMuted,icon:i(ki,{"aria-hidden":"false","aria-label":"Success"})},error:{fg:g.systemError,bg:g.systemErrorMuted,icon:i(Hr,{"aria-hidden":"false","aria-label":"Error"})},info:{fg:g.systemInfo,bg:g.systemInfoMuted,icon:i(wi,{"aria-hidden":"false","aria-label":"Information"})},warning:{fg:g.systemWarning,bg:g.systemWarningMuted,icon:i(xi,{"aria-hidden":"false","aria-label":"Warning"})}};const _s=["IP1","IP2","IP3","IP4"],yo=Array.from(_s),zs=e=>{const n=[];return e.forEach(t=>n.unshift(t)),n},yn=new Set(yo),wt=new Set(zs(yo)),Ws={descriptor:"Unknown"},qs={IP1:{level:"IP1",descriptor:"Basic"},IP2:{level:"IP2",descriptor:"Standard"},IP3:{level:"IP3",descriptor:"Strong"},IP4:{level:"IP4",descriptor:"Strong"}},Gs=e=>yn.has(e),Xe=(e,n)=>{const t=e&&Gs(e)?qs[e]:Ws;return n!=null&&n.short||t.level===void 0?t.descriptor:`${t.descriptor} (${t.level})`},Oo=(e,n)=>Array.from(e).filter(t=>n.has(t)),Po=(e,n)=>Array.from(e).filter(t=>!n.has(t)),fe=e=>{const n=new Set(e??[]);return[...Oo(wt,n),...Po(n,wt)][0]},xo=e=>{const n=new Set(e??[]);return[...Oo(yn,n),...Po(n,yn)][0]},kt=e=>e===void 0?[]:Array.isArray(e)?e:[e],Hs=(e,n)=>{if(n===void 0||e.length===0)return!0;const t=new Set(n);return e.some(r=>t.has(r))},Ct=e=>((e==null?void 0:e.trim())??"")==="",wo=()=>i(oe,{children:u(Li,{title:"Need more help?",children:[u(I,{children:["Email"," ",i(ge,{href:"mailto:exportservice@aff.gov.au",children:"exportservice@aff.gov.au"})]}),u(I,{children:["Call ",i(ge,{href:"tel:1800571125",children:"1800 571 125"}),", Monday to Friday, 9 am to 5 pm AEST"]})]})}),Us=e=>i(N,{children:u(B,{gap:3,children:[i(oe,{children:i(vo,{href:e.routes.dashboard,direction:"left",children:"Back to Dashboard"})}),u(G,{children:[i("h1",{children:"Single names in TradeClear"}),i("p",{children:"If you are legally known by a single name, you can use it to access a TradeClear account. Other services we offer may not accept a single name and you will need to use a given and family name."}),i("p",{children:"Contact support if you need more help."})]}),i(Gr,{}),i(wo,{})]})}),Ys=e=>{const n=Xe(e.providedProofingLevel),t=Xe(e.requiredProofingLevel,{short:!0});return i(N,{children:u(B,{gap:3,children:[i(oe,{children:i(vo,{href:e.routes.dashboard,direction:"left",children:"Back"})}),u(G,{children:[i("h1",{children:e.activeApp??"Use a higher identity strength"}),i(M,{className:Go,children:u(Fs,{tone:"info",title:"You can't access this feature",children:["Sign in with myID and use a ‘",t,"’ identity strength or higher to access this feature."]})}),i("h2",{children:"Review your profile and settings"}),u("p",{children:["Your current identity strength is ",n,". To access this feature you must add myID to your account from your"," ",i(ge,{href:e.routes.profile,children:"Profile and settings"}),", then sign in."]})]}),i(Gr,{}),i(wo,{})]})})},ko={MissingName:Us,ProofMissing:Ys},Ks=({claims:e,errorComponents:n,requiredProofingLevel:t,authDetails:r,activeApp:o,children:a,routes:s})=>{const c=n.MissingGivenName??n.MissingName,d=n.MissingFamilyName??n.MissingName,l=n.ProofMissing,p=kt(t),h=kt(r==null?void 0:r.proofingLevel);if(!Hs(p,h)){const b=xo(p),w=fe(h);return i(l,{requiredProofingLevel:b,providedProofingLevel:w,activeApp:o,routes:s})}return e===void 0?i(f.Fragment,{children:a}):Ct(e==null?void 0:e.given_name)?i(c,{routes:s,children:a}):Ct(e==null?void 0:e.family_name)?i(d,{routes:s,children:a}):i(f.Fragment,{children:a})},Qs=Object.values,Xs={IP1:{AL1:"urn:id.gov.au:tdif:acr:ip1:cl1",AL2:"urn:id.gov.au:tdif:acr:ip1:cl2",AL3:"urn:id.gov.au:tdif:acr:ip1:cl3",PlusAL1:"urn:id.gov.au:tdif:acr:ip1p:cl1",PlusAL2:"urn:id.gov.au:tdif:acr:ip1p:cl2",PlusAL3:"urn:id.gov.au:tdif:acr:ip1p:cl3"},IP2:{AL2:"urn:id.gov.au:tdif:acr:ip2:cl2",AL3:"urn:id.gov.au:tdif:acr:ip2:cl3",PlusAL2:"urn:id.gov.au:tdif:acr:ip2p:cl2",PlusAL3:"urn:id.gov.au:tdif:acr:ip2p:cl3"},IP3:{AL2:"urn:id.gov.au:tdif:acr:ip3:cl2",AL3:"urn:id.gov.au:tdif:acr:ip3:cl3"},IP4:{AL3:"urn:id.gov.au:tdif:acr:ip4:cl3"}},Vs=["IP1","IP2","IP3","IP4"],Zs=Object.fromEntries(Vs.map((e,n,t)=>[e,t.slice(0,n)])),ke=e=>Object.fromEntries(Qs(Xs[e]).map(n=>[n,e])),On={...ke("IP1"),...ke("IP2"),...ke("IP3"),...ke("IP4")},Js=e=>e in On,el=e=>e===void 0?[]:Array.isArray(e)?e:[e],Ue=(e,n)=>{const r=el(e.AARM_acr).flatMap(o=>Js(o)?[On[o],...Zs[On[o]]]:[o]);return Array.from(new Set(r))},nl=e=>(e==null?void 0:e.credentialType)==="myGovID"?"myID":(e==null?void 0:e.credentialType)==="B2CLocalUser"?"B2CLocalUser":void 0,tl=(e,n)=>e?{provider:nl(e),proofingLevel:Ue(e)}:void 0,_n=f.createContext(void 0),Co=()=>{var e;return(e=f.useContext(_n))==null?void 0:e.onSignOutClick},rl=()=>f.useContext(_n),ol=_n.Provider,So=(e,n)=>{const{domain:t}=n;return e.kind==="standalone"?e.url:typeof t=="function"?t(e):`https://${e.subdomain}.${t}${e.path}`},il=e=>n=>{const t={};return Object.entries(e).forEach(([r,o])=>{t[r]=So(o,{domain:n})}),t},Pn=e=>n=>({kind:"scoped",subdomain:e,path:n}),al=e=>({kind:"standalone",url:e}),Io=(()=>{const e=Pn("exports"),n=Pn("services"),t=al,r={account:n("/account"),profile:n("/account/profile"),people:n("/account/exports/manage-people"),dashboard:n("/account/exports/dashboard"),exportsHub:n("/account/exports"),importsHub:n("/account/imports"),exportsDashboard:n("/account/exports/dashboard"),importsDashboard:n("/account/imports/dashboard"),about:n("/about"),contactUs:n("/about/contact-us"),help:n("/help"),privacy:n("/privacy"),whatsNew:n("/whats-new"),accessibility:t("https://www.agriculture.gov.au/about/commitment/accessibility"),disclaimer:t("https://www.agriculture.gov.au/about/disclaimer"),establishments:e("/establishments"),intelligence:e("/intelligence"),compliance:e("/compliance"),quotas:e("/quota"),exportSystems:e("/export-systems"),licences:e("/licences"),invoices:e("/inexs")};return il(r)})(),sl=Io("agriculture.gov.au"),ll="agriculture.gov.au",cl="exports";function V({activePath:e,children:n,focusMode:t=!1,handleSignOut:r,mainContentId:o="main-content",userName:a,businessDetails:s,claims:c,errorComponents:d,features:l,requiredProofingLevel:p,authDetails:h,sidebarItems:b,sidebarSubLevelVisible:w,headerProps:m,domain:P,subdomain:k}){const S=f.useMemo(()=>new Date().getFullYear(),[]),C=P??ll,D=k??cl,E=f.useContext(Ci),[H,U,Q]=gn(!1),[W,qn,le]=gn(!1),Pe=U,Eo=r,ce=s==null?void 0:s.selectedBusiness,xe=Ds({features:l,selectedBusiness:ce}),Ro=Pn(D)(e),Gn=So(Ro,{domain:C}),Y=Io(C),To=f.useMemo(()=>ho({features:xe,routes:Y}),[xe]),$o=ys(Y),Fo=f.useMemo(()=>[...Ls({details:s,routes:Y}),...Os({onSignOutClick:Pe,features:xe,routes:Y})],[Pe,s,xe]),No=tl(c),_o=h??No,sn=Ps(To,Gn);return i(Wa,{focusMode:t,children:i(ol,{value:{onSignOutClick:Pe,routes:Y,subdomain:D,selectedBusiness:ce},children:u(oe,{children:[i(rs,{palette:"light",background:"body",href:(m==null?void 0:m.href)??Y.account,heading:(m==null?void 0:m.heading)??"TradeClear",subLine:(m==null?void 0:m.subLine)??"Australian export, import and biosecurity services",badgeLabel:m==null?void 0:m.badgeLabel,logo:i(Si,{}),accountDetails:a?{href:Y.account,name:nn(ce)??a,avatarName:a,secondaryText:ce===void 0?void 0:go(Nn(ce)),dropdown:s?i(Is,{routes:Y,businessDetails:s,onSignOutClick:Pe}):void 0}:void 0}),b?i(oe,{...E,children:i(Ot,{activePath:e,items:b,subLevelVisible:w,background:"body"})}):i(Ot,{activePath:Gn,items:Fo,background:"body"}),u(hs,{children:[i(oe,{...E,children:i("main",{id:o,tabIndex:-1,css:{"&:focus":{outline:"none"}},children:i(Ks,{claims:c,authDetails:_o,requiredProofingLevel:p,errorComponents:{...ko,...d},activeApp:sn==null?void 0:sn.label,routes:Y,children:n})})}),u(gs,{children:[i("nav",{"aria-label":"footer",children:i(Ii,{links:$o,horizontal:!0})}),i(bs,{}),i(I,{fontSize:"xs",maxWidth:y.maxWidth.bodyText,children:"We acknowledge the traditional owners of country throughout Australia and recognise their continuing connection to land, waters and culture. We pay our respects to their Elders past, present and emerging."}),u(I,{fontSize:"xs",maxWidth:y.maxWidth.bodyText,children:["© ",S," Department of Agriculture, Fisheries and Forestry"]})]})]}),i(lo,{isOpen:H,onClose:Q,title:"Do you want to sign out?",actions:u(Dn,{children:[i(q,{onClick:async()=>{qn(),await Eo(),le(),Q()},loading:W,disabled:W,children:"Sign out"}),i(q,{variant:"secondary",onClick:Q,children:"Cancel"})]}),children:i(I,{as:"p",children:"You will be signed out of your account and any services you are currently using."})})]})})})}var Lo=Symbol.for("immer-nothing"),St=Symbol.for("immer-draftable"),$=Symbol.for("immer-state");function _(e,...n){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var ie=Object.getPrototypeOf;function ae(e){return!!e&&!!e[$]}function J(e){var n;return e?Do(e)||Array.isArray(e)||!!e[St]||!!((n=e.constructor)!=null&&n[St])||rn(e)||on(e):!1}var dl=Object.prototype.constructor.toString();function Do(e){if(!e||typeof e!="object")return!1;const n=ie(e);if(n===null)return!0;const t=Object.hasOwnProperty.call(n,"constructor")&&n.constructor;return t===Object?!0:typeof t=="function"&&Function.toString.call(t)===dl}function Ve(e,n){tn(e)===0?Reflect.ownKeys(e).forEach(t=>{n(t,e[t],e)}):e.forEach((t,r)=>n(r,t,e))}function tn(e){const n=e[$];return n?n.type_:Array.isArray(e)?1:rn(e)?2:on(e)?3:0}function xn(e,n){return tn(e)===2?e.has(n):Object.prototype.hasOwnProperty.call(e,n)}function Mo(e,n,t){const r=tn(e);r===2?e.set(n,t):r===3?e.add(t):e[n]=t}function ul(e,n){return e===n?e!==0||1/e===1/n:e!==e&&n!==n}function rn(e){return e instanceof Map}function on(e){return e instanceof Set}function Z(e){return e.copy_||e.base_}function wn(e,n){if(rn(e))return new Map(e);if(on(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);const t=Do(e);if(n===!0||n==="class_only"&&!t){const r=Object.getOwnPropertyDescriptors(e);delete r[$];let o=Reflect.ownKeys(r);for(let a=0;a<o.length;a++){const s=o[a],c=r[s];c.writable===!1&&(c.writable=!0,c.configurable=!0),(c.get||c.set)&&(r[s]={configurable:!0,writable:!0,enumerable:c.enumerable,value:e[s]})}return Object.create(ie(e),r)}else{const r=ie(e);if(r!==null&&t)return{...e};const o=Object.create(r);return Object.assign(o,e)}}function zn(e,n=!1){return an(e)||ae(e)||!J(e)||(tn(e)>1&&(e.set=e.add=e.clear=e.delete=pl),Object.freeze(e),n&&Object.entries(e).forEach(([t,r])=>zn(r,!0))),e}function pl(){_(2)}function an(e){return Object.isFrozen(e)}var fl={};function ee(e){const n=fl[e];return n||_(0,e),n}var be;function Ao(){return be}function hl(e,n){return{drafts_:[],parent_:e,immer_:n,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function It(e,n){n&&(ee("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=n)}function kn(e){Cn(e),e.drafts_.forEach(ml),e.drafts_=null}function Cn(e){e===be&&(be=e.parent_)}function Lt(e){return be=hl(be,e)}function ml(e){const n=e[$];n.type_===0||n.type_===1?n.revoke_():n.revoked_=!0}function Dt(e,n){n.unfinalizedDrafts_=n.drafts_.length;const t=n.drafts_[0];return e!==void 0&&e!==t?(t[$].modified_&&(kn(n),_(4)),J(e)&&(e=Ze(n,e),n.parent_||Je(n,e)),n.patches_&&ee("Patches").generateReplacementPatches_(t[$].base_,e,n.patches_,n.inversePatches_)):e=Ze(n,t,[]),kn(n),n.patches_&&n.patchListener_(n.patches_,n.inversePatches_),e!==Lo?e:void 0}function Ze(e,n,t){if(an(n))return n;const r=n[$];if(!r)return Ve(n,(o,a)=>Mt(e,r,n,o,a,t)),n;if(r.scope_!==e)return n;if(!r.modified_)return Je(e,r.base_,!0),r.base_;if(!r.finalized_){r.finalized_=!0,r.scope_.unfinalizedDrafts_--;const o=r.copy_;let a=o,s=!1;r.type_===3&&(a=new Set(o),o.clear(),s=!0),Ve(a,(c,d)=>Mt(e,r,o,c,d,t,s)),Je(e,o,!1),t&&e.patches_&&ee("Patches").generatePatches_(r,t,e.patches_,e.inversePatches_)}return r.copy_}function Mt(e,n,t,r,o,a,s){if(ae(o)){const c=a&&n&&n.type_!==3&&!xn(n.assigned_,r)?a.concat(r):void 0,d=Ze(e,o,c);if(Mo(t,r,d),ae(d))e.canAutoFreeze_=!1;else return}else s&&t.add(o);if(J(o)&&!an(o)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;Ze(e,o),(!n||!n.scope_.parent_)&&typeof r!="symbol"&&Object.prototype.propertyIsEnumerable.call(t,r)&&Je(e,o)}}function Je(e,n,t=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&zn(n,t)}function gl(e,n){const t=Array.isArray(e),r={type_:t?1:0,scope_:n?n.scope_:Ao(),modified_:!1,finalized_:!1,assigned_:{},parent_:n,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let o=r,a=Wn;t&&(o=[r],a=ve);const{revoke:s,proxy:c}=Proxy.revocable(o,a);return r.draft_=c,r.revoke_=s,c}var Wn={get(e,n){if(n===$)return e;const t=Z(e);if(!xn(t,n))return bl(e,t,n);const r=t[n];return e.finalized_||!J(r)?r:r===hn(e.base_,n)?(mn(e),e.copy_[n]=In(r,e)):r},has(e,n){return n in Z(e)},ownKeys(e){return Reflect.ownKeys(Z(e))},set(e,n,t){const r=jo(Z(e),n);if(r!=null&&r.set)return r.set.call(e.draft_,t),!0;if(!e.modified_){const o=hn(Z(e),n),a=o==null?void 0:o[$];if(a&&a.base_===t)return e.copy_[n]=t,e.assigned_[n]=!1,!0;if(ul(t,o)&&(t!==void 0||xn(e.base_,n)))return!0;mn(e),Sn(e)}return e.copy_[n]===t&&(t!==void 0||n in e.copy_)||Number.isNaN(t)&&Number.isNaN(e.copy_[n])||(e.copy_[n]=t,e.assigned_[n]=!0),!0},deleteProperty(e,n){return hn(e.base_,n)!==void 0||n in e.base_?(e.assigned_[n]=!1,mn(e),Sn(e)):delete e.assigned_[n],e.copy_&&delete e.copy_[n],!0},getOwnPropertyDescriptor(e,n){const t=Z(e),r=Reflect.getOwnPropertyDescriptor(t,n);return r&&{writable:!0,configurable:e.type_!==1||n!=="length",enumerable:r.enumerable,value:t[n]}},defineProperty(){_(11)},getPrototypeOf(e){return ie(e.base_)},setPrototypeOf(){_(12)}},ve={};Ve(Wn,(e,n)=>{ve[e]=function(){return arguments[0]=arguments[0][0],n.apply(this,arguments)}});ve.deleteProperty=function(e,n){return ve.set.call(this,e,n,void 0)};ve.set=function(e,n,t){return Wn.set.call(this,e[0],n,t,e[0])};function hn(e,n){const t=e[$];return(t?Z(t):e)[n]}function bl(e,n,t){var o;const r=jo(n,t);return r?"value"in r?r.value:(o=r.get)==null?void 0:o.call(e.draft_):void 0}function jo(e,n){if(!(n in e))return;let t=ie(e);for(;t;){const r=Object.getOwnPropertyDescriptor(t,n);if(r)return r;t=ie(t)}}function Sn(e){e.modified_||(e.modified_=!0,e.parent_&&Sn(e.parent_))}function mn(e){e.copy_||(e.copy_=wn(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var vl=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(n,t,r)=>{if(typeof n=="function"&&typeof t!="function"){const a=t;t=n;const s=this;return function(d=a,...l){return s.produce(d,p=>t.call(this,p,...l))}}typeof t!="function"&&_(6),r!==void 0&&typeof r!="function"&&_(7);let o;if(J(n)){const a=Lt(this),s=In(n,void 0);let c=!0;try{o=t(s),c=!1}finally{c?kn(a):Cn(a)}return It(a,r),Dt(o,a)}else if(!n||typeof n!="object"){if(o=t(n),o===void 0&&(o=n),o===Lo&&(o=void 0),this.autoFreeze_&&zn(o,!0),r){const a=[],s=[];ee("Patches").generateReplacementPatches_(n,o,a,s),r(a,s)}return o}else _(1,n)},this.produceWithPatches=(n,t)=>{if(typeof n=="function")return(s,...c)=>this.produceWithPatches(s,d=>n(d,...c));let r,o;return[this.produce(n,t,(s,c)=>{r=s,o=c}),r,o]},typeof(e==null?void 0:e.autoFreeze)=="boolean"&&this.setAutoFreeze(e.autoFreeze),typeof(e==null?void 0:e.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){J(e)||_(8),ae(e)&&(e=yl(e));const n=Lt(this),t=In(e,void 0);return t[$].isManual_=!0,Cn(n),t}finishDraft(e,n){const t=e&&e[$];(!t||!t.isManual_)&&_(9);const{scope_:r}=t;return It(r,n),Dt(void 0,r)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,n){let t;for(t=n.length-1;t>=0;t--){const o=n[t];if(o.path.length===0&&o.op==="replace"){e=o.value;break}}t>-1&&(n=n.slice(t+1));const r=ee("Patches").applyPatches_;return ae(e)?r(e,n):this.produce(e,o=>r(o,n))}};function In(e,n){const t=rn(e)?ee("MapSet").proxyMap_(e,n):on(e)?ee("MapSet").proxySet_(e,n):gl(e,n);return(n?n.scope_:Ao()).drafts_.push(t),t}function yl(e){return ae(e)||_(10,e),Bo(e)}function Bo(e){if(!J(e)||an(e))return e;const n=e[$];let t;if(n){if(!n.modified_)return n.base_;n.finalized_=!0,t=wn(e,n.scope_.immer_.useStrictShallowCopy_)}else t=wn(e,!0);return Ve(t,(r,o)=>{Mo(t,r,Bo(o))}),n&&(n.finalized_=!1),t}var F=new vl,Ce=F.produce;F.produceWithPatches.bind(F);F.setAutoFreeze.bind(F);F.setUseStrictShallowCopy.bind(F);F.applyPatches.bind(F);F.createDraft.bind(F);F.finishDraft.bind(F);function At(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function Ol(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?At(Object(t),!0).forEach(function(r){O(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):At(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var Pl=function(n){var t,r=n.children,o=n["aria-label"],a=n.isExpandable,s=n.isExpanded;return i("nav",{"aria-label":o,children:i(x,{alignItems:"center",as:"ol",css:v(Ol({"li:first-of-type > svg":{display:"none"}},a&&!s&&(t={},O(t,y.mediaQuery.min.md,{"li:nth-of-type(2)":{display:"none"}}),O(t,y.mediaQuery.max.sm,{"li:not(:nth-of-type(-n+2)):not(:last-of-type)":{display:s?void 0:"none"}}),t)),"",""),flexWrap:"wrap",gap:.5,children:r})})},xl={name:"oi0w1a",styles:"flex-shrink:0;position:relative;top:1px"},wl=function(){return i(Yr,{color:"border",css:xl,size:"sm"})};function jt(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function kl(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?jt(Object(t),!0).forEach(function(r){O(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):jt(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var Ye=f.forwardRef(function(n,t){var r=n.children,o=n.href;return u(x,{alignItems:"center",as:"li",color:"text",fontSize:"sm",gap:.5,children:[i(wl,{}),o?i(ge,kl({ref:t},n)):r]})});function Cl(e){var n=e.onClick;return i(Ye,{children:i(x,{alignItems:"center","aria-expanded":"false","aria-label":"Show all breadcrumbs",as:ye,focusRingFor:"keyboard",fontSize:"sm",justifyContent:"center",link:!0,onClick:n,children:"…"})})}var Sl=["label"],Il=["label"],Ll=["label"];function Bt(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function re(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?Bt(Object(t),!0).forEach(function(r){O(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Bt(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var Dl=function(n){var t=n["aria-label"],r=t===void 0?"Breadcrumbs":t,o=n.links,a=f.useRef(null),s=o[0],c=s.label,d=T(s,Sl),l=o[o.length-1],p=l.label,h=T(l,Il),b=o.filter(function(S,C,D){return!(C===0||C===D.length-1)}),w=f.useState(!b.length),m=w[0],P=w[1],k=function(){var C;P(!0),(C=a.current)===null||C===void 0||C.focus()};return u(Pl,{"aria-label":r,isExpandable:!0,isExpanded:m,children:[i(Ye,re(re({ref:a},d),{},{children:c})),!m&&b.length?i(Cl,{onClick:k}):null,b.map(function(S,C){var D=S.label,E=T(S,Ll);return i(Ye,re(re({},E),{},{children:D}),C)}),u(Ye,re(re({},h),{},{children:[p,i(Mn,{children:" (current page)"})]}))]})};const Ml=({links:e,...n})=>{const t=e.map((r,o)=>o===e.length-1?{...r,href:void 0}:r);return i(Dl,{...n,links:t})},Al=e=>{const n=rl(),{links:t,routes:r=(n==null?void 0:n.routes)??sl,businessCategory:o=Nn(n==null?void 0:n.selectedBusiness),selectedBusinessName:a=nn(n==null?void 0:n.selectedBusiness),...s}=e,c=o==="import"?r.importsHub:r.exportsHub,d=o==="import"?r.importsDashboard:r.exportsDashboard,l=[{label:"Home",href:r.account},{label:xs(o),href:c},...a?[{label:a,href:d}]:[],...t??[]];return i(Ml,{...s,links:l})},K=[{partyId:1,partyDisplayName:"Jefferson PTY LTD",formattedPartyExternalId:"89 790 756 100",someExtraInfo:"our component allows this field but does not use it at all",roleDisplayName:"User",roleName:"USER"},{partyId:2,partyDisplayName:"Metaweb (agent role)",formattedPartyExternalId:"89 790 756 100",someExtraInfo:"our component allows this field but does not use it at all",roleDisplayName:"Agent",roleName:"AGENT"},{partyId:3,partyDisplayName:"Fresh Produce Australia",formattedPartyExternalId:"92 635 964 018",someExtraInfo:"our component allows this field but does not use it at all",roleDisplayName:"Principal Authority (Owner)",roleName:"PRINCIPAL_AUTHORITY_OWNER"},{partyId:4,partyDisplayName:"Fresh Produce Australia",formattedPartyExternalId:"92 635 964 018",someExtraInfo:"our component allows this field but does not use it at all",roleDisplayName:"Manager",roleName:"MANAGER"}],Ke=[{partyId:5,partyDisplayName:"Business A",formattedPartyExternalId:"ABN: 88 888 888 888",roleDisplayName:"User",roleGroupName:"BIOSECURITY"},{partyId:6,partyDisplayName:"Business B",formattedPartyExternalId:"ABN: 88 888 888 888",roleDisplayName:"User",roleGroupName:"BIOSECURITY"},{partyId:7,partyDisplayName:"Business C",formattedPartyExternalId:"ABN: 88 888 888 888",roleDisplayName:"User",roleGroupName:"BIOSECURITY"},{partyId:8,partyDisplayName:"Business D",formattedPartyExternalId:"ABN: 88 888 888 888",roleDisplayName:"User",roleGroupName:"BIOSECURITY"}],jl={linkedBusinesses:[...K,...Ke],selectedBusiness:K[0],setSelectedBusiness:()=>{}},Xl={title:"AppLayout",component:V,parameters:{layout:"fullscreen"},render:function(n){return u(f.Fragment,{children:[i(te,{links:[{href:"#main-content",label:"Skip to main content"}]}),i(V,{...n,children:i(N,{children:i(G,{children:i("h1",{children:"Page heading"})})})})]})}},Bl=e=>new Promise(n=>setTimeout(n,e)),A=async()=>{await Bl(2e3),alert("You have been signed out.")},Se={args:{focusMode:!1,userName:"Toto Wolff",unreadMessageCount:6,activePath:"/",handleSignOut:A}},Ie={args:{focusMode:!0,userName:"Toto Wolff",unreadMessageCount:6,activePath:"/",handleSignOut:A}},Le={args:{activePath:"/",focusMode:!1,handleSignOut:A},render:function(n){const[t,r]=f.useState(!1);return f.useEffect(()=>{setTimeout(()=>{r(!0)},1e3)},[]),u(f.Fragment,{children:[i(te,{links:[{href:"#main-content",label:"Skip to main content"}]}),i(V,{...n,...t?{userName:"Toto Wolff",unreadMessageCount:6}:{},children:i(N,{children:i(G,{children:i("h1",{children:"Page heading"})})})})]})}},De={args:{focusMode:!1,userName:"Toto Wolff",unreadMessageCount:6,activePath:"/",handleSignOut:A,domain:"test.agriculture.gov.au"}},Me={args:{focusMode:!1,userName:"Toto Wolff",unreadMessageCount:6,activePath:"/account/exports/dashboard",handleSignOut:A,subdomain:"services",domain:e=>`http://${e.subdomain}.example.com/custom-prefix${e.path}`}},Ae={args:{businessDetails:jl,focusMode:!1,userName:"Toto Wolff",unreadMessageCount:6,activePath:"/account/exports/dashboard",handleSignOut:A,subdomain:"services",features:{people:!0,exportSystems:!0,invoices:!0,licences:!0,quotas:!0},domain:e=>e.subdomain==="services"?`http://localhost:8080${e.path}`:`http://localhost:3000${e.path}`},render:e=>{const[n,t]=f.useState("/account/exports/dashboard"),[r,o]=f.useState("services");return u(f.Fragment,{children:[i(te,{links:[{href:"#main-content",label:"Skip to main content"}]}),i(V,{...e,activePath:n,subdomain:r,children:i(N,{children:u(B,{gap:3,children:[i(Ho,{children:"configure activePath / subdomain to test routing"}),i(bn,{label:"activePath",onChange:a=>t(a.target.value),value:n,options:[{value:"/account/exports/dashboard",label:"account-dashboard"},{value:"/account/exports/manage-people",label:"manage-people"},{value:"/establishments",label:"establishments"},{value:"/intelligence",label:"intelligence"},{value:"/compliance",label:"compliance"},{value:"/quota",label:"quota"},{value:"/export-systems",label:"export-systems"},{value:"/licences",label:"licences"},{value:"/inexs",label:"inexs"}]}),i(bn,{label:"subdomain",onChange:a=>o(a.target.value),value:r,options:[{value:"services",label:"services"},{value:"exports",label:"exports"}]})]})})})]})}},je={args:{focusMode:!1,userName:"Toto Wolff",unreadMessageCount:6,activePath:"/intelligence",handleSignOut:A},render:function(n){const[t,r]=f.useState({exports:K,imports:Ke,selectedBusiness:K[1]}),o=s=>r(c=>({...c,selectedBusiness:s})),a=(s,c)=>()=>{if(s==="imports"){const d=Ke.slice(0,c),l=d[0];r(p=>({...p,imports:d,selectedBusiness:l}))}if(s==="exports"){const d=K.slice(0,c),l=d[0];r(p=>({...p,exports:d,selectedBusiness:l}))}};return u(f.Fragment,{children:[i(te,{links:[{href:"#main-content",label:"Skip to main content"}]}),i(V,{...n,businessDetails:{selectedBusiness:t.selectedBusiness,linkedBusinesses:[...t.exports,...t.imports],setSelectedBusiness:o},children:i(N,{children:u(B,{gap:3,children:[i(Al,{links:[{label:"Data and insights",href:"/intelligence"},{label:"Report 1",href:"/intelligence/report/report_1"}]}),i(G,{children:i("h1",{children:"Business dropdown configuration"})}),u(x,{gap:1,children:[i(he,{label:"Number of linked businesses",block:!0,hideOptionalLabel:!0,children:Array.from(new Array(K.length+1).keys()).map(s=>{var c;return u(nt,{checked:((c=t==null?void 0:t.exports)==null?void 0:c.length)===s,onChange:a("exports",s),children:[s," ",s===0?"business":"businesses"]},s)})}),i(he,{label:"Number of linked biosecurity businesses",block:!0,hideOptionalLabel:!0,children:Array.from(new Array(Ke.length+1).keys()).map(s=>{var c;return u(nt,{checked:((c=t==null?void 0:t.imports)==null?void 0:c.length)===s,onChange:a("imports",s),children:[s," ",s===0?"import business":"import businesses"]},s)})})]})]})})})]})}},Be={args:{focusMode:!1,userName:"Toto Wolff",unreadMessageCount:6,activePath:"/",handleSignOut:A},render:function(n){const t=K,[r,o]=f.useState(t[1]),[a,s]=f.useState(),c=()=>s(void 0),d={linkedBusinesses:t,selectedBusiness:r,setSelectedBusiness:s};return u(f.Fragment,{children:[i(te,{links:[{href:"#main-content",label:"Skip to main content"}]}),u(V,{...n,businessDetails:d,children:[i(lo,{isOpen:a!==void 0,onClose:c,title:"Are you sure you want to leave this page?",actions:u(Dn,{children:[i(q,{onClick:()=>{a!==void 0&&o(a),s(void 0)},children:"Leave this page"}),i(q,{variant:"secondary",onClick:c,children:"Stay on this page"})]}),children:i(I,{as:"p",children:"You will lose all changes made since your last save."})}),i(N,{children:i(B,{gap:3,children:i(G,{children:u("h1",{children:["Active business: ",r==null?void 0:r.partyDisplayName]})})})})]})]})}},Ee={args:{focusMode:!1,userName:"Toto Wolff",unreadMessageCount:6,activePath:"/",handleSignOut:A},render:function(n){const t={linkedBusinesses:K,selectedBusiness:K[0],setSelectedBusiness:()=>{}},r=()=>{const o=Co();return i(q,{onClick:o,children:"Sign out"})};return u(f.Fragment,{children:[i(te,{links:[{href:"#main-content",label:"Skip to main content"}]}),i(V,{...n,businessDetails:t,children:i(N,{children:u(B,{gap:3,children:[u(G,{children:[i("h1",{children:"Sign out button"}),u("p",{children:["You can trigger the sign out modal using the"," ",i("code",{children:"useOpenSignOutModal"})," hook."]})]}),i(Dn,{children:i(r,{})})]})})})]})}},Re={args:{focusMode:!1,userName:"Toto Wolff",unreadMessageCount:6,activePath:"/",features:{quotas:!0,exportSystems:!0,licences:!0,invoices:!0,people:!0}}},Te={args:{focusMode:!1,unreadMessageCount:6,activePath:"/",handleSignOut:A,claims:{given_name:"given_name",family_name:"family_name"}}},$e={args:{focusMode:!1,unreadMessageCount:6,activePath:"/",handleSignOut:A,claims:{family_name:"family_name"}}},Fe={args:{focusMode:!1,unreadMessageCount:6,activePath:"/",handleSignOut:A,claims:{family_name:"family_name"},errorComponents:{MissingName:e=>(f.useEffect(()=>{console.log("report this situation to an analytics provider here")},[]),i(ko.MissingName,{...e}))}}},Ne={args:{focusMode:!1,unreadMessageCount:6,activePath:"/",handleSignOut:A,claims:{family_name:"family_name"},errorComponents:{MissingName:e=>i(N,{children:u(G,{children:[i("p",{children:"Our app works just fine even without a generic name."}),i("hr",{}),e.children]})})}}},_e={args:{focusMode:!1,unreadMessageCount:6,activePath:"/",handleSignOut:A,claims:{family_name:"family_name"},errorComponents:{MissingGivenName:e=>{const n=Co();return i(N,{children:u(G,{children:[i("p",{children:"Our app works just fine even without a given name."}),i("hr",{}),e.children,i(q,{onClick:n,children:"Sign out"})]})})}}}},ze={args:{focusMode:!1,unreadMessageCount:6,activePath:"/",handleSignOut:A,claims:{given_name:"given_name",family_name:"family_name",AARM_acr:"urn:id.gov.au:tdif:acr:ip1:cl1"},requiredProofingLevel:"IP2"}},We={args:{focusMode:!1,unreadMessageCount:6,activePath:"/",handleSignOut:A},render:function(n){const t=["IP1","IP2","IP3","IP4"],r=["urn:id.gov.au:tdif:acr:ip1:cl1","urn:id.gov.au:tdif:acr:ip1:cl2","urn:id.gov.au:tdif:acr:ip1:cl3","urn:id.gov.au:tdif:acr:ip1p:cl1","urn:id.gov.au:tdif:acr:ip1p:cl2","urn:id.gov.au:tdif:acr:ip1p:cl3","urn:id.gov.au:tdif:acr:ip2:cl2","urn:id.gov.au:tdif:acr:ip2:cl3","urn:id.gov.au:tdif:acr:ip2p:cl2","urn:id.gov.au:tdif:acr:ip2p:cl3","urn:id.gov.au:tdif:acr:ip3:cl2","urn:id.gov.au:tdif:acr:ip3:cl3","urn:id.gov.au:tdif:acr:ip4:cl3"],[o,a]=f.useState(!0),[s,c]=f.useState({method:"urn",claims:{given_name:"given_name",family_name:"family_name",AARM_acr:[r[0]]},authDetails:{proofingLevel:["IP1"]},requiredProofingLevel:["IP2"]}),d=l=>{const p=l.kind==="max"?"#df185a":"#287be0",h=l!=null&&l.extraText?` (${l.extraText})`:"";return l!=null&&l.active?i(M,{css:{position:"relative",padding:"4px",border:`2px dashed ${p}`,"& + &":{marginTop:"1em"},":after":{position:"absolute",right:0,bottom:"120%",content:`"${l.kind==="max"?"maximum provided proof":"minimum required proof"}${h}"`,color:p,fontSize:"0.8em"}},children:l.children}):i(Wr,{children:l.children})};return u(f.Fragment,{children:[i(te,{links:[{href:"#main-content",label:"Skip to main content"}]}),u(M,{css:{position:"relative"},children:[i(M,{css:{border:"2px solid red",backgroundColor:"#fec0ff",position:"fixed",transform:"rotate(90deg)",transformOrigin:"top right",fontSize:"1.2em",padding:".4em 1em",top:"55vh",right:0,zIndex:99,cursor:"pointer"},onClick:()=>a(!0),children:"show config options"}),i(V,{...n,requiredProofingLevel:s.requiredProofingLevel,...s.method==="claims"?{claims:s.claims}:{authDetails:s.authDetails},children:i(N,{children:u(B,{gap:1.5,children:[i(I,{as:"p",fontSize:"lg",children:"You made it!"}),i(I,{as:"p",children:"Your proofing level means that you can see this page."})]})})})]}),i(xa,{title:"Config",isOpen:o,onClose:()=>a(!1),children:u(B,{gap:1.5,children:[i(bn,{label:"Proofing method",required:!0,options:[{value:"authDetails",label:"AuthDetails"},{value:"claims",label:"Claims"}],onChange:l=>c(Ce(p=>{p.method=l.target.value}))}),s.method==="claims"?i(he,{label:"Provided ACR",block:!0,hideOptionalLabel:!0,children:r.map(l=>i(d,{kind:"max",active:fe(Ue({AARM_acr:l}))===fe(Ue(s.claims)),extraText:fe(Ue(s.claims)),children:i(dn,{checked:new Set(s.claims.AARM_acr).has(l),onChange:p=>c(Ce(h=>{p.target.checked?h.claims.AARM_acr.push(l):h.claims.AARM_acr.splice(h.claims.AARM_acr.indexOf(l),1)})),children:l},l)},l))}):i(he,{label:"Provided proofing level",block:!0,hideOptionalLabel:!0,children:t.map(l=>i(d,{kind:"max",active:fe(s.authDetails.proofingLevel)===l,children:i(dn,{checked:new Set(s.authDetails.proofingLevel).has(l),onChange:p=>c(Ce(h=>{p.target.checked?h.authDetails.proofingLevel.push(l):h.authDetails.proofingLevel.splice(h.authDetails.proofingLevel.indexOf(l),1)})),children:l},l)},l))}),i(he,{label:"Required proofing level",block:!0,hideOptionalLabel:!0,children:t.map(l=>i(d,{kind:"min",active:xo(s.requiredProofingLevel)===l,children:i(dn,{checked:new Set(s.requiredProofingLevel).has(l),onChange:p=>c(Ce(h=>{p.target.checked?h.requiredProofingLevel.push(l):h.requiredProofingLevel.splice(h.requiredProofingLevel.indexOf(l),1)})),children:l},l)},l))})]})})]})}},qe={args:{focusMode:!1,unreadMessageCount:6,activePath:"/",handleSignOut:A,authDetails:{proofingLevel:"IP1"},requiredProofingLevel:"IP3",errorComponents:{ProofMissing:e=>i(N,{children:u(G,{children:[u("p",{children:["Your proofing level is insufficient at"," ",Xe(e.providedProofingLevel),". Please fix it."]}),u("p",{children:["you should provide at least '",Xe(e.requiredProofingLevel),"'"]})]})})}}},Ge={args:{focusMode:!1,userName:"Toto Wolff",unreadMessageCount:6,activePath:"/custom",handleSignOut:A,sidebarItems:[{items:[{label:"Custom sidenav",href:"/custom",icon:En},{label:"Other item",href:"/other",icon:Xr}]}],internal:"sidebar"}},He={args:{focusMode:!1,userName:"Toto Wolff",unreadMessageCount:6,activePath:"/custom",handleSignOut:A,headerProps:{heading:"Service Portal",subLine:"Supporting Australian agriculture"},sidebarItems:[{items:[{label:"Overview",href:"/custom",icon:En,items:[{label:"Business details",href:"#"},{label:"People",href:"#"}]},{label:"Country requirements",href:"/country-requirements",icon:Vr,items:[{label:"Other",href:"#"},{label:"Options",href:"#"}]}]},{items:[{label:"Help",href:"/help",icon:Kr}]}]}};var Et,Rt,Tt;Se.parameters={...Se.parameters,docs:{...(Et=Se.parameters)==null?void 0:Et.docs,source:{originalSource:`{
  args: {
    focusMode: false,
    userName: 'Toto Wolff',
    unreadMessageCount: 6,
    activePath: '/',
    handleSignOut
  }
}`,...(Tt=(Rt=Se.parameters)==null?void 0:Rt.docs)==null?void 0:Tt.source}}};var $t,Ft,Nt;Ie.parameters={...Ie.parameters,docs:{...($t=Ie.parameters)==null?void 0:$t.docs,source:{originalSource:`{
  args: {
    focusMode: true,
    userName: 'Toto Wolff',
    unreadMessageCount: 6,
    activePath: '/',
    handleSignOut
  }
}`,...(Nt=(Ft=Ie.parameters)==null?void 0:Ft.docs)==null?void 0:Nt.source}}};var _t,zt,Wt;Le.parameters={...Le.parameters,docs:{...(_t=Le.parameters)==null?void 0:_t.docs,source:{originalSource:`{
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
}`,...(Wt=(zt=Le.parameters)==null?void 0:zt.docs)==null?void 0:Wt.source}}};var qt,Gt,Ht;De.parameters={...De.parameters,docs:{...(qt=De.parameters)==null?void 0:qt.docs,source:{originalSource:`{
  args: {
    focusMode: false,
    userName: 'Toto Wolff',
    unreadMessageCount: 6,
    activePath: '/',
    handleSignOut,
    domain: 'test.agriculture.gov.au'
  }
}`,...(Ht=(Gt=De.parameters)==null?void 0:Gt.docs)==null?void 0:Ht.source}}};var Ut,Yt,Kt;Me.parameters={...Me.parameters,docs:{...(Ut=Me.parameters)==null?void 0:Ut.docs,source:{originalSource:`{
  args: {
    focusMode: false,
    userName: 'Toto Wolff',
    unreadMessageCount: 6,
    activePath: '/account/exports/dashboard',
    handleSignOut,
    subdomain: 'services',
    domain: route => \`http://\${route.subdomain}.example.com/custom-prefix\${route.path}\`
  }
}`,...(Kt=(Yt=Me.parameters)==null?void 0:Yt.docs)==null?void 0:Kt.source}}};var Qt,Xt,Vt;Ae.parameters={...Ae.parameters,docs:{...(Qt=Ae.parameters)==null?void 0:Qt.docs,source:{originalSource:`{
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
}`,...(Vt=(Xt=Ae.parameters)==null?void 0:Xt.docs)==null?void 0:Vt.source}}};var Zt,Jt,er;je.parameters={...je.parameters,docs:{...(Zt=je.parameters)==null?void 0:Zt.docs,source:{originalSource:`{
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
}`,...(er=(Jt=je.parameters)==null?void 0:Jt.docs)==null?void 0:er.source}}};var nr,tr,rr;Be.parameters={...Be.parameters,docs:{...(nr=Be.parameters)==null?void 0:nr.docs,source:{originalSource:`{
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
}`,...(rr=(tr=Be.parameters)==null?void 0:tr.docs)==null?void 0:rr.source}}};var or,ir,ar;Ee.parameters={...Ee.parameters,docs:{...(or=Ee.parameters)==null?void 0:or.docs,source:{originalSource:`{
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
}`,...(ar=(ir=Ee.parameters)==null?void 0:ir.docs)==null?void 0:ar.source}}};var sr,lr,cr;Re.parameters={...Re.parameters,docs:{...(sr=Re.parameters)==null?void 0:sr.docs,source:{originalSource:`{
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
}`,...(cr=(lr=Re.parameters)==null?void 0:lr.docs)==null?void 0:cr.source}}};var dr,ur,pr;Te.parameters={...Te.parameters,docs:{...(dr=Te.parameters)==null?void 0:dr.docs,source:{originalSource:`{
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
}`,...(pr=(ur=Te.parameters)==null?void 0:ur.docs)==null?void 0:pr.source}}};var fr,hr,mr;$e.parameters={...$e.parameters,docs:{...(fr=$e.parameters)==null?void 0:fr.docs,source:{originalSource:`{
  args: {
    focusMode: false,
    unreadMessageCount: 6,
    activePath: '/',
    handleSignOut,
    claims: {
      family_name: 'family_name'
    }
  }
}`,...(mr=(hr=$e.parameters)==null?void 0:hr.docs)==null?void 0:mr.source}}};var gr,br,vr;Fe.parameters={...Fe.parameters,docs:{...(gr=Fe.parameters)==null?void 0:gr.docs,source:{originalSource:`{
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
}`,...(vr=(br=Fe.parameters)==null?void 0:br.docs)==null?void 0:vr.source}}};var yr,Or,Pr;Ne.parameters={...Ne.parameters,docs:{...(yr=Ne.parameters)==null?void 0:yr.docs,source:{originalSource:`{
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
}`,...(Pr=(Or=Ne.parameters)==null?void 0:Or.docs)==null?void 0:Pr.source}}};var xr,wr,kr;_e.parameters={..._e.parameters,docs:{...(xr=_e.parameters)==null?void 0:xr.docs,source:{originalSource:`{
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
}`,...(kr=(wr=_e.parameters)==null?void 0:wr.docs)==null?void 0:kr.source}}};var Cr,Sr,Ir;ze.parameters={...ze.parameters,docs:{...(Cr=ze.parameters)==null?void 0:Cr.docs,source:{originalSource:`{
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
}`,...(Ir=(Sr=ze.parameters)==null?void 0:Sr.docs)==null?void 0:Ir.source}}};var Lr,Dr,Mr;We.parameters={...We.parameters,docs:{...(Lr=We.parameters)==null?void 0:Lr.docs,source:{originalSource:`{
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
}`,...(Mr=(Dr=We.parameters)==null?void 0:Dr.docs)==null?void 0:Mr.source}}};var Ar,jr,Br;qe.parameters={...qe.parameters,docs:{...(Ar=qe.parameters)==null?void 0:Ar.docs,source:{originalSource:`{
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
}`,...(Br=(jr=qe.parameters)==null?void 0:jr.docs)==null?void 0:Br.source}}};var Er,Rr,Tr;Ge.parameters={...Ge.parameters,docs:{...(Er=Ge.parameters)==null?void 0:Er.docs,source:{originalSource:`{
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
}`,...(Tr=(Rr=Ge.parameters)==null?void 0:Rr.docs)==null?void 0:Tr.source}}};var $r,Fr,Nr;He.parameters={...He.parameters,docs:{...($r=He.parameters)==null?void 0:$r.docs,source:{originalSource:`{
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
}`,...(Nr=(Fr=He.parameters)==null?void 0:Fr.docs)==null?void 0:Nr.source}}};const Vl=["Basic","FocusMode","ClientSideFetch","EnvironmentRouting","CustomRouting","DevelopmentRouting","BusinessDropdown","BusinessDropdownModalInterrupt","SignOutModalTrigger","OptionalAppsEnabled","Claims","ClaimsMissingName","ClaimsMissingNameAnalytics","ClaimsMissingNameComponent","ClaimsMissingGivenNameComponent","RequiredProofingPaywall","RequiredProofingPaywallOptions","RequiredProofingPaywallCustomComponent","CustomSidenav","HeaderProps"];export{Se as Basic,je as BusinessDropdown,Be as BusinessDropdownModalInterrupt,Te as Claims,_e as ClaimsMissingGivenNameComponent,$e as ClaimsMissingName,Fe as ClaimsMissingNameAnalytics,Ne as ClaimsMissingNameComponent,Le as ClientSideFetch,Me as CustomRouting,Ge as CustomSidenav,Ae as DevelopmentRouting,De as EnvironmentRouting,Ie as FocusMode,He as HeaderProps,Re as OptionalAppsEnabled,ze as RequiredProofingPaywall,qe as RequiredProofingPaywallCustomComponent,We as RequiredProofingPaywallOptions,Ee as SignOutModalTrigger,Vl as __namedExportsOrder,Xl as default};
