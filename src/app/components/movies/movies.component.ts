import { MovieComponent } from './../movie/movie.component';
import { AppModule } from './../../app.module';
import { HttpClient } from '@angular/common/http';
import { MoviesService } from './../../services/movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})

export class MoviesComponent implements OnInit {
  movies: any;
  movieResponse: any;
  actorResponse: any;
  searchQuery: string = "";
  searchQuery2: string = "";
  popularMovies: any;
  // id: string = "";

  constructor(
    private MoviesService: MoviesService, private http: HttpClient
  ) { }

  searchMovie() {
    this.movieResponse = null;
    this.actorResponse = null;
    this.popularMovies = null;
    this.http.get('https://api.themoviedb.org/3/search/movie?api_key=5dec8cabce89ea92e3f95700f52171d5&language=en-US&query=' + this.searchQuery + '&page=1&include_adult=false') 
    .subscribe((movieResponse) => {
      this.movieResponse = movieResponse;
      
      // console.log(movieResponse['results']);
    })
  }

  searchPerson() {
    this.movieResponse = null;
    this.actorResponse = null;
    this.popularMovies = null;
    this.http.get('https://api.themoviedb.org/3/search/person?api_key=5dec8cabce89ea92e3f95700f52171d5&language=en-US&query=' + this.searchQuery + '&page=1&include_adult=false') 
    .subscribe((actorResponse) => {
      this.actorResponse = actorResponse;
      
      // console.log(actorResponse);
      // test = response['results'][0]
    })
  }

  // moreInfo(test: string){
  //   console.log(test);
  //   // console.log(id);
  //   this.http.get('https://api.themoviedb.org/3/movie/' + test + '?api_key=5dec8cabce89ea92e3f95700f52171d5&language=en-US') 
  //   .subscribe((movieResponse) => {
  //     this.movieResponse = movieResponse;
      
  //     // console.log(movieResponse);

  //   })
  // } 

  ngOnInit(): void {
    this.movies = this.MoviesService.getPopularMovies();
    this.movies.subscribe((popularMovies) => {
         this.popularMovies = popularMovies;
        //  console.log(popularMovies);
     })
}

isShowMovies = false;
isShowActors = false;
showMovies() {
  this.isShowMovies = !this.isShowMovies;
}
showActors() {
  this.isShowActors = !this.isShowActors;
}
}