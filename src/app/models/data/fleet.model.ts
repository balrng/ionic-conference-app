import { Agent } from "./agent.model";

export interface Fleet {
  id?: number;
  agentId?: number;
  name?: string | null;
  nameEn?: string | null;
  managerEmail?: string | null;
  managerMobile?: string | null;
  managerName?: string | null;
  business?: string | null;
  supervisorEmail?: string | null;
  supervisorMobile?: string | null;
  companyInfo?: string | null;
  twitter?: string | null;
  linkedin?: string | null;
  isDeleted?: boolean;
  createdDate?: Date | null;
  createdBy?: string | null;
  updatedDate?: Date | null;
  updatedBy?: string | null;
  taxRegistrationNumber?: string | null;
  commercialRegistrationNumber?: string | null;
  logoPhotoByte?: any[] | null; 
  logoPhotoExtention?: string | null;
  agent?: Agent | null; 
  isActive?: boolean;
  isUserVerified?: boolean;
  expirationDate?: Date | null;
}