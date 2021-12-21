/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{315:function(t,e,o){"use strict";o.d(e,"b",(function(){return map})),o.d(e,"a",(function(){return n}));o(11),o(326);var map=function(t,a,b,e,o){return(t-a)*(o-e)/(b-a)+e},n=function(t,e,o){return t<=e?e:t>=o?o:t}},326:function(t,e,o){var n,r;!function(l,c){"use strict";n=[o(327)],r=function(t){return function(t,e){var o=t.jQuery,n=t.console;function r(a,b){for(var t in b)a[t]=b[t];return a}var l=Array.prototype.slice;function c(t){return Array.isArray(t)?t:"object"==typeof t&&"number"==typeof t.length?l.call(t):[t]}function h(t,e,l){if(!(this instanceof h))return new h(t,e,l);var d=t;"string"==typeof t&&(d=document.querySelectorAll(t)),d?(this.elements=c(d),this.options=r({},this.options),"function"==typeof e?l=e:r(this.options,e),l&&this.on("always",l),this.getImages(),o&&(this.jqDeferred=new o.Deferred),setTimeout(this.check.bind(this))):n.error("Bad element for imagesLoaded "+(d||t))}h.prototype=Object.create(e.prototype),h.prototype.options={},h.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},h.prototype.addElementImages=function(t){"IMG"==t.nodeName&&this.addImage(t),!0===this.options.background&&this.addElementBackgroundImages(t);var e=t.nodeType;if(e&&d[e]){for(var o=t.querySelectorAll("img"),i=0;i<o.length;i++){var img=o[i];this.addImage(img)}if("string"==typeof this.options.background){var n=t.querySelectorAll(this.options.background);for(i=0;i<n.length;i++){var r=n[i];this.addElementBackgroundImages(r)}}}};var d={1:!0,9:!0,11:!0};function m(img){this.img=img}function f(t,element){this.url=t,this.element=element,this.img=new Image}return h.prototype.addElementBackgroundImages=function(t){var style=getComputedStyle(t);if(style)for(var e=/url\((['"])?(.*?)\1\)/gi,o=e.exec(style.backgroundImage);null!==o;){var n=o&&o[2];n&&this.addBackground(n,t),o=e.exec(style.backgroundImage)}},h.prototype.addImage=function(img){var t=new m(img);this.images.push(t)},h.prototype.addBackground=function(t,e){var o=new f(t,e);this.images.push(o)},h.prototype.check=function(){var t=this;function e(image,e,o){setTimeout((function(){t.progress(image,e,o)}))}this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?this.images.forEach((function(t){t.once("progress",e),t.check()})):this.complete()},h.prototype.progress=function(image,t,e){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!image.isLoaded,this.emitEvent("progress",[this,image,t]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,image),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&n&&n.log("progress: "+e,image,t)},h.prototype.complete=function(){var t=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(t,[this]),this.emitEvent("always",[this]),this.jqDeferred){var e=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[e](this)}},m.prototype=Object.create(e.prototype),m.prototype.check=function(){this.getIsImageComplete()?this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.proxyImage.src=this.img.src)},m.prototype.getIsImageComplete=function(){return this.img.complete&&this.img.naturalWidth},m.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.img,e])},m.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},m.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},m.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},m.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},f.prototype=Object.create(m.prototype),f.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url,this.getIsImageComplete()&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},f.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},f.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.element,e])},h.makeJQueryPlugin=function(e){(e=e||t.jQuery)&&((o=e).fn.imagesLoaded=function(t,e){return new h(this,t,e).jqDeferred.promise(o(this))})},h.makeJQueryPlugin(),h}(l,t)}.apply(e,n),void 0===r||(t.exports=r)}("undefined"!=typeof window?window:this)},327:function(t,e,o){var n,r;"undefined"!=typeof window&&window,void 0===(r="function"==typeof(n=function(){"use strict";function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var o=this._events=this._events||{},n=o[t]=o[t]||[];return-1==n.indexOf(e)&&n.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var o=this._onceEvents=this._onceEvents||{};return(o[t]=o[t]||{})[e]=!0,this}},e.off=function(t,e){var o=this._events&&this._events[t];if(o&&o.length){var n=o.indexOf(e);return-1!=n&&o.splice(n,1),this}},e.emitEvent=function(t,e){var o=this._events&&this._events[t];if(o&&o.length){o=o.slice(0),e=e||[];for(var n=this._onceEvents&&this._onceEvents[t],i=0;i<o.length;i++){var r=o[i];n&&n[r]&&(this.off(t,r),delete n[r]),r.apply(this,e)}return this}},e.allOff=function(){delete this._events,delete this._onceEvents},t})?n.call(e,o,e,t):n)||(t.exports=r)},441:function(t,e,o){var content=o(452);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(34).default)("72cc3d1a",content,!0,{sourceMap:!1})},448:function(t,e,o){t.exports=o.p+"img/line.4e31c90.svg"},449:function(t,e,o){t.exports=o.p+"img/about-line-mob.f729c32.svg"},450:function(t,e,o){t.exports=o.p+"img/pulse-button.6ae19ee.svg"},451:function(t,e,o){"use strict";o(441)},452:function(t,e,o){var n=o(33)(!1);n.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@900&display=swap);"]),n.push([t.i,'@keyframes line{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes fillAction{0%{transform:translate(0, 150px)}100%{transform:translate(0, -15px)}}@keyframes fillActionNo{0%{transform:translate(0, 50px)}100%{transform:translate(0, 300px)}}@keyframes waveAction{0%{transform:translate(-150px, 0)}100%{transform:translate(0, 0)}}#banner{position:absolute;z-index:-3;border-radius:50%;width:125px;height:125px;overflow:hidden;backface-visibility:hidden;transform:translate3d(0, 0, 0) scale(0)}#banner.active{position:absolute;z-index:-3;border-radius:50%;width:125px;height:125px;overflow:hidden;backface-visibility:hidden;transform:translate3d(0, 0, 0) scale(var(--scale))}#banner.active .fill{animation-name:fillActionNo;animation-timing-function:cubic-bezier(0.2, 0.6, 0.8, 0.4);animation-duration:2s;animation-fill-mode:forwards;border-radius:50%}.what-need__slide #banner.active #waveShape{animation-name:waveAction;animation-iteration-count:infinite;animation-timing-function:linear;animation-duration:1s;width:300px;height:0;fill:#43c37e}#banner.active #waveShape{animation-name:waveAction;animation-iteration-count:infinite;animation-timing-function:linear;animation-duration:1s;width:300px;height:0;fill:#0094ff}@media(max-width: 991.98px){#banner{display:none}}.join-us{display:block;cursor:pointer;position:absolute;font-family:"GTAmerica";font-weight:500;line-height:100%;text-transform:uppercase;color:#fff;box-shadow:0 0 30px rgba(0,148,255,.6);background:#0094ff;border-radius:50%;padding-top:calc(72px + 13 * ((100vw - 375px) / 1065));padding-left:calc(28px + 4 * ((100vw - 375px) / 1065));font-size:calc(14px + 2 * ((100vw - 375px) / 1065));width:calc(132px + 22 * ((100vw - 375px) / 1065));height:calc(132px + 22 * ((100vw - 375px) / 1065));top:698px;left:444px}@keyframes pulse-button{0%{transform:scale(1);opacity:1}25%{opacity:.3;transform:scale(1.2)}50%{opacity:1;transform:scale(1)}75%{opacity:.3;transform:scale(1.2)}100%{opacity:1;transform:scale(1)}}@keyframes pulse-button-active{0%{transform:scale(1);opacity:1}25%{opacity:.3;transform:scale(1.3)}50%{opacity:1;transform:scale(1)}75%{opacity:.3;transform:scale(1.3)}100%{opacity:1;transform:scale(1)}}.swiper-pagination{display:none;position:static;margin-top:20px;grid-column-gap:6px;grid-auto-flow:column;grid-auto-columns:auto}@media(max-width: 767px){.swiper-pagination{display:grid}}span.swiper-pagination-bullet{border-radius:50%;background:#fff;opacity:.5;width:8px;height:8px}span.swiper-pagination-bullet-active{background:#0094ff;opacity:1}.c-about-team{position:relative;overflow:hidden;width:100%;height:100vh}.c-about-team.is-inview .c-about-team_inner::before{transform:scale(1)}.c-about-team_inner{padding:48px 32px;position:relative;display:flex;flex-direction:column;justify-content:space-between;min-height:742px;overflow:hidden;color:#fff;background:#262626}@media(max-width: 767px){.c-about-team_inner{padding:56px 16px 64px}}.c-about-team_description{max-width:53%;font-weight:500;font-size:2.5rem;line-height:1.1;color:#fff}@media(max-width: 1023px){.c-about-team_description{font-size:28px}}@media(max-width: 767px){.c-about-team_description{max-width:100%}}.c-about-team_litle-info{font-family:"GT-America-Extended-Light";font-size:1.375rem;line-height:1.1;color:#fff;position:absolute;max-width:17.875rem;top:166px;right:188px}@media(max-width: 1439px){.c-about-team_litle-info{top:140px;right:32px;max-width:230px}}@media(max-width: 767px){.c-about-team_litle-info{margin-top:32px;position:static}}.c-about-team_litle-info-text{font-family:"GTAmerica";font-weight:300;font-style:normal;font-size:22px;line-height:130%;letter-spacing:-0.035em;color:#fff}@media(max-width: 1023px){.c-about-team_litle-info-text{font-size:18px}}.c-about-team_marqueeWrapper{position:absolute;display:inline-block;width:100%;left:0;bottom:0;overflow:hidden;z-index:1}.c-about-team_marquee{margin-top:230px;display:flex;font-size:21.875rem;line-height:19.6875rem;white-space:nowrap;color:#fff}@media(max-width: 1439px){.c-about-team_marquee{margin-top:180px}}@media(max-width: 1023px){.c-about-team_marquee{margin-top:220px}}@media(max-width: 767px){.c-about-team_marquee{margin-top:64px}}*,*:before,*:after{box-sizing:border-box;position:relative;letter-spacing:0px}body{background-color:#fefefe;overflow-x:hidden}.spacer{height:100vh;display:flex;align-items:center;justify-content:center}h1{text-align:center;font-size:3rem;color:#000}.margin{margin:8rem 0}.about-block{position:relative}.pulse-button{width:154px;height:154px;position:absolute;right:20vw;top:250px;cursor:pointer}.pulse-button::before{content:"";position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);width:76%;height:76%;background:#0094ff;opacity:.7;filter:blur(28px);border-radius:156px}@media(max-width: 1439px){.pulse-button{right:32px}}@media(max-width: 1023px){.pulse-button{width:132px;height:132px}}@media(max-width: 767px){.pulse-button{position:relative;top:auto;right:auto;margin:10px 0 0 auto}}.pulse-button img{width:100%;height:100%;object-fit:none;object-position:center;border-radius:50%;will-change:transform}.pulse-button-bg{position:absolute;top:0;left:0;width:100%;height:100%;border:1px solid #0094ff;border-radius:50%;animation:pulse-button 4s infinite;will-change:transform}.pulse-button-bg-active{position:absolute;top:0;left:0;width:100%;height:100%;border:1px solid #0094ff;border-radius:50%;will-change:transform;transition:all .3s ease-in;animation:pulse-button-active 4s infinite}.pulse-button-active .pulse-button-bg-active{transform:scale(1.4);transition:all .3s ease-in}.line{width:422px;height:210px;position:absolute;top:185px;right:31vw;will-change:transform}.line img{width:100%;height:100%;object-fit:contain}@media(max-width: 1439px){.line{right:180px;width:29%}}@media(max-width: 767px){.line{width:134px;height:103px;position:static;margin-left:auto;margin-top:-103px}}.c-about-team_info-block{position:relative;display:grid;grid-template-columns:repeat(3, 1fr);grid-column-gap:112px;will-change:transform}@media(max-width: 1439px){.c-about-team_info-block{grid-column-gap:50px}}@media(max-width: 1023px){.c-about-team_info-block{grid-template-columns:repeat(2, 1fr);grid-column-gap:48px;grid-row-gap:48px}}@media(max-width: 767px){.c-about-team_info-block{grid-template-columns:1fr}}.one-info{display:flex;flex-direction:column}.one-info__title{font-style:normal;font-weight:500;font-size:24px;line-height:130%;color:#fff}@media(max-width: 767px){.one-info__title{font-size:18px}}.one-info__number{margin-top:20px;font-size:80px;font-weight:700;line-height:83%;letter-spacing:-0.015em;color:#fff}@media(max-width: 1439px){.one-info__number{font-size:60px}}@media(max-width: 767px){.one-info__number{margin-top:16px;font-size:40px}}.one-info__description{margin-top:48px;font-family:"GTAmerica";font-style:normal;font-weight:300;font-size:16px;line-height:130%;letter-spacing:-0.035em;color:#fff;white-space:normal}@media(max-width: 767px){.one-info__description{margin-top:32px;font-size:14px}}',""]),t.exports=n},463:function(t,e,o){"use strict";o.r(e);o(28),o(20),o(27),o(11),o(41),o(25),o(42);var n=o(13),r=o(17),l=o(315),c=o(310),h=o(328);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}c.a.registerPlugin(h.a);var f={name:"AboutTeam",data:function(){return{windowHeight:0,windowWidth:0,wrapper:null,blockPosition:null,line:[],pulse_button_active:!1}},computed:m(m(m(m({},Object(r.e)(["scroll"])),Object(r.e)("document",["documentWidth"])),Object(r.c)("apiMain",["getLayoutBlackBlock"])),{},{wrapperHeight:function(){return this.wrapper?this.wrapper.clientHeight:null},getOpacity:function(){return this.scroll.y-this.blockPosition>this.wrapperHeight/100*1?1:0},getPageScroll:function(){return this.scroll.y-100},getIntroScrollPercent:function(){return Object(l.b)(this.scroll.y,0,this.wrapperHeight,0,1)},about_block_translateY:function(){return this.getPageScroll-this.blockPosition+this.windowWidth-100>this.wrapperHeight-400?-this.wrapperHeight+this.windowWidth-100+500:this.scroll.y-this.blockPosition>this.wrapperHeight/100&&this.getPageScroll-this.blockPosition-this.windowWidth-100<this.wrapperHeight-400?this.blockPosition-this.getPageScroll+100:100},getCurrentLetterIdx:function(){return Math.ceil(this.letterPathes.length*this.getIntroScrollPercent)}}),methods:{pulseButtonDown:function(){this.pulse_button_active=!0},pulseButtonUp:function(){this.pulse_button_active=!1}},mounted:function(){this.windowWidth=window.innerWidth,this.windowHeight=window.innerHeight,this.wrapper=document.getElementById("about-block"),this.blockPosition=this.wrapper.getBoundingClientRect().top,console.log(this.wrapper.style.transform)}},x=(o(451),o(9)),component=Object(x.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about-block",attrs:{id:"about-block"}},[n("section",{staticClass:"section portfolio c-about-team_inner",attrs:{"data-scroll":"","data-scroll-sticky":"","data-scroll-target":"#about-block","data-scroll-direction":"vertical","data-scroll-position":"right"}},[n("div",{staticClass:"c-about-team_description",attrs:{"data-scroll":"","data-scroll-sticky":""}},[n("p",[t._v("\n        "+t._s(t.getLayoutBlackBlock.attributes.title)+"\n      ")])]),t._v(" "),n("div",{staticClass:"c-about-team_litle-info",attrs:{"data-scroll":"","data-scroll-sticky":""}},[n("p",{staticClass:"c-about-team_litle-info-text"},[t._v("\n        "+t._s(t.getLayoutBlackBlock.attributes.subtitle)+"\n      ")])]),t._v(" "),n("div",{staticClass:"line",style:{opacity:1},attrs:{"data-scroll":""}},[n("img",{directives:[{name:"show",rawName:"v-show",value:t.documentWidth>=768,expression:"documentWidth >= 768"}],attrs:{src:o(448),alt:""}}),t._v(" "),n("img",{directives:[{name:"show",rawName:"v-show",value:t.documentWidth<768,expression:"documentWidth < 768"}],attrs:{src:o(449),alt:""}})]),t._v(" "),n("div",{staticClass:"pulse-button",class:{"pulse-button-active":t.pulse_button_active},style:{opacity:1},attrs:{"data-scroll":""},on:{mousedown:t.pulseButtonDown,mouseup:t.pulseButtonUp}},[n("div",{staticClass:"pulse-button-bg"}),t._v(" "),n("div",{staticClass:"pulse-button-bg-active"}),t._v(" "),n("img",{attrs:{src:o(450),alt:""}})]),t._v(" "),n("div",{staticClass:"c-about-team_marquee",attrs:{"data-scroll":"",id:"c-about-team_marquee"}},[n("ul",{staticClass:"c-about-team_info-block"},t._l(t.getLayoutBlackBlock.attributes.blocks,(function(e){return n("li",{key:e.key,staticClass:"one-info"},[n("span",{staticClass:"one-info__title"},[t._v("\n            "+t._s(e.attributes.title)+"\n          ")]),t._v(" "),n("span",{staticClass:"one-info__number"},[t._v("\n            "+t._s(e.attributes.subtitle)+"\n          ")]),t._v(" "),n("p",{staticClass:"one-info__description"},[t._v("\n            "+t._s(e.attributes.description)+"\n          ")])])})),0)])])])}),[],!1,null,null,null);e.default=component.exports}}]);