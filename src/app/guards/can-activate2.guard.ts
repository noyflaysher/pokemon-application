import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class CanActivate2Guard implements CanActivate {
  logIn: boolean;
  constructor(private router: Router) {}

  canActivate() {
    this.logIn = window.localStorage.getItem('isLogIn')
      ? JSON.parse(window.localStorage.getItem('isLogIn')).isLogIn
      : '';
    if (this.logIn) {
      this.router.navigate(['/']);
      return false;
    } else {
      return true;
    }
  }
}
