import { Component, OnInit } from '@angular/core';
import {
  Pokemon,
  Description,
  PokemonEntry,
  Region,
} from '../interface/pokemon';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent implements OnInit {
  constructor(private pokemonService: PokemonService) {}
  public resultado: Pokemon | undefined;
  pokemon: PokemonEntry[] = [];
  ngOnInit(): void {
    this.pokemonService.listar().subscribe((data: Pokemon) => {
      this.resultado = data;
      this.pokemon = data.pokemon_entries;
      console.log(this.pokemon);
    });
  }
}
