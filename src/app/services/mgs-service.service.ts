import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { MgsPersonaje } from '../interfaces/mgs-personaje';

@Injectable({
  providedIn: 'root'
})
export class MgsServiceService {

  private apiUrl = 'https://backend-proyecto-mgs.onrender.com/api/personajes';

  constructor(private http: HttpClient) {

   }

   getAllPersonajes(): Observable<MgsPersonaje[]> {
    return this.http.get<{status: string, data: MgsPersonaje[]}>(`${this.apiUrl}`).pipe(
      map(response => response.data) 
    );
  }


  getPersonajeById(id: string): Observable<MgsPersonaje | undefined> {
    return this.http.get<{ status: string; data: MgsPersonaje }>(`${this.apiUrl}/${id}`)
      .pipe(
        map(response => response.data), // xtrae solo data (personaje)
        catchError(error => {
          console.error('Error obteniendo el personaje:', error);
          return of(undefined);
        })
      );
  }


  getSugerencias(query:string): Observable<MgsPersonaje[]>{
    return this.http.get<{status: string, data: MgsPersonaje[]}>(`${this.apiUrl}?nombre=${query}&_limit=6`)
    .pipe(
      map(response => response.data)
    )
  }

  addPersonaje(nuevoPersonaje: MgsPersonaje) : Observable<MgsPersonaje>{
    return this.http.post<MgsPersonaje>(`${this.apiUrl}`, nuevoPersonaje);
  }

  updatePersonaje(personaje: MgsPersonaje): Observable<MgsPersonaje>{
    if(!personaje.id){
      throw Error('ID de de personaje requerido');
    }

    return this.http.patch<MgsPersonaje>(`${this.apiUrl}/${personaje.id}`, personaje);
  }

  deletePersonajeById(id:string) :Observable<boolean>{
    return this.http.delete(`${this.apiUrl}/${id}`)
        .pipe(
          map(resp=>true),
          catchError (err=> of(false))
        )
  }
  

  
  

}
