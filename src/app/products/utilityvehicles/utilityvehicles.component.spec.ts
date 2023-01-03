import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilityvehiclesComponent } from './utilityvehicles.component';

describe('UtilityvehiclesComponent', () => {
  let component: UtilityvehiclesComponent;
  let fixture: ComponentFixture<UtilityvehiclesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtilityvehiclesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UtilityvehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
