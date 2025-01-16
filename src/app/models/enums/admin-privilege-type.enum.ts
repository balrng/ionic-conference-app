export enum AdminPrivilegeTypeEnum {
    /**
     * مشاهدة  الأساطيل
     */
    ViewFleets = 1,
  
    /**
     * إضافة / تعديل /  الأساطيل
     */
    AddUpdateFleets = 2,
  
    /**
     * تفعيل التنبيهات
     */
    EnableAlerts = 12,
  
    /**
     * تعديل إدارة الأجهزة
     */
    ManageManageAccounts = 13,
  
    /**
     * مشاهدة Gateway
     */
    ViewGateways = 14,
  
    /**
     * إضافة / تعديل /  Gateway
     */
    AddUpdateGateways = 15,
  
    /**
     * مشاهدة المستودعات
     */
    ViewWarehouses = 16,
  
    /**
     * إضافة / تعديل /    المستودعات
     */
    AddUpdateWarehouses = 17,
  
    /**
     * مشاهدة المخازن
     */
    ViewInventories = 18,
  
    /**
     * إضافة / تعديل /    المخازن
     */
    AddUpdateInventories = 19,
  
    /**
     * مشاهدة المستخدمين
     */
    ViewUsers = 20,
  
    /**
     * إضافة / تعديل /    المستخدمين
     */
    AddUpdateUsers = 21,
  
    /**
     * تمكين صلاحيات المستخدمين
     */
    EnableUserPrivileges = 22,
  
    /**
     * مشاهدة العمليات
     */
    ViewOperations = 23,
  
    /**
     * الاستعلام في وصل
     */
    WASLInquiries = 24,
  
    /**
     * إدارة العمليات Job
     */
    ManageJobs = 25,
  
    /**
     *  حذف الأساطيل
     */
    DeleteFleets = 26,
  
    /**
     * حذف المجموعات
     */
    //DeleteGroups = 27,
  
    /**
     *  حذف السائقن
     */
    DeleteDrivers = 28,
  
    /**
     * حذف الأجهزة
     */
    DeleteAccounts = 29,
  
    /**
     * حذف المركبات
     */
    DeleteVehicles = 30,
  
    /**
     * حذف Gateway
     */
    DeleteGateways = 31,
  
    /**
     *  حذف المستودعات
     */
    DeleteWarehouses = 32,
  
    /**
     *  حذف المخازن
     */
    DeleteInventories = 33,
  
    /**
     * حذف المستخدمين
     */
    DeleteUsers = 34,
  
    /**
     * مشاهدة الحساسات
     */
    ViewSensors = 149,
  
    /**
     * إضافة/تعديل الحساسات
     */
    AddUpdateSensors = 150,
  
    /**
     * حذف الحساسات
     */
    DeleteSensors = 151,
  
    /**
     * إعدادات النظام
     */
    SystemSettings = 158,
  }