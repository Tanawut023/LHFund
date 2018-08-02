import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-regular-sell',
  templateUrl: './regular-sell.component.html',
  styleUrls: ['./regular-sell.component.scss']
})
export class RegularSellComponent implements OnInit {
  page = "regular-sell";
  constructor() { }

  ngOnInit() {
    $('#mutual-tab-menu').find('li').removeClass('current');
    $('#mutual-tab-menu').find('li#menu2').addClass('current');
  }

  checkpage(page) {
    window.scroll(0,0);
    console.log(page)

    switch (page) {
        case 'regular-sell':
            this.page = "regular-sell";
            break;
        case 'regular-sell-step1':
            this.page = "regular-sell-step1";
            break;
        default:
            this.page = "regular-sell";
            console.log(this.page)
            break;
    }


}

}
