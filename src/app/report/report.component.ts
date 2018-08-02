import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
    selector: 'app-report',
    templateUrl: './report.component.html',
    styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
    
    constructor(private route: ActivatedRoute, private router: Router) { }

    ngOnInit() {
        $('#bottom-main-nav li').find('a').removeClass('current');
        $('#bottom-main-nav li#report').find('a').addClass('current');
    }

    navigate(target){
        var target = target;
        console.log(target);
        this.router.navigate([target], { relativeTo: this.route });
      }
}
