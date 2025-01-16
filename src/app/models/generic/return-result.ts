import { HttpCode } from '../enums/http-code';

export class ReturnResult<T> {
  isSuccess: boolean;
  httpCode: HttpCode;
  data?: T  | null;
  errorList?: string[];
  src: string;
  companyName: string;

  constructor() {
    this.isSuccess = true;
    this.httpCode = HttpCode.Success; 
    this.data = null;
    //this.errorList = null;
    this.src = "";
    this.companyName = "";
  }

  success(data: T, src: string, companyName: string): void {
    this.isSuccess = true;
    this.httpCode = HttpCode.Success;
    this.data = data;
    this.src = src;
    this.companyName = companyName;
  }

  serverError(error: string): void {
    this.isSuccess = false;
    this.httpCode = HttpCode.ServerError;
    this.errorList?.push(error);
  }

  serverErrorList(errors: string[]): void {
    this.isSuccess = false;
    this.httpCode = HttpCode.ServerError;
    this.errorList = errors;
  }

  defaultNotFound(): void {
    this.isSuccess = false;
    this.httpCode = HttpCode.NotFound;
    this.errorList?.push('لا يوجد بيانات');
  }

  notFound(error: string): void {
    this.isSuccess = false;
    this.httpCode = HttpCode.NotFound;
    this.errorList?.push(error);
  }

  notFoundList(errors: string[]): void {
    this.isSuccess = false;
    this.httpCode = HttpCode.NotFound;
    this.errorList = errors;
  }

  badRequestList(errors: string[]): void {
    this.isSuccess = false;
    this.httpCode = HttpCode.BadRequest;
    this.errorList = errors;
  }

  badRequest(error: string): void {
    this.isSuccess = false;
    this.httpCode = HttpCode.BadRequest;
    this.errorList?.push(error);
  }
}