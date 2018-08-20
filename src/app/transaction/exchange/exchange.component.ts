import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.scss']
})
export class ExchangeComponent implements OnInit {
  page = "exchange";
  model;
  constructor() { }

  ngOnInit() {
    $('#mutual-tab-menu').find('li').removeClass('current');
    $('#mutual-tab-menu').find('li#menu3').addClass('current');
  }
  checkpage(page) {
    window.scroll(0,0);
    console.log(page)

    switch (page) {
        case 'exchange':
            this.page = "exchange";
            break;        
        case 'exchange-step1':
            this.page = "exchange-step1";
            break;
        case 'exchange-step2':
            this.page = "exchange-step2";
            break;
        case 'exchange-view-list':
            this.page = "exchange-view-list";
            break;        
        default:

            this.page = "exchange";
            console.log(this.page)
            break;
    }


}
}
