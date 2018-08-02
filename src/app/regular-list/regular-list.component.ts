import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-regular-list',
  templateUrl: './regular-list.component.html',
  styleUrls: ['./regular-list.component.scss']
})
export class RegularListComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) { }

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
