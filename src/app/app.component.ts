import { Component, OnInit } from '@angular/core';
import { MgsServiceService } from './services/mgs-service.service';
import { MgsPersonaje } from './interfaces/mgs-personaje';
import { AuthServiceService } from './auth/services/auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  

  title = 'proyecto_mgs';

  constructor(private authService: AuthServiceService){

  }

  ngOnInit() {
    this.authService.checkAuthenticacion()
    .subscribe(()=> console.log("Finalizada la autenticacion"))
   
  }
}
