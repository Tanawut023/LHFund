"use strict";var __decorate=this&&this.__decorate||function(e,t,o,n){var r,l=arguments.length,a=l<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var i=e.length-1;0<=i;i--)(r=e[i])&&(a=(l<3?r(a):3<l?r(t,o,a):r(t,o))||a);return 3<l&&a&&Object.defineProperty(t,o,a),a};Object.defineProperty(exports,"__esModule",{value:!0});var core_1=require("@angular/core"),NotAvailableListComponent=function(){function e(){}return e.prototype.ngOnInit=function(){$("#mutual-tab-menu").find("li").removeClass("current"),$("#mutual-tab-menu").find("li#menu7").addClass("current")},e=__decorate([core_1.Component({selector:"app-not-available-list",templateUrl:"./not-available-list.component.html",styleUrls:["./not-available-list.component.scss"]})],e)}();exports.NotAvailableListComponent=NotAvailableListComponent;