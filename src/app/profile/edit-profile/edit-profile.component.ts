import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { BaseApplicationDataService } from '../../service/base-application-data.service';
import { first } from 'rxjs/operators';
import { HttpParams } from '@angular/common/http';
import { ProfileService } from '../../service/profile.service'
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
  profile: any = {};


  constructor(
    private basedataservice: BaseApplicationDataService,
    private profileserice: ProfileService
  ) { }

  ngOnInit() {

    this.getSelectListUnitholder();

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

    for (let i = 0; i < this.userall.unitholderlist.length; i++) {
      if (this.userall.unitholderlist[i].UnitholderId == this.unitholderno.UnitholderId) {
        this.userselect = this.userall.unitholderlist[i];
      }
    }

  }

  getSelectListUnitholder() {
    this.basedataservice.getSelectListUnitholder()
      .pipe(first())
      .subscribe(
        data => {
          this.userall = data;
          this.unitholderno = this.userall.unitholderlist[0];
          this.userselect = this.userall.unitholderlist[0];
          this.getprofileinfo();
        },
        error => {
          console.log(error)

        });
  }
  getprofileinfo() {
    let params = new HttpParams().set('unitholderid', this.userselect.UnitholderId);

    this.profileserice.getprofileinfo(params)
    .pipe(first())
      .subscribe(
        data => {
                   
          this.profile = data;
          console.log(this.profile); 
        },
        error => {
          console.log(error)

        });
  }


}
