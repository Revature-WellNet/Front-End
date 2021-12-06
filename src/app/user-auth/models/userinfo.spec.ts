// import { Userinfo } from './userinfo';

import { TestBed } from '@angular/core/testing';

describe('Userinfo', () => {

  let userInfo: Userinfo;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    userInfo = TestBed.inject(Userinfo);
  });
  it('should be created', () => {
    expect(userInfo).toBeTruthy();
  });
});
