import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(fas, far);


declare var $:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  // faCoffee  = faCoffee ;
  page = "signin";
  public show:boolean = false;
  public buttonName:any = 'Show';
  isValid:boolean = true;

  constructor() { }

  ngOnInit() {
    
    

  
  }
  
  checkpage(page){
    console.log(page)
  
  switch(page) {
    case 'signin':
        this.page = "signin";
        break;
    case 'forgotpassword':
        this.page = "forgotpassword";
        break;
    case 'otp':
        this.page = "otp";
        break;
    default:
        break;
}
    

  }


}
