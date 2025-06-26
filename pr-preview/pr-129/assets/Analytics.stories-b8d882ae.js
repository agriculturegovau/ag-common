import{j as e,i,B as c,F as me,t as E,p as J,_ as I,d as fe,e as be}from"./Box-c58c9f90.esm-870ae2fc.js";import{S as G,P as T,a as ve,c as ye}from"./ag.ds-next-react-button.esm-1da25121.js";import{P as N}from"./ag.ds-next-react-prose.esm-c841aae7.js";import{a as ie,C as P}from"./ag.ds-next-react-columns.esm-046b4eef.js";import{r as s}from"./index-39cffa30.js";import{T as B}from"./Icon-8342de17.esm-90d8f36f.js";import"./jsx-runtime-9bc08dc0.js";import"./_commonjsHelpers-725317a4.js";function W(t,n){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),a.push.apply(a,r)}return a}function l(t){for(var n=1;n<arguments.length;n++){var a=arguments[n]!=null?arguments[n]:{};n%2?W(Object(a),!0).forEach(function(r){I(t,r,a[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):W(Object(a)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(a,r))})}return t}var R=s.createContext(void 0),F=function(n){var a=n.as,r=n.background,o=r===void 0?"body":r,d=n.children,u=n.className,C=n.clickable,h=n.footer,g=n.footerOutside,m=n.header,b=n.shadow,f=ce({background:o,clickable:C,root:!0,shadow:b}),v=!!h;return e(R.Provider,{value:{background:o,clickable:C,hasFooter:v,footerOutside:g,shadow:b},children:h||m?i(c,l(l({as:a,className:u,"data-card":"root-with-parts",display:"flex",flexDirection:"column",flexGrow:1},g?{}:f),{},{children:[m&&g?i(c,l(l({"data-card":"header-footer-wrapper",display:"flex",flexDirection:"column",flexGrow:1},f),{},{children:[e(c,{"data-card":"header",display:"flex",flexDirection:"column",children:m}),e(c,{"data-card":"children",display:"flex",flexDirection:"column",flexGrow:1,children:d})]})):i(me,{children:[m&&e(c,{"data-card":"header",display:"flex",flexDirection:"column",children:m}),e(c,l(l({"data-card":"children",display:"flex",flexDirection:"column",flexGrow:1},g?f:{}),{},{children:d}))]}),h&&e(c,{"data-card":"footer",children:h})]})):e(c,l(l({as:a,className:u,"data-card":"root",display:"flex",flexDirection:"column",flexGrow:1},g&&!v?{css:{position:"relative","> img:first-of-type":{borderTopLeftRadius:E.borderRadius,borderTopRightRadius:E.borderRadius,'+ [data-card="inner"]':{borderTopLeftRadius:0,borderTopRightRadius:0}}}}:f),{},{children:d}))})},ce=function(n){var a=n.background,r=n.clickable,o=n.root,d=n.shadow;return{background:a,border:!0,borderColor:"muted",rounded:!0,css:l(l({overflow:"hidden",position:o?"relative":void 0},r&&{":has(:focus-visible)":J.outline,"@supports not selector(:has(*))":{":focus-within":J.outline}}),d&&{boxShadow:E.shadow.sm,"&:hover":r?{boxShadow:E.shadow.md}:void 0})}},Ce={name:"bjn8wh",styles:"position:relative"},A=function(n){var a=n.background,r=n.children,o=s.useContext(R);return o!=null&&o.footerOutside?e(c,{background:a,css:Ce,paddingTop:1,paddingX:.25,children:r}):e(c,{background:a,borderColor:"muted",borderTop:!0,padding:1.5,children:r})},D=function(n){var a=n.background,r=n.children;return e(c,{background:a,borderBottom:!0,borderColor:"muted",padding:1.5,children:r})};function z(t,n){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),a.push.apply(a,r)}return a}function M(t){for(var n=1;n<arguments.length;n++){var a=arguments[n]!=null?arguments[n]:{};n%2?z(Object(a),!0).forEach(function(r){I(t,r,a[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):z(Object(a)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(a,r))})}return t}var H=function(n){var a=n.children,r=s.useContext(R);return e(c,M(M({},r!=null&&r.footerOutside&&!(r!=null&&r.hasFooter)?ce({background:r==null?void 0:r.background,clickable:r==null?void 0:r.clickable,shadow:r==null?void 0:r.shadow}):void 0),{},{"data-card":"inner",flexGrow:1,padding:1.5,children:a}))},xe=["as","type","color","fontSize","fontFamily","fontWeight","lineHeight"];function K(t,n){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),a.push.apply(a,r)}return a}function we(t){for(var n=1;n<arguments.length;n++){var a=arguments[n]!=null?arguments[n]:{};n%2?K(Object(a),!0).forEach(function(r){I(t,r,a[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):K(Object(a)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(a,r))})}return t}var Se={h1:"xxl",h2:"xl",h3:"lg",h4:"md",h5:"sm",h6:"xs"},$=fe(function(n,a){var r=n.as,o=n.type,d=o===void 0?"h2":o,u=n.color,C=u===void 0?"text":u,h=n.fontSize,g=n.fontFamily,m=g===void 0?"body":g,b=n.fontWeight,f=b===void 0?"bold":b,v=n.lineHeight,pe=v===void 0?"heading":v,ue=be(n,xe),he=r??d,ge=h??Se[d];return e(c,we({as:he,color:C,fontFamily:m,fontSize:ge,fontWeight:f,lineHeight:pe,ref:a},ue))});const L=s.createContext(()=>null),V=s.createContext({}),de=({children:t,onEvent:n})=>{const a=s.useContext(L);return e(L.Provider,{value:(r,o)=>{n(r,o),a==null||a(r,o)},children:t})},ke=({data:t,children:n})=>{const r={...s.useContext(V)||{},...t};return e(V.Provider,{value:r,children:n})},Oe=()=>{const t=s.useContext(V),n=s.useContext(L);return{trackEvent:(r,o)=>{n&&n(r,{...t,...o})}}},se=s.createContext({Script:()=>null}),je=({children:t,Script:n=()=>null})=>e(se.Provider,{value:{Script:n},children:t}),le=()=>({Script:s.useContext(se).Script}),Ee=({measurementID:t})=>{const{Script:n}=le();return i(s.Fragment,{children:[e(n,{id:"ag-common-analytics:google-src",src:`https://www.googletagmanager.com/gtag/js?id=${t}`}),e(n,{id:"ag-common-analytics:google-init",children:`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${t}');
        `})]})},Pe=({hjid:t})=>{const{Script:n}=le();return e(n,{id:"ag-common-analytics:hotjar",children:`
          (function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:${t},hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
          })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
`})},q={googleAnalyticsMeasurementID:"G-1R962GVJMB",hotjarID:"2644577"},Be=()=>window==null?void 0:window.gtag,Fe=()=>({onEvent:(...t)=>{var n;return(n=Be())==null?void 0:n("event",...t)}}),Ae=()=>{},y=({children:t,onEvent:n,googleAnalytics:a,hotjar:r,scriptComponents:o})=>i(je,{...o,children:[a===!1?null:e(Ee,{measurementID:q.googleAnalyticsMeasurementID}),r===!1?null:e(Pe,{hjid:q.hotjarID}),e(de,{onEvent:(...d)=>{const u=Fe();return(n??(u==null?void 0:u.onEvent)??Ae)(...d)},children:t})]}),Ge={title:"Analytics",component:y,parameters:{layout:"fullscreen"},args:{scriptComponents:{Script:()=>null}}},x={args:{scriptComponents:{Script:t=>e(c,{border:!0,rounded:!0,padding:1,children:e("pre",{children:i("code",{children:["#",t.id]})})})}},render:t=>e(T,{children:e(G,{gap:1,children:e(y,{...t,children:i(N,{children:[e("h1",{children:"Your app code here"}),e("p",{children:"This blocks above demonstrate that a script tag was registered, you will not see anything in your actual page."}),e("p",{children:"Try turning providers on and off with the controls below 👇"})]})})})})},p=({name:t,data:n={},children:a,variant:r="secondary",...o})=>{const{trackEvent:d}=Oe();return e(ye,{...o,variant:r,onClick:()=>{d(t,n)},children:a??t})},w={args:{onEvent:(t,n)=>{alert(`trackEvent(${t}, ${JSON.stringify(n)})`)}},render:t=>e(y,{...t,children:e(T,{children:i(N,{children:[e("h1",{children:"Custom event handlers"}),e("p",{children:"Some nice text about starting a form application."}),e("p",{children:i(ve,{children:[e(p,{name:"application-progress",data:{status:"started"},children:"Begin"}),e(p,{name:"application-progress",variant:"secondary",data:{status:"stopped"},children:"Cancel"})]})})]})})})},S=t=>i(G,{gap:1,css:{border:"2px dashed #fec0ff",padding:"2px"},children:[e(c,{css:{background:"#fec0ff",padding:"2px 2px"},children:e("code",{children:JSON.stringify(t.data)})}),e(ke,{...t})]}),k=({label:t,children:n})=>i(G,{gap:1,css:{border:"2px dashed #fec0ff",padding:"2px"},children:[e(c,{css:{background:"#fec0ff",padding:"2px 2px"},children:e("code",{children:t})}),e(de,{onEvent:(a,r)=>{alert(`${t}:trackEvent(${a}, ${JSON.stringify(r)})`)},children:n})]}),O={args:{onEvent:(t,n)=>{alert(`trackEvent(${t}, ${JSON.stringify(n)})`)}},render:t=>e(y,{...t,children:e(T,{children:i(S,{data:{page:"registration-info"},children:[i(N,{children:[e("h1",{children:"Nested data context"}),e("p",{children:"Our page can build up data that will be submitted with an event"}),e("p",{children:e(p,{name:"info-page-click",children:"Page context"})}),e("p",{children:"Some more interesting info about the Export Service."})]}),i(S,{data:{section:"cards"},children:[e(p,{name:"info-page-click",children:"Section context"}),i(ie,{children:[e(P,{columnSpan:6,children:e(S,{data:{card:"card-1"},children:i(F,{children:[e(D,{children:e($,{type:"h4",children:"Feature card title"})}),e(H,{children:e(B,{as:"p",children:"Additional conent relating to the card"})}),e(A,{children:e(p,{name:"info-page-click",children:"Find out more"})})]})})}),e(P,{columnSpan:6,children:e(S,{data:{card:"card-2"},children:i(F,{children:[e(D,{children:e($,{type:"h4",children:"Feature card title"})}),e(H,{children:e(B,{as:"p",children:"Additional conent relating to the card"})}),e(A,{children:e(p,{name:"info-page-click",data:{userName:"Sam"},children:"Start application with user-data"})})]})})})]})]})]})})})},j={args:{onEvent:(t,n)=>{alert(`trackEvent(${t}, ${JSON.stringify(n)})`)}},render:t=>e(y,{...t,children:e(T,{children:i(k,{label:"page-listener",children:[i(N,{children:[e("h1",{children:"Nested event listeners"}),i("p",{children:["The ",e("code",{children:"AnalyticsListener"})," component allows you to attach additional event listeners to sections of your page. The events will bubble and also trigger the outer listeners."]}),e("p",{children:"Use this if you want to report something specific for parts of your application"}),e("p",{children:e(p,{name:"info-page-click",children:"Page click"})}),e("p",{children:"Some more interesting info about the Export Service."})]}),i(k,{label:"card-listener",children:[e(p,{name:"info-section-click",children:"Section click"}),i(ie,{children:[e(P,{columnSpan:6,children:e(k,{label:"card-1",children:i(F,{children:[e(D,{children:e($,{type:"h4",children:"Feature card title"})}),e(H,{children:e(B,{as:"p",children:"Additional content relating to the card"})}),e(A,{children:e(p,{name:"info-card1-click",children:"Find out more"})})]})})}),e(P,{columnSpan:6,children:e(k,{label:"card-2",children:i(F,{children:[e(D,{children:e($,{type:"h4",children:"Feature card title"})}),e(H,{children:e(B,{as:"p",children:"Additional content relating to the card"})}),e(A,{children:e(p,{name:"info-card2-click",data:{userName:"Sam"},children:"Start application with user-data"})})]})})})]})]})]})})})};var U,Y,X;x.parameters={...x.parameters,docs:{...(U=x.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    scriptComponents: {
      Script: props => <Box border rounded padding={1}>
                    <pre>
                        <code>#{props.id}</code>
                    </pre>
                </Box>
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
}`,...(X=(Y=x.parameters)==null?void 0:Y.docs)==null?void 0:X.source}}};var _,Q,Z;w.parameters={...w.parameters,docs:{...(_=w.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(Z=(Q=w.parameters)==null?void 0:Q.docs)==null?void 0:Z.source}}};var ee,ne,te;O.parameters={...O.parameters,docs:{...(ee=O.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(te=(ne=O.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};var re,ae,oe;j.parameters={...j.parameters,docs:{...(re=j.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(oe=(ae=j.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};const Re=["Default","CustomEventHandler","NestedDataContext","NestedEventListeners"];export{w as CustomEventHandler,x as Default,O as NestedDataContext,j as NestedEventListeners,Re as __namedExportsOrder,Ge as default};
