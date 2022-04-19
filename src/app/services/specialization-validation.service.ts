@Injectable({
  providedIn: 'root'
})
export class SpecializationValidationService {

  constructor() { }

  public validateRole (specialization : string) {

    //console.log(role);

    let primaryCareRegularExpression : RegExp = new RegExp('^primary_care$', 'i');
    let pediatricianRegularExpression : RegExp = new RegExp('^pediatrician$', 'i');
    let radiologistRegularExpression : RegExp = new RegExp('^radiologist$', 'i');
    let generalSurgeonRegularExpression : RegExp = new RegExp('^general_surgeon$', 'i');

    let test1 : boolean = primaryCareRegularExpression.test(specialization);
    let test2 : boolean = pediatricianRegularExpression.test(specialization);
    let test3 : boolean = radiologistRegularExpression.test(specialization);
    let test4 : boolean = generalSurgeonRegularExpression.test(specialization);

    console.log(test1);
    console.log(test2); 
    console.log(test1 && test2);

    return (test1 || test2 || test3 || test4);

  }
}
