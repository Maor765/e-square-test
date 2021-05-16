import { Injectable } from '@angular/core';
import { SearchResponse } from '../interface/search.res.interface';
import { HttpClient } from '@angular/common/http';
import { Subject, BehaviorSubject } from 'rxjs';
import { GoogleBook } from '../interface/google-book.res.interface';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  wishList = [];
  url:string = 'https://www.googleapis.com/books/v1/volumes?maxResults=20&q=';
  q;

  dataStorage = new BehaviorSubject<SearchResponse>(null)

  constructor(    
    private http: HttpClient    ) { }


  search(search, startIndex){
    this.q=search;
    this.http.get<any>(`${this.url}${search}&startIndex=${startIndex}`).subscribe(
      (res: SearchResponse) =>{
        // console.log(res)
        this.dataStorage.next(res);
      }
    )
  }
}
