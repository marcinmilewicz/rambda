!function(n,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t(n.rambda={})}(this,function(n){function t(n){return function(t){for(var r=[],u=arguments.length-1;u-- >0;)r[u]=arguments[u+1];var e=0;return n.apply(null,[function(){for(var n=[],r=arguments.length;r--;)n[r]=arguments[r];return t.apply(null,n.concat([e++]))}].concat(r))}}function r(n,t){if(1===arguments.length)return function(t){return r(n,t)};if(void 0===t)return[];if(void 0===t.length)return function(n,t){var r={};for(var u in t)n(t[u],u)&&(r[u]=t[u]);return r}(n,t);for(var u=-1,e=0,i=t.length,o=[];++u<i;){var f=t[u];n(f)&&(o[e++]=f)}return o}function u(n,t){if(1===arguments.length)return function(t){return u(n,t)};for(var r=0;r<t.length;){if(n(t[r]))return!0;r++}return!1}function e(n,t){return void 0===t&&(t=[]),function(){for(var r,u=[],i=arguments.length;i--;)u[i]=arguments[i];return(r=t.concat(u)).length>=n.length?n.apply(void 0,r):e(n,r)}}var i=e(function(n,t,r){var u;return Object.assign({},r,((u={})[n]=t,u))});function o(){for(var n=[],t=arguments.length;t--;)n[t]=arguments[t];return function(){for(var t=[],r=arguments.length;r--;)t[r]=arguments[r];var u=n.slice();if(u.length>0){for(var e=u.pop().apply(void 0,t);u.length>0;)e=u.pop()(e);return e}}}function f(n){var t=typeof n;if(null===n)return"Null";if(void 0===n)return"Undefined";if("boolean"===t)return"Boolean";if("number"===t)return"Number";if("string"===t)return"String";if(Array.isArray(n))return"Array";if(n instanceof RegExp)return"RegExp";var r=n.toString();return r.startsWith("async")?"Async":"[object Promise]"===r?"Promise":r.includes("function")||r.includes("=>")?"Function":"Object"}function c(n,t){if(1===arguments.length)return function(t){return c(n,t)};if(n===t)return!0;var r=f(n);if(r!==f(t))return!1;if("Array"===r){var u=Array.from(n),e=Array.from(t);if(u.toString()!==e.toString())return!1;var i=!0;return u.forEach(function(n,t){i&&(n===e[t]||c(n,e[t])||(i=!1))}),i}if("Object"===r){var o=Object.keys(n);if(o.length!==Object.keys(t).length)return!1;var l=!0;return o.forEach(function(r){if(l){var u=n[r],e=t[r];u===e||c(u,e)||(l=!1)}}),l}return!1}function l(n,t){if(1===arguments.length)return function(t){return l(n,t)};for(var r=-1,u=!1;++r<t.length&&!u;)c(t[r],n)&&(u=!0);return u}function a(n,t){return 1===arguments.length?function(t){return a(n,t)}:void 0===t||null===t||!0===Number.isNaN(t)?n:t}function h(n,t){return 1===arguments.length?function(t){return h(n,t)}:t.slice(n)}function g(n,t,r){var u=-1,e=n.length;(r=r>e?e:r)<0&&(r+=e),e=t>r?0:r-t>>>0,t>>>=0;for(var i=Array(e);++u<e;)i[u]=n[u+t];return i}function s(n,t){if(1===arguments.length)return function(t){return s(n,t)};var r=t.length,u=n>r?r:n;return"string"==typeof t?t.slice(r-u):g(t,u=r-u,r)}function v(n,t){if(1===arguments.length)return function(t){return v(n,t)};if(void 0===t)return[];if(void 0===t.length)return function(n,t){var r={};for(var u in t)r[u]=n(t[u],u);return r}(n,t);for(var r=-1,u=t.length,e=Array(u);++r<u;)e[r]=n(t[r]);return e}function p(n,t){return 1===arguments.length?function(t){return p(n,t)}:Object.assign({},n||{},t||{})}var d=e(function(n,t,r){return n(r)<n(t)?r:t});function y(n,t){if(1===arguments.length)return function(t){return y(n,t)};if(null!==t&&void 0!==t){for(var r=t,u=0,e="string"==typeof n?n.split("."):n;u<e.length;){if(null===r||void 0===r)return;r=r[e[u]],u++}return r}}var m=e(function(n,t,r){return a(n,y(t,r))});function b(n,t){if(1===arguments.length)return function(t){return b(n,t)};for(var r=[],u=n;u<t;u++)r.push(u);return r}function j(n,t,r){return void 0===t?function(t,r){return j(n,t,r)}:void 0===r?function(r){return j(n,t,r)}:r.reduce(n,t)}n.add=function n(t,r){return void 0===r?function(r){return n(t,r)}:t+r},n.addIndex=t,n.adjust=function n(t,r,u){return void 0===r?function(r,u){return n(t,r,u)}:void 0===u?function(u){return n(t,r,u)}:u.concat().map(function(n,e){return e===r?t(u[r]):n})},n.all=function n(t,u){return 1===arguments.length?function(r){return n(t,r)}:r(t,u).length===u.length},n.allPass=function n(t,r){return 1===arguments.length?function(r){return n(t,r)}:!u(function(n){return!n(r)},t)},n.always=function(n){return function(){return n}},n.any=u,n.anyPass=function n(t,r){return 1===arguments.length?function(r){return n(t,r)}:u(function(n){return n(r)})(t)},n.append=function n(t,r){if(1===arguments.length)return function(r){return n(t,r)};if("string"==typeof r)return""+r+t;var u=r.concat();return u.push(t),u},n.assoc=i,n.both=function n(t,r){return 1===arguments.length?function(r){return n(t,r)}:function(n){return t(n)&&r(n)}},n.complement=function(n){return function(t){return!n(t)}},n.compose=o,n.concat=function n(t,r){return 1===arguments.length?function(r){return n(t,r)}:"string"==typeof t?""+t+r:t.concat(r)},n.contains=l,n.curry=e,n.dec=function(n){return n-1},n.defaultTo=a,n.dissoc=function n(t,r){if(1===arguments.length)return function(r){return n(t,r)};if(null===r||void 0===r)return{};var u={};for(var e in r)u[e]=r[e];return delete u[t],u},n.divide=function n(t,r){return 1===arguments.length?function(r){return n(t,r)}:t/r},n.drop=h,n.dropLast=function n(t,r){return 1===arguments.length?function(r){return n(t,r)}:r.slice(0,-t)},n.either=function n(t,r){return 1===arguments.length?function(r){return n(t,r)}:function(n){return t(n)||r(n)}},n.endsWith=function n(t,r){return 1===arguments.length?function(r){return n(t,r)}:c(t,s(t.length,r))},n.equals=c,n.F=function(){return!1},n.filter=r,n.find=function n(t,r){return 1===arguments.length?function(r){return n(t,r)}:r.find(t)},n.findIndex=function n(t,r){if(1===arguments.length)return function(r){return n(t,r)};for(var u=r.length,e=-1;++e<u;)if(t(r[e]))return e;return-1},n.flatten=function n(t,r){r=void 0===r?[]:r;for(var u=0;u<t.length;u++)Array.isArray(t[u])?n(t[u],r):r.push(t[u]);return r},n.flip=function(n){for(var t=[],r=arguments.length-1;r-- >0;)t[r]=arguments[r+1];return function(n){return function(){for(var t=[],r=arguments.length;r--;)t[r]=arguments[r];return 1===t.length?function(r){return n(r,t[0])}:2===t.length?n(t[1],t[0]):void 0}}(n)},n.forEach=function n(t,r){return 1===arguments.length?function(r){return n(t,r)}:(v(t,r),r)},n.groupBy=function n(t,r){if(1===arguments.length)return function(r){return n(t,r)};for(var u={},e=0;e<r.length;e++){var i=r[e],o=t(i);u[o]||(u[o]=[]),u[o].push(i)}return u},n.has=function n(t,r){return 1===arguments.length?function(r){return n(t,r)}:void 0!==r[t]},n.head=function(n){return"string"==typeof n?n[0]||"":n[0]},n.identity=function(n){return n},n.ifElse=function n(t,r,u){return void 0===r?function(r,u){return n(t,r,u)}:void 0===u?function(u){return n(t,r,u)}:function(n){return!0===("boolean"==typeof t?t:t(n))?r(n):u(n)}},n.inc=function(n){return n+1},n.includes=function n(t,r){return 1===arguments.length?function(r){return n(t,r)}:r.includes(t)},n.indexBy=function n(t,r){if(1===arguments.length)return function(r){return n(t,r)};for(var u={},e=0;e<r.length;e++){var i=r[e];u[t(i)]=i}return u},n.indexOf=function n(t,r){if(1===arguments.length)return function(r){return n(t,r)};for(var u=-1,e=r.length;++u<e;)if(r[u]===t)return u;return-1},n.init=function(n){return"string"==typeof n?n.slice(0,-1):n.length?g(n,0,-1):[]},n.is=function n(t,r){return 1===arguments.length?function(r){return n(t,r)}:null!=r&&r.constructor===t||r instanceof t},n.isNil=function(n){return void 0===n||null===n},n.join=function n(t,r){return 1===arguments.length?function(r){return n(t,r)}:r.join(t)},n.keys=function(n){return Object.keys(n)},n.last=function(n){return"string"==typeof n?n[n.length-1]||"":n[n.length-1]},n.lastIndexOf=function n(t,r){if(1===arguments.length)return function(r){return n(t,r)};var u=-1;return r.map(function(n,r){c(n,t)&&(u=r)}),u},n.length=function(n){return n.length},n.map=v,n.match=function n(t,r){if(1===arguments.length)return function(r){return n(t,r)};var u=r.match(t);return null===u?[]:u},n.merge=p,n.max=function n(t,r){return 1===arguments.length?function(r){return n(t,r)}:r>t?r:t},n.maxBy=function n(t,r,u){return 2===arguments.length?function(u){return n(t,r,u)}:1===arguments.length?function(r,u){return n(t,r,u)}:t(u)>t(r)?u:r},n.min=function n(t,r){return 1===arguments.length?function(r){return n(t,r)}:r<t?r:t},n.minBy=d,n.modulo=function n(t,r){return 1===arguments.length?function(r){return n(t,r)}:t%r},n.multiply=function n(t,r){return 1===arguments.length?function(r){return n(t,r)}:t*r},n.none=function n(t,r){return 1===arguments.length?function(r){return n(t,r)}:0===r.filter(t).length},n.not=function(n){return!n},n.nth=function n(t,r){if(1===arguments.length)return function(r){return n(t,r)};var u=t<0?r.length+t:t;return"[object String]"===Object.prototype.toString.call(r)?r.charAt(u):r[u]},n.omit=function n(t,r){if(1===arguments.length)return function(r){return n(t,r)};if(null!==r&&void 0!==r){var u="string"==typeof t?t=t.split(","):t,e={};for(var i in r)u.includes(i)||(e[i]=r[i]);return e}},n.partialCurry=function(n,t){return void 0===t&&(t={}),function(r){return"Async"===f(n)||"Promise"===f(n)?new Promise(function(u,e){n(p(r,t)).then(u).catch(e)}):n(p(r,t))}},n.path=y,n.pathOr=m,n.pick=function n(t,r){if(1===arguments.length)return function(r){return n(t,r)};if(null!==r&&void 0!==r){for(var u="string"==typeof t?t.split(","):t,e={},i=0;i<u.length;)u[i]in r&&(e[u[i]]=r[u[i]]),i++;return e}},n.pickAll=function n(t,r){if(1===arguments.length)return function(r){return n(t,r)};if(null!==r&&void 0!==r){for(var u="string"==typeof t?t.split(","):t,e={},i=0;i<u.length;)e[u[i]]=u[i]in r?r[u[i]]:void 0,i++;return e}},n.pipe=function(){for(var n=[],t=arguments.length;t--;)n[t]=arguments[t];return o.apply(void 0,n.reverse())},n.pluck=function n(t,r){if(1===arguments.length)return function(r){return n(t,r)};var u=[];return v(function(n){void 0!==n[t]&&u.push(n[t])},r),u},n.prepend=function n(t,r){if(1===arguments.length)return function(r){return n(t,r)};if("string"==typeof r)return""+t+r;var u=r.concat();return u.unshift(t),u},n.prop=function n(t,r){return 1===arguments.length?function(r){return n(t,r)}:r[t]},n.propEq=function n(t,r,u){return void 0===r?function(r,u){return n(t,r,u)}:void 0===u?function(u){return n(t,r,u)}:u[t]===r},n.range=b,n.reduce=j,n.reject=function n(t,u){return 1===arguments.length?function(r){return n(t,r)}:r(function(n){return!t(n)},u)},n.repeat=function n(t,r){return 1===arguments.length?function(r){return n(t,r)}:Array(r).fill(t)},n.replace=function n(t,r,u){return void 0===r?function(r,u){return n(t,r,u)}:void 0===u?function(u){return n(t,r,u)}:u.replace(t,r)},n.reverse=function(n){return n.concat().reverse()},n.sort=function n(t,r){return 1===arguments.length?function(r){return n(t,r)}:r.concat().sort(t)},n.sortBy=function n(t,r){return 1===arguments.length?function(r){return n(t,r)}:r.concat().sort(function(n,r){var u=t(n),e=t(r);return u<e?-1:u>e?1:0})},n.split=function n(t,r){return 1===arguments.length?function(r){return n(t,r)}:r.split(t)},n.splitEvery=function n(t,r){if(1===arguments.length)return function(r){return n(t,r)};for(var u=t>1?t:1,e=[],i=0;i<r.length;)e.push(r.slice(i,i+=u));return e},n.startsWith=function n(t,r){return 1===arguments.length?function(r){return n(t,r)}:r.startsWith(t)},n.subtract=function n(t,r){return 1===arguments.length?function(r){return n(t,r)}:t-r},n.T=function(){return!0},n.tail=function(n){return h(1,n)},n.take=function n(t,r){return 1===arguments.length?function(r){return n(t,r)}:"string"==typeof r?r.slice(0,t):g(r,0,t)},n.takeLast=s,n.tap=function n(t,r){return 1===arguments.length?function(r){return n(t,r)}:(t(r),r)},n.test=function n(t,r){return 1===arguments.length?function(r){return n(t,r)}:-1!==r.search(t)},n.times=function n(t,r){return 1===arguments.length?function(r){return n(t,r)}:v(t,b(0,r))},n.toLower=function(n){return n.toLowerCase()},n.toString=function(n){return n.toString()},n.toUpper=function(n){return n.toUpperCase()},n.trim=function(n){return n.trim()},n.type=f,n.uniq=function(n){for(var t=-1,r=[];++t<n.length;){var u=n[t];l(u,r)||r.push(u)}return r},n.uniqWith=function n(t,r){if(1===arguments.length)return function(r){return n(t,r)};for(var e=-1,i=[],o=function(){var n=r[e];u(function(r){return t(n,r)},i)||i.push(n)};++e<r.length;)o();return i},n.update=function n(t,r,u){return void 0===r?function(r,u){return n(t,r,u)}:void 0===u?function(u){return n(t,r,u)}:u.concat().fill(r,t,t+1)},n.values=function(n){var t=[];for(var r in n)t.push(n[r]);return t},n.without=function(n,t){return j(function(t,r){return l(r,n)?t:t.concat(r)},[],t)},n.zip=function n(r,u){return 1===arguments.length?function(t){return n(r,t)}:t(j)(function(n,t,r){return u[r]?n.concat([[t,u[r]]]):n},[],r)},n.zipObj=function n(t,r){return 1===arguments.length?function(r){return n(t,r)}:t.reduce(function(n,t,u){return n[t]=r[u],n},{})}});
//# sourceMappingURL=rambda.umd.js.map
