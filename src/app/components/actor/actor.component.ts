import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

@Component({
  selector: "app-actor",
  templateUrl: "./actor.component.html",
  styleUrls: ["./actor.component.css"]
})
export class ActorComponent implements OnInit {
  apiKey: string = "5dec8cabce89ea92e3f95700f52171d5&";
  actorResponse: any;
  castResult: any;
  test: string = "";
  id: string = "";

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.moreInfo();
  }

  moreInfo(): void {
    this.id = this.route.snapshot.paramMap.get("actorId");
    this.http
      .get(
        "https://api.themoviedb.org/3/person/" +
          this.id +
          "?api_key=" +
          this.apiKey +
          "language=en-US"
      )
      .subscribe(actorResponse => {
        this.actorResponse = actorResponse;
      });
  }
  
  goBack(): void {
    this.location.back();
  }
}
