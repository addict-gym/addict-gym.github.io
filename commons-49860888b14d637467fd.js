(self.webpackChunkaddict_gym_com=self.webpackChunkaddict_gym_com||[]).push([[351],{507:function(t,e,n){"use strict";n.d(e,{ZP:function(){return O}});var r=n(8777),i=n(6666),o=n(1461),a=n(7896),c=n(2784),u=n(715),s=n(6378),l=n(6110),f=n(6754),p=n(552),d=n(2132);var m=c.createContext(),g=n(8974);function h(t){return(0,g.Z)("MuiGrid",t)}var y=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],v=(0,n(4981).Z)("MuiGrid",["root","container","item","zeroMinWidth"].concat((0,r.Z)([0,1,2,3,4,5,6,7,8,9,10].map((function(t){return"spacing-xs-".concat(t)}))),(0,r.Z)(["column-reverse","column","row-reverse","row"].map((function(t){return"direction-xs-".concat(t)}))),(0,r.Z)(["nowrap","wrap-reverse","wrap"].map((function(t){return"wrap-xs-".concat(t)}))),(0,r.Z)(y.map((function(t){return"grid-xs-".concat(t)}))),(0,r.Z)(y.map((function(t){return"grid-sm-".concat(t)}))),(0,r.Z)(y.map((function(t){return"grid-md-".concat(t)}))),(0,r.Z)(y.map((function(t){return"grid-lg-".concat(t)}))),(0,r.Z)(y.map((function(t){return"grid-xl-".concat(t)}))))),b=n(2322),w=["className","columns","columnSpacing","component","container","direction","item","lg","md","rowSpacing","sm","spacing","wrap","xl","xs","zeroMinWidth"];function T(t){var e=parseFloat(t);return"".concat(e).concat(String(t).replace(String(e),"")||"px")}function S(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!e||!t||t<=0)return[];if("string"==typeof t&&!Number.isNaN(Number(t))||"number"==typeof t)return[n["spacing-xs-".concat(String(t))]||"spacing-xs-".concat(String(t))];var r=t.xs,i=t.sm,o=t.md,a=t.lg,c=t.xl;return[Number(r)>0&&(n["spacing-xs-".concat(String(r))]||"spacing-xs-".concat(String(r))),Number(i)>0&&(n["spacing-sm-".concat(String(i))]||"spacing-sm-".concat(String(i))),Number(o)>0&&(n["spacing-md-".concat(String(o))]||"spacing-md-".concat(String(o))),Number(a)>0&&(n["spacing-lg-".concat(String(a))]||"spacing-lg-".concat(String(a))),Number(c)>0&&(n["spacing-xl-".concat(String(c))]||"spacing-xl-".concat(String(c)))]}var x=(0,p.ZP)("div",{name:"MuiGrid",slot:"Root",overridesResolver:function(t,e){var n=t.ownerState,i=n.container,o=n.direction,a=n.item,c=n.lg,u=n.md,s=n.sm,l=n.spacing,f=n.wrap,p=n.xl,d=n.xs,m=n.zeroMinWidth;return[e.root,i&&e.container,a&&e.item,m&&e.zeroMinWidth].concat((0,r.Z)(S(l,i,e)),["row"!==o&&e["direction-xs-".concat(String(o))],"wrap"!==f&&e["wrap-xs-".concat(String(f))],!1!==d&&e["grid-xs-".concat(String(d))],!1!==s&&e["grid-sm-".concat(String(s))],!1!==u&&e["grid-md-".concat(String(u))],!1!==c&&e["grid-lg-".concat(String(c))],!1!==p&&e["grid-xl-".concat(String(p))]])}})((function(t){var e=t.ownerState;return(0,a.Z)({boxSizing:"border-box"},e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},e.item&&{margin:0},e.zeroMinWidth&&{minWidth:0},"nowrap"===e.wrap&&{flexWrap:"nowrap"},"reverse"===e.wrap&&{flexWrap:"wrap-reverse"})}),(function(t){var e=t.theme,n=t.ownerState,r=(0,s.P$)({values:n.direction,breakpoints:e.breakpoints.values});return(0,s.k9)({theme:e},r,(function(t){var e={flexDirection:t};return 0===t.indexOf("column")&&(e["& > .".concat(v.item)]={maxWidth:"none"}),e}))}),(function(t){var e=t.theme,n=t.ownerState,r=n.container,o=n.rowSpacing,a={};if(r&&0!==o){var c=(0,s.P$)({values:o,breakpoints:e.breakpoints.values});a=(0,s.k9)({theme:e},c,(function(t){var n=e.spacing(t);return"0px"!==n?(0,i.Z)({marginTop:"-".concat(T(n))},"& > .".concat(v.item),{paddingTop:T(n)}):{}}))}return a}),(function(t){var e=t.theme,n=t.ownerState,r=n.container,o=n.columnSpacing,a={};if(r&&0!==o){var c=(0,s.P$)({values:o,breakpoints:e.breakpoints.values});a=(0,s.k9)({theme:e},c,(function(t){var n=e.spacing(t);return"0px"!==n?(0,i.Z)({width:"calc(100% + ".concat(T(n),")"),marginLeft:"-".concat(T(n))},"& > .".concat(v.item),{paddingLeft:T(n)}):{}}))}return a}),(function(t){var e,n=t.theme,r=t.ownerState;return n.breakpoints.keys.reduce((function(t,i){var o={};if(r[i]&&(e=r[i]),!e)return t;if(!0===e)o={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===e)o={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{var c=(0,s.P$)({values:r.columns,breakpoints:n.breakpoints.values}),u="object"==typeof c?c[i]:c;if(null==u)return t;var l="".concat(Math.round(e/u*1e8)/1e6,"%"),f={};if(r.container&&r.item&&0!==r.columnSpacing){var p=n.spacing(r.columnSpacing);if("0px"!==p){var d="calc(".concat(l," + ").concat(T(p),")");f={flexBasis:d,maxWidth:d}}}o=(0,a.Z)({flexBasis:l,flexGrow:0,maxWidth:l},f)}return 0===n.breakpoints.values[i]?Object.assign(t,o):t[n.breakpoints.up(i)]=o,t}),{})})),O=c.forwardRef((function(t,e){var n,i=(0,d.Z)({props:t,name:"MuiGrid"}),s=(0,l.Z)(i),p=s.className,g=s.columns,y=s.columnSpacing,v=s.component,T=void 0===v?"div":v,O=s.container,C=void 0!==O&&O,A=s.direction,E=void 0===A?"row":A,j=s.item,k=void 0!==j&&j,P=s.lg,M=void 0!==P&&P,L=s.md,I=void 0!==L&&L,Z=s.rowSpacing,N=s.sm,W=void 0!==N&&N,R=s.spacing,z=void 0===R?0:R,D=s.wrap,_=void 0===D?"wrap":D,Y=s.xl,H=void 0!==Y&&Y,B=s.xs,F=void 0!==B&&B,G=s.zeroMinWidth,q=void 0!==G&&G,U=(0,o.Z)(s,w),K=Z||z,V=y||z,$=c.useContext(m),X=g||$||12,Q=(0,a.Z)({},s,{columns:X,container:C,direction:E,item:k,lg:M,md:I,sm:W,rowSpacing:K,columnSpacing:V,wrap:_,xl:H,xs:F,zeroMinWidth:q}),J=function(t){var e=t.classes,n=t.container,i=t.direction,o=t.item,a=t.lg,c=t.md,u=t.sm,s=t.spacing,l=t.wrap,p=t.xl,d=t.xs,m={root:["root",n&&"container",o&&"item",t.zeroMinWidth&&"zeroMinWidth"].concat((0,r.Z)(S(s,n)),["row"!==i&&"direction-xs-".concat(String(i)),"wrap"!==l&&"wrap-xs-".concat(String(l)),!1!==d&&"grid-xs-".concat(String(d)),!1!==u&&"grid-sm-".concat(String(u)),!1!==c&&"grid-md-".concat(String(c)),!1!==a&&"grid-lg-".concat(String(a)),!1!==p&&"grid-xl-".concat(String(p))])};return(0,f.Z)(m,h,e)}(Q);return n=(0,b.jsx)(x,(0,a.Z)({ownerState:Q,className:(0,u.Z)(J.root,p),as:T,ref:e},U)),12!==X?(0,b.jsx)(m.Provider,{value:X,children:n}):n}))},2161:function(t){var e="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function o(t,a){if(t===a)return!0;if(t&&a&&"object"==typeof t&&"object"==typeof a){if(t.constructor!==a.constructor)return!1;var c,u,s,l;if(Array.isArray(t)){if((c=t.length)!=a.length)return!1;for(u=c;0!=u--;)if(!o(t[u],a[u]))return!1;return!0}if(n&&t instanceof Map&&a instanceof Map){if(t.size!==a.size)return!1;for(l=t.entries();!(u=l.next()).done;)if(!a.has(u.value[0]))return!1;for(l=t.entries();!(u=l.next()).done;)if(!o(u.value[1],a.get(u.value[0])))return!1;return!0}if(r&&t instanceof Set&&a instanceof Set){if(t.size!==a.size)return!1;for(l=t.entries();!(u=l.next()).done;)if(!a.has(u.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(a)){if((c=t.length)!=a.length)return!1;for(u=c;0!=u--;)if(t[u]!==a[u])return!1;return!0}if(t.constructor===RegExp)return t.source===a.source&&t.flags===a.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===a.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===a.toString();if((c=(s=Object.keys(t)).length)!==Object.keys(a).length)return!1;for(u=c;0!=u--;)if(!Object.prototype.hasOwnProperty.call(a,s[u]))return!1;if(e&&t instanceof Element)return!1;for(u=c;0!=u--;)if(("_owner"!==s[u]&&"__v"!==s[u]&&"__o"!==s[u]||!t.$$typeof)&&!o(t[s[u]],a[s[u]]))return!1;return!0}return t!=t&&a!=a}t.exports=function(t,e){try{return o(t,e)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},4834:function(t,e,n){"use strict";n.d(e,{q:function(){return gt}});var r,i,o,a,c=n(3980),u=n.n(c),s=n(2773),l=n.n(s),f=n(2161),p=n.n(f),d=n(2784),m=n(308),g=n.n(m),h="bodyAttributes",y="htmlAttributes",v="titleAttributes",b={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(b).map((function(t){return b[t]})),"charset"),T="cssText",S="href",x="http-equiv",O="innerHTML",C="itemprop",A="name",E="property",j="rel",k="src",P="target",M={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},L="defaultTitle",I="defer",Z="encodeSpecialCharacters",N="onChangeClientState",W="titleTemplate",R=Object.keys(M).reduce((function(t,e){return t[M[e]]=e,t}),{}),z=[b.NOSCRIPT,b.SCRIPT,b.STYLE],D="data-react-helmet",_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Y=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},H=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),B=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},F=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n},G=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},q=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===e?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},U=function(t){var e=Q(t,b.TITLE),n=Q(t,W);if(n&&e)return n.replace(/%s/g,(function(){return Array.isArray(e)?e.join(""):e}));var r=Q(t,L);return e||r||void 0},K=function(t){return Q(t,N)||function(){}},V=function(t,e){return e.filter((function(e){return void 0!==e[t]})).map((function(e){return e[t]})).reduce((function(t,e){return B({},t,e)}),{})},$=function(t,e){return e.filter((function(t){return void 0!==t[b.BASE]})).map((function(t){return t[b.BASE]})).reverse().reduce((function(e,n){if(!e.length)for(var r=Object.keys(n),i=0;i<r.length;i++){var o=r[i].toLowerCase();if(-1!==t.indexOf(o)&&n[o])return e.concat(n)}return e}),[])},X=function(t,e,n){var r={};return n.filter((function(e){return!!Array.isArray(e[t])||(void 0!==e[t]&&rt("Helmet: "+t+' should be of type "Array". Instead found type "'+_(e[t])+'"'),!1)})).map((function(e){return e[t]})).reverse().reduce((function(t,n){var i={};n.filter((function(t){for(var n=void 0,o=Object.keys(t),a=0;a<o.length;a++){var c=o[a],u=c.toLowerCase();-1===e.indexOf(u)||n===j&&"canonical"===t[n].toLowerCase()||u===j&&"stylesheet"===t[u].toLowerCase()||(n=u),-1===e.indexOf(c)||c!==O&&c!==T&&c!==C||(n=c)}if(!n||!t[n])return!1;var s=t[n].toLowerCase();return r[n]||(r[n]={}),i[n]||(i[n]={}),!r[n][s]&&(i[n][s]=!0,!0)})).reverse().forEach((function(e){return t.push(e)}));for(var o=Object.keys(i),a=0;a<o.length;a++){var c=o[a],u=g()({},r[c],i[c]);r[c]=u}return t}),[]).reverse()},Q=function(t,e){for(var n=t.length-1;n>=0;n--){var r=t[n];if(r.hasOwnProperty(e))return r[e]}return null},J=(r=Date.now(),function(t){var e=Date.now();e-r>16?(r=e,t(e)):setTimeout((function(){J(t)}),0)}),tt=function(t){return clearTimeout(t)},et="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||J:n.g.requestAnimationFrame||J,nt="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||tt:n.g.cancelAnimationFrame||tt,rt=function(t){return console&&"function"==typeof console.warn&&console.warn(t)},it=null,ot=function(t,e){var n=t.baseTag,r=t.bodyAttributes,i=t.htmlAttributes,o=t.linkTags,a=t.metaTags,c=t.noscriptTags,u=t.onChangeClientState,s=t.scriptTags,l=t.styleTags,f=t.title,p=t.titleAttributes;ut(b.BODY,r),ut(b.HTML,i),ct(f,p);var d={baseTag:st(b.BASE,n),linkTags:st(b.LINK,o),metaTags:st(b.META,a),noscriptTags:st(b.NOSCRIPT,c),scriptTags:st(b.SCRIPT,s),styleTags:st(b.STYLE,l)},m={},g={};Object.keys(d).forEach((function(t){var e=d[t],n=e.newTags,r=e.oldTags;n.length&&(m[t]=n),r.length&&(g[t]=d[t].oldTags)})),e&&e(),u(t,m,g)},at=function(t){return Array.isArray(t)?t.join(""):t},ct=function(t,e){void 0!==t&&document.title!==t&&(document.title=at(t)),ut(b.TITLE,e)},ut=function(t,e){var n=document.getElementsByTagName(t)[0];if(n){for(var r=n.getAttribute(D),i=r?r.split(","):[],o=[].concat(i),a=Object.keys(e),c=0;c<a.length;c++){var u=a[c],s=e[u]||"";n.getAttribute(u)!==s&&n.setAttribute(u,s),-1===i.indexOf(u)&&i.push(u);var l=o.indexOf(u);-1!==l&&o.splice(l,1)}for(var f=o.length-1;f>=0;f--)n.removeAttribute(o[f]);i.length===o.length?n.removeAttribute(D):n.getAttribute(D)!==a.join(",")&&n.setAttribute(D,a.join(","))}},st=function(t,e){var n=document.head||document.querySelector(b.HEAD),r=n.querySelectorAll(t+"["+"data-react-helmet]"),i=Array.prototype.slice.call(r),o=[],a=void 0;return e&&e.length&&e.forEach((function(e){var n=document.createElement(t);for(var r in e)if(e.hasOwnProperty(r))if(r===O)n.innerHTML=e.innerHTML;else if(r===T)n.styleSheet?n.styleSheet.cssText=e.cssText:n.appendChild(document.createTextNode(e.cssText));else{var c=void 0===e[r]?"":e[r];n.setAttribute(r,c)}n.setAttribute(D,"true"),i.some((function(t,e){return a=e,n.isEqualNode(t)}))?i.splice(a,1):o.push(n)})),i.forEach((function(t){return t.parentNode.removeChild(t)})),o.forEach((function(t){return n.appendChild(t)})),{oldTags:i,newTags:o}},lt=function(t){return Object.keys(t).reduce((function(e,n){var r=void 0!==t[n]?n+'="'+t[n]+'"':""+n;return e?e+" "+r:r}),"")},ft=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,n){return e[M[n]||n]=t[n],e}),e)},pt=function(t,e,n){switch(t){case b.TITLE:return{toComponent:function(){return t=e.title,n=e.titleAttributes,(r={key:t})[D]=!0,i=ft(n,r),[d.createElement(b.TITLE,i,t)];var t,n,r,i},toString:function(){return function(t,e,n,r){var i=lt(n),o=at(e);return i?"<"+t+' data-react-helmet="true" '+i+">"+q(o,r)+"</"+t+">":"<"+t+' data-react-helmet="true">'+q(o,r)+"</"+t+">"}(t,e.title,e.titleAttributes,n)}};case h:case y:return{toComponent:function(){return ft(e)},toString:function(){return lt(e)}};default:return{toComponent:function(){return function(t,e){return e.map((function(e,n){var r,i=((r={key:n})[D]=!0,r);return Object.keys(e).forEach((function(t){var n=M[t]||t;if(n===O||n===T){var r=e.innerHTML||e.cssText;i.dangerouslySetInnerHTML={__html:r}}else i[n]=e[t]})),d.createElement(t,i)}))}(t,e)},toString:function(){return function(t,e,n){return e.reduce((function(e,r){var i=Object.keys(r).filter((function(t){return!(t===O||t===T)})).reduce((function(t,e){var i=void 0===r[e]?e:e+'="'+q(r[e],n)+'"';return t?t+" "+i:i}),""),o=r.innerHTML||r.cssText||"",a=-1===z.indexOf(t);return e+"<"+t+' data-react-helmet="true" '+i+(a?"/>":">"+o+"</"+t+">")}),"")}(t,e,n)}}}},dt=function(t){var e=t.baseTag,n=t.bodyAttributes,r=t.encode,i=t.htmlAttributes,o=t.linkTags,a=t.metaTags,c=t.noscriptTags,u=t.scriptTags,s=t.styleTags,l=t.title,f=void 0===l?"":l,p=t.titleAttributes;return{base:pt(b.BASE,e,r),bodyAttributes:pt(h,n,r),htmlAttributes:pt(y,i,r),link:pt(b.LINK,o,r),meta:pt(b.META,a,r),noscript:pt(b.NOSCRIPT,c,r),script:pt(b.SCRIPT,u,r),style:pt(b.STYLE,s,r),title:pt(b.TITLE,{title:f,titleAttributes:p},r)}},mt=l()((function(t){return{baseTag:$([S,P],t),bodyAttributes:V(h,t),defer:Q(t,I),encode:Q(t,Z),htmlAttributes:V(y,t),linkTags:X(b.LINK,[j,S],t),metaTags:X(b.META,[A,w,x,E,C],t),noscriptTags:X(b.NOSCRIPT,[O],t),onChangeClientState:K(t),scriptTags:X(b.SCRIPT,[k,O],t),styleTags:X(b.STYLE,[T],t),title:U(t),titleAttributes:V(v,t)}}),(function(t){it&&nt(it),t.defer?it=et((function(){ot(t,(function(){it=null}))})):(ot(t),it=null)}),dt)((function(){return null})),gt=(i=mt,a=o=function(t){function e(){return Y(this,e),G(this,t.apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.shouldComponentUpdate=function(t){return!p()(this.props,t)},e.prototype.mapNestedChildrenToProps=function(t,e){if(!e)return null;switch(t.type){case b.SCRIPT:case b.NOSCRIPT:return{innerHTML:e};case b.STYLE:return{cssText:e}}throw new Error("<"+t.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},e.prototype.flattenArrayTypeChildren=function(t){var e,n=t.child,r=t.arrayTypeChildren,i=t.newChildProps,o=t.nestedChildren;return B({},r,((e={})[n.type]=[].concat(r[n.type]||[],[B({},i,this.mapNestedChildrenToProps(n,o))]),e))},e.prototype.mapObjectTypeChildren=function(t){var e,n,r=t.child,i=t.newProps,o=t.newChildProps,a=t.nestedChildren;switch(r.type){case b.TITLE:return B({},i,((e={})[r.type]=a,e.titleAttributes=B({},o),e));case b.BODY:return B({},i,{bodyAttributes:B({},o)});case b.HTML:return B({},i,{htmlAttributes:B({},o)})}return B({},i,((n={})[r.type]=B({},o),n))},e.prototype.mapArrayTypeChildrenToProps=function(t,e){var n=B({},e);return Object.keys(t).forEach((function(e){var r;n=B({},n,((r={})[e]=t[e],r))})),n},e.prototype.warnOnInvalidChildren=function(t,e){return!0},e.prototype.mapChildrenToProps=function(t,e){var n=this,r={};return d.Children.forEach(t,(function(t){if(t&&t.props){var i=t.props,o=i.children,a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,n){return e[R[n]||n]=t[n],e}),e)}(F(i,["children"]));switch(n.warnOnInvalidChildren(t,o),t.type){case b.LINK:case b.META:case b.NOSCRIPT:case b.SCRIPT:case b.STYLE:r=n.flattenArrayTypeChildren({child:t,arrayTypeChildren:r,newChildProps:a,nestedChildren:o});break;default:e=n.mapObjectTypeChildren({child:t,newProps:e,newChildProps:a,nestedChildren:o})}}})),e=this.mapArrayTypeChildrenToProps(r,e)},e.prototype.render=function(){var t=this.props,e=t.children,n=F(t,["children"]),r=B({},n);return e&&(r=this.mapChildrenToProps(e,r)),d.createElement(i,r)},H(e,null,[{key:"canUseDOM",set:function(t){i.canUseDOM=t}}]),e}(d.Component),o.propTypes={base:u().object,bodyAttributes:u().object,children:u().oneOfType([u().arrayOf(u().node),u().node]),defaultTitle:u().string,defer:u().bool,encodeSpecialCharacters:u().bool,htmlAttributes:u().object,link:u().arrayOf(u().object),meta:u().arrayOf(u().object),noscript:u().arrayOf(u().object),onChangeClientState:u().func,script:u().arrayOf(u().object),style:u().arrayOf(u().object),title:u().string,titleAttributes:u().object,titleTemplate:u().string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=i.peek,o.rewind=function(){var t=i.rewind();return t||(t=dt({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},a);gt.renderStatic=gt.rewind},2773:function(t,e,n){"use strict";var r,i=n(2784),o=(r=i)&&"object"==typeof r&&"default"in r?r.default:r;function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);t.exports=function(t,e,n){if("function"!=typeof t)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof e)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,s=[];function l(){u=t(s.map((function(t){return t.props}))),f.canUseDOM?e(u):n&&(u=n(u))}var f=function(t){var e,n;function i(){return t.apply(this,arguments)||this}n=t,(e=i).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,i.peek=function(){return u},i.rewind=function(){if(i.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var t=u;return u=void 0,s=[],t};var a=i.prototype;return a.UNSAFE_componentWillMount=function(){s.push(this),l()},a.componentDidUpdate=function(){l()},a.componentWillUnmount=function(){var t=s.indexOf(this);s.splice(t,1),l()},a.render=function(){return o.createElement(r,this.props)},i}(i.PureComponent);return a(f,"displayName","SideEffect("+function(t){return t.displayName||t.name||"Component"}(r)+")"),a(f,"canUseDOM",c),f}}},933:function(t,e,n){"use strict";n(2784);var r=n(7187),i=n(8241),o=n(8778);e.Z=function(t){var e=t.children,n=t.align,a=void 0===n?"center":n,c=t.theme,u="light"===(void 0===c?"light":c);return(0,o.tZ)(r.Z,{variant:"h4",align:a,sx:{mb:4,color:u?i._4:i.R2}},e)}},970:function(t,e,n){"use strict";n(2784);var r=n(5596),i=n(8241),o=n(8778);e.Z=function(t){var e=t.children,n=t.id,a=t.maxWidth,c=void 0===a?"lg":a,u=t.theme,s="light"===(void 0===u?"light":u);return(0,o.tZ)(r.Z,{id:n,maxWidth:!1,sx:{py:9,backgroundColor:s?i.R2:i._4,color:s?i._4:i.R2}},(0,o.tZ)(r.Z,{maxWidth:c},e))}},2148:function(t,e){"use strict";e.Z="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAxOCI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiNiMjgyMjM7fTwvc3R5bGU+PC9kZWZzPjxnIGlkPSLjg6zjgqTjg6Tjg7xfMiIgZGF0YS1uYW1lPSLjg6zjgqTjg6Tjg7wgMiI+PGcgaWQ9IuODrOOCpOODpOODvF8xLTIiIGRhdGEtbmFtZT0i44Os44Kk44Ok44O8IDEiPjxwYXRoIGlkPSJpY29ubW9uc3RyLWVtYWlsLTQiIGNsYXNzPSJjbHMtMSIgZD0iTTAsMFYxOEgyNFYwWk0yMS41MiwyLDEyLDkuNzEsMi40OCwyWk0yLDE2VjQuMThsMTAsOC4xLDEwLTguMVYxNloiLz48L2c+PC9nPjwvc3ZnPg=="}}]);
//# sourceMappingURL=commons-49860888b14d637467fd.js.map