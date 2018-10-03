import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BaseApplicationDataService } from '../../service/base-application-data.service';
import { first } from 'rxjs/operators';
import { HttpParams } from '@angular/common/http';
import { FormBuilder, FormGroup, FormControl, Validators, NgForm, AbstractControl } from '@angular/forms';
import { ProfileService } from '../../service/profile.service'
import { ToastrService } from 'ngx-toastr';
declare var $: any;

function passwordConfirming(c: AbstractControl): any {
  if (!c.parent || !c) return;
  const pwd = c.parent.get('newpassword');
  const cpwd = c.parent.get('confirmpassword')

  if (!pwd || !cpwd) return;
  if (pwd.value !== cpwd.value) {
    return { invalid: true };

  }
}

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.scss']
})
export class ChangepasswordComponent implements OnInit {
  userall: any = {};
  userselect: any = {};
  unitholderno: any = "init";
  formchangepass: FormGroup;
  isNotValid = false;
  res: any = {};
  formotp: FormGroup;

  get cpwd() {
    return this.formchangepass.get('confirmpassword');
  }



  constructor(
    private fb: FormBuilder,
    private basedataservice: BaseApplicationDataService,
    private profileservice: ProfileService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.createFormValidate();
    this.getSelectListUnitholder();

    $('#mutual-tab-menu').find('li').removeClass('current');
    $('#mutual-tab-menu').find('li#menu3').addClass('current');
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
  createFormValidate() {
    this.formchangepass = this.fb.group({
      currentpassword: [null,
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(/^(?=.*[A-Z])(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/)
        ]
      ],
      newpassword: [null,
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(/^(?=.*[A-Z])(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/)
        ]
      ],
      confirmpassword: [null,
        [
          Validators.required,
          passwordConfirming,
          Validators.minLength(8),
          Validators.pattern(/^(?=.*[A-Z])(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/)
        ]
      ]
    })

    this.formotp = this.fb.group({
      otp: [null,
        [
          Validators.required,
          Validators.pattern(/^[0-9]*$/)
        ]
      ]
    })
  }
  onSubmit() {
    console.log(this.formchangepass)
    if (this.formchangepass.valid) {
      this.isNotValid = false;

      this.profileservice.submitchangepassword()
        .pipe(first())
        .subscribe(
          data => {
            console.log(data)
            this.res = data;
            $('#otpchangepassword').modal({
              backdrop: 'static',
              keyboard: false,
              show: true
            });

          },
          error => {
            console.log(error)
            this.toastr.error('', error.error.messages);
          });

    } else {
      this.isNotValid = true;
      this.validateAllFormFields(this.formchangepass);
    }
  }

  updatepassword() {

    console.log(this.formotp.controls.otp.value)
    console.log(this.formchangepass)
    if (this.formotp.valid) {
      this.isNotValid = false;
      console.log('test')

      let Params = new HttpParams();
      Params = Params.append('otp', this.formotp.controls.otp.value);
      Params = Params.append('refcode', this.res.refcode);

      const user = {
        CurrentPassword: this.formchangepass.controls.currentpassword.value,
        NewPassword: this.formchangepass.controls.newpassword.value,
        ConfirmPassword: this.formchangepass.controls.confirmpassword.value
      }
      console.log('test' + Params + '' + user)

      this.profileservice.updatepassword(user, Params)
        .pipe(first())
        .subscribe(
          data => {
            console.log(data)
            this.res = data;
            $('#otpchangepassword').modal('toggle');
            this.toastr.success('success');
          },
          error => {
            console.log(error)
            this.toastr.error('', error.error.messages);
          });

    } else {
      this.isNotValid = true;
      this.validateAllFormFields(this.formotp);
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

  isFieldNotValid(field: string) {
    return !this.formchangepass.get(field).valid && this.formchangepass.get(field).touched

  }

  ValidatorDisplayCss(field: string) {
    return {
      'has-danger': this.isFieldNotValid(field)
    };
  }

  isFieldNotValid4(field: string) {
    return !this.formchangepass.get(field).valid && this.formchangepass.get(field).touched

  }

  ValidatorDisplayCss4(field: string) {
    return {
      'has-danger': this.isFieldNotValid4(field)
    };
  }
  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }

  requestotp() {

    this.basedataservice.requestotp()
      .subscribe((data) => {
        console.log(data);
        this.res = data;

      },
        (error) => {
          this.toastr.error('', error.error.messages);
          console.log(error)
          console.log("messages :" + error.error.messages);
          console.log("success :" + error.error.success);
          console.log("data :" + error.error.data);
        });
  }

}