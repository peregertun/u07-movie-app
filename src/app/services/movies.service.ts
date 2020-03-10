import { MoviesComponent } from '../components/movies/movies.component';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Component } from "@angular/core";

// import { Observable } from "rxjs/Rx";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(
    private http: HttpClient
  ) { }

  // searchMovie() {
  //   return this.http.get('https://api.themoviedb.org/3/search/movie?api_key=5dec8cabce89ea92e3f95700f52171d5&language=en-US&query=' + this.searchQuery + '&page=1&include_adult=false')
  // }

  getPopularMovies() {
    return this.http.get('https://api.themoviedb.org/3/movie/top_rated?api_key=5dec8cabce89ea92e3f95700f52171d5&language=en-US&page=1')
  }
}

 