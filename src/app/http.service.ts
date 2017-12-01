import { IJoke } from './joke.interface';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/pluck';
import 'rxjs/add/operator/pairwise';
import { Injectable } from '@angular/core';

@Injectable()
export class HttpService {

  url = 'https://api.chucknorris.io/jokes/random';

  constructor(
    private http: HttpClient
  ) { }

  getResponse(): Observable<any> {
    return Observable
      .timer(0, 6000)
      .switchMap(x => this.http.get(this.url))
      .pluck('value')
      .pairwise();
  }
}
