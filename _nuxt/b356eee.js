(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{305:function(e,t,n){var content=n(312);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(34).default)("43287c66",content,!0,{sourceMap:!1})},306:function(e,t,n){"use strict";n.r(t);n(64);var o={name:"CircleBlock",components:{BannerAnimationCircle:n(309).a},data:function(){return{setClassActive:!1,timer:null}},props:{type:{type:String,default:"1"},iconClas:{type:String},valueTitle:{type:String},valueSubTitle:{type:String},toImg:{type:String,default:"/"},item:{type:Object,default:function(){}}},methods:{changeClassActiveBanner:function(){var e=this;this.setClassActive=!0,clearTimeout(this.timer),this.timer=setTimeout((function(){e.setClassActive=!1}),2e3)}},mounted:function(){this.$refs.circle.style.setProperty("--scale","".concat(Math.round(96*this.$refs.circle.offsetWidth/125)/100))}},c=(n(311),n(9)),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return"1"===e.type?n("div",{ref:"circle",on:{mouseleave:e.changeClassActiveBanner}},[n("BannerAnimationCircle",{class:{active:e.setClassActive}}),e._v(" "),n("div",{staticClass:"circle-block__icon",class:e.iconClas},[n("img",{attrs:{src:e.toImg,alt:"img"}})]),e._v(" "),n("div",{staticClass:"circle-block__title"},[e._v("\n    "+e._s(e.valueTitle)+"\n  ")]),e._v(" "),n("div",{staticClass:"circle-block__subtitle"},[e._v("\n    "+e._s(e.valueSubTitle)+"\n  ")])],1):n("li",{ref:"circle",staticClass:"swiper-slide what-need__slide slide-need",on:{mouseleave:e.changeClassActiveBanner}},[n("BannerAnimationCircle",{class:{active:e.setClassActive}}),e._v(" "),n("div",{staticClass:'slide-need__icon"'},[n("img",{attrs:{src:e.item.img,alt:e.item.img}})]),e._v(" "),n("div",{staticClass:"slide-need__title"},[e._v("\n    "+e._s(e.item.title)+"\n  ")])],1)}),[],!1,null,null,null);t.default=component.exports},309:function(e,t,n){"use strict";var o={name:"BannerAnimationCircle"},c=n(9),component=Object(c.a)(o,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"banner"}},[t("div",{staticClass:"fill"},[t("svg",{attrs:{preserveAspectRatio:"none",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"300px",height:"300px",viewBox:"0 0 300 300","enable-background":"new 0 0 300 300","xml:space":"preserve"}},[t("path",{attrs:{fill:"#04ACFF",id:"waveShape",d:"M300,300V2.5c0,0-0.6-0.1-1.1-0.1c0,0-25.5-2.3-40.5-2.4c-15,0-40.6,2.4-40.6,2.4\n\tc-12.3,1.1-30.3,1.8-31.9,1.9c-2-0.1-19.7-0.8-32-1.9c0,0-25.8-2.3-40.8-2.4c-15,0-40.8,2.4-40.8,2.4c-12.3,1.1-30.4,1.8-32,1.9\n\tc-2-0.1-20-0.8-32.2-1.9c0,0-3.1-0.3-8.1-0.7V300H300z"}})])])])}),[],!1,null,"70ac1bd2",null);t.a=component.exports},311:function(e,t,n){"use strict";n(305)},312:function(e,t,n){var o=n(33)(!1);o.push([e.i,'@keyframes line{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes fillAction{0%{transform:translate(0, 150px)}100%{transform:translate(0, -15px)}}@keyframes fillActionNo{0%{transform:translate(0, 50px)}100%{transform:translate(0, 300px)}}@keyframes waveAction{0%{transform:translate(-150px, 0)}100%{transform:translate(0, 0)}}#banner{position:absolute;z-index:-3;border-radius:50%;width:125px;height:125px;overflow:hidden;backface-visibility:hidden;transform:translate3d(0, 0, 0) scale(0)}#banner.active{position:absolute;z-index:-3;border-radius:50%;width:125px;height:125px;overflow:hidden;backface-visibility:hidden;transform:translate3d(0, 0, 0) scale(var(--scale))}#banner.active .fill{animation-name:fillActionNo;animation-timing-function:cubic-bezier(0.2, 0.6, 0.8, 0.4);animation-duration:2s;animation-fill-mode:forwards;border-radius:50%}.what-need__slide #banner.active #waveShape{animation-name:waveAction;animation-iteration-count:infinite;animation-timing-function:linear;animation-duration:1s;width:300px;height:0;fill:#43c37e}#banner.active #waveShape{animation-name:waveAction;animation-iteration-count:infinite;animation-timing-function:linear;animation-duration:1s;width:300px;height:0;fill:#0094ff}@media(max-width: 991.98px){#banner{display:none}}.join-us{display:block;cursor:pointer;position:absolute;font-family:"GTAmerica";font-weight:500;line-height:100%;text-transform:uppercase;color:#fff;box-shadow:0 0 30px rgba(0,148,255,.6);background:#0094ff;border-radius:50%;padding-top:calc(72px + 13 * ((100vw - 375px) / 1065));padding-left:calc(28px + 4 * ((100vw - 375px) / 1065));font-size:calc(14px + 2 * ((100vw - 375px) / 1065));width:calc(132px + 22 * ((100vw - 375px) / 1065));height:calc(132px + 22 * ((100vw - 375px) / 1065));top:698px;left:444px}@keyframes pulse-button{0%{transform:scale(1);opacity:1}25%{opacity:.3;transform:scale(1.2)}50%{opacity:1;transform:scale(1)}75%{opacity:.3;transform:scale(1.2)}100%{opacity:1;transform:scale(1)}}@keyframes pulse-button-active{0%{transform:scale(1);opacity:1}25%{opacity:.3;transform:scale(1.3)}50%{opacity:1;transform:scale(1)}75%{opacity:.3;transform:scale(1.3)}100%{opacity:1;transform:scale(1)}}.swiper-pagination{display:none;position:static;margin-top:20px;grid-column-gap:6px;grid-auto-flow:column;grid-auto-columns:auto}@media(max-width: 767px){.swiper-pagination{display:grid}}span.swiper-pagination-bullet{border-radius:50%;background:#fff;opacity:.5;width:8px;height:8px}span.swiper-pagination-bullet-active{background:#0094ff;opacity:1}@media(hover: hover){.what-need__slide:hover{color:#fff;transition:color .5s ease .2s}.what-need__slide:hover #banner{position:absolute;z-index:-3;border-radius:50%;width:125px;height:125px;overflow:hidden;backface-visibility:hidden;transform:translate3d(0, 0, 0) scale(var(--scale))}.what-need__slide:hover #banner .fill{animation-name:fillAction;animation-iteration-count:.7;animation-timing-function:cubic-bezier(0.2, 0.6, 0.8, 0.4);animation-duration:1s;animation-fill-mode:forwards;border-radius:50%;padding:-5px}.what-need__slide:hover #banner #waveShape{animation-name:waveAction;animation-iteration-count:infinite;animation-timing-function:linear;animation-duration:2s;width:300px;height:0;fill:#43c37e}}@media(hover: hover)and (max-width: 991.98px){.what-need__slide:hover{color:#262626}}.circle-block{--scale: 4;transition:color .5s ease;position:relative;width:calc(343px + 182 * ((100vw - 375px) / 1065));height:calc(343px + 182 * ((100vw - 375px) / 1065));border-radius:50%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:rgba(255,255,255,.08);border:1px solid rgba(0,0,0,.1);box-sizing:border-box}@media(hover: hover){.circle-block:hover{color:#fff;transition:color .5s ease .2s}.circle-block:hover #banner{position:absolute;z-index:-3;border-radius:50%;width:125px;height:125px;overflow:hidden;backface-visibility:hidden;transform:translate3d(0, 0, 0) scale(var(--scale))}.circle-block:hover #banner .fill{animation-name:fillAction;animation-iteration-count:.7;animation-timing-function:cubic-bezier(0.2, 0.6, 0.8, 0.4);animation-duration:1s;animation-fill-mode:forwards;border-radius:50%;padding:-5px}.circle-block:hover #banner #waveShape{animation-name:waveAction;animation-iteration-count:infinite;animation-timing-function:linear;animation-duration:2s;width:300px;height:0;fill:#0094ff}}@media(max-width: 991.98px){.circle-block{color:#262626}}.circle-block__icon{margin-bottom:32px}.circle-block__icon img{max-height:calc(120px + 80 * ((100vw - 375px) / 1065));object-fit:contain}.circle-block__title{text-align:center;font-weight:500;line-height:130%;margin-bottom:16px;font-size:calc(24px + 8 * ((100vw - 375px) / 1065));max-width:calc(166px + 212 * ((100vw - 375px) / 1065))}.circle-block__subtitle{text-align:center;font-family:"GTAmerica";font-weight:300;line-height:130%;font-size:calc(18px + 4 * ((100vw - 375px) / 1065));max-width:calc(279px + 86 * ((100vw - 375px) / 1065))}@media(max-width: 991.98px){.circle-block{display:flex;flex-direction:column;align-items:center;justify-content:center;position:relative}}@media(max-width: 991.98px){.for-managers .circle-block{color:#262626}}.for-managers .circle-block__icon.icon1 img{width:calc(138px + 88 * ((100vw - 375px) / 1065));height:calc(117px + 76 * ((100vw - 375px) / 1065))}.for-managers .circle-block__icon.icon2 img{width:calc(171px + 129 * ((100vw - 375px) / 1065));height:calc(118px + 88 * ((100vw - 375px) / 1065))}.for-managers .circle-block__title{max-width:calc(200px + 178 * ((100vw - 375px) / 1065))}.for-managers .circle-block__subtitle{max-width:calc(235px + 69 * ((100vw - 375px) / 1065))}.why .circle-block{background:rgba(255,255,255,.08);border:1px solid rgba(0,0,0,.1);box-sizing:border-box}.why .circle-block__icon{margin-bottom:32px}.why .circle-block__title{text-align:center;font-weight:500;line-height:130%;margin-bottom:16px;font-size:calc(24px + 8 * ((100vw - 375px) / 1065));max-width:calc(166px + 212 * ((100vw - 375px) / 1065))}.why .circle-block__subtitle{text-align:center;font-family:"GTAmerica";font-weight:300;line-height:130%;font-size:calc(18px + 4 * ((100vw - 375px) / 1065));max-width:calc(279px + 86 * ((100vw - 375px) / 1065))}@media screen and (max-width: 991.98px){.why .circle-block{color:#262626;display:flex;flex-direction:column;align-items:center;justify-content:center;position:relative}.why .circle-block__icon{margin-bottom:0;position:absolute;height:100%;width:100%;display:flex;justify-content:center;align-items:center;opacity:.1;z-index:-5}.why .circle-block__icon img{height:70%}}',""]),e.exports=o}}]);