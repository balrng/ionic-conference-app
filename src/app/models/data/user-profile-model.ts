
  interface UserProfile {
  isSuperAdmin: boolean;
  userId: string;
  userName: string;
  name: string;
  userPrivilegesTypeIdsString?: string | null;
  userPrivilegesTypeIds: any[];
  agentId: number;
  fleetId: number;
  utc: number;
  fleetNameEn: string;
  fleetName: string;
  userAccountIdsString?: string | null;
  userWarehousesString?: string | null;
  userInventoriesString?: string | null;
  userSensorsString?: string;
  userWarehouses: any[];
  userInventories: any[];
  userSensors: any[];
  isSubAdminAgentString?: string | null;
  isSubAdminAgent: boolean;
}