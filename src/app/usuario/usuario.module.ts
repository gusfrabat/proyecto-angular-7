import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { VistaComponent } from './vista/vista.component';
import { UsuarioComponent } from './usuario.component';

@NgModule({
  declarations: [VistaComponent, UsuarioComponent],
  imports: [
    CommonModule,
    UsuarioRoutingModule
  ]
})
export class UsuarioModule { }
