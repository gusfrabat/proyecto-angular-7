import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GLOBAL } from './global';
import { Observable } from 'rxjs';
import { ReportFilt } from '../models/filtroreporte';
import { Aempleado } from '../models/emp';

@Injectable()
export class EmpleadoService {
  url: string;
  constructor(
    private Http: HttpClient
  ) {
    this.url = GLOBAL.url;
  }

  getEmpledo(): Observable<any> {
    return this.Http.get(this.url + 'empleados');
  }

  GetEmpleadosReporte(FilR: ReportFilt): Observable<any> {
    const json = JSON.stringify(FilR);
    const params = 'json=' + json;
    const headers = new HttpHeaders().set( 'Content-Type', 'application/x-www-form-urlencoded' );
    return this.Http.post(this.url + 'filtro-empleado', params, { headers: headers });
  }

  Addempleado(Empl: Aempleado): Observable<any> {
    const json = JSON.stringify(Empl);
    const params = 'json=' + json;
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this.Http.post(this.url + 'crear-empleado', params, { headers: headers });
  }

}
