import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialFilingComponent } from './financial-filing.component';

describe('FinancialFilingComponent', () => {
  let component: FinancialFilingComponent;
  let fixture: ComponentFixture<FinancialFilingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinancialFilingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinancialFilingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
