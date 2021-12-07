import { LocationStrategy } from '@angular/common';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Pokemon } from '../interface/pokemon';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private apikey: string = '';
  private url: string = 'https://pokeapi.co/api/v2/pokedex/2/';
  public resultado: Pokemon[] = [];
  constructor(private http: HttpClient) {}

  buscar(valor: string = '') {
    valor = valor.trim().toLocaleLowerCase();
  }
  listar(): Observable<Pokemon> {
    return this.http.get<Pokemon>(this.url).pipe(catchError(this.errorHandler));
  }
  errorHandler(error: {
    error: { message: string };
    status: any;
    message: any;
  }) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
  // this.http.get<Pokemon>(`${this.url}`).subscribe((resp: any) => {
  //   console.log(resp);
  //   this.resultado = resp;
  // });
}
