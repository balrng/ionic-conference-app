export interface FleetDetails {
  id?: number;
  fleetId?: number;
  identityNumber?: string | null;
  dateOfBirthHijri?: string | null;
  commercialRecordNumber?: string | null;
  commercialRecordIssueDateHijri?: string | null;
  phoneNumber?: string | null;
  extensionNumber?: string | null;
  emailAddress?: string | null;
  managerName?: string | null;
  managerPhoneNumber?: string | null;
  managerMobileNumber?: string | null;
  isDeleted?: boolean;
  createdDate?: Date | null;
  createdBy?: string | null;
  updatedDate?: Date | null;
  updatedBy?: string | null;
  referanceNumber?: string | null;
  isLinkedWithWasl?: boolean;
  activityType?: string | null;
  sFDACompanyActivities?: string | null;
  fleetType?: string | null;
}