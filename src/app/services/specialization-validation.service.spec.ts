import { TestBed } from '@angular/core/testing';

import { SpecializationValidationService } from './specialization-validation.service';

describe('SpecializationValidationService', () => {
  let service: SpecializationValidationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpecializationValidationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
