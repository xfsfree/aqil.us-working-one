; /* /bitrix/js/main/json/json2.min.js?14945906613467*/
; /* /bitrix/js/main/core/core_ls.min.js?14945906617365*/
; /* /bitrix/js/main/session.min.js?14945906612511*/
; /* /bitrix/js/main/core/core_window.min.js?155558769475671*/
; /* /bitrix/js/main/date/main.date.min.js?155558770114103*/
; /* /bitrix/js/main/core/core_date.min.js?155558770124926*/
; /* /bitrix/js/main/utils.min.js?149459066119858*/
; /* /bitrix/js/main/core/core_popup.js?155747419976073*/
; /* /bitrix/js/main/core/core.min.js?155747415976670*/
; /* /bitrix/js/main/core/core_promise.min.js?15574741992490*/
; /* /bitrix/js/main/core/core_ajax.min.js?155747419824054*/
; /* /bitrix/js/main/core/core_fx.min.js?14945912389768*/

; /* Start:"a:4:{s:4:"full";s:48:"/bitrix/js/main/core/core.min.js?155747415976670";s:6:"source";s:28:"/bitrix/js/main/core/core.js";s:3:"min";s:32:"/bitrix/js/main/core/core.min.js";s:3:"map";s:32:"/bitrix/js/main/core/core.map.js";}"*/
if(typeof WeakMap==="undefined"){(function(){var e=Date.now()%1e9;var t=function(t){this.name="__bx"+(Math.random()*1e9>>>0)+e++};t.prototype={set:function(e,t){if(!this.isValid(e)){throw new TypeError("Invalid value used as weak map key")}var n=e[this.name];if(n&&n[0]===e){n[1]=t}else{Object.defineProperty(e,this.name,{value:[e,t],writable:true})}return this},get:function(e){if(!this.isValid(e)){return undefined}var t=e[this.name];return t&&t[0]===e?t[1]:undefined},delete:function(e){if(!this.isValid(e)){return false}var t=e[this.name];if(!t){return false}var n=t[0]===e;t[0]=t[1]=undefined;return n},has:function(e){if(!this.isValid(e)){return false}var t=e[this.name];return t&&t[0]===e},isValid:function(e){return e&&(typeof e==="object"||typeof e==="function")}};window.WeakMap=t})()}if(!Object.values){Object.values=function e(t){var n=[];for(var i in t){if(t.hasOwnProperty(i)&&t.propertyIsEnumerable(i)){n.push(t[i])}}return n}}(function(window){if(!!window.BX&&!!window.BX.extend)return;var _bxtmp;if(!!window.BX){_bxtmp=window.BX}window.BX=function(e,t){if(BX.type.isNotEmptyString(e)){var n;if(!!t&&null!=NODECACHE[e])n=NODECACHE[e];n=n||document.getElementById(e);if(!!t)NODECACHE[e]=n;return n}else if(BX.type.isDomNode(e))return e;else if(BX.type.isFunction(e))return BX.ready(e);return null};BX.debugEnableFlag=true;BX.message=function(e){if(e===""||typeof e==="string"||e instanceof String){if(typeof BX.message[e]=="undefined"&&typeof BX.onCustomEvent!=="undefined"){BX.onCustomEvent("onBXMessageNotFound",[e])}if(typeof BX.message[e]=="undefined"){if(typeof BX.debug!=="undefined"){BX.debug("message undefined: "+e)}BX.message[e]=""}return BX.message[e]}else if(typeof e==="object"&&e){for(var t in e){if(e.hasOwnProperty(t)){BX.message[t]=e[t]}}return true}};if(!!_bxtmp){for(var i in _bxtmp){if(_bxtmp.hasOwnProperty(i)){if(!BX[i]){BX[i]=_bxtmp[i]}else if(i=="message"){for(var j in _bxtmp[i]){if(_bxtmp[i].hasOwnProperty(j)){BX.message[j]=_bxtmp[i][j]}}}}}_bxtmp=null}var __readyHandler=null,readyBound=false,readyList=[],proxyList=new WeakMap,deferList=new WeakMap,NODECACHE={},deniedEvents=[],eventsList=new WeakMap,customEvents=new WeakMap,customEventsCnt=0,garbageCollectors=[],cssList=[],cssInit=false,jsList=[],jsInit=false,bSafari=navigator.userAgent.toLowerCase().indexOf("webkit")!=-1,bOpera=navigator.userAgent.toLowerCase().indexOf("opera")!=-1,bFirefox=navigator.userAgent.toLowerCase().indexOf("firefox")!=-1,bChrome=navigator.userAgent.toLowerCase().indexOf("chrome")!=-1,bIE=document.attachEvent&&!bOpera,r={script:/<script([^>]*)>/gi,script_end:/<\/script>/gi,script_src:/src=["\']([^"\']+)["\']/i,script_type:/type=["\']([^"\']+)["\']/i,space:/\s+/,ltrim:/^[\s\r\n]+/g,rtrim:/[\s\r\n]+$/g,style:/<link.*?(rel="stylesheet"|type="text\/css")[^>]*>/i,style_href:/href=["\']([^"\']+)["\']/i},eventTypes={click:"MouseEvent",dblclick:"MouseEvent",mousedown:"MouseEvent",mousemove:"MouseEvent",mouseout:"MouseEvent",mouseover:"MouseEvent",mouseup:"MouseEvent",focus:"MouseEvent",blur:"MouseEvent"},lastWait=[],CHECK_FORM_ELEMENTS={tagName:/^INPUT|SELECT|TEXTAREA|BUTTON$/i},PRELOADING=1,PRELOADED=2,LOADING=3,LOADED=4,assets={},isAsync=null;BX.MSLEFT=1;BX.MSMIDDLE=2;BX.MSRIGHT=4;BX.AM_PM_UPPER=1;BX.AM_PM_LOWER=2;BX.AM_PM_NONE=false;BX.ext=function(e){for(var t in e){if(e.hasOwnProperty(t)){this[t]=e[t]}}};BX.extend=function(e,t){var n=function(){};n.prototype=t.prototype;e.prototype=new n;e.prototype.constructor=e;e.superclass=t.prototype;e.prototype.superclass=t.prototype;if(t.prototype.constructor==Object.prototype.constructor){t.prototype.constructor=t}};BX.namespace=function(e){var t=e.split(".");var n=BX;if(t[0]==="BX"){t=t.slice(1)}for(var i=0;i<t.length;i++){if(typeof n[t[i]]==="undefined"){n[t[i]]={}}n=n[t[i]]}return n};BX.getClass=function(e){if(!BX.type.isNotEmptyString(e)){return null}var t=null;var n=window;var i=e.split(".");for(var r=0;r<i.length;r++){var o=i[r];if(!n[o]){return null}n=n[o];t=n}return t};BX.debug=function(){if(BX.debugStatus()){if(window.console&&window.console.log){window.console.log("BX.debug: ",arguments.length>0?arguments:arguments[0]);if(arguments[0]instanceof Error&&arguments[0].stack){window.console.log("BX.debug error stack trace",arguments[0].stack)}}if(window.console&&window.console.trace)console.trace()}};BX.debugEnable=function(e){e=typeof e=="boolean"?e:true;BX.debugEnableFlag=e};BX.debugStatus=function(){return BX.debugEnableFlag};BX.is_subclass_of=function(e,t){if(e instanceof t)return true;if(t.superclass)return BX.is_subclass_of(e,t.superclass);return false};BX.clearNodeCache=function(){NODECACHE={};return false};BX.bitrix_sessid=function(){return BX.message("bitrix_sessid")};BX.create=function(e,t,n){n=n||document;if(null==t&&typeof e=="object"&&e.constructor!==String){t=e;e=e.tag}var i;if(BX.browser.IsIE()&&!BX.browser.IsIE9()&&null!=t&&null!=t.props&&(t.props.name||t.props.id)){i=n.createElement("<"+e+(t.props.name?' name="'+t.props.name+'"':"")+(t.props.id?' id="'+t.props.id+'"':"")+">")}else{i=n.createElement(e)}return t?BX.adjust(i,t):i};BX.adjust=function(e,t){var n,i;if(!e.nodeType)return null;if(e.nodeType==9)e=e.body;if(t.attrs){for(n in t.attrs){if(t.attrs.hasOwnProperty(n)){if(n=="class"||n=="className")e.className=t.attrs[n];else if(n=="for")e.htmlFor=t.attrs[n];else if(t.attrs[n]=="")e.removeAttribute(n);else e.setAttribute(n,t.attrs[n])}}}if(t.style){for(n in t.style){if(t.style.hasOwnProperty(n)){e.style[n]=t.style[n]}}}if(t.props){for(n in t.props){if(t.props.hasOwnProperty(n)){e[n]=t.props[n]}}}if(t.events){for(n in t.events){if(t.events.hasOwnProperty(n)){BX.bind(e,n,t.events[n])}}}if(t.dataset){for(n in t.dataset){if(t.dataset.hasOwnProperty(n)){e.dataset[n]=t.dataset[n]}}}if(t.children&&t.children.length>0){for(n=0,i=t.children.length;n<i;n++){if(BX.type.isNotEmptyString(t.children[n]))e.innerHTML+=t.children[n];else if(BX.type.isElementNode(t.children[n])||BX.type.isTextNode(t.children[n]))e.appendChild(t.children[n])}}else if(typeof t.text!=="undefined"){BX.cleanNode(e);e.appendChild((e.ownerDocument||document).createTextNode(t.text))}else if(typeof t.html!=="undefined"){e.innerHTML=t.html}return e};BX.replace=function(e,t){e.parentNode.replaceChild(t,e)};BX.remove=function(e){if(e&&null!=e.parentNode)e.parentNode.removeChild(e);e=null;return null};BX.cleanNode=function(e,t){e=BX(e);t=!!t;if(e&&e.childNodes){while(e.childNodes.length>0)e.removeChild(e.firstChild)}if(e&&t){e=BX.remove(e)}return e};BX.createFragment=function(e){var t=document.createDocumentFragment();if(!BX.type.isArray(e)){return t}for(var n=0;n<e.length;n++){t.appendChild(e[n])}return t};BX.html=function(e,t,n){if(typeof t=="undefined")return e.innerHTML;if(typeof n=="undefined")n={};t=BX.processHTML(t.toString());var i=[];var r=[];if(typeof t.STYLE!="undefined"&&t.STYLE.length>0){for(var o in t.STYLE)i.push(t.STYLE[o])}if(typeof t.SCRIPT!="undefined"&&t.SCRIPT.length>0){for(var o in t.SCRIPT){if(t.SCRIPT[o].isInternal)r.push(t.SCRIPT[o].JS);else i.push(t.SCRIPT[o].JS)}}if(n.htmlFirst&&typeof t.HTML!="undefined"&&e){e.innerHTML=t.HTML}var s=new BX.Promise;var a=function(){if(!n.htmlFirst&&typeof t.HTML!="undefined"&&e){e.innerHTML=t.HTML}for(var i in r){BX.evalGlobal(r[i])}if(BX.type.isFunction(n.callback)){n.callback()}s.fulfill()};if(i.length>0){BX.load(i,a)}else{a()}return s};BX.insertAfter=function(e,t){t.parentNode.insertBefore(e,t.nextSibling)};BX.prepend=function(e,t){t.insertBefore(e,t.firstChild)};BX.append=function(e,t){t.appendChild(e)};BX.addClass=function(e,t){var n;e=BX(e);t=BX.util.trim(t);if(t=="")return e;if(e){if(!e.className){e.className=t}else if(!!e.classList&&t.indexOf(" ")<0){e.classList.add(t)}else{n=(t||"").split(r.space);var i=" "+e.className+" ";for(var o=0,s=n.length;o<s;o++){if(i.indexOf(" "+n[o]+" ")<0){e.className+=" "+n[o]}}}}return e};BX.removeClass=function(e,t){e=BX(e);if(e){if(e.className&&!!t){if(BX.type.isString(t)){if(!!e.classList&&t.indexOf(" ")<0){e.classList.remove(t)}else{var n=t.split(r.space),i=" "+e.className+" ";for(var o=0,s=n.length;o<s;o++){i=i.replace(" "+n[o]+" "," ")}e.className=BX.util.trim(i)}}else{e.className=""}}}return e};BX.toggleClass=function(e,t){var n;e=BX(e);if(BX.type.isArray(t)){n=" "+e.className+" ";for(var i=0,r=t.length;i<r;i++){if(BX.hasClass(e,t[i])){n=(" "+n+" ").replace(" "+t[i]+" "," ");n+=" "+t[i>=r-1?0:i+1];i--;break}}if(i==r)e.className+=" "+t[0];else e.className=n;e.className=BX.util.trim(e.className)}else if(BX.type.isNotEmptyString(t)){if(!!e.classList){e.classList.toggle(t)}else{n=e.className;if(BX.hasClass(e,t)){n=(" "+n+" ").replace(" "+t+" "," ")}else{n+=" "+t}e.className=BX.util.trim(n)}}return e};BX.hasClass=function(e,t){e=BX(e);if(!e||!BX.type.isDomNode(e)){BX.debug(e);return false}if(!e.className||!t){return false}if(!!e.classList&&!!t&&t.indexOf(" ")<0){return e.classList.contains(BX.util.trim(t))}else return(" "+e.className+" ").indexOf(" "+t+" ")>=0};BX.setOpacity=function(e,t){if(e.style.filter!=null){e.style.zoom="100%";if(t==100){e.style.filter=""}else{e.style.filter="alpha(opacity="+t.toString()+")"}}else if(e.style.opacity!=null){e.style.opacity=(t/100).toString()}else if(e.style.MozOpacity!=null){e.style.MozOpacity=(t/100).toString()}};BX.hoverEvents=function(e){if(e)return BX.adjust(e,{events:BX.hoverEvents()});else return{mouseover:BX.hoverEventsHover,mouseout:BX.hoverEventsHout}};BX.hoverEventsHover=function(){BX.addClass(this,"bx-hover");this.BXHOVER=true};BX.hoverEventsHout=function(){BX.removeClass(this,"bx-hover");this.BXHOVER=false};BX.focusEvents=function(e){if(e)return BX.adjust(e,{events:BX.focusEvents()});else return{mouseover:BX.focusEventsFocus,mouseout:BX.focusEventsBlur}};BX.focusEventsFocus=function(){BX.addClass(this,"bx-focus");this.BXFOCUS=true};BX.focusEventsBlur=function(){BX.removeClass(this,"bx-focus");this.BXFOCUS=false};BX.setUnselectable=function(e){e.style.userSelect=e.style.MozUserSelect=e.style.WebkitUserSelect=e.style.KhtmlUserSelect=e.style="none";e.setAttribute("unSelectable","on")};BX.setSelectable=function(e){e.style.userSelect=e.style.MozUserSelect=e.style.WebkitUserSelect=e.style.KhtmlUserSelect=e.style="";e.removeAttribute("unSelectable")};BX.styleIEPropertyName=function(e){if(e=="float")e=BX.browser.IsIE()?"styleFloat":"cssFloat";else{var t=BX.browser.isPropertySupported(e);if(t){e=t}else{var n=/(\-([a-z]){1})/g;if(n.test(e)){e=e.replace(n,function(){return arguments[2].toUpperCase()})}}}return e};BX.style=function(e,t,n){if(!BX.type.isElementNode(e))return null;if(n==null){var i;if(e.currentStyle)i=e.currentStyle[BX.styleIEPropertyName(t)];else if(window.getComputedStyle){var r=BX.browser.isPropertySupported(t,true);if(!!r)t=r;i=BX.GetContext(e).getComputedStyle(e,null).getPropertyValue(t)}if(!i)i="";return i}else{e.style[BX.styleIEPropertyName(t)]=n;return e}};BX.focus=function(e){try{e.focus();return true}catch(e){return false}};BX.firstChild=function(e){var t=e.firstChild;while(t&&!BX.type.isElementNode(t)){t=t.nextSibling}return t};BX.lastChild=function(e){var t=e.lastChild;while(t&&!BX.type.isElementNode(t)){t=t.previousSibling}return t};BX.previousSibling=function(e){var t=e.previousSibling;while(t&&!BX.type.isElementNode(t)){t=t.previousSibling}return t};BX.nextSibling=function(e){var t=e.nextSibling;while(t&&!BX.type.isElementNode(t)){t=t.nextSibling}return t};BX.findChildrenByClassName=function(e,t,n){if(!e||!e.childNodes)return null;var r=[];if(typeof e.getElementsByClassName=="undefined"){n=n!==false;r=BX.findChildren(e,{className:t},n)}else{var o=e.getElementsByClassName(t);for(i=0,l=o.length;i<l;i++){r[i]=o[i]}}return r};BX.findChildByClassName=function(e,t,n){if(!e||!e.childNodes)return null;var i=null;if(typeof e.getElementsByClassName=="undefined"){n=n!==false;i=BX.findChild(e,{className:t},n)}else{var r=e.getElementsByClassName(t);if(r&&typeof r[0]!="undefined"){i=r[0]}else{i=null}}return i};BX.findChildren=function(e,t,n){return BX.findChild(e,t,n,true)};BX.findChild=function(e,t,n,i){if(!e||!e.childNodes)return null;n=!!n;i=!!i;var r=e.childNodes.length,o=[];for(var s=0;s<r;s++){var a=e.childNodes[s];if(_checkNode(a,t)){if(i)o.push(a);else return a}if(n==true){var l=BX.findChild(a,t,n,i);if(l){if(i)o=BX.util.array_merge(o,l);else return l}}}if(i||o.length>0)return o;else return null};BX.findParent=function(e,t,n){if(!e)return null;var i=e;while(i.parentNode){var r=i.parentNode;if(_checkNode(r,t))return r;i=r;if(!!n&&(BX.type.isFunction(n)||typeof n=="object")){if(BX.type.isElementNode(n)){if(i==n)break}else{if(_checkNode(i,n))break}}}return null};BX.findNextSibling=function(e,t){if(!e)return null;var n=e;while(n.nextSibling){var i=n.nextSibling;if(_checkNode(i,t))return i;n=i}return null};BX.findPreviousSibling=function(e,t){if(!e)return null;var n=e;while(n.previousSibling){var i=n.previousSibling;if(_checkNode(i,t))return i;n=i}return null};BX.checkNode=function(e,t){return _checkNode(e,t)};BX.findFormElements=function(e){if(BX.type.isString(e))e=document.forms[e]||BX(e);var t=[];if(BX.type.isElementNode(e)){if(e.tagName.toUpperCase()=="FORM"){t=e.elements}else{t=BX.findChildren(e,CHECK_FORM_ELEMENTS,true)}}return t};BX.isParentForNode=function(e,t){if(!BX.type.isDomNode(e)||!BX.type.isDomNode(t))return false;while(true){if(e==t)return true;if(t&&t.parentNode)t=t.parentNode;else break}return false};BX.clone=function(e,t){var n,i,r;if(t!==false)t=true;if(e===null)return null;if(BX.type.isDomNode(e)){n=e.cloneNode(t)}else if(typeof e=="object"){if(BX.type.isArray(e)){n=[];for(i=0,r=e.length;i<r;i++){if(typeof e[i]=="object"&&t)n[i]=BX.clone(e[i],t);else n[i]=e[i]}}else{n={};if(e.constructor){if(BX.type.isDate(e))n=new Date(e);else n=new e.constructor}for(i in e){if(typeof e[i]=="object"&&t)n[i]=BX.clone(e[i],t);else n[i]=e[i]}}}else{n=e}return n};BX.getCaretPosition=function(e){var t=0;if(e.selectionStart||e.selectionStart==0){t=e.selectionStart}else if(document.selection){e.focus();var n=document.selection.createRange();n.moveStart("character",-e.value.length);t=n.text.length}return t};BX.setCaretPosition=function(e,t){if(!BX.isNodeInDom(e)||BX.isNodeHidden(e)||e.disabled){return}if(e.setSelectionRange){e.focus();e.setSelectionRange(t,t)}else if(e.createTextRange){var n=e.createTextRange();n.collapse(true);n.moveEnd("character",t);n.moveStart("character",t);n.select()}};BX.merge=function(){var e=Array.prototype.slice.call(arguments);if(e.length<2)return{};var t=e.shift();for(var n=0;n<e.length;n++){for(var i in e[n]){if(typeof e[n]=="undefined"||e[n]==null)continue;if(e[n].hasOwnProperty(i)){if(typeof e[n][i]=="undefined"||e[n][i]==null)continue;if(typeof e[n][i]=="object"&&!BX.type.isDomNode(e[n][i])&&typeof e[n][i]["isUIWidget"]=="undefined"){var r="length"in e[n][i];if(typeof t[i]!="object")t[i]=r?[]:{};if(r)BX.util.array_merge(t[i],e[n][i]);else BX.merge(t[i],e[n][i])}else t[i]=e[n][i]}}}return t};BX.mergeEx=function(){var e=Array.prototype.slice.call(arguments);if(e.length<2){return{}}var t=e.shift();for(var n=0;n<e.length;n++){for(var i in e[n]){if(typeof e[n]=="undefined"||e[n]==null||!e[n].hasOwnProperty(i)){continue}if(BX.type.isPlainObject(e[n][i])&&BX.type.isPlainObject(t[i])){BX.mergeEx(t[i],e[n][i])}else{t[i]=BX.type.isPlainObject(e[n][i])?BX.clone(e[n][i]):e[n][i]}}}return t};BX.bind=function(e,t,n){if(!e||typeof e!=="object"){return}if(t==="mousewheel"){BX.bind(e,"DOMMouseScroll",n)}else if(t==="transitionend"){BX.bind(e,"webkitTransitionEnd",n);BX.bind(e,"msTransitionEnd",n);BX.bind(e,"oTransitionEnd",n)}else if(t==="bxchange"){BX.bind(e,"change",n);BX.bind(e,"cut",n);BX.bind(e,"paste",n);BX.bind(e,"drop",n);BX.bind(e,"keyup",n);return}else if(t==="fullscreenchange"){if(document.cancelFullScreen)BX.bind(e,"fullscreenchange",n);else if(document.mozCancelFullScreen)BX.bind(e,"mozfullscreenchange",n);else if(document.webkitCancelFullScreen)BX.bind(e,"webkitfullscreenchange",n)}if(e.addEventListener){e.addEventListener(t,n,false)}else if(e.attachEvent){e.attachEvent("on"+t,BX.proxy(n,e))}else{try{e["on"+t]=n}catch(e){BX.debug(e)}}var i=eventsList.get(e)||{};if(!BX.type.isArray(i[t])){i[t]=[]}i[t].push(n);eventsList.set(e,i)};BX.unbind=function(e,t,n){if(!e){return}if(t==="mousewheel"){BX.unbind(e,"DOMMouseScroll",n)}else if(t==="transitionend"){BX.unbind(e,"webkitTransitionEnd",n);BX.unbind(e,"msTransitionEnd",n);BX.unbind(e,"oTransitionEnd",n)}else if(t==="bxchange"){BX.unbind(e,"change",n);BX.unbind(e,"cut",n);BX.unbind(e,"paste",n);BX.unbind(e,"drop",n);BX.unbind(e,"keyup",n);return}if(e.removeEventListener){e.removeEventListener(t,n,false)}else if(e.detachEvent){e.detachEvent("on"+t,BX.proxy(n,e))}else{e["on"+t]=null}var i=eventsList.get(e);if(i&&BX.type.isArray(i[t])){i[t]=i[t].filter(function(e){return e!==n})}};BX.getEventButton=function(e){e=e||window.event;var t=0;if(typeof e.which!="undefined"){switch(e.which){case 1:t=t|BX.MSLEFT;break;case 2:t=t|BX.MSMIDDLE;break;case 3:t=t|BX.MSRIGHT;break}}else if(typeof e.button!="undefined"){t=event.button}return t||BX.MSLEFT};BX.unbindAll=function(e){var t=eventsList.get(e);if(!e){return}eventsList.delete(e);for(var n in t){t[n].forEach(function(t){BX.unbind(e,n,t)})}};var captured_events=null,_bind=null;BX.CaptureEvents=function(e,t){if(_bind)return;_bind=BX.bind;captured_events=[];BX.bind=function(n,i,r){if(n===e&&i===t)captured_events.push(r);_bind.apply(this,arguments)}};BX.CaptureEventsGet=function(){if(_bind){BX.bind=_bind;var e=captured_events;_bind=null;captured_events=null;return e}return null};BX.fireEvent=function(e,t){var n=false,i=null;if(BX.type.isDomNode(e)){n=true;if(document.createEventObject){if(eventTypes[t]!="MouseEvent"){i=document.createEventObject();i.type=t;n=e.fireEvent("on"+t,i)}if(e[t]){e[t]()}}else{i=null;switch(eventTypes[t]){case"MouseEvent":i=document.createEvent("MouseEvent");try{i.initMouseEvent(t,true,true,top,1,0,0,0,0,0,0,0,0,0,null)}catch(e){i.initMouseEvent(t,true,true,window,1,0,0,0,0,0,0,0,0,0,null)}break;default:i=document.createEvent("Event");i.initEvent(t,true,true)}n=e.dispatchEvent(i)}}return n};BX.getWheelData=function(e){e=e||window.event;e.wheelData=e.detail?e.detail*-1:e.wheelDelta/40;return e.wheelData};BX.proxy_context=null;BX.delegate=function(e,t){if(!e||!t)return e;return function(){var n=BX.proxy_context;BX.proxy_context=this;var i=e.apply(t,arguments);BX.proxy_context=n;return i}};BX.delegateLater=function(e,t,n){return function(){if(t[e]){var i=BX.proxy_context;BX.proxy_context=this;var r=t[e].apply(n||t,arguments);BX.proxy_context=i;return r}return null}};BX.proxy=function(e,t){return getObjectDelegate(e,t,proxyList)};BX.defer=function(e,t){if(!!t)return BX.defer_proxy(e,t);else return function(){var t=arguments;setTimeout(function(){e.apply(this,t)},10)}};BX.defer_proxy=function(e,t){return getObjectDelegate(e,t,deferList,BX.defer)};function getObjectDelegate(e,t,n,i){if(!BX.type.isFunction(e)||!BX.type.isMapKey(t)){return e}var r=n.get(t);if(!r){r=new WeakMap;n.set(t,r)}var o=r.get(e);if(!o){o=i?i(BX.delegate(e,t)):BX.delegate(e,t);r.set(e,o)}return o}BX.bindOnce=function(e,t,n){return BX.bind(e,t,BX.once(e,t,n))};BX.once=function(e,t,n){var i=function(){BX.unbind(e,t,i);n.apply(this,arguments)};return i};BX.bindDelegate=function(e,t,n,i){var r=BX.delegateEvent(n,i);BX.bind(e,t,r);return r};BX.delegateEvent=function(e,t){return function(n){n=n||window.event;var i=n.target||n.srcElement;while(i!=this){if(_checkNode(i,e)){return t.call(i,n)}if(i&&i.parentNode)i=i.parentNode;else break}return null}};BX.False=function(){return false};BX.DoNothing=function(){};BX.denyEvent=function(e,t){deniedEvents.push([e,t,e["on"+t]]);e["on"+t]=BX.DoNothing};BX.allowEvent=function(e,t){for(var n=0,i=deniedEvents.length;n<i;n++){if(deniedEvents[n][0]==e&&deniedEvents[n][1]==t){e["on"+t]=deniedEvents[n][2];BX.util.deleteFromArray(deniedEvents,n);return}}};BX.fixEventPageXY=function(e){BX.fixEventPageX(e);BX.fixEventPageY(e);return e};BX.fixEventPageX=function(e){if(e.pageX==null&&e.clientX!=null){e.pageX=e.clientX+(document.documentElement&&document.documentElement.scrollLeft||document.body&&document.body.scrollLeft||0)-(document.documentElement.clientLeft||0)}return e};BX.fixEventPageY=function(e){if(e.pageY==null&&e.clientY!=null){e.pageY=e.clientY+(document.documentElement&&document.documentElement.scrollTop||document.body&&document.body.scrollTop||0)-(document.documentElement.clientTop||0)}return e};BX.PreventDefault=function(e){if(!e)e=window.event;if(e.stopPropagation){e.preventDefault();e.stopPropagation()}else{e.cancelBubble=true;e.returnValue=false}return false};BX.eventReturnFalse=function(e){e=e||window.event;if(e&&e.preventDefault)e.preventDefault();else e.returnValue=false;return false};BX.eventCancelBubble=function(e){e=e||window.event;if(e&&e.stopPropagation)e.stopPropagation();else e.cancelBubble=true};BX.addCustomEvent=function(e,t,n){if(BX.type.isString(e)){n=t;t=e;e=window}if(!BX.type.isFunction(n)||!BX.type.isNotEmptyString(t)||!BX.type.isMapKey(e)){return}t=t.toLowerCase();var i=customEvents.get(e)||{};i[t]=BX.type.isArray(i[t])?i[t]:[];n["__bxSort"]=++customEventsCnt;i[t].push(n);customEvents.set(e,i)};BX.removeCustomEvent=function(e,t,n){if(BX.type.isString(e)){n=t;t=e;e=window}t=t.toLowerCase();var i=customEvents.get(e);if(i&&BX.type.isArray(i[t])){for(var r=i[t].length-1;r>=0;r--){if(i[t][r]===n){i[t].splice(r,1)}}}};BX.removeAllCustomEvents=function(e,t){if(BX.type.isString(e)){t=e;e=window}t=t.toLowerCase();var n=customEvents.get(e);if(n){delete n[t]}};BX.onCustomEvent=function(e,t,n,i){if(BX.type.isString(e)){i=n;n=t;t=e;e=window}if(!n){n=[]}t=t.toLowerCase();var r=customEvents.get(window);var o=r&&BX.type.isArray(r[t])?r[t]:[];var s=[];if(e!==window&&BX.type.isMapKey(e)){var a=customEvents.get(e);if(a&&BX.type.isArray(a[t])){s=a[t]}}var l=o.concat(s);l.sort(function(e,t){return e["__bxSort"]-t["__bxSort"]});l.forEach(function(t){if(o.indexOf(t)!==-1||s.indexOf(t)!==-1){t.apply(e,i===true?BX.clone(n):n)}})};BX.bindDebouncedChange=function(e,t,n,i,r){r=r||window;i=i||300;var o="bx-dc-previous-value";BX.data(e,o,e.value);var s=function(t,n){var i=BX.data(e,o);if(typeof i=="undefined"||i!=n){if(typeof r!="object")t(n);else t.apply(r,[n])}};var a=BX.debounce(function(){var n=e.value;s(t,n);BX.data(e,o,n)},i);BX.bind(e,"keyup",a);BX.bind(e,"change",a);BX.bind(e,"input",a);if(BX.type.isFunction(n)){var l=function(){s(n,e.value)};BX.bind(e,"keyup",l);BX.bind(e,"change",l);BX.bind(e,"input",l)}};BX.parseJSON=function(data,context){var result=null;if(BX.type.isNotEmptyString(data)){try{if(data.indexOf("\n")>=0)eval("result = "+data);else result=new Function("return "+data)()}catch(e){BX.onCustomEvent(context,"onParseJSONFailure",[data,context])}}else if(BX.type.isPlainObject(data)){return data}return result};BX.isReady=false;BX.ready=function(e){bindReady();if(!BX.type.isFunction(e)){BX.debug("READY: not a function! ",e)}else{if(BX.isReady)e.call(document);else if(readyList)readyList.push(e)}};BX.submit=function(e,t,n,i){t=t||"save";if(!e["BXFormSubmit_"+t]){e["BXFormSubmit_"+t]=e.appendChild(BX.create("INPUT",{props:{type:"submit",name:t,value:n||"Y"},style:{display:"none"}}))}if(e.sessid)e.sessid.value=BX.bitrix_sessid();setTimeout(BX.delegate(function(){BX.fireEvent(this,"click");if(i)i()},e["BXFormSubmit_"+t]),10)};BX.debounce=function(e,t,n){var i=0;return function(){n=n||this;var r=arguments;clearTimeout(i);i=setTimeout(function(){e.apply(n,r)},t)}};BX.throttle=function(e,t,n){var i=0,r=null,o;return function(){n=n||this;r=arguments;o=true;if(!i){var s=function(){if(o){e.apply(n,r);o=false;i=setTimeout(s,t)}else{i=null}};s()}}};BX.browser={IsIE:function(){return bIE},IsIE6:function(){return/MSIE 6/i.test(navigator.userAgent)},IsIE7:function(){return/MSIE 7/i.test(navigator.userAgent)},IsIE8:function(){return/MSIE 8/i.test(navigator.userAgent)},IsIE9:function(){return!!document.documentMode&&document.documentMode>=9},IsIE10:function(){return!!document.documentMode&&document.documentMode>=10},IsIE11:function(){return BX.browser.DetectIeVersion()>=11},IsOpera:function(){return bOpera},IsSafari:function(){return bSafari},IsFirefox:function(){return bFirefox},IsChrome:function(){return bChrome},IsMac:function(){return/Macintosh/i.test(navigator.userAgent)},IsAndroid:function(){return/Android/i.test(navigator.userAgent)},IsIOS:function(){return/(iPad;)|(iPhone;)/i.test(navigator.userAgent)},IsMobile:function(){return/(ipad|iphone|android|mobile|touch)/i.test(navigator.userAgent)},DetectIeVersion:function(){if(BX.browser.IsOpera()||BX.browser.IsSafari()||BX.browser.IsFirefox()||BX.browser.IsChrome()){return-1}var e=-1;if(!!window.MSStream&&!window.ActiveXObject&&"ActiveXObject"in window){e=11}else if(BX.browser.IsIE10()){e=10}else if(BX.browser.IsIE9()){e=9}else if(BX.browser.IsIE()){e=8}if(e==-1||e==8){var t;if(navigator.appName=="Microsoft Internet Explorer"){t=new RegExp("MSIE ([0-9]+[.0-9]*)");if(t.exec(navigator.userAgent)!=null)e=parseFloat(RegExp.$1)}else if(navigator.appName=="Netscape"){e=11;t=new RegExp("Trident/.*rv:([0-9]+[.0-9]*)");if(t.exec(navigator.userAgent)!=null)e=parseFloat(RegExp.$1)}}return e},DetectAndroidVersion:function(){var e=new RegExp("Android ([0-9]+[.0-9]*)");if(e.exec(navigator.userAgent)!=null)return parseFloat(RegExp.$1);else return 0},IsDoctype:function(e){e=e||document;if(e.compatMode)return e.compatMode=="CSS1Compat";return e.documentElement&&e.documentElement.clientHeight},SupportLocalStorage:function(){return!!BX.localStorage&&!!BX.localStorage.checkBrowser()},addGlobalClass:function(){var e="bx-core";if(BX.hasClass(document.documentElement,e)){return}if(BX.browser.IsIOS()){e+=" bx-ios"}else if(BX.browser.IsMac()){e+=" bx-mac"}else if(BX.browser.IsAndroid()){e+=" bx-android"}e+=BX.browser.IsMobile()?" bx-touch":" bx-no-touch";e+=BX.browser.isRetina()?" bx-retina":" bx-no-retina";var t=-1;if(/AppleWebKit/.test(navigator.userAgent)){e+=" bx-chrome"}else if((t=BX.browser.DetectIeVersion())>0){e+=" bx-ie bx-ie"+t;if(t>7&&t<10&&!BX.browser.IsDoctype()){e+=" bx-quirks"}}else if(/Opera/.test(navigator.userAgent)){e+=" bx-opera"}else if(/Gecko/.test(navigator.userAgent)){e+=" bx-firefox"}BX.addClass(document.documentElement,e)},isPropertySupported:function(e,t){if(!BX.type.isNotEmptyString(e))return false;var n=e.indexOf("-")>-1?f(e):e;t=!!t;var i=n.charAt(0).toUpperCase()+n.slice(1);var r=(n+" "+["Webkit","Moz","O","ms"].join(i+" ")+i).split(" ");var o=document.body||document.documentElement;for(var s=0;s<r.length;s++){var a=r[s];if(o.style[a]!==undefined){var l=a==n?"":"-"+a.substr(0,a.length-n.length).toLowerCase()+"-";return t?l+u(n):a}}function u(e){return e.replace(/([A-Z])/g,function(){return"-"+arguments[1].toLowerCase()})}function f(e){var t=/(\-([a-z]){1})/g;if(t.test(e))return e.replace(t,function(){return arguments[2].toUpperCase()});else return e}return false},addGlobalFeatures:function(e,t){if(!BX.type.isArray(e))return;var n=[];for(var i=0;i<e.length;i++){var r=!!BX.browser.isPropertySupported(e[i]);n.push("bx-"+(r?"":"no-")+e[i].toLowerCase())}BX.addClass(document.documentElement,n.join(" "))},isRetina:function(){return window.devicePixelRatio&&window.devicePixelRatio>=2}};BX.show=function(e,t){if(e.BXDISPLAY||!_checkDisplay(e,t)){e.style.display=e.BXDISPLAY}};BX.hide=function(e,t){if(!e.BXDISPLAY)_checkDisplay(e,t);e.style.display="none"};BX.toggle=function(e,t){if(!t&&BX.type.isElementNode(e)){var n=true;if(e.BXDISPLAY)n=!_checkDisplay(e);else n=e.style.display=="none";if(n)BX.show(e);else BX.hide(e)}else if(BX.type.isArray(t)){for(var i=0,r=t.length;i<r;i++){if(e==t[i]){e=t[i==r-1?0:i+1];break}}if(i==r)e=t[0]}return e};BX.util={array_values:function(e){if(!BX.type.isArray(e))return BX.util._array_values_ob(e);var t=[];for(var n=0,i=e.length;n<i;n++)if(e[n]!==null&&typeof e[n]!="undefined")t.push(e[n]);return t},_array_values_ob:function(e){var t=[];for(var n in e)if(e[n]!==null&&typeof e[n]!="undefined")t.push(e[n]);return t},array_keys:function(e){if(!BX.type.isArray(e))return BX.util._array_keys_ob(e);var t=[];for(var n=0,i=e.length;n<i;n++)if(e[n]!==null&&typeof e[n]!="undefined")t.push(n);return t},_array_keys_ob:function(e){var t=[];for(var n in e)if(e[n]!==null&&typeof e[n]!="undefined")t.push(n);return t},object_keys:function(e){var t=[];for(var n in e){if(e.hasOwnProperty(n)){t.push(n)}}return t},array_merge:function(e,t){if(!BX.type.isArray(e))e=[];if(!BX.type.isArray(t))t=[];var n=e.length,i=0;if(typeof t.length==="number"){for(var r=t.length;i<r;i++){e[n++]=t[i]}}else{while(t[i]!==undefined){e[n++]=t[i++]}}e.length=n;return e},array_flip:function(e){var t={};for(var n in e){t[e[n]]=n}return t},array_diff:function(e,t,n){n=BX.type.isFunction(n)?n:null;var i,r,o,s,a={},l=[];for(i=0,r=t.length;i<r;i++){o=t[i];s=n?n(o):o;a[s]=true}for(i=0,r=e.length;i<r;i++){o=e[i];s=n?n(o):o;if(typeof a[s]==="undefined"){l.push(o)}}return l},array_unique:function(e){var t=0,n,i=e.length;if(i<2)return e;for(;t<i-1;t++){for(n=t+1;n<i;n++){if(e[t]==e[n]){e.splice(n--,1);i--}}}return e},in_array:function(e,t){for(var n=0;n<t.length;n++){if(t[n]==e)return true}return false},array_search:function(e,t){for(var n=0;n<t.length;n++){if(t[n]==e)return n}return-1},object_search_key:function(e,t){if(typeof t[e]!="undefined")return t[e];for(var n in t){if(typeof t[n]=="object"){var i=BX.util.object_search_key(e,t[n]);if(i!==false)return i}}return false},trim:function(e){if(BX.type.isString(e))return e.replace(r.ltrim,"").replace(r.rtrim,"");else return e},urlencode:function(e){return encodeURIComponent(e)},deleteFromArray:function(e,t){return e.slice(0,t).concat(e.slice(t+1))},insertIntoArray:function(e,t,n){return e.slice(0,t).concat([n]).concat(e.slice(t))},htmlspecialchars:function(e){if(typeof e!="string"||!e.replace)return e;return e.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")},htmlspecialcharsback:function(e){if(typeof e!="string"||!e.replace)return e;return e.replace(/\&quot;/g,'"').replace(/&#39;/g,"'").replace(/\&lt;/g,"<").replace(/\&gt;/g,">").replace(/\&amp;/g,"&").replace(/\&nbsp;/g," ")},preg_quote:function(e,t){if(!e.replace)return e;return e.replace(new RegExp("[.\\\\+*?\\[\\^\\]$(){}=!<>|:\\"+(t||"")+"-]","g"),"\\$&")},jsencode:function(e){if(!e||!e.replace)return e;var t=[{c:"\\\\",r:"\\\\"},{c:"\\t",r:"\\t"},{c:"\\n",r:"\\n"},{c:"\\r",r:"\\r"},{c:'"',r:'\\"'},{c:"'",r:"\\'"},{c:"<",r:"\\x3C"},{c:">",r:"\\x3E"},{c:"\\u2028",r:"\\u2028"},{c:"\\u2029",r:"\\u2029"}];for(var n=0;n<t.length;n++)e=e.replace(new RegExp(t[n].c,"g"),t[n].r);return e},getCssName:function(e){if(!BX.type.isNotEmptyString(e)){return""}return e.replace(/[A-Z]/g,function(e){return"-"+e.toLowerCase()})},getJsName:function(e){var t=/\-([a-z]){1}/g;if(t.test(e)){return e.replace(t,function(e,t){return t.toUpperCase()})}return e},nl2br:function(e){if(!e||!e.replace)return e;return e.replace(/([^>])\n/g,"$1<br/>")},str_pad:function(e,t,n,i){n=n||" ";i=i||"right";e=e.toString();if(i=="left")return BX.util.str_pad_left(e,t,n);else return BX.util.str_pad_right(e,t,n)},str_pad_left:function(e,t,n){var i=e.length,r=n.length;if(i>=t)return e;for(;i<t;i+=r)e=n+e;return e},str_pad_right:function(e,t,n){var i=e.length,r=n.length;if(i>=t)return e;for(;i<t;i+=r)e+=n;return e},strip_tags:function(e){return e.split(/<[^>]+>/g).join("")},strip_php_tags:function(e){return e.replace(/<\?(.|[\r\n])*?\?>/g,"")},popup:function(e,t,n){var i,r;if(BX.browser.IsOpera()){i=document.body.offsetWidth;r=document.body.offsetHeight}else{i=screen.width;r=screen.height}return window.open(e,"","status=no,scrollbars=yes,resizable=yes,width="+t+",height="+n+",top="+Math.floor((r-n)/2-14)+",left="+Math.floor((i-t)/2-5))},shuffle:function(e){var t,n;var i=e.length;while(0!==i){n=Math.floor(Math.random()*i);i-=1;t=e[i];e[i]=e[n];e[n]=t}return e},objectSort:function(e,t,n){n=n=="asc"?"asc":"desc";var i=[],r;for(r in e){if(e.hasOwnProperty(r)&&e[r][t]){i.push([r,e[r][t]])}}if(n=="asc"){i.sort(function(e,t){var n,i;if(BX.type.isDate(e[1])){n=e[1].getTime()}else if(!isNaN(e[1])){n=parseInt(e[1])}else{n=e[1].toString().toLowerCase()}if(BX.type.isDate(t[1])){i=t[1].getTime()}else if(!isNaN(t[1])){i=parseInt(t[1])}else{i=t[1].toString().toLowerCase()}if(n>i)return 1;else if(n<i)return-1;else return 0})}else{i.sort(function(e,t){var n,i;if(BX.type.isDate(e[1])){n=e[1].getTime()}else if(!isNaN(e[1])){n=parseInt(e[1])}else{n=e[1].toString().toLowerCase()}if(BX.type.isDate(t[1])){i=t[1].getTime()}else if(!isNaN(t[1])){i=parseInt(t[1])}else{i=t[1].toString().toLowerCase()}if(n<i)return 1;else if(n>i)return-1;else return 0})}var o=Array();for(r=0;r<i.length;r++){o.push(e[i[r][0]])}return o},versionCompare:function(e,t){var n=/^([\d+\.]+)$/;if(!n.test(e)||!n.test(t)){return NaN}e=e.toString().split(".");t=t.toString().split(".");if(e.length<t.length){while(e.length<t.length){e.push(0)}}else if(t.length<e.length){while(t.length<e.length){t.push(0)}}for(var i=0;i<e.length;i++){if(e[i]>t[i]){return 1}else if(e[i]<t[i]){return-1}}return 0},objectMerge:function(){return BX.mergeEx.apply(window,arguments)},objectClone:function(e){return BX.clone(e,true)},hex2rgb:function(e){var t=e.replace(/[# ]/g,"").replace(/^(.)(.)(.)$/,"$1$1$2$2$3$3").match(/.{2}/g);for(var n=0;n<3;n++){t[n]=parseInt(t[n],16)}return{r:t[0],g:t[1],b:t[2]}},remove_url_param:function(e,t){if(BX.type.isArray(t)){for(var n=0;n<t.length;n++){e=BX.util.remove_url_param(e,t[n])}}else{var i,r;if((i=e.indexOf("?"))>=0&&i!=e.length-1){r=e.substr(i+1);e=e.substr(0,i+1);r=r.replace(new RegExp("(^|&)"+t+"=[^&#]*","i"),"");r=r.replace(/^&/,"");if(BX.type.isNotEmptyString(r)){e=e+r}else{e=e.substr(0,e.length-1)}}}return e},add_url_param:function(e,t){var n;var i="";var r="";var o;for(n in t){e=this.remove_url_param(e,n);i+=(i!=""?"&":"")+n+"="+t[n]}if((o=e.indexOf("#"))>=0){r=e.substr(o);e=e.substr(0,o)}if((o=e.indexOf("?"))>=0){e=e+(o!=e.length-1?"&":"")+i+r}else{e=e+"?"+i+r}return e},buildQueryString:function(e){var t="";for(var n in e){var i=e[n];if(BX.type.isArray(i)){i.forEach(function(e,i){t+=encodeURIComponent(n+"["+i+"]")+"="+encodeURIComponent(e)+"&"})}else{t+=encodeURIComponent(n)+"="+encodeURIComponent(i)+"&"}}if(t.length>0){t=t.substr(0,t.length-1)}return t},even:function(e){return parseInt(e)%2==0},hashCode:function(e){if(!BX.type.isNotEmptyString(e)){return 0}var t=0;for(var n=0;n<e.length;n++){var i=e.charCodeAt(n);t=(t<<5)-t+i;t=t&t}return t},getRandomString:function(e){var t="0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";var n=t.length;e=parseInt(e);if(isNaN(e)||e<=0){e=8}var i="";for(var r=0;r<e;r++){i+=t.charAt(Math.floor(Math.random()*n))}return i},number_format:function(e,t,n,i){var r,o,s,a,l,u="";t=Math.abs(t);if(isNaN(t)||t<0){t=2}n=n||",";if(typeof i==="undefined")i=".";e=(+e||0).toFixed(t);if(e<0){u="-";e=-e}r=parseInt(e,10)+"";o=r.length>3?r.length%3:0;l=o?r.substr(0,o)+i:"";s=r.substr(o).replace(/(\d{3})(?=\d)/g,"$1"+i);a=t?n+Math.abs(e-r).toFixed(t).replace(/-/,"0").slice(2):"";return u+l+s+a},getExtension:function(e){e=e||"";var t=e.split("?")[0].split(".");return t[t.length-1].toLowerCase()},addObjectToForm:function(e,t,n){if(!BX.type.isString(n)){n=""}for(var i in e){if(!e.hasOwnProperty(i)){continue}var r=e[i];var o=n!==""?n+"["+i+"]":i;if(BX.type.isArray(r)){var s={};for(var a=0;a<r.length;a++){s[a]=r[a]}BX.util.addObjectToForm(s,t,o)}else if(BX.type.isPlainObject(r)){BX.util.addObjectToForm(r,t,o)}else{r=BX.type.isFunction(r.toString)?r.toString():"";if(r!==""){t.appendChild(BX.create("INPUT",{attrs:{type:"hidden",name:o,value:r}}))}}}},observe:function(e,t){console.error("BX.util.observe: function is no longer supported by browser.");return false},escapeRegExp:function(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}};BX.type={isString:function(e){return e===""?true:e?typeof e=="string"||e instanceof String:false},isNotEmptyString:function(e){return BX.type.isString(e)?e.length>0:false},isBoolean:function(e){return e===true||e===false},isNumber:function(e){return e===0?true:e?typeof e=="number"||e instanceof Number:false},isFunction:function(e){return e===null?false:typeof e=="function"||e instanceof Function},isElementNode:function(e){return e&&typeof e=="object"&&"nodeType"in e&&e.nodeType==1&&e.tagName&&e.tagName.toUpperCase()!="SCRIPT"&&e.tagName.toUpperCase()!="STYLE"&&e.tagName.toUpperCase()!="LINK"},isDomNode:function(e){return e&&typeof e=="object"&&"nodeType"in e},isTextNode:function(e){return e&&typeof e=="object"&&"nodeType"in e&&e.nodeType==3},isArray:function(e){return e&&Object.prototype.toString.call(e)=="[object Array]"},isDate:function(e){return e&&Object.prototype.toString.call(e)=="[object Date]"},isPlainObject:function(e){if(!e||typeof e!=="object"||e.nodeType){return false}var t=Object.prototype.hasOwnProperty;try{if(e.constructor&&!t.call(e,"constructor")&&!t.call(e.constructor.prototype,"isPrototypeOf")){return false}}catch(e){return false}var n;for(n in e){}return typeof n==="undefined"||t.call(e,n)},isNotEmptyObject:function(e){for(var t in e){if(e.hasOwnProperty(t))return true}return false},stringToInt:function(e){var t=parseInt(e);return!isNaN(t)?t:0},isMapKey:function(e){return e&&(typeof e==="object"||typeof e==="function")}};BX.validation={checkIfEmail:function(e){var t="[=a-z0-9_+~'!$&*^`|#%/?{}-]";return new RegExp("^\\s*"+t+"+(\\."+t+"+)*@([a-z0-9-]+\\.)+[a-z0-9-]{2,20}\\s*$","i").test(e)},checkIfPhone:function(e){var t=new RegExp(typeof BX.PhoneNumber==="undefined"?BX.PhoneNumber.getValidNumberPattern():"^\\s*\\+?s*[0-9(-)\\s]+\\s*$","i");return t.test(e)}};BX.prop={get:function(e,t,n){return e&&e.hasOwnProperty(t)?e[t]:n},getObject:function(e,t,n){return e&&BX.type.isPlainObject(e[t])?e[t]:n},getElementNode:function(e,t,n){return e&&BX.type.isElementNode(e[t])?e[t]:n},getArray:function(e,t,n){return e&&BX.type.isArray(e[t])?e[t]:n},getFunction:function(e,t,n){return e&&BX.type.isFunction(e[t])?e[t]:n},getNumber:function(e,t,n){if(!(e&&e.hasOwnProperty(t))){return n}var i=e[t];if(BX.type.isNumber(i)){return i}i=parseFloat(i);return!isNaN(i)?i:n},getInteger:function(e,t,n){if(!(e&&e.hasOwnProperty(t))){return n}var i=e[t];if(BX.type.isNumber(i)){return i}i=parseInt(i);return!isNaN(i)?i:n},getBoolean:function(e,t,n){if(!(e&&e.hasOwnProperty(t))){return n}var i=e[t];return BX.type.isBoolean(i)?i:BX.type.isString(i)?i.toLowerCase()==="true":!!i},getString:function(e,t,n){if(!(e&&e.hasOwnProperty(t))){return n}var i=e[t];return BX.type.isString(i)?i:i?i.toString():""},extractDate:function(e){if(!BX.type.isDate(e)){e=new Date}e.setHours(0);e.setMinutes(0);e.setSeconds(0);e.setMilliseconds(0);return e}};BX.isNodeInDom=function(e,t){return e===(t||document)?true:e.parentNode?BX.isNodeInDom(e.parentNode):false};BX.isNodeHidden=function(e){if(e===document)return false;else if(BX.style(e,"display")=="none")return true;else return e.parentNode?BX.isNodeHidden(e.parentNode):true};BX.evalPack=function(e){while(e.length>0){var t=e.shift();if(t.TYPE=="SCRIPT_EXT"||t.TYPE=="SCRIPT_SRC"){BX.loadScript(t.DATA,function(){BX.evalPack(e)});return}else if(t.TYPE=="SCRIPT"){BX.evalGlobal(t.DATA)}}};BX.evalGlobal=function(e){if(e){var t=document.getElementsByTagName("head")[0]||document.documentElement,n=document.createElement("script");n.type="text/javascript";if(!BX.browser.IsIE()){n.appendChild(document.createTextNode(e))}else{n.text=e}t.insertBefore(n,t.firstChild);t.removeChild(n)}};BX.processHTML=function(e,t){var n,i,o,s,a,l=[],u=[];var f=[];var c=r.script.lastIndex=r.script_end.lastIndex=0;while((n=r.script.exec(e))!==null){r.script_end.lastIndex=r.script.lastIndex;var d=r.script_end.exec(e);if(d===null){break}var p=false;if((a=n[1].match(r.script_type))!==null){if(a[1]=="text/html"||a[1]=="text/template")p=true}if(p){f.push([c,r.script_end.lastIndex-c])}else{f.push([c,n.index-c]);var h=t||n[1].indexOf("bxrunfirst")!="-1";if((o=n[1].match(r.script_src))!==null){l.push({bRunFirst:h,isInternal:false,JS:o[1]})}else{var m=n.index+n[0].length;var B=e.substr(m,d.index-m);l.push({bRunFirst:h,isInternal:true,JS:B})}}c=d.index+9;r.script.lastIndex=c}f.push([c,c===0?e.length:e.length-c]);var y="";for(var g=0,X=f.length;g<X;g++){y+=e.substr(f[g][0],f[g][1])}while((i=y.match(r.style))!==null){if((s=i[0].match(r.style_href))!==null&&i[0].indexOf('media="')<0){u.push(s[1])}y=y.replace(i[0],"")}return{HTML:y,SCRIPT:l,STYLE:u}};BX.garbage=function(e,t){garbageCollectors.push({callback:e,context:t})};BX.GetDocElement=function(e){e=e||document;return BX.browser.IsDoctype(e)?e.documentElement:e.body};BX.GetContext=function(e){if(BX.type.isElementNode(e))return e.ownerDocument.parentWindow||e.ownerDocument.defaultView||window;else if(BX.type.isDomNode(e))return e.parentWindow||e.defaultView||window;else return window};BX.GetWindowInnerSize=function(e){var t,n;e=e||document;if(window.innerHeight){t=BX.GetContext(e).innerWidth;n=BX.GetContext(e).innerHeight}else if(e.documentElement&&(e.documentElement.clientHeight||e.documentElement.clientWidth)){t=e.documentElement.clientWidth;n=e.documentElement.clientHeight}else if(e.body){t=e.body.clientWidth;n=e.body.clientHeight}return{innerWidth:t,innerHeight:n}};BX.GetWindowScrollPos=function(e){var t,n;e=e||document;if(window.pageYOffset){t=BX.GetContext(e).pageXOffset;n=BX.GetContext(e).pageYOffset}else if(e.documentElement&&(e.documentElement.scrollTop||e.documentElement.scrollLeft)){t=e.documentElement.scrollLeft;n=e.documentElement.scrollTop}else if(e.body){t=e.body.scrollLeft;n=e.body.scrollTop}return{scrollLeft:t,scrollTop:n}};BX.GetWindowScrollSize=function(e){var t,n;if(!e)e=document;if(e.compatMode&&e.compatMode=="CSS1Compat"){t=e.documentElement.scrollWidth;n=e.documentElement.scrollHeight}else{if(e.body.scrollHeight>e.body.offsetHeight)n=e.body.scrollHeight;else n=e.body.offsetHeight;if(e.body.scrollWidth>e.body.offsetWidth||e.compatMode&&e.compatMode=="BackCompat"||e.documentElement&&!e.documentElement.clientWidth)t=e.body.scrollWidth;else t=e.body.offsetWidth}return{scrollWidth:t,scrollHeight:n}};BX.GetWindowSize=function(e){var t=this.GetWindowInnerSize(e);var n=this.GetWindowScrollPos(e);var i=this.GetWindowScrollSize(e);return{innerWidth:t.innerWidth,innerHeight:t.innerHeight,scrollLeft:n.scrollLeft,scrollTop:n.scrollTop,scrollWidth:i.scrollWidth,scrollHeight:i.scrollHeight}};BX.scrollTop=function(e,t){if(typeof t!="undefined"){if(e==window){throw new Error("scrollTop() for window is not implemented")}else e.scrollTop=parseInt(t)}else{if(e==window)return BX.GetWindowScrollPos().scrollTop;return e.scrollTop}};BX.scrollLeft=function(e,t){if(typeof t!="undefined"){if(e==window){throw new Error("scrollLeft() for window is not implemented")}else e.scrollLeft=parseInt(t)}else{if(e==window)return BX.GetWindowScrollPos().scrollLeft;return e.scrollLeft}};BX.hide_object=function(e){e=BX(e);e.style.position="absolute";e.style.top="-1000px";e.style.left="-1000px";e.style.height="10px";e.style.width="10px"};BX.is_relative=function(e){var t=BX.style(e,"position");return t=="relative"||t=="absolute"};BX.is_float=function(e){var t=BX.style(e,"float");return t=="right"||t=="left"};BX.is_fixed=function(e){var t=BX.style(e,"position");return t=="fixed"};BX.pos=function(e,t){var n={top:0,right:0,bottom:0,left:0,width:0,height:0};t=!!t;if(!e)return n;if(typeof e.getBoundingClientRect!="undefined"&&e.ownerDocument==document&&!t){var i={};try{i=e.getBoundingClientRect()}catch(t){i={top:e.offsetTop,left:e.offsetLeft,width:e.offsetWidth,height:e.offsetHeight,right:e.offsetLeft+e.offsetWidth,bottom:e.offsetTop+e.offsetHeight}}var r=document.documentElement;var o=document.body;n.top=i.top+(r.scrollTop||o.scrollTop);n.left=i.left+(r.scrollLeft||o.scrollLeft);n.width=i.right-i.left;n.height=i.bottom-i.top;n.right=i.right+(r.scrollLeft||o.scrollLeft);n.bottom=i.bottom+(r.scrollTop||o.scrollTop)}else{var s=0,a=0,l=e.offsetWidth,u=e.offsetHeight;var f=true;for(;e!=null;e=e.offsetParent){if(!f&&t&&BX.is_relative(e))break;s+=e.offsetLeft;a+=e.offsetTop;if(f){f=false;continue}var c=parseInt(BX.style(e,"border-left-width")),d=parseInt(BX.style(e,"border-top-width"));if(!isNaN(c)&&c>0)s+=c;if(!isNaN(d)&&d>0)a+=d}n.top=a;n.left=s;n.width=l;n.height=u;n.right=n.left+l;n.bottom=n.top+u}for(var p in n){if(n.hasOwnProperty(p)){n[p]=Math.round(n[p])}}return n};BX.width=function(e,t){if(typeof t!="undefined")BX.style(e,"width",parseInt(t)+"px");else{if(e==window)return window.innerWidth;return BX.pos(e).width}};BX.height=function(e,t){if(typeof t!="undefined")BX.style(e,"height",parseInt(t)+"px");else{if(e==window)return window.innerHeight;return BX.pos(e).height}};BX.align=function(e,t,n,i){if(i)i=i.toLowerCase();else i="";var r=document;if(BX.type.isElementNode(e)){r=e.ownerDocument;e=BX.pos(e)}var o=e["left"],s=e["bottom"];var a=BX.GetWindowScrollPos(r);var l=BX.GetWindowInnerSize(r);if(l.innerWidth+a.scrollLeft-(e["left"]+t)<0){if(e["right"]-t>=0)o=e["right"]-t;else o=a.scrollLeft}if(l.innerHeight+a.scrollTop-(e["bottom"]+n)<0||~i.indexOf("top")){if(e["top"]-n>=0||~i.indexOf("top"))s=e["top"]-n;else s=a.scrollTop}return{left:o,top:s}};BX.scrollToNode=function(e){var t=BX(e);if(t.scrollIntoView)t.scrollIntoView(true);else{var n=BX.pos(t);window.scrollTo(n.left,n.top)}};BX.showWait=function(e,t){e=BX(e)||document.body||document.documentElement;t=t||BX.message("JS_CORE_LOADING");var n=e.id||Math.random();var i=e.bxmsg=document.body.appendChild(BX.create("DIV",{props:{id:"wait_"+n},style:{background:'url("/bitrix/js/main/core/images/wait.gif") no-repeat scroll 10px center #fcf7d1',border:"1px solid #E1B52D",color:"black",fontFamily:"Verdana,Arial,sans-serif",fontSize:"11px",padding:"10px 30px 10px 37px",position:"absolute",zIndex:"10000",textAlign:"center"},text:t}));setTimeout(BX.delegate(_adjustWait,e),10);lastWait[lastWait.length]=i;return i};BX.closeWait=function(e,t){if(e&&!t)t=e.bxmsg;if(e&&!t&&BX.hasClass(e,"bx-core-waitwindow"))t=e;if(e&&!t)t=BX("wait_"+e.id);if(!t)t=lastWait.pop();if(t&&t.parentNode){for(var n=0,i=lastWait.length;n<i;n++){if(t==lastWait[n]){lastWait=BX.util.deleteFromArray(lastWait,n);break}}t.parentNode.removeChild(t);if(e)e.bxmsg=null;BX.cleanNode(t,true)}};BX.setJSList=function(e){if(BX.type.isArray(e)){e=e.map(function(e){return normalizeUrl(e)});jsList=jsList.concat(e)}};BX.getJSList=function(){initJsList();return jsList};BX.setCSSList=function(e){if(BX.type.isArray(e)){e=e.map(function(e){return normalizeUrl(e)});cssList=cssList.concat(e)}};BX.getCSSList=function(){initCssList();return cssList};BX.getJSPath=function(e){return e.replace(/^(http[s]*:)*\/\/[^\/]+/i,"")};BX.getCSSPath=function(e){return e.replace(/^(http[s]*:)*\/\/[^\/]+/i,"")};BX.getCDNPath=function(e){return e};BX.loadScript=function(e,t,n){if(BX.type.isString(e)){e=[e]}return BX.load(e,t,n)};BX.loadCSS=function(e,t,n){if(BX.type.isString(e)){e=[e]}if(BX.type.isArray(e)){e=e.map(function(e){return{url:e,ext:"css"}});BX.load(e,null,t)}};BX.load=function(e,t,n){if(!BX.isReady){var i=arguments;BX.ready(function(){BX.load.apply(this,i)});return null}n=n||document;if(isAsync===null){isAsync="async"in n.createElement("script")||"MozAppearance"in n.documentElement.style||window.opera}return isAsync?loadAsync(e,t,n):loadAsyncEmulation(e,t,n)};BX.convert={toNumber:function(e){if(BX.type.isNumber(e)){return e}e=Number(e);return!isNaN(e)?e:0},nodeListToArray:function(e){try{return Array.prototype.slice.call(e,0)}catch(r){var t=[];for(var n=0,i=e.length;n<i;n++){t.push(e[n])}return t}}};function loadAsync(e,t,n){if(!BX.type.isArray(e)){return}function i(e){e=e||assets;for(var t in e){if(e.hasOwnProperty(t)&&e[t].state!==LOADED){return false}}return true}if(!BX.type.isFunction(t)){t=null}var r={},o,s;for(s=0;s<e.length;s++){o=e[s];o=getAsset(o);r[o.name]=o}var a=false;for(s=0;s<e.length;s++){o=e[s];o=getAsset(o);load(o,function(){if(i(r)){if(!a){t&&t();a=true}}},n)}}function loadAsyncEmulation(e,t,n){function i(e){e.state=PRELOADED;if(BX.type.isArray(e.onpreload)&&e.onpreload){for(var t=0;t<e.onpreload.length;t++){e.onpreload[t].call()}}}function r(e){if(e.state===undefined){e.state=PRELOADING;e.onpreload=[];loadAsset({url:e.url,type:"cache",ext:e.ext},function(){i(e)},n)}}if(!BX.type.isArray(e)){return}if(!BX.type.isFunction(t)){t=null}var o=[].slice.call(e,1);for(var s=0;s<o.length;s++){r(getAsset(o[s]))}load(getAsset(e[0]),e.length===1?t:function(){loadAsyncEmulation.apply(null,[o,t,n])},n)}function load(e,t,n){t=t||BX.DoNothing;if(e.state===LOADED){t();return}if(e.state===PRELOADING){e.onpreload.push(function(){load(e,t,n)});return}e.state=LOADING;loadAsset(e,function(){e.state=LOADED;t()},n)}function loadAsset(e,t,n){t=t||BX.DoNothing;function i(e){s.onload=s.onreadystatechange=s.onerror=null;t()}function r(i){i=i||window.event;if(i.type==="load"||/loaded|complete/.test(s.readyState)&&(!n.documentMode||n.documentMode<9)){window.clearTimeout(e.errorTimeout);window.clearTimeout(e.cssTimeout);s.onload=s.onreadystatechange=s.onerror=null;t()}}function o(){if(e.state!==LOADED&&e.cssRetries<=20){for(var t=0,i=n.styleSheets.length;t<i;t++){if(n.styleSheets[t].href===s.href){r({type:"load"});return}}e.cssRetries++;e.cssTimeout=window.setTimeout(o,250)}}var s;var a=BX.type.isNotEmptyString(e.ext)?e.ext:BX.util.getExtension(e.url);if(a==="css"){s=n.createElement("link");s.type="text/"+(e.type||"css");s.rel="stylesheet";s.href=e.url;e.cssRetries=0;e.cssTimeout=window.setTimeout(o,500)}else{s=n.createElement("script");s.type="text/"+(e.type||"javascript");s.src=e.url}s.onload=s.onreadystatechange=r;s.onerror=i;s.async=false;s.defer=false;e.errorTimeout=window.setTimeout(function(){i({type:"timeout"})},7e3);if(a==="css"){cssList.push(normalizeMinUrl(normalizeUrl(e.url)))}else{jsList.push(normalizeMinUrl(normalizeUrl(e.url)))}var l=null;var u=n.head||n.getElementsByTagName("head")[0];if(a==="css"&&(l=getTemplateLink(u))!==null){l.parentNode.insertBefore(s,l)}else{u.insertBefore(s,u.lastChild)}}function getAsset(e){var t={};if(typeof e==="object"){t=e;t.name=t.name?t.name:BX.util.hashCode(e.url)}else{t={name:BX.util.hashCode(e),url:e}}var n=BX.type.isNotEmptyString(t.ext)?t.ext:BX.util.getExtension(t.url);if(n==="css"&&isCssLoaded(t.url)||isScriptLoaded(t.url)){t.state=LOADED}var i=assets[t.name];if(i&&i.url===t.url){return i}assets[t.name]=t;return t}function normalizeUrl(e){if(!BX.type.isNotEmptyString(e)){return""}e=BX.getJSPath(e);e=e.replace(/\?[0-9]*$/,"");return e}function normalizeMinUrl(e){if(!BX.type.isNotEmptyString(e)){return""}var t=e.indexOf(".min");return t>=0?e.substr(0,t)+e.substr(t+4):e}function isCssLoaded(e){initCssList();e=normalizeUrl(e);var t=normalizeMinUrl(e);return e!==t&&BX.util.in_array(t,cssList)||BX.util.in_array(e,cssList)}function initCssList(){if(!cssInit){var e=document.getElementsByTagName("link");if(!!e&&e.length>0){for(var t=0;t<e.length;t++){var n=e[t].getAttribute("href");if(BX.type.isNotEmptyString(n)){n=normalizeMinUrl(normalizeUrl(n));cssList.push(n)}}}cssInit=true}}function getTemplateLink(e){var t=function(t){var n=e.getElementsByTagName(t);for(var i=0,r=n.length;i<r;i++){var o=n[i].getAttribute("data-template-style");if(BX.type.isNotEmptyString(o)&&o=="true"){return n[i]}}return null};var n=t("link");if(n===null){n=t("style")}return n}function isScriptLoaded(e){initJsList();e=normalizeUrl(e);var t=normalizeMinUrl(e);return e!==t&&BX.util.in_array(t,jsList)||BX.util.in_array(e,jsList)}function initJsList(){if(!jsInit){var e=document.getElementsByTagName("script");if(!!e&&e.length>0){for(var t=0;t<e.length;t++){var n=e[t].getAttribute("src");if(BX.type.isNotEmptyString(n)){n=normalizeMinUrl(normalizeUrl(n));jsList.push(n)}}}jsInit=true}}BX.reload=function(e,t){if(e===true){t=true;e=null}var n=e||top.location.href;var i=n.indexOf("#"),r="";if(i!=-1){r=n.substr(i);n=n.substr(0,i)}if(t&&n.indexOf("clear_cache=Y")<0)n+=(n.indexOf("?")==-1?"?":"&")+"clear_cache=Y";if(r){if(t&&(r.substr(0,5)=="view/"||r.substr(0,6)=="#view/")&&r.indexOf("clear_cache%3DY")<0)r+=(r.indexOf("%3F")==-1?"%3F":"%26")+"clear_cache%3DY";n=n.replace(/(\?|\&)_r=[\d]*/,"");n+=(n.indexOf("?")==-1?"?":"&")+"_r="+Math.round(Math.random()*1e4)+r}top.location.href=n};BX.clearCache=function(){BX.showWait();BX.reload(true)};BX.template=function(e,t,n){BX.ready(function(){_processTpl(BX(e),t,n)})};BX.isAmPmMode=function(e){if(e===true){return BX.message.AMPM_MODE}return BX.message.AMPM_MODE!==false};BX.formatDate=function(e,t){e=e||new Date;var n=e.getHours()||e.getMinutes()||e.getSeconds(),i=!!t?t:n?BX.message("FORMAT_DATETIME"):BX.message("FORMAT_DATE");return i.replace(/YYYY/gi,e.getFullYear()).replace(/MMMM/gi,BX.util.str_pad_left((e.getMonth()+1).toString(),2,"0")).replace(/MM/gi,BX.util.str_pad_left((e.getMonth()+1).toString(),2,"0")).replace(/DD/gi,BX.util.str_pad_left(e.getDate().toString(),2,"0")).replace(/HH/gi,BX.util.str_pad_left(e.getHours().toString(),2,"0")).replace(/MI/gi,BX.util.str_pad_left(e.getMinutes().toString(),2,"0")).replace(/SS/gi,BX.util.str_pad_left(e.getSeconds().toString(),2,"0"))};BX.formatName=function(e,t,n){e=e||{};t=t||"";var i={TITLE:e["TITLE"]||"",NAME:e["NAME"]||"",LAST_NAME:e["LAST_NAME"]||"",SECOND_NAME:e["SECOND_NAME"]||"",LOGIN:e["LOGIN"]||"",NAME_SHORT:e["NAME"]?e["NAME"].substr(0,1)+".":"",LAST_NAME_SHORT:e["LAST_NAME"]?e["LAST_NAME"].substr(0,1)+".":"",SECOND_NAME_SHORT:e["SECOND_NAME"]?e["SECOND_NAME"].substr(0,1)+".":"",EMAIL:e["EMAIL"]||"",ID:e["ID"]||"",NOBR:"","/NOBR":""},r=t;for(var o in i){if(i.hasOwnProperty(o)){r=r.replace("#"+o+"#",i[o])}}r=r.replace(/([\s]+)/gi," ").trim();if(r==""){r=n=="Y"?i["LOGIN"]:"";r=r==""?"Noname":r}return r};BX.getNumMonth=function(e){var t=["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"];var n=["january","february","march","april","may","june","july","august","september","october","november","december"];var r=e.toUpperCase();for(i=1;i<=12;i++){if(r==BX.message("MON_"+i).toUpperCase()||r==BX.message("MONTH_"+i).toUpperCase()||r==t[i-1].toUpperCase()||r==n[i-1].toUpperCase()){return i}}return e};BX.parseDate=function(e,t,n,i){if(BX.type.isNotEmptyString(e)){if(!n)n=BX.message("FORMAT_DATE");if(!i)i=BX.message("FORMAT_DATETIME");var r="";for(l=1;l<=12;l++){r=r+"|"+BX.message("MON_"+l)}var o=new RegExp("([0-9]+|[a-z]+"+r+")","ig");var s=e.match(o),a=n.match(/(DD|MI|MMMM|MM|M|YYYY)/gi),l,u,f=[],c=[],d={};if(!s)return null;if(s.length>a.length){a=i.match(/(DD|MI|MMMM|MM|M|YYYY|HH|H|SS|TT|T|GG|G)/gi)}for(l=0,u=s.length;l<u;l++){if(BX.util.trim(s[l])!=""){f[f.length]=s[l]}}for(l=0,u=a.length;l<u;l++){if(BX.util.trim(a[l])!=""){c[c.length]=a[l]}}var p=BX.util.array_search("MMMM",c);if(p>0){f[p]=BX.getNumMonth(f[p]);c[p]="MM"}else{p=BX.util.array_search("M",c);if(p>0){f[p]=BX.getNumMonth(f[p]);c[p]="MM"}}for(l=0,u=c.length;l<u;l++){var h=c[l].toUpperCase();d[h]=h=="T"||h=="TT"?f[l]:parseInt(f[l],10)}if(d["DD"]>0&&d["MM"]>0&&d["YYYY"]>0){var m=new Date;if(t){m.setUTCDate(1);m.setUTCFullYear(d["YYYY"]);m.setUTCMonth(d["MM"]-1);m.setUTCDate(d["DD"]);m.setUTCHours(0,0,0,0)}else{m.setDate(1);m.setFullYear(d["YYYY"]);m.setMonth(d["MM"]-1);m.setDate(d["DD"]);m.setHours(0,0,0,0)}if((!isNaN(d["HH"])||!isNaN(d["GG"])||!isNaN(d["H"])||!isNaN(d["G"]))&&!isNaN(d["MI"])){if(!isNaN(d["H"])||!isNaN(d["G"])){var B=(d["T"]||d["TT"]||"am").toUpperCase()=="PM";var y=parseInt(d["H"]||d["G"]||0,10);if(B){d["HH"]=y+(y==12?0:12)}else{d["HH"]=y<12?y:0}}else{d["HH"]=parseInt(d["HH"]||d["GG"]||0,10)}if(isNaN(d["SS"]))d["SS"]=0;if(t){m.setUTCHours(d["HH"],d["MI"],d["SS"])}else{m.setHours(d["HH"],d["MI"],d["SS"])}}return m}}return null};BX.selectUtils={addNewOption:function(e,t,n,i,r){e=BX(e);if(e){var o=e.length;if(r!==false){for(var s=0;s<o;s++){if(e[s].value==t){return}}}e.options[o]=new Option(n,t,false,false)}if(i===true){this.sortSelect(e)}},deleteOption:function(e,t){e=BX(e);if(e){for(var n=0;n<e.length;n++){if(e[n].value==t){e.remove(n);break}}}},deleteSelectedOptions:function(e){e=BX(e);if(e){var t=0;while(t<e.length){if(e[t].selected){e[t].selected=false;e.remove(t)}else{t++}}}},deleteAllOptions:function(e){e=BX(e);if(e){for(var t=e.length-1;t>=0;t--){e.remove(t)}}},optionCompare:function(e,t){var n=e.optText.toLowerCase();var i=t.optText.toLowerCase();if(n>i)return 1;if(n<i)return-1;return 0},sortSelect:function(e){e=BX(e);if(e){var t=[];var n=e.options.length;var i;for(i=0;i<n;i++){t[i]={optText:e[i].text,optValue:e[i].value}}t.sort(this.optionCompare);e.length=0;n=t.length;for(i=0;i<n;i++){e[i]=new Option(t[i].optText,t[i].optValue,false,false)}}},selectAllOptions:function(e){e=BX(e);if(e){var t=e.length;for(var n=0;n<t;n++){e[n].selected=true}}},selectOption:function(e,t){e=BX(e);if(e){var n=e.length;for(var i=0;i<n;i++){e[i].selected=e[i].value==t}}},addSelectedOptions:function(e,t,n,i){e=BX(e);if(!e)return;var r=e.length;for(var o=0;o<r;o++)if(e[o].selected)this.addNewOption(t,e[o].value,e[o].text,i,n)},moveOptionsUp:function(e){e=BX(e);if(!e)return;var t=e.length;for(var n=0;n<t;n++){if(e[n].selected&&n>0&&e[n-1].selected==false){var i=new Option(e[n].text,e[n].value);e[n]=new Option(e[n-1].text,e[n-1].value);e[n].selected=false;e[n-1]=i;e[n-1].selected=true}}},moveOptionsDown:function(e){e=BX(e);if(!e)return;var t=e.length;for(var n=t-1;n>=0;n--){if(e[n].selected&&n<t-1&&e[n+1].selected==false){var i=new Option(e[n].text,e[n].value);e[n]=new Option(e[n+1].text,e[n+1].value);e[n].selected=false;e[n+1]=i;e[n+1].selected=true}}}};BX.getEventTarget=function(e){if(e.target){return e.target}else if(e.srcElement){return e.srcElement}return null};BX.hint=function(e,t,n,i){if(null==n){n=t;t=""}if(null==e.BXHINT){e.BXHINT=new BX.CHint({parent:e,hint:n,title:t,id:i});e.BXHINT.Show()}};BX.hint_replace=function(e,t,n){if(null==n){n=t;t=""}if(!e||!e.parentNode||!n)return null;var i=new BX.CHint({hint:n,title:t});i.CreateParent();e.parentNode.insertBefore(i.PARENT,e);e.parentNode.removeChild(e);i.PARENT.style.marginLeft="5px";return e};BX.CHint=function(e){this.PARENT=BX(e.parent);this.HINT=e.hint;this.HINT_TITLE=e.title;this.PARAMS={};for(var t in this.defaultSettings){if(null==e[t])this.PARAMS[t]=this.defaultSettings[t];else this.PARAMS[t]=e[t]}if(null!=e.id)this.ID=e.id;this.timer=null;this.bInited=false;this.msover=true;if(this.PARAMS.showOnce){this.__show();this.msover=false;this.timer=setTimeout(BX.proxy(this.__hide,this),this.PARAMS.hide_timeout)}else if(this.PARENT){BX.bind(this.PARENT,"mouseover",BX.proxy(this.Show,this));BX.bind(this.PARENT,"mouseout",BX.proxy(this.Hide,this))}BX.addCustomEvent("onMenuOpen",BX.delegate(this.disable,this));BX.addCustomEvent("onMenuClose",BX.delegate(this.enable,this))};BX.CHint.prototype.defaultSettings={show_timeout:1e3,hide_timeout:500,dx:2,showOnce:false,preventHide:true,min_width:250};BX.CHint.prototype.CreateParent=function(e,t){if(this.PARENT){BX.unbind(this.PARENT,"mouseover",BX.proxy(this.Show,this));BX.unbind(this.PARENT,"mouseout",BX.proxy(this.Hide,this))}if(!t)t={};var n="icon";if(t.type&&(t.type=="link"||t.type=="icon"))n=t.type;if(e)n="element";if(n=="icon"){e=BX.create("IMG",{props:{src:t.iconSrc?t.iconSrc:"/bitrix/js/main/core/images/hint.gif"}})}else if(n=="link"){e=BX.create("A",{props:{href:"javascript:void(0)"},html:"[?]"})}this.PARENT=e;BX.bind(this.PARENT,"mouseover",BX.proxy(this.Show,this));BX.bind(this.PARENT,"mouseout",BX.proxy(this.Hide,this));return this.PARENT};BX.CHint.prototype.Show=function(){this.msover=true;if(null!=this.timer)clearTimeout(this.timer);this.timer=setTimeout(BX.proxy(this.__show,this),this.PARAMS.show_timeout)};BX.CHint.prototype.Hide=function(){this.msover=false;if(null!=this.timer)clearTimeout(this.timer);this.timer=setTimeout(BX.proxy(this.__hide,this),this.PARAMS.hide_timeout)};BX.CHint.prototype.__show=function(){if(!this.msover||this.disabled)return;if(!this.bInited)this.Init();if(this.prepareAdjustPos()){this.DIV.style.display="block";this.adjustPos();BX.bind(window,"scroll",BX.proxy(this.__onscroll,this));if(this.PARAMS.showOnce){this.timer=setTimeout(BX.proxy(this.__hide,this),this.PARAMS.hide_timeout)}}};BX.CHint.prototype.__onscroll=function(){if(!BX.admin||!BX.admin.panel||!BX.admin.panel.isFixed())return;if(this.scrollTimer)clearTimeout(this.scrollTimer);this.DIV.style.display="none";this.scrollTimer=setTimeout(BX.proxy(this.Reopen,this),this.PARAMS.show_timeout)};BX.CHint.prototype.Reopen=function(){if(null!=this.timer)clearTimeout(this.timer);this.timer=setTimeout(BX.proxy(this.__show,this),50)};BX.CHint.prototype.__hide=function(){if(this.msover)return;if(!this.bInited)return;BX.unbind(window,"scroll",BX.proxy(this.Reopen,this));if(this.PARAMS.showOnce){this.Destroy()}else{this.DIV.style.display="none"}};BX.CHint.prototype.__hide_immediately=function(){this.msover=false;this.__hide()};BX.CHint.prototype.Init=function(){this.DIV=document.body.appendChild(BX.create("DIV",{props:{className:"bx-panel-tooltip"},style:{display:"none"},children:[BX.create("DIV",{props:{className:"bx-panel-tooltip-top-border"},html:'<div class="bx-panel-tooltip-corner bx-panel-tooltip-left-corner"></div><div class="bx-panel-tooltip-border"></div><div class="bx-panel-tooltip-corner bx-panel-tooltip-right-corner"></div>'}),this.CONTENT=BX.create("DIV",{props:{className:"bx-panel-tooltip-content"},children:[BX.create("DIV",{props:{className:"bx-panel-tooltip-underlay"},children:[BX.create("DIV",{props:{className:"bx-panel-tooltip-underlay-bg"}})]})]}),BX.create("DIV",{props:{className:"bx-panel-tooltip-bottom-border"},html:'<div class="bx-panel-tooltip-corner bx-panel-tooltip-left-corner"></div><div class="bx-panel-tooltip-border"></div><div class="bx-panel-tooltip-corner bx-panel-tooltip-right-corner"></div>'})]}));if(this.ID){this.CONTENT.insertBefore(BX.create("A",{attrs:{href:"javascript:void(0)"},props:{className:"bx-panel-tooltip-close"},events:{click:BX.delegate(this.Close,this)}}),this.CONTENT.firstChild)}if(this.HINT_TITLE){this.CONTENT.appendChild(BX.create("DIV",{props:{className:"bx-panel-tooltip-title"},text:this.HINT_TITLE}))}if(this.HINT){this.CONTENT_TEXT=this.CONTENT.appendChild(BX.create("DIV",{props:{className:"bx-panel-tooltip-text"}})).appendChild(BX.create("SPAN",{html:this.HINT}))}if(this.PARAMS.preventHide){BX.bind(this.DIV,"mouseout",BX.proxy(this.Hide,this));BX.bind(this.DIV,"mouseover",BX.proxy(this.Show,this))}this.bInited=true};BX.CHint.prototype.setContent=function(e){this.HINT=e;if(this.CONTENT_TEXT)this.CONTENT_TEXT.innerHTML=this.HINT;else this.CONTENT_TEXT=this.CONTENT.appendChild(BX.create("DIV",{props:{className:"bx-panel-tooltip-text"}})).appendChild(BX.create("SPAN",{html:this.HINT}))};BX.CHint.prototype.prepareAdjustPos=function(){this._wnd={scrollPos:BX.GetWindowScrollPos(),scrollSize:BX.GetWindowScrollSize()};return BX.style(this.PARENT,"display")!="none"};BX.CHint.prototype.getAdjustPos=function(){var e={},t=BX.pos(this.PARENT),n=0;e.top=t.bottom+this.PARAMS.dx;if(BX.admin&&BX.admin.panel.DIV){n=BX.admin.panel.DIV.offsetHeight+this.PARAMS.dx;if(BX.admin.panel.isFixed()){n+=this._wnd.scrollPos.scrollTop}}if(e.top<n)e.top=n;else{if(e.top+this.DIV.offsetHeight>this._wnd.scrollSize.scrollHeight)e.top=t.top-this.PARAMS.dx-this.DIV.offsetHeight}e.left=t.left;if(t.left<this.PARAMS.dx)t.left=this.PARAMS.dx;else{var i=this.DIV.offsetWidth;var r=this._wnd.scrollSize.scrollWidth-i-this.PARAMS.dx;if(e.left>r)e.left=r}return e};BX.CHint.prototype.adjustWidth=function(){if(this.bWidthAdjusted)return;var e=this.DIV.offsetWidth,t=this.DIV.offsetHeight;if(e>this.PARAMS.min_width)e=Math.round(Math.sqrt(1.618*e*t));if(e<this.PARAMS.min_width)e=this.PARAMS.min_width;this.DIV.style.width=e+"px";if(this._adjustWidthInt)clearInterval(this._adjustWidthInt);this._adjustWidthInt=setInterval(BX.delegate(this._adjustWidthInterval,this),5);this.bWidthAdjusted=true};BX.CHint.prototype._adjustWidthInterval=function(){if(!this.DIV||this.DIV.style.display=="none")clearInterval(this._adjustWidthInt);var e=20,t=1500,n=this.DIV.offsetWidth,i=this.CONTENT_TEXT.offsetWidth;if(n>0&&i>0&&n-i<e&&n<t){this.DIV.style.width=n+e+"px";return}clearInterval(this._adjustWidthInt)};BX.CHint.prototype.adjustPos=function(){this.adjustWidth();var e=this.getAdjustPos();this.DIV.style.top=e.top+"px";this.DIV.style.left=e.left+"px"};BX.CHint.prototype.Close=function(){if(this.ID&&BX.WindowManager)BX.WindowManager.saveWindowOptions(this.ID,{display:"off"});this.__hide_immediately();this.Destroy()};BX.CHint.prototype.Destroy=function(){if(this.PARENT){BX.unbind(this.PARENT,"mouseover",BX.proxy(this.Show,this));BX.unbind(this.PARENT,"mouseout",BX.proxy(this.Hide,this))}if(this.DIV){BX.unbind(this.DIV,"mouseover",BX.proxy(this.Show,this));BX.unbind(this.DIV,"mouseout",BX.proxy(this.Hide,this));BX.cleanNode(this.DIV,true)}};BX.CHint.prototype.enable=function(){this.disabled=false};BX.CHint.prototype.disable=function(){this.__hide_immediately();this.disabled=true};if(document.addEventListener){__readyHandler=function(){document.removeEventListener("DOMContentLoaded",__readyHandler,false);runReady()}}else if(document.attachEvent){__readyHandler=function(){if(document.readyState==="complete"){document.detachEvent("onreadystatechange",__readyHandler);runReady()}}}function bindReady(){if(!readyBound){readyBound=true;if(document.readyState==="complete"){return runReady()}if(document.addEventListener){document.addEventListener("DOMContentLoaded",__readyHandler,false);window.addEventListener("load",runReady,false)}else if(document.attachEvent){document.attachEvent("onreadystatechange",__readyHandler);window.attachEvent("onload",runReady);var e=false;try{e=window.frameElement==null}catch(e){}if(document.documentElement.doScroll&&e)doScrollCheck()}}return null}function runReady(){if(!BX.isReady){if(!document.body)return setTimeout(runReady,15);BX.isReady=true;if(readyList&&readyList.length>0){var e,t=0;while(readyList&&(e=readyList[t++])){try{e.call(document)}catch(e){BX.debug("BX.ready error: ",e)}}readyList=null}}return null}function doScrollCheck(){if(BX.isReady)return;try{document.documentElement.doScroll("left")}catch(e){setTimeout(doScrollCheck,1);return}runReady()}function _adjustWait(){if(!this.bxmsg)return;var e=BX.pos(this),t=e.top;if(t<BX.GetDocElement().scrollTop)t=BX.GetDocElement().scrollTop+5;this.bxmsg.style.top=t+5+"px";if(this==BX.GetDocElement()){this.bxmsg.style.right="5px"}else{this.bxmsg.style.left=e.right-this.bxmsg.offsetWidth-5+"px"}}function _checkDisplay(e,t){if(typeof t!="undefined")e.BXDISPLAY=t;var n=e.style.display||BX.style(e,"display");if(n!="none"){e.BXDISPLAY=e.BXDISPLAY||n;return true}else{e.BXDISPLAY=e.BXDISPLAY||"block";return false}}function _processTpl(e,t,n){if(e){if(n)e.parentNode.removeChild(e);var i={},r=BX.findChildren(e,{attribute:"data-role"},true);for(var o=0,s=r.length;o<s;o++){i[r[o].getAttribute("data-role")]=r[o]}t.apply(e,[i])}}function _checkNode(e,t){t=t||{};if(BX.type.isFunction(t))return t.call(window,e);if(!t.allowTextNodes&&!BX.type.isElementNode(e))return false;var n,i,r;for(n in t){if(t.hasOwnProperty(n)){switch(n){case"tag":case"tagName":if(BX.type.isString(t[n])){if(e.tagName.toUpperCase()!=t[n].toUpperCase())return false}else if(t[n]instanceof RegExp){if(!t[n].test(e.tagName))return false}break;case"class":case"className":if(BX.type.isString(t[n])){if(!BX.hasClass(e,t[n]))return false}else if(t[n]instanceof RegExp){if(!BX.type.isString(e.className)||!t[n].test(e.className))return false}break;case"attr":case"attrs":case"attribute":if(BX.type.isString(t[n])){if(!e.getAttribute(t[n]))return false}else if(BX.type.isArray(t[n])){for(i=0,r=t[n].length;i<r;i++){if(t[n][i]&&!e.getAttribute(t[n][i]))return false}}else{for(i in t[n]){if(t[n].hasOwnProperty(i)){var o=e.getAttribute(i);if(t[n][i]instanceof RegExp){if(!BX.type.isString(o)||!t[n][i].test(o)){return false}}else{if(o!=""+t[n][i]){return false}}}}}break;case"property":case"props":if(BX.type.isString(t[n])){if(!e[t[n]])return false}else if(BX.type.isArray(t[n])){for(i=0,r=t[n].length;i<r;i++){if(t[n][i]&&!e[t[n][i]])return false}}else{for(i in t[n]){if(BX.type.isString(t[n][i])){if(e[i]!=t[n][i])return false}else if(t[n][i]instanceof RegExp){if(!BX.type.isString(e[i])||!t[n][i].test(e[i]))return false}}}break;case"callback":return t[n](e)}}}return true}function Trash(){var e,t;for(e=0,t=garbageCollectors.length;e<t;e++){try{garbageCollectors[e].callback.apply(garbageCollectors[e].context||window);delete garbageCollectors[e];garbageCollectors[e]=null}catch(e){}}}if(window.attachEvent)window.attachEvent("onunload",Trash);else if(window.addEventListener)window.addEventListener("unload",Trash,false);else window.onunload=Trash;BX(BX.DoNothing);window.BX=BX;BX.browser.addGlobalClass();BX.data=function(e,t,n){if(typeof e=="undefined")return undefined;if(typeof t=="undefined")return undefined;if(typeof n!="undefined"){dataStorage.set(e,t,n)}else{var i;if((i=dataStorage.get(e,t))!=undefined){return i}else{if("getAttribute"in e){i=e.getAttribute("data-"+t.toString());if(i===null){return undefined}return i}}return undefined}};BX.DataStorage=function(){this.keyOffset=1;this.data={};this.uniqueTag="BX-"+Math.random();this.resolve=function(e,t){if(typeof e[this.uniqueTag]=="undefined")if(t){try{Object.defineProperty(e,this.uniqueTag,{value:this.keyOffset++})}catch(t){e[this.uniqueTag]=this.keyOffset++}}else return undefined;return e[this.uniqueTag]};this.get=function(e,t){if(e!=document&&!BX.type.isElementNode(e)||typeof t=="undefined")return undefined;e=this.resolve(e,false);if(typeof e=="undefined"||typeof this.data[e]=="undefined")return undefined;return this.data[e][t]};this.set=function(e,t,n){if(e!=document&&!BX.type.isElementNode(e)||typeof n=="undefined")return;var i=this.resolve(e,true);if(typeof this.data[i]=="undefined")this.data[i]={};this.data[i][t]=n}};var dataStorage=new BX.DataStorage;BX.LazyLoad={images:[],imageStatus:{hidden:-2,error:-1,undefined:0,inited:1,loaded:2},imageTypes:{image:1,background:2},registerImage:function(e,t,n){n=n||{};if(BX.type.isNotEmptyString(e)){this.images.push({id:e,node:null,src:null,dataSrcName:n.dataSrcName||"src",type:null,func:BX.type.isFunction(t)?t:null,status:this.imageStatus.undefined})}},registerImages:function(e,t,n){if(BX.type.isArray(e)){for(var i=0,r=e.length;i<r;i++){this.registerImage(e[i],t,n)}}},showImages:function(e){var t=null;var n=false;e=e!==false;for(var i=0,r=this.images.length;i<r;i++){t=this.images[i];if(t.status==this.imageStatus.undefined){this.initImage(t)}if(t.status!==this.imageStatus.inited){continue}if(!t.node||!t.node.parentNode){t.node=null;t.status=this.imageStatus.error;continue}n=true;if(e&&t.func){n=t.func(t)}if(n===true&&this.isElementVisibleOnScreen(t.node)){if(t.type==this.imageTypes.image){t.node.src=t.src}else{t.node.style.backgroundImage="url('"+t.src+"')"}t.node.dataset[t.dataSrcName]="";t.status=this.imageStatus.loaded}}},initImage:function(e){e.status=this.imageStatus.error;var t=BX(e.id);if(t){var n=t.dataset[e.dataSrcName];if(BX.type.isNotEmptyString(n)){e.node=t;e.src=n;e.status=this.imageStatus.inited;e.type=e.node.tagName.toLowerCase()=="img"?this.imageTypes.image:this.imageTypes.background}}},isElementVisibleOnScreen:function(e){var t=this.getElementCoords(e);var n=window.pageYOffset||document.documentElement.scrollTop;var i=n+document.documentElement.clientHeight;t.bottom=t.top+e.offsetHeight;var r=t.top>n&&t.top<i;var o=t.bottom<i&&t.bottom>n;return r||o},isElementVisibleOn2Screens:function(e){var t=this.getElementCoords(e);var n=document.documentElement.clientHeight;var i=window.pageYOffset||document.documentElement.scrollTop;var r=i+n;t.bottom=t.top+e.offsetHeight;i-=n;r+=n;var o=t.top>i&&t.top<r;var s=t.bottom<r&&t.bottom>i;return o||s},getElementCoords:function(e){var t=e.getBoundingClientRect();return{originTop:t.top,originLeft:t.left,top:t.top+window.pageYOffset,left:t.left+window.pageXOffset}},onScroll:function(){BX.LazyLoad.showImages()},clearImages:function(){this.images=[]}};BX.getCookie=function(e){var t=document.cookie.match(new RegExp("(?:^|; )"+e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,"\\$1")+"=([^;]*)"));return t?decodeURIComponent(t[1]):undefined};BX.setCookie=function(e,t,n){n=n||{};var i=n.expires;if(typeof i=="number"&&i){var r=new Date;r.setTime(r.getTime()+i*1e3);i=n.expires=r}if(i&&i.toUTCString){n.expires=i.toUTCString()}t=encodeURIComponent(t);var o=e+"="+t;for(var s in n){if(!n.hasOwnProperty(s)){continue}o+="; "+s;var a=n[s];if(a!==true){o+="="+a}}document.cookie=o;return true};BX.FixFontSize=function(e){var t,n,i;this.node=null;this.prevWindowSize=0;this.prevWrapperSize=0;this.mainWrapper=null;this.textWrapper=null;this.objList=e.objList;this.minFontSizeList=[];this.minFontSize=0;if(e.onresize){this.prevWindowSize=window.innerWidth||document.documentElement.clientWidth;BX.bind(window,"resize",BX.proxy(BX.throttle(this.onResize,350),this))}if(e.onAdaptiveResize){t=this.objList[0].scaleBy||this.objList[0].node;n=getComputedStyle(t);this.prevWrapperSize=parseInt(n["width"])-parseInt(n["paddingLeft"])-parseInt(n["paddingRight"]);BX.bind(window,"resize",BX.proxy(BX.throttle(this.onAdaptiveResize,350),this))}this.createTestNodes();this.decrease()};BX.FixFontSize.prototype={createTestNodes:function(){this.textWrapper=BX.create("div",{style:{display:"inline-block",whiteSpace:"nowrap"}});this.mainWrapper=BX.create("div",{style:{height:0,overflow:"hidden"},children:[this.textWrapper]})},insertTestNodes:function(){document.body.appendChild(this.mainWrapper)},removeTestNodes:function(){document.body.removeChild(this.mainWrapper)},decrease:function(){var e,t,n,i;this.insertTestNodes();for(var r=this.objList.length-1;r>=0;r--){n=this.objList[r].scaleBy||this.objList[r].node;i=getComputedStyle(n);e=parseInt(i["width"])-parseInt(i["paddingLeft"])-parseInt(i["paddingRight"]);t=parseInt(getComputedStyle(this.objList[r].node)["font-size"]);this.textWrapperSetStyle(this.objList[r].node);if(this.textWrapperInsertText(this.objList[r].node)){while(this.textWrapper.offsetWidth>e&&t>0){this.textWrapper.style.fontSize=--t+"px"}if(this.objList[r].smallestValue){this.minFontSize=this.minFontSize?Math.min(this.minFontSize,t):t;this.minFontSizeList.push(this.objList[r].node)}else{this.objList[r].node.style.fontSize=t+"px"}}}if(this.minFontSizeList.length>0)this.setMinFont();this.removeTestNodes()},increase:function(){this.insertTestNodes();var e,t,n,i;this.insertTestNodes();for(var r=this.objList.length-1;r>=0;r--){n=this.objList[r].scaleBy||this.objList[r].node;i=getComputedStyle(n);e=parseInt(i["width"])-parseInt(i["paddingLeft"])-parseInt(i["paddingRight"]);t=parseInt(getComputedStyle(this.objList[r].node)["font-size"]);this.textWrapperSetStyle(this.objList[r].node);if(this.textWrapperInsertText(this.objList[r].node)){while(this.textWrapper.offsetWidth<e&&t<this.objList[r].maxFontSize){this.textWrapper.style.fontSize=++t+"px"}t--;if(this.objList[r].smallestValue){this.minFontSize=this.minFontSize?Math.min(this.minFontSize,t):t;this.minFontSizeList.push(this.objList[r].node)}else{this.objList[r].node.style.fontSize=t+"px"}}}if(this.minFontSizeList.length>0)this.setMinFont();this.removeTestNodes()},setMinFont:function(){for(var e=this.minFontSizeList.length-1;e>=0;e--){this.minFontSizeList[e].style.fontSize=this.minFontSize+"px"}this.minFontSize=0},onResize:function(){var e=window.innerWidth||document.documentElement.clientWidth;if(this.prevWindowSize>e)this.decrease();else if(this.prevWindowSize<e)this.increase();this.prevWindowSize=e},onAdaptiveResize:function(){var e=this.objList[0].scaleBy||this.objList[0].node,t=getComputedStyle(e),n=parseInt(t["width"])-parseInt(t["paddingLeft"])-parseInt(t["paddingRight"]);if(this.prevWrapperSize>n)this.decrease();else if(this.prevWrapperSize<n)this.increase();this.prevWrapperSize=n},textWrapperInsertText:function(e){if(e.textContent){this.textWrapper.textContent=e.textContent;return true}else if(e.innerText){this.textWrapper.innerText=e.innerText;return true}else{return false}},textWrapperSetStyle:function(e){this.textWrapper.style.fontFamily=getComputedStyle(e)["font-family"];this.textWrapper.style.fontSize=getComputedStyle(e)["font-size"];this.textWrapper.style.fontStyle=getComputedStyle(e)["font-style"];this.textWrapper.style.fontWeight=getComputedStyle(e)["font-weight"];this.textWrapper.style.lineHeight=getComputedStyle(e)["line-height"]}};BX.FixFontSize.init=function(e){return new BX.FixFontSize(e)};if(typeof BX.ParamBag==="undefined"){BX.ParamBag=function(){this._params={}};BX.ParamBag.prototype={initialize:function(e){this._params=e?e:{}},getParam:function(e,t){var n=this._params;return typeof n[e]!="undefined"?n[e]:t},setParam:function(e,t){this._params[e]=t},clear:function(){this._params={}}};BX.ParamBag.create=function(e){var t=new BX.ParamBag;t.initialize(e);return t}}})(window);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:55:"/bitrix/js/main/core/core_promise.min.js?15574741992490";s:6:"source";s:36:"/bitrix/js/main/core/core_promise.js";s:3:"min";s:40:"/bitrix/js/main/core/core_promise.min.js";s:3:"map";s:40:"/bitrix/js/main/core/core_promise.map.js";}"*/
(function(t){if(!t.BX){t.BX={}}var e=t.BX;e.Promise=function(t,e){this.state=null;this.value=null;this.reason=null;this.next=null;this.ctx=e||this;this.onFulfilled=[];this.onRejected=[]};e.Promise.prototype.fulfill=function(t){this.checkState();this.value=t;this.state=true;this.execute()};e.Promise.prototype.reject=function(t){this.checkState();this.reason=t;this.state=false;this.execute()};e.Promise.prototype.then=function(t,i){if(typeof t=="function"||t instanceof Function){this.onFulfilled.push(t)}if(typeof i=="function"||i instanceof Function){this.onRejected.push(i)}if(this.next===null){this.next=new e.Promise(null,this.ctx)}if(this.state!==null){this.execute()}return this.next};e.Promise.prototype.catch=function(t){if(typeof t=="function"||t instanceof Function){this.onRejected.push(t)}if(this.next===null){this.next=new e.Promise(null,this.ctx)}if(this.state!==null){this.execute()}return this.next};e.Promise.prototype.setAutoResolve=function(t,e){this.timer=setTimeout(function(){if(this.state===null){this[t?"fulfill":"reject"]()}}.bind(this),e||15)};e.Promise.prototype.cancelAutoResolve=function(){clearTimeout(this.timer)};e.Promise.prototype.resolve=function(t){var e=this;if(this===t){this.reject(new TypeError("Promise cannot fulfill or reject itself"))}else if(t&&t.toString()==="[object BX.Promise]"){t.then(function(t){e.fulfill(t)},function(t){e.reject(t)})}else{this.fulfill(t)}};e.Promise.prototype.toString=function(){return"[object BX.Promise]"};e.Promise.prototype.execute=function(){if(this.state===null){return}var i=undefined;var n=undefined;var o=undefined;var s;if(this.state===true){if(this.onFulfilled.length){try{for(s=0;s<this.onFulfilled.length;s++){o=this.onFulfilled[s].apply(this.ctx,[this.value]);if(typeof o!="undefined"){i=o}}}catch(i){if("console"in t){console.dir(i)}if(typeof e.debug!=="undefined"){e.debug(i)}n=i}}else{i=this.value}}else if(this.state===false){if(this.onRejected.length){try{for(s=0;s<this.onRejected.length;s++){o=this.onRejected[s].apply(this.ctx,[this.reason]);if(typeof o!="undefined"){i=o}}}catch(i){if("console"in t){console.dir(i)}if(typeof e.debug!=="undefined"){e.debug(i)}n=i}}else{n=this.reason}}if(this.next!==null){if(typeof n!="undefined"){this.next.reject(n)}else if(typeof i!="undefined"){this.next.resolve(i)}}};e.Promise.prototype.checkState=function(){if(this.state!==null){throw new Error("You can not do fulfill() or reject() multiple times")}}})(window);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:53:"/bitrix/js/main/core/core_ajax.min.js?155747419824054";s:6:"source";s:33:"/bitrix/js/main/core/core_ajax.js";s:3:"min";s:37:"/bitrix/js/main/core/core_ajax.min.js";s:3:"map";s:37:"/bitrix/js/main/core/core_ajax.map.js";}"*/
(function(e){if(e.BX.ajax)return;var a=e.BX,t={},r={method:"GET",dataType:"html",timeout:0,async:true,processData:true,scriptsRunFirst:false,emulateOnload:true,skipAuthCheck:false,start:true,cache:true,preparePost:true,headers:false,lsTimeout:30,lsForce:false},s=null,i={},n=[],o={url_utf:/[^\034-\254]+/g,script_self:/\/bitrix\/js\/main\/core\/core(_ajax)*.js$/i,script_self_window:/\/bitrix\/js\/main\/core\/core_window.js$/i,script_self_admin:/\/bitrix\/js\/main\/core\/core_admin.js$/i,script_onload:/window.onload/g};a.ajax=function(e){var s,i;if(!e||!e.url||!a.type.isString(e.url)){return false}for(var n in t)if(typeof e[n]=="undefined")e[n]=t[n];t={};for(n in r)if(typeof e[n]=="undefined")e[n]=r[n];e.method=e.method.toUpperCase();if(!a.localStorage)e.lsId=null;if(a.browser.IsIE()){var u=o.url_utf.exec(e.url);if(u){do{e.url=e.url.replace(u,a.util.urlencode(u));u=o.url_utf.exec(e.url)}while(u)}}if(e.dataType=="json")e.emulateOnload=false;if(!e.cache&&e.method=="GET")e.url=a.ajax._uncache(e.url);if(e.method=="POST"&&e.preparePost){e.data=a.ajax.prepareData(e.data)}var l=true;if(e.lsId&&!e.lsForce){var c=a.localStorage.get("ajax-"+e.lsId);if(c!==null){l=false;var f=function(t){if(t.key=="ajax-"+e.lsId&&t.value!="BXAJAXWAIT"){var r=t.value,s=!!t.oldValue&&r==null;if(!s)a.ajax.__run(e,r);else if(e.onfailure)e.onfailure("timeout");a.removeCustomEvent("onLocalStorageChange",f)}};if(c=="BXAJAXWAIT"){a.addCustomEvent("onLocalStorageChange",f)}else{setTimeout(function(){f({key:"ajax-"+e.lsId,value:c})},10)}}}if(l){e.xhr=a.ajax.xhr();if(!e.xhr)return;if(e.lsId){a.localStorage.set("ajax-"+e.lsId,"BXAJAXWAIT",e.lsTimeout)}e.xhr.open(e.method,e.url,e.async);if(!e.skipBxHeader&&!a.ajax.isCrossDomain(e.url)){e.xhr.setRequestHeader("Bx-ajax","true")}if(e.method=="POST"&&e.preparePost){e.xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded")}if(typeof e.headers=="object"){for(n=0;n<e.headers.length;n++)e.xhr.setRequestHeader(e.headers[n].name,e.headers[n].value)}if(!!e.onprogress){a.bind(e.xhr,"progress",e.onprogress)}var d=false;var p=e.xhr.onreadystatechange=function(t){if(d)return;if(t==="timeout"){if(e.onfailure){e.onfailure("timeout")}a.onCustomEvent(e.xhr,"onAjaxFailure",["timeout","",e]);e.xhr.onreadystatechange=a.DoNothing;e.xhr.abort();if(e.async){e.xhr=null}}else{if(e.xhr.readyState==4||t=="run"){s=a.ajax.xhrSuccess(e.xhr)?"success":"error";d=true;e.xhr.onreadystatechange=a.DoNothing;if(s=="success"){var r=!!e.skipAuthCheck||a.ajax.isCrossDomain(e.url)?false:e.xhr.getResponseHeader("X-Bitrix-Ajax-Status");if(!!r&&r=="Authorize"){if(e.onfailure){e.onfailure("auth",e.xhr.status)}a.onCustomEvent(e.xhr,"onAjaxFailure",["auth",e.xhr.status,e])}else{var i=e.xhr.responseText;if(e.lsId){a.localStorage.set("ajax-"+e.lsId,i,e.lsTimeout)}a.ajax.__run(e,i)}}else{if(e.onfailure){e.onfailure("status",e.xhr.status)}a.onCustomEvent(e.xhr,"onAjaxFailure",["status",e.xhr.status,e])}if(e.async){e.xhr=null}}}};if(e.async&&e.timeout>0){setTimeout(function(){if(e.xhr&&!d){p("timeout")}},e.timeout*1e3)}if(e.start){e.xhr.send(e.data);if(!e.async){p("run")}}return e.xhr}};a.ajax.xhr=function(){if(e.XMLHttpRequest){try{return new XMLHttpRequest}catch(e){}}else if(e.ActiveXObject){try{return new e.ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(e){}try{return new e.ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(e){}try{return new e.ActiveXObject("Msxml2.XMLHTTP")}catch(e){}try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(e){}throw new Error("This browser does not support XMLHttpRequest.")}return null};a.ajax.isCrossDomain=function(t,r){r=r||e.location;if(t.indexOf("//")===0){t=r.protocol+t}if(t.indexOf("http")!==0){return false}var s=e.document.createElement("a");s.href=t;return s.protocol!==r.protocol||s.hostname!==r.hostname||a.ajax.getHostPort(s.protocol,s.host)!==a.ajax.getHostPort(r.protocol,r.host)};a.ajax.getHostPort=function(e,a){var t=/:(\d+)$/.exec(a);if(t){return t[1]}else{if(e==="http:"){return"80"}else if(e==="https:"){return"443"}}return""};a.ajax.__prepareOnload=function(t){if(t.length>0){a.ajax["onload_"+s]=null;for(var r=0,i=t.length;r<i;r++){if(t[r].isInternal){t[r].JS=t[r].JS.replace(o.script_onload,"BX.ajax.onload_"+s)}}}a.CaptureEventsGet();a.CaptureEvents(e,"load")};a.ajax.__runOnload=function(){if(null!=a.ajax["onload_"+s]){a.ajax["onload_"+s].apply(e);a.ajax["onload_"+s]=null}var t=a.CaptureEventsGet();if(t){for(var r=0;r<t.length;r++)t[r].apply(e)}};a.ajax.__run=function(e,t){if(!e.processData){if(e.onsuccess){e.onsuccess(t)}a.onCustomEvent(e.xhr,"onAjaxSuccess",[t,e])}else{t=a.ajax.processRequestData(t,e)}};a.ajax._onParseJSONFailure=function(e){this.jsonFailure=true;this.jsonResponse=e;this.jsonProactive=/^\[WAF\]/.test(e)};a.ajax.processRequestData=function(e,t){var r,i=[],n=[];switch(t.dataType.toUpperCase()){case"JSON":a.addCustomEvent(t.xhr,"onParseJSONFailure",a.proxy(a.ajax._onParseJSONFailure,t));r=a.parseJSON(e,t.xhr);a.removeCustomEvent(t.xhr,"onParseJSONFailure",a.proxy(a.ajax._onParseJSONFailure,t));if(!!r&&a.type.isArray(r["bxjs"])){for(var o=0;o<r["bxjs"].length;o++){if(a.type.isNotEmptyString(r["bxjs"][o])){i.push({isInternal:false,JS:r["bxjs"][o],bRunFirst:t.scriptsRunFirst})}else{i.push(r["bxjs"][o])}}}if(!!r&&a.type.isArray(r["bxcss"])){n=r["bxcss"]}break;case"SCRIPT":i.push({isInternal:true,JS:e,bRunFirst:t.scriptsRunFirst});r=e;break;default:var u=a.processHTML(e,t.scriptsRunFirst);r=u.HTML;i=u.SCRIPT;n=u.STYLE;break}var l=false;if(null==s){s=parseInt(Math.random()*1e6);l=true}if(n.length>0)a.loadCSS(n);if(t.emulateOnload)a.ajax.__prepareOnload(i);var c=a.DoNothing;if(t.emulateOnload||l){c=a.defer(function(){if(t.emulateOnload)a.ajax.__runOnload();if(l)s=null;a.onCustomEvent(t.xhr,"onAjaxSuccessFinish",[t])})}try{if(!!t.jsonFailure){throw{type:"json_failure",data:t.jsonResponse,bProactive:t.jsonProactive}}t.scripts=i;a.ajax.processScripts(t.scripts,true);if(t.onsuccess){t.onsuccess(r)}a.onCustomEvent(t.xhr,"onAjaxSuccess",[r,t]);a.ajax.processScripts(t.scripts,false,c)}catch(e){if(t.onfailure)t.onfailure("processing",e);a.onCustomEvent(t.xhr,"onAjaxFailure",["processing",e,t])}};a.ajax.processScripts=function(e,t,r){var s=[],i="";r=r||a.DoNothing;for(var n=0,o=e.length;n<o;n++){if(typeof t!="undefined"&&t!=!!e[n].bRunFirst)continue;if(e[n].isInternal)i+=";"+e[n].JS;else s.push(e[n].JS)}s=a.util.array_unique(s);var u=i.length>0?function(){a.evalGlobal(i)}:a.DoNothing;if(s.length>0){a.load(s,function(){u();r()})}else{u();r()}};a.ajax.prepareData=function(e,t){var r="";if(a.type.isString(e))r=e;else if(null!=e){for(var s in e){if(e.hasOwnProperty(s)){if(r.length>0)r+="&";var i=a.util.urlencode(s);if(t)i=t+"["+i+"]";if(typeof e[s]=="object")r+=a.ajax.prepareData(e[s],i);else r+=i+"="+a.util.urlencode(e[s])}}}return r};a.ajax.xhrSuccess=function(e){return e.status>=200&&e.status<300||e.status===304||e.status===1223||e.status===0};a.ajax.Setup=function(e,a){a=!!a;for(var s in e){if(a)t[s]=e[s];else r[s]=e[s]}};a.ajax.replaceLocalStorageValue=function(e,t,r){if(!!a.localStorage)a.localStorage.set("ajax-"+e,t,r)};a.ajax._uncache=function(e){return e+((e.indexOf("?")!==-1?"&":"?")+"_="+(new Date).getTime())};a.ajax.get=function(e,t,r){if(a.type.isFunction(t)){r=t;t=""}t=a.ajax.prepareData(t);if(t){e+=(e.indexOf("?")!==-1?"&":"?")+t;t=""}return a.ajax({method:"GET",dataType:"html",url:e,data:"",onsuccess:r})};a.ajax.getCaptcha=function(e){return a.ajax.loadJSON("/bitrix/tools/ajax_captcha.php",e)};a.ajax.insertToNode=function(e,r){r=a(r);if(!!r){var s={cancel:false};a.onCustomEvent("onAjaxInsertToNode",[{url:e,node:r,eventArgs:s}]);if(s.cancel===true){return}var i=null;if(!t.denyShowWait){i=a.showWait(r);delete t.denyShowWait}return a.ajax.get(e,function(e){r.innerHTML=e;a.closeWait(r,i)})}};a.ajax.post=function(e,t,r){t=a.ajax.prepareData(t);return a.ajax({method:"POST",dataType:"html",url:e,data:t,onsuccess:r})};a.ajax.promise=function(e){var t=new a.Promise;e.onsuccess=function(e){t.fulfill(e)};e.onfailure=function(e,a){t.reject({reason:e,data:a})};e.onprogress=function(e){if(e.position==0&&e.totalSize==0){t.reject({reason:"progress",data:e})}};var r=a.ajax(e);if(r){if(typeof e.onrequeststart==="function"){e.onrequeststart(r)}}else{t.reject({reason:"init",data:false})}return t};a.ajax.loadScriptAjax=function(e,t,r){if(a.type.isArray(e)){for(var s=0,n=e.length;s<n;s++){a.ajax.loadScriptAjax(e[s],t,r)}}else{var u=e.replace(/\.js\?.*/,".js");if(o.script_self.test(u))return;if(o.script_self_window.test(u)&&a.CWindow)return;if(o.script_self_admin.test(u)&&a.admin)return;if(typeof i[u]=="undefined"){if(!!r){i[u]="";return a.loadScript(e)}else{return a.ajax({url:e,method:"GET",dataType:"script",processData:true,emulateOnload:false,scriptsRunFirst:true,async:false,start:true,onsuccess:function(e){i[u]=e;if(t)t(e)}})}}else if(t){t(i[u])}}};a.ajax.loadJSON=function(e,t,r,s){if(a.type.isFunction(t)){s=r;r=t;t=""}t=a.ajax.prepareData(t);if(t){e+=(e.indexOf("?")!==-1?"&":"?")+t;t=""}return a.ajax({method:"GET",dataType:"json",url:e,onsuccess:r,onfailure:s})};var u=function(e){var t=e.getParameters||{};if(a.type.isNotEmptyString(e.analyticsLabel)){t.analyticsLabel=e.analyticsLabel}else if(a.type.isNotEmptyObject(e.analyticsLabel)){t.analyticsLabel=e.analyticsLabel}if(typeof e.mode!=="undefined"){t.mode=e.mode}if(e.navigation){if(e.navigation.page){t.nav="page-"+e.navigation.page}if(e.navigation.size){if(t.nav){t.nav+="-"}else{t.nav=""}t.nav+="size-"+e.navigation.size}}return t};var l=function(e){e=a.type.isPlainObject(e)?e:{};if(e.data instanceof FormData){e.preparePost=false;e.data.append("sessid",a.bitrix_sessid());if(a.message.SITE_ID){e.data.append("SITE_ID",a.message.SITE_ID)}if(typeof e.signedParameters!=="undefined"){e.data.append("signedParameters",e.signedParameters)}}else{e.data=a.type.isPlainObject(e.data)?e.data:{};if(a.message.SITE_ID){e.data.SITE_ID=a.message.SITE_ID}e.data.sessid=a.bitrix_sessid();if(typeof e.signedParameters!=="undefined"){e.data.signedParameters=e.signedParameters}}if(!e.method){e.method="POST"}return e};var c=function(e,t){t=t||false;var r=a.clone(e);var s=a.ajax.promise(e);return s.then(function(e){if(!t&&a.type.isPlainObject(e)&&a.type.isArray(e.errors)){var s=false;e.errors.forEach(function(e){if(e.code==="invalid_csrf"&&e.customData.csrf){a.message({bitrix_sessid:e.customData.csrf});r.data.sessid=a.bitrix_sessid();s=true}});if(s){return c(r,true)}}if(!a.type.isPlainObject(e)||e.status!=="success"){var i=new a.Promise;i.reject(e);return i}return e}).catch(function(e){var t=new a.Promise;if(a.type.isPlainObject(e)&&e.status&&e.hasOwnProperty("data")){t.reject(e)}else{t.reject({status:"error",data:{ajaxRejectData:e},errors:[{code:"NETWORK_ERROR",message:"Network error"}]})}return t})};a.ajax.runAction=function(e,t){t=l(t);var r=u(t);r.action=e;var s="/bitrix/services/main/ajax.php?"+a.ajax.prepareData(r);return c({method:t.method,dataType:"json",url:s,data:t.data,timeout:t.timeout,preparePost:t.preparePost,headers:t.headers,onrequeststart:t.onrequeststart})};a.ajax.runComponentAction=function(e,t,r){r=l(r);r.mode=r.mode||"ajax";var s=u(r);s.c=e;s.action=t;var i="/bitrix/services/main/ajax.php?"+a.ajax.prepareData(s);return c({method:r.method,dataType:"json",url:i,data:r.data,timeout:r.timeout,preparePost:r.preparePost,headers:r.headers,onrequeststart:r.onrequeststart?r.onrequeststart:null})};a.ajax.load=function(e,t){if(!a.type.isArray(e))e=[e];var r=0;if(!a.type.isFunction(t))t=a.DoNothing;var s=function(e){if(a.type.isFunction(this.callback))this.callback(e);if(++r>=n)t()};for(var i=0,n=e.length;i<n;i++){switch(e[i].type.toUpperCase()){case"SCRIPT":a.loadScript([e[i].url],a.proxy(s,e[i]));break;case"CSS":a.loadCSS([e[i].url]);if(++r>=n)t();break;case"JSON":a.ajax.loadJSON(e[i].url,a.proxy(s,e[i]));break;default:a.ajax.get(e[i].url,"",a.proxy(s,e[i]));break}}};a.ajax.submit=function(e,t){if(!e.target){if(null==e.BXFormTarget){var r="formTarget_"+Math.random();e.BXFormTarget=document.body.appendChild(a.create("IFRAME",{props:{name:r,id:r,src:"javascript:void(0)"},style:{display:"none"}}))}e.target=e.BXFormTarget.name}e.BXFormCallback=t;a.bind(e.BXFormTarget,"load",a.proxy(a.ajax._submit_callback,e));a.submit(e);return false};a.ajax.submitComponentForm=function(t,r,s){if(!t.target){if(null==t.BXFormTarget){var i="formTarget_"+Math.random();t.BXFormTarget=document.body.appendChild(a.create("IFRAME",{props:{name:i,id:i,src:"javascript:void(0)"},style:{display:"none"}}))}t.target=t.BXFormTarget.name}if(!!s)var n=a.showWait(r);t.BXFormCallback=function(t){if(!!s)a.closeWait(n);var i=function(){if(!!e.bxcompajaxframeonload){setTimeout(function(){e.bxcompajaxframeonload();e.bxcompajaxframeonload=null},10)}};a(r).innerHTML=t;a.onCustomEvent("onAjaxSuccess",[null,null,i])};a.bind(t.BXFormTarget,"load",a.proxy(a.ajax._submit_callback,t));return true};a.ajax._submit_callback=function(){try{if(this.BXFormTarget.contentWindow.location.href.indexOf("http")!=0)return}catch(e){return}if(this.BXFormCallback)this.BXFormCallback.apply(this,[this.BXFormTarget.contentWindow.document.body.innerHTML]);a.unbindAll(this.BXFormTarget)};a.ajax.prepareForm=function(e,a){a=!!a?a:{};var t,r,s,i=[],n=e.elements.length,o=0,u=0;if(!!e){for(t=0;t<n;t++){s=e.elements[t];if(s.disabled)continue;if(!s.type)continue;switch(s.type.toLowerCase()){case"text":case"textarea":case"password":case"number":case"hidden":case"select-one":i.push({name:s.name,value:s.value});u+=s.name.length+s.value.length;break;case"file":if(!!s.files){for(r=0;r<s.files.length;r++){o++;i.push({name:s.name,value:s.files[r],file:true});u+=s.files[r].size}}break;case"radio":case"checkbox":if(s.checked){i.push({name:s.name,value:s.value});u+=s.name.length+s.value.length}break;case"select-multiple":for(var l=0;l<s.options.length;l++){if(s.options[l].selected){i.push({name:s.name,value:s.options[l].value});u+=s.name.length+s.options[l].length}}break;default:break}}t=0;u=0;var c=a,f,d,p,h;while(t<i.length){var x=i[t].name.indexOf("[");if(h){c[i[t].name]={};c[i[t].name][h.replace(/\[|\]/gi,"")]=i[t].value;c=a;h=null;t++}else if(x==-1){c[i[t].name]=i[t].value;c=a;t++}else{f=i[t].name.substring(0,x);d=i[t].name.substring(x+1);p=d.indexOf("]");if(p==-1){if(!c[f])c[f]=[];c=a;t++}else if(p==0){if(!c[f])c[f]=[];c=c[f];i[t].name=""+c.length;if(d.substring(p+1).indexOf("[")===0)h=d.substring(0,p)+d.substring(p+1)}else{if(!c[f])c[f]={};c=c[f];i[t].name=d.substring(0,p)+d.substring(p+1)}}}}return{data:a,filesCount:o,roughSize:u}};a.ajax.submitAjax=function(t,r){r=r!==null&&typeof r=="object"?r:{};r.url=r["url"]||t.getAttribute("action");var s=r["data"]||{};r.data=a.ajax.prepareForm(t).data;for(var i in s){if(s.hasOwnProperty(i)){r.data[i]=s[i]}}if(!e["FormData"]){a.ajax(r)}else{var n=function(e){var a=Object.prototype.toString.call(e);return a=="[object File]"||a=="[object Blob]"},o=function(e,a,t){if(!!t&&typeof t=="object"&&!n(t)){for(var r in t){if(t.hasOwnProperty(r)){o(e,a==""?r:a+"["+r+"]",t[r])}}}else e.append(a,!!t?t:"")},u=function(e){var t={};if(null!=e){if(typeof e=="object"){for(var r in e){if(e.hasOwnProperty(r)){var s=a.util.urlencode(r);if(typeof e[r]=="object"&&e[r]["file"]!==true)t[s]=u(e[r]);else if(e[r]["file"]===true)t[s]=e[r]["value"];else t[s]=a.util.urlencode(e[r])}}}else t=a.util.urlencode(e)}return t},l=new e.FormData;if(r.method!=="POST"){r.data=a.ajax.prepareData(r.data);if(r.data){r.url+=(r.url.indexOf("?")!==-1?"&":"?")+r.data;r.data=""}}else{if(r.preparePost===true)r.data=u(r.data);o(l,"",r.data);r.data=l}r.preparePost=false;r.start=false;var c=a.ajax(r);if(!!r["onprogress"])c.upload.addEventListener("progress",function(e){var a=null;if(e.lengthComputable&&(e.total||e["totalSize"])){a=e.loaded*100/(e.total||e["totalSize"])}r["onprogress"](e,a)});c.send(l)}};a.ajax.UpdatePageData=function(e){if(e.TITLE)a.ajax.UpdatePageTitle(e.TITLE);if(e.WINDOW_TITLE||e.TITLE)a.ajax.UpdateWindowTitle(e.WINDOW_TITLE||e.TITLE);if(e.NAV_CHAIN)a.ajax.UpdatePageNavChain(e.NAV_CHAIN);if(e.CSS&&e.CSS.length>0)a.loadCSS(e.CSS);if(e.SCRIPTS&&e.SCRIPTS.length>0){var t=function(r,s,i){if(!!s&&a.type.isArray(s.scripts)){for(var n=0,o=e.SCRIPTS.length;n<o;n++){s.scripts.push({isInternal:false,JS:e.SCRIPTS[n]})}}else{a.loadScript(e.SCRIPTS,i)}a.removeCustomEvent("onAjaxSuccess",t)};a.addCustomEvent("onAjaxSuccess",t)}else{var r=function(e,t,s){if(a.type.isFunction(s)){s()}a.removeCustomEvent("onAjaxSuccess",r)};a.addCustomEvent("onAjaxSuccess",r)}};a.ajax.UpdatePageTitle=function(e){var t=a("pagetitle");if(t){t.removeChild(t.firstChild);if(!t.firstChild)t.appendChild(document.createTextNode(e));else t.insertBefore(document.createTextNode(e),t.firstChild)}};a.ajax.UpdateWindowTitle=function(e){document.title=e};a.ajax.UpdatePageNavChain=function(e){var t=a("navigation");if(t){t.innerHTML=e}};a.userOptions={options:null,bSend:false,delay:5e3,path:"/bitrix/admin/user_options.php?"};a.userOptions.setAjaxPath=function(e){a.userOptions.path=e.indexOf("?")==-1?e+"?":e+"&"};a.userOptions.save=function(e,t,r,s,i){if(null==a.userOptions.options)a.userOptions.options={};i=!!i;a.userOptions.options[e+"."+t+"."+r]=[e,t,r,s,i];var n=a.userOptions.__get();if(n!="")document.cookie=a.message("COOKIE_PREFIX")+"_LAST_SETTINGS="+encodeURIComponent(n)+"&sessid="+a.bitrix_sessid()+"; expires=Thu, 31 Dec 2020 23:59:59 GMT; path=/;";if(!a.userOptions.bSend){a.userOptions.bSend=true;setTimeout(function(){a.userOptions.send(null)},a.userOptions.delay)}};a.userOptions.send=function(e){var t=a.userOptions.__get();a.userOptions.options=null;a.userOptions.bSend=false;if(t!=""){document.cookie=a.message("COOKIE_PREFIX")+"_LAST_SETTINGS=; path=/;";a.ajax({method:"GET",dataType:"html",processData:false,cache:false,url:a.userOptions.path+t+"&sessid="+a.bitrix_sessid(),onsuccess:e})}};a.userOptions.del=function(e,t,r,s){a.ajax.get(a.userOptions.path+"action=delete&c="+e+"&n="+t+(r==true?"&common=Y":"")+"&sessid="+a.bitrix_sessid(),s)};a.userOptions.__get=function(){if(!a.userOptions.options)return"";var e="",t=-1,r="",s,i;for(i in a.userOptions.options){if(a.userOptions.options.hasOwnProperty(i)){s=a.userOptions.options[i];if(r!=s[0]+"."+s[1]){t++;e+="&p["+t+"][c]="+a.util.urlencode(s[0]);e+="&p["+t+"][n]="+a.util.urlencode(s[1]);if(s[4]==true)e+="&p["+t+"][d]=Y";r=s[0]+"."+s[1]}var n=s[2];var o=s[3];if(n===null){e+="&p["+t+"][v]="+a.util.urlencode(o)}else{e+="&p["+t+"][v]["+a.util.urlencode(n)+"]="+a.util.urlencode(o)}}}return e.substr(1)};a.ajax.history={expected_hash:"",obParams:null,obFrame:null,obImage:null,obTimer:null,bInited:false,bHashCollision:false,bPushState:!!(history.pushState&&a.type.isFunction(history.pushState)),startState:null,init:function(t){if(a.ajax.history.bInited)return;this.obParams=t;var r=this.obParams.getState();if(a.ajax.history.bPushState){a.ajax.history.expected_hash=e.location.pathname;if(e.location.search)a.ajax.history.expected_hash+=e.location.search;a.ajax.history.put(r,a.ajax.history.expected_hash,"",true);setTimeout(function(){a.bind(e,"popstate",a.ajax.history.__hashListener)},500)}else{a.ajax.history.expected_hash=e.location.hash;if(!a.ajax.history.expected_hash||a.ajax.history.expected_hash=="#")a.ajax.history.expected_hash="__bx_no_hash__";f.put(a.ajax.history.expected_hash,r);a.ajax.history.obTimer=setTimeout(a.ajax.history.__hashListener,500);if(a.browser.IsIE()){a.ajax.history.obFrame=document.createElement("IFRAME");a.hide_object(a.ajax.history.obFrame);document.body.appendChild(a.ajax.history.obFrame);a.ajax.history.obFrame.contentWindow.document.open();a.ajax.history.obFrame.contentWindow.document.write(a.ajax.history.expected_hash);a.ajax.history.obFrame.contentWindow.document.close()}else if(a.browser.IsOpera()){a.ajax.history.obImage=document.createElement("IMG");a.hide_object(a.ajax.history.obImage);document.body.appendChild(a.ajax.history.obImage);a.ajax.history.obImage.setAttribute("src","javascript:location.href = 'javascript:BX.ajax.history.__hashListener();';")}}a.ajax.history.bInited=true},__hashListener:function(t){t=t||e.event||{state:false};if(a.ajax.history.bPushState){a.ajax.history.obParams.setState(t.state||a.ajax.history.startState)}else{if(a.ajax.history.obTimer){e.clearTimeout(a.ajax.history.obTimer);a.ajax.history.obTimer=null}var r;if(null!=a.ajax.history.obFrame)r=a.ajax.history.obFrame.contentWindow.document.body.innerText;else r=e.location.hash;if(!r||r=="#")r="__bx_no_hash__";if(r.indexOf("#")==0)r=r.substring(1);if(r!=a.ajax.history.expected_hash){var s=f.get(r);if(s){a.ajax.history.obParams.setState(s);a.ajax.history.expected_hash=r;if(null!=a.ajax.history.obFrame){var i=r=="__bx_no_hash__"?"":r;if(e.location.hash!=i&&e.location.hash!="#"+i)e.location.hash=i}}}a.ajax.history.obTimer=setTimeout(a.ajax.history.__hashListener,500)}},put:function(t,r,s,i){if(this.bPushState){if(!i){history.pushState(t,"",r)}else{a.ajax.history.startState=t}}else{if(typeof s!="undefined")r=s;else r="view"+r;f.put(r,t);a.ajax.history.expected_hash=r;e.location.hash=a.util.urlencode(r);if(null!=a.ajax.history.obFrame){a.ajax.history.obFrame.contentWindow.document.open();a.ajax.history.obFrame.contentWindow.document.write(r);a.ajax.history.obFrame.contentWindow.document.close()}}},checkRedirectStart:function(t,r){var s=e.location.hash;if(s.substring(0,1)=="#")s=s.substring(1);var i=s.substring(0,5);if(i=="view/"||i=="view%"){a.ajax.history.bHashCollision=true;document.write("<"+'div id="__ajax_hash_collision_'+r+'" style="display: none;">')}},checkRedirectFinish:function(t,r){document.write("</div>");var s=e.location.hash;if(s.substring(0,1)=="#")s=s.substring(1);a.ready(function(){var e=s.substring(0,5);if(e=="view/"||e=="view%"){var i=a("__ajax_hash_collision_"+r);var n=i.firstChild;a.cleanNode(n);i.style.display="block";if(e!="view%")s=a.util.urlencode(s);s+=(s.indexOf("%3F")==-1?"%3F":"%26")+t+"="+r;var o="/bitrix/tools/ajax_redirector.php?hash="+s;a.ajax.insertToNode(o,n)}})}};a.ajax.component=function(e){this.node=e};a.ajax.component.prototype.getState=function(){var t={node:this.node,title:e.document.title,data:a(this.node).innerHTML};var r=a("navigation");if(null!=r)t.nav_chain=r.innerHTML;a.onCustomEvent(a(t.node),"onComponentAjaxHistoryGetState",[t]);return t};a.ajax.component.prototype.setState=function(e){a(e.node).innerHTML=e.data;a.ajax.UpdatePageTitle(e.title);if(e.nav_chain){a.ajax.UpdatePageNavChain(e.nav_chain)}a.onCustomEvent(a(e.node),"onComponentAjaxHistorySetState",[e])};var f={arHistory:{},put:function(e,a){this.arHistory[e]=a},get:function(e){return this.arHistory[e]}};a.ajax.FormData=function(){this.elements=[];this.files=[];this.features={};this.isSupported();this.log("BX FormData init")};a.ajax.FormData.isSupported=function(){var e=new a.ajax.FormData;var t=e.features.supported;e=null;return t};a.ajax.FormData.prototype.log=function(e){if(false){try{if(a.browser.IsIE())e=JSON.stringify(e);console.log(e)}catch(e){}}};a.ajax.FormData.prototype.isSupported=function(){var a={};a.fileReader=e.FileReader&&e.FileReader.prototype.readAsBinaryString;a.readFormData=a.sendFormData=!!e.FormData;a.supported=!!(a.readFormData&&a.sendFormData);this.features=a;this.log("features:");this.log(a);return a.supported};a.ajax.FormData.prototype.append=function(e,a){if(typeof a==="object"){this.files.push({name:e,value:a})}else{this.elements.push({name:e,value:a})}};a.ajax.FormData.prototype.send=function(e,t,r,s){this.log("FD send");this.xhr=a.ajax({method:"POST",dataType:"html",url:e,onsuccess:t,onfailure:s,start:false,preparePost:false});if(r){this.xhr.upload.addEventListener("progress",function(e){if(e.lengthComputable)r(e.loaded/(e.total||e.totalSize))},false)}if(this.features.readFormData&&this.features.sendFormData){var i=new FormData;this.log("use browser formdata");for(var n in this.elements){if(this.elements.hasOwnProperty(n))i.append(this.elements[n].name,this.elements[n].value)}for(n in this.files){if(this.files.hasOwnProperty(n))i.append(this.files[n].name,this.files[n].value)}this.xhr.send(i)}return this.xhr};a.addCustomEvent("onAjaxFailure",a.debug)})(window);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:50:"/bitrix/js/main/core/core_fx.min.js?14945912389768";s:6:"source";s:31:"/bitrix/js/main/core/core_fx.js";s:3:"min";s:35:"/bitrix/js/main/core/core_fx.min.js";s:3:"map";s:35:"/bitrix/js/main/core/core_fx.map.js";}"*/
(function(t){var i={time:1,step:.05,type:"linear",allowFloat:false};BX.fx=function(t){this.options=t;if(null!=this.options.time)this.options.originalTime=this.options.time;if(null!=this.options.step)this.options.originalStep=this.options.step;if(!this.__checkOptions())return false;this.__go=BX.delegate(this.go,this);this.PARAMS={}};BX.fx.prototype.__checkOptions=function(){if(typeof this.options.start!=typeof this.options.finish)return false;if(null==this.options.time)this.options.time=i.time;if(null==this.options.step)this.options.step=i.step;if(null==this.options.type)this.options.type=i.type;if(null==this.options.allowFloat)this.options.allowFloat=i.allowFloat;this.options.time*=1e3;this.options.step*=1e3;if(typeof this.options.start!="object"){this.options.start={_param:this.options.start};this.options.finish={_param:this.options.finish}}var e;for(e in this.options.start){if(null==this.options.finish[e]){this.options.start[e]=null;delete this.options.start[e]}}if(!BX.type.isFunction(this.options.type)){if(BX.type.isFunction(t[this.options.type]))this.options.type=t[this.options.type];else if(BX.type.isFunction(BX.fx.RULES[this.options.type]))this.options.type=BX.fx.RULES[this.options.type];else this.options.type=BX.fx.RULES[i.type]}return true};BX.fx.prototype.go=function(){var t=(new Date).valueOf();if(t<this.PARAMS.timeFinish){for(var i in this.PARAMS.current){this.PARAMS.current[i][0]=this.options.type.apply(this,[{start_value:this.PARAMS.start[i][0],finish_value:this.PARAMS.finish[i][0],current_value:this.PARAMS.current[i][0],current_time:t-this.PARAMS.timeStart,total_time:this.options.time}])}this._callback(this.options.callback);if(!this.paused)this.PARAMS.timer=setTimeout(this.__go,this.options.step)}else{this.stop()}};BX.fx.prototype._callback=function(t){var i={};t=t||this.options.callback;for(var e in this.PARAMS.current){i[e]=(this.options.allowFloat?this.PARAMS.current[e][0]:Math.round(this.PARAMS.current[e][0]))+this.PARAMS.current[e][1]}return t.apply(this,[null!=i["_param"]?i._param:i])};BX.fx.prototype.start=function(){var t,i,e;this.PARAMS.start={};this.PARAMS.current={};this.PARAMS.finish={};for(t in this.options.start){i=+this.options.start[t];e=(this.options.start[t]+"").substring((i+"").length);this.PARAMS.start[t]=[i,e];this.PARAMS.current[t]=[i,e];this.PARAMS.finish[t]=[+this.options.finish[t],e]}this._callback(this.options.callback_start);this._callback(this.options.callback);this.PARAMS.timeStart=(new Date).valueOf();this.PARAMS.timeFinish=this.PARAMS.timeStart+this.options.time;this.PARAMS.timer=setTimeout(BX.delegate(this.go,this),this.options.step);return this};BX.fx.prototype.pause=function(){if(this.paused){this.PARAMS.timer=setTimeout(this.__go,this.options.step);this.paused=false}else{clearTimeout(this.PARAMS.timer);this.paused=true}};BX.fx.prototype.stop=function(t){t=!!t;if(this.PARAMS.timer)clearTimeout(this.PARAMS.timer);if(null!=this.options.originalTime)this.options.time=this.options.originalTime;if(null!=this.options.originalStep)this.options.step=this.options.originalStep;this.PARAMS.current=this.PARAMS.finish;if(!t){this._callback(this.options.callback);this._callback(this.options.callback_complete)}};BX.fx.RULES={linear:function(t){return t.start_value+t.current_time/t.total_time*(t.finish_value-t.start_value)},decelerated:function(t){return t.start_value+Math.sqrt(t.current_time/t.total_time)*(t.finish_value-t.start_value)},accelerated:function(t){var i=t.current_time/t.total_time;return t.start_value+i*i*(t.finish_value-t.start_value)}};BX.fx.hide=function(t,i,e){t=BX(t);if(typeof i=="object"&&null==e){e=i;i=e.type}if(!e)e={};if(!BX.type.isNotEmptyString(i)){t.style.display="none";return}var s=BX.fx.EFFECTS[i](t,e,0);s.callback_complete=function(){if(e.hide!==false)t.style.display="none";if(e.callback_complete)e.callback_complete.apply(this,arguments)};return new BX.fx(s).start()};BX.fx.show=function(t,i,e){t=BX(t);if(typeof i=="object"&&null==e){e=i;i=e.type}if(!e)e={};if(!BX.type.isNotEmptyString(i)){t.style.display="block";return}var s=BX.fx.EFFECTS[i](t,e,1);s.callback_complete=function(){if(e.show!==false)t.style.display="block";if(e.callback_complete)e.callback_complete.apply(this,arguments)};return new BX.fx(s).start()};BX.fx.EFFECTS={scroll:function(t,e,s){if(!e.direction)e.direction="vertical";var n=e.direction=="horizontal"?"width":"height";var o=parseInt(BX.style(t,n));if(isNaN(o)){o=BX.pos(t)[n]}if(s==0)var a=o,r=e.min_height?parseInt(e.min_height):0;else var r=o,a=e.min_height?parseInt(e.min_height):0;return{start:a,finish:r,time:e.time||i.time,type:"linear",callback_start:function(){if(BX.style(t,"position")=="static")t.style.position="relative";t.style.overflow="hidden";t.style[n]=a+"px";t.style.display="block"},callback:function(i){t.style[n]=i+"px"}}},fade:function(t,e,s){var n={time:e.time||i.time,type:s==0?"decelerated":"linear",start:s==0?1:0,finish:s==0?0:1,allowFloat:true};if(BX.browser.IsIE()&&!BX.browser.IsIE9()){n.start*=100;n.finish*=100;n.allowFloat=false;n.callback_start=function(){t.style.display="block";t.style.filter+="progid:DXImageTransform.Microsoft.Alpha(opacity="+n.start+")"};n.callback=function(i){(t.filters["DXImageTransform.Microsoft.alpha"]||t.filters.alpha).opacity=i}}else{n.callback_start=function(){t.style.display="block"};n.callback=function(i){t.style.opacity=t.style.KhtmlOpacity=t.style.MozOpacity=i}}return n},fold:function(t,e,s){if(s!=0)return;var n=BX.pos(t);var o=n.height/(n.width+n.height);var a={time:e.time||i.time,callback_complete:e.callback_complete,hide:e.hide};e.type="scroll";e.direction="vertical";e.min_height=e.min_height||10;e.hide=false;e.time=o*a.time;e.callback_complete=function(){t.style.whiteSpace="nowrap";e.direction="horizontal";e.min_height=null;e.time=a.time-e.time;e.hide=a.hide;e.callback_complete=a.callback_complete;BX.fx.hide(t,e)};return BX.fx.EFFECTS.scroll(t,e,s)},scale:function(t,e,s){var n={width:parseInt(BX.style(t,"width")),height:parseInt(BX.style(t,"height"))};if(isNaN(n.width)||isNaN(n.height)){var o=BX.pos(t);n={width:o.width,height:o.height}}if(s==0)var a=n,r={width:0,height:0};else var r=n,a={width:0,height:0};return{start:a,finish:r,time:e.time||i.time,type:"linear",callback_start:function(){t.style.position="relative";t.style.overflow="hidden";t.style.display="block";t.style.height=a.height+"px";t.style.width=a.width+"px"},callback:function(i){t.style.height=i.height+"px";t.style.width=i.width+"px"}}}};var e={arStack:{},arRules:{},globalAnimationId:0};BX.fx.colorAnimate=function(t,i,s){if(t==null)return;animationId=t.getAttribute("data-animation-id");if(animationId==null){animationId=e.globalAnimationId;t.setAttribute("data-animation-id",e.globalAnimationId++)}var n=i.split(/\s*,\s*/);for(var o=0;o<n.length;o++){i=n[o];if(!e.arRules[i])continue;var a=0;if(!e.arStack[animationId]){e.arStack[animationId]={}}else if(e.arStack[animationId][i]){a=e.arStack[animationId][i].i;clearInterval(e.arStack[animationId][i].tId)}if(a==0&&s||a==e.arRules[i][3]&&!s)continue;e.arStack[animationId][i]={i:a,element:t,tId:setInterval('BX.fx.colorAnimate.run("'+animationId+'","'+i+'")',e.arRules[i][4]),back:Boolean(s)}}};BX.fx.colorAnimate.addRule=function(t,i,s,n,o,a,r){e.arRules[t]=[BX.util.hex2rgb(i),BX.util.hex2rgb(s),n.replace(/\-(.)/g,function(){return arguments[1].toUpperCase()}),o,a||1,r||false]};BX.fx.colorAnimate.run=function(t,i){element=e.arStack[t][i].element;e.arStack[t][i].i+=e.arStack[t][i].back?-1:1;var s=e.arStack[t][i].i/e.arRules[i][3];var n=1-s;var o=e.arRules[i][0];var a=e.arRules[i][1];element.style[e.arRules[i][2]]="rgb("+Math.floor(o["r"]*n+a["r"]*s)+","+Math.floor(o["g"]*n+a["g"]*s)+","+Math.floor(o["b"]*n+a["b"]*s)+")";if(e.arStack[t][i].i==e.arRules[i][3]||e.arStack[t][i].i==0){clearInterval(e.arStack[t][i].tId);if(e.arRules[i][5])BX.fx.colorAnimate(e.arStack[t][i].element,i,true)}};BX.easing=function(t){this.options=t;this.timer=null};BX.easing.prototype.animate=function(){if(!this.options||!this.options.start||!this.options.finish||typeof this.options.start!="object"||typeof this.options.finish!="object")return null;for(var t in this.options.start){if(typeof this.options.finish[t]=="undefined"){delete this.options.start[t]}}this.options.progress=function(t){var i={};for(var e in this.start)i[e]=Math.round(this.start[e]+(this.finish[e]-this.start[e])*t);if(this.step){this.step(i)}};this.animateProgress()};BX.easing.prototype.stop=function(t){if(this.timer){cancelAnimationFrame(this.timer);this.timer=null;if(t){this.options.complete&&this.options.complete()}}};BX.easing.prototype.animateProgress=function(){if(!t.requestAnimationFrame){this.options.progress(1);this.options.complete&&this.options.complete();return}var i=null;var e=this.options.transition||BX.easing.transitions.linear;var s=this.options.duration||1e3;var n=BX.proxy(function(t){if(i===null){i=t}var o=(t-i)/s;if(o>1){o=1}this.options.progress(e(o));if(o==1){this.stop(true)}else{this.timer=requestAnimationFrame(n)}},this);this.timer=requestAnimationFrame(n)};BX.easing.makeEaseInOut=function(t){return function(i){if(i<.5)return t(2*i)/2;else return(2-t(2*(1-i)))/2}};BX.easing.makeEaseOut=function(t){return function(i){return 1-t(1-i)}};BX.easing.transitions={linear:function(t){return t},quad:function(t){return Math.pow(t,2)},cubic:function(t){return Math.pow(t,3)},quart:function(t){return Math.pow(t,4)},quint:function(t){return Math.pow(t,5)},circ:function(t){return 1-Math.sin(Math.acos(t))},back:function(t){return Math.pow(t,2)*((1.5+1)*t-1.5)},elastic:function(t){return Math.pow(2,10*(t-1))*Math.cos(20*Math.PI*1.5/3*t)},bounce:function(t){for(var i=0,e=1;1;i+=e,e/=2){if(t>=(7-4*i)/11){return-Math.pow((11-6*i-11*t)/4,2)+Math.pow(e,2)}}}}})(window);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:50:"/bitrix/js/main/core/core_popup.js?155747419976073";s:6:"source";s:34:"/bitrix/js/main/core/core_popup.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
;(function(window) {

"use strict";

if (BX.PopupWindowManager)
{
	return;
}

BX.PopupWindowManager =
{
	_popups : [],
	_currentPopup : null,

	create : function(popupId, bindElement, params)
	{
		var id = popupId;
		if (BX.type.isPlainObject(popupId) && !bindElement && !params)
		{
			id = popupId.id;
			if (!BX.type.isNotEmptyString(id))
			{
				throw new Error("BX.PopupWindowManager: 'id' parameter is required.")
			}
		}

		var popupWindow = this.getPopupById(id);
		if (popupWindow === null)
		{
			popupWindow = new BX.PopupWindow(popupId, bindElement, params);
			BX.addCustomEvent(popupWindow, "onPopupShow", BX.delegate(this.onPopupShow, this));
			BX.addCustomEvent(popupWindow, "onPopupClose", BX.delegate(this.onPopupClose, this));
		}

		return popupWindow;
	},

	onPopupWindowIsInitialized : function(uniquePopupId, popupWindow)
	{
		BX.addCustomEvent(popupWindow, "onPopupDestroy", BX.delegate(this.onPopupDestroy, this));
		this._popups.push(popupWindow);
	},

	onPopupShow : function(popupWindow)
	{
		if (this._currentPopup !== null)
		{
			this._currentPopup.close();
		}

		this._currentPopup = popupWindow;
	},

	onPopupClose : function(popupWindow)
	{
		this._currentPopup = null;
	},

	onPopupDestroy : function(popupWindow)
	{
		var index;
		if ((index = this._getPopupIndex(popupWindow.uniquePopupId)) !== -1)
		{
			this._popups = BX.util.deleteFromArray(this._popups, index);
		}
	},

	getCurrentPopup : function()
	{
		return this._currentPopup;
	},

	isPopupExists : function(uniquePopupId)
	{
		return this._getPopupIndex(uniquePopupId) !== -1
	},

	isAnyPopupShown : function()
	{
		for(var i = 0, length = this._popups.length; i < length; i++)
		{
			if(this._popups[i].isShown())
			{
				return true;
			}
		}
		return false;
	},

	getPopupById: function(id)
	{
		for (var i = 0; i < this._popups.length; i++)
		{
			if (this._popups[i].getId() === id)
			{
				return this._popups[i];
			}
		}

		return null;
	},

	_getPopupIndex : function(uniquePopupId)
	{
		var index = -1;

		for (var i = 0; i < this._popups.length; i++)
		{
			if (this._popups[i].uniquePopupId === uniquePopupId)
			{
				return i;
			}
		}

		return index;
	},

	getMaxZIndex : function()
	{
		var zIndex = 0, ii;
		for (ii = 0; ii < this._popups.length; ii++)
		{
			zIndex = Math.max(zIndex, this._popups[ii].params.zIndex);
		}
		return zIndex;
	}
};
BX.addCustomEvent("onPopupWindowIsInitialized", BX.proxy(BX.PopupWindowManager.onPopupWindowIsInitialized, BX.PopupWindowManager));
/**
 *
 * @param {string|object} uniquePopupId
 * @param {Element|object|null} [bindElement]
 * @param [params]
 * @constructor
 */
BX.PopupWindow = function(uniquePopupId, bindElement, params)
{
	this.compatibleMode = params && BX.type.isBoolean(params.compatibleMode) ? params.compatibleMode : true;
	if (BX.type.isPlainObject(uniquePopupId) && !bindElement && !params)
	{
		params = uniquePopupId;
		uniquePopupId = params.id;
		bindElement = params.bindElement;
		this.compatibleMode = false;
	}

	params = params || {};
	this.params = params;

	if (!BX.type.isNotEmptyString(uniquePopupId))
	{
		uniquePopupId = "popup-window-" + BX.util.getRandomString().toLowerCase();
	}

	BX.onCustomEvent("onPopupWindowInit", [uniquePopupId, bindElement, params]);

	this.uniquePopupId = uniquePopupId;
	this.params.zIndex = BX.type.isNumber(params.zIndex) ? parseInt(params.zIndex) : 0;
	this.params.zIndexAbsolute = BX.type.isNumber(params.zIndexAbsolute) ? parseInt(params.zIndexAbsolute) : 0;
	this.buttons = params.buttons && BX.type.isArray(params.buttons) ? params.buttons : [];
	this.offsetTop = BX.PopupWindow.getOption("offsetTop");
	this.offsetLeft = BX.PopupWindow.getOption("offsetLeft");
	this.firstShow = false;
	this.bordersWidth = 20;
	this.bindElementPos = null;
	this.closeIcon = null;
	this.resizeIcon = null;
	this.angle = null;
	this.overlay = null;
	this.titleBar = null;
	this.bindOptions = typeof(params.bindOptions) === "object" ? params.bindOptions : {};
	this.autoHide = params.autoHide === true;
	this.autoHideHandler = BX.type.isFunction(params.autoHideHandler) ? params.autoHideHandler : null;
	this.handleAutoHide = this.handleAutoHide.bind(this);
	this.handleOverlayClick = this.handleOverlayClick.bind(this);
	this.isAutoHideBinded = false;
	this.closeByEsc = params.closeByEsc === true;
	this.isCloseByEscBinded = false;

	this.cacheable = true;
	this.destroyed = false;

	this.width = null;
	this.height = null;
	this.minWidth = null;
	this.minHeight = null;
	this.maxWidth = null;
	this.maxHeight = null;

	this.padding = null;
	this.contentPadding = null;
	this.background = null;
	this.contentBackground = null;

	this.appendContainer = document.body;

	this.dragOptions = {
		cursor: "",
		callback: BX.DoNothing,
		eventName: ""
	};

	this.dragged = false;
	this.dragPageX = 0;
	this.dragPageY = 0;

	this.animationShowClassName = null;
	this.animationCloseClassName = null;
	this.animationCloseEventType = null;

	this.handleDocumentKeyUp = this.handleDocumentKeyUp.bind(this);
	this.handleResizeWindow = this.handleResizeWindow.bind(this);

	if (params.events)
	{
		for (var eventName in params.events)
		{
			BX.addCustomEvent(this, eventName, params.events[eventName]);
		}
	}

	var popupClassName = "popup-window";

	if (params.contentColor && BX.type.isNotEmptyString(params.contentColor))
	{
		popupClassName += " popup-window-content-" + params.contentColor;
	}

	if (params.titleBar)
	{
		popupClassName += " popup-window-with-titlebar";
	}

	if (params.className && BX.type.isNotEmptyString(params.className))
	{
		popupClassName += " " + params.className;
	}

	if (params.darkMode)
	{
		popupClassName += ' popup-window-dark';
	}

	this.popupContainer = document.createElement("div");
	var titleBarID = "popup-window-titlebar-" + uniquePopupId;

	if (params.titleBar)
	{
		this.titleBar = BX.create("div", {
			props : {
				className: "popup-window-titlebar",
				id: titleBarID
			}
		});
	}

	if (params.closeIcon)
	{
		this.closeIcon = BX.create("span", {
			props : { className: "popup-window-close-icon" + (params.titleBar ? " popup-window-titlebar-close-icon" : "") },
			style : (typeof(params.closeIcon) === "object" ? params.closeIcon : {} ),
			events : { click : BX.proxy(this.handleCloseIconClick, this) }
		});

		if (BX.browser.IsIE())
		{
			BX.adjust(this.closeIcon, { attrs: { hidefocus: "true" } });
		}
	}

	this.contentContainer = BX.create("div",{
		props:{
			id: "popup-window-content-" +  uniquePopupId,
			className: "popup-window-content"
		}
	});

	BX.adjust(this.popupContainer, {
		props : {
			id : uniquePopupId,
			className : popupClassName
		},
		style : {
			zIndex: this.getZindex(),
			position: "absolute",
			display: "none",
			top: "0px",
			left: "0px"
		},
		children : [this.titleBar, this.contentContainer, this.closeIcon]
	});

	this.appendContainer.appendChild(this.popupContainer);

	this.buttonsContainer = null;

	if (params.angle)
	{
		this.setAngle(params.angle);
	}

	if (params.overlay)
	{
		this.setOverlay(params.overlay);
	}

	this.setOffset(params);
	this.setBindElement(bindElement);
	this.setTitleBar(params.titleBar);
	this.setContent(params.content);
	this.setButtons(params.buttons);
	this.setWidth(params.width);
	this.setHeight(params.height);
	this.setMinWidth(params.minWidth);
	this.setMinHeight(params.minHeight);
	this.setMaxWidth(params.maxWidth);
	this.setMaxHeight(params.maxHeight);
	this.setResizeMode(params.resizable);
	this.setPadding(params.padding);
	this.setContentPadding(params.contentPadding);
	this.setBackground(params.background);
	this.setContentBackground(params.contentBackground);
	this.setAnimation(params.animation);
	this.setCacheable(params.cacheable);

	// Compatibility
	if (params.contentNoPaddings)
	{
		this.setContentPadding(0);
	}
	if (params.noAllPaddings)
	{
		this.setPadding(0);
		this.setContentPadding(0);
	}

	if (params.bindOnResize !== false)
	{
		BX.bind(window, "resize", this.handleResizeWindow);
	}

	BX.onCustomEvent("onPopupWindowIsInitialized", [uniquePopupId, this]);
};

BX.PopupWindow.prototype.getId = function()
{
	return this.uniquePopupId;
};

BX.PopupWindow.prototype.isCompatibleMode = function()
{
	return this.compatibleMode;
};

/**
 *
 * @param {Element|string} content
 */
BX.PopupWindow.prototype.setContent = function(content)
{
	if (!this.contentContainer || !content)
	{
		return;
	}

	if (BX.type.isElementNode(content))
	{
		BX.cleanNode(this.contentContainer);

		var hasParent = BX.type.isDomNode(content.parentNode);
		this.contentContainer.appendChild(content);
		if (this.isCompatibleMode() || hasParent)
		{
			content.style.display = "block";
		}
	}
	else if (BX.type.isString(content))
	{
		this.contentContainer.innerHTML = content;
	}
	else
	{
		this.contentContainer.innerHTML = "&nbsp;";
	}
};

/**
 *
 * @param {BX.PopupWindowButton[]} buttons
 */
BX.PopupWindow.prototype.setButtons = function(buttons)
{
	this.buttons = buttons && BX.type.isArray(buttons) ? buttons : [];

	if (this.buttonsContainer)
	{
		BX.remove(this.buttonsContainer);
	}

	if (this.buttons.length > 0 && this.contentContainer)
	{
		var newButtons = [];
		for (var i = 0; i < this.buttons.length; i++)
		{
			var button = this.buttons[i];
			if (button instanceof BX.PopupWindowButton)
			{
				button.popupWindow = this;
				newButtons.push(button.render());
			}
			else if (button instanceof BX.UI.Button)
			{
				button.setContext(this);
				newButtons.push(button.render());
			}
		}

		this.buttonsContainer = this.contentContainer.parentNode.appendChild(
			BX.create("div",{
				props : { className : "popup-window-buttons" },
				children : newButtons
			})
		);
	}
};

/**
 *
 * @returns {BX.PopupWindowButton[]}
 */
BX.PopupWindow.prototype.getButtons = function()
{
	return this.buttons;
};

/**
 *
 * @param {string} id
 * @returns {BX.PopupWindowButton}
 */
BX.PopupWindow.prototype.getButton = function(id)
{
	for (var i = 0; i < this.buttons.length; i++)
	{
		var button = this.buttons[i];
		if (button.getId() === id)
		{
			return button;
		}
	}

	return null;
};

/**
 *
 * @param {Element|Event|object} bindElement
 */
BX.PopupWindow.prototype.setBindElement = function(bindElement)
{
	if (!bindElement || typeof(bindElement) !== "object")
	{
		return;
	}

	if (BX.type.isDomNode(bindElement) || (BX.type.isNumber(bindElement.top) && BX.type.isNumber(bindElement.left)))
	{
		this.bindElement = bindElement;
	}
	else if (BX.type.isNumber(bindElement.clientX) && BX.type.isNumber(bindElement.clientY))
	{
		BX.fixEventPageXY(bindElement);
		this.bindElement = { left : bindElement.pageX, top : bindElement.pageY, bottom : bindElement.pageY };
	}
};

/**
 *
 * @param bindElement
 * @returns {object} position
 */
BX.PopupWindow.prototype.getBindElementPos = function(bindElement)
{
	if (BX.type.isDomNode(bindElement))
	{
		return BX.pos(bindElement, false);
	}
	else if (bindElement && typeof(bindElement) === "object")
	{
		if (!BX.type.isNumber(bindElement.bottom))
		{
			bindElement.bottom = bindElement.top;
		}

		return bindElement;
	}
	else
	{
		var windowSize =  BX.GetWindowInnerSize();
		var windowScroll = BX.GetWindowScrollPos();
		var popupWidth = this.getPopupContainer().offsetWidth;
		var popupHeight = this.getPopupContainer().offsetHeight;

		this.bindOptions.forceTop = true;

		return {
			left : windowSize.innerWidth/2 - popupWidth/2 + windowScroll.scrollLeft,
			top : windowSize.innerHeight/2 - popupHeight/2 + windowScroll.scrollTop,
			bottom : windowSize.innerHeight/2 - popupHeight/2 + windowScroll.scrollTop,

			//for optimisation purposes
			windowSize : windowSize,
			windowScroll : windowScroll,
			popupWidth : popupWidth,
			popupHeight : popupHeight
		};
	}
};

/**
 *
 * @param {Object|bool} params
 * @param {Number} [params.offset = 0]
 * @param {string} [params.position = "top"]
 */
BX.PopupWindow.prototype.setAngle = function(params)
{
	if (params === false && this.angle !== null)
	{
		BX.remove(this.angle.element);
		this.angle = null;
		return;
	}

	var className = "popup-window-angly";
	if (this.angle === null)
	{
		var position = this.bindOptions.position && this.bindOptions.position === "top" ? "bottom" : "top";
		var angleMinLeft = BX.PopupWindow.getOption(position === "top" ? "angleMinTop" : "angleMinBottom");
		var defaultOffset = BX.type.isNumber(params.offset) ? params.offset : 0;

		var angleLeftOffset = BX.PopupWindow.getOption("angleLeftOffset", null);
		if (defaultOffset > 0 && BX.type.isNumber(angleLeftOffset))
		{
			defaultOffset += angleLeftOffset - BX.PopupWindow.defaultOptions.angleLeftOffset;
		}

		this.angle = {
			element : BX.create("div", { props : { className: className + " " + className +"-" + position }}),
			position : position,
			offset : 0,
			defaultOffset : Math.max(defaultOffset, angleMinLeft)
			//Math.max(BX.type.isNumber(params.offset) ? params.offset : 0, angleMinLeft)
		};

		this.getPopupContainer().appendChild(this.angle.element);
	}

	if (typeof(params) === "object" && params.position && BX.util.in_array(params.position, ["top", "right", "bottom", "left", "hide"]))
	{
		BX.removeClass(this.angle.element, className + "-" +  this.angle.position);
		BX.addClass(this.angle.element, className + "-" +  params.position);
		this.angle.position = params.position;
	}

	if (typeof(params) === "object" && BX.type.isNumber(params.offset))
	{
		var offset = params.offset;
		var minOffset, maxOffset;
		if (this.angle.position === "top")
		{
			minOffset = BX.PopupWindow.getOption("angleMinTop");
			maxOffset = this.getPopupContainer().offsetWidth - BX.PopupWindow.getOption("angleMaxTop");
			maxOffset = maxOffset < minOffset ? Math.max(minOffset, offset) : maxOffset;

			this.angle.offset = Math.min(Math.max(minOffset, offset), maxOffset);
			this.angle.element.style.left = this.angle.offset + "px";
			this.angle.element.style.marginLeft = 0;
		}
		else if (this.angle.position === "bottom")
		{
			minOffset = BX.PopupWindow.getOption("angleMinBottom");
			maxOffset = this.getPopupContainer().offsetWidth - BX.PopupWindow.getOption("angleMaxBottom");
			maxOffset = maxOffset < minOffset ? Math.max(minOffset, offset) : maxOffset;

			this.angle.offset = Math.min(Math.max(minOffset, offset), maxOffset);
			this.angle.element.style.marginLeft = this.angle.offset + "px";
			this.angle.element.style.left = 0;
		}
		else if (this.angle.position === "right")
		{
			minOffset = BX.PopupWindow.getOption("angleMinRight");
			maxOffset = this.getPopupContainer().offsetHeight - BX.PopupWindow.getOption("angleMaxRight");
			maxOffset = maxOffset < minOffset ? Math.max(minOffset, offset) : maxOffset;

			this.angle.offset = Math.min(Math.max(minOffset, offset), maxOffset);
			this.angle.element.style.top = this.angle.offset + "px";
		}
		else if (this.angle.position === "left")
		{
			minOffset = BX.PopupWindow.getOption("angleMinLeft");
			maxOffset = this.getPopupContainer().offsetHeight - BX.PopupWindow.getOption("angleMaxLeft");
			maxOffset = maxOffset < minOffset ? Math.max(minOffset, offset) : maxOffset;

			this.angle.offset = Math.min(Math.max(minOffset, offset), maxOffset);
			this.angle.element.style.top = this.angle.offset + "px";
		}
	}
};

/**
 *
 * @returns {Number|null}
 */
BX.PopupWindow.prototype.getWidth = function()
{
	return this.width;
};

/**
 *
 * @param {Number} width
 */
BX.PopupWindow.prototype.setWidth = function(width)
{
	this.setWidthProperty("width", width);
};

/**
 *
 * @returns {Number|null}
 */
BX.PopupWindow.prototype.getHeight = function()
{
	return this.height;
};

/**
 *
 * @param {Number} height
 */
BX.PopupWindow.prototype.setHeight = function(height)
{
	this.setHeightProperty("height", height);
};

/**
 *
 * @returns {Number|null}
 */
BX.PopupWindow.prototype.getMinWidth = function()
{
	return this.minWidth;
};

BX.PopupWindow.prototype.setMinWidth = function(width)
{
	this.setWidthProperty("minWidth", width);
};

/**
 *
 * @returns {Number|null}
 */
BX.PopupWindow.prototype.getMinHeight = function()
{
	return this.minHeight;
};

BX.PopupWindow.prototype.setMinHeight = function(height)
{
	this.setHeightProperty("minHeight", height);
};

/**
 *
 * @returns {Number|null}
 */
BX.PopupWindow.prototype.getMaxWidth = function()
{
	return this.maxWidth;
};

BX.PopupWindow.prototype.setMaxWidth = function(width)
{
	this.setWidthProperty("maxWidth", width);
};

/**
 *
 * @returns {Number|null}
 */
BX.PopupWindow.prototype.getMaxHeight = function()
{
	return this.maxHeight;
};

BX.PopupWindow.prototype.setMaxHeight = function(height)
{
	this.setHeightProperty("maxHeight", height);
};

BX.PopupWindow.prototype.setWidthProperty = function(property, width)
{
	var props = ["width", "minWidth", "maxWidth"];
	if (props.indexOf(property) === -1)
	{
		return;
	}

	if (BX.type.isNumber(width) && width >= 0)
	{
		this[property] = width;
		this.getResizableContainer().style[property] = width + "px";
		this.getContentContainer().style.overflowX = "auto";
		this.getPopupContainer().classList.add("popup-window-fixed-width");

		if (this.getTitleContainer() && BX.browser.IsIE11())
		{
			this.getTitleContainer().style[property] = width + "px";
		}
	}
	else if (width === null || width === false)
	{
		this[property] = null;
		this.getResizableContainer().style.removeProperty(BX.util.getCssName(property));

		var hasOtherProps = props.some(function(prop) {
			return this.getResizableContainer().style.getPropertyValue(BX.util.getCssName(prop)) !== ""
		}, this);

		if (!hasOtherProps)
		{
			this.getContentContainer().style.removeProperty("overflow-x");
			this.getPopupContainer().classList.remove("popup-window-fixed-width");
		}

		if (this.getTitleContainer() && BX.browser.IsIE11())
		{
			this.getTitleContainer().style.removeProperty(BX.util.getCssName(property));
		}
	}
};

BX.PopupWindow.prototype.setHeightProperty = function(property, height)
{
	var props = ["height", "minHeight", "maxHeight"];
	if (props.indexOf(property) === -1)
	{
		return;
	}

	if (BX.type.isNumber(height) && height >= 0)
	{
		this[property] = height;
		this.getResizableContainer().style[property] = height + "px";
		this.getContentContainer().style.overflowY = "auto";
		this.getPopupContainer().classList.add("popup-window-fixed-height");
	}
	else if (height === null || height === false)
	{
		this[property] = null;
		this.getResizableContainer().style.removeProperty(BX.util.getCssName(property));

		var hasOtherProps = props.some(function(prop) {
			return this.getResizableContainer().style.getPropertyValue(BX.util.getCssName(prop)) !== ""
		}, this);

		if (!hasOtherProps)
		{
			this.getContentContainer().style.removeProperty("overflow-y");
			this.getPopupContainer().classList.remove("popup-window-fixed-height");
		}
	}
};

BX.PopupWindow.prototype.setPadding = function(padding) 
{
	if (BX.type.isNumber(padding) && padding >= 0)
	{
		this.padding = padding;
		this.getPopupContainer().style.padding = padding + "px";
	}
	else if (padding === null)
	{
		this.padding = null;
		this.getPopupContainer().style.removeProperty("padding");
	}
};

BX.PopupWindow.prototype.getPadding = function()
{
	return this.padding;
};

BX.PopupWindow.prototype.setContentPadding = function(padding)
{
	if (BX.type.isNumber(padding) && padding >= 0)
	{
		this.contentPadding = padding;
		this.getContentContainer().style.padding = padding + "px";
	}
	else if (padding === null)
	{
		this.contentPadding = null;
		this.getContentContainer().style.removeProperty("padding");
	}
};

BX.PopupWindow.prototype.getContentPadding = function()
{
	return this.contentPadding;
};

BX.PopupWindow.prototype.setBackground = function(background)
{
	if (BX.type.isNotEmptyString(background))
	{
		this.background = background;
		this.getPopupContainer().style.background = background;
	}
	else if (background === null)
	{
		this.background = null;
		this.getPopupContainer().style.removeProperty("background");
	}
};

BX.PopupWindow.prototype.getBackground = function()
{
	return this.background;
};

BX.PopupWindow.prototype.setContentBackground = function(background)
{
	if (BX.type.isNotEmptyString(background))
	{
		this.contentBackground = background;
		this.getContentContainer().style.background = background;
	}
	else if (background === null)
	{
		this.contentBackground = null;
		this.getContentContainer().style.removeProperty("background");
	}
};

BX.PopupWindow.prototype.getContentBackground = function()
{
	return this.contentBackground;
};

BX.PopupWindow.prototype.isDestroyed = function()
{
	return this.destroyed;
};

BX.PopupWindow.prototype.setCacheable = function(cacheable)
{
	this.cacheable = cacheable !== false;
};

BX.PopupWindow.prototype.isCacheable = function()
{
	return this.cacheable;
};

/**
 *
 * @param {object|boolean} options
 * @param {Number} [options.minWidth = 0] deprecated
 * @param {Number} [options.minHeight = 0] deprecated
 */
BX.PopupWindow.prototype.setResizeMode = function(options)
{
	if (options === true || BX.type.isPlainObject(options))
	{
		if (!this.resizeIcon)
		{
			this.resizeIcon = BX.create("div", {
				props: {
					className: "popup-window-resize"
				},
				events: {
					mousedown: BX.proxy(this.onResizeMouseDown, this)
				}
			});

			this.getPopupContainer().appendChild(this.resizeIcon);
		}

		//Compatibility
		this.setMinWidth(options.minWidth);
		this.setMinHeight(options.minHeight);
	}
	else if (options === false && this.resizeIcon)
	{
		BX.remove(this.resizeIcon);
		this.resizeIcon = null;
	}
};

/**
 *
 * @return {HTMLElement}
 */
BX.PopupWindow.prototype.getPopupContainer = function()
{
	return this.popupContainer;
};

BX.PopupWindow.prototype.getContentContainer = function()
{
	return this.contentContainer;
};

BX.PopupWindow.prototype.getResizableContainer = function()
{
	return BX.browser.IsIE11() ? this.getContentContainer() : this.getPopupContainer();
};

BX.PopupWindow.prototype.getTitleContainer = function()
{
	return this.titleBar;
};

BX.PopupWindow.prototype.onTitleMouseDown = function(event)
{
	this._startDrag(
		event,
		{
			cursor: "move",
			callback: BX.proxy(this.move, this),
			eventName: "Drag"
		}
	);
};

BX.PopupWindow.prototype.onResizeMouseDown = function(event)
{
	this._startDrag(
		event,
		{
			cursor: "nwse-resize",
			eventName: "Resize",
			callback: BX.proxy(this._resize, this)
		}
	);

	this.resizeContentPos = BX.pos(this.getResizableContainer());
	this.resizeContentOffset = this.resizeContentPos.left - BX.pos(this.getPopupContainer()).left;
};

BX.PopupWindow.prototype._resize = function(offsetX, offsetY, pageX, pageY)
{
	var width = pageX - this.resizeContentPos.left;
	var height = pageY - this.resizeContentPos.top;

	var scrollWidth = BX.GetWindowScrollSize().scrollWidth;
	if (this.resizeContentPos.left + width + this.resizeContentOffset >= scrollWidth)
	{
		width = scrollWidth - this.resizeContentPos.left - this.resizeContentOffset;
	}

	width = Math.max(width, this.getMinWidth());
	height = Math.max(height, this.getMinHeight());

	if (this.getMaxWidth() !== null)
	{
		width = Math.min(width, this.getMaxWidth());
	}

	if (this.getMaxHeight() !== null)
	{
		height = Math.min(height, this.getMaxHeight());
	}

	this.setWidth(width);
	this.setHeight(height);
};

BX.PopupWindow.prototype.isTopAngle = function()
{
	return this.angle !== null && this.angle.position === "top";
};

BX.PopupWindow.prototype.isBottomAngle = function()
{
	return this.angle !== null && this.angle.position === "bottom";
};

BX.PopupWindow.prototype.isTopOrBottomAngle = function()
{
	return this.angle !== null && BX.util.in_array(this.angle.position, ["top", "bottom"]);
};

BX.PopupWindow.prototype.getAngleHeight = function()
{
	return (this.isTopOrBottomAngle() ? BX.PopupWindow.getOption("angleTopOffset") : 0);
};

/**
 *
 * @param {object} params
 * @param {Number} [params.offsetLeft]
 * @param {Number} [params.offsetTop]
 */
BX.PopupWindow.prototype.setOffset = function(params)
{
	if (!BX.type.isPlainObject(params))
	{
		return;
	}

	if (BX.type.isNumber(params.offsetLeft))
	{
		this.offsetLeft = params.offsetLeft + BX.PopupWindow.getOption("offsetLeft");
	}

	if (BX.type.isNumber(params.offsetTop))
	{
		this.offsetTop = params.offsetTop + BX.PopupWindow.getOption("offsetTop");
	}
};

/**
 *
 * @param {object|string} params
 * @param {Element} [params.content]
 */
BX.PopupWindow.prototype.setTitleBar = function(params)
{
	if (!this.titleBar)
	{
		return;
	}

	if (typeof(params) === "object" && BX.type.isDomNode(params.content))
	{
		this.titleBar.innerHTML = "";
		this.titleBar.appendChild(params.content);
	}
	else if (typeof(params) === "string")
	{
		this.titleBar.innerHTML = "";
		this.titleBar.appendChild(
			BX.create("span", {
				props : {
					className: "popup-window-titlebar-text"
				},
				text : params
			})
		);
	}

	if (this.params.draggable)
	{
		this.titleBar.style.cursor = "move";
		BX.bind(this.titleBar, "mousedown", BX.proxy(this.onTitleMouseDown, this));
	}
};

/**
 *
 * @param {bool} enable
 */
BX.PopupWindow.prototype.setClosingByEsc = function(enable)
{
	enable = BX.type.isBoolean(enable) ? enable : true;
	if (enable)
	{
		this.closeByEsc = true;
		this.bindClosingByEsc();
	}
	else
	{
		this.closeByEsc = false;
		this.unbindClosingByEsc();
	}
};

/**
 * @private
 */
BX.PopupWindow.prototype.bindClosingByEsc = function()
{
	if (this.closeByEsc && !this.isCloseByEscBinded)
	{
		BX.bind(document, "keyup", this.handleDocumentKeyUp);
		this.isCloseByEscBinded = true;
	}
};

/**
 * @private
 */
BX.PopupWindow.prototype.unbindClosingByEsc = function()
{
	if (this.isCloseByEscBinded)
	{
		BX.unbind(document, "keyup", this.handleDocumentKeyUp);
		this.isCloseByEscBinded = false;
	}
};

/**
 * @public
 * @param {bool} enable
 */
BX.PopupWindow.prototype.setAutoHide = function(enable)
{
	enable = BX.type.isBoolean(enable) ? enable : true;
	if (enable)
	{
		this.autoHide = true;
		this.bindAutoHide();
	}
	else
	{
		this.autoHide = false;
		this.unbindAutoHide();
	}
};

/**
 * @private
 */
BX.PopupWindow.prototype.bindAutoHide = function()
{
	if (this.autoHide && !this.isAutoHideBinded && this.isShown())
	{
		this.isAutoHideBinded = true;

		if (this.isCompatibleMode())
		{
			BX.bind(this.getPopupContainer(), "click", this.cancelBubble);
		}

		if (this.overlay && this.overlay.element)
		{
			BX.bind(this.overlay.element, "click", this.handleOverlayClick);
		}
		else
		{
			if (this.isCompatibleMode())
			{
				BX.bind(document, "click", this.handleAutoHide);
			}
			else
			{
				document.addEventListener("click", this.handleAutoHide, true);
			}
		}
	}
};

/**
 * @private
 */
BX.PopupWindow.prototype.unbindAutoHide = function()
{
	if (this.isAutoHideBinded)
	{
		this.isAutoHideBinded = false;

		if (this.isCompatibleMode())
		{
			BX.unbind(this.getPopupContainer(), "click", this.cancelBubble);
		}

		if (this.overlay && this.overlay.element)
		{
			BX.unbind(this.overlay.element, "click", this.handleOverlayClick);
		}
		else
		{
			if (this.isCompatibleMode())
			{
				BX.unbind(document, "click", this.handleAutoHide);
			}
			else
			{
				document.removeEventListener("click", this.handleAutoHide, true);
			}
		}
	}
};

/**
 * @private
 * @param event
 */
BX.PopupWindow.prototype.handleAutoHide = function(event)
{
	if (this.isDestroyed())
	{
		return;
	}

	if (this.autoHideHandler !== null)
	{
		if (this.autoHideHandler(event))
		{
			this._tryCloseByEvent(event);
		}
	}
	else if (event.target !== this.getPopupContainer() && !this.getPopupContainer().contains(event.target))
	{
		this._tryCloseByEvent(event);
	}
};

BX.PopupWindow.prototype._tryCloseByEvent = function(event)
{
	if (this.isCompatibleMode())
	{
		this.tryCloseByEvent(event);
	}
	else
	{
		setTimeout(BX.proxy(this.tryCloseByEvent, this), 0, event);
	}
};

/**
 *
 * @param {MouseEvent} event
 * @private
 */
BX.PopupWindow.prototype.handleOverlayClick = function(event)
{
	this.tryCloseByEvent(event);
	event.stopPropagation();
};

/**
 *
 * @param {object} params
 * @param {Number} [params.opacity]
 * @param {string} [params.backgroundColor]
 */
BX.PopupWindow.prototype.setOverlay = function(params)
{
	if (this.overlay === null)
	{
		this.overlay = {
			element : BX.create("div", {
				props : {
					className: "popup-window-overlay", id : "popup-window-overlay-" + this.uniquePopupId
				}
			})
		};

		this.adjustOverlayZindex();
		this.resizeOverlay();

		this.appendContainer.appendChild(this.overlay.element);
	}

	if (params && params.hasOwnProperty('opacity') && BX.type.isNumber(params.opacity) && params.opacity >= 0 && params.opacity <= 100)
	{
		if (BX.browser.IsIE() && !BX.browser.IsIE9())
		{
			this.overlay.element.style.filter =  "alpha(opacity=" + params.opacity +")";
		}
		else
		{
			this.overlay.element.style.filter = "none";
			this.overlay.element.style.opacity = parseFloat(params.opacity/100).toPrecision(3);
		}
	}

	if (params && params.backgroundColor)
	{
		this.overlay.element.style.backgroundColor = params.backgroundColor;
	}
};

BX.PopupWindow.prototype.removeOverlay = function()
{
	if (this.overlay !== null && this.overlay.element !== null)
	{
		BX.remove(this.overlay.element);
	}

	if (this.overlayTimeout)
	{
		clearInterval(this.overlayTimeout);
		this.overlayTimeout = null;
	}

	this.overlay = null;
};

BX.PopupWindow.prototype.hideOverlay = function()
{
	if (this.overlay !== null && this.overlay.element !== null)
	{
		if (this.overlayTimeout)
		{
			clearInterval(this.overlayTimeout);
			this.overlayTimeout = null;
		}

		this.overlay.element.style.display = "none";
	}
};

BX.PopupWindow.prototype.showOverlay = function()
{
	if (this.overlay !== null && this.overlay.element !== null)
	{
		this.overlay.element.style.display = "block";

		var popupHeight = this.getPopupContainer().offsetHeight;
		this.overlayTimeout = setInterval(function() {
			if (popupHeight !== this.getPopupContainer().offsetHeight)
			{
				this.resizeOverlay();
				popupHeight = this.getPopupContainer().offsetHeight;
			}

		}.bind(this), 1000);
	}
};

BX.PopupWindow.prototype.resizeOverlay = function()
{
	if (this.overlay !== null && this.overlay.element !== null)
	{
		var windowSize = BX.GetWindowScrollSize();
		var scrollHeight = Math.max(
			document.body.scrollHeight, document.documentElement.scrollHeight,
			document.body.offsetHeight, document.documentElement.offsetHeight,
			document.body.clientHeight, document.documentElement.clientHeight
		);

		this.overlay.element.style.width = windowSize.scrollWidth + "px";
		this.overlay.element.style.height = scrollHeight + "px";
	}
};

BX.PopupWindow.prototype.getZindex = function()
{
	if (this.overlay !== null)
	{
		return (this.params.zIndexAbsolute > 0 ? this.params.zIndexAbsolute : BX.PopupWindow.getOption("popupOverlayZindex") + this.params.zIndex);
	}
	else
	{
		return (this.params.zIndexAbsolute > 0 ? this.params.zIndexAbsolute : BX.PopupWindow.getOption("popupZindex") + this.params.zIndex);
	}
};

BX.PopupWindow.prototype.adjustOverlayZindex = function()
{
	if (this.overlay !== null && this.overlay.element !== null)
	{
		this.overlay.element.style.zIndex = parseInt(this.getPopupContainer().style.zIndex) - 1;
	}
};

BX.PopupWindow.prototype.show = function()
{
	if (this.isShown() || this.isDestroyed())
	{
		return;
	}

	if (!this.firstShow)
	{
		BX.onCustomEvent(this, "onPopupFirstShow", [this]);
		this.firstShow = true;
	}

	BX.onCustomEvent(this, "onPopupShow", [this]);

	this.showOverlay();
	this.getPopupContainer().style.display = "block";
	this.adjustPosition();

	this.animateOpening(function() {

		if (this.isDestroyed())
		{
			return;
		}

		BX.removeClass(this.getPopupContainer(), this.animationShowClassName);
		BX.onCustomEvent(this, "onAfterPopupShow", [this]);
	}.bind(this));


	this.bindClosingByEsc();

	if (this.isCompatibleMode())
	{
		setTimeout(function() {
			this.bindAutoHide();
		}.bind(this), 100);
	}
	else
	{
		this.bindAutoHide();
	}
};

/**
 * @private
 * @param {Function} callback
 */
BX.PopupWindow.prototype.animateOpening = function(callback)
{
	BX.removeClass(this.getPopupContainer(), this.animationCloseClassName);

	if (this.animationShowClassName !== null)
	{
		BX.addClass(this.getPopupContainer(), this.animationShowClassName);

		if (this.animationCloseEventType !== null)
		{
			var eventName = this.animationCloseEventType + "end";
			this.getPopupContainer().addEventListener(eventName, function handleTransitionEnd() {
				this.removeEventListener(eventName, handleTransitionEnd);
				callback();
			});
		}
		else
		{
			callback();
		}
	}
	else
	{
		callback();
	}
};

/**
 * @private
 * @param {Function} callback
 */
BX.PopupWindow.prototype.animateClosing = function(callback)
{
	BX.removeClass(this.getPopupContainer(), this.animationShowClassName);

	if (this.animationCloseClassName !== null)
	{
		BX.addClass(this.getPopupContainer(), this.animationCloseClassName);

		if (this.animationCloseEventType !== null)
		{
			var eventName = this.animationCloseEventType + "end";
			this.getPopupContainer().addEventListener(eventName, function handleTransitionEnd() {
				this.removeEventListener(eventName, handleTransitionEnd);
				callback();
			});
		}
		else
		{
			callback();
		}
	}
	else
	{
		callback();
	}
};

/**
 * @public
 * @return {boolean}
 */
BX.PopupWindow.prototype.isShown = function()
{
   return !this.isDestroyed() && this.getPopupContainer().style.display === "block";
};

/**
 * @private
 * @param event
 */
BX.PopupWindow.prototype.cancelBubble = function(event)
{
	event = event || window.event;

	if (event.stopPropagation)
	{
		event.stopPropagation();
	}
	else
	{
		event.cancelBubble = true;
	}
};

/**
 * @
 * @return {void}
 */
BX.PopupWindow.prototype.close = function()
{
	if (this.isDestroyed() || !this.isShown())
	{
		return;
	}

	BX.onCustomEvent(this, "onPopupClose", [this]);

	if (this.isDestroyed())
	{
		return;
	}

	this.animateClosing(function() {

		if (this.isDestroyed())
		{
			return;
		}

		this.hideOverlay();

		this.getPopupContainer().style.display = "none";

		BX.removeClass(this.getPopupContainer(), this.animationCloseClassName);

		this.unbindClosingByEsc();

		if (this.isCompatibleMode())
		{
			setTimeout(function() {
				this.unbindAutoHide();
			}.bind(this), 0);
		}
		else
		{
			this.unbindAutoHide();
		}

		if (!this.isCacheable())
		{
			this.destroy();
		}

	}.bind(this));
};

BX.PopupWindow.prototype.toggle = function()
{
	this.isShown() ? this.close() : this.show();
};

/**
 * @private
 * @param {MouseEvent} event
 */
BX.PopupWindow.prototype.tryCloseByEvent = function(event)
{
	if (this.isLeftButton(event))
	{
		this.close();
	}
};

BX.PopupWindow.prototype.setAnimation = function(options)
{
	if (BX.type.isPlainObject(options))
	{
		this.animationShowClassName = BX.type.isNotEmptyString(options.showClassName) ? options.showClassName : null;
		this.animationCloseClassName = BX.type.isNotEmptyString(options.closeClassName) ? options.closeClassName : null;
		this.animationCloseEventType =
			BX.util.in_array(options.closeAnimationType, ["animation", "transition"])
				? options.closeAnimationType
				: null
		;
	}
	else if (BX.type.isNotEmptyString(options))
	{
		var animationName = options;

		if (animationName === "fading")
		{
			this.animationShowClassName = "popup-window-show-animation-opacity";
			this.animationCloseClassName = "popup-window-close-animation-opacity";
			this.animationCloseEventType = 'animation';
		}
		else if (animationName === "fading-slide")
		{
			this.animationShowClassName = "popup-window-show-animation-opacity-transform";
			this.animationCloseClassName = "popup-window-close-animation-opacity";
			this.animationCloseEventType = "animation";
		}
		else if (animationName === "scale")
		{
			this.animationShowClassName = "popup-window-show-animation-scale";
			this.animationCloseClassName = "popup-window-close-animation-opacity";
			this.animationCloseEventType = "animation";
		}
	}
	else if (options === false || options === null)
	{
		this.animationShowClassName = null;
		this.animationCloseClassName = null;
		this.animationCloseEventType = null;
	}
};

/**
 *
 * @param {MouseEvent} event
 * @private
 */
BX.PopupWindow.prototype.handleCloseIconClick = function(event)
{
	this.tryCloseByEvent(event);
	event.stopPropagation();
};

/**
 * @private
 * @param {MouseEvent} event
 */
BX.PopupWindow.prototype.isLeftButton = function(event)
{
	return event.button === 0;
};

BX.PopupWindow.prototype.handleDocumentKeyUp = function(event)
{
	event = event || window.event;
	if (event.keyCode === 27)
	{
		_checkEscPressed(this.getZindex(), BX.proxy(this.close, this));
	}
};

BX.PopupWindow.prototype.destroy = function()
{
	BX.onCustomEvent(this, "onPopupDestroy", [this]);

	this.destroyed = true;

	this.unbindClosingByEsc();

	if (this.isCompatibleMode())
	{
		setTimeout(function() {
			this.unbindAutoHide();
		}.bind(this), 0);
	}
	else
	{
		this.unbindAutoHide();
	}

	BX.unbindAll(this);
	BX.unbind(document, "mousemove", BX.proxy(this._moveDrag, this));
	BX.unbind(document, "mouseup", BX.proxy(this._stopDrag, this));
	BX.unbind(window, "resize", this.handleResizeWindow);

	BX.remove(this.popupContainer);
	this.removeOverlay();

	this.popupContainer = null;
	this.contentContainer = null;
	this.closeIcon = null;
	this.titleBar = null;
	this.buttonsContainer = null;
	this.angle = null;
	this.resizeIcon = null;
};

BX.PopupWindow.prototype.enterFullScreen = function()
{
	if (BX.PopupWindow.fullscreenStatus)
	{
		if (document.cancelFullScreen)
		{
			document.cancelFullScreen();
		}
		else if (document.mozCancelFullScreen)
		{
			document.mozCancelFullScreen();
		}
		else if (document.webkitCancelFullScreen)
		{
			document.webkitCancelFullScreen();
		}
	}
	else
	{
		if (BX.browser.IsChrome() || BX.browser.IsSafari())
		{
			this.contentContainer.webkitRequestFullScreen(this.contentContainer.ALLOW_KEYBOARD_INPUT);
			BX.bind(window, "webkitfullscreenchange", this.fullscreenBind = BX.proxy(this.eventFullScreen, this));
		}
		else if (BX.browser.IsFirefox())
		{
			this.contentContainer.mozRequestFullScreen(this.contentContainer.ALLOW_KEYBOARD_INPUT);
			BX.bind(window, "mozfullscreenchange", this.fullscreenBind = BX.proxy(this.eventFullScreen, this));
		}
	}
};

BX.PopupWindow.prototype.eventFullScreen = function(event)
{
	if (BX.PopupWindow.fullscreenStatus)
	{
		if (BX.browser.IsChrome() || BX.browser.IsSafari())
		{
			BX.unbind(window, "webkitfullscreenchange", this.fullscreenBind);
		}
		else if (BX.browser.IsFirefox())
		{
			BX.unbind(window, "mozfullscreenchange", this.fullscreenBind);
		}

		BX.removeClass(this.contentContainer, "popup-window-fullscreen", [this.contentContainer]);

		BX.PopupWindow.fullscreenStatus = false;
		BX.onCustomEvent(this, "onPopupFullscreenLeave");
		this.adjustPosition();
	}
	else
	{
		BX.addClass(this.contentContainer, "popup-window-fullscreen");
		BX.PopupWindow.fullscreenStatus = true;
		BX.onCustomEvent(this, "onPopupFullscreenEnter", [this.contentContainer]);
		this.adjustPosition();
	}
};

/**
 *
 * @param {object} [bindOptions]
 * @param {bool} [bindOptions.forceBindPosition]
 * @param {bool} [bindOptions.forceLeft]
 * @param {bool} [bindOptions.forceTop]
 * @param {string} [bindOptions.position = "bottom"]
 */
BX.PopupWindow.prototype.adjustPosition = function(bindOptions)
{
	if (bindOptions && typeof(bindOptions) === "object")
	{
		this.bindOptions = bindOptions;
	}

	var bindElementPos = this.getBindElementPos(this.bindElement);

	if (
		!this.bindOptions.forceBindPosition &&
		this.bindElementPos !== null &&
		bindElementPos.top === this.bindElementPos.top &&
		bindElementPos.left === this.bindElementPos.left
	)
	{
		return;
	}

	this.bindElementPos = bindElementPos;

	var windowSize = bindElementPos.windowSize ? bindElementPos.windowSize : BX.GetWindowInnerSize();
	var windowScroll = bindElementPos.windowScroll ? bindElementPos.windowScroll : BX.GetWindowScrollPos();
	var popupWidth = bindElementPos.popupWidth ? bindElementPos.popupWidth : this.popupContainer.offsetWidth;
	var popupHeight = bindElementPos.popupHeight ? bindElementPos.popupHeight : this.popupContainer.offsetHeight;

	var angleTopOffset = BX.PopupWindow.getOption("angleTopOffset");

	var left = this.bindElementPos.left + this.offsetLeft -
				(this.isTopOrBottomAngle() ? BX.PopupWindow.getOption("angleLeftOffset") : 0);

	if (
		!this.bindOptions.forceLeft &&
		(left + popupWidth + this.bordersWidth) >= (windowSize.innerWidth + windowScroll.scrollLeft) &&
		(windowSize.innerWidth + windowScroll.scrollLeft - popupWidth - this.bordersWidth) > 0)
	{
		var bindLeft = left;
		left = windowSize.innerWidth + windowScroll.scrollLeft - popupWidth - this.bordersWidth;
		if (this.isTopOrBottomAngle())
		{
			this.setAngle({ offset : bindLeft - left + this.angle.defaultOffset});
		}
	}
	else if (this.isTopOrBottomAngle())
	{
		this.setAngle({ offset : this.angle.defaultOffset + (left < 0 ? left : 0) });
	}

	if (left < 0)
	{
		left = 0;
	}

	var top = 0;

	if (this.bindOptions.position && this.bindOptions.position === "top")
	{

		top = this.bindElementPos.top - popupHeight - this.offsetTop - (this.isBottomAngle() ? angleTopOffset : 0);
		if (top < 0 || (!this.bindOptions.forceTop && top < windowScroll.scrollTop))
		{
			top = this.bindElementPos.bottom + this.offsetTop;
			if (this.angle !== null)
			{
				top += angleTopOffset;
				this.setAngle({ position: "top"});
			}
		}
		else if (this.isTopAngle())
		{
			top = top - angleTopOffset + BX.PopupWindow.getOption("positionTopXOffset");
			this.setAngle({ position: "bottom"});
		}
		else
		{
			top += BX.PopupWindow.getOption("positionTopXOffset");
		}
	}
	else
	{

		top = this.bindElementPos.bottom + this.offsetTop + this.getAngleHeight();

		if (
			!this.bindOptions.forceTop &&
			(top + popupHeight) > (windowSize.innerHeight + windowScroll.scrollTop) &&
			(this.bindElementPos.top - popupHeight - this.getAngleHeight()) >= 0) //Can we place the PopupWindow above the bindElement?
		{
			//The PopupWindow doesn't place below the bindElement. We should place it above.
			top = this.bindElementPos.top - popupHeight;

			if (this.isTopOrBottomAngle())
			{
				top -= angleTopOffset;
				this.setAngle({ position: "bottom"});
			}

			top += BX.PopupWindow.getOption("positionTopXOffset");

		}
		else if (this.isBottomAngle())
		{
			top += angleTopOffset;
			this.setAngle({ position: "top"});
		}
	}

	if (top < 0)
	{
		top = 0;
	}

	BX.adjust(this.popupContainer, { style: {
		top: top + "px",
		left: left + "px",
		zIndex: this.getZindex()
	}});

	this.adjustOverlayZindex();
};

BX.PopupWindow.prototype.handleResizeWindow = function(event)
{
	if (this.isShown())
	{
		this.adjustPosition();
		if (this.overlay !== null)
		{
			this.resizeOverlay();
		}
	}
};

BX.PopupWindow.prototype.move = function(offsetX, offsetY, pageX, pageY)
{
	var left = parseInt(this.popupContainer.style.left) + offsetX;
	var top = parseInt(this.popupContainer.style.top) + offsetY;

	if (typeof(this.params.draggable) === "object" && this.params.draggable.restrict)
	{
		//Left side
		if (left < 0)
		{
			left = 0;
		}

		//Right side
		var scrollSize = BX.GetWindowScrollSize();
		var floatWidth = this.popupContainer.offsetWidth;
		var floatHeight = this.popupContainer.offsetHeight;

		if (left > (scrollSize.scrollWidth - floatWidth))
		{
			left = scrollSize.scrollWidth - floatWidth;
		}

		if (top > (scrollSize.scrollHeight - floatHeight))
		{
			top = scrollSize.scrollHeight - floatHeight;
		}

		//Top side
		if (top < 0)
		{
			top = 0;
		}
	}

	this.popupContainer.style.left = left + "px";
	this.popupContainer.style.top = top + "px";
};

BX.PopupWindow.prototype._startDrag = function(event, options)
{
	event = event || window.event;
	BX.fixEventPageXY(event);

	options = options || {};
	if (BX.type.isNotEmptyString(options.cursor))
	{
		this.dragOptions.cursor = options.cursor;
	}

	if (BX.type.isNotEmptyString(options.eventName))
	{
		this.dragOptions.eventName = options.eventName;
	}

	if (BX.type.isFunction(options.callback))
	{
		this.dragOptions.callback = options.callback;
	}

	this.dragPageX = event.pageX;
	this.dragPageY = event.pageY;
	this.dragged = false;

	BX.bind(document, "mousemove", BX.proxy(this._moveDrag, this));
	BX.bind(document, "mouseup", BX.proxy(this._stopDrag, this));

	if (document.body.setCapture)
	{
		document.body.setCapture();
	}

	document.body.ondrag = BX.False;
	document.body.onselectstart = BX.False;
	document.body.style.cursor = this.dragOptions.cursor;
	document.body.style.MozUserSelect = "none";
	this.popupContainer.style.MozUserSelect = "none";

	return BX.PreventDefault(event);
};

BX.PopupWindow.prototype._moveDrag = function(event)
{
	event = event || window.event;
	BX.fixEventPageXY(event);

	if (this.dragPageX === event.pageX && this.dragPageY === event.pageY)
	{
		return;
	}

	this.dragOptions.callback(
		event.pageX - this.dragPageX,
		event.pageY - this.dragPageY,
		event.pageX,
		event.pageY
	);

	this.dragPageX = event.pageX;
	this.dragPageY = event.pageY;

	if (!this.dragged)
	{
		BX.onCustomEvent(this, "onPopup" + this.dragOptions.eventName + "Start", [this]);
		this.dragged = true;
	}

	BX.onCustomEvent(this, "onPopup" + this.dragOptions.eventName, [this]);
};

BX.PopupWindow.prototype._stopDrag = function(event)
{
	if(document.body.releaseCapture)
	{
		document.body.releaseCapture();
	}

	BX.unbind(document, "mousemove", BX.proxy(this._moveDrag, this));
	BX.unbind(document, "mouseup", BX.proxy(this._stopDrag, this));

	//document.onmousedown = null;
	document.body.ondrag = null;
	document.body.onselectstart = null;
	document.body.style.cursor = "";
	document.body.style.MozUserSelect = "";
	this.popupContainer.style.MozUserSelect = "";

	BX.onCustomEvent(this, "onPopup" + this.dragOptions.eventName + "End", [this]);
	this.dragged = false;

	return BX.PreventDefault(event);
};

BX.PopupWindow.options = {};
BX.PopupWindow.defaultOptions = {

	angleLeftOffset : 40, /*left offset for popup about target */

	positionTopXOffset : -11, /* when popup position is 'top' offset distance between popup body and target node */

	angleTopOffset : 10,    /* offset distance between popup body and target node if use angle, sum with positionTopXOffset  */

	popupZindex : 1000,
	popupOverlayZindex : 1100,

	angleMinLeft : 10,
	angleMaxLeft : 10,

	angleMinRight : 10,
	angleMaxRight : 10,

	angleMinBottom : 23, /**/
	angleMaxBottom : 25,

	angleMinTop : 23,
	angleMaxTop : 25,

	offsetLeft : 0,
	offsetTop: 0
};

BX.PopupWindow.setOptions = function(options)
{
	if (!options || typeof(options) !== "object")
	{
		return;
	}

	for (var option in options)
	{
		BX.PopupWindow.options[option] = options[option];
	}
};

BX.PopupWindow.getOption = function(option, defaultValue)
{
	if (typeof(BX.PopupWindow.options[option]) !== "undefined")
	{
		return BX.PopupWindow.options[option];
	}
	else if (typeof(defaultValue) !== "undefined")
	{
		return defaultValue;
	}
	else
	{
		return BX.PopupWindow.defaultOptions[option];
	}
};

/**
 *
 * @param {object} params
 * @param {string} [params.text]
 * @param {string} [params.id]
 * @param {string} [params.className]
 * @param {object} [params.events]
 * @constructor
 */
BX.PopupWindowButton = function(params)
{
	this.popupWindow = null;

	this.params = params || {};

	this.text = this.params.text || "";
	this.id = this.params.id || "";
	this.className = this.params.className || "";
	this.events = this.params.events || {};

	this.contextEvents = {};
	for (var eventName in this.events)
	{
		this.contextEvents[eventName] = BX.proxy(this.events[eventName], this);
	}

	this.buttonNode = BX.create(
		"span",
		{
			props : { className : "popup-window-button" + (this.className.length > 0 ? " " + this.className : ""), id : this.id },
			events : this.contextEvents,
			text : this.text
		}
	);
};

BX.PopupWindowButton.prototype.render = function()
{
	return this.buttonNode;
};

BX.PopupWindowButton.prototype.getId = function()
{
	return this.id;
};

BX.PopupWindowButton.prototype.getName = function()
{
	return this.name;
};

/**
 *
 * @returns {Element}
 */
BX.PopupWindowButton.prototype.getContainer = function()
{
	return this.buttonNode;
};

BX.PopupWindowButton.prototype.setName = function(name)
{
	this.text = name || "";
	if (this.buttonNode)
	{
		BX.cleanNode(this.buttonNode);
		BX.adjust(this.buttonNode, { text : this.text} );
	}
};

BX.PopupWindowButton.prototype.setClassName = function(className)
{
	if (this.buttonNode)
	{
		if (BX.type.isString(this.className) && (this.className !== ""))
		{
			BX.removeClass(this.buttonNode, this.className);
		}

		BX.addClass(this.buttonNode, className)
	}

	this.className = className;
};

BX.PopupWindowButton.prototype.addClassName = function(className)
{
	if (this.buttonNode)
	{
		BX.addClass(this.buttonNode, className);
		this.className = this.buttonNode.className;
	}
};

BX.PopupWindowButton.prototype.removeClassName = function(className)
{
	if (this.buttonNode)
	{
		BX.removeClass(this.buttonNode, className);
		this.className = this.buttonNode.className;
	}
};

BX.PopupWindowButtonLink = function(params)
{
	BX.PopupWindowButtonLink.superclass.constructor.apply(this, arguments);

	this.buttonNode = BX.create(
		"span",
		{
			props : { className : "popup-window-button popup-window-button-link" + (this.className.length > 0 ? " " + this.className : ""), id : this.id },
			text : this.text,
			events : this.contextEvents
		}
	);

};

BX.extend(BX.PopupWindowButtonLink, BX.PopupWindowButton);

BX.PopupWindowCustomButton = function(params)
{
	BX.PopupWindowCustomButton.superclass.constructor.apply(this, arguments);

	this.buttonNode = BX.create(
		"span",
		{
			props : { className :  (this.className.length > 0 ? " " + this.className : ""), id : this.id },
			events : this.contextEvents,
			text : this.text
		}
	);
};

BX.extend(BX.PopupWindowCustomButton, BX.PopupWindowButton);

BX.PopupMenu = {

	Data: {},
	currentItem: null,

	show: function(options)
	{
		if (this.currentItem !== null)
		{
			this.currentItem.popupWindow.close();
		}

		this.currentItem = this.create.apply(this, arguments);
		this.currentItem.popupWindow.show();
	},

	create: function(options)
	{
		var menuId = null;

		//Compatibility
		var bindElement = arguments[1];
		var menuItems = arguments[2];
		var params = arguments[3];

		if (BX.type.isPlainObject(options) && !bindElement && !menuItems && !params)
		{
			menuId = options.id;
			if (!BX.type.isNotEmptyString(menuId))
			{
				throw new Error("BX.PopupMenu.create: 'id' parameter is required.")
			}
		}
		else
		{
			menuId = options;
		}

		if (!this.Data[menuId])
		{
			this.Data[menuId] = new BX.PopupMenuWindow(options, bindElement, menuItems, params);
			BX.addCustomEvent(this.Data[menuId], 'onPopupMenuDestroy', this.onPopupDestroy.bind(this));
		}

		return this.Data[menuId];
	},

	getCurrentMenu : function()
	{
		return this.currentItem;
	},

	getMenuById : function(id)
	{
		return this.Data[id] ? this.Data[id] : null;
	},

	onPopupDestroy: function(popupMenuWindow)
	{
		this.destroy(popupMenuWindow.id);
	},

	destroy : function(id)
	{
		var menu = this.getMenuById(id);
		if (menu)
		{
			if (this.currentItem === menu)
			{
				this.currentItem = null;
			}
			menu.popupWindow.destroy();
			delete this.Data[id];
		}
	}
};

BX.PopupMenuWindow = function(id, bindElement, menuItems, params)
{
	if (BX.type.isPlainObject(id) && !bindElement && !menuItems && !params)
	{
		params = id;
		params.compatibleMode = false;

		id = params.id;
		bindElement = params.bindElement;
		menuItems = params.items;

		if (!BX.type.isNotEmptyString(id))
		{
			id = "menu-popup-" + BX.util.getRandomString().toLowerCase();
		}
	}

	this.id = id;
	this.bindElement = bindElement;

	/**
	 *
	 * @type {BX.PopupMenuItem[]}
	 */
	this.menuItems = [];
	this.itemsContainer = null;
	this.params = params && typeof(params) === "object" ? params : {};
	this.parentMenuWindow = null;
	this.parentMenuItem = null;

	if (menuItems && BX.type.isArray(menuItems))
	{
		for (var i = 0; i < menuItems.length; i++)
		{
			this.addMenuItemInternal(menuItems[i], null);
		}
	}

	this.layout = {
		menuContainer: null,
		itemsContainer: null
	};

	this.popupWindow = this.__createPopup();
};

BX.PopupMenuWindow.prototype.__createPopup = function()
{
	var domItems = [];
	for (var i = 0; i < this.menuItems.length; i++)
	{
		var item = this.menuItems[i];
		var itemLayout = item.getLayout();
		domItems.push(itemLayout.item);
	}

	var defaults = {
		closeByEsc: false,
		angle: false,
		autoHide: true,
		offsetTop: 1,
		offsetLeft: 0,
		animation: "fading"
	};

	var options = BX.mergeEx(defaults, this.params);

	//Override user params
	options.noAllPaddings = true;
	options.darkMode = false;
	options.autoHideHandler = this.handleAutoHide.bind(this);
	options.content = (this.layout.menuContainer = BX.create("div", {
		props : {
			className : "menu-popup"
		},
		children: [
			(this.layout.itemsContainer = this.itemsContainer = BX.create("div", {
				props : {
					className : "menu-popup-items"
				},
				children: domItems
			}))
		]
	}));

	//Make internal event handlers first in the queue.
	options.events = {
		onPopupClose: this.onMenuWindowClose.bind(this),
		onPopupDestroy: this.onMenuWindowDestroy.bind(this)
	};

	var id = options.compatibleMode === false ? this.getId() : "menu-popup-" + this.getId();
	var popupWindow = new BX.PopupWindow(id, this.bindElement, options);

	if (this.params && this.params.events)
	{
		for (var eventName in this.params.events)
		{
			if (this.params.events.hasOwnProperty(eventName))
			{
				BX.addCustomEvent(popupWindow, eventName, this.params.events[eventName]);
			}
		}
	}

	return popupWindow;
};

/**
 *
 * @returns {BX.PopupWindow}
 */
BX.PopupMenuWindow.prototype.getPopupWindow = function()
{
	return this.popupWindow;
};

BX.PopupMenuWindow.prototype.show = function()
{
	BX.onCustomEvent(this, "onPopupMenuShow", [this]);
	this.getPopupWindow().show();
};

BX.PopupMenuWindow.prototype.close = function()
{
	BX.onCustomEvent(this, "onPopupMenuClose", [this]);
	this.getPopupWindow().close();
};

BX.PopupMenuWindow.prototype.destroy = function()
{
	BX.onCustomEvent(this, "onPopupMenuDestroy", [this]);
	this.getPopupWindow().destroy();
};

BX.PopupMenuWindow.prototype.toggle = function()
{
	if (this.getPopupWindow().isShown())
	{
		this.close();
	}
	else
	{
		this.show();
	}
};

BX.PopupMenuWindow.prototype.getId = function() 
{
	return this.id;
};

BX.PopupMenuWindow.prototype.onMenuWindowClose = function()
{
	for (var i = 0; i < this.menuItems.length; i++)
	{
		var item = this.menuItems[i];
		item.closeSubMenu();
	}
};

BX.PopupMenuWindow.prototype.onMenuWindowDestroy = function()
{
	for (var i = 0; i < this.menuItems.length; i++)
	{
		var item = this.menuItems[i];
		item.destroySubMenu();
	}
};

/**
 * @private
 * @param {Event} event
 * @return {boolean}
 */
BX.PopupMenuWindow.prototype.handleAutoHide = function(event)
{
	return !this.containsTarget(event.target);
};

/**
 *
 * @param {Element} target
 * @return {boolean}
 */
BX.PopupMenuWindow.prototype.containsTarget = function(target)
{
	var el = this.getPopupWindow().getPopupContainer();
	if (this.getPopupWindow().isShown() && (target === el || el.contains(target)))
	{
		return true;
	}

	return this.getMenuItems().some(function(/*BX.PopupMenuItem*/item) {

		return item.getSubMenu() && item.getSubMenu().containsTarget(target);

	});
};

/**
 *
 * @param {BX.PopupMenuWindow} parentMenuWindow
 */
BX.PopupMenuWindow.prototype.setParentMenuWindow = function(parentMenuWindow)
{
	if (parentMenuWindow instanceof BX.PopupMenuWindow)
	{
		this.parentMenuWindow = parentMenuWindow;
	}
};

/**
 *
 * @returns {BX.PopupMenuWindow|null}
 */
BX.PopupMenuWindow.prototype.getParentMenuWindow = function()
{
	return this.parentMenuWindow;
};

BX.PopupMenuWindow.prototype.getRootMenuWindow = function()
{
	var root = null;
	var parent = this.getParentMenuWindow();
	while (parent !== null)
	{
		root = parent;
		parent = parent.getParentMenuWindow();
	}

	return root;
};

/**
 *
 * @param {BX.PopupMenuItem} parentMenuItem
 */
BX.PopupMenuWindow.prototype.setParentMenuItem = function(parentMenuItem)
{
	if (parentMenuItem instanceof BX.PopupMenuItem)
	{
		this.parentMenuItem = parentMenuItem;
	}
};

/**
 *
 * @returns {BX.PopupMenuItem}
 */
BX.PopupMenuWindow.prototype.getParentMenuItem = function()
{
	return this.parentMenuItem;
};

/**
 *
 * @param menuItemJson
 * @param targetItemId
 * @returns {BX.PopupMenuItem}
 */
BX.PopupMenuWindow.prototype.addMenuItem = function(menuItemJson, targetItemId)
{
	var menuItem = this.addMenuItemInternal(menuItemJson, targetItemId);
	if (!menuItem)
	{
		return null;
	}

	var itemLayout = menuItem.getLayout();
	var targetItem = this.getMenuItem(targetItemId);
	if (targetItem !== null)
	{
		var targetLayout = targetItem.getLayout();
		this.itemsContainer.insertBefore(itemLayout.item, targetLayout.item);
	}
	else
	{
		this.itemsContainer.appendChild(itemLayout.item);
	}

	return menuItem;
};

/**
 *
 * @param menuItemJson
 * @param targetItemId
 * @returns {BX.PopupMenuItem}
 */
BX.PopupMenuWindow.prototype.addMenuItemInternal = function(menuItemJson, targetItemId)
{
	if (
		!menuItemJson ||
		(!menuItemJson.delimiter && !BX.type.isNotEmptyString(menuItemJson.text)) ||
		(menuItemJson.id && this.getMenuItem(menuItemJson.id) !== null)
	)
	{
		return null;
	}

	if (BX.type.isNumber(this.params.menuShowDelay))
	{
		menuItemJson.menuShowDelay = this.params.menuShowDelay;
	}

	var menuItem = new BX.PopupMenuItem(menuItemJson);
	menuItem.setMenuWindow(this);

	var position = this.getMenuItemPosition(targetItemId);
	if (position >= 0)
	{
		this.menuItems = BX.util.insertIntoArray(this.menuItems, position, menuItem);
	}
	else
	{
		this.menuItems.push(menuItem);
	}

	return menuItem;
};

BX.PopupMenuWindow.prototype.removeMenuItem = function(itemId)
{
	var item = this.getMenuItem(itemId);
	if (!item)
	{
		return;
	}

	for (var position = 0; position < this.menuItems.length; position++)
	{
		if (this.menuItems[position] === item)
		{
			item.destroySubMenu();
			this.menuItems = BX.util.deleteFromArray(this.menuItems, position);
			break;
		}
	}

	if (!this.menuItems.length)
	{
		var menuWindow = item.getMenuWindow();
		if (menuWindow)
		{
			var parentMenuItem = menuWindow.getParentMenuItem();
			if (parentMenuItem)
			{
				parentMenuItem.destroySubMenu();
			}
			else
			{
				menuWindow.destroy();
			}
		}
	}

	item.layout.item.parentNode.removeChild(item.layout.item);
	item.layout = {
		item: null,
		text: null
	};
};

/**
 *
 * @param itemId
 * @returns {BX.PopupMenuItem}
 */
BX.PopupMenuWindow.prototype.getMenuItem = function(itemId)
{
	for (var i = 0; i < this.menuItems.length; i++)
	{
		if (this.menuItems[i].id && this.menuItems[i].id === itemId)
		{
			return this.menuItems[i];
		}
	}

	return null;
};

/**
 *
 * @returns {BX.PopupMenuItem[]}
 */
BX.PopupMenuWindow.prototype.getMenuItems = function()
{
	return this.menuItems;
};

/**
 *
 * @param itemId
 * @returns {Number}
 */
BX.PopupMenuWindow.prototype.getMenuItemPosition = function(itemId)
{
	if (itemId)
	{
		for (var i = 0; i < this.menuItems.length; i++)
		{
			if (this.menuItems[i].id && this.menuItems[i].id === itemId)
			{
				return i;
			}
		}
	}

	return -1;
};

/**
 *
 * @param {Object} options
 * @param {string} [options.id]
 * @param {string} [options.text]
 * @param {string} [options.title = ""]
 * @param {boolean} [options.disabled = false]
 * @param {string} [options.href = null]
 * @param {string} [options.target = null]
 * @param {string} [options.className = null]
 * @param {boolean} [options.delimiter = false]
 * @param {Number} [options.menuShowDelay = 300]
 * @param {Number} [options.subMenuOffsetX = 4]
 * @param {object} [options.events]
 * @param {object} [options.dataset]
 * @param {function|string} [options.onclick = null]
 * @param {array[]} [options.items = []]
 * @constructor
 */
BX.PopupMenuItem = function(options)
{
	options = options || {};
	this.options = options;

	this.id = options.id || BX.util.getRandomString().toLowerCase();
	this.text = BX.type.isNotEmptyString(options.text) ? options.text : "";
	this.title = BX.type.isNotEmptyString(options.title) ? options.title : "";
	this.delimiter = options.delimiter === true;
	this.href = BX.type.isNotEmptyString(options.href) ? options.href : null;
	this.target = BX.type.isNotEmptyString(options.target) ? options.target : null;
	this.dataset = BX.type.isPlainObject(options.dataset) ? options.dataset : null;
	this.className = BX.type.isNotEmptyString(options.className) ? options.className : null;
	this.menuShowDelay = BX.type.isNumber(options.menuShowDelay) ? options.menuShowDelay : 300;
	this.subMenuOffsetX = BX.type.isNumber(options.subMenuOffsetX) ? options.subMenuOffsetX : 4;
	this._items = BX.type.isArray(options.items) ? options.items : [];
	this.disabled = options.disabled === true;
	this.cacheable = options.cacheable === true;

	/**
	 *
	 * @type {function|string}
	 */
	this.onclick =
		BX.type.isNotEmptyString(options.onclick) || BX.type.isFunction(options.onclick)
			? options.onclick
			: null
	;

	if (BX.type.isPlainObject(options.events))
	{
		for (var eventName in options.events)
		{
			BX.addCustomEvent(this, eventName, options.events[eventName]);
		}
	}

	/**
	 *
	 * @type {BX.PopupMenuWindow}
	 */
	this.menuWindow = null;

	/**
	 *
	 * @type {BX.PopupMenuWindow}
	 */
	this.subMenuWindow = null;

	/**
	 *
	 * @type {{item: Element, text: Element}}
	 */
	this.layout = {
		item: null,
		text: null
	};

	this.getLayout(); //compatibility

	//compatibility
	//now use this.options
	this.events = {};
	this.items = [];
	for (var property in options)
	{
		if (options.hasOwnProperty(property) && typeof(this[property]) === "undefined")
		{
			this[property] = options[property];
		}
	}
};

BX.PopupMenuItem.prototype = {

	getLayout: function()
	{
		if (this.layout.item)
		{
			return this.layout;
		}

		if (this.delimiter)
		{
			if (BX.type.isNotEmptyString(this.text))
			{
				this.layout.item = BX.create("span", {
					props: {
						className: "popup-window-delimiter-section"
					},
					children: [
						(this.layout.text = BX.create("span", {
							props : {
								className: "popup-window-delimiter-text"
							},
							html : this.text
						}))
					]
				});

			}
			else
			{
				this.layout.item = BX.create("span", {
					props: {
						className: "popup-window-delimiter"
					}
				});
			}
		}
		else
		{
			this.layout.item = BX.create(this.href ? "a" : "span", {
				props : {
					className: [
						"menu-popup-item",
						(this.className ? this.className : "menu-popup-no-icon"),
						(this.hasSubMenu() ? "menu-popup-item-submenu" : "")
					].join(" ")
				},

				attrs : {
					title : this.title,
					onclick: BX.type.isString(this.onclick) ? this.onclick : "", // compatibility
					target : this.target ? this.target : ""
				},

				dataset: this.dataset,

				events :
					BX.type.isFunction(this.onclick)
						? { click : BX.delegate(this.onItemClick, this) }
						: null
				,

				children : [
					BX.create("span", { props : { className: "menu-popup-item-icon"} }),
					(this.layout.text = BX.create("span", {
						props : {
							className: "menu-popup-item-text"
						},
						html : this.text
					}))
				]
			});

			if (this.href)
			{
				this.layout.item.href = this.href;
			}

			if (this.isDisabled())
			{
				this.disable();
			}

			BX.bind(this.layout.item, "mouseenter", this.onItemMouseEnter.bind(this));
			BX.bind(this.layout.item, "mouseleave", this.onItemMouseLeave.bind(this));
		}

		return this.layout;
	},

	getContainer: function()
	{
		return this.getLayout().item;
	},

	getTextContainer: function()
	{
		return this.getLayout().text;
	},

	getText: function()
	{
		return this.text;
	},

	setText: function(text)
	{
		if (BX.type.isString(text))
		{
			this.text = text;
			this.getTextContainer().innerHTML = text;
		}
	},

	onItemClick: function(event)
	{
		this.onclick.call(this.menuWindow, event, this); //compatibility
	},

	onItemMouseEnter: function(event)
	{
		if (this.isDisabled())
		{
			return;
		}

		BX.onCustomEvent(this, "onMouseEnter");

		if (this.subMenuTimeout)
		{
			clearTimeout(this.subMenuTimeout);
		}

		if (this.hasSubMenu())
		{
			this.subMenuTimeout = setTimeout(function() {
				this.showSubMenu();
			}.bind(this), this.menuShowDelay);
		}
		else
		{
			this.subMenuTimeout = setTimeout(function() {
				this.closeSiblings();
			}.bind(this), this.menuShowDelay);
		}
	},

	onItemMouseLeave: function(event)
	{
		if (this.isDisabled())
		{
			return;
		}

		BX.onCustomEvent(this, "onMouseLeave");

		if (this.subMenuTimeout)
		{
			clearTimeout(this.subMenuTimeout);
		}
	},

	hasSubMenu: function()
	{
		return this.subMenuWindow !== null || this._items.length;
	},

	showSubMenu: function()
	{
		this.addSubMenu(this._items);

		if (this.subMenuWindow)
		{
			BX.addClass(this.layout.item, "menu-popup-item-open");

			this.closeSiblings();
			this.closeChildren();

			var popupWindow = this.subMenuWindow.getPopupWindow();
			if (!popupWindow.isShown())
			{
				BX.onCustomEvent(this, "onSubMenuShow");
				popupWindow.show();
			}

			this.adjustSubMenu();
		}
	},

	/**
	 *
	 * @param {object[]} items
	 * @return {BX.PopupMenuWindow}
	 */
	addSubMenu: function(items)
	{
		if (this.subMenuWindow !== null || !BX.type.isArray(items) || !items.length)
		{
			return;
		}

		var rootMenuWindow = this.getMenuWindow().getRootMenuWindow() || this.getMenuWindow();
		var options = rootMenuWindow.params;

		//Override root menu options
		options.autoHide = false;
		options.menuShowDelay = this.menuShowDelay;
		options.cacheable = this.isCacheable();
		options.zIndexAbsolute = this.getMenuWindow().getPopupWindow().getZindex() + 2;
		options.bindOptions = {
			forceTop: true,
			forceLeft: true,
			forceBindPosition: true
		};

		delete options.zIndex;
		delete options.events;
		delete options.angle;
		delete options.overlay;

		this.subMenuWindow = new BX.PopupMenuWindow("popup-submenu-" + this.id, this.layout.item, items, options);
		this.subMenuWindow.setParentMenuWindow(this.getMenuWindow());
		this.subMenuWindow.setParentMenuItem(this);

		BX.addCustomEvent(this.subMenuWindow.getPopupWindow(), "onPopupDestroy", this.handleSubMenuDestroy.bind(this));
		BX.addClass(this.layout.item, "menu-popup-item-submenu");

		return this.subMenuWindow;
	},

	handleSubMenuDestroy: function()
	{
		this.subMenuWindow = null;
	},

	closeSubMenu: function()
	{
		if (this.subMenuWindow)
		{
			BX.removeClass(this.layout.item, "menu-popup-item-open");

			this.closeChildren();

			var popupWindow = this.subMenuWindow.getPopupWindow();
			if (popupWindow.isShown())
			{
				BX.onCustomEvent(this, "onSubMenuClose");
			}

			this.subMenuWindow.close();
		}
	},

	closeSiblings: function()
	{
		var siblings = this.menuWindow.getMenuItems();
		for (var i = 0; i < siblings.length; i++)
		{
			if (siblings[i] !== this)
			{
				siblings[i].closeSubMenu();
			}
		}
	},

	closeChildren: function()
	{
		if (this.subMenuWindow)
		{
			var children = this.subMenuWindow.getMenuItems();
			for (var i = 0; i < children.length; i++)
			{
				children[i].closeSubMenu();
			}
		}
	},

	destroySubMenu: function()
	{
		if (this.subMenuWindow)
		{
			BX.removeClass(this.layout.item, "menu-popup-item-open menu-popup-item-submenu");
			this.destroyChildren();
			this.subMenuWindow.destroy();

			this.subMenuWindow = null;
			this._items = [];
		}
	},

	destroyChildren: function()
	{
		if (this.subMenuWindow)
		{
			var children = this.subMenuWindow.getMenuItems();
			for (var i = 0; i < children.length; i++)
			{
				children[i].destroySubMenu();
			}
		}
	},

	adjustSubMenu: function()
	{
		if (!this.subMenuWindow || !this.layout.item)
		{
			return;
		}

		var popupWindow = this.subMenuWindow.getPopupWindow();
		var itemRect = this.layout.item.getBoundingClientRect();

		var offsetLeft = itemRect.width + this.subMenuOffsetX;
		var offsetTop = itemRect.height + this.getPopupPadding();
		var angleOffset = itemRect.height / 2 - this.getPopupPadding();
		var anglePosition = "left";

		var popupWidth = popupWindow.getPopupContainer().offsetWidth;
		var popupHeight = popupWindow.getPopupContainer().offsetHeight;
		var popupBottom = itemRect.top + popupHeight;

		var clientWidth = document.documentElement.clientWidth;
		var clientHeight = document.documentElement.clientHeight;

		// let's try to fit a submenu to the browser viewport
		var exceeded = popupBottom - clientHeight;
		if (exceeded > 0)
		{
			var roundOffset = Math.ceil(exceeded / itemRect.height) * itemRect.height;
			if (roundOffset > itemRect.top)
			{
				// it cannot be higher than the browser viewport.
				roundOffset -= Math.ceil((roundOffset - itemRect.top) / itemRect.height) * itemRect.height;
			}

			if (itemRect.bottom > (popupBottom - roundOffset))
			{
				// let's sync bottom boundaries.
				roundOffset -= itemRect.bottom - (popupBottom - roundOffset) + this.getPopupPadding();
			}

			offsetTop += roundOffset;
			angleOffset += roundOffset;
		}


		if ((itemRect.left + offsetLeft + popupWidth) > clientWidth)
		{
			var left = itemRect.left - popupWidth - this.subMenuOffsetX;
			if (left > 0)
			{
				offsetLeft = -popupWidth - this.subMenuOffsetX;
				anglePosition = "right";
			}
		}

		popupWindow.setBindElement(this.layout.item);
		popupWindow.setOffset({ offsetLeft: offsetLeft, offsetTop: -offsetTop });
		popupWindow.setAngle({ position: anglePosition, offset: angleOffset });
		popupWindow.adjustPosition();
	},

	/**
	 *
	 * @returns {Number}
	 */
	getPopupPadding: function() {
		if (!BX.type.isNumber(this.popupPadding))
		{
			if (this.subMenuWindow)
			{
				var menuContainer = this.subMenuWindow.layout.menuContainer;
				this.popupPadding = parseInt(BX.style(menuContainer, "paddingTop"), 10);
			}
			else
			{
				this.popupPadding = 0;
			}
		}

		return this.popupPadding;
	},

	/**
	 *
	 * @returns {BX.PopupMenuWindow|null}
	 */
	getSubMenu: function()
	{
		return this.subMenuWindow;
	},

	getId: function()
	{
		return this.id;
	},

	/**
	 *
	 * @param {BX.PopupMenuWindow} menuWindow
	 */
	setMenuWindow: function(menuWindow)
	{
		this.menuWindow = menuWindow;
	},

	/**
	 *
	 * @returns {BX.PopupMenuWindow}
	 */
	getMenuWindow: function()
	{
		return this.menuWindow;
	},

	getMenuShowDelay: function()
	{
		return this.menuShowDelay;
	},

	enable: function()
	{
		this.disabled = false;
		this.getContainer().classList.remove("menu-popup-item-disabled");
	},

	disable: function()
	{
		this.disabled = true;
		this.closeSubMenu();
		this.getContainer().classList.add("menu-popup-item-disabled");
	},

	/**
	 *
	 * @return {boolean}
	 */
	isDisabled: function()
	{
		return this.disabled;
	},

	setCacheable: function(cacheable)
	{
		this.cacheable = cacheable !== false;
	},

	isCacheable: function()
	{
		return this.cacheable;
	}

};

// TODO: copypaste/update/enhance CSS and images from calendar to MAIN CORE
// this.values = [{ID: 1, NAME : '111', DESCRIPTION: '111', URL: 'href://...'}]

window.BXInputPopup = function(params)
{
	this.id = params.id || 'bx-inp-popup-' + Math.round(Math.random() * 1000000);
	this.handler = params.handler || false;
	this.values = params.values || false;
	this.pInput = params.input;
	this.bValues = !!this.values;
	this.defaultValue = params.defaultValue || '';
	this.openTitle = params.openTitle || '';
	this.className = params.className || '';
	this.noMRclassName = params.noMRclassName || 'ec-no-rm';
	this.emptyClassName = params.noMRclassName || 'ec-label';

	var _this = this;
	this.curInd = false;

	if (this.bValues)
	{
		this.pInput.onfocus = this.pInput.onclick = function(e)
		{
			if (this.value == _this.defaultValue)
			{
				this.value = '';
				this.className = _this.className;
			}
			_this.ShowPopup();
			return BX.PreventDefault(e);
		};
		this.pInput.onblur = function()
		{
			if (_this.bShowed)
				setTimeout(function(){_this.ClosePopup(true);}, 200);
			_this.OnChange();
		};
	}
	else
	{
		this.pInput.className = this.noMRclassName;
		this.pInput.onblur = BX.proxy(this.OnChange, this);
	}
}

BXInputPopup.prototype = {
ShowPopup: function()
{
	if (this.bShowed)
		return;

	var _this = this;
	if (!this.oPopup)
	{
		var
			pRow,
			pWnd = BX.create("DIV", {props:{className: "bxecpl-loc-popup " + this.className}});

		for (var i = 0, l = this.values.length; i < l; i++)
		{
			pRow = pWnd.appendChild(BX.create("DIV", {
				props: {id: 'bxecmr_' + i},
				text: this.values[i].NAME,
				events: {
					mouseover: function(){BX.addClass(this, 'bxecplloc-over');},
					mouseout: function(){BX.removeClass(this, 'bxecplloc-over');},
					click: function()
					{
						var ind = this.id.substr('bxecmr_'.length);
						_this.pInput.value = _this.values[ind].NAME;
						_this.curInd = ind;
						_this.OnChange();
						_this.ClosePopup(true);
					}
				}
			}));

			if (this.values[i].DESCRIPTION)
				pRow.title = this.values[i].DESCRIPTION;
			if (this.values[i].CLASS_NAME)
				BX.addClass(pRow, this.values[i].CLASS_NAME);

			if (this.values[i].URL)
				pRow.appendChild(BX.create('A', {props: {href: this.values[i].URL, className: 'bxecplloc-view', target: '_blank', title: this.openTitle}}));
		}

		this.oPopup = new BX.PopupWindow(this.id, this.pInput, {
			autoHide : true,
			offsetTop : 1,
			offsetLeft : 0,
			lightShadow : true,
			closeByEsc : true,
			content : pWnd
		});

		BX.addCustomEvent(this.oPopup, 'onPopupClose', BX.proxy(this.ClosePopup, this));
	}

	this.oPopup.show();
	this.pInput.select();

	this.bShowed = true;
	BX.onCustomEvent(this, 'onInputPopupShow', [this]);
},

ClosePopup: function(bClosePopup)
{
	this.bShowed = false;

	if (this.pInput.value == '')
		this.OnChange();

	BX.onCustomEvent(this, 'onInputPopupClose', [this]);

	if (bClosePopup === true)
		this.oPopup.close();
},

OnChange: function()
{
	var val = this.pInput.value;
	if (this.bValues)
	{
		if (this.pInput.value == '' || this.pInput.value == this.defaultValue)
		{
			this.pInput.value = this.defaultValue;
			this.pInput.className = this.emptyClassName;
			val = '';
		}
		else
		{
			this.pInput.className = '';
		}
	}

	if (isNaN(parseInt(this.curInd)) || this.curInd !==false && val != this.values[this.curInd].NAME)
		this.curInd = false;
	else
		this.curInd = parseInt(this.curInd);

	BX.onCustomEvent(this, 'onInputPopupChanged', [this, this.curInd, val]);
	if (this.handler && typeof this.handler == 'function')
		this.handler({ind: this.curInd, value: val});
},

Set: function(ind, val, bOnChange)
{
	this.curInd = ind;
	if (this.curInd !== false)
		this.pInput.value = this.values[this.curInd].NAME;
	else
		this.pInput.value = val;

	if (bOnChange !== false)
		this.OnChange();
},

Get: function(ind)
{
	var
		id = false;
	if (typeof ind == 'undefined')
		ind = this.curInd;

	if (ind !== false && this.values[ind])
		id = this.values[ind].ID;
	return id;
},

GetIndex: function(id)
{
	for (var i = 0, l = this.values.length; i < l; i++)
		if (this.values[i].ID == id)
			return i;
	return false;
},

Deactivate: function(bDeactivate)
{
	if (this.pInput.value == '' || this.pInput.value == this.defaultValue)
	{
		if (bDeactivate)
		{
			this.pInput.value = '';
			this.pInput.className = this.noMRclassName;
		}
		else if (this.oEC.bUseMR)
		{
			this.pInput.value = this.defaultValue;
			this.pInput.className = this.emptyClassName;
		}
	}
	this.pInput.disabled = bDeactivate;
}
};

/************** utility *************/

var _escCallbackIndex = -1,
	_escCallback = null;

function _checkEscPressed(zIndex, callback)
{
	if(zIndex === false)
	{
		if(_escCallback && _escCallback.length > 0)
		{
			for(var i=0;i<_escCallback.length; i++)
			{
				_escCallback[i]();
			}

			_escCallback = null;
			_escCallbackIndex = -1;
		}
	}
	else
	{
		if(_escCallback === null)
		{
			_escCallback = [];
			_escCallbackIndex = -1;
			BX.defer(_checkEscPressed)(false);
		}

		if(zIndex > _escCallbackIndex)
		{
			_escCallbackIndex = zIndex;
			_escCallback = [callback];
		}
		else if(zIndex == _escCallbackIndex)
		{
			_escCallback.push(callback)
		}
	}
}


})(window);


/* End */
;
; /* Start:"a:4:{s:4:"full";s:48:"/bitrix/js/main/json/json2.min.js?14945906613467";s:6:"source";s:33:"/bitrix/js/main/json/json2.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/

var JSON;if(!JSON){JSON={};}
(function(){'use strict';function f(n){return n<10?'0'+n:n;}
if(typeof Date.prototype.toJSON!=='function'){Date.prototype.toJSON=function(key){return isFinite(this.valueOf())?this.getUTCFullYear()+'-'+
f(this.getUTCMonth()+1)+'-'+
f(this.getUTCDate())+'T'+
f(this.getUTCHours())+':'+
f(this.getUTCMinutes())+':'+
f(this.getUTCSeconds())+'Z':null;};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(key){return this.valueOf();};}
var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'},rep;function quote(string){escapable.lastIndex=0;return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];return typeof c==='string'?c:'\\u'+('0000'+a.charCodeAt(0).toString(16)).slice(-4);})+'"':'"'+string+'"';}
function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];if(value&&typeof value==='object'&&typeof value.toJSON==='function'){value=value.toJSON(key);}
if(typeof rep==='function'){value=rep.call(holder,key,value);}
switch(typeof value){case'string':return quote(value);case'number':return isFinite(value)?String(value):'null';case'boolean':case'null':return String(value);case'object':if(!value){return'null';}
gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==='[object Array]'){length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i,value)||'null';}
v=partial.length===0?'[]':gap?'[\n'+gap+partial.join(',\n'+gap)+'\n'+mind+']':'['+partial.join(',')+']';gap=mind;return v;}
if(rep&&typeof rep==='object'){length=rep.length;for(i=0;i<length;i+=1){if(typeof rep[i]==='string'){k=rep[i];v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v);}}}}else{for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v);}}}}
v=partial.length===0?'{}':gap?'{\n'+gap+partial.join(',\n'+gap)+'\n'+mind+'}':'{'+partial.join(',')+'}';gap=mind;return v;}}
if(typeof JSON.stringify!=='function'){JSON.stringify=function(value,replacer,space){var i;gap='';indent='';if(typeof space==='number'){for(i=0;i<space;i+=1){indent+=' ';}}else if(typeof space==='string'){indent=space;}
rep=replacer;if(replacer&&typeof replacer!=='function'&&(typeof replacer!=='object'||typeof replacer.length!=='number')){throw new Error('JSON.stringify');}
return str('',{'':value});};}
if(typeof JSON.parse!=='function'){JSON.parse=function(text,reviver){var j;function walk(holder,key){var k,v,value=holder[key];if(value&&typeof value==='object'){for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=walk(value,k);if(v!==undefined){value[k]=v;}else{delete value[k];}}}}
return reviver.call(holder,key,value);}
text=String(text);cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(a){return'\\u'+
('0000'+a.charCodeAt(0).toString(16)).slice(-4);});}
if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,'@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,']').replace(/(?:^|:|,)(?:\s*\[)+/g,''))){j=eval('('+text+')');return typeof reviver==='function'?walk({'':j},''):j;}
throw new SyntaxError('JSON.parse');};}}());
/* End */
;
; /* Start:"a:4:{s:4:"full";s:50:"/bitrix/js/main/core/core_ls.min.js?14945906617365";s:6:"source";s:31:"/bitrix/js/main/core/core_ls.js";s:3:"min";s:35:"/bitrix/js/main/core/core_ls.min.js";s:3:"map";s:35:"/bitrix/js/main/core/core_ls.map.js";}"*/
(function(e){if(e.BX.localStorage)return;var t=e.BX,r=null,o=null,a="_bxCurrentKey",i=false;t.localStorage=function(){this.keyChanges={};t.bind(t.browser.IsIE()&&!t.browser.IsIE9()?document:e,"storage",t.proxy(this._onchange,this));setInterval(t.delegate(this._clear,this),5e3)};t.localStorage.checkBrowser=function(){return i};t.localStorage.set=function(e,r,o){return t.localStorage.instance().set(e,r,o)};t.localStorage.get=function(e){return t.localStorage.instance().get(e)};t.localStorage.remove=function(e){return t.localStorage.instance().remove(e)};t.localStorage.instance=function(){if(!r){var e=t.localStorage.checkBrowser();if(e=="native")r=new t.localStorage;else if(e=="ie8")r=new t.localStorageIE8;else if(e=="ie7")r=new t.localStorageIE7;else{r={set:t.DoNothing,get:function(){return null},remove:t.DoNothing}}}return r};t.localStorage.prototype.prefix=function(){if(!o){o="bx"+t.message("USER_ID")+"-"+(t.message.SITE_ID?t.message("SITE_ID"):"admin")+"-"}return o};t.localStorage.prototype._onchange=function(r){r=r||e.event;if(!r.key)return;if(t.browser.DetectIeVersion()>0&&this.keyChanges[r.key]){this.keyChanges[r.key]=false;return}if(!!r.key&&r.key.substring(0,this.prefix().length)==this.prefix()){var o={key:r.key.substring(this.prefix().length,r.key.length),value:!!r.newValue?this._decode(r.newValue.substring(11,r.newValue.length)):null,oldValue:!!r.oldValue?this._decode(r.oldValue.substring(11,r.oldValue.length)):null};switch(o.key){case"BXGCE":if(o.value){t.onCustomEvent(o.value.e,o.value.p)}break;default:if(r.newValue)t.onCustomEvent(e,"onLocalStorageSet",[o]);if(r.oldValue&&!r.newValue)t.onCustomEvent(e,"onLocalStorageRemove",[o]);t.onCustomEvent(e,"onLocalStorageChange",[o]);break}}};t.localStorage.prototype._clear=function(){var e=+new Date,t,r;for(r=0;r<localStorage.length;r++){t=localStorage.key(r);if(t.substring(0,2)=="bx"){var o=localStorage.getItem(t).split(":",1)*1e3;if(e>=o)localStorage.removeItem(t)}}};t.localStorage.prototype._encode=function(e){if(typeof e=="object")e=JSON.stringify(e);else e=e.toString();return e};t.localStorage.prototype._decode=function(e){var t=null;if(!!e){try{t=JSON.parse(e)}catch(r){t=e}}return t};t.localStorage.prototype._trigger_error=function(e,r,o,a){t.onCustomEvent(this,"onLocalStorageError",[e,{key:r,value:o,ttl:a}])};t.localStorage.prototype.set=function(e,t,r){if(!r||r<=0)r=60;if(e==undefined||e==null||t==undefined)return false;this.keyChanges[this.prefix()+e]=true;try{localStorage.setItem(this.prefix()+e,Math.round(+new Date/1e3)+r+":"+this._encode(t))}catch(o){this._trigger_error(o,e,t,r)}};t.localStorage.prototype.get=function(e){var t=localStorage.getItem(this.prefix()+e);if(t){var r=t.split(":",1)*1e3;if(+new Date<=r){t=t.substring(11,t.length);return this._decode(t)}}return null};t.localStorage.prototype.remove=function(e){this.keyChanges[this.prefix()+e]=true;localStorage.removeItem(this.prefix()+e)};t.localStorageIE7=function(){this.NS="BXLocalStorage";this.__current_state={};this.keyChanges={};t.ready(t.delegate(this._Init,this))};t.extend(t.localStorageIE7,t.localStorage);t.localStorageIE7.prototype._Init=function(){this.storage_element=document.body.appendChild(t.create("DIV"));this.storage_element.addBehavior("#default#userData");this.storage_element.load(this.NS);var e=this.storage_element.xmlDocument,r=e.firstChild.attributes.length;for(var o=0;o<r;o++){if(!!e.firstChild.attributes[o]){var a=e.firstChild.attributes[o].nodeName;if(a.substring(0,this.prefix().length)==this.prefix()){this.__current_state[a]=e.firstChild.attributes[o].nodeValue}}}setInterval(t.delegate(this._Listener,this),500);setInterval(t.delegate(this._clear,this),5e3)};t.localStorageIE7.prototype._Listener=function(e){this.storage_element.load(this.NS);var t=this.storage_element.xmlDocument,r=t.firstChild.attributes.length,o,a,i;var l={},s=[];for(o=0;o<r;o++){if(!!t.firstChild.attributes[o]){a=t.firstChild.attributes[o].nodeName;if(a.substring(0,this.prefix().length)==this.prefix()){i=t.firstChild.attributes[o].nodeValue;if(this.__current_state[a]!=i){s.push({key:a,newValue:i,oldValue:this.__current_state[a]})}l[a]=i;delete this.__current_state[a]}}}for(o in this.__current_state){if(this.__current_state.hasOwnProperty(o)){s.push({key:o,newValue:undefined,oldValue:this.__current_state[o]})}}this.__current_state=l;for(o=0;o<s.length;o++){this._onchange(s[o])}};t.localStorageIE7.prototype._clear=function(){this.storage_element.load(this.NS);var e=this.storage_element.xmlDocument,t=e.firstChild.attributes.length,r=+new Date,o,a,i,l;for(o=0;o<t;o++){if(!!e.firstChild.attributes[o]){a=e.firstChild.attributes[o].nodeName;if(a.substring(0,2)=="bx"){i=e.firstChild.attributes[o].nodeValue;l=i.split(":",1)*1e3;if(r>=l){e.firstChild.removeAttribute(a)}}}}this.storage_element.save(this.NS)};t.localStorageIE7.prototype.set=function(e,t,r){if(!r||r<=0)r=60;try{this.storage_element.load(this.NS);var o=this.storage_element.xmlDocument;this.keyChanges[this.prefix()+e]=true;o.firstChild.setAttribute(this.prefix()+e,Math.round(+new Date/1e3)+r+":"+this._encode(t));this.storage_element.save(this.NS)}catch(a){this._trigger_error(a,e,t,r)}};t.localStorageIE7.prototype.get=function(e){this.storage_element.load(this.NS);var t=this.storage_element.xmlDocument;var r=t.firstChild.getAttribute(this.prefix()+e);if(r){var o=r.split(":",1)*1e3;if(+new Date<=o){r=r.substring(11,r.length);return this._decode(r)}}return null};t.localStorageIE7.prototype.remove=function(e){this.storage_element.load(this.NS);var t=this.storage_element.xmlDocument;t.firstChild.removeAttribute(this.prefix()+e);this.keyChanges[this.prefix()+e]=true;this.storage_element.save(this.NS)};t.localStorageIE8=function(){this.key=a;this.currentKey=null;this.currentValue=null;t.localStorageIE8.superclass.constructor.apply(this)};t.extend(t.localStorageIE8,t.localStorage);t.localStorageIE8.prototype._onchange=function(e){if(null==this.currentKey){this.currentKey=localStorage.getItem(this.key);if(this.currentKey){this.currentValue=localStorage.getItem(this.prefix()+this.currentKey)}}else{e={key:this.prefix()+this.currentKey,newValue:localStorage.getItem(this.prefix()+this.currentKey),oldValue:this.currentValue};this.currentKey=null;this.currentValue=null;if(this.keyChanges[e.key]){this.keyChanges[e.key]=false;return}t.localStorageIE8.superclass._onchange.apply(this,[e])}};t.localStorageIE8.prototype.set=function(e,r,o){this.currentKey=null;this.keyChanges[this.prefix()+e]=true;try{localStorage.setItem(this.key,e);t.localStorageIE8.superclass.set.apply(this,arguments)}catch(a){this._trigger_error(a,e,r,o)}};t.localStorageIE8.prototype.remove=function(e){this.currentKey=null;this.keyChanges[this.prefix()+e]=true;localStorage.setItem(this.key,e);t.localStorageIE8.superclass.remove.apply(this,arguments)};t.onGlobalCustomEvent=function(e,r,o){if(!!t.localStorage.checkBrowser())t.localStorage.set("BXGCE",{e:e,p:r},1);if(!o)t.onCustomEvent(e,r)};try{i=!!localStorage.setItem}catch(l){}if(i){i="native";var s=t.browser.IsIE()&&!t.browser.IsIE9()?document:e,n=function(r){if(typeof(r||e.event).key=="undefined")i="ie8";t.unbind(s,"storage",n);t.localStorage.instance()};t.bind(s,"storage",n);try{localStorage.setItem(a,null)}catch(l){i=false;t.localStorage.instance()}}else if(t.browser.IsIE7()){i="ie7";t.localStorage.instance()}})(window);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:45:"/bitrix/js/main/session.min.js?14945906612511";s:6:"source";s:26:"/bitrix/js/main/session.js";s:3:"min";s:30:"/bitrix/js/main/session.min.js";s:3:"map";s:30:"/bitrix/js/main/session.map.js";}"*/
function CBXSession(){var e=this;this.mess={};this.timeout=null;this.sessid=null;this.bShowMess=true;this.dateStart=new Date;this.dateInput=new Date;this.dateCheck=new Date;this.activityInterval=0;this.notifier=null;this.Expand=function(t,i,s,n){this.timeout=t;this.sessid=i;this.bShowMess=s;this.key=n;BX.ready(function(){BX.bind(document,"keypress",e.OnUserInput);BX.bind(document.body,"mousemove",e.OnUserInput);BX.bind(document.body,"click",e.OnUserInput);setTimeout(e.CheckSession,(e.timeout-60)*1e3)})};this.OnUserInput=function(){var t=new Date;e.dateInput.setTime(t.valueOf())};this.CheckSession=function(){var t=new Date;if(t.valueOf()-e.dateCheck.valueOf()<3e4)return;e.activityInterval=Math.round((e.dateInput.valueOf()-e.dateStart.valueOf())/1e3);e.dateStart.setTime(e.dateInput.valueOf());var i=e.activityInterval>e.timeout?e.timeout-60:e.activityInterval;var s={method:"GET",dataType:"html",url:"/bitrix/tools/public_session.php?sessid="+e.sessid+"&interval="+i+"&k="+e.key,data:"",onsuccess:function(t){e.CheckResult(t)},lsId:"sess_expand",lsTimeout:60};if(i>0){s.lsForce=true}BX.ajax(s)};this.CheckResult=function(t){if(t=="SESSION_EXPIRED"){if(e.bShowMess){if(!e.notifier){e.notifier=document.body.appendChild(BX.create("DIV",{props:{className:"bx-session-message"},style:{top:"0px",backgroundColor:"#FFEB41",border:"1px solid #EDDA3C",width:"630px",fontFamily:"Arial,Helvetica,sans-serif",fontSize:"13px",fontWeight:"bold",textAlign:"center",color:"black",position:"absolute",zIndex:"10000",padding:"10px"},html:'<a class="bx-session-message-close" style="display:block; width:12px; height:12px; background:url(/bitrix/js/main/core/images/close.gif) center no-repeat; float:right;" href="javascript:bxSession.Close()"></a>'+e.mess.messSessExpired}));var i=BX.GetWindowScrollPos();var s=BX.GetWindowInnerSize();e.notifier.style.left=parseInt(i.scrollLeft+s.innerWidth/2-parseInt(e.notifier.clientWidth)/2)+"px";if(BX.browser.IsIE()){e.notifier.style.top=i.scrollTop+"px";BX.bind(window,"scroll",function(){var t=BX.GetWindowScrollPos();e.notifier.style.top=t.scrollTop+"px"})}else{e.notifier.style.position="fixed"}}e.notifier.style.display=""}}else{var n;if(t=="SESSION_CHANGED")n=e.timeout-60;else n=e.activityInterval<60?60:e.activityInterval>e.timeout?e.timeout-60:e.activityInterval;var o=new Date;e.dateCheck.setTime(o.valueOf());setTimeout(e.CheckSession,n*1e3)}};this.Close=function(){this.notifier.style.display="none"}}var bxSession=new CBXSession;
/* End */
;
; /* Start:"a:4:{s:4:"full";s:55:"/bitrix/js/main/core/core_window.min.js?155558769475671";s:6:"source";s:35:"/bitrix/js/main/core/core_window.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
(function(window){if(BX.WindowManager)return;BX.WindowManager={_stack:[],_runtime_resize:{},_delta:2,_delta_start:1e3,currently_loaded:null,settings_category:"BX.WindowManager.9.5",register:function(t){this.currently_loaded=null;var e=t.Get();e.style.zIndex=t.zIndex=this.GetZIndex();t.WM_REG_INDEX=this._stack.length;this._stack.push(t);if(this._stack.length<2){BX.bind(document,"keyup",BX.proxy(this.__checkKeyPress,this))}},unregister:function(t){if(null==t.WM_REG_INDEX)return null;var e;if(this._stack.length>0){while((e=this.__pop_stack())!=t){if(!e){e=null;break}}if(this._stack.length<=0){this.enableKeyCheck()}return e}else{return null}},__pop_stack:function(t){if(this._stack.length>0){var e=this._stack.pop();e.WM_REG_INDEX=null;BX.onCustomEvent(e,"onWindowUnRegister",[t===true]);return e}else return null},clean:function(){while(this.__pop_stack(true)){}this._stack=null;this.disableKeyCheck()},Get:function(){if(this.currently_loaded)return this.currently_loaded;else if(this._stack.length>0)return this._stack[this._stack.length-1];else return null},setStartZIndex:function(t){this._delta_start=t},restoreStartZIndex:function(){this._delta_start=1e3},GetZIndex:function(){var t;return null!=(t=this._stack[this._stack.length-1])?parseInt(t.Get().style.zIndex)+this._delta:this._delta_start},__get_check_url:function(t){var e=t.indexOf("?");return e==-1?t:t.substring(0,e)},saveWindowSize:function(t,e){var i=this.__get_check_url(t);if(BX.userOptions){BX.userOptions.save(this.settings_category,"size_"+i,"width",e.width);BX.userOptions.save(this.settings_category,"size_"+i,"height",e.height)}this._runtime_resize[i]=e},saveWindowOptions:function(t,e){if(BX.userOptions){for(var i in e){if(e.hasOwnProperty(i)){BX.userOptions.save(this.settings_category,"options_"+t,i,e[i])}}}},getRuntimeWindowSize:function(t){return this._runtime_resize[this.__get_check_url(t)]},disableKeyCheck:function(){BX.unbind(document,"keyup",BX.proxy(this.__checkKeyPress,this))},enableKeyCheck:function(){BX.bind(document,"keyup",BX.proxy(this.__checkKeyPress,this))},__checkKeyPress:function(t){if(null==t)t=window.event;if(t.keyCode==27){var e=BX.WindowManager.Get();if(e&&!e.unclosable)e.Close()}}};BX.garbage(BX.WindowManager.clean,BX.WindowManager);BX.CWindowButton=function(t){if(t.btn){this.btn=t.btn;this.parentWindow=t.parentWindow;if(/save|apply/i.test(this.btn.name)){BX.bind(this.btn,"click",BX.delegate(this.disableUntilError,this))}}else{this.title=t.title;this.hint=t.hint;this.id=t.id;this.name=t.name;this.className=t.className;this.action=t.action;this.onclick=t.onclick;if(t.Button&&BX.type.isFunction(t.Button))this.Button=t.Button;this.btn=null}};BX.CWindowButton.prototype.disable=function(){if(this.btn)this.parentWindow.showWait(this.btn)};BX.CWindowButton.prototype.enable=function(){if(this.btn)this.parentWindow.closeWait(this.btn)};BX.CWindowButton.prototype.emulate=function(){if(this.btn&&this.btn.disabled)return;var t=this.action?BX.delegate(this.action,this):this.onclick?this.onclick:this.btn?this.btn.getAttribute("onclick"):"";if(t){setTimeout(t,50);if(this.btn&&/save|apply/i.test(this.btn.name)&&!this.action){this.disableUntilError()}}};BX.CWindowButton.prototype.Button=function(parentWindow){this.parentWindow=parentWindow;var btn={props:{type:"button",name:this.id?this.id:this.name,value:this.title?this.title:this.name,id:this.id}};if(this.hint)btn.props.title=this.hint;if(!!this.className)btn.props.className=this.className;if(this.action){btn.events={click:BX.delegate(this.action,this)}}else if(this.onclick){if(BX.browser.IsIE()){btn.events={click:BX.delegate(function(){eval(this.onclick)},this)}}else{btn.attrs={onclick:this.onclick}}}this.btn=BX.create("INPUT",btn);return this.btn};BX.CWindowButton.prototype.disableUntilError=function(){this.disable();if(!this.__window_error_handler_set){BX.addCustomEvent(this.parentWindow,"onWindowError",BX.delegate(this.enable,this));this.__window_error_handler_set=true}};BX.CWindow=function(t,e){this.DIV=t||document.createElement("DIV");this.SETTINGS={resizable:false,min_height:0,min_width:0,top:0,left:0,draggable:false,drag_restrict:true,resize_restrict:true};this.ELEMENTS={draggable:[],resizer:[],close:[]};this.type=e=="float"?"float":"dialog";BX.adjust(this.DIV,{props:{className:"bx-core-window"},style:{zIndex:0,position:"absolute",display:"none",top:this.SETTINGS.top+"px",left:this.SETTINGS.left+"px",height:"100px",width:"100px"}});this.isOpen=false;BX.addCustomEvent(this,"onWindowRegister",BX.delegate(this.onRegister,this));BX.addCustomEvent(this,"onWindowUnRegister",BX.delegate(this.onUnRegister,this));this.MOUSEOVER=null;BX.bind(this.DIV,"mouseover",BX.delegate(this.__set_msover,this));BX.bind(this.DIV,"mouseout",BX.delegate(this.__unset_msover,this));BX.ready(BX.delegate(function(){document.body.appendChild(this.DIV)},this))};BX.CWindow.prototype.Get=function(){return this.DIV};BX.CWindow.prototype.visible=function(){return this.isOpen};BX.CWindow.prototype.Show=function(t){this.DIV.style.display="block";if(!t){BX.WindowManager.register(this);BX.onCustomEvent(this,"onWindowRegister")}};BX.CWindow.prototype.Hide=function(){BX.WindowManager.unregister(this);this.DIV.style.display="none"};BX.CWindow.prototype.onRegister=function(){this.isOpen=true};BX.CWindow.prototype.onUnRegister=function(t){this.isOpen=false;if(t||this.PARAMS&&this.PARAMS.content_url){if(t){BX.onCustomEvent(this,"onWindowClose",[this,true])}if(this.DIV.parentNode)this.DIV.parentNode.removeChild(this.DIV)}else{this.DIV.style.display="none"}};BX.CWindow.prototype.CloseDialog=BX.CWindow.prototype.Close=function(t){BX.onCustomEvent(this,"onBeforeWindowClose",[this]);if(t!==true){if(this.denyClose)return false}BX.onCustomEvent(this,"onWindowClose",[this]);if(this.bExpanded){var e=BX.GetDocElement();BX.unbind(window,"resize",BX.proxy(this.__expand_onresize,this));e.style.overflow=this.__expand_settings.overflow}BX.WindowManager.unregister(this);return true};BX.CWindow.prototype.SetResize=function(t){t.style.cursor="se-resize";BX.bind(t,"mousedown",BX.proxy(this.__startResize,this));this.ELEMENTS.resizer.push(t);this.SETTINGS.resizable=true};BX.CWindow.prototype.SetExpand=function(t,e){e=e||"click";BX.bind(t,e,BX.proxy(this.__expand,this))};BX.CWindow.prototype.__expand_onresize=function(){var t=BX.GetWindowInnerSize();this.DIV.style.width=t.innerWidth+"px";this.DIV.style.height=t.innerHeight+"px";BX.onCustomEvent(this,"onWindowResize")};BX.CWindow.prototype.__expand=function(){var t=BX.GetDocElement();if(!this.bExpanded){var e=BX.GetWindowScrollPos(),i=BX.GetWindowInnerSize();this.__expand_settings={resizable:this.SETTINGS.resizable,draggable:this.SETTINGS.draggable,width:this.DIV.style.width,height:this.DIV.style.height,left:this.DIV.style.left,top:this.DIV.style.top,scrollTop:e.scrollTop,scrollLeft:e.scrollLeft,overflow:BX.style(t,"overflow")};this.SETTINGS.resizable=false;this.SETTINGS.draggable=false;window.scrollTo(0,0);t.style.overflow="hidden";this.DIV.style.top="0px";this.DIV.style.left="0px";this.DIV.style.width=i.innerWidth+"px";this.DIV.style.height=i.innerHeight+"px";this.bExpanded=true;BX.onCustomEvent(this,"onWindowExpand");BX.onCustomEvent(this,"onWindowResize");BX.bind(window,"resize",BX.proxy(this.__expand_onresize,this))}else{BX.unbind(window,"resize",BX.proxy(this.__expand_onresize,this));this.SETTINGS.resizable=this.__expand_settings.resizable;this.SETTINGS.draggable=this.__expand_settings.draggable;t.style.overflow=this.__expand_settings.overflow;this.DIV.style.top=this.__expand_settings.top;this.DIV.style.left=this.__expand_settings.left;this.DIV.style.width=this.__expand_settings.width;this.DIV.style.height=this.__expand_settings.height;window.scrollTo(this.__expand_settings.scrollLeft,this.__expand_settings.scrollTop);this.bExpanded=false;BX.onCustomEvent(this,"onWindowNarrow");BX.onCustomEvent(this,"onWindowResize")}};BX.CWindow.prototype.Resize=function(t,e){var i=Math.max(t-this.pos.left+this.dx,this.SETTINGS.min_width);var s=Math.max(e-this.pos.top+this.dy,this.SETTINGS.min_height);if(this.SETTINGS.resize_restrict){var o=BX.GetWindowScrollSize();if(this.pos.left+i>o.scrollWidth-this.dw)i=o.scrollWidth-this.pos.left-this.dw}this.DIV.style.width=i+"px";this.DIV.style.height=s+"px";BX.onCustomEvent(this,"onWindowResize")};BX.CWindow.prototype.__startResize=function(t){if(!this.SETTINGS.resizable)return false;if(!t)t=window.event;this.wndSize=BX.GetWindowScrollPos();this.wndSize.innerWidth=BX.GetWindowInnerSize().innerWidth;this.pos=BX.pos(this.DIV);this.x=t.clientX+this.wndSize.scrollLeft;this.y=t.clientY+this.wndSize.scrollTop;this.dx=this.pos.left+this.pos.width-this.x;this.dy=this.pos.top+this.pos.height-this.y;this.dw=this.pos.width-parseInt(this.DIV.style.width);BX.bind(document,"mousemove",BX.proxy(this.__moveResize,this));BX.bind(document,"mouseup",BX.proxy(this.__stopResize,this));if(document.body.setCapture)document.body.setCapture();document.onmousedown=BX.False;var e=document.body;e.ondrag=e.onselectstart=BX.False;e.style.MozUserSelect=this.DIV.style.MozUserSelect="none";e.style.cursor="se-resize";BX.onCustomEvent(this,"onWindowResizeStart");return true};BX.CWindow.prototype.__moveResize=function(t){if(!t)t=window.event;var e=BX.GetWindowScrollPos();var i=t.clientX+e.scrollLeft;var s=t.clientY+e.scrollTop;if(this.x==i&&this.y==s)return;this.Resize(i,s);this.x=i;this.y=s};BX.CWindow.prototype.__stopResize=function(){if(document.body.releaseCapture)document.body.releaseCapture();BX.unbind(document,"mousemove",BX.proxy(this.__moveResize,this));BX.unbind(document,"mouseup",BX.proxy(this.__stopResize,this));document.onmousedown=null;var t=document.body;t.ondrag=t.onselectstart=null;t.style.MozUserSelect=this.DIV.style.MozUserSelect="";t.style.cursor="";BX.onCustomEvent(this,"onWindowResizeFinished")};BX.CWindow.prototype.SetClose=function(t){BX.bind(t,"click",BX.proxy(this.Close,this));this.ELEMENTS.close.push(t)};BX.CWindow.prototype.SetDraggable=function(t){BX.bind(t,"mousedown",BX.proxy(this.__startDrag,this));t.style.cursor="move";this.ELEMENTS.draggable.push(t);this.SETTINGS.draggable=true};BX.CWindow.prototype.Move=function(t,e){var i=1;var s=parseInt(this.DIV.style.left)+t;var o=parseInt(this.DIV.style.top)+e;if(this.SETTINGS.drag_restrict){if(s<0)s=0;var n=BX.GetWindowScrollSize();var r=this.DIV.offsetWidth;var h=this.DIV.offsetHeight;if(s>n.scrollWidth-r-i)s=n.scrollWidth-r-i;var a=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight,n.scrollHeight);if(o>a-h-i)o=a-h-i;if(o<0)o=0}this.DIV.style.left=s+"px";this.DIV.style.top=o+"px"};BX.CWindow.prototype.__startDrag=function(t){if(!this.SETTINGS.draggable)return false;if(!t)t=window.event;this.x=t.clientX+document.body.scrollLeft;this.y=t.clientY+document.body.scrollTop;this.__bWasDragged=false;BX.bind(document,"mousemove",BX.proxy(this.__moveDrag,this));BX.bind(document,"mouseup",BX.proxy(this.__stopDrag,this));if(document.body.setCapture)document.body.setCapture();document.onmousedown=BX.False;var e=document.body;e.ondrag=e.onselectstart=BX.False;e.style.MozUserSelect=this.DIV.style.MozUserSelect="none";e.style.cursor="move";return BX.PreventDefault(t)};BX.CWindow.prototype.__moveDrag=function(t){if(!t)t=window.event;var e=t.clientX+document.body.scrollLeft;var i=t.clientY+document.body.scrollTop;if(this.x==e&&this.y==i)return;this.Move(e-this.x,i-this.y);this.x=e;this.y=i;if(!this.__bWasDragged){BX.onCustomEvent(this,"onWindowDragStart");this.__bWasDragged=true;BX.bind(BX.proxy_context,"click",BX.PreventDefault)}BX.onCustomEvent(this,"onWindowDrag")};BX.CWindow.prototype.__stopDrag=function(t){if(document.body.releaseCapture)document.body.releaseCapture();BX.unbind(document,"mousemove",BX.proxy(this.__moveDrag,this));BX.unbind(document,"mouseup",BX.proxy(this.__stopDrag,this));document.onmousedown=null;var e=document.body;e.ondrag=e.onselectstart=null;e.style.MozUserSelect=this.DIV.style.MozUserSelect="";e.style.cursor="";if(this.__bWasDragged){BX.onCustomEvent(this,"onWindowDragFinished");var i=BX.proxy_context;setTimeout(function(){BX.unbind(i,"click",BX.PreventDefault)},100);this.__bWasDragged=false}return BX.PreventDefault(t)};BX.CWindow.prototype.DenyClose=function(){this.denyClose=true};BX.CWindow.prototype.AllowClose=function(){this.denyClose=false};BX.CWindow.prototype.ShowError=function(t){BX.onCustomEvent(this,"onWindowError",[t]);if(this._wait)BX.closeWait(this._wait);window.alert(t)};BX.CWindow.prototype.__set_msover=function(){this.MOUSEOVER=true};BX.CWindow.prototype.__unset_msover=function(){this.MOUSEOVER=false};BX.CWindowDialog=function(){var t=arguments;t[1]="dialog";BX.CWindowDialog.superclass.constructor.apply(this,t);this.DIV.style.top="10px";this.OVERLAY=null};BX.extend(BX.CWindowDialog,BX.CWindow);BX.CWindowDialog.prototype.__resizeOverlay=function(){var t=BX.GetWindowScrollSize();this.OVERLAY.style.width=t.scrollWidth+"px"};BX.CWindowDialog.prototype.CreateOverlay=function(t){if(null==this.OVERLAY){var e=BX.GetWindowScrollSize();var i=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight,e.scrollHeight);this.OVERLAY=document.body.appendChild(BX.create("DIV",{style:{position:"absolute",top:"0px",left:"0px",zIndex:t||parseInt(this.DIV.style.zIndex)-2,width:e.scrollWidth+"px",height:i+"px"}}))}return this.OVERLAY};BX.CWindowDialog.prototype.Show=function(){BX.CWindowDialog.superclass.Show.apply(this,arguments);this.CreateOverlay();this.OVERLAY.style.display="block";this.OVERLAY.style.zIndex=parseInt(this.DIV.style.zIndex)-2;BX.unbind(window,"resize",BX.proxy(this.__resizeOverlay,this));BX.bind(window,"resize",BX.proxy(this.__resizeOverlay,this))};BX.CWindowDialog.prototype.onUnRegister=function(t){BX.CWindowDialog.superclass.onUnRegister.apply(this,arguments);if(this.clean){if(this.OVERLAY.parentNode)this.OVERLAY.parentNode.removeChild(this.OVERLAY)}else{this.OVERLAY.style.display="none"}BX.unbind(window,"resize",BX.proxy(this.__resizeOverlay,this))};BX.CDialog=function(t){BX.CDialog.superclass.constructor.apply(this);this._sender="core_window_cdialog";this.PARAMS=t||{};for(var e in this.defaultParams){if(typeof this.PARAMS[e]=="undefined")this.PARAMS[e]=this.defaultParams[e]}this.PARAMS.width=!isNaN(parseInt(this.PARAMS.width))?this.PARAMS.width:this.defaultParams["width"];this.PARAMS.height=!isNaN(parseInt(this.PARAMS.height))?this.PARAMS.height:this.defaultParams["height"];if(this.PARAMS.resize_id||this.PARAMS.content_url){var i=BX.WindowManager.getRuntimeWindowSize(this.PARAMS.resize_id||this.PARAMS.content_url);if(i){this.PARAMS.width=i.width;this.PARAMS.height=i.height}}BX.addClass(this.DIV,"bx-core-adm-dialog");this.DIV.id="bx-admin-prefix";this.PARTS={};this.DIV.style.height=null;this.DIV.style.width=null;this.PARTS.TITLEBAR=this.DIV.appendChild(BX.create("DIV",{props:{className:"bx-core-adm-dialog-head"}}));this.PARTS.TITLE_CONTAINER=this.PARTS.TITLEBAR.appendChild(BX.create("SPAN",{props:{className:"bx-core-adm-dialog-head-inner"},text:this.PARAMS.title}));this.PARTS.TITLEBAR_ICONS=this.PARTS.TITLEBAR.appendChild(BX.create("DIV",{props:{className:"bx-core-adm-dialog-head-icons"},children:this.PARAMS.resizable?[BX.create("SPAN",{props:{className:"bx-core-adm-icon-expand",title:BX.message("JS_CORE_WINDOW_EXPAND")}}),BX.create("SPAN",{props:{className:"bx-core-adm-icon-close",title:BX.message("JS_CORE_WINDOW_CLOSE")}})]:[BX.create("SPAN",{props:{className:"bx-core-adm-icon-close",title:BX.message("JS_CORE_WINDOW_CLOSE")}})]}));this.PARTS.CONTENT=this.DIV.appendChild(BX.create("DIV",{props:{className:"bx-core-adm-dialog-content-wrap adm-workarea"}}));this.PARTS.CONTENT_DATA=this.PARTS.CONTENT.appendChild(BX.create("DIV",{props:{className:"bx-core-adm-dialog-content"},style:{height:this.PARAMS.height+"px",width:this.PARAMS.width+"px"}}));this.PARTS.HEAD=this.PARTS.CONTENT_DATA.appendChild(BX.create("DIV",{props:{className:"bx-core-adm-dialog-head-block"+(this.PARAMS.icon?" "+this.PARAMS.icon:"")}}));this.SetHead(this.PARAMS.head);this.SetContent(this.PARAMS.content);this.SetTitle(this.PARAMS.title);this.SetClose(this.PARTS.TITLEBAR_ICONS.lastChild);if(this.PARAMS.resizable){this.SetExpand(this.PARTS.TITLEBAR_ICONS.firstChild);this.SetExpand(this.PARTS.TITLEBAR,"dblclick");BX.addCustomEvent(this,"onWindowExpand",BX.proxy(this.__onexpand,this));BX.addCustomEvent(this,"onWindowNarrow",BX.proxy(this.__onexpand,this))}this.PARTS.FOOT=this.PARTS.BUTTONS_CONTAINER=this.PARTS.CONTENT.appendChild(BX.create("DIV",{props:{className:"bx-core-adm-dialog-buttons"},children:this.ShowButtons()}));if(this.PARAMS.draggable)this.SetDraggable(this.PARTS.TITLEBAR);if(this.PARAMS.resizable){this.PARTS.RESIZER=this.DIV.appendChild(BX.create("DIV",{props:{className:"bx-core-resizer"}}));this.SetResize(this.PARTS.RESIZER);this.SETTINGS.min_width=this.PARAMS.min_width;this.SETTINGS.min_height=this.PARAMS.min_height}this.auth_callback=BX.delegate(function(){this.PARAMS.content="";this.hideNotify();this.Show()},this)};BX.extend(BX.CDialog,BX.CWindowDialog);BX.CDialog.prototype.defaultParams={width:700,height:400,min_width:500,min_height:300,resizable:true,draggable:true,title:"",icon:""};BX.CDialog.prototype.showWait=function(t){if(BX.type.isElementNode(t)&&(t.type=="button"||t.type=="submit")){BX.defer(function(){t.disabled=true})();var e=BX.hasClass(t,"adm-btn-save")||BX.hasClass(t,"adm-btn-save"),i=BX.pos(t,true);t.bxwaiter=this.PARTS.FOOT.appendChild(BX.create("DIV",{props:{className:"adm-btn-load-img"+(e?"-green":"")},style:{top:parseInt((i.bottom+i.top)/2-10)+"px",left:parseInt((i.right+i.left)/2-10)+"px"}}));BX.addClass(t,"adm-btn-load");this.lastWaitElement=t;return t.bxwaiter}return null};BX.CDialog.prototype.closeWait=function(t){t=t||this.lastWaitElement;if(BX.type.isElementNode(t)){if(t.bxwaiter){if(t.bxwaiter.parentNode){t.bxwaiter.parentNode.removeChild(t.bxwaiter)}t.bxwaiter=null}t.disabled=false;BX.removeClass(t,"adm-btn-load");if(this.lastWaitElement==t)this.lastWaitElement=null}};BX.CDialog.prototype.Authorize=function(t){this.bSkipReplaceContent=true;this.ShowError(BX.message("JSADM_AUTH_REQ"));BX.onCustomEvent(this,"onWindowError",[]);BX.closeWait();new BX.CAuthDialog({content_url:this.PARAMS.content_url,auth_result:t,callback:BX.delegate(function(){if(this.auth_callback)this.auth_callback()},this)}).Show()};BX.CDialog.prototype.ShowError=function(t){BX.onCustomEvent(this,"onWindowError",[t]);this.closeWait();if(this._wait)BX.closeWait(this._wait);this.Notify(t,true)};BX.CDialog.prototype.__expandGetSize=function(){var t=BX.GetDocElement();t.style.overflow="hidden";var e=BX.GetWindowInnerSize();t.scrollTop=0;this.DIV.style.top="-"+this.dxShadow+"px";this.DIV.style.left="-"+this.dxShadow+"px";return{width:e.innerWidth-parseInt(BX.style(this.PARTS.CONTENT,"padding-right"))-parseInt(BX.style(this.PARTS.CONTENT,"padding-left"))+this.dxShadow,height:e.innerHeight-this.PARTS.TITLEBAR.offsetHeight-this.PARTS.FOOT.offsetHeight-parseInt(BX.style(this.PARTS.CONTENT,"padding-top"))-parseInt(BX.style(this.PARTS.CONTENT,"padding-bottom"))+this.dxShadow}};BX.CDialog.prototype.__expand=function(){var t=BX.GetDocElement();this.dxShadow=2;if(!this.bExpanded){var e=BX.GetWindowScrollPos();this.__expand_settings={resizable:this.SETTINGS.resizable,draggable:this.SETTINGS.draggable,width:this.PARTS.CONTENT_DATA.style.width,height:this.PARTS.CONTENT_DATA.style.height,left:this.DIV.style.left,top:this.DIV.style.top,scrollTop:e.scrollTop,scrollLeft:e.scrollLeft,overflow:BX.style(t,"overflow")};this.SETTINGS.resizable=false;this.SETTINGS.draggable=false;var i=this.__expandGetSize();this.PARTS.CONTENT_DATA.style.width=i.width+"px";this.PARTS.CONTENT_DATA.style.height=i.height+"px";window.scrollTo(0,0);t.style.overflow="hidden";this.bExpanded=true;BX.onCustomEvent(this,"onWindowExpand");BX.onCustomEvent(this,"onWindowResize");BX.onCustomEvent(this,"onWindowResizeExt",[{width:i.width,height:i.height}]);BX.bind(window,"resize",BX.proxy(this.__expand_onresize,this))}else{BX.unbind(window,"resize",BX.proxy(this.__expand_onresize,this));this.SETTINGS.resizable=this.__expand_settings.resizable;this.SETTINGS.draggable=this.__expand_settings.draggable;t.style.overflow=this.__expand_settings.overflow;this.DIV.style.top=this.__expand_settings.top;this.DIV.style.left=this.__expand_settings.left;this.PARTS.CONTENT_DATA.style.width=this.__expand_settings.width;this.PARTS.CONTENT_DATA.style.height=this.__expand_settings.height;window.scrollTo(this.__expand_settings.scrollLeft,this.__expand_settings.scrollTop);this.bExpanded=false;BX.onCustomEvent(this,"onWindowNarrow");BX.onCustomEvent(this,"onWindowResize");BX.onCustomEvent(this,"onWindowResizeExt",[{width:parseInt(this.__expand_settings.width),height:parseInt(this.__expand_settings.height)}])}};BX.CDialog.prototype.__expand_onresize=function(){var t=this.__expandGetSize();this.PARTS.CONTENT_DATA.style.width=t.width+"px";this.PARTS.CONTENT_DATA.style.height=t.height+"px";BX.onCustomEvent(this,"onWindowResize");BX.onCustomEvent(this,"onWindowResizeExt",[t])};BX.CDialog.prototype.__onexpand=function(){var t=this.PARTS.TITLEBAR_ICONS.firstChild;t.className=BX.toggle(t.className,["bx-core-adm-icon-expand","bx-core-adm-icon-narrow"]);t.title=BX.toggle(t.title,[BX.message("JS_CORE_WINDOW_EXPAND"),BX.message("JS_CORE_WINDOW_NARROW")]);if(this.PARTS.RESIZER){this.PARTS.RESIZER.style.display=this.bExpanded?"none":"block"}};BX.CDialog.prototype.__startResize=function(t){if(!this.SETTINGS.resizable)return false;if(!t)t=window.event;this.wndSize=BX.GetWindowScrollPos();this.wndSize.innerWidth=BX.GetWindowInnerSize().innerWidth;this.pos=BX.pos(this.PARTS.CONTENT_DATA);this.x=t.clientX+this.wndSize.scrollLeft;this.y=t.clientY+this.wndSize.scrollTop;this.dx=this.pos.left+this.pos.width-this.x;this.dy=this.pos.top+this.pos.height-this.y;this.dw=this.pos.width-parseInt(this.PARTS.CONTENT_DATA.style.width)+parseInt(BX.style(this.PARTS.CONTENT,"padding-right"));BX.bind(document,"mousemove",BX.proxy(this.__moveResize,this));BX.bind(document,"mouseup",BX.proxy(this.__stopResize,this));if(document.body.setCapture)document.body.setCapture();document.onmousedown=BX.False;var e=document.body;e.ondrag=e.onselectstart=BX.False;e.style.MozUserSelect=this.DIV.style.MozUserSelect="none";e.style.cursor="se-resize";BX.onCustomEvent(this,"onWindowResizeStart");return true};BX.CDialog.prototype.Resize=function(t,e){var i=Math.max(t-this.pos.left+this.dx,this.SETTINGS.min_width);var s=Math.max(e-this.pos.top+this.dy,this.SETTINGS.min_height);if(this.SETTINGS.resize_restrict){var o=BX.GetWindowScrollSize();if(this.pos.left+i>o.scrollWidth-this.dw)i=o.scrollWidth-this.pos.left-this.dw}this.PARTS.CONTENT_DATA.style.width=i+"px";this.PARTS.CONTENT_DATA.style.height=s+"px";BX.onCustomEvent(this,"onWindowResize");BX.onCustomEvent(this,"onWindowResizeExt",[{height:s,width:i}])};BX.CDialog.prototype.SetSize=function(t){this.PARTS.CONTENT_DATA.style.width=t.width+"px";this.PARTS.CONTENT_DATA.style.height=t.height+"px";BX.onCustomEvent(this,"onWindowResize");BX.onCustomEvent(this,"onWindowResizeExt",[t])};BX.CDialog.prototype.GetParameters=function(t){var e=this.GetForm();if(!e)return"";var i,s="";var o=e.elements.length;var n="";for(i=0;i<o;i++){if(s!="")n="&";var r=e.elements[i];if(r.disabled)continue;switch(r.type.toLowerCase()){case"text":case"textarea":case"password":case"hidden":if(null==t&&r.name.substr(r.name.length-4)=="_alt"&&e.elements[r.name.substr(0,r.name.length-4)])break;s+=n+r.name+"="+BX.util.urlencode(r.value);break;case"radio":if(r.checked)s+=n+r.name+"="+BX.util.urlencode(r.value);break;case"checkbox":s+=n+r.name+"="+BX.util.urlencode(r.checked?"Y":"N");break;case"select-one":var h="";if(null==t&&e.elements[r.name+"_alt"]&&r.selectedIndex==0)h=e.elements[r.name+"_alt"].value;else h=r.value;s+=n+r.name+"="+BX.util.urlencode(h);break;case"select-multiple":var a,l=false;var d=r.options.length;for(a=0;a<d;a++){if(r.options[a].selected){s+=n+r.name+"="+BX.util.urlencode(r.options[a].value);l=true}}if(!l)s+=n+r.name+"=";break;default:break}}return s};BX.CDialog.prototype.PostParameters=function(t){var e=this.PARAMS.content_url;if(null==t)t="";t+=(t==""?"":"&")+"bxsender="+this._sender;var i=e.indexOf("?");if(i==-1)e+="?"+t;else e=e.substring(0,i)+"?"+t+"&"+e.substring(i+1);BX.showWait();this.auth_callback=BX.delegate(function(){this.hideNotify();this.PostParameters(t)},this);BX.ajax.Setup({skipAuthCheck:true},true);BX.ajax.post(e,this.GetParameters(),BX.delegate(function(t){BX.closeWait();if(!this.bSkipReplaceContent){this.ClearButtons();this.SetContent(t);this.Show(true)}this.bSkipReplaceContent=false},this))};BX.CDialog.prototype.Submit=function(t,e){var i=this.GetForm();if(i){i.onsubmit=null;i.method="POST";if(!i.action||e){e=e||this.PARAMS.content_url;if(null!=t){var s=e.indexOf("?");if(s==-1)e+="?"+t;else e=e.substring(0,s)+"?"+t+"&"+e.substring(s+1)}i.action=e}if(!i._bxsender){i._bxsender=i.appendChild(BX.create("INPUT",{attrs:{type:"hidden",name:"bxsender",value:this._sender}}))}this._wait=BX.showWait();this.auth_callback=BX.delegate(function(){this.hideNotify();this.Submit(t)},this);BX.ajax.submit(i,BX.delegate(function(){this.closeWait()},this))}else{window.alert("no form registered!")}};BX.CDialog.prototype.GetForm=function(){if(null==this.__form){var t=this.PARTS.CONTENT_DATA.getElementsByTagName("FORM");this.__form=t[0]?t[0]:null}return this.__form};BX.CDialog.prototype.GetRealForm=function(){if(null==this.__rform){var t=this.PARTS.CONTENT_DATA.getElementsByTagName("FORM");this.__rform=t[1]?t[1]:t[0]?t[0]:null}return this.__rform};BX.CDialog.prototype._checkButton=function(t){var e=["btnSave","btnCancel","btnClose"];for(var i=0;i<e.length;i++){if(this[e[i]]&&t==this[e[i]])return e[i]}return false};BX.CDialog.prototype.ShowButtons=function(){var t=[];if(this.PARAMS.buttons){if(this.PARAMS.buttons.title)this.PARAMS.buttons=[this.PARAMS.buttons];for(var e=0,i=this.PARAMS.buttons.length;e<i;e++){if(BX.type.isNotEmptyString(this.PARAMS.buttons[e])){t.push(this.PARAMS.buttons[e])}else if(BX.type.isElementNode(this.PARAMS.buttons[e])){t.push(this.PARAMS.buttons[e])}else if(this.PARAMS.buttons[e]){if(!BX.is_subclass_of(this.PARAMS.buttons[e],BX.CWindowButton)){var s=this._checkButton(this.PARAMS.buttons[e]);this.PARAMS.buttons[e]=new BX.CWindowButton(this.PARAMS.buttons[e]);if(s)this[s]=this.PARAMS.buttons[e]}t.push(this.PARAMS.buttons[e].Button(this))}}}return t};BX.CDialog.prototype.setAutosave=function(){if(!this.bSetAutosaveDelay){this.bSetAutosaveDelay=true;setTimeout(BX.proxy(this.setAutosave,this),10)}};BX.CDialog.prototype.SetTitle=function(t){this.PARAMS.title=t;BX.cleanNode(this.PARTS.TITLE_CONTAINER).appendChild(document.createTextNode(this.PARAMS.title))};BX.CDialog.prototype.SetHead=function(t){this.PARAMS.head=BX.util.trim(t);this.PARTS.HEAD.innerHTML=this.PARAMS.head||"&nbsp;";this.PARTS.HEAD.style.display=this.PARAMS.head?"block":"none";this.adjustSize()};BX.CDialog.prototype.Notify=function(t,e){if(!this.PARTS.NOTIFY){this.PARTS.NOTIFY=this.DIV.insertBefore(BX.create("DIV",{props:{className:"adm-warning-block"},children:[BX.create("SPAN",{props:{className:"adm-warning-text"}}),BX.create("SPAN",{props:{className:"adm-warning-icon"}}),BX.create("SPAN",{props:{className:"adm-warning-close"},events:{click:BX.proxy(this.hideNotify,this)}})]}),this.DIV.firstChild)}if(e)BX.addClass(this.PARTS.NOTIFY,"adm-warning-block-red");else BX.removeClass(this.PARTS.NOTIFY,"adm-warning-block-red");this.PARTS.NOTIFY.firstChild.innerHTML=t||"&nbsp;";this.PARTS.NOTIFY.firstChild.style.width=this.PARAMS.width-50+"px";BX.removeClass(this.PARTS.NOTIFY,"adm-warning-animate")};BX.CDialog.prototype.hideNotify=function(){BX.addClass(this.PARTS.NOTIFY,"adm-warning-animate")};BX.CDialog.prototype.__adjustHeadToIcon=function(){if(!this.PARTS.HEAD.offsetHeight){setTimeout(BX.delegate(this.__adjustHeadToIcon,this),50)}else{if(this.icon_image&&this.icon_image.height&&this.icon_image.height>this.PARTS.HEAD.offsetHeight-5){this.PARTS.HEAD.style.height=this.icon_image.height+5+"px";this.adjustSize()}this.icon_image.onload=null;this.icon_image=null}};BX.CDialog.prototype.SetIcon=function(t){if(this.PARAMS.icon!=t){if(this.PARAMS.icon)BX.removeClass(this.PARTS.HEAD,this.PARAMS.icon);this.PARAMS.icon=t;if(this.PARAMS.icon){BX.addClass(this.PARTS.HEAD,this.PARAMS.icon);var e=BX.style(this.PARTS.HEAD,"background-image")||BX.style(this.PARTS.HEAD,"backgroundImage");if(BX.type.isNotEmptyString(e)&&e!="none"){var i=e.match(new RegExp("url\\s*\\(\\s*('|\"|)(.+?)(\\1)\\s*\\)"));if(i){e=i[2];if(BX.type.isNotEmptyString(e)){this.icon_image=new Image;this.icon_image.onload=BX.delegate(this.__adjustHeadToIcon,this);this.icon_image.src=e}}}}}this.adjustSize()};BX.CDialog.prototype.SetIconFile=function(t){this.icon_image=new Image;this.icon_image.onload=BX.delegate(this.__adjustHeadToIcon,this);this.icon_image.src=t;BX.adjust(this.PARTS.HEAD,{style:{backgroundImage:"url("+t+")",backgroundPosition:"right 9px"}});this.adjustSize()};BX.CDialog.prototype.SetButtons=function(t){if(BX.type.isString(t)){if(t.length>0){this.PARTS.BUTTONS_CONTAINER.innerHTML+=t;var e=this.PARTS.BUTTONS_CONTAINER.getElementsByTagName("INPUT");if(e.length>0){this.PARAMS.buttons=[];for(var i=0;i<e.length;i++){this.PARAMS.buttons.push(new BX.CWindowButton({btn:e[i],parentWindow:this}))}}}}else{this.PARAMS.buttons=t;BX.adjust(this.PARTS.BUTTONS_CONTAINER,{children:this.ShowButtons()})}this.adjustSize()};BX.CDialog.prototype.ClearButtons=function(){BX.cleanNode(this.PARTS.BUTTONS_CONTAINER);this.adjustSize()};BX.CDialog.prototype.SetContent=function(t){this.__form=null;if(BX.type.isElementNode(t)){if(t.parentNode)t.parentNode.removeChild(t)}else if(BX.type.isString(t)){t=BX.create("DIV",{html:t})}this.PARAMS.content=t;BX.cleanNode(this.PARTS.CONTENT_DATA);BX.adjust(this.PARTS.CONTENT_DATA,{children:[this.PARTS.HEAD,BX.create("DIV",{props:{className:"bx-core-adm-dialog-content-wrap-inner"},children:[this.PARAMS.content]})]});if(this.PARAMS.content_url&&this.GetForm()){this.__form.submitbtn=this.__form.appendChild(BX.create("INPUT",{props:{type:"submit"},style:{display:"none"}}));this.__form.onsubmit=BX.delegate(this.__submit,this)}};BX.CDialog.prototype.__submit=function(t){for(var e=0,i=this.PARAMS.buttons.length;e<i;e++){if(this.PARAMS.buttons[e]&&(this.PARAMS.buttons[e].name&&/save|apply/i.test(this.PARAMS.buttons[e].name)||this.PARAMS.buttons[e].btn&&this.PARAMS.buttons[e].btn.name&&/save|apply/i.test(this.PARAMS.buttons[e].btn.name))){this.PARAMS.buttons[e].emulate();break}}return BX.PreventDefault(t)};BX.CDialog.prototype.SwapContent=function(t){t=BX(t);BX.cleanNode(this.PARTS.CONTENT_DATA);t.parentNode.removeChild(t);this.PARTS.CONTENT_DATA.appendChild(t);t.style.display="block";this.SetContent(t.innerHTML)};BX.CDialog.prototype.adjustSize=function(){};BX.CDialog.prototype.__adjustSize=function(){};BX.CDialog.prototype.adjustSizeEx=function(){BX.defer(this.__adjustSizeEx,this)()};BX.CDialog.prototype.__adjustSizeEx=function(){var t=this.PARTS.CONTENT_DATA.firstChild,e=0,i,s;while(t){if(BX.type.isElementNode(t)){i=parseInt(BX.style(t,"margin-top"),10);if(isNaN(i))i=0;s=parseInt(BX.style(t,"margin-bottom"),10);if(isNaN(s))s=0;e+=t.offsetHeight+i+s}t=BX.nextSibling(t)}if(e)this.PARTS.CONTENT_DATA.style.height=e+"px"};BX.CDialog.prototype.__onResizeFinished=function(){BX.WindowManager.saveWindowSize(this.PARAMS.resize_id||this.PARAMS.content_url,{height:parseInt(this.PARTS.CONTENT_DATA.style.height),width:parseInt(this.PARTS.CONTENT_DATA.style.width)})};BX.CDialog.prototype.Show=function(t){if(!this.PARAMS.content&&this.PARAMS.content_url&&BX.ajax&&!t){var e=BX.showWait();BX.WindowManager.currently_loaded=this;var i=this.PARAMS.zIndex?this.PARAMS.zIndex:parseInt(BX.style(e,"z-index"))-1;this.CreateOverlay(i);this.OVERLAY.style.display="block";this.OVERLAY.className="bx-core-dialog-overlay";var s="",o="GET";if(this.PARAMS.content_post){s=this.PARAMS.content_post;o="POST"}var n=this.PARAMS.content_url+(this.PARAMS.content_url.indexOf("?")<0?"?":"&")+"bxsender="+this._sender;this.auth_callback=BX.delegate(function(){this.PARAMS.content="";this.hideNotify();this.Show()},this);BX.ajax({method:o,dataType:"html",url:n,data:s,skipAuthCheck:true,onsuccess:BX.delegate(function(t){BX.closeWait(null,e);this.SetContent(t||"&nbsp;");this.Show()},this)})}else{BX.WindowManager.currently_loaded=null;BX.CDialog.superclass.Show.apply(this,arguments);this.adjustPos();this.OVERLAY.className="bx-core-dialog-overlay";this.__adjustSize();BX.addCustomEvent(this,"onWindowResize",BX.proxy(this.__adjustSize,this));if(this.PARAMS.resizable&&(this.PARAMS.content_url||this.PARAMS.resize_id))BX.addCustomEvent(this,"onWindowResizeFinished",BX.delegate(this.__onResizeFinished,this))}};BX.CDialog.prototype.GetInnerPos=function(){return{width:parseInt(this.PARTS.CONTENT_DATA.style.width),height:parseInt(this.PARTS.CONTENT_DATA.style.height)}};BX.CDialog.prototype.adjustPos=function(){if(!this.bExpanded){var t=window;if(top.BX.SidePanel&&top.BX.SidePanel.Instance&&top.BX.SidePanel.Instance.getTopSlider()){t=top.BX.SidePanel.Instance.getTopSlider().getWindow()}var e=t.BX.GetWindowInnerSize();var i=t.BX.GetWindowScrollPos();var s={left:parseInt(i.scrollLeft+e.innerWidth/2-parseInt(this.DIV.offsetWidth)/2)+"px",top:Math.max(parseInt(i.scrollTop+e.innerHeight/2-parseInt(this.DIV.offsetHeight)/2),0)+"px"};if(this.PARAMS.zIndex){s["z-index"]=this.PARAMS.zIndex}BX.adjust(this.DIV,{style:s})}};BX.CDialog.prototype.GetContent=function(){return this.PARTS.CONTENT_DATA};BX.CDialog.prototype.btnSave=BX.CDialog.btnSave={title:BX.message("JS_CORE_WINDOW_SAVE"),id:"savebtn",name:"savebtn",className:BX.browser.IsIE()&&BX.browser.IsDoctype()&&!BX.browser.IsIE10()?"":"adm-btn-save",action:function(){this.disableUntilError();this.parentWindow.PostParameters()}};BX.CDialog.prototype.btnCancel=BX.CDialog.btnCancel={title:BX.message("JS_CORE_WINDOW_CANCEL"),id:"cancel",name:"cancel",action:function(){this.parentWindow.Close()}};BX.CDialog.prototype.btnClose=BX.CDialog.btnClose={title:BX.message("JS_CORE_WINDOW_CLOSE"),id:"close",name:"close",action:function(){this.parentWindow.Close()}};BX.CAdminDialog=function(t){BX.CAdminDialog.superclass.constructor.apply(this,arguments);this._sender="core_window_cadmindialog";BX.addClass(this.DIV,"bx-core-adm-admin-dialog");this.PARTS.CONTENT.insertBefore(this.PARTS.HEAD,this.PARTS.CONTENT.firstChild);this.PARTS.HEAD.className="bx-core-adm-dialog-tabs"};BX.extend(BX.CAdminDialog,BX.CDialog);BX.CAdminDialog.prototype.SetHead=function(){BX.CAdminDialog.superclass.SetHead.apply(this,arguments);if(this.PARTS.HEAD.firstChild&&BX.type.isElementNode(this.PARTS.HEAD.firstChild)){var t=this.PARTS.HEAD.firstChild,e=0,i=0,s=0;while(t){if(BX.type.isElementNode(t)){i=parseInt(BX.style(t,"margin-left"),10);if(isNaN(i))i=0;s=parseInt(BX.style(t,"margin-right"),10);if(isNaN(s))s=0;e+=t.offsetWidth+i+s}t=BX.nextSibling(t)}this.SETTINGS.min_width=Math.max(e,this.SETTINGS.min_width)-2;if(this.PARAMS.width<this.SETTINGS.min_width){BX.adjust(this.PARTS.CONTENT_DATA,{style:{width:this.SETTINGS.min_width+"px"}})}}};BX.CAdminDialog.prototype.SetContent=function(t){this.__form=null;if(BX.type.isElementNode(t)){if(t.parentNode)t.parentNode.removeChild(t)}this.PARAMS.content=t;BX.cleanNode(this.PARTS.CONTENT_DATA);BX.adjust(this.PARTS.CONTENT_DATA,{children:[this.PARAMS.content||"&nbsp;"]});if(this.PARAMS.content_url&&this.GetForm()){this.__form.appendChild(BX.create("INPUT",{props:{type:"submit"},style:{display:"none"}}));this.__form.onsubmit=BX.delegate(this.__submit,this)}};BX.CAdminDialog.prototype.__expandGetSize=function(){var t=BX.CAdminDialog.superclass.__expandGetSize.apply(this,arguments);t.width-=parseInt(BX.style(this.PARTS.CONTENT_DATA,"padding-right"))+parseInt(BX.style(this.PARTS.CONTENT_DATA,"padding-left"));t.height-=parseInt(BX.style(this.PARTS.CONTENT_DATA,"padding-top"))+parseInt(BX.style(this.PARTS.CONTENT_DATA,"padding-bottom"));t.height-=this.PARTS.HEAD.offsetHeight;return t};BX.CAdminDialog.prototype.Submit=function(){var t=this.GetForm();if(t&&!t["bxpublic"]&&!/bxpublic=/.test(t.action)){t.appendChild(BX.create("INPUT",{props:{type:"hidden",name:"bxpublic",value:"Y"}}))}return BX.CAdminDialog.superclass.Submit.apply(this,arguments)};BX.CAdminDialog.prototype.btnSave=BX.CAdminDialog.btnSave={title:BX.message("JS_CORE_WINDOW_SAVE"),id:"savebtn",name:"savebtn",className:"adm-btn-save",action:function(){this.disableUntilError();this.parentWindow.Submit()}};BX.CAdminDialog.btnCancel=BX.CAdminDialog.superclass.btnCancel;BX.CAdminDialog.btnClose=BX.CAdminDialog.superclass.btnClose;BX.CDebugDialog=function(t){BX.CDebugDialog.superclass.constructor.apply(this,arguments)};BX.extend(BX.CDebugDialog,BX.CDialog);BX.CDebugDialog.prototype.ShowDetails=function(t){var e=BX(t);if(e){if(this.div_detail_current)this.div_detail_current.style.display="none";e.style.display="block";this.div_detail_current=e}};BX.CDebugDialog.prototype.SetContent=function(t){if(!t)return;var e=t.split("#DIVIDER#");if(e.length>1){this.PARAMS.content=e[1];this.PARTS.CONTENT_DATA.style.overflow="hidden";BX.CDebugDialog.superclass.SetContent.apply(this,[e[1]]);this.PARTS.CONTENT_INNER=this.PARTS.CONTENT_DATA.firstChild.nextSibling;this.PARTS.CONTENT_TOP=this.PARTS.CONTENT_DATA.insertBefore(BX.create("DIV",{props:{className:"bx-debug-content-top"},html:e[0]}),this.PARTS.CONTENT_INNER);this.PARTS.CONTENT_INNER.style.overflow="auto"}else{BX.CDebugDialog.superclass.SetContent.apply(this,arguments)}};BX.CDebugDialog.prototype.__adjustSize=function(){BX.CDebugDialog.superclass.__adjustSize.apply(this,arguments);if(this.PARTS.CONTENT_TOP){var t=this.PARTS.CONTENT_DATA.offsetHeight-this.PARTS.HEAD.offsetHeight-this.PARTS.CONTENT_TOP.offsetHeight-38;if(t>0){this.PARTS.CONTENT_INNER.style.height=t+"px"}}};BX.CEditorDialog=function(t){BX.CEditorDialog.superclass.constructor.apply(this,arguments);BX.removeClass(this.PARTS.CONTENT,"bx-core-adm-dialog-content-wrap");BX.removeClass(this.PARTS.CONTENT_DATA,"bx-core-adm-dialog-content");BX.removeClass(this.PARTS.CONTENT_DATA.lastChild,"bx-core-adm-dialog-content-wrap-inner");BX.removeClass(this.PARTS.BUTTONS_CONTAINER,"bx-core-adm-dialog-buttons");BX.addClass(this.PARTS.CONTENT,"bx-core-editor-dialog-content-wrap");BX.addClass(this.PARTS.CONTENT_DATA,"bx-core-editor-dialog-content");BX.addClass(this.PARTS.BUTTONS_CONTAINER,"bx-core-editor-dialog-buttons")};BX.extend(BX.CEditorDialog,BX.CDialog);BX.CEditorDialog.prototype.SetContent=function(){BX.CEditorDialog.superclass.SetContent.apply(this,arguments);BX.removeClass(this.PARTS.CONTENT_DATA.lastChild,"bx-core-adm-dialog-content-wrap-inner")};BX.CWizardDialog=function(t){BX.CWizardDialog.superclass.constructor.apply(this,arguments);BX.removeClass(this.PARTS.CONTENT,"bx-core-adm-dialog-content-wrap");BX.removeClass(this.PARTS.CONTENT_DATA,"bx-core-adm-dialog-content");BX.removeClass(this.PARTS.CONTENT_DATA.lastChild,"bx-core-adm-dialog-content-wrap-inner");BX.removeClass(this.PARTS.BUTTONS_CONTAINER,"bx-core-adm-dialog-buttons");BX.addClass(this.PARTS.CONTENT,"bx-core-wizard-dialog-content-wrap")};BX.extend(BX.CWizardDialog,BX.CDialog);BX.CAuthDialog=function(t){t.resizable=false;t.width=350;t.height=200;t.buttons=[this.btnSave];BX.CAuthDialog.superclass.constructor.apply(this,arguments);this._sender="core_window_cauthdialog";BX.addClass(this.DIV,"bx-core-auth-dialog");BX.AUTHAGENT=this};BX.extend(BX.CAuthDialog,BX.CDialog);BX.CAuthDialog.prototype.btnSave=BX.CAuthDialog.btnSave={title:BX.message("JS_CORE_WINDOW_AUTH"),id:"savebtn",name:"savebtn",className:"adm-btn-save",action:function(){this.disableUntilError();this.parentWindow.Submit("",this.parentWindow.PARAMS.content_url)}};BX.CAuthDialog.prototype.SetError=function(t){BX.closeWait();if(!!t)this.ShowError(t.MESSAGE||t)};BX.CAuthDialog.prototype.setAuthResult=function(t){BX.closeWait();if(t===false){this.Close();if(this.PARAMS.callback)this.PARAMS.callback()}else{this.SetError(t)}};BX.CWindowFloat=function(t){BX.CWindowFloat.superclass.constructor.apply(this,[t,"float"]);this.SETTINGS.resizable=false};BX.extend(BX.CWindowFloat,BX.CWindow);BX.CWindowFloat.prototype.adjustPos=function(){if(this.PARAMS.parent)this.adjustToNode();else if(this.PARAMS.x&&this.PARAMS.y)this.adjustToPos([this.PARAMS.x,this.PARAMS.y])};BX.CWindowFloat.prototype.adjustToPos=function(t){this.DIV.style.left=parseInt(t[0])+"px";this.DIV.style.top=parseInt(t[1])+"px"};BX.CWindowFloat.prototype.adjustToNodeGetPos=function(){return BX.pos(this.PARAMS.parent)};BX.CWindowFloat.prototype.adjustToNode=function(t){t=t||this.PARAMS.parent;this.PARAMS.parent=BX(t);if(this.PARAMS.parent){var e=this.adjustToNodeGetPos();this.DIV.style.top=e.top+"px";this.DIV.style.left=e.left+"px";this.PARAMS.parent.OPENER=this}};BX.CWindowFloat.prototype.Show=function(){this.adjustToPos([-1e3,-1e3]);BX.CWindowFloat.superclass.Show.apply(this,arguments);this.adjustPos()};BX.COpener=function(t){this.PARAMS=t||{};this.MENU=t.MENU||[];this.DIV=t.DIV;this.ATTACH=t.ATTACH||t.DIV;this.ATTACH_MODE=t.ATTACH_MODE||"bottom";this.ACTIVE_CLASS=t.ACTIVE_CLASS||"";this.PUBLIC_FRAME=t.PUBLIC_FRAME||0;this.LEVEL=t.LEVEL||0;this.CLOSE_ON_CLICK=typeof t.CLOSE_ON_CLICK!="undefined"?!!t.CLOSE_ON_CLICK:true;this.ADJUST_ON_CLICK=typeof t.ADJUST_ON_CLICK!="undefined"?!!t.ADJUST_ON_CLICK:true;this.TYPE=this.PARAMS.TYPE=="hover"?"hover":"click";this._openTimeout=null;if(this.PARAMS.TYPE=="hover"&&t.TIMEOUT!==0)this.TIMEOUT=t.TIMEOUT||1e3;else this.TIMEOUT=0;if(!!this.PARAMS.MENU_URL){this.bMenuLoaded=false;this.bMenuLoading=false;this.MENU=[{TEXT:BX.message("JS_CORE_LOADING"),CLOSE_ON_CLICK:false}];if(this.PARAMS.MENU_PRELOAD){BX.defer(this.Load,this)()}}BX.ready(BX.defer(this.Init,this))};BX.COpener.prototype.Init=function(){this.DIV=BX(this.DIV);switch(this.TYPE){case"hover":BX.bind(this.DIV,"mouseover",BX.proxy(this.Open,this));BX.bind(this.DIV,"click",BX.proxy(this.Toggle,this));break;case"click":BX.bind(this.DIV,"click",BX.proxy(this.Toggle,this));break}this.bMenuInit=false};BX.COpener.prototype.Load=function(){if(this.PARAMS.MENU_URL&&!this.bMenuLoaded){if(!this.bMenuLoading){var t=this.PARAMS.MENU_URL;if(t.indexOf("sessid=")<=0)t+=(t.indexOf("?")>0?"&":"?")+"sessid="+BX.bitrix_sessid();this.bMenuLoading=true;BX.ajax.loadJSON(t,BX.proxy(this.SetMenu,this),BX.proxy(this.LoadFailed,this))}}};BX.COpener.prototype.SetMenu=function(t){this.bMenuLoaded=true;this.bMenuLoading=false;if(this.bMenuInit){this.MENU.setItems(t)}else{this.MENU=t}};BX.COpener.prototype.LoadFailed=function(t,e){this.bMenuLoading=false;this.SetMenu([{TEXT:BX.message("JS_CORE_NO_DATA"),CLOSE_ON_CLICK:true}]);BX.debug(arguments)};BX.COpener.prototype.checkAdminMenu=function(){if(document.documentElement.id=="bx-admin-prefix")return true;return!!BX.findParent(this.DIV,{property:{id:"bx-admin-prefix"}})};BX.COpener.prototype.Toggle=function(t){this.__clear_timeout();if(!this.bMenuInit||!this.MENU.visible()){var e=this.TIMEOUT;this.TIMEOUT=0;this.Open(t);this.TIMEOUT=e}else{this.MENU.Close()}return!!(t||window.event)&&BX.PreventDefault(t)};BX.COpener.prototype.GetMenu=function(){if(!this.bMenuInit){if(BX.type.isArray(this.MENU)){this.MENU=new BX.CMenu({ITEMS:this.MENU,ATTACH_MODE:this.ATTACH_MODE,SET_ID:this.checkAdminMenu()?"bx-admin-prefix":"",CLOSE_ON_CLICK:!!this.CLOSE_ON_CLICK,ADJUST_ON_CLICK:!!this.ADJUST_ON_CLICK,PUBLIC_FRAME:!!this.PUBLIC_FRAME,LEVEL:this.LEVEL,parent:BX(this.DIV),parent_attach:BX(this.ATTACH)});if(this.LEVEL>0){BX.bind(this.MENU.DIV,"mouseover",BX.proxy(this._on_menu_hover,this));BX.bind(this.MENU.DIV,"mouseout",BX.proxy(this._on_menu_hout,this))}}BX.addCustomEvent(this.MENU,"onMenuOpen",BX.proxy(this.handler_onopen,this));BX.addCustomEvent(this.MENU,"onMenuClose",BX.proxy(this.handler_onclose,this));BX.addCustomEvent("onMenuItemHover",BX.proxy(this.handler_onover,this));this.bMenuInit=true}return this.MENU};BX.COpener.prototype.Open=function(){this.GetMenu();this.bOpen=true;this.__clear_timeout();if(this.TIMEOUT>0){BX.bind(this.DIV,"mouseout",BX.proxy(this.__clear_timeout,this));this._openTimeout=setTimeout(BX.proxy(this.__open,this),this.TIMEOUT)}else{this.__open()}if(!!this.PARAMS.MENU_URL&&!this.bMenuLoaded){this._loadTimeout=setTimeout(BX.proxy(this.Load,this),parseInt(this.TIMEOUT/2))}return true};BX.COpener.prototype.__clear_timeout=function(){if(!!this._openTimeout)clearTimeout(this._openTimeout);if(!!this._loadTimeout)clearTimeout(this._loadTimeout);BX.unbind(this.DIV,"mouseout",BX.proxy(this.__clear_timeout,this))};BX.COpener.prototype._on_menu_hover=function(){this.bMenuHover=true;this.__clear_timeout();if(this.ACTIVE_CLASS)BX.addClass(this.DIV,this.ACTIVE_CLASS)};BX.COpener.prototype._on_menu_hout=function(){this.bMenuHover=false};BX.COpener.prototype.handler_onover=function(t,e){if(this.bMenuHover)return;if(e!=this&&t==this.LEVEL-1&&this.ACTIVE_CLASS){BX.removeClass(this.DIV,this.ACTIVE_CLASS)}if(this.bMenuInit&&t<=this.LEVEL-1&&this.MENU.visible()){if(e!=this){this.__clear_timeout();this._openTimeout=setTimeout(BX.proxy(this.Close,this),this.TIMEOUT)}}};BX.COpener.prototype.handler_onopen=function(){this.bOpen=true;if(this.ACTIVE_CLASS)BX.addClass(this.DIV,this.ACTIVE_CLASS);BX.defer(function(){BX.onCustomEvent(this,"onOpenerMenuOpen")},this)()};BX.COpener.prototype.handler_onclose=function(){this.bOpen=false;BX.onCustomEvent(this,"onOpenerMenuClose");if(this.ACTIVE_CLASS)BX.removeClass(this.DIV,this.ACTIVE_CLASS)};BX.COpener.prototype.Close=function(){if(!this.bMenuInit)return;if(!!this._openTimeout)clearTimeout(this._openTimeout);this.bOpen=false;this.__close()};BX.COpener.prototype.__open=function(){this.__clear_timeout();if(this.bMenuInit&&this.bOpen&&!this.MENU.visible())this.MENU.Show()};BX.COpener.prototype.__close=function(){if(this.bMenuInit&&!this.bOpen&&this.MENU.visible())this.MENU.Hide()};BX.COpener.prototype.__close_immediately=function(){this.bOpen=false;this.__close()};BX.COpener.prototype.isMenuVisible=function(){return null!=this.MENU.visible&&this.MENU.visible()};BX.CMenu=function(t){BX.CMenu.superclass.constructor.apply(this);this.DIV.style.width="auto";this.DIV.style.height="auto";this.PARAMS=t||{};this.PARTS={};this.PARAMS.ATTACH_MODE=this.PARAMS.ATTACH_MODE||"bottom";this.PARAMS.CLOSE_ON_CLICK=typeof this.PARAMS.CLOSE_ON_CLICK=="undefined"?true:this.PARAMS.CLOSE_ON_CLICK;this.PARAMS.ADJUST_ON_CLICK=typeof this.PARAMS.ADJUST_ON_CLICK=="undefined"?true:this.PARAMS.ADJUST_ON_CLICK;this.PARAMS.PUBLIC_FRAME=typeof this.PARAMS.PUBLIC_FRAME=="undefined"?false:this.PARAMS.PUBLIC_FRAME;this.PARAMS.LEVEL=this.PARAMS.LEVEL||0;this.DIV.className="bx-core-popup-menu bx-core-popup-menu-"+this.PARAMS.ATTACH_MODE+" bx-core-popup-menu-level"+this.PARAMS.LEVEL+(typeof this.PARAMS.ADDITIONAL_CLASS!="undefined"?" "+this.PARAMS.ADDITIONAL_CLASS:"");if(!!this.PARAMS.SET_ID)this.DIV.id=this.PARAMS.SET_ID;if(this.PARAMS.LEVEL==0){this.ARROW=this.DIV.appendChild(BX.create("SPAN",{props:{className:"bx-core-popup-menu-angle"},style:{left:"15px"}}))}if(!!this.PARAMS.CLASS_NAME)this.DIV.className+=" "+this.PARAMS.CLASS_NAME;BX.bind(this.DIV,"click",BX.eventCancelBubble);this.ITEMS=[];this.setItems(this.PARAMS.ITEMS);BX.addCustomEvent("onMenuOpen",BX.proxy(this._onMenuOpen,this));BX.addCustomEvent("onMenuItemSelected",BX.proxy(this.Hide,this))};BX.extend(BX.CMenu,BX.CWindowFloat);BX.CMenu.broadcastCloseEvent=function(){BX.onCustomEvent("onMenuItemSelected")};BX.CMenu._toggleChecked=function(){BX.toggleClass(this,"bx-core-popup-menu-item-checked")};BX.CMenu._itemDblClick=function(){window.location.href=this.href};BX.CMenu.prototype.toggleArrow=function(t){if(!!this.ARROW){if(typeof t=="undefined"){t=this.ARROW.style.visibility=="hidden"}this.ARROW.style.visibility=!!t?"visible":"hidden"}};BX.CMenu.prototype.visible=function(){return this.DIV.style.display!=="none"};BX.CMenu.prototype._onMenuOpen=function(t,e){if(this.visible()){if(e==this.PARAMS.LEVEL&&t!=this){this.Hide()}}};BX.CMenu.prototype.onUnRegister=function(){if(!this.visible())return;this.Hide()};BX.CMenu.prototype.setItems=function(t){this.PARAMS.ITEMS=t;BX.cleanNode(this.DIV);if(!!this.ARROW)this.DIV.appendChild(this.ARROW);if(this.PARAMS.ITEMS){this.PARAMS.ITEMS=BX.util.array_values(this.PARAMS.ITEMS);var e=false;var i=0;for(var s=0,o=this.PARAMS.ITEMS.length;s<o;s++){if((s==0||s==o-1)&&this.PARAMS.ITEMS[s].SEPARATOR)continue;i++;if(!e)e=!!this.PARAMS.ITEMS[s].GLOBAL_ICON;this.addItem(this.PARAMS.ITEMS[s],s)}if(i===1)BX.addClass(this.DIV,"bx-core-popup-menu-single-item");else BX.removeClass(this.DIV,"bx-core-popup-menu-single-item");if(!e)BX.addClass(this.DIV,"bx-core-popup-menu-no-icons");else BX.removeClass(this.DIV,"bx-core-popup-menu-no-icons")}};BX.CMenu.prototype.addItem=function(t){this.ITEMS.push(t);if(t.SEPARATOR){t.NODE=BX.create("DIV",{props:{className:"bx-core-popup-menu-separator"}})}else{var e=!!t.MENU&&(BX.type.isArray(t.MENU)&&t.MENU.length>0||t.MENU instanceof BX.CMenu)||!!t.MENU_URL;if(t.DISABLED){t.CLOSE_ON_CLICK=false;t.LINK=null;t.ONCLICK=null;t.ACTION=null}var i={};if(!!t.LINK||BX.browser.IsIE()&&!BX.browser.IsDoctype()){i.href=t.LINK||"javascript:void(0)"}if(this.PARAMS.PUBLIC_FRAME){i.target="_top"}t.NODE=BX.create(!!t.LINK||BX.browser.IsIE()&&!BX.browser.IsDoctype()?"A":"SPAN",{props:{className:"bx-core-popup-menu-item"+(e?" bx-core-popup-menu-item-opener":"")+(!!t.DEFAULT?" bx-core-popup-menu-item-default":"")+(!!t.DISABLED?" bx-core-popup-menu-item-disabled":"")+(!!t.CHECKED?" bx-core-popup-menu-item-checked":""),title:!!BX.message["MENU_ENABLE_TOOLTIP"]||!!t.SHOW_TITLE?t.TITLE||"":"",BXMENULEVEL:this.PARAMS.LEVEL},attrs:i,events:{mouseover:function(){BX.onCustomEvent("onMenuItemHover",[this.BXMENULEVEL,this.OPENER])}},html:'<span class="bx-core-popup-menu-item-icon'+(t.GLOBAL_ICON?" "+t.GLOBAL_ICON:"")+'"></span><span class="bx-core-popup-menu-item-text">'+(t.HTML||(t.TEXT?BX.util.htmlspecialchars(t.TEXT):""))+"</span>"});if(e&&!t.DISABLED){t.NODE.OPENER=new BX.COpener({DIV:t.NODE,ACTIVE_CLASS:"bx-core-popup-menu-item-opened",TYPE:"hover",MENU:t.MENU,MENU_URL:t.MENU_URL,MENU_PRELOAD:!!t.MENU_PRELOAD,LEVEL:this.PARAMS.LEVEL+1,ATTACH_MODE:"right",TIMEOUT:500})}else if(this.PARAMS.CLOSE_ON_CLICK&&(typeof t.CLOSE_ON_CLICK=="undefined"||!!t.CLOSE_ON_CLICK)){BX.bind(t.NODE,"click",BX.CMenu.broadcastCloseEvent)}else if(this.PARAMS.ADJUST_ON_CLICK&&(typeof t.ADJUST_ON_CLICK=="undefined"||!!t.ADJUST_ON_CLICK)){BX.bind(t.NODE,"click",BX.defer(this.adjustPos,this))}if(e&&!!t.LINK){BX.bind(t.NODE,"dblclick",BX.CMenu._itemDblClick)}if(typeof t.CHECKED!="undefined"){BX.bind(t.NODE,"click",BX.CMenu._toggleChecked)}t.ONCLICK=t.ACTION||t.ONCLICK;if(!!t.ONCLICK){if(BX.type.isString(t.ONCLICK)){t.ONCLICK=new Function("event",t.ONCLICK)}BX.bind(t.NODE,"click",t.ONCLICK)}}this.DIV.appendChild(t.NODE)};BX.CMenu.prototype._documentClickBind=function(){this._documentClickUnBind();BX.bind(document,"click",BX.proxy(this._documentClick,this))};BX.CMenu.prototype._documentClickUnBind=function(){BX.unbind(document,"click",BX.proxy(this._documentClick,this))};BX.CMenu.prototype._documentClick=function(t){t=t||window.event;if(!!t&&!(BX.getEventButton(t)&BX.MSLEFT))return;this.Close()};BX.CMenu.prototype.Show=function(){BX.onCustomEvent(this,"onMenuOpen",[this,this.PARAMS.LEVEL]);BX.CMenu.superclass.Show.apply(this,[]);this.bCloseEventFired=false;BX.addCustomEvent(this.PARAMS.parent_attach,"onChangeNodePosition",BX.proxy(this.adjustToNode,this));BX.defer(this._documentClickBind,this)()};BX.CMenu.prototype.Close=BX.CMenu.prototype.Hide=function(){if(!this.visible())return;BX.removeCustomEvent(this.PARAMS.parent_attach,"onChangeNodePosition",BX.proxy(this.adjustToNode,this));this._documentClickUnBind();if(!this.bCloseEventFired){BX.onCustomEvent(this,"onMenuClose",[this,this.PARAMS.LEVEL]);this.bCloseEventFired=true}BX.CMenu.superclass.Hide.apply(this,arguments)};BX.CMenu.prototype.__adjustMenuToNode=function(){var t=BX.pos(this.PARAMS.parent_attach),e=!!BX.findParent(this.PARAMS.parent_attach,BX.is_fixed);if(e)this.DIV.style.position="fixed";else this.DIV.style.position="absolute";if(!t.top){this.DIV.style.top="-1000px";this.DIV.style.left="-1000px"}if(this.bTimeoutSet)return;var i=this.DIV.offsetWidth,s=this.DIV.offsetHeight;if(!i){setTimeout(BX.delegate(function(){this.bTimeoutSet=false;this.__adjustMenuToNode()},this),100);this.bTimeoutSet=true;return}var o={},n=BX.GetWindowSize();switch(this.PARAMS.ATTACH_MODE){case"bottom":o.top=t.bottom+9;o.left=t.left;var r=0;if(!!this.ARROW){if(t.width>i)r=parseInt(i/2-7);else r=parseInt(Math.min(i,t.width)/2-7);if(r<7){o.left-=15;r+=15}}if(o.left>n.scrollWidth-i-10){var h=o.left;o.left=n.scrollWidth-i-10;if(!!this.ARROW)r+=h-o.left}if(e){o.left-=n.scrollLeft}if(!!this.ARROW)this.ARROW.style.left=r+"px";break;case"right":o.top=t.top-1;o.left=t.right;if(o.left>n.scrollWidth-i-10){o.left=t.left-i-1}break}if(e){o.top-=n.scrollTop}if(!!this.ARROW)this.ARROW.className="bx-core-popup-menu-angle";if(o.top+s>n.scrollTop+n.innerHeight||o.top+s>n.scrollHeight){var a=this.PARAMS.ATTACH_MODE=="bottom"?t.top-s-9:t.bottom-s+1;if(a>n.scrollTop||o.top+s>n.scrollHeight){if(o.top+s>n.scrollHeight){o.top=Math.max(0,n.scrollHeight-s);this.toggleArrow(false)}else{o.top=a;if(!!this.ARROW)this.ARROW.className="bx-core-popup-menu-angle-bottom"}}}if(o.top+o.left==0){this.Hide()}else{this.DIV.style.top=o.top+"px";this.DIV.style.left=o.left+"px"}};BX.CMenu.prototype.adjustToNode=function(t){this.PARAMS.parent_attach=BX(t)||this.PARAMS.parent_attach||this.PARAMS.parent;this.__adjustMenuToNode()};BX.CMenuOpener=function(t){BX.CMenuOpener.superclass.constructor.apply(this);this.PARAMS=t||{};this.setParent(this.PARAMS.parent);this.PARTS={};this.SETTINGS.drag_restrict=true;this.defaultAction=null;this.timeout=500;this.DIV.className="bx-component-opener";this.DIV.ondblclick=BX.PreventDefault;if(this.PARAMS.component_id){this.PARAMS.transform=!!this.PARAMS.transform}this.OPENERS=[];this.DIV.appendChild(BX.create("SPAN",{props:{className:"bx-context-toolbar"+(this.PARAMS.transform?" bx-context-toolbar-vertical-mode":"")}}));this.PARTS.INNER=this.DIV.firstChild.appendChild(BX.create("SPAN",{props:{className:"bx-context-toolbar-inner"},html:'<span class="bx-context-toolbar-drag-icon"></span><span class="bx-context-toolbar-vertical-line"></span><br>'}));this.EXTRA_BUTTONS={};var e=0;for(var i=0,s=this.PARAMS.menu.length;i<s;i++){var o=this.addItem(this.PARAMS.menu[i]);if(null!=o){e++;this.PARTS.INNER.appendChild(o);this.PARTS.INNER.appendChild(BX.create("BR"))}}var n=e>0;this.PARTS.ICONS=this.PARTS.INNER.appendChild(BX.create("SPAN",{props:{className:"bx-context-toolbar-icons"}}));if(this.PARAMS.component_id){this.PARAMS.pin=!!this.PARAMS.pin;if(n)this.PARTS.ICONS.appendChild(BX.create("SPAN",{props:{className:"bx-context-toolbar-separator"}}));this.PARTS.ICON_PIN=this.PARTS.ICONS.appendChild(BX.create("A",{attrs:{href:"javascript:void(0)"},props:{className:this.PARAMS.pin?"bx-context-toolbar-pin-fixed":"bx-context-toolbar-pin"},events:{click:BX.delegate(this.__pin_btn_clicked,this)}}))}if(this.EXTRA_BUTTONS["components2_props"]){var r=this.EXTRA_BUTTONS["components2_props"]||{URL:"javascript:void(0)"};if(null==this.defaultAction){this.defaultAction=r.ONCLICK;this.defaultActionTitle=r.TITLE||r.TEXT}r.URL="javascript:"+BX.util.urlencode(r.ONCLICK);this.ATTACH=this.PARTS.ICONS.appendChild(BX.create("SPAN",{props:{className:"bx-context-toolbar-button bx-context-toolbar-button-settings"},children:[BX.create("SPAN",{props:{className:"bx-context-toolbar-button-inner"},children:[BX.create("A",{attrs:{href:r.URL},events:{mouseover:BX.proxy(this.__msover_text,this),mouseout:BX.proxy(this.__msout_text,this),mousedown:BX.proxy(this.__msdown_text,this)},html:'<span class="bx-context-toolbar-button-icon bx-context-toolbar-settings-icon"></span>'}),BX.create("A",{attrs:{href:"javascript: void(0)"},props:{className:"bx-context-toolbar-button-arrow"},events:{mouseover:BX.proxy(this.__msover_arrow,this),mouseout:BX.proxy(this.__msout_arrow,this),mousedown:BX.proxy(this.__msdown_arrow,this)},html:'<span class="bx-context-toolbar-button-arrow"></span>'})]})]}));this.OPENER=this.ATTACH.firstChild.lastChild;var h=this.attachMenu(this.EXTRA_BUTTONS["components2_submenu"]["MENU"]);BX.addCustomEvent(h,"onOpenerMenuOpen",BX.proxy(this.__menu_open,this));BX.addCustomEvent(h,"onOpenerMenuClose",BX.proxy(this.__menu_close,this))}if(e>1){this.PARTS.ICONS.appendChild(BX.create("span",{props:{className:"bx-context-toolbar-separator bx-context-toolbar-separator-switcher"}}));this.ICON_TRANSFORM=this.PARTS.ICONS.appendChild(BX.create("A",{attrs:{href:"javascript: void(0)"},props:{className:"bx-context-toolbar-switcher"},events:{click:BX.delegate(this.__trf_btn_clicked,this)}}))}if(this.PARAMS.HINT){this.DIV.BXHINT=this.HINT=new BX.CHint({parent:this.DIV,hint:this.PARAMS.HINT.TEXT||"",title:this.PARAMS.HINT.TITLE||"",hide_timeout:this.timeout/2,preventHide:false})}BX.addCustomEvent(this,"onWindowDragFinished",BX.delegate(this.__onMoveFinished,this));BX.addCustomEvent("onDynamicModeChange",BX.delegate(this.__onDynamicModeChange,this));BX.addCustomEvent("onTopPanelCollapse",BX.delegate(this.__onPanelCollapse,this));BX.addCustomEvent("onMenuOpenerMoved",BX.delegate(this.checkPosition,this));BX.addCustomEvent("onMenuOpenerUnhide",BX.delegate(this.checkPosition,this));if(this.OPENERS){for(i=0,s=this.OPENERS.length;i<s;i++){BX.addCustomEvent(this.OPENERS[i],"onOpenerMenuOpen",BX.proxy(this.__hide_hint,this))}}};BX.extend(BX.CMenuOpener,BX.CWindowFloat);BX.CMenuOpener.prototype.setParent=function(t){t=BX(t);if(t.OPENER&&t.OPENER!=this){t.OPENER.Close();t.OPENER.clearHoverHoutEvents()}if(this.PARAMS.parent&&this.PARAMS.parent!=t){this.clearHoverHoutEvents();this.PARAMS.parent.OPENER=null}this.PARAMS.parent=t;this.PARAMS.parent.OPENER=this};BX.CMenuOpener.prototype.setHoverHoutEvents=function(t,e){if(!this.__opener_events_set){BX.bind(this.Get(),"mouseover",t);BX.bind(this.Get(),"mouseout",e);this.__opener_events_set=true}};BX.CMenuOpener.prototype.clearHoverHoutEvents=function(){if(this.Get()){BX.unbindAll(this.Get());this.__opener_events_set=false}};BX.CMenuOpener.prototype.unclosable=true;BX.CMenuOpener.prototype.__check_intersection=function(t,e){return!(e.right<=t.left||e.left>=t.right||e.bottom<=t.top||e.top>=t.bottom)};BX.CMenuOpener.prototype.__msover_text=function(){this.bx_hover=true;if(!this._menu_open)BX.addClass(this.ATTACH,"bx-context-toolbar-button-text-hover")};BX.CMenuOpener.prototype.__msout_text=function(){this.bx_hover=false;if(!this._menu_open)BX.removeClass(this.ATTACH,"bx-context-toolbar-button-text-hover bx-context-toolbar-button-text-active")};BX.CMenuOpener.prototype.__msover_arrow=function(){this.bx_hover=true;if(!this._menu_open)BX.addClass(this.ATTACH,"bx-context-toolbar-button-arrow-hover")};BX.CMenuOpener.prototype.__msout_arrow=function(){this.bx_hover=false;if(!this._menu_open)BX.removeClass(this.ATTACH,"bx-context-toolbar-button-arrow-hover bx-context-toolbar-button-arrow-active")};BX.CMenuOpener.prototype.__msdown_text=function(){this.bx_active=true;if(!this._menu_open)BX.addClass(this.ATTACH,"bx-context-toolbar-button-text-active")};BX.CMenuOpener.prototype.__msdown_arrow=function(){this.bx_active=true;if(!this._menu_open)BX.addClass(this.ATTACH,"bx-context-toolbar-button-arrow-active")};BX.CMenuOpener.prototype.__menu_close=function(){this._menu_open=false;this.bx_active=false;BX.removeClass(this.ATTACH,"bx-context-toolbar-button-active bx-context-toolbar-button-text-active bx-context-toolbar-button-arrow-active");if(!this.bx_hover){BX.removeClass(this.ATTACH,"bx-context-toolbar-button-hover bx-context-toolbar-button-text-hover bx-context-toolbar-button-arrow-hover");this.bx_hover=false}};BX.CMenuOpener.prototype.__menu_open=function(){this._menu_open=true};BX.CMenuOpener.prototype.checkPosition=function(){if(this.isMenuVisible()||this.DIV.style.display=="none"||this==BX.proxy_context||BX.proxy_context.zIndex>this.zIndex)return;this.correctPosition(BX.proxy_context)};BX.CMenuOpener.prototype.correctPosition=function(t){var e=BX.pos(this.DIV),i=BX.pos(t.Get());if(this.__check_intersection(e,i)){var s=i.top-e.height;if(s<0)s=i.bottom;this.DIV.style.top=s+"px";BX.addCustomEvent(t,"onMenuOpenerHide",BX.proxy(this.restorePosition,this));BX.onCustomEvent(this,"onMenuOpenerMoved")}};BX.CMenuOpener.prototype.restorePosition=function(){if(!this.MOUSEOVER&&!this.isMenuVisible()){if(this.originalPos)this.DIV.style.top=this.originalPos.top+"px";BX.removeCustomEvent(BX.proxy_context,"onMenuOpenerHide",BX.proxy(this.restorePosition,this));if(this.restore_pos_timeout)clearTimeout(this.restore_pos_timeout)}else{this.restore_pos_timeout=setTimeout(BX.proxy(this.restorePosition,this),this.timeout)}};BX.CMenuOpener.prototype.Show=function(){BX.CMenuOpener.superclass.Show.apply(this,arguments);this.SetDraggable(this.PARTS.INNER.firstChild);this.DIV.style.width="auto";this.DIV.style.height="auto";if(!this.PARAMS.pin){this.DIV.style.left="-1000px";this.DIV.style.top="-1000px";this.Hide()}else{this.bPosAdjusted=true;this.bMoved=true;if(this.PARAMS.top)this.DIV.style.top=this.PARAMS.top+"px";if(this.PARAMS.left)this.DIV.style.left=this.PARAMS.left+"px";this.DIV.style.display=!BX.admin.dynamic_mode||BX.admin.dynamic_mode_show_borders?"block":"none";if(this.DIV.style.display=="block"){setTimeout(BX.delegate(function(){BX.onCustomEvent(this,"onMenuOpenerUnhide")},this),50)}}};BX.CMenuOpener.prototype.executeDefaultAction=function(){if(this.defaultAction){if(BX.type.isFunction(this.defaultAction))this.defaultAction();else if(BX.type.isString(this.defaultAction))BX.evalGlobal(this.defaultAction)}};BX.CMenuOpener.prototype.__onDynamicModeChange=function(t){this.DIV.style.display=t?"block":"none"};BX.CMenuOpener.prototype.__onPanelCollapse=function(t,e){this.DIV.style.top=parseInt(this.DIV.style.top)+e+"px";if(this.PARAMS.pin){this.__savePosition()}};BX.CMenuOpener.prototype.__onMoveFinished=function(){BX.onCustomEvent(this,"onMenuOpenerMoved");this.bMoved=true;if(this.PARAMS.pin)this.__savePosition()};BX.CMenuOpener.prototype.__savePosition=function(){var t={};t.pin=this.PARAMS.pin;if(!this.PARAMS.pin){t.top=false;t.left=false;t.transform=false}else{t.transform=this.PARAMS.transform;if(this.bMoved){t.left=parseInt(this.DIV.style.left);t.top=parseInt(this.DIV.style.top)}}BX.WindowManager.saveWindowOptions(this.PARAMS.component_id,t)};BX.CMenuOpener.prototype.__pin_btn_clicked=function(){this.Pin()};BX.CMenuOpener.prototype.Pin=function(t){if(null==t)this.PARAMS.pin=!this.PARAMS.pin;else this.PARAMS.pin=!!t;this.PARTS.ICON_PIN.className=this.PARAMS.pin?"bx-context-toolbar-pin-fixed":"bx-context-toolbar-pin";this.__savePosition()};BX.CMenuOpener.prototype.__trf_btn_clicked=function(){this.Transform()};BX.CMenuOpener.prototype.Transform=function(t){var e={};if(null==t)this.PARAMS.transform=!this.PARAMS.transform;else this.PARAMS.transform=!!t;if(this.bMoved){e=BX.pos(this.DIV)}if(this.PARAMS.transform)BX.addClass(this.DIV.firstChild,"bx-context-toolbar-vertical-mode");else BX.removeClass(this.DIV.firstChild,"bx-context-toolbar-vertical-mode");if(!this.bMoved){this.adjustPos()}else{this.DIV.style.left=e.right-this.DIV.offsetWidth-(BX.browser.IsIE()&&!BX.browser.IsDoctype()?2:0)+"px"}this.__savePosition()};BX.CMenuOpener.prototype.adjustToNodeGetPos=function(){var t=BX.pos(this.PARAMS.parent);var e=BX.GetWindowScrollSize();var i=this.DIV.offsetWidth;t.left-=BX.admin.__border_dx;t.top-=BX.admin.__border_dx;if(true||!this.PARAMS.transform){t.top-=45}if(t.left>e.scrollWidth-i){t.left=e.scrollWidth-i}return t};BX.CMenuOpener.prototype.addItem=function(t){if(t.TYPE){this.EXTRA_BUTTONS[t.TYPE]=t;return null}else{var e=new BX.CMenuOpenerItem(t);if(null==this.defaultAction){if(e.item.ONCLICK){this.defaultAction=t.ONCLICK}else if(e.item.MENU){this.defaultAction=BX.delegate(function(){this.Open()},e.item.OPENER)}this.defaultActionTitle=t.TITLE||t.TEXT;BX.addClass(e.Get(),"bx-content-toolbar-default")}if(e.item.OPENER)this.OPENERS[this.OPENERS.length]=e.item.OPENER;return e.Get()}};BX.CMenuOpener.prototype.attachMenu=function(t){var e=new BX.COpener({DIV:this.OPENER,ATTACH:this.ATTACH,MENU:t,TYPE:"click"});this.OPENERS[this.OPENERS.length]=e;return e};BX.CMenuOpener.prototype.__hide_hint=function(){if(this.HINT)this.HINT.__hide_immediately()};BX.CMenuOpener.prototype.isMenuVisible=function(){for(var t=0,e=this.OPENERS.length;t<e;t++){if(this.OPENERS[t].isMenuVisible())return true}return false};BX.CMenuOpener.prototype.Hide=function(){if(!this.PARAMS.pin){this.DIV.style.display="none";BX.onCustomEvent(this,"onMenuOpenerHide")}};BX.CMenuOpener.prototype.UnHide=function(){this.DIV.style.display="block";if(!this.bPosAdjusted&&!this.PARAMS.pin){this.adjustPos();this.bPosAdjusted=true}if(null==this.originalPos&&!this.bMoved){this.originalPos=BX.pos(this.DIV)}BX.onCustomEvent(this,"onMenuOpenerUnhide")};BX.CMenuOpenerItem=function(t){this.item=t;if(this.item.ACTION&&!this.item.ONCLICK){this.item.ONCLICK=this.item.ACTION}this.DIV=BX.create("SPAN");this.DIV.appendChild(BX.create("SPAN",{props:{className:"bx-context-toolbar-button-underlay"}}));this.WRAPPER=this.DIV.appendChild(BX.create("SPAN",{props:{className:"bx-context-toolbar-button-wrapper"},children:[BX.create("SPAN",{props:{className:"bx-context-toolbar-button",title:t.TITLE},children:[BX.create("SPAN",{props:{className:"bx-context-toolbar-button-inner"}})]})]}));var e=BX.create("SPAN",{props:{className:"bx-context-toolbar-button-icon"+(this.item.ICON||this.item.ICONCLASS?" "+(this.item.ICON||this.item.ICONCLASS):"")},attrs:!(this.item.ICON||this.item.ICONCLASS)&&(this.item.SRC||this.item.IMAGE)?{style:"background: scroll transparent url("+(this.item.SRC||this.item.IMAGE)+") no-repeat center center !important;"}:{}}),i=BX.create("SPAN",{props:{className:"bx-context-toolbar-button-text"},text:this.item.TEXT});if(this.item.ACTION&&!this.item.ONCLICK){this.item.ONCLICK=this.item.ACTION}this.bHasMenu=!!this.item.MENU;this.bHasAction=!!this.item.ONCLICK;if(this.bHasAction){this.LINK=this.WRAPPER.firstChild.firstChild.appendChild(BX.create("A",{attrs:{href:"javascript: void(0)"},events:{mouseover:this.bHasMenu?BX.proxy(this.__msover_text,this):BX.proxy(this.__msover,this),mouseout:this.bHasMenu?BX.proxy(this.__msout_text,this):BX.proxy(this.__msout,this),mousedown:this.bHasMenu?BX.proxy(this.__msdown_text,this):BX.proxy(this.__msdown,this)},children:[e,i]}));if(this.bHasMenu){this.LINK_MENU=this.WRAPPER.firstChild.firstChild.appendChild(BX.create("A",{props:{className:"bx-context-toolbar-button-arrow"},attrs:{href:"javascript: void(0)"},events:{mouseover:BX.proxy(this.__msover_arrow,this),mouseout:BX.proxy(this.__msout_arrow,this),mousedown:BX.proxy(this.__msdown_arrow,this)},children:[BX.create("SPAN",{props:{className:"bx-context-toolbar-button-arrow"}})]}))}}else if(this.bHasMenu){this.item.ONCLICK=null;this.LINK=this.LINK_MENU=this.WRAPPER.firstChild.firstChild.appendChild(BX.create("A",{attrs:{href:"javascript: void(0)"},events:{mouseover:BX.proxy(this.__msover,this),mouseout:BX.proxy(this.__msout,this),mousedown:BX.proxy(this.__msdown,this)},children:[e,i]}));this.LINK.appendChild(BX.create("SPAN",{props:{className:"bx-context-toolbar-single-button-arrow"}}))}if(this.bHasMenu){this.item.SUBMENU=new BX.CMenu({ATTACH_MODE:"bottom",ITEMS:this.item["MENU"],parent:this.LINK_MENU,parent_attach:this.WRAPPER.firstChild});this.item.OPENER=new BX.COpener({DIV:this.LINK_MENU,TYPE:"click",MENU:this.item.SUBMENU});BX.addCustomEvent(this.item.OPENER,"onOpenerMenuOpen",BX.proxy(this.__menu_open,this));BX.addCustomEvent(this.item.OPENER,"onOpenerMenuClose",BX.proxy(this.__menu_close,this))}if(this.bHasAction){BX.bind(this.LINK,"click",BX.delegate(this.__click,this))}};BX.CMenuOpenerItem.prototype.Get=function(){return this.DIV};BX.CMenuOpenerItem.prototype.__msover=function(){this.bx_hover=true;if(!this._menu_open)BX.addClass(this.LINK.parentNode.parentNode,"bx-context-toolbar-button-hover")};BX.CMenuOpenerItem.prototype.__msout=function(){this.bx_hover=false;if(!this._menu_open)BX.removeClass(this.LINK.parentNode.parentNode,"bx-context-toolbar-button-hover bx-context-toolbar-button-active")};BX.CMenuOpenerItem.prototype.__msover_text=function(){this.bx_hover=true;if(!this._menu_open)BX.addClass(this.LINK.parentNode.parentNode,"bx-context-toolbar-button-text-hover")};BX.CMenuOpenerItem.prototype.__msout_text=function(){this.bx_hover=false;if(!this._menu_open)BX.removeClass(this.LINK.parentNode.parentNode,"bx-context-toolbar-button-text-hover bx-context-toolbar-button-text-active")};BX.CMenuOpenerItem.prototype.__msover_arrow=function(){this.bx_hover=true;if(!this._menu_open)BX.addClass(this.LINK.parentNode.parentNode,"bx-context-toolbar-button-arrow-hover")};BX.CMenuOpenerItem.prototype.__msout_arrow=function(){this.bx_hover=false;if(!this._menu_open)BX.removeClass(this.LINK.parentNode.parentNode,"bx-context-toolbar-button-arrow-hover bx-context-toolbar-button-arrow-active")};BX.CMenuOpenerItem.prototype.__msdown=function(){this.bx_active=true;if(!this._menu_open)BX.addClass(this.LINK.parentNode.parentNode,"bx-context-toolbar-button-active")};BX.CMenuOpenerItem.prototype.__msdown_text=function(){this.bx_active=true;if(!this._menu_open)BX.addClass(this.LINK.parentNode.parentNode,"bx-context-toolbar-button-text-active")};BX.CMenuOpenerItem.prototype.__msdown_arrow=function(){this.bx_active=true;if(!this._menu_open)BX.addClass(this.LINK.parentNode.parentNode,"bx-context-toolbar-button-arrow-active")};BX.CMenuOpenerItem.prototype.__menu_close=function(){this._menu_open=false;this.bx_active=false;BX.removeClass(this.LINK.parentNode.parentNode,"bx-context-toolbar-button-active bx-context-toolbar-button-text-active bx-context-toolbar-button-arrow-active");if(!this.bx_hover){BX.removeClass(this.LINK.parentNode.parentNode,"bx-context-toolbar-button-hover bx-context-toolbar-button-text-hover bx-context-toolbar-button-arrow-hover");this.bx_hover=false}};BX.CMenuOpenerItem.prototype.__menu_open=function(){this._menu_open=true};BX.CMenuOpenerItem.prototype.__click=function(){BX.evalGlobal(this.item.ONCLICK)};BX.CPageOpener=function(t){BX.CPageOpener.superclass.constructor.apply(this,arguments);this.timeout=505;window.PAGE_EDIT_CONTROL=this};BX.extend(BX.CPageOpener,BX.CMenuOpener);BX.CPageOpener.prototype.checkPosition=function(){if(this==BX.proxy_context)return;this.correctPosition(BX.proxy_context)};BX.CPageOpener.prototype.correctPosition=function(t){if(this.bPosCorrected)return;var e;if(this.DIV.style.display=="none"){e=this.adjustToNodeGetPos();e.bottom=e.top+30;e.right=e.left+300}else{e=BX.pos(this.DIV)}var i=BX.pos(t.Get());if(this.__check_intersection(e,i)){this.DIV.style.display="none";BX.addCustomEvent(t,"onMenuOpenerHide",BX.proxy(this.restorePosition,this));this.bPosCorrected=true}};BX.CPageOpener.prototype.restorePosition=function(){if(BX.proxy_context&&BX.proxy_context.Get().style.display=="none"){this.bPosCorrected=false;if(this.PARAMS.parent.bx_over||this.PARAMS.pin)this.UnHide();BX.removeCustomEvent("onMenuOpenerHide",BX.proxy(this.restorePosition,this))}};BX.CPageOpener.prototype.UnHide=function(){if(!this.bPosCorrected)BX.CPageOpener.superclass.UnHide.apply(this,arguments)};BX.CPageOpener.prototype.Remove=function(){BX.admin.removeComponentBorder(this.PARAMS.parent);BX.userOptions.save("global","settings","page_edit_control_enable","N");this.DIV.style.display="none"};BX.CHintSimple=function(){BX.CHintSimple.superclass.constructor.apply(this,arguments)};BX.extend(BX.CHintSimple,BX.CHint);BX.CHintSimple.prototype.Init=function(){this.DIV=document.body.appendChild(BX.create("DIV",{props:{className:"bx-tooltip-simple"},style:{display:"none"},children:[this.CONTENT=BX.create("DIV")]}));if(this.HINT_TITLE)this.CONTENT.appendChild(BX.create("B",{text:this.HINT_TITLE}));if(this.HINT)this.CONTENT_TEXT=this.CONTENT.appendChild(BX.create("DIV")).appendChild(BX.create("SPAN",{html:this.HINT}));if(this.PARAMS.preventHide){BX.bind(this.DIV,"mouseout",BX.proxy(this.Hide,this));BX.bind(this.DIV,"mouseover",BX.proxy(this.Show,this))}this.bInited=true};BX.adminInformer={itemsShow:3,Init:function(t){if(t)BX.adminInformer.itemsShow=t;var e=BX("admin-informer");if(e)document.body.appendChild(e);BX.addCustomEvent("onTopPanelCollapse",BX.proxy(BX.adminInformer.Close,BX.adminInformer))},Toggle:function(t){var e=BX("admin-informer");if(!e)return false;var i=BX.pos(t);e.style.top=parseInt(i.top)+parseInt(i.height)+7+"px";e.style.left=i.left+"px";if(!BX.hasClass(e,"adm-informer-active"))BX.adminInformer.Show(e);else BX.adminInformer.Hide(e);return false},Close:function(){BX.adminInformer.Hide(BX("admin-informer"))},OnInnerClick:function(t){var e=t.target||t.srcElement;if(e.nodeName.toLowerCase()!="a"||BX.hasClass(e,"adm-informer-footer")){return BX.PreventDefault(t)}return true},ToggleExtra:function(){var t=BX("adm-informer-footer");if(BX.hasClass(t,"adm-informer-footer-collapsed"))this.ShowAll();else this.HideExtra();return false},ShowAll:function(){var t=BX("admin-informer");for(var e=0;e<t.children.length;e++)if(BX.hasClass(t.children[e],"adm-informer-item")&&t.children[e].style.display=="none"){t.children[e].style.display="block"}var i=BX("adm-informer-footer");if(i.textContent!==undefined)i.textContent=BX.message("JSADM_AI_HIDE_EXTRA");else i.innerText=BX.message("JSADM_AI_HIDE_EXTRA");BX.removeClass(i,"adm-informer-footer-collapsed");return false},HideExtra:function(){var t=BX("admin-informer");var e=0;for(var i=BX.adminInformer.itemsShow+1;i<t.children.length;i++){if(BX.hasClass(t.children[i],"adm-informer-item")&&t.children[i].style.display=="block"){t.children[i].style.display="none";e++}}var s=BX("adm-informer-footer");var o=BX.message("JSADM_AI_ALL_NOTIF")+" ("+(BX.adminInformer.itemsShow+parseInt(e))+")";if(s.textContent!==undefined)s.textContent=o;else s.innerText=o;BX.addClass(s,"adm-informer-footer-collapsed");return false},Show:function(t){var e=BX("adm-header-notif-block");if(e)BX.addClass(e,"adm-header-notif-block-active");BX.onCustomEvent(t,"onBeforeAdminInformerShow");setTimeout(BX.proxy(function(){BX.bind(document,"click",BX.proxy(BX.adminInformer.Close,BX.adminInformer))},BX.adminInformer),0);BX.addClass(t,"adm-informer-active");setTimeout(function(){BX.addClass(t,"adm-informer-animate")},0)},Hide:function(t){var e=BX("adm-header-notif-block");if(e)BX.removeClass(e,"adm-header-notif-block-active");BX.unbind(document,"click",BX.proxy(BX.adminInformer.Close,BX.adminInformer));BX.removeClass(t,"adm-informer-animate");if(this.IsAnimationSupported())setTimeout(function(){BX.removeClass(t,"adm-informer-active")},300);else BX.removeClass(t,"adm-informer-active");BX.onCustomEvent(t,"onAdminInformerHide")},IsAnimationSupported:function(){var t=document.body||document.documentElement;if(typeof t.style.transition=="string")return true;else if(typeof t.style.MozTransition=="string")return true;else if(typeof t.style.OTransition=="string")return true;else if(typeof t.style.WebkitTransition=="string")return true;else if(typeof t.style.msTransition=="string")return true;return false},SetItemHtml:function(t,e){var i=BX("adm-informer-item-html-"+t);if(!i)return false;i.innerHTML=e;return true},SetItemFooter:function(t,e){var i=BX("adm-informer-item-footer-"+t);if(!i)return false;i.innerHTML=e;if(e)i.style.display="block";else i.style.display="none";return true}}})(window);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:53:"/bitrix/js/main/date/main.date.min.js?155558770114103";s:6:"source";s:33:"/bitrix/js/main/date/main.date.js";s:3:"min";s:37:"/bitrix/js/main/date/main.date.min.js";s:3:"map";s:37:"/bitrix/js/main/date/main.date.map.js";}"*/
(function(e){if(!e.BX){e.BX={}}if(!e.BX.Main){e.BX.Main={}}else if(e.BX.Main.Date){return}var t=e.BX;t.Main.Date={AM_PM_MODE:{UPPER:1,LOWER:2,NONE:false},format:function(e,t,_,n){var D=this;var a=r.isDate(t)?new Date(t.getTime()):r.isNumber(t)?new Date(t*1e3):new Date;var i=r.isDate(_)?new Date(_.getTime()):r.isNumber(_)?new Date(_*1e3):new Date;var o=!!n;if(r.isArray(e))return M(e,a,i,o);else if(!r.isNotEmptyString(e))return"";var O=/\\?(sago|iago|isago|Hago|dago|mago|Yago|sdiff|idiff|Hdiff|ddiff|mdiff|Ydiff|sshort|ishort|Hshort|dshort|mhort|Yshort|yesterday|today|tommorow|tomorrow|[a-z])/gi;var s={d:function(){return r.strPadLeft(g(a).toString(),2,"0")},D:function(){return D._getMessage("DOW_"+m(a))},j:function(){return g(a)},l:function(){return D._getMessage("DAY_OF_WEEK_"+m(a))},N:function(){return m(a)||7},S:function(){if(g(a)%10==1&&g(a)!=11)return"st";else if(g(a)%10==2&&g(a)!=12)return"nd";else if(g(a)%10==3&&g(a)!=13)return"rd";else return"th"},w:function(){return m(a)},z:function(){var e=new Date(F(a),0,1);var t=new Date(F(a),c(a),g(a));return Math.ceil((t-e)/(24*3600*1e3))},W:function(){var e=new Date(a.getTime());var t=(m(a)+6)%7;R(e,g(e)-t+3);var _=e.getTime();H(e,0,1);if(m(e)!=4)H(e,0,1+(4-m(e)+7)%7);var n=1+Math.ceil((_-e)/(7*24*3600*1e3));return r.strPadLeft(n.toString(),2,"0")},F:function(){return D._getMessage("MONTH_"+(c(a)+1)+"_S")},f:function(){return D._getMessage("MONTH_"+(c(a)+1))},m:function(){return r.strPadLeft((c(a)+1).toString(),2,"0")},M:function(){return D._getMessage("MON_"+(c(a)+1))},n:function(){return c(a)+1},t:function(){var e=o?new Date(Date.UTC(F(a),c(a)+1,0)):new Date(F(a),c(a)+1,0);return g(e)},L:function(){var e=F(a);return e%4==0&&e%100!=0||e%400==0?1:0},o:function(){var e=new Date(a.getTime());R(e,g(e)-(m(a)+6)%7+3);return F(e)},Y:function(){return F(a)},y:function(){return F(a).toString().slice(2)},a:function(){return T(a)>11?"pm":"am"},A:function(){return T(a)>11?"PM":"AM"},B:function(){var e=(a.getUTCHours()+1)%24+a.getUTCMinutes()/60+a.getUTCSeconds()/3600;return r.strPadLeft(Math.floor(e*1e3/24).toString(),3,"0")},g:function(){return T(a)%12||12},G:function(){return T(a)},h:function(){return r.strPadLeft((T(a)%12||12).toString(),2,"0")},H:function(){return r.strPadLeft(T(a).toString(),2,"0")},i:function(){return r.strPadLeft(E(a).toString(),2,"0")},s:function(){return r.strPadLeft(A(a).toString(),2,"0")},u:function(){return r.strPadLeft((l(a)*1e3).toString(),6,"0")},e:function(){if(o)return"UTC";return""},I:function(){if(o)return 0;var e=new Date(F(a),0,1);var t=Date.UTC(F(a),0,1);var r=new Date(F(a),6,0);var _=Date.UTC(F(a),6,0);return 0+(e-t!==r-_)},O:function(){if(o)return"+0000";var e=a.getTimezoneOffset();var t=Math.abs(e);return(e>0?"-":"+")+r.strPadLeft((Math.floor(t/60)*100+t%60).toString(),4,"0")},P:function(){if(o)return"+00:00";var e=this.O();return e.substr(0,3)+":"+e.substr(3)},Z:function(){if(o)return 0;return-a.getTimezoneOffset()*60},c:function(){return"Y-m-d\\TH:i:sP".replace(O,S)},r:function(){return"D, d M Y H:i:s O".replace(O,S)},U:function(){return Math.floor(a.getTime()/1e3)},sago:function(){return d(I((i-a)/1e3),{0:"FD_SECOND_AGO_0",1:"FD_SECOND_AGO_1","10_20":"FD_SECOND_AGO_10_20",MOD_1:"FD_SECOND_AGO_MOD_1",MOD_2_4:"FD_SECOND_AGO_MOD_2_4",MOD_OTHER:"FD_SECOND_AGO_MOD_OTHER"})},sdiff:function(){return d(I((i-a)/1e3),{0:"FD_SECOND_DIFF_0",1:"FD_SECOND_DIFF_1","10_20":"FD_SECOND_DIFF_10_20",MOD_1:"FD_SECOND_DIFF_MOD_1",MOD_2_4:"FD_SECOND_DIFF_MOD_2_4",MOD_OTHER:"FD_SECOND_DIFF_MOD_OTHER"})},sshort:function(){return D._getMessage("FD_SECOND_SHORT").replace(/#VALUE#/g,I((i-a)/1e3))},iago:function(){return d(I((i-a)/60/1e3),{0:"FD_MINUTE_AGO_0",1:"FD_MINUTE_AGO_1","10_20":"FD_MINUTE_AGO_10_20",MOD_1:"FD_MINUTE_AGO_MOD_1",MOD_2_4:"FD_MINUTE_AGO_MOD_2_4",MOD_OTHER:"FD_MINUTE_AGO_MOD_OTHER"})},idiff:function(){return d(I((i-a)/60/1e3),{0:"FD_MINUTE_DIFF_0",1:"FD_MINUTE_DIFF_1","10_20":"FD_MINUTE_DIFF_10_20",MOD_1:"FD_MINUTE_DIFF_MOD_1",MOD_2_4:"FD_MINUTE_DIFF_MOD_2_4",MOD_OTHER:"FD_MINUTE_DIFF_MOD_OTHER"})},isago:function(){var e=I((i-a)/60/1e3);var t=d(e,{0:"FD_MINUTE_0",1:"FD_MINUTE_1","10_20":"FD_MINUTE_10_20",MOD_1:"FD_MINUTE_MOD_1",MOD_2_4:"FD_MINUTE_MOD_2_4",MOD_OTHER:"FD_MINUTE_MOD_OTHER"});t+=" ";var r=I((i-a)/1e3)-e*60;t+=d(r,{0:"FD_SECOND_AGO_0",1:"FD_SECOND_AGO_1","10_20":"FD_SECOND_AGO_10_20",MOD_1:"FD_SECOND_AGO_MOD_1",MOD_2_4:"FD_SECOND_AGO_MOD_2_4",MOD_OTHER:"FD_SECOND_AGO_MOD_OTHER"});return t},ishort:function(){return D._getMessage("FD_MINUTE_SHORT").replace(/#VALUE#/g,I((i-a)/60/1e3))},Hago:function(){return d(I((i-a)/60/60/1e3),{0:"FD_HOUR_AGO_0",1:"FD_HOUR_AGO_1","10_20":"FD_HOUR_AGO_10_20",MOD_1:"FD_HOUR_AGO_MOD_1",MOD_2_4:"FD_HOUR_AGO_MOD_2_4",MOD_OTHER:"FD_HOUR_AGO_MOD_OTHER"})},Hdiff:function(){return d(I((i-a)/60/60/1e3),{0:"FD_HOUR_DIFF_0",1:"FD_HOUR_DIFF_1","10_20":"FD_HOUR_DIFF_10_20",MOD_1:"FD_HOUR_DIFF_MOD_1",MOD_2_4:"FD_HOUR_DIFF_MOD_2_4",MOD_OTHER:"FD_HOUR_DIFF_MOD_OTHER"})},Hshort:function(){return D._getMessage("FD_HOUR_SHORT").replace(/#VALUE#/g,I((i-a)/60/60/1e3))},yesterday:function(){return D._getMessage("FD_YESTERDAY")},today:function(){return D._getMessage("FD_TODAY")},tommorow:function(){return D._getMessage("FD_TOMORROW")},tomorrow:function(){return D._getMessage("FD_TOMORROW")},dago:function(){return d(I((i-a)/60/60/24/1e3),{0:"FD_DAY_AGO_0",1:"FD_DAY_AGO_1","10_20":"FD_DAY_AGO_10_20",MOD_1:"FD_DAY_AGO_MOD_1",MOD_2_4:"FD_DAY_AGO_MOD_2_4",MOD_OTHER:"FD_DAY_AGO_MOD_OTHER"})},ddiff:function(){return d(I((i-a)/60/60/24/1e3),{0:"FD_DAY_DIFF_0",1:"FD_DAY_DIFF_1","10_20":"FD_DAY_DIFF_10_20",MOD_1:"FD_DAY_DIFF_MOD_1",MOD_2_4:"FD_DAY_DIFF_MOD_2_4",MOD_OTHER:"FD_DAY_DIFF_MOD_OTHER"})},dshort:function(){return D._getMessage("FD_DAY_SHORT").replace(/#VALUE#/g,I((i-a)/60/60/24/1e3))},mago:function(){return d(I((i-a)/60/60/24/31/1e3),{0:"FD_MONTH_AGO_0",1:"FD_MONTH_AGO_1","10_20":"FD_MONTH_AGO_10_20",MOD_1:"FD_MONTH_AGO_MOD_1",MOD_2_4:"FD_MONTH_AGO_MOD_2_4",MOD_OTHER:"FD_MONTH_AGO_MOD_OTHER"})},mdiff:function(){return d(I((i-a)/60/60/24/31/1e3),{0:"FD_MONTH_DIFF_0",1:"FD_MONTH_DIFF_1","10_20":"FD_MONTH_DIFF_10_20",MOD_1:"FD_MONTH_DIFF_MOD_1",MOD_2_4:"FD_MONTH_DIFF_MOD_2_4",MOD_OTHER:"FD_MONTH_DIFF_MOD_OTHER"})},mshort:function(){return D._getMessage("FD_MONTH_SHORT").replace(/#VALUE#/g,I((i-a)/60/60/24/31/1e3))},Yago:function(){return d(I((i-a)/60/60/24/365/1e3),{0:"FD_YEARS_AGO_0",1:"FD_YEARS_AGO_1","10_20":"FD_YEARS_AGO_10_20",MOD_1:"FD_YEARS_AGO_MOD_1",MOD_2_4:"FD_YEARS_AGO_MOD_2_4",MOD_OTHER:"FD_YEARS_AGO_MOD_OTHER"})},Ydiff:function(){return d(I((i-a)/60/60/24/365/1e3),{0:"FD_YEARS_DIFF_0",1:"FD_YEARS_DIFF_1","10_20":"FD_YEARS_DIFF_10_20",MOD_1:"FD_YEARS_DIFF_MOD_1",MOD_2_4:"FD_YEARS_DIFF_MOD_2_4",MOD_OTHER:"FD_YEARS_DIFF_MOD_OTHER"})},Yshort:function(){return d(I((i-a)/60/60/24/365/1e3),{0:"FD_YEARS_SHORT_0",1:"FD_YEARS_SHORT_1","10_20":"FD_YEARS_SHORT_10_20",MOD_1:"FD_YEARS_SHORT_MOD_1",MOD_2_4:"FD_YEARS_SHORT_MOD_2_4",MOD_OTHER:"FD_YEARS_SHORT_MOD_OTHER"})},x:function(){var e=D.isAmPmMode(true);var t=e===D.AM_PM_MODE.LOWER?"g:i a":e===D.AM_PM_MODE.UPPER?"g:i A":"H:i";return D.format([["tomorrow","tomorrow, "+t],["-",D.convertBitrixFormat(D._getMessage("FORMAT_DATETIME")).replace(/:s/g,"")],["s","sago"],["i","iago"],["today","today, "+t],["yesterday","yesterday, "+t],["",D.convertBitrixFormat(D._getMessage("FORMAT_DATETIME")).replace(/:s/g,"")]],a,i,o)},X:function(){var e=D.isAmPmMode(true);var t=e===D.AM_PM_MODE.LOWER?"g:i a":e===D.AM_PM_MODE.UPPER?"g:i A":"H:i";var r=D.format([["tomorrow","tomorrow"],["-",D.convertBitrixFormat(D._getMessage("FORMAT_DATE"))],["today","today"],["yesterday","yesterday"],["",D.convertBitrixFormat(D._getMessage("FORMAT_DATE"))]],a,i,o);var _=D.format([["tomorrow",t],["today",t],["yesterday",t],["",""]],a,i,o);if(_.length>0)return D._getMessage("FD_DAY_AT_TIME").replace(/#DAY#/g,r).replace(/#TIME#/g,_);else return r},Q:function(){var e=I((i-a)/60/60/24/1e3);if(e==0)return D._getMessage("FD_DAY_DIFF_1").replace(/#VALUE#/g,1);else return D.format([["d","ddiff"],["m","mdiff"],["","Ydiff"]],a,i)}};var u=false;if(e[0]&&e[0]=="^"){u=true;e=e.substr(1)}var f=e.replace(O,S);if(u){f=f.replace(/\s*00:00:00\s*/g,"").replace(/(\d\d:\d\d)(:00)/g,"$1").replace(/(\s*00:00\s*)(?!:)/g,"")}return f;function M(e,t,r,_){var n=I((r-t)/1e3);for(var a=0;a<e.length;a++){var i=e[a][0];var o=e[a][1];var O=null;if(i=="s"){if(n<60)return D.format(o,t,r,_)}else if((O=/^s(\d+)\>?(\d+)?/.exec(i))!=null){if(O[1]&&O[2]){if(n<O[1]&&n>O[2]){return D.format(o,t,r,_)}}else if(n<O[1]){return D.format(o,t,r,_)}}else if(i=="i"){if(n<60*60)return D.format(o,t,r,_)}else if((O=/^i(\d+)\>?(\d+)?/.exec(i))!=null){if(O[1]&&O[2]){if(n<O[1]*60&&n>O[2]*60){return D.format(o,t,r,_)}}else if(n<O[1]*60){return D.format(o,t,r,_)}}else if(i=="H"){if(n<24*60*60)return D.format(o,t,r,_)}else if((O=/^H(\d+)\>?(\d+)?/.exec(i))!=null){if(O[1]&&O[2]){if(n<O[1]*60*60&&n>O[2]*60*60){return D.format(o,t,r,_)}}else if(n<O[1]*60*60){return D.format(o,t,r,_)}}else if(i=="d"){if(n<31*24*60*60)return D.format(o,t,r,_)}else if((O=/^d(\d+)\>?(\d+)?/.exec(i))!=null){if(O[1]&&O[2]){if(n<O[1]*24*60*60&&n>O[2]*24*60*60){return D.format(o,t,r,_)}}else if(n<O[1]*24*60*60){return D.format(o,t,r,_)}}else if(i=="m"){if(n<365*24*60*60)return D.format(o,t,r,_)}else if((O=/^m(\d+)\>?(\d+)?/.exec(i))!=null){if(O[1]&&O[2]){if(n<O[1]*31*24*60*60&&n>O[2]*31*24*60*60){return D.format(o,t,r,_)}}else if(n<O[1]*31*24*60*60){return D.format(o,t,r,_)}}else if(i=="now"){if(t.getTime()==r.getTime()){return D.format(o,t,r,_)}}else if(i=="today"){var s=F(r),u=c(r),f=g(r);var M=_?new Date(Date.UTC(s,u,f,0,0,0,0)):new Date(s,u,f,0,0,0,0);var T=_?new Date(Date.UTC(s,u,f+1,0,0,0,0)):new Date(s,u,f+1,0,0,0,0);if(t>=M&&t<T)return D.format(o,t,r,_)}else if(i=="todayFuture"){var s=F(r),u=c(r),f=g(r);var M=r.getTime();var T=_?new Date(Date.UTC(s,u,f+1,0,0,0,0)):new Date(s,u,f+1,0,0,0,0);if(t>=M&&t<T)return D.format(o,t,r,_)}else if(i=="yesterday"){s=F(r);u=c(r);f=g(r);var E=_?new Date(Date.UTC(s,u,f-1,0,0,0,0)):new Date(s,u,f-1,0,0,0,0);var A=_?new Date(Date.UTC(s,u,f,0,0,0,0)):new Date(s,u,f,0,0,0,0);if(t>=E&&t<A)return D.format(o,t,r,_)}else if(i=="tommorow"||i=="tomorrow"){s=F(r);u=c(r);f=g(r);var l=_?new Date(Date.UTC(s,u,f+1,0,0,0,0)):new Date(s,u,f+1,0,0,0,0);var m=_?new Date(Date.UTC(s,u,f+2,0,0,0,0)):new Date(s,u,f+2,0,0,0,0);if(t>=l&&t<m)return D.format(o,t,r,_)}else if(i=="-"){if(n<0)return D.format(o,t,r,_)}}return e.length>0?D.format(e[e.length-1][1],t,r,_):""}function F(e){return o?e.getUTCFullYear():e.getFullYear()}function g(e){return o?e.getUTCDate():e.getDate()}function c(e){return o?e.getUTCMonth():e.getMonth()}function T(e){return o?e.getUTCHours():e.getHours()}function E(e){return o?e.getUTCMinutes():e.getMinutes()}function A(e){return o?e.getUTCSeconds():e.getSeconds()}function l(e){return o?e.getUTCMilliseconds():e.getMilliseconds()}function m(e){return o?e.getUTCDay():e.getDay()}function R(e,t){return o?e.setUTCDate(t):e.setDate(t)}function H(e,t,r){return o?e.setUTCMonth(t,r):e.setMonth(t,r)}function d(e,t){var r=e<100?Math.abs(e):Math.abs(e%100);var _=r%10;var n="";if(r==0)n=D._getMessage(t["0"]);else if(r==1)n=D._getMessage(t["1"]);else if(r>=10&&r<=20)n=D._getMessage(t["10_20"]);else if(_==1)n=D._getMessage(t["MOD_1"]);else if(2<=_&&_<=4)n=D._getMessage(t["MOD_2_4"]);else n=D._getMessage(t["MOD_OTHER"]);return n.replace(/#VALUE#/g,e)}function S(e,t){if(s[e])return s[e]();else return t}function I(e){return e>=0?Math.floor(e):Math.ceil(e)}},convertBitrixFormat:function(e){if(!r.isNotEmptyString(e))return"";return e.replace("YYYY","Y").replace("MMMM","F").replace("MM","m").replace("M","M").replace("DD","d").replace("G","g").replace(/GG/i,"G").replace("H","h").replace(/HH/i,"H").replace("MI","i").replace("SS","s").replace("TT","A").replace("T","a")},convertToUTC:function(e){if(!r.isDate(e))return null;return new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()))},getNewDate:function(e){return new Date(this.getBrowserTimestamp(e))},getBrowserTimestamp:function(e){e=parseInt(e,10);var t=new Date(e*1e3).getTimezoneOffset()*60;return(parseInt(e,10)+parseInt(this._getMessage("SERVER_TZ_OFFSET"))+t)*1e3},getServerTimestamp:function(e){e=parseInt(e,10);var t=new Date(e).getTimezoneOffset()*60;return Math.round(e/1e3-(parseInt(this._getMessage("SERVER_TZ_OFFSET"),10)+parseInt(t,10)))},formatLastActivityDate:function(e,t,r){var _=this.isAmPmMode(true);var n=_===this.AM_PM_MODE.LOWER?"g:i a":_===this.AM_PM_MODE.UPPER?"g:i A":"H:i";var D=[["tomorrow","#01#"+n],["now","#02#"],["todayFuture","#03#"+n],["yesterday","#04#"+n],["-",this.convertBitrixFormat(this._getMessage("FORMAT_DATETIME")).replace(/:s/g,"")],["s60","sago"],["i60","iago"],["H5","Hago"],["H24","#03#"+n],["d31","dago"],["m12>1","mago"],["m12>0","dago"],["","#05#"]];var a=this.format(D,e,t,r);if((match=/^#(\d+)#(.*)/.exec(a))!=null){switch(match[1]){case"01":a=this._getMessage("FD_LAST_SEEN_TOMORROW").replace("#TIME#",match[2]);break;case"02":a=this._getMessage("FD_LAST_SEEN_NOW");break;case"03":a=this._getMessage("FD_LAST_SEEN_TODAY").replace("#TIME#",match[2]);break;case"04":a=this._getMessage("FD_LAST_SEEN_YESTERDAY").replace("#TIME#",match[2]);break;case"05":a=this._getMessage("FD_LAST_SEEN_MORE_YEAR");break;default:a=match[2];break}}return a},isAmPmMode:function(e){if(e===true){return this._getMessage("AMPM_MODE")}return this._getMessage("AMPM_MODE")!==false},_getMessage:function(e){return t.message(e)}};var r={isDate:function(e){return e&&Object.prototype.toString.call(e)=="[object Date]"},isNumber:function(e){return e===0?true:e?typeof e=="number"||e instanceof Number:false},isArray:function(e){return e&&Object.prototype.toString.call(e)=="[object Array]"},isString:function(e){return e===""?true:e?typeof e=="string"||e instanceof String:false},isNotEmptyString:function(e){return this.isString(e)?e.length>0:false},strPadLeft:function(e,t,r){var _=e.length,n=r.length;if(_>=t)return e;for(;_<t;_+=n)e=r+e;return e}}})(window);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:53:"/bitrix/js/main/core/core_date.min.js?155558770124926";s:6:"source";s:33:"/bitrix/js/main/core/core_date.js";s:3:"min";s:37:"/bitrix/js/main/core/core_date.min.js";s:3:"map";s:37:"/bitrix/js/main/core/core_date.map.js";}"*/
(function(){if(BX.date)return;BX.date=BX.Main.Date;var e=null;BX.calendar=function(e){return BX.calendar.get().Show(e)};BX.calendar.get=function(){if(!e)e=new BX.JCCalendar;return e};BX.calendar.InsertDaysBack=function(e,t){if(t!=""){var a=new Date;if(t>0){a.setTime(a.valueOf()-t*864e5)}e.value=BX.date.format(BX.date.convertBitrixFormat(BX.message("FORMAT_DATE")),a,null)}else{e.value=""}};BX.calendar.ValueToString=function(e,t,a){return BX.date.format(BX.date.convertBitrixFormat(BX.message(t?"FORMAT_DATETIME":"FORMAT_DATE")),e,null,!!a)};BX.calendar.ValueToStringFormat=function(e,t,a){return BX.date.format(BX.date.convertBitrixFormat(t),e,null,!!a)};BX.CalendarPeriod={Init:function(e,t,a){if((e.value!=""||t.value!="")&&a.value=="")a.value="interval";a.onchange()},ChangeDirectOpts:function(e,t){var a=BX.findChild(t,{className:"adm-select adm-calendar-direction"},true);if(e=="week"){a.options[0].text=BX.message("JSADM_CALEND_PREV_WEEK");a.options[1].text=BX.message("JSADM_CALEND_CURR_WEEK");a.options[2].text=BX.message("JSADM_CALEND_NEXT_WEEK")}else{a.options[0].text=BX.message("JSADM_CALEND_PREV");a.options[1].text=BX.message("JSADM_CALEND_CURR");a.options[2].text=BX.message("JSADM_CALEND_NEXT")}},SaveAndClearInput:function(e){if(!window.SavedPeriodValues)window.SavedPeriodValues={};window.SavedPeriodValues[e.id]=e.value;e.value=""},RestoreInput:function(e){if(!window.SavedPeriodValues||!window.SavedPeriodValues[e.id])return;e.value=window.SavedPeriodValues[e.id];delete window.SavedPeriodValues[e.id]},OnChangeP:function(e){var t=e.parentNode.parentNode;var a,s,i,n;a=s=i=n=false;var r=BX.findChild(t,{className:"adm-input-wrap adm-calendar-inp adm-calendar-first"});var o=BX.findChild(t,{className:"adm-input-wrap adm-calendar-second"});var l=BX.findChild(t,{className:"adm-select-wrap adm-calendar-direction"});var p=BX.findChild(t,{className:"adm-calendar-separate"});var c=BX.findChild(t,{className:"adm-input adm-calendar-from"},true);var h=BX.findChild(t,{className:"adm-input adm-calendar-to"},true);switch(e.value){case"day":case"week":case"month":case"quarter":case"year":i=true;BX.CalendarPeriod.OnChangeD(l.children[0]);break;case"before":s=true;break;case"after":a=true;break;case"exact":a=true;break;case"interval":a=s=n=true;BX.CalendarPeriod.RestoreInput(c);BX.CalendarPeriod.RestoreInput(h);break;case"":BX.CalendarPeriod.SaveAndClearInput(c);BX.CalendarPeriod.SaveAndClearInput(h);break;default:break}BX.CalendarPeriod.ChangeDirectOpts(e.value,t);r.style.display=a?"inline-block":"none";o.style.display=s?"inline-block":"none";l.style.display=i?"inline-block":"none";p.style.display=n?"inline-block":"none"},OnChangeD:function(e){var t=e.parentNode.parentNode;var a=BX.findChild(t,{className:"adm-input adm-calendar-from"},true);var s=BX.findChild(t,{className:"adm-input adm-calendar-to"},true);var i=BX.findChild(t,{className:"adm-select adm-calendar-period"},true);var n=0;switch(e.value){case"previous":n=-1;break;case"next":n=1;break;case"current":default:break}var r=false;var o=false;var l=new Date;var p=l.getFullYear();var c=l.getMonth();var h=l.getDate();var u=l.getDay();if(u==0)u=7;switch(i.value){case"day":r=new Date(p,c,h+n,0,0,0);o=new Date(p,c,h+n,23,59,59);break;case"week":r=new Date(p,c,h-u+1+n*7,0,0,0);o=new Date(p,c,h+(7-u)+n*7,23,59,59);break;case"month":r=new Date(p,c+n,1,0,0,0);o=new Date(p,c+1+n,0,23,59,59);break;case"quarter":var d=Math.floor(c/3)+n;r=new Date(p,3*d,1,0,0,0);o=new Date(p,3*(d+1),0,23,59,59);break;case"year":r=new Date(p+n,0,1,0,0,0);o=new Date(p+1+n,0,0,23,59,59);break;default:break}var m=window[a.name+"_bTime"]?BX.message("FORMAT_DATETIME"):BX.message("FORMAT_DATE");if(r){a.value=BX.formatDate(r,m);BX.addClass(a,"adm-calendar-inp-setted")}if(o){s.value=BX.formatDate(o,m);BX.addClass(s,"adm-calendar-inp-setted")}}};BX.JCCalendar=function(){this.params={};this.bAmPm=BX.isAmPmMode();this.popup=null;this.popup_month=null;this.popup_year=null;this.month_popup_classname="";this.year_popup_classname="";this.value=null;this.control_id=Math.random();this._layers={};this._current_layer=null;this.DIV=null;this.PARTS={};this.weekStart=0;this.numRows=6;this._create=function(e){this.popup=new BX.PopupWindow("calendar_popup_"+this.control_id,e.node,{closeByEsc:true,autoHide:false,content:this._get_content(),zIndex:3e3,bindOptions:{forceBindPosition:true}});BX.bind(this.popup.popupContainer,"click",this.popup.cancelBubble)};this._auto_hide_disable=function(){BX.unbind(document,"click",BX.proxy(this._auto_hide,this))};this._auto_hide_enable=function(){BX.bind(document,"click",BX.proxy(this._auto_hide,this))};this._auto_hide=function(e){this._auto_hide_disable();this.popup.close()};this._get_content=function(){var e=BX.delegate(function(e){e=e||window.event;this.SetDate(new Date(parseInt(BX.proxy_context.getAttribute("data-date"))),e.type=="dblclick")},this);this.DIV=BX.create("DIV",{props:{className:"bx-calendar"},children:[BX.create("DIV",{props:{className:"bx-calendar-header"},children:[BX.create("A",{attrs:{href:"javascript:void(0)"},props:{className:"bx-calendar-left-arrow"},events:{click:BX.proxy(this._prev,this)}}),BX.create("SPAN",{props:{className:"bx-calendar-header-content"},children:[this.PARTS.MONTH=BX.create("A",{attrs:{href:"javascript:void(0)"},props:{className:"bx-calendar-top-month"},events:{click:BX.proxy(this._menu_month,this)}}),this.PARTS.YEAR=BX.create("A",{attrs:{href:"javascript:void(0)"},props:{className:"bx-calendar-top-year"},events:{click:BX.proxy(this._menu_year,this)}})]}),BX.create("A",{attrs:{href:"javascript:void(0)"},props:{className:"bx-calendar-right-arrow"},events:{click:BX.proxy(this._next,this)}})]}),this.PARTS.WEEK=BX.create("DIV",{props:{className:"bx-calendar-name-day-wrap"}}),this.PARTS.LAYERS=BX.create("DIV",{props:{className:"bx-calendar-cell-block"},events:{click:BX.delegateEvent({className:"bx-calendar-cell"},e),dblclick:BX.delegateEvent({className:"bx-calendar-cell"},e)}}),this.PARTS.TIME=BX.create("DIV",{props:{className:"bx-calendar-set-time-wrap"},events:{click:BX.delegateEvent({attr:"data-action"},BX.delegate(this._time_actions,this))},html:'<a href="javascript:void(0)" data-action="time_show" class="bx-calendar-set-time"><i></i>'+BX.message("CAL_TIME_SET")+'</a><div class="bx-calendar-form-block"><span class="bx-calendar-form-text">'+BX.message("CAL_TIME")+'</span><span class="bx-calendar-form"><input type="text" class="bx-calendar-form-input" maxwidth="2" onkeyup="BX.calendar.get()._check_time()" /><span class="bx-calendar-form-separator"></span><input type="text" class="bx-calendar-form-input" maxwidth="2" onkeyup="BX.calendar.get()._check_time()" />'+(this.bAmPm?'<span class="bx-calendar-AM-PM-block"><span class="bx-calendar-AM-PM-text" data-action="time_ampm"></span><span class="bx-calendar-form-arrow-r"><a href="javascript:void(0)" class="bx-calendar-form-arrow-top" data-action="time_ampm_up"><i></i></a><a href="javascript:void(0)" class="bx-calendar-form-arrow-bottom" data-action="time_ampm_down"><i></i></a></span></span>':"")+'</span><a href="javascript:void(0)" data-action="time_hide" class="bx-calendar-form-close"><i></i></a></div>'}),BX.create("DIV",{props:{className:"bx-calendar-button-block"},events:{click:BX.delegateEvent({attr:"data-action"},BX.delegate(this._button_actions,this))},html:'<a href="javascript:void(0)" class="bx-calendar-button bx-calendar-button-select" data-action="submit"><span class="bx-calendar-button-left"></span><span class="bx-calendar-button-text">'+BX.message("CAL_BUTTON")+'</span><span class="bx-calendar-button-right"></span></a><a href="javascript:void(0)" class="bx-calendar-button bx-calendar-button-cancel" data-action="cancel"><span class="bx-calendar-button-left"></span><span class="bx-calendar-button-text">'+BX.message("JS_CORE_WINDOW_CLOSE")+'</span><span class="bx-calendar-button-right"></span></a>'})]});this.PARTS.TIME_INPUT_H=BX.findChild(this.PARTS.TIME,{tag:"INPUT"},true);this.PARTS.TIME_INPUT_M=this.PARTS.TIME_INPUT_H.nextSibling.nextSibling;if(this.bAmPm)this.PARTS.TIME_AMPM=this.PARTS.TIME_INPUT_M.nextSibling.firstChild;var t=new BX.JCSpinner({input:this.PARTS.TIME_INPUT_H,callback_change:BX.proxy(this._check_time,this),bSaveValue:false}).Show();t.className="bx-calendar-form-arrow-l";this.PARTS.TIME_INPUT_H.parentNode.insertBefore(t,this.PARTS.TIME_INPUT_H);t=new BX.JCSpinner({input:this.PARTS.TIME_INPUT_M,callback_change:BX.proxy(this._check_time,this),bSaveValue:true}).Show();t.className="bx-calendar-form-arrow-r";if(!this.PARTS.TIME_INPUT_M.nextSibling)this.PARTS.TIME_INPUT_M.parentNode.appendChild(t);else this.PARTS.TIME_INPUT_M.parentNode.insertBefore(t,this.PARTS.TIME_INPUT_M.nextSibling);for(var a=0;a<7;a++){this.PARTS.WEEK.appendChild(BX.create("SPAN",{props:{className:"bx-calendar-name-day"},text:BX.message("DOW_"+(a+this.weekStart)%7)}))}return this.DIV};this._time_actions=function(){switch(BX.proxy_context.getAttribute("data-action")){case"time_show":BX.addClass(this.PARTS.TIME,"bx-calendar-set-time-opened");this.popup.adjustPosition();break;case"time_hide":BX.removeClass(this.PARTS.TIME,"bx-calendar-set-time-opened");this.popup.adjustPosition();break;case"time_ampm":this.PARTS.TIME_AMPM.innerHTML=this.PARTS.TIME_AMPM.innerHTML=="AM"?"PM":"AM";break;case"time_ampm_up":this._check_time({bSaveValue:false},null,12);return;break;case"time_ampm_down":this._check_time({bSaveValue:false},null,-12);return;break}this._check_time()};this._button_actions=function(){switch(BX.proxy_context.getAttribute("data-action")){case"submit":this.SaveValue();break;case"cancel":this.Close();break}};this._check_time=function(e,t,a){var s=parseInt(this.PARTS.TIME_INPUT_H.value.substring(0,5),10)||0,i=parseInt(this.PARTS.TIME_INPUT_M.value.substring(0,5),10)||0,n=false;if(!!e&&!e.bSaveValue){this.value.setUTCHours(this.value.getUTCHours()+a)}else if(!isNaN(s)){if(this.bAmPm){if(s!=12&&this.PARTS.TIME_AMPM.innerHTML=="PM"){s+=12}}n=true;this.value.setUTCHours(s%24)}if(!isNaN(i)){n=true;this.value.setUTCMinutes(i%60)}if(n){this.SetValue(this.value)}};this._set_layer=function(){var e=parseInt(this.value.getUTCFullYear()+""+BX.util.str_pad_left(this.value.getUTCMonth()+"",2,"0"));if(!this._layers[e]){this._layers[e]=this._create_layer();this._layers[e].BXLAYERID=e}if(this._current_layer){var t=new Date(this.value.valueOf());t.setUTCHours(0);t.setUTCMinutes(0);var a=BX.findChild(this._layers[e],{tag:"A",className:"bx-calendar-active"},true),s=BX.findChild(this._layers[e],{tag:"A",attr:{"data-date":t.valueOf()+""}},true);if(a){BX.removeClass(a,"bx-calendar-active")}if(s){BX.addClass(s,"bx-calendar-active")}this._replace_layer(this._current_layer,this._layers[e])}else{this.PARTS.LAYERS.appendChild(this._layers[e])}this._current_layer=this._layers[e]};this._replace_layer=function(e,t){if(e!=t){if(!BX.browser.IsIE()||BX.browser.IsDoctype()){var a=e.BXLAYERID>t.BXLAYERID?1:-1;var s=0;var i=-a*e.offsetHeight;e.style.position="relative";e.style.top="0px";e.style.zIndex=5;t.style.position="absolute";t.style.top=i+"px";t.style.zIndex=6;this.PARTS.LAYERS.appendChild(t);var n=15;var r;(r=function(){i+=a*n;s+=a*n;if(a*i<0){e.style.top=s+"px";t.style.top=i+"px";setTimeout(r,10)}else{e.parentNode.removeChild(e);t.style.top="0px";t.style.position="static";t.style.zIndex=0}})()}else{this.PARTS.LAYERS.replaceChild(t,e)}}};this._create_layer=function(){var e=BX.create("DIV",{props:{className:"bx-calendar-layer"}});var t=new Date(this.value);t.setUTCHours(0);t.setUTCMinutes(0);t.setUTCDate(1);if(t.getUTCDay()!=this.weekStart){var a=t.getUTCDay()-this.weekStart;a+=a<0?7:0;t.setUTCDate(t.getUTCDate()-a)}var s=this.value.getUTCMonth(),i=this.value.getUTCDate(),n="";for(var r=0;r<this.numRows;r++){n+='<div class="bx-calendar-range'+(r==this.numRows-1?" bx-calendar-range-noline":"")+'">';for(var o=0;o<7;o++){a=t.getUTCDate();var l=t.getUTCDay();var p="bx-calendar-cell";if(s!=t.getUTCMonth())p+=" bx-calendar-date-hidden";else if(i==a)p+=" bx-calendar-active";if(l==0||l==6)p+=" bx-calendar-weekend";n+='<a href="javascript:void(0)" class="'+p+'" data-date="'+t.valueOf()+'">'+a+"</a>";t.setUTCDate(t.getUTCDate()+1)}n+="</div>"}e.innerHTML=n;return e};this._prev=function(){this.SetMonth(this.value.getUTCMonth()-1)};this._next=function(){this.SetMonth(this.value.getUTCMonth()+1)};this._menu_month_content=function(){var e="",t=this.value.getMonth(),a;for(a=0;a<12;a++){e+='<span class="bx-calendar-month'+(a==t?" bx-calendar-month-active":"")+'" data-bx-month="'+a+'">'+BX.message("MONTH_"+(a+1))+"</span>"}return'<div class="bx-calendar-month-popup"><div class="bx-calendar-month-title" data-bx-month="'+this.value.getUTCMonth()+'">'+BX.message("MONTH_"+(this.value.getUTCMonth()+1))+'</div><div class="bx-calendar-month-content">'+e+"</div></div>"};this._menu_month=function(){if(!this.popup_month){this.popup_month=new BX.PopupWindow("calendar_popup_month_"+this.control_id,this.PARTS.MONTH,{content:this._menu_month_content(),zIndex:3001,closeByEsc:true,autoHide:true,offsetTop:-29,offsetLeft:-1,className:this.month_popup_classname,events:{onPopupShow:BX.delegate(function(){if(this.popup_year){this.popup_year.close()}},this)}});BX.bind(this.popup_month.popupContainer,"click",BX.proxy(this.month_popup_click,this));this.popup_month.BXMONTH=this.value.getUTCMonth()}else if(this.popup_month.BXMONTH!=this.value.getUTCMonth()){this.popup_month.setContent(this._menu_month_content());this.popup_month.BXMONTH=this.value.getUTCMonth()}this.popup_month.show()};this.month_popup_click=function(e){var t=e.target||e.srcElement;if(t&&t.getAttribute&&t.getAttribute("data-bx-month")){this.SetMonth(parseInt(t.getAttribute("data-bx-month")));this.popup_month.close()}};this._menu_year_content=function(){var e='<div class="bx-calendar-year-popup"><div class="bx-calendar-year-title" data-bx-year="'+this.value.getUTCFullYear()+'">'+this.value.getUTCFullYear()+'</div><div class="bx-calendar-year-content" id="bx-calendar-year-content">';for(var t=-3;t<=3;t++){e+='<span class="bx-calendar-year-number'+(t==0?" bx-calendar-year-active":"")+'" data-bx-year="'+(this.value.getUTCFullYear()-t)+'">'+(this.value.getUTCFullYear()-t)+"</span>"}e+='</div><input data-bx-year-input="Y" type="text" class="bx-calendar-year-input" maxlength="4" /></div>';return e};this._menu_year=function(){if(!this.popup_year){this.popup_year=new BX.PopupWindow("calendar_popup_year_"+this.control_id,this.PARTS.YEAR,{content:this._menu_year_content(),zIndex:3001,closeByEsc:true,autoHide:true,offsetTop:-29,offsetLeft:-1,className:this.year_popup_classname,events:{onPopupShow:BX.delegate(function(){if(this.popup_month){this.popup_month.close()}},this)}});BX.bind(this.popup_year.popupContainer,"click",BX.proxy(this.year_popup_click,this));BX.bind(this.popup_year.popupContainer,"keyup",BX.proxy(this.year_popup_keyup,this));this.popup_year.BXYEAR=this.value.getUTCFullYear()}else if(this.popup_year.BXYEAR!=this.value.getUTCFullYear()){this.popup_year.setContent(this._menu_year_content());this.popup_year.BXYEAR=this.value.getUTCFullYear()}this.popup_year.show()};this.year_popup_click=function(e){var t=e.target||e.srcElement;if(t&&t.getAttribute&&t.getAttribute("data-bx-year")){this.SetYear(parseInt(t.getAttribute("data-bx-year")));this.popup_year.close()}};this.year_popup_keyup=function(e){var t=e.target||e.srcElement;if(t&&t.getAttribute&&t.getAttribute("data-bx-year-input")=="Y"){var a=parseInt(t.value);if(a>=1900&&a<=2100){this.SetYear(a);this.popup_year.close()}}};this._check_date=function(e){var t=e;if(BX.type.isString(e)){t=BX.parseDate(e,true)}if(!BX.type.isDate(t)||isNaN(t.valueOf())){t=BX.date.convertToUTC(new Date);if(this.params.bHideTime){t.setUTCHours(0);t.setUTCMinutes(0)}}t.setUTCMilliseconds(0);t.setUTCSeconds(0);t.BXCHECKED=true;return t}};BX.JCCalendar.prototype.Show=function(e){if(!BX.isReady){BX.ready(BX.delegate(function(){this.Show(e)},this));return}e.node=e.node||document.body;if(BX.type.isNotEmptyString(e.node)){var t=BX(e.node);if(!t){t=document.getElementsByName(e.node);if(t&&t.length>0){t=t[0]}}e.node=t}if(!e.node)return;if(!!e.field){if(BX.type.isString(e.field)){t=BX(e.field);if(!!t){e.field=t}else{if(e.form){if(BX.type.isString(e.form)){e.form=document.forms[e.form]}}if(BX.type.isDomNode(e.form)&&!!e.form[e.field]){e.field=e.form[e.field]}else{t=document.getElementsByName(e.field);if(t&&t.length>0){t=t[0];e.field=t}}}if(BX.type.isString(e.field)){e.field=BX(e.field)}}}var a=!this.popup||!this.popup.isShown()||this.params.node!=e.node;this.params=e;this.params.bTime=typeof this.params.bTime=="undefined"?true:!!this.params.bTime;this.params.bHideTime=typeof this.params.bHideTime=="undefined"?true:!!this.params.bHideTime;this.params.bUseSecond=typeof this.params.bUseSecond=="undefined"?true:!!this.params.bUseSecond;this.weekStart=parseInt(this.params.weekStart||this.params.weekStart||BX.message("WEEK_START"));if(isNaN(this.weekStart))this.weekStart=1;if(!this.popup){this._create(this.params)}else{this.popup.setBindElement(this.params.node)}var s=!!this.params.bHideTime;if(this.params.value){this.SetValue(this.params.value);s=this.value.getUTCHours()<=0&&this.value.getUTCMinutes()<=0}else if(this.params.field){this.SetValue(this.params.field.value);s=this.value.getUTCHours()<=0&&this.value.getUTCMinutes()<=0}else if(!!this.params.currentTime){this.SetValue(this.params.currentTime)}else{this.SetValue()}if(!!this.params.bTime)BX.removeClass(this.DIV,"bx-calendar-time-disabled");else BX.addClass(this.DIV,"bx-calendar-time-disabled");if(!!s)BX.removeClass(this.PARTS.TIME,"bx-calendar-set-time-opened");else BX.addClass(this.PARTS.TIME,"bx-calendar-set-time-opened");if(a){this._auto_hide_disable();this.popup.show();setTimeout(BX.proxy(this._auto_hide_enable,this),0)}this.params.bSetFocus=typeof this.params.bSetFocus=="undefined"?true:!!this.params.bSetFocus;if(this.params.bSetFocus){e.node.blur()}else{BX.bind(e.node,"keyup",BX.defer(function(){this.SetValue(e.node.value);if(!!this.params.bTime){if(this.value.getUTCHours()<=0&&this.value.getUTCMinutes()<=0)BX.removeClass(this.PARTS.TIME,"bx-calendar-set-time-opened");else BX.addClass(this.PARTS.TIME,"bx-calendar-set-time-opened")}},this))}return this};BX.JCCalendar.prototype.SetDay=function(e){this.value.setUTCDate(e);return this.SetValue(this.value)};BX.JCCalendar.prototype.SetMonth=function(e){if(this.popup_month)this.popup_month.close();this.value.setUTCMonth(e);if(e<0)e+=12;else if(e>=12)e-=12;while(this.value.getUTCMonth()>e){this.value.setUTCDate(this.value.getUTCDate()-1)}return this.SetValue(this.value)};BX.JCCalendar.prototype.SetYear=function(e){if(this.popup_year)this.popup_year.close();this.value.setUTCFullYear(e);return this.SetValue(this.value)};BX.JCCalendar.prototype.SetDate=function(e,t){e=this._check_date(e);e.setUTCHours(this.value.getUTCHours());e.setUTCMinutes(this.value.getUTCMinutes());e.setUTCSeconds(this.value.getUTCSeconds());if(this.params.bTime&&!t){return this.SetValue(e)}else{this.SetValue(e);this.SaveValue()}};BX.JCCalendar.prototype.SetValue=function(e){this.value=e&&e.BXCHECKED?e:this._check_date(e);this.PARTS.MONTH.innerHTML=BX.message("MONTH_"+(this.value.getUTCMonth()+1));this.PARTS.YEAR.innerHTML=this.value.getUTCFullYear();if(!!this.params.bTime){var t=this.value.getUTCHours();if(this.bAmPm){if(t>=12){this.PARTS.TIME_AMPM.innerHTML="PM";if(t!=12)t-=12}else{this.PARTS.TIME_AMPM.innerHTML="AM";if(t==0)t=12}}this.PARTS.TIME_INPUT_H.value=BX.util.str_pad_left(t.toString(),2,"0");this.PARTS.TIME_INPUT_M.value=BX.util.str_pad_left(this.value.getUTCMinutes().toString(),2,"0")}this._set_layer();return this};BX.JCCalendar.prototype.SaveValue=function(){if(this.popup_month)this.popup_month.close();if(this.popup_year)this.popup_year.close();var e=true;if(!!this.params.callback){var t=this.params.callback.apply(this,[new Date(this.value.valueOf()+this.value.getTimezoneOffset()*6e4)]);if(t===false)e=false}if(e){var a=!!this.params.bTime&&BX.hasClass(this.PARTS.TIME,"bx-calendar-set-time-opened");if(this.params.field){var s=BX.message(a?"FORMAT_DATETIME":"FORMAT_DATE");if(a&&!this.params.bUseSecond){s=s.replace(":SS","")}this.params.field.value=BX.calendar.ValueToStringFormat(this.value,s,true);BX.fireEvent(this.params.field,"change")}this.popup.close();if(!!this.params.callback_after){this.params.callback_after.apply(this,[new Date(this.value.valueOf()+this.value.getTimezoneOffset()*6e4),a])}}return this};BX.JCCalendar.prototype.Close=function(){if(!!this.popup)this.popup.close();return this};BX.JCSpinner=function(e){e=e||{};this.params={input:e.input||null,delta:e.delta||1,timeout_start:e.timeout_start||1e3,timeout_cont:e.timeout_cont||150,callback_start:e.callback_start||null,callback_change:e.callback_change||null,callback_finish:e.callback_finish||null,bSaveValue:typeof e.bSaveValue=="undefined"?!!e.input:!!e.bSaveValue};this.mousedown=false;this.direction=1};BX.JCSpinner.prototype.Show=function(){this.node=BX.create("span",{events:{mousedown:BX.delegateEvent({attr:"data-dir"},BX.delegate(this.Start,this))},html:'<a href="javascript:void(0)" class="bx-calendar-form-arrow bx-calendar-form-arrow-top" data-dir="1"><i></i></a><a href="javascript:void(0)" class="bx-calendar-form-arrow bx-calendar-form-arrow-bottom" data-dir="-1"><i></i></a>'});return this.node};BX.JCSpinner.prototype.Start=function(){this.mousedown=true;this.direction=BX.proxy_context.getAttribute("data-dir")>0?1:-1;BX.bind(document,"mouseup",BX.proxy(this.MouseUp,this));this.ChangeValue(true)};BX.JCSpinner.prototype.ChangeValue=function(e){if(!this.mousedown)return;if(this.params.input){var t=parseInt(this.params.input.value,10)+this.params.delta*this.direction;if(this.params.bSaveValue)this.params.input.value=t;if(!!e&&this.params.callback_start)this.params.callback_start(this.params,t,this.direction);if(this.params.callback_change)this.params.callback_change(this.params,t,this.direction);setTimeout(BX.proxy(this.ChangeValue,this),!!e?this.params.timeout_start:this.params.timeout_cont)}};BX.JCSpinner.prototype.MouseUp=function(){this.mousedown=false;BX.unbind(document,"mouseup",BX.proxy(this.MouseUp,this));if(this.params.callback_finish)this.params.callback_finish(this.params,this.params.input.value)};window.jsCalendar={Show:function(e,t,a,s,i,n,r,o){return BX.calendar({node:e,field:t,form:r,bTime:!!i,currentTime:n,bHideTimebar:!!o})},ValueToString:BX.calendar.ValueToString};BX.CClockSelector=function(e){this.params=e;this.params.popup_buttons=this.params.popup_buttons||[new BX.PopupWindowButton({text:BX.message("CAL_BUTTON"),className:"popup-window-button-create",events:{click:BX.proxy(this.setValue,this)}})];this.isReady=false;this.WND=new BX.PopupWindow(this.params.popup_id||"clock_selector_popup",this.params.node,this.params.popup_config||{titleBar:BX.message("CAL_TIME"),offsetLeft:-45,offsetTop:-135,autoHide:true,closeIcon:true,closeByEsc:true,zIndex:this.params.zIndex});this.SHOW=false;BX.addCustomEvent(this.WND,"onPopupClose",BX.delegate(this.onPopupClose,this));this.obClocks={};this.CLOCK_ID=this.params.clock_id||"clock_selector"};BX.CClockSelector.prototype.Show=function(){if(!this.isReady){BX.addCustomEvent("onClockRegister",BX.proxy(this.onClockRegister,this));return BX.ajax.get("/bitrix/tools/clock_selector.php",{start_time:this.params.start_time,clock_id:this.CLOCK_ID,sessid:BX.bitrix_sessid()},BX.delegate(this.Ready,this))}this.WND.setButtons(this.params.popup_buttons);this.WND.show();this.SHOW=true;if(window["bxClock_"+this.obClocks[this.CLOCK_ID]]){setTimeout("window['bxClock_"+this.obClocks[this.CLOCK_ID]+"'].CalculateCoordinates()",40)}return true};BX.CClockSelector.prototype.onClockRegister=function(e){if(e[this.CLOCK_ID]){this.obClocks[this.CLOCK_ID]=e[this.CLOCK_ID];BX.removeCustomEvent("onClockRegister",BX.proxy(this.onClockRegister,this))}};BX.CClockSelector.prototype.Ready=function(e){this.content=this.CreateContent(e);this.WND.setContent(this.content);this.isReady=true;setTimeout(BX.proxy(this.Show,this),30)};BX.CClockSelector.prototype.CreateContent=function(e){return BX.create("DIV",{events:{click:BX.PreventDefault},html:'<div class="bx-tm-popup-clock">'+e+"</div>"})};BX.CClockSelector.prototype.setValue=function(e){if(this.params.callback){var t=BX.findChild(this.content,{tagName:"INPUT"},true);this.params.callback.apply(this.params.node,[t.value])}return BX.PreventDefault(e)};BX.CClockSelector.prototype.closeWnd=function(e){this.WND.close();return e||window.event?BX.PreventDefault(e):true};BX.CClockSelector.prototype.setNode=function(e){this.WND.setBindElement(e)};BX.CClockSelector.prototype.setTime=function(e){this.params.start_time=e;if(window["bxClock_"+this.obClocks[this.CLOCK_ID]]){window["bxClock_"+this.obClocks[this.CLOCK_ID]].SetTime(parseInt(e/3600),parseInt(e%3600/60))}};BX.CClockSelector.prototype.setCallback=function(e){this.params.callback=e};BX.CClockSelector.prototype.onPopupClose=function(){this.SHOW=false}})();
/* End */
;
; /* Start:"a:4:{s:4:"full";s:44:"/bitrix/js/main/utils.min.js?149459066119858";s:6:"source";s:24:"/bitrix/js/main/utils.js";s:3:"min";s:28:"/bitrix/js/main/utils.min.js";s:3:"map";s:28:"/bitrix/js/main/utils.map.js";}"*/
var phpVars;if(!phpVars){phpVars={ADMIN_THEME_ID:".default",LANGUAGE_ID:"en",FORMAT_DATE:"DD.MM.YYYY",FORMAT_DATETIME:"DD.MM.YYYY HH:MI:SS",opt_context_ctrl:false,cookiePrefix:"BITRIX_SM",titlePrefix:"",bitrix_sessid:"",messHideMenu:"",messShowMenu:"",messHideButtons:"",messShowButtons:"",messFilterInactive:"",messFilterActive:"",messFilterLess:"",messLoading:"Loading...",messMenuLoading:"",messMenuLoadingTitle:"",messNoData:"",messExpandTabs:"",messCollapseTabs:"",messPanelFixOn:"",messPanelFixOff:"",messPanelCollapse:"",messPanelExpand:""}}var jsUtils={arEvents:Array(),addEvent:function(e,t,n,i){if(e.attachEvent)e.attachEvent("on"+t,n);else if(e.addEventListener)e.addEventListener(t,n,false);else e["on"+t]=n;this.arEvents[this.arEvents.length]={element:e,event:t,fn:n}},removeEvent:function(e,t,n){if(e.detachEvent)e.detachEvent("on"+t,n);else if(e.removeEventListener)e.removeEventListener(t,n,false);else e["on"+t]=null},removeAllEvents:function(e){var t;for(t=0;t<this.arEvents.length;t++){if(this.arEvents[t]&&(e==false||e==this.arEvents[t].element)){jsUtils.removeEvent(this.arEvents[t].element,this.arEvents[t].event,this.arEvents[t].fn);this.arEvents[t]=null}}if(e==false)this.arEvents.length=0},IsDoctype:function(){if(document.compatMode)return document.compatMode=="CSS1Compat";if(document.documentElement&&document.documentElement.clientHeight)return true;return false},GetRealPos:function(e){if(window.BX)return BX.pos(e);if(!e||!e.offsetParent)return false;var t=Array();t["left"]=e.offsetLeft;t["top"]=e.offsetTop;var n=e.offsetParent;while(n&&n.tagName!="BODY"){t["left"]+=n.offsetLeft;t["top"]+=n.offsetTop;n=n.offsetParent}t["right"]=t["left"]+e.offsetWidth;t["bottom"]=t["top"]+e.offsetHeight;return t},FindChildObject:function(e,t,n,i){if(!e)return null;var o=t.toUpperCase();var s=n?n.toLowerCase():null;var r=e.childNodes.length;for(var l=0;l<r;l++){var a=e.childNodes[l];if(a.tagName&&a.tagName.toUpperCase()==o)if(!n||a.className.toLowerCase()==s)return a;if(i==true){var d;if(d=jsUtils.FindChildObject(a,t,n,true))return d}}return null},FindParentObject:function(e,t,n){if(!e)return null;var i=e;var o=t.toUpperCase();var s=n?n.toLowerCase():null;while(i.parentNode){var r=i.parentNode;if(r.tagName&&r.tagName.toUpperCase()==o)if(!n||r.className.toLowerCase()==s)return r;i=r}return null},FindNextSibling:function(e,t){if(!e)return null;var n=e;var i=t.toUpperCase();while(n.nextSibling){var o=n.nextSibling;if(o.tagName&&o.tagName.toUpperCase()==i)return o;n=o}return null},FindPreviousSibling:function(e,t){if(!e)return null;var n=e;var i=t.toUpperCase();while(n.previousSibling){var o=n.previousSibling;if(o.tagName&&o.tagName.toUpperCase()==i)return o;n=o}return null},bOpera:navigator.userAgent.toLowerCase().indexOf("opera")!=-1,bIsIE:document.attachEvent&&navigator.userAgent.toLowerCase().indexOf("opera")==-1,IsIE:function(){return this.bIsIE},IsOpera:function(){return this.bOpera},IsSafari:function(){var e=navigator.userAgent.toLowerCase();return/webkit/.test(e)},IsEditor:function(){var e=navigator.userAgent.toLowerCase();var t=(e.match(/.+(msie)[\/: ]([\d.]+)/)||[])[2];var n=/webkit/.test(e);if(this.IsOpera()||document.all&&!document.compatMode&&t<6||n)return false;return true},ToggleDiv:function(e){var t=document.getElementById(e).style;if(t.display!="none")t.display="none";else t.display="block";return t.display!="none"},urlencode:function(e){return escape(e).replace(new RegExp("\\+","g"),"%2B")},OpenWindow:function(e,t,n){var i=screen.width,o=screen.height;if(this.IsOpera()){i=document.body.offsetWidth;o=document.body.offsetHeight}window.open(e,"","status=no,scrollbars=yes,resizable=yes,width="+t+",height="+n+",top="+Math.floor((o-n)/2-14)+",left="+Math.floor((i-t)/2-5))},SetPageTitle:function(e){document.title=phpVars.titlePrefix+e;var t=document.getElementsByTagName("H1");if(t)t[0].innerHTML=e},LoadPageToDiv:function(e,t){var n=document.getElementById(t);if(!n)return;CHttpRequest.Action=function(e){CloseWaitWindow();document.getElementById(t).innerHTML=e};ShowWaitWindow();CHttpRequest.Send(e)},trim:function(e){if(typeof e=="string"||typeof e=="object"&&e.constructor==String){var t,n;n=/^[\s\r\n]+/g;t=e.replace(n,"");n=/[\s\r\n]+$/g;t=t.replace(n,"");return t}else return e},Redirect:function(e,t){var n=null,i=false;if(e&&e.length>0)n=e[0];if(!n)n=window.event;if(n)i=n.shiftKey;if(i)window.open(t);else{window.location.href=t}},False:function(){return false},AlignToPos:function(e,t,n){var i=e["left"],o=e["bottom"];var s=jsUtils.GetWindowScrollPos();var r=jsUtils.GetWindowInnerSize();if(r.innerWidth+s.scrollLeft-(e["left"]+t)<0){if(e["right"]-t>=0)i=e["right"]-t;else i=s.scrollLeft}if(r.innerHeight+s.scrollTop-(e["bottom"]+n)<0){if(e["top"]-n>=0)o=e["top"]-n;else o=s.scrollTop}return{left:i,top:o}},EvalGlobal:function(e){try{if(window.execScript)window.execScript(e,"javascript");else if(jsUtils.IsSafari())window.setTimeout(e,0);else window.eval(e)}catch(t){}},GetStyleValue:function(e,t){var n;if(e.currentStyle)n=e.currentStyle[t];else if(window.getComputedStyle)n=document.defaultView.getComputedStyle(e,null).getPropertyValue(t);if(!n)n="";return n},GetWindowInnerSize:function(e){var t,n;if(!e)e=document;if(self.innerHeight){t=self.innerWidth;n=self.innerHeight}else if(e.documentElement&&(e.documentElement.clientHeight||e.documentElement.clientWidth)){t=e.documentElement.clientWidth;n=e.documentElement.clientHeight}else if(e.body){t=e.body.clientWidth;n=e.body.clientHeight}return{innerWidth:t,innerHeight:n}},GetWindowScrollPos:function(e){var t,n;if(!e)e=document;if(self.pageYOffset){t=self.pageXOffset;n=self.pageYOffset}else if(e.documentElement&&(e.documentElement.scrollTop||e.documentElement.scrollLeft)){t=document.documentElement.scrollLeft;n=document.documentElement.scrollTop}else if(e.body){t=e.body.scrollLeft;n=e.body.scrollTop}return{scrollLeft:t,scrollTop:n}},GetWindowScrollSize:function(e){var t,n;if(!e)e=document;if(e.compatMode&&e.compatMode=="CSS1Compat"){t=e.documentElement.scrollWidth;n=e.documentElement.scrollHeight}else{if(e.body.scrollHeight>e.body.offsetHeight)n=e.body.scrollHeight;else n=e.body.offsetHeight;if(e.body.scrollWidth>e.body.offsetWidth||e.compatMode&&e.compatMode=="BackCompat"||e.documentElement&&!e.documentElement.clientWidth)t=e.body.scrollWidth;else t=e.body.offsetWidth}return{scrollWidth:t,scrollHeight:n}},GetWindowSize:function(){var e=jsUtils.GetWindowInnerSize();var t=jsUtils.GetWindowScrollPos();var n=jsUtils.GetWindowScrollSize();return{innerWidth:e.innerWidth,innerHeight:e.innerHeight,scrollLeft:t.scrollLeft,scrollTop:t.scrollTop,scrollWidth:n.scrollWidth,scrollHeight:n.scrollHeight}},arCustomEvents:{},addCustomEvent:function(e,t,n,i){if(!this.arCustomEvents[e])this.arCustomEvents[e]=[];if(!n)n=[];if(!i)i=false;this.arCustomEvents[e].push({handler:t,arParams:n,obj:i})},removeCustomEvent:function(e,t){if(!this.arCustomEvents[e])return;var n=this.arCustomEvents[e].length;if(n==1){delete this.arCustomEvents[e];return}for(var i=0;i<n;i++){if(!this.arCustomEvents[e][i])continue;if(this.arCustomEvents[e][i].handler==t){delete this.arCustomEvents[e][i];return}}},onCustomEvent:function(e,t){if(!this.arCustomEvents[e])return;if(!t)t=[];var n;for(var i=0,o=this.arCustomEvents[e].length;i<o;i++){n=this.arCustomEvents[e][i];if(!n||!n.handler)continue;if(n.obj)n.handler.call(n.obj,n.arParams,t);else n.handler(n.arParams,t)}},loadJSFile:function(e,t,n){if(!n)n=document;if(typeof e=="string")e=[e];var i=function(){if(!t)return;if(typeof t=="function")return t();if(typeof t!="object"||!t.func)return;var e=t.params||{};if(t.obj)t.func.apply(t.obj,e);else t.func(e)};var o=function(t){if(t>=e.length)return i();var s=n.body.appendChild(n.createElement("script"));s.src=e[t];var r=false;s.onload=s.onreadystatechange=function(){if(!r&&(!s.readyState||s.readyState=="loaded"||s.readyState=="complete")){r=true;setTimeout(function(){o(++t)},50)}}};o(0)},loadCSSFile:function(e,t,n){if(typeof e=="string"){var i=true;e=[e]}var o,s=e.length,r=[];if(s==0)return;if(!t)t=document;if(!n)n=window;if(!n.bxhead){var l=t.getElementsByTagName("HEAD");n.bxhead=l[0]}if(!n.bxhead)return;for(o=0;o<s;o++){var a=document.createElement("LINK");a.href=e[o];a.rel="stylesheet";a.type="text/css";n.bxhead.appendChild(a);r.push(a)}if(i)return a;return r},appendBXHint:function(e,t){if(!e||!e.parentNode||!t)return;var n=new BXHint(t);e.parentNode.insertBefore(n.oIcon,e);e.parentNode.removeChild(e);n.oIcon.style.marginLeft="5px"},PreventDefault:function(e){if(!e)e=window.event;if(e.stopPropagation){e.preventDefault();e.stopPropagation()}else{e.cancelBubble=true;e.returnValue=false}return false},CreateElement:function(e,t,n,i){if(!i)i=document;var o=i.createElement(e),s;if(t){for(s in t){if(s=="className"||s=="class"){o.setAttribute("class",t[s]);if(jsUtils.IsIE())o.setAttribute("className",t[s]);continue}if(t[s]!=undefined&&t[s]!=null)o.setAttribute(s,t[s])}}if(n){for(s in n)o.style[s]=n[s]}return o},in_array:function(e,t){for(var n=0;n<t.length;n++){if(t[n]==e)return true}return false},htmlspecialchars:function(e){if(!e.replace)return e;return e.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}};function JCFloatDiv(){var e=this;this.floatDiv=null;this.x=this.y=0;this.Create=function(e){var t=document.body.appendChild(document.createElement("DIV"));t.id=e.id;t.style.position="absolute";t.style.left="-10000px";t.style.top="-10000px";if(e.className)t.className=e.className;if(e.zIndex)t.style.zIndex=e.zIndex;if(e.width)t.style.width=e.width+"px";if(e.height)t.style.height=e.height+"px";return t};this.Show=function(e,t,n,i,o,s){if(s!==false)s=true;var r=parseInt(e.style.zIndex);if(r<=0||isNaN(r))r=100;e.style.zIndex=r;if(t<0)t=0;if(n<0)n=0;e.style.left=parseInt(t)+"px";e.style.top=parseInt(n)+"px";if(jsUtils.IsIE()&&s===true){var l=document.getElementById(e.id+"_frame");if(!l){l=document.createElement("IFRAME");l.src="javascript:''";l.id=e.id+"_frame";l.style.position="absolute";l.style.borderWidth="0px";l.style.zIndex=r-1;document.body.appendChild(l)}l.style.width=e.offsetWidth+"px";l.style.height=e.offsetHeight+"px";l.style.left=e.style.left;l.style.top=e.style.top;l.style.visibility="visible"}e.restrictDrag=o||false;if(isNaN(i))i=5;if(i>0){var a=document.getElementById(e.id+"_shadow");if(!a){if(jsUtils.IsIE()){a=document.createElement("DIV");a.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='/bitrix/themes/"+phpVars.ADMIN_THEME_ID+"/images/shadow.png',sizingMethod='scale')"}else{a=document.createElement("IMG");a.src="/bitrix/themes/"+phpVars.ADMIN_THEME_ID+"/images/shadow.png"}a.id=e.id+"_shadow";a.style.position="absolute";a.style.zIndex=r-2;a.style.left="-1000px";a.style.top="-1000px";a.style.lineHeight="normal";a.className="bx-js-float-shadow";document.body.appendChild(a)}a.style.width=e.offsetWidth+"px";a.style.height=e.offsetHeight+"px";a.style.left=parseInt(e.style.left)+i+"px";a.style.top=parseInt(e.style.top)+i+"px";a.style.visibility="visible"}e.dxShadow=i};this.Close=function(e){if(!e)return;var t=document.getElementById(e.id+"_shadow");if(t)t.style.visibility="hidden";var n=document.getElementById(e.id+"_frame");if(n)n.style.visibility="hidden"};this.Move=function(e,t,n){if(!e)return;var i=e.dxShadow;var o=parseInt(e.style.left)+t;var s=parseInt(e.style.top)+n;if(e.restrictDrag){if(o<0)o=0;if(document.compatMode&&document.compatMode=="CSS1Compat")windowWidth=document.documentElement.scrollWidth;else{if(document.body.scrollWidth>document.body.offsetWidth||document.compatMode&&document.compatMode=="BackCompat"||document.documentElement&&!document.documentElement.clientWidth)windowWidth=document.body.scrollWidth;else windowWidth=document.body.offsetWidth}var r=e.offsetWidth;if(o>windowWidth-r-i)o=windowWidth-r-i;if(s<0)s=0}e.style.left=o+"px";e.style.top=s+"px";this.AdjustShadow(e)};this.HideShadow=function(e){var t=document.getElementById(e.id+"_shadow");t.style.visibility="hidden"};this.UnhideShadow=function(e){var t=document.getElementById(e.id+"_shadow");t.style.visibility="visible"};this.AdjustShadow=function(e){var t=document.getElementById(e.id+"_shadow");if(t&&t.style.visibility!="hidden"){var n=e.dxShadow;t.style.width=e.offsetWidth+"px";t.style.height=e.offsetHeight+"px";t.style.left=parseInt(e.style.left)+n+"px";t.style.top=parseInt(e.style.top)+n+"px"}var i=document.getElementById(e.id+"_frame");if(i){i.style.width=e.offsetWidth+"px";i.style.height=e.offsetHeight+"px";i.style.left=e.style.left;i.style.top=e.style.top}};this.StartDrag=function(t,n){if(!t)t=window.event;this.x=t.clientX+document.body.scrollLeft;this.y=t.clientY+document.body.scrollTop;this.floatDiv=n;jsUtils.addEvent(document,"mousemove",this.MoveDrag);document.onmouseup=this.StopDrag;if(document.body.setCapture)document.body.setCapture();document.onmousedown=jsUtils.False;var i=document.body;i.ondrag=jsUtils.False;i.onselectstart=jsUtils.False;i.style.MozUserSelect=e.floatDiv.style.MozUserSelect="none";i.style.cursor="move"};this.StopDrag=function(t){if(document.body.releaseCapture)document.body.releaseCapture();jsUtils.removeEvent(document,"mousemove",e.MoveDrag);document.onmouseup=null;this.floatDiv=null;document.onmousedown=null;var n=document.body;n.ondrag=null;n.onselectstart=null;n.style.MozUserSelect=e.floatDiv.style.MozUserSelect="";n.style.cursor=""};this.MoveDrag=function(t){var n=t.clientX+document.body.scrollLeft;var i=t.clientY+document.body.scrollTop;if(e.x==n&&e.y==i)return;e.Move(e.floatDiv,n-e.x,i-e.y);e.x=n;e.y=i}}var jsFloatDiv=new JCFloatDiv;var BXHint=function(e,t,n){this.oDivOver=false;this.timeOutID=null;this.oIcon=null;this.freeze=false;this.x=0;this.y=0;this.time=700;if(!e)e="";this.Create(e,t,n)};BXHint.prototype.Create=function(e,t,n){var i=this,o=0,s=0,r=null,l="icon";this.bWidth=true;if(n){if(n.width===false)this.bWidth=false;else if(n.width)o=n.width;if(n.height)s=n.height;if(n.className)r=n.className;if(n.type&&(n.type=="link"||n.type=="icon"))l=n.type;if(n.time>0)this.time=n.time}if(t)l="element";if(l=="icon"){var t=document.createElement("IMG");t.src=n&&n.iconSrc?n.iconSrc:"/bitrix/themes/"+phpVars.ADMIN_THEME_ID+"/public/popup/hint.gif";t.ondrag=jsUtils.False}else if(l=="link"){var t=document.createElement("A");t.href="";t.onclick=function(e){return false};t.innerHTML="[?]"}this.element=t;if(l=="element"){if(n&&n.show_on_click){jsUtils.addEvent(t,"click",function(t){if(!t)t=window.event;i.GetMouseXY(t);i.timeOutID=setTimeout(function(){i.Show(e,o,s,r)},10)})}else{jsUtils.addEvent(t,"mouseover",function(t){if(!t)t=window.event;i.GetMouseXY(t);i.timeOutID=setTimeout(function(){i.Show(e,o,s,r)},750)})}jsUtils.addEvent(t,"mouseout",function(e){if(i.timeOutID)clearTimeout(i.timeOutID);i.SmartHide(i)})}else{this.oIcon=t;t.onmouseover=function(t){if(!t)t=window.event;i.GetMouseXY(t);i.Show(e,o,s,r)};t.onmouseout=function(){i.SmartHide(i)}}};BXHint.prototype.IsFrozen=function(){return this.freeze};BXHint.prototype.Freeze=function(){this.freeze=true;this.Hide()};BXHint.prototype.UnFreeze=function(){this.freeze=false};BXHint.prototype.GetMouseXY=function(e){if(e.pageX||e.pageY){this.x=e.pageX;this.y=e.pageY}else if(e.clientX||e.clientY){this.x=e.clientX+(document.documentElement.scrollLeft||document.body.scrollLeft)-document.documentElement.clientLeft;this.y=e.clientY+(document.documentElement.scrollTop||document.body.scrollTop)-document.documentElement.clientTop}};BXHint.prototype.Show=function(e,t,n,i){var o=document.getElementById("__BXHint_div");if(o)this.Hide();if(this.freeze)return;var s=this;var r=document.body.appendChild(document.createElement("DIV"));r.onmouseover=function(){s.oDivOver=true};r.onmouseout=function(){s.oDivOver=false;s.SmartHide(s)};r.id="__BXHint_div";r.className=i?i:"bxhint";r.style.position="absolute";if(t&&this.bWidth)r.style.width=t+"px";if(n)r.style.height=n+"px";r.innerHTML=e;var l=r.offsetWidth;var a=r.offsetHeight;if(this.bWidth){if(!t&&l>200)l=Math.round(Math.sqrt(1.618*l*a));r.style.width=l+"px";a=r.offsetHeight}var d={left:this.x+10,right:this.x+l,top:this.y,bottom:this.y+a};d=this.AlignToPos(d,l,a);r.style.zIndex=2100;jsFloatDiv.Show(r,d.left,d.top,3);r=null};BXHint.prototype.AlignToPos=function(e,t,n){var i=document.body;if(i.clientWidth+i.scrollLeft<e.left+t)e.left=e.left-t>=0?e.left-t:i.scrollLeft;if(i.clientHeight+i.scrollTop-e["bottom"]<0)e.top=e.top-n>=0?e.top-n:i.scrollTop;return e};BXHint.prototype.Hide=function(){var e=document.getElementById("__BXHint_div");if(!e)return;jsFloatDiv.Close(e);e.parentNode.removeChild(e);e=null};BXHint.prototype.SmartHide=function(e){setTimeout(function(){if(!e.oDivOver)e.Hide()},100)};function WaitOnKeyPress(e){if(!e)e=window.event;if(!e)return;if(e.keyCode==27)CloseWaitWindow()}function ShowWaitWindow(){CloseWaitWindow();var e=jsUtils.GetWindowSize();var t=document.body.appendChild(document.createElement("DIV"));t.id="wait_window_div";t.innerHTML=phpVars.messLoading;t.className="waitwindow";t.style.right=5-e.scrollLeft+"px";t.style.top=e.scrollTop+5+"px";if(jsUtils.IsIE()){var n=document.createElement("IFRAME");n.src="javascript:''";n.id="wait_window_frame";n.className="waitwindow";n.style.width=t.offsetWidth+"px";n.style.height=t.offsetHeight+"px";n.style.right=t.style.right;n.style.top=t.style.top;document.body.appendChild(n)}jsUtils.addEvent(document,"keypress",WaitOnKeyPress)}function CloseWaitWindow(){jsUtils.removeEvent(document,"keypress",WaitOnKeyPress);var e=document.getElementById("wait_window_frame");if(e)e.parentNode.removeChild(e);var t=document.getElementById("wait_window_div");if(t)t.parentNode.removeChild(t)}var jsSelectUtils={addNewOption:function(e,t,n,i,o){var s=typeof e=="string"||e instanceof String?document.getElementById(e):e;if(s){var r=s.length;if(o!==false){for(var l=0;l<r;l++)if(s[l].value==t)return}var a=new Option(n,t,false,false);s.options[r]=a}if(i===true)this.sortSelect(e)},deleteOption:function(e,t){var n=typeof e=="string"||e instanceof String?document.getElementById(e):e;if(n){for(var i=0;i<n.length;i++)if(n[i].value==t){n.remove(i);break}}},deleteSelectedOptions:function(e){var t=typeof e=="string"||e instanceof String?document.getElementById(e):e;if(t){var n=0;while(n<t.length)if(t[n].selected){t[n].selected=false;t.remove(n)}else n++}},deleteAllOptions:function(e){if(e){for(var t=e.length-1;t>=0;t--)e.remove(t)}},optionCompare:function(e,t){var n=e.optText.toLowerCase();var i=t.optText.toLowerCase();if(n>i)return 1;if(n<i)return-1;return 0},sortSelect:function(e){var t=typeof e=="string"||e instanceof String?document.getElementById(e):e;if(t){var n=[];var i=t.options.length;for(var o=0;o<i;o++){n[o]={optText:t[o].text,optValue:t[o].value}}n.sort(this.optionCompare);t.length=0;i=n.length;for(var o=0;o<i;o++){var s=new Option(n[o].optText,n[o].optValue,false,false);t[o]=s}}},selectAllOptions:function(e){var t=typeof e=="string"||e instanceof String?document.getElementById(e):e;if(t){var n=t.length;for(var i=0;i<n;i++)t[i].selected=true}},selectOption:function(e,t){var n=typeof e=="string"||e instanceof String?document.getElementById(e):e;if(n){var i=n.length;for(var o=0;o<i;o++)n[o].selected=n[o].value==t}},addSelectedOptions:function(e,t,n,i){if(!e)return;var o=e.length;for(var s=0;s<o;s++)if(e[s].selected)this.addNewOption(t,e[s].value,e[s].text,i,n)},moveOptionsUp:function(e){if(!e)return;var t=e.length;for(var n=0;n<t;n++){if(e[n].selected&&n>0&&e[n-1].selected==false){var i=new Option(e[n].text,e[n].value);var o=new Option(e[n-1].text,e[n-1].value);e[n]=o;e[n].selected=false;e[n-1]=i;e[n-1].selected=true}}},moveOptionsDown:function(e){if(!e)return;var t=e.length;for(var n=t-1;n>=0;n--){if(e[n].selected&&n<t-1&&e[n+1].selected==false){var i=new Option(e[n].text,e[n].value);var o=new Option(e[n+1].text,e[n+1].value);e[n]=o;e[n].selected=false;e[n+1]=i;e[n+1].selected=true}}}};
/* End */
;
//# sourceMappingURL=kernel_main.map.js