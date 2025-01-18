import { Agent } from "./agent.model";
import { Fleet } from "./fleet.model";

export interface User {
  id?: string;
  userName?: string | null;
  password?: string | null;
  name?: string | null;
  nameEn?: string | null;
  email?: string | null;
  isActive?: boolean;
  expirationDate?: Date | null;
  isDeleted?: boolean;
  createdDate?: Date | null;
  createdBy?: string | null;
  updatedDate?: Date | null;
  updatedBy?: string | null;
  agentId?: number | null;
  fleetId?: number | null;
  appId?: string | null;
  enableMobileAlerts?: boolean;
  isSuperAdmin?: boolean;
  isAdmin?: boolean;
  isSubAdminAgent?: boolean;
  agent?: Agent | null; 
  fleet?: Fleet | null; 
  designation?: string | null;
  title?: string | null;
  jobID?: string | null;
  nationalID?: string | null;
  country?: string | null;
  region?: string | null;
  city?: string | null;
  phone?: string | null;
  address?: string | null;
  mobile?: string | null;
  bio?: string | null;
  isAgent?: number;
  isMasterUser?: boolean | null;
}

export interface LoginView{
  userName: string  | null;
  password: string | null ;
  //errorMsg?: string | null;
  rememberMe?: boolean | null;
  captchaValue?: string | null;
  captchaCreatedValue?: string | null;
  utc?:number | null;
}