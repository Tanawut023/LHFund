import { Component, OnInit } from '@angular/core';
import { BaseApplicationDataService } from '../../service/base-application-data.service';
import { StandingorderService } from '../../service/standingorder.service'
import { first } from 'rxjs/operators';
import { datethai, dateeng } from '../../Share/dateformat';
import { HttpParams } from '@angular/common/http';
import { LanguageService } from '../../service/language.service';
import { Observable } from 'rxjs';
import { OrderService } from '../../service/order.service';
import { TranslateService } from '@ngx-translate/core';
declare var $: any;
@Component({
  selector: 'app-all-list',
  templateUrl: './all-list.component.html',
  styleUrls: ['./all-list.component.scss']
})
export class AllListComponent implements OnInit {
  userall: any = {};
  userselect: any = {};
  unitholderno: any = "init";
  dateformat = datethai;
  dateformatEng = dateeng;
  standingorder;
  deletedOrder: any;
  deletedGroup: any;
  message: any;
  lang: Observable<string>;
  nolist: boolean;

  constructor(
    private translate: TranslateService,
    private basedataservice: BaseApplicationDataService,
    private standingorderservice: StandingorderService,
    private orderservice: OrderService,
    private langservice: LanguageService

  ) { }

  ngOnInit() {

    this.getSelectListUnitholder();

    $('#mutual-tab-menu').find('li').removeClass('current');
    $('#mutual-tab-menu').find('li#menu4').addClass('current');

    this.langservice.listen().subscribe((m: any) => {
      console.log(m);
      this.lang = m;
    })
  }
  onChange() {

    for (let i = 0; i < this.userall.unitholderlist.length; i++) {
      if (this.userall.unitholderlist[i].UnitholderId == this.unitholderno.UnitholderId) {
        this.userselect = this.userall.unitholderlist[i];
      }
    }
    this.getstnadingorder();
  }

  getSelectListUnitholder() {
    this.orderservice.getSelectListUnitholder()
      .pipe(first())
      .subscribe(
        data => {
          setTimeout(() => {
            $('.selectpicker').selectpicker('refresh');
          }, 100);
          this.userall = data;
          if (this.userall.unitholderlist.length > 0) {
            this.unitholderno = this.userall.unitholderlist[0];
            this.userselect = this.userall.unitholderlist[0];
            this.getstnadingorder();
          }
          else {
            this.userall = '';
          }
        },
        error => {
          console.log(error)
          this.message = error.error.messages;
          $('#message').modal({
            backdrop: 'static',
            keyboard: false,
            show: true
          });

        });
  }
  getstnadingorder() {
    this.nolist = false;
    let params = new HttpParams().set('unitholderid', this.userselect.UnitholderId);

    this.standingorderservice.getstnadingorder(params)
      .pipe(first())
      .subscribe(
        data => {
          console.log(data);
          this.standingorder = data;
          if (!this.standingorder.standingorderlist) {
            this.nolist = true;
          }
        },
        error => {
          console.log(error)
          this.nolist = false;
          this.message = error.error.messages;
          $('#message').modal({
            backdrop: 'static',
            keyboard: false,
            show: true
          });

        });
  }
  modaldeleteorder(group, order) {

    this.deletedOrder = order;
    this.deletedGroup = group;
    // console.log(JSON.stringify(this.deletedOrder)+'index = '+index);
    $('#delete').modal({
      backdrop: 'static',
      keyboard: false,
      show: true
    });
  }

  deleteorder() {
    const order = {
      UnitHolderID: this.deletedOrder.StandingUnitHolderID,
      StandingOrderID: this.deletedOrder.StandingOrderID
    }

    this.standingorderservice.cancelstnadingorder(order)
      .pipe(first())
      .subscribe(
        data => {
          console.log(data);
          this.getstnadingorder();
          // this.ordersubscriptionlist = data;
          $('#delete').modal('toggle');
          this.translate.get('Modal.delete-or').subscribe((res: string) => {
            console.log(res);
            this.message = res;
            //=> 'hello world'
          });
          // this.message = 'ลบรายการสำเร็จ';
          $('#message').modal({
            backdrop: 'static',
            keyboard: false,
            show: true
          });

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
  print() {
    window.focus();
    window.print();
  }

}
