export enum HttpCode {
    /**
     * تمت العملية بنجاح
     */
    Success = 200,
    /**
     * خطأ في القيم الممررة
     */
    BadRequest = 400,
    /**
     * دخول غير مصرح
     */
    Unauthorized = 401,
    /**
     * البيانات غير موجودة
     */
    NotFound = 404,
    /**
     * حدث خطأ في النظام
     */
    ServerError = 500
  }