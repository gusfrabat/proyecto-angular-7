import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SedeRoutingModule } from './sede-routing.module';
import { SedeComponent } from './sede.component';
import { EntradaComponent } from './entrada/entrada.component';
import { ListaEntradaComponent } from './lista-entrada/lista-entrada.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SecurityS } from './guards/security.guard';

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
    MaterialModule,
    NgbModule.forRoot(),
  ],
  providers: [SecurityS],
  bootstrap: [SedeComponent]
})
export class SedeModule { }
