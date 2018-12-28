import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { VistaComponent } from './vista/vista.component';
import { UsuarioComponent } from './usuario.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from '../material.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PermisoComponent } from './permiso/permiso.component';

@NgModule({
  declarations: [
    VistaComponent,
    UsuarioComponent,
    PermisoComponent
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    NgbModule.forRoot(),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [UsuarioComponent]
})
export class UsuarioModule { }
