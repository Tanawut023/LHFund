import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class BaseApplicationDataService {
  userDetails: Object;

  constructor(private http: HttpClient) { }

  getCurrentUser() {
    this.userDetails = JSON.parse(localStorage.getItem('currentUser'));
    return this.userDetails;
  }
  getSelectListUnitholder(){
    return this.http.post(environment.serverUrl + '/api/profile/getSelectListItemUnitholder', null);
  }
  getUnitholder(params){
    return this.http.post(environment.serverUrl + '/api/profile/getProfileInfo', null ,{ params: params });
  }
  getUnitholderSubscription(params){
    return this.http.post(environment.serverUrl + '/api/order/getUnitholderSubscription', null ,{ params: params });
  }


}
