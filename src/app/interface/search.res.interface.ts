import { GoogleBook } from "./google-book.res.interface";

export interface SearchResponse{
    kind:string;
    totalItems:number;
    items:Array<GoogleBook>;

}