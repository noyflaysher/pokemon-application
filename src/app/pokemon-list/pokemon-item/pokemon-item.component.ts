import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { formatDate } from '@angular/common';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.scss'],
  providers: [DatePipe],
})
export class PokemonItemComponent implements OnInit {
  @Input() pokemon: {
    name: string;
    img: string;
    type: string;
    height: string;
    health: string;
    attackPower: string;
  };
  searchNameChoose: string = '';
  type: string = '';
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.searchName.subscribe((name) => {
      this.searchNameChoose = name.toLowerCase();
    });
    this.dataService.typeSelected.subscribe((type) => {
      this.type = type.toLowerCase();
    });
  }

  onSelected() {
    this.dataService.pokemonSelected.emit(this.pokemon);
  }
}
