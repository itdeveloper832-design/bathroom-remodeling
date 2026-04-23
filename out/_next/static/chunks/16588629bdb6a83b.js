(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,296626,e=>{"use strict";var t=e.i(271645),r=e.i(820783),a=e.i(934620),i=e=>{var i;let o,s,{present:l,children:d}=e,c=function(e){var r,i;let[o,s]=t.useState(),l=t.useRef(null),d=t.useRef(e),c=t.useRef("none"),[u,h]=(r=e?"mounted":"unmounted",i={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},t.useReducer((e,t)=>i[e][t]??e,r));return t.useEffect(()=>{let e=n(l.current);c.current="mounted"===u?e:"none"},[u]),(0,a.useLayoutEffect)(()=>{let t=l.current,r=d.current;if(r!==e){let a=c.current,i=n(t);e?h("MOUNT"):"none"===i||t?.display==="none"?h("UNMOUNT"):r&&a!==i?h("ANIMATION_OUT"):h("UNMOUNT"),d.current=e}},[e,h]),(0,a.useLayoutEffect)(()=>{if(o){let e,t=o.ownerDocument.defaultView??window,r=r=>{let a=n(l.current).includes(CSS.escape(r.animationName));if(r.target===o&&a&&(h("ANIMATION_END"),!d.current)){let r=o.style.animationFillMode;o.style.animationFillMode="forwards",e=t.setTimeout(()=>{"forwards"===o.style.animationFillMode&&(o.style.animationFillMode=r)})}},a=e=>{e.target===o&&(c.current=n(l.current))};return o.addEventListener("animationstart",a),o.addEventListener("animationcancel",r),o.addEventListener("animationend",r),()=>{t.clearTimeout(e),o.removeEventListener("animationstart",a),o.removeEventListener("animationcancel",r),o.removeEventListener("animationend",r)}}h("ANIMATION_END")},[o,h]),{isPresent:["mounted","unmountSuspended"].includes(u),ref:t.useCallback(e=>{l.current=e?getComputedStyle(e):null,s(e)},[])}}(l),u="function"==typeof d?d({present:c.isPresent}):t.Children.only(d),h=(0,r.useComposedRefs)(c.ref,(i=u,(s=(o=Object.getOwnPropertyDescriptor(i.props,"ref")?.get)&&"isReactWarning"in o&&o.isReactWarning)?i.ref:(s=(o=Object.getOwnPropertyDescriptor(i,"ref")?.get)&&"isReactWarning"in o&&o.isReactWarning)?i.props.ref:i.props.ref||i.ref));return"function"==typeof d||c.isPresent?t.cloneElement(u,{ref:h}):null};function n(e){return e?.animationName||"none"}i.displayName="Presence",e.s(["Presence",()=>i])},981140,e=>{"use strict";function t(e,r,{checkForDefaultPrevented:a=!0}={}){return function(t){if(e?.(t),!1===a||!t.defaultPrevented)return r?.(t)}}"u">typeof window&&window.document&&window.document.createElement,e.s(["composeEventHandlers",()=>t])},30030,e=>{"use strict";var t=e.i(271645),r=e.i(843476);function a(e,a){let i=t.createContext(a),n=e=>{let{children:a,...n}=e,o=t.useMemo(()=>n,Object.values(n));return(0,r.jsx)(i.Provider,{value:o,children:a})};return n.displayName=e+"Provider",[n,function(r){let n=t.useContext(i);if(n)return n;if(void 0!==a)return a;throw Error(`\`${r}\` must be used within \`${e}\``)}]}function i(e,a=[]){let n=[],o=()=>{let r=n.map(e=>t.createContext(e));return function(a){let i=a?.[e]||r;return t.useMemo(()=>({[`__scope${e}`]:{...a,[e]:i}}),[a,i])}};return o.scopeName=e,[function(a,i){let o=t.createContext(i),s=n.length;n=[...n,i];let l=a=>{let{scope:i,children:n,...l}=a,d=i?.[e]?.[s]||o,c=t.useMemo(()=>l,Object.values(l));return(0,r.jsx)(d.Provider,{value:c,children:n})};return l.displayName=a+"Provider",[l,function(r,n){let l=n?.[e]?.[s]||o,d=t.useContext(l);if(d)return d;if(void 0!==i)return i;throw Error(`\`${r}\` must be used within \`${a}\``)}]},function(...e){let r=e[0];if(1===e.length)return r;let a=()=>{let a=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let i=a.reduce((t,{useScope:r,scopeName:a})=>{let i=r(e)[`__scope${a}`];return{...t,...i}},{});return t.useMemo(()=>({[`__scope${r.scopeName}`]:i}),[i])}};return a.scopeName=r.scopeName,a}(o,...a)]}e.s(["createContext",()=>a,"createContextScope",()=>i])},934620,e=>{"use strict";var t=e.i(271645),r=globalThis?.document?t.useLayoutEffect:()=>{};e.s(["useLayoutEffect",()=>r])},610772,e=>{"use strict";var t=e.i(271645),r=e.i(934620),a=t[" useId ".trim().toString()]||(()=>void 0),i=0;function n(e){let[n,o]=t.useState(a());return(0,r.useLayoutEffect)(()=>{e||o(e=>e??String(i++))},[e]),e||(n?`radix-${n}`:"")}e.s(["useId",()=>n])},369340,e=>{"use strict";var t=e.i(271645),r=e.i(934620);t[" useEffectEvent ".trim().toString()],t[" useInsertionEffect ".trim().toString()];var a=t[" useInsertionEffect ".trim().toString()]||r.useLayoutEffect;function i({prop:e,defaultProp:r,onChange:i=()=>{},caller:n}){let[o,s,l]=function({defaultProp:e,onChange:r}){let[i,n]=t.useState(e),o=t.useRef(i),s=t.useRef(r);return a(()=>{s.current=r},[r]),t.useEffect(()=>{o.current!==i&&(s.current?.(i),o.current=i)},[i,o]),[i,n,s]}({defaultProp:r,onChange:i}),d=void 0!==e,c=d?e:o;{let r=t.useRef(void 0!==e);t.useEffect(()=>{let e=r.current;if(e!==d){let t=d?"controlled":"uncontrolled";console.warn(`${n} is changing from ${e?"controlled":"uncontrolled"} to ${t}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`)}r.current=d},[d,n])}return[c,t.useCallback(t=>{if(d){let r="function"==typeof t?t(e):t;r!==e&&l.current?.(r)}else s(t)},[d,e,s,l])]}Symbol("RADIX:SYNC_STATE"),e.s(["useControllableState",()=>i],369340)},248425,e=>{"use strict";var t=e.i(271645),r=e.i(174080),a=e.i(820783),i=e.i(843476),n=Symbol("radix.slottable");function o(e){return t.isValidElement(e)&&"function"==typeof e.type&&"__radixId"in e.type&&e.type.__radixId===n}var s=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"].reduce((e,r)=>{var n,s;let l,d,c,u=(s=n=`Primitive.${r}`,(l=t.forwardRef((e,r)=>{let{children:i,...n}=e;if(t.isValidElement(i)){var o;let e,s,l=(o=i,(s=(e=Object.getOwnPropertyDescriptor(o.props,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning)?o.ref:(s=(e=Object.getOwnPropertyDescriptor(o,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning)?o.props.ref:o.props.ref||o.ref),d=function(e,t){let r={...t};for(let a in t){let i=e[a],n=t[a];/^on[A-Z]/.test(a)?i&&n?r[a]=(...e)=>{let t=n(...e);return i(...e),t}:i&&(r[a]=i):"style"===a?r[a]={...i,...n}:"className"===a&&(r[a]=[i,n].filter(Boolean).join(" "))}return{...e,...r}}(n,i.props);return i.type!==t.Fragment&&(d.ref=r?(0,a.composeRefs)(r,l):l),t.cloneElement(i,d)}return t.Children.count(i)>1?t.Children.only(null):null})).displayName=`${s}.SlotClone`,d=l,(c=t.forwardRef((e,r)=>{let{children:a,...n}=e,s=t.Children.toArray(a),l=s.find(o);if(l){let e=l.props.children,a=s.map(r=>r!==l?r:t.Children.count(e)>1?t.Children.only(null):t.isValidElement(e)?e.props.children:null);return(0,i.jsx)(d,{...n,ref:r,children:t.isValidElement(e)?t.cloneElement(e,void 0,a):null})}return(0,i.jsx)(d,{...n,ref:r,children:a})})).displayName=`${n}.Slot`,c),h=t.forwardRef((e,t)=>{let{asChild:a,...n}=e;return"u">typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,i.jsx)(a?u:r,{...n,ref:t})});return h.displayName=`Primitive.${r}`,{...e,[r]:h}},{});function l(e,t){e&&r.flushSync(()=>e.dispatchEvent(t))}e.s(["Primitive",()=>s,"dispatchDiscreteCustomEvent",()=>l],248425)},75830,586318,e=>{"use strict";var t=e.i(271645),r=e.i(30030),a=e.i(820783),i=e.i(843476);function n(e){var r;let n,o=(r=e,(n=t.forwardRef((e,r)=>{let{children:i,...n}=e;if(t.isValidElement(i)){var o;let e,s,l=(o=i,(s=(e=Object.getOwnPropertyDescriptor(o.props,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning)?o.ref:(s=(e=Object.getOwnPropertyDescriptor(o,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning)?o.props.ref:o.props.ref||o.ref),d=function(e,t){let r={...t};for(let a in t){let i=e[a],n=t[a];/^on[A-Z]/.test(a)?i&&n?r[a]=(...e)=>{let t=n(...e);return i(...e),t}:i&&(r[a]=i):"style"===a?r[a]={...i,...n}:"className"===a&&(r[a]=[i,n].filter(Boolean).join(" "))}return{...e,...r}}(n,i.props);return i.type!==t.Fragment&&(d.ref=r?(0,a.composeRefs)(r,l):l),t.cloneElement(i,d)}return t.Children.count(i)>1?t.Children.only(null):null})).displayName=`${r}.SlotClone`,n),l=t.forwardRef((e,r)=>{let{children:a,...n}=e,l=t.Children.toArray(a),d=l.find(s);if(d){let e=d.props.children,a=l.map(r=>r!==d?r:t.Children.count(e)>1?t.Children.only(null):t.isValidElement(e)?e.props.children:null);return(0,i.jsx)(o,{...n,ref:r,children:t.isValidElement(e)?t.cloneElement(e,void 0,a):null})}return(0,i.jsx)(o,{...n,ref:r,children:a})});return l.displayName=`${e}.Slot`,l}var o=Symbol("radix.slottable");function s(e){return t.isValidElement(e)&&"function"==typeof e.type&&"__radixId"in e.type&&e.type.__radixId===o}function l(e){let o=e+"CollectionProvider",[s,l]=(0,r.createContextScope)(o),[d,c]=s(o,{collectionRef:{current:null},itemMap:new Map}),u=e=>{let{scope:r,children:a}=e,n=t.default.useRef(null),o=t.default.useRef(new Map).current;return(0,i.jsx)(d,{scope:r,itemMap:o,collectionRef:n,children:a})};u.displayName=o;let h=e+"CollectionSlot",m=n(h),f=t.default.forwardRef((e,t)=>{let{scope:r,children:n}=e,o=c(h,r),s=(0,a.useComposedRefs)(t,o.collectionRef);return(0,i.jsx)(m,{ref:s,children:n})});f.displayName=h;let p=e+"CollectionItemSlot",g="data-radix-collection-item",y=n(p),v=t.default.forwardRef((e,r)=>{let{scope:n,children:o,...s}=e,l=t.default.useRef(null),d=(0,a.useComposedRefs)(r,l),u=c(p,n);return t.default.useEffect(()=>(u.itemMap.set(l,{ref:l,...s}),()=>void u.itemMap.delete(l))),(0,i.jsx)(y,{...{[g]:""},ref:d,children:o})});return v.displayName=p,[{Provider:u,Slot:f,ItemSlot:v},function(r){let a=c(e+"CollectionConsumer",r);return t.default.useCallback(()=>{let e=a.collectionRef.current;if(!e)return[];let t=Array.from(e.querySelectorAll(`[${g}]`));return Array.from(a.itemMap.values()).sort((e,r)=>t.indexOf(e.ref.current)-t.indexOf(r.ref.current))},[a.collectionRef,a.itemMap])},l]}var d=new WeakMap;function c(e,t){var r,a;let i,n,o;if("at"in Array.prototype)return Array.prototype.at.call(e,t);let s=(r=e,a=t,i=r.length,(o=(n=u(a))>=0?n:i+n)<0||o>=i?-1:o);return -1===s?void 0:e[s]}function u(e){return e!=e||0===e?0:Math.trunc(e)}(class e extends Map{#e;constructor(e){super(e),this.#e=[...super.keys()],d.set(this,!0)}set(e,t){return d.get(this)&&(this.has(e)?this.#e[this.#e.indexOf(e)]=e:this.#e.push(e)),super.set(e,t),this}insert(e,t,r){let a,i=this.has(t),n=this.#e.length,o=u(e),s=o>=0?o:n+o,l=s<0||s>=n?-1:s;if(l===this.size||i&&l===this.size-1||-1===l)return this.set(t,r),this;let d=this.size+ +!i;o<0&&s++;let c=[...this.#e],h=!1;for(let e=s;e<d;e++)if(s===e){let n=c[e];c[e]===t&&(n=c[e+1]),i&&this.delete(t),a=this.get(n),this.set(t,r)}else{h||c[e-1]!==t||(h=!0);let r=c[h?e:e-1],i=a;a=this.get(r),this.delete(r),this.set(r,i)}return this}with(t,r,a){let i=new e(this);return i.insert(t,r,a),i}before(e){let t=this.#e.indexOf(e)-1;if(!(t<0))return this.entryAt(t)}setBefore(e,t,r){let a=this.#e.indexOf(e);return -1===a?this:this.insert(a,t,r)}after(e){let t=this.#e.indexOf(e);if(-1!==(t=-1===t||t===this.size-1?-1:t+1))return this.entryAt(t)}setAfter(e,t,r){let a=this.#e.indexOf(e);return -1===a?this:this.insert(a+1,t,r)}first(){return this.entryAt(0)}last(){return this.entryAt(-1)}clear(){return this.#e=[],super.clear()}delete(e){let t=super.delete(e);return t&&this.#e.splice(this.#e.indexOf(e),1),t}deleteAt(e){let t=this.keyAt(e);return void 0!==t&&this.delete(t)}at(e){let t=c(this.#e,e);if(void 0!==t)return this.get(t)}entryAt(e){let t=c(this.#e,e);if(void 0!==t)return[t,this.get(t)]}indexOf(e){return this.#e.indexOf(e)}keyAt(e){return c(this.#e,e)}from(e,t){let r=this.indexOf(e);if(-1===r)return;let a=r+t;return a<0&&(a=0),a>=this.size&&(a=this.size-1),this.at(a)}keyFrom(e,t){let r=this.indexOf(e);if(-1===r)return;let a=r+t;return a<0&&(a=0),a>=this.size&&(a=this.size-1),this.keyAt(a)}find(e,t){let r=0;for(let a of this){if(Reflect.apply(e,t,[a,r,this]))return a;r++}}findIndex(e,t){let r=0;for(let a of this){if(Reflect.apply(e,t,[a,r,this]))return r;r++}return -1}filter(t,r){let a=[],i=0;for(let e of this)Reflect.apply(t,r,[e,i,this])&&a.push(e),i++;return new e(a)}map(t,r){let a=[],i=0;for(let e of this)a.push([e[0],Reflect.apply(t,r,[e,i,this])]),i++;return new e(a)}reduce(...e){let[t,r]=e,a=0,i=r??this.at(0);for(let r of this)i=0===a&&1===e.length?r:Reflect.apply(t,this,[i,r,a,this]),a++;return i}reduceRight(...e){let[t,r]=e,a=r??this.at(-1);for(let r=this.size-1;r>=0;r--){let i=this.at(r);a=r===this.size-1&&1===e.length?i:Reflect.apply(t,this,[a,i,r,this])}return a}toSorted(t){return new e([...this.entries()].sort(t))}toReversed(){let t=new e;for(let e=this.size-1;e>=0;e--){let r=this.keyAt(e),a=this.get(r);t.set(r,a)}return t}toSpliced(...t){let r=[...this.entries()];return r.splice(...t),new e(r)}slice(t,r){let a=new e,i=this.size-1;if(void 0===t)return a;t<0&&(t+=this.size),void 0!==r&&r>0&&(i=r-1);for(let e=t;e<=i;e++){let t=this.keyAt(e),r=this.get(t);a.set(t,r)}return a}every(e,t){let r=0;for(let a of this){if(!Reflect.apply(e,t,[a,r,this]))return!1;r++}return!0}some(e,t){let r=0;for(let a of this){if(Reflect.apply(e,t,[a,r,this]))return!0;r++}return!1}}),e.s(["createCollection",()=>l],75830);var h=t.createContext(void 0);function m(e){let r=t.useContext(h);return e||r||"ltr"}e.s(["useDirection",()=>m],586318)},409797,e=>{"use strict";var t=e.i(631171);e.s(["ChevronDownIcon",()=>t.default])},521404,e=>{"use strict";let t={title:"Complete Guide to Bathroom Remodeling in Chandler, Arizona",slug:"complete-guide-bathroom-remodeling-chandler-arizona",excerpt:"Everything you need to know about bathroom remodeling in Chandler, Arizona. From planning and budgeting to choosing materials and hiring the right contractor.",content:`
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
  `,author:"Chandler Bathroom Remodeling Team",category:"Design Trends",tags:["bathroom design trends 2024","chandler arizona bathroom","modern bathroom design","smart bathroom technology","sustainable bathroom"],featuredImage:"https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2574&auto=format&fit=crop",metaTitle:"2024 Bathroom Design Trends | Chandler Arizona Bathroom Remodeling",metaDescription:"Discover the hottest bathroom design trends for 2024 in Chandler, Arizona. From spa features to smart technology, transform your bathroom with modern ideas.",metaKeywords:"bathroom design trends 2024, chandler arizona bathroom remodeling, modern bathroom design, smart bathroom technology, sustainable bathroom materials",status:"published",publishedAt:new Date().toISOString(),createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()};e.s(["defaultBlogPost",0,t,"defaultGalleryItems",0,[{title:"Modern Master Bathroom",category:"bathroom",imageUrl:"https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=2574&auto=format&fit=crop",description:"Complete master bathroom renovation with walk-in shower and freestanding tub",featured:!0},{title:"Luxury Shower Remodel",category:"bathroom",imageUrl:"https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=2369&auto=format&fit=crop",description:"Custom frameless glass shower with rainfall showerhead",featured:!0},{title:"Contemporary Vanity Design",category:"bathroom",imageUrl:"https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2574&auto=format&fit=crop",description:"Double vanity with quartz countertops and modern fixtures",featured:!1},{title:"Spa-Inspired Retreat",category:"bathroom",imageUrl:"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2574&auto=format&fit=crop",description:"Tranquil bathroom with natural stone and warm lighting",featured:!1},{title:"Small Bathroom Transformation",category:"bathroom",imageUrl:"https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2574&auto=format&fit=crop",description:"Maximizing space in a compact bathroom with smart design",featured:!1},{title:"Classic White Bathroom",category:"bathroom",imageUrl:"https://images.unsplash.com/photo-1600573472591-ee6c8e695948?q=80&w=2574&auto=format&fit=crop",description:"Timeless white subway tile with chrome fixtures",featured:!1},{title:"Guest Bathroom Renovation",category:"bathroom",imageUrl:"https://images.unsplash.com/photo-1600566752447-f4f7687c5e40?q=80&w=2574&auto=format&fit=crop",description:"Elegant guest bathroom with floating vanity",featured:!1},{title:"Accessible Bathroom Design",category:"bathroom",imageUrl:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2574&auto=format&fit=crop",description:"ADA-compliant bathroom with curbless shower entry",featured:!1},{title:"Spa Shower Upgrade",category:"bathroom",imageUrl:"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2574&auto=format&fit=crop",description:"Custom walk-in shower with glass enclosure and niche storage",featured:!1},{title:"Luxury Bathtub Suite",category:"bathroom",imageUrl:"https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=2574&auto=format&fit=crop",description:"Freestanding soaking tub with coordinated fixtures and tile",featured:!1},{title:"Curbless Shower Design",category:"bathroom",imageUrl:"https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2574&auto=format&fit=crop",description:"Accessible curbless shower with linear drain and bench",featured:!1},{title:"Vanity & Storage Refresh",category:"bathroom",imageUrl:"https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=2574&auto=format&fit=crop",description:"Double-sink vanity with ample storage and warm lighting",featured:!1},{title:"Tile Accent Bath",category:"bathroom",imageUrl:"https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=2574&auto=format&fit=crop",description:"Statement tile feature wall with coordinated flooring",featured:!1}],"secondBlogPost",0,r])},107233,e=>{"use strict";var t=e.i(603908);e.s(["Plus",()=>t.default])},403014,e=>{"use strict";let t=(0,e.i(475254).default)("house",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]]);e.s(["default",()=>t])},694351,e=>{"use strict";var t=e.i(403014);e.s(["Home",()=>t.default])},618566,(e,t,r)=>{t.exports=e.r(976562)},970065,e=>{"use strict";var t=e.i(843476),r=e.i(647163);function a({className:e,...a}){return(0,t.jsx)("div",{"data-slot":"card",className:(0,r.cn)("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",e),...a})}function i({className:e,...a}){return(0,t.jsx)("div",{"data-slot":"card-header",className:(0,r.cn)("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",e),...a})}function n({className:e,...a}){return(0,t.jsx)("div",{"data-slot":"card-title",className:(0,r.cn)("leading-none font-semibold",e),...a})}function o({className:e,...a}){return(0,t.jsx)("div",{"data-slot":"card-description",className:(0,r.cn)("text-muted-foreground text-sm",e),...a})}function s({className:e,...a}){return(0,t.jsx)("div",{"data-slot":"card-content",className:(0,r.cn)("px-6",e),...a})}e.s(["Card",()=>a,"CardContent",()=>s,"CardDescription",()=>o,"CardHeader",()=>i,"CardTitle",()=>n])},10252,e=>{"use strict";let t=(0,e.i(475254).default)("layout-dashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);e.s(["default",()=>t])},489053,e=>{"use strict";let t=(0,e.i(475254).default)("file-text",[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);e.s(["default",()=>t])},803408,e=>{"use strict";let t=(0,e.i(475254).default)("image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);e.s(["default",()=>t])},680818,e=>{"use strict";let t=(0,e.i(475254).default)("message-square",[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]]);e.s(["default",()=>t])},98740,e=>{"use strict";let t=(0,e.i(475254).default)("users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]]);e.s(["default",()=>t])},903446,e=>{"use strict";let t=(0,e.i(475254).default)("settings",[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);e.s(["default",()=>t])},518820,e=>{"use strict";let t=(0,e.i(475254).default)("log-out",[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]]);e.s(["default",()=>t])},200360,e=>{"use strict";let t=(0,e.i(475254).default)("folder-open",[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]);e.s(["default",()=>t])},374701,178583,473708,686311,761911,e=>{"use strict";var t=e.i(843476),r=e.i(271645),a=e.i(618566),i=e.i(791432),n=e.i(522016),o=e.i(647163),s=e.i(508037),l=e.i(167881),d=e.i(10252),d=d,c=e.i(489053);e.s(["FileText",()=>c.default],178583);var c=c,u=e.i(803408);e.s(["Image",()=>u.default],473708);var u=u,h=e.i(680818);e.s(["MessageSquare",()=>h.default],686311);var h=h,m=e.i(98740);e.s(["Users",()=>m.default],761911);var m=m,f=e.i(903446),f=f,p=e.i(518820),p=p,g=e.i(694351),y=e.i(200360),y=y;let v=[{href:"/admin/dashboard",label:"Dashboard",icon:d.default},{href:"/admin/leads",label:"Leads",icon:m.default},{href:"/admin/blog",label:"Blog Posts",icon:c.default},{href:"/admin/categories",label:"Categories",icon:y.default},{href:"/admin/gallery",label:"Gallery",icon:u.default},{href:"/admin/testimonials",label:"Testimonials",icon:h.default},{href:"/admin/settings",label:"Settings",icon:f.default}];function x(){let e=(0,a.usePathname)(),{signOut:r,user:d}=(0,i.useAuth)();return(0,t.jsxs)("aside",{className:"w-64 min-h-screen bg-card border-r border-border flex flex-col",children:[(0,t.jsx)("div",{className:"p-6 border-b border-border",children:(0,t.jsxs)(n.default,{href:"/admin/dashboard",className:"flex items-center gap-2",children:[(0,t.jsx)("div",{className:"w-8 h-8 bg-primary rounded-lg flex items-center justify-center",children:(0,t.jsx)("span",{className:"text-primary-foreground font-bold text-sm",children:s.siteConfig.name.charAt(0)})}),(0,t.jsx)("span",{className:"font-serif font-semibold text-foreground",children:"Admin Panel"})]})}),(0,t.jsx)("nav",{className:"flex-1 p-4",children:(0,t.jsx)("ul",{className:"space-y-1",children:v.map(r=>{let a=e===r.href||e.startsWith(r.href+"/");return(0,t.jsx)("li",{children:(0,t.jsxs)(n.default,{href:r.href,className:(0,o.cn)("flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",a?"bg-primary text-primary-foreground":"text-muted-foreground hover:bg-secondary hover:text-foreground"),children:[(0,t.jsx)(r.icon,{className:"h-4 w-4"}),r.label]})},r.href)})})}),(0,t.jsxs)("div",{className:"p-4 border-t border-border space-y-2",children:[(0,t.jsx)(l.Button,{asChild:!0,variant:"outline",className:"w-full justify-start",size:"sm",children:(0,t.jsxs)(n.default,{href:"/",target:"_blank",children:[(0,t.jsx)(g.Home,{className:"mr-2 h-4 w-4"}),"View Site"]})}),(0,t.jsx)("div",{className:"px-3 py-2",children:(0,t.jsx)("p",{className:"text-xs text-muted-foreground truncate",children:d?.email})}),(0,t.jsxs)(l.Button,{variant:"ghost",className:"w-full justify-start text-muted-foreground hover:text-destructive",size:"sm",onClick:()=>r(),children:[(0,t.jsx)(p.default,{className:"mr-2 h-4 w-4"}),"Sign Out"]})]})]})}var b=e.i(531278);function w({children:e,title:n,description:o,actions:s}){let{user:l,loading:d,isAdmin:c}=(0,i.useAuth)(),u=(0,a.useRouter)();return((0,r.useEffect)(()=>{d||l&&c||u.push("/admin/login")},[l,d,c,u]),d)?(0,t.jsx)("div",{className:"min-h-screen flex items-center justify-center bg-background",children:(0,t.jsx)(b.Loader2,{className:"h-8 w-8 animate-spin text-primary"})}):l&&c?(0,t.jsxs)("div",{className:"min-h-screen flex bg-background",children:[(0,t.jsx)(x,{}),(0,t.jsx)("main",{className:"flex-1 overflow-auto",children:(0,t.jsxs)("div",{className:"p-8",children:[(0,t.jsxs)("div",{className:"flex items-center justify-between mb-8",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h1",{className:"text-2xl font-serif font-semibold text-foreground",children:n}),o&&(0,t.jsx)("p",{className:"mt-1 text-sm text-muted-foreground",children:o})]}),s&&(0,t.jsx)("div",{className:"flex items-center gap-2",children:s})]}),e]})})]}):null}e.s(["AdminShell",()=>w],374701)},603908,e=>{"use strict";let t=(0,e.i(475254).default)("plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);e.s(["default",()=>t])},507084,e=>{"use strict";let t=e.i(521404).defaultGalleryItems.map((e,t)=>({id:`gallery-${t+1}`,title:e.title,category:e.category,imageUrl:e.imageUrl,description:e.description,featured:e.featured,createdAt:new Date}));async function r(){return[...t].sort((e,t)=>t.createdAt.getTime()-e.createdAt.getTime())}async function a(e){let r=`gallery-${Date.now()}`;return t.push({id:r,...e,createdAt:new Date}),{success:!0,id:r}}async function i(e,r){return t=t.map(t=>t.id===e?{...t,...r}:t),{success:!0}}async function n(e){return t=t.filter(t=>t.id!==e),{success:!0}}async function o(){let e=(await r()).filter(e=>e.featured);return e.length>0?e:r()}async function s(){return t.length}e.s(["createGalleryItem",()=>a,"deleteGalleryItem",()=>n,"getFeaturedGalleryItems",()=>o,"getGalleryCount",()=>s,"getGalleryItems",()=>r,"updateGalleryItem",()=>i])},788699,e=>{"use strict";var t=e.i(360200);e.s(["Pencil",()=>t.default])},286536,e=>{"use strict";var t=e.i(187942);e.s(["Eye",()=>t.default])},211749,e=>{"use strict";let t=(0,e.i(475254).default)("eye-off",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);e.s(["default",()=>t])},360200,e=>{"use strict";let t=(0,e.i(475254).default)("pencil",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);e.s(["default",()=>t])},187942,e=>{"use strict";let t=(0,e.i(475254).default)("eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);e.s(["default",()=>t])},77705,e=>{"use strict";var t=e.i(211749);e.s(["EyeOff",()=>t.default])},630374,e=>{"use strict";let t,r,a;var i=e.i(843476),n=e.i(271645),o=e.i(981140),s=e.i(820783),l=e.i(30030),d=e.i(610772),c=e.i(369340),u=e.i(726330),h=e.i(765491),m=e.i(774606),f=e.i(296626),p=e.i(248425),g=e.i(303536),y=e.i(985369),v=e.i(186312),x=Symbol("radix.slottable");function b(e){return n.isValidElement(e)&&"function"==typeof e.type&&"__radixId"in e.type&&e.type.__radixId===x}var w="Dialog",[C,j]=(0,l.createContextScope)(w),[k,N]=C(w),A=e=>{let{__scopeDialog:t,children:r,open:a,defaultOpen:o,onOpenChange:s,modal:l=!0}=e,u=n.useRef(null),h=n.useRef(null),[m,f]=(0,c.useControllableState)({prop:a,defaultProp:o??!1,onChange:s,caller:w});return(0,i.jsx)(k,{scope:t,triggerRef:u,contentRef:h,contentId:(0,d.useId)(),titleId:(0,d.useId)(),descriptionId:(0,d.useId)(),open:m,onOpenChange:f,onOpenToggle:n.useCallback(()=>f(e=>!e),[f]),modal:l,children:r})};A.displayName=w;var R="DialogTrigger",I=n.forwardRef((e,t)=>{let{__scopeDialog:r,...a}=e,n=N(R,r),l=(0,s.useComposedRefs)(t,n.triggerRef);return(0,i.jsx)(p.Primitive.button,{type:"button","aria-haspopup":"dialog","aria-expanded":n.open,"aria-controls":n.contentId,"data-state":$(n.open),...a,ref:l,onClick:(0,o.composeEventHandlers)(e.onClick,n.onOpenToggle)})});I.displayName=R;var S="DialogPortal",[z,D]=C(S,{forceMount:void 0}),E=e=>{let{__scopeDialog:t,forceMount:r,children:a,container:o}=e,s=N(S,t);return(0,i.jsx)(z,{scope:t,forceMount:r,children:n.Children.map(a,e=>(0,i.jsx)(f.Presence,{present:r||s.open,children:(0,i.jsx)(m.Portal,{asChild:!0,container:o,children:e})}))})};E.displayName=S;var M="DialogOverlay",T=n.forwardRef((e,t)=>{let r=D(M,e.__scopeDialog),{forceMount:a=r.forceMount,...n}=e,o=N(M,e.__scopeDialog);return o.modal?(0,i.jsx)(f.Presence,{present:a||o.open,children:(0,i.jsx)(O,{...n,ref:t})}):null});T.displayName=M;var P=((a=n.forwardRef((e,t)=>{let{children:r,...a}=e;if(n.isValidElement(r)){var i;let e,o,l=(i=r,(o=(e=Object.getOwnPropertyDescriptor(i.props,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning)?i.ref:(o=(e=Object.getOwnPropertyDescriptor(i,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning)?i.props.ref:i.props.ref||i.ref),d=function(e,t){let r={...t};for(let a in t){let i=e[a],n=t[a];/^on[A-Z]/.test(a)?i&&n?r[a]=(...e)=>{let t=n(...e);return i(...e),t}:i&&(r[a]=i):"style"===a?r[a]={...i,...n}:"className"===a&&(r[a]=[i,n].filter(Boolean).join(" "))}return{...e,...r}}(a,r.props);return r.type!==n.Fragment&&(d.ref=t?(0,s.composeRefs)(t,l):l),n.cloneElement(r,d)}return n.Children.count(r)>1?n.Children.only(null):null})).displayName="DialogOverlay.RemoveScroll.SlotClone",t=a,(r=n.forwardRef((e,r)=>{let{children:a,...o}=e,s=n.Children.toArray(a),l=s.find(b);if(l){let e=l.props.children,a=s.map(t=>t!==l?t:n.Children.count(e)>1?n.Children.only(null):n.isValidElement(e)?e.props.children:null);return(0,i.jsx)(t,{...o,ref:r,children:n.isValidElement(e)?n.cloneElement(e,void 0,a):null})}return(0,i.jsx)(t,{...o,ref:r,children:a})})).displayName="DialogOverlay.RemoveScroll.Slot",r),O=n.forwardRef((e,t)=>{let{__scopeDialog:r,...a}=e,n=N(M,r);return(0,i.jsx)(y.RemoveScroll,{as:P,allowPinchZoom:!0,shards:[n.contentRef],children:(0,i.jsx)(p.Primitive.div,{"data-state":$(n.open),...a,ref:t,style:{pointerEvents:"auto",...a.style}})})}),B="DialogContent",F=n.forwardRef((e,t)=>{let r=D(B,e.__scopeDialog),{forceMount:a=r.forceMount,...n}=e,o=N(B,e.__scopeDialog);return(0,i.jsx)(f.Presence,{present:a||o.open,children:o.modal?(0,i.jsx)(U,{...n,ref:t}):(0,i.jsx)(W,{...n,ref:t})})});F.displayName=B;var U=n.forwardRef((e,t)=>{let r=N(B,e.__scopeDialog),a=n.useRef(null),l=(0,s.useComposedRefs)(t,r.contentRef,a);return n.useEffect(()=>{let e=a.current;if(e)return(0,v.hideOthers)(e)},[]),(0,i.jsx)(L,{...e,ref:l,trapFocus:r.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:(0,o.composeEventHandlers)(e.onCloseAutoFocus,e=>{e.preventDefault(),r.triggerRef.current?.focus()}),onPointerDownOutside:(0,o.composeEventHandlers)(e.onPointerDownOutside,e=>{let t=e.detail.originalEvent,r=0===t.button&&!0===t.ctrlKey;(2===t.button||r)&&e.preventDefault()}),onFocusOutside:(0,o.composeEventHandlers)(e.onFocusOutside,e=>e.preventDefault())})}),W=n.forwardRef((e,t)=>{let r=N(B,e.__scopeDialog),a=n.useRef(!1),o=n.useRef(!1);return(0,i.jsx)(L,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{e.onCloseAutoFocus?.(t),t.defaultPrevented||(a.current||r.triggerRef.current?.focus(),t.preventDefault()),a.current=!1,o.current=!1},onInteractOutside:t=>{e.onInteractOutside?.(t),t.defaultPrevented||(a.current=!0,"pointerdown"===t.detail.originalEvent.type&&(o.current=!0));let i=t.target;r.triggerRef.current?.contains(i)&&t.preventDefault(),"focusin"===t.detail.originalEvent.type&&o.current&&t.preventDefault()}})}),L=n.forwardRef((e,t)=>{let{__scopeDialog:r,trapFocus:a,onOpenAutoFocus:o,onCloseAutoFocus:l,...d}=e,c=N(B,r),m=n.useRef(null),f=(0,s.useComposedRefs)(t,m);return(0,g.useFocusGuards)(),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(h.FocusScope,{asChild:!0,loop:!0,trapped:a,onMountAutoFocus:o,onUnmountAutoFocus:l,children:(0,i.jsx)(u.DismissableLayer,{role:"dialog",id:c.contentId,"aria-describedby":c.descriptionId,"aria-labelledby":c.titleId,"data-state":$(c.open),...d,ref:f,onDismiss:()=>c.onOpenChange(!1)})}),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(Z,{titleId:c.titleId}),(0,i.jsx)(J,{contentRef:m,descriptionId:c.descriptionId})]})]})}),_="DialogTitle",q=n.forwardRef((e,t)=>{let{__scopeDialog:r,...a}=e,n=N(_,r);return(0,i.jsx)(p.Primitive.h2,{id:n.titleId,...a,ref:t})});q.displayName=_;var H="DialogDescription";n.forwardRef((e,t)=>{let{__scopeDialog:r,...a}=e,n=N(H,r);return(0,i.jsx)(p.Primitive.p,{id:n.descriptionId,...a,ref:t})}).displayName=H;var V="DialogClose",G=n.forwardRef((e,t)=>{let{__scopeDialog:r,...a}=e,n=N(V,r);return(0,i.jsx)(p.Primitive.button,{type:"button",...a,ref:t,onClick:(0,o.composeEventHandlers)(e.onClick,()=>n.onOpenChange(!1))})});function $(e){return e?"open":"closed"}G.displayName=V;var Y="DialogTitleWarning",[K,Q]=(0,l.createContext)(Y,{contentName:B,titleName:_,docsSlug:"dialog"}),Z=({titleId:e})=>{let t=Q(Y),r=`\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;return n.useEffect(()=>{e&&(document.getElementById(e)||console.error(r))},[r,e]),null},J=({contentRef:e,descriptionId:t})=>{let r=Q("DialogDescriptionWarning"),a=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${r.contentName}}.`;return n.useEffect(()=>{let r=e.current?.getAttribute("aria-describedby");t&&r&&(document.getElementById(t)||console.warn(a))},[a,e,t]),null},X=e.i(841947),X=X,ee=e.i(647163);function et({...e}){return(0,i.jsx)(A,{"data-slot":"dialog",...e})}function er({...e}){return(0,i.jsx)(I,{"data-slot":"dialog-trigger",...e})}function ea({...e}){return(0,i.jsx)(E,{"data-slot":"dialog-portal",...e})}function ei({className:e,...t}){return(0,i.jsx)(T,{"data-slot":"dialog-overlay",className:(0,ee.cn)("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",e),...t})}function en({className:e,children:t,showCloseButton:r=!0,...a}){return(0,i.jsxs)(ea,{"data-slot":"dialog-portal",children:[(0,i.jsx)(ei,{}),(0,i.jsxs)(F,{"data-slot":"dialog-content",className:(0,ee.cn)("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",e),...a,children:[t,r&&(0,i.jsxs)(G,{"data-slot":"dialog-close",className:"ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",children:[(0,i.jsx)(X.default,{}),(0,i.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})}function eo({className:e,...t}){return(0,i.jsx)("div",{"data-slot":"dialog-header",className:(0,ee.cn)("flex flex-col gap-2 text-center sm:text-left",e),...t})}function es({className:e,...t}){return(0,i.jsx)(q,{"data-slot":"dialog-title",className:(0,ee.cn)("text-lg leading-none font-semibold",e),...t})}e.s(["Dialog",()=>et,"DialogContent",()=>en,"DialogHeader",()=>eo,"DialogTitle",()=>es,"DialogTrigger",()=>er],630374)},595828,824678,e=>{"use strict";var t=e.i(475254);let r=(0,t.default)("grid-3x3",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]]);e.s(["default",()=>r],595828);let a=(0,t.default)("list",[["path",{d:"M3 5h.01",key:"18ugdj"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 19h.01",key:"noohij"}],["path",{d:"M8 5h13",key:"1pao27"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 19h13",key:"m83p4d"}]]);e.s(["default",()=>a],824678)},759606,e=>{"use strict";var t=e.i(843476),r=e.i(271645),a=e.i(657688),i=e.i(374701),n=e.i(970065),o=e.i(167881),s=e.i(23750),l=e.i(10708),d=e.i(184762),c=e.i(630374),u=e.i(62870),h=e.i(507084),m=e.i(107233),f=e.i(788699),p=e.i(727612),g=e.i(286536),y=e.i(77705),v=e.i(595828),v=v,x=e.i(824678),x=x;let b=[{value:"bathroom",label:"Bathroom Remodeling"},{value:"shower",label:"Shower Remodel"},{value:"vanity",label:"Vanity & Countertops"}];function w(){let[e,w]=(0,r.useState)([]),[C,j]=(0,r.useState)(!0),[k,N]=(0,r.useState)(!1),[A,R]=(0,r.useState)(null),[I,S]=(0,r.useState)("grid"),[z,D]=(0,r.useState)({title:"",description:"",imageUrl:"",category:"",beforeImage:"",afterImage:"",featured:!1});async function E(){w(await (0,h.getGalleryItems)()),j(!1)}async function M(){A?await (0,h.updateGalleryItem)(A.id,z):await (0,h.createGalleryItem)(z),N(!1),R(null),O(),E()}async function T(e){confirm("Are you sure you want to delete this gallery item?")&&(await (0,h.deleteGalleryItem)(e),E())}async function P(e){await (0,h.updateGalleryItem)(e.id,{featured:!e.featured}),E()}function O(){D({title:"",description:"",imageUrl:"",category:"",beforeImage:"",afterImage:"",featured:!1})}function B(e){R(e),D({title:e.title,description:e.description||"",imageUrl:e.imageUrl,category:e.category,beforeImage:e.beforeImage||"",afterImage:e.afterImage||"",featured:e.featured||!1}),N(!0)}function F(){R(null),O(),N(!0)}return(0,r.useEffect)(()=>{E()},[]),(0,t.jsx)(i.AdminShell,{title:"Gallery",description:"Manage project photos and before/after images",actions:(0,t.jsxs)("div",{className:"flex items-center gap-2",children:[(0,t.jsxs)("div",{className:"flex items-center border rounded-lg",children:[(0,t.jsx)(o.Button,{variant:"grid"===I?"default":"ghost",size:"sm",onClick:()=>S("grid"),children:(0,t.jsx)(v.default,{className:"h-4 w-4"})}),(0,t.jsx)(o.Button,{variant:"list"===I?"default":"ghost",size:"sm",onClick:()=>S("list"),children:(0,t.jsx)(x.default,{className:"h-4 w-4"})})]}),(0,t.jsxs)(c.Dialog,{open:k,onOpenChange:N,children:[(0,t.jsx)(c.DialogTrigger,{asChild:!0,children:(0,t.jsxs)(o.Button,{onClick:F,children:[(0,t.jsx)(m.Plus,{className:"mr-2 h-4 w-4"}),"Add Image"]})}),(0,t.jsxs)(c.DialogContent,{className:"max-w-lg",children:[(0,t.jsx)(c.DialogHeader,{children:(0,t.jsx)(c.DialogTitle,{children:A?"Edit Gallery Item":"Add Gallery Item"})}),(0,t.jsxs)("div",{className:"space-y-4 py-4 max-h-[70vh] overflow-y-auto",children:[(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsx)(l.Label,{htmlFor:"title",children:"Title"}),(0,t.jsx)(s.Input,{id:"title",value:z.title,onChange:e=>D({...z,title:e.target.value}),placeholder:"Project title"})]}),(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsx)(l.Label,{htmlFor:"category",children:"Category"}),(0,t.jsxs)(u.Select,{value:z.category,onValueChange:e=>D({...z,category:e}),children:[(0,t.jsx)(u.SelectTrigger,{children:(0,t.jsx)(u.SelectValue,{placeholder:"Select category"})}),(0,t.jsx)(u.SelectContent,{children:b.map(e=>(0,t.jsx)(u.SelectItem,{value:e.value,children:e.label},e.value))})]})]}),(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsx)(l.Label,{htmlFor:"imageUrl",children:"Main Image URL"}),(0,t.jsx)(s.Input,{id:"imageUrl",value:z.imageUrl,onChange:e=>D({...z,imageUrl:e.target.value}),placeholder:"https://..."})]}),(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsx)(l.Label,{htmlFor:"beforeImage",children:"Before Image URL (optional)"}),(0,t.jsx)(s.Input,{id:"beforeImage",value:z.beforeImage,onChange:e=>D({...z,beforeImage:e.target.value}),placeholder:"https://..."})]}),(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsx)(l.Label,{htmlFor:"afterImage",children:"After Image URL (optional)"}),(0,t.jsx)(s.Input,{id:"afterImage",value:z.afterImage,onChange:e=>D({...z,afterImage:e.target.value}),placeholder:"https://..."})]}),(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsx)(l.Label,{htmlFor:"description",children:"Description"}),(0,t.jsx)(d.Textarea,{id:"description",value:z.description,onChange:e=>D({...z,description:e.target.value}),placeholder:"Project description",rows:3})]}),(0,t.jsxs)(o.Button,{onClick:M,className:"w-full",children:[A?"Update":"Add"," Gallery Item"]})]})]})]})]}),children:C?(0,t.jsx)("div",{className:"p-8 text-center text-muted-foreground",children:"Loading gallery..."}):0===e.length?(0,t.jsx)(n.Card,{children:(0,t.jsxs)(n.CardContent,{className:"p-8 text-center",children:[(0,t.jsx)("p",{className:"text-muted-foreground mb-4",children:"No gallery items yet"}),(0,t.jsxs)(o.Button,{onClick:F,children:[(0,t.jsx)(m.Plus,{className:"mr-2 h-4 w-4"}),"Add First Image"]})]})}):"grid"===I?(0,t.jsx)("div",{className:"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",children:e.map(e=>(0,t.jsxs)(n.Card,{className:"overflow-hidden group",children:[(0,t.jsxs)("div",{className:"relative aspect-square",children:[(0,t.jsx)(a.default,{src:e.imageUrl,alt:e.title,fill:!0,className:"object-cover"}),(0,t.jsxs)("div",{className:"absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2",children:[(0,t.jsx)(o.Button,{variant:"secondary",size:"icon",onClick:()=>B(e),children:(0,t.jsx)(f.Pencil,{className:"h-4 w-4"})}),(0,t.jsx)(o.Button,{variant:"secondary",size:"icon",onClick:()=>P(e),children:e.featured?(0,t.jsx)(y.EyeOff,{className:"h-4 w-4"}):(0,t.jsx)(g.Eye,{className:"h-4 w-4"})}),(0,t.jsx)(o.Button,{variant:"destructive",size:"icon",onClick:()=>T(e.id),children:(0,t.jsx)(p.Trash2,{className:"h-4 w-4"})})]}),e.featured&&(0,t.jsx)("div",{className:"absolute top-2 left-2 px-2 py-1 bg-primary text-primary-foreground text-xs rounded",children:"Featured"})]}),(0,t.jsxs)(n.CardContent,{className:"p-3",children:[(0,t.jsx)("p",{className:"font-medium text-sm truncate",children:e.title}),(0,t.jsx)("p",{className:"text-xs text-muted-foreground capitalize",children:e.category})]})]},e.id))}):(0,t.jsx)(n.Card,{children:(0,t.jsx)(n.CardContent,{className:"p-0",children:(0,t.jsx)("div",{className:"divide-y",children:e.map(e=>(0,t.jsxs)("div",{className:"flex items-center gap-4 p-4",children:[(0,t.jsx)("div",{className:"relative h-16 w-20 rounded overflow-hidden bg-muted",children:(0,t.jsx)(a.default,{src:e.imageUrl,alt:e.title,fill:!0,className:"object-cover"})}),(0,t.jsxs)("div",{className:"flex-1 min-w-0",children:[(0,t.jsx)("p",{className:"font-medium truncate",children:e.title}),(0,t.jsx)("p",{className:"text-sm text-muted-foreground capitalize",children:e.category})]}),(0,t.jsxs)("div",{className:"flex items-center gap-1",children:[(0,t.jsx)(o.Button,{variant:"ghost",size:"icon",onClick:()=>B(e),children:(0,t.jsx)(f.Pencil,{className:"h-4 w-4"})}),(0,t.jsx)(o.Button,{variant:"ghost",size:"icon",onClick:()=>P(e),children:e.featured?(0,t.jsx)(y.EyeOff,{className:"h-4 w-4"}):(0,t.jsx)(g.Eye,{className:"h-4 w-4"})}),(0,t.jsx)(o.Button,{variant:"ghost",size:"icon",className:"text-destructive",onClick:()=>T(e.id),children:(0,t.jsx)(p.Trash2,{className:"h-4 w-4"})})]})]},e.id))})})})})}e.s(["default",()=>w],759606)}]);