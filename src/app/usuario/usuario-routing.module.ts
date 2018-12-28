import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioComponent } from './usuario.component';
import { VistaComponent } from './vista/vista.component';
import { PermisoComponent } from './permiso/permiso.component';

const routes: Routes = [
  { path: '', component: UsuarioComponent,
  children: [
    { path: 'vista', component: VistaComponent },
    { path: 'permiso', component: PermisoComponent}
  ]},
  { path: '**', redirectTo: 'not-found'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
