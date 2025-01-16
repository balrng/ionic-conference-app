import { Warehouse } from "./warehouse.model";

export interface UserWarehouse {
  id?: number;
  userId?: string | null;
  warehouseId?: number;
  warehouse?: Warehouse | null; 
}