import{j as e,c as o,B as c,F as se,t as E,p as z,a as re}from"./Box-37a490cb.esm-dmeiMQGM.js";import{S as H,P as F,a as le,c as pe}from"./ag.ds-next-react-button.esm-Dev5v0Ko.js";import{P as N,H as k}from"./ag.ds-next-react-heading.esm-CV_tYHIv.js";import{a as ae,C as P}from"./ag.ds-next-react-columns.esm-BbjpNZZJ.js";import{r as d}from"./index-BAneEnFJ.js";import{T as O}from"./Icon-29f3c11e.esm-CyHhoPeY.js";import{r as ue}from"./index-exioagFi.js";import"./jsx-runtime-D_zvdyIk.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-pL_YbQPu.js";function J(n,t){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable})),a.push.apply(a,r)}return a}function l(n){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?J(Object(a),!0).forEach(function(r){re(n,r,a[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):J(Object(a)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(a,r))})}return n}var L=d.createContext(void 0),B=function(t){var a=t.as,r=t.background,i=r===void 0?"body":r,s=t.children,u=t.className,V=t.clickable,f=t.footer,h=t.footerOutside,g=t.header,I=t.shadow,v=oe({background:i,clickable:V,root:!0,shadow:I}),G=!!f;return e(L.Provider,{value:{background:i,clickable:V,hasFooter:G,footerOutside:h,shadow:I},children:f||g?o(c,l(l({as:a,className:u,"data-card":"root-with-parts",display:"flex",flexDirection:"column",flexGrow:1},h?{}:v),{},{children:[g&&h?o(c,l(l({"data-card":"header-footer-wrapper",display:"flex",flexDirection:"column",flexGrow:1},v),{},{children:[e(c,{"data-card":"header",display:"flex",flexDirection:"column",children:g}),e(c,{"data-card":"children",display:"flex",flexDirection:"column",flexGrow:1,children:s})]})):o(se,{children:[g&&e(c,{"data-card":"header",display:"flex",flexDirection:"column",children:g}),e(c,l(l({"data-card":"children",display:"flex",flexDirection:"column",flexGrow:1},h?v:{}),{},{children:s}))]}),f&&e(c,{"data-card":"footer",children:f})]})):e(c,l(l({as:a,className:u,"data-card":"root",display:"flex",flexDirection:"column",flexGrow:1},h&&!G?{css:{position:"relative","> img:first-of-type":{borderTopLeftRadius:E.borderRadius,borderTopRightRadius:E.borderRadius,'+ [data-card="inner"]':{borderTopLeftRadius:0,borderTopRightRadius:0}}}}:v),{},{children:s}))})},oe=function(t){var a=t.background,r=t.clickable,i=t.root,s=t.shadow;return{background:a,border:!0,borderColor:"muted",rounded:!0,css:l(l({overflow:"hidden",position:i?"relative":void 0},r&&{":has(:focus-visible)":z.outline,"@supports not selector(:has(*))":{":focus-within":z.outline}}),s&&{boxShadow:E.shadow.sm,"&:hover":r?{boxShadow:E.shadow.md}:void 0})}},he={name:"bjn8wh",styles:"position:relative"},j=function(t){var a=t.background,r=t.children,i=d.useContext(L);return i!=null&&i.footerOutside?e(c,{background:a,css:he,paddingTop:1,paddingX:.25,children:r}):e(c,{background:a,borderColor:"muted",borderTop:!0,padding:1.5,children:r})},D=function(t){var a=t.background,r=t.children;return e(c,{background:a,borderBottom:!0,borderColor:"muted",padding:1.5,children:r})};function R(n,t){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable})),a.push.apply(a,r)}return a}function M(n){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?R(Object(a),!0).forEach(function(r){re(n,r,a[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):R(Object(a)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(a,r))})}return n}var A=function(t){var a=t.children,r=d.useContext(L);return e(c,M(M({},r!=null&&r.footerOutside&&!(r!=null&&r.hasFooter)?oe({background:r==null?void 0:r.background,clickable:r==null?void 0:r.clickable,shadow:r==null?void 0:r.shadow}):void 0),{},{"data-card":"inner",flexGrow:1,padding:1.5,children:a}))};const T=d.createContext(()=>null),$=d.createContext({}),ie=({children:n,onEvent:t})=>{const a=d.useContext(T);return e(T.Provider,{value:(r,i)=>{t(r,i),a==null||a(r,i)},children:n})},ge=({data:n,children:t})=>{const r={...d.useContext($)||{},...n};return e($.Provider,{value:r,children:t})},me=()=>{const n=d.useContext($),t=d.useContext(T);return{trackEvent:(r,i)=>{t&&t(r,{...n,...i})}}},ce=d.createContext({Script:()=>null}),fe=({children:n,Script:t=()=>null})=>e(ce.Provider,{value:{Script:t},children:n}),de=()=>({Script:d.useContext(ce).Script}),ve=({measurementID:n})=>{const{Script:t}=de();return o(d.Fragment,{children:[e(t,{id:"ag-common-analytics:google-src",src:`https://www.googletagmanager.com/gtag/js?id=${n}`}),e(t,{id:"ag-common-analytics:google-init",children:`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${n}');
        `})]})},be=({zone:n,zoneID:t})=>{const{Script:a}=de(),[r,i]=d.useState(!1);if(d.useEffect(()=>i(!0),[]),!r)return null;const s=e("div",{id:t,"aria-hidden":"true"});return o(d.Fragment,{children:[e(a,{id:"ag-common-analytics:qualtrics",children:`(function(){var g=function(g){
      this.go=function(){var a=document.createElement("script");a.type="text/javascript";a.src=g;document.body&&document.body.appendChild(a)};
      this.start=function(){var t=this;"complete"!==document.readyState?window.addEventListener?window.addEventListener("load",function(){t.go()},!1):window.attachEvent&&window.attachEvent("onload",function(){t.go()}):t.go()};};
      try{(new g("https://${n}.siteintercept.qualtrics.com/SIE/?Q_ZID=${t}")).start()}catch(i){}})();`}),ue.createPortal(s,document.body)]})},Ce={googleAnalyticsMeasurementID:"G-1R962GVJMB"},ye=()=>window==null?void 0:window.gtag,xe=n=>({onEvent:(...t)=>n("event",...t)}),we=()=>{const n=ye();return n?xe(n):void 0},Se=()=>{},m=({children:n,onEvent:t,googleAnalytics:a,qualtrics:r,scriptComponents:i})=>o(fe,{...i,children:[a===!1?null:e(ve,{measurementID:Ce.googleAnalyticsMeasurementID}),r?e(be,{zone:r.zone,zoneID:r.zoneID}):null,e(ie,{onEvent:(...s)=>{const u=we();return(t??(u==null?void 0:u.onEvent)??Se)(...s)},children:n})]}),Te={title:"Analytics",component:m,parameters:{layout:"fullscreen"},args:{scriptComponents:{Script:()=>null}}},b={args:{scriptComponents:{Script:n=>e(c,{border:!0,rounded:!0,padding:1,children:e("pre",{children:o("code",{children:["#",n.id]})})})},qualtrics:{zone:"zone",zoneID:"ZN_zoneID"}},render:n=>e(F,{children:e(H,{gap:1,children:e(m,{...n,children:o(N,{children:[e("h1",{children:"Your app code here"}),e("p",{children:"This blocks above demonstrate that a script tag was registered, you will not see anything in your actual page."}),e("p",{children:"Try turning providers on and off with the controls below 👇"})]})})})})},p=({name:n,data:t={},children:a,variant:r="secondary",...i})=>{const{trackEvent:s}=me();return e(pe,{...i,variant:r,onClick:()=>{s(n,t)},children:a??n})},C={args:{onEvent:(n,t)=>{alert(`trackEvent(${n}, ${JSON.stringify(t)})`)}},render:n=>e(m,{...n,children:e(F,{children:o(N,{children:[e("h1",{children:"Custom event handlers"}),e("p",{children:"Some nice text about starting a form application."}),e("p",{children:o(le,{children:[e(p,{name:"application-progress",data:{status:"started"},children:"Begin"}),e(p,{name:"application-progress",variant:"secondary",data:{status:"stopped"},children:"Cancel"})]})})]})})})},y=n=>o(H,{gap:1,css:{border:"2px dashed #fec0ff",padding:"2px"},children:[e(c,{css:{background:"#fec0ff",padding:"2px 2px"},children:e("code",{children:JSON.stringify(n.data)})}),e(ge,{...n})]}),x=({label:n,children:t})=>o(H,{gap:1,css:{border:"2px dashed #fec0ff",padding:"2px"},children:[e(c,{css:{background:"#fec0ff",padding:"2px 2px"},children:e("code",{children:n})}),e(ie,{onEvent:(a,r)=>{alert(`${n}:trackEvent(${a}, ${JSON.stringify(r)})`)},children:t})]}),w={args:{onEvent:(n,t)=>{alert(`trackEvent(${n}, ${JSON.stringify(t)})`)}},render:n=>e(m,{...n,children:e(F,{children:o(y,{data:{page:"registration-info"},children:[o(N,{children:[e("h1",{children:"Nested data context"}),e("p",{children:"Our page can build up data that will be submitted with an event"}),e("p",{children:e(p,{name:"info-page-click",children:"Page context"})}),e("p",{children:"Some more interesting info about the Export Service."})]}),o(y,{data:{section:"cards"},children:[e(p,{name:"info-page-click",children:"Section context"}),o(ae,{children:[e(P,{columnSpan:6,children:e(y,{data:{card:"card-1"},children:o(B,{children:[e(D,{children:e(k,{type:"h4",children:"Feature card title"})}),e(A,{children:e(O,{as:"p",children:"Additional conent relating to the card"})}),e(j,{children:e(p,{name:"info-page-click",children:"Find out more"})})]})})}),e(P,{columnSpan:6,children:e(y,{data:{card:"card-2"},children:o(B,{children:[e(D,{children:e(k,{type:"h4",children:"Feature card title"})}),e(A,{children:e(O,{as:"p",children:"Additional conent relating to the card"})}),e(j,{children:e(p,{name:"info-page-click",data:{userName:"Sam"},children:"Start application with user-data"})})]})})})]})]})]})})})},S={args:{onEvent:(n,t)=>{alert(`trackEvent(${n}, ${JSON.stringify(t)})`)}},render:n=>e(m,{...n,children:e(F,{children:o(x,{label:"page-listener",children:[o(N,{children:[e("h1",{children:"Nested event listeners"}),o("p",{children:["The ",e("code",{children:"AnalyticsListener"})," component allows you to attach additional event listeners to sections of your page. The events will bubble and also trigger the outer listeners."]}),e("p",{children:"Use this if you want to report something specific for parts of your application"}),e("p",{children:e(p,{name:"info-page-click",children:"Page click"})}),e("p",{children:"Some more interesting info about the Export Service."})]}),o(x,{label:"card-listener",children:[e(p,{name:"info-section-click",children:"Section click"}),o(ae,{children:[e(P,{columnSpan:6,children:e(x,{label:"card-1",children:o(B,{children:[e(D,{children:e(k,{type:"h4",children:"Feature card title"})}),e(A,{children:e(O,{as:"p",children:"Additional content relating to the card"})}),e(j,{children:e(p,{name:"info-card1-click",children:"Find out more"})})]})})}),e(P,{columnSpan:6,children:e(x,{label:"card-2",children:o(B,{children:[e(D,{children:e(k,{type:"h4",children:"Feature card title"})}),e(A,{children:e(O,{as:"p",children:"Additional content relating to the card"})}),e(j,{children:e(p,{name:"info-card2-click",data:{userName:"Sam"},children:"Start application with user-data"})})]})})})]})]})]})})})};var Z,q,K;b.parameters={...b.parameters,docs:{...(Z=b.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(K=(q=b.parameters)==null?void 0:q.docs)==null?void 0:K.source}}};var Q,U,Y;C.parameters={...C.parameters,docs:{...(Q=C.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(Y=(U=C.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};var X,W,_;w.parameters={...w.parameters,docs:{...(X=w.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(_=(W=w.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var ee,ne,te;S.parameters={...S.parameters,docs:{...(ee=S.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(te=(ne=S.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};const $e=["Default","CustomEventHandler","NestedDataContext","NestedEventListeners"];export{C as CustomEventHandler,b as Default,w as NestedDataContext,S as NestedEventListeners,$e as __namedExportsOrder,Te as default};
