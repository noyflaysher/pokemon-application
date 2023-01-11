import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { FormsModule } from '@angular/forms';
import { DataService } from './services/data.service';
import { PokemonItemComponent } from './components/pokemon-list/pokemon-item/pokemon-item.component';
import { PokemonSelectedComponent } from './components/pokemon-selected/pokemon-selected.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { LoginComponent } from './pages/login/login.component';
import { HisrotyComponent } from './pages/history/history.component';
import { AppRoutingModule } from './app-routing-module';
import { HomePageComponent } from './pages/home-page/home-page.component';

import { CanActivateGuard } from './guards/can-activate.guard';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PokemonListComponent,
    PokemonItemComponent,
    PokemonSelectedComponent,
    LoginComponent,
    HisrotyComponent,
    HomePageComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    Ng2SearchPipeModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatNativeDateModule,
    NgxPaginationModule,
    AppRoutingModule,
  ],
  providers: [DataService, CanActivateGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
