import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GLOBAL } from './global';
import { Observable } from 'rxjs';
import { RegUsu } from '../models/reguser';
import { FlitroUsu } from '../models/filtro';

@Injectable()
export class UsuarioService {
  url: string;
  constructor(
    private Http: HttpClient
  ) {
    this.url = GLOBAL.url;
  }
  getUsuarios(Filtro: FlitroUsu): Observable<any> {
    const json = JSON.stringify(Filtro);
    const params = 'json=' + json;
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    return this.Http.post(this.url + 'usuarios', params, { headers: headers });
  }

  addUsuarios(User: RegUsu): Observable<any> {
    const json = JSON.stringify(User);
    const params = 'json=' + json;
    const headers = new HttpHeaders().set( 'Content-Type', 'application/x-www-form-urlencoded' );

    return this.Http.post(this.url + 'crear-usuario', params, { headers: headers });
}
}
