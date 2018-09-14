import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BaseApplicationDataService } from '../service/base-application-data.service';
import { UserIdleService } from 'angular-user-idle';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [],
})
export class HeaderComponent implements OnInit {
  langth: boolean;
  langen: boolean;
  foo1: any;
  userdetail: any = {};
  readonly googlePlayLink: string;
  readonly appStoreLink: string;
  param: any;

  constructor(
    private translate: TranslateService,
    private basedataservice: BaseApplicationDataService,
    private userIdle: UserIdleService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    // const id: string = route.snapshot.params.id;
    const url: string = route.snapshot.url.join('');
    // const user = route.snapshot.data.user;
    translate.addLangs(["th", "en"]);
    console.log(translate.currentLang);
    // console.log(url);
    this.param = url;
  }

  ngOnInit() {
    this.foo1 = this.translate.currentLang;
    this.userdetail = this.basedataservice.getCurrentUser();
    
    if (this.foo1 == 'th') {

      this.langth = true;
    }
    else if (this.foo1 == 'en') {
      this.langen = true;
    }
    // console.log(this.translate.currentLang)

    $('body').removeClass('nav-expanded');
    // $('#bottom-main-nav').children().clone().appendTo("#canvas_mainnav");

    //Start watching for user inactivity.
    this.userIdle.startWatching();

    // Start watching when user idle is starting.
    this.userIdle.onTimerStart().subscribe(count => console.log(count));

    // Start watch when time is up.
    this.userIdle.onTimeout().subscribe(
      () => {
        this.router.navigate(['/login'], { queryParams: { returnUrl: this.param } });
        return false;
      }
    );
  }
  shownav() {
    // console.log("dfdf");
    $('body').toggleClass('nav-expanded');
    $('#exit-canvas').addClass('expanded');
  }
  stop() {
    this.userIdle.stopTimer();
  }

  stopWatching() {
    this.userIdle.stopWatching();
  }

  startWatching() {
    this.userIdle.startWatching();
  }

  restart() {
    this.userIdle.resetTimer();
  }
  switchlang(lang) {
    if (lang == 'th') {
      this.translate.use('th');
      this.langen = false;
      this.langth = true;
      localStorage.setItem('lang', lang );

    }
    else if (lang == 'en') {
      this.translate.use('en');
      this.langth = false;
      this.langen = true;
      localStorage.setItem('lang', lang );

      // console.log(navigator.language);
    }


  }
  // hidenav(){
  //   $('body').removeClass('nav-expanded');
  // }
}
