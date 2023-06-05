(()=>{const t=Craft.BaseElementIndex.extend({$newTemplateBtnGroup:null,$newTemplateBtn:null,init(t,e,n){this.on("selectSource",this.updateButton.bind(this)),this.on("selectSite",this.updateButton.bind(this)),this.base(t,e,n)},afterInit(){this._entryTypes=ContentTemplates.IndexSettings.sections.flatMap((t=>t.entryTypes.map((e=>Object.assign(Object.assign({},e),{section:t}))))),this.base()},createView(t,e){var n,i,s;null===(i=null===(n=this.view)||void 0===n?void 0:n.structureTableSort)||void 0===i||i.off("positionChange");const a=this.base(t,e);return null===(s=a.structureTableSort)||void 0===s||s.on("positionChange",(t=>{const e={type:t.target.tableView.elementIndex.$source.data("key").substring(10),elementIds:t.target.$items.get().map((t=>t.getAttribute("data-id")))};Craft.sendActionRequest("POST","content-templates/cp/save-config-order",{data:e}).catch((t=>console.warn("Unable to update project config for content template order")))})),a},updateButton(){if(null===this.$source)return;const t=this.$source.data("handle"),e=this._entryTypes.find((e=>void 0!==e.section&&e.section.handle+"/"+e.handle===t));if(void 0===e)throw new Error(`Element index source handle "${t}" is invalid`);null!==this.$newTemplateBtnGroup&&this.$newTemplateBtnGroup.remove(),this.$newTemplateBtnGroup=$('<div class="btngroup submit" data-wrapper/>');let n=null;const i="new-content-template-menu-"+Craft.randomString(10),s="index"===this.settings.context?Craft.t("content-templates","New content template"):Craft.t("content-templates","New {entryType} content template",{entryType:e.name}),a="index"===this.settings.context?Craft.t("content-templates","New content template of the {entryType} type",{entryType:e.name}):s,o="index"===this.settings.context?"link":null;if(this.$newTemplateBtn=Craft.ui.createButton({label:s,ariaLabel:a,spinner:!0,role:o}).addClass("submit add icon").appendTo(this.$newTemplateBtnGroup),this.addListener(this.$newTemplateBtn,"click mousedown",(t=>{var n;"index"===this.settings.context&&("click"===t.type&&Garnish.isCtrlKeyPressed(t)||"mousedown"===t.type&&1===(null===(n=t.originalEvent)||void 0===n?void 0:n.button))?window.open(Craft.getUrl(`content-templates/${e.id}/new`)):"click"===t.type&&this._createContentTemplate(e.id)})),this._entryTypes.length>1&&(n=$("<button/>",{type:"button",class:"btn submit menubtn btngroup-btn-last","aria-controls":i,"data-disclosure-trigger":"","aria-label":Craft.t("content-templates","New content template, choose an entry type")}).appendTo(this.$newTemplateBtnGroup)),this.addButton(this.$newTemplateBtnGroup),null!==n){const t=$("<div/>",{id:i,class:"menu menu--disclosure"}).appendTo(this.$newTemplateBtnGroup),s=$("<ul/>").appendTo(t);this._entryTypes.forEach((t=>{var i,a;const o="index"===this.settings.context?"link":"button";if("index"===this.settings.context&&null!==(a=null===(i=t.section)||void 0===i?void 0:i.sites.includes(this.siteId))&&void 0!==a&&a||"index"!==this.settings.context&&t!==e){const e=$("<li/>").appendTo(s),i=$("<a/>",{role:"button"===o?"button":null,href:"#",type:"button"===o?"button":null,text:Craft.t("content-templates","New {entryType} content template",{entryType:t.name})}).appendTo(e);this.addListener(i,"click",(()=>{null==n||n.data("trigger").hide(),this._createContentTemplate(t.id)})),"button"===o&&this.addListener(i,"keydown",(e=>{e.keyCode===Garnish.SPACE_KEY&&(e.preventDefault(),null==n||n.data("trigger").hide(),this._createContentTemplate(t.id))}))}})),this._menu=new Garnish.DisclosureMenu(n)}if("index"===this.settings.context){let e="content-templates";void 0!==t&&(e+="/"+t),Craft.setPath(e)}},_createContentTemplate(t){var e,n,i,s;if(null!==(n=null===(e=this.$newTemplateBtn)||void 0===e?void 0:e.hasClass("loading"))&&void 0!==n&&n)return void console.warn("New content template creation already in progress.");const a=this._entryTypes.find((e=>e.id===t));if(void 0===a)throw new Error(`Invalid entry type ID: ${t}`);null===(i=this.$newTemplateBtn)||void 0===i||i.addClass("loading"),Craft.sendActionRequest("POST","content-templates/cp/create",{data:{siteId:this.siteId,entryType:a.handle,section:null===(s=a.section)||void 0===s?void 0:s.handle}}).then((({data:t})=>{document.location.href=Craft.getUrl(t.cpEditUrl,{fresh:1})})).finally((()=>{var t;null===(t=this.$newTemplateBtn)||void 0===t||t.removeClass("loading")}))}});Craft.registerElementIndexClass("spicyweb\\contenttemplates\\elements\\ContentTemplate",t)})();
//# sourceMappingURL=index.js.map