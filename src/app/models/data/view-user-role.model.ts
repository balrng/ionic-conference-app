export interface ViewUserRole {
  id?: string | null;
  userName?: string | null;
  password?: string | null;
  name?: string | null;
  nameEn?: string | null;
  email?: string | null;
  isActive?: boolean;
  expirationDate?: Date | null;
  isAdmin?: boolean;
  isDeleted?: boolean;
  createdDate?: Date | null;
  createdBy?: string | null;
  updatedDate?: Date | null;
  updatedBy?: string | null;
  agentId?: number | null;
  fleetId?: number | null;
  appId?: string | null;
  enableMobileAlerts?: boolean;
  isSubAdminAgent?: boolean;
  isSuperAdmin?: boolean;
  roleAsignmentId?: number | null;
  roleId?: string | null;
  roleName?: string | null;
  roleDisplayName?: string | null;
  roleDisplayNameEn?: string | null;
  roleOrder?: number;
}