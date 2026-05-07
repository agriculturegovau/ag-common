import{j as o,e as q,t as y,m as A,_ as P,c as b,d as g,i as u,B as M,p as L,G as Pn,g as se,h as kr,u as Sr,q as Co,F as Ir,b as ko,s as So}from"./Box-37a490cb.esm-D-DOdbx1.js";import{r as h}from"./index-BAneEnFJ.js";import{P as G,p as Io}from"./ag.ds-next-react-prose.esm-DL7-5UY7.js";import{b as Lo,m as Mo,c as W,_ as Lr,C as Ao,B as Ye,P as _,a as xn}from"./ag.ds-next-react-button.esm-mlZ_Ex-Y.js";import{v as Do,S as j,T as k,F as x,V as Mr,s as Ke,E as jo,c as Bo}from"./Icon-29f3c11e.esm-BY8XGtqw.js";import{e as te,a as wn,c as Cn,F as kn,u as un,_ as Rn,D as Eo,b as Ro,d as To,f as Tn,g as de,h as Fo,i as No,j as zo,k as $o,l as Ar}from"./ag.ds-next-react-dropdown-menu.esm-DC3xI-8g.js";import{b as Dr,c as _o,d as Wo,a as jr,C as fe,M as qo,e as Go,H as Br,f as Er,E as Ho,L as Uo,g as Yo,P as Rr,S as Ko,h as Qo,F as Sn,U as Xo,i as Tr,j as Vo,k as Zo,l as Jo,A as ei,m as Fr,n as ni,o as ti,p as ri,W as oi,I as ii,q as ai,B as si}from"./ag.ds-next-react-icon.esm-CUinNsHF.js";import{r as In}from"./index-exioagFi.js";import{u as Ln,C as re,c as ci}from"./CoreProvider-eb9f00f4.esm-D4vhSKCO.js";import{L as li}from"./ag.ds-next-react-ag-branding.esm-yc4QqEQm.js";import{L as di}from"./ag.ds-next-react-link-list.esm-56KXQLr_.js";import{C as ui}from"./ag.ds-next-react-callout.esm-bCYqbuMQ.js";import{a as _e}from"./ag.ds-next-react-text-link.esm-qoNokk0X.js";import"./jsx-runtime-D_zvdyIk.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-pL_YbQPu.js";function Nr(){var e=h.useState(!1),n=e[0],t=e[1];return h.useEffect(function(){if(!window.matchMedia){t(!1);return}var r=window.matchMedia("(prefers-reduced-motion: reduce)");t(r.matches);var i=function(s){return t(s.matches)};return r.addEventListener("change",i),function(){return r.removeEventListener("change",i)}},[]),n}var pi=function(n){var t=n.children,r=n["aria-label"];return o("nav",{"aria-label":r,children:t})},fi=h.forwardRef(function(n,t){var r=n.children,i=n.href;return o("a",{css:[Do,Lo({block:!1,size:"md",variant:"primary"}),{position:"absolute","&:focus-visible":{top:A(1),left:A(1),clip:"auto",clipPath:"none",overflow:"visible",whiteSpace:"normal",width:"auto",zIndex:y.zIndex.skipLink}},"","","",""],href:i,ref:t,children:r})}),hi=["label"];function Fn(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function Nn(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?Fn(Object(t),!0).forEach(function(r){P(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Fn(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var ce=function(n){var t=n.links,r=n["aria-label"],i=r===void 0?"Skip links":r;return o(pi,{"aria-label":i,children:t.map(function(a,s){var l=a.label,d=q(a,hi);return o(fi,Nn(Nn({},d),{},{children:l}),s)})})},zn="data-conditional-field-container",gi="data-grouped-fields",mi=function(n){var t=n.hideOptionalLabel,r=n.required,i=n.secondaryLabel;return h.useMemo(function(){return[i,t||r?null:"(optional)"].filter(Boolean).join(" ")},[r,i,t])};function $n(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function _n(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?$n(Object(t),!0).forEach(function(r){P(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):$n(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var zr=function(n){var t,r=n.children,i=n.invalid,a=n.id;return o(j,_n(_n({},P({},en,!0)),{},{borderLeft:i,borderLeftWidth:"xl",css:b((t={borderLeftColor:i?g.systemError:void 0},P(t,"[".concat(zn,"] &[").concat(en,"]"),{marginLeft:i?"calc(-".concat(A(1)," - ").concat(y.borderWidth.xl,"px)"):void 0,position:"relative"}),P(t,"[".concat(zn,"] [").concat(gi,"] &[").concat(en,"]:not(:first-of-type)"),{marginLeft:0}),t),"",""),gap:.5,id:a,paddingLeft:i?1:void 0,children:r}))},en="data-field-container",$r=function(n){var t=n.as,r=t===void 0?"label":t,i=n.children,a=n.className,s=n.id,l=n.htmlFor,d=n.required,c=n.secondaryLabel,p=n.hideOptionalLabel,f=mi({hideOptionalLabel:p,required:d,secondaryLabel:c});return u(M,{as:r,className:a,htmlFor:l,id:s,children:[o(k,{as:"span",fontWeight:"bold",children:i}),f?u(k,{as:"span",color:"muted",children:[" ",f]}):null]})},_r=function(n){var t=n.children,r=n.id;return o(k,{color:"muted",display:"block",id:r,children:t})},vi={name:"4zleql",styles:"display:block"},Wr=function(n){var t=n.children,r=n.id;return u(x,{alignItems:"center",gap:.5,children:[o(M,{flexShrink:0,children:o(Dr,{"aria-hidden":"false","aria-label":"Error",color:"error",css:vi,size:"md"})}),o(k,{color:"error",display:"block",fontWeight:"bold",id:r,children:t})]})},bi=function(n){var t=n.children,r=n.hint,i=n.id,a=n.invalid,s=n.label,l=n.labelId,d=n.maxWidth,c=n.secondaryLabel,p=n.hideOptionalLabel,f=n.message,m=n.required,w=yi(i),O=w.fieldId,v=w.hintId,C=w.messageId,S=Oi({required:m,fieldId:O,message:f,messageId:C,hint:r,hintId:v,invalid:a});return u(zr,{invalid:a,children:[o($r,{hideOptionalLabel:p,htmlFor:O,id:l,required:m,secondaryLabel:c,children:s}),r?o(_r,{id:v,children:r}):null,f&&a?o(Wr,{id:C,children:f}):null,typeof t=="function"?t(S):t,d?o("div",{"aria-hidden":!0,css:b({height:0,marginTop:"-".concat(A(.5)),maxWidth:y.maxWidth.field[d],overflow:"hidden","::after":{content:'"---------------------------------------------------------------"'}},"","")}):null]})},yi=function(n){var t=te(n),r=n||"field-".concat(t),i="field-".concat(t,"-hint"),a="field-".concat(t,"-message");return{fieldId:r,hintId:i,messageId:a}},Oi=function(n){var t=n.required,r=n.fieldId,i=n.message,a=n.messageId,s=n.hint,l=n.hintId,d=n.invalid,c=[i?a:null,s?l:null].filter(Boolean),p=c.length?c.join(" "):void 0;return{"aria-required":!!t,"aria-invalid":!!d,"aria-describedby":p,id:r}},qr=h.createContext(void 0),Gr=function(){return h.useContext(qr)};function Pi(e){var n=e.children,t=e.invalid,r=e.messageId,i=e.name,a=e.required,s=te();return o(qr.Provider,{value:{invalid:t,name:i||s,messageId:r,required:a},children:n})}var oe=function(n){var t=n.block,r=t===void 0?!1:t,i=n.children,a=n.hint,s=n.id,l=n.invalid,d=l===void 0?!1:l,c=n.label,p=n.hideOptionalLabel,f=n.message,m=n.name,w=n.required,O=w===void 0?!1:w,v=xi(s),C=v.groupId,S=v.hintId,I=v.messageId,B=[d&&f?I:null,a?S:null].filter(Boolean),E=B.length?B.join(" "):void 0;return o(Pi,{invalid:d,messageId:d&&f?I:void 0,name:m,required:O,children:o(zr,{id:C,invalid:d,children:u(M,{"aria-describedby":E,as:"fieldset",children:[c?o($r,{as:"legend",hideOptionalLabel:p,required:O,children:c}):null,u(j,{css:b({marginTop:c?A(.5):void 0},"",""),gap:.5,children:[a?o(_r,{id:S,children:a}):null,f&&d?o(Wr,{id:I,children:f}):null,o(x,{flexDirection:r?"column":"row",flexWrap:r?void 0:"wrap",gap:1,paddingTop:.5,width:"100%",children:i})]})]})})})},xi=function(n){var t=te(n),r=n||"control-group-".concat(t),i="control-group-".concat(t,"-hint"),a="control-group-".concat(t,"-message");return{groupId:r,hintId:i,messageId:a}};function Wn(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function nn(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?Wn(Object(t),!0).forEach(function(r){P(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Wn(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function wi(e){var n=e.disabled,t=e.invalid,r=e.size,i=L.control[r],a=i.width,s=i.height,l=i.borderWidth;return o(x,{alignItems:"center",as:"span",css:b(nn(nn({backgroundColor:g.backgroundBody,borderColor:g.border,borderRadius:"100%",borderStyle:"solid",borderWidth:l,inset:0,position:"absolute"},n&&{color:g.borderMuted,borderColor:g.borderMuted,backgroundColor:g.backgroundShade,"@media (forced-colors: active)":{borderColor:"GrayText",color:"GrayText"}}),t&&{borderColor:g.systemError,backgroundColor:g.systemErrorMuted}),"",""),flexShrink:0,height:s,justifyContent:"center",rounded:!0,width:a,children:o(M,{as:"span",css:b(nn({borderRadius:"100%",backgroundColor:g.foregroundText,"@media (forced-colors: active)":{backgroundColor:"MenuText"}},n&&{backgroundColor:g.borderMuted,"@media (forced-colors: active)":{backgroundColor:"GrayText"}}),"",""),height:"calc(100% - 0.5rem)",highContrastOutline:!0,width:"calc(100% - 0.5rem)"})})}var Ci=["height","width"];function qn(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function ki(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?qn(Object(t),!0).forEach(function(r){P(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):qn(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var Si=h.forwardRef(function(n,t){var r=n.height,i=n.width,a=q(n,Ci);return o("input",ki({css:b({height:r,margin:0,opacity:0,verticalAlign:"middle",width:i,"&:focus ~ span:first-of-type":L.outline,"~ span > span":{opacity:0},"&:checked ~ span > span":{opacity:1}},"",""),ref:t},a))}),Ii=function(n){var t=n.children,r=n.disabled,i=n.htmlFor;return o(x,{alignItems:"flex-start",as:"label",color:"text",css:b({cursor:r?"not-allowed":"pointer"},"",""),gap:.5,htmlFor:i,inline:!0,children:t})},Li={sm:0,md:"0.2rem"};function Mi(e){var n=e.children,t=e.disabled,r=e.size,i=Li[r];return o(k,{color:t?"muted":"text",css:b({paddingTop:i},"",""),flexGrow:1,children:n})}var Ai=["children","disabled","invalid","name","required","size"];function Gn(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function Di(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?Gn(Object(t),!0).forEach(function(r){P(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Gn(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var tn=h.forwardRef(function(n,t){var r=n.children,i=n.disabled,a=n.invalid,s=n.name,l=n.required,d=n.size,c=d===void 0?"md":d,p=q(n,Ai),f=ji(p.id),m=Gr(),w=L.control[c],O=w.height,v=w.width,C=typeof a=="boolean"?a:m==null?void 0:m.invalid,S=typeof l=="boolean"?l:m==null?void 0:m.required,I=s||(m==null?void 0:m.name);return u(Ii,{disabled:i,htmlFor:f,children:[u("span",{css:b({display:"inline-block",height:O,position:"relative",width:v},"",""),children:[o(Si,Di({"aria-describedby":C?m==null?void 0:m.messageId:void 0,"aria-invalid":C||void 0,"aria-required":S,disabled:i,height:O,id:f,name:I,ref:t,type:"radio",width:v},p)),o(wi,{disabled:i,invalid:C,size:c})]}),o(Mi,{disabled:i,size:c,children:r})]})});function ji(e){var n=te(e);return e||"radio-".concat(n)}function Hn(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function Un(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?Hn(Object(t),!0).forEach(function(r){P(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Hn(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var Bi=function(n){var t=n.disabled,r=n.indeterminate,i=n.invalid,a=n.size,s=L.control[a],l=s.width,d=s.height,c=s.borderWidth;return o(x,{alignItems:"center",as:"span",css:b(Un(Un({backgroundColor:g.backgroundBody,borderColor:g.border,borderStyle:"solid",borderWidth:c,color:g.foregroundText,inset:0,position:"absolute"},t&&{color:g.borderMuted,borderColor:g.borderMuted,backgroundColor:g.backgroundShade,"@media (forced-colors: active)":{borderColor:"GrayText",color:"GrayText"}}),i&&{borderColor:g.systemError,backgroundColor:g.systemErrorMuted}),"",""),flexShrink:0,height:d,justifyContent:"center",rounded:!0,width:l,children:r?o(_o,{size:a,weight:"bold"}):o(Wo,{size:a,weight:"bold"})})},Ei=["height","width"];function Yn(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function Ri(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?Yn(Object(t),!0).forEach(function(r){P(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Yn(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var Ti=h.forwardRef(function(n,t){var r=n.height,i=n.width,a=q(n,Ei);return o("input",Ri({css:b({height:r,margin:0,opacity:0,verticalAlign:"middle",width:i,"&:focus ~ span:first-of-type":L.outline,"~ span > svg":{opacity:0},"&:checked ~ span > svg, &:indeterminate ~ span > svg":{opacity:1}},"",""),ref:t},a))});function Fi(e){var n=e.children,t=e.htmlFor,r=e.disabled;return o(x,{alignItems:"flex-start",as:"label",color:"text",css:b({cursor:r?"not-allowed":"pointer"},"",""),gap:.5,htmlFor:t,inline:!0,children:n})}var Ni={sm:0,md:"0.2rem"};function zi(e){var n=e.children,t=e.disabled,r=e.size,i=Ni[r];return o(k,{color:t?"muted":"text",css:b({paddingTop:i},"",""),flexGrow:1,children:n})}var $i=["checked","children","disabled","indeterminate","invalid","name","required","size"];function Kn(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function _i(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?Kn(Object(t),!0).forEach(function(r){P(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Kn(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var rn=h.forwardRef(function(n,t){var r=n.checked,i=n.children,a=n.disabled,s=n.indeterminate,l=n.invalid,d=n.name,c=n.required,p=n.size,f=p===void 0?"md":p,m=q(n,$i),w=Wi(m.id),O=h.useRef(null),v=Gr(),C=L.control[f],S=C.height,I=C.width,B=typeof l=="boolean"?l:v==null?void 0:v.invalid,E=typeof c=="boolean"?c:v==null?void 0:v.required,H=d||(v==null?void 0:v.name);h.useEffect(function(){O.current&&(O.current.indeterminate=!!s)},[s]);var N=s?!1:r;return u(Fi,{disabled:a,htmlFor:w,children:[u("span",{css:b({display:"inline-block",height:S,position:"relative",width:I},"",""),children:[o(Ti,_i({"aria-checked":s?"mixed":void 0,"aria-describedby":B?v==null?void 0:v.messageId:void 0,"aria-invalid":B||void 0,"aria-required":E,checked:N,disabled:a,height:S,id:w,name:H,ref:Mo([t,O]),type:"checkbox",width:I},m)),o(Bi,{disabled:a,indeterminate:s,invalid:B,size:f})]}),o(zi,{disabled:a,size:f,children:i})]})});function Wi(e){var n=te(e);return e||"checkbox-".concat(n)}var qi=["label","hideOptionalLabel","required","hint","message","invalid","block","maxWidth","options","placeholder","id"];function Qn(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function K(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?Qn(Object(t),!0).forEach(function(r){P(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Qn(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var Gi=h.forwardRef(function(n,t){var r=n.label,i=n.hideOptionalLabel,a=n.required,s=n.hint,l=n.message,d=n.invalid,c=n.block,p=n.maxWidth,f=p===void 0?"md":p,m=n.options,w=n.placeholder,O=n.id,v=q(n,qi),C=Ki({block:c});return o(bi,{hideOptionalLabel:i,hint:s,id:O,invalid:d,label:r,maxWidth:f,message:l,required:a,children:function(I){return u(Hi,{block:c,maxWidth:f,children:[o("select",K(K(K({css:C,ref:t},I),v),{},{children:o(Ui,{options:m,placeholder:w})})),o(Yi,{disabled:v.disabled})]})}})}),Hi=function(n){var t=n.children,r=n.block,i=n.maxWidth;return o("div",{css:b(K({position:"relative"},!r&&{maxWidth:y.maxWidth.field[i]}),"",""),children:t})},Ui=function(n){var t=n.options,r=n.placeholder;return u(h.Fragment,{children:[r?o("option",{value:"",children:r}):null,t.map(function(i){return"options"in i?o("optgroup",{disabled:i.disabled,label:i.label,children:i.options.map(function(a){var s=a.value,l=a.label,d=a.disabled;return o("option",{disabled:d,value:s,children:l},s)})},i.label):o("option",{disabled:i.disabled,value:i.value,children:i.label},i.value)})]})},Yi=function(n){var t=n.disabled;return o(jr,{css:b({position:"absolute",top:"50%",right:A(.75),transform:"translateY(-50%)",opacity:t?.3:void 0,pointerEvents:"none",color:g.foregroundAction},"","")})},Ki=function(n){var t=n.block;return K(K(K(K({position:"relative",appearance:"none",boxSizing:"border-box",paddingLeft:A(1),paddingRight:"calc(".concat(y.borderWidth.lg,"px + 2.5rem)"),margin:0,background:g.backgroundBody,borderWidth:y.borderWidth.lg,borderStyle:"solid",borderColor:g.border,borderRadius:y.borderRadius,color:g.foregroundText,width:"100%",fontFamily:y.font.body},L.input.md),{},{lineHeight:y.lineHeight.default},L.truncate),t&&{maxWidth:"none",display:"block"}),{},{'&[aria-invalid="true"]':{backgroundColor:g.systemErrorMuted,borderColor:g.systemError},"&:disabled":{opacity:1,cursor:"not-allowed",borderColor:g.borderMuted,backgroundColor:g.backgroundShade,color:g.foregroundMuted},"&:focus":L.outline})};function Hr(){var e=h.useState(!1),n=e[0],t=e[1];return h.useEffect(function(){t(!0)},[]),n}function Ur(e,n){var t=e||n;if(!t)throw new Error("onClose prop is required");return t}function Qi(e,n){return e||n}function Xi(){var e=te();return{titleId:"drawer-".concat(e,"-title")}}var Vi={name:"6dhm9o",styles:"visibility:hidden"};function Zi(e){var n=e.actions,t=e.children,r=e.elementToFocusOnClose,i=e.onClose,a=e.title,s=Xi(),l=s.titleId;return o(kn,{returnFocus:r?function(){return window.setTimeout(function(){return r.focus()},0),!1}:!0,children:u(x,{"aria-labelledby":l,"aria-modal":!0,background:"body",css:b({boxShadow:y.shadow.lg,inset:0,position:"fixed"},"",""),flexDirection:"column",highContrastOutline:!0,role:"dialog",children:[u(Ji,{children:[o(na,{id:l,children:a}),o(W,{"aria-hidden":!0,css:Vi,iconAfter:fe,tabIndex:-1,variant:"text",children:"Close"})]}),o(ta,{title:a,children:t}),n?o(oa,{children:n}):null,o(W,{css:se({position:"fixed",right:kr({xs:A(.75),md:A(1.5)}),top:"1.25rem",zIndex:y.zIndex.elevated}),iconAfter:fe,onClick:i,variant:"text",children:"Close"})]})})}function Ji(e){var n=e.children;return o(x,{background:"body",borderBottom:!0,paddingX:{xs:.75,md:1.5},paddingY:1,children:n})}var ea={name:"1r5gb7q",styles:"display:inline-block"};function na(e){var n=e.children,t=e.id;return o(k,{as:"h2",css:ea,"data-autofocus":!0,focusRingFor:"keyboard",fontSize:"lg",fontWeight:"bold",id:t,lineHeight:"heading",tabIndex:-1,children:n})}function ta(e){var n=e.children,t=e.title;return o(M,{"aria-label":"".concat(t," content"),as:"section",background:"body",css:b({overflowY:"auto",":focus":{outlineOffset:"-".concat(L.outline.outlineWidth)}},"",""),flexGrow:1,focusRingFor:"keyboard",paddingX:{xs:.75,md:1.5},paddingY:{xs:1,md:1.5},tabIndex:0,children:n})}var ra={name:"xdvdnl",styles:"margin-top:auto"};function oa(e){var n=e.children;return o(M,{background:"body",borderTop:!0,css:ra,paddingX:{xs:.75,md:1.5},paddingY:1,children:n})}var ia={md:"32rem",lg:"45rem"},aa=function(n){var t=n.actions,r=n.children,i=n.elementToFocusOnClose,a=n.isOpen,s=a===void 0?!1:a,l=n.mutedOverlay,d=l===void 0?!1:l,c=n.onClose,p=n.onDismiss,f=n.title,m=n.width,w=m===void 0?"md":m,O=Ur(c,p),v=h.useRef(0),C=Nr(),S=h.useState(!0),I=S[0],B=S[1],E=Hr();h.useEffect(function(){v.current=window.innerWidth-document.documentElement.clientWidth},[]),h.useEffect(function(){s&&B(!1)},[s]),h.useEffect(function(){var U=function(Y){s&&Y.code==="Escape"&&(Y.preventDefault(),Y.stopPropagation(),O())};return window.addEventListener("keydown",U),function(){return window.removeEventListener("keydown",U)}},[s,O]);var H=wn(E?s:!1),N=H.modalContainerRef;if(!E||!Cn())return null;var Q=s?!0:!I;return In.createPortal(u(h.Fragment,{children:[s?o(ca,{scrollbarWidth:v.current}):null,u("div",{ref:N,children:[o("div",{css:b({pointerEvents:"none",position:"absolute",opacity:s?1:0,transition:s?"none":"opacity ".concat(C?"1ms":"150ms")},"",""),"data-drawer":"transitioner",onTransitionEnd:function(){B(!0)}}),o(sa,{isOpen:s,mutedOverlay:d,onClick:O,prefersReducedMotion:C}),o(M,{css:b({inset:0,marginLeft:"auto",position:"fixed",transform:"translateX(".concat(s?"0":"100%",")"),transition:"transform ".concat(C?"1ms":"150ms"," ease"),zIndex:y.zIndex.dialog},"",""),maxWidth:ia[w],children:Q&&o(Zi,{actions:t,elementToFocusOnClose:i,onClose:O,title:f,children:r})})]})]}),document.body)};function sa(e){var n=e.isOpen,t=e.mutedOverlay,r=e.onClick,i=e.prefersReducedMotion;return o("div",{css:b({pointerEvents:n?"all":"none",position:"fixed",inset:0,backgroundColor:t?g.overlayMuted:g.overlay,opacity:n?1:0,transition:"opacity ".concat(i?"1ms":"150ms"," ease"),zIndex:y.zIndex.overlay},"",""),onClick:r})}function ca(e){var n=e.scrollbarWidth;return o(Pn,{styles:b({html:{marginRight:n,scrollbarGutter:"auto"},body:{overflow:"hidden"}},"","")})}var Xn,la=h.forwardRef(function(n,t){var r=n.children;return o("div",{css:b({position:"fixed",top:0,left:0,bottom:0,right:0,backgroundColor:g.overlay,zIndex:y.zIndex.overlay,overflowY:"auto",animation:"".concat(da," ").concat(y.transition.duration,"ms ").concat(y.transition.timingFunction)},"",""),ref:t,children:r})}),da=Sr(Xn||(Xn=Lr([`
  0% { opacity: 0; }
  100% { opacity: 1; }
`]))),ua=function(n){var t=n.children,r=n.id;return o(k,{as:"h2","data-autofocus":!0,focusRingFor:"keyboard",fontSize:"lg",fontWeight:"bold",id:r,lineHeight:"heading",tabIndex:-1,children:t})},pa=function(){var n=te();return{titleId:"modal-".concat(n,"-title")}},Vn,fa="45rem",ha={name:"1duj7gx",styles:"align-self:flex-end"},ga={name:"xdvdnl",styles:"margin-top:auto"},ma=function(n){var t=n.actions,r=n.children,i=n.onClose,a=n.title,s=pa(),l=s.titleId;return o(kn,{returnFocus:!0,children:u(j,{"aria-labelledby":l,"aria-modal":!0,background:"body",css:b(P({boxShadow:y.shadow.lg,position:"relative",margin:"0 auto",minHeight:"100vh",animation:"".concat(va," ").concat(y.transition.duration,"ms ").concat(y.transition.timingFunction),"@supports (min-height: 100dvh)":{minHeight:"100dvh"}},y.mediaQuery.min.sm,{borderRadius:y.borderRadius,margin:"".concat(A(6)," auto ").concat(A(1)),minHeight:"auto"}),"",""),gap:1,highContrastOutline:!0,maxWidth:fa,paddingX:{xs:.75,md:1.5},paddingY:{xs:1,md:1.5},role:"dialog",children:[o(W,{"aria-label":"Close modal",css:ha,iconAfter:fe,onClick:i,variant:"text",children:"Close"}),o(ua,{id:l,children:a}),o(M,{children:r}),t?o(M,{css:ga,paddingTop:1,children:t}):null]})})},va=Sr(Vn||(Vn=Lr([`
  0% { transform: translateY(1rem); }
	100% { transform: translateY(0); }
`]))),Yr=function(n){var t=n.actions,r=n.children,i=n.isOpen,a=i===void 0?!1:i,s=n.onClose,l=n.onDismiss,d=n.title,c=Ur(s,l);h.useEffect(function(){var m=function(O){a&&O.code==="Escape"&&(O.preventDefault(),O.stopPropagation(),c())};return window.addEventListener("keydown",m),function(){return window.removeEventListener("keydown",m)}},[c,a]);var p=wn(a),f=p.modalContainerRef;return!a||!Cn()?null:In.createPortal(u(h.Fragment,{children:[o(ya,{}),o(la,{ref:f,children:o(ma,{actions:t,onClose:c,title:d,children:r})})]}),document.body)},ba={name:"1sy9iaq",styles:"body{overflow:hidden;}"},ya=function(){return o(Pn,{styles:ba})};function Oa(e){var n,t,r=Array.from(e.matchAll(new RegExp(/(\p{L})\p{L}+/,"gu")));if(!r.length)return"?";var i=((n=r.shift())===null||n===void 0?void 0:n[1])||"",a=((t=r.pop())===null||t===void 0?void 0:t[1])||"";return(i+a).toUpperCase()}function Kr(e){var n=e.name,t=e.tone,r=t===void 0?"neutral":t,i=e.size,a=i===void 0?"md":i,s=e["aria-hidden"],l=e["aria-label"],d=Oa(n),c=Pa[r],p=xa[a],f=p.size,m=p.fontSize;return o(x,{alignItems:"center","aria-hidden":s,"aria-label":l,as:"span",css:b({textDecoration:"none",height:"".concat(f,"rem"),width:"".concat(f,"rem"),borderRadius:"50%",borderStyle:"solid",borderWidth:y.borderWidth.sm,borderColor:c,color:c},"",""),flexShrink:0,fontSize:m,fontWeight:"bold",justifyContent:"center",children:d})}var Pa={neutral:g.foregroundMuted,action:g.foregroundAction},xa={sm:{fontSize:"xs",size:2},md:{fontSize:"sm",size:2.5},lg:{fontSize:"md",size:3},xl:{fontSize:"lg",size:4},xxl:{fontSize:"xl",size:4.5},xxxl:{fontSize:"xl",size:5}},Qr=h.createContext(void 0);function me(){var e=h.useContext(Qr);if(e===void 0)throw new Error("`AppLayoutContext` not found.");return e}function wa(e,n){var t=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=Ca(e))||n){t&&(e=t);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(c){throw c},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a,s=!0,l=!1;return{s:function(){t=t.call(e)},n:function(){var c=t.next();return s=c.done,c},e:function(c){l=!0,a=c},f:function(){try{s||t.return==null||t.return()}finally{if(l)throw a}}}}function Ca(e,n){if(e){if(typeof e=="string")return Zn(e,n);var t={}.toString.call(e).slice(8,-1);return t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set"?Array.from(e):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Zn(e,n):void 0}}function Zn(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=Array(n);t<n;t++)r[t]=e[t];return r}var $="xl",Mn="16rem",ka=function(n,t){if(!t)return"";var r=n.flatMap(function(c){return Array.isArray(c)?c:[c].concat(Rn(c.items))}).flatMap(function(c){return"items"in c&&c.items!==void 0?[c].concat(Rn(c.items)):c}).map(function(c){return c&&"href"in c&&c.href!==void 0?c.href:""}),i,a="",s=wa(r),l;try{for(s.s();!(l=s.n()).done;){var d=l.value;if(d===t){i=d;break}t!=null&&t.startsWith(d)&&d.length>a.length&&(a=d)}}catch(c){s.e(c)}finally{s.f()}return i||a};function Sa(e){var n=e.children,t=e.focusMode,r=t===void 0?!1:t,i=un(!1),a=Co(i,3),s=a[0],l=a[1],d=a[2];return o(Qr.Provider,{value:{focusMode:r,isMobileMenuOpen:s,openMobileMenu:l,closeMobileMenu:d},children:o(Ia,{focusMode:r,children:n})})}function Ia(e){var n=e.children,t=e.focusMode;return o("div",{css:se({display:"grid",minHeight:"100vh",gridTemplateRows:"auto 1fr",gridTemplateColumns:kr(P({xs:"1fr"},$,t?"1fr":"".concat(Mn," 1fr")))}),children:n})}function Jn(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function ue(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?Jn(Object(t),!0).forEach(function(r){P(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Jn(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var le=1.5,pn="3.75rem",La={name:"1kn4ch8",styles:"margin-left:-0.5rem;margin-right:-0.5rem;overflow:hidden"};function Ma(e){var n=e.badgeLabel,t=e.dividerPosition,r=e.logo,i=e.heading,a=e.hasAccountDetails,s=e.href,l=e.secondHref,d=e.secondLogo,c=e.subLine,p=Ln();return r&&d?u(x,{css:La,flexDirection:{xs:"column",lg:"row"},flexWrap:{xs:"wrap",xl:"nowrap"},gap:{xs:1,md:le},inline:!0,padding:.5,children:[u(x,{css:b({marginRight:a&&t==="after"?A(le):0},"",""),flexDirection:{xs:"column",sm:"row"},flexShrink:0,gap:le,children:[o(x,{alignSelf:{xs:"start",sm:"center"},as:p,color:"text",css:b(ue({" img, svg":{height:pn}},L.print.hidden),"",""),focusRingFor:"keyboard",href:s,children:r}),t==="between"&&o(on,{dividerPosition:t}),o(x,ue(ue({alignSelf:{xs:"start",sm:"center"},as:l?p:"span",color:"text",css:b(ue({" img, svg":{width:"100%"}},L.print.hidden),"",""),focusRingFor:"keyboard"},l&&{href:l}),{},{children:d}))]}),u(x,{css:t==="after"?P({},y.mediaQuery.min.lg,{marginLeft:"calc(-".concat(a?A(le):0," - ").concat(y.borderWidth.sm,"px)")}):void 0,gap:le,children:[t==="after"&&o(on,{dividerPosition:t}),u(j,{as:p,color:"text",css:b({textDecoration:"none",":hover":L.underline},"",""),focusRingFor:"keyboard",href:s,justifyContent:"center",children:[u(x,{alignItems:"flex-start",gap:.5,children:[o(k,{fontSize:"lg",fontWeight:"bold",children:i}),n&&o(et,{children:n})]}),c&&o(k,{color:"muted",fontSize:"xs",children:c})]})]})]}):u(x,{alignItems:{xs:"flex-start",md:"center"},as:p,color:"text",css:b({textDecoration:"none","&:hover":L.underline,svg:{display:"block",height:pn,flexShrink:0}},"",""),flexDirection:{xs:"column",md:"row"},focusRingFor:"keyboard",gap:{xs:1,md:0},href:s,paddingY:.5,children:[r,o(on,{singleLogo:!0}),u(x,{alignItems:"flex-start",flexDirection:"column",justifyContent:"center",maxWidth:y.maxWidth.bodyText,children:[u(x,{alignItems:"flex-start",gap:.5,children:[o(k,{fontSize:"lg",fontWeight:"bold",children:i}),n&&o(et,{children:n})]}),c&&o(k,{color:"muted",fontSize:"xs",children:c})]})]})}function et(e){var n=e.children;return o(M,{border:!0,borderWidth:"md",css:b({fontSize:"0.75rem",paddingTop:"2px",paddingBottom:"2px",borderColor:g.foregroundText,borderRadius:"2em"},"",""),fontWeight:"bold",paddingLeft:.5,paddingRight:.5,children:n})}var on=function(n){var t=n.dividerPosition,r=n.singleLogo;return o(M,{borderLeft:!0,css:b(ue({margin:r?"0 1rem":void 0},L.print.hidden),"",""),display:r?{xs:"none",md:"block"}:{xs:"none",sm:t==="between"?"block":void 0,lg:"block"},height:r?pn:void 0})},Aa=["ref"];function nt(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function tt(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?nt(Object(t),!0).forEach(function(r){P(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):nt(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function Da(e){var n=e.children,t=e.name,r=e.avatarName,i=e.secondaryText;return u(Eo,{popoverOffset:-8,popoverPlacement:"bottom-end",children:[o(Ra,{avatarName:r,name:t,secondaryText:i}),n]})}var ja={name:"d3v9zr",styles:"overflow:hidden"},Ba={name:"d3v9zr",styles:"overflow:hidden"},Ea={name:"ozd7xs",styles:"flex-shrink:0"};function Ra(e){var n=e.name,t=e.avatarName,r=e.secondaryText,i=Ro(),a=i.isMenuOpen,s=To(),l=s.ref,d=q(s,Aa),c=h.useRef(0),p=Ke("sm");return h.useEffect(function(){c.current=window.innerWidth-document.documentElement.offsetWidth},[]),u(x,tt(tt({as:Ye,ref:l},d),{},{alignItems:"center",background:a?"shade":void 0,color:"action",css:se({marginLeft:"auto",maxWidth:"calc(17.625rem - ".concat(c.current,"px)"),overflow:"hidden",svg:{transform:a?"rotate(180deg)":void 0,transition:p.transition},":hover":{backgroundColor:g.backgroundShade,"& > span:last-of-type > span:last-of-type":L.underline,svg:{transform:a?"rotate(180deg) ".concat(p.transform):p.transform}}}),focusRingFor:"keyboard",gap:1,justifyContent:"space-between",minHeight:"5.25rem",padding:1,children:[o(Mr,{children:"Account menu"}),u(x,{alignItems:"center","aria-hidden":!0,as:"span",css:ja,gap:.5,width:"100%",children:[o(Kr,{name:t??n,size:"md",tone:"action"}),u(x,{as:"span",css:Ba,flexDirection:"column",width:"100%",children:[o(k,{color:"action",css:L.truncate,fontSize:"xs",fontWeight:"bold",children:n}),r?o(k,{color:"muted",css:L.truncate,fontSize:"xs",children:r}):null]})]}),o(jr,{css:Ea,size:"sm",weight:"bold"})]}))}function rt(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function an(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?rt(Object(t),!0).forEach(function(r){P(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):rt(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var Ta={name:"d3v9zr",styles:"overflow:hidden"};function Xr(e){var n=e.name,t=e.avatarName,r=e.secondaryText,i=e.href,a=e.dropdown,s=Ln(),l=h.useRef(0);if(h.useEffect(function(){l.current=window.innerWidth-document.documentElement.offsetWidth},[]),a)return o(Da,{avatarName:t,name:n,secondaryText:r,children:a});var d=!!i;return u(x,an(an({as:"span"},d&&{as:s,href:i,focusRingFor:"keyboard"}),{},{alignItems:"center",css:se(an({marginLeft:"auto",maxWidth:"calc(17.625rem - ".concat(l.current,"px)"),textDecoration:"none"},d&&{"&:hover":{"& > span > span":{textDecoration:"underline"}}})),flexShrink:0,gap:.5,minHeight:"5.25rem",textAlign:"right",children:[u(x,{as:"span",css:Ta,flexDirection:"column",children:[o(k,{color:"action",css:L.truncate,fontSize:"xs",fontWeight:"bold",children:n}),r?o(k,{color:"muted",css:L.truncate,fontSize:"xs",children:r}):null]}),o(Kr,{"aria-hidden":!0,name:n,size:"md",tone:"action"})]}))}function ot(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function Fa(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?ot(Object(t),!0).forEach(function(r){P(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ot(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function Na(e){var n=e.accountDetails,t=me(),r=t.focusMode,i=t.openMobileMenu;return u(x,{alignItems:"center",background:"body",display:P({xs:"flex"},$,"none"),flexWrap:"wrap",justifyContent:r?"flex-end":"space-between",paddingLeft:.75,paddingRight:n!=null&&n.dropdown?.75:y.containerPadding,children:[r?null:o(za,{onClick:i}),n?o(Xr,Fa({},n)):null]})}function za(e){var n=e.onClick,t=me(),r=t.isMobileMenuOpen,i=Ke();return u(x,{alignItems:"center","aria-expanded":r,"aria-haspopup":"dialog",as:Ye,color:"action",css:b({svg:{transition:i.transition},"&:hover":{backgroundColor:g.backgroundShade,textDecoration:"underline",svg:{transform:i.transform}}},"",""),flexDirection:"column",focusRingFor:"keyboard",fontSize:"xs",gap:.5,justifyContent:"center",minHeight:"5.25rem",onClick:n,paddingX:1,children:[o(qo,{"aria-hidden":!0}),o("span",{children:"Menu"})]})}function it(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function $a(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?it(Object(t),!0).forEach(function(r){P(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):it(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function _a(e){var n=e.accountDetails,t=e.background,r=t===void 0?"bodyAlt":t,i=e.badgeLabel,a=e.borderColor,s=a===void 0?"accent":a,l=e.dividerPosition,d=l===void 0?"after":l,c=e.heading,p=e.href,f=e.id,m=e.logo,w=e.palette,O=w===void 0?"dark":w,v=e.secondHref,C=e.secondLogo,S=e.subLine,I=e.statusIndicator;return u(x,{as:"header",borderBottom:!0,borderBottomWidth:"xxl",borderColor:s,css:b(P({},y.mediaQuery.min[$],{gridColumnStart:1,gridColumnEnd:3}),"",""),flexDirection:"column",id:f,palette:O,children:[u(x,{alignItems:"center",background:r,gap:1,justifyContent:"space-between",paddingX:y.containerPadding,paddingY:.5,width:"100%",children:[o(Ma,{badgeLabel:i,dividerPosition:d,hasAccountDetails:!!n,heading:c,href:p,logo:m,secondHref:v,secondLogo:C,subLine:S}),u(x,{alignItems:"center",alignSelf:P({xs:"start"},$,"center"),gap:1,paddingTop:P({xs:.5},$,0),children:[I||null,o(M,{display:P({xs:"none"},$,"flex"),children:n?o(Xr,$a({},n)):null})]})]}),o(Na,{accountDetails:n})]})}var Wa=["endElement","icon","isActive","items","label","level"];function at(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function R(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?at(Object(t),!0).forEach(function(r){P(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):at(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var qa=function e(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return function(r){var i,a,s="href"in r&&r.href===n,l=s||An(r.items,n);return R(R({},r),{},{isActive:l,items:l||(i=r.items)!==null&&i!==void 0&&i.length?r==null||(a=r.items)===null||a===void 0?void 0:a.map(e(n,t+1)):void 0,level:t+1})}},st=function(n){var t=n.activePath,r=n.background,i=n.items,a=n.subLevelVisible;return o(j,{"aria-label":"main",as:"nav",paddingBottom:1.5,children:o(j,{as:"ul",children:i.map(function(s,l){var d,c,p=l===0,f=(Array.isArray(s)?s:s.items).map(qa(t)),m=Array.isArray(s)?!1:!!(!((d=s.options)===null||d===void 0)&&d.disableGroupPadding),w=i[l-1],O=w?Array.isArray(w)?!1:!!(!((c=w.options)===null||c===void 0)&&c.disableGroupPadding):!1;return u(h.Fragment,{children:[p?null:o(Ha,{disablePaddingBottom:m,disablePaddingTop:O}),f.map(function(v,C){var S=An(v.items,t),I=a==="always"||S;return o(Vr,{activePath:t,background:r,isActiveGroup:S,isOpen:I,item:v,subLevelVisible:a},C)})]},l)})})})},Ga={name:"1ff36h2",styles:"flex-grow:1"};function Vr(e){var n=e.activePath,t=e.background,r=e.isActiveGroup,i=e.isOpen,a=e.item,s=e.subLevelVisible,l=Ln(),d=a.endElement,c=a.icon,p=a.isActive,f=a.items,m=a.label,w=a.level,O=q(a,Wa),v=me(),C=v.closeMobileMenu,S=(f==null?void 0:f.length)||0,I=S>0&&s!=="always";if("href"in a){var B,E,H,N=a.href===n;return u(sn,{background:t,hasEndElement:!!d,isActive:r,isCurrentPage:N,isOpen:i,level:a.level,onClick:C,children:[u(l,R(R({"aria-current":N?"page":void 0,"aria-label":I?"".concat(m).concat(p?", has expanded sub links":", has sub links"):void 0},O),{},{children:[c&&w===1&&o(c,{color:"inherit"}),w===2&&o("span",{"aria-hidden":!0,children:"–"}),o("span",{css:Ga,children:m}),d,I&&o(Go,{css:b({transform:p?"rotate(90deg)":void 0},"",""),size:"md"})]})),!!(!((B=a.items)===null||B===void 0)&&B.length)&&(i||N)&&o(j,{as:"ul",children:(E=a.items)===null||E===void 0||(H=E.map)===null||H===void 0?void 0:H.call(E,function(Q){var U;return o(Vr,{activePath:n,background:t,isActiveGroup:!!p,isOpen:i,item:Q,subLevelVisible:s},(U=Q.label)===null||U===void 0?void 0:U.toString())})})]})}return"onClick"in a?o(sn,{background:t,hasEndElement:!!d,isActive:!1,isCurrentPage:!1,isOpen:!1,onClick:C,children:u(Ye,R(R({},O),{},{children:[c?o(c,{color:"inherit"}):null,o("span",{children:m}),d]}))}):o(sn,{background:t,hasEndElement:!1,isActive:!1,isCurrentPage:!1,isOpen:!1,children:o(j,{as:"span",gap:.25,children:m})})}function sn(e){var n=e.background,t=e.children,r=e.hasEndElement,i=e.isCurrentPage,a=e.isActive,s=e.isOpen,l=e.level,d=e.onClick;return o("li",{css:b({"> a, > button, > span":{width:"100%",boxSizing:"border-box",wordBreak:"break-word",paddingTop:A(1),paddingBottom:A(1),paddingLeft:A(l===2?3:1.5),paddingRight:A(1),"& > svg":{flexShrink:0}},"> a, > button":R(R(R(R({position:"relative",display:"flex",alignItems:"center",gap:A(.75),color:a&&l!==2||i?g.foregroundText:g.foregroundAction},(a||i||s)&&{fontWeight:i?y.fontWeight.bold:y.fontWeight.normal,background:i?g.selectedMuted:void 0,"&::before":R(R(R({content:"''",position:"absolute",top:0,left:0,bottom:0,borderLeftStyle:"solid",borderLeftWidth:y.borderWidth.xl},i&&{borderLeftColor:g.selected}),!i&&a&&{borderLeftColor:g.borderMuted}),!i&&!a&&s&&{borderLeft:"none"})}),r&&{"& > :last-child":{marginLeft:"auto"}}),{},{"&:hover":P({background:g[n==="body"?"backgroundShade":"backgroundShadeAlt"],color:g.foregroundText},"& > span:nth-of-type(".concat(l,")"),L.underline)},ko),{},{":focus-visible":{zIndex:y.zIndex.elevated,outlineOffset:"-".concat(L.outline.outlineWidth),"&::before":{zIndex:-1}}}),"> span":{color:g.foregroundText},"> a":{textDecoration:"none"}},"",""),onClick:d,children:t})}function Ha(e){var n=e.disablePaddingTop,t=e.disablePaddingBottom;return o(M,{"aria-hidden":!0,as:"li",paddingBottom:t?0:1,paddingTop:n?0:1,children:o("hr",{css:b({boxSizing:"content-box",height:0,margin:0,overflow:"visible",border:"none",borderTopWidth:y.borderWidth.sm,borderTopStyle:"solid",borderColor:g.borderMuted,width:"100%"},"","")})})}function An(e,n){return e!=null&&e.length&&n?e.some(function(t){return"href"in t&&t.href===n||"items"in t&&An(t.items,n)}):!1}var Ua={name:"qvn77x",styles:"inset:0;overflow-y:auto;position:fixed"};function Ya(e){var n=e.children,t=e.palette,r=me(),i=r.isMobileMenuOpen,a=r.closeMobileMenu,s=Nr(),l=h.useState(!0),d=l[0],c=l[1],p=Hr();h.useEffect(function(){i&&c(!1)},[i]),h.useEffect(function(){var O=function(C){C.code==="Escape"&&(C.preventDefault(),C.stopPropagation(),a())};return window.addEventListener("keydown",O),function(){return window.removeEventListener("keydown",O)}},[a]);var f=wn(p?i:!1),m=f.modalContainerRef;if(!p||!Cn())return null;var w=i?!0:!d;return In.createPortal(u(Ir,{children:[i&&o(Ka,{}),u("div",{ref:m,children:[o("div",{css:b({pointerEvents:"none",position:"absolute",opacity:i?1:0,transition:i?"none":"opacity ".concat(s?"1ms":"150ms")},"",""),"data-app-layout-sidebar":"transitioner",onTransitionEnd:function(){c(!0)}}),o(Qa,{isOpen:i,onClick:a,prefersReducedMotion:s}),o(M,{css:b({bottom:0,left:0,position:"fixed",top:0,transform:"translateX(".concat(i?"0":"-100%",")"),transition:"transform ".concat(s?"1ms":"150ms"," ease"),zIndex:y.zIndex.dialog},"",""),display:P({},$,"none"),width:Mn,children:w&&o(kn,{returnFocus:!0,children:u(M,{"aria-label":"Menu","aria-modal":!0,background:"shade",css:Ua,display:P({},$,"none"),palette:t,role:"dialog",children:[o(Xa,{onClick:a}),n]})})})]})]}),document.body)}function Ka(){return o(Pn,{styles:b(P({body:{overflow:"hidden"}},y.mediaQuery.min[$],{body:{overflow:"unset"}}),"","")})}function Qa(e){var n=e.isOpen,t=e.onClick,r=e.prefersReducedMotion;return o("div",{css:b(P({backgroundColor:g.overlay,display:"block",inset:0,opacity:n?1:0,pointerEvents:n?"all":"none",position:"fixed",transition:"opacity ".concat(r?"1ms":"150ms"," ease"),zIndex:y.zIndex.overlay},y.mediaQuery.min[$],{display:"none"}),"",""),onClick:t})}function Xa(e){var n=e.onClick,t=Ke();return o(x,{alignItems:"center",borderBottom:!0,borderColor:"muted",flexShrink:0,paddingLeft:1,children:u(x,{alignItems:"center",as:Ye,color:"action",css:b({svg:{transition:t.transition},":focus":{outlineOffset:"-".concat(L.outline.outlineWidth)},":hover svg":{transform:t.transform}},"",""),flexDirection:"column",focusRingFor:"keyboard",fontSize:"xs",gap:.5,onClick:n,padding:1,children:[o(fe,{}),o("span",{"aria-hidden":!0,children:"Close"}),o(Mr,{children:"Close menu"})]})})}function ct(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function be(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?ct(Object(t),!0).forEach(function(r){P(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ct(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function lt(e){var n=e.activePath,t=e.background,r=t===void 0?"bodyAlt":t,i=e.items,a=e.palette,s=e.subLevelVisible,l=s===void 0?"whenActive":s,d=me(),c=d.focusMode,p=ka(i,n),f={activePath:p,items:i,subLevelVisible:l};return u(h.Fragment,{children:[o(j,{background:r,borderColor:"muted",borderRight:!0,css:b(P({display:"none",width:Mn},y.mediaQuery.min[$],{display:c?"none":"flex"}),"",""),flexGrow:1,gap:1,palette:a,children:o(st,be(be({},f),{},{background:r}))}),o(Ya,{palette:a,children:o(st,be(be({},f),{},{background:"bodyAlt"}))})]})}var Va={name:"ovk77c",styles:"min-width:0"};function Za(e){var n=e.children;return o(x,{css:Va,flexDirection:"column",children:n})}var Ja={name:"xdvdnl",styles:"margin-top:auto"};function es(e){var n=e.background,t=n===void 0?"body":n,r=e.children,i=e.id,a=e.maxWidth,s=e.palette;return o(M,{as:"footer",background:t,css:Ja,id:i,palette:s,children:o(Ao,{maxWidth:a,children:o(j,{borderColor:"muted",borderTop:!0,borderTopWidth:"xl",gap:1.5,paddingY:3,width:"100%",children:r})})})}function ns(){return o("hr",{"aria-hidden":!0,css:b({boxSizing:"content-box",height:0,margin:0,overflow:"visible",border:"none",borderTopWidth:1,borderTopStyle:"solid",borderColor:g.borderMuted,width:"100%"},"","")})}const ts=(e,n)=>{const{domain:t}=n;return e.kind==="standalone"?e.url:typeof t=="function"?t(e):`https://${e.subdomain}.${t}${e.path}`},rs=e=>n=>{const t={};return Object.entries(e).forEach(([r,i])=>{t[r]=ts(i,{domain:n})}),t},dt=e=>n=>({kind:"scoped",subdomain:e,path:n}),os=e=>({kind:"standalone",url:e}),is=(()=>{const e=dt("exports"),n=dt("services"),t=os,r={account:n("/account"),profile:n("/account/profile"),dashboard:n("/account/dashboard"),people:n("/account/manage-people"),accountExports:n("/account/exports"),accountImports:n("/account/imports"),about:n("/about"),contactUs:n("/about/contact-us"),help:n("/help"),privacy:n("/privacy"),accessibility:t("https://www.agriculture.gov.au/about/commitment/accessibility"),disclaimer:t("https://www.agriculture.gov.au/about/disclaimer"),establishments:e("/establishments"),intelligence:e("/intelligence"),compliance:e("/compliance"),quotas:e("/quota"),exportSystems:e("/export-systems"),licences:e("/licences"),invoices:e("/inexs")};return rs(r)})(),as=Bo(u(h.Fragment,{children:[o("path",{d:"M4 2V22L6 21L8 22L10 21L12 22L14 21L16 22L18 21L20 22V2L18 3L16 2L14 3L12 2L10 3L8 2L6 3L4 2Z"}),o("path",{d:"M16 8H10C9.46957 8 8.96086 8.21071 8.58579 8.58579C8.21071 8.96086 8 9.46957 8 10C8 10.5304 8.21071 11.0391 8.58579 11.4142C8.96086 11.7893 9.46957 12 10 12H14C14.5304 12 15.0391 12.2107 15.4142 12.5858C15.7893 12.9609 16 13.4696 16 14C16 14.5304 15.7893 15.0391 15.4142 15.4142C15.0391 15.7893 14.5304 16 14 16H8"}),o("path",{d:"M12 17.5V6.5"})]}),"PaymentIcon"),ss=e=>({dashboard:{label:"Dashboard",icon:Tr,href:e.dashboard},people:{label:"People",icon:Xo,href:e.people},establishments:{label:"Establishments",icon:Sn,href:e.establishments},intelligence:{label:"Data and Insights",icon:Qo,href:e.intelligence},compliance:{label:"Compliance",icon:Ko,href:e.compliance},quotas:{label:"Quotas",icon:Rr,href:e.quotas},exportSystems:{label:"Export systems",icon:Yo,href:e.exportSystems},licences:{label:"Licences",icon:Uo,href:e.licences},invoices:{label:"Invoices and payments",icon:as,href:e.invoices}}),Zr=e=>{var t,r,i,a,s,l;const n=ss(e.routes);return[n.dashboard,...(t=e==null?void 0:e.features)!=null&&t.people?[n.people]:[],n.establishments,n.intelligence,n.compliance,...(r=e==null?void 0:e.features)!=null&&r.quotas?[n.quotas]:[],...((i=e==null?void 0:e.features)==null?void 0:i.exportSystems)??((a=e==null?void 0:e.features)==null?void 0:a.exportDocumentation)?[n.exportSystems]:[],...(s=e==null?void 0:e.features)!=null&&s.licences?[n.licences]:[],...(l=e==null?void 0:e.features)!=null&&l.invoices?[n.invoices]:[]]},cs=e=>[{href:e.about,label:"About"},{href:e.contactUs,label:"Contact us"},{href:e.help,label:"Help"},{href:e.accessibility,rel:"external",label:"Accessibility"},{href:e.disclaimer,rel:"external",label:"Disclaimer"},{href:e.privacy,label:"Privacy"}],ls=({onSignOutClick:e,features:n,routes:t})=>[Zr({features:n,routes:t}),[{label:u(x,{as:"span",alignItems:"center",gap:.5,children:["Help",o(jo,{}),o(Ho,{weight:"regular",size:"sm"})]}),icon:Br,href:t.help,target:"_blank",rel:"noopener"}],[{label:"Sign out",onClick:e,icon:Er}]],ds=(e,n)=>{var i;if(!n)return;let t,r;for(const a of e){if(a.href===n){t=a;break}n.startsWith(a.href)&&a.href.length>(((i=r==null?void 0:r.href)==null?void 0:i.length)??0)&&(r=a)}return t||r},us=e=>n=>n===!0||n==e,Jr=(e,n)=>t=>us(e)(t)?n:{},ps=Jr("header",{palette:"light",borderColor:"selected"}),ut=Jr("sidebar",{background:"body"}),fs=e=>{const n=a=>{var l;const s=((l=e==null?void 0:e.linkedBusinesses)==null?void 0:l.flatMap(d=>{var c;return eo(d)===a?{...d,selected:((c=e==null?void 0:e.selectedBusiness)==null?void 0:c.partyId)===d.partyId,setSelected:()=>e.setSelectedBusiness(d)}:[]}))??[];return{category:a,businesses:s}},r=["export","import"].map(n),i=r.reduce((a,s)=>a+s.businesses.length,0);return{options:r,exists:i>0}},hs=new Set(["MANAGER","PRINCIPAL_AUTHORITY_OWNER","USER"]),gs=e=>e!=null&&e.roleName?hs.has(e.roleName):!1,eo=e=>(e==null?void 0:e.roleGroupName)==="BIOSECURITY"?"import":"export",ms={export:"Export",import:"Import"},no=e=>ms[e],vs=e=>e.businesses.length===0?null:u($o,{label:`${no(e.category)} businesses`,children:[e.businesses.slice(0,3).map(n=>o(zo,{checked:n.selected??!1,secondaryText:n.formattedPartyExternalId,onClick:e.onSelectBusiness(n),children:n.partyDisplayName},n.partyId)),e.businesses.length>3?u(de,{href:e.category==="import"?e.routes.accountImports:e.routes.accountExports,endElement:o(Fr,{}),children:["View all ",e.category," businesses"]}):null]}),bs=e=>{const n=i=>()=>{var a;return(a=i==null?void 0:i.setSelected)==null?void 0:a.call(i)},{options:t,exists:r}=fs(e.businessDetails);return u(No,{palette:"light",children:[t.map(i=>o(vs,{businesses:i.businesses,onSelectBusiness:n,category:i.category,routes:e.routes})),r&&o(Tn,{}),o(de,{href:e.routes.account,icon:Tr,children:"Home"}),o(de,{href:e.routes.accountExports,icon:Zo,children:"Export"}),o(de,{href:e.routes.accountImports,icon:Jo,children:"Import and biosecurity"}),o(de,{href:e.routes.profile,icon:ei,children:"Profile and settings"}),o(Tn,{}),o(Fo,{onClick:e.onSignOutClick,icon:Er,children:"Sign out"})]})},ys=e=>{var n;return((n=e==null?void 0:e.details)==null?void 0:n.selectedBusiness)===void 0?[]:[{options:{disableGroupPadding:!0},items:[{label:"Back to my account",icon:Vo,href:e.routes.account}]},{options:{disableGroupPadding:!0},items:[{label:u(h.Fragment,{children:[o(k,{fontWeight:"bold",fontSize:"xs",children:e.details.selectedBusiness.partyDisplayName}),o(k,{color:"muted",fontSize:"xs",children:e.details.selectedBusiness.formattedPartyExternalId})]})}]}]},Os=e=>{var n;return e.selectedBusiness?{...e==null?void 0:e.features,people:((n=e==null?void 0:e.features)==null?void 0:n.people)??gs(e.selectedBusiness)}:e.features};var Ps=["children"],xs=["as","children","direction","className"];function pt(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function We(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?pt(Object(t),!0).forEach(function(r){P(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):pt(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var to=function(n){var t=n.children,r=q(n,Ps);return o(ws,We(We({as:_e},r),{},{children:t}))},ws=function(n){var t=n.as,r=n.children,i=n.direction,a=n.className,s=q(n,xs),l=Cs[i],d=i==="left",c=Ke("sm");return u(x,We(We({alignItems:"center",as:t,className:a,css:b({alignSelf:"flex-start",svg:{transition:c.transition},":hover svg":{transform:c.transform}},"",""),focusRingFor:"keyboard",fontFamily:"body",fontWeight:"normal",gap:.5,inline:!0,link:!0},s),{},{children:[d?o(l,{size:"sm"}):null,r,d?null:o(l,{size:"sm"})]}))},Cs={up:ri,right:Fr,down:ti,left:ni};function ks(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.focusOnMount,t=e.focusOnUpdate,r=e.forwardedRef,i=h.useRef(null),a=r||i;return h.useEffect(function(){var s,l;!t&&!n||!("current"in a)||Array.isArray(t)&&t.filter(Boolean).length===0||a==null||(s=a.current)===null||s===void 0||(l=s.focus)===null||l===void 0||l.call(s)},[t]),a}var Ss=function(n){var t=n.as,r=t===void 0?"h2":t,i=n.children,a=n.hasDismissButton,s=n.hasCloseButton;return o(k,{as:r,css:se(P({marginRight:s||a?"2.5rem":void 0},y.mediaQuery.min.sm,{marginRight:"0"})),fontSize:"lg",fontWeight:"bold",lineHeight:"heading",children:i})},Is=function(n){var t,r=n.onClick;return o(W,{"aria-label":"Close",css:se((t={position:"absolute",top:"1.5rem",right:"1.5rem",flexShrink:0},P(t,y.mediaQuery.min.sm,{position:"relative",top:"unset",right:"unset"}),P(t,"& > span:first-of-type",P({display:"none"},y.mediaQuery.min.sm,{display:"block"})),t)),iconAfter:fe,onClick:r,variant:"text",children:"Close"})};function ft(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function Ls(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?ft(Object(t),!0).forEach(function(r){P(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ft(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var Ms=h.forwardRef(function(n,t){var r=n.id,i=n.focusOnMount,a=n.focusOnUpdate,s=n.role,l=n.children,d=n.onClose,c=n.onDismiss,p=n.title,f=n.tone,m=n.tabIndex,w=ks({focusOnMount:i,focusOnUpdate:a,forwardedRef:t}),O=Qi(d,c),v=As[f],C=v.fg,S=v.bg,I=v.icon;return u(x,{css:b({backgroundColor:S,position:"relative"},"",""),focusRingFor:"all",highContrastOutline:!0,id:r,ref:w,role:s,rounded:!0,tabIndex:m??(i||a?-1:void 0),children:[o(x,{alignItems:"center",css:b(Ls({borderTopLeftRadius:y.borderRadius,borderBottomLeftRadius:y.borderRadius,backgroundColor:C,color:g.backgroundBody},So.exactColor),"",""),padding:.5,children:I}),u(x,{alignItems:"flex-start",css:b(P({marginRight:O&&!p?"3rem":void 0},y.mediaQuery.min.sm,{marginRight:"0"}),"",""),flexGrow:1,gap:1,padding:1.5,children:[u(x,{alignItems:"flex-start",flexDirection:"column",flexGrow:1,gap:1,children:[p?h.isValidElement(p)?p:o(Ss,{hasCloseButton:!!O,children:p}):null,l]}),O?o(Is,{onClick:O}):null]})]})}),As={success:{fg:g.systemSuccess,bg:g.systemSuccessMuted,icon:o(ai,{"aria-hidden":"false","aria-label":"Success"})},error:{fg:g.systemError,bg:g.systemErrorMuted,icon:o(Dr,{"aria-hidden":"false","aria-label":"Error"})},info:{fg:g.systemInfo,bg:g.systemInfoMuted,icon:o(ii,{"aria-hidden":"false","aria-label":"Information"})},warning:{fg:g.systemWarning,bg:g.systemWarningMuted,icon:o(oi,{"aria-hidden":"false","aria-label":"Warning"})}};const Ds=["IP1","IP2","IP3","IP4"],ro=Array.from(Ds),js=e=>{const n=[];return e.forEach(t=>n.unshift(t)),n},fn=new Set(ro),ht=new Set(js(ro)),Bs={descriptor:"Unknown"},Es={IP1:{level:"IP1",descriptor:"Basic"},IP2:{level:"IP2",descriptor:"Standard"},IP3:{level:"IP3",descriptor:"Strong"},IP4:{level:"IP4",descriptor:"Strong"}},Rs=e=>fn.has(e),qe=(e,n)=>{const t=e&&Rs(e)?Es[e]:Bs;return n!=null&&n.short||t.level===void 0?t.descriptor:`${t.descriptor} (${t.level})`},oo=(e,n)=>Array.from(e).filter(t=>n.has(t)),io=(e,n)=>Array.from(e).filter(t=>!n.has(t)),pe=e=>{const n=new Set(e??[]);return[...oo(ht,n),...io(n,ht)][0]},ao=e=>{const n=new Set(e??[]);return[...oo(fn,n),...io(n,fn)][0]},gt=e=>e===void 0?[]:Array.isArray(e)?e:[e],Ts=(e,n)=>{if(n===void 0||e.length===0)return!0;const t=new Set(n);return e.some(r=>t.has(r))},mt=e=>((e==null?void 0:e.trim())??"")==="",so=()=>o(re,{children:u(ui,{title:"Need more help?",children:[u(k,{children:["Email"," ",o(_e,{href:"mailto:exportservice@aff.gov.au",children:"exportservice@aff.gov.au"})]}),u(k,{children:["Call ",o(_e,{href:"tel:1800571125",children:"1800 571 125"}),", Monday to Friday, 9 am to 5 pm AEST"]})]})}),Fs=e=>o(_,{children:u(j,{gap:3,children:[o(re,{children:o(to,{href:e.routes.dashboard,direction:"left",children:"Back to Dashboard"})}),u(G,{children:[o("h1",{children:"Single names in the Export Service"}),o("p",{children:"If you are legally known by a single name, you can use it to access an Export Service account. Other services we offer may not accept a single name and you will need to use a given and family name."}),o("p",{children:"Contact support if you need more help."})]}),o(Ar,{}),o(so,{})]})}),Ns=e=>{const n=qe(e.providedProofingLevel),t=qe(e.requiredProofingLevel,{short:!0});return o(_,{children:u(j,{gap:3,children:[o(re,{children:o(to,{href:e.routes.dashboard,direction:"left",children:"Back"})}),u(G,{children:[o("h1",{children:e.activeApp??"Use a higher identity strength"}),o(M,{className:Io,children:u(Ms,{tone:"info",title:"You can't access this feature",children:["Sign in with myID and use a ‘",t,"’ identity strength or higher to access this feature."]})}),o("h2",{children:"Review your profile and settings"}),u("p",{children:["Your current identity strength is ",n,". To access this feature you must add myID to your account from your"," ",o(_e,{href:e.routes.profile,children:"Profile and settings"}),", then sign in."]})]}),o(Ar,{}),o(so,{})]})})},co={MissingName:Fs,ProofMissing:Ns},zs=({claims:e,errorComponents:n,requiredProofingLevel:t,authDetails:r,activeApp:i,children:a,routes:s})=>{const l=n.MissingGivenName??n.MissingName,d=n.MissingFamilyName??n.MissingName,c=n.ProofMissing,p=gt(t),f=gt(r==null?void 0:r.proofingLevel);if(!Ts(p,f)){const m=ao(p),w=pe(f);return o(c,{requiredProofingLevel:m,providedProofingLevel:w,activeApp:i,routes:s})}return e===void 0?o(h.Fragment,{children:a}):mt(e==null?void 0:e.given_name)?o(l,{routes:s,children:a}):mt(e==null?void 0:e.family_name)?o(d,{routes:s,children:a}):o(h.Fragment,{children:a})},$s=Object.values,_s={IP1:{AL1:"urn:id.gov.au:tdif:acr:ip1:cl1",AL2:"urn:id.gov.au:tdif:acr:ip1:cl2",AL3:"urn:id.gov.au:tdif:acr:ip1:cl3",PlusAL1:"urn:id.gov.au:tdif:acr:ip1p:cl1",PlusAL2:"urn:id.gov.au:tdif:acr:ip1p:cl2",PlusAL3:"urn:id.gov.au:tdif:acr:ip1p:cl3"},IP2:{AL2:"urn:id.gov.au:tdif:acr:ip2:cl2",AL3:"urn:id.gov.au:tdif:acr:ip2:cl3",PlusAL2:"urn:id.gov.au:tdif:acr:ip2p:cl2",PlusAL3:"urn:id.gov.au:tdif:acr:ip2p:cl3"},IP3:{AL2:"urn:id.gov.au:tdif:acr:ip3:cl2",AL3:"urn:id.gov.au:tdif:acr:ip3:cl3"},IP4:{AL3:"urn:id.gov.au:tdif:acr:ip4:cl3"}},Ws=["IP1","IP2","IP3","IP4"],qs=Object.fromEntries(Ws.map((e,n,t)=>[e,t.slice(0,n)])),ye=e=>Object.fromEntries($s(_s[e]).map(n=>[n,e])),hn={...ye("IP1"),...ye("IP2"),...ye("IP3"),...ye("IP4")},Gs=e=>e in hn,Hs=e=>e===void 0?[]:Array.isArray(e)?e:[e],$e=(e,n)=>{const r=Hs(e.AARM_acr).flatMap(i=>Gs(i)?[hn[i],...qs[hn[i]]]:[i]);return Array.from(new Set(r))},Us=e=>(e==null?void 0:e.credentialType)==="myGovID"?"myID":(e==null?void 0:e.credentialType)==="B2CLocalUser"?"B2CLocalUser":void 0,Ys=(e,n)=>e?{provider:Us(e),proofingLevel:$e(e)}:void 0,lo=h.createContext(void 0),uo=()=>{var e;return(e=h.useContext(lo))==null?void 0:e.onSignOutClick};function J({activePath:e,children:n,focusMode:t=!1,handleSignOut:r,mainContentId:i="main-content",unreadMessageCount:a,userName:s,businessDetails:l,claims:d,errorComponents:c,features:p,requiredProofingLevel:f,authDetails:m,sidebarItems:w,sidebarSubLevelVisible:O,headerProps:v,internal:C,domain:S}){var En;const I=h.useMemo(()=>new Date().getFullYear(),[]),B=h.useContext(ci),[E,H,N]=un(!1),[Q,U,Bn]=un(!1),Y=H,bo=r,X=is(S??"agriculture.gov.au"),ve=Os({features:p,selectedBusiness:l==null?void 0:l.selectedBusiness}),yo=h.useMemo(()=>Zr({features:ve,routes:X}),[ve]),Oo=cs(X),Po=h.useMemo(()=>[...ys({details:l,routes:X}),...ls({onSignOutClick:Y,features:ve,routes:X})],[Y,l,ve]),xo=Ys(d),wo=m??xo,Je=ds(yo,e);return o(Sa,{focusMode:t,children:o(lo.Provider,{value:{onSignOutClick:Y},children:u(re,{children:[o(_a,{href:(v==null?void 0:v.href)??"/account",heading:(v==null?void 0:v.heading)??"Export Service",subLine:(v==null?void 0:v.subLine)??"Supporting Australian agricultural exports",badgeLabel:(v==null?void 0:v.badgeLabel)??"Beta",logo:o(li,{}),accountDetails:s?{href:X.account,name:((En=l==null?void 0:l.selectedBusiness)==null?void 0:En.partyDisplayName)??s,avatarName:s,secondaryText:(l==null?void 0:l.selectedBusiness)===void 0?void 0:no(eo(l.selectedBusiness)),dropdown:l?o(bs,{routes:X,businessDetails:l,unreadMessageCount:a,onSignOutClick:Y}):void 0}:void 0,...ps(C)}),w?o(re,{...B,children:o(lt,{activePath:e,items:w,subLevelVisible:O,...ut(C)})}):o(lt,{activePath:e,items:Po,...ut(C)}),u(Za,{children:[o(re,{...B,children:o("main",{id:i,tabIndex:-1,css:{"&:focus":{outline:"none"}},children:o(zs,{claims:d,authDetails:wo,requiredProofingLevel:f,errorComponents:{...co,...c},activeApp:Je==null?void 0:Je.label,routes:X,children:n})})}),u(es,{children:[o("nav",{"aria-label":"footer",children:o(di,{links:Oo,horizontal:!0})}),o(ns,{}),o(k,{fontSize:"xs",maxWidth:y.maxWidth.bodyText,children:"We acknowledge the traditional owners of country throughout Australia and recognise their continuing connection to land, waters and culture. We pay our respects to their Elders past, present and emerging."}),u(k,{fontSize:"xs",maxWidth:y.maxWidth.bodyText,children:["© ",I," Department of Agriculture, Fisheries and Forestry"]})]})]}),o(Yr,{isOpen:E,onClose:N,title:"Do you want to sign out?",actions:u(xn,{children:[o(W,{onClick:async()=>{U(),await bo(),Bn(),N()},loading:Q,disabled:Q,children:"Sign out"}),o(W,{variant:"secondary",onClick:N,children:"Cancel"})]}),children:o(k,{as:"p",children:"This will end your current session with the Export Service."})})]})})})}var po=Symbol.for("immer-nothing"),vt=Symbol.for("immer-draftable"),T=Symbol.for("immer-state");function z(e,...n){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var ie=Object.getPrototypeOf;function ae(e){return!!e&&!!e[T]}function ee(e){var n;return e?fo(e)||Array.isArray(e)||!!e[vt]||!!((n=e.constructor)!=null&&n[vt])||Xe(e)||Ve(e):!1}var Ks=Object.prototype.constructor.toString();function fo(e){if(!e||typeof e!="object")return!1;const n=ie(e);if(n===null)return!0;const t=Object.hasOwnProperty.call(n,"constructor")&&n.constructor;return t===Object?!0:typeof t=="function"&&Function.toString.call(t)===Ks}function Ge(e,n){Qe(e)===0?Reflect.ownKeys(e).forEach(t=>{n(t,e[t],e)}):e.forEach((t,r)=>n(r,t,e))}function Qe(e){const n=e[T];return n?n.type_:Array.isArray(e)?1:Xe(e)?2:Ve(e)?3:0}function gn(e,n){return Qe(e)===2?e.has(n):Object.prototype.hasOwnProperty.call(e,n)}function ho(e,n,t){const r=Qe(e);r===2?e.set(n,t):r===3?e.add(t):e[n]=t}function Qs(e,n){return e===n?e!==0||1/e===1/n:e!==e&&n!==n}function Xe(e){return e instanceof Map}function Ve(e){return e instanceof Set}function V(e){return e.copy_||e.base_}function mn(e,n){if(Xe(e))return new Map(e);if(Ve(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);const t=fo(e);if(n===!0||n==="class_only"&&!t){const r=Object.getOwnPropertyDescriptors(e);delete r[T];let i=Reflect.ownKeys(r);for(let a=0;a<i.length;a++){const s=i[a],l=r[s];l.writable===!1&&(l.writable=!0,l.configurable=!0),(l.get||l.set)&&(r[s]={configurable:!0,writable:!0,enumerable:l.enumerable,value:e[s]})}return Object.create(ie(e),r)}else{const r=ie(e);if(r!==null&&t)return{...e};const i=Object.create(r);return Object.assign(i,e)}}function Dn(e,n=!1){return Ze(e)||ae(e)||!ee(e)||(Qe(e)>1&&(e.set=e.add=e.clear=e.delete=Xs),Object.freeze(e),n&&Object.entries(e).forEach(([t,r])=>Dn(r,!0))),e}function Xs(){z(2)}function Ze(e){return Object.isFrozen(e)}var Vs={};function ne(e){const n=Vs[e];return n||z(0,e),n}var he;function go(){return he}function Zs(e,n){return{drafts_:[],parent_:e,immer_:n,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function bt(e,n){n&&(ne("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=n)}function vn(e){bn(e),e.drafts_.forEach(Js),e.drafts_=null}function bn(e){e===he&&(he=e.parent_)}function yt(e){return he=Zs(he,e)}function Js(e){const n=e[T];n.type_===0||n.type_===1?n.revoke_():n.revoked_=!0}function Ot(e,n){n.unfinalizedDrafts_=n.drafts_.length;const t=n.drafts_[0];return e!==void 0&&e!==t?(t[T].modified_&&(vn(n),z(4)),ee(e)&&(e=He(n,e),n.parent_||Ue(n,e)),n.patches_&&ne("Patches").generateReplacementPatches_(t[T].base_,e,n.patches_,n.inversePatches_)):e=He(n,t,[]),vn(n),n.patches_&&n.patchListener_(n.patches_,n.inversePatches_),e!==po?e:void 0}function He(e,n,t){if(Ze(n))return n;const r=n[T];if(!r)return Ge(n,(i,a)=>Pt(e,r,n,i,a,t)),n;if(r.scope_!==e)return n;if(!r.modified_)return Ue(e,r.base_,!0),r.base_;if(!r.finalized_){r.finalized_=!0,r.scope_.unfinalizedDrafts_--;const i=r.copy_;let a=i,s=!1;r.type_===3&&(a=new Set(i),i.clear(),s=!0),Ge(a,(l,d)=>Pt(e,r,i,l,d,t,s)),Ue(e,i,!1),t&&e.patches_&&ne("Patches").generatePatches_(r,t,e.patches_,e.inversePatches_)}return r.copy_}function Pt(e,n,t,r,i,a,s){if(ae(i)){const l=a&&n&&n.type_!==3&&!gn(n.assigned_,r)?a.concat(r):void 0,d=He(e,i,l);if(ho(t,r,d),ae(d))e.canAutoFreeze_=!1;else return}else s&&t.add(i);if(ee(i)&&!Ze(i)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;He(e,i),(!n||!n.scope_.parent_)&&typeof r!="symbol"&&Object.prototype.propertyIsEnumerable.call(t,r)&&Ue(e,i)}}function Ue(e,n,t=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&Dn(n,t)}function ec(e,n){const t=Array.isArray(e),r={type_:t?1:0,scope_:n?n.scope_:go(),modified_:!1,finalized_:!1,assigned_:{},parent_:n,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let i=r,a=jn;t&&(i=[r],a=ge);const{revoke:s,proxy:l}=Proxy.revocable(i,a);return r.draft_=l,r.revoke_=s,l}var jn={get(e,n){if(n===T)return e;const t=V(e);if(!gn(t,n))return nc(e,t,n);const r=t[n];return e.finalized_||!ee(r)?r:r===cn(e.base_,n)?(ln(e),e.copy_[n]=On(r,e)):r},has(e,n){return n in V(e)},ownKeys(e){return Reflect.ownKeys(V(e))},set(e,n,t){const r=mo(V(e),n);if(r!=null&&r.set)return r.set.call(e.draft_,t),!0;if(!e.modified_){const i=cn(V(e),n),a=i==null?void 0:i[T];if(a&&a.base_===t)return e.copy_[n]=t,e.assigned_[n]=!1,!0;if(Qs(t,i)&&(t!==void 0||gn(e.base_,n)))return!0;ln(e),yn(e)}return e.copy_[n]===t&&(t!==void 0||n in e.copy_)||Number.isNaN(t)&&Number.isNaN(e.copy_[n])||(e.copy_[n]=t,e.assigned_[n]=!0),!0},deleteProperty(e,n){return cn(e.base_,n)!==void 0||n in e.base_?(e.assigned_[n]=!1,ln(e),yn(e)):delete e.assigned_[n],e.copy_&&delete e.copy_[n],!0},getOwnPropertyDescriptor(e,n){const t=V(e),r=Reflect.getOwnPropertyDescriptor(t,n);return r&&{writable:!0,configurable:e.type_!==1||n!=="length",enumerable:r.enumerable,value:t[n]}},defineProperty(){z(11)},getPrototypeOf(e){return ie(e.base_)},setPrototypeOf(){z(12)}},ge={};Ge(jn,(e,n)=>{ge[e]=function(){return arguments[0]=arguments[0][0],n.apply(this,arguments)}});ge.deleteProperty=function(e,n){return ge.set.call(this,e,n,void 0)};ge.set=function(e,n,t){return jn.set.call(this,e[0],n,t,e[0])};function cn(e,n){const t=e[T];return(t?V(t):e)[n]}function nc(e,n,t){var i;const r=mo(n,t);return r?"value"in r?r.value:(i=r.get)==null?void 0:i.call(e.draft_):void 0}function mo(e,n){if(!(n in e))return;let t=ie(e);for(;t;){const r=Object.getOwnPropertyDescriptor(t,n);if(r)return r;t=ie(t)}}function yn(e){e.modified_||(e.modified_=!0,e.parent_&&yn(e.parent_))}function ln(e){e.copy_||(e.copy_=mn(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var tc=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(n,t,r)=>{if(typeof n=="function"&&typeof t!="function"){const a=t;t=n;const s=this;return function(d=a,...c){return s.produce(d,p=>t.call(this,p,...c))}}typeof t!="function"&&z(6),r!==void 0&&typeof r!="function"&&z(7);let i;if(ee(n)){const a=yt(this),s=On(n,void 0);let l=!0;try{i=t(s),l=!1}finally{l?vn(a):bn(a)}return bt(a,r),Ot(i,a)}else if(!n||typeof n!="object"){if(i=t(n),i===void 0&&(i=n),i===po&&(i=void 0),this.autoFreeze_&&Dn(i,!0),r){const a=[],s=[];ne("Patches").generateReplacementPatches_(n,i,a,s),r(a,s)}return i}else z(1,n)},this.produceWithPatches=(n,t)=>{if(typeof n=="function")return(s,...l)=>this.produceWithPatches(s,d=>n(d,...l));let r,i;return[this.produce(n,t,(s,l)=>{r=s,i=l}),r,i]},typeof(e==null?void 0:e.autoFreeze)=="boolean"&&this.setAutoFreeze(e.autoFreeze),typeof(e==null?void 0:e.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){ee(e)||z(8),ae(e)&&(e=rc(e));const n=yt(this),t=On(e,void 0);return t[T].isManual_=!0,bn(n),t}finishDraft(e,n){const t=e&&e[T];(!t||!t.isManual_)&&z(9);const{scope_:r}=t;return bt(r,n),Ot(void 0,r)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,n){let t;for(t=n.length-1;t>=0;t--){const i=n[t];if(i.path.length===0&&i.op==="replace"){e=i.value;break}}t>-1&&(n=n.slice(t+1));const r=ne("Patches").applyPatches_;return ae(e)?r(e,n):this.produce(e,i=>r(i,n))}};function On(e,n){const t=Xe(e)?ne("MapSet").proxyMap_(e,n):Ve(e)?ne("MapSet").proxySet_(e,n):ec(e,n);return(n?n.scope_:go()).drafts_.push(t),t}function rc(e){return ae(e)||z(10,e),vo(e)}function vo(e){if(!ee(e)||Ze(e))return e;const n=e[T];let t;if(n){if(!n.modified_)return n.base_;n.finalized_=!0,t=mn(e,n.scope_.immer_.useStrictShallowCopy_)}else t=mn(e,!0);return Ge(t,(r,i)=>{ho(t,r,vo(i))}),n&&(n.finalized_=!1),t}var F=new tc,Oe=F.produce;F.produceWithPatches.bind(F);F.setAutoFreeze.bind(F);F.setUseStrictShallowCopy.bind(F);F.applyPatches.bind(F);F.createDraft.bind(F);F.finishDraft.bind(F);const Z=[{partyId:1,partyDisplayName:"Jefferson PTY LTD",formattedPartyExternalId:"ABN: 89 790 756 100",someExtraInfo:"our component allows this field but does not use it at all",roleDisplayName:"User",roleName:"USER"},{partyId:2,partyDisplayName:"Metaweb (agent role)",formattedPartyExternalId:"ABN: 89 790 756 100",someExtraInfo:"our component allows this field but does not use it at all",roleDisplayName:"Agent",roleName:"AGENT"},{partyId:3,partyDisplayName:"Fresh Produce Australia",formattedPartyExternalId:"ABN: 92 635 964 018",someExtraInfo:"our component allows this field but does not use it at all",roleDisplayName:"Principal Authority (Owner)",roleName:"PRINCIPAL_AUTHORITY_OWNER"},{partyId:4,partyDisplayName:"Fresh Produce Australia",formattedPartyExternalId:"ABN: 92 635 964 018",someExtraInfo:"our component allows this field but does not use it at all",roleDisplayName:"Manager",roleName:"MANAGER"}],dn=[{partyId:5,partyDisplayName:"Business A",formattedPartyExternalId:"ABN: 88 888 888 888",roleDisplayName:"User",roleGroupName:"BIOSECURITY"},{partyId:6,partyDisplayName:"Business B",formattedPartyExternalId:"ABN: 88 888 888 888",roleDisplayName:"User",roleGroupName:"BIOSECURITY"},{partyId:7,partyDisplayName:"Business C",formattedPartyExternalId:"ABN: 88 888 888 888",roleDisplayName:"User",roleGroupName:"BIOSECURITY"},{partyId:8,partyDisplayName:"Business D",formattedPartyExternalId:"ABN: 88 888 888 888",roleDisplayName:"User",roleGroupName:"BIOSECURITY"}],Pc={title:"AppLayout",component:J,parameters:{layout:"fullscreen"},render:function(n){return u(h.Fragment,{children:[o(ce,{links:[{href:"#main-content",label:"Skip to main content"}]}),o(J,{...n,children:o(_,{children:o(G,{children:o("h1",{children:"Page heading"})})})})]})}},oc=e=>new Promise(n=>setTimeout(n,e)),D=async()=>{await oc(2e3),alert("You have been signed out.")},Pe={args:{focusMode:!1,userName:"Toto Wolff",unreadMessageCount:6,activePath:"/",handleSignOut:D}},xe={args:{focusMode:!0,userName:"Toto Wolff",unreadMessageCount:6,activePath:"/",handleSignOut:D}},we={args:{activePath:"/",focusMode:!1,handleSignOut:D},render:function(n){const[t,r]=h.useState(!1);return h.useEffect(()=>{setTimeout(()=>{r(!0)},1e3)},[]),u(h.Fragment,{children:[o(ce,{links:[{href:"#main-content",label:"Skip to main content"}]}),o(J,{...n,...t?{userName:"Toto Wolff",unreadMessageCount:6}:{},children:o(_,{children:o(G,{children:o("h1",{children:"Page heading"})})})})]})}},Ce={args:{focusMode:!1,userName:"Toto Wolff",unreadMessageCount:6,activePath:"/",handleSignOut:D,domain:"test.agriculture.gov.au"}},ke={args:{focusMode:!1,userName:"Toto Wolff",unreadMessageCount:6,activePath:"/",handleSignOut:D,domain:e=>`http://${e.subdomain}.example.com/custom-prefix${e.path}`}},Se={args:{focusMode:!1,userName:"Toto Wolff",unreadMessageCount:6,activePath:"/",handleSignOut:D},render:function(n){const[t,r]=h.useState({exports:Z,imports:dn,selectedBusiness:Z[1]}),[i,a]=h.useState({provider:"myID"}),s=d=>r(c=>({...c,selectedBusiness:d})),l=(d,c)=>()=>{if(d==="imports"){const p=dn.slice(0,c),f=p[0];r(m=>({...m,imports:p,selectedBusiness:f}))}if(d==="exports"){const p=Z.slice(0,c),f=p[0];r(m=>({...m,exports:p,selectedBusiness:f}))}};return u(h.Fragment,{children:[o(ce,{links:[{href:"#main-content",label:"Skip to main content"}]}),o(J,{...n,businessDetails:{selectedBusiness:t.selectedBusiness,linkedBusinesses:[...t.exports,...t.imports],setSelectedBusiness:s},authDetails:i,children:o(_,{children:u(j,{gap:3,children:[o(G,{children:o("h1",{children:"Business dropdown configuration"})}),u(x,{gap:1,children:[o(oe,{label:"Number of linked businesses",block:!0,hideOptionalLabel:!0,children:Array.from(new Array(Z.length+1).keys()).map(d=>{var c;return u(tn,{checked:((c=t==null?void 0:t.exports)==null?void 0:c.length)===d,onChange:l("exports",d),children:[d," ",d===0?"business":"businesses"]},d)})}),o(oe,{label:"Number of linked biosecurity businesses",block:!0,hideOptionalLabel:!0,children:Array.from(new Array(dn.length+1).keys()).map(d=>{var c;return u(tn,{checked:((c=t==null?void 0:t.imports)==null?void 0:c.length)===d,onChange:l("imports",d),children:[d," ",d===0?"import business":"import businesses"]},d)})})]}),o(oe,{label:"Auth provider",block:!0,hideOptionalLabel:!0,children:["myID","B2CLocalUser"].map(d=>o(tn,{checked:(i==null?void 0:i.provider)===d,onChange:()=>a(c=>({...c,provider:d})),children:d},d))})]})})})]})}},Ie={args:{focusMode:!1,userName:"Toto Wolff",unreadMessageCount:6,activePath:"/",handleSignOut:D},render:function(n){const t=Z,[r,i]=h.useState(t[1]),[a,s]=h.useState(),l=()=>s(void 0),d={linkedBusinesses:t,selectedBusiness:r,setSelectedBusiness:s};return u(h.Fragment,{children:[o(ce,{links:[{href:"#main-content",label:"Skip to main content"}]}),u(J,{...n,businessDetails:d,children:[o(Yr,{isOpen:a!==void 0,onClose:l,title:"Are you sure you want to leave this page?",actions:u(xn,{children:[o(W,{onClick:()=>{a!==void 0&&i(a),s(void 0)},children:"Leave this page"}),o(W,{variant:"secondary",onClick:l,children:"Stay on this page"})]}),children:o(k,{as:"p",children:"You will lose all changes made since your last save."})}),o(_,{children:o(j,{gap:3,children:o(G,{children:u("h1",{children:["Active business: ",r==null?void 0:r.partyDisplayName]})})})})]})]})}},Le={args:{focusMode:!1,userName:"Toto Wolff",unreadMessageCount:6,activePath:"/",handleSignOut:D},render:function(n){const t={linkedBusinesses:Z,selectedBusiness:Z[0],setSelectedBusiness:()=>{}},r=()=>{const i=uo();return o(W,{onClick:i,children:"Sign out"})};return u(h.Fragment,{children:[o(ce,{links:[{href:"#main-content",label:"Skip to main content"}]}),o(J,{...n,businessDetails:t,children:o(_,{children:u(j,{gap:3,children:[u(G,{children:[o("h1",{children:"Sign out button"}),u("p",{children:["You can trigger the sign out modal using the"," ",o("code",{children:"useOpenSignOutModal"})," hook."]})]}),o(xn,{children:o(r,{})})]})})})]})}},Me={args:{focusMode:!1,userName:"Toto Wolff",unreadMessageCount:6,activePath:"/",features:{quotas:!0,exportSystems:!0,licences:!0,invoices:!0,people:!0}}},Ae={args:{focusMode:!1,unreadMessageCount:6,activePath:"/",handleSignOut:D,claims:{given_name:"given_name",family_name:"family_name"}}},De={args:{focusMode:!1,unreadMessageCount:6,activePath:"/",handleSignOut:D,claims:{family_name:"family_name"}}},je={args:{focusMode:!1,unreadMessageCount:6,activePath:"/",handleSignOut:D,claims:{family_name:"family_name"},errorComponents:{MissingName:e=>(h.useEffect(()=>{console.log("report this situation to an analytics provider here")},[]),o(co.MissingName,{...e}))}}},Be={args:{focusMode:!1,unreadMessageCount:6,activePath:"/",handleSignOut:D,claims:{family_name:"family_name"},errorComponents:{MissingName:e=>o(_,{children:u(G,{children:[o("p",{children:"Our app works just fine even without a generic name."}),o("hr",{}),e.children]})})}}},Ee={args:{focusMode:!1,unreadMessageCount:6,activePath:"/",handleSignOut:D,claims:{family_name:"family_name"},errorComponents:{MissingGivenName:e=>{const n=uo();return o(_,{children:u(G,{children:[o("p",{children:"Our app works just fine even without a given name."}),o("hr",{}),e.children,o(W,{onClick:n,children:"Sign out"})]})})}}}},Re={args:{focusMode:!1,unreadMessageCount:6,activePath:"/",handleSignOut:D,claims:{given_name:"given_name",family_name:"family_name",AARM_acr:"urn:id.gov.au:tdif:acr:ip1:cl1"},requiredProofingLevel:"IP2"}},Te={args:{focusMode:!1,unreadMessageCount:6,activePath:"/",handleSignOut:D},render:function(n){const t=["IP1","IP2","IP3","IP4"],r=["urn:id.gov.au:tdif:acr:ip1:cl1","urn:id.gov.au:tdif:acr:ip1:cl2","urn:id.gov.au:tdif:acr:ip1:cl3","urn:id.gov.au:tdif:acr:ip1p:cl1","urn:id.gov.au:tdif:acr:ip1p:cl2","urn:id.gov.au:tdif:acr:ip1p:cl3","urn:id.gov.au:tdif:acr:ip2:cl2","urn:id.gov.au:tdif:acr:ip2:cl3","urn:id.gov.au:tdif:acr:ip2p:cl2","urn:id.gov.au:tdif:acr:ip2p:cl3","urn:id.gov.au:tdif:acr:ip3:cl2","urn:id.gov.au:tdif:acr:ip3:cl3","urn:id.gov.au:tdif:acr:ip4:cl3"],[i,a]=h.useState(!0),[s,l]=h.useState({method:"urn",claims:{given_name:"given_name",family_name:"family_name",AARM_acr:[r[0]]},authDetails:{proofingLevel:["IP1"]},requiredProofingLevel:["IP2"]}),d=c=>{const p=c.kind==="max"?"#df185a":"#287be0",f=c!=null&&c.extraText?` (${c.extraText})`:"";return c!=null&&c.active?o(M,{css:{position:"relative",padding:"4px",border:`2px dashed ${p}`,"& + &":{marginTop:"1em"},":after":{position:"absolute",right:0,bottom:"120%",content:`"${c.kind==="max"?"maximum provided proof":"minimum required proof"}${f}"`,color:p,fontSize:"0.8em"}},children:c.children}):o(Ir,{children:c.children})};return u(h.Fragment,{children:[o(ce,{links:[{href:"#main-content",label:"Skip to main content"}]}),u(M,{css:{position:"relative"},children:[o(M,{css:{border:"2px solid red",backgroundColor:"#fec0ff",position:"fixed",transform:"rotate(90deg)",transformOrigin:"top right",fontSize:"1.2em",padding:".4em 1em",top:"55vh",right:0,zIndex:99,cursor:"pointer"},onClick:()=>a(!0),children:"show config options"}),o(J,{...n,requiredProofingLevel:s.requiredProofingLevel,...s.method==="claims"?{claims:s.claims}:{authDetails:s.authDetails},children:o(_,{children:u(j,{gap:1.5,children:[o(k,{as:"p",fontSize:"lg",children:"You made it!"}),o(k,{as:"p",children:"Your proofing level means that you can see this page."})]})})})]}),o(aa,{title:"Config",isOpen:i,onClose:()=>a(!1),children:u(j,{gap:1.5,children:[o(Gi,{label:"Proofing method",required:!0,options:[{value:"authDetails",label:"AuthDetails"},{value:"claims",label:"Claims"}],onChange:c=>l(Oe(p=>{p.method=c.target.value}))}),s.method==="claims"?o(oe,{label:"Provided ACR",block:!0,hideOptionalLabel:!0,children:r.map(c=>o(d,{kind:"max",active:pe($e({AARM_acr:c}))===pe($e(s.claims)),extraText:pe($e(s.claims)),children:o(rn,{checked:new Set(s.claims.AARM_acr).has(c),onChange:p=>l(Oe(f=>{p.target.checked?f.claims.AARM_acr.push(c):f.claims.AARM_acr.splice(f.claims.AARM_acr.indexOf(c),1)})),children:c},c)},c))}):o(oe,{label:"Provided proofing level",block:!0,hideOptionalLabel:!0,children:t.map(c=>o(d,{kind:"max",active:pe(s.authDetails.proofingLevel)===c,children:o(rn,{checked:new Set(s.authDetails.proofingLevel).has(c),onChange:p=>l(Oe(f=>{p.target.checked?f.authDetails.proofingLevel.push(c):f.authDetails.proofingLevel.splice(f.authDetails.proofingLevel.indexOf(c),1)})),children:c},c)},c))}),o(oe,{label:"Required proofing level",block:!0,hideOptionalLabel:!0,children:t.map(c=>o(d,{kind:"min",active:ao(s.requiredProofingLevel)===c,children:o(rn,{checked:new Set(s.requiredProofingLevel).has(c),onChange:p=>l(Oe(f=>{p.target.checked?f.requiredProofingLevel.push(c):f.requiredProofingLevel.splice(f.requiredProofingLevel.indexOf(c),1)})),children:c},c)},c))})]})})]})}},Fe={args:{focusMode:!1,unreadMessageCount:6,activePath:"/",handleSignOut:D,authDetails:{proofingLevel:"IP1"},requiredProofingLevel:"IP3",errorComponents:{ProofMissing:e=>o(_,{children:u(G,{children:[u("p",{children:["Your proofing level is insufficient at"," ",qe(e.providedProofingLevel),". Please fix it."]}),u("p",{children:["you should provide at least '",qe(e.requiredProofingLevel),"'"]})]})})}}},Ne={args:{focusMode:!1,userName:"Toto Wolff",unreadMessageCount:6,activePath:"/custom",handleSignOut:D,sidebarItems:[{items:[{label:"Custom sidenav",href:"/custom",icon:Sn},{label:"Other item",href:"/other",icon:Rr}]}],internal:"sidebar"}},ze={args:{focusMode:!1,userName:"Toto Wolff",unreadMessageCount:6,activePath:"/custom",handleSignOut:D,headerProps:{heading:"Service Portal",subLine:"Supporting Australian agriculture"},sidebarItems:[{items:[{label:"Overview",href:"/custom",icon:Sn,items:[{label:"Business details",href:"#"},{label:"People",href:"#"}]},{label:"Country requirements",href:"/country-requirements",icon:si,items:[{label:"Other",href:"#"},{label:"Options",href:"#"}]}]},{items:[{label:"Help",href:"/help",icon:Br}]}]}};var xt,wt,Ct;Pe.parameters={...Pe.parameters,docs:{...(xt=Pe.parameters)==null?void 0:xt.docs,source:{originalSource:`{
  args: {
    focusMode: false,
    userName: 'Toto Wolff',
    unreadMessageCount: 6,
    activePath: '/',
    handleSignOut
  }
}`,...(Ct=(wt=Pe.parameters)==null?void 0:wt.docs)==null?void 0:Ct.source}}};var kt,St,It;xe.parameters={...xe.parameters,docs:{...(kt=xe.parameters)==null?void 0:kt.docs,source:{originalSource:`{
  args: {
    focusMode: true,
    userName: 'Toto Wolff',
    unreadMessageCount: 6,
    activePath: '/',
    handleSignOut
  }
}`,...(It=(St=xe.parameters)==null?void 0:St.docs)==null?void 0:It.source}}};var Lt,Mt,At;we.parameters={...we.parameters,docs:{...(Lt=we.parameters)==null?void 0:Lt.docs,source:{originalSource:`{
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
}`,...(At=(Mt=we.parameters)==null?void 0:Mt.docs)==null?void 0:At.source}}};var Dt,jt,Bt;Ce.parameters={...Ce.parameters,docs:{...(Dt=Ce.parameters)==null?void 0:Dt.docs,source:{originalSource:`{
  args: {
    focusMode: false,
    userName: 'Toto Wolff',
    unreadMessageCount: 6,
    activePath: '/',
    handleSignOut,
    domain: 'test.agriculture.gov.au'
  }
}`,...(Bt=(jt=Ce.parameters)==null?void 0:jt.docs)==null?void 0:Bt.source}}};var Et,Rt,Tt;ke.parameters={...ke.parameters,docs:{...(Et=ke.parameters)==null?void 0:Et.docs,source:{originalSource:`{
  args: {
    focusMode: false,
    userName: 'Toto Wolff',
    unreadMessageCount: 6,
    activePath: '/',
    handleSignOut,
    domain: route => \`http://\${route.subdomain}.example.com/custom-prefix\${route.path}\`
  }
}`,...(Tt=(Rt=ke.parameters)==null?void 0:Rt.docs)==null?void 0:Tt.source}}};var Ft,Nt,zt;Se.parameters={...Se.parameters,docs:{...(Ft=Se.parameters)==null?void 0:Ft.docs,source:{originalSource:`{
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
    const [authDetails, setAuthDetails] = useState<AuthDetails>({
      provider: 'myID'
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
      }} authDetails={authDetails}>
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
}`,...(zt=(Nt=Se.parameters)==null?void 0:Nt.docs)==null?void 0:zt.source}}};var $t,_t,Wt;Ie.parameters={...Ie.parameters,docs:{...($t=Ie.parameters)==null?void 0:$t.docs,source:{originalSource:`{
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
}`,...(Wt=(_t=Ie.parameters)==null?void 0:_t.docs)==null?void 0:Wt.source}}};var qt,Gt,Ht;Le.parameters={...Le.parameters,docs:{...(qt=Le.parameters)==null?void 0:qt.docs,source:{originalSource:`{
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
}`,...(Ht=(Gt=Le.parameters)==null?void 0:Gt.docs)==null?void 0:Ht.source}}};var Ut,Yt,Kt;Me.parameters={...Me.parameters,docs:{...(Ut=Me.parameters)==null?void 0:Ut.docs,source:{originalSource:`{
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
}`,...(Kt=(Yt=Me.parameters)==null?void 0:Yt.docs)==null?void 0:Kt.source}}};var Qt,Xt,Vt;Ae.parameters={...Ae.parameters,docs:{...(Qt=Ae.parameters)==null?void 0:Qt.docs,source:{originalSource:`{
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
}`,...(Vt=(Xt=Ae.parameters)==null?void 0:Xt.docs)==null?void 0:Vt.source}}};var Zt,Jt,er;De.parameters={...De.parameters,docs:{...(Zt=De.parameters)==null?void 0:Zt.docs,source:{originalSource:`{
  args: {
    focusMode: false,
    unreadMessageCount: 6,
    activePath: '/',
    handleSignOut,
    claims: {
      family_name: 'family_name'
    }
  }
}`,...(er=(Jt=De.parameters)==null?void 0:Jt.docs)==null?void 0:er.source}}};var nr,tr,rr;je.parameters={...je.parameters,docs:{...(nr=je.parameters)==null?void 0:nr.docs,source:{originalSource:`{
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
}`,...(rr=(tr=je.parameters)==null?void 0:tr.docs)==null?void 0:rr.source}}};var or,ir,ar;Be.parameters={...Be.parameters,docs:{...(or=Be.parameters)==null?void 0:or.docs,source:{originalSource:`{
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
}`,...(ar=(ir=Be.parameters)==null?void 0:ir.docs)==null?void 0:ar.source}}};var sr,cr,lr;Ee.parameters={...Ee.parameters,docs:{...(sr=Ee.parameters)==null?void 0:sr.docs,source:{originalSource:`{
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
}`,...(lr=(cr=Ee.parameters)==null?void 0:cr.docs)==null?void 0:lr.source}}};var dr,ur,pr;Re.parameters={...Re.parameters,docs:{...(dr=Re.parameters)==null?void 0:dr.docs,source:{originalSource:`{
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
}`,...(pr=(ur=Re.parameters)==null?void 0:ur.docs)==null?void 0:pr.source}}};var fr,hr,gr;Te.parameters={...Te.parameters,docs:{...(fr=Te.parameters)==null?void 0:fr.docs,source:{originalSource:`{
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
}`,...(gr=(hr=Te.parameters)==null?void 0:hr.docs)==null?void 0:gr.source}}};var mr,vr,br;Fe.parameters={...Fe.parameters,docs:{...(mr=Fe.parameters)==null?void 0:mr.docs,source:{originalSource:`{
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
}`,...(br=(vr=Fe.parameters)==null?void 0:vr.docs)==null?void 0:br.source}}};var yr,Or,Pr;Ne.parameters={...Ne.parameters,docs:{...(yr=Ne.parameters)==null?void 0:yr.docs,source:{originalSource:`{
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
}`,...(Pr=(Or=Ne.parameters)==null?void 0:Or.docs)==null?void 0:Pr.source}}};var xr,wr,Cr;ze.parameters={...ze.parameters,docs:{...(xr=ze.parameters)==null?void 0:xr.docs,source:{originalSource:`{
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
}`,...(Cr=(wr=ze.parameters)==null?void 0:wr.docs)==null?void 0:Cr.source}}};const xc=["Basic","FocusMode","ClientSideFetch","EnvironmentRouting","CustomRouting","BusinessDropdown","BusinessDropdownModalInterrupt","SignOutModalTrigger","OptionalAppsEnabled","Claims","ClaimsMissingName","ClaimsMissingNameAnalytics","ClaimsMissingNameComponent","ClaimsMissingGivenNameComponent","RequiredProofingPaywall","RequiredProofingPaywallOptions","RequiredProofingPaywallCustomComponent","CustomSidenav","HeaderProps"];export{Pe as Basic,Se as BusinessDropdown,Ie as BusinessDropdownModalInterrupt,Ae as Claims,Ee as ClaimsMissingGivenNameComponent,De as ClaimsMissingName,je as ClaimsMissingNameAnalytics,Be as ClaimsMissingNameComponent,we as ClientSideFetch,ke as CustomRouting,Ne as CustomSidenav,Ce as EnvironmentRouting,xe as FocusMode,ze as HeaderProps,Me as OptionalAppsEnabled,Re as RequiredProofingPaywall,Fe as RequiredProofingPaywallCustomComponent,Te as RequiredProofingPaywallOptions,Le as SignOutModalTrigger,xc as __namedExportsOrder,Pc as default};
