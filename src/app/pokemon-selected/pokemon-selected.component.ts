import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon.model';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-pokemon-selected',
  templateUrl: './pokemon-selected.component.html',
  styleUrls: ['./pokemon-selected.component.scss']
})
export class PokemonSelectedComponent implements OnInit{
  selectedPokemon:Pokemon;


  constructor(private dataService:DataService){}

  ngOnInit(): void {
    this.dataService.pokemonSelected.subscribe((pokemon)=>{
      this.selectedPokemon=pokemon;
    })
  }

  close(){
    this.selectedPokemon=null;
  }

}
