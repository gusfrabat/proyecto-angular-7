import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GLOBAL } from './global';
import { Observable } from 'rxjs';

@Injectable()
export class PruebaService {
  url: string;

  constructor(
    private Http: HttpClient
  ) {
    this.url = GLOBAL.url;
  }

  getPrueba(): Observable<any> {
    return this.Http.get('http://192.168.72.98:8080/datasnap/rest/TserverMethods/mostrarsedes/-1');
  }
}
