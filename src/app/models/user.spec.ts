import { TestBed } from '@angular/core/testing';
import { User } from './user';

describe('User', () => {

  let user: User;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    user = TestBed.inject(User);
  });

  it('should be created', () => {
    expect(user).toBeTruthy();
  });
});
