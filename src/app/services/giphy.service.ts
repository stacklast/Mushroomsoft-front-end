import { Injectable } from '@angular/core';
import { IGiphy } from '../interfaces/giphy.module';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GiphyService {

  private gyphys!: IGiphy;

  constructor( private http: HttpClient) { }

  getGiphyByCategory( category: string ): Observable<IGiphy> {
    if (this.gyphys) {
      return of(this.gyphys);
    }
    return this.http.get<IGiphy>( `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=hx8ngPDZJp5IJrMaO2FmzVL0Va3DyD1D`)
      .pipe( tap( (gyphys) => this.gyphys = gyphys ));
  }

  async getGiphyByCategoryAsync(category: string) {
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=hx8ngPDZJp5IJrMaO2FmzVL0Va3DyD1D`;
    const response = await fetch( url );
    const gifs:IGiphy = await response.json();
    return gifs;
  }
}
