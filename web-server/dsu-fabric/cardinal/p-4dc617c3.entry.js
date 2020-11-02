import{r as e,g as t,h as o}from"./p-83ba3037.js";import"./p-c06cc5e4.js";import"./p-81b8808b.js";import{T as i}from"./p-34753693.js";var r=function(e,t,o,i){var r,s=arguments.length,n=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,o,i);else for(var h=e.length-1;h>=0;h--)(r=e[h])&&(n=(s<3?r(n):s>3?r(t,o,n):r(t,o))||n);return s>3&&n&&Object.defineProperty(t,o,n),n};const s=class{constructor(t){e(this,t),this.isOpened=!1,this.dropDownHasChildActive=!1,this.somethingChanged=!1}handleClick(e){const o=e.target;t(this).contains(o)||(this.isOpened=!1)}handleMenuClick(e){const o=e.detail;t(this).contains(o)?this.isOpened=!1:this.dropDownHasChildActive=!1}routeChanged(){this.dropDownHasChildActive=window.location.href.includes(this.url+"/")}toggleDropdown(e){let t=e.target,o=!1;for(;t.parentElement;)if(t=t.parentElement,t.classList.contains("children")){o=!0;break}o||e.stopImmediatePropagation(),this.isOpened=!this.isOpened}render(){return this.routeChanged(),o("div",{class:`dropdown ${this.dropDownHasChildActive?"active":""} ${this.isOpened?"isOpened":""}`,onClick:e=>this.toggleDropdown(e)},o("slot",null))}};r([i({description:"This property is used in the css file for renderes in order to verify the state of the component",isMandatory:!1,propertyType:"boolean"})],s.prototype,"active",void 0),r([i({description:"This property sets the url for the component in menu in order to be routed.",isMandatory:!0,propertyType:"any"})],s.prototype,"url",void 0),r([i({description:"This property tells the component if something changed with the MenuItem",isMandatory:!1,propertyType:"boolean"})],s.prototype,"somethingChanged",void 0);export{s as dropdown_renderer}