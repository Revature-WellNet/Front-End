import { TestBed } from '@angular/core/testing';

import { SemiUniqueStringsService } from './semi-unique-strings.service';

describe('SemiUniqueStringsService', () => {
  let service: SemiUniqueStringsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SemiUniqueStringsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('generateNumString', () => {

    it('#generateNumString function should exist', () => {
      expect(service.generateNumString).toBeTruthy();
    });

    it('#generateNumString should create unique strings back to back', () => {

      let stringOne = service.generateNumString();
      let stringTwo = service.generateNumString();

      expect(stringOne).not.toEqual(stringTwo);

    });

  });


  // generateString(input : string) : string {

  //   let numString = this.generateNumString();

  //   let result = input + numString;

  //   console.log(result);

  //   return result;

  // }
  describe('generateString', () => {

    it('#generateString function should exist', () => {
      expect(service.generateString).toBeTruthy();
    });

    it('#generateString should append a semi unique number to a string', () => {

      const startString = "starter";
      let startLength = startString.length;

      //spyOn(service, 'generateString').withArgs(startString).and.returnValue(;

      let endString = service.generateString(startString);
      let endLength = endString.length;
      let appended = endString.replace('^[a-zA-Z]+$', '');
      let appendednum = parseInt(appended);




      expect(startLength).not.toEqual(endLength);

      

      expect(appendednum > 0).toEqual(true);
      console.log(endString); 
      console.log(appended);
      console.log(appendednum);

      

    });

  });

});
