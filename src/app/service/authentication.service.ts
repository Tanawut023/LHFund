import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) {

  }

  login(data) {
    return this.http.post<any>('http://fundchoiceuat.lhfund.co.th/api/member/login', data)
      .pipe(map(user => {
        // console.log(user)
        // login successful if there's a jwt token in the response
        if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
        }        
        return user;
      }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }

  validateMember(data) {
    return this.http.post<any>('http://fundchoiceuat.lhfund.co.th/api/member/validateMember', data);
  }
  validateUserName(data, params) {
    return this.http.post('http://fundchoiceuat.lhfund.co.th/api/member/validateUserName', data, { params: params });
  }
  requestOTP(params) {
    return this.http.post('http://fundchoiceuat.lhfund.co.th/api/member/requestOTPMember', null, { params: params });
  }
  OTPRegister(data, params) {
    return this.http.post('http://fundchoiceuat.lhfund.co.th/api/member/OTPRegister', data, { params: params });
  }
  validateForgotPassword(data) {
    return this.http.post('http://fundchoiceuat.lhfund.co.th/api/member/validateForgotPassword', data);
  }
  validateActivateCode(params) {
    return this.http.post('http://fundchoiceuat.lhfund.co.th/api/member/validateActivateCode', null, { params: params });
  }
  confirmForgotPassword(data, params) {
    return this.http.post('http://fundchoiceuat.lhfund.co.th/api/member/confirmForgotPassword', data, { params: params });
  }
  OTPForgotPassword(data, params) {
    return this.http.post('http://fundchoiceuat.lhfund.co.th/api/member/OTPForgotPassword', data, { params: params });
  }
}
