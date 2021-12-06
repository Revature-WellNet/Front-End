import { TestBed } from '@angular/core/testing';
import { Patient } from './patient';

describe('Patient', () => {

  let patient: Patient;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    patient = TestBed.inject(Patient);
  });
  
  it('should be created', () => {
    expect(patient).toBeTruthy();
  });
});
