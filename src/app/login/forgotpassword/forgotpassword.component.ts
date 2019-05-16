import { Component, OnInit,ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { HttpParams } from '@angular/common/http';
import { AuthenticationService } from '../../service/authentication.service'
import { first } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { ReCaptcha2Component } from '../../../../node_modules/ngx-captcha';
declare var $: any;


@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {
  page = 'forgotpassword';
  formforgot: FormGroup;
  // formotp: FormGroup;
  isNotValid = false;
  blind: any = '';
  foo1: string;
  langth: boolean;
  langen: boolean;
  User: any = {}
  message: any;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private translate: TranslateService,
    private authenticationService: AuthenticationService,
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
  onSubmit() {
    console.log(this.formforgot)
    if (this.formforgot.valid) {
      this.isNotValid = false;
      this.loading = true;
      const user = {
        Email: this.formforgot.controls.email.value,
        IDCardNo: this.formforgot.controls.IDcard.value
      }
      let Params = new HttpParams();
      Params = Params.append('encodedresponse', this.formforgot.controls.recaptcha.value);
      
      this.authenticationService.validateForgotPassword(user, Params)
        .pipe(first())
        .subscribe(
          data => {
            console.log(data)
            this.User = data;
            this.loading = false;
            this.reset();
            $('#reset').modal({
              backdrop: 'static',
              keyboard: false,
              show: true
            });
          },
          error => {
            console.log(error);
            this.message = error.error.messages;
            this.loading = false;
            this.reset();
            setTimeout(() => {
              $('#message').modal({
                backdrop: 'static',
                keyboard: false,
                show: true
              });
            }, 100);
          });


    } else {
      this.isNotValid = true;
      this.validateAllFormFields(this.formforgot);
    }
  }

  createFormValidate() {

    this.formforgot = this.fb.group({
      email: [null,
        [
          Validators.required,
          Validators.pattern(/^[A-Za-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)
        ]
      ],
      IDcard: [null,
        [
          Validators.required
        ]
      ],
      recaptcha: [null,
        [
          Validators.required,
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
  navigate(target) {
    var target = target;
    console.log(target);
    this.router.navigate([target], { relativeTo: this.route });
  }
  isFieldNotValid3(field: string) {
    return !this.formforgot.get(field).valid && this.formforgot.get(field).touched

  }

  ValidatorDisplayCss3(field: string) {
    return {
      'has-danger': this.isFieldNotValid3(field)
    };
  }

  reset(): void {
    this.captchaElem.resetCaptcha();
  }
}
