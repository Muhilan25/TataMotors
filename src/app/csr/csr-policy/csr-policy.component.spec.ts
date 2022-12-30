import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsrPolicyComponent } from './csr-policy.component';

describe('CsrPolicyComponent', () => {
  let component: CsrPolicyComponent;
  let fixture: ComponentFixture<CsrPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsrPolicyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CsrPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
