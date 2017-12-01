import { Observable } from 'rxjs';
import { HttpService } from './http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private _jokes: Observable<string[]>;
  imgUrl: string = 'https://i.pinimg.com/736x/57/a5/25/57a5257d9c25bcac2dd8f7884a32f8c1--lunch-notes-chuck-norris.jpg';

  constructor(
    private httpService: HttpService
  ) { }

  ngOnInit() {
    this.httpService.getResponse().subscribe(jokes => {
      this._jokes = jokes;
    });
  }

  get jokes(): Observable<string[]> {
    return this._jokes;
  }

  set jokes(joke: Observable<string[]>) {
    this._jokes = joke;
  }
}