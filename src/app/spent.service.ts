// spent.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpentService {
  private totalSpentSource = new BehaviorSubject<number>(0);
  garageValue$ = this.totalSpentSource.asObservable();

  constructor() {}

  updateTotalSpent(garageValue: number) {
    this.totalSpentSource.next(garageValue);
  }
}
