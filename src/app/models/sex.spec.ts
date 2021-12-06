import { TestBed } from '@angular/core/testing';
import { Sex } from './sex';

describe('Sex', () => {

  let sex: Sex;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    sex = TestBed.inject(Sex);
  });

  it('should create an instance', () => {
    expect(sex).toBeTruthy();
  });
});
