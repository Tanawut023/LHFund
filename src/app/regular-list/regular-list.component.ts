import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-regular-list',
  templateUrl: './regular-list.component.html',
  styleUrls: ['./regular-list.component.scss']
})
export class RegularListComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router,private translate: TranslateService) {
    translate.addLangs(["th", "en"]);
   }

  ngOnInit() {
    $('#bottom-main-nav li').find('a').removeClass('current');
    $('#bottom-main-nav li#regular-list').find('a').addClass('current');
  }
navigate(target){
    var target = target;
    console.log(target);
    this.router.navigate([target], { relativeTo: this.route });
  }

}
