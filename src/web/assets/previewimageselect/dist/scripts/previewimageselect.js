(()=>{"use strict";var e={578:(e,t,i)=>{i.r(t)},985:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0});const n=i(760);t.default=class{constructor(e){var t,i,l,r,o;this.container=e,this.imageContainer=e.querySelector("[data-preview-image-select-show]"),this.image=null!==(i=null===(t=this.imageContainer)||void 0===t?void 0:t.querySelector("img"))&&void 0!==i?i:null,this.imageText=null!==(r=null===(l=this.imageContainer)||void 0===l?void 0:l.querySelector("p"))&&void 0!==r?r:null,this.menuItems=e.querySelectorAll("[data-preview-image-select-item]"),this.btnSet=e.querySelector("[data-preview-image-select-set]"),this.btnRemove=e.querySelector("[data-preview-image-select-remove]"),this.input=e.querySelector('input[name="previewImage"]'),null===(o=this.btnRemove)||void 0===o||o.addEventListener("click",(e=>this.remove())),this.menuItems.forEach((e=>{var t,i;const l=e,r=null===(t=l.querySelector("span"))||void 0===t?void 0:t.textContent,o=null===(i=l.querySelector("img"))||void 0===i?void 0:i.getAttribute("src");l.addEventListener("click",(e=>this.set(new n.default(r,o))))}))}set(e){var t,i,n;null===(t=this.image)||void 0===t||t.setAttribute("src",e.url),null===(i=this.input)||void 0===i||i.setAttribute("value",e.filename),null===(n=this.btnRemove)||void 0===n||n.classList.remove("hidden"),null!==this.imageText&&(this.imageText.textContent=e.filename),null!==this.btnSet&&(this.btnSet.textContent=Craft.t("content-templates","Replace"))}remove(){var e,t,i;null===(e=this.image)||void 0===e||e.setAttribute("src",""),null===(t=this.input)||void 0===t||t.setAttribute("value",""),null===(i=this.btnRemove)||void 0===i||i.classList.add("hidden"),null!==this.imageText&&(this.imageText.textContent=Craft.t("content-templates","None set")),null!==this.btnSet&&(this.btnSet.textContent=Craft.t("content-templates","Add"))}}},760:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=class{constructor(e,t){this.filename=e,this.url=t}}}},t={};function i(n){var l=t[n];if(void 0!==l)return l.exports;var r=t[n]={exports:{}};return e[n](r,r.exports,i),r.exports}i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{const e=i(985);i(578),document.querySelectorAll("[data-preview-image-select]").forEach((t=>new e.default(t)))})()})();
//# sourceMappingURL=previewimageselect.js.map