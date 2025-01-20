export interface LoggedInUserProfile {
    isSuperAdmin: boolean;
    userId: string;
    userName?: string ;
    name?: string;
    //userPrivilegesTypeIds: number[];
    userPrivilegesTypeIdsString:string
    agentId: number | null;
    fleetId: number | null;
    fleetName: string;
    fleetNameEn: string;
    userAccountIdsString?:string;

    userWarehousesString:string;
    userInventoriesString:string
    userSensorsString:string;

    // userWarehouses: LookupModel[];
    // userInventories: number[];
    // userSensors: number[];
    isSubAdminAgentString?: string;
    isSubAdminAgent?: boolean;
    utc: number;
  }