import { Component, OnInit } from '@angular/core';
import { BaseApplicationDataService } from '../../service/base-application-data.service';
import { first } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
@Component({
    selector: 'app-exchange',
    templateUrl: './exchange.component.html',
    styleUrls: ['./exchange.component.scss']
})
export class ExchangeComponent implements OnInit {
    page = "exchange";
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
                    this.userselect = {
                        UnitholderId: this.userall.unitholder[0].Value,
                        UnitholderNo: this.userall.unitholder[0].Text
                    }
                    // this.unitholderno = this.userall.unitholder[0].Text;
                    this.basedataservice.getUnitholder(this.userselect)
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

        this.userselect = {
            UnitholderId: this.unitholderno.Value,
            UnitholderNo: this.unitholderno.Text
        }
        this.basedataservice.getUnitholder(this.userselect)
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
