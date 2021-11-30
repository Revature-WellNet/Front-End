export class Allergy {

    public allergyId : number | null;
    public allergy : string;

    constructor(allergyId :number | null, allergy : string) {
  
        this.allergyId = allergyId;
        this.allergy = allergy;
    
      }

}
