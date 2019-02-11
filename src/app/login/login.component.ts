import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { Login } from '../models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})

export class LoginComponent implements OnInit {
  titulo: string;
  Log: Login;
  loading: boolean;
  hide: any;
  message: string;
  alert: boolean;

  constructor(
    private AutService: AuthService,
    private router: Router
  ) {
    this.Log = new Login;
    this.loading = false;
  }

  ngOnInit() {
  }

  onSubmit() {
    this.LogIn();
  }

  LogIn() {
    this.AutService.LogIn(this.Log).subscribe(
      response => {
        if (response.code === 200) {
          this.loading = true;
          sessionStorage.setItem('usuario', JSON.stringify(response.data));
          setTimeout(() => {
            if (response.data.id_rol === '2217') {
              this.router.navigate(['/admin/empleado']);
            } else if (response.data.id_rol === '3724') {
              this.router.navigate(['/usuario/vista']);
            } else if (response.data.id_rol === '3317') {
              this.router.navigate(['/sede/entrada']);
            }
          }, 3000);
          setTimeout(() => {
          this.Log = new Login;
          }, 4000);
        } else {
          this.alert = true;
          this.message = response.message;
          setTimeout(() => {
            this.Log = new Login;
          }, 1000);

          setTimeout(() => {
            this.alert = false;
          }, 4000);
        }
      });
  }
}
