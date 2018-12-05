import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SedeComponent } from './sede.component';
import { ListaEntradaComponent } from './lista-entrada/lista-entrada.component';
import { EntradaComponent } from './entrada/entrada.component';

const routes: Routes = [
  { path: '', component: SedeComponent,
    children: [
      { path: 'entrada', component: EntradaComponent },
      { path: 'lista-entrada', component: ListaEntradaComponent },
  ]},
  { path: '**', redirectTo: 'not-found'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SedeRoutingModule { }
