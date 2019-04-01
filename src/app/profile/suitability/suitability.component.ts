import { Component, OnInit, OnDestroy } from '@angular/core';
import { datethai, dateeng } from '../../Share/dateformat'
import { BaseApplicationDataService } from '../../service/base-application-data.service';
import { first } from 'rxjs/operators';
import { HttpParams } from '@angular/common/http';
import { ProfileService } from '../../service/profile.service'
import { FormBuilder, FormGroup, FormControl, Validators, NgForm, FormArray } from '@angular/forms';
import { async } from 'q';
import { LanguageService } from '../../service/language.service'
import { Observable } from 'rxjs';
declare var $: any;
@Component({
    selector: 'app-suitability',
    templateUrl: './suitability.component.html',
    styleUrls: ['./suitability.component.scss']
})
export class SuitabilityComponent implements OnInit {
    page = "over-view";
    currentdate;
    dateformat = datethai;
    dateformatEng = dateeng;
    userall: any = {};
    userselect: any = {};
    unitholderno: any = "init";
    suitest;
    isNotValid: boolean;
    form: FormGroup;
    formotp: FormGroup;
    message: any;
    resulttest;
    resultsubmit;
    suitestselected;
    res: Object;
    show: boolean;
    answer: any = [];
    riskprofile;
    lang: Observable<string>;
    loading = false;
    countquestion = 0;

    constructor(
        private basedataservice: BaseApplicationDataService,
        private profileserice: ProfileService,
        private fb: FormBuilder,
        private langservice: LanguageService
    ) { }

    ngOnInit() {

        this.createFormValidate();
        this.getSelectListUnitholder();

        $('#mutual-tab-menu').find('li').removeClass('current');
        $('#mutual-tab-menu').find('li#menu2').addClass('current');

        this.langservice.listen().subscribe((m: any) => {
            console.log(m);
            this.lang = m;
        })
        // console.log(this.lang);

    }
    // ngOnDestroy() {
    //     $('#otpsuitest').modal('toggle');
    //     $('#message').modal('toggle');
    //     $('#messagesuc').modal('toggle');
    // }

    checkpage(page) {
        window.scroll(0, 0);
        console.log(page)
        setTimeout(() => {
            $('.selectpicker').selectpicker('refresh');
        }, 100);
        switch (page) {
            case 'suitability-test':
                this.page = "suitability-test";
                break;
            case 'suitability-score':
                this.onsubmit();
                break;
            case 'over-view':
                this.getriskprofile();
                this.page = "over-view";
                break;
            default:
                this.page = "over-view";
                console.log(this.page)
                break;
        }


    }
    resetotp() {
        this.formotp.reset();
    }
    checktype(event) {
        // var Id = id;
        // console.log(event);
        console.log(event.srcElement.attributes.id);
        var idAttr = event.srcElement.attributes.id;
        var value = idAttr.nodeValue;
        console.log(value);
        if (value == 'size10') {
            $('#personal').addClass('active');
            $('#answerC1').find('input[type="radio"]').attr("disabled", "disabled");
            $('#answerC2').find('input[type="radio"]').attr("disabled", "disabled");
            $('#answerC2').find('input[type="text"]').attr("disabled", "disabled");
            // $('#answerC1').find('input[type="radio"]').removeAttr("checked");
            // $('#answerC2').find('input[type="radio"]').removeAttr("checked");
        }

        else {
            $('#personal').removeClass('active');
            $('#answerC1').find('input[type="radio"]').removeAttr("disabled");
            $('#answerC2').find('input[type="radio"]').removeAttr("disabled");
            $('#answerC2').find('input[type="text"]').removeAttr("disabled");
            // $('#answerC1').find('input[type="radio"]').removeAttr("checked");
            // $('#answerC2').find('input[type="radio"]').removeAttr("checked");        
            // $('#answer').find('input[type="radio"]').removeAttr("checked");
        }

        if (value == 'size15') {
            $('#company').addClass('active');
            $('#answerP1').find('input[type="radio"]').attr("disabled", "disabled");
            $('#answerP2').find('input[type="radio"]').attr("disabled", "disabled");
            // $('#answerP1').find('input[type="radio"]').removeAttr("checked");
            // $('#answerP2').find('input[type="radio"]').removeAttr("checked");

            // $('#answer1').find('input[type="radio"]').removeAttr("checked");
        }

        else {
            $('#company').removeClass('active');
            $('#answerP1').find('input[type="radio"]').removeAttr("disabled");
            $('#answerP2').find('input[type="radio"]').removeAttr("disabled");
            // $('#answerP1').find('input[type="radio"]').removeAttr("checked");
            // $('#answerP2').find('input[type="radio"]').removeAttr("checked");

        }
    }
    disable() {
        console.log("test");
        $('#answerC1').find('input[type="radio"]').attr("disabled", "disabled");
        $('#answerC2').find('input[type="radio"]').attr("disabled", "disabled");
        $('#answerP1').find('input[type="radio"]').attr("disabled", "disabled");
        $('#answerP2').find('input[type="radio"]').attr("disabled", "disabled");
    }

