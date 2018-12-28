import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SedeComponent } from './sede.component';
import { ListaEntradaComponent } from './lista-entrada/lista-entrada.component';
import { EntradaComponent } from './entrada/entrada.component';
import { SecurityS } from './guards/security.guard';

const routes: Routes = [
  { path: '', component: SedeComponent,
    children: [
      { path: 'entrada', component: EntradaComponent, canActivate: [SecurityS] },
      { path: 'lista-entrada', component: ListaEntradaComponent, canActivate: [SecurityS] },
  ], canActivate: [SecurityS]},
  { path: '**', redirectTo: 'not-found'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SedeRoutingModule { }
