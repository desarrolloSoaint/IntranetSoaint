import { TestBed } from '@angular/core/testing';

import { AfterLoginGuardService } from './after-login-guard.service';

describe('AfterLoginGuardService', () => {
  let service: AfterLoginGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AfterLoginGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
