 import { TestBed } from '@angular/core/testing';
 import { Room } from './room';

describe('Room', () => {

   let room: Room;

   beforeEach(() => {
     TestBed.configureTestingModule({});
     room = TestBed.inject(Room);
   });

   it('should be created', () => {
     expect(room).toBeTruthy();
   });
 });
