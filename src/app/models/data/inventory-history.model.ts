export interface InventoryHistory {
  id?: number;
  inventoryId?: number | null;
  warehouseId?: number | null;
  fleetId?: number;
  gatewayIMEI?: string | null;
  serial?: string | null;
  temperature?: number | null;
  humidity?: number | null;
  isLowVoltage?: boolean | null;
  gpsDate?: Date;
  alram?: string | null;
  gSMStatus?: string | null;
}