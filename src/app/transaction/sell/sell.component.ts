import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.scss']
})
export class SellComponent implements OnInit {
  page = "sell";
  constructor() { }

  ngOnInit() {
    $('#mutual-tab-menu').find('li').removeClass('current');
    $('#mutual-tab-menu').find('li#menu2').addClass('current');
  }
  checkpage(page) {
    window.scroll(0,0);
    console.log(page)

    switch (page) {
        case 'sell':
            this.page = "sell";
            break;        
        case 'sell-step1':
            this.page = "sell-step1";
            break;
        case 'sell-step2':
            this.page = "sell-step2";
            break;
        case 'sell-view-list':
            this.page = "sell-view-list";
            break;        
        default:

            this.page = "sell";
            console.log(this.page)
            break;
    }


}
}
