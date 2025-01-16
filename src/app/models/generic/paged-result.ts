

export interface PagedResult<T>{

    list?:T | null | undefined;
    totalRecords:number | null | undefined;
    companyName:string  | null | undefined;
    Src:string | null | undefined;

}