import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductStoriesComponent } from './product-stories.component';

describe('ProductStoriesComponent', () => {
  let component: ProductStoriesComponent;
  let fixture: ComponentFixture<ProductStoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductStoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
