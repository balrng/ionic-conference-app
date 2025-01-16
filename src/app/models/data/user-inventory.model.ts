import { Inventory } from "./inventory.model";

export interface UserInventory {
  id?: number;
  userId?: string | null;
  inventoryId?: number;
  inventory?: Inventory | null; 
}