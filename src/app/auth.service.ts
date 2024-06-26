import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  register(user: any): Observable<any> {
    return this.http.post(this.apiUrl, user);
  }

  login(email: string, password: string): Observable<any> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map((users) => {
        const user = users.find(
          (u) => u.email === email && u.password === password
        );
        if (user) {
          return user;
        } else {
          throw new Error('Invalid email or password');
        }
      })
    );
  }
}
