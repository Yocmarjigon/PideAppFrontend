import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PataconPageComponent } from './patacon-page.component';

describe('PataconPageComponent', () => {
  let component: PataconPageComponent;
  let fixture: ComponentFixture<PataconPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PataconPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PataconPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
