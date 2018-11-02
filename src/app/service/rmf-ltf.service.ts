import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RmfLtfService {

  constructor(private http: HttpClient) { }

  getorderltf(params){
    return this.http.post(environment.serverUrl + '/api/rmfltf/getorderltf', null,{ params: params });
  }
  getyearlist(){
    return this.http.post(environment.serverUrl + '/api/rmfltf/getyearlist', null);
  }
  getorderrmfltfannual(data){
    return this.http.post(environment.serverUrl + '/api/rmfltf/getorderrmfltfannual', data);
  }
  getcertificate(data){
    return this.http.post(environment.serverUrl + '/api/rmfltf/getcertificate', data);
  }
  downloadcertificate(data){
    return this.http.post(environment.serverUrl + '/api/rmfltf/downloadcertificate', data,{
      responseType : 'blob',
      headers:new HttpHeaders().append('Content-Type','application/json')
    });
  }
}
