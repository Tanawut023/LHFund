import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {TranslateService} from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private translate: TranslateService) {
    translate.addLangs(["th", "en"]);
    translate.setDefaultLang('th');

    // let browserLang = translate.getBrowserLang();
    // translate.use(browserLang.match(/th|en/) ? browserLang : 'en');
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
    window.scroll(0,0);
    //or document.body.scrollTop = 0;
    //or document.querySelector('body').scrollTo(0,0)
}
}
