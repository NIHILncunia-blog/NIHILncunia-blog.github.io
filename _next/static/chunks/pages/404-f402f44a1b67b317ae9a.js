(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[197],{2167:function(e,t,n){"use strict";var r=n(3848);t.default=void 0;var o,a=(o=n(7294))&&o.__esModule?o:{default:o},u=n(1063),i=n(4651),c=n(7426);var f={};function l(e,t,n,r){if(e&&u.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;f[t+"%"+n+(o?"%"+o:"")]=!0}}var s=function(e){var t,n=!1!==e.prefetch,o=i.useRouter(),s=a.default.useMemo((function(){var t=u.resolveHref(o,e.href,!0),n=r(t,2),a=n[0],i=n[1];return{href:a,as:e.as?u.resolveHref(o,e.as):i||a}}),[o,e.href,e.as]),p=s.href,d=s.as,v=e.children,g=e.replace,y=e.shallow,b=e.scroll,h=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var m=(t=a.default.Children.only(v))&&"object"===typeof t&&t.ref,w=c.useIntersection({rootMargin:"200px"}),Z=r(w,2),E=Z[0],_=Z[1],C=a.default.useCallback((function(e){E(e),m&&("function"===typeof m?m(e):"object"===typeof m&&(m.current=e))}),[m,E]);a.default.useEffect((function(){var e=_&&n&&u.isLocalURL(p),t="undefined"!==typeof h?h:o&&o.locale,r=f[p+"%"+d+(t?"%"+t:"")];e&&!r&&l(o,p,d,{locale:t})}),[d,p,_,h,n,o]);var L={ref:C,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,i,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&u.isLocalURL(n))&&(e.preventDefault(),null==i&&r.indexOf("#")>=0&&(i=!1),t[o?"replace":"push"](n,r,{shallow:a,locale:c,scroll:i}))}(e,o,p,d,g,y,b,h)},onMouseEnter:function(e){u.isLocalURL(p)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),l(o,p,d,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var R="undefined"!==typeof h?h:o&&o.locale,k=o&&o.isLocaleDomain&&u.getDomainLocale(d,R,o&&o.locales,o&&o.domainLocales);L.href=k||u.addBasePath(u.addLocale(d,R,o&&o.defaultLocale))}return a.default.cloneElement(t,L)};t.default=s},7426:function(e,t,n){"use strict";var r=n(3848);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!u,c=o.useRef(),f=o.useState(!1),l=r(f,2),s=l[0],p=l[1],d=o.useCallback((function(e){c.current&&(c.current(),c.current=void 0),n||s||e&&e.tagName&&(c.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=i.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return i.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,a=r.observer,u=r.elements;return u.set(e,t),a.observe(e),function(){u.delete(e),a.unobserve(e),0===u.size&&(a.disconnect(),i.delete(o))}}(e,(function(e){return e&&p(e)}),{rootMargin:t}))}),[n,t,s]);return o.useEffect((function(){if(!u&&!s){var e=a.requestIdleCallback((function(){return p(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[s]),[d,s]};var o=n(7294),a=n(3447),u="undefined"!==typeof IntersectionObserver;var i=new Map},9164:function(e,t,n){"use strict";n.r(t);var r=n(7294),o=n(1163),a=n(1962),u=n(8297),i=n(663),c=n(6689);var f={name:"20y874",styles:"& img{max-width:40%;display:block;margin:0 auto;border-radius:50%;}& p span{font-size:150%;font-weight:900;}"};t.default=function(){var e,t=(0,o.useRouter)().asPath.replace("/","");t.indexOf("blog/")>-1&&(e=t.replace("blog/",""));var n=f;return(0,c.tZ)(r.Fragment,null,(0,c.tZ)(u.Z,{pageName:"\uc5d0\ub7ec 404",pageURL:"/404"},(0,c.tZ)("div",{id:"blog-error-page",css:n},(0,c.tZ)(i.xu,{top:"100",bottom:"100"},(0,c.tZ)(i.u2,{i:"f00d",w:"900",f:"Free"},"\uc5d0\ub7ec 404"),(0,c.tZ)("img",{src:"/images/error-image.png",alt:"\ube14\ub85c\uadf8 \uc5d0\ub7ec \uc774\ubbf8\uc9c0"}),(0,c.tZ)(a.P,{top:"40",bottom:"0",align:"center"},(0,c.tZ)("span",null,"\ud398\uc774\uc9c0\ub97c \ucc3e\uc744 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",(0,c.tZ)("br",null),"\uacbd\ub85c\ub97c \ud655\uc778\ud574\ubcf4\uc138\uc694."),(0,c.tZ)("br",null),"\uc785\ub825\ud55c \uc8fc\uc18c: ",(0,c.tZ)(a.cK,null,t),(0,c.tZ)("br",null),t.indexOf("blog/")>-1?(0,c.tZ)(r.Fragment,null,"\ubc14\ub010 \uc8fc\uc18c: ",(0,c.tZ)(a.A,{type:"blog",href:"/".concat(e)},e)):"")))))}},9014:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/404",function(){return n(9164)}])},1664:function(e,t,n){e.exports=n(2167)},1163:function(e,t,n){e.exports=n(4651)},4586:function(e,t,n){"use strict";var r;n.d(t,{Z:function(){return s}});var o=new Uint8Array(16);function a(){if(!r&&!(r="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(o)}var u=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var i=function(e){return"string"===typeof e&&u.test(e)},c=[],f=0;f<256;++f)c.push((f+256).toString(16).substr(1));var l=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(c[e[t+0]]+c[e[t+1]]+c[e[t+2]]+c[e[t+3]]+"-"+c[e[t+4]]+c[e[t+5]]+"-"+c[e[t+6]]+c[e[t+7]]+"-"+c[e[t+8]]+c[e[t+9]]+"-"+c[e[t+10]]+c[e[t+11]]+c[e[t+12]]+c[e[t+13]]+c[e[t+14]]+c[e[t+15]]).toLowerCase();if(!i(n))throw TypeError("Stringified UUID is invalid");return n};var s=function(e,t,n){var r=(e=e||{}).random||(e.rng||a)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,t){n=n||0;for(var o=0;o<16;++o)t[n+o]=r[o];return t}return l(r)}},2809:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:function(){return r}})},159:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,{Z:function(){return r}})}},function(e){e.O(0,[692,888,774,179],(function(){return t=9014,e(e.s=t);var t}));var t=e.O();_N_E=t}]);