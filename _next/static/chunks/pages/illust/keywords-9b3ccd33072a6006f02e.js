(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[955],{2167:function(e,t,n){"use strict";var r=n(3848);t.default=void 0;var o,a=(o=n(7294))&&o.__esModule?o:{default:o},i=n(1063),u=n(4651),f=n(7426);var c={};function s(e,t,n,r){if(e&&i.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;c[t+"%"+n+(o?"%"+o:"")]=!0}}var l=function(e){var t,n=!1!==e.prefetch,o=u.useRouter(),l=a.default.useMemo((function(){var t=i.resolveHref(o,e.href,!0),n=r(t,2),a=n[0],u=n[1];return{href:a,as:e.as?i.resolveHref(o,e.as):u||a}}),[o,e.href,e.as]),d=l.href,p=l.as,v=e.children,y=e.replace,m=e.shallow,g=e.scroll,h=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var w=(t=a.default.Children.only(v))&&"object"===typeof t&&t.ref,b=f.useIntersection({rootMargin:"200px"}),k=r(b,2),_=k[0],x=k[1],E=a.default.useCallback((function(e){_(e),w&&("function"===typeof w?w(e):"object"===typeof w&&(w.current=e))}),[w,_]);a.default.useEffect((function(){var e=x&&n&&i.isLocalURL(d),t="undefined"!==typeof h?h:o&&o.locale,r=c[d+"%"+p+(t?"%"+t:"")];e&&!r&&s(o,d,p,{locale:t})}),[p,d,x,h,n,o]);var Z={ref:E,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,u,f){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(n))&&(e.preventDefault(),null==u&&r.indexOf("#")>=0&&(u=!1),t[o?"replace":"push"](n,r,{shallow:a,locale:f,scroll:u}))}(e,o,d,p,y,m,g,h)},onMouseEnter:function(e){i.isLocalURL(d)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),s(o,d,p,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var C="undefined"!==typeof h?h:o&&o.locale,L=o&&o.isLocaleDomain&&i.getDomainLocale(p,C,o&&o.locales,o&&o.domainLocales);Z.href=L||i.addBasePath(i.addLocale(p,C,o&&o.defaultLocale))}return a.default.cloneElement(t,Z)};t.default=l},7426:function(e,t,n){"use strict";var r=n(3848);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!i,f=o.useRef(),c=o.useState(!1),s=r(c,2),l=s[0],d=s[1],p=o.useCallback((function(e){f.current&&(f.current(),f.current=void 0),n||l||e&&e.tagName&&(f.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=u.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return u.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,a=r.observer,i=r.elements;return i.set(e,t),a.observe(e),function(){i.delete(e),a.unobserve(e),0===i.size&&(a.disconnect(),u.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,l]);return o.useEffect((function(){if(!i&&!l){var e=a.requestIdleCallback((function(){return d(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[l]),[p,l]};var o=n(7294),a=n(3447),i="undefined"!==typeof IntersectionObserver;var u=new Map},9076:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return l}});var r=n(7294),o=n(6689),a=n(1664),i=n(8297),u=n(1962),f=n(3175),c=n(1886),s=n(663),l=!0;t.default=function(e){var t=e.keywords,n=(0,o.iv)("text-align:center;&>a{padding:5px 10px;display:inline-block;margin:4px;border-radius:10px;color:#555555;letter-spacing:-1px;background-color:#33333330;&:before{content:'\\f1fc';font-weight:900;font-family:'Font Awesome 5 Free',sans-serif;margin-right:5px;}&:hover{color:#ffffff;background-color:#333333;}}@media (min-width: 1px) and (max-width: 600px){&>a{font-size:",f.Z[1],";}}@media (min-width: 601px) and (max-width: 800px){&>a{font-size:",f.Z[2],";}}@media (min-width: 801px){&>a{font-size:",f.Z[3],";}}","","");return(0,o.tZ)(r.Fragment,null,(0,o.tZ)(i.Z,{pageName:"\uc77c\ub7ec\uc2a4\ud2b8 \ud0a4\uc6cc\ub4dc \ubaa9\ub85d",pageURL:"/illust/keywords"},(0,o.tZ)("div",{id:"blog-keywords-page"},(0,o.tZ)(s.xu,{bottom:"100",top:"100"},(0,o.tZ)(s.u2,{i:"f1fc",w:"900",f:"Free"},"\uc77c\ub7ec\uc2a4\ud2b8 \ud0a4\uc6cc\ub4dc \ubaa9\ub85d"),(0,o.tZ)(u.P,null,"\uc774 \ud398\uc774\uc9c0\ub294 \uc77c\ub7ec\uc2a4\ud2b8\uc640 \uad00\ub828\ub41c \ud0a4\uc6cc\ub4dc\ub4e4\uc774 \ubaa8\uc5ec\uc788\ub294 \ubaa9\ub85d\uc744 \ubcf4\uc5ec\uc90d\ub2c8\ub2e4. \uac01 \ud0a4\uc6cc\ub4dc\uc5d0\ub294 \ub9c1\ud06c\uac00 \ub418\uc5b4\uc788\uace0 \uc5b4\ub5a4 \ud0a4\uc6cc\ub4dc\uac00 \uc5b4\ub5a4 \uc77c\ub7ec\uc2a4\ud2b8\uc640 \uad00\ub828\uc774 \uc788\ub294\uc9c0 \ud655\uc778 \ud560 \uc218 \uc788\ub294 \ud0a4\uc6cc\ub4dc \ubcc4 \uc77c\ub7ec\uc2a4\ud2b8 \ubaa9\ub85d\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4. \uc22b\uc790\ub294 \uad00\ub828\ub41c \uc77c\ub7ec\uc2a4\ud2b8\uc758 \uc218\ub97c \uc758\ubbf8\ud569\ub2c8\ub2e4."),(0,o.tZ)("div",{css:n},t.map((function(e){return(0,o.tZ)(a.default,{key:e.keywordName,href:"/illust/keywords/".concat(e.keywordName)},(0,o.tZ)("a",null,e.keywordName," (",e.keywordCount,"\uac74)"))}))))),(0,o.tZ)(c.uU,{pos:"bottom",margin:"100"})))}},6132:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/illust/keywords",function(){return n(9076)}])},1664:function(e,t,n){e.exports=n(2167)},1163:function(e,t,n){e.exports=n(4651)},4586:function(e,t,n){"use strict";var r;n.d(t,{Z:function(){return l}});var o=new Uint8Array(16);function a(){if(!r&&!(r="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(o)}var i=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var u=function(e){return"string"===typeof e&&i.test(e)},f=[],c=0;c<256;++c)f.push((c+256).toString(16).substr(1));var s=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(f[e[t+0]]+f[e[t+1]]+f[e[t+2]]+f[e[t+3]]+"-"+f[e[t+4]]+f[e[t+5]]+"-"+f[e[t+6]]+f[e[t+7]]+"-"+f[e[t+8]]+f[e[t+9]]+"-"+f[e[t+10]]+f[e[t+11]]+f[e[t+12]]+f[e[t+13]]+f[e[t+14]]+f[e[t+15]]).toLowerCase();if(!u(n))throw TypeError("Stringified UUID is invalid");return n};var l=function(e,t,n){var r=(e=e||{}).random||(e.rng||a)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,t){n=n||0;for(var o=0;o<16;++o)t[n+o]=r[o];return t}return s(r)}},2809:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:function(){return r}})},159:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,{Z:function(){return r}})}},function(e){e.O(0,[692,888,774,179],(function(){return t=6132,e(e.s=t);var t}));var t=e.O();_N_E=t}]);