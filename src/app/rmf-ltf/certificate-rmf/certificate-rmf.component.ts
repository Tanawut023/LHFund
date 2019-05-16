import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BaseApplicationDataService } from '../../service/base-application-data.service';
import { first } from 'rxjs/operators';
import { HttpParams } from '@angular/common/http';
import { RmfLtfService } from '../../service/rmf-ltf.service';
import { saveAs } from 'file-saver'

declare var $: any;
@Component({
  selector: 'app-certificate-rmf',
  templateUrl: './certificate-rmf.component.html',
  styleUrls: ['./certificate-rmf.component.scss']
})
export class CertificateRmfComponent implements OnInit {
  userall: any = {};
  userselect: any = {};
  unitholderno: any = "init";
  yearlist: any;
  years;
  loading: boolean;
  rmffilelist: any;
  nolist: boolean = false;

  constructor(
    private basedataservice: BaseApplicationDataService,
    private rmfltfservice: RmfLtfService
  ) { }

  ngOnInit() {

    this.getSelectListUnitholder();
    this.getyearlist();

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

  getyearlist() {
    this.rmfltfservice.getyearlist()
      .pipe(first())
      .subscribe(
        data => {
          console.log(data);
          setTimeout(() => {
            $('.selectpicker').selectpicker('refresh');
        }, 100);
          this.yearlist = data['yearlist'];
          this.years = this.yearlist[0];
        },
        error => {
          console.log(error)
        });
  }

  OnSubmit() {
    this.nolist = false;
    this.loading = true;
    var user;
    user = {
      UnitholderID: this.userselect.UnitholderId,
      CertificateType: 'RMF',
      Year: this.years
    }
    console.log(user);

    this.rmfltfservice.getcertificate(user)
      .subscribe(
        data => {
          console.log(data);
          this.rmffilelist = data;
          if(this.rmffilelist.filenamelist.length == 0){
            this.nolist = true;
            console.log('notlist');
          }
          this.loading = false;
        },
        error => {
          console.log(error)
          this.loading = false;
          $('#message2').modal({
            backdrop: 'static',
            keyboard: false,
            show: true
          });
        });
  }

  download(arr) {
    this.loading = true;
    var i = arr;
    var filename = this.rmffilelist.filenamelist[i];
    var user = {
      UnitholderID: this.userselect.UnitholderId,
      CertificateType: 'RMF',
      Year: this.years,
      FileName: filename
    }
    console.log(user);
    if (user instanceof HttpParams) {
      return 'application/x-www-form-urlencoded;charset=UTF-8';
    }

    this.rmfltfservice.downloadcertificate(user)
      .subscribe(
        data => {
          console.log(data);
          saveAs(data, filename);
          this.loading = false;
        },
        error => {
          console.log(error)
          $('#message').modal({
            backdrop: 'static',
            keyboard: false,
            show: true
          });
          this.loading = false;
        });

  }
  
  print() {
    window.focus();
    window.print();
  }

}
