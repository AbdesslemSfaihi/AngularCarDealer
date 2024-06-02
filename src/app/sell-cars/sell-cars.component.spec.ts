import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellCarsComponent } from './sell-cars.component';

describe('SellCarsComponent', () => {
  let component: SellCarsComponent;
  let fixture: ComponentFixture<SellCarsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SellCarsComponent]
    });
    fixture = TestBed.createComponent(SellCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
