import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { BaseApplicationDataService } from '../service/base-application-data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, AfterViewInit {
  userdetail: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private translate: TranslateService,
    private basedataservice: BaseApplicationDataService,
  ) {
    translate.addLangs(["th", "en"]);
  }

  ngOnInit() {

    $('#bottom-main-nav li').find('a').removeClass('current');
    $('#bottom-main-nav li#profile').find('a').addClass('current');

    this.userdetail = this.basedataservice.getmemberInfo();
    
    console.log(this.userdetail);

  }
  ngAfterViewInit() {
    if(this.userdetail.MemberType == 'Agent'){
      $('#mutual-tab-menu').find('li').removeClass('current');
      $('#mutual-tab-menu').find('li#menu3').addClass('current');
    }
  }
  navigate(target) {
    var target = target;
    console.log(target);
    this.router.navigate([target], { relativeTo: this.route });
  }
}
