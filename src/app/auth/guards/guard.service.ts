import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanMatch, GuardResult, MaybeAsync, Route, Router, RouterStateSnapshot, UrlSegment } from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuardService  implements CanMatch, CanActivate{

  constructor(private authService: AuthServiceService, private router: Router) { }

  canMatch(route: Route, segments: UrlSegment[]): MaybeAsync<GuardResult> {
    console.log('Can Match');
    console.log({ route, segments});

    return this.checkAuthStatus();///    
  }

  private checkAuthStatus(): boolean | Observable<boolean>{
    return this.authService.checkAuthenticacion()
      .pipe(
        tap( isAuthenticated => console.log('Autenticado: ', isAuthenticated)),
        tap( isAuthenticated => {
          if ( ! isAuthenticated ){
            this.router.navigate(['./auth/login'])
          }})
      )
  }

 
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    console.log('Can Activate');
    console.log({ route, state});

    return this.checkAuthStatus();
  }


  
}
