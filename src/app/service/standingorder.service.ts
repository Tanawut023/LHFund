import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StandingorderService {

  constructor(private http: HttpClient) { }

  getstnadingorder(params){
    return this.http.post(environment.serverUrl + '/api/standingorder/getstnadingorder', null,{ params: params });
  }
  getstnadingorderlist(params){
    return this.http.post(environment.serverUrl + '/api/standingorder/getstnadingorderlist', null,{ params: params });
  }
  editstnadingorder(data){
    return this.http.post(environment.serverUrl + '/api/standingorder/editstnadingorder', data);
  }
  cancelstnadingorder(data){
    return this.http.post(environment.serverUrl + '/api/standingorder/cancelstnadingorder', data);
  }
  changeunitholder(params){
    return this.http.post(environment.serverUrl + '/api/standingorder/changeunitholder', null,{ params: params });
  }
  getfundlist(){
    return this.http.post(environment.serverUrl + '/api/standingorder/getfundlist', null);
  }
  changefund(data){
    return this.http.post(environment.serverUrl + '/api/standingorder/changefund', data);
  }
  submitstandingorder(data){
    return this.http.post(environment.serverUrl + '/api/standingorder/submitstandingorder', data);
  }
}