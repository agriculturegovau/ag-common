import{j as e,i,B as c,F as ge,t as P,p as R,_ as I,f as me,e as fe}from"./Box-c58c9f90.esm-D-DOdbx1.js";import{S as z,P as T,a as ve,c as be}from"./ag.ds-next-react-button.esm-Cf0RSV2q.js";import{P as N}from"./ag.ds-next-react-prose.esm-L5nj_PGE.js";import{a as oe,C as j}from"./ag.ds-next-react-columns.esm-Ct1gQn6t.js";import{r as d}from"./index-BAneEnFJ.js";import{T as F}from"./Icon-8342de17.esm-DbGijj1V.js";import{r as ye}from"./index-exioagFi.js";import"./jsx-runtime-D_zvdyIk.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-pL_YbQPu.js";function J(n,t){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable})),a.push.apply(a,r)}return a}function l(n){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?J(Object(a),!0).forEach(function(r){I(n,r,a[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):J(Object(a)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(a,r))})}return n}var G=d.createContext(void 0),B=function(t){var a=t.as,r=t.background,o=r===void 0?"body":r,s=t.children,u=t.className,C=t.clickable,h=t.footer,g=t.footerOutside,m=t.header,v=t.shadow,f=ie({background:o,clickable:C,root:!0,shadow:v}),b=!!h;return e(G.Provider,{value:{background:o,clickable:C,hasFooter:b,footerOutside:g,shadow:v},children:h||m?i(c,l(l({as:a,className:u,"data-card":"root-with-parts",display:"flex",flexDirection:"column",flexGrow:1},g?{}:f),{},{children:[m&&g?i(c,l(l({"data-card":"header-footer-wrapper",display:"flex",flexDirection:"column",flexGrow:1},f),{},{children:[e(c,{"data-card":"header",display:"flex",flexDirection:"column",children:m}),e(c,{"data-card":"children",display:"flex",flexDirection:"column",flexGrow:1,children:s})]})):i(ge,{children:[m&&e(c,{"data-card":"header",display:"flex",flexDirection:"column",children:m}),e(c,l(l({"data-card":"children",display:"flex",flexDirection:"column",flexGrow:1},g?f:{}),{},{children:s}))]}),h&&e(c,{"data-card":"footer",children:h})]})):e(c,l(l({as:a,className:u,"data-card":"root",display:"flex",flexDirection:"column",flexGrow:1},g&&!b?{css:{position:"relative","> img:first-of-type":{borderTopLeftRadius:P.borderRadius,borderTopRightRadius:P.borderRadius,'+ [data-card="inner"]':{borderTopLeftRadius:0,borderTopRightRadius:0}}}}:f),{},{children:s}))})},ie=function(t){var a=t.background,r=t.clickable,o=t.root,s=t.shadow;return{background:a,border:!0,borderColor:"muted",rounded:!0,css:l(l({overflow:"hidden",position:o?"relative":void 0},r&&{":has(:focus-visible)":R.outline,"@supports not selector(:has(*))":{":focus-within":R.outline}}),s&&{boxShadow:P.shadow.sm,"&:hover":r?{boxShadow:P.shadow.md}:void 0})}},Ce={name:"bjn8wh",styles:"position:relative"},D=function(t){var a=t.background,r=t.children,o=d.useContext(G);return o!=null&&o.footerOutside?e(c,{background:a,css:Ce,paddingTop:1,paddingX:.25,children:r}):e(c,{background:a,borderColor:"muted",borderTop:!0,padding:1.5,children:r})},A=function(t){var a=t.background,r=t.children;return e(c,{background:a,borderBottom:!0,borderColor:"muted",padding:1.5,children:r})};function W(n,t){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable})),a.push.apply(a,r)}return a}function M(n){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?W(Object(a),!0).forEach(function(r){I(n,r,a[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):W(Object(a)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(a,r))})}return n}var $=function(t){var a=t.children,r=d.useContext(G);return e(c,M(M({},r!=null&&r.footerOutside&&!(r!=null&&r.hasFooter)?ie({background:r==null?void 0:r.background,clickable:r==null?void 0:r.clickable,shadow:r==null?void 0:r.shadow}):void 0),{},{"data-card":"inner",flexGrow:1,padding:1.5,children:a}))},xe=["as","type","color","fontSize","fontFamily","fontWeight","lineHeight"];function K(n,t){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable})),a.push.apply(a,r)}return a}function we(n){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?K(Object(a),!0).forEach(function(r){I(n,r,a[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):K(Object(a)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(a,r))})}return n}var Se={h1:"xxl",h2:"xl",h3:"lg",h4:"md",h5:"sm",h6:"xs"},H=me(function(t,a){var r=t.as,o=t.type,s=o===void 0?"h2":o,u=t.color,C=u===void 0?"text":u,h=t.fontSize,g=t.fontFamily,m=g===void 0?"body":g,v=t.fontWeight,f=v===void 0?"bold":v,b=t.lineHeight,le=b===void 0?"heading":b,pe=fe(t,xe),ue=r??s,he=h??Se[s];return e(c,we({as:ue,color:C,fontFamily:m,fontSize:he,fontWeight:f,lineHeight:le,ref:a},pe))});const L=d.createContext(()=>null),V=d.createContext({}),ce=({children:n,onEvent:t})=>{const a=d.useContext(L);return e(L.Provider,{value:(r,o)=>{t(r,o),a==null||a(r,o)},children:n})},Ee=({data:n,children:t})=>{const r={...d.useContext(V)||{},...n};return e(V.Provider,{value:r,children:t})},Oe=()=>{const n=d.useContext(V),t=d.useContext(L);return{trackEvent:(r,o)=>{t&&t(r,{...n,...o})}}},de=d.createContext({Script:()=>null}),ke=({children:n,Script:t=()=>null})=>e(de.Provider,{value:{Script:t},children:n}),se=()=>({Script:d.useContext(de).Script}),Pe=({measurementID:n})=>{const{Script:t}=se();return i(d.Fragment,{children:[e(t,{id:"ag-common-analytics:google-src",src:`https://www.googletagmanager.com/gtag/js?id=${n}`}),e(t,{id:"ag-common-analytics:google-init",children:`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${n}');
        `})]})},je=({zone:n,zoneID:t})=>{const{Script:a}=se(),[r,o]=d.useState(!1);if(d.useEffect(()=>o(!0),[]),!r)return null;const s=e("div",{id:t,"aria-hidden":"true"});return i(d.Fragment,{children:[e(a,{id:"ag-common-analytics:qualtrics",children:`(function(){var g=function(g){
      this.go=function(){var a=document.createElement("script");a.type="text/javascript";a.src=g;document.body&&document.body.appendChild(a)};
      this.start=function(){var t=this;"complete"!==document.readyState?window.addEventListener?window.addEventListener("load",function(){t.go()},!1):window.attachEvent&&window.attachEvent("onload",function(){t.go()}):t.go()};};
      try{(new g("https://${n}.siteintercept.qualtrics.com/SIE/?Q_ZID=${t}")).start()}catch(i){}})();`}),ye.createPortal(s,document.body)]})},Fe={googleAnalyticsMeasurementID:"G-1R962GVJMB"},Be=()=>window==null?void 0:window.gtag,De=n=>({onEvent:(...t)=>n("event",...t)}),Ae=()=>{const n=Be();return n?De(n):void 0},$e=()=>{},y=({children:n,onEvent:t,googleAnalytics:a,qualtrics:r,scriptComponents:o})=>i(ke,{...o,children:[a===!1?null:e(Pe,{measurementID:Fe.googleAnalyticsMeasurementID}),r?e(je,{zone:r.zone,zoneID:r.zoneID}):null,e(ce,{onEvent:(...s)=>{const u=Ae();return(t??(u==null?void 0:u.onEvent)??$e)(...s)},children:n})]}),We={title:"Analytics",component:y,parameters:{layout:"fullscreen"},args:{scriptComponents:{Script:()=>null}}},x={args:{scriptComponents:{Script:n=>e(c,{border:!0,rounded:!0,padding:1,children:e("pre",{children:i("code",{children:["#",n.id]})})})},qualtrics:{zone:"zone",zoneID:"ZN_zoneID"}},render:n=>e(T,{children:e(z,{gap:1,children:e(y,{...n,children:i(N,{children:[e("h1",{children:"Your app code here"}),e("p",{children:"This blocks above demonstrate that a script tag was registered, you will not see anything in your actual page."}),e("p",{children:"Try turning providers on and off with the controls below 👇"})]})})})})},p=({name:n,data:t={},children:a,variant:r="secondary",...o})=>{const{trackEvent:s}=Oe();return e(be,{...o,variant:r,onClick:()=>{s(n,t)},children:a??n})},w={args:{onEvent:(n,t)=>{alert(`trackEvent(${n}, ${JSON.stringify(t)})`)}},render:n=>e(y,{...n,children:e(T,{children:i(N,{children:[e("h1",{children:"Custom event handlers"}),e("p",{children:"Some nice text about starting a form application."}),e("p",{children:i(ve,{children:[e(p,{name:"application-progress",data:{status:"started"},children:"Begin"}),e(p,{name:"application-progress",variant:"secondary",data:{status:"stopped"},children:"Cancel"})]})})]})})})},S=n=>i(z,{gap:1,css:{border:"2px dashed #fec0ff",padding:"2px"},children:[e(c,{css:{background:"#fec0ff",padding:"2px 2px"},children:e("code",{children:JSON.stringify(n.data)})}),e(Ee,{...n})]}),E=({label:n,children:t})=>i(z,{gap:1,css:{border:"2px dashed #fec0ff",padding:"2px"},children:[e(c,{css:{background:"#fec0ff",padding:"2px 2px"},children:e("code",{children:n})}),e(ce,{onEvent:(a,r)=>{alert(`${n}:trackEvent(${a}, ${JSON.stringify(r)})`)},children:t})]}),O={args:{onEvent:(n,t)=>{alert(`trackEvent(${n}, ${JSON.stringify(t)})`)}},render:n=>e(y,{...n,children:e(T,{children:i(S,{data:{page:"registration-info"},children:[i(N,{children:[e("h1",{children:"Nested data context"}),e("p",{children:"Our page can build up data that will be submitted with an event"}),e("p",{children:e(p,{name:"info-page-click",children:"Page context"})}),e("p",{children:"Some more interesting info about the Export Service."})]}),i(S,{data:{section:"cards"},children:[e(p,{name:"info-page-click",children:"Section context"}),i(oe,{children:[e(j,{columnSpan:6,children:e(S,{data:{card:"card-1"},children:i(B,{children:[e(A,{children:e(H,{type:"h4",children:"Feature card title"})}),e($,{children:e(F,{as:"p",children:"Additional conent relating to the card"})}),e(D,{children:e(p,{name:"info-page-click",children:"Find out more"})})]})})}),e(j,{columnSpan:6,children:e(S,{data:{card:"card-2"},children:i(B,{children:[e(A,{children:e(H,{type:"h4",children:"Feature card title"})}),e($,{children:e(F,{as:"p",children:"Additional conent relating to the card"})}),e(D,{children:e(p,{name:"info-page-click",data:{userName:"Sam"},children:"Start application with user-data"})})]})})})]})]})]})})})},k={args:{onEvent:(n,t)=>{alert(`trackEvent(${n}, ${JSON.stringify(t)})`)}},render:n=>e(y,{...n,children:e(T,{children:i(E,{label:"page-listener",children:[i(N,{children:[e("h1",{children:"Nested event listeners"}),i("p",{children:["The ",e("code",{children:"AnalyticsListener"})," component allows you to attach additional event listeners to sections of your page. The events will bubble and also trigger the outer listeners."]}),e("p",{children:"Use this if you want to report something specific for parts of your application"}),e("p",{children:e(p,{name:"info-page-click",children:"Page click"})}),e("p",{children:"Some more interesting info about the Export Service."})]}),i(E,{label:"card-listener",children:[e(p,{name:"info-section-click",children:"Section click"}),i(oe,{children:[e(j,{columnSpan:6,children:e(E,{label:"card-1",children:i(B,{children:[e(A,{children:e(H,{type:"h4",children:"Feature card title"})}),e($,{children:e(F,{as:"p",children:"Additional content relating to the card"})}),e(D,{children:e(p,{name:"info-card1-click",children:"Find out more"})})]})})}),e(j,{columnSpan:6,children:e(E,{label:"card-2",children:i(B,{children:[e(A,{children:e(H,{type:"h4",children:"Feature card title"})}),e($,{children:e(F,{as:"p",children:"Additional content relating to the card"})}),e(D,{children:e(p,{name:"info-card2-click",data:{userName:"Sam"},children:"Start application with user-data"})})]})})})]})]})]})})})};var Z,q,Q;x.parameters={...x.parameters,docs:{...(Z=x.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(Q=(q=x.parameters)==null?void 0:q.docs)==null?void 0:Q.source}}};var U,Y,X;w.parameters={...w.parameters,docs:{...(U=w.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(X=(Y=w.parameters)==null?void 0:Y.docs)==null?void 0:X.source}}};var _,ee,te;O.parameters={...O.parameters,docs:{...(_=O.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(te=(ee=O.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ne,re,ae;k.parameters={...k.parameters,docs:{...(ne=k.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(ae=(re=k.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};const Me=["Default","CustomEventHandler","NestedDataContext","NestedEventListeners"];export{w as CustomEventHandler,x as Default,O as NestedDataContext,k as NestedEventListeners,Me as __namedExportsOrder,We as default};
