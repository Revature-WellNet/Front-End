import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Allergy } from 'src/app/models/allergy';
import { Vaccination } from 'src/app/models/vaccination';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-add-allergies-vaccines',
  templateUrl: './add-allergies-vaccines.component.html',
  styleUrls: ['./add-allergies-vaccines.component.css']
})
export class AddAllergiesVaccinesComponent implements OnInit {

  constructor(private location: LocationStrategy, private patientService: PatientService) { }

  public newAllergy!: string;
  public newVaccine!: string;
  public oldAllergies!: string[];
  public oldVaccines!: string[];

  ngOnInit(): void {

    this.generateChecklists
  }

  submitAllergy(newAllergy : string) {
    
    this.patientService.createAllergy(newAllergy);

  }

  submitVaccine(newVaccine : string) {
    
    this.patientService.createVaccination(newVaccine);

  }

  deleteAllergy(oldAllergy : string[]){

    this.patientService.deleteAllergy(oldAllergy);
  }

  deleteVaccine(oldVaccine: string[]){

    this.patientService.deleteVaccine(oldVaccine);
  }

  goBack(){
    this.location.back();
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

              self.oldVaccines.push(checkbox.value);

            } else {

                  const index = self.oldVaccines.indexOf(v.vaccination);  

                  self.oldVaccines.splice(index, 1);
             
            }
          });
          

        }

    })

    
  }


}
