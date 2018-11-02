import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http: HttpClient) { }
  
  getfundtypelist(){
    return this.http.post(environment.serverUrl + '/api/report/getfundtypelist', null);
  }
  changefundtype(params){
    return this.http.post(environment.serverUrl + '/api/report/changefundtype', null,{ params: params });
  }
  dividendreport(data,params){
    return this.http.post(environment.serverUrl + '/api/report/dividendreport', data,{ params: params });
  }
  statementreport(data,params){
    return this.http.post(environment.serverUrl + '/api/report/statementreport', data,{ params: params });
  }
  todayreport(params){
    return this.http.post(environment.serverUrl + '/api/report/todayreport', null,{ params: params });
  }
  unallocatedreport(params){
    return this.http.post(environment.serverUrl + '/api/report/unallocatedreport', null,{ params: params });
  }
  confirmation(data){
    return this.http.post(environment.serverUrl + '/api/report/confirmationreport', data);
  }
  confirmationdownload(data){
    return this.http.post(environment.serverUrl + '/api/report/confirmationdownload', data,{
      responseType : 'blob',
      headers:new HttpHeaders().append('Content-Type','application/json')
  });
  }
}