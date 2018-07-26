import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-report',
    templateUrl: './report.component.html',
    styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
    page = "past-events";

    constructor() { }

    ngOnInit() {
        $('#bottom-main-nav li').find('a').removeClass('current');
        $('#bottom-main-nav li#report').find('a').addClass('current');
    }
    checkpage(page) {
        console.log(page)
        window.scroll(0,0);

        switch (page) {
            case 'confirmation':
                this.page = "confirmation";
                break;
            case 'past-events':
                this.page = "past-events";
                break;
            case 'not-available-list':
                this.page = "not-available-list";
                break;
            case 'summary':
                this.page = "summary";
                break;
            case 'receipt-history':
                this.page = "receipt-history";
                break;
            case 'today-list':
                this.page = "today-list";
                break;
            case 'type':
                this.page = "type";
                break;
            default:

                this.page = "past-events";
                console.log(this.page)
                break;
        }


    }
}
