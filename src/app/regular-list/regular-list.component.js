"use strict";var __decorate=this&&this.__decorate||function(e,r,a,t){var s,l=arguments.length,o=l<3?r:null===t?t=Object.getOwnPropertyDescriptor(r,a):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,r,a,t);else for(var c=e.length-1;0<=c;c--)(s=e[c])&&(o=(l<3?s(o):3<l?s(r,a,o):s(r,a))||o);return 3<l&&o&&Object.defineProperty(r,a,o),o};Object.defineProperty(exports,"__esModule",{value:!0});var core_1=require("@angular/core"),RegularListComponent=function(){function e(){this.page="regular-purchase"}return e.prototype.ngOnInit=function(){$("#bottom-main-nav li").find("a").removeClass("current"),$("#bottom-main-nav li#regular-list").find("a").addClass("current")},e.prototype.checkpage=function(e){switch(window.scroll(0,0),console.log(e),e){case"regular-purchase":this.page="regular-purchase";break;case"regular-purchase-step1":this.page="regular-purchase-step1";break;case"regular-sell":this.page="regular-sell";break;case"regular-sell-step1":this.page="regular-sell-step1";break;case"regular-exchange":this.page="regular-exchange";break;case"regular-exchange-step1":this.page="regular-exchange-step1";break;case"all-list":this.page="all-list";break;case"signup2":this.page="signup2";break;default:this.page="regular-purchase",console.log(this.page)}},e=__decorate([core_1.Component({selector:"app-regular-list",templateUrl:"./regular-list.component.html",styleUrls:["./regular-list.component.scss"]})],e)}();exports.RegularListComponent=RegularListComponent;