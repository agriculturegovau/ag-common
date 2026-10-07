import{j as t,b as a}from"./Box-37a490cb.esm-DXji3-i8.js";import{C as v}from"./ag.ds-next-react-callout.esm-CNsPQSsz.js";import{C as E}from"./CoreProvider-eb9f00f4.esm-DzsGG-Bs.js";import{r as P}from"./index-BAneEnFJ.js";import{T as i}from"./Icon-29f3c11e.esm-BSN4Axrc.js";import{a as c,T as k}from"./ag.ds-next-react-text-link.esm-DVkxptUq.js";import"./jsx-runtime-D_zvdyIk.js";import"./ag.ds-next-react-icon.esm-BooAXek9.js";import"./_commonjsHelpers-CqkleIqs.js";const L=e=>{var r;try{return(r=new Intl.DateTimeFormat("en-AU",{timeZone:"Australia/Sydney",timeZoneName:"short"}).formatToParts(e).find(S=>S.type==="timeZoneName"))==null?void 0:r.value}catch{return}},N=e=>{const r=(e==null?void 0:e.internal)===!0?c:k,m=P.useMemo(()=>L(),[]);return t(E,{children:a(v,{title:(e==null?void 0:e.hideHelpArticles)===!0?"Need more help?":"Need help?",children:[(e==null?void 0:e.hideHelpArticles)===!0?null:a(i,{children:["Search our"," ",t(r,{href:e.helpHref??"/help",children:"Help"})," ","pages"]}),a(i,{children:["Email"," ",t(c,{href:"mailto:tradeclearsupport@aff.gov.au",children:"tradeclearsupport@aff.gov.au"})]}),a(i,{children:["Call ",t(c,{href:"tel:1800571125",children:"1800 571 125"}),", Monday to Friday, 9 am to 5 pm ",m??"AEST/AEDT"]})]})})},w={title:"HelpCallout",component:N,parameters:{layout:"fullscreen"}},o={},s={args:{hideHelpArticles:!0}},n={args:{helpHref:"https://exports.agriculture.gov.au/help"}},l={args:{internal:!0}};var u,d,p;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(p=(d=o.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var h,f,g;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    hideHelpArticles: true
  }
}`,...(g=(f=s.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var H,x,T;n.parameters={...n.parameters,docs:{...(H=n.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    helpHref: 'https://exports.agriculture.gov.au/help'
  }
}`,...(T=(x=n.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};var y,A,C;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    internal: true
  }
}`,...(C=(A=l.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};const z=["Basic","Minimal","ProdHelpPages","InternalLink"];export{o as Basic,l as InternalLink,s as Minimal,n as ProdHelpPages,z as __namedExportsOrder,w as default};
