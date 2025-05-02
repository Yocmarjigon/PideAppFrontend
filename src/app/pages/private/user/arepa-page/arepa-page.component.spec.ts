import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArepaPageComponent } from './arepa-page.component';

describe('ArepaPageComponent', () => {
  let component: ArepaPageComponent;
  let fixture: ComponentFixture<ArepaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArepaPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArepaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
