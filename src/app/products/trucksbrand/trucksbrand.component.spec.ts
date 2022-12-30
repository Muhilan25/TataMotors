import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrucksbrandComponent } from './trucksbrand.component';

describe('TrucksbrandComponent', () => {
  let component: TrucksbrandComponent;
  let fixture: ComponentFixture<TrucksbrandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrucksbrandComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrucksbrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
