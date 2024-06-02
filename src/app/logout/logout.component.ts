import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
})
export class LogoutComponent {
  constructor(private router: Router, private userService: UserService) {}

  onLogout() {
    this.userService.clearUserName();
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
