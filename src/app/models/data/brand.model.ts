export interface Brand {
  id?: number;
  name?: string | null;
  nameEn?: string | null;
  gateway?: boolean;
  isDeleted?: boolean;
  createdDate?: Date | null;
  createdBy?: string | null;
  updatedDate?: Date | null;
  updatedBy?: string | null;
}