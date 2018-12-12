import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GLOBAL } from './global';
import { Entrada } from '../models/entrada';
import { Observable } from 'rxjs';
import { EntradaS } from '../models/entradaS';

@Injectable()
export class EntradaService {

  url: string;

  constructor(
      private Http: HttpClient
  ) {
      this.url = GLOBAL.url;
  }

  GetEntrada(EntU: EntradaS): Observable<any> {
    const json = JSON.stringify(EntU);
    const params = 'json=' + json;
    const headers = new HttpHeaders().set( 'Content-Type', 'application/x-www-form-urlencoded' );
    return this.Http.post(this.url + 'entrada-usuario', params, { headers: headers });
  }


  addEntrada(Ent: Entrada): Observable<any> {
    const json = JSON.stringify(Ent);
    const params = 'json=' + json;
    const headers = new HttpHeaders().set( 'Content-Type', 'application/x-www-form-urlencoded' );
    return this.Http.post(this.url + 'usuario-entrada', params, { headers: headers });
  }

}
