import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-purchase-for-sell',
  templateUrl: './purchase-for-sell.component.html',
  styleUrls: ['./purchase-for-sell.component.scss']
})
export class PurchaseForSellComponent implements OnInit {
  page = "purchase-for-sell";
  constructor() { }

  ngOnInit() {
    $('#mutual-tab-menu').find('li').removeClass('current');
    $('#mutual-tab-menu').find('li#menu4').addClass('current');
  }
  checkpage(page) {
    window.scroll(0,0);
    console.log(page)

    switch (page) {
        case 'purchase-for-sell':
            this.page = "purchase-for-sell";
            break;        
        case 'purchase-for-sell-step1':
            this.page = "purchase-for-sell-step1";
            break;
        case 'purchase-for-sell-step2':
            this.page = "purchase-for-sell-step2";
            break;
        case 'purchase-for-sell-view-list':
            this.page = "purchase-for-sell-view-list";
            break;        
        default:

            this.page = "purchase-for-sell";
            console.log(this.page)
            break;
    }


}

}
