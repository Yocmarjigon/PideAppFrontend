import { TestBed } from '@angular/core/testing';

import { RegisterusersService } from './registerusers.service';

describe('RegisterusersService', () => {
  let service: RegisterusersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterusersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
