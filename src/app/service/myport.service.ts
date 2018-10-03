import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class MyportService {

  constructor(private http: HttpClient) { }
  getbalance(params){
    return this.http.post(environment.serverUrl + '/api/portfolio/getbalance', null,{ params: params });
  }
}
