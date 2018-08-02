import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certificate-ltf',
  templateUrl: './certificate-ltf.component.html',
  styleUrls: ['./certificate-ltf.component.scss']
})
export class CertificateLtfComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('#mutual-tab-menu').find('li').removeClass('current');
    $('#mutual-tab-menu').find('li#menu4').addClass('current');
  }

}
