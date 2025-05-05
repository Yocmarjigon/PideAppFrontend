import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarBottonAdminComponent } from './nav-bar-botton-admin.component';

describe('NavBarBottonAdminComponent', () => {
  let component: NavBarBottonAdminComponent;
  let fixture: ComponentFixture<NavBarBottonAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavBarBottonAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavBarBottonAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
