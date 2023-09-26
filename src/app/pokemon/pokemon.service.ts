import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { Observable, catchError, tap, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()

export class PokemonService {

  constructor(private http: HttpClient) {}

  getPokemonList(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>('api/pokemons').pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, []))
    );
  }

  getPokemonById(pokemonId: number): Observable<Pokemon|undefined> {
    return this.http.get<Pokemon>(`api/pokemons/${pokemonId}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, undefined))
    );
  }

  searchPokemonList(term: string): Observable<Pokemon[]> {
    if(term.length <=1) {
      return of([]);
    }

    return this.http.get<Pokemon[]>(`api/pokemons/?name=${term}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, []))
    );
  }

  //  Persister les modifications de l'utilisateur
  updatePokemon(pokemon: Pokemon): Observable<null> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    return this.http.put('api/pokemons', pokemon, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    );
  }

  addPokemon(pokemon: Pokemon): Observable<Pokemon> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    return this.http.post<Pokemon>('api/pokemons', pokemon, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    );
  }

  deletePokemonById(pokemonId: number): Observable<null> {
    
    return this.http.delete(`api/pokemons/${pokemonId}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, undefined))
    )
  }

  private log(response: any) {
    console.table(response)
  }

  private handleError(error: Error, errorValue: any) {
    console.error(error);
    return of(errorValue);
  }

  getPokemonTypeListe(): string[] {
    return ['Plante', 
            'Feu', 
            'Eau', 
            'Insecte', 
            'Normal', 
            'Electric', 
            'Poison', 
            'Fée', 'Vol', 
            'Combat', 
            'Psy'
          ];
  }

}

// import { POKEMONS } from './mock-pokemon-list';

// getPokemonList(): Pokemon[] {
  //   return POKEMONS;
  // }

  // On type un tableau Pokemon[] cela en (flux) Observable => Observable<Pokemon[]>
  // Maintenent on va retourner un flux (поток) aui contient un Pokemon[]
  // un  operateur pipe() pour definir ce qu'on va faire en plus de la requête: loger la réponse et entercepter les erreurs => après on peut rendre à disposition cet objet <Pokemon[]> quand le composants vont l'appeler et eux ils vont pouvoir subscribe pour récuperer les données qui sont contenues dans ce flux.

  // getPokemonById(pokemonId: number): Pokemon|undefined {
  //   return POKEMONS.find(pokemon => pokemon.id == pokemonId);
  // }

