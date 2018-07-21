import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, catchError, tap } from 'rxjs/operators'
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class HeroProvider {

  private data: any;

  constructor(private http: HttpClient) { }

  getHeros() {

    return this.data ? of(this.data) as Observable<any> :
      this.http.get("assets/api-response.json")
        .pipe(
          map((res: any) => res.data.results),
          tap((data) => this.data = data),
          catchError((error) => {
            console.error(error);
            return Observable.throw(error("Nao foi possivel buscar os dados dos herois, tente mais tarde"));
          })
        );
  }

}
