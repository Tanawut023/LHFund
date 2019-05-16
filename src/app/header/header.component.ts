import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BaseApplicationDataService } from '../service/base-application-data.service';
import { UserIdleService } from 'angular-user-idle';
import { Router, CanActivate, ActivatedRouteSnapshot, CanActivateChild, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../service/authentication.service'
import { BehaviorSubject, Observable } from 'rxjs';
import { LanguageService } from '../service/language.service';
declare var $: any;
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
  test: any;

  constructor(
    private translate: TranslateService,
    private basedataservice: BaseApplicationDataService,
    private userIdle: UserIdleService,
    private router: Router,
    private route: ActivatedRoute,
    private authenticationService: AuthenticationService,
    private langservice: LanguageService
  ) {
    const url: string = route.snapshot.url.join('');
    translate.addLangs(["th", "en"]);
    console.log(translate.currentLang);
    this.param = url;
    console.log(this.router.url);

  }

  ngOnInit() {
    this.foo1 = this.translate.currentLang;
    this.userdetail = this.basedataservice.getmemberInfo();

    var lang = localStorage.getItem('lang');
    this.langservice.filter(lang);

    if (this.foo1 == 'th') {
      this.langth = true;
    }
    else if (this.foo1 == 'en') {
      this.langen = true;
    }

    $('body').removeClass('nav-expanded');

    //Start watching for user inactivity.
    this.userIdle.startWatching();

    // Start watching when user idle is starting.
    this.userIdle.onTimerStart().subscribe(count => console.log(count));

    // Start watch when time is up.
    this.userIdle.onTimeout().subscribe(
      () => {
        console.log(this.router.url);
        var n = this.router.url.search("/login");
        if (n != -1) {
          return;
        }
        else {
          this.logout();
        }
      }
    );

    this.userIdle.ping$.subscribe(() => {
      var date = new Date();
      console.log("PING: " + date)
      this.authenticationService.refreshToken()
        .pipe(first())
        .subscribe(
          data => {
            console.log(data);
          },
          error => {
            console.log(error);
          });
    });
  }
  shownav() {
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
      localStorage.setItem('lang', lang);
      this.langservice.filter('th');
    }
    else if (lang == 'en') {
      this.translate.use('en');
      this.langth = false;
      this.langen = true;
      localStorage.setItem('lang', lang);
      this.langservice.filter('en');
    }
    this.refreshselectpicker();
  
  }
  refreshselectpicker() {
    var select, bank;
    this.translate.get(['CONTENT',]).subscribe(translations => {
      console.log(translations);
      select = translations.CONTENT.select;
      bank = translations.CONTENT.ats;
    })
    $('#fund').selectpicker({ title: select });
    $('#fund2').selectpicker({ title: select });
    $('#type').selectpicker({ title: select });
    $('#bank').selectpicker({ title: bank });

    setTimeout(() => {
      console.log(select, bank);
      $('.selectpicker').selectpicker('render');
      $('.selectpicker').selectpicker('refresh');

    }, 200);
  }
  logout() {
    this.authenticationService.logout();
    setTimeout(() => {
      window.location.href = "";
    }, 100);

  }
}
