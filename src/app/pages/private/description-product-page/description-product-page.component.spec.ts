import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionProductPageComponent } from './description-product-page.component';

describe('DescriptionProductPageComponent', () => {
  let component: DescriptionProductPageComponent;
  let fixture: ComponentFixture<DescriptionProductPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DescriptionProductPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DescriptionProductPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
