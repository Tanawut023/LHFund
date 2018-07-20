import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-transaction',
    templateUrl: './transaction.component.html',
    styleUrls: ['./transaction.component.scss',]
})
export class TransactionComponent implements OnInit {
    page = "purchase-over-view";

    constructor() { }

    ngOnInit() {
        $('#bottom-main-nav li').find('a').removeClass('current');
        $('#bottom-main-nav li#transaction').find('a').addClass('current');
    }
    checkpage(page) {
        window.scroll(0,0);
        console.log(page)

        switch (page) {
            case 'purchase-over-view':
                this.page = "purchase-over-view";
                break;
            case 'sell':
                this.page = "sell";
                break;
            case 'purchase-step1':
                this.page = "purchase-step1";
                break;
            case 'purchase-step2':
                this.page = "purchase-step2";
                break;
            case 'signup2':
                this.page = "signup2";
                break;
            default:

                this.page = "purchase-over-view";
                console.log(this.page)
                break;
        }


    }
}
