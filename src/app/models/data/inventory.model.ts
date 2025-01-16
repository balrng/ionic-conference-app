import { Fleet } from "./fleet.model";
import { Gateway } from "./gateway.model";
import { Sensor } from "./sensor.model";
import { Warehouse } from "./warehouse.model";

export interface Inventory {
  id?: number;
  fleetId?: number;
  warehouseId?: number | null;
  gatewayId?: number | null;
  name?: string | null;
  inventoryNumber?: string | null;
  isActive?: boolean;
  waslActivityType?: string | null;
  sFDAStoringCategory?: string | null;
  isLinkedWithWasl?: boolean;
  referenceKey?: string | null;
  isDeleted?: boolean;
  createdDate?: Date | null;
  createdBy?: string | null;
  updatedDate?: Date | null;
  updatedBy?: string | null;
  fleet?: Fleet | null; 
  warehouse?: Warehouse | null; 
  gateway?: Gateway | null; 
  sensors?: Sensor[] | null; 
}