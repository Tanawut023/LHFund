import { Component, OnInit } from '@angular/core';
import { BaseApplicationDataService } from '../../service/base-application-data.service';
import { first } from 'rxjs/operators';
import { datethai } from '../../Share/dateformat';
import { HttpParams } from '@angular/common/http';
import { ReportService } from '../../service/report.service';
import { OrderService } from '../../service/order.service';
declare var $: any;
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
  todayreport;
  deletedOrder: any;
  message: any;
  deletedGroup: any;

  constructor(
    private basedataservice: BaseApplicationDataService,
    private reportservice: ReportService,
    private orderservice: OrderService
  ) { }

  ngOnInit() {

    this.getSelectListUnitholder();

    $('#mutual-tab-menu').find('li').removeClass('current');
    $('#mutual-tab-menu').find('li#menu6').addClass('current');
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
          this.gettodayrport();
        },
        error => {
          console.log(error)

        });
  }
  print() {
    window.focus();
    window.print();
  }

  gettodayrport() {
    let params = new HttpParams().set('unitholderid', this.userselect.UnitholderId);
    this.reportservice.todayreport(params)
      .pipe(first())
      .subscribe(
        data => {
          console.log(data);
          this.todayreport = data;
        },
        error => {
          console.log(error)

        });
  }
  modaldeleteorder(group,order) {

    this.deletedOrder = order;
    this.deletedGroup = group;
    console.log(this.deletedOrder);
    $('#delete').modal({
      backdrop: 'static',
      keyboard: false,
      show: true
    });
  }

  deleteorder() {
    const order = {
      UnitHolderID: this.deletedOrder.UnitHolderID,
      OrderID: this.deletedOrder.OrderID
    }

    this.orderservice.cancelorder(order)
      .pipe(first())
      .subscribe(
        data => {
          console.log(data);
          this.gettodayrport();
          // this.ordersubscriptionlist = data;
          $('#delete').modal('toggle');

        },
        error => {
          console.log(error);
          $('#delete').modal('toggle');
          this.message = error.error.messages;
          $('#message').modal({
            backdrop: 'static',
            keyboard: false,
            show: true
          });

        });
  }

}
