import { HttpClient } from "@angular/common/http";
import { MoviesService } from "../../services/movies.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-movies",
  templateUrl: "./movies.component.html",
  styleUrls: ["./movies.component.css"]
})
export class MoviesComponent implements OnInit {
  apiKey: string = "5dec8cabce89ea92e3f95700f52171d5&";
  movies: any;
  movieResponse: any;
  actorResponse: any;
  searchQuery: string = "";
  popularMovies: any;

  constructor(private MoviesService: MoviesService, private http: HttpClient) {}

  clear() {
    this.movieResponse = null;
    this.actorResponse = null;
    this.popularMovies = null;
  }

  searchMovie() {
    this.clear();
    this.http
      .get(
        "https://api.themoviedb.org/3/search/movie?api_key=" +
          this.apiKey +
          "language=en-US&query=" +
          this.searchQuery +
          "&page=1&include_adult=false"
      )
      .subscribe(movieResponse => {
        this.movieResponse = movieResponse;
      });
  }

  searchPerson() {
    this.clear();
    this.http
      .get(
        "https://api.themoviedb.org/3/search/person?api_key=" +
          this.apiKey +
          "language=en-US&query=" +
          this.searchQuery +
          "&page=1&include_adult=false"
      )
      .subscribe(actorResponse => {
        this.actorResponse = actorResponse;
      });
  }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(): void {
    this.MoviesService.getPopularMovies().subscribe(popularMovies => {
      this.popularMovies = popularMovies;
    });
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
