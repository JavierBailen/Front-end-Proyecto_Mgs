import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MgsServiceService } from '../../../services/mgs-service.service';
import { MgsPersonaje } from '../../../interfaces/mgs-personaje';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-new-personaje',
  standalone: false,
  templateUrl: './new-personaje.component.html',
  styles: ``
})
export class NewPersonajeComponent implements OnInit{


  constructor(private msgService: MgsServiceService,private activatedRoute: ActivatedRoute, private router: Router, private dialog: MatDialog){

  }

  ngOnInit(): void {
    if (!this.router.url.includes('edit')) return;
   
    this.activatedRoute.params
      .pipe(
        switchMap ( ({id}) => this.msgService.getPersonajeById( id ))
        
      ).subscribe ( personaje => {
        if ( !personaje ) return this.router.navigateByUrl('/');
      
        this.personajeForm.reset ( personaje );
        
        return;
      })
  }


  public personajeForm = new FormGroup({
    id: new FormControl(''),
    nombre: new FormControl(''),
    descripcion: new FormControl(''),
    imagen: new FormControl(''),

  })

  


  onSubmit():void {

    if(this.personajeForm.invalid){
      return;
    }

    const personaje = this.currentPersonaje;

    if(personaje.id){

      this.msgService.updatePersonaje(personaje)
      .subscribe(()=>{
        console.log("Updated")
      })

    }else{
      this.msgService.addPersonaje(personaje)
      .subscribe(personaje =>{

      })
    }

   

    
   
  }

  //Este metodo lo que hace es devolver un mgsPersonaje a partir de los datos del formulario
  get currentPersonaje(): MgsPersonaje{
    const personaje = this.personajeForm.value as MgsPersonaje;

    return personaje;
  }

  onDeletePersonaje(){
    if(!this.currentPersonaje.id){
      throw Error('Id de personaje requerido')
    }
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {name: this.personajeForm.value}
    });

    dialogRef.afterClosed().subscribe(result =>{
      if(!result){
        return;
      }
      this.msgService.deletePersonajeById(this.currentPersonaje.id)
        .subscribe( wasDeleted =>{
          if(wasDeleted){
            this.router.navigate(['personajes/list'])
          }
        })
      
    })
  }


  playSonido() {
    const audio = new Audio('sounds/Alert.mp3');
    audio.load(); 
    audio.play();
      
  }

  


}
