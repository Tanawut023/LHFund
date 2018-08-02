import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-regular-exchange',
  templateUrl: './regular-exchange.component.html',
  styleUrls: ['./regular-exchange.component.scss']
})
export class RegularExchangeComponent implements OnInit {
  page = "regular-exchange";
  constructor() { }

  ngOnInit() {
    $('#mutual-tab-menu').find('li').removeClass('current');
    $('#mutual-tab-menu').find('li#menu3').addClass('current');
  }
  checkpage(page) {
    window.scroll(0,0);
    console.log(page)

    switch (page) {
        case 'regular-exchange':
            this.page = "regular-exchange";
            break;
        case 'regular-exchange-step1':
            this.page = "regular-exchange-step1";
            break;
        default:
            this.page = "regular-exchange";
            console.log(this.page)
            break;
    }


}
}
