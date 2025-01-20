import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/data/user.model';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class UserService {
  apiAdress = environment.apiBaseUrl;
  constructor(private http: HttpClient) {}

  getIndex(
    agentId?: number,
    fleetId?: number,
    warehouseId?: number,
    isActive?: number,
    page?: number,
    show?: number,
    search?: string,
    returnURL?: string
  ): Observable<User> { 

    let params = new HttpParams();
    if (agentId) {
      params = params.set('agentId', agentId.toString());
    }
    if (fleetId) {
      params = params.set('fleetId', fleetId.toString());
    }
    if (warehouseId) {
      params = params.set('warehouseId', warehouseId.toString());
    }
    if (isActive) {
      params = params.set('isActive', isActive.toString());
    }
    if (page) {
      params = params.set('page', page.toString());
    }
    if (show) {
      params = params.set('show', show.toString());
    }
    if (search) {
      params = params.set('search', search);
    }
    if (returnURL) {
      params = params.set('returnURL', returnURL);
    }

    return this.http.get(`${this.apiAdress}/Users/Index`, { params }); // API endpoint'ini güncelleyin
  }
}