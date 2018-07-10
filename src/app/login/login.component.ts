import { Component,  OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import * as $ from 'jquery-match-height';
import { Directive, ElementRef, AfterViewChecked, Input, HostListener } from '@angular/core';
import * as Chart from 'chart.js'

library.add(fas, far);


// declare var $:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css','../../assets/Content/default/css/content/login.css'],
})

@Directive({
    selector: '[myMatchHeight]'
})

export class LoginComponent implements OnInit {
 
  page = "signin";
  myMatchHeight: string;  
//   canvas: any;
  ctx: any;
  myChart:any;


  constructor(private el: ElementRef) { }

//   ngOnInit() {  
        
//   }
ngOnInit() {
    // this.ctx = document.getElementById("myChart");
    this.myChart = new Chart('canvas', {
    type: 'pie',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        // scales: {
        //     yAxes: [{
        //         ticks: {
        //             beginAtZero:true
        //         }
        //     }]
        // }
    }
});
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
        
        this.page = "signin";
        console.log(this.page)
        break;
}
    

  }


}
