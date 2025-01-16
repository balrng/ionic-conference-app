export interface EmailHistory {
  id?: number;
  alertId?: number | null;
  title?: string | null;
  body?: string | null;
  toEmails?: string | null;
  createdDate?: Date;
  isSent?: boolean;
  sentDate?: Date | null;
}