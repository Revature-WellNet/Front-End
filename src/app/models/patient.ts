import { Allergy } from "./allergy";
import { Bloodtype } from "./bloodtype";
import { Sex } from "./sex";
import { Vaccination } from "./vaccination";

export class Patient {

    public patientId!: number;
    public firstName: string;
    public lastName: string;
    public dob: Date;
    public height: number ;
    public weight: number;
    public bloodType: Bloodtype;
    public sex: Sex;
    public patientVaccinations: Vaccination[];
    public patientAllergies: Allergy[];

    constructor(patientId: number,
        firstName: string,
        lastName: string,
        dob: Date,
        height: number,
        weight: number,
        bloodType: Bloodtype ,
        sex: Sex,
        vaccinations:Vaccination[],
        allergies: Allergy[]
        ){
            this.patientId = patientId;
            this.firstName = firstName;
            this.lastName = lastName;
            this.dob = dob
            this.height = height;
            this.weight = weight;
            this. bloodType = bloodType;
            this. sex = sex;
            this.patientVaccinations = vaccinations;
            this.patientAllergies = allergies;
        }





}
