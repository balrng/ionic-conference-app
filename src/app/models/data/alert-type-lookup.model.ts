export interface AlertTypeLookup {
  id?: number;
  name?: string | null;
  nameEn?: string | null;
  rowOrder?: number | null;
  isRange?: boolean;
  hasMinValue?: boolean;
  hasMaxValue?: boolean;
  dataType?: string | null;
  unit?: string | null;
  unitEn?: string | null;
  isDeleted?: boolean;
}