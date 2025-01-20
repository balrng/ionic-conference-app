import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sensor } from '../models/data/sensor.model';
import { AgentDashboardView } from '../models/data/agent-dashboard.model';
import { LoggedInUserProfile } from '../models/data/loggedin-user-profile';
import { environment } from '../../environments/environment';
//import { AgentDashboardView } from '../models/data/agent-dashboard.model';


@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private apiUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) {}

  getAgentDashboard(loggedUser: LoggedInUserProfile): Observable<AgentDashboardView> {
    return this.http.post<AgentDashboardView>(`${this.apiUrl}/Dashboard/Index`, loggedUser);
  }
}