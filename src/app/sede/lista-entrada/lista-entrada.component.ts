import { Component, OnInit, ViewChild } from '@angular/core';
import { EntradaService } from 'src/app/services/entrada.service';
import { GLOBAL } from 'src/app/services/global';
import { Entrada } from 'src/app/models/entrada';
import { EntradaPSede } from 'src/app/models/enporsede';
import { EntradaS } from 'src/app/models/entradaS';


@Component({
  selector: 'app-lista-entrada',
  templateUrl: './lista-entrada.component.html',
  styleUrls: ['./lista-entrada.component.css'],
  providers: [EntradaService]
})
export class ListaEntradaComponent implements OnInit {
  url: string;
  entradas: Entrada;
  putamalparida: EntradaPSede;
  userlog: EntradaPSede;
  EntU: EntradaS;
  constructor(
    private entradaService: EntradaService
  ) {
    this.url = GLOBAL.url;
    this.EntU = new EntradaS;
    this.userlog = JSON.parse(sessionStorage.getItem('usuario'));
    console.log(this.userlog.id_sede);
   }
  ngOnInit() {
    this.getEntrada();
  }
  getEntrada() {
    this.EntU.id_sede = this.userlog.id_sede;
    this.entradaService.GetEntrada(this.EntU).subscribe(Response => {
      if (Response.code === 200) {
        this.entradas = Response.data;
      }
    });
  }

}

