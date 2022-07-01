/*! For license information please see main.a1cb351d.iframe.bundle.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"./.storybook/preview.tsx-generated-config-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters})),__webpack_require__.d(preview_namespaceObject,"decorators",(function(){return decorators}));var ClientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),ag_ds_next_core_esm=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/@ag.ds-next/core/dist/ag.ds-next-core.esm.js")),ag_ds_next_ag_branding_esm=__webpack_require__("./node_modules/@ag.ds-next/ag-branding/dist/ag.ds-next-ag-branding.esm.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var viewportMap={xs:"mobile",sm:"mobile",md:"tablet",lg:"laptop",xl:"desktop"};var parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}},viewport:{viewports:function makeViewports(breakpoints){return Object.fromEntries(Object.entries(breakpoints).map((function(_ref){var _ref2=_slicedToArray(_ref,2),key=_ref2[0],size=_ref2[1];return[key,{name:"".concat(key," ").concat(viewportMap[key]," (").concat(0===size?320:size,") "),type:viewportMap[key],styles:{width:"".concat(0===size?320:size,"px"),height:"100%"}}]})))}(ag_ds_next_core_esm.m.breakpoint)}},decorators=[function withBrandTheme(Story,context){return Object(emotion_react_browser_esm.c)(ag_ds_next_core_esm.a,{theme:ag_ds_next_ag_branding_esm.b},Object(emotion_react_browser_esm.c)(Story,null))}];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":return Object(ClientApi.d)(value);case"argTypes":return Object(ClientApi.b)(value);case"decorators":return value.forEach((function(decorator){return Object(ClientApi.f)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(ClientApi.g)(loader,!1)}));case"parameters":return Object(ClientApi.h)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.c)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.e)(enhancer)}));case"render":return Object(ClientApi.i)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(ClientApi.h)(v,!1);case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./generated-stories-entry.js":function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./packages sync recursive ^\\.[\\\\/](?:(?!\\.)(?=.)[^/]*?\\/src(?:\\/(?!\\.)(?:(?:(?!(?:^|\\/)\\.).)*?)\\/|\\/|$)(?!\\.)(?=.)[^/]*?\\.stories\\.(ts|tsx))$")],module,!1)}).call(this,__webpack_require__("./node_modules/webpack/buildin/module.js")(module))},"./packages sync recursive ^\\.[\\\\/](?:(?!\\.)(?=.)[^/]*?\\/src(?:\\/(?!\\.)(?:(?:(?!(?:^|\\/)\\.).)*?)\\/|\\/|$)(?!\\.)(?=.)[^/]*?\\.stories\\.(ts|tsx))$":function(module,exports,__webpack_require__){var map={"./footer/src/Footer.stories.tsx":"./packages/footer/src/Footer.stories.tsx","./header/src/Header.stories.tsx":"./packages/header/src/Header.stories.tsx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./packages sync recursive ^\\.[\\\\/](?:(?!\\.)(?=.)[^/]*?\\/src(?:\\/(?!\\.)(?:(?:(?!(?:^|\\/)\\.).)*?)\\/|\\/|$)(?!\\.)(?=.)[^/]*?\\.stories\\.(ts|tsx))$"},"./packages/footer/src/Footer.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Basic",(function(){return Basic}));var ag_ds_next_core_esm=__webpack_require__("./node_modules/@ag.ds-next/core/dist/ag.ds-next-core.esm.js"),ag_ds_next_link_list_esm=__webpack_require__("./node_modules/@ag.ds-next/link-list/dist/ag.ds-next-link-list.esm.js"),ag_ds_next_text_esm=__webpack_require__("./node_modules/@ag.ds-next/text/dist/ag.ds-next-text.esm.js"),ag_ds_next_footer_esm=__webpack_require__("./node_modules/@ag.ds-next/footer/dist/ag.ds-next-footer.esm.js"),react=__webpack_require__("./node_modules/react/index.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),footerLinks=[{href:"/about",label:"About"},{href:"/account/help",rel:"external",label:"Help"},{href:"https://www.awe.gov.au/about/commitment/accessibility",rel:"external",label:"Accessibility"},{href:"https://www.awe.gov.au/about/disclaimer",rel:"external",label:"Disclaimer"},{href:"/privacy",label:"Privacy"}],Footer_Footer=function Footer(){var year=Object(react.useMemo)((function(){return(new Date).getFullYear()}),[]);return Object(emotion_react_browser_esm.c)(ag_ds_next_core_esm.b,null,Object(emotion_react_browser_esm.c)(ag_ds_next_footer_esm.a,{variant:"agriculture"},Object(emotion_react_browser_esm.c)("nav",{"aria-label":"footer"},Object(emotion_react_browser_esm.c)(ag_ds_next_link_list_esm.a,{links:footerLinks,horizontal:!0})),Object(emotion_react_browser_esm.c)(ag_ds_next_footer_esm.b,null),Object(emotion_react_browser_esm.c)(ag_ds_next_text_esm.a,{fontSize:"xs",maxWidth:ag_ds_next_core_esm.m.maxWidth.bodyText},"We acknowledge the traditional owners of country throughout Australia and recognise their continuing connection to land, waters and culture. We pay our respects to their Elders past, present and emerging."),Object(emotion_react_browser_esm.c)(ag_ds_next_text_esm.a,{fontSize:"xs",maxWidth:ag_ds_next_core_esm.m.maxWidth.bodyText},"© ",year," Department of Agriculture, Fisheries and Forestry")))},Basic=(__webpack_exports__.default={title:"Footer",component:Footer_Footer},Footer_Footer)},"./packages/header/src/Header.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Authenticated",(function(){return Authenticated})),__webpack_require__.d(__webpack_exports__,"Unauthenticated",(function(){return Unauthenticated})),__webpack_require__.d(__webpack_exports__,"Authentication",(function(){return Header_stories_Authentication}));var react=__webpack_require__("./node_modules/react/index.js"),ag_ds_next_loading_esm=__webpack_require__("./node_modules/@ag.ds-next/loading/dist/ag.ds-next-loading.esm.js"),ag_ds_next_core_esm=__webpack_require__("./node_modules/@ag.ds-next/core/dist/ag.ds-next-core.esm.js"),ag_ds_next_header_esm=__webpack_require__("./node_modules/@ag.ds-next/header/dist/ag.ds-next-header.esm.js"),ag_ds_next_icon_esm=__webpack_require__("./node_modules/@ag.ds-next/icon/dist/ag.ds-next-icon.esm.js"),ag_ds_next_main_nav_esm=__webpack_require__("./node_modules/@ag.ds-next/main-nav/dist/ag.ds-next-main-nav.esm.js"),ag_ds_next_ag_branding_esm=__webpack_require__("./node_modules/@ag.ds-next/ag-branding/dist/ag.ds-next-ag-branding.esm.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),authenticatedLinks=[{href:"/account",label:"Home"},{href:"/establishments",label:"Establishments"},{href:"/intelligence",label:"Data and insights"},{href:"/compliance",label:"Compliance"}],Header_Header=function Header(_ref){var authenticated=_ref.authenticated,activePath=_ref.activePath,handleSignIn=_ref.handleSignIn,handleSignOut=_ref.handleSignOut,_ref$mainNavId=_ref.mainNavId,mainNavId=void 0===_ref$mainNavId?"main-nav":_ref$mainNavId;return Object(emotion_react_browser_esm.c)(ag_ds_next_core_esm.b,null,Object(emotion_react_browser_esm.c)(ag_ds_next_header_esm.a,{href:authenticated?"/account":"/",heading:"Export Service",subline:"Supporting Australian agricultural exports",logo:Object(emotion_react_browser_esm.c)(ag_ds_next_ag_branding_esm.a,null),variant:"dark",badgeLabel:"beta"}),Object(emotion_react_browser_esm.c)(ag_ds_next_main_nav_esm.a,{id:mainNavId,variant:"agriculture",links:authenticated?authenticatedLinks:[],activePath:activePath,rightContent:authenticated?Object(emotion_react_browser_esm.c)(ag_ds_next_main_nav_esm.b,{onClick:handleSignOut,label:"Sign out",icon:ag_ds_next_icon_esm.a}):Object(emotion_react_browser_esm.c)(ag_ds_next_main_nav_esm.b,{onClick:handleSignIn,label:"Sign in",icon:ag_ds_next_icon_esm.a})}))};try{Header_Header.displayName="Header",Header_Header.__docgenInfo={description:"",displayName:"Header",props:{authenticated:{defaultValue:null,description:"",name:"authenticated",required:!1,type:{name:"boolean"}},activePath:{defaultValue:null,description:"",name:"activePath",required:!1,type:{name:"string"}},handleSignIn:{defaultValue:null,description:"",name:"handleSignIn",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}},handleSignOut:{defaultValue:null,description:"",name:"handleSignOut",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}},mainNavId:{defaultValue:{value:"main-nav"},description:"",name:"mainNavId",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/header/src/Header.tsx#Header"]={docgenInfo:Header_Header.__docgenInfo,name:"Header",path:"packages/header/src/Header.tsx#Header"})}catch(__react_docgen_typescript_loader_error){}function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _regeneratorRuntime(){_regeneratorRuntime=function _regeneratorRuntime(){return exports};var exports={},Op=Object.prototype,hasOwn=Op.hasOwnProperty,$Symbol="function"==typeof Symbol?Symbol:{},iteratorSymbol=$Symbol.iterator||"@@iterator",asyncIteratorSymbol=$Symbol.asyncIterator||"@@asyncIterator",toStringTagSymbol=$Symbol.toStringTag||"@@toStringTag";function define(obj,key,value){return Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}),obj[key]}try{define({},"")}catch(err){define=function define(obj,key,value){return obj[key]=value}}function wrap(innerFn,outerFn,self,tryLocsList){var protoGenerator=outerFn&&outerFn.prototype instanceof Generator?outerFn:Generator,generator=Object.create(protoGenerator.prototype),context=new Context(tryLocsList||[]);return generator._invoke=function(innerFn,self,context){var state="suspendedStart";return function(method,arg){if("executing"===state)throw new Error("Generator is already running");if("completed"===state){if("throw"===method)throw arg;return doneResult()}for(context.method=method,context.arg=arg;;){var delegate=context.delegate;if(delegate){var delegateResult=maybeInvokeDelegate(delegate,context);if(delegateResult){if(delegateResult===ContinueSentinel)continue;return delegateResult}}if("next"===context.method)context.sent=context._sent=context.arg;else if("throw"===context.method){if("suspendedStart"===state)throw state="completed",context.arg;context.dispatchException(context.arg)}else"return"===context.method&&context.abrupt("return",context.arg);state="executing";var record=tryCatch(innerFn,self,context);if("normal"===record.type){if(state=context.done?"completed":"suspendedYield",record.arg===ContinueSentinel)continue;return{value:record.arg,done:context.done}}"throw"===record.type&&(state="completed",context.method="throw",context.arg=record.arg)}}}(innerFn,self,context),generator}function tryCatch(fn,obj,arg){try{return{type:"normal",arg:fn.call(obj,arg)}}catch(err){return{type:"throw",arg:err}}}exports.wrap=wrap;var ContinueSentinel={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}var IteratorPrototype={};define(IteratorPrototype,iteratorSymbol,(function(){return this}));var getProto=Object.getPrototypeOf,NativeIteratorPrototype=getProto&&getProto(getProto(values([])));NativeIteratorPrototype&&NativeIteratorPrototype!==Op&&hasOwn.call(NativeIteratorPrototype,iteratorSymbol)&&(IteratorPrototype=NativeIteratorPrototype);var Gp=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(IteratorPrototype);function defineIteratorMethods(prototype){["next","throw","return"].forEach((function(method){define(prototype,method,(function(arg){return this._invoke(method,arg)}))}))}function AsyncIterator(generator,PromiseImpl){function invoke(method,arg,resolve,reject){var record=tryCatch(generator[method],generator,arg);if("throw"!==record.type){var result=record.arg,value=result.value;return value&&"object"==_typeof(value)&&hasOwn.call(value,"__await")?PromiseImpl.resolve(value.__await).then((function(value){invoke("next",value,resolve,reject)}),(function(err){invoke("throw",err,resolve,reject)})):PromiseImpl.resolve(value).then((function(unwrapped){result.value=unwrapped,resolve(result)}),(function(error){return invoke("throw",error,resolve,reject)}))}reject(record.arg)}var previousPromise;this._invoke=function(method,arg){function callInvokeWithMethodAndArg(){return new PromiseImpl((function(resolve,reject){invoke(method,arg,resolve,reject)}))}return previousPromise=previousPromise?previousPromise.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg()}}function maybeInvokeDelegate(delegate,context){var method=delegate.iterator[context.method];if(void 0===method){if(context.delegate=null,"throw"===context.method){if(delegate.iterator.return&&(context.method="return",context.arg=void 0,maybeInvokeDelegate(delegate,context),"throw"===context.method))return ContinueSentinel;context.method="throw",context.arg=new TypeError("The iterator does not provide a 'throw' method")}return ContinueSentinel}var record=tryCatch(method,delegate.iterator,context.arg);if("throw"===record.type)return context.method="throw",context.arg=record.arg,context.delegate=null,ContinueSentinel;var info=record.arg;return info?info.done?(context[delegate.resultName]=info.value,context.next=delegate.nextLoc,"return"!==context.method&&(context.method="next",context.arg=void 0),context.delegate=null,ContinueSentinel):info:(context.method="throw",context.arg=new TypeError("iterator result is not an object"),context.delegate=null,ContinueSentinel)}function pushTryEntry(locs){var entry={tryLoc:locs[0]};1 in locs&&(entry.catchLoc=locs[1]),2 in locs&&(entry.finallyLoc=locs[2],entry.afterLoc=locs[3]),this.tryEntries.push(entry)}function resetTryEntry(entry){var record=entry.completion||{};record.type="normal",delete record.arg,entry.completion=record}function Context(tryLocsList){this.tryEntries=[{tryLoc:"root"}],tryLocsList.forEach(pushTryEntry,this),this.reset(!0)}function values(iterable){if(iterable){var iteratorMethod=iterable[iteratorSymbol];if(iteratorMethod)return iteratorMethod.call(iterable);if("function"==typeof iterable.next)return iterable;if(!isNaN(iterable.length)){var i=-1,next=function next(){for(;++i<iterable.length;)if(hasOwn.call(iterable,i))return next.value=iterable[i],next.done=!1,next;return next.value=void 0,next.done=!0,next};return next.next=next}}return{next:doneResult}}function doneResult(){return{value:void 0,done:!0}}return GeneratorFunction.prototype=GeneratorFunctionPrototype,define(Gp,"constructor",GeneratorFunctionPrototype),define(GeneratorFunctionPrototype,"constructor",GeneratorFunction),GeneratorFunction.displayName=define(GeneratorFunctionPrototype,toStringTagSymbol,"GeneratorFunction"),exports.isGeneratorFunction=function(genFun){var ctor="function"==typeof genFun&&genFun.constructor;return!!ctor&&(ctor===GeneratorFunction||"GeneratorFunction"===(ctor.displayName||ctor.name))},exports.mark=function(genFun){return Object.setPrototypeOf?Object.setPrototypeOf(genFun,GeneratorFunctionPrototype):(genFun.__proto__=GeneratorFunctionPrototype,define(genFun,toStringTagSymbol,"GeneratorFunction")),genFun.prototype=Object.create(Gp),genFun},exports.awrap=function(arg){return{__await:arg}},defineIteratorMethods(AsyncIterator.prototype),define(AsyncIterator.prototype,asyncIteratorSymbol,(function(){return this})),exports.AsyncIterator=AsyncIterator,exports.async=function(innerFn,outerFn,self,tryLocsList,PromiseImpl){void 0===PromiseImpl&&(PromiseImpl=Promise);var iter=new AsyncIterator(wrap(innerFn,outerFn,self,tryLocsList),PromiseImpl);return exports.isGeneratorFunction(outerFn)?iter:iter.next().then((function(result){return result.done?result.value:iter.next()}))},defineIteratorMethods(Gp),define(Gp,toStringTagSymbol,"Generator"),define(Gp,iteratorSymbol,(function(){return this})),define(Gp,"toString",(function(){return"[object Generator]"})),exports.keys=function(object){var keys=[];for(var key in object)keys.push(key);return keys.reverse(),function next(){for(;keys.length;){var key=keys.pop();if(key in object)return next.value=key,next.done=!1,next}return next.done=!0,next}},exports.values=values,Context.prototype={constructor:Context,reset:function reset(skipTempReset){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(resetTryEntry),!skipTempReset)for(var name in this)"t"===name.charAt(0)&&hasOwn.call(this,name)&&!isNaN(+name.slice(1))&&(this[name]=void 0)},stop:function stop(){this.done=!0;var rootRecord=this.tryEntries[0].completion;if("throw"===rootRecord.type)throw rootRecord.arg;return this.rval},dispatchException:function dispatchException(exception){if(this.done)throw exception;var context=this;function handle(loc,caught){return record.type="throw",record.arg=exception,context.next=loc,caught&&(context.method="next",context.arg=void 0),!!caught}for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i],record=entry.completion;if("root"===entry.tryLoc)return handle("end");if(entry.tryLoc<=this.prev){var hasCatch=hasOwn.call(entry,"catchLoc"),hasFinally=hasOwn.call(entry,"finallyLoc");if(hasCatch&&hasFinally){if(this.prev<entry.catchLoc)return handle(entry.catchLoc,!0);if(this.prev<entry.finallyLoc)return handle(entry.finallyLoc)}else if(hasCatch){if(this.prev<entry.catchLoc)return handle(entry.catchLoc,!0)}else{if(!hasFinally)throw new Error("try statement without catch or finally");if(this.prev<entry.finallyLoc)return handle(entry.finallyLoc)}}}},abrupt:function abrupt(type,arg){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc<=this.prev&&hasOwn.call(entry,"finallyLoc")&&this.prev<entry.finallyLoc){var finallyEntry=entry;break}}finallyEntry&&("break"===type||"continue"===type)&&finallyEntry.tryLoc<=arg&&arg<=finallyEntry.finallyLoc&&(finallyEntry=null);var record=finallyEntry?finallyEntry.completion:{};return record.type=type,record.arg=arg,finallyEntry?(this.method="next",this.next=finallyEntry.finallyLoc,ContinueSentinel):this.complete(record)},complete:function complete(record,afterLoc){if("throw"===record.type)throw record.arg;return"break"===record.type||"continue"===record.type?this.next=record.arg:"return"===record.type?(this.rval=this.arg=record.arg,this.method="return",this.next="end"):"normal"===record.type&&afterLoc&&(this.next=afterLoc),ContinueSentinel},finish:function finish(finallyLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.finallyLoc===finallyLoc)return this.complete(entry.completion,entry.afterLoc),resetTryEntry(entry),ContinueSentinel}},catch:function _catch(tryLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc===tryLoc){var record=entry.completion;if("throw"===record.type){var thrown=record.arg;resetTryEntry(entry)}return thrown}}throw new Error("illegal catch attempt")},delegateYield:function delegateYield(iterable,resultName,nextLoc){return this.delegate={iterator:values(iterable),resultName:resultName,nextLoc:nextLoc},"next"===this.method&&(this.arg=void 0),ContinueSentinel}},exports}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}__webpack_exports__.default={title:"Header",component:Header_Header};var Header_stories_Template=function Template(args){return Object(emotion_react_browser_esm.c)(Header_Header,args)},Authenticated=Header_stories_Template.bind({});Authenticated.args={activePath:"/account",authenticated:!0,handleSignIn:console.log,handleSignOut:console.log};var Unauthenticated=Header_stories_Template.bind({});Unauthenticated.args={activePath:"/",authenticated:!1,handleSignIn:console.log,handleSignOut:console.log};var Header_stories_Authentication=function Authentication(){var _useState2=_slicedToArray(Object(react.useState)(!1),2),isAuthenticating=_useState2[0],setIsAuthenticating=_useState2[1],_useState4=_slicedToArray(Object(react.useState)(!1),2),authenticated=_useState4[0],setAuthenticated=_useState4[1],handleSignIn=function(){var _ref=_asyncToGenerator(_regeneratorRuntime().mark((function _callee(){return _regeneratorRuntime().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:setIsAuthenticating(!0),setTimeout((function(){setIsAuthenticating(!1),setAuthenticated(!0)}),3e3);case 2:case"end":return _context.stop()}}),_callee)})));return function handleSignIn(){return _ref.apply(this,arguments)}}(),handleSignOut=function(){var _ref2=_asyncToGenerator(_regeneratorRuntime().mark((function _callee2(){return _regeneratorRuntime().wrap((function _callee2$(_context2){for(;;)switch(_context2.prev=_context2.next){case 0:setIsAuthenticating(!0),setTimeout((function(){setIsAuthenticating(!1),setAuthenticated(!1)}),3e3);case 2:case"end":return _context2.stop()}}),_callee2)})));return function handleSignOut(){return _ref2.apply(this,arguments)}}();return Object(emotion_react_browser_esm.c)(react.Fragment,null,Object(emotion_react_browser_esm.c)(Header_Header,{activePath:"/account",handleSignIn:handleSignIn,handleSignOut:handleSignOut,authenticated:authenticated}),isAuthenticating&&Object(emotion_react_browser_esm.c)(ag_ds_next_loading_esm.a,{fullScreen:!0,label:"You are being redirected to myGovID"}))};Authenticated.parameters=_objectSpread({storySource:{source:"(args) => <Header {...args} />"}},Authenticated.parameters),Unauthenticated.parameters=_objectSpread({storySource:{source:"(args) => <Header {...args} />"}},Unauthenticated.parameters),Header_stories_Authentication.parameters=_objectSpread({storySource:{source:'() => {\n\tconst [isAuthenticating, setIsAuthenticating] = useState(false);\n\tconst [authenticated, setAuthenticated] = useState(false);\n\n\tconst handleSignIn = async () => {\n\t\tsetIsAuthenticating(true);\n\t\tsetTimeout(() => {\n\t\t\tsetIsAuthenticating(false);\n\t\t\tsetAuthenticated(true);\n\t\t}, 3000);\n\t};\n\n\tconst handleSignOut = async () => {\n\t\tsetIsAuthenticating(true);\n\t\tsetTimeout(() => {\n\t\t\tsetIsAuthenticating(false);\n\t\t\tsetAuthenticated(false);\n\t\t}, 3000);\n\t};\n\n\treturn (\n\t\t<Fragment>\n\t\t\t<Header\n\t\t\t\tactivePath="/account"\n\t\t\t\thandleSignIn={handleSignIn}\n\t\t\t\thandleSignOut={handleSignOut}\n\t\t\t\tauthenticated={authenticated}\n\t\t\t/>\n\t\t\t{isAuthenticating && (\n\t\t\t\t<LoadingBlanket\n\t\t\t\t\tfullScreen\n\t\t\t\t\tlabel="You are being redirected to myGovID"\n\t\t\t\t/>\n\t\t\t)}\n\t\t</Fragment>\n\t);\n}'}},Header_stories_Authentication.parameters)},"./storybook-init-framework-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},0:function(module,exports,__webpack_require__){__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_require__("./storybook-init-framework-entry.js"),__webpack_require__("./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-links/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-measure/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-outline/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-a11y/preview.js-generated-config-entry.js"),__webpack_require__("./.storybook/preview.tsx-generated-config-entry.js"),module.exports=__webpack_require__("./generated-stories-entry.js")},1:function(module,exports){}},[[0,5,6]]]);
//# sourceMappingURL=main.a1cb351d.iframe.bundle.js.map