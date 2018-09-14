import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../service/authentication.service'
import { first } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';



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

    // reset login status
    this.authenticationService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
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
  createFormValidate() {
    this.formsighin = this.fb.group({
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
          Validators.pattern(/^(?=.*[A-Z])(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/)]
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
      this.isNotValid = false;

      const user = {
        UserName: this.formsighin.controls.username.value,
        Password: this.formsighin.controls.password.value
      }
      this.authenticationService.login(user)
        .pipe(first())
        .subscribe(
          data => {
            console.log(data)
            this.router.navigate([this.returnUrl]);
          },
          error => {
            console.log(error)
            this.toastr.error('', error.error.messages);            
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
