import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { HttpParams } from '@angular/common/http';
import { AuthenticationService } from '../../service/authentication.service'
import { first } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
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
  }
  switchlang(lang) {
    if (lang == 'th') {
      this.translate.use('th');
      this.langen = false;
      this.langth = true;
      localStorage.setItem('lang', lang );

    }
    else if (lang == 'en') {
      this.translate.use('en');
      this.langth = false;
      this.langen = true;
      localStorage.setItem('lang', lang );
    }


  }
  onSubmit() {
    console.log(this.formforgot)
    if (this.formforgot.valid) {
      this.isNotValid = false;

      const user = {
        Email: this.formforgot.controls.email.value,
        IDCardNo: this.formforgot.controls.IDcard.value
      }
      this.authenticationService.validateForgotPassword(user)
        .pipe(first())
        .subscribe(
          data => {
            console.log(data)
            this.User = data;

            $('#reset').modal({
              backdrop: 'static',
              keyboard: false,
              show: true
          });
            // this.router.navigate(['/login/changepassword/' + this.User.refcode], { relativeTo: this.route })
          },
          error => {
            console.log(error);
            this.message = error.error.messages;
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
          Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)
        ]
      ],
      IDcard: [null,
        [
          Validators.required,
          // Validators.minLength(7),
          // Validators.maxLength(13),
          // Validators.pattern(/^[A-Za-z0-9]*$/)
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
  // numberOnly(event): boolean {
  //   const charCode = (event.which) ? event.which : event.keyCode;
  //   if (charCode > 31 && (charCode < 48 || charCode > 57)) {
  //     return false;
  //   }
  //   return true;

  // }
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


}
