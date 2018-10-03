import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  changeunitholdersubscription(params){
    return this.http.post(environment.serverUrl + '/api/order/changeunitholdersubscription', null,{ params: params });
  }

  changeunitholderredemption(params){
    return this.http.post(environment.serverUrl + '/api/order/changeunitholderredemption', null,{ params: params });
  }

  changeunitholderswitching(params){
    return this.http.post(environment.serverUrl + '/api/order/changeunitholderswitching', null,{ params: params });
  }

}
