import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
@Component({
  selector: 'app-canvas-menu',
  templateUrl: './canvas-menu.component.html',
  styleUrls: ['./canvas-menu.component.scss']
})
export class CanvasMenuComponent implements OnInit {
  foo1: any;
  langth: boolean;
  langen: boolean;

  constructor(private translate: TranslateService) {
    translate.addLangs(["th", "en"]);
   }

  ngOnInit() {
    // this.translate.use('')
    this.foo1 = this.translate.currentLang;
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
      
    }
    else if(lang=='en'){
      this.translate.use('en');
      this.langth = false;
      this.langen = true;
      console.log(navigator.language);
  }
    

  }
}
