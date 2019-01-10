import { Component, OnInit } from '@angular/core';
import { BaseApplicationDataService } from '../../service/base-application-data.service';
import { first } from 'rxjs/operators';
import { HttpParams } from '@angular/common/http';
import { ReportService } from '../../service/report.service';
import { getDate } from '../../Share/dateformat';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

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
  // fundtype: any = 0;
  // fundname: any = 0;
  caltable: any;
  loading = false;
  p: number = 1;
  statementlist;
  minDate;
  form: FormGroup;

  constructor(
    private basedataservice: BaseApplicationDataService,
    private reportservice: ReportService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.createFormValidate();
    this.getSelectListUnitholder();
    this.getfundtypelist();

    $('#mutual-tab-menu').find('li').removeClass('current');
    $('#mutual-tab-menu').find('li#menu4').addClass('current');

    var d = new Date();
    var endDate = new Date(d.getFullYear(), d.getMonth(), d.getDate() + 1);
    console.log(endDate);

    this.minDate = { year: endDate.getFullYear(), month: endDate.getMonth() + 1, day: endDate.getDate() };
  }
  onChange() {

    for (let i = 0; i < this.userall.unitholderlist.length; i++) {
      if (this.userall.unitholderlist[i].UnitholderId == this.unitholderno.UnitholderId) {
        this.userselect = this.userall.unitholderlist[i];
      }
    }
  }
  createFormValidate() {
    this.form = this.fb.group({

      fundtype: [0],
      fundname: [0],
      startDate: [null],
      endDate: [null]

    })
  }
  changefundtype() {


    var id = this.form.controls.fundtype.value;

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
    return this.form.controls.startDate.value.year + "-" + this.form.controls.startDate.value.month + "-" + this.form.controls.startDate.value.day;
  }
  getenddate() {
    return this.form.controls.endDate.value.year + "-" + this.form.controls.endDate.value.month + "-" + this.form.controls.endDate.value.day;
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
    
      this.changefundtype();
    

  }

  OnSubmitd() {
    console.log(this.form);


    this.loading = true;
    let params = new HttpParams().set('unitholderid', this.userselect.UnitholderId);
    let Params = new HttpParams();
    Params = Params.append('currentpage', "1");
    Params = Params.append('rowperpage', "999");
    var user;
    console.log(this.model);

    if (this.form.controls.fundtype.value != 0 && this.form.controls.fundname.value == 0) {
      this.form.controls.fundname.setErrors({ 'invalid': true });;
      this.loading = false;
    } else {
      if (this.form.controls.fundtype.value == "0" && !this.form.controls.startDate.value && !this.form.controls.endDate.value) {

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
      else if (this.form.controls.startDate.value && this.form.controls.fundtype.value == "0" && this.form.controls.endDate.value) {
        console.log("test3");
        user = {
          UnitholderID: this.userselect.UnitholderId,
          StartOrderDate: this.getstartdate(),
          EndOrderDate: this.getenddate()
        }

      }
      else if (this.form.controls.fundtype.value && this.form.controls.fundname.value && !this.form.controls.startDate.value && !this.form.controls.endDate.value) {
        console.log('test4');

        user = {
          UnitholderID: this.userselect.UnitholderId,
          FundID: this.form.controls.fundname.value.FundID
        }

      }
      else {
        console.log('test2');
        // console.log(this.fundname);

        user = {
          UnitholderID: this.userselect.UnitholderId,
          FundID: this.form.controls.fundname.value.FundID,
          StartOrderDate: this.getstartdate(),
          EndOrderDate: this.getenddate()
        }
      }
      console.log(user);

      this.reportservice.statementreport(user, Params)
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

    // this.Fundnamelist = [];
    this.statementreport = '';
    // this.model = {};
    this.statementlist = '';
    this.p = 1;
    this.loading = false;
    this.createFormValidate();
    this.getfundtypelist();
    // console.log(this.statementlist);

  }
  print() {
    window.focus();
    window.print();
  }
}
