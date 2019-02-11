import { Component, OnInit, ViewChild } from '@angular/core';
import { EntradaService } from 'src/app/services/entrada.service';
import { GLOBAL } from 'src/app/services/global';
import { Entrada } from 'src/app/models/entrada';
import { EntradaPSede } from 'src/app/models/enporsede';
import { EntradaS } from 'src/app/models/entradaS';
import { MatPaginator, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-lista-entrada',
  templateUrl: './lista-entrada.component.html',
  styleUrls: ['./lista-entrada.component.css'],
  providers: [EntradaService]
})

export class ListaEntradaComponent implements OnInit {
  url: string;
  putamalparida: EntradaPSede;
  userlog: EntradaPSede;
  EntU: EntradaS;
  displayedColumns: string[] = ['sede', 'nombres', 'documento', 'entrada', 'salida', 'dif'];
  dataSource = new MatTableDataSource<Entrada>();
  date: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private entradaService: EntradaService
  ) {
    this.url = GLOBAL.url;
    this.EntU = new EntradaS;
    this.userlog = JSON.parse(sessionStorage.getItem('usuario'));
    this.date = new Date();

  }

  ngOnInit() {
    this.getEntrada();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getEntrada() {
    this.EntU.id_sede = this.userlog.id_sede;
    this.entradaService.GetEntrada(this.EntU).subscribe(Response => {
      if (Response.code === 200) {
        this.dataSource = new MatTableDataSource<Entrada>(Response.data);
        this.dataSource.paginator = this.paginator;
      }
    });
  }
}
