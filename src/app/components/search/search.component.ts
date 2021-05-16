import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LocalStorageKey } from 'src/app/enums/local-storage-key.enum';
import { SearchResponse } from 'src/app/interface/search.res.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  username:string = '';
  search:string = '';
  url:string = 'https://www.googleapis.com/books/v1/volumes?q=';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.username = localStorage.getItem(LocalStorageKey.username) || '';

  }

  onSearch(){
    this.http.get<any>(`${this.url}${this.search}`).subscribe(
      (res: SearchResponse) =>{
        console.log(res)
      }
    )
  }

}
