import { Component, OnInit } from '@angular/core';
import { Allergy } from 'src/app/models/allergy';
import { Bloodtype } from 'src/app/models/bloodtype';
import { Patient } from 'src/app/models/patient'
import { Sex } from 'src/app/models/sex';
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
  public height: number = 0;
  public bloodtype! : string;
  public sex! : string;
  public allergies : Allergy[] = [];
  public vaccinations : Vaccination[] = [];
  public patient! : Patient;

  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
    this.generateChecklists();

  }

  ngOnChanges(): void{

  }

  onSubmit(firstName: string, lastName: string, dob: Date,


    feet : number | null,
    inches : number | null,
    weight : number ,
    bloodtype : string ,
    sex : string,
    allergies : Allergy[],
    vaccinations : Vaccination[]){

    
    if(feet){
      this.height = (feet*12);
    }
    if(inches){
      this.height += inches;
    }
    if(sex && firstName && lastName && dob && bloodtype && this.height && weight){
      this.patientService.getSex(sex).subscribe((responseSex : any) => {
        if(bloodtype){
          this.patientService.getBloodType(bloodtype).subscribe((responseBloodType: any) => {

            console.log(bloodtype)
            console.log(sex)
            console.log(responseSex)
            console.log(responseBloodType)

          let bloodObj = responseBloodType;
          let sexObj = responseSex;
          
          let patient : Patient = new Patient(0, firstName, lastName, dob, this.height, weight, bloodObj, sexObj, vaccinations, allergies);

          console.log(patient);

          this.patientService.createPatient(patient);
        
          })
        }
      })
    }else{
      alert("First and last name, dob, bloodtype, and sex is required to add a new patient to Wellnet.")
    }
  }

generateChecklists(){

    this.patientService.getAllergies().subscribe((response: any) => {
  
      let allergies : Allergy[] = response;
        for(let a of allergies){

          let label = document.createElement("label");
          label.innerHTML = a.allergy+": ";

          let checkbox = document.createElement("input");
          checkbox.type = "checkbox";
          checkbox.id = "allergycheckbox";
          checkbox.name = "allergycheckbox";
          checkbox.value = a.allergy
          label.htmlFor = "checkbox";

          let breaker = document.createElement("p");
          document.getElementById("allergyanchor")!.appendChild(breaker);
          document.getElementById("allergyanchor")!.appendChild(label);
          document.getElementById("allergyanchor")!.appendChild(checkbox);

          var self = this;
          checkbox.addEventListener('change', function() {

            if (this.checked) {

              self.addAllergy(checkbox.value);
              
            } else {
              
              // for(let a in allergies){
              //   if(allergies[a].allergy == checkbox.value){
                  
                  const index = self.allergies.indexOf(a);  
                //  if (index > -1) {

                    self.allergies.splice(index, 1);
                    
                 //}
                //}              
              // }

            }
          });

        }

    })



    this.patientService.getVaccinations().subscribe((response: any) => {
     
      let vaccinations : Vaccination[] = response;
        for(let v of vaccinations){

          let label = document.createElement("label");
          label.innerHTML = v.vaccination+": ";

          let checkbox = document.createElement("input");
          checkbox.type = "checkbox";
          checkbox.id = "vaccinationcheckbox";
          checkbox.name = "vaccinationcheckbox";
          checkbox.value = v.vaccination;
          label.htmlFor = "checkbox";

          let breaker = document.createElement("p");
          document.getElementById("vaccinationanchor")!.appendChild(breaker);
          document.getElementById("vaccinationanchor")!.appendChild(label);
          document.getElementById("vaccinationanchor")!.appendChild(checkbox);

          var self = this;
          checkbox.addEventListener('change', function() {

            if (this.checked) {

              self.addVaccination(checkbox.value);

            } else {

              // for(let v in vaccinations){
              //   if(vaccinations[v].vaccination === checkbox.value){
                  const index = self.vaccinations.indexOf(v);  
                 // if (index > -1) {
                    self.vaccinations.splice(index, 1);
                 //}
              //   }              
              //  }
            }
          });
          

        }

    })

    
  }

  // async checkInPatient(firstName: string, lastName: string, dob: Date ){
  //   const response = await this.patientService.getPatient(firstName, lastName, dob).toPromise();
  //   this.patient = response;
  //   this.patientCheck = true;
  //   if(this.patient == null){
  //     console.log("null patient");
  //     //create new or try again?
  //   }
  //   else {
  //     this.patientService.patient = this.patient;
  //     console.log(`patient updated to ${this.patientService.patient}`)
  //   }
  // }

  addAllergy(allergy : string){

    this.patientService.getAllergies().subscribe((response: any) => {

    for(let a of response){
      if(a.allergy == allergy){      

        this.allergies.push(a);
      }
    }

    })
  }

  addVaccination(vaccination : string){

    this.patientService.getVaccinations().subscribe((response: any) => {

      for(let v of response){
        if(v.vaccination === vaccination){
          
          this.vaccinations.push(v);
        }
      }
  
      })
  }

}
