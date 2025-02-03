import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterDeliveryForm1Component } from './register-delivery-form1.component';

describe('RegisterDeliveryForm1Component', () => {
  let component: RegisterDeliveryForm1Component;
  let fixture: ComponentFixture<RegisterDeliveryForm1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterDeliveryForm1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegisterDeliveryForm1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
