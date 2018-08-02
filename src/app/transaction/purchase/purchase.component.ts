import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.scss']
})
export class PurchaseComponent implements OnInit {
  page = "purchase";
  constructor() { }

  ngOnInit() {
    $('#mutual-tab-menu').find('li').removeClass('current');
    $('#mutual-tab-menu').find('li#menu1').addClass('current');
  }
  checkpage(page) {
    window.scroll(0,0);
    console.log(page)

    switch (page) {
        case 'purchase':
            this.page = "purchase";
            break;        
        case 'purchase-step1':
            this.page = "purchase-step1";
            break;
        case 'purchase-step2':
            this.page = "purchase-step2";
            break;
        case 'purchase-view-list':
            this.page = "purchase-view-list";
            break;        
        default:

            this.page = "purchase";
            console.log(this.page)
            break;
    }


}

}
