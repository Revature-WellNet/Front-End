import { TestBed } from '@angular/core/testing';
import { DiagnosisDTO } from './diagnosis-dto';

describe('DiagnosisDTO', () => {

  let diagDTO: DiagnosisDTO;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    diagDTO = TestBed.inject(DiagnosisDTO);
  });

  it('should be created', () => {
    expect(diagDTO).toBeTruthy();
  });
});
