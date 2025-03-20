import { TestBed } from '@angular/core/testing';

import { DescriptionSendDataComponentService } from './description-send-data-component.service';

describe('DescriptionSendDataComponentService', () => {
  let service: DescriptionSendDataComponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DescriptionSendDataComponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
