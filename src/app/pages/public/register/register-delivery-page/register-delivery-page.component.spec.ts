import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterDeliveryPageComponent } from './register-delivery-page.component';

describe('RegisterDeliveryPageComponent', () => {
  let component: RegisterDeliveryPageComponent;
  let fixture: ComponentFixture<RegisterDeliveryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterDeliveryPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegisterDeliveryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
