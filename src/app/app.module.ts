import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }          from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { HeaderLoginComponent } from './header-login/header-login.component';

import * as $ from 'jquery';
import { MyportComponent } from './myport/myport.component';
import { ChartModule } from 'angular-highcharts';
import { TransactionComponent } from './transaction/transaction.component';
import { RmfLtfComponent } from './rmf-ltf/rmf-ltf.component';
import { RegularListComponent } from './regular-list/regular-list.component';
import { ReportComponent } from './report/report.component';
import { ProfileComponent } from './profile/profile.component';
 
// Add an icon to the library for convenient access in other components
library.add(faCoffee);

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
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,    
    FontAwesomeModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
