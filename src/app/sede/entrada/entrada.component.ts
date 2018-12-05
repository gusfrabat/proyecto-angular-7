import { Component, OnInit } from '@angular/core';
import { Entrada } from 'src/app/models/entrada';
import { ActivatedRoute, Router } from '@angular/router';
import { EntradaService } from 'src/app/services/entrada.service';

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.css'],
  providers: [EntradaService]
})
export class EntradaComponent implements OnInit {

  mostrarnav: boolean;
  entrada: boolean;
  Ent: Entrada;
  error: boolean;
  errorMessage: string;

  constructor(
    private sEntrada: EntradaService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.Ent = new Entrada;
  }

  ngOnInit() {
    this.entrada = true;
  }

  OnSubmit() {
    this.addEntradaUsu();
  }

  addEntradaUsu() {
    this.sEntrada.addEntrada(this.Ent).subscribe(
      response => {
        if (response.code === 200) {
          this.Ent = new Entrada;
          this.error = false;
        } else {
          console.log(response);
          this.Ent = new Entrada;
          this.error = true;
          this.errorMessage = 'documento incorrecto';
        }
      });
  }

  entradaOb() {
    this.entrada = false;
  }

  entradaEn() {
    this.entrada = true;
  }

}
