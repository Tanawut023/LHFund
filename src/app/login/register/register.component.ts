import { Component, OnInit,ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { AuthenticationService } from '../../service/authentication.service'
import { HttpClient, HttpParams } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { first } from 'rxjs/operators';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { ReCaptcha2Component } from '../../../../node_modules/ngx-captcha';

declare var $: any;

function passwordConfirming(c: AbstractControl): any {
  if (!c.parent || !c) return;
  const pwd = c.parent.get('password');
  const cpwd = c.parent.get('repeatPassword')

  if (!pwd || !cpwd) return;
  if (pwd.value !== cpwd.value) {
    return { invalid: true };

  }
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  page = 'signup1';
  form: FormGroup;
  formstep2: FormGroup;
  formotp: FormGroup;
  blind: any = "";
  isNotValid = false;
  foo1: string;
  langth: boolean;
  langen: boolean;
  errorMessage: Object;
  customer: Object;
  User: any = {}
  message: any;
  loading = false;

  get cpwd() {
    return this.formstep2.get('repeatPassword');
  }

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private translate: TranslateService,
    private authenticationService: AuthenticationService,
    private http: HttpClient,
    private toastr: ToastrService) {
    translate.addLangs(["th", "en"]);
  }

  @ViewChild('captchaElem') captchaElem: ReCaptcha2Component;

  ngOnInit() {
    this.createFormValidate();
    this.foo1 = this.translate.currentLang;
    if (this.foo1 == 'th') {

      this.langth = true;
    }
    else if (this.foo1 == 'en') {
      this.langen = true;
    }
  }
  switchlang(lang) {
    if (lang == 'th') {
      this.translate.use('th');
      this.langen = false;
      this.langth = true;
      localStorage.setItem('lang', lang);

    }
    else if (lang == 'en') {
      this.translate.use('en');
      this.langth = false;
      this.langen = true;
      localStorage.setItem('lang', lang);
    }


  }
  async checkpage(page) {
    console.log(page)

    switch (page) {
      case 'otp':
        console.log(this.formstep2)
        if (this.formstep2.valid) {
          this.loading = true;
          let params = new HttpParams().set('refcode', this.User.refcode);
          const user = {
            UserName: this.formstep2.controls.username.value,
            Password: this.formstep2.controls.password.value,
            ConfirmPassword: this.formstep2.controls.repeatPassword.value
          }
          await this.authenticationService.validateUserName(user, params)
            .subscribe((data) => {
              console.log(data);
              this.User = data;
              this.page = "otp";
              this.loading = false;

            },
              (error) => {
                console.log(error);
                this.message = error.error.messages;
                this.loading = false;
                setTimeout(() => {
                  $('#message').modal({
                    backdrop: 'static',
                    keyboard: false,
                    show: true
                  });
                }, 100);
              });
        }
        else if (this.formstep2.invalid) {
          this.isNotValid = true;
          this.validateAllFormFields(this.formstep2);
        }
        break;

      case 'complete':
        if (this.formotp.valid) {
          let Params = new HttpParams();
          this.loading = true;
          Params = Params.append('otp', this.formotp.controls.otp.value);
          Params = Params.append('refcode', this.User.refcode);

          const user = {
            UserName: this.formstep2.controls.username.value,
            Password: this.formstep2.controls.password.value,
            ConfirmPassword: this.formstep2.controls.repeatPassword.value
          }

          await this.authenticationService.OTPRegister(user, Params)
            .subscribe((data) => {
              console.log(data);
              this.toastr.success('', 'Register Success');
              this.navigate('');
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
        else if (this.formotp.invalid) {
          this.isNotValid = true;
          this.validateAllFormFields(this.formotp);
        }
        break;
      case 'signup2':
        console.log(this.form)

        if (this.form.valid) {
          this.loading = true;
          this.isNotValid = false;
          var telephone = this.form.controls.tel.value;
          telephone = telephone.slice(1, 10);
          telephone = "66" + telephone;
          let Params = new HttpParams();
          Params = Params.append('encodedresponse', this.form.controls.recaptcha.value);
          const user = {
            PreName: this.form.controls.prefix.value,
            FirstName: this.form.controls.firstname.value,
            LastName: this.form.controls.lastname.value,
            IDCardNo: this.form.controls.IDcard.value,
            Email: this.form.controls.email.value,
            Mobile: this.form.controls.tel.value
          }
          console.log(this.form.controls.recaptcha.value);

          await this.authenticationService.validateMember(user, Params)
            .pipe(first())
            .subscribe((data: any) => {
              console.log(data);
              this.User = data;
              console.log(this.User.refcode);
              this.page = "signup2";
              this.loading = false;
              this.reset();
            },
              (error: any) => {
                console.log(error);
                this.loading = false;
                this.message = error.error.messages;
                this.reset();
                setTimeout(() => {
                  $('#message').modal({
                    backdrop: 'static',
                    keyboard: false,
                    show: true
                  });
                }, 100);
              });




          var s = this.form.controls.tel.value;
          this.blind = s[0] + s[1] + s[2] + "-XXXXX" + s[8] + s[9]
          console.log(this.blind);
        }
        else {
          this.isNotValid = true;
          this.validateAllFormFields(this.form);
        }
        break;
      default:

        this.page = "signup1";
        console.log(this.page)
        break;
    }


  }

  createFormValidate() {
    this.form = this.fb.group({
      firstname: [null,
        [
          Validators.required,
          Validators.pattern(/^[A-Za-zก-๗]{2,15}$/)
        ]
      ],
      lastname: [null,
        [
          Validators.required,
          Validators.pattern(/^[A-Za-zก-๗]{2,15}$/)
        ]
      ],
      email: [null,
        [
          Validators.required,
          Validators.pattern(/^[A-Za-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)
        ]
      ],

      tel: [null,
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
          Validators.pattern(/^(0)[0-9]*$/)
        ]
      ]
      ,
      IDcard: [null,
        [
          Validators.required
        ]
      ],
      prefix: [null],
      recaptcha: [null,
        [
          Validators.required
        ]
      ]
    })
    this.formstep2 = this.fb.group({
      username: [null,
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(/^[A-Za-z0-9]{8,16}$/)
        ]
      ],
      password: [null,
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(/^(?=.*[0-9])(?=.*[A-Z])(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,16}$/)
        ]
      ],
      repeatPassword: [null,
        [
          Validators.required,
          passwordConfirming,
          Validators.minLength(8),
          Validators.pattern(/^(?=.*[0-9])(?=.*[A-Z])(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,16}$/)
        ]
      ],
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


  isFieldNotValid(field: string) {
    return !this.form.get(field).valid && this.form.get(field).touched

  }

  ValidatorDisplayCss(field: string) {
    return {
      'has-danger': this.isFieldNotValid(field)
    };
  }

  isFieldNotValid2(field: string) {
    return !this.formstep2.get(field).valid && this.formstep2.get(field).touched

  }

  ValidatorDisplayCss2(field: string) {
    return {
      'has-danger': this.isFieldNotValid2(field)
    };
  }
  isFieldNotValid4(field: string) {
    return !this.formotp.get(field).valid && this.formotp.get(field).touched

  }

  ValidatorDisplayCss4(field: string) {
    return {
      'has-danger': this.isFieldNotValid4(field)
    };
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
  navigate(target) {
    var target = target;
    console.log(target);
    this.router.navigate([target], { relativeTo: this.route });
  }
  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }
  requestotp() {
    let params = new HttpParams().set('refcode', this.User.refcode);
    this.loading = true;
    this.authenticationService.requestOTP(params)
      .subscribe((data) => {
        console.log(data);
        this.User = data;
        this.loading = false;
      },
        (error) => {
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
  reset(): void {
    this.captchaElem.resetCaptcha();
  }
}
