import { Component, OnInit, TemplateRef, ViewChild, AfterViewInit ,} from '@angular/core';
import { Directive, ElementRef, AfterViewChecked, Input, HostListener } from '@angular/core';
import { MalihuScrollbarService } from 'ngx-malihu-scrollbar';

declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss',],
})

export class LoginComponent implements OnInit {

  display: boolean = false;
  @ViewChild('content') private content;
  @ViewChild('disclaimer') private content2;

  constructor(
    private scrollbarService: MalihuScrollbarService 
  ) {}

  ngOnInit() {
    
    $('#disclaimer').modal({
      backdrop: 'static',
      keyboard: false,
      show: true
  });
  this.scrollbarService.initScrollbar('#content-scroll-1', { axis: 'y', theme: 'dark', scrollButtons: { enable: true } });
  }

}
