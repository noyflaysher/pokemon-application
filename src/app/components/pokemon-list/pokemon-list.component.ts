import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../../pokemon.model';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit {
  pokemons: Pokemon[] = [];
  totalPokemons: number;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getPokemonsArray();

    this.pokemons = this.dataService.pokemons;
    this.totalPokemons = this.dataService.totalPokemons;
  }

  getPokemonsArray() {
    this.dataService.pokemons = [];
    this.dataService.getPokemons();
    // this.dataService.removeDuplicatePokemons(this.pokemons);
  }
}
