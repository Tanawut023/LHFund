import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BaseApplicationDataService } from '../../service/base-application-data.service';
import { first } from 'rxjs/operators';
import { HttpParams } from '@angular/common/http';
import { ReportService } from '../../service/report.service'
import { getDate } from '../../Share/dateformat';
import { log } from 'util';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { LanguageService } from '../../service/language.service';
declare var $: any;
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
  minDate;
  form: FormGroup;
  loading = false;
  nolist: boolean = false;
  lang: Observable<string>;

  constructor(
    private basedataservice: BaseApplicationDataService,
    private reportservice: ReportService,
    private fb: FormBuilder,
    private langservice: LanguageService

  ) { }

  ngOnInit() {

    this.createFormValidate();
    this.getSelectListUnitholder();
    this.getfundtypelist();

    this.langservice.listen().subscribe((m: any) => {
      console.log(m);
      this.lang = m;
    })


    $('#mutual-tab-menu').find('li').removeClass('current');
    $('#mutual-tab-menu').find('li#menu3').addClass('current');

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
      fundname: [0, Validators.required],
      startDate: [null, Validators.required],
      endDate: [null, Validators.required]

    })
  }
  isFieldNotValid(field: string) {
    return !this.form.get(field).valid && this.form.get(field).touched

  }

  ValidatorDisplayCss(field: string) {
    return {
      'has-danger': this.isFieldNotValid(field)
    };
  }
  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    })
  }
  changefundtype() {
    var id = this.form.controls.fundtype.value;
    let Params = new HttpParams();
    Params = Params.append('fundtypeid', id);
    Params = Params.append('unitholderid', this.userselect.UnitholderId);
    this.reportservice.changefundtype(Params)
      .pipe(first())
      .subscribe(
        data => {
          console.log(data);
          this.Fundnamelist = data['fundlist'];
          this.form.controls['fundname'].setValue(0, { onlySelf: true });
          setTimeout(() => {
            $('.selectpicker').selectpicker('refresh');
          }, 100);
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
          setTimeout(() => {
            $('.selectpicker').selectpicker('refresh');
          }, 100);
          console.log(data);
          this.userall = data;
          this.unitholderno = this.userall.unitholderlist[0];
          this.userselect = this.userall.unitholderlist[0];
          this.changefundtype();
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
    this.nolist = false;
    let Params = new HttpParams();
    Params = Params.append('currentpage', "1");
    Params = Params.append('rowperpage', "999");

    var user;
    console.log(this.form);

    if (this.form.controls.fundtype.value != 0 && this.form.controls.fundname.value == 0) {
      this.form.controls.fundname.setErrors({ 'invalid': true });
      this.loading = false;
    } else {
      if (this.form.valid) {
        this.dividendreport = [];

        if (this.form.controls.fundtype.value == 0 && this.form.controls.fundname.value == 0) {
          user = {
            UnitholderID: this.userselect.UnitholderId,
            FundTypeID: 0,
            FundCode: "",
            StartXDDate: this.getstartdate(),
            EndXDDate: this.getenddate(),
            TransactionDate: getDate()
          }
        } else {
          user = {
            UnitholderID: this.userselect.UnitholderId,
            FundTypeID: this.form.controls.fundtype.value,
            FundCode: this.form.controls.fundname.value.FundCode,
            StartXDDate: this.getstartdate(),
            EndXDDate: this.getenddate(),
            TransactionDate: getDate()
          }
        }


        console.log(user);
        this.reportservice.dividendreport(user, Params)
          .subscribe(
            data => {
              console.log(data);
              this.dividendreport = data;
              if (this.dividendreport.dividendreport.length == 0) {
                this.nolist = true;
                console.log('notlist');

              }
              this.calulatetable();
              this.loading = false;
            },
            error => {
              console.log(error)
              this.loading = false;
            });
      } else {
        this.validateAllFormFields(this.form);
        this.loading = false;
      }
    }





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
    this.dividendreport = '';
    this.reportlist = [];
    this.p = 1;
    this.createFormValidate();
    this.getfundtypelist();
    this.changefundtype();

  }
  print() {
    window.focus();
    window.print();
  }


}
