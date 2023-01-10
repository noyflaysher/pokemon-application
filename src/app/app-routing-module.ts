import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { SearchComponent } from './search/search.component';
import { LoginActivateService } from './services/login-activate.service';
import { RouteServiceService } from './services/route-service.service';

const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LoginActivateService],
  },
  { path: 'search', component: SearchComponent },
  {
    path: '',
    component: HomePageComponent,
    canActivate: [RouteServiceService],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
