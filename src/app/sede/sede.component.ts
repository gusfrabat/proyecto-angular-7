import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sede',
  templateUrl: './sede.component.html',
  styleUrls: ['./sede.component.css'],
})
export class SedeComponent {

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
