import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellCarsFormComponent } from './sell-cars-form.component';

describe('SellCarsFormComponent', () => {
  let component: SellCarsFormComponent;
  let fixture: ComponentFixture<SellCarsFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SellCarsFormComponent]
    });
    fixture = TestBed.createComponent(SellCarsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
