import { Component, OnInit, TemplateRef, AfterContentInit, ViewChild, AfterViewInit ,} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Directive, ElementRef, AfterViewChecked, Input, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {TranslateService} from '@ngx-translate/core';
// import {DialogModule} from 'primeng/dialog';
// import {AccordionModule} from 'primeng/accordion';
// import {MenuItem} from 'primeng/api'; 
// import { RegistrationValidator } from './register.validator';

declare var $: any;


// declare var $:any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
// ,'../../assets/Content/default/css/content/login.css'
@Directive({
  selector: '[myMatchHeight]'
})


export class LoginComponent implements OnInit {
  @ViewChild('disclaimer')
  private elName: ElementRef;
  page = "signin";
  myMatchHeight: string;
  buttonotp = "";
  //   canvas: any;
  ctx: any;
  myChart: any;
  form: FormGroup;
  formotp: FormGroup;
  formsighin: FormGroup;
  formforgot: FormGroup;
  formchange: FormGroup;
  errorMessage = Object;
  isNotValid = false;
  UserDetails: Object;
  formstep2: FormGroup;
  profile: any = {};
  blind: any = "";
  changepassword: any ="check";
  display: boolean = false;
  comfirmchange: boolean = false;
  langth: boolean;
  langen: boolean;

    
  // modalRef: BsModalRef;
  // config = {
  //   backdrop: true,
  //   ignoreBackdropClick: false
  // };
  // @ViewChild('resetPwd') public resetPwd:ModalDirective;

  // public isModalShown: boolean = true;

  constructor(
    private el: ElementRef, 
    private fb: FormBuilder, 
    private router: Router,
    private modalService: NgbModal,
    private translate: TranslateService) {
      translate.addLangs(["th", "en"]);
     }
  //   ngOnInit() {  

  //   }
  ngOnInit() {
    this.createFormValidate();
    this.page = "signin";
    // this.comfirmchange =true;
    this.display = true;
    this.langth =true;
    // this.open();
    // $("#disclaimer").modal('show');
    // $("#disclaimer").addClass('in');
    // this.comfirmchange = true;
  }
  ngAfterViewInit() {
    // this.el.modal('show');
  //   $('#disclaimer').modal({
  //     backdrop: 'static',
  //     keyboard: false,
  //     show: true
  // });
  }
  switchlang(lang){
    if(lang=='th'){
      this.translate.use('th');
      this.langen = false;
      this.langth = true;
      
    }
    else if(lang=='en'){
      this.translate.use('en');
      this.langth = false;
      this.langen = true;
  }
    

  }

  checkpage(page) {
    console.log(page)

    switch (page) {
      case 'signin':
      this.page = "signin";
      this.comfirmchange = false;
        break;
      case 'check-otp':
        if (this.formotp.valid) {
          this.page = "signin";
        }
        else if(this.formotp.invalid){
          this.isNotValid = true;
          this.validateAllFormFields(this.formotp);          
        }
        break;
      case 'myport':
        if (this.formsighin.valid) {
          this.router.navigate(['myport']);
        }
        else {
          this.isNotValid = true;
          this.validateAllFormFields(this.formsighin);
        }
        break;
      case 'forgotpassword':
        this.page = "forgotpassword";


        break;
      case 'changepassword':        
        if (this.formotp.valid) {
          this.page = "changepassword";
        }
        else {
          this.isNotValid = true;
          this.validateAllFormFields(this.formotp);
        }
        break;
        case 'confirm-change':        
        if (this.formchange.valid) {
          this.comfirmchange =true;
        }
        else {
          this.isNotValid = true;
          this.validateAllFormFields(this.formchange);
        }
        break;
      case 'otp-forgot':

        if (this.formforgot.valid) {
          this.buttonotp = "forgot"
          this.page = "otp";
        }
        else {
          this.isNotValid = true;
          this.validateAllFormFields(this.formforgot);
        }

        break;

      case 'otp-signup':


        if (this.formstep2.valid) {
          this.buttonotp = "signup"
          this.page = "otp";
        }
        else {
          this.isNotValid = true;
          this.validateAllFormFields(this.formstep2);
        }

        console.log(this.buttonotp)
        break;
      case 'signup1':
        this.page = "signup1";
        break;
      case 'signup2':
      console.log(this.form)
        if (this.form.valid) {
          this.page = "signup2";
          var s = this.form.controls.tel.value;
          this.blind = s[0] + s[1] + s[2] + "-XXXXX" + s[8] + s[9]
          console.log(this.blind);
          console.log(this.profile);
        }
        else {
          this.isNotValid = true;
          this.validateAllFormFields(this.form);
        }
        break;
      default:

        this.page = "signin";
        console.log(this.page)
        break;
    }


  }
  isFieldNotValid(field: string) {
    return !this.form.get(field).valid && this.form.get(field).touched

  }

