import { PrivilegeType } from "./privilege-type.model";

export interface UserPrivilege {
  id?: number;
  userId?: string | null;
  privilegeTypeId?: number;
  isActive?: boolean;
  privilegeType?: PrivilegeType | null;
}