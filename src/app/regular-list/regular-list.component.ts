import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-regular-list',
  templateUrl: './regular-list.component.html',
  styleUrls: ['./regular-list.component.scss']
})
export class RegularListComponent implements OnInit {
  page = "regular-purchase";
  constructor() { }

  ngOnInit() {
    $('#bottom-main-nav li').find('a').removeClass('current');
    $('#bottom-main-nav li#regular-list').find('a').addClass('current');
  }
  checkpage(page) {
    window.scroll(0,0);
    console.log(page)

    switch (page) {
        case 'regular-purchase':
            this.page = "regular-purchase";
            break;
        case 'regular-purchase-step1':
            this.page = "regular-purchase-step1";
            break;
        case 'regular-sell':
            this.page = "regular-sell";
            break;
        case 'regular-sell-step1':
            this.page = "regular-sell-step1";
            break;
        case 'regular-exchange':
            this.page = "regular-exchange";
            break;
        case 'regular-exchange-step1':
            this.page = "regular-exchange-step1";
            break;
        case 'all-list':
            this.page = "all-list";
            break;
        case 'signup2':
            this.page = "signup2";
            break;
        default:

            this.page = "regular-purchase";
            console.log(this.page)
            break;
    }


}

}
