webpackJsonp([2],{"19g3":function(t,a,n){"use strict";var e=n("UarI"),i=n("VB8+"),s=n("gUlt");a.a={name:"ContactCard",components:{IconInfo:e.a,CompanyInfo:i.a,Staffs:s.a},props:{company:{type:Object,default:function(){return{}}}}}},"1AKU":function(t,a,n){"use strict";var e=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"certifications"},t._l(t.certifications,function(a,e){return n("div",{key:e,staticClass:"wrapper",style:t.logos[e]})}))};e._withStripped=!0;var i={render:e,staticRenderFns:[]};a.a=i},"7dUn":function(t,a,n){var e=n("tTce");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);n("rjj0")("3f4fdaef",e,!1,{sourceMap:!1})},"9MJ0":function(t,a,n){"use strict";var e=function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"contact-card"},[a("icon-info",[a("template",{slot:"fa-icon"},[a("i",{staticClass:"fas fa-globe"})]),a("template",{slot:"text"},[a("span",{staticClass:"country-text"},[this._v("\n        "+this._s(this.company.country)+"\n      ")])])],2),a("company-info",{attrs:{company:this.company}}),a("staffs",{attrs:{staffs:this.company.staffs}})],1)};e._withStripped=!0;var i={render:e,staticRenderFns:[]};a.a=i},Bkf6:function(t,a,n){var e=n("cTYz");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);n("rjj0")("bceeca34",e,!1,{sourceMap:!1})},DUlN:function(t,a,n){"use strict";a.a={name:"IconInfo"}},Lcst:function(t,a,n){var e=n("ULqd");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);n("rjj0")("6d85fe96",e,!1,{sourceMap:!1})},NFTy:function(t,a,n){var e=n("hFDj");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);n("rjj0")("75b41562",e,!1,{sourceMap:!1})},UHs4:function(t,a,n){var e=n("mEY2");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);n("rjj0")("584517ff",e,!1,{sourceMap:!1})},ULqd:function(t,a,n){(t.exports=n("FZ+f")(!1)).push([t.i,".certifications[data-v-5362c7ad]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:start;align-content:flex-start;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-top:15px}.wrapper[data-v-5362c7ad]{display:inline-block;border:1px solid #d3d3d3;margin-right:5px;width:50px;height:50px;background-position:50%;background-size:contain;background-repeat:no-repeat}",""])},UarI:function(t,a,n){"use strict";var e=n("DUlN"),i=n("emcY"),s=!1;var o=function(t){s||n("NFTy")},c=n("VU/8")(e.a,i.a,!1,o,"data-v-44cd790a",null);c.options.__file="components\\ContactCard\\IconInfo.vue",a.a=c.exports},"VB8+":function(t,a,n){"use strict";var e=n("mdvF"),i=n("oJJ8"),s=!1;var o=function(t){s||n("UHs4")},c=n("VU/8")(e.a,i.a,!1,o,"data-v-04ffd2c7",null);c.options.__file="components\\ContactCard\\CompanyInfo.vue",a.a=c.exports},Znp7:function(t,a,n){"use strict";var e=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"staff-list-container"},t._l(t.staffs,function(a){return n("div",{key:a._uid,staticClass:"staff-card"},[n("icon-info",[n("template",{slot:"fa-icon"},[n("i",{staticClass:"fas fa-user-circle"})]),n("template",{slot:"text"},[n("span",{staticClass:"name-text"},[t._v("\n          "+t._s(a.name)+"\n        ")])])],2),n("icon-info",[n("template",{slot:"fa-icon"},[n("i",{staticClass:"fas fa-envelope"})]),n("template",{slot:"text"},[n("a",{staticClass:"email-text",attrs:{href:"mailto:"+a.email}},[t._v("\n          "+t._s(a.email)+"\n        ")])])],2),a.mobile?n("icon-info",[n("template",{slot:"fa-icon"},[n("i",{staticClass:"fas fa-mobile"})]),n("template",{slot:"text"},[n("span",{staticClass:"mobile-text"},[t._v("\n          "+t._s(a.mobile)+"\n        ")])])],2):t._e()],1)}))};e._withStripped=!0;var i={render:e,staticRenderFns:[]};a.a=i},cTYz:function(t,a,n){(t.exports=n("FZ+f")(!1)).push([t.i,"#contact-page[data-v-5080bd6a]{-ms-flex-item-align:stretch;align-self:stretch;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}.content[data-v-5080bd6a]{height:85vh;-ms-overflow-style:none;overflow-y:-moz-scrollbars-none;overflow-x:hidden}.content[data-v-5080bd6a]::-webkit-scrollbar{width:0!important}",""])},eL6b:function(t,a,n){(a=t.exports=n("FZ+f")(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css?family=Anton);",""]),a.push([t.i,".contact-card[data-v-cdb22724]{margin:15px}.country-text[data-v-cdb22724]{font-size:110%;font-weight:700}",""])},emcY:function(t,a,n){"use strict";var e=function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"icon-info"},[a("div",{staticClass:"icon-wrapper"},[a("span",{staticClass:"icon"},[this._t("fa-icon")],2)]),this._v("\n    \n  "),a("div",{staticClass:"info-text"},[this._t("text")],2)])};e._withStripped=!0;var i={render:e,staticRenderFns:[]};a.a=i},fBFx:function(t,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=n("vh97"),i=n("ntmn"),s=!1;var o=function(t){s||n("Bkf6")},c=n("VU/8")(e.a,i.a,!1,o,"data-v-5080bd6a",null);c.options.__file="pages\\contact.vue",a.default=c.exports},gUlt:function(t,a,n){"use strict";var e=n("t58B"),i=n("Znp7"),s=!1;var o=function(t){s||n("7dUn")},c=n("VU/8")(e.a,i.a,!1,o,"data-v-2d8ec572",null);c.options.__file="components\\ContactCard\\Staffs.vue",a.a=c.exports},hFDj:function(t,a,n){(a=t.exports=n("FZ+f")(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css?family=Anton);",""]),a.push([t.i,".icon-info[data-v-44cd790a],.icon-wrapper[data-v-44cd790a]{display:-webkit-box;display:-ms-flexbox;display:flex}.icon-wrapper[data-v-44cd790a]{max-width:-webkit-min-content;max-width:-moz-min-content;max-width:min-content;-webkit-box-align:center;-ms-flex-align:center;align-items:center}",""])},ingi:function(t,a,n){var e=n("eL6b");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);n("rjj0")("2eb91e6d",e,!1,{sourceMap:!1})},kI63:function(t,a,n){"use strict";a.a={name:"Certifications",props:{certifications:{type:Array,default:function(){return[]}}},computed:{logos:function(){var t=this;return this.certifications.map(function(a){return{"background-image":"url("+t.urlHelper(a.logo)+")"}})}},methods:{urlHelper:function(t){return t.replace("//a.storyblok.com","//img2.storyblok.com/fit-in/50x50/filters:quality\\(60\\):format\\(jpg\\):fill\\(white\\)")}}}},mEY2:function(t,a,n){(a=t.exports=n("FZ+f")(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css?family=Anton);",""]),a.push([t.i,".company-title-text[data-v-04ffd2c7]{font-family:Anton;font-style:italic;font-size:140%;text-decoration:underline}.address-text[data-v-04ffd2c7],.fax-text[data-v-04ffd2c7],.phone-text[data-v-04ffd2c7]{font-size:50%;font-weight:700}.address-text[data-v-04ffd2c7]{line-height:140%}",""])},mdvF:function(t,a,n){"use strict";var e=n("vDvd"),i=n("UarI");a.a={name:"CountryInfo",components:{Certifications:e.a,IconInfo:i.a},props:{company:{type:Object,default:function(){return{}}}}}},ntmn:function(t,a,n){"use strict";var e=function(){var t=this.$createElement,a=this._self._c||t;return a("section",{directives:[{name:"editable",rawName:"v-editable",value:this.blok,expression:"blok"}],staticClass:"page-view",attrs:{id:"contact-page"}},[a("div",{staticClass:"content"},this._l(this.companies,function(t){return a("contact-card",{key:t._uid,attrs:{company:t}})}))])};e._withStripped=!0;var i={render:e,staticRenderFns:[]};a.a=i},oJJ8:function(t,a,n){"use strict";var e=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"company-info"},[n("icon-info",[n("template",{slot:"fa-icon"},[n("i",{staticClass:"fas fa-building"})]),n("template",{slot:"text"},[n("span",{staticClass:"company-title-text"},[t._v("\n        "+t._s(t.company.name)+"\n      ")])])],2),n("icon-info",[n("template",{slot:"fa-icon"},[n("i",{staticClass:"fas fa-location-arrow"})]),n("template",{slot:"text"},[n("div",{staticClass:"address-text"},[t._v("\n        "+t._s(t.company.address)+"\n      ")])])],2),n("icon-info",[n("template",{slot:"fa-icon"},[n("i",{staticClass:"fas fa-phone"})]),n("template",{slot:"text"},[n("span",{staticClass:"phone-text"},[t._v("\n        "+t._s(t.company.telephone)+"\n      ")])])],2),n("icon-info",[n("template",{slot:"fa-icon"},[n("i",{staticClass:"fas fa-fax"})]),n("template",{slot:"text"},[n("span",{staticClass:"fax-text"},[t._v("\n        "+t._s(t.company.fax)+"\n      ")])])],2),n("certifications",{attrs:{certifications:t.company.certifications}})],1)};e._withStripped=!0;var i={render:e,staticRenderFns:[]};a.a=i},t58B:function(t,a,n){"use strict";var e=n("UarI");a.a={name:"Staff",components:{IconInfo:e.a},props:{staffs:{type:Array,default:function(){return[]}}}}},tTce:function(t,a,n){(t.exports=n("FZ+f")(!1)).push([t.i,".staff-list-container[data-v-2d8ec572]{display:grid;grid-gap:10px 10px;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));grid-auto-rows:1fr;margin-top:15px;padding:5px}.staff-card[data-v-2d8ec572]{background-color:#f5f5f5;max-width:-webkit-max-content;max-width:-moz-max-content;max-width:max-content;min-width:250px;border-left:3px solid #249191;padding-top:5px;padding-left:10px;padding-bottom:5px;border-top-right-radius:8px;border-bottom-right-radius:8px}.name-text[data-v-2d8ec572]{font-weight:900;font-style:italic}.email-text[data-v-2d8ec572],.mobile-text[data-v-2d8ec572]{font-size:80%}",""])},vDvd:function(t,a,n){"use strict";var e=n("kI63"),i=n("1AKU"),s=!1;var o=function(t){s||n("Lcst")},c=n("VU/8")(e.a,i.a,!1,o,"data-v-5362c7ad",null);c.options.__file="components\\ContactCard\\Certifications.vue",a.a=c.exports},vh97:function(t,a,n){"use strict";var e=n("Dd8w"),i=n.n(e),s=n("NYxO"),o=n("ybrx");a.a={name:"ContactPage",components:{ContactCard:o.a},asyncData:function(t){return t.app.$storyapi.get("cdn/stories/contact-page",{version:"published"}).then(function(t){return{blok:t.data.story.content,companies:t.data.story.content.contactList}}).catch(function(t){console.log(t)})},mounted:function(){this.deactivateInProgressOverlay(),this.$storyblok.init(),this.$storyblok.on("change",function(){location.reload(!0)})},methods:i()({},s.default.mapMutations("inProgress",{deactivateInProgressOverlay:"deactivateInProgressOverlay"}))}},ybrx:function(t,a,n){"use strict";var e=n("19g3"),i=n("9MJ0"),s=!1;var o=function(t){s||n("ingi")},c=n("VU/8")(e.a,i.a,!1,o,"data-v-cdb22724",null);c.options.__file="components\\ContactCard\\index.vue",a.a=c.exports}});