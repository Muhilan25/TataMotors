import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusesbrandComponent } from './busesbrand.component';

describe('BusesbrandComponent', () => {
  let component: BusesbrandComponent;
  let fixture: ComponentFixture<BusesbrandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusesbrandComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusesbrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
