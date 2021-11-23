import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-diagnosis',
  templateUrl: './diagnosis.component.html',
  styleUrls: ['./diagnosis.component.css']
})
export class DiagnosisComponent implements OnInit {

  diagnosis: string = ' ';
  symptoms: string = ' ';
  symptom: string = ' ';
  iter: number = 0;
  constructor(private patientService: PatientService) { 

  }

  ngOnInit() {
  }

  onSubmit(diagnosis: string){
    console.log(this.symptoms, ' ', diagnosis);

  }

  addSymptom(symptom: string) {
    
    this.symptoms.concat(symptom[this.iter]+"; ");
    this.iter++;
    console.log(this.iter);
    let row = document.createElement('div');
    row.className = 'row';
    row.innerHTML = 
    '<input type= "text" '+ 
    'class= "form-control col-sm-3" '+ 
    'name= "symptom'+this.iter+'" '+
    'id= ""symptom'+this.iter+'" '+
    '[(ngModel)] = "symptom'+this.iter+'"/> '+
    '<button type="button" class="btn btn-secondary col-sm-1" (click)="addSymptom(symptom'+this.iter+')">+</button> '+
    '<br> ';
  document.querySelector('.symptomInput')?.appendChild(row);
  console.log(row);
}
  //   row.innerHTML = 
  //     '<input type= "text" '+ 
  //     'class= "form-control col-sm-3"'+ 
  //     'name= "symptom'+this.iter+'"'+
  //     'id= ""symptom'+this.iter+'"'+
  //     '[(ngModel)] = ""symptom'+this.iter+'""/>'+
  //     '<button type="button" class="btn btn-secondary col-sm-1" (click)="addSymptom(symptom'+this.iter+')">+</button>'+
  //     '<br>';
  //   document.querySelector('.symptomInput')?.appendChild(row);
  // }
  /*
  rejectDiagnosis(){
    // logic to inform nurse to revisit with patient.
  }

  overrideDiagnosis(diagnosis: string){
    // perhaps format invalid diagnosis (make italic or someting) then append new diagnosis.
  }*/

  prescribeTreatment(treatment: string){}

}
