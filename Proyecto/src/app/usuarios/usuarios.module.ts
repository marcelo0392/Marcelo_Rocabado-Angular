import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosComponent } from './usuarios.component';
import { ConsultasComponent } from './consultas/consultas.component';
import { FooterComponent } from './footer/footer.component';
import { RespuestaComponent } from './respuesta/respuesta.component';


@NgModule({
  declarations: [
    UsuariosComponent,
    ConsultasComponent,
    FooterComponent,
    RespuestaComponent
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule
  ]
})
export class UsuariosModule { }
