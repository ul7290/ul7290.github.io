(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{146:function(e,t,a){"use strict";a.r(t);var n=a(151),r=a(9),i=a(0),c=a.n(i),l=a(154),o=a(156),s=Object(n.a)("p",{target:"eeh08ew0"})({name:"1x8onlx",styles:"margin:10px 0;text-align:center;"}),u=Object(n.a)("div",{target:"eeh08ew1"})({name:"jxqdoq",styles:"margin:24px 0;"}),b=Object(n.a)("ul",{target:"eeh08ew2"})({name:"1xwh3un",styles:"list-style-type:none;text-align:center;"});t.default=function(){return Object(r.b)(c.a.Fragment,null,Object(r.b)(l.a,null),Object(r.b)("div",{className:"page-content"},Object(r.b)("div",{className:"wrapper"},Object(r.b)(s,null,Object(r.b)("p",null,"Pursues differentiated idea, a different perspective."),Object(r.b)("p",null,"Keep in simplicity")),Object(r.b)(u,null),Object(r.b)(b,null,Object(r.b)("li",null,Object(r.b)("a",{href:"https://github.com/ul7290"},"Github")),Object(r.b)("li",null,Object(r.b)("a",{href:"https://twitter.com/eeeearl"},"Twitter")),Object(r.b)("li",null,Object(r.b)("a",{href:"https://www.linkedin.com/in/hanulpark"},"LinkedIn"))))),Object(r.b)(o.a,null))}},152:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return m}),a.d(t,"StaticQueryContext",function(){return d}),a.d(t,"StaticQuery",function(){return g});var n=a(9),r=a(0),i=a.n(r),c=a(4),l=a.n(c),o=a(150),s=a.n(o);a.d(t,"Link",function(){return s.a}),a.d(t,"withPrefix",function(){return o.withPrefix}),a.d(t,"navigate",function(){return o.navigate}),a.d(t,"push",function(){return o.push}),a.d(t,"replace",function(){return o.replace}),a.d(t,"navigateTo",function(){return o.navigateTo});var u=a(155),b=a.n(u);a.d(t,"PageRenderer",function(){return b.a});var p=a(38);a.d(t,"parsePath",function(){return p.a});var d=i.a.createContext({}),g=function(e){return Object(n.b)(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):Object(n.b)("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}g.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},154:function(e,t,a){"use strict";var n=a(29),r=a(151),i=a(9),c=a(157),l=a(0),o=a.n(l),s=a(4),u=a.n(s),b=a(152),p=a(162),d=a.n(p),g=Object(r.a)("header",{target:"e3rsph00"})({name:"6gxhc5",styles:"height:120px;"}),m={name:"tvsf5l",styles:"display:inline-block;color:#838383;font-size:28px;margin-top:8px;"},h={name:"qqxhel",styles:"color:#E0E0E0;margin:0 8px;"},f=Object(r.a)("div",{target:"e3rsph01"})({name:"187t4uh",styles:"color:#E0E0E0;float:right;margin:18px 0;"}),j=function(e){var t=e.blogTitle,a=e.blogPath,r=e.blogDesc,l=e.isBlogPost;return Object(i.b)(b.StaticQuery,{query:"2187356184",render:function(e){var c=t||e.site.siteMetadata.title,s=r||e.site.siteMetadata.description,u=e.site.siteMetadata.canonicalUrl+"/"+a;return Object(i.b)(o.a.Fragment,null,Object(i.b)(d.a,null,Object(i.b)("title",null,e.site.siteMetadata.title+" - "+c),Object(i.b)("link",{rel:"canonical",href:u}),Object(i.b)("meta",{name:"description",content:s}),Object(i.b)("meta",{property:"og:url",content:u}),l?Object(i.b)("meta",{property:"og:type",content:"article"}):null,Object(i.b)("meta",{property:"og:title",content:c}),Object(i.b)("meta",{property:"og:description",content:s}),Object(i.b)("meta",{name:"twitter:card",content:"summary_large_image"}),Object(i.b)("meta",{name:"twitter:creator",content:e.site.siteMetadata.social.twitter}),Object(i.b)("meta",{name:"twitter:title",content:c}),Object(i.b)("meta",{name:"twitter:description",content:s})),Object(i.b)(g,{className:"wrapper"},Object(i.b)(b.Link,{css:Object(n.a)([m]),to:"/"},"eeearl"),Object(i.b)(f,null,Object(i.b)(b.Link,{css:h,to:"/about"},"about"),Object(i.b)(b.Link,{css:h,to:"/blog"},"blog"))))},data:c})};j.propTypes={isBlogPost:u.a.bool,blogTitle:u.a.string,blogPath:u.a.string,blogDesc:u.a.string},j.defaultProps={isBlogPost:!1,blogTitle:"",blogPath:"",blogDesc:""},t.a=j},155:function(e,t,a){var n;e.exports=(n=a(158))&&n.default||n},156:function(e,t,a){"use strict";var n=a(151),r=a(9),i=(a(0),Object(n.a)("footer",{target:"et2kv7a0"})({name:"6gxhc5",styles:"height:120px;"})),c=Object(n.a)("div",{target:"et2kv7a1"})({name:"yx7h9z",styles:"display:block;color:#838383;font-size:1em;margin-top:8px;text-align:right;"});t.a=function(){return Object(r.b)(i,{className:"wrapper"},Object(r.b)(c,null,"eeearl.com"))}},157:function(e){e.exports={data:{site:{siteMetadata:{title:"eeearl",author:"Hanul Park",description:"small talk for life live love and programing",siteUrl:"https://eeearl.com",canonicalUrl:"https://eeearl.com",social:{twitter:"@eeeearl"}}}}}},158:function(e,t,a){"use strict";a.r(t);a(52);var n=a(0),r=a.n(n),i=a(4),c=a.n(i),l=a(57),o=a(2),s=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=s}}]);
//# sourceMappingURL=component---src-pages-about-js-cb4b3b32299d45eb96b0.js.map