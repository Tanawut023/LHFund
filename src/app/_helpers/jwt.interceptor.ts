import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private router: Router) { }

    // intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //     // add authorization header with jwt token if available
    //     let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    //     let lang = JSON.parse(localStorage.getItem('lang'));
    //     if (currentUser && currentUser.token) {
    //         request = request.clone({
    //             setHeaders: { 
    //                 Authorization: `${currentUser.token}`
    //             }
    //         });
    //     }

    //     return next.handle(request);
    // }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {            
            const headers = new HttpHeaders({
                'Authorization': currentUser.token,
                'x-Language': (localStorage.getItem('lang'))?localStorage.getItem('lang'):"en",
                'Content-Type': 'application/json'
              });

            const clonedreq = req.clone({headers});

            console.log('Intercepted HTTP call', clonedreq);

            return next.handle(clonedreq)
                .pipe(tap(
                succ => { },
                err => {
                    if (err.status === 401)
                        this.router.navigateByUrl('/login');                    
                    }
                ));
        }
        // else {
        //     this.router.navigateByUrl('/login');
        // }
        const headers = new HttpHeaders({
            'x-Language': (localStorage.getItem('lang'))?localStorage.getItem('lang'):"en",
          });
        return next.handle(req.clone({headers}));
    }

}