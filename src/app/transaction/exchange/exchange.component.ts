import { Component, OnInit } from '@angular/core';
import { BaseApplicationDataService } from '../../service/base-application-data.service';
import { first } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import { HttpParams } from '@angular/common/http';
import { OrderService } from '../../service/order.service';
import { datethai, formatdatethai } from '../../Share/dateformat';
@Component({
    selector: 'app-exchange',
    templateUrl: './exchange.component.html',
    styleUrls: ['./exchange.component.scss']
})
export class ExchangeComponent implements OnInit {
    page = "exchange";
    datepick;
    userall: any = {};
    userselect: any = {};
    unitholderno: any = "N/A";
    unitholderswitching: any = {};
    fundlist: any = 'N/A';
    banklist: any = 'N/A';
    holdingbalancelist: any = 'N/A';
    currentdate = datethai;
    date: any;

    constructor(
        private translate: TranslateService,
        private basedataservice: BaseApplicationDataService,
        private orderservice: OrderService

    ) { }

    ngOnInit() {

        this.getSelectListUnitholder();

        $('#mutual-tab-menu').find('li').removeClass('current');
        $('#mutual-tab-menu').find('li#menu3').addClass('current');
    }
    checkpage(page) {
        window.scroll(0, 0);
        console.log(page)

        switch (page) {
            case 'exchange':
                this.page = "exchange";
                break;
            case 'exchange-step1':
                this.date = this.datepick.year + "-" + this.datepick.month + "-" + this.datepick.day;
                this.date = formatdatethai(this.date);
                this.page = "exchange-step1";
                break;
            case 'exchange-step2':
                this.page = "exchange-step2";
                break;
            case 'exchange-view-list':
                this.page = "exchange-view-list";
                break;
            default:

                this.page = "exchange";
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
        console.log(params);
        this.orderservice.changeunitholderswitching(params)
            .pipe(first())
            .subscribe(
                data => {
                    if (data) {
                        console.log(data)
                        this.unitholderswitching = data;
                        if (this.unitholderswitching.fundlist[0]) {                            
                            this.fundlist = this.unitholderswitching.fundlist[0];
                        }
                        if (this.unitholderswitching.bankaccountlist[0]) {
                            this.banklist = this.unitholderswitching.bankaccountlist[0];
                        }
                    }
                },
                error => {
                    console.log(error)

                });

    }
}
