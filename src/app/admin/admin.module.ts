import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ReportesComponent } from './reportes/reportes.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from '../material.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AdminComponent,
    ReportesComponent,
    UsuarioComponent,
    EmpleadoComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgbModule.forRoot(),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [AdminComponent]
})
export class AdminModule { }
