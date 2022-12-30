import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsbrandComponent } from './carsbrand.component';

describe('CarsbrandComponent', () => {
  let component: CarsbrandComponent;
  let fixture: ComponentFixture<CarsbrandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarsbrandComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarsbrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
