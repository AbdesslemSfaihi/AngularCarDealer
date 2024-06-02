import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SellCarsService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  addSelectedCar(car: any) {
    const selectedCars = this.getSelectedCars();
    selectedCars.push(car);
    localStorage.setItem('selectedCars', JSON.stringify(selectedCars));
    this.updateTotalSpent(car.price);
  }

  getSelectedCars(): any[] {
    const storedCars = localStorage.getItem('selectedCars');
    return storedCars ? JSON.parse(storedCars) : [];
  }

  buyCar(car: any): Observable<any> {
    return this.http
      .post<any>(`${this.apiUrl}/buy`, car)
      .pipe(tap(() => this.addSelectedCar(car)));
  }

  deleteBoughtCar(carId: number): Observable<any> {
    return this.http
      .delete<any>(`${this.apiUrl}/buy/${carId}`)
      .pipe(tap(() => this.deleteSelectedCar(carId)));
  }

  deleteSelectedCar(carId: number) {
    let selectedCars = this.getSelectedCars();
    const carToRemove = selectedCars.find((car: any) => car.id === carId);
    if (carToRemove) {
      selectedCars = selectedCars.filter((car: any) => car.id !== carId);
      localStorage.setItem('selectedCars', JSON.stringify(selectedCars));
    }
  }

  clearSelectedCars() {
    localStorage.removeItem('selectedCars');
  }

  getBoughtCars(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/buy`);
  }

  // Methods for total spent tracking
  updateTotalSpent(amount: number) {
    const totalSpent = this.getTotalSpent() + amount;
    localStorage.setItem('totalSpent', totalSpent.toString());
  }

  getTotalSpent(): number {
    const totalSpent = localStorage.getItem('totalSpent');
    return totalSpent ? parseFloat(totalSpent) : 0;
  }
}
