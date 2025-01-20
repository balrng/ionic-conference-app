export interface GroupedSensors {
    sensorBrandName: string;
    countPerBrand: number;
    percentageAmongBrands: number;
  }
  
  export interface GroupedGateways {
    gatewayBrandName: string;
    countPerBrand: number;
    percentageAmongBrands: number;
  }
  
  export interface GroupChartModel {
    entityName: string;
    date: string;
    temperature: number;
    humidity: number;
  }
  
  export interface MapDataModel {
    serial: string;
    name: string;
    lat: string;
    lon: string;
    statusid: number;
    temperature: string;
    humidity: string;
  }

  export interface AgentDashboardView {
    calibratedDevicesCount: number;
    nearlyCalibratedDevicesCount: number;
    notCalibratedDevicesCount: number;
    waslItegratedCompany: number;
    waslNotItegratedCompany: number;
    onlineDevicesCount: number;
    offlineDevicesCount: number;
    disconnectedDevicesCount: number;
    registereddDevicesCount: number;
    reportsCount: number;
    customAlertsCount: number;
    warehousesCount: number;
    activeWarehousesCount: number;
    inactiveWarehousesCount: number;
    waslLinkedWarehousesCount: number;
    waslLinkedInventoriesCount: number;
    waslNotLinkedWarehousesCount: number;
    waslNotLinkedInventoriesCount: number;
    inventoriesCount: number;
    activeInventoriesCount: number;
    inactiveInventoriesCount: number;
    sensorsCount: number;
    notWorkingSensorsCount: number;
    workingSensorsCount: number;
    gatewaysCount: number;
    activeGatewaysCount: number;
    inactiveGatewaysCount: number;
    // lsGroupedSensors: GroupedSensors[];
    // lsGroupedGateways: GroupedGateways[];
    // onlineInventoryHistoryDtos: GroupChartModel[];
    // sensorMapData: MapDataModel[];
    usersCount: number;
    activeUsersCount: number;
    inactiveUsersCount: number;
    temperature: string; // "22.2°"
    humidity: string; // "32.3%"
  }