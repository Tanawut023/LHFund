import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Observable, Subscription } from 'rxjs';
import { AuthGuard } from './service/auth.guard';
import { count, filter } from 'rxjs/operators';

declare var gtag;
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
    private AuthGuard: AuthGuard,
    router: Router
  ) {
    const navEndEvents = router.events.pipe(
      filter(event => event instanceof NavigationEnd),
    );
    navEndEvents.subscribe((event: NavigationEnd) => {
      console.log("url = "+event.urlAfterRedirects);
      
      gtag('config', 'UA-118773053-2',{
        'page_path': event.urlAfterRedirects
      });
    })
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

    $(".se-pre-con").fadeOut("slow");;
    $('body').removeClass('nav-expanded');
    $('#exit-canvas').removeClass('expanded');
    window.scroll(0, 0);
    
  }
}
