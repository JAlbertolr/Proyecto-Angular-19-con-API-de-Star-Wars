import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { CharacterListComponent } from './app/components/character-list/character-list.component';
import { StarshipListComponent } from './app/components/starship-list/starship-list.component';
import { CharacterDetailComponent } from './app/components/character-detail/character-detail.component';
import { StarshipDetailComponent } from './app/components/starship-detail/starship-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'characters', pathMatch: 'full' }, // Redirige a la lista de personajes por defecto
  { path: 'characters', component: CharacterListComponent },
  { path: 'starships', component: StarshipListComponent },
  { path: 'character/:id', component: CharacterDetailComponent },
  { path: 'starship/:id', component: StarshipDetailComponent },
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes),provideHttpClient()],
});



