import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rmf-ltf',
  templateUrl: './rmf-ltf.component.html',
  styleUrls: ['./rmf-ltf.component.scss']
})
export class RmfLtfComponent implements OnInit {
  page = "ltf-condition-complete";

  constructor() { }

  ngOnInit() {
    $('#bottom-main-nav li').find('a').removeClass('current');
    $('#bottom-main-nav li#rmf-ltf').find('a').addClass('current');
  }

  checkpage(page) {
    window.scroll(0,0);
    console.log(page)

    switch (page) {
        case 'conclusion':
            this.page = "conclusion";
            break;
        case 'certificate':
            this.page = "certificate";
            break;
        case 'ltf-condition-complete':
            this.page = "ltf-condition-complete";
            break;
        case 'signup1':
            this.page = "signup1";
            break;
        case 'signup2':
            this.page = "signup2";
            break;
        default:

            this.page = "ltf-condition-complete";
            console.log(this.page)
            break;
    }


}

}
