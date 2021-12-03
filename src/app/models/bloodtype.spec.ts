import { TestBed } from '@angular/core/testing';
import { Bloodtype } from './bloodtype';

describe('Bloodtype', () => {

  let bloodType: Bloodtype;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    bloodType = TestBed.inject(Bloodtype);
  });

  it('should be created', () => {
    expect(bloodType).toBeTruthy();
  });
});
