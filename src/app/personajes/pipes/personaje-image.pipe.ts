import { Pipe, PipeTransform } from '@angular/core';
import { MgsPersonaje } from '../../interfaces/mgs-personaje';

@Pipe({
  name: 'personajeImage',
  standalone: false
})
export class PersonajeImagePipe implements PipeTransform {

  transform(personaje: MgsPersonaje): any{
    if(!personaje || !personaje.imagen){
      return "no-image.png";

    }

    if(personaje.imagen){
      return personaje.imagen;
    }

    
  }

}
