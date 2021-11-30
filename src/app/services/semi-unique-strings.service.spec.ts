import { TestBed } from '@angular/core/testing';

import { SemiUniqueStringsService } from './semi-unique-strings.service';

describe('SemiUniqueStringsService', () => {
  let service: SemiUniqueStringsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SemiUniqueStringsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
