import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  page = "home";
  constructor() { }

  ngOnInit() {
    $('#bottom-main-nav li').find('a').removeClass('current');
    $('#bottom-main-nav li#profile').find('a').addClass('current');
  }
  checkpage(page) {
    console.log(page)

    switch (page) {
      case 'purchase':
        this.page = "purchase";
        break;
      case 'sell':
        this.page = "sell";
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

        this.page = "signin";
        console.log(this.page)
        break;
    }


  }
}
