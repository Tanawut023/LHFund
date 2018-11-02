import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';
import { Router } from '@angular/router';
import {AuthGuard} from './auth.guard'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public authTokenStale: string = 'stale_auth_token';
  public authTokenNew: string = 'new_auth_token';
  public currentToken: string;

  constructor(private http: HttpClient,
    private router: Router) {
    this.currentToken = this.authTokenStale;

  }

  login(data) {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    return this.http.post<any>(environment.serverUrl + '/authorize', data, { headers: headers })
      .pipe(map(user => {
        // console.log(user)
        // login successful if there's a jwt token in the response
        if (user) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
          // localStorage.setItem('userInfo',  user['userInfo']);
        }
        return user;
      }));
  }

  getRefreshToken() {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    return currentUser.refresh_token;
  }
  getAuthToken() {
    return localStorage.getItem('currentUser.access_token');
  }
  refreshToken(): Observable<any> {
    let body = new URLSearchParams();

    body.set('grant_type', 'refresh_token');
    body.set('refresh_token', this.getRefreshToken());
    body.set('client_id', 'WebApp');
    const data = body.toString();

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    
    console.log('test '+data)
    return this.http.post<any>(environment.serverUrl + '/authorize', data, { headers: headers })
    .pipe(map(user => {
      if (user) {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(user));
      }
      return user;
    }));
  }


  logout() {
    // remove user from local storage to log user out
    // this.loggedIn.next(false);
    localStorage.removeItem('currentUser');
    localStorage.removeItem('userInfo');

  }

  validateMember(data) {
    return this.http.post<any>(environment.serverUrl + '/api/member/validatemember', data);
  }
  validateUserName(data, params) {
    return this.http.post(environment.serverUrl + '/api/member/validateusername', data, { params: params });
  }
  requestOTP(params) {
    return this.http.post(environment.serverUrl + '/api/member/requestotpmember', null, { params: params });
  }
  OTPRegister(data, params) {
    return this.http.post(environment.serverUrl + '/api/member/otpregister', data, { params: params });
  }
  validateForgotPassword(data) {
    return this.http.post(environment.serverUrl + '/api/member/validateforgotpassword', data);
  }
  validateActivateCode(params) {
    return this.http.post(environment.serverUrl + '/api/member/validateactivatecode', null, { params: params });
  }
  confirmForgotPassword(data, params) {
    return this.http.post(environment.serverUrl + '/api/member/confirmforgotpassword', data, { params: params });
  }
  OTPForgotPassword(data, params) {
    return this.http.post(environment.serverUrl + '/api/member/otpforgotpassword', data, { params: params });
  }
}
