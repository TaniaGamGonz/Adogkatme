import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class IsLoggedGuard implements CanActivate, CanActivateChild, CanLoad {

    constructor(
      private router: Router,
      private loginService: LoginService
      )
       { }
      private user = this.loginService.user;

    canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ) {
        if(this.user.logged){
          return true;
        }else{
          this.router.navigate(['/login']);
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
