import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  search1: any = '';
  search2: any = '';
  search3: any = '';
  search4: any = '';
  search5: any = '';

  ngOnInit(): void {
    this.search1 = window.localStorage.getItem('search1')
      ? JSON.parse(window.localStorage.getItem('search1'))
      : '';
    this.search2 = window.localStorage.getItem('search1')
      ? JSON.parse(window.localStorage.getItem('search2'))
      : '';
    this.search3 = window.localStorage.getItem('search1')
      ? JSON.parse(window.localStorage.getItem('search3'))
      : '';
    this.search4 = window.localStorage.getItem('search1')
      ? JSON.parse(window.localStorage.getItem('search4'))
      : '';
    this.search5 = window.localStorage.getItem('search1')
      ? JSON.parse(window.localStorage.getItem('search5'))
      : '';
  }
}
