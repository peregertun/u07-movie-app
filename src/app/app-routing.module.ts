import { MovieComponent } from './components/movie/movie.component';
import { MoviesComponent } from './components/movies/movies.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: MoviesComponent },
  { path: 'movie/:movieId', component: MovieComponent }
  // { path: 'movies/:movieId', component: MoviesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
