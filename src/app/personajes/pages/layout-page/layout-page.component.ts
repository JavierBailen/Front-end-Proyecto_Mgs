import { Component } from '@angular/core';
import { AuthServiceService } from '../../../auth/services/auth-service.service';
import { UserInterface } from '../../../auth/interfaces/user-interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout-page',
  standalone: false,
  templateUrl: './layout-page.component.html',
  styles: ``
})
export class LayoutPageComponent {
  public sidebarItems = [
    {label:'Listado', icon: 'label', url:'./list'},
    {label:'Buscar', icon: 'search', url:'./search'},
    {label: 'Añadir', icon: 'add', url: './new-personaje'}
  ]

  constructor(private authService: AuthServiceService, private router: Router){

  }

  onLogout(){
    this.authService.logout();
    this.router.navigate(['/auth/'])
  }

  get user(): UserInterface | undefined{
    return this.authService.currentUser;
  }

  playSonidoLogout(){
    const audio = new Audio('sounds/GameOver.mp3');
    audio.load(); 
    audio.play();
  }

}
