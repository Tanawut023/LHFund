import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../service/language.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-footerforwarning',
  templateUrl: './footerforwarning.component.html',
  styleUrls: ['./footerforwarning.component.scss']
})
export class FooterforwarningComponent implements OnInit {
  lang: Observable<string>;

  constructor(
    private langservice: LanguageService
  ) { }

  ngOnInit() {
    this.langservice.listen().subscribe((m: any) => {
      console.log(m);
      this.lang = m;
  })
  }

}
