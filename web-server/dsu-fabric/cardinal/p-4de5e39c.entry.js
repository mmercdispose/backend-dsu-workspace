import{r as t,g as e,h as s}from"./p-83ba3037.js";import"./p-c06cc5e4.js";import{a as i,s as r}from"./p-81b8808b.js";import{C as c}from"./p-f85d8268.js";import{T as a}from"./p-34753693.js";const l=class{constructor(e){t(this,e),this.activeChapter=null,this.chapterList=[],this.initialChapterSetupDone=!1}connectedCallback(){this.pskPageElement=i(e(this),"psk-page")}tocReceived(t){if(t.detail){let{chapters:e,active:s}=t.detail;this.chapterList=this._sortChapters(e),this.activeChapter=s}}_sortCurrentChapter(t,e){if(0===t.children.length)return t;let s=[];for(let i=0;i<e.length;++i){let r=t.children.find(t=>t.guid===e[i]);r&&(e.splice(i--,1),s.push(this._sortCurrentChapter(r,e)))}return Object.assign(Object.assign({},t),{children:s})}_sortChapters(t){const e=this.pskPageElement.querySelectorAll("psk-chapter"),s=[];e.forEach(t=>{t.hasAttribute("data-define-props")||t.hasAttribute("data-define-controller")||t.hasAttribute("data-define-events")||!t.hasAttribute("guid")||s.push(t.getAttribute("guid"))});let i=[];for(let e=0;e<s.length;++e){let r=t.find(t=>t.guid===s[e]);r&&(s.splice(e--,1),i.push(this._sortCurrentChapter(r,s)))}return i}_renderChapters(t,e,i){return e.map((e,c)=>{let a=void 0===i?c+1+".":`${i}${c+1}.`;return s("li",{class:e.guid===this.activeChapter?"toc-item active":"toc-item",onClick:s=>{s.stopImmediatePropagation(),s.preventDefault(),r(e.title,t),this.activeChapter=e.guid}},s("span",{class:"chapter-index"},a),s("span",{class:"chapter-title"},e.title),0===e.children.length?null:s("ul",null,this._renderChapters(t,e.children,a)))})}render(){return this.initialChapterSetupDone&&this.activeChapter||!(this.chapterList.length>0)||(this.activeChapter=this.chapterList[0].guid,this.initialChapterSetupDone=!0),s("div",{class:"table-of-content"},s("psk-card",{title:this.title},s("ul",null,this._renderChapters(this.pskPageElement,this.chapterList))))}};!function(t,e,s,i){var r,c=arguments.length,a=c<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,s,i);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(a=(c<3?r(a):c>3?r(e,s,a):r(e,s))||a);c>3&&a&&Object.defineProperty(e,s,a)}([c(),a({description:"This property is the title of the psk-card that will be created.",isMandatory:!1,propertyType:"string"})],l.prototype,"title",void 0);export{l as psk_toc}