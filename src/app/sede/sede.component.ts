import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioG } from '../models/usuario-g';

@Component({
  selector: 'app-sede',
  templateUrl: './sede.component.html',
  styleUrls: ['./sede.component.css'],
})
export class SedeComponent {

  userlog: UsuarioG;
  isNavbarCollapsed: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.userlog = JSON.parse(sessionStorage.getItem('usuario'));
  }

  logOut() {
    sessionStorage.clear();
    this.router.navigate(['/']);
  }
}
