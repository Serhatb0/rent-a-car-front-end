import { TestBed } from '@angular/core/testing';

import { PromosyonCodeService } from './promosyon-code.service';

describe('PromosyonCodeService', () => {
  let service: PromosyonCodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PromosyonCodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
