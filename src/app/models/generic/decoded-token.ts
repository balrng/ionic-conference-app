export interface DecodedToken {
  nameid: string; //userId
  unique_name: string; //username
  role: string; 
  given_name: string;
  full_name: string;
  agent_id: number;
  fleet_id: number;
  fleet_name: string;
  fleet_name_en: string;
  user_privileges_type_ids: string;
  user_warehouses: string;
  user_inventories: string;
  user_sensors: string;
  is_super_admin:boolean;
  sub_admin_agent: string;
  utc: number;
  nbf: number;
  exp: number;
  iat: number;
  iss: string;
  aud: string;
}