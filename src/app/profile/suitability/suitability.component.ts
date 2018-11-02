import { Component, OnInit } from '@angular/core';
import { datethai } from '../../Share/dateformat'
import { BaseApplicationDataService } from '../../service/base-application-data.service';
import { first } from 'rxjs/operators';
import { HttpParams } from '@angular/common/http';
import { ProfileService } from '../../service/profile.service'
import { FormBuilder, FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { async } from 'q';
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


    constructor(
        private basedataservice: BaseApplicationDataService,
        private profileserice: ProfileService,
        private fb: FormBuilder
    ) { }

    ngOnInit() {

        this.createFormValidate();
        this.getSelectListUnitholder();

        $('#mutual-tab-menu').find('li').removeClass('current');
        $('#mutual-tab-menu').find('li#menu2').addClass('current');
    }

    checkpage(page) {
        window.scroll(0, 0);
        console.log(page)

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
                    console.log(this.suitest);
                    for (let y = 0; y < this.suitest.question.length; y++) {

                        console.log(this.suitest.question[y]);

                        for (let i = 0; i < this.suitest.question[y].Answers.length; i++) {
                            console.log(this.suitest.question[y].Answers[i]);

                            if (this.suitest.question[y].Answers[i].Selected == true) {
                                this.answer.push(this.suitest.question[y].Answers[i]);

                            }


                        }
                    }
                    console.log(this.answer);
                    setTimeout(() => {
                        this.setdefault();
                    }, 100);


                },
                error => {
                    console.log(error)

                });


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
    createFormValidate() {
        this.form = this.fb.group({

            choice0: [null,
                [
                    Validators.required,
                ]],
            choice1: [null,
                [
                    Validators.required,
                ]],
            choice2: [null,
                [
                    Validators.required,
                ]],
            choice3: [null,
                [
                    Validators.required,
                ]],
            choice4: [null,
                [
                    Validators.required,
                ]],
            choice5: [null,
                [
                    Validators.required,
                ]],
            choice6: [null,
                [
                    Validators.required,
                ]],
            choice7: [null,
                [
                    Validators.required,
                ]],
            choice8: [null,
                [
                    Validators.required,
                ]],
            choice9: [null,
                [
                    Validators.required,
                ]],
            choice10: [null,
                [
                    Validators.required,
                ]]

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
        var score = this.form.controls.choice0.value.Score + this.form.controls.choice1.value.Score + this.form.controls.choice2.value.Score + this.form.controls.choice3.value.Score + this.form.controls.choice4.value.Score + this.form.controls.choice5.value.Score + this.form.controls.choice6.value.Score + this.form.controls.choice7.value.Score + this.form.controls.choice8.value.Score + this.form.controls.choice9.value.Score + this.form.controls.choice10.value.Score
        console.log(score);

        console.log(this.form)
        if (this.form.valid) {
            this.isNotValid = false;
            this.show = true;




            const suitest = [
                {
                    Id: this.suitest.question[0].Id,
                    Seq: this.suitest.question[0].Seq,
                    Name: this.suitest.question[0].Name,
                    NameEng: this.suitest.question[0].NameEng,
                    UnitHolderID: this.suitest.question[0].UnitHolderID,
                    Answers: [
                        {
                            Id: this.form.controls.choice0.value.Id,
                            QuestionId: this.form.controls.choice0.value.QuestionId,
                            Seq: this.form.controls.choice0.value.Seq,
                            Score: this.form.controls.choice0.value.Score,
                            Name: this.form.controls.choice0.value.Name,
                            NameEng: this.form.controls.choice0.value.NameEng,
                            Selected: true
                        }
                    ]
                }, {
                    Id: this.suitest.question[1].Id,
                    Seq: this.suitest.question[1].Seq,
                    Name: this.suitest.question[1].Name,
                    NameEng: this.suitest.question[1].NameEng,
                    UnitHolderID: this.suitest.question[1].UnitHolderID,
                    Answers: [
                        {
                            Id: this.form.controls.choice1.value.Id,
                            QuestionId: this.form.controls.choice1.value.QuestionId,
                            Seq: this.form.controls.choice1.value.Seq,
                            Score: this.form.controls.choice1.value.Score,
                            Name: this.form.controls.choice1.value.Name,
                            NameEng: this.form.controls.choice1.value.NameEng,
                            Selected: true
                        }
                    ]
                }, {
                    Id: this.suitest.question[2].Id,
                    Seq: this.suitest.question[2].Seq,
                    Name: this.suitest.question[2].Name,
                    NameEng: this.suitest.question[2].NameEng,
                    UnitHolderID: this.suitest.question[2].UnitHolderID,
                    Answers: [
                        {
                            Id: this.form.controls.choice2.value.Id,
                            QuestionId: this.form.controls.choice2.value.QuestionId,
                            Seq: this.form.controls.choice2.value.Seq,
                            Score: this.form.controls.choice2.value.Score,
                            Name: this.form.controls.choice2.value.Name,
                            NameEng: this.form.controls.choice2.value.NameEng,
                            Selected: true
                        }
                    ]
                }, {
                    Id: this.suitest.question[3].Id,
                    Seq: this.suitest.question[3].Seq,
                    Name: this.suitest.question[3].Name,
                    NameEng: this.suitest.question[3].NameEng,
                    UnitHolderID: this.suitest.question[3].UnitHolderID,
                    Answers: [
                        {
                            Id: this.form.controls.choice3.value.Id,
                            QuestionId: this.form.controls.choice3.value.QuestionId,
                            Seq: this.form.controls.choice3.value.Seq,
                            Score: this.form.controls.choice3.value.Score,
                            Name: this.form.controls.choice3.value.Name,
                            NameEng: this.form.controls.choice3.value.NameEng,
                            Selected: true
                        }
                    ]
                }, {
                    Id: this.suitest.question[4].Id,
                    Seq: this.suitest.question[4].Seq,
                    Name: this.suitest.question[4].Name,
                    NameEng: this.suitest.question[4].NameEng,
                    UnitHolderID: this.suitest.question[4].UnitHolderID,
                    Answers: [
                        {
                            Id: this.form.controls.choice4.value.Id,
                            QuestionId: this.form.controls.choice4.value.QuestionId,
                            Seq: this.form.controls.choice4.value.Seq,
                            Score: this.form.controls.choice4.value.Score,
                            Name: this.form.controls.choice4.value.Name,
                            NameEng: this.form.controls.choice4.value.NameEng,
                            Selected: true
                        }
                    ]
                }, {
                    Id: this.suitest.question[5].Id,
                    Seq: this.suitest.question[5].Seq,
                    Name: this.suitest.question[5].Name,
                    NameEng: this.suitest.question[5].NameEng,
                    UnitHolderID: this.suitest.question[5].UnitHolderID,
                    Answers: [
                        {
                            Id: this.form.controls.choice5.value.Id,
                            QuestionId: this.form.controls.choice5.value.QuestionId,
                            Seq: this.form.controls.choice5.value.Seq,
                            Score: this.form.controls.choice5.value.Score,
                            Name: this.form.controls.choice5.value.Name,
                            NameEng: this.form.controls.choice5.value.NameEng,
                            Selected: true
                        }
                    ]
                }, {
                    Id: this.suitest.question[6].Id,
                    Seq: this.suitest.question[6].Seq,
                    Name: this.suitest.question[6].Name,
                    NameEng: this.suitest.question[6].NameEng,
                    UnitHolderID: this.suitest.question[6].UnitHolderID,
                    Answers: [
                        {
                            Id: this.form.controls.choice6.value.Id,
                            QuestionId: this.form.controls.choice6.value.QuestionId,
                            Seq: this.form.controls.choice6.value.Seq,
                            Score: this.form.controls.choice6.value.Score,
                            Name: this.form.controls.choice6.value.Name,
                            NameEng: this.form.controls.choice6.value.NameEng,
                            Selected: true
                        }
                    ]
                }, {
                    Id: this.suitest.question[7].Id,
                    Seq: this.suitest.question[7].Seq,
                    Name: this.suitest.question[7].Name,
                    NameEng: this.suitest.question[7].NameEng,
                    UnitHolderID: this.suitest.question[7].UnitHolderID,
                    Answers: [
                        {
                            Id: this.form.controls.choice7.value.Id,
                            QuestionId: this.form.controls.choice7.value.QuestionId,
                            Seq: this.form.controls.choice7.value.Seq,
                            Score: this.form.controls.choice7.value.Score,
                            Name: this.form.controls.choice7.value.Name,
                            NameEng: this.form.controls.choice7.value.NameEng,
                            Selected: true
                        }
                    ]
                }, {
                    Id: this.suitest.question[8].Id,
                    Seq: this.suitest.question[8].Seq,
                    Name: this.suitest.question[8].Name,
                    NameEng: this.suitest.question[8].NameEng,
                    UnitHolderID: this.suitest.question[8].UnitHolderID,
                    Answers: [
                        {
                            Id: this.form.controls.choice8.value.Id,
                            QuestionId: this.form.controls.choice8.value.QuestionId,
                            Seq: this.form.controls.choice8.value.Seq,
                            Score: this.form.controls.choice8.value.Score,
                            Name: this.form.controls.choice8.value.Name,
                            NameEng: this.form.controls.choice8.value.NameEng,
                            Selected: true
                        }
                    ]
                }, {
                    Id: this.suitest.question[9].Id,
                    Seq: this.suitest.question[9].Seq,
                    Name: this.suitest.question[9].Name,
                    NameEng: this.suitest.question[9].NameEng,
                    UnitHolderID: this.suitest.question[9].UnitHolderID,
                    Answers: [
                        {
                            Id: this.form.controls.choice9.value.Id,
                            QuestionId: this.form.controls.choice9.value.QuestionId,
                            Seq: this.form.controls.choice9.value.Seq,
                            Score: this.form.controls.choice9.value.Score,
                            Name: this.form.controls.choice9.value.Name,
                            NameEng: this.form.controls.choice9.value.NameEng,
                            Selected: true
                        }
                    ]
                }, {
                    Id: this.suitest.question[10].Id,
                    Seq: this.suitest.question[10].Seq,
                    Name: this.suitest.question[10].Name,
                    NameEng: this.suitest.question[10].NameEng,
                    UnitHolderID: this.suitest.question[10].UnitHolderID,
                    Answers: [
                        {
                            Id: this.form.controls.choice10.value.Id,
                            QuestionId: this.form.controls.choice10.value.QuestionId,
                            Seq: this.form.controls.choice10.value.Seq,
                            Score: this.form.controls.choice10.value.Score,
                            Name: this.form.controls.choice10.value.Name,
                            NameEng: this.form.controls.choice10.value.NameEng,
                            Selected: true
                        }
                    ]
                }
            ]

            this.suitestselected = suitest;
            console.log(this.suitestselected);


            this.profileserice.calculateriskprofile(this.suitestselected)
                .pipe(first())
                .subscribe(
                    data => {
                        console.log(data);
                        this.resulttest = data['riskprofilerank'];
                        this.page = "suitability-score";
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
        this.profileserice.submiteditriskprofile()
            .pipe(first())
            .subscribe(
                data => {
                    console.log(data);
                    this.resultsubmit = data;
                    $('#otpsuitest').modal({
                        backdrop: 'static',
                        keyboard: false,
                        show: true
                    });
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
    updatesuitest() {
        console.log(this.formotp)
        if (this.formotp.valid) {
            this.isNotValid = false;

            let Params = new HttpParams();
            Params = Params.append('otp', this.formotp.controls.otp.value);
            Params = Params.append('refcode', this.resultsubmit.refcode);
            console.log(this.suitestselected);

            this.profileserice.saveriskprofile(this.suitestselected, Params)
                .pipe(first())
                .subscribe(
                    data => {
                        // this.res = data;
                        console.log(data);
                        this.show = false;
                        $('#otpsuitest').modal('toggle');
                        this.reset();
                        this.getsuitest();

                    },
                    error => {
                        $('#otpsuitest').modal('toggle');
                        console.log(error);
                        this.message = error.error.messages;
                        $('#message').modal({
                            backdrop: 'static',
                            keyboard: false,
                            show: true
                        });
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

        this.basedataservice.requestotp()
            .subscribe((data) => {
                console.log(data);
                this.resultsubmit = data;
            },
                (error) => {
                    console.log(error)
                });
    }
    reset() {
        this.formotp.reset();
        this.form.reset();
        this.answer = [];
        this.suitest = {};

    }


}
