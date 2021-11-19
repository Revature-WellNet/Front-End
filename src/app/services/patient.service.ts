import { Injectable } from '@angular/core';
import { Patient } from '../models/patient.model';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  public patient: Patient;
  constructor(private patientIn: Patient) { 
    this.patient = patientIn;
  }

  getPatient(){
    // get statement
  }

  updatePatient(){
    // put statement
  }

  updateWeight(weight:number){
    this.patient.weight = weight;
    this.updatePatient();
}

updateHeight(height:number):Patient{
    this.patient.height = height;
    this.updatePatient();
    return this.patient;
}

addVaccination(vaccination:object){
  this.patient.vaccinations?.push(vaccination);
  this.updatePatient();
}

addAllergy(Allergy:object){
  this.patient.allergies?.push(Allergy);
  this.updatePatient();
}

  // input a diagnosis by a nurse

  // approve/deny/override diagnosis by a doctor

  // prescribe a treatment for a patient 


}
