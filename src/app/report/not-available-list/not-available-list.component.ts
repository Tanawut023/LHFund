import { Component, OnInit } from '@angular/core';
import { BaseApplicationDataService } from '../../service/base-application-data.service';
import { first } from 'rxjs/operators';
import { datethai } from '../../Share/dateformat';
import { HttpParams } from '@angular/common/http';
import { ReportService } from '../../service/report.service';

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
  unallocatedreportlist;


  constructor(
    private basedataservice: BaseApplicationDataService,
    private reportservice: ReportService
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
    this.getunallocatedreport();
  }

  getSelectListUnitholder() {
    this.basedataservice.getSelectListUnitholder()
      .pipe(first())
      .subscribe(
        data => {
          this.userall = data;
          this.unitholderno = this.userall.unitholderlist[0];
          this.userselect = this.userall.unitholderlist[0];
          this.getunallocatedreport();
        },
        error => {
          console.log(error)

        });
  }
  getunallocatedreport() {
    let params = new HttpParams().set('unitholderid', this.userselect.UnitholderId);
    this.reportservice.unallocatedreport(params)
      .pipe(first())
      .subscribe(
        data => {
          console.log(data);          
          this.unallocatedreportlist = data;
        },
        error => {
          console.log(error)

        });
  }
  print() {
    window.focus();
    window.print();
}

}
