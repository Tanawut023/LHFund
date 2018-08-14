import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'app-transaction',
    templateUrl: './transaction.component.html',
    styleUrls: ['./transaction.component.scss',]
})
export class TransactionComponent implements OnInit {
    page = "purchase-over-view";

    constructor(private route: ActivatedRoute, private router: Router,private translate: TranslateService) { 
        translate.addLangs(["th", "en"]);
    }

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
            case 'purchase-view-list':
                this.page = "purchase-view-list";
                break;
            case 'sell-view-list':
                this.page = "sell-view-list";
                break;
            case 'exchange-view-list':
                this.page = "exchange-view-list";
                break;
            case 'purchase-for-sell-view-list':
                this.page = "purchase-for-sell-view-list";
                break;
            case 'sell-step1':
            this.page = "sell-step1";
                break;
            case 'sell-step2':
            this.page = "sell-step2";
                break;
            case 'exchange':
            this.page = "exchange";
                break;
            case 'exchange-step1':
            this.page = "exchange-step1";
                break;
            case 'exchange-step2':
            this.page = "exchange-step2";
                break;
            case 'purchase-for-sell':
            this.page = "purchase-for-sell";
                break;
            case 'purchase-for-sell-step1':
            this.page = "purchase-for-sell-step1";
                break;
            case 'purchase-for-sell-step2':
            this.page = "purchase-for-sell-step2";
                break;
            default:

                this.page = "purchase-over-view";
                console.log(this.page)
                break;
        }


    }
    navigate(target){
        var target = target;
        console.log(target);
        this.router.navigate([target], { relativeTo: this.route });
      }
}