    onChange() {

        for (let i = 0; i < this.userall.unitholderlist.length; i++) {
            if (this.userall.unitholderlist[i].UnitholderId == this.unitholderno.UnitholderId) {
                this.userselect = this.userall.unitholderlist[i];
            }
        }
        this.getsuitest();
        this.getriskprofile();
    }

    getSelectListUnitholder() {
        this.basedataservice.getSelectListUnitholder()
            .pipe(first())
            .subscribe(
                data => {
                    setTimeout(() => {
                        $('.selectpicker').selectpicker('refresh');
                    }, 100);
                    this.userall = data;
                    this.unitholderno = this.userall.unitholderlist[0];
                    this.userselect = this.userall.unitholderlist[0];
                    this.getsuitest();
                    this.getriskprofile();
                },
                error => {
                    console.log(error)

                });
    }

    getsuitest() {

        this.reset();
        let params = new HttpParams().set('unitholderid', this.userselect.UnitholderId);
        this.profileserice.getrisksuitest(params)
            .pipe(first())
            .subscribe(
                data => {
                    // var array = new Array();

                    this.suitest = data;
                    this.countquestion = this.suitest.question.length;
                    console.log(this.suitest);


                    // for (let y = 0; y < this.suitest.question.length; y++) {

                    //     console.log(this.suitest.question[y]);

                    //     for (let i = 0; i < this.suitest.question[y].Answers.length; i++) {
                    //         console.log(this.suitest.question[y].Answers[i]);

                    //         if (this.suitest.question[y].Answers[i].Selected == true) {
                    //             this.answer.push(this.suitest.question[y].Answers[i]);

                    //         }


                    //     }
                    // }
                    // console.log(this.answer);
                    setTimeout(() => {
                        // this.setdefault();
                        this.autocreateformcontrol();
                    }, 100);


                },
                error => {
                    console.log(error)

                });


    }
    autocreateformcontrol() {

        if (this.suitest) {
            for (let y = 0; y < this.suitest.question.length; y++) {

                this.question.push(
                    this.fb.control('')
                )

                for (let i = 0; i < this.suitest.question[y].Answers.length; i++) {

                    if (this.suitest.question[y].Answers[i].Selected == true) {
                        this.question.controls[y].setValue(this.suitest.question[y].Answers[i], { onlySelf: true })
                    }


                }

            }
        }
        console.log(this.form);

    }
    getriskprofile() {

        let params = new HttpParams().set('unitholderid', this.userselect.UnitholderId);
        this.profileserice.changeUnitholder(params)
            .pipe(first())
            .subscribe(
                data => {
                    console.log(data);
                    this.riskprofile = data['riskProfile'];
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
    get question() {
        return this.form.get('question') as FormArray;
    }
    createFormValidate() {
        this.form = this.fb.group({

            question: this.fb.array([])

        });

        this.formotp = this.fb.group({
            otp: [null,
                [
                    Validators.required,
                    Validators.pattern(/^[0-9]*$/)
                ]
            ]
        })
    }
    setdefault() {

        this.form.controls['choice0'].setValue(this.answer[0], { onlySelf: true });
        this.form.controls['choice1'].setValue(this.answer[1], { onlySelf: true });
        this.form.controls['choice2'].setValue(this.answer[2], { onlySelf: true });
        this.form.controls['choice3'].setValue(this.answer[3], { onlySelf: true });
        this.form.controls['choice4'].setValue(this.answer[4], { onlySelf: true });
        this.form.controls['choice5'].setValue(this.answer[5], { onlySelf: true });
        this.form.controls['choice6'].setValue(this.answer[6], { onlySelf: true });
        this.form.controls['choice7'].setValue(this.answer[7], { onlySelf: true });
        this.form.controls['choice8'].setValue(this.answer[8], { onlySelf: true });
        this.form.controls['choice9'].setValue(this.answer[9], { onlySelf: true });
        this.form.controls['choice10'].setValue(this.answer[10], { onlySelf: true });
    }

    onsubmit() {
        console.log(this.form);
        var array = new Array();
        if (this.form.valid) {
            this.isNotValid = false;
            this.show = true;
            this.loading = true;
            for (let y = 0; y < this.suitest.question.length; y++) {
                var item = this.question.at(y);
                array.push(
                    {
                        Id: this.suitest.question[y].Id,
                        Seq: this.suitest.question[y].Seq,
                        Name: this.suitest.question[y].Name,
                        NameEng: this.suitest.question[y].NameEng,
                        UnitHolderID: this.suitest.question[y].UnitHolderID,
                        Answers: [
                            {
                                Id: item.value.Id,
                                QuestionId: item.value.QuestionId,
                                Seq: item.value.Seq,
                                Score: item.value.Score,
                                Name: item.value.Name,
                                NameEng: item.value.NameEng,
                                Selected: true
                            }
                        ]
                    }
                )
            }
            console.log(array);
            this.suitestselected = array;
            console.log(this.suitestselected);
            this.profileserice.calculateriskprofile(this.suitestselected)
                .pipe(first())
                .subscribe(
                    data => {
                        console.log(data);
                        this.loading = false;
                        this.resulttest = data['riskprofilerank'];
                        this.page = "suitability-score";
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
            this.isNotValid = true;
            this.validateAllFormFields(this.form);
        }
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

    summitriskprofile() {
        this.loading = true;
        this.profileserice.submiteditriskprofile()
            .pipe(first())
            .subscribe(
                data => {
                    console.log(data);
                    this.loading = false;
                    this.resultsubmit = data;
                    $('#otpsuitest').modal({
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
    updatesuitest() {
        console.log(this.formotp)
        if (this.formotp.valid) {
            this.isNotValid = false;
            this.loading = true;
            let Params = new HttpParams();
            Params = Params.append('otp', this.formotp.controls.otp.value);
            Params = Params.append('refcode', this.resultsubmit.refcode);
            console.log(this.suitestselected);

            this.profileserice.saveriskprofile(this.suitestselected, Params)
                .pipe(first())
                .subscribe(
                    data => {
                        console.log(data);
                        this.loading = false;
                        this.show = false;
                        $('#otpsuitest').modal('toggle');
                        $('#messagesuc').modal({
                            backdrop: 'static',
                            keyboard: false,
                            show: true
                        });
                        this.reset();
                        this.getsuitest();

                    },
                    error => {
                        console.log(error);
                        this.loading = false;
                        this.message = error.error.messages;
                    });

        } else {
            this.isNotValid = true;
            this.validateAllFormFields(this.formotp);
        }
    }

    numberOnly(event): boolean {
        const charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;

    }

    isFieldNotValid1(field: string) {
        return !this.formotp.get(field).valid && this.formotp.get(field).touched

    }

    ValidatorDisplayCss1(field: string) {
        return {
            'has-danger': this.isFieldNotValid1(field)
        };
    }
    requestotp() {
        this.loading = true;
        this.basedataservice.requestotp()
            .subscribe((data) => {
                console.log(data);
                this.resultsubmit = data;
                this.loading = false;
            },
                (error) => {
                    console.log(error);
                    this.loading = false;
                    this.message = error.error.messages;
                    setTimeout(() => {
                        $('#message').modal({
                            backdrop: 'static',
                            keyboard: false,
                            show: true
                        });
                    }, 100);
                });
    }
    reset() {
        this.formotp.reset();
        this.form.reset();
        this.answer = [];
        this.suitest = {};
        this.message = "";

    }
    print() {
        window.focus();
        window.print();
    }


}
