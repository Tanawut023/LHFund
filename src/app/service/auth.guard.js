"use strict";var __decorate=this&&this.__decorate||function(e,t,r,o){var c,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,o);else for(var u=e.length-1;0<=u;u--)(c=e[u])&&(a=(n<3?c(a):3<n?c(t,r,a):c(t,r))||a);return 3<n&&a&&Object.defineProperty(t,r,a),a};Object.defineProperty(exports,"__esModule",{value:!0});var core_1=require("@angular/core"),AuthGuard=function(){function e(e){this.router=e}return e.prototype.canActivate=function(e,t){return!!localStorage.getItem("currentUser")||(this.router.navigate(["/login"],{queryParams:{returnUrl:t.url}}),!1)},e.prototype.canActivateChild=function(e,t){return this.canActivate(e,t)},e=__decorate([core_1.Injectable()],e)}();exports.AuthGuard=AuthGuard;