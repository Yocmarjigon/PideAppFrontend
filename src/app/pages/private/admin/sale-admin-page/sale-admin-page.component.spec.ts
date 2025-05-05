import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleAdminPageComponent } from './sale-admin-page.component';

describe('SaleAdminPageComponent', () => {
  let component: SaleAdminPageComponent;
  let fixture: ComponentFixture<SaleAdminPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaleAdminPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaleAdminPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
