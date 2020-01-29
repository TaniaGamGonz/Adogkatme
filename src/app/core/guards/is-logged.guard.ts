import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IsLoggedGuard implements CanActivate, CanActivateChild, CanLoad {

    constructor(private router: Router) { }

    canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ) {
        const user = localStorage.getItem('user');
        if(user && user !== ''){
          return true;
        }else{
          this.router.navigate(['/registro']);
          return false;
        }
    }


  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }
}
