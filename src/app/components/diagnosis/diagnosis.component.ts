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
  constructor(private patientService: PatientService) { 

  }

  ngOnInit() {
  }

  onSubmit(diagnosis: string, symptoms: string){
    console.log(symptoms, ' ', diagnosis);

  }

  rejectDiagnosis(){
    // logic to inform nurse to revisit with patient.
  }

  overrideDiagnosis(diagnosis: string){
    // perhaps format invalid diagnosis (make italic or someting) then append new diagnosis.
  }

  prescribeTreatment(treatment: string){}

}
