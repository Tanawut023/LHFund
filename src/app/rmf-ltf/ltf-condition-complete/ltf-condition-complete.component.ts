import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ltf-condition-complete',
  templateUrl: './ltf-condition-complete.component.html',
  styleUrls: ['./ltf-condition-complete.component.scss']
})
export class LtfConditionCompleteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('#mutual-tab-menu').find('li').removeClass('current');
    $('#mutual-tab-menu').find('li#menu1').addClass('current');
  }

}
