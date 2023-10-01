import { BaseError } from "../response/error.response";

export interface TypeError extends BaseError {
    path: string;
    value: any; 
    code: number;
    name: string;
}