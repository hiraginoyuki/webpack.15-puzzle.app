!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/Users/hiraginoyuki/Documents/Git/15-puzzle-app/public",n(n.s=17)}([function(e,t){e.exports=React},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(a=r,u=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(u),"/*# ".concat(c," */")),i=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(i).concat([o]).join("\n")}var a,u,c;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var u=0;u<e.length;u++){var c=[].concat(e[u]);r&&o[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},function(e,t,n){var r=n(3),o=n(13);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);e.exports=o.locals||{}},function(e,t,n){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function u(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},r=[],o=0;o<e.length;o++){var i=e[o],c=t.base?i[0]+t.base:i[0],s=n[c]||0,l="".concat(c," ").concat(s);n[c]=s+1;var f=u(l),d={css:i[1],media:i[2],sourceMap:i[3]};-1!==f?(a[f].references++,a[f].updater(d)):a.push({identifier:l,updater:m(d,t),references:1}),r.push(l)}return r}function s(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var l,f=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function d(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=f(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function p(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var h=null,v=0;function m(e,t){var n,r,o;if(t.singleton){var i=v++;n=h||(h=s(t)),r=d.bind(null,n,i,!1),o=d.bind(null,n,i,!0)}else n=s(t),r=p.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=u(n[r]);a[o].references--}for(var i=c(e,t),s=0;s<n.length;s++){var l=u(n[s]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}n=i}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FifteenPuzzle=void 0;var r=n(8);Object.defineProperty(t,"FifteenPuzzle",{enumerable:!0,get:function(){return r.FifteenPuzzle}})},function(e,t){e.exports=ReactDOM},function(e,t,n){var r=n(3),o=n(12);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);e.exports=o.locals||{}},function(e,t,n){var r=n(3),o=n(14);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);e.exports=o.locals||{}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FifteenPuzzle=void 0;var r=n(9),o=n(10),i=Math.floor,a=Math.abs,u=function(){function e(e){this.columns=e}return e.prototype.convertPointToIndex=function(e){return e[0]+e[1]*this.columns},e.prototype.convertIndexToPoint=function(e){return[e%this.columns,i(e/this.columns)]},e}(),c=function(){function e(e,t){if(void 0===e&&(e=4),void 0===t&&(t=r.range(1,Array.isArray(e)?e[0]*e[1]:Math.pow(e,2)).concat(0)),this.numbers=t,Array.isArray(e)?(this.columns=e[0],this.rows=e[1]):this.columns=this.rows=e,this.pointUtil=new u(this.columns),!this.isCorrect())throw new RangeError("Invalid numbers")}return e.generateRandom=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];for(var n="string"==typeof e[0],i=n?e[0]:""+ +new Date,a=n?"number"==typeof e[1]?e[1]:4:"number"==typeof e[0]?e[0]:4,u=n?"number"==typeof e[2]?e[2]:a:"number"==typeof e[1]?e[1]:a,c=o.create(i),s=function(){return c.random()},l=function(e){return r.chooseRandom(e,s)},f=function(e){return r.chooseRandomIndex(e,s)},d=u*a,p=[],h=r.range(1,d),v=0,m=r.range(d-3);v<m.length;v++){m[v];p.push(h.splice(f(h),1)[0])}var g=new this([a,u],p.concat(h,0));g.isSolvable()||(g=new this([a,u],p.concat(h.map(r.flip),0)));var y=l([!0,!1]);return g.tap(y?[l(r.range(a)),u-1]:[a-1,l(r.range(u))]),g.tap(y?[g.getEmptyPoint()[0],l(r.range(u))]:[l(r.range(a)),g.getEmptyPoint()[1]]),c.done(),g},Object.defineProperty(e.prototype,"length",{get:function(){return this.numbers.length},enumerable:!1,configurable:!0}),e.prototype.clone=function(){return new this.constructor([this.rows,this.columns],this.numbers.slice())},e.prototype.equals=function(e,t){return e[0]===t[0]&&e[1]===t[1]},e.prototype.setValueOfPoint=function(e,t){return this.numbers[this.pointUtil.convertPointToIndex(e)]=t,this},e.prototype.getValueFromPoint=function(e){return this.numbers[this.pointUtil.convertPointToIndex(e)]},e.prototype.getPointFromValue=function(e){return this.pointUtil.convertIndexToPoint(this.numbers.findIndex((function(t){return t===e})))},e.prototype.getEmptyPoint=function(){return this.getPointFromValue(0)},e.prototype.isCorrect=function(){var e=this;return this.numbers.length===this.columns*this.rows&&r.range(this.numbers.length).every((function(t){return e.numbers.includes(t)}))},e.prototype.isSolvable=function(){if(!this.isCorrect())return!1;var e=this.clone();return e.equals(e.getPointFromValue(0),[e.columns,e.rows])||(e.tap([e.columns-1,e.getPointFromValue(0)[1]]),e.tap([e.columns-1,e.rows-1])),r.range(e.columns*e.rows-1).reduce((function(t,n){var r=e.getPointFromValue(n+1);return n!==e.pointUtil.convertPointToIndex(r)?(e.swap(e.pointUtil.convertIndexToPoint(n),r),t+1):t}))%2==0},e.prototype.isSolved=function(){var e=this;return this.isCorrect()&&r.range(1,this.length).concat(0).every((function(t,n){return e.getValueFromPoint(e.pointUtil.convertIndexToPoint(n))==t}))},e.prototype.swap=function(e,t){var n=this.getValueFromPoint(e),r=this.getValueFromPoint(t);return this.setValueOfPoint(e,r),this.setValueOfPoint(t,n),!0},e.prototype.tap=function(e){var t=this,n=this.getEmptyPoint();if(this.equals(e,n))return!1;if(e[0]!==n[0]&&e[1]!==n[1])return!1;var o=e[0]===n[0],i=+o,u=n[i]-e[i];return r.range(1,a(u)+1).map((function(e){return u>0?e:-e})).forEach((function(r){return t.swap(t.getEmptyPoint(),o?[e[0],n[1]-r]:[n[0]-r,e[1]])})),!0},e}();t.FifteenPuzzle=c},function(e,t,n){"use strict";var r=this&&this.__spreadArray||function(e,t){for(var n=0,r=t.length,o=e.length;n<r;n++,o++)e[o]=t[n];return e};Object.defineProperty(t,"__esModule",{value:!0}),t.range=t.flip=t.chooseRandom=t.chooseRandomIndex=void 0;t.chooseRandomIndex=function(e,t){return void 0===t&&(t=function(){return Math.random()}),Math.floor(t()*e.length)};t.chooseRandom=function(e,n){return void 0===n&&(n=function(){return Math.random()}),e[t.chooseRandomIndex(e,n)]};t.flip=function(e,t,n){return n[n.length-1-t]},t.range=function e(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];switch(t.length){case 1:return e(0,t[0],1);case 2:return e(t[0],t[1],1);default:var o=t[0],i=t[1],a=t[2];return r([],Array(Math.ceil((i-o)/a))).map((function(e,t){return o+t*a}))}}},function(e,t,n){"use strict";var r=n(11),o=function(){var e=4022871197;return function(t){if(t){t=t.toString();for(var n=0;n<t.length;n++){var r=.02519603282416938*(e+=t.charCodeAt(n));r-=e=r>>>0,e=(r*=e)>>>0,e+=4294967296*(r-=e)}return 2.3283064365386963e-10*(e>>>0)}e=4022871197}},i=function(e){return function(){var t,n,i=48,a=1,u=i,c=new Array(i),s=0,l=new o;for(t=0;t<i;t++)c[t]=l(Math.random());var f=function(){++u>=i&&(u=0);var e=1768863*c[u]+2.3283064365386963e-10*a;return c[u]=e-(a=0|e)},d=function(e){return Math.floor(e*(f()+11102230246251565e-32*(2097152*f()|0)))};d.string=function(e){var t,n="";for(t=0;t<e;t++)n+=String.fromCharCode(33+d(94));return n};var p=function(){var e=Array.prototype.slice.call(arguments);for(t=0;t<e.length;t++)for(n=0;n<i;n++)c[n]-=l(e[t]),c[n]<0&&(c[n]+=1)};return d.cleanString=function(e){return e=(e=(e=e.replace(/(^\s*)|(\s*$)/gi,"")).replace(/[\x00-\x1F]/gi,"")).replace(/\n /,"\n")},d.hashString=function(e){for(e=d.cleanString(e),l(e),t=0;t<e.length;t++)for(s=e.charCodeAt(t),n=0;n<i;n++)c[n]-=l(s),c[n]<0&&(c[n]+=1)},d.seed=function(e){null==e&&(e=Math.random()),"string"!=typeof e&&(e=r(e,(function(e,t){return"function"==typeof t?t.toString():t}))),d.initState(),d.hashString(e)},d.addEntropy=function(){var e=[];for(t=0;t<arguments.length;t++)e.push(arguments[t]);p(s+++(new Date).getTime()+e.join("")+Math.random())},d.initState=function(){for(l(),t=0;t<i;t++)c[t]=l(" ");a=1,u=i},d.done=function(){l=null},void 0!==e&&d.seed(e),d.range=function(e){return d(e)},d.random=function(){return d(Number.MAX_VALUE-1)/Number.MAX_VALUE},d.floatBetween=function(e,t){return d.random()*(t-e)+e},d.intBetween=function(e,t){return Math.floor(d.random()*(t-e+1))+e},d}()};i.create=function(e){return new i(e)},e.exports=i},function(e,t){function n(e,t){var n=[],r=[];return null==t&&(t=function(e,t){return n[0]===t?"[Circular ~]":"[Circular ~."+r.slice(0,n.indexOf(t)).join(".")+"]"}),function(o,i){if(n.length>0){var a=n.indexOf(this);~a?n.splice(a+1):n.push(this),~a?r.splice(a,1/0,o):r.push(o),~n.indexOf(i)&&(i=t.call(this,o,i))}else n.push(i);return null==e?i:e.call(this,o,i)}}(e.exports=function(e,t,r,o){return JSON.stringify(e,n(t,o),r)}).getSerialize=n},function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r)()(!1);o.push([e.i,".flexCenteringContainer__2IhkERfb{display:flex;width:100%;height:100%;justify-content:center;align-content:center}.flexCenteringContainer__2IhkERfb>*{position:relative;margin:auto}\n",""]),o.locals={flexCenteringContainer:"flexCenteringContainer__2IhkERfb"},t.default=o},function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r)()(!1);o.push([e.i,".fifteenPuzzleRenderer__qLinV4ur{user-select:none;-webkit-user-select:none;width:calc(80px * var(--columns));height:calc(80px * var(--rows));--width: 80px;--height: 80px;--margin: 0.05}.fifteenPuzzleRenderer__qLinV4ur>.piece__3-JQfuFB{display:flex;position:absolute;width:76px;height:76px;margin:2px;transform:translate(calc(var(--width) * var(--x)), calc(var(--height) * var(--y)));border-radius:5px;background-color:#111;font-weight:900;filter:invert(0%);transition:0.1s transform var(--easeOutCirc),0.2s filter var(--easeOutCirc);z-index:0}.fifteenPuzzleRenderer__qLinV4ur>.piece__3-JQfuFB.hidden__32VDde5O{opacity:0}.fifteenPuzzleRenderer__qLinV4ur>.piece__3-JQfuFB.correct__2xpy-Yms{filter:invert(100%)}.fifteenPuzzleRenderer__qLinV4ur>.piece__3-JQfuFB>.content__3VYu6j77{margin:auto;font-size:28pt}.fifteenPuzzleRenderer__qLinV4ur>.tapListeners__238GBMIl{display:grid;width:100%;height:100%;grid-template-columns:repeat(var(--columns), 1fr)}.fifteenPuzzleRenderer__qLinV4ur>.tapListeners__238GBMIl>.listener__2l_3IN2k{z-index:1}\n",""]),o.locals={fifteenPuzzleRenderer:"fifteenPuzzleRenderer__qLinV4ur",piece:"piece__3-JQfuFB",hidden:"hidden__32VDde5O",correct:"correct__2xpy-Yms",content:"content__3VYu6j77",tapListeners:"tapListeners__238GBMIl",listener:"listener__2l_3IN2k"},t.default=o},function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r)()(!1);o.push([e.i,".credit__1qk2Sy5Z{user-select:none;-webkit-user-select:none;position:fixed;left:0;bottom:0;margin:8px 10px;font-size:14px;color:#777}.credit__1qk2Sy5Z>a{transition:0.1s color cubic-bezier(0, 0.55, 0.45, 1);color:inherit}.credit__1qk2Sy5Z>a:hover{color:#888}\n",""]),o.locals={credit:"credit__1qk2Sy5Z"},t.default=o},function(e,t,n){var r=n(3),o=n(16);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);e.exports=o.locals||{}},function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r)()(!1);o.push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;900&display=swap);"]),o.push([e.i,"body{margin:0;width:100vw;height:100vh;overflow:hidden;background-color:#222;color:#ccc;font-family:'Roboto', sans-serif}body>#app{width:100%;height:100%}:root{--easeOutCirc: cubic-bezier(0, 0.55, 0.45, 1)}\n",""]),t.default=o},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),i=n(5),a=n.n(i),u=n(4),c=n(6),s=n.n(c),l=function(){return(l=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function f(e){return o.a.createElement("div",l({},e,{className:h(s.a.flexCenteringContainer,e.className)})," ",e.children," ")}function d(e){Object.entries(e).forEach((function(e){var t=e[0],n=e[1];window.hasOwnProperty(t)&&delete window[t],Object.defineProperty(window,t,{value:n,configurable:!0})}))}document.addEventListener("touchmove",(function(e){e.target.classList.contains("allow-scroll")?e.stopPropagation():e.preventDefault()}),{passive:!1});var p=/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase());function h(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return e.filter((function(e){return"string"==typeof e})).map((function(e){return e.trim()})).filter((function(e){return e.length})).join(" ")}var v=function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),o=0;for(t=0;t<n;t++)for(var i=arguments[t],a=0,u=i.length;a<u;a++,o++)r[o]=i[a];return r};function m(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];switch(e.length){case 1:return m(0,e[0],1);case 2:return m(e[0],e[1],1);default:var n=e[0],r=e[1],o=e[2];return v(Array(Math.ceil((r-n)/o))).map((function(e,t){return n+t*o}))}}var g=n(2),y=n.n(g);function b(){return+new Date}var _=function(){function e(e){void 0===e&&(e=function(){}),this.onUpdate=e,this.scoreHistory=[],this.reset()}return Object.defineProperty(e.prototype,"started",{get:function(){return null!==this.currentScore.timeStarted},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"isSolved",{get:function(){return null!==this.currentScore.timeSolved},enumerable:!1,configurable:!0}),e.prototype.newGame=function(e,t,n){return void 0===t&&(t=4),void 0===n&&(n=t),{timeGenerated:e,timeStarted:null,timeSolved:null,seed:""+e,columns:t,rows:n,taps:[]}},e.prototype.createTapData=function(e,t){return{coord:e,time:t}},e.prototype.onSolve=function(){this.scoreHistory.push(this.currentScore),this.currentScore.timeSolved=b()},e.prototype.reset=function(){return this.currentScore=this.newGame(b()),this.currentPuzzle=u.FifteenPuzzle.generateRandom(this.currentScore.seed,this.currentScore.columns,this.currentScore.rows),this.scoreHistory.push(this.currentScore),this.onUpdate(),this},e.prototype.getNumbers=function(){var e=this.currentPuzzle;return m(e.columns*e.rows).map((function(t){var n=e.getPointFromValue(t);return{coord:n,number:t,isCorrect:t==e.pointUtil.convertPointToIndex(n)+1}}))},e.prototype.tap=function(e){return!this.isSolved&&(!!this.currentPuzzle.tap(e)&&(this.started||(this.currentScore.timeStarted=b()),this.currentScore.taps.push(this.createTapData(e,b()-this.currentScore.timeStarted)),this.currentPuzzle.isSolved()&&this.onSolve(),this.onUpdate(),!0))},e.prototype.forceSolve=function(){if(!this.isSolved){var e=this.currentPuzzle;return e.numbers=m(1,e.columns*e.rows).concat(0),this.onSolve(),this.onUpdate(),this}},e}(),w=function(){return(w=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},P={4:[0,0],5:[1,0],6:[2,0],7:[3,0],r:[0,1],t:[1,1],y:[2,1],u:[3,1],f:[0,2],g:[1,2],h:[2,2],j:[3,2],v:[0,3],b:[1,3],n:[2,3],m:[3,3]},x=p?"onTouchStart":"onMouseDown";function S(){var e,t=(e=Object(r.useState)(0)[1],Object(r.useCallback)((function(){return e((function(e){return e+1}))}),[])),n=Object(r.useMemo)((function(){return new _(t)}),[]),i=n.isSolved,a=n.currentPuzzle,u=a.columns,c=a.rows,s=a.pointUtil,l=Object(r.useCallback)((function(){return n.reset()}),[n]),f=Object(r.useCallback)((function(e){return n.isSolved&&e[0]==u-1&&e[1]==c-1?l():n.tap(e)}),[n,l]),p=Object(r.useCallback)((function(e){" "==e&&l();var t=P[e.toLowerCase()];Array.isArray(t)&&f(t)}),[f]);Object(r.useEffect)((function(){d({puzzleManager:n,forceUpdate:t})}),[]),Object(r.useEffect)((function(){document.addEventListener("keydown",(function(e){var t=e.key;return p(t)}))}),[p]);var h=n.getNumbers().map((function(e){var t=e.coord,n=e.number,r=e.isCorrect;return o.a.createElement(z,{hidden:0==n&&!i,correct:r,coord:t,key:n},o.a.createElement("div",{className:y.a.content},0==n?"R":n))})),v=m(u*c).map((function(e){var t;return o.a.createElement("div",w({className:y.a.listener,key:e},((t={})[x]=function(){return f(s.convertIndexToPoint(e))},t)))}));return o.a.createElement("div",{className:y.a.fifteenPuzzleRenderer,style:{"--columns":u,"--rows":c}},h,o.a.createElement("div",{className:y.a.tapListeners,"aria-hidden":!0},v))}function z(e){var t=e.coord,n=t[0],r=t[1];return o.a.createElement("div",{className:h(y.a.piece,e.correct&&y.a.correct,e.hidden&&y.a.hidden),style:{"--x":n,"--y":r}},e.children)}var O=n(7),j=n.n(O);d({FifteenPuzzle:u.FifteenPuzzle});n(15);a.a.render(o.a.createElement((function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(f,null,o.a.createElement(S,null)),o.a.createElement("div",{className:j.a.credit},o.a.createElement("a",{href:"https://github.com/HiraginoYuki/15-puzzle.app"}," Made by Yuki Hiragino ")))}),null),document.getElementById("app"))}]);