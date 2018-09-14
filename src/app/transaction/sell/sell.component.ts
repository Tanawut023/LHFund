import { Component, OnInit } from '@angular/core';
import { BaseApplicationDataService } from '../../service/base-application-data.service';
import { first } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-sell',
    templateUrl: './sell.component.html',
    styleUrls: ['./sell.component.scss']
})
export class SellComponent implements OnInit {
    page = "sell";
    model;
    userall: any = {};
    userselect: any = {};
    unitholderno: any = "init";

    constructor(
        private translate: TranslateService,
        private basedataservice: BaseApplicationDataService
    ) { }

    ngOnInit() {

        this.basedataservice.getSelectListUnitholder()
            .pipe(first())
            .subscribe(
                data => {
                    // console.log(data)
                    this.userall = data;
                    // console.log(this.userall)
                    this.unitholderno = this.userall.unitholder[0];
                    // console.log(this.unitholderno)
                    const userselected = {
                        UnitholderId: this.userall.unitholder[0].Value,
                        UnitholderNo: this.userall.unitholder[0].Text
                    }
                    this.basedataservice.getUnitholder(userselected)
                        .pipe(first())
                        .subscribe(
                            data => {
                                // console.log(data)
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

        const userselected = {
            UnitholderId: this.unitholderno.Value,
            UnitholderNo: this.unitholderno.Text
        }
        this.basedataservice.getUnitholder(userselected)
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
