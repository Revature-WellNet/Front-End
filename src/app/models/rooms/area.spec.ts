 import { TestBed } from '@angular/core/testing';
 import { Area } from './area';

 describe('Area', () => {

   let area: Area;

   beforeEach(() => {
     TestBed.configureTestingModule({});
     area = TestBed.inject(Area);
   });
  
 it('should be created', () => {
     expect(area).toBeTruthy();
        });
 });
