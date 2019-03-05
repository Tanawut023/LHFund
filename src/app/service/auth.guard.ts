import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
    loggedIn = new BehaviorSubject<boolean>(false);
    localStorage;

    constructor(private router: Router) { }
    isLoggedIn(): Observable<boolean> {
        return this.loggedIn.asObservable();
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        console.log('something');

        var n = state.url.search("/login");
        //if(state.url === '/login' || state.url == '/login?returnUrl=%2Fmyport' || state.url == '/login?returnUrl=' ){
        if (n != -1 && localStorage.getItem('currentUser')) {
            this.router.navigate(['/logingin']);
            this.loggedIn.next(true);
            return false;

        }
        if (n != -1) {
            // console.log('test'+state.url);
            this.loggedIn.next(false);
            return true;

        }
        // else if(){

        // }
        if (localStorage.getItem('currentUser')) {
            // logged in so return true

            this.loggedIn.next(true);
            return true;
        }

        else
            // not logged in so redirect to login page with the return url
            console.log('url is: ' + state.url);

        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        this.loggedIn.next(false);
        return false;
    }


    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.canActivate(route, state);
    }
}