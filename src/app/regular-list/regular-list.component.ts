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
        case 'regular-sell':
            this.page = "regular-sell";
            break;
        case 'regular-exchange':
            this.page = "regular-exchange";
            break;
        case 'all':
            this.page = "all";
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
