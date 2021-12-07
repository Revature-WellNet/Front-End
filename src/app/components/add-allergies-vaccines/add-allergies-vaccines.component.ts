import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Allergy } from 'src/app/models/allergy';
import { Bloodtype } from 'src/app/models/bloodtype';
import { Patient } from 'src/app/models/patient';
import { Sex } from 'src/app/models/sex';
import { Vaccination } from 'src/app/models/vaccination';
import { NurseService } from 'src/app/services/nurse.service';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-add-allergies-vaccines',
  templateUrl: './add-allergies-vaccines.component.html',
  styleUrls: ['./add-allergies-vaccines.component.css']
})
export class AddAllergiesVaccinesComponent implements OnInit {

  constructor(private location: LocationStrategy, private patientService: PatientService, private nurseService : NurseService) { }

  public newAllergy!: string;
  public newVaccine!: string;
  public oldAllergies: string[] = [];
  public oldVaccines: string[] = [];
  public currentAllergies: Allergy[] =[];
  public currentVaccines: Vaccination[] =[];
  public fName! : string;
  public lName! : string;
  //public dob! : Date;
  // public editedPatient! : Patient;
  // public allergies : Allergy[] = [];
  // public vaccinations : Vaccination[] = [];
  // public firstName!: string;
  // public lastName!: string;
  // public dob!: Date;
  // public feet!: number;
  // public inches!: number;
  // public weight!: number;
  // public height: number = 0;
  // public bloodtype! : string;
  // public sex! : string;

  

  ngOnInit(): void {

    this.generateChecklists();
  }

 async submitAllergy(newAllergy : string) {
    
    this.patientService.createAllergy(newAllergy);

   // alert(newAllergy+" added!"); it wont add if its not unique
   await this.patientService.delay(77);

    this.hideCheckboxes(document.getElementById("vaccinationanchor")!)
     this.hideCheckboxes(document.getElementById("allergyanchor")!)
     this.generateChecklists();

  }

 async submitVaccine(newVaccine : string) {
    
    this.patientService.createVaccination(newVaccine);

    //alert(newVaccine+" added!"); it wont add if its not unique
    await this.patientService.delay(77);

    this.hideCheckboxes(document.getElementById("vaccinationanchor")!)
     this.hideCheckboxes(document.getElementById("allergyanchor")!)
     this.generateChecklists();

  }

  async deleteAllergy(oldAllergy : string[]){

    
    // this.patientService.getAllergies().subscribe((response: any) => {
    

    //   let allergies : Allergy[] = response;
    //   let length = allergies.length;

      this.patientService.deleteAllergy(oldAllergy);
      await this.patientService.delay(77);

      this.patientService.getAllergies().subscribe((response: any) => {

        let allergies : Allergy[] = response;

        if(allergies.length < this.currentAllergies.length){

          this.hideCheckboxes(document.getElementById("vaccinationanchor")!)
          this.hideCheckboxes(document.getElementById("allergyanchor")!)
          this.generateChecklists();

          alert("Allergy deleted!");
        }else if(oldAllergy.length>0){
          alert("You can't delete an allergy currently attributed to a patient.");
        }

      })

    // })
    
  }

  async deleteVaccine(oldVaccine: string[]){


    this.patientService.deleteVaccine(oldVaccine);
    await this.patientService.delay(77);

      this.patientService.getVaccinations().subscribe((response: any) => {
        let vaccines : Vaccination[] = response;
        if(vaccines.length < this.currentVaccines.length){
          this.hideCheckboxes(document.getElementById("vaccinationanchor")!)
          this.hideCheckboxes(document.getElementById("allergyanchor")!)
          this.generateChecklists();
          alert("Vaccination deleted!");
        }else if(oldVaccine.length>0){
          alert("You can't delete a vaccination currently attributed to a patient.");
        }
      })
    
  }

  goBack(){
    this.location.back();
  }

