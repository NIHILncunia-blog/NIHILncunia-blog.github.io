(self.webpackChunknihil_blog=self.webpackChunknihil_blog||[]).push([[603],{6206:function(a,t,e){"use strict";var s=e(7294),n=e(5444),l=e(3431),i=[-4,-3,-2,-1,0,1,2,3,4];t.Z=function(a){var t,e=a.currentPage,r=a.numPages,c=a.type;t="notice"===c?"/notice/page/":"/page/";var o=1===e,f=e===r,m=e-1==1?t+"1":""+t+(e-1).toString(),Z=""+t+(e+1).toString(),g=Array.from({length:r},(function(a,t){return t+1}));return(0,l.tZ)(s.Fragment,null,o?(0,l.tZ)("span",null,(0,l.tZ)("i",{className:"fas fa-angle-double-left false"})):(0,l.tZ)(n.rU,{to:t+"1",className:"page-link",rel:"prev"},(0,l.tZ)("i",{className:"fas fa-angle-double-left"})),o?(0,l.tZ)("span",null,(0,l.tZ)("i",{className:"fas fa-angle-left false"})):(0,l.tZ)(n.rU,{to:m,className:"page-link",rel:"prev"},(0,l.tZ)("i",{className:"fas fa-angle-left"})),i.map((function(a){return g.includes(e+a)&&(0,l.tZ)(n.rU,{key:""+t+(e+a),className:"page-link link-num",to:""+t+(e+a)},e+a)})),f?(0,l.tZ)("span",null,(0,l.tZ)("i",{className:"fas fa-angle-right false"})):(0,l.tZ)(n.rU,{to:Z,className:"page-link",rel:"next"},(0,l.tZ)("i",{className:"fas fa-angle-right"})),f?(0,l.tZ)("span",null,(0,l.tZ)("i",{className:"fas fa-angle-double-right false"})):(0,l.tZ)(n.rU,{to:""+t+r,className:"page-link",rel:"next"},(0,l.tZ)("i",{className:"fas fa-angle-double-right"})))}},6371:function(a,t,e){"use strict";e.r(t);var s=e(7294),n=e(5444),l=e(7215),i=e(6206),r=e(3431);t.default=function(a){var t=a.data,e=a.pageContext,c=e.currentPage,o={currentPage:c,numPages:e.numPages,type:"post"},f={pageName:"포스트 목록 ("+c+" 페이지)",pageUrl:"/blog/page/"+c,pageType:"website"};return(0,r.tZ)(s.Fragment,null,(0,r.tZ)(l.Z,f,(0,r.tZ)("div",{id:"post-list-page"},(0,r.tZ)("section",{className:"Paginator"},(0,r.tZ)(i.Z,o)),(0,r.tZ)("section",{id:"blog-post-list"},t.allMdx.nodes.map((function(a){return(0,r.tZ)("div",{className:"list-item",key:a.id},(0,r.tZ)("h3",{className:"list-title"},(0,r.tZ)(n.rU,{to:"/"+a.slug},(0,r.tZ)("i",{className:"fas fa-comment-alt"})," ",a.frontmatter.title)),(0,r.tZ)("div",{className:"list-content"},(0,r.tZ)("p",{className:"content-info"},(0,r.tZ)("span",{className:"info-name"},(0,r.tZ)("i",{className:"fas fa-align-justify"})," 미리보기"),(0,r.tZ)("br",null),(0,r.tZ)("span",{className:"list-description"},a.excerpt)),(0,r.tZ)("p",{className:"content-info"},(0,r.tZ)("span",{className:"info-name"},(0,r.tZ)("i",{className:"far fa-clock"})," 작성 날짜"),(0,r.tZ)("time",{className:"info-time",dateTime:a.frontmatter.createdAt},a.frontmatter.createString)),(0,r.tZ)("p",{className:"content-info"},(0,r.tZ)("span",{className:"info-name"},(0,r.tZ)("i",{className:"fas fa-folder-open"})," 카테고리"),a.frontmatter.category.map((function(a,t){return(0,r.tZ)(n.rU,{to:"/categories/"+a,className:"info-category",key:a+"-"+t},(0,r.tZ)("i",{className:"fas fa-folder-open"})," ",a)}))),(0,r.tZ)("p",{className:"content-info"},(0,r.tZ)("span",{className:"info-name"},(0,r.tZ)("i",{className:"fas fa-tags"})," 태그"),a.frontmatter.tag.map((function(a,t){return(0,r.tZ)(n.rU,{to:"/tags/"+a,className:"info-tag",key:a+"-"+t},(0,r.tZ)("i",{className:"fas fa-tag"})," ",a)})))))}))),(0,r.tZ)("section",{className:"Paginator"},(0,r.tZ)(i.Z,o)))))}}}]);
//# sourceMappingURL=component---src-templates-blog-posts-template-jsx-b92caa18c32de03bfea3.js.map