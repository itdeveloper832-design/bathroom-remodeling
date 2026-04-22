(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,949874,e=>{"use strict";var t=e.i(344440),a=e.i(429779),r=e.i(450694),i=e=>{var i;let n,s,{present:l,children:d}=e,c=function(e){var a,i;let[n,s]=t.useState(),l=t.useRef(null),d=t.useRef(e),c=t.useRef("none"),[u,h]=(a=e?"mounted":"unmounted",i={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},t.useReducer((e,t)=>i[e][t]??e,a));return t.useEffect(()=>{let e=o(l.current);c.current="mounted"===u?e:"none"},[u]),(0,r.useLayoutEffect)(()=>{let t=l.current,a=d.current;if(a!==e){let r=c.current,i=o(t);e?h("MOUNT"):"none"===i||t?.display==="none"?h("UNMOUNT"):a&&r!==i?h("ANIMATION_OUT"):h("UNMOUNT"),d.current=e}},[e,h]),(0,r.useLayoutEffect)(()=>{if(n){let e,t=n.ownerDocument.defaultView??window,a=a=>{let r=o(l.current).includes(CSS.escape(a.animationName));if(a.target===n&&r&&(h("ANIMATION_END"),!d.current)){let a=n.style.animationFillMode;n.style.animationFillMode="forwards",e=t.setTimeout(()=>{"forwards"===n.style.animationFillMode&&(n.style.animationFillMode=a)})}},r=e=>{e.target===n&&(c.current=o(l.current))};return n.addEventListener("animationstart",r),n.addEventListener("animationcancel",a),n.addEventListener("animationend",a),()=>{t.clearTimeout(e),n.removeEventListener("animationstart",r),n.removeEventListener("animationcancel",a),n.removeEventListener("animationend",a)}}h("ANIMATION_END")},[n,h]),{isPresent:["mounted","unmountSuspended"].includes(u),ref:t.useCallback(e=>{l.current=e?getComputedStyle(e):null,s(e)},[])}}(l),u="function"==typeof d?d({present:c.isPresent}):t.Children.only(d),h=(0,a.useComposedRefs)(c.ref,(i=u,(s=(n=Object.getOwnPropertyDescriptor(i.props,"ref")?.get)&&"isReactWarning"in n&&n.isReactWarning)?i.ref:(s=(n=Object.getOwnPropertyDescriptor(i,"ref")?.get)&&"isReactWarning"in n&&n.isReactWarning)?i.props.ref:i.props.ref||i.ref));return"function"==typeof d||c.isPresent?t.cloneElement(u,{ref:h}):null};function o(e){return e?.animationName||"none"}i.displayName="Presence",e.s(["Presence",()=>i])},291967,e=>{"use strict";function t(e,a,{checkForDefaultPrevented:r=!0}={}){return function(t){if(e?.(t),!1===r||!t.defaultPrevented)return a?.(t)}}"u">typeof window&&window.document&&window.document.createElement,e.s(["composeEventHandlers",()=>t])},362497,e=>{"use strict";var t=e.i(344440),a=e.i(687433);function r(e,r){let i=t.createContext(r),o=e=>{let{children:r,...o}=e,n=t.useMemo(()=>o,Object.values(o));return(0,a.jsx)(i.Provider,{value:n,children:r})};return o.displayName=e+"Provider",[o,function(a){let o=t.useContext(i);if(o)return o;if(void 0!==r)return r;throw Error(`\`${a}\` must be used within \`${e}\``)}]}function i(e,r=[]){let o=[],n=()=>{let a=o.map(e=>t.createContext(e));return function(r){let i=r?.[e]||a;return t.useMemo(()=>({[`__scope${e}`]:{...r,[e]:i}}),[r,i])}};return n.scopeName=e,[function(r,i){let n=t.createContext(i),s=o.length;o=[...o,i];let l=r=>{let{scope:i,children:o,...l}=r,d=i?.[e]?.[s]||n,c=t.useMemo(()=>l,Object.values(l));return(0,a.jsx)(d.Provider,{value:c,children:o})};return l.displayName=r+"Provider",[l,function(a,o){let l=o?.[e]?.[s]||n,d=t.useContext(l);if(d)return d;if(void 0!==i)return i;throw Error(`\`${a}\` must be used within \`${r}\``)}]},function(...e){let a=e[0];if(1===e.length)return a;let r=()=>{let r=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let i=r.reduce((t,{useScope:a,scopeName:r})=>{let i=a(e)[`__scope${r}`];return{...t,...i}},{});return t.useMemo(()=>({[`__scope${a.scopeName}`]:i}),[i])}};return r.scopeName=a.scopeName,r}(n,...r)]}e.s(["createContext",()=>r,"createContextScope",()=>i])},450694,e=>{"use strict";var t=e.i(344440),a=globalThis?.document?t.useLayoutEffect:()=>{};e.s(["useLayoutEffect",()=>a])},411207,e=>{"use strict";var t=e.i(344440),a=e.i(450694),r=t[" useId ".trim().toString()]||(()=>void 0),i=0;function o(e){let[o,n]=t.useState(r());return(0,a.useLayoutEffect)(()=>{e||n(e=>e??String(i++))},[e]),e||(o?`radix-${o}`:"")}e.s(["useId",()=>o])},16671,e=>{"use strict";var t=e.i(344440),a=e.i(450694);t[" useEffectEvent ".trim().toString()],t[" useInsertionEffect ".trim().toString()];var r=t[" useInsertionEffect ".trim().toString()]||a.useLayoutEffect;function i({prop:e,defaultProp:a,onChange:i=()=>{},caller:o}){let[n,s,l]=function({defaultProp:e,onChange:a}){let[i,o]=t.useState(e),n=t.useRef(i),s=t.useRef(a);return r(()=>{s.current=a},[a]),t.useEffect(()=>{n.current!==i&&(s.current?.(i),n.current=i)},[i,n]),[i,o,s]}({defaultProp:a,onChange:i}),d=void 0!==e,c=d?e:n;{let a=t.useRef(void 0!==e);t.useEffect(()=>{let e=a.current;if(e!==d){let t=d?"controlled":"uncontrolled";console.warn(`${o} is changing from ${e?"controlled":"uncontrolled"} to ${t}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`)}a.current=d},[d,o])}return[c,t.useCallback(t=>{if(d){let a="function"==typeof t?t(e):t;a!==e&&l.current?.(a)}else s(t)},[d,e,s,l])]}Symbol("RADIX:SYNC_STATE"),e.s(["useControllableState",()=>i],16671)},160310,e=>{"use strict";var t=e.i(344440),a=e.i(429779),r=e.i(687433);function i(e){var i;let o,s=(i=e,(o=t.forwardRef((e,r)=>{let{children:i,...o}=e;if(t.isValidElement(i)){var n;let e,s,l=(n=i,(s=(e=Object.getOwnPropertyDescriptor(n.props,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning)?n.ref:(s=(e=Object.getOwnPropertyDescriptor(n,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning)?n.props.ref:n.props.ref||n.ref),d=function(e,t){let a={...t};for(let r in t){let i=e[r],o=t[r];/^on[A-Z]/.test(r)?i&&o?a[r]=(...e)=>{let t=o(...e);return i(...e),t}:i&&(a[r]=i):"style"===r?a[r]={...i,...o}:"className"===r&&(a[r]=[i,o].filter(Boolean).join(" "))}return{...e,...a}}(o,i.props);return i.type!==t.Fragment&&(d.ref=r?(0,a.composeRefs)(r,l):l),t.cloneElement(i,d)}return t.Children.count(i)>1?t.Children.only(null):null})).displayName=`${i}.SlotClone`,o),l=t.forwardRef((e,a)=>{let{children:i,...o}=e,l=t.Children.toArray(i),d=l.find(n);if(d){let e=d.props.children,i=l.map(a=>a!==d?a:t.Children.count(e)>1?t.Children.only(null):t.isValidElement(e)?e.props.children:null);return(0,r.jsx)(s,{...o,ref:a,children:t.isValidElement(e)?t.cloneElement(e,void 0,i):null})}return(0,r.jsx)(s,{...o,ref:a,children:i})});return l.displayName=`${e}.Slot`,l}var o=Symbol("radix.slottable");function n(e){return t.isValidElement(e)&&"function"==typeof e.type&&"__radixId"in e.type&&e.type.__radixId===o}e.s(["createSlot",()=>i])},638169,e=>{"use strict";var t=e.i(344440),a=e.i(165596),r=e.i(160310),i=e.i(687433),o=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"].reduce((e,a)=>{let o=(0,r.createSlot)(`Primitive.${a}`),n=t.forwardRef((e,t)=>{let{asChild:r,...n}=e;return"u">typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,i.jsx)(r?o:a,{...n,ref:t})});return n.displayName=`Primitive.${a}`,{...e,[a]:n}},{});function n(e,t){e&&a.flushSync(()=>e.dispatchEvent(t))}e.s(["Primitive",()=>o,"dispatchDiscreteCustomEvent",()=>n])},110796,763899,e=>{"use strict";var t=e.i(344440),a=e.i(362497),r=e.i(429779),i=e.i(160310),o=e.i(687433);function n(e){let n=e+"CollectionProvider",[s,l]=(0,a.createContextScope)(n),[d,c]=s(n,{collectionRef:{current:null},itemMap:new Map}),u=e=>{let{scope:a,children:r}=e,i=t.default.useRef(null),n=t.default.useRef(new Map).current;return(0,o.jsx)(d,{scope:a,itemMap:n,collectionRef:i,children:r})};u.displayName=n;let h=e+"CollectionSlot",m=(0,i.createSlot)(h),f=t.default.forwardRef((e,t)=>{let{scope:a,children:i}=e,n=c(h,a),s=(0,r.useComposedRefs)(t,n.collectionRef);return(0,o.jsx)(m,{ref:s,children:i})});f.displayName=h;let g=e+"CollectionItemSlot",p="data-radix-collection-item",y=(0,i.createSlot)(g),v=t.default.forwardRef((e,a)=>{let{scope:i,children:n,...s}=e,l=t.default.useRef(null),d=(0,r.useComposedRefs)(a,l),u=c(g,i);return t.default.useEffect(()=>(u.itemMap.set(l,{ref:l,...s}),()=>void u.itemMap.delete(l))),(0,o.jsx)(y,{...{[p]:""},ref:d,children:n})});return v.displayName=g,[{Provider:u,Slot:f,ItemSlot:v},function(a){let r=c(e+"CollectionConsumer",a);return t.default.useCallback(()=>{let e=r.collectionRef.current;if(!e)return[];let t=Array.from(e.querySelectorAll(`[${p}]`));return Array.from(r.itemMap.values()).sort((e,a)=>t.indexOf(e.ref.current)-t.indexOf(a.ref.current))},[r.collectionRef,r.itemMap])},l]}var s=new WeakMap;function l(e,t){var a,r;let i,o,n;if("at"in Array.prototype)return Array.prototype.at.call(e,t);let s=(a=e,r=t,i=a.length,(n=(o=d(r))>=0?o:i+o)<0||n>=i?-1:n);return -1===s?void 0:e[s]}function d(e){return e!=e||0===e?0:Math.trunc(e)}(class e extends Map{#e;constructor(e){super(e),this.#e=[...super.keys()],s.set(this,!0)}set(e,t){return s.get(this)&&(this.has(e)?this.#e[this.#e.indexOf(e)]=e:this.#e.push(e)),super.set(e,t),this}insert(e,t,a){let r,i=this.has(t),o=this.#e.length,n=d(e),s=n>=0?n:o+n,l=s<0||s>=o?-1:s;if(l===this.size||i&&l===this.size-1||-1===l)return this.set(t,a),this;let c=this.size+ +!i;n<0&&s++;let u=[...this.#e],h=!1;for(let e=s;e<c;e++)if(s===e){let o=u[e];u[e]===t&&(o=u[e+1]),i&&this.delete(t),r=this.get(o),this.set(t,a)}else{h||u[e-1]!==t||(h=!0);let a=u[h?e:e-1],i=r;r=this.get(a),this.delete(a),this.set(a,i)}return this}with(t,a,r){let i=new e(this);return i.insert(t,a,r),i}before(e){let t=this.#e.indexOf(e)-1;if(!(t<0))return this.entryAt(t)}setBefore(e,t,a){let r=this.#e.indexOf(e);return -1===r?this:this.insert(r,t,a)}after(e){let t=this.#e.indexOf(e);if(-1!==(t=-1===t||t===this.size-1?-1:t+1))return this.entryAt(t)}setAfter(e,t,a){let r=this.#e.indexOf(e);return -1===r?this:this.insert(r+1,t,a)}first(){return this.entryAt(0)}last(){return this.entryAt(-1)}clear(){return this.#e=[],super.clear()}delete(e){let t=super.delete(e);return t&&this.#e.splice(this.#e.indexOf(e),1),t}deleteAt(e){let t=this.keyAt(e);return void 0!==t&&this.delete(t)}at(e){let t=l(this.#e,e);if(void 0!==t)return this.get(t)}entryAt(e){let t=l(this.#e,e);if(void 0!==t)return[t,this.get(t)]}indexOf(e){return this.#e.indexOf(e)}keyAt(e){return l(this.#e,e)}from(e,t){let a=this.indexOf(e);if(-1===a)return;let r=a+t;return r<0&&(r=0),r>=this.size&&(r=this.size-1),this.at(r)}keyFrom(e,t){let a=this.indexOf(e);if(-1===a)return;let r=a+t;return r<0&&(r=0),r>=this.size&&(r=this.size-1),this.keyAt(r)}find(e,t){let a=0;for(let r of this){if(Reflect.apply(e,t,[r,a,this]))return r;a++}}findIndex(e,t){let a=0;for(let r of this){if(Reflect.apply(e,t,[r,a,this]))return a;a++}return -1}filter(t,a){let r=[],i=0;for(let e of this)Reflect.apply(t,a,[e,i,this])&&r.push(e),i++;return new e(r)}map(t,a){let r=[],i=0;for(let e of this)r.push([e[0],Reflect.apply(t,a,[e,i,this])]),i++;return new e(r)}reduce(...e){let[t,a]=e,r=0,i=a??this.at(0);for(let a of this)i=0===r&&1===e.length?a:Reflect.apply(t,this,[i,a,r,this]),r++;return i}reduceRight(...e){let[t,a]=e,r=a??this.at(-1);for(let a=this.size-1;a>=0;a--){let i=this.at(a);r=a===this.size-1&&1===e.length?i:Reflect.apply(t,this,[r,i,a,this])}return r}toSorted(t){return new e([...this.entries()].sort(t))}toReversed(){let t=new e;for(let e=this.size-1;e>=0;e--){let a=this.keyAt(e),r=this.get(a);t.set(a,r)}return t}toSpliced(...t){let a=[...this.entries()];return a.splice(...t),new e(a)}slice(t,a){let r=new e,i=this.size-1;if(void 0===t)return r;t<0&&(t+=this.size),void 0!==a&&a>0&&(i=a-1);for(let e=t;e<=i;e++){let t=this.keyAt(e),a=this.get(t);r.set(t,a)}return r}every(e,t){let a=0;for(let r of this){if(!Reflect.apply(e,t,[r,a,this]))return!1;a++}return!0}some(e,t){let a=0;for(let r of this){if(Reflect.apply(e,t,[r,a,this]))return!0;a++}return!1}}),e.s(["createCollection",()=>n],110796);var c=t.createContext(void 0);function u(e){let a=t.useContext(c);return e||a||"ltr"}e.s(["useDirection",()=>u],763899)},898673,e=>{"use strict";var t=e.i(465989);e.s(["ChevronDownIcon",()=>t.default])},521404,e=>{"use strict";let t={title:"Complete Guide to Bathroom Remodeling in Chandler, Arizona",slug:"complete-guide-bathroom-remodeling-chandler-arizona",excerpt:"Everything you need to know about bathroom remodeling in Chandler, Arizona. From planning and budgeting to choosing materials and hiring the right contractor.",content:`
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
  `,author:"Chandler Bathroom Remodeling Team",category:"Bathroom Remodeling",tags:["bathroom remodeling","chandler arizona","home improvement","bathroom renovation","contractor"],featuredImage:"https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=2574&auto=format&fit=crop",metaTitle:"Complete Guide to Bathroom Remodeling in Chandler, Arizona | Chandler Bathroom Remodeling",metaDescription:"Expert guide to bathroom remodeling in Chandler, Arizona. Learn about costs, materials, timelines, and how to choose the right contractor for your renovation project.",metaKeywords:"bathroom remodeling chandler arizona, bathroom renovation chandler az, bathroom contractor chandler, shower remodel chandler arizona, bathroom design arizona",status:"published",publishedAt:new Date().toISOString(),createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},a={title:"2024 Bathroom Design Trends: What's Hot in Chandler, Arizona",slug:"2024-bathroom-design-trends-chandler-arizona",excerpt:"Discover the latest bathroom design trends dominating Chandler, Arizona in 2024. From spa-like features to smart technology, transform your bathroom with these modern ideas.",content:`
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
  `,author:"Chandler Bathroom Remodeling Team",category:"Design Trends",tags:["bathroom design trends 2024","chandler arizona bathroom","modern bathroom design","smart bathroom technology","sustainable bathroom"],featuredImage:"https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2574&auto=format&fit=crop",metaTitle:"2024 Bathroom Design Trends | Chandler Arizona Bathroom Remodeling",metaDescription:"Discover the hottest bathroom design trends for 2024 in Chandler, Arizona. From spa features to smart technology, transform your bathroom with modern ideas.",metaKeywords:"bathroom design trends 2024, chandler arizona bathroom remodeling, modern bathroom design, smart bathroom technology, sustainable bathroom materials",status:"published",publishedAt:new Date().toISOString(),createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()};e.s(["defaultBlogPost",0,t,"defaultGalleryItems",0,[{title:"Modern Master Bathroom",category:"bathroom",imageUrl:"https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=2574&auto=format&fit=crop",description:"Complete master bathroom renovation with walk-in shower and freestanding tub",featured:!0},{title:"Luxury Shower Remodel",category:"bathroom",imageUrl:"https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=2369&auto=format&fit=crop",description:"Custom frameless glass shower with rainfall showerhead",featured:!0},{title:"Contemporary Vanity Design",category:"bathroom",imageUrl:"https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2574&auto=format&fit=crop",description:"Double vanity with quartz countertops and modern fixtures",featured:!1},{title:"Spa-Inspired Retreat",category:"bathroom",imageUrl:"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2574&auto=format&fit=crop",description:"Tranquil bathroom with natural stone and warm lighting",featured:!1},{title:"Small Bathroom Transformation",category:"bathroom",imageUrl:"https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2574&auto=format&fit=crop",description:"Maximizing space in a compact bathroom with smart design",featured:!1},{title:"Classic White Bathroom",category:"bathroom",imageUrl:"https://images.unsplash.com/photo-1600573472591-ee6c8e695948?q=80&w=2574&auto=format&fit=crop",description:"Timeless white subway tile with chrome fixtures",featured:!1},{title:"Guest Bathroom Renovation",category:"bathroom",imageUrl:"https://images.unsplash.com/photo-1600566752447-f4f7687c5e40?q=80&w=2574&auto=format&fit=crop",description:"Elegant guest bathroom with floating vanity",featured:!1},{title:"Accessible Bathroom Design",category:"bathroom",imageUrl:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2574&auto=format&fit=crop",description:"ADA-compliant bathroom with curbless shower entry",featured:!1},{title:"Spa Shower Upgrade",category:"bathroom",imageUrl:"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2574&auto=format&fit=crop",description:"Custom walk-in shower with glass enclosure and niche storage",featured:!1},{title:"Luxury Bathtub Suite",category:"bathroom",imageUrl:"https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=2574&auto=format&fit=crop",description:"Freestanding soaking tub with coordinated fixtures and tile",featured:!1},{title:"Curbless Shower Design",category:"bathroom",imageUrl:"https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2574&auto=format&fit=crop",description:"Accessible curbless shower with linear drain and bench",featured:!1},{title:"Vanity & Storage Refresh",category:"bathroom",imageUrl:"https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=2574&auto=format&fit=crop",description:"Double-sink vanity with ample storage and warm lighting",featured:!1},{title:"Tile Accent Bath",category:"bathroom",imageUrl:"https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=2574&auto=format&fit=crop",description:"Statement tile feature wall with coordinated flooring",featured:!1}],"secondBlogPost",0,a])},492559,e=>{"use strict";var t=e.i(88222);e.s(["Plus",()=>t.default])},38012,e=>{"use strict";let t=(0,e.i(131763).default)("house",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]]);e.s(["default",()=>t])},818151,e=>{"use strict";var t=e.i(38012);e.s(["Home",()=>t.default])},162924,(e,t,a)=>{t.exports=e.r(537109)},970065,e=>{"use strict";var t=e.i(687433),a=e.i(647163);function r({className:e,...r}){return(0,t.jsx)("div",{"data-slot":"card",className:(0,a.cn)("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",e),...r})}function i({className:e,...r}){return(0,t.jsx)("div",{"data-slot":"card-header",className:(0,a.cn)("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",e),...r})}function o({className:e,...r}){return(0,t.jsx)("div",{"data-slot":"card-title",className:(0,a.cn)("leading-none font-semibold",e),...r})}function n({className:e,...r}){return(0,t.jsx)("div",{"data-slot":"card-description",className:(0,a.cn)("text-muted-foreground text-sm",e),...r})}function s({className:e,...r}){return(0,t.jsx)("div",{"data-slot":"card-content",className:(0,a.cn)("px-6",e),...r})}e.s(["Card",()=>r,"CardContent",()=>s,"CardDescription",()=>n,"CardHeader",()=>i,"CardTitle",()=>o])},45315,e=>{"use strict";let t=(0,e.i(131763).default)("layout-dashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);e.s(["default",()=>t])},305149,e=>{"use strict";let t=(0,e.i(131763).default)("file-text",[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);e.s(["default",()=>t])},304477,e=>{"use strict";let t=(0,e.i(131763).default)("image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);e.s(["default",()=>t])},664984,e=>{"use strict";let t=(0,e.i(131763).default)("message-square",[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]]);e.s(["default",()=>t])},336512,e=>{"use strict";let t=(0,e.i(131763).default)("users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]]);e.s(["default",()=>t])},39404,e=>{"use strict";let t=(0,e.i(131763).default)("settings",[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);e.s(["default",()=>t])},51861,e=>{"use strict";let t=(0,e.i(131763).default)("log-out",[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]]);e.s(["default",()=>t])},715381,e=>{"use strict";let t=(0,e.i(131763).default)("folder-open",[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]);e.s(["default",()=>t])},374701,106154,217276,102644,394786,e=>{"use strict";var t=e.i(687433),a=e.i(344440),r=e.i(162924),i=e.i(791432),o=e.i(868183),n=e.i(647163),s=e.i(508037),l=e.i(167881),d=e.i(45315),d=d,c=e.i(305149);e.s(["FileText",()=>c.default],106154);var c=c,u=e.i(304477);e.s(["Image",()=>u.default],217276);var u=u,h=e.i(664984);e.s(["MessageSquare",()=>h.default],102644);var h=h,m=e.i(336512);e.s(["Users",()=>m.default],394786);var m=m,f=e.i(39404),f=f,g=e.i(51861),g=g,p=e.i(818151),y=e.i(715381),y=y;let v=[{href:"/admin/dashboard",label:"Dashboard",icon:d.default},{href:"/admin/leads",label:"Leads",icon:m.default},{href:"/admin/blog",label:"Blog Posts",icon:c.default},{href:"/admin/categories",label:"Categories",icon:y.default},{href:"/admin/gallery",label:"Gallery",icon:u.default},{href:"/admin/testimonials",label:"Testimonials",icon:h.default},{href:"/admin/settings",label:"Settings",icon:f.default}];function b(){let e=(0,r.usePathname)(),{signOut:a,user:d}=(0,i.useAuth)();return(0,t.jsxs)("aside",{className:"w-64 min-h-screen bg-card border-r border-border flex flex-col",children:[(0,t.jsx)("div",{className:"p-6 border-b border-border",children:(0,t.jsxs)(o.default,{href:"/admin/dashboard",className:"flex items-center gap-2",children:[(0,t.jsx)("div",{className:"w-8 h-8 bg-primary rounded-lg flex items-center justify-center",children:(0,t.jsx)("span",{className:"text-primary-foreground font-bold text-sm",children:s.siteConfig.name.charAt(0)})}),(0,t.jsx)("span",{className:"font-serif font-semibold text-foreground",children:"Admin Panel"})]})}),(0,t.jsx)("nav",{className:"flex-1 p-4",children:(0,t.jsx)("ul",{className:"space-y-1",children:v.map(a=>{let r=e===a.href||e.startsWith(a.href+"/");return(0,t.jsx)("li",{children:(0,t.jsxs)(o.default,{href:a.href,className:(0,n.cn)("flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",r?"bg-primary text-primary-foreground":"text-muted-foreground hover:bg-secondary hover:text-foreground"),children:[(0,t.jsx)(a.icon,{className:"h-4 w-4"}),a.label]})},a.href)})})}),(0,t.jsxs)("div",{className:"p-4 border-t border-border space-y-2",children:[(0,t.jsx)(l.Button,{asChild:!0,variant:"outline",className:"w-full justify-start",size:"sm",children:(0,t.jsxs)(o.default,{href:"/",target:"_blank",children:[(0,t.jsx)(p.Home,{className:"mr-2 h-4 w-4"}),"View Site"]})}),(0,t.jsx)("div",{className:"px-3 py-2",children:(0,t.jsx)("p",{className:"text-xs text-muted-foreground truncate",children:d?.email})}),(0,t.jsxs)(l.Button,{variant:"ghost",className:"w-full justify-start text-muted-foreground hover:text-destructive",size:"sm",onClick:()=>a(),children:[(0,t.jsx)(g.default,{className:"mr-2 h-4 w-4"}),"Sign Out"]})]})]})}var x=e.i(392120);function w({children:e,title:o,description:n,actions:s}){let{user:l,loading:d,isAdmin:c}=(0,i.useAuth)(),u=(0,r.useRouter)();return((0,a.useEffect)(()=>{d||l&&c||u.push("/admin/login")},[l,d,c,u]),d)?(0,t.jsx)("div",{className:"min-h-screen flex items-center justify-center bg-background",children:(0,t.jsx)(x.Loader2,{className:"h-8 w-8 animate-spin text-primary"})}):l&&c?(0,t.jsxs)("div",{className:"min-h-screen flex bg-background",children:[(0,t.jsx)(b,{}),(0,t.jsx)("main",{className:"flex-1 overflow-auto",children:(0,t.jsxs)("div",{className:"p-8",children:[(0,t.jsxs)("div",{className:"flex items-center justify-between mb-8",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h1",{className:"text-2xl font-serif font-semibold text-foreground",children:o}),n&&(0,t.jsx)("p",{className:"mt-1 text-sm text-muted-foreground",children:n})]}),s&&(0,t.jsx)("div",{className:"flex items-center gap-2",children:s})]}),e]})})]}):null}e.s(["AdminShell",()=>w],374701)},88222,e=>{"use strict";let t=(0,e.i(131763).default)("plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);e.s(["default",()=>t])},507084,e=>{"use strict";let t=e.i(521404).defaultGalleryItems.map((e,t)=>({id:`gallery-${t+1}`,title:e.title,category:e.category,imageUrl:e.imageUrl,description:e.description,featured:e.featured,createdAt:new Date}));async function a(){return[...t].sort((e,t)=>t.createdAt.getTime()-e.createdAt.getTime())}async function r(e){let a=`gallery-${Date.now()}`;return t.push({id:a,...e,createdAt:new Date}),{success:!0,id:a}}async function i(e,a){return t=t.map(t=>t.id===e?{...t,...a}:t),{success:!0}}async function o(e){return t=t.filter(t=>t.id!==e),{success:!0}}async function n(){let e=(await a()).filter(e=>e.featured);return e.length>0?e:a()}async function s(){return t.length}e.s(["createGalleryItem",()=>r,"deleteGalleryItem",()=>o,"getFeaturedGalleryItems",()=>n,"getGalleryCount",()=>s,"getGalleryItems",()=>a,"updateGalleryItem",()=>i])},318668,e=>{"use strict";var t=e.i(763561);e.s(["Eye",()=>t.default])},472388,e=>{"use strict";var t=e.i(116829);e.s(["Pencil",()=>t.default])},797538,e=>{"use strict";let t=(0,e.i(131763).default)("eye-off",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);e.s(["default",()=>t])},763561,e=>{"use strict";let t=(0,e.i(131763).default)("eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);e.s(["default",()=>t])},116829,e=>{"use strict";let t=(0,e.i(131763).default)("pencil",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);e.s(["default",()=>t])},472745,e=>{"use strict";var t=e.i(797538);e.s(["EyeOff",()=>t.default])},630374,e=>{"use strict";var t=e.i(687433),a=e.i(344440),r=e.i(291967),i=e.i(429779),o=e.i(362497),n=e.i(411207),s=e.i(16671),l=e.i(705840),d=e.i(385828),c=e.i(254340),u=e.i(949874),h=e.i(638169),m=e.i(189585),f=e.i(469759),g=e.i(73772),p=e.i(160310),y="Dialog",[v,b]=(0,o.createContextScope)(y),[x,w]=v(y),C=e=>{let{__scopeDialog:r,children:i,open:o,defaultOpen:l,onOpenChange:d,modal:c=!0}=e,u=a.useRef(null),h=a.useRef(null),[m,f]=(0,s.useControllableState)({prop:o,defaultProp:l??!1,onChange:d,caller:y});return(0,t.jsx)(x,{scope:r,triggerRef:u,contentRef:h,contentId:(0,n.useId)(),titleId:(0,n.useId)(),descriptionId:(0,n.useId)(),open:m,onOpenChange:f,onOpenToggle:a.useCallback(()=>f(e=>!e),[f]),modal:c,children:i})};C.displayName=y;var j="DialogTrigger",k=a.forwardRef((e,a)=>{let{__scopeDialog:o,...n}=e,s=w(j,o),l=(0,i.useComposedRefs)(a,s.triggerRef);return(0,t.jsx)(h.Primitive.button,{type:"button","aria-haspopup":"dialog","aria-expanded":s.open,"aria-controls":s.contentId,"data-state":H(s.open),...n,ref:l,onClick:(0,r.composeEventHandlers)(e.onClick,s.onOpenToggle)})});k.displayName=j;var N="DialogPortal",[A,S]=v(N,{forceMount:void 0}),I=e=>{let{__scopeDialog:r,forceMount:i,children:o,container:n}=e,s=w(N,r);return(0,t.jsx)(A,{scope:r,forceMount:i,children:a.Children.map(o,e=>(0,t.jsx)(u.Presence,{present:i||s.open,children:(0,t.jsx)(c.Portal,{asChild:!0,container:n,children:e})}))})};I.displayName=N;var z="DialogOverlay",R=a.forwardRef((e,a)=>{let r=S(z,e.__scopeDialog),{forceMount:i=r.forceMount,...o}=e,n=w(z,e.__scopeDialog);return n.modal?(0,t.jsx)(u.Presence,{present:i||n.open,children:(0,t.jsx)(M,{...o,ref:a})}):null});R.displayName=z;var D=(0,p.createSlot)("DialogOverlay.RemoveScroll"),M=a.forwardRef((e,a)=>{let{__scopeDialog:r,...i}=e,o=w(z,r);return(0,t.jsx)(f.RemoveScroll,{as:D,allowPinchZoom:!0,shards:[o.contentRef],children:(0,t.jsx)(h.Primitive.div,{"data-state":H(o.open),...i,ref:a,style:{pointerEvents:"auto",...i.style}})})}),T="DialogContent",E=a.forwardRef((e,a)=>{let r=S(T,e.__scopeDialog),{forceMount:i=r.forceMount,...o}=e,n=w(T,e.__scopeDialog);return(0,t.jsx)(u.Presence,{present:i||n.open,children:n.modal?(0,t.jsx)(P,{...o,ref:a}):(0,t.jsx)(B,{...o,ref:a})})});E.displayName=T;var P=a.forwardRef((e,o)=>{let n=w(T,e.__scopeDialog),s=a.useRef(null),l=(0,i.useComposedRefs)(o,n.contentRef,s);return a.useEffect(()=>{let e=s.current;if(e)return(0,g.hideOthers)(e)},[]),(0,t.jsx)(O,{...e,ref:l,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:(0,r.composeEventHandlers)(e.onCloseAutoFocus,e=>{e.preventDefault(),n.triggerRef.current?.focus()}),onPointerDownOutside:(0,r.composeEventHandlers)(e.onPointerDownOutside,e=>{let t=e.detail.originalEvent,a=0===t.button&&!0===t.ctrlKey;(2===t.button||a)&&e.preventDefault()}),onFocusOutside:(0,r.composeEventHandlers)(e.onFocusOutside,e=>e.preventDefault())})}),B=a.forwardRef((e,r)=>{let i=w(T,e.__scopeDialog),o=a.useRef(!1),n=a.useRef(!1);return(0,t.jsx)(O,{...e,ref:r,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{e.onCloseAutoFocus?.(t),t.defaultPrevented||(o.current||i.triggerRef.current?.focus(),t.preventDefault()),o.current=!1,n.current=!1},onInteractOutside:t=>{e.onInteractOutside?.(t),t.defaultPrevented||(o.current=!0,"pointerdown"===t.detail.originalEvent.type&&(n.current=!0));let a=t.target;i.triggerRef.current?.contains(a)&&t.preventDefault(),"focusin"===t.detail.originalEvent.type&&n.current&&t.preventDefault()}})}),O=a.forwardRef((e,r)=>{let{__scopeDialog:o,trapFocus:n,onOpenAutoFocus:s,onCloseAutoFocus:c,...u}=e,h=w(T,o),f=a.useRef(null),g=(0,i.useComposedRefs)(r,f);return(0,m.useFocusGuards)(),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d.FocusScope,{asChild:!0,loop:!0,trapped:n,onMountAutoFocus:s,onUnmountAutoFocus:c,children:(0,t.jsx)(l.DismissableLayer,{role:"dialog",id:h.contentId,"aria-describedby":h.descriptionId,"aria-labelledby":h.titleId,"data-state":H(h.open),...u,ref:g,onDismiss:()=>h.onOpenChange(!1)})}),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(V,{titleId:h.titleId}),(0,t.jsx)(Y,{contentRef:f,descriptionId:h.descriptionId})]})]})}),F="DialogTitle",U=a.forwardRef((e,a)=>{let{__scopeDialog:r,...i}=e,o=w(F,r);return(0,t.jsx)(h.Primitive.h2,{id:o.titleId,...i,ref:a})});U.displayName=F;var L="DialogDescription";a.forwardRef((e,a)=>{let{__scopeDialog:r,...i}=e,o=w(L,r);return(0,t.jsx)(h.Primitive.p,{id:o.descriptionId,...i,ref:a})}).displayName=L;var W="DialogClose",q=a.forwardRef((e,a)=>{let{__scopeDialog:i,...o}=e,n=w(W,i);return(0,t.jsx)(h.Primitive.button,{type:"button",...o,ref:a,onClick:(0,r.composeEventHandlers)(e.onClick,()=>n.onOpenChange(!1))})});function H(e){return e?"open":"closed"}q.displayName=W;var _="DialogTitleWarning",[G,$]=(0,o.createContext)(_,{contentName:T,titleName:F,docsSlug:"dialog"}),V=({titleId:e})=>{let t=$(_),r=`\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;return a.useEffect(()=>{e&&(document.getElementById(e)||console.error(r))},[r,e]),null},Y=({contentRef:e,descriptionId:t})=>{let r=$("DialogDescriptionWarning"),i=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${r.contentName}}.`;return a.useEffect(()=>{let a=e.current?.getAttribute("aria-describedby");t&&a&&(document.getElementById(t)||console.warn(i))},[i,e,t]),null},K=e.i(465696),K=K,Q=e.i(647163);function Z({...e}){return(0,t.jsx)(C,{"data-slot":"dialog",...e})}function J({...e}){return(0,t.jsx)(k,{"data-slot":"dialog-trigger",...e})}function X({...e}){return(0,t.jsx)(I,{"data-slot":"dialog-portal",...e})}function ee({className:e,...a}){return(0,t.jsx)(R,{"data-slot":"dialog-overlay",className:(0,Q.cn)("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",e),...a})}function et({className:e,children:a,showCloseButton:r=!0,...i}){return(0,t.jsxs)(X,{"data-slot":"dialog-portal",children:[(0,t.jsx)(ee,{}),(0,t.jsxs)(E,{"data-slot":"dialog-content",className:(0,Q.cn)("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",e),...i,children:[a,r&&(0,t.jsxs)(q,{"data-slot":"dialog-close",className:"ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",children:[(0,t.jsx)(K.default,{}),(0,t.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})}function ea({className:e,...a}){return(0,t.jsx)("div",{"data-slot":"dialog-header",className:(0,Q.cn)("flex flex-col gap-2 text-center sm:text-left",e),...a})}function er({className:e,...a}){return(0,t.jsx)(U,{"data-slot":"dialog-title",className:(0,Q.cn)("text-lg leading-none font-semibold",e),...a})}e.s(["Dialog",()=>Z,"DialogContent",()=>et,"DialogHeader",()=>ea,"DialogTitle",()=>er,"DialogTrigger",()=>J],630374)},95787,e=>{"use strict";let t=(0,e.i(131763).default)("grid-3x3",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]]);e.s(["default",()=>t])},927685,e=>{"use strict";let t=(0,e.i(131763).default)("list",[["path",{d:"M3 5h.01",key:"18ugdj"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 19h.01",key:"noohij"}],["path",{d:"M8 5h13",key:"1pao27"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 19h13",key:"m83p4d"}]]);e.s(["default",()=>t])},759606,e=>{"use strict";var t=e.i(687433),a=e.i(344440),r=e.i(896027),i=e.i(374701),o=e.i(970065),n=e.i(167881),s=e.i(23750),l=e.i(10708),d=e.i(184762),c=e.i(630374),u=e.i(62870),h=e.i(507084),m=e.i(492559),f=e.i(472388),g=e.i(417849),p=e.i(318668),y=e.i(472745),v=e.i(95787),v=v,b=e.i(927685),b=b;let x=[{value:"bathroom",label:"Bathroom Remodeling"},{value:"shower",label:"Shower Remodel"},{value:"vanity",label:"Vanity & Countertops"}];function w(){let[e,w]=(0,a.useState)([]),[C,j]=(0,a.useState)(!0),[k,N]=(0,a.useState)(!1),[A,S]=(0,a.useState)(null),[I,z]=(0,a.useState)("grid"),[R,D]=(0,a.useState)({title:"",description:"",imageUrl:"",category:"",beforeImage:"",afterImage:"",featured:!1});async function M(){w(await (0,h.getGalleryItems)()),j(!1)}async function T(){A?await (0,h.updateGalleryItem)(A.id,R):await (0,h.createGalleryItem)(R),N(!1),S(null),B(),M()}async function E(e){confirm("Are you sure you want to delete this gallery item?")&&(await (0,h.deleteGalleryItem)(e),M())}async function P(e){await (0,h.updateGalleryItem)(e.id,{featured:!e.featured}),M()}function B(){D({title:"",description:"",imageUrl:"",category:"",beforeImage:"",afterImage:"",featured:!1})}function O(e){S(e),D({title:e.title,description:e.description||"",imageUrl:e.imageUrl,category:e.category,beforeImage:e.beforeImage||"",afterImage:e.afterImage||"",featured:e.featured||!1}),N(!0)}function F(){S(null),B(),N(!0)}return(0,a.useEffect)(()=>{M()},[]),(0,t.jsx)(i.AdminShell,{title:"Gallery",description:"Manage project photos and before/after images",actions:(0,t.jsxs)("div",{className:"flex items-center gap-2",children:[(0,t.jsxs)("div",{className:"flex items-center border rounded-lg",children:[(0,t.jsx)(n.Button,{variant:"grid"===I?"default":"ghost",size:"sm",onClick:()=>z("grid"),children:(0,t.jsx)(v.default,{className:"h-4 w-4"})}),(0,t.jsx)(n.Button,{variant:"list"===I?"default":"ghost",size:"sm",onClick:()=>z("list"),children:(0,t.jsx)(b.default,{className:"h-4 w-4"})})]}),(0,t.jsxs)(c.Dialog,{open:k,onOpenChange:N,children:[(0,t.jsx)(c.DialogTrigger,{asChild:!0,children:(0,t.jsxs)(n.Button,{onClick:F,children:[(0,t.jsx)(m.Plus,{className:"mr-2 h-4 w-4"}),"Add Image"]})}),(0,t.jsxs)(c.DialogContent,{className:"max-w-lg",children:[(0,t.jsx)(c.DialogHeader,{children:(0,t.jsx)(c.DialogTitle,{children:A?"Edit Gallery Item":"Add Gallery Item"})}),(0,t.jsxs)("div",{className:"space-y-4 py-4 max-h-[70vh] overflow-y-auto",children:[(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsx)(l.Label,{htmlFor:"title",children:"Title"}),(0,t.jsx)(s.Input,{id:"title",value:R.title,onChange:e=>D({...R,title:e.target.value}),placeholder:"Project title"})]}),(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsx)(l.Label,{htmlFor:"category",children:"Category"}),(0,t.jsxs)(u.Select,{value:R.category,onValueChange:e=>D({...R,category:e}),children:[(0,t.jsx)(u.SelectTrigger,{children:(0,t.jsx)(u.SelectValue,{placeholder:"Select category"})}),(0,t.jsx)(u.SelectContent,{children:x.map(e=>(0,t.jsx)(u.SelectItem,{value:e.value,children:e.label},e.value))})]})]}),(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsx)(l.Label,{htmlFor:"imageUrl",children:"Main Image URL"}),(0,t.jsx)(s.Input,{id:"imageUrl",value:R.imageUrl,onChange:e=>D({...R,imageUrl:e.target.value}),placeholder:"https://..."})]}),(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsx)(l.Label,{htmlFor:"beforeImage",children:"Before Image URL (optional)"}),(0,t.jsx)(s.Input,{id:"beforeImage",value:R.beforeImage,onChange:e=>D({...R,beforeImage:e.target.value}),placeholder:"https://..."})]}),(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsx)(l.Label,{htmlFor:"afterImage",children:"After Image URL (optional)"}),(0,t.jsx)(s.Input,{id:"afterImage",value:R.afterImage,onChange:e=>D({...R,afterImage:e.target.value}),placeholder:"https://..."})]}),(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsx)(l.Label,{htmlFor:"description",children:"Description"}),(0,t.jsx)(d.Textarea,{id:"description",value:R.description,onChange:e=>D({...R,description:e.target.value}),placeholder:"Project description",rows:3})]}),(0,t.jsxs)(n.Button,{onClick:T,className:"w-full",children:[A?"Update":"Add"," Gallery Item"]})]})]})]})]}),children:C?(0,t.jsx)("div",{className:"p-8 text-center text-muted-foreground",children:"Loading gallery..."}):0===e.length?(0,t.jsx)(o.Card,{children:(0,t.jsxs)(o.CardContent,{className:"p-8 text-center",children:[(0,t.jsx)("p",{className:"text-muted-foreground mb-4",children:"No gallery items yet"}),(0,t.jsxs)(n.Button,{onClick:F,children:[(0,t.jsx)(m.Plus,{className:"mr-2 h-4 w-4"}),"Add First Image"]})]})}):"grid"===I?(0,t.jsx)("div",{className:"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",children:e.map(e=>(0,t.jsxs)(o.Card,{className:"overflow-hidden group",children:[(0,t.jsxs)("div",{className:"relative aspect-square",children:[(0,t.jsx)(r.default,{src:e.imageUrl,alt:e.title,fill:!0,className:"object-cover"}),(0,t.jsxs)("div",{className:"absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2",children:[(0,t.jsx)(n.Button,{variant:"secondary",size:"icon",onClick:()=>O(e),children:(0,t.jsx)(f.Pencil,{className:"h-4 w-4"})}),(0,t.jsx)(n.Button,{variant:"secondary",size:"icon",onClick:()=>P(e),children:e.featured?(0,t.jsx)(y.EyeOff,{className:"h-4 w-4"}):(0,t.jsx)(p.Eye,{className:"h-4 w-4"})}),(0,t.jsx)(n.Button,{variant:"destructive",size:"icon",onClick:()=>E(e.id),children:(0,t.jsx)(g.Trash2,{className:"h-4 w-4"})})]}),e.featured&&(0,t.jsx)("div",{className:"absolute top-2 left-2 px-2 py-1 bg-primary text-primary-foreground text-xs rounded",children:"Featured"})]}),(0,t.jsxs)(o.CardContent,{className:"p-3",children:[(0,t.jsx)("p",{className:"font-medium text-sm truncate",children:e.title}),(0,t.jsx)("p",{className:"text-xs text-muted-foreground capitalize",children:e.category})]})]},e.id))}):(0,t.jsx)(o.Card,{children:(0,t.jsx)(o.CardContent,{className:"p-0",children:(0,t.jsx)("div",{className:"divide-y",children:e.map(e=>(0,t.jsxs)("div",{className:"flex items-center gap-4 p-4",children:[(0,t.jsx)("div",{className:"relative h-16 w-20 rounded overflow-hidden bg-muted",children:(0,t.jsx)(r.default,{src:e.imageUrl,alt:e.title,fill:!0,className:"object-cover"})}),(0,t.jsxs)("div",{className:"flex-1 min-w-0",children:[(0,t.jsx)("p",{className:"font-medium truncate",children:e.title}),(0,t.jsx)("p",{className:"text-sm text-muted-foreground capitalize",children:e.category})]}),(0,t.jsxs)("div",{className:"flex items-center gap-1",children:[(0,t.jsx)(n.Button,{variant:"ghost",size:"icon",onClick:()=>O(e),children:(0,t.jsx)(f.Pencil,{className:"h-4 w-4"})}),(0,t.jsx)(n.Button,{variant:"ghost",size:"icon",onClick:()=>P(e),children:e.featured?(0,t.jsx)(y.EyeOff,{className:"h-4 w-4"}):(0,t.jsx)(p.Eye,{className:"h-4 w-4"})}),(0,t.jsx)(n.Button,{variant:"ghost",size:"icon",className:"text-destructive",onClick:()=>E(e.id),children:(0,t.jsx)(g.Trash2,{className:"h-4 w-4"})})]})]},e.id))})})})})}e.s(["default",()=>w],759606)}]);