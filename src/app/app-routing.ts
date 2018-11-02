import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
//myport
import { MyportComponent } from './myport/myport.component';

//transaction
import { TransactionComponent } from './transaction/transaction.component';
import { PurchaseComponent } from './transaction/purchase/purchase.component';
import { SellComponent } from './transaction/sell/sell.component';
import { ExchangeComponent } from './transaction/exchange/exchange.component';
import { PurchaseForSellComponent } from './transaction/purchase-for-sell/purchase-for-sell.component';

//rmf-ltf
import { RmfLtfComponent } from './rmf-ltf/rmf-ltf.component';
import { ConclusionComponent } from './rmf-ltf/conclusion/conclusion.component';
import { CertificateRmfComponent } from './rmf-ltf/certificate-rmf/certificate-rmf.component';
import { CertificateLtfComponent } from './rmf-ltf/certificate-ltf/certificate-ltf.component';
import { LtfConditionCompleteComponent } from './rmf-ltf/ltf-condition-complete/ltf-condition-complete.component';

//regularlist
import { RegularListComponent } from './regular-list/regular-list.component';
import { RegularPurchaseComponent } from './regular-list/regular-purchase/regular-purchase.component';
import { RegularSellComponent } from './regular-list/regular-sell/regular-sell.component';
import { RegularExchangeComponent } from './regular-list/regular-exchange/regular-exchange.component';
import { AllListComponent } from './regular-list/all-list/all-list.component';

//report
import { ReportComponent } from './report/report.component';
import { PastEventsComponent } from './report/past-events/past-events.component';
import { ConfirmationComponent } from './report/confirmation/confirmation.component';
import { NotAvailableListComponent } from './report/not-available-list/not-available-list.component';
import { TodayListComponent } from './report/today-list/today-list.component';
import { SummaryComponent } from './report/summary/summary.component';
import { ReceiptHistoryComponent } from './report/receipt-history/receipt-history.component';
import { TypeComponent } from './report/type/type.component';

//profile
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';
import { SuitabilityComponent } from './profile/suitability/suitability.component';
import { ChangepasswordComponent } from './profile/changepassword/changepassword.component';
import { SettingComponent } from './profile/setting/setting.component';

//pagenotfound
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

//login
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register/register.component';
import { SigninComponent } from './login/signin/signin.component';
import { ForgotpasswordComponent } from './login/forgotpassword/forgotpassword.component';
import { ChangepasswordloginComponent } from './login/changepasswordlogin/changepasswordlogin.component';

import { AuthGuard } from './service/auth.guard'

const routes: Routes = [
  { path: '', redirectTo: '/myport', pathMatch: 'full' },
  {
    path: 'login', component: LoginComponent, canActivate: [AuthGuard],
    children: [
      { path: '', component: SigninComponent, pathMatch: 'full' },
      { path: 'register', component: RegisterComponent },
      { path: 'forgotpassword', component: ForgotpasswordComponent },
      { path: 'changepassword/refcode/:refcode', component: ChangepasswordloginComponent },
      // { path: 'signin', component: SigninComponent },
      { path: '**', component: SigninComponent },
    ]
  },
  { path: 'myport', component: MyportComponent, canActivate: [AuthGuard]},
  {
    path: 'transaction', component: TransactionComponent, canActivate: [AuthGuard],
    children: [
      { path: '', component: PurchaseComponent, pathMatch: 'full' },
      { path: 'sell', component: SellComponent , },
      { path: 'exchange', component: ExchangeComponent , },
      { path: 'purchase-for-sell', component: PurchaseForSellComponent, },
      { path: '**', component: PurchaseComponent, },
    ]
  },
  {
    path: 'rmf-ltf', component: RmfLtfComponent, canActivate: [AuthGuard],
    children: [
      { path: '', component: LtfConditionCompleteComponent, pathMatch: 'full' },
      { path: 'conclusion', component: ConclusionComponent },
      { path: 'certificate-rmf', component: CertificateRmfComponent },
      { path: 'certificate-ltf', component: CertificateLtfComponent },
      { path: '**', component: LtfConditionCompleteComponent },
    ]
  },
  {
    path: 'regular-list', component: RegularListComponent, canActivate: [AuthGuard],
    children: [
      { path: '', component: RegularPurchaseComponent, pathMatch: 'full' },
      { path: 'regular-sell', component: RegularSellComponent },
      { path: 'regular-exchange', component: RegularExchangeComponent },
      { path: 'all-list', component: AllListComponent },
      { path: '**', component: RegularPurchaseComponent },
    ]
  },
  {
    path: 'report', component: ReportComponent, canActivate: [AuthGuard],
    children: [
      { path: '', component: ReceiptHistoryComponent, pathMatch: 'full' },
      { path: 'confirmation', component: ConfirmationComponent },
      { path: 'not-available-list', component: NotAvailableListComponent },
      { path: 'today-list', component: TodayListComponent },
      { path: 'summary', component: SummaryComponent },
      { path: 'past-events', component: PastEventsComponent },
      { path: 'type', component: TypeComponent },
      { path: '**', component: ReceiptHistoryComponent },
    ]
  },
  {
    path: 'profile', component: ProfileComponent, canActivate: [AuthGuard],
    children: [
      { path: '', component: EditProfileComponent, pathMatch: 'full' },
      { path: 'suitability', component: SuitabilityComponent },
      { path: 'change-password', component: ChangepasswordComponent },
      { path: 'setting', component: SettingComponent },
      { path: '**', component: EditProfileComponent },
    ]
  },
  { path: '**', component: PagenotfoundComponent }
];

export const routing = RouterModule.forRoot(routes, { useHash: true });

