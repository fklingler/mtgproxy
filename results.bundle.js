!function(e){var t={};function n(r){if(t[r])return t[r].exports;var s=t[r]={i:r,l:!1,exports:{}};return e[r].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(r,s,function(t){return e[t]}.bind(null,s));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=11)}([function(e,t,n){"use strict";n.d(t,"f",(function(){return r})),n.d(t,"g",(function(){return s})),n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return a})),n.d(t,"d",(function(){return l})),n.d(t,"c",(function(){return d})),n.d(t,"e",(function(){return u}));
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const r=`{{lit-${String(Math.random()).slice(2)}}}`,s=`\x3c!--${r}--\x3e`,i=new RegExp(`${r}|${s}`),o="$lit$";class a{constructor(e,t){this.parts=[],this.element=t;const n=[],s=[],a=document.createTreeWalker(t.content,133,null,!1);let l=0,h=-1,p=0;const{strings:f,values:{length:m}}=e;for(;p<m;){const e=a.nextNode();if(null!==e){if(h++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:n}=t;let r=0;for(let e=0;e<n;e++)c(t[e].name,o)&&r++;for(;r-- >0;){const t=f[p],n=u.exec(t)[2],r=n.toLowerCase()+o,s=e.getAttribute(r);e.removeAttribute(r);const a=s.split(i);this.parts.push({type:"attribute",index:h,name:n,strings:a}),p+=a.length-1}}"TEMPLATE"===e.tagName&&(s.push(e),a.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(r)>=0){const r=e.parentNode,s=t.split(i),a=s.length-1;for(let t=0;t<a;t++){let n,i=s[t];if(""===i)n=d();else{const e=u.exec(i);null!==e&&c(e[2],o)&&(i=i.slice(0,e.index)+e[1]+e[2].slice(0,-o.length)+e[3]),n=document.createTextNode(i)}r.insertBefore(n,e),this.parts.push({type:"node",index:++h})}""===s[a]?(r.insertBefore(d(),e),n.push(e)):e.data=s[a],p+=a}}else if(8===e.nodeType)if(e.data===r){const t=e.parentNode;null!==e.previousSibling&&h!==l||(h++,t.insertBefore(d(),e)),l=h,this.parts.push({type:"node",index:h}),null===e.nextSibling?e.data="":(n.push(e),h--),p++}else{let t=-1;for(;-1!==(t=e.data.indexOf(r,t+1));)this.parts.push({type:"node",index:-1}),p++}}else a.currentNode=s.pop()}for(const e of n)e.parentNode.removeChild(e)}}const c=(e,t)=>{const n=e.length-t.length;return n>=0&&e.slice(n)===t},l=e=>-1!==e.index,d=()=>document.createComment(""),u=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/},function(e,t,n){"use strict";var r=n(5),s=n(4),i=n(0);function o(e,t){const{element:{content:n},parts:r}=e,s=document.createTreeWalker(n,133,null,!1);let i=c(r),o=r[i],a=-1,l=0;const d=[];let u=null;for(;s.nextNode();){a++;const e=s.currentNode;for(e.previousSibling===u&&(u=null),t.has(e)&&(d.push(e),null===u&&(u=e)),null!==u&&l++;void 0!==o&&o.index===a;)o.index=null!==u?-1:o.index-l,i=c(r,i),o=r[i]}d.forEach(e=>e.parentNode.removeChild(e))}const a=e=>{let t=11===e.nodeType?0:1;const n=document.createTreeWalker(e,133,null,!1);for(;n.nextNode();)t++;return t},c=(e,t=-1)=>{for(let n=t+1;n<e.length;n++){const t=e[n];if(Object(i.d)(t))return n}return-1};var l=n(8),d=n(6),u=n(10);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const h=(e,t)=>`${e}--${t}`;let p=!0;void 0===window.ShadyCSS?p=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),p=!1);const f=e=>t=>{const n=h(t.type,e);let r=d.a.get(n);void 0===r&&(r={stringsArray:new WeakMap,keyString:new Map},d.a.set(n,r));let s=r.stringsArray.get(t.strings);if(void 0!==s)return s;const o=t.strings.join(i.f);if(s=r.keyString.get(o),void 0===s){const n=t.getTemplateElement();p&&window.ShadyCSS.prepareTemplateDom(n,e),s=new i.a(t,n),r.keyString.set(o,s)}return r.stringsArray.set(t.strings,s),s},m=["html","svg"],_=new Set,g=(e,t,n)=>{_.add(e);const r=n?n.element:document.createElement("template"),s=t.querySelectorAll("style"),{length:i}=s;if(0===i)return void window.ShadyCSS.prepareTemplateStyles(r,e);const l=document.createElement("style");for(let e=0;e<i;e++){const t=s[e];t.parentNode.removeChild(t),l.textContent+=t.textContent}(e=>{m.forEach(t=>{const n=d.a.get(h(t,e));void 0!==n&&n.keyString.forEach(e=>{const{element:{content:t}}=e,n=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{n.add(e)}),o(e,n)})})})(e);const u=r.content;n?function(e,t,n=null){const{element:{content:r},parts:s}=e;if(null==n)return void r.appendChild(t);const i=document.createTreeWalker(r,133,null,!1);let o=c(s),l=0,d=-1;for(;i.nextNode();){for(d++,i.currentNode===n&&(l=a(t),n.parentNode.insertBefore(t,n));-1!==o&&s[o].index===d;){if(l>0){for(;-1!==o;)s[o].index+=l,o=c(s,o);return}o=c(s,o)}}}(n,l,u.firstChild):u.insertBefore(l,u.firstChild),window.ShadyCSS.prepareTemplateStyles(r,e);const p=u.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==p)t.insertBefore(p.cloneNode(!0),t.firstChild);else if(n){u.insertBefore(l,u.firstChild);const e=new Set;e.add(l),o(n,e)}};window.JSCompiler_renameProperty=(e,t)=>e;const v={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},y=(e,t)=>t!==e&&(t==t||e==e),b={attribute:!0,type:String,converter:v,reflect:!1,hasChanged:y},S=Promise.resolve(!0);class w extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=S,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,n)=>{const r=this._attributeNameForProperty(n,t);void 0!==r&&(this._attributeToPropertyMap.set(r,n),e.push(r))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=b){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const n="symbol"==typeof e?Symbol():`__${e}`;Object.defineProperty(this.prototype,e,{get(){return this[n]},set(t){const r=this[e];this[n]=t,this._requestUpdate(e,r)},configurable:!0,enumerable:!0})}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty("finalized")||e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const n of t)this.createProperty(n,e[n])}}static _attributeNameForProperty(e,t){const n=t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,n=y){return n(e,t)}static _propertyValueFromAttribute(e,t){const n=t.type,r=t.converter||v,s="function"==typeof r?r:r.fromAttribute;return s?s(e,n):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const n=t.type,r=t.converter;return(r&&r.toAttribute||v.toAttribute)(e,n)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this._updateState=32|this._updateState,this._hasConnectedResolver&&(this._hasConnectedResolver(),this._hasConnectedResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,n){t!==n&&this._attributeToProperty(e,n)}_propertyToAttribute(e,t,n=b){const r=this.constructor,s=r._attributeNameForProperty(e,n);if(void 0!==s){const e=r._propertyValueToAttribute(t,n);if(void 0===e)return;this._updateState=8|this._updateState,null==e?this.removeAttribute(s):this.setAttribute(s,e),this._updateState=-9&this._updateState}}_attributeToProperty(e,t){if(8&this._updateState)return;const n=this.constructor,r=n._attributeToPropertyMap.get(e);if(void 0!==r){const e=n._classProperties.get(r)||b;this._updateState=16|this._updateState,this[r]=n._propertyValueFromAttribute(t,e),this._updateState=-17&this._updateState}}_requestUpdate(e,t){let n=!0;if(void 0!==e){const r=this.constructor,s=r._classProperties.get(e)||b;r._valueHasChanged(this[e],t,s.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==s.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,s))):n=!1}!this._hasRequestedUpdate&&n&&this._enqueueUpdate()}requestUpdate(e,t){return this._requestUpdate(e,t),this.updateComplete}async _enqueueUpdate(){let e,t;this._updateState=4|this._updateState;const n=this._updatePromise;this._updatePromise=new Promise((n,r)=>{e=n,t=r});try{await n}catch(e){}this._hasConnected||await new Promise(e=>this._hasConnectedResolver=e);try{const e=this.performUpdate();null!=e&&await e}catch(e){t(e)}e(!this._hasRequestedUpdate)}get _hasConnected(){return 32&this._updateState}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e&&this.update(t)}catch(t){throw e=!1,t}finally{this._markUpdated()}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0)}updated(e){}firstUpdated(e){}}w.finalized=!0;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const x=e=>t=>"function"==typeof t?((e,t)=>(window.customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:n,elements:r}=t;return{kind:n,elements:r,finisher(t){window.customElements.define(e,t)}}})(e,t),P=(e,t)=>"method"!==t.kind||!t.descriptor||"value"in t.descriptor?{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(n){n.createProperty(t.key,e)}}:Object.assign({},t,{finisher(n){n.createProperty(t.key,e)}});function C(e){return(t,n)=>void 0!==n?((e,t,n)=>{t.constructor.createProperty(n,e)})(e,t,n):P(e,t)}const N="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,O=Symbol();class T{constructor(e,t){if(t!==O)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(N?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const E=(e,...t)=>{const n=t.reduce((t,n,r)=>t+(e=>{if(e instanceof T)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+e[r+1],e[0]);return new T(n,O)};n.d(t,"a",(function(){return j})),n.d(t,"c",(function(){return x})),n.d(t,"e",(function(){return C})),n.d(t,"d",(function(){return r.d})),n.d(t,"b",(function(){return E})),
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.2.1");const k=e=>e.flat?e.flat(1/0):function e(t,n=[]){for(let r=0,s=t.length;r<s;r++){const s=t[r];Array.isArray(s)?e(s,n):n.push(s)}return n}(e);class j extends w{static finalize(){super.finalize.call(this),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const e=this.styles,t=[];if(Array.isArray(e)){k(e).reduceRight((e,t)=>(e.add(t),e),new Set).forEach(e=>t.unshift(e))}else e&&t.push(e);return t}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?N?this.renderRoot.adoptedStyleSheets=e.map(e=>e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){super.update(e);const t=this.render();t instanceof r.b&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){}}j.finalized=!0,j.render=(e,t,n)=>{if(!n||"object"!=typeof n||!n.scopeName)throw new Error("The `scopeName` option is required.");const r=n.scopeName,i=l.a.has(t),o=p&&11===t.nodeType&&!!t.host,a=o&&!_.has(r),c=a?document.createDocumentFragment():t;if(Object(l.b)(e,c,Object.assign({templateFactory:f(r)},n)),a){const e=l.a.get(c);l.a.delete(c);const n=e.value instanceof u.a?e.value.template:void 0;g(r,c,n),Object(s.b)(t,t.firstChild),t.appendChild(c),l.a.set(t,e)}!i&&o&&window.ShadyCSS.styleElement(t.host)}},function(e,t,n){"use strict";n.d(t,"f",(function(){return l})),n.d(t,"a",(function(){return u})),n.d(t,"d",(function(){return p})),n.d(t,"b",(function(){return f})),n.d(t,"e",(function(){return m})),n.d(t,"c",(function(){return v}));var r=n(7),s=n(4),i=n(3),o=n(10),a=n(9),c=n(0);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const l=e=>null===e||!("object"==typeof e||"function"==typeof e),d=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class u{constructor(e,t,n){this.dirty=!0,this.element=e,this.name=t,this.strings=n,this.parts=[];for(let e=0;e<n.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new h(this)}_getValue(){const e=this.strings,t=e.length-1;let n="";for(let r=0;r<t;r++){n+=e[r];const t=this.parts[r];if(void 0!==t){const e=t.value;if(l(e)||!d(e))n+="string"==typeof e?e:String(e);else for(const t of e)n+="string"==typeof t?t:String(t)}}return n+=e[t],n}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class h{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===i.a||l(e)&&e===this.value||(this.value=e,Object(r.b)(e)||(this.committer.dirty=!0))}commit(){for(;Object(r.b)(this.value);){const e=this.value;this.value=i.a,e(this)}this.value!==i.a&&this.committer.commit()}}class p{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(Object(c.c)()),this.endNode=e.appendChild(Object(c.c)())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=Object(c.c)()),e.__insert(this.endNode=Object(c.c)())}insertAfterPart(e){e.__insert(this.startNode=Object(c.c)()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){for(;Object(r.b)(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=i.a,e(this)}const e=this.__pendingValue;e!==i.a&&(l(e)?e!==this.value&&this.__commitText(e):e instanceof a.b?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):d(e)?this.__commitIterable(e):e===i.b?(this.value=i.b,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,n="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=n:this.__commitNode(document.createTextNode(n)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof o.a&&this.value.template===t)this.value.update(e.values);else{const n=new o.a(t,e.processor,this.options),r=n._clone();n.update(e.values),this.__commitNode(r),this.value=n}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let n,r=0;for(const s of e)n=t[r],void 0===n&&(n=new p(this.options),t.push(n),0===r?n.appendIntoPart(this):n.insertAfterPart(t[r-1])),n.setValue(s),n.commit(),r++;r<t.length&&(t.length=r,this.clear(n&&n.endNode))}clear(e=this.startNode){Object(s.b)(this.startNode.parentNode,e.nextSibling,this.endNode)}}class f{constructor(e,t,n){if(this.value=void 0,this.__pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=n}setValue(e){this.__pendingValue=e}commit(){for(;Object(r.b)(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=i.a,e(this)}if(this.__pendingValue===i.a)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=i.a}}class m extends u{constructor(e,t,n){super(e,t,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new _(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class _ extends h{}let g=!1;try{const e={get capture(){return g=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}class v{constructor(e,t,n){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=n,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;Object(r.b)(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=i.a,e(this)}if(this.__pendingValue===i.a)return;const e=this.__pendingValue,t=this.value,n=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),s=null!=e&&(null==t||n);n&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),s&&(this.__options=y(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=i.a}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const y=e=>e&&(g?{capture:e.capture,passive:e.passive,once:e.once}:e.capture)},function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return s}));
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const r={},s={}},function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return i}));
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const r=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,s=(e,t,n=null,r=null)=>{for(;t!==n;){const n=t.nextSibling;e.insertBefore(t,r),t=n}},i=(e,t,n=null)=>{for(;t!==n;){const n=t.nextSibling;e.removeChild(t),t=n}}},function(e,t,n){"use strict";var r=n(2);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const s=new class{handleAttributeExpressions(e,t,n,s){const i=t[0];if("."===i){return new r.e(e,t.slice(1),n).parts}return"@"===i?[new r.c(e,t.slice(1),s.eventContext)]:"?"===i?[new r.b(e,t.slice(1),n)]:new r.a(e,t,n).parts}handleTextExpression(e){return new r.d(e)}};var i=n(9),o=n(7);n(4),n(3),n(8),n(6),n(10),n(0);n.d(t,"d",(function(){return a})),n.d(t,"c",(function(){return o.a})),n.d(t,"a",(function(){return r.d})),n.d(t,"b",(function(){return i.b})),
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.2");const a=(e,...t)=>new i.b(e,t,"html",s)},function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return i}));var r=n(0);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function s(e){let t=i.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},i.set(e.type,t));let n=t.stringsArray.get(e.strings);if(void 0!==n)return n;const s=e.strings.join(r.f);return n=t.keyString.get(s),void 0===n&&(n=new r.a(e,e.getTemplateElement()),t.keyString.set(s,n)),t.stringsArray.set(e.strings,n),n}const i=new Map},function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return i}));
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const r=new WeakMap,s=e=>(...t)=>{const n=e(...t);return r.set(n,!0),n},i=e=>"function"==typeof e&&r.has(e)},function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return a}));var r=n(4),s=n(2),i=n(6);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const o=new WeakMap,a=(e,t,n)=>{let a=o.get(t);void 0===a&&(Object(r.b)(t,t.firstChild),o.set(t,a=new s.d(Object.assign({templateFactory:i.b},n))),a.appendInto(t)),a.setValue(e),a.commit()}},function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return a}));var r=n(4),s=n(0);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const i=` ${s.f} `;class o{constructor(e,t,n,r){this.strings=e,this.values=t,this.type=n,this.processor=r}getHTML(){const e=this.strings.length-1;let t="",n=!1;for(let r=0;r<e;r++){const e=this.strings[r],o=e.lastIndexOf("\x3c!--");n=(o>-1||n)&&-1===e.indexOf("--\x3e",o+1);const a=s.e.exec(e);t+=null===a?e+(n?i:s.g):e.substr(0,a.index)+a[1]+a[2]+s.b+a[3]+s.f}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}class a extends o{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const e=super.getTemplateElement(),t=e.content,n=t.firstChild;return t.removeChild(n),Object(r.c)(t,n.firstChild),e}}},function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(4),s=n(0);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class i{constructor(e,t,n){this.__parts=[],this.template=e,this.processor=t,this.options=n}update(e){let t=0;for(const n of this.__parts)void 0!==n&&n.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=r.a?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],n=this.template.parts,i=document.createTreeWalker(e,133,null,!1);let o,a=0,c=0,l=i.nextNode();for(;a<n.length;)if(o=n[a],Object(s.d)(o)){for(;c<o.index;)c++,"TEMPLATE"===l.nodeName&&(t.push(l),i.currentNode=l.content),null===(l=i.nextNode())&&(i.currentNode=t.pop(),l=i.nextNode());if("node"===o.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(l.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,o.name,o.strings,this.options));a++}else this.__parts.push(void 0),a++;return r.a&&(document.adoptNode(e),customElements.upgrade(e)),e}}},function(e,t,n){"use strict";n.r(t);var r,s,i,o=n(1);!function(e){e.W="W",e.U="U",e.B="B",e.R="R",e.G="G"}(r||(r={})),function(e){e.normal="normal",e.split="split",e.flip="flip",e.transform="transform",e.meld="meld",e.leveler="leveler",e.saga="saga",e.adventure="adventure",e.planar="planar",e.scheme="scheme",e.vanguard="vanguard",e.token="token",e.double_faced_token="double_faced_token",e.emblem="emblem",e.augment="augment",e.host="host",e.art_series="art_series",e.double_sided="double_sided"}(s||(s={})),function(e){e.core="core",e.expansion="expansion",e.masters="masters",e.masterpiece="masterpiece",e.from_the_vault="from_the_vault",e.spellbook="spellbook",e.premium_deck="premium_deck",e.duel_deck="duel_deck",e.commander="commander",e.planechase="planechase",e.conspiracy="conspiracy",e.archenemy="archenemy",e.vanguard="vanguard",e.funny="funny",e.starter="starter",e.box="box",e.promo="promo",e.token="token",e.memorabilia="memorabilia",e.draft_innovation="draft_innovation"}(i||(i={}));var a=n(2),c=n(5);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const l=new WeakMap,d=Object(c.c)(e=>t=>{if(!(t instanceof c.a))throw new Error("unsafeHTML can only be used in text bindings");const n=l.get(t);if(void 0!==n&&Object(a.f)(e)&&e===n.value&&t.value===n.fragment)return;const r=document.createElement("template");r.innerHTML=e;const s=document.importNode(r.content,!0);t.setValue(s),l.set(t,{value:e,fragment:s})});function u(e){return o.d`
        <div class="name_mana_line">
            <p class="name">${e.name}</p>
            <p class="manacost">${d(e.mana_cost.replace("}{","}<wbr>{"))}</p>
        </div>
        <p class="typeline">${e.type_line}</p>
        <div class="oracle_div">${t=e.oracle_text,t.split("\n").map(e=>o.d`
        <p class="oracle_p">
            ${d(e.replace("(","<i>(").replace(")",")<i>"))}
        </p>
    `)}</div>`;var t}function h(e){const t=e.type_line;return t.includes("Creature")||t.includes("Vehicle")?function(e){return o.d`
        ${u(e)}
        <p class="power_toughness">${e.power}/${e.toughness}</p>
    `}(e):t.includes("Planeswalker")?function(e){return o.d`
        ${u(e)}
        <p class="loyalty">${e.loyalty}</p>
    `}(e):function(e){return u(e)}(e)}const p=[s.split,s.adventure],f=[s.token,s.double_faced_token,s.vanguard,s.emblem,s.planar];function m(e){if(p.includes(e.layout))return function(e){var t;if(2!=(null===(t=e.card_faces)||void 0===t?void 0:t.length))throw new Error("Card should have 2 faces in this layout.");return o.d`
        <div class="card_frame">
            <div class="card_inner">
                <div class="card_inner split_left">
                    ${h(e.card_faces[0])}
                </div>
                <hr class="flip_divider">
                <div class="card_inner split_right">
                    ${h(e.card_faces[1])}
                </div>
            </div>
        </div>
    `}(e);if("flip"==e.layout)return function(e){var t;if(2!=(null===(t=e.card_faces)||void 0===t?void 0:t.length))throw new Error("Card should have 2 faces in this layout.");return o.d`
        <div class="card_frame">
            <div class="card_inner">
                <div class="card_inner flip_top">
                    ${h(e.card_faces[0])}
                </div>
                <hr class="flip_divider">
                <div class="card_inner flip_bottom">
                    ${h(e.card_faces[1])}
                </div>
            </div>
        </div>
    `}(e);if("transform"==e.layout)return function(e){var t;if(2!=(null===(t=e.card_faces)||void 0===t?void 0:t.length))throw new Error("Card should have 2 faces in this layout.");return o.d`
        <div class="card_frame">
            <div class="card_inner">
                    ${h(e.card_faces[0])}
            </div>
        </div>
        <div class="card_frame">
            <div class="card_inner">
                    ${h(e.card_faces[1])}
            </div>
        </div>
    `}(e);if(f.includes(e.layout))throw new Error("Layout not supported");return function(e){return o.d`
        <div class="card_frame">
            <div class="card_inner">
                    ${h(e)}
            </div>
        </div>
    `}(e)}const _=o.b`
p {
    margin-top: 0mm;
    margin-bottom: 1mm;
}

* {
    box-sizing: border-box;
}
        
.card_frame {
    /* size of magic card is 63mm x 88mm
       proxy size is 60mm x 85mm
       0.5mm border included in this size
     */
    width: 60mm;
    height: 85mm;
    padding: 2mm;
    border: 0.5mm solid black;
    float: left;
    page-break-inside: avoid;
    overflow: hidden;
    
    font-family: 'Open Sans', sans-serif;
    font-size: 3.75mm;
    line-height: 100%;
    text-rendering: geometricPrecision;
}

@media print {
    .dont_print {
        display: none;
    }
}

.card_inner {
    flex: 1 1 auto;
    display: flex;
    flex-flow: column;
    height: 100%;
}

.split_left {
}

.flip_top {
}

.flip_bottom {
    -ms-transform: rotate(180deg); /* IE 9 */
    -webkit-transform: rotate(180deg); /* Chrome, Safari, Opera */
    transform: rotate(180deg);
}

.flip_divider {
    width: 100%;
}

.name {
    display: inline-block;
    vertical-align: text-top;
    font-weight: bold;
    width: 65%;
    float: left;
}

.manacost {
    display: inline-block;
    vertical-align: text-top;
    width: 35%;
    text-align: right;
    float: right;
}

.name_mana_line {
    margin-bottom: 1.5mm;
}

.typeline {
}

.oracle_div {
    font-size: 2.75mm;
    flex: 1 1 auto;
}

.power_toughness {
    text-align: right;
}

.loyalty {
    text-align: right;
}
`;var g=function(e,t,n,r){var s,i=arguments.length,o=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let v=class extends o.a{constructor(){super(...arguments),this.loading=!0}static get styles(){return _}render(){const e=[];for(let t=0;t<this.count;t++){let t;if(this.loading)t=o.d`
                <div class="card_frame dont_print">
                    <p class="loading">Loading...</p>
                </div>`;else if(this.card&&"error"!=this.card.object)try{t=m(this.card)}catch(e){t=o.d`
                    <div class="card_frame dont_print">
                        <p class="error">
                            An error occurred while generating the proxy for the card "${this.name}".<br><br>
                            This may be because the card type is not supported.<br><br>
                            If you think this should work, please add an issue on the
                            <a href="https://github.com/fklingler/mtgproxy">Github Repository</a> of this website, or
                            contact <a href="https://twitter.com/fklingler">@fklingler</a>.<br><br>
                            <i>This will not be printed.</i>
                        </p>
                    </div>`}else t=o.d`
                <div class="card_frame dont_print">
                    <p class="card_not_found">Card "${this.name}" not found.<br><br><i>This will not be printed.</i></p>
                </div>
                `;e.push(t)}return o.d`${e}`}updated(e){super.updated(e),e.has("name")&&this.fetchCard()}async fetchCard(){this.loading=!0;const e=await fetch(`https://api.scryfall.com/cards/named?fuzzy=${encodeURIComponent(this.name)}`);this.card=await e.json(),this.loading=!1}};g([Object(o.e)({type:String})],v.prototype,"name",void 0),g([Object(o.e)({type:Number})],v.prototype,"count",void 0),g([Object(o.e)({type:Boolean})],v.prototype,"loading",void 0),g([Object(o.e)({type:Object})],v.prototype,"card",void 0),v=g([Object(o.c)("mtgp-results-card")],v);var y=function(e,t,n,r){var s,i=arguments.length,o=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let b=class extends o.a{constructor(){super(),this.cards=[];const e=new URLSearchParams(window.location.search).get("cards");this.cards=this.splitCardsInput(e)}render(){return o.d`${this.cards.map(e=>o.d`<mtgp-results-card name="${e.name}" count="${e.count}"></mtgp-results-card>`)}`}splitCardsInput(e){return e.match(/[^\r\n]+/g).map(e=>{var t;const n=/^((?<count>[\d]+)x?\s)?(?<name>.+)/gi.exec(e.trim());if(null==n?void 0:n.groups)return{count:parseInt(null!==(t=n.groups.count)&&void 0!==t?t:"1",10),name:n.groups.name}}).filter(e=>!!e)}};y([Object(o.e)({type:Array})],b.prototype,"cards",void 0),b=y([Object(o.c)("mtgp-results")],b)}]);