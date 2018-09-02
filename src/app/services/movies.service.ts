import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class moviesService {

  private moviesUrl = '../../../movies.json';  // URL to web api

  selectedMovie : any;
  Movies : Array<any> = [];
  constructor(private http: HttpClient) { }

  /** GET movies from the server */
  getmovies (): Observable<any[]> {
    return this.http.get<any[]>(this.moviesUrl)
      .pipe(
        tap(movies => {
            console.log('fetched movies', movies);
            this.Movies = movies;
        }),
        catchError(this.handleError('getmovies', []))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a anyService message with the MessageService */
  private log(message: string) {
    console.log(`anyService: ${message}`);
  }
}