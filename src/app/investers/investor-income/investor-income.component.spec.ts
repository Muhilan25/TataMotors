import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestorIncomeComponent } from './investor-income.component';

describe('InvestorIncomeComponent', () => {
  let component: InvestorIncomeComponent;
  let fixture: ComponentFixture<InvestorIncomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestorIncomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestorIncomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
