import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailUserPageComponent } from './product-detail-user-page.component';

describe('ProductDetailUserPageComponent', () => {
  let component: ProductDetailUserPageComponent;
  let fixture: ComponentFixture<ProductDetailUserPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDetailUserPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetailUserPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
