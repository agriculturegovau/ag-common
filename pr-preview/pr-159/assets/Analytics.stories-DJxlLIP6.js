import{j as e,c as a,B as i,F as Ce,t as O,p as J,a as pe}from"./Box-37a490cb.esm-dmeiMQGM.js";import{r as s}from"./index-BAneEnFJ.js";import{S as T,T as j}from"./Icon-29f3c11e.esm-CyHhoPeY.js";import{P as f,a as xe,c as we}from"./ag.ds-next-react-button.esm-6h5LAdEa.js";import{P as b,H as A}from"./ag.ds-next-react-heading.esm-CV_tYHIv.js";import{a as ue,C as B}from"./ag.ds-next-react-columns.esm-BbjpNZZJ.js";import{r as Se}from"./index-exioagFi.js";import"./jsx-runtime-D_zvdyIk.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-pL_YbQPu.js";function R(n,t){var o=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter(function(c){return Object.getOwnPropertyDescriptor(n,c).enumerable})),o.push.apply(o,r)}return o}function p(n){for(var t=1;t<arguments.length;t++){var o=arguments[t]!=null?arguments[t]:{};t%2?R(Object(o),!0).forEach(function(r){pe(n,r,o[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(o)):R(Object(o)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(o,r))})}return n}var z=s.createContext(void 0),D=function(t){var o=t.as,r=t.background,c=r===void 0?"body":r,d=t.children,l=t.className,V=t.clickable,y=t.footer,g=t.footerOutside,m=t.header,q=t.shadow,v=he({background:c,clickable:V,root:!0,shadow:q}),G=!!y;return e(z.Provider,{value:{background:c,clickable:V,hasFooter:G,footerOutside:g,shadow:q},children:y||m?a(i,p(p({as:o,className:l,"data-card":"root-with-parts",display:"flex",flexDirection:"column",flexGrow:1},g?{}:v),{},{children:[m&&g?a(i,p(p({"data-card":"header-footer-wrapper",display:"flex",flexDirection:"column",flexGrow:1},v),{},{children:[e(i,{"data-card":"header",display:"flex",flexDirection:"column",children:m}),e(i,{"data-card":"children",display:"flex",flexDirection:"column",flexGrow:1,children:d})]})):a(Ce,{children:[m&&e(i,{"data-card":"header",display:"flex",flexDirection:"column",children:m}),e(i,p(p({"data-card":"children",display:"flex",flexDirection:"column",flexGrow:1},g?v:{}),{},{children:d}))]}),y&&e(i,{"data-card":"footer",children:y})]})):e(i,p(p({as:o,className:l,"data-card":"root",display:"flex",flexDirection:"column",flexGrow:1},g&&!G?{css:{position:"relative","> img:first-of-type":{borderTopLeftRadius:O.borderRadius,borderTopRightRadius:O.borderRadius,'+ [data-card="inner"]':{borderTopLeftRadius:0,borderTopRightRadius:0}}}}:v),{},{children:d}))})},he=function(t){var o=t.background,r=t.clickable,c=t.root,d=t.shadow;return{background:o,border:!0,borderColor:"muted",rounded:!0,css:p(p({overflow:"hidden",position:c?"relative":void 0},r&&{":has(:focus-visible)":J.outline,"@supports not selector(:has(*))":{":focus-within":J.outline}}),d&&{boxShadow:O.shadow.sm,"&:hover":r?{boxShadow:O.shadow.md}:void 0})}},Ee={name:"bjn8wh",styles:"position:relative"},$=function(t){var o=t.background,r=t.children,c=s.useContext(z);return c!=null&&c.footerOutside?e(i,{background:o,css:Ee,paddingTop:1,paddingX:.25,children:r}):e(i,{background:o,borderColor:"muted",borderTop:!0,padding:1.5,children:r})},F=function(t){var o=t.background,r=t.children;return e(i,{background:o,borderBottom:!0,borderColor:"muted",padding:1.5,children:r})};function M(n,t){var o=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter(function(c){return Object.getOwnPropertyDescriptor(n,c).enumerable})),o.push.apply(o,r)}return o}function Z(n){for(var t=1;t<arguments.length;t++){var o=arguments[t]!=null?arguments[t]:{};t%2?M(Object(o),!0).forEach(function(r){pe(n,r,o[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(o)):M(Object(o)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(o,r))})}return n}var N=function(t){var o=t.children,r=s.useContext(z);return e(i,Z(Z({},r!=null&&r.footerOutside&&!(r!=null&&r.hasFooter)?he({background:r==null?void 0:r.background,clickable:r==null?void 0:r.clickable,shadow:r==null?void 0:r.shadow}):void 0),{},{"data-card":"inner",flexGrow:1,padding:1.5,children:o}))};const I=s.createContext(()=>null),L=s.createContext({}),ge=({children:n,onEvent:t})=>{const o=s.useContext(I);return e(I.Provider,{value:(r,c)=>{t(r,c),o==null||o(r,c)},children:n})},ke=({data:n,children:t})=>{const r={...s.useContext(L)||{},...n};return e(L.Provider,{value:r,children:t})},Pe=()=>{const n=s.useContext(L),t=s.useContext(I);return{trackEvent:(r,c)=>{t&&t(r,{...n,...c})}}},me=s.createContext({Script:()=>null}),Oe=({children:n,...t})=>e(me.Provider,{value:t,children:n}),fe=()=>s.useContext(me),je=({measurementID:n})=>{const{Script:t,nonce:o}=fe();return a(s.Fragment,{children:[e(t,{nonce:o,id:"ag-common-analytics:google-src",src:`https://www.googletagmanager.com/gtag/js?id=${n}`}),e(t,{nonce:o,id:"ag-common-analytics:google-init",children:`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${n}');
        `})]})},Ae=({zone:n,zoneID:t})=>{const{Script:o,nonce:r}=fe(),[c,d]=s.useState(!1);if(s.useEffect(()=>d(!0),[]),!c)return null;const l=e("div",{id:t,"aria-hidden":"true"});return a(s.Fragment,{children:[e(o,{nonce:r,id:"ag-common-analytics:qualtrics",children:`(function(){var g=function(g){
      this.go=function(){var a=document.createElement("script");a.type="text/javascript";a.src=g;document.body&&document.body.appendChild(a)};
      this.start=function(){var t=this;"complete"!==document.readyState?window.addEventListener?window.addEventListener("load",function(){t.go()},!1):window.attachEvent&&window.attachEvent("onload",function(){t.go()}):t.go()};};
      try{(new g("https://${n}.siteintercept.qualtrics.com/SIE/?Q_ZID=${t}")).start()}catch(i){}})();`}),Se.createPortal(l,document.body)]})},Be={googleAnalyticsMeasurementID:"G-1R962GVJMB"},De=()=>window==null?void 0:window.gtag,$e=n=>({onEvent:(...t)=>n("event",...t)}),Fe=()=>{const n=De();return n?$e(n):void 0},Ne=()=>{},h=({children:n,onEvent:t,googleAnalytics:o,qualtrics:r,scriptComponents:c})=>a(Oe,{...c,children:[o===!1?null:e(je,{measurementID:Be.googleAnalyticsMeasurementID}),r?e(Ae,{zone:r.zone,zoneID:r.zoneID}):null,e(ge,{onEvent:(...d)=>{const l=Fe();return(t??(l==null?void 0:l.onEvent)??Ne)(...d)},children:n})]}),Te=new Set(["none","self","strict-dynamic","report-sample","inline-speculation-rules","unsafe-inline","unsafe-eval","unsafe-hashes","wasm-unsafe-eval","script"]),He=n=>{const t=n.toLowerCase();return Te.has(t)||/^(nonce|sha256|sha384|sha512)-/.test(t)},Ie=n=>He(n)?`'${n}'`:n,be=()=>({}),ye=n=>{const t=o=>Array.isArray(o)?o.flatMap(t):o===""?[]:[Ie(o)];return new Set(t(n))},Q=n=>{const t=be();return Object.entries(n).forEach(([o,r])=>{r!==void 0&&(t[o]=ye(r))}),t},ve=(...n)=>{const t=be();return n.forEach(o=>{Object.entries(o).forEach(([r,c])=>{const d=t[r]??new Set,l=c instanceof Set?c:ye(c??[]);t[r]=d.union(l)})}),t},Le=n=>Array.from(n).join(" "),ze=(...n)=>Object.entries(ve(...n)).flatMap(([t,o])=>o===void 0?[]:o.size<1?[`${t};`]:[`${t} ${Le(o)};`]).join(" "),Ve={merge:ve,render:ze},K={"connect-src":"https://*.qualtrics.com","frame-src":"https://*.qualtrics.com","img-src":"https://*.qualtrics.com","script-src":["https://siteintercept.qualtrics.com","https://*.siteintercept.qualtrics.com"]},U={"script-src":["https://www.googletagmanager.com"],"img-src":["www.googletagmanager.com","https://*.google-analytics.com","https://*.googletagmanager.com"],"connect-src":["www.googletagmanager.com","www.google.com","https://*.google-analytics.com","https://*.analytics.google.com","https://*.googletagmanager.com"]},qe=({nonce:n,isDev:t=!1})=>({"default-src":"self","script-src":["self",`nonce-${n}`,"strict-dynamic",...t?["unsafe-eval"]:[]],"style-src":["self",`nonce-${n}`],"img-src":["self","blob:","data:"],"font-src":"self","object-src":"none","base-uri":"self","form-action":"self","frame-ancestors":"none","upgrade-insecure-requests":[]}),H={raw:{qualtrics:K,googleAnalytics:U},qualtrics:Q(K),googleAnalytics:Q(U),nextJS:qe},We={title:"Analytics",component:h,parameters:{layout:"fullscreen"},args:{scriptComponents:{Script:()=>null}}},C={args:{scriptComponents:{Script:n=>e(i,{border:!0,rounded:!0,padding:1,children:e("pre",{children:a("code",{children:["#",n.id]})})})},qualtrics:{zone:"zone",zoneID:"ZN_zoneID"}},render:n=>e(f,{children:e(T,{gap:1,children:e(h,{...n,children:a(b,{children:[e("h1",{children:"Your app code here"}),e("p",{children:"This blocks above demonstrate that a script tag was registered, you will not see anything in your actual page."}),e("p",{children:"Try turning providers on and off with the controls below 👇"})]})})})})},x={args:{scriptComponents:{Script:n=>e(i,{border:!0,rounded:!0,padding:1,children:a("pre",{children:[a("code",{children:["#",n.id]}),e("br",{}),a("code",{children:["nonce-",n.nonce]})]})}),nonce:"our-nonce-value"},qualtrics:{zone:"zone",zoneID:"ZN_zoneID"}},render:n=>{const t=Ve.render(H.nextJS({nonce:n.scriptComponents.nonce}),H.googleAnalytics,H.qualtrics,{"font-src":"arbitrary-value"});return e(f,{children:e(T,{gap:1,children:e(h,{...n,children:a(b,{children:[e("h1",{children:"sample CSP headers"}),e("pre",{children:e("code",{children:t.split("; ").join(`;
`)})})]})})})})}},u=({name:n,data:t={},children:o,variant:r="secondary",...c})=>{const{trackEvent:d}=Pe();return e(we,{...c,variant:r,onClick:()=>{d(n,t)},children:o??n})},w={args:{onEvent:(n,t)=>{alert(`trackEvent(${n}, ${JSON.stringify(t)})`)}},render:n=>e(h,{...n,children:e(f,{children:a(b,{children:[e("h1",{children:"Custom event handlers"}),e("p",{children:"Some nice text about starting a form application."}),e("p",{children:a(xe,{children:[e(u,{name:"application-progress",data:{status:"started"},children:"Begin"}),e(u,{name:"application-progress",variant:"secondary",data:{status:"stopped"},children:"Cancel"})]})})]})})})},S=n=>a(T,{gap:1,css:{border:"2px dashed #fec0ff",padding:"2px"},children:[e(i,{css:{background:"#fec0ff",padding:"2px 2px"},children:e("code",{children:JSON.stringify(n.data)})}),e(ke,{...n})]}),E=({label:n,children:t})=>a(T,{gap:1,css:{border:"2px dashed #fec0ff",padding:"2px"},children:[e(i,{css:{background:"#fec0ff",padding:"2px 2px"},children:e("code",{children:n})}),e(ge,{onEvent:(o,r)=>{alert(`${n}:trackEvent(${o}, ${JSON.stringify(r)})`)},children:t})]}),k={args:{onEvent:(n,t)=>{alert(`trackEvent(${n}, ${JSON.stringify(t)})`)}},render:n=>e(h,{...n,children:e(f,{children:a(S,{data:{page:"registration-info"},children:[a(b,{children:[e("h1",{children:"Nested data context"}),e("p",{children:"Our page can build up data that will be submitted with an event"}),e("p",{children:e(u,{name:"info-page-click",children:"Page context"})}),e("p",{children:"Some more interesting info about the Export Service."})]}),a(S,{data:{section:"cards"},children:[e(u,{name:"info-page-click",children:"Section context"}),a(ue,{children:[e(B,{columnSpan:6,children:e(S,{data:{card:"card-1"},children:a(D,{children:[e(F,{children:e(A,{type:"h4",children:"Feature card title"})}),e(N,{children:e(j,{as:"p",children:"Additional conent relating to the card"})}),e($,{children:e(u,{name:"info-page-click",children:"Find out more"})})]})})}),e(B,{columnSpan:6,children:e(S,{data:{card:"card-2"},children:a(D,{children:[e(F,{children:e(A,{type:"h4",children:"Feature card title"})}),e(N,{children:e(j,{as:"p",children:"Additional conent relating to the card"})}),e($,{children:e(u,{name:"info-page-click",data:{userName:"Sam"},children:"Start application with user-data"})})]})})})]})]})]})})})},P={args:{onEvent:(n,t)=>{alert(`trackEvent(${n}, ${JSON.stringify(t)})`)}},render:n=>e(h,{...n,children:e(f,{children:a(E,{label:"page-listener",children:[a(b,{children:[e("h1",{children:"Nested event listeners"}),a("p",{children:["The ",e("code",{children:"AnalyticsListener"})," component allows you to attach additional event listeners to sections of your page. The events will bubble and also trigger the outer listeners."]}),e("p",{children:"Use this if you want to report something specific for parts of your application"}),e("p",{children:e(u,{name:"info-page-click",children:"Page click"})}),e("p",{children:"Some more interesting info about the Export Service."})]}),a(E,{label:"card-listener",children:[e(u,{name:"info-section-click",children:"Section click"}),a(ue,{children:[e(B,{columnSpan:6,children:e(E,{label:"card-1",children:a(D,{children:[e(F,{children:e(A,{type:"h4",children:"Feature card title"})}),e(N,{children:e(j,{as:"p",children:"Additional content relating to the card"})}),e($,{children:e(u,{name:"info-card1-click",children:"Find out more"})})]})})}),e(B,{columnSpan:6,children:e(E,{label:"card-2",children:a(D,{children:[e(F,{children:e(A,{type:"h4",children:"Feature card title"})}),e(N,{children:e(j,{as:"p",children:"Additional content relating to the card"})}),e($,{children:e(u,{name:"info-card2-click",data:{userName:"Sam"},children:"Start application with user-data"})})]})})})]})]})]})})})};var Y,X,W;C.parameters={...C.parameters,docs:{...(Y=C.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(W=(X=C.parameters)==null?void 0:X.docs)==null?void 0:W.source}}};var _,ee,ne;x.parameters={...x.parameters,docs:{...(_=x.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(ne=(ee=x.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var te,re,oe;w.parameters={...w.parameters,docs:{...(te=w.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(oe=(re=w.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};var ae,ce,ie;k.parameters={...k.parameters,docs:{...(ae=k.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(ie=(ce=k.parameters)==null?void 0:ce.docs)==null?void 0:ie.source}}};var se,de,le;P.parameters={...P.parameters,docs:{...(se=P.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(le=(de=P.parameters)==null?void 0:de.docs)==null?void 0:le.source}}};const _e=["Default","ContentSecurityPolicy","CustomEventHandler","NestedDataContext","NestedEventListeners"];export{x as ContentSecurityPolicy,w as CustomEventHandler,C as Default,k as NestedDataContext,P as NestedEventListeners,_e as __namedExportsOrder,We as default};
