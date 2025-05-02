import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpanadaPageComponent } from './empanada-page.component';

describe('EmpanadaPageComponent', () => {
  let component: EmpanadaPageComponent;
  let fixture: ComponentFixture<EmpanadaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpanadaPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpanadaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
