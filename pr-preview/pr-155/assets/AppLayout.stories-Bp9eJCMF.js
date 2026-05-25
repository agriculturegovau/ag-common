import{j as o,e as G,t as y,m as A,_ as P,c as b,d as g,i as u,B as M,p as L,G as Cn,g as ie,h as Ir,u as Lr,q as Mo,F as Mr,b as Ao,s as Do}from"./Box-37a490cb.esm-D-DOdbx1.js";import{r as f}from"./index-BAneEnFJ.js";import{P as H,p as jo}from"./ag.ds-next-react-prose.esm-DL7-5UY7.js";import{b as Bo,m as Eo,c as q,_ as Ar,C as Ro,B as Ke,P as _,a as kn}from"./ag.ds-next-react-button.esm-mlZ_Ex-Y.js";import{v as To,S as j,T as k,F as x,V as Dr,s as Qe,E as Fo,c as No}from"./Icon-29f3c11e.esm-BY8XGtqw.js";import{e as ee,a as Sn,c as In,F as Ln,u as fn,_ as Fn,D as zo,b as $o,d as _o,f as Nn,g as le,h as Wo,i as qo,j as Go,k as Ho,l as jr}from"./ag.ds-next-react-dropdown-menu.esm-DC3xI-8g.js";import{b as Br,c as Uo,d as Yo,a as Er,C as fe,M as Ko,e as Qo,H as Rr,f as Tr,E as Xo,L as Vo,g as Zo,P as Fr,S as Jo,h as ei,F as Mn,U as ni,i as Nr,j as ti,k as ri,l as oi,A as ii,m as zr,n as ai,o as si,p as ci,W as li,I as di,q as ui,B as pi}from"./ag.ds-next-react-icon.esm-CUinNsHF.js";import{r as An}from"./index-exioagFi.js";import{u as Dn,C as te,c as fi}from"./CoreProvider-eb9f00f4.esm-D4vhSKCO.js";import{L as hi}from"./ag.ds-next-react-ag-branding.esm-yc4QqEQm.js";import{L as gi}from"./ag.ds-next-react-link-list.esm-56KXQLr_.js";import{C as mi}from"./ag.ds-next-react-callout.esm-bCYqbuMQ.js";import{a as We}from"./ag.ds-next-react-text-link.esm-qoNokk0X.js";import"./jsx-runtime-D_zvdyIk.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-pL_YbQPu.js";function $r(){var e=f.useState(!1),n=e[0],t=e[1];return f.useEffect(function(){if(!window.matchMedia){t(!1);return}var r=window.matchMedia("(prefers-reduced-motion: reduce)");t(r.matches);var i=function(s){return t(s.matches)};return r.addEventListener("change",i),function(){return r.removeEventListener("change",i)}},[]),n}var vi=function(n){var t=n.children,r=n["aria-label"];return o("nav",{"aria-label":r,children:t})},bi=f.forwardRef(function(n,t){var r=n.children,i=n.href;return o("a",{css:[To,Bo({block:!1,size:"md",variant:"primary"}),{position:"absolute","&:focus-visible":{top:A(1),left:A(1),clip:"auto",clipPath:"none",overflow:"visible",whiteSpace:"normal",width:"auto",zIndex:y.zIndex.skipLink}},"","","",""],href:i,ref:t,children:r})}),yi=["label"];function zn(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function $n(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?zn(Object(t),!0).forEach(function(r){P(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):zn(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var ae=function(n){var t=n.links,r=n["aria-label"],i=r===void 0?"Skip links":r;return o(vi,{"aria-label":i,children:t.map(function(a,s){var c=a.label,d=G(a,yi);return o(bi,$n($n({},d),{},{children:c}),s)})})},_n="data-conditional-field-container",Oi="data-grouped-fields",Pi=function(n){var t=n.hideOptionalLabel,r=n.required,i=n.secondaryLabel;return f.useMemo(function(){return[i,t||r?null:"(optional)"].filter(Boolean).join(" ")},[r,i,t])};function Wn(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function qn(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?Wn(Object(t),!0).forEach(function(r){P(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Wn(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var _r=function(n){var t,r=n.children,i=n.invalid,a=n.id;return o(j,qn(qn({},P({},rn,!0)),{},{borderLeft:i,borderLeftWidth:"xl",css:b((t={borderLeftColor:i?g.systemError:void 0},P(t,"[".concat(_n,"] &[").concat(rn,"]"),{marginLeft:i?"calc(-".concat(A(1)," - ").concat(y.borderWidth.xl,"px)"):void 0,position:"relative"}),P(t,"[".concat(_n,"] [").concat(Oi,"] &[").concat(rn,"]:not(:first-of-type)"),{marginLeft:0}),t),"",""),gap:.5,id:a,paddingLeft:i?1:void 0,children:r}))},rn="data-field-container",Wr=function(n){var t=n.as,r=t===void 0?"label":t,i=n.children,a=n.className,s=n.id,c=n.htmlFor,d=n.required,l=n.secondaryLabel,p=n.hideOptionalLabel,h=Pi({hideOptionalLabel:p,required:d,secondaryLabel:l});return u(M,{as:r,className:a,htmlFor:c,id:s,children:[o(k,{as:"span",fontWeight:"bold",children:i}),h?u(k,{as:"span",color:"muted",children:[" ",h]}):null]})},qr=function(n){var t=n.children,r=n.id;return o(k,{color:"muted",display:"block",id:r,children:t})},xi={name:"4zleql",styles:"display:block"},Gr=function(n){var t=n.children,r=n.id;return u(x,{alignItems:"center",gap:.5,children:[o(M,{flexShrink:0,children:o(Br,{"aria-hidden":"false","aria-label":"Error",color:"error",css:xi,size:"md"})}),o(k,{color:"error",display:"block",fontWeight:"bold",id:r,children:t})]})},wi=function(n){var t=n.children,r=n.hint,i=n.id,a=n.invalid,s=n.label,c=n.labelId,d=n.maxWidth,l=n.secondaryLabel,p=n.hideOptionalLabel,h=n.message,v=n.required,w=Ci(i),m=w.fieldId,O=w.hintId,C=w.messageId,S=ki({required:v,fieldId:m,message:h,messageId:C,hint:r,hintId:O,invalid:a});return u(_r,{invalid:a,children:[o(Wr,{hideOptionalLabel:p,htmlFor:m,id:c,required:v,secondaryLabel:l,children:s}),r?o(qr,{id:O,children:r}):null,h&&a?o(Gr,{id:C,children:h}):null,typeof t=="function"?t(S):t,d?o("div",{"aria-hidden":!0,css:b({height:0,marginTop:"-".concat(A(.5)),maxWidth:y.maxWidth.field[d],overflow:"hidden","::after":{content:'"---------------------------------------------------------------"'}},"","")}):null]})},Ci=function(n){var t=ee(n),r=n||"field-".concat(t),i="field-".concat(t,"-hint"),a="field-".concat(t,"-message");return{fieldId:r,hintId:i,messageId:a}},ki=function(n){var t=n.required,r=n.fieldId,i=n.message,a=n.messageId,s=n.hint,c=n.hintId,d=n.invalid,l=[i?a:null,s?c:null].filter(Boolean),p=l.length?l.join(" "):void 0;return{"aria-required":!!t,"aria-invalid":!!d,"aria-describedby":p,id:r}},Hr=f.createContext(void 0),Ur=function(){return f.useContext(Hr)};function Si(e){var n=e.children,t=e.invalid,r=e.messageId,i=e.name,a=e.required,s=ee();return o(Hr.Provider,{value:{invalid:t,name:i||s,messageId:r,required:a},children:n})}var pe=function(n){var t=n.block,r=t===void 0?!1:t,i=n.children,a=n.hint,s=n.id,c=n.invalid,d=c===void 0?!1:c,l=n.label,p=n.hideOptionalLabel,h=n.message,v=n.name,w=n.required,m=w===void 0?!1:w,O=Ii(s),C=O.groupId,S=O.hintId,I=O.messageId,B=[d&&h?I:null,a?S:null].filter(Boolean),E=B.length?B.join(" "):void 0;return o(Si,{invalid:d,messageId:d&&h?I:void 0,name:v,required:m,children:o(_r,{id:C,invalid:d,children:u(M,{"aria-describedby":E,as:"fieldset",children:[l?o(Wr,{as:"legend",hideOptionalLabel:p,required:m,children:l}):null,u(j,{css:b({marginTop:l?A(.5):void 0},"",""),gap:.5,children:[a?o(qr,{id:S,children:a}):null,h&&d?o(Gr,{id:I,children:h}):null,o(x,{flexDirection:r?"column":"row",flexWrap:r?void 0:"wrap",gap:1,paddingTop:.5,width:"100%",children:i})]})]})})})},Ii=function(n){var t=ee(n),r=n||"control-group-".concat(t),i="control-group-".concat(t,"-hint"),a="control-group-".concat(t,"-message");return{groupId:r,hintId:i,messageId:a}};function Gn(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function on(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?Gn(Object(t),!0).forEach(function(r){P(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Gn(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function Li(e){var n=e.disabled,t=e.invalid,r=e.size,i=L.control[r],a=i.width,s=i.height,c=i.borderWidth;return o(x,{alignItems:"center",as:"span",css:b(on(on({backgroundColor:g.backgroundBody,borderColor:g.border,borderRadius:"100%",borderStyle:"solid",borderWidth:c,inset:0,position:"absolute"},n&&{color:g.borderMuted,borderColor:g.borderMuted,backgroundColor:g.backgroundShade,"@media (forced-colors: active)":{borderColor:"GrayText",color:"GrayText"}}),t&&{borderColor:g.systemError,backgroundColor:g.systemErrorMuted}),"",""),flexShrink:0,height:s,justifyContent:"center",rounded:!0,width:a,children:o(M,{as:"span",css:b(on({borderRadius:"100%",backgroundColor:g.foregroundText,"@media (forced-colors: active)":{backgroundColor:"MenuText"}},n&&{backgroundColor:g.borderMuted,"@media (forced-colors: active)":{backgroundColor:"GrayText"}}),"",""),height:"calc(100% - 0.5rem)",highContrastOutline:!0,width:"calc(100% - 0.5rem)"})})}var Mi=["height","width"];function Hn(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function Ai(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?Hn(Object(t),!0).forEach(function(r){P(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Hn(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var Di=f.forwardRef(function(n,t){var r=n.height,i=n.width,a=G(n,Mi);return o("input",Ai({css:b({height:r,margin:0,opacity:0,verticalAlign:"middle",width:i,"&:focus ~ span:first-of-type":L.outline,"~ span > span":{opacity:0},"&:checked ~ span > span":{opacity:1}},"",""),ref:t},a))}),ji=function(n){var t=n.children,r=n.disabled,i=n.htmlFor;return o(x,{alignItems:"flex-start",as:"label",color:"text",css:b({cursor:r?"not-allowed":"pointer"},"",""),gap:.5,htmlFor:i,inline:!0,children:t})},Bi={sm:0,md:"0.2rem"};function Ei(e){var n=e.children,t=e.disabled,r=e.size,i=Bi[r];return o(k,{color:t?"muted":"text",css:b({paddingTop:i},"",""),flexGrow:1,children:n})}var Ri=["children","disabled","invalid","name","required","size"];function Un(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function Ti(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?Un(Object(t),!0).forEach(function(r){P(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Un(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var Yn=f.forwardRef(function(n,t){var r=n.children,i=n.disabled,a=n.invalid,s=n.name,c=n.required,d=n.size,l=d===void 0?"md":d,p=G(n,Ri),h=Fi(p.id),v=Ur(),w=L.control[l],m=w.height,O=w.width,C=typeof a=="boolean"?a:v==null?void 0:v.invalid,S=typeof c=="boolean"?c:v==null?void 0:v.required,I=s||(v==null?void 0:v.name);return u(ji,{disabled:i,htmlFor:h,children:[u("span",{css:b({display:"inline-block",height:m,position:"relative",width:O},"",""),children:[o(Di,Ti({"aria-describedby":C?v==null?void 0:v.messageId:void 0,"aria-invalid":C||void 0,"aria-required":S,disabled:i,height:m,id:h,name:I,ref:t,type:"radio",width:O},p)),o(Li,{disabled:i,invalid:C,size:l})]}),o(Ei,{disabled:i,size:l,children:r})]})});function Fi(e){var n=ee(e);return e||"radio-".concat(n)}function Kn(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function Qn(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?Kn(Object(t),!0).forEach(function(r){P(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Kn(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var Ni=function(n){var t=n.disabled,r=n.indeterminate,i=n.invalid,a=n.size,s=L.control[a],c=s.width,d=s.height,l=s.borderWidth;return o(x,{alignItems:"center",as:"span",css:b(Qn(Qn({backgroundColor:g.backgroundBody,borderColor:g.border,borderStyle:"solid",borderWidth:l,color:g.foregroundText,inset:0,position:"absolute"},t&&{color:g.borderMuted,borderColor:g.borderMuted,backgroundColor:g.backgroundShade,"@media (forced-colors: active)":{borderColor:"GrayText",color:"GrayText"}}),i&&{borderColor:g.systemError,backgroundColor:g.systemErrorMuted}),"",""),flexShrink:0,height:d,justifyContent:"center",rounded:!0,width:c,children:r?o(Uo,{size:a,weight:"bold"}):o(Yo,{size:a,weight:"bold"})})},zi=["height","width"];function Xn(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function $i(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?Xn(Object(t),!0).forEach(function(r){P(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Xn(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var _i=f.forwardRef(function(n,t){var r=n.height,i=n.width,a=G(n,zi);return o("input",$i({css:b({height:r,margin:0,opacity:0,verticalAlign:"middle",width:i,"&:focus ~ span:first-of-type":L.outline,"~ span > svg":{opacity:0},"&:checked ~ span > svg, &:indeterminate ~ span > svg":{opacity:1}},"",""),ref:t},a))});function Wi(e){var n=e.children,t=e.htmlFor,r=e.disabled;return o(x,{alignItems:"flex-start",as:"label",color:"text",css:b({cursor:r?"not-allowed":"pointer"},"",""),gap:.5,htmlFor:t,inline:!0,children:n})}var qi={sm:0,md:"0.2rem"};function Gi(e){var n=e.children,t=e.disabled,r=e.size,i=qi[r];return o(k,{color:t?"muted":"text",css:b({paddingTop:i},"",""),flexGrow:1,children:n})}var Hi=["checked","children","disabled","indeterminate","invalid","name","required","size"];function Vn(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function Ui(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?Vn(Object(t),!0).forEach(function(r){P(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Vn(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var an=f.forwardRef(function(n,t){var r=n.checked,i=n.children,a=n.disabled,s=n.indeterminate,c=n.invalid,d=n.name,l=n.required,p=n.size,h=p===void 0?"md":p,v=G(n,Hi),w=Yi(v.id),m=f.useRef(null),O=Ur(),C=L.control[h],S=C.height,I=C.width,B=typeof c=="boolean"?c:O==null?void 0:O.invalid,E=typeof l=="boolean"?l:O==null?void 0:O.required,W=d||(O==null?void 0:O.name);f.useEffect(function(){m.current&&(m.current.indeterminate=!!s)},[s]);var U=s?!1:r;return u(Wi,{disabled:a,htmlFor:w,children:[u("span",{css:b({display:"inline-block",height:S,position:"relative",width:I},"",""),children:[o(_i,Ui({"aria-checked":s?"mixed":void 0,"aria-describedby":B?O==null?void 0:O.messageId:void 0,"aria-invalid":B||void 0,"aria-required":E,checked:U,disabled:a,height:S,id:w,name:W,ref:Eo([t,m]),type:"checkbox",width:I},v)),o(Ni,{disabled:a,indeterminate:s,invalid:B,size:h})]}),o(Gi,{disabled:a,size:h,children:i})]})});function Yi(e){var n=ee(e);return e||"checkbox-".concat(n)}var Ki=["label","hideOptionalLabel","required","hint","message","invalid","block","maxWidth","options","placeholder","id"];function Zn(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function Y(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?Zn(Object(t),!0).forEach(function(r){P(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Zn(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var Qi=f.forwardRef(function(n,t){var r=n.label,i=n.hideOptionalLabel,a=n.required,s=n.hint,c=n.message,d=n.invalid,l=n.block,p=n.maxWidth,h=p===void 0?"md":p,v=n.options,w=n.placeholder,m=n.id,O=G(n,Ki),C=Ji({block:l});return o(wi,{hideOptionalLabel:i,hint:s,id:m,invalid:d,label:r,maxWidth:h,message:c,required:a,children:function(I){return u(Xi,{block:l,maxWidth:h,children:[o("select",Y(Y(Y({css:C,ref:t},I),O),{},{children:o(Vi,{options:v,placeholder:w})})),o(Zi,{disabled:O.disabled})]})}})}),Xi=function(n){var t=n.children,r=n.block,i=n.maxWidth;return o("div",{css:b(Y({position:"relative"},!r&&{maxWidth:y.maxWidth.field[i]}),"",""),children:t})},Vi=function(n){var t=n.options,r=n.placeholder;return u(f.Fragment,{children:[r?o("option",{value:"",children:r}):null,t.map(function(i){return"options"in i?o("optgroup",{disabled:i.disabled,label:i.label,children:i.options.map(function(a){var s=a.value,c=a.label,d=a.disabled;return o("option",{disabled:d,value:s,children:c},s)})},i.label):o("option",{disabled:i.disabled,value:i.value,children:i.label},i.value)})]})},Zi=function(n){var t=n.disabled;return o(Er,{css:b({position:"absolute",top:"50%",right:A(.75),transform:"translateY(-50%)",opacity:t?.3:void 0,pointerEvents:"none",color:g.foregroundAction},"","")})},Ji=function(n){var t=n.block;return Y(Y(Y(Y({position:"relative",appearance:"none",boxSizing:"border-box",paddingLeft:A(1),paddingRight:"calc(".concat(y.borderWidth.lg,"px + 2.5rem)"),margin:0,background:g.backgroundBody,borderWidth:y.borderWidth.lg,borderStyle:"solid",borderColor:g.border,borderRadius:y.borderRadius,color:g.foregroundText,width:"100%",fontFamily:y.font.body},L.input.md),{},{lineHeight:y.lineHeight.default},L.truncate),t&&{maxWidth:"none",display:"block"}),{},{'&[aria-invalid="true"]':{backgroundColor:g.systemErrorMuted,borderColor:g.systemError},"&:disabled":{opacity:1,cursor:"not-allowed",borderColor:g.borderMuted,backgroundColor:g.backgroundShade,color:g.foregroundMuted},"&:focus":L.outline})};function Yr(){var e=f.useState(!1),n=e[0],t=e[1];return f.useEffect(function(){t(!0)},[]),n}function Kr(e,n){var t=e||n;if(!t)throw new Error("onClose prop is required");return t}function ea(e,n){return e||n}function na(){var e=ee();return{titleId:"drawer-".concat(e,"-title")}}var ta={name:"6dhm9o",styles:"visibility:hidden"};function ra(e){var n=e.actions,t=e.children,r=e.elementToFocusOnClose,i=e.onClose,a=e.title,s=na(),c=s.titleId;return o(Ln,{returnFocus:r?function(){return window.setTimeout(function(){return r.focus()},0),!1}:!0,children:u(x,{"aria-labelledby":c,"aria-modal":!0,background:"body",css:b({boxShadow:y.shadow.lg,inset:0,position:"fixed"},"",""),flexDirection:"column",highContrastOutline:!0,role:"dialog",children:[u(oa,{children:[o(aa,{id:c,children:a}),o(q,{"aria-hidden":!0,css:ta,iconAfter:fe,tabIndex:-1,variant:"text",children:"Close"})]}),o(sa,{title:a,children:t}),n?o(la,{children:n}):null,o(q,{css:ie({position:"fixed",right:Ir({xs:A(.75),md:A(1.5)}),top:"1.25rem",zIndex:y.zIndex.elevated}),iconAfter:fe,onClick:i,variant:"text",children:"Close"})]})})}function oa(e){var n=e.children;return o(x,{background:"body",borderBottom:!0,paddingX:{xs:.75,md:1.5},paddingY:1,children:n})}var ia={name:"1r5gb7q",styles:"display:inline-block"};function aa(e){var n=e.children,t=e.id;return o(k,{as:"h2",css:ia,"data-autofocus":!0,focusRingFor:"keyboard",fontSize:"lg",fontWeight:"bold",id:t,lineHeight:"heading",tabIndex:-1,children:n})}function sa(e){var n=e.children,t=e.title;return o(M,{"aria-label":"".concat(t," content"),as:"section",background:"body",css:b({overflowY:"auto",":focus":{outlineOffset:"-".concat(L.outline.outlineWidth)}},"",""),flexGrow:1,focusRingFor:"keyboard",paddingX:{xs:.75,md:1.5},paddingY:{xs:1,md:1.5},tabIndex:0,children:n})}var ca={name:"xdvdnl",styles:"margin-top:auto"};function la(e){var n=e.children;return o(M,{background:"body",borderTop:!0,css:ca,paddingX:{xs:.75,md:1.5},paddingY:1,children:n})}var da={md:"32rem",lg:"45rem"},ua=function(n){var t=n.actions,r=n.children,i=n.elementToFocusOnClose,a=n.isOpen,s=a===void 0?!1:a,c=n.mutedOverlay,d=c===void 0?!1:c,l=n.onClose,p=n.onDismiss,h=n.title,v=n.width,w=v===void 0?"md":v,m=Kr(l,p),O=f.useRef(0),C=$r(),S=f.useState(!0),I=S[0],B=S[1],E=Yr();f.useEffect(function(){O.current=window.innerWidth-document.documentElement.clientWidth},[]),f.useEffect(function(){s&&B(!1)},[s]),f.useEffect(function(){var N=function(se){s&&se.code==="Escape"&&(se.preventDefault(),se.stopPropagation(),m())};return window.addEventListener("keydown",N),function(){return window.removeEventListener("keydown",N)}},[s,m]);var W=Sn(E?s:!1),U=W.modalContainerRef;if(!E||!In())return null;var ne=s?!0:!I;return An.createPortal(u(f.Fragment,{children:[s?o(fa,{scrollbarWidth:O.current}):null,u("div",{ref:U,children:[o("div",{css:b({pointerEvents:"none",position:"absolute",opacity:s?1:0,transition:s?"none":"opacity ".concat(C?"1ms":"150ms")},"",""),"data-drawer":"transitioner",onTransitionEnd:function(){B(!0)}}),o(pa,{isOpen:s,mutedOverlay:d,onClick:m,prefersReducedMotion:C}),o(M,{css:b({inset:0,marginLeft:"auto",position:"fixed",transform:"translateX(".concat(s?"0":"100%",")"),transition:"transform ".concat(C?"1ms":"150ms"," ease"),zIndex:y.zIndex.dialog},"",""),maxWidth:da[w],children:ne&&o(ra,{actions:t,elementToFocusOnClose:i,onClose:m,title:h,children:r})})]})]}),document.body)};function pa(e){var n=e.isOpen,t=e.mutedOverlay,r=e.onClick,i=e.prefersReducedMotion;return o("div",{css:b({pointerEvents:n?"all":"none",position:"fixed",inset:0,backgroundColor:t?g.overlayMuted:g.overlay,opacity:n?1:0,transition:"opacity ".concat(i?"1ms":"150ms"," ease"),zIndex:y.zIndex.overlay},"",""),onClick:r})}function fa(e){var n=e.scrollbarWidth;return o(Cn,{styles:b({html:{marginRight:n,scrollbarGutter:"auto"},body:{overflow:"hidden"}},"","")})}var Jn,ha=f.forwardRef(function(n,t){var r=n.children;return o("div",{css:b({position:"fixed",top:0,left:0,bottom:0,right:0,backgroundColor:g.overlay,zIndex:y.zIndex.overlay,overflowY:"auto",animation:"".concat(ga," ").concat(y.transition.duration,"ms ").concat(y.transition.timingFunction)},"",""),ref:t,children:r})}),ga=Lr(Jn||(Jn=Ar([`
  0% { opacity: 0; }
  100% { opacity: 1; }
`]))),ma=function(n){var t=n.children,r=n.id;return o(k,{as:"h2","data-autofocus":!0,focusRingFor:"keyboard",fontSize:"lg",fontWeight:"bold",id:r,lineHeight:"heading",tabIndex:-1,children:t})},va=function(){var n=ee();return{titleId:"modal-".concat(n,"-title")}},et,ba="45rem",ya={name:"1duj7gx",styles:"align-self:flex-end"},Oa={name:"xdvdnl",styles:"margin-top:auto"},Pa=function(n){var t=n.actions,r=n.children,i=n.onClose,a=n.title,s=va(),c=s.titleId;return o(Ln,{returnFocus:!0,children:u(j,{"aria-labelledby":c,"aria-modal":!0,background:"body",css:b(P({boxShadow:y.shadow.lg,position:"relative",margin:"0 auto",minHeight:"100vh",animation:"".concat(xa," ").concat(y.transition.duration,"ms ").concat(y.transition.timingFunction),"@supports (min-height: 100dvh)":{minHeight:"100dvh"}},y.mediaQuery.min.sm,{borderRadius:y.borderRadius,margin:"".concat(A(6)," auto ").concat(A(1)),minHeight:"auto"}),"",""),gap:1,highContrastOutline:!0,maxWidth:ba,paddingX:{xs:.75,md:1.5},paddingY:{xs:1,md:1.5},role:"dialog",children:[o(q,{"aria-label":"Close modal",css:ya,iconAfter:fe,onClick:i,variant:"text",children:"Close"}),o(ma,{id:c,children:a}),o(M,{children:r}),t?o(M,{css:Oa,paddingTop:1,children:t}):null]})})},xa=Lr(et||(et=Ar([`
  0% { transform: translateY(1rem); }
	100% { transform: translateY(0); }
`]))),Qr=function(n){var t=n.actions,r=n.children,i=n.isOpen,a=i===void 0?!1:i,s=n.onClose,c=n.onDismiss,d=n.title,l=Kr(s,c);f.useEffect(function(){var v=function(m){a&&m.code==="Escape"&&(m.preventDefault(),m.stopPropagation(),l())};return window.addEventListener("keydown",v),function(){return window.removeEventListener("keydown",v)}},[l,a]);var p=Sn(a),h=p.modalContainerRef;return!a||!In()?null:An.createPortal(u(f.Fragment,{children:[o(Ca,{}),o(ha,{ref:h,children:o(Pa,{actions:t,onClose:l,title:d,children:r})})]}),document.body)},wa={name:"1sy9iaq",styles:"body{overflow:hidden;}"},Ca=function(){return o(Cn,{styles:wa})};function ka(e){var n,t,r=Array.from(e.matchAll(new RegExp(/(\p{L})\p{L}+/,"gu")));if(!r.length)return"?";var i=((n=r.shift())===null||n===void 0?void 0:n[1])||"",a=((t=r.pop())===null||t===void 0?void 0:t[1])||"";return(i+a).toUpperCase()}function Xr(e){var n=e.name,t=e.tone,r=t===void 0?"neutral":t,i=e.size,a=i===void 0?"md":i,s=e["aria-hidden"],c=e["aria-label"],d=ka(n),l=Sa[r],p=Ia[a],h=p.size,v=p.fontSize;return o(x,{alignItems:"center","aria-hidden":s,"aria-label":c,as:"span",css:b({textDecoration:"none",height:"".concat(h,"rem"),width:"".concat(h,"rem"),borderRadius:"50%",borderStyle:"solid",borderWidth:y.borderWidth.sm,borderColor:l,color:l},"",""),flexShrink:0,fontSize:v,fontWeight:"bold",justifyContent:"center",children:d})}var Sa={neutral:g.foregroundMuted,action:g.foregroundAction},Ia={sm:{fontSize:"xs",size:2},md:{fontSize:"sm",size:2.5},lg:{fontSize:"md",size:3},xl:{fontSize:"lg",size:4},xxl:{fontSize:"xl",size:4.5},xxxl:{fontSize:"xl",size:5}},Vr=f.createContext(void 0);function me(){var e=f.useContext(Vr);if(e===void 0)throw new Error("`AppLayoutContext` not found.");return e}function La(e,n){var t=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=Ma(e))||n){t&&(e=t);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(l){throw l},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a,s=!0,c=!1;return{s:function(){t=t.call(e)},n:function(){var l=t.next();return s=l.done,l},e:function(l){c=!0,a=l},f:function(){try{s||t.return==null||t.return()}finally{if(c)throw a}}}}function Ma(e,n){if(e){if(typeof e=="string")return nt(e,n);var t={}.toString.call(e).slice(8,-1);return t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set"?Array.from(e):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?nt(e,n):void 0}}function nt(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=Array(n);t<n;t++)r[t]=e[t];return r}var $="xl",jn="16rem",Aa=function(n,t){if(!t)return"";var r=n.flatMap(function(l){return Array.isArray(l)?l:[l].concat(Fn(l.items))}).flatMap(function(l){return"items"in l&&l.items!==void 0?[l].concat(Fn(l.items)):l}).map(function(l){return l&&"href"in l&&l.href!==void 0?l.href:""}),i,a="",s=La(r),c;try{for(s.s();!(c=s.n()).done;){var d=c.value;if(d===t){i=d;break}t!=null&&t.startsWith(d)&&d.length>a.length&&(a=d)}}catch(l){s.e(l)}finally{s.f()}return i||a};function Da(e){var n=e.children,t=e.focusMode,r=t===void 0?!1:t,i=fn(!1),a=Mo(i,3),s=a[0],c=a[1],d=a[2];return o(Vr.Provider,{value:{focusMode:r,isMobileMenuOpen:s,openMobileMenu:c,closeMobileMenu:d},children:o(ja,{focusMode:r,children:n})})}function ja(e){var n=e.children,t=e.focusMode;return o("div",{css:ie({display:"grid",minHeight:"100vh",gridTemplateRows:"auto 1fr",gridTemplateColumns:Ir(P({xs:"1fr"},$,t?"1fr":"".concat(jn," 1fr")))}),children:n})}function tt(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function de(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?tt(Object(t),!0).forEach(function(r){P(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):tt(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var ce=1.5,hn="3.75rem",Ba={name:"1kn4ch8",styles:"margin-left:-0.5rem;margin-right:-0.5rem;overflow:hidden"};function Ea(e){var n=e.badgeLabel,t=e.dividerPosition,r=e.logo,i=e.heading,a=e.hasAccountDetails,s=e.href,c=e.secondHref,d=e.secondLogo,l=e.subLine,p=Dn();return r&&d?u(x,{css:Ba,flexDirection:{xs:"column",lg:"row"},flexWrap:{xs:"wrap",xl:"nowrap"},gap:{xs:1,md:ce},inline:!0,padding:.5,children:[u(x,{css:b({marginRight:a&&t==="after"?A(ce):0},"",""),flexDirection:{xs:"column",sm:"row"},flexShrink:0,gap:ce,children:[o(x,{alignSelf:{xs:"start",sm:"center"},as:p,color:"text",css:b(de({" img, svg":{height:hn}},L.print.hidden),"",""),focusRingFor:"keyboard",href:s,children:r}),t==="between"&&o(sn,{dividerPosition:t}),o(x,de(de({alignSelf:{xs:"start",sm:"center"},as:c?p:"span",color:"text",css:b(de({" img, svg":{width:"100%"}},L.print.hidden),"",""),focusRingFor:"keyboard"},c&&{href:c}),{},{children:d}))]}),u(x,{css:t==="after"?P({},y.mediaQuery.min.lg,{marginLeft:"calc(-".concat(a?A(ce):0," - ").concat(y.borderWidth.sm,"px)")}):void 0,gap:ce,children:[t==="after"&&o(sn,{dividerPosition:t}),u(j,{as:p,color:"text",css:b({textDecoration:"none",":hover":L.underline},"",""),focusRingFor:"keyboard",href:s,justifyContent:"center",children:[u(x,{alignItems:"flex-start",gap:.5,children:[o(k,{fontSize:"lg",fontWeight:"bold",children:i}),n&&o(rt,{children:n})]}),l&&o(k,{color:"muted",fontSize:"xs",children:l})]})]})]}):u(x,{alignItems:{xs:"flex-start",md:"center"},as:p,color:"text",css:b({textDecoration:"none","&:hover":L.underline,svg:{display:"block",height:hn,flexShrink:0}},"",""),flexDirection:{xs:"column",md:"row"},focusRingFor:"keyboard",gap:{xs:1,md:0},href:s,paddingY:.5,children:[r,o(sn,{singleLogo:!0}),u(x,{alignItems:"flex-start",flexDirection:"column",justifyContent:"center",maxWidth:y.maxWidth.bodyText,children:[u(x,{alignItems:"flex-start",gap:.5,children:[o(k,{fontSize:"lg",fontWeight:"bold",children:i}),n&&o(rt,{children:n})]}),l&&o(k,{color:"muted",fontSize:"xs",children:l})]})]})}function rt(e){var n=e.children;return o(M,{border:!0,borderWidth:"md",css:b({fontSize:"0.75rem",paddingTop:"2px",paddingBottom:"2px",borderColor:g.foregroundText,borderRadius:"2em"},"",""),fontWeight:"bold",paddingLeft:.5,paddingRight:.5,children:n})}var sn=function(n){var t=n.dividerPosition,r=n.singleLogo;return o(M,{borderLeft:!0,css:b(de({margin:r?"0 1rem":void 0},L.print.hidden),"",""),display:r?{xs:"none",md:"block"}:{xs:"none",sm:t==="between"?"block":void 0,lg:"block"},height:r?hn:void 0})},Ra=["ref"];function ot(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function it(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?ot(Object(t),!0).forEach(function(r){P(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ot(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function Ta(e){var n=e.children,t=e.name,r=e.avatarName,i=e.secondaryText;return u(zo,{popoverOffset:-8,popoverPlacement:"bottom-end",children:[o($a,{avatarName:r,name:t,secondaryText:i}),n]})}var Fa={name:"d3v9zr",styles:"overflow:hidden"},Na={name:"d3v9zr",styles:"overflow:hidden"},za={name:"ozd7xs",styles:"flex-shrink:0"};function $a(e){var n=e.name,t=e.avatarName,r=e.secondaryText,i=$o(),a=i.isMenuOpen,s=_o(),c=s.ref,d=G(s,Ra),l=f.useRef(0),p=Qe("sm");return f.useEffect(function(){l.current=window.innerWidth-document.documentElement.offsetWidth},[]),u(x,it(it({as:Ke,ref:c},d),{},{alignItems:"center",background:a?"shade":void 0,color:"action",css:ie({marginLeft:"auto",maxWidth:"calc(17.625rem - ".concat(l.current,"px)"),overflow:"hidden",svg:{transform:a?"rotate(180deg)":void 0,transition:p.transition},":hover":{backgroundColor:g.backgroundShade,"& > span:last-of-type > span:last-of-type":L.underline,svg:{transform:a?"rotate(180deg) ".concat(p.transform):p.transform}}}),focusRingFor:"keyboard",gap:1,justifyContent:"space-between",minHeight:"5.25rem",padding:1,children:[o(Dr,{children:"Account menu"}),u(x,{alignItems:"center","aria-hidden":!0,as:"span",css:Fa,gap:.5,width:"100%",children:[o(Xr,{name:t??n,size:"md",tone:"action"}),u(x,{as:"span",css:Na,flexDirection:"column",width:"100%",children:[o(k,{color:"action",css:L.truncate,fontSize:"xs",fontWeight:"bold",children:n}),r?o(k,{color:"muted",css:L.truncate,fontSize:"xs",children:r}):null]})]}),o(Er,{css:za,size:"sm",weight:"bold"})]}))}function at(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function cn(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?at(Object(t),!0).forEach(function(r){P(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):at(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var _a={name:"d3v9zr",styles:"overflow:hidden"};function Zr(e){var n=e.name,t=e.avatarName,r=e.secondaryText,i=e.href,a=e.dropdown,s=Dn(),c=f.useRef(0);if(f.useEffect(function(){c.current=window.innerWidth-document.documentElement.offsetWidth},[]),a)return o(Ta,{avatarName:t,name:n,secondaryText:r,children:a});var d=!!i;return u(x,cn(cn({as:"span"},d&&{as:s,href:i,focusRingFor:"keyboard"}),{},{alignItems:"center",css:ie(cn({marginLeft:"auto",maxWidth:"calc(17.625rem - ".concat(c.current,"px)"),textDecoration:"none"},d&&{"&:hover":{"& > span > span":{textDecoration:"underline"}}})),flexShrink:0,gap:.5,minHeight:"5.25rem",textAlign:"right",children:[u(x,{as:"span",css:_a,flexDirection:"column",children:[o(k,{color:"action",css:L.truncate,fontSize:"xs",fontWeight:"bold",children:n}),r?o(k,{color:"muted",css:L.truncate,fontSize:"xs",children:r}):null]}),o(Xr,{"aria-hidden":!0,name:n,size:"md",tone:"action"})]}))}function st(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function Wa(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?st(Object(t),!0).forEach(function(r){P(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):st(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function qa(e){var n=e.accountDetails,t=me(),r=t.focusMode,i=t.openMobileMenu;return u(x,{alignItems:"center",background:"body",display:P({xs:"flex"},$,"none"),flexWrap:"wrap",justifyContent:r?"flex-end":"space-between",paddingLeft:.75,paddingRight:n!=null&&n.dropdown?.75:y.containerPadding,children:[r?null:o(Ga,{onClick:i}),n?o(Zr,Wa({},n)):null]})}function Ga(e){var n=e.onClick,t=me(),r=t.isMobileMenuOpen,i=Qe();return u(x,{alignItems:"center","aria-expanded":r,"aria-haspopup":"dialog",as:Ke,color:"action",css:b({svg:{transition:i.transition},"&:hover":{backgroundColor:g.backgroundShade,textDecoration:"underline",svg:{transform:i.transform}}},"",""),flexDirection:"column",focusRingFor:"keyboard",fontSize:"xs",gap:.5,justifyContent:"center",minHeight:"5.25rem",onClick:n,paddingX:1,children:[o(Ko,{"aria-hidden":!0}),o("span",{children:"Menu"})]})}function ct(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function Ha(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?ct(Object(t),!0).forEach(function(r){P(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ct(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function Ua(e){var n=e.accountDetails,t=e.background,r=t===void 0?"bodyAlt":t,i=e.badgeLabel,a=e.borderColor,s=a===void 0?"accent":a,c=e.dividerPosition,d=c===void 0?"after":c,l=e.heading,p=e.href,h=e.id,v=e.logo,w=e.palette,m=w===void 0?"dark":w,O=e.secondHref,C=e.secondLogo,S=e.subLine,I=e.statusIndicator;return u(x,{as:"header",borderBottom:!0,borderBottomWidth:"xxl",borderColor:s,css:b(P({},y.mediaQuery.min[$],{gridColumnStart:1,gridColumnEnd:3}),"",""),flexDirection:"column",id:h,palette:m,children:[u(x,{alignItems:"center",background:r,gap:1,justifyContent:"space-between",paddingX:y.containerPadding,paddingY:.5,width:"100%",children:[o(Ea,{badgeLabel:i,dividerPosition:d,hasAccountDetails:!!n,heading:l,href:p,logo:v,secondHref:O,secondLogo:C,subLine:S}),u(x,{alignItems:"center",alignSelf:P({xs:"start"},$,"center"),gap:1,paddingTop:P({xs:.5},$,0),children:[I||null,o(M,{display:P({xs:"none"},$,"flex"),children:n?o(Zr,Ha({},n)):null})]})]}),o(qa,{accountDetails:n})]})}var Ya=["endElement","icon","isActive","items","label","level"];function lt(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function R(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?lt(Object(t),!0).forEach(function(r){P(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):lt(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var Ka=function e(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return function(r){var i,a,s="href"in r&&r.href===n,c=s||Bn(r.items,n);return R(R({},r),{},{isActive:c,items:c||(i=r.items)!==null&&i!==void 0&&i.length?r==null||(a=r.items)===null||a===void 0?void 0:a.map(e(n,t+1)):void 0,level:t+1})}},dt=function(n){var t=n.activePath,r=n.background,i=n.items,a=n.subLevelVisible;return o(j,{"aria-label":"main",as:"nav",paddingBottom:1.5,children:o(j,{as:"ul",children:i.map(function(s,c){var d,l,p=c===0,h=(Array.isArray(s)?s:s.items).map(Ka(t)),v=Array.isArray(s)?!1:!!(!((d=s.options)===null||d===void 0)&&d.disableGroupPadding),w=i[c-1],m=w?Array.isArray(w)?!1:!!(!((l=w.options)===null||l===void 0)&&l.disableGroupPadding):!1;return u(f.Fragment,{children:[p?null:o(Xa,{disablePaddingBottom:v,disablePaddingTop:m}),h.map(function(O,C){var S=Bn(O.items,t),I=a==="always"||S;return o(Jr,{activePath:t,background:r,isActiveGroup:S,isOpen:I,item:O,subLevelVisible:a},C)})]},c)})})})},Qa={name:"1ff36h2",styles:"flex-grow:1"};function Jr(e){var n=e.activePath,t=e.background,r=e.isActiveGroup,i=e.isOpen,a=e.item,s=e.subLevelVisible,c=Dn(),d=a.endElement,l=a.icon,p=a.isActive,h=a.items,v=a.label,w=a.level,m=G(a,Ya),O=me(),C=O.closeMobileMenu,S=(h==null?void 0:h.length)||0,I=S>0&&s!=="always";if("href"in a){var B,E,W,U=a.href===n;return u(ln,{background:t,hasEndElement:!!d,isActive:r,isCurrentPage:U,isOpen:i,level:a.level,onClick:C,children:[u(c,R(R({"aria-current":U?"page":void 0,"aria-label":I?"".concat(v).concat(p?", has expanded sub links":", has sub links"):void 0},m),{},{children:[l&&w===1&&o(l,{color:"inherit"}),w===2&&o("span",{"aria-hidden":!0,children:"–"}),o("span",{css:Qa,children:v}),d,I&&o(Qo,{css:b({transform:p?"rotate(90deg)":void 0},"",""),size:"md"})]})),!!(!((B=a.items)===null||B===void 0)&&B.length)&&(i||U)&&o(j,{as:"ul",children:(E=a.items)===null||E===void 0||(W=E.map)===null||W===void 0?void 0:W.call(E,function(ne){var N;return o(Jr,{activePath:n,background:t,isActiveGroup:!!p,isOpen:i,item:ne,subLevelVisible:s},(N=ne.label)===null||N===void 0?void 0:N.toString())})})]})}return"onClick"in a?o(ln,{background:t,hasEndElement:!!d,isActive:!1,isCurrentPage:!1,isOpen:!1,onClick:C,children:u(Ke,R(R({},m),{},{children:[l?o(l,{color:"inherit"}):null,o("span",{children:v}),d]}))}):o(ln,{background:t,hasEndElement:!1,isActive:!1,isCurrentPage:!1,isOpen:!1,children:o(j,{as:"span",gap:.25,children:v})})}function ln(e){var n=e.background,t=e.children,r=e.hasEndElement,i=e.isCurrentPage,a=e.isActive,s=e.isOpen,c=e.level,d=e.onClick;return o("li",{css:b({"> a, > button, > span":{width:"100%",boxSizing:"border-box",wordBreak:"break-word",paddingTop:A(1),paddingBottom:A(1),paddingLeft:A(c===2?3:1.5),paddingRight:A(1),"& > svg":{flexShrink:0}},"> a, > button":R(R(R(R({position:"relative",display:"flex",alignItems:"center",gap:A(.75),color:a&&c!==2||i?g.foregroundText:g.foregroundAction},(a||i||s)&&{fontWeight:i?y.fontWeight.bold:y.fontWeight.normal,background:i?g.selectedMuted:void 0,"&::before":R(R(R({content:"''",position:"absolute",top:0,left:0,bottom:0,borderLeftStyle:"solid",borderLeftWidth:y.borderWidth.xl},i&&{borderLeftColor:g.selected}),!i&&a&&{borderLeftColor:g.borderMuted}),!i&&!a&&s&&{borderLeft:"none"})}),r&&{"& > :last-child":{marginLeft:"auto"}}),{},{"&:hover":P({background:g[n==="body"?"backgroundShade":"backgroundShadeAlt"],color:g.foregroundText},"& > span:nth-of-type(".concat(c,")"),L.underline)},Ao),{},{":focus-visible":{zIndex:y.zIndex.elevated,outlineOffset:"-".concat(L.outline.outlineWidth),"&::before":{zIndex:-1}}}),"> span":{color:g.foregroundText},"> a":{textDecoration:"none"}},"",""),onClick:d,children:t})}function Xa(e){var n=e.disablePaddingTop,t=e.disablePaddingBottom;return o(M,{"aria-hidden":!0,as:"li",paddingBottom:t?0:1,paddingTop:n?0:1,children:o("hr",{css:b({boxSizing:"content-box",height:0,margin:0,overflow:"visible",border:"none",borderTopWidth:y.borderWidth.sm,borderTopStyle:"solid",borderColor:g.borderMuted,width:"100%"},"","")})})}function Bn(e,n){return e!=null&&e.length&&n?e.some(function(t){return"href"in t&&t.href===n||"items"in t&&Bn(t.items,n)}):!1}var Va={name:"qvn77x",styles:"inset:0;overflow-y:auto;position:fixed"};function Za(e){var n=e.children,t=e.palette,r=me(),i=r.isMobileMenuOpen,a=r.closeMobileMenu,s=$r(),c=f.useState(!0),d=c[0],l=c[1],p=Yr();f.useEffect(function(){i&&l(!1)},[i]),f.useEffect(function(){var m=function(C){C.code==="Escape"&&(C.preventDefault(),C.stopPropagation(),a())};return window.addEventListener("keydown",m),function(){return window.removeEventListener("keydown",m)}},[a]);var h=Sn(p?i:!1),v=h.modalContainerRef;if(!p||!In())return null;var w=i?!0:!d;return An.createPortal(u(Mr,{children:[i&&o(Ja,{}),u("div",{ref:v,children:[o("div",{css:b({pointerEvents:"none",position:"absolute",opacity:i?1:0,transition:i?"none":"opacity ".concat(s?"1ms":"150ms")},"",""),"data-app-layout-sidebar":"transitioner",onTransitionEnd:function(){l(!0)}}),o(es,{isOpen:i,onClick:a,prefersReducedMotion:s}),o(M,{css:b({bottom:0,left:0,position:"fixed",top:0,transform:"translateX(".concat(i?"0":"-100%",")"),transition:"transform ".concat(s?"1ms":"150ms"," ease"),zIndex:y.zIndex.dialog},"",""),display:P({},$,"none"),width:jn,children:w&&o(Ln,{returnFocus:!0,children:u(M,{"aria-label":"Menu","aria-modal":!0,background:"shade",css:Va,display:P({},$,"none"),palette:t,role:"dialog",children:[o(ns,{onClick:a}),n]})})})]})]}),document.body)}function Ja(){return o(Cn,{styles:b(P({body:{overflow:"hidden"}},y.mediaQuery.min[$],{body:{overflow:"unset"}}),"","")})}function es(e){var n=e.isOpen,t=e.onClick,r=e.prefersReducedMotion;return o("div",{css:b(P({backgroundColor:g.overlay,display:"block",inset:0,opacity:n?1:0,pointerEvents:n?"all":"none",position:"fixed",transition:"opacity ".concat(r?"1ms":"150ms"," ease"),zIndex:y.zIndex.overlay},y.mediaQuery.min[$],{display:"none"}),"",""),onClick:t})}function ns(e){var n=e.onClick,t=Qe();return o(x,{alignItems:"center",borderBottom:!0,borderColor:"muted",flexShrink:0,paddingLeft:1,children:u(x,{alignItems:"center",as:Ke,color:"action",css:b({svg:{transition:t.transition},":focus":{outlineOffset:"-".concat(L.outline.outlineWidth)},":hover svg":{transform:t.transform}},"",""),flexDirection:"column",focusRingFor:"keyboard",fontSize:"xs",gap:.5,onClick:n,padding:1,children:[o(fe,{}),o("span",{"aria-hidden":!0,children:"Close"}),o(Dr,{children:"Close menu"})]})})}function ut(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function ye(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?ut(Object(t),!0).forEach(function(r){P(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ut(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function pt(e){var n=e.activePath,t=e.background,r=t===void 0?"bodyAlt":t,i=e.items,a=e.palette,s=e.subLevelVisible,c=s===void 0?"whenActive":s,d=me(),l=d.focusMode,p=Aa(i,n),h={activePath:p,items:i,subLevelVisible:c};return u(f.Fragment,{children:[o(j,{background:r,borderColor:"muted",borderRight:!0,css:b(P({display:"none",width:jn},y.mediaQuery.min[$],{display:l?"none":"flex"}),"",""),flexGrow:1,gap:1,palette:a,children:o(dt,ye(ye({},h),{},{background:r}))}),o(Za,{palette:a,children:o(dt,ye(ye({},h),{},{background:"bodyAlt"}))})]})}var ts={name:"ovk77c",styles:"min-width:0"};function rs(e){var n=e.children;return o(x,{css:ts,flexDirection:"column",children:n})}var os={name:"xdvdnl",styles:"margin-top:auto"};function is(e){var n=e.background,t=n===void 0?"body":n,r=e.children,i=e.id,a=e.maxWidth,s=e.palette;return o(M,{as:"footer",background:t,css:os,id:i,palette:s,children:o(Ro,{maxWidth:a,children:o(j,{borderColor:"muted",borderTop:!0,borderTopWidth:"xl",gap:1.5,paddingY:3,width:"100%",children:r})})})}function as(){return o("hr",{"aria-hidden":!0,css:b({boxSizing:"content-box",height:0,margin:0,overflow:"visible",border:"none",borderTopWidth:1,borderTopStyle:"solid",borderColor:g.borderMuted,width:"100%"},"","")})}const eo=(e,n)=>{const{domain:t}=n;return e.kind==="standalone"?e.url:typeof t=="function"?t(e):`https://${e.subdomain}.${t}${e.path}`},ss=e=>n=>{const t={};return Object.entries(e).forEach(([r,i])=>{t[r]=eo(i,{domain:n})}),t},gn=e=>n=>({kind:"scoped",subdomain:e,path:n}),cs=e=>({kind:"standalone",url:e}),ls=(()=>{const e=gn("exports"),n=gn("services"),t=cs,r={account:n("/account"),profile:n("/account/profile"),people:n("/account/exports/manage-people"),dashboard:n("/account/exports/dashboard"),exportsHub:n("/account/exports"),importsHub:n("/account/imports"),about:n("/about"),contactUs:n("/about/contact-us"),help:n("/help"),privacy:n("/privacy"),accessibility:t("https://www.agriculture.gov.au/about/commitment/accessibility"),disclaimer:t("https://www.agriculture.gov.au/about/disclaimer"),establishments:e("/establishments"),intelligence:e("/intelligence"),compliance:e("/compliance"),quotas:e("/quota"),exportSystems:e("/export-systems"),licences:e("/licences"),invoices:e("/inexs")};return ss(r)})(),ds=No(u(f.Fragment,{children:[o("path",{d:"M4 2V22L6 21L8 22L10 21L12 22L14 21L16 22L18 21L20 22V2L18 3L16 2L14 3L12 2L10 3L8 2L6 3L4 2Z"}),o("path",{d:"M16 8H10C9.46957 8 8.96086 8.21071 8.58579 8.58579C8.21071 8.96086 8 9.46957 8 10C8 10.5304 8.21071 11.0391 8.58579 11.4142C8.96086 11.7893 9.46957 12 10 12H14C14.5304 12 15.0391 12.2107 15.4142 12.5858C15.7893 12.9609 16 13.4696 16 14C16 14.5304 15.7893 15.0391 15.4142 15.4142C15.0391 15.7893 14.5304 16 14 16H8"}),o("path",{d:"M12 17.5V6.5"})]}),"PaymentIcon"),us=e=>({dashboard:{label:"Dashboard",icon:Nr,href:e.dashboard},people:{label:"People",icon:ni,href:e.people},establishments:{label:"Establishments",icon:Mn,href:e.establishments},intelligence:{label:"Data and Insights",icon:ei,href:e.intelligence},compliance:{label:"Compliance",icon:Jo,href:e.compliance},quotas:{label:"Quotas",icon:Fr,href:e.quotas},exportSystems:{label:"Export systems",icon:Zo,href:e.exportSystems},licences:{label:"Licences",icon:Vo,href:e.licences},invoices:{label:"Invoices and payments",icon:ds,href:e.invoices}}),no=e=>{var t,r,i,a,s,c;const n=us(e.routes);return[n.dashboard,...(t=e==null?void 0:e.features)!=null&&t.people?[n.people]:[],n.establishments,n.intelligence,n.compliance,...(r=e==null?void 0:e.features)!=null&&r.quotas?[n.quotas]:[],...((i=e==null?void 0:e.features)==null?void 0:i.exportSystems)??((a=e==null?void 0:e.features)==null?void 0:a.exportDocumentation)?[n.exportSystems]:[],...(s=e==null?void 0:e.features)!=null&&s.licences?[n.licences]:[],...(c=e==null?void 0:e.features)!=null&&c.invoices?[n.invoices]:[]]},ps=e=>[{href:e.about,label:"About"},{href:e.contactUs,label:"Contact us"},{href:e.help,label:"Help"},{href:e.accessibility,rel:"external",label:"Accessibility"},{href:e.disclaimer,rel:"external",label:"Disclaimer"},{href:e.privacy,label:"Privacy"}],fs=({onSignOutClick:e,features:n,routes:t})=>[no({features:n,routes:t}),[{label:u(x,{as:"span",alignItems:"center",gap:.5,children:["Help",o(Fo,{}),o(Xo,{weight:"regular",size:"sm"})]}),icon:Rr,href:t.help,target:"_blank",rel:"noopener"}],[{label:"Sign out",onClick:e,icon:Tr}]],hs=(e,n)=>{var i;if(!n)return;let t,r;for(const a of e){if(a.href===n){t=a;break}n.startsWith(a.href)&&a.href.length>(((i=r==null?void 0:r.href)==null?void 0:i.length)??0)&&(r=a)}return t||r},gs=e=>n=>n===!0||n==e,to=(e,n)=>t=>gs(e)(t)?n:{},ms=to("header",{palette:"light",borderColor:"selected"}),ft=to("sidebar",{background:"body"}),vs=e=>{const n=a=>{var c;const s=((c=e==null?void 0:e.linkedBusinesses)==null?void 0:c.flatMap(d=>{var l;return ro(d)===a?{...d,selected:((l=e==null?void 0:e.selectedBusiness)==null?void 0:l.partyId)===d.partyId,setSelected:()=>e.setSelectedBusiness(d)}:[]}))??[];return{category:a,businesses:s}},r=["export","import"].map(n),i=r.reduce((a,s)=>a+s.businesses.length,0);return{options:r,exists:i>0}},bs=new Set(["MANAGER","PRINCIPAL_AUTHORITY_OWNER","USER"]),ys=e=>e!=null&&e.roleName?bs.has(e.roleName):!1,ro=e=>(e==null?void 0:e.roleGroupName)==="BIOSECURITY"?"import":"export",Os={export:"Export",import:"Import"},oo=e=>Os[e],Ps=e=>e.businesses.length===0?null:u(Ho,{label:`${oo(e.category)} businesses`,children:[e.businesses.slice(0,3).map(n=>o(Go,{checked:n.selected??!1,secondaryText:n.formattedPartyExternalId,onClick:e.onSelectBusiness(n),children:n.partyDisplayName},n.partyId)),e.businesses.length>3?u(le,{href:e.category==="import"?e.routes.importsHub:e.routes.exportsHub,endElement:o(zr,{}),children:["View all ",e.category," businesses"]}):null]}),xs=e=>{const n=i=>()=>{var a;return(a=i==null?void 0:i.setSelected)==null?void 0:a.call(i)},{options:t,exists:r}=vs(e.businessDetails);return u(qo,{palette:"light",children:[t.map(i=>o(Ps,{businesses:i.businesses,onSelectBusiness:n,category:i.category,routes:e.routes},i.category)),r&&o(Nn,{}),o(le,{href:e.routes.account,icon:Nr,children:"Home"}),o(le,{href:e.routes.exportsHub,icon:ri,children:"Export"}),o(le,{href:e.routes.importsHub,icon:oi,children:"Import and biosecurity"}),o(le,{href:e.routes.profile,icon:ii,children:"Profile and settings"}),o(Nn,{}),o(Wo,{onClick:e.onSignOutClick,icon:Tr,children:"Sign out"})]})},ws=e=>{var n;return((n=e==null?void 0:e.details)==null?void 0:n.selectedBusiness)===void 0?[]:[{options:{disableGroupPadding:!0},items:[{label:"Back to export",icon:ti,href:e.routes.exportsHub}]},{options:{disableGroupPadding:!0},items:[{label:u(f.Fragment,{children:[o(k,{fontWeight:"bold",fontSize:"xs",children:e.details.selectedBusiness.partyDisplayName}),o(k,{color:"muted",fontSize:"xs",children:e.details.selectedBusiness.formattedPartyExternalId})]})}]}]},Cs=e=>{var n;return e.selectedBusiness?{...e==null?void 0:e.features,people:((n=e==null?void 0:e.features)==null?void 0:n.people)??ys(e.selectedBusiness)}:e.features};var ks=["children"],Ss=["as","children","direction","className"];function ht(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function qe(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?ht(Object(t),!0).forEach(function(r){P(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ht(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var io=function(n){var t=n.children,r=G(n,ks);return o(Is,qe(qe({as:We},r),{},{children:t}))},Is=function(n){var t=n.as,r=n.children,i=n.direction,a=n.className,s=G(n,Ss),c=Ls[i],d=i==="left",l=Qe("sm");return u(x,qe(qe({alignItems:"center",as:t,className:a,css:b({alignSelf:"flex-start",svg:{transition:l.transition},":hover svg":{transform:l.transform}},"",""),focusRingFor:"keyboard",fontFamily:"body",fontWeight:"normal",gap:.5,inline:!0,link:!0},s),{},{children:[d?o(c,{size:"sm"}):null,r,d?null:o(c,{size:"sm"})]}))},Ls={up:ci,right:zr,down:si,left:ai};function Ms(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.focusOnMount,t=e.focusOnUpdate,r=e.forwardedRef,i=f.useRef(null),a=r||i;return f.useEffect(function(){var s,c;!t&&!n||!("current"in a)||Array.isArray(t)&&t.filter(Boolean).length===0||a==null||(s=a.current)===null||s===void 0||(c=s.focus)===null||c===void 0||c.call(s)},[t]),a}var As=function(n){var t=n.as,r=t===void 0?"h2":t,i=n.children,a=n.hasDismissButton,s=n.hasCloseButton;return o(k,{as:r,css:ie(P({marginRight:s||a?"2.5rem":void 0},y.mediaQuery.min.sm,{marginRight:"0"})),fontSize:"lg",fontWeight:"bold",lineHeight:"heading",children:i})},Ds=function(n){var t,r=n.onClick;return o(q,{"aria-label":"Close",css:ie((t={position:"absolute",top:"1.5rem",right:"1.5rem",flexShrink:0},P(t,y.mediaQuery.min.sm,{position:"relative",top:"unset",right:"unset"}),P(t,"& > span:first-of-type",P({display:"none"},y.mediaQuery.min.sm,{display:"block"})),t)),iconAfter:fe,onClick:r,variant:"text",children:"Close"})};function gt(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function js(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?gt(Object(t),!0).forEach(function(r){P(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):gt(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var Bs=f.forwardRef(function(n,t){var r=n.id,i=n.focusOnMount,a=n.focusOnUpdate,s=n.role,c=n.children,d=n.onClose,l=n.onDismiss,p=n.title,h=n.tone,v=n.tabIndex,w=Ms({focusOnMount:i,focusOnUpdate:a,forwardedRef:t}),m=ea(d,l),O=Es[h],C=O.fg,S=O.bg,I=O.icon;return u(x,{css:b({backgroundColor:S,position:"relative"},"",""),focusRingFor:"all",highContrastOutline:!0,id:r,ref:w,role:s,rounded:!0,tabIndex:v??(i||a?-1:void 0),children:[o(x,{alignItems:"center",css:b(js({borderTopLeftRadius:y.borderRadius,borderBottomLeftRadius:y.borderRadius,backgroundColor:C,color:g.backgroundBody},Do.exactColor),"",""),padding:.5,children:I}),u(x,{alignItems:"flex-start",css:b(P({marginRight:m&&!p?"3rem":void 0},y.mediaQuery.min.sm,{marginRight:"0"}),"",""),flexGrow:1,gap:1,padding:1.5,children:[u(x,{alignItems:"flex-start",flexDirection:"column",flexGrow:1,gap:1,children:[p?f.isValidElement(p)?p:o(As,{hasCloseButton:!!m,children:p}):null,c]}),m?o(Ds,{onClick:m}):null]})]})}),Es={success:{fg:g.systemSuccess,bg:g.systemSuccessMuted,icon:o(ui,{"aria-hidden":"false","aria-label":"Success"})},error:{fg:g.systemError,bg:g.systemErrorMuted,icon:o(Br,{"aria-hidden":"false","aria-label":"Error"})},info:{fg:g.systemInfo,bg:g.systemInfoMuted,icon:o(di,{"aria-hidden":"false","aria-label":"Information"})},warning:{fg:g.systemWarning,bg:g.systemWarningMuted,icon:o(li,{"aria-hidden":"false","aria-label":"Warning"})}};const Rs=["IP1","IP2","IP3","IP4"],ao=Array.from(Rs),Ts=e=>{const n=[];return e.forEach(t=>n.unshift(t)),n},mn=new Set(ao),mt=new Set(Ts(ao)),Fs={descriptor:"Unknown"},Ns={IP1:{level:"IP1",descriptor:"Basic"},IP2:{level:"IP2",descriptor:"Standard"},IP3:{level:"IP3",descriptor:"Strong"},IP4:{level:"IP4",descriptor:"Strong"}},zs=e=>mn.has(e),Ge=(e,n)=>{const t=e&&zs(e)?Ns[e]:Fs;return n!=null&&n.short||t.level===void 0?t.descriptor:`${t.descriptor} (${t.level})`},so=(e,n)=>Array.from(e).filter(t=>n.has(t)),co=(e,n)=>Array.from(e).filter(t=>!n.has(t)),ue=e=>{const n=new Set(e??[]);return[...so(mt,n),...co(n,mt)][0]},lo=e=>{const n=new Set(e??[]);return[...so(mn,n),...co(n,mn)][0]},vt=e=>e===void 0?[]:Array.isArray(e)?e:[e],$s=(e,n)=>{if(n===void 0||e.length===0)return!0;const t=new Set(n);return e.some(r=>t.has(r))},bt=e=>((e==null?void 0:e.trim())??"")==="",uo=()=>o(te,{children:u(mi,{title:"Need more help?",children:[u(k,{children:["Email"," ",o(We,{href:"mailto:exportservice@aff.gov.au",children:"exportservice@aff.gov.au"})]}),u(k,{children:["Call ",o(We,{href:"tel:1800571125",children:"1800 571 125"}),", Monday to Friday, 9 am to 5 pm AEST"]})]})}),_s=e=>o(_,{children:u(j,{gap:3,children:[o(te,{children:o(io,{href:e.routes.dashboard,direction:"left",children:"Back to Dashboard"})}),u(H,{children:[o("h1",{children:"Single names in the Export Service"}),o("p",{children:"If you are legally known by a single name, you can use it to access an Export Service account. Other services we offer may not accept a single name and you will need to use a given and family name."}),o("p",{children:"Contact support if you need more help."})]}),o(jr,{}),o(uo,{})]})}),Ws=e=>{const n=Ge(e.providedProofingLevel),t=Ge(e.requiredProofingLevel,{short:!0});return o(_,{children:u(j,{gap:3,children:[o(te,{children:o(io,{href:e.routes.dashboard,direction:"left",children:"Back"})}),u(H,{children:[o("h1",{children:e.activeApp??"Use a higher identity strength"}),o(M,{className:jo,children:u(Bs,{tone:"info",title:"You can't access this feature",children:["Sign in with myID and use a ‘",t,"’ identity strength or higher to access this feature."]})}),o("h2",{children:"Review your profile and settings"}),u("p",{children:["Your current identity strength is ",n,". To access this feature you must add myID to your account from your"," ",o(We,{href:e.routes.profile,children:"Profile and settings"}),", then sign in."]})]}),o(jr,{}),o(uo,{})]})})},po={MissingName:_s,ProofMissing:Ws},qs=({claims:e,errorComponents:n,requiredProofingLevel:t,authDetails:r,activeApp:i,children:a,routes:s})=>{const c=n.MissingGivenName??n.MissingName,d=n.MissingFamilyName??n.MissingName,l=n.ProofMissing,p=vt(t),h=vt(r==null?void 0:r.proofingLevel);if(!$s(p,h)){const v=lo(p),w=ue(h);return o(l,{requiredProofingLevel:v,providedProofingLevel:w,activeApp:i,routes:s})}return e===void 0?o(f.Fragment,{children:a}):bt(e==null?void 0:e.given_name)?o(c,{routes:s,children:a}):bt(e==null?void 0:e.family_name)?o(d,{routes:s,children:a}):o(f.Fragment,{children:a})},Gs=Object.values,Hs={IP1:{AL1:"urn:id.gov.au:tdif:acr:ip1:cl1",AL2:"urn:id.gov.au:tdif:acr:ip1:cl2",AL3:"urn:id.gov.au:tdif:acr:ip1:cl3",PlusAL1:"urn:id.gov.au:tdif:acr:ip1p:cl1",PlusAL2:"urn:id.gov.au:tdif:acr:ip1p:cl2",PlusAL3:"urn:id.gov.au:tdif:acr:ip1p:cl3"},IP2:{AL2:"urn:id.gov.au:tdif:acr:ip2:cl2",AL3:"urn:id.gov.au:tdif:acr:ip2:cl3",PlusAL2:"urn:id.gov.au:tdif:acr:ip2p:cl2",PlusAL3:"urn:id.gov.au:tdif:acr:ip2p:cl3"},IP3:{AL2:"urn:id.gov.au:tdif:acr:ip3:cl2",AL3:"urn:id.gov.au:tdif:acr:ip3:cl3"},IP4:{AL3:"urn:id.gov.au:tdif:acr:ip4:cl3"}},Us=["IP1","IP2","IP3","IP4"],Ys=Object.fromEntries(Us.map((e,n,t)=>[e,t.slice(0,n)])),Oe=e=>Object.fromEntries(Gs(Hs[e]).map(n=>[n,e])),vn={...Oe("IP1"),...Oe("IP2"),...Oe("IP3"),...Oe("IP4")},Ks=e=>e in vn,Qs=e=>e===void 0?[]:Array.isArray(e)?e:[e],_e=(e,n)=>{const r=Qs(e.AARM_acr).flatMap(i=>Ks(i)?[vn[i],...Ys[vn[i]]]:[i]);return Array.from(new Set(r))},Xs=e=>(e==null?void 0:e.credentialType)==="myGovID"?"myID":(e==null?void 0:e.credentialType)==="B2CLocalUser"?"B2CLocalUser":void 0,Vs=(e,n)=>e?{provider:Xs(e),proofingLevel:_e(e)}:void 0,fo=f.createContext(void 0),ho=()=>{var e;return(e=f.useContext(fo))==null?void 0:e.onSignOutClick};function V({activePath:e,children:n,focusMode:t=!1,handleSignOut:r,mainContentId:i="main-content",userName:a,businessDetails:s,claims:c,errorComponents:d,features:l,requiredProofingLevel:p,authDetails:h,sidebarItems:v,sidebarSubLevelVisible:w,headerProps:m,internal:O,domain:C,subdomain:S}){var Tn;const I=f.useMemo(()=>new Date().getFullYear(),[]),B=C??"agriculture.gov.au",E=S??"exports",W=f.useContext(fi),[U,ne,N]=fn(!1),[en,se,Po]=fn(!1),ve=ne,xo=r,be=Cs({features:l,selectedBusiness:s==null?void 0:s.selectedBusiness}),wo=gn(E)(e),nn=eo(wo,{domain:B}),K=ls(B),Co=f.useMemo(()=>no({features:be,routes:K}),[be]),ko=ps(K),So=f.useMemo(()=>[...ws({details:s,routes:K}),...fs({onSignOutClick:ve,features:be,routes:K})],[ve,s,be]),Io=Vs(c),Lo=h??Io,tn=hs(Co,nn);return o(Da,{focusMode:t,children:o(fo.Provider,{value:{onSignOutClick:ve},children:u(te,{children:[o(Ua,{href:(m==null?void 0:m.href)??"/account",heading:(m==null?void 0:m.heading)??"Export Service",subLine:(m==null?void 0:m.subLine)??"Supporting Australian agricultural exports",badgeLabel:(m==null?void 0:m.badgeLabel)??"Beta",logo:o(hi,{}),accountDetails:a?{href:K.account,name:((Tn=s==null?void 0:s.selectedBusiness)==null?void 0:Tn.partyDisplayName)??a,avatarName:a,secondaryText:(s==null?void 0:s.selectedBusiness)===void 0?void 0:oo(ro(s.selectedBusiness)),dropdown:s?o(xs,{routes:K,businessDetails:s,onSignOutClick:ve}):void 0}:void 0,...ms(O)}),v?o(te,{...W,children:o(pt,{activePath:nn,items:v,subLevelVisible:w,...ft(O)})}):o(pt,{activePath:nn,items:So,...ft(O)}),u(rs,{children:[o(te,{...W,children:o("main",{id:i,tabIndex:-1,css:{"&:focus":{outline:"none"}},children:o(qs,{claims:c,authDetails:Lo,requiredProofingLevel:p,errorComponents:{...po,...d},activeApp:tn==null?void 0:tn.label,routes:K,children:n})})}),u(is,{children:[o("nav",{"aria-label":"footer",children:o(gi,{links:ko,horizontal:!0})}),o(as,{}),o(k,{fontSize:"xs",maxWidth:y.maxWidth.bodyText,children:"We acknowledge the traditional owners of country throughout Australia and recognise their continuing connection to land, waters and culture. We pay our respects to their Elders past, present and emerging."}),u(k,{fontSize:"xs",maxWidth:y.maxWidth.bodyText,children:["© ",I," Department of Agriculture, Fisheries and Forestry"]})]})]}),o(Qr,{isOpen:U,onClose:N,title:"Do you want to sign out?",actions:u(kn,{children:[o(q,{onClick:async()=>{se(),await xo(),Po(),N()},loading:en,disabled:en,children:"Sign out"}),o(q,{variant:"secondary",onClick:N,children:"Cancel"})]}),children:o(k,{as:"p",children:"This will end your current session with the Export Service."})})]})})})}var go=Symbol.for("immer-nothing"),yt=Symbol.for("immer-draftable"),T=Symbol.for("immer-state");function z(e,...n){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var re=Object.getPrototypeOf;function oe(e){return!!e&&!!e[T]}function Z(e){var n;return e?mo(e)||Array.isArray(e)||!!e[yt]||!!((n=e.constructor)!=null&&n[yt])||Ve(e)||Ze(e):!1}var Zs=Object.prototype.constructor.toString();function mo(e){if(!e||typeof e!="object")return!1;const n=re(e);if(n===null)return!0;const t=Object.hasOwnProperty.call(n,"constructor")&&n.constructor;return t===Object?!0:typeof t=="function"&&Function.toString.call(t)===Zs}function He(e,n){Xe(e)===0?Reflect.ownKeys(e).forEach(t=>{n(t,e[t],e)}):e.forEach((t,r)=>n(r,t,e))}function Xe(e){const n=e[T];return n?n.type_:Array.isArray(e)?1:Ve(e)?2:Ze(e)?3:0}function bn(e,n){return Xe(e)===2?e.has(n):Object.prototype.hasOwnProperty.call(e,n)}function vo(e,n,t){const r=Xe(e);r===2?e.set(n,t):r===3?e.add(t):e[n]=t}function Js(e,n){return e===n?e!==0||1/e===1/n:e!==e&&n!==n}function Ve(e){return e instanceof Map}function Ze(e){return e instanceof Set}function Q(e){return e.copy_||e.base_}function yn(e,n){if(Ve(e))return new Map(e);if(Ze(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);const t=mo(e);if(n===!0||n==="class_only"&&!t){const r=Object.getOwnPropertyDescriptors(e);delete r[T];let i=Reflect.ownKeys(r);for(let a=0;a<i.length;a++){const s=i[a],c=r[s];c.writable===!1&&(c.writable=!0,c.configurable=!0),(c.get||c.set)&&(r[s]={configurable:!0,writable:!0,enumerable:c.enumerable,value:e[s]})}return Object.create(re(e),r)}else{const r=re(e);if(r!==null&&t)return{...e};const i=Object.create(r);return Object.assign(i,e)}}function En(e,n=!1){return Je(e)||oe(e)||!Z(e)||(Xe(e)>1&&(e.set=e.add=e.clear=e.delete=ec),Object.freeze(e),n&&Object.entries(e).forEach(([t,r])=>En(r,!0))),e}function ec(){z(2)}function Je(e){return Object.isFrozen(e)}var nc={};function J(e){const n=nc[e];return n||z(0,e),n}var he;function bo(){return he}function tc(e,n){return{drafts_:[],parent_:e,immer_:n,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function Ot(e,n){n&&(J("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=n)}function On(e){Pn(e),e.drafts_.forEach(rc),e.drafts_=null}function Pn(e){e===he&&(he=e.parent_)}function Pt(e){return he=tc(he,e)}function rc(e){const n=e[T];n.type_===0||n.type_===1?n.revoke_():n.revoked_=!0}function xt(e,n){n.unfinalizedDrafts_=n.drafts_.length;const t=n.drafts_[0];return e!==void 0&&e!==t?(t[T].modified_&&(On(n),z(4)),Z(e)&&(e=Ue(n,e),n.parent_||Ye(n,e)),n.patches_&&J("Patches").generateReplacementPatches_(t[T].base_,e,n.patches_,n.inversePatches_)):e=Ue(n,t,[]),On(n),n.patches_&&n.patchListener_(n.patches_,n.inversePatches_),e!==go?e:void 0}function Ue(e,n,t){if(Je(n))return n;const r=n[T];if(!r)return He(n,(i,a)=>wt(e,r,n,i,a,t)),n;if(r.scope_!==e)return n;if(!r.modified_)return Ye(e,r.base_,!0),r.base_;if(!r.finalized_){r.finalized_=!0,r.scope_.unfinalizedDrafts_--;const i=r.copy_;let a=i,s=!1;r.type_===3&&(a=new Set(i),i.clear(),s=!0),He(a,(c,d)=>wt(e,r,i,c,d,t,s)),Ye(e,i,!1),t&&e.patches_&&J("Patches").generatePatches_(r,t,e.patches_,e.inversePatches_)}return r.copy_}function wt(e,n,t,r,i,a,s){if(oe(i)){const c=a&&n&&n.type_!==3&&!bn(n.assigned_,r)?a.concat(r):void 0,d=Ue(e,i,c);if(vo(t,r,d),oe(d))e.canAutoFreeze_=!1;else return}else s&&t.add(i);if(Z(i)&&!Je(i)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;Ue(e,i),(!n||!n.scope_.parent_)&&typeof r!="symbol"&&Object.prototype.propertyIsEnumerable.call(t,r)&&Ye(e,i)}}function Ye(e,n,t=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&En(n,t)}function oc(e,n){const t=Array.isArray(e),r={type_:t?1:0,scope_:n?n.scope_:bo(),modified_:!1,finalized_:!1,assigned_:{},parent_:n,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let i=r,a=Rn;t&&(i=[r],a=ge);const{revoke:s,proxy:c}=Proxy.revocable(i,a);return r.draft_=c,r.revoke_=s,c}var Rn={get(e,n){if(n===T)return e;const t=Q(e);if(!bn(t,n))return ic(e,t,n);const r=t[n];return e.finalized_||!Z(r)?r:r===dn(e.base_,n)?(un(e),e.copy_[n]=wn(r,e)):r},has(e,n){return n in Q(e)},ownKeys(e){return Reflect.ownKeys(Q(e))},set(e,n,t){const r=yo(Q(e),n);if(r!=null&&r.set)return r.set.call(e.draft_,t),!0;if(!e.modified_){const i=dn(Q(e),n),a=i==null?void 0:i[T];if(a&&a.base_===t)return e.copy_[n]=t,e.assigned_[n]=!1,!0;if(Js(t,i)&&(t!==void 0||bn(e.base_,n)))return!0;un(e),xn(e)}return e.copy_[n]===t&&(t!==void 0||n in e.copy_)||Number.isNaN(t)&&Number.isNaN(e.copy_[n])||(e.copy_[n]=t,e.assigned_[n]=!0),!0},deleteProperty(e,n){return dn(e.base_,n)!==void 0||n in e.base_?(e.assigned_[n]=!1,un(e),xn(e)):delete e.assigned_[n],e.copy_&&delete e.copy_[n],!0},getOwnPropertyDescriptor(e,n){const t=Q(e),r=Reflect.getOwnPropertyDescriptor(t,n);return r&&{writable:!0,configurable:e.type_!==1||n!=="length",enumerable:r.enumerable,value:t[n]}},defineProperty(){z(11)},getPrototypeOf(e){return re(e.base_)},setPrototypeOf(){z(12)}},ge={};He(Rn,(e,n)=>{ge[e]=function(){return arguments[0]=arguments[0][0],n.apply(this,arguments)}});ge.deleteProperty=function(e,n){return ge.set.call(this,e,n,void 0)};ge.set=function(e,n,t){return Rn.set.call(this,e[0],n,t,e[0])};function dn(e,n){const t=e[T];return(t?Q(t):e)[n]}function ic(e,n,t){var i;const r=yo(n,t);return r?"value"in r?r.value:(i=r.get)==null?void 0:i.call(e.draft_):void 0}function yo(e,n){if(!(n in e))return;let t=re(e);for(;t;){const r=Object.getOwnPropertyDescriptor(t,n);if(r)return r;t=re(t)}}function xn(e){e.modified_||(e.modified_=!0,e.parent_&&xn(e.parent_))}function un(e){e.copy_||(e.copy_=yn(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var ac=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(n,t,r)=>{if(typeof n=="function"&&typeof t!="function"){const a=t;t=n;const s=this;return function(d=a,...l){return s.produce(d,p=>t.call(this,p,...l))}}typeof t!="function"&&z(6),r!==void 0&&typeof r!="function"&&z(7);let i;if(Z(n)){const a=Pt(this),s=wn(n,void 0);let c=!0;try{i=t(s),c=!1}finally{c?On(a):Pn(a)}return Ot(a,r),xt(i,a)}else if(!n||typeof n!="object"){if(i=t(n),i===void 0&&(i=n),i===go&&(i=void 0),this.autoFreeze_&&En(i,!0),r){const a=[],s=[];J("Patches").generateReplacementPatches_(n,i,a,s),r(a,s)}return i}else z(1,n)},this.produceWithPatches=(n,t)=>{if(typeof n=="function")return(s,...c)=>this.produceWithPatches(s,d=>n(d,...c));let r,i;return[this.produce(n,t,(s,c)=>{r=s,i=c}),r,i]},typeof(e==null?void 0:e.autoFreeze)=="boolean"&&this.setAutoFreeze(e.autoFreeze),typeof(e==null?void 0:e.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){Z(e)||z(8),oe(e)&&(e=sc(e));const n=Pt(this),t=wn(e,void 0);return t[T].isManual_=!0,Pn(n),t}finishDraft(e,n){const t=e&&e[T];(!t||!t.isManual_)&&z(9);const{scope_:r}=t;return Ot(r,n),xt(void 0,r)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,n){let t;for(t=n.length-1;t>=0;t--){const i=n[t];if(i.path.length===0&&i.op==="replace"){e=i.value;break}}t>-1&&(n=n.slice(t+1));const r=J("Patches").applyPatches_;return oe(e)?r(e,n):this.produce(e,i=>r(i,n))}};function wn(e,n){const t=Ve(e)?J("MapSet").proxyMap_(e,n):Ze(e)?J("MapSet").proxySet_(e,n):oc(e,n);return(n?n.scope_:bo()).drafts_.push(t),t}function sc(e){return oe(e)||z(10,e),Oo(e)}function Oo(e){if(!Z(e)||Je(e))return e;const n=e[T];let t;if(n){if(!n.modified_)return n.base_;n.finalized_=!0,t=yn(e,n.scope_.immer_.useStrictShallowCopy_)}else t=yn(e,!0);return He(t,(r,i)=>{vo(t,r,Oo(i))}),n&&(n.finalized_=!1),t}var F=new ac,Pe=F.produce;F.produceWithPatches.bind(F);F.setAutoFreeze.bind(F);F.setUseStrictShallowCopy.bind(F);F.applyPatches.bind(F);F.createDraft.bind(F);F.finishDraft.bind(F);const X=[{partyId:1,partyDisplayName:"Jefferson PTY LTD",formattedPartyExternalId:"ABN: 89 790 756 100",someExtraInfo:"our component allows this field but does not use it at all",roleDisplayName:"User",roleName:"USER"},{partyId:2,partyDisplayName:"Metaweb (agent role)",formattedPartyExternalId:"ABN: 89 790 756 100",someExtraInfo:"our component allows this field but does not use it at all",roleDisplayName:"Agent",roleName:"AGENT"},{partyId:3,partyDisplayName:"Fresh Produce Australia",formattedPartyExternalId:"ABN: 92 635 964 018",someExtraInfo:"our component allows this field but does not use it at all",roleDisplayName:"Principal Authority (Owner)",roleName:"PRINCIPAL_AUTHORITY_OWNER"},{partyId:4,partyDisplayName:"Fresh Produce Australia",formattedPartyExternalId:"ABN: 92 635 964 018",someExtraInfo:"our component allows this field but does not use it at all",roleDisplayName:"Manager",roleName:"MANAGER"}],pn=[{partyId:5,partyDisplayName:"Business A",formattedPartyExternalId:"ABN: 88 888 888 888",roleDisplayName:"User",roleGroupName:"BIOSECURITY"},{partyId:6,partyDisplayName:"Business B",formattedPartyExternalId:"ABN: 88 888 888 888",roleDisplayName:"User",roleGroupName:"BIOSECURITY"},{partyId:7,partyDisplayName:"Business C",formattedPartyExternalId:"ABN: 88 888 888 888",roleDisplayName:"User",roleGroupName:"BIOSECURITY"},{partyId:8,partyDisplayName:"Business D",formattedPartyExternalId:"ABN: 88 888 888 888",roleDisplayName:"User",roleGroupName:"BIOSECURITY"}],kc={title:"AppLayout",component:V,parameters:{layout:"fullscreen"},render:function(n){return u(f.Fragment,{children:[o(ae,{links:[{href:"#main-content",label:"Skip to main content"}]}),o(V,{...n,children:o(_,{children:o(H,{children:o("h1",{children:"Page heading"})})})})]})}},cc=e=>new Promise(n=>setTimeout(n,e)),D=async()=>{await cc(2e3),alert("You have been signed out.")},xe={args:{focusMode:!1,userName:"Toto Wolff",unreadMessageCount:6,activePath:"/",handleSignOut:D}},we={args:{focusMode:!0,userName:"Toto Wolff",unreadMessageCount:6,activePath:"/",handleSignOut:D}},Ce={args:{activePath:"/",focusMode:!1,handleSignOut:D},render:function(n){const[t,r]=f.useState(!1);return f.useEffect(()=>{setTimeout(()=>{r(!0)},1e3)},[]),u(f.Fragment,{children:[o(ae,{links:[{href:"#main-content",label:"Skip to main content"}]}),o(V,{...n,...t?{userName:"Toto Wolff",unreadMessageCount:6}:{},children:o(_,{children:o(H,{children:o("h1",{children:"Page heading"})})})})]})}},ke={args:{focusMode:!1,userName:"Toto Wolff",unreadMessageCount:6,activePath:"/",handleSignOut:D,domain:"test.agriculture.gov.au"}},Se={args:{focusMode:!1,userName:"Toto Wolff",unreadMessageCount:6,activePath:"/account/exports/dashboard",handleSignOut:D,subdomain:"services",domain:e=>`http://${e.subdomain}.example.com/custom-prefix${e.path}`}},Ie={args:{focusMode:!1,userName:"Toto Wolff",unreadMessageCount:6,activePath:"/",handleSignOut:D},render:function(n){const[t,r]=f.useState({exports:X,imports:pn,selectedBusiness:X[1]}),i=s=>r(c=>({...c,selectedBusiness:s})),a=(s,c)=>()=>{if(s==="imports"){const d=pn.slice(0,c),l=d[0];r(p=>({...p,imports:d,selectedBusiness:l}))}if(s==="exports"){const d=X.slice(0,c),l=d[0];r(p=>({...p,exports:d,selectedBusiness:l}))}};return u(f.Fragment,{children:[o(ae,{links:[{href:"#main-content",label:"Skip to main content"}]}),o(V,{...n,businessDetails:{selectedBusiness:t.selectedBusiness,linkedBusinesses:[...t.exports,...t.imports],setSelectedBusiness:i},children:o(_,{children:u(j,{gap:3,children:[o(H,{children:o("h1",{children:"Business dropdown configuration"})}),u(x,{gap:1,children:[o(pe,{label:"Number of linked businesses",block:!0,hideOptionalLabel:!0,children:Array.from(new Array(X.length+1).keys()).map(s=>{var c;return u(Yn,{checked:((c=t==null?void 0:t.exports)==null?void 0:c.length)===s,onChange:a("exports",s),children:[s," ",s===0?"business":"businesses"]},s)})}),o(pe,{label:"Number of linked biosecurity businesses",block:!0,hideOptionalLabel:!0,children:Array.from(new Array(pn.length+1).keys()).map(s=>{var c;return u(Yn,{checked:((c=t==null?void 0:t.imports)==null?void 0:c.length)===s,onChange:a("imports",s),children:[s," ",s===0?"import business":"import businesses"]},s)})})]})]})})})]})}},Le={args:{focusMode:!1,userName:"Toto Wolff",unreadMessageCount:6,activePath:"/",handleSignOut:D},render:function(n){const t=X,[r,i]=f.useState(t[1]),[a,s]=f.useState(),c=()=>s(void 0),d={linkedBusinesses:t,selectedBusiness:r,setSelectedBusiness:s};return u(f.Fragment,{children:[o(ae,{links:[{href:"#main-content",label:"Skip to main content"}]}),u(V,{...n,businessDetails:d,children:[o(Qr,{isOpen:a!==void 0,onClose:c,title:"Are you sure you want to leave this page?",actions:u(kn,{children:[o(q,{onClick:()=>{a!==void 0&&i(a),s(void 0)},children:"Leave this page"}),o(q,{variant:"secondary",onClick:c,children:"Stay on this page"})]}),children:o(k,{as:"p",children:"You will lose all changes made since your last save."})}),o(_,{children:o(j,{gap:3,children:o(H,{children:u("h1",{children:["Active business: ",r==null?void 0:r.partyDisplayName]})})})})]})]})}},Me={args:{focusMode:!1,userName:"Toto Wolff",unreadMessageCount:6,activePath:"/",handleSignOut:D},render:function(n){const t={linkedBusinesses:X,selectedBusiness:X[0],setSelectedBusiness:()=>{}},r=()=>{const i=ho();return o(q,{onClick:i,children:"Sign out"})};return u(f.Fragment,{children:[o(ae,{links:[{href:"#main-content",label:"Skip to main content"}]}),o(V,{...n,businessDetails:t,children:o(_,{children:u(j,{gap:3,children:[u(H,{children:[o("h1",{children:"Sign out button"}),u("p",{children:["You can trigger the sign out modal using the"," ",o("code",{children:"useOpenSignOutModal"})," hook."]})]}),o(kn,{children:o(r,{})})]})})})]})}},Ae={args:{focusMode:!1,userName:"Toto Wolff",unreadMessageCount:6,activePath:"/",features:{quotas:!0,exportSystems:!0,licences:!0,invoices:!0,people:!0}}},De={args:{focusMode:!1,unreadMessageCount:6,activePath:"/",handleSignOut:D,claims:{given_name:"given_name",family_name:"family_name"}}},je={args:{focusMode:!1,unreadMessageCount:6,activePath:"/",handleSignOut:D,claims:{family_name:"family_name"}}},Be={args:{focusMode:!1,unreadMessageCount:6,activePath:"/",handleSignOut:D,claims:{family_name:"family_name"},errorComponents:{MissingName:e=>(f.useEffect(()=>{console.log("report this situation to an analytics provider here")},[]),o(po.MissingName,{...e}))}}},Ee={args:{focusMode:!1,unreadMessageCount:6,activePath:"/",handleSignOut:D,claims:{family_name:"family_name"},errorComponents:{MissingName:e=>o(_,{children:u(H,{children:[o("p",{children:"Our app works just fine even without a generic name."}),o("hr",{}),e.children]})})}}},Re={args:{focusMode:!1,unreadMessageCount:6,activePath:"/",handleSignOut:D,claims:{family_name:"family_name"},errorComponents:{MissingGivenName:e=>{const n=ho();return o(_,{children:u(H,{children:[o("p",{children:"Our app works just fine even without a given name."}),o("hr",{}),e.children,o(q,{onClick:n,children:"Sign out"})]})})}}}},Te={args:{focusMode:!1,unreadMessageCount:6,activePath:"/",handleSignOut:D,claims:{given_name:"given_name",family_name:"family_name",AARM_acr:"urn:id.gov.au:tdif:acr:ip1:cl1"},requiredProofingLevel:"IP2"}},Fe={args:{focusMode:!1,unreadMessageCount:6,activePath:"/",handleSignOut:D},render:function(n){const t=["IP1","IP2","IP3","IP4"],r=["urn:id.gov.au:tdif:acr:ip1:cl1","urn:id.gov.au:tdif:acr:ip1:cl2","urn:id.gov.au:tdif:acr:ip1:cl3","urn:id.gov.au:tdif:acr:ip1p:cl1","urn:id.gov.au:tdif:acr:ip1p:cl2","urn:id.gov.au:tdif:acr:ip1p:cl3","urn:id.gov.au:tdif:acr:ip2:cl2","urn:id.gov.au:tdif:acr:ip2:cl3","urn:id.gov.au:tdif:acr:ip2p:cl2","urn:id.gov.au:tdif:acr:ip2p:cl3","urn:id.gov.au:tdif:acr:ip3:cl2","urn:id.gov.au:tdif:acr:ip3:cl3","urn:id.gov.au:tdif:acr:ip4:cl3"],[i,a]=f.useState(!0),[s,c]=f.useState({method:"urn",claims:{given_name:"given_name",family_name:"family_name",AARM_acr:[r[0]]},authDetails:{proofingLevel:["IP1"]},requiredProofingLevel:["IP2"]}),d=l=>{const p=l.kind==="max"?"#df185a":"#287be0",h=l!=null&&l.extraText?` (${l.extraText})`:"";return l!=null&&l.active?o(M,{css:{position:"relative",padding:"4px",border:`2px dashed ${p}`,"& + &":{marginTop:"1em"},":after":{position:"absolute",right:0,bottom:"120%",content:`"${l.kind==="max"?"maximum provided proof":"minimum required proof"}${h}"`,color:p,fontSize:"0.8em"}},children:l.children}):o(Mr,{children:l.children})};return u(f.Fragment,{children:[o(ae,{links:[{href:"#main-content",label:"Skip to main content"}]}),u(M,{css:{position:"relative"},children:[o(M,{css:{border:"2px solid red",backgroundColor:"#fec0ff",position:"fixed",transform:"rotate(90deg)",transformOrigin:"top right",fontSize:"1.2em",padding:".4em 1em",top:"55vh",right:0,zIndex:99,cursor:"pointer"},onClick:()=>a(!0),children:"show config options"}),o(V,{...n,requiredProofingLevel:s.requiredProofingLevel,...s.method==="claims"?{claims:s.claims}:{authDetails:s.authDetails},children:o(_,{children:u(j,{gap:1.5,children:[o(k,{as:"p",fontSize:"lg",children:"You made it!"}),o(k,{as:"p",children:"Your proofing level means that you can see this page."})]})})})]}),o(ua,{title:"Config",isOpen:i,onClose:()=>a(!1),children:u(j,{gap:1.5,children:[o(Qi,{label:"Proofing method",required:!0,options:[{value:"authDetails",label:"AuthDetails"},{value:"claims",label:"Claims"}],onChange:l=>c(Pe(p=>{p.method=l.target.value}))}),s.method==="claims"?o(pe,{label:"Provided ACR",block:!0,hideOptionalLabel:!0,children:r.map(l=>o(d,{kind:"max",active:ue(_e({AARM_acr:l}))===ue(_e(s.claims)),extraText:ue(_e(s.claims)),children:o(an,{checked:new Set(s.claims.AARM_acr).has(l),onChange:p=>c(Pe(h=>{p.target.checked?h.claims.AARM_acr.push(l):h.claims.AARM_acr.splice(h.claims.AARM_acr.indexOf(l),1)})),children:l},l)},l))}):o(pe,{label:"Provided proofing level",block:!0,hideOptionalLabel:!0,children:t.map(l=>o(d,{kind:"max",active:ue(s.authDetails.proofingLevel)===l,children:o(an,{checked:new Set(s.authDetails.proofingLevel).has(l),onChange:p=>c(Pe(h=>{p.target.checked?h.authDetails.proofingLevel.push(l):h.authDetails.proofingLevel.splice(h.authDetails.proofingLevel.indexOf(l),1)})),children:l},l)},l))}),o(pe,{label:"Required proofing level",block:!0,hideOptionalLabel:!0,children:t.map(l=>o(d,{kind:"min",active:lo(s.requiredProofingLevel)===l,children:o(an,{checked:new Set(s.requiredProofingLevel).has(l),onChange:p=>c(Pe(h=>{p.target.checked?h.requiredProofingLevel.push(l):h.requiredProofingLevel.splice(h.requiredProofingLevel.indexOf(l),1)})),children:l},l)},l))})]})})]})}},Ne={args:{focusMode:!1,unreadMessageCount:6,activePath:"/",handleSignOut:D,authDetails:{proofingLevel:"IP1"},requiredProofingLevel:"IP3",errorComponents:{ProofMissing:e=>o(_,{children:u(H,{children:[u("p",{children:["Your proofing level is insufficient at"," ",Ge(e.providedProofingLevel),". Please fix it."]}),u("p",{children:["you should provide at least '",Ge(e.requiredProofingLevel),"'"]})]})})}}},ze={args:{focusMode:!1,userName:"Toto Wolff",unreadMessageCount:6,activePath:"/custom",handleSignOut:D,sidebarItems:[{items:[{label:"Custom sidenav",href:"/custom",icon:Mn},{label:"Other item",href:"/other",icon:Fr}]}],internal:"sidebar"}},$e={args:{focusMode:!1,userName:"Toto Wolff",unreadMessageCount:6,activePath:"/custom",handleSignOut:D,headerProps:{heading:"Service Portal",subLine:"Supporting Australian agriculture"},sidebarItems:[{items:[{label:"Overview",href:"/custom",icon:Mn,items:[{label:"Business details",href:"#"},{label:"People",href:"#"}]},{label:"Country requirements",href:"/country-requirements",icon:pi,items:[{label:"Other",href:"#"},{label:"Options",href:"#"}]}]},{items:[{label:"Help",href:"/help",icon:Rr}]}]}};var Ct,kt,St;xe.parameters={...xe.parameters,docs:{...(Ct=xe.parameters)==null?void 0:Ct.docs,source:{originalSource:`{
  args: {
    focusMode: false,
    userName: 'Toto Wolff',
    unreadMessageCount: 6,
    activePath: '/',
    handleSignOut
  }
}`,...(St=(kt=xe.parameters)==null?void 0:kt.docs)==null?void 0:St.source}}};var It,Lt,Mt;we.parameters={...we.parameters,docs:{...(It=we.parameters)==null?void 0:It.docs,source:{originalSource:`{
  args: {
    focusMode: true,
    userName: 'Toto Wolff',
    unreadMessageCount: 6,
    activePath: '/',
    handleSignOut
  }
}`,...(Mt=(Lt=we.parameters)==null?void 0:Lt.docs)==null?void 0:Mt.source}}};var At,Dt,jt;Ce.parameters={...Ce.parameters,docs:{...(At=Ce.parameters)==null?void 0:At.docs,source:{originalSource:`{
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
}`,...(jt=(Dt=Ce.parameters)==null?void 0:Dt.docs)==null?void 0:jt.source}}};var Bt,Et,Rt;ke.parameters={...ke.parameters,docs:{...(Bt=ke.parameters)==null?void 0:Bt.docs,source:{originalSource:`{
  args: {
    focusMode: false,
    userName: 'Toto Wolff',
    unreadMessageCount: 6,
    activePath: '/',
    handleSignOut,
    domain: 'test.agriculture.gov.au'
  }
}`,...(Rt=(Et=ke.parameters)==null?void 0:Et.docs)==null?void 0:Rt.source}}};var Tt,Ft,Nt;Se.parameters={...Se.parameters,docs:{...(Tt=Se.parameters)==null?void 0:Tt.docs,source:{originalSource:`{
  args: {
    focusMode: false,
    userName: 'Toto Wolff',
    unreadMessageCount: 6,
    activePath: '/account/exports/dashboard',
    handleSignOut,
    subdomain: 'services',
    domain: route => \`http://\${route.subdomain}.example.com/custom-prefix\${route.path}\`
  }
}`,...(Nt=(Ft=Se.parameters)==null?void 0:Ft.docs)==null?void 0:Nt.source}}};var zt,$t,_t;Ie.parameters={...Ie.parameters,docs:{...(zt=Ie.parameters)==null?void 0:zt.docs,source:{originalSource:`{
  args: {
    focusMode: false,
    userName: 'Toto Wolff',
    unreadMessageCount: 6,
    activePath: '/',
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
}`,...(_t=($t=Ie.parameters)==null?void 0:$t.docs)==null?void 0:_t.source}}};var Wt,qt,Gt;Le.parameters={...Le.parameters,docs:{...(Wt=Le.parameters)==null?void 0:Wt.docs,source:{originalSource:`{
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
}`,...(Gt=(qt=Le.parameters)==null?void 0:qt.docs)==null?void 0:Gt.source}}};var Ht,Ut,Yt;Me.parameters={...Me.parameters,docs:{...(Ht=Me.parameters)==null?void 0:Ht.docs,source:{originalSource:`{
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
}`,...(Yt=(Ut=Me.parameters)==null?void 0:Ut.docs)==null?void 0:Yt.source}}};var Kt,Qt,Xt;Ae.parameters={...Ae.parameters,docs:{...(Kt=Ae.parameters)==null?void 0:Kt.docs,source:{originalSource:`{
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
}`,...(Xt=(Qt=Ae.parameters)==null?void 0:Qt.docs)==null?void 0:Xt.source}}};var Vt,Zt,Jt;De.parameters={...De.parameters,docs:{...(Vt=De.parameters)==null?void 0:Vt.docs,source:{originalSource:`{
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
}`,...(Jt=(Zt=De.parameters)==null?void 0:Zt.docs)==null?void 0:Jt.source}}};var er,nr,tr;je.parameters={...je.parameters,docs:{...(er=je.parameters)==null?void 0:er.docs,source:{originalSource:`{
  args: {
    focusMode: false,
    unreadMessageCount: 6,
    activePath: '/',
    handleSignOut,
    claims: {
      family_name: 'family_name'
    }
  }
}`,...(tr=(nr=je.parameters)==null?void 0:nr.docs)==null?void 0:tr.source}}};var rr,or,ir;Be.parameters={...Be.parameters,docs:{...(rr=Be.parameters)==null?void 0:rr.docs,source:{originalSource:`{
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
}`,...(ir=(or=Be.parameters)==null?void 0:or.docs)==null?void 0:ir.source}}};var ar,sr,cr;Ee.parameters={...Ee.parameters,docs:{...(ar=Ee.parameters)==null?void 0:ar.docs,source:{originalSource:`{
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
}`,...(cr=(sr=Ee.parameters)==null?void 0:sr.docs)==null?void 0:cr.source}}};var lr,dr,ur;Re.parameters={...Re.parameters,docs:{...(lr=Re.parameters)==null?void 0:lr.docs,source:{originalSource:`{
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
}`,...(ur=(dr=Re.parameters)==null?void 0:dr.docs)==null?void 0:ur.source}}};var pr,fr,hr;Te.parameters={...Te.parameters,docs:{...(pr=Te.parameters)==null?void 0:pr.docs,source:{originalSource:`{
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
}`,...(hr=(fr=Te.parameters)==null?void 0:fr.docs)==null?void 0:hr.source}}};var gr,mr,vr;Fe.parameters={...Fe.parameters,docs:{...(gr=Fe.parameters)==null?void 0:gr.docs,source:{originalSource:`{
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
}`,...(vr=(mr=Fe.parameters)==null?void 0:mr.docs)==null?void 0:vr.source}}};var br,yr,Or;Ne.parameters={...Ne.parameters,docs:{...(br=Ne.parameters)==null?void 0:br.docs,source:{originalSource:`{
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
}`,...(Or=(yr=Ne.parameters)==null?void 0:yr.docs)==null?void 0:Or.source}}};var Pr,xr,wr;ze.parameters={...ze.parameters,docs:{...(Pr=ze.parameters)==null?void 0:Pr.docs,source:{originalSource:`{
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
}`,...(wr=(xr=ze.parameters)==null?void 0:xr.docs)==null?void 0:wr.source}}};var Cr,kr,Sr;$e.parameters={...$e.parameters,docs:{...(Cr=$e.parameters)==null?void 0:Cr.docs,source:{originalSource:`{
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
}`,...(Sr=(kr=$e.parameters)==null?void 0:kr.docs)==null?void 0:Sr.source}}};const Sc=["Basic","FocusMode","ClientSideFetch","EnvironmentRouting","CustomRouting","BusinessDropdown","BusinessDropdownModalInterrupt","SignOutModalTrigger","OptionalAppsEnabled","Claims","ClaimsMissingName","ClaimsMissingNameAnalytics","ClaimsMissingNameComponent","ClaimsMissingGivenNameComponent","RequiredProofingPaywall","RequiredProofingPaywallOptions","RequiredProofingPaywallCustomComponent","CustomSidenav","HeaderProps"];export{xe as Basic,Ie as BusinessDropdown,Le as BusinessDropdownModalInterrupt,De as Claims,Re as ClaimsMissingGivenNameComponent,je as ClaimsMissingName,Be as ClaimsMissingNameAnalytics,Ee as ClaimsMissingNameComponent,Ce as ClientSideFetch,Se as CustomRouting,ze as CustomSidenav,ke as EnvironmentRouting,we as FocusMode,$e as HeaderProps,Ae as OptionalAppsEnabled,Te as RequiredProofingPaywall,Ne as RequiredProofingPaywallCustomComponent,Fe as RequiredProofingPaywallOptions,Me as SignOutModalTrigger,Sc as __namedExportsOrder,kc as default};
