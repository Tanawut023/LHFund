import { Component, OnInit } from '@angular/core';
import { BaseApplicationDataService } from '../../service/base-application-data.service';
import { first } from 'rxjs/operators';
import { datethai } from '../../Share/dateformat';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-today-list',
  templateUrl: './today-list.component.html',
  styleUrls: ['./today-list.component.scss']
})
export class TodayListComponent implements OnInit {
  userall: any = {};
  userselect: any = {};
  unitholderno: any = "init";
  dateformat = datethai;

  constructor(
    private basedataservice: BaseApplicationDataService
  ) { }

  ngOnInit() {

    this.basedataservice.getSelectListUnitholder()
      .pipe(first())
      .subscribe(
        data => {
          this.userall = data;
          this.unitholderno = this.userall.unitholderList[0];
          this.userselect = this.userall;
        },
        error => {
          console.log(error)

        });

    $('#mutual-tab-menu').find('li').removeClass('current');
    $('#mutual-tab-menu').find('li#menu6').addClass('current');
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
