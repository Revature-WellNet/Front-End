import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoleValidationService {

  constructor() { }

  public validateRole (role : string) {

    //console.log(role);

    let nurseRegularExpression : RegExp = new RegExp('^nurse$', 'i');
    let doctorRegularExpression : RegExp = new RegExp('^doctor$', 'i');

    let test1 : boolean = nurseRegularExpression.test(role);
    let test2 : boolean = doctorRegularExpression.test(role);

    // console.log(test1);
    // console.log(test2); 
    // console.log(test1 && test2);

    return (test1 || test2);

  }
}
