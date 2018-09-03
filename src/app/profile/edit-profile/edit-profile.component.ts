import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
// declare let $: any;
declare var $:any;

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  // @ViewChild('modal') modal:ElementRef;

  constructor() { }

  ngOnInit() {
    // $('#modal').modal('show');
    $('#mutual-tab-menu').find('li').removeClass('current');
    $('#mutual-tab-menu').find('li#menu1').addClass('current');

   
  }
  openmodal(){
    $('#disclaimer').modal({
      backdrop: 'static',
      keyboard: false,
      show: true
  });
    }

}
