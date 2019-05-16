import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routing } from './app-routing';
import { RouterModule } from '@angular/router'
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';

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
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgxCaptchaModule } from 'ngx-captcha';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { CustomDatepickerI18n } from './datepicker-i18n';
import { NgbDatepickerConfig, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { RegisterComponent } from './login/register/register.component';
import { SigninComponent } from './login/signin/signin.component';
import { ForgotpasswordComponent } from './login/forgotpassword/forgotpassword.component';
import { ChangepasswordloginComponent } from './login/changepasswordlogin/changepasswordlogin.component';
import { FooterforwarningComponent } from './footerforwarning/footerforwarning.component';

import { MalihuScrollbarModule } from 'ngx-malihu-scrollbar';
import { AuthenticationService } from './service/authentication.service';
import { ToastrModule } from 'ngx-toastr';
import { AuthGuard } from './service/auth.guard';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { BaseApplicationDataService } from './service/base-application-data.service';
import { UserIdleModule } from 'angular-user-idle';
import { toFixed, toFixed4 } from './Share/tofix.pipe'
import { DateThai, YearThai, Time, ExpiresDateThai, DateThaiDM, DateEngDM, DateEng } from './Share/datethai.pipe';
import { NgbDateCustomParserFormatter } from "./Share/dateformat";
import { Type } from './Share/allpipe.pipe'
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxMaskModule } from 'ngx-mask'
import { TextMaskModule } from 'angular2-text-mask';
import { CurrencyMaskModule } from "ng2-currency-mask";

import { CurrencyMaskConfig, CURRENCY_MASK_CONFIG } from "ng2-currency-mask/src/currency-mask.config";
import { WINDOW_PROVIDERS } from './_helpers/hostname.interceptor';
import { Component, Injectable } from '@angular/core';
import { NgbDatepickerI18n, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { LanguageService } from './service/language.service';

const I18N_VALUES = {
  en: {
    weekdays: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
    months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  },
  th: {
    weekdays: ['จ', 'อ', 'พ', 'พฤ', 'ศ', 'ส', 'อา'],
    months: ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'],
  }
};

@Injectable()
export class CustomDatepickerI18n extends NgbDatepickerI18n {
  lang: Observable<string>;
  constructor(
    private langservice: LanguageService) {
    super();
    this.langservice.listen().subscribe((m: any) => {
      console.log(m);
      this.lang = m;
    })
  }

  getWeekdayShortName(weekday: number): string {
    if (String(this.lang) == 'en') {
      return I18N_VALUES['en'].weekdays[weekday - 1];
    } else {
      return I18N_VALUES['th'].weekdays[weekday - 1];
    }
  }
  getMonthShortName(month: number): string {
    if (String(this.lang) == 'en') {
      return I18N_VALUES['en'].months[month - 1];
    } else {
      return I18N_VALUES['th'].months[month - 1];
    }
  }
  getMonthFullName(month: number): string {
    return this.getMonthShortName(month);
  }

  getDayAriaLabel(date: NgbDateStruct): string {
    return `${date.day}-${date.month}-${date.year}`;
  }
  getYearNumerals(year: number): string {
    if (String(this.lang) == 'th') {
      return year + 543 + '';
    } else {
      return year + '';
    }
  }
}

export const CustomCurrencyMaskConfig: CurrencyMaskConfig = {
  align: "right",
  allowNegative: false,
  decimal: ".",
  precision: 0,
  prefix: "",
  suffix: "",
  thousands: ","
};

// import { NgbDateFRParserFormatter } from "./ngb-date-fr-parser-formatter"

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './App/assets/i18n/', '.json');
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
    RegisterComponent,
    SigninComponent,
    ForgotpasswordComponent,
    ChangepasswordloginComponent,
    FooterforwarningComponent,
    toFixed, toFixed4, DateThai, YearThai, Type, Time, ExpiresDateThai, DateThaiDM, DateEngDM, DateEng,
  ],
  imports: [
    BrowserModule,
    FormsModule,
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
    NgbModule.forRoot(),
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-center',
      preventDuplicates: true,
    }),
    routing,
    MalihuScrollbarModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    NgxCaptchaModule.forRoot({
      reCaptcha2SiteKey: '6Lcc2okUAAAAAJAh0yRi35-OmXqhPjT2bXMSIWs9',
      invisibleCaptchaSiteKey: '6Lcc2okUAAAAAJdZ579SPU_pF08A9zW130NUYIPi'
    }),
    UserIdleModule.forRoot({ idle: 600, timeout: 10, ping: 480 }),
    NgxPaginationModule,
    NgxMaskModule.forRoot(),
    TextMaskModule,
    CurrencyMaskModule

  ],
  providers: [
    { provide: NgbDateParserFormatter, useClass: NgbDateCustomParserFormatter },
    { provide: NgbDatepickerI18n, useClass: CustomDatepickerI18n },
    AuthenticationService, AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: CURRENCY_MASK_CONFIG, useValue: CustomCurrencyMaskConfig },
    BaseApplicationDataService,
    WINDOW_PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
