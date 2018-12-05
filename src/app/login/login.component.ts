import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { Login } from '../models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: []
})
export class LoginComponent implements OnInit {
  show: boolean;
  titulo: string;
  error: boolean;
  errorMessage: string;
  Log: Login;
  loading: boolean;

  constructor(
    private AutService: AuthService,
    private router: Router
  ) {
    this.Log = new Login;
    this.loading = false;
  }

  ngOnInit() {
    this.show = true;
  }

  onSubmit() {
    this.LogIn();
  }

  LogIn() {
    this.AutService.LogIn(this.Log).subscribe(
      response => {
        this.loading = true;
        const delay = 1300;
        if (response.code === 200) {
          this.Log = new Login;
          this.error = false;
          if (response.data.id_rol === '3') {
            this.router.navigate(['/admin/usuario']);
          } else if (response.data.id_rol === '1') {
            this.router.navigate(['/usuario/vista']);
          } else if (response.data.id_rol === '2') {
            this.router.navigate(['/sede/entrada']);
          }
        } else {
          this.Log = new Login;
          this.error = true;
          this.errorMessage = 'usuario o contraseña incorrectos';
          this.loading = false;
        }
      });
  }
}


/* janier ir donde el ingeniro arturo */
