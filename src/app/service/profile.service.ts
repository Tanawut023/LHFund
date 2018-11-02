import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  
  submitchangepassword(data){
    return this.http.post(environment.serverUrl + '/api/profile/submitchangepassword', data);
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
  getaddresslist(){
    return this.http.post(environment.serverUrl + '/api/profile/getaddresslist', null);
  }
  submiteditprofile(data){
    return this.http.post(environment.serverUrl + '/api/profile/submiteditprofile', data);
  }
  updateprofile(data,params){
    return this.http.post(environment.serverUrl + '/api/profile/updateprofile', data,{ params: params });
  }
  getaddressbyzipcode(params){
    return this.http.post(environment.serverUrl + '/api/profile/getaddressbyzipcode', null,{ params: params });
  }
  changetumbol(params){
    return this.http.post(environment.serverUrl + '/api/profile/changetumbol', null,{ params: params });
  }
  changeumpur(params){
    return this.http.post(environment.serverUrl + '/api/profile/changeumpur', null,{ params: params });
  }
  changeprovince(params){
    return this.http.post(environment.serverUrl + '/api/profile/changeprovince', null,{ params: params });
  }
  calculateriskprofile(data){
    return this.http.post(environment.serverUrl + '/api/riskprofile/calculateriskprofile', data);
  }
  submiteditriskprofile(){
    return this.http.post(environment.serverUrl + '/api/riskprofile/submiteditriskprofile', null);
  }
  saveriskprofile(data,params){
    return this.http.post(environment.serverUrl + '/api/riskprofile/saveriskprofile', data,{ params: params });
  }
  changeUnitholder(params){
    return this.http.post(environment.serverUrl + '/api/riskprofile/changeUnitholder', null,{ params: params });
  }
  
  
}
