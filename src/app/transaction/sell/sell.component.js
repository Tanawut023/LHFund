"use strict";var __decorate=this&&this.__decorate||function(e,t,l,s){var o,n=arguments.length,r=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,l):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,l,s);else for(var c=e.length-1;0<=c;c--)(o=e[c])&&(r=(n<3?o(r):3<n?o(t,l,r):o(t,l))||r);return 3<n&&r&&Object.defineProperty(t,l,r),r};Object.defineProperty(exports,"__esModule",{value:!0});var core_1=require("@angular/core"),SellComponent=function(){function e(){this.page="sell"}return e.prototype.ngOnInit=function(){$("#mutual-tab-menu").find("li").removeClass("current"),$("#mutual-tab-menu").find("li#menu2").addClass("current")},e.prototype.checkpage=function(e){switch(window.scroll(0,0),console.log(e),e){case"sell":this.page="sell";break;case"sell-step1":this.page="sell-step1";break;case"sell-step2":this.page="sell-step2";break;case"sell-view-list":this.page="sell-view-list";break;default:this.page="sell",console.log(this.page)}},e=__decorate([core_1.Component({selector:"app-sell",templateUrl:"./sell.component.html",styleUrls:["./sell.component.scss"]})],e)}();exports.SellComponent=SellComponent;