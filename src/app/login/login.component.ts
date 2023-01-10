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

  constructor(private router: Router) {}

  loginUser() {
    if (this.userEmail === this.userApprove) {
      this.router.navigate(['/home']);
      console.log(`log in`);
    }
  }
}
