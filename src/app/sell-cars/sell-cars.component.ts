// sell-cars.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SellCarsService } from '../sell-cars.service';

@Component({
  selector: 'app-sell-cars',
  templateUrl: './sell-cars.component.html',
  styleUrls: ['./sell-cars.component.css'],
})
export class SellCarsComponent implements OnInit {
  selectedCars: any[] = [];
  totalSpent: number = 0;

  constructor(
    private sellCarsService: SellCarsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadSelectedCars();
    this.totalSpent = this.sellCarsService.getTotalSpent();
  }

  loadSelectedCars() {
    this.selectedCars = this.sellCarsService.getSelectedCars();
  }

  sellCar(car: any) {
    this.sellCarsService.deleteBoughtCar(car.id).subscribe(
      () => {
        this.loadSelectedCars();
        this.totalSpent = this.sellCarsService.getTotalSpent();
      },
      (error) => {
        console.error('Failed to delete car', error);
      }
    );
  }
}
