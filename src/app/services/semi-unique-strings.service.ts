import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SemiUniqueStringsService {

  constructor() { }

  generateString(input : string) : string {

    let numString = this.generateNumString();

    let result = input + numString;

    console.log(result);

    return result;

  }

  generateNumString() : string {

    let value : number = Math.random();
    let value2 : number = Math.random();
    let value3 : number = Math.random();

    console.log(value);
    console.log(value2);
    console.log(value3);

    value *= 10000000000000;
    value2 *= 100000;
    value3 *= 1000;

    value2 *= value3;
    value /= value2;

    value = Math.floor(value);

    console.error(value);

    return value.toString();

  }

}


