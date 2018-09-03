import { Component, OnInit, TemplateRef, ViewChild, AfterViewInit ,} from '@angular/core';
import { Directive, ElementRef, AfterViewChecked, Input, HostListener } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { MalihuScrollbarService } from 'ngx-malihu-scrollbar';
import { TranslateService } from '@ngx-translate/core';
// import "/assets/Content/css/jquery.mCustomScrollbar.css";

declare var $: any;


// declare var $:any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss',],
})
@Directive({
  selector: '[myMatchHeight]'
})


export class LoginComponent implements OnInit {

  display: boolean = false;
  @ViewChild('content') private content;
  @ViewChild('disclaimer') private content2;

  constructor(
    private modalService: NgbModal,
    private scrollbarService: MalihuScrollbarService 
  ) {}

  ngOnInit() {
    
    $('#disclaimer').modal({
      backdrop: 'static',
      keyboard: false,
      show: true
  });
  this.scrollbarService.initScrollbar('#content-scroll-1', { axis: 'y', theme: 'dark', scrollButtons: { enable: true } });
  // $("#content-scroll-1").mCustomScrollbar({
  // });
    // this.modalService.open(this.content);
    // this.display = true;


  }
  ngAfterViewInit(){
    
  }

}
