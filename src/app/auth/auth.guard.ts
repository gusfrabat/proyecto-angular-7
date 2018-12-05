import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private router: Router) { }

    canActivate() {
        // If the user is not logged in we'll send them back to the home page
        if (!localStorage.getItem('usuario')) {
            console.log('No estás logueado');
        }
        return true;
    }
}
