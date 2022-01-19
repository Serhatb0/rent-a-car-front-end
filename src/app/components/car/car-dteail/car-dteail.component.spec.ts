import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarDteailComponent } from './car-dteail.component';

describe('CarDteailComponent', () => {
  let component: CarDteailComponent;
  let fixture: ComponentFixture<CarDteailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarDteailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarDteailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
