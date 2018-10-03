import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  loggedIn = new BehaviorSubject<boolean>(false);
  public authTokenStale: string = 'stale_auth_token';
  public authTokenNew: string = 'new_auth_token';
  public currentToken: string;

  constructor(private http: HttpClient) {
    this.currentToken = this.authTokenStale;

  }
  isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
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
          this.loggedIn.next(true);
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
    const data = body.toString();

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    
    console.log('test '+data)
    return this.http.post<any>(environment.serverUrl + '/authorize', data, { headers: headers })
    // .pipe(map(user => {
    //   console.log(user)
    //   return user;
    // }));
  }


  logout() {
    // remove user from local storage to log user out
    localStorage.clear();
    this.loggedIn.next(false);

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
