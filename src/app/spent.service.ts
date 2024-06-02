// spent.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpentService {
  private totalSpentSource = new BehaviorSubject<number>(0);
  totalSpent$ = this.totalSpentSource.asObservable();

  constructor() {}

  updateTotalSpent(totalSpent: number) {
    this.totalSpentSource.next(totalSpent);
  }
}
