import { Injectable } from '@angular/core';

import { Observable, of, BehaviorSubject } from 'rxjs';
import { tap, delay, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { GLOBAL } from './global';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  url: string;

  constructor(
    private Http: HttpClient,
  ) {
    this.url = GLOBAL.url;
  }

  LogIn(Log: Login): Observable<any> {
    const json = JSON.stringify(Log);
    const params = 'json=' + json;
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    return this.Http.post(this.url + 'login', params, { headers: headers });
}

}
