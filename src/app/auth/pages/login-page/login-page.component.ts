import { Component } from '@angular/core';
import { AuthServiceService } from '../../services/auth-service.service';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-login-page',
  standalone: false,
  templateUrl: './login-page.component.html',
  styles: ``
})
export class LoginPageComponent {

  username: string = '';
  password: string = '';

  constructor(private authService: AuthServiceService, private router: Router){

  }

  onLogin():void{
    this.authService.login(this.username, this.password)
    .subscribe( user=>{
        this.router.navigate(['/'])
    })
  }

  playSonidoLogin() {
    const audio = new Audio('sounds/Okay.mp3');
    audio.load(); 
    audio.play();
      
  }

  

}
