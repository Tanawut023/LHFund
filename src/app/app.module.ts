import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }          from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule, HttpClient} from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { HeaderLoginComponent } from './header-login/header-login.component';

import * as $ from 'jquery';
import { MyportComponent } from './myport/myport.component';
import { ChartModule } from 'angular-highcharts';
import { TransactionComponent } from './transaction/transaction.component';
import { RmfLtfComponent } from './rmf-ltf/rmf-ltf.component';
import { RegularListComponent } from './regular-list/regular-list.component';
import { ReportComponent } from './report/report.component';

import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';
import { SuitabilityComponent } from './profile/suitability/suitability.component';


import { CanvasMenuComponent } from './canvas-menu/canvas-menu.component';
import { SettingComponent } from './profile/setting/setting.component';
import { ChangepasswordComponent } from './profile/changepassword/changepassword.component';

import { RegularPurchaseComponent } from './regular-list/regular-purchase/regular-purchase.component';
import { RegularSellComponent } from './regular-list/regular-sell/regular-sell.component';
import { RegularExchangeComponent } from './regular-list/regular-exchange/regular-exchange.component';
import { AllListComponent } from './regular-list/all-list/all-list.component';

import { ConclusionComponent } from './rmf-ltf/conclusion/conclusion.component';
import { CertificateRmfComponent } from './rmf-ltf/certificate-rmf/certificate-rmf.component';
import { CertificateLtfComponent } from './rmf-ltf/certificate-ltf/certificate-ltf.component';
import { LtfConditionCompleteComponent } from './rmf-ltf/ltf-condition-complete/ltf-condition-complete.component';

import { PastEventsComponent } from './report/past-events/past-events.component';
import { ConfirmationComponent } from './report/confirmation/confirmation.component';
import { NotAvailableListComponent } from './report/not-available-list/not-available-list.component';
import { TodayListComponent } from './report/today-list/today-list.component';
import { SummaryComponent } from './report/summary/summary.component';
import { ReceiptHistoryComponent } from './report/receipt-history/receipt-history.component';
import { TypeComponent } from './report/type/type.component';

import { PurchaseComponent } from './transaction/purchase/purchase.component';
import { SellComponent } from './transaction/sell/sell.component';
import { ExchangeComponent } from './transaction/exchange/exchange.component';
import { PurchaseForSellComponent } from './transaction/purchase-for-sell/purchase-for-sell.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
// import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab 
// import { PanelModule } from 'primeng/primeng';
// import { ButtonModule } from 'primeng/primeng';
// import { RadioButtonModule } from 'primeng/primeng';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
 
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    HeaderLoginComponent,
    MyportComponent,
    TransactionComponent,
    RmfLtfComponent,
    RegularListComponent,
    ReportComponent,
    ProfileComponent,
    CanvasMenuComponent,
    EditProfileComponent,
    SuitabilityComponent,
    SettingComponent,
    ChangepasswordComponent,
    RegularPurchaseComponent,
    RegularSellComponent,
    RegularExchangeComponent,
    AllListComponent,
    ConclusionComponent,
    CertificateRmfComponent,
    CertificateLtfComponent,
    LtfConditionCompleteComponent,
    PastEventsComponent,
    ConfirmationComponent,
    NotAvailableListComponent,
    TodayListComponent,
    SummaryComponent,
    ReceiptHistoryComponent,
    TypeComponent,
    PurchaseComponent,
    SellComponent,
    ExchangeComponent,
    PurchaseForSellComponent,
    PagenotfoundComponent,
    // AccordionModule,
    // PanelModule,
    // ButtonModule,
    // RadioButtonModule,
    

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,    
    FontAwesomeModule,
    ChartModule,
    ReactiveFormsModule,
    DialogModule,
    TableModule,
    InputTextModule,
    DialogModule,
    ButtonModule,
    BrowserAnimationsModule,    
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  })

    // ProfileModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
