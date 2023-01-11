import { Component, OnInit } from '@angular/core';
import { NgControl } from '@angular/forms';
import { Ng2SearchPipe, Ng2SearchPipeModule } from 'ng2-search-filter';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'pokemon-app';
  isSelected: boolean = false;

  constructor(private dataService: DataService) {}

  // ngOnInit(): void {
  //   let data = { isLogIn: false };
  //   localStorage.setItem('isLogIn', JSON.stringify(data));
  // }
}
