import { Component, OnInit, AfterViewInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BaseApplicationDataService } from '../../service/base-application-data.service';
import { first } from 'rxjs/operators';
import { HttpParams } from '@angular/common/http';
import { OrderService } from '../../service/order.service'
import { datethai, formatdatethai, getDate, boostrapdatepicker } from '../../Share/dateformat';
import { FormGroup, FormBuilder, Validators, FormControl, ValidatorFn, AbstractControl } from '@angular/forms';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

declare var $: any;
export class customValidationService {
    static checkLimit(min: number, max: number): ValidatorFn {
        return (c: AbstractControl): { [key: string]: boolean } | null => {
            console.log(c.value);
            var amount = c.value;
            if (amount) {
                amount = amount.replace(",", "");
                amount = parseFloat(amount);
            }

            if (amount == 0) {
                console.log("Is 0");
                return { invalid: true };
            }


            if (amount && (isNaN(amount) || amount < min || amount > max || amount == 0)) {
                return { invalid: true };
            }
            return null;
        };
    }
}
@Component({
    selector: 'app-purchase',
    templateUrl: './purchase.component.html',
    styleUrls: ['./purchase.component.scss'],
})
export class PurchaseComponent implements OnInit, AfterViewInit {
    page = "purchase";
    dialog: boolean = false;
    datepick;
    content = "ท่านยังไม่ได้ทำแบบประเมินความเสี่ยงหรือเคยทำมาแล้วเกิน2ปี หากต้องการดำเนินการต่อกรุณากด ตกลง";
    userall: any = {};
    userselect: any = {};
    unitholderno: any = "N/A";
    unitholdersubscription: any = {};
    fundlist: any = "";
    banklist: any = 'N/A';
    currentdate = datethai;
    date: any;
    formsubsription: FormGroup;
    isNotValid = false;
    message: any;
    minDate;
    resultsubmit: any;
    ordersubscriptionlist: any;
    _originalData: any;
    deletedOrder: any;
    nolist: boolean = false;
    dateFormat: 'dd-mm-yy';
    Islevel: boolean = false;
    Isprotect: boolean = false;
    link;

    get cpwd() {
        return this.formsubsription.get('amount');
    }


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
        var endDate = new Date(d.getFullYear(), d.getMonth(), d.getDate() + 1);
        console.log(endDate);

