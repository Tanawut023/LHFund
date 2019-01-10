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
  
  changefundsubscription(data){
    return this.http.post(environment.serverUrl + '/api/order/changefundsubscription', data);
  }

  changefundredemption(data){
    return this.http.post(environment.serverUrl + '/api/order/changefundredemption', data);
  }

  changefundswitchingsource(data){
    return this.http.post(environment.serverUrl + '/api/order/changefundswitchingsource', data);
  }

  changefundswitchingdestination(data){
    return this.http.post(environment.serverUrl + '/api/order/changefundswitchingdestination', data);
  }
  submitorder(data){
    return this.http.post(environment.serverUrl + '/api/order/submitorder', data);
  }
  confirmorder(data){
    return this.http.post(environment.serverUrl + '/api/order/confirmorder', data);
  }
  cancelorder(data){
    return this.http.post(environment.serverUrl + '/api/order/cancelorder', data);
  }
  getorderinfolist(data){
    return this.http.post(environment.serverUrl + '/api/order/getorderinfolist', data);
  }

}
