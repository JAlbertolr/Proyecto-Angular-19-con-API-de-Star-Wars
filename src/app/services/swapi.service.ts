import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SwapiService {
  private apiUrl = 'https://swapi.dev/api/';

  constructor(private http: HttpClient) {}

  getPeople(): Observable<any> {
    return this.http.get(`${this.apiUrl}people/`).pipe(
      catchError((error) => {
        console.error('Error obteniendo personajes:', error);
        return throwError(() => new Error('Error al obtener personajes'));
      })
    );
  }

  getPerson(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}people/${id}/`);
  }

  getStarships(): Observable<any> {
    return this.http.get(`${this.apiUrl}starships/`);
  }

  getStarship(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}starships/${id}/`);
  }
}
