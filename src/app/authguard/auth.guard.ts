import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { TokenService } from '../services/token.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private tokenService: TokenService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const token = this.tokenService.getToken();

    //if (token && !this.tokenService.isTokenExpired(token)) {
    if (this.tokenService.isAuthenticated()) {
      if (state.url === '/login') {
        return this.router.parseUrl('/schedule');
      }
      return true;
    } else {
      this.tokenService.removeToken();
      return this.router.parseUrl('/login');
    }
  }
}