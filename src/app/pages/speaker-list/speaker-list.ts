import { Component } from '@angular/core';
import { ConferenceData } from '../../providers/conference-data';
import { DecodedToken } from '../../models/generic/decoded-token';
import { AgentDashboardView } from '../../models/data/agent-dashboard.model';
import { JwtTokenHelper } from '../../services/auth-token';
import { CustomAlertService } from '../../services/custom-alert.service';
import { LoggedInUserProfile } from '../../models/data/loggedin-user-profile';
import { HttpErrorResponse } from '@angular/common/http';
import { PagedResult } from '../../models/generic/paged-result';
import { ReturnResult } from '../../models/generic/return-result';
import { CustomAlert } from '../../models/data/custom-alert.model';

@Component({
  selector: 'page-speaker-list',
  templateUrl: 'speaker-list.html',
  styleUrls: ['./speaker-list.scss'],
})
export class SpeakerListPage {
  speakers: any[] = [];
  tokenData: DecodedToken | null
  pageData : ReturnResult<PagedResult<CustomAlert>> | null = null;
  headers = ['Title', 'Alert Type', 'Duration of Non-Repetition', 'ToEmails', 'IsActive'];

  constructor(public confData: ConferenceData,
  tokenhelper: JwtTokenHelper,
  private customAlerService: CustomAlertService) {
    this.tokenData = tokenhelper.getToken();
    
  }

  ionViewDidEnter() {
    this.confData.getSpeakers().subscribe((speakers: any[]) => {
      this.speakers = speakers;
    });
    const loggedInUserProfile = this.convertToLoggedInUserProfile(this.tokenData);
    this.customAlerService.getCustomAlerts(loggedInUserProfile.userId,
      loggedInUserProfile.fleetId,
      loggedInUserProfile.agentId)
    .subscribe(
          (response:any) => {
            this.pageData = response;
            console.log('response:', response);
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
