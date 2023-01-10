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
    let data = {
      value: name,
      date: formatDate(new Date(), 'yyyy/MM/dd', 'en').toString(),
    };
    localStorage.setItem(
      `search${(this.index++ % 5) + 1}`,
      JSON.stringify(data)
    );

    // console.log(formatDate(new Date(), 'yyyy/MM/dd', 'en'));
    // this.myDate = Date.now();
    // console.log(this.myDate);
    // localStorage.setItem(
    //   `search${(this.index++ % 5) + 1}`,
    //   this.datePipe.transform(this.myDate, 'yyyy-MM-dd')
    // );
    console.log(`name: ${name}`);
  }

  onChange(type) {
    this.dataService.typeSelected.emit(type.value);
    console.log(type.value);

    // this.selected.emit({type:this.selected,});
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
