import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  
  submitchangepassword(){
    return this.http.post(environment.serverUrl + '/api/profile/submitchangepassword', null);
  }
  updatepassword(data,params){
    return this.http.post(environment.serverUrl + '/api/profile/updatepassword', data,{ params: params });
  }
  getprofileinfo(params){
    return this.http.post(environment.serverUrl + '/api/profile/getprofileinfo', null,{ params: params });
  }
  getriskprofile(params){
    return this.http.post(environment.serverUrl + '/api/riskprofile/changeUnitholder', null,{ params: params });
  }
  getrisksuitest(params){
    return this.http.post(environment.serverUrl + '/api/riskprofile/editriskprofile', null,{ params: params });
  }
  
}
