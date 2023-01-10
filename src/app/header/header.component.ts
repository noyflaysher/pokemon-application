import { Component, EventEmitter } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  searchText:string;
  types=['Bug','Dark','Dragon','Electric','Fairy','Fighting','Fire','Flying','Ghost','Grass','Ground','Ice','Normal','Poison','Psychic','Rock','Steel','Water'];
  selected:string=' ';
  selectedValue:string;
  constructor(private dataService:DataService){}


  modelChange(name){
    this.dataService.searchName.emit(name);
    console.log(`name: ${name}`)
  }

  onChange(type){
    this.dataService.typeSelected.emit(type.value);
    console.log(type.value);
    
    // this.selected.emit({type:this.selected,});
  }
}
