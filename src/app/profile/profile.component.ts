import { Component, OnInit , AfterViewInit} from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, AfterViewInit{

  constructor(private route: ActivatedRoute, private router: Router) { }

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
