import { Component, OnInit } from '@angular/core';
import { BaseApplicationDataService } from '../../service/base-application-data.service';
import { first } from 'rxjs/operators';
import { HttpParams } from '@angular/common/http';
import { ReportService } from '../../service/report.service';
import { getDate } from '../../Share/dateformat';

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
  Fundtypelist;
  Fundnamelist;
  statementreport;
  fundtype: any = 0;
  fundname: any = 0;
  caltable: any;
  loading = false;
  p: number = 1;
  statementlist;

  constructor(
    private basedataservice: BaseApplicationDataService,
    private reportservice: ReportService
  ) { }

  ngOnInit() {

    this.getSelectListUnitholder();
    this.getfundtypelist();

    $('#mutual-tab-menu').find('li').removeClass('current');
    $('#mutual-tab-menu').find('li#menu4').addClass('current');
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

    this.loading = true;
    let params = new HttpParams().set('unitholderid', this.userselect.UnitholderId);
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
    // else if (this.fundtype !== "0" && typeof this.model.startDate == 'undefined' && typeof this.fundname.FundCode !== 'undefined') {
    //   console.log(this.fundtype);
    //   console.log('test4');
    //   user = {
    //     UnitholderID: this.userselect.UnitholderId,
    //     FundTypeID: this.fundtype
    //   }

    // }
    else if (typeof this.model.startDate !== 'undefined' && this.fundtype == "0") {
      console.log("test3");
      user = {
        UnitholderID: this.userselect.UnitholderId,
        StartOrderDate: this.getstartdate(),
        EndOrderDate: this.getenddate()
      }

    } else {
      console.log('test2');
      console.log(this.fundname);

      user = {
        UnitholderID: this.userselect.UnitholderId,
        FundID: this.fundname.FundID,
        StartOrderDate: this.getstartdate(),
        EndOrderDate: this.getenddate()
      }
    }
    console.log(user);

    this.reportservice.statementreport(user,Params)
      .subscribe(
        data => {
          console.log(data);
          this.statementreport = data;
          this.calulatetable();
          this.loading = false;
        },
        error => {
          console.log(error)
          this.loading = false;

        });


  }
  calulatetable() {
    var array = new Array();
    var count = 0;

    console.log('test');

    if (this.statementreport.statementreport[0]) {
      for (let i = 0; i < this.statementreport.statementreport[0].StatementFunds.length; i++) {
        console.log('fori');
        var balance = 0;
        var tax = 0;
        var net = 0;
        var count2 = 0;
        for (let y = 0; y < this.statementreport.statementreport[0].StatementFunds[i].StatementDetails.length; y++) {
          console.log('fory');
          var obj;
          obj = this.statementreport.statementreport[0].StatementFunds[i].StatementDetails[y];

          if (count == 0 || count2 == 0) {
            if (this.statementreport.statementreport[0].StatementFunds[i].FundID == obj.FundID) {
              obj.FundCode = this.statementreport.statementreport[0].StatementFunds[i].FundCode;
              obj.FundName = this.statementreport.statementreport[0].StatementFunds[i].FundName;
              obj.FundNameEng = this.statementreport.statementreport[0].StatementFunds[i].FundNameEng;
            }
          }
          array.push(obj);
        console.log(obj);
        count++;
        count2++;
        if (count == 10) {
          count = 0;
        }
          // balance += parseFloat(this.statementreport.statementreport[i].DividendPayment[y].BalanceUnit);
          // tax += parseFloat(this.statementreport.statementreport[i].DividendPayment[y].DividendWithHoldingTax);
          // net += parseFloat(this.statementreport.statementreport[i].DividendPayment[y].NetDividendAmount);
        }
        // array.push({ balance: balance, tax: tax, net: net });

      }
    }


    this.statementlist = array;
    console.log(this.statementlist);


  }
  reset() {
    console.log('reset');
    
    this.Fundnamelist = [];
    this.fundtype = 0;
    this.fundname = 0;
    this.statementreport = '';
    this.model = {};
    this.statementlist = [];
    this.p = 1;
    // console.log(this.statementlist);
    
  }
}
