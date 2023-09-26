# MonProjet

Visiter: https://pokemons-silk-ten.vercel.app/login

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

### Notes ###

ng generate directive boder-card
ng generate pipe pokemon-type-color 
ng generate component list-pokemon --inline-template=false
ng generate component page-not-found
ng generate module pokemon
ng generate service pokemon/pokemon --dry-run
ng generate service pokemon/pokemon


## LES SERVICES. L'injection de dépendences:

Angular dispose de son propre farmework d'injection. On ne peut pas vraiment développer une app sans cet outil. 

L'injection dépendance est un model de développement ou 'deign pattern' en anglais dans lequel chaque class reçoit ces dépendances d'une source externe plutot qu'on l'a crée elle-meme. 

@Injectable({
  providedIn: 'root'
})
ingecteur racine - 'root' - service est disponible partout

### Fournir un service au niveau d'un module

dans le module:

@NgModule({
   providers: [ExempleService]
})

### Fournir un service au niveau d'un composant

@Component({
    providers: [ExempleService]
})

## Les formulaires
librarie: @angular/forms
Forms module 

Les directives: 
ngForm 
ngModel

### Mettre en place le module Form Module
Dans app.module.ts et example.module.ts
imports: [
    BrowserModule,
    FormsModule,
    ExampleModule,
    AppRoutingModule
  ],


ng generate component pokemon/pokemon-form --dry-run

--inline-template=false - deux fichier séparés

ng generate component pokemon/pokemon-form --inline-template=false
ng generate component pokemon/edit-pokemon --inline-template=false

## Communiquer avec un server distant

https://rxmarbles.com/

programmation réactive = programmation avec des flux de données asynchrones
 les sequences d'évenement - "flux" -поток

 RxJS

## Les requêtes HTTP

API = Interface de programmation

Dans app.module.ts => import { HttpClientModule } from '@angular/common/http'

### Simuler une API
npm install angular-in-memory-web-api --save-dev

1. Simuler une base de donnée. Création d'un service
ng generate service in-memory-data
import { InMemoryDbService } from 'angular-in-memory-web-api'
2.  createDb() { return { POKEMONS }; }
3.  déclarer cette api simulée aupres du rest de l'app:

Dans app.module.ts :
 import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api'
 import { InMemoryDataService } from './in-memory-data.service';

 imports: [HttpClientInMemoryWebApiModule.forRoot(
    InMemoryDataService, { dataEncapsulation: false }
    ),]

3. Requêter un server distant (Les requêtes HTTP)

4. pokemon.service.ts

dans constructor() on utilise le syntax d'injection de dependence constructor(private http: HttpClient) {}

## Récuperer un pokemon à partir de son identifiant (Les requêtes HTTP)

## Consommer des données asynchrones (Les requêtes HTTP)

### Persister les modifications de l'utilisateur

### Créer un composant AddPokemon
ng generate component pokemon/add-pokemon

ng generate component pokemon/search-pokemon --inline-template=false

ng generate component pokemon/loader

## Authentification et sécurité

Guard

https://angular.io/guide/router#milestone-5-route-guards

ng generate guard auth
CanActivate

ng generate service auth

ng generate component login --inline-template=false




