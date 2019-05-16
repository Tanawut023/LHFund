import { Component, OnInit } from '@angular/core';
import { BaseApplicationDataService } from '../../service/base-application-data.service';
import { first } from 'rxjs/operators';
import { HttpParams } from '@angular/common/http';
import { ReportService } from '../../service/report.service';
import { getDate } from '../../Share/dateformat';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { LanguageService } from '../../service/language.service';
declare var $: any;
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

    $('#mutual-tab-menu').find('li').removeClass('current');
    $('#mutual-tab-menu').find('li#menu4').addClass('current');

    var d = new Date();
    var endDate = new Date(d.getFullYear(), d.getMonth(), d.getDate() + 1);
    console.log(endDate);

    this.minDate = { year: endDate.getFullYear(), month: endDate.getMonth() + 1, day: endDate.getDate() };

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
    console.log(this.form);
    this.loading = true;
    this.nolist = false;
    let Params = new HttpParams();
    Params = Params.append('currentpage', "1");
    Params = Params.append('rowperpage', "999");
    var user;

    if (this.form.controls.fundtype.value != 0 && this.form.controls.fundname.value == 0) {
      this.form.controls.fundname.setErrors({ 'invalid': true });
      this.loading = false;
    } else {
      if (this.form.valid) {
        this.statementreport = [];
        if (this.form.controls.fundtype.value == 0 && this.form.controls.fundname.value == 0) {
          user = {
            UnitholderID: this.userselect.UnitholderId,
            FundID: this.form.controls.fundname.value,
            StartOrderDate: this.getstartdate(),
            EndOrderDate: this.getenddate()
          }
        } else {
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
              if(this.statementreport.statementreport.length == 0){
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
        this.loading = false;
        this.validateAllFormFields(this.form);
      }
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
        }
      }
    }
    this.statementlist = array;
    console.log(this.statementlist);
  }

  reset() {
    console.log('reset');
    this.statementreport = '';
    this.statementlist = [];
    this.p = 1;
    this.loading = false;
    this.createFormValidate();
    this.getfundtypelist();
    this.changefundtype();
  }
  
  print() {
    window.focus();
    window.print();
  }
}
