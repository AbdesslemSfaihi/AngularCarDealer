import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly USER_NAME_KEY = 'userName';

  setUserName(name: string) {
    localStorage.setItem(this.USER_NAME_KEY, name);
  }

  getUserName(): string | null {
    return localStorage.getItem(this.USER_NAME_KEY);
  }

  clearUserName() {
    localStorage.removeItem(this.USER_NAME_KEY);
  }
}