        this.minDate = { year: endDate.getFullYear(), month: endDate.getMonth() + 1, day: endDate.getDate() };
        this.datepick = { year: d.getFullYear(), month: d.getMonth() + 1, day: d.getDate() };
        this.createFormValidate();
        this._originalData = this.formsubsription.value;
    }
    ngAfterViewInit() {
        // document.getElementById('preloader').classList.add('hide');
        // $('.selectpicker').selectpicker();
    }
    checkpage(page) {
        window.scroll(0, 0);
        console.log(page)

        switch (page) {
            case 'purchase':
                this.dialog = false;
                this.page = "purchase";
                this.getorderinfolist();
                this.reset();
                break;
            case 'purchase-step1':
                if (this.formsubsription.controls.date.value) {
                    this.date = this.formsubsription.controls.date.value.year + "-" + this.formsubsription.controls.date.value.month + "-" + this.formsubsription.controls.date.value.day;
                    this.date = formatdatethai(this.date);
                }
                if (this.resultsubmit.messages[0]) {
                    this.message = this.resultsubmit.messages[0];

                    setTimeout(() => {
                        $('#message').modal({
                            backdrop: 'static',
                            keyboard: false,
                            show: true
                        });
                    }, 100);


                }

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
                    console.log(data);

                    if (data) {
                        this.userall = data;
                        this.unitholderno = this.userall.unitholderlist[0];
                        this.userselect = this.userall.unitholderlist[0];
                        this.getselectlistfundlistandbankaccount();
                        this.getorderinfolist();
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
                        // setTimeout(() => {
                        //     $('.selectpicker').selectpicker('refresh');
                        // }, 100);

                        // if (this.unitholdersubscription.fundlist[0]) {
                        //     this.fundlist = this.unitholdersubscription.fundlist[0];
                        // }
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
            fund: ["",
                [
                    Validators.required
                ]
            ],
            amount: [null,
                [
                    Validators.required
                    // , customValidationService.checkLimit(1000, 999999999999)
                ]
            ],
            date: [null]
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
    tofix(value) {
        console.log(value);

        if (value) {
            var values = value;
            values = values.replace(",", "");
            // var m = value.toString().split(",");
            var n = parseFloat(values);
            var tofix: any = n.toFixed(2);
            tofix = tofix.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            console.log(tofix);

            this.formsubsription.controls['amount'].setValue(tofix, { onlySelf: true });
        }

    }
    onSubmited() {
        console.log(this.formsubsription);
        this.Islevel = false;
        this.Isprotect = false;

        // if(this.formsubsription.controls.amount.value){
        //     console.log("t");
        //     var amount = this.formsubsription.controls.amount.value;
        //     amount = parseInt(amount);
        //     if(amount < 1000){
        //         console.log("test");

        //     }

        // }
        if (this.formsubsription.valid) {


            if (this.userselect.RiskLevelExpire == true) {
                console.log('expire');

                $('#expiremodal').modal({
                    backdrop: 'static',
                    keyboard: false,
                    show: true
                });
            } else if (!this.unitholdersubscription.bankaccountlist[0]) {
                this.message = 'ติดต่อเจ้าหน้าที่การตลาด เบอร์ติดต่อ 02-286-3484 หรือ 02-679-2155 เพื่อดำเนินขอเปิดบัญชี ATS';

                setTimeout(() => {
                    $('#message').modal({
                        backdrop: 'static',
                        keyboard: false,
                        show: true
                    });
                }, 100);


            }

            else {
                this.isNotValid = false;
                var user;


                if (this.formsubsription.controls.date.value) {
                    this.date = this.formsubsription.controls.date.value.year + "-" + this.formsubsription.controls.date.value.month + "-" + this.formsubsription.controls.date.value.day;
                    this.date = boostrapdatepicker(this.date);
                    user = {
                        UnitHolderID: this.userselect.UnitholderId,
                        FundID: this.formsubsription.controls.fund.value.FundID,
                        CounterFundID: 0,
                        TxType: "Subscription",
                        OrderUnitType: "Amount",
                        OrderUnit: 0,
                        OrderBankAccountID: this.banklist.BankAccountID,
                        OrderAmount: this.formsubsription.controls.amount.value,
                        PaymentMethod: "ATS",
                        orderdate: this.date
                    }
                }
                else {
                    user = {
                        UnitHolderID: this.userselect.UnitholderId,
                        FundID: this.formsubsription.controls.fund.value.FundID,
                        CounterFundID: 0,
                        TxType: "Subscription",
                        OrderUnitType: "Amount",
                        OrderUnit: 0,
                        OrderBankAccountID: this.banklist.BankAccountID,
                        OrderAmount: this.formsubsription.controls.amount.value,
                        PaymentMethod: "ATS",
                        orderdate: null
                        // getDate()
                    }
                }

                console.log(user);
                this.orderservice.submitorder(user)
                    .pipe(first())
                    .subscribe(
                        data => {
                            console.log(data);
                            this.resultsubmit = data;
                            this.checkexpireandlevel();
                        },
                        error => {
                            console.log(error);
                            this.message = error.error.messages;
                            $('#message').modal({
                                backdrop: 'static',
                                keyboard: false,
                                show: true
                            });

                        });
            }

        }
        else {
            this.isNotValid = true;
            this.validateAllFormFields(this.formsubsription);
        }

    }
    checkexpireandlevel() {

        // var Islevel = false;
        // var Isprotect ;
        const user = {
            UnitHolderID: this.userselect.UnitholderId,
            FundID: this.formsubsription.controls.fund.value.FundID
        }
        console.log(user);

        this.orderservice.changefundsubscription(user)
            .pipe(first())
            .subscribe(
                data => {
                    console.log(data);
                    if (data['messages']) {
                        this.message = data['messages'];
                        this.Islevel = true;
                    }

                },
                error => {
                    console.log(error);
                    this.message = error.error.messages;
                    $('#message').modal({
                        backdrop: 'static',
                        keyboard: false,
                        show: true
                    });

                });

        setTimeout(() => {
            if (this.Islevel) {
                console.log('level');

                $('#risklevel').modal({
                    backdrop: 'static',
                    keyboard: false,
                    show: true
                });
            }
            if (this.formsubsription.controls.fund.value.isFullyHedge == 'N') {
                console.log('level+protect');
                this.Isprotect = true;
                $('#risklevel').modal({
                    backdrop: 'static',
                    keyboard: false,
                    show: true
                });
            }
            if (this.formsubsription.controls.fund.value.isFullyHedge !== 'N' && !this.Islevel) {
                console.log('nothing');
                this.checkpage('purchase-step1');
            }
        }, 100)

    }

    confirmsubscription() {

        this.orderservice.confirmorder(this.resultsubmit.data)
            .pipe(first())
            .subscribe(
                data => {
                    console.log(data);
                    this.page = "purchase-step2";

                },
                error => {
                    console.log(error);
                    this.message = error.error.messages;
                    $('#message').modal({
                        backdrop: 'static',
                        keyboard: false,
                        show: true
                    });

                });
    }
    isFieldNotValid(field: string) {
        return !this.formsubsription.get(field).valid && this.formsubsription.get(field).touched

    }

    ValidatorDisplayCss(field: string) {
        return {
            'has-danger': this.isFieldNotValid(field)
        };
    }
    numberOnly(event): boolean {
        const charCode = (event.which) ? event.which : event.keyCode;
        console.log(charCode);
        if (charCode > 31 && (charCode < 48 || charCode > 57) && (charCode !== 46)) {
            return false;
        }
        return true;

    }
    getorderinfolist() {

        const user = {
            UnitHolderID: this.userselect.UnitholderId,
            TxType: "Subscription"
        }

        this.orderservice.getorderinfolist(user)
            .pipe(first())
            .subscribe(
                data => {
                    console.log(data);
                    this.ordersubscriptionlist = data;
                    this.nolist = false;
                    if (this.ordersubscriptionlist.orderinfolist) {
                        for (let i = 0; i < this.ordersubscriptionlist.orderinfolist.length; i++) {
                            if (this.ordersubscriptionlist.orderinfolist[i].OrderStatus == 'Initial' && this.ordersubscriptionlist.orderinfolist[i].TxType == 'Subscription') {
                                this.nolist = true;
                                console.log("nolist");

                            }
                        }
                    }



                },
                error => {
                    console.log(error);
                    this.message = error.error.messages;
                    $('#message').modal({
                        backdrop: 'static',
                        keyboard: false,
                        show: true
                    });

                });
    }

    reset() {
        console.log('reset');
        this.createFormValidate();
        this.getselectlistfundlistandbankaccount();
    }
    resetdate(){
        this.formsubsription.controls['date'].reset();
    }
    modaldeleteorder(order) {

        this.deletedOrder = order;
        console.log(this.deletedOrder);
        $('#delete').modal({
            backdrop: 'static',
            keyboard: false,
            show: true
        });
    }
    deleteorder() {
        const order = {
            UnitHolderID: this.deletedOrder.UnitHolderID,
            OrderID: this.deletedOrder.OrderID
        }

        this.orderservice.cancelorder(order)
            .pipe(first())
            .subscribe(
                data => {
                    console.log(data);
                    this.getorderinfolist();
                    // this.ordersubscriptionlist = data;
                    $('#delete').modal('toggle');

                },
                error => {
                    console.log(error);
                    $('#delete').modal('toggle');
                    this.message = error.error.messages;
                    $('#message').modal({
                        backdrop: 'static',
                        keyboard: false,
                        show: true
                    });

                });
    }
    isDisabled(date: NgbDateStruct) {
        const d = new Date(date.year, date.month - 1, date.day);
        return d.getDay() === 0 || d.getDay() === 6;
    }
    print() {
        window.focus();
        window.print();
    }
}
