import { Component, OnInit } from '@angular/core';
import { BaseApplicationDataService } from '../../service/base-application-data.service';
import { first } from 'rxjs/operators';
import { HttpParams } from '@angular/common/http';

@Component({
    selector: 'app-regular-purchase',
    templateUrl: './regular-purchase.component.html',
    styleUrls: ['./regular-purchase.component.scss']
})
export class RegularPurchaseComponent implements OnInit {
    page = "regular-purchase";
    model: any = {};
    userall: any = {};
    userselect: any = {};
    unitholderno: any = "init";

    constructor(
        private basedataservice: BaseApplicationDataService
    ) { }

    ngOnInit() {

        this.basedataservice.getSelectListUnitholder()
            .pipe(first())
            .subscribe(
                data => {
                    this.userall = data;
                    this.unitholderno = this.userall.unitholderList[0];
                    this.userselect = this.userall;
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
            case 'regular-purchase':
                this.page = "regular-purchase";
                break;
            case 'regular-purchase-step1':
                this.page = "regular-purchase-step1";
                break;
            default:
                this.page = "regular-purchase";
                console.log(this.page)
                break;
        }


    }
    onGroupChange(c) {
        console.log(c.srcElement.value)
        var value = c.srcElement.value;
        if (value == "ทั้งหมด") {
            return
        }
    }
    onChange() {

        let params = new HttpParams().set('unitholderid', this.unitholderno.Value);
        this.basedataservice.getUnitholder(params)
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
