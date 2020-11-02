import{r as e,h as t}from"./p-83ba3037.js";import"./p-c06cc5e4.js";import"./p-81b8808b.js";import{B as i}from"./p-83cf881a.js";import{C as s}from"./p-f85d8268.js";import{T as r}from"./p-34753693.js";var o=function(e,t,i,s){var r,o=arguments.length,p=o<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)p=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(p=(o<3?r(p):o>3?r(t,i,p):r(t,i))||p);return o>3&&p&&Object.defineProperty(t,i,p),p};const p=class{constructor(t){e(this,t)}render(){let e={src:this.src,alt:this.title};return this.height&&(e.height=this.height),this.width&&(e.width=this.width),t("div",{class:"image_container"},t("div",{class:"image_wrapper"},t("img",Object.assign({},e))),this.title?t("div",{class:"image_description"},this.title):null)}};o([s(),i()],p.prototype,"modelHandler",void 0),o([r({description:'This property is the path to the image source (Example:"page/PrivateSky/EDFS.png").',isMandatory:!0,propertyType:"string"})],p.prototype,"src",void 0),o([r({description:"This property is setting the width of the image. The value should be an integer specifying the units in pixels",isMandatory:!1,propertyType:"string"})],p.prototype,"width",void 0),o([r({description:"This property is setting the height of the image. The value should be an integer specifying the units in pixels",isMandatory:!1,propertyType:"string"})],p.prototype,"height",void 0),o([r({description:"This property is the title of the image(the alt attribute) and the description of the image.",isMandatory:!1,propertyType:"string",specialNote:"If no title is given,there will not be assumed one and there will be no image description/alt."})],p.prototype,"title",void 0);export{p as psk_img}