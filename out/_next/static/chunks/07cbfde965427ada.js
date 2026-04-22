(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,573443,e=>{"use strict";let t=(0,e.i(131763).default)("chevron-right",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);e.s(["default",()=>t])},291967,e=>{"use strict";function t(e,r,{checkForDefaultPrevented:a=!0}={}){return function(t){if(e?.(t),!1===a||!t.defaultPrevented)return r?.(t)}}"u">typeof window&&window.document&&window.document.createElement,e.s(["composeEventHandlers",()=>t])},9413,e=>{"use strict";var t=e.i(344440),r=e.i(687433);function a(e,a){let i=t.createContext(a),n=e=>{let{children:a,...n}=e,o=t.useMemo(()=>n,Object.values(n));return(0,r.jsx)(i.Provider,{value:o,children:a})};return n.displayName=e+"Provider",[n,function(r){let n=t.useContext(i);if(n)return n;if(void 0!==a)return a;throw Error(`\`${r}\` must be used within \`${e}\``)}]}function i(e,a=[]){let n=[],o=()=>{let r=n.map(e=>t.createContext(e));return function(a){let i=a?.[e]||r;return t.useMemo(()=>({[`__scope${e}`]:{...a,[e]:i}}),[a,i])}};return o.scopeName=e,[function(a,i){let o=t.createContext(i),s=n.length;n=[...n,i];let l=a=>{let{scope:i,children:n,...l}=a,d=i?.[e]?.[s]||o,c=t.useMemo(()=>l,Object.values(l));return(0,r.jsx)(d.Provider,{value:c,children:n})};return l.displayName=a+"Provider",[l,function(r,n){let l=n?.[e]?.[s]||o,d=t.useContext(l);if(d)return d;if(void 0!==i)return i;throw Error(`\`${r}\` must be used within \`${a}\``)}]},function(...e){let r=e[0];if(1===e.length)return r;let a=()=>{let a=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let i=a.reduce((t,{useScope:r,scopeName:a})=>{let i=r(e)[`__scope${a}`];return{...t,...i}},{});return t.useMemo(()=>({[`__scope${r.scopeName}`]:i}),[i])}};return a.scopeName=r.scopeName,a}(o,...a)]}e.s(["createContext",()=>a,"createContextScope",()=>i])},18731,e=>{"use strict";var t=e.i(344440),r=globalThis?.document?t.useLayoutEffect:()=>{};e.s(["useLayoutEffect",()=>r])},136567,e=>{"use strict";var t=e.i(344440),r=e.i(18731);t[" useEffectEvent ".trim().toString()],t[" useInsertionEffect ".trim().toString()];var a=t[" useInsertionEffect ".trim().toString()]||r.useLayoutEffect;function i({prop:e,defaultProp:r,onChange:i=()=>{},caller:n}){let[o,s,l]=function({defaultProp:e,onChange:r}){let[i,n]=t.useState(e),o=t.useRef(i),s=t.useRef(r);return a(()=>{s.current=r},[r]),t.useEffect(()=>{o.current!==i&&(s.current?.(i),o.current=i)},[i,o]),[i,n,s]}({defaultProp:r,onChange:i}),d=void 0!==e,c=d?e:o;{let r=t.useRef(void 0!==e);t.useEffect(()=>{let e=r.current;if(e!==d){let t=d?"controlled":"uncontrolled";console.warn(`${n} is changing from ${e?"controlled":"uncontrolled"} to ${t}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`)}r.current=d},[d,n])}return[c,t.useCallback(t=>{if(d){let r="function"==typeof t?t(e):t;r!==e&&l.current?.(r)}else s(t)},[d,e,s,l])]}Symbol("RADIX:SYNC_STATE"),e.s(["useControllableState",()=>i],136567)},160310,e=>{"use strict";var t=e.i(344440),r=e.i(922353),a=e.i(687433);function i(e){var i;let n,s=(i=e,(n=t.forwardRef((e,a)=>{let{children:i,...n}=e;if(t.isValidElement(i)){var o;let e,s,l=(o=i,(s=(e=Object.getOwnPropertyDescriptor(o.props,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning)?o.ref:(s=(e=Object.getOwnPropertyDescriptor(o,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning)?o.props.ref:o.props.ref||o.ref),d=function(e,t){let r={...t};for(let a in t){let i=e[a],n=t[a];/^on[A-Z]/.test(a)?i&&n?r[a]=(...e)=>{let t=n(...e);return i(...e),t}:i&&(r[a]=i):"style"===a?r[a]={...i,...n}:"className"===a&&(r[a]=[i,n].filter(Boolean).join(" "))}return{...e,...r}}(n,i.props);return i.type!==t.Fragment&&(d.ref=a?(0,r.composeRefs)(a,l):l),t.cloneElement(i,d)}return t.Children.count(i)>1?t.Children.only(null):null})).displayName=`${i}.SlotClone`,n),l=t.forwardRef((e,r)=>{let{children:i,...n}=e,l=t.Children.toArray(i),d=l.find(o);if(d){let e=d.props.children,i=l.map(r=>r!==d?r:t.Children.count(e)>1?t.Children.only(null):t.isValidElement(e)?e.props.children:null);return(0,a.jsx)(s,{...n,ref:r,children:t.isValidElement(e)?t.cloneElement(e,void 0,i):null})}return(0,a.jsx)(s,{...n,ref:r,children:i})});return l.displayName=`${e}.Slot`,l}var n=Symbol("radix.slottable");function o(e){return t.isValidElement(e)&&"function"==typeof e.type&&"__radixId"in e.type&&e.type.__radixId===n}e.s(["createSlot",()=>i])},285565,e=>{"use strict";var t=e.i(344440),r=e.i(165596),a=e.i(160310),i=e.i(687433),n=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"].reduce((e,r)=>{let n=(0,a.createSlot)(`Primitive.${r}`),o=t.forwardRef((e,t)=>{let{asChild:a,...o}=e;return"u">typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,i.jsx)(a?n:r,{...o,ref:t})});return o.displayName=`Primitive.${r}`,{...e,[r]:o}},{});function o(e,t){e&&r.flushSync(()=>e.dispatchEvent(t))}e.s(["Primitive",()=>n,"dispatchDiscreteCustomEvent",()=>o])},411207,e=>{"use strict";var t=e.i(344440),r=e.i(18731),a=t[" useId ".trim().toString()]||(()=>void 0),i=0;function n(e){let[n,o]=t.useState(a());return(0,r.useLayoutEffect)(()=>{e||o(e=>e??String(i++))},[e]),e||(n?`radix-${n}`:"")}e.s(["useId",()=>n])},987099,775649,e=>{"use strict";var t=e.i(344440),r=e.i(9413),a=e.i(922353),i=e.i(160310),n=e.i(687433);function o(e){let o=e+"CollectionProvider",[s,l]=(0,r.createContextScope)(o),[d,c]=s(o,{collectionRef:{current:null},itemMap:new Map}),u=e=>{let{scope:r,children:a}=e,i=t.default.useRef(null),o=t.default.useRef(new Map).current;return(0,n.jsx)(d,{scope:r,itemMap:o,collectionRef:i,children:a})};u.displayName=o;let h=e+"CollectionSlot",m=(0,i.createSlot)(h),f=t.default.forwardRef((e,t)=>{let{scope:r,children:i}=e,o=c(h,r),s=(0,a.useComposedRefs)(t,o.collectionRef);return(0,n.jsx)(m,{ref:s,children:i})});f.displayName=h;let g=e+"CollectionItemSlot",p="data-radix-collection-item",y=(0,i.createSlot)(g),b=t.default.forwardRef((e,r)=>{let{scope:i,children:o,...s}=e,l=t.default.useRef(null),d=(0,a.useComposedRefs)(r,l),u=c(g,i);return t.default.useEffect(()=>(u.itemMap.set(l,{ref:l,...s}),()=>void u.itemMap.delete(l))),(0,n.jsx)(y,{...{[p]:""},ref:d,children:o})});return b.displayName=g,[{Provider:u,Slot:f,ItemSlot:b},function(r){let a=c(e+"CollectionConsumer",r);return t.default.useCallback(()=>{let e=a.collectionRef.current;if(!e)return[];let t=Array.from(e.querySelectorAll(`[${p}]`));return Array.from(a.itemMap.values()).sort((e,r)=>t.indexOf(e.ref.current)-t.indexOf(r.ref.current))},[a.collectionRef,a.itemMap])},l]}var s=new WeakMap;function l(e,t){var r,a;let i,n,o;if("at"in Array.prototype)return Array.prototype.at.call(e,t);let s=(r=e,a=t,i=r.length,(o=(n=d(a))>=0?n:i+n)<0||o>=i?-1:o);return -1===s?void 0:e[s]}function d(e){return e!=e||0===e?0:Math.trunc(e)}(class e extends Map{#e;constructor(e){super(e),this.#e=[...super.keys()],s.set(this,!0)}set(e,t){return s.get(this)&&(this.has(e)?this.#e[this.#e.indexOf(e)]=e:this.#e.push(e)),super.set(e,t),this}insert(e,t,r){let a,i=this.has(t),n=this.#e.length,o=d(e),s=o>=0?o:n+o,l=s<0||s>=n?-1:s;if(l===this.size||i&&l===this.size-1||-1===l)return this.set(t,r),this;let c=this.size+ +!i;o<0&&s++;let u=[...this.#e],h=!1;for(let e=s;e<c;e++)if(s===e){let n=u[e];u[e]===t&&(n=u[e+1]),i&&this.delete(t),a=this.get(n),this.set(t,r)}else{h||u[e-1]!==t||(h=!0);let r=u[h?e:e-1],i=a;a=this.get(r),this.delete(r),this.set(r,i)}return this}with(t,r,a){let i=new e(this);return i.insert(t,r,a),i}before(e){let t=this.#e.indexOf(e)-1;if(!(t<0))return this.entryAt(t)}setBefore(e,t,r){let a=this.#e.indexOf(e);return -1===a?this:this.insert(a,t,r)}after(e){let t=this.#e.indexOf(e);if(-1!==(t=-1===t||t===this.size-1?-1:t+1))return this.entryAt(t)}setAfter(e,t,r){let a=this.#e.indexOf(e);return -1===a?this:this.insert(a+1,t,r)}first(){return this.entryAt(0)}last(){return this.entryAt(-1)}clear(){return this.#e=[],super.clear()}delete(e){let t=super.delete(e);return t&&this.#e.splice(this.#e.indexOf(e),1),t}deleteAt(e){let t=this.keyAt(e);return void 0!==t&&this.delete(t)}at(e){let t=l(this.#e,e);if(void 0!==t)return this.get(t)}entryAt(e){let t=l(this.#e,e);if(void 0!==t)return[t,this.get(t)]}indexOf(e){return this.#e.indexOf(e)}keyAt(e){return l(this.#e,e)}from(e,t){let r=this.indexOf(e);if(-1===r)return;let a=r+t;return a<0&&(a=0),a>=this.size&&(a=this.size-1),this.at(a)}keyFrom(e,t){let r=this.indexOf(e);if(-1===r)return;let a=r+t;return a<0&&(a=0),a>=this.size&&(a=this.size-1),this.keyAt(a)}find(e,t){let r=0;for(let a of this){if(Reflect.apply(e,t,[a,r,this]))return a;r++}}findIndex(e,t){let r=0;for(let a of this){if(Reflect.apply(e,t,[a,r,this]))return r;r++}return -1}filter(t,r){let a=[],i=0;for(let e of this)Reflect.apply(t,r,[e,i,this])&&a.push(e),i++;return new e(a)}map(t,r){let a=[],i=0;for(let e of this)a.push([e[0],Reflect.apply(t,r,[e,i,this])]),i++;return new e(a)}reduce(...e){let[t,r]=e,a=0,i=r??this.at(0);for(let r of this)i=0===a&&1===e.length?r:Reflect.apply(t,this,[i,r,a,this]),a++;return i}reduceRight(...e){let[t,r]=e,a=r??this.at(-1);for(let r=this.size-1;r>=0;r--){let i=this.at(r);a=r===this.size-1&&1===e.length?i:Reflect.apply(t,this,[a,i,r,this])}return a}toSorted(t){return new e([...this.entries()].sort(t))}toReversed(){let t=new e;for(let e=this.size-1;e>=0;e--){let r=this.keyAt(e),a=this.get(r);t.set(r,a)}return t}toSpliced(...t){let r=[...this.entries()];return r.splice(...t),new e(r)}slice(t,r){let a=new e,i=this.size-1;if(void 0===t)return a;t<0&&(t+=this.size),void 0!==r&&r>0&&(i=r-1);for(let e=t;e<=i;e++){let t=this.keyAt(e),r=this.get(t);a.set(t,r)}return a}every(e,t){let r=0;for(let a of this){if(!Reflect.apply(e,t,[a,r,this]))return!1;r++}return!0}some(e,t){let r=0;for(let a of this){if(Reflect.apply(e,t,[a,r,this]))return!0;r++}return!1}}),e.s(["createCollection",()=>o],987099);var c=t.createContext(void 0);function u(e){let r=t.useContext(c);return e||r||"ltr"}e.s(["useDirection",()=>u],775649)},690816,e=>{"use strict";var t=e.i(344440),r=e.i(922353),a=e.i(18731),i=e=>{var i;let o,s,{present:l,children:d}=e,c=function(e){var r,i;let[o,s]=t.useState(),l=t.useRef(null),d=t.useRef(e),c=t.useRef("none"),[u,h]=(r=e?"mounted":"unmounted",i={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},t.useReducer((e,t)=>i[e][t]??e,r));return t.useEffect(()=>{let e=n(l.current);c.current="mounted"===u?e:"none"},[u]),(0,a.useLayoutEffect)(()=>{let t=l.current,r=d.current;if(r!==e){let a=c.current,i=n(t);e?h("MOUNT"):"none"===i||t?.display==="none"?h("UNMOUNT"):r&&a!==i?h("ANIMATION_OUT"):h("UNMOUNT"),d.current=e}},[e,h]),(0,a.useLayoutEffect)(()=>{if(o){let e,t=o.ownerDocument.defaultView??window,r=r=>{let a=n(l.current).includes(CSS.escape(r.animationName));if(r.target===o&&a&&(h("ANIMATION_END"),!d.current)){let r=o.style.animationFillMode;o.style.animationFillMode="forwards",e=t.setTimeout(()=>{"forwards"===o.style.animationFillMode&&(o.style.animationFillMode=r)})}},a=e=>{e.target===o&&(c.current=n(l.current))};return o.addEventListener("animationstart",a),o.addEventListener("animationcancel",r),o.addEventListener("animationend",r),()=>{t.clearTimeout(e),o.removeEventListener("animationstart",a),o.removeEventListener("animationcancel",r),o.removeEventListener("animationend",r)}}h("ANIMATION_END")},[o,h]),{isPresent:["mounted","unmountSuspended"].includes(u),ref:t.useCallback(e=>{l.current=e?getComputedStyle(e):null,s(e)},[])}}(l),u="function"==typeof d?d({present:c.isPresent}):t.Children.only(d),h=(0,r.useComposedRefs)(c.ref,(i=u,(s=(o=Object.getOwnPropertyDescriptor(i.props,"ref")?.get)&&"isReactWarning"in o&&o.isReactWarning)?i.ref:(s=(o=Object.getOwnPropertyDescriptor(i,"ref")?.get)&&"isReactWarning"in o&&o.isReactWarning)?i.props.ref:i.props.ref||i.ref));return"function"==typeof d||c.isPresent?t.cloneElement(u,{ref:h}):null};function n(e){return e?.animationName||"none"}i.displayName="Presence",e.s(["Presence",()=>i])},265302,e=>{"use strict";let t=(0,e.i(131763).default)("loader-circle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);e.s(["default",()=>t])},392120,e=>{"use strict";var t=e.i(265302);e.s(["Loader2",()=>t.default])},516911,e=>{"use strict";let t=(0,e.i(131763).default)("check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);e.s(["default",()=>t])},38012,e=>{"use strict";let t=(0,e.i(131763).default)("house",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]]);e.s(["default",()=>t])},818151,e=>{"use strict";var t=e.i(38012);e.s(["Home",()=>t.default])},86382,e=>{"use strict";let t=(0,e.i(131763).default)("calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);e.s(["default",()=>t])},295228,e=>{"use strict";var t=e.i(86382);e.s(["Calendar",()=>t.default])},521404,e=>{"use strict";let t={title:"Complete Guide to Bathroom Remodeling in Chandler, Arizona",slug:"complete-guide-bathroom-remodeling-chandler-arizona",excerpt:"Everything you need to know about bathroom remodeling in Chandler, Arizona. From planning and budgeting to choosing materials and hiring the right contractor.",content:`
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
  `,author:"Chandler Bathroom Remodeling Team",category:"Design Trends",tags:["bathroom design trends 2024","chandler arizona bathroom","modern bathroom design","smart bathroom technology","sustainable bathroom"],featuredImage:"https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2574&auto=format&fit=crop",metaTitle:"2024 Bathroom Design Trends | Chandler Arizona Bathroom Remodeling",metaDescription:"Discover the hottest bathroom design trends for 2024 in Chandler, Arizona. From spa features to smart technology, transform your bathroom with modern ideas.",metaKeywords:"bathroom design trends 2024, chandler arizona bathroom remodeling, modern bathroom design, smart bathroom technology, sustainable bathroom materials",status:"published",publishedAt:new Date().toISOString(),createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()};e.s(["defaultBlogPost",0,t,"defaultGalleryItems",0,[{title:"Modern Master Bathroom",category:"bathroom",imageUrl:"https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=2574&auto=format&fit=crop",description:"Complete master bathroom renovation with walk-in shower and freestanding tub",featured:!0},{title:"Luxury Shower Remodel",category:"bathroom",imageUrl:"https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=2369&auto=format&fit=crop",description:"Custom frameless glass shower with rainfall showerhead",featured:!0},{title:"Contemporary Vanity Design",category:"bathroom",imageUrl:"https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2574&auto=format&fit=crop",description:"Double vanity with quartz countertops and modern fixtures",featured:!1},{title:"Spa-Inspired Retreat",category:"bathroom",imageUrl:"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2574&auto=format&fit=crop",description:"Tranquil bathroom with natural stone and warm lighting",featured:!1},{title:"Small Bathroom Transformation",category:"bathroom",imageUrl:"https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2574&auto=format&fit=crop",description:"Maximizing space in a compact bathroom with smart design",featured:!1},{title:"Classic White Bathroom",category:"bathroom",imageUrl:"https://images.unsplash.com/photo-1600573472591-ee6c8e695948?q=80&w=2574&auto=format&fit=crop",description:"Timeless white subway tile with chrome fixtures",featured:!1},{title:"Guest Bathroom Renovation",category:"bathroom",imageUrl:"https://images.unsplash.com/photo-1600566752447-f4f7687c5e40?q=80&w=2574&auto=format&fit=crop",description:"Elegant guest bathroom with floating vanity",featured:!1},{title:"Accessible Bathroom Design",category:"bathroom",imageUrl:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2574&auto=format&fit=crop",description:"ADA-compliant bathroom with curbless shower entry",featured:!1},{title:"Spa Shower Upgrade",category:"bathroom",imageUrl:"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2574&auto=format&fit=crop",description:"Custom walk-in shower with glass enclosure and niche storage",featured:!1},{title:"Luxury Bathtub Suite",category:"bathroom",imageUrl:"https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=2574&auto=format&fit=crop",description:"Freestanding soaking tub with coordinated fixtures and tile",featured:!1},{title:"Curbless Shower Design",category:"bathroom",imageUrl:"https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2574&auto=format&fit=crop",description:"Accessible curbless shower with linear drain and bench",featured:!1},{title:"Vanity & Storage Refresh",category:"bathroom",imageUrl:"https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=2574&auto=format&fit=crop",description:"Double-sink vanity with ample storage and warm lighting",featured:!1},{title:"Tile Accent Bath",category:"bathroom",imageUrl:"https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=2574&auto=format&fit=crop",description:"Statement tile feature wall with coordinated flooring",featured:!1}],"secondBlogPost",0,r])},899541,e=>{"use strict";var t=e.i(521404);let r=[...[t.defaultBlogPost,t.secondBlogPost].map((e,t)=>({id:`post-${t+1}`,title:e.title,slug:e.slug,content:e.content,excerpt:e.excerpt,featuredImage:e.featuredImage,category:e.category,author:e.author,status:e.status,metaTitle:e.metaTitle,metaDescription:e.metaDescription,keywords:e.metaKeywords.split(",").map(e=>e.trim()).filter(Boolean),tags:e.tags,readTime:12,publishedAt:e.publishedAt,createdAt:e.createdAt,updatedAt:e.updatedAt}))],a=[{id:"cat-1",name:"Bathroom Remodeling",slug:"bathroom-remodeling",description:"Bathroom remodeling guides and advice."},{id:"cat-2",name:"Design Trends",slug:"design-trends",description:"Latest design trends and inspiration."}];async function i(){return[...r].sort((e,t)=>e.createdAt<t.createdAt?1:-1)}async function n(){return(await i()).filter(e=>"published"===e.status)}async function o(e){return r.find(t=>t.slug===e)??null}async function s(e){return r.find(t=>t.id===e)??null}async function l(e){let t=e.slug||e.title.toLowerCase().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-").trim();if(await o(t))return{success:!1,error:"A post with this slug already exists"};let a=`post-${Date.now()}`,i=new Date().toISOString();return r.push({...e,id:a,slug:t,createdAt:i,updatedAt:i,publishedAt:"published"===e.status?i:null}),{success:!0,id:a}}async function d(e,t){return r=r.map(r=>r.id===e?{...r,...t,updatedAt:new Date().toISOString()}:r),{success:!0}}async function c(e){return r=r.filter(t=>t.id!==e),{success:!0}}async function u(e,t){return r=r.map(r=>r.id===e?{...r,status:t,updatedAt:new Date().toISOString(),publishedAt:"published"===t?new Date().toISOString():null}:r),{success:!0}}async function h(){return r.length}async function m(e=5){return(await i()).slice(0,e)}async function f(){return[...a]}async function g(e){let t=`cat-${Date.now()}`;return a.push({id:t,...e}),{success:!0,id:t}}async function p(e,t){return a=a.map(r=>r.id===e?{...r,...t}:r),{success:!0}}async function y(e){return a=a.filter(t=>t.id!==e),{success:!0}}e.s(["createCategory",()=>g,"createPost",()=>l,"deleteCategory",()=>y,"deletePost",()=>c,"getAllPosts",0,i,"getCategories",()=>f,"getPostById",()=>s,"getPostsCount",()=>h,"getPublishedPosts",()=>n,"getRecentPosts",()=>m,"updateCategory",()=>p,"updatePost",()=>d,"updatePostStatus",()=>u])},994179,e=>{"use strict";var t=e.i(687433),r=e.i(493739),a=e.i(294237),i=e.i(647163);let n=(0,a.cva)("inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",secondary:"border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",destructive:"border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"}},defaultVariants:{variant:"default"}});function o({className:e,variant:a,asChild:o=!1,...s}){let l=o?r.Slot:"span";return(0,t.jsx)(l,{"data-slot":"badge",className:(0,i.cn)(n({variant:a}),e),...s})}e.s(["Badge",()=>o])},472745,e=>{"use strict";var t=e.i(797538);e.s(["EyeOff",()=>t.default])},318668,e=>{"use strict";var t=e.i(763561);e.s(["Eye",()=>t.default])},797538,e=>{"use strict";let t=(0,e.i(131763).default)("eye-off",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);e.s(["default",()=>t])},116829,e=>{"use strict";let t=(0,e.i(131763).default)("pencil",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);e.s(["default",()=>t])},763561,e=>{"use strict";let t=(0,e.i(131763).default)("eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);e.s(["default",()=>t])},947627,e=>{"use strict";var t=e.i(687433),r=e.i(647163);function a({className:e,...a}){return(0,t.jsx)("div",{"data-slot":"table-container",className:"relative w-full overflow-x-auto",children:(0,t.jsx)("table",{"data-slot":"table",className:(0,r.cn)("w-full caption-bottom text-sm",e),...a})})}function i({className:e,...a}){return(0,t.jsx)("thead",{"data-slot":"table-header",className:(0,r.cn)("[&_tr]:border-b",e),...a})}function n({className:e,...a}){return(0,t.jsx)("tbody",{"data-slot":"table-body",className:(0,r.cn)("[&_tr:last-child]:border-0",e),...a})}function o({className:e,...a}){return(0,t.jsx)("tr",{"data-slot":"table-row",className:(0,r.cn)("hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors",e),...a})}function s({className:e,...a}){return(0,t.jsx)("th",{"data-slot":"table-head",className:(0,r.cn)("text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",e),...a})}function l({className:e,...a}){return(0,t.jsx)("td",{"data-slot":"table-cell",className:(0,r.cn)("p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",e),...a})}e.s(["Table",()=>a,"TableBody",()=>n,"TableCell",()=>l,"TableHead",()=>s,"TableHeader",()=>i,"TableRow",()=>o])},492559,e=>{"use strict";var t=e.i(88222);e.s(["Plus",()=>t.default])},162924,(e,t,r)=>{t.exports=e.r(537109)},970065,e=>{"use strict";var t=e.i(687433),r=e.i(647163);function a({className:e,...a}){return(0,t.jsx)("div",{"data-slot":"card",className:(0,r.cn)("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",e),...a})}function i({className:e,...a}){return(0,t.jsx)("div",{"data-slot":"card-header",className:(0,r.cn)("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",e),...a})}function n({className:e,...a}){return(0,t.jsx)("div",{"data-slot":"card-title",className:(0,r.cn)("leading-none font-semibold",e),...a})}function o({className:e,...a}){return(0,t.jsx)("div",{"data-slot":"card-description",className:(0,r.cn)("text-muted-foreground text-sm",e),...a})}function s({className:e,...a}){return(0,t.jsx)("div",{"data-slot":"card-content",className:(0,r.cn)("px-6",e),...a})}e.s(["Card",()=>a,"CardContent",()=>s,"CardDescription",()=>o,"CardHeader",()=>i,"CardTitle",()=>n])},45315,e=>{"use strict";let t=(0,e.i(131763).default)("layout-dashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);e.s(["default",()=>t])},305149,e=>{"use strict";let t=(0,e.i(131763).default)("file-text",[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);e.s(["default",()=>t])},304477,e=>{"use strict";let t=(0,e.i(131763).default)("image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);e.s(["default",()=>t])},664984,e=>{"use strict";let t=(0,e.i(131763).default)("message-square",[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]]);e.s(["default",()=>t])},336512,e=>{"use strict";let t=(0,e.i(131763).default)("users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]]);e.s(["default",()=>t])},39404,e=>{"use strict";let t=(0,e.i(131763).default)("settings",[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);e.s(["default",()=>t])},51861,e=>{"use strict";let t=(0,e.i(131763).default)("log-out",[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]]);e.s(["default",()=>t])},715381,e=>{"use strict";let t=(0,e.i(131763).default)("folder-open",[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]);e.s(["default",()=>t])},374701,106154,217276,102644,394786,e=>{"use strict";var t=e.i(687433),r=e.i(344440),a=e.i(162924),i=e.i(791432),n=e.i(868183),o=e.i(647163),s=e.i(508037),l=e.i(167881),d=e.i(45315),d=d,c=e.i(305149);e.s(["FileText",()=>c.default],106154);var c=c,u=e.i(304477);e.s(["Image",()=>u.default],217276);var u=u,h=e.i(664984);e.s(["MessageSquare",()=>h.default],102644);var h=h,m=e.i(336512);e.s(["Users",()=>m.default],394786);var m=m,f=e.i(39404),f=f,g=e.i(51861),g=g,p=e.i(818151),y=e.i(715381),y=y;let b=[{href:"/admin/dashboard",label:"Dashboard",icon:d.default},{href:"/admin/leads",label:"Leads",icon:m.default},{href:"/admin/blog",label:"Blog Posts",icon:c.default},{href:"/admin/categories",label:"Categories",icon:y.default},{href:"/admin/gallery",label:"Gallery",icon:u.default},{href:"/admin/testimonials",label:"Testimonials",icon:h.default},{href:"/admin/settings",label:"Settings",icon:f.default}];function w(){let e=(0,a.usePathname)(),{signOut:r,user:d}=(0,i.useAuth)();return(0,t.jsxs)("aside",{className:"w-64 min-h-screen bg-card border-r border-border flex flex-col",children:[(0,t.jsx)("div",{className:"p-6 border-b border-border",children:(0,t.jsxs)(n.default,{href:"/admin/dashboard",className:"flex items-center gap-2",children:[(0,t.jsx)("div",{className:"w-8 h-8 bg-primary rounded-lg flex items-center justify-center",children:(0,t.jsx)("span",{className:"text-primary-foreground font-bold text-sm",children:s.siteConfig.name.charAt(0)})}),(0,t.jsx)("span",{className:"font-serif font-semibold text-foreground",children:"Admin Panel"})]})}),(0,t.jsx)("nav",{className:"flex-1 p-4",children:(0,t.jsx)("ul",{className:"space-y-1",children:b.map(r=>{let a=e===r.href||e.startsWith(r.href+"/");return(0,t.jsx)("li",{children:(0,t.jsxs)(n.default,{href:r.href,className:(0,o.cn)("flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",a?"bg-primary text-primary-foreground":"text-muted-foreground hover:bg-secondary hover:text-foreground"),children:[(0,t.jsx)(r.icon,{className:"h-4 w-4"}),r.label]})},r.href)})})}),(0,t.jsxs)("div",{className:"p-4 border-t border-border space-y-2",children:[(0,t.jsx)(l.Button,{asChild:!0,variant:"outline",className:"w-full justify-start",size:"sm",children:(0,t.jsxs)(n.default,{href:"/",target:"_blank",children:[(0,t.jsx)(p.Home,{className:"mr-2 h-4 w-4"}),"View Site"]})}),(0,t.jsx)("div",{className:"px-3 py-2",children:(0,t.jsx)("p",{className:"text-xs text-muted-foreground truncate",children:d?.email})}),(0,t.jsxs)(l.Button,{variant:"ghost",className:"w-full justify-start text-muted-foreground hover:text-destructive",size:"sm",onClick:()=>r(),children:[(0,t.jsx)(g.default,{className:"mr-2 h-4 w-4"}),"Sign Out"]})]})]})}var v=e.i(392120);function x({children:e,title:n,description:o,actions:s}){let{user:l,loading:d,isAdmin:c}=(0,i.useAuth)(),u=(0,a.useRouter)();return((0,r.useEffect)(()=>{d||l&&c||u.push("/admin/login")},[l,d,c,u]),d)?(0,t.jsx)("div",{className:"min-h-screen flex items-center justify-center bg-background",children:(0,t.jsx)(v.Loader2,{className:"h-8 w-8 animate-spin text-primary"})}):l&&c?(0,t.jsxs)("div",{className:"min-h-screen flex bg-background",children:[(0,t.jsx)(w,{}),(0,t.jsx)("main",{className:"flex-1 overflow-auto",children:(0,t.jsxs)("div",{className:"p-8",children:[(0,t.jsxs)("div",{className:"flex items-center justify-between mb-8",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h1",{className:"text-2xl font-serif font-semibold text-foreground",children:n}),o&&(0,t.jsx)("p",{className:"mt-1 text-sm text-muted-foreground",children:o})]}),s&&(0,t.jsx)("div",{className:"flex items-center gap-2",children:s})]}),e]})})]}):null}e.s(["AdminShell",()=>x],374701)},88222,e=>{"use strict";let t=(0,e.i(131763).default)("plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);e.s(["default",()=>t])},472388,e=>{"use strict";var t=e.i(116829);e.s(["Pencil",()=>t.default])},555923,587317,e=>{"use strict";var t=e.i(131763);let r=(0,t.default)("circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);e.s(["default",()=>r],555923);let a=(0,t.default)("ellipsis",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]]);e.s(["default",()=>a],587317)},561965,e=>{"use strict";let t=(0,e.i(131763).default)("external-link",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);e.s(["default",()=>t])},451252,e=>{"use strict";var t=e.i(687433),r=e.i(344440),a=e.i(868183),i=e.i(896027),n=e.i(374701),o=e.i(970065),s=e.i(167881),l=e.i(994179),d=e.i(947627),c=e.i(463415),u=e.i(899541),h=e.i(492559),m=e.i(715247),f=e.i(472388),g=e.i(417849),p=e.i(318668),y=e.i(472745),b=e.i(561965),b=b,w=e.i(295228);function v(){let[e,v]=(0,r.useState)([]),[x,k]=(0,r.useState)(!0);async function C(){v(await (0,u.getAllPosts)()),k(!1)}async function j(e){confirm("Are you sure you want to delete this post?")&&(await (0,u.deletePost)(e),C())}async function A(e,t){await (0,u.updatePostStatus)(e,"published"===t?"draft":"published"),C()}return(0,r.useEffect)(()=>{C()},[]),(0,t.jsx)(n.AdminShell,{title:"Blog Posts",description:"Create and manage blog articles",actions:(0,t.jsx)(s.Button,{asChild:!0,children:(0,t.jsxs)(a.default,{href:"/admin/blog/new",children:[(0,t.jsx)(h.Plus,{className:"mr-2 h-4 w-4"}),"New Post"]})}),children:(0,t.jsx)(o.Card,{children:(0,t.jsx)(o.CardContent,{className:"p-0",children:x?(0,t.jsx)("div",{className:"p-8 text-center text-muted-foreground",children:"Loading posts..."}):0===e.length?(0,t.jsxs)("div",{className:"p-8 text-center",children:[(0,t.jsx)("p",{className:"text-muted-foreground mb-4",children:"No posts yet"}),(0,t.jsx)(s.Button,{asChild:!0,children:(0,t.jsxs)(a.default,{href:"/admin/blog/new",children:[(0,t.jsx)(h.Plus,{className:"mr-2 h-4 w-4"}),"Create First Post"]})})]}):(0,t.jsxs)(d.Table,{children:[(0,t.jsx)(d.TableHeader,{children:(0,t.jsxs)(d.TableRow,{children:[(0,t.jsx)(d.TableHead,{children:"Post"}),(0,t.jsx)(d.TableHead,{children:"Category"}),(0,t.jsx)(d.TableHead,{children:"Status"}),(0,t.jsx)(d.TableHead,{children:"Date"}),(0,t.jsx)(d.TableHead,{className:"w-12"})]})}),(0,t.jsx)(d.TableBody,{children:e.map(e=>(0,t.jsxs)(d.TableRow,{children:[(0,t.jsx)(d.TableCell,{children:(0,t.jsxs)("div",{className:"flex items-center gap-3",children:[e.featuredImage&&(0,t.jsx)("div",{className:"relative h-12 w-16 rounded overflow-hidden bg-muted",children:(0,t.jsx)(i.default,{src:e.featuredImage,alt:e.title,fill:!0,className:"object-cover"})}),(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"font-medium text-foreground line-clamp-1",children:e.title}),(0,t.jsx)("p",{className:"text-xs text-muted-foreground line-clamp-1",children:e.excerpt})]})]})}),(0,t.jsx)(d.TableCell,{children:(0,t.jsx)("span",{className:"text-sm capitalize",children:e.category})}),(0,t.jsx)(d.TableCell,{children:(0,t.jsx)(l.Badge,{variant:"published"===e.status?"default":"secondary",children:e.status})}),(0,t.jsx)(d.TableCell,{children:(0,t.jsxs)("div",{className:"flex items-center gap-1 text-xs text-muted-foreground",children:[(0,t.jsx)(w.Calendar,{className:"h-3 w-3"}),new Date(e.createdAt).toLocaleDateString()]})}),(0,t.jsx)(d.TableCell,{children:(0,t.jsxs)(c.DropdownMenu,{children:[(0,t.jsx)(c.DropdownMenuTrigger,{asChild:!0,children:(0,t.jsx)(s.Button,{variant:"ghost",size:"icon",className:"h-8 w-8",children:(0,t.jsx)(m.MoreHorizontal,{className:"h-4 w-4"})})}),(0,t.jsxs)(c.DropdownMenuContent,{align:"end",children:[(0,t.jsx)(c.DropdownMenuItem,{asChild:!0,children:(0,t.jsxs)(a.default,{href:`/admin/blog/${e.id}`,children:[(0,t.jsx)(f.Pencil,{className:"mr-2 h-4 w-4"})," Edit"]})}),"published"===e.status&&(0,t.jsx)(c.DropdownMenuItem,{asChild:!0,children:(0,t.jsxs)(a.default,{href:`/blog/${e.slug}`,target:"_blank",children:[(0,t.jsx)(b.default,{className:"mr-2 h-4 w-4"})," View"]})}),(0,t.jsx)(c.DropdownMenuItem,{onClick:()=>A(e.id,e.status),children:"published"===e.status?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(y.EyeOff,{className:"mr-2 h-4 w-4"})," Unpublish"]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(p.Eye,{className:"mr-2 h-4 w-4"})," Publish"]})}),(0,t.jsxs)(c.DropdownMenuItem,{onClick:()=>j(e.id),className:"text-destructive",children:[(0,t.jsx)(g.Trash2,{className:"mr-2 h-4 w-4"})," Delete"]})]})]})})]},e.id))})]})})})})}e.s(["default",()=>v],451252)}]);