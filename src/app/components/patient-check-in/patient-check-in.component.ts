import { Component, OnInit } from '@angular/core';
import { Allergy } from 'src/app/models/allergy';
import { Patient } from 'src/app/models/patient'
import { Vaccination } from 'src/app/models/vaccination';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-patient-check-in',
  templateUrl: './patient-check-in.component.html',
  styleUrls: ['./patient-check-in.component.css']
})
export class PatientCheckInComponent implements OnInit {
  //public patientCheck: boolean = false;
  public firstName!: string;
  public lastName!: string;
  public dob!: Date;
  public feet!: number;
  public inches!: number;
  public weight!: number;
  public bloodtype! : string;
  public sex! : string;
  public allergies! : Allergy[];
  public vaccinations! : Vaccination[];
  public patient! : Patient;

  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
    this.generateChecklists();

  }

  onSubmit(firstName: string, lastName: string, dob: Date,


    feet : number | null,
    inches : number | null, 
    weight : number | null, 
    bloodtype : string | null, 
    sex : string,
    allergies : Allergy[],
    vaccinations : Vaccination[]){

    let height : number | null;
    if(feet){
      height = (feet*12);
      if(inches){
        height += inches;
      }
    }else{
      height = null;
    }  
    
    let patient : Patient = new Patient(null, firstName, lastName, dob, height, weight, bloodtype, sex, allergies, vaccinations);
    this.patientService.createPatient(patient);
    
    console.log(patient);

  }

  generateChecklists(){

    this.patientService.getAllergies().subscribe((response: any) => {
      
      let allergies : Allergy[] = response;
        for(let a of allergies){
          
          let label = document.createElement("label");
          label.innerHTML = a.allergy+": ";

          let checkbox = document.createElement("input");
          checkbox.type = "checkbox";
          checkbox.id = "checkbox";
          checkbox.name = "checkbox";
          checkbox.value = a.allergy
          label.htmlFor = "checkbox";

          let breaker = document.createElement("p");
          document.getElementById("vaccinationanchor")!.appendChild(breaker);
          document.getElementById("allergyanchor")!.appendChild(label);
          document.getElementById("allergyanchor")!.appendChild(checkbox);
          

        }

    })

    this.patientService.getVaccinations().subscribe((response: any) => {
      
      let vaccinations : Vaccination[] = response;
        for(let v of vaccinations){
          
          let label = document.createElement("label");
          label.innerHTML = v.vaccination+": ";

          let checkbox = document.createElement("input");
          checkbox.type = "checkbox";
          checkbox.id = "checkbox";
          checkbox.value = v.vaccination;
          label.htmlFor = "checkbox";

          let breaker = document.createElement("p");
          document.getElementById("vaccinationanchor")!.appendChild(breaker);
          document.getElementById("vaccinationanchor")!.appendChild(label);
          document.getElementById("vaccinationanchor")!.appendChild(checkbox);
          

        }

    })
  }

  addAllergy(){


  }

  addVaccination(){
    
  }

}
