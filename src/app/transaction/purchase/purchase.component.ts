import { Component, OnInit, AfterViewInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BaseApplicationDataService } from '../../service/base-application-data.service';
import { first } from 'rxjs/operators';
import { HttpParams } from '@angular/common/http';
import { OrderService } from '../../service/order.service'
import { datethai, formatdatethai } from '../../Share/dateformat';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

declare var $: any;

@Component({
    selector: 'app-purchase',
    templateUrl: './purchase.component.html',
    styleUrls: ['./purchase.component.scss'],
})
export class PurchaseComponent implements OnInit ,AfterViewInit{
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
    formsubsription: FormGroup;
    isNotValid = false;
    message: any;
    minDate;





    constructor(
        private translate: TranslateService,
        private basedataservice: BaseApplicationDataService,
        private orderservice: OrderService,
        private fb: FormBuilder
    ) {
        translate.addLangs(["th", "en"]);
    }

    ngOnInit() {

        this.getSelectListUnitholder();

        $('#mutual-tab-menu').find('li').removeClass('current');
        $('#mutual-tab-menu').find('li#menu1').addClass('current');

        // $('.selectpicker').selectpicker();
        var d = new Date();
        this.minDate = {year: d.getFullYear(), month: d.getMonth()+1, day: d.getDate()};
        this.datepick = {year: d.getFullYear(), month: d.getMonth()+1, day: d.getDate()};
    }
    ngAfterViewInit() {
        document.getElementById('preloader').classList.add('hide');
        $('.selectpicker').selectpicker();
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
                // this.onSubmit();
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
                        setTimeout(() => {
                            $('.selectpicker').selectpicker('refresh');
                          }, 100);
                        
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

    createFormValidate() {
        this.formsubsription = this.fb.group({
            username: [null,
                [
                    Validators.required
                ]
            ],
            password: [null,
                [
                    Validators.required
                ]
            ]
        })
    }
    validateAllFormFields(formGroup: FormGroup) {
        Object.keys(formGroup.controls).forEach(field => {
            const control = formGroup.get(field);
            if (control instanceof FormControl) {
                control.markAsTouched({ onlySelf: true });
            } else if (control instanceof FormGroup) {
                this.validateAllFormFields(control);
            }
        })
    }
    onSubmit() {

        const user = {
            UnitHolderID: this.userselect.UnitholderId,
            FundID: this.fundlist.FundID
        }
        console.log(user);

        this.orderservice.changefundsubscription(user)
            .pipe(first())
            .subscribe(
                data => {
                    console.log(data);
                    if (data['messages']) {
                        this.message = data['messages'];
                        $('#message').modal({
                            backdrop: 'static',
                            keyboard: false,
                            show: true
                        });
                        // this.page = "purchase-step1";
                    }
                    else{
                        this.page = "purchase-step1";
                    }

                },
                error => {
                    console.log(error);
                    if (error['messages']) {
                        this.message = error['messages'];
                        $('#message').modal({
                            backdrop: 'static',
                            keyboard: false,
                            show: true
                        });
                    }
                });

    }
}
