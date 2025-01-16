export enum AgentPrivilegeTypeEnum {
    /**
    * مشاهدة المخازن
    */
    ViewInventories = 18,
  
    /**
    * إضافة / تعديل /    المخازن
    */
    AddUpdateInventories = 19,
    /**
    * مشاهدة المستودعات
    */
    ViewWarehouses = 16,
    /**
    * إضافة / تعديل /    المستودعات
    */
    AddUpdateWarehouses = 17,
    /**
    * الشريط العلوي : إظهار قسم المستودعات
    */
    ShowWarehouseMenuItem = 102,
  
    /**
     * مشاهدة الحساسات
     */
    ViewSensors = 166,
  
    /**
     * إضافة/تعديل الحساسات
     */
    AddUpdateSensors = 167,
  
    /**
     * حذف الحساسات
     */
    DeleteSensors = 168,
    /**
     * قسم الإدارة : إدارة الإنذارات المخصصة
     */
    ManageCustomAlerts = 115,
  
    /**
     * قسم التقارير : تقرير الحرارة والرطوبة
     */
    ViewTemperatureAndHumidityReport = 116,
  
    /**
     * قسم التقارير : تقرير سجل المستودعات
     */
    ViewWarehousesHistoryReport = 128,
  
  
    /**
     * قسم التقارير : إدارة جدولة التقارير
     */
    ManageReportSchedule = 131,
  
    /**
     * تعديل بيانات وصل
     */
    UpdateWaslInfo = 132,
  
    /**
     * الشريط العلوي : لوحة الحرارة والرطوبة
     */
    ShowWarehouseOnlineDashboardMenuItem = 133,
  
    /**
     * قسم التقارير : تقرير سجل المخزن
     */
    ViewInventoryHistoryReport = 134,
  
    /**
     * قسم التقارير : تقرير سجل المخزن PDF, Excel
     */
    InventoryHistoryReportPDFExcel = 135,
  
    /**
     * قسم التقارير : تقرير متوسط الحرارة والرطوبة اليومي
     */
    ViewAverageDailyTemperatureAndHumidityReport = 136,
  
    /**
     * قسم التقارير : تقرير الإنذارات
     */
    ViewAlertsReport = 144,
  
    /**
     * قسم إعدادات النظام : مشاهدة المستخدمين
     */
    ViewUsers = 153,
  
    /**
     * قسم إعدادات النظام : إضافة/تعديل المستخدمين
     */
    AddUpdateUsers = 154,
  
    /**
     * قسم إعدادات النظام : حذف المستخدمين
     */
    DeleteUsers = 156,
  
    /**
     * قسم إعدادات النظام : تمكين الصلاحيات المستخدمين
     */
    EnableUserPrivileges = 157,
  
    /**
     * تمكين تعديل إعدادات النظام
     */
    UpdateCompanySettings = 161,
    /**
     * قسم التقارير : تقرير الحساسات التي تعمل والتي لاتعمل
     */
    ViewWorkingAndNotWorkingSensorReport = 164,
    /**
    * قسم الهيكل : القائمة
    */
    ViewAccountStructure = 169,
  
    /**
    * قسم التقارير : تقرير مخصص للحرارة والرطوبة
    */
    ViewCustomTemperatureAndHumidityReport = 171,
    /**
    * قسم التقارير : تقرير مخصص للحرارة
    */
    ViewTemperatureReport = 172,
    /**
    * قسم التقارير : تقرير مخصص للرطوبة
    */
    ViewHumidityReport = 174,
  
  
    /**
    * قسم التقارير : تقرير ملخص للحرارة والرطوبة
    */
    ViewSensorSummaryReport = 175,
  
    /**
    * قسم التقارير : تقرير ملخص للحرارة
    */
    ViewSensorTempretureSummaryReport = 176,
  
    /**
    * قسم التقارير : تقرير ملخص الرطوبة
    */
    ViewSensorHumiditySummaryReport = 177,
  
    /**
    * قسم التقارير : تقرير سجل الحساسات
    */
    ViewSensorHistoryReport = 178,
    /**
    * قسم التقارير : تقرير المستودعات اليومي
    */
    ViewWarehouseDailyReport = 179,
    /**
    * قسم التقارير : تقرير المستودعات التفصيلي
    */
    ViewWarehouseDetailsReport = 180,
  
    /**
    * قسم التقارير : تقرير المستودعات التفصيلي
    */
    ViewWarehouseAverageDetailsReport = 181,
  
    /**
    * قسم التقارير : تقرير المستودعات التفصيلي
    */
    ViewInventoriesReport = 182,
  
    ViewInventoryDailyReport = 183,
  
    ViewInventoryDetailsReport = 184,
  
    ViewInventoryAverageDetailsReport = 185,
    ViewSignalStatusReport = 186,
    ViewReportMenuItem = 187,
    ViewDashboardContent = 188,
    ViewDashboardWaslIntegration = 189,
  }