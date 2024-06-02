import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  registerForm!: FormGroup;
  loginForm!: FormGroup;
  isRegisterMode = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.initializeForms();
  }

  initializeForms() {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });

    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onRegister() {
    if (this.registerForm.valid) {
      this.authService.register(this.registerForm.value).subscribe(
        (response) => {
          console.log('Registration successful', response);
          this.toggleMode(); // Switch to login form after successful registration
        },
        (error) => {
          console.error('Registration failed', error);
        }
      );
    }
  }

  onLogin() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.authService.login(email, password).subscribe(
        (user) => {
          console.log('Login successful', user);
          this.userService.setUserName(user.name);
          this.router.navigate(['/dashboard']);
        },
        (error) => {
          console.error('Login failed', error);
        }
      );
    }
  }

  toggleMode() {
    this.isRegisterMode = !this.isRegisterMode;
  }
}
