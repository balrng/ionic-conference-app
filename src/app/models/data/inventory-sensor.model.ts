import { Inventory } from "./inventory.model";
import { Sensor } from "./sensor.model";

export interface InventorySensor {
  id?: number;
  inventoryId?: number;
  sensorId?: number;
  isDeleted?: boolean;
  createdDate?: Date | null;
  createdBy?: string | null;
  updatedDate?: Date | null;
  updatedBy?: string | null;
  inventory?: Inventory | null; 
  sensor?: Sensor | null; 
}