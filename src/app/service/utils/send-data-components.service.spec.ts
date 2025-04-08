import { TestBed } from '@angular/core/testing';

import { SendDataComponentsService } from './send-data-components.service';

describe('SendDataComponentsService', () => {
  let service: SendDataComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SendDataComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
