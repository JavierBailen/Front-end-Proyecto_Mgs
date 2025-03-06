import { Component, Input } from '@angular/core';
import { MgsPersonaje } from '../../../interfaces/mgs-personaje';

@Component({
  selector: 'app-personaje-component',
  standalone: false,
  templateUrl: './personaje-component.component.html',
  styleUrl: './personaje-component.component.css'
})
export class PersonajeComponentComponent {

  @Input()
  public personaje!: MgsPersonaje;

  

}
