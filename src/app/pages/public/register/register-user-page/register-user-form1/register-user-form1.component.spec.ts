import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterUserForm1Component } from './register-user-form1.component';

describe('RegisterUserForm1Component', () => {
  let component: RegisterUserForm1Component;
  let fixture: ComponentFixture<RegisterUserForm1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterUserForm1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegisterUserForm1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
