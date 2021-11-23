import { Component, OnInit } from '@angular/core';

import { Patient } from 'src/app/models/patient.model';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-patient-check-in',
  templateUrl: './patient-check-in.component.html',
  styleUrls: ['./patient-check-in.component.css']
})
export class PatientCheckInComponent implements OnInit {
  public patientCheck: boolean = false;
  public firstName!: string;
  public lastName!: string;
  public dob!: Date;
  public patient?: Patient;
  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
  }

  onSubmit(firstName: string, lastName: string, dob: Date){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = dob;
    this.checkInPatient(this.firstName, this.lastName, this.dob);
    console.log(this.firstName, " ", this.lastName," ", this.dob);
  }

  async checkInPatient(firstName: string, lastName: string, dob: Date ){
    const response = await this.patientService.getPatient(firstName, lastName, dob).toPromise();
    this.patient = response;
    this.patientCheck = true;
  if(this.patient == null){
    console.log("null patient");
    //create new or try again?
  }
  else console.log("the patient is:", this.patient.firstName, this.patient.lastName);
  }
}
