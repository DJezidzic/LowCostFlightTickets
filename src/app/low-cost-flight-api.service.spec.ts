import { TestBed } from '@angular/core/testing';

import { LowCostFlightApiService } from './low-cost-flight-api.service';

describe('LowCostFlightApiService', () => {
  let service: LowCostFlightApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LowCostFlightApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
