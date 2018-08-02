import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-available-list',
  templateUrl: './not-available-list.component.html',
  styleUrls: ['./not-available-list.component.scss']
})
export class NotAvailableListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('#mutual-tab-menu').find('li').removeClass('current');
    $('#mutual-tab-menu').find('li#menu7').addClass('current');
  }

}
