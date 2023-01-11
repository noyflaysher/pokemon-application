// import { Injectable } from '@angular/core';
// import {
//   ActivatedRouteSnapshot,
//   CanActivate,
//   CanDeactivate,
//   Router,
//   RouterStateSnapshot,
//   UrlTree,
// } from '@angular/router';
// import { Observable } from 'rxjs';
// import { HomePageComponent } from '../pages/home-page/home-page.component';
// import { LoginComponent } from '../pages/login/login.component';

// @Injectable()
// export class CanDeactivateGuard implements CanDeactivate<LoginComponent> {
//   logIn: boolean;
//   constructor(private router: Router) {
//     debugger;
//   }

//   canDeactivate(): boolean | Observable<boolean> | Promise<boolean> {
//     debugger;
//     this.logIn = JSON.parse(window.localStorage.getItem('isLogIn')).isLogIn;
//     if (this.logIn) {
//       this.router.navigate(['/']);
//       return true;
//     }
//   }

//   // canDeactivate(
//   //   component: HomePageComponent,
//   //   currentRoute: ActivatedRouteSnapshot,
//   //   currentState: RouterStateSnapshot,
//   //   nextState: RouterStateSnapshot
//   // ):
//   //   | boolean
//   //   | UrlTree
//   //   | Observable<boolean | UrlTree>
//   //   | Promise<boolean | UrlTree> {
//   //   this.logIn = JSON.parse(window.localStorage.getItem('isLogIn')).isLogIn;
//   //   if (this.logIn) {
//   //     return true;
//   //   } else {
//   //     this.router.navigate(['/login']);
//   //     return false;
//   //   }
//   // }

//   // public can() {
//   // this.logIn = JSON.parse(window.localStorage.getItem('isLogIn')).isLogIn;
//   // if (this.logIn) return true;
//   // else {
//   //   this.router.navigate(['/login']);
//   //   return false;
//   //   }
//   // }
// }
