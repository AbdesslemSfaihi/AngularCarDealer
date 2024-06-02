// car.component.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SellCarsService } from '../sell-cars.service';
import { Router } from '@angular/router';
import { SpentService } from '../spent.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cars: any[] = [];

  constructor(
    private http: HttpClient,
    private sellCarsService: SellCarsService,
    private router: Router,
    private spentService: SpentService
  ) {}

  ngOnInit(): void {
    this.getCars();
    this.calculateTotalSpent();
  }

  buyCar(car: any) {
    this.sellCarsService.buyCar(car).subscribe(() => {
      this.calculateTotalSpent();
      this.router.navigate(['/sell-cars']);
    });
  }

  getCars() {
    this.http.get<any[]>('http://localhost:3000/cars').subscribe(
      (response) => {
        this.cars = response;
      },
      (error) => {
        console.error('Failed to fetch cars', error);
      }
    );
  }

  calculateTotalSpent() {
    const totalSpent = this.sellCarsService.getTotalSpent();
    this.spentService.updateTotalSpent(totalSpent);
  }
}
