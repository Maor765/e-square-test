import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { SearchComponent } from './components/search/search.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';


import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    SearchComponent,
    WishlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    InputTextModule,
    FormsModule,
    ButtonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
