export class Patient {
  
    public patientId: number|null;
    public firstName: string;
    public lastName: string;
    public dob: Date;
    public height: number | null;
    public weight: number | null;
    public bloodType: string | null;
    public sex: string;
    public vaccinations?: object[];
    public allergies?: object[];

    constructor(patientId: number|null, 
        firstName: string,
        lastName: string, 
        dob: Date, 
        height: number | null, 
        weight: number | null, 
        bloodType: string | null, 
        sex: string, 
        vaccinations?: object[], 
        allergies?: object[]
        ){
            this.patientId = patientId;
            this.firstName = firstName;
            this.lastName = lastName;
            this.dob = dob
            this.height = height;
            this.weight = weight;
            this. bloodType = bloodType;
            this. sex = sex;
            this.vaccinations = vaccinations;
            this.allergies = allergies;
        }

  



}