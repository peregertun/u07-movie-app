import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

@Component({
  selector: "app-movie",
  templateUrl: "./movie.component.html",
  styleUrls: ["./movie.component.css"],
})
export class MovieComponent implements OnInit {
  private url = "https://api.themoviedb.org/3/movie/";
  private apiKey: string = "5dec8cabce89ea92e3f95700f52171d5&";
  movieResponse: any;
  castResult: any;
  test: string = "";
  id: string = "";
  cast: any;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  moreInfo(): void {
    this.id = this.route.snapshot.paramMap.get("movieId");
    this.http
      .get(
        "https://api.themoviedb.org/3/movie/" +
          this.id +
          "?api_key=" +
          this.apiKey +
          "language=en-US"
      )
      .subscribe((movieResponse) => {
        this.movieResponse = movieResponse;
      });

    this.getCast();
  }

  getCast(): void {
    this.http
      .get(this.url + this.id + "/credits?api_key=" + this.apiKey)
      .subscribe((castResult) => {
        this.castResult = castResult;
      });
  }

  ngOnInit(): void {
    this.moreInfo();
  }

  goBack(): void {
    this.location.back();
  }

  trailer(): void {
    this.http
      .get(
        "http://api.themoviedb.org/3/movie/" +
          this.id +
          "/videos?api_key=" +
          this.apiKey
      )
      .subscribe((movieResponse) => {
        this.movieResponse = movieResponse;
      });
  }
}
