import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class RouteServiceService implements CanActivate {
  logIn: boolean;
  constructor(private router: Router) {}

  canActivate() {
    this.logIn = JSON.parse(window.localStorage.getItem('isLogIn')).isLogIn;
    if (this.logIn) return true;
    else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
