import { Component, OnInit } from '@angular/core';
import { BaseApplicationDataService } from '../../service/base-application-data.service';
import { first } from 'rxjs/operators';
import { HttpParams } from '@angular/common/http';
import { ReportService } from '../../service/report.service';
import { saveAs } from 'file-saver'
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

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
  nolist: boolean = false;
  minDate;
  confirmlist;
  formconfirm: FormGroup;
  constructor(
    private basedataservice: BaseApplicationDataService,
    private reportservice: ReportService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.createFormValidate();
    this.getSelectListUnitholder();

    $('#mutual-tab-menu').find('li').removeClass('current');
    $('#mutual-tab-menu').find('li#menu8').addClass('current');

    $('.selectpicker').selectpicker();

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
    this.formconfirm = this.fb.group({
      dateorder: [null,
        [
          Validators.required
        ]
      ]
    })
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

  isFieldNotValid(field: string) {
    return !this.formconfirm.get(field).valid && this.formconfirm.get(field).touched
  }

  ValidatorDisplayCss(field: string) {
    return {
      'has-danger': this.isFieldNotValid(field)
    };
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
        },
        error => {
          console.log(error)
        });
  }

  getEffectiveDate() {
    return this.model.year + "-" + this.model.month + "-" + this.model.day;
  }

  OnSubmitd() {
    this.confirmlist = [];
    this.loading = true;
    this.nolist = false;
    var user;
    console.log(this.model);
    console.log(this.formconfirm);
    if (this.formconfirm.valid) {
      user = {
        UnitholderID: this.userselect.UnitholderId,
        EffectiveDate: this.formconfirm.controls.dateorder.value.year + "-" + this.formconfirm.controls.dateorder.value.month + "-" + this.formconfirm.controls.dateorder.value.day
      }
      console.log(user);
      this.reportservice.confirmation(user)
        .subscribe(
          data => {
            console.log(data);
            this.confirmlist = data;
            if (this.confirmlist.length == 0) {
              this.nolist = true;
              console.log('notlist');
            }
            console.log(this.confirmlist.length);
            this.loading = false;
          },
          error => {
            console.log(error)
            this.loading = false;

          });
    } else {
      this.loading = false;
      this.validateAllFormFields(this.formconfirm);
    }
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
          $('#message').modal({
            backdrop: 'static',
            keyboard: false,
            show: true
          });
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

  print() {
    window.focus();
    window.print();
  }
}
