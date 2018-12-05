import { Injectable } from '@angular/core';
import { GLOBAL } from './global';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SedeService {
  url: string;

  constructor(
    private Http: HttpClient
  ) {
    this.url = GLOBAL.url;
  }

  getSede(): Observable<any> {
    return this.Http.get(this.url + 'sedes');
  }
}
