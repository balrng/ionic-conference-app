import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginView } from '../models/data/user.model'
import { environment } from '../../environments/environment';
//import {  } from '../models/data/agent-dashboard.model';

//Singleton service
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.apiBaseUrl;
  private http = inject(HttpClient);
  constructor() { }

  public login(credentials: LoginView): Observable<{ Token: string }> {
    return this.http.post<{ Token: string }>(`${this.apiUrl}/Account/Login`, credentials);
  }

}
