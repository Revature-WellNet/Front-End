import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LocationStrategy } from '@angular/common';
import { Observable } from 'rxjs';
import { Patient } from '../models/patient';
import { environment } from 'src/environments/environment';


// const APIURL="http://localHost:8081/"
@Injectable({
  providedIn: 'root'
})
export class NurseService {

  private patientApiServerUrl = environment.apiBaseUrl;
  // APIURL = "http://localHost:8081/public/patient"

  constructor(private http: HttpClient, private router: Router, private location: LocationStrategy) { }

  // Will turn into observable once have patient table created in database
  getPatients(): Observable<Patient[]>{
    console.log("This will return patients");
    return this.http.get<Patient[]>(`${this.patientApiServerUrl}public/patient`);
  }

  // Will turn into observable once have patient table created in database
  getPatientById(patientId:number): Observable<Patient>{
    console.log("This will return patients");
    return this.http.get<Patient>(`${this.patientApiServerUrl}public/patient/${patientId}`);
  }

  getPatientByFirstName(firstName: string) :Observable<Patient[]>{
    console.log("in function");
    return this.http.get<Patient[]>(`${this.patientApiServerUrl}public/patient/firstname/${firstName}`);
  }

  getPatientByFullName(firstName: string, lastName: string): Observable<Patient[]>{
    return this.http.get<Patient[]>(`${this.patientApiServerUrl}public/patient/fullname/${firstName}/${lastName}`);
  }

  getPatientByNameDOB(firstName: string, lastName: string, dob: string): Observable<Patient[]>{
    return this.http.get<Patient[]>(`${this.patientApiServerUrl}public/patient/fullnamedob/${firstName}/${lastName}/${dob}`);
  }

  //add or update?
  // addPatients(patient:Patient): Observable<Patient>{
    addPatients(): void{
    console.log("This will create a patient");
    // return this.http.post<Patient>(`${this.patientApiServerUrl}/public/patient`, patient);
  }

  getUserInfo(){
    this.router.navigate(['profile']);
  }

  logout(){
    this.router.navigate(["registration"]);
  }

  goBack(): void {
    this.location.back();
  }
}
