import { Component, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';
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

  logOut() {
    let data = { isLogIn: false };
    localStorage.setItem('isLogIn', JSON.stringify(data));
    this.router.navigate(['/login']);
  }
}
