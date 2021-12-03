import { TestBed } from '@angular/core/testing';
import { RegistrationInfo } from './registration-info';

describe('RegistrationInfo', () => {

  let regInfo: RegistrationInfo;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    regInfo = TestBed.inject(RegistrationInfo);
  });

  it('should be created', () => {
    expect(regInfo).toBeTruthy();
  });
});
