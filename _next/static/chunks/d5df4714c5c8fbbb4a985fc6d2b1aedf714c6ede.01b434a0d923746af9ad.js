(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"+6Dn":function(e,t,n){"use strict";n("RIqP");var r=n("pVnL"),o=n.n(r),i=n("TSYQ"),s=n.n(i),c=(n("17x9"),n("q1tI")),u=n.n(c),a=n("cDf5"),l=n.n(a),f={1:"one",2:"two",3:"three",4:"four",5:"five",6:"six",7:"seven",8:"eight",9:"nine",10:"ten",11:"eleven",12:"twelve",13:"thirteen",14:"fourteen",15:"fifteen",16:"sixteen"};function p(e){var t=l()(e);return"string"===t||"number"===t?f[e]||e:""}var d=function(e,t){return e&&t},h=function(e,t){return e&&!0!==e&&"".concat(e," ").concat(t)},v=function(e,t){return e&&(!0===e?t:"".concat(e," ").concat(t))},y=function(e,t){return e&&!0!==e?e.replace("large screen","large-screen").replace(/ vertically/g,"-vertically").split(" ").map((function(e){return"".concat(e.replace("-"," ")," ").concat(t)})).join(" "):null},m=function(e){return"justified"===e?"justified":h(e,"aligned")},_=function(e){return h(e,"aligned")},g=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(n&&"equal"===e)return"equal width";var r=l()(e);return"string"!==r&&"number"!==r||!t?p(e):"".concat(p(e)," ").concat(t)},b=function(e,t){var n=e.handledProps,r=void 0===n?[]:n;return Object.keys(t).reduce((function(e,n){return"childKey"===n?e:(-1===r.indexOf(n)&&(e[n]=t[n]),e)}),{})};var x=function(e,t,n){var r=e.defaultProps,o=void 0===r?{}:r;if(t.as&&t.as!==o.as)return t.as;if(n){var i=n();if(i)return i}return t.href?"a":o.as||"div"},S=n("MVZn"),w=n.n(S),j=n("7tbW"),k=n.n(j),C=n("Z0cm"),A=n.n(C),O=n("YO3V"),R=n.n(O),E=n("lSCD"),P=n.n(E),F=n("UB5X"),N=n.n(F),z=n("4qC0"),I=n.n(z),T=n("Znm+"),M=n.n(T),B=n("J2iB"),K=n.n(B);function L(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};if("function"!==typeof e&&"string"!==typeof e)throw new Error("createShorthand() Component must be a string or function.");if(K()(n)||M()(n))return null;var o=I()(n),i=N()(n),a=P()(n),l=Object(c.isValidElement)(n),f=R()(n),p=o||i||A()(n);if(!a&&!l&&!f&&!p)return null;var d=r.defaultProps,h=void 0===d?{}:d,v=l&&n.props||f&&n||p&&t(n),y=r.overrideProps,m=void 0===y?{}:y;m=P()(m)?m(w()({},h,v)):m;var _=w()({},h,v,m);if(h.className||m.className||v.className){var g=s()(h.className,m.className,v.className);_.className=k()(g.split(" ")).join(" ")}if((h.style||m.style||v.style)&&(_.style=w()({},h.style,v.style,m.style)),K()(_.key)){var b=_.childKey,x=r.autoGenerateKey,S=void 0===x||x;K()(b)?S&&(o||i)&&(_.key=n):(_.key="function"===typeof b?b(_):b,delete _.childKey)}return l?Object(c.cloneElement)(n,_):p||f?u.a.createElement(e,_):a?n(e,_,_.children):void 0}function q(e,t){if("function"!==typeof e&&"string"!==typeof e)throw new Error("createShorthandFactory() Component must be a string or function.");return function(n,r){return L(e,t,n,r)}}L.handledProps=[];q("div",(function(e){return{children:e}})),q("iframe",(function(e){return{src:e}})),q("img",(function(e){return{src:e}})),q("input",(function(e){return{type:e}})),q("label",(function(e){return{children:e}})),q("p",(function(e){return{children:e}}));function U(e){var t=e.children,n=e.className,r=e.computer,i=e.color,c=e.floated,a=e.largeScreen,l=e.mobile,f=e.only,p=e.stretched,v=e.tablet,S=e.textAlign,w=e.verticalAlign,j=e.widescreen,k=e.width,C=s()(i,d(p,"stretched"),y(f,"only"),m(S),h(c,"floated"),_(w),g(r,"wide computer"),g(a,"wide large screen"),g(l,"wide mobile"),g(v,"wide tablet"),g(j,"wide widescreen"),g(k,"wide"),"column",n),A=b(U,e),O=x(U,e);return u.a.createElement(O,o()({},A,{className:C}),t)}U.handledProps=["as","children","className","color","computer","floated","largeScreen","mobile","only","stretched","tablet","textAlign","verticalAlign","widescreen","width"],U.propTypes={},U.create=q(U,(function(e){return{children:e}}));var D=U;function X(e){var t=e.centered,n=e.children,r=e.className,i=e.color,c=e.columns,a=e.divided,l=e.only,f=e.reversed,p=e.stretched,h=e.textAlign,v=e.verticalAlign,S=s()(i,d(t,"centered"),d(a,"divided"),d(p,"stretched"),y(l,"only"),y(f,"reversed"),m(h),_(v),g(c,"column",!0),"row",r),w=b(X,e),j=x(X,e);return u.a.createElement(j,o()({},w,{className:S}),n)}X.handledProps=["as","centered","children","className","color","columns","divided","only","reversed","stretched","textAlign","verticalAlign"],X.propTypes={};var Q=X;function Y(e){var t=e.celled,n=e.centered,r=e.children,i=e.className,c=e.columns,a=e.container,l=e.divided,f=e.doubling,p=e.inverted,h=e.padded,S=e.relaxed,w=e.reversed,j=e.stackable,k=e.stretched,C=e.textAlign,A=e.verticalAlign,O=s()("ui",d(n,"centered"),d(a,"container"),d(f,"doubling"),d(p,"inverted"),d(j,"stackable"),d(k,"stretched"),v(t,"celled"),v(l,"divided"),v(h,"padded"),v(S,"relaxed"),y(w,"reversed"),m(C),_(A),g(c,"column",!0),"grid",i),R=b(Y,e),E=x(Y,e);return u.a.createElement(E,o()({},R,{className:O}),r)}Y.handledProps=["as","celled","centered","children","className","columns","container","divided","doubling","inverted","padded","relaxed","reversed","stackable","stretched","textAlign","verticalAlign"],Y.Column=D,Y.Row=Q,Y.propTypes={};t.a=Y},"+6XX":function(e,t,n){var r=n("y1pI");e.exports=function(e){return r(this.__data__,e)>-1}},"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=s,t.useAmp=function(){return s(o.default.useContext(i.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},i=n("lwAK");function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,i=e.hasQuery;return n||o&&(void 0!==i&&i)}},"1hJj":function(e,t,n){var r=n("e4Nc"),o=n("ftKO"),i=n("3A9y");function s(e){var t=-1,n=null==e?0:e.length;for(this.__data__=new r;++t<n;)this.add(e[t])}s.prototype.add=s.prototype.push=o,s.prototype.has=i,e.exports=s},"2ajD":function(e,t){e.exports=function(e){return e!==e}},"2gN3":function(e,t,n){var r=n("Kz5y")["__core-js_shared__"];e.exports=r},"3A9y":function(e,t){e.exports=function(e){return this.__data__.has(e)}},"3Fdi":function(e,t){var n=Function.prototype.toString;e.exports=function(e){if(null!=e){try{return n.call(e)}catch(t){}try{return e+""}catch(t){}}return""}},"3niX":function(e,t,n){"use strict";t.__esModule=!0,t.flush=function(){var e=i.cssRules();return i.flush(),e},t.default=void 0;var r,o=n("q1tI");var i=new(((r=n("SevZ"))&&r.__esModule?r:{default:r}).default),s=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this).prevProps={},n}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.dynamic=function(e){return e.map((function(e){var t=e[0],n=e[1];return i.computeId(t,n)})).join(" ")};var o=r.prototype;return o.shouldComponentUpdate=function(e){return this.props.id!==e.id||String(this.props.dynamic)!==String(e.dynamic)},o.componentWillUnmount=function(){i.remove(this.props)},o.render=function(){return this.shouldComponentUpdate(this.prevProps)&&(this.prevProps.id&&i.remove(this.prevProps),i.add(this.props),this.prevProps=this.props),null},r}(o.Component);t.default=s},"4kuk":function(e,t,n){var r=n("SfRM"),o=n("Hvzi"),i=n("u8Dt"),s=n("ekgI"),c=n("JSQU");function u(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}u.prototype.clear=r,u.prototype.delete=o,u.prototype.get=i,u.prototype.has=s,u.prototype.set=c,e.exports=u},"4qC0":function(e,t,n){var r=n("NykK"),o=n("Z0cm"),i=n("ExA7"),s="[object String]";e.exports=function(e){return"string"==typeof e||!o(e)&&i(e)&&r(e)==s}},"5fIB":function(e,t,n){var r=n("7eYB");e.exports=function(e){if(Array.isArray(e))return r(e)}},"7tbW":function(e,t,n){var r=n("LGYb");e.exports=function(e){return e&&e.length?r(e):[]}},"8Kt/":function(e,t,n){"use strict";t.__esModule=!0,t.defaultHead=a,t.default=void 0;var r=u(n("q1tI")),o=u(n("Xuae")),i=n("lwAK"),s=n("FYa8"),c=n("/0+H");function u(e){return e&&e.__esModule?e:{default:e}}function a(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[r.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function l(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===r.default.Fragment?e.concat(r.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var f=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=r.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(l,[]).reverse().concat(a(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var i=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var s=o.key.slice(o.key.indexOf("$")+1);e.has(s)?i=!1:e.add(s)}switch(o.type){case"title":case"base":t.has(o.type)?i=!1:t.add(o.type);break;case"meta":for(var c=0,u=f.length;c<u;c++){var a=f[c];if(o.props.hasOwnProperty(a))if("charSet"===a)n.has(a)?i=!1:n.add(a);else{var l=o.props[a],p=r[a]||new Set;p.has(l)?i=!1:(p.add(l),r[a]=p)}}}return i}}()).reverse().map((function(e,t){var n=e.key||t;return r.default.cloneElement(e,{key:n})}))}var d=(0,o.default)();function h(e){var t=e.children;return(r.default.createElement(i.AmpStateContext.Consumer,null,(function(e){return r.default.createElement(s.HeadManagerContext.Consumer,null,(function(n){return r.default.createElement(d,{reduceComponentsToState:p,handleStateChange:n,inAmpMode:(0,c.isInAmpMode)(e)},t)}))})))}h.rewind=d.rewind;var v=h;t.default=v},"8oxB":function(e,t){var n,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function c(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"===typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"===typeof clearTimeout?clearTimeout:s}catch(e){r=s}}();var u,a=[],l=!1,f=-1;function p(){l&&u&&(l=!1,u.length?a=u.concat(a):f=-1,a.length&&d())}function d(){if(!l){var e=c(p);l=!0;for(var t=a.length;t;){for(u=a,a=[];++f<t;)u&&u[f].run();f=-1,t=a.length}u=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function v(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];a.push(new h(e,t)),1!==a.length||l||c(d)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=v,o.addListener=v,o.once=v,o.off=v,o.removeListener=v,o.removeAllListeners=v,o.emit=v,o.prependListener=v,o.prependOnceListener=v,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},"9kyW":function(e,t,n){"use strict";e.exports=function(e){for(var t=5381,n=e.length;n;)t=33*t^e.charCodeAt(--n);return t>>>0}},AP2z:function(e,t,n){var r=n("nmnc"),o=Object.prototype,i=o.hasOwnProperty,s=o.toString,c=r?r.toStringTag:void 0;e.exports=function(e){var t=i.call(e,c),n=e[c];try{e[c]=void 0;var r=!0}catch(u){}var o=s.call(e);return r&&(t?e[c]=n:delete e[c]),o}},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},CZoQ:function(e,t){e.exports=function(e,t,n){for(var r=n-1,o=e.length;++r<o;)if(e[r]===t)return r;return-1}},Cwc5:function(e,t,n){var r=n("NKxu"),o=n("Npjl");e.exports=function(e,t){var n=o(e,t);return r(n)?n:void 0}},E2jh:function(e,t,n){var r=n("2gN3"),o=function(){var e=/[^.]+$/.exec(r&&r.keys&&r.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();e.exports=function(e){return!!o&&o in e}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},EpBk:function(e,t){e.exports=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e}},ExA7:function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e}},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext(null);t.HeadManagerContext=o},GoyQ:function(e,t){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},H8j4:function(e,t,n){var r=n("QkVE");e.exports=function(e,t){var n=r(this,e),o=n.size;return n.set(e,t),this.size+=n.size==o?0:1,this}},Hvzi:function(e,t){e.exports=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},J2iB:function(e,t){e.exports=function(e){return null==e}},JHgL:function(e,t,n){var r=n("QkVE");e.exports=function(e){return r(this,e).get(e)}},JSQU:function(e,t,n){var r=n("YESw"),o="__lodash_hash_undefined__";e.exports=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=r&&void 0===t?o:t,this}},KMkd:function(e,t){e.exports=function(){this.__data__=[],this.size=0}},KfNM:function(e,t){var n=Object.prototype.toString;e.exports=function(e){return n.call(e)}},KwMD:function(e,t){e.exports=function(e,t,n,r){for(var o=e.length,i=n+(r?1:-1);r?i--:++i<o;)if(t(e[i],i,e))return i;return-1}},Kz5y:function(e,t,n){var r=n("WFqU"),o="object"==typeof self&&self&&self.Object===Object&&self,i=r||o||Function("return this")();e.exports=i},LGYb:function(e,t,n){var r=n("1hJj"),o=n("jbM+"),i=n("Xt/L"),s=n("xYSL"),c=n("dQpi"),u=n("rEGp"),a=200;e.exports=function(e,t,n){var l=-1,f=o,p=e.length,d=!0,h=[],v=h;if(n)d=!1,f=i;else if(p>=a){var y=t?null:c(e);if(y)return u(y);d=!1,f=s,v=new r}else v=t?[]:h;e:for(;++l<p;){var m=e[l],_=t?t(m):m;if(m=n||0!==m?m:0,d&&_===_){for(var g=v.length;g--;)if(v[g]===_)continue e;t&&v.push(_),h.push(m)}else f(v,_,n)||(v!==h&&v.push(_),h.push(m))}return h}},LcsW:function(e,t,n){var r=n("kekF")(Object.getPrototypeOf,Object);e.exports=r},MVZn:function(e,t,n){var r=n("lSNA");e.exports=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?Object(arguments[t]):{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){r(e,t,n[t])}))}return e}},MX0m:function(e,t,n){e.exports=n("3niX")},MbLX:function(e,t,n){"use strict";var r=n("MX0m"),o=n.n(r),i=n("YFqc"),s=n.n(i),c=n("q1tI"),u=n.n(c).a.createElement,a=[{href:"/",label:"Home"},{href:"/projects",label:"Projects"},{href:"/contact",label:"Contact"}].map((function(e){return e.key="nav-link-".concat(e.href,"-").concat(e.label),e}));t.a=function(e){var t=e.path;return u("nav",{className:"jsx-74251589"},u("ul",{className:"jsx-74251589"},a.map((function(e){var n=e.key,r=e.href,o=e.label;return u("li",{key:n,className:"jsx-74251589 "+((r===t?"is-selected":"")||"")},u(s.a,{href:r},u("a",{className:"jsx-74251589"},o)))}))),u(o.a,{id:"74251589"},["body{margin:0;font-family:-apple-system,BlinkMacSystemFont,Avenir Next,Avenir,Helvetica,sans-serif;background:linear-gradient(90deg,#000429 0%,#120029 0.01%,#001A28 100%),#141414;}","nav.jsx-74251589{position:fixed;top:0;left:0;text-align:center;width:calc(100vw + 16px);height:64px;background-color:rgba(0,0,0,0.69);}","ul.jsx-74251589{padding:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}","nav.jsx-74251589>ul.jsx-74251589{padding:4px 64px;}","li.jsx-74251589{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:6px 0px;margin:0px 64px;}","a.jsx-74251589{color:#067df7;font-size:32px;-webkit-text-decoration:none;text-decoration:none;color:white;}",".is-selected.jsx-74251589{border-bottom:3px solid white;}"]))}},NKxu:function(e,t,n){var r=n("lSCD"),o=n("E2jh"),i=n("GoyQ"),s=n("3Fdi"),c=/^\[object .+?Constructor\]$/,u=Function.prototype,a=Object.prototype,l=u.toString,f=a.hasOwnProperty,p=RegExp("^"+l.call(f).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");e.exports=function(e){return!(!i(e)||o(e))&&(r(e)?p:c).test(s(e))}},Npjl:function(e,t){e.exports=function(e,t){return null==e?void 0:e[t]}},NykK:function(e,t,n){var r=n("nmnc"),o=n("AP2z"),i=n("KfNM"),s="[object Null]",c="[object Undefined]",u=r?r.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?c:s:u&&u in Object(e)?o(e):i(e)}},QkVE:function(e,t,n){var r=n("EpBk");e.exports=function(e,t){var n=e.__data__;return r(t)?n["string"==typeof t?"string":"hash"]:n.map}},"R/W3":function(e,t,n){var r=n("KwMD"),o=n("2ajD"),i=n("CZoQ");e.exports=function(e,t,n){return t===t?i(e,t,n):r(e,o,n)}},RIqP:function(e,t,n){var r=n("Ijbi"),o=n("EbDI"),i=n("ZhPi"),s=n("Bnag");e.exports=function(e){return r(e)||o(e)||i(e)||s()}},SevZ:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var r=i(n("9kyW")),o=i(n("bVZc"));function i(e){return e&&e.__esModule?e:{default:e}}var s=function(){function e(e){var t=void 0===e?{}:e,n=t.styleSheet,r=void 0===n?null:n,i=t.optimizeForSpeed,s=void 0!==i&&i,c=t.isBrowser,u=void 0===c?"undefined"!==typeof window:c;this._sheet=r||new o.default({name:"styled-jsx",optimizeForSpeed:s}),this._sheet.inject(),r&&"boolean"===typeof s&&(this._sheet.setOptimizeForSpeed(s),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=u,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce((function(e,t){return e[t]=0,e}),{}));var n=this.getIdAndRules(e),r=n.styleId,o=n.rules;if(r in this._instancesCounts)this._instancesCounts[r]+=1;else{var i=o.map((function(e){return t._sheet.insertRule(e)})).filter((function(e){return-1!==e}));this._indices[r]=i,this._instancesCounts[r]=1}},t.remove=function(e){var t=this,n=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: "+t+".")}(n in this._instancesCounts,"styleId: `"+n+"` not found"),this._instancesCounts[n]-=1,this._instancesCounts[n]<1){var r=this._fromServer&&this._fromServer[n];r?(r.parentNode.removeChild(r),delete this._fromServer[n]):(this._indices[n].forEach((function(e){return t._sheet.deleteRule(e)})),delete this._indices[n]),delete this._instancesCounts[n]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map((function(t){return[t,e._fromServer[t]]})):[],n=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map((function(t){return[t,e._indices[t].map((function(e){return n[e].cssText})).join(e._optimizeForSpeed?"":"\n")]})).filter((function(e){return Boolean(e[1])})))},t.createComputeId=function(){var e={};return function(t,n){if(!n)return"jsx-"+t;var o=String(n),i=t+o;return e[i]||(e[i]="jsx-"+(0,r.default)(t+"-"+o)),e[i]}},t.createComputeSelector=function(e){void 0===e&&(e=/__jsx-style-dynamic-selector/g);var t={};return function(n,r){this._isBrowser||(r=r.replace(/\/style/gi,"\\/style"));var o=n+r;return t[o]||(t[o]=r.replace(e,n)),t[o]}},t.getIdAndRules=function(e){var t=this,n=e.children,r=e.dynamic,o=e.id;if(r){var i=this.computeId(o,r);return{styleId:i,rules:Array.isArray(n)?n.map((function(e){return t.computeSelector(i,e)})):[this.computeSelector(i,n)]}}return{styleId:this.computeId(o),rules:Array.isArray(n)?n:[n]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce((function(e,t){return e[t.id.slice(2)]=t,e}),{})},e}();t.default=s},SfRM:function(e,t,n){var r=n("YESw");e.exports=function(){this.__data__=r?r(null):{},this.size=0}},TSYQ:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)&&r.length){var s=o.apply(null,r);s&&e.push(s)}else if("object"===i)for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},UB5X:function(e,t,n){var r=n("NykK"),o=n("ExA7"),i="[object Number]";e.exports=function(e){return"number"==typeof e||o(e)&&r(e)==i}},WFqU:function(e,t,n){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(this,n("yLpj"))},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},Xi7e:function(e,t,n){var r=n("KMkd"),o=n("adU4"),i=n("tMB7"),s=n("+6XX"),c=n("Z8oC");function u(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}u.prototype.clear=r,u.prototype.delete=o,u.prototype.get=i,u.prototype.has=s,u.prototype.set=c,e.exports=u},"Xt/L":function(e,t){e.exports=function(e,t,n){for(var r=-1,o=null==e?0:e.length;++r<o;)if(n(t,e[r]))return!0;return!1}},Xuae:function(e,t,n){"use strict";var r=n("/GRZ"),o=n("qXWd"),i=n("i2R6"),s=n("48fX"),c=n("tCBg"),u=n("T0f4"),a=n("mPvQ");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var f=n("q1tI"),p=!1;t.default=function(){var e,t=new Set;function n(n){e=n.props.reduceComponentsToState(a(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return(function(c){s(a,c);var u=l(a);function a(e){var i;return r(this,a),i=u.call(this,e),p&&(t.add(o(i)),n(o(i))),i}return i(a,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),i(a,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),a}(f.Component))}},YESw:function(e,t,n){var r=n("Cwc5")(Object,"create");e.exports=r},YFqc:function(e,t,n){e.exports=n("cTJO")},YO3V:function(e,t,n){var r=n("NykK"),o=n("LcsW"),i=n("ExA7"),s="[object Object]",c=Function.prototype,u=Object.prototype,a=c.toString,l=u.hasOwnProperty,f=a.call(Object);e.exports=function(e){if(!i(e)||r(e)!=s)return!1;var t=o(e);if(null===t)return!0;var n=l.call(t,"constructor")&&t.constructor;return"function"==typeof n&&n instanceof n&&a.call(n)==f}},Z0cm:function(e,t){var n=Array.isArray;e.exports=n},Z8oC:function(e,t,n){var r=n("y1pI");e.exports=function(e,t){var n=this.__data__,o=r(n,e);return o<0?(++this.size,n.push([e,t])):n[o][1]=t,this}},ZhPi:function(e,t,n){var r=n("WkPL");e.exports=function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},"Znm+":function(e,t,n){var r=n("NykK"),o=n("ExA7"),i="[object Boolean]";e.exports=function(e){return!0===e||!1===e||o(e)&&r(e)==i}},adU4:function(e,t,n){var r=n("y1pI"),o=Array.prototype.splice;e.exports=function(e){var t=this.__data__,n=r(t,e);return!(n<0)&&(n==t.length-1?t.pop():o.call(t,n,1),--this.size,!0)}},bVZc:function(e,t,n){"use strict";(function(e){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}t.__esModule=!0,t.default=void 0;var r="undefined"!==typeof e&&e.env&&!0,o=function(e){return"[object String]"===Object.prototype.toString.call(e)},i=function(){function e(e){var t=void 0===e?{}:e,n=t.name,i=void 0===n?"stylesheet":n,c=t.optimizeForSpeed,u=void 0===c?r:c,a=t.isBrowser,l=void 0===a?"undefined"!==typeof window:a;s(o(i),"`name` must be a string"),this._name=i,this._deletedRulePlaceholder="#"+i+"-deleted-rule____{}",s("boolean"===typeof u,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=u,this._isBrowser=l,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var f=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=f?f.getAttribute("content"):null}var t,i,c,u=e.prototype;return u.setOptimizeForSpeed=function(e){s("boolean"===typeof e,"`setOptimizeForSpeed` accepts a boolean"),s(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},u.isOptimizeForSpeed=function(){return this._optimizeForSpeed},u.inject=function(){var e=this;if(s(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(r||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,n){return"number"===typeof n?e._serverSheet.cssRules[n]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),n},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},u.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},u.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},u.insertRule=function(e,t){if(s(o(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!==typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var n=this.getSheet();"number"!==typeof t&&(t=n.cssRules.length);try{n.insertRule(e,t)}catch(c){return r||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var i=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,i))}return this._rulesCount++},u.replaceRule=function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var n=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!n.cssRules[e])return e;n.deleteRule(e);try{n.insertRule(t,e)}catch(i){r||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),n.insertRule(this._deletedRulePlaceholder,e)}}else{var o=this._tags[e];s(o,"old rule at index `"+e+"` not found"),o.textContent=t}return e},u.deleteRule=function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];s(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)},u.flush=function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach((function(e){return e&&e.parentNode.removeChild(e)})),this._tags=[]):this._serverSheet.cssRules=[]},u.cssRules=function(){var e=this;return this._isBrowser?this._tags.reduce((function(t,n){return n?t=t.concat(Array.prototype.map.call(e.getSheetForTag(n).cssRules,(function(t){return t.cssText===e._deletedRulePlaceholder?null:t}))):t.push(null),t}),[]):this._serverSheet.cssRules},u.makeStyleTag=function(e,t,n){t&&s(o(t),"makeStyleTag acceps only strings as second parameter");var r=document.createElement("style");this._nonce&&r.setAttribute("nonce",this._nonce),r.type="text/css",r.setAttribute("data-"+e,""),t&&r.appendChild(document.createTextNode(t));var i=document.head||document.getElementsByTagName("head")[0];return n?i.insertBefore(r,n):i.appendChild(r),r},t=e,(i=[{key:"length",get:function(){return this._rulesCount}}])&&n(t.prototype,i),c&&n(t,c),e}();function s(e,t){if(!e)throw new Error("StyleSheet: "+t+".")}t.default=i}).call(this,n("8oxB"))},cDf5:function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},cTJO:function(e,t,n){"use strict";var r=n("/GRZ"),o=n("i2R6"),i=n("48fX"),s=n("tCBg"),c=n("T0f4");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return s(this,n)}}var a=n("AroE"),l=n("7KCV");t.__esModule=!0,t.default=void 0;var f,p=l(n("q1tI")),d=n("QmWs"),h=n("g/15"),v=a(n("nOHt")),y=n("elyg");function m(e){return e&&"object"===typeof e?(0,h.formatWithValidation)(e):e}var _=new Map,g=window.IntersectionObserver,b={};function x(){return f||(g?f=new g((function(e){e.forEach((function(e){if(_.has(e.target)){var t=_.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(e.target),_.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var S=function(e){i(n,e);var t=u(n);function n(e){var o;return r(this,n),(o=t.call(this,e)).p=void 0,o.cleanUpListeners=function(){},o.formatUrls=function(e){var t=null,n=null,r=null;return function(o,i){if(r&&o===t&&i===n)return r;var s=e(o,i);return t=o,n=i,r=s,s}}((function(e,t){return{href:(0,y.addBasePath)(m(e)),as:t?(0,y.addBasePath)(m(t)):t}})),o.linkClicked=function(e){var t=e.currentTarget,n=t.nodeName,r=t.target;if("A"!==n||!(r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var i=o.formatUrls(o.props.href,o.props.as),s=i.href,c=i.as;if(function(e){var t=(0,d.parse)(e,!1,!0),n=(0,d.parse)((0,h.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(s)){var u=window.location.pathname;s=(0,d.resolve)(u,s),c=c?(0,d.resolve)(u,c):s,e.preventDefault();var a=o.props.scroll;null==a&&(a=c.indexOf("#")<0),v.default[o.props.replace?"replace":"push"](s,c,{shallow:o.props.shallow}).then((function(e){e&&a&&(window.scrollTo(0,0),document.body.focus())}))}}},o.p=!1!==e.prefetch,o}return o(n,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as),n=t.href,r=t.as,o=(0,d.resolve)(e,n);return[o,r?(0,d.resolve)(e,r):o]}},{key:"handleRef",value:function(e){var t=this;this.p&&g&&e&&e.tagName&&(this.cleanUpListeners(),b[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,t){var n=x();return n?(n.observe(e),_.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}_.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var t=this.getPaths();v.default.prefetch(t[0],t[1],e).catch((function(e){0})),b[t.join("%")]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,o=n.as;"string"===typeof t&&(t=p.default.createElement("a",null,t));var i=p.Children.only(t),s={ref:function(t){e.handleRef(t),i&&"object"===typeof i&&i.ref&&("function"===typeof i.ref?i.ref(t):"object"===typeof i.ref&&(i.ref.current=t))},onMouseEnter:function(t){i.props&&"function"===typeof i.props.onMouseEnter&&i.props.onMouseEnter(t),e.prefetch({priority:!0})},onClick:function(t){i.props&&"function"===typeof i.props.onClick&&i.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(s.href=o||r),p.default.cloneElement(i,s)}}]),n}(p.Component);t.default=S},dQpi:function(e,t,n){var r=n("yGk4"),o=n("vN+2"),i=n("rEGp"),s=r&&1/i(new r([,-0]))[1]==1/0?function(e){return new r(e)}:o;e.exports=s},e4Nc:function(e,t,n){var r=n("fGT3"),o=n("k+1r"),i=n("JHgL"),s=n("pSRY"),c=n("H8j4");function u(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}u.prototype.clear=r,u.prototype.delete=o,u.prototype.get=i,u.prototype.has=s,u.prototype.set=c,e.exports=u},ebwN:function(e,t,n){var r=n("Cwc5")(n("Kz5y"),"Map");e.exports=r},ekgI:function(e,t,n){var r=n("YESw"),o=Object.prototype.hasOwnProperty;e.exports=function(e){var t=this.__data__;return r?void 0!==t[e]:o.call(t,e)}},fGT3:function(e,t,n){var r=n("4kuk"),o=n("Xi7e"),i=n("ebwN");e.exports=function(){this.size=0,this.__data__={hash:new r,map:new(i||o),string:new r}}},ftKO:function(e,t){var n="__lodash_hash_undefined__";e.exports=function(e){return this.__data__.set(e,n),this}},"jbM+":function(e,t,n){var r=n("R/W3");e.exports=function(e,t){return!!(null==e?0:e.length)&&r(e,t,0)>-1}},"k+1r":function(e,t,n){var r=n("QkVE");e.exports=function(e){var t=r(this,e).delete(e);return this.size-=t?1:0,t}},kG2m:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},kekF:function(e,t){e.exports=function(e,t){return function(n){return e(t(n))}}},lSCD:function(e,t,n){var r=n("NykK"),o=n("GoyQ"),i="[object AsyncFunction]",s="[object Function]",c="[object GeneratorFunction]",u="[object Proxy]";e.exports=function(e){if(!o(e))return!1;var t=r(e);return t==s||t==c||t==i||t==u}},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},ljhN:function(e,t){e.exports=function(e,t){return e===t||e!==e&&t!==t}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},mPvQ:function(e,t,n){var r=n("5fIB"),o=n("rlHP"),i=n("KckH"),s=n("kG2m");e.exports=function(e){return r(e)||o(e)||i(e)||s()}},nmnc:function(e,t,n){var r=n("Kz5y").Symbol;e.exports=r},pSRY:function(e,t,n){var r=n("QkVE");e.exports=function(e){return r(this,e).has(e)}},pVnL:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},n.apply(this,arguments)}e.exports=n},rEGp:function(e,t){e.exports=function(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=e})),n}},rlHP:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},tMB7:function(e,t,n){var r=n("y1pI");e.exports=function(e){var t=this.__data__,n=r(t,e);return n<0?void 0:t[n][1]}},tXcZ:function(e,t,n){"use strict";var r=n("8Kt/"),o=n.n(r),i=n("q1tI"),s=n.n(i).a.createElement;t.a=function(e){return s(o.a,null,s("meta",{charSet:"UTF-8"}),s("title",null,e.title||""),s("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),s("meta",{name:"description",content:e.description||""}),s("meta",{name:"keywords",content:e.keywords||""}),s("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/public/favicon-16x16.png"}),s("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/public/favicon-32x32.png"}),s("link",{rel:"shortcut icon",href:"/public/favicon.ico"}),s("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/public/apple-touch-icon.png"}),s("link",{rel:"mask-icon",href:"/public/favicon-mask.svg",color:"#000000"}),s("meta",{property:"og:url",content:e.url||""}),s("meta",{property:"og:title",content:e.title||""}),s("meta",{property:"og:description",content:e.description||""}),s("meta",{name:"twitter:site",content:e.url||""}),s("meta",{name:"twitter:card",content:"summary_large_image"}),s("meta",{property:"og:image:width",content:"1200"}),s("meta",{property:"og:image:height",content:"630"}),s("link",{href:"https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap",rel:"stylesheet"}))}},u8Dt:function(e,t,n){var r=n("YESw"),o="__lodash_hash_undefined__",i=Object.prototype.hasOwnProperty;e.exports=function(e){var t=this.__data__;if(r){var n=t[e];return n===o?void 0:n}return i.call(t,e)?t[e]:void 0}},"vN+2":function(e,t){e.exports=function(){}},"xMo/":function(e,t,n){},xYSL:function(e,t){e.exports=function(e,t){return e.has(t)}},y1pI:function(e,t,n){var r=n("ljhN");e.exports=function(e,t){for(var n=e.length;n--;)if(r(e[n][0],t))return n;return-1}},yGk4:function(e,t,n){var r=n("Cwc5")(n("Kz5y"),"Set");e.exports=r},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}e.exports=n}}]);