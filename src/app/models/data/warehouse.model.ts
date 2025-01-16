import { Fleet } from "./fleet.model";
import { Inventory } from "./inventory.model";

export interface Warehouse {
  id?: number;
  fleetId?: number;
  name?: string | null;
  phone?: string | null;
  address?: string | null;
  city?: string | null;
  latitude?: number | null;
  longitude?: number | null;
  landCoordinates?: string | null;
  landAreaInSquareMeter?: number;
  licenseNumber?: string | null;
  licenseIssueDate?: string | null;
  licenseExpiryDate?: string | null;
  managerMobile?: string | null;
  email?: string | null;
  isActive?: boolean;
  referenceKey?: string | null;
  waslActivityType?: string | null;
  isLinkedWithWasl?: boolean;
  isDeleted?: boolean;
  createdDate?: Date | null;
  createdBy?: string | null;
  updatedDate?: Date | null;
  updatedBy?: string | null;
  fleet?: Fleet | null; 
  inventories?: Inventory[] | null; 
}