"use strict";var __extends=this&&this.__extends||function(){var o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])};return function(t,e){function r(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}(),__decorate=this&&this.__decorate||function(t,e,r,o){var n,u=arguments.length,i=u<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,r,o);else for(var a=t.length-1;0<=a;a--)(n=t[a])&&(i=(u<3?n(i):3<u?n(e,r,i):n(e,r))||i);return 3<u&&i&&Object.defineProperty(e,r,i),i};Object.defineProperty(exports,"__esModule",{value:!0});var ng_bootstrap_1=require("@ng-bootstrap/ng-bootstrap"),core_1=require("@angular/core"),util_1=require("@ng-bootstrap/ng-bootstrap/util/util"),NgbDateCustomParserFormatter=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return __extends(e,t),e.prototype.parse=function(t){if(t){var e=t.trim().split("/");if(1===e.length&&util_1.isNumber(e[0]))return{day:util_1.toInteger(e[0]),month:null,year:null};if(2===e.length&&util_1.isNumber(e[0])&&util_1.isNumber(e[1]))return{day:util_1.toInteger(e[0]),month:util_1.toInteger(e[1]),year:null};if(3===e.length&&util_1.isNumber(e[0])&&util_1.isNumber(e[1])&&util_1.isNumber(e[2]))return{day:util_1.toInteger(e[0]),month:util_1.toInteger(e[1]),year:util_1.toInteger(e[2])}}return null},e.prototype.format=function(t){return t?(util_1.isNumber(t.day)?util_1.padNumber(t.day):"")+"/"+(util_1.isNumber(t.month)?util_1.padNumber(t.month):"")+"/"+t.year:""},e=__decorate([core_1.Injectable()],e)}(ng_bootstrap_1.NgbDateParserFormatter);exports.NgbDateCustomParserFormatter=NgbDateCustomParserFormatter;var now=new Date,thday=new Array("อาทิตย์","จันทร์","อังคาร","พุธ","พฤหัส","ศุกร์","เสาร์"),thmonth=new Array("มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน","กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม");exports.datethai=now.getDate()+" "+thmonth[now.getMonth()]+" "+(0+now.getFullYear()+543);