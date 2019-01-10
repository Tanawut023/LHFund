import { Component, OnInit } from '@angular/core';
import { BaseApplicationDataService } from '../../service/base-application-data.service';
import { first } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import { datethai, formatdatethai, getDate, boostrapdatepicker } from '../../Share/dateformat';
import { OrderService } from '../../service/order.service'
import { HttpParams } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
declare var $: any;


@Component({
    selector: 'app-sell',
    templateUrl: './sell.component.html',
    styleUrls: ['./sell.component.scss']
})
export class SellComponent implements OnInit {
    page = "sell";
    datepick;
    userall: any = {};
    userselect: any = {};
    unitholderno: any = "N/A";
    currentdate = datethai;
    unitholderredemption: any = {};
    fundlist: any = 'N/A';
    banklist: any = 'N/A';
    holdingbalancelist: any = 'N/A';
    date: any;
    holdingbalanceselected: any;
    message: any;
    orderredemptionlist: any;
    formredemption: FormGroup;
    isNotValid: boolean;
    resultsubmit: any;
    minDate;
    amount: any = 3;
    Type: any = "";
    _originalData: any;
    deletedOrder: any;
    nolist: boolean = false;



    constructor(
        private translate: TranslateService,
        private basedataservice: BaseApplicationDataService,
        private orderservice: OrderService,
        private fb: FormBuilder
    ) { }

