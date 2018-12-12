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
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.userlog = JSON.parse(localStorage.getItem('usuario'));
   }

  logOut() {
    localStorage.clear();
    this.router.navigate(['/']);
  }


}
