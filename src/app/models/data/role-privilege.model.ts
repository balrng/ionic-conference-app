import { PrivilegeType } from "./privilege-type.model";
import { Role } from "./role.model";

export interface RolePrivilege {
  id?: number;
  roleId?: string | null;
  privilegeTypeId?: number;
  isActive?: boolean;
  role?: Role | null; 
  privilegeType?: PrivilegeType | null; 
}