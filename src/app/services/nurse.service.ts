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

  private patientApiServerUrl = 'http://patient-service:8095/' //environment.apiBaseUrl;
  // APIURL = "http://localHost:8081//patient"

  constructor(private http: HttpClient, private router: Router, private location: LocationStrategy) { }

  /* Method Name : getPatients
    Description : performs a http get request to obtain all the patients from the
      project back-end
    : no arguments
    Returns : returns an Observable object containing an array of Patient objects 
      obtained from the back end http get request
    References : Referenced in the nurse.component.ts getAllPatients() method
  */
  getPatients(): Observable<Patient[]>{
    console.log("This will return patients");
    return this.http.get<Patient[]>(`${this.patientApiServerUrl}patient`);
  }

  /* Method Name : getPatientsById
    Description : performs a http get request to obtain a patient from the back end
      who corresponds to the primary key numeric argument
    Argument : patientId : The primary key of the patient to get from the back end
    Returns : returns an Observable object containing a patient object obtained from the
      back end http get request
    References : Referenced in the nurse.component.ts getPatientById method
  */
  getPatientById(patientId:number): Observable<Patient>{
    console.log("This will return patients");
    return this.http.get<Patient>(`${this.patientApiServerUrl}patient/${patientId}`);
  }

  /* Method Name : getPatientByFirstName
    Description : performs a http get request to obtain a patient array from the back end
      corresponding to a provided firstName
    Argument : firstName : A string representing a patient's first name to search for
    Returns : An Observable object containing an array of Patient objects obtained from the
      back end http get request
    References : By the nurse.component.ts searchPatByFName method,
      By the doctor.component.ts searchPatByFName method
  */
  getPatientByFirstName(firstName: string) :Observable<Patient[]>{
    console.log("in function");
    console.log(firstName);
    return this.http.get<Patient[]>(`${this.patientApiServerUrl}patient/firstname/${firstName}`);
  }

  /* Method Name : getPatientByFullName
    Description : performs a http get request to obtain a patient array from the back end
      using strings for the patienet first and last name
    Argument : firstName : A string representing a patient's first name
    Argument : lastName : A string representing a patient's last name
    Returns : An observable object containing an array of Patient objects provided
      by the http get request to the back end for a database query
    References : by the nurse.component.ts searchPatByFullName method,
      by the doctor.component.ts searchPatByFullName method
  */
  getPatientByFullName(firstName: string, lastName: string): Observable<Patient[]>{
    return this.http.get<Patient[]>(`${this.patientApiServerUrl}patient/fullname/${firstName}/${lastName}`);
  }

  /* Method Name : getPatientByNameDOB
    Description : performs a http get request to obtain all patients from the back end who
      match a given first name, last name, and date of birth strings in the form of a
      patient array inside an observable object
    Argument : firstName : A string representing a patient's first name
    Argument : lastName : A string representing a patient's last name
    Argument : dob : A String representing a patient's date of birth
    Returns : An observable object containing an array of patient objects returned by the
      http get request to the back end for a corresponding database query
    References : by the nurse.component.ts searchPatNameDate method,
      by the doctor.component.ts searchPatNameDate method
  */
  getPatientByNameDOB(firstName: string, lastName: string, dob: string): Observable<Patient[]>{
    return this.http.get<Patient[]>(`${this.patientApiServerUrl}patient/fullnamedob/${firstName}/${lastName}/${dob}`);
  }

  /* Method name : addPatients
    Description : This method routes the user to the patient check in component when called
    Previously : This method previously was used with an http post request to add a
      patient to the database
    References : by the nurse.component.ts addPatient method *note: unclear if this method
      is called
  */
  //add or update?
  // addPatients(patient:Patient): Observable<Patient>{
  addPatients(): void{
      this.router.navigate(['patientcheckin']);
    // return this.http.post<Patient>(`${this.patientApiServerUrl}/diagnosis/patient`, patient);
  }

  /* Method Name : getUserInfo
    Description : THis method routes the user to the profile component
    References : by the nurse.component.ts getInfo method *note : unclear if this method
      is called
  */
  getUserInfo(){
    this.router.navigate(['profile']);
  }

  /* Method Name : logout
    Description : This method routes the user to the registration componet - This was in use
      before the log in and registration component flow was cemented
    : no known references
  */
  logout(){
    this.router.navigate(["registration"]);
  }

  /* Method Name : goBack
    Description : this method was intended to route the user to the last page which they
      were on
    References : by the nurse.component.ts goBack method *note : should not currently be
      in use
  */
  goBack(): void {
    this.location.back();
  }
}
