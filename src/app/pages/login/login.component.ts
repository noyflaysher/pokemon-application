import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  userEmail: string;
  userApprove: string = 'demo@skills.co.il';
  wrongEmail: boolean = false;

  constructor(private router: Router) {}

  loginUser() {
    if (this.userEmail === this.userApprove) {
      let data = { isLogIn: true };
      localStorage.setItem('isLogIn', JSON.stringify(data));
      this.router.navigate(['/']);
    } else {
      this.wrongEmail = true;
    }
  }
}
