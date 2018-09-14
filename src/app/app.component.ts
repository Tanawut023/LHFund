import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from './service/authentication.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  isLoggedIn: Observable<boolean>;

  constructor(
    private translate: TranslateService,
    private authenticationService: AuthenticationService
  ) {
    translate.addLangs(["th", "en"]);
    translate.use('th');
    translate.setDefaultLang('en');
    localStorage.setItem('lang', 'th' );

    // let browserLang = translate.getBrowserLang();
    // translate.use(browserLang.match(/th|en/) ? browserLang : 'en');
}
ngOnInit() {
  this.isLoggedIn = this.authenticationService.isLoggedIn();
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
    window.scroll(0,0);
    //or document.body.scrollTop = 0;
    //or document.querySelector('body').scrollTo(0,0)
}
}
