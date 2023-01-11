import { Component, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { DatePipe } from '@angular/common';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [DatePipe],
})
export class HeaderComponent {
  searchText: string;
  index: number = 0;
  myDate: any;
  search: any = '';
  types = [
    'Bug',
    'Dark',
    'Dragon',
    'Electric',
    'Fairy',
    'Fighting',
    'Fire',
    'Flying',
    'Ghost',
    'Grass',
    'Ground',
    'Ice',
    'Normal',
    'Poison',
    'Psychic',
    'Rock',
    'Steel',
    'Water',
  ];
  selected: string = ' ';
  selectedValue: string;
  constructor(
    private dataService: DataService,
    private router: Router,
    private datePipe: DatePipe
  ) {}

  modelChange(name) {
    this.dataService.searchName.emit(name);
    this.search = name;
    // let data = {
    //   value: name,
    //   date: formatDate(new Date(), 'yyyy/MM/dd', 'en').toString(),
    // };
    // localStorage.setItem(
    //   `search${(this.index++ % 5) + 1}`,
    //   JSON.stringify(data)
    // );
  }

  onClick() {
    let data = {
      value: this.search,
      date: formatDate(new Date(), 'yyyy/MM/dd', 'en').toString(),
    };

    localStorage.setItem(
      `search${(this.dataService.searchindex % 5) + 1}`,
      JSON.stringify(data)
    );
    this.dataService.searchindex = this.dataService.searchindex + 1;
  }

  onChange(type) {
    this.dataService.typeSelected.emit(type.value);
  }

  logOut() {
    let data = { isLogIn: false };
    localStorage.setItem('isLogIn', JSON.stringify(data));
    // localStorage.removeItem('search1');
    // localStorage.removeItem('search2');
    // localStorage.removeItem('search3');
    // localStorage.removeItem('search4');
    // localStorage.removeItem('search5');
    this.router.navigate(['/login']);
  }
}
