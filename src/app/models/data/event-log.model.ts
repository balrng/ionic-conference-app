import { User } from "./user.model";

export interface EventLog {
  id?: number;
  type?: string | null;
  objectId?: string | null;
  objectType?: string | null;
  data?: string | null;
  userId?: string | null;
  creationDate?: Date;
  user?: User | null; 
  agentId?: number;
}