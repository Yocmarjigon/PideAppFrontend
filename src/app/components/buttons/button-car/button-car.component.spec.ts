import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonCarComponent } from './button-car.component';

describe('ButtonCarComponent', () => {
  let component: ButtonCarComponent;
  let fixture: ComponentFixture<ButtonCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonCarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
