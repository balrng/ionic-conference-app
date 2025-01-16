import { InventorySensor } from "./inventory-sensor.model";
import { SensorAlertTypeLookup } from "./sensor-alert-type-lookup.model";

export interface SensorAlert {
  id?: number;
  inventorySensorId?: number;
  sensorAlertTypeLookupId?: number;
  isActive?: boolean;
  isSMS?: boolean;
  isEmail?: boolean;
  fromValue?: number | null;
  toValue?: number | null;
  inventorySensor?: InventorySensor | null; 
  sensorAlertTypeLookup?: SensorAlertTypeLookup | null; 
}