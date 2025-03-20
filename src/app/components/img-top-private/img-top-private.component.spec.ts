import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgTopPrivateComponent } from './img-top-private.component';

describe('ImgTopPrivateComponent', () => {
  let component: ImgTopPrivateComponent;
  let fixture: ComponentFixture<ImgTopPrivateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImgTopPrivateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImgTopPrivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
