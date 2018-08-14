"use strict";var __decorate=this&&this.__decorate||function(e,s,t,a){var r,c=arguments.length,o=c<3?s:null===a?a=Object.getOwnPropertyDescriptor(s,t):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,s,t,a);else for(var i=e.length-1;0<=i;i--)(r=e[i])&&(o=(c<3?r(o):3<c?r(s,t,o):r(s,t))||o);return 3<c&&o&&Object.defineProperty(s,t,o),o};Object.defineProperty(exports,"__esModule",{value:!0});var core_1=require("@angular/core"),TransactionComponent=function(){function e(e,s,t){this.route=e,this.router=s,this.translate=t,this.page="purchase-over-view",t.addLangs(["th","en"])}return e.prototype.ngOnInit=function(){$("#bottom-main-nav li").find("a").removeClass("current"),$("#bottom-main-nav li#transaction").find("a").addClass("current")},e.prototype.checkpage=function(e){switch(window.scroll(0,0),console.log(e),e){case"purchase-over-view":this.page="purchase-over-view";break;case"sell":this.page="sell";break;case"purchase-step1":this.page="purchase-step1";break;case"purchase-step2":this.page="purchase-step2";break;case"purchase-view-list":this.page="purchase-view-list";break;case"sell-view-list":this.page="sell-view-list";break;case"exchange-view-list":this.page="exchange-view-list";break;case"purchase-for-sell-view-list":this.page="purchase-for-sell-view-list";break;case"sell-step1":this.page="sell-step1";break;case"sell-step2":this.page="sell-step2";break;case"exchange":this.page="exchange";break;case"exchange-step1":this.page="exchange-step1";break;case"exchange-step2":this.page="exchange-step2";break;case"purchase-for-sell":this.page="purchase-for-sell";break;case"purchase-for-sell-step1":this.page="purchase-for-sell-step1";break;case"purchase-for-sell-step2":this.page="purchase-for-sell-step2";break;default:this.page="purchase-over-view",console.log(this.page)}},e.prototype.navigate=function(e){e=e;console.log(e),this.router.navigate([e],{relativeTo:this.route})},e=__decorate([core_1.Component({selector:"app-transaction",templateUrl:"./transaction.component.html",styleUrls:["./transaction.component.scss"]})],e)}();exports.TransactionComponent=TransactionComponent;