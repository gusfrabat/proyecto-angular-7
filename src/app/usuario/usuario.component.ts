import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioG } from '../models/usuario-g';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  userlog: UsuarioG;
  isNavbarCollapsed: any;

  constructor(
    private router: Router,
  ) {
    this.userlog = JSON.parse(sessionStorage.getItem('usuario'));
  }

  ngOnInit() {
  }

  logOut() {
    sessionStorage.clear();
    this.router.navigate(['/']);
  }
}
