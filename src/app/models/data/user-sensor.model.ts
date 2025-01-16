import { Sensor } from "./sensor.model";

export interface UserSensor {
  id?: number;
  userId?: string | null;
  sensorId?: number;
  sensor?: Sensor | null; 
}