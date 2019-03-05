import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BaseApplicationDataService } from '../../service/base-application-data.service';
import { RmfLtfService } from '../../service/rmf-ltf.service'
import { first } from 'rxjs/operators';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LanguageService } from '../../service/language.service';
declare var $: any;
@Component({
  selector: 'app-conclusion',
  templateUrl: './conclusion.component.html',
  styleUrls: ['./conclusion.component.scss']
})
export class ConclusionComponent implements OnInit {
  userall: any = {};
  userselect: any = {};
  unitholderno: any = "init";
  years;
  rmfltfannual;
  ltflist: any[];
  balanceltf: number = 0;
  balancermf: number = 0;
  rmflist: any[];
  Year;
  nolist: boolean = false;
  lang: Observable<string>;
  loading = false;

  constructor(
    private basedataservice: BaseApplicationDataService,
    private rmfltfservice: RmfLtfService,
    private langservice: LanguageService
  ) { }

  ngOnInit() {

    this.getSelectListUnitholder();

    $('#mutual-tab-menu').find('li').removeClass('current');
    $('#mutual-tab-menu').find('li#menu2').addClass('current');

    var d = new Date();

    var array = new Array();
    for (var i = (d.getFullYear()); i >= 2011; i--) {
      array.push(i);
    }
    this.Year = array;
    console.log(this.Year);

    this.years = d.getFullYear();

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
  Onclick() {
    this.loading = true;
    this.nolist = false;
    const user = {
      UnitholderID: this.userselect.UnitholderId,
      Year: this.years
    }
    this.rmfltfservice.getorderrmfltfannual(user)
      .pipe(first())
      .subscribe(
        data => {
          console.log(data);
          this.loading = false;
          this.rmfltfannual = data;
          if(this.rmfltfannual.orderltflist.length == 0 && this.rmfltfannual.orderrmflist.length == 0){
            this.nolist = true;
            console.log('notlist');
            
          }
          this.format();
        },
        error => {
          console.log(error)
          this.loading = false;

        });
  }
  format() {
    var rmflist = new Array();
    var ltflist = new Array();

    console.log('test');

    var iRows = 1;
    var SumRows = 0;
    var balanceltf = 0;
    var balancermf = 0;
    for (let i = 0; i < this.rmfltfannual.orderltflist.length; i++) {
      console.log('fori');

      var nav = 0;
      var unit = 0;
      var amount = 0;
      var count2 = 0;
      var count = 0;
      SumRows = this.rmfltfannual.orderltflist[i].Order.length;

      for (let y = 0; y < this.rmfltfannual.orderltflist[i].Order.length; y++) {
        console.log('fory');
        var obj;

        balanceltf += parseFloat(this.rmfltfannual.orderltflist[i].Order[y].AllotedAmount);
        nav += parseFloat(this.rmfltfannual.orderltflist[i].Order[y].AllotedNAV);
        unit += parseFloat(this.rmfltfannual.orderltflist[i].Order[y].AllotedUnit);
        amount += parseFloat(this.rmfltfannual.orderltflist[i].Order[y].AllotedAmount);
        obj = this.rmfltfannual.orderltflist[i].Order[y];

        if (count == 0 || count2 == 0) {
          if (this.rmfltfannual.orderltflist[i].FundID == obj.FundID) {
            obj.FundName2 = obj.FundName;
            obj.FundNameGroup = this.rmfltfannual.orderltflist[i].FundName;
            obj.FundNameEngGroup = this.rmfltfannual.orderltflist[i].FundNameEng;
          }



        }
        if ((y + 1) == SumRows || y == 9) {
          obj.nav = nav;
          obj.unit = unit;
          obj.amount = amount;


          unit = 0;
          nav = 0;
          amount = 0;
        }
        ltflist.push(obj);
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

    for (let i = 0; i < this.rmfltfannual.orderrmflist.length; i++) {
      console.log('fori');

      var nav = 0;
      var unit = 0;
      var amount = 0;
      var count2 = 0;
      var count = 0;
      SumRows = this.rmfltfannual.orderrmflist[i].Order.length;

      for (let y = 0; y < this.rmfltfannual.orderrmflist[i].Order.length; y++) {
        console.log('fory');
        var obj;

        balancermf += parseFloat(this.rmfltfannual.orderrmflist[i].Order[y].AllotedAmount);
        nav += parseFloat(this.rmfltfannual.orderrmflist[i].Order[y].AllotedNAV);
        unit += parseFloat(this.rmfltfannual.orderrmflist[i].Order[y].AllotedUnit);
        amount += parseFloat(this.rmfltfannual.orderrmflist[i].Order[y].AllotedAmount);
        obj = this.rmfltfannual.orderrmflist[i].Order[y];

        if (count == 0 || count2 == 0) {
          if (this.rmfltfannual.orderrmflist[i].FundID == obj.FundID) {
            obj.FundName2 = obj.FundName;
            obj.FundNameGroup = this.rmfltfannual.orderrmflist[i].FundName;
            obj.FundNameEngGroup = this.rmfltfannual.orderrmflist[i].FundNameEng;
          }

        }
        if ((y + 1) == SumRows || y== 9) {
          obj.nav = nav;
          obj.unit = unit;
          obj.amount = amount;


          unit = 0;
          nav = 0;
          amount = 0;
        }
        rmflist.push(obj);
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
    this.balanceltf = balanceltf;
    this.balancermf = balancermf;
    this.ltflist = ltflist;
    this.rmflist = rmflist;
    // console.log(this.caltable);
    console.log(this.ltflist);
    console.log(this.balanceltf);

  }
  print() {
    window.focus();
    window.print();
}

}
