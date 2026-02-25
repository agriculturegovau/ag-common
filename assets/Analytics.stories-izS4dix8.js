import{j as e,i,B as c,F as he,t as P,p as J,_ as G,f as ge,e as me}from"./Box-c58c9f90.esm-D-DOdbx1.js";import{S as I,P as T,a as fe,c as ve}from"./ag.ds-next-react-button.esm-Cf0RSV2q.js";import{P as N}from"./ag.ds-next-react-prose.esm-L5nj_PGE.js";import{a as oe,C as j}from"./ag.ds-next-react-columns.esm-Ct1gQn6t.js";import{r as s}from"./index-BAneEnFJ.js";import{T as B}from"./Icon-8342de17.esm-DbGijj1V.js";import"./jsx-runtime-D_zvdyIk.js";import"./_commonjsHelpers-CqkleIqs.js";function W(t,n){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),a.push.apply(a,r)}return a}function l(t){for(var n=1;n<arguments.length;n++){var a=arguments[n]!=null?arguments[n]:{};n%2?W(Object(a),!0).forEach(function(r){G(t,r,a[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):W(Object(a)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(a,r))})}return t}var R=s.createContext(void 0),F=function(n){var a=n.as,r=n.background,o=r===void 0?"body":r,d=n.children,f=n.className,C=n.clickable,u=n.footer,h=n.footerOutside,g=n.header,v=n.shadow,m=ie({background:o,clickable:C,root:!0,shadow:v}),b=!!u;return e(R.Provider,{value:{background:o,clickable:C,hasFooter:b,footerOutside:h,shadow:v},children:u||g?i(c,l(l({as:a,className:f,"data-card":"root-with-parts",display:"flex",flexDirection:"column",flexGrow:1},h?{}:m),{},{children:[g&&h?i(c,l(l({"data-card":"header-footer-wrapper",display:"flex",flexDirection:"column",flexGrow:1},m),{},{children:[e(c,{"data-card":"header",display:"flex",flexDirection:"column",children:g}),e(c,{"data-card":"children",display:"flex",flexDirection:"column",flexGrow:1,children:d})]})):i(he,{children:[g&&e(c,{"data-card":"header",display:"flex",flexDirection:"column",children:g}),e(c,l(l({"data-card":"children",display:"flex",flexDirection:"column",flexGrow:1},h?m:{}),{},{children:d}))]}),u&&e(c,{"data-card":"footer",children:u})]})):e(c,l(l({as:a,className:f,"data-card":"root",display:"flex",flexDirection:"column",flexGrow:1},h&&!b?{css:{position:"relative","> img:first-of-type":{borderTopLeftRadius:P.borderRadius,borderTopRightRadius:P.borderRadius,'+ [data-card="inner"]':{borderTopLeftRadius:0,borderTopRightRadius:0}}}}:m),{},{children:d}))})},ie=function(n){var a=n.background,r=n.clickable,o=n.root,d=n.shadow;return{background:a,border:!0,borderColor:"muted",rounded:!0,css:l(l({overflow:"hidden",position:o?"relative":void 0},r&&{":has(:focus-visible)":J.outline,"@supports not selector(:has(*))":{":focus-within":J.outline}}),d&&{boxShadow:P.shadow.sm,"&:hover":r?{boxShadow:P.shadow.md}:void 0})}},be={name:"bjn8wh",styles:"position:relative"},A=function(n){var a=n.background,r=n.children,o=s.useContext(R);return o!=null&&o.footerOutside?e(c,{background:a,css:be,paddingTop:1,paddingX:.25,children:r}):e(c,{background:a,borderColor:"muted",borderTop:!0,padding:1.5,children:r})},H=function(n){var a=n.background,r=n.children;return e(c,{background:a,borderBottom:!0,borderColor:"muted",padding:1.5,children:r})};function z(t,n){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),a.push.apply(a,r)}return a}function M(t){for(var n=1;n<arguments.length;n++){var a=arguments[n]!=null?arguments[n]:{};n%2?z(Object(a),!0).forEach(function(r){G(t,r,a[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):z(Object(a)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(a,r))})}return t}var $=function(n){var a=n.children,r=s.useContext(R);return e(c,M(M({},r!=null&&r.footerOutside&&!(r!=null&&r.hasFooter)?ie({background:r==null?void 0:r.background,clickable:r==null?void 0:r.clickable,shadow:r==null?void 0:r.shadow}):void 0),{},{"data-card":"inner",flexGrow:1,padding:1.5,children:a}))},ye=["as","type","color","fontSize","fontFamily","fontWeight","lineHeight"];function K(t,n){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),a.push.apply(a,r)}return a}function Ce(t){for(var n=1;n<arguments.length;n++){var a=arguments[n]!=null?arguments[n]:{};n%2?K(Object(a),!0).forEach(function(r){G(t,r,a[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):K(Object(a)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(a,r))})}return t}var xe={h1:"xxl",h2:"xl",h3:"lg",h4:"md",h5:"sm",h6:"xs"},D=ge(function(n,a){var r=n.as,o=n.type,d=o===void 0?"h2":o,f=n.color,C=f===void 0?"text":f,u=n.fontSize,h=n.fontFamily,g=h===void 0?"body":h,v=n.fontWeight,m=v===void 0?"bold":v,b=n.lineHeight,se=b===void 0?"heading":b,le=me(n,ye),pe=r??d,ue=u??xe[d];return e(c,Ce({as:pe,color:C,fontFamily:g,fontSize:ue,fontWeight:m,lineHeight:se,ref:a},le))});const L=s.createContext(()=>null),V=s.createContext({}),ce=({children:t,onEvent:n})=>{const a=s.useContext(L);return e(L.Provider,{value:(r,o)=>{n(r,o),a==null||a(r,o)},children:t})},we=({data:t,children:n})=>{const r={...s.useContext(V)||{},...t};return e(V.Provider,{value:r,children:n})},Se=()=>{const t=s.useContext(V),n=s.useContext(L);return{trackEvent:(r,o)=>{n&&n(r,{...t,...o})}}},de=s.createContext({Script:()=>null}),Oe=({children:t,Script:n=()=>null})=>e(de.Provider,{value:{Script:n},children:t}),ke=()=>({Script:s.useContext(de).Script}),Ee=({measurementID:t})=>{const{Script:n}=ke();return i(s.Fragment,{children:[e(n,{id:"ag-common-analytics:google-src",src:`https://www.googletagmanager.com/gtag/js?id=${t}`}),e(n,{id:"ag-common-analytics:google-init",children:`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${t}');
        `})]})},Pe={googleAnalyticsMeasurementID:"G-1R962GVJMB"},je=()=>window==null?void 0:window.gtag,Be=t=>({onEvent:(...n)=>t("event",...n)}),Fe=()=>{const t=je();return t?Be(t):void 0},Ae=()=>{},y=({children:t,onEvent:n,googleAnalytics:a,scriptComponents:r})=>i(Oe,{...r,children:[a===!1?null:e(Ee,{measurementID:Pe.googleAnalyticsMeasurementID}),e(ce,{onEvent:(...o)=>{const d=Fe();return(n??(d==null?void 0:d.onEvent)??Ae)(...o)},children:t})]}),Ie={title:"Analytics",component:y,parameters:{layout:"fullscreen"},args:{scriptComponents:{Script:()=>null}}},x={args:{scriptComponents:{Script:t=>e(c,{border:!0,rounded:!0,padding:1,children:e("pre",{children:i("code",{children:["#",t.id]})})})}},render:t=>e(T,{children:e(I,{gap:1,children:e(y,{...t,children:i(N,{children:[e("h1",{children:"Your app code here"}),e("p",{children:"This blocks above demonstrate that a script tag was registered, you will not see anything in your actual page."}),e("p",{children:"Try turning providers on and off with the controls below 👇"})]})})})})},p=({name:t,data:n={},children:a,variant:r="secondary",...o})=>{const{trackEvent:d}=Se();return e(ve,{...o,variant:r,onClick:()=>{d(t,n)},children:a??t})},w={args:{onEvent:(t,n)=>{alert(`trackEvent(${t}, ${JSON.stringify(n)})`)}},render:t=>e(y,{...t,children:e(T,{children:i(N,{children:[e("h1",{children:"Custom event handlers"}),e("p",{children:"Some nice text about starting a form application."}),e("p",{children:i(fe,{children:[e(p,{name:"application-progress",data:{status:"started"},children:"Begin"}),e(p,{name:"application-progress",variant:"secondary",data:{status:"stopped"},children:"Cancel"})]})})]})})})},S=t=>i(I,{gap:1,css:{border:"2px dashed #fec0ff",padding:"2px"},children:[e(c,{css:{background:"#fec0ff",padding:"2px 2px"},children:e("code",{children:JSON.stringify(t.data)})}),e(we,{...t})]}),O=({label:t,children:n})=>i(I,{gap:1,css:{border:"2px dashed #fec0ff",padding:"2px"},children:[e(c,{css:{background:"#fec0ff",padding:"2px 2px"},children:e("code",{children:t})}),e(ce,{onEvent:(a,r)=>{alert(`${t}:trackEvent(${a}, ${JSON.stringify(r)})`)},children:n})]}),k={args:{onEvent:(t,n)=>{alert(`trackEvent(${t}, ${JSON.stringify(n)})`)}},render:t=>e(y,{...t,children:e(T,{children:i(S,{data:{page:"registration-info"},children:[i(N,{children:[e("h1",{children:"Nested data context"}),e("p",{children:"Our page can build up data that will be submitted with an event"}),e("p",{children:e(p,{name:"info-page-click",children:"Page context"})}),e("p",{children:"Some more interesting info about the Export Service."})]}),i(S,{data:{section:"cards"},children:[e(p,{name:"info-page-click",children:"Section context"}),i(oe,{children:[e(j,{columnSpan:6,children:e(S,{data:{card:"card-1"},children:i(F,{children:[e(H,{children:e(D,{type:"h4",children:"Feature card title"})}),e($,{children:e(B,{as:"p",children:"Additional conent relating to the card"})}),e(A,{children:e(p,{name:"info-page-click",children:"Find out more"})})]})})}),e(j,{columnSpan:6,children:e(S,{data:{card:"card-2"},children:i(F,{children:[e(H,{children:e(D,{type:"h4",children:"Feature card title"})}),e($,{children:e(B,{as:"p",children:"Additional conent relating to the card"})}),e(A,{children:e(p,{name:"info-page-click",data:{userName:"Sam"},children:"Start application with user-data"})})]})})})]})]})]})})})},E={args:{onEvent:(t,n)=>{alert(`trackEvent(${t}, ${JSON.stringify(n)})`)}},render:t=>e(y,{...t,children:e(T,{children:i(O,{label:"page-listener",children:[i(N,{children:[e("h1",{children:"Nested event listeners"}),i("p",{children:["The ",e("code",{children:"AnalyticsListener"})," component allows you to attach additional event listeners to sections of your page. The events will bubble and also trigger the outer listeners."]}),e("p",{children:"Use this if you want to report something specific for parts of your application"}),e("p",{children:e(p,{name:"info-page-click",children:"Page click"})}),e("p",{children:"Some more interesting info about the Export Service."})]}),i(O,{label:"card-listener",children:[e(p,{name:"info-section-click",children:"Section click"}),i(oe,{children:[e(j,{columnSpan:6,children:e(O,{label:"card-1",children:i(F,{children:[e(H,{children:e(D,{type:"h4",children:"Feature card title"})}),e($,{children:e(B,{as:"p",children:"Additional content relating to the card"})}),e(A,{children:e(p,{name:"info-card1-click",children:"Find out more"})})]})})}),e(j,{columnSpan:6,children:e(O,{label:"card-2",children:i(F,{children:[e(H,{children:e(D,{type:"h4",children:"Feature card title"})}),e($,{children:e(B,{as:"p",children:"Additional content relating to the card"})}),e(A,{children:e(p,{name:"info-card2-click",data:{userName:"Sam"},children:"Start application with user-data"})})]})})})]})]})]})})})};var U,Y,X;x.parameters={...x.parameters,docs:{...(U=x.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(X=(Y=x.parameters)==null?void 0:Y.docs)==null?void 0:X.source}}};var q,Q,Z;w.parameters={...w.parameters,docs:{...(q=w.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(Z=(Q=w.parameters)==null?void 0:Q.docs)==null?void 0:Z.source}}};var _,ee,ne;k.parameters={...k.parameters,docs:{...(_=k.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(ne=(ee=k.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var te,re,ae;E.parameters={...E.parameters,docs:{...(te=E.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(ae=(re=E.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};const Re=["Default","CustomEventHandler","NestedDataContext","NestedEventListeners"];export{w as CustomEventHandler,x as Default,k as NestedDataContext,E as NestedEventListeners,Re as __namedExportsOrder,Ie as default};
