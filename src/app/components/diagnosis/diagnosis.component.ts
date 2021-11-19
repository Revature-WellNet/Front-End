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
  constructor(private patientService:PatientService) { 

  }

  ngOnInit(): void {
  }

  onSubmit(diagnosis: string, symptoms: string){
    console.log(symptoms, ' ', diagnosis);

  }
}
