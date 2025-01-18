import { Injectable, inject } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';


import { LoginView } from '../models/data/user.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private http = inject(HttpClient);
  private apiUrl = environment.apiBaseUrl;

  constructor() {
  }

  public saveToken(token: string): void {
    localStorage.setItem('jwt', token);
  }

  public getToken(): string | null {
    return localStorage.getItem('jwt');
  }

  public hasToken(): boolean {
    return this.getToken() !== null;
  }

  public removeToken(): void {
    localStorage.removeItem('jwt');
  }


  public decodeToken(token): any | null {
    const decodedToken: any = jwtDecode(token);

    try {
      return jwtDecode(token);
    }

    catch (error) {
      return null;
    }
  }
  
  public isTokenExpired(token?: string | null): boolean {
    if (!token) {
      token = this.getToken();
    }
    if (!token) {
      return true;
    }

    try {
      const decodedToken: any = jwtDecode(token);
      const expiry = decodedToken.exp;

      if (!expiry) {
        return true; // Token'da 'exp' claim'i yoksa, süresi dolmuş kabul edelim
      }

      const nowdate = Math.floor((new Date).getTime() / 1000);
      return nowdate >= expiry;
    } catch (error) {
      console.error("Error decoding token:", error);
      return true; // Token decode edilemezse süresi dolmuş kabul edelim
    }
  }

  // Diğer metodlar (getClaim, getUserRole) aynı kalabilir

  public login(credentials: LoginView): Observable<{ Token: string, RefreshToken: string }> {
    return this.http.post<{ Token: string, RefreshToken: string }>(`${this.apiUrl}/api/v1/Account/Login`, credentials)
      .pipe(
        tap(response => {
          this.saveToken(response.Token);
          localStorage.setItem('refreshToken', response.RefreshToken);
        })
      );
  }

  public isAuthenticated(): boolean {
    const token = this.getToken();
    const result = token !== null && !this.isTokenExpired(token);
    return result;
  }
}