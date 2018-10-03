import { Component, OnInit } from '@angular/core';
import { BaseApplicationDataService } from '../../service/base-application-data.service';
import { first } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import { datethai, formatdatethai } from '../../Share/dateformat';
import { OrderService } from '../../service/order.service'
import { HttpParams } from '@angular/common/http';


@Component({
    selector: 'app-sell',
    templateUrl: './sell.component.html',
    styleUrls: ['./sell.component.scss']
})
export class SellComponent implements OnInit {
    page = "sell";
    datepick;
    userall: any = {};
    userselect: any = {};
    unitholderno: any = "N/A";
    currentdate = datethai;
    unitholderredemption: any = {};
    fundlist: any = 'N/A';
    banklist: any = 'N/A';
    holdingbalancelist: any = 'N/A';
    date: any;

    constructor(
        private translate: TranslateService,
        private basedataservice: BaseApplicationDataService,
        private orderservice: OrderService
    ) { }

    ngOnInit() {

        this.getSelectListUnitholder();


        $('#mutual-tab-menu').find('li').removeClass('current');
        $('#mutual-tab-menu').find('li#menu2').addClass('current');
    }
    checkpage(page) {
        window.scroll(0, 0);
        console.log(page)

        switch (page) {
            case 'sell':
                this.page = "sell";
                break;
            case 'sell-step1':
                this.date = this.datepick.year + "-" + this.datepick.month + "-" + this.datepick.day;
                this.date = formatdatethai(this.date);
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
    onChange() {

        for (let i = 0; i < this.userall.unitholderlist.length; i++) {
            if (this.userall.unitholderlist[i].UnitholderId == this.unitholderno.UnitholderId) {
                this.userselect = this.userall.unitholderlist[i];
                this.getselectlistfundlistandbankaccount();

            }
        }
    }

    getSelectListUnitholder() {
        this.basedataservice.getSelectListUnitholder()
            .pipe(first())
            .subscribe(
                data => {
                    if (data) {
                        this.userall = data;
                        this.unitholderno = this.userall.unitholderlist[0];
                        this.userselect = this.userall.unitholderlist[0];
                        this.getselectlistfundlistandbankaccount();
                    }

                },
                error => {
                    console.log(error)

                });
    }
    getselectlistfundlistandbankaccount() {
        let params = new HttpParams().set('unitholderid', this.userselect.UnitholderId);
        this.orderservice.changeunitholderredemption(params)
            .pipe(first())
            .subscribe(
                data => {
                    console.log(data)
                    if (data) {
                        this.unitholderredemption = data;
                        if (this.unitholderredemption.fundlist[0]) {
                            this.fundlist = this.unitholderredemption.fundlist[0];
                        }
                        if (this.unitholderredemption.bankaccountlist[0]) {
                            this.banklist = this.unitholderredemption.bankaccountlist[0];
                        }
                        if (this.unitholderredemption.holdingbalance[0]) {
                            this.holdingbalancelist = this.unitholderredemption.holdingbalancelist[0];
                        }

                    }
                },
                error => {
                    console.log(error)

                });

    }
}
