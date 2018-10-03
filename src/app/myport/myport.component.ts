import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { datethai } from '../Share/dateformat'
import { TranslateService } from '@ngx-translate/core';
import { BaseApplicationDataService } from '../service/base-application-data.service'
import { first, count } from 'rxjs/operators';
import { async } from 'rxjs/internal/scheduler/async';
import { HttpParams } from '@angular/common/http';
import { MyportService } from '../service/myport.service'
import { Chart } from 'angular-highcharts';
@Component({
    selector: 'app-myport',
    templateUrl: './myport.component.html',
    styleUrls: ['./myport.component.scss',]
})
export class MyportComponent implements OnInit {
    
    page = "dashboard";
    dateformat = datethai;
    userall: any = {};
    userselect: any = {};
    unitholderno: any = "init";
    unitholder: any = 0;
    balancedetail: any = {};
    NAV = 0;
    ProfitLoss = 0;
    useralluniholder: Object;
    allunit: boolean = false;
    chart: any;
    chartdetail: any;


    constructor(
        private translate: TranslateService,
        private basedataservice: BaseApplicationDataService,
        private myportservice: MyportService
    ) {
        translate.addLangs(["th", "en"]);

    }

    ngOnInit() {
        this.getSelectListUnitholder();

        $('#bottom-main-nav li').find('a').removeClass('current');
        $('#bottom-main-nav li#myport').find('a').addClass('current');       

    }
    onChange(indexs) {

        this.reset();

        if (indexs == 0) {
            this.getCurrentUser();
        }

        else {
            for (let i = 0; i < this.userall.unitholderlist.length; i++) {
                if (this.userall.unitholderlist[i].UnitholderId == indexs) {
                    this.userselect = this.userall.unitholderlist[i];
                }
            }

        }
        this.unitholder = indexs;
        this.getbalance();



    }
    print() {
        window.focus();
        window.print();
    }

    getSelectListUnitholder() {
        this.basedataservice.getSelectListUnitholder()
            .pipe(first())
            .subscribe(
                data => {
                    this.userall = data;
                    this.unitholderno = this.userall.unitholderlist[0];
                    this.getbalance();
                    if (this.userall.unitholderlist.length > 1) {
                        this.allunit = true;
                        this.getCurrentUser();
                    } else {
                        this.userselect = this.userall.unitholderlist[0];
                    }
                },
                error => {
                    console.log(error)

                });
    }

    getbalance() {
        let params = new HttpParams().set('unitholderid', this.unitholder);
        this.myportservice.getbalance(params)
            .subscribe(
                (data) => {
                    console.log(data);
                    this.balancedetail = data;
                    this.calTotal();
                    this.calchart();
                    this.generatechart();
                },
                (error) => {
                    console.log(error);
                }
            )
    }
    calTotal() {

        for (let i = 0; i < this.balancedetail.holdingbalance.length; i++) {
            
            this.NAV += parseFloat(this.balancedetail.holdingbalance[i].BalanceAmountTotal);
            this.ProfitLoss += parseFloat(this.balancedetail.holdingbalance[i].GainLossTotal);
            
        }

    }
    calchart(){
        var array = new Array();

        for (let i = 0; i < this.balancedetail.holdingbalance.length; i++) {
            var percent = 0;
            percent = (this.balancedetail.holdingbalance[i].BalanceAmountTotal * 100) / this.NAV;
            array.push({name: this.balancedetail.holdingbalance[i].FundTypeEng ,y: percent,color: this.balancedetail.holdingbalance[i].FundTypeColor});
        }
        this.chartdetail = array;
        console.log(this.chartdetail);
    }
    getCurrentUser() {
        this.useralluniholder = this.basedataservice.getmemberInfo()
    }
    reset() {
        this.NAV = 0;
        this.ProfitLoss = 0;
        this.useralluniholder = {};
        this.userselect = {};

    }
    generatechart(){
        this.chart = new Chart({
            chart: {
                type: 'pie'
                
            },
            title: {
                text: ''
            },
            credits: {
                enabled: false
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                        style: {
                            // color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                        }
                    },
                    showInLegend: true
                }
            },
            series: [{
                // colorByPoint: true,
                data: this.chartdetail
            }]
        });

    }
    
    
}
