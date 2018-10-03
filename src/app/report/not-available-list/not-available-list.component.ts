import { Component, OnInit } from '@angular/core';
import { BaseApplicationDataService } from '../../service/base-application-data.service';
import { first } from 'rxjs/operators';
import { datethai } from '../../Share/dateformat';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-not-available-list',
  templateUrl: './not-available-list.component.html',
  styleUrls: ['./not-available-list.component.scss']
})
export class NotAvailableListComponent implements OnInit {
  userall: any = {};
  userselect: any = {};
  unitholderno: any = "init";
  dateformat = datethai;

  constructor(
    private basedataservice: BaseApplicationDataService
  ) { }

  ngOnInit() {

    this.getSelectListUnitholder();

    $('#mutual-tab-menu').find('li').removeClass('current');
    $('#mutual-tab-menu').find('li#menu7').addClass('current');
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
        },
        error => {
          console.log(error)

        });
  }

}
