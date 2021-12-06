// import { Apihttpintercept } from './apihttpintercept';

<<<<<<< HEAD
// describe('Apihttpintercept', () => {
//   it('should create an instance', () => {
//     expect(new Apihttpintercept()).toBeTruthy();
//   });
// });
=======
import { TestBed } from '@angular/core/testing';

describe('Apihttpintercept', () => {
  let intercept: Apihttpintercept;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    intercept = TestBed.inject(Apihttpintercept);
  });

  it('should be created', () => {
    expect(intercept).toBeTruthy();
  });
});
>>>>>>> e515d2dce64a0a86b4880279b96592bffee900c8
