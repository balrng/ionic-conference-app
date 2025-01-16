import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { TokenService } from '../services/token.service';

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {

  const tokenService = inject(TokenService);
  const token = tokenService.getToken();
  const router = inject(Router);

  if (token) {

    if (tokenService.isTokenExpired(token)) {
      tokenService.removeToken();
      router.navigate(['/login']);
      return throwError(() => new HttpErrorResponse({ status: 401, error: 'Token expired' }));
    }
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401) {
        tokenService.removeToken();
        router.navigate(['/login']);


      }
      console.log(error);
      return throwError(() => error);
    })
  );
};