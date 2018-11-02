import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BaseApplicationDataService } from '../../service/base-application-data.service';
import { RmfLtfService } from '../../service/rmf-ltf.service'
import { first } from 'rxjs/operators';
import { HttpParams } from '@angular/common/http';
@Component({
  selector: 'app-ltf-condition-complete',
  templateUrl: './ltf-condition-complete.component.html',
  styleUrls: ['./ltf-condition-complete.component.scss']
})
export class LtfConditionCompleteComponent implements OnInit {
  userall: any = {};
  userselect: any = {};
  unitholderno: any = "init";
  orderltf: any = {};

  constructor(
    private basedataservice: BaseApplicationDataService,
    private rmflmfservice: RmfLtfService
  ) { }

  ngOnInit() {

    this.getSelectListUnitholder();

    $('#mutual-tab-menu').find('li').removeClass('current');
    $('#mutual-tab-menu').find('li#menu1').addClass('current');
  }
  onChange() {
    this.reset();
    
    for (let i = 0; i < this.userall.unitholderlist.length; i++) {
      if (this.userall.unitholderlist[i].UnitholderId == this.unitholderno.UnitholderId) {
        this.userselect = this.userall.unitholderlist[i];
      }
    }
    this.getorderltf();
    
  }

  getSelectListUnitholder() {
    this.basedataservice.getSelectListUnitholder()
      .pipe(first())
      .subscribe(
        data => {
          this.userall = data;
          this.unitholderno = this.userall.unitholderlist[0];
          this.userselect = this.userall.unitholderlist[0];
          this.getorderltf();
        },
        error => {
          console.log(error)

        });
  }

  getorderltf(){
    let params = new HttpParams().set('unitholderid', this.userselect.UnitholderId);
    this.rmflmfservice.getorderltf(params)
      .pipe(first())
      .subscribe(
        data => {
          console.log(data);          
          this.orderltf = data;
        },
        error => {
          console.log(error)

        });

  }
  reset(){
    this.orderltf = {};
  }

}
