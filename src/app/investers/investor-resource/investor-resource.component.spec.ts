import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestorResourceComponent } from './investor-resource.component';

describe('InvestorResourceComponent', () => {
  let component: InvestorResourceComponent;
  let fixture: ComponentFixture<InvestorResourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestorResourceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestorResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
