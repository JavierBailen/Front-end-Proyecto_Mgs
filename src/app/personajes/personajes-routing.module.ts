import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';

import { SearchPageComponent } from './pages/search-page/search-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { PersonajePageComponent } from './pages/personaje-page/personaje-page.component';
import { NewPersonajeComponent } from './pages/new-personaje/new-personaje.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      {path: 'new-personaje', component: NewPersonajeComponent},
      {path: 'search', component: SearchPageComponent},
      {path: 'edit/:id', component: NewPersonajeComponent},
      {path: 'list', component: ListPageComponent},
      {path: ':id', component: PersonajePageComponent},
      {path: '**', redirectTo: 'list'}
    ],
    

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonajesRoutingModule { }
