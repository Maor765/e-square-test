import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageKey } from './enums/local-storage-key.enum';
import { LoginService } from './services/login.service';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  isLogin:boolean = false;
  items: MenuItem[] = [];

  constructor(
    private router: Router ,
    private loginService:LoginService ) {}

  ngOnInit(): void {
    
    if(localStorage.getItem(LocalStorageKey.username) !== null){
      this.isLogin = true;
      this.router.navigate(['./search']);
    } 

    this.loginService.isLogin.subscribe(res=> this.isLogin = res);

    this.items = [
      {label: 'Search', icon: 'pi pi-fw pi-home',routerLink:  'search'},
      {label: 'Wishlist', icon: 'pi pi-fw pi-cog',routerLink:'wishlist'},
      {
        label:'Logout',
        icon:'pi pi-fw pi-power-off', command: () => this.logout(),
    }
  ];
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['./welcome']);
    this.loginService.isLogin.next(false);
  }

}
