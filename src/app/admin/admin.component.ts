import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent {

  userlog: string;

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
