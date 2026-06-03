import{j as e,c as a,B as i,F as we,t as O,p as M,a as he}from"./Box-37a490cb.esm-dmeiMQGM.js";import{r as s}from"./index-BAneEnFJ.js";import{S as T,T as j}from"./Icon-29f3c11e.esm-CyHhoPeY.js";import{P as f,a as Se,c as Ee}from"./ag.ds-next-react-button.esm-6h5LAdEa.js";import{P as b,H as A}from"./ag.ds-next-react-heading.esm-CV_tYHIv.js";import{a as ge,C as B}from"./ag.ds-next-react-columns.esm-BbjpNZZJ.js";import{r as ke}from"./index-exioagFi.js";import"./jsx-runtime-D_zvdyIk.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-pL_YbQPu.js";function Z(n,t){var o=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter(function(c){return Object.getOwnPropertyDescriptor(n,c).enumerable})),o.push.apply(o,r)}return o}function p(n){for(var t=1;t<arguments.length;t++){var o=arguments[t]!=null?arguments[t]:{};t%2?Z(Object(o),!0).forEach(function(r){he(n,r,o[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(o)):Z(Object(o)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(o,r))})}return n}var q=s.createContext(void 0),D=function(t){var o=t.as,r=t.background,c=r===void 0?"body":r,d=t.children,l=t.className,G=t.clickable,v=t.footer,g=t.footerOutside,m=t.header,J=t.shadow,y=me({background:c,clickable:G,root:!0,shadow:J}),R=!!v;return e(q.Provider,{value:{background:c,clickable:G,hasFooter:R,footerOutside:g,shadow:J},children:v||m?a(i,p(p({as:o,className:l,"data-card":"root-with-parts",display:"flex",flexDirection:"column",flexGrow:1},g?{}:y),{},{children:[m&&g?a(i,p(p({"data-card":"header-footer-wrapper",display:"flex",flexDirection:"column",flexGrow:1},y),{},{children:[e(i,{"data-card":"header",display:"flex",flexDirection:"column",children:m}),e(i,{"data-card":"children",display:"flex",flexDirection:"column",flexGrow:1,children:d})]})):a(we,{children:[m&&e(i,{"data-card":"header",display:"flex",flexDirection:"column",children:m}),e(i,p(p({"data-card":"children",display:"flex",flexDirection:"column",flexGrow:1},g?y:{}),{},{children:d}))]}),v&&e(i,{"data-card":"footer",children:v})]})):e(i,p(p({as:o,className:l,"data-card":"root",display:"flex",flexDirection:"column",flexGrow:1},g&&!R?{css:{position:"relative","> img:first-of-type":{borderTopLeftRadius:O.borderRadius,borderTopRightRadius:O.borderRadius,'+ [data-card="inner"]':{borderTopLeftRadius:0,borderTopRightRadius:0}}}}:y),{},{children:d}))})},me=function(t){var o=t.background,r=t.clickable,c=t.root,d=t.shadow;return{background:o,border:!0,borderColor:"muted",rounded:!0,css:p(p({overflow:"hidden",position:c?"relative":void 0},r&&{":has(:focus-visible)":M.outline,"@supports not selector(:has(*))":{":focus-within":M.outline}}),d&&{boxShadow:O.shadow.sm,"&:hover":r?{boxShadow:O.shadow.md}:void 0})}},Pe={name:"bjn8wh",styles:"position:relative"},$=function(t){var o=t.background,r=t.children,c=s.useContext(q);return c!=null&&c.footerOutside?e(i,{background:o,css:Pe,paddingTop:1,paddingX:.25,children:r}):e(i,{background:o,borderColor:"muted",borderTop:!0,padding:1.5,children:r})},F=function(t){var o=t.background,r=t.children;return e(i,{background:o,borderBottom:!0,borderColor:"muted",padding:1.5,children:r})};function Q(n,t){var o=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter(function(c){return Object.getOwnPropertyDescriptor(n,c).enumerable})),o.push.apply(o,r)}return o}function K(n){for(var t=1;t<arguments.length;t++){var o=arguments[t]!=null?arguments[t]:{};t%2?Q(Object(o),!0).forEach(function(r){he(n,r,o[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(o)):Q(Object(o)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(o,r))})}return n}var N=function(t){var o=t.children,r=s.useContext(q);return e(i,K(K({},r!=null&&r.footerOutside&&!(r!=null&&r.hasFooter)?me({background:r==null?void 0:r.background,clickable:r==null?void 0:r.clickable,shadow:r==null?void 0:r.shadow}):void 0),{},{"data-card":"inner",flexGrow:1,padding:1.5,children:o}))};const L=s.createContext(()=>null),z=s.createContext({}),fe=({children:n,onEvent:t})=>{const o=s.useContext(L);return e(L.Provider,{value:(r,c)=>{t(r,c),o==null||o(r,c)},children:n})},Oe=({data:n,children:t})=>{const r={...s.useContext(z)||{},...n};return e(z.Provider,{value:r,children:t})},je=()=>{const n=s.useContext(z),t=s.useContext(L);return{trackEvent:(r,c)=>{t&&t(r,{...n,...c})}}},be=s.createContext({Script:()=>null}),Ae=({children:n,...t})=>e(be.Provider,{value:t,children:n}),ve=()=>s.useContext(be),Be=({measurementID:n})=>{const{Script:t,nonce:o}=ve();return a(s.Fragment,{children:[e(t,{nonce:o,id:"ag-common-analytics:google-src",src:`https://www.googletagmanager.com/gtag/js?id=${n}`}),e(t,{nonce:o,id:"ag-common-analytics:google-init",children:`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${n}');
        `})]})},De=({zone:n,zoneID:t})=>{const{Script:o,nonce:r}=ve(),[c,d]=s.useState(!1);if(s.useEffect(()=>d(!0),[]),!c)return null;const l=e("div",{id:t,"aria-hidden":"true"});return a(s.Fragment,{children:[e(o,{nonce:r,id:"ag-common-analytics:qualtrics",children:`(function(){var g=function(g){
      this.go=function(){var a=document.createElement("script");a.type="text/javascript";a.src=g;document.body&&document.body.appendChild(a)};
      this.start=function(){var t=this;"complete"!==document.readyState?window.addEventListener?window.addEventListener("load",function(){t.go()},!1):window.attachEvent&&window.attachEvent("onload",function(){t.go()}):t.go()};};
      try{(new g("https://${n}.siteintercept.qualtrics.com/SIE/?Q_ZID=${t}")).start()}catch(i){}})();`}),ke.createPortal(l,document.body)]})},$e={googleAnalyticsMeasurementID:"G-1R962GVJMB"},Fe=()=>window==null?void 0:window.gtag,Ne=n=>({onEvent:(...t)=>n("event",...t)}),Te=()=>{const n=Fe();return n?Ne(n):void 0},He=()=>{},h=({children:n,onEvent:t,googleAnalytics:o,qualtrics:r,scriptComponents:c})=>a(Ae,{...c,children:[o===!1?null:e(Be,{measurementID:$e.googleAnalyticsMeasurementID}),r?e(De,{zone:r.zone,zoneID:r.zoneID}):null,e(fe,{onEvent:(...d)=>{const l=Te();return(t??(l==null?void 0:l.onEvent)??He)(...d)},children:n})]}),Ie=new Set(["none","self","strict-dynamic","report-sample","inline-speculation-rules","unsafe-inline","unsafe-eval","unsafe-hashes","wasm-unsafe-eval","script"]),Le=n=>{const t=n.toLowerCase();return Ie.has(t)||/^(nonce|sha256|sha384|sha512)-/.test(t)},ze=n=>Le(n)?`'${n}'`:n,ye=()=>({}),Ce=n=>{const t=o=>Array.isArray(o)?o.flatMap(t):o===""?[]:[ze(o)];return new Set(t(n))},H=n=>{const t=ye();return Object.entries(n).forEach(([o,r])=>{r!==void 0&&(t[o]=Ce(r))}),t},xe=(...n)=>{const t=ye();return n.forEach(o=>{Object.entries(o).forEach(([r,c])=>{const d=t[r]??new Set,l=c instanceof Set?c:Ce(c??[]);t[r]=d.union(l)})}),t},Ve=n=>Array.from(n).join(" "),qe=(...n)=>Object.entries(xe(...n)).flatMap(([t,o])=>o===void 0?[]:o.size<1?[`${t};`]:[`${t} ${Ve(o)};`]).join(" "),Ge={merge:xe,render:qe},V=n=>`'nonce-${n}'`,U={"connect-src":"https://*.qualtrics.com","frame-src":"https://*.qualtrics.com","img-src":"https://*.qualtrics.com","script-src":["https://siteintercept.qualtrics.com","https://*.siteintercept.qualtrics.com"]},Y={"script-src":["https://www.googletagmanager.com"],"img-src":["www.googletagmanager.com","https://*.google-analytics.com","https://*.googletagmanager.com"],"connect-src":["www.googletagmanager.com","www.google.com","https://*.google-analytics.com","https://*.analytics.google.com","https://*.googletagmanager.com"]},Je=n=>({"default-src":"self","script-src":["self",V(n.nonce),"strict-dynamic",...n.isDev?["unsafe-eval"]:[]],"style-src":["self",V(n.nonce)],"img-src":["self","blob:","data:"],"font-src":"self","object-src":"none","base-uri":"self","form-action":"self","frame-ancestors":"none","upgrade-insecure-requests":[]}),X={"default-src":"'self'","script-src":"'self'","style-src":"'self'","img-src":["'self'","blob:","data:","https://*.agriculture.gov.au"],"connect-src":["'self'","https://*.agriculture.gov.au"]},I={raw:{qualtrics:U,googleAnalytics:Y,agriculture:X},helpers:{nonce:V},qualtrics:H(U),googleAnalytics:H(Y),agriculture:H(X),nextJS:Je},en={title:"Analytics",component:h,parameters:{layout:"fullscreen"},args:{scriptComponents:{Script:()=>null}}},C={args:{scriptComponents:{Script:n=>e(i,{border:!0,rounded:!0,padding:1,children:e("pre",{children:a("code",{children:["#",n.id]})})})},qualtrics:{zone:"zone",zoneID:"ZN_zoneID"}},render:n=>e(f,{children:e(T,{gap:1,children:e(h,{...n,children:a(b,{children:[e("h1",{children:"Your app code here"}),e("p",{children:"This blocks above demonstrate that a script tag was registered, you will not see anything in your actual page."}),e("p",{children:"Try turning providers on and off with the controls below 👇"})]})})})})},x={args:{scriptComponents:{Script:n=>e(i,{border:!0,rounded:!0,padding:1,children:a("pre",{children:[a("code",{children:["#",n.id]}),e("br",{}),a("code",{children:["nonce-",n.nonce]})]})}),nonce:"our-nonce-value"},qualtrics:{zone:"zone",zoneID:"ZN_zoneID"}},render:n=>{const t=Ge.render(I.nextJS({nonce:n.scriptComponents.nonce}),I.googleAnalytics,I.qualtrics,{"font-src":"arbitrary-value"});return e(f,{children:e(T,{gap:1,children:e(h,{...n,children:a(b,{children:[e("h1",{children:"sample CSP headers"}),e("pre",{children:e("code",{children:t.split("; ").join(`;
`)})})]})})})})}},u=({name:n,data:t={},children:o,variant:r="secondary",...c})=>{const{trackEvent:d}=je();return e(Ee,{...c,variant:r,onClick:()=>{d(n,t)},children:o??n})},w={args:{onEvent:(n,t)=>{alert(`trackEvent(${n}, ${JSON.stringify(t)})`)}},render:n=>e(h,{...n,children:e(f,{children:a(b,{children:[e("h1",{children:"Custom event handlers"}),e("p",{children:"Some nice text about starting a form application."}),e("p",{children:a(Se,{children:[e(u,{name:"application-progress",data:{status:"started"},children:"Begin"}),e(u,{name:"application-progress",variant:"secondary",data:{status:"stopped"},children:"Cancel"})]})})]})})})},S=n=>a(T,{gap:1,css:{border:"2px dashed #fec0ff",padding:"2px"},children:[e(i,{css:{background:"#fec0ff",padding:"2px 2px"},children:e("code",{children:JSON.stringify(n.data)})}),e(Oe,{...n})]}),E=({label:n,children:t})=>a(T,{gap:1,css:{border:"2px dashed #fec0ff",padding:"2px"},children:[e(i,{css:{background:"#fec0ff",padding:"2px 2px"},children:e("code",{children:n})}),e(fe,{onEvent:(o,r)=>{alert(`${n}:trackEvent(${o}, ${JSON.stringify(r)})`)},children:t})]}),k={args:{onEvent:(n,t)=>{alert(`trackEvent(${n}, ${JSON.stringify(t)})`)}},render:n=>e(h,{...n,children:e(f,{children:a(S,{data:{page:"registration-info"},children:[a(b,{children:[e("h1",{children:"Nested data context"}),e("p",{children:"Our page can build up data that will be submitted with an event"}),e("p",{children:e(u,{name:"info-page-click",children:"Page context"})}),e("p",{children:"Some more interesting info about the Export Service."})]}),a(S,{data:{section:"cards"},children:[e(u,{name:"info-page-click",children:"Section context"}),a(ge,{children:[e(B,{columnSpan:6,children:e(S,{data:{card:"card-1"},children:a(D,{children:[e(F,{children:e(A,{type:"h4",children:"Feature card title"})}),e(N,{children:e(j,{as:"p",children:"Additional conent relating to the card"})}),e($,{children:e(u,{name:"info-page-click",children:"Find out more"})})]})})}),e(B,{columnSpan:6,children:e(S,{data:{card:"card-2"},children:a(D,{children:[e(F,{children:e(A,{type:"h4",children:"Feature card title"})}),e(N,{children:e(j,{as:"p",children:"Additional conent relating to the card"})}),e($,{children:e(u,{name:"info-page-click",data:{userName:"Sam"},children:"Start application with user-data"})})]})})})]})]})]})})})},P={args:{onEvent:(n,t)=>{alert(`trackEvent(${n}, ${JSON.stringify(t)})`)}},render:n=>e(h,{...n,children:e(f,{children:a(E,{label:"page-listener",children:[a(b,{children:[e("h1",{children:"Nested event listeners"}),a("p",{children:["The ",e("code",{children:"AnalyticsListener"})," component allows you to attach additional event listeners to sections of your page. The events will bubble and also trigger the outer listeners."]}),e("p",{children:"Use this if you want to report something specific for parts of your application"}),e("p",{children:e(u,{name:"info-page-click",children:"Page click"})}),e("p",{children:"Some more interesting info about the Export Service."})]}),a(E,{label:"card-listener",children:[e(u,{name:"info-section-click",children:"Section click"}),a(ge,{children:[e(B,{columnSpan:6,children:e(E,{label:"card-1",children:a(D,{children:[e(F,{children:e(A,{type:"h4",children:"Feature card title"})}),e(N,{children:e(j,{as:"p",children:"Additional content relating to the card"})}),e($,{children:e(u,{name:"info-card1-click",children:"Find out more"})})]})})}),e(B,{columnSpan:6,children:e(E,{label:"card-2",children:a(D,{children:[e(F,{children:e(A,{type:"h4",children:"Feature card title"})}),e(N,{children:e(j,{as:"p",children:"Additional content relating to the card"})}),e($,{children:e(u,{name:"info-card2-click",data:{userName:"Sam"},children:"Start application with user-data"})})]})})})]})]})]})})})};var W,_,ee;C.parameters={...C.parameters,docs:{...(W=C.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    scriptComponents: {
      Script: props => <Box border rounded padding={1}>
                    <pre>
                        <code>#{props.id}</code>
                    </pre>
                </Box>
    },
    qualtrics: {
      zone: 'zone',
      zoneID: 'ZN_zoneID'
    }
  },
  render: args => <PageContent>
            <Stack gap={1}>
                <Analytics {...args}>
                    <Prose>
                        <h1>Your app code here</h1>
                        <p>
                            This blocks above demonstrate that a script tag was registered,
                            you will not see anything in your actual page.
                        </p>
                        <p>Try turning providers on and off with the controls below 👇</p>
                    </Prose>
                </Analytics>
            </Stack>
        </PageContent>
}`,...(ee=(_=C.parameters)==null?void 0:_.docs)==null?void 0:ee.source}}};var ne,te,re;x.parameters={...x.parameters,docs:{...(ne=x.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    scriptComponents: {
      Script: props => <Box border rounded padding={1}>
                    <pre>
                        <code>#{props.id}</code>
                        <br />
                        <code>nonce-{props.nonce}</code>
                    </pre>
                </Box>,
      nonce: 'our-nonce-value'
    },
    qualtrics: {
      zone: 'zone',
      zoneID: 'ZN_zoneID'
    }
  },
  render: args => {
    const policy = csp.render(presets.nextJS({
      nonce: args.scriptComponents.nonce!
    }), presets.googleAnalytics, presets.qualtrics, {
      'font-src': 'arbitrary-value'
    });
    return <PageContent>
                <Stack gap={1}>
                    <Analytics {...args}>
                        <Prose>
                            <h1>sample CSP headers</h1>

                            <pre>
                                <code>
                                    {policy.split('; ').join(\`;
\`)}
                                </code>
                            </pre>
                        </Prose>
                    </Analytics>
                </Stack>
            </PageContent>;
  }
}`,...(re=(te=x.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var oe,ae,ce;w.parameters={...w.parameters,docs:{...(oe=w.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    onEvent: (name, data) => {
      alert(\`trackEvent(\${name}, \${JSON.stringify(data)})\`);
    }
  },
  render: args => <Analytics {...args}>
            <PageContent>
                <Prose>
                    <h1>Custom event handlers</h1>
                    <p>Some nice text about starting a form application.</p>
                    <p>
                        <ButtonGroup>
                            <EventButton name="application-progress" data={{
              status: 'started'
            }}>
                                Begin
                            </EventButton>
                            <EventButton name="application-progress" variant="secondary" data={{
              status: 'stopped'
            }}>
                                Cancel
                            </EventButton>
                        </ButtonGroup>
                    </p>
                </Prose>
            </PageContent>
        </Analytics>
}`,...(ce=(ae=w.parameters)==null?void 0:ae.docs)==null?void 0:ce.source}}};var ie,se,de;k.parameters={...k.parameters,docs:{...(ie=k.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    onEvent: (name, data) => {
      alert(\`trackEvent(\${name}, \${JSON.stringify(data)})\`);
    }
  },
  render: args => <Analytics {...args}>
            <PageContent>
                <VisibleContext data={{
        page: 'registration-info'
      }}>
                    <Prose>
                        <h1>Nested data context</h1>
                        <p>
                            Our page can build up data that will be submitted with an event
                        </p>
                        <p>
                            <EventButton name="info-page-click">Page context</EventButton>
                        </p>

                        <p>Some more interesting info about the Export Service.</p>
                    </Prose>

                    <VisibleContext data={{
          section: 'cards'
        }}>
                        <EventButton name="info-page-click">Section context</EventButton>

                        <Columns>
                            <Column columnSpan={6}>
                                <VisibleContext data={{
                card: 'card-1'
              }}>
                                    <Card>
                                        <CardHeader>
                                            <Heading type="h4">Feature card title</Heading>
                                        </CardHeader>
                                        <CardInner>
                                            <Text as="p">Additional conent relating to the card</Text>
                                        </CardInner>

                                        <CardFooter>
                                            <EventButton name="info-page-click">
                                                Find out more
                                            </EventButton>
                                        </CardFooter>
                                    </Card>
                                </VisibleContext>
                            </Column>

                            <Column columnSpan={6}>
                                <VisibleContext data={{
                card: 'card-2'
              }}>
                                    <Card>
                                        <CardHeader>
                                            <Heading type="h4">Feature card title</Heading>
                                        </CardHeader>
                                        <CardInner>
                                            <Text as="p">Additional conent relating to the card</Text>
                                        </CardInner>

                                        <CardFooter>
                                            <EventButton name="info-page-click" data={{
                      userName: 'Sam'
                    }}>
                                                Start application with user-data
                                            </EventButton>
                                        </CardFooter>
                                    </Card>
                                </VisibleContext>
                            </Column>
                        </Columns>
                    </VisibleContext>
                </VisibleContext>
            </PageContent>
        </Analytics>
}`,...(de=(se=k.parameters)==null?void 0:se.docs)==null?void 0:de.source}}};var le,pe,ue;P.parameters={...P.parameters,docs:{...(le=P.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    onEvent: (name, data) => {
      alert(\`trackEvent(\${name}, \${JSON.stringify(data)})\`);
    }
  },
  render: args => <Analytics {...args}>
            <PageContent>
                <VisibleListener label="page-listener">
                    <Prose>
                        <h1>Nested event listeners</h1>
                        <p>
                            The <code>AnalyticsListener</code> component allows you to attach
                            additional event listeners to sections of your page. The events
                            will bubble and also trigger the outer listeners.
                        </p>
                        <p>
                            Use this if you want to report something specific for parts of
                            your application
                        </p>
                        <p>
                            <EventButton name="info-page-click">Page click</EventButton>
                        </p>

                        <p>Some more interesting info about the Export Service.</p>
                    </Prose>

                    <VisibleListener label="card-listener">
                        <EventButton name="info-section-click">Section click</EventButton>

                        <Columns>
                            <Column columnSpan={6}>
                                <VisibleListener label="card-1">
                                    <Card>
                                        <CardHeader>
                                            <Heading type="h4">Feature card title</Heading>
                                        </CardHeader>
                                        <CardInner>
                                            <Text as="p">
                                                Additional content relating to the card
                                            </Text>
                                        </CardInner>

                                        <CardFooter>
                                            <EventButton name="info-card1-click">
                                                Find out more
                                            </EventButton>
                                        </CardFooter>
                                    </Card>
                                </VisibleListener>
                            </Column>

                            <Column columnSpan={6}>
                                <VisibleListener label="card-2">
                                    <Card>
                                        <CardHeader>
                                            <Heading type="h4">Feature card title</Heading>
                                        </CardHeader>
                                        <CardInner>
                                            <Text as="p">
                                                Additional content relating to the card
                                            </Text>
                                        </CardInner>

                                        <CardFooter>
                                            <EventButton name="info-card2-click" data={{
                      userName: 'Sam'
                    }}>
                                                Start application with user-data
                                            </EventButton>
                                        </CardFooter>
                                    </Card>
                                </VisibleListener>
                            </Column>
                        </Columns>
                    </VisibleListener>
                </VisibleListener>
            </PageContent>
        </Analytics>
}`,...(ue=(pe=P.parameters)==null?void 0:pe.docs)==null?void 0:ue.source}}};const nn=["Default","ContentSecurityPolicy","CustomEventHandler","NestedDataContext","NestedEventListeners"];export{x as ContentSecurityPolicy,w as CustomEventHandler,C as Default,k as NestedDataContext,P as NestedEventListeners,nn as __namedExportsOrder,en as default};
