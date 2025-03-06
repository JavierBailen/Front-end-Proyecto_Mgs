import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserInterface } from '../interfaces/user-interface';
import { catchError, map, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private apiUrl = 'https://backend-proyecto-mgs.onrender.com/api/usuarios/login';
  private user?: UserInterface;

  constructor(private httpClient: HttpClient) { 

  }

  get currentUser(): UserInterface | undefined{
    if(!this.user){
      return undefined;
    }

    return structuredClone(this.user);
  }

  login(username: string, password: string): Observable<any>{
    const body = {username, password};//cuerpo d la peticion
    return this.httpClient.post<any>(`${this.apiUrl}/login`, body)
    .pipe(
        tap(user => this.user = user.data),
        tap(user => localStorage.setItem('token', '77379432A'))
    )
  }

  logout(){
    this.user = undefined;
    localStorage.clear();
  }


  checkAuthenticacion(): Observable<boolean>{
   
    if (!localStorage.getItem('token')) return of(false);
   
    const token = localStorage.getItem('token');

    return this.httpClient.get<UserInterface>(`${ this.apiUrl }/1`)
            .pipe (
              tap ( user => this.user=user),
              map ( user => !!user),
              catchError ( err => of(false))
            )
  }
  
}

