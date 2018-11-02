import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, NgForm, AbstractControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpParams } from '@angular/common/http';
import { AuthenticationService } from '../../service/authentication.service'
import { async } from '@angular/core/testing';
import { ToastrService } from 'ngx-toastr';

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
  selector: 'app-changepasswordlogin',
  templateUrl: './changepasswordlogin.component.html',
  styleUrls: ['./changepasswordlogin.component.scss']
})
export class ChangepasswordloginComponent implements OnInit {
  formchange: FormGroup;
  formotp: FormGroup;
  isNotValid = false;
  langth: boolean;
  langen: boolean;
  comfirmchange: boolean = false;
  page = 'changepassword';
  blind = '';
  foo1: string;
  refcode: any = {};
  activate: any = {};
  message: any;
  User: any = {}
  mobile;
  exit: boolean = false;

  get cpwd() {
    return this.formchange.get('repeatPassword');
  }


  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private translate: TranslateService,
    private authenticationService: AuthenticationService,
    private toastr: ToastrService) {
    translate.addLangs(["th", "en"]);
  }

  ngOnInit() {
    this.createFormValidate();
    this.foo1 = this.translate.currentLang;
    if (this.foo1 == 'th') {

      this.langth = true;
    }
    else if (this.foo1 == 'en') {
      this.langen = true;
    }

    this.route.params.subscribe(refcode => {
      this.refcode = refcode
      let params = new HttpParams().set('refcode', this.refcode.refcode);
      this.authenticationService.validateActivateCode(params)
        .subscribe((data) => {
          console.log(data);
          
        },
          (error) => {
            
            console.log(error);
            this.exit = true;

            this.message = error.error.messages[0];
            console.log(this.message);
            
            $('#dialog').modal({
              backdrop: 'static',
              keyboard: false,
              show: true
            });

          });
      console.log(refcode)
    })

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

  checkpage(page) {
    console.log(page)

    switch (page) {
      case 'otp':
        console.log(this.formchange)
        if (this.formchange.valid) {

          this.isNotValid = false;

          let params = new HttpParams().set('refcode', this.refcode.refcode);

          const user = {
            Password: this.formchange.controls.password.value,
            ConfirmPassword: this.formchange.controls.repeatPassword.value
          }
          console.log(user);

          this.authenticationService.confirmForgotPassword(user, params)
            .subscribe((data) => {
              console.log(data);
              this.User = data;
              this.page = "otp";
              this.mobile = this.User.mobile;
            },
              (error) => {
                console.log(error);
                this.message = error.error.messages;
                $('#dialog').modal({
                  backdrop: 'static',
                  keyboard: false,
                  show: true
                });
              });
        }
        else if (this.formchange.invalid) {
          this.isNotValid = true;
          this.validateAllFormFields(this.formchange);
        }
        break;

      case 'complete':
        if (this.formotp.valid) {
          this.isNotValid = false;

          let Params = new HttpParams();
          Params = Params.append('otp', this.formotp.controls.otp.value);
          Params = Params.append('refcode', this.User.refcode);

          const user = {
            Password: this.formchange.controls.password.value,
            ConfirmPassword: this.formchange.controls.repeatPassword.value
          }
          this.authenticationService.OTPForgotPassword(user, Params)
            .subscribe((data) => {
              console.log(data);
              this.exit = true;
              this.message = "ท่านได้ทำการเปลี่ยนรหัสผ่านเรียบร้อยแล้ว";

              $('#dialog').modal({
                backdrop: 'static',
                keyboard: false,
                show: true
              });
            },
              (error) => {
                console.log(error);
                this.message = error.error.messages;
                $('#dialog').modal({
                  backdrop: 'static',
                  keyboard: false,
                  show: true
                });
              });

        }
        else if (this.formotp.invalid) {
          this.isNotValid = true;
          this.validateAllFormFields(this.formotp);
        }
        break;

      default:

        this.page = "changepassword";
        console.log(this.page)
        break;
    }


  }
  createFormValidate() {
    this.formchange = this.fb.group({
      password: [null,
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*#?&]).{8,16}$/)
        ]
      ],
      repeatPassword: [null,
        [
          Validators.required,
          passwordConfirming,
          Validators.minLength(8),
          Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*#?&]).{8,16}$/)
          // Validators.pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)
        ]
      ],
    })
    this.formotp = this.fb.group({
      otp: [null,
        [
          Validators.required,
          // Validators.minLength(10),
          // Validators.maxLength(),
          Validators.pattern(/^[0-9]*$/)
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

  isFieldNotValid5(field: string) {
    return !this.formchange.get(field).valid && this.formchange.get(field).touched

  }

  ValidatorDisplayCss5(field: string) {
    return {
      'has-danger': this.isFieldNotValid5(field)
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

    this.authenticationService.requestOTP(params)
      .subscribe((data) => {
        console.log(data);
        this.User = data;
      },
        (error) => {
          console.log(error);
          this.message = error.error.messages;
          $('#dialog').modal({
            backdrop: 'static',
            keyboard: false,
            show: true
          });
        });
  }

}
