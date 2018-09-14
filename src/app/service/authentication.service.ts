import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  loggedIn = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {

  }
  isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  login(data) {
    return this.http.post<any>(environment.serverUrl + '/api/member/login', data)
      .pipe(map(user => {
        // console.log(user)
        // login successful if there's a jwt token in the response
        if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.loggedIn.next(true);
        }        
        return user;
      }));
  }
  

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser')
    this.loggedIn.next(false);
    
  }

  validateMember(data) {
    return this.http.post<any>(environment.serverUrl + '/api/member/validateMember', data);
  }
  validateUserName(data, params) {
    return this.http.post(environment.serverUrl + '/api/member/validateUserName', data, { params: params });
  }
  requestOTP(params) {
    return this.http.post(environment.serverUrl + '/api/member/requestOTPMember', null, { params: params });
  }
  OTPRegister(data, params) {
    return this.http.post(environment.serverUrl + '/api/member/OTPRegister', data, { params: params });
  }
  validateForgotPassword(data) {
    return this.http.post(environment.serverUrl + '/api/member/validateForgotPassword', data);
  }
  validateActivateCode(params) {
    return this.http.post(environment.serverUrl + '/api/member/validateActivateCode', null, { params: params });
  }
  confirmForgotPassword(data, params) {
    return this.http.post(environment.serverUrl + '/api/member/confirmForgotPassword', data, { params: params });
  }
  OTPForgotPassword(data, params) {
    return this.http.post(environment.serverUrl + '/api/member/OTPForgotPassword', data, { params: params });
  }
}
