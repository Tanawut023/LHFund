import { Injectable, Injector } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpHeaders, HttpSentEvent, HttpHeaderResponse, HttpProgressEvent, HttpResponse, HttpUserEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { tap, count, switchMap, catchError, finalize, filter, take } from 'rxjs/operators';
import { AuthenticationService } from '../service/authentication.service'

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    test;
    test2: any;
    isRefreshingToken: boolean = false;
    tokenSubject: BehaviorSubject<string> = new BehaviorSubject<string>(null);
    constructor(
        private router: Router,
        private injector: Injector,
        private authservice: AuthenticationService
    ) { }
    
    private generateAuthHeaders = function (req) {
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        return req.clone({
            setHeaders: {
                'Authorization': `Bearer ${currentUser.access_token}`,
                'Accept-Language': (localStorage.getItem('lang')) ? localStorage.getItem('lang') : "en",
                'Content-Type': 'application/json'
            }
        })
    }
    private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
        request = this.generateAuthHeaders(request)

        if(!this.isRefreshingToken) {
          this.isRefreshingToken = true;
    
          // Reset here so that the following requests wait until the token
          // comes back from the refreshToken call.
          this.tokenSubject.next(null);
          console.log('here');
    
          return this.authservice.refreshToken()
            .pipe(
              switchMap((user) => {
                if(user) {
                    console.log('sdsd')
                    console.log(user)
                  this.tokenSubject.next(user.access_token);;
                  localStorage.setItem('currentUser', JSON.stringify(user));
                  return next.handle(request);
                }
    
                // return <any>this.authservice.logout();
              }),
              catchError(err => {
                  console.log(err)
                return <any>this.authservice.logout();
              }),
              finalize(() => {
                this.isRefreshingToken = false;
              })
            );
        } else {
          this.isRefreshingToken = false;
    
          return this.tokenSubject
            .pipe(filter(token => token != null),
              take(1),
              switchMap(token => {
                //   request = this.generateAuthHeaders(request)
              return next.handle(request);
            }));
        }
      }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any> | any> {
        const clonedRequest = req.clone();
        

        this.authservice = this.injector.get(AuthenticationService)
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.access_token) {
            
            req = this.generateAuthHeaders(req)
            return next.handle(req)
                .pipe(tap(
                    succ => {
                        console.log(succ);
                    },
                    err => {
                        console.log(err);
                        if (err.status === 401){
                          // this.router.navigate(['/'], { queryParams: { returnUrl: this.router.url } });
                          this.authservice.logout();
                          setTimeout(() => {
                            window.location.href = "";
                          }, 100);
                        }
                      }
                    ));
        }
        const headers = new HttpHeaders({
            'Accept-Language': (localStorage.getItem('lang')) ? localStorage.getItem('lang') : "en",
            // 'Content-Type': 'application/x-www-form-urlencoded'
        });
        return next.handle(req.clone({ headers }));
    }

}