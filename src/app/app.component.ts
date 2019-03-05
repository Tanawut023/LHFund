import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Observable, Subscription } from 'rxjs';
import { AuthGuard } from './service/auth.guard';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  isLoggedIn: Observable<boolean>;
  supscription: Subscription
  HaveLang;
  constructor(
    private translate: TranslateService,
    private AuthGuard: AuthGuard
  ) {



    // let browserLang = translate.getBrowserLang();
    // translate.use(browserLang.match(/th|en/) ? browserLang : 'en');
  }
  ngOnInit() {
    this.HaveLang = localStorage.getItem('lang')
    if (!this.HaveLang) {
      this.translate.addLangs(["th", "en"]);
      this.translate.setDefaultLang('th');
      this.translate.use('th');
      localStorage.setItem('lang', 'th');
    }else{
      this.translate.addLangs(["th", "en"]);
      this.translate.use(this.HaveLang);
    }

    this.isLoggedIn = this.AuthGuard.isLoggedIn();

    console.log(this.isLoggedIn);
  }
  onActivate(event) {
    // let scrollToTop = window.setInterval(() => {
    //     let pos = window.pageYOffset;
    //     if (pos > 0) {
    //         window.scrollTo(0, pos - 20); // how far to scroll on each step
    //     } else {
    //         window.clearInterval(scrollToTop);
    //     }
    // }, 16);
    $(".se-pre-con").fadeOut("slow");;
    $('body').removeClass('nav-expanded');
    $('#exit-canvas').removeClass('expanded');
    window.scroll(0, 0);
    //or document.body.scrollTop = 0;
    //or document.querySelector('body').scrollTo(0,0)
  }
}
