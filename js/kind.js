!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=1)}({1:function(t,e,n){t.exports=n("ORlB")},ORlB:function(t,e){var n=function(){"use strict";function t(t,e,n){void 0===n&&(n=!0),this.track_host=t,this.kindmetricsURL=e,this.dnt=window.doNotTrack||navigator.doNotTrack||navigator.msDoNotTrack,this.trackDocument=window.document,this.trackLocation=window.location,n&&this.start()}var e=t.prototype;return e.do_track=function(){return!this.dnt||"1"!=this.dnt&&"yes"!=this.dnt},e.getUrl=function(){return this.trackLocation.protocol+"//"+this.trackLocation.hostname+this.trackLocation.pathname+this.trackLocation.search},e.getSource=function(){var t=this.trackLocation.search.match(/[?&](ref|source|utm_source)=([^?&]+)/);return t?t[2]:null},e.getMedium=function(){var t=this.trackLocation.search.match(/[?&](utm_medium)=([^?&]+)/);return t?t[2]:null},e.ignore=function(t){console.warn("[Kindmetrics] Ignoring event because "+t)},e.track=function(t,e){var n=this;if(!this.do_track())return ignore("Do not track is enabled");if("prerender"===document.visibilityState)return ignore("prerendering");var r=window.document.querySelector('[src*="'+this.track_host+'"]'),i=r&&r.getAttribute("data-domain"),o={name:t,url:this.getUrl(),domain:i||this.trackLocation.hostname,referrer:this.trackDocument.referrer||null,screen_width:window.innerWidth,source:this.getSource(),medium:this.getMedium(),user_agent:window.navigator.userAgent},a=this.kindmetricsURL+"/api/track";fetch(a,{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(o)}).then((function(t){t.ok||n.ignore(o.name)}))},e.page=function(){this.track("pageview")},e.setPushState=function(){var t=window.history;if(t.pushState){var e=t.pushState;t.pushState=function(){e.apply(this,arguments),window.kindmetrics.page()},window.addEventListener("popstate",this.page)}var n=window.kindmetricsq||[];window.kindmetricsq=event;for(var r=0;r<n.length;r++)event.apply(this,n[r])},e.start=function(){try{this.setPushState(),this.page()}catch(t){(new Image).src=this.kindmetricsURL+"/api/error?message="+encodeURIComponent(t.message)}},t}();window.kindmetrics=new n("//kindmetrics.io","//app.kindmetrics.io")}});