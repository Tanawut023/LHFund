import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BaseApplicationDataService } from '../../service/base-application-data.service';
import { first } from 'rxjs/operators';
import { HttpParams } from '@angular/common/http';
import { ReportService } from '../../service/report.service'
import { getDate } from '../../Share/dateformat';
import { log } from 'util';
@Component({
  selector: 'app-receipt-history',
  templateUrl: './receipt-history.component.html',
  styleUrls: ['./receipt-history.component.scss']
})
export class ReceiptHistoryComponent implements OnInit {
  model: any = {};
  userall: any = {};
  userselect: any = {};
  unitholderno: any = "init";
  Fundtypelist;
  Fundnamelist;
  dividendreport;
  fundtype: any = 0;
  fundname: any = 0;
  caltable: any;
  current = 1;
  row = 999;
  reportlist;
  p: number = 1;
  constructor(
    private basedataservice: BaseApplicationDataService,
    private reportservice: ReportService

  ) { }

  ngOnInit() {

    this.getSelectListUnitholder();
    this.getfundtypelist();

    $('#mutual-tab-menu').find('li').removeClass('current');
    $('#mutual-tab-menu').find('li#menu3').addClass('current');
  }
  onChange() {

    for (let i = 0; i < this.userall.unitholderlist.length; i++) {
      if (this.userall.unitholderlist[i].UnitholderId == this.unitholderno.UnitholderId) {
        this.userselect = this.userall.unitholderlist[i];
      }
    }
  }
  changefundtype() {
    console.log(this.fundtype);

    var id = this.fundtype;


    let Params = new HttpParams();
    Params = Params.append('fundtypeid', id);
    this.reportservice.changefundtype(Params)
      .pipe(first())
      .subscribe(
        data => {
          console.log(data);
          this.Fundnamelist = data['fundlist'];
        },
        error => {
          console.log(error)

        });
  }
  getstartdate() {
    return this.model.startDate.year + "-" + this.model.startDate.month + "-" + this.model.startDate.day;
  }
  getenddate() {
    return this.model.endDate.year + "-" + this.model.endDate.month + "-" + this.model.endDate.day;
  }


  getSelectListUnitholder() {
    this.basedataservice.getSelectListUnitholder()
      .pipe(first())
      .subscribe(
        data => {
          console.log(data);
          this.userall = data;
          this.unitholderno = this.userall.unitholderlist[0];
          this.userselect = this.userall.unitholderlist[0];
        },
        error => {
          console.log(error)

        });
  }

  getfundtypelist() {
    this.reportservice.getfundtypelist()
      .subscribe(
        data => {
          console.log(data);
          this.Fundtypelist = data['fundtypelist'];
        },
        error => {
          console.log(error)

        });
  }

  OnSubmitd() {
    let Params = new HttpParams();
    Params = Params.append('currentpage', "1");
    Params = Params.append('rowperpage', "999");

    var user;
    console.log(this.model);


    if (this.fundtype == "0" && typeof this.model.startDate == 'undefined') {
      console.log(this.fundtype);
      console.log('test');
      user = {
        UnitholderID: this.userselect.UnitholderId
      }

    }
    else if (this.fundtype !== "0" && typeof this.model.startDate == 'undefined' && typeof this.fundname.FundCode !== 'undefined') {
      console.log(this.fundtype);
      console.log('test4');
      user = {
        UnitholderID: this.userselect.UnitholderId,
        FundTypeID: this.fundtype,
        FundCode: this.fundname.FundCode,
      }

    }
    else if (typeof this.model.startDate !== 'undefined' && this.fundtype == "0") {
      console.log("test3");
      user = {
        UnitholderID: this.fundtype,
        StartXDDate: this.getstartdate(),
        EndXDDate: this.getenddate()
      }

    } else {
      console.log('test2');
      console.log(this.fundname);

      user = {
        UnitholderID: this.userselect.UnitholderId,
        FundTypeID: this.fundtype,
        FundCode: this.fundname.FundCode,
        StartXDDate: this.getstartdate(),
        EndXDDate: this.getenddate(),
        TransactionDate: getDate()
      }
    }
    console.log(user);

    // let params = new HttpParams().set('unitholderid', this.userselect.UnitholderId);

    this.reportservice.dividendreport(user, Params)
      .subscribe(
        data => {
          console.log(data);
          this.dividendreport = data;
          this.calulatetable();
        },
        error => {
          console.log(error)

        });


  }
  calulatetable() {
    // var array = new Array();
    var reportlist = new Array();

    console.log('test');
    var count = 0;
    var iRows = 1;
    var SumRows = 0;

    for (let i = 0; i < this.dividendreport.dividendreport.length; i++) {
      console.log('fori');
      var balance = 0;
      var tax = 0;
      var net = 0;
      var count2 = 0;
      // var rowsofgroup = (this.dividendreport.dividendreport[i].DividendPayment.length) - 1;
      // var rowsofgroup2 = ((this.dividendreport.dividendreport[i].DividendPayment.length) % 10) - 1;
      SumRows += this.dividendreport.dividendreport[i].DividendPayment.length;
      for (let y = 0; y < this.dividendreport.dividendreport[i].DividendPayment.length; y++) {
        console.log('fory');
        var obj;

        balance += parseFloat(this.dividendreport.dividendreport[i].DividendPayment[y].DividendAmount);
        tax += parseFloat(this.dividendreport.dividendreport[i].DividendPayment[y].DividendWithHoldingTax);
        net += parseFloat(this.dividendreport.dividendreport[i].DividendPayment[y].NetDividendAmount);
        obj = this.dividendreport.dividendreport[i].DividendPayment[y]

        if (count == 0 || count2 == 0) {
          if (this.dividendreport.dividendreport[i].FundCode == obj.FundCode) {
            obj.FundCode = this.dividendreport.dividendreport[i].FundCode;
            obj.FundName = this.dividendreport.dividendreport[i].FundName;
            obj.FundNameEng = this.dividendreport.dividendreport[i].FundNameEng;
          }
        }
        if (count == 9 || iRows == SumRows) {
          obj.balance = balance;
          obj.tax = tax;
          obj.net = net;

          balance = 0;
          tax = 0;
          net = 0;
        }
        reportlist.push(obj);
        console.log(obj);
        count++;
        count2++;
        iRows++;
        if (count == 10) {
          count = 0;
        }
      }
      // array.push({ balance: balance, tax: tax, net: net });

    }
    // this.holdtax = arraytax;
    // this.caltable = array;
    this.reportlist = reportlist;
    // console.log(this.caltable);
    console.log(this.reportlist);




  }

  reset() {
    console.log('reset');

    this.Fundnamelist = [];
    this.fundtype = 0;
    this.fundname = 0;
    this.dividendreport = '';
    this.model = {};
    this.reportlist = [];
    this.p = 1;
  }

}
