export class Patient {
  
    public patientId!: number;
    public firstName: string;
    public lastName: string;
    public dob: Date;
    public height: number ;
    public weight: number;
    public bloodType: Object;
    public sex: Object;
    public vaccinations?: object[];
    public allergies?: object[];

    constructor(patientId: number, 
        firstName: string,
        lastName: string, 
        dob: Date, 
        height: number, 
        weight: number, 
        bloodType: Object , 
        sex: Object, 
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