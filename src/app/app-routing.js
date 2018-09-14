"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var router_1=require("@angular/router"),myport_component_1=require("./myport/myport.component"),transaction_component_1=require("./transaction/transaction.component"),purchase_component_1=require("./transaction/purchase/purchase.component"),sell_component_1=require("./transaction/sell/sell.component"),exchange_component_1=require("./transaction/exchange/exchange.component"),purchase_for_sell_component_1=require("./transaction/purchase-for-sell/purchase-for-sell.component"),rmf_ltf_component_1=require("./rmf-ltf/rmf-ltf.component"),conclusion_component_1=require("./rmf-ltf/conclusion/conclusion.component"),certificate_rmf_component_1=require("./rmf-ltf/certificate-rmf/certificate-rmf.component"),certificate_ltf_component_1=require("./rmf-ltf/certificate-ltf/certificate-ltf.component"),ltf_condition_complete_component_1=require("./rmf-ltf/ltf-condition-complete/ltf-condition-complete.component"),regular_list_component_1=require("./regular-list/regular-list.component"),regular_purchase_component_1=require("./regular-list/regular-purchase/regular-purchase.component"),regular_sell_component_1=require("./regular-list/regular-sell/regular-sell.component"),regular_exchange_component_1=require("./regular-list/regular-exchange/regular-exchange.component"),all_list_component_1=require("./regular-list/all-list/all-list.component"),report_component_1=require("./report/report.component"),past_events_component_1=require("./report/past-events/past-events.component"),confirmation_component_1=require("./report/confirmation/confirmation.component"),not_available_list_component_1=require("./report/not-available-list/not-available-list.component"),today_list_component_1=require("./report/today-list/today-list.component"),summary_component_1=require("./report/summary/summary.component"),receipt_history_component_1=require("./report/receipt-history/receipt-history.component"),type_component_1=require("./report/type/type.component"),profile_component_1=require("./profile/profile.component"),edit_profile_component_1=require("./profile/edit-profile/edit-profile.component"),suitability_component_1=require("./profile/suitability/suitability.component"),changepassword_component_1=require("./profile/changepassword/changepassword.component"),setting_component_1=require("./profile/setting/setting.component"),pagenotfound_component_1=require("./pagenotfound/pagenotfound.component"),login_component_1=require("./login/login.component"),register_component_1=require("./login/register/register.component"),signin_component_1=require("./login/signin/signin.component"),forgotpassword_component_1=require("./login/forgotpassword/forgotpassword.component"),changepasswordlogin_component_1=require("./login/changepasswordlogin/changepasswordlogin.component"),auth_guard_1=require("./service/auth.guard"),routes=[{path:"",redirectTo:"/myport",pathMatch:"full"},{path:"login",component:login_component_1.LoginComponent,children:[{path:"",component:signin_component_1.SigninComponent,pathMatch:"full"},{path:"register",component:register_component_1.RegisterComponent},{path:"forgotpassword",component:forgotpassword_component_1.ForgotpasswordComponent},{path:"changepassword/refcode/:refcode",component:changepasswordlogin_component_1.ChangepasswordloginComponent},{path:"**",component:signin_component_1.SigninComponent}]},{path:"myport",component:myport_component_1.MyportComponent,canActivate:[auth_guard_1.AuthGuard]},{path:"transaction",component:transaction_component_1.TransactionComponent,canActivate:[auth_guard_1.AuthGuard],children:[{path:"",component:purchase_component_1.PurchaseComponent,pathMatch:"full"},{path:"sell",component:sell_component_1.SellComponent},{path:"exchange",component:exchange_component_1.ExchangeComponent},{path:"purchase-for-sell",component:purchase_for_sell_component_1.PurchaseForSellComponent},{path:"**",component:purchase_component_1.PurchaseComponent}]},{path:"rmf-ltf",component:rmf_ltf_component_1.RmfLtfComponent,canActivate:[auth_guard_1.AuthGuard],children:[{path:"",component:ltf_condition_complete_component_1.LtfConditionCompleteComponent,pathMatch:"full"},{path:"conclusion",component:conclusion_component_1.ConclusionComponent},{path:"certificate-rmf",component:certificate_rmf_component_1.CertificateRmfComponent},{path:"certificate-ltf",component:certificate_ltf_component_1.CertificateLtfComponent},{path:"**",component:ltf_condition_complete_component_1.LtfConditionCompleteComponent}]},{path:"regular-list",component:regular_list_component_1.RegularListComponent,canActivate:[auth_guard_1.AuthGuard],children:[{path:"",component:regular_purchase_component_1.RegularPurchaseComponent,pathMatch:"full"},{path:"regular-sell",component:regular_sell_component_1.RegularSellComponent},{path:"regular-exchange",component:regular_exchange_component_1.RegularExchangeComponent},{path:"all-list",component:all_list_component_1.AllListComponent},{path:"**",component:regular_purchase_component_1.RegularPurchaseComponent}]},{path:"report",component:report_component_1.ReportComponent,canActivate:[auth_guard_1.AuthGuard],children:[{path:"",component:receipt_history_component_1.ReceiptHistoryComponent,pathMatch:"full"},{path:"confirmation",component:confirmation_component_1.ConfirmationComponent},{path:"not-available-list",component:not_available_list_component_1.NotAvailableListComponent},{path:"today-list",component:today_list_component_1.TodayListComponent},{path:"summary",component:summary_component_1.SummaryComponent},{path:"past-events",component:past_events_component_1.PastEventsComponent},{path:"type",component:type_component_1.TypeComponent},{path:"**",component:receipt_history_component_1.ReceiptHistoryComponent}]},{path:"profile",component:profile_component_1.ProfileComponent,canActivate:[auth_guard_1.AuthGuard],children:[{path:"",component:edit_profile_component_1.EditProfileComponent,pathMatch:"full"},{path:"suitability",component:suitability_component_1.SuitabilityComponent},{path:"change-password",component:changepassword_component_1.ChangepasswordComponent},{path:"setting",component:setting_component_1.SettingComponent},{path:"**",component:edit_profile_component_1.EditProfileComponent}]},{path:"**",component:pagenotfound_component_1.PagenotfoundComponent}];exports.routing=router_1.RouterModule.forRoot(routes,{useHash:!0});