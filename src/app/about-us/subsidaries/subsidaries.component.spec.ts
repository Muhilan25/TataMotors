import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubsidariesComponent } from './subsidaries.component';

describe('SubsidariesComponent', () => {
  let component: SubsidariesComponent;
  let fixture: ComponentFixture<SubsidariesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubsidariesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubsidariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
