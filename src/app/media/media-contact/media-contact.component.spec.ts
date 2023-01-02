import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaContactComponent } from './media-contact.component';

describe('MediaContactComponent', () => {
  let component: MediaContactComponent;
  let fixture: ComponentFixture<MediaContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediaContactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediaContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
