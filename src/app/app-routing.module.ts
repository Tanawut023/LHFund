import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MyportComponent } from './myport/myport.component';

const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full'   },
    { path: 'login', component: LoginComponent },
    { path: 'myport', component: MyportComponent },
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