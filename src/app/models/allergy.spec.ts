import { TestBed } from '@angular/core/testing';
import { Allergy } from './allergy';

describe('Allergy', () => {

  let allergy: Allergy;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    allergy = TestBed.inject(Allergy);
  });

  it('should be created', () => {
    expect(allergy).toBeTruthy();
  });
});
