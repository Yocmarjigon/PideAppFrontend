import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarBottonComponent } from './nav-bar-botton.component';

describe('NavBarBottonComponent', () => {
  let component: NavBarBottonComponent;
  let fixture: ComponentFixture<NavBarBottonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavBarBottonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavBarBottonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
