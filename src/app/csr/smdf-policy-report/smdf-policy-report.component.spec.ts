import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmdfPolicyReportComponent } from './smdf-policy-report.component';

describe('SmdfPolicyReportComponent', () => {
  let component: SmdfPolicyReportComponent;
  let fixture: ComponentFixture<SmdfPolicyReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmdfPolicyReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmdfPolicyReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
