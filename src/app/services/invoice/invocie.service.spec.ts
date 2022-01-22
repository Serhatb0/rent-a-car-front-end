import { TestBed } from '@angular/core/testing';

import { InvocieService } from './invocie.service';

describe('InvocieService', () => {
  let service: InvocieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvocieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
