(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[410],{2167:function(e,t,n){"use strict";var r=n(3848);t.default=void 0;var o,a=(o=n(7294))&&o.__esModule?o:{default:o},u=n(1063),i=n(4651),c=n(7426);var f={};function l(e,t,n,r){if(e&&u.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;f[t+"%"+n+(o?"%"+o:"")]=!0}}var s=function(e){var t,n=!1!==e.prefetch,o=i.useRouter(),s=a.default.useMemo((function(){var t=u.resolveHref(o,e.href,!0),n=r(t,2),a=n[0],i=n[1];return{href:a,as:e.as?u.resolveHref(o,e.as):i||a}}),[o,e.href,e.as]),p=s.href,d=s.as,v=e.children,g=e.replace,y=e.shallow,h=e.scroll,b=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var m=(t=a.default.Children.only(v))&&"object"===typeof t&&t.ref,_=c.useIntersection({rootMargin:"200px"}),w=r(_,2),C=w[0],E=w[1],k=a.default.useCallback((function(e){C(e),m&&("function"===typeof m?m(e):"object"===typeof m&&(m.current=e))}),[m,C]);a.default.useEffect((function(){var e=E&&n&&u.isLocalURL(p),t="undefined"!==typeof b?b:o&&o.locale,r=f[p+"%"+d+(t?"%"+t:"")];e&&!r&&l(o,p,d,{locale:t})}),[d,p,E,b,n,o]);var L={ref:k,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,i,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&u.isLocalURL(n))&&(e.preventDefault(),null==i&&r.indexOf("#")>=0&&(i=!1),t[o?"replace":"push"](n,r,{shallow:a,locale:c,scroll:i}))}(e,o,p,d,g,y,h,b)},onMouseEnter:function(e){u.isLocalURL(p)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),l(o,p,d,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var Z="undefined"!==typeof b?b:o&&o.locale,M=o&&o.isLocaleDomain&&u.getDomainLocale(d,Z,o&&o.locales,o&&o.domainLocales);L.href=M||u.addBasePath(u.addLocale(d,Z,o&&o.defaultLocale))}return a.default.cloneElement(t,L)};t.default=s},7426:function(e,t,n){"use strict";var r=n(3848);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!u,c=o.useRef(),f=o.useState(!1),l=r(f,2),s=l[0],p=l[1],d=o.useCallback((function(e){c.current&&(c.current(),c.current=void 0),n||s||e&&e.tagName&&(c.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=i.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return i.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,a=r.observer,u=r.elements;return u.set(e,t),a.observe(e),function(){u.delete(e),a.unobserve(e),0===u.size&&(a.disconnect(),i.delete(o))}}(e,(function(e){return e&&p(e)}),{rootMargin:t}))}),[n,t,s]);return o.useEffect((function(){if(!u&&!s){var e=a.requestIdleCallback((function(){return p(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[s]),[d,s]};var o=n(7294),a=n(3447),u="undefined"!==typeof IntersectionObserver;var i=new Map},6589:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return s}});var r=n(7294),o=n(3490),a=n(7272),u=n(3218),i=n(3750),c=n(1551),f=n(1216);var l={name:"qu9742",styles:"margin-bottom:100px"},s=!0;t.default=function(e){var t=e.category,n=e.PostsPages,s=(0,r.useState)(0),p=s[0],d=s[1],v=(0,i.Z)(n),g=(0,r.useCallback)((function(){0!==p&&d(p-1)}),[p]),y=(0,r.useCallback)((function(){p!==n.length-1&&d(p+1)}),[p]),h=(0,r.useCallback)((function(){0!==p&&d(0)}),[p]),b=(0,r.useCallback)((function(){p!==n.length-1&&d(n.length-1)}),[p]),m=l,_=(0,c.L)({title:'"'.concat(t,'" \uad00\ub828 \ud3ec\uc2a4\ud2b8'),url:"/tags/".concat(t)});return(0,f.tZ)(r.Fragment,null,(0,f.tZ)(o.Z,{meta:_},(0,f.tZ)("div",{id:"blog-tag-page",css:m},(0,f.tZ)(a.xu,{top:"100"},(0,f.tZ)(a.u2,{i:"f002",w:"900",f:"Free"},"\u201c ",t," \u201d \uce74\ud14c\uace0\ub9ac \uad00\ub828 \ud3ec\uc2a4\ud2b8 ",v,"\uac74"),(0,f.tZ)(u.P,{bottom:"0"},"\ub2e4\ub978 \uce74\ud14c\uace0\ub9ac\ub4e4\uc744 \ubcf4\ub824\uba74 \uc0c1\ub2e8 \uba54\ub274\uc5d0\uc11c \uce74\ud14c\uace0\ub9ac \ub9c1\ud06c\ub97c \ud074\ub9ad\ud558\uc138\uc694.")),(0,f.tZ)("div",{id:"blog-post-list"},n[p].map((function(e){var t=e.frontMatter,n=e.filePath;return(0,f.tZ)(a.oV,{key:n.replace(".mdx",""),type:"post",frontMatter:t,filePath:n})}))),(0,f.tZ)(a._3,{prev:g,next:y,first:h,last:b,current:p,total:n.length}))))}},3750:function(e,t){"use strict";t.Z=function(e){for(var t=0,n=0;n<=e.length-1;n++)t+=e[n].length;return t}},7161:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/categories/[category]",function(){return n(6589)}])},1664:function(e,t,n){e.exports=n(2167)},4586:function(e,t,n){"use strict";var r;n.d(t,{Z:function(){return s}});var o=new Uint8Array(16);function a(){if(!r&&!(r="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(o)}var u=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var i=function(e){return"string"===typeof e&&u.test(e)},c=[],f=0;f<256;++f)c.push((f+256).toString(16).substr(1));var l=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(c[e[t+0]]+c[e[t+1]]+c[e[t+2]]+c[e[t+3]]+"-"+c[e[t+4]]+c[e[t+5]]+"-"+c[e[t+6]]+c[e[t+7]]+"-"+c[e[t+8]]+c[e[t+9]]+"-"+c[e[t+10]]+c[e[t+11]]+c[e[t+12]]+c[e[t+13]]+c[e[t+14]]+c[e[t+15]]).toLowerCase();if(!i(n))throw TypeError("Stringified UUID is invalid");return n};var s=function(e,t,n){var r=(e=e||{}).random||(e.rng||a)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,t){n=n||0;for(var o=0;o<16;++o)t[n+o]=r[o];return t}return l(r)}},2809:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:function(){return r}})},159:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,{Z:function(){return r}})}},function(e){e.O(0,[470,888,774,179],(function(){return t=7161,e(e.s=t);var t}));var t=e.O();_N_E=t}]);