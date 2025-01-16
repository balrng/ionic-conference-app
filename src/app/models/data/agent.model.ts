export interface Agent {
  id?: number;
  name?: string | null;
  nameEn?: string | null;
  isDeleted?: boolean;
  createdDate?: Date | null;
  createdBy?: string | null;
  updatedDate?: Date | null;
  updatedBy?: string | null;
  managerName?: string | null;
  managerEmail?: string | null;
  managerMobile?: string | null;
  supervisorName?: string | null;
  supervisorEmail?: string | null;
  supervisorMobile?: string | null;
  expirationDate?: Date | null;
  totalDevices?: number;
  isActive?: boolean | null;
  url?: string | null;
}