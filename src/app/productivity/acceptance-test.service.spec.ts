import { TestBed, inject } from '@angular/core/testing';

import { AcceptanceTestService } from './acceptance-test.service';

describe('AcceptanceTestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AcceptanceTestService]
    });
  });

  it('should be created', inject([AcceptanceTestService], (service: AcceptanceTestService) => {
    expect(service).toBeTruthy();
  }));
});
