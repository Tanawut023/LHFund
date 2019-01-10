import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.scss']
})
export class TypeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('#mutual-tab-menu').find('li').removeClass('current');
    $('#mutual-tab-menu').find('li#menu9').addClass('current');
  }
  print() {
    window.focus();
    window.print();
}

}
