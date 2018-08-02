import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-receipt-history',
  templateUrl: './receipt-history.component.html',
  styleUrls: ['./receipt-history.component.scss']
})
export class ReceiptHistoryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('#mutual-tab-menu').find('li').removeClass('current');
    $('#mutual-tab-menu').find('li#menu3').addClass('current');
  }

}
