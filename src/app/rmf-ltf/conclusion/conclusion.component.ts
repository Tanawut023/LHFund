import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BaseApplicationDataService } from '../../service/base-application-data.service';
import { RmfLtfService } from '../../service/rmf-ltf.service'
import { first } from 'rxjs/operators';
import { HttpParams } from '@angular/common/http';
@Component({
  selector: 'app-conclusion',
  templateUrl: './conclusion.component.html',
  styleUrls: ['./conclusion.component.scss']
})
export class ConclusionComponent implements OnInit {
  userall: any = {};
  userselect: any = {};
  unitholderno: any = "init";
  yearlist: any;
  years;
  rmfltfannual;
  ltflist: any[];
  balanceltf: number = 0;
  balancermf: number = 0 ;
  rmflist: any[];

  constructor(
    private basedataservice: BaseApplicationDataService,
    private rmfltfservice: RmfLtfService
  ) { }

  ngOnInit() {

    this.getSelectListUnitholder();
    this.getyearlist();

    $('#mutual-tab-menu').find('li').removeClass('current');
    $('#mutual-tab-menu').find('li#menu2').addClass('current');
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
  getyearlist() {
    this.rmfltfservice.getyearlist()
      .pipe(first())
      .subscribe(
        data => {
          console.log(data);
          this.yearlist = data['yearlist'];
          this.years = this.yearlist[0];
        },
        error => {
          console.log(error)

        });
  }
  Onclick(){

    const user = {
      UnitholderID: this.userselect.UnitholderId,
      Year: '2016'
    }
    this.rmfltfservice.getorderrmfltfannual(user)
    .pipe(first())
      .subscribe(
        data => {
          console.log(data);
          this.rmfltfannual = data;
          this.format();
        },
        error => {
          console.log(error)

        });
  }
  format(){
    var rmflist = new Array();
    var ltflist = new Array();

    console.log('test');
    
    var iRows = 1;
    var SumRows = 0;
    var balanceltf = 0;
    var balancermf = 0;
    for (let i = 0; i < this.rmfltfannual.orderltflist.length; i++) {
      console.log('fori');
      
      var unit = 0;
      var amount = 0;
      var count2 = 0;
      var count = 0;
      SumRows = this.rmfltfannual.orderltflist[i].Order.length;

      for (let y = 0; y < this.rmfltfannual.orderltflist[i].Order.length; y++) {
        console.log('fory');
        var obj;

        balanceltf += parseFloat(this.rmfltfannual.orderltflist[i].Order[y].AllotedAmount);
        unit += parseFloat(this.rmfltfannual.orderltflist[i].Order[y].AllotedUnit);
        amount += parseFloat(this.rmfltfannual.orderltflist[i].Order[y].AllotedAmount);
        obj = this.rmfltfannual.orderltflist[i].Order[y];

        if (count == 0 || count2 == 0) {
          
            obj.FundNameGroup = this.rmfltfannual.orderltflist[i].FundName;
            obj.FundNameEngGroup = this.rmfltfannual.orderltflist[i].FundNameEng;
          
        }
        if ((y+1) == SumRows) {
          obj.unit = unit;
          obj.amount = amount;


          unit = 0;
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
      
      var unit = 0;
      var amount = 0;
      var count2 = 0;
      var count = 0;
      SumRows = this.rmfltfannual.orderrmflist[i].Order.length;

      for (let y = 0; y < this.rmfltfannual.orderrmflist[i].Order.length; y++) {
        console.log('fory');
        var obj;

        balancermf += parseFloat(this.rmfltfannual.orderrmflist[i].Order[y].AllotedAmount);
        unit += parseFloat(this.rmfltfannual.orderrmflist[i].Order[y].AllotedUnit);
        amount += parseFloat(this.rmfltfannual.orderrmflist[i].Order[y].AllotedAmount);
        obj = this.rmfltfannual.orderrmflist[i].Order[y];

        if (count == 0 || count2 == 0) {
          
            obj.FundNameGroup = this.rmfltfannual.orderrmflist[i].FundName;
            obj.FundNameEngGroup = this.rmfltfannual.orderrmflist[i].FundNameEng;
          
        }
        if ((y+1) == SumRows) {
          obj.unit = unit;
          obj.amount = amount;

          
          unit = 0;
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

}
