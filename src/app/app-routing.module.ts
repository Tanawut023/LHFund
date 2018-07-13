import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MyportComponent } from './myport/myport.component';
import { TransactionComponent } from './transaction/transaction.component';
import { RmfLtfComponent } from './rmf-ltf/rmf-ltf.component';
import { RegularListComponent } from './regular-list/regular-list.component';
import { ReportComponent } from './report/report.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full'   },
    { path: 'login', component: LoginComponent },
    { path: 'myport', component: MyportComponent },
    { path: 'transaction', component: TransactionComponent },
    { path: 'rmf-ltf', component: RmfLtfComponent },
    { path: 'regular-list', component: RegularListComponent },
    { path: 'report', component: ReportComponent },
    { path: 'profile', component: ProfileComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})

export class AppRoutingModule { 


}