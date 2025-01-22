import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginView } from '../models/data/user.model'
import { environment } from '../../environments/environment';
//import {  } from '../models/data/agent-dashboard.model';

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

//Singleton service
@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private apiUrl = environment.apiBaseUrl;
  private api2 = 'https://jsonplaceholder.typicode.com/posts'; 
  private http = inject(HttpClient);
  constructor() { }

  public login(credentials: LoginView): Observable<{ Token: string }> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post<{ Token: string }>(`https://twmsapi.alrakeen.sa/api/v1/Account/Login`, credentials, { headers });
  }

  public loginHttp(credentials: LoginView): Observable<{ Token: string }> {
    return this.http.post<{ Token: string }>(`http://twmsapi.alrakeen.sa/api/v1/Account/Login`,credentials);
  }

  getTestLocalizer(): Observable<string> {
    return this.http.get(`http://twmsapi.alrakeen.sa/api/v1/Account/TestLocalizer`,{ responseType: 'text' });
  }


  getTestData(): Observable<Todo> {
    return this.http.get<Todo>(this.api2); 
  }

 

  postTestData(newTodo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.api2, newTodo);
  }

}
