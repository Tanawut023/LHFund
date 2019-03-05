import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BaseApplicationDataService } from '../../service/base-application-data.service';
import { RmfLtfService } from '../../service/rmf-ltf.service'
import { first } from 'rxjs/operators';
import { HttpParams } from '@angular/common/http';
import { LanguageService } from '../../service/language.service';
import { Observable } from 'rxjs';
declare var $: any;
@Component({
  selector: 'app-ltf-condition-complete',
  templateUrl: './ltf-condition-complete.component.html',
  styleUrls: ['./ltf-condition-complete.component.scss']
})
export class LtfConditionCompleteComponent implements OnInit {
  userall: any = {};
  userselect: any = {};
  unitholderno: any = "init";
  orderltf: any = {};
  totalnav: any = 0;
  totalunit: any = 0;
  ltflist;
  nolist: boolean = false;
  lang: Observable<string>;


  constructor(
    private basedataservice: BaseApplicationDataService,
    private rmflmfservice: RmfLtfService,
    private langservice: LanguageService
  ) { }

  ngOnInit() {

    this.getSelectListUnitholder();

    $('#mutual-tab-menu').find('li').removeClass('current');
    $('#mutual-tab-menu').find('li#menu1').addClass('current');

    this.langservice.listen().subscribe((m: any) => {
      console.log(m);
      this.lang = m;
    })
  }
  onChange() {
    this.reset();

    for (let i = 0; i < this.userall.unitholderlist.length; i++) {
      if (this.userall.unitholderlist[i].UnitholderId == this.unitholderno.UnitholderId) {
        this.userselect = this.userall.unitholderlist[i];
      }
    }
    this.getorderltf();

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
          this.getorderltf();
        },
        error => {
          console.log(error)

        });
  }

  getorderltf() {
    this.nolist = false;
    let params = new HttpParams().set('unitholderid', this.userselect.UnitholderId);
    this.rmflmfservice.getorderltf(params)
      .pipe(first())
      .subscribe(
        data => {
          console.log(data);
          this.orderltf = data;

          if (this.orderltf.ltflist) {
            var SumRows = 0;
            var nav = 0;
            var unit = 0;
            var count = 0;
            var ltflist = new Array();
            var obj_sumlast = {
              nav: 0,
              unit: 0,
              islast: null,
              FundCode: null
            };
            // SumRows = this.rmfltfannual.orderltflist[i].Order.length;

            var count2 = 0;
            for (let y = 0; y < this.orderltf.ltflist.length; y++) {
              console.log('fory');
              var obj;
              var obj_sum = {
                nav: 0,
                unit: 0,
                islast: null,
                FundCode: null
              };
              if (obj) {
                console.log('obj');

                if (this.orderltf.ltflist[y].FundID !== obj.FundID) {
                  console.log(this.orderltf.ltflist[y].FundID + '-' + obj.FundID);

                  obj_sum.nav = nav;
                  obj_sum.unit = unit;
                  obj_sum.FundCode = obj.FundCode;
                  obj_sum.islast = true;
                  ltflist.push(obj_sum);

                  unit = 0;
                  nav = 0;
                  count = 0;

                  console.log(y);

                }
              }

              this.totalnav += parseFloat(this.orderltf.ltflist[y].NAV);
              this.totalunit += parseFloat(this.orderltf.ltflist[y].BalanceAmount);
              nav = nav + parseFloat(this.orderltf.ltflist[y].NAV);
              unit = unit + parseFloat(this.orderltf.ltflist[y].BalanceAmount);
              obj = this.orderltf.ltflist[y];

              if (count == 0) {
                if (this.orderltf.ltflist[y].FundID == obj.FundID) {
                  obj.FundNameGroup = this.orderltf.ltflist[y].FundName;
                  obj.FundNameEngGroup = this.orderltf.ltflist[y].FundNameEng;
                  obj.FundCodeGroup = this.orderltf.ltflist[y].FundCode;
                }
              }

              ltflist.push(obj);


              if ((y + 1) == this.orderltf.ltflist.length) {

                obj_sumlast.nav = nav;
                obj_sumlast.unit = unit;
                obj_sumlast.FundCode = obj.FundCode;
                obj_sumlast.islast = true;
                console.log('something');
              }

              // if (y == 9) {
              //   obj.nav = nav;
              //   obj.unit = unit;


              //   unit = 0;
              //   nav = 0;
              //   count = 0;
              //   SumRows = 0;


              // }

              count++;
            }


            ltflist.push(obj_sumlast);
            this.ltflist = ltflist;
            console.log(this.ltflist);
          } else {

            this.nolist = true;
            console.log('notlist');


          }


        },
        error => {
          console.log(error)

        });

  }
  reset() {
    this.orderltf = {};
  }
  print() {
    window.focus();
    window.print();
  }

}
