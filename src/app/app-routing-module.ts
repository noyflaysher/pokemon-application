import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginComponent } from './pages/login/login.component';
import { HisrotyComponent } from './pages/history/history.component';
import { CanActivateGuard } from './guards/can-activate.guard';
import { MyMapComponent } from './pages/my-map/my-map.component';
import { CanActivate2Guard } from './guards/can-activate2.guard';

const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [CanActivate2Guard],
  },
  { path: 'history', component: HisrotyComponent },
  {
    path: 'My-Map',
    component: MyMapComponent,
  },
  {
    path: '',
    component: HomePageComponent,
    canActivate: [CanActivateGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
