"use strict";var __decorate=this&&this.__decorate||function(e,t,o,i){var r,n=arguments.length,s=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;0<=l;l--)(r=e[l])&&(s=(n<3?r(s):3<n?r(t,o,s):r(t,o))||s);return 3<n&&s&&Object.defineProperty(t,o,s),s};Object.defineProperty(exports,"__esModule",{value:!0});var core_1=require("@angular/core"),operators_1=require("rxjs/operators"),http_1=require("@angular/common/http"),file_saver_1=require("file-saver"),ConfirmationComponent=function(){function e(e,t){this.basedataservice=e,this.reportservice=t,this.userall={},this.userselect={},this.unitholderno="init"}return e.prototype.ngOnInit=function(){this.getSelectListUnitholder(),$("#mutual-tab-menu").find("li").removeClass("current"),$("#mutual-tab-menu").find("li#menu8").addClass("current"),$(".selectpicker").selectpicker()},e.prototype.onChange=function(){for(var e=0;e<this.userall.unitholderlist.length;e++)this.userall.unitholderlist[e].UnitholderId==this.unitholderno.UnitholderId&&(this.userselect=this.userall.unitholderlist[e])},e.prototype.getSelectListUnitholder=function(){var t=this;this.basedataservice.getSelectListUnitholder().pipe(operators_1.first()).subscribe(function(e){t.userall=e,t.unitholderno=t.userall.unitholderlist[0],t.userselect=t.userall.unitholderlist[0]},function(e){console.log(e)})},e.prototype.getEffectiveDate=function(){return this.model.year+"-"+this.model.month+"-"+this.model.day},e.prototype.OnSubmitd=function(){var e,t=this;this.loading=!0,console.log(this.model),void 0===this.model?(console.log("test"),e={UnitholderID:this.userselect.UnitholderId}):void 0!==this.model&&(console.log("test3"),e={UnitholderID:this.userselect.UnitholderId,EffectiveDate:this.getEffectiveDate()}),console.log(e),this.reportservice.confirmation(e).subscribe(function(e){console.log(e),t.confirmlist=e,t.loading=!1},function(e){console.log(e),t.loading=!1})},e.prototype.download=function(e){var t=e,o=this.confirmlist[t].ConfirmationName,i={UnitholderID:this.userselect.UnitholderId,OrderID:this.confirmlist[t].OrderID,TxType:this.type(this.confirmlist[t].TxType)};if(console.log(i),i instanceof http_1.HttpParams)return"application/x-www-form-urlencoded;charset=UTF-8";this.reportservice.confirmationdownload(i).subscribe(function(e){file_saver_1.saveAs(e,o)},function(e){console.log(e),console.log("here")})},e.prototype.type=function(e){switch(e){case"Subscription":return"SUB";case"Switching Out":return"SWO";case"Redemption":return"RDM";case"Switching In":return"SWI"}},e=__decorate([core_1.Component({selector:"app-confirmation",templateUrl:"./confirmation.component.html",styleUrls:["./confirmation.component.scss"]})],e)}();exports.ConfirmationComponent=ConfirmationComponent;