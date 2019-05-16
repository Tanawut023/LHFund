import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { datethai, dateeng } from '../Share/dateformat'
import { TranslateService } from '@ngx-translate/core';
import { BaseApplicationDataService } from '../service/base-application-data.service'
import { first, count } from 'rxjs/operators';
import { async } from 'rxjs/internal/scheduler/async';
import { HttpParams } from '@angular/common/http';
import { MyportService } from '../service/myport.service'
import { Chart } from 'angular-highcharts';
import { Observable } from 'rxjs';
import { LanguageService } from '../service/language.service';
declare var $: any;
@Component({
    selector: 'app-myport',
    templateUrl: './myport.component.html',
    styleUrls: ['./myport.component.scss',]
})
export class MyportComponent implements OnInit {

    page = "dashboard";
    dateformat = datethai;
    dateformatEng = dateeng;
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
    lang: Observable<string>;


    constructor(
        private translate: TranslateService,
        private basedataservice: BaseApplicationDataService,
        private myportservice: MyportService,
        private langservice: LanguageService
    ) {
        translate.addLangs(["th", "en"]);

    }

    ngOnInit() {
        this.getSelectListUnitholder();

        $('#bottom-main-nav li').find('a').removeClass('current');
        $('#bottom-main-nav li#myport').find('a').addClass('current');

        this.langservice.listen().subscribe((m: any) => {
            console.log(m);
            this.lang = m;
        })

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
                    console.log(data);
                    setTimeout(() => {
                        $('.selectpicker').selectpicker('refresh');
                    }, 100);
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
        if (this.balancedetail.holdingbalance) {
            for (let i = 0; i < this.balancedetail.holdingbalance.length; i++) {

                this.NAV += parseFloat(this.balancedetail.holdingbalance[i].BalanceAmountTotal);
                this.ProfitLoss += parseFloat(this.balancedetail.holdingbalance[i].GainLossTotal);
            }
        }


    }
    calchart() {
        var array = new Array();
        var arr = ["#ED2B34", "#00698C", "#189D8C", "#E99C92", "#EFE5E4", "#D5DF30", "#7B99CF"];

        if (this.balancedetail.holdingbalance) {
            for (let i = 0; i < this.balancedetail.holdingbalance.length; i++) {
                var percent = 0;
                percent = (this.balancedetail.holdingbalance[i].BalanceAmountTotal * 100) / this.NAV;
                array.push({ name: this.balancedetail.holdingbalance[i].FundTypeEng, y: percent, color: arr[i] });
            }
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
    generatechart() {
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
