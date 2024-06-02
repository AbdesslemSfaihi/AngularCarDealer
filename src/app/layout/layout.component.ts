import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent implements OnInit {
  userName!: string;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.userName = this.userService.getUserName() || 'User';
  }

  onLogout() {
    this.userService.clearUserName();
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
