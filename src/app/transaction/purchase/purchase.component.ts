import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BaseApplicationDataService } from '../../service/base-application-data.service';
import { first } from 'rxjs/operators';
import { HttpParams } from '@angular/common/http';
import { OrderService } from '../../service/order.service'
import { datethai, formatdatethai } from '../../Share/dateformat';

@Component({
    selector: 'app-purchase',
    templateUrl: './purchase.component.html',
    styleUrls: ['./purchase.component.scss'],
})
export class PurchaseComponent implements OnInit {
    page = "purchase";
    dialog: boolean = false;
    datepick;
    content = "ท่านยังไม่ได้ทำแบบประเมินความเสี่ยงหรือเคยทำมาแล้วเกิน2ปี หากต้องการดำเนินการต่อกรุณากด ตกลง";
    userall: any = {};
    userselect: any = {};
    unitholderno: any = "N/A";
    unitholdersubscription: any = {};
    fundlist: any = 'N/A';
    banklist: any = 'N/A';
    currentdate = datethai;
    date: any;





    constructor(
        private translate: TranslateService,
        private basedataservice: BaseApplicationDataService,
        private orderservice: OrderService
    ) {
        translate.addLangs(["th", "en"]);
    }

    ngOnInit() {

        this.getSelectListUnitholder();

        $('#mutual-tab-menu').find('li').removeClass('current');
        $('#mutual-tab-menu').find('li#menu1').addClass('current');
    }
    checkpage(page) {
        window.scroll(0, 0);
        console.log(page)

        switch (page) {
            case 'purchase':
                this.dialog = false;
                this.page = "purchase";
                break;
            case 'purchase-step1':
                this.date = this.datepick.year + "-" + this.datepick.month + "-" + this.datepick.day;
                this.date = formatdatethai(this.date);
                this.page = "purchase-step1";

                break;
            case 'purchase-step2':
                this.page = "purchase-step2";
                break;
            case 'purchase-view-list':
                this.page = "purchase-view-list";
                break;
            default:

                this.page = "purchase";
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
        this.orderservice.changeunitholdersubscription(params)
            .pipe(first())
            .subscribe(
                data => {
                    if (data) {
                        console.log(data)
                        this.unitholdersubscription = data;
                        if (this.unitholdersubscription.fundlist[0]) {
                            this.fundlist = this.unitholdersubscription.fundlist[0];
                        }
                        if (this.unitholdersubscription.bankaccountlist[0]) {
                            this.banklist = this.unitholdersubscription.bankaccountlist[0];
                        }

                    }
                    
                },
                error => {
                    console.log(error)

                });

    }

}
