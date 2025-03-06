import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MgsPersonaje } from '../../../interfaces/mgs-personaje';
import { MgsServiceService } from '../../../services/mgs-service.service';
import { MatAutocomplete, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-search-page',
  standalone: false,
  templateUrl: './search-page.component.html',
  styles: ``
})
export class SearchPageComponent {



  public inputBuscador = new FormControl('');

  public personajes: MgsPersonaje[] = [];

  public personajeSeleccionado?: MgsPersonaje;

  constructor(private mgsService: MgsServiceService){

  }

  buscarPersonaje(){
    const value = this.inputBuscador.value || '';

    this.mgsService.getSugerencias(value)
    .subscribe(personajes => this.personajes = personajes)
    

    console.log(value);
  }

  onSelectedOption(event: MatAutocompleteSelectedEvent){
    if(!event.option.value){
      this.personajeSeleccionado = undefined;
      return;
    }

    const personaje: MgsPersonaje = event.option.value;
    this.inputBuscador.setValue(personaje.nombre);

    this.personajeSeleccionado = personaje;
  }

  

}
