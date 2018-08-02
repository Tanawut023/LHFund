import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-regular-purchase',
  templateUrl: './regular-purchase.component.html',
  styleUrls: ['./regular-purchase.component.scss']
})
export class RegularPurchaseComponent implements OnInit {
  page = "regular-purchase";
  constructor() { }

  ngOnInit() {
    $('#mutual-tab-menu').find('li').removeClass('current');
    $('#mutual-tab-menu').find('li#menu1').addClass('current');
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
        default:
            this.page = "regular-purchase";
            console.log(this.page)
            break;
    }


}

}
