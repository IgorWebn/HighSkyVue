(window.webpackJsonp=window.webpackJsonp||[]).push([[3,12],{322:function(t,e,n){t.exports=n.p+"img/Rectangle2020m.4b7ea44.png"},323:function(t,e,n){var content=n(333);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(34).default)("755ab48f",content,!0,{sourceMap:!1})},325:function(t,e,n){"use strict";n.r(e);var o=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-keys__rect"},[e("img",{attrs:{src:n(322),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-what__rect rect2"},[e("img",{attrs:{src:n(322),alt:"img"}})])}],r=n(330),l=n.n(r),c={name:"BaseCard",props:["item","i","type"],mounted:function(){var t=this;this.$nextTick((function(){l.a.init(t.$refs.item)}))}},d=(n(332),n(9)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return"1"===t.type?n("li",{ref:"item",staticClass:"card-keys"},[t._m(0),t._v(" "),n("span",{staticClass:"card-keys__number"},[t._v(t._s("0"+t.i))]),t._v(" "),n("div",{staticClass:"card-keys__title"},[t._v(t._s(t.item.title))]),t._v(" "),n("div",{staticClass:"card-keys__icon"},[n("img",{attrs:{src:t.item.image,alt:t.item.title}})]),t._v(" "),n("div",{staticClass:"card-keys__subtitle"},[t._v(t._s(t.item.description))])]):n("li",{ref:"item",staticClass:"what-do__card card-what"},[t._m(1),t._v(" "),n("div",{staticClass:"card-what__icon"},[n("img",{attrs:{src:t.item.image,alt:t.item.image}})]),t._v(" "),n("div",{staticClass:"card-what__title"},[t._v("\n    "+t._s(t.item.title)+"\n  ")]),t._v(" "),n("div",{staticClass:"card-what__subtitle"},[t._v("\n    "+t._s(t.item.description)+"\n  ")])])}),o,!1,null,"19852e29",null);e.default=component.exports},330:function(t,e,n){"use strict";var o=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},r=function(){function t(element){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(o(this,t),!(element instanceof Node))throw"Can't initialize VanillaTilt because "+element+" is not a Node.";this.width=null,this.height=null,this.clientWidth=null,this.clientHeight=null,this.left=null,this.top=null,this.gammazero=null,this.betazero=null,this.lastgammazero=null,this.lastbetazero=null,this.transitionTimeout=null,this.updateCall=null,this.event=null,this.updateBind=this.update.bind(this),this.resetBind=this.reset.bind(this),this.element=element,this.settings=this.extendSettings(e),this.reverse=this.settings.reverse?-1:1,this.glare=t.isSettingTrue(this.settings.glare),this.glarePrerender=t.isSettingTrue(this.settings["glare-prerender"]),this.fullPageListening=t.isSettingTrue(this.settings["full-page-listening"]),this.gyroscope=t.isSettingTrue(this.settings.gyroscope),this.gyroscopeSamples=this.settings.gyroscopeSamples,this.elementListener=this.getElementListener(),this.glare&&this.prepareGlare(),this.fullPageListening&&this.updateClientSize(),this.addEventListeners(),this.reset(),this.updateInitialPosition()}return t.isSettingTrue=function(t){return""===t||!0===t||1===t},t.prototype.getElementListener=function(){if(this.fullPageListening)return window.document;if("string"==typeof this.settings["mouse-event-element"]){var t=document.querySelector(this.settings["mouse-event-element"]);if(t)return t}return this.settings["mouse-event-element"]instanceof Node?this.settings["mouse-event-element"]:this.element},t.prototype.addEventListeners=function(){this.onMouseEnterBind=this.onMouseEnter.bind(this),this.onMouseMoveBind=this.onMouseMove.bind(this),this.onMouseLeaveBind=this.onMouseLeave.bind(this),this.onWindowResizeBind=this.onWindowResize.bind(this),this.onDeviceOrientationBind=this.onDeviceOrientation.bind(this),this.elementListener.addEventListener("mouseenter",this.onMouseEnterBind),this.elementListener.addEventListener("mouseleave",this.onMouseLeaveBind),this.elementListener.addEventListener("mousemove",this.onMouseMoveBind),(this.glare||this.fullPageListening)&&window.addEventListener("resize",this.onWindowResizeBind),this.gyroscope&&window.addEventListener("deviceorientation",this.onDeviceOrientationBind)},t.prototype.removeEventListeners=function(){this.elementListener.removeEventListener("mouseenter",this.onMouseEnterBind),this.elementListener.removeEventListener("mouseleave",this.onMouseLeaveBind),this.elementListener.removeEventListener("mousemove",this.onMouseMoveBind),this.gyroscope&&window.removeEventListener("deviceorientation",this.onDeviceOrientationBind),(this.glare||this.fullPageListening)&&window.removeEventListener("resize",this.onWindowResizeBind)},t.prototype.destroy=function(){clearTimeout(this.transitionTimeout),null!==this.updateCall&&cancelAnimationFrame(this.updateCall),this.reset(),this.removeEventListeners(),this.element.vanillaTilt=null,delete this.element.vanillaTilt,this.element=null},t.prototype.onDeviceOrientation=function(t){if(null!==t.gamma&&null!==t.beta){this.updateElementPosition(),this.gyroscopeSamples>0&&(this.lastgammazero=this.gammazero,this.lastbetazero=this.betazero,null===this.gammazero?(this.gammazero=t.gamma,this.betazero=t.beta):(this.gammazero=(t.gamma+this.lastgammazero)/2,this.betazero=(t.beta+this.lastbetazero)/2),this.gyroscopeSamples-=1);var e=this.settings.gyroscopeMaxAngleX-this.settings.gyroscopeMinAngleX,n=this.settings.gyroscopeMaxAngleY-this.settings.gyroscopeMinAngleY,o=e/this.width,r=n/this.height,l=(t.gamma-(this.settings.gyroscopeMinAngleX+this.gammazero))/o,c=(t.beta-(this.settings.gyroscopeMinAngleY+this.betazero))/r;null!==this.updateCall&&cancelAnimationFrame(this.updateCall),this.event={clientX:l+this.left,clientY:c+this.top},this.updateCall=requestAnimationFrame(this.updateBind)}},t.prototype.onMouseEnter=function(){this.updateElementPosition(),this.element.style.willChange="transform",this.setTransition()},t.prototype.onMouseMove=function(t){null!==this.updateCall&&cancelAnimationFrame(this.updateCall),this.event=t,this.updateCall=requestAnimationFrame(this.updateBind)},t.prototype.onMouseLeave=function(){this.setTransition(),this.settings.reset&&requestAnimationFrame(this.resetBind)},t.prototype.reset=function(){this.event={clientX:this.left+this.width/2,clientY:this.top+this.height/2},this.element&&this.element.style&&(this.element.style.transform="perspective("+this.settings.perspective+"px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"),this.resetGlare()},t.prototype.resetGlare=function(){this.glare&&(this.glareElement.style.transform="rotate(180deg) translate(-50%, -50%)",this.glareElement.style.opacity="0")},t.prototype.updateInitialPosition=function(){if(0!==this.settings.startX||0!==this.settings.startY){this.onMouseEnter(),this.fullPageListening?this.event={clientX:(this.settings.startX+this.settings.max)/(2*this.settings.max)*this.clientWidth,clientY:(this.settings.startY+this.settings.max)/(2*this.settings.max)*this.clientHeight}:this.event={clientX:this.left+(this.settings.startX+this.settings.max)/(2*this.settings.max)*this.width,clientY:this.top+(this.settings.startY+this.settings.max)/(2*this.settings.max)*this.height};var t=this.settings.scale;this.settings.scale=1,this.update(),this.settings.scale=t,this.resetGlare()}},t.prototype.getValues=function(){var t=void 0,e=void 0;return this.fullPageListening?(t=this.event.clientX/this.clientWidth,e=this.event.clientY/this.clientHeight):(t=(this.event.clientX-this.left)/this.width,e=(this.event.clientY-this.top)/this.height),t=Math.min(Math.max(t,0),1),e=Math.min(Math.max(e,0),1),{tiltX:(this.reverse*(this.settings.max-t*this.settings.max*2)).toFixed(2),tiltY:(this.reverse*(e*this.settings.max*2-this.settings.max)).toFixed(2),percentageX:100*t,percentageY:100*e,angle:Math.atan2(this.event.clientX-(this.left+this.width/2),-(this.event.clientY-(this.top+this.height/2)))*(180/Math.PI)}},t.prototype.updateElementPosition=function(){var rect=this.element.getBoundingClientRect();this.width=this.element.offsetWidth,this.height=this.element.offsetHeight,this.left=rect.left,this.top=rect.top},t.prototype.update=function(){var t=this.getValues();this.element.style.transform="perspective("+this.settings.perspective+"px) rotateX("+("x"===this.settings.axis?0:t.tiltY)+"deg) rotateY("+("y"===this.settings.axis?0:t.tiltX)+"deg) scale3d("+this.settings.scale+", "+this.settings.scale+", "+this.settings.scale+")",this.glare&&(this.glareElement.style.transform="rotate("+t.angle+"deg) translate(-50%, -50%)",this.glareElement.style.opacity=""+t.percentageY*this.settings["max-glare"]/100),this.element.dispatchEvent(new CustomEvent("tiltChange",{detail:t})),this.updateCall=null},t.prototype.prepareGlare=function(){if(!this.glarePrerender){var t=document.createElement("div");t.classList.add("js-tilt-glare");var e=document.createElement("div");e.classList.add("js-tilt-glare-inner"),t.appendChild(e),this.element.appendChild(t)}this.glareElementWrapper=this.element.querySelector(".js-tilt-glare"),this.glareElement=this.element.querySelector(".js-tilt-glare-inner"),this.glarePrerender||(Object.assign(this.glareElementWrapper.style,{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",overflow:"hidden","pointer-events":"none"}),Object.assign(this.glareElement.style,{position:"absolute",top:"50%",left:"50%","pointer-events":"none","background-image":"linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",transform:"rotate(180deg) translate(-50%, -50%)","transform-origin":"0% 0%",opacity:"0"}),this.updateGlareSize())},t.prototype.updateGlareSize=function(){if(this.glare){var t=2*(this.element.offsetWidth>this.element.offsetHeight?this.element.offsetWidth:this.element.offsetHeight);Object.assign(this.glareElement.style,{width:t+"px",height:t+"px"})}},t.prototype.updateClientSize=function(){this.clientWidth=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,this.clientHeight=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight},t.prototype.onWindowResize=function(){this.updateGlareSize(),this.updateClientSize()},t.prototype.setTransition=function(){var t=this;clearTimeout(this.transitionTimeout),this.element.style.transition=this.settings.speed+"ms "+this.settings.easing,this.glare&&(this.glareElement.style.transition="opacity "+this.settings.speed+"ms "+this.settings.easing),this.transitionTimeout=setTimeout((function(){t.element.style.transition="",t.glare&&(t.glareElement.style.transition="")}),this.settings.speed)},t.prototype.extendSettings=function(t){var e={reverse:!1,max:15,startX:0,startY:0,perspective:1e3,easing:"cubic-bezier(.03,.98,.52,.99)",scale:1,speed:300,transition:!0,axis:null,glare:!1,"max-glare":1,"glare-prerender":!1,"full-page-listening":!1,"mouse-event-element":null,reset:!0,gyroscope:!0,gyroscopeMinAngleX:-45,gyroscopeMaxAngleX:45,gyroscopeMinAngleY:-45,gyroscopeMaxAngleY:45,gyroscopeSamples:10},n={};for(var o in e)if(o in t)n[o]=t[o];else if(this.element.hasAttribute("data-tilt-"+o)){var r=this.element.getAttribute("data-tilt-"+o);try{n[o]=JSON.parse(r)}catch(t){n[o]=r}}else n[o]=e[o];return n},t.init=function(e,n){e instanceof Node&&(e=[e]),e instanceof NodeList&&(e=[].slice.call(e)),e instanceof Array&&e.forEach((function(element){"vanillaTilt"in element||(element.vanillaTilt=new t(element,n))}))},t}();"undefined"!=typeof document&&(window.VanillaTilt=r,r.init(document.querySelectorAll("[data-tilt]"))),t.exports=r},332:function(t,e,n){"use strict";n(323)},333:function(t,e,n){var o=n(33)(!1);o.push([t.i,'@keyframes line-data-v-19852e29{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes fillAction-data-v-19852e29{0%{transform:translate(0, 150px)}100%{transform:translate(0, -15px)}}@keyframes fillActionNo-data-v-19852e29{0%{transform:translate(0, 50px)}100%{transform:translate(0, 300px)}}@keyframes waveAction-data-v-19852e29{0%{transform:translate(-150px, 0)}100%{transform:translate(0, 0)}}#banner[data-v-19852e29]{position:absolute;z-index:-3;border-radius:50%;width:125px;height:125px;overflow:hidden;backface-visibility:hidden;transform:translate3d(0, 0, 0) scale(0)}#banner.active[data-v-19852e29]{position:absolute;z-index:-3;border-radius:50%;width:125px;height:125px;overflow:hidden;backface-visibility:hidden;transform:translate3d(0, 0, 0) scale(var(--scale))}#banner.active .fill[data-v-19852e29]{animation-name:fillActionNo-data-v-19852e29;animation-timing-function:cubic-bezier(0.2, 0.6, 0.8, 0.4);animation-duration:2s;animation-fill-mode:forwards;border-radius:50%}.what-need__slide #banner.active #waveShape[data-v-19852e29]{animation-name:waveAction-data-v-19852e29;animation-iteration-count:infinite;animation-timing-function:linear;animation-duration:1s;width:300px;height:0;fill:#43c37e}#banner.active #waveShape[data-v-19852e29]{animation-name:waveAction-data-v-19852e29;animation-iteration-count:infinite;animation-timing-function:linear;animation-duration:1s;width:300px;height:0;fill:#0094ff}@media(max-width: 991.98px){#banner[data-v-19852e29]{display:none}}.join-us[data-v-19852e29]{display:block;cursor:pointer;position:absolute;font-family:"GTAmerica";font-weight:500;line-height:100%;text-transform:uppercase;color:#fff;box-shadow:0 0 30px rgba(0,148,255,.6);background:#0094ff;border-radius:50%;padding-top:calc(72px + 13 * ((100vw - 375px) / 1065));padding-left:calc(28px + 4 * ((100vw - 375px) / 1065));font-size:calc(14px + 2 * ((100vw - 375px) / 1065));width:calc(132px + 22 * ((100vw - 375px) / 1065));height:calc(132px + 22 * ((100vw - 375px) / 1065));top:698px;left:444px}@keyframes pulse-button-data-v-19852e29{0%{transform:scale(1);opacity:1}25%{opacity:.3;transform:scale(1.2)}50%{opacity:1;transform:scale(1)}75%{opacity:.3;transform:scale(1.2)}100%{opacity:1;transform:scale(1)}}@keyframes pulse-button-active-data-v-19852e29{0%{transform:scale(1);opacity:1}25%{opacity:.3;transform:scale(1.3)}50%{opacity:1;transform:scale(1)}75%{opacity:.3;transform:scale(1.3)}100%{opacity:1;transform:scale(1)}}.swiper-pagination[data-v-19852e29]{display:none;position:static;margin-top:20px;grid-column-gap:6px;grid-auto-flow:column;grid-auto-columns:auto}@media(max-width: 767px){.swiper-pagination[data-v-19852e29]{display:grid}}span.swiper-pagination-bullet[data-v-19852e29]{border-radius:50%;background:#fff;opacity:.5;width:8px;height:8px}span.swiper-pagination-bullet-active[data-v-19852e29]{background:#0094ff;opacity:1}.card-keys[data-v-19852e29]{color:#000;position:relative;border-radius:16px;display:grid;grid-template-rows:auto 200px auto;grid-row-gap:10px;align-content:space-between;overflow:hidden;height:calc(426px + 123 * ((100vw - 375px) / 1065));width:calc(343px + 99 * ((100vw - 375px) / 1065));padding:calc(32px + 8 * ((100vw - 375px) / 1065))}@media(max-width: 575px){.card-keys[data-v-19852e29]{grid-template-rows:auto 160px auto;height:auto}}.card-keys[data-v-19852e29]:after{content:"";position:absolute;width:100%;left:0;bottom:0;background:var(--card-color-after);height:calc(16px + 2 * ((100vw - 375px) / 1065))}.card-keys__rect[data-v-19852e29]{position:absolute;top:0;right:0;bottom:0;left:0;z-index:-11}.card-keys__rect img[data-v-19852e29]{width:100%;height:100%;opacity:.1}.card-keys__number[data-v-19852e29]{position:absolute;left:40px;top:30px;font-weight:500;font-size:80px;line-height:96%;z-index:-1;color:transparent;-webkit-text-stroke-width:1px;-webkit-text-stroke-color:rgba(0,0,0,.5)}@media(max-width: 1023px){.card-keys__number[data-v-19852e29]{display:none}}.card-keys__title[data-v-19852e29]{white-space:nowrap;font-weight:500;line-height:130%;font-size:calc(32px + 16 * ((100vw - 375px) / 1065));margin-top:calc(0px + 30 * ((100vw - 375px) / 1065))}.card-keys__icon img[data-v-19852e29]{width:100%;height:100%;object-fit:contain}.card-keys__subtitle[data-v-19852e29]{max-width:360px;font-family:"GTAmerica";font-weight:300;line-height:130%;letter-spacing:-0.035em;font-size:calc(18px + 4 * ((100vw - 375px) / 1065))}.card-what[data-v-19852e29]{min-height:484px;color:#000;position:relative;border-radius:16px;padding-top:calc(32px + 28 * ((100vw - 375px) / 1065));padding-right:calc(32px + 8 * ((100vw - 375px) / 1065));padding-bottom:calc(32px + 28 * ((100vw - 375px) / 1065));padding-left:calc(32px + 8 * ((100vw - 375px) / 1065));display:grid;grid-template-columns:1fr;grid-auto-rows:auto}@media(max-width: 767px){.card-what[data-v-19852e29]{min-height:auto}}.card-what[data-v-19852e29]:after{content:"";position:absolute;width:100%;left:0;bottom:0;background:var(--card-color-after);border-radius:0 0 16px 16px;height:calc(14px + 4 * ((100vw - 375px) / 1065))}.card-what__rect[data-v-19852e29]{position:absolute;top:0;right:0;bottom:0;left:0}.card-what__rect img[data-v-19852e29]{width:100%;height:100%;opacity:.1}.card-what .rect2[data-v-19852e29]{transform:scaleY(-1)}.card-what__title[data-v-19852e29]{font-weight:500;line-height:130%;font-size:calc(18px + 6 * ((100vw - 375px) / 1065));margin-top:calc(0px + 32 * ((100vw - 375px) / 1065));margin-bottom:16px;text-align:center}.card-what__icon[data-v-19852e29]{width:100%;display:flex;justify-content:center;align-items:center;border-radius:16px;height:calc(184px + 16 * ((100vw - 375px) / 1065))}.card-what__icon img[data-v-19852e29]{width:100%;height:100%;object-fit:contain}.card-what__subtitle[data-v-19852e29]{text-align:center;font-family:"GTAmerica";font-weight:300;line-height:130%;letter-spacing:-0.035em;font-size:calc(14px + 2 * ((100vw - 375px) / 1065))}',""]),t.exports=o},444:function(t,e,n){"use strict";n.r(e);var o=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"your-keys-object your-keys-object__elips1"},[e("img",{attrs:{src:n(490),alt:""}})])}],r=n(133),l={name:"FiKeys",components:{BaseCard:n(325).default,BaseButton:r.default},data:function(){return{cards:[{title:"No risks",image:n(491),description:"We've made trustless open-source software which allows providing access to your capital without any risks.",color:"#F47373"},{title:"Keep profit",image:n(492),description:"All of your assets and profit go to your wallet. Only you can manage money.",color:"#73C6F4"}]}}},c=(n(493),n(9)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"your-keys"},[n("div",{staticClass:"your-keys__container _container"},[n("div",{staticClass:"your-keys__body"},[t._m(0),t._v(" "),n("div",{staticClass:"your-keys__title"},[t._v("\n        Your keys, your wallet, your profit\n      ")]),t._v(" "),n("div",{staticClass:"your-keys__subtitle"},[t._v("\n        We offer capital for management. For you 20% of net profit (SLP - costs)\n      ")]),t._v(" "),n("ul",{staticClass:"your-keys__cards "},t._l(t.cards,(function(t,i){return n("BaseCard",{key:"0"+i,style:{"--card-color-after":t.color},attrs:{item:t,i:i+1,type:"1"}})})),1),t._v(" "),n("BaseButton",{attrs:{value:"ASK VIP MANAGER"}})],1)])])}),o,!1,null,"06f6e822",null);e.default=component.exports;installComponents(component,{BaseCard:n(325).default,BaseButton:n(133).default})},472:function(t,e,n){var content=n(494);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(34).default)("48505b63",content,!0,{sourceMap:!1})},490:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIyOCIgaGVpZ2h0PSIxMzgwIiB2aWV3Qm94PSIwIDAgMTIyOCAxMzgwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPg0KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjBfZl8zMTVfODgzKSI+DQo8ZWxsaXBzZSBjeD0iNjEzLjYzMyIgY3k9IjY4OS43MTMiIHJ4PSIyMDYuNSIgcnk9IjI5NC4yOTQiIHRyYW5zZm9ybT0icm90YXRlKDE1IDYxMy42MzMgNjg5LjcxMykiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcl8zMTVfODgzKSIvPg0KPC9nPg0KPGRlZnM+DQo8ZmlsdGVyIGlkPSJmaWx0ZXIwX2ZfMzE1Xzg4MyIgeD0iMC4wNjI1IiB5PSIwLjQxMzMzIiB3aWR0aD0iMTIyNy4xNCIgaGVpZ2h0PSIxMzc4LjYiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj4NCjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+DQo8ZmVCbGVuZCBtb2RlPSJub3JtYWwiIGluPSJTb3VyY2VHcmFwaGljIiBpbjI9IkJhY2tncm91bmRJbWFnZUZpeCIgcmVzdWx0PSJzaGFwZSIvPg0KPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMjAwIiByZXN1bHQ9ImVmZmVjdDFfZm9yZWdyb3VuZEJsdXJfMzE1Xzg4MyIvPg0KPC9maWx0ZXI+DQo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXJfMzE1Xzg4MyIgeDE9IjQwNy4xMzMiIHkxPSI2ODkuNzEzIiB4Mj0iODIwLjEzMyIgeTI9IjY4OS43MTMiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4NCjxzdG9wIHN0b3AtY29sb3I9IiMyQkMwRTQiLz4NCjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0VBRUNDNiIvPg0KPC9saW5lYXJHcmFkaWVudD4NCjwvZGVmcz4NCjwvc3ZnPg0K"},491:function(t,e,n){t.exports=n.p+"img/risk1.1b610ac.png"},492:function(t,e,n){t.exports=n.p+"img/card2.6b6ae26.svg"},493:function(t,e,n){"use strict";n(472)},494:function(t,e,n){var o=n(33)(!1);o.push([t.i,'@keyframes line-data-v-06f6e822{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes fillAction-data-v-06f6e822{0%{transform:translate(0, 150px)}100%{transform:translate(0, -15px)}}@keyframes fillActionNo-data-v-06f6e822{0%{transform:translate(0, 50px)}100%{transform:translate(0, 300px)}}@keyframes waveAction-data-v-06f6e822{0%{transform:translate(-150px, 0)}100%{transform:translate(0, 0)}}#banner[data-v-06f6e822]{position:absolute;z-index:-3;border-radius:50%;width:125px;height:125px;overflow:hidden;backface-visibility:hidden;transform:translate3d(0, 0, 0) scale(0)}#banner.active[data-v-06f6e822]{position:absolute;z-index:-3;border-radius:50%;width:125px;height:125px;overflow:hidden;backface-visibility:hidden;transform:translate3d(0, 0, 0) scale(var(--scale))}#banner.active .fill[data-v-06f6e822]{animation-name:fillActionNo-data-v-06f6e822;animation-timing-function:cubic-bezier(0.2, 0.6, 0.8, 0.4);animation-duration:2s;animation-fill-mode:forwards;border-radius:50%}.what-need__slide #banner.active #waveShape[data-v-06f6e822]{animation-name:waveAction-data-v-06f6e822;animation-iteration-count:infinite;animation-timing-function:linear;animation-duration:1s;width:300px;height:0;fill:#43c37e}#banner.active #waveShape[data-v-06f6e822]{animation-name:waveAction-data-v-06f6e822;animation-iteration-count:infinite;animation-timing-function:linear;animation-duration:1s;width:300px;height:0;fill:#0094ff}@media(max-width: 991.98px){#banner[data-v-06f6e822]{display:none}}.join-us[data-v-06f6e822]{display:block;cursor:pointer;position:absolute;font-family:"GTAmerica";font-weight:500;line-height:100%;text-transform:uppercase;color:#fff;box-shadow:0 0 30px rgba(0,148,255,.6);background:#0094ff;border-radius:50%;padding-top:calc(72px + 13 * ((100vw - 375px) / 1065));padding-left:calc(28px + 4 * ((100vw - 375px) / 1065));font-size:calc(14px + 2 * ((100vw - 375px) / 1065));width:calc(132px + 22 * ((100vw - 375px) / 1065));height:calc(132px + 22 * ((100vw - 375px) / 1065));top:698px;left:444px}@keyframes pulse-button-data-v-06f6e822{0%{transform:scale(1);opacity:1}25%{opacity:.3;transform:scale(1.2)}50%{opacity:1;transform:scale(1)}75%{opacity:.3;transform:scale(1.2)}100%{opacity:1;transform:scale(1)}}@keyframes pulse-button-active-data-v-06f6e822{0%{transform:scale(1);opacity:1}25%{opacity:.3;transform:scale(1.3)}50%{opacity:1;transform:scale(1)}75%{opacity:.3;transform:scale(1.3)}100%{opacity:1;transform:scale(1)}}.swiper-pagination[data-v-06f6e822]{display:none;position:static;margin-top:20px;grid-column-gap:6px;grid-auto-flow:column;grid-auto-columns:auto}@media(max-width: 767px){.swiper-pagination[data-v-06f6e822]{display:grid}}span.swiper-pagination-bullet[data-v-06f6e822]{border-radius:50%;background:#fff;opacity:.5;width:8px;height:8px}span.swiper-pagination-bullet-active[data-v-06f6e822]{background:#0094ff;opacity:1}.your-keys__body[data-v-06f6e822]{padding-top:calc(80px + 64 * ((100vw - 375px) / 1065));padding-bottom:calc(80px + 64 * ((100vw - 375px) / 1065));display:flex;flex-direction:column;align-items:center;color:#262626;position:relative}.your-keys-object[data-v-06f6e822]{position:absolute}.your-keys-object__elips1[data-v-06f6e822]{z-index:-10;left:calc(0px + 200 * ((100vw - 375px) / 1065));top:calc(-300px + -237 * ((100vw - 375px) / 1065))}.your-keys-object__elips1 img[data-v-06f6e822]{width:calc(1000px + 420 * ((100vw - 375px) / 1065));height:calc(1070px + 416 * ((100vw - 375px) / 1065))}.your-keys__title[data-v-06f6e822]{max-width:1000px;text-align:center;font-weight:700;line-height:83%;letter-spacing:-0.015em;font-size:calc(40px + 40 * ((100vw - 375px) / 1065));margin-bottom:calc(32px + 8 * ((100vw - 375px) / 1065))}.your-keys__subtitle[data-v-06f6e822]{max-width:412px;text-align:center;font-family:"GTAmerica";font-weight:300;line-height:130%;letter-spacing:-0.035em;font-size:calc(18px + 4 * ((100vw - 375px) / 1065));margin-bottom:calc(56px + 24 * ((100vw - 375px) / 1065))}.your-keys__cards[data-v-06f6e822]{max-width:908px;display:grid;grid-template-columns:repeat(2, 1fr);grid-column-gap:24px;grid-auto-rows:auto;margin-bottom:calc(48px + 8 * ((100vw - 375px) / 1065))}@media(max-width: 1023px){.your-keys__cards[data-v-06f6e822]{padding-right:calc(16px + 14 * ((100vw - 375px) / 1065));padding-left:calc(16px + 14 * ((100vw - 375px) / 1065))}}@media(max-width: 767px){.your-keys__cards[data-v-06f6e822]{grid-template-columns:1fr;grid-row-gap:16px}}.your-keys__cards .card-keys[data-v-06f6e822]:not(:nth-of-type(odd)){margin-top:135px}@media(max-width: 767px){.your-keys__cards .card-keys[data-v-06f6e822]:not(:nth-of-type(odd)){margin:0}}@media screen and (max-width: 991.98px){.your-keys__title[data-v-06f6e822]{line-height:100%}.your-keys .card-keys__number[data-v-06f6e822]{display:none}}@media screen and (max-width: 479.98px){.your-keys-object__elips1[data-v-06f6e822]{left:-250px;top:-450px}.your-keys__title[data-v-06f6e822]{line-height:100%}.your-keys__subtitle[data-v-06f6e822]{max-width:280px}}',""]),t.exports=o}}]);