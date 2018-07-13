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
                    }
                }
            },
            series: [{
                name: 'Brands',
                // colorByPoint: true,
                data: [{
                    name: 'Chrome',
                    y: 61.41,
                    sliced: true,
                    selected: true
                }, {
                    name: 'Internet Explorer',
                    y: 11.84
                }, {
                    name: 'Firefox',
                    y: 10.85
                }, {
                    name: 'Edge',
                    y: 4.67
                }, {
                    name: 'Safari',
                    y: 4.18
                }, {
                    name: 'Sogou Explorer',
                    y: 1.64
                }, {
                    name: 'Opera',
                    y: 1.6
                }, {
                    name: 'QQ',
                    y: 1.2
                }, {
                    name: 'Other',
                    y: 2.61
                }]
            }]
        });

    }
    checkpage(page) {
        console.log(page)

        switch (page) {
            case 'suitability':
                this.page = "suitability";
                break;
            case 'dashboard':
                this.page = "dashboard";
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
