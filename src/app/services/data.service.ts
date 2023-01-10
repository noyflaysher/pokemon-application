import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from '../pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  pokemonSelected=new EventEmitter<Pokemon>();
  typeSelected=new EventEmitter<string>();
  searchName=new EventEmitter<string>();

  pokemons:Pokemon[]=[];
  totalPokemons:number=100;


  constructor(private http:HttpClient) { }

  getPokemons(){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=${this.totalPokemons}/`).subscribe((res:any)=>{
      res.results.forEach(element => {
        this.getPokemon(element.name).subscribe((pokemon:any)=>{
          this.pokemons.push(new Pokemon(pokemon.name,pokemon.sprites.front_default, pokemon.types[0].type.name,pokemon.height,pokemon.stats[0].base_stat,pokemon.stats[1].base_stat));
        });
      });

    })
  }

  getPokemon(name:string){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }
}
