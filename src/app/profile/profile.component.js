"use strict";var __decorate=this&&this.__decorate||function(e,t,i,a){var r,o=arguments.length,n=o<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;0<=s;s--)(r=e[s])&&(n=(o<3?r(n):3<o?r(t,i,n):r(t,i))||n);return 3<o&&n&&Object.defineProperty(t,i,n),n};Object.defineProperty(exports,"__esModule",{value:!0});var core_1=require("@angular/core"),ProfileComponent=function(){function e(){this.page="home",this.test="disabled"}return e.prototype.ngOnInit=function(){$("#bottom-main-nav li").find("a").removeClass("current"),$("#bottom-main-nav li#profile").find("a").addClass("current"),$("#answerC1").find('input[type="radio"]').attr("disabled","disabled"),$("#answerC2").find('input[type="radio"]').attr("disabled","disabled"),$('input[name="account-type"]').click(function(){console.log("ไม่ทำงานว่ะ")})},e.prototype.checkpage=function(e){switch(window.scroll(0,0),console.log(e),e){case"suitability":this.page="suitability";break;case"suitability-score":this.page="suitability-score";break;case"home":this.page="home";break;case"over-view":this.page="over-view";break;case"change-password":this.page="change-password";break;case"setting":this.page="setting";break;default:this.page="home",console.log(this.page)}},e.prototype.checktype=function(e){console.log(e.srcElement.attributes.id);var t=e.srcElement.attributes.id.nodeValue;console.log(t),"size10"==t?($("#personal").addClass("active"),$("#answerC1").find('input[type="radio"]').attr("disabled","disabled"),$("#answerC2").find('input[type="radio"]').attr("disabled","disabled"),$("#answerC2").find('input[type="text"]').attr("disabled","disabled")):($("#personal").removeClass("active"),$("#answerC1").find('input[type="radio"]').removeAttr("disabled"),$("#answerC2").find('input[type="radio"]').removeAttr("disabled"),$("#answerC2").find('input[type="text"]').removeAttr("disabled")),"size15"==t?($("#company").addClass("active"),$("#answerP1").find('input[type="radio"]').attr("disabled","disabled"),$("#answerP2").find('input[type="radio"]').attr("disabled","disabled")):($("#company").removeClass("active"),$("#answerP1").find('input[type="radio"]').removeAttr("disabled"),$("#answerP2").find('input[type="radio"]').removeAttr("disabled"))},e=__decorate([core_1.Component({selector:"app-profile",templateUrl:"./profile.component.html",styleUrls:["./profile.component.scss"]})],e)}();exports.ProfileComponent=ProfileComponent;