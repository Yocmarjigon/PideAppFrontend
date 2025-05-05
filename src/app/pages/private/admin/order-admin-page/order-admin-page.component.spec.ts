import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderAdminPageComponent } from './order-admin-page.component';

describe('OrderAdminPageComponent', () => {
  let component: OrderAdminPageComponent;
  let fixture: ComponentFixture<OrderAdminPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderAdminPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderAdminPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
