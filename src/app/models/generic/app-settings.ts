export interface AppSettings {
    connectionStrings: ConnectionStrings | null;
    apiSecurity: ApiSecurity | null;
    waslIntegration: WaslIntegration | null;
    customAlerts: CustomAlerts | null;
    email: Email | null;
    sms: SMS | null;
    historyApi: HistoryApi | null;
    webApi: WebApi | null;
    webAgentUrl: string;
    sensorHistoryFilePath: string;
  }
  
  export interface ConnectionStrings {
    defaultConnection: string;
    historyConnection: string;
  }
  
  export interface ApiSecurity {
    enable: boolean;
    apiKey: string;
  }
  
  export interface WaslIntegration {
    baseUrl: string | null;
    apiKey: string;
  }
  
  export interface HistoryApi {
    baseUrl: string;
    apiKey: string;
    timeoutSeconds: number;
  }
  
  export interface WebApi {
    baseUrl: string;
    apiKey: string;
    timeoutSeconds: number;
  }
  
  export interface CustomAlerts {
    isEnabled: boolean;
    minIntervalMinutes: number;
  }
  
  export interface Email {
    isEnabled: boolean;
    host: string;
    port: number;
    enableSsl: boolean;
    address: string;
    displayName: string;
    password: string;
  }
  
  export interface SMS {
    isEnabled: boolean;
    serviceUrl: string | null;
  }
  
  // AppSettings Interface'ini somutlaştırmak için örnek bir factory fonksiyonu:
  export function createAppSettings(): AppSettings {
    return {
      connectionStrings: null,
      apiSecurity: null,
      waslIntegration: null,
      customAlerts: null,
      email: null,
      sms: null,
      historyApi: null,
      webApi: null,
      webAgentUrl: "",
      sensorHistoryFilePath: ""
    };
  }