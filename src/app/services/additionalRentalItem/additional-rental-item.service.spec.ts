import { TestBed } from '@angular/core/testing';

import { AdditionalRentalItemService } from './additional-rental-item.service';

describe('AdditionalRentalItemService', () => {
  let service: AdditionalRentalItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdditionalRentalItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
