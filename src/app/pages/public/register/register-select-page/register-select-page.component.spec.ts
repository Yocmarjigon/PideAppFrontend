import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterSelectPageComponent } from './register-select-page.component';

describe('RegisterSelectPageComponent', () => {
  let component: RegisterSelectPageComponent;
  let fixture: ComponentFixture<RegisterSelectPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterSelectPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegisterSelectPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
