import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { BaseApplicationDataService } from '../service/base-application-data.service';
import { AuthenticationService } from '../service/authentication.service';
@Component({
  selector: 'app-canvas-menu',
  templateUrl: './canvas-menu.component.html',
  styleUrls: ['./canvas-menu.component.scss']
})
export class CanvasMenuComponent implements OnInit {
  foo1: any;
  langth: boolean;
  langen: boolean;
  userdetail: any = {};

  constructor(
    private translate: TranslateService,
    private authenticationService: AuthenticationService,
    private basedataservice: BaseApplicationDataService
  ) {
    translate.addLangs(["th", "en"]);
   }

  ngOnInit() {
    // this.translate.use('')
    this.foo1 = this.translate.currentLang;
    this.userdetail = this.basedataservice.getmemberInfo();
    // console.log(this.userdetail)
    if(this.foo1 == 'th'){
      
      this.langth = true;
    }
    else if(this.foo1 == 'en'){
      this.langen =true;
    }
  }
  hidenav(){
    $('body').removeClass('nav-expanded');
    $('#exit-canvas').removeClass('expanded');
  }
  switchlang(lang){
    if(lang=='th'){
      this.translate.use('th');
      this.langen = false;
      this.langth = true;
      localStorage.setItem('lang', lang );

      
    }
    else if(lang=='en'){
      this.translate.use('en');
      this.langth = false;
      this.langen = true;
      localStorage.setItem('lang', lang );

      // console.log(navigator.language);
  }
    

  }
  logout() {
    this.authenticationService.logout();
    setTimeout(() => {
      window.location.href = "";
    }, 100);

  }
}
