interface LoggedInUserProfile {
    isSuperAdmin: boolean;
    userId: string;
    userName: string;
    name: string;
    userPrivilegesTypeIds: number[];
    agentId: number | null;
    fleetId: number | null;
    fleetName: string;
    userWarehouses: LookupModel[];
    userInventories: number[];
    userSensors: number[];
    isSubAdminAgent: boolean;
  }