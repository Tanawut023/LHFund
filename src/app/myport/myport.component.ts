import { Component, OnInit } from '@angular/core';
// import { Highcharts } from 'highcharts';
import { Chart } from 'angular-highcharts';

@Component({
    selector: 'app-myport',
    templateUrl: './myport.component.html',
    styleUrls: ['./myport.component.scss',]
})
export class MyportComponent implements OnInit {

    Highcharts: any;
    chart: any;
    page = "dashboard";

    constructor() { }

    ngOnInit() {

        $('#bottom-main-nav li').find('a').removeClass('current');
        $('#bottom-main-nav li#myport').find('a').addClass('current');

        this.chart = new Chart({
            chart: {
                type: 'pie',
            },
            legend: {
                align: 'right',
                verticalAlign:'middle',
                width: 200,
                itemWidth: 100,
                y: -50,
                x: -50
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
    checkpage(page) {
        console.log(page)

        switch (page) {
            case 'suitability':
                this.page = "suitability";
                break;
            case 'suitability-score':
                this.page = "suitability-score";
                break;
            case 'otp':
                this.page = "otp";
                break;
            case 'signup1':
                this.page = "signup1";
                break;
            case 'signup2':
                this.page = "signup2";
                break;
            default:

                this.page = "dashboard";
                console.log(this.page)
                break;
        }


    }
}
