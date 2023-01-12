import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginComponent } from './pages/login/login.component';
// import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { HisrotyComponent } from './pages/history/history.component';
import { CanActivateGuard } from './guards/can-activate.guard';
import { MyMapComponent } from './pages/my-map/my-map.component';

const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  { path: 'history', component: HisrotyComponent },
  {
    path: '',
    component: HomePageComponent,
    canActivate: [CanActivateGuard],
  },
  {
    path: 'my-map',
    component: MyMapComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
