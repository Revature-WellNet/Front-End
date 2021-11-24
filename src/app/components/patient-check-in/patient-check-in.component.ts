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
    if(sex && firstName && lastName && dob){
      this.patientService.getSex(sex).subscribe((responseSex : any) => {
        if(bloodtype){
          this.patientService.getBloodType(bloodtype).subscribe((responseBloodType: any) => {

            console.log(bloodtype)
            console.log(sex)
            console.log(responseSex)
            console.log(responseBloodType)

          let bloodObj = responseBloodType;
          let sexObj = responseSex;
          
          let patient : Patient = new Patient(null, firstName, lastName, dob, height, weight, bloodObj, sexObj, vaccinations, allergies);

          console.log(patient)
          this.patientService.createPatient(patient);
        
          })
        }else{

          let bloodObj = null;
          let sexObj = responseSex;

          let patient : Patient = new Patient(null, firstName, lastName, dob, height, weight, bloodObj, sexObj, vaccinations, allergies);
          this.patientService.createPatient(patient);

        }
      })
    }else{
      alert("First and last name, dob and sex is required to add a new patient to Wellnet.")
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
          document.getElementById("vaccinationanchor")!.appendChild(breaker);
          document.getElementById("allergyanchor")!.appendChild(label);
          document.getElementById("allergyanchor")!.appendChild(checkbox);

          var self = this;
          checkbox.addEventListener('change', function() {

            if (this.checked) {

              self.addAllergy(checkbox.value);

            } else {
              
              for(let a in allergies){
                if(allergies[a].allergy === checkbox.value){
                  
                  const index = allergies.indexOf(allergies[a], 0);  
                  if (index > -1) {

                    self.allergies.splice(index, 1);
                    
                 }
                }              
               }

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

              for(let v in vaccinations){
                if(vaccinations[v].vaccination === checkbox.value){
                  const index = vaccinations.indexOf(vaccinations[v], 0);  
                  if (index > -1) {
                    self.vaccinations.splice(index, 1);
                 }
                }              
               }
            }
          });
          

        }

    })

    
  }

  addAllergy(allergy : string){

    this.patientService.getAllergies().subscribe((response: any) => {

    for(let a of response){
      if(a.allergy === allergy){
        
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
