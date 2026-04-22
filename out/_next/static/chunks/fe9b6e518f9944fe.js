(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,131763,185800,e=>{"use strict";var t=e.i(344440);let r=(...e)=>e.filter((e,t,r)=>!!e&&""!==e.trim()&&r.indexOf(e)===t).join(" ").trim(),a=e=>{let t=e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,r)=>r?r.toUpperCase():t.toLowerCase());return t.charAt(0).toUpperCase()+t.slice(1)};var n={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let o=(0,t.forwardRef)(({color:e="currentColor",size:a=24,strokeWidth:o=2,absoluteStrokeWidth:i,className:s="",children:l,iconNode:c,...d},u)=>(0,t.createElement)("svg",{ref:u,...n,width:a,height:a,stroke:e,strokeWidth:i?24*Number(o)/Number(a):o,className:r("lucide",s),...!l&&!(e=>{for(let t in e)if(t.startsWith("aria-")||"role"===t||"title"===t)return!0;return!1})(d)&&{"aria-hidden":"true"},...d},[...c.map(([e,r])=>(0,t.createElement)(e,r)),...Array.isArray(l)?l:[l]]));e.s(["default",()=>o],185800);let i=(e,n)=>{let i=(0,t.forwardRef)(({className:i,...s},l)=>(0,t.createElement)(o,{ref:l,iconNode:n,className:r(`lucide-${a(e).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,`lucide-${e}`,i),...s}));return i.displayName=a(e),i};e.s(["default",()=>i],131763)},429779,e=>{"use strict";var t=e.i(344440);function r(e,t){if("function"==typeof e)return e(t);null!=e&&(e.current=t)}function a(...e){return t=>{let a=!1,n=e.map(e=>{let n=r(e,t);return a||"function"!=typeof n||(a=!0),n});if(a)return()=>{for(let t=0;t<n.length;t++){let a=n[t];"function"==typeof a?a():r(e[t],null)}}}}function n(...e){return t.useCallback(a(...e),e)}e.s(["composeRefs",()=>a,"useComposedRefs",()=>n])},167881,493739,294237,e=>{"use strict";var t=e.i(687433),r=e.i(344440),a=e.i(429779),n=Symbol.for("react.lazy"),o=r[" use ".trim().toString()];function i(e){var t;return null!=e&&"object"==typeof e&&"$$typeof"in e&&e.$$typeof===n&&"_payload"in e&&"object"==typeof(t=e._payload)&&null!==t&&"then"in t}function s(e){var n;let s,l=(n=e,(s=r.forwardRef((e,t)=>{let{children:n,...s}=e;if(i(n)&&"function"==typeof o&&(n=o(n._payload)),r.isValidElement(n)){var l;let e,o,i=(l=n,(o=(e=Object.getOwnPropertyDescriptor(l.props,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning)?l.ref:(o=(e=Object.getOwnPropertyDescriptor(l,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning)?l.props.ref:l.props.ref||l.ref),c=function(e,t){let r={...t};for(let a in t){let n=e[a],o=t[a];/^on[A-Z]/.test(a)?n&&o?r[a]=(...e)=>{let t=o(...e);return n(...e),t}:n&&(r[a]=n):"style"===a?r[a]={...n,...o}:"className"===a&&(r[a]=[n,o].filter(Boolean).join(" "))}return{...e,...r}}(s,n.props);return n.type!==r.Fragment&&(c.ref=t?(0,a.composeRefs)(t,i):i),r.cloneElement(n,c)}return r.Children.count(n)>1?r.Children.only(null):null})).displayName=`${n}.SlotClone`,s),c=r.forwardRef((e,a)=>{let{children:n,...s}=e;i(n)&&"function"==typeof o&&(n=o(n._payload));let c=r.Children.toArray(n),u=c.find(d);if(u){let e=u.props.children,n=c.map(t=>t!==u?t:r.Children.count(e)>1?r.Children.only(null):r.isValidElement(e)?e.props.children:null);return(0,t.jsx)(l,{...s,ref:a,children:r.isValidElement(e)?r.cloneElement(e,void 0,n):null})}return(0,t.jsx)(l,{...s,ref:a,children:n})});return c.displayName=`${e}.Slot`,c}var l=s("Slot"),c=Symbol("radix.slottable");function d(e){return r.isValidElement(e)&&"function"==typeof e.type&&"__radixId"in e.type&&e.type.__radixId===c}e.s(["Slot",()=>l,"createSlot",()=>s],493739);var u=e.i(7284);let m=e=>"boolean"==typeof e?`${e}`:0===e?"0":e,h=u.clsx,f=(e,t)=>r=>{var a;if((null==t?void 0:t.variants)==null)return h(e,null==r?void 0:r.class,null==r?void 0:r.className);let{variants:n,defaultVariants:o}=t,i=Object.keys(n).map(e=>{let t=null==r?void 0:r[e],a=null==o?void 0:o[e];if(null===t)return null;let i=m(t)||m(a);return n[e][i]}),s=r&&Object.entries(r).reduce((e,t)=>{let[r,a]=t;return void 0===a||(e[r]=a),e},{});return h(e,i,null==t||null==(a=t.compoundVariants)?void 0:a.reduce((e,t)=>{let{class:r,className:a,...n}=t;return Object.entries(n).every(e=>{let[t,r]=e;return Array.isArray(r)?r.includes({...o,...s}[t]):({...o,...s})[t]===r})?[...e,r,a]:e},[]),null==r?void 0:r.class,null==r?void 0:r.className)};e.s(["cva",0,f],294237);var g=e.i(647163);let p=f("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9","icon-sm":"size-8","icon-lg":"size-10"}},defaultVariants:{variant:"default",size:"default"}});function y({className:e,variant:r,size:a,asChild:n=!1,...o}){return(0,t.jsx)(n?l:"button",{"data-slot":"button",className:(0,g.cn)(p({variant:r,size:a,className:e})),...o})}e.s(["Button",()=>y],167881)},445694,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"warnOnce",{enumerable:!0,get:function(){return a}});let a=e=>{}},136770,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"useMergedRef",{enumerable:!0,get:function(){return n}});let a=e.r(344440);function n(e,t){let r=(0,a.useRef)(null),n=(0,a.useRef)(null);return(0,a.useCallback)(a=>{if(null===a){let e=r.current;e&&(r.current=null,e());let t=n.current;t&&(n.current=null,t())}else e&&(r.current=o(e,a)),t&&(n.current=o(t,a))},[e,t])}function o(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},822173,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a={assign:function(){return l},searchParamsToUrlQuery:function(){return o},urlQueryToSearchParams:function(){return s}};for(var n in a)Object.defineProperty(r,n,{enumerable:!0,get:a[n]});function o(e){let t={};for(let[r,a]of e.entries()){let e=t[r];void 0===e?t[r]=a:Array.isArray(e)?e.push(a):t[r]=[e,a]}return t}function i(e){return"string"==typeof e?e:("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function s(e){let t=new URLSearchParams;for(let[r,a]of Object.entries(e))if(Array.isArray(a))for(let e of a)t.append(r,i(e));else t.set(r,i(a));return t}function l(e,...t){for(let r of t){for(let t of r.keys())e.delete(t);for(let[t,a]of r.entries())e.append(t,a)}return e}},848077,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a={formatUrl:function(){return s},formatWithValidation:function(){return c},urlObjectKeys:function(){return l}};for(var n in a)Object.defineProperty(r,n,{enumerable:!0,get:a[n]});let o=e.r(744066)._(e.r(822173)),i=/https?|ftp|gopher|file/;function s(e){let{auth:t,hostname:r}=e,a=e.protocol||"",n=e.pathname||"",s=e.hash||"",l=e.query||"",c=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?c=t+e.host:r&&(c=t+(~r.indexOf(":")?`[${r}]`:r),e.port&&(c+=":"+e.port)),l&&"object"==typeof l&&(l=String(o.urlQueryToSearchParams(l)));let d=e.search||l&&`?${l}`||"";return a&&!a.endsWith(":")&&(a+=":"),e.slashes||(!a||i.test(a))&&!1!==c?(c="//"+(c||""),n&&"/"!==n[0]&&(n="/"+n)):c||(c=""),s&&"#"!==s[0]&&(s="#"+s),d&&"?"!==d[0]&&(d="?"+d),n=n.replace(/[?#]/g,encodeURIComponent),d=d.replace("#","%23"),`${a}${c}${n}${d}${s}`}let l=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function c(e){return s(e)}},298334,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a={DecodeError:function(){return y},MiddlewareNotFoundError:function(){return x},MissingStaticPage:function(){return w},NormalizeError:function(){return b},PageNotFoundError:function(){return v},SP:function(){return g},ST:function(){return p},WEB_VITALS:function(){return o},execOnce:function(){return i},getDisplayName:function(){return u},getLocationOrigin:function(){return c},getURL:function(){return d},isAbsoluteUrl:function(){return l},isResSent:function(){return m},loadGetInitialProps:function(){return f},normalizeRepeatedSlashes:function(){return h},stringifyError:function(){return C}};for(var n in a)Object.defineProperty(r,n,{enumerable:!0,get:a[n]});let o=["CLS","FCP","FID","INP","LCP","TTFB"];function i(e){let t,r=!1;return(...a)=>(r||(r=!0,t=e(...a)),t)}let s=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,l=e=>s.test(e);function c(){let{protocol:e,hostname:t,port:r}=window.location;return`${e}//${t}${r?":"+r:""}`}function d(){let{href:e}=window.location,t=c();return e.substring(t.length)}function u(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function m(e){return e.finished||e.headersSent}function h(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?`?${t.slice(1).join("?")}`:"")}async function f(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await f(t.Component,t.ctx)}:{};let a=await e.getInitialProps(t);if(r&&m(r))return a;if(!a)throw Object.defineProperty(Error(`"${u(e)}.getInitialProps()" should resolve to an object. But found "${a}" instead.`),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});return a}let g="u">typeof performance,p=g&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class y extends Error{}class b extends Error{}class v extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class w extends Error{constructor(e,t){super(),this.message=`Failed to load static file for page: ${e} ${t}`}}class x extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function C(e){return JSON.stringify({message:e.message,stack:e.stack})}},532192,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"isLocalURL",{enumerable:!0,get:function(){return o}});let a=e.r(298334),n=e.r(632957);function o(e){if(!(0,a.isAbsoluteUrl)(e))return!0;try{let t=(0,a.getLocationOrigin)(),r=new URL(e,t);return r.origin===t&&(0,n.hasBasePath)(r.pathname)}catch(e){return!1}}},92364,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"errorOnce",{enumerable:!0,get:function(){return a}});let a=e=>{}},868183,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a={default:function(){return y},useLinkStatus:function(){return v}};for(var n in a)Object.defineProperty(r,n,{enumerable:!0,get:a[n]});let o=e.r(744066),i=e.r(687433),s=o._(e.r(344440)),l=e.r(848077),c=e.r(331270),d=e.r(136770),u=e.r(298334),m=e.r(439468);e.r(445694);let h=e.r(849629),f=e.r(532192),g=e.r(795130);function p(e){return"string"==typeof e?e:(0,l.formatUrl)(e)}function y(t){var r;let a,n,o,[l,y]=(0,s.useOptimistic)(h.IDLE_LINK_STATUS),v=(0,s.useRef)(null),{href:w,as:x,children:C,prefetch:j=null,passHref:k,replace:A,shallow:N,scroll:S,onClick:z,onMouseEnter:T,onTouchStart:P,legacyBehavior:R=!1,onNavigate:D,ref:B,unstable_dynamicOnHover:E,...M}=t;a=C,R&&("string"==typeof a||"number"==typeof a)&&(a=(0,i.jsx)("a",{children:a}));let I=s.default.useContext(c.AppRouterContext),O=!1!==j,L=!1!==j?null===(r=j)||"auto"===r?g.FetchStrategy.PPR:g.FetchStrategy.Full:g.FetchStrategy.PPR,{href:_,as:F}=s.default.useMemo(()=>{let e=p(w);return{href:e,as:x?p(x):e}},[w,x]);if(R){if(a?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});n=s.default.Children.only(a)}let U=R?n&&"object"==typeof n&&n.ref:B,q=s.default.useCallback(e=>(null!==I&&(v.current=(0,h.mountLinkInstance)(e,_,I,L,O,y)),()=>{v.current&&((0,h.unmountLinkForCurrentNavigation)(v.current),v.current=null),(0,h.unmountPrefetchableInstance)(e)}),[O,_,I,L,y]),$={ref:(0,d.useMergedRef)(q,U),onClick(t){R||"function"!=typeof z||z(t),R&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(t),!I||t.defaultPrevented||function(t,r,a,n,o,i,l){if("u">typeof window){let c,{nodeName:d}=t.currentTarget;if("A"===d.toUpperCase()&&((c=t.currentTarget.getAttribute("target"))&&"_self"!==c||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,f.isLocalURL)(r)){o&&(t.preventDefault(),location.replace(r));return}if(t.preventDefault(),l){let e=!1;if(l({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:u}=e.r(770701);s.default.startTransition(()=>{u(a||r,o?"replace":"push",i??!0,n.current)})}}(t,_,F,v,A,S,D)},onMouseEnter(e){R||"function"!=typeof T||T(e),R&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),I&&O&&(0,h.onNavigationIntent)(e.currentTarget,!0===E)},onTouchStart:function(e){R||"function"!=typeof P||P(e),R&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),I&&O&&(0,h.onNavigationIntent)(e.currentTarget,!0===E)}};return(0,u.isAbsoluteUrl)(F)?$.href=F:R&&!k&&("a"!==n.type||"href"in n.props)||($.href=(0,m.addBasePath)(F)),o=R?s.default.cloneElement(n,$):(0,i.jsx)("a",{...M,...$,children:a}),(0,i.jsx)(b.Provider,{value:l,children:o})}e.r(92364);let b=(0,s.createContext)(h.IDLE_LINK_STATUS),v=()=>(0,s.useContext)(b);("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},508037,e=>{"use strict";e.s(["siteConfig",0,{name:"ARZ Home Remodeling",tagline:"Premium Home Remodeling Services",description:"Professional bathroom and kitchen remodeling services in Chandler, Arizona. Top-rated home remodeling contractors specializing in luxury renovations.",url:"https://arzhomeremodeling.com",phone:"(480) 555-0123",email:"info@arzhomeremodeling.com",address:{street:"123 Main Street",city:"Chandler",state:"Arizona",zip:"85225",full:"123 Main Street, Chandler, AZ 85225",coordinates:{lat:33.3062,lng:-111.8413}},hours:{weekdays:"8:00 AM - 6:00 PM",saturday:"9:00 AM - 4:00 PM",sunday:"Closed"},social:{facebook:"https://facebook.com/arzhomeremodeling",instagram:"https://instagram.com/arzhomeremodeling",twitter:"https://twitter.com/arzhomeremodeling",pinterest:"https://pinterest.com/arzhomeremodeling"},navigation:[{name:"Home",href:"/"},{name:"Services",href:"/services"},{name:"About",href:"/about"},{name:"Contact",href:"/contact"}],serviceAreas:["Chandler","Gilbert","Mesa","Tempe","Ahwatukee","Sun Lakes"]}])},983828,e=>{"use strict";let t=(0,e.i(131763).default)("trending-up",[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]]);e.s(["default",()=>t])},38132,e=>{"use strict";var t=e.i(983828);e.s(["TrendingUp",()=>t.default])},839274,e=>{"use strict";let t=(0,e.i(131763).default)("clock",[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);e.s(["default",()=>t])},972726,e=>{"use strict";var t=e.i(839274);e.s(["Clock",()=>t.default])},694805,e=>{"use strict";let t=(0,e.i(131763).default)("arrow-right",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);e.s(["default",()=>t])},490246,e=>{"use strict";var t=e.i(694805);e.s(["ArrowRight",()=>t.default])},492559,e=>{"use strict";var t=e.i(88222);e.s(["Plus",()=>t.default])},374701,106154,217276,102644,394786,e=>{"use strict";var t=e.i(687433),r=e.i(344440),a=e.i(162924),n=e.i(791432),o=e.i(868183),i=e.i(647163),s=e.i(508037),l=e.i(167881),c=e.i(45315),c=c,d=e.i(305149);e.s(["FileText",()=>d.default],106154);var d=d,u=e.i(304477);e.s(["Image",()=>u.default],217276);var u=u,m=e.i(664984);e.s(["MessageSquare",()=>m.default],102644);var m=m,h=e.i(336512);e.s(["Users",()=>h.default],394786);var h=h,f=e.i(39404),f=f,g=e.i(51861),g=g,p=e.i(818151),y=e.i(715381),y=y;let b=[{href:"/admin/dashboard",label:"Dashboard",icon:c.default},{href:"/admin/leads",label:"Leads",icon:h.default},{href:"/admin/blog",label:"Blog Posts",icon:d.default},{href:"/admin/categories",label:"Categories",icon:y.default},{href:"/admin/gallery",label:"Gallery",icon:u.default},{href:"/admin/testimonials",label:"Testimonials",icon:m.default},{href:"/admin/settings",label:"Settings",icon:f.default}];function v(){let e=(0,a.usePathname)(),{signOut:r,user:c}=(0,n.useAuth)();return(0,t.jsxs)("aside",{className:"w-64 min-h-screen bg-card border-r border-border flex flex-col",children:[(0,t.jsx)("div",{className:"p-6 border-b border-border",children:(0,t.jsxs)(o.default,{href:"/admin/dashboard",className:"flex items-center gap-2",children:[(0,t.jsx)("div",{className:"w-8 h-8 bg-primary rounded-lg flex items-center justify-center",children:(0,t.jsx)("span",{className:"text-primary-foreground font-bold text-sm",children:s.siteConfig.name.charAt(0)})}),(0,t.jsx)("span",{className:"font-serif font-semibold text-foreground",children:"Admin Panel"})]})}),(0,t.jsx)("nav",{className:"flex-1 p-4",children:(0,t.jsx)("ul",{className:"space-y-1",children:b.map(r=>{let a=e===r.href||e.startsWith(r.href+"/");return(0,t.jsx)("li",{children:(0,t.jsxs)(o.default,{href:r.href,className:(0,i.cn)("flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",a?"bg-primary text-primary-foreground":"text-muted-foreground hover:bg-secondary hover:text-foreground"),children:[(0,t.jsx)(r.icon,{className:"h-4 w-4"}),r.label]})},r.href)})})}),(0,t.jsxs)("div",{className:"p-4 border-t border-border space-y-2",children:[(0,t.jsx)(l.Button,{asChild:!0,variant:"outline",className:"w-full justify-start",size:"sm",children:(0,t.jsxs)(o.default,{href:"/",target:"_blank",children:[(0,t.jsx)(p.Home,{className:"mr-2 h-4 w-4"}),"View Site"]})}),(0,t.jsx)("div",{className:"px-3 py-2",children:(0,t.jsx)("p",{className:"text-xs text-muted-foreground truncate",children:c?.email})}),(0,t.jsxs)(l.Button,{variant:"ghost",className:"w-full justify-start text-muted-foreground hover:text-destructive",size:"sm",onClick:()=>r(),children:[(0,t.jsx)(g.default,{className:"mr-2 h-4 w-4"}),"Sign Out"]})]})]})}var w=e.i(392120);function x({children:e,title:o,description:i,actions:s}){let{user:l,loading:c,isAdmin:d}=(0,n.useAuth)(),u=(0,a.useRouter)();return((0,r.useEffect)(()=>{c||l&&d||u.push("/admin/login")},[l,c,d,u]),c)?(0,t.jsx)("div",{className:"min-h-screen flex items-center justify-center bg-background",children:(0,t.jsx)(w.Loader2,{className:"h-8 w-8 animate-spin text-primary"})}):l&&d?(0,t.jsxs)("div",{className:"min-h-screen flex bg-background",children:[(0,t.jsx)(v,{}),(0,t.jsx)("main",{className:"flex-1 overflow-auto",children:(0,t.jsxs)("div",{className:"p-8",children:[(0,t.jsxs)("div",{className:"flex items-center justify-between mb-8",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h1",{className:"text-2xl font-serif font-semibold text-foreground",children:o}),i&&(0,t.jsx)("p",{className:"mt-1 text-sm text-muted-foreground",children:i})]}),s&&(0,t.jsx)("div",{className:"flex items-center gap-2",children:s})]}),e]})})]}):null}e.s(["AdminShell",()=>x],374701)},265302,e=>{"use strict";let t=(0,e.i(131763).default)("loader-circle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);e.s(["default",()=>t])},392120,e=>{"use strict";var t=e.i(265302);e.s(["Loader2",()=>t.default])},38012,e=>{"use strict";let t=(0,e.i(131763).default)("house",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]]);e.s(["default",()=>t])},818151,e=>{"use strict";var t=e.i(38012);e.s(["Home",()=>t.default])},162924,(e,t,r)=>{t.exports=e.r(537109)},970065,e=>{"use strict";var t=e.i(687433),r=e.i(647163);function a({className:e,...a}){return(0,t.jsx)("div",{"data-slot":"card",className:(0,r.cn)("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",e),...a})}function n({className:e,...a}){return(0,t.jsx)("div",{"data-slot":"card-header",className:(0,r.cn)("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",e),...a})}function o({className:e,...a}){return(0,t.jsx)("div",{"data-slot":"card-title",className:(0,r.cn)("leading-none font-semibold",e),...a})}function i({className:e,...a}){return(0,t.jsx)("div",{"data-slot":"card-description",className:(0,r.cn)("text-muted-foreground text-sm",e),...a})}function s({className:e,...a}){return(0,t.jsx)("div",{"data-slot":"card-content",className:(0,r.cn)("px-6",e),...a})}e.s(["Card",()=>a,"CardContent",()=>s,"CardDescription",()=>i,"CardHeader",()=>n,"CardTitle",()=>o])},45315,e=>{"use strict";let t=(0,e.i(131763).default)("layout-dashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);e.s(["default",()=>t])},305149,e=>{"use strict";let t=(0,e.i(131763).default)("file-text",[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);e.s(["default",()=>t])},304477,e=>{"use strict";let t=(0,e.i(131763).default)("image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);e.s(["default",()=>t])},664984,e=>{"use strict";let t=(0,e.i(131763).default)("message-square",[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]]);e.s(["default",()=>t])},336512,e=>{"use strict";let t=(0,e.i(131763).default)("users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]]);e.s(["default",()=>t])},39404,e=>{"use strict";let t=(0,e.i(131763).default)("settings",[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);e.s(["default",()=>t])},51861,e=>{"use strict";let t=(0,e.i(131763).default)("log-out",[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]]);e.s(["default",()=>t])},715381,e=>{"use strict";let t=(0,e.i(131763).default)("folder-open",[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]);e.s(["default",()=>t])},88222,e=>{"use strict";let t=(0,e.i(131763).default)("plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);e.s(["default",()=>t])},521404,e=>{"use strict";let t={title:"Complete Guide to Bathroom Remodeling in Chandler, Arizona",slug:"complete-guide-bathroom-remodeling-chandler-arizona",excerpt:"Everything you need to know about bathroom remodeling in Chandler, Arizona. From planning and budgeting to choosing materials and hiring the right contractor.",content:`
# Complete Guide to Bathroom Remodeling in Chandler, Arizona

Are you considering a bathroom remodel in Chandler, Arizona? Whether you're looking to update an outdated space, increase your home's value, or create a more functional bathroom for your family, this comprehensive guide will walk you through everything you need to know about bathroom remodeling in the Chandler area.

## Why Remodel Your Bathroom?

Bathroom remodeling is one of the best investments you can make in your home. Here are the top reasons homeowners in Chandler, Arizona choose to renovate their bathrooms:

### Increase Home Value

A well-designed bathroom renovation can yield a return on investment (ROI) of 60-70% or more. In the competitive Chandler real estate market, updated bathrooms are a key selling point that can help your home stand out.

### Improve Energy Efficiency

Modern fixtures, water-saving toilets, and energy-efficient lighting can significantly reduce your utility bills. Arizona's hot climate makes water conservation especially important, and low-flow fixtures can save thousands of gallons annually.

### Enhance Daily Comfort

Your bathroom is one of the most-used rooms in your home. A thoughtful remodel can transform your daily routine, creating a spa-like retreat where you can relax and unwind.

### Address Safety Concerns

Older bathrooms may have safety hazards such as slippery floors, poor lighting, or outdated electrical systems. A remodel allows you to incorporate safety features like grab bars, non-slip flooring, and proper ventilation.

## Planning Your Bathroom Remodel

Proper planning is essential for a successful bathroom renovation. Here's how to get started:

### Set a Realistic Budget

Bathroom remodeling costs in Chandler, Arizona typically range from $10,000 to $30,000 for a standard bathroom, with luxury renovations costing $50,000 or more. Factors that influence cost include:

- Size of the bathroom
- Quality of materials
- Extent of structural changes
- Plumbing and electrical work
- Labor costs in the Chandler area

We recommend setting aside 10-15% of your budget for unexpected expenses that may arise during the project.

### Define Your Goals

Before starting any work, clearly define what you want to achieve:

- Are you doing a cosmetic update or a complete gut renovation?
- Do you need to reconfigure the layout?
- What style are you going for? Modern, traditional, transitional?
- Are there specific features you must have, such as a walk-in shower or double vanity?

### Choose a Timeline

Bathroom remodels typically take 2-6 weeks depending on the scope of work. Consider timing your project during a season when being without a bathroom is less disruptive. In Arizona's mild winter months, many homeowners choose to complete renovations when outdoor activities are less appealing.

## Bathroom Design Trends in Arizona

Chandler homeowners are embracing several exciting design trends:

### Desert-Inspired Palettes

Natural earth tones, terracotta accents, and warm neutrals reflect Arizona's beautiful landscape. These colors create a soothing atmosphere while complementing the desert environment visible through your windows.

### Spa-Like Features

Large walk-in showers with rainfall showerheads, freestanding soaking tubs, and heated floors bring luxury spa experiences home. These features are especially popular in master bathroom renovations.

### Sustainable Materials

Eco-friendly materials like recycled glass countertops, bamboo cabinetry, and reclaimed wood accents appeal to environmentally conscious homeowners while adding unique character to the space.

### Open and Airy Layouts

Frameless glass shower enclosures, floating vanities, and strategic mirror placement make bathrooms feel larger and more open—perfect for Arizona's indoor-outdoor lifestyle.

## Choosing Materials for Arizona's Climate

Chandler's desert climate requires careful material selection:

### Flooring

Porcelain and ceramic tiles are excellent choices for Arizona bathrooms. They stay cool underfoot in summer and are resistant to moisture and humidity. Natural stone like travertine is also popular but requires more maintenance.

### Countertops

Quartz countertops are the top choice for Arizona bathrooms due to their durability and low maintenance. They resist staining, don't require sealing, and come in a wide variety of colors and patterns.

### Cabinetry

Solid wood or high-quality plywood cabinets with proper sealing are essential. Arizona's low humidity can cause some materials to crack or warp, so choose wisely.

### Ventilation

Proper ventilation is critical in Arizona. Even with low outdoor humidity, bathrooms generate significant moisture. Install a quality exhaust fan rated for your bathroom's square footage.

## The Remodeling Process: What to Expect

Understanding the remodeling process helps set realistic expectations:

### Step 1: Consultation and Design (Week 1-2)

Your remodeling contractor will assess your space, discuss your goals, and create a design plan. This includes selecting materials, fixtures, and finalizing the budget.

### Step 2: Demolition (Days 1-3)

The existing bathroom is carefully demolished, including removing old fixtures, flooring, and any walls that need modification.

### Step 3: Rough-In Work (Days 4-7)

Plumbing and electrical systems are updated or relocated as needed. This is when any structural changes occur.

### Step 4: Installation (Days 8-14)

New drywall, flooring, shower/tub, vanity, and fixtures are installed. Tile work and finishing details are completed.

### Step 5: Final Touches (Days 15-21)

Painting, hardware installation, final plumbing connections, and thorough cleaning prepare your new bathroom for use.

## Hiring a Bathroom Remodeling Contractor in Chandler, Arizona

Choosing the right contractor is crucial for a successful project:

### What to Look For

- **Licensing and Insurance**: Verify your contractor is properly licensed and carries liability insurance and workers' compensation.
- **Local Experience**: Contractors familiar with Chandler and the surrounding area understand local building codes, permit requirements, and climate considerations.
- **Portfolio**: Review their previous work to ensure their style matches your vision.
- **References**: Speak with past clients about their experience.
- **Written Contracts**: Get everything in writing, including scope of work, timeline, payment schedule, and warranty information.

### Questions to Ask

1. How long have you been remodeling bathrooms in the Chandler area?
2. Can you provide references from recent projects?
3. What is included in your warranty?
4. How do you handle unexpected issues or changes during the project?
5. Who will be on-site managing the project daily?

## Cost Breakdown: Where Your Money Goes

Understanding where your remodeling dollars go helps you make informed decisions:

- **Labor**: 40-50% of the total budget
- **Fixtures and Fittings**: 15-20%
- **Cabinetry and Countertops**: 10-15%
- **Flooring and Tile**: 10-15%
- **Plumbing and Electrical**: 10-15%
- **Permits and Miscellaneous**: 5-10%

## Permits and Regulations

Most bathroom remodels in Chandler require permits, especially if you're:

- Moving or adding plumbing
- Modifying electrical systems
- Making structural changes
- Installing new ventilation

Your contractor should handle permit applications and ensure all work meets local building codes. Failing to obtain proper permits can result in fines and complications when selling your home.

## Maximizing Your Investment

To get the most value from your bathroom remodel:

1. **Don't Skimp on Quality**: Cheap materials may save money upfront but often require premature replacement.
2. **Invest in Timeless Design**: Trendy styles may look dated quickly. Classic designs maintain their appeal longer.
3. **Focus on Function**: Beautiful bathrooms that don't work well for your family won't provide lasting satisfaction.
4. **Choose Universal Design**: Features like curbless showers and comfort-height toilets accommodate users of all abilities and ages.

## Conclusion

A bathroom remodel is a significant investment that can dramatically improve your daily life and increase your home's value. By planning carefully, choosing the right contractor, and making informed material selections, you can create a bathroom that serves your family beautifully for years to come.

Ready to start your bathroom remodeling project in Chandler, Arizona? Contact Chandler Bathroom Remodeling today for a free consultation and estimate. Our experienced team has been transforming bathrooms throughout the Chandler area for over 15 years, and we're committed to exceeding your expectations.

---

*Chandler Bathroom Remodeling is the premier bathroom remodeling company serving Chandler, Mesa, Tempe, Scottsdale, and Phoenix. Contact us at (480) 555-0123 or visit our showroom to discuss your project.*
  `,author:"Chandler Bathroom Remodeling Team",category:"Bathroom Remodeling",tags:["bathroom remodeling","chandler arizona","home improvement","bathroom renovation","contractor"],featuredImage:"https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=2574&auto=format&fit=crop",metaTitle:"Complete Guide to Bathroom Remodeling in Chandler, Arizona | Chandler Bathroom Remodeling",metaDescription:"Expert guide to bathroom remodeling in Chandler, Arizona. Learn about costs, materials, timelines, and how to choose the right contractor for your renovation project.",metaKeywords:"bathroom remodeling chandler arizona, bathroom renovation chandler az, bathroom contractor chandler, shower remodel chandler arizona, bathroom design arizona",status:"published",publishedAt:new Date().toISOString(),createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},r={title:"2024 Bathroom Design Trends: What's Hot in Chandler, Arizona",slug:"2024-bathroom-design-trends-chandler-arizona",excerpt:"Discover the latest bathroom design trends dominating Chandler, Arizona in 2024. From spa-like features to smart technology, transform your bathroom with these modern ideas.",content:`
# 2024 Bathroom Design Trends: What's Hot in Chandler, Arizona

Bathroom design has evolved significantly in 2024, and homeowners in Chandler, Arizona are embracing innovative trends that combine luxury, functionality, and sustainability. Whether you're planning a complete remodel or a simple update, these trending ideas will help you create a bathroom that's both stylish and perfectly suited for Arizona living.

## 1. Spa-Inspired Retreats at Home

The wellness movement continues to influence bathroom design, with more homeowners creating spa-like retreats within their homes. In Chandler's desert climate, having a personal oasis is more appealing than ever.

### Key Features:
- **Freestanding soaking tubs** positioned to maximize relaxation
- **Rainfall showerheads** with multiple spray settings
- **Steam shower capabilities** for the ultimate spa experience
- **Heated floors** for comfort during cooler Arizona evenings
- **Aromatherapy shower systems** integrated into smart home controls

### Why It Works in Arizona:
After a long day in the Arizona sun, coming home to a spa-like bathroom provides the perfect escape. The neutral color palettes and natural materials complement desert aesthetics while creating a serene environment.

## 2. Smart Technology Integration

2024 has seen a significant increase in smart bathroom technology, making daily routines more convenient and efficient.

### Popular Smart Features:
- **Voice-controlled lighting and temperature** systems
- **Smart mirrors** with built-in LED lighting and defoggers
- **Digital shower controls** for precise temperature and water flow
- **Water-saving smart toilets** with self-cleaning features
- **Bluetooth speakers** seamlessly integrated into vanity mirrors

### Benefits for Chandler Homeowners:
Smart technology helps conserve water—a crucial consideration in Arizona—while adding convenience and luxury to your daily routine.

## 3. Sustainable and Eco-Friendly Materials

Environmental consciousness is driving material selection in 2024 bathroom designs.

### Sustainable Choices:
- **Recycled glass countertops** offering unique patterns and colors
- **Bamboo cabinetry** for a renewable, durable option
- **Low-flow fixtures** that don't compromise on performance
- **Reclaimed wood accents** adding character and warmth
- **Energy-efficient LED lighting** with smart controls

### Arizona-Specific Advantages:
These materials not only reduce environmental impact but also perform exceptionally well in Arizona's climate, resisting humidity fluctuations and temperature extremes.

## 4. Bold Tile Patterns and Textures

2024 is all about making statements with tile, moving away from simple subway tiles to more expressive options.

### Trending Tile Designs:
- **Large-format porcelain tiles** minimizing grout lines
- **Geometric patterns** creating visual interest
- **Textured tiles** adding depth and tactile appeal
- **Mixed metallic finishes** for a touch of glamour
- **Vertical tile installations** creating the illusion of height

### Perfect for Desert Homes:
These bold patterns work beautifully in Arizona homes, where natural light can highlight the textures and create stunning visual effects throughout the day.

## 5. Universal Design and Accessibility

Aging-in-place and universal design principles are becoming standard in 2024 bathroom renovations.

### Key Accessibility Features:
- **Curbless showers** with linear drains
- **Comfort-height toilets** for easier use
- **Grab bars** integrated into the design aesthetic
- **Wider doorways** accommodating mobility aids
- **Lever-style faucets** easier for all users to operate

### Chandler-Specific Benefits:
These features not only accommodate current needs but also increase home value and appeal to a broader range of potential buyers in the competitive Chandler market.

## 6. Floating Vanities and Wall-Mounted Fixtures

The trend toward floating vanities continues strong in 2024, creating an illusion of more space and easier cleaning.

### Design Elements:
- **Wall-mounted vanities** with integrated storage solutions
- **Floating toilet tanks** maximizing floor space
- **Wall-mounted faucets** creating a clean, modern look
- **LED strip lighting** underneath vanities for ambiance
- **Integrated charging stations** within vanity drawers

### Ideal for Arizona Bathrooms:
Floating elements make cleaning easier—a significant advantage in dusty desert environments—and create the perception of more space in smaller bathrooms.

## 7. Biophilic Design Elements

Connecting with nature through biophilic design remains a strong trend in 2024.

### Natural Elements:
- **Living plant walls** bringing the outdoors inside
- **Natural stone materials** connecting to desert landscapes
- **Large windows** maximizing natural light and views
- **Skylights** introducing natural ventilation
- **Natural wood accents** adding warmth and organic appeal

### Perfect for Desert Living:
Biophilic design resonates strongly in Arizona, where the connection to the natural desert environment is part of the lifestyle appeal.

## 8. Color Trends: Earth Tones and Jewel Tones

2024's color palette balances earthy neutrals with sophisticated jewel tones.

### Popular Color Combinations:
- **Terracotta and sage green** reflecting desert landscapes
- **Deep navy and brass** for timeless elegance
- **Charcoal and warm gold** creating sophisticated contrast
- **Soft beige and matte black** for modern minimalism
- **Desert sand and turquoise** celebrating regional colors

### Why These Colors Work in Arizona:
These palettes complement the natural desert environment while creating interiors that feel both connected to the landscape and distinctly luxurious.

## 9. Multi-Functional Spaces

Bathrooms are evolving into multi-functional spaces that serve various needs beyond basic hygiene.

### Multi-Function Features:
- **Integrated makeup vanities** with proper lighting
- **Exercise areas** with yoga space and meditation zones
- **Coffee stations** for morning routines
- **Reading nooks** with comfortable seating
- **Pet washing stations** for convenience

### Chandler Lifestyle Benefits:
These multi-functional designs support the active Arizona lifestyle while maximizing the utility of every square foot in your home.

## 10. Advanced Storage Solutions

Smart storage solutions are essential in 2024 bathroom designs, addressing the need for organization without sacrificing style.

### Innovative Storage Ideas:
- **Deep drawer organizers** with custom dividers
- **Medicine cabinets** with integrated electrical outlets
- **Hidden storage panels** behind mirrors
- **Vertical storage towers** utilizing height efficiently
- **Built-in niches** for shower storage

### Arizona-Specific Advantages:
Effective storage helps maintain clutter-free spaces, which is particularly important in desert environments where dust management is crucial.

## Planning Your 2024 Bathroom Remodel

When incorporating these trends into your Chandler bathroom remodel, consider:

### Budget Considerations:
- Prioritize trends that offer the best ROI for your specific situation
- Consider which trends align with your long-term home goals
- Balance trendy elements with timeless design principles

### Climate Adaptations:
- Choose materials that perform well in Arizona's climate
- Consider ventilation and moisture control carefully
- Plan for proper insulation and energy efficiency

### Professional Guidance:
Working with experienced bathroom remodeling contractors familiar with Chandler's specific needs ensures your 2024 bathroom renovation incorporates these trends effectively while addressing local building requirements and climate considerations.

## Conclusion

2024 offers exciting possibilities for bathroom remodeling in Chandler, Arizona. Whether you're drawn to spa-like features, smart technology, sustainable materials, or bold design statements, there's a trend that will transform your bathroom into a space that's both current and timeless.

Ready to incorporate these 2024 bathroom design trends into your Chandler home? Contact Chandler Bathroom Remodeling today for a consultation. Our experienced team understands how to adapt these trends to Arizona's unique climate and lifestyle, ensuring your bathroom renovation is both beautiful and perfectly suited to your needs.

---

*Chandler Bathroom Remodeling specializes in incorporating the latest design trends while ensuring functionality and durability for Arizona homes. Contact us at (480) 555-0123 to discuss your 2024 bathroom renovation project.*
  `,author:"Chandler Bathroom Remodeling Team",category:"Design Trends",tags:["bathroom design trends 2024","chandler arizona bathroom","modern bathroom design","smart bathroom technology","sustainable bathroom"],featuredImage:"https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2574&auto=format&fit=crop",metaTitle:"2024 Bathroom Design Trends | Chandler Arizona Bathroom Remodeling",metaDescription:"Discover the hottest bathroom design trends for 2024 in Chandler, Arizona. From spa features to smart technology, transform your bathroom with modern ideas.",metaKeywords:"bathroom design trends 2024, chandler arizona bathroom remodeling, modern bathroom design, smart bathroom technology, sustainable bathroom materials",status:"published",publishedAt:new Date().toISOString(),createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()};e.s(["defaultBlogPost",0,t,"defaultGalleryItems",0,[{title:"Modern Master Bathroom",category:"bathroom",imageUrl:"https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=2574&auto=format&fit=crop",description:"Complete master bathroom renovation with walk-in shower and freestanding tub",featured:!0},{title:"Luxury Shower Remodel",category:"bathroom",imageUrl:"https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=2369&auto=format&fit=crop",description:"Custom frameless glass shower with rainfall showerhead",featured:!0},{title:"Contemporary Vanity Design",category:"bathroom",imageUrl:"https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2574&auto=format&fit=crop",description:"Double vanity with quartz countertops and modern fixtures",featured:!1},{title:"Spa-Inspired Retreat",category:"bathroom",imageUrl:"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2574&auto=format&fit=crop",description:"Tranquil bathroom with natural stone and warm lighting",featured:!1},{title:"Small Bathroom Transformation",category:"bathroom",imageUrl:"https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2574&auto=format&fit=crop",description:"Maximizing space in a compact bathroom with smart design",featured:!1},{title:"Classic White Bathroom",category:"bathroom",imageUrl:"https://images.unsplash.com/photo-1600573472591-ee6c8e695948?q=80&w=2574&auto=format&fit=crop",description:"Timeless white subway tile with chrome fixtures",featured:!1},{title:"Guest Bathroom Renovation",category:"bathroom",imageUrl:"https://images.unsplash.com/photo-1600566752447-f4f7687c5e40?q=80&w=2574&auto=format&fit=crop",description:"Elegant guest bathroom with floating vanity",featured:!1},{title:"Accessible Bathroom Design",category:"bathroom",imageUrl:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2574&auto=format&fit=crop",description:"ADA-compliant bathroom with curbless shower entry",featured:!1},{title:"Spa Shower Upgrade",category:"bathroom",imageUrl:"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2574&auto=format&fit=crop",description:"Custom walk-in shower with glass enclosure and niche storage",featured:!1},{title:"Luxury Bathtub Suite",category:"bathroom",imageUrl:"https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=2574&auto=format&fit=crop",description:"Freestanding soaking tub with coordinated fixtures and tile",featured:!1},{title:"Curbless Shower Design",category:"bathroom",imageUrl:"https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2574&auto=format&fit=crop",description:"Accessible curbless shower with linear drain and bench",featured:!1},{title:"Vanity & Storage Refresh",category:"bathroom",imageUrl:"https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=2574&auto=format&fit=crop",description:"Double-sink vanity with ample storage and warm lighting",featured:!1},{title:"Tile Accent Bath",category:"bathroom",imageUrl:"https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=2574&auto=format&fit=crop",description:"Statement tile feature wall with coordinated flooring",featured:!1}],"secondBlogPost",0,r])},899541,e=>{"use strict";var t=e.i(521404);let r=[...[t.defaultBlogPost,t.secondBlogPost].map((e,t)=>({id:`post-${t+1}`,title:e.title,slug:e.slug,content:e.content,excerpt:e.excerpt,featuredImage:e.featuredImage,category:e.category,author:e.author,status:e.status,metaTitle:e.metaTitle,metaDescription:e.metaDescription,keywords:e.metaKeywords.split(",").map(e=>e.trim()).filter(Boolean),tags:e.tags,readTime:12,publishedAt:e.publishedAt,createdAt:e.createdAt,updatedAt:e.updatedAt}))],a=[{id:"cat-1",name:"Bathroom Remodeling",slug:"bathroom-remodeling",description:"Bathroom remodeling guides and advice."},{id:"cat-2",name:"Design Trends",slug:"design-trends",description:"Latest design trends and inspiration."}];async function n(){return[...r].sort((e,t)=>e.createdAt<t.createdAt?1:-1)}async function o(){return(await n()).filter(e=>"published"===e.status)}async function i(e){return r.find(t=>t.slug===e)??null}async function s(e){return r.find(t=>t.id===e)??null}async function l(e){let t=e.slug||e.title.toLowerCase().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-").trim();if(await i(t))return{success:!1,error:"A post with this slug already exists"};let a=`post-${Date.now()}`,n=new Date().toISOString();return r.push({...e,id:a,slug:t,createdAt:n,updatedAt:n,publishedAt:"published"===e.status?n:null}),{success:!0,id:a}}async function c(e,t){return r=r.map(r=>r.id===e?{...r,...t,updatedAt:new Date().toISOString()}:r),{success:!0}}async function d(e){return r=r.filter(t=>t.id!==e),{success:!0}}async function u(e,t){return r=r.map(r=>r.id===e?{...r,status:t,updatedAt:new Date().toISOString(),publishedAt:"published"===t?new Date().toISOString():null}:r),{success:!0}}async function m(){return r.length}async function h(e=5){return(await n()).slice(0,e)}async function f(){return[...a]}async function g(e){let t=`cat-${Date.now()}`;return a.push({id:t,...e}),{success:!0,id:t}}async function p(e,t){return a=a.map(r=>r.id===e?{...r,...t}:r),{success:!0}}async function y(e){return a=a.filter(t=>t.id!==e),{success:!0}}e.s(["createCategory",()=>g,"createPost",()=>l,"deleteCategory",()=>y,"deletePost",()=>d,"getAllPosts",0,n,"getCategories",()=>f,"getPostById",()=>s,"getPostsCount",()=>m,"getPublishedPosts",()=>o,"getRecentPosts",()=>h,"updateCategory",()=>p,"updatePost",()=>c,"updatePostStatus",()=>u])},507084,e=>{"use strict";let t=e.i(521404).defaultGalleryItems.map((e,t)=>({id:`gallery-${t+1}`,title:e.title,category:e.category,imageUrl:e.imageUrl,description:e.description,featured:e.featured,createdAt:new Date}));async function r(){return[...t].sort((e,t)=>t.createdAt.getTime()-e.createdAt.getTime())}async function a(e){let r=`gallery-${Date.now()}`;return t.push({id:r,...e,createdAt:new Date}),{success:!0,id:r}}async function n(e,r){return t=t.map(t=>t.id===e?{...t,...r}:t),{success:!0}}async function o(e){return t=t.filter(t=>t.id!==e),{success:!0}}async function i(){let e=(await r()).filter(e=>e.featured);return e.length>0?e:r()}async function s(){return t.length}e.s(["createGalleryItem",()=>a,"deleteGalleryItem",()=>o,"getFeaturedGalleryItems",()=>i,"getGalleryCount",()=>s,"getGalleryItems",()=>r,"updateGalleryItem",()=>n])},323848,e=>{"use strict";let t=[];async function r(){return[...t].sort((e,t)=>t.createdAt.getTime()-e.createdAt.getTime())}async function a(e){let r=`testimonial-${Date.now()}`;return t.push({id:r,...e,createdAt:new Date}),{success:!0,id:r}}async function n(e,r){return t=t.map(t=>t.id===e?{...t,...r}:t),{success:!0}}async function o(e){return t=t.filter(t=>t.id!==e),{success:!0}}async function i(){return t.length}e.s(["createTestimonial",()=>a,"deleteTestimonial",()=>o,"getTestimonials",()=>r,"getTestimonialsCount",()=>i,"updateTestimonial",()=>n])},187555,e=>{"use strict";let t=[];async function r(){return[...t].sort((e,t)=>t.createdAt.getTime()-e.createdAt.getTime())}async function a(e,r){return t=t.map(t=>t.id===e?{...t,status:r}:t),{success:!0}}async function n(e){return t=t.filter(t=>t.id!==e),{success:!0}}async function o(){return t.length}async function i(e=5){return(await r()).slice(0,e)}e.s(["deleteLead",()=>n,"getAllLeads",0,r,"getLeadsCount",()=>o,"getRecentLeads",()=>i,"updateLeadStatus",()=>a])},920383,e=>{"use strict";var t=e.i(687433),r=e.i(344440),a=e.i(868183),n=e.i(374701),o=e.i(970065),i=e.i(167881),s=e.i(187555),l=e.i(899541),c=e.i(323848),d=e.i(507084),u=e.i(394786),m=e.i(106154),h=e.i(217276),f=e.i(102644),g=e.i(38132),p=e.i(972726),y=e.i(490246),b=e.i(492559);function v(){let[e,v]=(0,r.useState)({leads:0,posts:0,testimonials:0,gallery:0}),[w,x]=(0,r.useState)([]),[C,j]=(0,r.useState)([]),[k,A]=(0,r.useState)(!0);(0,r.useEffect)(()=>{!async function(){let[e,t,r,a,n,o]=await Promise.all([(0,s.getLeadsCount)(),(0,l.getPostsCount)(),(0,c.getTestimonialsCount)(),(0,d.getGalleryCount)(),(0,s.getRecentLeads)(5),(0,l.getRecentPosts)(5)]);v({leads:e,posts:t,testimonials:r,gallery:a}),x(n),j(o),A(!1)}()},[]);let N=[{title:"Total Leads",value:e.leads,icon:u.Users,href:"/admin/leads",color:"text-blue-600"},{title:"Blog Posts",value:e.posts,icon:m.FileText,href:"/admin/blog",color:"text-green-600"},{title:"Testimonials",value:e.testimonials,icon:f.MessageSquare,href:"/admin/testimonials",color:"text-amber-600"},{title:"Gallery Items",value:e.gallery,icon:h.Image,href:"/admin/gallery",color:"text-purple-600"}];return(0,t.jsxs)(n.AdminShell,{title:"Dashboard",description:"Overview of your website content and leads",children:[(0,t.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8",children:N.map(e=>(0,t.jsx)(a.default,{href:e.href,children:(0,t.jsx)(o.Card,{className:"hover:shadow-md transition-shadow cursor-pointer",children:(0,t.jsx)(o.CardContent,{className:"p-6",children:(0,t.jsxs)("div",{className:"flex items-center justify-between",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"text-sm text-muted-foreground",children:e.title}),(0,t.jsx)("p",{className:"text-3xl font-semibold text-foreground mt-1",children:k?"-":e.value})]}),(0,t.jsx)("div",{className:`p-3 rounded-full bg-secondary ${e.color}`,children:(0,t.jsx)(e.icon,{className:"h-6 w-6"})})]})})})},e.title))}),(0,t.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8",children:[(0,t.jsxs)(o.Card,{children:[(0,t.jsxs)(o.CardHeader,{className:"flex flex-row items-center justify-between",children:[(0,t.jsx)(o.CardTitle,{className:"text-lg font-serif",children:"Recent Leads"}),(0,t.jsx)(i.Button,{asChild:!0,variant:"ghost",size:"sm",children:(0,t.jsxs)(a.default,{href:"/admin/leads",children:["View All ",(0,t.jsx)(y.ArrowRight,{className:"ml-1 h-4 w-4"})]})})]}),(0,t.jsx)(o.CardContent,{children:k?(0,t.jsx)("div",{className:"space-y-4",children:[void 0,void 0,void 0].map((e,r)=>(0,t.jsxs)("div",{className:"animate-pulse flex items-center gap-4",children:[(0,t.jsx)("div",{className:"h-10 w-10 bg-muted rounded-full"}),(0,t.jsxs)("div",{className:"flex-1",children:[(0,t.jsx)("div",{className:"h-4 bg-muted rounded w-1/2 mb-2"}),(0,t.jsx)("div",{className:"h-3 bg-muted rounded w-1/3"})]})]},r))}):0===w.length?(0,t.jsx)("p",{className:"text-sm text-muted-foreground text-center py-8",children:"No leads yet"}):(0,t.jsx)("div",{className:"space-y-4",children:w.map(e=>(0,t.jsxs)("div",{className:"flex items-center gap-4",children:[(0,t.jsx)("div",{className:"h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center",children:(0,t.jsx)(u.Users,{className:"h-5 w-5 text-primary"})}),(0,t.jsxs)("div",{className:"flex-1 min-w-0",children:[(0,t.jsx)("p",{className:"text-sm font-medium text-foreground truncate",children:e.name}),(0,t.jsx)("p",{className:"text-xs text-muted-foreground truncate",children:e.email})]}),(0,t.jsxs)("div",{className:"text-xs text-muted-foreground flex items-center gap-1",children:[(0,t.jsx)(p.Clock,{className:"h-3 w-3"}),new Date(e.createdAt).toLocaleDateString()]})]},e.id))})})]}),(0,t.jsxs)(o.Card,{children:[(0,t.jsxs)(o.CardHeader,{className:"flex flex-row items-center justify-between",children:[(0,t.jsx)(o.CardTitle,{className:"text-lg font-serif",children:"Recent Posts"}),(0,t.jsxs)("div",{className:"flex items-center gap-2",children:[(0,t.jsx)(i.Button,{asChild:!0,variant:"outline",size:"sm",children:(0,t.jsxs)(a.default,{href:"/admin/blog/new",children:[(0,t.jsx)(b.Plus,{className:"mr-1 h-4 w-4"})," New Post"]})}),(0,t.jsx)(i.Button,{asChild:!0,variant:"ghost",size:"sm",children:(0,t.jsxs)(a.default,{href:"/admin/blog",children:["View All ",(0,t.jsx)(y.ArrowRight,{className:"ml-1 h-4 w-4"})]})})]})]}),(0,t.jsx)(o.CardContent,{children:k?(0,t.jsx)("div",{className:"space-y-4",children:[void 0,void 0,void 0].map((e,r)=>(0,t.jsxs)("div",{className:"animate-pulse flex items-center gap-4",children:[(0,t.jsx)("div",{className:"h-10 w-10 bg-muted rounded"}),(0,t.jsxs)("div",{className:"flex-1",children:[(0,t.jsx)("div",{className:"h-4 bg-muted rounded w-3/4 mb-2"}),(0,t.jsx)("div",{className:"h-3 bg-muted rounded w-1/4"})]})]},r))}):0===C.length?(0,t.jsxs)("div",{className:"text-center py-8",children:[(0,t.jsx)("p",{className:"text-sm text-muted-foreground mb-4",children:"No posts yet"}),(0,t.jsx)(i.Button,{asChild:!0,size:"sm",children:(0,t.jsxs)(a.default,{href:"/admin/blog/new",children:[(0,t.jsx)(b.Plus,{className:"mr-1 h-4 w-4"})," Create First Post"]})})]}):(0,t.jsx)("div",{className:"space-y-4",children:C.map(e=>(0,t.jsxs)(a.default,{href:`/admin/blog/${e.id}`,className:"flex items-center gap-4 group",children:[(0,t.jsx)("div",{className:"h-10 w-10 bg-secondary rounded flex items-center justify-center",children:(0,t.jsx)(m.FileText,{className:"h-5 w-5 text-muted-foreground"})}),(0,t.jsxs)("div",{className:"flex-1 min-w-0",children:[(0,t.jsx)("p",{className:"text-sm font-medium text-foreground truncate group-hover:text-primary transition-colors",children:e.title}),(0,t.jsx)("p",{className:"text-xs text-muted-foreground",children:"published"===e.status?(0,t.jsx)("span",{className:"text-green-600",children:"Published"}):(0,t.jsx)("span",{className:"text-amber-600",children:"Draft"})})]}),(0,t.jsxs)("div",{className:"text-xs text-muted-foreground flex items-center gap-1",children:[(0,t.jsx)(g.TrendingUp,{className:"h-3 w-3"}),e.readTime||0," min read"]})]},e.id))})})]})]})]})}e.s(["default",()=>v])}]);