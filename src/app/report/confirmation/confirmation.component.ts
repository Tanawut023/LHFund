import { Component, OnInit } from '@angular/core';
import { BaseApplicationDataService } from '../../service/base-application-data.service';
import { first } from 'rxjs/operators';
import { HttpParams } from '@angular/common/http';
import { ReportService } from '../../service/report.service';
import { saveAs } from 'file-saver'

declare var $: any;

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {
  model;
  userall: any = {};
  userselect: any = {};
  unitholderno: any = "init";
  loading: boolean;
  confirmlist
  constructor(
    private basedataservice: BaseApplicationDataService,
    private reportservice: ReportService
  ) { }

  ngOnInit() {

    this.getSelectListUnitholder();

    $('#mutual-tab-menu').find('li').removeClass('current');
    $('#mutual-tab-menu').find('li#menu8').addClass('current');

    $('.selectpicker').selectpicker();
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
  getEffectiveDate() {
    return this.model.year + "-" + this.model.month + "-" + this.model.day;
  }
  OnSubmitd() {

    this.loading = true;
    var user;
    console.log(this.model);


    if (typeof this.model == 'undefined') {
      console.log('test');
      user = {
        UnitholderID: this.userselect.UnitholderId
      }

    }
    else if (typeof this.model !== 'undefined') {
      console.log("test3");
      user = {
        UnitholderID: this.userselect.UnitholderId,
        EffectiveDate: this.getEffectiveDate()
      }
    }
    // } else {
    //   console.log('test2');
    //   console.log(this.fundname);

    //   user = {
    //     UnitholderID: this.userselect.UnitholderId,
    //     FundID: this.fundname.FundID,
    //     StartOrderDate: this.getstartdate(),
    //     EndOrderDate: this.getenddate()
    //   }
    // }
    console.log(user);

    this.reportservice.confirmation(user)
      .subscribe(
        data => {
          console.log(data);
          this.confirmlist = data;
          this.loading = false;
        },
        error => {
          console.log(error)
          this.loading = false;

        });


  }
  download(arr) {
    this.loading = true;
    var i = arr;
    var filename = this.confirmlist[i].ConfirmationName;

    var user = {
      UnitholderID: this.userselect.UnitholderId,
      OrderID: this.confirmlist[i].OrderID,
      TxType: this.type(this.confirmlist[i].TxType)
    }
    console.log(user);

    if (user instanceof HttpParams) {
      return 'application/x-www-form-urlencoded;charset=UTF-8';
    }


    this.reportservice.confirmationdownload(user)
      .subscribe(
        data => {
          saveAs(data, filename);
          this.loading = false;
        },
        error => {
          console.log(error)
          console.log('here');

          // setTimeout(() => {
            $('#message').modal({
              backdrop: 'static',
              keyboard: false,
              show: true
            });
          // }, 100);
          
          this.loading = false;

        });


  }
  type(type) {
    var retype;
    switch (type) {
      case 'Subscription':
        retype = 'SUB';
        return retype;

      case 'Switching Out':
        retype = 'SWO'
        return retype;

      case 'Redemption':
        retype = 'RDM'
        return retype;

      case 'Switching In':
        retype = 'SWI'
        return retype;
    }

  }
}
