import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MoviesComponent }   from './components/movies/movies.component';
import { MovieComponent }   from './components/movie/movie.component';

const routes: Routes = [
  { path: '', redirectTo: '/movies', pathMatch: 'full' },
  { path: 'movies', component: MoviesComponent },
  { path: 'movie', component: MovieComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}