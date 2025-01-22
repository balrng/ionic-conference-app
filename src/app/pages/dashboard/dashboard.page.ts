import { AfterViewInit, Component, OnInit } from '@angular/core';
import { JwtTokenHelper } from '../../services/auth-token';
import { DecodedToken } from '../../models/generic/decoded-token';
import { DashboardService } from '../../services/dashboard.service';
import { LoggedInUserProfile } from '../../models/data/loggedin-user-profile';
import { AgentDashboardView } from '../../models/data/agent-dashboard.model';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit,AfterViewInit  {

  tokenData: DecodedToken | null
  pageData : AgentDashboardView | null = null;
  constructor(tokenhelper: JwtTokenHelper, private dashboardService: DashboardService) {

    this.tokenData = tokenhelper.getToken();
  }
  ngAfterViewInit(): void {
    console.log('ExampleComponent execute AfterViewInit');
  }

  ionViewWillEnter(){
    console.log('ExampleComponent execute ionViewWillEnter');
  }

  ionViewDidLoad() {
    console.log('ExampleComponent execute ionViewDidLoad');
  }
  
  ngOnInit() {
    console.log('DashboardPage ngOnInit');
    if (!this.tokenData) {
      console.error('Token not found');
      return;
    }
    const loggedInUserProfile = this.convertToLoggedInUserProfile(this.tokenData);
     this.dashboardService.getAgentDashboard(loggedInUserProfile).subscribe(
      (response:any) => {
        this.pageData = response;
      },
      (error:HttpErrorResponse) => {
        console.error('Error:', error.error); 
      }
    );


  }

  private convertToLoggedInUserProfile(tokenData: DecodedToken): LoggedInUserProfile {
    return {
      userId: tokenData.nameid,
      name: tokenData.given_name,
      isSuperAdmin: tokenData.is_super_admin,
      isSubAdminAgentString: tokenData.sub_admin_agent,
      userPrivilegesTypeIdsString: tokenData.user_privileges_type_ids,
      agentId: tokenData.agent_id,
      fleetId: tokenData.fleet_id,
      utc: tokenData.utc,
      fleetName: tokenData.fleet_name,
      fleetNameEn: tokenData.fleet_name_en,

      userWarehousesString: tokenData.user_warehouses,
      userInventoriesString: tokenData.user_inventories,
      userSensorsString: tokenData.user_sensors,

    }
  }

}
