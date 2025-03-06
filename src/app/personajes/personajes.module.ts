import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonajesRoutingModule } from './personajes-routing.module';
import { PersonajePageComponent } from './pages/personaje-page/personaje-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';

import { SearchPageComponent } from './pages/search-page/search-page.component';
import { MaterialModule } from '../material/material.module';
import { PersonajeComponentComponent } from './components/personaje-component/personaje-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewPersonajeComponent } from './pages/new-personaje/new-personaje.component';
import { PersonajeImagePipe } from './pipes/personaje-image.pipe';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';


@NgModule({
  declarations: [
    PersonajePageComponent,
    LayoutPageComponent,
    ListPageComponent,
   
    SearchPageComponent,
    PersonajeComponentComponent,
    NewPersonajeComponent,
    PersonajeImagePipe,
    ConfirmDialogComponent
  ],
  imports: [
    CommonModule,
    PersonajesRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PersonajesModule { }
