import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://localhost:3000'; // Define your API URL here

  constructor(private http: HttpClient) {}

  getCars(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/cars`);
  }
}
