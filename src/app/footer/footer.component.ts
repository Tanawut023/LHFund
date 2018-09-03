import { Component, OnInit, HostListener } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: [],
})
export class FooterComponent implements OnInit {
  @HostListener("window:scroll", []) onWindowScroll() {
    this.scrollFunction();
  }
  constructor() {
    
   }

  ngOnInit() {
  }

  scrollFunction() {
    if ($(window).scrollTop() > 50) {
      $('.backtotop .totop').addClass('show');
  } else {
      $('.backtotop .totop').removeClass('show');
  }
}
uptotop(){
  // window.scroll(0,0);
  window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });

}


}
