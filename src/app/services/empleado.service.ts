import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GLOBAL } from './global';
import { Observable } from 'rxjs';

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
}
