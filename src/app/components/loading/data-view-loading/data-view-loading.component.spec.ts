import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataViewLoadingComponent } from './data-view-loading.component';

describe('DataViewLoadingComponent', () => {
  let component: DataViewLoadingComponent;
  let fixture: ComponentFixture<DataViewLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataViewLoadingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataViewLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
