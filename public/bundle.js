(()=>{var e={21:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(645),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,".circle {\n  position: absolute;\n  z-index: 6;\n  height: 100%;\n  width: 100%;\n  border-radius: 100%;\n  box-shadow: inset 0 1px 0 rgba(0,0,0,0.2);\n}\n\n.inner {\n  top: 50%;\n  left: 50%;\n  border-radius: 100%;\n  box-shadow: 0 1px 0 rgba(0,0,0,0.2);\n}\n\n.wrap {\n  position: relative;\n  background: white;\n  border-radius: 100%;\n}\n\n.time {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 10;\n  font-weight: 500;\n}\n\n.dot {\n  z-index: 2;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  width: 50%;\n  transform-origin: 0% 50%;\n}\n\n.dot span{\n  position: absolute;\n  right: 0;\n  border-radius: 100%;\n}\n\n.bar {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  -webkit-border-radius: 100%;\n}\n\n.right {\n  z-index: 3; \n  transform: rotate(180deg);\n}\n\n.progress {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  -webkit-border-radius: 100%;\n}\n\n@keyframes left {\n  100%{\n    transform: rotate(180deg);\n  }\n}\n@keyframes right {\n  100%{\n    transform: rotate(180deg);\n  }\n}\n@keyframes dot{\n  0% {\n    transform: rotate(-90deg);\n  }\n  50% {\n    transform: rotate(90deg);\n    z-index: 4;\n  }\n  100% {\n    transform: rotate(270deg);\n    z-index: 4;\n  }\n}\n",""]);const i=o},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);r&&o[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},703:(e,t,n)=>{"use strict";var r=n(414);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,i,a){if(a!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n}},697:(e,t,n)=>{e.exports=n(703)()},414:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},379:(e,t,n)=>{"use strict";var r,o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function a(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function s(e,t){for(var n={},r=[],o=0;o<e.length;o++){var s=e[o],c=t.base?s[0]+t.base:s[0],l=n[c]||0,u="".concat(c," ").concat(l);n[c]=l+1;var f=a(u),d={css:s[1],media:s[2],sourceMap:s[3]};-1!==f?(i[f].references++,i[f].updater(d)):i.push({identifier:u,updater:b(d,t),references:1}),r.push(u)}return r}function c(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=n.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var l,u=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function f(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=u(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function d(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var p=null,m=0;function b(e,t){var n,r,o;if(t.singleton){var i=m++;n=p||(p=c(t)),r=f.bind(null,n,i,!1),o=f.bind(null,n,i,!0)}else n=c(t),r=d.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=a(n[r]);i[o].references--}for(var c=s(e,t),l=0;l<n.length;l++){var u=a(n[l]);0===i[u].references&&(i[u].updater(),i.splice(u,1))}n=c}}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};(()=>{"use strict";n.r(r),n.d(r,{default:()=>w,useTimer:()=>g});const e=require("react");var t=n.n(e),o=n(697),i=n.n(o),a=n(379),s=n.n(a),c=n(21);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}s()(c.Z,{insert:"head",singleton:!1}),c.Z.locals;var d=function(e){var n=e.children,r=e.fontSize,o=e.size,i=e.bgColor,a=e.minutes,s=e.fill,c=e.playState,l=e.reset,f="".concat(s,"29"),d=60*a,p={left:"".concat(.5*d,"s linear 0s 1 normal both ").concat(c," left"),right:"".concat(.5*d,"s linear ").concat(.5*d,"s 1 normal both ").concat(c," right"),dot:"".concat(d,"s linear 0s 1 normal both ").concat(c," dot")},m={width:.1*o,height:.1*o,background:s},b={background:f,clip:"rect(0px, ".concat(o,"px, ").concat(o,"px, ").concat(.5*o,"px)")},h={background:s,clip:"rect(0px, ".concat(.5*o,"px, ").concat(o,"px, 0px)")},g=u(u({},h),{},{animation:p.left,zIndex:1}),y=u(u({},h),{},{animation:p.right}),v={marginTop:-.05*o,height:.1*o,animation:p.dot},w={width:.8*o,height:.8*o,background:i,margin:"".concat(-.4*o,"px 0 0 ").concat(-.4*o,"px")};return t().createElement(t().Fragment,null,t().createElement("div",{className:"wrap",style:{height:o,width:o}},t().createElement("div",{className:"circle inner",style:w}),t().createElement("div",{className:"circle"}),t().createElement("div",{className:"time",style:{fontSize:r,color:s}},n),t().createElement("div",{className:"circle",style:{zIndex:1,boxShadow:"none"}},l?null:t().createElement("div",{className:"dot",style:v},t().createElement("span",{style:m})),t().createElement("div",{className:"bar",style:b},l?null:t().createElement("div",{className:"progress",style:g})),t().createElement("div",{className:"bar right",style:b},l?null:t().createElement("div",{className:"progress",style:y})))))};const p=d;function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=n){var r,o,i=[],a=!0,s=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){s=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(s)throw o}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return b(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?b(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}d.propTypes={size:i().number,fontSize:i().number,bgColor:i().string,minutes:i().number,fill:i().string,playState:i().string,reset:i().bool};var h=0,g=function(t,n,r,o,i,a,s){var c=m((0,e.useState)(6e4*t),2),l=c[0],u=c[1],f=m((0,e.useState)(o),2),d=f[0],p=f[1],b=m((0,e.useState)(0),2),g=b[0],y=b[1],v=m((0,e.useState)(!1),2),w=v[0],x=v[1],S=function(){return 0===g?l:l+d-Date.now()};return(0,e.useEffect)((function(){i&&(r(0),y(0))}),[i,r]),(0,e.useEffect)((function(){g>0&&!i?n?S()>0&&(u(h),p(Date.now()),r&&r(!0)):S()>0&&(h=S(),r&&r(!1)):(i||0===g&&n)&&(u(h=6e4*t),p(Date.now()),a&&a(!1))}),[n,t,i]),(0,e.useEffect)((function(){if(S()>0&&n){var e=setInterval((function(){return y(g+1)}),100);return function(){return clearInterval(e)}}S()<=0&&n&&!w&&x(!0)}),[S(),n,g]),(0,e.useEffect)((function(){w&&s()}),[w]),{timeLeft:S()}},y=function(e){var n=e.minutes,r=e.running,o=e.setRunning,i=e.timeAtLoad,a=e.reset,s=e.setReset,c=e.showMs,l=e.onComplete,u=g(n,r,o,i,a,s,l).timeLeft,f=Math.floor(u%36e4/6e4),d=Math.floor(u%6e4/1e3),m=Math.floor(u%6e4/10),b=function(e){return("00"+e).slice(-2)},h="".concat(b(f),":").concat(b(d)).concat(c?":".concat(b(m)):"");return t().createElement(p,{size:e.size,fontSize:e.fontSize,minutes:e.minutes,fill:e.fillColor,bgColor:e.bgColor,playState:r?"running":"paused",reset:a},u>0?h:e.completeMsg)};const v=y;y.propTypes={size:i().number,fontSize:i().number,minutes:i().number,fillColor:i().string,bgColor:i().string,showMs:i().bool,onComplete:i().func,completeMsg:i().string,running:i().oneOfType([i().bool,i().number]),setRunning:i().func,timeAtLoad:i().number,reset:i().bool,setReset:i().func},y.defaultProps={size:200,fontSize:40,minutes:1,fillColor:"#5bcc69",bgColor:"white",showMs:!1,onComplete:function(){return console.log("Timer complete")},completeMsg:"✓",running:!0,setRunning:null,timeAtLoad:Date.now(),reset:!1,setReset:null};const w=v})(),module.exports=r})();