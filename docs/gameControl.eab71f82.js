parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"RETV":[function(require,module,exports) {
"use strict";var t;Object.defineProperty(exports,"__esModule",{value:!0}),exports.HTML_ELEMENTS=exports.PHASE=exports.INPUT=exports.FONTS=exports.COLOURS=exports.WIN_SCORE=exports.BAT_WIDTH=exports.BAT_HEIGHT=exports.BALL_RADIUS=exports.BAT_SIDE_MARGIN=exports.GAME_HEIGHT=exports.GAME_WIDTH=exports.DIRECTION=exports.VERSION_NUMBER=void 0,exports.VERSION_NUMBER="1.16",function(t){t.Up="UP",t.Down="DOWN",t.Left="LEFT",t.Right="RIGHT"}(t=exports.DIRECTION||(exports.DIRECTION={})),exports.GAME_WIDTH=600,exports.GAME_HEIGHT=400,exports.BAT_SIDE_MARGIN=20,exports.BALL_RADIUS=10,exports.BAT_HEIGHT=60,exports.BAT_WIDTH=8,exports.WIN_SCORE=11,exports.COLOURS={BACKGROUND:"#333",MAIN:"#CCC",white:"white"},exports.FONTS={TITLE:"30px arial",SCORE:"60px arial",SMALL:"12px arial"},exports.INPUT={UP:"q",DOWN:"a",X:"x"},exports.PHASE={START:"START",GAME:"GAME",END:"END"},exports.HTML_ELEMENTS={START_BUTTON:"startButton",RESTART_BUTTON:"restartButton",START_SCREEN:"startScreen",END_SCREEN:"endScreen",RESULT_TEXT:"resultText"};
},{}],"lvQy":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.gameCanvas=exports.resultText=exports.endScreen=exports.startScreen=exports.restartButton=exports.startButton=void 0;var e=require("./gameConstants");exports.startButton=document.getElementsByClassName(e.HTML_ELEMENTS.START_BUTTON)[0],exports.restartButton=document.getElementsByClassName(e.HTML_ELEMENTS.RESTART_BUTTON)[0],exports.startScreen=document.getElementById(e.HTML_ELEMENTS.START_SCREEN),exports.endScreen=document.getElementById(e.HTML_ELEMENTS.END_SCREEN),exports.resultText=document.getElementById(e.HTML_ELEMENTS.RESULT_TEXT),exports.gameCanvas=document.getElementById("game");
},{"./gameConstants":"RETV"}],"gTUZ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.showEndScreen=exports.hideEndScreen=exports.hideStartScreen=void 0;var e=require("../common/htmlElements");exports.hideStartScreen=function(){e.startScreen.classList.add("hide")},exports.hideEndScreen=function(){e.endScreen.classList.add("hide")},exports.showEndScreen=function(){e.endScreen.classList.remove("hide")};
},{"../common/htmlElements":"lvQy"}],"s9iF":[function(require,module,exports) {
function t(){this.__data__=[],this.size=0}module.exports=t;
},{}],"LIpy":[function(require,module,exports) {
function e(e,n){return e===n||e!=e&&n!=n}module.exports=e;
},{}],"yEjJ":[function(require,module,exports) {
var r=require("./eq");function e(e,n){for(var t=e.length;t--;)if(r(e[t][0],n))return t;return-1}module.exports=e;
},{"./eq":"LIpy"}],"bWyl":[function(require,module,exports) {
var e=require("./_assocIndexOf"),r=Array.prototype,t=r.splice;function a(r){var a=this.__data__,o=e(a,r);return!(o<0)&&(o==a.length-1?a.pop():t.call(a,o,1),--this.size,!0)}module.exports=a;
},{"./_assocIndexOf":"yEjJ"}],"Ewuv":[function(require,module,exports) {
var r=require("./_assocIndexOf");function e(e){var a=this.__data__,o=r(a,e);return o<0?void 0:a[o][1]}module.exports=e;
},{"./_assocIndexOf":"yEjJ"}],"xDQX":[function(require,module,exports) {
var e=require("./_assocIndexOf");function r(r){return e(this.__data__,r)>-1}module.exports=r;
},{"./_assocIndexOf":"yEjJ"}],"h0zV":[function(require,module,exports) {
var s=require("./_assocIndexOf");function e(e,r){var t=this.__data__,i=s(t,e);return i<0?(++this.size,t.push([e,r])):t[i][1]=r,this}module.exports=e;
},{"./_assocIndexOf":"yEjJ"}],"Xk23":[function(require,module,exports) {
var e=require("./_listCacheClear"),t=require("./_listCacheDelete"),r=require("./_listCacheGet"),l=require("./_listCacheHas"),o=require("./_listCacheSet");function a(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var l=e[t];this.set(l[0],l[1])}}a.prototype.clear=e,a.prototype.delete=t,a.prototype.get=r,a.prototype.has=l,a.prototype.set=o,module.exports=a;
},{"./_listCacheClear":"s9iF","./_listCacheDelete":"bWyl","./_listCacheGet":"Ewuv","./_listCacheHas":"xDQX","./_listCacheSet":"h0zV"}],"y4DG":[function(require,module,exports) {
var e=require("./_ListCache");function i(){this.__data__=new e,this.size=0}module.exports=i;
},{"./_ListCache":"Xk23"}],"TpjK":[function(require,module,exports) {
function e(e){var t=this.__data__,i=t.delete(e);return this.size=t.size,i}module.exports=e;
},{}],"skbs":[function(require,module,exports) {
function t(t){return this.__data__.get(t)}module.exports=t;
},{}],"ocJ6":[function(require,module,exports) {
function t(t){return this.__data__.has(t)}module.exports=t;
},{}],"j3D9":[function(require,module,exports) {
var global = arguments[3];
var e=arguments[3],t="object"==typeof e&&e&&e.Object===Object&&e;module.exports=t;
},{}],"MIhM":[function(require,module,exports) {
var e=require("./_freeGlobal"),t="object"==typeof self&&self&&self.Object===Object&&self,l=e||t||Function("return this")();module.exports=l;
},{"./_freeGlobal":"j3D9"}],"wppe":[function(require,module,exports) {
var o=require("./_root"),r=o.Symbol;module.exports=r;
},{"./_root":"MIhM"}],"uiOY":[function(require,module,exports) {
var r=require("./_Symbol"),t=Object.prototype,e=t.hasOwnProperty,o=t.toString,a=r?r.toStringTag:void 0;function l(r){var t=e.call(r,a),l=r[a];try{r[a]=void 0;var c=!0}catch(n){}var i=o.call(r);return c&&(t?r[a]=l:delete r[a]),i}module.exports=l;
},{"./_Symbol":"wppe"}],"lPmd":[function(require,module,exports) {
var t=Object.prototype,o=t.toString;function r(t){return o.call(t)}module.exports=r;
},{}],"e5TX":[function(require,module,exports) {
var e=require("./_Symbol"),r=require("./_getRawTag"),o=require("./_objectToString"),t="[object Null]",i="[object Undefined]",n=e?e.toStringTag:void 0;function u(e){return null==e?void 0===e?i:t:n&&n in Object(e)?r(e):o(e)}module.exports=u;
},{"./_Symbol":"wppe","./_getRawTag":"uiOY","./_objectToString":"lPmd"}],"u9vI":[function(require,module,exports) {
function n(n){var o=typeof n;return null!=n&&("object"==o||"function"==o)}module.exports=n;
},{}],"dRuq":[function(require,module,exports) {
var e=require("./_baseGetTag"),r=require("./isObject"),t="[object AsyncFunction]",n="[object Function]",o="[object GeneratorFunction]",c="[object Proxy]";function u(u){if(!r(u))return!1;var i=e(u);return i==n||i==o||i==t||i==c}module.exports=u;
},{"./_baseGetTag":"e5TX","./isObject":"u9vI"}],"q3B8":[function(require,module,exports) {
var r=require("./_root"),e=r["__core-js_shared__"];module.exports=e;
},{"./_root":"MIhM"}],"qpNZ":[function(require,module,exports) {
var e=require("./_coreJsData"),r=function(){var r=/[^.]+$/.exec(e&&e.keys&&e.keys.IE_PROTO||"");return r?"Symbol(src)_1."+r:""}();function n(e){return!!r&&r in e}module.exports=n;
},{"./_coreJsData":"q3B8"}],"g55O":[function(require,module,exports) {
var t=Function.prototype,r=t.toString;function n(t){if(null!=t){try{return r.call(t)}catch(n){}try{return t+""}catch(n){}}return""}module.exports=n;
},{}],"iEGD":[function(require,module,exports) {
var e=require("./isFunction"),r=require("./_isMasked"),t=require("./isObject"),o=require("./_toSource"),n=/[\\^$.*+?()[\]{}|]/g,c=/^\[object .+?Constructor\]$/,i=Function.prototype,u=Object.prototype,p=i.toString,s=u.hasOwnProperty,a=RegExp("^"+p.call(s).replace(n,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function l(n){return!(!t(n)||r(n))&&(e(n)?a:c).test(o(n))}module.exports=l;
},{"./isFunction":"dRuq","./_isMasked":"qpNZ","./isObject":"u9vI","./_toSource":"g55O"}],"Nk5W":[function(require,module,exports) {
function n(n,o){return null==n?void 0:n[o]}module.exports=n;
},{}],"bViC":[function(require,module,exports) {
var e=require("./_baseIsNative"),r=require("./_getValue");function u(u,a){var i=r(u,a);return e(i)?i:void 0}module.exports=u;
},{"./_baseIsNative":"iEGD","./_getValue":"Nk5W"}],"K9uV":[function(require,module,exports) {
var e=require("./_getNative"),r=require("./_root"),o=e(r,"Map");module.exports=o;
},{"./_getNative":"bViC","./_root":"MIhM"}],"FTXF":[function(require,module,exports) {
var e=require("./_getNative"),r=e(Object,"create");module.exports=r;
},{"./_getNative":"bViC"}],"RxSq":[function(require,module,exports) {
var e=require("./_nativeCreate");function t(){this.__data__=e?e(null):{},this.size=0}module.exports=t;
},{"./_nativeCreate":"FTXF"}],"qBl2":[function(require,module,exports) {
function t(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}module.exports=t;
},{}],"hClK":[function(require,module,exports) {
var e=require("./_nativeCreate"),r="__lodash_hash_undefined__",t=Object.prototype,a=t.hasOwnProperty;function _(t){var _=this.__data__;if(e){var o=_[t];return o===r?void 0:o}return a.call(_,t)?_[t]:void 0}module.exports=_;
},{"./_nativeCreate":"FTXF"}],"YIaf":[function(require,module,exports) {
var e=require("./_nativeCreate"),r=Object.prototype,t=r.hasOwnProperty;function a(r){var a=this.__data__;return e?void 0!==a[r]:t.call(a,r)}module.exports=a;
},{"./_nativeCreate":"FTXF"}],"Ag0p":[function(require,module,exports) {
var e=require("./_nativeCreate"),_="__lodash_hash_undefined__";function i(i,t){var a=this.__data__;return this.size+=this.has(i)?0:1,a[i]=e&&void 0===t?_:t,this}module.exports=i;
},{"./_nativeCreate":"FTXF"}],"C8N4":[function(require,module,exports) {
var e=require("./_hashClear"),r=require("./_hashDelete"),t=require("./_hashGet"),h=require("./_hashHas"),o=require("./_hashSet");function a(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var h=e[r];this.set(h[0],h[1])}}a.prototype.clear=e,a.prototype.delete=r,a.prototype.get=t,a.prototype.has=h,a.prototype.set=o,module.exports=a;
},{"./_hashClear":"RxSq","./_hashDelete":"qBl2","./_hashGet":"hClK","./_hashHas":"YIaf","./_hashSet":"Ag0p"}],"lBq7":[function(require,module,exports) {
var e=require("./_Hash"),i=require("./_ListCache"),r=require("./_Map");function a(){this.size=0,this.__data__={hash:new e,map:new(r||i),string:new e}}module.exports=a;
},{"./_Hash":"C8N4","./_ListCache":"Xk23","./_Map":"K9uV"}],"XJYD":[function(require,module,exports) {
function o(o){var n=typeof o;return"string"==n||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==o:null===o}module.exports=o;
},{}],"ZC1a":[function(require,module,exports) {
var r=require("./_isKeyable");function e(e,a){var t=e.__data__;return r(a)?t["string"==typeof a?"string":"hash"]:t.map}module.exports=e;
},{"./_isKeyable":"XJYD"}],"cDyG":[function(require,module,exports) {
var e=require("./_getMapData");function t(t){var r=e(this,t).delete(t);return this.size-=r?1:0,r}module.exports=t;
},{"./_getMapData":"ZC1a"}],"G3gK":[function(require,module,exports) {
var e=require("./_getMapData");function t(t){return e(this,t).get(t)}module.exports=t;
},{"./_getMapData":"ZC1a"}],"ueph":[function(require,module,exports) {
var e=require("./_getMapData");function r(r){return e(this,r).has(r)}module.exports=r;
},{"./_getMapData":"ZC1a"}],"UY82":[function(require,module,exports) {
var e=require("./_getMapData");function t(t,i){var s=e(this,t),r=s.size;return s.set(t,i),this.size+=s.size==r?0:1,this}module.exports=t;
},{"./_getMapData":"ZC1a"}],"wtMJ":[function(require,module,exports) {
var e=require("./_mapCacheClear"),r=require("./_mapCacheDelete"),t=require("./_mapCacheGet"),a=require("./_mapCacheHas"),p=require("./_mapCacheSet");function o(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var a=e[r];this.set(a[0],a[1])}}o.prototype.clear=e,o.prototype.delete=r,o.prototype.get=t,o.prototype.has=a,o.prototype.set=p,module.exports=o;
},{"./_mapCacheClear":"lBq7","./_mapCacheDelete":"cDyG","./_mapCacheGet":"G3gK","./_mapCacheHas":"ueph","./_mapCacheSet":"UY82"}],"fwYF":[function(require,module,exports) {
var e=require("./_ListCache"),i=require("./_Map"),t=require("./_MapCache"),s=200;function _(_,a){var r=this.__data__;if(r instanceof e){var h=r.__data__;if(!i||h.length<s-1)return h.push([_,a]),this.size=++r.size,this;r=this.__data__=new t(h)}return r.set(_,a),this.size=r.size,this}module.exports=_;
},{"./_ListCache":"Xk23","./_Map":"K9uV","./_MapCache":"wtMJ"}],"I84N":[function(require,module,exports) {
var e=require("./_ListCache"),t=require("./_stackClear"),r=require("./_stackDelete"),a=require("./_stackGet"),s=require("./_stackHas"),o=require("./_stackSet");function i(t){var r=this.__data__=new e(t);this.size=r.size}i.prototype.clear=t,i.prototype.delete=r,i.prototype.get=a,i.prototype.has=s,i.prototype.set=o,module.exports=i;
},{"./_ListCache":"Xk23","./_stackClear":"y4DG","./_stackDelete":"TpjK","./_stackGet":"skbs","./_stackHas":"ocJ6","./_stackSet":"fwYF"}],"D78i":[function(require,module,exports) {
function n(n,r){for(var e=-1,l=null==n?0:n.length;++e<l&&!1!==r(n[e],e,n););return n}module.exports=n;
},{}],"kAdy":[function(require,module,exports) {
var e=require("./_getNative"),r=function(){try{var r=e(Object,"defineProperty");return r({},"",{}),r}catch(t){}}();module.exports=r;
},{"./_getNative":"bViC"}],"d05L":[function(require,module,exports) {
var e=require("./_defineProperty");function r(r,o,u){"__proto__"==o&&e?e(r,o,{configurable:!0,enumerable:!0,value:u,writable:!0}):r[o]=u}module.exports=r;
},{"./_defineProperty":"kAdy"}],"pS95":[function(require,module,exports) {
var e=require("./_baseAssignValue"),r=require("./eq"),o=Object.prototype,a=o.hasOwnProperty;function i(o,i,t){var n=o[i];a.call(o,i)&&r(n,t)&&(void 0!==t||i in o)||e(o,i,t)}module.exports=i;
},{"./_baseAssignValue":"d05L","./eq":"LIpy"}],"dtkN":[function(require,module,exports) {
var r=require("./_assignValue"),e=require("./_baseAssignValue");function a(a,i,u,n){var o=!u;u||(u={});for(var s=-1,v=i.length;++s<v;){var l=i[s],t=n?n(u[l],a[l],l,u,a):void 0;void 0===t&&(t=a[l]),o?e(u,l,t):r(u,l,t)}return u}module.exports=a;
},{"./_assignValue":"pS95","./_baseAssignValue":"d05L"}],"r8MY":[function(require,module,exports) {
function r(r,o){for(var e=-1,n=Array(r);++e<r;)n[e]=o(e);return n}module.exports=r;
},{}],"OuyB":[function(require,module,exports) {
function e(e){return null!=e&&"object"==typeof e}module.exports=e;
},{}],"pK4Y":[function(require,module,exports) {
var e=require("./_baseGetTag"),r=require("./isObjectLike"),t="[object Arguments]";function u(u){return r(u)&&e(u)==t}module.exports=u;
},{"./_baseGetTag":"e5TX","./isObjectLike":"OuyB"}],"tilN":[function(require,module,exports) {
var e=require("./_baseIsArguments"),r=require("./isObjectLike"),t=Object.prototype,l=t.hasOwnProperty,n=t.propertyIsEnumerable,u=e(function(){return arguments}())?e:function(e){return r(e)&&l.call(e,"callee")&&!n.call(e,"callee")};module.exports=u;
},{"./_baseIsArguments":"pK4Y","./isObjectLike":"OuyB"}],"p0cq":[function(require,module,exports) {
var r=Array.isArray;module.exports=r;
},{}],"PYZb":[function(require,module,exports) {
function e(){return!1}module.exports=e;
},{}],"iyC2":[function(require,module,exports) {

var e=require("./_root"),o=require("./stubFalse"),r="object"==typeof exports&&exports&&!exports.nodeType&&exports,t=r&&"object"==typeof module&&module&&!module.nodeType&&module,p=t&&t.exports===r,u=p?e.Buffer:void 0,d=u?u.isBuffer:void 0,s=d||o;module.exports=s;
},{"./_root":"MIhM","./stubFalse":"PYZb"}],"AGrE":[function(require,module,exports) {
var e=9007199254740991,r=/^(?:0|[1-9]\d*)$/;function t(t,n){var o=typeof t;return!!(n=null==n?e:n)&&("number"==o||"symbol"!=o&&r.test(t))&&t>-1&&t%1==0&&t<n}module.exports=t;
},{}],"GmNU":[function(require,module,exports) {
var e=9007199254740991;function r(r){return"number"==typeof r&&r>-1&&r%1==0&&r<=e}module.exports=r;
},{}],"L2LX":[function(require,module,exports) {
var e=require("./_baseGetTag"),t=require("./isLength"),r=require("./isObjectLike"),o="[object Arguments]",b="[object Array]",c="[object Boolean]",j="[object Date]",a="[object Error]",n="[object Function]",i="[object Map]",A="[object Number]",y="[object Object]",u="[object RegExp]",g="[object Set]",l="[object String]",p="[object WeakMap]",s="[object ArrayBuffer]",m="[object DataView]",U="[object Float32Array]",f="[object Float64Array]",q="[object Int8Array]",F="[object Int16Array]",I="[object Int32Array]",d="[object Uint8Array]",h="[object Uint8ClampedArray]",k="[object Uint16Array]",x="[object Uint32Array]",B={};function D(o){return r(o)&&t(o.length)&&!!B[e(o)]}B[U]=B[f]=B[q]=B[F]=B[I]=B[d]=B[h]=B[k]=B[x]=!0,B[o]=B[b]=B[s]=B[c]=B[m]=B[j]=B[a]=B[n]=B[i]=B[A]=B[y]=B[u]=B[g]=B[l]=B[p]=!1,module.exports=D;
},{"./_baseGetTag":"e5TX","./isLength":"GmNU","./isObjectLike":"OuyB"}],"PnXa":[function(require,module,exports) {
function n(n){return function(r){return n(r)}}module.exports=n;
},{}],"PBPf":[function(require,module,exports) {
var e=require("./_freeGlobal"),o="object"==typeof exports&&exports&&!exports.nodeType&&exports,r=o&&"object"==typeof module&&module&&!module.nodeType&&module,t=r&&r.exports===o,p=t&&e.process,u=function(){try{var e=r&&r.require&&r.require("util").types;return e||p&&p.binding&&p.binding("util")}catch(o){}}();module.exports=u;
},{"./_freeGlobal":"j3D9"}],"kwIb":[function(require,module,exports) {
var e=require("./_baseIsTypedArray"),r=require("./_baseUnary"),a=require("./_nodeUtil"),i=a&&a.isTypedArray,s=i?r(i):e;module.exports=s;
},{"./_baseIsTypedArray":"L2LX","./_baseUnary":"PnXa","./_nodeUtil":"PBPf"}],"VcLW":[function(require,module,exports) {
var e=require("./_baseTimes"),r=require("./isArguments"),t=require("./isArray"),i=require("./isBuffer"),n=require("./_isIndex"),s=require("./isTypedArray"),u=Object.prototype,f=u.hasOwnProperty;function a(u,a){var o=t(u),p=!o&&r(u),y=!o&&!p&&i(u),g=!o&&!p&&!y&&s(u),h=o||p||y||g,l=h?e(u.length,String):[],q=l.length;for(var b in u)!a&&!f.call(u,b)||h&&("length"==b||y&&("offset"==b||"parent"==b)||g&&("buffer"==b||"byteLength"==b||"byteOffset"==b)||n(b,q))||l.push(b);return l}module.exports=a;
},{"./_baseTimes":"r8MY","./isArguments":"tilN","./isArray":"p0cq","./isBuffer":"iyC2","./_isIndex":"AGrE","./isTypedArray":"kwIb"}],"nhsl":[function(require,module,exports) {
var t=Object.prototype;function o(o){var r=o&&o.constructor;return o===("function"==typeof r&&r.prototype||t)}module.exports=o;
},{}],"oss3":[function(require,module,exports) {
function n(n,r){return function(t){return n(r(t))}}module.exports=n;
},{}],"J1oc":[function(require,module,exports) {
var e=require("./_overArg"),r=e(Object.keys,Object);module.exports=r;
},{"./_overArg":"oss3"}],"BNjb":[function(require,module,exports) {
var r=require("./_isPrototype"),e=require("./_nativeKeys"),t=Object.prototype,o=t.hasOwnProperty;function n(t){if(!r(t))return e(t);var n=[];for(var u in Object(t))o.call(t,u)&&"constructor"!=u&&n.push(u);return n}module.exports=n;
},{"./_isPrototype":"nhsl","./_nativeKeys":"J1oc"}],"LN6c":[function(require,module,exports) {
var e=require("./isFunction"),n=require("./isLength");function r(r){return null!=r&&n(r.length)&&!e(r)}module.exports=r;
},{"./isFunction":"dRuq","./isLength":"GmNU"}],"HI10":[function(require,module,exports) {
var e=require("./_arrayLikeKeys"),r=require("./_baseKeys"),i=require("./isArrayLike");function u(u){return i(u)?e(u):r(u)}module.exports=u;
},{"./_arrayLikeKeys":"VcLW","./_baseKeys":"BNjb","./isArrayLike":"LN6c"}],"eFjB":[function(require,module,exports) {
var e=require("./_copyObject"),r=require("./keys");function u(u,o){return u&&e(o,r(o),u)}module.exports=u;
},{"./_copyObject":"dtkN","./keys":"HI10"}],"uy4o":[function(require,module,exports) {
function r(r){var n=[];if(null!=r)for(var u in Object(r))n.push(u);return n}module.exports=r;
},{}],"FASg":[function(require,module,exports) {
var r=require("./isObject"),e=require("./_isPrototype"),t=require("./_nativeKeysIn"),o=Object.prototype,i=o.hasOwnProperty;function n(o){if(!r(o))return t(o);var n=e(o),u=[];for(var s in o)("constructor"!=s||!n&&i.call(o,s))&&u.push(s);return u}module.exports=n;
},{"./isObject":"u9vI","./_isPrototype":"nhsl","./_nativeKeysIn":"uy4o"}],"UACB":[function(require,module,exports) {
var e=require("./_arrayLikeKeys"),r=require("./_baseKeysIn"),i=require("./isArrayLike");function u(u){return i(u)?e(u,!0):r(u)}module.exports=u;
},{"./_arrayLikeKeys":"VcLW","./_baseKeysIn":"FASg","./isArrayLike":"LN6c"}],"q2Io":[function(require,module,exports) {
var e=require("./_copyObject"),r=require("./keysIn");function u(u,n){return u&&e(n,r(n),u)}module.exports=u;
},{"./_copyObject":"dtkN","./keysIn":"UACB"}],"s4SJ":[function(require,module,exports) {

var e=require("./_root"),o="object"==typeof exports&&exports&&!exports.nodeType&&exports,r=o&&"object"==typeof module&&module&&!module.nodeType&&module,t=r&&r.exports===o,p=t?e.Buffer:void 0,u=p?p.allocUnsafe:void 0;function n(e,o){if(o)return e.slice();var r=e.length,t=u?u(r):new e.constructor(r);return e.copy(t),t}module.exports=n;
},{"./_root":"MIhM"}],"Mkgn":[function(require,module,exports) {
function r(r,e){var n=-1,o=r.length;for(e||(e=Array(o));++n<o;)e[n]=r[n];return e}module.exports=r;
},{}],"uvMU":[function(require,module,exports) {
function r(r,n){for(var e=-1,l=null==r?0:r.length,o=0,t=[];++e<l;){var u=r[e];n(u,e,r)&&(t[o++]=u)}return t}module.exports=r;
},{}],"Mmba":[function(require,module,exports) {
function e(){return[]}module.exports=e;
},{}],"EvLK":[function(require,module,exports) {
var r=require("./_arrayFilter"),e=require("./stubArray"),t=Object.prototype,u=t.propertyIsEnumerable,n=Object.getOwnPropertySymbols,o=n?function(e){return null==e?[]:(e=Object(e),r(n(e),function(r){return u.call(e,r)}))}:e;module.exports=o;
},{"./_arrayFilter":"uvMU","./stubArray":"Mmba"}],"az4F":[function(require,module,exports) {
var e=require("./_copyObject"),r=require("./_getSymbols");function o(o,t){return e(o,r(o),t)}module.exports=o;
},{"./_copyObject":"dtkN","./_getSymbols":"EvLK"}],"srRO":[function(require,module,exports) {
function e(e,n){for(var r=-1,t=n.length,o=e.length;++r<t;)e[o+r]=n[r];return e}module.exports=e;
},{}],"CXf5":[function(require,module,exports) {
var e=require("./_overArg"),r=e(Object.getPrototypeOf,Object);module.exports=r;
},{"./_overArg":"oss3"}],"q8BM":[function(require,module,exports) {
var r=require("./_arrayPush"),e=require("./_getPrototype"),t=require("./_getSymbols"),o=require("./stubArray"),u=Object.getOwnPropertySymbols,y=u?function(o){for(var u=[];o;)r(u,t(o)),o=e(o);return u}:o;module.exports=y;
},{"./_arrayPush":"srRO","./_getPrototype":"CXf5","./_getSymbols":"EvLK","./stubArray":"Mmba"}],"K7uZ":[function(require,module,exports) {
var e=require("./_copyObject"),r=require("./_getSymbolsIn");function o(o,t){return e(o,r(o),t)}module.exports=o;
},{"./_copyObject":"dtkN","./_getSymbolsIn":"q8BM"}],"Vhgk":[function(require,module,exports) {
var r=require("./_arrayPush"),e=require("./isArray");function u(u,a,i){var n=a(u);return e(u)?n:r(n,i(u))}module.exports=u;
},{"./_arrayPush":"srRO","./isArray":"p0cq"}],"uf6I":[function(require,module,exports) {
var e=require("./_baseGetAllKeys"),r=require("./_getSymbols"),u=require("./keys");function s(s){return e(s,u,r)}module.exports=s;
},{"./_baseGetAllKeys":"Vhgk","./_getSymbols":"EvLK","./keys":"HI10"}],"l4Ef":[function(require,module,exports) {
var e=require("./_baseGetAllKeys"),r=require("./_getSymbolsIn"),u=require("./keysIn");function n(n){return e(n,u,r)}module.exports=n;
},{"./_baseGetAllKeys":"Vhgk","./_getSymbolsIn":"q8BM","./keysIn":"UACB"}],"fLfT":[function(require,module,exports) {
var e=require("./_getNative"),r=require("./_root"),t=e(r,"DataView");module.exports=t;
},{"./_getNative":"bViC","./_root":"MIhM"}],"gTEC":[function(require,module,exports) {
var e=require("./_getNative"),r=require("./_root"),o=e(r,"Promise");module.exports=o;
},{"./_getNative":"bViC","./_root":"MIhM"}],"IVes":[function(require,module,exports) {
var e=require("./_getNative"),r=require("./_root"),t=e(r,"Set");module.exports=t;
},{"./_getNative":"bViC","./_root":"MIhM"}],"N036":[function(require,module,exports) {
var e=require("./_getNative"),r=require("./_root"),a=e(r,"WeakMap");module.exports=a;
},{"./_getNative":"bViC","./_root":"MIhM"}],"tQCT":[function(require,module,exports) {
var e=require("./_DataView"),r=require("./_Map"),t=require("./_Promise"),a=require("./_Set"),u=require("./_WeakMap"),c=require("./_baseGetTag"),o=require("./_toSource"),i="[object Map]",n="[object Object]",s="[object Promise]",b="[object Set]",w="[object WeakMap]",j="[object DataView]",q=o(e),_=o(r),p=o(t),f=o(a),v=o(u),M=c;(e&&M(new e(new ArrayBuffer(1)))!=j||r&&M(new r)!=i||t&&M(t.resolve())!=s||a&&M(new a)!=b||u&&M(new u)!=w)&&(M=function(e){var r=c(e),t=r==n?e.constructor:void 0,a=t?o(t):"";if(a)switch(a){case q:return j;case _:return i;case p:return s;case f:return b;case v:return w}return r}),module.exports=M;
},{"./_DataView":"fLfT","./_Map":"K9uV","./_Promise":"gTEC","./_Set":"IVes","./_WeakMap":"N036","./_baseGetTag":"e5TX","./_toSource":"g55O"}],"f7dW":[function(require,module,exports) {
var t=Object.prototype,n=t.hasOwnProperty;function e(t){var e=t.length,r=new t.constructor(e);return e&&"string"==typeof t[0]&&n.call(t,"index")&&(r.index=t.index,r.input=t.input),r}module.exports=e;
},{}],"yfX1":[function(require,module,exports) {
var r=require("./_root"),e=r.Uint8Array;module.exports=e;
},{"./_root":"MIhM"}],"zb3a":[function(require,module,exports) {
var e=require("./_Uint8Array");function r(r){var n=new r.constructor(r.byteLength);return new e(n).set(new e(r)),n}module.exports=r;
},{"./_Uint8Array":"yfX1"}],"aWGB":[function(require,module,exports) {
var e=require("./_cloneArrayBuffer");function r(r,f){var t=f?e(r.buffer):r.buffer;return new r.constructor(t,r.byteOffset,r.byteLength)}module.exports=r;
},{"./_cloneArrayBuffer":"zb3a"}],"jskC":[function(require,module,exports) {
var e=/\w*$/;function r(r){var n=new r.constructor(r.source,e.exec(r));return n.lastIndex=r.lastIndex,n}module.exports=r;
},{}],"WLsS":[function(require,module,exports) {
var e=require("./_Symbol"),o=e?e.prototype:void 0,r=o?o.valueOf:void 0;function t(e){return r?Object(r.call(e)):{}}module.exports=t;
},{"./_Symbol":"wppe"}],"jXAN":[function(require,module,exports) {
var r=require("./_cloneArrayBuffer");function e(e,f){var t=f?r(e.buffer):e.buffer;return new e.constructor(t,e.byteOffset,e.length)}module.exports=e;
},{"./_cloneArrayBuffer":"zb3a"}],"mAMs":[function(require,module,exports) {
var e=require("./_cloneArrayBuffer"),r=require("./_cloneDataView"),c=require("./_cloneRegExp"),t=require("./_cloneSymbol"),a=require("./_cloneTypedArray"),o="[object Boolean]",n="[object Date]",b="[object Map]",s="[object Number]",u="[object RegExp]",j="[object Set]",y="[object String]",i="[object Symbol]",l="[object ArrayBuffer]",A="[object DataView]",w="[object Float32Array]",p="[object Float64Array]",f="[object Int8Array]",m="[object Int16Array]",q="[object Int32Array]",_="[object Uint8Array]",S="[object Uint8ClampedArray]",U="[object Uint16Array]",d="[object Uint32Array]";function g(g,x,B){var D=g.constructor;switch(x){case l:return e(g);case o:case n:return new D(+g);case A:return r(g,B);case w:case p:case f:case m:case q:case _:case S:case U:case d:return a(g,B);case b:return new D;case s:case y:return new D(g);case u:return c(g);case j:return new D;case i:return t(g)}}module.exports=g;
},{"./_cloneArrayBuffer":"zb3a","./_cloneDataView":"aWGB","./_cloneRegExp":"jskC","./_cloneSymbol":"WLsS","./_cloneTypedArray":"jXAN"}],"ga8q":[function(require,module,exports) {
var r=require("./isObject"),e=Object.create,t=function(){function t(){}return function(n){if(!r(n))return{};if(e)return e(n);t.prototype=n;var o=new t;return t.prototype=void 0,o}}();module.exports=t;
},{"./isObject":"u9vI"}],"qE2F":[function(require,module,exports) {
var e=require("./_baseCreate"),r=require("./_getPrototype"),t=require("./_isPrototype");function o(o){return"function"!=typeof o.constructor||t(o)?{}:e(r(o))}module.exports=o;
},{"./_baseCreate":"ga8q","./_getPrototype":"CXf5","./_isPrototype":"nhsl"}],"WYUj":[function(require,module,exports) {
var e=require("./_getTag"),r=require("./isObjectLike"),t="[object Map]";function i(i){return r(i)&&e(i)==t}module.exports=i;
},{"./_getTag":"tQCT","./isObjectLike":"OuyB"}],"rjxD":[function(require,module,exports) {
var e=require("./_baseIsMap"),r=require("./_baseUnary"),a=require("./_nodeUtil"),i=a&&a.isMap,s=i?r(i):e;module.exports=s;
},{"./_baseIsMap":"WYUj","./_baseUnary":"PnXa","./_nodeUtil":"PBPf"}],"NM6E":[function(require,module,exports) {
var e=require("./_getTag"),r=require("./isObjectLike"),t="[object Set]";function i(i){return r(i)&&e(i)==t}module.exports=i;
},{"./_getTag":"tQCT","./isObjectLike":"OuyB"}],"Z5jp":[function(require,module,exports) {
var e=require("./_baseIsSet"),r=require("./_baseUnary"),i=require("./_nodeUtil"),s=i&&i.isSet,a=s?r(s):e;module.exports=a;
},{"./_baseIsSet":"NM6E","./_baseUnary":"PnXa","./_nodeUtil":"PBPf"}],"s7WH":[function(require,module,exports) {
var e=require("./_Stack"),r=require("./_arrayEach"),t=require("./_assignValue"),i=require("./_baseAssign"),o=require("./_baseAssignIn"),n=require("./_cloneBuffer"),a=require("./_copyArray"),c=require("./_copySymbols"),u=require("./_copySymbolsIn"),b=require("./_getAllKeys"),j=require("./_getAllKeysIn"),y=require("./_getTag"),s=require("./_initCloneArray"),q=require("./_initCloneByTag"),f=require("./_initCloneObject"),l=require("./isArray"),A=require("./isBuffer"),_=require("./isMap"),g=require("./isObject"),p=require("./isSet"),v=require("./keys"),m=require("./keysIn"),I=1,S=2,d=4,B="[object Arguments]",E="[object Array]",k="[object Boolean]",C="[object Date]",F="[object Error]",U="[object Function]",h="[object GeneratorFunction]",M="[object Map]",O="[object Number]",w="[object Object]",x="[object RegExp]",D="[object Set]",K="[object String]",T="[object Symbol]",V="[object WeakMap]",G="[object ArrayBuffer]",N="[object DataView]",R="[object Float32Array]",W="[object Float64Array]",z="[object Int8Array]",H="[object Int16Array]",J="[object Int32Array]",L="[object Uint8Array]",P="[object Uint8ClampedArray]",Q="[object Uint16Array]",X="[object Uint32Array]",Y={};function Z(E,k,C,F,M,O){var x,D=k&I,K=k&S,T=k&d;if(C&&(x=M?C(E,F,M,O):C(E)),void 0!==x)return x;if(!g(E))return E;var V=l(E);if(V){if(x=s(E),!D)return a(E,x)}else{var G=y(E),N=G==U||G==h;if(A(E))return n(E,D);if(G==w||G==B||N&&!M){if(x=K||N?{}:f(E),!D)return K?u(E,o(x,E)):c(E,i(x,E))}else{if(!Y[G])return M?E:{};x=q(E,G,D)}}O||(O=new e);var R=O.get(E);if(R)return R;O.set(E,x),p(E)?E.forEach(function(e){x.add(Z(e,k,C,e,E,O))}):_(E)&&E.forEach(function(e,r){x.set(r,Z(e,k,C,r,E,O))});var W=V?void 0:(T?K?j:b:K?m:v)(E);return r(W||E,function(e,r){W&&(e=E[r=e]),t(x,r,Z(e,k,C,r,E,O))}),x}Y[B]=Y[E]=Y[G]=Y[N]=Y[k]=Y[C]=Y[R]=Y[W]=Y[z]=Y[H]=Y[J]=Y[M]=Y[O]=Y[w]=Y[x]=Y[D]=Y[K]=Y[T]=Y[L]=Y[P]=Y[Q]=Y[X]=!0,Y[F]=Y[U]=Y[V]=!1,module.exports=Z;
},{"./_Stack":"I84N","./_arrayEach":"D78i","./_assignValue":"pS95","./_baseAssign":"eFjB","./_baseAssignIn":"q2Io","./_cloneBuffer":"s4SJ","./_copyArray":"Mkgn","./_copySymbols":"az4F","./_copySymbolsIn":"K7uZ","./_getAllKeys":"uf6I","./_getAllKeysIn":"l4Ef","./_getTag":"tQCT","./_initCloneArray":"f7dW","./_initCloneByTag":"mAMs","./_initCloneObject":"qE2F","./isArray":"p0cq","./isBuffer":"iyC2","./isMap":"rjxD","./isObject":"u9vI","./isSet":"Z5jp","./keys":"HI10","./keysIn":"UACB"}],"Y0zI":[function(require,module,exports) {
var e=require("./_baseClone"),r=1,n=4;function o(o){return e(o,r|n)}module.exports=o;
},{"./_baseClone":"s7WH"}],"StvJ":[function(require,module,exports) {
"use strict";var e=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.resetElements=exports.gameState=exports.initGameState=void 0;var t=e(require("lodash/cloneDeep")),r=require("../common/gameConstants");exports.initGameState=function(){return{phase:r.PHASE.START,score:{player1:0,player2:0}}},exports.gameState=t.default(exports.initGameState()),exports.resetElements=function(){exports.gameState=t.default(exports.initGameState())};
},{"lodash/cloneDeep":"Y0zI","../common/gameConstants":"RETV"}],"ge9R":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.initUserInput=void 0;var e=require("../common/htmlElements"),t=require("../common/gameConstants"),n=require("./gameControl"),r=require("../screens/screenControl"),o=require("./gameState"),i=function(e){var r=e.key;o.gameState.phase==t.PHASE.GAME&&(r===t.INPUT.UP?n.playerBat.changeDirection(t.DIRECTION.Up):r===t.INPUT.DOWN?n.playerBat.changeDirection(t.DIRECTION.Down):r===t.INPUT.X&&n.stopAnimation())};exports.initUserInput=function(){document.addEventListener("keydown",function(e){i(e)}),document.addEventListener("keyup",function(e){n.playerBat.stop(e)}),e.startButton.addEventListener("mousedown",function(){n.init(),r.hideStartScreen()}),e.restartButton.addEventListener("mousedown",function(){n.init(),r.hideEndScreen()})};
},{"../common/htmlElements":"lvQy","../common/gameConstants":"RETV","./gameControl":"N6Qj","../screens/screenControl":"gTUZ","./gameState":"StvJ"}],"dBIS":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.playBlip=exports.blip=void 0,exports.blip=new Audio("./blip.wav"),exports.playBlip=function(){exports.blip.play()};
},{}],"KomH":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.makeDelay=void 0,exports.makeDelay=function(e,t){setTimeout(function(){t()},e)};
},{}],"JHKJ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.collisionDetection=void 0;var l=require("../gameControl/gameState"),a=require("../gameControl/gameControl"),e=require("../sound/sound"),t=require("../common/utils"),o=require("../common/gameConstants"),p=function(){return.5*Math.random()-.25},n=function(){return a.ball.angle+Math.PI+p()};exports.collisionDetection=function(){(a.ball.x<0||a.ball.x>o.GAME_WIDTH)&&(a.ball.x<0&&!a.ball.paused&&(a.ball.speed<a.ball.maxSpeed&&(a.ball.speed=a.ball.speed+a.ball.acceleration),l.gameState.score.player2+=1,a.ball.paused=!0,e.playBlip(),t.makeDelay(1e3,a.ball.reset)),a.ball.x>o.GAME_WIDTH&&!a.ball.paused&&(a.ball.speed<a.ball.maxSpeed&&(a.ball.speed=a.ball.speed+a.ball.acceleration),l.gameState.score.player1+=1,a.ball.paused=!0,e.playBlip(),t.makeDelay(1e3,a.ball.reset))),(a.ball.y>o.GAME_HEIGHT-10||a.ball.y<10)&&(e.playBlip(),a.ball.angle=a.ball.angle+Math.PI/2),a.ball.x<a.playerBat.x+o.BAT_WIDTH&&a.ball.x>a.playerBat.x&&a.ball.y<a.playerBat.y+o.BAT_HEIGHT&&a.ball.y>a.playerBat.y&&(e.playBlip(),a.ball.angle=n()),a.ball.x<a.opponentBat.x+o.BAT_WIDTH&&a.ball.x>a.opponentBat.x&&a.ball.y<a.opponentBat.y+o.BAT_HEIGHT&&a.ball.y>a.opponentBat.y&&(e.playBlip(),a.ball.angle=n())};
},{"../gameControl/gameState":"StvJ","../gameControl/gameControl":"N6Qj","../sound/sound":"dBIS","../common/utils":"KomH","../common/gameConstants":"RETV"}],"AXr5":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.moveOpponent=void 0;var e=require("../common/gameConstants"),o=require("../gameControl/gameControl");exports.moveOpponent=function(){o.ball.dx>0&&o.ball.dy<0&&o.opponentBat.y>o.ball.y?o.opponentBat.changeDirection(e.DIRECTION.Up):o.ball.dx>0&&o.ball.dy>0&&o.opponentBat.y<o.ball.y&&o.opponentBat.changeDirection(e.DIRECTION.Down)};
},{"../common/gameConstants":"RETV","../gameControl/gameControl":"N6Qj"}],"i1Zp":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("../gameControl/gameControl"),t=require("../common/gameConstants"),i=function(){return 4+1*Math.random()},s={x:t.GAME_WIDTH/2-5,y:t.GAME_HEIGHT/2,width:10,height:10,speed:6,maxSpeed:8,angle:i(),dx:0,dy:0,paused:!1},d=function(){return function(){var d=this;this.height=10,this.width=10,this.acceleration=.2,this.maxSpeed=8,this.x=s.x,this.y=s.y,this.speed=s.speed,this.angle=s.angle,this.dx=s.dx,this.dy=s.dy,this.paused=s.paused,this.draw=function(){e.ctx.fillStyle=t.COLOURS.MAIN,e.ctx.fillRect(d.x,d.y,d.width,d.height),e.ctx.fill()},this.reset=function(){d.paused=!1,d.x=s.x,d.y=s.y,d.angle=i(),d.speed=s.speed,d.dx=s.dx,d.dy=s.dy}}}();exports.default=d;
},{"../gameControl/gameControl":"N6Qj","../common/gameConstants":"RETV"}],"OMoB":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("../gameControl/gameControl"),s=require("../common/gameConstants"),t={x:s.BAT_SIDE_MARGIN,y:s.GAME_HEIGHT/2,speed:0,maxSpeed:3},d={x:s.GAME_WIDTH-s.BAT_SIDE_MARGIN,y:s.GAME_HEIGHT/2,speed:0,maxSpeed:3},n=function(){return function(n){var i=this;this.x=null,this.y=null,this.speed=null,this.downPressed=!1,this.upPressed=!1,this.draw=function(){e.ctx.fillStyle=s.COLOURS.MAIN,e.ctx.fillRect(i.x,i.y,s.BAT_WIDTH,s.BAT_HEIGHT)},this.stop=function(e){var t=e.key;t===s.INPUT.DOWN?i.downPressed=!1:t===s.INPUT.UP&&(i.upPressed=!1),i.upPressed||i.downPressed||(i.speed=0)},this.move=function(){i.y=i.y+i.speed},this.changeDirection=function(e){e===s.DIRECTION.Down?(i.speed=t.maxSpeed,i.downPressed=!0):e===s.DIRECTION.Up&&(i.speed=-t.maxSpeed,i.upPressed=!0)},this.x=n===s.DIRECTION.Left?t.x:d.x,this.y=n===s.DIRECTION.Left?t.y:d.y,this.speed=n===s.DIRECTION.Left?t.speed:d.speed}}();exports.default=n;
},{"../gameControl/gameControl":"N6Qj","../common/gameConstants":"RETV"}],"eQX5":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.drawBackground=exports.drawVersionNumber=exports.drawCenterLine=exports.clearCanvas=void 0;var e=require("../gameControl/gameControl"),t=require("../common/gameConstants");exports.clearCanvas=function(){e.ctx.clearRect(0,0,t.GAME_WIDTH,t.GAME_HEIGHT)},exports.drawCenterLine=function(){e.ctx.strokeStyle=t.COLOURS.MAIN,e.ctx.setLineDash([10,10]),e.ctx.beginPath(),e.ctx.moveTo(t.GAME_WIDTH/2,0),e.ctx.lineTo(t.GAME_WIDTH/2,t.GAME_HEIGHT),e.ctx.stroke()},exports.drawVersionNumber=function(){e.ctx.fillStyle=t.COLOURS.white,e.ctx.font=t.FONTS.SMALL,e.ctx.textAlign="left",e.ctx.fillText("Version: "+t.VERSION_NUMBER,5,15)},exports.drawBackground=function(){e.ctx.fillStyle=t.COLOURS.BACKGROUND,e.ctx.fillRect(0,0,t.GAME_WIDTH,t.GAME_HEIGHT)};
},{"../gameControl/gameControl":"N6Qj","../common/gameConstants":"RETV"}],"nHLX":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.TEXT=void 0,exports.TEXT={WIN:"YOU WIN!!!",LOSE:"YOU LOSE!!!"};
},{}],"Lfcq":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.drawScore=exports.checkScores=void 0;var e=require("../common/gameConstants"),t=require("../common/gameText"),r=require("../common/htmlElements"),o=require("./gameState"),a=require("./gameControl"),n=require("../screens/screenControl");exports.checkScores=function(){o.gameState.score.player1>=e.WIN_SCORE?(a.stopAnimation(),n.showEndScreen(),o.gameState.phase=e.PHASE.END,r.resultText.innerHTML=t.TEXT.WIN):o.gameState.score.player2>=e.WIN_SCORE&&(a.stopAnimation(),n.showEndScreen(),o.gameState.phase=e.PHASE.END,r.resultText.innerHTML=t.TEXT.LOSE)},exports.drawScore=function(){a.ctx.strokeStyle=e.COLOURS.white,a.ctx.font=e.FONTS.SCORE,a.ctx.textAlign="right",a.ctx.fillText(o.gameState.score.player1,e.GAME_WIDTH/2-20,60),a.ctx.textAlign="left",a.ctx.fillText(o.gameState.score.player2,e.GAME_WIDTH/2+20,60)};
},{"../common/gameConstants":"RETV","../common/gameText":"nHLX","../common/htmlElements":"lvQy","./gameState":"StvJ","./gameControl":"N6Qj","../screens/screenControl":"gTUZ"}],"AZSW":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.moveElements=void 0;var e=require("../gameControl/gameState"),t=require("../gameControl/gameControl"),a=require("../common/gameConstants"),o=function(e,t){var a=e*Math.cos(t);return[e*Math.sin(t),a]};exports.moveElements=function(){if(e.gameState.phase==a.PHASE.GAME){var n=o(t.ball.speed,t.ball.angle),p=n[0],l=n[1];t.ball.dx=p,t.ball.dy=l,t.ball.x=t.ball.x+p,t.ball.y=t.ball.y+l,a.BAT_HEIGHT+t.playerBat.y>a.GAME_HEIGHT?t.playerBat.y=a.GAME_HEIGHT-a.BAT_HEIGHT:t.playerBat.y<0?t.playerBat.y=0:t.playerBat.move(),a.BAT_HEIGHT+t.opponentBat.y>a.GAME_HEIGHT?t.opponentBat.y=a.GAME_HEIGHT-a.BAT_HEIGHT:t.opponentBat.y<0?t.opponentBat.y=0:t.opponentBat.y=t.opponentBat.y+t.opponentBat.speed,t.opponentBat.y=t.opponentBat.y+t.opponentBat.speed}};
},{"../gameControl/gameState":"StvJ","../gameControl/gameControl":"N6Qj","../common/gameConstants":"RETV"}],"N6Qj":[function(require,module,exports) {
"use strict";var e=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.stopAnimation=exports.init=exports.ctx=exports.opponentBat=exports.playerBat=exports.ball=void 0;var t,r=require("../common/gameConstants"),n=require("../common/htmlElements"),o=require("./userInput"),a=require("./gameState"),i=require("../collision/collision"),s=require("../ai/ai"),l=e(require("../elements/ball")),p=e(require("../elements/bat")),u=require("../elements/table"),m=require("./score"),c=require("../movement/movement"),x=function(){u.clearCanvas(),u.drawBackground(),u.drawCenterLine(),exports.ball.draw(),exports.playerBat.draw(),exports.opponentBat.draw(),m.drawScore(),u.drawVersionNumber()},d=function e(){c.moveElements(),s.moveOpponent(),x(),i.collisionDetection(),m.checkScores(),t=requestAnimationFrame(e)};exports.init=function(){exports.ctx=n.gameCanvas.getContext("2d"),exports.ball=new l.default,exports.playerBat=new p.default(r.DIRECTION.Left),exports.opponentBat=new p.default(r.DIRECTION.Right),a.gameState.phase=r.PHASE.GAME,t||f()};var f=function(){t=requestAnimationFrame(d)};exports.stopAnimation=function(){a.resetElements(),cancelAnimationFrame(t)},o.initUserInput();
},{"../common/gameConstants":"RETV","../common/htmlElements":"lvQy","./userInput":"ge9R","./gameState":"StvJ","../collision/collision":"JHKJ","../ai/ai":"AXr5","../elements/ball":"i1Zp","../elements/bat":"OMoB","../elements/table":"eQX5","./score":"Lfcq","../movement/movement":"AZSW"}]},{},["N6Qj"], null)
//# sourceMappingURL=docs/gameControl.eab71f82.js.map