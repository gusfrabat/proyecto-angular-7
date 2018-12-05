import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GLOBAL } from './global';
import { Entrada } from '../models/entrada';
import { Observable } from 'rxjs';

@Injectable()
export class EntradaService {

  url: string;

  constructor(
      private Http: HttpClient
  ) {
      this.url = GLOBAL.url;
  }

  getEntrada(): Observable<any> {
      return this.Http.get(this.url + 'entrada-usuario');
  }

  addEntrada(Ent: Entrada): Observable<any> {
      const json = JSON.stringify(Ent);
      const params = 'json=' + json;
      const headers = new HttpHeaders().set( 'Content-Type', 'application/x-www-form-urlencoded' );

      return this.Http.post(this.url + 'usuario-entrada', params, { headers: headers });
  }

}
