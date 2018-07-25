import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [],
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('body').removeClass('nav-expanded');
    // $('#bottom-main-nav').children().clone().appendTo("#canvas_mainnav");
  }
  shownav(){
    // console.log("dfdf");
    $('body').toggleClass('nav-expanded');
  }
  // hidenav(){
  //   $('body').removeClass('nav-expanded');
  // }
}
