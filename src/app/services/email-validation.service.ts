import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailValidationService {

  constructor() { }

  validateEmailFormat(email : string) : boolean {

    let regularExpression : RegExp = new RegExp('^[a-z0-9._%+-]+[@]{1,1}[a-z0-9-]+[.]{1,1}[a-z]{2,4}$', 'i');

    let result : boolean = regularExpression.test(email);

    //console.log(result);

    return result;

  }


//       let regularExpression2 = /'/;
//       let replacement2 = "%27";

//       this.inputString = this.inputString.replace(regularExpression2, replacement2);


}
