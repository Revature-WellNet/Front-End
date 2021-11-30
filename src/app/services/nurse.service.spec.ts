import { TestBed } from '@angular/core/testing';

import { NurseService } from './nurse.service';

describe('NurseService', () => {
  let service: NurseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NurseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
