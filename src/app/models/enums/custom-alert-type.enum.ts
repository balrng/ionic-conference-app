/**
 * أنواع الإنذارات المخصصة
 */
export enum CustomAlertTypeEnum {
    /**
     * درجة الرطوبة خارج المعدل
     */
    HumidityOutOfRang = 1,
  
    /**
     * درجة الحرارة خارج المعدل
     */
    TemperatureOutOfRang = 2,
  
    /**
     * درجة الحرارة والرطوبة خارج المعدل
     */
    TemperatureAndHumidityOutOfRang = 3,
  
    /**
     * فصل الطاقة الخارجية
     */
    ExternalPowerDisconnected = 4,
    /**
     * الطاقة الخارجية متصلة
     */
    ExternalPowerConnected = 5,
  
  
    /**
    *مستوى البطارية منخفض
     */
    BatteryLevelLow = 6,
    /**
     * فقدت إشارة Wi-Fi
     */
    WiFiSignalLost = 7,
  
    /**
     * عودة إشارة Wi-Fi
     */
    WiFiSignalBack = 8
  }