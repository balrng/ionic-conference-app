export interface PrivilegeType {
  id?: number;
  name?: string | null;
  nameEn?: string | null;
  isDeleted?: boolean;
  order?: number | null;
  roleId?: string | null;
  editable?: boolean;
}