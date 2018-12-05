import { Component, OnInit } from '@angular/core';
import { EntradaService } from 'src/app/services/entrada.service';
import { GLOBAL } from 'src/app/services/global';
import { Entrada } from 'src/app/models/entrada';

@Component({
  selector: 'app-lista-entrada',
  templateUrl: './lista-entrada.component.html',
  styleUrls: ['./lista-entrada.component.css'],
  providers: [EntradaService]
})
export class ListaEntradaComponent implements OnInit {

  url: string;
  entradas: Entrada;

  constructor(
    private entradaService: EntradaService
  ) {
    this.url = GLOBAL.url;
   }

   ngOnInit() {
    this.getEntrada();
  }

  getEntrada() {
    this.entradaService.getEntrada().subscribe(result => {
      if (result.code === 200) {
        this.entradas = result.data;
      } else {
        console.log(result);
      }
    },
    error => {
      console.log(error);
    });
  }
}
