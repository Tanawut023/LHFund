"use strict";var __decorate=this&&this.__decorate||function(e,o,r,t){var s,n=arguments.length,i=n<3?o:null===t?t=Object.getOwnPropertyDescriptor(o,r):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,o,r,t);else for(var c=e.length-1;0<=c;c--)(s=e[c])&&(i=(n<3?s(i):3<n?s(o,r,i):s(o,r))||i);return 3<n&&i&&Object.defineProperty(o,r,i),i};Object.defineProperty(exports,"__esModule",{value:!0});var core_1=require("@angular/core"),fontawesome_svg_core_1=require("@fortawesome/fontawesome-svg-core"),free_solid_svg_icons_1=require("@fortawesome/free-solid-svg-icons"),free_regular_svg_icons_1=require("@fortawesome/free-regular-svg-icons"),core_2=require("@angular/core");fontawesome_svg_core_1.library.add(free_solid_svg_icons_1.fas,free_regular_svg_icons_1.far);var LoginComponent=function(){function e(e){this.el=e,this.page="signin"}return e.prototype.ngOnInit=function(){},e.prototype.checkpage=function(e){switch(console.log(e),e){case"signin":this.page="signin";break;case"forgotpassword":this.page="forgotpassword";break;case"otp":this.page="otp";break;case"signup1":this.page="signup1";break;case"signup2":this.page="signup2"}},e=__decorate([core_1.Component({selector:"app-login",templateUrl:"./login.component.html",styleUrls:["./login.component.css"]}),core_2.Directive({selector:"[myMatchHeight]"})],e)}();exports.LoginComponent=LoginComponent;