  ValidatorDisplayCss(field: string) {
    return {
      'has-danger': this.isFieldNotValid(field)
    };
  }
  isFieldNotValid1(field: string) {
    return !this.formsighin.get(field).valid && this.formsighin.get(field).touched

  }

  ValidatorDisplayCss1(field: string) {
    return {
      'has-danger': this.isFieldNotValid1(field)
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
  isFieldNotValid3(field: string) {
    return !this.formforgot.get(field).valid && this.formforgot.get(field).touched

  }

  ValidatorDisplayCss3(field: string) {
    return {
      'has-danger': this.isFieldNotValid3(field)
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
  isFieldNotValid5(field: string) {
    return !this.formchange.get(field).valid && this.formchange.get(field).touched

  }

  ValidatorDisplayCss5(field: string) {
    return {
      'has-danger': this.isFieldNotValid5(field)
    };
  }
  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }

  // validatorInputCss(field: string){
  //   return{
  //     'form-control-danger': this.isFieldNotValid(field)
  //   }
  // }
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
          Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)
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
      // ,
      // otp:[null,
      //     [
      //       Validators.required,
      //       // Validators.minLength(10),
      //       // Validators.maxLength(),
      //     Validators.pattern(/^[0-9]*$/)
      //     ]
      //     ]
      ,
      IDcard: [null,
        [
          Validators.required,
          Validators.minLength(7),
          // Validators.maxLength(13),
          Validators.pattern(/^[A-Za-z0-9]*$/)
        ]
      ],
      prefix: [null,
        [
          Validators.required,
          Validators.pattern(/^[A-Za-zก-๗]{3,15}$/)
        ]
      ],      
      recaptcha: [null,
        [
          Validators.required,
          // Validators.pattern(/^[A-Za-zก-๗]{3,15}$/)
        ]
      ]
    })
    this.formsighin = this.fb.group({
      username: [null,
        [
          Validators.required,
          // Validators.minLength(8),
          Validators.pattern(/^[A-Za-z0-9]+(?:[_-][A-Za-z0-9]+)*$/)
        ]
      ],
      password: [null,
        [
          Validators.required,
          // Validators.minLength(8),
          Validators.pattern(/^[a-zA-Z0-9]{6,16}$/)]
      ]
    })
    this.formstep2 = this.fb.group({
      username: [null,
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(/^[A-Za-z0-9]+(?:[_-][A-Za-z0-9]+)*$/)
        ]
      ],
      password: [null,
        [
          Validators.required,
          Validators.minLength(6),
          Validators.pattern(/^[a-zA-Z0-9]{6,16}$/)
        ]
      ],
      repeatPassword: [null,
        [
          Validators.required,
          Validators.minLength(6),
          Validators.pattern(/^[a-zA-Z0-9]{6,16}$/)
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
          Validators.minLength(7),
          // Validators.maxLength(13),
          Validators.pattern(/^[A-Za-z0-9]*$/)
        ]
      ]
    })
    this.formchange = this.fb.group({      
      password: [null,
        [
          Validators.required,
          Validators.minLength(6),
          Validators.pattern(/^[a-zA-Z0-9]{6,16}$/)
        ]
      ],
      repeatPassword: [null,
        [
          Validators.required,
          Validators.minLength(6),
          Validators.pattern(/^[a-zA-Z0-9]{6,16}$/)
          // Validators.pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)
        ]
      ],
    })
    // this.profile = this.form;

  }

  // onSubmit(){
  //   console.log(this.form)
  //     if(this.form.valid){        
  //       this.page = "signup2";
  //     }
  //     if(this.formsighin.invalid){
  //       this.isNotValid = true;
  //       this.validateAllFormFields(this.formsighin);
  //     }
  //     if(this.form.invalid){
  //       this.isNotValid = true;
  //       this.validateAllFormFields(this.form);
  //     }
  //     else if(this.formsighin.valid){        
  //       this.router.navigate(['myport']);
  //     }

  //     else if(this.formstep2.valid){        
  //       this.page = "otp";
  //       this.otp = "signup"
  //     }
  //     else if(this.formstep2.invalid){
  //       this.isNotValid = true;
  //       this.validateAllFormFields(this.formstep2);
  //     }
  //   }

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
  showDialog() {
    this.display = true;
}

hideDialog() {
    this.display = false;
}

}
