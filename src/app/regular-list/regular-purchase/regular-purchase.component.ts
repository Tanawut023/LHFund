import { Component, OnInit } from '@angular/core';
import { BaseApplicationDataService } from '../../service/base-application-data.service';
import { first } from 'rxjs/operators';
import { HttpParams } from '@angular/common/http';
import { StandingorderService } from '../../service/standingorder.service'
import { FormGroup, FormBuilder, Validators, FormControl, ValidatorFn, AbstractControl } from '@angular/forms';
import { getDate, boostrapdatepicker } from '../../Share/dateformat';
import { Observable } from 'rxjs';
import { LanguageService } from '../../service/language.service';
import { OrderService } from '../../service/order.service';
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
    month;
    banklist;
    Bank;
    fundlist: Object;
    formsubstanding: FormGroup;
    minDate: { year: number; month: number; day: number; };
    Islevel: boolean;
    Isprotect: boolean;
    message: string;
    isNotValid: boolean;
    resultsubmit: Object;
    datestart;
    dateend;
    standingorder;
    nolist: boolean;
    deletedOrder: any;
    i;
    deletedGroup: any;
    IsEdit: boolean = false;
    lang: Observable<string>;
    dateless: boolean = false;
    loading = false;
    userdetail: any;

    get cpwd() {
        return this.formsubstanding.get('amount');
    }

    constructor(
        private basedataservice: BaseApplicationDataService,
        private standingorderservice: StandingorderService,
        private fb: FormBuilder,
        private orderservice: OrderService,
        private langservice: LanguageService
    ) { }

    ngOnInit() {

        this.getSelectListUnitholder();
        this.createFormValidate();

        $('#mutual-tab-menu').find('li').removeClass('current');
        $('#mutual-tab-menu').find('li#menu1').addClass('current');

        this.langservice.listen().subscribe((m: any) => {
            console.log(m);
            this.lang = m;
        })

        // var date = new Date(), y = date.getFullYear(), m = date.getMonth();
        // var firstDay = new Date(y, m, 1);
        // var lastDay = new Date(y, m + 1, 0);
        var array = new Array();
        // console.log(firstDay.getDate() + "-" + lastDay.getDate());

        for (let i = 1; i <= 31; i++) {
            array.push(i);
        }
        console.log(array);

        this.month = array;

        var d = new Date();
        this.minDate = { year: d.getFullYear(), month: d.getMonth() + 1, day: d.getDate() };
        // this.datepick = { year: d.getFullYear(), month: d.getMonth() + 1, day: d.getDate() };

        this.userdetail = this.basedataservice.getmemberInfo();
    }
    checkpage(page) {
        window.scroll(0, 0);
        console.log(page)

        switch (page) {
            case 'regular-purchase':
                this.page = "regular-purchase";
                break;
            case 'regular-purchase-step1':
                // if (this.formsubsription.controls.date.value) {
                //     this.date = this.formsubsription.controls.date.value.year + "-" + this.formsubsription.controls.date.value.month + "-" + this.formsubsription.controls.date.value.day;
                //     this.date = formatdatethai(this.date);
                // }
                this.page = "regular-purchase-step1";
                break;
            default:
                this.page = "regular-purchase";
                console.log(this.page)
                break;
        }


    }
    onChange() {

        for (let i = 0; i < this.userall.unitholderlist.length; i++) {
            if (this.userall.unitholderlist[i].UnitholderId == this.unitholderno.UnitholderId) {
                this.userselect = this.userall.unitholderlist[i];
            }
        }

    }

    createFormValidate() {
        this.formsubstanding = this.fb.group({
            amount: [null,
                [
                    Validators.required, customValidationService.checkLimit(1000, 999999999999)
                ]
            ],
            datestart: [null,
                [
                    Validators.required
                ]
            ],
            dateend: [null,
                [
                    Validators.required
                ]
            ],
            fund: ["",
                [
                    Validators.required
                ]
            ],
            day: [1],
            // bank: [null]
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
        return !this.formsubstanding.get(field).valid && this.formsubstanding.get(field).touched

    }

    ValidatorDisplayCss(field: string) {
        return {
            'has-danger': this.isFieldNotValid(field)
        };
    }

    getSelectListUnitholder() {
        this.orderservice.getSelectListUnitholder()
            .pipe(first())
            .subscribe(
                data => {
                    setTimeout(() => {
                        $('.selectpicker').selectpicker('refresh');
                    }, 100);
                    this.userall = data;
                    this.unitholderno = this.userall.unitholderlist[0];
                    this.userselect = this.userall.unitholderlist[0];
                    this.getbanklist();
                    this.getfundlist();
                    this.getstnadingorder();
                },
                error => {
                    console.log(error)

                });

    }
    getbanklist() {
        let params = new HttpParams().set('unitholderid', this.userselect.UnitholderId);
        this.standingorderservice.changeunitholder(params)
            .pipe(first())
            .subscribe(
                data => {
                    console.log(data);
                    this.banklist = data['data'];
                    if (this.banklist.bankaccountlist[0]) {
                        this.Bank = this.banklist.bankaccountlist[0].BankName + " (" + this.banklist.bankaccountlist[0].BankAccountNo + ")";
                    }
                    // else if (this.banklist.bankaccountlist.length == 0) {
                    //     this.Bank = "ไม่พบบัญชีธนาคาร";
                    // }

                    // setTimeout(() => {
                    //     this.formsubstanding.controls['bank'].setValue(this.banklist.bankaccountlist[0].BankName, { onlySelf: true });
                    // }, 100);

                },
                error => {
                    console.log(error)

                });

    }
    getfundlist() {
        this.standingorderservice.getfundlist()
            .pipe(first())
            .subscribe(
                data => {
                    console.log(data);
                    this.fundlist = data;
                    setTimeout(() => {
                        $('.selectpicker').selectpicker('refresh');
                    }, 100);
                },
                error => {
                    console.log(error)

                });
    }

    onSubmited() {
        console.log(this.formsubstanding);
        this.Islevel = false;
        this.Isprotect = false;
        this.dateless = false;


        if (this.formsubstanding.valid) {
            if (this.userselect.RiskLevelExpire == true) {
                console.log('expire');

                $('#expiremodal').modal({
                    backdrop: 'static',
                    keyboard: false,
                    show: true
                });
            } else if (!this.banklist.bankaccountlist[0] && this.userdetail.MemberType != 'Agent') {
                this.message = 'ติดต่อเจ้าหน้าที่การตลาด เบอร์ติดต่อ 02-286-3484 หรือ 02-679-2155 เพื่อดำเนินขอเปิดบัญชี ATS';

                setTimeout(() => {
                    $('#message').modal({
                        backdrop: 'static',
                        keyboard: false,
                        show: true
                    });
                }, 100);


            } else {
                var st = new Date(this.formsubstanding.controls.datestart.value.year, (this.formsubstanding.controls.datestart.value.month - 1), this.formsubstanding.controls.datestart.value.day).getTime(); // 1379392680000
                var ed = new Date(this.formsubstanding.controls.dateend.value.year, (this.formsubstanding.controls.dateend.value.month - 1), this.formsubstanding.controls.dateend.value.day).getTime();

                console.log(st, ed);

                if (st > ed) {
                    console.log('less more');
                    this.dateless = true;
                    return;
                } else {
                    console.log('motto');
                    this.checkexpireandlevel();
                }
            }


        }
        else {
            this.isNotValid = true;
            this.validateAllFormFields(this.formsubstanding);
        }

    }
    reset() {
        console.log('reset');
        this.createFormValidate();
        this.getbanklist();
        this.getfundlist();
        this.getstnadingorder();

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

            this.formsubstanding.controls['amount'].setValue(tofix, { onlySelf: true });
        }

    }
    numberOnly(event): boolean {
        const charCode = (event.which) ? event.which : event.keyCode;
        console.log(charCode);
        if (charCode > 31 && (charCode < 48 || charCode > 57) && (charCode !== 46)) {
            return false;
        }
        return true;

    }
    checkexpireandlevel() {
        this.loading = true;
        const user = {
            UnitHolderID: this.userselect.UnitholderId,
            FundID: this.formsubstanding.controls.fund.value.FundID
        }
        console.log(user);

        this.standingorderservice.changefund(user)
            .pipe(first())
            .subscribe(
                data => {
                    console.log(data);
                    this.loading = false;
                    if (data['messages']) {
                        this.message = data['messages'];
                        this.Islevel = true;

                        if (this.Islevel) {
                            console.log('level');
                            $('#risklevel').modal({
                                backdrop: 'static',
                                keyboard: false,
                                show: true
                            });
                        }
                        if (this.formsubstanding.controls.fund.value.isFullyHedge == 'N') {
                            console.log('protect');
                            this.Isprotect = true;
                            $('#risklevel').modal({
                                backdrop: 'static',
                                keyboard: false,
                                show: true
                            });
                        }
                    } else {
                        this.confirm();
                    }


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

        setTimeout(() => {

            // if (this.formsubstanding.controls.fund.value.isFullyHedge !== 'N' && !this.Islevel) {
            //     console.log('nothing');
            //     this.checkpage('purchase-step1');
            // }


        }, 100)

    }
    confirm() {

        this.loading = true;
        this.isNotValid = false;
        var user;

        this.datestart = this.formsubstanding.controls.datestart.value.year + "-" + this.formsubstanding.controls.datestart.value.month + "-" + this.formsubstanding.controls.datestart.value.day;
        this.datestart = boostrapdatepicker(this.datestart);
        this.dateend = this.formsubstanding.controls.dateend.value.year + "-" + this.formsubstanding.controls.dateend.value.month + "-" + this.formsubstanding.controls.dateend.value.day;
        this.dateend = boostrapdatepicker(this.dateend);
        if (this.userdetail.MemberType == 'Agent' && this.banklist == "") {
            user = {
                StandingOrderDate: getDate(),
                StandingUnitHolderID: this.userselect.UnitholderId,
                StandingOrderFundID: this.formsubstanding.controls.fund.value.FundID,
                StandingOrderTxType: "Subscription",
                StandingOrderAmount: this.formsubstanding.controls.amount.value,
                StandingOrderPeriod: "Month",
                StandingOrderDayNo: this.formsubstanding.controls.day.value,
                ExpiryDate: this.dateend,
                StandingOrderEffectiveDate: this.datestart
            }
        } else {
            user = {
                StandingOrderDate: getDate(),
                StandingUnitHolderID: this.userselect.UnitholderId,
                StandingOrderFundID: this.formsubstanding.controls.fund.value.FundID,
                StandingOrderTxType: "Subscription",
                StandingOrderAmount: this.formsubstanding.controls.amount.value,
                StandingOrderPeriod: "Month",
                StandingOrderDayNo: this.formsubstanding.controls.day.value,
                ExpiryDate: this.dateend,
                StandingOrderEffectiveDate: this.datestart,
                IDCardNo: this.banklist.bankaccountlist[0].BankAccountID
            }
        }



        console.log(user);
        this.standingorderservice.submitstandingorder(user)
            .pipe(first())
            .subscribe(
                data => {
                    console.log(data);
                    this.resultsubmit = data;
                    this.message = "ทำรายการสำเร็จ";
                    this.loading = false;
                    setTimeout(() => {
                        $('#message').modal({
                            backdrop: 'static',
                            keyboard: false,
                            show: true
                        });
                    }, 100);
                    this.reset();
                    // this.checkpage('regular-purchase-step1');
                    // this.checkexpireandlevel();
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
    getstnadingorder() {
        this.nolist = false;
        let params = new HttpParams().set('unitholderid', this.userselect.UnitholderId);

        this.standingorderservice.getstnadingorder(params)
            .pipe(first())
            .subscribe(
                data => {
                    console.log(data);
                    this.standingorder = data;
                    if (!this.standingorder.standingorderlist) {
                        this.nolist = true;
                    }


                },
                error => {
                    console.log(error)

                });
    }

    modaldeleteorder(group, order) {

        this.deletedOrder = order;
        this.deletedGroup = group;
        // console.log(JSON.stringify(this.deletedOrder)+'index = '+index);
        $('#delete').modal({
            backdrop: 'static',
            keyboard: false,
            show: true
        });
    }
    deleteorder() {
        const order = {
            UnitHolderID: this.deletedOrder.StandingUnitHolderID,
            StandingOrderID: this.deletedOrder.StandingOrderID
        }

        this.standingorderservice.cancelstnadingorder(order)
            .pipe(first())
            .subscribe(
                data => {
                    console.log(data);
                    this.getstnadingorder();
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