  generateChecklists(){

    this.patientService.getAllergies().subscribe((response: any) => {
    

      let allergies : Allergy[] = response;
      this.currentAllergies = response;

      

        for(let a of allergies){
          
          let label = document.createElement("label");
          label.className = "me-1";
          label.innerHTML = a.allergy+": ";

          let checkbox = document.createElement("input");
          checkbox.type = "checkbox";
          checkbox.id = "allergycheckbox";
          checkbox.name = "allergycheckbox";
          checkbox.value = a.allergy;
          label.htmlFor = "checkbox";

          let breaker = document.createElement("p");

          console.log(checkbox.value)
          document.getElementById("allergyanchor")!.appendChild(breaker);
          document.getElementById("allergyanchor")!.appendChild(label);
          document.getElementById("allergyanchor")!.appendChild(checkbox);

          // document.getElementById("allergyanchor2")!.appendChild(breaker2);
          // document.getElementById("allergyanchor2")!.appendChild(label2);
          // document.getElementById("allergyanchor2")!.appendChild(checkbox2);

          var self = this;
          checkbox.addEventListener('change', function() {

            if (this.checked) {

              self.oldAllergies.push(checkbox.value);
              
            } else {
                 
                  const index = self.oldAllergies.indexOf(a.allergy);
                  self.oldAllergies.splice(index, 1);

            }
          });

        }

    })



    this.patientService.getVaccinations().subscribe((response: any) => {
      


      let vaccinations : Vaccination[] = response;
      this.currentVaccines = response;
        for(let v of vaccinations){
          
          let label = document.createElement("label");
          label.className = "me-1";
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

          // document.getElementById("vaccinationanchor2")!.appendChild(breaker2);
          // document.getElementById("vaccinationanchor2")!.appendChild(label2);
          // document.getElementById("vaccinationanchor2")!.appendChild(checkbox2);

          var self = this;
          checkbox.addEventListener('change', function() {

            if (this.checked) {

              self.oldVaccines.push(checkbox.value);

            } else {

                  const index = self.oldVaccines.indexOf(v.vaccination);  

                  self.oldVaccines.splice(index, 1);
             
            }
          });
          

        }

    })
    
  }

  // generatePatientEdit(fName : string, lName : string, dob : string){

  //   this.nurseService.getPatientByNameDOB(fName, lName, dob).subscribe(
  //     (response: Patient[])=> {

  //       if(response[0]){

  //         let editedPatient : Patient = response[0];
  //         console.log(editedPatient);
  //         this.hideCheckboxes(document.getElementById("initialPage")!)
  //         this.editPatient(editedPatient);

  //       }else{
  //         alert("Patient not found.")
  //       }
  //     })

  // }

  // editPatient(editedPatient : Patient){

  //   this.oldAllergies = [];
  //   this.oldVaccines = [];
  //   document.getElementById("editPage")!.style.visibility = 'visible';
  //   this.editedPatient = editedPatient;

  // }

  // onSubmit(firstName: string | null, lastName: string | null, dob: Date | null,


  //   feet : number | null,
  //   inches : number | null,
  //   weight : number | null,
  //   bloodtype : string | null,
  //   sex : string | null){

  //   var height : number = 0;

  //   if(feet){
  //     height = (feet*12);
  //   }
  //   if(inches){
  //     height += inches;
  //   }

  //   if(firstName){
  //     this.editedPatient.firstName = firstName;
  //   }
  //   if(lastName){
  //     this.editedPatient.lastName = lastName;
  //   }
  //   if(dob){
  //     this.editedPatient.dob = dob;
  //   }
  //   if(height){
  //     this.editedPatient.height = height;
  //   }
  //   if(weight){
  //     this.editedPatient.weight = weight;
  //   }
  //   if(this.oldAllergies){
  //     for(let i of this.oldAllergies){
  //       this.addAllergy(i)
  //     }
  //     this.editedPatient.patientAllergies = this.allergies;
  //   }
  //   if(this.oldVaccines){
  //     for(let i of this.oldVaccines){
  //       this.addVaccination(i)
  //     }
  //     this.editedPatient.patientVaccinations = this.vaccinations;
  //   }
  //   if(bloodtype){
  //     this.patientService.getBloodType(bloodtype).subscribe((responseBloodType: any) => { this.setBloodType(responseBloodType)})
  //   }
  //   if(sex){
  //     this.patientService.getSex(sex).subscribe((response: any) => { this.setSex(response)});
  //   }

  //     this.patientService.createPatient(this.editedPatient);    
    
  // }

  hideCheckboxes(body : HTMLElement) {

    while (body.firstChild) {
      body.removeChild(body.firstChild);
    }
  }

  // addAllergy(allergy : string){

  //   this.patientService.getAllergies().subscribe((response: any) => {

  //   for(let a of response){
  //     if(a.allergy == allergy){      

  //       this.allergies.push(a);
  //     }
  //   }

  //   })
  // }

  // addVaccination(vaccination : string){

  //   this.patientService.getVaccinations().subscribe((response: any) => {

  //     for(let v of response){
  //       if(v.vaccination === vaccination){
          
  //         this.vaccinations.push(v);
  //       }
  //     }
  
  //     })
  // }

  // setBloodType(type : Bloodtype){
  //   this.editedPatient.bloodType = type;
  // }

  // setSex(sex : Sex){
  //   this.editedPatient.sex = sex;
  // }

}
