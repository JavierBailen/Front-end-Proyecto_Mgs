import { Component, OnInit } from '@angular/core';
import { MgsServiceService } from '../../../services/mgs-service.service';
import { MgsPersonaje } from '../../../interfaces/mgs-personaje';
import { ActivatedRoute, Router } from '@angular/router';
import { delay, switchMap } from 'rxjs';

@Component({
  selector: 'app-personaje-page',
  standalone: false,
  templateUrl: './personaje-page.component.html',
  styles: ``
})
export class PersonajePageComponent implements OnInit{

  public personajeBuscado!: MgsPersonaje;
  

  constructor(private mgsService: MgsServiceService, private activatedRoute: ActivatedRoute, private router: Router){

  }

  
  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        delay(3000),
        switchMap(( { id } ) => this.mgsService.getPersonajeById( id ))
      )
      .subscribe( personaje=> {
        console.log(personaje)
        if (!personaje )return this.router.navigate([ '/personajes/list' ]);
        this.personajeBuscado = personaje;
        
        return;
      })
  }

  golist(){
    this.router.navigateByUrl('personajes/list');
  }

  /** 
  recibirPersonaje(nombrePersonajeBuscado:string){
    this.personajeNombre = nombrePersonajeBuscado;

    this.mgsService.getOnePersonaje(nombrePersonajeBuscado).subscribe((personaje)=>{
      console.log(personaje);
      this.personajeBuscado = personaje;
    })
  }
    */

  

}
