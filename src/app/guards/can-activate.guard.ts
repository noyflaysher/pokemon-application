import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class CanActivateGuard implements CanActivate {
  logIn: boolean;
  constructor(private router: Router) {}

  canActivate() {
    this.logIn = JSON.parse(window.localStorage.getItem('isLogIn')).isLogIn;
    if (!this.logIn) {
      this.router.navigate(['/login']);
      return false;
    } else {
      return true;
    }
  }
}
