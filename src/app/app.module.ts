import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { FormsModule } from '@angular/forms';
import { DataService } from './services/data.service';
import { PokemonItemComponent } from './pokemon-list/pokemon-item/pokemon-item.component';
import { PokemonSelectedComponent } from './pokemon-selected/pokemon-selected.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { AppRoutingModule } from './app-routing-module';
import { HomePageComponent } from './home-page/home-page.component';
import { RouteServiceService } from './services/route-service.service';
import { LoginActivateService } from './services/login-activate.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PokemonListComponent,
    PokemonItemComponent,
    PokemonSelectedComponent,
    LoginComponent,
    SearchComponent,
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
  providers: [DataService, RouteServiceService, LoginActivateService],
  bootstrap: [AppComponent],
})
export class AppModule {}
