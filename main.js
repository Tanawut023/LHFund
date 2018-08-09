(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Share/dateformat.ts":
/*!*************************************!*\
  !*** ./src/app/Share/dateformat.ts ***!
  \*************************************/
/*! exports provided: datethai */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "datethai", function() { return datethai; });
var datethai;
var now = new Date();
var thday = new Array("อาทิตย์", "จันทร์", "อังคาร", "พุธ", "พฤหัส", "ศุกร์", "เสาร์");
var thmonth = new Array("มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม");
// datethai ="วัน" + thday[now.getDay()]+ "ที่ "+ now.getDate()+ " " + thmonth[now.getMonth()]+ " " + (0+now.getFullYear()+543);
datethai = now.getDate() + " " + thmonth[now.getMonth()] + " " + (0 + now.getFullYear() + 543);


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _myport_myport_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./myport/myport.component */ "./src/app/myport/myport.component.ts");
/* harmony import */ var _transaction_transaction_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./transaction/transaction.component */ "./src/app/transaction/transaction.component.ts");
/* harmony import */ var _transaction_purchase_purchase_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./transaction/purchase/purchase.component */ "./src/app/transaction/purchase/purchase.component.ts");
/* harmony import */ var _transaction_sell_sell_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./transaction/sell/sell.component */ "./src/app/transaction/sell/sell.component.ts");
/* harmony import */ var _transaction_exchange_exchange_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./transaction/exchange/exchange.component */ "./src/app/transaction/exchange/exchange.component.ts");
/* harmony import */ var _transaction_purchase_for_sell_purchase_for_sell_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./transaction/purchase-for-sell/purchase-for-sell.component */ "./src/app/transaction/purchase-for-sell/purchase-for-sell.component.ts");
/* harmony import */ var _rmf_ltf_rmf_ltf_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./rmf-ltf/rmf-ltf.component */ "./src/app/rmf-ltf/rmf-ltf.component.ts");
/* harmony import */ var _rmf_ltf_conclusion_conclusion_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./rmf-ltf/conclusion/conclusion.component */ "./src/app/rmf-ltf/conclusion/conclusion.component.ts");
/* harmony import */ var _rmf_ltf_certificate_rmf_certificate_rmf_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./rmf-ltf/certificate-rmf/certificate-rmf.component */ "./src/app/rmf-ltf/certificate-rmf/certificate-rmf.component.ts");
/* harmony import */ var _rmf_ltf_certificate_ltf_certificate_ltf_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./rmf-ltf/certificate-ltf/certificate-ltf.component */ "./src/app/rmf-ltf/certificate-ltf/certificate-ltf.component.ts");
/* harmony import */ var _rmf_ltf_ltf_condition_complete_ltf_condition_complete_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./rmf-ltf/ltf-condition-complete/ltf-condition-complete.component */ "./src/app/rmf-ltf/ltf-condition-complete/ltf-condition-complete.component.ts");
/* harmony import */ var _regular_list_regular_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./regular-list/regular-list.component */ "./src/app/regular-list/regular-list.component.ts");
/* harmony import */ var _regular_list_regular_purchase_regular_purchase_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./regular-list/regular-purchase/regular-purchase.component */ "./src/app/regular-list/regular-purchase/regular-purchase.component.ts");
/* harmony import */ var _regular_list_regular_sell_regular_sell_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./regular-list/regular-sell/regular-sell.component */ "./src/app/regular-list/regular-sell/regular-sell.component.ts");
/* harmony import */ var _regular_list_regular_exchange_regular_exchange_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./regular-list/regular-exchange/regular-exchange.component */ "./src/app/regular-list/regular-exchange/regular-exchange.component.ts");
/* harmony import */ var _regular_list_all_list_all_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./regular-list/all-list/all-list.component */ "./src/app/regular-list/all-list/all-list.component.ts");
/* harmony import */ var _report_report_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./report/report.component */ "./src/app/report/report.component.ts");
/* harmony import */ var _report_past_events_past_events_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./report/past-events/past-events.component */ "./src/app/report/past-events/past-events.component.ts");
/* harmony import */ var _report_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./report/confirmation/confirmation.component */ "./src/app/report/confirmation/confirmation.component.ts");
/* harmony import */ var _report_not_available_list_not_available_list_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./report/not-available-list/not-available-list.component */ "./src/app/report/not-available-list/not-available-list.component.ts");
/* harmony import */ var _report_today_list_today_list_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./report/today-list/today-list.component */ "./src/app/report/today-list/today-list.component.ts");
/* harmony import */ var _report_summary_summary_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./report/summary/summary.component */ "./src/app/report/summary/summary.component.ts");
/* harmony import */ var _report_receipt_history_receipt_history_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./report/receipt-history/receipt-history.component */ "./src/app/report/receipt-history/receipt-history.component.ts");
/* harmony import */ var _report_type_type_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./report/type/type.component */ "./src/app/report/type/type.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _profile_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./profile/edit-profile/edit-profile.component */ "./src/app/profile/edit-profile/edit-profile.component.ts");
/* harmony import */ var _profile_suitability_suitability_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./profile/suitability/suitability.component */ "./src/app/profile/suitability/suitability.component.ts");
/* harmony import */ var _profile_changepassword_changepassword_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./profile/changepassword/changepassword.component */ "./src/app/profile/changepassword/changepassword.component.ts");
/* harmony import */ var _profile_setting_setting_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./profile/setting/setting.component */ "./src/app/profile/setting/setting.component.ts");
/* harmony import */ var _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./pagenotfound/pagenotfound.component */ "./src/app/pagenotfound/pagenotfound.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//transaction





//rmf-ltf





//regularlist





//report








//profile






var routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'myport', component: _myport_myport_component__WEBPACK_IMPORTED_MODULE_4__["MyportComponent"] },
    {
        path: 'transaction', component: _transaction_transaction_component__WEBPACK_IMPORTED_MODULE_5__["TransactionComponent"],
        children: [
            { path: '', component: _transaction_purchase_purchase_component__WEBPACK_IMPORTED_MODULE_6__["PurchaseComponent"], pathMatch: 'full' },
            { path: 'sell', component: _transaction_sell_sell_component__WEBPACK_IMPORTED_MODULE_7__["SellComponent"] },
            { path: 'exchange', component: _transaction_exchange_exchange_component__WEBPACK_IMPORTED_MODULE_8__["ExchangeComponent"] },
            { path: 'purchase-for-sell', component: _transaction_purchase_for_sell_purchase_for_sell_component__WEBPACK_IMPORTED_MODULE_9__["PurchaseForSellComponent"] },
            { path: '**', component: _transaction_purchase_purchase_component__WEBPACK_IMPORTED_MODULE_6__["PurchaseComponent"] },
        ]
    },
    {
        path: 'rmf-ltf', component: _rmf_ltf_rmf_ltf_component__WEBPACK_IMPORTED_MODULE_10__["RmfLtfComponent"],
        children: [
            { path: '', component: _rmf_ltf_ltf_condition_complete_ltf_condition_complete_component__WEBPACK_IMPORTED_MODULE_14__["LtfConditionCompleteComponent"], pathMatch: 'full' },
            { path: 'conclusion', component: _rmf_ltf_conclusion_conclusion_component__WEBPACK_IMPORTED_MODULE_11__["ConclusionComponent"] },
            { path: 'certificate-rmf', component: _rmf_ltf_certificate_rmf_certificate_rmf_component__WEBPACK_IMPORTED_MODULE_12__["CertificateRmfComponent"] },
            { path: 'certificate-ltf', component: _rmf_ltf_certificate_ltf_certificate_ltf_component__WEBPACK_IMPORTED_MODULE_13__["CertificateLtfComponent"] },
            { path: '**', component: _rmf_ltf_ltf_condition_complete_ltf_condition_complete_component__WEBPACK_IMPORTED_MODULE_14__["LtfConditionCompleteComponent"] },
        ]
    },
    {
        path: 'regular-list', component: _regular_list_regular_list_component__WEBPACK_IMPORTED_MODULE_15__["RegularListComponent"],
        children: [
            { path: '', component: _regular_list_regular_purchase_regular_purchase_component__WEBPACK_IMPORTED_MODULE_16__["RegularPurchaseComponent"], pathMatch: 'full' },
            { path: 'regular-sell', component: _regular_list_regular_sell_regular_sell_component__WEBPACK_IMPORTED_MODULE_17__["RegularSellComponent"] },
            { path: 'regular-exchange', component: _regular_list_regular_exchange_regular_exchange_component__WEBPACK_IMPORTED_MODULE_18__["RegularExchangeComponent"] },
            { path: 'all-list', component: _regular_list_all_list_all_list_component__WEBPACK_IMPORTED_MODULE_19__["AllListComponent"] },
            { path: '**', component: _regular_list_regular_purchase_regular_purchase_component__WEBPACK_IMPORTED_MODULE_16__["RegularPurchaseComponent"] },
        ]
    },
    {
        path: 'report', component: _report_report_component__WEBPACK_IMPORTED_MODULE_20__["ReportComponent"],
        children: [
            { path: '', component: _report_receipt_history_receipt_history_component__WEBPACK_IMPORTED_MODULE_26__["ReceiptHistoryComponent"], pathMatch: 'full' },
            { path: 'confirmation', component: _report_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_22__["ConfirmationComponent"] },
            { path: 'not-available-list', component: _report_not_available_list_not_available_list_component__WEBPACK_IMPORTED_MODULE_23__["NotAvailableListComponent"] },
            { path: 'today-list', component: _report_today_list_today_list_component__WEBPACK_IMPORTED_MODULE_24__["TodayListComponent"] },
            { path: 'summary', component: _report_summary_summary_component__WEBPACK_IMPORTED_MODULE_25__["SummaryComponent"] },
            { path: 'past-events', component: _report_past_events_past_events_component__WEBPACK_IMPORTED_MODULE_21__["PastEventsComponent"] },
            { path: 'type', component: _report_type_type_component__WEBPACK_IMPORTED_MODULE_27__["TypeComponent"] },
            { path: '**', component: _report_receipt_history_receipt_history_component__WEBPACK_IMPORTED_MODULE_26__["ReceiptHistoryComponent"] },
        ]
    },
    {
        path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_28__["ProfileComponent"],
        children: [
            { path: '', component: _profile_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_29__["EditProfileComponent"], pathMatch: 'full' },
            { path: 'suitability', component: _profile_suitability_suitability_component__WEBPACK_IMPORTED_MODULE_30__["SuitabilityComponent"] },
            { path: 'change-password', component: _profile_changepassword_changepassword_component__WEBPACK_IMPORTED_MODULE_31__["ChangepasswordComponent"] },
            { path: 'setting', component: _profile_setting_setting_component__WEBPACK_IMPORTED_MODULE_32__["SettingComponent"] },
            { path: '**', component: _profile_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_29__["EditProfileComponent"] },
        ]
    },
    { path: '**', component: _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_33__["PagenotfoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-header></app-header> -->\r\n<app-canvas-menu></app-canvas-menu>\r\n<router-outlet (activate)=\"onActivate($event)\" ></router-outlet>\r\n<!-- <app-footer></app-footer> -->"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent.prototype.onActivate = function (event) {
        // let scrollToTop = window.setInterval(() => {
        //     let pos = window.pageYOffset;
        //     if (pos > 0) {
        //         window.scrollTo(0, pos - 20); // how far to scroll on each step
        //     } else {
        //         window.clearInterval(scrollToTop);
        //     }
        // }, 16);
        window.scroll(0, 0);
        //or document.body.scrollTop = 0;
        //or document.querySelector('body').scrollTo(0,0)
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _header_login_header_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./header-login/header-login.component */ "./src/app/header-login/header-login.component.ts");
/* harmony import */ var _myport_myport_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./myport/myport.component */ "./src/app/myport/myport.component.ts");
/* harmony import */ var angular_highcharts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular-highcharts */ "./node_modules/angular-highcharts/angular-highcharts.es5.js");
/* harmony import */ var _transaction_transaction_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./transaction/transaction.component */ "./src/app/transaction/transaction.component.ts");
/* harmony import */ var _rmf_ltf_rmf_ltf_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./rmf-ltf/rmf-ltf.component */ "./src/app/rmf-ltf/rmf-ltf.component.ts");
/* harmony import */ var _regular_list_regular_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./regular-list/regular-list.component */ "./src/app/regular-list/regular-list.component.ts");
/* harmony import */ var _report_report_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./report/report.component */ "./src/app/report/report.component.ts");
/* harmony import */ var _myport_myport_menu_myport_menu_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./myport/myport-menu/myport-menu.component */ "./src/app/myport/myport-menu/myport-menu.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _profile_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./profile/edit-profile/edit-profile.component */ "./src/app/profile/edit-profile/edit-profile.component.ts");
/* harmony import */ var _profile_suitability_suitability_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./profile/suitability/suitability.component */ "./src/app/profile/suitability/suitability.component.ts");
/* harmony import */ var _canvas_menu_canvas_menu_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./canvas-menu/canvas-menu.component */ "./src/app/canvas-menu/canvas-menu.component.ts");
/* harmony import */ var _profile_setting_setting_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./profile/setting/setting.component */ "./src/app/profile/setting/setting.component.ts");
/* harmony import */ var _profile_changepassword_changepassword_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./profile/changepassword/changepassword.component */ "./src/app/profile/changepassword/changepassword.component.ts");
/* harmony import */ var _regular_list_regular_purchase_regular_purchase_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./regular-list/regular-purchase/regular-purchase.component */ "./src/app/regular-list/regular-purchase/regular-purchase.component.ts");
/* harmony import */ var _regular_list_regular_sell_regular_sell_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./regular-list/regular-sell/regular-sell.component */ "./src/app/regular-list/regular-sell/regular-sell.component.ts");
/* harmony import */ var _regular_list_regular_exchange_regular_exchange_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./regular-list/regular-exchange/regular-exchange.component */ "./src/app/regular-list/regular-exchange/regular-exchange.component.ts");
/* harmony import */ var _regular_list_all_list_all_list_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./regular-list/all-list/all-list.component */ "./src/app/regular-list/all-list/all-list.component.ts");
/* harmony import */ var _rmf_ltf_conclusion_conclusion_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./rmf-ltf/conclusion/conclusion.component */ "./src/app/rmf-ltf/conclusion/conclusion.component.ts");
/* harmony import */ var _rmf_ltf_certificate_rmf_certificate_rmf_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./rmf-ltf/certificate-rmf/certificate-rmf.component */ "./src/app/rmf-ltf/certificate-rmf/certificate-rmf.component.ts");
/* harmony import */ var _rmf_ltf_certificate_ltf_certificate_ltf_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./rmf-ltf/certificate-ltf/certificate-ltf.component */ "./src/app/rmf-ltf/certificate-ltf/certificate-ltf.component.ts");
/* harmony import */ var _rmf_ltf_ltf_condition_complete_ltf_condition_complete_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./rmf-ltf/ltf-condition-complete/ltf-condition-complete.component */ "./src/app/rmf-ltf/ltf-condition-complete/ltf-condition-complete.component.ts");
/* harmony import */ var _report_past_events_past_events_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./report/past-events/past-events.component */ "./src/app/report/past-events/past-events.component.ts");
/* harmony import */ var _report_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./report/confirmation/confirmation.component */ "./src/app/report/confirmation/confirmation.component.ts");
/* harmony import */ var _report_not_available_list_not_available_list_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./report/not-available-list/not-available-list.component */ "./src/app/report/not-available-list/not-available-list.component.ts");
/* harmony import */ var _report_today_list_today_list_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./report/today-list/today-list.component */ "./src/app/report/today-list/today-list.component.ts");
/* harmony import */ var _report_summary_summary_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./report/summary/summary.component */ "./src/app/report/summary/summary.component.ts");
/* harmony import */ var _report_receipt_history_receipt_history_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./report/receipt-history/receipt-history.component */ "./src/app/report/receipt-history/receipt-history.component.ts");
/* harmony import */ var _report_type_type_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./report/type/type.component */ "./src/app/report/type/type.component.ts");
/* harmony import */ var _transaction_purchase_purchase_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./transaction/purchase/purchase.component */ "./src/app/transaction/purchase/purchase.component.ts");
/* harmony import */ var _transaction_sell_sell_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./transaction/sell/sell.component */ "./src/app/transaction/sell/sell.component.ts");
/* harmony import */ var _transaction_exchange_exchange_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./transaction/exchange/exchange.component */ "./src/app/transaction/exchange/exchange.component.ts");
/* harmony import */ var _transaction_purchase_for_sell_purchase_for_sell_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./transaction/purchase-for-sell/purchase-for-sell.component */ "./src/app/transaction/purchase-for-sell/purchase-for-sell.component.ts");
/* harmony import */ var _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./pagenotfound/pagenotfound.component */ "./src/app/pagenotfound/pagenotfound.component.ts");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! primeng/inputtext */ "./node_modules/primeng/inputtext.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_43___default = /*#__PURE__*/__webpack_require__.n(primeng_inputtext__WEBPACK_IMPORTED_MODULE_43__);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/button.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_44___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_44__);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_45___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_45__);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/dialog.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_46___default = /*#__PURE__*/__webpack_require__.n(primeng_dialog__WEBPACK_IMPORTED_MODULE_46__);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











































// import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab 
// import { PanelModule } from 'primeng/primeng';
// import { ButtonModule } from 'primeng/primeng';
// import { RadioButtonModule } from 'primeng/primeng';





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                _header_login_header_login_component__WEBPACK_IMPORTED_MODULE_9__["HeaderLoginComponent"],
                _myport_myport_component__WEBPACK_IMPORTED_MODULE_10__["MyportComponent"],
                _transaction_transaction_component__WEBPACK_IMPORTED_MODULE_12__["TransactionComponent"],
                _rmf_ltf_rmf_ltf_component__WEBPACK_IMPORTED_MODULE_13__["RmfLtfComponent"],
                _regular_list_regular_list_component__WEBPACK_IMPORTED_MODULE_14__["RegularListComponent"],
                _report_report_component__WEBPACK_IMPORTED_MODULE_15__["ReportComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_17__["ProfileComponent"],
                _myport_myport_menu_myport_menu_component__WEBPACK_IMPORTED_MODULE_16__["MyportMenuComponent"],
                _canvas_menu_canvas_menu_component__WEBPACK_IMPORTED_MODULE_20__["CanvasMenuComponent"],
                _profile_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_18__["EditProfileComponent"],
                _profile_suitability_suitability_component__WEBPACK_IMPORTED_MODULE_19__["SuitabilityComponent"],
                _profile_setting_setting_component__WEBPACK_IMPORTED_MODULE_21__["SettingComponent"],
                _profile_changepassword_changepassword_component__WEBPACK_IMPORTED_MODULE_22__["ChangepasswordComponent"],
                _regular_list_regular_purchase_regular_purchase_component__WEBPACK_IMPORTED_MODULE_23__["RegularPurchaseComponent"],
                _regular_list_regular_sell_regular_sell_component__WEBPACK_IMPORTED_MODULE_24__["RegularSellComponent"],
                _regular_list_regular_exchange_regular_exchange_component__WEBPACK_IMPORTED_MODULE_25__["RegularExchangeComponent"],
                _regular_list_all_list_all_list_component__WEBPACK_IMPORTED_MODULE_26__["AllListComponent"],
                _rmf_ltf_conclusion_conclusion_component__WEBPACK_IMPORTED_MODULE_27__["ConclusionComponent"],
                _rmf_ltf_certificate_rmf_certificate_rmf_component__WEBPACK_IMPORTED_MODULE_28__["CertificateRmfComponent"],
                _rmf_ltf_certificate_ltf_certificate_ltf_component__WEBPACK_IMPORTED_MODULE_29__["CertificateLtfComponent"],
                _rmf_ltf_ltf_condition_complete_ltf_condition_complete_component__WEBPACK_IMPORTED_MODULE_30__["LtfConditionCompleteComponent"],
                _report_past_events_past_events_component__WEBPACK_IMPORTED_MODULE_31__["PastEventsComponent"],
                _report_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_32__["ConfirmationComponent"],
                _report_not_available_list_not_available_list_component__WEBPACK_IMPORTED_MODULE_33__["NotAvailableListComponent"],
                _report_today_list_today_list_component__WEBPACK_IMPORTED_MODULE_34__["TodayListComponent"],
                _report_summary_summary_component__WEBPACK_IMPORTED_MODULE_35__["SummaryComponent"],
                _report_receipt_history_receipt_history_component__WEBPACK_IMPORTED_MODULE_36__["ReceiptHistoryComponent"],
                _report_type_type_component__WEBPACK_IMPORTED_MODULE_37__["TypeComponent"],
                _transaction_purchase_purchase_component__WEBPACK_IMPORTED_MODULE_38__["PurchaseComponent"],
                _transaction_sell_sell_component__WEBPACK_IMPORTED_MODULE_39__["SellComponent"],
                _transaction_exchange_exchange_component__WEBPACK_IMPORTED_MODULE_40__["ExchangeComponent"],
                _transaction_purchase_for_sell_purchase_for_sell_component__WEBPACK_IMPORTED_MODULE_41__["PurchaseForSellComponent"],
                _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_42__["PagenotfoundComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeModule"],
                angular_highcharts__WEBPACK_IMPORTED_MODULE_11__["ChartModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                primeng_dialog__WEBPACK_IMPORTED_MODULE_46__["DialogModule"],
                primeng_table__WEBPACK_IMPORTED_MODULE_45__["TableModule"],
                primeng_inputtext__WEBPACK_IMPORTED_MODULE_43__["InputTextModule"],
                primeng_dialog__WEBPACK_IMPORTED_MODULE_46__["DialogModule"],
                primeng_button__WEBPACK_IMPORTED_MODULE_44__["ButtonModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_47__["BrowserAnimationsModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/canvas-menu/canvas-menu.component.html":
/*!********************************************************!*\
  !*** ./src/app/canvas-menu/canvas-menu.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Paste this code after body tag -->\r\n<!-- <div class=\"se-pre-con\"></div> -->\r\n<!-- Ends -->\r\n\r\n<div class=\"canvas-menu-wrapper\">\r\n  <nav class=\"canvas-menu\">\r\n    <ul class=\"list-unstyled main-menu\">\r\n      <li class=\"text-right\">\r\n        <div class=\"close\" id=\"nav-close\" (click)=\"hidenav()\">\r\n          <i class=\"sprite sprite-p_search_off\"></i>\r\n          <span>Close</span>\r\n        </div>\r\n      </li>\r\n    </ul>\r\n\r\n    <div id=\"top-canvas-menu\" class=\"header_tools\">\r\n      <!--Include your top navigation here-->\r\n    </div>\r\n\r\n    <div id=\"top-canvas-search\" class=\"header_search\">\r\n      <!-- clone element form header_search -->\r\n    </div>\r\n\r\n    <ul id=\"canvas_mainnav\" class=\"list-unstyled main-menu\">\r\n      <li id=\"myport\"><a routerLink=\"/myport\" title=\"My Port\">My Port <span class=\"icon\"></span></a></li>\r\n      <li id=\"transaction\"><a routerLink=\"/transaction\" title=\"กองทุนส่วนบุคคล\">ทำรายการ<span class=\"icon\"></span></a></li>\r\n      <li id=\"rmf-ltf\"><a routerLink=\"/rmf-ltf\" title=\"กองทุนสำรองเลี้ยงชีพ\">RMF/LTF<span class=\"icon\"></span></a></li>\r\n      <li id=\"report\"><a routerLink=\"/report\" title=\"กองทุนรวมอสังหาริมทรัพย์ REIT\">รายงาน<span class=\"icon\"></span></a></li>\r\n      <li id=\"regular-list\"><a routerLink=\"/regular-list\" title=\"บริการนักลงทุน\">รายการแบบประจำ <span class=\"icon\"></span></a></li>\r\n      <li id=\"profile\"><a routerLink=\"/profile\" title=\"ข่าวสารและกิจกรรม\">ข้อมูลส่วนตัว <span class=\"icon\"></span></a></li>\r\n    </ul>\r\n  </nav>\r\n\r\n  <!-- <div class=\"navbar navbar-inverse navbar-fixed-top\">\r\n      Include your brand here\r\n      <div class=\"navbar-header\">\r\n        <a id=\"nav-expander\" class=\"nav-expander fixed\">\r\n          <i class=\"fa fa-bars\" aria-hidden=\"true\"></i>\r\n        </a>\r\n      </div>\r\n  </div> -->\r\n</div>\r\n<!-- End Canvas Menu Wrapper -->"

/***/ }),

/***/ "./src/app/canvas-menu/canvas-menu.component.scss":
/*!********************************************************!*\
  !*** ./src/app/canvas-menu/canvas-menu.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/canvas-menu/canvas-menu.component.ts":
/*!******************************************************!*\
  !*** ./src/app/canvas-menu/canvas-menu.component.ts ***!
  \******************************************************/
/*! exports provided: CanvasMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasMenuComponent", function() { return CanvasMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CanvasMenuComponent = /** @class */ (function () {
    function CanvasMenuComponent() {
    }
    CanvasMenuComponent.prototype.ngOnInit = function () {
    };
    CanvasMenuComponent.prototype.hidenav = function () {
        $('body').removeClass('nav-expanded');
    };
    CanvasMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-canvas-menu',
            template: __webpack_require__(/*! ./canvas-menu.component.html */ "./src/app/canvas-menu/canvas-menu.component.html"),
            styles: [__webpack_require__(/*! ./canvas-menu.component.scss */ "./src/app/canvas-menu/canvas-menu.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CanvasMenuComponent);
    return CanvasMenuComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\">\r\n    <div class=\"footer_sub\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"footer_sub--block\">\r\n                <div class=\"copyright mt-4\">\r\n                    <h5>ต้องการสอบถามข้อมูล ติดต่อผ่ายทะเบียนกองทุนสำรองเลี้ยงชีพ\r\n                    <span>บลจ.แลนด์ แอนด์ เฮาส์ จำกัด</span>\r\n                    </h5>\r\n                    <p>Tel. 02-286-3484 ต่อ 335 - 336 หรือ E-mail : registrar_pvd@lhfund.co.th</p>\r\n                </div>\r\n                <div class=\"copyright-footer mb-2\">\r\n                    <p >ต้องการสอบถามข้อมูล</p> \r\n                    <p>ติดต่อผ่ายทะเบียนกองทุนสำรองเลี้ยงชีพ</p>\r\n                    <p><span>บลจ.แลนด์ แอนด์ เฮาส์ จำกัด</span></p>\r\n                    <p>Tel. 02-286-3484 ต่อ 335 - 336 </p>\r\n                    <p>หรือ E-mail : registrar_pvd@lhfund.co.th</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styleUrls: [],
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header-login/header-login.component.html":
/*!**********************************************************!*\
  !*** ./src/app/header-login/header-login.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"header\" class=\"header-login\">\r\n  <div class=\"bottom-menu-wrapper\">\r\n    <div class=\"wrapper\">\r\n      <div class=\"bg-logo\">\r\n        <h1 class=\"logo\">\r\n          <a href=\"/\">\r\n            <img src=\"/assets/Images/logos/logo-h-login.jpg\" />\r\n          </a>\r\n        </h1>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- header -->"

/***/ }),

/***/ "./src/app/header-login/header-login.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/header-login/header-login.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bottom-menu-wrapper {\n  display: none; }\n"

/***/ }),

/***/ "./src/app/header-login/header-login.component.ts":
/*!********************************************************!*\
  !*** ./src/app/header-login/header-login.component.ts ***!
  \********************************************************/
/*! exports provided: HeaderLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderLoginComponent", function() { return HeaderLoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderLoginComponent = /** @class */ (function () {
    function HeaderLoginComponent() {
    }
    HeaderLoginComponent.prototype.ngOnInit = function () {
    };
    HeaderLoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header-login',
            template: __webpack_require__(/*! ./header-login.component.html */ "./src/app/header-login/header-login.component.html"),
            styles: [__webpack_require__(/*! ./header-login.component.scss */ "./src/app/header-login/header-login.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderLoginComponent);
    return HeaderLoginComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"header\">\r\n  <div class=\"top-menu-wrapper\" id=\"top-menu-wrapper\">\r\n        <div class=\"wrapper\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-8 hidden-sm hidden-xs top-main-nav\">\r\n                </div>\r\n                <div class=\"col-md-4 top-social-nav hidden-sm hidden-xs\">\r\n                    <ul class=\"\">\r\n                        <li class=\"ico-fb\">\r\n                            <a href=\"#\" title=\"บัญชีผู้ใช้\">\r\n                                บัญชีผู้ใช้ : \r\n                            </a>\r\n                        </li>\r\n                        <li class=\"ico-line\">\r\n                            <a href=\"#\" title=\"เนติวัฒน์\">\r\n                                <img src=\"/assets/Images/icons/icon-login-white.png\" />\r\n                                เนติวัฒน์\r\n                                <!-- <img src=\"/assets/Images/icons/p_dropdown_select.png\" /> -->\r\n                            </a>\r\n                        </li>\r\n                        <li class=\"ico-yt\">\r\n                            <a href=\"#\" title=\"ออกจากระบบ\">\r\n                                <img src=\"/assets/Images/icons/ico-forgot.png\" />\r\n                                ออกจากระบบ\r\n                            </a>\r\n                        </li>\r\n                        <!-- <li class=\"ico-ig\">\r\n                            <a href=\"#\" title=\"\">\r\n                                <img src=\"/assets/Images/icons/ico-ig-white.png\" />\r\n                            </a>\r\n                        </li> -->\r\n                    </ul>\r\n                    <ul class=\"sw-lang\">\r\n                        <li class=\"th current\">\r\n                            <a href=\"#\" title=\"ไทย\">ไทย</a>\r\n                        </li>\r\n                        <li class=\"en\">\r\n                            <a href=\"#\" title=\"Eng\">Eng</a>\r\n                        </li>\r\n                        <!-- <li class=\"ch\">\r\n                            <a href=\"#\" title=\"Chi\">Chi</a>\r\n                        </li> -->\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </div>\r\n  </div>\r\n\r\n  <div class=\"bottom-menu-wrapper\" id=\"fixed-nav\">\r\n      <div class=\"wrapper\">\r\n          <div class=\"row\">\r\n              <div class=\"col-lg-3 col-sm-4 col-xs-4\">\r\n                  <h1 class=\"logo\">\r\n                      <a href=\"/\">\r\n                            <img src=\"/assets/Images/logos/logo-m-post.jpg\" />\r\n                      </a>\r\n                  </h1>\r\n              </div>\r\n\r\n              <div class=\"col-lg-9 col-sm-8 col-xs-8\">\r\n                  <nav id=\"main-nav\" class=\"main-nav\">\r\n                        <div id=\"menu\" class=\"main-nav-list hidden-sm hidden-xs\">\r\n                            <ul id=\"bottom-main-nav\" >\r\n                                <li id=\"myport\"><a routerLink=\"/myport\" title=\"My Port\">My Port <span class=\"icon\"></span></a></li>\r\n                                <li id=\"transaction\"><a routerLink=\"/transaction\" title=\"ทำรายการ\">ทำรายการ<span class=\"icon\"></span></a></li>\r\n                                <li id=\"rmf-ltf\"><a routerLink=\"/rmf-ltf\" title=\"RMF/LTF\">RMF/LTF<span class=\"icon\"></span></a></li>\r\n                                <li id=\"report\"><a routerLink=\"/report\" title=\"รายงาน\">รายงาน<span class=\"icon\"></span></a></li>\r\n                                <li id=\"regular-list\"><a routerLink=\"/regular-list\" title=\"รายการแบบประจำ\">รายการแบบประจำ <span class=\"icon\"></span></a></li>\r\n                                <li id=\"profile\"><a routerLink=\"/profile\" title=\"ข้อมูลส่วนตัว\">ข้อมูลส่วนตัว <span class=\"icon\"></span></a></li>\r\n                            </ul>                           \r\n                        </div>\r\n                  </nav>                    \r\n                  <!-- end Nav -->\r\n                  <a id=\"nav-expander\" class=\"nav-expander fixed\">\r\n                    <i class=\"fa fa-bars\" aria-hidden=\"true\" (click)=\"shownav()\"></i>\r\n                  </a>\r\n              </div>\r\n          </div>\r\n      </div>\r\n  </div>\r\n</div>\r\n<!-- header -->\r\n    "

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
        $('body').removeClass('nav-expanded');
        // $('#bottom-main-nav').children().clone().appendTo("#canvas_mainnav");
    };
    HeaderComponent.prototype.shownav = function () {
        // console.log("dfdf");
        $('body').toggleClass('nav-expanded');
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styleUrls: [],
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".test {\r\n    color: red;\r\n}\r\n#header .top-menu-wrapper{\r\n    display: none !important;\r\n}\r\n#header .bottom-menu-wrapper{\r\n    display: none !important;\r\n}\r\n.footer_sub{\r\n    display: none !important;\r\n}\r\ninput[type=\"text\"],input[type=\"password\"]{\r\n    height: 42px !important;\r\n}\r\n/* form-control-feedback p{\r\n    color: red !important;\r\n} */\r\n.has-danger .form-control-feedback p{\r\n    color: #FF4A4A !important;\r\n    margin:  0;\r\n    \r\n}\r\n.form-group{\r\n    margin: 0;\r\n}\r\n.ui-widget-header,{\r\n    background-color: white;\r\n    background: unset;\r\n}\r\n.ui-widget{\r\n    font-family: \"KitithadaBold\" !important;\r\n}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header-login></app-header-login>\r\n<div id=\"main-wrapper\" class=\"main-login-wrapper\">\r\n\t<div class=\"contact-wrapper\">\r\n\t\t<div class=\"container\">\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col-md-6 col-md-offset-6\">\r\n\t\t\t\t\t<div class=\"contact-popup active\" *ngIf=\"page == 'signin'\">\r\n\r\n\t\t\t\t\t\t<div class=\"popup-content\">\r\n\t\t\t\t\t\t\t<div class=\"contact-title\">\r\n\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"col \">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"login-icon\">\r\n\t\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/Images/icons/icon-login-white.png\" />\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t\t\t\t\tเข้าสู่ระบบ\r\n\t\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col d-flex justify-content-end\">\r\n\t\t\t\t\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t\t\t\t\t<li class=\"th current\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" title=\"ไทย\">Thai</a>\r\n\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li class=\"en \">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" title=\"Eng\">Eng</a>\r\n\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"contact-form-wrapper\">\r\n\t\t\t\t\t\t\t\t<form [formGroup]=\"formsighin\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"detail-login-wrapper\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 form-group\" [ngClass]=\"ValidatorDisplayCss1('username')\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<p>ชื่อผู้เข้าระบบ\r\n\t\t\t\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-wrapper\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"name\" name=\"name\" maxlength=\"15\" type=\"text\" formControlName=\"username\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-control-feedback\" *ngIf=\"this.formsighin.controls.username.errors && (this.formsighin.controls.username.touched)\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"this.formsighin.controls.username.errors.required\">กรุณากรอกข้อมูลให้ครบถ้วน</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <p *ngIf=\"this.form.controls.username.errors.pattern\">ข้อมูลไม่ถูกต้อง</p> -->\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 form-group\" [ngClass]=\"ValidatorDisplayCss1('password')\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<p>รหัสผ่าน\r\n\t\t\t\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-wrapper \">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"password\" name=\"password\" maxlength=\"15\" type=\"password\" formControlName=\"password\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-control-feedback\" *ngIf=\"this.formsighin.controls.password.errors && (this.formsighin.controls.password.touched)\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"this.formsighin.controls.password.errors.required\">กรุณากรอกข้อมูลให้ครบถ้วน</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <p *ngIf=\"this.form.controls.password.errors.pattern\">อย่างน้อย 6 ตัวอักษร รวมทั้งตัวเลข</p> -->\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"mb-3\" (click)=\"checkpage('forgotpassword')\" style=\"cursor: pointer;\">ลืมรหัสผ่าน\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a style=\"cursor: pointer;\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-question-circle\" aria-hidden=\"true\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"row justify-content-center mb-3\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"btn-wrapper-left\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn-med btn-confirm-login\"  (click)=\"checkpage('myport')\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- (click)=\"checkpage('submit')\" [routerLink]=\"['/myport']\" -->\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tเข้าสู่ระบบ\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"row justify-content-center\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"btn-wrapper-left\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn-med btn-next-login\" (click)=\"checkpage('signup1')\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p>ลงทะเบียน\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"contact-popup active\" *ngIf=\"page == 'forgotpassword'\">\r\n\t\t\t\t\t\t<div class=\"popup-content\">\r\n\t\t\t\t\t\t\t<div class=\"contact-title\">\r\n\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"col\">\r\n\t\t\t\t\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"fas fa-unlock-alt mr-2\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\tลืมรหัสผ่าน\r\n\r\n\t\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col d-flex justify-content-end\">\r\n\t\t\t\t\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t\t\t\t\t<li class=\"th current\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" title=\"ไทย\">Thai</a>\r\n\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li class=\"en\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" title=\"Eng\">Eng</a>\r\n\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"contact-form-wrapper\">\r\n\t\t\t\t\t\t\t\t<form [formGroup]=\"formforgot\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"detail-login-wrapper\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t<!-- <div class=\"col-sm-12\">\r\n\t\t\t\t\t\t\t\t\t\t\t<p>ชื่อผู้เข้าระบบ\r\n\t\t\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-wrapper\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"name\" name=\"name\" maxlength=\"30\" type=\"text\">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div> -->\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 form-group\" [ngClass]=\"ValidatorDisplayCss3('IDcard')\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<p>เลขบัตรประชาชน/หนังสือเดินทาง\r\n\t\t\t\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-wrapper \">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"IDcard\" name=\"IDcard\" maxlength=\"13\" type=\"text\" formControlName=\"IDcard\" required>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-control-feedback\" *ngIf=\"this.formforgot.controls.IDcard.errors && ( this.formforgot.controls.IDcard.touched)\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"this.formforgot.controls.IDcard.errors.required || this.formforgot.controls.IDcard.errors?.minlength\">กรุณากรอกข้อมูลให้ครบถ้วน</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"this.formforgot.controls.IDcard.errors.pattern\">ข้อมูลไม่ถูกต้อง</p>\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 form-group\" [ngClass]=\"ValidatorDisplayCss3('email')\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<p>อีเมล์\r\n\t\t\t\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-wrapper \">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"email\" name=\"email\" maxlength=\"30\" type=\"text\" formControlName=\"email\" required>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-control-feedback\" *ngIf=\"this.formforgot.controls.email.errors && ( this.formforgot.controls.email.touched)\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"this.formforgot.controls.email.errors.required\">กรุณากรอกข้อมูลให้ครบถ้วน</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"this.formforgot.controls.email.errors.pattern\">ข้อมูลไม่ถูกต้อง</p>\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"btn-wrapper-left\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-10\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn-med btn-back-login\" (click)=\"checkpage('signin')\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p>ย้อนกลับ\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 \">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"btn-wrapper-right\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row justify-content-end\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-10\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn-med btn-confirm-login\" (click)=\"checkpage('otp-forgot')\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p>ตกลง\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"contact-popup active\" *ngIf=\"page == 'changepassword'\">\r\n\t\t\t\t\t\t<div class=\"popup-content\">\r\n\t\t\t\t\t\t\t<div class=\"contact-title\">\r\n\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"col\">\r\n\t\t\t\t\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"fas fa-unlock-alt mr-2\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\tเปลี่ยนรหัสผ่าน\r\n\r\n\t\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col d-flex justify-content-end\">\r\n\t\t\t\t\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t\t\t\t\t<li class=\"th current\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" title=\"ไทย\">Thai</a>\r\n\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li class=\"en\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" title=\"Eng\">Eng</a>\r\n\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"contact-form-wrapper\">\r\n\t\t\t\t\t\t\t\t<form [formGroup]=\"formchange\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"detail-login-wrapper\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t<!-- <div class=\"col-sm-12\">\r\n\t\t\t\t\t\t\t\t\t\t\t<p>ชื่อผู้เข้าระบบ\r\n\t\t\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-wrapper\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"name\" name=\"name\" maxlength=\"30\" type=\"text\">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div> -->\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 form-group\" [ngClass]=\"ValidatorDisplayCss5('password')\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<p>สร้างรหัสผ่าน\r\n\t\t\t\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-wrapper \">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"password\" name=\"password\" maxlength=\"13\" type=\"password\" formControlName=\"password\" required>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-control-feedback\" *ngIf=\"this.formchange.controls.password.errors && ( this.formchange.controls.password.touched)\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"this.formchange.controls.password.errors.required || this.formchange.controls.password.errors?.minlength\">กรุณากรอกข้อมูลให้ครบถ้วน</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"this.formchange.controls.password.errors.pattern\">ข้อมูลไม่ถูกต้อง</p>\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 form-group\" [ngClass]=\"ValidatorDisplayCss5('repeatPassword')\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<p>ยืนยันรหัสผ่าน\r\n\t\t\t\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-wrapper \">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"repeatPassword\" name=\"repeatPassword\" maxlength=\"30\" type=\"password\" formControlName=\"repeatPassword\" required>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-control-feedback\" *ngIf=\"this.formchange.controls.repeatPassword.errors && ( this.formchange.controls.repeatPassword.touched)\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"this.formchange.controls.repeatPassword.errors.required\">กรุณากรอกข้อมูลให้ครบถ้วน</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"this.formchange.controls.repeatPassword.errors.pattern\">ข้อมูลไม่ถูกต้อง</p>\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"btn-wrapper-left\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-10\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn-med btn-back-login\" (click)=\"checkpage('forgotpassword')\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p>ย้อนกลับ\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 \">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"btn-wrapper-right\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row justify-content-end\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-10\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn-med btn-confirm-login\" data-toggle=\"modal\" (click)=\"checkpage('confirm-change')\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p>ตกลง\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <button class=\"btn-med btn-confirm-login\" data-toggle=\"modal\" data-target=\"#confirm\" data-backdrop=\"static\"\tdata-keyboard=\"false\"  *ngIf=\"changepassword == 'modal'\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p>ตกลง\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button> -->\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"contact-popup active\" *ngIf=\"page == 'otp'\">\r\n\r\n\t\t\t\t\t\t<div class=\"popup-content\">\r\n\t\t\t\t\t\t\t<div class=\"contact-title\">\r\n\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"col\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"login-icon\">\r\n\t\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/Images/icons/icon-otp-white.png\" />\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t\t\t\t\tระบบความปลอดภัย OTP\r\n\t\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col d-flex justify-content-end\">\r\n\t\t\t\t\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t\t\t\t\t<li class=\"th current\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" title=\"ไทย\">Thai</a>\r\n\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li class=\"en\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" title=\"Eng\">Eng</a>\r\n\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"contact-form-wrapper\">\r\n\t\t\t\t\t\t\t\t<form [formGroup]=\"formotp\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12\">\r\n\t\t\t\t\t\t\t\t\t\t\t<p>ระบบจะส่งรหัส OTP ไปยังเบอร์โทรศัพท์มือถือ\r\n\t\t\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-7\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-wrapper\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"tel\" name=\"tel\" maxlength=\"30\" type=\"text\" [value]=\"blind\" disabled>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-5\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"btn-wrapper\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn-med btn-blue\" (click)=\"checkpage()\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tขอรหัส OTP อีกครั้ง\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t\t\t\t\t\t<p>ระบุรหัส OTP ที่ได้รับ</p>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 form-group\" [ngClass]=\"ValidatorDisplayCss4('otp')\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-wrapper\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"otp\" name=\"otp\" maxlength=\"6\" type=\"text\" formControlName=\"otp\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-control-feedback\" *ngIf=\"this.formotp.controls.otp.errors && ( this.formotp.controls.otp.touched)\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"this.formotp.controls.otp.errors.required\">กรุณากรอกข้อมูลให้ครบถ้วน</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <p *ngIf=\"this.form.controls.otp.errors.pattern\">ข้อมูลไม่ถูกต้อง</p> -->\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"row pb-4\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t\t\t\t\t\t<p>กรุณากดปุ่ม \"Request OTP\" เพื่อรับรหัสรักษาความปลอดภัย</p>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t<div class=\"row mt-3\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"btn-wrapper-left\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-10\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn-med btn-cancel\" (click)=\"checkpage('signin')\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tยกเลิก\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 \">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"btn-wrapper-right\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row justify-content-end\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-10\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn-med btn-confirm-login\" (click)=\"checkpage('changepassword')\" *ngIf=\"buttonotp == 'forgot'\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p>ยืนยัน\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn-med btn-confirm-login\" (click)=\"checkpage('check-otp')\" *ngIf=\"buttonotp == 'signup'\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p>ยืนยัน\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"contact-popup active\" *ngIf=\"page == 'signup2'\">\r\n\t\t\t\t\t\t<div class=\"popup-content\">\r\n\t\t\t\t\t\t\t<!-- <div class=\"row\">\r\n\t\t\t\t\t\t\t<div class=\"col-md-6 col-xs-12\"> -->\r\n\t\t\t\t\t\t\t<div class=\"contact-title\">\r\n\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"col\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"login-icon\">\r\n\t\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/Images/icons/icon-register.png\" />\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t\t\t\t\tตั้งค่าชื่อผู้ใช้เข้าระบบและรหัสผ่าน\r\n\t\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col d-flex justify-content-end\">\r\n\t\t\t\t\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t\t\t\t\t<li class=\"th current\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" title=\"ไทย\">Thai</a>\r\n\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li class=\"en \">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" title=\"Eng\">Eng</a>\r\n\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"contact-form-wrapper\">\r\n\t\t\t\t\t\t\t\t<form [formGroup]=\"formstep2\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"detail-login-wrapper\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 form-group\" [ngClass]=\"ValidatorDisplayCss2('username')\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<p>ชื่อผู้ใช้งาน\r\n\t\t\t\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-wrapper\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"username\" name=\"username\" maxlength=\"15\" type=\"text\" formControlName=\"username\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-control-feedback\" *ngIf=\"this.formstep2.controls.username.errors && (this.formstep2.controls.username.touched)\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"this.formstep2.controls.username.errors.required || this.formstep2.controls.username.errors?.minlength\">กรุณากรอกข้อมูลให้ครบถ้วน</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"this.formstep2.controls.username.errors.pattern\">ข้อมูลไม่ถูกต้อง</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 form-group\" [ngClass]=\"ValidatorDisplayCss2('password')\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<p>รหัสผ่าน\r\n\t\t\t\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-wrapper \">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"password\" name=\"password\" maxlength=\"15\" type=\"password\" formControlName=\"password\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-control-feedback\" *ngIf=\"this.formstep2.controls.password.errors && (this.formstep2.controls.password.touched)\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"this.formstep2.controls.password.errors.required || this.formstep2.controls.username.errors?.minlength\">กรุณากรอกข้อมูลให้ครบถ้วน</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"this.formstep2.controls.password.errors.pattern\">อย่างน้อย 6 ตัวอักษร รวมทั้งตัวเลข</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 form-group\" [ngClass]=\"ValidatorDisplayCss2('repeatPassword')\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<p>ยืนยันรหัสผ่าน\r\n\t\t\t\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-wrapper \">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"repeatPassword\" name=\"repeatPassword\" maxlength=\"15\" type=\"password\" formControlName=\"repeatPassword\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-control-feedback\" *ngIf=\"this.formstep2.controls.repeatPassword.errors && (this.formstep2.controls.repeatPassword.touched)\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"this.formstep2.controls.repeatPassword.errors.required || this.formstep2.controls.username.errors?.minlength\">กรุณากรอกข้อมูลให้ครบถ้วน</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"this.formstep2.controls.repeatPassword.errors.pattern\">อย่างน้อย 6 ตัวอักษร รวมทั้งตัวเลข</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <p *ngIf=\"form.passwordMatchValidator\">รหัสไม่ตรงกัน</p> -->\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<!-- <div class=\"col-sm-12 mt-3\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"btn-wrapper-left\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn-med btn-next-login\" (click)=\"checkpage('signin')\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"pl-1 \">ลงทะเบียน\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-angle-right pl-4\" aria-hidden=\"true\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"btn-wrapper-left\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn-med btn-back-login\" (click)=\"checkpage('signup1')\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tย้อนกลับ\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 \">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"btn-wrapper-left\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn-med btn-next-login\" (click)=\"checkpage('otp-signup')\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p>ลงทะเบียน\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<!-- </div>\r\n\t\t\t\t\t\t</div> -->\r\n\t\t\t\t\t\t\t<!-- <div class=\"col-md-6 col-xs-12\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"contact-title\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row \">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-10 col-md-offset-8 xs-hide\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"th current\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" title=\"ไทย\">Thai</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"en\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" title=\"Eng\">Eng</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"contact-form-wrapper\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row mt-5\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 mb-2 mt\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h3>ทำความเข้าใจลักษณะสินค้า,</h3>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h3>เงื่อนไข,ผลตอบแทน</h3>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h3>และความเสี่ยงก่อนตัดสินใจ</h3>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 mt-3\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"btn-wrapper\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row justify-content-center\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-8 col-xs-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn-med btn-light text-center\" (click)=\"checkpage('signin')\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"login-icon ml-md-2 ml-0 mt-1\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/Images/icons/icon-login-white.png\" class=\"visible-lg-block\" />\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  <img src=\"/assets/Images/icons/icon-login-white.png\" class=\"visible-md-block visible-sm-block visible-xs-block\" />\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tเข้าสู่ระบบ\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div> -->\r\n\r\n\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"contact-popup active\" *ngIf=\"page == 'signup1'\">\r\n\t\t\t\t\t\t<div class=\"popup-content\">\r\n\t\t\t\t\t\t\t<div class=\"contact-title\">\r\n\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"col\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"login-icon\">\r\n\t\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/Images/icons/icon-register.png\" />\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t\t\t\t\tลงทะเบียนเข้าใช้ระบบ\r\n\t\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col d-flex justify-content-end\">\r\n\t\t\t\t\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t\t\t\t\t<li class=\"th current\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" title=\"ไทย\">Thai</a>\r\n\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li class=\"en \">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" title=\"Eng\">Eng</a>\r\n\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"contact-form-wrapper\">\r\n\t\t\t\t\t\t\t\t<form [formGroup]=\"form\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-3 form-group\" [ngClass]=\"ValidatorDisplayCss('prefix')\">\r\n\t\t\t\t\t\t\t\t\t\t\t<p>คำนำหน้า\r\n\t\t\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-wrapper\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"prefix\" name=\"prefix\" maxlength=\"15\" type=\"text\" formControlName=\"prefix\" required>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-control-feedback\" *ngIf=\"this.form.controls.prefix.errors && ( this.form.controls.prefix.touched)\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"this.form.controls.prefix.errors.required\">กรุณากรอกข้อมูลให้ครบถ้วน</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"this.form.controls.prefix.errors.pattern\">ข้อมูลไม่ถูกต้อง</p>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<!-- <div class=\"select-wrapper inline-block\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select name=\"ddlLink\" id=\"ddlLink\" required>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"นาย\" selected=\"\">นาย</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"นางสาว\">นางสาว</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"นาง\">นาง</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-4 form-group\" [ngClass]=\"ValidatorDisplayCss('firstname')\">\r\n\t\t\t\t\t\t\t\t\t\t\t<p>ชื่อ\r\n\t\t\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-wrapper\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"firstname\" name=\"firstname\" maxlength=\"15\" type=\"text\" formControlName=\"firstname\" required>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-control-feedback\" *ngIf=\"this.form.controls.firstname.errors && ( this.form.controls.firstname.touched)\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"this.form.controls.firstname.errors.required\">กรุณากรอกข้อมูลให้ครบถ้วน</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"this.form.controls.firstname.errors.pattern\">ข้อมูลไม่ถูกต้อง</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"checkFirstname\">รูปแบบของข้อมูลไม่ถูกต้อง</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-5 form-group\" [ngClass]=\"ValidatorDisplayCss('lastname')\">\r\n\t\t\t\t\t\t\t\t\t\t\t<p>นามสกุล\r\n\t\t\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-wrapper \">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"lastname\" name=\"lastname\" maxlength=\"15\" type=\"text\" formControlName=\"lastname\" required>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-control-feedback\" *ngIf=\"this.form.controls.lastname.errors && ( this.form.controls.lastname.touched)\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"this.form.controls.lastname.errors.required\">กรุณากรอกข้อมูลให้ครบถ้วน</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"this.form.controls.lastname.errors.pattern\">ข้อมูลไม่ถูกต้อง</p>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 form-group\" [ngClass]=\"ValidatorDisplayCss('IDcard')\">\r\n\t\t\t\t\t\t\t\t\t\t\t<p>เลขบัตรประชาชน/หนังสือเดินทาง\r\n\t\t\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-wrapper \">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"IDcard\" name=\"IDcard\" maxlength=\"13\" type=\"text\" formControlName=\"IDcard\" required>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-control-feedback\" *ngIf=\"this.form.controls.IDcard.errors && ( this.form.controls.IDcard.touched)\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"this.form.controls.IDcard.errors.required || this.form.controls.IDcard.errors?.minlength\">กรุณากรอกข้อมูลให้ครบถ้วน</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"this.form.controls.IDcard.errors.pattern\">ข้อมูลไม่ถูกต้อง</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 form-group\" [ngClass]=\"ValidatorDisplayCss('tel')\">\r\n\t\t\t\t\t\t\t\t\t\t\t<p>เบอร์โทรศัพท์มือถือ\r\n\t\t\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-wrapper \">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"tel\" name=\"tel\" maxlength=\"10\" type=\"text\" formControlName=\"tel\" required>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-control-feedback\" *ngIf=\"this.form.controls.tel.errors && ( this.form.controls.tel.touched)\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"this.form.controls.tel.errors.required || this.form.controls.tel.errors?.minlength\">กรุณากรอกข้อมูลให้ครบถ้วน</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"this.form.controls.tel.errors.pattern\">ข้อมูลไม่ถูกต้อง</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <p *ngIf=\"this.form.controls.tel.errors?.minlength\">ข้อมูลไม่ครบ</p>\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t -->\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 col-xs-12 form-group\" [ngClass]=\"ValidatorDisplayCss('email')\">\r\n\t\t\t\t\t\t\t\t\t\t\t<p>อีเมล์\r\n\t\t\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-wrapper \">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"email\" name=\"email\" maxlength=\"30\" type=\"text\" formControlName=\"email\" required>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-control-feedback\" *ngIf=\"this.form.controls.email.errors && ( this.form.controls.email.touched)\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"this.form.controls.email.errors.required\">กรุณากรอกข้อมูลให้ครบถ้วน</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"this.form.controls.email.errors.pattern\">ข้อมูลไม่ถูกต้อง</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 col-xs-12\">\r\n\t\t\t\t\t\t\t\t\t\t\t<p>กรุณากรอกรหัสเพื่อยืนยันตัวตน\r\n\t\t\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-5 col-sm-6 col-xs-6\">\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"captcha\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/Images/icons/captcha.png\" />\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-1 col-sm-6 col-xs-2\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fas fa-sync-alt refresh\" aria-hidden=\"true\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-5 col-sm-6 col-xs-6\">\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-wrapper\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"tel\" name=\"tel\" maxlength=\"30\" type=\"text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t<!-- <div class=\"row justify-content-start\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"custom-radio-login\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input value=\"101\" id=\"101\" name=\"rad1\" type=\"radio\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"101\"></label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span >ยอมรับ</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div> -->\r\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"btn-wrapper-left\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn-med btn-back-login\" (click)=\"checkpage('signin')\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tย้อนกลับ\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"btn-wrapper-right\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row justify-content-end\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn-med btn-confirm-login\" (click)=\"checkpage('signup2')\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p>ถัดไป\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"clearfix\"></div>\r\n\t<div class=\"copyright .d-none .d-sm-block\">\r\n\t\t<h5>ต้องการสอบถามข้อมูล ติดต่อผ่ายทะเบียนกองทุนสำรองเลี้ยงชีพ\r\n\t\t\t<span>บลจ.แลนด์ แอนด์ เฮาส์ จำกัด</span>\r\n\t\t</h5>\r\n\t\t<p>Tel. 02-286-3484 ต่อ 335 - 336 หรือ E-mail : registrar_pvd@lhfund.co.th</p>\r\n\t</div>\r\n</div>\r\n<div class=\"clearfix\"></div>\r\n<footer id=\"footer-wrapper\" class=\"footer-wrapper\">\r\n\t<div class=\"copyright-footer mb-2\">\r\n\t\t<p>ต้องการสอบถามข้อมูล</p>\r\n\t\t<p>ติดต่อผ่ายทะเบียนกองทุนสำรองเลี้ยงชีพ</p>\r\n\t\t<p>\r\n\t\t\t<span>บลจ.แลนด์ แอนด์ เฮาส์ จำกัด</span>\r\n\t\t</p>\r\n\t\t<p>Tel. 02-286-3484 ต่อ 335 - 336 </p>\r\n\t\t<p>หรือ E-mail : registrar_pvd@lhfund.co.th</p>\r\n\t</div>\r\n</footer>\r\n<!-- \r\n<ng-template #template>\r\n\t\t<div class=\"modal-header\">\r\n\t\t  <h4 class=\"modal-title pull-left\">Modal</h4>\r\n\t\t  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n\t\t\t<span aria-hidden=\"true\">&times;</span>\r\n\t\t  </button>\r\n\t\t</div>\r\n\t\t<div class=\"modal-body\">\r\n\t\t  Just a modal with a bunch of words inside, nothing serious.\r\n\t\t</div>\r\n</ng-template> -->\r\n\r\n<div class=\"modal fade modal-custom\" tabindex=\"-1\" role=\"dialog\" id=\"disclaimer\">\r\n\t<div class=\"modal-dialog\" role=\"document\">\r\n\t\t<div class=\"modal-content\">\r\n\t\t\t<div class=\"modal-header\">\r\n\t\t\t\t<h4 class=\"modal-title\">ข้อตกลงและเงื่อนไขในการใช้บริการ</h4>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"modal-body\" id=\"content-scroll-1\">\r\n\t\t\t\t<p>\r\n\t\t\t\t\tบริษัทหลักทรัพย์จัดการกองทุน แลนด์ แอนด์ เฮ้าส์ จำกัด (ในข้อตกลงนี้เรียกว่า “บริษัท”) เป็นเจ้าของและผู้ดูแลจัดการเว็บไซต์นี้\r\n\t\t\t\t\tเพื่อให้ข้อมูลเกี่ยวกับผลิตภัณฑ์และบริการต่างๆของบริษัท และความสะดวกในการติดต่อสื่อสารระหว่างท่านกับบริษัท การใช้เว็บไซต์นี้จึงต้องเป็นไปตามข้อตกลงและเงื่อนไขการใช้บริการเว็บไซต์ของบริษัท\r\n\t\t\t\t\tซึ่งท่านควรอ่านข้อกำหนดและเงื่อนไขต่างๆเหล่านี้โดยละเอียด ในการเข้าถึงเว็บไซต์ของบริษัทและหน้าจอใดๆของเว็บไซต์ หมายถึง\r\n\t\t\t\t\tท่านตกลงผูกพันทางกฎหมายตามข้อกำหนดและเงื่อนไขการใช้บริการนี้ โปรดอย่าเข้าใช้เว็บไซต์นี้ หากท่านไม่ยอมรับข้อตกลงและเงื่อนไขของบริษัท\r\n\t\t\t\t</p>\r\n\r\n\t\t\t\t<h3>ลิขสิทธิ์</h3>\r\n\t\t\t\t<p>\r\n\t\t\t\t\tบริษัทเป็นเจ้าของลิขสิทธิ์ใน ภาพ ข้อความ การแสดงผล รูปแบบนำเสนอ เครื่องหมายการค้า และส่วนประกอบอื่นๆที่ปรากฏในเว็บไซต์ของบริษัท\r\n\t\t\t\t\tเว้นแต่จะมีการระบุบอย่างชัดเจนเป็นอย่างอื่น ห้ามทำการดัดแปลง จัดเก็บในระบบที่สามารถนำมาใช้งานได้ ถ่ายโอน ลอกเลียนแบบ\r\n\t\t\t\t\tเผยแพร่หรือใช้ข้อมูลและส่วนประกอบนั้นโดยวิธีอื่นใด เพื่อวัตถุประสงค์ทางการค้า โดยมิได้รับความยินยอมล่วงหน้าเป็นลายลักษณ์อักษรจากบริษัท\r\n\t\t\t\t</p>\r\n\r\n\t\t\t\t<h3>การใช้ข้อมูลและส่วนประกอบต่างๆ</h3>\r\n\t\t\t\t<p>\r\n\t\t\t\t\tผลิตภัณฑ์ การบริการต่างๆ ข้อมูล และส่วนประกอบต่างๆ ที่ปรากฏอยู่บนเว็บไซต์ของบริษัท อาจมีการเปลี่ยนแปลงได้โดยดุลพินิจของบริษัท\r\n\t\t\t\t\tโดยไม่ต้องแจ้งให้ท่านทราบล่วงหน้า บริษัทสงวนสิทธิ์ในการกลั่นกรองและคัดเลือกผู้ประสงค์ขอใช้บริการต่างๆที่ปรากฏบนเว็บไซต์นี้ตามหลักเกณฑ์ของบริษัท\r\n\t\t\t\t\tบริษัทจะดำเนินการปรับปรุงข้อมูล ผลิตภัณฑ์และบริการต่างๆของบริษัท ที่ปรากฏในเว็บไซต์ให้ถูกต้องและทันสมัยอยู่เสมอ การเชื่อมต่อเข้าสู่แหล่งอินเตอร์เน็ตอื่นผ่านเว็บไซต์ของบริษัท\r\n\t\t\t\t\tเป็นความเสี่ยงของท่านเอง และท่านยอมรับว่าบริษัทไม่ต้องรับผิดชอบต่อความเสียหายที่อาจเกิดขึ้นจากการใช้บริการผ่านเว็บไซต์ของบริษัท\r\n\t\t\t\t\tไม่ว่าทางตรงหรือทางอ้อม ความบกพร่อง ความล่าช้าในการดำเนินการ การถ่ายโอนข้อมูล หรือความเสียหายที่เกิดจากไวรัสคอมพิวเตอร์\r\n\t\t\t\t\tการไม่ทำงานของเครือข่ายหรือระบบ ระหว่างการใช้งานเว็บไซต์ของบริษัท หากมีผลิตภัณฑ์อื่นใดที่มีการนำเสนอผ่านเว็บไซต์ของบริษัท\r\n\t\t\t\t\tบริษัทไม่รับผิดชอบต่อการรับประกันความพึงพอใจในผลิตภัณฑ์และบริการนั้นๆ\r\n\t\t\t\t</p>\r\n\r\n\t\t\t\t<h3>การเชื่อมโยงกับเว็บไซต์อื่นๆ</h3>\r\n\t\t\t\t<p>\r\n\t\t\t\t\tเว็บไซต์นี้อาจมีการเชื่อมโยงกับเว็บไซต์อื่นๆ ซึ่งอยู่ภายใต้การให้บริการและดูแลจัดการโดยบุคคลที่สาม บริษัทมิได้ให้การรับรองหรือยืนยันความถูกต้องในเนื้อหาของเว็บไซต์เหล่านั้น\r\n\t\t\t\t\tรวมทั้ง มิได้สื่อโดยนัยว่าบริษัทให้การรับรองหรือแนะนำข้อมูลในเว็บไซต์เหล่านั้น การที่ท่านเลือกเข้าเยื่ยมชมเว็บไซต์ที่ให้บริการดาวน์โหลดซอฟแวร์\r\n\t\t\t\t\tเพื่อวัตถุประสงค์ในการให้ข้อมูลและเพื่อความสะดวกของท่าน ถือว่าท่านยอมรับความเสี่ยงแต่เพียงผู้เดียว หากมีความสูญเสียหรือความเสียหายที่เกิดจากการที่ท่านดาวน์โหลดซอฟแวร์ดังกล่าว\r\n\t\t\t\t\tบริษัทไม่ต้องรับผิดชอบ บริษัทขอแนะนำให้ท่านอ่านรายละเอียดข้อตกลงและเงื่อนไขการใช้บริการ ตลอดจนนโยบายการรักษาความปลอดภัยของเว็บไซต์ที่เชื่อมโยงนั้นก่อนเข้าใช้เว็บไซต์ดังกล่าว\r\n\t\t\t\t</p>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"modal-footer\">\r\n\t\t\t\t<button type=\"button\" class=\"btn-med btn-secondary\" data-dismiss=\"modal\">Cancel</button>\r\n\t\t\t\t<button type=\"button\" class=\"btn-med btn-primary\" data-dismiss=\"modal\">ยอมรับ</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<!-- /.modal-content -->\r\n\t</div>\r\n\t<!-- /.modal-dialog -->\r\n</div>\r\n<!-- /.modal -->\r\n\r\n<div class=\"modal fade modal-custom\" tabindex=\"-1\" role=\"dialog\" id=\"confirm\" style=\"z-index: 9999;\">\r\n\t<div class=\"modal-dialog\" role=\"document\">\r\n\t\t<div class=\"modal-content\">\r\n\t\t\t<div class=\"modal-header\">\r\n\t\t\t\t<h4 class=\"modal-title\">ยืนยันการเปลี่ยนรหัสผ่าน</h4>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"modal-body\" id=\"content-scroll-1\">\t\r\n\t\t\t\t<h3>ท่านได้ทำการเปลี่ยนรหัสผ่านเรียบร้อยแล้ว</h3>\t\t\t\t\r\n\t\t\t</div>\r\n\t\t\t<div class=\"modal-footer\" style=\"display: block;\">\r\n\t\t\t\t<!-- <button type=\"button\" class=\"btn-med btn-secondary\" data-dismiss=\"modal\">Cancel</button> -->\r\n\t\t\t\t<!-- <button type=\"button\" class=\"btn-med btn-primary\" data-dismiss=\"modal\" (click)=\"checkpage('signin')\">ยอมรับ</button> -->\r\n\t\t\t\t<div class=\"row justify-content-end\">\r\n\t\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t\t<button class=\"btn-med btn-confirm-login\" data-dismiss=\"modal\" (click)=\"checkpage('signin')\">\r\n\t\t\t\t\t\t\t<p style=\"margin-top: 7px;\">ตกลง\r\n\t\t\t\t\t\t\t\t<i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\r\n\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<!-- /.modal-content -->\r\n\t</div>\r\n\t<!-- /.modal-dialog -->\r\n</div>\r\n<p-dialog  [(visible)]=\"display\" [modal]=\"true\" [responsive]=\"true\" [width]=\"750\"  [minWidth]=\"200\" [draggable]=\"false\" [resizable]=\"false\"\r\n         [baseZIndex]=\"10000\">\t\t\r\n\t\t \t<p-header>\r\n\t\t\t\t\tข้อตกลงและเงื่อนไขในการใช้บริการ\r\n\t\t\t</p-header>\r\n\t\t\t\t\r\n\t\t\t\t\tบริษัทหลักทรัพย์จัดการกองทุน แลนด์ แอนด์ เฮ้าส์ จำกัด (ในข้อตกลงนี้เรียกว่า “บริษัท”) เป็นเจ้าของและผู้ดูแลจัดการเว็บไซต์นี้\r\n\t\t\t\t\tเพื่อให้ข้อมูลเกี่ยวกับผลิตภัณฑ์และบริการต่างๆของบริษัท และความสะดวกในการติดต่อสื่อสารระหว่างท่านกับบริษัท การใช้เว็บไซต์นี้จึงต้องเป็นไปตามข้อตกลงและเงื่อนไขการใช้บริการเว็บไซต์ของบริษัท\r\n\t\t\t\t\tซึ่งท่านควรอ่านข้อกำหนดและเงื่อนไขต่างๆเหล่านี้โดยละเอียด ในการเข้าถึงเว็บไซต์ของบริษัทและหน้าจอใดๆของเว็บไซต์ หมายถึง\r\n\t\t\t\t\tท่านตกลงผูกพันทางกฎหมายตามข้อกำหนดและเงื่อนไขการใช้บริการนี้ โปรดอย่าเข้าใช้เว็บไซต์นี้ หากท่านไม่ยอมรับข้อตกลงและเงื่อนไขของบริษัท\r\n\t\t\t\t\r\n\r\n\t\t\t\t<h3>ลิขสิทธิ์</h3>\r\n\t\t\t\t\r\n\t\t\t\t\tบริษัทเป็นเจ้าของลิขสิทธิ์ใน ภาพ ข้อความ การแสดงผล รูปแบบนำเสนอ เครื่องหมายการค้า และส่วนประกอบอื่นๆที่ปรากฏในเว็บไซต์ของบริษัท\r\n\t\t\t\t\tเว้นแต่จะมีการระบุบอย่างชัดเจนเป็นอย่างอื่น ห้ามทำการดัดแปลง จัดเก็บในระบบที่สามารถนำมาใช้งานได้ ถ่ายโอน ลอกเลียนแบบ\r\n\t\t\t\t\tเผยแพร่หรือใช้ข้อมูลและส่วนประกอบนั้นโดยวิธีอื่นใด เพื่อวัตถุประสงค์ทางการค้า โดยมิได้รับความยินยอมล่วงหน้าเป็นลายลักษณ์อักษรจากบริษัท\r\n\t\t\t\t\r\n\r\n\t\t\t\t<h3>การใช้ข้อมูลและส่วนประกอบต่างๆ</h3>\r\n\t\t\t\t\r\n\t\t\t\t\tผลิตภัณฑ์ การบริการต่างๆ ข้อมูล และส่วนประกอบต่างๆ ที่ปรากฏอยู่บนเว็บไซต์ของบริษัท อาจมีการเปลี่ยนแปลงได้โดยดุลพินิจของบริษัท\r\n\t\t\t\t\tโดยไม่ต้องแจ้งให้ท่านทราบล่วงหน้า บริษัทสงวนสิทธิ์ในการกลั่นกรองและคัดเลือกผู้ประสงค์ขอใช้บริการต่างๆที่ปรากฏบนเว็บไซต์นี้ตามหลักเกณฑ์ของบริษัท\r\n\t\t\t\t\tบริษัทจะดำเนินการปรับปรุงข้อมูล ผลิตภัณฑ์และบริการต่างๆของบริษัท ที่ปรากฏในเว็บไซต์ให้ถูกต้องและทันสมัยอยู่เสมอ การเชื่อมต่อเข้าสู่แหล่งอินเตอร์เน็ตอื่นผ่านเว็บไซต์ของบริษัท\r\n\t\t\t\t\tเป็นความเสี่ยงของท่านเอง และท่านยอมรับว่าบริษัทไม่ต้องรับผิดชอบต่อความเสียหายที่อาจเกิดขึ้นจากการใช้บริการผ่านเว็บไซต์ของบริษัท\r\n\t\t\t\t\tไม่ว่าทางตรงหรือทางอ้อม ความบกพร่อง ความล่าช้าในการดำเนินการ การถ่ายโอนข้อมูล หรือความเสียหายที่เกิดจากไวรัสคอมพิวเตอร์\r\n\t\t\t\t\tการไม่ทำงานของเครือข่ายหรือระบบ ระหว่างการใช้งานเว็บไซต์ของบริษัท หากมีผลิตภัณฑ์อื่นใดที่มีการนำเสนอผ่านเว็บไซต์ของบริษัท\r\n\t\t\t\t\tบริษัทไม่รับผิดชอบต่อการรับประกันความพึงพอใจในผลิตภัณฑ์และบริการนั้นๆ\r\n\t\t\t\t\r\n\r\n\t\t\t\t<h3>การเชื่อมโยงกับเว็บไซต์อื่นๆ</h3>\r\n\t\t\t\t\r\n\t\t\t\t\tเว็บไซต์นี้อาจมีการเชื่อมโยงกับเว็บไซต์อื่นๆ ซึ่งอยู่ภายใต้การให้บริการและดูแลจัดการโดยบุคคลที่สาม บริษัทมิได้ให้การรับรองหรือยืนยันความถูกต้องในเนื้อหาของเว็บไซต์เหล่านั้น\r\n\t\t\t\t\tรวมทั้ง มิได้สื่อโดยนัยว่าบริษัทให้การรับรองหรือแนะนำข้อมูลในเว็บไซต์เหล่านั้น การที่ท่านเลือกเข้าเยื่ยมชมเว็บไซต์ที่ให้บริการดาวน์โหลดซอฟแวร์\r\n\t\t\t\t\tเพื่อวัตถุประสงค์ในการให้ข้อมูลและเพื่อความสะดวกของท่าน ถือว่าท่านยอมรับความเสี่ยงแต่เพียงผู้เดียว หากมีความสูญเสียหรือความเสียหายที่เกิดจากการที่ท่านดาวน์โหลดซอฟแวร์ดังกล่าว\r\n\t\t\t\t\tบริษัทไม่ต้องรับผิดชอบ บริษัทขอแนะนำให้ท่านอ่านรายละเอียดข้อตกลงและเงื่อนไขการใช้บริการ ตลอดจนนโยบายการรักษาความปลอดภัยของเว็บไซต์ที่เชื่อมโยงนั้นก่อนเข้าใช้เว็บไซต์ดังกล่าว\r\n\t\t\t\t\r\n        <p-footer>\r\n\t\t\t\t\r\n\t\t\t\t\t\t<!-- <button type=\"button\" class=\"btn-med btn-secondary\" data-dismiss=\"modal\">Cancel</button> -->\r\n\t\t\t\t\t\t<!-- <button type=\"button\" class=\"btn-med btn-primary\" data-dismiss=\"modal\" (click)=\"checkpage('signin')\">ยอมรับ</button> -->\r\n\t\t\t\t\t\t<div class=\"row justify-content-end\">\r\n\t\t\t\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t\t\t\t<button class=\"btn-med btn-primary\" (click)=\"display=false\">\r\n\t\t\t\t\t\t\t\t\t<p style=\"margin-top: 7px;\">ยอมรับ\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\r\n\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n            <!-- <button type=\"button\" pButton icon=\"pi pi-check\" (click)=\"display=false\" label=\"Yes\"></button>\r\n            <button type=\"button\" pButton icon=\"pi pi-close\" (click)=\"display=false\" label=\"No\" class=\"ui-button-secondary\"></button> -->\r\n        </p-footer>\r\n</p-dialog>\r\n<p-dialog  [(visible)]=\"comfirmchange\" [modal]=\"true\" [responsive]=\"true\" [width]=\"auto\" [minWidth]=\"200\" [draggable]=\"false\" [resizable]=\"false\"\r\n         [baseZIndex]=\"10000\">\t\t\r\n\t\t \t<p-header>\r\n\t\t\t\tยืนยันการเปลี่ยนรหัสผ่าน\r\n\t\t\t</p-header>\r\n\t\t\t\t\r\n\r\n\t\t\t\t<h3>ท่านได้ทำการเปลี่ยนรหัสผ่านเรียบร้อยแล้ว</h3>\r\n\t\t\t\t\r\n\t\t\t\t\t\r\n\t\t\t\t\r\n        <p-footer>\r\n\t\t\t\t\r\n\t\t\t\t\t\t<!-- <button type=\"button\" class=\"btn-med btn-secondary\" data-dismiss=\"modal\">Cancel</button> -->\r\n\t\t\t\t\t\t<!-- <button type=\"button\" class=\"btn-med btn-primary\" data-dismiss=\"modal\" (click)=\"checkpage('signin')\">ยอมรับ</button> -->\r\n\t\t\t\t\t\t<div class=\"row justify-content-end\">\r\n\t\t\t\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t\t\t\t<button class=\"btn-med btn-primary\" (click)=\"checkpage('signin')\">\r\n\t\t\t\t\t\t\t\t\t<p style=\"margin-top: 7px;\">ตกลง\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\r\n\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n            <!-- <button type=\"button\" pButton icon=\"pi pi-check\" (click)=\"display=false\" label=\"Yes\"></button>\r\n            <button type=\"button\" pButton icon=\"pi pi-close\" (click)=\"display=false\" label=\"No\" class=\"ui-button-secondary\"></button> -->\r\n        </p-footer>\r\n</p-dialog>\r\n\t\r\n\t<!-- <button type=\"text\" (click)=\"showDialog()\" pButton icon=\"pi pi-info-circle\" label=\"Show\"></button> -->"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "./node_modules/@fortawesome/free-regular-svg-icons/index.es.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _Share_dateformat__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Share/dateformat */ "./src/app/Share/dateformat.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








// import {DialogModule} from 'primeng/dialog';
// import {AccordionModule} from 'primeng/accordion';
// import {MenuItem} from 'primeng/api'; 
// import { BsModalService } from 'ngx-bootstrap/modal';
// import { ModalDirective } from 'ngx-bootstrap';
// import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
// import { RegistrationValidator } from './register.validator';
_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["fas"], _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_4__["far"]);
// declare var $:any;
var LoginComponent = /** @class */ (function () {
    // modalRef: BsModalRef;
    // config = {
    //   backdrop: true,
    //   ignoreBackdropClick: false
    // };
    // @ViewChild('resetPwd') public resetPwd:ModalDirective;
    // public isModalShown: boolean = true;
    function LoginComponent(el, fb, router) {
        this.el = el;
        this.fb = fb;
        this.router = router;
        this.page = "signin";
        this.buttonotp = "";
        this.errorMessage = Object;
        this.isNotValid = false;
        this.dateformat = _Share_dateformat__WEBPACK_IMPORTED_MODULE_6__["datethai"];
        this.profile = {};
        this.blind = "";
        this.changepassword = "check";
        this.display = false;
        this.comfirmchange = false;
    }
    //   ngOnInit() {  
    //   }
    LoginComponent.prototype.ngOnInit = function () {
        this.createFormValidate();
        this.page = "signin";
        this.display = true;
    };
    LoginComponent.prototype.ngAfterViewInit = function () {
        // this.el.modal('show');
    };
    LoginComponent.prototype.checkpage = function (page) {
        console.log(page);
        switch (page) {
            case 'signin':
                this.page = "signin";
                this.comfirmchange = false;
                break;
            case 'check-otp':
                if (this.formotp.valid) {
                    this.page = "signin";
                }
                else if (this.formotp.invalid) {
                    this.isNotValid = true;
                    this.validateAllFormFields(this.formotp);
                }
                break;
            case 'myport':
                if (this.formsighin.valid) {
                    this.router.navigate(['myport']);
                }
                else {
                    this.isNotValid = true;
                    this.validateAllFormFields(this.formsighin);
                }
                break;
            case 'forgotpassword':
                this.page = "forgotpassword";
                break;
            case 'changepassword':
                if (this.formotp.valid) {
                    this.page = "changepassword";
                }
                else {
                    this.isNotValid = true;
                    this.validateAllFormFields(this.formotp);
                }
                break;
            case 'confirm-change':
                if (this.formchange.valid) {
                    this.comfirmchange = true;
                }
                else {
                    this.isNotValid = true;
                    this.validateAllFormFields(this.formchange);
                }
                break;
            case 'otp-forgot':
                if (this.formforgot.valid) {
                    this.buttonotp = "forgot";
                    this.page = "otp";
                }
                else {
                    this.isNotValid = true;
                    this.validateAllFormFields(this.formforgot);
                }
                break;
            case 'otp-signup':
                if (this.formstep2.valid) {
                    this.buttonotp = "signup";
                    this.page = "otp";
                }
                else {
                    this.isNotValid = true;
                    this.validateAllFormFields(this.formstep2);
                }
                console.log(this.buttonotp);
                break;
            case 'signup1':
                this.page = "signup1";
                break;
            case 'signup2':
                if (this.form.valid) {
                    this.page = "signup2";
                    var s = this.form.controls.tel.value;
                    this.blind = s[0] + s[1] + s[2] + "-XXXXX" + s[8] + s[9];
                    console.log(this.blind);
                    console.log(this.profile);
                }
                else {
                    this.isNotValid = true;
                    this.validateAllFormFields(this.form);
                }
                break;
            default:
                this.page = "signin";
                console.log(this.page);
                break;
        }
    };
    LoginComponent.prototype.isFieldNotValid = function (field) {
        return !this.form.get(field).valid && this.form.get(field).touched;
    };
    LoginComponent.prototype.ValidatorDisplayCss = function (field) {
        return {
            'has-danger': this.isFieldNotValid(field)
        };
    };
    LoginComponent.prototype.isFieldNotValid1 = function (field) {
        return !this.formsighin.get(field).valid && this.formsighin.get(field).touched;
    };
    LoginComponent.prototype.ValidatorDisplayCss1 = function (field) {
        return {
            'has-danger': this.isFieldNotValid1(field)
        };
    };
    LoginComponent.prototype.isFieldNotValid2 = function (field) {
        return !this.formstep2.get(field).valid && this.formstep2.get(field).touched;
    };
    LoginComponent.prototype.ValidatorDisplayCss2 = function (field) {
        return {
            'has-danger': this.isFieldNotValid2(field)
        };
    };
    LoginComponent.prototype.isFieldNotValid3 = function (field) {
        return !this.formforgot.get(field).valid && this.formforgot.get(field).touched;
    };
    LoginComponent.prototype.ValidatorDisplayCss3 = function (field) {
        return {
            'has-danger': this.isFieldNotValid3(field)
        };
    };
    LoginComponent.prototype.isFieldNotValid4 = function (field) {
        return !this.formotp.get(field).valid && this.formotp.get(field).touched;
    };
    LoginComponent.prototype.ValidatorDisplayCss4 = function (field) {
        return {
            'has-danger': this.isFieldNotValid4(field)
        };
    };
    LoginComponent.prototype.isFieldNotValid5 = function (field) {
        return !this.formchange.get(field).valid && this.formchange.get(field).touched;
    };
    LoginComponent.prototype.ValidatorDisplayCss5 = function (field) {
        return {
            'has-danger': this.isFieldNotValid5(field)
        };
    };
    // validatorInputCss(field: string){
    //   return{
    //     'form-control-danger': this.isFieldNotValid(field)
    //   }
    // }
    LoginComponent.prototype.createFormValidate = function () {
        this.form = this.fb.group({
            firstname: [null,
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern(/^[A-Za-zก-๗]{2,15}$/)
                ]
            ],
            lastname: [null,
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern(/^[A-Za-zก-๗]{2,15}$/)
                ]
            ],
            email: [null,
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
                ]
            ],
            tel: [null,
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(10),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(10),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern(/^(0)[0-9]*$/)
                ]
            ]
            // ,
            // otp:[null,
            //     [
            //       Validators.required,
            //       // Validators.minLength(10),
            //       // Validators.maxLength(),
            //     Validators.pattern(/^[0-9]*$/)
            //     ]
            //     ]
            ,
            IDcard: [null,
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(13),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(13),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern(/^[0-9]*$/)
                ]
            ],
            prefix: [null,
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern(/^[A-Za-zก-๗]{3,15}$/)
                ]
            ]
        });
        this.formsighin = this.fb.group({
            username: [null,
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                    // Validators.minLength(8),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern(/^[A-Za-z0-9]+(?:[_-][A-Za-z0-9]+)*$/)
                ]
            ],
            password: [null,
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                    // Validators.minLength(8),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern(/^[a-zA-Z0-9]{6,16}$/)
                ]
            ]
        });
        this.formstep2 = this.fb.group({
            username: [null,
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(8),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern(/^[A-Za-z0-9]+(?:[_-][A-Za-z0-9]+)*$/)
                ]
            ],
            password: [null,
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(8),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern(/^[a-zA-Z0-9]{6,16}$/)
                ]
            ],
            repeatPassword: [null,
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(8),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern(/^[a-zA-Z0-9]{6,16}$/)
                    // Validators.pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)
                ]
            ],
        });
        this.formotp = this.fb.group({
            otp: [null,
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                    // Validators.minLength(10),
                    // Validators.maxLength(),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern(/^[0-9]*$/)
                ]
            ]
        });
        this.formforgot = this.fb.group({
            email: [null,
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
                ]
            ],
            IDcard: [null,
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(13),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(13),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern(/^[0-9]*$/)
                ]
            ]
        });
        this.formchange = this.fb.group({
            password: [null,
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(8),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern(/^[a-zA-Z0-9]{6,16}$/)
                ]
            ],
            repeatPassword: [null,
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(8),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern(/^[a-zA-Z0-9]{6,16}$/)
                    // Validators.pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)
                ]
            ],
        });
        // this.profile = this.form;
    };
    // onSubmit(){
    //   console.log(this.form)
    //     if(this.form.valid){        
    //       this.page = "signup2";
    //     }
    //     if(this.formsighin.invalid){
    //       this.isNotValid = true;
    //       this.validateAllFormFields(this.formsighin);
    //     }
    //     if(this.form.invalid){
    //       this.isNotValid = true;
    //       this.validateAllFormFields(this.form);
    //     }
    //     else if(this.formsighin.valid){        
    //       this.router.navigate(['myport']);
    //     }
    //     else if(this.formstep2.valid){        
    //       this.page = "otp";
    //       this.otp = "signup"
    //     }
    //     else if(this.formstep2.invalid){
    //       this.isNotValid = true;
    //       this.validateAllFormFields(this.formstep2);
    //     }
    //   }
    LoginComponent.prototype.validateAllFormFields = function (formGroup) {
        var _this = this;
        Object.keys(formGroup.controls).forEach(function (field) {
            var control = formGroup.get(field);
            if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]) {
                control.markAsTouched({ onlySelf: true });
            }
            else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]) {
                _this.validateAllFormFields(control);
            }
        });
    };
    LoginComponent.prototype.showDialog = function () {
        this.display = true;
    };
    LoginComponent.prototype.hideDialog = function () {
        this.display = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('disclaimer'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LoginComponent.prototype, "elName", void 0);
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")],
        })
        // ,'../../assets/Content/default/css/content/login.css'
        ,
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[myMatchHeight]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/myport/myport-menu/myport-menu.component.html":
/*!***************************************************************!*\
  !*** ./src/app/myport/myport-menu/myport-menu.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tabs-menu-wrapper\">\r\n    <ul class=\"nav nav-tabs\" role=\"tablist\" id=\"mutual-tab-menu\">\r\n        <li role=\"presentation\" id=\"menu1\" class=\"current\">\r\n            <a (click)=\"checkpage('dashboard')\" title=\"หน้ารวม Port\">หน้ารวม Port</a>\r\n        </li>\r\n    </ul>\r\n</div>"

/***/ }),

/***/ "./src/app/myport/myport-menu/myport-menu.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/myport/myport-menu/myport-menu.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/myport/myport-menu/myport-menu.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/myport/myport-menu/myport-menu.component.ts ***!
  \*************************************************************/
/*! exports provided: MyportMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyportMenuComponent", function() { return MyportMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MyportMenuComponent = /** @class */ (function () {
    function MyportMenuComponent() {
        this.page = 'dashboard';
    }
    MyportMenuComponent.prototype.ngOnInit = function () {
    };
    MyportMenuComponent.prototype.checkpage = function (page) {
        console.log(page);
        window.scroll(0, 0);
        switch (page) {
            case 'suitability':
                this.page = "suitability";
                break;
            case 'suitability-score':
                this.page = "suitability-score";
                break;
            case 'otp':
                this.page = "otp";
                break;
            case 'signup1':
                this.page = "signup1";
                break;
            case 'signup2':
                this.page = "signup2";
                break;
            default:
                this.page = "dashboard";
                console.log(this.page);
                break;
        }
    };
    MyportMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-myport-menu',
            template: __webpack_require__(/*! ./myport-menu.component.html */ "./src/app/myport/myport-menu/myport-menu.component.html"),
            styles: [__webpack_require__(/*! ./myport-menu.component.scss */ "./src/app/myport/myport-menu/myport-menu.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MyportMenuComponent);
    return MyportMenuComponent;
}());



/***/ }),

/***/ "./src/app/myport/myport.component.html":
/*!**********************************************!*\
  !*** ./src/app/myport/myport.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"\" id=\"maincontainer-wrapper\">\r\n    <div class=\"page-content-wrapper\">\r\n        <div class=\"mutual-fund-wrapper\" *ngIf=\"page == 'dashboard'\">\r\n            <div class=\"max-width-wrapper\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n                        <div class=\"tabs-menu-wrapper\">\r\n                            <!-- <ul class=\"nav nav-tabs\" role=\"tablist\" id=\"mutual-tab-menu\">\r\n                                <li role=\"presentation\" id=\"menu1\" class=\"current\">\r\n                                    <a (click)=\"checkpage('dashboard')\" title=\"หน้ารวม Port\">หน้ารวม Port</a>\r\n                                </li>\r\n                            </ul> -->\r\n                            <div class=\"dropdown dropdown-content\">\r\n                                    <button class=\"btn-med btn-primary dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">\r\n                                        หน้ารวม Port\r\n                                    </button>\r\n                                    <ul class=\"dropdown-menu\">\r\n                                        <li>\r\n                                            <a (click)=\"checkpage('dashboard')\" title=\"ตรวจสอบ/แก้ไข ข้อมูลส่วนตัว\">หน้ารวม Port</a>\r\n                                        </li>\r\n                                        <!-- <li>\r\n                                            <a (click)=\"checkpage('over-view')\" title=\"แบบประเมินความเสี่ยงในการลงทุนที่เหมาะสม\">แบบประเมินความเสี่ยงในการลงทุนที่เหมาะสม</a>\r\n                                        </li>\r\n                                        <li>\r\n                                            <a (click)=\"checkpage('change-password')\" title=\"เปลี่ยนรหัสผ่าน\">เปลี่ยนรหัสผ่าน</a>\r\n                                        </li>\r\n                                        <li>\r\n                                            <a (click)=\"checkpage('setting')\" title=\"ตั้งค่า\">ตั้งค่า</a>\r\n                                        </li> -->\r\n                                    </ul>\r\n                                    <div class=\"clearfix\"></div>\r\n                                </div>\r\n                        </div>\r\n                        <app-myport-menu></app-myport-menu>\r\n\r\n                        <div class=\"fund-table-wrapper\">\r\n                            <div class=\"heading-section\">\r\n                                <div class=\"detail-head-wrapper\">\r\n                                <div class=\"row\">\r\n                                    \r\n                                    <div class=\"col-sm-12 col-md-12 col-xs-12 icon-option mb-3\">\r\n                                        <ul class=\"\">\r\n                                            <!-- <li class=\"ico-fb\">\r\n                                                <a href=\"#\" title=\"facebook\">\r\n                                                    <img src=\"/assets/Images/icons/ico-pipe.png\" />\r\n                                                </a>\r\n                                            </li>\r\n                                            <li class=\"ico-line\">\r\n                                                <a href=\"#\" title=\"line\">\r\n                                                    <img src=\"/assets/Images/icons/ico-download.png\" />\r\n                                                </a>\r\n                                            </li> -->\r\n                                            <li class=\"ico-yt\">\r\n                                                <a title=\"youtube\">\r\n                                                    <img src=\"/assets/Images/icons/ico-print.png\" (click)=\"print()\"/>\r\n                                                </a>\r\n                                            </li>\r\n\r\n                                        </ul>\r\n                                    </div>\r\n                                    <div class=\"col-sm-6 col-md-3\">\r\n\r\n                                        <p>เลขที่ผู้ถือหน่วยลงทุน</p>\r\n                                        <div class=\"select-wrapper inline-block pb-3\">\r\n                                            <select name=\"ddlLink\" id=\"ddlLink\">\r\n                                                <option value=\"0\" selected=\"\">แสดงบัญชีทั้งหมด</option>\r\n                                                <option value=\"36\">9990244757</option>\r\n                                                <option value=\"29\">9990244757</option>\r\n                                            </select>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-sm-6 col-md-3\">\r\n                                        <p>ชื่อผู้ถือหน่วยลงทุน</p>\r\n                                        <span>เนติวัฒน์ โชติกร</span>\r\n                                    </div>\r\n                                    <div class=\"col-sm-6 col-md-3\">\r\n\r\n                                        <p>วันที่ออกรายงาน</p>\r\n                                        <span> {{ dateformat }}</span>\r\n                                    </div>\r\n                                    \r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-sm-6 col-md-6\">\r\n\r\n                                        <p>ที่อยู่</p>\r\n                                        <span>19/259 ซ.จุลดิส แขวงพญาไท เขตราชเทวี กรุงเทพมหานคร 10400</span>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"fund-list-wrapper\">\r\n                                \r\n                                        <div class=\"title-heading\">\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col-md-1 col-xs-4\">\r\n                                                    <img src=\"/assets/Images/icons/ico-asset.png\">\r\n                                                </div>\r\n                                                <div class=\"col-md-11 col-xs-8\">\r\n                                                    <div class=\"row\">\r\n                                                        <div class=\"col-md-6 text-md-left\">\r\n                                                        <h3>มูลค่าทรัพย์สินสุทธ(บาท)</h3>\r\n                                                        </div>\r\n                                                        <div class=\"col-md-6 text-md-right\">\r\n                                                        <h1>฿ 70,474,729.91</h1>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                                \r\n                                            </div>\r\n                                        </div>\r\n                                \r\n                            </div>\r\n                            <div class=\"row\">\r\n                                    <div class=\"col-sm\">\r\n                                        <div class=\"table-responsive\">\r\n                                            <table class=\"table table-performance\">\r\n                                                <thead>\r\n                                                    <tr class=\"captions\">\r\n                                                        <td colspan=\"11\">\r\n                                                            <h3>\r\n                                                                สัดส่วนเงินลงทุน\r\n                                                            </h3>\r\n                                                        </td>\r\n                                                    </tr>\r\n                                                    <tr>\r\n                                                        <th>\r\n                                                            Fund Type\r\n                                                        </th>\r\n                                                        <th>\r\n                                                            วันที่\r\n                                                        </th>\r\n                                                        <th>\r\n                                                            หน่วยคงเหลือ\r\n                                                        </th>\r\n                                                        <th>\r\n                                                            มูลค่าต่อหน่วย\r\n                                                        </th>\r\n                                                        <th class=\"bg-primary\">\r\n                                                            Current Amount <br/>(Bath)\r\n                                                        </th>\r\n                                                        <th class=\"bg-blue\">\r\n                                                            Unrealize<br/>(Gain/Loss) (บาท)\r\n                                                        </th>\r\n                                                    </tr>\r\n                                                </thead>\r\n                                                <tbody>\r\n                                                    \r\n                                                    <tr class=\"line\">\r\n                                                        <td>\r\n                                                            Long Term Equity\r\n                                                        </td>\r\n                                                        <td class=\"txt-right\">\r\n                                                            &nbsp;\r\n                                                        </td>\r\n                                                        <td class=\"txt-right\">\r\n                                                            &nbsp;\r\n                                                        </td>\r\n                                                        <td class=\"txt-right\">\r\n                                                             &nbsp;\r\n                                                        </td>\r\n                                                        <td class=\"txt-right\">\r\n                                                            498,756.44\r\n                                                        </td>\r\n                                                        <td class=\"txt-right\">\r\n                                                                0.71\r\n                                                        </td>\r\n                                                    </tr>\r\n                                                    <tr>\r\n                                                        <td>\r\n                                                            - LHSMART-LTF\r\n                                                        </td>\r\n                                                        <td class=\"txt-right\">\r\n                                                            03/03/2561\r\n                                                        </td>\r\n                                                        <td class=\"txt-right\">\r\n                                                            498,756.44\r\n                                                        </td>\r\n                                                        <td class=\"txt-right\">\r\n                                                            498,756.44\r\n                                                        </td>\r\n                                                        <td class=\"txt-right\">\r\n                                                            498,756.44\r\n                                                        </td>\r\n                                                        <td class=\"txt-right\">\r\n                                                             &nbsp;\r\n                                                        </td>\r\n                                                    </tr>\r\n                                                    <tr>\r\n                                                            <td>\r\n                                                                - LHSMART-LTF\r\n                                                            </td>\r\n                                                            <td class=\"txt-right\">\r\n                                                                03/03/2561\r\n                                                            </td>\r\n                                                            <td class=\"txt-right\">\r\n                                                                498,756.44\r\n                                                            </td>\r\n                                                            <td class=\"txt-right\">\r\n                                                                498,756.44\r\n                                                            </td>\r\n                                                            <td class=\"txt-right\">\r\n                                                                498,756.44\r\n                                                            </td>\r\n                                                            <td class=\"txt-right\">\r\n                                                                 &nbsp;\r\n                                                            </td>\r\n                                                        </tr>\r\n                                                    <tr class=\"line\">\r\n                                                            <td>\r\n                                                                Long Term Equity\r\n                                                            </td>\r\n                                                            <td class=\"txt-right\">\r\n                                                                &nbsp;\r\n                                                            </td>\r\n                                                            <td class=\"txt-right\">\r\n                                                                &nbsp;\r\n                                                            </td>\r\n                                                            <td class=\"txt-right\">\r\n                                                                 &nbsp;\r\n                                                            </td>\r\n                                                            <td class=\"txt-right\">\r\n                                                                498,756.44\r\n                                                            </td>\r\n                                                            <td class=\"txt-right\">\r\n                                                                    0.71\r\n                                                            </td>\r\n                                                        </tr>\r\n                                                        <tr>\r\n                                                            <td>\r\n                                                                - LHSMART-LTF\r\n                                                            </td>\r\n                                                            <td class=\"txt-right\">\r\n                                                                03/03/2561\r\n                                                            </td>\r\n                                                            <td class=\"txt-right\">\r\n                                                                498,756.44\r\n                                                            </td>\r\n                                                            <td class=\"txt-right\">\r\n                                                                498,756.44\r\n                                                            </td>\r\n                                                            <td class=\"txt-right\">\r\n                                                                498,756.44\r\n                                                            </td>\r\n                                                            <td class=\"txt-right\">\r\n                                                                 &nbsp;\r\n                                                            </td>\r\n                                                        </tr>\r\n                                                        <tr class=\"line\">\r\n                                                                <td>\r\n                                                                    Long Term Equity\r\n                                                                </td>\r\n                                                                <td class=\"txt-right\">\r\n                                                                    &nbsp;\r\n                                                                </td>\r\n                                                                <td class=\"txt-right\">\r\n                                                                    &nbsp;\r\n                                                                </td>\r\n                                                                <td class=\"txt-right\">\r\n                                                                     &nbsp;\r\n                                                                </td>\r\n                                                                <td class=\"txt-right\">\r\n                                                                    498,756.44\r\n                                                                </td>\r\n                                                                <td class=\"txt-right\">\r\n                                                                        0.71\r\n                                                                </td>\r\n                                                            </tr>\r\n                                                            <tr>\r\n                                                                <td>\r\n                                                                    - LHSMART-LTF\r\n                                                                </td>\r\n                                                                <td class=\"txt-right\">\r\n                                                                    03/03/2561\r\n                                                                </td>\r\n                                                                <td class=\"txt-right\">\r\n                                                                    498,756.44\r\n                                                                </td>\r\n                                                                <td class=\"txt-right\">\r\n                                                                    498,756.44\r\n                                                                </td>\r\n                                                                <td class=\"txt-right\">\r\n                                                                    498,756.44\r\n                                                                </td>\r\n                                                                <td class=\"txt-right\">\r\n                                                                     &nbsp;\r\n                                                                </td>\r\n                                                            </tr>\r\n                                                            <tr class=\"line\">\r\n                                                                    <td>\r\n                                                                        Long Term Equity\r\n                                                                    </td>\r\n                                                                    <td class=\"txt-right\">\r\n                                                                        &nbsp;\r\n                                                                    </td>\r\n                                                                    <td class=\"txt-right\">\r\n                                                                        &nbsp;\r\n                                                                    </td>\r\n                                                                    <td class=\"txt-right\">\r\n                                                                         &nbsp;\r\n                                                                    </td>\r\n                                                                    <td class=\"txt-right\">\r\n                                                                        498,756.44\r\n                                                                    </td>\r\n                                                                    <td class=\"txt-right\">\r\n                                                                            0.71\r\n                                                                    </td>\r\n                                                                </tr>\r\n                                                                <tr>\r\n                                                                    <td>\r\n                                                                        - LHSMART-LTF\r\n                                                                    </td>\r\n                                                                    <td class=\"txt-right\">\r\n                                                                        03/03/2561\r\n                                                                    </td>\r\n                                                                    <td class=\"txt-right\">\r\n                                                                        498,756.44\r\n                                                                    </td>\r\n                                                                    <td class=\"txt-right\">\r\n                                                                        498,756.44\r\n                                                                    </td>\r\n                                                                    <td class=\"txt-right\">\r\n                                                                        498,756.44\r\n                                                                    </td>\r\n                                                                    <td class=\"txt-right\">\r\n                                                                         &nbsp;\r\n                                                                    </td>\r\n                                                                </tr>\r\n                                                </tbody>\r\n                                            </table>\r\n                                        </div>\r\n                                    </div>\r\n                                    \r\n    \r\n                            </div>\r\n                            <div class=\"fund-list-wrapper\">                                \r\n                                    <div class=\"title-heading bg-blue\">\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-md-1 col-xs-4\">\r\n                                                <img src=\"/assets/Images/icons/ico-income.png\">\r\n                                            </div>\r\n                                            <div class=\"col-md-11 col-xs-8\">\r\n                                                    <div class=\"row\">\r\n                                                        <div class=\"col-md-6 text-md-left\">\r\n                                                        <h3>กำไร/ขาดทุน (บาท)</h3>\r\n                                                        </div>\r\n                                                        <div class=\"col-md-6 text-md-right\">\r\n                                                        <h1>฿ 669,638.80</h1>\r\n                                                        </div>\r\n                                                    </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    \r\n                                <div class=\"row\">\r\n                                <div class=\"col-md-12\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-sm-12 mt-3\"> <h4>สัดส่วนการลงทุน (Asset Alloction)</h4></div>\r\n                                        <div class=\"col-sm-12\"><div [chart]=\"chart\"></div></div>\r\n                                    </div>\r\n                                   \r\n                                    \r\n                               </div> \r\n                               <div class=\"col-md-6\">                                      \r\n                                </div>\r\n                                </div>\r\n                            \r\n                        </div>\r\n                        </div>\r\n                            </div>\r\n                            \r\n\r\n\r\n                            \r\n\r\n\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        \r\n    </div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/myport/myport.component.scss":
/*!**********************************************!*\
  !*** ./src/app/myport/myport.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media screen and (max-width: 767px) {\n  .fund-list-wrapper .title-heading {\n    padding: 20px; }\n  .fund-list-wrapper img {\n    padding: 20px; }\n  .fund-list-wrapper h1 {\n    font-size: 30px; } }\n"

/***/ }),

/***/ "./src/app/myport/myport.component.ts":
/*!********************************************!*\
  !*** ./src/app/myport/myport.component.ts ***!
  \********************************************/
/*! exports provided: MyportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyportComponent", function() { return MyportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_highcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-highcharts */ "./node_modules/angular-highcharts/angular-highcharts.es5.js");
/* harmony import */ var _Share_dateformat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Share/dateformat */ "./src/app/Share/dateformat.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { Highcharts } from 'highcharts';


var MyportComponent = /** @class */ (function () {
    function MyportComponent() {
        this.page = "dashboard";
        this.dateformat = _Share_dateformat__WEBPACK_IMPORTED_MODULE_2__["datethai"];
    }
    MyportComponent.prototype.ngOnInit = function () {
        $('#bottom-main-nav li').find('a').removeClass('current');
        $('#bottom-main-nav li#myport').find('a').addClass('current');
        this.chart = new angular_highcharts__WEBPACK_IMPORTED_MODULE_1__["Chart"]({
            chart: {
                type: 'pie',
            },
            // legend: {
            //     align: 'right',
            //     verticalAlign:'middle',
            //     width: 200,
            //     itemWidth: 100,
            //     y: 0,
            //     x: 0
            // },
            title: {
                text: ''
            },
            credits: {
                enabled: false
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                        style: {}
                    },
                    showInLegend: true
                }
            },
            series: [{
                    name: 'Name',
                    // colorByPoint: true,
                    data: [{
                            name: 'Fixed Income',
                            y: 39.14
                        }, {
                            name: 'Money Market',
                            y: 39.14
                        }, {
                            name: 'Mixed',
                            y: 10.34
                        }, {
                            name: 'Fund of Property Fund',
                            y: 10.34
                        }, {
                            name: 'Equity',
                            y: 10.34
                        }, {
                            name: 'Foreign Investment Fund',
                            y: 7.80
                        }, {
                            name: 'Retirement Mutual Fund',
                            y: 1.59
                        }, {
                            name: 'Long Term Equity Fund',
                            y: 0.71
                        }
                    ]
                }]
        });
    };
    MyportComponent.prototype.checkpage = function (page) {
        console.log(page);
        window.scroll(0, 0);
        switch (page) {
            case 'suitability':
                this.page = "suitability";
                break;
            case 'suitability-score':
                this.page = "suitability-score";
                break;
            case 'otp':
                this.page = "otp";
                break;
            case 'signup1':
                this.page = "signup1";
                break;
            case 'signup2':
                this.page = "signup2";
                break;
            default:
                this.page = "dashboard";
                console.log(this.page);
                break;
        }
    };
    MyportComponent.prototype.print = function () {
        window.focus();
        window.print();
    };
    MyportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-myport',
            template: __webpack_require__(/*! ./myport.component.html */ "./src/app/myport/myport.component.html"),
            styles: [__webpack_require__(/*! ./myport.component.scss */ "./src/app/myport/myport.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MyportComponent);
    return MyportComponent;
}());



/***/ }),

/***/ "./src/app/pagenotfound/pagenotfound.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pagenotfound/pagenotfound.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  pagenotfound works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/pagenotfound/pagenotfound.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pagenotfound/pagenotfound.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pagenotfound/pagenotfound.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pagenotfound/pagenotfound.component.ts ***!
  \********************************************************/
/*! exports provided: PagenotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagenotfoundComponent", function() { return PagenotfoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PagenotfoundComponent = /** @class */ (function () {
    function PagenotfoundComponent() {
    }
    PagenotfoundComponent.prototype.ngOnInit = function () {
    };
    PagenotfoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pagenotfound',
            template: __webpack_require__(/*! ./pagenotfound.component.html */ "./src/app/pagenotfound/pagenotfound.component.html"),
            styles: [__webpack_require__(/*! ./pagenotfound.component.scss */ "./src/app/pagenotfound/pagenotfound.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PagenotfoundComponent);
    return PagenotfoundComponent;
}());



/***/ }),

/***/ "./src/app/profile/changepassword/changepassword.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/profile/changepassword/changepassword.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"fund-table-wrapper\">\r\n  <div class=\"heading-section\">\r\n      <div class=\"row\">\r\n          <div class=\"detail-head-wrapper\">\r\n              <div class=\"col-md-12 col-xs-12 icon-option mb-3\">\r\n\r\n                  <ul class=\"\">\r\n                      <!-- <li class=\"ico-fb\">\r\n                          <a href=\"#\" title=\"facebook\">\r\n                              <img src=\"/assets/Images/icons/ico-pipe.png\" />\r\n                          </a>\r\n                      </li>\r\n                      <li class=\"ico-line\">\r\n                          <a href=\"#\" title=\"line\">\r\n                              <img src=\"/assets/Images/icons/ico-download.png\" />\r\n                          </a>\r\n                      </li> -->\r\n                      <li class=\"ico-yt\">\r\n                          <a href=\"#\" title=\"youtube\">\r\n                              <img src=\"/assets/Images/icons/ico-print.png\" />\r\n                          </a>\r\n                      </li>\r\n\r\n                  </ul>\r\n              </div>\r\n              <div class=\"col-md-3\">\r\n\r\n                  <p>เลขที่ผู้ถือหน่วยลงทุน</p>\r\n                  <div class=\"select-wrapper inline-block\">\r\n                      <select name=\"ddlLink\" id=\"ddlLink\">\r\n                          <option value=\"0\" selected=\"\">9990244757</option>\r\n                          <option value=\"36\">9990244757</option>\r\n                          <option value=\"29\">9990244757</option>\r\n                      </select>\r\n                  </div>\r\n              </div>\r\n              <div class=\"col-md-3\">\r\n                  <p>ชื่อผู้ถือหน่วยลงทุน</p>\r\n                  <span>เนติวัฒน์ โชติกร</span>\r\n              </div>\r\n          </div>\r\n      </div>\r\n  </div>\r\n  <div class=\"detail-body-wrapper\">\r\n      <div class=\"row\">\r\n          <div class=\"col-md-9\">\r\n              <div class=\"row\">\r\n                  <div class=\"col-md-4\">\r\n                      <span>รหัสผ่านปัจจุบัน</span>\r\n                  </div>\r\n                  <div class=\"col-md-6\">\r\n                      <div class=\"input-wrapper \">\r\n                          <input id=\"name\" name=\"name\" maxlength=\"30\" type=\"text\" class=\"bg-gray\" placeholder=\"\">\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n              <div class=\"row\">\r\n\r\n                  <div class=\"col-md-4\">\r\n                      <span>รหัสผ่านใหม่</span>\r\n                  </div>\r\n                  <div class=\"col-md-6\">\r\n                      <div class=\"input-wrapper \">\r\n                          <input id=\"name\" name=\"name\" maxlength=\"30\" type=\"text\" class=\"bg-gray\" placeholder=\"\">\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n              <div class=\"row\">\r\n\r\n                  <div class=\"col-md-4\">\r\n                      <span>ยืนยันรหัสผ่านใหม่อีกครั้ง</span>\r\n                  </div>\r\n                  <div class=\"col-md-6\">\r\n                      <div class=\"input-wrapper \">\r\n                          <input id=\"name\" name=\"name\" maxlength=\"30\" type=\"text\" class=\"bg-gray\" placeholder=\"\">\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n\r\n\r\n              <div class=\"row\">\r\n                  <div class=\"col-md-3 col-xs-6 offset-md-4\">\r\n                      <button class=\"btn-med btn-primary\">\r\n                          ตกลง\r\n                          <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\r\n\r\n                      </button>\r\n                  </div>\r\n                  <div class=\"col-md-3 col-xs-6\">\r\n                      <button class=\"btn-med btn-cancel\" >\r\n                          ยกเลิก\r\n                          <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\r\n\r\n                      </button>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/profile/changepassword/changepassword.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/profile/changepassword/changepassword.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/profile/changepassword/changepassword.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/profile/changepassword/changepassword.component.ts ***!
  \********************************************************************/
/*! exports provided: ChangepasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangepasswordComponent", function() { return ChangepasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChangepasswordComponent = /** @class */ (function () {
    function ChangepasswordComponent() {
    }
    ChangepasswordComponent.prototype.ngOnInit = function () {
        $('#mutual-tab-menu').find('li').removeClass('current');
        $('#mutual-tab-menu').find('li#menu3').addClass('current');
    };
    ChangepasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-changepassword',
            template: __webpack_require__(/*! ./changepassword.component.html */ "./src/app/profile/changepassword/changepassword.component.html"),
            styles: [__webpack_require__(/*! ./changepassword.component.scss */ "./src/app/profile/changepassword/changepassword.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ChangepasswordComponent);
    return ChangepasswordComponent;
}());



/***/ }),

/***/ "./src/app/profile/edit-profile/edit-profile.component.html":
/*!******************************************************************!*\
  !*** ./src/app/profile/edit-profile/edit-profile.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"fund-table-wrapper\">\r\n    <div class=\"heading-section\">\r\n        <div class=\"row\">\r\n            <div class=\"detail-head-wrapper\">\r\n                <div class=\"col-md-12 col-xs-12 icon-option mb-3\">\r\n\r\n                    <ul class=\"\">\r\n                        <!-- <li class=\"ico-fb\">\r\n                            <a href=\"#\" title=\"facebook\">\r\n                                <img src=\"/assets/Images/icons/ico-pipe.png\" />\r\n                            </a>\r\n                        </li>\r\n                        <li class=\"ico-line\">\r\n                            <a href=\"#\" title=\"line\">\r\n                                <img src=\"/assets/Images/icons/ico-download.png\" />\r\n                            </a>\r\n                        </li> -->\r\n                        <li class=\"ico-yt\">\r\n                            <a href=\"#\" title=\"youtube\">\r\n                                <img src=\"/assets/Images/icons/ico-print.png\" />\r\n                            </a>\r\n                        </li>\r\n\r\n                    </ul>\r\n                </div>\r\n                <div class=\"col-md-3\">\r\n\r\n                    <p>เลขที่ผู้ถือหน่วยลงทุน</p>\r\n\r\n                    <div class=\"select-wrapper inline-block\">\r\n                        <select name=\"ddlLink\" id=\"ddlLink\">\r\n                            <option value=\"0\" selected=\"\">9990244757</option>\r\n                            <option value=\"36\">9990244757</option>\r\n                            <option value=\"29\">9990244757</option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-3\">\r\n                    <p>ชื่อผู้ถือหน่วยลงทุน</p>\r\n                    <span>เนติวัฒน์ โชติกร</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n    <!-- <div class=\"col-md-6\"> -->\r\n    <div class=\"form-profile-wrapper\">\r\n        <form>\r\n            <div class=\"detail-body-wrapper\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n                        <H4 class=\"text-left\">ข้อมูลส่วนตัว</H4>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-3\">\r\n                        <p>เลขที่</p>\r\n                        <div class=\"input-wrapper \">\r\n                            <input id=\"password\" name=\"password\" maxlength=\"30\" type=\"text\" value=\"9/259\">\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"col-md-3\">\r\n                        <p>หมู่ที่</p>\r\n                        <div class=\"input-wrapper \">\r\n                            <input id=\"password\" name=\"password\" maxlength=\"30\" type=\"text\" value=\"\">\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"col-md-3\">\r\n                        <p>อาคาร/หมู่บ้าน</p>\r\n                        <div class=\"input-wrapper \">\r\n                            <input id=\"password\" name=\"password\" maxlength=\"30\" type=\"text\" value=\"\">\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"col-md-3\">\r\n                        <p>ชั้น</p>\r\n                        <div class=\"input-wrapper \">\r\n                            <input id=\"password\" name=\"password\" maxlength=\"30\" type=\"text\" value=\"\">\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-3\">\r\n                        <p>ซอย</p>\r\n                        <div class=\"input-wrapper \">\r\n                            <input id=\"password\" name=\"password\" maxlength=\"30\" type=\"text\" value=\"จุลดิส\">\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"col-md-3\">\r\n                        <p>ถนน</p>\r\n                        <div class=\"input-wrapper \">\r\n                            <input id=\"password\" name=\"password\" maxlength=\"30\" type=\"text\" value=\"\">\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"col-md-3\">\r\n                        <p>แขวง/ตำบล</p>\r\n                        <div class=\"input-wrapper \">\r\n                            <input id=\"password\" name=\"password\" maxlength=\"30\" type=\"text\" value=\"พญาไท\">\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"col-md-3\">\r\n                        <p>เขต/อำเภอ</p>\r\n                        <div class=\"input-wrapper \">\r\n                            <input id=\"password\" name=\"password\" maxlength=\"30\" type=\"text\" value=\"ราชเทวี\">\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-3\">\r\n                        <p>จังหวัด</p>\r\n                        <div class=\"select-wrapper inline-block\">\r\n\r\n                            <select name=\"ddlLink\" id=\"ddlLink\">\r\n                                <option value=\"0\" selected=\"\">กรุงเทพมหานคร</option>\r\n                                <option value=\"36\">กรุงเทพมหานคร</option>\r\n                                <option value=\"29\">กรุงเทพมหานคร</option>\r\n                            </select>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"col-md-3\">\r\n                        <p>รหัสไปรษณีย์</p>\r\n                        <div class=\"input-wrapper \">\r\n                            <input id=\"password\" name=\"password\" maxlength=\"30\" type=\"text\" value=\"10400\">\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"col-md-3\">\r\n                        <p>ประเทศ</p>\r\n                        <div class=\"select-wrapper inline-block\">\r\n\r\n                            <select name=\"ddlLink\" id=\"ddlLink\">\r\n                                <option value=\"0\" selected=\"\">ประเทศไทย</option>\r\n                                <option value=\"36\">ประเทศลาว</option>\r\n                                <option value=\"29\">ประเทศพม่า</option>\r\n                            </select>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n\r\n\r\n            </div>\r\n            <div class=\"detail-footer-wrapper\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-3\">\r\n                        <span>เบอร์โทรศัพท์ ที่ติดต่อ</span>\r\n                    </div>\r\n                    <div class=\"col-md-3\">\r\n                        <div class=\"input-wrapper \">\r\n                            <input id=\"password\" name=\"password\" maxlength=\"30\" type=\"text\" value=\"\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-3\">\r\n                        <span>เบอร์โทรศัพท์ ที่ทำงาน</span>\r\n                    </div>\r\n                    <div class=\"col-md-3\">\r\n                        <div class=\"input-wrapper \">\r\n                            <input id=\"password\" name=\"password\" maxlength=\"30\" type=\"text\" value=\"\">\r\n                        </div>\r\n                    </div>\r\n                    <!-- \r\n                    <div class=\"col-md-3\">\r\n                        <span>เบอร์โทรศัพท์ มือถือ</span>\r\n                    </div>\r\n\r\n                    <div class=\"col-md-3\">\r\n                        <div class=\"input-wrapper \">\r\n                            <input id=\"password\" name=\"password\" maxlength=\"30\" type=\"text\" value=\"0850594153\">\r\n                        </div>\r\n                    </div> -->\r\n                </div>\r\n\r\n                <!-- <div class=\"row\">\r\n                    \r\n                    \r\n                </div> -->\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-3\">\r\n                        <span>เบอร์โทรสาร</span>\r\n                    </div>\r\n\r\n                    <div class=\"col-md-3\">\r\n                        <div class=\"input-wrapper \">\r\n                            <input id=\"password\" name=\"password\" maxlength=\"30\" type=\"text\" value=\"\">\r\n                        </div>\r\n                    </div>\r\n                    <!-- <div class=\"col-md-3\">\r\n                        <span>อีเมล</span>\r\n                    </div>\r\n                    <div class=\"col-md-3\">\r\n                        <div class=\"input-wrapper \">\r\n                            <input id=\"password\" name=\"password\" maxlength=\"30\" type=\"text\" value=\"natiwat@hotmail.com\">\r\n                        </div>\r\n                    </div> -->\r\n\r\n                    <div class=\"col-md-3\">\r\n                        <span>หักภาษี ณ ที่จ่าย</span>\r\n                    </div>\r\n\r\n                    <div class=\"col-md-3\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-6 col-xs-6\">\r\n                                <div class=\"custom-radio-between\">\r\n                                    <input value=\"101\" id=\"101\" name=\"rad1\" type=\"radio\">\r\n                                    <label for=\"101\"></label>\r\n                                    <p>หัก</p>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-6 col-xs-6\">\r\n                                <div class=\"custom-radio-between\">\r\n                                    <input value=\"102\" id=\"102\" name=\"rad1\" type=\"radio\">\r\n                                    <label for=\"102\"></label>\r\n                                    <p>ไม่หัก</p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n                <div class=\"row mt-3 justify-content-center\">\r\n                    <div class=\"col-md-2 col-xs-6\">\r\n                        <button class=\"btn-med btn-primary\" data-toggle=\"modal\" data-target=\"#disclaimer\" data-backdrop=\"static\"\r\n                            data-keyboard=\"false\">\r\n                            ตกลง\r\n                            <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\r\n\r\n                        </button>\r\n\r\n                    </div>\r\n                    <div class=\"col-md-2 col-xs-6\">\r\n                        <button class=\"btn-med btn-cancel\">\r\n                            ยกเลิก\r\n                            <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\r\n\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n\r\n\r\n        </form>\r\n\r\n\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/profile/edit-profile/edit-profile.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/profile/edit-profile/edit-profile.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/profile/edit-profile/edit-profile.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/profile/edit-profile/edit-profile.component.ts ***!
  \****************************************************************/
/*! exports provided: EditProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfileComponent", function() { return EditProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EditProfileComponent = /** @class */ (function () {
    function EditProfileComponent() {
    }
    EditProfileComponent.prototype.ngOnInit = function () {
        $('#mutual-tab-menu').find('li').removeClass('current');
        $('#mutual-tab-menu').find('li#menu1').addClass('current');
    };
    EditProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-profile',
            template: __webpack_require__(/*! ./edit-profile.component.html */ "./src/app/profile/edit-profile/edit-profile.component.html"),
            styles: [__webpack_require__(/*! ./edit-profile.component.scss */ "./src/app/profile/edit-profile/edit-profile.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EditProfileComponent);
    return EditProfileComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n\r\n<div class=\"\" id=\"maincontainer-wrapper\">\r\n    <div class=\"page-content-wrapper\">\r\n        <div class=\"mutual-fund-wrapper\">\r\n            <div class=\"max-width-wrapper\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n                        <div class=\"tabs-menu-wrapper\">\r\n                            <div class=\"dropdown dropdown-content\">\r\n                                <button class=\"btn-med btn-primary dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">\r\n                                    เมนูกองทุน\r\n                                </button>\r\n                                <ul class=\"dropdown-menu\">\r\n                                    <li>\r\n                                        <a (click)=\"navigate('edit-profile')\" title=\"ตรวจสอบ/แก้ไข ข้อมูลส่วนตัว\">ตรวจสอบ/แก้ไข ข้อมูลส่วนตัว</a>\r\n                                    </li>\r\n                                    <li>\r\n                                        <a (click)=\"navigate('suitability')\" title=\"แบบประเมินความเสี่ยงในการลงทุนที่เหมาะสม\">แบบประเมินความเสี่ยงในการลงทุนที่เหมาะสม</a>\r\n                                    </li>\r\n                                    <li>\r\n                                        <a (click)=\"navigate('change-password')\" title=\"เปลี่ยนรหัสผ่าน\">เปลี่ยนรหัสผ่าน</a>\r\n                                    </li>\r\n                                    <li>\r\n                                        <a (click)=\"navigate('setting')\" title=\"ตั้งค่า\">ตั้งค่า</a>\r\n                                    </li>\r\n                                </ul>\r\n                                <div class=\"clearfix\"></div>\r\n                            </div>\r\n                            <ul class=\"nav nav-tabs\" role=\"tablist\" id=\"mutual-tab-menu\">\r\n                                <li role=\"presentation\" id=\"menu1\" class=\"current\">\r\n                                    <a title=\"ตรวจสอบ/แก้ไข ข้อมูลส่วนตัว\" (click)=\"navigate('edit-profile')\">ตรวจสอบ/แก้ไข ข้อมูลส่วนตัว</a>\r\n                                </li>\r\n                                <li role=\"presentation\" id=\"menu2\">\r\n                                    <a title=\"แบบประเมินความเสี่ยงในการลงทุนที่เหมาะสม\" (click)=\"navigate('suitability')\">แบบประเมินความเสี่ยงในการลงทุนที่เหมาะสม</a>\r\n                                </li>\r\n                                <li role=\"presentation\" id=\"menu3\">\r\n                                    <a title=\"เปลี่ยนรหัสผ่าน\" (click)=\"navigate('change-password')\">เปลี่ยนรหัสผ่าน</a>\r\n                                </li>\r\n                                <li role=\"presentation\" id=\"menu4\">\r\n                                    <a title=\"ตั้งค่า\" (click)=\"navigate('setting')\">ตั้งค่า</a>\r\n                                </li>\r\n\r\n                            </ul>\r\n                        </div>\r\n\r\n                        <router-outlet></router-outlet>\r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"modal fade modal-custom\" tabindex=\"-1\" role=\"dialog\" id=\"disclaimer\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n\r\n                <h4 class=\"modal-title\">ระบบความปลอดภัย OTP</h4>\r\n            </div>\r\n            <div class=\"modal-body\" id=\"content-scroll-1\">\r\n                <form>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-12\">\r\n                            <p>ระบบจะส่งรหัส OTP ไปยังเบอร์โทรศัพท์มือถือ\r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-8\">\r\n                            <div class=\"input-wrapper\">\r\n                                <input id=\"email-or-tel\" name=\"email-or-tel\" maxlength=\"30\" type=\"text\" placeholder=\"085XXXXXXX\" class=\"bg-gray\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-4\">\r\n                            <div class=\"btn-wrapper\">\r\n                                <button class=\"btn-med btn-blue\">\r\n                                    ส่งรหัส OTP\r\n                                    <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\r\n                                </button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-12\">\r\n                            <p>ระบุรหัส OTP ที่ได้รับ</p>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"input-wrapper\">\r\n                                <input id=\"name\" name=\"name\" maxlength=\"30\" type=\"text\" class=\"bg-gray\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row pb-4\">\r\n                        <div class=\"col-md-12\">\r\n                            <p>กรุณากดปุ่ม \"Request OTP\" เพื่อรับรหัสรักษาความปลอดภัย</p>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"row mt-3 justify-content-center\">\r\n                        <div class=\"col-md-4 col-xs-6\">\r\n                            <button class=\"btn-med btn-primary\">\r\n                                ยืนยัน\r\n                                <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\r\n                            </button>\r\n                        </div>\r\n                        <div class=\"col-md-4 col-xs-6\">\r\n                            <button class=\"btn-med btn-cancel\" data-dismiss=\"modal\">\r\n                                ยกเลิก\r\n                                <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n            </div>\r\n        </div>\r\n        <!-- /.modal-content -->\r\n    </div>\r\n    <!-- /.modal-dialog -->\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/profile/profile.component.scss":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* set global config vars */\n/* defualt page width setting(PC) */\n/* off canvas menu width *eg. 70px or 70% */\n/* main slide margin top */\n/* header height */\n/* footer height */\n/* global body setting */\n/* default font family */\n/*Arial*/\n/* text sizing multiplier */\n/* text sizing */\n/* default theme color */\n/* special theme */\n/* insert special theme for this website */\n/* text sizing */\n@media screen and (max-width: 999px) {\n  .fund-list-wrapper .title-heading {\n    height: 120px;\n    vertical-align: middle;\n    padding: 25px 15px; } }\n@media screen and (max-width: 767px) {\n  .fund-list-wrapper h3 {\n    font-size: 30px; }\n  .fund-list-wrapper .title-heading {\n    height: 120px;\n    padding: 30px;\n    vertical-align: middle; } }\n"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(route, router) {
        this.route = route;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        $('#bottom-main-nav li').find('a').removeClass('current');
        $('#bottom-main-nav li#profile').find('a').addClass('current');
    };
    ProfileComponent.prototype.ngAfterViewInit = function () {
    };
    ProfileComponent.prototype.navigate = function (target) {
        var target = target;
        console.log(target);
        this.router.navigate([target], { relativeTo: this.route });
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.scss */ "./src/app/profile/profile.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/profile/setting/setting.component.html":
/*!********************************************************!*\
  !*** ./src/app/profile/setting/setting.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"fund-table-wrapper\">\r\n  <div class=\"heading-section\">\r\n      <div class=\"row\">\r\n          <div class=\"detail-head-wrapper\">\r\n              <div class=\"col-md-12 col-xs-12 icon-option mb-3\">\r\n\r\n                  <ul class=\"\">\r\n                      <!-- <li class=\"ico-fb\">\r\n                          <a href=\"#\" title=\"facebook\">\r\n                              <img src=\"/assets/Images/icons/ico-pipe.png\" />\r\n                          </a>\r\n                      </li>\r\n                      <li class=\"ico-line\">\r\n                          <a href=\"#\" title=\"line\">\r\n                              <img src=\"/assets/Images/icons/ico-download.png\" />\r\n                          </a>\r\n                      </li> -->\r\n                      <li class=\"ico-yt\">\r\n                          <a href=\"#\" title=\"youtube\">\r\n                              <img src=\"/assets/Images/icons/ico-print.png\" />\r\n                          </a>\r\n                      </li>\r\n\r\n                  </ul>\r\n              </div>\r\n              <div class=\"col-md-3\">\r\n\r\n                  <p>เลขที่ผู้ถือหน่วยลงทุน</p>\r\n                  <div class=\"select-wrapper inline-block\">\r\n                      <select name=\"ddlLink\" id=\"ddlLink\">\r\n                          <option value=\"0\" selected=\"\">9990244757</option>\r\n                          <option value=\"36\">9990244757</option>\r\n                          <option value=\"29\">9990244757</option>\r\n                      </select>\r\n                  </div>\r\n              </div>\r\n              <div class=\"col-md-3\">\r\n                  <p>ชื่อผู้ถือหน่วยลงทุน</p>\r\n                  <span>เนติวัฒน์ โชติกร</span>\r\n              </div>\r\n          </div>\r\n      </div>\r\n  </div>\r\n  <div class=\"detail-body-wrapper\">\r\n      <div class=\"row\">\r\n          <div class=\"col-md-9\">\r\n              <div class=\"row\">\r\n                  <div class=\"col-md-4\">\r\n                      <span>เลือกหน้าแรกที่แสดง</span>\r\n                  </div>\r\n                  <div class=\"col-md-6\">\r\n                      <div class=\"select-wrapper inline-block\">\r\n                          <select name=\"ddlLink\" id=\"ddlLink\">\r\n                              <option value=\"0\" selected=\"\">ยอดคงเหลือ</option>\r\n                              <option value=\"36\">ยอดคงเหลือ</option>\r\n                              <option value=\"29\">ยอดคงเหลือ</option>\r\n                          </select>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                  <div class=\"col-md-4\">\r\n                      <span>ยืนยันรหัสผ่าน</span>\r\n                  </div>\r\n                  <div class=\"col-md-6\">\r\n                      <div class=\"input-wrapper \">\r\n                          <input id=\"name\" name=\"name\" maxlength=\"30\" type=\"text\" class=\"bg-gray\" placeholder=\"\">\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                  <div class=\"col-md-3 col-xs-6 offset-md-4\">\r\n                      <button class=\"btn-med btn-primary\" >\r\n                          ตกลง\r\n                          <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\r\n\r\n                      </button>\r\n                  </div>\r\n                  <div class=\"col-md-3 col-xs-6\">\r\n                      <button class=\"btn-med btn-cancel\" >\r\n                          ยกเลิก\r\n                          <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\r\n\r\n                      </button>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/profile/setting/setting.component.scss":
/*!********************************************************!*\
  !*** ./src/app/profile/setting/setting.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/profile/setting/setting.component.ts":
/*!******************************************************!*\
  !*** ./src/app/profile/setting/setting.component.ts ***!
  \******************************************************/
/*! exports provided: SettingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingComponent", function() { return SettingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SettingComponent = /** @class */ (function () {
    function SettingComponent() {
    }
    SettingComponent.prototype.ngOnInit = function () {
        $('#mutual-tab-menu').find('li').removeClass('current');
        $('#mutual-tab-menu').find('li#menu4').addClass('current');
    };
    SettingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-setting',
            template: __webpack_require__(/*! ./setting.component.html */ "./src/app/profile/setting/setting.component.html"),
            styles: [__webpack_require__(/*! ./setting.component.scss */ "./src/app/profile/setting/setting.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SettingComponent);
    return SettingComponent;
}());



/***/ }),

/***/ "./src/app/profile/suitability/suitability.component.html":
/*!****************************************************************!*\
  !*** ./src/app/profile/suitability/suitability.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"fund-table-wrapper\" *ngIf=\"page == 'over-view'\">\r\n  <div class=\"heading-section\">\r\n      <div class=\"detail-head-wrapper\" style=\"border:unset;\">\r\n          <div class=\"row\">\r\n              <div class=\"col-md-12 col-xs-12 icon-option mb-3\">\r\n                  <ul class=\"\">\r\n                      <!-- <li class=\"ico-fb\">\r\n                          <a href=\"#\" title=\"facebook\">\r\n                              <img src=\"/assets/Images/icons/ico-pipe.png\" />\r\n                          </a>\r\n                      </li>\r\n                      <li class=\"ico-line\">\r\n                          <a href=\"#\" title=\"line\">\r\n                              <img src=\"/assets/Images/icons/ico-download.png\" />\r\n                          </a>\r\n                      </li> -->\r\n                      <li class=\"ico-yt\">\r\n                          <a href=\"#\" title=\"youtube\">\r\n                              <img src=\"/assets/Images/icons/ico-print.png\" />\r\n                          </a>\r\n                      </li>\r\n\r\n                  </ul>\r\n              </div>\r\n              <div class=\"col-md-3\">\r\n                  <p>เลขที่ผู้ถือหน่วยลงทุน</p>\r\n                  <div class=\"select-wrapper inline-block\">\r\n                      <select name=\"ddlLink\" id=\"ddlLink\">\r\n                          <option value=\"0\" selected=\"\">9990244757</option>\r\n                          <option value=\"36\">9990244757</option>\r\n                          <option value=\"29\">9990244757</option>\r\n                      </select>\r\n                  </div>\r\n              </div>\r\n              <div class=\"col-md-3\">\r\n                  <p>ชื่อผู้ถือหน่วยลงทุน</p>\r\n                  <span>เนติวัฒน์ โชติกร</span>\r\n              </div>\r\n              <div class=\"col-md-3\">\r\n                  <p>วันที่ทำรายงาน</p>\r\n                  <span>7 มิถุนายน 2561</span>\r\n              </div>\r\n              <div class=\"col-md-3\">\r\n                  <p>วันหมดอายุ</p>\r\n                  <span>7 มิถุนายน 2561</span>\r\n              </div>\r\n          </div>\r\n          <div class=\"row mt-md-3\">\r\n              <div class=\"col-md-3\">\r\n                  <p>คะแนนจากการประเมินความเสี่ยงของท่าน</p>\r\n                  <span>-</span>\r\n              </div>\r\n              <div class=\"col-md-3\">\r\n                  <p>ท่านเป็นนักลงทุนความเสี่ยงระดับ</p>\r\n                  <span>3</span>\r\n              </div>\r\n          </div>\r\n          <div class=\"row justify-content-center mb-3\">\r\n              <div class=\"col-md-2 col-xs-6 col-sm-4\">\r\n                  <button class=\"btn-med btn-primary\" (click)=\"checkpage('suitability-test')\">\r\n                      แก้ไขข้อมูล\r\n                      <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\r\n                  </button>\r\n              </div>\r\n          </div>\r\n      </div>\r\n  </div>\r\n</div>\r\n<div class=\"fund-table-wrapper\" *ngIf=\"page == 'suitability-test'\">\r\n    <div class=\"heading-section\">\r\n        <div class=\"row\">\r\n            <div class=\"detail-head-wrapper\">\r\n                <div class=\"col-md-12 col-xs-12 icon-option mb-3\">\r\n\r\n                    <ul class=\"\">\r\n                        <!-- <li class=\"ico-fb\">\r\n                            <a href=\"#\" title=\"facebook\">\r\n                                <img src=\"/assets/Images/icons/ico-pipe.png\" />\r\n                            </a>\r\n                        </li>\r\n                        <li class=\"ico-line\">\r\n                            <a href=\"#\" title=\"line\">\r\n                                <img src=\"/assets/Images/icons/ico-download.png\" />\r\n                            </a>\r\n                        </li> -->\r\n                        <li class=\"ico-yt\">\r\n                            <a href=\"#\" title=\"youtube\">\r\n                                <img src=\"/assets/Images/icons/ico-print.png\" />\r\n                            </a>\r\n                        </li>\r\n\r\n                    </ul>\r\n                </div>\r\n                <div class=\"col-sm-6 col-md-3\">\r\n\r\n                    <p>เลขที่ผู้ถือหน่วยลงทุน</p>\r\n                    <div class=\"select-wrapper inline-block\">\r\n                        <select name=\"ddlLink\" id=\"ddlLink\">\r\n                            <option value=\"0\" selected=\"\">9990244757</option>\r\n                            <option value=\"36\">9990244757</option>\r\n                            <option value=\"29\">9990244757</option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-6 col-md-3\">\r\n                    <p>ชื่อผู้ถือหน่วยลงทุน</p>\r\n                    <span>เนติวัฒน์ โชติกร</span>\r\n                </div>\r\n                <div class=\"col-sm-6 col-md-3\">\r\n\r\n                </div>\r\n                <div class=\"col-sm-6 col-md-3\">\r\n\r\n\r\n                </div>\r\n                <div class=\"col-sm-12 col-md-12 mt-md-3\">\r\n                    <p>ที่อยู่</p>\r\n                    <span>19/259 ซ.จุลดิส แขวงพญาไท เขตราชเทวี กรุงเทพมหานคร 10400</span>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"detail-head-wrapper\" style=\"padding-bottom:10px;\">\r\n                <div class=\"col-md-6 text-left\">\r\n                    <p class=\"no-margin\">วันที่ทำแบบสอบถาม\r\n                        <span> 03/03/2561/2563</span>\r\n                    </p>\r\n                </div>\r\n                <div class=\"col-md-6 text-md-right\">\r\n                    <p class=\"no-margin\">NO.\r\n                        <span>01</span>\r\n                    </p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"open-account-wrapper\">\r\n        <form name=\"form2\" data-toggle=\"validator\" role=\"form\" method=\"post\">\r\n            <!-- -->\r\n            <div class=\"open-account-box\">\r\n                <div class=\"title-box\">\r\n                    <h3 class=\"sub-title -main-color\">มีคำถามทั้งหมด 11 ข้อ\r\n                        <span class=\"color-red\">ให้เลือกคำตอบที่คิดว่าดีที่สุดสำหรับนักลงทุนข้อละ 1 คำตอบ</span>\r\n                    </h3>\r\n                </div>\r\n                <div class=\"wrap-container\">\r\n                    <div class=\"wrap-suitability\">\r\n                        <div class=\"row\">\r\n                            <div class=\"choice-wrap -select-type\">\r\n                                <div class=\"col-sm-6 active\" id=\"personal\">\r\n                                    <div class=\"form-group\">\r\n                                        <div class=\"label-txt\">\r\n                                            <div class=\"form-check\">\r\n                                                <!--RADIO 1-->\r\n                                                <div class=\"custom-radio-between\">\r\n                                                    <input value=\"10\" id=\"size10\" name=\"account-type\" type=\"radio\" checked (click)=\"checktype($event)\">\r\n                                                    <label for=\"size10\" class=\"mt-2\"></label>\r\n                                                    <label for=\"size10\" class=\"item\">\r\n                                                        <img src=\"/assets/Images/icons/Person-icon.png\">\r\n                                                        <!-- <img src=\"/assets/Images/icons/person-active.png\"> -->\r\n                                                        <span>บุคคลธรรมดา</span>\r\n                                                    </label>\r\n                                                </div>\r\n                                                <!-- <input type=\"radio\" value=\"10\" id=\"size10\" name=\"account-type\" checked=\"checked\" (click)=\"checktype($event)\"/> -->\r\n\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-md-12\">\r\n                                            <div class=\"question-wrapper\">\r\n                                                <span>1. ปัจจุบันท่านอายุเท่าไร</span>\r\n                                            </div>\r\n                                            <div class=\"answer-wrapper\" id=\"answerP1\">\r\n                                                <div class=\"row\">\r\n                                                    <div class=\"col-sm-6 col-md-6\">\r\n                                                        <div class=\"custom-radio-between\">\r\n                                                            <input value=\"a_1\" id=\"a_1\" name=\"q_1\" type=\"radio\">\r\n                                                            <!-- <input id=\"b_1\" type=\"radio\" name=\"q_1\" value=\"b_1\" required class=\"form-check-input rdo_custom\" /> -->\r\n                                                            <label for=\"a_1\"></label>\r\n                                                            <!-- <p >หนังสือรับรองฯ ขายคืน RMF</p> -->\r\n                                                            <label for=\"a_1\" class=\"control-label\">เกิน 60 ปี</label>\r\n                                                        </div>\r\n                                                    </div>\r\n\r\n                                                    <div class=\"col-sm-6 col-md-6\">\r\n                                                        <div class=\"custom-radio-between\">\r\n                                                            <input id=\"b_1\" type=\"radio\" name=\"q_1\" value=\"b_1\" required class=\"form-check-input rdo_custom\" />\r\n                                                            <label for=\"b_1\"></label>\r\n                                                            <label for=\"b_1\" class=\"title-fill control-label lbl_custom\">50 - 60 ปี</label>\r\n\r\n                                                        </div>\r\n\r\n\r\n                                                    </div>\r\n\r\n                                                    <div class=\"col-sm-6 col-md-6\">\r\n                                                        <div class=\"custom-radio-between\">\r\n                                                            <input id=\"c_1\" type=\"radio\" name=\"q_1\" value=\"c_1\" required class=\"form-check-input rdo_custom\" />\r\n                                                            <label for=\"c_1\"></label>\r\n                                                            <label for=\"c_1\" class=\"title-fill control-label lbl_custom\">35 - 49 ปี</label>\r\n\r\n                                                        </div>\r\n                                                    </div>\r\n\r\n                                                    <div class=\"col-sm-6 col-md-6\">\r\n                                                        <div class=\"custom-radio-between\">\r\n                                                            <input id=\"d_1\" type=\"radio\" name=\"q_1\" value=\"d_1\" required class=\"form-check-input rdo_custom\" />\r\n                                                            <label for=\"d_1\"></label>\r\n                                                            <label for=\"d_1\" class=\"title-fill control-label lbl_custom\">ต่ำกว่า 35 ปี</label>\r\n\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                        <div class=\"col-md-12\">\r\n                                            <div class=\"question-wrapper\">\r\n                                                <span>2. ระดับการศึกษาของท่าน</span>\r\n                                            </div>\r\n                                            <div class=\"answer-wrapper\" id=\"answerP2\">\r\n                                                <div class=\"row\">\r\n                                                    <div class=\"col-sm-12\">\r\n                                                        <div class=\"custom-radio-between\">\r\n                                                            <input id=\"a_2\" type=\"radio\" name=\"q_2\" value=\"a_2\" required class=\"form-check-input rdo_custom\" />\r\n                                                            <label for=\"a_2\"></label>\r\n                                                            <label for=\"a_2\" class=\"title-fill control-label lbl_custom\">น้อยกว่าปริญญาตรี</label>\r\n\r\n                                                        </div>\r\n                                                    </div>\r\n\r\n                                                    <div class=\"col-sm-12\">\r\n                                                        <div class=\"custom-radio-between\">\r\n                                                            <input id=\"b_2\" type=\"radio\" name=\"q_2\" value=\"b_2\" required class=\"form-check-input rdo_custom\" />\r\n                                                            <label for=\"b_2\"></label>\r\n                                                            <label for=\"b_2\" class=\"title-fill control-label lbl_custom\">ตั้งแต่ปริญญาตรีขึ้นไป</label>\r\n\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-sm-6\" id=\"company\">\r\n                                    <div class=\"form-group\">\r\n                                        <div class=\"label-txt\">\r\n                                            <div class=\"form-check\">\r\n                                                <!--RADIO 2-->\r\n                                                <div class=\"custom-radio-between\">\r\n                                                    <input value=\"15\" id=\"size15\" name=\"account-type\" type=\"radio\" (click)=\"checktype($event)\">\r\n                                                    <label for=\"size15\" class=\"mt-2\"></label>\r\n                                                    <label for=\"size15\" class=\"item\">\r\n                                                        <img src=\"/assets/Images/icons/juristic person icon.png\">\r\n                                                        <!-- <img src=\"/assets/Images/icons/person-active.png\"> -->\r\n                                                        <span>นิติบุคคล</span>\r\n                                                    </label>\r\n                                                </div>\r\n                                                <!-- <input type=\"radio\" value=\"15\" id=\"size15\" name=\"account-type\" (click)=\"checktype($event)\" />\r\n                                            <label for=\"size15\" class=\"item\">\r\n                                                <img src=\"/assets/Images/icons/juristic person icon.png\">\r\n                                                <span>นิติบุคคล</span>\r\n                                            </label> -->\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-md-12\">\r\n                                            <div class=\"question-wrapper\">\r\n                                                <span>1. ธุรกิจก่อตั้งขึ้นมาเป็นระยะเวลาเท่าไหร่</span>\r\n                                            </div>\r\n                                            <div class=\"answer-wrapper\" id=\"answerC1\">\r\n                                                <div class=\"row\">\r\n                                                    <div class=\"col-sm-6 col-md-6\">\r\n                                                        <div class=\"custom-radio-between\">\r\n                                                            <input value=\"qca_1\" id=\"qca_1\" name=\"qc1\" type=\"radio\">\r\n                                                            <label for=\"qca_1\"></label>\r\n                                                            <label for=\"qca_1\" class=\"control-label\">1 - 3 ปี</label>\r\n                                                        </div>\r\n                                                    </div>\r\n\r\n                                                    <div class=\"col-sm-6 col-md-6\">\r\n                                                        <div class=\"custom-radio-between\">\r\n                                                            <input id=\"qcb_1\" type=\"radio\" name=\"qc1\" value=\"qcb_1\" required class=\"form-check-input rdo_custom\" />\r\n                                                            <label for=\"qcb_1\"></label>\r\n                                                            <label for=\"qcb_1\" class=\"title-fill control-label lbl_custom\">2 - 6 ปี</label>\r\n\r\n                                                        </div>\r\n\r\n\r\n                                                    </div>\r\n\r\n                                                    <div class=\"col-sm-6 col-md-6\">\r\n                                                        <div class=\"custom-radio-between\">\r\n                                                            <input id=\"qcc_1\" type=\"radio\" name=\"qc1\" value=\"qcc_1\" required class=\"form-check-input rdo_custom\" />\r\n                                                            <label for=\"qcc_1\"></label>\r\n                                                            <label for=\"qcc_1\" class=\"title-fill control-label lbl_custom\">7 - 10 ปี</label>\r\n\r\n                                                        </div>\r\n                                                    </div>\r\n\r\n                                                    <div class=\"col-sm-6 col-md-6\">\r\n                                                        <div class=\"custom-radio-between\">\r\n                                                            <input id=\"qcd_1\" type=\"radio\" name=\"qc1\" value=\"qcd_1\" required class=\"form-check-input rdo_custom\" />\r\n                                                            <label for=\"qcd_1\"></label>\r\n                                                            <label for=\"qcd_1\" class=\"title-fill control-label lbl_custom\">10 ปีขึ้นไป</label>\r\n\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                        <div class=\"col-md-12\">\r\n                                            <div class=\"question-wrapper\">\r\n                                                <span>2. ประเภทธุรกิจ</span>\r\n                                            </div>\r\n                                            <div class=\"answer-wrapper\" id=\"answerC2\">\r\n                                                <div class=\"row\">\r\n                                                    <div class=\"col-sm-12\">\r\n                                                        <div class=\"custom-radio-between\">\r\n                                                            <input id=\"qca_2\" type=\"radio\" name=\"qc2\" value=\"qca_2\" required class=\"form-check-input rdo_custom\" />\r\n                                                            <label for=\"qca_2\"></label>\r\n                                                            <label for=\"qca_2\" class=\"title-fill control-label lbl_custom\">สถาบันการเงิน</label>\r\n\r\n                                                        </div>\r\n                                                    </div>\r\n\r\n                                                    <div class=\"col-sm-12\">\r\n                                                        <div class=\"row\">\r\n                                                            <div class=\"col-md-2\">\r\n                                                                <div class=\"custom-radio-between\">\r\n                                                                    <input id=\"qcb_2\" type=\"radio\" name=\"qc2\" value=\"qcb_2\" required class=\"form-check-input rdo_custom\" />\r\n                                                                    <label for=\"qcb_2\"></label>\r\n                                                                    <label for=\"qcb_2\" class=\"title-fill control-label lbl_custom\">อื่นๆ</label>\r\n                                                                </div>\r\n\r\n                                                            </div>\r\n                                                            <div class=\"col-md-6\">\r\n                                                                <div class=\"input-wrapper \">\r\n                                                                    <input id=\"name\" name=\"name\" maxlength=\"30\" type=\"text\" class=\"\">\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div>\r\n\r\n\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"row\">\r\n                            <div class=\"choice-wrap\">\r\n                                <div class=\"col-md-12\">\r\n                                    <div class=\"question-wrapper\">\r\n                                        <span>3. ประสบการณ์การลงทุนในหลักทรัพย์ของท่าน (หลักทรัพย์ หมายถึง\r\n                                            หน่วยลงทุน, หุ้นกู้, หุ้น, พันธบัตรรัฐบาล และตราสารอนุพันธ์)</span>\r\n                                    </div>\r\n                                    <div class=\"answer-wrapper\">\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-sm-12 col-md-3\">\r\n                                                <div class=\"custom-radio-between\">\r\n                                                    <input id=\"a_3\" type=\"radio\" name=\"q_3\" value=\"a_3\" required class=\"form-check-input rdo_custom\" />\r\n                                                    <label for=\"a_3\"></label>\r\n                                                    <label for=\"a_3\" class=\"title-fill control-label lbl_custom\">\r\n                                                        ไม่มี</label>\r\n                                                    <!-- <div class=\"check\"></div> -->\r\n                                                </div>\r\n                                            </div>\r\n\r\n                                            <div class=\"col-sm-12 col-md-3\">\r\n                                                <div class=\"custom-radio-between\">\r\n                                                    <input id=\"b_3\" type=\"radio\" name=\"q_3\" value=\"b_3\" required class=\"form-check-input rdo_custom\" />\r\n                                                    <label for=\"b_3\"></label>\r\n                                                    <label for=\"b_3\" class=\"title-fill control-label lbl_custom\">\r\n                                                        น้อยกว่า 1 ปี</label>\r\n                                                    <!-- <div class=\"check\"></div> -->\r\n                                                </div>\r\n                                            </div>\r\n\r\n                                            <div class=\"col-sm-12 col-md-3\">\r\n                                                <div class=\"custom-radio-between\">\r\n                                                    <input id=\"c_3\" type=\"radio\" name=\"q_3\" value=\"c_3\" required class=\"form-check-input rdo_custom\" />\r\n                                                    <label for=\"c_3\"></label>\r\n                                                    <label for=\"c_3\" class=\"title-fill control-label lbl_custom\">\r\n                                                        1 - 5 ปี</label>\r\n                                                    <!-- <div class=\"check\"></div> -->\r\n                                                </div>\r\n                                            </div>\r\n\r\n                                            <div class=\"col-sm-12 col-md-3\">\r\n                                                <div class=\"custom-radio-between\">\r\n                                                    <input id=\"d_3\" type=\"radio\" name=\"q_3\" value=\"d_3\" required class=\"form-check-input rdo_custom\" />\r\n                                                    <label for=\"d_3\"></label>\r\n                                                    <label for=\"d_3\" class=\"title-fill control-label lbl_custom\">\r\n                                                        มากกว่า 5 ปี</label>\r\n                                                    <!-- <div class=\"check\"></div> -->\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <!-- 3 -->\r\n\r\n                        <div class=\"row\">\r\n                            <div class=\"choice-wrap\">\r\n                                <div class=\"col-md-12\">\r\n                                    <div class=\"question-wrapper\">\r\n                                        <span>4. ระยะเวลาที่ท่านคาดว่าไม่จำเป็นต้องใช้เงินลงทุนในส่วนนี้</span>\r\n                                    </div>\r\n                                    <div class=\"answer-wrapper\">\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-sm-12 col-md-3\">\r\n                                                <div class=\"custom-radio-between\">\r\n                                                    <input id=\"a_4\" type=\"radio\" name=\"q_4\" value=\"a_4\" required class=\"form-check-input rdo_custom\" />\r\n                                                    <label for=\"a_4\"></label>\r\n                                                    <label for=\"a_4\" class=\"title-fill control-label lbl_custom\">\r\n                                                        น้อยกว่า 1 ปี</label>\r\n                                                    <!-- <div class=\"check\"></div> -->\r\n                                                </div>\r\n                                            </div>\r\n\r\n                                            <div class=\"col-sm-12 col-md-3\">\r\n                                                <div class=\"custom-radio-between\">\r\n                                                    <input id=\"b_4\" type=\"radio\" name=\"q_4\" value=\"b_4\" required class=\"form-check-input rdo_custom\" />\r\n                                                    <label for=\"b_4\"></label>\r\n                                                    <label for=\"b_4\" class=\"title-fill control-label lbl_custom\">\r\n                                                        1 - 3 ปีี</label>\r\n                                                    <div class=\"check\"></div>\r\n                                                </div>\r\n                                            </div>\r\n\r\n                                            <div class=\"col-sm-12 col-md-3\">\r\n                                                <div class=\"custom-radio-between\">\r\n                                                    <input id=\"c_4\" type=\"radio\" name=\"q_4\" value=\"c_4\" required class=\"form-check-input rdo_custom\" />\r\n                                                    <label for=\"c_4\"></label>\r\n                                                    <label for=\"c_4\" class=\"title-fill control-label lbl_custom\">\r\n                                                        3 - 7 ปี</label>\r\n                                                    <div class=\"check\"></div>\r\n                                                </div>\r\n                                            </div>\r\n\r\n                                            <div class=\"col-sm-12 col-md-3\">\r\n                                                <div class=\"custom-radio-between\">\r\n                                                    <input id=\"d_4\" type=\"radio\" name=\"q_4\" value=\"d_4\" required class=\"form-check-input rdo_custom\" />\r\n                                                    <label for=\"d_4\"></label>\r\n                                                    <label for=\"d_4\" class=\"title-fill control-label lbl_custom\">\r\n                                                        มากกว่า 7 ปี</label>\r\n                                                    <div class=\"check\"></div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <!-- 4 -->\r\n\r\n                        <div class=\"row\">\r\n                            <div class=\"choice-wrap\">\r\n\r\n                                <div class=\"col-md-12\">\r\n                                    <div class=\"question-wrapper\">\r\n                                        <span>5. ท่านต้องการรายได้จากเงินลงทุนในส่วนนี้เพื่อเป็นค่าใช้จ่ายประจำหรือไม่</span>\r\n                                    </div>\r\n                                    <div class=\"answer-wrapper\">\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-sm-12 col-md-3\">\r\n                                                <div class=\"custom-radio-between\">\r\n                                                    <input id=\"a_5\" type=\"radio\" name=\"q_5\" value=\"a_5\" required class=\"form-check-input rdo_custom\" />\r\n                                                    <label for=\"a_5\"></label>\r\n                                                    <label for=\"a_5\" class=\"title-fill control-label lbl_custom\">\r\n                                                        ต้องการมากที่สุด</label>\r\n                                                    <!-- <div class=\"check\"></div> -->\r\n                                                </div>\r\n                                            </div>\r\n\r\n                                            <div class=\"col-sm-12 col-md-3\">\r\n                                                <div class=\"custom-radio-between\">\r\n                                                    <input id=\"b_5\" type=\"radio\" name=\"q_5\" value=\"b_5\" required class=\"form-check-input rdo_custom\" />\r\n                                                    <label for=\"b_5\"></label>\r\n                                                    <label for=\"b_5\" class=\"title-fill control-label lbl_custom\">\r\n                                                        ต้องการบ้าง</label>\r\n                                                    <!-- <div class=\"check\"></div> -->\r\n                                                </div>\r\n                                            </div>\r\n\r\n                                            <div class=\"col-sm-12 col-md-3\">\r\n                                                <div class=\"custom-radio-between\">\r\n                                                    <input id=\"c_5\" type=\"radio\" name=\"q_5\" value=\"c_5\" required class=\"form-check-input rdo_custom\" />\r\n                                                    <label for=\"c_5\"></label>\r\n                                                    <label for=\"c_5\" class=\"title-fill control-label lbl_custom\">\r\n                                                        ต้องการเพียงเล็กน้อย</label>\r\n                                                    <!-- <div class=\"check\"></div> -->\r\n                                                </div>\r\n                                            </div>\r\n\r\n                                            <div class=\"col-sm-12 col-md-3\">\r\n                                                <div class=\"custom-radio-between\">\r\n                                                    <input id=\"d_5\" type=\"radio\" name=\"q_5\" value=\"d_5\" required class=\"form-check-input rdo_custom\" />\r\n                                                    <label for=\"d_5\"></label>\r\n                                                    <label for=\"d_5\" class=\"title-fill control-label lbl_custom\">\r\n                                                        ไม่มีความต้องการ</label>\r\n                                                    <!-- <div class=\"check\"></div> -->\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <!-- 5 -->\r\n\r\n                        <div class=\"row\">\r\n                            <div class=\"choice-wrap\">\r\n                                <div class=\"col-md-12\">\r\n                                    <div class=\"question-wrapper\">\r\n                                        <span>6. สัดส่วนเงินลงทุนในส่วนนี้เมื่อเทียบกับทรัพย์สินของท่าน</span>\r\n                                    </div>\r\n                                    <div class=\"answer-wrapper\">\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-sm-12 col-md-3\">\r\n                                                <div class=\"custom-radio-between\">\r\n                                                    <input id=\"a_6\" type=\"radio\" name=\"q_6\" value=\"a_6\" required class=\"form-check-input rdo_custom\" />\r\n                                                    <label for=\"a_6\"></label>\r\n                                                    <label for=\"a_6\" class=\"title-fill control-label lbl_custom\">\r\n                                                        มากกว่าร้อยละ 60</label>\r\n                                                    <!-- <div class=\"check\"></div> -->\r\n                                                </div>\r\n                                            </div>\r\n\r\n                                            <div class=\"col-sm-12 col-md-3\">\r\n                                                <div class=\"custom-radio-between\">\r\n                                                    <input id=\"b_6\" type=\"radio\" name=\"q_6\" value=\"b_6\" required class=\"form-check-input rdo_custom\" />\r\n                                                    <label for=\"b_6\"></label>\r\n                                                    <label for=\"b_6\" class=\"title-fill control-label lbl_custom\">\r\n                                                        ร้อยละ 30 - 60 ปี</label>\r\n                                                    <!-- <div class=\"check\"></div> -->\r\n                                                </div>\r\n                                            </div>\r\n\r\n                                            <div class=\"col-sm-12 col-md-3\">\r\n                                                <div class=\"custom-radio-between\">\r\n                                                    <input id=\"c_6\" type=\"radio\" name=\"q_6\" value=\"c_6\" required class=\"form-check-input rdo_custom\" />\r\n                                                    <label for=\"c_6\"></label>\r\n                                                    <label for=\"c_6\" class=\"title-fill control-label lbl_custom\">\r\n                                                        ร้อยละ 10 - 30 ปี</label>\r\n                                                    <!-- <div class=\"check\"></div> -->\r\n                                                </div>\r\n                                            </div>\r\n\r\n                                            <div class=\"col-sm-12 col-md-3\">\r\n                                                <div class=\"custom-radio-between\">\r\n                                                    <input id=\"d_6\" type=\"radio\" name=\"q_6\" value=\"d_6\" required class=\"form-check-input rdo_custom\" />\r\n                                                    <label for=\"d_6\"></label>\r\n                                                    <label for=\"d_6\" class=\"title-fill control-label lbl_custom\">\r\n                                                        น้อยกว่าร้อยละ 10</label>\r\n                                                    <!-- <div class=\"check\"></div> -->\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <!-- 6 -->\r\n\r\n                        <div class=\"row\">\r\n                            <div class=\"choice-wrap\">\r\n                                <div class=\"col-md-12\">\r\n                                    <div class=\"question-wrapper\">\r\n                                        <span>7. ทัศนคติเกี่ยวกับการลงทุนของท่าน</span>\r\n                                    </div>\r\n                                    <div class=\"answer-wrapper\">\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-sm-6 col-md-6\">\r\n                                                <div class=\"custom-radio-between\">\r\n                                                    <input id=\"a_7\" type=\"radio\" name=\"q_7\" value=\"a_7\" required class=\"form-check-input rdo_custom\" />\r\n                                                    <label for=\"a_7\"></label>\r\n                                                    <label for=\"a_7\" class=\"title-fill control-label lbl_custom\">ไม่สามารถทนต่อการขาดทุนเงินต้นได้เลย แม้ว่าจะมีโอกาสได้รับผลตอบแทนที่สูงขึ้นบ้าง</label>\r\n                                                    <!-- <div class=\"check\"></div> -->\r\n                                                </div>\r\n                                            </div>\r\n\r\n                                            <div class=\"col-sm-6 col-md-6\">\r\n                                                <div class=\"custom-radio-between\">\r\n                                                    <input id=\"b_7\" type=\"radio\" name=\"q_7\" value=\"b_7\" required class=\"form-check-input rdo_custom\" />\r\n                                                    <label for=\"b_7\"></label>\r\n                                                    <label for=\"b_7\" class=\"title-fill control-label lbl_custom\">สามารถทนต่อการขาดทุนเงินต้นได้เล็กน้อย เพื่อมีโอกาสได้รับผลตอบแทนที่สูงขึ้นบ้าง</label>\r\n                                                    <!-- <div class=\"check\"></div> -->\r\n                                                </div>\r\n                                            </div>\r\n\r\n                                            <div class=\"col-sm-6 col-md-6\">\r\n                                                <div class=\"custom-radio-between\">\r\n                                                    <input id=\"c_7\" type=\"radio\" name=\"q_7\" value=\"c_7\" required class=\"form-check-input rdo_custom\" />\r\n                                                    <label for=\"c_7\"></label>\r\n                                                    <label for=\"c_7\" class=\"title-fill control-label lbl_custom\">สามารถทนต่อการขาดทุนเงินต้นได้ เพื่อมีโอกาสได้รับผลตอบแทนที่สูงขึ้น</label>\r\n                                                    <!-- <div class=\"check\"></div> -->\r\n                                                </div>\r\n                                            </div>\r\n\r\n                                            <div class=\"col-sm-6 col-md-6\">\r\n                                                <div class=\"custom-radio-between\">\r\n                                                    <input id=\"d_7\" type=\"radio\" name=\"q_7\" value=\"d_7\" required class=\"form-check-input rdo_custom\" />\r\n                                                    <label for=\"d_7\"></label>\r\n                                                    <label for=\"d_7\" class=\"title-fill control-label lbl_custom\">อยากได้ผลตอบแทนที่สูง โดยไม่มีข้อจำกัดในการลงทุน</label>\r\n                                                    <!-- <div class=\"check\"></div> -->\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <!-- 7 -->\r\n\r\n                        <div class=\"row\">\r\n                            <div class=\"choice-wrap\">\r\n                                <div class=\"col-md-12\">\r\n                                    <div class=\"question-wrapper\">\r\n                                        <span>8. การลงทุนในหลักทรัพย์ที่มีความผันผวนสูง มักให้ผลตอบแทนที่สูงในระยะยาวแต่มีความเสี่ยงที่จะทำให้ขาดทุนได้มากขึ้นได้เช่นกัน\r\n                                            ท่านสามารถรับความเสี่ยงจากการลงทุนได้ในระดับใด\r\n                                        </span>\r\n                                    </div>\r\n                                    <div class=\"answer-wrapper\">\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-sm-6 col-md-6\">\r\n                                                <div class=\"custom-radio-between\">\r\n                                                    <input id=\"a_8\" type=\"radio\" name=\"q_8\" value=\"a_8\" required class=\"form-check-input rdo_custom\" />\r\n                                                    <label for=\"a_8\"></label>\r\n                                                    <label for=\"a_8\" class=\"title-fill control-label lbl_custom\">\r\n                                                        น้อยที่สุด โดยต้องการเน้นการลงทุนที่สร้างกระแสรายได้ประจำและให้ความปลอดภัยในการลงทุนสูงสุด แม้ว่าจะได้รับผลตอบแทนในระดับต่ำที่สุด</label>\r\n                                                    <!-- <div class=\"check\"></div> -->\r\n                                                </div>\r\n                                            </div>\r\n\r\n                                            <div class=\"col-sm-6 col-md-6\">\r\n                                                <div class=\"custom-radio-between\">\r\n                                                    <input id=\"b_8\" type=\"radio\" name=\"q_8\" value=\"b_8\" required class=\"form-check-input rdo_custom\" />\r\n                                                    <label for=\"b_8\"></label>\r\n                                                    <label for=\"b_8\" class=\"title-fill control-label lbl_custom\">\r\n                                                        รับได้ในระดับหนึ่ง โดยสามารถรับความเสี่ยงในการขาดทุนจากการลงทุนได้บ้างเพื่อเพิ่มโอกาสที่จะได้รับผลตอบแทนที่สูงขึ้นในระยะยาว</label>\r\n                                                    <!-- <div class=\"check\"></div> -->\r\n                                                </div>\r\n                                            </div>\r\n\r\n                                            <div class=\"col-sm-6 col-md-6\">\r\n                                                <div class=\"custom-radio-between\">\r\n                                                    <input id=\"c_8\" type=\"radio\" name=\"q_8\" value=\"c_8\" required class=\"form-check-input rdo_custom\" />\r\n                                                    <label for=\"c_8\"></label>\r\n                                                    <label for=\"c_8\" class=\"title-fill control-label lbl_custom\">\r\n                                                        ปานกลาง โดยสามารถรับความเสี่ยงได้พอสมควรเพื่อสร้างโอกาสในการได้รับผลตอบแทนที่สูงกว่าในระยะยาว</label>\r\n                                                    <!-- <div class=\"check\"></div> -->\r\n                                                </div>\r\n                                            </div>\r\n\r\n                                            <div class=\"col-sm-6 col-md-6\">\r\n                                                <div class=\"custom-radio-between\">\r\n                                                    <input id=\"d_8\" type=\"radio\" name=\"q_8\" value=\"d_8\" required class=\"form-check-input rdo_custom\" />\r\n                                                    <label for=\"d_8\"></label>\r\n                                                    <label for=\"d_8\" class=\"title-fill control-label lbl_custom\">\r\n                                                        มาก โดยสามารถรับความเสี่ยงได้สูงสุดเพื่อสร้างโอกาสในการได้รับผลตอบแทนที่สูงสุดในระยะยาว</label>\r\n                                                    <!-- <div class=\"check\"></div> -->\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <!-- 8 -->\r\n\r\n                        <div class=\"row\">\r\n                            <div class=\"choice-wrap\">\r\n                                <div class=\"col-md-12\">\r\n                                    <div class=\"question-wrapper\">\r\n                                        <span>9. ในบางช่วงเวลา การลงทุนโดยเน้นความปลอดภัยของเงินลงทุนจะให้ผลตอบแทนในระดับที่ต่ำกว่าเงินเฟ้อ\r\n                                            ซึ่งอาจจะทำให้อำนวจในการซื้อลดลงได้เมื่อพิจารณาถึงเป้าหมายในการลงทุนของท่าน\r\n                                            ข้อใดต่อไปนี้ตรงกับท่านมากที่สุด\r\n                                        </span>\r\n                                    </div>\r\n                                    <div class=\"answer-wrapper\">\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-sm-6 col-md-6\">\r\n                                                <div class=\"custom-radio-between\">\r\n                                                    <input id=\"a_9\" type=\"radio\" name=\"q_9\" value=\"a_9\" required class=\"form-check-input rdo_custom\" />\r\n                                                    <label for=\"a_9\"></label>\r\n                                                    <label for=\"a_9\" class=\"title-fill control-label lbl_custom\">\r\n                                                        เงินต้นสำหรับการลงทุนต้องปลอดภัย แม้ว่าจะได้รับผลตอบแทนต่ำกว่าอัตราเงินเฟ้อ</label>\r\n                                                    <!-- <div class=\"check\"></div> -->\r\n                                                </div>\r\n                                            </div>\r\n\r\n                                            <div class=\"col-sm-6 col-md-6\">\r\n                                                <div class=\"custom-radio-between\">\r\n                                                    <input id=\"b_9\" type=\"radio\" name=\"q_9\" value=\"b_9\" required class=\"form-check-input rdo_custom\" />\r\n                                                    <label for=\"b_9\"></label>\r\n                                                    <label for=\"b_9\" class=\"title-fill control-label lbl_custom\">\r\n                                                        รับความเสี่ยงในการสูญเสียเงินต้นได้บ้าง เพื่นคงระดับอัตราผลตอบแทนจากการลงทุนให้สูงกว่าอัตราเงินเฟ้อ</label>\r\n                                                    <!-- <div class=\"check\"></div> -->\r\n                                                </div>\r\n                                            </div>\r\n\r\n                                            <div class=\"col-sm-6 col-md-6\">\r\n                                                <div class=\"custom-radio-between\">\r\n                                                    <input id=\"c_9\" type=\"radio\" name=\"q_9\" value=\"c_9\" required class=\"form-check-input rdo_custom\" />\r\n                                                    <label for=\"c_9\"></label>\r\n                                                    <label for=\"c_9\" class=\"title-fill control-label lbl_custom\">\r\n                                                        เน้นสร้างผลตอบแทนให้สูงกว่าระดับเงินเฟ้อในระดับหนึ่ง โดยสามารถรับความเสี่ยงได้</label>\r\n                                                    <!-- <div class=\"check\"></div> -->\r\n                                                </div>\r\n                                            </div>\r\n\r\n                                            <div class=\"col-sm-6 col-md-6\">\r\n                                                <div class=\"custom-radio-between\">\r\n                                                    <input id=\"d_9\" type=\"radio\" name=\"q_9\" value=\"d_9\" required class=\"form-check-input rdo_custom\" />\r\n                                                    <label for=\"d_9\"></label>\r\n                                                    <label for=\"d_9\" class=\"title-fill control-label lbl_custom\">\r\n                                                        ต้องการให้ผลตอบแทนสูงกว่าระดับเงินเฟ้อมากที่สุด โดยสามารถรับความเสี่ยงได้เต็มที่</label>\r\n                                                    <!-- <div class=\"check\"></div> -->\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <!-- 9 -->\r\n\r\n                        <div class=\"row\">\r\n                            <div class=\"choice-wrap\">\r\n                                <div class=\"col-md-12\">\r\n                                    <div class=\"question-wrapper\">\r\n                                        <span>10. ท่านคิดว่าท่านจะยอมรับผลขาดทุน จากการลงทุนในกองทุนรวมได้มากเพียงใด</span>\r\n                                    </div>\r\n                                    <div class=\"answer-wrapper\">\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-sm-12 col-md-3\">\r\n                                                <div class=\"custom-radio-between\">\r\n                                                    <input id=\"a_10\" type=\"radio\" name=\"q_10\" value=\"a_10\" required class=\"form-check-input rdo_custom\" />\r\n                                                    <label for=\"a_10\"></label>\r\n                                                    <label for=\"a_10\" class=\"title-fill control-label lbl_custom\">\r\n                                                        ต่ำกว่าร้อยละ 10</label>\r\n                                                    <!-- <div class=\"check\"></div> -->\r\n                                                </div>\r\n                                            </div>\r\n\r\n                                            <div class=\"col-sm-12 col-md-3\">\r\n                                                <div class=\"custom-radio-between\">\r\n                                                    <input id=\"b_10\" type=\"radio\" name=\"q_10\" value=\"b_10\" required class=\"form-check-input rdo_custom\" />\r\n                                                    <label for=\"b_10\"></label>\r\n                                                    <label for=\"b_10\" class=\"title-fill control-label lbl_custom\">\r\n                                                        ร้อยละ 10 - 20</label>\r\n                                                    <!-- <div class=\"check\"></div> -->\r\n                                                </div>\r\n                                            </div>\r\n\r\n                                            <div class=\"col-sm-12 col-md-3\">\r\n                                                <div class=\"custom-radio-between\">\r\n                                                    <input id=\"c_10\" type=\"radio\" name=\"q_10\" value=\"c_10\" required class=\"form-check-input rdo_custom\" />\r\n                                                    <label for=\"c_10\"></label>\r\n                                                    <label for=\"c_10\" class=\"title-fill control-label lbl_custom\">\r\n                                                        ร้อยละ 20 - 50</label>\r\n                                                    <!-- <div class=\"check\"></div> -->\r\n                                                </div>\r\n                                            </div>\r\n\r\n                                            <div class=\"col-sm-12 col-md-3\">\r\n                                                <div class=\"custom-radio-between\">\r\n                                                    <input id=\"d_10\" type=\"radio\" name=\"q_10\" value=\"d_10\" required class=\"form-check-input rdo_custom\" />\r\n                                                    <label for=\"d_10\"></label>\r\n                                                    <label for=\"d_10\" class=\"title-fill control-label lbl_custom\">\r\n                                                        มากกว่าร้อยละ 50</label>\r\n                                                    <!-- <div class=\"check\"></div> -->\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <!-- 10 -->\r\n\r\n                        <div class=\"row\">\r\n                            <div class=\"choice-wrap\">\r\n                                <div class=\"col-md-12\">\r\n                                    <div class=\"question-wrapper\">\r\n                                        <span class=\"color-red\">คำถามข้อ 11 ใช้เป็นข้อมูลเพิ่มเติมเพื่อประกอบการให้คำแนะนำ</span>\r\n                                        <br/>\r\n                                        <span>11. สำหรับการลงทุน ในกองทุนรวมที่มีนโยบายการลงทุนในต่างประเทศตั้งแต่ร้อยละ\r\n                                            20 ของ NAV ท่านสามารถรับความเสี่ยงด้านอัตราแลกเปลี่ยนได้หรือไม่</span>\r\n                                    </div>\r\n                                    <div class=\"answer-wrapper\">\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xs-6 col-md-3\">\r\n                                                <div class=\"custom-radio-between\">\r\n                                                    <input id=\"a_11\" type=\"radio\" name=\"q_11\" value=\"a_11\" required class=\"form-check-input rdo_custom\" />\r\n                                                    <label for=\"a_11\"></label>\r\n                                                    <label for=\"a_11\" class=\"title-fill control-label lbl_custom\">\r\n                                                        ได้</label>\r\n                                                    <!-- <div class=\"check\"></div> -->\r\n                                                </div>\r\n                                            </div>\r\n\r\n                                            <div class=\"col-xs-6 col-md-3\">\r\n                                                <div class=\"custom-radio-between\">\r\n                                                    <input id=\"b_11\" type=\"radio\" name=\"q_11\" value=\"b_11\" required class=\"form-check-input rdo_custom\" />\r\n                                                    <label for=\"b_11\"></label>\r\n                                                    <label for=\"b_11\" class=\"title-fill control-label lbl_custom\">\r\n                                                        ไม่ได้</label>\r\n                                                    <!-- <div class=\"check\"></div> -->\r\n                                                </div>\r\n                                            </div>\r\n\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <div class=\"col-md-12  mt-5 \">\r\n                                        <div class=\"row justify-content-center\">\r\n                                            <div class=\"col-md-2 col-xs-6\">\r\n                                                <button class=\"btn-med btn-back-login\" (click)=\"checkpage('over-view')\">\r\n                                                    ย้อนกลับ\r\n                                                    <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\r\n\r\n                                                </button>\r\n                                            </div>\r\n                                            <div class=\"col-md-2 col-xs-6\">\r\n                                                <button class=\"btn-med btn-primary\" (click)=\"checkpage('suitability-score')\">\r\n                                                    คำนวณ\r\n                                                    <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\r\n\r\n                                                </button>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <!-- 11 -->\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </form>\r\n\r\n    </div>\r\n</div>\r\n<div class=\"fund-table-wrapper\" *ngIf=\"page == 'suitability-score'\">\r\n    <div class=\"heading-section\">\r\n        <div class=\"row\">\r\n            <div class=\"detail-head-wrapper\">\r\n                <div class=\"col-md-12 col-xs-12 icon-option mb-3\">\r\n\r\n                    <ul class=\"\">\r\n                        <!-- <li class=\"ico-fb\">\r\n                            <a href=\"#\" title=\"sort\">\r\n                                <img src=\"/assets/Images/icons/ico-pipe.png\" />\r\n                            </a>\r\n                        </li>\r\n                        <li class=\"ico-line\">\r\n                            <a href=\"#\" title=\"download\">\r\n                                <img src=\"/assets/Images/icons/ico-download.png\" />\r\n                            </a>\r\n                        </li> -->\r\n                        <li class=\"ico-yt\">\r\n                            <a href=\"#\" title=\"print\">\r\n                                <img src=\"/assets/Images/icons/ico-print.png\" />\r\n                            </a>\r\n                        </li>\r\n\r\n                    </ul>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n\r\n                    <div class=\"score-wrapper\">\r\n                        <div class=\"score-result\">\r\n\r\n                            <div class=\"col-sm-12\">\r\n                                <div class=\"score-content\">\r\n                                    <h3>คะแนนที่คำนวณได้</h3>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"col-sm-12\">\r\n                                <div class=\"score-content\">\r\n                                    <div class=\"score-display\">27</div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"col-sm-12\">\r\n                                <div class=\"score-content\">\r\n                                    <span>ผลการประเมินความเสี่ยงในการลงทุน</span>\r\n                                </div>\r\n                            </div>\r\n\r\n\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-12\">\r\n                    <div class=\"fund-list-wrapper\">\r\n                        <div class=\"row justify-content-center\">\r\n                            <div class=\"col-md-3 col-xs-12 mr-3 mb-3\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-8 col-xs-8 no-padding\">\r\n                                        <div class=\"title-heading bg-little-green\">\r\n                                            <h3 class=\"\">Risk Profile Level</h3>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-4 col-xs-4 no-padding\">\r\n                                        <div class=\"title-heading bg-green\">\r\n                                            <h3 class=\"text-center\">3</h3>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-3 col-xs-12 mr-3 mb-3\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-8 col-xs-8 no-padding\">\r\n                                        <div class=\"title-heading bg-little-primary\">\r\n                                            <h3 class=\"\">ระดับความเสี่ยงของกองทุน</h3>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-4 col-xs-4 no-padding\">\r\n                                        <div class=\"title-heading\">\r\n                                            <h3 class=\"text-center\">1-5</h3>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-3 col-xs-12 mr-3 mb-3\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-8 col-xs-8 no-padding\">\r\n                                        <div class=\"title-heading bg-little-blue\">\r\n                                            <h3 class=\"\">รับความเสี่ยงเรื่องอัตราแลกเปลี่ยน</h3>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-4 col-xs-4 no-padding\">\r\n                                        <div class=\"title-heading bg-blue\">\r\n                                            <h3 class=\"text-center\">ได้</h3>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n\r\n\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"detail-body-wrapper\">\r\n        <div class=\"row no-margin\">\r\n            <div class=\"col-md-6 no-padding\">\r\n                <h3>\r\n                    ตัวอย่าง\r\n                </h3>\r\n                <div class=\"table-responsive\">\r\n                    <table class=\"table table-custom-score\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th>\r\n                                    คะแนน\r\n                                </th>\r\n                                <th>\r\n                                    Risk Profile\r\n                                </th>\r\n                                <th>\r\n                                    ระดับความเสี่ยงของกองทุน\r\n                                </th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr>\r\n                                <td class=\"text-left\">\r\n                                    <ul>\r\n                                        <li>ต่ำกว่า 15</li>\r\n                                    </ul>\r\n                                </td>\r\n                                <td class=\"text-left\">\r\n                                    1\r\n                                </td>\r\n                                <td class=\"text-left\">\r\n                                    1\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-left\">\r\n                                    <ul>\r\n                                        <li>15 - 21</li>\r\n                                    </ul>\r\n                                </td>\r\n                                <td class=\"text-left\">\r\n                                    2\r\n                                </td>\r\n                                <td class=\"text-left\">\r\n                                    1 - 4\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-left\">\r\n                                    <ul>\r\n                                        <li>22 - 29</li>\r\n                                    </ul>\r\n                                </td>\r\n                                <td class=\"text-left\">\r\n                                    3\r\n                                </td>\r\n                                <td class=\"text-left\">\r\n                                    1 - 5\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-left\">\r\n                                    <ul>\r\n                                        <li>30 - 36</li>\r\n                                    </ul>\r\n                                </td>\r\n                                <td class=\"text-left\">\r\n                                    4\r\n                                </td>\r\n                                <td class=\"text-left\">\r\n                                    1 - 7\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-left\">\r\n                                    <ul>\r\n                                        <li>37 ขึ้นไป</li>\r\n                                    </ul>\r\n                                </td>\r\n                                <td class=\"text-left\">\r\n                                    5\r\n                                </td>\r\n                                <td class=\"text-left\">\r\n                                    1 - 8\r\n                                </td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"row no-margin\">\r\n            <div class=\"col-md-12 no-padding\">\r\n                <h3>\r\n                    สัดส่วนการลงทุน\r\n                </h3>\r\n                <div class=\"table-responsive\">\r\n                    <table class=\"table table-custom-score\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th>\r\n                                    ประเภทนักลงทุน\r\n                                </th>\r\n                                <th>\r\n                                    เงินฝากและ\r\n                                    <br/>ตราสารหนี้ระยะสั้น\r\n                                </th>\r\n                                <th>\r\n                                    ตราสารหนี้ภาครัฐ\r\n                                    <br/>ที่มีอายุมากกว่า1ปี\r\n                                </th>\r\n                                <th>\r\n                                    ตราสารหนี้\r\n                                    <br/>ภาคเอกชน\r\n                                </th>\r\n                                <th>\r\n                                    ตราสารทุน\r\n                                </th>\r\n                                <th>\r\n                                    การลงทุน\r\n                                    <br/>ทางเลือก**\r\n                                </th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr>\r\n                                <td class=\"text-left\">\r\n                                    <ul>\r\n                                        <li>ระดับ 1</li>\r\n                                    </ul>\r\n                                </td>\r\n                                <td class=\"text-left\">\r\n                                    มากกว่า 60 %\r\n                                </td>\r\n                                <td class=\"text-left\">\r\n                                    มากกว่า 60 %\r\n                                </td>\r\n                                <td class=\"text-left\">\r\n                                    น้อยกว่า 20 %\r\n                                </td>\r\n                                <td class=\"text-left\">\r\n                                    น้อยกว่า 10 %\r\n                                </td>\r\n\r\n                                <td class=\"text-left\">\r\n                                    น้อยกว่า 5 %\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-left\">\r\n                                    <ul>\r\n                                        <li>ระดับ 2</li>\r\n                                    </ul>\r\n                                </td>\r\n                                <td class=\"text-left\">\r\n                                    น้อยกว่า 20 %\r\n                                </td>\r\n                                <td class=\"text-left\">\r\n                                    น้อยกว่า 70 %\r\n                                </td>\r\n                                <td class=\"text-left\">\r\n                                    น้อยกว่า 70 %\r\n                                </td>\r\n                                <td class=\"text-left\">\r\n                                    น้อยกว่า 20 %\r\n                                </td>\r\n\r\n                                <td class=\"text-left\">\r\n                                    น้อยกว่า 10 %\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-left\">\r\n                                    <ul>\r\n                                        <li>ระดับ 3</li>\r\n                                    </ul>\r\n                                </td>\r\n                                <td class=\"text-left\">\r\n                                    น้อยกว่า 10 %\r\n                                </td>\r\n                                <td class=\"text-left\">\r\n                                    น้อยกว่า 60 %\r\n                                </td>\r\n                                <td class=\"text-left\">\r\n                                    น้อยกว่า 60 %\r\n                                </td>\r\n                                <td class=\"text-left\">\r\n                                    น้อยกว่า 30 %\r\n                                </td>\r\n\r\n                                <td class=\"text-left\">\r\n                                    น้อยกว่า 10 %\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-left\">\r\n                                    <ul>\r\n                                        <li>ระดับ 4</li>\r\n                                    </ul>\r\n                                </td>\r\n                                <td class=\"text-left\">\r\n                                    น้อยกว่า 10 %\r\n                                </td>\r\n                                <td class=\"text-left\">\r\n                                    น้อยกว่า 40 %\r\n                                </td>\r\n                                <td class=\"text-left\">\r\n                                    น้อยกว่า 40 %\r\n                                </td>\r\n                                <td class=\"text-left\">\r\n                                    น้อยกว่า 40 %\r\n                                </td>\r\n\r\n                                <td class=\"text-left\">\r\n                                    น้อยกว่า 20 %\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-left\">\r\n                                    <ul>\r\n                                        <li>ระดับ 5</li>\r\n                                    </ul>\r\n                                </td>\r\n                                <td class=\"text-left\">\r\n                                    น้อยกว่า 5 %\r\n                                </td>\r\n                                <td class=\"text-left\">\r\n                                    น้อยกว่า 30 %\r\n                                </td>\r\n                                <td class=\"text-left\">\r\n                                    น้อยกว่า 30 %\r\n                                </td>\r\n                                <td class=\"text-left\">\r\n                                    น้อยกว่า 60 %\r\n                                </td>\r\n\r\n                                <td class=\"text-left\">\r\n                                    น้อยกว่า 30 %\r\n                                </td>\r\n                            </tr>\r\n\r\n                        </tbody>\r\n                    </table>\r\n                    <p class=\"color-red mt-3\">**รวมถึงสินค้าโภคภัณฑ์ สัญญาซื้อขายล่วงหน้า</p>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"row justify-content-center\">\r\n            <div class=\"col-md-2 col-xs-6 col-sm-4\">\r\n                <button class=\"btn-med btn-primary\" (click)=\"checkpage('over-view')\">\r\n                    แก้ไขข้อมูล\r\n                    <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\r\n\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/profile/suitability/suitability.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/profile/suitability/suitability.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/profile/suitability/suitability.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/profile/suitability/suitability.component.ts ***!
  \**************************************************************/
/*! exports provided: SuitabilityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuitabilityComponent", function() { return SuitabilityComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SuitabilityComponent = /** @class */ (function () {
    function SuitabilityComponent() {
        this.page = "over-view";
    }
    SuitabilityComponent.prototype.ngOnInit = function () {
        $('#mutual-tab-menu').find('li').removeClass('current');
        $('#mutual-tab-menu').find('li#menu2').addClass('current');
    };
    SuitabilityComponent.prototype.checkpage = function (page) {
        window.scroll(0, 0);
        console.log(page);
        switch (page) {
            case 'suitability-test':
                this.page = "suitability-test";
                break;
            case 'suitability-score':
                this.page = "suitability-score";
                break;
            case 'over-view':
                this.page = "over-view";
                break;
            default:
                this.page = "over-view";
                console.log(this.page);
                break;
        }
    };
    SuitabilityComponent.prototype.checktype = function (event) {
        // var Id = id;
        // console.log(event);
        console.log(event.srcElement.attributes.id);
        var idAttr = event.srcElement.attributes.id;
        var value = idAttr.nodeValue;
        console.log(value);
        if (value == 'size10') {
            $('#personal').addClass('active');
            $('#answerC1').find('input[type="radio"]').attr("disabled", "disabled");
            $('#answerC2').find('input[type="radio"]').attr("disabled", "disabled");
            $('#answerC2').find('input[type="text"]').attr("disabled", "disabled");
            // $('#answerC1').find('input[type="radio"]').removeAttr("checked");
            // $('#answerC2').find('input[type="radio"]').removeAttr("checked");
        }
        else {
            $('#personal').removeClass('active');
            $('#answerC1').find('input[type="radio"]').removeAttr("disabled");
            $('#answerC2').find('input[type="radio"]').removeAttr("disabled");
            $('#answerC2').find('input[type="text"]').removeAttr("disabled");
            // $('#answerC1').find('input[type="radio"]').removeAttr("checked");
            // $('#answerC2').find('input[type="radio"]').removeAttr("checked");        
            // $('#answer').find('input[type="radio"]').removeAttr("checked");
        }
        if (value == 'size15') {
            $('#company').addClass('active');
            $('#answerP1').find('input[type="radio"]').attr("disabled", "disabled");
            $('#answerP2').find('input[type="radio"]').attr("disabled", "disabled");
            // $('#answerP1').find('input[type="radio"]').removeAttr("checked");
            // $('#answerP2').find('input[type="radio"]').removeAttr("checked");
            // $('#answer1').find('input[type="radio"]').removeAttr("checked");
        }
        else {
            $('#company').removeClass('active');
            $('#answerP1').find('input[type="radio"]').removeAttr("disabled");
            $('#answerP2').find('input[type="radio"]').removeAttr("disabled");
            // $('#answerP1').find('input[type="radio"]').removeAttr("checked");
            // $('#answerP2').find('input[type="radio"]').removeAttr("checked");
        }
    };
    SuitabilityComponent.prototype.disable = function () {
        console.log("test");
        $('#answerC1').find('input[type="radio"]').attr("disabled", "disabled");
        $('#answerC2').find('input[type="radio"]').attr("disabled", "disabled");
        $('#answerP1').find('input[type="radio"]').attr("disabled", "disabled");
        $('#answerP2').find('input[type="radio"]').attr("disabled", "disabled");
    };
    SuitabilityComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-suitability',
            template: __webpack_require__(/*! ./suitability.component.html */ "./src/app/profile/suitability/suitability.component.html"),
            styles: [__webpack_require__(/*! ./suitability.component.scss */ "./src/app/profile/suitability/suitability.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SuitabilityComponent);
    return SuitabilityComponent;
}());



/***/ }),

/***/ "./src/app/regular-list/all-list/all-list.component.html":
/*!***************************************************************!*\
  !*** ./src/app/regular-list/all-list/all-list.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"fund-table-wrapper\">\r\n  <div class=\"heading-section\">\r\n    <div class=\"row\">\r\n      <div class=\"detail-head-wrapper\">\r\n        <div class=\"col-md-12 col-xs-12 icon-option mb-3\">\r\n\r\n          <ul class=\"\">\r\n            <!-- <li class=\"ico-fb\">\r\n              <a href=\"#\" title=\"facebook\">\r\n                <img src=\"/assets/Images/icons/ico-pipe.png\" />\r\n              </a>\r\n            </li>\r\n            <li class=\"ico-line\">\r\n              <a href=\"#\" title=\"line\">\r\n                <img src=\"/assets/Images/icons/ico-download.png\" />\r\n              </a>\r\n            </li> -->\r\n            <li class=\"ico-yt\">\r\n              <a href=\"#\" title=\"youtube\">\r\n                <img src=\"/assets/Images/icons/ico-print.png\" />\r\n              </a>\r\n            </li>\r\n\r\n          </ul>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <p>เลขที่ผู้ถือหน่วยลงทุน</p>\r\n          <div class=\"select-wrapper inline-block\">\r\n            <select name=\"ddlLink\" id=\"ddlLink\">\r\n              <option value=\"0\" selected=\"\">9990244757</option>\r\n              <option value=\"36\">9990244757</option>\r\n              <option value=\"29\">9990244757</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-3\">\r\n          <p>ชื่อผู้ถือหน่วยลงทุน</p>\r\n          <span>เนติวัฒน์ โชติกร</span>\r\n        </div>\r\n\r\n        <div class=\"col-md-3\">\r\n          <p>วันที่ออกรายการ</p>\r\n          <span>7 มิถุนายน 2561</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"detail-body-wrapper\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <h4>ดูรายการทั้งหมด</h4>\r\n      </div>\r\n      <div class=\"col-md-12\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-nav\">\r\n            <thead>\r\n                <tr>\r\n                    <th>\r\n                      ช่องทาง\r\n                    </th>\r\n                    <th>\r\n                      แก้ไข\r\n                      <br/>ครั้งล่าสุด\r\n                    </th>\r\n                    <th>\r\n                      รายการ\r\n                    </th>\r\n                    <th>\r\n                      หักบัญชีธนาคาร\r\n                    </th>\r\n                    <th>\r\n                      กองทุน\r\n                      <br/> ปลายทาง\r\n                    </th>\r\n                    <th>\r\n                      เงื่อนไข\r\n                    </th>\r\n                    <th>\r\n                      จำนวน\r\n                      <br/> (บาท)\r\n                    </th>\r\n                    <th>\r\n                      ระยะเวลา\r\n                    </th>\r\n                    <th>\r\n                      แก้ไข\r\n                    </th>\r\n                    <th>\r\n                      ยกเลิก\r\n                    </th>\r\n\r\n                  </tr>\r\n            </thead>\r\n            <tbody>                          \r\n              <tr class=\"summary\">\r\n                <th colspan=\"10\">\r\n                  กองทุนรวมหุ้นระยะยาว\r\n                </th>\r\n              </tr>\r\n              <tr class=\"line\">\r\n                <td colspan=\"10\">\r\n                  (KFLTFSTARD) กองทุนเปิดกรุงศรีหุ้นระยะยาวไทยออลสตาร์ปันผล\r\n                </td>\r\n                <!-- <td colspan=\"6\">&nbsp;</td> -->\r\n              </tr>\r\n              <tr>\r\n                <td class=\"text-left\">\r\n                  NET\r\n                </td>\r\n                <td class=\"\">\r\n                  07/06/2561, 11:25\r\n                </td>\r\n                <td class=\"\">\r\n                  DE\r\n                </td>\r\n                <td>\r\n                  ธนาคารกรุงศรี อยุธยา จำกัด (มหาชน) (2851332817)\r\n                </td>\r\n                <td class=\"\">\r\n                  &nbsp;\r\n                </td>\r\n                <td class=\"text-left\">\r\n                  รายสัปดาห์ ทุกๆ (วันจันทร์)\r\n                </td>\r\n                <td class=\"txt-right\">\r\n                  20,000.00\r\n                </td>\r\n                <td class=\"text-center\">\r\n                  07/06/2561 - 25/06/2561\r\n                </td>\r\n                <td>\r\n                  <a>\r\n                    <img src=\"/assets/Images/icons/ico-edit.png\">\r\n                  </a>\r\n                </td>\r\n                <td>\r\n                  <a>\r\n                    <img src=\"/assets/Images/icons/ico-delete.png\" alt=\"\" data-toggle=\"modal\" data-target=\"#disclaimer\">\r\n                  </a>\r\n                </td>\r\n              </tr>\r\n              <tr class=\"line\">\r\n                <td colspan=\"10\">\r\n                  (KFLTFSTARD) กองทุนเปิดกรุงศรีหุ้นระยะยาวไทยออลสตาร์ปันผล\r\n                </td>\r\n                <!-- <td colspan=\"6\">&nbsp;</td> -->\r\n              </tr>\r\n              <tr>\r\n                <td class=\"text-left\">\r\n                  NET\r\n                </td>\r\n                <td class=\"\">\r\n                  07/06/2561, 11:25\r\n                </td>\r\n                <td class=\"\">\r\n                  DE\r\n                </td>\r\n                <td>\r\n                  ธนาคารกรุงศรี อยุธยา จำกัด (มหาชน) (2851332817)\r\n                </td>\r\n                <td class=\"\">\r\n                  &nbsp;\r\n                </td>\r\n                <td class=\"text-left\">\r\n                  รายสัปดาห์ ทุกๆ (วันจันทร์)\r\n                </td>\r\n                <td class=\"txt-right\">\r\n                  20,000.00\r\n                </td>\r\n                <td class=\"text-center\">\r\n                  07/06/2561 - 25/06/2561\r\n                </td>\r\n                <td>\r\n                  <a>\r\n                    <img src=\"/assets/Images/icons/ico-edit.png\">\r\n                  </a>\r\n                </td>\r\n                <td>\r\n                  <a>\r\n                    <img src=\"/assets/Images/icons/ico-delete.png\" alt=\"\" data-toggle=\"modal\" data-target=\"#disclaimer\">\r\n                  </a>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n\r\n\r\n\r\n      </div>\r\n      <div class=\"col-md-12 mb-5\">\r\n        <p class=\"color-red no-margin\">ข้อมูลที่แสดงข้างต้นนี้อาจมีการเปลี่ยนแปลงแก้ไขได้ หากเป็นการซื้อที่เรียกเก็บเงิน หรือรายการผิดพลาดใดๆ\r\n          ทั้งนี้การเปลี่ยนแปลงแก้ไขจะเป็นไปตามวิธีและข้อกำหนดที่ระบุไว้ในโครงการจัดการกองทุนที่ท่านลงทุน</p>\r\n      </div>\r\n      <div class=\"col-md-12\">\r\n        <div class=\"row justify-content-center\">\r\n          <div class=\"col-md-2 col-xs-6 col-sm-4\">\r\n            <button class=\"btn-med btn-primary\">\r\n              พิมพ์\r\n              <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\r\n\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/regular-list/all-list/all-list.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/regular-list/all-list/all-list.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/regular-list/all-list/all-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/regular-list/all-list/all-list.component.ts ***!
  \*************************************************************/
/*! exports provided: AllListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllListComponent", function() { return AllListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AllListComponent = /** @class */ (function () {
    function AllListComponent() {
    }
    AllListComponent.prototype.ngOnInit = function () {
        $('#mutual-tab-menu').find('li').removeClass('current');
        $('#mutual-tab-menu').find('li#menu4').addClass('current');
    };
    AllListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-all-list',
            template: __webpack_require__(/*! ./all-list.component.html */ "./src/app/regular-list/all-list/all-list.component.html"),
            styles: [__webpack_require__(/*! ./all-list.component.scss */ "./src/app/regular-list/all-list/all-list.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AllListComponent);
    return AllListComponent;
}());



/***/ }),

/***/ "./src/app/regular-list/regular-exchange/regular-exchange.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/regular-list/regular-exchange/regular-exchange.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"fund-table-wrapper\" *ngIf=\"page == 'regular-exchange'\">\r\n  <div class=\"heading-section\">\r\n    <div class=\"row\">\r\n      <div class=\"detail-head-wrapper\">\r\n        <div class=\"col-md-12 col-xs-12 icon-option mb-3\">\r\n\r\n          <ul class=\"\">\r\n            <!-- <li class=\"ico-fb\">\r\n              <a href=\"#\" title=\"facebook\">\r\n                <img src=\"/assets/Images/icons/ico-pipe.png\" />\r\n              </a>\r\n            </li>\r\n            <li class=\"ico-line\">\r\n              <a href=\"#\" title=\"line\">\r\n                <img src=\"/assets/Images/icons/ico-download.png\" />\r\n              </a>\r\n            </li> -->\r\n            <li class=\"ico-yt\">\r\n              <a href=\"#\" title=\"youtube\">\r\n                <img src=\"/assets/Images/icons/ico-print.png\" />\r\n              </a>\r\n            </li>\r\n\r\n          </ul>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n\r\n          <p>เลขที่ผู้ถือหน่วยลงทุน</p>\r\n\r\n          <div class=\"select-wrapper inline-block\">\r\n            <select name=\"ddlLink\" id=\"ddlLink\">\r\n              <option value=\"0\" selected=\"\">9990244757</option>\r\n              <option value=\"36\">9990244757</option>\r\n              <option value=\"29\">9990244757</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <p>ชื่อผู้ถือหน่วยลงทุน</p>\r\n          <span>เนติวัฒน์ โชติกร</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"detail-body-wrapper\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <H4 class=\"text-left\">สับเปลี่ยนหน่วยลงทุนแบบประจำ</H4>\r\n        <!-- <p>ขั้นตอนที่ 1 เลือกลงทุนและใส่จำนวนที่ต้องการ</p> -->\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <span>กองทุนต้นทาง</span>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <div class=\"select-wrapper inline-block\">\r\n\r\n              <select name=\"ddlLink\" id=\"ddlLink\">\r\n                <option value=\"0\" selected=\"\">KFCRASH - กองทุนกรุงศรีตราสารเงิน</option>\r\n                <option value=\"36\">KFCRASH - กองทุนกรุงศรีตราสารเงิน</option>\r\n                <option value=\"29\">KFCRASH - กองทุนกรุงศรีตราสารเงิน</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-custom\">\r\n            <thead>\r\n              <tr>\r\n                <th class=\"bg-blue\">\r\n                  ยอดคงเหลือ (หน่วย)\r\n                </th>\r\n                <th class=\"bg-primary\">\r\n                  ยอดคงเหลือ (บาท)\r\n                </th>\r\n                <th class=\"bg-darkbrown\">\r\n                  วันที่มีผล\r\n                </th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr>\r\n                <td>\r\n                  <a href=\"/MutualFund\" title=\"ประเภทกองทุน\">6.2456\r\n                  </a>\r\n                </td>\r\n                <td>\r\n                  <a href=\"/MutualFund/FundDetail\" title=\"ชื่อกองทุน\">74.39\r\n                  </a>\r\n                </td>\r\n                <td>\r\n                  05/04/60\r\n                  <a class=\"color-red\">(ณ วันที่ผ่านมา)</a>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>\r\n                  <a href=\"/MutualFund\" title=\"ประเภทกองทุน\">6.2456\r\n                  </a>\r\n                </td>\r\n                <td>\r\n                  <a href=\"/MutualFund/FundDetail\" title=\"ชื่อกองทุน\">N/A\r\n                  </a>\r\n                </td>\r\n                <td>\r\n                  05/04/60\r\n                  <a class=\"color-red\">(หลังหักรายการวันนี้)</a>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n\r\n          </table>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <span>สับเปลี่ยนจำนวน</span>\r\n          </div>\r\n          <div class=\"col-md-3 col-xs-6\">\r\n            <div class=\"input-wrapper \">\r\n              <input id=\"name\" name=\"name\" maxlength=\"30\" type=\"text\" class=\"bg-gray\" placeholder=\"0\">\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-3 col-xs-6\">\r\n            <div class=\"select-wrapper inline-block\">\r\n\r\n              <select name=\"ddlLink\" id=\"ddlLink\">\r\n                <option value=\"0\" selected=\"\">บาท</option>\r\n                <option value=\"36\">เยน</option>\r\n                <option value=\"29\">ดอลล่า</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <span>กองทุนปลายทาง</span>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <div class=\"select-wrapper inline-block\">\r\n\r\n              <select name=\"ddlLink\" id=\"ddlLink\">\r\n                <option value=\"0\" selected=\"\">ธนาคารกรุงศรีอยุธยา จำกัด (มหาชน)</option>\r\n                <option value=\"36\">ธนาคารกรุงศรีอยุธยา จำกัด (มหาชน)</option>\r\n                <option value=\"29\">ธนาคารกรุงศรีอยุธยา จำกัด (มหาชน)</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <span>เงื่อนไข</span>\r\n          </div>\r\n          <div class=\"col-md-3 col-xs-6\">\r\n            <div class=\"custom-radio-between\">\r\n              <input value=\"101\" id=\"101\" name=\"rad1\" type=\"radio\" checked>\r\n              <label for=\"101\"></label>\r\n              <p>รายเดือน</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-3 col-xs-6\">\r\n            <div class=\"select-wrapper inline-block\">\r\n\r\n              <select name=\"ddlLink\" id=\"ddlLink\">\r\n                <option value=\"0\" selected=\"\">วันที่1</option>\r\n                <option value=\"36\">วันที่2</option>\r\n                <option value=\"29\">วันที่3</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <span>ระยะเวลาเริ่มต้น</span>\r\n          </div>\r\n          <div class=\"col-md-3\">\r\n            <div class=\"input-wrapper\">\r\n              <input class=\"form-control textinput dateinput bg-gray\" id=\"startDate\" placeholder=\"วว/ดด/ปปปป\" name=\"date\" type=\"text\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <span>ระยะเวลาสิ้นสุด</span>\r\n          </div>\r\n          <div class=\"col-md-3\">\r\n            <div class=\"input-wrapper\">\r\n              <input class=\"form-control textinput dateinput bg-gray\" id=\"startDate\" placeholder=\"วว/ดด/ปปปป\" name=\"date\" type=\"text\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-3  col-xs-6 offset-md-4\">\r\n            <button class=\"btn-med btn-primary\" (click)=\"checkpage('regular-exchange-step1')\">\r\n              ตกลง\r\n              <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\r\n            </button>\r\n          </div>\r\n          <div class=\"col-md-3 col-xs-6\">\r\n            <button class=\"btn-med btn-cancel\" (click)=\"checkpage('signup1')\">\r\n              ยกเลิก\r\n              <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\r\n            </button>\r\n          </div>\r\n        </div>\r\n\r\n\r\n      </div>\r\n\r\n\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"detail-footer-wrapper\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6 text-left\">\r\n        <h4>รายการสับเปลี่ยนหน่วยลงทุน <br class=\"d-block d-sm-none\"/><label>(รายการที่รอดำเนินการ)</label></h4>\r\n      </div>\r\n      <div class=\"col-md-6 text-md-right\">\r\n        <i class=\"fa fa-angle-right mr-1\" aria-hidden=\"true\"></i><label>ดูรายการทั้งหมด</label>\r\n      </div>\r\n      <div class=\"col-md-12 mt-5 text-center\">\r\n        <p>ไม่มีรายการที่รอดำเนินงาน</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"fund-table-wrapper\" *ngIf=\"page == 'regular-exchange-step1'\">\r\n  <div class=\"heading-section\">\r\n    <div class=\"row\">\r\n      <div class=\"detail-head-wrapper\">\r\n        <div class=\"col-md-12 col-xs-12 icon-option mb-3\">\r\n\r\n          <ul class=\"\">\r\n            <!-- <li class=\"ico-fb\">\r\n              <a href=\"#\" title=\"facebook\">\r\n                <img src=\"/assets/Images/icons/ico-pipe.png\" />\r\n              </a>\r\n            </li>\r\n            <li class=\"ico-line\">\r\n              <a href=\"#\" title=\"line\">\r\n                <img src=\"/assets/Images/icons/ico-download.png\" />\r\n              </a>\r\n            </li> -->\r\n            <li class=\"ico-yt\">\r\n              <a href=\"#\" title=\"youtube\">\r\n                <img src=\"/assets/Images/icons/ico-print.png\" />\r\n              </a>\r\n            </li>\r\n\r\n          </ul>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n\r\n          <p>เลขที่ผู้ถือหน่วยลงทุน</p>\r\n\r\n          <div class=\"select-wrapper inline-block\">\r\n            <select name=\"ddlLink\" id=\"ddlLink\">\r\n              <option value=\"0\" selected=\"\">9990244757</option>\r\n              <option value=\"36\">9990244757</option>\r\n              <option value=\"29\">9990244757</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <p>ชื่อผู้ถือหน่วยลงทุน</p>\r\n          <span>เนติวัฒน์ โชติกร</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"detail-body-wrapper\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <H4 class=\"text-left\">สับเปลี่ยนหน่วยลงทุนแบบประจำ</H4>\r\n        <!-- <p>ขั้นตอนที่ 1 เลือกลงทุนและใส่จำนวนที่ต้องการ</p> -->\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <p>กองทุนต้นทาง</p>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <span>KFCRASH - กองทุนกรุงศรีตราสารเงิน</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-custom\">\r\n            <thead>\r\n              <tr>\r\n                <th class=\"bg-blue\">\r\n                  ยอดคงเหลือ (หน่วย)\r\n                </th>\r\n                <th class=\"bg-primary\">\r\n                  ยอดคงเหลือ (บาท)\r\n                </th>\r\n                <th class=\"bg-darkbrown\">\r\n                  วันที่มีผล\r\n                </th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr>\r\n                <td>\r\n                  <a href=\"/MutualFund\" title=\"ประเภทกองทุน\">6.2456\r\n                  </a>\r\n                </td>\r\n                <td>\r\n                  <a href=\"/MutualFund/FundDetail\" title=\"ชื่อกองทุน\">74.39\r\n                  </a>\r\n                </td>\r\n                <td>\r\n                  05/04/60\r\n                  <a class=\"color-red\">(ณ วันที่ผ่านมา)</a>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>\r\n                  <a href=\"/MutualFund\" title=\"ประเภทกองทุน\">6.2456\r\n                  </a>\r\n                </td>\r\n                <td>\r\n                  <a href=\"/MutualFund/FundDetail\" title=\"ชื่อกองทุน\">N/A\r\n                  </a>\r\n                </td>\r\n                <td>\r\n                  05/04/60\r\n                  <a class=\"color-red\">(หลังหักรายการวันนี้)</a>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n\r\n          </table>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <p>สับเปลี่ยนจำนวน</p>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <span>3,000 บาท</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <p>รับเงินค่าขายคืน</p>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <span>ธนาคารกรุงศรีอยุธยา จำกัด (มหาชน)</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <p>เงื่อนไข</p>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <span>รายเดือน : วันที่ 1</span>                          \r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <p>ระยะเวลาเริ่มต้น</p>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <span>07 มิถุนายน 2561</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <p>ระยะเวลาสิ้นสุด</p>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <span>10 มิถุนายน 2561</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-3  col-xs-6 offset-md-4\">\r\n            <button class=\"btn-med btn-primary\" (click)=\"checkpage('')\">\r\n              พิมพ์\r\n              <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\r\n            </button>\r\n          </div>\r\n          <div class=\"col-md-3 col-xs-6\">\r\n            <button class=\"btn-med btn-blue\" (click)=\"checkpage('signup1')\">\r\n              ดูรายการ\r\n              <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\r\n            </button>\r\n          </div>\r\n        </div>\r\n\r\n\r\n      </div>\r\n\r\n\r\n    </div>\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/regular-list/regular-exchange/regular-exchange.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/regular-list/regular-exchange/regular-exchange.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/regular-list/regular-exchange/regular-exchange.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/regular-list/regular-exchange/regular-exchange.component.ts ***!
  \*****************************************************************************/
/*! exports provided: RegularExchangeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegularExchangeComponent", function() { return RegularExchangeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegularExchangeComponent = /** @class */ (function () {
    function RegularExchangeComponent() {
        this.page = "regular-exchange";
    }
    RegularExchangeComponent.prototype.ngOnInit = function () {
        $('#mutual-tab-menu').find('li').removeClass('current');
        $('#mutual-tab-menu').find('li#menu3').addClass('current');
    };
    RegularExchangeComponent.prototype.checkpage = function (page) {
        window.scroll(0, 0);
        console.log(page);
        switch (page) {
            case 'regular-exchange':
                this.page = "regular-exchange";
                break;
            case 'regular-exchange-step1':
                this.page = "regular-exchange-step1";
                break;
            default:
                this.page = "regular-exchange";
                console.log(this.page);
                break;
        }
    };
    RegularExchangeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-regular-exchange',
            template: __webpack_require__(/*! ./regular-exchange.component.html */ "./src/app/regular-list/regular-exchange/regular-exchange.component.html"),
            styles: [__webpack_require__(/*! ./regular-exchange.component.scss */ "./src/app/regular-list/regular-exchange/regular-exchange.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], RegularExchangeComponent);
    return RegularExchangeComponent;
}());



/***/ }),

/***/ "./src/app/regular-list/regular-list.component.html":
/*!**********************************************************!*\
  !*** ./src/app/regular-list/regular-list.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n\r\n<div class=\"\" id=\"maincontainer-wrapper\">\r\n  <div class=\"page-content-wrapper\">\r\n    <div class=\"mutual-fund-wrapper\">\r\n      <div class=\"max-width-wrapper\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n            <div class=\"tabs-menu-wrapper\">\r\n              <div class=\"dropdown dropdown-content\">\r\n                <button class=\"btn-med btn-primary dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">\r\n                  เมนูกองทุน\r\n                </button>\r\n                <ul class=\"dropdown-menu\">\r\n                  <li>\r\n                    <a (click)=\"navigate('regular-purchase')\" title=\"รายการซื้อแบบประจำ\">รายการซื้อแบบประจำ</a>\r\n                  </li>\r\n                  <li>\r\n                    <a (click)=\"navigate('regular-sell')\" title=\"รายการขายคืนแบบประจำ\">รายการขายคืนแบบประจำ</a>\r\n                  </li>\r\n                  <li>\r\n                    <a (click)=\"navigate('regular-exchange')\" title=\"รายการสับเปลี่ยนแบบประจำ\">รายการสับเปลี่ยนแบบประจำ</a>\r\n                  </li>\r\n                  <li>\r\n                    <a (click)=\"navigate('all-list')\" title=\"ดูรายการทั้งหมด\">ดูรายการทั้งหมด</a>\r\n                  </li>\r\n                </ul>\r\n                <div class=\"clearfix\"></div>\r\n              </div>\r\n              <ul class=\"nav nav-tabs\" role=\"tablist\" id=\"mutual-tab-menu\">\r\n                <li role=\"presentation\" id=\"menu1\">\r\n                  <a title=\"รายการซื้อ\" (click)=\"navigate('regular-purchase')\">รายการซื้อแบบประจำ</a>\r\n                </li>\r\n                <li role=\"presentation\" id=\"menu2\">\r\n                  <a title=\"รายการขาย\" (click)=\"navigate('regular-sell')\">รายการขายคืนแบบประจำ</a>\r\n                </li>\r\n                <li role=\"presentation\" id=\"menu3\" (click)=\"navigate('regular-exchange')\">\r\n                  <a title=\"รายการสับเปลี่ยน\">รายการสับเปลี่ยนแบบประจำ</a>\r\n                </li>\r\n                <li role=\"presentation\" id=\"menu4\" (click)=\"navigate('all-list')\">\r\n                  <a title=\"รายการตั้งซื้อขายล่วงหน้า\">ดูรายการทั้งหมด</a>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n            \r\n            <router-outlet></router-outlet>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <app-footer></app-footer>"

/***/ }),

/***/ "./src/app/regular-list/regular-list.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/regular-list/regular-list.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/regular-list/regular-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/regular-list/regular-list.component.ts ***!
  \********************************************************/
/*! exports provided: RegularListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegularListComponent", function() { return RegularListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegularListComponent = /** @class */ (function () {
    function RegularListComponent(route, router) {
        this.route = route;
        this.router = router;
    }
    RegularListComponent.prototype.ngOnInit = function () {
        $('#bottom-main-nav li').find('a').removeClass('current');
        $('#bottom-main-nav li#regular-list').find('a').addClass('current');
    };
    RegularListComponent.prototype.navigate = function (target) {
        var target = target;
        console.log(target);
        this.router.navigate([target], { relativeTo: this.route });
    };
    RegularListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-regular-list',
            template: __webpack_require__(/*! ./regular-list.component.html */ "./src/app/regular-list/regular-list.component.html"),
            styles: [__webpack_require__(/*! ./regular-list.component.scss */ "./src/app/regular-list/regular-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], RegularListComponent);
    return RegularListComponent;
}());



/***/ }),

/***/ "./src/app/regular-list/regular-purchase/regular-purchase.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/regular-list/regular-purchase/regular-purchase.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"fund-table-wrapper\" *ngIf=\"page == 'regular-purchase'\">\r\n  <div class=\"heading-section\">\r\n    <div class=\"row\">\r\n      <div class=\"detail-head-wrapper\">\r\n        <div class=\"col-md-12 col-xs-12 icon-option mb-3\">\r\n\r\n          <ul class=\"\">\r\n            <!-- <li class=\"ico-fb\">\r\n              <a href=\"#\" title=\"facebook\">\r\n                <img src=\"/assets/Images/icons/ico-pipe.png\" />\r\n              </a>\r\n            </li>\r\n            <li class=\"ico-line\">\r\n              <a href=\"#\" title=\"line\">\r\n                <img src=\"/assets/Images/icons/ico-download.png\" />\r\n              </a>\r\n            </li> -->\r\n            <li class=\"ico-yt\">\r\n              <a href=\"#\" title=\"youtube\">\r\n                <img src=\"/assets/Images/icons/ico-print.png\" />\r\n              </a>\r\n            </li>\r\n\r\n          </ul>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n\r\n          <p>เลขที่ผู้ถือหน่วยลงทุน</p>\r\n          <div class=\"select-wrapper inline-block\">\r\n            <select name=\"ddlLink\" id=\"ddlLink\">\r\n              <option value=\"0\" selected=\"\">9990244757</option>\r\n              <option value=\"36\">9990244757</option>\r\n              <option value=\"29\">9990244757</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <p>ชื่อผู้ถือหน่วยลงทุน</p>\r\n          <span>เนติวัฒน์ โชติกร</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"detail-body-wrapper\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <H4 class=\"text-left\">ซื้อหน่วยลงทุนแบบประจำ</H4>\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <span>กองทุน</span>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <div class=\"select-wrapper inline-block\">\r\n              <select name=\"ddlLink\" id=\"ddlLink\">\r\n                <option value=\"0\" selected=\"\">KFCRASH - กองทุนกรุงศรีตราสารเงิน</option>\r\n                <option value=\"36\">KFCRASH - กองทุนกรุงศรีตราสารเงิน</option>\r\n                <option value=\"29\">KFCRASH - กองทุนกรุงศรีตราสารเงิน</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <span>หักบัญชีธนาคาร</span>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <div class=\"select-wrapper inline-block\">\r\n\r\n              <select name=\"ddlLink\" id=\"ddlLink\">\r\n                <option value=\"0\" selected=\"\">ธนาคารกรุงศรีอยุธยา จำกัด (มหาชน)</option>\r\n                <option value=\"36\">ธนาคารกรุงศรีอยุธยา จำกัด (มหาชน)</option>\r\n                <option value=\"29\">ธนาคารกรุงศรีอยุธยา จำกัด (มหาชน)</option>\r\n\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <span>จำนวน(บาท)</span>\r\n          </div>\r\n          <div class=\"col-md-3 col-xs-6\">\r\n            <div class=\"input-wrapper \">\r\n              <input id=\"name\" name=\"name\" maxlength=\"30\" type=\"text\" class=\"bg-gray\" placeholder=\"0\">\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-3 col-xs-6\">\r\n            <div class=\"select-wrapper inline-block\">\r\n\r\n              <select name=\"ddlLink\" id=\"ddlLink\">\r\n                <option value=\"0\" selected=\"\">บาท</option>\r\n                <option value=\"36\">เยน</option>\r\n                <option value=\"29\">ดอลล่า</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <span>เงื่อนไข</span>\r\n          </div>\r\n          <div class=\"col-md-3  col-xs-6\">\r\n            <div class=\"custom-radio-between\">\r\n              <input value=\"101\" id=\"101\" name=\"rad1\" type=\"radio\" checked>\r\n              <label for=\"101\"></label>\r\n              <p>รายเดือน</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-3 col-xs-6\">\r\n            <div class=\"select-wrapper inline-block\">\r\n\r\n              <select name=\"ddlLink\" id=\"ddlLink\">\r\n                <option value=\"0\" selected=\"\">วันที่1</option>\r\n                <option value=\"36\">วันที่2</option>\r\n                <option value=\"29\">วันที่3</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <span>ระยะเวลาเริ่มต้น</span>\r\n          </div>\r\n          <div class=\"col-md-3\">\r\n            <div class=\"input-wrapper\">\r\n              <input class=\"form-control textinput dateinput bg-gray\" id=\"startDate\" placeholder=\"วว/ดด/ปปปป\" name=\"date\" type=\"text\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <span>ระยะเวลาสิ้นสุด</span>\r\n          </div>\r\n          <div class=\"col-md-3\">\r\n            <div class=\"input-wrapper\">\r\n              <input class=\"form-control textinput dateinput bg-gray\" id=\"startDate\" placeholder=\"วว/ดด/ปปปป\" name=\"date\" type=\"text\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-md-3  col-xs-6 offset-md-4\">\r\n            <button class=\"btn-med btn-primary\" (click)=\"checkpage('regular-purchase-step1')\">\r\n              ตกลง\r\n              <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\r\n            </button>\r\n          </div>\r\n          <div class=\"col-md-3 col-xs-6\">\r\n            <button class=\"btn-med btn-cancel\" (click)=\"checkpage('')\">\r\n              ยกเลิก\r\n              <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"detail-footer-wrapper\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6 text-left\">\r\n        <h4>รายการซื้อหน่วยลงทุน <br class=\"d-block d-sm-none\"/><label>(รายการที่รอดำเนินการ)</label></h4>\r\n      </div>\r\n      <div class=\"col-md-6 text-md-right\">\r\n        <i class=\"fa fa-angle-right mr-1\" aria-hidden=\"true\"></i><label>ดูรายการทั้งหมด</label>\r\n      </div>\r\n      <div class=\"col-md-12 mt-5 text-center\">\r\n        <p>ไม่มีรายการที่รอดำเนินงาน</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"fund-table-wrapper\" *ngIf=\"page == 'regular-purchase-step1'\">\r\n  <div class=\"heading-section\">\r\n    <div class=\"row\">\r\n      <div class=\"detail-head-wrapper\">\r\n        <div class=\"col-md-12 col-xs-12 icon-option mb-3\">\r\n\r\n          <ul class=\"\">\r\n            <!-- <li class=\"ico-fb\">\r\n              <a href=\"#\" title=\"facebook\">\r\n                <img src=\"/assets/Images/icons/ico-pipe.png\" />\r\n              </a>\r\n            </li>\r\n            <li class=\"ico-line\">\r\n              <a href=\"#\" title=\"line\">\r\n                <img src=\"/assets/Images/icons/ico-download.png\" />\r\n              </a>\r\n            </li> -->\r\n            <li class=\"ico-yt\">\r\n              <a href=\"#\" title=\"youtube\">\r\n                <img src=\"/assets/Images/icons/ico-print.png\" />\r\n              </a>\r\n            </li>\r\n\r\n          </ul>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n\r\n          <p>เลขที่ผู้ถือหน่วยลงทุน</p>\r\n          <div class=\"select-wrapper inline-block\">\r\n            <select name=\"ddlLink\" id=\"ddlLink\">\r\n              <option value=\"0\" selected=\"\">9990244757</option>\r\n              <option value=\"36\">9990244757</option>\r\n              <option value=\"29\">9990244757</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <p>ชื่อผู้ถือหน่วยลงทุน</p>\r\n          <span>เนติวัฒน์ โชติกร</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"detail-body-wrapper\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <H4 class=\"text-left\">ซื้อหน่วยลงทุนแบบประจำ</H4>\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <p>กองทุน</p>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <span>KFCRASH - กองทุนกรุงศรีตราสารเงิน</span>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <p>หักบัญชีธนาคาร</p>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <span>ธนาคารกรุงศรีอยุธยา จำกัด (มหาชน)</span>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <p>จำนวน(บาท)</p>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <span>3,000 บาท</span>\r\n          </div>                     \r\n\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <p>เงื่อนไข</p>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <span>รายเดือน : วันที่1</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <p>ระยะเวลาเริ่มต้น</p>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <span>07 มิถุนายน 2561</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <p>ระยะเวลาสิ้นสุด</p>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n              <span>10 มิถุนายน 2561</span>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-md-3  col-xs-6 offset-md-4\">\r\n            <button class=\"btn-med btn-primary\" (click)=\"checkpage('signup1')\">\r\n              พิมพ์\r\n              <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\r\n            </button>\r\n          </div>\r\n          <div class=\"col-md-3 col-xs-6\">\r\n            <button class=\"btn-med btn-blue\" (click)=\"checkpage('signup1')\">\r\n              ดูรายการ\r\n              <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\r\n            </button>\r\n          </div>\r\n\r\n          <div class=\"col-md-12 mt-4\">\r\n              <p class=\"color-red no-margin\">*ถ้าวันที่ทำรายการซื้อนั้นตรงกับวันหยุดทำการ บริษัทจะดำเนินการทำรายการซื้อให้ในวันทำการถัดไป</p>\r\n            </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/regular-list/regular-purchase/regular-purchase.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/regular-list/regular-purchase/regular-purchase.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/regular-list/regular-purchase/regular-purchase.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/regular-list/regular-purchase/regular-purchase.component.ts ***!
  \*****************************************************************************/
/*! exports provided: RegularPurchaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegularPurchaseComponent", function() { return RegularPurchaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegularPurchaseComponent = /** @class */ (function () {
    function RegularPurchaseComponent() {
        this.page = "regular-purchase";
    }
    RegularPurchaseComponent.prototype.ngOnInit = function () {
        $('#mutual-tab-menu').find('li').removeClass('current');
        $('#mutual-tab-menu').find('li#menu1').addClass('current');
    };
    RegularPurchaseComponent.prototype.checkpage = function (page) {
        window.scroll(0, 0);
        console.log(page);
        switch (page) {
            case 'regular-purchase':
                this.page = "regular-purchase";
                break;
            case 'regular-purchase-step1':
                this.page = "regular-purchase-step1";
                break;
            default:
                this.page = "regular-purchase";
                console.log(this.page);
                break;
        }
    };
    RegularPurchaseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-regular-purchase',
            template: __webpack_require__(/*! ./regular-purchase.component.html */ "./src/app/regular-list/regular-purchase/regular-purchase.component.html"),
            styles: [__webpack_require__(/*! ./regular-purchase.component.scss */ "./src/app/regular-list/regular-purchase/regular-purchase.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], RegularPurchaseComponent);
    return RegularPurchaseComponent;
}());



/***/ }),

/***/ "./src/app/regular-list/regular-sell/regular-sell.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/regular-list/regular-sell/regular-sell.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"fund-table-wrapper\" *ngIf=\"page == 'regular-sell'\">\r\n  <div class=\"heading-section\">\r\n    <div class=\"row\">\r\n      <div class=\"detail-head-wrapper\">\r\n        <div class=\"col-md-12 col-xs-12 icon-option mb-3\">\r\n\r\n          <ul class=\"\">\r\n            <!-- <li class=\"ico-fb\">\r\n              <a href=\"#\" title=\"facebook\">\r\n                <img src=\"/assets/Images/icons/ico-pipe.png\" />\r\n              </a>\r\n            </li>\r\n            <li class=\"ico-line\">\r\n              <a href=\"#\" title=\"line\">\r\n                <img src=\"/assets/Images/icons/ico-download.png\" />\r\n              </a>\r\n            </li> -->\r\n            <li class=\"ico-yt\">\r\n              <a href=\"#\" title=\"youtube\">\r\n                <img src=\"/assets/Images/icons/ico-print.png\" />\r\n              </a>\r\n            </li>\r\n\r\n          </ul>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n\r\n          <p>เลขที่ผู้ถือหน่วยลงทุน</p>\r\n\r\n          <div class=\"select-wrapper inline-block\">\r\n            <select name=\"ddlLink\" id=\"ddlLink\">\r\n              <option value=\"0\" selected=\"\">9990244757</option>\r\n              <option value=\"36\">9990244757</option>\r\n              <option value=\"29\">9990244757</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <p>ชื่อผู้ถือหน่วยลงทุน</p>\r\n          <span>เนติวัฒน์ โชติกร</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"detail-body-wrapper\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <H4 class=\"text-left\">ขายคืนหน่วยลงทุนแบบประจำ</H4>\r\n        <!-- <p>ขั้นตอนที่ 1 เลือกลงทุนและใส่จำนวนที่ต้องการ</p> -->\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <span>กองทุนต้นทาง</span>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <div class=\"select-wrapper inline-block\">\r\n\r\n              <select name=\"ddlLink\" id=\"ddlLink\">\r\n                <option value=\"0\" selected=\"\">KFCRASH - กองทุนกรุงศรีตราสารเงิน</option>\r\n                <option value=\"36\">KFCRASH - กองทุนกรุงศรีตราสารเงิน</option>\r\n                <option value=\"29\">KFCRASH - กองทุนกรุงศรีตราสารเงิน</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-custom\">\r\n            <thead>\r\n              <tr>\r\n                <th class=\"bg-blue\">\r\n                  ยอดคงเหลือ (หน่วย)\r\n                </th>\r\n                <th class=\"bg-primary\">\r\n                  ยอดคงเหลือ (บาท)\r\n                </th>\r\n                <th class=\"bg-darkbrown\">\r\n                  วันที่มีผล\r\n                </th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr>\r\n                <td>\r\n                  <a href=\"/MutualFund\" title=\"ประเภทกองทุน\">6.2456\r\n                  </a>\r\n                </td>\r\n                <td>\r\n                  <a href=\"/MutualFund/FundDetail\" title=\"ชื่อกองทุน\">74.39\r\n                  </a>\r\n                </td>\r\n                <td>\r\n                  05/04/60\r\n                  <a class=\"color-red\">(ณ วันที่ผ่านมา)</a>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>\r\n                  <a href=\"/MutualFund\" title=\"ประเภทกองทุน\">6.2456\r\n                  </a>\r\n                </td>\r\n                <td>\r\n                  <a href=\"/MutualFund/FundDetail\" title=\"ชื่อกองทุน\">N/A\r\n                  </a>\r\n                </td>\r\n                <td>\r\n                  05/04/60\r\n                  <a class=\"color-red\">(หลังหักรายการวันนี้)</a>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n\r\n          </table>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <span>จำนวนที่ขายคืน</span>\r\n          </div>\r\n          <div class=\"col-md-3 col-xs-6\">\r\n            <div class=\"input-wrapper \">\r\n              <input id=\"name\" name=\"name\" maxlength=\"30\" type=\"text\" class=\"bg-gray\" placeholder=\"0\">\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-3 col-xs-6\">\r\n            <div class=\"select-wrapper inline-block\">\r\n\r\n              <select name=\"ddlLink\" id=\"ddlLink\">\r\n                <option value=\"0\" selected=\"\">บาท</option>\r\n                <option value=\"36\">เยน</option>\r\n                <option value=\"29\">ดอลล่า</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <span>รับเงินค่าขายคืน</span>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <div class=\"select-wrapper inline-block\">\r\n\r\n              <select name=\"ddlLink\" id=\"ddlLink\">\r\n                <option value=\"0\" selected=\"\">ธนาคารกรุงศรีอยุธยา จำกัด (มหาชน)</option>\r\n                <option value=\"36\">ธนาคารกรุงศรีอยุธยา จำกัด (มหาชน)</option>\r\n                <option value=\"29\">ธนาคารกรุงศรีอยุธยา จำกัด (มหาชน)</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <span>เงื่อนไข</span>\r\n          </div>\r\n          <div class=\"col-md-3 col-xs-6\">\r\n            <div class=\"custom-radio-between\">\r\n              <input value=\"101\" id=\"101\" name=\"rad1\" type=\"radio\" checked>\r\n              <label for=\"101\"></label>\r\n              <p>รายเดือน</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-3 col-xs-6\">\r\n            <div class=\"select-wrapper inline-block\">\r\n\r\n              <select name=\"ddlLink\" id=\"ddlLink\">\r\n                <option value=\"0\" selected=\"\">วันที่1</option>\r\n                <option value=\"36\">วันที่2</option>\r\n                <option value=\"29\">วันที่3</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <span>ระยะเวลาเริ่มต้น</span>\r\n          </div>\r\n          <div class=\"col-md-3\">\r\n            <div class=\"input-wrapper\">\r\n              <input class=\"form-control textinput dateinput bg-gray\" id=\"startDate\" placeholder=\"วว/ดด/ปปปป\" name=\"date\" type=\"text\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <span>ระยะเวลาสิ้นสุด</span>\r\n          </div>\r\n          <div class=\"col-md-3\">\r\n            <div class=\"input-wrapper\">\r\n              <input class=\"form-control textinput dateinput bg-gray\" id=\"startDate\" placeholder=\"วว/ดด/ปปปป\" name=\"date\" type=\"text\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-3  col-xs-6 offset-md-4\">\r\n            <button class=\"btn-med btn-primary\" (click)=\"checkpage('regular-sell-step1')\">\r\n              ตกลง\r\n              <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\r\n            </button>\r\n          </div>\r\n          <div class=\"col-md-3 col-xs-6\">\r\n            <button class=\"btn-med btn-cancel\" (click)=\"checkpage('')\">\r\n              ยกเลิก\r\n              <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\r\n            </button>\r\n          </div>\r\n        </div>\r\n\r\n\r\n      </div>\r\n\r\n\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"detail-footer-wrapper\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6 text-left\">\r\n        <h4>รายการขายคืนหน่วยลงทุน\r\n          <br class=\"d-block d-sm-none\" />\r\n          <label>(รายการที่รอดำเนินการ)</label>\r\n        </h4>\r\n      </div>\r\n      <div class=\"col-md-6 text-md-right\">\r\n        <i class=\"fa fa-angle-right mr-1\" aria-hidden=\"true\"></i>\r\n        <label>ดูรายการทั้งหมด</label>\r\n      </div>\r\n      <div class=\"col-md-12 mt-5 text-center\">\r\n        <p>ไม่มีรายการที่รอดำเนินงาน</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"fund-table-wrapper\" *ngIf=\"page == 'regular-sell-step1'\">\r\n  <div class=\"heading-section\">\r\n    <div class=\"row\">\r\n      <div class=\"detail-head-wrapper\">\r\n        <div class=\"col-md-12 col-xs-12 icon-option mb-3\">\r\n\r\n          <ul class=\"\">\r\n            <!-- <li class=\"ico-fb\">\r\n              <a href=\"#\" title=\"facebook\">\r\n                <img src=\"/assets/Images/icons/ico-pipe.png\" />\r\n              </a>\r\n            </li>\r\n            <li class=\"ico-line\">\r\n              <a href=\"#\" title=\"line\">\r\n                <img src=\"/assets/Images/icons/ico-download.png\" />\r\n              </a>\r\n            </li> -->\r\n            <li class=\"ico-yt\">\r\n              <a href=\"#\" title=\"youtube\">\r\n                <img src=\"/assets/Images/icons/ico-print.png\" />\r\n              </a>\r\n            </li>\r\n\r\n          </ul>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n\r\n          <p>เลขที่ผู้ถือหน่วยลงทุน</p>\r\n\r\n          <div class=\"select-wrapper inline-block\">\r\n            <select name=\"ddlLink\" id=\"ddlLink\">\r\n              <option value=\"0\" selected=\"\">9990244757</option>\r\n              <option value=\"36\">9990244757</option>\r\n              <option value=\"29\">9990244757</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <p>ชื่อผู้ถือหน่วยลงทุน</p>\r\n          <span>เนติวัฒน์ โชติกร</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"detail-body-wrapper\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <H4 class=\"text-left\">ขายคืนหน่วยลงทุนแบบประจำ</H4>\r\n        <!-- <p>ขั้นตอนที่ 1 เลือกลงทุนและใส่จำนวนที่ต้องการ</p> -->\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <p>กองทุนต้นทาง</p>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <span>KFCRASH - กองทุนกรุงศรีตราสารเงิน</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-custom\">\r\n            <thead>\r\n              <tr>\r\n                <th class=\"bg-blue\">\r\n                  ยอดคงเหลือ (หน่วย)\r\n                </th>\r\n                <th class=\"bg-primary\">\r\n                  ยอดคงเหลือ (บาท)\r\n                </th>\r\n                <th class=\"bg-darkbrown\">\r\n                  วันที่มีผล\r\n                </th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr>\r\n                <td>\r\n                  <a href=\"/MutualFund\" title=\"ประเภทกองทุน\">6.2456\r\n                  </a>\r\n                </td>\r\n                <td>\r\n                  <a href=\"/MutualFund/FundDetail\" title=\"ชื่อกองทุน\">74.39\r\n                  </a>\r\n                </td>\r\n                <td>\r\n                  05/04/60\r\n                  <a class=\"color-red\">(ณ วันที่ผ่านมา)</a>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>\r\n                  <a href=\"/MutualFund\" title=\"ประเภทกองทุน\">6.2456\r\n                  </a>\r\n                </td>\r\n                <td>\r\n                  <a href=\"/MutualFund/FundDetail\" title=\"ชื่อกองทุน\">N/A\r\n                  </a>\r\n                </td>\r\n                <td>\r\n                  05/04/60\r\n                  <a class=\"color-red\">(หลังหักรายการวันนี้)</a>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n\r\n          </table>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <p>จำนวนที่ขายคืน</p>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <span>3,000 บาท</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <p>รับเงินค่าขายคืน</p>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <span>ธนาคารกรุงศรีอยุธยา จำกัด (มหาชน)</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <p>เงื่อนไข</p>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <span>รายเดือน : วันที่ 1</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <p>ระยะเวลาเริ่มต้น</p>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <span>07 มิถุนายน 2561</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <p>ระยะเวลาสิ้นสุด</p>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <span>10 มิถุนายน 2561</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-3  col-xs-6 offset-md-4\">\r\n            <button class=\"btn-med btn-primary\" (click)=\"checkpage('signup1')\">\r\n              พิมพ์\r\n              <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\r\n            </button>\r\n          </div>\r\n          <div class=\"col-md-3 col-xs-6\">\r\n            <button class=\"btn-med btn-blue\" (click)=\"checkpage('signup1')\">\r\n              ดูรายการ\r\n              <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\r\n            </button>\r\n          </div>\r\n        </div>\r\n\r\n\r\n      </div>\r\n\r\n\r\n    </div>\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/regular-list/regular-sell/regular-sell.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/regular-list/regular-sell/regular-sell.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/regular-list/regular-sell/regular-sell.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/regular-list/regular-sell/regular-sell.component.ts ***!
  \*********************************************************************/
/*! exports provided: RegularSellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegularSellComponent", function() { return RegularSellComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegularSellComponent = /** @class */ (function () {
    function RegularSellComponent() {
        this.page = "regular-sell";
    }
    RegularSellComponent.prototype.ngOnInit = function () {
        $('#mutual-tab-menu').find('li').removeClass('current');
        $('#mutual-tab-menu').find('li#menu2').addClass('current');
    };
    RegularSellComponent.prototype.checkpage = function (page) {
        window.scroll(0, 0);
        console.log(page);
        switch (page) {
            case 'regular-sell':
                this.page = "regular-sell";
                break;
            case 'regular-sell-step1':
                this.page = "regular-sell-step1";
                break;
            default:
                this.page = "regular-sell";
                console.log(this.page);
                break;
        }
    };
    RegularSellComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-regular-sell',
            template: __webpack_require__(/*! ./regular-sell.component.html */ "./src/app/regular-list/regular-sell/regular-sell.component.html"),
            styles: [__webpack_require__(/*! ./regular-sell.component.scss */ "./src/app/regular-list/regular-sell/regular-sell.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], RegularSellComponent);
    return RegularSellComponent;
}());



/***/ }),

/***/ "./src/app/report/confirmation/confirmation.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/report/confirmation/confirmation.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"fund-table-wrapper\">\r\n  <div class=\"heading-section\">\r\n    <div class=\"row\">\r\n      <div class=\"detail-head-wrapper\">\r\n        <div class=\"col-md-12 col-xs-12 icon-option mb-3\">\r\n\r\n          <ul class=\"\">\r\n            <!-- <li class=\"ico-fb\">\r\n              <a href=\"#\" title=\"facebook\">\r\n                <img src=\"/assets/Images/icons/ico-pipe.png\" />\r\n              </a>\r\n            </li>\r\n            <li class=\"ico-line\">\r\n              <a href=\"#\" title=\"line\">\r\n                <img src=\"/assets/Images/icons/ico-download.png\" />\r\n              </a>\r\n            </li> -->\r\n            <li class=\"ico-yt\">\r\n              <a href=\"#\" title=\"youtube\">\r\n                <img src=\"/assets/Images/icons/ico-print.png\" />\r\n              </a>\r\n            </li>\r\n\r\n          </ul>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n\r\n          <p>เลขที่ผู้ถือหน่วยลงทุน</p>\r\n          <div class=\"select-wrapper inline-block\">\r\n            <select name=\"ddlLink\" id=\"ddlLink\">\r\n              <option value=\"0\" selected=\"\">9990244757</option>\r\n              <option value=\"36\">9990244757</option>\r\n              <option value=\"29\">9990244757</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <p>ชื่อผู้ถือหน่วยลงทุน</p>\r\n          <span>เนติวัฒน์ โชติกร</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"detail-body-wrapper\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n            <H4 class=\"text-left\">เลือกวันที่ต้องการยืนยันการทำรายการ</H4>\r\n          </div>\r\n          <div class=\"col-md-3\">\r\n            <span>วันที่ทำรายการ</span>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <div class=\"input-wrapper\">\r\n              <input class=\"form-control textinput dateinput bg-gray\" id=\"startDate\" placeholder=\"วว/ดด/ปปปป\" name=\"date\" type=\"text\">\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-3 col-xs-6\">\r\n            <button class=\"btn-med btn-primary\" >\r\n              ตกลง\r\n              <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\r\n            </button>\r\n          </div>\r\n\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n  </div>\r\n  <div class=\"detail-footer-wrapper\">\r\n    <div class=\"sidenav-left\">\r\n      <div class=\"vertical-menu-wrapper\">\r\n        <h3>\r\n          ใบยืนยันการทำรายการ\r\n        </h3>\r\n        <ul>\r\n          <li>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-10 col-xs-9\">\r\n                <a href=\"#\" title=\"ชื่อเมนู\">\r\n                  (ชื่อ) ใบยืนยันการทำรายการ\r\n                </a>\r\n              </div>\r\n              <div class=\"col-md-2 col-xs-3\">\r\n                <button class=\"btn-sm btn-download width50 \" >\r\n                  <p>Download</p>\r\n                  <img src=\"/assets/Images/icons/ico-download-white.png\">\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </li>\r\n          <li>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-10 col-xs-9\">\r\n                <a href=\"#\" title=\"ชื่อเมนู\">\r\n                  (ชื่อ) ใบยืนยันการทำรายการ\r\n                </a>\r\n              </div>\r\n              <div class=\"col-md-2 col-xs-3\">\r\n                <button class=\"btn-sm btn-download width50 \">\r\n                  <p>Download</p>\r\n                  <img src=\"/assets/Images/icons/ico-download-white.png\">\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </li>\r\n          <li>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-10 col-xs-9\">\r\n                <a href=\"#\" title=\"ชื่อเมนู\">\r\n                  (ชื่อ) ใบยืนยันการทำรายการ\r\n                </a>\r\n              </div>\r\n              <div class=\"col-md-2 col-xs-3\">\r\n                <button class=\"btn-sm btn-download width50 \">\r\n                  <p>Download</p>\r\n                  <img src=\"/assets/Images/icons/ico-download-white.png\">\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </li>\r\n\r\n        </ul>\r\n        <div class=\"clearfix\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/report/confirmation/confirmation.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/report/confirmation/confirmation.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/report/confirmation/confirmation.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/report/confirmation/confirmation.component.ts ***!
  \***************************************************************/
/*! exports provided: ConfirmationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationComponent", function() { return ConfirmationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConfirmationComponent = /** @class */ (function () {
    function ConfirmationComponent() {
    }
    ConfirmationComponent.prototype.ngOnInit = function () {
        $('#mutual-tab-menu').find('li').removeClass('current');
        $('#mutual-tab-menu').find('li#menu8').addClass('current');
    };
    ConfirmationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-confirmation',
            template: __webpack_require__(/*! ./confirmation.component.html */ "./src/app/report/confirmation/confirmation.component.html"),
            styles: [__webpack_require__(/*! ./confirmation.component.scss */ "./src/app/report/confirmation/confirmation.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ConfirmationComponent);
    return ConfirmationComponent;
}());



/***/ }),

/***/ "./src/app/report/not-available-list/not-available-list.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/report/not-available-list/not-available-list.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"fund-table-wrapper\">\r\n  <div class=\"heading-section\">\r\n    <div class=\"row\">\r\n      <div class=\"detail-head-wrapper\">\r\n        <div class=\"col-md-12 col-xs-12 icon-option mb-3\">\r\n\r\n          <ul class=\"\">\r\n            <!-- <li class=\"ico-fb\">\r\n              <a href=\"#\" title=\"facebook\">\r\n                <img src=\"/assets/Images/icons/ico-pipe.png\" />\r\n              </a>\r\n            </li>\r\n            <li class=\"ico-line\">\r\n              <a href=\"#\" title=\"line\">\r\n                <img src=\"/assets/Images/icons/ico-download.png\" />\r\n              </a>\r\n            </li> -->\r\n            <li class=\"ico-yt\">\r\n              <a href=\"#\" title=\"youtube\">\r\n                <img src=\"/assets/Images/icons/ico-print.png\" />\r\n              </a>\r\n            </li>\r\n\r\n          </ul>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <p>เลขที่ผู้ถือหน่วยลงทุน</p>\r\n          <div class=\"select-wrapper inline-block\">\r\n            <select name=\"ddlLink\" id=\"ddlLink\">\r\n              <option value=\"0\" selected=\"\">9990244757</option>\r\n              <option value=\"36\">9990244757</option>\r\n              <option value=\"29\">9990244757</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-3\">\r\n          <p>ชื่อผู้ถือหน่วยลงทุน</p>\r\n          <span>เนติวัฒน์ โชติกร</span>\r\n        </div>\r\n\r\n        <div class=\"col-md-3\">\r\n          <p>วันที่ออกรายการ</p>\r\n          <span>7 มิถุนายน 2561</span>\r\n        </div>\r\n\r\n        <div class=\"col-md-12\">\r\n          <div class=\"table-responsive\">\r\n            <table class=\"table table-nav\">\r\n              <thead>\r\n                  <tr>\r\n                      <th>\r\n                        ช่องทาง\r\n                      </th>\r\n                      <th>\r\n                        วันและเวลา\r\n                        <br/>ที่ทำการ\r\n                      </th>\r\n                      <th>\r\n                        วันที่มีผล\r\n                      </th>\r\n                      <th>\r\n                        ประเภท\r\n                      </th>\r\n                      <th>\r\n                        รายการ\r\n                      </th>\r\n                      <th>\r\n                        บาท (THB)\r\n                      </th>\r\n                      <th>\r\n                        หน่วย (Unit)\r\n                      </th>\r\n                      <th>\r\n                        กองทุน\r\n                        <br/>ปลายทาง\r\n                      </th>\r\n                      <th>\r\n                        วันที่มีผล\r\n                      </th>\r\n\r\n                    </tr>\r\n              </thead>\r\n              <tbody>                            \r\n                <tr class=\"summary\">\r\n                  <th colspan=\"9\">\r\n                    กองทุนรวมหุ้นระยะยาว\r\n                  </th>\r\n                </tr>\r\n                <tr class=\"line\">\r\n                  <td colspan=\"9\">\r\n                    (KFLTFSTARD) กองทุนเปิดกรุงศรีหุ้นระยะยาวไทยออลสตาร์ปันผล\r\n                  </td>\r\n                  <!-- <td colspan=\"6\">&nbsp;</td> -->\r\n                </tr>\r\n                <tr>\r\n                  <td class=\"text-left\">\r\n                    NET\r\n                  </td>\r\n                  <td class=\"\">\r\n                    07/06/2561, 11:25\r\n                  </td>\r\n                  <td class=\"\">\r\n                    07/06/2561\r\n                  </td>\r\n                  <td>\r\n                    NOR\r\n                  </td>\r\n                  <td class=\"\">\r\n                    DE\r\n                  </td>\r\n                  <td class=\"txt-right\">\r\n                    20,000.00\r\n                  </td>\r\n                  <td class=\"txt-right\">\r\n                    -\r\n                  </td>\r\n                  <td class=\"txt-right\">\r\n                    &nbsp;\r\n                  </td>\r\n                  <td class=\"txt-right\">\r\n                    &nbsp;\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td class=\"text-left\">\r\n                    NET\r\n                  </td>\r\n                  <td class=\"\">\r\n                    07/06/2561, 11:25\r\n                  </td>\r\n                  <td class=\"\">\r\n                    07/06/2561\r\n                  </td>\r\n                  <td>\r\n                    NOR\r\n                  </td>\r\n                  <td class=\"\">\r\n                    DE\r\n                  </td>\r\n                  <td class=\"txt-right\">\r\n                    20,000.00\r\n                  </td>\r\n                  <td class=\"txt-right\">\r\n                    -\r\n                  </td>\r\n                  <td class=\"txt-right\">\r\n                    &nbsp;\r\n                  </td>\r\n                  <td class=\"txt-right\">\r\n                    &nbsp;\r\n                  </td>\r\n                </tr>\r\n                <tr class=\"line\">\r\n                  <td colspan=\"9\">\r\n                    (KFLTFSTARD) กองทุนเปิดกรุงศรีหุ้นระยะยาวไทยออลสตาร์ปันผล\r\n                  </td>\r\n                  <!-- <td colspan=\"6\">&nbsp;</td> -->\r\n                </tr>\r\n                <tr>\r\n                  <td class=\"text-left\">\r\n                    NET\r\n                  </td>\r\n                  <td class=\"\">\r\n                    07/06/2561, 11:25\r\n                  </td>\r\n                  <td class=\"\">\r\n                    07/06/2561\r\n                  </td>\r\n                  <td>\r\n                    NOR\r\n                  </td>\r\n                  <td class=\"\">\r\n                    DE\r\n                  </td>\r\n                  <td class=\"txt-right\">\r\n                    20,000.00\r\n                  </td>\r\n                  <td class=\"txt-right\">\r\n                    -\r\n                  </td>\r\n                  <td class=\"txt-right\">\r\n                    &nbsp;\r\n                  </td>\r\n                  <td class=\"txt-right\">\r\n                    &nbsp;\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td class=\"text-left\">\r\n                    NET\r\n                  </td>\r\n                  <td class=\"\">\r\n                    07/06/2561, 11:25\r\n                  </td>\r\n                  <td class=\"\">\r\n                    07/06/2561\r\n                  </td>\r\n                  <td>\r\n                    NOR\r\n                  </td>\r\n                  <td class=\"\">\r\n                    DE\r\n                  </td>\r\n                  <td class=\"txt-right\">\r\n                    20,000.00\r\n                  </td>\r\n                  <td class=\"txt-right\">\r\n                    -\r\n                  </td>\r\n                  <td class=\"txt-right\">\r\n                    &nbsp;\r\n                  </td>\r\n                  <td class=\"txt-right\">\r\n                    &nbsp;\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n\r\n\r\n\r\n        </div>\r\n        <div class=\"col-md-12 mb-5\">\r\n          <p class=\"color-red no-margin\">ข้อมูลที่แสดงข้างต้นนี้อาจมีการเปลี่ยนแปลงแก้ไขได้ หากเป็นรายการซื้อที่เรียกเก็บเงินไม่ได้ หรือรายการผิดพลาดใดๆ\r\n            ทั้งนี้การเปลี่ยนแปลงแก้ไขจะเป็นไปตามวิธี และข้อกำหนดที่ระบุไว้ในโครงการจัดการกองทุนที่ท่านลงทุนรายงานนี้แสดงรายการที่ท่านทำผ่านระบบ\r\n            @ccess ที่ยังไม่มีผลเท่านั้น</p>\r\n        </div>\r\n        <div class=\"col-md-12\">\r\n          <div class=\"row justify-content-center\">\r\n            <div class=\"col-md-2 col-xs-6 col-sm-4\">\r\n              <button class=\"btn-med btn-primary\">\r\n                พิมพ์\r\n                <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\r\n\r\n              </button>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- <div class=\"detail-footer-wrapper\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 text-left\">\r\n        <h4>คำย่อ</h4>\r\n      </div>\r\n      <div class=\"col-md-3 text-left\">\r\n        <p class=\"no-margin\">DE=ซื้อ</p>\r\n        <p class=\"no-margin\">NOR=รายการปกติ</p>\r\n      </div>\r\n      <div class=\"col-md-3 text-left\">\r\n        <p class=\"no-margin\">WI=ขายคืน</p>\r\n        <p class=\"no-margin\">ADV=รายการล่วงหน้า</p>\r\n      </div>\r\n      <div class=\"col-md-3 text-left\">\r\n        <p class=\"no-margin\">SW=สับเปลี่ยน</p>\r\n        <p class=\"no-margin\">REG=รายการประจำ</p>\r\n      </div>\r\n\r\n      <div class=\"col-md-12  mt-5 \">\r\n        <div class=\"row justify-content-center\">\r\n          <div class=\"col-md-2 col-xs-6 col-sm-4\">\r\n            <button class=\"btn-med btn-primary\" (click)=\"checkpage('signup1')\">\r\n              พิมพ์\r\n              <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\r\n\r\n            </button>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n\r\n  </div> -->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/report/not-available-list/not-available-list.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/report/not-available-list/not-available-list.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/report/not-available-list/not-available-list.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/report/not-available-list/not-available-list.component.ts ***!
  \***************************************************************************/
/*! exports provided: NotAvailableListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotAvailableListComponent", function() { return NotAvailableListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotAvailableListComponent = /** @class */ (function () {
    function NotAvailableListComponent() {
    }
    NotAvailableListComponent.prototype.ngOnInit = function () {
        $('#mutual-tab-menu').find('li').removeClass('current');
        $('#mutual-tab-menu').find('li#menu7').addClass('current');
    };
    NotAvailableListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-available-list',
            template: __webpack_require__(/*! ./not-available-list.component.html */ "./src/app/report/not-available-list/not-available-list.component.html"),
            styles: [__webpack_require__(/*! ./not-available-list.component.scss */ "./src/app/report/not-available-list/not-available-list.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NotAvailableListComponent);
    return NotAvailableListComponent;
}());



/***/ }),

/***/ "./src/app/report/past-events/past-events.component.html":
/*!***************************************************************!*\
  !*** ./src/app/report/past-events/past-events.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"fund-table-wrapper\">\r\n  <div class=\"heading-section\">\r\n    <div class=\"row\">\r\n      <div class=\"detail-head-wrapper\">\r\n        <div class=\"col-md-12 col-xs-12 icon-option mb-3\">\r\n\r\n          <ul class=\"\">\r\n            <!-- <li class=\"ico-fb\">\r\n              <a href=\"#\" title=\"facebook\">\r\n                <img src=\"/assets/Images/icons/ico-pipe.png\" />\r\n              </a>\r\n            </li>\r\n            <li class=\"ico-line\">\r\n              <a href=\"#\" title=\"line\">\r\n                <img src=\"/assets/Images/icons/ico-download.png\" />\r\n              </a>\r\n            </li> -->\r\n            <li class=\"ico-yt\">\r\n              <a href=\"#\" title=\"youtube\">\r\n                <img src=\"/assets/Images/icons/ico-print.png\" />\r\n              </a>\r\n            </li>\r\n\r\n          </ul>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n\r\n          <p>เลขที่ผู้ถือหน่วยลงทุน</p>\r\n          <div class=\"select-wrapper inline-block\">\r\n            <select name=\"ddlLink\" id=\"ddlLink\">\r\n              <option value=\"0\" selected=\"\">9990244757</option>\r\n              <option value=\"36\">9990244757</option>\r\n              <option value=\"29\">9990244757</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <p>ชื่อผู้ถือหน่วยลงทุน</p>\r\n          <span>เนติวัฒน์ โชติกร</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"detail-body-wrapper\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <p>กรุณาเลือกกองทุนและวันที่ต้องการดูรายการ</p>\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <span>กลุ่มกองทุน</span>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <div class=\"select-wrapper inline-block\">\r\n              <select name=\"ddlLink\" id=\"ddlLink\">\r\n                <option value=\"0\" selected=\"\">แสดงทุกกลุ่ม</option>\r\n                <option value=\"36\">KFCRASH - กองทุนกรุงศรีตราสารเงิน</option>\r\n                <option value=\"29\">KFCRASH - กองทุนกรุงศรีตราสารเงิน</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n\r\n          <div class=\"col-md-4\">\r\n            <span>กองทุน</span>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <div class=\"select-wrapper inline-block\">\r\n\r\n              <select name=\"ddlLink\" id=\"ddlLink\">\r\n                <option value=\"0\" selected=\"\">แสดงทุกกองทุน</option>\r\n                <option value=\"36\">KFCRASH - กองทุนกรุงศรีตราสารเงิน</option>\r\n                <option value=\"29\">KFCRASH - กองทุนกรุงศรีตราสารเงิน</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <span>จากวันที่</span>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <div class=\"input-wrapper\">\r\n              <input class=\"form-control textinput dateinput bg-gray\" id=\"startDate\" placeholder=\"วว/ดด/ปปปป\" name=\"date\" type=\"text\">\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <span>ถึงวันที่</span>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <div class=\"input-wrapper\">\r\n              <input class=\"form-control textinput dateinput bg-gray\" id=\"startDate\" placeholder=\"วว/ดด/ปปปป\" name=\"date\" type=\"text\">\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-md-3 col-xs-6 offset-md-4\">\r\n            <button class=\"btn-med btn-primary\">\r\n              ตกลง\r\n              <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\r\n\r\n            </button>\r\n          </div>\r\n          <div class=\"col-md-3 col-xs-6\">\r\n            <button class=\"btn-med btn-cancel\">\r\n              ยกเลิก\r\n              <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\r\n\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n  </div>\r\n  <div class=\"detail-footer-wrapper\">\r\n    <div class=\"table-responsive\">\r\n      <table class=\"table table-nav\">\r\n        <thead>\r\n          <tr>\r\n            <th rowspan=\"2\">\r\n              กองทุน / วันที่มีผล\r\n            </th>\r\n            <th rowspan=\"2\">\r\n              รายการ\r\n            </th>\r\n            <th rowspan=\"2\">\r\n              จำนวน (บาท)\r\n            </th>\r\n            <th rowspan=\"2\">\r\n              มูลค่า\r\n              <br/>ต่อหน่วย\r\n            </th>\r\n            <th rowspan=\"2\">\r\n              หน่วยเพิ่มขึ้น /\r\n              <br/>ลดลง\r\n            </th>\r\n            <th rowspan=\"2\">\r\n              หน่วยคงเหลือ\r\n            </th>\r\n            <th rowspan=\"2\">\r\n              มูลค่าการลงทุน\r\n              <br/>(บาท)\r\n            </th>\r\n            <th colspan=\"2\" class=\"last-th\">\r\n              หน่วยลงทุนรอการจัดสรร\r\n            </th>\r\n\r\n          </tr>\r\n          <tr>\r\n            <th>\r\n              (หน่วย)\r\n            </th>\r\n            <th>\r\n              (บาท)\r\n            </th>\r\n\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr class=\"summary\">\r\n            <th colspan=\"10\">\r\n              กองทุนรวมหุ้นระยะยาว\r\n            </th>\r\n          </tr>\r\n\r\n          <tr class=\"line\">\r\n            <td colspan=\"10\">\r\n              กองทุนที่เน้นตราสารเงิน (KFCASH)\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"text-left\">\r\n              07/06/2561\r\n            </td>\r\n            <td class=\"text-right\">\r\n              SUB\r\n            </td>\r\n            <td class=\"text-right\">\r\n              &nbsp;\r\n            </td>\r\n            <td class=\"text-right\">\r\n              11.4523\r\n            </td>\r\n            <td class=\"text-right\">\r\n              &nbsp;\r\n            </td>\r\n            <td class=\"txt-right\">\r\n              110.4523\r\n            </td>\r\n            <td class=\"txt-right\">\r\n              17,055.45\r\n            </td>\r\n            <td class=\"txt-right\">\r\n              &nbsp;\r\n            </td>\r\n            <td class=\"txt-right\">\r\n              &nbsp;\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"text-left\">\r\n              07/06/2561\r\n            </td>\r\n            <td class=\"text-right\">\r\n              SUB\r\n            </td>\r\n            <td class=\"text-right\">\r\n              &nbsp;\r\n            </td>\r\n            <td class=\"text-right\">\r\n              11.4523\r\n            </td>\r\n            <td class=\"text-right\">\r\n              &nbsp;\r\n            </td>\r\n            <td class=\"txt-right\">\r\n              110.4523\r\n            </td>\r\n            <td class=\"txt-right\">\r\n              17,055.45\r\n            </td>\r\n            <td class=\"txt-right\">\r\n              &nbsp;\r\n            </td>\r\n            <td class=\"txt-right\">\r\n              &nbsp;\r\n            </td>\r\n          </tr>\r\n          <tr class=\"summary\">\r\n            <th colspan=\"4\">\r\n              รวม : (กองทุนรวมหุ้นระยะยาว) การลงทุน (บาท) ณ วันที่ 24/07/2561\r\n            </th>\r\n            <th class=\"text-right\">\r\n              &nbsp;\r\n            </th>\r\n            <th class=\"text-right\">\r\n              &nbsp;\r\n            </th>\r\n            <th class=\"text-right\">\r\n              34,110.90\r\n            </th>\r\n            <th class=\"text-right\">\r\n              &nbsp;\r\n            </th>\r\n            <th class=\"text-right\">\r\n              &nbsp;\r\n            </th>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n    <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n        <p class=\"color-red no-margin\">*มูลค่ารอการจัดสรรนี้รวมอยู่ในมูลค่าการลงทุนแล้ว</p>\r\n        <p class=\"color-red no-margin\">ข้อมูลที่แสดงข้างต้นอาจมีการเปลี่ยนแปลงแก้ไขได้ หากเป็นรายการซื้อที่เรียกเก็บเงินไม่ได้ หรือ รายการผิดพลาดใดๆ ทั้งนี้การเปลี่ยนแปลงแก้ไขจะเป็นไปตามวิธีและข้อกำหนดที่ระบุไว้ในโครงการ</p>\r\n        <p class=\"color-red no-margin\">การจัดการกองทุนที่ท่านลงทุน</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/report/past-events/past-events.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/report/past-events/past-events.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/report/past-events/past-events.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/report/past-events/past-events.component.ts ***!
  \*************************************************************/
/*! exports provided: PastEventsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PastEventsComponent", function() { return PastEventsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PastEventsComponent = /** @class */ (function () {
    function PastEventsComponent() {
    }
    PastEventsComponent.prototype.ngOnInit = function () {
        $('#mutual-tab-menu').find('li').removeClass('current');
        $('#mutual-tab-menu').find('li#menu4').addClass('current');
    };
    PastEventsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-past-events',
            template: __webpack_require__(/*! ./past-events.component.html */ "./src/app/report/past-events/past-events.component.html"),
            styles: [__webpack_require__(/*! ./past-events.component.scss */ "./src/app/report/past-events/past-events.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PastEventsComponent);
    return PastEventsComponent;
}());



/***/ }),

/***/ "./src/app/report/receipt-history/receipt-history.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/report/receipt-history/receipt-history.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"fund-table-wrapper\">\r\n  <div class=\"heading-section\">\r\n    <div class=\"row\">\r\n      <div class=\"detail-head-wrapper\">\r\n        <div class=\"col-md-12 col-xs-12 icon-option mb-3\">\r\n\r\n          <ul class=\"\">\r\n            <!-- <li class=\"ico-fb\">\r\n              <a href=\"#\" title=\"facebook\">\r\n                <img src=\"/assets/Images/icons/ico-pipe.png\" />\r\n              </a>\r\n            </li>\r\n            <li class=\"ico-line\">\r\n              <a href=\"#\" title=\"line\">\r\n                <img src=\"/assets/Images/icons/ico-download.png\" />\r\n              </a>\r\n            </li> -->\r\n            <li class=\"ico-yt\">\r\n              <a href=\"#\" title=\"youtube\">\r\n                <img src=\"/assets/Images/icons/ico-print.png\" />\r\n              </a>\r\n            </li>\r\n\r\n          </ul>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <p>เลขที่ผู้ถือหน่วยลงทุน</p>\r\n          <div class=\"select-wrapper inline-block\">\r\n            <select name=\"ddlLink\" id=\"ddlLink\">\r\n              <option value=\"0\" selected=\"\">9990244757</option>\r\n              <option value=\"36\">9990244757</option>\r\n              <option value=\"29\">9990244757</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <p>ชื่อผู้ถือหน่วยลงทุน</p>\r\n          <span>เนติวัฒน์ โชติกร</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"detail-body-wrapper\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <p>กรุณาเลือกกองทุนที่ทำรายการ</p>\r\n      </div>\r\n      <div class=\"col-md-3\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-2\">\r\n            <span>ปี</span>\r\n          </div>\r\n          <div class=\"col-md-10\">\r\n            <div class=\"select-wrapper inline-block\">\r\n              <select name=\"ddlLink\" id=\"ddlLink\">\r\n                <option value=\"0\" selected=\"\">ทุกปี</option>\r\n                <option value=\"36\">ทุกปี</option>\r\n                <option value=\"29\">ทุกปี</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-md-9\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <span>กองทุน: วันจ่ายเงินปันผลเพื่อพิมพ์หนังสือรับรองฯ</span>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <div class=\"select-wrapper inline-block\">\r\n              <select name=\"ddlLink\" id=\"ddlLink\">\r\n                <option value=\"0\" selected=\"\">ทุกกองทุน</option>\r\n                <option value=\"36\">ทุกปี</option>\r\n                <option value=\"29\">ทุกปี</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-md-4\">\r\n            <button class=\"btn-med btn-primary width50\">\r\n              ตกลง\r\n              <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n  </div>\r\n  <div class=\"detail-footer-wrapper\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 mb-3\">\r\n        <div class=\"sidenav-left\">\r\n          <div class=\"vertical-menu-wrapper\">\r\n            <h4>\r\n              เงินปันผล และหนังสือรับรองฯ\r\n            </h4>\r\n            <ul>\r\n              <li>\r\n                <div class=\"row mt-3\">\r\n                  <div class=\"col-md-10 col-xs-9\">\r\n                    <a href=\"#\" title=\"ชื่อเมนู\">\r\n                      หนังสือรับรองฯ KFHEALTH-D 21/03/2557\r\n                    </a>\r\n                  </div>\r\n                  <div class=\"col-md-2 col-xs-3\">\r\n                    <button class=\"btn-sm btn-download width50 \">\r\n                      <p>Download</p>\r\n                      <img src=\"/assets/Images/icons/ico-download-white.png\">\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </li>\r\n\r\n            </ul>\r\n            <div class=\"clearfix\"></div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"table-responsive\">\r\n      <table class=\"table table-nav\">\r\n        <thead>\r\n            <tr>\r\n                <th>\r\n                  วันที่ XD\r\n                </th>\r\n                <th>\r\n                  เงินปันผล/\r\n                  <br/>หน่วย\r\n                </th>\r\n                <th>\r\n                  หน่วย\r\n                </th>\r\n                <th>\r\n                  มูลค่าเงินปันผล\r\n                </th>\r\n                <th>\r\n                  ภาษีหัก\r\n                  <br/>ณ ที่จ่าย\r\n                </th>\r\n                <th>\r\n                  มูลค่าที่หักภาษี\r\n                </th>\r\n                <th>\r\n                  เงินปันผลรับสุทธิ\r\n                </th>\r\n                <th>\r\n                  วันจ่ายเงินปันผล\r\n                </th>\r\n              </tr>\r\n        </thead>\r\n        <tbody>                      \r\n          <tr class=\"line\">\r\n            <td colspan=\"8\">\r\n              KFHEALTH-D กองทุนเปิดกรุงศรีโกลบอลเฮลธ์แคร์อิควิตี้ปันผล\r\n            </td>\r\n            <!-- <td colspan=\"6\">&nbsp;</td> -->\r\n          </tr>\r\n          <tr>\r\n            <td class=\"text-left\">\r\n              04/03/2557\r\n            </td>\r\n            <td class=\"\">\r\n              1.0000\r\n            </td>\r\n            <td class=\"\">\r\n              336,452.8539\r\n            </td>\r\n            <td class=\"txt-right\">\r\n              336,452.85\r\n            </td>\r\n            <td class=\"txt-right\">\r\n              หัก\r\n            </td>\r\n            <td class=\"txt-right\">\r\n              336,452.85\r\n            </td>\r\n            <td class=\"txt-right\">\r\n              336,452.85\r\n            </td>\r\n            <td class=\"txt-right\">\r\n              15/03/2557\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"text-left\">\r\n              04/03/2557\r\n            </td>\r\n            <td class=\"\">\r\n              1.0000\r\n            </td>\r\n            <td class=\"\">\r\n              336,452.8539\r\n            </td>\r\n            <td class=\"txt-right\">\r\n              336,452.85\r\n            </td>\r\n            <td class=\"txt-right\">\r\n              หัก\r\n            </td>\r\n            <td class=\"txt-right\">\r\n              336,452.85\r\n            </td>\r\n            <td class=\"txt-right\">\r\n              336,452.85\r\n            </td>\r\n            <td class=\"txt-right\">\r\n              15/03/2557\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"text-left\">\r\n              04/03/2557\r\n            </td>\r\n            <td class=\"\">\r\n              1.0000\r\n            </td>\r\n            <td class=\"\">\r\n              336,452.8539\r\n            </td>\r\n            <td class=\"txt-right\">\r\n              336,452.85\r\n            </td>\r\n            <td class=\"txt-right\">\r\n              หัก\r\n            </td>\r\n            <td class=\"txt-right\">\r\n              336,452.85\r\n            </td>\r\n            <td class=\"txt-right\">\r\n              336,452.85\r\n            </td>\r\n            <td class=\"txt-right\">\r\n              15/03/2557\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"text-left\">\r\n              04/03/2557\r\n            </td>\r\n            <td class=\"\">\r\n              1.0000\r\n            </td>\r\n            <td class=\"\">\r\n              336,452.8539\r\n            </td>\r\n            <td class=\"txt-right\">\r\n              336,452.85\r\n            </td>\r\n            <td class=\"txt-right\">\r\n              หัก\r\n            </td>\r\n            <td class=\"txt-right\">\r\n              336,452.85\r\n            </td>\r\n            <td class=\"txt-right\">\r\n              336,452.85\r\n            </td>\r\n            <td class=\"txt-right\">\r\n              15/03/2557\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"text-left\">\r\n              04/03/2557\r\n            </td>\r\n            <td class=\"\">\r\n              1.0000\r\n            </td>\r\n            <td class=\"\">\r\n              336,452.8539\r\n            </td>\r\n            <td class=\"txt-right\">\r\n              336,452.85\r\n            </td>\r\n            <td class=\"txt-right\">\r\n              หัก\r\n            </td>\r\n            <td class=\"txt-right\">\r\n              336,452.85\r\n            </td>\r\n            <td class=\"txt-right\">\r\n              336,452.85\r\n            </td>\r\n            <td class=\"txt-right\">\r\n              15/03/2557\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"text-left\">\r\n              04/03/2557\r\n            </td>\r\n            <td class=\"\">\r\n              1.0000\r\n            </td>\r\n            <td class=\"\">\r\n              336,452.8539\r\n            </td>\r\n            <td class=\"txt-right\">\r\n              336,452.85\r\n            </td>\r\n            <td class=\"txt-right\">\r\n              หัก\r\n            </td>\r\n            <td class=\"txt-right\">\r\n              336,452.85\r\n            </td>\r\n            <td class=\"txt-right\">\r\n              336,452.85\r\n            </td>\r\n            <td class=\"txt-right\">\r\n              15/03/2557\r\n            </td>\r\n          </tr>\r\n          <tr class=\"summary\">\r\n            <th colspan=\"3\">\r\n              รวม : KFHEALTH-D\r\n            </th>\r\n            <th class=\"text-right\">\r\n              689,748.84\r\n            </th>\r\n            <th class=\"text-right\">\r\n              &nbsp;\r\n            </th>\r\n            <th class=\"text-right\">\r\n              689,748.84\r\n            </th>\r\n            <th class=\"text-right\">\r\n              689,748.84\r\n            </th>\r\n            <th class=\"text-right\">\r\n              &nbsp;\r\n            </th>\r\n          </tr>\r\n\r\n\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/report/receipt-history/receipt-history.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/report/receipt-history/receipt-history.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/report/receipt-history/receipt-history.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/report/receipt-history/receipt-history.component.ts ***!
  \*********************************************************************/
/*! exports provided: ReceiptHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReceiptHistoryComponent", function() { return ReceiptHistoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ReceiptHistoryComponent = /** @class */ (function () {
    function ReceiptHistoryComponent() {
    }
    ReceiptHistoryComponent.prototype.ngOnInit = function () {
        $('#mutual-tab-menu').find('li').removeClass('current');
        $('#mutual-tab-menu').find('li#menu3').addClass('current');
    };
    ReceiptHistoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-receipt-history',
            template: __webpack_require__(/*! ./receipt-history.component.html */ "./src/app/report/receipt-history/receipt-history.component.html"),
            styles: [__webpack_require__(/*! ./receipt-history.component.scss */ "./src/app/report/receipt-history/receipt-history.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ReceiptHistoryComponent);
    return ReceiptHistoryComponent;
}());



/***/ }),

/***/ "./src/app/report/report.component.html":
/*!**********************************************!*\
  !*** ./src/app/report/report.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"\" id=\"maincontainer-wrapper\">\r\n  <div class=\"page-content-wrapper\">\r\n    <div class=\"mutual-fund-wrapper\">\r\n      <div class=\"max-width-wrapper\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n            <div class=\"tabs-menu-wrapper\">\r\n              <div class=\"dropdown dropdown-content\">\r\n                <button class=\"btn-med btn-primary dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">\r\n                  เมนูกองทุน\r\n                </button>\r\n                <ul class=\"dropdown-menu\">\r\n                  <li>\r\n                    <a (click)=\"navigate('receipt-history')\" title=\"ประวัติการรับเงินปันผล\">ประวัติการรับเงินปันผล</a>\r\n                  </li>\r\n                  <li>\r\n                    <a (click)=\"navigate('past-events')\" title=\"รายการเคลื่อนไหวที่ผ่านมา\">รายการเคลื่อนไหวที่ผ่านมา</a>\r\n                  </li>\r\n                  <!-- <li>\r\n                    <a (click)=\"navigate('summary')\" title=\"สรุปกำไร/ขาดทุน\">สรุปกำไร/ขาดทุน</a>\r\n                  </li> -->\r\n                  <li>\r\n                    <a (click)=\"navigate('today-list')\" title=\"รายการวันนี้\">รายการวันนี้</a>\r\n                  </li>\r\n                  <li>\r\n                    <a (click)=\"navigate('not-available-list')\" title=\"รายการที่ยังไม่มีผล\">รายการที่ยังไม่มีผล</a>\r\n                  </li>\r\n                  <li>\r\n                    <a (click)=\"navigate('confirmation')\" title=\"ใบยืนยันการทำรายการ\">ใบยืนยันการทำรายการ</a>\r\n                  </li>\r\n                  <li>\r\n                    <a (click)=\"navigate('type')\" title=\"ประเภทรายการ\">ประเภทรายการ</a>\r\n                  </li>\r\n                </ul>\r\n                <div class=\"clearfix\"></div>\r\n              </div>\r\n              <ul class=\"nav nav-tabs\" role=\"tablist\" id=\"mutual-tab-menu\">\r\n                <li role=\"presentation\" id=\"menu3\">\r\n                  <a title=\"ประวัติการรับเงินปันผล\" (click)=\"navigate('receipt-history')\">ประวัติการรับเงินปันผล</a>\r\n                </li>\r\n                <li role=\"presentation\" id=\"menu4\">\r\n                  <a title=\"รายการเคลื่อนไหวที่ผ่านมา\" (click)=\"navigate('past-events')\">รายการเคลื่อนไหวที่ผ่านมา</a>\r\n                </li>\r\n                <!-- <li role=\"presentation\" id=\"menu5\">\r\n                  <a title=\"สรุปกำไร/ขาดทุน\" (click)=\"navigate('summary')\">สรุปกำไร/ขาดทุน</a>\r\n                </li> -->\r\n                <li role=\"presentation\" id=\"menu6\">\r\n                  <a title=\"รายการวันนี้\" (click)=\"navigate('today-list')\">รายการวันนี้</a>\r\n                </li>\r\n                <li role=\"presentation\" id=\"menu7\">\r\n                  <a title=\"รายการที่ยังไม่มีผล\" (click)=\"navigate('not-available-list')\">รายการที่ยังไม่มีผล</a>\r\n                </li>\r\n                <li role=\"presentation\" id=\"menu8\">\r\n                  <a title=\"ใบยืนยันการทำรายการ\" (click)=\"navigate('confirmation')\">ใบยืนยันการทำรายการ</a>\r\n                </li>\r\n                <li role=\"presentation\" id=\"menu9\">\r\n                  <a title=\"ประเภทรายการ\" (click)=\"navigate('type')\">ประเภทรายการ</a>\r\n                </li>\r\n\r\n              </ul>\r\n            </div>\r\n\r\n            <router-outlet></router-outlet>\r\n\r\n            \r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n  <app-footer></app-footer>"

/***/ }),

/***/ "./src/app/report/report.component.scss":
/*!**********************************************!*\
  !*** ./src/app/report/report.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/report/report.component.ts":
/*!********************************************!*\
  !*** ./src/app/report/report.component.ts ***!
  \********************************************/
/*! exports provided: ReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportComponent", function() { return ReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReportComponent = /** @class */ (function () {
    function ReportComponent(route, router) {
        this.route = route;
        this.router = router;
    }
    ReportComponent.prototype.ngOnInit = function () {
        $('#bottom-main-nav li').find('a').removeClass('current');
        $('#bottom-main-nav li#report').find('a').addClass('current');
    };
    ReportComponent.prototype.navigate = function (target) {
        var target = target;
        console.log(target);
        this.router.navigate([target], { relativeTo: this.route });
    };
    ReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-report',
            template: __webpack_require__(/*! ./report.component.html */ "./src/app/report/report.component.html"),
            styles: [__webpack_require__(/*! ./report.component.scss */ "./src/app/report/report.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ReportComponent);
    return ReportComponent;
}());



/***/ }),

/***/ "./src/app/report/summary/summary.component.html":
/*!*******************************************************!*\
  !*** ./src/app/report/summary/summary.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"fund-table-wrapper\">\r\n  <div class=\"heading-section\">\r\n    <div class=\"row\">\r\n      <div class=\"detail-head-wrapper\">\r\n        <div class=\"col-md-12 col-xs-12 icon-option mb-3\">\r\n\r\n          <ul class=\"\">\r\n            <!-- <li class=\"ico-fb\">\r\n              <a href=\"#\" title=\"facebook\">\r\n                <img src=\"/assets/Images/icons/ico-pipe.png\" />\r\n              </a>\r\n            </li>\r\n            <li class=\"ico-line\">\r\n              <a href=\"#\" title=\"line\">\r\n                <img src=\"/assets/Images/icons/ico-download.png\" />\r\n              </a>\r\n            </li> -->\r\n            <li class=\"ico-yt\">\r\n              <a href=\"#\" title=\"youtube\">\r\n                <img src=\"/assets/Images/icons/ico-print.png\" />\r\n              </a>\r\n            </li>\r\n\r\n          </ul>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <p>เลขที่ผู้ถือหน่วยลงทุน</p>\r\n          <div class=\"select-wrapper inline-block\">\r\n            <select name=\"ddlLink\" id=\"ddlLink\">\r\n              <option value=\"0\" selected=\"\">9990244757</option>\r\n              <option value=\"36\">9990244757</option>\r\n              <option value=\"29\">9990244757</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-3\">\r\n          <p>ชื่อผู้ถือหน่วยลงทุน</p>\r\n          <span>เนติวัฒน์ โชติกร</span>\r\n        </div>\r\n\r\n        <div class=\"col-md-3\">\r\n          <p>วันที่ออกรายการ</p>\r\n          <span>7 มิถุนายน 2561</span>\r\n        </div>\r\n\r\n        <div class=\"col-md-12\">\r\n          <div class=\"table-responsive\">\r\n            <table class=\"table table-nav\">\r\n              <thead>\r\n                  <tr>\r\n                      <th>\r\n                        กองทุน\r\n                      </th>\r\n                      <th>\r\n                        หน่วยคงเหลือ\r\n                      </th>\r\n                      <th>\r\n                        ราคาเฉลี่ย\r\n                      </th>\r\n                      <th>\r\n                        มูลค่าต้นทุน\r\n                      </th>\r\n                      <th>\r\n                        จำนวน\r\n                        <br/>รอการจัดสรร\r\n                      </th>\r\n                      <th>\r\n                        NAV ปัจจุบัน\r\n                      </th>\r\n                      <th>\r\n                        มูลค่าปัจจุบัน\r\n                      </th>\r\n                      <th>\r\n                        กำไร/ขาดทุน\r\n                        <br/>สะสม*\r\n                      </th>\r\n                      <th>\r\n                        ร้อยละ (%)\r\n                      </th>\r\n\r\n                    </tr>\r\n              </thead>\r\n              <tbody>                            \r\n                <tr class=\"line\">\r\n                  <td colspan=\"9\">\r\n                    กองทุนที่เน้นตราสารเงิน/ตราสารหนี้\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td class=\"text-left\">\r\n                    KFCRASHPLUS\r\n                  </td>\r\n                  <td class=\"text-right\">\r\n                    6.2456\r\n                  </td>\r\n                  <td class=\"text-right\">\r\n                    11.8839\r\n                  </td>\r\n                  <td class=\"text-right\">\r\n                    74.22\r\n                  </td>\r\n                  <td class=\"text-right\">\r\n                    0.00\r\n                  </td>\r\n                  <td class=\"txt-right\">\r\n                    11.9968\r\n                  </td>\r\n                  <td class=\"txt-right\">\r\n                    74.93\r\n                  </td>\r\n                  <td class=\"txt-right\">\r\n                    0.71\r\n                  </td>\r\n                  <td class=\"txt-right\">\r\n                    0.95\r\n                  </td>\r\n                </tr>\r\n                <tr class=\"summary\">\r\n                  <th colspan=\"3\">\r\n                    รวม : กองทุนที่เน้นลงทุนในตราสารเงิน/ตราสารหนี้\r\n                  </th>\r\n                  <th class=\"text-right\">\r\n                    74.22\r\n                  </th>\r\n                  <th class=\"text-right\">\r\n                    0.00\r\n                  </th>\r\n                  <th class=\"text-right\">\r\n                    11.9968\r\n                  </th>\r\n                  <th class=\"text-right\">\r\n                    74.93\r\n                  </th>\r\n                  <th class=\"text-right\">\r\n                    0.71\r\n                  </th>\r\n                  <th class=\"text-right\">\r\n                    0.95\r\n                  </th>\r\n                </tr>\r\n                <tr class=\"line\">\r\n                  <td colspan=\"9\">\r\n                    กองทุนที่เน้นตราสารเงิน/ตราสารหนี้\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td class=\"text-left\">\r\n                    KFCRASHPLUS\r\n                  </td>\r\n                  <td class=\"text-right\">\r\n                    6.2456\r\n                  </td>\r\n                  <td class=\"text-right\">\r\n                    11.8839\r\n                  </td>\r\n                  <td class=\"text-right\">\r\n                    74.22\r\n                  </td>\r\n                  <td class=\"text-right\">\r\n                    0.00\r\n                  </td>\r\n                  <td class=\"txt-right\">\r\n                    11.9968\r\n                  </td>\r\n                  <td class=\"txt-right\">\r\n                    74.93\r\n                  </td>\r\n                  <td class=\"txt-right\">\r\n                    0.71\r\n                  </td>\r\n                  <td class=\"txt-right\">\r\n                    0.95\r\n                  </td>\r\n                </tr>\r\n                <tr class=\"summary\">\r\n                  <th colspan=\"3\">\r\n                    รวม : กองทุนที่เน้นลงทุนในตราสารเงิน/ตราสารหนี้\r\n                  </th>\r\n                  <th class=\"text-right\">\r\n                    74.22\r\n                  </th>\r\n                  <th class=\"text-right\">\r\n                    0.00\r\n                  </th>\r\n                  <th class=\"text-right\">\r\n                    11.9968\r\n                  </th>\r\n                  <th class=\"text-right\">\r\n                    74.93\r\n                  </th>\r\n                  <th class=\"text-right\">\r\n                    0.71\r\n                  </th>\r\n                  <th class=\"text-right\">\r\n                    0.95\r\n                  </th>\r\n                </tr>\r\n                <tr class=\"summary\">\r\n                  <th colspan=\"3\" class=\"custom-label text-left\">\r\n                    รวม\r\n                  </th>\r\n                  <th class=\"custom-label\">\r\n                    148.44\r\n                  </th>\r\n                  <th class=\"custom-label\">\r\n                    0.00\r\n                  </th>\r\n                  <th class=\"custom-label\">\r\n                    22.9936\r\n                  </th>\r\n                  <th class=\"custom-label\">\r\n                    148.44\r\n                  </th>\r\n                  <th class=\"custom-label\">\r\n                    1.42\r\n                  </th>\r\n                  <th class=\"custom-label\">\r\n                    1.9\r\n                  </th>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n\r\n\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"detail-footer-wrapper\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <p class=\"color-red no-margin\">ราคาต้นทุนเฉลี่ยของกองทุน RMF และ LTF คำนวนตามคู่มือภาษีที่จัดตามประกาศสำนักงานคณะกรรมการกำกับหลักทรัพย์และตลาดหลักทรัพย์</p>\r\n        <p class=\"color-red no-margin\">*ไม่รวมเงินปันผล</p>\r\n      </div>\r\n\r\n      <div class=\"col-md-12  mt-5 \">\r\n        <div class=\"row justify-content-center\">\r\n          <div class=\"col-md-2 col-xs-6 col-sm-4\">\r\n            <button class=\"btn-med btn-primary\">\r\n              พิมพ์\r\n              <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\r\n            </button>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/report/summary/summary.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/report/summary/summary.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/report/summary/summary.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/report/summary/summary.component.ts ***!
  \*****************************************************/
/*! exports provided: SummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryComponent", function() { return SummaryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SummaryComponent = /** @class */ (function () {
    function SummaryComponent() {
    }
    SummaryComponent.prototype.ngOnInit = function () {
        $('#mutual-tab-menu').find('li').removeClass('current');
        $('#mutual-tab-menu').find('li#menu5').addClass('current');
    };
    SummaryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-summary',
            template: __webpack_require__(/*! ./summary.component.html */ "./src/app/report/summary/summary.component.html"),
            styles: [__webpack_require__(/*! ./summary.component.scss */ "./src/app/report/summary/summary.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SummaryComponent);
    return SummaryComponent;
}());



/***/ }),

/***/ "./src/app/report/today-list/today-list.component.html":
/*!*************************************************************!*\
  !*** ./src/app/report/today-list/today-list.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"fund-table-wrapper\">\r\n  <div class=\"heading-section\">\r\n    <div class=\"row\">\r\n      <div class=\"detail-head-wrapper\">\r\n        <div class=\"col-md-12 col-xs-12 icon-option mb-3\">\r\n\r\n          <ul class=\"\">\r\n            <!-- <li class=\"ico-fb\">\r\n              <a href=\"#\" title=\"facebook\">\r\n                <img src=\"/assets/Images/icons/ico-pipe.png\" />\r\n              </a>\r\n            </li>\r\n            <li class=\"ico-line\">\r\n              <a href=\"#\" title=\"line\">\r\n                <img src=\"/assets/Images/icons/ico-download.png\" />\r\n              </a>\r\n            </li> -->\r\n            <li class=\"ico-yt\">\r\n              <a href=\"#\" title=\"youtube\">\r\n                <img src=\"/assets/Images/icons/ico-print.png\" />\r\n              </a>\r\n            </li>\r\n\r\n          </ul>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <p>เลขที่ผู้ถือหน่วยลงทุน</p>\r\n          <div class=\"select-wrapper inline-block\">\r\n            <select name=\"ddlLink\" id=\"ddlLink\">\r\n              <option value=\"0\" selected=\"\">9990244757</option>\r\n              <option value=\"36\">9990244757</option>\r\n              <option value=\"29\">9990244757</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-3\">\r\n          <p>ชื่อผู้ถือหน่วยลงทุน</p>\r\n          <span>เนติวัฒน์ โชติกร</span>\r\n        </div>\r\n\r\n        <div class=\"col-md-3\">\r\n          <p>วันที่ออกรายการ</p>\r\n          <span>7 มิถุนายน 2561</span>\r\n        </div>\r\n\r\n        <div class=\"col-md-12\">\r\n          <div class=\"table-responsive\">\r\n            <table class=\"table table-nav\">\r\n              <thead>\r\n                  <tr>\r\n                      <th>\r\n                        ช่องทาง\r\n                      </th>\r\n                      <th>\r\n                        วันและเวลา\r\n                        <br/>ที่ทำการ\r\n                      </th>\r\n                      <th>\r\n                        วันที่มีผล\r\n                      </th>\r\n                      <th>\r\n                        ประเภท\r\n                      </th>\r\n                      <th>\r\n                        รายการ\r\n                      </th>\r\n                      <th>\r\n                        บาท (THB)\r\n                      </th>\r\n                      <th>\r\n                        หน่วย (Unit)\r\n                      </th>\r\n                      <th>\r\n                        กองทุน\r\n                        <br/>ปลายทาง\r\n                      </th>\r\n                      <th>\r\n                        วันที่มีผล\r\n                      </th>\r\n                      <th>\r\n                        แก้ไข\r\n                      </th>\r\n                      <th>\r\n                        ยกเลิก\r\n                      </th>\r\n\r\n                    </tr>\r\n              </thead>\r\n              <tbody>                           \r\n                <tr class=\"summary\">\r\n                  <th colspan=\"11\">\r\n                    กองทุนรวมหุ้นระยะยาว\r\n                  </th>\r\n                </tr>\r\n                <tr class=\"line\">\r\n                  <td colspan=\"11\">\r\n                    (KFLTFSTARD) กองทุนเปิดกรุงศรีหุ้นระยะยาวไทยออลสตาร์ปันผล\r\n                  </td>\r\n                  <!-- <td colspan=\"6\">&nbsp;</td> -->\r\n                </tr>\r\n                <tr>\r\n                  <td class=\"text-left\">\r\n                    NET\r\n                  </td>\r\n                  <td class=\"\">\r\n                    07/06/2561, 11:25\r\n                  </td>\r\n                  <td class=\"\">\r\n                    07/06/2561\r\n                  </td>\r\n                  <td>\r\n                    NOR\r\n                  </td>\r\n                  <td class=\"\">\r\n                    DE\r\n                  </td>\r\n                  <td class=\"txt-right\">\r\n                    20,000.00\r\n                  </td>\r\n                  <td class=\"txt-right\">\r\n                    -\r\n                  </td>\r\n                  <td class=\"txt-right\">\r\n                    &nbsp;\r\n                  </td>\r\n                  <td class=\"txt-right\">\r\n                    &nbsp;\r\n                  </td>\r\n                  <td>\r\n                    <a>\r\n                      <img src=\"/assets/Images/icons/ico-edit.png\">\r\n                    </a>\r\n                  </td>\r\n                  <td>\r\n                    <a>\r\n                      <img src=\"/assets/Images/icons/ico-delete.png\" alt=\"\" data-toggle=\"modal\" data-target=\"#disclaimer\">\r\n                    </a>\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td class=\"text-left\">\r\n                    NET\r\n                  </td>\r\n                  <td class=\"\">\r\n                    07/06/2561, 11:25\r\n                  </td>\r\n                  <td class=\"\">\r\n                    07/06/2561\r\n                  </td>\r\n                  <td>\r\n                    NOR\r\n                  </td>\r\n                  <td class=\"\">\r\n                    DE\r\n                  </td>\r\n                  <td class=\"txt-right\">\r\n                    20,000.00\r\n                  </td>\r\n                  <td class=\"txt-right\">\r\n                    -\r\n                  </td>\r\n                  <td class=\"txt-right\">\r\n                    &nbsp;\r\n                  </td>\r\n                  <td class=\"txt-right\">\r\n                    &nbsp;\r\n                  </td>\r\n                  <td>\r\n                    <a>\r\n                      <img src=\"/assets/Images/icons/ico-edit.png\">\r\n                    </a>\r\n                  </td>\r\n                  <td>\r\n                    <a>\r\n                      <img src=\"/assets/Images/icons/ico-delete.png\" alt=\"\" data-toggle=\"modal\" data-target=\"#disclaimer\">\r\n                    </a>\r\n                  </td>\r\n                </tr>\r\n                <tr class=\"line\">\r\n                  <td colspan=\"11\">\r\n                    (KFLTFSTARD) กองทุนเปิดกรุงศรีหุ้นระยะยาวไทยออลสตาร์ปันผล\r\n                  </td>\r\n                  <!-- <td colspan=\"6\">&nbsp;</td> -->\r\n                </tr>\r\n                <tr>\r\n                  <td class=\"text-left\">\r\n                    NET\r\n                  </td>\r\n                  <td class=\"\">\r\n                    07/06/2561, 11:25\r\n                  </td>\r\n                  <td class=\"\">\r\n                    07/06/2561\r\n                  </td>\r\n                  <td>\r\n                    NOR\r\n                  </td>\r\n                  <td class=\"\">\r\n                    DE\r\n                  </td>\r\n                  <td class=\"txt-right\">\r\n                    20,000.00\r\n                  </td>\r\n                  <td class=\"txt-right\">\r\n                    -\r\n                  </td>\r\n                  <td class=\"txt-right\">\r\n                    &nbsp;\r\n                  </td>\r\n                  <td class=\"txt-right\">\r\n                    &nbsp;\r\n                  </td>\r\n                  <td>\r\n                    <a>\r\n                      <img src=\"/assets/Images/icons/ico-edit.png\">\r\n                    </a>\r\n                  </td>\r\n                  <td>\r\n                    <a>\r\n                      <img src=\"/assets/Images/icons/ico-delete.png\" alt=\"\" data-toggle=\"modal\" data-target=\"#disclaimer\">\r\n                    </a>\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td class=\"text-left\">\r\n                    NET\r\n                  </td>\r\n                  <td class=\"\">\r\n                    07/06/2561, 11:25\r\n                  </td>\r\n                  <td class=\"\">\r\n                    07/06/2561\r\n                  </td>\r\n                  <td>\r\n                    NOR\r\n                  </td>\r\n                  <td class=\"\">\r\n                    DE\r\n                  </td>\r\n                  <td class=\"txt-right\">\r\n                    20,000.00\r\n                  </td>\r\n                  <td class=\"txt-right\">\r\n                    -\r\n                  </td>\r\n                  <td class=\"txt-right\">\r\n                    &nbsp;\r\n                  </td>\r\n                  <td class=\"txt-right\">\r\n                    &nbsp;\r\n                  </td>\r\n                  <td>\r\n                    <a>\r\n                      <img src=\"/assets/Images/icons/ico-edit.png\">\r\n                    </a>\r\n                  </td>\r\n                  <td>\r\n                    <a>\r\n                      <img src=\"/assets/Images/icons/ico-delete.png\" alt=\"\" data-toggle=\"modal\" data-target=\"#disclaimer\">\r\n                    </a>\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n\r\n\r\n\r\n        </div>\r\n        <div class=\"col-md-12 mb-5\">\r\n          <p class=\"color-red no-margin\">ข้อมูลที่แสดงข้างต้นนี้อาจมีการเปลี่ยนแปลงแก้ไขได้ หากเป็นรายการซื้อที่เรียกเก็บเงินไม่ได้ หรือรายการผิดพลาดใดๆ\r\n            ทั้งนี้การเปลี่ยนแปลงแก้ไขจะเป็นไปตามวิธี และข้อกำหนดที่ระบุไว้ในโครงการจัดการกองทุนที่ท่านลงทุนรายงานนี้แสดงรายการที่ท่านทำผ่านระบบ\r\n            @ccess ที่ยังไม่มีผลเท่านั้น</p>\r\n        </div>\r\n\r\n        <div class=\"col-md-12\">\r\n          <div class=\"row justify-content-center\">\r\n            <div class=\"col-md-2 col-xs-6 col-sm-4\">\r\n              <button class=\"btn-med btn-primary\">\r\n                พิมพ์\r\n                <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\r\n\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- <div class=\"detail-footer-wrapper\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 text-left\">\r\n        <h4>คำย่อ</h4>\r\n      </div>\r\n      <div class=\"col-md-3 text-left\">\r\n        <p class=\"no-margin\">DE=ซื้อ</p>\r\n        <p class=\"no-margin\">NOR=รายการปกติ</p>\r\n      </div>\r\n      <div class=\"col-md-3 text-left\">\r\n        <p class=\"no-margin\">WI=ขายคืน</p>\r\n        <p class=\"no-margin\">ADV=รายการล่วงหน้า</p>\r\n      </div>\r\n      <div class=\"col-md-3 text-left\">\r\n        <p class=\"no-margin\">SW=สับเปลี่ยน</p>\r\n        <p class=\"no-margin\">REG=รายการประจำ</p>\r\n      </div>\r\n\r\n      <div class=\"col-md-12  mt-5 \">\r\n        <div class=\"row justify-content-center\">\r\n          <div class=\"col-md-2 col-xs-6 col-sm-4\">\r\n            <button class=\"btn-med btn-primary\" (click)=\"checkpage('signup1')\">\r\n              พิมพ์\r\n              <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\r\n\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div> -->\r\n</div>"

/***/ }),

/***/ "./src/app/report/today-list/today-list.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/report/today-list/today-list.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/report/today-list/today-list.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/report/today-list/today-list.component.ts ***!
  \***********************************************************/
/*! exports provided: TodayListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodayListComponent", function() { return TodayListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TodayListComponent = /** @class */ (function () {
    function TodayListComponent() {
    }
    TodayListComponent.prototype.ngOnInit = function () {
        $('#mutual-tab-menu').find('li').removeClass('current');
        $('#mutual-tab-menu').find('li#menu6').addClass('current');
    };
    TodayListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-today-list',
            template: __webpack_require__(/*! ./today-list.component.html */ "./src/app/report/today-list/today-list.component.html"),
            styles: [__webpack_require__(/*! ./today-list.component.scss */ "./src/app/report/today-list/today-list.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TodayListComponent);
    return TodayListComponent;
}());



/***/ }),

/***/ "./src/app/report/type/type.component.html":
/*!*************************************************!*\
  !*** ./src/app/report/type/type.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"fund-table-wrapper\">\r\n  <div class=\"detail-body-wrapper\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 icon-option mb-3\">\r\n        <ul class=\"\">\r\n          <!-- <li class=\"ico-fb\">\r\n            <a href=\"#\" title=\"facebook\">\r\n              <img src=\"/assets/Images/icons/ico-pipe.png\" />\r\n            </a>\r\n          </li>\r\n          <li class=\"ico-line\">\r\n            <a href=\"#\" title=\"line\">\r\n              <img src=\"/assets/Images/icons/ico-download.png\" />\r\n            </a>\r\n          </li> -->\r\n          <li class=\"ico-yt\">\r\n            <a href=\"#\" title=\"youtube\">\r\n              <img src=\"/assets/Images/icons/ico-print.png\" />\r\n            </a>\r\n          </li>\r\n\r\n        </ul>\r\n      </div>\r\n      <div class=\"col-md-12\">\r\n        <h4>คำย่อ</h4>\r\n      </div>\r\n      <div class=\"col-md-12\">\r\n        <h4>ประเภทการทำรายการ</h4>\r\n      </div>\r\n      <div class=\"col-md-3\">\r\n        <p class=\"no-margin\">BF = รายการยกมา</p>\r\n      </div>\r\n      <div class=\"col-md-3\">\r\n        <p class=\"no-margin\">SUB = รายการซื้อ</p>\r\n      </div>\r\n      <div class=\"col-md-3\">\r\n        <p class=\"no-margin\">RDM = รายการขาย</p>\r\n      </div>\r\n      <div class=\"col-md-3\">\r\n        <p class=\"no-margin\">SWI = รายการสับเปลี่ยนเข้า</p>\r\n      </div>\r\n      <div class=\"col-md-3\">\r\n        <p class=\"no-margin\">SWO = รายการสับเปลี่ยนออก</p>\r\n      </div>\r\n      <div class=\"col-md-3\">\r\n        <p class=\"no-margin\">ROLL = รายการลงทุนต่อเนื่อง</p>\r\n      </div>\r\n      <div class=\"col-md-3\">\r\n        <p class=\"no-margin\">AR = รายการขายคืนอัตโนมัติ</p>\r\n      </div>\r\n      <div class=\"col-md-3\">\r\n        <p class=\"no-margin\">AS = รายการรับซื้ออัตโนมัติ</p>\r\n      </div>\r\n      <div class=\"col-md-3\">\r\n        <p class=\"no-margin\">TRI = รายการรับโอน</p>\r\n      </div>\r\n      <div class=\"col-md-3\">\r\n        <p class=\"no-margin\">TRO = รายการโอนออก</p>\r\n      </div>\r\n      <div class=\"col-md-3\">\r\n        <p class=\"no-margin\">CFM = ยืนยันรายการ</p>\r\n      </div>\r\n      <div class=\"col-md-3\">\r\n        <p class=\"no-margin\">UD = แสดงรายการมูลค่าหน่วยลงทุน</p>\r\n      </div>\r\n      <div class=\"col-md-3\">\r\n        <p class=\"no-margin\">TOTAL SUM = รวมเงินลงทุน</p>\r\n      </div>\r\n      <div class=\"col-md-3\">\r\n        <p class=\"no-margin\">CR = เช็คคืน</p>\r\n      </div>\r\n      <div class=\"col-md-3\">\r\n        <p class=\"no-margin\">REJ = รายการยกเลิก</p>\r\n      </div>\r\n      <div class=\"col-md-3\">\r\n        <p class=\"no-margin\">ADJ = รายการปรับปรุง</p>\r\n      </div>\r\n\r\n      <div class=\"col-md-12 mt-3\">\r\n        <h4>ช่องทางการทำรายการ</h4>\r\n      </div>\r\n\r\n      <div class=\"col-md-3\">\r\n        <p class=\"no-margin\">LHF = รายการผ่าน LH FUND</p>\r\n      </div>\r\n      <div class=\"col-md-3\">\r\n        <p class=\"no-margin\">LHF-I = รายการผ่าน Internet LH FUND</p>\r\n      </div>\r\n      <div class=\"col-md-3\">\r\n        <p class=\"no-margin\">P = รายการผ่าน LH BANK</p>\r\n      </div>\r\n      <div class=\"col-md-3\">\r\n        <p class=\"no-margin\">INET = รายการผ่าน LH BANK Speedy</p>\r\n      </div>\r\n      <div class=\"col-md-3\">\r\n        <p class=\"no-margin\">MNET = รายการผ่าน Mobile Banking</p>\r\n      </div>\r\n      <div class=\"col-md-3\">\r\n        <p class=\"no-margin\">ATM = รายการผ่าน ATM LH BANK</p>\r\n      </div>\r\n      <div class=\"col-md-3\">\r\n        <p class=\"no-margin\">SA = รายการผ่าน Selling Agent</p>\r\n      </div>\r\n\r\n    </div>\r\n\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/report/type/type.component.scss":
/*!*************************************************!*\
  !*** ./src/app/report/type/type.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/report/type/type.component.ts":
/*!***********************************************!*\
  !*** ./src/app/report/type/type.component.ts ***!
  \***********************************************/
/*! exports provided: TypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeComponent", function() { return TypeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TypeComponent = /** @class */ (function () {
    function TypeComponent() {
    }
    TypeComponent.prototype.ngOnInit = function () {
        $('#mutual-tab-menu').find('li').removeClass('current');
        $('#mutual-tab-menu').find('li#menu9').addClass('current');
    };
    TypeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-type',
            template: __webpack_require__(/*! ./type.component.html */ "./src/app/report/type/type.component.html"),
            styles: [__webpack_require__(/*! ./type.component.scss */ "./src/app/report/type/type.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TypeComponent);
    return TypeComponent;
}());



/***/ }),

/***/ "./src/app/rmf-ltf/certificate-ltf/certificate-ltf.component.html":
/*!************************************************************************!*\
  !*** ./src/app/rmf-ltf/certificate-ltf/certificate-ltf.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"fund-table-wrapper\">\r\n  <div class=\"heading-section\">\r\n    <div class=\"row\">\r\n      <div class=\"detail-head-wrapper\">\r\n        <div class=\"col-md-12 col-xs-12 icon-option mb-3\">\r\n\r\n          <ul class=\"\">\r\n            <!-- <li class=\"ico-fb\">\r\n              <a href=\"#\" title=\"facebook\">\r\n                <img src=\"/assets/Images/icons/ico-pipe.png\" />\r\n              </a>\r\n            </li>\r\n            <li class=\"ico-line\">\r\n              <a href=\"#\" title=\"line\">\r\n                <img src=\"/assets/Images/icons/ico-download.png\" />\r\n              </a>\r\n            </li> -->\r\n            <li class=\"ico-yt\">\r\n              <a href=\"#\" title=\"youtube\">\r\n                <img src=\"/assets/Images/icons/ico-print.png\" />\r\n              </a>\r\n            </li>\r\n\r\n          </ul>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n\r\n          <p>เลขที่ผู้ถือหน่วยลงทุน</p>\r\n          <div class=\"select-wrapper inline-block\">\r\n            <select name=\"ddlLink\" id=\"ddlLink\">\r\n              <option value=\"0\" selected=\"\">9990244757</option>\r\n              <option value=\"36\">9990244757</option>\r\n              <option value=\"29\">9990244757</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <p>ชื่อผู้ถือหน่วยลงทุน</p>\r\n          <span>เนติวัฒน์ โชติกร</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"detail-body-wrapper\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6 pull-md-6\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6\">\r\n            <div class=\"custom-radio-between\">\r\n              <input value=\"101\" id=\"101\" name=\"rad1\" type=\"radio\" checked>\r\n              <label for=\"101\"></label>\r\n              <p>หนังสือรับรองฯ LTF</p>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-12\">\r\n                <p>ปี</p>\r\n              </div>\r\n              <div class=\"col-md-12\">\r\n                <div class=\"select-wrapper inline-block\">\r\n                  <select name=\"ddlLink\" id=\"ddlLink\">\r\n                    <option value=\"0\" selected=\"\">2561</option>\r\n                    <option value=\"36\">2560</option>\r\n                    <option value=\"29\">2559</option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-6 offset-6 mb-md-0 mb-3\">\r\n                <button class=\"btn-med btn-primary\">\r\n                  ตกลง\r\n                  <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\r\n\r\n                </button>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <div class=\"custom-radio-between\">\r\n              <input value=\"102\" id=\"102\" name=\"rad1\" type=\"radio\">\r\n              <label for=\"102\"></label>\r\n              <p>หนังสือรับรองฯ ขายคืน LTF</p>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n  </div>\r\n  <div class=\"detail-footer-wrapper\">\r\n    <div class=\"sidenav-left\">\r\n      <div class=\"vertical-menu-wrapper\">\r\n        <h3>\r\n          หนังสือรับรองฯ LTF\r\n        </h3>\r\n        <ul>\r\n          <li>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-10 col-xs-9\">\r\n                <a href=\"#\" title=\"ชื่อเมนู\">\r\n                  (ชื่อ) หนังสือรับรองฯ LTF\r\n                </a>\r\n              </div>\r\n              <div class=\"col-md-2 col-xs-3\">\r\n                <button class=\"btn-sm btn-download width50 \">\r\n                  <p>Download</p>\r\n                  <img src=\"/assets/Images/icons/ico-download-white.png\">\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </li>\r\n          <li>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-10 col-xs-9\">\r\n                <a href=\"#\" title=\"ชื่อเมนู\">\r\n                  (ชื่อ) หนังสือรับรองฯ LTF\r\n                </a>\r\n              </div>\r\n              <div class=\"col-md-2 col-xs-3\">\r\n                <button class=\"btn-sm btn-download width50 \">\r\n                  <p>Download</p>\r\n                  <img src=\"/assets/Images/icons/ico-download-white.png\">\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </li>\r\n          <li>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-10 col-xs-9\">\r\n                <a href=\"#\" title=\"ชื่อเมนู\">\r\n                  (ชื่อ) หนังสือรับรองฯ LTF\r\n                </a>\r\n              </div>\r\n              <div class=\"col-md-2 col-xs-3\">\r\n                <button class=\"btn-sm btn-download width50 \">\r\n                  <p>Download</p>\r\n                  <img src=\"/assets/Images/icons/ico-download-white.png\">\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </li>\r\n\r\n        </ul>\r\n        <div class=\"clearfix\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/rmf-ltf/certificate-ltf/certificate-ltf.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/rmf-ltf/certificate-ltf/certificate-ltf.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/rmf-ltf/certificate-ltf/certificate-ltf.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/rmf-ltf/certificate-ltf/certificate-ltf.component.ts ***!
  \**********************************************************************/
/*! exports provided: CertificateLtfComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CertificateLtfComponent", function() { return CertificateLtfComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CertificateLtfComponent = /** @class */ (function () {
    function CertificateLtfComponent() {
    }
    CertificateLtfComponent.prototype.ngOnInit = function () {
        $('#mutual-tab-menu').find('li').removeClass('current');
        $('#mutual-tab-menu').find('li#menu4').addClass('current');
    };
    CertificateLtfComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-certificate-ltf',
            template: __webpack_require__(/*! ./certificate-ltf.component.html */ "./src/app/rmf-ltf/certificate-ltf/certificate-ltf.component.html"),
            styles: [__webpack_require__(/*! ./certificate-ltf.component.scss */ "./src/app/rmf-ltf/certificate-ltf/certificate-ltf.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CertificateLtfComponent);
    return CertificateLtfComponent;
}());



/***/ }),

/***/ "./src/app/rmf-ltf/certificate-rmf/certificate-rmf.component.html":
/*!************************************************************************!*\
  !*** ./src/app/rmf-ltf/certificate-rmf/certificate-rmf.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"fund-table-wrapper\">\r\n  <div class=\"heading-section\">\r\n    <div class=\"row\">\r\n      <div class=\"detail-head-wrapper\">\r\n        <div class=\"col-md-12 col-xs-12 icon-option mb-3\">\r\n\r\n          <ul class=\"\">\r\n            <!-- <li class=\"ico-fb\">\r\n              <a href=\"#\" title=\"facebook\">\r\n                <img src=\"/assets/Images/icons/ico-pipe.png\" />\r\n              </a>\r\n            </li>\r\n            <li class=\"ico-line\">\r\n              <a href=\"#\" title=\"line\">\r\n                <img src=\"/assets/Images/icons/ico-download.png\" />\r\n              </a>\r\n            </li> -->\r\n            <li class=\"ico-yt\">\r\n              <a href=\"#\" title=\"youtube\">\r\n                <img src=\"/assets/Images/icons/ico-print.png\" />\r\n              </a>\r\n            </li>\r\n\r\n          </ul>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n\r\n          <p>เลขที่ผู้ถือหน่วยลงทุน</p>\r\n          <div class=\"select-wrapper inline-block\">\r\n            <select name=\"ddlLink\" id=\"ddlLink\">\r\n              <option value=\"0\" selected=\"\">9990244757</option>\r\n              <option value=\"36\">9990244757</option>\r\n              <option value=\"29\">9990244757</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <p>ชื่อผู้ถือหน่วยลงทุน</p>\r\n          <span>เนติวัฒน์ โชติกร</span>\r\n        </div>\r\n        <!-- <div class=\"col-md-4\">\r\n          <p>วันที่ทำรายงาน</p>\r\n          <span>7 มิถุนายน 2561</span>                      \r\n        </div> -->\r\n\r\n        <!-- <div class=\"col-sm-3 col-md-2\">\r\n                              <div class=\"add-print\">\r\n                                  <a href=\"#\" class=\"\" onclick=\"window.print();\">พิมพ์หน้านี้\r\n                                  </a>\r\n                              </div>\r\n                          </div> -->\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"detail-body-wrapper\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6 pull-md-6\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6\">\r\n            <div class=\"custom-radio-between\">\r\n              <input value=\"101\" id=\"101\" name=\"rad1\" type=\"radio\" checked>\r\n              <label for=\"101\"></label>\r\n              <p>หนังสือรับรองฯ RMF</p>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-12\">\r\n                <p>ปี</p>\r\n              </div>\r\n              <div class=\"col-md-12\">\r\n                <div class=\"select-wrapper inline-block\">\r\n                  <select name=\"ddlLink\" id=\"ddlLink\">\r\n                    <option value=\"0\" selected=\"\">2561</option>\r\n                    <option value=\"36\">2560</option>\r\n                    <option value=\"29\">2559</option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-6 offset-6 mb-md-0 mb-3\">\r\n                <button class=\"btn-med btn-primary\">\r\n                  ตกลง\r\n                  <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\r\n\r\n                </button>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <div class=\"custom-radio-between\">\r\n              <input value=\"102\" id=\"102\" name=\"rad1\" type=\"radio\">\r\n              <label for=\"102\"></label>\r\n              <p>หนังสือรับรองฯ ขายคืน RMF</p>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- <div class=\"col-md-6\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-12\">\r\n                <p>ปี</p>\r\n              </div>\r\n              <div class=\"col-md-12\">\r\n                <div class=\"select-wrapper inline-block\">\r\n                  <select name=\"ddlLink\" id=\"ddlLink\">\r\n                    <option value=\"0\" selected=\"\">2561</option>\r\n                    <option value=\"36\">2560</option>\r\n                    <option value=\"29\">2559</option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-6 offset-6\">\r\n                <button class=\"btn-med btn-primary\" (click)=\"checkpage('signup1')\">\r\n                  ตกลง\r\n                  <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\r\n\r\n                </button>\r\n              </div>\r\n            </div>\r\n\r\n          </div> -->\r\n\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n  </div>\r\n  <div class=\"detail-footer-wrapper\">\r\n    <div class=\"sidenav-left\">\r\n      <div class=\"vertical-menu-wrapper\">\r\n        <h3>\r\n          หนังสือรับรองฯ RMF\r\n        </h3>\r\n        <ul>\r\n          <li>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-10 col-xs-9\">\r\n                <a href=\"#\" title=\"ชื่อเมนู\">\r\n                  (ชื่อ) หนังสือรับรองฯ RMF\r\n                </a>\r\n              </div>\r\n              <div class=\"col-md-2 col-xs-3\">\r\n                <button class=\"btn-sm btn-download width50 \">\r\n                  <p>Download</p>\r\n                  <img src=\"/assets/Images/icons/ico-download-white.png\">\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </li>\r\n          <li>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-10 col-xs-9\">\r\n                <a href=\"#\" title=\"ชื่อเมนู\">\r\n                  (ชื่อ) หนังสือรับรองฯ RMF\r\n                </a>\r\n              </div>\r\n              <div class=\"col-md-2 col-xs-3\">\r\n                <button class=\"btn-sm btn-download width50 \">\r\n                  <p>Download</p>\r\n                  <img src=\"/assets/Images/icons/ico-download-white.png\">\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </li>\r\n          <li>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-10 col-xs-9\">\r\n                <a href=\"#\" title=\"ชื่อเมนู\">\r\n                  (ชื่อ) หนังสือรับรองฯ RMF\r\n                </a>\r\n              </div>\r\n              <div class=\"col-md-2 col-xs-3\">\r\n                <button class=\"btn-sm btn-download width50 \">\r\n                  <p>Download</p>\r\n                  <img src=\"/assets/Images/icons/ico-download-white.png\">\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </li>\r\n\r\n        </ul>\r\n        <div class=\"clearfix\"></div>\r\n      </div>\r\n      <!-- Nav tabs For Mobile -->\r\n      <!-- <div class=\"dropdown dropdown-content\">\r\n        <button class=\"btn-med btn-primary dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">\r\n          ข้อมูลเบื้องต้น\r\n        </button>\r\n        <ul class=\"dropdown-menu\">\r\n          <li class=\"current\">\r\n            <a href=\"#\" title=\"ชื่อเมนู\">กองทุนส่วนบุคคลคือ?\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a href=\"#\" title=\"ชื่อเมนู\">จุดเด่นของการลงทุน\r\n            </a>\r\n\r\n          </li>\r\n          <li>\r\n            <a href=\"#\" title=\"ชื่อเมนู\">เกี่ยวกับ LH Fund\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a href=\"#\" title=\"ชื่อเมนู\">นโยบายการลงทุน\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a href=\"#\" title=\"ชื่อเมนู\">สิ่งที่ควนพิจารณา\r\n            </a>\r\n          </li>\r\n        </ul>\r\n      </div> -->\r\n    </div>\r\n\r\n    <!-- <div class=\"row\">\r\n          <div class=\"col-md-6 text-left\">\r\n           <h4>รายการซื้อหน่วยลงทุน</h4> (รายการที่รอดำเนินการ)\r\n            \r\n          </div>\r\n          <div class=\"col-md-6 text-right\">\r\n              \r\n                    <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>ดูรายการทั้งหมด\r\n            </div>\r\n            <div class=\"col-md-12 mt-5 text-center\">\r\n              ไม่มีรายการที่รอดำเนินงาน\r\n            </div>\r\n        </div> -->\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/rmf-ltf/certificate-rmf/certificate-rmf.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/rmf-ltf/certificate-rmf/certificate-rmf.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/rmf-ltf/certificate-rmf/certificate-rmf.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/rmf-ltf/certificate-rmf/certificate-rmf.component.ts ***!
  \**********************************************************************/
/*! exports provided: CertificateRmfComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CertificateRmfComponent", function() { return CertificateRmfComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CertificateRmfComponent = /** @class */ (function () {
    function CertificateRmfComponent() {
    }
    CertificateRmfComponent.prototype.ngOnInit = function () {
        $('#mutual-tab-menu').find('li').removeClass('current');
        $('#mutual-tab-menu').find('li#menu3').addClass('current');
    };
    CertificateRmfComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-certificate-rmf',
            template: __webpack_require__(/*! ./certificate-rmf.component.html */ "./src/app/rmf-ltf/certificate-rmf/certificate-rmf.component.html"),
            styles: [__webpack_require__(/*! ./certificate-rmf.component.scss */ "./src/app/rmf-ltf/certificate-rmf/certificate-rmf.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CertificateRmfComponent);
    return CertificateRmfComponent;
}());



/***/ }),

/***/ "./src/app/rmf-ltf/conclusion/conclusion.component.html":
/*!**************************************************************!*\
  !*** ./src/app/rmf-ltf/conclusion/conclusion.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"fund-table-wrapper\">\r\n  <div class=\"heading-section\">\r\n    <div class=\"row\">\r\n      <div class=\"detail-head-wrapper\">\r\n        <div class=\"col-md-12 col-xs-12 icon-option mb-3\">\r\n\r\n          <ul class=\"\">\r\n            <!-- <li class=\"ico-fb\">\r\n              <a href=\"#\" title=\"facebook\">\r\n                <img src=\"/assets/Images/icons/ico-pipe.png\" />\r\n              </a>\r\n            </li>\r\n            <li class=\"ico-line\">\r\n              <a href=\"#\" title=\"line\">\r\n                <img src=\"/assets/Images/icons/ico-download.png\" />\r\n              </a>\r\n            </li> -->\r\n            <li class=\"ico-yt\">\r\n              <a href=\"#\" title=\"youtube\">\r\n                <img src=\"/assets/Images/icons/ico-print.png\" />\r\n              </a>\r\n            </li>\r\n\r\n          </ul>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n\r\n          <p>เลขที่ผู้ถือหน่วยลงทุน</p>\r\n          <div class=\"select-wrapper inline-block\">\r\n            <select name=\"ddlLink\" id=\"ddlLink\">\r\n              <option value=\"0\" selected=\"\">9990244757</option>\r\n              <option value=\"36\">9990244757</option>\r\n              <option value=\"29\">9990244757</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"col-md-3\">\r\n          <p>ชื่อผู้ถือหน่วยลงทุน</p>\r\n          <span>เนติวัฒน์ โชติกร</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"detail-body-wrapper\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-2\">\r\n        <p>RMF & LTF ปี พ.ศ.</p>\r\n      </div>\r\n      <div class=\"col-md-3\">\r\n        <div class=\"select-wrapper inline-block\">\r\n          <select name=\"ddlLink\" id=\"ddlLink\">\r\n            <option value=\"0\" selected=\"\">2561</option>\r\n            <option value=\"36\">2560</option>\r\n            <option value=\"29\">2559</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-3\">\r\n        <button class=\"btn-med btn-primary width50\">\r\n          ตกลง\r\n          <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\r\n        </button>\r\n      </div>\r\n\r\n      <div class=\"col-md-12\">\r\n        <div class=\"fund-list-wrapper\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6 col-xs-12 no-padding\">\r\n              <div class=\"title-heading-blue\">\r\n                <div class=\"row\">\r\n                  <!-- <div class=\"col-md-2\"><img src=\"/assets/Images/icons/ico-asset.png\"></div> -->\r\n                  <div class=\"col-md-12\">\r\n                    <h1 class=\"no-margin\">มูลค่าการลงทุน RMF & LTF</h1>\r\n                  </div>\r\n                  <div class=\"col-md-12\">\r\n                    <h3 class=\"no-margin\">จาก 1 มกราคม 2561 ถึง 12 มิถุนายน 2561</h3>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-3 col-xs-12 no-padding\">\r\n              <div class=\"title-heading\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-3 col-xs-3\">\r\n                    <img src=\"/assets/Images/icons/ico-rmf.png\">\r\n                  </div>\r\n                  <div class=\"col-md-9 col-xs-9\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-12\">\r\n                        <p>มูลค่าการลงทุน RMF (บาท)</p>\r\n                      </div>\r\n                      <div class=\"col-sm-12\">\r\n                        <h3 class=\"no-margin\">฿ 669,638.80</h3>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-3 col-xs-12 no-padding\">\r\n              <div class=\"title-heading bg-sea\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-3 col-xs-3\">\r\n                    <img src=\"/assets/Images/icons/ico-ltf.png\">\r\n                  </div>\r\n                  <div class=\"col-md-9 col-xs-9\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-12\">\r\n                        <p>มูลค่าการลงทุน LTF (บาท)</p>\r\n                      </div>\r\n                      <div class=\"col-sm-12\">\r\n                        <h3 class=\"no-margin\">฿ 669,638.80</h3>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"table-responsive\">\r\n        <table class=\"table table-nav\">\r\n          <thead>\r\n              <tr>\r\n                  <th>\r\n                    วันที่ทำรายการ\r\n                  </th>\r\n                  <th>\r\n                    ประเภทหน่วยลงทุน\r\n                  </th>\r\n                  <th>\r\n                    มูลค่าการลงทุน\r\n                  </th>\r\n                  <th>\r\n                    หน่วย\r\n                  </th>\r\n                  <th>\r\n                    มูลค่าต่อหน่วย\r\n                  </th>\r\n                </tr>\r\n          </thead>\r\n          <tbody>                        \r\n            <tr class=\"line\">\r\n              <td colspan=\"5\">\r\n                KFHCARERMF : กองทุนเปิดกรุงศรีโกลบอลเฮลธ์แคร์อควิตี้เพื่อการเลี้ยงชีพ\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <td class=\"text-center\">\r\n                03/03/2561\r\n              </td>\r\n              <td class=\"text-center\">\r\n                DE\r\n              </td>\r\n              <td class=\"txt-right\">\r\n                200.000\r\n              </td>\r\n              <td class=\"txt-right\">\r\n                17,055.4525\r\n              </td>\r\n              <td class=\"txt-right\">\r\n                11.1500\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <td class=\"text-center\">\r\n                03/03/2561\r\n              </td>\r\n              <td class=\"text-center\">\r\n                DE\r\n              </td>\r\n              <td class=\"txt-right\">\r\n                200.000\r\n              </td>\r\n              <td class=\"txt-right\">\r\n                17,055.4525\r\n              </td>\r\n              <td class=\"txt-right\">\r\n                11.1500\r\n              </td>\r\n            </tr>\r\n            <tr class=\"summary\">\r\n              <th colspan=\"2\">\r\n                รวม KFHCARERMF\r\n              </th>\r\n              <th class=\"text-right\">\r\n                400.000\r\n              </th>\r\n              <th class=\"text-right\">\r\n                51,116.3575\r\n              </th>\r\n              <th class=\"text-right\">\r\n                &nbsp;\r\n              </th>\r\n            </tr>\r\n            <tr class=\"line\">\r\n              <td colspan=\"5\">\r\n                KFHCARERMF : กองทุนเปิดกรุงศรีโกลบอลเฮลธ์แคร์อควิตี้เพื่อการเลี้ยงชีพ\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <td class=\"text-center\">\r\n                03/03/2561\r\n              </td>\r\n              <td class=\"text-center\">\r\n                DE\r\n              </td>\r\n              <td class=\"txt-right\">\r\n                200.000\r\n              </td>\r\n              <td class=\"txt-right\">\r\n                17,055.4525\r\n              </td>\r\n              <td class=\"txt-right\">\r\n                11.1500\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <td class=\"text-center\">\r\n                03/03/2561\r\n              </td>\r\n              <td class=\"text-center\">\r\n                DE\r\n              </td>\r\n              <td class=\"txt-right\">\r\n                200.000\r\n              </td>\r\n              <td class=\"txt-right\">\r\n                17,055.4525\r\n              </td>\r\n              <td class=\"txt-right\">\r\n                11.1500\r\n              </td>\r\n            </tr>\r\n            <tr class=\"summary\">\r\n              <th colspan=\"2\">\r\n                รวม KFHCARERMF\r\n              </th>\r\n              <th class=\"text-right\">\r\n                400.000\r\n              </th>\r\n              <th class=\"text-right\">\r\n                51,116.3575\r\n              </th>\r\n              <th class=\"text-right\">\r\n                &nbsp;\r\n              </th>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n      <div class=\"col-md-6 mt-2\">\r\n        <p class=\"color-red no-margin\">หมายเหตุ: คำนวณจากยอดเงินลงทุนใหม่ในรอบปีทั้งหมด โดยไม่รวมรายการดังต่อไปนี้</p>\r\n        <p class=\"color-red no-margin\">1. เงินลงทุนที่รับโอนมาจากหรือโอนออกไปยังบลจ.อื่น</p>\r\n        <p class=\"color-red no-margin\">2. รายการสับเปลี่ยนระหว่าง RMF ด้วยกันหรือ LTF ด้วยกัน</p>\r\n        <p class=\"color-red no-margin\">3. จำนวนเงินที่ขายคืนระหว่างปี</p>\r\n        <p class=\"color-red no-margin\">4. เงินลงทุนใน RMF/LTF ของผู้ถือหน่วยท่านเดียวกัน แต่อยู่ในบัญชีผู้ถือลงทุนหมายเลขอื่นกับ บลจ.กรุงศรี</p>\r\n      </div>\r\n\r\n      <div class=\"col-md-12  mt-3\">\r\n          <div class=\"row justify-content-center\">\r\n            <div class=\"col-md-2 col-xs-6 col-sm-4\">\r\n              <button class=\"btn-med btn-primary\">\r\n                พิมพ์\r\n                <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\r\n\r\n              </button>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/rmf-ltf/conclusion/conclusion.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/rmf-ltf/conclusion/conclusion.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/rmf-ltf/conclusion/conclusion.component.ts":
/*!************************************************************!*\
  !*** ./src/app/rmf-ltf/conclusion/conclusion.component.ts ***!
  \************************************************************/
/*! exports provided: ConclusionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConclusionComponent", function() { return ConclusionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConclusionComponent = /** @class */ (function () {
    function ConclusionComponent() {
    }
    ConclusionComponent.prototype.ngOnInit = function () {
        $('#mutual-tab-menu').find('li').removeClass('current');
        $('#mutual-tab-menu').find('li#menu2').addClass('current');
    };
    ConclusionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-conclusion',
            template: __webpack_require__(/*! ./conclusion.component.html */ "./src/app/rmf-ltf/conclusion/conclusion.component.html"),
            styles: [__webpack_require__(/*! ./conclusion.component.scss */ "./src/app/rmf-ltf/conclusion/conclusion.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ConclusionComponent);
    return ConclusionComponent;
}());



/***/ }),

/***/ "./src/app/rmf-ltf/ltf-condition-complete/ltf-condition-complete.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/rmf-ltf/ltf-condition-complete/ltf-condition-complete.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"fund-table-wrapper\">\r\n  <div class=\"heading-section\">\r\n    <div class=\"row\">\r\n      <div class=\"detail-head-wrapper\">\r\n        <div class=\"col-md-12 col-xs-12 icon-option mb-3\">\r\n\r\n          <ul class=\"\">\r\n            <!-- <li class=\"ico-fb\">\r\n              <a href=\"#\" title=\"facebook\">\r\n                <img src=\"/assets/Images/icons/ico-pipe.png\" />\r\n              </a>\r\n            </li>\r\n            <li class=\"ico-line\">\r\n              <a href=\"#\" title=\"line\">\r\n                <img src=\"/assets/Images/icons/ico-download.png\" />\r\n              </a>\r\n            </li> -->\r\n            <li class=\"ico-yt\">\r\n              <a href=\"#\" title=\"youtube\">\r\n                <img src=\"/assets/Images/icons/ico-print.png\" />\r\n              </a>\r\n            </li>\r\n\r\n          </ul>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n\r\n          <p>เลขที่ผู้ถือหน่วยลงทุน</p>\r\n          <div class=\"select-wrapper inline-block\">\r\n            <select name=\"ddlLink\" id=\"ddlLink\">\r\n              <option value=\"0\" selected=\"\">9990244757</option>\r\n              <option value=\"36\">9990244757</option>\r\n              <option value=\"29\">9990244757</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <p>ชื่อผู้ถือหน่วยลงทุน</p>\r\n          <span>เนติวัฒน์ โชติกร</span>\r\n        </div>\r\n        <div class=\"col-sm-6 col-md-6\">\r\n          <p>ที่อยู่</p>\r\n          <span>19/259 ซ.จุลดิส แขวงพญาไท เขตราชเทวี กรุงเทพมหานคร 10400</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"detail-body-wrapper\">\r\n    <div class=\"table-responsive\">\r\n      <table class=\"table table-nav\">\r\n        <thead>\r\n            <tr>\r\n                <th>\r\n                  ชื่อกองทุน\r\n                </th>\r\n                <th>\r\n                  วันที่ซื้อ\r\n                </th>\r\n                <th>\r\n                  จำนวนหน่วย\r\n                </th>\r\n                <th>\r\n                  วันที่\r\n                </th>\r\n                <th>\r\n                  มูลค่าต่อหน่วย\r\n                </th>\r\n                <th>\r\n                  มูลค่าหน่วย\r\n                </th>\r\n              </tr>\r\n        </thead>\r\n        <tbody>                      \r\n          <tr class=\"line\">\r\n            <td>\r\n              (KFLTFSTARD) กองทุนเปิดกรุงศรีหุ้นระยะยาวไทยออลสตาร์ปันผล\r\n            </td>\r\n            <td colspan=\"6\">&nbsp;</td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"text-left\">\r\n              NET\r\n            </td>\r\n            <td class=\"\">\r\n              07/06/2561\r\n            </td>\r\n            <td class=\"\">\r\n              30\r\n            </td>\r\n            <td class=\"\">\r\n              07/06/2561\r\n            </td>\r\n            <td class=\"txt-right\">\r\n              11.1500\r\n            </td>\r\n            <td class=\"txt-right\">\r\n              17,055.4525\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"text-left\">\r\n              NET\r\n            </td>\r\n            <td class=\"\">\r\n              07/06/2561\r\n            </td>\r\n            <td class=\"\">\r\n              30\r\n            </td>\r\n            <td class=\"\">\r\n              07/06/2561\r\n            </td>\r\n            <td class=\"txt-right\">\r\n              11.1500\r\n            </td>\r\n            <td class=\"txt-right\">\r\n              17,055.4525\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/rmf-ltf/ltf-condition-complete/ltf-condition-complete.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/rmf-ltf/ltf-condition-complete/ltf-condition-complete.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/rmf-ltf/ltf-condition-complete/ltf-condition-complete.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/rmf-ltf/ltf-condition-complete/ltf-condition-complete.component.ts ***!
  \************************************************************************************/
/*! exports provided: LtfConditionCompleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LtfConditionCompleteComponent", function() { return LtfConditionCompleteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LtfConditionCompleteComponent = /** @class */ (function () {
    function LtfConditionCompleteComponent() {
    }
    LtfConditionCompleteComponent.prototype.ngOnInit = function () {
        $('#mutual-tab-menu').find('li').removeClass('current');
        $('#mutual-tab-menu').find('li#menu1').addClass('current');
    };
    LtfConditionCompleteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ltf-condition-complete',
            template: __webpack_require__(/*! ./ltf-condition-complete.component.html */ "./src/app/rmf-ltf/ltf-condition-complete/ltf-condition-complete.component.html"),
            styles: [__webpack_require__(/*! ./ltf-condition-complete.component.scss */ "./src/app/rmf-ltf/ltf-condition-complete/ltf-condition-complete.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LtfConditionCompleteComponent);
    return LtfConditionCompleteComponent;
}());



/***/ }),

/***/ "./src/app/rmf-ltf/rmf-ltf.component.html":
/*!************************************************!*\
  !*** ./src/app/rmf-ltf/rmf-ltf.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"\" id=\"maincontainer-wrapper\">\r\n  <div class=\"page-content-wrapper\">\r\n    <div class=\"mutual-fund-wrapper\">\r\n      <div class=\"max-width-wrapper\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n            <div class=\"tabs-menu-wrapper\">\r\n              <div class=\"dropdown dropdown-content\">\r\n                <button class=\"btn-med btn-primary dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">\r\n                  เมนูกองทุน\r\n                </button>\r\n                <ul class=\"dropdown-menu\">\r\n                  <li>\r\n                    <a (click)=\"navigate('ltf-condition-complete')\" title=\"หน่วยลงทุน LTF ที่ครบตามเงื่อนไข\">หน่วยลงทุน LTF ที่ครบตามเงื่อนไข</a>\r\n                  </li>\r\n                  <li>\r\n                    <a (click)=\"navigate('conclusion')\" title=\"สรุปยอดซื้อ RMF & LTF ในรอบปี\">สรุปยอดซื้อ RMF & LTF ในรอบปี</a>\r\n                  </li>\r\n                  <li>\r\n                    <a (click)=\"navigate('certificate-rmf')\" title=\"หนังสือรับรองฯ RMF\">หนังสือรับรองฯ RMF</a>\r\n                  </li>\r\n                  <li>\r\n                    <a (click)=\"navigate('certificate-ltf')\" title=\"หนังสือรับรองฯ LTF\">หนังสือรับรองฯ LTF</a>\r\n                  </li>\r\n                </ul>\r\n                <div class=\"clearfix\"></div>\r\n              </div>\r\n              <ul class=\"nav nav-tabs\" role=\"tablist\" id=\"mutual-tab-menu\">\r\n                <li role=\"presentation\" id=\"menu1\">\r\n                  <a title=\"รายการซื้อ\" (click)=\"navigate('ltf-condition-complete')\">หน่วยลงทุน LTF ที่ครบตามเงื่อนไข</a>\r\n                </li>\r\n                <li role=\"presentation\" id=\"menu2\">\r\n                  <a title=\"รายการขาย\" (click)=\"navigate('conclusion')\">สรุปยอดซื้อ RMF & LTF ในรอบปี</a>\r\n                </li>\r\n                <li role=\"presentation\" id=\"menu3\">\r\n                  <a title=\"รายการสับเปลี่ยน\" (click)=\"navigate('certificate-rmf')\">หนังสือรับรองฯ RMF</a>\r\n                </li>\r\n                <li role=\"presentation\" id=\"menu4\">\r\n                  <a title=\"รายการตั้งซื้อขายล่วงหน้า\" (click)=\"navigate('certificate-ltf')\">หนังสือรับรองฯ LTF</a>\r\n                </li>\r\n\r\n              </ul>\r\n            </div>\r\n\r\n            <router-outlet></router-outlet>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <app-footer></app-footer>"

/***/ }),

/***/ "./src/app/rmf-ltf/rmf-ltf.component.scss":
/*!************************************************!*\
  !*** ./src/app/rmf-ltf/rmf-ltf.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media screen and (max-width: 767px) {\n  .fund-list-wrapper .title-heading {\n    padding: 20px; }\n    .fund-list-wrapper .title-heading p {\n      margin-bottom: 1rem !important; }\n  .fund-list-wrapper .title-heading-blue {\n    padding: 10px 20px; }\n    .fund-list-wrapper .title-heading-blue p {\n      font-size: 20px; }\n  .fund-list-wrapper img {\n    padding: 10px 20px; }\n  .fund-list-wrapper h3 {\n    font-size: 30px; } }\n\n@media screen and (max-width: 999px) {\n  .fund-list-wrapper .title-heading p, .fund-list-wrapper .title-heading h3 {\n    margin: 0px;\n    padding-left: 10px; } }\n\n@media screen and (max-width: 767px) {\n  .vertical-menu-wrapper img {\n    margin: 0px !important; } }\n"

/***/ }),

/***/ "./src/app/rmf-ltf/rmf-ltf.component.ts":
/*!**********************************************!*\
  !*** ./src/app/rmf-ltf/rmf-ltf.component.ts ***!
  \**********************************************/
/*! exports provided: RmfLtfComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RmfLtfComponent", function() { return RmfLtfComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RmfLtfComponent = /** @class */ (function () {
    function RmfLtfComponent(route, router) {
        this.route = route;
        this.router = router;
    }
    RmfLtfComponent.prototype.ngOnInit = function () {
        $('#bottom-main-nav li').find('a').removeClass('current');
        $('#bottom-main-nav li#rmf-ltf').find('a').addClass('current');
    };
    RmfLtfComponent.prototype.navigate = function (target) {
        var target = target;
        console.log(target);
        this.router.navigate([target], { relativeTo: this.route });
    };
    RmfLtfComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-rmf-ltf',
            template: __webpack_require__(/*! ./rmf-ltf.component.html */ "./src/app/rmf-ltf/rmf-ltf.component.html"),
            styles: [__webpack_require__(/*! ./rmf-ltf.component.scss */ "./src/app/rmf-ltf/rmf-ltf.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], RmfLtfComponent);
    return RmfLtfComponent;
}());



/***/ }),

/***/ "./src/app/transaction/exchange/exchange.component.html":
/*!**************************************************************!*\
  !*** ./src/app/transaction/exchange/exchange.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"fund-table-wrapper\" *ngIf=\"page == 'exchange'\">\r\n  <div class=\"heading-section\">\r\n    <div class=\"row\">\r\n      <div class=\"detail-head-wrapper\">\r\n        <div class=\"col-md-12 col-xs-12 icon-option mb-3\">\r\n\r\n          <ul class=\"\">\r\n            <!-- <li class=\"ico-fb\">\r\n              <a href=\"#\" title=\"facebook\">\r\n                <img src=\"/assets/Images/icons/ico-pipe.png\" />\r\n              </a>\r\n            </li>\r\n            <li class=\"ico-line\">\r\n              <a href=\"#\" title=\"line\">\r\n                <img src=\"/assets/Images/icons/ico-download.png\" />\r\n              </a>\r\n            </li> -->\r\n            <li class=\"ico-yt\">\r\n              <a href=\"#\" title=\"youtube\">\r\n                <img src=\"/assets/Images/icons/ico-print.png\" />\r\n              </a>\r\n            </li>\r\n\r\n          </ul>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n\r\n          <p>เลขที่ผู้ถือหน่วยลงทุน</p>\r\n\r\n          <div class=\"select-wrapper inline-block\">\r\n            <select name=\"ddlLink\" id=\"ddlLink\">\r\n              <option value=\"0\" selected=\"\">9990244757</option>\r\n              <option value=\"36\">9990244757</option>\r\n              <option value=\"29\">9990244757</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <p>ชื่อผู้ถือหน่วยลงทุน</p>\r\n          <span>เนติวัฒน์ โชติกร</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"detail-body-wrapper\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <H4 class=\"text-left\">สับเปลี่ยนหน่วยลงทุน</H4>\r\n        <!-- <p>ขั้นตอนที่ 1 เลือกลงทุนและใส่จำนวนที่ต้องการ</p> -->\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <p>วันที่ทำรายการ</p>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <span>7 มิถุนายน 2561</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <span>กองทุนต้นทาง</span>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <div class=\"select-wrapper inline-block\">\r\n\r\n              <select name=\"ddlLink\" id=\"ddlLink\">\r\n                <option value=\"0\" selected=\"\">KFCRASH - กองทุนกรุงศรีตราสารเงิน</option>\r\n                <option value=\"36\">KFCRASH - กองทุนกรุงศรีตราสารเงิน</option>\r\n                <option value=\"29\">KFCRASH - กองทุนกรุงศรีตราสารเงิน</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-custom\">\r\n            <thead>\r\n              <tr>\r\n                <th class=\"bg-blue\">\r\n                  ยอดคงเหลือ (หน่วย)\r\n                </th>\r\n                <th class=\"bg-primary\">\r\n                  ยอดคงเหลือ (บาท)\r\n                </th>\r\n                <th class=\"bg-darkbrown\">\r\n                  วันที่มีผล\r\n                </th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr>\r\n                <td>\r\n                  <a href=\"/MutualFund\" title=\"ประเภทกองทุน\">6.2456\r\n                  </a>\r\n                </td>\r\n                <td>\r\n                  <a href=\"/MutualFund/FundDetail\" title=\"ชื่อกองทุน\">74.39\r\n                  </a>\r\n                </td>\r\n                <td>\r\n                  05/04/60\r\n                  <a class=\"color-red\">(ณ วันที่ผ่านมา)</a>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>\r\n                  <a href=\"/MutualFund\" title=\"ประเภทกองทุน\">6.2456\r\n                  </a>\r\n                </td>\r\n                <td>\r\n                  <a href=\"/MutualFund/FundDetail\" title=\"ชื่อกองทุน\">N/A\r\n                  </a>\r\n                </td>\r\n                <td>\r\n                  05/04/60\r\n                  <a class=\"color-red\">(หลังหักรายการวันนี้)</a>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n\r\n          </table>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <span>สับเปลี่ยนจำนวน</span>\r\n          </div>\r\n          <div class=\"col-md-3 col-xs-6\">\r\n            <div class=\"input-wrapper \">\r\n              <input id=\"name\" name=\"name\" maxlength=\"30\" type=\"text\" class=\"bg-gray\" placeholder=\"0\">\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-3 col-xs-6\">\r\n            <div class=\"select-wrapper inline-block\">\r\n\r\n              <select name=\"ddlLink\" id=\"ddlLink\">\r\n                <option value=\"0\" selected=\"\">บาท</option>\r\n                <option value=\"36\">เยน</option>\r\n                <option value=\"29\">ดอลล่า</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <span>กองทุนปลายทาง</span>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <div class=\"select-wrapper inline-block\">\r\n\r\n              <select name=\"ddlLink\" id=\"ddlLink\">\r\n                <option value=\"0\" selected=\"\">ธนาคารกรุงศรีอยุธยา จำกัด (มหาชน)</option>\r\n                <option value=\"36\">ธนาคารกรุงศรีอยุธยา จำกัด (มหาชน)</option>\r\n                <option value=\"29\">ธนาคารกรุงศรีอยุธยา จำกัด (มหาชน)</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <span>วันที่ทำรายการสับเปลี่ยนล่วงหน้า</span>\r\n          </div>\r\n          <div class=\"col-md-3\">\r\n\r\n            <div class=\"input-wrapper\">\r\n              <input class=\"form-control textinput dateinput bg-gray\" id=\"startDate\" placeholder=\"วว/ดด/ปปปป\" name=\"date\" type=\"text\">\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-md-3 col-xs-6 offset-md-4\">\r\n            <button class=\"btn-med btn-primary\" (click)=\"checkpage('exchange-step1')\">\r\n              ตกลง\r\n              <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\r\n            </button>\r\n          </div>\r\n          <div class=\"col-md-3 col-xs-6\">\r\n            <button class=\"btn-med btn-cancel\" (click)=\"checkpage('')\">\r\n              ยกเลิก\r\n              <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\r\n            </button>\r\n          </div>\r\n        </div>\r\n\r\n\r\n      </div>\r\n\r\n\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"detail-footer-wrapper\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6 text-left\">\r\n        <h4>รายการสับเปลี่ยนหน่วยลงทุน <br class=\"d-block d-sm-none\"/><label>(รายการที่รอดำเนินการ)</label></h4>\r\n      </div>\r\n      <div class=\"col-md-6 text-md-right\">\r\n        <i class=\"fa fa-angle-right mr-1\" aria-hidden=\"true\"></i><label>ดูรายการทั้งหมด</label>\r\n      </div>\r\n      <div class=\"col-md-12 mt-5 text-center\">\r\n        <p>ไม่มีรายการที่รอดำเนินงาน</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"fund-table-wrapper\" *ngIf=\"page == 'exchange-step1'\">\r\n  <div class=\"heading-section\">\r\n    <div class=\"row\">\r\n      <div class=\"detail-head-wrapper\">\r\n        <div class=\"col-md-12 col-xs-12 icon-option mb-3\">\r\n\r\n          <ul class=\"\">\r\n            <!-- <li class=\"ico-fb\">\r\n              <a href=\"#\" title=\"facebook\">\r\n                <img src=\"/assets/Images/icons/ico-pipe.png\" />\r\n              </a>\r\n            </li>\r\n            <li class=\"ico-line\">\r\n              <a href=\"#\" title=\"line\">\r\n                <img src=\"/assets/Images/icons/ico-download.png\" />\r\n              </a>\r\n            </li> -->\r\n            <li class=\"ico-yt\">\r\n              <a href=\"#\" title=\"youtube\">\r\n                <img src=\"/assets/Images/icons/ico-print.png\" />\r\n              </a>\r\n            </li>\r\n\r\n          </ul>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <p>เลขที่ผู้ถือหน่วยลงทุน</p>\r\n          <span>9990244757</span>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <p>ชื่อผู้ถือหน่วยลงทุน</p>\r\n          <span>เนติวัฒน์ โชติกร</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"detail-body-wrapper\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <H4 class=\"text-left\">สับเปลี่ยนหน่วยลงทุน</H4>\r\n        <!-- <p>ขั้นตอนที่ 1 เลือกลงทุนและใส่จำนวนที่ต้องการ</p> -->\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <p>วันที่ทำรายการ</p>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <span>7 มิถุนายน 2561</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <p>กองทุนต้นทาง</p>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <span>KFCRASH - กองทุนกรุงศรีตราสารเงิน</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-custom\">\r\n            <thead>\r\n              <tr>\r\n                <th class=\"bg-blue\">\r\n                  ยอดคงเหลือ (หน่วย)\r\n                </th>\r\n                <th class=\"bg-primary\">\r\n                  ยอดคงเหลือ (บาท)\r\n                </th>\r\n                <th class=\"bg-darkbrown\">\r\n                  วันที่มีผล\r\n                </th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr>\r\n                <td>\r\n                  <a href=\"/MutualFund\" title=\"ประเภทกองทุน\">6.2456\r\n                  </a>\r\n                </td>\r\n                <td>\r\n                  <a href=\"/MutualFund/FundDetail\" title=\"ชื่อกองทุน\">74.39\r\n                  </a>\r\n                </td>\r\n                <td>\r\n                  05/04/60\r\n                  <a class=\"color-red\">(ณ วันที่ผ่านมา)</a>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>\r\n                  <a href=\"/MutualFund\" title=\"ประเภทกองทุน\">6.2456\r\n                  </a>\r\n                </td>\r\n                <td>\r\n                  <a href=\"/MutualFund/FundDetail\" title=\"ชื่อกองทุน\">N/A\r\n                  </a>\r\n                </td>\r\n                <td>\r\n                  05/04/60\r\n                  <a class=\"color-red\">(หลังหักรายการวันนี้)</a>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n\r\n          </table>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <p>สับเปลี่ยนจำนวน</p>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <span>30 หน่วย</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <p>กองทุนปลายทาง</p>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <span>ธนคารกรุงศรีอยุธยา จำกัด (มหาชน)</span>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <p>วันที่รายการมีผล</p>\r\n          </div>\r\n          <div class=\"col-md-3\">\r\n            <span>10 มิถุนายน 2561</span>\r\n\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row mt-2\">\r\n          <div class=\"col-md-3 col-xs-6 offset-md-4\">\r\n            <button class=\"btn-med btn-primary\" (click)=\"checkpage('exchange-step2')\">\r\n              ยืนยัน\r\n              <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\r\n            </button>\r\n          </div>\r\n          <div class=\"col-md-3 col-xs-6\">\r\n            <button class=\"btn-med btn-back-login\" (click)=\"checkpage('exchange')\">\r\n              ย้อนกลับ\r\n              <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n<div class=\"fund-table-wrapper\" *ngIf=\"page == 'exchange-step2'\">\r\n  <div class=\"heading-section\">\r\n    <div class=\"row\">\r\n      <div class=\"detail-head-wrapper\">\r\n        <div class=\"col-md-12 col-xs-12 icon-option mb-3\">\r\n\r\n          <ul class=\"\">\r\n            <!-- <li class=\"ico-fb\">\r\n              <a href=\"#\" title=\"facebook\">\r\n                <img src=\"/assets/Images/icons/ico-pipe.png\" />\r\n              </a>\r\n            </li>\r\n            <li class=\"ico-line\">\r\n              <a href=\"#\" title=\"line\">\r\n                <img src=\"/assets/Images/icons/ico-download.png\" />\r\n              </a>\r\n            </li> -->\r\n            <li class=\"ico-yt\">\r\n              <a href=\"#\" title=\"youtube\">\r\n                <img src=\"/assets/Images/icons/ico-print.png\" />\r\n              </a>\r\n            </li>\r\n\r\n          </ul>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <p>เลขที่ผู้ถือหน่วยลงทุน</p>\r\n          <span>9990244757</span>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <p>ชื่อผู้ถือหน่วยลงทุน</p>\r\n          <span>เนติวัฒน์ โชติกร</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"detail-body-wrapper\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <H4 class=\"text-left\">สับเปลี่ยนหน่วยลงทุน</H4>\r\n        <!-- <p>ขั้นตอนที่ 1 เลือกลงทุนและใส่จำนวนที่ต้องการ</p> -->\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <p>วันที่ทำรายการ</p>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <span>7 มิถุนายน 2561</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <p>กองทุนต้นทาง</p>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <span>KFCRASH - กองทุนกรุงศรีตราสารเงิน</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-custom\">\r\n            <thead>\r\n              <tr>\r\n                <th class=\"bg-blue\">\r\n                  ยอดคงเหลือ (หน่วย)\r\n                </th>\r\n                <th class=\"bg-primary\">\r\n                  ยอดคงเหลือ (บาท)\r\n                </th>\r\n                <th class=\"bg-darkbrown\">\r\n                  วันที่มีผล\r\n                </th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr>\r\n                <td>\r\n                  <a href=\"/MutualFund\" title=\"ประเภทกองทุน\">6.2456\r\n                  </a>\r\n                </td>\r\n                <td>\r\n                  <a href=\"/MutualFund/FundDetail\" title=\"ชื่อกองทุน\">74.39\r\n                  </a>\r\n                </td>\r\n                <td>\r\n                  05/04/60\r\n                  <a class=\"color-red\">(ณ วันที่ผ่านมา)</a>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>\r\n                  <a href=\"/MutualFund\" title=\"ประเภทกองทุน\">6.2456\r\n                  </a>\r\n                </td>\r\n                <td>\r\n                  <a href=\"/MutualFund/FundDetail\" title=\"ชื่อกองทุน\">N/A\r\n                  </a>\r\n                </td>\r\n                <td>\r\n                  05/04/60\r\n                  <a class=\"color-red\">(หลังหักรายการวันนี้)</a>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n\r\n          </table>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <p>สับเปลี่ยนจำนวน</p>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <span>30 หน่วย</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <p>รับเงินค่าขายคืน</p>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <span>ธนคารกรุงศรีอยุธยา จำกัด (มหาชน)</span>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <p>วันที่ทำรายการสับเปลี่ยนล่วงหน้า</p>\r\n          </div>\r\n          <div class=\"col-md-3\">\r\n            <span>10 มิถุนายน 2561</span>\r\n\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row mt-2\">\r\n          <div class=\"col-md-3 col-xs-6 offset-md-4\">\r\n            <button class=\"btn-med btn-primary\" (click)=\"checkpage('exchange-step2')\">\r\n              พิมพ์\r\n              <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\r\n            </button>\r\n          </div>\r\n          <div class=\"col-md-3 col-xs-6\">\r\n            <button class=\"btn-med btn-blue\" (click)=\"checkpage('exchange-view-list')\">\r\n              ดูรายการ\r\n              <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-md-12 mt-3\">\r\n        <span class=\"color-red no-margin\">การยืนยันรายการนี้ยังไม่ถือว่ารายการขายหน่วยลงทุนสมบูรณ์ ในกรณีที่ท่านยังมิได้ขอออกสมุดบัญชีแสดงสิทธิในหน่วยลงทุน\r\n          นายทะเบียนจะจัดส่งหนังสือรับรองสิทธิในหน่วยลงทุนให้แก่ท่าน\r\n        </span>\r\n        <span class=\"color-red no-margin\">เมื่อรายการนี้ได้ทำเสร็จสมบูรณ์ ภายใน 2 วันทำการ</span>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n<div class=\"fund-table-wrapper\" *ngIf=\"page == 'exchange-view-list'\">\r\n  <div class=\"heading-section\">\r\n    <div class=\"row\">\r\n      <div class=\"detail-head-wrapper\">\r\n        <div class=\"col-md-12 col-xs-12 icon-option mb-3\">\r\n\r\n          <ul class=\"\">\r\n            <!-- <li class=\"ico-fb\">\r\n              <a href=\"#\" title=\"facebook\">\r\n                <img src=\"/assets/Images/icons/ico-pipe.png\" />\r\n              </a>\r\n            </li>\r\n            <li class=\"ico-line\">\r\n              <a href=\"#\" title=\"line\">\r\n                <img src=\"/assets/Images/icons/ico-download.png\" />\r\n              </a>\r\n            </li> -->\r\n            <li class=\"ico-yt\">\r\n              <a href=\"#\" title=\"youtube\">\r\n                <img src=\"/assets/Images/icons/ico-print.png\" />\r\n              </a>\r\n            </li>\r\n\r\n          </ul>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n\r\n          <p>เลขที่ผู้ถือหน่วยลงทุน</p>\r\n\r\n          <div class=\"select-wrapper inline-block\">\r\n            <select name=\"ddlLink\" id=\"ddlLink\">\r\n              <option value=\"0\" selected=\"\">9990244757</option>\r\n              <option value=\"36\">9990244757</option>\r\n              <option value=\"29\">9990244757</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <p>ชื่อผู้ถือหน่วยลงทุน</p>\r\n          <span>เนติวัฒน์ โชติกร</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"detail-body-wrapper\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 mb-3\">\r\n        <H4 class=\"text-left\" style=\"display: unset;\">รายการสับเปลี่ยนหน่วยลงทุนทั้งหมด </H4>\r\n        <p style=\"display: unset;\">(รายการที่รอดำเนินการ)</p>\r\n      </div>\r\n      <div class=\"col-md-12\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-custom\">\r\n            <thead>\r\n              <tr>\r\n                <th>\r\n                  กองทุน\r\n                </th>\r\n                <th>\r\n                  วิธีชำระเงิน\r\n                </th>\r\n                <th>\r\n                  บาท (THB)\r\n                </th>\r\n                <th>\r\n                  วันและเวลาที่ทำการ\r\n                </th>\r\n                <th>\r\n                  วันที่มีผล\r\n                </th>\r\n                <th>\r\n                  แก้ไข\r\n                </th>\r\n                <th>\r\n                  ยกเลิก\r\n                </th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr>\r\n                <td>\r\n                  กองทุนเปิดกรุงศรีหุ้นระยะยาวไทยออลสตาร์ปันผล\r\n                </td>\r\n                <td>\r\n                  หักบัญชี\r\n                </td>\r\n                <td>\r\n                  20,000.00\r\n                </td>\r\n                <td>\r\n                  07/06/2561, 11:25\r\n                </td>\r\n                <td>\r\n                  07/06/2561\r\n                </td>\r\n                <td>\r\n                  <a href=\"\">\r\n                    <img src=\"/assets/Images/icons/ico-edit.png\">\r\n                  </a>\r\n                </td>\r\n                <td>\r\n                  <a href=\"\">\r\n                    <img src=\"/assets/Images/icons/ico-delete.png\" alt=\"\">\r\n                  </a>\r\n                </td>\r\n              </tr>\r\n\r\n              <tr>\r\n                <td>\r\n                  กองทุนเปิดกรุงศรีหุ้นระยะยาวไทยออลสตาร์ปันผล\r\n                </td>\r\n                <td>\r\n                  หักบัญชี\r\n                </td>\r\n                <td>\r\n                  20,000.00\r\n                </td>\r\n                <td>\r\n                  07/06/2561, 11:25\r\n                </td>\r\n                <td>\r\n                  07/06/2561\r\n                </td>\r\n                <td>\r\n                  <a href=\"\">\r\n                    <img src=\"/assets/Images/icons/ico-edit.png\">\r\n                  </a>\r\n                </td>\r\n                <td>\r\n                  <a href=\"\">\r\n                    <img src=\"/assets/Images/icons/ico-delete.png\" alt=\"\">\r\n                  </a>\r\n                </td>\r\n              </tr>\r\n\r\n              <tr>\r\n                <td>\r\n                  กองทุนเปิดกรุงศรีหุ้นระยะยาวไทยออลสตาร์ปันผล\r\n                </td>\r\n                <td>\r\n                  หักบัญชี\r\n                </td>\r\n                <td>\r\n                  20,000.00\r\n                </td>\r\n                <td>\r\n                  07/06/2561, 11:25\r\n                </td>\r\n                <td>\r\n                  07/06/2561\r\n                </td>\r\n                <td>\r\n                  <a href=\"\">\r\n                    <img src=\"/assets/Images/icons/ico-edit.png\">\r\n                  </a>\r\n                </td>\r\n                <td>\r\n                  <a href=\"\">\r\n                    <img src=\"/assets/Images/icons/ico-delete.png\" alt=\"\">\r\n                  </a>\r\n                </td>\r\n              </tr>\r\n\r\n              <tr>\r\n                <td>\r\n                  กองทุนเปิดกรุงศรีหุ้นระยะยาวไทยออลสตาร์ปันผล\r\n                </td>\r\n                <td>\r\n                  หักบัญชี\r\n                </td>\r\n                <td>\r\n                  20,000.00\r\n                </td>\r\n                <td>\r\n                  07/06/2561, 11:25\r\n                </td>\r\n                <td>\r\n                  07/06/2561\r\n                </td>\r\n                <td>\r\n                  <a href=\"\">\r\n                    <img src=\"/assets/Images/icons/ico-edit.png\">\r\n                  </a>\r\n                </td>\r\n                <td>\r\n                  <a href=\"\">\r\n                    <img src=\"/assets/Images/icons/ico-delete.png\" alt=\"\">\r\n                  </a>\r\n                </td>\r\n              </tr>\r\n\r\n              <tr>\r\n                <td>\r\n                  กองทุนเปิดกรุงศรีหุ้นระยะยาวไทยออลสตาร์ปันผล\r\n                </td>\r\n                <td>\r\n                  หักบัญชี\r\n                </td>\r\n                <td>\r\n                  20,000.00\r\n                </td>\r\n                <td>\r\n                  07/06/2561, 11:25\r\n                </td>\r\n                <td>\r\n                  07/06/2561\r\n                </td>\r\n                <td>\r\n                  <a href=\"\">\r\n                    <img src=\"/assets/Images/icons/ico-edit.png\">\r\n                  </a>\r\n                </td>\r\n                <td>\r\n                  <a href=\"\">\r\n                    <img src=\"/assets/Images/icons/ico-delete.png\" alt=\"\">\r\n                  </a>\r\n                </td>\r\n              </tr>\r\n\r\n              <tr>\r\n                <td>\r\n                  กองทุนเปิดกรุงศรีหุ้นระยะยาวไทยออลสตาร์ปันผล\r\n                </td>\r\n                <td>\r\n                  หักบัญชี\r\n                </td>\r\n                <td>\r\n                  20,000.00\r\n                </td>\r\n                <td>\r\n                  07/06/2561, 11:25\r\n                </td>\r\n                <td>\r\n                  07/06/2561\r\n                </td>\r\n                <td>\r\n                  <a href=\"\">\r\n                    <img src=\"/assets/Images/icons/ico-edit.png\">\r\n                  </a>\r\n                </td>\r\n                <td>\r\n                  <a href=\"\">\r\n                    <img src=\"/assets/Images/icons/ico-delete.png\" alt=\"\">\r\n                  </a>\r\n                </td>\r\n              </tr>\r\n\r\n              <tr>\r\n                <td>\r\n                  กองทุนเปิดกรุงศรีหุ้นระยะยาวไทยออลสตาร์ปันผล\r\n                </td>\r\n                <td>\r\n                  หักบัญชี\r\n                </td>\r\n                <td>\r\n                  20,000.00\r\n                </td>\r\n                <td>\r\n                  07/06/2561, 11:25\r\n                </td>\r\n                <td>\r\n                  07/06/2561\r\n                </td>\r\n                <td>\r\n                  <a href=\"\">\r\n                    <img src=\"/assets/Images/icons/ico-edit.png\">\r\n                  </a>\r\n                </td>\r\n                <td>\r\n                  <a href=\"\">\r\n                    <img src=\"/assets/Images/icons/ico-delete.png\" alt=\"\">\r\n                  </a>\r\n                </td>\r\n              </tr>\r\n\r\n              <tr>\r\n                <td>\r\n                  กองทุนเปิดกรุงศรีหุ้นระยะยาวไทยออลสตาร์ปันผล\r\n                </td>\r\n                <td>\r\n                  หักบัญชี\r\n                </td>\r\n                <td>\r\n                  20,000.00\r\n                </td>\r\n                <td>\r\n                  07/06/2561, 11:25\r\n                </td>\r\n                <td>\r\n                  07/06/2561\r\n                </td>\r\n                <td>\r\n                  <a href=\"\">\r\n                    <img src=\"/assets/Images/icons/ico-edit.png\">\r\n                  </a>\r\n                </td>\r\n                <td>\r\n                  <a href=\"\">\r\n                    <img src=\"/assets/Images/icons/ico-delete.png\" alt=\"\">\r\n                  </a>\r\n                </td>\r\n              </tr>\r\n\r\n              <tr>\r\n                <td>\r\n                  กองทุนเปิดกรุงศรีหุ้นระยะยาวไทยออลสตาร์ปันผล\r\n                </td>\r\n                <td>\r\n                  หักบัญชี\r\n                </td>\r\n                <td>\r\n                  20,000.00\r\n                </td>\r\n                <td>\r\n                  07/06/2561, 11:25\r\n                </td>\r\n                <td>\r\n                  07/06/2561\r\n                </td>\r\n                <td>\r\n                  <a href=\"\">\r\n                    <img src=\"/assets/Images/icons/ico-edit.png\">\r\n                  </a>\r\n                </td>\r\n                <td>\r\n                  <a href=\"\">\r\n                    <img src=\"/assets/Images/icons/ico-delete.png\" alt=\"\">\r\n                  </a>\r\n                </td>\r\n              </tr>\r\n\r\n              <tr>\r\n                <td>\r\n                  กองทุนเปิดกรุงศรีหุ้นระยะยาวไทยออลสตาร์ปันผล\r\n                </td>\r\n                <td>\r\n                  หักบัญชี\r\n                </td>\r\n                <td>\r\n                  20,000.00\r\n                </td>\r\n                <td>\r\n                  07/06/2561, 11:25\r\n                </td>\r\n                <td>\r\n                  07/06/2561\r\n                </td>\r\n                <td>\r\n                  <a href=\"\">\r\n                    <img src=\"/assets/Images/icons/ico-edit.png\">\r\n                  </a>\r\n                </td>\r\n                <td>\r\n                  <a href=\"\">\r\n                    <img src=\"/assets/Images/icons/ico-delete.png\" alt=\"\">\r\n                  </a>\r\n                </td>\r\n              </tr>\r\n\r\n            </tbody>\r\n\r\n          </table>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-md-4 offset-md-8 no-padding\">\r\n        <div class=\"list-pagination\">\r\n          <div class=\"holder\">\r\n            <!-- <a class=\"jp-first jp-disabled\">First</a> -->\r\n            <a class=\"jp-previous jp-disabled\">previous</a>\r\n            <a class=\"jp-current\">1</a>\r\n            <!-- <span class=\"jp-hidden\">...</span> -->\r\n            <a class=\"\">2</a>\r\n            <a class=\"\">3</a>\r\n            <a class=\"jp-next\">next</a>\r\n            <!-- <a class=\"jp-last\">Last</a> -->\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/transaction/exchange/exchange.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/transaction/exchange/exchange.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/transaction/exchange/exchange.component.ts":
/*!************************************************************!*\
  !*** ./src/app/transaction/exchange/exchange.component.ts ***!
  \************************************************************/
/*! exports provided: ExchangeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExchangeComponent", function() { return ExchangeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ExchangeComponent = /** @class */ (function () {
    function ExchangeComponent() {
        this.page = "exchange";
    }
    ExchangeComponent.prototype.ngOnInit = function () {
        $('#mutual-tab-menu').find('li').removeClass('current');
        $('#mutual-tab-menu').find('li#menu3').addClass('current');
    };
    ExchangeComponent.prototype.checkpage = function (page) {
        window.scroll(0, 0);
        console.log(page);
        switch (page) {
            case 'exchange':
                this.page = "exchange";
                break;
            case 'exchange-step1':
                this.page = "exchange-step1";
                break;
            case 'exchange-step2':
                this.page = "exchange-step2";
                break;
            case 'exchange-view-list':
                this.page = "exchange-view-list";
                break;
            default:
                this.page = "exchange";
                console.log(this.page);
                break;
        }
    };
    ExchangeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-exchange',
            template: __webpack_require__(/*! ./exchange.component.html */ "./src/app/transaction/exchange/exchange.component.html"),
            styles: [__webpack_require__(/*! ./exchange.component.scss */ "./src/app/transaction/exchange/exchange.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ExchangeComponent);
    return ExchangeComponent;
}());



/***/ }),

/***/ "./src/app/transaction/purchase-for-sell/purchase-for-sell.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/transaction/purchase-for-sell/purchase-for-sell.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"fund-table-wrapper\" *ngIf=\"page == 'purchase-for-sell'\">\r\n  <div class=\"heading-section\">\r\n    <div class=\"row\">\r\n      <div class=\"detail-head-wrapper\">\r\n        <div class=\"col-md-12 col-xs-12 icon-option mb-3\">\r\n\r\n          <ul class=\"\">\r\n            <!-- <li class=\"ico-fb\">\r\n              <a href=\"#\" title=\"facebook\">\r\n                <img src=\"/assets/Images/icons/ico-pipe.png\" />\r\n              </a>\r\n            </li>\r\n            <li class=\"ico-line\">\r\n              <a href=\"#\" title=\"line\">\r\n                <img src=\"/assets/Images/icons/ico-download.png\" />\r\n              </a>\r\n            </li> -->\r\n            <li class=\"ico-yt\">\r\n              <a href=\"#\" title=\"youtube\">\r\n                <img src=\"/assets/Images/icons/ico-print.png\" />\r\n              </a>\r\n            </li>\r\n\r\n          </ul>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n\r\n          <p>เลขที่ผู้ถือหน่วยลงทุน</p>\r\n\r\n          <div class=\"select-wrapper inline-block\">\r\n            <select name=\"ddlLink\" id=\"ddlLink\">\r\n              <option value=\"0\" selected=\"\">9990244757</option>\r\n              <option value=\"36\">9990244757</option>\r\n              <option value=\"29\">9990244757</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <p>ชื่อผู้ถือหน่วยลงทุน</p>\r\n          <span>เนติวัฒน์ โชติกร</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"detail-body-wrapper\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <H4 class=\"text-left\">รายการซื้อเพื่อขาย</H4>\r\n        <!-- <p>ขั้นตอนที่ 1 เลือกลงทุนและใส่จำนวนที่ต้องการ</p> -->\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <p>วันที่ทำรายการ</p>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <span>7 มิถุนายน 2561</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <span>กองทุนต้นทาง</span>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <div class=\"select-wrapper inline-block\">\r\n\r\n              <select name=\"ddlLink\" id=\"ddlLink\">\r\n                <option value=\"0\" selected=\"\">KFCRASH - กองทุนกรุงศรีตราสารเงิน</option>\r\n                <option value=\"36\">KFCRASH - กองทุนกรุงศรีตราสารเงิน</option>\r\n                <option value=\"29\">KFCRASH - กองทุนกรุงศรีตราสารเงิน</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-custom\">\r\n            <thead>\r\n              <tr>\r\n                <th class=\"bg-blue\">\r\n                  ยอดคงเหลือ (หน่วย)\r\n                </th>\r\n                <th class=\"bg-primary\">\r\n                  ยอดคงเหลือ (บาท)\r\n                </th>\r\n                <th class=\"bg-darkbrown\">\r\n                  วันที่มีผล\r\n                </th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr>\r\n                <td>\r\n                  <a href=\"/MutualFund\" title=\"ประเภทกองทุน\">6.2456\r\n                  </a>\r\n                </td>\r\n                <td>\r\n                  <a href=\"/MutualFund/FundDetail\" title=\"ชื่อกองทุน\">74.39\r\n                  </a>\r\n                </td>\r\n                <td>\r\n                  05/04/60\r\n                  <a class=\"color-red\">(ณ วันที่ผ่านมา)</a>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>\r\n                  <a href=\"/MutualFund\" title=\"ประเภทกองทุน\">6.2456\r\n                  </a>\r\n                </td>\r\n                <td>\r\n                  <a href=\"/MutualFund/FundDetail\" title=\"ชื่อกองทุน\">N/A\r\n                  </a>\r\n                </td>\r\n                <td>\r\n                  05/04/60\r\n                  <a class=\"color-red\">(หลังหักรายการวันนี้)</a>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n\r\n          </table>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <span>ซื้อเพื่อขายจำนวน</span>\r\n          </div>\r\n          <div class=\"col-md-3 col-xs-6\">\r\n            <div class=\"input-wrapper \">\r\n              <input id=\"name\" name=\"name\" maxlength=\"30\" type=\"text\" class=\"bg-gray\" placeholder=\"0\">\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-3 col-xs-6\">\r\n            <div class=\"select-wrapper inline-block\">\r\n\r\n              <select name=\"ddlLink\" id=\"ddlLink\">\r\n                <option value=\"0\" selected=\"\">บาท</option>\r\n                <option value=\"36\">เยน</option>\r\n                <option value=\"29\">ดอลล่า</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <span>กองทุนปลายทาง</span>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <div class=\"select-wrapper inline-block\">\r\n\r\n              <select name=\"ddlLink\" id=\"ddlLink\">\r\n                <option value=\"0\" selected=\"\">ธนาคารกรุงศรีอยุธยา จำกัด (มหาชน)</option>\r\n                <option value=\"36\">ธนาคารกรุงศรีอยุธยา จำกัด (มหาชน)</option>\r\n                <option value=\"29\">ธนาคารกรุงศรีอยุธยา จำกัด (มหาชน)</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <span>วันที่ทำรายการซื้อเพื่อขายล่วงหน้า</span>\r\n          </div>\r\n          <div class=\"col-md-3\">\r\n\r\n            <div class=\"input-wrapper\">\r\n              <input class=\"form-control textinput dateinput bg-gray\" id=\"startDate\" placeholder=\"วว/ดด/ปปปป\" name=\"date\" type=\"text\">\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-md-3 col-xs-6 offset-md-4\">\r\n            <button class=\"btn-med btn-primary\" (click)=\"checkpage('purchase-for-sell-step1')\">\r\n              ตกลง\r\n              <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\r\n            </button>\r\n          </div>\r\n          <div class=\"col-md-3 col-xs-6\">\r\n            <button class=\"btn-med btn-cancel\" (click)=\"checkpage('purchase-for-sell')\">\r\n              ยกเลิก\r\n              <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\r\n            </button>\r\n          </div>\r\n        </div>\r\n\r\n\r\n      </div>\r\n\r\n\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"detail-footer-wrapper\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6 text-left\">\r\n        <h4>รายการซื้อเพื่อขายหน่วยลงทุน <br class=\"d-block d-sm-none\"/><label>(รายการที่รอดำเนินการ)</label></h4>\r\n      </div>\r\n      <div class=\"col-md-6 text-md-right\">\r\n        <i class=\"fa fa-angle-right mr-1\" aria-hidden=\"true\"></i><label>ดูรายการทั้งหมด</label>\r\n      </div>\r\n      <div class=\"col-md-12 mt-5 text-center\">\r\n        <p>ไม่มีรายการที่รอดำเนินงาน</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"fund-table-wrapper\" *ngIf=\"page == 'purchase-for-sell-step1'\">\r\n  <div class=\"heading-section\">\r\n    <div class=\"row\">\r\n      <div class=\"detail-head-wrapper\">\r\n        <div class=\"col-md-12 col-xs-12 icon-option mb-3\">\r\n\r\n          <ul class=\"\">\r\n            <!-- <li class=\"ico-fb\">\r\n              <a href=\"#\" title=\"facebook\">\r\n                <img src=\"/assets/Images/icons/ico-pipe.png\" />\r\n              </a>\r\n            </li>\r\n            <li class=\"ico-line\">\r\n              <a href=\"#\" title=\"line\">\r\n                <img src=\"/assets/Images/icons/ico-download.png\" />\r\n              </a>\r\n            </li> -->\r\n            <li class=\"ico-yt\">\r\n              <a href=\"#\" title=\"youtube\">\r\n                <img src=\"/assets/Images/icons/ico-print.png\" />\r\n              </a>\r\n            </li>\r\n\r\n          </ul>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <p>เลขที่ผู้ถือหน่วยลงทุน</p>\r\n          <span>9990244757</span>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <p>ชื่อผู้ถือหน่วยลงทุน</p>\r\n          <span>เนติวัฒน์ โชติกร</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"detail-body-wrapper\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <H4 class=\"text-left\">รายการซื้อเพื่อขาย</H4>\r\n        <!-- <p>ขั้นตอนที่ 1 เลือกลงทุนและใส่จำนวนที่ต้องการ</p> -->\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <p>วันที่ทำรายการ</p>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <span>7 มิถุนายน 2561</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <p>กองทุนต้นทาง</p>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <span>KFCRASH - กองทุนกรุงศรีตราสารเงิน</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-custom\">\r\n            <thead>\r\n              <tr>\r\n                <th class=\"bg-blue\">\r\n                  ยอดคงเหลือ (หน่วย)\r\n                </th>\r\n                <th class=\"bg-primary\">\r\n                  ยอดคงเหลือ (บาท)\r\n                </th>\r\n                <th class=\"bg-darkbrown\">\r\n                  วันที่มีผล\r\n                </th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr>\r\n                <td>\r\n                  <a href=\"/MutualFund\" title=\"ประเภทกองทุน\">6.2456\r\n                  </a>\r\n                </td>\r\n                <td>\r\n                  <a href=\"/MutualFund/FundDetail\" title=\"ชื่อกองทุน\">74.39\r\n                  </a>\r\n                </td>\r\n                <td>\r\n                  05/04/60\r\n                  <a class=\"color-red\">(ณ วันที่ผ่านมา)</a>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>\r\n                  <a href=\"/MutualFund\" title=\"ประเภทกองทุน\">6.2456\r\n                  </a>\r\n                </td>\r\n                <td>\r\n                  <a href=\"/MutualFund/FundDetail\" title=\"ชื่อกองทุน\">N/A\r\n                  </a>\r\n                </td>\r\n                <td>\r\n                  05/04/60\r\n                  <a class=\"color-red\">(หลังหักรายการวันนี้)</a>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n\r\n          </table>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <p>ซื้อเพื่อขายจำนวน</p>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <span>30 หน่วย</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <p>กองทุนปลายทาง</p>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <span>ธนคารกรุงศรีอยุธยา จำกัด (มหาชน)</span>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <p>วันที่รายการมีผล</p>\r\n          </div>\r\n          <div class=\"col-md-3\">\r\n            <span>10 มิถุนายน 2561</span>\r\n\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row mt-2\">\r\n          <div class=\"col-md-3 col-xs-6 offset-md-4\">\r\n            <button class=\"btn-med btn-primary\" (click)=\"checkpage('purchase-for-sell-step2')\">\r\n              ยืนยัน\r\n              <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\r\n            </button>\r\n          </div>\r\n          <div class=\"col-md-3 col-xs-6 \">\r\n            <button class=\"btn-med btn-back-login\" (click)=\"checkpage('purchase-for-sell-step1')\">\r\n              ย้อนกลับ\r\n              <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n<div class=\"fund-table-wrapper\" *ngIf=\"page == 'purchase-for-sell-step2'\">\r\n  <div class=\"heading-section\">\r\n    <div class=\"row\">\r\n      <div class=\"detail-head-wrapper\">\r\n        <div class=\"col-md-12 col-xs-12 icon-option mb-3\">\r\n\r\n          <ul class=\"\">\r\n            <!-- <li class=\"ico-fb\">\r\n              <a href=\"#\" title=\"facebook\">\r\n                <img src=\"/assets/Images/icons/ico-pipe.png\" />\r\n              </a>\r\n            </li>\r\n            <li class=\"ico-line\">\r\n              <a href=\"#\" title=\"line\">\r\n                <img src=\"/assets/Images/icons/ico-download.png\" />\r\n              </a>\r\n            </li> -->\r\n            <li class=\"ico-yt\">\r\n              <a href=\"#\" title=\"youtube\">\r\n                <img src=\"/assets/Images/icons/ico-print.png\" />\r\n              </a>\r\n            </li>\r\n\r\n          </ul>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <p>เลขที่ผู้ถือหน่วยลงทุน</p>\r\n          <span>9990244757</span>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <p>ชื่อผู้ถือหน่วยลงทุน</p>\r\n          <span>เนติวัฒน์ โชติกร</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"detail-body-wrapper\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <H4 class=\"text-left\">รายการซื้อเพื่อขาย</H4>\r\n        <!-- <p>ขั้นตอนที่ 1 เลือกลงทุนและใส่จำนวนที่ต้องการ</p> -->\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <p>วันที่ทำรายการ</p>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <span>7 มิถุนายน 2561</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <p>กองทุนต้นทาง</p>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <span>KFCRASH - กองทุนกรุงศรีตราสารเงิน</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-custom\">\r\n            <thead>\r\n              <tr>\r\n                <th class=\"bg-blue\">\r\n                  ยอดคงเหลือ (หน่วย)\r\n                </th>\r\n                <th class=\"bg-primary\">\r\n                  ยอดคงเหลือ (บาท)\r\n                </th>\r\n                <th class=\"bg-darkbrown\">\r\n                  วันที่มีผล\r\n                </th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr>\r\n                <td>\r\n                  <a href=\"/MutualFund\" title=\"ประเภทกองทุน\">6.2456\r\n                  </a>\r\n                </td>\r\n                <td>\r\n                  <a href=\"/MutualFund/FundDetail\" title=\"ชื่อกองทุน\">74.39\r\n                  </a>\r\n                </td>\r\n                <td>\r\n                  05/04/60\r\n                  <a class=\"color-red\">(ณ วันที่ผ่านมา)</a>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>\r\n                  <a href=\"/MutualFund\" title=\"ประเภทกองทุน\">6.2456\r\n                  </a>\r\n                </td>\r\n                <td>\r\n                  <a href=\"/MutualFund/FundDetail\" title=\"ชื่อกองทุน\">N/A\r\n                  </a>\r\n                </td>\r\n                <td>\r\n                  05/04/60\r\n                  <a class=\"color-red\">(หลังหักรายการวันนี้)</a>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n\r\n          </table>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <p>ซื้อเพื่อขายจำนวน</p>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <span>30 หน่วย</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <p>กองทุนปลายทาง</p>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <span>ธนคารกรุงศรีอยุธยา จำกัด (มหาชน)</span>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <p>วันทำรายการซื้อเพื่อขายล่วงหน้า</p>\r\n          </div>\r\n          <div class=\"col-md-3\">\r\n            <span>10 มิถุนายน 2561</span>\r\n\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row mt-2\">\r\n          <div class=\"col-md-3 col-xs-6  offset-md-4\">\r\n            <button class=\"btn-med btn-primary\" (click)=\"checkpage('sell-step2')\">\r\n              พิมพ์\r\n              <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\r\n            </button>\r\n          </div>\r\n          <div class=\"col-md-3 col-xs-6 \">\r\n            <button class=\"btn-med btn-blue\" (click)=\"checkpage('purchase-for-sell-view-list')\">\r\n              ดูรายการ\r\n              <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-md-12 mt-3\">\r\n        <span class=\"color-red no-margin\">การยืนยันรายการนี้ยังไม่ถือว่ารายการขายหน่วยลงทุนสมบูรณ์ ในกรณีที่ท่านยังมิได้ขอออกสมุดบัญชีแสดงสิทธิในหน่วยลงทุน\r\n          นายทะเบียนจะจัดส่งหนังสือรับรองสิทธิในหน่วยลงทุนให้แก่ท่าน\r\n        </span>\r\n        <span class=\"color-red no-margin\">เมื่อรายการนี้ได้ทำเสร็จสมบูรณ์ ภายใน 2 วันทำการ</span>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n<div class=\"fund-table-wrapper\" *ngIf=\"page == 'purchase-for-sell-view-list'\">\r\n  <div class=\"heading-section\">\r\n    <div class=\"row\">\r\n      <div class=\"detail-head-wrapper\">\r\n        <div class=\"col-md-12 col-xs-12 icon-option mb-3\">\r\n\r\n          <ul class=\"\">\r\n            <!-- <li class=\"ico-fb\">\r\n              <a href=\"#\" title=\"facebook\">\r\n                <img src=\"/assets/Images/icons/ico-pipe.png\" />\r\n              </a>\r\n            </li>\r\n            <li class=\"ico-line\">\r\n              <a href=\"#\" title=\"line\">\r\n                <img src=\"/assets/Images/icons/ico-download.png\" />\r\n              </a>\r\n            </li> -->\r\n            <li class=\"ico-yt\">\r\n              <a href=\"#\" title=\"youtube\">\r\n                <img src=\"/assets/Images/icons/ico-print.png\" />\r\n              </a>\r\n            </li>\r\n\r\n          </ul>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n\r\n          <p>เลขที่ผู้ถือหน่วยลงทุน</p>\r\n\r\n          <div class=\"select-wrapper inline-block\">\r\n            <select name=\"ddlLink\" id=\"ddlLink\">\r\n              <option value=\"0\" selected=\"\">9990244757</option>\r\n              <option value=\"36\">9990244757</option>\r\n              <option value=\"29\">9990244757</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <p>ชื่อผู้ถือหน่วยลงทุน</p>\r\n          <span>เนติวัฒน์ โชติกร</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"detail-body-wrapper\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 mb-3\">\r\n        <H4 class=\"text-left\" style=\"display: unset;\">รายการซื้อเพื่อขายหน่วยลงทุนทั้งหมด </H4>\r\n        <p style=\"display: unset;\">(รายการที่รอดำเนินการ)</p>\r\n      </div>\r\n      <div class=\"col-md-12\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-custom\">\r\n            <thead>\r\n              <tr>\r\n                <th>\r\n                  กองทุน\r\n                </th>\r\n                <th>\r\n                  วิธีชำระเงิน\r\n                </th>\r\n                <th>\r\n                  บาท (THB)\r\n                </th>\r\n                <th>\r\n                  วันและเวลาที่ทำการ\r\n                </th>\r\n                <th>\r\n                  วันที่มีผล\r\n                </th>\r\n                <th>\r\n                  แก้ไข\r\n                </th>\r\n                <th>\r\n                  ยกเลิก\r\n                </th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr>\r\n                <td>\r\n                  กองทุนเปิดกรุงศรีหุ้นระยะยาวไทยออลสตาร์ปันผล\r\n                </td>\r\n                <td>\r\n                  หักบัญชี\r\n                </td>\r\n                <td>\r\n                  20,000.00\r\n                </td>\r\n                <td>\r\n                  07/06/2561, 11:25\r\n                </td>\r\n                <td>\r\n                  07/06/2561\r\n                </td>\r\n                <td>\r\n                  <a href=\"\">\r\n                    <img src=\"/assets/Images/icons/ico-edit.png\">\r\n                  </a>\r\n                </td>\r\n                <td>\r\n                  <a href=\"\">\r\n                    <img src=\"/assets/Images/icons/ico-delete.png\" alt=\"\">\r\n                  </a>\r\n                </td>\r\n              </tr>\r\n\r\n              <tr>\r\n                <td>\r\n                  กองทุนเปิดกรุงศรีหุ้นระยะยาวไทยออลสตาร์ปันผล\r\n                </td>\r\n                <td>\r\n                  หักบัญชี\r\n                </td>\r\n                <td>\r\n                  20,000.00\r\n                </td>\r\n                <td>\r\n                  07/06/2561, 11:25\r\n                </td>\r\n                <td>\r\n                  07/06/2561\r\n                </td>\r\n                <td>\r\n                  <a href=\"\">\r\n                    <img src=\"/assets/Images/icons/ico-edit.png\">\r\n                  </a>\r\n                </td>\r\n                <td>\r\n                  <a href=\"\">\r\n                    <img src=\"/assets/Images/icons/ico-delete.png\" alt=\"\">\r\n                  </a>\r\n                </td>\r\n              </tr>\r\n\r\n              <tr>\r\n                <td>\r\n                  กองทุนเปิดกรุงศรีหุ้นระยะยาวไทยออลสตาร์ปันผล\r\n                </td>\r\n                <td>\r\n                  หักบัญชี\r\n                </td>\r\n                <td>\r\n                  20,000.00\r\n                </td>\r\n                <td>\r\n                  07/06/2561, 11:25\r\n                </td>\r\n                <td>\r\n                  07/06/2561\r\n                </td>\r\n                <td>\r\n                  <a href=\"\">\r\n                    <img src=\"/assets/Images/icons/ico-edit.png\">\r\n                  </a>\r\n                </td>\r\n                <td>\r\n                  <a href=\"\">\r\n                    <img src=\"/assets/Images/icons/ico-delete.png\" alt=\"\">\r\n                  </a>\r\n                </td>\r\n              </tr>\r\n\r\n              <tr>\r\n                <td>\r\n                  กองทุนเปิดกรุงศรีหุ้นระยะยาวไทยออลสตาร์ปันผล\r\n                </td>\r\n                <td>\r\n                  หักบัญชี\r\n                </td>\r\n                <td>\r\n                  20,000.00\r\n                </td>\r\n                <td>\r\n                  07/06/2561, 11:25\r\n                </td>\r\n                <td>\r\n                  07/06/2561\r\n                </td>\r\n                <td>\r\n                  <a href=\"\">\r\n                    <img src=\"/assets/Images/icons/ico-edit.png\">\r\n                  </a>\r\n                </td>\r\n                <td>\r\n                  <a href=\"\">\r\n                    <img src=\"/assets/Images/icons/ico-delete.png\" alt=\"\">\r\n                  </a>\r\n                </td>\r\n              </tr>\r\n\r\n              <tr>\r\n                <td>\r\n                  กองทุนเปิดกรุงศรีหุ้นระยะยาวไทยออลสตาร์ปันผล\r\n                </td>\r\n                <td>\r\n                  หักบัญชี\r\n                </td>\r\n                <td>\r\n                  20,000.00\r\n                </td>\r\n                <td>\r\n                  07/06/2561, 11:25\r\n                </td>\r\n                <td>\r\n                  07/06/2561\r\n                </td>\r\n                <td>\r\n                  <a href=\"\">\r\n                    <img src=\"/assets/Images/icons/ico-edit.png\">\r\n                  </a>\r\n                </td>\r\n                <td>\r\n                  <a href=\"\">\r\n                    <img src=\"/assets/Images/icons/ico-delete.png\" alt=\"\">\r\n                  </a>\r\n                </td>\r\n              </tr>\r\n\r\n              <tr>\r\n                <td>\r\n                  กองทุนเปิดกรุงศรีหุ้นระยะยาวไทยออลสตาร์ปันผล\r\n                </td>\r\n                <td>\r\n                  หักบัญชี\r\n                </td>\r\n                <td>\r\n                  20,000.00\r\n                </td>\r\n                <td>\r\n                  07/06/2561, 11:25\r\n                </td>\r\n                <td>\r\n                  07/06/2561\r\n                </td>\r\n                <td>\r\n                  <a href=\"\">\r\n                    <img src=\"/assets/Images/icons/ico-edit.png\">\r\n                  </a>\r\n                </td>\r\n                <td>\r\n                  <a href=\"\">\r\n                    <img src=\"/assets/Images/icons/ico-delete.png\" alt=\"\">\r\n                  </a>\r\n                </td>\r\n              </tr>\r\n\r\n              <tr>\r\n                <td>\r\n                  กองทุนเปิดกรุงศรีหุ้นระยะยาวไทยออลสตาร์ปันผล\r\n                </td>\r\n                <td>\r\n                  หักบัญชี\r\n                </td>\r\n                <td>\r\n                  20,000.00\r\n                </td>\r\n                <td>\r\n                  07/06/2561, 11:25\r\n                </td>\r\n                <td>\r\n                  07/06/2561\r\n                </td>\r\n                <td>\r\n                  <a href=\"\">\r\n                    <img src=\"/assets/Images/icons/ico-edit.png\">\r\n                  </a>\r\n                </td>\r\n                <td>\r\n                  <a href=\"\">\r\n                    <img src=\"/assets/Images/icons/ico-delete.png\" alt=\"\">\r\n                  </a>\r\n                </td>\r\n              </tr>\r\n\r\n              <tr>\r\n                <td>\r\n                  กองทุนเปิดกรุงศรีหุ้นระยะยาวไทยออลสตาร์ปันผล\r\n                </td>\r\n                <td>\r\n                  หักบัญชี\r\n                </td>\r\n                <td>\r\n                  20,000.00\r\n                </td>\r\n                <td>\r\n                  07/06/2561, 11:25\r\n                </td>\r\n                <td>\r\n                  07/06/2561\r\n                </td>\r\n                <td>\r\n                  <a href=\"\">\r\n                    <img src=\"/assets/Images/icons/ico-edit.png\">\r\n                  </a>\r\n                </td>\r\n                <td>\r\n                  <a href=\"\">\r\n                    <img src=\"/assets/Images/icons/ico-delete.png\" alt=\"\">\r\n                  </a>\r\n                </td>\r\n              </tr>\r\n\r\n              <tr>\r\n                <td>\r\n                  กองทุนเปิดกรุงศรีหุ้นระยะยาวไทยออลสตาร์ปันผล\r\n                </td>\r\n                <td>\r\n                  หักบัญชี\r\n                </td>\r\n                <td>\r\n                  20,000.00\r\n                </td>\r\n                <td>\r\n                  07/06/2561, 11:25\r\n                </td>\r\n                <td>\r\n                  07/06/2561\r\n                </td>\r\n                <td>\r\n                  <a href=\"\">\r\n                    <img src=\"/assets/Images/icons/ico-edit.png\">\r\n                  </a>\r\n                </td>\r\n                <td>\r\n                  <a href=\"\">\r\n                    <img src=\"/assets/Images/icons/ico-delete.png\" alt=\"\">\r\n                  </a>\r\n                </td>\r\n              </tr>\r\n\r\n              <tr>\r\n                <td>\r\n                  กองทุนเปิดกรุงศรีหุ้นระยะยาวไทยออลสตาร์ปันผล\r\n                </td>\r\n                <td>\r\n                  หักบัญชี\r\n                </td>\r\n                <td>\r\n                  20,000.00\r\n                </td>\r\n                <td>\r\n                  07/06/2561, 11:25\r\n                </td>\r\n                <td>\r\n                  07/06/2561\r\n                </td>\r\n                <td>\r\n                  <a href=\"\">\r\n                    <img src=\"/assets/Images/icons/ico-edit.png\">\r\n                  </a>\r\n                </td>\r\n                <td>\r\n                  <a href=\"\">\r\n                    <img src=\"/assets/Images/icons/ico-delete.png\" alt=\"\">\r\n                  </a>\r\n                </td>\r\n              </tr>\r\n\r\n            </tbody>\r\n\r\n          </table>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-md-4 offset-md-8 no-padding\">\r\n        <div class=\"list-pagination\">\r\n          <div class=\"holder\">\r\n            <!-- <a class=\"jp-first jp-disabled\">First</a> -->\r\n            <a class=\"jp-previous jp-disabled\">previous</a>\r\n            <a class=\"jp-current\">1</a>\r\n            <!-- <span class=\"jp-hidden\">...</span> -->\r\n            <a class=\"\">2</a>\r\n            <a class=\"\">3</a>\r\n            <a class=\"jp-next\">next</a>\r\n            <!-- <a class=\"jp-last\">Last</a> -->\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/transaction/purchase-for-sell/purchase-for-sell.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/transaction/purchase-for-sell/purchase-for-sell.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/transaction/purchase-for-sell/purchase-for-sell.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/transaction/purchase-for-sell/purchase-for-sell.component.ts ***!
  \******************************************************************************/
/*! exports provided: PurchaseForSellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseForSellComponent", function() { return PurchaseForSellComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PurchaseForSellComponent = /** @class */ (function () {
    function PurchaseForSellComponent() {
        this.page = "purchase-for-sell";
    }
    PurchaseForSellComponent.prototype.ngOnInit = function () {
        $('#mutual-tab-menu').find('li').removeClass('current');
        $('#mutual-tab-menu').find('li#menu4').addClass('current');
    };
    PurchaseForSellComponent.prototype.checkpage = function (page) {
        window.scroll(0, 0);
        console.log(page);
        switch (page) {
            case 'purchase-for-sell':
                this.page = "purchase-for-sell";
                break;
            case 'purchase-for-sell-step1':
                this.page = "purchase-for-sell-step1";
                break;
            case 'purchase-for-sell-step2':
                this.page = "purchase-for-sell-step2";
                break;
            case 'purchase-for-sell-view-list':
                this.page = "purchase-for-sell-view-list";
                break;
            default:
                this.page = "purchase-for-sell";
                console.log(this.page);
                break;
        }
    };
    PurchaseForSellComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-purchase-for-sell',
            template: __webpack_require__(/*! ./purchase-for-sell.component.html */ "./src/app/transaction/purchase-for-sell/purchase-for-sell.component.html"),
            styles: [__webpack_require__(/*! ./purchase-for-sell.component.scss */ "./src/app/transaction/purchase-for-sell/purchase-for-sell.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PurchaseForSellComponent);
    return PurchaseForSellComponent;
}());



/***/ }),

/***/ "./src/app/transaction/purchase/purchase.component.html":
/*!**************************************************************!*\
  !*** ./src/app/transaction/purchase/purchase.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"fund-table-wrapper\" *ngIf=\"page == 'purchase'\">\r\n  <div class=\"heading-section\">\r\n    <div class=\"row\">\r\n      <div class=\"detail-head-wrapper\">\r\n        <div class=\"col-md-12 col-xs-12 icon-option mb-3\">\r\n\r\n          <ul class=\"\">\r\n            <!-- <li class=\"ico-fb\">\r\n              <a href=\"#\" title=\"facebook\">\r\n                <img src=\"/assets/Images/icons/ico-pipe.png\" />\r\n              </a>\r\n            </li>\r\n            <li class=\"ico-line\">\r\n              <a href=\"#\" title=\"line\">\r\n                <img src=\"/assets/Images/icons/ico-download.png\" />\r\n              </a>\r\n            </li> -->\r\n            <li class=\"ico-yt\">\r\n              <a href=\"#\" title=\"youtube\">\r\n                <img src=\"/assets/Images/icons/ico-print.png\" />\r\n              </a>\r\n            </li>\r\n\r\n          </ul>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n\r\n          <p>เลขที่ผู้ถือหน่วยลงทุน</p>\r\n\r\n          <div class=\"select-wrapper inline-block\">\r\n            <select name=\"ddlLink\" id=\"ddlLink\">\r\n              <option value=\"0\" selected=\"\">9990244757</option>\r\n              <option value=\"36\">9990244757</option>\r\n              <option value=\"29\">9990244757</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <p>ชื่อผู้ถือหน่วยลงทุน</p>\r\n          <span>เนติวัฒน์ โชติกร</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"detail-body-wrapper\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <H4 class=\"text-left\">ซื้อหน่วยลงทุน</H4>\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <p>วันที่ทำรายการ</p>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <span>7 มิถุนายน 2561</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <p>เลือกวิธีชำระเงิน</p>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <span>หักบัญชีธนาคาร</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <span>กองทุน</span>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <div class=\"select-wrapper inline-block\">\r\n              <select name=\"ddlLink\" id=\"ddlLink\">\r\n                <option value=\"0\" selected=\"\">KFCRASH - กองทุนกรุงศรีตราสารเงิน</option>\r\n                <option value=\"36\">KFCRASH - กองทุนกรุงศรีตราสารเงิน</option>\r\n                <option value=\"29\">KFCRASH - กองทุนกรุงศรีตราสารเงิน</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <span>จำนวน</span>\r\n          </div>\r\n\r\n          <div class=\"col-md-3 col-xs-6\">\r\n            <div class=\"input-wrapper \">\r\n              <input id=\"name\" name=\"name\" maxlength=\"30\" type=\"text\" class=\"bg-gray\" value=\"80,000\">\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-3 col-xs-6\">\r\n            <div class=\"select-wrapper inline-block\">\r\n\r\n              <select name=\"ddlLink\" id=\"ddlLink\">\r\n                <option value=\"0\" selected=\"\">บาท</option>\r\n                <option value=\"36\">เยน</option>\r\n                <option value=\"29\">ดอลล่า</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <span>หักบัญชีธนาคาร</span>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <div class=\"select-wrapper inline-block\">\r\n\r\n              <select name=\"ddlLink\" id=\"ddlLink\">\r\n                <option value=\"0\" selected=\"\">ธนาคารกรุงศรีอยุธยา จำกัด (มหาชน)</option>\r\n                <option value=\"36\">ธนาคารกรุงศรีอยุธยา จำกัด (มหาชน)</option>\r\n                <option value=\"29\">ธนาคารกรุงศรีอยุธยา จำกัด (มหาชน)</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <span>วันที่ทำรายการซื้อล่วงหน้า</span>\r\n          </div>\r\n          <div class=\"col-md-3\">\r\n            <div class=\"input-wrapper\">\r\n              <input class=\"form-control textinput dateinput bg-gray\" id=\"startDate\" placeholder=\"วว/ดด/ปปปป\" name=\"date\" type=\"text\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-md-3 col-xs-6 offset-md-4\">\r\n            <button class=\"btn-med btn-primary\" (click)=\"checkpage('purchase-step1')\">\r\n              ตกลง\r\n              <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\r\n            </button>\r\n          </div>\r\n          <div class=\"col-md-3 col-xs-6\">\r\n            <button class=\"btn-med btn-cancel\" (click)=\"checkpage('signup1')\">\r\n              ยกเลิก\r\n              <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\r\n            </button>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"detail-footer-wrapper\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6 text-left\">\r\n        <h4>รายการซื้อหน่วยลงทุน <br class=\"d-block d-sm-none\"/><label>(รายการที่รอดำเนินการ)</label></h4>\r\n      </div>\r\n      <div class=\"col-md-6 text-md-right\">\r\n        <i class=\"fa fa-angle-right mr-1\" aria-hidden=\"true\"></i><label>ดูรายการทั้งหมด</label>\r\n      </div>\r\n      <div class=\"col-md-12 mt-2\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-custom\">\r\n            <thead>\r\n              <tr>\r\n                <th>\r\n                  กองทุน\r\n                </th>\r\n                <th>\r\n                  วิธีชำระเงิน\r\n                </th>\r\n                <th>\r\n                  บาท (THB)\r\n                </th>\r\n                <th>\r\n                  วันและเวลาที่ทำรายการ\r\n                </th>\r\n                <th>\r\n                  วันที่มีผล\r\n                </th>\r\n                <th>\r\n                  แก้ไข\r\n                </th>\r\n                <th>\r\n                  ยกเลิก\r\n                </th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr>\r\n                <td class=\"text-left\">\r\n                  กองทุนเปิดกรุงศรีหุ้นระยะยาวไทยออลสตาร์ปันผล\r\n                </td>\r\n                <td>\r\n                  หักบัญชี\r\n                </td>\r\n                <td class=\"text-right\">\r\n                  20,000.00\r\n                </td>\r\n                <td>\r\n                  07/06/2561, 11:25\r\n                </td>\r\n                <td>\r\n                  07/06/2561\r\n                </td>\r\n                <td>\r\n                  <a href=\"\">\r\n                    <img src=\"/assets/Images/icons/ico-edit.png\">\r\n                  </a>\r\n                </td>\r\n                <td>\r\n                  <a>\r\n                    <img src=\"/assets/Images/icons/ico-delete.png\" alt=\"\" data-toggle=\"modal\" data-target=\"#disclaimer\">\r\n                  </a>\r\n                </td>\r\n\r\n              </tr>\r\n              <tr>\r\n                <td class=\"text-left\">\r\n                  กองทุนเปิดกรุงศรีหุ้นระยะยาวไทยออลสตาร์ปันผล\r\n                </td>\r\n                <td>\r\n                  หักบัญชี\r\n                </td>\r\n                <td class=\"text-right\">\r\n                  20,000.00\r\n                </td>\r\n                <td>\r\n                  07/06/2561, 11:25\r\n                </td>\r\n                <td>\r\n                  07/06/2561\r\n                </td>\r\n                <td>\r\n                  <a>\r\n                    <img src=\"/assets/Images/icons/ico-edit.png\">\r\n                  </a>\r\n                </td>\r\n                <td>\r\n                  <a>\r\n                    <img src=\"/assets/Images/icons/ico-delete.png\" alt=\"\" data-toggle=\"modal\" data-target=\"#disclaimer\">\r\n                  </a>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"fund-table-wrapper\" *ngIf=\"page == 'purchase-step1'\">\r\n  <div class=\"heading-section\">\r\n    <div class=\"row\">\r\n      <div class=\"detail-head-wrapper\">\r\n        <div class=\"col-md-12 col-xs-12 icon-option mb-3\">\r\n\r\n          <ul class=\"\">\r\n            <!-- <li class=\"ico-fb\">\r\n              <a href=\"#\" title=\"facebook\">\r\n                <img src=\"/assets/Images/icons/ico-pipe.png\" />\r\n              </a>\r\n            </li>\r\n            <li class=\"ico-line\">\r\n              <a href=\"#\" title=\"line\">\r\n                <img src=\"/assets/Images/icons/ico-download.png\" />\r\n              </a>\r\n            </li> -->\r\n            <li class=\"ico-yt\">\r\n              <a href=\"#\" title=\"youtube\">\r\n                <img src=\"/assets/Images/icons/ico-print.png\" />\r\n              </a>\r\n            </li>\r\n\r\n          </ul>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <p>เลขที่ผู้ถือหน่วยลงทุน</p>\r\n          <span>9990244757</span>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <p>ชื่อผู้ถือหน่วยลงทุน</p>\r\n          <span>เนติวัฒน์ โชติกร</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"detail-body-wrapper\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <H4 class=\"text-left\">ซื้อหน่วยลงทุน</H4>\r\n        <span class=\"color-red\">(ตรวจสอบรายละเอียดก่อนกดยืนยัน)</span>\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <p>วันที่ทำรายการ</p>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <span>7 มิถุนายน 2561</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <p>เลือกวิธีชำระเงิน</p>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <span>หักบัญชีธนาคาร</span>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <p>กองทุน</p>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <span>KFCASH - กองทุนเปิดกรุงศรีตราสารเงิน</span>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <p>จำนวน</p>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <span>80,000 บาท</span>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <p>หักบัญชีธนาคาร</p>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <span>ธนคารกรุงศรีอยุธยา จำกัด (มหาชน)</span>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <p>วันที่รายการมีผล</p>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <span>7 มิถุนายน 2561</span>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-md-3 col-xs-6 offset-md-4\">\r\n            <button class=\"btn-med btn-primary\" (click)=\"checkpage('purchase-step2')\">\r\n              ยืนยัน\r\n              <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\r\n            </button>\r\n          </div>\r\n          <div class=\"col-md-3 col-xs-6\">\r\n            <button class=\"btn-med btn-back-login\" (click)=\"checkpage('purchase-over-view')\">\r\n              ย้อนกลับ\r\n              <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\r\n            </button>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n      <div class=\"col-md-12 mt-5\">\r\n        <p class=\"color-red no-margin\">- ข้าพเจ้าตกลงซื้อหน่วยลงทุนตามที่ระบุไว้ในคำสั่งซื้อนี้</p>\r\n        <p class=\"color-red no-margin\">- ข้าพเจ้ารับทราบว่าการสั่งซื้อหน่วยลงทุนทางระบบ internet นี้อาจไม่ได้รับการทำรายการ หากมีความขัดข้องทางเทคนิคเกิดขึ้น</p>\r\n        <p class=\"color-red no-margin\">- ทั้งนี้ข้าพเจ้ายินยอมที่จะเสียค่าธรรมเนียมในการสั่งซื้อ และปฏิบัติตามข้อกำหนด และเงื่อนไขทั้งหมดที่ระบุไว้ในหนังสือชี้ชวนเสนอขายหน่วยลงทุนทุกประการ</p>\r\n        <h5 class=\" no-margin\" style=\"color: #C90A11;\">- ในกรณีที่คำสั่งซื้อนี้ถูกปฏิเสธข้าพเจ้าตกลงที่จะรับเงินที่ได้ชำระแล้วคืนโดยไม่มีดอกเบี้ย</h5>\r\n        <p class=\"color-red no-margin\">- การลงทุนในหน่วยลงทุนมิใช่การฝากเงินและมีความเสี่ยงของการลงทุน ผู้ถือหน่วยลงทุนอาจได้รับเงินลงทุนคืนมากกว่าหรือน้อยกว่าเงินลงทุน</p>\r\n        <p class=\"color-red no-margin\">- เริ่มแรกก็ได้ และอาจไม่ได้รับชำระเงินค่าขายคืนหน่วยลงทุนภายในระยะเวลา ที่กำหนดหรืออาจไม่สามารถขายคืนหน่วยลงทุนได้ตามที่มีคำสั่งไว้</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"fund-table-wrapper\" *ngIf=\"page == 'purchase-step2'\">\r\n  <div class=\"heading-section\">\r\n    <div class=\"row\">\r\n      <div class=\"detail-head-wrapper\">\r\n        <div class=\"col-md-12 col-xs-12 icon-option mb-3\">\r\n\r\n          <ul class=\"\">\r\n            <!-- <li class=\"ico-fb\">\r\n              <a href=\"#\" title=\"facebook\">\r\n                <img src=\"/assets/Images/icons/ico-pipe.png\" />\r\n              </a>\r\n            </li>\r\n            <li class=\"ico-line\">\r\n              <a href=\"#\" title=\"line\">\r\n                <img src=\"/assets/Images/icons/ico-download.png\" />\r\n              </a>\r\n            </li> -->\r\n            <li class=\"ico-yt\">\r\n              <a href=\"#\" title=\"youtube\">\r\n                <img src=\"/assets/Images/icons/ico-print.png\" />\r\n              </a>\r\n            </li>\r\n\r\n          </ul>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <p>เลขที่ผู้ถือหน่วยลงทุน</p>\r\n          <span>9990244757</span>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <p>ชื่อผู้ถือหน่วยลงทุน</p>\r\n          <span>เนติวัฒน์ โชติกร</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"detail-body-wrapper\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 mb-3\">\r\n        <H4 class=\"text-left\">ซื้อหน่วยลงทุน </H4>\r\n        <span class=\"color-red\">(พิมพ์ใบยืนยันการทำรายการนี้เก็บไว้)</span>\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <p>วันที่ทำรายการ</p>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <span>7 มิถุนายน 2561</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <p>เลือกวิธีชำระเงิน</p>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <span>หักบัญชีธนาคาร</span>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <p>กองทุน</p>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <span>KFCASH - กองทุนเปิดกรุงศรีตราสารเงิน</span>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <p>จำนวน</p>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <span>80,000 บาท</span>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <p>หักบัญชีธนาคาร</p>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <span>ธนคารกรุงศรีอยุธยา จำกัด (มหาชน)</span>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <p>วันที่ทำรายการซื้อล่วงหน้า</p>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <span>7 มิถุนายน 2561</span>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-md-3 col-xs-6 offset-md-4\">\r\n            <button class=\"btn-med btn-primary\" (click)=\"checkpage('purchase-step2')\">\r\n              พิมพ์\r\n              <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\r\n            </button>\r\n          </div>\r\n          <div class=\"col-md-3 col-xs-6\">\r\n            <button class=\"btn-med btn-blue\" (click)=\"checkpage('purchase-view-list')\">\r\n              ดูรายการ\r\n              <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\r\n            </button>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n      <div class=\"col-md-12 mt-5\">\r\n        <p class=\"color-red no-margin\">การยืนยันรายการนี้ยังไม่ถือว่ารายสั่งซื้อหน่วยลงทุนสมบูรณ์ ในกรณีที่ท่านยังมิได้ขอออกสมุดบัญชีแสดงสิทธิในหน่วยลงทุน\r\n          นายทะเบียนจะจัดส่งหนังสือรับรองสิทธิในหน่วยลงทุนให้แก่ท่าน\r\n        </p>\r\n        <p class=\"color-red no-margin\">เมื่อรายการนี้ได้ทำเสร็จสมบูรณ์ ภายใน 2 วันทำการ</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"fund-table-wrapper\" *ngIf=\"page == 'purchase-view-list'\">\r\n  <div class=\"heading-section\">\r\n    <div class=\"row\">\r\n      <div class=\"detail-head-wrapper\">\r\n        <div class=\"col-md-12 col-xs-12 icon-option mb-3\">\r\n\r\n          <ul class=\"\">\r\n            <!-- <li class=\"ico-fb\">\r\n              <a href=\"#\" title=\"facebook\">\r\n                <img src=\"/assets/Images/icons/ico-pipe.png\" />\r\n              </a>\r\n            </li>\r\n            <li class=\"ico-line\">\r\n              <a href=\"#\" title=\"line\">\r\n                <img src=\"/assets/Images/icons/ico-download.png\" />\r\n              </a>\r\n            </li> -->\r\n            <li class=\"ico-yt\">\r\n              <a href=\"#\" title=\"youtube\">\r\n                <img src=\"/assets/Images/icons/ico-print.png\" />\r\n              </a>\r\n            </li>\r\n\r\n          </ul>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n\r\n          <p>เลขที่ผู้ถือหน่วยลงทุน</p>\r\n\r\n          <div class=\"select-wrapper inline-block\">\r\n            <select name=\"ddlLink\" id=\"ddlLink\">\r\n              <option value=\"0\" selected=\"\">9990244757</option>\r\n              <option value=\"36\">9990244757</option>\r\n              <option value=\"29\">9990244757</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <p>ชื่อผู้ถือหน่วยลงทุน</p>\r\n          <span>เนติวัฒน์ โชติกร</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"detail-body-wrapper\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 mb-3\">\r\n        <H4 class=\"text-left\" style=\"display: unset;\">รายการซื้อหน่วยลงทุนทั้งหมด </H4>\r\n        <p style=\"display: unset;\">(รายการที่รอดำเนินการ)</p>\r\n      </div>\r\n      <div class=\"col-md-12\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-custom\">\r\n            <thead>\r\n              <tr>\r\n                <th>\r\n                  กองทุน\r\n                </th>\r\n                <th>\r\n                  วิธีชำระเงิน\r\n                </th>\r\n                <th>\r\n                  บาท (THB)\r\n                </th>\r\n                <th>\r\n                  วันและเวลาที่ทำการ\r\n                </th>\r\n                <th>\r\n                  วันที่มีผล\r\n                </th>\r\n                <th>\r\n                  แก้ไข\r\n                </th>\r\n                <th>\r\n                  ยกเลิก\r\n                </th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr>\r\n                <td>\r\n                  กองทุนเปิดกรุงศรีหุ้นระยะยาวไทยออลสตาร์ปันผล\r\n                </td>\r\n                <td>\r\n                  หักบัญชี\r\n                </td>\r\n                <td>\r\n                  20,000.00\r\n                </td>\r\n                <td>\r\n                  07/06/2561, 11:25\r\n                </td>\r\n                <td>\r\n                  07/06/2561\r\n                </td>\r\n                <td>\r\n                  <a href=\"\">\r\n                    <img src=\"/assets/Images/icons/ico-edit.png\">\r\n                  </a>\r\n                </td>\r\n                <td>\r\n                  <a href=\"\">\r\n                    <img src=\"/assets/Images/icons/ico-delete.png\" alt=\"\">\r\n                  </a>\r\n                </td>\r\n              </tr>\r\n\r\n              <tr>\r\n                <td>\r\n                  กองทุนเปิดกรุงศรีหุ้นระยะยาวไทยออลสตาร์ปันผล\r\n                </td>\r\n                <td>\r\n                  หักบัญชี\r\n                </td>\r\n                <td>\r\n                  20,000.00\r\n                </td>\r\n                <td>\r\n                  07/06/2561, 11:25\r\n                </td>\r\n                <td>\r\n                  07/06/2561\r\n                </td>\r\n                <td>\r\n                  <a href=\"\">\r\n                    <img src=\"/assets/Images/icons/ico-edit.png\">\r\n                  </a>\r\n                </td>\r\n                <td>\r\n                  <a href=\"\">\r\n                    <img src=\"/assets/Images/icons/ico-delete.png\" alt=\"\">\r\n                  </a>\r\n                </td>\r\n              </tr>\r\n\r\n              <tr>\r\n                <td>\r\n                  กองทุนเปิดกรุงศรีหุ้นระยะยาวไทยออลสตาร์ปันผล\r\n                </td>\r\n                <td>\r\n                  หักบัญชี\r\n                </td>\r\n                <td>\r\n                  20,000.00\r\n                </td>\r\n                <td>\r\n                  07/06/2561, 11:25\r\n                </td>\r\n                <td>\r\n                  07/06/2561\r\n                </td>\r\n                <td>\r\n                  <a href=\"\">\r\n                    <img src=\"/assets/Images/icons/ico-edit.png\">\r\n                  </a>\r\n                </td>\r\n                <td>\r\n                  <a href=\"\">\r\n                    <img src=\"/assets/Images/icons/ico-delete.png\" alt=\"\">\r\n                  </a>\r\n                </td>\r\n              </tr>\r\n\r\n              <tr>\r\n                <td>\r\n                  กองทุนเปิดกรุงศรีหุ้นระยะยาวไทยออลสตาร์ปันผล\r\n                </td>\r\n                <td>\r\n                  หักบัญชี\r\n                </td>\r\n                <td>\r\n                  20,000.00\r\n                </td>\r\n                <td>\r\n                  07/06/2561, 11:25\r\n                </td>\r\n                <td>\r\n                  07/06/2561\r\n                </td>\r\n                <td>\r\n                  <a href=\"\">\r\n                    <img src=\"/assets/Images/icons/ico-edit.png\">\r\n                  </a>\r\n                </td>\r\n                <td>\r\n                  <a href=\"\">\r\n                    <img src=\"/assets/Images/icons/ico-delete.png\" alt=\"\">\r\n                  </a>\r\n                </td>\r\n              </tr>\r\n\r\n              <tr>\r\n                <td>\r\n                  กองทุนเปิดกรุงศรีหุ้นระยะยาวไทยออลสตาร์ปันผล\r\n                </td>\r\n                <td>\r\n                  หักบัญชี\r\n                </td>\r\n                <td>\r\n                  20,000.00\r\n                </td>\r\n                <td>\r\n                  07/06/2561, 11:25\r\n                </td>\r\n                <td>\r\n                  07/06/2561\r\n                </td>\r\n                <td>\r\n                  <a href=\"\">\r\n                    <img src=\"/assets/Images/icons/ico-edit.png\">\r\n                  </a>\r\n                </td>\r\n                <td>\r\n                  <a href=\"\">\r\n                    <img src=\"/assets/Images/icons/ico-delete.png\" alt=\"\">\r\n                  </a>\r\n                </td>\r\n              </tr>\r\n\r\n              <tr>\r\n                <td>\r\n                  กองทุนเปิดกรุงศรีหุ้นระยะยาวไทยออลสตาร์ปันผล\r\n                </td>\r\n                <td>\r\n                  หักบัญชี\r\n                </td>\r\n                <td>\r\n                  20,000.00\r\n                </td>\r\n                <td>\r\n                  07/06/2561, 11:25\r\n                </td>\r\n                <td>\r\n                  07/06/2561\r\n                </td>\r\n                <td>\r\n                  <a href=\"\">\r\n                    <img src=\"/assets/Images/icons/ico-edit.png\">\r\n                  </a>\r\n                </td>\r\n                <td>\r\n                  <a href=\"\">\r\n                    <img src=\"/assets/Images/icons/ico-delete.png\" alt=\"\">\r\n                  </a>\r\n                </td>\r\n              </tr>\r\n\r\n              <tr>\r\n                <td>\r\n                  กองทุนเปิดกรุงศรีหุ้นระยะยาวไทยออลสตาร์ปันผล\r\n                </td>\r\n                <td>\r\n                  หักบัญชี\r\n                </td>\r\n                <td>\r\n                  20,000.00\r\n                </td>\r\n                <td>\r\n                  07/06/2561, 11:25\r\n                </td>\r\n                <td>\r\n                  07/06/2561\r\n                </td>\r\n                <td>\r\n                  <a href=\"\">\r\n                    <img src=\"/assets/Images/icons/ico-edit.png\">\r\n                  </a>\r\n                </td>\r\n                <td>\r\n                  <a href=\"\">\r\n                    <img src=\"/assets/Images/icons/ico-delete.png\" alt=\"\">\r\n                  </a>\r\n                </td>\r\n              </tr>\r\n\r\n              <tr>\r\n                <td>\r\n                  กองทุนเปิดกรุงศรีหุ้นระยะยาวไทยออลสตาร์ปันผล\r\n                </td>\r\n                <td>\r\n                  หักบัญชี\r\n                </td>\r\n                <td>\r\n                  20,000.00\r\n                </td>\r\n                <td>\r\n                  07/06/2561, 11:25\r\n                </td>\r\n                <td>\r\n                  07/06/2561\r\n                </td>\r\n                <td>\r\n                  <a href=\"\">\r\n                    <img src=\"/assets/Images/icons/ico-edit.png\">\r\n                  </a>\r\n                </td>\r\n                <td>\r\n                  <a href=\"\">\r\n                    <img src=\"/assets/Images/icons/ico-delete.png\" alt=\"\">\r\n                  </a>\r\n                </td>\r\n              </tr>\r\n\r\n              <tr>\r\n                <td>\r\n                  กองทุนเปิดกรุงศรีหุ้นระยะยาวไทยออลสตาร์ปันผล\r\n                </td>\r\n                <td>\r\n                  หักบัญชี\r\n                </td>\r\n                <td>\r\n                  20,000.00\r\n                </td>\r\n                <td>\r\n                  07/06/2561, 11:25\r\n                </td>\r\n                <td>\r\n                  07/06/2561\r\n                </td>\r\n                <td>\r\n                  <a href=\"\">\r\n                    <img src=\"/assets/Images/icons/ico-edit.png\">\r\n                  </a>\r\n                </td>\r\n                <td>\r\n                  <a href=\"\">\r\n                    <img src=\"/assets/Images/icons/ico-delete.png\" alt=\"\">\r\n                  </a>\r\n                </td>\r\n              </tr>\r\n\r\n              <tr>\r\n                <td>\r\n                  กองทุนเปิดกรุงศรีหุ้นระยะยาวไทยออลสตาร์ปันผล\r\n                </td>\r\n                <td>\r\n                  หักบัญชี\r\n                </td>\r\n                <td>\r\n                  20,000.00\r\n                </td>\r\n                <td>\r\n                  07/06/2561, 11:25\r\n                </td>\r\n                <td>\r\n                  07/06/2561\r\n                </td>\r\n                <td>\r\n                  <a href=\"\">\r\n                    <img src=\"/assets/Images/icons/ico-edit.png\">\r\n                  </a>\r\n                </td>\r\n                <td>\r\n                  <a href=\"\">\r\n                    <img src=\"/assets/Images/icons/ico-delete.png\" alt=\"\">\r\n                  </a>\r\n                </td>\r\n              </tr>\r\n\r\n            </tbody>\r\n\r\n          </table>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-md-4 offset-md-8 no-padding\">\r\n        <div class=\"list-pagination\">\r\n          <div class=\"holder\">\r\n            <!-- <a class=\"jp-first jp-disabled\">First</a> -->\r\n            <a class=\"jp-previous jp-disabled\">previous</a>\r\n            <a class=\"jp-current\">1</a>\r\n            <!-- <span class=\"jp-hidden\">...</span> -->\r\n            <a class=\"\">2</a>\r\n            <a class=\"\">3</a>\r\n            <a class=\"jp-next\">next</a>\r\n            <!-- <a class=\"jp-last\">Last</a> -->\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/transaction/purchase/purchase.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/transaction/purchase/purchase.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/transaction/purchase/purchase.component.ts":
/*!************************************************************!*\
  !*** ./src/app/transaction/purchase/purchase.component.ts ***!
  \************************************************************/
/*! exports provided: PurchaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseComponent", function() { return PurchaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PurchaseComponent = /** @class */ (function () {
    function PurchaseComponent() {
        this.page = "purchase";
    }
    PurchaseComponent.prototype.ngOnInit = function () {
        $('#mutual-tab-menu').find('li').removeClass('current');
        $('#mutual-tab-menu').find('li#menu1').addClass('current');
    };
    PurchaseComponent.prototype.checkpage = function (page) {
        window.scroll(0, 0);
        console.log(page);
        switch (page) {
            case 'purchase':
                this.page = "purchase";
                break;
            case 'purchase-step1':
                this.page = "purchase-step1";
                break;
            case 'purchase-step2':
                this.page = "purchase-step2";
                break;
            case 'purchase-view-list':
                this.page = "purchase-view-list";
                break;
            default:
                this.page = "purchase";
                console.log(this.page);
                break;
        }
    };
    PurchaseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-purchase',
            template: __webpack_require__(/*! ./purchase.component.html */ "./src/app/transaction/purchase/purchase.component.html"),
            styles: [__webpack_require__(/*! ./purchase.component.scss */ "./src/app/transaction/purchase/purchase.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PurchaseComponent);
    return PurchaseComponent;
}());



/***/ }),

/***/ "./src/app/transaction/sell/sell.component.html":
/*!******************************************************!*\
  !*** ./src/app/transaction/sell/sell.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"fund-table-wrapper\" *ngIf=\"page == 'sell'\">\r\n  <div class=\"heading-section\">\r\n    <div class=\"row\">\r\n      <div class=\"detail-head-wrapper\">\r\n        <div class=\"col-md-12 col-xs-12 icon-option mb-3\">\r\n\r\n          <ul class=\"\">\r\n            <!-- <li class=\"ico-fb\">\r\n              <a href=\"#\" title=\"facebook\">\r\n                <img src=\"/assets/Images/icons/ico-pipe.png\" />\r\n              </a>\r\n            </li>\r\n            <li class=\"ico-line\">\r\n              <a href=\"#\" title=\"line\">\r\n                <img src=\"/assets/Images/icons/ico-download.png\" />\r\n              </a>\r\n            </li> -->\r\n            <li class=\"ico-yt\">\r\n              <a href=\"#\" title=\"youtube\">\r\n                <img src=\"/assets/Images/icons/ico-print.png\" />\r\n              </a>\r\n            </li>\r\n\r\n          </ul>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n\r\n          <p>เลขที่ผู้ถือหน่วยลงทุน</p>\r\n\r\n          <div class=\"select-wrapper inline-block\">\r\n            <select name=\"ddlLink\" id=\"ddlLink\">\r\n              <option value=\"0\" selected=\"\">9990244757</option>\r\n              <option value=\"36\">9990244757</option>\r\n              <option value=\"29\">9990244757</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <p>ชื่อผู้ถือหน่วยลงทุน</p>\r\n          <span>เนติวัฒน์ โชติกร</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"detail-body-wrapper\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <H4 class=\"text-left\">ขายคืนหน่วยลงทุน</H4>\r\n        <!-- <p>ขั้นตอนที่ 1 เลือกลงทุนและใส่จำนวนที่ต้องการ</p> -->\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <p>วันที่ทำรายการ</p>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <span>7 มิถุนายน 2561</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <span>กองทุนต้นทาง</span>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <div class=\"select-wrapper inline-block\">\r\n\r\n              <select name=\"ddlLink\" id=\"ddlLink\">\r\n                <option value=\"0\" selected=\"\">KFCRASH - กองทุนกรุงศรีตราสารเงิน</option>\r\n                <option value=\"36\">KFCRASH - กองทุนกรุงศรีตราสารเงิน</option>\r\n                <option value=\"29\">KFCRASH - กองทุนกรุงศรีตราสารเงิน</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-custom\">\r\n            <thead>\r\n              <tr>\r\n                <th class=\"bg-blue\">\r\n                  ยอดคงเหลือ (หน่วย)\r\n                </th>\r\n                <th class=\"bg-primary\">\r\n                  ยอดคงเหลือ (บาท)\r\n                </th>\r\n                <th class=\"bg-darkbrown\">\r\n                  วันที่มีผล\r\n                </th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr>\r\n                <td>\r\n                  <a href=\"/MutualFund\" title=\"ประเภทกองทุน\">6.2456\r\n                  </a>\r\n                </td>\r\n                <td>\r\n                  <a href=\"/MutualFund/FundDetail\" title=\"ชื่อกองทุน\">74.39\r\n                  </a>\r\n                </td>\r\n                <td>\r\n                  05/04/60\r\n                  <a class=\"color-red\">(ณ วันที่ผ่านมา)</a>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>\r\n                  <a href=\"/MutualFund\" title=\"ประเภทกองทุน\">6.2456\r\n                  </a>\r\n                </td>\r\n                <td>\r\n                  <a href=\"/MutualFund/FundDetail\" title=\"ชื่อกองทุน\">N/A\r\n                  </a>\r\n                </td>\r\n                <td>\r\n                  05/04/60\r\n                  <a class=\"color-red\">(หลังหักรายการวันนี้)</a>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n\r\n          </table>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <span>จำนวนที่ขายคืน</span>\r\n          </div>\r\n          <div class=\"col-md-3 col-xs-6\">\r\n            <div class=\"input-wrapper \">\r\n              <input id=\"name\" name=\"name\" maxlength=\"30\" type=\"text\" class=\"bg-gray\" placeholder=\"0\">\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-3 col-xs-6\">\r\n            <div class=\"select-wrapper inline-block\">\r\n\r\n              <select name=\"ddlLink\" id=\"ddlLink\">\r\n                <option value=\"0\" selected=\"\">บาท</option>\r\n                <option value=\"36\">เยน</option>\r\n                <option value=\"29\">ดอลล่า</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <span>รับเงินค่าขายคืน</span>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <div class=\"select-wrapper inline-block\">\r\n\r\n              <select name=\"ddlLink\" id=\"ddlLink\">\r\n                <option value=\"0\" selected=\"\">ธนาคารกรุงศรีอยุธยา จำกัด (มหาชน)</option>\r\n                <option value=\"36\">ธนาคารกรุงศรีอยุธยา จำกัด (มหาชน)</option>\r\n                <option value=\"29\">ธนาคารกรุงศรีอยุธยา จำกัด (มหาชน)</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <span>วันที่ทำรายการขายคืนล่วงหน้า</span>\r\n          </div>\r\n          <div class=\"col-md-3\">\r\n\r\n            <div class=\"input-wrapper\">\r\n              <input class=\"form-control textinput dateinput bg-gray\" id=\"startDate\" placeholder=\"วว/ดด/ปปปป\" name=\"date\" type=\"text\">\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-md-3 col-xs-6 offset-md-4\">\r\n            <button class=\"btn-med btn-primary\" (click)=\"checkpage('sell-step1')\">\r\n              ตกลง\r\n              <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\r\n            </button>\r\n          </div>\r\n          <div class=\"col-md-3 col-xs-6\">\r\n            <button class=\"btn-med btn-cancel\" (click)=\"checkpage('signup1')\">\r\n              ยกเลิก\r\n              <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\r\n            </button>\r\n          </div>\r\n        </div>\r\n\r\n\r\n      </div>\r\n\r\n\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"detail-footer-wrapper\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6 text-left\">\r\n        <h4>รายการขายคืนหน่วยลงทุน <br class=\"d-block d-sm-none\"/><label>(รายการที่รอดำเนินการ)</label></h4>\r\n      </div>\r\n      <div class=\"col-md-6 text-md-right\">\r\n        <i class=\"fa fa-angle-right mr-1\" aria-hidden=\"true\"></i><label>ดูรายการทั้งหมด</label>\r\n      </div>\r\n      <div class=\"col-md-12 mt-5 text-center\">\r\n        <p>ไม่มีรายการที่รอดำเนินงาน</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"fund-table-wrapper\" *ngIf=\"page == 'sell-step1'\">\r\n  <div class=\"heading-section\">\r\n    <div class=\"row\">\r\n      <div class=\"detail-head-wrapper\">\r\n        <div class=\"col-md-12 col-xs-12 icon-option mb-3\">\r\n\r\n          <ul class=\"\">\r\n            <!-- <li class=\"ico-fb\">\r\n              <a href=\"#\" title=\"facebook\">\r\n                <img src=\"/assets/Images/icons/ico-pipe.png\" />\r\n              </a>\r\n            </li>\r\n            <li class=\"ico-line\">\r\n              <a href=\"#\" title=\"line\">\r\n                <img src=\"/assets/Images/icons/ico-download.png\" />\r\n              </a>\r\n            </li> -->\r\n            <li class=\"ico-yt\">\r\n              <a href=\"#\" title=\"youtube\">\r\n                <img src=\"/assets/Images/icons/ico-print.png\" />\r\n              </a>\r\n            </li>\r\n\r\n          </ul>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <p>เลขที่ผู้ถือหน่วยลงทุน</p>\r\n          <span>9990244757</span>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <p>ชื่อผู้ถือหน่วยลงทุน</p>\r\n          <span>เนติวัฒน์ โชติกร</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"detail-body-wrapper\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <H4 class=\"text-left\">ขายคืนหน่วยลงทุน</H4>\r\n        <!-- <p>ขั้นตอนที่ 1 เลือกลงทุนและใส่จำนวนที่ต้องการ</p> -->\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <p>วันที่ทำรายการ</p>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <span>7 มิถุนายน 2561</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <p>กองทุนต้นทาง</p>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <span>KFCRASH - กองทุนกรุงศรีตราสารเงิน</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-custom\">\r\n            <thead>\r\n              <tr>\r\n                <th class=\"bg-blue\">\r\n                  ยอดคงเหลือ (หน่วย)\r\n                </th>\r\n                <th class=\"bg-primary\">\r\n                  ยอดคงเหลือ (บาท)\r\n                </th>\r\n                <th class=\"bg-darkbrown\">\r\n                  วันที่มีผล\r\n                </th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr>\r\n                <td>\r\n                  <a href=\"/MutualFund\" title=\"ประเภทกองทุน\">6.2456\r\n                  </a>\r\n                </td>\r\n                <td>\r\n                  <a href=\"/MutualFund/FundDetail\" title=\"ชื่อกองทุน\">74.39\r\n                  </a>\r\n                </td>\r\n                <td>\r\n                  05/04/60\r\n                  <a class=\"color-red\">(ณ วันที่ผ่านมา)</a>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>\r\n                  <a href=\"/MutualFund\" title=\"ประเภทกองทุน\">6.2456\r\n                  </a>\r\n                </td>\r\n                <td>\r\n                  <a href=\"/MutualFund/FundDetail\" title=\"ชื่อกองทุน\">N/A\r\n                  </a>\r\n                </td>\r\n                <td>\r\n                  05/04/60\r\n                  <a class=\"color-red\">(หลังหักรายการวันนี้)</a>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n\r\n          </table>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <p>จำนวนที่ขายคืน</p>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <span>30 หน่วย</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <p>รับเงินค่าขายคืน</p>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <span>ธนคารกรุงศรีอยุธยา จำกัด (มหาชน)</span>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <p>วันที่รายการมีผล</p>\r\n          </div>\r\n          <div class=\"col-md-3\">\r\n            <span>10 มิถุนายน 2561</span>\r\n\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row mt-2\">\r\n          <div class=\"col-md-3 col-xs-6 offset-md-4\">\r\n            <button class=\"btn-med btn-primary\" (click)=\"checkpage('sell-step2')\">\r\n              ยืนยัน\r\n              <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\r\n            </button>\r\n          </div>\r\n          <div class=\"col-md-3 col-xs-6 \">\r\n            <button class=\"btn-med btn-back-login\" (click)=\"checkpage('sell')\">\r\n              ย้อนกลับ\r\n              <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n<div class=\"fund-table-wrapper\" *ngIf=\"page == 'sell-step2'\">\r\n  <div class=\"heading-section\">\r\n    <div class=\"row\">\r\n      <div class=\"detail-head-wrapper\">\r\n        <div class=\"col-md-12 col-xs-12 icon-option mb-3\">\r\n\r\n          <ul class=\"\">\r\n            <!-- <li class=\"ico-fb\">\r\n              <a href=\"#\" title=\"facebook\">\r\n                <img src=\"/assets/Images/icons/ico-pipe.png\" />\r\n              </a>\r\n            </li>\r\n            <li class=\"ico-line\">\r\n              <a href=\"#\" title=\"line\">\r\n                <img src=\"/assets/Images/icons/ico-download.png\" />\r\n              </a>\r\n            </li> -->\r\n            <li class=\"ico-yt\">\r\n              <a href=\"#\" title=\"youtube\">\r\n                <img src=\"/assets/Images/icons/ico-print.png\" />\r\n              </a>\r\n            </li>\r\n\r\n          </ul>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <p>เลขที่ผู้ถือหน่วยลงทุน</p>\r\n          <span>9990244757</span>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <p>ชื่อผู้ถือหน่วยลงทุน</p>\r\n          <span>เนติวัฒน์ โชติกร</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"detail-body-wrapper\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <H4 class=\"text-left\">ขายคืนหน่วยลงทุน</H4>\r\n        <!-- <p>ขั้นตอนที่ 1 เลือกลงทุนและใส่จำนวนที่ต้องการ</p> -->\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <p>วันที่ทำรายการ</p>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <span>7 มิถุนายน 2561</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <p>กองทุนต้นทาง</p>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <span>KFCRASH - กองทุนกรุงศรีตราสารเงิน</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-custom\">\r\n            <thead>\r\n              <tr>\r\n                <th class=\"bg-blue\">\r\n                  ยอดคงเหลือ (หน่วย)\r\n                </th>\r\n                <th class=\"bg-primary\">\r\n                  ยอดคงเหลือ (บาท)\r\n                </th>\r\n                <th class=\"bg-darkbrown\">\r\n                  วันที่มีผล\r\n                </th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr>\r\n                <td>\r\n                  <a href=\"/MutualFund\" title=\"ประเภทกองทุน\">6.2456\r\n                  </a>\r\n                </td>\r\n                <td>\r\n                  <a href=\"/MutualFund/FundDetail\" title=\"ชื่อกองทุน\">74.39\r\n                  </a>\r\n                </td>\r\n                <td>\r\n                  05/04/60\r\n                  <a class=\"color-red\">(ณ วันที่ผ่านมา)</a>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>\r\n                  <a href=\"/MutualFund\" title=\"ประเภทกองทุน\">6.2456\r\n                  </a>\r\n                </td>\r\n                <td>\r\n                  <a href=\"/MutualFund/FundDetail\" title=\"ชื่อกองทุน\">N/A\r\n                  </a>\r\n                </td>\r\n                <td>\r\n                  05/04/60\r\n                  <a class=\"color-red\">(หลังหักรายการวันนี้)</a>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n\r\n          </table>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <p>จำนวนที่ขายคืน</p>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <span>30 หน่วย</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <p>รับเงินค่าขายคืน</p>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <span>ธนคารกรุงศรีอยุธยา จำกัด (มหาชน)</span>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <p>วันที่ทำรายการขายคืนล่วงหน้า</p>\r\n          </div>\r\n          <div class=\"col-md-3\">\r\n            <span>10 มิถุนายน 2561</span>\r\n\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row mt-2\">\r\n          <div class=\"col-md-3 col-xs-6  offset-md-4\">\r\n            <button class=\"btn-med btn-primary\" (click)=\"checkpage('sell-step2')\">\r\n              พิมพ์\r\n              <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\r\n            </button>\r\n          </div>\r\n          <div class=\"col-md-3 col-xs-6 \">\r\n            <button class=\"btn-med btn-blue\" (click)=\"checkpage('sell-view-list')\">\r\n              ดูรายการ\r\n              <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-md-12 mt-3\">\r\n        <span class=\"color-red no-margin\">การยืนยันรายการนี้ยังไม่ถือว่ารายการขายหน่วยลงทุนสมบูรณ์ ในกรณีที่ท่านยังมิได้ขอออกสมุดบัญชีแสดงสิทธิในหน่วยลงทุน\r\n          นายทะเบียนจะจัดส่งหนังสือรับรองสิทธิในหน่วยลงทุนให้แก่ท่าน\r\n        </span>\r\n        <span class=\"color-red no-margin\">เมื่อรายการนี้ได้ทำเสร็จสมบูรณ์ ภายใน 2 วันทำการ</span>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n<div class=\"fund-table-wrapper\" *ngIf=\"page == 'sell-view-list'\">\r\n  <div class=\"heading-section\">\r\n    <div class=\"row\">\r\n      <div class=\"detail-head-wrapper\">\r\n        <div class=\"col-md-12 col-xs-12 icon-option mb-3\">\r\n\r\n          <ul class=\"\">\r\n            <!-- <li class=\"ico-fb\">\r\n              <a href=\"#\" title=\"facebook\">\r\n                <img src=\"/assets/Images/icons/ico-pipe.png\" />\r\n              </a>\r\n            </li>\r\n            <li class=\"ico-line\">\r\n              <a href=\"#\" title=\"line\">\r\n                <img src=\"/assets/Images/icons/ico-download.png\" />\r\n              </a>\r\n            </li> -->\r\n            <li class=\"ico-yt\">\r\n              <a href=\"#\" title=\"youtube\">\r\n                <img src=\"/assets/Images/icons/ico-print.png\" />\r\n              </a>\r\n            </li>\r\n\r\n          </ul>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n\r\n          <p>เลขที่ผู้ถือหน่วยลงทุน</p>\r\n\r\n          <div class=\"select-wrapper inline-block\">\r\n            <select name=\"ddlLink\" id=\"ddlLink\">\r\n              <option value=\"0\" selected=\"\">9990244757</option>\r\n              <option value=\"36\">9990244757</option>\r\n              <option value=\"29\">9990244757</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <p>ชื่อผู้ถือหน่วยลงทุน</p>\r\n          <span>เนติวัฒน์ โชติกร</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"detail-body-wrapper\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 mb-3\">\r\n        <H4 class=\"text-left\" style=\"display: unset;\">รายการขายคืนหน่วยลงทุนทั้งหมด </H4>\r\n        <p style=\"display: unset;\">(รายการที่รอดำเนินการ)</p>\r\n      </div>\r\n      <div class=\"col-md-12\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-custom\">\r\n            <thead>\r\n              <tr>\r\n                <th>\r\n                  กองทุน\r\n                </th>\r\n                <th>\r\n                  วิธีชำระเงิน\r\n                </th>\r\n                <th>\r\n                  บาท (THB)\r\n                </th>\r\n                <th>\r\n                  วันและเวลาที่ทำการ\r\n                </th>\r\n                <th>\r\n                  วันที่มีผล\r\n                </th>\r\n                <th>\r\n                  แก้ไข\r\n                </th>\r\n                <th>\r\n                  ยกเลิก\r\n                </th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr>\r\n                <td>\r\n                  กองทุนเปิดกรุงศรีหุ้นระยะยาวไทยออลสตาร์ปันผล\r\n                </td>\r\n                <td>\r\n                  หักบัญชี\r\n                </td>\r\n                <td>\r\n                  20,000.00\r\n                </td>\r\n                <td>\r\n                  07/06/2561, 11:25\r\n                </td>\r\n                <td>\r\n                  07/06/2561\r\n                </td>\r\n                <td>\r\n                  <a href=\"\">\r\n                    <img src=\"/assets/Images/icons/ico-edit.png\">\r\n                  </a>\r\n                </td>\r\n                <td>\r\n                  <a href=\"\">\r\n                    <img src=\"/assets/Images/icons/ico-delete.png\" alt=\"\">\r\n                  </a>\r\n                </td>\r\n              </tr>\r\n\r\n              <tr>\r\n                <td>\r\n                  กองทุนเปิดกรุงศรีหุ้นระยะยาวไทยออลสตาร์ปันผล\r\n                </td>\r\n                <td>\r\n                  หักบัญชี\r\n                </td>\r\n                <td>\r\n                  20,000.00\r\n                </td>\r\n                <td>\r\n                  07/06/2561, 11:25\r\n                </td>\r\n                <td>\r\n                  07/06/2561\r\n                </td>\r\n                <td>\r\n                  <a href=\"\">\r\n                    <img src=\"/assets/Images/icons/ico-edit.png\">\r\n                  </a>\r\n                </td>\r\n                <td>\r\n                  <a href=\"\">\r\n                    <img src=\"/assets/Images/icons/ico-delete.png\" alt=\"\">\r\n                  </a>\r\n                </td>\r\n              </tr>\r\n\r\n              <tr>\r\n                <td>\r\n                  กองทุนเปิดกรุงศรีหุ้นระยะยาวไทยออลสตาร์ปันผล\r\n                </td>\r\n                <td>\r\n                  หักบัญชี\r\n                </td>\r\n                <td>\r\n                  20,000.00\r\n                </td>\r\n                <td>\r\n                  07/06/2561, 11:25\r\n                </td>\r\n                <td>\r\n                  07/06/2561\r\n                </td>\r\n                <td>\r\n                  <a href=\"\">\r\n                    <img src=\"/assets/Images/icons/ico-edit.png\">\r\n                  </a>\r\n                </td>\r\n                <td>\r\n                  <a href=\"\">\r\n                    <img src=\"/assets/Images/icons/ico-delete.png\" alt=\"\">\r\n                  </a>\r\n                </td>\r\n              </tr>\r\n\r\n              <tr>\r\n                <td>\r\n                  กองทุนเปิดกรุงศรีหุ้นระยะยาวไทยออลสตาร์ปันผล\r\n                </td>\r\n                <td>\r\n                  หักบัญชี\r\n                </td>\r\n                <td>\r\n                  20,000.00\r\n                </td>\r\n                <td>\r\n                  07/06/2561, 11:25\r\n                </td>\r\n                <td>\r\n                  07/06/2561\r\n                </td>\r\n                <td>\r\n                  <a href=\"\">\r\n                    <img src=\"/assets/Images/icons/ico-edit.png\">\r\n                  </a>\r\n                </td>\r\n                <td>\r\n                  <a href=\"\">\r\n                    <img src=\"/assets/Images/icons/ico-delete.png\" alt=\"\">\r\n                  </a>\r\n                </td>\r\n              </tr>\r\n\r\n              <tr>\r\n                <td>\r\n                  กองทุนเปิดกรุงศรีหุ้นระยะยาวไทยออลสตาร์ปันผล\r\n                </td>\r\n                <td>\r\n                  หักบัญชี\r\n                </td>\r\n                <td>\r\n                  20,000.00\r\n                </td>\r\n                <td>\r\n                  07/06/2561, 11:25\r\n                </td>\r\n                <td>\r\n                  07/06/2561\r\n                </td>\r\n                <td>\r\n                  <a href=\"\">\r\n                    <img src=\"/assets/Images/icons/ico-edit.png\">\r\n                  </a>\r\n                </td>\r\n                <td>\r\n                  <a href=\"\">\r\n                    <img src=\"/assets/Images/icons/ico-delete.png\" alt=\"\">\r\n                  </a>\r\n                </td>\r\n              </tr>\r\n\r\n              <tr>\r\n                <td>\r\n                  กองทุนเปิดกรุงศรีหุ้นระยะยาวไทยออลสตาร์ปันผล\r\n                </td>\r\n                <td>\r\n                  หักบัญชี\r\n                </td>\r\n                <td>\r\n                  20,000.00\r\n                </td>\r\n                <td>\r\n                  07/06/2561, 11:25\r\n                </td>\r\n                <td>\r\n                  07/06/2561\r\n                </td>\r\n                <td>\r\n                  <a href=\"\">\r\n                    <img src=\"/assets/Images/icons/ico-edit.png\">\r\n                  </a>\r\n                </td>\r\n                <td>\r\n                  <a href=\"\">\r\n                    <img src=\"/assets/Images/icons/ico-delete.png\" alt=\"\">\r\n                  </a>\r\n                </td>\r\n              </tr>\r\n\r\n              <tr>\r\n                <td>\r\n                  กองทุนเปิดกรุงศรีหุ้นระยะยาวไทยออลสตาร์ปันผล\r\n                </td>\r\n                <td>\r\n                  หักบัญชี\r\n                </td>\r\n                <td>\r\n                  20,000.00\r\n                </td>\r\n                <td>\r\n                  07/06/2561, 11:25\r\n                </td>\r\n                <td>\r\n                  07/06/2561\r\n                </td>\r\n                <td>\r\n                  <a href=\"\">\r\n                    <img src=\"/assets/Images/icons/ico-edit.png\">\r\n                  </a>\r\n                </td>\r\n                <td>\r\n                  <a href=\"\">\r\n                    <img src=\"/assets/Images/icons/ico-delete.png\" alt=\"\">\r\n                  </a>\r\n                </td>\r\n              </tr>\r\n\r\n              <tr>\r\n                <td>\r\n                  กองทุนเปิดกรุงศรีหุ้นระยะยาวไทยออลสตาร์ปันผล\r\n                </td>\r\n                <td>\r\n                  หักบัญชี\r\n                </td>\r\n                <td>\r\n                  20,000.00\r\n                </td>\r\n                <td>\r\n                  07/06/2561, 11:25\r\n                </td>\r\n                <td>\r\n                  07/06/2561\r\n                </td>\r\n                <td>\r\n                  <a href=\"\">\r\n                    <img src=\"/assets/Images/icons/ico-edit.png\">\r\n                  </a>\r\n                </td>\r\n                <td>\r\n                  <a href=\"\">\r\n                    <img src=\"/assets/Images/icons/ico-delete.png\" alt=\"\">\r\n                  </a>\r\n                </td>\r\n              </tr>\r\n\r\n              <tr>\r\n                <td>\r\n                  กองทุนเปิดกรุงศรีหุ้นระยะยาวไทยออลสตาร์ปันผล\r\n                </td>\r\n                <td>\r\n                  หักบัญชี\r\n                </td>\r\n                <td>\r\n                  20,000.00\r\n                </td>\r\n                <td>\r\n                  07/06/2561, 11:25\r\n                </td>\r\n                <td>\r\n                  07/06/2561\r\n                </td>\r\n                <td>\r\n                  <a href=\"\">\r\n                    <img src=\"/assets/Images/icons/ico-edit.png\">\r\n                  </a>\r\n                </td>\r\n                <td>\r\n                  <a href=\"\">\r\n                    <img src=\"/assets/Images/icons/ico-delete.png\" alt=\"\">\r\n                  </a>\r\n                </td>\r\n              </tr>\r\n\r\n              <tr>\r\n                <td>\r\n                  กองทุนเปิดกรุงศรีหุ้นระยะยาวไทยออลสตาร์ปันผล\r\n                </td>\r\n                <td>\r\n                  หักบัญชี\r\n                </td>\r\n                <td>\r\n                  20,000.00\r\n                </td>\r\n                <td>\r\n                  07/06/2561, 11:25\r\n                </td>\r\n                <td>\r\n                  07/06/2561\r\n                </td>\r\n                <td>\r\n                  <a href=\"\">\r\n                    <img src=\"/assets/Images/icons/ico-edit.png\">\r\n                  </a>\r\n                </td>\r\n                <td>\r\n                  <a href=\"\">\r\n                    <img src=\"/assets/Images/icons/ico-delete.png\" alt=\"\">\r\n                  </a>\r\n                </td>\r\n              </tr>\r\n\r\n            </tbody>\r\n\r\n          </table>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-md-4 offset-md-8 no-padding\">\r\n        <div class=\"list-pagination\">\r\n          <div class=\"holder\">\r\n            <!-- <a class=\"jp-first jp-disabled\">First</a> -->\r\n            <a class=\"jp-previous jp-disabled\">previous</a>\r\n            <a class=\"jp-current\">1</a>\r\n            <!-- <span class=\"jp-hidden\">...</span> -->\r\n            <a class=\"\">2</a>\r\n            <a class=\"\">3</a>\r\n            <a class=\"jp-next\">next</a>\r\n            <!-- <a class=\"jp-last\">Last</a> -->\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/transaction/sell/sell.component.scss":
/*!******************************************************!*\
  !*** ./src/app/transaction/sell/sell.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/transaction/sell/sell.component.ts":
/*!****************************************************!*\
  !*** ./src/app/transaction/sell/sell.component.ts ***!
  \****************************************************/
/*! exports provided: SellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellComponent", function() { return SellComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SellComponent = /** @class */ (function () {
    function SellComponent() {
        this.page = "sell";
    }
    SellComponent.prototype.ngOnInit = function () {
        $('#mutual-tab-menu').find('li').removeClass('current');
        $('#mutual-tab-menu').find('li#menu2').addClass('current');
    };
    SellComponent.prototype.checkpage = function (page) {
        window.scroll(0, 0);
        console.log(page);
        switch (page) {
            case 'sell':
                this.page = "sell";
                break;
            case 'sell-step1':
                this.page = "sell-step1";
                break;
            case 'sell-step2':
                this.page = "sell-step2";
                break;
            case 'sell-view-list':
                this.page = "sell-view-list";
                break;
            default:
                this.page = "sell";
                console.log(this.page);
                break;
        }
    };
    SellComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sell',
            template: __webpack_require__(/*! ./sell.component.html */ "./src/app/transaction/sell/sell.component.html"),
            styles: [__webpack_require__(/*! ./sell.component.scss */ "./src/app/transaction/sell/sell.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SellComponent);
    return SellComponent;
}());



/***/ }),

/***/ "./src/app/transaction/transaction.component.html":
/*!********************************************************!*\
  !*** ./src/app/transaction/transaction.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"\" id=\"maincontainer-wrapper\">\r\n  <div class=\"page-content-wrapper\">\r\n    <div class=\"mutual-fund-wrapper\">\r\n      <div class=\"max-width-wrapper\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n            <div class=\"tabs-menu-wrapper\">\r\n              <div class=\"dropdown dropdown-content\">\r\n                <button class=\"btn-med btn-primary dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">\r\n                  เมนูกองทุน\r\n                </button>\r\n                <ul class=\"dropdown-menu\">\r\n                  <li>\r\n                    <a (click)=\"navigate('purchase')\" title=\"รายการซื้อ\">รายการซื้อ</a>\r\n                  </li>\r\n                  <li>\r\n                    <a (click)=\"navigate('sell')\" title=\"รายการขาย\">รายการขาย</a>\r\n                  </li>\r\n                  <li>\r\n                    <a (click)=\"navigate('exchange')\" title=\"รายการสับเปลี่ยน\">รายการสับเปลี่ยน</a>\r\n                  </li>                  \r\n                  <!-- <li>\r\n                    <a (click)=\"navigate('purchase-for-sell')\" title=\"รายการซื้อเพื่อขาย\">รายการซื้อเพื่อขาย</a>\r\n                  </li> -->\r\n                </ul>\r\n                <div class=\"clearfix\"></div>\r\n              </div>\r\n              <ul class=\"nav nav-tabs\" role=\"tablist\" id=\"mutual-tab-menu\">\r\n                <li role=\"presentation\" id=\"menu1\">\r\n                  <a title=\"รายการซื้อ\" (click)=\"navigate('purchase')\">รายการซื้อ</a>\r\n                </li>\r\n                <li role=\"presentation\" id=\"menu2\">\r\n                  <a title=\"รายการขาย\" (click)=\"navigate('sell')\">รายการขาย</a>\r\n                </li>\r\n                <li role=\"presentation\" id=\"menu3\">\r\n                  <a title=\"รายการสับเปลี่ยน\" (click)=\"navigate('exchange')\">รายการสับเปลี่ยน</a>\r\n                </li>\r\n                <!-- <li role=\"presentation\" id=\"menu4\">\r\n                  <a title=\"รายการซื้อเพื่อขาย\" (click)=\"navigate('purchase-for-sell')\">รายการซื้อเพื่อขาย</a>\r\n                </li> -->\r\n\r\n              </ul>\r\n            </div>\r\n\r\n            <router-outlet></router-outlet>\r\n           \r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>    \r\n    </div>\r\n    </div>\r\n    <div class=\"modal fade modal-custom\" tabindex=\"-1\" role=\"dialog\" id=\"disclaimer\">\r\n      <div class=\"modal-dialog\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n          <div class=\"modal-header\">\r\n\r\n            <h4 class=\"modal-title\">คุณต้องการลบรายการที่เลือกหรือไม่</h4>\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n              <h4 class=\"modal-title\">X</h4>\r\n            </button>\r\n          </div>\r\n          <div class=\"modal-body\" id=\"content-scroll-1\">\r\n            <div class=\"row mt-3\">\r\n              <div class=\"col-md-6 col-xs-6\">\r\n                <p>เลขที่ผู้ถือหน่วยลงทุน</p>\r\n                <span>9990244757</span>\r\n              </div>\r\n              <div class=\"col-md-6 col-xs-6\">\r\n                <p>ชื่อผู้ถือหน่วยลงทุน</p>\r\n                <span>เนติวัฒน์ โชติกร</span>\r\n              </div>\r\n\r\n              <div class=\"col-md-12 mt-4\">\r\n                <div class=\"table-responsive\">\r\n                  <table class=\"table table-custom\">\r\n                    <tbody>\r\n                      <tr>\r\n                        <td class=\"text-left\">\r\n                          วันที่ทำรายการ\r\n                        </td>\r\n                        <td class=\"text-left content\">\r\n                          7 มิถุนายน 2561, 11:25\r\n                        </td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td class=\"text-left\">\r\n                          เลือกวิธีชำระเงิน\r\n                        </td>\r\n                        <td class=\"text-left content\">\r\n                          หักบัญชีธนาคาร\r\n                        </td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td class=\"text-left\">\r\n                          กองทุน\r\n                        </td>\r\n                        <td class=\"text-left content\">\r\n                          กองทุนเปิดกรุงศรีหุ้นระยะยาว\r\n                          <br/>ไทยออลสตาร์ปันผล\r\n                        </td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td class=\"text-left\">\r\n                          จำนวน\r\n                        </td>\r\n                        <td class=\"text-left content\">\r\n                          80,000 บาท\r\n                        </td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td class=\"text-left\">\r\n                          หักบัญชีธนาคาร\r\n                        </td>\r\n                        <td class=\"text-left content\">\r\n                          ธนคารกรุงศรีอยุธยา จำกัด (มหาชน)\r\n                        </td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td class=\"text-left\">\r\n                          วันที่ทำรายการซื้อล่วงหน้า\r\n                        </td>\r\n                        <td class=\"text-left content\">\r\n                          7 มิถุนายน 2561\r\n                        </td>\r\n                      </tr>\r\n\r\n                    </tbody>\r\n\r\n                  </table>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n              <div class=\"row justify-content-center\">\r\n                        <div class=\"col-md-6 col-xs-6 col-sm-6\">\r\n                          <button class=\"btn-med btn-cancel\" (click)=\"checkpage('')\" data-dismiss=\"modal\">\r\n                            ลบรายการนี้\r\n                            <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\r\n  \r\n                          </button>\r\n                        </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- /.modal-content -->\r\n        </div>\r\n        <!-- /.modal-dialog -->\r\n      </div>\r\n      <!-- /.modal -->\r\n    </div>\r\n    <app-footer></app-footer>"

/***/ }),

/***/ "./src/app/transaction/transaction.component.scss":
/*!********************************************************!*\
  !*** ./src/app/transaction/transaction.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* set global config vars */\n/* defualt page width setting(PC) */\n/* off canvas menu width *eg. 70px or 70% */\n/* main slide margin top */\n/* header height */\n/* footer height */\n/* global body setting */\n/* default font family */\n/*Arial*/\n/* text sizing multiplier */\n/* text sizing */\n/* default theme color */\n/* special theme */\n/* insert special theme for this website */\n/* text sizing */\n.modal-title {\n  color: #fff !important; }\n.modal-header {\n  background-color: #FF4A4A;\n  border-radius: 0px; }\n.modal-header .close .modal-title {\n    position: absolute;\n    top: 5px;\n    right: 12px; }\n.modal-footer {\n  display: block; }\n"

/***/ }),

/***/ "./src/app/transaction/transaction.component.ts":
/*!******************************************************!*\
  !*** ./src/app/transaction/transaction.component.ts ***!
  \******************************************************/
/*! exports provided: TransactionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionComponent", function() { return TransactionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TransactionComponent = /** @class */ (function () {
    function TransactionComponent(route, router) {
        this.route = route;
        this.router = router;
        this.page = "purchase-over-view";
    }
    TransactionComponent.prototype.ngOnInit = function () {
        $('#bottom-main-nav li').find('a').removeClass('current');
        $('#bottom-main-nav li#transaction').find('a').addClass('current');
    };
    TransactionComponent.prototype.checkpage = function (page) {
        window.scroll(0, 0);
        console.log(page);
        switch (page) {
            case 'purchase-over-view':
                this.page = "purchase-over-view";
                break;
            case 'sell':
                this.page = "sell";
                break;
            case 'purchase-step1':
                this.page = "purchase-step1";
                break;
            case 'purchase-step2':
                this.page = "purchase-step2";
                break;
            case 'purchase-view-list':
                this.page = "purchase-view-list";
                break;
            case 'sell-view-list':
                this.page = "sell-view-list";
                break;
            case 'exchange-view-list':
                this.page = "exchange-view-list";
                break;
            case 'purchase-for-sell-view-list':
                this.page = "purchase-for-sell-view-list";
                break;
            case 'sell-step1':
                this.page = "sell-step1";
                break;
            case 'sell-step2':
                this.page = "sell-step2";
                break;
            case 'exchange':
                this.page = "exchange";
                break;
            case 'exchange-step1':
                this.page = "exchange-step1";
                break;
            case 'exchange-step2':
                this.page = "exchange-step2";
                break;
            case 'purchase-for-sell':
                this.page = "purchase-for-sell";
                break;
            case 'purchase-for-sell-step1':
                this.page = "purchase-for-sell-step1";
                break;
            case 'purchase-for-sell-step2':
                this.page = "purchase-for-sell-step2";
                break;
            default:
                this.page = "purchase-over-view";
                console.log(this.page);
                break;
        }
    };
    TransactionComponent.prototype.navigate = function (target) {
        var target = target;
        console.log(target);
        this.router.navigate([target], { relativeTo: this.route });
    };
    TransactionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-transaction',
            template: __webpack_require__(/*! ./transaction.component.html */ "./src/app/transaction/transaction.component.html"),
            styles: [__webpack_require__(/*! ./transaction.component.scss */ "./src/app/transaction/transaction.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], TransactionComponent);
    return TransactionComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Work\LHFund\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map