import { Brand } from "./brand.model";
import { Fleet } from "./fleet.model";

export interface Gateway {
  id?: number;
  name?: string | null;
  iMEI?: string | null;
  sIMNumber?: string | null;
  expirationDate?: Date;
  activationDate?: Date | null;
  sIMCardExpirationDate?: Date | null;
  numberOfMonths?: number | null;
  notes?: string | null;
  brandId?: number;
  fleetId?: number;
  isActive?: boolean;
  isDeleted?: boolean;
  createdDate?: Date | null;
  createdBy?: string | null;
  updatedDate?: Date | null;
  updatedBy?: string | null;
  brand?: Brand | null; 
  fleet?: Fleet | null; 
}