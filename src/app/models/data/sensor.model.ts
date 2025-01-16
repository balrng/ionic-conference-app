import { Brand } from "./brand.model";
import { Fleet } from "./fleet.model";
import { Gateway } from "./gateway.model";
import { Inventory } from "./inventory.model";
import { Warehouse } from "./warehouse.model";

export interface Sensor {
  id?: number;
  name?: string | null;
  serial?: string | null;
  brandId?: number;
  sensorTypeId?: number;
  sensorModelId?: number | null;
  calibrationDate?: Date | null;
  fleetId?: number;
  warehouseId?: number | null;
  inventoryId?: number | null;
  gatewayId?: number | null;
  isDeleted?: boolean;
  latitude?: string | null;
  longitude?: string | null;
  createdDate?: Date | null;
  createdBy?: string | null;
  updatedDate?: Date | null;
  updatedBy?: string | null;
  brand?: Brand | null; 
  fleet?: Fleet | null; 
  warehouse?: Warehouse | null; 
  inventory?: Inventory | null; 
  gateway?: Gateway | null; 
}