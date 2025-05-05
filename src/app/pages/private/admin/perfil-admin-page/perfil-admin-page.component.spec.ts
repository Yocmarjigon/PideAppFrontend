import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilAdminPageComponent } from './perfil-admin-page.component';

describe('PerfilAdminPageComponent', () => {
  let component: PerfilAdminPageComponent;
  let fixture: ComponentFixture<PerfilAdminPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfilAdminPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilAdminPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
