import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareholderInformationComponent } from './shareholder-information.component';

describe('ShareholderInformationComponent', () => {
  let component: ShareholderInformationComponent;
  let fixture: ComponentFixture<ShareholderInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShareholderInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShareholderInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
