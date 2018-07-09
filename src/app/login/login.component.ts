import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import * as $ from 'jquery-match-height';
import { Directive, ElementRef, AfterViewChecked, Input, HostListener } from '@angular/core';

library.add(fas, far);


// declare var $:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

@Directive({
    selector: '[myMatchHeight]'
})

export class LoginComponent implements OnInit {
 
  page = "signin";
  myMatchHeight: string;  

  constructor(private el: ElementRef) { }

  ngOnInit() { 
   
    // $(function() {
    //     $('.item').matchHeight();
    // });
   
        // $("button").click(function(){
        //     var div = $("div");  
        //     div.animate({left: '100px'}, "slow");
        //     div.animate({fontSize: '5em'}, "slow");
        // });

         
        // $('.item').matchHeight();
       
        // $('.row').each(function(i, elem) {
        //     $(elem)
        //         .find('.article-box .well')   // Only children of this row
        //         .matchHeight({byRow: false}); // Row detection gets confused so disable it
        // });
    
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
    case 'signup1':
        this.page = "signup1";
        break;
    case 'signup2':
        this.page = "signup2";
        break;
    default:
        break;
}
    

  }


}
