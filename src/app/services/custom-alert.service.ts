import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ReturnResult } from '../models/generic/return-result';
import { PagedResult } from '../models/generic/paged-result';
import { CustomAlert } from '../models/data/custom-alert.model';

// interface CustomAlertView {
//   // CustomAlertView modelinin özellikleri buraya gelecek
// }

// interface PagedResult<T> {
//   totalCount: number;
//   data: T[];
// }

// interface ReturnResult<T> {
//   isSuccess: boolean;
//   errorCode: number;
//   errorMessage: string;
//   data: T;
// }

@Injectable({ providedIn: 'root' })
export class CustomAlertService {
  constructor(private http: HttpClient) {}
  apiAdress = environment.apiBaseUrl;

  getCustomAlerts(
    userId: string,
    fleetId: number,
    agentId: number,
    warehouseId: number | null = null,
    inventoryId: number| null = null,
    isActive: number | null = null,
    page: number | null = null,
    show: number | null =  null,
    search: string | null =  null,
    sensorType: number | null = null,
  ): Observable<ReturnResult<PagedResult<CustomAlert>>> {

    let params = new HttpParams()
      .set('userId', userId)
      .set('fleetId', fleetId.toString())
      .set('agentId', agentId.toString());

    if (warehouseId !== null) {
      params = params.set('warehouseId', warehouseId.toString());
    }
    if (inventoryId !== null) {
      params = params.set('inventoryId', inventoryId.toString());
    }
    if (isActive !== null) {
      params = params.set('isActive', isActive.toString());
    }
    if (page !== null) {
      params = params.set('page', page.toString());
    }
    if (show !== null) {
      params = params.set('show', show.toString());
    }
    if (search !== null) {
      params = params.set('search', search);
    }
    if (sensorType !== null) {
      params = params.set('sensorType', sensorType.toString());
    }

    return this.http.get<ReturnResult<PagedResult<CustomAlert>>>(
      `${this.apiAdress}/customalert/index`, 
      { params }
    );
  }
}