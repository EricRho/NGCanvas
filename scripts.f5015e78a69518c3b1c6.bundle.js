!function(n){if(!(n.Sfdc&&n.Sfdc.canvas&&n.Sfdc.canvas.module)){var e={};if(n.Sfdc&&n.Sfdc.canvas)for(var t in n.Sfdc.canvas)n.Sfdc.canvas.hasOwnProperty(t)&&(e[t]=n.Sfdc.canvas[t]);var i=Object.prototype,o=Array.prototype,r=n.document,s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",a={hasOwn:function(n,e){return i.hasOwnProperty.call(n,e)},isUndefined:function(n){return void 0===n},isNil:function(n){return a.isUndefined(n)||null===n||""===n},isNumber:function(n){return!!(0===n||n&&n.toExponential&&n.toFixed)},isFunction:function(n){return!!(n&&n.constructor&&n.call&&n.apply)},isArray:Array.isArray||function(n){return"[object Array]"===i.toString.call(n)},isArguments:function(n){return!(!n||!a.hasOwn(n,"callee"))},isObject:function(n){return null!==n&&"object"==typeof n},isString:function(n){return null!==n&&"string"==typeof n},appearsJson:function(n){return/^\{.*\}$/.test(n)},nop:function(){},invoker:function(n){a.isFunction(n)&&n()},identity:function(n){return n},each:function(n,e,t){if(!a.isNil(n)){var i,r,s=o.forEach,c=0;if(i=n.length,t=t||n,s&&s===n.forEach)n.forEach(e,t);else if(a.isNumber(i))for(;c<i;){if(!1===e.call(t,n[c],c,n))return;c+=1}else for(r in n)if(a.hasOwn(n,r)&&!1===e.call(t,n[r],r,n))return}},startsWithHttp:function(n,e){return a.isString(n)?"http"===n.substring(0,4)?n:e:n},map:function(n,e,t){var i=[],r=o.map;return a.isNil(n)?i:r&&n.map===r?n.map(e,t):(t=t||n,a.each(n,function(n,o,r){i.push(e.call(t,n,o,r))}),i)},values:function(n){return a.map(n,a.identity)},slice:function(n,e,t){return o.slice.call(n,a.isUndefined(e)?0:e,a.isUndefined(t)?n.length:t)},toArray:function(n){return n?n.toArray?n.toArray:a.isArray(n)?n:a.isArguments(n)?a.slice(n):a.values(n):[]},size:function(n){return a.toArray(n).length},indexOf:function(n,e){var t,i,r=o.indexOf;if(!n)return-1;if(r&&n.indexOf===r)return n.indexOf(e);for(t=0,i=n.length;t<i;t+=1)if(n[t]===e)return t;return-1},isEmpty:function(n){if(null===n)return!0;if(a.isArray(n)||a.isString(n))return 0===n.length;for(var e in n)if(a.hasOwn(n,e))return!1;return!0},remove:function(n,e){var t=a.indexOf(n,e);t>=0&&n.splice(t,1)},param:function(n,e){var t=[];function i(n,o){a.isNil(o)||(o=a.isFunction(o)?o():o,a.isArray(o)?a.each(o,function(e,t){i(n,e)}):t[t.length]=e?encodeURIComponent(n)+"="+encodeURIComponent(o):n+"="+o)}if(e=e||!1,a.isArray(n))a.each(n,function(n,e){i(e,n)});else for(var o in n)a.hasOwn(n,o)&&i(o,n[o]);return t.join("&").replace(/%20/g,"+")},objectify:function(n){var e,t,i,o,r,s,c={};if(a.isNil(n))return c;for("?"==n.substring(0,1)&&(n=n.substring(1)),e=n.split("&"),t=0;t<e.length;t+=1)r=(i=e[t].split("="))[1],a.isNil(s=c[o=i[0]])?c[o]=r:a.isArray(s)?s[s.length]=r:(c[o]=[],c[o][0]=s,c[o][1]=r);return c},stripUrl:function(n){return a.isNil(n)?null:n.replace(/([^:]+:\/\/[^\/\?#]+).*/,"$1")},query:function(n,e){return a.isNil(e)?n:(n=n.replace(/#.*$/,""),n+=/^\#/.test(e)?e:(/\?/.test(n)?"&":"?")+e)},extend:function(n){return a.each(a.slice(arguments,1),function(e,t){a.each(e,function(e,t){n[t]=e})}),n},endsWith:function(n,e){return-1!==n.indexOf(e,n.length-e.length)},capitalize:function(n){return n.charAt(0).toUpperCase()+n.slice(1)},uncapitalize:function(n){return n.charAt(0).toLowerCase()+n.slice(1)},decode:function(n){var e,t,i,o,r=[],c="",u="",l=0;n=n.replace(/[^A-Za-z0-9\+\/\=]/g,"");do{e=s.indexOf(n.charAt(l++))<<2|(i=s.indexOf(n.charAt(l++)))>>4,t=(15&i)<<4|(o=s.indexOf(n.charAt(l++)))>>2,c=(3&o)<<6|(u=s.indexOf(n.charAt(l++))),r.push(String.fromCharCode(e)),64!==o&&r.push(String.fromCharCode(t)),64!==u&&r.push(String.fromCharCode(c)),e=t=c="",i=o=u=""}while(l<n.length);return a.escapeToUTF8(r.join(""))},escapeToUTF8:function(n){for(var e="",t=0;t<n.length;){var i,o=n.charCodeAt(t++);if(o<128)e+=String.fromCharCode(o);else if(o>191&&o<224)i=n.charCodeAt(t++),e+=String.fromCharCode((31&o)<<6|63&i);else{i=n.charCodeAt(t++);var r=n.charCodeAt(t++);e+=String.fromCharCode((15&o)<<12|(63&i)<<6|63&r)}}return e},validEventName:function(n,e){var t,i=n.split(/\./),o=/^[$A-Z_][0-9A-Z_$]*$/i,r={sfdc:!0,canvas:!0,force:!0,salesforce:!0,chatter:!0,s1:!0};return a.each(a.isArray(e)?e:[e],function(n){r[n]=!1}),i.length>2?1:2===i.length&&(t=i[0].toLowerCase(),r[t])?2:o.test(i[0])&&o.test(i[1])?0:3},prototypeOf:function(n){var e=Object.getPrototypeOf;return a.isFunction(e)?e.call(Object,n):"object"==typeof{}.__proto__?n.__proto__:n.constructor.prototype},module:function(e,t){var i,o,r=e.split("."),s=n.Sfdc.canvas;for("canvas"===r[1]&&(r=r.slice(2)),o=r.length,i=0;i<o;i+=1)a.isUndefined(s[r[i]])&&(s[r[i]]={}),s=s[r[i]];return a.isFunction(t)&&(t=t()),a.extend(s,t)},document:function(){return r},byId:function(n){return r.getElementById(n)},byClass:function(n){return r.getElementsByClassName(n)},attr:function(n,e){var t,i=n.attributes;for(t=0;t<i.length;t+=1)if(e===i[t].name)return i[t].value},onReady:function(n){a.isFunction(n)&&c.push(n)},console:function(){function n(){try{return"sessionStorage"in window&&null!==window.sessionStorage}catch(n){return!1}}function e(){}function t(){e=Function.prototype.bind?Function.prototype.bind.call(console.log,console):function(){Function.prototype.apply.call(console.log,console,arguments)}}function i(){e=function(){}}return window&&!window.console&&(window.console={}),window&&!window.console.log&&(window.console.log=function(){}),window&&!window.console.error&&(window.console.error=function(){}),n()&&"true"===sessionStorage.getItem("canvas_console")?t():i(),{enable:function(){n()&&sessionStorage.setItem("canvas_console","true"),t()},disable:function(){n()&&sessionStorage.setItem("canvas_console","false"),i()},log:e,error:Function.prototype.bind?Function.prototype.bind.call(console.error,console):function(){Function.prototype.apply.call(console.error,console,arguments)}}}()},c=[],u=function(n){a.isFunction(n)&&c.push(n)};!function(){var n,e,t=!1;function i(){t||(t=!0,i=a.nop,a.each(c,a.invoker),c=[])}if(document.addEventListener)document.addEventListener("DOMContentLoaded",i,!1);else if(document.attachEvent){try{n=self!==top}catch(n){}document.documentElement.doScroll&&!n&&function n(){if(!t)try{document.documentElement.doScroll("left"),i()}catch(e){setTimeout(n,30)}}(),document.attachEvent("onreadystatechange",function(){"complete"===document.readyState&&i()})}window.addEventListener?window.addEventListener("load",i,!1):window.attachEvent?window.attachEvent("onload",i):(e=window.onload,window.onload=function(){e&&e(),i()})}(),a.each(a,function(n,e){u[e]=n}),a.each(e,function(n,e){u[e]=n}),function(){for(var n,e=function(){},t=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeStamp","trace","warn"],i=t.length,o="undefined"!=typeof window&&window.console?window.console:{};i--;)o[n=t[i]]||(o[n]=e)}(),n.Sfdc||(n.Sfdc={}),n.Sfdc.canvas=u}}(window),function(n){var e=function(){function e(n,e,t){var i,o="";t?((i=new Date).setTime(i.getTime()+24*t*60*60*1e3),o="; expires="+i.toGMTString()):o="",document.cookie=n+"="+e+o+"; path=/"+("https:"===window.location.protocol==1?"; secure":"")}return{set:e,get:function(e){var t,i,o,r;if(n.isUndefined(e))return document.cookie.split(";");for(t=e+"=",i=document.cookie.split(";"),r=0;r<i.length;r+=1){for(o=i[r];" "===o.charAt(0);)o=o.substring(1,o.length);if(0===o.indexOf(t))return o.substring(t.length,o.length)}return null},remove:function(n){e(n,"",-1)}}}();n.module("Sfdc.canvas.cookies",e)}(Sfdc.canvas),function(n){var e=function(){function e(){try{return"sessionStorage"in window&&null!==window.sessionStorage}catch(n){return!1}}return{get:function(t){return e()?sessionStorage.getItem(t):n.cookies.get(t)},set:function(t,i){return e()?sessionStorage.setItem(t,i):n.cookies.set(t,i)},remove:function(t){return e()?sessionStorage.removeItem(t):n.cookies.remove(t)}}}(),t=function(){var t,i,o,r,s;function a(){e.set("access_token",t),self.location.reload()}function c(e){if(0===arguments.length){if(!n.isNil(t))return t}else t=e;return t}function u(t){if(0===arguments.length){if(!n.isNil(i))return i;i=e.get("instance_url")}else null===t?(e.remove("instance_url"),i=null):(e.set("instance_url",t),i=t);return i}function l(e){var t,i,s,a,l;if(!n.isNil(e))for(0===e.indexOf("#")&&(e=e.substr(1)),s=e.split("&"),t=0;t<s.length;t+=1)a=(i=s[t].split("="))[0],l=decodeURIComponent(i[1]),"access_token"===a?c(l):"instance_url"===a?u(l):"target_origin"===a?r=decodeURIComponent(l):"instance_id"===a&&(o=l)}return{init:function(){t=e.get("access_token"),e.remove("access_token")},login:function(e){var t;t=(e=e||{}).uri||"/rest/oauth2",e.params=e.params||{state:""},e.params.state=e.params.state||e.callback||window.location.pathname,e.params.display=e.params.display||"popup",e.params.redirect_uri=n.startsWithHttp(e.params.redirect_uri,encodeURIComponent(window.location.protocol+"//"+window.location.hostname+":"+window.location.port)+e.params.redirect_uri),t+=function(e){var t,i=[];if(!n.isUndefined(e)){for(t in e)e.hasOwnProperty(t)&&i.push(t+"="+e[t]);return"?"+i.join("&")}return""}(e.params),s=window.open(t,"OAuth","status=0,toolbar=0,menubar=0,resizable=0,scrollbars=1,top=50,left=50,height=500,width=680")},logout:function(){c(null)},loggedin:function(){return!n.isNil(c())},loginUrl:function(){var n,e,t,i=self.location.search;if(i)for(e=(i=i.substring(1)).split("&"),n=0;n<e.length;n+=1)if("loginUrl"===(t=e[n].split("="))[0])return decodeURIComponent(t[1])+"/services/oauth2/authorize";return"https://login.salesforce.com/services/oauth2/authorize"},token:c,instance:u,client:function(){return{oauthToken:c(),instanceId:n.isNil(t)?n.isNil(o)?(l(document.location.hash),o):o:(o=t,t),targetOrigin:n.isNil(e)?n.isNil(r)?(l(document.location.hash),r):r:(r=e,e)};var e,t},checkChildWindowStatus:function(){s&&!s.closed||a()},childWindowUnloadNotification:function(n){var e=0;l(n),setTimeout(function n(){e++,!s||s.closed?a():e<10&&setTimeout(n,50)},50)}}}();n.module("Sfdc.canvas.oauth",t),n.oauth.init()}(Sfdc.canvas),function(n,e){var t;n.module("Sfdc.canvas.xd",{post:function(t,i,o){var r=Sfdc.JSON||JSON;if(n.isNil(i))throw"ERROR: target_url was not supplied on postMessage";var s=n.stripUrl(i);o=o||parent,e.postMessage&&(n.isObject(t)&&(t.targetModule="Canvas"),t=r.stringify(t),n.console.log("Sending Post Message ",t),o.postMessage(t,s))},receive:function(i,o){e.postMessage&&(i&&(t=function(e){var t,r,s=Sfdc.JSON||JSON;if(n.console.log("Post Message Got callback",e),!n.isNil(e)){if("string"==typeof o&&e.origin!==o)return n.console.log("source origin's don't match",e.origin,o),!1;if(n.isFunction(o)&&!1===(r=o(e.origin,e.data)))return n.console.log("source origin's function returning false",e.origin,e.data),!1;if(n.appearsJson(e.data)){try{t=s.parse(e.data)}catch(n){}n.isNil(t)||!n.isNil(t.targetModule)&&"Canvas"!==t.targetModule||(n.console.log("Invoking callback"),i(t,r))}}}),e.addEventListener?e.addEventListener("message",t,!1):e.attachEvent("onmessage",t))},remove:function(){e.postMessage&&(e.removeEventListener?e.removeEventListener("message",t,!1):e.detachEvent("onmessage",t))}})}(Sfdc.canvas,window),function(n){var e,t="41.0",i=function(){var i;function o(e){var t;return"*"===e?e:!n.isNil(e)&&(t=n.stripUrl(e),i=n.startsWithHttp(t,i))?i:((t=n.document().location.hash)&&(t=decodeURIComponent(t.replace(/^#/,"")),i=n.startsWithHttp(t,i)),i)}var r=function(){var s,a=[],c=0,u=!0;function l(i,r){var s,u,l;if(a[c=c>100?0:c+1]=i,s={seq:c,src:"client",clientVersion:t,parentVersion:e,body:r},u=o(n.isNil(l=r&&r.config&&r.config.client)?null:l.targetOrigin),n.isNil(u))throw"ERROR: targetOrigin was not supplied and was not found on the hash tag, this can result from a redirect or link to another page.";n.console.log("posting message ",{message:s,to:u}),n.xd.post(s,u,parent)}function f(t,i){var o;if(t=t||n.oauth&&n.oauth.client(),(n.isNil(t)||n.isNil(t.oauthToken))&&(o={status:401,statusText:"Unauthorized",parentVersion:e,payload:"client or client.oauthToken not supplied"}),(n.isNil(t.instanceId)||n.isNil(t.targetOrigin))&&(o={status:400,statusText:"Bad Request",parentVersion:e,payload:"client.instanceId or client.targetOrigin not supplied"}),!n.isNil(o)){if(n.isFunction(i))return i(o),!1;throw o}return!0}return{services:{ajax:function(e,t){var o,r;if(!e)throw"PRECONDITION ERROR: url required with AJAX call";if(!t||!n.isFunction(t.success))throw"PRECONDITION ERROR: function: 'settings.success' missing.";f(t.client,t.success)&&(o=t.success,(r=n.extend({method:"GET",async:!0,contentType:"application/json",headers:{Authorization:"OAuth "+t.client.oauthToken,Accept:"application/json"},data:null},t||{})).success=void 0,r.failure=void 0,"*"===r.client.targetOrigin?r.client.targetOrigin=null:i=n.startsWithHttp(r.targetOrigin,i),l(o,{type:"ajax",url:e,config:r}))},ctx:function(n,e){f(e,n)&&l(n,{type:"ctx",accessToken:e.oauthToken,config:{client:e}})},token:function(e){return n.oauth&&n.oauth.token(e)},version:function(){return{clientVersion:t,parentVersion:e}},signedrequest:function(n){return arguments.length>0&&(s=n),s},refreshSignedRequest:function(n){var e={oauthToken:"null",instanceId:window.name.substring("canvas-frame-".length),targetOrigin:"*"};l(n,{type:"refresh",accessToken:e.oauthToken,config:{client:e}})},repost:function(n){var e={oauthToken:"null",instanceId:window.name.substring("canvas-frame-".length),targetOrigin:"*"};l(null,{type:"repost",accessToken:e.oauthToken,config:{client:e},refresh:n||!1})}},frame:{size:function(){var e=n.document().documentElement;return{heights:{contentHeight:e.scrollHeight,pageHeight:e.clientHeight,scrollTop:e&&e.scrollTop||n.document().body.scrollTop},widths:{contentWidth:e.scrollWidth,pageWidth:e.clientWidth,scrollLeft:e&&e.scrollLeft||n.document().body.scrollLeft}}},resize:function(e,t){var i,o,r={height:"",width:""},s=n.document().documentElement;n.isNil(t)?(s.clientHeight!==(i=s.scrollHeight)&&(r.height=i+"px"),(o=s.scrollWidth)!==s.clientWidth&&(r.width=o+"px")):(n.isNil(t.height)||(r.height=t.height),n.isNil(t.width)||(r.width=t.width)),n.isNil(r.height)&&n.isNil(r.width)||l(null,{type:"resize",config:{client:e},size:r})},autogrow:function(e,t,i){var o=n.isNil(i)?300:i;!1!==(u=!!n.isNil(t)||t)&&setTimeout(function(){r.frame.resize(e),r.frame.autogrow(e,u)},o)}},event:function(){var e={},t="sfdc.streamingapi";function i(e,t){var i=n.validEventName(e,t);if(0!==i)throw{1:"Event names can only contain one namespace",2:"Namespace has already been reserved",3:"Event name contains invalid characters"}[i]}return{callback:function(i){var o,r=i.payload,s=function(i){var o,r=i.name;return r===t?n.isNil(e[r])||(o=e[r][i.params.topic]):o=e[r],n.isNil(o)||!n.isFunction(o.onData)&&!n.isFunction(o.onComplete)?null:o}(r);n.isNil(s)||("onData"===r.method?o=s.onData:"onComplete"===r.method&&(o=s.onComplete),!n.isNil(o)&&n.isFunction(o)&&o(r.payload))},subscribe:function(o,r){var s={};if(n.isNil(r)||!f(o))throw"precondition fail";n.each(n.isArray(r)?r:[r],function(o){if(n.isNil(o.name))throw"subscription does not have a 'name'";if(i(o.name,["canvas","sfdc"]),o.name===t){if(n.isNil(o.params)||n.isNil(o.params.topic))throw"["+t+"] topic is missing";n.isNil(e[o.name])&&(e[o.name]={}),e[o.name][o.params.topic]=o}else e[o.name]=o;s[o.name]={params:o.params}}),o.isVF||l(null,{type:"subscribe",config:{client:o},subscriptions:s})},unsubscribe:function(o,r){var s={};if(n.isNil(r)||!f(o))throw"PRECONDITION FAIL: need fo supply client and event name";n.isString(r)?(s[r]={},delete e[r]):n.each(n.isArray(r)?r:[r],function(o){var r=o.name?o.name:o;i(r,["canvas","sfdc"]),s[r]={params:o.params},r===t?n.isNil(e[r])||(n.isNil(e[r][o.params.topic])||delete e[r][o.params.topic],n.size(e[r])<=0&&delete e[r]):delete e[r]}),o.isVF||l(null,{type:"unsubscribe",config:{client:o},subscriptions:s})},publish:function(e,t){n.isNil(t)||n.isNil(t.name)||(i(t.name,["s1"]),f(e)&&l(null,{type:"publish",config:{client:e},event:t}))}}}(),callback:{callback:function(e){401===e.status&&n.isArray(e.payload)&&e.payload[0].errorCode&&"INVALID_SESSION_ID"===e.payload[0].errorCode&&n.oauth&&n.oauth.logout(),n.isFunction(a[e.seq])&&(n.isFunction(a[e.seq])||alert("not function"),a[e.seq](e))}}}}();return n.xd.receive(function(n){n&&r[n.type]&&r[n.type].callback(n)},o),{ctx:r.services.ctx,ajax:r.services.ajax,token:r.services.token,version:r.services.version,resize:r.frame.resize,size:r.frame.size,autogrow:r.frame.autogrow,subscribe:r.event.subscribe,unsubscribe:r.event.unsubscribe,publish:r.event.publish,signedrequest:r.services.signedrequest,refreshSignedRequest:r.services.refreshSignedRequest,repost:r.services.repost}}();n.module("Sfdc.canvas.client",i)}(Sfdc.canvas);