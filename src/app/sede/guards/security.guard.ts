import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';
import { ModelSecu } from 'src/app/admin/guard/models/securitya';

@Injectable()
export class SecurityS implements CanActivate {

  userlog: ModelSecu;

    constructor(
      private router: Router) {
        this.userlog = JSON.parse(sessionStorage.getItem('usuario'));
      }

    canActivate() {
          // If the user is not logged in we'll send them back to the home page
          if (this.userlog.id_rol !== '3317') {
              console.log('No estás logueado');
            this.router.navigate(['/not-found']);
            return false;
          }
          return true;
      }
}
