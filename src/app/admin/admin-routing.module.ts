import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { ReportesComponent } from './reportes/reportes.component';
import { AuthGuard } from '../auth/auth.guard';
import { EmpleadoComponent } from './empleado/empleado.component';
import { SecurityA } from './guard/security.guard';

const routes: Routes = [
  { path: '', component: AdminComponent,
  children: [
    { path: 'usuario', component: UsuarioComponent, canActivate: [SecurityA] },
    { path: 'reporte', component: ReportesComponent, canActivate: [SecurityA] },
    { path: 'empleado', component: EmpleadoComponent, canActivate: [SecurityA] },
  ], canActivate: [SecurityA]},
  { path: '**', redirectTo: 'not-found'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
