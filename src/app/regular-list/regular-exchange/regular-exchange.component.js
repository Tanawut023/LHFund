"use strict";var __decorate=this&&this.__decorate||function(e,t,r,n){var a,o=arguments.length,c=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,n);else for(var l=e.length-1;0<=l;l--)(a=e[l])&&(c=(o<3?a(c):3<o?a(t,r,c):a(t,r))||c);return 3<o&&c&&Object.defineProperty(t,r,c),c};Object.defineProperty(exports,"__esModule",{value:!0});var core_1=require("@angular/core"),RegularExchangeComponent=function(){function e(){this.page="regular-exchange",this.model={}}return e.prototype.ngOnInit=function(){$("#mutual-tab-menu").find("li").removeClass("current"),$("#mutual-tab-menu").find("li#menu3").addClass("current")},e.prototype.checkpage=function(e){switch(window.scroll(0,0),console.log(e),e){case"regular-exchange":this.page="regular-exchange";break;case"regular-exchange-step1":this.page="regular-exchange-step1";break;default:this.page="regular-exchange",console.log(this.page)}},e=__decorate([core_1.Component({selector:"app-regular-exchange",templateUrl:"./regular-exchange.component.html",styleUrls:["./regular-exchange.component.scss"]})],e)}();exports.RegularExchangeComponent=RegularExchangeComponent;