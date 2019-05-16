import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BaseApplicationDataService } from '../service/base-application-data.service';
import { AuthenticationService } from '../service/authentication.service';
import {Router} from '@angular/router';
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
    private basedataservice: BaseApplicationDataService,
    private router: Router
  ) {
    translate.addLangs(["th", "en"]);
  }

  ngOnInit() {
    this.foo1 = this.translate.currentLang;
    this.userdetail = this.basedataservice.getmemberInfo();
    if (this.foo1 == 'th') {

      this.langth = true;
    }
    else if (this.foo1 == 'en') {
      this.langen = true;
    }
  }
  hidenav() {
    $('body').removeClass('nav-expanded');
    $('#exit-canvas').removeClass('expanded');
  }
  switchlang(lang) {
    if (lang == 'th') {
      this.translate.use('th');
      this.langen = false;
      this.langth = true;
      localStorage.setItem('lang', lang);
    }
    else if (lang == 'en') {
      this.translate.use('en');
      this.langth = false;
      this.langen = true;
      localStorage.setItem('lang', lang);
    }

  }
  logout() {
    this.authenticationService.logout();
    setTimeout(() => {
      window.location.href = "";
    }, 100);

  }
  navigate(url) {
    $('body').removeClass('nav-expanded');
    $('#exit-canvas').removeClass('expanded');
    this.router.navigateByUrl(''+url+'');
 }
}
