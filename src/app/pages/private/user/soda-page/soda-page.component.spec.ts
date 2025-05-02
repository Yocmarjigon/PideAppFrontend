import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SodaPageComponent } from './soda-page.component';

describe('SodaPageComponent', () => {
  let component: SodaPageComponent;
  let fixture: ComponentFixture<SodaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SodaPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SodaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
