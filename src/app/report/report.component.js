"use strict";var __decorate=this&&this.__decorate||function(e,t,o,r){var a,n=arguments.length,s=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,r);else for(var c=e.length-1;0<=c;c--)(a=e[c])&&(s=(n<3?a(s):3<n?a(t,o,s):a(t,o))||s);return 3<n&&s&&Object.defineProperty(t,o,s),s};Object.defineProperty(exports,"__esModule",{value:!0});var core_1=require("@angular/core"),ReportComponent=function(){function e(){this.page="past-events"}return e.prototype.ngOnInit=function(){$("#bottom-main-nav li").find("a").removeClass("current"),$("#bottom-main-nav li#report").find("a").addClass("current")},e.prototype.checkpage=function(e){switch(console.log(e),window.scroll(0,0),e){case"confirmation":this.page="confirmation";break;case"past-events":this.page="past-events";break;case"not-available-list":this.page="not-available-list";break;case"summary":this.page="summary";break;case"receipt-history":this.page="receipt-history";break;default:this.page="past-events",console.log(this.page)}},e=__decorate([core_1.Component({selector:"app-report",templateUrl:"./report.component.html",styleUrls:["./report.component.scss"]})],e)}();exports.ReportComponent=ReportComponent;