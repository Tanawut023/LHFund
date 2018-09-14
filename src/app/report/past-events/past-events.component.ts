import { Component, OnInit } from '@angular/core';
import { BaseApplicationDataService } from '../../service/base-application-data.service';
import { first } from 'rxjs/operators';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-past-events',
  templateUrl: './past-events.component.html',
  styleUrls: ['./past-events.component.scss']
})
export class PastEventsComponent implements OnInit {
  model: any = {};
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
          this.unitholderno = this.userall.unitholderList[0];
          this.userselect = this.userall;
        },
        error => {
          console.log(error)

        });

    $('#mutual-tab-menu').find('li').removeClass('current');
    $('#mutual-tab-menu').find('li#menu4').addClass('current');
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
