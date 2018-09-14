import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { BaseApplicationDataService } from '../../service/base-application-data.service';
import { first } from 'rxjs/operators';
import { HttpParams } from '@angular/common/http';
// declare let $: any;
declare var $: any;

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  // @ViewChild('modal') modal:ElementRef;
  userall: any = {};
  userselect: any = {};
  unitholderno: any = "init";


  constructor(
    private basedataservice: BaseApplicationDataService
  ) { }

  ngOnInit() {

    this.basedataservice.getSelectListUnitholder()
      .pipe(first())
      .subscribe(
        data => {
          this.userall = data;
          this.unitholderno = this.userall.unitholderlist[0];
          this.userselect = this.userall;
        },
        error => {
          console.log(error)

        });

    // $('#modal').modal('show');
    $('#mutual-tab-menu').find('li').removeClass('current');
    $('#mutual-tab-menu').find('li#menu1').addClass('current');


  }
  openmodal() {
    $('#disclaimer').modal({
      backdrop: 'static',
      keyboard: false,
      show: true
    });
  }
  onChange() {

    let params = new HttpParams().set('unitholderid', this.unitholderno.Value);
    this.basedataservice.getUnitholder(params)
      .pipe(first())
      .subscribe(
        data => {
          // console.log(data)
          this.userselect = data;

        },
        error => {
          console.log(error)

        });
  }
}
