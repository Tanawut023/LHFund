"use strict";var __decorate=this&&this.__decorate||function(e,t,i,a){var r,n=arguments.length,o=n<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;0<=s;s--)(r=e[s])&&(o=(n<3?r(o):3<n?r(t,i,o):r(t,i))||o);return 3<n&&o&&Object.defineProperty(t,i,o),o};Object.defineProperty(exports,"__esModule",{value:!0});var core_1=require("@angular/core"),SuitabilityComponent=function(){function e(){this.page="over-view"}return e.prototype.ngOnInit=function(){$("#mutual-tab-menu").find("li").removeClass("current"),$("#mutual-tab-menu").find("li#menu2").addClass("current")},e.prototype.checkpage=function(e){switch(window.scroll(0,0),console.log(e),e){case"suitability-test":this.page="suitability-test";break;case"suitability-score":this.page="suitability-score";break;case"over-view":this.page="over-view";break;default:this.page="over-view",console.log(this.page)}},e.prototype.checktype=function(e){console.log(e.srcElement.attributes.id);var t=e.srcElement.attributes.id.nodeValue;console.log(t),"size10"==t?($("#personal").addClass("active"),$("#answerC1").find('input[type="radio"]').attr("disabled","disabled"),$("#answerC2").find('input[type="radio"]').attr("disabled","disabled"),$("#answerC2").find('input[type="text"]').attr("disabled","disabled")):($("#personal").removeClass("active"),$("#answerC1").find('input[type="radio"]').removeAttr("disabled"),$("#answerC2").find('input[type="radio"]').removeAttr("disabled"),$("#answerC2").find('input[type="text"]').removeAttr("disabled")),"size15"==t?($("#company").addClass("active"),$("#answerP1").find('input[type="radio"]').attr("disabled","disabled"),$("#answerP2").find('input[type="radio"]').attr("disabled","disabled")):($("#company").removeClass("active"),$("#answerP1").find('input[type="radio"]').removeAttr("disabled"),$("#answerP2").find('input[type="radio"]').removeAttr("disabled"))},e.prototype.disable=function(){console.log("test"),$("#answerC1").find('input[type="radio"]').attr("disabled","disabled"),$("#answerC2").find('input[type="radio"]').attr("disabled","disabled"),$("#answerP1").find('input[type="radio"]').attr("disabled","disabled"),$("#answerP2").find('input[type="radio"]').attr("disabled","disabled")},e.prototype.openmodal=function(){$("#disclaimer").modal({backdrop:"static",keyboard:!1,show:!0})},e=__decorate([core_1.Component({selector:"app-suitability",templateUrl:"./suitability.component.html",styleUrls:["./suitability.component.scss"]})],e)}();exports.SuitabilityComponent=SuitabilityComponent;