export interface CustomAlert {
  id?: number;
  title?: string | null;
  minValueTemperature?: number | null;
  maxValueTemperature?: number | null;
  minValueHumidity?: number | null;
  maxValueHumidity?: number | null;
  interval?: number;
  toEmails?: string | null;
  isActive?: boolean;
  isDeleted?: boolean;
  createdDate?: Date | null;
  createdBy?: string | null;
  updatedDate?: Date | null;
  updatedBy?: string | null;
  lastAlertDate?: Date | null;
  alertTypeLookupId?: number;
  fleetId?: number;
  userIds?: string | null;
  isEmail?: boolean;
  isSms?: boolean;
  isCall?: boolean;
  isSystemNotification?: boolean;
  selectedSchadule?: string | null;
}