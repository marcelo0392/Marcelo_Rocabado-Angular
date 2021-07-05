import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultasComponent } from './consultas/consultas.component';
import { RespuestaComponent } from './respuesta/respuesta.component';

const routes: Routes = [
  {
    path: '',
    component: ConsultasComponent
  },
  {
    path: 'respuesta',
    component: RespuestaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
