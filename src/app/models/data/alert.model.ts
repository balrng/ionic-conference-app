export interface Alert {
  id?: number;
  alertTypeLookupId?: number;
  fleetId?: number;
  warehouseId?: number | null;
  inventoryId?: number | null;
  sensorId?: number | null;
  alertTextAr?: string | null;
  alertTextEn?: string | null;
  alertForValueAr?: string | null;
  alertForValueEn?: string | null;
  alertDateTime?: Date | null;
  isDismissed?: boolean;
  customAlertId?: number;
  temperature?: number | null;
  humidity?: number | null;
  isDeleted?: boolean;
  createdDate?: Date | null;
}