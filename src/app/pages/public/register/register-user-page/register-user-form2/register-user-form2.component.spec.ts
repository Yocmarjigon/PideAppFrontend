import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterUserForm2Component } from './register-user-form2.component';

describe('RegisterUserForm2Component', () => {
  let component: RegisterUserForm2Component;
  let fixture: ComponentFixture<RegisterUserForm2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterUserForm2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegisterUserForm2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
