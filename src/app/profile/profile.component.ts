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
    window.scroll(0,0);
    console.log(page)

    switch (page) {
      case 'suitability':
        this.page = "suitability";
        break;
      case 'suitability-score':
        this.page = "suitability-score";
        break;
      case 'home':
        this.page = "home";
        break;
      case 'over-view':
        this.page = "over-view";
        break;
      case 'change-password':
        this.page = "change-password";
        break;
      case 'setting':
      this.page = "setting";
      break;
      default:
        this.page = "home";
        console.log(this.page)
        break;
    }


  }
}
