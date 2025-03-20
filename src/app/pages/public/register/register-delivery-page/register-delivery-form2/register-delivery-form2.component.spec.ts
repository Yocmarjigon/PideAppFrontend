import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterDeliveryForm2Component } from './register-delivery-form2.component';

describe('RegisterDeliveryForm2Component', () => {
  let component: RegisterDeliveryForm2Component;
  let fixture: ComponentFixture<RegisterDeliveryForm2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterDeliveryForm2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegisterDeliveryForm2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
