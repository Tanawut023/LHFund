import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BaseApplicationDataService } from '../../service/base-application-data.service';
import { first } from 'rxjs/operators';
import { HttpParams } from '@angular/common/http';
@Component({
    selector: 'app-purchase',
    templateUrl: './purchase.component.html',
    styleUrls: ['./purchase.component.scss'],
})
export class PurchaseComponent implements OnInit {
    page = "purchase";
    dialog: boolean = false;
    model;
    content = "ท่านยังไม่ได้ทำแบบประเมินความเสี่ยงหรือเคยทำมาแล้วเกิน2ปี หากต้องการดำเนินการต่อกรุณากด ตกลง";
    userall: any = {};
    userselect: any = {};
    unitholderno: any = "init";

    constructor(
        private translate: TranslateService,
        private basedataservice: BaseApplicationDataService
    ) {
        translate.addLangs(["th", "en"]);
    }

    ngOnInit() {

        this.basedataservice.getSelectListUnitholder()
            .pipe(first())
            .subscribe(
                data => {
                    // console.log(data)
                    this.userall = data;
                    // console.log(this.userall)
                    this.unitholderno = this.userall.unitholderlist[0];
                    // console.log(this.unitholderno)
                    // this.userselect = {
                    //     UnitholderId: this.userall.unitholderlist[0].Value,
                    //     UnitholderNo: this.userall.unitholderlist[0].Text
                    // }
                    // this.unitholderno = this.userall.unitholder[0].Text;
                    let params = new HttpParams().set('unitholderid', this.userall.unitholderlist[0].Value);
                    this.basedataservice.getUnitholderSubscription(params)
                        .pipe(first())
                        .subscribe(
                            data => {
                                console.log(data)
                                this.userselect = data;

                            },
                            error => {
                                console.log(error)

                            });


                },
                error => {
                    console.log(error)

                });

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
                this.page = "purchase-step1";
                // if(this.dialog == false){
                //     this.dialog = true;
                // }
                // else{
                //     this.dialog = false;
                //     this.page = "purchase-step1";
                // }
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
        
        let params = new HttpParams().set('unitholderid', this.unitholderno);
        this.basedataservice.getUnitholderSubscription(params)
            .pipe(first())
            .subscribe(
                data => {
                    // console.log(data)
                    this.userselect = data;

                },
                error => {
                    console.log(error)

                });
    }

}
