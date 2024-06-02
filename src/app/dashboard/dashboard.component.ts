import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { SpentService } from '../spent.service';
import { ApiService } from '../api.service';
import { SellCarsService } from '../sell-cars.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  userName!: string;
  garageValue: number = 0;
  totalCars: number = 0;
  totalSpent: number = 0;

  constructor(
    private userService: UserService,
    private router: Router,
    private spentService: SpentService,
    private apiService: ApiService,
    private sellCarsService: SellCarsService
  ) {}

  ngOnInit() {
    this.userName = this.userService.getUserName() || 'User';
    this.spentService.garageValue$.subscribe((garageValue) => {
      this.garageValue = garageValue;
    });
    this.fetchTotalCars();
    this.fetchTotalSpent();
    this.totalSpent = this.sellCarsService.getTotalSpent();
  }

  fetchTotalCars() {
    this.apiService.getCars().subscribe(
      (cars) => {
        this.totalCars = cars.length;
      },
      (error) => {
        console.error('Error fetching cars:', error);
      }
    );
  }

  fetchTotalSpent() {
    this.sellCarsService.getBoughtCars().subscribe((boughtCars) => {
      this.garageValue = boughtCars.reduce((sum, car) => sum + car.price, 0);
    });
  }

  onLogout() {
    this.userService.clearUserName();
    this.router.navigate(['/login']);
  }
}
