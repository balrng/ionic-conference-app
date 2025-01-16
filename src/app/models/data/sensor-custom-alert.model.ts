import { Sensor } from "./sensor.model";

export interface SensorCustomAlert {
  id?: number;
  customAlertId?: number;
  sensorId?: number;
  sensor?: Sensor | null; 
}
