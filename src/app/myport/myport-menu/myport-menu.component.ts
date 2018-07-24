import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myport-menu',
  templateUrl: './myport-menu.component.html',
  styleUrls: ['./myport-menu.component.scss']
})
export class MyportMenuComponent implements OnInit {
  page = 'dashboard';
  constructor() { }

  ngOnInit() {
  }

  checkpage(page) {
    console.log(page)
    window.scroll(0,0);
    switch (page) {
        case 'suitability':
            this.page = "suitability";
            break;
        case 'suitability-score':
            this.page = "suitability-score";
            break;
        case 'otp':
            this.page = "otp";
            break;
        case 'signup1':
            this.page = "signup1";
            break;
        case 'signup2':
            this.page = "signup2";
            break;
        default:

            this.page = "dashboard";
            console.log(this.page)
            break;
    }


}

}
