import { Observable } from "rxjs";
import { IMovie } from "../movie";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class MoviesService {
  private url = "https://api.themoviedb.org/3/";
  private apiKey = "5dec8cabce89ea92e3f95700f52171d5&";

  constructor(private http: HttpClient) {}

  getPopularMovies(): Observable<IMovie[]> {
    return this.http.get<IMovie[]>(
      this.url +
        "movie/top_rated?api_key=" +
        this.apiKey +
        "language=en-US&page=1"
    );
  }
}
