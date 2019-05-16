import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import { HttpParams } from '@angular/common/http';
import { OrderService } from '../../service/order.service';
import { datethai, formatdatethai, boostrapdatepicker, getDate, dateeng } from '../../Share/dateformat';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { log } from 'util';
import { Observable } from 'rxjs';
import { LanguageService } from '../../service/language.service';
import { BaseApplicationDataService } from '../../service/base-application-data.service';
declare var $: any;
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
    currentdateEng = dateeng;
    date: any;
    holdingbalanceselected: any;
    message: any;
    orderswitchinglist: any;
    formexchange: FormGroup;
    isNotValid: boolean;
    resultsubmit: any;
    minDate;
    amount: any = 3;
    Type: any = "";
    funddestinationlist: any;
    funddestination: any;
    public mask = [/\d/, /\d/, /\d/, ',', /\d/, /\d/, /\d/, ',', /\d/, /\d/, /\d/];
    _originalData: any;
    deletedOrder: any;
    nolist: boolean = false;
    Islevel: boolean = false;
    Isprotect: boolean = false;
    loading = false;
    lang: Observable<string>;
    userdetail: any;
    lesszero: boolean;


    constructor(
        private translate: TranslateService,
        private orderservice: OrderService,
        private fb: FormBuilder,
        private basedataservice: BaseApplicationDataService,
        private langservice: LanguageService

    ) { }

    ngOnInit() {

        this.getSelectListUnitholder();
        this.createFormValidate();
        this._originalData = this.formexchange.value;

        $('#mutual-tab-menu').find('li').removeClass('current');
        $('#mutual-tab-menu').find('li#menu3').addClass('current');

        var d = new Date();
        var endDate = new Date(d.getFullYear(), d.getMonth(), d.getDate() + 1);
        console.log(endDate);

        this.minDate = { year: endDate.getFullYear(), month: endDate.getMonth() + 1, day: endDate.getDate() };
        this.datepick = { year: d.getFullYear(), month: d.getMonth() + 1, day: d.getDate() };

        this.langservice.listen().subscribe((m: any) => {
            console.log(m);
            this.lang = m;
        })
        this.userdetail = this.basedataservice.getmemberInfo();
    }

    checkpage(page) {
        window.scroll(0, 0);
        console.log(page)

        switch (page) {
            case 'exchange':
                this.page = "exchange";
                this.getorderinfolist();
                this.reset();
                break;
            case 'exchange-step1':
                if (this.formexchange.controls.date.value) {
                    this.date = this.formexchange.controls.date.value.year + "-" + this.formexchange.controls.date.value.month + "-" + this.formexchange.controls.date.value.day;
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
                this.page = "exchange-step1";
                break;
            case 'exchange-step2':
                this.page = "exchange-step2";
                this.fundlistonChange();
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
                this.getorderinfolist();
            }
        }
    }

    getSelectListUnitholder() {

        this.orderservice.getSelectListUnitholder()
            .pipe(first())
            .subscribe(
                data => {
                    console.log(data);
                    setTimeout(() => {
                        $('.selectpicker').selectpicker('refresh');
                    }, 100);
                    this.userall = data;
                    if (this.userall.unitholderlist.length > 0) {
                        this.unitholderno = this.userall.unitholderlist[0];
                        this.userselect = this.userall.unitholderlist[0];
                        this.getselectlistfundlistandbankaccount();
                        this.getorderinfolist();
                    } else {
                        this.userall = '';
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
                    setTimeout(() => {
                        $('.selectpicker').selectpicker('refresh');
                    }, 100);
                    if (data) {
                        console.log(data)
                        this.unitholderswitching = data;
                    }
                },
                error => {
                    console.log(error)
                });
    }
    fundlistonChange() {
        this.getfundswitchingdestination();
    }

    getorderinfolist() {
        this.orderswitchinglist = [];
        const user = {
            UnitHolderID: this.userselect.UnitholderId,
            TxType: "Switching"
        }
        console.log(user);

        this.orderservice.getorderinfolist(user)
            .pipe(first())
            .subscribe(
                data => {
                    console.log(data);
                    this.orderswitchinglist = data;
                    this.nolist = false;
                    if (this.orderswitchinglist.orderinfolist) {

                        var ref;
                        var array = new Array();
                        var orderlist = new Array();
                        var getdatain_out = new Array();
                        var ReferenceNo = new Array();
                        var fundswitching;
                        var text_refno = "";
                        this.nolist = false;
                        for (let i = 0; i < this.orderswitchinglist.orderinfolist.length; i++) {

                            if (this.orderswitchinglist.orderinfolist[i].ReferenceNo != text_refno) {
                                var text_switchingIn;
                                var text_switchingOut;
                                var iswitching = 1;
                                var Datahas = 0;
                                console.log('1');
                            }

                            if (this.orderswitchinglist.orderinfolist[i].TxType == "Switching In") {
                                text_switchingIn = this.orderswitchinglist.orderinfolist[i];
                                console.log('2');
                            }
                            else if (this.orderswitchinglist.orderinfolist[i].TxType == "Switching Out") {
                                text_switchingOut = this.orderswitchinglist.orderinfolist[i];
                                console.log('3');
                            }

                            if ((this.orderswitchinglist.orderinfolist[i].TxType == "Switching In" || this.orderswitchinglist.orderinfolist[i].TxType == "Switching Out") && this.orderswitchinglist.orderinfolist[i].OrderStatus == 'Initial') {
                                Datahas++;
                                this.nolist = true;
                                console.log('4');
                            }

                            if (iswitching == 2) {
                                console.log('5');
                                array.push({
                                    FundSource: text_switchingOut.FundName,
                                    funddestination: text_switchingIn.FundName,
                                    FundSourceEng: text_switchingOut.FundNameEng,
                                    funddestinationEng: text_switchingIn.FundNameEng,
                                    FundSourceCode: text_switchingOut.FundCode,
                                    funddestinationCode: text_switchingIn.FundCode,
                                    Amount: text_switchingIn.OrderAmount,
                                    Unit: text_switchingIn.OrderUnit,
                                    OrderDate: text_switchingIn.OrderDate,
                                    OrderTime: text_switchingIn.OrderTime,
                                    EffectiveDateSource: text_switchingOut.EffectiveDate,
                                    EffectiveDatedestiantion: text_switchingIn.EffectiveDate,
                                    UnitHolderID: text_switchingOut.UnitHolderID,
                                    OrderID: text_switchingOut.OrderID
                                })
                            }
                            text_refno = this.orderswitchinglist.orderinfolist[i].ReferenceNo;
                            if (this.orderswitchinglist.orderinfolist[i].TxType == "Switching In" || this.orderswitchinglist.orderinfolist[i].TxType == "Switching Out") {
                                iswitching++;
                                console.log('6');
                            }
                        }
                        this.orderswitchinglist = array;
                        console.log(this.orderswitchinglist);
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

    getfundswitchingdestination() {
        $(".se-pre-con").show();
        const user = {
            UnitHolderID: this.userselect.UnitholderId,
            FundID: this.formexchange.controls.fundsource.value.FundID
        }
        console.log(user);

        this.orderservice.changefundswitchingsource(user)
            .pipe(first())
            .subscribe(
                data => {
                    console.log(data);
                    $(".se-pre-con").fadeOut();
                    this.funddestinationlist = data;
                    if (this.page !== "exchange-step2") {
                        setTimeout(() => {
                            $('.selectpicker').selectpicker('refresh');
                        }, 100);
                        this.Type = "";
                        this.formexchange.controls['amount'].reset();
                        this.formexchange.controls['type'].reset();
                        this.formexchange.controls['type'].updateValueAndValidity();

                    }
                    if (this.funddestinationlist.fundswitchingdestination && this.page !== "exchange-step2") {
                        if (this.formexchange.controls.funddestination.value) {
                            this.formexchange.controls['funddestination'].reset();;
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

    createFormValidate() {
        this.formexchange = this.fb.group({
            amount: [null,
                [
                    Validators.required
                ]
            ],
            date: [null],
            type: ["",
                [
                    Validators.required
                ]
            ],
            funddestination: ["",
                [
                    Validators.required
                ]
            ],
            fundsource: ["",
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

    isFieldNotValid(field: string) {
        return !this.formexchange.get(field).valid && this.formexchange.get(field).touched
    }

    ValidatorDisplayCss(field: string) {
        return {
            'has-danger': this.isFieldNotValid(field)
        };
    }

    numberOnly(event): boolean {
        const charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    }

    notmorethan() {
        console.log(this.formexchange.controls.amount.value);
        if (this.formexchange.controls.amount.value) {
            var amount = this.formexchange.controls.amount.value;
            amount = amount.replace(",", "");
            amount = parseFloat(amount);
            console.log(amount);
        }

        if (this.Type == "Amount") {
            if (amount > this.funddestinationlist.availablebalance.AvailableAmount) {
                console.log("false");
                this.formexchange.controls['amount'].setValue(this.funddestinationlist.availablebalance.AvailableAmount, { onlySelf: true });
                return false;
            }
            else {
                console.log("true");
                return true;
            }
        }
        else if (this.Type == "Unit") {
            if (amount > this.funddestinationlist.availablebalance.AvailableUnit) {
                console.log("false");
                this.formexchange.controls['amount'].setValue(this.funddestinationlist.availablebalance.AvailableUnit, { onlySelf: true });
                return false;
            }
            else {
                console.log("true");
                return true;
            }
        }
        else {
            this.formexchange.controls['type'].markAsTouched();
            return false
        }
    }

    tofix(value) {
        console.log(value);
        if (this.Type == 'Amount') {
            if (value) {
                var values = value;
                values = values.replace(",", "");
                var n = parseFloat(values);
                var tofix: any = n.toFixed(2);
                tofix = tofix.toString().replace(/\B(?=(\f{3})+(?!\f))/g, ",");
                console.log(tofix);
                this.formexchange.controls['amount'].setValue(tofix, { onlySelf: true });
            }
        }
        else if (this.Type == 'Unit') {
            if (value) {
                var values = value;
                values = values.replace(",", "");
                var n = parseFloat(values);
                var tofix: any = n.toFixed(4);
                var parts = tofix.toString().split(".");
                parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                console.log(tofix);
                this.formexchange.controls['amount'].setValue(parts.join("."), { onlySelf: true });
            }
        }
    }

    notfill(event): boolean {
        const charCode = (event.which) ? event.which : event.keyCode;
        if (this.Type == "") {
            this.formexchange.controls['type'].markAsTouched();
            return false;
        }
        if (charCode > 31 && (charCode < 48 || charCode > 57) && (charCode !== 46)) {
            return false;
        }
        return true;
    }

    onChangeType() {
        console.log(this.formexchange.controls.type.value);
        this.Type = this.formexchange.controls.type.value;
        this.formexchange.controls.amount.reset();
        if (this.Type == 'All' && this.formexchange.controls.fundsource.value) {
            if (this.funddestinationlist.availablebalance.AvailableUnit != 0) {
                var n = parseFloat(this.funddestinationlist.availablebalance.AvailableUnit);
                var tofix = n.toFixed(4);
                var parts = tofix.toString().split(".");
                parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                this.formexchange.controls['amount'].setValue(parts.join("."), { onlySelf: true });
                this.formexchange.controls['amount'].updateValueAndValidity();
            } else {
                this.formexchange.controls['amount'].setValue(0, { onlySelf: true });
                this.formexchange.controls['amount'].updateValueAndValidity();
            }
        }
    }

    onBlurType() {
        console.log(this.formexchange.controls.type.value);
        this.Type = this.formexchange.controls.type.value;
        if (this.formexchange.controls.amount.value) {
            var amount = this.formexchange.controls.amount.value;
            amount = amount.replace(",", "");
            amount = parseFloat(amount);
            if (this.Type == 'Amount') {
                var tofix: any = amount.toFixed(2);
                if (this.formexchange.controls.fundsource.value) {
                    if (amount > this.funddestinationlist.availablebalance.AvailableAmount) {
                        var n = parseFloat(this.funddestinationlist.availablebalance.AvailableAmount);
                        tofix = n.toFixed(2);
                        tofix = tofix.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                        this.formexchange.controls['amount'].setValue(tofix, { onlySelf: true });
                    } else {
                        this.formexchange.controls['amount'].setValue(tofix.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","), { onlySelf: true });
                    }
                }
                else {
                    this.formexchange.controls['amount'].setValue(tofix.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","), { onlySelf: true });
                }
            }
            else if (this.Type == 'Unit') {
                var tofix: any = amount.toFixed(4);
                if (this.formexchange.controls.fundsource.value) {
                    if (amount > this.funddestinationlist.availablebalance.AvailableUnit) {
                        var n = parseFloat(this.funddestinationlist.availablebalance.AvailableUnit);
                        tofix = n.toFixed(4);
                        var parts = tofix.toString().split(".");
                        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                        this.formexchange.controls['amount'].setValue(parts.join("."), { onlySelf: true });
                    } else {
                        var parts = tofix.toString().split(".");
                        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                        this.formexchange.controls['amount'].setValue(parts.join("."), { onlySelf: true });
                    }
                }
                else {
                    var parts = tofix.toString().split(".");
                    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                    this.formexchange.controls['amount'].setValue(parts.join("."), { onlySelf: true });
                }
            }
        }
        else if (this.Type == 'All' && this.formexchange.controls.fundsource.value) {
            if (this.funddestinationlist.availablebalance.AvailableUnit != 0) {
                var n = parseFloat(this.funddestinationlist.availablebalance.AvailableUnit);
                tofix = n.toFixed(4);
                var parts = tofix.toString().split(".");
                parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                this.formexchange.controls['amount'].setValue(parts.join("."), { onlySelf: true });
                this.formexchange.controls['amount'].updateValueAndValidity();
            } else {
                this.formexchange.controls['amount'].setValue(0, { onlySelf: true });
                this.formexchange.controls['amount'].updateValueAndValidity();
            }
        }
    }

    onSubmited() {
        console.log(this.formexchange);
        this.Islevel = false;
        this.Isprotect = false;
        this.loading = true;
        this.lesszero = false;
        var cd = new Date();
        var Y1 = ((cd.getFullYear() * 1) - 1);
        var Y2 = ((cd.getFullYear() * 1) - 2);
        var Y3 = ((cd.getFullYear() * 1) - 3);
        var M = cd.getMonth();
        var D = cd.getDate();
        var d1 = new Date(Y1 + "-" + M + "-" + D);
        var d2 = new Date(Y2 + "-" + M + "-" + D);
        var d3 = new Date(Y3 + "-" + M + "-" + D);
        var lastupdate = new Date(this.userselect.RiskLevel1LastUpdated);

        if (this.funddestinationlist.availablebalance.AvailableUnit == 0 && this.funddestinationlist.availablebalance.AvailableAmount == 0) {
            this.translate.get('Modal.not-or').subscribe((res: string) => {
                console.log(res);
                this.message = res;
            });
            $('#message').modal({
                backdrop: 'static',
                keyboard: false,
                show: true
            });
        }
        if (this.userselect.RiskLevelExpire == true) {
            console.log('expire');
            this.loading = false;
            $('#expiremodal').modal({
                backdrop: 'static',
                keyboard: false,
                show: true
            });
        } else {
            if (this.formexchange.valid) {
                this.isNotValid = false;
                var user;
                if (this.formexchange.controls.amount.value) {
                    var amount = this.formexchange.controls.amount.value;
                    amount = amount.replace(",", "");
                    amount = parseFloat(amount);
                    console.log(amount);
                }
                if (amount > 0) {

                    if (this.formexchange.controls.date.value) {
                        this.date = this.formexchange.controls.date.value.year + "-" + this.formexchange.controls.date.value.month + "-" + this.formexchange.controls.date.value.day;
                        // this.date = boostrapdatepicker(this.date);

                        if (this.Type == "Amount") {
                            user = {
                                UnitHolderID: this.userselect.UnitholderId,
                                FundID: this.formexchange.controls.fundsource.value.FundID,
                                CounterFundID: this.formexchange.controls.funddestination.value.FundID,
                                TxType: "Switching",
                                OrderUnitType: "Amount",
                                OrderUnit: 0,
                                OrderBankAccountID: 0,
                                OrderAmount: amount,
                                PaymentMethod: "Cash",
                                orderdate: this.date
                            }
                        }
                        else if (this.Type == "Unit") {
                            user = {
                                UnitHolderID: this.userselect.UnitholderId,
                                FundID: this.formexchange.controls.fundsource.value.FundID,
                                CounterFundID: this.formexchange.controls.funddestination.value.FundID,
                                TxType: "Switching",
                                OrderUnitType: "Unit",
                                OrderUnit: amount,
                                OrderBankAccountID: 0,
                                OrderAmount: 0,
                                PaymentMethod: "Cash",
                                orderdate: this.date
                            }
                        }
                        else {
                            user = {
                                UnitHolderID: this.userselect.UnitholderId,
                                FundID: this.formexchange.controls.fundsource.value.FundID,
                                CounterFundID: this.formexchange.controls.funddestination.value.FundID,
                                TxType: "Switching",
                                OrderUnitType: "All",
                                OrderUnit: this.funddestinationlist.availablebalance.AvailableUnit,
                                OrderBankAccountID: 0,
                                OrderAmount: 0,
                                PaymentMethod: "Cash",
                                orderdate: this.date
                            }
                        }
                    }
                    else {
                        if (this.Type == "Amount") {
                            user = {
                                UnitHolderID: this.userselect.UnitholderId,
                                FundID: this.formexchange.controls.fundsource.value.FundID,
                                CounterFundID: this.formexchange.controls.funddestination.value.FundID,
                                TxType: "Switching",
                                OrderUnitType: "Amount",
                                OrderUnit: 0,
                                OrderBankAccountID: 0,
                                OrderAmount: amount,
                                PaymentMethod: "Cash",
                                orderdate: null
                                // getDate()
                            }
                        }
                        else if (this.Type == "Unit") {
                            user = {
                                UnitHolderID: this.userselect.UnitholderId,
                                FundID: this.formexchange.controls.fundsource.value.FundID,
                                CounterFundID: this.formexchange.controls.funddestination.value.FundID,
                                TxType: "Switching",
                                OrderUnitType: "Unit",
                                OrderUnit: amount,
                                OrderBankAccountID: 0,
                                OrderAmount: 0,
                                PaymentMethod: "Cash",
                                orderdate: null
                                // getDate()
                            }
                        }
                        else {
                            user = {
                                UnitHolderID: this.userselect.UnitholderId,
                                FundID: this.formexchange.controls.fundsource.value.FundID,
                                CounterFundID: this.formexchange.controls.funddestination.value.FundID,
                                TxType: "Switching",
                                OrderUnitType: "All",
                                OrderUnit: this.funddestinationlist.availablebalance.AvailableUnit,
                                OrderBankAccountID: 0,
                                OrderAmount: 0,
                                PaymentMethod: "Cash",
                                orderdate: null
                                // getDate()
                            }
                        }
                    }
                    console.log(user);
                    this.orderservice.submitorder(user)
                        .pipe(first())
                        .subscribe(
                            data => {
                                console.log(data);
                                this.resultsubmit = data;
                                this.loading = false;
                                this.checkexpireandlevel();
                            },
                            error => {
                                console.log(error);
                                this.loading = false;
                                this.message = error.error.messages;
                                $('#message').modal({
                                    backdrop: 'static',
                                    keyboard: false,
                                    show: true
                                });
                            });
                }
                else {
                    this.loading = false;
                }
            }
            else {
                this.isNotValid = true;
                this.validateAllFormFields(this.formexchange);
                this.loading = false;
            }
        }
    }

    confirmswitching() {
        this.loading = true;
        this.orderservice.confirmorder(this.resultsubmit.data)
            .pipe(first())
            .subscribe(
                data => {
                    console.log(data);
                    this.loading = false;
                    this.checkpage("exchange-step2");

                    this.translate.get('Modal.succ').subscribe((res: string) => {
                        console.log(res);
                        this.message = res;
                    });
                    $('#message').modal({
                        backdrop: 'static',
                        keyboard: false,
                        show: true
                    });
                },
                error => {
                    console.log(error);
                    this.loading = false;
                    this.message = error.error.messages;
                    $('#message').modal({
                        backdrop: 'static',
                        keyboard: false,
                        show: true
                    });
                });
    }

    checkexpireandlevel() {
        this.loading = true;
        const user = {
            UnitHolderID: this.userselect.UnitholderId,
            FundID: this.formexchange.controls.funddestination.value.FundID,
        }
        console.log(user);

        this.orderservice.changefundswitchingdestination(user)
            .pipe(first())
            .subscribe(
                data => {
                    console.log(data);
                    this.loading = false;
                    if (data['messages'] != null) {
                        this.message = data['messages'];
                        this.Islevel = true;
                    }
                },
                error => {
                    console.log(error);
                    this.message = error.error.messages;
                    this.loading = false;
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
            if (this.formexchange.controls.funddestination.value.isFullyHedge == 'N') {
                console.log('level+protect');
                this.Isprotect = true;
                $('#risklevel').modal({
                    backdrop: 'static',
                    keyboard: false,
                    show: true
                });
            }
            if (this.formexchange.controls.funddestination.value.isFullyHedge !== 'N' && !this.Islevel) {
                console.log('nothing');
                this.checkpage('exchange-step1');
            }
        }, 100)
    }

    reset() {
        console.log('reset');
        this.Type = "";
        this.funddestinationlist = "";
        this.lesszero = false;
        this.createFormValidate();
        this.getselectlistfundlistandbankaccount();
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
        console.log(order);

        this.orderservice.cancelorder(order)
            .pipe(first())
            .subscribe(
                data => {
                    console.log(data);
                    this.deletedOrder = [];
                    this.getorderinfolist();
                    $('#delete').modal('toggle');
                    this.translate.get('Modal.delete-or').subscribe((res: string) => {
                        console.log(res);
                        this.message = res;
                    });
                    $('#message').modal({
                        backdrop: 'static',
                        keyboard: false,
                        show: true
                    });
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

    print() {
        window.focus();
        window.print();
    }

    resetdate() {
        this.formexchange.controls['date'].reset();
    }
}
