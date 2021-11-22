import { TestBed } from '@angular/core/testing';

import { RoleValidationService } from './role-validation.service';

describe('RoleValidationService', () => {
  let service: RoleValidationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoleValidationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
