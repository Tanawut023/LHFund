import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
@Component({
  selector: 'app-certificate-rmf',
  templateUrl: './certificate-rmf.component.html',
  styleUrls: ['./certificate-rmf.component.scss']
})
export class CertificateRmfComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('#mutual-tab-menu').find('li').removeClass('current');
    $('#mutual-tab-menu').find('li#menu3').addClass('current');
  }

}
