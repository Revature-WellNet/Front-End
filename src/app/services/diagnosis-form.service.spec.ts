import { TestBed } from '@angular/core/testing';

import { DiagnosisFormService } from './diagnosis-form.service';

describe('DiagnosisFormService', () => {
  let service: DiagnosisFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiagnosisFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
