import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-today-list',
  templateUrl: './today-list.component.html',
  styleUrls: ['./today-list.component.scss']
})
export class TodayListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('#mutual-tab-menu').find('li').removeClass('current');
    $('#mutual-tab-menu').find('li#menu6').addClass('current');
  }

}
