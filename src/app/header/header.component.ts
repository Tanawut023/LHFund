import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [],
})
export class HeaderComponent implements OnInit {
 foo1: any;
  constructor(private translate: TranslateService) {
    translate.addLangs(["th", "en"]);
    // translate.setDefaultLang('th');
   }

  ngOnInit() {
    $('body').removeClass('nav-expanded');
    // $('#bottom-main-nav').children().clone().appendTo("#canvas_mainnav");
  }
  shownav(){
    // console.log("dfdf");
    $('body').toggleClass('nav-expanded');
  }
  // hidenav(){
  //   $('body').removeClass('nav-expanded');
  // }
}
