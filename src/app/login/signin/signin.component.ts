import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../service/authentication.service'
import { first } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.prod';

declare var $: any;



@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  formsighin: FormGroup;
  isNotValid = false;
  langth: boolean;
  langen: boolean;
  foo1: string;
  returnUrl: any;
  User: any = {}
  message: any = "";  
  loading = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private translate: TranslateService,
    private authenticationService: AuthenticationService,
    private toastr: ToastrService,
    private http: HttpClient) {
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

    // reset login status
    this.authenticationService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/logingin';

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
  createFormValidate() {
    this.formsighin = this.fb.group({
      username: [null,
        [
          Validators.required
        ]
      ],
      password: [null,
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
  onSubmit() {   
    
    console.log(this.formsighin)
    if (this.formsighin.valid) {
      this.loading = true;
      this.isNotValid = false;

      let body = new URLSearchParams();
      body.set('username', this.formsighin.controls.username.value);
      body.set('password', this.formsighin.controls.password.value);
      body.set('grant_type', 'password');
      body.set('client_id', 'WebApp');

      let data = body.toString();
      console.log(data)

      this.authenticationService.login(data)
        .pipe(first())
        .subscribe(
          data => {
            localStorage.setItem('userInfo', data['memberInfo']);
            this.router.navigate([this.returnUrl]);
          },
          error => {
            
            console.log(error);
            console.log(error.error.error_description);
            this.message = error.error.error_description;
            this.loading = false;

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
      this.validateAllFormFields(this.formsighin);
    }
  }

  isFieldNotValid1(field: string) {
    return !this.formsighin.get(field).valid && this.formsighin.get(field).touched

  }

  ValidatorDisplayCss1(field: string) {
    return {
      'has-danger': this.isFieldNotValid1(field)
    };
  }
  navigate(target) {
    var target = target;
    console.log(target);
    this.router.navigate([target], { relativeTo: this.route });
  }
}
