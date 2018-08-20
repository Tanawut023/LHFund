import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
@Component({
  selector: 'app-canvas-menu',
  templateUrl: './canvas-menu.component.html',
  styleUrls: ['./canvas-menu.component.scss']
})
export class CanvasMenuComponent implements OnInit {

  constructor(private translate: TranslateService) {
    translate.addLangs(["th", "en"]);
   }

  ngOnInit() {
  }
  hidenav(){
    $('body').removeClass('nav-expanded');
    $('#exit-canvas').removeClass('expanded');
  }
}