    ngOnInit() {

        this.getSelectListUnitholder();
        this.createFormValidate();
        this._originalData = this.formredemption.value;


        $('#mutual-tab-menu').find('li').removeClass('current');
        $('#mutual-tab-menu').find('li#menu2').addClass('current');
        var d = new Date();
        var endDate = new Date(d.getFullYear(),d.getMonth(),d.getDate() + 1);
        console.log(endDate);
        
        this.minDate = { year: endDate.getFullYear(), month: endDate.getMonth() + 1, day: endDate.getDate() };
        this.datepick = { year: d.getFullYear(), month: d.getMonth() + 1, day: d.getDate() };


    }
    checkpage(page) {
        window.scroll(0, 0);
        console.log(page)

        switch (page) {
            case 'sell':
                this.page = "sell";
                this.getorderinfolist();
                this.reset();
                break;
            case 'sell-step1':
                if (this.formredemption.controls.date.value) {
                    this.date = this.formredemption.controls.date.value.year + "-" + this.formredemption.controls.date.value.month + "-" + this.formredemption.controls.date.value.day;
                    this.date = formatdatethai(this.date);
                }
                this.page = "sell-step1";
                break;
            case 'sell-step2':
                this.page = "sell-step2";
                this.fundlistonChange();
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
        this.orderservice.changeunitholderredemption(params)
            .pipe(first())
            .subscribe(
                data => {
                    console.log(data)
                    if (data) {
                        this.unitholderredemption = data;
                        if (this.unitholderredemption.fundlist) {
                            this.fundlist = this.unitholderredemption.fundlist[0];
                        }
                        if (this.unitholderredemption.bankaccountlist) {
                            this.banklist = this.unitholderredemption.bankaccountlist[0];
                        }
                        if (this.unitholderredemption.holdingbalance) {
                            this.holdingbalancelist = this.unitholderredemption.holdingbalance[0];
                            // this.holdingbalanceselected = this.unitholderredemption.holdingbalance[0];
                        }

                    }
                },
                error => {
                    console.log(error)

                });

    }
    fundlistonChange() {
        // this.holdingbalanceselected = this.formredemption.controls.fund.value;






        const user = {
            UnitHolderID: this.userselect.UnitholderId,
            FundID: this.formredemption.controls.fund.value.FundID
        }

        this.orderservice.changefundredemption(user)
            .pipe(first())
            .subscribe(
                data => {
                    console.log(data);
                    this.holdingbalanceselected = data;

                    if (this.formredemption.controls.amount.value && this.page !== "sell-step2") {

                        this.Type = "";
                        this.formredemption.controls['amount'].setValue("", { onlySelf: true });
                        this.formredemption.controls['type'].setValue("", { onlySelf: true });
                        //     var amount = this.formredemption.controls.amount.value;
                        //     amount = amount.replace(",", "");
                        //     amount = parseFloat(amount);

                        //     if (this.Type == "Amount") {
                        //         var tofix: any = amount.toFixed(2);
                        //         if (amount > this.holdingbalanceselected.availablebalance.AvailableAmount) {
                        //             console.log("false");
                        //             var AvailableAmount = parseFloat(this.holdingbalanceselected.availablebalance.AvailableAmount);
                        //             tofix = AvailableAmount.toFixed(2);
                        //             tofix = tofix.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                        //             this.formredemption.controls['amount'].setValue(tofix, { onlySelf: true });

                        //         }
                        //         else {
                        //             this.formredemption.controls['amount'].setValue(tofix.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","), { onlySelf: true });
                        //         }

                        //     }
                        //     else if (this.Type == "Unit") {
                        //         var tofix: any = amount.toFixed(4);
                        //         if (amount > this.holdingbalanceselected.availablebalance.AvailableUnit) {
                        //             console.log("false");
                        //             var AvailableUnit = parseFloat(this.holdingbalanceselected.availablebalance.AvailableUnit);
                        //             tofix = AvailableUnit.toFixed(4);
                        //             var parts = tofix.toString().split(".");
                        //             parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                        //             this.formredemption.controls['amount'].setValue(parts.join("."), { onlySelf: true });

                        //         }
                        //         else {
                        //             var parts = tofix.toString().split(".");
                        //             parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                        //             this.formredemption.controls['amount'].setValue(parts.join("."), { onlySelf: true });
                        //         }
                        //     } else if (this.Type == "All") {
                        //         var tofix: any = amount.toFixed(4);
                        //         var AvailableUnit = parseFloat(this.holdingbalanceselected.availablebalance.AvailableUnit);
                        //         tofix = AvailableUnit.toFixed(4);
                        //         var parts = tofix.toString().split(".");
                        //         parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                        //         this.formredemption.controls['amount'].setValue(parts.join("."), { onlySelf: true });
                        //     }
                        // }
                        // else if (this.Type == 'All') {
                        //     if (this.holdingbalanceselected.availablebalance.AvailableUnit) {
                        //         var n = parseFloat(this.holdingbalanceselected.availablebalance.AvailableUnit);
                        //         tofix = n.toFixed(4);
                        //         var parts = tofix.toString().split(".");
                        //         parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                        //         this.formredemption.controls['amount'].setValue(parts.join("."), { onlySelf: true });
                        //     }

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

    getorderinfolist() {

        const user = {
            UnitHolderID: this.userselect.UnitholderId,
            TxType: "Redemption"
        }

        this.orderservice.getorderinfolist(user)
            .pipe(first())
            .subscribe(
                data => {
                    console.log(data);
                    this.orderredemptionlist = data;
                    this.nolist = false;
                    if (this.orderredemptionlist.orderinfolist) {
                        for (let i = 0; i < this.orderredemptionlist.orderinfolist.length; i++) {
                            if (this.orderredemptionlist.orderinfolist[i].OrderStatus == 'Initial' && this.orderredemptionlist.orderinfolist[i].TxType == 'Redemption') {
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
    createFormValidate() {
        this.formredemption = this.fb.group({
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
            fund: ["",
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
        return !this.formredemption.get(field).valid && this.formredemption.get(field).touched

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
        console.log(this.formredemption.controls.amount.value);
        // console.log(this.holdingbalanceselected.Unit);
        if (this.formredemption.controls.amount.value) {
            var amount = this.formredemption.controls.amount.value;
            amount = amount.replace(",", "");
            amount = parseFloat(amount);

        }


        if (this.Type == "Amount") {
            if (amount > this.holdingbalanceselected.availablebalance.AvailableAmount) {
                console.log("false");
                this.formredemption.controls['amount'].setValue(this.holdingbalanceselected.availablebalance.AvailableAmount, { onlySelf: true });
                return false;
            }
            else {
                console.log("true");

                return true;
            }
        }
        else if (this.Type == "Unit") {
            if (amount > this.holdingbalanceselected.availablebalance.AvailableUnit) {
                console.log("false");
                this.formredemption.controls['amount'].setValue(this.holdingbalanceselected.availablebalance.AvailableUnit, { onlySelf: true });
                return false;
            }
            else {
                console.log("true");

                return true;
            }
        }
        else {
            this.formredemption.controls['type'].markAsTouched();
            return false
        }



    }
    notfill(event): boolean {
        const charCode = (event.which) ? event.which : event.keyCode;
        if (this.Type == "") {
            this.formredemption.controls['type'].markAsTouched();
            return false;
        }
        if (charCode > 31 && (charCode < 48 || charCode > 57) && (charCode !== 46)) {
            return false;
        }

        return true;

    }
    onChangeType() {
        console.log(this.formredemption.controls.type.value);
        this.Type = this.formredemption.controls.type.value;
        if (this.formredemption.controls.amount.value) {
            var amount = this.formredemption.controls.amount.value;
            amount = amount.replace(",", "");
            amount = parseFloat(amount);

        }

        if (this.Type == 'Amount') {
            var tofix: any = amount.toFixed(2);
            if (this.formredemption.controls.fund.value) {
                if (amount > this.holdingbalanceselected.availablebalance.AvailableAmount) {
                    var n = parseFloat(this.holdingbalanceselected.availablebalance.AvailableAmount);
                    tofix = n.toFixed(2);
                    tofix = tofix.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                    this.formredemption.controls['amount'].setValue(tofix, { onlySelf: true });
                } else {
                    this.formredemption.controls['amount'].setValue(tofix.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","), { onlySelf: true });
                }
            }
            else {
                this.formredemption.controls['amount'].setValue(tofix.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","), { onlySelf: true });
            }

        }
        else if (this.Type == 'Unit') {
            var tofix: any = amount.toFixed(4);
            if (this.formredemption.controls.fund.value) {
                if (amount > this.holdingbalanceselected.availablebalance.AvailableUnit) {
                    var n = parseFloat(this.holdingbalanceselected.availablebalance.AvailableUnit);
                    tofix = n.toFixed(4);
                    var parts = tofix.toString().split(".");
                    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                    this.formredemption.controls['amount'].setValue(parts.join("."), { onlySelf: true });
                } else {
                    var parts = tofix.toString().split(".");
                    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                    this.formredemption.controls['amount'].setValue(parts.join("."), { onlySelf: true });
                }
            }
            else {
                var parts = tofix.toString().split(".");
                parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                this.formredemption.controls['amount'].setValue(parts.join("."), { onlySelf: true });
            }

        } else if (this.Type == 'All') {
            if (this.holdingbalanceselected.availablebalance.AvailableUnit) {
                var n = parseFloat(this.holdingbalanceselected.availablebalance.AvailableUnit);
                tofix = n.toFixed(4);
                var parts = tofix.toString().split(".");
                parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                this.formredemption.controls['amount'].setValue(parts.join("."), { onlySelf: true });
            }

        }
        else {
            if (this.holdingbalanceselected.availablebalance.AvailableUnit) {
                var n = parseFloat(this.holdingbalanceselected.availablebalance.AvailableUnit);
                tofix = n.toFixed(4);
                var parts = tofix.toString().split(".");
                parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                this.formredemption.controls['amount'].setValue(parts.join("."), { onlySelf: true });
            }
        }





    }
    tofix(value) {
        console.log(value);
        if (this.Type == 'Amount') {
            if (value) {
                var values = value;
                values = values.replace(",", "");
                // var m = value.toString().split(",");
                var n = parseFloat(values);
                var tofix: any = n.toFixed(2);
                tofix = tofix.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                console.log(tofix);

                this.formredemption.controls['amount'].setValue(tofix, { onlySelf: true });
            }
        }
        else if (this.Type == 'Unit') {
            if (value) {
                var values = value;
                values = values.replace(",", "");
                // var m = value.toString().split(",");
                var n = parseFloat(values);
                var tofix: any = n.toFixed(4);
                var parts = tofix.toString().split(".");
                parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                // tofix = tofix.toString().replace(/\B(?=(\f{3})+(?!\f))/g, ",");
                console.log(tofix);

                this.formredemption.controls['amount'].setValue(parts.join("."), { onlySelf: true });
            }
        }


    }
    onSubmited() {
        console.log(this.formredemption);

        if (this.formredemption.controls.amount.valid && this.formredemption.controls.type.valid && this.formredemption.controls.fund.valid) {
            this.isNotValid = false;
            var user;

            if (this.formredemption.controls.amount.value) {
                var amount = this.formredemption.controls.amount.value;
                amount = amount.replace(",", "");
                amount = parseFloat(amount);

            }

            if (this.formredemption.controls.date.value) {
                this.date = this.formredemption.controls.date.value.year + "-" + this.formredemption.controls.date.value.month + "-" + this.formredemption.controls.date.value.day;
                this.date = boostrapdatepicker(this.date);

                if (this.Type == "Amount") {
                    user = {
                        UnitHolderID: this.userselect.UnitholderId,
                        FundID: this.formredemption.controls.fund.value.FundID,
                        CounterFundID: 0,
                        TxType: "Redemption",
                        OrderUnitType: "Amount",
                        OrderUnit: 0,
                        OrderBankAccountID: this.banklist.BankAccountID,
                        OrderAmount: amount,
                        PaymentMethod: "ATS",
                        orderdate: this.date
                    }
                }
                else if (this.Type == "Unit") {
                    user = {
                        UnitHolderID: this.userselect.UnitholderId,
                        FundID: this.formredemption.controls.fund.value.FundID,
                        CounterFundID: 0,
                        TxType: "Redemption",
                        OrderUnitType: "Unit",
                        OrderUnit: amount,
                        OrderBankAccountID: this.banklist.BankAccountID,
                        OrderAmount: 0,
                        PaymentMethod: "ATS",
                        orderdate: this.date
                    }
                }
                else {
                    user = {
                        UnitHolderID: this.userselect.UnitholderId,
                        FundID: this.formredemption.controls.fund.value.FundID,
                        CounterFundID: 0,
                        TxType: "Redemption",
                        OrderUnitType: "All",
                        OrderUnit: this.holdingbalanceselected.availablebalance.AvailableUnit,
                        OrderBankAccountID: this.banklist.BankAccountID,
                        OrderAmount: 0,
                        PaymentMethod: "ATS",
                        orderdate: this.date
                    }
                }
            }
            else {
                if (this.Type == "Amount") {
                    user = {
                        UnitHolderID: this.userselect.UnitholderId,
                        FundID: this.formredemption.controls.fund.value.FundID,
                        CounterFundID: 0,
                        TxType: "Redemption",
                        OrderUnitType: "Amount",
                        OrderUnit: 0,
                        OrderBankAccountID: this.banklist.BankAccountID,
                        OrderAmount: amount,
                        PaymentMethod: "ATS",
                        orderdate: null
                        // getDate()
                    }
                }
                else if (this.Type == "Unit") {
                    user = {
                        UnitHolderID: this.userselect.UnitholderId,
                        FundID: this.formredemption.controls.fund.value.FundID,
                        CounterFundID: 0,
                        TxType: "Redemption",
                        OrderUnitType: "Unit",
                        OrderUnit: amount,
                        OrderBankAccountID: this.banklist.BankAccountID,
                        OrderAmount: 0,
                        PaymentMethod: "ATS",
                        orderdate: null
                        // getDate()
                    }
                }
                else {
                    user = {
                        UnitHolderID: this.userselect.UnitholderId,
                        FundID: this.formredemption.controls.fund.value.FundID,
                        CounterFundID: 0,
                        TxType: "Redemption",
                        OrderUnitType: "All",
                        OrderUnit: this.holdingbalanceselected.availablebalance.AvailableUnit,
                        OrderBankAccountID: this.banklist.BankAccountID,
                        OrderAmount: 0,
                        PaymentMethod: "ATS",
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
                        this.checkpage('sell-step1');
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
        else {
            this.isNotValid = true;
            this.validateAllFormFields(this.formredemption);
        }

    }
    confirmredemption() {

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

        this.orderservice.confirmorder(this.resultsubmit.data)
            .pipe(first())
            .subscribe(
                data => {
                    console.log(data);
                    this.checkpage("sell-step2");

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
        this.Type = "";
        this.holdingbalanceselected = "";
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
    print() {
        window.focus();
        window.print();
      }
}
