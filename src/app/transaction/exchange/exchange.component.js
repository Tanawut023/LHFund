"use strict";var __decorate=this&&this.__decorate||function(e,t,o,n){var i,s=arguments.length,r=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;0<=a;a--)(i=e[a])&&(r=(s<3?i(r):3<s?i(t,o,r):i(t,o))||r);return 3<s&&r&&Object.defineProperty(t,o,r),r};Object.defineProperty(exports,"__esModule",{value:!0});var core_1=require("@angular/core"),operators_1=require("rxjs/operators"),http_1=require("@angular/common/http"),dateformat_1=require("../../Share/dateformat"),forms_1=require("@angular/forms"),ExchangeComponent=function(){function e(e,t,o,n){this.translate=e,this.basedataservice=t,this.orderservice=o,this.fb=n,this.page="exchange",this.userall={},this.userselect={},this.unitholderno="N/A",this.unitholderswitching={},this.fundlist="N/A",this.banklist="N/A",this.holdingbalancelist="N/A",this.currentdate=dateformat_1.datethai,this.amount=3,this.Type="",this.mask=[/\d/,/\d/,/\d/,",",/\d/,/\d/,/\d/,",",/\d/,/\d/,/\d/],this.nolist=!1,this.Islevel=!1,this.Isprotect=!1,this.loading=!1}return e.prototype.ngOnInit=function(){this.getSelectListUnitholder(),this.createFormValidate(),this._originalData=this.formexchange.value,$("#mutual-tab-menu").find("li").removeClass("current"),$("#mutual-tab-menu").find("li#menu3").addClass("current");var e=new Date,t=new Date(e.getFullYear(),e.getMonth(),e.getDate()+1);console.log(t),this.minDate={year:t.getFullYear(),month:t.getMonth()+1,day:t.getDate()},this.datepick={year:e.getFullYear(),month:e.getMonth()+1,day:e.getDate()}},e.prototype.checkpage=function(e){switch(window.scroll(0,0),console.log(e),e){case"exchange":this.page="exchange",this.getorderinfolist(),this.reset();break;case"exchange-step1":this.formexchange.controls.date.value&&(this.date=this.formexchange.controls.date.value.year+"-"+this.formexchange.controls.date.value.month+"-"+this.formexchange.controls.date.value.day,this.date=dateformat_1.formatdatethai(this.date)),this.resultsubmit.messages[0]&&(this.message=this.resultsubmit.messages[0],setTimeout(function(){$("#message").modal({backdrop:"static",keyboard:!1,show:!0})},100)),this.page="exchange-step1";break;case"exchange-step2":this.page="exchange-step2",this.fundlistonChange();break;case"exchange-view-list":this.page="exchange-view-list";break;default:this.page="exchange",console.log(this.page)}},e.prototype.onChange=function(){for(var e=0;e<this.userall.unitholderlist.length;e++)this.userall.unitholderlist[e].UnitholderId==this.unitholderno.UnitholderId&&(this.userselect=this.userall.unitholderlist[e],this.getselectlistfundlistandbankaccount(),this.getorderinfolist())},e.prototype.getSelectListUnitholder=function(){var t=this;this.basedataservice.getSelectListUnitholder().pipe(operators_1.first()).subscribe(function(e){console.log(e),setTimeout(function(){$(".selectpicker").selectpicker("refresh")},100),e&&(t.userall=e,t.unitholderno=t.userall.unitholderlist[0],t.userselect=t.userall.unitholderlist[0],t.getselectlistfundlistandbankaccount(),t.getorderinfolist())},function(e){console.log(e)})},e.prototype.getselectlistfundlistandbankaccount=function(){var t=this,e=(new http_1.HttpParams).set("unitholderid",this.userselect.UnitholderId);console.log(e),this.orderservice.changeunitholderswitching(e).pipe(operators_1.first()).subscribe(function(e){setTimeout(function(){$(".selectpicker").selectpicker("refresh")},100),e&&(console.log(e),t.unitholderswitching=e)},function(e){console.log(e)})},e.prototype.fundlistonChange=function(){this.getfundswitchingdestination()},e.prototype.getorderinfolist=function(){var a=this;this.orderswitchinglist=[];var e={UnitHolderID:this.userselect.UnitholderId,TxType:"Switching"};console.log(e),this.orderservice.getorderinfolist(e).pipe(operators_1.first()).subscribe(function(e){if(console.log(e),a.orderswitchinglist=e,a.nolist=!1,a.orderswitchinglist.orderinfolist){var t=new Array,o=(new Array,new Array,new Array,"");a.nolist=!1;for(var n=0;n<a.orderswitchinglist.orderinfolist.length;n++){if(a.orderswitchinglist.orderinfolist[n].ReferenceNo!=o){var i,s,r=1;console.log("1")}"Switching In"==a.orderswitchinglist.orderinfolist[n].TxType?(i=a.orderswitchinglist.orderinfolist[n],console.log("2")):"Switching Out"==a.orderswitchinglist.orderinfolist[n].TxType&&(s=a.orderswitchinglist.orderinfolist[n],console.log("3")),"Switching In"!=a.orderswitchinglist.orderinfolist[n].TxType&&"Switching Out"!=a.orderswitchinglist.orderinfolist[n].TxType||"Initial"!=a.orderswitchinglist.orderinfolist[n].OrderStatus||(0,a.nolist=!0,console.log("4")),2==r&&(console.log("5"),t.push({FundSource:s.FundName,funddestination:i.FundName,FundSourceCode:s.FundCode,funddestinationCode:i.FundCode,Amount:i.OrderAmount,Unit:i.OrderUnit,OrderDate:i.OrderDate,OrderTime:i.OrderTime,EffectiveDateSource:s.EffectiveDate,EffectiveDatedestiantion:i.EffectiveDate,UnitHolderID:s.UnitHolderID,OrderID:s.OrderID})),o=a.orderswitchinglist.orderinfolist[n].ReferenceNo,"Switching In"!=a.orderswitchinglist.orderinfolist[n].TxType&&"Switching Out"!=a.orderswitchinglist.orderinfolist[n].TxType||(r++,console.log("6"))}a.orderswitchinglist=t,console.log(a.orderswitchinglist)}},function(e){console.log(e),a.message=e.error.messages,$("#message").modal({backdrop:"static",keyboard:!1,show:!0})})},e.prototype.getfundswitchingdestination=function(){var t=this,e={UnitHolderID:this.userselect.UnitholderId,FundID:this.formexchange.controls.fundsource.value.FundID};console.log(e),this.orderservice.changefundswitchingsource(e).pipe(operators_1.first()).subscribe(function(e){console.log(e),t.funddestinationlist=e,"exchange-step2"!==t.page&&(setTimeout(function(){$(".selectpicker").selectpicker("refresh")},100),t.Type="",t.formexchange.controls.amount.setValue("",{onlySelf:!0}),t.formexchange.controls.type.setValue("",{onlySelf:!0})),t.funddestinationlist.fundswitchingdestination&&"exchange-step2"!==t.page&&t.formexchange.controls.funddestination.value&&t.formexchange.controls.funddestination.setValue("",{onlySelf:!0})},function(e){console.log(e),t.message=e.error.messages,$("#message").modal({backdrop:"static",keyboard:!1,show:!0})})},e.prototype.createFormValidate=function(){this.formexchange=this.fb.group({amount:[null,[forms_1.Validators.required]],date:[null],type:["",[forms_1.Validators.required]],funddestination:["",[forms_1.Validators.required]],fundsource:["",[forms_1.Validators.required]]})},e.prototype.validateAllFormFields=function(o){var n=this;Object.keys(o.controls).forEach(function(e){var t=o.get(e);t instanceof forms_1.FormControl?t.markAsTouched({onlySelf:!0}):t instanceof forms_1.FormGroup&&n.validateAllFormFields(t)})},e.prototype.isFieldNotValid=function(e){return!this.formexchange.get(e).valid&&this.formexchange.get(e).touched},e.prototype.ValidatorDisplayCss=function(e){return{"has-danger":this.isFieldNotValid(e)}},e.prototype.numberOnly=function(e){var t=e.which?e.which:e.keyCode;return!(31<t&&(t<48||57<t))},e.prototype.notmorethan=function(){if(console.log(this.formexchange.controls.amount.value),this.formexchange.controls.amount.value){var e=this.formexchange.controls.amount.value;e=e.replace(",",""),e=parseFloat(e),console.log(e)}return"Amount"==this.Type?e>this.funddestinationlist.availablebalance.AvailableAmount?(console.log("false"),this.formexchange.controls.amount.setValue(this.funddestinationlist.availablebalance.AvailableAmount,{onlySelf:!0}),!1):(console.log("true"),!0):"Unit"==this.Type?e>this.funddestinationlist.availablebalance.AvailableUnit?(console.log("false"),this.formexchange.controls.amount.setValue(this.funddestinationlist.availablebalance.AvailableUnit,{onlySelf:!0}),!1):(console.log("true"),!0):(this.formexchange.controls.type.markAsTouched(),!1)},e.prototype.tofix=function(e){if(console.log(e),"Amount"==this.Type)e&&(t=(t=e).replace(",",""),o=(o=parseFloat(t).toFixed(2)).toString().replace(/\B(?=(\f{3})+(?!\f))/g,","),console.log(o),this.formexchange.controls.amount.setValue(o,{onlySelf:!0}));else if("Unit"==this.Type&&e){var t;t=(t=e).replace(",","");var o,n=(o=parseFloat(t).toFixed(4)).toString().split(".");n[0]=n[0].replace(/\B(?=(\d{3})+(?!\d))/g,","),console.log(o),this.formexchange.controls.amount.setValue(n.join("."),{onlySelf:!0})}},e.prototype.notfill=function(e){var t=e.which?e.which:e.keyCode;return""==this.Type?(this.formexchange.controls.type.markAsTouched(),!1):!(31<t&&(t<48||57<t)&&46!==t)},e.prototype.onChangeType=function(){if(console.log(this.formexchange.controls.type.value),this.Type=this.formexchange.controls.type.value,this.formexchange.controls.amount.value){var e=this.formexchange.controls.amount.value;if(e=e.replace(",",""),e=parseFloat(e),"Amount"==this.Type){var t=e.toFixed(2);if(this.formexchange.controls.fundsource.value)if(e>this.funddestinationlist.availablebalance.AvailableAmount)t=(t=parseFloat(this.funddestinationlist.availablebalance.AvailableAmount).toFixed(2)).toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),this.formexchange.controls.amount.setValue(t,{onlySelf:!0});else this.formexchange.controls.amount.setValue(t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),{onlySelf:!0});else this.formexchange.controls.amount.setValue(t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),{onlySelf:!0})}else if("Unit"==this.Type){t=e.toFixed(4);if(this.formexchange.controls.fundsource.value)if(e>this.funddestinationlist.availablebalance.AvailableUnit)(o=(t=parseFloat(this.funddestinationlist.availablebalance.AvailableUnit).toFixed(4)).toString().split("."))[0]=o[0].replace(/\B(?=(\d{3})+(?!\d))/g,","),this.formexchange.controls.amount.setValue(o.join("."),{onlySelf:!0});else(o=t.toString().split("."))[0]=o[0].replace(/\B(?=(\d{3})+(?!\d))/g,","),this.formexchange.controls.amount.setValue(o.join("."),{onlySelf:!0});else(o=t.toString().split("."))[0]=o[0].replace(/\B(?=(\d{3})+(?!\d))/g,","),this.formexchange.controls.amount.setValue(o.join("."),{onlySelf:!0})}}else if("All"==this.Type&&this.formexchange.controls.fundsource.value){var o;if(this.funddestinationlist.availablebalance.AvailableUnit)(o=(t=parseFloat(this.funddestinationlist.availablebalance.AvailableUnit).toFixed(4)).toString().split("."))[0]=o[0].replace(/\B(?=(\d{3})+(?!\d))/g,","),this.formexchange.controls.amount.setValue(o.join("."),{onlySelf:!0})}},e.prototype.onSubmited=function(){var t=this;if(console.log(this.formexchange),this.Islevel=!1,this.Isprotect=!1,this.loading=!0,1==this.userselect.RiskLevelExpire)console.log("expire"),this.loading=!1,$("#expiremodal").modal({backdrop:"static",keyboard:!1,show:!0});else if(this.formexchange.valid){var e;if(this.isNotValid=!1,this.formexchange.controls.amount.value){var o=this.formexchange.controls.amount.value;o=o.replace(",",""),o=parseFloat(o),console.log(o)}this.formexchange.controls.date.value?(this.date=this.formexchange.controls.date.value.year+"-"+this.formexchange.controls.date.value.month+"-"+this.formexchange.controls.date.value.day,this.date=dateformat_1.boostrapdatepicker(this.date),e="Amount"==this.Type?{UnitHolderID:this.userselect.UnitholderId,FundID:this.formexchange.controls.fundsource.value.FundID,CounterFundID:this.formexchange.controls.funddestination.value.FundID,TxType:"Switching",OrderUnitType:"Amount",OrderUnit:0,OrderBankAccountID:0,OrderAmount:o,PaymentMethod:"Cash",orderdate:this.date}:"Unit"==this.Type?{UnitHolderID:this.userselect.UnitholderId,FundID:this.formexchange.controls.fundsource.value.FundID,CounterFundID:this.formexchange.controls.funddestination.value.FundID,TxType:"Switching",OrderUnitType:"Unit",OrderUnit:o,OrderBankAccountID:0,OrderAmount:0,PaymentMethod:"Cash",orderdate:this.date}:{UnitHolderID:this.userselect.UnitholderId,FundID:this.formexchange.controls.fundsource.value.FundID,CounterFundID:this.formexchange.controls.funddestination.value.FundID,TxType:"Switching",OrderUnitType:"All",OrderUnit:this.funddestinationlist.availablebalance.AvailableUnit,OrderBankAccountID:0,OrderAmount:0,PaymentMethod:"Cash",orderdate:this.date}):e="Amount"==this.Type?{UnitHolderID:this.userselect.UnitholderId,FundID:this.formexchange.controls.fundsource.value.FundID,CounterFundID:this.formexchange.controls.funddestination.value.FundID,TxType:"Switching",OrderUnitType:"Amount",OrderUnit:0,OrderBankAccountID:0,OrderAmount:o,PaymentMethod:"Cash",orderdate:null}:"Unit"==this.Type?{UnitHolderID:this.userselect.UnitholderId,FundID:this.formexchange.controls.fundsource.value.FundID,CounterFundID:this.formexchange.controls.funddestination.value.FundID,TxType:"Switching",OrderUnitType:"Unit",OrderUnit:o,OrderBankAccountID:0,OrderAmount:0,PaymentMethod:"Cash",orderdate:null}:{UnitHolderID:this.userselect.UnitholderId,FundID:this.formexchange.controls.fundsource.value.FundID,CounterFundID:this.formexchange.controls.funddestination.value.FundID,TxType:"Switching",OrderUnitType:"All",OrderUnit:this.funddestinationlist.availablebalance.AvailableUnit,OrderBankAccountID:0,OrderAmount:0,PaymentMethod:"Cash",orderdate:null},console.log(e),this.orderservice.submitorder(e).pipe(operators_1.first()).subscribe(function(e){console.log(e),t.resultsubmit=e,t.loading=!1,t.checkexpireandlevel()},function(e){console.log(e),t.loading=!1,t.message=e.error.messages,$("#message").modal({backdrop:"static",keyboard:!1,show:!0})})}else this.isNotValid=!0,this.validateAllFormFields(this.formexchange),this.loading=!1},e.prototype.confirmswitching=function(){var t=this;this.loading=!0,this.orderservice.confirmorder(this.resultsubmit.data).pipe(operators_1.first()).subscribe(function(e){console.log(e),t.loading=!1,t.checkpage("exchange-step2"),t.message="ทำรายการสำเร็จ",$("#message").modal({backdrop:"static",keyboard:!1,show:!0})},function(e){console.log(e),t.loading=!1,t.message=e.error.messages,$("#message").modal({backdrop:"static",keyboard:!1,show:!0})})},e.prototype.checkexpireandlevel=function(){var t=this;this.loading=!0;var e={UnitHolderID:this.userselect.UnitholderId,FundID:this.formexchange.controls.funddestination.value.FundID};console.log(e),this.orderservice.changefundswitchingdestination(e).pipe(operators_1.first()).subscribe(function(e){console.log(e),t.loading=!1,e.messages&&(t.message=e.messages,t.Islevel=!0)},function(e){console.log(e),t.message=e.error.messages,t.loading=!1,$("#message").modal({backdrop:"static",keyboard:!1,show:!0})}),setTimeout(function(){t.Islevel&&(console.log("level"),$("#risklevel").modal({backdrop:"static",keyboard:!1,show:!0})),"N"==t.formexchange.controls.funddestination.value.isFullyHedge&&t.Islevel&&(console.log("level+protect"),t.Isprotect=!0,$("#risklevel").modal({backdrop:"static",keyboard:!1,show:!0})),"N"===t.formexchange.controls.funddestination.value.isFullyHedge||t.Islevel||(console.log("nothing"),t.checkpage("exchange-step1"))},100)},e.prototype.reset=function(){console.log("reset"),this.Type="",this.funddestinationlist="",this.createFormValidate(),this.getselectlistfundlistandbankaccount()},e.prototype.modaldeleteorder=function(e){this.deletedOrder=e,console.log(this.deletedOrder),$("#delete").modal({backdrop:"static",keyboard:!1,show:!0})},e.prototype.deleteorder=function(){var t=this,e={UnitHolderID:this.deletedOrder.UnitHolderID,OrderID:this.deletedOrder.OrderID};console.log(e),this.orderservice.cancelorder(e).pipe(operators_1.first()).subscribe(function(e){console.log(e),t.deletedOrder=[],t.getorderinfolist(),$("#delete").modal("toggle"),t.message="ลบรายการสำเร็จ",$("#message").modal({backdrop:"static",keyboard:!1,show:!0})},function(e){console.log(e),$("#delete").modal("toggle"),t.message=e.error.messages,$("#message").modal({backdrop:"static",keyboard:!1,show:!0})})},e.prototype.print=function(){window.focus(),window.print()},e.prototype.resetdate=function(){this.formexchange.controls.date.reset()},e=__decorate([core_1.Component({selector:"app-exchange",templateUrl:"./exchange.component.html",styleUrls:["./exchange.component.scss"]})],e)}();exports.ExchangeComponent=ExchangeComponent;