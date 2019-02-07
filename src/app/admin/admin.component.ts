import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioG } from '../models/usuario-g';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent {

  userlog: UsuarioG;
  isNavbarCollapsed: any;

  constructor(
    private router: Router,
  ) {
    this.userlog = JSON.parse(sessionStorage.getItem('usuario'));
  }

  logOut() {
    sessionStorage.clear();
    this.router.navigate(['/']);
  }
}
