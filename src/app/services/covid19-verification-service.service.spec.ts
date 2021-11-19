import { TestBed } from '@angular/core/testing';

import { Covid19VerificationServiceService } from './covid19-verification-service.service';

describe('Covid19VerificationServiceService', () => {
  let service: Covid19VerificationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Covid19VerificationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
