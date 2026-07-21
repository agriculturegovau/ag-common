import{a as o,_ as q,t as y,g as D,b as P,d as b,i as m,j as u,B as M,p as L,G as Cn,m as ae,c as Dr,u as jr,r as Do,F as Br,e as jo,s as Bo}from"./Box-37a490cb.esm-KbYwGL3W.js";import{r as f}from"./index-BAneEnFJ.js";import{P as G,p as Eo,a as Ro}from"./ag.ds-next-react-heading.esm-DkiFI9Pu.js";import{b as To,m as Fo,c as W,_ as Er,C as No,B as Qe,P as N,a as kn}from"./ag.ds-next-react-button.esm-CfGtwY17.js";import{v as $o,S as j,T as k,F as x,V as Rr,s as Xe,E as zo,c as _o}from"./Icon-29f3c11e.esm-D-1Eu8-3.js";import{e as ne,a as Sn,c as In,F as Ln,u as pn,_ as $n,D as Wo,b as qo,d as Go,f as zn,g as ce,h as Ho,i as Uo,j as Yo,k as Ko,l as Tr}from"./ag.ds-next-react-dropdown-menu.esm-DyCjPWp0.js";import{b as Fr,c as Qo,d as Xo,a as Nr,C as fe,M as Vo,e as Zo,H as $r,f as zr,E as Jo,L as ei,g as ni,P as _r,S as ti,h as ri,F as Mn,U as oi,B as Wr,i as ii,j as ai,k as si,l as li,A as ci,m as qr,n as di,o as ui,p as pi,W as fi,I as hi,q as mi}from"./ag.ds-next-react-icon.esm-DUMLKcCZ.js";import{r as An}from"./index-exioagFi.js";import{u as Dn,C as re,c as gi}from"./CoreProvider-eb9f00f4.esm-CcMMn4yr.js";import{L as vi}from"./ag.ds-next-react-daff-branding.esm-CywPuWpb.js";import{L as bi}from"./ag.ds-next-react-link-list.esm-BmPWZ-i5.js";import{C as yi}from"./ag.ds-next-react-callout.esm-CRx0qdwI.js";import{a as qe}from"./ag.ds-next-react-text-link.esm-grY3sGd-.js";import"./jsx-runtime-D_zvdyIk.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-pL_YbQPu.js";function Gr(){var e=f.useState(!1),n=e[0],t=e[1];return f.useEffect(function(){if(!window.matchMedia){t(!1);return}var r=window.matchMedia("(prefers-reduced-motion: reduce)");t(r.matches);var i=function(s){return t(s.matches)};return r.addEventListener("change",i),function(){return r.removeEventListener("change",i)}},[]),n}var Oi=function(n){var t=n.children,r=n["aria-label"];return o("nav",{"aria-label":r,children:t})},Pi=f.forwardRef(function(n,t){var r=n.children,i=n.href;return o("a",{css:[$o,To({block:!1,size:"md",variant:"primary"}),{position:"absolute","&:focus-visible":{top:D(1),left:D(1),clip:"auto",clipPath:"none",overflow:"visible",whiteSpace:"normal",width:"auto",zIndex:y.zIndex.skipLink}},"","","",""],href:i,ref:t,children:r})}),xi=["label"];function _n(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function Wn(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?_n(Object(t),!0).forEach(function(r){P(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):_n(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var te=function(n){var t=n.links,r=n["aria-label"],i=r===void 0?"Skip links":r;return o(Oi,{"aria-label":i,children:t.map(function(a,s){var l=a.label,d=q(a,xi);return o(Pi,Wn(Wn({},d),{},{children:l}),s)})})},qn="data-conditional-field-container",wi="data-grouped-fields",Ci=function(n){var t=n.hideOptionalLabel,r=n.required,i=n.secondaryLabel;return f.useMemo(function(){return[i,t||r?null:"(optional)"].filter(Boolean).join(" ")},[r,i,t])};function Gn(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function Hn(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?Gn(Object(t),!0).forEach(function(r){P(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Gn(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var Hr=function(n){var t,r=n.children,i=n.invalid,a=n.id;return o(j,Hn(Hn({},P({},tn,!0)),{},{borderLeft:i,borderLeftWidth:"xl",css:b((t={borderLeftColor:i?m.systemError:void 0},P(t,"[".concat(qn,"] &[").concat(tn,"]"),{marginLeft:i?"calc(-".concat(D(1)," - ").concat(y.borderWidth.xl,"px)"):void 0,position:"relative"}),P(t,"[".concat(qn,"] [").concat(wi,"] &[").concat(tn,"]:not(:first-of-type)"),{marginLeft:0}),t),"",""),gap:.5,id:a,paddingLeft:i?1:void 0,children:r}))},tn="data-field-container",Ur=function(n){var t=n.as,r=t===void 0?"label":t,i=n.children,a=n.className,s=n.id,l=n.htmlFor,d=n.required,c=n.secondaryLabel,p=n.hideOptionalLabel,h=Ci({hideOptionalLabel:p,required:d,secondaryLabel:c});return u(M,{as:r,className:a,htmlFor:l,id:s,children:[o(k,{as:"span",fontWeight:"bold",children:i}),h?u(k,{as:"span",color:"muted",children:[" ",h]}):null]})},Yr=function(n){var t=n.children,r=n.id;return o(k,{color:"muted",display:"block",id:r,children:t})},ki={name:"4zleql",styles:"display:block"},Kr=function(n){var t=n.children,r=n.id;return u(x,{alignItems:"center",gap:.5,children:[o(M,{flexShrink:0,children:o(Fr,{"aria-hidden":"false","aria-label":"Error",color:"error",css:ki,size:"md"})}),o(k,{color:"error",display:"block",fontWeight:"bold",id:r,children:t})]})},Si=function(n){var t=n.children,r=n.hint,i=n.id,a=n.invalid,s=n.label,l=n.labelId,d=n.maxWidth,c=n.secondaryLabel,p=n.hideOptionalLabel,h=n.message,v=n.required,w=Ii(i),g=w.fieldId,O=w.hintId,C=w.messageId,I=Li({required:v,fieldId:g,message:h,messageId:C,hint:r,hintId:O,invalid:a});return u(Hr,{invalid:a,children:[o(Ur,{hideOptionalLabel:p,htmlFor:g,id:l,required:v,secondaryLabel:c,children:s}),r?o(Yr,{id:O,children:r}):null,h&&a?o(Kr,{id:C,children:h}):null,typeof t=="function"?t(I):t,d?o("div",{"aria-hidden":!0,css:b({height:0,marginTop:"-".concat(D(.5)),maxWidth:y.maxWidth.field[d],overflow:"hidden","::after":{content:'"---------------------------------------------------------------"'}},"","")}):null]})},Ii=function(n){var t=ne(n),r=n||"field-".concat(t),i="field-".concat(t,"-hint"),a="field-".concat(t,"-message");return{fieldId:r,hintId:i,messageId:a}},Li=function(n){var t=n.required,r=n.fieldId,i=n.message,a=n.messageId,s=n.hint,l=n.hintId,d=n.invalid,c=[i?a:null,s?l:null].filter(Boolean),p=c.length?c.join(" "):void 0;return{"aria-required":!!t,"aria-invalid":!!d,"aria-describedby":p,id:r}},Qr=f.createContext(void 0),Xr=function(){return f.useContext(Qr)};function Mi(e){var n=e.children,t=e.invalid,r=e.messageId,i=e.name,a=e.required,s=ne();return o(Qr.Provider,{value:{invalid:t,name:i||s,messageId:r,required:a},children:n})}var pe=function(n){var t=n.block,r=t===void 0?!1:t,i=n.children,a=n.hint,s=n.id,l=n.invalid,d=l===void 0?!1:l,c=n.label,p=n.hideOptionalLabel,h=n.message,v=n.name,w=n.required,g=w===void 0?!1:w,O=Ai(s),C=O.groupId,I=O.hintId,S=O.messageId,B=[d&&h?S:null,a?I:null].filter(Boolean),E=B.length?B.join(" "):void 0;return o(Mi,{invalid:d,messageId:d&&h?S:void 0,name:v,required:g,children:o(Hr,{id:C,invalid:d,children:u(M,{"aria-describedby":E,as:"fieldset",children:[c?o(Ur,{as:"legend",hideOptionalLabel:p,required:g,children:c}):null,u(j,{css:b({marginTop:c?D(.5):void 0},"",""),gap:.5,children:[a?o(Yr,{id:I,children:a}):null,h&&d?o(Kr,{id:S,children:h}):null,o(x,{flexDirection:r?"column":"row",flexWrap:r?void 0:"wrap",gap:1,paddingTop:.5,width:"100%",children:i})]})]})})})},Ai=function(n){var t=ne(n),r=n||"control-group-".concat(t),i="control-group-".concat(t,"-hint"),a="control-group-".concat(t,"-message");return{groupId:r,hintId:i,messageId:a}};function Un(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function rn(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?Un(Object(t),!0).forEach(function(r){P(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Un(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function Di(e){var n=e.disabled,t=e.invalid,r=e.size,i=L.control[r],a=i.width,s=i.height,l=i.borderWidth;return o(x,{alignItems:"center",as:"span",css:b(rn(rn({backgroundColor:m.backgroundBody,borderColor:m.border,borderRadius:"100%",borderStyle:"solid",borderWidth:l,inset:0,position:"absolute"},n&&{color:m.borderMuted,borderColor:m.borderMuted,backgroundColor:m.backgroundShade,"@media (forced-colors: active)":{borderColor:"GrayText",color:"GrayText"}}),t&&{borderColor:m.systemError,backgroundColor:m.systemErrorMuted}),"",""),flexShrink:0,height:s,justifyContent:"center",rounded:!0,width:a,children:o(M,{as:"span",css:b(rn({borderRadius:"100%",backgroundColor:m.foregroundText,"@media (forced-colors: active)":{backgroundColor:"MenuText"}},n&&{backgroundColor:m.borderMuted,"@media (forced-colors: active)":{backgroundColor:"GrayText"}}),"",""),height:"calc(100% - 0.5rem)",highContrastOutline:!0,width:"calc(100% - 0.5rem)"})})}var ji=["height","width"];function Yn(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function Bi(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?Yn(Object(t),!0).forEach(function(r){P(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Yn(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var Ei=f.forwardRef(function(n,t){var r=n.height,i=n.width,a=q(n,ji);return o("input",Bi({css:b({height:r,margin:0,opacity:0,verticalAlign:"middle",width:i,"&:focus ~ span:first-of-type":L.outline,"~ span > span":{opacity:0},"&:checked ~ span > span":{opacity:1}},"",""),ref:t},a))}),Ri=function(n){var t=n.children,r=n.disabled,i=n.htmlFor;return o(x,{alignItems:"flex-start",as:"label",color:"text",css:b({cursor:r?"not-allowed":"pointer"},"",""),gap:.5,htmlFor:i,inline:!0,children:t})},Ti={sm:0,md:"0.2rem"};function Fi(e){var n=e.children,t=e.disabled,r=e.size,i=Ti[r];return o(k,{color:t?"muted":"text",css:b({paddingTop:i},"",""),flexGrow:1,children:n})}var Ni=["children","disabled","invalid","name","required","size"];function Kn(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function $i(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?Kn(Object(t),!0).forEach(function(r){P(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Kn(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var Qn=f.forwardRef(function(n,t){var r=n.children,i=n.disabled,a=n.invalid,s=n.name,l=n.required,d=n.size,c=d===void 0?"md":d,p=q(n,Ni),h=zi(p.id),v=Xr(),w=L.control[c],g=w.height,O=w.width,C=typeof a=="boolean"?a:v==null?void 0:v.invalid,I=typeof l=="boolean"?l:v==null?void 0:v.required,S=s||(v==null?void 0:v.name);return u(Ri,{disabled:i,htmlFor:h,children:[u("span",{css:b({display:"inline-block",height:g,position:"relative",width:O},"",""),children:[o(Ei,$i({"aria-describedby":C?v==null?void 0:v.messageId:void 0,"aria-invalid":C||void 0,"aria-required":I,disabled:i,height:g,id:h,name:S,ref:t,type:"radio",width:O},p)),o(Di,{disabled:i,invalid:C,size:c})]}),o(Fi,{disabled:i,size:c,children:r})]})});function zi(e){var n=ne(e);return e||"radio-".concat(n)}function Xn(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function Vn(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?Xn(Object(t),!0).forEach(function(r){P(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Xn(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var _i=function(n){var t=n.disabled,r=n.indeterminate,i=n.invalid,a=n.size,s=L.control[a],l=s.width,d=s.height,c=s.borderWidth;return o(x,{alignItems:"center",as:"span",css:b(Vn(Vn({backgroundColor:m.backgroundBody,borderColor:m.border,borderStyle:"solid",borderWidth:c,color:m.foregroundText,inset:0,position:"absolute"},t&&{color:m.borderMuted,borderColor:m.borderMuted,backgroundColor:m.backgroundShade,"@media (forced-colors: active)":{borderColor:"GrayText",color:"GrayText"}}),i&&{borderColor:m.systemError,backgroundColor:m.systemErrorMuted}),"",""),flexShrink:0,height:d,justifyContent:"center",rounded:!0,width:l,children:r?o(Qo,{size:a,weight:"bold"}):o(Xo,{size:a,weight:"bold"})})},Wi=["height","width"];function Zn(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function qi(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?Zn(Object(t),!0).forEach(function(r){P(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Zn(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var Gi=f.forwardRef(function(n,t){var r=n.height,i=n.width,a=q(n,Wi);return o("input",qi({css:b({height:r,margin:0,opacity:0,verticalAlign:"middle",width:i,"&:focus ~ span:first-of-type":L.outline,"~ span > svg":{opacity:0},"&:checked ~ span > svg, &:indeterminate ~ span > svg":{opacity:1}},"",""),ref:t},a))});function Hi(e){var n=e.children,t=e.htmlFor,r=e.disabled;return o(x,{alignItems:"flex-start",as:"label",color:"text",css:b({cursor:r?"not-allowed":"pointer"},"",""),gap:.5,htmlFor:t,inline:!0,children:n})}var Ui={sm:0,md:"0.2rem"};function Yi(e){var n=e.children,t=e.disabled,r=e.size,i=Ui[r];return o(k,{color:t?"muted":"text",css:b({paddingTop:i},"",""),flexGrow:1,children:n})}var Ki=["checked","children","disabled","indeterminate","invalid","name","required","size"];function Jn(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function Qi(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?Jn(Object(t),!0).forEach(function(r){P(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Jn(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var on=f.forwardRef(function(n,t){var r=n.checked,i=n.children,a=n.disabled,s=n.indeterminate,l=n.invalid,d=n.name,c=n.required,p=n.size,h=p===void 0?"md":p,v=q(n,Ki),w=Xi(v.id),g=f.useRef(null),O=Xr(),C=L.control[h],I=C.height,S=C.width,B=typeof l=="boolean"?l:O==null?void 0:O.invalid,E=typeof c=="boolean"?c:O==null?void 0:O.required,H=d||(O==null?void 0:O.name);f.useEffect(function(){g.current&&(g.current.indeterminate=!!s)},[s]);var U=s?!1:r;return u(Hi,{disabled:a,htmlFor:w,children:[u("span",{css:b({display:"inline-block",height:I,position:"relative",width:S},"",""),children:[o(Gi,Qi({"aria-checked":s?"mixed":void 0,"aria-describedby":B?O==null?void 0:O.messageId:void 0,"aria-invalid":B||void 0,"aria-required":E,checked:U,disabled:a,height:I,id:w,name:H,ref:Fo([t,g]),type:"checkbox",width:S},v)),o(_i,{disabled:a,indeterminate:s,invalid:B,size:h})]}),o(Yi,{disabled:a,size:h,children:i})]})});function Xi(e){var n=ne(e);return e||"checkbox-".concat(n)}var Vi=["label","hideOptionalLabel","required","hint","message","invalid","block","maxWidth","options","placeholder","id"];function et(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function Q(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?et(Object(t),!0).forEach(function(r){P(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):et(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var fn=f.forwardRef(function(n,t){var r=n.label,i=n.hideOptionalLabel,a=n.required,s=n.hint,l=n.message,d=n.invalid,c=n.block,p=n.maxWidth,h=p===void 0?"md":p,v=n.options,w=n.placeholder,g=n.id,O=q(n,Vi),C=na({block:c});return o(Si,{hideOptionalLabel:i,hint:s,id:g,invalid:d,label:r,maxWidth:h,message:l,required:a,children:function(S){return u(Zi,{block:c,maxWidth:h,children:[o("select",Q(Q(Q({css:C,ref:t},S),O),{},{children:o(Ji,{options:v,placeholder:w})})),o(ea,{disabled:O.disabled})]})}})}),Zi=function(n){var t=n.children,r=n.block,i=n.maxWidth;return o("div",{css:b(Q({position:"relative"},!r&&{maxWidth:y.maxWidth.field[i]}),"",""),children:t})},Ji=function(n){var t=n.options,r=n.placeholder;return u(f.Fragment,{children:[r?o("option",{value:"",children:r}):null,t.map(function(i){return"options"in i?o("optgroup",{disabled:i.disabled,label:i.label,children:i.options.map(function(a){var s=a.value,l=a.label,d=a.disabled;return o("option",{disabled:d,value:s,children:l},s)})},i.label):o("option",{disabled:i.disabled,value:i.value,children:i.label},i.value)})]})},ea=function(n){var t=n.disabled;return o(Nr,{css:b({position:"absolute",top:"50%",right:D(.75),transform:"translateY(-50%)",opacity:t?.3:void 0,pointerEvents:"none",color:m.foregroundAction},"","")})},na=function(n){var t=n.block;return Q(Q(Q(Q({position:"relative",appearance:"none",boxSizing:"border-box",paddingLeft:D(1),paddingRight:"calc(".concat(y.borderWidth.lg,"px + 2.5rem)"),margin:0,background:m.backgroundBody,borderWidth:y.borderWidth.lg,borderStyle:"solid",borderColor:m.border,borderRadius:y.borderRadius,color:m.foregroundText,width:"100%",fontFamily:y.font.body},L.input.md),{},{lineHeight:y.lineHeight.default},L.truncate),t&&{maxWidth:"none",display:"block"}),{},{'&[aria-invalid="true"]':{backgroundColor:m.systemErrorMuted,borderColor:m.systemError},"&:disabled":{opacity:1,cursor:"not-allowed",borderColor:m.borderMuted,backgroundColor:m.backgroundShade,color:m.foregroundMuted},"&:focus":L.outline})};function Vr(){var e=f.useState(!1),n=e[0],t=e[1];return f.useEffect(function(){t(!0)},[]),n}function Zr(e,n){var t=e||n;if(!t)throw new Error("onClose prop is required");return t}function ta(e,n){return e||n}function ra(){var e=ne();return{titleId:"drawer-".concat(e,"-title")}}var oa={name:"6dhm9o",styles:"visibility:hidden"};function ia(e){var n=e.actions,t=e.children,r=e.elementToFocusOnClose,i=e.onClose,a=e.title,s=ra(),l=s.titleId;return o(Ln,{returnFocus:r?function(){return window.setTimeout(function(){return r.focus()},0),!1}:!0,children:u(x,{"aria-labelledby":l,"aria-modal":!0,background:"body",css:b({boxShadow:y.shadow.lg,inset:0,position:"fixed"},"",""),flexDirection:"column",highContrastOutline:!0,role:"dialog",children:[u(aa,{children:[o(la,{id:l,children:a}),o(W,{"aria-hidden":!0,css:oa,iconAfter:fe,tabIndex:-1,variant:"text",children:"Close"})]}),o(ca,{title:a,children:t}),n?o(ua,{children:n}):null,o(W,{css:ae({position:"fixed",right:Dr({xs:D(.75),md:D(1.5)}),top:"1.25rem",zIndex:y.zIndex.elevated}),iconAfter:fe,onClick:i,variant:"text",children:"Close"})]})})}function aa(e){var n=e.children;return o(x,{background:"body",borderBottom:!0,paddingX:{xs:.75,md:1.5},paddingY:1,children:n})}var sa={name:"1r5gb7q",styles:"display:inline-block"};function la(e){var n=e.children,t=e.id;return o(k,{as:"h2",css:sa,"data-autofocus":!0,focusRingFor:"keyboard",fontSize:"lg",fontWeight:"bold",id:t,lineHeight:"heading",tabIndex:-1,children:n})}function ca(e){var n=e.children,t=e.title;return o(M,{"aria-label":"".concat(t," content"),as:"section",background:"body",css:b({overflowY:"auto",":focus":{outlineOffset:"-".concat(L.outline.outlineWidth)}},"",""),flexGrow:1,focusRingFor:"keyboard",paddingX:{xs:.75,md:1.5},paddingY:{xs:1,md:1.5},tabIndex:0,children:n})}var da={name:"xdvdnl",styles:"margin-top:auto"};function ua(e){var n=e.children;return o(M,{background:"body",borderTop:!0,css:da,paddingX:{xs:.75,md:1.5},paddingY:1,children:n})}var pa={md:"32rem",lg:"45rem"},fa=function(n){var t=n.actions,r=n.children,i=n.elementToFocusOnClose,a=n.isOpen,s=a===void 0?!1:a,l=n.mutedOverlay,d=l===void 0?!1:l,c=n.onClose,p=n.onDismiss,h=n.title,v=n.width,w=v===void 0?"md":v,g=Zr(c,p),O=f.useRef(0),C=Gr(),I=f.useState(!0),S=I[0],B=I[1],E=Vr();f.useEffect(function(){O.current=window.innerWidth-document.documentElement.clientWidth},[]),f.useEffect(function(){s&&B(!1)},[s]),f.useEffect(function(){var _=function(se){s&&se.code==="Escape"&&(se.preventDefault(),se.stopPropagation(),g())};return window.addEventListener("keydown",_),function(){return window.removeEventListener("keydown",_)}},[s,g]);var H=Sn(E?s:!1),U=H.modalContainerRef;if(!E||!In())return null;var Y=s?!0:!S;return An.createPortal(u(f.Fragment,{children:[s?o(ma,{scrollbarWidth:O.current}):null,u("div",{ref:U,children:[o("div",{css:b({pointerEvents:"none",position:"absolute",opacity:s?1:0,transition:s?"none":"opacity ".concat(C?"1ms":"150ms")},"",""),"data-drawer":"transitioner",onTransitionEnd:function(){B(!0)}}),o(ha,{isOpen:s,mutedOverlay:d,onClick:g,prefersReducedMotion:C}),o(M,{css:b({inset:0,marginLeft:"auto",position:"fixed",transform:"translateX(".concat(s?"0":"100%",")"),transition:"transform ".concat(C?"1ms":"150ms"," ease"),zIndex:y.zIndex.dialog},"",""),maxWidth:pa[w],children:Y&&o(ia,{actions:t,elementToFocusOnClose:i,onClose:g,title:h,children:r})})]})]}),document.body)};function ha(e){var n=e.isOpen,t=e.mutedOverlay,r=e.onClick,i=e.prefersReducedMotion;return o("div",{css:b({pointerEvents:n?"all":"none",position:"fixed",inset:0,backgroundColor:t?m.overlayMuted:m.overlay,opacity:n?1:0,transition:"opacity ".concat(i?"1ms":"150ms"," ease"),zIndex:y.zIndex.overlay},"",""),onClick:r})}function ma(e){var n=e.scrollbarWidth;return o(Cn,{styles:b({html:{marginRight:n,scrollbarGutter:"auto"},body:{overflow:"hidden"}},"","")})}var nt,ga=f.forwardRef(function(n,t){var r=n.children;return o("div",{css:b({position:"fixed",top:0,left:0,bottom:0,right:0,backgroundColor:m.overlay,zIndex:y.zIndex.overlay,overflowY:"auto",animation:"".concat(va," ").concat(y.transition.duration,"ms ").concat(y.transition.timingFunction)},"",""),ref:t,children:r})}),va=jr(nt||(nt=Er([`
  0% { opacity: 0; }
  100% { opacity: 1; }
`]))),ba=function(n){var t=n.children,r=n.id;return o(k,{as:"h2","data-autofocus":!0,focusRingFor:"keyboard",fontSize:"lg",fontWeight:"bold",id:r,lineHeight:"heading",tabIndex:-1,children:t})},ya=function(){var n=ne();return{titleId:"modal-".concat(n,"-title")}},tt,Oa="45rem",Pa={name:"1duj7gx",styles:"align-self:flex-end"},xa={name:"xdvdnl",styles:"margin-top:auto"},wa=function(n){var t=n.actions,r=n.children,i=n.onClose,a=n.title,s=ya(),l=s.titleId;return o(Ln,{returnFocus:!0,children:u(j,{"aria-labelledby":l,"aria-modal":!0,background:"body",css:b(P({boxShadow:y.shadow.lg,position:"relative",margin:"0 auto",minHeight:"100vh",animation:"".concat(Ca," ").concat(y.transition.duration,"ms ").concat(y.transition.timingFunction),"@supports (min-height: 100dvh)":{minHeight:"100dvh"}},y.mediaQuery.min.sm,{borderRadius:y.borderRadius,margin:"".concat(D(6)," auto ").concat(D(1)),minHeight:"auto"}),"",""),gap:1,highContrastOutline:!0,maxWidth:Oa,paddingX:{xs:.75,md:1.5},paddingY:{xs:1,md:1.5},role:"dialog",children:[o(W,{"aria-label":"Close modal",css:Pa,iconAfter:fe,onClick:i,variant:"text",children:"Close"}),o(ba,{id:l,children:a}),o(M,{children:r}),t?o(M,{css:xa,paddingTop:1,children:t}):null]})})},Ca=jr(tt||(tt=Er([`
  0% { transform: translateY(1rem); }
	100% { transform: translateY(0); }
`]))),Jr=function(n){var t=n.actions,r=n.children,i=n.isOpen,a=i===void 0?!1:i,s=n.onClose,l=n.onDismiss,d=n.title,c=Zr(s,l);f.useEffect(function(){var v=function(g){a&&g.code==="Escape"&&(g.preventDefault(),g.stopPropagation(),c())};return window.addEventListener("keydown",v),function(){return window.removeEventListener("keydown",v)}},[c,a]);var p=Sn(a),h=p.modalContainerRef;return!a||!In()?null:An.createPortal(u(f.Fragment,{children:[o(Sa,{}),o(ga,{ref:h,children:o(wa,{actions:t,onClose:c,title:d,children:r})})]}),document.body)},ka={name:"1sy9iaq",styles:"body{overflow:hidden;}"},Sa=function(){return o(Cn,{styles:ka})};function Ia(e){var n,t,r=Array.from(e.matchAll(new RegExp(/(\p{L})\p{L}+/,"gu")));if(!r.length)return"?";var i=((n=r.shift())===null||n===void 0?void 0:n[1])||"",a=((t=r.pop())===null||t===void 0?void 0:t[1])||"";return(i+a).toUpperCase()}function eo(e){var n=e.name,t=e.tone,r=t===void 0?"neutral":t,i=e.size,a=i===void 0?"md":i,s=e["aria-hidden"],l=e["aria-label"],d=Ia(n),c=La[r],p=Ma[a],h=p.size,v=p.fontSize;return o(x,{alignItems:"center","aria-hidden":s,"aria-label":l,as:"span",css:b({textDecoration:"none",height:"".concat(h,"rem"),width:"".concat(h,"rem"),borderRadius:"50%",borderStyle:"solid",borderWidth:y.borderWidth.sm,borderColor:c,color:c},"",""),flexShrink:0,fontSize:v,fontWeight:"bold",justifyContent:"center",children:d})}var La={neutral:m.foregroundMuted,action:m.foregroundAction},Ma={sm:{fontSize:"xs",size:2},md:{fontSize:"sm",size:2.5},lg:{fontSize:"md",size:3},xl:{fontSize:"lg",size:4},xxl:{fontSize:"xl",size:4.5},xxxl:{fontSize:"xl",size:5}},no=f.createContext(void 0);function ge(){var e=f.useContext(no);if(e===void 0)throw new Error("`AppLayoutContext` not found.");return e}function Aa(e,n){var t=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=Da(e))||n){t&&(e=t);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(c){throw c},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a,s=!0,l=!1;return{s:function(){t=t.call(e)},n:function(){var c=t.next();return s=c.done,c},e:function(c){l=!0,a=c},f:function(){try{s||t.return==null||t.return()}finally{if(l)throw a}}}}function Da(e,n){if(e){if(typeof e=="string")return rt(e,n);var t={}.toString.call(e).slice(8,-1);return t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set"?Array.from(e):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?rt(e,n):void 0}}function rt(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=Array(n);t<n;t++)r[t]=e[t];return r}var z="xl",jn="16rem",ja=function(n,t){if(!t)return"";var r=n.flatMap(function(c){return Array.isArray(c)?c:[c].concat($n(c.items))}).flatMap(function(c){return"items"in c&&c.items!==void 0?[c].concat($n(c.items)):c}).map(function(c){return c&&"href"in c&&c.href!==void 0?c.href:""}),i,a="",s=Aa(r),l;try{for(s.s();!(l=s.n()).done;){var d=l.value;if(d===t){i=d;break}t!=null&&t.startsWith(d)&&d.length>a.length&&(a=d)}}catch(c){s.e(c)}finally{s.f()}return i||a};function Ba(e){var n=e.children,t=e.focusMode,r=t===void 0?!1:t,i=pn(!1),a=Do(i,3),s=a[0],l=a[1],d=a[2];return o(no.Provider,{value:{focusMode:r,isMobileMenuOpen:s,openMobileMenu:l,closeMobileMenu:d},children:o(Ea,{focusMode:r,children:n})})}function Ea(e){var n=e.children,t=e.focusMode;return o("div",{css:ae({display:"grid",minHeight:"100vh",gridTemplateRows:"auto 1fr",gridTemplateColumns:Dr(P({xs:"1fr"},z,t?"1fr":"".concat(jn," 1fr")))}),children:n})}function ot(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function de(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?ot(Object(t),!0).forEach(function(r){P(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ot(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var le=1.5,hn="3.75rem",Ra={name:"1kn4ch8",styles:"margin-left:-0.5rem;margin-right:-0.5rem;overflow:hidden"};function Ta(e){var n=e.badgeLabel,t=e.dividerPosition,r=e.logo,i=e.heading,a=e.hasAccountDetails,s=e.href,l=e.secondHref,d=e.secondLogo,c=e.subLine,p=Dn();return r&&d?u(x,{css:Ra,flexDirection:{xs:"column",lg:"row"},flexWrap:{xs:"wrap",xl:"nowrap"},gap:{xs:1,md:le},inline:!0,padding:.5,children:[u(x,{css:b({marginRight:a&&t==="after"?D(le):0},"",""),flexDirection:{xs:"column",sm:"row"},flexShrink:0,gap:le,children:[o(x,{alignSelf:{xs:"start",sm:"center"},as:p,color:"text",css:b(de({" img, svg":{height:hn}},L.print.hidden),"",""),focusRingFor:"keyboard",href:s,children:r}),t==="between"&&o(an,{dividerPosition:t}),o(x,de(de({alignSelf:{xs:"start",sm:"center"},as:l?p:"span",color:"text",css:b(de({" img, svg":{width:"100%"}},L.print.hidden),"",""),focusRingFor:"keyboard"},l&&{href:l}),{},{children:d}))]}),u(x,{css:t==="after"?P({},y.mediaQuery.min.lg,{marginLeft:"calc(-".concat(a?D(le):0," - ").concat(y.borderWidth.sm,"px)")}):void 0,gap:le,children:[t==="after"&&o(an,{dividerPosition:t}),u(j,{as:p,color:"text",css:b({textDecoration:"none",":hover":L.underline},"",""),focusRingFor:"keyboard",href:s,justifyContent:"center",children:[u(x,{alignItems:"flex-start",gap:.5,children:[o(k,{fontSize:"lg",fontWeight:"bold",children:i}),n&&o(it,{children:n})]}),c&&o(k,{color:"muted",fontSize:"xs",children:c})]})]})]}):u(x,{alignItems:{xs:"flex-start",md:"center"},as:p,color:"text",css:b({textDecoration:"none","&:hover":L.underline,svg:{display:"block",height:hn,flexShrink:0}},"",""),flexDirection:{xs:"column",md:"row"},focusRingFor:"keyboard",gap:{xs:1,md:0},href:s,paddingY:.5,children:[r,o(an,{singleLogo:!0}),u(x,{alignItems:"flex-start",flexDirection:"column",justifyContent:"center",maxWidth:y.maxWidth.bodyText,children:[u(x,{alignItems:"flex-start",gap:.5,children:[o(k,{fontSize:"lg",fontWeight:"bold",children:i}),n&&o(it,{children:n})]}),c&&o(k,{color:"muted",fontSize:"xs",children:c})]})]})}function it(e){var n=e.children;return o(M,{border:!0,borderWidth:"md",css:b({fontSize:"0.75rem",paddingTop:"2px",paddingBottom:"2px",borderColor:m.foregroundText,borderRadius:"2em"},"",""),fontWeight:"bold",paddingLeft:.5,paddingRight:.5,children:n})}var an=function(n){var t=n.dividerPosition,r=n.singleLogo;return o(M,{borderLeft:!0,css:b(de({margin:r?"0 1rem":void 0},L.print.hidden),"",""),display:r?{xs:"none",md:"block"}:{xs:"none",sm:t==="between"?"block":void 0,lg:"block"},height:r?hn:void 0})},Fa=["ref"];function at(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function st(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?at(Object(t),!0).forEach(function(r){P(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):at(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function Na(e){var n=e.children,t=e.name,r=e.avatarName,i=e.secondaryText;return u(Wo,{popoverOffset:-8,popoverPlacement:"bottom-end",children:[o(Wa,{avatarName:r,name:t,secondaryText:i}),n]})}var $a={name:"d3v9zr",styles:"overflow:hidden"},za={name:"d3v9zr",styles:"overflow:hidden"},_a={name:"ozd7xs",styles:"flex-shrink:0"};function Wa(e){var n=e.name,t=e.avatarName,r=e.secondaryText,i=qo(),a=i.isMenuOpen,s=Go(),l=s.ref,d=q(s,Fa),c=f.useRef(0),p=Xe("sm");return f.useEffect(function(){c.current=window.innerWidth-document.documentElement.offsetWidth},[]),u(x,st(st({as:Qe,ref:l},d),{},{alignItems:"center",background:a?"shade":void 0,color:"action",css:ae({marginLeft:"auto",maxWidth:"calc(17.625rem - ".concat(c.current,"px)"),overflow:"hidden",svg:{transform:a?"rotate(180deg)":void 0,transition:p.transition},":hover":{backgroundColor:m.backgroundShade,"& > span:last-of-type > span:last-of-type":L.underline,svg:{transform:a?"rotate(180deg) ".concat(p.transform):p.transform}}}),focusRingFor:"keyboard",gap:1,justifyContent:"space-between",minHeight:"5.25rem",padding:1,children:[o(Rr,{children:"Account menu"}),u(x,{alignItems:"center","aria-hidden":!0,as:"span",css:$a,gap:.5,width:"100%",children:[o(eo,{name:t??n,size:"md",tone:"action"}),u(x,{as:"span",css:za,flexDirection:"column",width:"100%",children:[o(k,{color:"action",css:L.truncate,fontSize:"xs",fontWeight:"bold",children:n}),r?o(k,{color:"muted",css:L.truncate,fontSize:"xs",children:r}):null]})]}),o(Nr,{css:_a,size:"sm",weight:"bold"})]}))}function lt(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function sn(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?lt(Object(t),!0).forEach(function(r){P(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):lt(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var qa={name:"d3v9zr",styles:"overflow:hidden"};function to(e){var n=e.name,t=e.avatarName,r=e.secondaryText,i=e.href,a=e.dropdown,s=Dn(),l=f.useRef(0);if(f.useEffect(function(){l.current=window.innerWidth-document.documentElement.offsetWidth},[]),a)return o(Na,{avatarName:t,name:n,secondaryText:r,children:a});var d=!!i;return u(x,sn(sn({as:"span"},d&&{as:s,href:i,focusRingFor:"keyboard"}),{},{alignItems:"center",css:ae(sn({marginLeft:"auto",maxWidth:"calc(17.625rem - ".concat(l.current,"px)"),textDecoration:"none"},d&&{"&:hover":{"& > span > span":{textDecoration:"underline"}}})),flexShrink:0,gap:.5,minHeight:"5.25rem",textAlign:"right",children:[u(x,{as:"span",css:qa,flexDirection:"column",children:[o(k,{color:"action",css:L.truncate,fontSize:"xs",fontWeight:"bold",children:n}),r?o(k,{color:"muted",css:L.truncate,fontSize:"xs",children:r}):null]}),o(eo,{"aria-hidden":!0,name:n,size:"md",tone:"action"})]}))}function ct(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function Ga(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?ct(Object(t),!0).forEach(function(r){P(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ct(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function Ha(e){var n=e.accountDetails,t=ge(),r=t.focusMode,i=t.openMobileMenu;return u(x,{alignItems:"center",background:"body",display:P({xs:"flex"},z,"none"),flexWrap:"wrap",justifyContent:r?"flex-end":"space-between",paddingLeft:.75,paddingRight:n!=null&&n.dropdown?.75:y.containerPadding,children:[r?null:o(Ua,{onClick:i}),n?o(to,Ga({},n)):null]})}function Ua(e){var n=e.onClick,t=ge(),r=t.isMobileMenuOpen,i=Xe();return u(x,{alignItems:"center","aria-expanded":r,"aria-haspopup":"dialog",as:Qe,color:"action",css:b({svg:{transition:i.transition},"&:hover":{backgroundColor:m.backgroundShade,textDecoration:"underline",svg:{transform:i.transform}}},"",""),flexDirection:"column",focusRingFor:"keyboard",fontSize:"xs",gap:.5,justifyContent:"center",minHeight:"5.25rem",onClick:n,paddingX:1,children:[o(Vo,{"aria-hidden":!0}),o("span",{children:"Menu"})]})}function dt(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function Ya(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?dt(Object(t),!0).forEach(function(r){P(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):dt(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function Ka(e){var n=e.accountDetails,t=e.background,r=t===void 0?"bodyAlt":t,i=e.badgeLabel,a=e.borderColor,s=a===void 0?"accent":a,l=e.dividerPosition,d=l===void 0?"after":l,c=e.heading,p=e.href,h=e.id,v=e.logo,w=e.palette,g=w===void 0?"dark":w,O=e.secondHref,C=e.secondLogo,I=e.subLine,S=e.statusIndicator;return u(x,{as:"header",borderBottom:!0,borderBottomWidth:"xxl",borderColor:s,css:b(P({},y.mediaQuery.min[z],{gridColumnStart:1,gridColumnEnd:3}),"",""),flexDirection:"column",id:h,palette:g,children:[u(x,{alignItems:"center",background:r,gap:1,justifyContent:"space-between",paddingX:y.containerPadding,paddingY:.5,width:"100%",children:[o(Ta,{badgeLabel:i,dividerPosition:d,hasAccountDetails:!!n,heading:c,href:p,logo:v,secondHref:O,secondLogo:C,subLine:I}),u(x,{alignItems:"center",alignSelf:P({xs:"start"},z,"center"),gap:1,paddingTop:P({xs:.5},z,0),children:[S||null,o(M,{display:P({xs:"none"},z,"flex"),children:n?o(to,Ya({},n)):null})]})]}),o(Ha,{accountDetails:n})]})}var Qa=["endElement","icon","isActive","items","label","level"];function ut(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function R(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?ut(Object(t),!0).forEach(function(r){P(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ut(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var Xa=function e(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return function(r){var i,a,s="href"in r&&r.href===n,l=s||Bn(r.items,n);return R(R({},r),{},{isActive:l,items:l||(i=r.items)!==null&&i!==void 0&&i.length?r==null||(a=r.items)===null||a===void 0?void 0:a.map(e(n,t+1)):void 0,level:t+1})}},pt=function(n){var t=n.activePath,r=n.background,i=n.items,a=n.subLevelVisible;return o(j,{"aria-label":"main",as:"nav",paddingBottom:1.5,children:o(j,{as:"ul",children:i.map(function(s,l){var d,c,p=l===0,h=(Array.isArray(s)?s:s.items).map(Xa(t)),v=Array.isArray(s)?!1:!!(!((d=s.options)===null||d===void 0)&&d.disableGroupPadding),w=i[l-1],g=w?Array.isArray(w)?!1:!!(!((c=w.options)===null||c===void 0)&&c.disableGroupPadding):!1;return u(f.Fragment,{children:[p?null:o(Za,{disablePaddingBottom:v,disablePaddingTop:g}),h.map(function(O,C){var I=Bn(O.items,t),S=a==="always"||I;return o(ro,{activePath:t,background:r,isActiveGroup:I,isOpen:S,item:O,subLevelVisible:a},C)})]},l)})})})},Va={name:"1ff36h2",styles:"flex-grow:1"};function ro(e){var n=e.activePath,t=e.background,r=e.isActiveGroup,i=e.isOpen,a=e.item,s=e.subLevelVisible,l=Dn(),d=a.endElement,c=a.icon,p=a.isActive,h=a.items,v=a.label,w=a.level,g=q(a,Qa),O=ge(),C=O.closeMobileMenu,I=(h==null?void 0:h.length)||0,S=I>0&&s!=="always";if("href"in a){var B,E,H,U=a.href===n;return u(ln,{background:t,hasEndElement:!!d,isActive:r,isCurrentPage:U,isOpen:i,level:a.level,onClick:C,children:[u(l,R(R({"aria-current":U?"page":void 0,"aria-label":S?"".concat(v).concat(p?", has expanded sub links":", has sub links"):void 0},g),{},{children:[c&&w===1&&o(c,{color:"inherit"}),w===2&&o("span",{"aria-hidden":!0,children:"–"}),o("span",{css:Va,children:v}),d,S&&o(Zo,{css:b({transform:p?"rotate(90deg)":void 0},"",""),size:"md"})]})),!!(!((B=a.items)===null||B===void 0)&&B.length)&&(i||U)&&o(j,{as:"ul",children:(E=a.items)===null||E===void 0||(H=E.map)===null||H===void 0?void 0:H.call(E,function(Y){var _;return o(ro,{activePath:n,background:t,isActiveGroup:!!p,isOpen:i,item:Y,subLevelVisible:s},(_=Y.label)===null||_===void 0?void 0:_.toString())})})]})}return"onClick"in a?o(ln,{background:t,hasEndElement:!!d,isActive:!1,isCurrentPage:!1,isOpen:!1,onClick:C,children:u(Qe,R(R({},g),{},{children:[c?o(c,{color:"inherit"}):null,o("span",{children:v}),d]}))}):o(ln,{background:t,hasEndElement:!1,isActive:!1,isCurrentPage:!1,isOpen:!1,children:o(j,{as:"span",gap:.25,children:v})})}function ln(e){var n=e.background,t=e.children,r=e.hasEndElement,i=e.isCurrentPage,a=e.isActive,s=e.isOpen,l=e.level,d=e.onClick;return o("li",{css:b({"> a, > button, > span":{width:"100%",boxSizing:"border-box",wordBreak:"break-word",paddingTop:D(1),paddingBottom:D(1),paddingLeft:D(l===2?3:1.5),paddingRight:D(1),"& > svg":{flexShrink:0}},"> a, > button":R(R(R(R({position:"relative",display:"flex",alignItems:"center",gap:D(.75),color:a&&l!==2||i?m.foregroundText:m.foregroundAction},(a||i||s)&&{fontWeight:i?y.fontWeight.bold:y.fontWeight.normal,background:i?m.selectedMuted:void 0,"&::before":R(R(R({content:"''",position:"absolute",top:0,left:0,bottom:0,borderLeftStyle:"solid",borderLeftWidth:y.borderWidth.xl},i&&{borderLeftColor:m.selected}),!i&&a&&{borderLeftColor:m.borderMuted}),!i&&!a&&s&&{borderLeft:"none"})}),r&&{"& > :last-child":{marginLeft:"auto"}}),{},{"&:hover":P({background:m[n==="body"?"backgroundShade":"backgroundShadeAlt"],color:m.foregroundText},"& > span:nth-of-type(".concat(l,")"),L.underline)},jo),{},{":focus-visible":{zIndex:y.zIndex.elevated,outlineOffset:"-".concat(L.outline.outlineWidth),"&::before":{zIndex:-1}}}),"> span":{color:m.foregroundText},"> a":{textDecoration:"none"}},"",""),onClick:d,children:t})}function Za(e){var n=e.disablePaddingTop,t=e.disablePaddingBottom;return o(M,{"aria-hidden":!0,as:"li",paddingBottom:t?0:1,paddingTop:n?0:1,children:o("hr",{css:b({boxSizing:"content-box",height:0,margin:0,overflow:"visible",border:"none",borderTopWidth:y.borderWidth.sm,borderTopStyle:"solid",borderColor:m.borderMuted,width:"100%"},"","")})})}function Bn(e,n){return e!=null&&e.length&&n?e.some(function(t){return"href"in t&&t.href===n||"items"in t&&Bn(t.items,n)}):!1}var Ja={name:"qvn77x",styles:"inset:0;overflow-y:auto;position:fixed"};function es(e){var n=e.children,t=e.palette,r=ge(),i=r.isMobileMenuOpen,a=r.closeMobileMenu,s=Gr(),l=f.useState(!0),d=l[0],c=l[1],p=Vr();f.useEffect(function(){i&&c(!1)},[i]),f.useEffect(function(){var g=function(C){C.code==="Escape"&&(C.preventDefault(),C.stopPropagation(),a())};return window.addEventListener("keydown",g),function(){return window.removeEventListener("keydown",g)}},[a]);var h=Sn(p?i:!1),v=h.modalContainerRef;if(!p||!In())return null;var w=i?!0:!d;return An.createPortal(u(Br,{children:[i&&o(ns,{}),u("div",{ref:v,children:[o("div",{css:b({pointerEvents:"none",position:"absolute",opacity:i?1:0,transition:i?"none":"opacity ".concat(s?"1ms":"150ms")},"",""),"data-app-layout-sidebar":"transitioner",onTransitionEnd:function(){c(!0)}}),o(ts,{isOpen:i,onClick:a,prefersReducedMotion:s}),o(M,{css:b({bottom:0,left:0,position:"fixed",top:0,transform:"translateX(".concat(i?"0":"-100%",")"),transition:"transform ".concat(s?"1ms":"150ms"," ease"),zIndex:y.zIndex.dialog},"",""),display:P({},z,"none"),width:jn,children:w&&o(Ln,{returnFocus:!0,children:u(M,{"aria-label":"Menu","aria-modal":!0,background:"shade",css:Ja,display:P({},z,"none"),palette:t,role:"dialog",children:[o(rs,{onClick:a}),n]})})})]})]}),document.body)}function ns(){return o(Cn,{styles:b(P({body:{overflow:"hidden"}},y.mediaQuery.min[z],{body:{overflow:"unset"}}),"","")})}function ts(e){var n=e.isOpen,t=e.onClick,r=e.prefersReducedMotion;return o("div",{css:b(P({backgroundColor:m.overlay,display:"block",inset:0,opacity:n?1:0,pointerEvents:n?"all":"none",position:"fixed",transition:"opacity ".concat(r?"1ms":"150ms"," ease"),zIndex:y.zIndex.overlay},y.mediaQuery.min[z],{display:"none"}),"",""),onClick:t})}function rs(e){var n=e.onClick,t=Xe();return o(x,{alignItems:"center",borderBottom:!0,borderColor:"muted",flexShrink:0,paddingLeft:1,children:u(x,{alignItems:"center",as:Qe,color:"action",css:b({svg:{transition:t.transition},":focus":{outlineOffset:"-".concat(L.outline.outlineWidth)},":hover svg":{transform:t.transform}},"",""),flexDirection:"column",focusRingFor:"keyboard",fontSize:"xs",gap:.5,onClick:n,padding:1,children:[o(fe,{}),o("span",{"aria-hidden":!0,children:"Close"}),o(Rr,{children:"Close menu"})]})})}function ft(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function ye(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?ft(Object(t),!0).forEach(function(r){P(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ft(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function ht(e){var n=e.activePath,t=e.background,r=t===void 0?"bodyAlt":t,i=e.items,a=e.palette,s=e.subLevelVisible,l=s===void 0?"whenActive":s,d=ge(),c=d.focusMode,p=ja(i,n),h={activePath:p,items:i,subLevelVisible:l};return u(f.Fragment,{children:[o(j,{background:r,borderColor:"muted",borderRight:!0,css:b(P({display:"none",width:jn},y.mediaQuery.min[z],{display:c?"none":"flex"}),"",""),flexGrow:1,gap:1,palette:a,children:o(pt,ye(ye({},h),{},{background:r}))}),o(es,{palette:a,children:o(pt,ye(ye({},h),{},{background:"bodyAlt"}))})]})}var os={name:"ovk77c",styles:"min-width:0"};function is(e){var n=e.children;return o(x,{css:os,flexDirection:"column",children:n})}var as={name:"xdvdnl",styles:"margin-top:auto"};function ss(e){var n=e.background,t=n===void 0?"body":n,r=e.children,i=e.id,a=e.maxWidth,s=e.palette;return o(M,{as:"footer",background:t,css:as,id:i,palette:s,children:o(No,{maxWidth:a,children:o(j,{borderColor:"muted",borderTop:!0,borderTopWidth:"xl",gap:1.5,paddingY:3,width:"100%",children:r})})})}function ls(){return o("hr",{"aria-hidden":!0,css:b({boxSizing:"content-box",height:0,margin:0,overflow:"visible",border:"none",borderTopWidth:1,borderTopStyle:"solid",borderColor:m.borderMuted,width:"100%"},"","")})}const oo=(e,n)=>{const{domain:t}=n;return e.kind==="standalone"?e.url:typeof t=="function"?t(e):`https://${e.subdomain}.${t}${e.path}`},cs=e=>n=>{const t={};return Object.entries(e).forEach(([r,i])=>{t[r]=oo(i,{domain:n})}),t},mn=e=>n=>({kind:"scoped",subdomain:e,path:n}),ds=e=>({kind:"standalone",url:e}),us=(()=>{const e=mn("exports"),n=mn("services"),t=ds,r={account:n("/account"),profile:n("/account/profile"),people:n("/account/exports/manage-people"),dashboard:n("/account/exports/dashboard"),exportsHub:n("/account/exports"),importsHub:n("/account/imports"),about:n("/about"),contactUs:n("/about/contact-us"),help:n("/help"),privacy:n("/privacy"),whatsNew:n("/whats-new"),accessibility:t("https://www.agriculture.gov.au/about/commitment/accessibility"),disclaimer:t("https://www.agriculture.gov.au/about/disclaimer"),establishments:e("/establishments"),intelligence:e("/intelligence"),compliance:e("/compliance"),quotas:e("/quota"),exportSystems:e("/export-systems"),licences:e("/licences"),invoices:e("/inexs")};return cs(r)})(),ps=_o(u(f.Fragment,{children:[o("path",{d:"M4 2V22L6 21L8 22L10 21L12 22L14 21L16 22L18 21L20 22V2L18 3L16 2L14 3L12 2L10 3L8 2L6 3L4 2Z"}),o("path",{d:"M16 8H10C9.46957 8 8.96086 8.21071 8.58579 8.58579C8.21071 8.96086 8 9.46957 8 10C8 10.5304 8.21071 11.0391 8.58579 11.4142C8.96086 11.7893 9.46957 12 10 12H14C14.5304 12 15.0391 12.2107 15.4142 12.5858C15.7893 12.9609 16 13.4696 16 14C16 14.5304 15.7893 15.0391 15.4142 15.4142C15.0391 15.7893 14.5304 16 14 16H8"}),o("path",{d:"M12 17.5V6.5"})]}),"PaymentIcon"),fs=e=>({dashboard:{label:"Dashboard",icon:Wr,href:e.dashboard},people:{label:"People",icon:oi,href:e.people},establishments:{label:"Establishments",icon:Mn,href:e.establishments},intelligence:{label:"Data and Insights",icon:ri,href:e.intelligence},compliance:{label:"Compliance",icon:ti,href:e.compliance},quotas:{label:"Quotas",icon:_r,href:e.quotas},exportSystems:{label:"Export systems",icon:ni,href:e.exportSystems},licences:{label:"Licences",icon:ei,href:e.licences},invoices:{label:"Invoices and payments",icon:ps,href:e.invoices}}),io=e=>{var t,r,i,a,s,l;const n=fs(e.routes);return[n.dashboard,...(t=e==null?void 0:e.features)!=null&&t.people?[n.people]:[],n.establishments,n.intelligence,n.compliance,...(r=e==null?void 0:e.features)!=null&&r.quotas?[n.quotas]:[],...((i=e==null?void 0:e.features)==null?void 0:i.exportSystems)??((a=e==null?void 0:e.features)==null?void 0:a.exportDocumentation)?[n.exportSystems]:[],...(s=e==null?void 0:e.features)!=null&&s.licences?[n.licences]:[],...(l=e==null?void 0:e.features)!=null&&l.invoices?[n.invoices]:[]]},hs=e=>[{href:e.about,label:"About"},{href:e.contactUs,label:"Contact us"},{href:e.help,label:"Help"},{href:e.whatsNew,label:"What's new"},{href:e.accessibility,rel:"external",label:"Accessibility"},{href:e.disclaimer,rel:"external",label:"Disclaimer"},{href:e.privacy,label:"Privacy"}],ms=({onSignOutClick:e,features:n,routes:t})=>[io({features:n,routes:t}),[{label:u(x,{as:"span",alignItems:"center",gap:.5,children:["Help",o(zo,{}),o(Jo,{weight:"regular",size:"sm"})]}),icon:$r,href:t.help,target:"_blank",rel:"noopener"}],[{label:"Sign out",onClick:e,icon:zr}]],gs=(e,n)=>{var i;if(!n)return;let t,r;for(const a of e){if(a.href===n){t=a;break}n.startsWith(a.href)&&a.href.length>(((i=r==null?void 0:r.href)==null?void 0:i.length)??0)&&(r=a)}return t||r},vs=e=>{const n=a=>{var l;const s=((l=e==null?void 0:e.linkedBusinesses)==null?void 0:l.flatMap(d=>{var c;return ao(d)===a?{...d,selected:((c=e==null?void 0:e.selectedBusiness)==null?void 0:c.partyId)===d.partyId,setSelected:()=>e.setSelectedBusiness(d)}:[]}))??[];return{category:a,businesses:s}},r=["export","import"].map(n),i=r.reduce((a,s)=>a+s.businesses.length,0);return{options:r,exists:i>0}},bs=new Set(["MANAGER","PRINCIPAL_AUTHORITY_OWNER","USER"]),ys=e=>e!=null&&e.roleName?bs.has(e.roleName):!1,ao=e=>(e==null?void 0:e.roleGroupName)==="BIOSECURITY"?"import":"export",Os={export:"Export",import:"Import"},so=e=>Os[e],Ps=e=>e.businesses.length===0?null:u(Ko,{label:`${so(e.category)} businesses`,children:[e.businesses.slice(0,3).map(n=>o(Yo,{checked:n.selected??!1,secondaryText:n.formattedPartyExternalId,onClick:e.onSelectBusiness(n),children:n.partyDisplayName},n.partyId)),e.businesses.length>3?u(ce,{href:e.category==="import"?e.routes.importsHub:e.routes.exportsHub,endElement:o(qr,{}),children:["View all ",e.category," businesses"]}):null]}),xs=e=>{const n=i=>()=>{var a;return(a=i==null?void 0:i.setSelected)==null?void 0:a.call(i)},{options:t,exists:r}=vs(e.businessDetails);return u(Uo,{palette:"light",children:[t.map(i=>o(Ps,{businesses:i.businesses,onSelectBusiness:n,category:i.category,routes:e.routes},i.category)),r&&o(zn,{}),o(ce,{href:e.routes.account,icon:ai,children:"Home"}),o(ce,{href:e.routes.exportsHub,icon:si,children:"Export"}),o(ce,{href:e.routes.importsHub,icon:li,children:"Import and biosecurity"}),o(ce,{href:e.routes.profile,icon:ci,children:"Profile and settings"}),o(zn,{}),o(Ho,{onClick:e.onSignOutClick,icon:zr,children:"Sign out"})]})},ws=e=>{var n;return((n=e==null?void 0:e.details)==null?void 0:n.selectedBusiness)===void 0?[]:[{options:{disableGroupPadding:!0},items:[{label:"Back to export",icon:ii,href:e.routes.exportsHub}]},{options:{disableGroupPadding:!0},items:[{label:u(f.Fragment,{children:[o(k,{fontWeight:"bold",fontSize:"xs",children:e.details.selectedBusiness.partyDisplayName}),u(k,{color:"muted",fontSize:"xs",children:["ABN:"," ",e.details.selectedBusiness.formattedPartyExternalId]})]})}]}]},Cs=e=>{var n;return e.selectedBusiness?{...e==null?void 0:e.features,people:((n=e==null?void 0:e.features)==null?void 0:n.people)??ys(e.selectedBusiness)}:e.features};var ks=["children"],Ss=["as","children","direction","className"];function mt(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function Ge(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?mt(Object(t),!0).forEach(function(r){P(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):mt(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var lo=function(n){var t=n.children,r=q(n,ks);return o(Is,Ge(Ge({as:qe},r),{},{children:t}))},Is=function(n){var t=n.as,r=n.children,i=n.direction,a=n.className,s=q(n,Ss),l=Ls[i],d=i==="left",c=Xe("sm");return u(x,Ge(Ge({alignItems:"center",as:t,className:a,css:b({alignSelf:"flex-start",svg:{transition:c.transition},":hover svg":{transform:c.transform}},"",""),focusRingFor:"keyboard",fontFamily:"body",fontWeight:"normal",gap:.5,inline:!0,link:!0},s),{},{children:[d?o(l,{size:"sm"}):null,r,d?null:o(l,{size:"sm"})]}))},Ls={up:pi,right:qr,down:ui,left:di};function Ms(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.focusOnMount,t=e.focusOnUpdate,r=e.forwardedRef,i=f.useRef(null),a=r||i;return f.useEffect(function(){var s,l;!t&&!n||!("current"in a)||Array.isArray(t)&&t.filter(Boolean).length===0||a==null||(s=a.current)===null||s===void 0||(l=s.focus)===null||l===void 0||l.call(s)},[t]),a}var As=function(n){var t=n.as,r=t===void 0?"h2":t,i=n.children,a=n.hasDismissButton,s=n.hasCloseButton;return o(k,{as:r,css:ae(P({marginRight:s||a?"2.5rem":void 0},y.mediaQuery.min.sm,{marginRight:"0"})),fontSize:"lg",fontWeight:"bold",lineHeight:"heading",children:i})},Ds=function(n){var t,r=n.onClick;return o(W,{"aria-label":"Close",css:ae((t={position:"absolute",top:"1.5rem",right:"1.5rem",flexShrink:0},P(t,y.mediaQuery.min.sm,{position:"relative",top:"unset",right:"unset"}),P(t,"& > span:first-of-type",P({display:"none"},y.mediaQuery.min.sm,{display:"block"})),t)),iconAfter:fe,onClick:r,variant:"text",children:"Close"})};function gt(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function js(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?gt(Object(t),!0).forEach(function(r){P(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):gt(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var Bs=f.forwardRef(function(n,t){var r=n.id,i=n.focusOnMount,a=n.focusOnUpdate,s=n.role,l=n.children,d=n.onClose,c=n.onDismiss,p=n.title,h=n.tone,v=n.tabIndex,w=Ms({focusOnMount:i,focusOnUpdate:a,forwardedRef:t}),g=ta(d,c),O=Es[h],C=O.fg,I=O.bg,S=O.icon;return u(x,{css:b({backgroundColor:I,position:"relative"},"",""),focusRingFor:"all",highContrastOutline:!0,id:r,ref:w,role:s,rounded:!0,tabIndex:v??(i||a?-1:void 0),children:[o(x,{alignItems:"center",css:b(js({borderTopLeftRadius:y.borderRadius,borderBottomLeftRadius:y.borderRadius,backgroundColor:C,color:m.backgroundBody},Bo.exactColor),"",""),padding:.5,children:S}),u(x,{alignItems:"flex-start",css:b(P({marginRight:g&&!p?"3rem":void 0},y.mediaQuery.min.sm,{marginRight:"0"}),"",""),flexGrow:1,gap:1,padding:1.5,children:[u(x,{alignItems:"flex-start",flexDirection:"column",flexGrow:1,gap:1,children:[p?f.isValidElement(p)?p:o(As,{hasCloseButton:!!g,children:p}):null,l]}),g?o(Ds,{onClick:g}):null]})]})}),Es={success:{fg:m.systemSuccess,bg:m.systemSuccessMuted,icon:o(mi,{"aria-hidden":"false","aria-label":"Success"})},error:{fg:m.systemError,bg:m.systemErrorMuted,icon:o(Fr,{"aria-hidden":"false","aria-label":"Error"})},info:{fg:m.systemInfo,bg:m.systemInfoMuted,icon:o(hi,{"aria-hidden":"false","aria-label":"Information"})},warning:{fg:m.systemWarning,bg:m.systemWarningMuted,icon:o(fi,{"aria-hidden":"false","aria-label":"Warning"})}};const Rs=["IP1","IP2","IP3","IP4"],co=Array.from(Rs),Ts=e=>{const n=[];return e.forEach(t=>n.unshift(t)),n},gn=new Set(co),vt=new Set(Ts(co)),Fs={descriptor:"Unknown"},Ns={IP1:{level:"IP1",descriptor:"Basic"},IP2:{level:"IP2",descriptor:"Standard"},IP3:{level:"IP3",descriptor:"Strong"},IP4:{level:"IP4",descriptor:"Strong"}},$s=e=>gn.has(e),He=(e,n)=>{const t=e&&$s(e)?Ns[e]:Fs;return n!=null&&n.short||t.level===void 0?t.descriptor:`${t.descriptor} (${t.level})`},uo=(e,n)=>Array.from(e).filter(t=>n.has(t)),po=(e,n)=>Array.from(e).filter(t=>!n.has(t)),ue=e=>{const n=new Set(e??[]);return[...uo(vt,n),...po(n,vt)][0]},fo=e=>{const n=new Set(e??[]);return[...uo(gn,n),...po(n,gn)][0]},bt=e=>e===void 0?[]:Array.isArray(e)?e:[e],zs=(e,n)=>{if(n===void 0||e.length===0)return!0;const t=new Set(n);return e.some(r=>t.has(r))},yt=e=>((e==null?void 0:e.trim())??"")==="",ho=()=>o(re,{children:u(yi,{title:"Need more help?",children:[u(k,{children:["Email"," ",o(qe,{href:"mailto:exportservice@aff.gov.au",children:"exportservice@aff.gov.au"})]}),u(k,{children:["Call ",o(qe,{href:"tel:1800571125",children:"1800 571 125"}),", Monday to Friday, 9 am to 5 pm AEST"]})]})}),_s=e=>o(N,{children:u(j,{gap:3,children:[o(re,{children:o(lo,{href:e.routes.dashboard,direction:"left",children:"Back to Dashboard"})}),u(G,{children:[o("h1",{children:"Single names in TradeClear"}),o("p",{children:"If you are legally known by a single name, you can use it to access a TradeClear account. Other services we offer may not accept a single name and you will need to use a given and family name."}),o("p",{children:"Contact support if you need more help."})]}),o(Tr,{}),o(ho,{})]})}),Ws=e=>{const n=He(e.providedProofingLevel),t=He(e.requiredProofingLevel,{short:!0});return o(N,{children:u(j,{gap:3,children:[o(re,{children:o(lo,{href:e.routes.dashboard,direction:"left",children:"Back"})}),u(G,{children:[o("h1",{children:e.activeApp??"Use a higher identity strength"}),o(M,{className:Eo,children:u(Bs,{tone:"info",title:"You can't access this feature",children:["Sign in with myID and use a ‘",t,"’ identity strength or higher to access this feature."]})}),o("h2",{children:"Review your profile and settings"}),u("p",{children:["Your current identity strength is ",n,". To access this feature you must add myID to your account from your"," ",o(qe,{href:e.routes.profile,children:"Profile and settings"}),", then sign in."]})]}),o(Tr,{}),o(ho,{})]})})},mo={MissingName:_s,ProofMissing:Ws},qs=({claims:e,errorComponents:n,requiredProofingLevel:t,authDetails:r,activeApp:i,children:a,routes:s})=>{const l=n.MissingGivenName??n.MissingName,d=n.MissingFamilyName??n.MissingName,c=n.ProofMissing,p=bt(t),h=bt(r==null?void 0:r.proofingLevel);if(!zs(p,h)){const v=fo(p),w=ue(h);return o(c,{requiredProofingLevel:v,providedProofingLevel:w,activeApp:i,routes:s})}return e===void 0?o(f.Fragment,{children:a}):yt(e==null?void 0:e.given_name)?o(l,{routes:s,children:a}):yt(e==null?void 0:e.family_name)?o(d,{routes:s,children:a}):o(f.Fragment,{children:a})},Gs=Object.values,Hs={IP1:{AL1:"urn:id.gov.au:tdif:acr:ip1:cl1",AL2:"urn:id.gov.au:tdif:acr:ip1:cl2",AL3:"urn:id.gov.au:tdif:acr:ip1:cl3",PlusAL1:"urn:id.gov.au:tdif:acr:ip1p:cl1",PlusAL2:"urn:id.gov.au:tdif:acr:ip1p:cl2",PlusAL3:"urn:id.gov.au:tdif:acr:ip1p:cl3"},IP2:{AL2:"urn:id.gov.au:tdif:acr:ip2:cl2",AL3:"urn:id.gov.au:tdif:acr:ip2:cl3",PlusAL2:"urn:id.gov.au:tdif:acr:ip2p:cl2",PlusAL3:"urn:id.gov.au:tdif:acr:ip2p:cl3"},IP3:{AL2:"urn:id.gov.au:tdif:acr:ip3:cl2",AL3:"urn:id.gov.au:tdif:acr:ip3:cl3"},IP4:{AL3:"urn:id.gov.au:tdif:acr:ip4:cl3"}},Us=["IP1","IP2","IP3","IP4"],Ys=Object.fromEntries(Us.map((e,n,t)=>[e,t.slice(0,n)])),Oe=e=>Object.fromEntries(Gs(Hs[e]).map(n=>[n,e])),vn={...Oe("IP1"),...Oe("IP2"),...Oe("IP3"),...Oe("IP4")},Ks=e=>e in vn,Qs=e=>e===void 0?[]:Array.isArray(e)?e:[e],We=(e,n)=>{const r=Qs(e.AARM_acr).flatMap(i=>Ks(i)?[vn[i],...Ys[vn[i]]]:[i]);return Array.from(new Set(r))},Xs=e=>(e==null?void 0:e.credentialType)==="myGovID"?"myID":(e==null?void 0:e.credentialType)==="B2CLocalUser"?"B2CLocalUser":void 0,Vs=(e,n)=>e?{provider:Xs(e),proofingLevel:We(e)}:void 0,go=f.createContext(void 0),vo=()=>{var e;return(e=f.useContext(go))==null?void 0:e.onSignOutClick};function X({activePath:e,children:n,focusMode:t=!1,handleSignOut:r,mainContentId:i="main-content",userName:a,businessDetails:s,claims:l,errorComponents:d,features:c,requiredProofingLevel:p,authDetails:h,sidebarItems:v,sidebarSubLevelVisible:w,headerProps:g,domain:O,subdomain:C}){var Nn;const I=f.useMemo(()=>new Date().getFullYear(),[]),S=O??"agriculture.gov.au",B=C??"exports",E=f.useContext(gi),[H,U,Y]=pn(!1),[_,Tn,se]=pn(!1),ve=U,Co=r,be=Cs({features:c,selectedBusiness:s==null?void 0:s.selectedBusiness}),ko=mn(B)(e),Fn=oo(ko,{domain:S}),K=us(S),So=f.useMemo(()=>io({features:be,routes:K}),[be]),Io=hs(K),Lo=f.useMemo(()=>[...ws({details:s,routes:K}),...ms({onSignOutClick:ve,features:be,routes:K})],[ve,s,be]),Mo=Vs(l),Ao=h??Mo,nn=gs(So,Fn);return o(Ba,{focusMode:t,children:o(go.Provider,{value:{onSignOutClick:ve},children:u(re,{children:[o(Ka,{palette:"light",background:"body",href:(g==null?void 0:g.href)??K.account,heading:(g==null?void 0:g.heading)??"TradeClear",subLine:(g==null?void 0:g.subLine)??"Australian export, import and biosecurity services",badgeLabel:g==null?void 0:g.badgeLabel,logo:o(vi,{}),accountDetails:a?{href:K.account,name:((Nn=s==null?void 0:s.selectedBusiness)==null?void 0:Nn.partyDisplayName)??a,avatarName:a,secondaryText:(s==null?void 0:s.selectedBusiness)===void 0?void 0:so(ao(s.selectedBusiness)),dropdown:s?o(xs,{routes:K,businessDetails:s,onSignOutClick:ve}):void 0}:void 0}),v?o(re,{...E,children:o(ht,{activePath:e,items:v,subLevelVisible:w,background:"body"})}):o(ht,{activePath:Fn,items:Lo,background:"body"}),u(is,{children:[o(re,{...E,children:o("main",{id:i,tabIndex:-1,css:{"&:focus":{outline:"none"}},children:o(qs,{claims:l,authDetails:Ao,requiredProofingLevel:p,errorComponents:{...mo,...d},activeApp:nn==null?void 0:nn.label,routes:K,children:n})})}),u(ss,{children:[o("nav",{"aria-label":"footer",children:o(bi,{links:Io,horizontal:!0})}),o(ls,{}),o(k,{fontSize:"xs",maxWidth:y.maxWidth.bodyText,children:"We acknowledge the traditional owners of country throughout Australia and recognise their continuing connection to land, waters and culture. We pay our respects to their Elders past, present and emerging."}),u(k,{fontSize:"xs",maxWidth:y.maxWidth.bodyText,children:["© ",I," Department of Agriculture, Fisheries and Forestry"]})]})]}),o(Jr,{isOpen:H,onClose:Y,title:"Do you want to sign out?",actions:u(kn,{children:[o(W,{onClick:async()=>{Tn(),await Co(),se(),Y()},loading:_,disabled:_,children:"Sign out"}),o(W,{variant:"secondary",onClick:Y,children:"Cancel"})]}),children:o(k,{as:"p",children:"You will be signed out of your account and any services you are currently using."})})]})})})}var bo=Symbol.for("immer-nothing"),Ot=Symbol.for("immer-draftable"),T=Symbol.for("immer-state");function $(e,...n){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var oe=Object.getPrototypeOf;function ie(e){return!!e&&!!e[T]}function J(e){var n;return e?yo(e)||Array.isArray(e)||!!e[Ot]||!!((n=e.constructor)!=null&&n[Ot])||Ze(e)||Je(e):!1}var Zs=Object.prototype.constructor.toString();function yo(e){if(!e||typeof e!="object")return!1;const n=oe(e);if(n===null)return!0;const t=Object.hasOwnProperty.call(n,"constructor")&&n.constructor;return t===Object?!0:typeof t=="function"&&Function.toString.call(t)===Zs}function Ue(e,n){Ve(e)===0?Reflect.ownKeys(e).forEach(t=>{n(t,e[t],e)}):e.forEach((t,r)=>n(r,t,e))}function Ve(e){const n=e[T];return n?n.type_:Array.isArray(e)?1:Ze(e)?2:Je(e)?3:0}function bn(e,n){return Ve(e)===2?e.has(n):Object.prototype.hasOwnProperty.call(e,n)}function Oo(e,n,t){const r=Ve(e);r===2?e.set(n,t):r===3?e.add(t):e[n]=t}function Js(e,n){return e===n?e!==0||1/e===1/n:e!==e&&n!==n}function Ze(e){return e instanceof Map}function Je(e){return e instanceof Set}function V(e){return e.copy_||e.base_}function yn(e,n){if(Ze(e))return new Map(e);if(Je(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);const t=yo(e);if(n===!0||n==="class_only"&&!t){const r=Object.getOwnPropertyDescriptors(e);delete r[T];let i=Reflect.ownKeys(r);for(let a=0;a<i.length;a++){const s=i[a],l=r[s];l.writable===!1&&(l.writable=!0,l.configurable=!0),(l.get||l.set)&&(r[s]={configurable:!0,writable:!0,enumerable:l.enumerable,value:e[s]})}return Object.create(oe(e),r)}else{const r=oe(e);if(r!==null&&t)return{...e};const i=Object.create(r);return Object.assign(i,e)}}function En(e,n=!1){return en(e)||ie(e)||!J(e)||(Ve(e)>1&&(e.set=e.add=e.clear=e.delete=el),Object.freeze(e),n&&Object.entries(e).forEach(([t,r])=>En(r,!0))),e}function el(){$(2)}function en(e){return Object.isFrozen(e)}var nl={};function ee(e){const n=nl[e];return n||$(0,e),n}var he;function Po(){return he}function tl(e,n){return{drafts_:[],parent_:e,immer_:n,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function Pt(e,n){n&&(ee("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=n)}function On(e){Pn(e),e.drafts_.forEach(rl),e.drafts_=null}function Pn(e){e===he&&(he=e.parent_)}function xt(e){return he=tl(he,e)}function rl(e){const n=e[T];n.type_===0||n.type_===1?n.revoke_():n.revoked_=!0}function wt(e,n){n.unfinalizedDrafts_=n.drafts_.length;const t=n.drafts_[0];return e!==void 0&&e!==t?(t[T].modified_&&(On(n),$(4)),J(e)&&(e=Ye(n,e),n.parent_||Ke(n,e)),n.patches_&&ee("Patches").generateReplacementPatches_(t[T].base_,e,n.patches_,n.inversePatches_)):e=Ye(n,t,[]),On(n),n.patches_&&n.patchListener_(n.patches_,n.inversePatches_),e!==bo?e:void 0}function Ye(e,n,t){if(en(n))return n;const r=n[T];if(!r)return Ue(n,(i,a)=>Ct(e,r,n,i,a,t)),n;if(r.scope_!==e)return n;if(!r.modified_)return Ke(e,r.base_,!0),r.base_;if(!r.finalized_){r.finalized_=!0,r.scope_.unfinalizedDrafts_--;const i=r.copy_;let a=i,s=!1;r.type_===3&&(a=new Set(i),i.clear(),s=!0),Ue(a,(l,d)=>Ct(e,r,i,l,d,t,s)),Ke(e,i,!1),t&&e.patches_&&ee("Patches").generatePatches_(r,t,e.patches_,e.inversePatches_)}return r.copy_}function Ct(e,n,t,r,i,a,s){if(ie(i)){const l=a&&n&&n.type_!==3&&!bn(n.assigned_,r)?a.concat(r):void 0,d=Ye(e,i,l);if(Oo(t,r,d),ie(d))e.canAutoFreeze_=!1;else return}else s&&t.add(i);if(J(i)&&!en(i)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;Ye(e,i),(!n||!n.scope_.parent_)&&typeof r!="symbol"&&Object.prototype.propertyIsEnumerable.call(t,r)&&Ke(e,i)}}function Ke(e,n,t=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&En(n,t)}function ol(e,n){const t=Array.isArray(e),r={type_:t?1:0,scope_:n?n.scope_:Po(),modified_:!1,finalized_:!1,assigned_:{},parent_:n,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let i=r,a=Rn;t&&(i=[r],a=me);const{revoke:s,proxy:l}=Proxy.revocable(i,a);return r.draft_=l,r.revoke_=s,l}var Rn={get(e,n){if(n===T)return e;const t=V(e);if(!bn(t,n))return il(e,t,n);const r=t[n];return e.finalized_||!J(r)?r:r===cn(e.base_,n)?(dn(e),e.copy_[n]=wn(r,e)):r},has(e,n){return n in V(e)},ownKeys(e){return Reflect.ownKeys(V(e))},set(e,n,t){const r=xo(V(e),n);if(r!=null&&r.set)return r.set.call(e.draft_,t),!0;if(!e.modified_){const i=cn(V(e),n),a=i==null?void 0:i[T];if(a&&a.base_===t)return e.copy_[n]=t,e.assigned_[n]=!1,!0;if(Js(t,i)&&(t!==void 0||bn(e.base_,n)))return!0;dn(e),xn(e)}return e.copy_[n]===t&&(t!==void 0||n in e.copy_)||Number.isNaN(t)&&Number.isNaN(e.copy_[n])||(e.copy_[n]=t,e.assigned_[n]=!0),!0},deleteProperty(e,n){return cn(e.base_,n)!==void 0||n in e.base_?(e.assigned_[n]=!1,dn(e),xn(e)):delete e.assigned_[n],e.copy_&&delete e.copy_[n],!0},getOwnPropertyDescriptor(e,n){const t=V(e),r=Reflect.getOwnPropertyDescriptor(t,n);return r&&{writable:!0,configurable:e.type_!==1||n!=="length",enumerable:r.enumerable,value:t[n]}},defineProperty(){$(11)},getPrototypeOf(e){return oe(e.base_)},setPrototypeOf(){$(12)}},me={};Ue(Rn,(e,n)=>{me[e]=function(){return arguments[0]=arguments[0][0],n.apply(this,arguments)}});me.deleteProperty=function(e,n){return me.set.call(this,e,n,void 0)};me.set=function(e,n,t){return Rn.set.call(this,e[0],n,t,e[0])};function cn(e,n){const t=e[T];return(t?V(t):e)[n]}function il(e,n,t){var i;const r=xo(n,t);return r?"value"in r?r.value:(i=r.get)==null?void 0:i.call(e.draft_):void 0}function xo(e,n){if(!(n in e))return;let t=oe(e);for(;t;){const r=Object.getOwnPropertyDescriptor(t,n);if(r)return r;t=oe(t)}}function xn(e){e.modified_||(e.modified_=!0,e.parent_&&xn(e.parent_))}function dn(e){e.copy_||(e.copy_=yn(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var al=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(n,t,r)=>{if(typeof n=="function"&&typeof t!="function"){const a=t;t=n;const s=this;return function(d=a,...c){return s.produce(d,p=>t.call(this,p,...c))}}typeof t!="function"&&$(6),r!==void 0&&typeof r!="function"&&$(7);let i;if(J(n)){const a=xt(this),s=wn(n,void 0);let l=!0;try{i=t(s),l=!1}finally{l?On(a):Pn(a)}return Pt(a,r),wt(i,a)}else if(!n||typeof n!="object"){if(i=t(n),i===void 0&&(i=n),i===bo&&(i=void 0),this.autoFreeze_&&En(i,!0),r){const a=[],s=[];ee("Patches").generateReplacementPatches_(n,i,a,s),r(a,s)}return i}else $(1,n)},this.produceWithPatches=(n,t)=>{if(typeof n=="function")return(s,...l)=>this.produceWithPatches(s,d=>n(d,...l));let r,i;return[this.produce(n,t,(s,l)=>{r=s,i=l}),r,i]},typeof(e==null?void 0:e.autoFreeze)=="boolean"&&this.setAutoFreeze(e.autoFreeze),typeof(e==null?void 0:e.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){J(e)||$(8),ie(e)&&(e=sl(e));const n=xt(this),t=wn(e,void 0);return t[T].isManual_=!0,Pn(n),t}finishDraft(e,n){const t=e&&e[T];(!t||!t.isManual_)&&$(9);const{scope_:r}=t;return Pt(r,n),wt(void 0,r)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,n){let t;for(t=n.length-1;t>=0;t--){const i=n[t];if(i.path.length===0&&i.op==="replace"){e=i.value;break}}t>-1&&(n=n.slice(t+1));const r=ee("Patches").applyPatches_;return ie(e)?r(e,n):this.produce(e,i=>r(i,n))}};function wn(e,n){const t=Ze(e)?ee("MapSet").proxyMap_(e,n):Je(e)?ee("MapSet").proxySet_(e,n):ol(e,n);return(n?n.scope_:Po()).drafts_.push(t),t}function sl(e){return ie(e)||$(10,e),wo(e)}function wo(e){if(!J(e)||en(e))return e;const n=e[T];let t;if(n){if(!n.modified_)return n.base_;n.finalized_=!0,t=yn(e,n.scope_.immer_.useStrictShallowCopy_)}else t=yn(e,!0);return Ue(t,(r,i)=>{Oo(t,r,wo(i))}),n&&(n.finalized_=!1),t}var F=new al,Pe=F.produce;F.produceWithPatches.bind(F);F.setAutoFreeze.bind(F);F.setUseStrictShallowCopy.bind(F);F.applyPatches.bind(F);F.createDraft.bind(F);F.finishDraft.bind(F);const Z=[{partyId:1,partyDisplayName:"Jefferson PTY LTD",formattedPartyExternalId:"89 790 756 100",someExtraInfo:"our component allows this field but does not use it at all",roleDisplayName:"User",roleName:"USER"},{partyId:2,partyDisplayName:"Metaweb (agent role)",formattedPartyExternalId:"89 790 756 100",someExtraInfo:"our component allows this field but does not use it at all",roleDisplayName:"Agent",roleName:"AGENT"},{partyId:3,partyDisplayName:"Fresh Produce Australia",formattedPartyExternalId:"92 635 964 018",someExtraInfo:"our component allows this field but does not use it at all",roleDisplayName:"Principal Authority (Owner)",roleName:"PRINCIPAL_AUTHORITY_OWNER"},{partyId:4,partyDisplayName:"Fresh Produce Australia",formattedPartyExternalId:"92 635 964 018",someExtraInfo:"our component allows this field but does not use it at all",roleDisplayName:"Manager",roleName:"MANAGER"}],un=[{partyId:5,partyDisplayName:"Business A",formattedPartyExternalId:"ABN: 88 888 888 888",roleDisplayName:"User",roleGroupName:"BIOSECURITY"},{partyId:6,partyDisplayName:"Business B",formattedPartyExternalId:"ABN: 88 888 888 888",roleDisplayName:"User",roleGroupName:"BIOSECURITY"},{partyId:7,partyDisplayName:"Business C",formattedPartyExternalId:"ABN: 88 888 888 888",roleDisplayName:"User",roleGroupName:"BIOSECURITY"},{partyId:8,partyDisplayName:"Business D",formattedPartyExternalId:"ABN: 88 888 888 888",roleDisplayName:"User",roleGroupName:"BIOSECURITY"}],kl={title:"AppLayout",component:X,parameters:{layout:"fullscreen"},render:function(n){return u(f.Fragment,{children:[o(te,{links:[{href:"#main-content",label:"Skip to main content"}]}),o(X,{...n,children:o(N,{children:o(G,{children:o("h1",{children:"Page heading"})})})})]})}},ll=e=>new Promise(n=>setTimeout(n,e)),A=async()=>{await ll(2e3),alert("You have been signed out.")},xe={args:{focusMode:!1,userName:"Toto Wolff",unreadMessageCount:6,activePath:"/",handleSignOut:A}},we={args:{focusMode:!0,userName:"Toto Wolff",unreadMessageCount:6,activePath:"/",handleSignOut:A}},Ce={args:{activePath:"/",focusMode:!1,handleSignOut:A},render:function(n){const[t,r]=f.useState(!1);return f.useEffect(()=>{setTimeout(()=>{r(!0)},1e3)},[]),u(f.Fragment,{children:[o(te,{links:[{href:"#main-content",label:"Skip to main content"}]}),o(X,{...n,...t?{userName:"Toto Wolff",unreadMessageCount:6}:{},children:o(N,{children:o(G,{children:o("h1",{children:"Page heading"})})})})]})}},ke={args:{focusMode:!1,userName:"Toto Wolff",unreadMessageCount:6,activePath:"/",handleSignOut:A,domain:"test.agriculture.gov.au"}},Se={args:{focusMode:!1,userName:"Toto Wolff",unreadMessageCount:6,activePath:"/account/exports/dashboard",handleSignOut:A,subdomain:"services",domain:e=>`http://${e.subdomain}.example.com/custom-prefix${e.path}`}},Ie={args:{focusMode:!1,userName:"Toto Wolff",unreadMessageCount:6,activePath:"/account/exports/dashboard",handleSignOut:A,subdomain:"services",features:{people:!0,exportSystems:!0,invoices:!0,licences:!0,quotas:!0},domain:e=>e.subdomain==="services"?`http://localhost:8080${e.path}`:`http://localhost:3000${e.path}`},render:e=>{const[n,t]=f.useState("/account/exports/dashboard"),[r,i]=f.useState("services");return u(f.Fragment,{children:[o(te,{links:[{href:"#main-content",label:"Skip to main content"}]}),o(X,{...e,activePath:n,subdomain:r,children:o(N,{children:u(j,{gap:3,children:[o(Ro,{children:"configure activePath / subdomain to test routing"}),o(fn,{label:"activePath",onChange:a=>t(a.target.value),value:n,options:[{value:"/account/exports/dashboard",label:"account-dashboard"},{value:"/account/exports/manage-people",label:"manage-people"},{value:"/establishments",label:"establishments"},{value:"/intelligence",label:"intelligence"},{value:"/compliance",label:"compliance"},{value:"/quota",label:"quota"},{value:"/export-systems",label:"export-systems"},{value:"/licences",label:"licences"},{value:"/inexs",label:"inexs"}]}),o(fn,{label:"subdomain",onChange:a=>i(a.target.value),value:r,options:[{value:"services",label:"services"},{value:"exports",label:"exports"}]})]})})})]})}},Le={args:{focusMode:!1,userName:"Toto Wolff",unreadMessageCount:6,activePath:"/",handleSignOut:A},render:function(n){const[t,r]=f.useState({exports:Z,imports:un,selectedBusiness:Z[1]}),i=s=>r(l=>({...l,selectedBusiness:s})),a=(s,l)=>()=>{if(s==="imports"){const d=un.slice(0,l),c=d[0];r(p=>({...p,imports:d,selectedBusiness:c}))}if(s==="exports"){const d=Z.slice(0,l),c=d[0];r(p=>({...p,exports:d,selectedBusiness:c}))}};return u(f.Fragment,{children:[o(te,{links:[{href:"#main-content",label:"Skip to main content"}]}),o(X,{...n,businessDetails:{selectedBusiness:t.selectedBusiness,linkedBusinesses:[...t.exports,...t.imports],setSelectedBusiness:i},children:o(N,{children:u(j,{gap:3,children:[o(G,{children:o("h1",{children:"Business dropdown configuration"})}),u(x,{gap:1,children:[o(pe,{label:"Number of linked businesses",block:!0,hideOptionalLabel:!0,children:Array.from(new Array(Z.length+1).keys()).map(s=>{var l;return u(Qn,{checked:((l=t==null?void 0:t.exports)==null?void 0:l.length)===s,onChange:a("exports",s),children:[s," ",s===0?"business":"businesses"]},s)})}),o(pe,{label:"Number of linked biosecurity businesses",block:!0,hideOptionalLabel:!0,children:Array.from(new Array(un.length+1).keys()).map(s=>{var l;return u(Qn,{checked:((l=t==null?void 0:t.imports)==null?void 0:l.length)===s,onChange:a("imports",s),children:[s," ",s===0?"import business":"import businesses"]},s)})})]})]})})})]})}},Me={args:{focusMode:!1,userName:"Toto Wolff",unreadMessageCount:6,activePath:"/",handleSignOut:A},render:function(n){const t=Z,[r,i]=f.useState(t[1]),[a,s]=f.useState(),l=()=>s(void 0),d={linkedBusinesses:t,selectedBusiness:r,setSelectedBusiness:s};return u(f.Fragment,{children:[o(te,{links:[{href:"#main-content",label:"Skip to main content"}]}),u(X,{...n,businessDetails:d,children:[o(Jr,{isOpen:a!==void 0,onClose:l,title:"Are you sure you want to leave this page?",actions:u(kn,{children:[o(W,{onClick:()=>{a!==void 0&&i(a),s(void 0)},children:"Leave this page"}),o(W,{variant:"secondary",onClick:l,children:"Stay on this page"})]}),children:o(k,{as:"p",children:"You will lose all changes made since your last save."})}),o(N,{children:o(j,{gap:3,children:o(G,{children:u("h1",{children:["Active business: ",r==null?void 0:r.partyDisplayName]})})})})]})]})}},Ae={args:{focusMode:!1,userName:"Toto Wolff",unreadMessageCount:6,activePath:"/",handleSignOut:A},render:function(n){const t={linkedBusinesses:Z,selectedBusiness:Z[0],setSelectedBusiness:()=>{}},r=()=>{const i=vo();return o(W,{onClick:i,children:"Sign out"})};return u(f.Fragment,{children:[o(te,{links:[{href:"#main-content",label:"Skip to main content"}]}),o(X,{...n,businessDetails:t,children:o(N,{children:u(j,{gap:3,children:[u(G,{children:[o("h1",{children:"Sign out button"}),u("p",{children:["You can trigger the sign out modal using the"," ",o("code",{children:"useOpenSignOutModal"})," hook."]})]}),o(kn,{children:o(r,{})})]})})})]})}},De={args:{focusMode:!1,userName:"Toto Wolff",unreadMessageCount:6,activePath:"/",features:{quotas:!0,exportSystems:!0,licences:!0,invoices:!0,people:!0}}},je={args:{focusMode:!1,unreadMessageCount:6,activePath:"/",handleSignOut:A,claims:{given_name:"given_name",family_name:"family_name"}}},Be={args:{focusMode:!1,unreadMessageCount:6,activePath:"/",handleSignOut:A,claims:{family_name:"family_name"}}},Ee={args:{focusMode:!1,unreadMessageCount:6,activePath:"/",handleSignOut:A,claims:{family_name:"family_name"},errorComponents:{MissingName:e=>(f.useEffect(()=>{console.log("report this situation to an analytics provider here")},[]),o(mo.MissingName,{...e}))}}},Re={args:{focusMode:!1,unreadMessageCount:6,activePath:"/",handleSignOut:A,claims:{family_name:"family_name"},errorComponents:{MissingName:e=>o(N,{children:u(G,{children:[o("p",{children:"Our app works just fine even without a generic name."}),o("hr",{}),e.children]})})}}},Te={args:{focusMode:!1,unreadMessageCount:6,activePath:"/",handleSignOut:A,claims:{family_name:"family_name"},errorComponents:{MissingGivenName:e=>{const n=vo();return o(N,{children:u(G,{children:[o("p",{children:"Our app works just fine even without a given name."}),o("hr",{}),e.children,o(W,{onClick:n,children:"Sign out"})]})})}}}},Fe={args:{focusMode:!1,unreadMessageCount:6,activePath:"/",handleSignOut:A,claims:{given_name:"given_name",family_name:"family_name",AARM_acr:"urn:id.gov.au:tdif:acr:ip1:cl1"},requiredProofingLevel:"IP2"}},Ne={args:{focusMode:!1,unreadMessageCount:6,activePath:"/",handleSignOut:A},render:function(n){const t=["IP1","IP2","IP3","IP4"],r=["urn:id.gov.au:tdif:acr:ip1:cl1","urn:id.gov.au:tdif:acr:ip1:cl2","urn:id.gov.au:tdif:acr:ip1:cl3","urn:id.gov.au:tdif:acr:ip1p:cl1","urn:id.gov.au:tdif:acr:ip1p:cl2","urn:id.gov.au:tdif:acr:ip1p:cl3","urn:id.gov.au:tdif:acr:ip2:cl2","urn:id.gov.au:tdif:acr:ip2:cl3","urn:id.gov.au:tdif:acr:ip2p:cl2","urn:id.gov.au:tdif:acr:ip2p:cl3","urn:id.gov.au:tdif:acr:ip3:cl2","urn:id.gov.au:tdif:acr:ip3:cl3","urn:id.gov.au:tdif:acr:ip4:cl3"],[i,a]=f.useState(!0),[s,l]=f.useState({method:"urn",claims:{given_name:"given_name",family_name:"family_name",AARM_acr:[r[0]]},authDetails:{proofingLevel:["IP1"]},requiredProofingLevel:["IP2"]}),d=c=>{const p=c.kind==="max"?"#df185a":"#287be0",h=c!=null&&c.extraText?` (${c.extraText})`:"";return c!=null&&c.active?o(M,{css:{position:"relative",padding:"4px",border:`2px dashed ${p}`,"& + &":{marginTop:"1em"},":after":{position:"absolute",right:0,bottom:"120%",content:`"${c.kind==="max"?"maximum provided proof":"minimum required proof"}${h}"`,color:p,fontSize:"0.8em"}},children:c.children}):o(Br,{children:c.children})};return u(f.Fragment,{children:[o(te,{links:[{href:"#main-content",label:"Skip to main content"}]}),u(M,{css:{position:"relative"},children:[o(M,{css:{border:"2px solid red",backgroundColor:"#fec0ff",position:"fixed",transform:"rotate(90deg)",transformOrigin:"top right",fontSize:"1.2em",padding:".4em 1em",top:"55vh",right:0,zIndex:99,cursor:"pointer"},onClick:()=>a(!0),children:"show config options"}),o(X,{...n,requiredProofingLevel:s.requiredProofingLevel,...s.method==="claims"?{claims:s.claims}:{authDetails:s.authDetails},children:o(N,{children:u(j,{gap:1.5,children:[o(k,{as:"p",fontSize:"lg",children:"You made it!"}),o(k,{as:"p",children:"Your proofing level means that you can see this page."})]})})})]}),o(fa,{title:"Config",isOpen:i,onClose:()=>a(!1),children:u(j,{gap:1.5,children:[o(fn,{label:"Proofing method",required:!0,options:[{value:"authDetails",label:"AuthDetails"},{value:"claims",label:"Claims"}],onChange:c=>l(Pe(p=>{p.method=c.target.value}))}),s.method==="claims"?o(pe,{label:"Provided ACR",block:!0,hideOptionalLabel:!0,children:r.map(c=>o(d,{kind:"max",active:ue(We({AARM_acr:c}))===ue(We(s.claims)),extraText:ue(We(s.claims)),children:o(on,{checked:new Set(s.claims.AARM_acr).has(c),onChange:p=>l(Pe(h=>{p.target.checked?h.claims.AARM_acr.push(c):h.claims.AARM_acr.splice(h.claims.AARM_acr.indexOf(c),1)})),children:c},c)},c))}):o(pe,{label:"Provided proofing level",block:!0,hideOptionalLabel:!0,children:t.map(c=>o(d,{kind:"max",active:ue(s.authDetails.proofingLevel)===c,children:o(on,{checked:new Set(s.authDetails.proofingLevel).has(c),onChange:p=>l(Pe(h=>{p.target.checked?h.authDetails.proofingLevel.push(c):h.authDetails.proofingLevel.splice(h.authDetails.proofingLevel.indexOf(c),1)})),children:c},c)},c))}),o(pe,{label:"Required proofing level",block:!0,hideOptionalLabel:!0,children:t.map(c=>o(d,{kind:"min",active:fo(s.requiredProofingLevel)===c,children:o(on,{checked:new Set(s.requiredProofingLevel).has(c),onChange:p=>l(Pe(h=>{p.target.checked?h.requiredProofingLevel.push(c):h.requiredProofingLevel.splice(h.requiredProofingLevel.indexOf(c),1)})),children:c},c)},c))})]})})]})}},$e={args:{focusMode:!1,unreadMessageCount:6,activePath:"/",handleSignOut:A,authDetails:{proofingLevel:"IP1"},requiredProofingLevel:"IP3",errorComponents:{ProofMissing:e=>o(N,{children:u(G,{children:[u("p",{children:["Your proofing level is insufficient at"," ",He(e.providedProofingLevel),". Please fix it."]}),u("p",{children:["you should provide at least '",He(e.requiredProofingLevel),"'"]})]})})}}},ze={args:{focusMode:!1,userName:"Toto Wolff",unreadMessageCount:6,activePath:"/custom",handleSignOut:A,sidebarItems:[{items:[{label:"Custom sidenav",href:"/custom",icon:Mn},{label:"Other item",href:"/other",icon:_r}]}],internal:"sidebar"}},_e={args:{focusMode:!1,userName:"Toto Wolff",unreadMessageCount:6,activePath:"/custom",handleSignOut:A,headerProps:{heading:"Service Portal",subLine:"Supporting Australian agriculture"},sidebarItems:[{items:[{label:"Overview",href:"/custom",icon:Mn,items:[{label:"Business details",href:"#"},{label:"People",href:"#"}]},{label:"Country requirements",href:"/country-requirements",icon:Wr,items:[{label:"Other",href:"#"},{label:"Options",href:"#"}]}]},{items:[{label:"Help",href:"/help",icon:$r}]}]}};var kt,St,It;xe.parameters={...xe.parameters,docs:{...(kt=xe.parameters)==null?void 0:kt.docs,source:{originalSource:`{
  args: {
    focusMode: false,
    userName: 'Toto Wolff',
    unreadMessageCount: 6,
    activePath: '/',
    handleSignOut
  }
}`,...(It=(St=xe.parameters)==null?void 0:St.docs)==null?void 0:It.source}}};var Lt,Mt,At;we.parameters={...we.parameters,docs:{...(Lt=we.parameters)==null?void 0:Lt.docs,source:{originalSource:`{
  args: {
    focusMode: true,
    userName: 'Toto Wolff',
    unreadMessageCount: 6,
    activePath: '/',
    handleSignOut
  }
}`,...(At=(Mt=we.parameters)==null?void 0:Mt.docs)==null?void 0:At.source}}};var Dt,jt,Bt;Ce.parameters={...Ce.parameters,docs:{...(Dt=Ce.parameters)==null?void 0:Dt.docs,source:{originalSource:`{
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
}`,...(Bt=(jt=Ce.parameters)==null?void 0:jt.docs)==null?void 0:Bt.source}}};var Et,Rt,Tt;ke.parameters={...ke.parameters,docs:{...(Et=ke.parameters)==null?void 0:Et.docs,source:{originalSource:`{
  args: {
    focusMode: false,
    userName: 'Toto Wolff',
    unreadMessageCount: 6,
    activePath: '/',
    handleSignOut,
    domain: 'test.agriculture.gov.au'
  }
}`,...(Tt=(Rt=ke.parameters)==null?void 0:Rt.docs)==null?void 0:Tt.source}}};var Ft,Nt,$t;Se.parameters={...Se.parameters,docs:{...(Ft=Se.parameters)==null?void 0:Ft.docs,source:{originalSource:`{
  args: {
    focusMode: false,
    userName: 'Toto Wolff',
    unreadMessageCount: 6,
    activePath: '/account/exports/dashboard',
    handleSignOut,
    subdomain: 'services',
    domain: route => \`http://\${route.subdomain}.example.com/custom-prefix\${route.path}\`
  }
}`,...($t=(Nt=Se.parameters)==null?void 0:Nt.docs)==null?void 0:$t.source}}};var zt,_t,Wt;Ie.parameters={...Ie.parameters,docs:{...(zt=Ie.parameters)==null?void 0:zt.docs,source:{originalSource:`{
  args: {
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
}`,...(Wt=(_t=Ie.parameters)==null?void 0:_t.docs)==null?void 0:Wt.source}}};var qt,Gt,Ht;Le.parameters={...Le.parameters,docs:{...(qt=Le.parameters)==null?void 0:qt.docs,source:{originalSource:`{
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
}`,...(Ht=(Gt=Le.parameters)==null?void 0:Gt.docs)==null?void 0:Ht.source}}};var Ut,Yt,Kt;Me.parameters={...Me.parameters,docs:{...(Ut=Me.parameters)==null?void 0:Ut.docs,source:{originalSource:`{
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
}`,...(Kt=(Yt=Me.parameters)==null?void 0:Yt.docs)==null?void 0:Kt.source}}};var Qt,Xt,Vt;Ae.parameters={...Ae.parameters,docs:{...(Qt=Ae.parameters)==null?void 0:Qt.docs,source:{originalSource:`{
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
}`,...(Vt=(Xt=Ae.parameters)==null?void 0:Xt.docs)==null?void 0:Vt.source}}};var Zt,Jt,er;De.parameters={...De.parameters,docs:{...(Zt=De.parameters)==null?void 0:Zt.docs,source:{originalSource:`{
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
}`,...(er=(Jt=De.parameters)==null?void 0:Jt.docs)==null?void 0:er.source}}};var nr,tr,rr;je.parameters={...je.parameters,docs:{...(nr=je.parameters)==null?void 0:nr.docs,source:{originalSource:`{
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
}`,...(rr=(tr=je.parameters)==null?void 0:tr.docs)==null?void 0:rr.source}}};var or,ir,ar;Be.parameters={...Be.parameters,docs:{...(or=Be.parameters)==null?void 0:or.docs,source:{originalSource:`{
  args: {
    focusMode: false,
    unreadMessageCount: 6,
    activePath: '/',
    handleSignOut,
    claims: {
      family_name: 'family_name'
    }
  }
}`,...(ar=(ir=Be.parameters)==null?void 0:ir.docs)==null?void 0:ar.source}}};var sr,lr,cr;Ee.parameters={...Ee.parameters,docs:{...(sr=Ee.parameters)==null?void 0:sr.docs,source:{originalSource:`{
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
}`,...(cr=(lr=Ee.parameters)==null?void 0:lr.docs)==null?void 0:cr.source}}};var dr,ur,pr;Re.parameters={...Re.parameters,docs:{...(dr=Re.parameters)==null?void 0:dr.docs,source:{originalSource:`{
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
}`,...(pr=(ur=Re.parameters)==null?void 0:ur.docs)==null?void 0:pr.source}}};var fr,hr,mr;Te.parameters={...Te.parameters,docs:{...(fr=Te.parameters)==null?void 0:fr.docs,source:{originalSource:`{
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
}`,...(mr=(hr=Te.parameters)==null?void 0:hr.docs)==null?void 0:mr.source}}};var gr,vr,br;Fe.parameters={...Fe.parameters,docs:{...(gr=Fe.parameters)==null?void 0:gr.docs,source:{originalSource:`{
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
}`,...(br=(vr=Fe.parameters)==null?void 0:vr.docs)==null?void 0:br.source}}};var yr,Or,Pr;Ne.parameters={...Ne.parameters,docs:{...(yr=Ne.parameters)==null?void 0:yr.docs,source:{originalSource:`{
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
}`,...(Pr=(Or=Ne.parameters)==null?void 0:Or.docs)==null?void 0:Pr.source}}};var xr,wr,Cr;$e.parameters={...$e.parameters,docs:{...(xr=$e.parameters)==null?void 0:xr.docs,source:{originalSource:`{
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
}`,...(Cr=(wr=$e.parameters)==null?void 0:wr.docs)==null?void 0:Cr.source}}};var kr,Sr,Ir;ze.parameters={...ze.parameters,docs:{...(kr=ze.parameters)==null?void 0:kr.docs,source:{originalSource:`{
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
}`,...(Ir=(Sr=ze.parameters)==null?void 0:Sr.docs)==null?void 0:Ir.source}}};var Lr,Mr,Ar;_e.parameters={..._e.parameters,docs:{...(Lr=_e.parameters)==null?void 0:Lr.docs,source:{originalSource:`{
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
}`,...(Ar=(Mr=_e.parameters)==null?void 0:Mr.docs)==null?void 0:Ar.source}}};const Sl=["Basic","FocusMode","ClientSideFetch","EnvironmentRouting","CustomRouting","DevelopmentRouting","BusinessDropdown","BusinessDropdownModalInterrupt","SignOutModalTrigger","OptionalAppsEnabled","Claims","ClaimsMissingName","ClaimsMissingNameAnalytics","ClaimsMissingNameComponent","ClaimsMissingGivenNameComponent","RequiredProofingPaywall","RequiredProofingPaywallOptions","RequiredProofingPaywallCustomComponent","CustomSidenav","HeaderProps"];export{xe as Basic,Le as BusinessDropdown,Me as BusinessDropdownModalInterrupt,je as Claims,Te as ClaimsMissingGivenNameComponent,Be as ClaimsMissingName,Ee as ClaimsMissingNameAnalytics,Re as ClaimsMissingNameComponent,Ce as ClientSideFetch,Se as CustomRouting,ze as CustomSidenav,Ie as DevelopmentRouting,ke as EnvironmentRouting,we as FocusMode,_e as HeaderProps,De as OptionalAppsEnabled,Fe as RequiredProofingPaywall,$e as RequiredProofingPaywallCustomComponent,Ne as RequiredProofingPaywallOptions,Ae as SignOutModalTrigger,Sl as __namedExportsOrder,kl as default};
