import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SedeRoutingModule } from './sede-routing.module';
import { SedeComponent } from './sede.component';
import { EntradaComponent } from './entrada/entrada.component';
import { ListaEntradaComponent } from './lista-entrada/lista-entrada.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SedeComponent,
    EntradaComponent,
    ListaEntradaComponent,
  ],
  imports: [
    CommonModule,
    SedeRoutingModule,
    FormsModule,
  ]
})
export class SedeModule { }
