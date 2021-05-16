import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { LoginGuard } from './services/login.guard';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'search', canActivate:[LoginGuard], component: SearchComponent },
  { path: 'wishlist', canActivate:[LoginGuard], component: WishlistComponent },
  { path: '',   redirectTo: '/welcome', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
