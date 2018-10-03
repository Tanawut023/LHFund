import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class BaseApplicationDataService {
  userDetails: Object;
  memberInfo;

  constructor(private http: HttpClient) { }

  getCurrentUser() {
    this.userDetails = JSON.parse(localStorage.getItem('currentUser'));
    return this.userDetails;
  }
  getmemberInfo(){
    this.memberInfo = JSON.parse(localStorage.getItem('userInfo'));
    return this.memberInfo;
  }
  getSelectListUnitholder(){
    return this.http.post(environment.serverUrl + '/api/profile/getunitholderlist', null);
  }
  getUnitholder(params){
    return this.http.post(environment.serverUrl + '/api/profile/getProfileInfo', null ,{ params: params });
  }
  getUnitholderSubscription(params){
    return this.http.post(environment.serverUrl + '/api/order/getUnitholderSubscription', null ,{ params: params });
  }
  requestotp(){
    return this.http.post(environment.serverUrl + '/api/application/requestotp', null);
  }


}
