import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { datethai } from '../Share/dateformat'
import { TranslateService } from '@ngx-translate/core';
import { BaseApplicationDataService } from '../service/base-application-data.service'
import { first, count } from 'rxjs/operators';
import { async } from 'rxjs/internal/scheduler/async';
import { HttpParams } from '@angular/common/http';
@Component({
    selector: 'app-myport',
    templateUrl: './myport.component.html',
    styleUrls: ['./myport.component.scss',]
})
export class MyportComponent implements OnInit {

    Highcharts: any;
    chart: any;
    page = "dashboard";
    dateformat = datethai;
    userall: any = {};
    userselect: any = {};
    unitholderno: any = "init";
    // userinfo: any = {};


    constructor(
        private translate: TranslateService,
        private basedataservice: BaseApplicationDataService
    ) {
        translate.addLangs(["th", "en"]);

    }

    ngOnInit() {

        this.basedataservice.getSelectListUnitholder()
            .pipe(first())
            .subscribe(
                data => {
                    this.userall = data;
                    this.unitholderno = this.userall.unitholderlist[0];
                    this.userselect = this.userall;
                },
                error => {
                    console.log(error)

                });

        $('#bottom-main-nav li').find('a').removeClass('current');
        $('#bottom-main-nav li#myport').find('a').addClass('current');

        this.chart = new Chart({
            chart: {
                type: 'pie',
            },
            // legend: {
            //     align: 'right',
            //     verticalAlign:'middle',
            //     width: 200,
            //     itemWidth: 100,
            //     y: 0,
            //     x: 0
            // },
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
                name: 'Name',
                // colorByPoint: true,
                data: [{
                    name: 'Fixed Income',
                    y: 39.14
                }, {
                    name: 'Money Market',
                    y: 39.14
                }, {
                    name: 'Mixed',
                    y: 10.34
                }, {
                    name: 'Fund of Property Fund',
                    y: 10.34
                }, {
                    name: 'Equity',
                    y: 10.34
                }, {
                    name: 'Foreign Investment Fund',
                    y: 7.80
                }, {
                    name: 'Retirement Mutual Fund',
                    y: 1.59
                }, {
                    name: 'Long Term Equity Fund',
                    y: 0.71
                }
                ]
            }]
        });

    }
    onChange() {
        
        let params = new HttpParams().set('unitholderid', this.unitholderno.Value);
        this.basedataservice.getUnitholder(params)
            .pipe(first())
            .subscribe(
                data => {
                    // console.log(data)
                    this.userselect = data;

                },
                error => {
                    console.log(error)

                });
    }
    print() {
        window.focus();
        window.print();
    }
}
