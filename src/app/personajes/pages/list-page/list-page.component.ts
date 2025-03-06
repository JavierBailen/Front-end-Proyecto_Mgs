import { Component, OnInit } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MgsServiceService } from '../../../services/mgs-service.service';
import { MgsPersonaje } from '../../../interfaces/mgs-personaje';

@Component({
  selector: 'app-list-page',
  standalone: false,
  templateUrl: './list-page.component.html',
  styles: ``,
})
export class ListPageComponent implements OnInit{

  public personajes: MgsPersonaje[] = [];
  public personajeBuscado!: MgsPersonaje;

  constructor(private mgsService: MgsServiceService){

  }

  ngOnInit(): void {
    this.mgsService.getAllPersonajes().subscribe(
      personajes =>{
        this.personajes = personajes;
        
      }
    )
    
  }


  

}
