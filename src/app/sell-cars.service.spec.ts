import { TestBed } from '@angular/core/testing';

import { SellCarsService } from './sell-cars.service';

describe('SellCarsService', () => {
  let service: SellCarsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SellCarsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
