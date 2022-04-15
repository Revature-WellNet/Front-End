export class Vaccination {

    public vaccinationId : number | null;
    public vaccination : string;

    constructor(vaccinationId :number | null, vaccination : string) {
  
        this.vaccinationId = vaccinationId;
        this.vaccination = vaccination;
    
      }
}
