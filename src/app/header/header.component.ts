import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [],
})
export class HeaderComponent implements OnInit {
  langth: boolean;
  langen: boolean;
 foo1: any;
  constructor(private translate: TranslateService) {
    translate.addLangs(["th", "en"]);
    // translate.setDefaultLang('th');
    // translate.use('th');
    // this.langth = true;
    console.log(translate.currentLang);
    
    // translate.setDefaultLang("th");
    // this.foo1 = this.translate.currentLang;
    // if(this.foo1=='th'){
    //   console.log('dfdfdf')
    //   this.lang = true;
    // }
    // else
    //   this.lang =false;
    // translate.setDefaultLang('th');
   }

  ngOnInit() {
    // console.log(this.translate.getBrowserLang);
    this.foo1 = this.translate.currentLang;
    if(this.foo1 == 'th'){
      
      this.langth = true;
    }
    else if(this.foo1 == 'en'){
      this.langen =true;
    }
    // console.log(this.translate.currentLang)
    
    $('body').removeClass('nav-expanded');
    // $('#bottom-main-nav').children().clone().appendTo("#canvas_mainnav");
  }
  shownav(){
    // console.log("dfdf");
    $('body').toggleClass('nav-expanded');
    $('#exit-canvas').addClass('expanded');
  }
  switchlang(lang){
    if(lang=='th'){
      this.translate.use('th');
      this.langen = false;
      this.langth = true;
      
    }
    else if(lang=='en'){
      this.translate.use('en');
      this.langth = false;
      this.langen = true;
      console.log(navigator.language);
  }
    

  }
  // hidenav(){
  //   $('body').removeClass('nav-expanded');
  // }
}
