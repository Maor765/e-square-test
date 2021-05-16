import { Component, OnInit, OnDestroy } from '@angular/core';
import { LocalStorageKey } from 'src/app/enums/local-storage-key.enum';
import { AppService } from 'src/app/services/app.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit,OnDestroy {

  username:string;
  search:string;
  selectedBook = null;
  books:any[]=[];
  displayDialog = false;
  subscription: Subscription;
  totalRecords: number;

  constructor(
    private appService: AppService) { }

  ngOnDestroy(): void {
   this.subscription?.unsubscribe();
  }

  ngOnInit(): void {
    this.search = this.appService.q;
    this.username = localStorage.getItem(LocalStorageKey.username) || '';
    this.subscription = this.appService.dataStorage.subscribe(res => {
      this.books = res?.items;
      this.totalRecords = res?.totalItems;
    });
  }

  onSearch(){
    if(this.search===''){
      return;
    }
    
    this.appService.search(this.search, 0);
  }

  bookClick(){
    this.displayDialog = true;
  }

  addToWhishList(){
    const found =  this.appService.wishList.findIndex(book => book.id ===this.selectedBook.id);
    if(found === -1){
      this.appService.wishList.push(this.selectedBook);
    }
  }

  paginate($event){
    // console.log($event)
    this.appService.search(this.search, $event.page);
  }

}
