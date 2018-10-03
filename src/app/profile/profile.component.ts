import { Component, OnInit , AfterViewInit} from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, AfterViewInit{

  constructor(private route: ActivatedRoute, private router: Router,private translate: TranslateService) {
    translate.addLangs(["th", "en"]);
   }

  ngOnInit() {
    
    $('#bottom-main-nav li').find('a').removeClass('current');
    $('#bottom-main-nav li#profile').find('a').addClass('current');

    
  }
  ngAfterViewInit(){
  }
  navigate(target){
    var target = target;
    console.log(target);
    this.router.navigate([target], { relativeTo: this.route });
  }
}