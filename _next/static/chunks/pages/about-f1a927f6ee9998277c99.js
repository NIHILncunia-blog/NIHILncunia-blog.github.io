(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{2167:function(e,t,n){"use strict";var r=n(3848);t.default=void 0;var o,u=(o=n(7294))&&o.__esModule?o:{default:o},a=n(1063),i=n(4651),c=n(7426);var f={};function l(e,t,n,r){if(e&&a.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;f[t+"%"+n+(o?"%"+o:"")]=!0}}var s=function(e){var t,n=!1!==e.prefetch,o=i.useRouter(),s=u.default.useMemo((function(){var t=a.resolveHref(o,e.href,!0),n=r(t,2),u=n[0],i=n[1];return{href:u,as:e.as?a.resolveHref(o,e.as):i||u}}),[o,e.href,e.as]),p=s.href,d=s.as,v=e.children,y=e.replace,b=e.shallow,h=e.scroll,g=e.locale;"string"===typeof v&&(v=u.default.createElement("a",null,v));var m=(t=u.default.Children.only(v))&&"object"===typeof t&&t.ref,w=c.useIntersection({rootMargin:"200px"}),Z=r(w,2),E=Z[0],_=Z[1],L=u.default.useCallback((function(e){E(e),m&&("function"===typeof m?m(e):"object"===typeof m&&(m.current=e))}),[m,E]);u.default.useEffect((function(){var e=_&&n&&a.isLocalURL(p),t="undefined"!==typeof g?g:o&&o.locale,r=f[p+"%"+d+(t?"%"+t:"")];e&&!r&&l(o,p,d,{locale:t})}),[d,p,_,g,n,o]);var C={ref:L,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,u,i,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(n))&&(e.preventDefault(),null==i&&r.indexOf("#")>=0&&(i=!1),t[o?"replace":"push"](n,r,{shallow:u,locale:c,scroll:i}))}(e,o,p,d,y,b,h,g)},onMouseEnter:function(e){a.isLocalURL(p)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),l(o,p,d,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var M="undefined"!==typeof g?g:o&&o.locale,R=o&&o.isLocaleDomain&&a.getDomainLocale(d,M,o&&o.locales,o&&o.domainLocales);C.href=R||a.addBasePath(a.addLocale(d,M,o&&o.defaultLocale))}return u.default.cloneElement(t,C)};t.default=s},7426:function(e,t,n){"use strict";var r=n(3848);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!a,c=o.useRef(),f=o.useState(!1),l=r(f,2),s=l[0],p=l[1],d=o.useCallback((function(e){c.current&&(c.current(),c.current=void 0),n||s||e&&e.tagName&&(c.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=i.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return i.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,u=r.observer,a=r.elements;return a.set(e,t),u.observe(e),function(){a.delete(e),u.unobserve(e),0===a.size&&(u.disconnect(),i.delete(o))}}(e,(function(e){return e&&p(e)}),{rootMargin:t}))}),[n,t,s]);return o.useEffect((function(){if(!a&&!s){var e=u.requestIdleCallback((function(){return p(!0)}));return function(){return u.cancelIdleCallback(e)}}}),[s]),[d,s]};var o=n(7294),u=n(3447),a="undefined"!==typeof IntersectionObserver;var i=new Map},2981:function(e,t,n){"use strict";n.r(t);var r=n(7294),o=n(3490),u=n(3218),a=n(7272),i=n(9808),c=n(1551),f=n(1216);t.default=function(){var e=(0,c.L)({title:"\uc18c\uac1c",url:"/about"});return(0,f.tZ)(r.Fragment,null,(0,f.tZ)(o.Z,{meta:e},(0,f.tZ)("div",{id:"blog-about-page"},(0,f.tZ)(a.xu,{top:"100"},(0,f.tZ)(a.u2,{i:"f05a",w:"900",f:"Free"},"\ub2c8\ud790\ub85c\uadf8\uc5d0 \ub300\ud574"),(0,f.tZ)(u.P,null,"\ub2c8\ud790\ub85c\uadf8\ub294 \uc81c \ub2c9\ub124\uc784\uc744 \ub530\uc11c \uc9c0\uc5c8\uc2b5\ub2c8\ub2e4. \ub2c8\ud790 + \ube14\ub85c\uadf8\ub77c\ub294 \uc758\ubbf8\ub85c \ub2c8\ud790\uc758 \ube14\ub85c\uadf8\ub2e4 \ubb50 \uc774\ub7f0 \uc758\ubbf8\ub85c\ub9d0\uc774\uc8e0. \ub2c8\ud790\ub85c\uadf8\ub294 \uc6f9 \ud504\ub85c\uadf8\ub798\ubc0d\uc744 \uc911\uc810\uc801\uc73c\ub85c \ub2e4\ub8f0 \uc0dd\uac01\uc785\ub2c8\ub2e4. \uc774 \ube14\ub85c\uadf8\ub97c \ub9cc\ub4e4\uae30 \uc774\uc804\uc5d0\ub294 \ub124\uc774\ubc84\ub098 \ud2f0\uc2a4\ud1a0\ub9ac\ub3c4 \uc6b4\uc601\ud574\ubd24\uc2b5\ub2c8\ub2e4. \uadf8\ub7f0\ub370 \uba85\uc0c9\uc774 \ud504\ub85c\uadf8\ub798\ubc0d\uc744 \uacf5\ubd80\ud558\ub294 \uc0ac\ub78c\uc778\ub370 \uc815\uc791 \uc790\uc2e0\uc758 \uc190\uc73c\ub85c \uad6c\ucd95\ud55c \ube14\ub85c\uadf8 \ud558\ub098 \uc5c6\uc5b4\uc11c\uc57c \ub418\uaca0\ub294\uac00 \uc2f6\uc5b4\uc11c \ub9ac\uc561\ud2b8\uc758 \ud504\ub808\uc784\uc6cc\ud06c\uc778 ",(0,f.tZ)(u.A,{href:"https://nextjs.org/",type:"normal"},"Next.js"),"\ub85c \uad6c\ucd95\ud588\uc2b5\ub2c8\ub2e4."),(0,f.tZ)(u.P,{bottom:"0"},"\uc81c\uac00 \uc6b4\uc601\ud588\ub358 \ub2e4\ub978 \ube14\ub85c\uadf8\ub4e4\uc5d0 \ube44\ud574 \ub354\uc6b1 \uc560\ucc29\uc774 \uc0dd\uae38 \uac83 \uac19\uc2b5\ub2c8\ub2e4. \ud63c\uc790\uc11c \ubaa8\ub4e0 \uc2dc\uc2a4\ud15c\uc744 \uad6c\ucd95\ud574\ubcf8 \uac83\uc740 \uc774\uac83\uc774 \ucc98\uc74c\uc774\uac70\ub4e0\uc694. \uc544\ubb34\ud2bc \uadf8\ub798\uc11c \uc774 \ube14\ub85c\uadf8\ub294 \ud504\ub85c\uadf8\ub798\ubc0d\uc744 \uc9d1\uc911\uc801\uc73c\ub85c \ub2e4\ub8f0 \uac83 \uac19\uace0, \uadf8 \uc678\uc758 \ucee8\ud150\uce20\ub4e4\ub3c4 \ub2e4\ub8f0 \uc608\uc815\uc785\ub2c8\ub2e4. \uc77c\ubcf8\uc5b4\ub098 \uac8c\uc784 \uac19\uc740 \ucee8\ud150\uce20\ub3c4 \ub2e4\ub8f0 \uc0dd\uac01\uc785\ub2c8\ub2e4. \ub204\uad70\uac00 \ub9ce\uc774 \ubd10\uc92c\uc73c\uba74 \ud558\ub294 \uac83\uc740 \ub9de\uc9c0\ub9cc \uadf8\uac83 \uc790\uccb4\ubcf4\ub2e4\ub294 \uc2a4\uc2a4\ub85c \uacf5\ubd80\ub97c \ud558\uace0 \uc77c\uae30\ub97c \uae30\ub85d\ud558\ub294 \ub290\ub08c\uc73c\ub85c \uc6b4\uc601\uc911\uc785\ub2c8\ub2e4.")),(0,f.tZ)(a.xu,{bottom:"100"},(0,f.tZ)(a.u2,{i:"f007",w:"900",f:"Free"},"\uc8fc\uc778\uc7a5\uc5d0 \ub300\ud574"),(0,f.tZ)(u.P,null,"\uc8fc\ub85c \uc0ac\uc6a9\ud558\ub294 \uc544\uc774\ub514\ub294 ",(0,f.tZ)(u.cK,null,"NIHILncunia"),"\uc774\uace0, \ub2c9\ub124\uc784\uc740 ",(0,f.tZ)(u.cK,null,"\ub2c8\ud790"),"\uc744 \ub9ce\uc774 \uc0ac\uc6a9\ud569\ub2c8\ub2e4. \uc77c\ubcf8\uc5b4\ub97c \uc804\uacf5\ud588\uace0, \uae00\uc744 \uc4f0\ub294 \uac83\uc744 \uc88b\uc544\ud574\uc11c \uc624\ub7ab\ub3d9\uc548 \uae00\uc744 \uc4f0\uace0 \uc788\ub294 \uae00\uc7c1\uc774\uc774\uae30\ub3c4 \ud569\ub2c8\ub2e4. \uae00\uc5d0 \ud544\uc694\ud55c \uc124\uc815\ud654\ub97c \uc9c1\uc811 \uadf8\ub9ac\uae30 \uc704\ud574 \uadf8\ub9bc\ub3c4 \uc870\uae08 \ubc30\uc6e0\uc73c\ub2c8 \uadf8\ub9bc\uc7c1\uc774 \uae30\uc9c8\ub3c4 \uc870\uae08 \uc788\uc2b5\ub2c8\ub2e4. \uc9c0\uae08\uc740 \ud504\ub85c\uadf8\ub798\ubc0d\uc5d0\ub3c4 \uc190\uc744 \ub300\uace0 \uc788\uc2b5\ub2c8\ub2e4."),(0,f.tZ)(u.P,{bottom:"0"},"\uac8c\uc784\uc744 \ud558\ub294 \uc2dc\uac04\ubcf4\ub2e4 \uc6f9 \uc11c\ud551\uc744 \ud558\uac70\ub098 \uc9c0\uae08\ucc98\ub7fc \ubb34\uc5b8\uac00\ub97c \uad6c\uc0c1\ud558\uace0, \ub9cc\ub4dc\ub294 \uac83\uc744 \uc88b\uc544\ud569\ub2c8\ub2e4. \uc6f9 \ud504\ub85c\uadf8\ub798\ubc0d\uc744 \uacf5\ubd80\ud558\uae30 \uc2dc\uc791\ud55c \uc774\uc720\ub294 \ub0a8\ub4e4\uc774 \uc77c\ubcf8\uc5b4\ub97c \uc811\ud558\uae30 \uc27d\uac8c \ud559\uc2b5 \uc0ac\uc774\ud2b8\ub97c \ud558\ub098 \ub9cc\ub4e4\uc5b4\uc11c \ub110\ub9ac \ud37c\ub728\ub9ac\uae30 \uc704\ud574\uc11c\uc600...\uc73c\ub098 \uc9c0\uae08\uc740 \ub2e4\ub978 \ud504\ub85c\uc81d\ud2b8\uc5d0\ub9cc \uc5f4\uc911\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4. \uc774 \ube14\ub85c\uadf8\uc758 \ud3ec\uc2a4\ud2b8\ub97c \ubcf4\uc2dc\uace0 \ud639\uc2dc\ub77c\ub3c4 \uc5f0\ub77d\ud560 \uc77c\uc774 \uc0dd\uae34\ub2e4\uba74 \ube14\ub85c\uadf8\uc758 \ud558\ub2e8\uc5d0 \uba54\uc77c\uc774\ub098 \uc778\uc2a4\ud0c0 \ub9c1\ud06c\uac00 \uc788\uc73c\ub2c8 \uc5b8\uc81c\ub4e0 \uc5f0\ub77d \uc8fc\uc2dc\uba74 \uac10\uc0ac\ud558\uaca0\uc2b5\ub2c8\ub2e4.")),(0,f.tZ)(i.uU,{pos:"bottom"}))))}},4613:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return n(2981)}])},1664:function(e,t,n){e.exports=n(2167)},4586:function(e,t,n){"use strict";var r;n.d(t,{Z:function(){return s}});var o=new Uint8Array(16);function u(){if(!r&&!(r="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(o)}var a=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var i=function(e){return"string"===typeof e&&a.test(e)},c=[],f=0;f<256;++f)c.push((f+256).toString(16).substr(1));var l=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(c[e[t+0]]+c[e[t+1]]+c[e[t+2]]+c[e[t+3]]+"-"+c[e[t+4]]+c[e[t+5]]+"-"+c[e[t+6]]+c[e[t+7]]+"-"+c[e[t+8]]+c[e[t+9]]+"-"+c[e[t+10]]+c[e[t+11]]+c[e[t+12]]+c[e[t+13]]+c[e[t+14]]+c[e[t+15]]).toLowerCase();if(!i(n))throw TypeError("Stringified UUID is invalid");return n};var s=function(e,t,n){var r=(e=e||{}).random||(e.rng||u)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,t){n=n||0;for(var o=0;o<16;++o)t[n+o]=r[o];return t}return l(r)}},2809:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:function(){return r}})},159:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,{Z:function(){return r}})}},function(e){e.O(0,[470,888,774,179],(function(){return t=4613,e(e.s=t);var t}));var t=e.O();_N_E=t}]);