import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Patient } from '../models/patient';
import { Room } from '../models/rooms/room';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:8081/'
  })
};

@Injectable({
  providedIn: 'root'
})

export class PatientService {

  private backendUrl = 'http://localhost:8081/wellnet/patient'
  public patient!: Patient;  
  public room!: Room;
  constructor(private router: Router, private http: HttpClient) {
 
  }

  createPatient(patient : Patient){

    return this.http.post<Patient>('http://localhost:8081/wellnet/patient', patient).subscribe((response : any) => {console.log(response)});
  }

  getAllergies(){
    return this.http.get<Object[]>('http://localhost:8081/wellnet/patient/allergies');
  }

  getVaccinations(){
    return this.http.get<Object[]>('http://localhost:8081/wellnet/patient/vaccinations');

  }

  getBloodType(name :string){
    return this.http.get<Object[]>('http://localhost:8081/wellnet/patient/bloodtype/'+name);
  }

  getSex(name :string){
    return this.http.get<Object[]>('http://localhost:8081/wellnet/patient/sex/'+name);

  }

  getPatient(firstName: string, lastName: string, dob: Date): Observable<Patient>{
    return this.http.get<Patient>(this.backendUrl+"?firstname="+firstName+"&lastname="+lastName+"&dob="+dob, httpOptions) as Observable<Patient>;
  }

  diagnosePatient(patient: Patient) {
    this.patient = patient;
    this.router.navigate(["diagnosis"]);
  }
/*
  Not enough time to implement and not an MVP user story

  updatePatient(){
    // implement logic to update info in backend
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
    this.patient.vaccinations.push(vaccination);
    this.updatePatient();
  }

  addAllergy(allergy:object){
    this.patient.allergies.push(allergy);
    this.updatePatient();
  }
*/

}
