import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ReportesComponent } from './reportes/reportes.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { EmpleadoComponent } from './empleado/empleado.component';


@NgModule({
  declarations: [
    AdminComponent,
    ReportesComponent,
    UsuarioComponent,
    EmpleadoComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  bootstrap: [AdminComponent]
})
export class AdminModule { }
