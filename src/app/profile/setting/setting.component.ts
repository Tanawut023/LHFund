import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BaseApplicationDataService } from '../../service/base-application-data.service';
import { first } from 'rxjs/operators';
import { HttpParams } from '@angular/common/http';

@Component({
    selector: 'app-setting',
    templateUrl: './setting.component.html',
    styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {
    userall: any = {};
    userselect: any = {};
    unitholderno: any = "init";

    constructor(
        private basedataservice: BaseApplicationDataService
    ) { }

    ngOnInit() {
        this.getSelectListUnitholder();

        $('#mutual-tab-menu').find('li').removeClass('current');
        $('#mutual-tab-menu').find('li#menu4').addClass('current');
    }
    onChange() {

        for (let i = 0; i < this.userall.unitholderlist.length; i++) {
            if (this.userall.unitholderlist[i].UnitholderId == this.unitholderno.UnitholderId) {
                this.userselect = this.userall.unitholderlist[i];
            }
        }
    }

    getSelectListUnitholder() {
        this.basedataservice.getSelectListUnitholder()
            .pipe(first())
            .subscribe(
                data => {
                    this.userall = data;
                    this.unitholderno = this.userall.unitholderlist[0];
                    this.userselect = this.userall.unitholderlist[0];
                },
                error => {
                    console.log(error)

                });
    }

}
