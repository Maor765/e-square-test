import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  selectedBook;

  constructor(
    public appService: AppService) { }

  ngOnInit(): void {
  }

  remove(wishBook){
    const found =  this.appService.wishList.findIndex(book => book.id ===wishBook.id);
    this.appService.wishList.splice(found, 1);

  }

}
