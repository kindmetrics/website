!function(r){function o(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return r[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}var n={};o.m=r,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o(o.s=1)}({1:function(e,t,r){e.exports=r("qmIG")},qmIG:function(){!function(o){"use strict";var i=o.document,a=o.location,u=o.doNotTrack||navigator.doNotTrack||navigator.msDoNotTrack;try{var e,c=function(e){console.warn("[Kindmetrics] Ignoring event because "+e)},t=function(e){if(u&&("1"==u||"yes"==u))return c("Do not track is enabled");if("prerender"===document.visibilityState)return c("prerendering");var t,r,n={name:e,url:a.protocol+"//"+a.hostname+a.pathname+a.search,domain:s||a.hostname,referrer:i.referrer||null,screen_width:o.innerWidth,source:(t=a.search.match(/[?&](ref|source|utm_source)=([^?&]+)/))?t[2]:null,medium:(r=a.search.match(/[?&](utm_medium)=([^?&]+)/))?r[2]:null,user_agent:o.navigator.userAgent};fetch("//app.kindmetrics.io/api/track",{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(n)}).then(function(e){e.ok||c(payload.name)})},r=function(){t("pageview")},n=o.document.querySelector('[src*="//kindmetrics.io"]'),s=n&&n.getAttribute("data-domain"),d=o.history;d.pushState&&(e=d.pushState,d.pushState=function(){e.apply(this,arguments),r()},o.addEventListener("popstate",r));var f=o.kindmetrics&&o.kindmetrics.q||[];o.kindmetrics=t;for(var l=0;l<f.length;l++)t.apply(this,f[l]);r()}catch(o){(new Image).src="//app.kindmetrics.io/api/error?message="+encodeURIComponent(o.message)}}(window)}});