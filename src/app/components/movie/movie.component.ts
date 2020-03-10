import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MoviesService } from './../../services/movies.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  
  movies: any;
  movieResponse: any;
  actorResponse: any;
  searchQuery: string = "";
  searchQuery2: string = "";
  popularMovies: any;
  test: string = "";
  id: string ="";

  constructor(
    MovieService: MoviesService, 
    private http: HttpClient,
    private route: ActivatedRoute,
    private location: Location
    ) { }
  // constructor(private _Activatedroute:ActivatedRoute) {}

  // moreInfo(): void{
  //   console.log(this.test);
  //   console.log(id);
  //   this.http.get('https://api.themoviedb.org/3/movie/' + test + '?api_key=5dec8cabce89ea92e3f95700f52171d5&language=en-US') 
  //   .subscribe((movieResponse) => {
  //     this.movieResponse = movieResponse;
      
  //     console.log(test);
      
  //   })
  // } 

 moreInfo(): void {
  // const id = +this.route.snapshot.paramMap.get('id');
  // this.movieService.moreInfo(id)
  //   .subscribe(hero => this.hero = hero);
  this.id = this.route.snapshot.paramMap.get("movieId")
  this.http.get('https://api.themoviedb.org/3/movie/' + this.id + '?api_key=5dec8cabce89ea92e3f95700f52171d5&language=en-US') 
    .subscribe((movieResponse) => {
      this.movieResponse = movieResponse;
      
  // console.log(movieResponse);
})
 }

  ngOnInit(): void{
    this.moreInfo();
  }

  goBack(): void {
    this.location.back();
  }

  trailer(): void {
    this.http.get('http://api.themoviedb.org/3/movie/' + this.id + '/videos?api_key=5dec8cabce89ea92e3f95700f52171d5') 
    .subscribe((movieResponse) => {
      this.movieResponse = movieResponse;
    console.log(movieResponse);

    // ('https://www.youtube.com/watch?v=' + movieResponse.key) 
  })
}
}