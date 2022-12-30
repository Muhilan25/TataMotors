import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefencevehiclesComponent } from './defencevehicles.component';

describe('DefencevehiclesComponent', () => {
  let component: DefencevehiclesComponent;
  let fixture: ComponentFixture<DefencevehiclesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefencevehiclesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefencevehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
